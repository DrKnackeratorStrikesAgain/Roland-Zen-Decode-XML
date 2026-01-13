import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { XMLParser } from "fast-xml-parser";
import { TableGen } from "./TableGen.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function err(text) {
    console.error(text);
    return -1;
}

function pr(val) {
    console.log(val);
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

// string of sysex hex to decimal
function convertSysexValue(string) {
    const parts = string.split(/[ .]/);
    if (parts.length === 0) return;
    parts.reverse();
    let total = 0;
    for (let i = 0; i < parts.length; i++) {
        total += parseInt(parts[i], 16) * Math.pow(128, i);
    }
    return total;
}

// Helper to extract element info from preserveOrder element
function getElementInfo(el) {
    const keys = Object.keys(el);
    const elementName = keys.find(k => k !== ":@");
    const attrs = el[":@"] || {};
    const children = el[elementName] || [];
    return { elementName, attrs, children };
}

class NumDefs {
    static table = {};

    static clear() {
        NumDefs.table = {};
    }

    static set(name, value) {
        if (NumDefs.table[name] !== undefined && NumDefs.table[name] !== value) {
            throw new Error(`NumDef ${name} is being set to a different value was ${NumDefs.table[name]} now ${value}`);
        }
        NumDefs.table[name] = value;
    }

    static get(name) {
        if (NumDefs.table[name] === undefined) {
            throw new Error(`missing numdef '${name}'`);
        }
        return NumDefs.table[name];
    }

    static numberOrNumDef(val) {
        val = String(val);
        if (!isNaN(Number(val))) {
            return parseInt(val);
        }
        return NumDefs.get(val);
    }
}

// Process value string for a parameter
function processValueString(entry, valuesString) {
    valuesString = (valuesString || "").trim();
    if (!valuesString) return;
    if (valuesString === "L64 - 63R") return;

    const measureMatch = valuesString.match(/(.*?) ?(\[(.*)])?$/);
    if (measureMatch && measureMatch[3]) {
        entry.displayMeasurement = measureMatch[3];
        valuesString = measureMatch[1];
    }

    const rangeMatch = valuesString.match(/^(-?\d+\.?\d*) ?- ?(\+?\d+\.?\d*)/);
    if (rangeMatch) {
        if (parseFloat(rangeMatch[1]) === entry.dataRange[0] && parseFloat(rangeMatch[2]) === entry.dataRange[1]) {
            return;
        }
        entry.displayRange = [parseFloat(rangeMatch[1]), parseFloat(rangeMatch[2])];
        return;
    }

    const parts = valuesString.split(/, ?/);
    entry.values = {};
    for (let i = 0; i < parts.length; i++) {
        entry.values[i] = parts[i];
    }
}

// Parse a baseblock and return a block definition
// If block contains subblocks, they are extracted and added to the blocks object
function parseBaseBlock(children, blockName, description, blocks, settings) {
    const { includePadding, includeSysex, truncateName } = settings;
    
    let byteOffset = 0;
    let sysexOffset = 0;
    let paddingNum = 1;
    const parameters = {};
    
    function processParam(attrs, idPrefix = "", descPrefix = "") {
        const min = attrs["@_min"];
        const max = attrs["@_max"];
        const dataRange = [NumDefs.numberOrNumDef(min), NumDefs.numberOrNumDef(max)];
        const range = dataRange[1] - dataRange[0];
        let sysexSize = 1;
        let byteSize = 1;

        const type = attrs["@_type"] || "";
        if (type !== "") {
            if (type.includes("16")) {
                sysexSize = 4;
                byteSize = 2;
            } else {
                sysexSize = 2;
            }
        } else {
            if (range > 127 && range <= 255) {
                sysexSize = 2;
            } else if (range >= 256) {
                sysexSize = 4;
                byteSize = 2;
            }
        }

        let itemCount = 1;
        let isArray = false;
        const arrayVal = parseInt(attrs["@_array"]) || 0;
        if (arrayVal > 1) {
            itemCount = arrayVal;
            isArray = true;
        }

        for (let i = 1; i <= itemCount; i++) {
            let idPost = "";
            let descPost = "";
            let desc = attrs["@_desc"] || "";
            
            if (isArray) {
                idPost = `_${i}`;
                if (!desc.includes("$")) {
                    descPost = ` ${i}`;
                } else {
                    desc = desc.replace("$", String(i));
                }
            }

            const entry = {
                id: idPrefix + (attrs["@_id"] || "") + idPost,
                byteOffset: byteOffset,
                lengthBytes: byteSize,
                description: descPrefix + desc + descPost,
                dataRange: dataRange,
                initValue: parseInt(attrs["@_init"]) || 0,
                isPadding: false
            };

            if (includeSysex) {
                entry.sysexOffset = sysexOffset;
                entry.lengthSysex = sysexSize;
                entry.sysexValueOffset = parseInt(attrs["@_sysex_ofst"]) || 0;
            }

            processValueString(entry, attrs["@_desc_val"] || "");

            // Apply truncateName filter
            if (truncateName) {
                const nameMatch = entry.id.match(/^(.+)_(\d+)$/);
                if (nameMatch && parseInt(nameMatch[2]) > 1) {
                    // Skip but still increment offsets
                    byteOffset += byteSize;
                    sysexOffset += sysexSize;
                    continue;
                }
            }

            if (!includePadding) {
                delete entry.isPadding;
            }

            parameters[entry.id] = entry;
            byteOffset += byteSize;
            sysexOffset += sysexSize;
        }
    }

    function processPadding(attrs, idPrefix = "") {
        const byteSize = parseInt(attrs["@_bytesize"]) || 0;

        if (includePadding) {
            const entry = {
                id: idPrefix + "PADDING" + paddingNum++,
                byteOffset: byteOffset,
                lengthBytes: byteSize,
                description: "__padding",
                dataRange: [0, 0],
                initValue: null,
                isPadding: true
            };

            if (includeSysex) {
                entry.sysexOffset = 0;
                entry.lengthSysex = 0;
                entry.sysexValueOffset = null;
            }

            parameters[entry.id] = entry;
        }

        byteOffset += byteSize;
    }

    function processSubblock(attrs, subChildren) {
        const subblockId = attrs["@_id"] || attrs["@_desc"] || "SUB";
        const arraySize = parseInt(attrs["@_array"]) || 1;
        const subblockName = `${blockName}_${subblockId}`;
        
        // Store the starting offsets before processing the subblock
        const startByteOffset = byteOffset;
        const startSysexOffset = sysexOffset;
        
        // Parse the subblock as its own block definition (without array expansion)
        const subBlock = parseBaseBlock(subChildren, subblockName, attrs["@_desc"] || subblockId, blocks, settings);
        
        // Add the subblock to our blocks dictionary
        blocks[subblockName] = subBlock;
        
        // Calculate the total size of the subblock array
        const totalByteLength = subBlock.byteLength * arraySize;
        const totalSysexLength = (subBlock.sysexLength || 0) * arraySize;
        
        // Create a parameter entry for the subblock reference (matching group pattern)
        // byteOffset is the address of item #0 (code will calculate addresses in real time)
        const subblockEntry = {
            id: subblockId,
            byteOffset: startByteOffset,
            lengthBytes: totalByteLength,
            description: attrs["@_desc"] || subblockId,
            blockName: subblockName,
            count: arraySize,
            blockByteLength: subBlock.byteLength
        };
        
        if (includeSysex) {
            subblockEntry.sysexOffset = getSysexValueArray(startSysexOffset, 3).join(" ");
            subblockEntry.lengthSysex = totalSysexLength;
        }
        
        // Insert the subblock reference into the parameters object
        parameters[subblockEntry.id] = subblockEntry;

        // Update our offsets based on the subblock size * array count
        byteOffset += totalByteLength;
        if (includeSysex) {
            sysexOffset += totalSysexLength;
        }
        
        pr(`    - subblock ${subblockName} x${arraySize}`);
    }

    function processElement(el, idPrefix = "", descPrefix = "") {
        const { elementName, attrs, children: elChildren } = getElementInfo(el);

        switch (elementName) {
            case "param":
                processParam(attrs, idPrefix, descPrefix);
                break;
            case "padding":
                processPadding(attrs, idPrefix);
                break;
            case "subblock":
                // Process subblock completely before continuing with parent elements
                processSubblock(attrs, elChildren);
                break;
            case "common":
            case "share":
                for (const child of elChildren) {
                    processElement(child, idPrefix, descPrefix);
                }
                break;
            case "alternate":
            case "#comment":
                break;
            default:
                throw new Error(`Unknown element ${elementName}`);
        }
    }

    // Process all children in order
    // Subblocks are processed completely (including all nested elements) before continuing
    for (const el of children) {
        processElement(el);
    }

    // Build the block definition
    const block = {
        name: blockName,
        description: description || "",
        byteLength: byteOffset
    };

    if (includeSysex) {
        block.sysexLength = sysexOffset;
    }

    // If we have both parameters and children, include both
    // If only parameters, include those
    // If only children (container block), include those
    if (Object.keys(parameters).length > 0) {
        block.parameters = parameters;
    }
    // Note: Subblocks are now included in the parameters array, so we don't need them as separate properties

    return block;
}

// Parse a group and return its definition
function parseGroup(children, groupName, blocks, settings) {
    const { includeSysex } = settings;
    
    let byteOffset = 0;
    let sysexOffset = 0;
    const groupChildren = {};  // Keyed by blockName

    for (const el of children) {
        const { elementName, attrs } = getElementInfo(el);

        if (elementName === "block") {
            const baseBlockName = attrs["@_baseblock"] || "";
            let sysexSize = attrs["@_size"] || "";
            if (sysexSize === "") {
                sysexSize = 128;
            } else {
                sysexSize = convertSysexValue(sysexSize);
            }

            let arrayCount = 1;
            if (attrs["@_array"]) {
                arrayCount = NumDefs.numberOrNumDef(attrs["@_array"]);
            }

            const block = blocks[baseBlockName];
            if (!block) {
                throw new Error(`Unable to find block named '${baseBlockName}'`);
            }

            // Store the starting offset for item #0 (code will calculate addresses in real time)
            const startByteOffset = byteOffset;
            const startSysexOffset = sysexOffset;

            const child = {
                blockName: baseBlockName,
                count: arrayCount,
                byteOffset: startByteOffset,
                blockByteLength: block.byteLength,
                totalByteLength: arrayCount * block.byteLength
            };

            if (includeSysex) {
                child.sysexOffset = getSysexValueArray(startSysexOffset, 3).join(" ");
                child.sysexItemSize = sysexSize; // Store sysex item size for calculating array offsets
            }

            // Update offsets for the next block
            byteOffset += arrayCount * block.byteLength;
            sysexOffset += arrayCount * sysexSize;

            // Add as a property keyed by blockName
            groupChildren[baseBlockName] = child;
        } else if (elementName === "offset") {
            const adrs = attrs["@_adrs"] || "";
            if (adrs === "") {
                throw new Error("Cannot find attribute adrs in <offset>");
            }
            sysexOffset = convertSysexValue(adrs);
        } else {
            throw new Error(`Unknown Tag Type '${elementName}' in group`);
        }
    }

    return {
        name: groupName,
        parameters: groupChildren,
        totalByteLength: byteOffset
    };
}

// Generate JS output with actual references
// Blocks and groups are merged at the top level
function generateJSOutput(blocks, groups) {
    let output = "const ZenProperties = {};\n\n";
    
    // Output all blocks first
    // Sort blocks to ensure subblocks are declared before their parent blocks
    // Subblocks have names like "PARENT_SUBBLOCK", so we need to ensure subblocks come first
    const sortedBlocks = Object.entries(blocks).sort(([nameA], [nameB]) => {
        // Check if one is a subblock of the other
        if (nameA.startsWith(nameB + "_")) return -1; // A is subblock of B, A should come first
        if (nameB.startsWith(nameA + "_")) return 1; // B is subblock of A, B should come first
        // Otherwise sort alphabetically
        return nameA.localeCompare(nameB);
    });
    
    for (const [name, block] of sortedBlocks) {
        // Create a modified version with block references for subblocks
        const blockWithRefs = {
            ...block
        };
        
        // If block has parameters, check for subblock references
        if (block.parameters) {
            blockWithRefs.parameters = {};
            for (const [paramKey, param] of Object.entries(block.parameters)) {
                if (param && param.blockName) {
                    // This is a subblock reference - add block reference
                    blockWithRefs.parameters[paramKey] = {
                        ...param,
                        block: `__BLOCKREF_${param.blockName}_BLOCKREF__`
                    };
                } else {
                    // Regular parameter - keep as is
                    blockWithRefs.parameters[paramKey] = param;
                }
            }
        }
        
        let blockJson = JSON.stringify(blockWithRefs, null, 2);
        // Replace the string placeholders with actual references
        blockJson = blockJson.replace(/"__BLOCKREF_([^"]+)_BLOCKREF__"/g, 'ZenProperties["$1"]');
        
        output += `ZenProperties["${name}"] = ${blockJson};\n\n`;
    }
    
    // Output groups with references (merged at top level with blocks)
    for (const [name, group] of Object.entries(groups)) {
        // Create a modified version with block references
        // Groups now have parameters object with block references
        const groupWithRefs = {
            name: group.name,
            parameters: {},
            totalByteLength: group.totalByteLength
        };
        
        // Add each block reference to parameters with a block reference
        for (const [key, value] of Object.entries(group.parameters)) {
            if (value && value.blockName) {
                groupWithRefs.parameters[key] = {
                    ...value,
                    block: `__BLOCKREF_${value.blockName}_BLOCKREF__`
                };
            }
        }
        
        let groupJson = JSON.stringify(groupWithRefs, null, 2);
        // Replace the string placeholders with actual references
        // The pattern is "__BLOCKREF_NAME_BLOCKREF__" with quotes around it
        groupJson = groupJson.replace(/"__BLOCKREF_([^"]+)_BLOCKREF__"/g, 'ZenProperties["$1"]');
        
        output += `ZenProperties["${name}"] = ${groupJson};\n\n`;
    }
    
    output += "export default ZenProperties;\n";
    return output;
}

// Generate JSON output (uses names for references)
// Blocks and groups are merged at the top level
function generateJSONOutput(blocks, groups, pretty) {
    // Merge blocks and groups into a single top-level object
    const output = { ...blocks, ...groups };
    return JSON.stringify(output, null, pretty ? 2 : 0);
}

// -------------------------------------------------------------------------------
// Main execution
(async () => {
const configName = process.argv[2] || "no config specified";
const outputDir = process.argv[3] || "out";

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

pr(`*********** Zen XML Converter Thingy ** config:${configName} ***********\r\n`);

const configData = readFileSync(`config/${configName}.json`, "utf-8");
const config = JSON.parse(configData);
if (!config) {
    throw new Error("Invalid Config");
}

const settings = {
    includePadding: config.settings?.includePadding ?? false,
    includeSysex: config.settings?.includeSysex ?? true,
    truncateName: config.settings?.truncateName ?? false,
    prettyJSON: config.settings?.prettyJSON ?? false,
    textTableToConsole: config.settings?.textTableToConsole ?? false
};

const blocks = {};
const groups = {};

// Validate that blocks and groups don't have name conflicts
function validateNoNameConflicts(blocks, groups) {
    const blockNames = new Set(Object.keys(blocks));
    const groupNames = new Set(Object.keys(groups));
    const conflicts = [];
    
    for (const blockName of blockNames) {
        if (groupNames.has(blockName)) {
            conflicts.push(blockName);
        }
    }
    
    if (conflicts.length > 0) {
        throw new Error(`Name conflict detected: The following names are used as both blocks and groups: ${conflicts.join(", ")}`);
    }
}

const HTMLTemplate = readFileSync("template.html", "utf-8");

// XML Parser options
const parserOptions = {
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    allowBooleanAttributes: true,
    preserveOrder: true,
    commentPropName: "#comment"
};
const parser = new XMLParser(parserOptions);

// First pass: Parse all blocks
for (const xmlFileImport of config.importXML) {
    pr(`---import xml - ${xmlFileImport.file}`);
    const xmlFile = readFileSync(xmlFileImport.file, "utf-8");
    const xmlArray = parser.parse(xmlFile);

    const rootEl = xmlArray.find(el => {
        const keys = Object.keys(el);
        return keys.some(k => !k.startsWith("?") && k !== ":@" && k !== "#comment");
    });
    const { children: rootChildren } = getElementInfo(rootEl);

    // numdefs
    for (const el of rootChildren) {
        const { elementName, attrs } = getElementInfo(el);
        if (elementName === "numdef") {
            NumDefs.set(attrs["@_name"], parseInt(attrs["@_num"]));
        }
    }

    // blocks
    if (xmlFileImport.blocks) {
        for (const blockName of xmlFileImport.blocks) {
            pr(`  ${blockName}`);
            
            let foundBlockChildren = null;
            let foundBlockDesc = "";
            
            for (const el of rootChildren) {
                const { elementName, attrs, children } = getElementInfo(el);
                if ((elementName === "baseblock" || elementName === "block" || elementName === "unionbaseblock") && attrs["@_name"] === blockName) {
                    foundBlockChildren = children;
                    foundBlockDesc = attrs["@_desc"] || "";
                    
                    if (!foundBlockDesc && children.length > 0) {
                        const firstChild = children[0];
                        if (firstChild["#comment"]) {
                            const commentText = firstChild["#comment"][0]?.["#text"] || "";
                            foundBlockDesc = commentText.trim();
                        }
                    }
                    break;
                }
            }

            if (!foundBlockChildren) {
                throw new Error(`Cannot find block ${blockName}`);
            }

            const block = parseBaseBlock(foundBlockChildren, blockName, foundBlockDesc, blocks, settings);
            blocks[blockName] = block;
        }
    }

    // groups
    if (xmlFileImport.groups) {
        for (const groupName of xmlFileImport.groups) {
            pr(`  Group: ${groupName}`);
            
            let foundGroupChildren = null;
            for (const el of rootChildren) {
                const { elementName, attrs, children } = getElementInfo(el);
                if (elementName === "group" && attrs["@_name"] === groupName) {
                    foundGroupChildren = children;
                    break;
                }
            }

            if (!foundGroupChildren) {
                throw new Error(`Cannot find group ${groupName}`);
            }

            const group = parseGroup(foundGroupChildren, groupName, blocks, settings);
            groups[groupName] = group;
        }
    }
}

// Validate no name conflicts before generating output
validateNoNameConflicts(blocks, groups);

// Generate outputs
const jsonOutput = generateJSONOutput(blocks, groups, settings.prettyJSON);
writeFileSync(`${outputDir}/${configName}.json`, jsonOutput);

const jsOutput = generateJSOutput(blocks, groups);
writeFileSync(`${outputDir}/${configName}.js`, jsOutput);

// Load the generated JS object to use as source of truth for HTML/TXT output
const jsFilePath = resolve(__dirname, `${outputDir}/${configName}.js`);
const ZenProperties = (await import(jsFilePath)).default;

// Helper function to determine if an entry is a group (has totalByteLength and parameters with blockName references)
function isGroup(entry) {
    if (!entry || typeof entry !== "object" || !("totalByteLength" in entry) || !("name" in entry) || !("parameters" in entry)) {
        return false;
    }
    // Groups have parameters where values have blockName property
    const params = entry.parameters;
    if (typeof params !== "object" || Array.isArray(params)) {
        return false;
    }
    // Check if any parameter has blockName (indicating it's a block reference, not a regular parameter)
    return Object.values(params).some(p => p && p.blockName);
}

// Helper function to determine if an entry is a block (has parameters or is referenced by groups)
function isBlock(entry) {
    return entry && typeof entry === "object" && "name" in entry && ("parameters" in entry || "byteLength" in entry);
}

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

// Generate HTML from ZenProperties
function generateHTMLFromZenProperties(ZenProperties, zenBlocks, zenGroups, configName, settings) {
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
        const tocTable = new TableGen();
        tocTable.tableClass = "table table-bordered table-striped noWrap autoWidth";
        tocTable.put("Name", "Description", "Parameters", "Total Byte Length");
        tocTable.colClass = { 2: "right", 3: "right" };
        
        for (const groupName of groupNames) {
            const group = zenGroups[groupName];
            const totalBytes = group.totalByteLength || 0;
            const decimalPadded = String(totalBytes).padStart(3, " ");
            const totalBytesFormatted = `0x${totalBytes.toString(16).padStart(4, "0")} ${decimalPadded}`;
            const totalBytesFormattedHTML = `0x${totalBytes.toString(16).padStart(4, "0")} ${decimalPadded.replace(/ /g, "&nbsp;")}`;
            const paramCount = group.parameters ? Object.keys(group.parameters).length : 0;
            tocTable.putNewline(groupName, group.description || "", paramCount, totalBytesFormatted);
            const row = tocTable.row;
            tocTable.setCellLink(row, 0, groupName, `#group-${groupName}`);
            tocTable.setCellHTML(row, 3, `<span class="mono">${totalBytesFormattedHTML}</span>`);
        }
        htmlTOC += tocTable.renderHTML();
    }

    // Blocks in TOC - include blocks with parameters OR nested blocks
    const blockNames = Object.keys(zenBlocks).filter(name => {
        const block = zenBlocks[name];
        return (block.parameters && Object.keys(block.parameters).length > 0) || hasNestedBlocks(block);
    }).sort();
    if (blockNames.length > 0) {
        htmlTOC += `<h3>Blocks</h3>`;
        const tocTable = new TableGen();
        tocTable.tableClass = "table table-bordered table-striped noWrap autoWidth";
        tocTable.put("Name", "Description", "Parameters", "Total Byte Length");
        tocTable.colClass = { 2: "right", 3: "right" };
        
        for (const blockName of blockNames) {
            const block = zenBlocks[blockName];
            const totalBytes = block.byteLength || 0;
            const decimalPadded = String(totalBytes).padStart(3, " ");
            const totalBytesFormatted = `0x${totalBytes.toString(16).padStart(4, "0")} ${decimalPadded}`;
            const totalBytesFormattedHTML = `0x${totalBytes.toString(16).padStart(4, "0")} ${decimalPadded.replace(/ /g, "&nbsp;")}`;
                const paramCount = block.parameters ? Object.keys(block.parameters).length : 0;
            tocTable.putNewline(blockName, block.description || "", paramCount, totalBytesFormatted);
            const row = tocTable.row;
            tocTable.setCellLink(row, 0, blockName, `#block-${blockName}`);
            tocTable.setCellHTML(row, 3, `<span class="mono">${totalBytesFormattedHTML}</span>`);
        }
        htmlTOC += tocTable.renderHTML();
    }

    let htmlTableContent = "";

    // Generate group tables
    for (const [groupName, group] of Object.entries(zenGroups)) {
        const table = new TableGen();
        table.tableClass = "table table-bordered table-striped noWrap autoWidth";
        table.title = `Group: ${groupName}`;
        table.anchor = `group-${groupName}`;
        table.titleLink = "#table-of-contents";
        
        const hasSysex = settings.includeSysex && Object.values(group.parameters).some(b => b && b.blockName && b.sysexOffset && b.sysexOffset.length > 0);
        
        if (hasSysex) {
            table.put("Block", "Description", "Index", "Sysex Start", "Byte offset", "Block Byte Length", "Total Byte Length");
            table.colClass = { 2: "right", 3: "right", 4: "right", 5: "right", 6: "right" };
        } else {
            table.put("Block", "Description", "Index", "Byte offset", "Block Byte Length", "Total Byte Length");
            table.colClass = { 2: "right", 3: "right", 4: "right", 5: "right" };
        }

        let currentRow = 0;
        for (const [key, blockRef] of Object.entries(group.parameters)) {
            if (blockRef && blockRef.blockName) {
                // Get block description from the referenced block
                const blockObj = blockRef.block || zenBlocks[blockRef.blockName];
                const blockDesc = blockObj?.description || "";

                for (let i = 0; i < blockRef.count; i++) {
                    currentRow++;
                    if (i === 0) {
                        table.putNewline(blockRef.blockName, blockDesc);
                        table.setCellLink(currentRow, 0, blockRef.blockName, `#block-${blockRef.blockName}`);
                    } else {
                        table.putNewline("", "");
                    }

                    const indexDisplay = blockRef.count > 1 ? `[${String(i + 1).padStart(2, " ")}]` : "";
                    // Calculate byteOffset for this array item: base + (index * blockByteLength)
                    const byteOffset = blockRef.byteOffset + (i * blockRef.blockByteLength);
                    const byteOffsetFormatted = `${indexDisplay} 0x${byteOffset.toString(16).padStart(4, "0")} ${String(byteOffset).padStart(4, "0")}`;
                    const sysexCol = 3;
                    const byteOffsetCol = hasSysex ? 4 : 3;

                    if (hasSysex) {
                        // Calculate sysexOffset for this array item
                        // Parse the base sysexOffset (format: "XX XX XX")
                        const baseSysexParts = blockRef.sysexOffset.split(" ").map(s => parseInt(s, 16));
                        const sysexItemSize = blockRef.sysexItemSize || blockRef.blockByteLength; // Use stored sysexItemSize or fallback
                        const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                        const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                        table.put("", sysexOffset, byteOffsetFormatted);
                        // Wrap sysex and byte offset in mono class
                        table.setCellHTML(currentRow, sysexCol, `<span class="mono">${sysexOffset}</span>`);
                        table.setCellHTML(currentRow, byteOffsetCol, `<span class="mono">${byteOffsetFormatted}</span>`);
                    } else {
                        table.put("", byteOffsetFormatted);
                        // Wrap byte offset in mono class
                        table.setCellHTML(currentRow, byteOffsetCol, `<span class="mono">${byteOffsetFormatted}</span>`);
                    }

                    if (i === 0) {
                        table.put(blockRef.blockByteLength, blockRef.totalByteLength);
                    }
                }
            }
        }
        
        table.footer = `Group: ${groupName} : Total Length Bytes: 0x${group.totalByteLength.toString(16).padStart(4, "0")} ${group.totalByteLength}`;
        htmlTableContent += table.renderHTML();
    }

    // Generate block tables
    for (const [blockName, block] of Object.entries(zenBlocks)) {
        const hasParams = block.parameters && Object.keys(block.parameters).length > 0;
        const hasNested = hasNestedBlocks(block);
        
        if (hasParams || hasNested) {
            const table = new TableGen();
            table.tableClass = "table table-bordered table-striped noWrap autoWidth";
            table.title = `Block: ${block.name}${block.description ? ` - ${block.description}` : ""}`;
            table.anchor = `block-${block.name}`;
            table.titleLink = "#table-of-contents";
            
            if (hasParams) {
                // Block with parameters - show parameter table
                if (settings.includeSysex) {
                    table.put("ID", "Description", "SXOff - len", "Byte offset - len", "Min", "Max", "Offset", "Init", "Values");
                    table.colClass = { 4: "right", 5: "right", 6: "right", 7: "right", 8: "wrap" };
                } else {
                    table.put("ID", "Description", "Byte offset - len", "Min", "Max", "Init", "Values");
                    table.colClass = { 3: "right", 4: "right", 5: "right", 6: "wrap" };
                }

                let paramRow = 0;
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
                            paramRow++;
                            const indexDisplay = param.count > 1 ? `[${String(i + 1).padStart(2, " ")}]` : "";
                            // Calculate byteOffset for this array item: base + (index * blockByteLength)
                            const byteOffset = param.byteOffset + (i * param.blockByteLength);
                            const byteOffsetFormatted = `${indexDisplay} 0x${byteOffset.toString(16).padStart(4, "0")} ${String(byteOffset).padStart(4, "0")} - 0x${param.blockByteLength.toString(16).padStart(4, "0")} ${String(param.blockByteLength).padStart(2, "0")}`;
                            
                            if (i === 0) {
                                // First row: show subblock name (as link) and description
                                if (settings.includeSysex) {
                                    // Calculate sysexOffset for this array item
                                    // Get sysex item size from the referenced subblock
                                    const subBlockObj = zenBlocks[param.blockName];
                                    const sysexItemSize = subBlockObj?.sysexLength || param.blockByteLength;
                                    const baseSysexParts = param.sysexOffset.split(" ").map(s => parseInt(s, 16));
                                    const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                                    const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                                    table.putNewline(
                                        param.id,
                                        subBlockName,
                                        sysexOffset,
                                        byteOffsetFormatted,
                                        "-",
                                        "-",
                                        "-",
                                        "-",
                                        ""
                                    );
                                    table.setCellLink(paramRow, 1, subBlockName, `#block-${param.blockName}`);
                                    table.setCellHTML(paramRow, 2, `<span class="mono">${sysexOffset}</span>`);
                                    table.setCellHTML(paramRow, 3, `<span class="mono">${byteOffsetFormatted}</span>`);
                                } else {
                                    table.putNewline(
                                        param.id,
                                        subBlockName,
                                        byteOffsetFormatted,
                                        "-",
                                        "-",
                                        "-",
                                        ""
                                    );
                                    table.setCellLink(paramRow, 1, subBlockName, `#block-${param.blockName}`);
                                    table.setCellHTML(paramRow, 2, `<span class="mono">${byteOffsetFormatted}</span>`);
                                }
                            } else {
                                // Subsequent rows: empty name/description, show index and offset
                                if (settings.includeSysex) {
                                    // Calculate sysexOffset for this array item
                                    const baseSysexParts = param.sysexOffset.split(" ").map(s => parseInt(s, 16));
                                    // Get sysex item size from the referenced subblock
                                    const subBlockObj = zenBlocks[param.blockName];
                                    const sysexItemSize = subBlockObj?.sysexLength || param.blockByteLength;
                                    const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                                    const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                                    table.putNewline(
                                        "",
                                        "",
                                        sysexOffset,
                                        byteOffsetFormatted,
                                        "-",
                                        "-",
                                        "-",
                                        "-",
                                        ""
                                    );
                                    table.setCellHTML(paramRow, 2, `<span class="mono">${sysexOffset}</span>`);
                                    table.setCellHTML(paramRow, 3, `<span class="mono">${byteOffsetFormatted}</span>`);
                                } else {
                                    table.putNewline(
                                        "",
                                        "",
                                        byteOffsetFormatted,
                                        "-",
                                        "-",
                                        "-",
                                        ""
                                    );
                                    table.setCellHTML(paramRow, 2, `<span class="mono">${byteOffsetFormatted}</span>`);
                                }
                            }
                        }
                    } else {
                        // Regular parameter
                        paramRow++;
                        // Regular parameter
                        if (settings.includeSysex) {
                            const sxOff = getSysexValueArray(param.sysexOffset || 0, 2);
                            const sysexFormatted = ` ${sxOff[0]} ${sxOff[1]} - ${(param.lengthSysex || 0).toString(16).padStart(2, "0")}`;
                            const byteOffsetFormatted = `0x${param.byteOffset.toString(16).padStart(4, "0")} ${String(param.byteOffset).padStart(4, "0")} - 0x${param.lengthBytes.toString(16).padStart(4, "0")} ${String(param.lengthBytes).padStart(2, "0")}`;
                            table.putNewline(
                                param.id,
                                param.description,
                                sysexFormatted,
                                byteOffsetFormatted,
                                param.dataRange[0],
                                param.dataRange[1],
                                param.sysexValueOffset || 0,
                                param.initValue || 0,
                                valuesStr
                            );
                            // Wrap sysex and byte offset in mono class
                            table.setCellHTML(paramRow, 2, `<span class="mono">${sysexFormatted}</span>`);
                            table.setCellHTML(paramRow, 3, `<span class="mono">${byteOffsetFormatted}</span>`);
                        } else {
                            const byteOffsetFormatted = `0x${param.byteOffset.toString(16).padStart(4, "0")} ${String(param.byteOffset).padStart(4, "0")} - 0x${param.lengthBytes.toString(16).padStart(4, "0")} ${String(param.lengthBytes).padStart(2, "0")}`;
                            table.putNewline(
                                param.id,
                                param.description,
                                byteOffsetFormatted,
                                param.dataRange[0],
                                param.dataRange[1],
                                param.initValue || 0,
                                valuesStr
                            );
                            // Wrap byte offset in mono class
                            table.setCellHTML(paramRow, 2, `<span class="mono">${byteOffsetFormatted}</span>`);
                        }
                    }
                }
                
                // Add footer with block size
                if (settings.includeSysex && block.sysexLength) {
                    const syOffset = getSysexValueArray(block.sysexLength, 2);
                    table.footer = `Block: ${block.name} : Total Length Sysex: ${syOffset[0]} ${syOffset[1]} Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                } else {
                    table.footer = `Block: ${block.name} : Total Length Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                }
            } else if (hasNested) {
                // Block with only nested blocks (no parameters) - show nested blocks in main table
                table.put("Nested Block", "Description", "Count");
                table.colClass = { 2: "right" };
                
                let nestedRow = 0;
                for (const [key, nestedBlock] of Object.entries(block)) {
                    // Skip standard block properties
                    if (key === 'name' || key === 'description' || key === 'byteLength' || key === 'sysexLength' || key === 'parameters') {
                        continue;
                    }
                    // Check if this is a nested block reference
                    if (nestedBlock && typeof nestedBlock === 'object' && nestedBlock.blockName && typeof nestedBlock.count === 'number') {
                        nestedRow++;
                        const nestedBlockObj = zenBlocks[nestedBlock.blockName];
                        const nestedDesc = nestedBlockObj?.description || "";
                        table.putNewline(
                            nestedBlock.blockName,
                            nestedDesc,
                            nestedBlock.count.toString()
                        );
                        table.setCellLink(nestedRow, 0, nestedBlock.blockName, `#block-${nestedBlock.blockName}`);
                    }
                }
                
                // Add footer with block size
                if (settings.includeSysex && block.sysexLength) {
                    const syOffset = getSysexValueArray(block.sysexLength, 2);
                    table.footer = `Block: ${block.name} : Total Length Sysex: ${syOffset[0]} ${syOffset[1]} Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                } else {
                    table.footer = `Block: ${block.name} : Total Length Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                }
            }
            
            htmlTableContent += table.renderHTML();
            
            // If block has both parameters and nested blocks, create a separate table for nested blocks
            if (hasParams && hasNested) {
                const nestedTable = new TableGen();
                nestedTable.tableClass = "table table-bordered table-striped noWrap autoWidth";
                nestedTable.title = `Block: ${block.name}${block.description ? ` - ${block.description}` : ""} - Nested Blocks`;
                nestedTable.anchor = `block-${block.name}-nested`;
                nestedTable.titleLink = "#table-of-contents";
                
                nestedTable.put("Nested Block", "Description", "Count");
                nestedTable.colClass = { 2: "right" };
                
                let nestedRow = 0;
                for (const [key, nestedBlock] of Object.entries(block)) {
                    // Skip standard block properties
                    if (key === 'name' || key === 'description' || key === 'byteLength' || key === 'sysexLength' || key === 'parameters') {
                        continue;
                    }
                    // Check if this is a nested block reference
                    if (nestedBlock && typeof nestedBlock === 'object' && nestedBlock.blockName && typeof nestedBlock.count === 'number') {
                        nestedRow++;
                        const nestedBlockObj = zenBlocks[nestedBlock.blockName];
                        const nestedDesc = nestedBlockObj?.description || "";
                        nestedTable.putNewline(
                            nestedBlock.blockName,
                            nestedDesc,
                            nestedBlock.count.toString()
                        );
                        nestedTable.setCellLink(nestedRow, 0, nestedBlock.blockName, `#block-${nestedBlock.blockName}`);
                    }
                }
                
                // Add footer with block size
                if (settings.includeSysex && block.sysexLength) {
                    const syOffset = getSysexValueArray(block.sysexLength, 2);
                    nestedTable.footer = `Block: ${block.name} : Total Length Sysex: ${syOffset[0]} ${syOffset[1]} Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                } else {
                    nestedTable.footer = `Block: ${block.name} : Total Length Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
                }
                
                htmlTableContent += nestedTable.renderHTML();
            }
        }
    }

    return `<h1>Config: ${configName}</h1>${htmlTOC}${htmlTableContent}`;
}

// Generate TXT from ZenProperties
function generateTXTFromZenProperties(zenBlocks, zenGroups, settings) {
    let textOutput = "";
    
    // Generate group tables
    for (const [groupName, group] of Object.entries(zenGroups)) {
        const table = new TableGen();
        table.title = `Group: ${groupName}`;
        
        const hasSysex = settings.includeSysex && Object.values(group.parameters).some(b => b && b.blockName && b.sysexOffset && b.sysexOffset.length > 0);
        
        if (hasSysex) {
            table.put("Block", "Description", "Index", "Sysex Start", "Byte offset", "Block Byte Length", "Total Byte Length");
        } else {
            table.put("Block", "Description", "Index", "Byte offset", "Block Byte Length", "Total Byte Length");
        }

        for (const [key, blockRef] of Object.entries(group.parameters)) {
            if (blockRef && blockRef.blockName) {
                // Get block description from the referenced block
                const blockObj = blockRef.block || zenBlocks[blockRef.blockName];
                const blockDesc = blockObj?.description || "";

                for (let i = 0; i < blockRef.count; i++) {
                    if (i === 0) {
                        table.putNewline(blockRef.blockName, blockDesc);
                    } else {
                        table.putNewline("", "");
                    }

                    const indexDisplay = blockRef.count > 1 ? `[${String(i + 1).padStart(2, " ")}]` : "";
                    // Calculate byteOffset for this array item: base + (index * blockByteLength)
                    const byteOffset = blockRef.byteOffset + (i * blockRef.blockByteLength);
                    const byteOffsetFormatted = `${indexDisplay} 0x${byteOffset.toString(16).padStart(4, "0")} ${String(byteOffset).padStart(4, "0")}`;

                    if (hasSysex) {
                        // Calculate sysexOffset for this array item
                        const baseSysexParts = blockRef.sysexOffset.split(" ").map(s => parseInt(s, 16));
                        const sysexItemSize = blockRef.sysexItemSize || blockRef.blockByteLength; // Use stored sysexItemSize or fallback
                        const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                        const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                        table.put("", sysexOffset, byteOffsetFormatted);
                    } else {
                        table.put("", byteOffsetFormatted);
                    }

                    if (i === 0) {
                        table.put(blockRef.blockByteLength, blockRef.totalByteLength);
                    }
                }
            }
        }
        
        table.footer = `Group: ${groupName} : Total Length Bytes: 0x${group.totalByteLength.toString(16).padStart(4, "0")} ${group.totalByteLength}`;
        textOutput += table.renderText() + "\r\n";
    }
    
    // Generate block tables
    for (const [blockName, block] of Object.entries(zenBlocks)) {
        if (block.parameters) {
            const table = new TableGen();
            table.title = `Block: ${block.name}`;
            
            if (settings.includeSysex) {
                table.put("ID", "Description", "SXOff - len", "Byte offset - len", "Min", "Max", "Offset", "Init", "Values");
            } else {
                table.put("ID", "Description", "Byte offset - len", "Min", "Max", "Init", "Values");
            }

            for (const param of Object.values(block.parameters)) {
                const valuesStr = param.values ? Object.values(param.values).slice(0, 10).join(", ") + (Object.values(param.values).length > 10 ? " ..." : "") : "";
                
                // Check if this is a subblock - show each array entry on a new line like groups
                if (param.blockName) {
                    // Get the referenced block for name
                    const subBlockObj = zenBlocks[param.blockName];
                    const subBlockName = subBlockObj?.name || param.blockName;
                    
                    // Show each array entry on a separate line
                    for (let i = 0; i < param.count; i++) {
                        const indexDisplay = param.count > 1 ? `[${String(i + 1).padStart(2, " ")}]` : "";
                        // Calculate byteOffset for this array item: base + (index * blockByteLength)
                        const byteOffset = param.byteOffset + (i * param.blockByteLength);
                        const byteOffsetFormatted = `${indexDisplay} 0x${byteOffset.toString(16).padStart(4, "0")} ${String(byteOffset).padStart(4, "0")} - ${String(param.blockByteLength).padStart(2, "0")}`;
                        
                        if (i === 0) {
                            // First row: show subblock name
                            if (settings.includeSysex) {
                                // Calculate sysexOffset for this array item
                                // Get sysex item size from the referenced subblock
                                const subBlockObj = zenBlocks[param.blockName];
                                const sysexItemSize = subBlockObj?.sysexLength || param.blockByteLength;
                                const baseSysexParts = param.sysexOffset.split(" ").map(s => parseInt(s, 16));
                                const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                                const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                                table.putNewline(
                                    param.id,
                                    subBlockName,
                                    sysexOffset,
                                    byteOffsetFormatted,
                                    "-",
                                    "-",
                                    "-",
                                    "-",
                                    ""
                                );
                            } else {
                                table.putNewline(
                                    param.id,
                                    subBlockName,
                                    byteOffsetFormatted,
                                    "-",
                                    "-",
                                    "-",
                                    ""
                                );
                            }
                            } else {
                                // Subsequent rows: empty name/description, show index and offset
                                if (settings.includeSysex) {
                                    // Calculate sysexOffset for this array item
                                    const baseSysexParts = param.sysexOffset.split(" ").map(s => parseInt(s, 16));
                                    // Get sysex item size from the referenced subblock
                                    const subBlockObj = zenBlocks[param.blockName];
                                    const sysexItemSize = subBlockObj?.sysexLength || param.blockByteLength;
                                    const sysexOffsetValue = baseSysexParts[0] * 0x10000 + baseSysexParts[1] * 0x100 + baseSysexParts[2] + (i * sysexItemSize);
                                    const sysexOffset = getSysexValueArray(sysexOffsetValue, 3).join(" ");
                                table.putNewline(
                                    "",
                                    "",
                                    sysexOffset,
                                    byteOffsetFormatted,
                                    "-",
                                    "-",
                                    "-",
                                    "-",
                                    ""
                                );
                            } else {
                                table.putNewline(
                                    "",
                                    "",
                                    byteOffsetFormatted,
                                    "-",
                                    "-",
                                    "-",
                                    ""
                                );
                            }
                        }
                    }
                } else {
                    // Regular parameter
                    const dataRange0 = param.dataRange ? param.dataRange[0] : "-";
                    const dataRange1 = param.dataRange ? param.dataRange[1] : "-";
                    if (settings.includeSysex) {
                        const sxOff = getSysexValueArray(param.sysexOffset || 0, 2);
                        table.putNewline(
                            param.id,
                            param.description,
                            ` ${sxOff[0]} ${sxOff[1]} - ${(param.lengthSysex || 0).toString(16).padStart(2, "0")}`,
                            `0x${param.byteOffset.toString(16).padStart(4, "0")} ${String(param.byteOffset).padStart(4, "0")} - ${String(param.lengthBytes).padStart(2, "0")}`,
                            dataRange0,
                            dataRange1,
                            param.sysexValueOffset || 0,
                            param.initValue || 0,
                            valuesStr
                        );
                    } else {
                        table.putNewline(
                            param.id,
                            param.description,
                            `0x${param.byteOffset.toString(16).padStart(4, "0")} ${String(param.byteOffset).padStart(4, "0")} - ${String(param.lengthBytes).padStart(2, "0")}`,
                            dataRange0,
                            dataRange1,
                            param.initValue || 0,
                            valuesStr
                        );
                    }
                }
            }
            
            // Add footer with total block size
            if (settings.includeSysex && block.sysexLength) {
                const syOffset = getSysexValueArray(block.sysexLength, 2);
                table.footer = `Block: ${block.name} : Total Length Sysex: ${syOffset[0]} ${syOffset[1]} Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
            } else {
                table.footer = `Block: ${block.name} : Total Length Bytes: 0x${block.byteLength.toString(16).padStart(4, "0")} ${block.byteLength}`;
            }
            
            textOutput += table.renderText() + "\r\n";
        }
    }
    return textOutput;
}

// Generate HTML and TXT from ZenProperties
const htmlContent = generateHTMLFromZenProperties(ZenProperties, zenBlocks, zenGroups, configName, settings);
const HTML = HTMLTemplate.replace("<REPLACE/>", htmlContent);
writeFileSync(`${outputDir}/${configName}.html`, HTML);

const textOutput = generateTXTFromZenProperties(zenBlocks, zenGroups, settings);
if (settings.textTableToConsole) {
    console.log(textOutput);
} else {
    writeFileSync(`${outputDir}/${configName}.txt`, textOutput);
}

pr("\r\nDone!");
})();
