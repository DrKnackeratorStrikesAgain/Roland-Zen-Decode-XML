import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { XMLParser } from "fast-xml-parser";
import { generateHTML } from "./generateHTMLFromZenProperties.js";
import { generatePython } from "./generatePython.js";

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
                byteLength: byteSize,
                description: descPrefix + desc + descPost,
                dataRange: dataRange,
                initValue: parseInt(attrs["@_init"]) || 0
            };

            if (includeSysex) {
                if (sysexOffset !== 0) entry.sysexOffset = sysexOffset;
                entry.lengthSysex = sysexSize;
                const sysexValueOffset = parseInt(attrs["@_sysex_ofst"]) || 0;
                if (sysexValueOffset !== 0) entry.sysexValueOffset = sysexValueOffset;
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
                byteLength: byteSize,
                description: "__padding",
                dataRange: [0, 0],
                initValue: null,
                isPadding: true
            };

            if (includeSysex) {
                entry.lengthSysex = 0;
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
            byteLength: totalByteLength,
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
                byteLength: arrayCount * block.byteLength
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
        byteLength: byteOffset
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
            ...block,
            category: block.category // Preserve category if it exists
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
            byteLength: group.byteLength,
            category: group.category // Preserve category if it exists
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

function sanitizeIdentifier(name) {
    const sanitized = String(name || "")
        .replace(/[^a-zA-Z0-9_]/g, "_")
        .replace(/_+/g, "_")
        .replace(/^(\d)/, "_$1");
    return sanitized || "unnamed";
}

function normalizeDescriptionStem(description, index) {
    if (!description || !index) return description || "";
    return String(description).replace(new RegExp(`(?:\\s|_)?${index}$`), "").trim();
}

function getScalarType(param) {
    const isSigned = Array.isArray(param.dataRange) && param.dataRange[0] < 0;
    const prefix = isSigned ? "s" : "u";
    switch (param.byteLength) {
        case 1:
            return `${prefix}8`;
        case 2:
            return `${prefix}16`;
        case 4:
            return `${prefix}32`;
        default:
            return null;
    }
}

function buildBlockFields(block) {
    const fields = [];
    const params = Object.values(block.parameters || {}).sort((a, b) => a.byteOffset - b.byteOffset);
    let i = 0;
    let reservedIndex = 1;

    function pushReserved(byteOffset, byteLength, reason = "reserved") {
        fields.push({
            kind: "reserved",
            name: `reserved_${reservedIndex++}`,
            type: "u8",
            byteOffset,
            byteLength,
            count: byteLength,
            description: reason
        });
    }

    while (i < params.length) {
        const param = params[i];
        let nextExpectedOffset = fields.length > 0
            ? fields[fields.length - 1].byteOffset + fields[fields.length - 1].byteLength
            : 0;
        if (param.byteOffset > nextExpectedOffset) {
            pushReserved(nextExpectedOffset, param.byteOffset - nextExpectedOffset, "implicit padding");
        }

        if (param.blockName) {
            fields.push({
                kind: "struct",
                name: sanitizeIdentifier(param.id),
                type: sanitizeIdentifier(param.blockName),
                byteOffset: param.byteOffset,
                byteLength: param.byteLength,
                count: param.count || 1,
                description: param.description || param.blockName
            });
            i++;
            continue;
        }

        const match = String(param.id).match(/^(.*)_(\d+)$/);
        const scalarType = getScalarType(param);
        if (match && scalarType) {
            const baseName = sanitizeIdentifier(match[1]);
            const startIndex = parseInt(match[2], 10);
            const stemDescription = normalizeDescriptionStem(param.description, startIndex);
            const grouped = [param];
            let j = i + 1;
            let expectedIndex = startIndex + 1;
            let expectedOffset = param.byteOffset + param.byteLength;

            while (j < params.length) {
                const candidate = params[j];
                const candidateMatch = String(candidate.id).match(/^(.*)_(\d+)$/);
                if (!candidateMatch) break;
                if (sanitizeIdentifier(candidateMatch[1]) !== baseName) break;
                if (parseInt(candidateMatch[2], 10) !== expectedIndex) break;
                if (candidate.byteOffset !== expectedOffset) break;
                if (candidate.byteLength !== param.byteLength) break;
                if (getScalarType(candidate) !== scalarType) break;
                if (normalizeDescriptionStem(candidate.description, expectedIndex) !== stemDescription) break;
                grouped.push(candidate);
                j++;
                expectedIndex++;
                expectedOffset += candidate.byteLength;
            }

            if (grouped.length > 1) {
                fields.push({
                    kind: "scalar",
                    name: baseName,
                    type: scalarType,
                    byteOffset: param.byteOffset,
                    byteLength: grouped.length * param.byteLength,
                    count: grouped.length,
                    description: stemDescription || param.description
                });
                i = j;
                continue;
            }
        }

        const fallbackType = scalarType || "u8";
        fields.push({
            kind: "scalar",
            name: sanitizeIdentifier(param.id),
            type: fallbackType,
            byteOffset: param.byteOffset,
            byteLength: param.byteLength,
            count: fallbackType === "u8" && !scalarType ? param.byteLength : 1,
            description: param.description || param.id
        });
        i++;
    }

    const consumed = fields.length > 0
        ? fields[fields.length - 1].byteOffset + fields[fields.length - 1].byteLength
        : 0;
    if (block.byteLength > consumed) {
        pushReserved(consumed, block.byteLength - consumed, "trailing padding");
    }

    return fields;
}

function buildGroupFields(group) {
    const fields = [];
    const refs = Object.values(group.parameters || {}).sort((a, b) => a.byteOffset - b.byteOffset);
    let cursor = 0;
    let reservedIndex = 1;

    for (const ref of refs) {
        if (ref.byteOffset > cursor) {
            fields.push({
                kind: "reserved",
                name: `reserved_${reservedIndex++}`,
                type: "u8",
                byteOffset: cursor,
                byteLength: ref.byteOffset - cursor,
                count: ref.byteOffset - cursor,
                description: "implicit padding"
            });
        }

        fields.push({
            kind: "struct",
            name: sanitizeIdentifier(ref.blockName),
            type: sanitizeIdentifier(ref.blockName),
            byteOffset: ref.byteOffset,
            byteLength: ref.byteLength,
            count: ref.count || 1,
            description: ref.blockName
        });

        cursor = ref.byteOffset + ref.byteLength;
    }

    if (group.byteLength > cursor) {
        fields.push({
            kind: "reserved",
            name: `reserved_${reservedIndex++}`,
            type: "u8",
            byteOffset: cursor,
            byteLength: group.byteLength - cursor,
            count: group.byteLength - cursor,
            description: "trailing padding"
        });
    }

    return fields;
}

function getFieldDeclarationParts(field) {
    const arrayLength = field.kind === "scalar" || field.kind === "struct" || field.kind === "reserved"
        ? field.count
        : 1;
    const needsArray = arrayLength > 1 || (field.kind === "scalar" && field.type === "u8" && field.byteLength > 1 && field.count === field.byteLength);
    const declarator = needsArray
        ? `${field.name}[${arrayLength}];`
        : `${field.name};`;
    return {
        type: field.type,
        declarator
    };
}

function formatFieldDeclaration(field, typeWidth, declaratorWidth) {
    const { type, declarator } = getFieldDeclarationParts(field);
    const decl = `    ${type.padEnd(typeWidth)} ${declarator.padEnd(declaratorWidth)}`;
    const detail = `len:${String(field.byteLength).padStart(5, " ")} @ 0x${field.byteOffset.toString(16).padStart(4, "0")}`;
    const desc = field.description ? `, ${field.description}` : "";
    return `${decl} // ${detail}${desc}`;
}

function generateHeaderOutput(configName, blocks, groups) {
    const lines = [];
    const guard = sanitizeIdentifier(`${configName}_generated_h`).toUpperCase();
    const sortedBlocks = Object.entries(blocks).sort(([nameA], [nameB]) => {
        if (nameA.startsWith(nameB + "_")) return -1;
        if (nameB.startsWith(nameA + "_")) return 1;
        return nameA.localeCompare(nameB);
    });
    const sortedGroups = Object.entries(groups).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    lines.push(`/* Autogenerated from config: ${configName} */`);
    lines.push(`#ifndef ${guard}`);
    lines.push(`#define ${guard}`);
    lines.push("");
    lines.push("#include <stdint.h>");
    lines.push("");
    lines.push("typedef int8_t s8;");
    lines.push("typedef uint8_t u8;");
    lines.push("typedef int16_t s16;");
    lines.push("typedef uint16_t u16;");
    lines.push("typedef int32_t s32;");
    lines.push("typedef uint32_t u32;");
    lines.push("");
    lines.push("#pragma pack(push, 1)");
    lines.push("");

    for (const [blockName, block] of sortedBlocks) {
        const typeName = sanitizeIdentifier(blockName);
        const fields = buildBlockFields(block);
        const declarationParts = fields.map(getFieldDeclarationParts);
        const typeWidth = Math.max(...declarationParts.map(part => part.type.length));
        const declaratorWidth = Math.max(...declarationParts.map(part => part.declarator.length));
        lines.push(`/* ${typeName}: ${block.description || "Block"} */`);
        lines.push(`/* Total length: ${block.byteLength} bytes (0x${block.byteLength.toString(16).padStart(4, "0")}) */`);
        lines.push(`typedef struct ${typeName} {`);
        for (const field of fields) {
            lines.push(formatFieldDeclaration(field, typeWidth, declaratorWidth));
        }
        lines.push(`} ${typeName};`);
        lines.push("");
    }

    for (const [groupName, group] of sortedGroups) {
        const typeName = sanitizeIdentifier(groupName);
        const fields = buildGroupFields(group);
        const declarationParts = fields.map(getFieldDeclarationParts);
        const typeWidth = Math.max(...declarationParts.map(part => part.type.length));
        const declaratorWidth = Math.max(...declarationParts.map(part => part.declarator.length));
        lines.push(`/* ${typeName}: Group */`);
        lines.push(`/* Total length: ${group.byteLength} bytes (0x${group.byteLength.toString(16).padStart(4, "0")}) */`);
        lines.push(`typedef struct ${typeName} {`);
        for (const field of fields) {
            lines.push(formatFieldDeclaration(field, typeWidth, declaratorWidth));
        }
        lines.push(`} ${typeName};`);
        lines.push("");
    }

    lines.push("#pragma pack(pop)");
    lines.push("");
    lines.push(`#endif /* ${guard} */`);
    lines.push("");
    return lines.join("\n");
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
    prettyJSON: config.settings?.prettyJSON ?? false
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

// Set category for all blocks (including subblocks) and groups
const categoryName = `Autogenerated: ${configName}`;
for (const [blockName, block] of Object.entries(blocks)) {
    if (!block.category) {
        block.category = categoryName;
    }
}
for (const [groupName, group] of Object.entries(groups)) {
    if (!group.category) {
        group.category = categoryName;
    }
}

// Validate no name conflicts before generating output
validateNoNameConflicts(blocks, groups);

// Generate outputs
const jsonOutput = generateJSONOutput(blocks, groups, settings.prettyJSON);
writeFileSync(`${outputDir}/${configName}.json`, jsonOutput);

const jsOutput = generateJSOutput(blocks, groups);
writeFileSync(`${outputDir}/${configName}.js`, jsOutput);

const headerOutput = generateHeaderOutput(configName, blocks, groups);
writeFileSync(`${outputDir}/${configName}.h`, headerOutput);

generatePython(configName, blocks, groups, `${outputDir}/${configName}.py`);

// Load the generated JS object and generate HTML
const jsFilePath = resolve(__dirname, `${outputDir}/${configName}.js`);
const ZenProperties = (await import(jsFilePath)).default;

// Generate HTML using the standalone generateHTML function
generateHTML(
    ZenProperties,
    `Config: ${configName}`,
    `${outputDir}/${configName}.html`,
    { includeSysex: settings.includeSysex }
);

// Old HTML and TXT generation functions removed - now using generateHTMLFromZenProperties.js

pr("\r\nDone!");
})();
