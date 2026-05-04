/**
 * Compare two Zen/Core XML-derived JSON dumps and emit a Markdown diff report.
 *
 * Usage:
 *   node scripts/compareSchemaJson.js --first PATH --second PATH -o PATH
 * Optional: --first-label TEXT --second-label TEXT
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { parseArgs } from 'node:util';

/** @typedef {Record<string, unknown>} JsonObj */

/** Parameter keys stored as unpacked integers → show as Roland 7-bit address bytes AA.BB.CC.DD */
const SYSEX_DOTTED_PROPS = new Set(['sysexOffset', 'sysexValueOffset', 'sysexItemSize']);

/** Matches {@link decode.js} MSB-first dotted groups (four 7-bit fields, hex capitals). */
function formatSevenBitSysexDotted(num) {
  if (!Number.isFinite(num))
    return null;
  const n = Math.trunc(Number(num));
  if (n < 0 || n > 0x0fffffff)
    return null;
  const bytes = [];
  let remaining = n;
  for (let i = 0; i < 4; i++) {
    bytes.unshift(remaining % 128);
    remaining = Math.floor(remaining / 128);
  }
  return bytes.map((b) => b.toString(16).toUpperCase().padStart(2, '0')).join('.');
}

/**
 * Markdown cell content for scalar / JSON values.
 * @param {unknown} v
 * @param {string | null} [propKey]
 */
function fmtVal(v, propKey = null) {
  if (
    typeof propKey === 'string'
    && SYSEX_DOTTED_PROPS.has(propKey)
    && typeof v === 'number'
    && Number.isInteger(v)
  ) {
    const dotted = formatSevenBitSysexDotted(v);
    if (dotted !== null)
      return `\`${dotted}\``;
  }

  let jsn = JSON.stringify(v);
  if (jsn === undefined)
    jsn = String(v);
  if (jsn.length > 400)
    return `\`${jsn.slice(0, 380)} …\` _(truncated, ${jsn.length} chars)_`;
  return `\`${jsn}\``;
}

/** @param {unknown} s */
function escCell(s) {
  if (s === null || s === undefined) return '`null`';
  if (typeof s === 'object') {
    const j = JSON.stringify(s);
    return j.length > 180 ? `\`${j.slice(0, 180)}…\`` : `\`${j}\``;
  }
  let t = String(s).replaceAll('|', '\\|').replaceAll('\n', ' ');
  if (t.length > 96)
    t = `${t.slice(0, 93)}...`;
  return t;
}

/** @param {unknown} a @param {unknown} b */
function deepEqual(a, b) {
  if (Object.is(a, b))
    return true;
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null)
    return false;

  const aa = /** @type {JsonObj} */ (a);
  const bb = /** @type {JsonObj} */ (b);

  if (Array.isArray(aa) !== Array.isArray(bb))
    return false;

  if (Array.isArray(aa)) {
    if (aa.length !== bb.length)
      return false;
    for (let i = 0; i < aa.length; i++) {
      if (!deepEqual(aa[i], bb[i]))
        return false;
    }
    return true;
  }

  const ka = Object.keys(aa).sort();
  const kb = Object.keys(bb).sort();
  if (ka.length !== kb.length)
    return false;
  for (let i = 0; i < ka.length; i++) {
    if (ka[i] !== kb[i])
      return false;
  }
  for (const k of ka) {
    if (!deepEqual(aa[k], bb[k]))
      return false;
  }
  return true;
}

function main() {
  const { values: v } = parseArgs({
    options: {
      first: { type: 'string' },
      second: { type: 'string' },
      output: { type: 'string', short: 'o' },
      'first-label': { type: 'string' },
      'second-label': { type: 'string' },
    },
    strict: true,
    allowPositionals: false,
  });

  if (!v.first || !v.second || !v.output) {
    console.error(
      'Usage: compareSchemaJson.js --first PATH --second PATH --output PATH\n'
      + 'Optional: --first-label TEXT --second-label TEXT',
    );
    process.exit(1);
  }

  /** @param {string} raw */
  const resolvePathArg = (raw) => {
    const home = os.homedir();
    if (raw.startsWith('~/') || raw.startsWith('~\\'))
      return path.resolve(path.join(home, raw.slice(2)));
    return path.resolve(raw);
  };

  const firstPath = resolvePathArg(v.first);
  const secondPath = resolvePathArg(v.second);
  const outPath = resolvePathArg(v.output);

  const lab1 = v['first-label'] || path.basename(firstPath);
  const lab2 = v['second-label'] || path.basename(secondPath);

  /** @type {JsonObj} */
  const one = JSON.parse(fs.readFileSync(firstPath, 'utf8'));
  /** @type {JsonObj} */
  const two = JSON.parse(fs.readFileSync(secondPath, 'utf8'));

  const keys1 = new Set(Object.keys(one));
  const keys2 = new Set(Object.keys(two));

  const only1 = [...keys1].filter((k) => !keys2.has(k)).sort();
  const only2 = [...keys2].filter((k) => !keys1.has(k)).sort();
  const common = [...keys1].filter((k) => keys2.has(k)).sort();

  /** @type {Array<Record<string, unknown>>} */
  const blockSizeDiffs = [];
  for (const k of common) {
    const b1 = /** @type {JsonObj} */ (one[k]);
    const b2 = /** @type {JsonObj} */ (two[k]);
    const bl1 = b1.byteLength;
    const bl2 = b2.byteLength;
    const sl1 = b1.sysexLength;
    const sl2 = b2.sysexLength;
    if (bl1 !== bl2 || sl1 !== sl2)
      blockSizeDiffs.push({ block: k, first_byteLength: bl1, second_byteLength: bl2, first_sysexLength: sl1, second_sysexLength: sl2 });
  }

  /** @type {unknown[]} */
  const paramDiffsByBlock = [];

  for (const k of common) {
    /** @type {JsonObj | undefined} */
    const rp1 = /** @type {JsonObj | undefined} */ ((/** @type {JsonObj} */ (one[k])).parameters);
    /** @type {JsonObj | undefined} */
    const rp2 = /** @type {JsonObj | undefined} */ ((/** @type {JsonObj} */ (two[k])).parameters);
    const p1 = rp1 && typeof rp1 === 'object' ? rp1 : {};
    const p2 = rp2 && typeof rp2 === 'object' ? rp2 : {};
    const ids1 = new Set(Object.keys(p1));
    const ids2 = new Set(Object.keys(p2));
    /** @type {Set<string>} */
    const sharedIds = new Set([...ids1].filter((x) => ids2.has(x)));

    /** @type {Record<string, unknown>} */
    const blockEntry = {
      block: k,
      params_only_first: [...ids1].filter((x) => !ids2.has(x)).sort(),
      params_only_second: [...ids2].filter((x) => !ids1.has(x)).sort(),
      param_value_diffs: [],
    };

    for (const meta of ['name', 'description']) {
      if ((/** @type {JsonObj} */ (one[k]))[meta] !== (/** @type {JsonObj} */ (two[k]))[meta]) {
        if (!blockEntry.block_meta_diffs)
          blockEntry.block_meta_diffs = [];
        blockEntry.block_meta_diffs.push({
          field: meta,
          first: (/** @type {JsonObj} */ (one[k]))[meta],
          second: (/** @type {JsonObj} */ (two[k]))[meta],
        });
      }
    }

    for (const pid of [...sharedIds].sort()) {
      const a = /** @type {JsonObj} */ (p1[pid]);
      const b = /** @type {JsonObj} */ (p2[pid]);
      const keysA = new Set(Object.keys(a));
      const keysB = new Set(Object.keys(b));

      /** @type {string[]} */
      const propsOnly1 = [...keysA].filter((x) => !keysB.has(x)).sort();
      /** @type {string[]} */
      const propsOnly2 = [...keysB].filter((x) => !keysA.has(x)).sort();
      /** @type {Array<{ property: string, first: unknown, second: unknown }>} */
      const changed = [];
      for (const prop of [...keysA].filter((x) => keysB.has(x)).sort()) {
        if (!deepEqual(a[prop], b[prop]))
          changed.push({ property: prop, first: a[prop], second: b[prop] });
      }
      if (propsOnly1.length || propsOnly2.length || changed.length) {
        blockEntry.param_value_diffs.push({
          param: pid,
          props_only_first: propsOnly1,
          props_only_second: propsOnly2,
          changed_props: changed,
        });
      }
    }

    const hasMeta = Array.isArray(blockEntry.block_meta_diffs) && blockEntry.block_meta_diffs.length > 0;
    if (
      /** @type {unknown[]} */ (blockEntry.params_only_first).length
      || /** @type {unknown[]} */ (blockEntry.params_only_second).length
      || /** @type {unknown[]} */ (blockEntry.param_value_diffs).length
      || hasMeta
    )
      paramDiffsByBlock.push(blockEntry);
  }

  /** @type {string[]} */
  const lines = [];

  lines.push(`# Schema differences (\`${lab1}\` vs \`${lab2}\`)`);
  lines.push('');
  lines.push(`- First file: \`${path.basename(firstPath)}\``);
  lines.push(`- Second file: \`${path.basename(secondPath)}\``);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`| Metric | ${lab1} | ${lab2} |`);
  lines.push('|--------|--------:|-----:|');
  lines.push(`| Top-level blocks (items) | ${Object.keys(one).length} | ${Object.keys(two).length} |`);
  lines.push(`| Blocks only in first | ${only1.length} | — |`);
  lines.push(`| Blocks only in second | — | ${only2.length} |`);
  lines.push(`| Blocks in both | ${common.length} | ${common.length} |`);
  lines.push(
    `| Shared blocks with differing \`byteLength\` or \`sysexLength\` | ${blockSizeDiffs.length} | — |`,
  );
  lines.push(
    `| Shared blocks with parameter / property differences | ${paramDiffsByBlock.length} | — |`,
  );
  lines.push('');

  lines.push('## Blocks present only in one dump');
  lines.push('');
  lines.push(`### Only in first (\`${lab1}\`)`);
  lines.push('');
  if (only1.length > 0) {
    lines.push(`(${only1.length} blocks)`);
    lines.push('');
    lines.push('| Block | Description | byteLength | sysexLength |');
    lines.push('|-------|-------------|----------:|------------:|');
    for (const bk of only1) {
      const blk = /** @type {JsonObj} */ (one[bk]);
      lines.push(`| \`${bk}\` | ${escCell(blk.description ?? '')} | ${blk.byteLength ?? ''} | ${blk.sysexLength ?? ''} |`);
    }
  }
  else {
    lines.push('_None._');
  }
  lines.push('');

  lines.push(`### Only in second (\`${lab2}\`)`);
  lines.push('');
  if (only2.length > 0) {
    lines.push(`(${only2.length} blocks)`);
    lines.push('');
    lines.push('| Block | Description | byteLength | sysexLength |');
    lines.push('|-------|-------------|----------:|------------:|');
    for (const bk of only2) {
      const blk = /** @type {JsonObj} */ (two[bk]);
      lines.push(`| \`${bk}\` | ${escCell(blk.description ?? '')} | ${blk.byteLength ?? ''} | ${blk.sysexLength ?? ''} |`);
    }
  }
  else {
    lines.push('_None._');
  }
  lines.push('');

  lines.push('## Block sizes (shared blocks, where they differ)');
  lines.push('');
  if (blockSizeDiffs.length > 0) {
    lines.push(
      `| Block | ${lab1} byteLength | ${lab2} byteLength | ${lab1} sysexLength | ${lab2} sysexLength |`,
    );
    lines.push('|-------|----------------:|---------------:|------------------:|----------------:|');
    blockSizeDiffs.sort((x, y) => String(x.block).localeCompare(String(y.block)));
    for (const d of blockSizeDiffs)
      lines.push(`| \`${d.block}\` | ${d.first_byteLength} | ${d.second_byteLength} | ${d.first_sysexLength} | ${d.second_sysexLength} |`);
  }
  else {
    lines.push('_No differences in `byteLength` / `sysexLength` for blocks that exist in both._');
  }
  lines.push('');

  lines.push('## Block metadata differences (shared blocks)');
  lines.push('');
  const metaBlocks = paramDiffsByBlock.filter(
    /** @returns {boolean} */
    (b0) =>
      Array.isArray(b0.block_meta_diffs) && /** @type {unknown[]} */ (b0.block_meta_diffs).length > 0,
  );
  if (metaBlocks.length > 0) {
    metaBlocks.sort((x, y) => String(x.block).localeCompare(String(y.block)));
    for (const be of metaBlocks) {
      lines.push(`### \`${be.block}\``);
      lines.push('');
      lines.push(`| Field | ${lab1} | ${lab2} |`);
      lines.push('|-------|--------|------|');
      /** @type {Array<{field: string, first: unknown, second: unknown}>} */
      const metaRows = be.block_meta_diffs;
      for (const m of metaRows) {
        lines.push(`| \`${m.field}\` | ${escCell(m.first)} | ${escCell(m.second)} |`);
      }
      lines.push('');
    }
  }
  else {
    lines.push('_No `name` / `description` differences for shared blocks._');
    lines.push('');
  }

  lines.push('## Parameters: added or removed per shared block');
  lines.push('');
  const blocksWithParamSetDiff = paramDiffsByBlock.filter(
    (be) => be.params_only_first.length || be.params_only_second.length,
  );
  if (blocksWithParamSetDiff.length > 0) {
    blocksWithParamSetDiff.sort((x, y) => String(x.block).localeCompare(String(y.block)));
    for (const be of blocksWithParamSetDiff) {
      lines.push(`### \`${be.block}\``);
      lines.push('');
      if (/** @type {unknown[]} */ (be.params_only_first).length) {
        lines.push(
          `- **Only in first (${lab1}):** `
          + /** @type {string[]} */ (be.params_only_first).map((p) => `\`${p}\``).join(', '),
        );
      }
      if (/** @type {unknown[]} */ (be.params_only_second).length) {
        lines.push(
          `- **Only in second (${lab2}):** `
          + /** @type {string[]} */ (be.params_only_second).map((p) => `\`${p}\``).join(', '),
        );
      }
      lines.push('');
    }
  }
  else {
    lines.push('_Same parameter IDs for all shared blocks._');
    lines.push('');
  }

  lines.push('## Parameter properties: keys and values');
  lines.push('');
  lines.push(
    'For shared blocks and shared parameter IDs: property keys present in only one file, '
    + 'and properties whose values differ. Large objects (e.g. full `values` maps) are truncated.',
  );
  lines.push('');

  const diffBlocksParams = paramDiffsByBlock.filter((b) =>
    /** @type {Array<{changed_props?: unknown[], props_only_first?: unknown[], props_only_second?: unknown[]}>} */ (
      b.param_value_diffs
    ).some((p) => (p.changed_props?.length || 0) > 0
      || (p.props_only_first?.length || 0) > 0
      || (p.props_only_second?.length || 0) > 0),
  );

  if (!diffBlocksParams.length) {
    lines.push('_No value or property-key differences for parameters present in both._');
  }
  else {
    diffBlocksParams.sort((x, y) => String(x.block).localeCompare(String(y.block)));
    for (const be of diffBlocksParams) {
      const plist = /** @type {unknown[]} */ (be.param_value_diffs).filter((p0) => {
        const p = /** @type {{changed_props?: unknown[], props_only_first?: unknown[], props_only_second?: unknown[]}} */ (p0);
        return (p.changed_props?.length ?? 0) > 0
          || (p.props_only_first?.length ?? 0) > 0
          || (p.props_only_second?.length ?? 0) > 0;
      });

      if (!plist.length)
        continue;

      lines.push(`### \`${be.block}\``);
      lines.push('');
      for (const p0 of plist) {
        const p = /** @type {{param: string, changed_props: Array<{property: string, first: unknown, second: unknown}>, props_only_first: string[], props_only_second: string[]}} */ (p0);
        lines.push(`#### Parameter \`${p.param}\``);
        lines.push('');
        if ((p.props_only_first ?? []).length) {
          lines.push(
            `- Properties **only on first (${lab1})**: `
            + (p.props_only_first ?? []).map((x) => `\`${x}\``).join(', '),
          );
        }
        if ((p.props_only_second ?? []).length) {
          lines.push(
            `- Properties **only on second (${lab2})**: `
            + (p.props_only_second ?? []).map((x) => `\`${x}\``).join(', '),
          );
        }
        if ((p.changed_props ?? []).length) {
          lines.push('');
          lines.push(`| Property | ${lab1} | ${lab2} |`);
          lines.push('|----------|--------|------|');
          for (const c of p.changed_props) {
            lines.push(`| \`${c.property}\` | ${fmtVal(c.first, c.property)} | ${fmtVal(c.second, c.property)} |`);
          }
        }
        lines.push('');
      }
    }
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
  console.log(`Wrote ${outPath} (${lines.length} lines)`);
}

main();
