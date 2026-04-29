# RolandZenDecodeXML Build 9
A tool to decode Roland editor XML files (initially Jupiter X/Xm and ZenCore) and generate JSON, Javascript module & Python file with byte offsets (for files) and SYSEX locations/length, with HTML output tables for easy reading. A C header file is created as well.

Also generate reference HTML for `<concrete>` xml which is the SYSEX location for major structures, like an interactive version of the start of the MIDI implementation text. Pre-generated is one for the Verselab MV-1, as that structure is not actually documented. Concrete definitions will likely make their way into the data structure at some point.

If you are interested in pulling apart these files or project/sound files to create useful tools you could come and join us at [Discord](https://discord.gg/gP3tmPpf55)


# ! You do not need to install/run this unless you want to fiddle with some configuration !
### ! All useful files have been pre-created in the `out` directory. !

**📖 [TLDR Structure document](STRUCTURE.md)** - Compact reference for understanding the output object structure.

The data generated here is going to work with the Roland Jupiter X/Xm, Fantom 6/7/8 and 06/07/08, Juno-X, Zenology files etc. 

Also available is a tool for peeking into the structure of SVZ and MC-707/101 PRJ files at [**ZenInspector**](https://splunge.foo/zeninspector/) which I update when I figure out new information.

Conversion from the original PHP and all following work done with AI. Coding is for droids as Obi-Wan once said.

## Limitations

Does not work with Altenate type blocks (SURFACE is a good example)

## Translations

The XML files from Roland editors contain comments in Japanese that provide important context about the data structures. These comments have been extracted and translated into English in [**translations.md**](translations.md). 

The translations can help understand the purpose and structure of various blocks, parameters, and groups defined in the XML files.

## Setup (if you want to actually roll your own version)

### Prerequisites
- Node.js (version 18 or higher recommended)

### Installation

```bash
npm install
```

#### Copy Xml documents in

Install Roland ZenBeats, Jupiter-X Editor and Juno-X Editor from Roland cloud.

- Copy all the files from `C:\Users\Public\Documents\Roland Editor Library\JUPITERprmdb` into `jupiter_xml`
- Copy all the files from `C:\Users\Public\Documents\Roland Juno Editor Library\JUNO_Xprmdb` into `juno_xml`
- Navigate to `C:\Users\Public\Documents\Zenbeats Library\Integrated Devices`, there are two folders `MV-1` and `MV-1-180`. (Though it might be just me, maybe I had an older version installed).
- Copy the contents of `prmdb` from both of those into the corresponding xml folders.
- run `fixBrokenXml.js` on `mv_1_180_xml` to... fix the broken XML.

*Sorry no idea where Mac files are. Time for a serarch.*


## Usage

```bash
node decode.js <config_name> [output_directory]
```

Where:
- `<config_name>` is the filename of a JSON file in the config directory (do not include the .json extension)
- `[output_directory]` is an optional output directory name (defaults to `out`)

Examples:

```bash
node decode.js jupiter
```

This will use the default `out` directory.

```bash
node decode.js jupiter custom_output
```

This will write output files to the `custom_output` directory (created automatically if it doesn't exist).

## Utility scripts

### `fixBrokenXml.js`

Repairs a broken `db_bmc0.xml` where a **second full document** was pasted inside the first `<db>`: a second XML declaration (`<?xml version="1.0"?>` — not `<?xml-stylesheet`) and another `<db id="BMC0">…</db>`, often followed by an extra closing `</db>`.

The script does not modify the input folder. It creates two sibling directories next to the input, using the input folder name with `_xml` stripped and `_A_xml` / `_B_xml` appended:

| Output | Contents |
|--------|----------|
| `<stem>_A_xml/db_bmc0.xml` | **Merged repair:** text before the second declaration, plus the tail from `<baseblock name="ZB_CC">` through `</db>` taken from the inner duplicate (so one valid outer `<db>`). |
| `<stem>_B_xml/db_bmc0.xml` | **Inner extract:** the embedded document only, from its `<?xml` through its closing `</db>` (standalone file for comparison or archival). |

Example (run from the repo root; input is `mv_1_180_xml`):

```bash
node fixBrokenXml.js mv_1_180_xml
# creates mv_1_180_A_xml/db_bmc0.xml and mv_1_180_B_xml/db_bmc0.xml
```

If the file has only one XML declaration, the script exits with an error and does nothing.

### `concrete_decode.js`

Builds an HTML report of **`<concrete>`** address layout (groups, blocks, clumps, arrays) from a single `db_bmc0.xml`-style file.

```bash
node concrete_decode.js <folder_ending_in_xml> [out_dir_or_report.html]
```

- Reads `<folder>/db_bmc0.xml`.
- Strips a trailing `_xml` from the folder’s basename for the output filename stem.
- Default second argument is `out`; the report is `<stem>_concrete.html` (or the path you pass if it ends with `.html`).

Example:

```bash
node concrete_decode.js jupiter_xml
# writes out/jupiter_concrete.html
```

## Output
In the output directory three files will be created:

- `<config_name>.json` the full data
- `<config_name>.js` the full data formatted as a module (so like above but starts with `export default`)
- `<config_name>.html` a reference in HTML
- `<config_name>.h` C Header File (untested)
- `<config_name>.py` C Header File (untested)

## Config files

See `config/jupiter.json` for a fully formed example.

Config information is in two chunks

    settings
    importXML

### config : `settings`
Configuration settings:

    "settings": {
        "includePadding":false,
        "prettyJSON" : false,
        "includeSysex": true,
        "truncateName": false
    },

- `includePadding` - the binary layout of the information has padding added in places, which is invisible to the SYSEX layout. Turning this to `true` will include entries for the padding. Mainly useful to check generation as otherwise the padding is included but not listed as an actual element, so might be difficult to spot.
- `prettyJSON` - Will pretty print the JSON and JS output. Not recommended as it makes the file huge.
- `includeSysex` - Include SYSEX-related data in the output (offset, length, value offset). Default `true`. Set to `false` to output only byte offset information.
- `truncateName` - In table output, only show the first entry of numbered sequences (e.g., show `NAME_1` but skip `NAME_2` through `NAME_16`). Default `false`. The JSON output still contains all entries.

### config : `importXML`

An array of objects listing the file to import from, and items to import

    "importXML": [ {
        "file":"jupiter_xml/db_muse_pcmex.xml",
        "blocks":[
            "PCMT_CMN",
            "PCMS_PMT",
            ...
            ]
        }, {
        "file": "jupiter_xml/db_bmc0.xml",
        "blocks": [
           "TONECOM"
            ],
        "groups": [
           "PCMEX"
            ]
        }
    ]

The list of names within `blocks` corresponds to a block entry in the XML file:

    <baseblock name="PCMS_PMT" desc="PCMSynth PMT">
	    <param id="STRUCT12" init="0" min="0" max="4" desc="Structure1-2" .../>
        ...

Whilst `groups` corresponds to an entry like this:

    <group name="PCMEX">
	    <block id="common"			baseblock="PCMT_CMN"						size="00.01.00" />
        ...

Groups are containers for blocks and some of these may have multiple copies (i.e. one for each partial).

## Output

A `.js` and `.json` are created, the only difference being the .js creates and object and exports it, ready to plug into some code. Also instead of being just a big chunk of json, each group, block and subblock are added to the object, so references can be pre-populated.

We will refer to all items as `blocks` as the structure is the same.

### Block Structure

The top level object contains blocks and these contain a `parameters` object where each parameter is keyed by its `id`:

```json
  "INST_CMN": {
    "name": "INST_CMN",
    "description": "Instrument Common",
    "byteLength": 140,
    "parameters": {
      "NAME_1": { ... },
      "CATEGORY": { ... },
      "LEVEL": { ... },
      "WMT": { ... }
    }
  }
```

### Simple Parameter example, range of values
```json
"PHRASE_VEL_SHIFT": {
    "id": "PHRASE_VEL_SHIFT",
    "description": "Phrase Velo Shift",
    "byteOffset": 24,                       // byte offset from start of block
    "byteLength": 1,                        // length of binary data block
    "sysexOffset": 23,                      // sysex offset from start of block (decimal)
    "lengthSysex": 2,                       // length of sysex data. more than 1 = use lower nibbles
    "dataRange": [                          // range of data 
        -100,
        100
    ],
    "initValue": 0,                         // initial value
    "sysexValueOffset": 128,                // offset for binary/sysex value. so 0 as real data is encoded 
                                            // as 128 in sysex. Used for signed values. 
    "isPadding": false,                     // padding = no useful value, only enabled by option
    "values": null                          // map of value => description or null for plain integers
}
```
### Example with set values
```json
"ctrlSrc1": {
    "id": "ctrlSrc1",
    "description": "MFX CtrlSrc 1",
    "byteOffset": 4,
    "byteLength": 1,
    "sysexOffset": 4,
    "lengthSysex": 1,
    "dataRange": [
        0,
        100
    ],
    "initValue": 0,
    "sysexValueOffset": 0,
    "isPadding": false,
    "values": {                           // map of value => description
        "0": "OFF",
        "1": "MOD:CC01",
        "2": "BRETH:CC02",
        "3": "CC03",
        "4": "FOOT:CC04",
        "5": "PTIME:CC05",
        "6": "DENT:CC06",
        ...
    ]
}
```
Some parameters can have a measurement name attached (such as db or cent) and also there is scaling applied to the original data value:
```json
{
"id": "RELEASE",
"description": "Comp Release Time",
"byteOffset": 2,
"byteLength": 1,
"sysexOffset": 2,
"lengthSysex": 1,
"dataRange": [
    0,
    99
],
"initValue": 0,
"sysexValueOffset": 0,
"isPadding": false,
"values": null,
"displayMeasurement": "ms",         // 
"displayRange": [                   // scale dataRange to displayRange
    "10",
    "1000"
]
}
```

### Subblock Parameters

When a block contains a subblock (whether from a `group->block` or a `block->subblock`), it contains a parameter entry that references it, in the `.js` version, it is already linked through property `block`

```json
"WMT" : {
    "id": "WMT",                        // subblock ID (from XML)
    "blockName": "INST_CMN_WMT",        // name of the separate block created for this subblock
    "count": 4,                         // number of array instances
    "byteOffset": 28,                   // byte offset of item #0 (code should calculate addresses in real time)
    "blockByteLength": 28,              // size of a single subblock instance
    "byteLength": 112,                  // total size (blockByteLength * count)
    "description": "WMT",               // description from XML

    // only in.js version
    "block": ZenProperties["INST_CMN_WMT"]
}
```

The referenced block (`INST_CMN_WMT` in this example) exists as a separate top-level block with its own `parameters` object. Subblock parameters are identified by the presence of the `blockName` field.

**Array Item Address Calculation**: For array items (subblocks or blocks in groups), `byteOffset` stores the address of item #0. To calculate the address of item `i`, use: `address = byteOffset + (i * blockByteLength)`. The HTML documentation output shows all array items with their calculated addresses, but the JSON/JS output stores only the base offset for efficiency.

### Group Structure

Groups are containers for blocks and have a similar structure to blocks:

```json
  "VoDsgn": {
    "name": "VoDsgn",
    "description": "Voice Design",
    "byteLength": 136,
    "parameters": {
      "PCMT_CMN": {
        "blockName": "PCMT_CMN",
        "count": 1,
        "byteOffset": 0,
        "blockByteLength": 32,
        "byteLength": 32
      },
      "PCMS_PMT": {
        "blockName": "PCMS_PMT",
        "count": 4,
        "byteOffset": 32,
        "blockByteLength": 26,
        "byteLength": 104
      }
    }
  }
```

Groups contain a `parameters` object where each entry references a block. Block references within groups use the same structure as subblock parameters: `byteOffset` stores the address of item #0, and addresses for array items are calculated at runtime.

## Changelog

**Build 8 - Tweaks**

- **Python export**: Now builds a python compatible output file (untested, I don't do python!)

- **HTML Sysex Fix**: Offsets were being miscalculated in the html output (data was fine)

- **HTML Upgrades**: Arrays of over 4 children are hidden by default. Long values field are now truncated. Clicking on a value field pops up a table with all the values (and numeric equivalents)


**Build 7 - Categories and Structure Documentation**

- **Category field added**: All blocks now have a `category` field (format: `"Autogenerated: <config_name>"`). This is used to organize HTML output into category sections.

- **HTML output organized by category**: The HTML documentation is now split into sections by category, with a top-level table of contents listing all categories. Each category section contains its own TOC for groups and blocks, followed by the detailed tables.

- **Conditional isPadding field**: The `isPadding` property is now only included in JSON/JS output when it's `true`, reducing output size and making it easier to identify padding parameters.

- **Default category handling**: In HTML generation, blocks without a category are assigned `"Unnamed Category"` to ensure all items are properly categorized.

- **STRUCTURE.md added**: A compact reference document describing the output object structure, designed to help LLMs and developers quickly understand the format.

**Build 6 - Standalone HTML Generation**

- **Removed TableGen dependency**: HTML tables are now generated directly without the TableGen library. All table generation code is self-contained in `generateHTMLFromZenProperties.js`.

- **Removed text output**: Plain text (`.txt`) output has been removed. Only HTML output is generated for documentation.

- **Standalone generateHTML module**: The `generateHTMLFromZenProperties.js` module is now fully standalone and can be used independently. It takes a ZenProperties object and generates HTML without requiring external template files or dependencies.

- **Integrated HTML template**: The HTML template is now embedded directly in `generateHTMLFromZenProperties.js`, eliminating the need for a separate `template.html` file.

**Build 5**

- **Subblock parameters use single byteOffset value**: When a parameter references a subblock (indicated by the presence of a `blockName` field), the `byteOffset` field contains the address of item #0. Addresses for other array items are calculated at runtime using: `address = byteOffset + (index * blockByteLength)`. This applies to both subblocks within blocks and block references within groups. The HTML documentation output shows all array items with their calculated addresses for reference.

- **Property name changes**: 
  - `lengthBytes` has been renamed to `byteLength` for consistency with the `byteLength` property used at the block level.
  - `totalByteLength` has been renamed to `byteLength` in groups and block references within groups for consistency with the naming convention used throughout the codebase.

**Build 4 - JavaScript Port / Format Changes**

- **Converted from PHP to JavaScript (Node.js)** . Now uses `fast-xml-parser` for XML parsing.
Run with `node decode.js <config_name> [output_dir]` instead of `php decode.php <config_name>`.

***Format Changes in Build 4:***

The JSON output format has been unified in Build 4:

- **Blocks and Groups are now the same structure**: Both blocks and groups are stored as top-level objects in the JSON. Groups contain references to blocks with array information, but the structure is consistent.

- **Parameters are now objects keyed by ID**: The `parameters` field in blocks is now an object (not an array) where each parameter is keyed by its `id`. This allows direct access to parameters by ID (e.g., `block.parameters.NAME_1` instead of searching through an array).

- **Subblocks are created as separate blocks**: When a block contains a `<subblock>` element, the subblock is parsed as a separate block definition (e.g., `INST_CMN_WMT` is a separate block from `INST_CMN`). The parent block contains a parameter entry that references the subblock.


**Build 3**

Added `displayMeasurement` and `displayRange`. Fixes invalid item issues with EQ section.
Added ModelSyn and PCM Rythm structures to output, plus some model data.
Changed `valueOffset` to `sysexValueOffset` as it only influences data sent by sysex.

## Limitations

Doesn't fully/correctly process all the xml files, not sure how it all fits together as a whole, so just picking the parts I know I need right now.

Currently doesn't not process `<alternate>` sections for union types (e.g. MFX or Model)
