import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { basename, dirname, join } from "path";

const BMC_XML = "db_bmc0.xml";

/** @param {string} folderBasename */
function folderStem(folderBasename) {
    return folderBasename.endsWith("_xml") ? folderBasename.slice(0, -"_xml".length) : folderBasename;
}

/**
 * Some exported db_bmc0.xml files concatenate a full second document inside the first <db>:
 * a second <?xml ...?> followed by another <db id="BMC0">...</db>, then an extra </db>.
 *
 * This splits that into:
 * - *_A_xml/db_bmc0.xml — repaired: prefix through TCMP + tail from ZB_CC in the inner copy
 * - *_B_xml/db_bmc0.xml — the inner document only (standalone valid XML)
 */
function fixBrokenDbBmc0(text) {
    /** Second `<?xml` must be a real XML declaration, not `<?xml-stylesheet`. */
    const declRe = /<\?xml\s+version\s*=\s*["'][^"']*["']\s*\?>/g;
    const declStarts = [];
    let m;
    while ((m = declRe.exec(text)) !== null) {
        declStarts.push(m.index);
    }
    if (declStarts.length < 2) {
        return null;
    }
    const splitAt = declStarts[1];
    const prefix = text.slice(0, splitAt);
    const suffix = text.slice(splitAt);

    const closeTag = "</db>";
    const firstClose = suffix.indexOf(closeTag);
    if (firstClose === -1) {
        throw new Error("Second document fragment has no closing </db>");
    }
    const innerDoc = suffix.slice(0, firstClose + closeTag.length);

    const zbRe = /<baseblock\s+name="ZB_CC">/;
    const zb = zbRe.exec(innerDoc);
    if (!zb) {
        throw new Error(
            "Could not find <baseblock name=\"ZB_CC\"> in the inner document; cannot build repaired file"
        );
    }
    const tail = innerDoc.slice(zb.index);
    const repaired = `${prefix.trimEnd()}\n${tail}`;

    return { repaired, innerStandalone: innerDoc };
}

function usage() {
    console.error(`Usage: node fixBrokenXml.js <folder_ending_in_xml>`);
    console.error(`  Reads <folder>/${BMC_XML} and writes:`);
    console.error(`    <stem>_A_xml/${BMC_XML}  — merged repair`);
    console.error(`    <stem>_B_xml/${BMC_XML}  — extracted inner duplicate (standalone)`);
    console.error(`  Example: mv_1_180_xml → mv_1_180_A_xml / mv_1_180_B_xml (siblings of input folder)`);
    process.exit(1);
}

const folderArg = process.argv[2];
if (!folderArg) {
    usage();
}

const inputDir = join(process.cwd(), folderArg.replace(/[/\\]+$/, ""));
const inputFile = join(inputDir, BMC_XML);

if (!existsSync(inputFile)) {
    console.error(`Not found: ${inputFile}`);
    process.exit(1);
}

const text = readFileSync(inputFile, "utf8");
let result;
try {
    result = fixBrokenDbBmc0(text);
} catch (e) {
    console.error(e.message || e);
    process.exit(1);
}

if (!result) {
    console.error(`No embedded second <?xml ...?> found in ${inputFile}; nothing to fix.`);
    process.exit(1);
}

const parent = dirname(inputDir);
const stem = folderStem(basename(inputDir));
const dirA = join(parent, `${stem}_A_xml`);
const dirB = join(parent, `${stem}_B_xml`);

for (const d of [dirA, dirB]) {
    if (!existsSync(d)) {
        mkdirSync(d, { recursive: true });
    }
}

writeFileSync(join(dirA, BMC_XML), result.repaired, "utf8");
writeFileSync(join(dirB, BMC_XML), result.innerStandalone, "utf8");

console.log(`Wrote ${join(dirA, BMC_XML)}`);
console.log(`Wrote ${join(dirB, BMC_XML)}`);
