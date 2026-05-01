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

  node concrete_decode.js "$xml_folder"
  cp "out_${decode_name}/${decode_name}_concrete.html" "gh-pages/${decode_name}_concrete.html"
}

generate_config mv_1 mv_1_xml
generate_config mv_1_180_A mv_1_180_A_xml
generate_config mv_1_180_B mv_1_180_B_xml
generate_config jupiter jupiter_xml
generate_config juno juno_xml
