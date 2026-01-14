import { writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// HTML template
const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&family=Roboto:wght@100..900&display=swap" rel="stylesheet">
    
</head>
<style>
    body {
      font-family: "Roboto", sans-serif;
      font-size: 10.5pt;
        line-height: 1.2;
        color: #333;
        padding: 1em;
    }
    .mono {
        font-family: 'Roboto Mono', monospace;
    }
    table {
        border-collapse: collapse;
        border: 1px solid #ddd;
        width: 100%;
        margin-bottom: 3em;
    }
    table tr:nth-child(even) {
        background-color: #f8f8f8;
    }

    table th, table td {
        border: 1px solid #ddd;
        padding: 2px 4px;
        text-align: left;
    }
    table.autoWidth {
        width: auto;
    }
    table td, table th {
        padding: 6px 6px !important;
    }
    table.noWrap td,table.noWrap th{
        white-space: nowrap;
    }
    td.wrap, th.wrap {
        white-space: normal !important;
    }
    td.right, th.right {
        text-align: right;
    }
    td.center, th.center {
        text-align: center;
    }
    li {
        margin-bottom: 0.2em;
    }

</style>

</head>
<body class="p-4">
<REPLACE/>
</body>
</html>`;

// Helper function to escape HTML
function escapeHtml(str) {
    return String(str ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// Helper function to generate HTML table
function generateTable(options = {}) {
    const {
        title = null,
        anchor = null,
        titleLink = null,
        tableClass = "table table-bordered table-striped noWrap autoWidth",
        headers = [],
        colClass = {},
        rows = [],
        footer = null
    } = options;

    let html = "";

    // Add anchor if present
    if (anchor) {
        html += `<a id="${escapeHtml(anchor)}"></a>`;
    }

    html += `<table class='${escapeHtml(tableClass)}'>`;

    // Title row
    if (title) {
        let titleHtml = escapeHtml(title);
        if (titleLink) {
            titleHtml = `${titleHtml} <a href="${escapeHtml(titleLink)}" style="text-decoration: none;">⬆</a>`;
        }
        html += `<tr><th colspan='${headers.length}'>${titleHtml}</th></tr>`;
    }

    // Header row
    if (headers.length > 0) {
        html += "<tr>";
        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const colClassAttr = colClass[i] ? ` class='${colClass[i]}'` : "";
            html += `<th${colClassAttr}>${escapeHtml(header)}</th>`;
        }
        html += "</tr>\r\n";
    }

    // Data rows
    for (const row of rows) {
        html += "<tr>";
        for (let i = 0; i < headers.length; i++) {
            const cell = row[i] !== undefined ? row[i] : "&nbsp;";
            const colClassAttr = colClass[i] ? ` class='${colClass[i]}'` : "";
            // Cell can be a string (will be escaped) or already HTML
            const cellContent = typeof cell === 'object' && cell.html ? cell.html : escapeHtml(cell);
            html += `<td${colClassAttr}>${cellContent}</td>`;
        }
        html += "</tr>\r\n";
    }

    // Footer
    if (footer) {
        html += `<tr><th colspan='${headers.length}'>${escapeHtml(footer)}</th></tr>`;
    }

    html += "</table>";
    return html;
}

// return array of hex values in sysex format, i.e. 7 bits
function getSysexValueArray(value, length = 2) {
    const rv = [];
    for (let i = 0; i < length; i++) {
        rv.push(("00" + (value & 0x7f).toString(16)).slice(-2));
        value >>= 7;
    }
    return rv.reverse();
}

// Helper function to determine if an entry is a group (has byteLength and parameters with blockName references)
function isGroup(entry) {
    if (!entry || typeof entry !== "object" || !("byteLength" in entry) || !("name" in entry) || !("parameters" in entry)) {
        return false;
    }
    // Groups have parameters where values have blockName property but NO id property
    // Blocks have parameters with id (regular params) or both id and blockName (subblock params)
    const params = entry.parameters;
    if (typeof params !== "object" || Array.isArray(params)) {
        return false;
    }
    const paramValues = Object.values(params);
    if (paramValues.length === 0) {
        return false;
    }
    // Groups: all parameters have blockName but none have id
    // Check if all parameters have blockName and none have id
    return paramValues.every(p => p && p.blockName && !p.id);
}

// Helper function to determine if an entry is a block (has parameters or is referenced by groups)
function isBlock(entry) {
    return entry && typeof entry === "object" && "name" in entry && ("parameters" in entry || "byteLength" in entry);
}

// Generate HTML from ZenProperties
function generateHTMLFromZenProperties(ZenProperties, title, settings = {}) {
    // Default settings
    const defaultSettings = {
        includeSysex: true,
        ...settings
    };

    // Separate blocks and groups from ZenProperties
    const zenBlocks = {};
    const zenGroups = {};
    for (const [key, value] of Object.entries(ZenProperties)) {
        if (isGroup(value)) {
            zenGroups[key] = value;
        } else if (isBlock(value)) {
            zenBlocks[key] = value;
        }
    }

    // Helper function to check if a block has nested blocks (subblocks)
    function hasNestedBlocks(block) {
        if (!block || typeof block !== 'object') return false;
        for (const [key, value] of Object.entries(block)) {
            // Skip standard block properties
            if (key === 'name' || key === 'description' || key === 'byteLength' || key === 'sysexLength' || key === 'parameters') {
                continue;
            }
            // Check if this property is a nested block reference (has blockName and count)
            if (value && typeof value === 'object' && value.blockName && typeof value.count === 'number') {
                return true;
            }
        }
        return false;
    }

    let htmlTOC = `<a id="table-of-contents"></a><h2>Table of Contents</h2>`;

    // Build TOC as tables - Groups first
    const groupNames = Object.keys(zenGroups).sort();
    if (groupNames.length > 0) {
        htmlTOC += `<h3>Groups</h3>`;
        const tocRows = [];
        
        for (const groupName of groupNames) {
            const group = zenGroups[groupName];
            const totalBytes = group.byteLength || 0;
            const decimalPadded = String(totalBytes).padStart(3, " ");
            const totalBytesFormattedHTML = `0x${totalBytes.toString(16).padStart(4, "0")} ${decimalPadded.replace(/ /g, "&nbsp;")}`;
            const paramCount = group.parameters ? Object.keys(group.parameters).length : 0;
            tocRows.push([
                { html: `<a href="#group-${escapeHtml(groupName)}">${escapeHtml(groupName)}</a>` },
                escapeHtml(group.description || ""),
                paramCount,
                { html: `<span class="mono">${totalBytesFormattedHTML}</span>` }
            ]);
        }
        
        htmlTOC += generateTable({
            tableClass: "table table-bordered table-striped noWrap autoWidth",
            headers: ["Name", "Description", "Parameters", "Total Byte Length"],
            colClass: { 2: "right", 3: "right" },
            rows: tocRows
        });
    }

    // Blocks in TOC - include blocks with parameters OR nested blocks
    const blockNames = Object.keys(zenBlocks).filter(name => {
        const block = zenBlocks[name];
        return (block.parameters && Object.keys(block.parameters).length > 0) || hasNestedBlocks(block);
    }).sort();
    if (blockNames.length > 0) {
        htmlTOC += `<h3>Blocks</h3>`;
        const tocRows = [];
        
        for (const blockName of blockNames) {
            const block = zenBlocks[blockName];
            const totalBytes = block.byteLength || 0;
            const decimalPadded = String(totalBytes).padStart(3, " ");
            const totalBytesFormattedHTML = `0x${totalBytes.toString(16).padStart(4, "0")} ${decimalPadded.replace(/ /g, "&nbsp;")}`;
            const paramCount = block.parameters ? Object.keys(block.parameters).length : 0;
            tocRows.push([
                { html: `<a href="#block-${escapeHtml(blockName)}">${escapeHtml(blockName)}</a>` },
                escapeHtml(block.description || ""),
                paramCount,
                { html: `<span class="mono">${totalBytesFormattedHTML}</span>` }
            ]);
        }
        
        htmlTOC += generateTable({
            tableClass: "table table-bordered table-striped noWrap autoWidth",
            headers: ["Name", "Description", "Parameters", "Total Byte Length"],
            colClass: { 2: "right", 3: "right" },
            rows: tocRows
        });
    }

    let htmlTableContent = "";

    // Generate group tables
    for (const [groupName, group] of Object.entries(zenGroups)) {
        const hasSysex = defaultSettings.includeSysex && Object.values(group.parameters).some(b => b && b.blockName && b.sysexOffset && b.sysexOffset.length > 0);
        
        const headers = hasSysex 
            ? ["Block", "Description", "Index", "Sysex Start", "Byte offset", "Block Byte Length", "Total Byte Length"]
            : ["Block", "Description", "Index", "Byte offset", "Block Byte Length", "Total Byte Length"];
        
        const colClass = hasSysex
            ? { 2: "right", 3: "right", 4: "right", 5: "right", 6: "right" }
            : { 2: "right", 3: "right", 4: "right", 5: "right" };

        const rows = [];
        for (const [key, blockRef] of Object.entries(group.parameters)) {
            if (blockRef && blockRef.blockName) {
                // Get block description from the referenced block
                const blockObj = blockRef.block || zenBlocks[blockRef.blockName];
                const blockDesc = blockObj?.description || "";

                for (let i = 0; i < blockRef.count; i++) {
                    const indexDisplay = blockRef.count > 1 ? `[${String(i + 1).padStart(2, " ")}]` : "";
                    // Calculate byteOffset for this array item: base + (index * blockByteLength)
                    const byteOffset = blockRef.byteOffset + (i * blockRef.blockByteLength);
                    const byteOffsetFormatted = `${indexDisplay} 0x${byteOffset.toString(16).padStart(4, "0")} ${String(byteOffset).padStart(4, "0")}`;

                    const row = [];
                    if (i === 0) {
                        row.push({ html: `<a href="#block-${escapeHtml(blockRef.blockName)}">${escapeHtml(blockRef.blockName)}</a>` });
                        row.push(escapeHtml(blockDesc));
                    } else {
                        row.push("");
                        row.push("");
                    }

                    row.push(indexDisplay);

                    if (hasSysex) {
                        // Calculate sysexOffset for this array item
                        const baseSysexParts = blockRef.sysexOffset.split(" ").map(s => parseInt(s, 16));
                        const sysexItemSize = blockRef.sysexItemSize || blockRef.blockByteLength;
                        const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                        const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                        row.push({ html: `<span class="mono">${sysexOffset}</span>` });
                    }

                    row.push({ html: `<span class="mono">${byteOffsetFormatted}</span>` });

                    if (i === 0) {
                        row.push(blockRef.blockByteLength);
                        row.push(blockRef.byteLength);
                    } else {
                        row.push("");
                        row.push("");
                    }

                    rows.push(row);
                }
            }
        }
        
        htmlTableContent += generateTable({
            title: `Group: ${groupName}`,
            anchor: `group-${groupName}`,
            titleLink: "#table-of-contents",
            tableClass: "table table-bordered table-striped noWrap autoWidth",
            headers,
            colClass,
            rows,
            footer: `Group: ${groupName} : Total Length Bytes: 0x${group.byteLength.toString(16).padStart(4, "0")} ${group.byteLength}`
        });
    }

    // Generate block tables
    for (const [blockName, block] of Object.entries(zenBlocks)) {
        const hasParams = block.parameters && Object.keys(block.parameters).length > 0;
        const hasNested = hasNestedBlocks(block);
        
        if (hasParams || hasNested) {
            if (hasParams) {
                // Block with parameters - show parameter table
                const headers = defaultSettings.includeSysex
                    ? ["ID", "Description", "SXOff - len", "Byte offset - len", "Min", "Max", "Offset", "Init", "Values"]
                    : ["ID", "Description", "Byte offset - len", "Min", "Max", "Init", "Values"];
                
                const colClass = defaultSettings.includeSysex
                    ? { 4: "right", 5: "right", 6: "right", 7: "right", 8: "wrap" }
                    : { 3: "right", 4: "right", 5: "right", 6: "wrap" };

                const rows = [];
                for (const param of Object.values(block.parameters)) {
                    const valuesStr = param.values ? Object.values(param.values).join(", ") : "";
                    
                    // Check if this is a subblock - show each array entry on a new line like groups
                    if (param.blockName) {
                        // Get the referenced block for name and description
                        const subBlockObj = zenBlocks[param.blockName];
                        const subBlockName = subBlockObj?.name || param.blockName;
                        const subBlockDesc = subBlockObj?.description || param.description;
                        
                        // Show each array entry on a separate line
                        for (let i = 0; i < param.count; i++) {
                            const indexDisplay = param.count > 1 ? `[${String(i + 1).padStart(2, " ")}]` : "";
                            // Calculate byteOffset for this array item: base + (index * blockByteLength)
                            const byteOffset = param.byteOffset + (i * param.blockByteLength);
                            const byteOffsetFormatted = `${indexDisplay} 0x${byteOffset.toString(16).padStart(4, "0")} ${String(byteOffset).padStart(4, "0")} - 0x${param.blockByteLength.toString(16).padStart(4, "0")} ${String(param.blockByteLength).padStart(2, "0")}`;
                            
                            const row = [];
                            if (i === 0) {
                                // First row: show subblock name (as link) and description
                                row.push(param.id);
                                row.push({ html: `<a href="#block-${escapeHtml(param.blockName)}">${escapeHtml(subBlockName)}</a>` });
                                
                                if (defaultSettings.includeSysex) {
                                    // Calculate sysexOffset for this array item
                                    const subBlockObj = zenBlocks[param.blockName];
                                    const sysexItemSize = subBlockObj?.sysexLength || param.blockByteLength;
                                    const baseSysexParts = param.sysexOffset.split(" ").map(s => parseInt(s, 16));
                                    const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                                    const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                                    row.push({ html: `<span class="mono">${sysexOffset}</span>` });
                                    row.push({ html: `<span class="mono">${byteOffsetFormatted}</span>` });
                                } else {
                                    row.push({ html: `<span class="mono">${byteOffsetFormatted}</span>` });
                                }
                                
                                row.push("-", "-", "-", "-", "");
                            } else {
                                // Subsequent rows: empty name/description, show index and offset
                                row.push("");
                                row.push("");
                                
                                if (defaultSettings.includeSysex) {
                                    const baseSysexParts = param.sysexOffset.split(" ").map(s => parseInt(s, 16));
                                    const subBlockObj = zenBlocks[param.blockName];
                                    const sysexItemSize = subBlockObj?.sysexLength || param.blockByteLength;
                                    const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                                    const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                                    row.push({ html: `<span class="mono">${sysexOffset}</span>` });
                                    row.push({ html: `<span class="mono">${byteOffsetFormatted}</span>` });
                                } else {
                                    row.push({ html: `<span class="mono">${byteOffsetFormatted}</span>` });
                                }
                                
                                row.push("-", "-", "-", "-", "");
                            }
                            
                            rows.push(row);
                        }
                    } else {
                        // Regular parameter
                        const valuesStr = param.values ? Object.values(param.values).join(", ") : "";
                        const row = [];
                        row.push(param.id);
                        row.push(escapeHtml(param.description));
                        
                        if (defaultSettings.includeSysex) {
                            const sxOff = getSysexValueArray(param.sysexOffset || 0, 2);
                            const sysexFormatted = ` ${sxOff[0]} ${sxOff[1]} - ${(param.lengthSysex || 0).toString(16).padStart(2, "0")}`;
                            const byteOffsetFormatted = `0x${param.byteOffset.toString(16).padStart(4, "0")} ${String(param.byteOffset).padStart(4, "0")} - 0x${param.byteLength.toString(16).padStart(4, "0")} ${String(param.byteLength).padStart(2, "0")}`;
                            const dataRange0 = param.dataRange ? param.dataRange[0] : "-";
                            const dataRange1 = param.dataRange ? param.dataRange[1] : "-";
                            row.push({ html: `<span class="mono">${sysexFormatted}</span>` });
                            row.push({ html: `<span class="mono">${byteOffsetFormatted}</span>` });
                            row.push(dataRange0, dataRange1, param.sysexValueOffset || 0, param.initValue || 0, valuesStr);
                        } else {
                            const byteOffsetFormatted = `0x${param.byteOffset.toString(16).padStart(4, "0")} ${String(param.byteOffset).padStart(4, "0")} - 0x${param.byteLength.toString(16).padStart(4, "0")} ${String(param.byteLength).padStart(2, "0")}`;
                            const dataRange0 = param.dataRange ? param.dataRange[0] : "-";
                            const dataRange1 = param.dataRange ? param.dataRange[1] : "-";
                            row.push({ html: `<span class="mono">${byteOffsetFormatted}</span>` });
                            row.push(dataRange0, dataRange1, param.initValue || 0, valuesStr);
                        }
                        
                        rows.push(row);
                    }
                }
                
                // Add footer with block size
                const footer = defaultSettings.includeSysex && block.sysexLength
                    ? (() => {
                        const syOffset = getSysexValueArray(block.sysexLength, 2);
                        return `Block: ${block.name} : Total Length Sysex: ${syOffset[0]} ${syOffset[1]} Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                    })()
                    : `Block: ${block.name} : Total Length Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                
                htmlTableContent += generateTable({
                    title: `Block: ${block.name}${block.description ? ` - ${block.description}` : ""}`,
                    anchor: `block-${block.name}`,
                    titleLink: "#table-of-contents",
                    tableClass: "table table-bordered table-striped noWrap autoWidth",
                    headers,
                    colClass,
                    rows,
                    footer
                });
            } else if (hasNested) {
                // Block with only nested blocks (no parameters) - show nested blocks in main table
                const nestedRows = [];
                for (const [key, nestedBlock] of Object.entries(block)) {
                    // Skip standard block properties
                    if (key === 'name' || key === 'description' || key === 'byteLength' || key === 'sysexLength' || key === 'parameters') {
                        continue;
                    }
                    // Check if this is a nested block reference
                    if (nestedBlock && typeof nestedBlock === 'object' && nestedBlock.blockName && typeof nestedBlock.count === 'number') {
                        const nestedBlockObj = zenBlocks[nestedBlock.blockName];
                        const nestedDesc = nestedBlockObj?.description || "";
                        nestedRows.push([
                            { html: `<a href="#block-${escapeHtml(nestedBlock.blockName)}">${escapeHtml(nestedBlock.blockName)}</a>` },
                            escapeHtml(nestedDesc),
                            nestedBlock.count.toString()
                        ]);
                    }
                }
                
                const footer = defaultSettings.includeSysex && block.sysexLength
                    ? (() => {
                        const syOffset = getSysexValueArray(block.sysexLength, 2);
                        return `Block: ${block.name} : Total Length Sysex: ${syOffset[0]} ${syOffset[1]} Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                    })()
                    : `Block: ${block.name} : Total Length Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                
                htmlTableContent += generateTable({
                    title: `Block: ${block.name}${block.description ? ` - ${block.description}` : ""}`,
                    anchor: `block-${block.name}`,
                    titleLink: "#table-of-contents",
                    tableClass: "table table-bordered table-striped noWrap autoWidth",
                    headers: ["Nested Block", "Description", "Count"],
                    colClass: { 2: "right" },
                    rows: nestedRows,
                    footer
                });
            }
            
            // If block has both parameters and nested blocks, create a separate table for nested blocks
            if (hasParams && hasNested) {
                const nestedRows = [];
                for (const [key, nestedBlock] of Object.entries(block)) {
                    // Skip standard block properties
                    if (key === 'name' || key === 'description' || key === 'byteLength' || key === 'sysexLength' || key === 'parameters') {
                        continue;
                    }
                    // Check if this is a nested block reference
                    if (nestedBlock && typeof nestedBlock === 'object' && nestedBlock.blockName && typeof nestedBlock.count === 'number') {
                        const nestedBlockObj = zenBlocks[nestedBlock.blockName];
                        const nestedDesc = nestedBlockObj?.description || "";
                        nestedRows.push([
                            { html: `<a href="#block-${escapeHtml(nestedBlock.blockName)}">${escapeHtml(nestedBlock.blockName)}</a>` },
                            escapeHtml(nestedDesc),
                            nestedBlock.count.toString()
                        ]);
                    }
                }
                
                const footer = defaultSettings.includeSysex && block.sysexLength
                    ? (() => {
                        const syOffset = getSysexValueArray(block.sysexLength, 2);
                        return `Block: ${block.name} : Total Length Sysex: ${syOffset[0]} ${syOffset[1]} Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                    })()
                    : `Block: ${block.name} : Total Length Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                
                htmlTableContent += generateTable({
                    title: `Block: ${block.name}${block.description ? ` - ${block.description}` : ""} - Nested Blocks`,
                    anchor: `block-${block.name}-nested`,
                    titleLink: "#table-of-contents",
                    tableClass: "table table-bordered table-striped noWrap autoWidth",
                    headers: ["Nested Block", "Description", "Count"],
                    colClass: { 2: "right" },
                    rows: nestedRows,
                    footer
                });
            }
        }
    }

    return `<h1>${title}</h1>${htmlTOC}${htmlTableContent}`;
}

/**
 * Generate HTML from a ZenProperties object
 * @param {Object} ZenProperties - The ZenProperties object (from generated JS/JSON)
 * @param {string} title - Title for the HTML document
 * @param {string} filename - Output filename (will be written to /tmp/extract/)
 * @param {Object} settings - Optional settings (includeSysex: boolean, default true)
 */
export function generateHTML(ZenProperties, title, filename, settings = {}) {
    // Generate HTML content
    const htmlContent = generateHTMLFromZenProperties(ZenProperties, title, settings);
    
    // Replace template placeholder and write file
    const HTML = HTML_TEMPLATE.replace("<REPLACE/>", htmlContent);
    const outputPath = resolve(__dirname, filename);
    writeFileSync(outputPath, HTML);
    
    console.log(`HTML generated: ${outputPath}`);
}
