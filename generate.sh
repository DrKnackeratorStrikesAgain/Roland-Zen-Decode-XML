#!/bin/bash
set -euo pipefail

# Generate decode output + gh-pages HTML, then concrete report + gh-pages HTML for one configuration.
# decode_name: config basename (e.g. mv_1) — output goes to out_<decode_name>/
# xml_folder:  folder containing db_bmc0.xml (e.g. mv_1_xml)
generate_config() {
  local decode_name="$1"
  local xml_folder="$2"

  node decode.js "$decode_name"
  cp "out_${decode_name}/${decode_name}.html" "gh-pages/${decode_name}.html"
}

generate_config mv_1 mv_1_xml
generate_config mv_1_180_A mv_1_180_A_xml
generate_config mv_1_180_B mv_1_180_B_xml
generate_config jupiter jupiter_xml
generate_config juno juno_xml

node compareSchemaJson.js --first out_jupiter/jupiter.json --second out_juno/juno.json --output differences/jupiter_juno_diff.md --first-label Jupiter --second-label Juno
npx markdown-to-html --s differences/jupiter_juno_diff.md --output gh-pages/jupiter_juno_diff.html

node compareSchemaJson.js --first out_mv_1_180_A/mv_1_180_A.json --second out_juno/juno.json --output differences/mv_1_180_A_juno_diff.md --first-label MV-1-180-A --second-label Juno
npx markdown-to-html --s differences/mv_1_180_A_juno_diff.md --output gh-pages/mv_1_180_A_juno_diff.html

node compareSchemaJson.js --first out_mv_1_180_A/mv_1_180_A.json --second out_jupiter/jupiter.json --output differences/mv_1_180_A_jupiter_diff.md --first-label MV-1-180-A --second-label Jupiter
npx markdown-to-html --s differences/mv_1_180_A_jupiter_diff.md --output gh-pages/mv_1_180_A_jupiter_diff.html

node compareSchemaJson.js --first out_mv_1/mv_1.json --second out_mv_1_180_A/mv_1_180_A.json --output differences/mv_1_180_A_diff.md --first-label MV-1 --second-label MV-1-180-A
node compareSchemaJson.js --first out_mv_1/mv_1.json --second out_mv_1_180_B/mv_1_180_B.json --output differences/mv_1_180_B_diff.md --first-label MV-1 --second-label MV-1-180-B
node compareSchemaJson.js --first out_mv_1_180_A/mv_1_180_A.json --second out_mv_1_180_B/mv_1_180_B.json --output differences/mv_1_180_A_180_B_diff.md --first-label MV-1-180-A --second-label MV-1-180-B

