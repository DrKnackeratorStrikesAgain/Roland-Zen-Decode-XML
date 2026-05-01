#!/bin/bash

# Generate the JSON files
node decode.js mv_1
node decode.js mv_1_180_A
node decode.js mv_1_180_B
node decode.js jupiter
node decode.js juno

# Generate the HTML files
node concrete_decode.js mv_1_xml
node concrete_decode.js mv_1_180_A_xml
node concrete_decode.js mv_1_180_B_xml
node concrete_decode.js jupiter_xml
node concrete_decode.js juno_xml
