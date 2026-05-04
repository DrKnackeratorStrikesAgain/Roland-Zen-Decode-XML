# Schema differences (`MV-1` vs `MV-1-180-A`)

- First file: `mv_1.json`
- Second file: `mv_1_180_A.json`

## Summary

| Metric | MV-1 | MV-1-180-A |
|--------|--------:|-----:|
| Top-level blocks (items) | 83 | 83 |
| Blocks only in first | 0 | — |
| Blocks only in second | — | 0 |
| Blocks in both | 83 | 83 |
| Shared blocks with differing `byteLength` or `sysexLength` | 0 | — |
| Shared blocks with parameter / property differences | 0 | — |

## Blocks present only in one dump

### Only in first (`MV-1`)

_None._

### Only in second (`MV-1-180-A`)

_None._

## Block sizes (shared blocks, where they differ)

_No differences in `byteLength` / `sysexLength` for blocks that exist in both._

## Block metadata differences (shared blocks)

_No `name` / `description` differences for shared blocks._

## Parameters: added or removed per shared block

_Same parameter IDs for all shared blocks._

## Parameter properties: keys and values

For shared blocks and shared parameter IDs: property keys present in only one file, and properties whose values differ. Large objects (e.g. full `values` maps) are truncated.

_No value or property-key differences for parameters present in both._