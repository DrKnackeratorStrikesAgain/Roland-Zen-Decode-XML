# Schema differences (`Jupiter` vs `Juno`)

- First file: `jupiter.json`
- Second file: `juno.json`

## Summary

| Metric | Jupiter | Juno |
|--------|--------:|-----:|
| Top-level blocks (items) | 120 | 94 |
| Blocks only in first | 28 | — |
| Blocks only in second | — | 2 |
| Blocks in both | 92 | 92 |
| Shared blocks with differing `byteLength` or `sysexLength` | 2 | — |
| Shared blocks with parameter / property differences | 18 | — |

## Blocks present only in one dump

### Only in first (`Jupiter`)

(28 blocks)

| Block | Description | byteLength | sysexLength |
|-------|-------------|----------:|------------:|
| `EDEDS` | Edit State Command | 4 | 2 |
| `EDFTI` | Temporary Scene Info Reply | 4 | 4 |
| `EDFTIR` | Temporary Scene Info Request Command | 4 | 1 |
| `EDLWC` | Wave Category List | 4 | 1 |
| `EDLWCR` | Wave Category List Request Command | 4 | 8 |
| `EDNEXZ` | Notify EXZ Update Command | 4 | 1 |
| `EDNFL` | Notify Scene Load Command | 4 | 1 |
| `EDNFW` | Notify Scene Write Command | 8 | 5 |
| `EDNTL` | Notify Tone Load Command | 4 | 2 |
| `EDNTW` | Notify Tone Write Command | 8 | 5 |
| `EDNWI` | Notify Write Info Command | 4 | 1 |
| `INST_CMN` | PCMRhythm Inst Common | 152 | 187 |
| `INST_CMN_WMT` | WMT | 28 | 35 |
| `MDLJPX` | JUPITER-X OSC Parameter | 108 | 157 |
| `MDLJPX_FENV` | FENV | 12 | 24 |
| `MDLJPX_LFO` | LFO | 16 | 20 |
| `MDLJPX_OSC` | OSC | 12 | 15 |
| `MDLJPX_PENV` | PENV | 12 | 23 |
| `MSMP_CMN` | Multisample Common | 16 | 16 |
| `MSMP_SPLT` | Multisample Split | 8 | 8 |
| `MdlJPX` |  | 212 |  |
| `PerfMirror` |  | 1944 |  |
| `SKINASGNKNOB` | Skin Knob function assign | 56 | 90 |
| `SKINASGNSW` | Skin Switch function assign | 44 | 65 |
| `SVOC` | System Vocoder | 44 | 82 |
| `StorageMirrorA` |  |  |  |
| `StorageMirrorB` |  |  |  |
| `UserSampleModify` |  | 20 | 32 |

### Only in second (`Juno`)

(2 blocks)

| Block | Description | byteLength | sysexLength |
|-------|-------------|----------:|------------:|
| `MDLJUNOX` | JUNO-X Model Parameter | 100 | 109 |
| `MdlJunoX` |  | 204 |  |

## Block sizes (shared blocks, where they differ)

| Block | Jupiter byteLength | Juno byteLength | Jupiter sysexLength | Juno sysexLength |
|-------|----------------:|---------------:|------------------:|----------------:|
| `Edit` | 137 | 80 | undefined | undefined |
| `EDWM` | 13 | 8 | 22 | 12 |

## Block metadata differences (shared blocks)

_No `name` / `description` differences for shared blocks._

## Parameters: added or removed per shared block

### `Edit`

- **Only in first (Jupiter):** `EDEDS`, `EDFTI`, `EDFTIR`, `EDLWC`, `EDLWCR`, `EDNEXZ`, `EDNFL`, `EDNFW`, `EDNTL`, `EDNTW`, `EDNWI`

### `ModelIf`

- **Only in first (Jupiter):** `JPX`
- **Only in second (Juno):** `JUNOX`

### `SC`

- **Only in first (Jupiter):** `SCENE_STARTUP_LSB`, `SCENE_STARTUP_MSB`
- **Only in second (Juno):** `SCENE_STARTUP`

## Parameter properties: keys and values

For shared blocks and shared parameter IDs: property keys present in only one file, and properties whose values differ. Large objects (e.g. full `values` maps) are truncated.

### `BCS`

#### Parameter `BUTTON_COLOR_1`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,15]` | `[0,16]` |
| `description` | `"(*)Button Color(011)"` | `"Button Color(011)"` |
| `values` | `{"0":"OFF","1":"ORANGE","2":"YELLOW","3":"YELLOW BLINK","4":"WHITE","5":"WHITE BLINK","6":"GREEN","7":"GREEN BLINK","8":"BLUE","9":"BLUE BLINK","10":"RED","11":"RED BLINK","12":"VIOLET","13":"VIOLET BLINK","14":"INTENSE WHITE","15":"INTENSE RED"}` | `{"0":"OFF","1":"ORANGE","2":"ORANGE BLINK","3":"YELLOW","4":"YELLOW BLINK","5":"WHITE","6":"WHITE BLINK","7":"GREEN","8":"GREEN BLINK","9":"SKYBLUE","10":"SKYBLUE BLINK","11":"RED","12":"RED BLINK","13":"VIOLET","14":"VIOLET BLINK","15":"BLUE","16":"BLUE BLINK"}` |

### `Edit`

#### Parameter `EDLEXZ`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `116` | `64` |

#### Parameter `EDLEXZR`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `112` | `60` |

#### Parameter `EDLF`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `32` | `24` |

#### Parameter `EDLFR`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `24` | `16` |

#### Parameter `EDLT`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `44` | `36` |

#### Parameter `EDLTR`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `36` | `28` |

#### Parameter `EDPC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `133` | `76` |

#### Parameter `EDPTI`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `88` | `48` |

#### Parameter `EDPTIR`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `84` | `44` |

#### Parameter `EDSEXZ`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `108` | `56` |

#### Parameter `EDSEXZR`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `104` | `52` |

#### Parameter `EDVD`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `48` | `40` |

#### Parameter `EDWM`


| Property | Jupiter | Juno |
|----------|--------|------|
| `blockByteLength` | `13` | `8` |
| `byteLength` | `13` | `8` |
| `byteOffset` | `120` | `68` |

### `EDWM`

#### Parameter `PADDING1`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `12` | `7` |

#### Parameter `PAWWC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteOffset` | `11` | `6` |
| `sysexOffset` | `00.00.00.15` | `00.00.00.0B` |

#### Parameter `WRI_PAT1`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteLength` | `2` | `1` |
| `byteOffset` | `3` | `2` |
| `dataRange` | `[0,511]` | `[0,255]` |
| `displayRange` | `[1,512]` | `[1,256]` |
| `lengthSysex` | `4` | `2` |
| `sysexOffset` | `00.00.00.05` | `00.00.00.03` |

#### Parameter `WRI_PAT2`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteLength` | `2` | `1` |
| `byteOffset` | `5` | `3` |
| `dataRange` | `[0,511]` | `[0,255]` |
| `displayRange` | `[1,512]` | `[1,256]` |
| `lengthSysex` | `4` | `2` |
| `sysexOffset` | `00.00.00.09` | `00.00.00.05` |

#### Parameter `WRI_PAT3`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteLength` | `2` | `1` |
| `byteOffset` | `7` | `4` |
| `dataRange` | `[0,511]` | `[0,255]` |
| `displayRange` | `[1,512]` | `[1,256]` |
| `lengthSysex` | `4` | `2` |
| `sysexOffset` | `00.00.00.0D` | `00.00.00.07` |

#### Parameter `WRI_PAT4`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteLength` | `2` | `1` |
| `byteOffset` | `9` | `5` |
| `dataRange` | `[0,511]` | `[0,255]` |
| `displayRange` | `[1,512]` | `[1,256]` |
| `lengthSysex` | `4` | `2` |
| `sysexOffset` | `00.00.00.11` | `00.00.00.09` |

#### Parameter `WRI_PRF`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteLength` | `2` | `1` |
| `dataRange` | `[0,511]` | `[0,255]` |
| `displayRange` | `[1,512]` | `[1,256]` |
| `lengthSysex` | `4` | `2` |

### `FC`

#### Parameter `WHLBND_FUNC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Control Wheel1 Function"` | `"Control Wheel1 Function"` |

#### Parameter `WHLMOD_FUNC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Control Wheel2 Function"` | `"Control Wheel2 Function"` |

### `FZ`

#### Parameter `RX_WHLBND`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Rx Control Wheel1"` | `"Rx Control Wheel1"` |

#### Parameter `RX_WHLMOD`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Rx Control Wheel2"` | `"Rx Control Wheel2"` |

### `MBAS`

#### Parameter `MODEL_1`


| Property | Jupiter | Juno |
|----------|--------|------|
| `values` | `{"0":"OFF","1":"NO ASSIGN","2":"COMMON","3":"FANTOM SYNTH","4":"AX-EDGE","5":"SYNTH LEGEND","6":"INTEGRA SYNTH","7":"XV-5080","8":"JUPITER-8","9":"JX-8P","10":"JUNO-106","11":"SH-101","12":"VOC","13":"RD PIANO","14":"LOCAL","15":"JD-800","16":"VOCAL DESIGNER","17":"JUPITER-X","18":"JUNO-60"}` | `{"0":"OFF","1":"NO ASSIGN","2":"COMMON","3":"FANTOM SYNTH","4":"AX-EDGE","5":"SYNTH LEGEND","6":"INTEGRA SYNTH","7":"XV-5080","8":"JUNO-X","9":"JUNO-106","10":"JUNO-60","11":"VOC","12":"RD PIANO","13":"LOCAL","14":"JUPITER-8","15":"JX-8P","16":"SH-101","17":"JD-800","18":"VOCAL DESIGNER"}` |

### `MDLCORE`

#### Parameter `ENV1KYBD2`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,6]` | `[0,3]` |

### `MDLJD800COM`

#### Parameter `KEYA_RNG_HI`

- Properties **only on second (Juno)**: `values`

#### Parameter `KEYA_RNG_LO`

- Properties **only on second (Juno)**: `values`

#### Parameter `KEYB_RNG_HI`

- Properties **only on second (Juno)**: `values`

#### Parameter `KEYB_RNG_LO`

- Properties **only on second (Juno)**: `values`

#### Parameter `KEYC_RNG_HI`

- Properties **only on second (Juno)**: `values`

#### Parameter `KEYC_RNG_LO`

- Properties **only on second (Juno)**: `values`

#### Parameter `KEYD_RNG_HI`

- Properties **only on second (Juno)**: `values`

#### Parameter `KEYD_RNG_LO`

- Properties **only on second (Juno)**: `values`

### `MDLJD800PTL`

#### Parameter `LFO1_DLY`

- Properties **only on second (Juno)**: `values`

#### Parameter `LFO2_DLY`

- Properties **only on second (Juno)**: `values`

### `MDLSYN0`

#### Parameter `ENV1KYBD2`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,6]` | `[0,3]` |

### `ModelIf`

#### Parameter `VoDesigner`


| Property | Jupiter | Juno |
|----------|--------|------|
| `sysexOffset` | `00.10.00.00` | `00.20.00.00` |

### `SC`

#### Parameter `COLOR_SET`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Button Color Set"` | `"Button Color Set"` |

#### Parameter `LED_OFF_BRIGHT`


| Property | Jupiter | Juno |
|----------|--------|------|
| `initValue` | `4` | `2` |

#### Parameter `PADDING2`


| Property | Jupiter | Juno |
|----------|--------|------|
| `byteLength` | `8` | `9` |
| `byteOffset` | `92` | `91` |

### `SL`

#### Parameter `AFT_SENS`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Aftertouch Sens"` | `"Aftertouch Sens"` |

#### Parameter `PARTSW_ASGN_3S`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Part Button Assign SHIFT+[11]-[15]"` | `"Part Button Assign SHIFT+[11]-[15]"` |

#### Parameter `WHLBND_FUNC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Control Wheel1 Function"` | `"Control Wheel1 Function"` |

#### Parameter `WHLBND_SRC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Control Wheel1 Source"` | `"Control Wheel1 Source"` |

#### Parameter `WHLMOD_FUNC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Control Wheel2 Function"` | `"Control Wheel2 Function"` |

#### Parameter `WHLMOD_SRC`


| Property | Jupiter | Juno |
|----------|--------|------|
| `description` | `"(*)Control Wheel2 Source"` | `"Control Wheel2 Source"` |

### `Storage`

#### Parameter `UserPerf`


| Property | Jupiter | Juno |
|----------|--------|------|
| `count` | `512` | `256` |
| `sysexItemSize` | `00.00.00.01` | `00.05.00.00` |
| `sysexOffset` | `08.00.00.00` | `00.00.00.00` |

#### Parameter `UserTone`


| Property | Jupiter | Juno |
|----------|--------|------|
| `count` | `512` | `256` |
| `sysexOffset` | `00.00.00.00` | `10.00.00.00` |

### `STP`

#### Parameter `KNOB_DLYFDBK`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,0]` | `[0,255]` |
| `description` | `"Reserved"` | `"Knob Position DELAY FEEDBACK"` |

#### Parameter `KNOB_DLYTIME`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,127]` | `[0,255]` |

#### Parameter `KNOB_MFX`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,127]` | `[0,255]` |

#### Parameter `KNOB_REVTIME`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,0]` | `[0,255]` |
| `description` | `"Reserved"` | `"Knob Position REVERB TIME"` |

### `SURFACE`

#### Parameter `surfaceType`


| Property | Jupiter | Juno |
|----------|--------|------|
| `values` | `{"0":"---","1":"JP8","2":"JX8P","3":"JUNO106","4":"SH101","5":"JUNO60","6":"NMCP"}` | `{"0":"---","1":"JP8","2":"JX8P","3":"JUNO106","4":"SH101","5":"JUNO60","6":"JUNOX"}` |

### `TONETYPE`

#### Parameter `MODEL`


| Property | Jupiter | Juno |
|----------|--------|------|
| `values` | `{"0":"NoAssign","1":"Common","2":"FantomSynth","3":"AXEdge","4":"SynthLegends","5":"IntegraSynth","6":"XV5080","7":"JUPITER8","8":"JX8P","9":"JUNO106","10":"SH101","11":"VOC","12":"RD Piano","13":"Local","14":"VEXP","15":"JD800","16":"VDN","17":"JPX","18":"JUNO60"}` | `{"0":"NoAssign","1":"Common","2":"FantomSynth","3":"AXEdge","4":"SynthLegends","5":"IntegraSynth","6":"XV5080","7":"JUPITER8","8":"JX8P","9":"JUNO106","10":"SH101","11":"VOC","12":"RD Piano","13":"Local","14":"VEXP","15":"JD800","16":"JUNO60","17":"JUNOX","18":"VDN"}` |

#### Parameter `TYPE`


| Property | Jupiter | Juno |
|----------|--------|------|
| `values` | `{"0":"NO_PRM","1":"PCMEX","2":"MODEL_CORE","3":"RD","4":"VOC","5":"JD800","6":"VDN","7":"JPX"}` | `{"0":"NO_PRM","1":"PCMEX","2":"MODEL_CORE","3":"RD","4":"VOC","5":"JD800","6":"JUNOX","7":"VDN"}` |

### `VIF`

#### Parameter `NUM`


| Property | Jupiter | Juno |
|----------|--------|------|
| `dataRange` | `[0,512]` | `[0,256]` |
