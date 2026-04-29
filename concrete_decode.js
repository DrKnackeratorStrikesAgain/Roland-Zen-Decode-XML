import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { basename, dirname, join } from "path";
import { XMLParser } from "fast-xml-parser";

const DEFAULT_OUTPUT_DIR = "out";
const BMC_XML = "db_bmc0.xml";

function folderToOutputBase(folderBasename) {
    return folderBasename.endsWith("_xml")
        ? folderBasename.slice(0, -"_xml".length)
        : folderBasename;
}

function parseFolderArg(folderArg) {
    const folderPath = folderArg.replace(/[/\\]+$/, "");
    const outputBase = folderToOutputBase(basename(folderPath));
    return { folderPath, outputBase };
}

function getElementInfo(el) {
    const keys = Object.keys(el);
    const elementName = keys.find(key => key !== ":@" && key !== "#comment" && !key.startsWith("?"));
    return {
        elementName,
        attrs: el[":@"] || {},
        children: elementName ? el[elementName] || [] : []
    };
}

function getRealChildren(children) {
    return children
        .map(getElementInfo)
        .filter(info => info.elementName);
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function parseSysexAddress(value, label = "address") {
    const parts = String(value ?? "")
        .trim()
        .split(/[.\s]+/)
        .filter(Boolean);

    if (parts.length === 0) {
        throw new Error(`Missing ${label}`);
    }
    if (parts.length > 4) {
        throw new Error(`${label} has more than 4 sysex bytes: ${value}`);
    }

    const padded = [...Array(4 - parts.length).fill("0"), ...parts];
    return padded.reduce((total, part) => {
        const parsed = parseInt(part, 16);
        if (!Number.isFinite(parsed) || parsed < 0 || parsed > 0x7f) {
            throw new Error(`${label} byte must be 00-7F, got '${part}' in '${value}'`);
        }
        return (total * 128) + parsed;
    }, 0);
}

function formatSysexAddress(value) {
    if (!Number.isFinite(value) || value < 0 || value > 0x0fffffff) {
        return `out of range (${value})`;
    }

    const bytes = [];
    let remaining = value;
    for (let i = 0; i < 4; i++) {
        bytes.unshift(remaining % 128);
        remaining = Math.floor(remaining / 128);
    }
    return bytes.map(byte => byte.toString(16).toUpperCase().padStart(2, "0")).join(".");
}

class NumDefs {
    constructor() {
        this.table = {};
    }

    set(name, value) {
        this.table[name] = value;
    }

    numberOrNumDef(value, fallback = 1) {
        if (value === undefined || value === null || value === "") {
            return fallback;
        }

        const text = String(value).trim();
        if (/^-?\d+$/.test(text)) {
            return parseInt(text, 10);
        }

        if (this.table[text] === undefined) {
            throw new Error(`Missing numdef '${text}'`);
        }
        return this.table[text];
    }
}

function parseDocument(xmlFile) {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
        allowBooleanAttributes: true,
        preserveOrder: true,
        commentPropName: "#comment"
    });

    const xml = readFileSync(xmlFile, "utf-8");
    const parsed = parser.parse(xml);
    const rootEl = parsed.find(el => {
        const keys = Object.keys(el);
        return keys.some(key => key !== ":@" && key !== "#comment" && !key.startsWith("?"));
    });

    if (!rootEl) {
        throw new Error(`Could not find root element in ${xmlFile}`);
    }

    const { elementName, children } = getElementInfo(rootEl);
    if (elementName !== "db") {
        throw new Error(`Expected root <db>, got <${elementName}>`);
    }

    const numDefs = new NumDefs();
    const concreteSections = [];
    const clumps = {};

    for (const child of getRealChildren(children)) {
        if (child.elementName === "numdef") {
            numDefs.set(child.attrs["@_name"], parseInt(child.attrs["@_num"], 10));
        } else if (child.elementName === "concrete") {
            concreteSections.push(child);
        } else if (child.elementName === "clump") {
            clumps[child.attrs["@_name"]] = child;
        }
    }

    return { numDefs, concreteSections, clumps };
}

function attr(attrs, name, fallback = "") {
    return attrs[`@_${name}`] ?? fallback;
}

function shouldHideArrayIndex(index, total) {
    return total > 1 && index > 1;
}

function safeDomId(value) {
    return String(value).replace(/[^a-zA-Z0-9_-]/g, "_");
}

function formatDescription(description, row) {
    const index = row.kind === "clump" && row.innerIndexValue
        ? row.innerIndexValue
        : row.indexValue;

    if (!index) {
        return description;
    }

    return String(description ?? "").replace(/\((0?\d+)\$\)/g, (_match, widthText) => {
        const width = parseInt(widthText, 10);
        return `(${String(index).padStart(width, "0")})`;
    });
}

function rowModel(row) {
    const isClump = row.kind === "clump";
    const outerStride = row.outerStride || 1;
    return {
        id: row.id,
        kind: row.kind,
        type: row.type,
        indexTotal: row.indexTotal,
        innerIndexTotal: row.innerIndexTotal,
        outerStride,
        address: row.address,
        itemSize: row.itemSize,
        outerSize: isClump ? row.itemSize * outerStride : row.itemSize,
        innerSize: isClump ? row.itemSize : 0,
        count: row.count,
        desc: row.desc
    };
}

function shouldShowOuterSize(rowOrModel, innerIndex = rowOrModel.innerIndexValue) {
    return rowOrModel.kind !== "clump" || innerIndex === 1;
}

function buildNormalRows(entry, concreteId, currentAddress, numDefs) {
    const attrs = entry.attrs;
    const id = attr(attrs, "id", "(unnamed)");
    const kind = entry.elementName;
    const type = kind === "group"
        ? attr(attrs, "group")
        : attr(attrs, "baseblock");
    const itemSize = parseSysexAddress(attr(attrs, "size", "00.00.01"), `${concreteId}.${id} size`);
    const count = numDefs.numberOrNumDef(attr(attrs, "array", ""), 1);

    return {
        rows: [{
            id,
            kind,
            type,
            index: count > 1 ? 1 : "",
            indexValue: 1,
            indexTotal: count,
            innerIndex: "",
            innerIndexValue: null,
            innerIndexTotal: 1,
            groupKey: `${concreteId}:${id}:${currentAddress}`,
            address: currentAddress,
            itemSize,
            count,
            desc: attr(attrs, "desc")
        }],
        consumed: itemSize * count
    };
}

function buildClumpRows(entry, concreteId, currentAddress, numDefs, clumps) {
    const attrs = entry.attrs;
    const id = attr(attrs, "id", "(unnamed)");
    const clumpName = attr(attrs, "clump");
    const clumpDef = clumps[clumpName];
    const itemSize = parseSysexAddress(attr(attrs, "size", "00.00.01"), `${concreteId}.${id} size`);
    const outerCount = numDefs.numberOrNumDef(attr(attrs, "array", ""), 1);

    if (!clumpDef) {
        return {
            rows: [{
                id,
                kind: "clump",
                type: `${clumpName} (missing definition)`,
                index: "",
                indexValue: null,
                indexTotal: outerCount,
                innerIndex: "",
                innerIndexValue: null,
                innerIndexTotal: 1,
                groupKey: `${concreteId}:${id}:${currentAddress}`,
                address: currentAddress,
                itemSize,
                count: outerCount,
                desc: attr(attrs, "desc")
            }],
            consumed: itemSize * outerCount
        };
    }

    const clumpChildren = getRealChildren(clumpDef.children).map(child => {
        const childAttrs = child.attrs;
        return {
            elementName: child.elementName,
            id: attr(childAttrs, "id", child.elementName),
            type: child.elementName === "group"
                ? attr(childAttrs, "group")
                : attr(childAttrs, "baseblock", attr(childAttrs, "clump")),
            count: numDefs.numberOrNumDef(attr(childAttrs, "array", ""), 1)
        };
    });
    const rows = [];
    const innerTotal = clumpChildren.reduce((total, child) => total + child.count, 0);
    let childOffset = 0;

    for (const child of clumpChildren) {
        rows.push({
            id: `${id}.${child.id}`,
            kind: "clump",
            type: `${clumpName} -> ${child.type}`,
            index: outerCount > 1 ? 1 : "",
            indexValue: 1,
            indexTotal: outerCount,
            innerIndex: child.count > 1 ? 1 : "",
            innerIndexValue: 1,
            innerIndexTotal: child.count,
            outerStride: Math.max(innerTotal, 1),
            groupKey: `${concreteId}:${id}:${child.id}:${currentAddress}`,
            address: currentAddress + (childOffset * itemSize),
            itemSize,
            count: `${outerCount} x ${child.count}`,
            desc: attr(attrs, "desc")
        });
        childOffset += child.count;
    }

    return {
        rows,
        consumed: itemSize * outerCount * Math.max(innerTotal, 1)
    };
}

function buildConcreteReport(section, numDefs, clumps) {
    const concreteId = attr(section.attrs, "id", "(unnamed)");
    const baseAddress = parseSysexAddress(attr(section.attrs, "adrs"), `${concreteId} adrs`);
    let currentAddress = baseAddress;
    const rows = [];

    for (const entry of getRealChildren(section.children)) {
        if (entry.elementName === "offset") {
            currentAddress = baseAddress + parseSysexAddress(attr(entry.attrs, "adrs"), `${concreteId} offset`);
            rows.push({
                id: "offset",
                kind: "offset",
                type: "base + offset",
                index: "",
                indexValue: null,
                indexTotal: 1,
                innerIndex: "",
                innerIndexValue: null,
                innerIndexTotal: 1,
                groupKey: `${concreteId}:offset:${currentAddress}`,
                address: currentAddress,
                itemSize: 0,
                count: "",
                desc: attr(entry.attrs, "adrs")
            });
            continue;
        }

        if (entry.elementName === "group" || entry.elementName === "block") {
            const { rows: entryRows, consumed } = buildNormalRows(entry, concreteId, currentAddress, numDefs);
            rows.push(...entryRows);
            currentAddress += consumed;
            continue;
        }

        if (entry.elementName === "clump") {
            const { rows: entryRows, consumed } = buildClumpRows(entry, concreteId, currentAddress, numDefs, clumps);
            rows.push(...entryRows);
            currentAddress += consumed;
            continue;
        }

        rows.push({
            id: "(unknown)",
            kind: entry.elementName,
            type: "",
            index: "",
            indexValue: null,
            indexTotal: 1,
            innerIndex: "",
            innerIndexValue: null,
            innerIndexTotal: 1,
            groupKey: `${concreteId}:unknown:${currentAddress}`,
            address: currentAddress,
            itemSize: 0,
            count: "",
            desc: "Unhandled concrete child"
        });
    }

    return {
        id: concreteId,
        baseAddress,
        rows
    };
}

function generateTable(report) {
    const body = report.rows.map(row => {
        const modelData = rowModel(row);
        const model = escapeHtml(JSON.stringify(modelData));
        const outerTarget = safeDomId(`${report.id}:${row.groupKey}:outer`);
        const innerTarget = safeDomId(`${report.id}:${row.groupKey}:outer-1:inner`);
        const outerControls = [];
        const innerControls = [];

        if (row.indexTotal > 1) {
            outerControls.push(`<button type="button" class="toggle outer-toggle" data-model="${model}" data-target="${outerTarget}" onclick="toggleOuter(this)">+</button> outer array`);
        }
        if (row.innerIndexTotal > 1) {
            innerControls.push(`<button type="button" class="toggle inner-toggle" data-model="${model}" data-target="${innerTarget}" onclick="toggleInner(this)">+</button> inner array`);
        }

        return `
        <tr>
            <td class="controls outer-details">${outerControls.join("<br>")}</td>
            <td class="controls inner-details">${innerControls.join("<br>")}</td>
            <td>${escapeHtml(row.id)}</td>
            <td>${escapeHtml(row.kind)}</td>
            <td>${escapeHtml(row.type)}</td>
            <td class="right">${escapeHtml(row.index)}</td>
            <td class="right">${escapeHtml(row.innerIndex)}</td>
            <td class="mono">${escapeHtml(formatSysexAddress(row.address))}</td>
            <td class="mono">${modelData.outerSize && shouldShowOuterSize(row) ? escapeHtml(formatSysexAddress(modelData.outerSize)) : ""}</td>
            <td class="mono">${modelData.innerSize ? escapeHtml(formatSysexAddress(modelData.innerSize)) : ""}</td>
            <td>${escapeHtml(row.count)}</td>
            <td>${escapeHtml(formatDescription(row.desc, row))}</td>
        </tr>`;
    }).join("");

    return `
        <h2>${escapeHtml(report.id)} <span class="mono">${escapeHtml(formatSysexAddress(report.baseAddress))}</span></h2>
        <table>
            <thead>
                <tr>
                    <th>Details</th>
                    <th>Inner Details</th>
                    <th>Id</th>
                    <th>Kind</th>
                    <th>Type</th>
                    <th>Array</th>
                    <th>Inner</th>
                    <th>Start</th>
                    <th>Outer Size</th>
                    <th>Inner Size</th>
                    <th>Count</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>${body}</tbody>
        </table>`;
}

function generateHtml(xmlFile, reports) {
    const content = reports.map(generateTable).join("\n");
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Concrete decode: ${escapeHtml(xmlFile)}</title>
    <style>
        body { color: #222; font-family: Arial, sans-serif; font-size: 13px; padding: 1rem; }
        h1, h2 { font-weight: 600; }
        table { border-collapse: collapse; margin: 0 0 2rem 0; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 4px 6px; text-align: left; vertical-align: top; }
        th { background: #f0f0f0; position: sticky; top: 0; }
        tr:nth-child(even) { background: #fafafa; }
        .mono { font-family: "Roboto Mono", Consolas, monospace; white-space: nowrap; }
        .right { text-align: right; }
        .controls { white-space: nowrap; }
        .toggle { cursor: pointer; font-family: monospace; margin-right: 0.25rem; min-width: 1.5rem; }
        .outer-details { background: #f7fbff; }
        .inner-details { background: #fffaf2; }
    </style>
    <script>
        function escapeHtml(value) {
            return String(value ?? "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;");
        }

        function formatSysexAddress(value) {
            const bytes = [];
            let remaining = value;
            for (let i = 0; i < 4; i++) {
                bytes.unshift(remaining % 128);
                remaining = Math.floor(remaining / 128);
            }
            return bytes.map(byte => byte.toString(16).toUpperCase().padStart(2, "0")).join(".");
        }

        function formatDescription(description, model, outerIndex, innerIndex) {
            const index = model.kind === "clump" ? innerIndex : outerIndex;
            return String(description ?? "").replace(/\\((0?\\d+)\\$\\)/g, (_match, widthText) => {
                const width = parseInt(widthText, 10);
                return "(" + String(index).padStart(width, "0") + ")";
            });
        }

        function rowAddress(model, outerIndex, innerIndex) {
            const outerOffset = model.kind === "clump"
                ? (outerIndex - 1) * model.outerStride * model.itemSize
                : (outerIndex - 1) * model.itemSize;
            const innerOffset = model.kind === "clump"
                ? (innerIndex - 1) * model.itemSize
                : 0;
            return model.address + outerOffset + innerOffset;
        }

        function buildInnerButton(model, outerIndex, parentOuterTarget) {
            if (model.innerIndexTotal <= 1) return "";
            const target = parentOuterTarget + "_inner_" + outerIndex;
            const parentAttr = parentOuterTarget ? ' data-parent-outer="' + parentOuterTarget + '"' : "";
            return '<button type="button" class="toggle inner-toggle" data-model="' + escapeHtml(JSON.stringify(model)) + '" data-target="' + target + '"' + parentAttr + ' onclick="toggleInner(this)">+</button> inner array';
        }

        function buildRow(model, outerIndex, innerIndex, className = "", parentOuterTarget = "") {
            const arrayText = model.indexTotal > 1 ? outerIndex : "";
            const innerText = model.innerIndexTotal > 1 ? innerIndex : "";
            const parentAttr = parentOuterTarget ? ' data-parent-outer="' + parentOuterTarget + '"' : "";
            return '<tr' + (className ? ' class="' + className + '"' : '') + parentAttr + '>' +
                '<td class="controls outer-details"></td>' +
                '<td class="controls inner-details">' + (innerIndex === 1 ? buildInnerButton(model, outerIndex, parentOuterTarget) : "") + '</td>' +
                '<td>' + escapeHtml(model.id) + '</td>' +
                '<td>' + escapeHtml(model.kind) + '</td>' +
                '<td>' + escapeHtml(model.type) + '</td>' +
                '<td class="right">' + escapeHtml(arrayText) + '</td>' +
                '<td class="right">' + escapeHtml(innerText) + '</td>' +
                '<td class="mono">' + escapeHtml(formatSysexAddress(rowAddress(model, outerIndex, innerIndex))) + '</td>' +
                '<td class="mono">' + (model.outerSize && (model.kind !== "clump" || innerIndex === 1) ? escapeHtml(formatSysexAddress(model.outerSize)) : "") + '</td>' +
                '<td class="mono">' + (model.innerSize ? escapeHtml(formatSysexAddress(model.innerSize)) : "") + '</td>' +
                '<td>' + escapeHtml(model.count) + '</td>' +
                '<td>' + escapeHtml(formatDescription(model.desc, model, outerIndex, innerIndex)) + '</td>' +
                '</tr>';
        }

        function removeRows(selector) {
            document.querySelectorAll(selector).forEach(row => row.remove());
        }

        function toggleOuter(button) {
            const target = button.dataset.target;
            const existing = document.querySelectorAll("." + target);
            if (existing.length > 0) {
                removeRows("." + target);
                removeRows('[data-parent-outer="' + target + '"]');
                button.textContent = "+";
                return;
            }

            const model = JSON.parse(button.dataset.model);
            let html = "";
            for (let outerIndex = 2; outerIndex <= model.indexTotal; outerIndex++) {
                html += buildRow(model, outerIndex, 1, target, target);
            }
            button.closest("tr").insertAdjacentHTML("afterend", html);
            button.textContent = "-";
        }

        function toggleInner(button) {
            const target = button.dataset.target;
            const existing = document.querySelectorAll("." + target);
            if (existing.length > 0) {
                removeRows("." + target);
                button.textContent = "+";
                return;
            }

            const model = JSON.parse(button.dataset.model);
            const outerIndex = parseInt(button.closest("tr").children[5].textContent || "1", 10);
            const parentOuterTarget = button.dataset.parentOuter || "";
            let html = "";
            for (let innerIndex = 2; innerIndex <= model.innerIndexTotal; innerIndex++) {
                html += buildRow(model, outerIndex, innerIndex, target, parentOuterTarget);
            }
            button.closest("tr").insertAdjacentHTML("afterend", html);
            button.textContent = "-";
        }
    </script>
</head>
<body>
    <h1>Concrete decode</h1>
    <p>Source: <span class="mono">${escapeHtml(xmlFile)}</span></p>
    ${content}
</body>
</html>`;
}

function getOutputPath(outputBase, outputArg) {
    if (outputArg.endsWith(".html")) {
        return outputArg;
    }

    return join(outputArg, `${outputBase}_concrete.html`);
}

const folderArg = process.argv[2];
if (!folderArg) {
    console.error(`Usage: node concrete_decode.js <folder_name_xml> [${DEFAULT_OUTPUT_DIR} | path/to/out.html]`);
    console.error(`  Reads <folder>/${BMC_XML} and writes out/<basename_without_xml>_concrete.html`);
    process.exit(1);
}

const { folderPath, outputBase } = parseFolderArg(folderArg);
const inputFile = join(folderPath, BMC_XML);
const outputArg = process.argv[3] || DEFAULT_OUTPUT_DIR;
const outputFile = getOutputPath(outputBase, outputArg);
const outputDir = dirname(outputFile);

if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

const { numDefs, concreteSections, clumps } = parseDocument(inputFile);
const reports = concreteSections.map(section => buildConcreteReport(section, numDefs, clumps));
writeFileSync(outputFile, generateHtml(inputFile, reports));

console.log(`Wrote ${outputFile}`);
