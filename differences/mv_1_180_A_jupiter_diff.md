# Schema differences (`MV-1-180-A` vs `Jupiter`)

- First file: `mv_1_180_A.json`
- Second file: `jupiter.json`

## Summary

| Metric | MV-1-180-A | Jupiter |
|--------|--------:|-----:|
| Top-level blocks (items) | 83 | 120 |
| Blocks only in first | 47 | — |
| Blocks only in second | — | 84 |
| Blocks in both | 36 | 36 |
| Shared blocks with differing `byteLength` or `sysexLength` | 6 | — |
| Shared blocks with parameter / property differences | 23 | — |

## Blocks present only in one dump

### Only in first (`MV-1-180-A`)

(47 blocks)

| Block | Description | byteLength | sysexLength |
|-------|-------------|----------:|------------:|
| `ARP` |  | 128 | 9 |
| `CLC` |  | 128 | 24 |
| `CLP` |  | 640 | 532 |
| `CLP_KNOB` | KNOB | 72 | 60 |
| `Clip` |  | 23616 |  |
| `Ctrl` |  | 97 |  |
| `GLT` |  | 64 | 27 |
| `GLT2` |  | 76 | 98 |
| `GLT2_DT` | DT | 36 | 48 |
| `GLT2_PL` | PL | 36 | 50 |
| `KBDARP` |  | 12 | 11 |
| `LOOP` |  | 212 |  |
| `LOOP_CMN` | PCMRhythm Common | 128 | 58 |
| `MVProj` |  | 5544 |  |
| `MultiSample` |  | 528 |  |
| `PCMRInst` |  | 216 |  |
| `PHR` |  | 192 | 177 |
| `PHR_BND` |  | 16 | 32 |
| `PHR_CC` |  | 64 | 128 |
| `PHR_NT` |  | 96 | 128 |
| `PJC` |  | 376 | 189 |
| `PJC2` |  | 136 | 256 |
| `PJC2_CHORDSET` | CHORDSET | 8 | 16 |
| `PJC_SCENE` | SCENE | 8 | 8 |
| `PJT` |  | 256 | 56 |
| `Proj` |  | 4320 |  |
| `Project` |  |  |  |
| `Project2` |  |  |  |
| `SCT` |  | 64 | 26 |
| `SLIM` |  | 12 | 9 |
| `SNG` |  | 16 | 2 |
| `SNG_CMN` |  | 64 | 45 |
| `SPATH` |  | 256 | 0 |
| `STP_SEQ_MUTE_TRK` | SEQ_MUTE_TRK | 12 | 0 |
| `STP_TRK` | TRK | 4 | 0 |
| `TAKE` |  | 32 | 41 |
| `TCMP` |  | 12 | 8 |
| `UserSample` |  | 84 |  |
| `UserSampleCmn` |  | 64 | 17 |
| `VCLP` |  | 128 | 102 |
| `VCLU` |  | 16 | 12 |
| `VOCAL_SEQ` |  | 12 | 8 |
| `VOCAL_SEQ_DATA` |  | 16 | 26 |
| `ZBCtrl` |  |  |  |
| `ZB_CC` |  | 93 | 58 |
| `ZB_IN` |  | 2 | 4 |
| `ZB_TN` |  | 2 | 4 |

### Only in second (`Jupiter`)

(84 blocks)

| Block | Description | byteLength | sysexLength |
|-------|-------------|----------:|------------:|
| `ARPC` | Arpeggio Common | 28 | 18 |
| `ARPP` | Arpeggio Part | 68 | 59 |
| `ARPUSER` | Arpeggio User Pattern Data | 68 | 132 |
| `ARPUSER_NOTE` | NOTE | 68 | 132 |
| `BCS` | Button Color Setup | 48 | 45 |
| `EDEDS` | Edit State Command | 4 | 2 |
| `EDFTI` | Temporary Scene Info Reply | 4 | 4 |
| `EDFTIR` | Temporary Scene Info Request Command | 4 | 1 |
| `EDLEXZ` | EXZ List | 4 | 1 |
| `EDLEXZR` | EXZ List Request Command | 4 | 4 |
| `EDLF` | Scene List | 4 | 1 |
| `EDLFR` | Scene List Request Command | 8 | 11 |
| `EDLT` | Tone List | 4 | 1 |
| `EDLTR` | Tone List Request Command | 8 | 11 |
| `EDLW` | Wave List | 4 | 1 |
| `EDLWC` | Wave Category List | 4 | 1 |
| `EDLWCR` | Wave Category List Request Command | 4 | 8 |
| `EDLWR` | Wave List Request Command | 8 | 11 |
| `EDNEXZ` | Notify EXZ Update Command | 4 | 1 |
| `EDNFL` | Notify Scene Load Command | 4 | 1 |
| `EDNFW` | Notify Scene Write Command | 8 | 5 |
| `EDNTL` | Notify Tone Load Command | 4 | 2 |
| `EDNTW` | Notify Tone Write Command | 8 | 5 |
| `EDNWI` | Notify Write Info Command | 4 | 1 |
| `EDPC` | Mode | 4 | 3 |
| `EDPTI` | Part Info Reply | 4 | 1 |
| `EDPTIR` | Part Info Request Command | 4 | 1 |
| `EDS` | System Information | 4 | 2 |
| `EDSEXZ` | EXZ Slot | 4 | 1 |
| `EDSEXZR` | EXZ Slot Request Command | 4 | 4 |
| `EDVD` | VoDsgn Command | 4 | 1 |
| `EDWM` | Write Message | 13 | 22 |
| `Edit` |  | 137 |  |
| `Editor` |  |  |  |
| `FC` | Scene Common | 48 | 46 |
| `FP` | Scene Part | 84 | 80 |
| `FZ` | Scene Zone | 28 | 28 |
| `IFX` |  | 84 | 144 |
| `MBAS` | System Model Bank Assign | 36 | 49 |
| `MDLCORE` | Model Core Parameter | 112 | 167 |
| `MDLJD800COM` | JD-800 Model Common | 44 | 45 |
| `MDLJD800FxB` | JD-800 Model Group B Effect | 32 | 30 |
| `MDLJD800PTL` | JD-800 Model Partial | 80 | 81 |
| `MDLJPX` | JUPITER-X OSC Parameter | 108 | 157 |
| `MDLJPX_FENV` | FENV | 12 | 24 |
| `MDLJPX_LFO` | LFO | 16 | 20 |
| `MDLJPX_OSC` | OSC | 12 | 15 |
| `MDLJPX_PENV` | PENV | 12 | 23 |
| `MDLSYN0` | Model Synth Parameter Interface type0 | 112 | 167 |
| `MDLVDN` | Vocal Designer Model | 32 | 11 |
| `MdlJD800` |  | 500 |  |
| `MdlJPX` |  | 212 |  |
| `MdlSynPrm0` |  | 216 |  |
| `ModelCore` |  | 296 |  |
| `ModelIf` |  |  |  |
| `OD` | Driver | 8 | 5 |
| `PNLFUNC` | Panel Surface Interface | 116 | 232 |
| `PartInfo` |  | 16 |  |
| `Perf` |  | 1944 |  |
| `PerfMirror` |  | 1944 |  |
| `PnlAsgn` |  | 116 |  |
| `RDAPFX` | RD Piano Sympathetic Resonance | 4 | 4 |
| `RDTONE` |  | 20 |  |
| `SKINASGNKNOB` | Skin Knob function assign | 56 | 90 |
| `SKINASGNSW` | Skin Switch function assign | 44 | 65 |
| `SL` | System Controller | 36 | 32 |
| `SURFACE` | model surfaceは仮想パラメータでSysExcからも見せない、 | 184 | 361 |
| `SVOC` | System Vocoder | 44 | 82 |
| `StorageMirrorA` |  |  |  |
| `StorageMirrorB` |  |  |  |
| `TONECOM` | ToneCom | 20 | 23 |
| `TONENAME` | ToneName | 16 | 16 |
| `TONETYPE` | Tone Type | 4 | 8 |
| `TWCmn` |  | 20 | 17 |
| `TWEfct` |  | 12 | 5 |
| `TWMod` |  | 28 | 26 |
| `Temporary` |  |  |  |
| `ToneType` |  | 4 |  |
| `USRDATABLK` | User Tone Data Block | 128 | 256 |
| `USRTONE` |  | 2048 |  |
| `VIF` | Favorite Scene | 4 | 0 |
| `VTWM` |  | 48 |  |
| `VTWMEfct` |  | 12 |  |
| `VoDsgn` |  | 136 |  |

## Block sizes (shared blocks, where they differ)

| Block | MV-1-180-A byteLength | Jupiter byteLength | MV-1-180-A sysexLength | Jupiter sysexLength |
|-------|----------------:|---------------:|------------------:|----------------:|
| `MSMP_SPLT` | 4 | 8 | 6 | 8 |
| `PCMS_PTL` | 36 | 36 | 29 | 30 |
| `SC` | 256 | 100 | 70 | 47 |
| `SCMP` | 24 | 24 | 24 | 21 |
| `STP` | 510 | 96 | 0 | 3 |
| `Sys` | 512 | 1372 | undefined | undefined |

## Block metadata differences (shared blocks)

### `PEQ`

| Field | MV-1-180-A | Jupiter |
|-------|--------|------|
| `description` |  | Part EQ |

### `RCMP`

| Field | MV-1-180-A | Jupiter |
|-------|--------|------|
| `description` |  | System RhythmComp |

### `SC`

| Field | MV-1-180-A | Jupiter |
|-------|--------|------|
| `description` |  | System Common |

### `SCMP`

| Field | MV-1-180-A | Jupiter |
|-------|--------|------|
| `description` |  | System Master Comp |

### `SEQ`

| Field | MV-1-180-A | Jupiter |
|-------|--------|------|
| `description` |  | System Master EQ |

### `STP`

| Field | MV-1-180-A | Jupiter |
|-------|--------|------|
| `description` |  | Setup |

## Parameters: added or removed per shared block

### `MSMP_SPLT`

- **Only in second (Jupiter):** `ORG_KEY`, `PADDING1`

### `PCMS_PTL`

- **Only in second (Jupiter):** `VA_INIT_PHASE`

### `SC`

- **Only in first (MV-1-180-A):** `BACKLIGHT_TIMER`, `COUNT_IN_SW`, `CUE_SEL`, `DEMO_WAITTIME`, `EXT_CHO_SEND`, `EXT_REV_SEND`, `EXT_SEL`, `KNOB_CATCH`, `LCD_BRT`, `LED_BRIGHT`, `LED_GLOW`, `LOAD_PROJ`, `METRO_LEV`, `METRO_OUT_SEL`, `METRO_TYPE`, `MIC_PHANTOM`, `MIDI_CTRL_CH`, `MIDI_CTRL_RX`, `MIDI_CTRL_TX_OUT1`, `MIDI_CTRL_TX_OUT2`, `MIDI_CTRL_TX_USB`, `MIDI_RX_AUTO_CH`, `MIDI_RX_STARTSTOP`, `MIDI_RX_STARTSTOP_USB`, `MIDI_STEPREC`, `MIDI_SYNC`, `MIDI_SYNC_OUT1`, `MIDI_SYNC_OUT2`, `MIDI_SYNC_OUT_USB`, `MIDI_TRK_CH_1`, `OUT_GAIN`, `PADDING3`, `PADDING4`, `PADDING5`, `PADDING6`, `PAD_CURV`, `PAD_GAIN`, `PAD_THRESHOLD`, `PAD_TRIG_SENS`, `PAD_WEAKINPUT`, `REC_QUANTIZE`, `REC_TRIGGER`, `REC_TRIGGER_CLOCK_COUNT_IN`, `SEQ_REC_TIMING`, `SOFT_THRU2`, `TONE_EDIT_KNOB_MODE`, `TR_REC_VELO`, `USB_MIDI_THRU2`, `USB_MIX_SEL`, `WAV_AUTO_PREVIEW`
- **Only in second (Jupiter):** `AGING`, `AGING_THERMO`, `ANLG_INP_LEVEL`, `ARP_SET_KIT`, `ARP_SET_TEMPO`, `ARP_SET_TONE`, `ARP_SYNC`, `BT_ID`, `BT_SW`, `CHO_SRC`, `COLOR_SET`, `CONDITION`, `CTRLER_MODE`, `CTRL_SRC_SEL`, `DLY_SRC`, `KEY_SHIFT`, `LED_OFF_BRIGHT`, `LED_ON_BRIGHT`, `LOCAL_SW`, `MIC_CHO_SEND`, `MIC_COMP_ATTCK`, `MIC_COMP_KNEE`, `MIC_COMP_POSTGAIN`, `MIC_COMP_RATIO`, `MIC_COMP_RELEASE`, `MIC_COMP_SW`, `MIC_COMP_THRESHOLD`, `MIC_DLY_SEND`, `MIC_INP_GAIN`, `MIC_NS_RELEASE`, `MIC_NS_SW`, `MIC_NS_THRESHOLD`, `MIC_POWER`, `MIC_REV_SEND`, `MIC_THRU_SW`, `OR_TEMPO`, `PERF_CTRL_CH`, `REMOTE_KEY`, `RESERVED_BASIC_CH`, `REV_SRC`, `SCALE_TUNE_SW`, `SCENE_LOCK`, `SCENE_STARTUP_LSB`, `SCENE_STARTUP_MSB`, `SPEAKER_GAIN`, `SPEAKER_OUT_SW`, `SYNC_MODE`, `SYNC_OUT`, `TEMPO`, `TONE_CC_MAP`, `TUNE`, `UA_THRU_AUX`, `UA_THRU_USB`, `USB_INP_LEVEL`, `USB_OUT_LEVEL`

### `SCMP`

- **Only in first (MV-1-180-A):** `HI_RELEASE_SYNC`, `LO_RELEASE_SYNC`, `MI_RELEASE_SYNC`
- **Only in second (Jupiter):** `PADDING1`

### `Setup`

- **Only in second (Jupiter):** `mfxB`, `sfx`

### `Storage`

- **Only in first (MV-1-180-A):** `UserMSMP`, `UserRhym`, `UserRhymInstSet`, `UserSMP`
- **Only in second (Jupiter):** `UserPerf`

### `STP`

- **Only in first (MV-1-180-A):** `ASGN_CUE_SW`, `BRDG_SW`, `BRDG_XFADE`, `CHANGE_CLIP_1`, `CHANGING_CLIP_1`, `COUNT_IN_SW`, `CUR_CLIP_1`, `CUR_TRACK`, `DUMMY_PUSH`, `EXT_CUE_SW`, `EXT_SEL`, `INT_EXT_CLK`, `KBDARP_SW`, `MEASURE_POS`, `METRO_FOR_REC`, `METRO_SW`, `MICRO_PHRS_SW`, `MIC_SW`, `MIXDOWN_FADE`, `MIXDOWN_SW`, `MIX_OUT_LEV`, `MIX_OUT_MUTE`, `PADDING5`, `PADDING6`, `PADDING7`, `PAD_MODE_SCT`, `PAD_MODE_SEQ`, `PAD_MODE_SNG`, `PAD_OCT_SHIFT`, `PC_CUE_SW`, `PHONES_CUE_SW`, `PHONES_LEV`, `REC_CLEAR`, `REC_CLIP`, `REC_END_OFST`, `REC_LAST_STEP`, `REC_LOOP`, `REC_MIDI_SYNC`, `REC_NORMALIZE_LEVEL`, `REC_PITCH_BEND`, `REC_PITCH_CHRM`, `REC_PITCH_FINE`, `REC_PLAY`, `REC_PRE_EM_SW`, `REC_QUANTIZE`, `REC_REVERSE`, `REC_SHUFFLE_POS`, `REC_SHUFFLE_RATIO`, `REC_SLICE_LEVEL`, `REC_SLICE_POINT`, `REC_SLICE_PREVIEW`, `REC_SPEED`, `REC_STANDBY`, `REC_START_OFST`, `REC_START_STEP`, `REC_STATE`, `REC_STEP_LENGTH`, `REC_TM_STRETCH`, `REC_TM_WINDOW`, `SAMPLE_EDIT_ZOOM`, `SEQ_MASTER_RUN`, `SEQ_MASTER_STEP_CUR`, `SEQ_MOTION_REC`, `SEQ_MUTE_TRK`, `SEQ_RUN_1`, `SEQ_STEPINPUT`, `SEQ_STEP_CUR_1`, `SEQ_STEP_PROGRESS_1`, `SONG_REC_STATE`, `STEP_SEL`, `TFX_SEL`, `TRK`, `TRK_SEL`, `VALUE_KNOB_MODE`, `VCLP_PATCH_NUM`, `VOCAL_LEVEL_CH_1`, `WAV_CUE_SW`
- **Only in second (Jupiter):** `AGING_AUTO_TUNE_SW`, `AGING_END_PIT_OFST_1`, `AGING_INIT_PHASE`, `AGING_INIT_PIT_OFST`, `AGING_START_SW`, `AGING_THERMO`, `AGING_TIMER`, `AGING_TIMER_SW`, `ANLG_INP_LEVEL`, `ANLG_INP_STEREO`, `ANLG_INP_SW`, `AUTO_TUNE_INERTIA`, `BEBEAT_GAIN`, `BEBEAT_MAX`, `BEBEAT_MIN`, `BEBEAT_PON`, `BEBEAT_SW`, `CONDITION`, `CUR_PART`, `CUR_PTL`, `CUR_RHY_PTL`, `DC_LEVEL`, `EFCT_TEMPO_SRC`, `IMP_LEVEL`, `IMP_RATE`, `KEY_TRANS`, `KNOB_DLYFDBK`, `KNOB_DLYTIME`, `KNOB_MFX`, `KNOB_REVTIME`, `MFX_MODE`, `MIC_CHO_SEND`, `MIC_DLY_SEND`, `MIC_DRY_LEVEL`, `MIC_INP_GAIN`, `MIC_INP_SW`, `MIC_JACK_STATE`, `MIC_REV_SEND`, `MIC_VOC_GAIN`, `OCT_SHIFT`, `OSC_LEV_DAC0L`, `OSC_LEV_DAC0R`, `OSC_LEV_DAC1L`, `OSC_LEV_DAC1R`, `PANEL_MODE`, `PERF_BS_LSB`, `PERF_BS_MSB`, `PERF_PC`, `PNL_EDIT_PART`, `RHYTHM`, `SFX_DLY_SEND`, `SINE_FREQ`, `SINE_LEVEL`, `SQR_FREQ`, `SQR_LEVEL`, `START_MODE`, `TEMPO_CLKSRC`, `TEMPO_DULL`, `TYPE`, `VD_REF_TONE`, `VOC_CRR_OUT`, `VOC_OUT_SEL`, `VP770TYPE`, `WHITE_LEVEL`

### `Sys`

- **Only in first (MV-1-180-A):** `SPATH`
- **Only in second (Jupiter):** `BCS`, `MBAS`, `SCMP`, `SEQ`, `SH`, `SL`, `SV`

## Parameter properties: keys and values

For shared blocks and shared parameter IDs: property keys present in only one file, and properties whose values differ. Large objects (e.g. full `values` maps) are truncated.

### `INST_CMN`

#### Parameter `CUTOFF_VCRV`

- Properties **only on second (Jupiter)**: `values`

#### Parameter `LEVEL_VCRV`

- Properties **only on second (Jupiter)**: `values`

### `MFX`

#### Parameter `choSend`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"MFX Delay Send Level"` | `"MFX Chorus Send Level"` |

#### Parameter `mfxType`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,90]` | `[0,93]` |

### `PCMR_PTL`

#### Parameter `CHO_SEND`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"Delay Send Level"` | `"Chorus Send Level"` |
| `initValue` | `127` | `0` |

#### Parameter `OUT_ASGN`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,1]` | `[0,7]` |
| `values` | `{"0":"DRY","1":"MFX"}` | `{"0":"DRY","1":"MFX","2":"COMP1","3":"COMP2","4":"COMP3","5":"COMP4","6":"COMP5","7":"COMP6"}` |

#### Parameter `REV_SEND`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `initValue` | `127` | `0` |

### `PCMS_PMT`

#### Parameter `RING12_LEVEL`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"RING 1-2 Level"` | `"RING1-2 Level"` |

#### Parameter `RING34_LEVEL`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"RING 3-4 Level"` | `"RING3-4 Level"` |

#### Parameter `STRUCT12`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"Structure 1-2"` | `"Structure1-2"` |

#### Parameter `STRUCT34`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"Structure 3-4"` | `"Structure3-4"` |

#### Parameter `XMOD12_DEPTH`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"CrossMod 1-2 Depth"` | `"CrossMod1-2 Depth"` |

#### Parameter `XMOD34_DEPTH`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"CrossMod 3-4 Depth"` | `"CrossMod3-4 Depth"` |

### `PCMS_PTL`

#### Parameter `PADDING1`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteLength` | `12` | `11` |
| `byteOffset` | `24` | `25` |

#### Parameter `VCF_TYPE`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `values` | `{"0":"FLAT","1":"TYPE-JP","2":"TYPE-M","3":"TYPE-P"}` | `{"0":"VCF1","1":"JP","2":"MG","3":"P5"}` |

### `PCMT_CMN`

#### Parameter `CATEGORY`

- Properties **only on second (Jupiter)**: `values`

| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,49]` | `[0,50]` |

#### Parameter `PORTA_CRV`

- Properties **only on second (Jupiter)**: `displayRange`

### `PCMT_PTL`

#### Parameter `CHO_SEND`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"Delay Send Level"` | `"Chorus Send Level"` |

#### Parameter `CUTOFF_VCRV`

- Properties **only on second (Jupiter)**: `values`

#### Parameter `LEVEL_VCRV`

- Properties **only on second (Jupiter)**: `values`

#### Parameter `WAV_GID`

- Properties **only on first (MV-1-180-A)**: `displayRange`

| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `initValue` | `8` | `0` |

### `PCMT_PTL_MCTL`

#### Parameter `DST1`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `values` | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"DLY","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"CHO","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ |

#### Parameter `DST2`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `values` | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"DLY","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"CHO","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ |

#### Parameter `DST3`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `values` | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"DLY","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"CHO","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ |

#### Parameter `DST4`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `values` | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"DLY","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ | `{"0":"OFF","1":"PCH","2":"CUT","3":"RES","4":"LEV","5":"PAN","6":"CHO","7":"REV","8":"PIT-LFO1","9":"PIT-LFO2","10":"TVF-LFO1","11":"TVF-LFO2","12":"TVA-LFO1","13":"TVA-LFO2","14":"PAN-LFO1","15":"PAN-LFO2","16":"LFO1-RATE","17":"LFO2-RATE","18":"PIT-ATK","19":"PIT-DCY","20":"PIT-REL","21":"TVF-ATK","22":"TVF-DCY","23":"TVF-REL","24":"TVA-ATK","25":"TVA-DCY","26":"TVA-REL","27" …` _(truncated, 720 chars)_ |

### `PEQ`

#### Parameter `EQ_SW`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"EQ Sw"` | `"Switch"` |
| `initValue` | `1` | `0` |

### `PTL_FENV`

#### Parameter `VCRV`

- Properties **only on second (Jupiter)**: `values`

### `PTL_PENV`

#### Parameter `VCRV`

- Properties **only on second (Jupiter)**: `values`

### `RCMP`

#### Parameter `OUT_ASGN`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,1]` | `[0,10]` |
| `values` | `{"0":"DRY","1":"MFX"}` | `{"0":"DRY","1":"MFX","2":"MAIN","3":"SUB1","4":"SUB2","5":"SUB3","6":"SUB4","7":"SUB5","8":"SUB6","9":"SUB7","10":"SUB8"}` |

#### Parameter `SW`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"Comp Sw"` | `"Comp Switch"` |

### `SC`

#### Parameter `APLAY_LVL`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `129` | `73` |
| `initValue` | `0` | `50` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.27` | `00.00.00.2F` |

#### Parameter `AUTO_OFF`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `125` | `70` |
| `initValue` | `0` | `2` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.23` | `00.00.00.2F` |

#### Parameter `DEV_ID`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `132` | `63` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.2A` | `00.00.00.2F` |

#### Parameter `LCD_CNT`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `120` | `62` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.1F` | `00.00.00.2F` |

#### Parameter `LINE_GAIN`

- Properties **only on first (MV-1-180-A)**: `values`
- Properties **only on second (Jupiter)**: `displayMeasurement`, `sysexValueOffset`

| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `199` | `68` |
| `dataRange` | `[0,2]` | `[-12,12]` |
| `description` | `"Line Gain"` | `"Line Output Gain"` |
| `initValue` | `0` | `6` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.43` | `00.00.00.2F` |

#### Parameter `PADDING1`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteLength` | `1` | `19` |
| `byteOffset` | `10` | `43` |

#### Parameter `PADDING2`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteLength` | `89` | `8` |
| `byteOffset` | `27` | `92` |

#### Parameter `RX_BS`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `141` | `16` |
| `sysexOffset` | `00.00.00.31` | `00.00.00.14` |

#### Parameter `RX_EXC`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `142` | `66` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.32` | `00.00.00.2F` |

#### Parameter `RX_PC`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `140` | `15` |
| `sysexOffset` | `00.00.00.30` | `00.00.00.13` |

#### Parameter `SOFT_THRU`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `133` | `64` |
| `description` | `"Soft Through 1"` | `"Soft Through"` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.2B` | `00.00.00.2F` |

#### Parameter `SYS_CTRL_SRC_1`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `116` | `8` |
| `sysexOffset` | `00.00.00.1B` | `00.00.00.0A` |

#### Parameter `TX_EDIT`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `143` | `67` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.33` | `00.00.00.2F` |

#### Parameter `USB_DRIVER`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `26` | `74` |
| `description` | `"USB Driver"` | `"USB Driver Select"` |
| `initValue` | `0` | `1` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.1A` | `00.00.00.2F` |

#### Parameter `USB_MIDI_THRU`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `135` | `65` |
| `description` | `"USB-MIDI Thru 1"` | `"USB-MIDI Thru"` |
| `initValue` | `1` | `0` |
| `lengthSysex` | `1` | `0` |
| `sysexOffset` | `00.00.00.2D` | `00.00.00.2F` |

### `SCMP`

#### Parameter `HI_SPLIT_FREQ`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"Split Freq High"` | `"Split Freq Hi"` |

#### Parameter `SW`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"Sw"` | `"Switch"` |

### `SEQ`

#### Parameter `SW`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `description` | `"EQ Sw"` | `"EQ Switch"` |

### `SH`

#### Parameter `choType`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,9]` | `[0,10]` |
| `initValue` | `0` | `1` |

### `Storage`

#### Parameter `UserTone`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `blockName` | `"PCMEX"` | `"USRTONE"` |
| `count` | `64` | `512` |

### `STP`

#### Parameter `APP_MODE`

- Properties **only on second (Jupiter)**: `sysexOffset`

| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `4` | `24` |

#### Parameter `LEVEL`

- Properties **only on second (Jupiter)**: `sysexOffset`

| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `1` | `7` |
| `dataRange` | `[0,255]` | `[0,127]` |

#### Parameter `PADDING1`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `63` | `3` |

#### Parameter `PADDING2`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteLength` | `3` | `1` |
| `byteOffset` | `105` | `45` |

#### Parameter `PADDING3`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `111` | `59` |

#### Parameter `PADDING4`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteLength` | `4` | `3` |
| `byteOffset` | `124` | `69` |

#### Parameter `TEMPO`

- Properties **only on second (Jupiter)**: `sysexOffset`

| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `byteOffset` | `2` | `18` |
| `description` | `"Master Tempo"` | `"Tempo Master"` |
| `initValue` | `7000` | `12000` |

### `SV`

#### Parameter `revType`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,7]` | `[0,8]` |

### `Sys`

#### Parameter `SC`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `blockByteLength` | `256` | `100` |
| `byteLength` | `256` | `100` |

### `UserSampleModify`

#### Parameter `END_POINT`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,2147483647]` | `[0,8388607]` |

#### Parameter `LOOP_START_POINT`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,2147483647]` | `[0,8388607]` |

#### Parameter `ORG_KEY`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `values` | `{"0":"C-1","1":"C#-1","2":"D-1","3":"D#-1","4":"E-1","5":"F-1","6":"F#-1","7":"G-1","8":"G#-1","9":"A-1","10":"A#-1","11":"B-1","12":"C0","13":"C#0","14":"D0","15":"D#0","16":"E0","17":"F0","18":"F#0","19":"G0","20":"G#0","21":"A0","22":"A#0","23":"B0","24":"C1","25":"C#1","26":"D1","27":"D#1","28":"E1","29":"F1","30":"F#1","31":"G1","32":"G#1","33":"A1","34":"A#1","35":"B1","3 …` _(truncated, 1364 chars)_ | `{"0":"C-1 - G9"}` |

#### Parameter `START_POINT`


| Property | MV-1-180-A | Jupiter |
|----------|--------|------|
| `dataRange` | `[0,2147483647]` | `[0,8388607]` |
