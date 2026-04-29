const ZenProperties = {};

ZenProperties["ARP"] = {
  "name": "ARP",
  "description": "",
  "byteLength": 128,
  "sysexLength": 9,
  "parameters": {
    "ARP_SW": {
      "id": "ARP_SW",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Arpeggio Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ARP_HOLD": {
      "id": "ARP_HOLD",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Arpeggio Hold",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ARP_MOTIF": {
      "id": "ARP_MOTIF",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Arpeggio Motif",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "values": {
        "0": "UP",
        "1": "DOWN",
        "2": "UP&DOWN",
        "3": "RANDOM",
        "4": "NOTE ORDER"
      }
    },
    "ARP_DURATION": {
      "id": "ARP_DURATION",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Arpeggio Duration",
      "dataRange": [
        0,
        100
      ],
      "initValue": 80,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "ARP_VELO": {
      "id": "ARP_VELO",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Arpeggio Velocity",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "REAL",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100",
        "101": "101",
        "102": "102",
        "103": "103",
        "104": "104",
        "105": "105",
        "106": "106",
        "107": "107",
        "108": "108",
        "109": "109",
        "110": "110",
        "111": "111",
        "112": "112",
        "113": "113",
        "114": "114",
        "115": "115",
        "116": "116",
        "117": "117",
        "118": "118",
        "119": "119",
        "120": "120",
        "121": "121",
        "122": "122",
        "123": "123",
        "124": "124",
        "125": "125",
        "126": "126",
        "127": "127"
      }
    },
    "ARP_OCT": {
      "id": "ARP_OCT",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Arpeggio Octave Range",
      "dataRange": [
        -3,
        3
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ARP_RATE": {
      "id": "ARP_RATE",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Arpeggio Shuffle Rate",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1
    },
    "ARP_RESO": {
      "id": "ARP_RESO",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Arpeggio Shuffle Resolution",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "16TH",
        "1": "8TH"
      }
    },
    "ARP_GRID": {
      "id": "ARP_GRID",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Arpeggio Grid",
      "dataRange": [
        0,
        5
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "values": {
        "0": "1/4",
        "1": "1/8",
        "2": "1.5/8",
        "3": "1/16",
        "4": "1.5/16",
        "5": "1/32"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 9,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 12,
      "byteLength": 116,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["CLC"] = {
  "name": "CLC",
  "description": "",
  "byteLength": 128,
  "sysexLength": 24,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": " 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1
    },
    "TEMPO": {
      "id": "TEMPO",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "Clip Tempo",
      "dataRange": [
        4000,
        30000
      ],
      "initValue": 7000,
      "sysexOffset": 16,
      "lengthSysex": 4,
      "displayRange": [
        40,
        300
      ]
    },
    "TYPE": {
      "id": "TYPE",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Clip Type",
      "dataRange": [
        -1,
        2
      ],
      "initValue": -1,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "TONE",
        "2": "DRUM",
        "3": "LOOPER"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "TAG_KEY": {
      "id": "TAG_KEY",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Key",
      "dataRange": [
        0,
        12
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "C",
        "2": "C#",
        "3": "D",
        "4": "D#",
        "5": "E",
        "6": "F",
        "7": "F#",
        "8": "G",
        "9": "G#",
        "10": "A",
        "11": "A#",
        "12": "B"
      }
    },
    "TAG_SCALE": {
      "id": "TAG_SCALE",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Scale",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "MAJOR",
        "2": "MINOR"
      }
    },
    "PAD_OCT_SHIFT": {
      "id": "PAD_OCT_SHIFT",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Pad Oct Shift",
      "dataRange": [
        -5,
        5
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 24,
      "byteLength": 104,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["CLP_KNOB"] = {
  "name": "CLP_KNOB",
  "description": "KNOB",
  "byteLength": 72,
  "sysexLength": 60,
  "parameters": {
    "ASGN_1": {
      "id": "ASGN_1",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "Knob Assign 1",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "lengthSysex": 4,
      "sysexValueOffset": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "MIN_1": {
      "id": "MIN_1",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "Knob Asssin Range Min 1",
      "dataRange": [
        -20000,
        20000
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 4
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 22,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "MAX_1": {
      "id": "MAX_1",
      "byteOffset": 24,
      "byteLength": 2,
      "description": "Knob Asssin Range Max 1",
      "dataRange": [
        -20000,
        20000
      ],
      "initValue": 0,
      "sysexOffset": 40,
      "lengthSysex": 4
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 34,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 36,
      "byteLength": 36,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["CLP"] = {
  "name": "CLP",
  "description": "",
  "byteLength": 640,
  "sysexLength": 532,
  "parameters": {
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "lengthSysex": 1
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Pan (CC#10)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PIT_CRS": {
      "id": "PIT_CRS",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Coarse Tune (RPN#2)",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PIT_FINE": {
      "id": "PIT_FINE",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Fine Tune (RPN#1)",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "MONO_POLY": {
      "id": "MONO_POLY",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Mono/Poly",
      "dataRange": [
        0,
        2
      ],
      "initValue": 2,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "MONO",
        "1": "POLY",
        "2": "TONE"
      }
    },
    "LEGATO": {
      "id": "LEGATO",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Legato Sw",
      "dataRange": [
        0,
        2
      ],
      "initValue": 2,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON",
        "2": "TONE"
      }
    },
    "BEND_RANGE": {
      "id": "BEND_RANGE",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Bend Range",
      "dataRange": [
        0,
        25
      ],
      "initValue": 25,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "values": {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "TONE"
      }
    },
    "PORT_SW": {
      "id": "PORT_SW",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Portamento Sw (CC#65)",
      "dataRange": [
        0,
        2
      ],
      "initValue": 2,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON",
        "2": "TONE"
      }
    },
    "PORT_TIME": {
      "id": "PORT_TIME",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Portamento Time (CC#5)",
      "dataRange": [
        0,
        128
      ],
      "initValue": 128,
      "sysexOffset": 8,
      "lengthSysex": 2,
      "values": {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100",
        "101": "101",
        "102": "102",
        "103": "103",
        "104": "104",
        "105": "105",
        "106": "106",
        "107": "107",
        "108": "108",
        "109": "109",
        "110": "110",
        "111": "111",
        "112": "112",
        "113": "113",
        "114": "114",
        "115": "115",
        "116": "116",
        "117": "117",
        "118": "118",
        "119": "119",
        "120": "120",
        "121": "121",
        "122": "122",
        "123": "123",
        "124": "124",
        "125": "125",
        "126": "126",
        "127": "127",
        "128": "TONE"
      }
    },
    "CUTOFF_OFST": {
      "id": "CUTOFF_OFST",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Cutoff Offset (CC#74)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "RESO_OFST": {
      "id": "RESO_OFST",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Resonance Offset (CC#71)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ATK_OFST": {
      "id": "ATK_OFST",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Attack Time Offset (CC#73)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "DCY_OFST": {
      "id": "DCY_OFST",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Decay Time Offset (CC#75)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "REL_OFST": {
      "id": "REL_OFST",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "Release Time Offset (CC#72)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "VIB_RATE": {
      "id": "VIB_RATE",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "Vibrato Rate (CC#76)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "VIB_DEPTH": {
      "id": "VIB_DEPTH",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "Vibrato Depth (CC#77)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "VIB_DELAY": {
      "id": "VIB_DELAY",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Vibrato Delay (CC#78)",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "OCT_SHIFT": {
      "id": "OCT_SHIFT",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Octave Shift",
      "dataRange": [
        -3,
        3
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "VEL_SENS_OFST": {
      "id": "VEL_SENS_OFST",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Velocity Sens Offset",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "CHO_SEND": {
      "id": "CHO_SEND",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Delay Send Level (CC#93)",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 1
    },
    "REV_SEND": {
      "id": "REV_SEND",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Reverb Send Level (CC#91)",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "OUTPUT": {
      "id": "OUTPUT",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Output Assign",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "DRY",
        "1": "IFX"
      }
    },
    "ASGN_MODE": {
      "id": "ASGN_MODE",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Voice Assign Mode",
      "dataRange": [
        0,
        2
      ],
      "initValue": 1,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "SINGLE",
        "1": "LIMIT",
        "2": "FULL"
      }
    },
    "BEND_MODE": {
      "id": "BEND_MODE",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Bend Mode",
      "dataRange": [
        0,
        2
      ],
      "initValue": 2,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "NORMAL",
        "1": "C+L",
        "2": "TONE"
      }
    },
    "UNISON_SW": {
      "id": "UNISON_SW",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Unison Sw",
      "dataRange": [
        0,
        2
      ],
      "initValue": 2,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON",
        "2": "TONE"
      }
    },
    "VCRV_TYPE": {
      "id": "VCRV_TYPE",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Velocity Curve Type",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 26,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "TUNE_TYPE": {
      "id": "TUNE_TYPE",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "Scale Tune Type",
      "dataRange": [
        0,
        8
      ],
      "initValue": 1,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "CUSTOM",
        "1": "EQUAL",
        "2": "JUST-MAJ",
        "3": "JUST-MIN",
        "4": "PYTHAGORE",
        "5": "KIRNBERGE",
        "6": "MEANTONE",
        "7": "WERCKMEIS",
        "8": "ARABIC"
      }
    },
    "TUNE_KEY": {
      "id": "TUNE_KEY",
      "byteOffset": 29,
      "byteLength": 1,
      "description": "Scale Tune Key",
      "dataRange": [
        0,
        11
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "C",
        "1": "C#",
        "2": "D",
        "3": "D#",
        "4": "E",
        "5": "F",
        "6": "F#",
        "7": "G",
        "8": "G#",
        "9": "A",
        "10": "A#",
        "11": "B"
      }
    },
    "TUNE_C": {
      "id": "TUNE_C",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "Scale Tune for C",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_CS": {
      "id": "TUNE_CS",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "Scale Tune for C#",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_D": {
      "id": "TUNE_D",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Scale Tune for D",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 31,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_DS": {
      "id": "TUNE_DS",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "Scale Tune for D#",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 32,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_E": {
      "id": "TUNE_E",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Scale Tune for E",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 33,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_F": {
      "id": "TUNE_F",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "Scale Tune for F",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 34,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_FS": {
      "id": "TUNE_FS",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "Scale Tune for F#",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 35,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_G": {
      "id": "TUNE_G",
      "byteOffset": 37,
      "byteLength": 1,
      "description": "Scale Tune for G",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 36,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_GS": {
      "id": "TUNE_GS",
      "byteOffset": 38,
      "byteLength": 1,
      "description": "Scale Tune for G#",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 37,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_A": {
      "id": "TUNE_A",
      "byteOffset": 39,
      "byteLength": 1,
      "description": "Scale Tune for A",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 38,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_AS": {
      "id": "TUNE_AS",
      "byteOffset": 40,
      "byteLength": 1,
      "description": "Scale Tune for A#",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 39,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "TUNE_B": {
      "id": "TUNE_B",
      "byteOffset": 41,
      "byteLength": 1,
      "description": "Scale Tune for B",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 40,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 42,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "KNOB": {
      "id": "KNOB",
      "byteOffset": 44,
      "byteLength": 576,
      "description": "KNOB",
      "blockName": "CLP_KNOB",
      "count": 8,
      "blockByteLength": 72,
      "sysexOffset": "00 00 29",
      "lengthSysex": 480,
      "block": ZenProperties["CLP_KNOB"]
    },
    "MODULATION": {
      "id": "MODULATION",
      "byteOffset": 620,
      "byteLength": 1,
      "description": "SYS-Ctrl1",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 521,
      "lengthSysex": 1
    },
    "AFTERTOUCH": {
      "id": "AFTERTOUCH",
      "byteOffset": 621,
      "byteLength": 1,
      "description": "SYS-Ctrl2",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 522,
      "lengthSysex": 1
    },
    "BREATH": {
      "id": "BREATH",
      "byteOffset": 622,
      "byteLength": 1,
      "description": "SYS-Ctrl3",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 523,
      "lengthSysex": 1
    },
    "FOOTTYPE": {
      "id": "FOOTTYPE",
      "byteOffset": 623,
      "byteLength": 1,
      "description": "SYS-Ctrl4",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 524,
      "lengthSysex": 1
    },
    "PITCH_BEND": {
      "id": "PITCH_BEND",
      "byteOffset": 624,
      "byteLength": 2,
      "description": "Pitch Bend",
      "dataRange": [
        -8192,
        8191
      ],
      "initValue": 0,
      "sysexOffset": 525,
      "lengthSysex": 4,
      "sysexValueOffset": 8192
    },
    "MIX_LEV": {
      "id": "MIX_LEV",
      "byteOffset": 626,
      "byteLength": 1,
      "description": "Mix Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 529,
      "lengthSysex": 1
    },
    "SEL_NOTE": {
      "id": "SEL_NOTE",
      "byteOffset": 627,
      "byteLength": 1,
      "description": "Select Note",
      "dataRange": [
        -1,
        127
      ],
      "initValue": 60,
      "sysexOffset": 530,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "0 - 127"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 628,
      "byteLength": 12,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["GLT"] = {
  "name": "GLT",
  "description": "",
  "byteLength": 64,
  "sysexLength": 27,
  "parameters": {
    "POS": {
      "id": "POS",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Scatter Position",
      "dataRange": [
        0,
        10
      ],
      "initValue": 10,
      "lengthSysex": 1,
      "values": {
        "0": "EXT",
        "1": "PC",
        "2": "TRK1",
        "3": "TRK2",
        "4": "TRK3",
        "5": "TRK4",
        "6": "TRK5",
        "7": "TRK6",
        "8": "TRK7",
        "9": "TRK8",
        "10": "MIXOUT"
      }
    },
    "MIDI_SYNC": {
      "id": "MIDI_SYNC",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Scatter MIDI Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SPEED": {
      "id": "SPEED",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Scatter Speed",
      "dataRange": [
        0,
        200
      ],
      "initValue": 100,
      "sysexOffset": 2,
      "lengthSysex": 2,
      "displayMeasurement": "%"
    },
    "LOOP": {
      "id": "LOOP",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Scatter Loop Hold",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MEAS": {
      "id": "MEAS",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Scatter Measure",
      "dataRange": [
        1,
        8
      ],
      "initValue": 1,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8"
      }
    },
    "SPLIT": {
      "id": "SPLIT",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Scatter Split",
      "dataRange": [
        1,
        16
      ],
      "initValue": 16,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "values": {
        "0": "1/1",
        "1": "1/2",
        "2": "1/3",
        "3": "1/4",
        "4": "1/5",
        "5": "1/6",
        "6": "1/7",
        "7": "1/8",
        "8": "1/9",
        "9": "1/10",
        "10": "1/11",
        "11": "1/12",
        "12": "1/13",
        "13": "1/14",
        "14": "1/15",
        "15": "1/16"
      }
    },
    "PLAY": {
      "id": "PLAY",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Scatter Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "STOP",
        "1": "START"
      }
    },
    "TURN": {
      "id": "TURN",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Scatter Turn",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "values": {
        "0": "STOP",
        "1": "START"
      }
    },
    "CLIP": {
      "id": "CLIP",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Scatter Clip",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 9,
      "lengthSysex": 2
    },
    "ALL_GRAIN": {
      "id": "ALL_GRAIN",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Scatter All Grain",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16"
      }
    },
    "ALL_ATK": {
      "id": "ALL_ATK",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "Scatter All Attack",
      "dataRange": [
        0,
        1000
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 4,
      "displayMeasurement": "ms"
    },
    "ALL_DCY": {
      "id": "ALL_DCY",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "Scatter All Decay",
      "dataRange": [
        0,
        1000
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 4,
      "displayMeasurement": "ms"
    },
    "PAD": {
      "id": "PAD",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "Scatter PAD",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16"
      }
    },
    "PAD_MODE": {
      "id": "PAD_MODE",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "Scatter PAD_MODE",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "STEP MODE",
        "1": "PAD MODE"
      }
    },
    "BASE_SCALE": {
      "id": "BASE_SCALE",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Base Scale",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "1/8",
        "1": "1/16",
        "2": "1/32",
        "3": "1/4T",
        "4": "1/8T",
        "5": "1/16T"
      }
    },
    "BASE_LENGTH": {
      "id": "BASE_LENGTH",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Base Step",
      "dataRange": [
        1,
        16
      ],
      "initValue": 16,
      "sysexOffset": 23,
      "lengthSysex": 1
    },
    "ALTERNATE_MODE": {
      "id": "ALTERNATE_MODE",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Alternate Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "MOMENTARY",
        "1": "ALTERNATE"
      }
    },
    "PAD_QUANTIZE": {
      "id": "PAD_QUANTIZE",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Pad Quantize",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "DE_CLICK": {
      "id": "DE_CLICK",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "De-Click",
      "dataRange": [
        0,
        10
      ],
      "initValue": 1,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 21,
      "byteLength": 43,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["GLT2_DT"] = {
  "name": "GLT2_DT",
  "description": "DT",
  "byteLength": 36,
  "sysexLength": 48,
  "parameters": {
    "COLOR": {
      "id": "COLOR",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "LED Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 4,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "SIZE": {
      "id": "SIZE",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Scatter Size",
      "dataRange": [
        1,
        16
      ],
      "initValue": 1,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "MUTE_SW": {
      "id": "MUTE_SW",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Scatter Mute Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Scatter Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 3,
      "lengthSysex": 2
    },
    "LEVEL_GLD": {
      "id": "LEVEL_GLD",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Scatter Level Glide",
      "dataRange": [
        -255,
        255
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 4
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Scatter Pan",
      "dataRange": [
        0,
        255
      ],
      "initValue": 128,
      "sysexOffset": 9,
      "lengthSysex": 2,
      "values": {
        "0": "L128 - 127R"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PAN_GLD": {
      "id": "PAN_GLD",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "Scatter Pan Glide",
      "dataRange": [
        -255,
        255
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 4
    },
    "REVERSE": {
      "id": "REVERSE",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Scatter Reverse",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PITCH_CHRM": {
      "id": "PITCH_CHRM",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Scatter Pitch Chromatic",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 12,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PITCH_FINE": {
      "id": "PITCH_FINE",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "Scatter Pitch Fine",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 2
    },
    "PITCH_BEND": {
      "id": "PITCH_BEND",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "Scatter Pitch Bend",
      "dataRange": [
        1,
        400
      ],
      "initValue": 100,
      "sysexOffset": 19,
      "lengthSysex": 4,
      "displayMeasurement": "%"
    },
    "PITCH_GLD": {
      "id": "PITCH_GLD",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "Scatter Pitch Glide",
      "dataRange": [
        -400,
        400
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 4,
      "displayMeasurement": "%"
    },
    "RETRIG": {
      "id": "RETRIG",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Scatter Retrig",
      "dataRange": [
        1,
        32
      ],
      "initValue": 1,
      "sysexOffset": 27,
      "lengthSysex": 1
    },
    "RETRIG_GLD": {
      "id": "RETRIG_GLD",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Scatter Retrig Glide",
      "dataRange": [
        -31,
        32
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "1/32",
        "1": "1/31",
        "2": "1/30",
        "3": "1/29",
        "4": "1/28",
        "5": "1/27",
        "6": "1/26",
        "7": "1/25",
        "8": "1/24",
        "9": "1/23",
        "10": "1/22",
        "11": "1/21",
        "12": "1/20",
        "13": "1/19",
        "14": "1/18",
        "15": "1/17",
        "16": "1/16",
        "17": "1/15",
        "18": "1/14",
        "19": "1/13",
        "20": "1/12",
        "21": "1/11",
        "22": "1/10",
        "23": "1/9",
        "24": "1/8",
        "25": "1/7",
        "26": "1/6",
        "27": "1/5",
        "28": "1/4",
        "29": "1/3",
        "30": "1/2",
        "31": "OFF",
        "32": "2",
        "33": "3",
        "34": "4",
        "35": "5",
        "36": "6",
        "37": "7",
        "38": "8",
        "39": "9",
        "40": "10",
        "41": "11",
        "42": "12",
        "43": "13",
        "44": "14",
        "45": "15",
        "46": "16",
        "47": "17",
        "48": "18",
        "49": "19",
        "50": "20",
        "51": "21",
        "52": "22",
        "53": "23",
        "54": "24",
        "55": "25",
        "56": "26",
        "57": "27",
        "58": "28",
        "59": "29",
        "60": "30",
        "61": "31",
        "62": "32",
        "63": "Inf"
      }
    },
    "HOLD": {
      "id": "HOLD",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Scatter Hold",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "x1",
        "2": "x2",
        "3": "x3",
        "4": "x4",
        "5": "x5",
        "6": "x6",
        "7": "x7",
        "8": "x8",
        "9": "x9",
        "10": "x10",
        "11": "x11",
        "12": "x12",
        "13": "x13",
        "14": "x14",
        "15": "x15",
        "16": "x16"
      }
    },
    "OVERLAP": {
      "id": "OVERLAP",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Scatter Mask",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 24,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "ATK_TIME": {
      "id": "ATK_TIME",
      "byteOffset": 26,
      "byteLength": 2,
      "description": "Scatter Attack",
      "dataRange": [
        0,
        1000
      ],
      "initValue": 0,
      "sysexOffset": 31,
      "lengthSysex": 4,
      "displayMeasurement": "ms"
    },
    "DCY_TIME": {
      "id": "DCY_TIME",
      "byteOffset": 28,
      "byteLength": 2,
      "description": "Scatter Decay",
      "dataRange": [
        0,
        1000
      ],
      "initValue": 0,
      "sysexOffset": 35,
      "lengthSysex": 4,
      "displayMeasurement": "ms"
    },
    "FX_DRY": {
      "id": "FX_DRY",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "FX Dry Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 39,
      "lengthSysex": 2
    },
    "FX_WET_GFX1": {
      "id": "FX_WET_GFX1",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "FX1 Wet Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 41,
      "lengthSysex": 2
    },
    "FX_WET_GFX2": {
      "id": "FX_WET_GFX2",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "FX2 Wet Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 43,
      "lengthSysex": 2
    },
    "FX_WET_SR": {
      "id": "FX_WET_SR",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "FX S/R Wet Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 45,
      "lengthSysex": 2
    },
    "GRAIN": {
      "id": "GRAIN",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Scatter Grain",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 47,
      "lengthSysex": 1,
      "values": {
        "0": "Default",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16"
      }
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["GLT2_PL"] = {
  "name": "GLT2_PL",
  "description": "PL",
  "byteLength": 36,
  "sysexLength": 50,
  "parameters": {
    "EDIT_MARKER": {
      "id": "EDIT_MARKER",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Edited marker",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "NO ",
        "1": "YES"
      }
    },
    "SIZE": {
      "id": "SIZE",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Scatter Size",
      "dataRange": [
        1,
        16
      ],
      "initValue": 1,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "MUTE_SW": {
      "id": "MUTE_SW",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Scatter Mute Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Scatter Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 3,
      "lengthSysex": 2
    },
    "LEVEL_GLD": {
      "id": "LEVEL_GLD",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Scatter Level Glide",
      "dataRange": [
        -255,
        255
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 4
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Scatter Pan",
      "dataRange": [
        0,
        255
      ],
      "initValue": 128,
      "sysexOffset": 9,
      "lengthSysex": 2,
      "values": {
        "0": "L128 - 127R"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PAN_GLD": {
      "id": "PAN_GLD",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "Scatter Pan Glide",
      "dataRange": [
        -255,
        255
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 4
    },
    "REVERSE": {
      "id": "REVERSE",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Scatter Reverse",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PITCH_CHRM": {
      "id": "PITCH_CHRM",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Scatter Pitch Chromatic",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "PITCH_FINE": {
      "id": "PITCH_FINE",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Scatter Pitch Fine",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 2
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 13,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PITCH_BEND": {
      "id": "PITCH_BEND",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "Scatter Pitch Bend",
      "dataRange": [
        1,
        400
      ],
      "initValue": 100,
      "sysexOffset": 19,
      "lengthSysex": 4,
      "displayMeasurement": "%"
    },
    "PITCH_GLD": {
      "id": "PITCH_GLD",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "Scatter Pitch Glide",
      "dataRange": [
        -400,
        400
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 4,
      "displayMeasurement": "%"
    },
    "RETRIG": {
      "id": "RETRIG",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Scatter Retrig",
      "dataRange": [
        1,
        32
      ],
      "initValue": 1,
      "sysexOffset": 27,
      "lengthSysex": 1
    },
    "RETRIG_GLD": {
      "id": "RETRIG_GLD",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Scatter Retrig Glide",
      "dataRange": [
        -31,
        32
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "1/32",
        "1": "1/31",
        "2": "1/30",
        "3": "1/29",
        "4": "1/28",
        "5": "1/27",
        "6": "1/26",
        "7": "1/25",
        "8": "1/24",
        "9": "1/23",
        "10": "1/22",
        "11": "1/21",
        "12": "1/20",
        "13": "1/19",
        "14": "1/18",
        "15": "1/17",
        "16": "1/16",
        "17": "1/15",
        "18": "1/14",
        "19": "1/13",
        "20": "1/12",
        "21": "1/11",
        "22": "1/10",
        "23": "1/9",
        "24": "1/8",
        "25": "1/7",
        "26": "1/6",
        "27": "1/5",
        "28": "1/4",
        "29": "1/3",
        "30": "1/2",
        "31": "OFF",
        "32": "2",
        "33": "3",
        "34": "4",
        "35": "5",
        "36": "6",
        "37": "7",
        "38": "8",
        "39": "9",
        "40": "10",
        "41": "11",
        "42": "12",
        "43": "13",
        "44": "14",
        "45": "15",
        "46": "16",
        "47": "17",
        "48": "18",
        "49": "19",
        "50": "20",
        "51": "21",
        "52": "22",
        "53": "23",
        "54": "24",
        "55": "25",
        "56": "26",
        "57": "27",
        "58": "28",
        "59": "29",
        "60": "30",
        "61": "31",
        "62": "32",
        "63": "Inf"
      }
    },
    "HOLD": {
      "id": "HOLD",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Scatter Hold",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "x1",
        "2": "x2",
        "3": "x3",
        "4": "x4",
        "5": "x5",
        "6": "x6",
        "7": "x7",
        "8": "x8",
        "9": "x9",
        "10": "x10",
        "11": "x11",
        "12": "x12",
        "13": "x13",
        "14": "x14",
        "15": "x15",
        "16": "x16"
      }
    },
    "OVERLAP": {
      "id": "OVERLAP",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Scatter Mask",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ATK_TIME": {
      "id": "ATK_TIME",
      "byteOffset": 24,
      "byteLength": 2,
      "description": "Scatter Attack",
      "dataRange": [
        0,
        1000
      ],
      "initValue": 0,
      "sysexOffset": 31,
      "lengthSysex": 4,
      "displayMeasurement": "ms"
    },
    "DCY_TIME": {
      "id": "DCY_TIME",
      "byteOffset": 26,
      "byteLength": 2,
      "description": "Scatter Decay",
      "dataRange": [
        0,
        1000
      ],
      "initValue": 0,
      "sysexOffset": 35,
      "lengthSysex": 4,
      "displayMeasurement": "ms"
    },
    "FX_DRY": {
      "id": "FX_DRY",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "FX Dry Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 39,
      "lengthSysex": 2
    },
    "FX_WET_GFX1": {
      "id": "FX_WET_GFX1",
      "byteOffset": 29,
      "byteLength": 1,
      "description": "FX1 Wet Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 41,
      "lengthSysex": 2
    },
    "FX_WET_GFX2": {
      "id": "FX_WET_GFX2",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "FX2 Wet Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 43,
      "lengthSysex": 2
    },
    "FX_WET_SR": {
      "id": "FX_WET_SR",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "FX S/R Wet Lv",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 45,
      "lengthSysex": 2
    },
    "GRAIN": {
      "id": "GRAIN",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Scatter Grain",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 47,
      "lengthSysex": 1,
      "values": {
        "0": "Default",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16"
      }
    },
    "SEQ": {
      "id": "SEQ",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "Scatter Seq",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 48,
      "lengthSysex": 1,
      "values": {
        "0": "Default",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16"
      }
    },
    "PAD": {
      "id": "PAD",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Scatter PAD",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 49,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["GLT2"] = {
  "name": "GLT2",
  "description": "",
  "byteLength": 76,
  "sysexLength": 98,
  "parameters": {
    "PL": {
      "id": "PL",
      "byteOffset": 0,
      "byteLength": 36,
      "description": "PL",
      "blockName": "GLT2_PL",
      "count": 1,
      "blockByteLength": 36,
      "sysexOffset": "00 00 00",
      "lengthSysex": 50,
      "block": ZenProperties["GLT2_PL"]
    },
    "DT": {
      "id": "DT",
      "byteOffset": 36,
      "byteLength": 36,
      "description": "DT",
      "blockName": "GLT2_DT",
      "count": 1,
      "blockByteLength": 36,
      "sysexOffset": "00 00 32",
      "lengthSysex": 48,
      "block": ZenProperties["GLT2_DT"]
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 72,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["INST_CMN_WMT"] = {
  "name": "INST_CMN_WMT",
  "description": "WMT",
  "byteLength": 28,
  "sysexLength": 35,
  "parameters": {
    "SW": {
      "id": "SW",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Wave Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "WAV_GTYPE": {
      "id": "WAV_GTYPE",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Wave Group Type",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "INT",
        "1": "EXP",
        "2": "SAMP"
      }
    },
    "WAV_GID": {
      "id": "WAV_GID",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "Wave Group ID",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 4
    },
    "WAV_NUM_L": {
      "id": "WAV_NUM_L",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Wave Number L",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 4
    },
    "WAV_NUM_R": {
      "id": "WAV_NUM_R",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "Wave Number R",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 4
    },
    "WAV_GAIN": {
      "id": "WAV_GAIN",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Wave Gain",
      "dataRange": [
        0,
        5
      ],
      "initValue": 3,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "displayMeasurement": "dB",
      "values": {
        "0": "-18",
        "1": "-12",
        "2": "-6",
        "3": "0",
        "4": "+6",
        "5": "+12"
      }
    },
    "FXM_SW": {
      "id": "FXM_SW",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Wave FXM Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "FXM_COLOR": {
      "id": "FXM_COLOR",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Wave FXM Color",
      "dataRange": [
        1,
        4
      ],
      "initValue": 1,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "FXM_DEPTH": {
      "id": "FXM_DEPTH",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Wave FXM Depth",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 1
    },
    "PIT_CRS": {
      "id": "PIT_CRS",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Wave Coarse Tune",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PIT_FINE": {
      "id": "PIT_FINE",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "Wave Fine Tune",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "Wave Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PAN_RND_SW": {
      "id": "PAN_RND_SW",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "Wave Random Pan Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PAN_ALT_SW": {
      "id": "PAN_ALT_SW",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Wave Alternate Pan Sw",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON",
        "2": "REVERSE"
      }
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Wave Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 23,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "DELAY_MODE": {
      "id": "DELAY_MODE",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Delay Mode",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "NORMAL",
        "1": "HOLD",
        "2": "KEYOFF-NORMAL",
        "3": "KEYOFF-DECAY"
      }
    },
    "DLY_TIME_SYNC": {
      "id": "DLY_TIME_SYNC",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "DelayTime Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "DLY_TIME_NOTE": {
      "id": "DLY_TIME_NOTE",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "DelayTime (note)",
      "dataRange": [
        0,
        21
      ],
      "initValue": 12,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "1/64T",
        "1": "1/64",
        "2": "1/32T",
        "3": "1/32",
        "4": "1/16T",
        "5": "1/32.",
        "6": "1/16",
        "7": "1/8T",
        "8": "1/16.",
        "9": "1/8",
        "10": "1/4T",
        "11": "1/8.",
        "12": "1/4",
        "13": "1/2T",
        "14": "1/4.",
        "15": "1/2",
        "16": "1T",
        "17": "1/2.",
        "18": "1",
        "19": "2T",
        "20": "1.",
        "21": "2"
      }
    },
    "DLY_TIME": {
      "id": "DLY_TIME",
      "byteOffset": 22,
      "byteLength": 2,
      "description": "DelayTime",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 4
    },
    "VRANGE_LO": {
      "id": "VRANGE_LO",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "VeloRange Lower",
      "dataRange": [
        1,
        127
      ],
      "initValue": 1,
      "sysexOffset": 31,
      "lengthSysex": 1
    },
    "VRANGE_UP": {
      "id": "VRANGE_UP",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "VeloRange Upper",
      "dataRange": [
        1,
        127
      ],
      "initValue": 127,
      "sysexOffset": 32,
      "lengthSysex": 1
    },
    "VFADE_LO": {
      "id": "VFADE_LO",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "VeloFade Lower",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 33,
      "lengthSysex": 1
    },
    "VFADE_UP": {
      "id": "VFADE_UP",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "VeloFade Upper",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 34,
      "lengthSysex": 1
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["INST_CMN"] = {
  "name": "INST_CMN",
  "description": "PCMRhythm Inst Common",
  "byteLength": 152,
  "sysexLength": 187,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1,
      "displayMeasurement": "ASCII"
    },
    "CATEGORY": {
      "id": "CATEGORY",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Category",
      "dataRange": [
        0,
        21
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 17,
      "lengthSysex": 1
    },
    "SRC_KEY": {
      "id": "SRC_KEY",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Source Key",
      "dataRange": [
        0,
        127
      ],
      "initValue": 60,
      "sysexOffset": 18,
      "lengthSysex": 1
    },
    "PIT_FINE": {
      "id": "PIT_FINE",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Fine Tune",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "cent"
    },
    "PIT_RND": {
      "id": "PIT_RND",
      "byteOffset": 20,
      "byteLength": 2,
      "description": "Random Pitch Depth",
      "dataRange": [
        0,
        1200
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 4,
      "displayMeasurement": "cent"
    },
    "PAN_RND": {
      "id": "PAN_RND",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Random Pan Depth",
      "dataRange": [
        0,
        63
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1
    },
    "PAN_ALT": {
      "id": "PAN_ALT",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Alternate Pan Depth",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ASGN_TYPE": {
      "id": "ASGN_TYPE",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Assign Type",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "MULTI",
        "1": "SINGLE"
      }
    },
    "ENV_MODE": {
      "id": "ENV_MODE",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Envelope Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "NO-SUS",
        "1": "SUSTAIN"
      }
    },
    "WMT_VEL_CTRL": {
      "id": "WMT_VEL_CTRL",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "WMT Velocity Control",
      "dataRange": [
        0,
        2
      ],
      "initValue": 1,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON",
        "2": "RANDOM"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "WMT": {
      "id": "WMT",
      "byteOffset": 28,
      "byteLength": 112,
      "description": "WMT",
      "blockName": "INST_CMN_WMT",
      "count": 4,
      "blockByteLength": 28,
      "sysexOffset": "00 00 1d",
      "lengthSysex": 140,
      "block": ZenProperties["INST_CMN_WMT"]
    },
    "FILTER_TYPE": {
      "id": "FILTER_TYPE",
      "byteOffset": 140,
      "byteLength": 1,
      "description": "TVF Filter Type",
      "dataRange": [
        0,
        6
      ],
      "initValue": 1,
      "sysexOffset": 169,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "LPF",
        "2": "BPF",
        "3": "HPF",
        "4": "PKG",
        "5": "LPF2",
        "6": "LPF3"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 141,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "CUTOFF": {
      "id": "CUTOFF",
      "byteOffset": 142,
      "byteLength": 2,
      "description": "TVF Cutoff Frequency",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 170,
      "lengthSysex": 4
    },
    "CUTOFF_VCRV": {
      "id": "CUTOFF_VCRV",
      "byteOffset": 144,
      "byteLength": 1,
      "description": "TVF Cutoff Velocity Curve",
      "dataRange": [
        0,
        7
      ],
      "initValue": 1,
      "sysexOffset": 174,
      "lengthSysex": 1
    },
    "CUTOFF_VSENS": {
      "id": "CUTOFF_VSENS",
      "byteOffset": 145,
      "byteLength": 1,
      "description": "TVF Cutoff Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 175,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "RESO": {
      "id": "RESO",
      "byteOffset": 146,
      "byteLength": 2,
      "description": "TVF Resonance",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 177,
      "lengthSysex": 4
    },
    "RESO_VSENS": {
      "id": "RESO_VSENS",
      "byteOffset": 148,
      "byteLength": 1,
      "description": "TVF Resonance Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 181,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "LEVEL_VCRV": {
      "id": "LEVEL_VCRV",
      "byteOffset": 149,
      "byteLength": 1,
      "description": "TVA Level Velocity Curve",
      "dataRange": [
        0,
        7
      ],
      "initValue": 1,
      "sysexOffset": 183,
      "lengthSysex": 1
    },
    "LEVEL_VSENS": {
      "id": "LEVEL_VSENS",
      "byteOffset": 150,
      "byteLength": 1,
      "description": "TVA Level Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 184,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "TEMPO_SYNC": {
      "id": "TEMPO_SYNC",
      "byteOffset": 151,
      "byteLength": 1,
      "description": "Wave Tempo Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 186,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["KBDARP"] = {
  "name": "KBDARP",
  "description": "",
  "byteLength": 12,
  "sysexLength": 11,
  "parameters": {
    "STYLE": {
      "id": "STYLE",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Style",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "displayRange": [
        1,
        128
      ]
    },
    "HOLD": {
      "id": "HOLD",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Hold",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "VARIATION": {
      "id": "VARIATION",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Variation",
      "dataRange": [
        0,
        128
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 2,
      "displayRange": [
        1,
        128
      ]
    },
    "MOTIF": {
      "id": "MOTIF",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Motif",
      "dataRange": [
        0,
        9
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "UP",
        "1": "DOWN",
        "2": "UP&DOWN",
        "3": "RANDOM",
        "4": "NOTE ORDER",
        "5": "GLISSANDO",
        "6": "CHORD",
        "7": "AUTO1",
        "8": "AUTO2",
        "9": "PHRASE"
      }
    },
    "KB_VELO": {
      "id": "KB_VELO",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Keyboard Velocity",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "REAL",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100",
        "101": "101",
        "102": "102",
        "103": "103",
        "104": "104",
        "105": "105",
        "106": "106",
        "107": "107",
        "108": "108",
        "109": "109",
        "110": "110",
        "111": "111",
        "112": "112",
        "113": "113",
        "114": "114",
        "115": "115",
        "116": "116",
        "117": "117",
        "118": "118",
        "119": "119",
        "120": "120",
        "121": "121",
        "122": "122",
        "123": "123",
        "124": "124",
        "125": "125",
        "126": "126",
        "127": "127"
      }
    },
    "OCT_RANGE": {
      "id": "OCT_RANGE",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Octave Rage",
      "dataRange": [
        -3,
        3
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1
    },
    "ACC_RATE": {
      "id": "ACC_RATE",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Accent Rate",
      "dataRange": [
        0,
        100
      ],
      "initValue": 100,
      "sysexOffset": 7,
      "lengthSysex": 1
    },
    "SHUFFLE_RATE": {
      "id": "SHUFFLE_RATE",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Shuffle Rate",
      "dataRange": [
        0,
        100
      ],
      "initValue": 50,
      "sysexOffset": 8,
      "lengthSysex": 1
    },
    "SHUFFLE_RESO": {
      "id": "SHUFFLE_RESO",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Shuffle Resolution",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "values": {
        "0": "16th",
        "1": "8th"
      }
    },
    "CHORD": {
      "id": "CHORD",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Chord Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["LOOP_CMN"] = {
  "name": "LOOP_CMN",
  "description": "PCMRhythm Common",
  "byteLength": 124,
  "sysexLength": 50,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1,
      "displayMeasurement": "ASCII"
    },
    "EXPORT_LOCK": {
      "id": "EXPORT_LOCK",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Export Lock",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 17,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "LPR_TM_STRETCH": {
      "id": "LPR_TM_STRETCH",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Pitch/Stretch",
      "dataRange": [
        0,
        2
      ],
      "initValue": 2,
      "sysexOffset": 17,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "TYPE1",
        "2": "TYPE2"
      }
    },
    "PITCH_CHRM": {
      "id": "PITCH_CHRM",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Pitch Chromatic",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1
    },
    "PITCH_FINE": {
      "id": "PITCH_FINE",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Pitch Fine",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 2
    },
    "LPR_REVERSE": {
      "id": "LPR_REVERSE",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Reverse",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SHUFFLE_POS": {
      "id": "SHUFFLE_POS",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Shuffle Pos",
      "dataRange": [
        1,
        99
      ],
      "initValue": 50,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "displayMeasurement": "%"
    },
    "SHUFFLE_RATIO": {
      "id": "SHUFFLE_RATIO",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Shuffle Ratio",
      "dataRange": [
        1,
        99
      ],
      "initValue": 50,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "displayMeasurement": "%"
    },
    "PRI_MEAS_BPM": {
      "id": "PRI_MEAS_BPM",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "Pri Meas/BPM",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "END POINT",
        "1": "ORG BPM"
      }
    },
    "LPR_MEAS": {
      "id": "LPR_MEAS",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "Measure",
      "dataRange": [
        1,
        8
      ],
      "initValue": 1,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8"
      }
    },
    "BPM": {
      "id": "BPM",
      "byteOffset": 28,
      "byteLength": 2,
      "description": "BPM",
      "dataRange": [
        2000,
        25000
      ],
      "initValue": 12000,
      "sysexOffset": 26,
      "lengthSysex": 4,
      "displayRange": [
        20,
        250
      ]
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 30,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "START_OFST": {
      "id": "START_OFST",
      "byteOffset": 32,
      "byteLength": 2,
      "description": "Start Ofst",
      "dataRange": [
        0,
        8388607
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 4
    },
    "END_OFST": {
      "id": "END_OFST",
      "byteOffset": 34,
      "byteLength": 2,
      "description": "End Ofst",
      "dataRange": [
        -8388607,
        0
      ],
      "initValue": 0,
      "sysexOffset": 34,
      "lengthSysex": 4
    },
    "START_STEP": {
      "id": "START_STEP",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "Start Step",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 38,
      "lengthSysex": 1,
      "displayRange": [
        1,
        128
      ]
    },
    "LAST_STEP": {
      "id": "LAST_STEP",
      "byteOffset": 37,
      "byteLength": 1,
      "description": "Last Step",
      "dataRange": [
        -127,
        0
      ],
      "initValue": 0,
      "sysexOffset": 39,
      "lengthSysex": 1
    },
    "STEP_LENGTH": {
      "id": "STEP_LENGTH",
      "byteOffset": 38,
      "byteLength": 1,
      "description": "Step Length",
      "dataRange": [
        1,
        128
      ],
      "initValue": 16,
      "sysexOffset": 40,
      "lengthSysex": 1
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 39,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PITCH_BEND": {
      "id": "PITCH_BEND",
      "byteOffset": 40,
      "byteLength": 2,
      "description": "Pitch Shift",
      "dataRange": [
        0,
        400
      ],
      "initValue": 100,
      "sysexOffset": 41,
      "lengthSysex": 4,
      "displayMeasurement": "%"
    },
    "SCALE": {
      "id": "SCALE",
      "byteOffset": 42,
      "byteLength": 1,
      "description": "Base Scale",
      "dataRange": [
        0,
        2
      ],
      "initValue": 1,
      "sysexOffset": 45,
      "lengthSysex": 1,
      "values": {
        "0": "1/8",
        "1": "1/16",
        "2": "1/8T"
      }
    },
    "SCALE_LENGTH": {
      "id": "SCALE_LENGTH",
      "byteOffset": 43,
      "byteLength": 1,
      "description": "Base Length",
      "dataRange": [
        1,
        16
      ],
      "initValue": 16,
      "sysexOffset": 46,
      "lengthSysex": 1
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 47,
      "lengthSysex": 1
    },
    "TM_WINDOW": {
      "id": "TM_WINDOW",
      "byteOffset": 45,
      "byteLength": 1,
      "description": "Stretch Window",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "sysexOffset": 48,
      "lengthSysex": 1,
      "values": {
        "0": "1.0",
        "1": "0.75",
        "2": "0.5",
        "3": "0.375",
        "4": "0.25"
      }
    },
    "ATK_TIME": {
      "id": "ATK_TIME",
      "byteOffset": 46,
      "byteLength": 1,
      "description": "Attack Time",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 49,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "displayRange": [
        1,
        3
      ]
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 47,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PADDING5": {
      "id": "PADDING5",
      "byteOffset": 48,
      "byteLength": 76,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["MFX"] = {
  "name": "MFX",
  "description": "",
  "byteLength": 84,
  "sysexLength": 144,
  "parameters": {
    "mfxType": {
      "id": "mfxType",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Type",
      "dataRange": [
        0,
        90
      ],
      "initValue": 0,
      "lengthSysex": 1
    },
    "mfxSwitch": {
      "id": "mfxSwitch",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "MFX Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "choSend": {
      "id": "choSend",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "MFX Delay Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "revSend": {
      "id": "revSend",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "MFX Reverb Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "ctrlSrc1": {
      "id": "ctrlSrc1",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "MFX CtrlSrc 1",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MOD:CC01",
        "2": "BRETH:CC02",
        "3": "CC03",
        "4": "FOOT:CC04",
        "5": "PTIME:CC05",
        "6": "DENT:CC06",
        "7": "VOL:CC07",
        "8": "BAL:CC08",
        "9": "CC09",
        "10": "PAN:CC10",
        "11": "EXP:CC11",
        "12": "CC12",
        "13": "CC13",
        "14": "CC14",
        "15": "CC15",
        "16": "GEN-1:CC16",
        "17": "GEN-2:CC17",
        "18": "GEN-3:CC18",
        "19": "GEN-4:CC19",
        "20": "CC20",
        "21": "CC21",
        "22": "CC22",
        "23": "CC23",
        "24": "CC24",
        "25": "CC25",
        "26": "CC26",
        "27": "CC27",
        "28": "CC28",
        "29": "CC29",
        "30": "CC30",
        "31": "CC31",
        "32": "CC33",
        "33": "CC34",
        "34": "CC35",
        "35": "CC36",
        "36": "CC37",
        "37": "DENT:CC38",
        "38": "CC39",
        "39": "CC40",
        "40": "CC41",
        "41": "CC42",
        "42": "CC43",
        "43": "CC44",
        "44": "CC45",
        "45": "CC46",
        "46": "CC47",
        "47": "CC48",
        "48": "CC49",
        "49": "CC50",
        "50": "CC51",
        "51": "CC52",
        "52": "CC53",
        "53": "CC54",
        "54": "CC55",
        "55": "CC56",
        "56": "CC57",
        "57": "CC58",
        "58": "CC59",
        "59": "CC60",
        "60": "CC61",
        "61": "CC62",
        "62": "CC63",
        "63": "HOLD1:CC64",
        "64": "PORTA:CC65",
        "65": "SOSTE:CC66",
        "66": "SOFT:CC67",
        "67": "LEGAT:CC68",
        "68": "HOLD2:CC69",
        "69": "CC70",
        "70": "RESO:CC71",
        "71": "RELES:CC72",
        "72": "ATTAK:CC73",
        "73": "CUTOF:CC74",
        "74": "DECAY:CC75",
        "75": "VRATE:CC76",
        "76": "VDPTH:CC77",
        "77": "VDLY:CC78",
        "78": "CC79",
        "79": "GEN-5:CC80",
        "80": "GEN-6:CC81",
        "81": "GEN-7:CC82",
        "82": "GEN-8:CC83",
        "83": "PCTRL:CC84",
        "84": "CC85",
        "85": "CC86",
        "86": "CC87",
        "87": "CC88",
        "88": "CC89",
        "89": "CC90",
        "90": "REV:CC91",
        "91": "TREM:CC92",
        "92": "CHO:CC93",
        "93": "CELST:CC94",
        "94": "PHASR:CC95",
        "95": "BEND",
        "96": "AFT",
        "97": "SYS-CTRL1",
        "98": "SYS-CTRL2",
        "99": "SYS-CTRL3",
        "100": "SYS-CTRL4"
      }
    },
    "ctrlSens1": {
      "id": "ctrlSens1",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "MFX CtrlSens 1",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ctrlSrc2": {
      "id": "ctrlSrc2",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "MFX CtrlSrc 2",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MOD:CC01",
        "2": "BRETH:CC02",
        "3": "CC03",
        "4": "FOOT:CC04",
        "5": "PTIME:CC05",
        "6": "DENT:CC06",
        "7": "VOL:CC07",
        "8": "BAL:CC08",
        "9": "CC09",
        "10": "PAN:CC10",
        "11": "EXP:CC11",
        "12": "CC12",
        "13": "CC13",
        "14": "CC14",
        "15": "CC15",
        "16": "GEN-1:CC16",
        "17": "GEN-2:CC17",
        "18": "GEN-3:CC18",
        "19": "GEN-4:CC19",
        "20": "CC20",
        "21": "CC21",
        "22": "CC22",
        "23": "CC23",
        "24": "CC24",
        "25": "CC25",
        "26": "CC26",
        "27": "CC27",
        "28": "CC28",
        "29": "CC29",
        "30": "CC30",
        "31": "CC31",
        "32": "CC33",
        "33": "CC34",
        "34": "CC35",
        "35": "CC36",
        "36": "CC37",
        "37": "DENT:CC38",
        "38": "CC39",
        "39": "CC40",
        "40": "CC41",
        "41": "CC42",
        "42": "CC43",
        "43": "CC44",
        "44": "CC45",
        "45": "CC46",
        "46": "CC47",
        "47": "CC48",
        "48": "CC49",
        "49": "CC50",
        "50": "CC51",
        "51": "CC52",
        "52": "CC53",
        "53": "CC54",
        "54": "CC55",
        "55": "CC56",
        "56": "CC57",
        "57": "CC58",
        "58": "CC59",
        "59": "CC60",
        "60": "CC61",
        "61": "CC62",
        "62": "CC63",
        "63": "HOLD1:CC64",
        "64": "PORTA:CC65",
        "65": "SOSTE:CC66",
        "66": "SOFT:CC67",
        "67": "LEGAT:CC68",
        "68": "HOLD2:CC69",
        "69": "CC70",
        "70": "RESO:CC71",
        "71": "RELES:CC72",
        "72": "ATTAK:CC73",
        "73": "CUTOF:CC74",
        "74": "DECAY:CC75",
        "75": "VRATE:CC76",
        "76": "VDPTH:CC77",
        "77": "VDLY:CC78",
        "78": "CC79",
        "79": "GEN-5:CC80",
        "80": "GEN-6:CC81",
        "81": "GEN-7:CC82",
        "82": "GEN-8:CC83",
        "83": "PCTRL:CC84",
        "84": "CC85",
        "85": "CC86",
        "86": "CC87",
        "87": "CC88",
        "88": "CC89",
        "89": "CC90",
        "90": "REV:CC91",
        "91": "TREM:CC92",
        "92": "CHO:CC93",
        "93": "CELST:CC94",
        "94": "PHASR:CC95",
        "95": "BEND",
        "96": "AFT",
        "97": "SYS-CTRL1",
        "98": "SYS-CTRL2",
        "99": "SYS-CTRL3",
        "100": "SYS-CTRL4"
      }
    },
    "ctrlSens2": {
      "id": "ctrlSens2",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "MFX CtrlSens 2",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ctrlSrc3": {
      "id": "ctrlSrc3",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "MFX CtrlSrc 3",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MOD:CC01",
        "2": "BRETH:CC02",
        "3": "CC03",
        "4": "FOOT:CC04",
        "5": "PTIME:CC05",
        "6": "DENT:CC06",
        "7": "VOL:CC07",
        "8": "BAL:CC08",
        "9": "CC09",
        "10": "PAN:CC10",
        "11": "EXP:CC11",
        "12": "CC12",
        "13": "CC13",
        "14": "CC14",
        "15": "CC15",
        "16": "GEN-1:CC16",
        "17": "GEN-2:CC17",
        "18": "GEN-3:CC18",
        "19": "GEN-4:CC19",
        "20": "CC20",
        "21": "CC21",
        "22": "CC22",
        "23": "CC23",
        "24": "CC24",
        "25": "CC25",
        "26": "CC26",
        "27": "CC27",
        "28": "CC28",
        "29": "CC29",
        "30": "CC30",
        "31": "CC31",
        "32": "CC33",
        "33": "CC34",
        "34": "CC35",
        "35": "CC36",
        "36": "CC37",
        "37": "DENT:CC38",
        "38": "CC39",
        "39": "CC40",
        "40": "CC41",
        "41": "CC42",
        "42": "CC43",
        "43": "CC44",
        "44": "CC45",
        "45": "CC46",
        "46": "CC47",
        "47": "CC48",
        "48": "CC49",
        "49": "CC50",
        "50": "CC51",
        "51": "CC52",
        "52": "CC53",
        "53": "CC54",
        "54": "CC55",
        "55": "CC56",
        "56": "CC57",
        "57": "CC58",
        "58": "CC59",
        "59": "CC60",
        "60": "CC61",
        "61": "CC62",
        "62": "CC63",
        "63": "HOLD1:CC64",
        "64": "PORTA:CC65",
        "65": "SOSTE:CC66",
        "66": "SOFT:CC67",
        "67": "LEGAT:CC68",
        "68": "HOLD2:CC69",
        "69": "CC70",
        "70": "RESO:CC71",
        "71": "RELES:CC72",
        "72": "ATTAK:CC73",
        "73": "CUTOF:CC74",
        "74": "DECAY:CC75",
        "75": "VRATE:CC76",
        "76": "VDPTH:CC77",
        "77": "VDLY:CC78",
        "78": "CC79",
        "79": "GEN-5:CC80",
        "80": "GEN-6:CC81",
        "81": "GEN-7:CC82",
        "82": "GEN-8:CC83",
        "83": "PCTRL:CC84",
        "84": "CC85",
        "85": "CC86",
        "86": "CC87",
        "87": "CC88",
        "88": "CC89",
        "89": "CC90",
        "90": "REV:CC91",
        "91": "TREM:CC92",
        "92": "CHO:CC93",
        "93": "CELST:CC94",
        "94": "PHASR:CC95",
        "95": "BEND",
        "96": "AFT",
        "97": "SYS-CTRL1",
        "98": "SYS-CTRL2",
        "99": "SYS-CTRL3",
        "100": "SYS-CTRL4"
      }
    },
    "ctrlSens3": {
      "id": "ctrlSens3",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "MFX CtrlSens 3",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ctrlSrc4": {
      "id": "ctrlSrc4",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "MFX CtrlSrc 4",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MOD:CC01",
        "2": "BRETH:CC02",
        "3": "CC03",
        "4": "FOOT:CC04",
        "5": "PTIME:CC05",
        "6": "DENT:CC06",
        "7": "VOL:CC07",
        "8": "BAL:CC08",
        "9": "CC09",
        "10": "PAN:CC10",
        "11": "EXP:CC11",
        "12": "CC12",
        "13": "CC13",
        "14": "CC14",
        "15": "CC15",
        "16": "GEN-1:CC16",
        "17": "GEN-2:CC17",
        "18": "GEN-3:CC18",
        "19": "GEN-4:CC19",
        "20": "CC20",
        "21": "CC21",
        "22": "CC22",
        "23": "CC23",
        "24": "CC24",
        "25": "CC25",
        "26": "CC26",
        "27": "CC27",
        "28": "CC28",
        "29": "CC29",
        "30": "CC30",
        "31": "CC31",
        "32": "CC33",
        "33": "CC34",
        "34": "CC35",
        "35": "CC36",
        "36": "CC37",
        "37": "DENT:CC38",
        "38": "CC39",
        "39": "CC40",
        "40": "CC41",
        "41": "CC42",
        "42": "CC43",
        "43": "CC44",
        "44": "CC45",
        "45": "CC46",
        "46": "CC47",
        "47": "CC48",
        "48": "CC49",
        "49": "CC50",
        "50": "CC51",
        "51": "CC52",
        "52": "CC53",
        "53": "CC54",
        "54": "CC55",
        "55": "CC56",
        "56": "CC57",
        "57": "CC58",
        "58": "CC59",
        "59": "CC60",
        "60": "CC61",
        "61": "CC62",
        "62": "CC63",
        "63": "HOLD1:CC64",
        "64": "PORTA:CC65",
        "65": "SOSTE:CC66",
        "66": "SOFT:CC67",
        "67": "LEGAT:CC68",
        "68": "HOLD2:CC69",
        "69": "CC70",
        "70": "RESO:CC71",
        "71": "RELES:CC72",
        "72": "ATTAK:CC73",
        "73": "CUTOF:CC74",
        "74": "DECAY:CC75",
        "75": "VRATE:CC76",
        "76": "VDPTH:CC77",
        "77": "VDLY:CC78",
        "78": "CC79",
        "79": "GEN-5:CC80",
        "80": "GEN-6:CC81",
        "81": "GEN-7:CC82",
        "82": "GEN-8:CC83",
        "83": "PCTRL:CC84",
        "84": "CC85",
        "85": "CC86",
        "86": "CC87",
        "87": "CC88",
        "88": "CC89",
        "89": "CC90",
        "90": "REV:CC91",
        "91": "TREM:CC92",
        "92": "CHO:CC93",
        "93": "CELST:CC94",
        "94": "PHASR:CC95",
        "95": "BEND",
        "96": "AFT",
        "97": "SYS-CTRL1",
        "98": "SYS-CTRL2",
        "99": "SYS-CTRL3",
        "100": "SYS-CTRL4"
      }
    },
    "ctrlSens4": {
      "id": "ctrlSens4",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "MFX CtrlSens 4",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ctrlAsgn_1": {
      "id": "ctrlAsgn_1",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "MFX CtrlAsgn 1",
      "dataRange": [
        0,
        11
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 1
    },
    "param_1": {
      "id": "param_1",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "MFX Parameter 1",
      "dataRange": [
        -20000,
        20000
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 4,
      "sysexValueOffset": 32768
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 80,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["MSMP_CMN"] = {
  "name": "MSMP_CMN",
  "description": "Multisample Common",
  "byteLength": 16,
  "sysexLength": 16,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Multisample Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1,
      "displayMeasurement": "ASCII"
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["MSMP_SPLT"] = {
  "name": "MSMP_SPLT",
  "description": "Multisample Split",
  "byteLength": 4,
  "sysexLength": 6,
  "parameters": {
    "WAV_NUM": {
      "id": "WAV_NUM",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "Wave Number",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "lengthSysex": 4
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 4,
      "lengthSysex": 1
    },
    "PIT_FINE": {
      "id": "PIT_FINE",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Partial Fine Tune",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "cent"
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMR_CMN"] = {
  "name": "PCMR_CMN",
  "description": "PCMRhythm Common",
  "byteLength": 28,
  "sysexLength": 25,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1,
      "displayMeasurement": "ASCII"
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PHRASE": {
      "id": "PHRASE",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "Phrase Number",
      "dataRange": [
        0,
        65535
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 4
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 20,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 21,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PHRASE_VEL_RATE": {
      "id": "PHRASE_VEL_RATE",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Phrase Velo Rate",
      "dataRange": [
        1,
        200
      ],
      "initValue": 100,
      "sysexOffset": 21,
      "lengthSysex": 2
    },
    "PHRASE_VEL_SHIFT": {
      "id": "PHRASE_VEL_SHIFT",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Phrase Velo Shift",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 25,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMR_PTL"] = {
  "name": "PCMR_PTL",
  "description": "PCMRhythm Partial",
  "byteLength": 20,
  "sysexLength": 27,
  "parameters": {
    "INST_NUM": {
      "id": "INST_NUM",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "Inst Number",
      "dataRange": [
        0,
        32768
      ],
      "initValue": 0,
      "lengthSysex": 4
    },
    "INST_GTYPE": {
      "id": "INST_GTYPE",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Inst Bank",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "PRESET",
        "1": "USER",
        "2": "EXP"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "INST_GID": {
      "id": "INST_GID",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Inst Group ID",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 4
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 9,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "CHO_SEND": {
      "id": "CHO_SEND",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Delay Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 11,
      "lengthSysex": 1
    },
    "REV_SEND": {
      "id": "REV_SEND",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Reverb Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 12,
      "lengthSysex": 1
    },
    "MUTE_GRP": {
      "id": "MUTE_GRP",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Mute Group",
      "dataRange": [
        0,
        31
      ],
      "initValue": 0,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31"
      }
    },
    "OUT_ASGN": {
      "id": "OUT_ASGN",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Output Assign",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "values": {
        "0": "DRY",
        "1": "MFX"
      }
    },
    "KEY_OFST": {
      "id": "KEY_OFST",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "Key Offset",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PIT_FINE_OFST": {
      "id": "PIT_FINE_OFST",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "Fine Tune Offset",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "cent"
    },
    "CUTOFF_OFST": {
      "id": "CUTOFF_OFST",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "TVF Cutoff Offset",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "RESO_OFST": {
      "id": "RESO_OFST",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "TVF Resonance Offset",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "TVA_ATK_OFST": {
      "id": "TVA_ATK_OFST",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "TVA Attack Time Offset",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "TVA_DCY_OFST": {
      "id": "TVA_DCY_OFST",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "TVA Decay Time Offset",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "TVA_REL_OFST": {
      "id": "TVA_REL_OFST",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "TVA Release Time Offset",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMS_CMN"] = {
  "name": "PCMS_CMN",
  "description": "PCMSynth Common",
  "byteLength": 20,
  "sysexLength": 9,
  "parameters": {
    "UNISON_SW": {
      "id": "UNISON_SW",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Unison Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "UNISON_SIZE": {
      "id": "UNISON_SIZE",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Unison Size",
      "dataRange": [
        2,
        8
      ],
      "initValue": 4,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "UNISON_DETN": {
      "id": "UNISON_DETN",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Unison Detune",
      "dataRange": [
        0,
        100
      ],
      "initValue": 20,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "BEND_RANGE_FINE_UP": {
      "id": "BEND_RANGE_FINE_UP",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Bend Range Fine Up",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "BEND_RANGE_FINE_DW": {
      "id": "BEND_RANGE_FINE_DW",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Bend Range Fine Down",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1
    },
    "RND_PIT_VAL": {
      "id": "RND_PIT_VAL",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Pitch Drift",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 2
    },
    "RND_PIT_NUM": {
      "id": "RND_PIT_NUM",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Pitch Drift Cycle Number",
      "dataRange": [
        0,
        8
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "FREE",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8"
      }
    },
    "CONDITION": {
      "id": "CONDITION",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Condition",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 9,
      "byteLength": 11,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMS_PMT"] = {
  "name": "PCMS_PMT",
  "description": "PCMSynth PMT",
  "byteLength": 36,
  "sysexLength": 23,
  "parameters": {
    "STRUCT12": {
      "id": "STRUCT12",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Structure 1-2",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "SYNC",
        "2": "RING",
        "3": "XMOD",
        "4": "XMOD2"
      }
    },
    "STRUCT34": {
      "id": "STRUCT34",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Structure 3-4",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "SYNC",
        "2": "RING",
        "3": "XMOD",
        "4": "XMOD2"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "RING12_LEVEL": {
      "id": "RING12_LEVEL",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "RING 1-2 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "RING34_LEVEL": {
      "id": "RING34_LEVEL",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "RING 3-4 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "RING_OSC1_LEVEL": {
      "id": "RING_OSC1_LEVEL",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "RING OSC1 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1
    },
    "RING_OSC2_LEVEL": {
      "id": "RING_OSC2_LEVEL",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "RING OSC2 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1
    },
    "RING_OSC3_LEVEL": {
      "id": "RING_OSC3_LEVEL",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "RING OSC3 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1
    },
    "RING_OSC4_LEVEL": {
      "id": "RING_OSC4_LEVEL",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "RING OSC4 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "XMOD12_DEPTH": {
      "id": "XMOD12_DEPTH",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "CrossMod 1-2 Depth",
      "dataRange": [
        0,
        10800
      ],
      "initValue": 1200,
      "sysexOffset": 8,
      "lengthSysex": 4,
      "displayMeasurement": "cent"
    },
    "XMOD34_DEPTH": {
      "id": "XMOD34_DEPTH",
      "byteOffset": 14,
      "byteLength": 2,
      "description": "CrossMod 3-4 Depth",
      "dataRange": [
        0,
        10800
      ],
      "initValue": 1200,
      "sysexOffset": 12,
      "lengthSysex": 4,
      "displayMeasurement": "cent"
    },
    "XMOD_OSC1_LEVEL": {
      "id": "XMOD_OSC1_LEVEL",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "CrossMod OSC1 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "XMOD_OSC2_LEVEL": {
      "id": "XMOD_OSC2_LEVEL",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "CrossMod OSC2 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 1
    },
    "XMOD_OSC3_LEVEL": {
      "id": "XMOD_OSC3_LEVEL",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "CrossMod OSC3 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 18,
      "lengthSysex": 1
    },
    "XMOD_OSC4_LEVEL": {
      "id": "XMOD_OSC4_LEVEL",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "CrossMod OSC4 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 1
    },
    "PTL_PHS_LOCK": {
      "id": "PTL_PHS_LOCK",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Partial Phase Lock",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "XMOD2_12_DEPTH": {
      "id": "XMOD2_12_DEPTH",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "CrossMod2 1-2 Depth",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "XMOD2_34_DEPTH": {
      "id": "XMOD2_34_DEPTH",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "CrossMod2 3-4 Depth",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 22,
      "lengthSysex": 1
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 23,
      "byteLength": 13,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMS_PTL"] = {
  "name": "PCMS_PTL",
  "description": "PCMSynth Partial",
  "byteLength": 36,
  "sysexLength": 29,
  "parameters": {
    "OSC_TYPE": {
      "id": "OSC_TYPE",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "OSC Type",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "PCM",
        "1": "VA",
        "2": "PCM-Sync",
        "3": "SuperSAW",
        "4": "Noise"
      }
    },
    "VA_FORM": {
      "id": "VA_FORM",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "VA Waveform",
      "dataRange": [
        0,
        8
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "SAW",
        "1": "SQR",
        "2": "TRI",
        "3": "SIN",
        "4": "RAMP",
        "5": "JUNO",
        "6": "TRI2",
        "7": "TRI3",
        "8": "SIN2"
      }
    },
    "SYNC_WAV_NUM": {
      "id": "SYNC_WAV_NUM",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "PCM-Sync Wave Number",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 4
    },
    "PW": {
      "id": "PW",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Pulse Width",
      "dataRange": [
        0,
        127
      ],
      "initValue": 64,
      "sysexOffset": 6,
      "lengthSysex": 1
    },
    "PWM_DEPTH": {
      "id": "PWM_DEPTH",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "PWM Depth",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "SSAW_DETUNE": {
      "id": "SSAW_DETUNE",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "SuperSAW Detune",
      "dataRange": [
        0,
        127
      ],
      "initValue": 64,
      "sysexOffset": 8,
      "lengthSysex": 1
    },
    "CLICK_TYPE": {
      "id": "CLICK_TYPE",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Click Type",
      "dataRange": [
        0,
        3
      ],
      "initValue": 2,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "values": {
        "0": "SOFT",
        "1": "HARD",
        "2": "NATURAL",
        "3": "OFF"
      }
    },
    "HPF_CUTOFF": {
      "id": "HPF_CUTOFF",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "HPF Cutoff",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 4
    },
    "FILTER_TYPE": {
      "id": "FILTER_TYPE",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Filter Type",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "values": {
        "0": "TVF",
        "1": "VCF"
      }
    },
    "FILTER_SLOPE": {
      "id": "FILTER_SLOPE",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Filter Slope",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "displayMeasurement": "dB/Oct",
      "values": {
        "0": "-12",
        "1": "-18",
        "2": "-24"
      }
    },
    "ADSR_ENV_SW": {
      "id": "ADSR_ENV_SW",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "ADSREnv Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "FAT": {
      "id": "FAT",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "Fat",
      "dataRange": [
        0,
        127
      ],
      "initValue": 64,
      "sysexOffset": 17,
      "lengthSysex": 1
    },
    "VCF_TYPE": {
      "id": "VCF_TYPE",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "VCF Type",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1,
      "values": {
        "0": "FLAT",
        "1": "TYPE-JP",
        "2": "TYPE-M",
        "3": "TYPE-P"
      }
    },
    "OSC_ATT": {
      "id": "OSC_ATT",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "OSC Attenuator",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 19,
      "lengthSysex": 2
    },
    "CUTOFF_KF_BP": {
      "id": "CUTOFF_KF_BP",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Cutoff Keyfollow Base Point",
      "dataRange": [
        0,
        127
      ],
      "initValue": 60,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "VA_INVERT_SW": {
      "id": "VA_INVERT_SW",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "VA Waveform Invert Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "FENV_FINE_DEPTH": {
      "id": "FENV_FINE_DEPTH",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "TVF Env Fine Depth",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PENV_LFO_TRIG_SW": {
      "id": "PENV_LFO_TRIG_SW",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "PENV LFO Trigger Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "FENV_LFO_TRIG_SW": {
      "id": "FENV_LFO_TRIG_SW",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "FENV LFO Trigger Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "AENV_LFO_TRIG_SW": {
      "id": "AENV_LFO_TRIG_SW",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "AENV LFO Trigger Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PITCH_DOWN_DEPTH": {
      "id": "PITCH_DOWN_DEPTH",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Pitch Down Depth",
      "dataRange": [
        0,
        120
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1
    },
    "VCF_GC": {
      "id": "VCF_GC",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "VCF Gain Correction",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 24,
      "byteLength": 12,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMT_CMN"] = {
  "name": "PCMT_CMN",
  "description": "PCMTone Common",
  "byteLength": 64,
  "sysexLength": 54,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1,
      "displayMeasurement": "ASCII"
    },
    "CATEGORY": {
      "id": "CATEGORY",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Category",
      "dataRange": [
        0,
        49
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PHRASE": {
      "id": "PHRASE",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "Reserved",
      "dataRange": [
        0,
        0
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 4
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 22,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PRIORITY": {
      "id": "PRIORITY",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Priority",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "LAST",
        "1": "LOUDEST"
      }
    },
    "PIT_CRS": {
      "id": "PIT_CRS",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Tone Coarse Tune",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "semitone"
    },
    "PIT_FINE": {
      "id": "PIT_FINE",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "Tone Fine Tune",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "cent"
    },
    "OCTAVE": {
      "id": "OCTAVE",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "Octave Shift",
      "dataRange": [
        -3,
        3
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "STRETCH": {
      "id": "STRETCH",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "Stretch Tune Depth",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3"
      }
    },
    "ANALOG_FEEL": {
      "id": "ANALOG_FEEL",
      "byteOffset": 29,
      "byteLength": 1,
      "description": "Analog Feel",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1
    },
    "MONO_POLY": {
      "id": "MONO_POLY",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "Mono/Poly",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "MONO",
        "1": "POLY"
      }
    },
    "LEGATO_SW": {
      "id": "LEGATO_SW",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "Legato Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RETRIG_INTVL": {
      "id": "RETRIG_INTVL",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Legato Retrigger Interval",
      "dataRange": [
        0,
        13
      ],
      "initValue": 12,
      "sysexOffset": 31,
      "lengthSysex": 1,
      "values": {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "OFF"
      }
    },
    "PORTA_SW": {
      "id": "PORTA_SW",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "Portamento Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 32,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PORTA_MODE": {
      "id": "PORTA_MODE",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Portamento Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 33,
      "lengthSysex": 1,
      "values": {
        "0": "NORMAL",
        "1": "LEGATO"
      }
    },
    "PORTA_TYPE": {
      "id": "PORTA_TYPE",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "Portamento Type",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 34,
      "lengthSysex": 1,
      "values": {
        "0": "RATE",
        "1": "TIME"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PORTA_START": {
      "id": "PORTA_START",
      "byteOffset": 37,
      "byteLength": 1,
      "description": "Portamento Start",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 35,
      "lengthSysex": 1,
      "values": {
        "0": "PITCH",
        "1": "NOTE"
      }
    },
    "PORTA_TIME": {
      "id": "PORTA_TIME",
      "byteOffset": 38,
      "byteLength": 2,
      "description": "Portamento Time",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 73,
      "sysexOffset": 36,
      "lengthSysex": 4
    },
    "BEND_RANGE_UP": {
      "id": "BEND_RANGE_UP",
      "byteOffset": 40,
      "byteLength": 1,
      "description": "Bend Range Up",
      "dataRange": [
        0,
        48
      ],
      "initValue": 2,
      "sysexOffset": 40,
      "lengthSysex": 1
    },
    "BEND_RANGE_DW": {
      "id": "BEND_RANGE_DW",
      "byteOffset": 41,
      "byteLength": 1,
      "description": "Bend Range Down",
      "dataRange": [
        0,
        48
      ],
      "initValue": 2,
      "sysexOffset": 41,
      "lengthSysex": 1
    },
    "BEND_MODE": {
      "id": "BEND_MODE",
      "byteOffset": 42,
      "byteLength": 1,
      "description": "Bend Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 42,
      "lengthSysex": 1,
      "values": {
        "0": "NORMAL",
        "1": "CATCH+LAST"
      }
    },
    "SOFT_LEVEL_SENS": {
      "id": "SOFT_LEVEL_SENS",
      "byteOffset": 43,
      "byteLength": 1,
      "description": "Soft Level Sens",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 43,
      "lengthSysex": 1
    },
    "PHRASE_OCT": {
      "id": "PHRASE_OCT",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "Reserved",
      "dataRange": [
        0,
        0
      ],
      "initValue": 0,
      "sysexOffset": 44,
      "lengthSysex": 2
    },
    "PHRASE_VEL_RATE": {
      "id": "PHRASE_VEL_RATE",
      "byteOffset": 45,
      "byteLength": 1,
      "description": "Reserved",
      "dataRange": [
        0,
        0
      ],
      "initValue": 0,
      "sysexOffset": 46,
      "lengthSysex": 2
    },
    "PHRASE_VEL_SHIFT": {
      "id": "PHRASE_VEL_SHIFT",
      "byteOffset": 46,
      "byteLength": 1,
      "description": "Reserved",
      "dataRange": [
        0,
        0
      ],
      "initValue": 0,
      "sysexOffset": 48,
      "lengthSysex": 2
    },
    "SYMP_DEPTH": {
      "id": "SYMP_DEPTH",
      "byteOffset": 47,
      "byteLength": 1,
      "description": "Reserved",
      "dataRange": [
        0,
        0
      ],
      "initValue": 0,
      "sysexOffset": 50,
      "lengthSysex": 2
    },
    "PORTA_CRV": {
      "id": "PORTA_CRV",
      "byteOffset": 48,
      "byteLength": 1,
      "description": "Portamento Curve Type",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 52,
      "lengthSysex": 1
    },
    "PTL_LFO_LOCK": {
      "id": "PTL_LFO_LOCK",
      "byteOffset": 49,
      "byteLength": 1,
      "description": "Partial LFO Phase Lock",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 53,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 50,
      "byteLength": 14,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMT_PMT_PMT"] = {
  "name": "PCMT_PMT_PMT",
  "description": "PMT",
  "byteLength": 12,
  "sysexLength": 9,
  "parameters": {
    "PTL_SW": {
      "id": "PTL_SW",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Partial Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 1,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "KRANGE_LO": {
      "id": "KRANGE_LO",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "KeyRange Lower",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "KRANGE_UP": {
      "id": "KRANGE_UP",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "KeyRange Upper",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "KFADE_LO": {
      "id": "KFADE_LO",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "KeyFade Lower",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "KFADE_UP": {
      "id": "KFADE_UP",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "KeyFade Upper",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1
    },
    "VRANGE_LO": {
      "id": "VRANGE_LO",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "VeloRange Lower",
      "dataRange": [
        1,
        127
      ],
      "initValue": 1,
      "sysexOffset": 5,
      "lengthSysex": 1
    },
    "VRANGE_UP": {
      "id": "VRANGE_UP",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "VeloRange Upper",
      "dataRange": [
        1,
        127
      ],
      "initValue": 127,
      "sysexOffset": 6,
      "lengthSysex": 1
    },
    "VFADE_LO": {
      "id": "VFADE_LO",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "VeloFade Lower",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1
    },
    "VFADE_UP": {
      "id": "VFADE_UP",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "VeloFade Upper",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMT_PMT"] = {
  "name": "PCMT_PMT",
  "description": "PCMTone PartialMixTable",
  "byteLength": 52,
  "sysexLength": 38,
  "parameters": {
    "VEL_CTRL": {
      "id": "VEL_CTRL",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Velocity Control",
      "dataRange": [
        0,
        3
      ],
      "initValue": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON",
        "2": "RANDOM",
        "3": "CYCLE"
      }
    },
    "PMT_LEVEL_CRV": {
      "id": "PMT_LEVEL_CRV",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "PMT Level Curve",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "EXP",
        "1": "LINEAR"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PMT": {
      "id": "PMT",
      "byteOffset": 4,
      "byteLength": 48,
      "description": "PMT",
      "blockName": "PCMT_PMT_PMT",
      "count": 4,
      "blockByteLength": 12,
      "sysexOffset": "00 00 02",
      "lengthSysex": 36,
      "block": ZenProperties["PCMT_PMT_PMT"]
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMT_PTL_MCTL"] = {
  "name": "PCMT_PTL_MCTL",
  "description": "Matrix Control",
  "byteLength": 12,
  "sysexLength": 9,
  "parameters": {
    "SRC": {
      "id": "SRC",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Source",
      "dataRange": [
        0,
        108
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "CC01",
        "2": "CC02",
        "3": "CC03",
        "4": "CC04",
        "5": "CC05",
        "6": "CC06",
        "7": "CC07",
        "8": "CC08",
        "9": "CC09",
        "10": "CC10",
        "11": "CC11",
        "12": "CC12",
        "13": "CC13",
        "14": "CC14",
        "15": "CC15",
        "16": "CC16",
        "17": "CC17",
        "18": "CC18",
        "19": "CC19",
        "20": "CC20",
        "21": "CC21",
        "22": "CC22",
        "23": "CC23",
        "24": "CC24",
        "25": "CC25",
        "26": "CC26",
        "27": "CC27",
        "28": "CC28",
        "29": "CC29",
        "30": "CC30",
        "31": "CC31",
        "32": "CC33",
        "33": "CC34",
        "34": "CC35",
        "35": "CC36",
        "36": "CC37",
        "37": "CC38",
        "38": "CC39",
        "39": "CC40",
        "40": "CC41",
        "41": "CC42",
        "42": "CC43",
        "43": "CC44",
        "44": "CC45",
        "45": "CC46",
        "46": "CC47",
        "47": "CC48",
        "48": "CC49",
        "49": "CC50",
        "50": "CC51",
        "51": "CC52",
        "52": "CC53",
        "53": "CC54",
        "54": "CC55",
        "55": "CC56",
        "56": "CC57",
        "57": "CC58",
        "58": "CC59",
        "59": "CC60",
        "60": "CC61",
        "61": "CC62",
        "62": "CC63",
        "63": "CC64",
        "64": "CC65",
        "65": "CC66",
        "66": "CC67",
        "67": "CC68",
        "68": "CC69",
        "69": "CC70",
        "70": "CC71",
        "71": "CC72",
        "72": "CC73",
        "73": "CC74",
        "74": "CC75",
        "75": "CC76",
        "76": "CC77",
        "77": "CC78",
        "78": "CC79",
        "79": "CC80",
        "80": "CC81",
        "81": "CC82",
        "82": "CC83",
        "83": "CC84",
        "84": "CC85",
        "85": "CC86",
        "86": "CC87",
        "87": "CC88",
        "88": "CC89",
        "89": "CC90",
        "90": "CC91",
        "91": "CC92",
        "92": "CC93",
        "93": "CC94",
        "94": "CC95",
        "95": "BEND",
        "96": "AFT",
        "97": "SYS-CTRL1",
        "98": "SYS-CTRL2",
        "99": "SYS-CTRL3",
        "100": "SYS-CTRL4",
        "101": "VELOCITY",
        "102": "KEYFOLLOW",
        "103": "TEMPO",
        "104": "LFO1",
        "105": "LFO2",
        "106": "PIT-ENV",
        "107": "TVF-ENV",
        "108": "TVA-ENV"
      }
    },
    "DST1": {
      "id": "DST1",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Destination 1",
      "dataRange": [
        0,
        48
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "PCH",
        "2": "CUT",
        "3": "RES",
        "4": "LEV",
        "5": "PAN",
        "6": "DLY",
        "7": "REV",
        "8": "PIT-LFO1",
        "9": "PIT-LFO2",
        "10": "TVF-LFO1",
        "11": "TVF-LFO2",
        "12": "TVA-LFO1",
        "13": "TVA-LFO2",
        "14": "PAN-LFO1",
        "15": "PAN-LFO2",
        "16": "LFO1-RATE",
        "17": "LFO2-RATE",
        "18": "PIT-ATK",
        "19": "PIT-DCY",
        "20": "PIT-REL",
        "21": "TVF-ATK",
        "22": "TVF-DCY",
        "23": "TVF-REL",
        "24": "TVA-ATK",
        "25": "TVA-DCY",
        "26": "TVA-REL",
        "27": "PMT",
        "28": "FXM",
        "29": "MFX-CTRL1",
        "30": "MFX-CTRL2",
        "31": "MFX-CTRL3",
        "32": "MFX-CTRL4",
        "33": "PW",
        "34": "PWM",
        "35": "FAT",
        "36": "XMOD",
        "37": "LFO1_STEP",
        "38": "LFO2_STEP",
        "39": "SSAW-DETN",
        "40": "PIT_DEPTH",
        "41": "TVF-DEPTH",
        "42": "TVA-DEPTH",
        "43": "XMOD2",
        "44": "ATT",
        "45": "RING-OSC1-LEV",
        "46": "RING-OSC2-LEV",
        "47": "XMOD-OSC1-LEV",
        "48": "XMOD-OSC2-LEV"
      }
    },
    "SENS1": {
      "id": "SENS1",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Sens 1",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "DST2": {
      "id": "DST2",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Destination 2",
      "dataRange": [
        0,
        48
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "PCH",
        "2": "CUT",
        "3": "RES",
        "4": "LEV",
        "5": "PAN",
        "6": "DLY",
        "7": "REV",
        "8": "PIT-LFO1",
        "9": "PIT-LFO2",
        "10": "TVF-LFO1",
        "11": "TVF-LFO2",
        "12": "TVA-LFO1",
        "13": "TVA-LFO2",
        "14": "PAN-LFO1",
        "15": "PAN-LFO2",
        "16": "LFO1-RATE",
        "17": "LFO2-RATE",
        "18": "PIT-ATK",
        "19": "PIT-DCY",
        "20": "PIT-REL",
        "21": "TVF-ATK",
        "22": "TVF-DCY",
        "23": "TVF-REL",
        "24": "TVA-ATK",
        "25": "TVA-DCY",
        "26": "TVA-REL",
        "27": "PMT",
        "28": "FXM",
        "29": "MFX-CTRL1",
        "30": "MFX-CTRL2",
        "31": "MFX-CTRL3",
        "32": "MFX-CTRL4",
        "33": "PW",
        "34": "PWM",
        "35": "FAT",
        "36": "XMOD",
        "37": "LFO1_STEP",
        "38": "LFO2_STEP",
        "39": "SSAW-DETN",
        "40": "PIT_DEPTH",
        "41": "TVF-DEPTH",
        "42": "TVA-DEPTH",
        "43": "XMOD2",
        "44": "ATT",
        "45": "RING-OSC1-LEV",
        "46": "RING-OSC2-LEV",
        "47": "XMOD-OSC1-LEV",
        "48": "XMOD-OSC2-LEV"
      }
    },
    "SENS2": {
      "id": "SENS2",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Sens 2",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "DST3": {
      "id": "DST3",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Destination 3",
      "dataRange": [
        0,
        48
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "PCH",
        "2": "CUT",
        "3": "RES",
        "4": "LEV",
        "5": "PAN",
        "6": "DLY",
        "7": "REV",
        "8": "PIT-LFO1",
        "9": "PIT-LFO2",
        "10": "TVF-LFO1",
        "11": "TVF-LFO2",
        "12": "TVA-LFO1",
        "13": "TVA-LFO2",
        "14": "PAN-LFO1",
        "15": "PAN-LFO2",
        "16": "LFO1-RATE",
        "17": "LFO2-RATE",
        "18": "PIT-ATK",
        "19": "PIT-DCY",
        "20": "PIT-REL",
        "21": "TVF-ATK",
        "22": "TVF-DCY",
        "23": "TVF-REL",
        "24": "TVA-ATK",
        "25": "TVA-DCY",
        "26": "TVA-REL",
        "27": "PMT",
        "28": "FXM",
        "29": "MFX-CTRL1",
        "30": "MFX-CTRL2",
        "31": "MFX-CTRL3",
        "32": "MFX-CTRL4",
        "33": "PW",
        "34": "PWM",
        "35": "FAT",
        "36": "XMOD",
        "37": "LFO1_STEP",
        "38": "LFO2_STEP",
        "39": "SSAW-DETN",
        "40": "PIT_DEPTH",
        "41": "TVF-DEPTH",
        "42": "TVA-DEPTH",
        "43": "XMOD2",
        "44": "ATT",
        "45": "RING-OSC1-LEV",
        "46": "RING-OSC2-LEV",
        "47": "XMOD-OSC1-LEV",
        "48": "XMOD-OSC2-LEV"
      }
    },
    "SENS3": {
      "id": "SENS3",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Sens 3",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "DST4": {
      "id": "DST4",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Destination 4",
      "dataRange": [
        0,
        48
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "PCH",
        "2": "CUT",
        "3": "RES",
        "4": "LEV",
        "5": "PAN",
        "6": "DLY",
        "7": "REV",
        "8": "PIT-LFO1",
        "9": "PIT-LFO2",
        "10": "TVF-LFO1",
        "11": "TVF-LFO2",
        "12": "TVA-LFO1",
        "13": "TVA-LFO2",
        "14": "PAN-LFO1",
        "15": "PAN-LFO2",
        "16": "LFO1-RATE",
        "17": "LFO2-RATE",
        "18": "PIT-ATK",
        "19": "PIT-DCY",
        "20": "PIT-REL",
        "21": "TVF-ATK",
        "22": "TVF-DCY",
        "23": "TVF-REL",
        "24": "TVA-ATK",
        "25": "TVA-DCY",
        "26": "TVA-REL",
        "27": "PMT",
        "28": "FXM",
        "29": "MFX-CTRL1",
        "30": "MFX-CTRL2",
        "31": "MFX-CTRL3",
        "32": "MFX-CTRL4",
        "33": "PW",
        "34": "PWM",
        "35": "FAT",
        "36": "XMOD",
        "37": "LFO1_STEP",
        "38": "LFO2_STEP",
        "39": "SSAW-DETN",
        "40": "PIT_DEPTH",
        "41": "TVF-DEPTH",
        "42": "TVA-DEPTH",
        "43": "XMOD2",
        "44": "ATT",
        "45": "RING-OSC1-LEV",
        "46": "RING-OSC2-LEV",
        "47": "XMOD-OSC1-LEV",
        "48": "XMOD-OSC2-LEV"
      }
    },
    "SENS4": {
      "id": "SENS4",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Sens 4",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 9,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMT_PTL"] = {
  "name": "PCMT_PTL",
  "description": "PCMTone Partial",
  "byteLength": 124,
  "sysexLength": 128,
  "parameters": {
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PIT_CRS": {
      "id": "PIT_CRS",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Coarse Tune",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PIT_FINE": {
      "id": "PIT_FINE",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Fine Tune",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "cent"
    },
    "PIT_RND": {
      "id": "PIT_RND",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Random Pitch Depth",
      "dataRange": [
        0,
        1200
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 4,
      "displayMeasurement": "cent"
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PAN_KF": {
      "id": "PAN_KF",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Pan Keyfollow",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "PAN_RND": {
      "id": "PAN_RND",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Random Pan Depth",
      "dataRange": [
        0,
        63
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1
    },
    "PAN_ALT": {
      "id": "PAN_ALT",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Alternate Pan Depth",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "ENV_MODE": {
      "id": "ENV_MODE",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Envelope Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 12,
      "lengthSysex": 1,
      "values": {
        "0": "NO-SUS",
        "1": "SUSTAIN"
      }
    },
    "DELAY_MODE": {
      "id": "DELAY_MODE",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Delay Mode",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "values": {
        "0": "NORMAL",
        "1": "HOLD",
        "2": "KEYOFF-NORMAL",
        "3": "KEYOFF-DECAY"
      }
    },
    "DLY_TIME_SYNC": {
      "id": "DLY_TIME_SYNC",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "DelayTime Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "DLY_TIME_NOTE": {
      "id": "DLY_TIME_NOTE",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "DelayTime (note)",
      "dataRange": [
        0,
        21
      ],
      "initValue": 12,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "1/64T",
        "1": "1/64",
        "2": "1/32T",
        "3": "1/32",
        "4": "1/16T",
        "5": "1/32.",
        "6": "1/16",
        "7": "1/8T",
        "8": "1/16.",
        "9": "1/8",
        "10": "1/4T",
        "11": "1/8.",
        "12": "1/4",
        "13": "1/2T",
        "14": "1/4.",
        "15": "1/2",
        "16": "1T",
        "17": "1/2.",
        "18": "1",
        "19": "2T",
        "20": "1.",
        "21": "2"
      }
    },
    "DLY_TIME": {
      "id": "DLY_TIME",
      "byteOffset": 14,
      "byteLength": 2,
      "description": "DelayTime",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 4
    },
    "CHO_SEND": {
      "id": "CHO_SEND",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Delay Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 1
    },
    "REV_SEND": {
      "id": "REV_SEND",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Reverb Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "RX_BEND": {
      "id": "RX_BEND",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Receive Bender",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_EXPR": {
      "id": "RX_EXPR",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Receive Expression",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_HOLD": {
      "id": "RX_HOLD",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Receive Hold-1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REDAMP_SW": {
      "id": "REDAMP_SW",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Redamper Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "OUT_ASGN": {
      "id": "OUT_ASGN",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Output Assign",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "DRY",
        "1": "MFX"
      }
    },
    "WAV_GTYPE": {
      "id": "WAV_GTYPE",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Wave Group Type",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "INT",
        "1": "EXP",
        "2": "SAMP",
        "3": "MSAMP"
      }
    },
    "WAV_GID": {
      "id": "WAV_GID",
      "byteOffset": 24,
      "byteLength": 2,
      "description": "Wave Group ID",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 8,
      "sysexOffset": 28,
      "lengthSysex": 4,
      "displayRange": [
        0,
        7
      ]
    },
    "WAV_NUM_L": {
      "id": "WAV_NUM_L",
      "byteOffset": 26,
      "byteLength": 2,
      "description": "Wave Number L",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "sysexOffset": 32,
      "lengthSysex": 4
    },
    "WAV_NUM_R": {
      "id": "WAV_NUM_R",
      "byteOffset": 28,
      "byteLength": 2,
      "description": "Wave Number R",
      "dataRange": [
        0,
        16383
      ],
      "initValue": 0,
      "sysexOffset": 36,
      "lengthSysex": 4
    },
    "WAV_GAIN": {
      "id": "WAV_GAIN",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "Gain",
      "dataRange": [
        0,
        5
      ],
      "initValue": 3,
      "sysexOffset": 40,
      "lengthSysex": 1,
      "displayMeasurement": "dB",
      "values": {
        "0": "-18",
        "1": "-12",
        "2": "-6",
        "3": "0",
        "4": "+6",
        "5": "+12"
      }
    },
    "FXM_SW": {
      "id": "FXM_SW",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "FXM Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 41,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "FXM_COLOR": {
      "id": "FXM_COLOR",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "FXM Color",
      "dataRange": [
        1,
        4
      ],
      "initValue": 1,
      "sysexOffset": 42,
      "lengthSysex": 1
    },
    "FXM_DEPTH": {
      "id": "FXM_DEPTH",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "FXM Depth",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 43,
      "lengthSysex": 1
    },
    "PIT_KF": {
      "id": "PIT_KF",
      "byteOffset": 34,
      "byteLength": 2,
      "description": "Pitch Keyfollow",
      "dataRange": [
        -200,
        200
      ],
      "initValue": 100,
      "sysexOffset": 44,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "SOFT_EQ_SENS": {
      "id": "SOFT_EQ_SENS",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "Soft EQ Sens",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 48,
      "lengthSysex": 1
    },
    "FILTER_TYPE": {
      "id": "FILTER_TYPE",
      "byteOffset": 37,
      "byteLength": 1,
      "description": "TVF Filter Type",
      "dataRange": [
        0,
        6
      ],
      "initValue": 1,
      "sysexOffset": 49,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "LPF",
        "2": "BPF",
        "3": "HPF",
        "4": "PKG",
        "5": "LPF2",
        "6": "LPF3"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 38,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "CUTOFF": {
      "id": "CUTOFF",
      "byteOffset": 40,
      "byteLength": 2,
      "description": "TVF Cutoff Frequency",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 50,
      "lengthSysex": 4
    },
    "CUTOFF_KF": {
      "id": "CUTOFF_KF",
      "byteOffset": 42,
      "byteLength": 2,
      "description": "TVF Cutoff Keyfollow",
      "dataRange": [
        -200,
        200
      ],
      "initValue": 0,
      "sysexOffset": 54,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "CUTOFF_VCRV": {
      "id": "CUTOFF_VCRV",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "TVF Cutoff Velocity Curve",
      "dataRange": [
        0,
        7
      ],
      "initValue": 1,
      "sysexOffset": 58,
      "lengthSysex": 1
    },
    "CUTOFF_VSENS": {
      "id": "CUTOFF_VSENS",
      "byteOffset": 45,
      "byteLength": 1,
      "description": "TVF Cutoff Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 59,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "RESO": {
      "id": "RESO",
      "byteOffset": 46,
      "byteLength": 2,
      "description": "TVF Resonance",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 61,
      "lengthSysex": 4
    },
    "RESO_VSENS": {
      "id": "RESO_VSENS",
      "byteOffset": 48,
      "byteLength": 1,
      "description": "TVF Resonance Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 65,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "BIAS_LEVEL": {
      "id": "BIAS_LEVEL",
      "byteOffset": 49,
      "byteLength": 1,
      "description": "Bias Level",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 67,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "BIAS_POS": {
      "id": "BIAS_POS",
      "byteOffset": 50,
      "byteLength": 1,
      "description": "Bias Position",
      "dataRange": [
        0,
        127
      ],
      "initValue": 60,
      "sysexOffset": 69,
      "lengthSysex": 1
    },
    "BIAS_DIR": {
      "id": "BIAS_DIR",
      "byteOffset": 51,
      "byteLength": 1,
      "description": "Bias Direction",
      "dataRange": [
        0,
        3
      ],
      "initValue": 3,
      "sysexOffset": 70,
      "lengthSysex": 1,
      "values": {
        "0": "LOWER",
        "1": "UPPER",
        "2": "LOWER&UPPER",
        "3": "ALL"
      }
    },
    "LEVEL_VCRV": {
      "id": "LEVEL_VCRV",
      "byteOffset": 52,
      "byteLength": 1,
      "description": "TVA Level Velocity Curve",
      "dataRange": [
        0,
        7
      ],
      "initValue": 1,
      "sysexOffset": 71,
      "lengthSysex": 1
    },
    "LEVEL_VSENS": {
      "id": "LEVEL_VSENS",
      "byteOffset": 53,
      "byteLength": 1,
      "description": "TVA Level Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 72,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "PENV_TKF": {
      "id": "PENV_TKF",
      "byteOffset": 54,
      "byteLength": 1,
      "description": "Pitch Env Time Keyfollow",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 74,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "FENV_TKF": {
      "id": "FENV_TKF",
      "byteOffset": 55,
      "byteLength": 1,
      "description": "TVF Env Time Keyfollow",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 76,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "AENV_TKF": {
      "id": "AENV_TKF",
      "byteOffset": 56,
      "byteLength": 1,
      "description": "TVA Env Time Keyfollow",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 78,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "VIB_PIT_SENS": {
      "id": "VIB_PIT_SENS",
      "byteOffset": 57,
      "byteLength": 1,
      "description": "Vibrato Pitch Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 10,
      "sysexOffset": 80,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "VIB_CUT_SENS": {
      "id": "VIB_CUT_SENS",
      "byteOffset": 58,
      "byteLength": 1,
      "description": "Vibrato Cutoff Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 82,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "VIB_AMP_SENS": {
      "id": "VIB_AMP_SENS",
      "byteOffset": 59,
      "byteLength": 1,
      "description": "Vibrato Level Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 84,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "MCTL": {
      "id": "MCTL",
      "byteOffset": 60,
      "byteLength": 48,
      "description": "Matrix Control",
      "blockName": "PCMT_PTL_MCTL",
      "count": 4,
      "blockByteLength": 12,
      "sysexOffset": "00 00 56",
      "lengthSysex": 36,
      "block": ZenProperties["PCMT_PTL_MCTL"]
    },
    "DAMP_FREE": {
      "id": "DAMP_FREE",
      "byteOffset": 108,
      "byteLength": 1,
      "description": "Damper Free Note",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 122,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100",
        "101": "101",
        "102": "102",
        "103": "103",
        "104": "104",
        "105": "105",
        "106": "106",
        "107": "107",
        "108": "108",
        "109": "109",
        "110": "110",
        "111": "111",
        "112": "112",
        "113": "113",
        "114": "114",
        "115": "115",
        "116": "116",
        "117": "117",
        "118": "118",
        "119": "119",
        "120": "120",
        "121": "121",
        "122": "122",
        "123": "123",
        "124": "124",
        "125": "125",
        "126": "126",
        "127": "127",
        "128": ""
      }
    },
    "STEREO_WIDTH": {
      "id": "STEREO_WIDTH",
      "byteOffset": 109,
      "byteLength": 1,
      "description": "Stereo Width",
      "dataRange": [
        0,
        100
      ],
      "initValue": 100,
      "sysexOffset": 123,
      "lengthSysex": 1
    },
    "STEREO_DETN": {
      "id": "STEREO_DETN",
      "byteOffset": 110,
      "byteLength": 1,
      "description": "Stereo Detune",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 124,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "cent"
    },
    "DF_DCY_OFST": {
      "id": "DF_DCY_OFST",
      "byteOffset": 111,
      "byteLength": 1,
      "description": "Damper Free Decay Offset",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 125,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "TEMPO_SYNC": {
      "id": "TEMPO_SYNC",
      "byteOffset": 112,
      "byteLength": 1,
      "description": "Wave Tempo Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 127,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 113,
      "byteLength": 11,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PEQ"] = {
  "name": "PEQ",
  "description": "",
  "byteLength": 12,
  "sysexLength": 9,
  "parameters": {
    "EQ_IN_GAIN": {
      "id": "EQ_IN_GAIN",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "EQ Input Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "EQ_LO_GAIN": {
      "id": "EQ_LO_GAIN",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "EQ Low Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "EQ_MID_GAIN": {
      "id": "EQ_MID_GAIN",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "EQ Mid Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "EQ_HI_GAIN": {
      "id": "EQ_HI_GAIN",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "EQ High Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "EQ_LO_FREQ": {
      "id": "EQ_LO_FREQ",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "EQ Low Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 10,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "EQ_MID_FREQ": {
      "id": "EQ_MID_FREQ",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "EQ Mid Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 17,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "EQ_HI_FREQ": {
      "id": "EQ_HI_FREQ",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "EQ High Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 20,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "EQ_MID_Q": {
      "id": "EQ_MID_Q",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "EQ Mid Q",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "0.5",
        "1": "1.0",
        "2": "2.0",
        "3": "4.0",
        "4": "8.0",
        "5": "16.0"
      }
    },
    "EQ_SW": {
      "id": "EQ_SW",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "EQ Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 9,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PHR_BND"] = {
  "name": "PHR_BND",
  "description": "",
  "byteLength": 16,
  "sysexLength": 32,
  "parameters": {
    "BEND_VAL_1": {
      "id": "BEND_VAL_1",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "SEQ Bend Value 1",
      "dataRange": [
        -1,
        16383
      ],
      "initValue": -1,
      "lengthSysex": 4
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PHR_CC"] = {
  "name": "PHR_CC",
  "description": "",
  "byteLength": 64,
  "sysexLength": 128,
  "parameters": {
    "PRM1_VAL_1": {
      "id": "PRM1_VAL_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "SEQ Prm1 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    },
    "PRM2_VAL_1": {
      "id": "PRM2_VAL_1",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "SEQ Prm2 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 16,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    },
    "PRM3_VAL_1": {
      "id": "PRM3_VAL_1",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "SEQ Prm3 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 32,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    },
    "PRM4_VAL_1": {
      "id": "PRM4_VAL_1",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "SEQ Prm4 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 48,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    },
    "PRM5_VAL_1": {
      "id": "PRM5_VAL_1",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "SEQ Prm5 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 64,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    },
    "PRM6_VAL_1": {
      "id": "PRM6_VAL_1",
      "byteOffset": 40,
      "byteLength": 1,
      "description": "SEQ Prm6 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 80,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    },
    "PRM7_VAL_1": {
      "id": "PRM7_VAL_1",
      "byteOffset": 48,
      "byteLength": 1,
      "description": "SEQ Prm7 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 96,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    },
    "PRM8_VAL_1": {
      "id": "PRM8_VAL_1",
      "byteOffset": 56,
      "byteLength": 1,
      "description": "SEQ Prm8 Value 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 112,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "\t0",
        "2": "\t1",
        "3": "\t2",
        "4": "\t3",
        "5": "\t4",
        "6": "\t5",
        "7": "\t6",
        "8": "\t7",
        "9": "\t8",
        "10": "\t9",
        "11": "\t10",
        "12": "\t11",
        "13": "\t12",
        "14": "\t13",
        "15": "\t14",
        "16": "\t15",
        "17": "\t16",
        "18": "\t17",
        "19": "\t18",
        "20": "\t19",
        "21": "\t20",
        "22": "\t21",
        "23": "\t22",
        "24": "\t23",
        "25": "\t24",
        "26": "\t25",
        "27": "\t26",
        "28": "\t27",
        "29": "\t28",
        "30": "\t29",
        "31": "\t30",
        "32": "\t31",
        "33": "\t32",
        "34": "\t33",
        "35": "\t34",
        "36": "\t35",
        "37": "\t36",
        "38": "\t37",
        "39": "\t38",
        "40": "\t39",
        "41": "\t40",
        "42": "\t41",
        "43": "\t42",
        "44": "\t43",
        "45": "\t44",
        "46": "\t45",
        "47": "\t46",
        "48": "\t47",
        "49": "\t48",
        "50": "\t49",
        "51": "\t50",
        "52": "\t51",
        "53": "\t52",
        "54": "\t53",
        "55": "\t54",
        "56": "\t55",
        "57": "\t56",
        "58": "\t57",
        "59": "\t58",
        "60": "\t59",
        "61": "\t60",
        "62": "\t61",
        "63": "\t62",
        "64": "\t63",
        "65": "\t64",
        "66": "\t65",
        "67": "\t66",
        "68": "\t67",
        "69": "\t68",
        "70": "\t69",
        "71": "\t70",
        "72": "\t71",
        "73": "\t72",
        "74": "\t73",
        "75": "\t74",
        "76": "\t75",
        "77": "\t76",
        "78": "\t77",
        "79": "\t78",
        "80": "\t79",
        "81": "\t80",
        "82": "\t81",
        "83": "\t82",
        "84": "\t83",
        "85": "\t84",
        "86": "\t85",
        "87": "\t86",
        "88": "\t87",
        "89": "\t88",
        "90": "\t89",
        "91": "\t90",
        "92": "\t91",
        "93": "\t92",
        "94": "\t93",
        "95": "\t94",
        "96": "\t95",
        "97": "\t96",
        "98": "\t97",
        "99": "\t98",
        "100": "\t99",
        "101": "\t100",
        "102": "\t101",
        "103": "\t102",
        "104": "\t103",
        "105": "\t104",
        "106": "\t105",
        "107": "\t106",
        "108": "\t107",
        "109": "\t108",
        "110": "\t109",
        "111": "\t110",
        "112": "\t111",
        "113": "\t112",
        "114": "\t113",
        "115": "\t114",
        "116": "\t115",
        "117": "\t116",
        "118": "\t117",
        "119": "\t118",
        "120": "\t119",
        "121": "\t120",
        "122": "\t121",
        "123": "\t122",
        "124": "\t123",
        "125": "\t124",
        "126": "\t125",
        "127": "\t126",
        "128": "\t127"
      }
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PHR_NT"] = {
  "name": "PHR_NT",
  "description": "",
  "byteLength": 96,
  "sysexLength": 128,
  "parameters": {
    "MUTE_1": {
      "id": "MUTE_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Random Mute 1",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "displayMeasurement": "%"
    },
    "NOTE_1": {
      "id": "NOTE_1",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Note 1",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 16,
      "lengthSysex": 2,
      "values": {
        "0": "OFF",
        "1": "0 - 127"
      }
    },
    "VELO_1": {
      "id": "VELO_1",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Velocity 1",
      "dataRange": [
        0,
        127
      ],
      "initValue": 80,
      "sysexOffset": 48,
      "lengthSysex": 1
    },
    "START_1": {
      "id": "START_1",
      "byteOffset": 48,
      "byteLength": 1,
      "description": "Start 1",
      "dataRange": [
        -50,
        99
      ],
      "initValue": 0,
      "sysexOffset": 64,
      "lengthSysex": 2,
      "displayMeasurement": "%"
    },
    "END_1": {
      "id": "END_1",
      "byteOffset": 64,
      "byteLength": 1,
      "description": "End 1",
      "dataRange": [
        0,
        100
      ],
      "initValue": 80,
      "sysexOffset": 96,
      "lengthSysex": 1,
      "values": {
        "0": "0",
        "1": "\t1",
        "2": "\t2",
        "3": "\t3",
        "4": "\t4",
        "5": "\t5",
        "6": "\t6",
        "7": "\t7",
        "8": "\t8",
        "9": "\t9",
        "10": "\t10",
        "11": "\t11",
        "12": "\t12",
        "13": "\t13",
        "14": "\t14",
        "15": "\t15",
        "16": "\t16",
        "17": "\t17",
        "18": "\t18",
        "19": "\t19",
        "20": "\t20",
        "21": "\t21",
        "22": "\t22",
        "23": "\t23",
        "24": "\t24",
        "25": "\t25",
        "26": "\t26",
        "27": "\t27",
        "28": "\t28",
        "29": "\t29",
        "30": "\t30",
        "31": "\t31",
        "32": "\t32",
        "33": "\t33",
        "34": "\t34",
        "35": "\t35",
        "36": "\t36",
        "37": "\t37",
        "38": "\t38",
        "39": "\t39",
        "40": "\t40",
        "41": "\t41",
        "42": "\t42",
        "43": "\t43",
        "44": "\t44",
        "45": "\t45",
        "46": "\t46",
        "47": "\t47",
        "48": "\t48",
        "49": "\t49",
        "50": "\t50",
        "51": "\t51",
        "52": "\t52",
        "53": "\t53",
        "54": "\t54",
        "55": "\t55",
        "56": "\t56",
        "57": "\t57",
        "58": "\t58",
        "59": "\t59",
        "60": "\t60",
        "61": "\t61",
        "62": "\t62",
        "63": "\t63",
        "64": "\t64",
        "65": "\t65",
        "66": "\t66",
        "67": "\t67",
        "68": "\t68",
        "69": "\t69",
        "70": "\t70",
        "71": "\t71",
        "72": "\t72",
        "73": "\t73",
        "74": "\t74",
        "75": "\t75",
        "76": "\t76",
        "77": "\t77",
        "78": "\t78",
        "79": "\t79",
        "80": "\t80",
        "81": "\t81",
        "82": "\t82",
        "83": "\t83",
        "84": "\t84",
        "85": "\t85",
        "86": "\t86",
        "87": "\t87",
        "88": "\t88",
        "89": "\t89",
        "90": "\t90",
        "91": "\t91",
        "92": "\t92",
        "93": "\t93",
        "94": "\t94",
        "95": "\t95",
        "96": "\t96",
        "97": "\t97",
        "98": "\t98",
        "99": "\t99",
        "100": "\tTIE"
      }
    },
    "SUB_STEP_1": {
      "id": "SUB_STEP_1",
      "byteOffset": 80,
      "byteLength": 1,
      "description": "Sub Step 1",
      "dataRange": [
        0,
        9
      ],
      "initValue": 0,
      "sysexOffset": 112,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1/2",
        "2": "1/3",
        "3": "1/4",
        "4": "FLAM",
        "5": "3-1",
        "6": "3-2",
        "7": "3-3",
        "8": "3-4",
        "9": "4-1"
      }
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PHR"] = {
  "name": "PHR",
  "description": "",
  "byteLength": 192,
  "sysexLength": 177,
  "parameters": {
    "SCALE": {
      "id": "SCALE",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Scale",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "lengthSysex": 1,
      "values": {
        "0": "1/8",
        "1": "1/16",
        "2": "1/32",
        "3": "1/4T",
        "4": "1/8T",
        "5": "1/16T"
      }
    },
    "LENGTH": {
      "id": "LENGTH",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Step Length",
      "dataRange": [
        1,
        128
      ],
      "initValue": 16,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "FIRST": {
      "id": "FIRST",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "First Step",
      "dataRange": [
        1,
        128
      ],
      "initValue": 1,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "FIRST_SW": {
      "id": "FIRST_SW",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "First Step Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LAST": {
      "id": "LAST",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Last Step",
      "dataRange": [
        1,
        128
      ],
      "initValue": 128,
      "sysexOffset": 4,
      "lengthSysex": 1
    },
    "LAST_SW": {
      "id": "LAST_SW",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Last Step Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PLAY_LENGTH": {
      "id": "PLAY_LENGTH",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "Play Step Length",
      "dataRange": [
        0,
        512
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 4,
      "values": {
        "0": "OFF",
        "1": "1 - 512"
      }
    },
    "SHUFFLE": {
      "id": "SHUFFLE",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Shuffle",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1
    },
    "DIRECTION": {
      "id": "DIRECTION",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Direction",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "FWD",
        "1": "REV",
        "2": "FWD+REV",
        "3": "INV",
        "4": "RND"
      }
    },
    "TRANSPOSE": {
      "id": "TRANSPOSE",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Transpose",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 1
    },
    "NEXT_CLIP": {
      "id": "NEXT_CLIP",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Next Clip",
      "dataRange": [
        -2,
        15
      ],
      "initValue": -2,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "values": {
        "0": "STAY",
        "1": "STOP",
        "2": "CLIP 1",
        "3": "CLIP 2",
        "4": "CLIP 3",
        "5": "CLIP 4",
        "6": "CLIP 5",
        "7": "CLIP 6",
        "8": "CLIP 7",
        "9": "CLIP 8",
        "10": "CLIP 9",
        "11": "CLIP10",
        "12": "CLIP11",
        "13": "CLIP12",
        "14": "CLIP13",
        "15": "CLIP14",
        "16": "CLIP15",
        "17": "CLIP16"
      }
    },
    "QUANTIZE_TIGHTNESS": {
      "id": "QUANTIZE_TIGHTNESS",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Quantize Tightness",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "displayMeasurement": "%",
      "values": {
        "0": "OFF",
        "1": "1 - 100"
      }
    },
    "MOTION_SW": {
      "id": "MOTION_SW",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "Motion Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 14,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "NOTE_MUTE_1": {
      "id": "NOTE_MUTE_1",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Note Mute 1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MUTE"
      }
    },
    "CC_NUM_1": {
      "id": "CC_NUM_1",
      "byteOffset": 144,
      "byteLength": 1,
      "description": "CC Number 1",
      "dataRange": [
        -1,
        120
      ],
      "initValue": -1,
      "sysexOffset": 144,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "0 - 119",
        "2": "CAF"
      }
    },
    "CC_MUTE_1": {
      "id": "CC_MUTE_1",
      "byteOffset": 160,
      "byteLength": 1,
      "description": "CC Mute 1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 160,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MUTE"
      }
    },
    "BEND_MUTE": {
      "id": "BEND_MUTE",
      "byteOffset": 176,
      "byteLength": 1,
      "description": "Bend Mute",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 176,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MUTE"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 177,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 180,
      "byteLength": 12,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PJC_SCENE"] = {
  "name": "PJC_SCENE",
  "description": "SCENE",
  "byteLength": 8,
  "sysexLength": 8,
  "parameters": {
    "CLIP_1": {
      "id": "CLIP_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": " 1",
      "dataRange": [
        -1,
        15
      ],
      "initValue": -1,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "1 - 16"
      }
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PJC"] = {
  "name": "PJC",
  "description": "",
  "byteLength": 369,
  "sysexLength": 182,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Project Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1
    },
    "TEMPO": {
      "id": "TEMPO",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "Project Tempo",
      "dataRange": [
        4000,
        30000
      ],
      "initValue": 7000,
      "sysexOffset": 16,
      "lengthSysex": 4,
      "displayRange": [
        40,
        300
      ]
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Project Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 20,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "V_RSRV": {
      "id": "V_RSRV",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Voice Reserve Layer(01$)",
      "dataRange": [
        0,
        10
      ],
      "initValue": 4,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "WAV_CUE_LEV": {
      "id": "WAV_CUE_LEV",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "WAV Cue Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 22,
      "lengthSysex": 2
    },
    "WAV_LEV": {
      "id": "WAV_LEV",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "WAV Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 24,
      "lengthSysex": 2
    },
    "EXT_SENS": {
      "id": "EXT_SENS",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "External Sens",
      "dataRange": [
        0,
        60
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1
    },
    "EXT_CUE_LEV": {
      "id": "EXT_CUE_LEV",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "External Cue Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1
    },
    "EXT_LEV": {
      "id": "EXT_LEV",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "External Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 28,
      "lengthSysex": 1
    },
    "PC_CUE_LEV": {
      "id": "PC_CUE_LEV",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "PC Cue Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1
    },
    "PC_LEV": {
      "id": "PC_LEV",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "PC Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 30,
      "lengthSysex": 1
    },
    "SEND_RETURN_POS": {
      "id": "SEND_RETURN_POS",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "Send Return Pos",
      "dataRange": [
        0,
        13
      ],
      "initValue": 0,
      "sysexOffset": 31,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "PC",
        "2": "TRACK1",
        "3": "TRACK2",
        "4": "TRACK3",
        "5": "TRACK4",
        "6": "TRACK5",
        "7": "TRACK6",
        "8": "TRACK7",
        "9": "TRACK8",
        "10": "DELAY",
        "11": "REVERB",
        "12": "SCATTER",
        "13": "MIXOUT"
      }
    },
    "SEND_LEV": {
      "id": "SEND_LEV",
      "byteOffset": 29,
      "byteLength": 1,
      "description": "Send Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 200,
      "sysexOffset": 32,
      "lengthSysex": 2
    },
    "RETURN_LEV": {
      "id": "RETURN_LEV",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "Return Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 200,
      "sysexOffset": 34,
      "lengthSysex": 2
    },
    "ASGN_CUE_LEV": {
      "id": "ASGN_CUE_LEV",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "Assign Cue Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 36,
      "lengthSysex": 2
    },
    "ASGN_LEV": {
      "id": "ASGN_LEV",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Assign Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 255,
      "sysexOffset": 38,
      "lengthSysex": 2
    },
    "EXT_STEREO": {
      "id": "EXT_STEREO",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "EXT Stereo",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 40,
      "lengthSysex": 1,
      "values": {
        "0": "MONO",
        "1": "STEREO"
      }
    },
    "SEND_STEREO": {
      "id": "SEND_STEREO",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Send Stereo",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 41,
      "lengthSysex": 1,
      "values": {
        "0": "MONO",
        "1": "STEREO"
      }
    },
    "RETURN_STEREO": {
      "id": "RETURN_STEREO",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "Return Stereo",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 42,
      "lengthSysex": 1,
      "values": {
        "0": "MONO",
        "1": "STEREO"
      }
    },
    "REC_POS": {
      "id": "REC_POS",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "Rec Source",
      "dataRange": [
        0,
        12
      ],
      "initValue": 0,
      "sysexOffset": 43,
      "lengthSysex": 1,
      "values": {
        "0": "EXT(WET)",
        "1": "EXT(DRY)",
        "2": "EXT(W/D)",
        "3": "PC",
        "4": "KICK",
        "5": "SNARE",
        "6": "HI-HAT",
        "7": "KIT",
        "8": "BASS",
        "9": "INST1",
        "10": "INST2",
        "11": "VOCAL",
        "12": "MIXOUT"
      }
    },
    "SEQ_SCALE": {
      "id": "SEQ_SCALE",
      "byteOffset": 37,
      "byteLength": 1,
      "description": "Base Scale",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 44,
      "lengthSysex": 1,
      "values": {
        "0": "1/8",
        "1": "1/16",
        "2": "1/32",
        "3": "1/4T",
        "4": "1/8T",
        "5": "1/16T"
      }
    },
    "SEQ_LENGTH": {
      "id": "SEQ_LENGTH",
      "byteOffset": 38,
      "byteLength": 1,
      "description": "Base Step",
      "dataRange": [
        2,
        128
      ],
      "initValue": 16,
      "sysexOffset": 45,
      "lengthSysex": 1
    },
    "SEQ_SHUFFLE": {
      "id": "SEQ_SHUFFLE",
      "byteOffset": 39,
      "byteLength": 1,
      "description": "Shuffle",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 46,
      "lengthSysex": 1
    },
    "SEQ_SHUFFLE_SRC": {
      "id": "SEQ_SHUFFLE_SRC",
      "byteOffset": 40,
      "byteLength": 1,
      "description": "Shuffle Source",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 47,
      "lengthSysex": 1,
      "values": {
        "0": "COMMON",
        "1": "CLIP"
      }
    },
    "SEQ_QUANTIZE_SW": {
      "id": "SEQ_QUANTIZE_SW",
      "byteOffset": 41,
      "byteLength": 1,
      "description": "Quanzie Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 48,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SEQ_QUANTIZE_TIGHTNESS": {
      "id": "SEQ_QUANTIZE_TIGHTNESS",
      "byteOffset": 42,
      "byteLength": 1,
      "description": "Quanzie Tightness",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 49,
      "lengthSysex": 1,
      "displayMeasurement": "%",
      "values": {
        "0": "OFF",
        "1": "1 - 100"
      }
    },
    "SEQ_MOTION_SW": {
      "id": "SEQ_MOTION_SW",
      "byteOffset": 43,
      "byteLength": 1,
      "description": "Motion Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 50,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PAD_TRANSPOSE": {
      "id": "PAD_TRANSPOSE",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "Pad Trancepose",
      "dataRange": [
        -6,
        6
      ],
      "initValue": 0,
      "sysexOffset": 51,
      "lengthSysex": 1,
      "values": {
        "0": "F#",
        "1": "G",
        "2": "G#",
        "3": "A",
        "4": "A#",
        "5": "B",
        "6": "C",
        "7": "C#",
        "8": "D",
        "9": "D#",
        "10": "E",
        "11": "F",
        "12": "F#"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 45,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "TUNE": {
      "id": "TUNE",
      "byteOffset": 49,
      "byteLength": 2,
      "description": "Master Tune",
      "dataRange": [
        -198,
        195
      ],
      "initValue": 0,
      "sysexOffset": 52,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "KEY_SHIFT": {
      "id": "KEY_SHIFT",
      "byteOffset": 51,
      "byteLength": 1,
      "description": "Master Key Shift",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 56,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "SCALE_TUNE_SW": {
      "id": "SCALE_TUNE_SW",
      "byteOffset": 52,
      "byteLength": 1,
      "description": "Scale Tune Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 57,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "_reserved_": {
      "id": "_reserved_",
      "byteOffset": 53,
      "byteLength": 1,
      "description": "reserved",
      "dataRange": [
        0,
        8
      ],
      "initValue": 1,
      "sysexOffset": 58,
      "lengthSysex": 1
    },
    "REC_MEAS": {
      "id": "REC_MEAS",
      "byteOffset": 54,
      "byteLength": 1,
      "description": "Rec Measure",
      "dataRange": [
        1,
        8
      ],
      "initValue": 1,
      "sysexOffset": 59,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8"
      }
    },
    "REC_FADE": {
      "id": "REC_FADE",
      "byteOffset": 55,
      "byteLength": 1,
      "description": "Rec Fade",
      "dataRange": [
        -1,
        3
      ],
      "initValue": 0,
      "sysexOffset": 60,
      "lengthSysex": 1,
      "displayMeasurement": "Sample",
      "values": {
        "0": "OFF",
        "1": "32",
        "2": "64",
        "3": "96",
        "4": "128"
      }
    },
    "FIRST_SCENE": {
      "id": "FIRST_SCENE",
      "byteOffset": 56,
      "byteLength": 1,
      "description": "First Scene",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 61,
      "lengthSysex": 1,
      "displayRange": [
        1,
        8
      ]
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 57,
      "byteLength": 128,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SCENE": {
      "id": "SCENE",
      "byteOffset": 185,
      "byteLength": 64,
      "description": "SCENE",
      "blockName": "PJC_SCENE",
      "count": 8,
      "blockByteLength": 8,
      "sysexOffset": "00 00 3e",
      "lengthSysex": 64,
      "block": ZenProperties["PJC_SCENE"]
    },
    "MASTER_REV_KNOB1_ASGN": {
      "id": "MASTER_REV_KNOB1_ASGN",
      "byteOffset": 249,
      "byteLength": 2,
      "description": "Rev Knob1 Assign",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "sysexOffset": 126,
      "lengthSysex": 4
    },
    "MASTER_REV_KNOB2_ASGN": {
      "id": "MASTER_REV_KNOB2_ASGN",
      "byteOffset": 251,
      "byteLength": 2,
      "description": "Rev Knob2 Assign",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "sysexOffset": 130,
      "lengthSysex": 4
    },
    "MASTER_DEL_KNOB1_ASGN": {
      "id": "MASTER_DEL_KNOB1_ASGN",
      "byteOffset": 253,
      "byteLength": 2,
      "description": "Dly Knob1 Assign",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "sysexOffset": 134,
      "lengthSysex": 4
    },
    "MASTER_DEL_KNOB2_ASGN": {
      "id": "MASTER_DEL_KNOB2_ASGN",
      "byteOffset": 255,
      "byteLength": 2,
      "description": "Dly Knob2 Assign",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "sysexOffset": 138,
      "lengthSysex": 4
    },
    "MASTER_MFXL_KNOB1_ASGN": {
      "id": "MASTER_MFXL_KNOB1_ASGN",
      "byteOffset": 257,
      "byteLength": 2,
      "description": "MFX Knob1 Assign",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "sysexOffset": 142,
      "lengthSysex": 4
    },
    "MASTER_MFX_KNOB2_ASGN": {
      "id": "MASTER_MFX_KNOB2_ASGN",
      "byteOffset": 259,
      "byteLength": 2,
      "description": "MFX Knob2 Assign",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "sysexOffset": 146,
      "lengthSysex": 4
    },
    "RHY_COMP_VALID": {
      "id": "RHY_COMP_VALID",
      "byteOffset": 261,
      "byteLength": 1,
      "description": "Drum Comp Active",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 150,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RHY_COMP_SW": {
      "id": "RHY_COMP_SW",
      "byteOffset": 262,
      "byteLength": 1,
      "description": "Drum Comp Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 151,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RHY_COMP_PART": {
      "id": "RHY_COMP_PART",
      "byteOffset": 263,
      "byteLength": 1,
      "description": "Drum Comp Track",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 152,
      "lengthSysex": 1
    },
    "EXT_PAN": {
      "id": "EXT_PAN",
      "byteOffset": 264,
      "byteLength": 1,
      "description": "External Pan",
      "dataRange": [
        0,
        255
      ],
      "initValue": 128,
      "sysexOffset": 153,
      "lengthSysex": 2,
      "values": {
        "0": "L128 - 127R"
      }
    },
    "PC_PAN": {
      "id": "PC_PAN",
      "byteOffset": 265,
      "byteLength": 1,
      "description": "PC Pan",
      "dataRange": [
        0,
        255
      ],
      "initValue": 128,
      "sysexOffset": 155,
      "lengthSysex": 2,
      "values": {
        "0": "L128 - 127R"
      }
    },
    "PAD_COLOR": {
      "id": "PAD_COLOR",
      "byteOffset": 266,
      "byteLength": 1,
      "description": "PAD Note Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 13,
      "sysexOffset": 157,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "OCT_COLOR": {
      "id": "OCT_COLOR",
      "byteOffset": 267,
      "byteLength": 1,
      "description": "PAD OCT Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 10,
      "sysexOffset": 158,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "CLIP_COLOR_PLAY": {
      "id": "CLIP_COLOR_PLAY",
      "byteOffset": 268,
      "byteLength": 1,
      "description": "Play Clip Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 3,
      "sysexOffset": 159,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "CLIP_COLOR_STAY": {
      "id": "CLIP_COLOR_STAY",
      "byteOffset": 269,
      "byteLength": 1,
      "description": "Stay Clip Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 2,
      "sysexOffset": 160,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "MUTE_PAD_COLOR": {
      "id": "MUTE_PAD_COLOR",
      "byteOffset": 270,
      "byteLength": 1,
      "description": "Mute Pad Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 1,
      "sysexOffset": 161,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "STOP_PAD_COLOR": {
      "id": "STOP_PAD_COLOR",
      "byteOffset": 271,
      "byteLength": 1,
      "description": "Stop Pad Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 3,
      "sysexOffset": 162,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "CHORD_COLOR_1": {
      "id": "CHORD_COLOR_1",
      "byteOffset": 272,
      "byteLength": 1,
      "description": "PAD Chord Color 1",
      "dataRange": [
        1,
        19
      ],
      "initValue": 9,
      "sysexOffset": 163,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "PAD_NOTE_SCALE": {
      "id": "PAD_NOTE_SCALE",
      "byteOffset": 288,
      "byteLength": 1,
      "description": "PAD NOTE SCALE",
      "dataRange": [
        0,
        35
      ],
      "initValue": 0,
      "sysexOffset": 179,
      "lengthSysex": 1,
      "values": {
        "0": "Chromatic",
        "1": "Minor",
        "2": "Major",
        "3": "Dorian",
        "4": "Phrygian",
        "5": "Lydian",
        "6": "Mixolydian",
        "7": "Locrian",
        "8": "Min Penta",
        "9": "Min Blues",
        "10": "Bebop Maj",
        "11": "Harm Min",
        "12": "Melo Min",
        "13": "Maj Penta",
        "14": "Maj Blues",
        "15": "W Harm Maj",
        "16": "Altered",
        "17": "Whole Tone",
        "18": "Dim W-H",
        "19": "Dim H-W",
        "20": "Hngr Min",
        "21": "Ukri D",
        "22": "Spanish 8",
        "23": "Bhairav",
        "24": "Marva",
        "25": "Purvi",
        "26": "Todi",
        "27": "Arabic",
        "28": "Egyptian",
        "29": "Chinese",
        "30": "Pelog",
        "31": "Hirajoshi",
        "32": "Miyako",
        "33": "Ryukyu",
        "34": "Guitar",
        "35": "Violin"
      }
    },
    "STYLE_D_COLOR": {
      "id": "STYLE_D_COLOR",
      "byteOffset": 289,
      "byteLength": 1,
      "description": "Drum Style Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 18,
      "sysexOffset": 180,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "STYLE_M_COLOR": {
      "id": "STYLE_M_COLOR",
      "byteOffset": 290,
      "byteLength": 1,
      "description": "Melodic Style Color",
      "dataRange": [
        1,
        19
      ],
      "initValue": 19,
      "sysexOffset": 181,
      "lengthSysex": 1,
      "values": {
        "0": "ORANGE",
        "1": "YELLOW",
        "2": "GREEN",
        "3": "BLUE",
        "4": "PURPLE",
        "5": "PINK",
        "6": "WHITE",
        "7": "SKYBLUE",
        "8": "P.YELLOW",
        "9": "P.BLUE",
        "10": "P.PINK",
        "11": "L.RED",
        "12": "L.ORANGE",
        "13": "L.YELLOW ",
        "14": "L.GREEN",
        "15": "P.GREEN",
        "16": "L.SKYBLUE",
        "17": "L.BLUE",
        "18": "L.PURPLE"
      }
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 291,
      "byteLength": 78,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PJC2_CHORDSET"] = {
  "name": "PJC2_CHORDSET",
  "description": "CHORDSET",
  "byteLength": 8,
  "sysexLength": 16,
  "parameters": {
    "NOTE_1": {
      "id": "NOTE_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": " 1",
      "dataRange": [
        0,
        255
      ],
      "initValue": 188,
      "lengthSysex": 2,
      "values": {
        "0": "C-1",
        "1": "C#-1",
        "2": "D-1",
        "3": "D#-1",
        "4": "E-1",
        "5": "F-1",
        "6": "F#-1",
        "7": "G-1",
        "8": "G#-1",
        "9": "A-1",
        "10": "A#-1",
        "11": "B-1",
        "12": "C0",
        "13": "C#0",
        "14": "D0",
        "15": "D#0",
        "16": "E0",
        "17": "F0",
        "18": "F#0",
        "19": "G0",
        "20": "G#0",
        "21": "A0",
        "22": "A#0",
        "23": "B0",
        "24": "C1",
        "25": "C#1",
        "26": "D1",
        "27": "D#1",
        "28": "E1",
        "29": "F1",
        "30": "F#1",
        "31": "G1",
        "32": "G#1",
        "33": "A1",
        "34": "A#1",
        "35": "B1",
        "36": "C2",
        "37": "C#2",
        "38": "D2",
        "39": "D#2",
        "40": "E2",
        "41": "F2",
        "42": "F#2",
        "43": "G2",
        "44": "G#2",
        "45": "A2",
        "46": "A#2",
        "47": "B2",
        "48": "C3",
        "49": "C#3",
        "50": "D3",
        "51": "D#3",
        "52": "E3",
        "53": "F3",
        "54": "F#3",
        "55": "G3",
        "56": "G#3",
        "57": "A3",
        "58": "A#3",
        "59": "B3",
        "60": "C4",
        "61": "C#4",
        "62": "D4",
        "63": "D#4",
        "64": "E4",
        "65": "F4",
        "66": "F#4",
        "67": "G4",
        "68": "G#4",
        "69": "A4",
        "70": "A#4",
        "71": "B4",
        "72": "C5",
        "73": "C#5",
        "74": "D5",
        "75": "D#5",
        "76": "E5",
        "77": "F5",
        "78": "F#5",
        "79": "G5",
        "80": "G#5",
        "81": "A5",
        "82": "A#5",
        "83": "B5",
        "84": "C6",
        "85": "C#6",
        "86": "D6",
        "87": "D#6",
        "88": "E6",
        "89": "F6",
        "90": "F#6",
        "91": "G6",
        "92": "G#6",
        "93": "A6",
        "94": "A#6",
        "95": "B6",
        "96": "C7",
        "97": "C#7",
        "98": "D7",
        "99": "D#7",
        "100": "E7",
        "101": "F7",
        "102": "F#7",
        "103": "G7",
        "104": "G#7",
        "105": "A7",
        "106": "A#7",
        "107": "B7",
        "108": "C8",
        "109": "C#8",
        "110": "D8",
        "111": "D#8",
        "112": "E8",
        "113": "F8",
        "114": "F#8",
        "115": "G8",
        "116": "G#8",
        "117": "A8",
        "118": "A#8",
        "119": "B8",
        "120": "C9",
        "121": "C#9",
        "122": "D9",
        "123": "D#9",
        "124": "E9",
        "125": "F9",
        "126": "F#9",
        "127": "G9",
        "128": "OFF",
        "129": "OFF",
        "130": "OFF",
        "131": "OFF",
        "132": "OFF",
        "133": "OFF",
        "134": "OFF",
        "135": "OFF",
        "136": "OFF",
        "137": "OFF",
        "138": "OFF",
        "139": "OFF",
        "140": "OFF",
        "141": "OFF",
        "142": "OFF",
        "143": "OFF",
        "144": "OFF",
        "145": "OFF",
        "146": "OFF",
        "147": "OFF",
        "148": "OFF",
        "149": "OFF",
        "150": "OFF",
        "151": "OFF",
        "152": "OFF",
        "153": "OFF",
        "154": "OFF",
        "155": "OFF",
        "156": "OFF",
        "157": "OFF",
        "158": "OFF",
        "159": "OFF",
        "160": "OFF",
        "161": "OFF",
        "162": "OFF",
        "163": "OFF",
        "164": "OFF",
        "165": "OFF",
        "166": "OFF",
        "167": "OFF",
        "168": "OFF",
        "169": "OFF",
        "170": "OFF",
        "171": "OFF",
        "172": "OFF",
        "173": "OFF",
        "174": "OFF",
        "175": "OFF",
        "176": "OFF",
        "177": "OFF",
        "178": "OFF",
        "179": "OFF",
        "180": "OFF",
        "181": "OFF",
        "182": "OFF",
        "183": "OFF",
        "184": "OFF",
        "185": "OFF",
        "186": "OFF",
        "187": "OFF",
        "188": "OFF",
        "189": "OFF",
        "190": "OFF",
        "191": "OFF",
        "192": "OFF",
        "193": "OFF",
        "194": "OFF",
        "195": "OFF",
        "196": "OFF",
        "197": "OFF",
        "198": "OFF",
        "199": "OFF",
        "200": "OFF",
        "201": "OFF",
        "202": "OFF",
        "203": "OFF",
        "204": "OFF",
        "205": "OFF",
        "206": "OFF",
        "207": "OFF",
        "208": "OFF",
        "209": "OFF",
        "210": "OFF",
        "211": "OFF",
        "212": "OFF",
        "213": "OFF",
        "214": "OFF",
        "215": "OFF",
        "216": "OFF",
        "217": "OFF",
        "218": "OFF",
        "219": "OFF",
        "220": "OFF",
        "221": "OFF",
        "222": "OFF",
        "223": "OFF",
        "224": "OFF",
        "225": "OFF",
        "226": "OFF",
        "227": "OFF",
        "228": "OFF",
        "229": "OFF",
        "230": "OFF",
        "231": "OFF",
        "232": "OFF",
        "233": "OFF",
        "234": "OFF",
        "235": "OFF",
        "236": "OFF",
        "237": "OFF",
        "238": "OFF",
        "239": "OFF",
        "240": "OFF",
        "241": "OFF",
        "242": "OFF",
        "243": "OFF",
        "244": "OFF",
        "245": "OFF",
        "246": "OFF",
        "247": "OFF",
        "248": "OFF",
        "249": "OFF",
        "250": "OFF",
        "251": "OFF",
        "252": "OFF",
        "253": "OFF",
        "254": "OFF",
        "255": "OFF",
        "256": ""
      }
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PJC2"] = {
  "name": "PJC2",
  "description": "",
  "byteLength": 134,
  "sysexLength": 256,
  "parameters": {
    "CHORDSET": {
      "id": "CHORDSET",
      "byteOffset": 0,
      "byteLength": 128,
      "description": "CHORDSET",
      "blockName": "PJC2_CHORDSET",
      "count": 16,
      "blockByteLength": 8,
      "sysexOffset": "00 00 00",
      "lengthSysex": 256,
      "block": ZenProperties["PJC2_CHORDSET"]
    },
    "SAVED_PRDUCT": {
      "id": "SAVED_PRDUCT",
      "byteOffset": 128,
      "byteLength": 1,
      "description": "Saved Product",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 256,
      "lengthSysex": 0,
      "values": {
        "0": "UNKNOWN",
        "1": "MC707",
        "2": "MC101",
        "3": "MV-1"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 129,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SEVED_BUILD": {
      "id": "SEVED_BUILD",
      "byteOffset": 130,
      "byteLength": 2,
      "description": "Saved Build Number",
      "dataRange": [
        0,
        9999
      ],
      "initValue": 0,
      "sysexOffset": 256,
      "lengthSysex": 0
    },
    "RPJ_PRM_REV": {
      "id": "RPJ_PRM_REV",
      "byteOffset": 132,
      "byteLength": 2,
      "description": "Project Paramter Rev",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 20201130,
      "sysexOffset": 256,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PJT"] = {
  "name": "PJT",
  "description": "",
  "byteLength": 256,
  "sysexLength": 56,
  "parameters": {
    "BANK_MSB": {
      "id": "BANK_MSB",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Tone Bank Select MSB (CC#0)",
      "dataRange": [
        0,
        127
      ],
      "initValue": 87,
      "lengthSysex": 1
    },
    "BANK_LSB": {
      "id": "BANK_LSB",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Tone Bank Select LSB (CC#32)",
      "dataRange": [
        0,
        127
      ],
      "initValue": 64,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "PC": {
      "id": "PC",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Tone Program Change (PC)",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "TRACK_TYPE": {
      "id": "TRACK_TYPE",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Track Type",
      "dataRange": [
        -1,
        2
      ],
      "initValue": -1,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "TONE",
        "2": "DRUM",
        "3": "LOOPER"
      }
    },
    "PTACH_SEL": {
      "id": "PTACH_SEL",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Sound Source",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "TRACK",
        "1": "CLIP"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SEQ_RUN": {
      "id": "SEQ_RUN",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Run",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "STOP",
        "1": "RUN"
      }
    },
    "SEQ_TX_MIDI1": {
      "id": "SEQ_TX_MIDI1",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Tx MIDI Out1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SEQ_TX_MIDI2": {
      "id": "SEQ_TX_MIDI2",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Tx MIDI Out2",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SEQ_TX_USBMIDI": {
      "id": "SEQ_TX_USBMIDI",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Tx USB MIDI",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 12,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "MUTE_SW": {
      "id": "MUTE_SW",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Mute Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MUTE"
      }
    },
    "CUE_SW": {
      "id": "CUE_SW",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Cue Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "DUCK_SW": {
      "id": "DUCK_SW",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Duck Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ASGN_SW": {
      "id": "ASGN_SW",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Output Select",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 1,
      "values": {
        "0": "MIX OUT",
        "1": "ASSIGN OUT"
      }
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 20,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SW": {
      "id": "SW",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Part Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_PC_SW": {
      "id": "RX_PC_SW",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Receive Program Change",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_BS_SW": {
      "id": "RX_BS_SW",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "Receive Bank Select",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_PB_SW": {
      "id": "RX_PB_SW",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "Receive Pitch Bend",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_PAF_SW": {
      "id": "RX_PAF_SW",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "Receive Poly Key Pressure",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 17,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_CAF_SW": {
      "id": "RX_CAF_SW",
      "byteOffset": 29,
      "byteLength": 1,
      "description": "Receive Channel Pressure",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 18,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_MOD_SW": {
      "id": "RX_MOD_SW",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "Receive Modulation",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 19,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_CC07_SW": {
      "id": "RX_CC07_SW",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "Receive Volume",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_CC10_SW": {
      "id": "RX_CC10_SW",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Receive Pan",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_CC11_SW": {
      "id": "RX_CC11_SW",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "Receive Expression",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_CC64_SW": {
      "id": "RX_CC64_SW",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Receive Hold-1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING5": {
      "id": "PADDING5",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "LED_COLOR": {
      "id": "LED_COLOR",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "LED Color",
      "dataRange": [
        0,
        19
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "RED",
        "1": "ORANGE",
        "2": "YELLOW",
        "3": "GREEN",
        "4": "BLUE",
        "5": "PURPLE",
        "6": "PINK",
        "7": "WHITE",
        "8": "SKYBLUE",
        "9": "P.YELLOW",
        "10": "P.BLUE",
        "11": "P.PINK",
        "12": "L.RED",
        "13": "L.ORANGE",
        "14": "L.YELLOW ",
        "15": "L.GREEN",
        "16": "P.GREEN",
        "17": "L.SKYBLUE",
        "18": "L.BLUE",
        "19": "L.PURPLE"
      }
    },
    "PADDING6": {
      "id": "PADDING6",
      "byteOffset": 37,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "LOOPER_MIDI_SYNC": {
      "id": "LOOPER_MIDI_SYNC",
      "byteOffset": 40,
      "byteLength": 1,
      "description": "Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LOOPER_SPEED": {
      "id": "LOOPER_SPEED",
      "byteOffset": 41,
      "byteLength": 1,
      "description": "Speed",
      "dataRange": [
        0,
        200
      ],
      "initValue": 100,
      "sysexOffset": 26,
      "lengthSysex": 2,
      "displayMeasurement": "%"
    },
    "LOOPER_LOOP_PLAY": {
      "id": "LOOPER_LOOP_PLAY",
      "byteOffset": 42,
      "byteLength": 1,
      "description": "Loop",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING7": {
      "id": "PADDING7",
      "byteOffset": 43,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SEQ_DRUM_PAD_MUTE_1": {
      "id": "SEQ_DRUM_PAD_MUTE_1",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "Drum Pad Mute 1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LOOPER_MUTE_SW": {
      "id": "LOOPER_MUTE_SW",
      "byteOffset": 60,
      "byteLength": 1,
      "description": "Mute Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 45,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "MUTE"
      }
    },
    "TX_MIDI_NOTE": {
      "id": "TX_MIDI_NOTE",
      "byteOffset": 61,
      "byteLength": 1,
      "description": "Tx MIDI Note",
      "dataRange": [
        1,
        2
      ],
      "initValue": 2,
      "sysexOffset": 46,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TX_MIDI_CC": {
      "id": "TX_MIDI_CC",
      "byteOffset": 62,
      "byteLength": 1,
      "description": "Tx MIDI Control Change",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 47,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TX_MIDI_PC": {
      "id": "TX_MIDI_PC",
      "byteOffset": 63,
      "byteLength": 1,
      "description": "Tx MIDI Program Change",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 48,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 64,
      "byteLength": 1,
      "description": "Track Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 49,
      "lengthSysex": 1
    },
    "PAN": {
      "id": "PAN",
      "byteOffset": 65,
      "byteLength": 1,
      "description": "Pan",
      "dataRange": [
        -128,
        127
      ],
      "initValue": 0,
      "sysexOffset": 50,
      "lengthSysex": 2,
      "values": {
        "0": "L128 - 127R"
      }
    },
    "REV_OFST": {
      "id": "REV_OFST",
      "byteOffset": 66,
      "byteLength": 1,
      "description": "Reverb Send Offset",
      "dataRange": [
        -128,
        127
      ],
      "initValue": 0,
      "sysexOffset": 52,
      "lengthSysex": 2
    },
    "DLY_OFST": {
      "id": "DLY_OFST",
      "byteOffset": 67,
      "byteLength": 1,
      "description": "Delay Send Offset",
      "dataRange": [
        -128,
        127
      ],
      "initValue": 0,
      "sysexOffset": 54,
      "lengthSysex": 2
    },
    "PADDING8": {
      "id": "PADDING8",
      "byteOffset": 68,
      "byteLength": 188,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PTL_AENV"] = {
  "name": "PTL_AENV",
  "description": "Partial TVA Envelope",
  "byteLength": 16,
  "sysexLength": 32,
  "parameters": {
    "T1_VSENS": {
      "id": "T1_VSENS",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "TVA Env Time1 Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "T4_VSENS": {
      "id": "T4_VSENS",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "TVA Env Time4 Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "T1": {
      "id": "T1",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "TVA Env Time1",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 4
    },
    "T2": {
      "id": "T2",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "TVA Env Time2",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 30,
      "sysexOffset": 8,
      "lengthSysex": 4
    },
    "T3": {
      "id": "T3",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "TVA Env Time3",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 400,
      "sysexOffset": 12,
      "lengthSysex": 4
    },
    "T4": {
      "id": "T4",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "TVA Env Time4",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 400,
      "sysexOffset": 16,
      "lengthSysex": 4
    },
    "L1": {
      "id": "L1",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "TVA Env Level1",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 20,
      "lengthSysex": 4
    },
    "L2": {
      "id": "L2",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "TVA Env Level2",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 24,
      "lengthSysex": 4
    },
    "L3": {
      "id": "L3",
      "byteOffset": 14,
      "byteLength": 2,
      "description": "TVA Env Level3",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 28,
      "lengthSysex": 4
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PTL_EQ"] = {
  "name": "PTL_EQ",
  "description": "Partial EQ",
  "byteLength": 16,
  "sysexLength": 27,
  "parameters": {
    "LO_GAIN": {
      "id": "LO_GAIN",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "EQ Low Gain",
      "dataRange": [
        -240,
        240
      ],
      "initValue": 0,
      "lengthSysex": 4,
      "sysexValueOffset": 1024,
      "displayMeasurement": "EQGAIN",
      "displayRange": [
        -24,
        24
      ]
    },
    "MID_GAIN": {
      "id": "MID_GAIN",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "EQ Mid Gain",
      "dataRange": [
        -240,
        240
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 4,
      "sysexValueOffset": 1024,
      "displayMeasurement": "EQGAIN",
      "displayRange": [
        -24,
        24
      ]
    },
    "HI_GAIN": {
      "id": "HI_GAIN",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "EQ High Gain",
      "dataRange": [
        -240,
        240
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 4,
      "sysexValueOffset": 1024,
      "displayMeasurement": "EQGAIN",
      "displayRange": [
        -24,
        24
      ]
    },
    "LO_FREQ": {
      "id": "LO_FREQ",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "EQ Low Frequency",
      "dataRange": [
        20,
        16000
      ],
      "initValue": 200,
      "sysexOffset": 12,
      "lengthSysex": 4,
      "displayMeasurement": "EQFREQ"
    },
    "MID_FREQ": {
      "id": "MID_FREQ",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "EQ Mid Frequency",
      "dataRange": [
        20,
        16000
      ],
      "initValue": 1000,
      "sysexOffset": 16,
      "lengthSysex": 4,
      "displayMeasurement": "EQFREQ"
    },
    "HI_FREQ": {
      "id": "HI_FREQ",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "EQ High Frequency",
      "dataRange": [
        20,
        16000
      ],
      "initValue": 2000,
      "sysexOffset": 20,
      "lengthSysex": 4,
      "displayMeasurement": "EQFREQ"
    },
    "MID_Q": {
      "id": "MID_Q",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "EQ Mid Q",
      "dataRange": [
        5,
        160
      ],
      "initValue": 10,
      "sysexOffset": 24,
      "lengthSysex": 2,
      "displayMeasurement": "EQQ",
      "displayRange": [
        0.5,
        16
      ]
    },
    "SW": {
      "id": "SW",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "EQ Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 14,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PTL_FENV"] = {
  "name": "PTL_FENV",
  "description": "Partial TVF Envelope",
  "byteLength": 24,
  "sysexLength": 44,
  "parameters": {
    "DEPTH": {
      "id": "DEPTH",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "TVF Env Depth",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "VCRV": {
      "id": "VCRV",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "TVF Env Velocity Curve",
      "dataRange": [
        0,
        7
      ],
      "initValue": 1,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "VSENS": {
      "id": "VSENS",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "TVF Env Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "T1_VSENS": {
      "id": "T1_VSENS",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "TVF Env T1 Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "T4_VSENS": {
      "id": "T4_VSENS",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "TVF Env T4 Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "T1": {
      "id": "T1",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "TVF Env Time1",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 4
    },
    "T2": {
      "id": "T2",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "TVF Env Time2",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 4
    },
    "T3": {
      "id": "T3",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "TVF Env Time3",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 4
    },
    "T4": {
      "id": "T4",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "TVF Env Time4",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 4
    },
    "L0": {
      "id": "L0",
      "byteOffset": 14,
      "byteLength": 2,
      "description": "TVF Env Level0",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 4
    },
    "L1": {
      "id": "L1",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "TVF Env Level1",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 28,
      "lengthSysex": 4
    },
    "L2": {
      "id": "L2",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "TVF Env Level2",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 32,
      "lengthSysex": 4
    },
    "L3": {
      "id": "L3",
      "byteOffset": 20,
      "byteLength": 2,
      "description": "TVF Env Level3",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 1023,
      "sysexOffset": 36,
      "lengthSysex": 4
    },
    "L4": {
      "id": "L4",
      "byteOffset": 22,
      "byteLength": 2,
      "description": "TVF Env Level4",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 40,
      "lengthSysex": 4
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PTL_LFO_LFO"] = {
  "name": "PTL_LFO_LFO",
  "description": "LFO",
  "byteLength": 52,
  "sysexLength": 79,
  "parameters": {
    "FORM": {
      "id": "FORM",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Waveform",
      "dataRange": [
        0,
        10
      ],
      "initValue": 1,
      "lengthSysex": 1,
      "values": {
        "0": "SIN",
        "1": "TRI",
        "2": "SAW-UP",
        "3": "SAW-DW",
        "4": "SQR",
        "5": "RND",
        "6": "TRP",
        "7": "S&H",
        "8": "CHS",
        "9": "VSIN",
        "10": "STEP"
      }
    },
    "RATE_SYNC": {
      "id": "RATE_SYNC",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Rate Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RATE_NOTE": {
      "id": "RATE_NOTE",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Rate (note)",
      "dataRange": [
        0,
        22
      ],
      "initValue": 12,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "values": {
        "0": "1/64T",
        "1": "1/64",
        "2": "1/32T",
        "3": "1/32",
        "4": "1/16T",
        "5": "1/32.",
        "6": "1/16",
        "7": "1/8T",
        "8": "1/16.",
        "9": "1/8",
        "10": "1/4T",
        "11": "1/8.",
        "12": "1/4",
        "13": "1/2T",
        "14": "1/4.",
        "15": "1/2",
        "16": "1T",
        "17": "1/2.",
        "18": "1",
        "19": "2T",
        "20": "1.",
        "21": "2",
        "22": "4"
      }
    },
    "STEP_MAX": {
      "id": "STEP_MAX",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Step Size",
      "dataRange": [
        0,
        15
      ],
      "initValue": 15,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "displayRange": [
        1,
        16
      ]
    },
    "RATE": {
      "id": "RATE",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Rate",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 650,
      "sysexOffset": 4,
      "lengthSysex": 4
    },
    "OFST": {
      "id": "OFST",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Offset",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "RATE_DETN": {
      "id": "RATE_DETN",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Rate Detune",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1
    },
    "DELAY": {
      "id": "DELAY",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "Delay Time",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 4
    },
    "DELAY_KF": {
      "id": "DELAY_KF",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Delay Time Keyfolow",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "FADE_MODE": {
      "id": "FADE_MODE",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Fade Mode",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 1,
      "values": {
        "0": "ON-IN",
        "1": "ON-OUT",
        "2": "OFF-IN",
        "3": "OFF-OUT"
      }
    },
    "FADE": {
      "id": "FADE",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "Fade Time",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 4
    },
    "KEY_TRIG": {
      "id": "KEY_TRIG",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "Key Trigger",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PIT_DEPTH": {
      "id": "PIT_DEPTH",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "Pitch Depth",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "TVF_DEPTH": {
      "id": "TVF_DEPTH",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "TVF Depth",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "TVA_DEPTH": {
      "id": "TVA_DEPTH",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "TVA Depth",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "PAN_DEPTH": {
      "id": "PAN_DEPTH",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "PAN Depth",
      "dataRange": [
        -63,
        63
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "sysexValueOffset": 64
    },
    "PHASE_POS": {
      "id": "PHASE_POS",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Phase Position",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 1
    },
    "STEP_1": {
      "id": "STEP_1",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Step 1",
      "dataRange": [
        -72,
        72
      ],
      "initValue": 0,
      "sysexOffset": 31,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "STEP_CURVE_1": {
      "id": "STEP_CURVE_1",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "Step Curve 1",
      "dataRange": [
        0,
        36
      ],
      "initValue": 1,
      "sysexOffset": 63,
      "lengthSysex": 1
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PTL_LFO"] = {
  "name": "PTL_LFO",
  "description": "Partial LFO",
  "byteLength": 104,
  "sysexLength": 158,
  "parameters": {
    "LFO": {
      "id": "LFO",
      "byteOffset": 0,
      "byteLength": 104,
      "description": "LFO",
      "blockName": "PTL_LFO_LFO",
      "count": 2,
      "blockByteLength": 52,
      "sysexOffset": "00 00 00",
      "lengthSysex": 158,
      "block": ZenProperties["PTL_LFO_LFO"]
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PTL_PENV"] = {
  "name": "PTL_PENV",
  "description": "Partial Pitch Envelope",
  "byteLength": 24,
  "sysexLength": 45,
  "parameters": {
    "DEPTH": {
      "id": "DEPTH",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Pitch Env Depth",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "VSENS": {
      "id": "VSENS",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Pitch Env Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "T1_VSENS": {
      "id": "T1_VSENS",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Pitch Env T1 Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "T4_VSENS": {
      "id": "T4_VSENS",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Pitch Env T4 Velocity Sens",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 2,
      "sysexValueOffset": 128
    },
    "T1": {
      "id": "T1",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Pitch Env Time1",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 4
    },
    "T2": {
      "id": "T2",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "Pitch Env Time2",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 4
    },
    "T3": {
      "id": "T3",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "Pitch Env Time3",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 4
    },
    "T4": {
      "id": "T4",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "Pitch Env Time4",
      "dataRange": [
        0,
        1023
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 4
    },
    "L0": {
      "id": "L0",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "Pitch Env Level0",
      "dataRange": [
        -511,
        511
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "L1": {
      "id": "L1",
      "byteOffset": 14,
      "byteLength": 2,
      "description": "Pitch Env Level1",
      "dataRange": [
        -511,
        511
      ],
      "initValue": 240,
      "sysexOffset": 28,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "L2": {
      "id": "L2",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "Pitch Env Level2",
      "dataRange": [
        -511,
        511
      ],
      "initValue": 240,
      "sysexOffset": 32,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "L3": {
      "id": "L3",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "Pitch Env Level3",
      "dataRange": [
        -511,
        511
      ],
      "initValue": 240,
      "sysexOffset": 36,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "L4": {
      "id": "L4",
      "byteOffset": 20,
      "byteLength": 2,
      "description": "Pitch Env Level4",
      "dataRange": [
        -511,
        511
      ],
      "initValue": 0,
      "sysexOffset": 40,
      "lengthSysex": 4,
      "sysexValueOffset": 1024
    },
    "VCRV": {
      "id": "VCRV",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Pitch Env Velocity Curve",
      "dataRange": [
        0,
        7
      ],
      "initValue": 1,
      "sysexOffset": 44,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["RCMP"] = {
  "name": "RCMP",
  "description": "",
  "byteLength": 8,
  "sysexLength": 8,
  "parameters": {
    "SW": {
      "id": "SW",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Comp Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ATTCK": {
      "id": "ATTCK",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Comp Attack Time",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "values": {
        "0": "0.1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100"
      }
    },
    "RELEASE": {
      "id": "RELEASE",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Comp Release Time",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "displayRange": [
        10,
        1000
      ]
    },
    "THRESHOLD": {
      "id": "THRESHOLD",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Comp Threshold",
      "dataRange": [
        -60,
        0
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "RATIO": {
      "id": "RATIO",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Comp Ratio",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "1:1",
        "1": "2:1",
        "2": "3:1",
        "3": "4:1",
        "4": "8:1",
        "5": "16:1",
        "6": "32:1",
        "7": "INF:1"
      }
    },
    "KNEE": {
      "id": "KNEE",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Comp Knee",
      "dataRange": [
        0,
        30
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "POSTGAIN": {
      "id": "POSTGAIN",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Comp Output Gain",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB",
      "displayRange": [
        -24,
        24
      ]
    },
    "OUT_ASGN": {
      "id": "OUT_ASGN",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Comp Output Assign",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "DRY",
        "1": "MFX"
      }
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SC"] = {
  "name": "SC",
  "description": "",
  "byteLength": 256,
  "sysexLength": 70,
  "parameters": {
    "KNOB_CATCH": {
      "id": "KNOB_CATCH",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Knob Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "DIRECT",
        "1": "CATCH"
      }
    },
    "PAD_CURV": {
      "id": "PAD_CURV",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Pad Curve Type",
      "dataRange": [
        0,
        15
      ],
      "initValue": 2,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "LINEAR",
        "1": "EXP",
        "2": "LOG",
        "3": "FIX10",
        "4": "FIX20",
        "5": "FIX30",
        "6": "FIX40",
        "7": "FIX50",
        "8": "FIX60",
        "9": "FIX70",
        "10": "FIX80",
        "11": "FIX90",
        "12": "FIX100",
        "13": "FIX110",
        "14": "FIX120",
        "15": "FIX127"
      }
    },
    "PAD_THRESHOLD": {
      "id": "PAD_THRESHOLD",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Pad Threshold",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "PAD_WEAKINPUT": {
      "id": "PAD_WEAKINPUT",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Weak Beat Input Way",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "MIDI_SYNC": {
      "id": "MIDI_SYNC",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "MIDI Sync",
      "dataRange": [
        0,
        3
      ],
      "initValue": 1,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "AUTO",
        "1": "INT",
        "2": "MIDI",
        "3": "USB"
      }
    },
    "MIDI_SYNC_OUT1": {
      "id": "MIDI_SYNC_OUT1",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "MIDI Sync Out1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_SYNC_OUT2": {
      "id": "MIDI_SYNC_OUT2",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "MIDI Sync Out2",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_SYNC_OUT_USB": {
      "id": "MIDI_SYNC_OUT_USB",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "MIDI Sync Out USB",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_RX_STARTSTOP": {
      "id": "MIDI_RX_STARTSTOP",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "RX Start Stop",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_RX_STARTSTOP_USB": {
      "id": "MIDI_RX_STARTSTOP_USB",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "RX Start Stop USB",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "MIDI_CTRL_CH": {
      "id": "MIDI_CTRL_CH",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Control Channel",
      "dataRange": [
        1,
        16
      ],
      "initValue": 16,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "values": {
        "0": "CH1",
        "1": "CH2",
        "2": "CH3",
        "3": "CH4",
        "4": "CH5",
        "5": "CH6",
        "6": "CH7",
        "7": "CH8",
        "8": "CH9",
        "9": "CH10",
        "10": "CH11",
        "11": "CH12",
        "12": "CH13",
        "13": "CH14",
        "14": "CH15",
        "15": "CH16"
      }
    },
    "MIDI_TRK_CH_1": {
      "id": "MIDI_TRK_CH_1",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Track Channel 1",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "CH1",
        "1": "CH2",
        "2": "CH3",
        "3": "CH4",
        "4": "CH5",
        "5": "CH6",
        "6": "CH7",
        "7": "CH8",
        "8": "CH9",
        "9": "CH10",
        "10": "CH11",
        "11": "CH12",
        "12": "CH13",
        "13": "CH14",
        "14": "CH15",
        "15": "CH16"
      }
    },
    "PAD_TRIG_SENS": {
      "id": "PAD_TRIG_SENS",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Pad Trigger Sensitivity",
      "dataRange": [
        10,
        200
      ],
      "initValue": 35,
      "sysexOffset": 19,
      "lengthSysex": 2
    },
    "PAD_GAIN": {
      "id": "PAD_GAIN",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Pad Gain",
      "dataRange": [
        0,
        100
      ],
      "initValue": 50,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "MIDI_CTRL_TX_OUT1": {
      "id": "MIDI_CTRL_TX_OUT1",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Control Tx MIDI OUT1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_CTRL_TX_OUT2": {
      "id": "MIDI_CTRL_TX_OUT2",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Control Tx MIDI OUT2",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_CTRL_TX_USB": {
      "id": "MIDI_CTRL_TX_USB",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Control Tx USB MIDI",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_CTRL_RX": {
      "id": "MIDI_CTRL_RX",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Control Rx",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "USB_DRIVER": {
      "id": "USB_DRIVER",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "USB Driver",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "GENERIC",
        "1": "VENDOR"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 27,
      "byteLength": 89,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SYS_CTRL_SRC_1": {
      "id": "SYS_CTRL_SRC_1",
      "byteOffset": 116,
      "byteLength": 1,
      "description": "System Control Source(011)",
      "dataRange": [
        0,
        96
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "CC01",
        "2": "CC02",
        "3": "CC03",
        "4": "CC04",
        "5": "CC05",
        "6": "CC06",
        "7": "CC07",
        "8": "CC08",
        "9": "CC09",
        "10": "CC10",
        "11": "CC11",
        "12": "CC12",
        "13": "CC13",
        "14": "CC14",
        "15": "CC15",
        "16": "CC16",
        "17": "CC17",
        "18": "CC18",
        "19": "CC19",
        "20": "CC20",
        "21": "CC21",
        "22": "CC22",
        "23": "CC23",
        "24": "CC24",
        "25": "CC25",
        "26": "CC26",
        "27": "CC27",
        "28": "CC28",
        "29": "CC29",
        "30": "CC30",
        "31": "CC31",
        "32": "CC33",
        "33": "CC34",
        "34": "CC35",
        "35": "CC36",
        "36": "CC37",
        "37": "CC38",
        "38": "CC39",
        "39": "CC40",
        "40": "CC41",
        "41": "CC42",
        "42": "CC43",
        "43": "CC44",
        "44": "CC45",
        "45": "CC46",
        "46": "CC47",
        "47": "CC48",
        "48": "CC49",
        "49": "CC50",
        "50": "CC51",
        "51": "CC52",
        "52": "CC53",
        "53": "CC54",
        "54": "CC55",
        "55": "CC56",
        "56": "CC57",
        "57": "CC58",
        "58": "CC59",
        "59": "CC60",
        "60": "CC61",
        "61": "CC62",
        "62": "CC63",
        "63": "CC64",
        "64": "CC65",
        "65": "CC66",
        "66": "CC67",
        "67": "CC68",
        "68": "CC69",
        "69": "CC70",
        "70": "CC71",
        "71": "CC72",
        "72": "CC73",
        "73": "CC74",
        "74": "CC75",
        "75": "CC76",
        "76": "CC77",
        "77": "CC78",
        "78": "CC79",
        "79": "CC80",
        "80": "CC81",
        "81": "CC82",
        "82": "CC83",
        "83": "CC84",
        "84": "CC85",
        "85": "CC86",
        "86": "CC87",
        "87": "CC88",
        "88": "CC89",
        "89": "CC90",
        "90": "CC91",
        "91": "CC92",
        "92": "CC93",
        "93": "CC94",
        "94": "CC95",
        "95": "BEND",
        "96": "AFT"
      }
    },
    "LCD_CNT": {
      "id": "LCD_CNT",
      "byteOffset": 120,
      "byteLength": 1,
      "description": "LCD Contrast",
      "dataRange": [
        1,
        10
      ],
      "initValue": 5,
      "sysexOffset": 31,
      "lengthSysex": 1
    },
    "LCD_BRT": {
      "id": "LCD_BRT",
      "byteOffset": 121,
      "byteLength": 1,
      "description": "LCD Backlight",
      "dataRange": [
        1,
        10
      ],
      "initValue": 5,
      "sysexOffset": 32,
      "lengthSysex": 1
    },
    "LED_BRIGHT": {
      "id": "LED_BRIGHT",
      "byteOffset": 122,
      "byteLength": 1,
      "description": "LED Brightness",
      "dataRange": [
        1,
        10
      ],
      "initValue": 8,
      "sysexOffset": 33,
      "lengthSysex": 1
    },
    "LED_GLOW": {
      "id": "LED_GLOW",
      "byteOffset": 123,
      "byteLength": 1,
      "description": "LED Glow",
      "dataRange": [
        1,
        10
      ],
      "initValue": 3,
      "sysexOffset": 34,
      "lengthSysex": 1
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 124,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "AUTO_OFF": {
      "id": "AUTO_OFF",
      "byteOffset": 125,
      "byteLength": 1,
      "description": "Auto Poweroff",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 35,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "30",
        "2": "240"
      }
    },
    "DEMO_WAITTIME": {
      "id": "DEMO_WAITTIME",
      "byteOffset": 126,
      "byteLength": 1,
      "description": "DEMO Mode",
      "dataRange": [
        0,
        10
      ],
      "initValue": 5,
      "sysexOffset": 36,
      "lengthSysex": 1,
      "displayMeasurement": "min",
      "values": {
        "0": "OFF",
        "1": "1 - 10"
      }
    },
    "BACKLIGHT_TIMER": {
      "id": "BACKLIGHT_TIMER",
      "byteOffset": 127,
      "byteLength": 1,
      "description": "LCD Backlight Timer",
      "dataRange": [
        0,
        10
      ],
      "initValue": 0,
      "sysexOffset": 37,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "2sec",
        "2": "5sec",
        "3": "10sec",
        "4": "20sec"
      }
    },
    "OUT_GAIN": {
      "id": "OUT_GAIN",
      "byteOffset": 128,
      "byteLength": 1,
      "description": "Output Gain",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 38,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "APLAY_LVL": {
      "id": "APLAY_LVL",
      "byteOffset": 129,
      "byteLength": 1,
      "description": "Audio Player Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 39,
      "lengthSysex": 1
    },
    "USB_MIX_SEL": {
      "id": "USB_MIX_SEL",
      "byteOffset": 130,
      "byteLength": 1,
      "description": "USB Mix Select",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 40,
      "lengthSysex": 1,
      "values": {
        "0": "PRE T-FX",
        "1": "POST T-FX"
      }
    },
    "CUE_SEL": {
      "id": "CUE_SEL",
      "byteOffset": 131,
      "byteLength": 1,
      "description": "Output Cue to Mix Out",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 41,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "DEV_ID": {
      "id": "DEV_ID",
      "byteOffset": 132,
      "byteLength": 1,
      "description": "Device ID",
      "dataRange": [
        17,
        32
      ],
      "initValue": 17,
      "sysexOffset": 42,
      "lengthSysex": 1
    },
    "SOFT_THRU": {
      "id": "SOFT_THRU",
      "byteOffset": 133,
      "byteLength": 1,
      "description": "Soft Through 1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 43,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SOFT_THRU2": {
      "id": "SOFT_THRU2",
      "byteOffset": 134,
      "byteLength": 1,
      "description": "Soft Through 2",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 44,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "USB_MIDI_THRU": {
      "id": "USB_MIDI_THRU",
      "byteOffset": 135,
      "byteLength": 1,
      "description": "USB-MIDI Thru 1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 45,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "USB_MIDI_THRU2": {
      "id": "USB_MIDI_THRU2",
      "byteOffset": 136,
      "byteLength": 1,
      "description": "USB-MIDI Thru 2",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 46,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_STEPREC": {
      "id": "MIDI_STEPREC",
      "byteOffset": 137,
      "byteLength": 1,
      "description": "Edit Note",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 47,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 138,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "RX_PC": {
      "id": "RX_PC",
      "byteOffset": 140,
      "byteLength": 1,
      "description": "Receive Program Change",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 48,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_BS": {
      "id": "RX_BS",
      "byteOffset": 141,
      "byteLength": 1,
      "description": "Receive Bank Select",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 49,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "RX_EXC": {
      "id": "RX_EXC",
      "byteOffset": 142,
      "byteLength": 1,
      "description": "Receive Exclusive",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 50,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TX_EDIT": {
      "id": "TX_EDIT",
      "byteOffset": 143,
      "byteLength": 1,
      "description": "Transmit Edit Data",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 51,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR_REC_VELO": {
      "id": "TR_REC_VELO",
      "byteOffset": 144,
      "byteLength": 1,
      "description": "TR Rec Default Velocity",
      "dataRange": [
        1,
        127
      ],
      "initValue": 100,
      "sysexOffset": 52,
      "lengthSysex": 1
    },
    "TONE_EDIT_KNOB_MODE": {
      "id": "TONE_EDIT_KNOB_MODE",
      "byteOffset": 145,
      "byteLength": 1,
      "description": "Tone Edit Knob Mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 53,
      "lengthSysex": 1,
      "values": {
        "0": "EASY",
        "1": "PARTIAL"
      }
    },
    "LOAD_PROJ": {
      "id": "LOAD_PROJ",
      "byteOffset": 146,
      "byteLength": 1,
      "description": "Load Project",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 54,
      "lengthSysex": 1,
      "values": {
        "0": "LAST",
        "1": "INIT"
      }
    },
    "REC_QUANTIZE": {
      "id": "REC_QUANTIZE",
      "byteOffset": 147,
      "byteLength": 1,
      "description": "Rec Quantize",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 55,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "METRO_TYPE": {
      "id": "METRO_TYPE",
      "byteOffset": 148,
      "byteLength": 1,
      "description": "Metronome Type",
      "dataRange": [
        0,
        8
      ],
      "initValue": 3,
      "sysexOffset": 56,
      "lengthSysex": 1,
      "values": {
        "0": "TYPE1",
        "1": "TYPE2",
        "2": "TYPE3",
        "3": "TYPE4",
        "4": "TYPE5",
        "5": "TYPE6",
        "6": "TYPE7",
        "7": "TYPE8",
        "8": "TYPE9"
      }
    },
    "METRO_LEV": {
      "id": "METRO_LEV",
      "byteOffset": 149,
      "byteLength": 1,
      "description": "Metronome Level",
      "dataRange": [
        1,
        127
      ],
      "initValue": 60,
      "sysexOffset": 57,
      "lengthSysex": 1
    },
    "SEQ_REC_TIMING": {
      "id": "SEQ_REC_TIMING",
      "byteOffset": 150,
      "byteLength": 1,
      "description": "Rec Timing",
      "dataRange": [
        -20,
        30
      ],
      "initValue": 0,
      "sysexOffset": 58,
      "lengthSysex": 1,
      "values": {
        "0": "50:50",
        "1": "49:51",
        "2": "48:52",
        "3": "47:53",
        "4": "46:54",
        "5": "45:55",
        "6": "44:56",
        "7": "43:57",
        "8": "42:58",
        "9": "41:59",
        "10": "40:60",
        "11": "39:61",
        "12": "38:62",
        "13": "37:63",
        "14": "36:64",
        "15": "35:65",
        "16": "34:66",
        "17": "33:67",
        "18": "32:68",
        "19": "31:69",
        "20": "30:70",
        "21": "29:71",
        "22": "28:72",
        "23": "27:73",
        "24": "26:74",
        "25": "25:75",
        "26": "24:76",
        "27": "23:77",
        "28": "22:78",
        "29": "21:79",
        "30": "20:80",
        "31": "19:81",
        "32": "18:82",
        "33": "17:83",
        "34": "16:84",
        "35": "15:85",
        "36": "14:86",
        "37": "13:87",
        "38": "12:88",
        "39": "11:89",
        "40": "10:90",
        "41": "9:91",
        "42": "8:92",
        "43": "7:93",
        "44": "6:94",
        "45": "5:95",
        "46": "4:96",
        "47": "3:97",
        "48": "2:98",
        "49": "1:99",
        "50": "0:100"
      }
    },
    "REC_TRIGGER": {
      "id": "REC_TRIGGER",
      "byteOffset": 151,
      "byteLength": 1,
      "description": "Rec Trigger",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "sysexOffset": 59,
      "lengthSysex": 1,
      "values": {
        "0": "ENTER",
        "1": "CLOCK",
        "2": "-24dB",
        "3": "-12dB",
        "4": "-6dB"
      }
    },
    "METRO_OUT_SEL": {
      "id": "METRO_OUT_SEL",
      "byteOffset": 152,
      "byteLength": 1,
      "description": "Metronome Position",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 60,
      "lengthSysex": 1,
      "values": {
        "0": "MIXOUT",
        "1": "PHONES",
        "2": "ASSIGN OUT",
        "3": "PRE T-FX"
      }
    },
    "WAV_AUTO_PREVIEW": {
      "id": "WAV_AUTO_PREVIEW",
      "byteOffset": 153,
      "byteLength": 1,
      "description": "Wav Auto Preview Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 61,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIDI_RX_AUTO_CH": {
      "id": "MIDI_RX_AUTO_CH",
      "byteOffset": 154,
      "byteLength": 1,
      "description": "MIDI Rx Auto Channel",
      "dataRange": [
        0,
        16
      ],
      "initValue": 0,
      "sysexOffset": 62,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "CH1",
        "2": "CH2",
        "3": "CH3",
        "4": "CH4",
        "5": "CH5",
        "6": "CH6",
        "7": "CH7",
        "8": "CH8",
        "9": "CH9",
        "10": "CH10",
        "11": "CH11",
        "12": "CH12",
        "13": "CH13",
        "14": "CH14",
        "15": "CH15",
        "16": "CH16"
      }
    },
    "REC_TRIGGER_CLOCK_COUNT_IN": {
      "id": "REC_TRIGGER_CLOCK_COUNT_IN",
      "byteOffset": 155,
      "byteLength": 1,
      "description": "Rec Trigger Count In Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 63,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING5": {
      "id": "PADDING5",
      "byteOffset": 156,
      "byteLength": 40,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "MIC_PHANTOM": {
      "id": "MIC_PHANTOM",
      "byteOffset": 196,
      "byteLength": 1,
      "description": "Phantom Power Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 64,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "EXT_SEL": {
      "id": "EXT_SEL",
      "byteOffset": 197,
      "byteLength": 1,
      "description": "External Input",
      "dataRange": [
        0,
        2
      ],
      "initValue": 1,
      "sysexOffset": 65,
      "lengthSysex": 1,
      "values": {
        "0": "OFF(LINE)",
        "1": "BUILT-IN",
        "2": "EXTERNAL"
      }
    },
    "COUNT_IN_SW": {
      "id": "COUNT_IN_SW",
      "byteOffset": 198,
      "byteLength": 1,
      "description": "Count-in",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 66,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LINE_GAIN": {
      "id": "LINE_GAIN",
      "byteOffset": 199,
      "byteLength": 1,
      "description": "Line Gain",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 67,
      "lengthSysex": 1,
      "values": {
        "0": "0dB",
        "1": "+6dB",
        "2": "+12dB"
      }
    },
    "EXT_CHO_SEND": {
      "id": "EXT_CHO_SEND",
      "byteOffset": 200,
      "byteLength": 1,
      "description": "EXT Delay Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 68,
      "lengthSysex": 1
    },
    "EXT_REV_SEND": {
      "id": "EXT_REV_SEND",
      "byteOffset": 201,
      "byteLength": 1,
      "description": "EXT Reverb Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 30,
      "sysexOffset": 69,
      "lengthSysex": 1
    },
    "PADDING6": {
      "id": "PADDING6",
      "byteOffset": 202,
      "byteLength": 54,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SCMP"] = {
  "name": "SCMP",
  "description": "",
  "byteLength": 24,
  "sysexLength": 24,
  "parameters": {
    "SW": {
      "id": "SW",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "LO_ATTACK": {
      "id": "LO_ATTACK",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Low Attack Time",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "values": {
        "0": "0.1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100"
      }
    },
    "LO_RELEASE": {
      "id": "LO_RELEASE",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Low Release Time",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "displayRange": [
        10,
        1000
      ]
    },
    "LO_THRES": {
      "id": "LO_THRES",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Low Threshold",
      "dataRange": [
        -60,
        0
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "LO_RATIO": {
      "id": "LO_RATIO",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Low Ratio",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "1:1",
        "1": "2:1",
        "2": "3:1",
        "3": "4:1",
        "4": "8:1",
        "5": "16:1",
        "6": "32:1",
        "7": "INF:1"
      }
    },
    "LO_KNEE": {
      "id": "LO_KNEE",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Low Knee",
      "dataRange": [
        0,
        30
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "LO_GAIN": {
      "id": "LO_GAIN",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Low Output Gain",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB",
      "displayRange": [
        -24,
        24
      ]
    },
    "MI_ATTACK": {
      "id": "MI_ATTACK",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Mid Attack Time",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "values": {
        "0": "0.1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100"
      }
    },
    "MI_RELEASE": {
      "id": "MI_RELEASE",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Mid Release Time",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "displayRange": [
        10,
        1000
      ]
    },
    "MI_THRES": {
      "id": "MI_THRES",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Mid Threshold",
      "dataRange": [
        -60,
        0
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "MI_RATIO": {
      "id": "MI_RATIO",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Mid Ratio",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "values": {
        "0": "1:1",
        "1": "2:1",
        "2": "3:1",
        "3": "4:1",
        "4": "8:1",
        "5": "16:1",
        "6": "32:1",
        "7": "INF:1"
      }
    },
    "MI_KNEE": {
      "id": "MI_KNEE",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Mid Knee",
      "dataRange": [
        0,
        30
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "MI_GAIN": {
      "id": "MI_GAIN",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Mid Output Gain",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB",
      "displayRange": [
        -24,
        24
      ]
    },
    "HI_ATTACK": {
      "id": "HI_ATTACK",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "High Attack Time",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "values": {
        "0": "0.1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100"
      }
    },
    "HI_RELEASE": {
      "id": "HI_RELEASE",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "High Release Time",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "displayRange": [
        10,
        1000
      ]
    },
    "HI_THRES": {
      "id": "HI_THRES",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "High Threshold",
      "dataRange": [
        -60,
        0
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "HI_RATIO": {
      "id": "HI_RATIO",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "High Ratio",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "values": {
        "0": "1:1",
        "1": "2:1",
        "2": "3:1",
        "3": "4:1",
        "4": "8:1",
        "5": "16:1",
        "6": "32:1",
        "7": "INF:1"
      }
    },
    "HI_KNEE": {
      "id": "HI_KNEE",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "High Knee",
      "dataRange": [
        0,
        30
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "HI_GAIN": {
      "id": "HI_GAIN",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "High Output Gain",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB",
      "displayRange": [
        -24,
        24
      ]
    },
    "LO_SPLIT_FREQ": {
      "id": "LO_SPLIT_FREQ",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Split Freq Low",
      "dataRange": [
        0,
        30
      ],
      "initValue": 10,
      "sysexOffset": 19,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "16",
        "1": "20",
        "2": "25",
        "3": "31",
        "4": "40",
        "5": "50",
        "6": "63",
        "7": "80",
        "8": "100",
        "9": "125",
        "10": "160",
        "11": "200",
        "12": "250",
        "13": "315",
        "14": "400",
        "15": "500",
        "16": "630",
        "17": "800",
        "18": "1000",
        "19": "1250",
        "20": "1600",
        "21": "2000",
        "22": "2500",
        "23": "3150",
        "24": "4000",
        "25": "5000",
        "26": "6300",
        "27": "8000",
        "28": "10000",
        "29": "12500",
        "30": "16000"
      }
    },
    "HI_SPLIT_FREQ": {
      "id": "HI_SPLIT_FREQ",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Split Freq High",
      "dataRange": [
        0,
        30
      ],
      "initValue": 24,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "16",
        "1": "20",
        "2": "25",
        "3": "31",
        "4": "40",
        "5": "50",
        "6": "63",
        "7": "80",
        "8": "100",
        "9": "125",
        "10": "160",
        "11": "200",
        "12": "250",
        "13": "315",
        "14": "400",
        "15": "500",
        "16": "630",
        "17": "800",
        "18": "1000",
        "19": "1250",
        "20": "1600",
        "21": "2000",
        "22": "2500",
        "23": "3150",
        "24": "4000",
        "25": "5000",
        "26": "6300",
        "27": "8000",
        "28": "10000",
        "29": "12500",
        "30": "16000"
      }
    },
    "LO_RELEASE_SYNC": {
      "id": "LO_RELEASE_SYNC",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Low Release Sync",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1/16",
        "2": "1/8T",
        "3": "1/16.",
        "4": "1/8",
        "5": "1/4T",
        "6": "1/8.",
        "7": "1/4"
      }
    },
    "MI_RELEASE_SYNC": {
      "id": "MI_RELEASE_SYNC",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Mid Release Sync",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1/16",
        "2": "1/8T",
        "3": "1/16.",
        "4": "1/8",
        "5": "1/4T",
        "6": "1/8.",
        "7": "1/4"
      }
    },
    "HI_RELEASE_SYNC": {
      "id": "HI_RELEASE_SYNC",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "High Release Sync",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1/16",
        "2": "1/8T",
        "3": "1/16.",
        "4": "1/8",
        "5": "1/4T",
        "6": "1/8.",
        "7": "1/4"
      }
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SCT"] = {
  "name": "SCT",
  "description": "",
  "byteLength": 64,
  "sysexLength": 26,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Section Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1
    },
    "LENGTH": {
      "id": "LENGTH",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Section Length",
      "dataRange": [
        1,
        16
      ],
      "initValue": 8,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "COLOR": {
      "id": "COLOR",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "LED Color",
      "dataRange": [
        0,
        19
      ],
      "initValue": 6,
      "sysexOffset": 17,
      "lengthSysex": 1,
      "values": {
        "0": "RED",
        "1": "ORANGE",
        "2": "YELLOW",
        "3": "GREEN",
        "4": "BLUE",
        "5": "PURPLE",
        "6": "PINK",
        "7": "WHITE",
        "8": "SKYBLUE",
        "9": "P.YELLOW",
        "10": "P.BLUE",
        "11": "P.PINK",
        "12": "L.RED",
        "13": "L.ORANGE",
        "14": "L.YELLOW ",
        "15": "L.GREEN",
        "16": "P.GREEN",
        "17": "L.SKYBLUE",
        "18": "L.BLUE",
        "19": "L.PURPLE"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "CLIP_1": {
      "id": "CLIP_1",
      "byteOffset": 20,
      "byteLength": 1,
      "description": " 1",
      "dataRange": [
        -1,
        15
      ],
      "initValue": -1,
      "sysexOffset": 18,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "1 - 16"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 28,
      "byteLength": 36,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SEQ"] = {
  "name": "SEQ",
  "description": "",
  "byteLength": 16,
  "sysexLength": 15,
  "parameters": {
    "IN_GAIN": {
      "id": "IN_GAIN",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "EQ Input Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "LO_GAIN": {
      "id": "LO_GAIN",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "EQ Low Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "MID1_GAIN": {
      "id": "MID1_GAIN",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "EQ Mid1 Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "MID2_GAIN": {
      "id": "MID2_GAIN",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "EQ Mid2 Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "MID3_GAIN": {
      "id": "MID3_GAIN",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "EQ Mid3 Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "HI_GAIN": {
      "id": "HI_GAIN",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "EQ High Gain",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "LO_FREQ": {
      "id": "LO_FREQ",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "EQ Low Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 10,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "MID1_FREQ": {
      "id": "MID1_FREQ",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "EQ Mid1 Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 17,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "MID2_FREQ": {
      "id": "MID2_FREQ",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "EQ Mid2 Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 17,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "MID3_FREQ": {
      "id": "MID3_FREQ",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "EQ Mid3 Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 17,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "HI_FREQ": {
      "id": "HI_FREQ",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "EQ High Frequency",
      "dataRange": [
        0,
        29
      ],
      "initValue": 20,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "displayMeasurement": "Hz",
      "values": {
        "0": "20",
        "1": "25",
        "2": "31",
        "3": "40",
        "4": "50",
        "5": "63",
        "6": "80",
        "7": "100",
        "8": "125",
        "9": "160",
        "10": "200",
        "11": "250",
        "12": "315",
        "13": "400",
        "14": "500",
        "15": "630",
        "16": "800",
        "17": "1000",
        "18": "1250",
        "19": "1600",
        "20": "2000",
        "21": "2500",
        "22": "3150",
        "23": "4000",
        "24": "5000",
        "25": "6300",
        "26": "8000",
        "27": "10000",
        "28": "12600",
        "29": "16000"
      }
    },
    "MID1_Q": {
      "id": "MID1_Q",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "EQ Mid1 Q",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "0.5",
        "1": "1.0",
        "2": "2.0",
        "3": "4.0",
        "4": "8.0",
        "5": "16.0"
      }
    },
    "MID2_Q": {
      "id": "MID2_Q",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "EQ Mid2 Q",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 12,
      "lengthSysex": 1,
      "values": {
        "0": "0.5",
        "1": "1.0",
        "2": "2.0",
        "3": "4.0",
        "4": "8.0",
        "5": "16.0"
      }
    },
    "MID3_Q": {
      "id": "MID3_Q",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "EQ Mid3 Q",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "values": {
        "0": "0.5",
        "1": "1.0",
        "2": "2.0",
        "3": "4.0",
        "4": "8.0",
        "5": "16.0"
      }
    },
    "SW": {
      "id": "SW",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "EQ Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SH"] = {
  "name": "SH",
  "description": "System Chorus",
  "byteLength": 48,
  "sysexLength": 84,
  "parameters": {
    "sw": {
      "id": "sw",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "choType": {
      "id": "choType",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Chorus Type",
      "dataRange": [
        0,
        9
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "level": {
      "id": "level",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Chorus Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 64,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "REV_SEND": {
      "id": "REV_SEND",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Reverb Send Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 5,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "param_1": {
      "id": "param_1",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "Chorus Parameter 1",
      "dataRange": [
        -20000,
        20000
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 4,
      "sysexValueOffset": 32768
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SLIM"] = {
  "name": "SLIM",
  "description": "",
  "byteLength": 12,
  "sysexLength": 9,
  "parameters": {
    "SW": {
      "id": "SW",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Lim Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ATTACK": {
      "id": "ATTACK",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Lim Attack Time",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "values": {
        "0": "0.1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100"
      }
    },
    "RELEASE": {
      "id": "RELEASE",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Lim Release Time",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "displayRange": [
        10,
        1000
      ]
    },
    "THRESHOLD": {
      "id": "THRESHOLD",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Lim Threshold",
      "dataRange": [
        -60,
        0
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "RATIO": {
      "id": "RATIO",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Lim Ratio",
      "dataRange": [
        0,
        7
      ],
      "initValue": 7,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "1:1",
        "1": "2:1",
        "2": "3:1",
        "3": "4:1",
        "4": "8:1",
        "5": "16:1",
        "6": "32:1",
        "7": "INF:1"
      }
    },
    "KNEE": {
      "id": "KNEE",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Lim Knee",
      "dataRange": [
        0,
        30
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "POSTGAIN": {
      "id": "POSTGAIN",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Lim Output Gain",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB",
      "displayRange": [
        -24,
        24
      ]
    },
    "RELEASE_SYNC": {
      "id": "RELEASE_SYNC",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Lim Release Sync",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "1/16",
        "2": "1/8T",
        "3": "1/16.",
        "4": "1/8",
        "5": "1/4T",
        "6": "1/8.",
        "7": "1/4"
      }
    },
    "CEILING": {
      "id": "CEILING",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Lim Ceiling",
      "dataRange": [
        -6,
        0
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 9,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SNG_CMN"] = {
  "name": "SNG_CMN",
  "description": "",
  "byteLength": 64,
  "sysexLength": 45,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Song Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Song Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 2
    },
    "TRANSPOSE": {
      "id": "TRANSPOSE",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Transpose",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "TR1_TRANS_SW": {
      "id": "TR1_TRANS_SW",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Track1 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR2_TRANS_SW": {
      "id": "TR2_TRANS_SW",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Track2 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR3_TRANS_SW": {
      "id": "TR3_TRANS_SW",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "Track3 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR4_TRANS_SW": {
      "id": "TR4_TRANS_SW",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "Track4 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR5_TRANS_SW": {
      "id": "TR5_TRANS_SW",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Track5 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR6_TRANS_SW": {
      "id": "TR6_TRANS_SW",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Track6 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR7_TRANS_SW": {
      "id": "TR7_TRANS_SW",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "Track7 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TR8_TRANS_SW": {
      "id": "TR8_TRANS_SW",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "Track8 Transpose Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "TAG_KEY": {
      "id": "TAG_KEY",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "Key",
      "dataRange": [
        0,
        12
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "C",
        "2": "C#",
        "3": "D",
        "4": "D#",
        "5": "E",
        "6": "F",
        "7": "F#",
        "8": "G",
        "9": "G#",
        "10": "A",
        "11": "A#",
        "12": "B"
      }
    },
    "TAG_SCALE": {
      "id": "TAG_SCALE",
      "byteOffset": 29,
      "byteLength": 1,
      "description": "Scale",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "MAJOR",
        "2": "MINOR"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 30,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SECT_TYPE_1": {
      "id": "SECT_TYPE_1",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Section Type 1",
      "dataRange": [
        -1,
        15
      ],
      "initValue": -1,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "NONE",
        "1": "1 - 16"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 48,
      "byteLength": 16,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SNG"] = {
  "name": "SNG",
  "description": "",
  "byteLength": 16,
  "sysexLength": 2,
  "parameters": {
    "SCT_NUM": {
      "id": "SCT_NUM",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Section Number",
      "dataRange": [
        -1,
        16
      ],
      "initValue": -1,
      "lengthSysex": 1
    },
    "TRANSPOSE": {
      "id": "TRANSPOSE",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Transpose",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 2,
      "byteLength": 14,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SPATH"] = {
  "name": "SPATH",
  "description": "",
  "byteLength": 256,
  "sysexLength": 0,
  "parameters": {
    "PROJECT_PASS_1": {
      "id": "PROJECT_PASS_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Project Path 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["STP_SEQ_MUTE_TRK"] = {
  "name": "STP_SEQ_MUTE_TRK",
  "description": "SEQ_MUTE_TRK",
  "byteLength": 12,
  "sysexLength": 0,
  "parameters": {
    "PRM_1": {
      "id": "PRM_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "SEQ Prm Mute 1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "BEND": {
      "id": "BEND",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "SEQ Bend Mute",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 9,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["STP_TRK"] = {
  "name": "STP_TRK",
  "description": "TRK",
  "byteLength": 4,
  "sysexLength": 0,
  "parameters": {
    "TRK_CUE_LEV": {
      "id": "TRK_CUE_LEV",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Cue Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "TRK_MIX_LEV": {
      "id": "TRK_MIX_LEV",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Mix Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "TRK_PAN": {
      "id": "TRK_PAN",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Pan",
      "dataRange": [
        0,
        255
      ],
      "initValue": 128,
      "lengthSysex": 0,
      "values": {
        "0": "L128 - 127R"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["STP"] = {
  "name": "STP",
  "description": "",
  "byteLength": 506,
  "sysexLength": 0,
  "parameters": {
    "CUR_TRACK": {
      "id": "CUR_TRACK",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Current Track",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Master Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "TEMPO": {
      "id": "TEMPO",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "Master Tempo",
      "dataRange": [
        2000,
        30000
      ],
      "initValue": 7000,
      "lengthSysex": 0,
      "displayRange": [
        20,
        300
      ]
    },
    "APP_MODE": {
      "id": "APP_MODE",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Application mode",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "NORMAL",
        "1": "TEST"
      }
    },
    "REC_STATE": {
      "id": "REC_STATE",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Rec Switch State",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_QUANTIZE": {
      "id": "REC_QUANTIZE",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Rec Quantize",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_CLEAR": {
      "id": "REC_CLEAR",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Rec Clear",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "STEP_SEL": {
      "id": "STEP_SEL",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Select Step",
      "dataRange": [
        -1,
        127
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "NONE",
        "1": "0 - 127"
      }
    },
    "TRK_SEL": {
      "id": "TRK_SEL",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Select Part",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "TFX_SEL": {
      "id": "TFX_SEL",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Select TFX",
      "dataRange": [
        0,
        3
      ],
      "initValue": 3,
      "lengthSysex": 0,
      "values": {
        "0": "REVERB",
        "1": "DELAY",
        "2": "COMP",
        "3": "FILTER"
      }
    },
    "MEASURE_POS": {
      "id": "MEASURE_POS",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Measure Position",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "CUR_CLIP_1": {
      "id": "CUR_CLIP_1",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Current Clip 1",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "CLIP1",
        "1": "CLIP2",
        "2": "CLIP3",
        "3": "CLIP4",
        "4": "CLIP5",
        "5": "CLIP6",
        "6": "CLIP7",
        "7": "CLIP8",
        "8": "CLIP9",
        "9": "CLIP10",
        "10": "CLIP11",
        "11": "CLIP12",
        "12": "CLIP13",
        "13": "CLIP14",
        "14": "CLIP15",
        "15": "CLIP16"
      }
    },
    "CHANGE_CLIP_1": {
      "id": "CHANGE_CLIP_1",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Change Clip 1",
      "dataRange": [
        -1,
        15
      ],
      "initValue": -1,
      "lengthSysex": 0,
      "values": {
        "0": "NONE",
        "1": "CLIP1",
        "2": "CLIP2",
        "3": "CLIP3",
        "4": "CLIP4",
        "5": "CLIP5",
        "6": "CLIP6",
        "7": "CLIP7",
        "8": "CLIP8",
        "9": "CLIP9",
        "10": "CLIP10",
        "11": "CLIP11",
        "12": "CLIP12",
        "13": "CLIP13",
        "14": "CLIP14",
        "15": "CLIP15",
        "16": "CLIP16"
      }
    },
    "CHANGING_CLIP_1": {
      "id": "CHANGING_CLIP_1",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "Changing Clip 1",
      "dataRange": [
        -1,
        15
      ],
      "initValue": -1,
      "lengthSysex": 0,
      "values": {
        "0": "NONE",
        "1": "CLIP1",
        "2": "CLIP2",
        "3": "CLIP3",
        "4": "CLIP4",
        "5": "CLIP5",
        "6": "CLIP6",
        "7": "CLIP7",
        "8": "CLIP8",
        "9": "CLIP9",
        "10": "CLIP10",
        "11": "CLIP11",
        "12": "CLIP12",
        "13": "CLIP13",
        "14": "CLIP14",
        "15": "CLIP15",
        "16": "CLIP16"
      }
    },
    "SEQ_RUN_1": {
      "id": "SEQ_RUN_1",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "SEQ Run 1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "STOP",
        "1": "RUN"
      }
    },
    "SEQ_STEP_PROGRESS_1": {
      "id": "SEQ_STEP_PROGRESS_1",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "Progress Step 1",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "SEQ_STEP_CUR_1": {
      "id": "SEQ_STEP_CUR_1",
      "byteOffset": 52,
      "byteLength": 1,
      "description": "Current Step 1",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "SEQ_MASTER_STEP_CUR": {
      "id": "SEQ_MASTER_STEP_CUR",
      "byteOffset": 60,
      "byteLength": 1,
      "description": "Master Current Step",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "SEQ_MASTER_RUN": {
      "id": "SEQ_MASTER_RUN",
      "byteOffset": 61,
      "byteLength": 1,
      "description": "Master Run",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "Stop",
        "1": "Run"
      }
    },
    "SEQ_MOTION_REC": {
      "id": "SEQ_MOTION_REC",
      "byteOffset": 62,
      "byteLength": 1,
      "description": "Motion Rec SW",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 63,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "TRK": {
      "id": "TRK",
      "byteOffset": 64,
      "byteLength": 32,
      "description": "TRK",
      "blockName": "STP_TRK",
      "count": 8,
      "blockByteLength": 4,
      "sysexOffset": "00 00 00",
      "lengthSysex": 0,
      "block": ZenProperties["STP_TRK"]
    },
    "EXT_SEL": {
      "id": "EXT_SEL",
      "byteOffset": 96,
      "byteLength": 1,
      "description": "External Input",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "LINE",
        "1": "INT MIC",
        "2": "EXT MIC"
      }
    },
    "PHONES_LEV": {
      "id": "PHONES_LEV",
      "byteOffset": 97,
      "byteLength": 1,
      "description": "Phones Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "WAV_CUE_SW": {
      "id": "WAV_CUE_SW",
      "byteOffset": 98,
      "byteLength": 1,
      "description": "WAV Cue Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "EXT_CUE_SW": {
      "id": "EXT_CUE_SW",
      "byteOffset": 99,
      "byteLength": 1,
      "description": "External Cue Sw",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "CUE(DRY)",
        "2": "CUE(WET)"
      }
    },
    "PC_CUE_SW": {
      "id": "PC_CUE_SW",
      "byteOffset": 100,
      "byteLength": 1,
      "description": "PC Cue Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ASGN_CUE_SW": {
      "id": "ASGN_CUE_SW",
      "byteOffset": 101,
      "byteLength": 1,
      "description": "Assign Cue Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PHONES_CUE_SW": {
      "id": "PHONES_CUE_SW",
      "byteOffset": 102,
      "byteLength": 1,
      "description": "Phones Cue Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIX_OUT_MUTE": {
      "id": "MIX_OUT_MUTE",
      "byteOffset": 103,
      "byteLength": 1,
      "description": "Mix Out Mute",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIX_OUT_LEV": {
      "id": "MIX_OUT_LEV",
      "byteOffset": 104,
      "byteLength": 1,
      "description": "Mix Out Level",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 105,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "REC_MIDI_SYNC": {
      "id": "REC_MIDI_SYNC",
      "byteOffset": 108,
      "byteLength": 1,
      "description": "Rec MIDI Sync",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_TM_STRETCH": {
      "id": "REC_TM_STRETCH",
      "byteOffset": 109,
      "byteLength": 1,
      "description": "Rec Time Stretch",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "TYPE1",
        "2": "TYPE2"
      }
    },
    "REC_TM_WINDOW": {
      "id": "REC_TM_WINDOW",
      "byteOffset": 110,
      "byteLength": 1,
      "description": "Rec Stretch Window",
      "dataRange": [
        0,
        4
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "1.0",
        "1": "0.75",
        "2": "0.5",
        "3": "0.375",
        "4": "0.25"
      }
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 111,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "REC_PITCH_CHRM": {
      "id": "REC_PITCH_CHRM",
      "byteOffset": 112,
      "byteLength": 1,
      "description": "Rec Pitch Chromatic",
      "dataRange": [
        -24,
        24
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "REC_PITCH_FINE": {
      "id": "REC_PITCH_FINE",
      "byteOffset": 113,
      "byteLength": 1,
      "description": "Rec Pitch Fine",
      "dataRange": [
        -100,
        100
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "REC_PITCH_BEND": {
      "id": "REC_PITCH_BEND",
      "byteOffset": 114,
      "byteLength": 2,
      "description": "Rec Pitch Bend",
      "dataRange": [
        0,
        400
      ],
      "initValue": 100,
      "lengthSysex": 0,
      "displayMeasurement": "%"
    },
    "REC_SPEED": {
      "id": "REC_SPEED",
      "byteOffset": 116,
      "byteLength": 1,
      "description": "Rec Speed",
      "dataRange": [
        0,
        200
      ],
      "initValue": 100,
      "lengthSysex": 0,
      "displayMeasurement": "%"
    },
    "REC_SHUFFLE_POS": {
      "id": "REC_SHUFFLE_POS",
      "byteOffset": 117,
      "byteLength": 1,
      "description": "Rec Shuffle Pos",
      "dataRange": [
        1,
        99
      ],
      "initValue": 50,
      "lengthSysex": 0,
      "displayMeasurement": "%"
    },
    "REC_SHUFFLE_RATIO": {
      "id": "REC_SHUFFLE_RATIO",
      "byteOffset": 118,
      "byteLength": 1,
      "description": "Rec Shuffle Ratio",
      "dataRange": [
        1,
        99
      ],
      "initValue": 50,
      "lengthSysex": 0,
      "displayMeasurement": "%"
    },
    "REC_LOOP": {
      "id": "REC_LOOP",
      "byteOffset": 119,
      "byteLength": 1,
      "description": "Rec Loop Play",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_STANDBY": {
      "id": "REC_STANDBY",
      "byteOffset": 120,
      "byteLength": 1,
      "description": "Rec Standby",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_PLAY": {
      "id": "REC_PLAY",
      "byteOffset": 121,
      "byteLength": 1,
      "description": "Rec Play/Stop",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "STOP",
        "1": "START"
      }
    },
    "REC_REVERSE": {
      "id": "REC_REVERSE",
      "byteOffset": 122,
      "byteLength": 1,
      "description": "Rec Reverse",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_CLIP": {
      "id": "REC_CLIP",
      "byteOffset": 123,
      "byteLength": 1,
      "description": "Rec Clip",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "lengthSysex": 0
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 124,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "REC_START_OFST": {
      "id": "REC_START_OFST",
      "byteOffset": 128,
      "byteLength": 2,
      "description": "Rec Start Ofst",
      "dataRange": [
        0,
        8388607
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "REC_END_OFST": {
      "id": "REC_END_OFST",
      "byteOffset": 130,
      "byteLength": 2,
      "description": "Rec End Ofst",
      "dataRange": [
        -8388607,
        0
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "REC_START_STEP": {
      "id": "REC_START_STEP",
      "byteOffset": 132,
      "byteLength": 1,
      "description": "Rec Start Step",
      "dataRange": [
        0,
        63
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "displayRange": [
        1,
        64
      ]
    },
    "REC_LAST_STEP": {
      "id": "REC_LAST_STEP",
      "byteOffset": 133,
      "byteLength": 1,
      "description": "Rec Last Step",
      "dataRange": [
        -63,
        0
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "REC_STEP_LENGTH": {
      "id": "REC_STEP_LENGTH",
      "byteOffset": 134,
      "byteLength": 1,
      "description": "Rec Step Length",
      "dataRange": [
        1,
        64
      ],
      "initValue": 16,
      "lengthSysex": 0
    },
    "SEQ_STEPINPUT": {
      "id": "SEQ_STEPINPUT",
      "byteOffset": 135,
      "byteLength": 1,
      "description": "Step Input",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SAMPLE_EDIT_ZOOM": {
      "id": "SAMPLE_EDIT_ZOOM",
      "byteOffset": 136,
      "byteLength": 2,
      "description": "Sample Edit Zoom",
      "dataRange": [
        1,
        65536
      ],
      "initValue": 128,
      "lengthSysex": 0,
      "displayMeasurement": "x"
    },
    "SEQ_MUTE_TRK": {
      "id": "SEQ_MUTE_TRK",
      "byteOffset": 138,
      "byteLength": 96,
      "description": "SEQ_MUTE_TRK",
      "blockName": "STP_SEQ_MUTE_TRK",
      "count": 8,
      "blockByteLength": 12,
      "sysexOffset": "00 00 00",
      "lengthSysex": 0,
      "block": ZenProperties["STP_SEQ_MUTE_TRK"]
    },
    "INT_EXT_CLK": {
      "id": "INT_EXT_CLK",
      "byteOffset": 234,
      "byteLength": 1,
      "description": "Clock Src",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "INT",
        "1": "EXT"
      }
    },
    "PAD_OCT_SHIFT": {
      "id": "PAD_OCT_SHIFT",
      "byteOffset": 235,
      "byteLength": 1,
      "description": "Pad Oct Shift",
      "dataRange": [
        -5,
        5
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "VALUE_KNOB_MODE": {
      "id": "VALUE_KNOB_MODE",
      "byteOffset": 236,
      "byteLength": 1,
      "description": "VALUE AS TEMPO or INPUT",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "TEMPO",
        "2": "INPUT"
      }
    },
    "METRO_SW": {
      "id": "METRO_SW",
      "byteOffset": 237,
      "byteLength": 1,
      "description": "Metronome Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "METRO_FOR_REC": {
      "id": "METRO_FOR_REC",
      "byteOffset": 238,
      "byteLength": 1,
      "description": "Metronome For Rec",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_NORMALIZE_LEVEL": {
      "id": "REC_NORMALIZE_LEVEL",
      "byteOffset": 239,
      "byteLength": 1,
      "description": "Sample Normalize Level",
      "dataRange": [
        -12,
        0
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "displayMeasurement": "dB"
    },
    "REC_SLICE_LEVEL": {
      "id": "REC_SLICE_LEVEL",
      "byteOffset": 240,
      "byteLength": 1,
      "description": "Sample Slice Level",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "HARD",
        "1": "MID",
        "2": "SOFT"
      }
    },
    "REC_SLICE_POINT": {
      "id": "REC_SLICE_POINT",
      "byteOffset": 241,
      "byteLength": 1,
      "description": "Sample Slice Point",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "displayRange": [
        1,
        256
      ]
    },
    "REC_SLICE_PREVIEW": {
      "id": "REC_SLICE_PREVIEW",
      "byteOffset": 242,
      "byteLength": 1,
      "description": "Sample Slice Preview",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "lengthSysex": 0,
      "values": {
        "0": "OFF ",
        "1": "ON"
      }
    },
    "DUMMY_PUSH": {
      "id": "DUMMY_PUSH",
      "byteOffset": 243,
      "byteLength": 1,
      "description": "Dummy Label For Edit",
      "dataRange": [
        0,
        0
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "PUSH"
      }
    },
    "COUNT_IN_SW": {
      "id": "COUNT_IN_SW",
      "byteOffset": 244,
      "byteLength": 1,
      "description": "Count-in",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING5": {
      "id": "PADDING5",
      "byteOffset": 245,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "BRDG_SW": {
      "id": "BRDG_SW",
      "byteOffset": 246,
      "byteLength": 1,
      "description": "Bridger Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF ",
        "1": "READY"
      }
    },
    "BRDG_XFADE": {
      "id": "BRDG_XFADE",
      "byteOffset": 247,
      "byteLength": 1,
      "description": "Bridger Fader",
      "dataRange": [
        0,
        255
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "MIC_SW": {
      "id": "MIC_SW",
      "byteOffset": 248,
      "byteLength": 1,
      "description": "Mic Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "REC_PRE_EM_SW": {
      "id": "REC_PRE_EM_SW",
      "byteOffset": 249,
      "byteLength": 1,
      "description": "Rec Pre-Emphasis Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "VOCAL_LEVEL_CH_1": {
      "id": "VOCAL_LEVEL_CH_1",
      "byteOffset": 250,
      "byteLength": 1,
      "description": "Vocal Channel Level 1",
      "dataRange": [
        0,
        127
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "MIXDOWN_SW": {
      "id": "MIXDOWN_SW",
      "byteOffset": 266,
      "byteLength": 1,
      "description": "Mixdown Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MIXDOWN_FADE": {
      "id": "MIXDOWN_FADE",
      "byteOffset": 267,
      "byteLength": 1,
      "description": "Mixdown Fade",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "KBDARP_SW": {
      "id": "KBDARP_SW",
      "byteOffset": 268,
      "byteLength": 1,
      "description": "Kbd Arp Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "MICRO_PHRS_SW": {
      "id": "MICRO_PHRS_SW",
      "byteOffset": 269,
      "byteLength": 1,
      "description": "Micro Phrase Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "SONG_REC_STATE": {
      "id": "SONG_REC_STATE",
      "byteOffset": 270,
      "byteLength": 1,
      "description": "Song Rec State",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PAD_MODE_SEQ": {
      "id": "PAD_MODE_SEQ",
      "byteOffset": 271,
      "byteLength": 1,
      "description": "Pad Mode SEQ",
      "dataRange": [
        0,
        6
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "NOTE",
        "1": "VELO",
        "2": "STYLE",
        "3": "CHORD",
        "4": "CLIP",
        "5": "SECTION",
        "6": "VOCAL"
      }
    },
    "PAD_MODE_SCT": {
      "id": "PAD_MODE_SCT",
      "byteOffset": 272,
      "byteLength": 1,
      "description": "Pad Mode SCT",
      "dataRange": [
        0,
        6
      ],
      "initValue": 5,
      "lengthSysex": 0,
      "values": {
        "0": "NOTE",
        "1": "VELO",
        "2": "STYLE",
        "3": "CHORD",
        "4": "CLIP",
        "5": "SECTION",
        "6": "VOCAL"
      }
    },
    "PAD_MODE_SNG": {
      "id": "PAD_MODE_SNG",
      "byteOffset": 273,
      "byteLength": 1,
      "description": "Pad Mode SNG",
      "dataRange": [
        0,
        6
      ],
      "initValue": 0,
      "lengthSysex": 0,
      "values": {
        "0": "NOTE",
        "1": "VELO",
        "2": "STYLE",
        "3": "CHORD",
        "4": "CLIP",
        "5": "SECTION",
        "6": "VOCAL"
      }
    },
    "VCLP_PATCH_NUM": {
      "id": "VCLP_PATCH_NUM",
      "byteOffset": 274,
      "byteLength": 1,
      "description": "VP Patch Number",
      "dataRange": [
        0,
        20
      ],
      "initValue": 0,
      "lengthSysex": 0
    },
    "PADDING6": {
      "id": "PADDING6",
      "byteOffset": 275,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PADDING7": {
      "id": "PADDING7",
      "byteOffset": 278,
      "byteLength": 228,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["SV"] = {
  "name": "SV",
  "description": "System Reverb",
  "byteLength": 44,
  "sysexLength": 83,
  "parameters": {
    "sw": {
      "id": "sw",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "revType": {
      "id": "revType",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Reverb Type",
      "dataRange": [
        0,
        7
      ],
      "initValue": 1,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "level": {
      "id": "level",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Reverb Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 64,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "param_1": {
      "id": "param_1",
      "byteOffset": 4,
      "byteLength": 2,
      "description": "Reverb Parameter 1",
      "dataRange": [
        -20000,
        20000
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 4,
      "sysexValueOffset": 32768
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["TAKE"] = {
  "name": "TAKE",
  "description": "",
  "byteLength": 28,
  "sysexLength": 33,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": " 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1
    },
    "SAMPLE_ID": {
      "id": "SAMPLE_ID",
      "byteOffset": 16,
      "byteLength": 2,
      "description": "User Sample ID",
      "dataRange": [
        -1,
        512
      ],
      "initValue": -1,
      "sysexOffset": 16,
      "lengthSysex": 4
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 18,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "START_ADRS": {
      "id": "START_ADRS",
      "byteOffset": 20,
      "byteLength": 2,
      "description": "Start Address",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 4
    },
    "END_ADRS": {
      "id": "END_ADRS",
      "byteOffset": 22,
      "byteLength": 2,
      "description": "End Address",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 4
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 28,
      "lengthSysex": 1
    },
    "OUTPUT_ASGN": {
      "id": "OUTPUT_ASGN",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Output Assign",
      "dataRange": [
        0,
        8
      ],
      "initValue": 1,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "DRY",
        "1": "MFX",
        "2": "COMP1",
        "3": "COMP2",
        "4": "COMP3",
        "5": "COMP4",
        "6": "COMP5",
        "7": "COMP6",
        "8": "V.PROC"
      }
    },
    "CONTROL_DATA_ID": {
      "id": "CONTROL_DATA_ID",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "Control Data ID",
      "dataRange": [
        -1,
        127
      ],
      "initValue": -1,
      "sysexOffset": 30,
      "lengthSysex": 2
    },
    "MUTE": {
      "id": "MUTE",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "Mute",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 32,
      "lengthSysex": 1
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["TCMP"] = {
  "name": "TCMP",
  "description": "",
  "byteLength": 12,
  "sysexLength": 8,
  "parameters": {
    "POS": {
      "id": "POS",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Comp Position",
      "dataRange": [
        0,
        1
      ],
      "initValue": 1,
      "lengthSysex": 1,
      "values": {
        "0": "Pre MFX",
        "1": "Post MFX"
      }
    },
    "SW": {
      "id": "SW",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Comp Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "ATTACK": {
      "id": "ATTACK",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Comp Attack Time",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "values": {
        "0": "0.1",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
        "24": "24",
        "25": "25",
        "26": "26",
        "27": "27",
        "28": "28",
        "29": "29",
        "30": "30",
        "31": "31",
        "32": "32",
        "33": "33",
        "34": "34",
        "35": "35",
        "36": "36",
        "37": "37",
        "38": "38",
        "39": "39",
        "40": "40",
        "41": "41",
        "42": "42",
        "43": "43",
        "44": "44",
        "45": "45",
        "46": "46",
        "47": "47",
        "48": "48",
        "49": "49",
        "50": "50",
        "51": "51",
        "52": "52",
        "53": "53",
        "54": "54",
        "55": "55",
        "56": "56",
        "57": "57",
        "58": "58",
        "59": "59",
        "60": "60",
        "61": "61",
        "62": "62",
        "63": "63",
        "64": "64",
        "65": "65",
        "66": "66",
        "67": "67",
        "68": "68",
        "69": "69",
        "70": "70",
        "71": "71",
        "72": "72",
        "73": "73",
        "74": "74",
        "75": "75",
        "76": "76",
        "77": "77",
        "78": "78",
        "79": "79",
        "80": "80",
        "81": "81",
        "82": "82",
        "83": "83",
        "84": "84",
        "85": "85",
        "86": "86",
        "87": "87",
        "88": "88",
        "89": "89",
        "90": "90",
        "91": "91",
        "92": "92",
        "93": "93",
        "94": "94",
        "95": "95",
        "96": "96",
        "97": "97",
        "98": "98",
        "99": "99",
        "100": "100"
      }
    },
    "RELEASE": {
      "id": "RELEASE",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Comp Release Time",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "displayMeasurement": "ms",
      "displayRange": [
        10,
        1000
      ]
    },
    "THRESHOLD": {
      "id": "THRESHOLD",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Comp Threshold",
      "dataRange": [
        -60,
        0
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB"
    },
    "RATIO": {
      "id": "RATIO",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Comp Ratio",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "1:1",
        "1": "2:1",
        "2": "3:1",
        "3": "4:1",
        "4": "8:1",
        "5": "16:1",
        "6": "32:1",
        "7": "INF:1"
      }
    },
    "KNEE": {
      "id": "KNEE",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Comp Knee",
      "dataRange": [
        0,
        30
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "POSTGAIN": {
      "id": "POSTGAIN",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Comp Output Gain",
      "dataRange": [
        -48,
        48
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "sysexValueOffset": 64,
      "displayMeasurement": "dB",
      "displayRange": [
        -24,
        24
      ]
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 8,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["UserSampleCmn"] = {
  "name": "UserSampleCmn",
  "description": "",
  "byteLength": 64,
  "sysexLength": 17,
  "parameters": {
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Project Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "lengthSysex": 1
    },
    "EXPORT_LOCK": {
      "id": "EXPORT_LOCK",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Export Lock",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 17,
      "byteLength": 3,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 20,
      "byteLength": 44,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["UserSampleModify"] = {
  "name": "UserSampleModify",
  "description": "",
  "byteLength": 14,
  "sysexLength": 20,
  "parameters": {
    "LOOP_MODE": {
      "id": "LOOP_MODE",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Loop Mode",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "FWD",
        "1": "ONE-SHOT",
        "2": "REV",
        "3": "REV-ONE"
      }
    },
    "LEVEL": {
      "id": "LEVEL",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 127,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "PIT_FINE": {
      "id": "PIT_FINE",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "Fine Tune",
      "dataRange": [
        -500,
        500
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 4,
      "sysexValueOffset": 1024,
      "displayMeasurement": "cent",
      "displayRange": [
        -50,
        50
      ]
    },
    "GAIN": {
      "id": "GAIN",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Gain",
      "dataRange": [
        0,
        2
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "displayMeasurement": "dB",
      "values": {
        "0": "0",
        "1": "+6",
        "2": "+12"
      }
    },
    "ORG_KEY": {
      "id": "ORG_KEY",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Original Key",
      "dataRange": [
        0,
        127
      ],
      "initValue": 60,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "C-1",
        "1": "C#-1",
        "2": "D-1",
        "3": "D#-1",
        "4": "E-1",
        "5": "F-1",
        "6": "F#-1",
        "7": "G-1",
        "8": "G#-1",
        "9": "A-1",
        "10": "A#-1",
        "11": "B-1",
        "12": "C0",
        "13": "C#0",
        "14": "D0",
        "15": "D#0",
        "16": "E0",
        "17": "F0",
        "18": "F#0",
        "19": "G0",
        "20": "G#0",
        "21": "A0",
        "22": "A#0",
        "23": "B0",
        "24": "C1",
        "25": "C#1",
        "26": "D1",
        "27": "D#1",
        "28": "E1",
        "29": "F1",
        "30": "F#1",
        "31": "G1",
        "32": "G#1",
        "33": "A1",
        "34": "A#1",
        "35": "B1",
        "36": "C2",
        "37": "C#2",
        "38": "D2",
        "39": "D#2",
        "40": "E2",
        "41": "F2",
        "42": "F#2",
        "43": "G2",
        "44": "G#2",
        "45": "A2",
        "46": "A#2",
        "47": "B2",
        "48": "C3",
        "49": "C#3",
        "50": "D3",
        "51": "D#3",
        "52": "E3",
        "53": "F3",
        "54": "F#3",
        "55": "G3",
        "56": "G#3",
        "57": "A3",
        "58": "A#3",
        "59": "B3",
        "60": "C4",
        "61": "C#4",
        "62": "D4",
        "63": "D#4",
        "64": "E4",
        "65": "F4",
        "66": "F#4",
        "67": "G4",
        "68": "G#4",
        "69": "A4",
        "70": "A#4",
        "71": "B4",
        "72": "C5",
        "73": "C#5",
        "74": "D5",
        "75": "D#5",
        "76": "E5",
        "77": "F5",
        "78": "F#5",
        "79": "G5",
        "80": "G#5",
        "81": "A5",
        "82": "A#5",
        "83": "B5",
        "84": "C6",
        "85": "C#6",
        "86": "D6",
        "87": "D#6",
        "88": "E6",
        "89": "F6",
        "90": "F#6",
        "91": "G6",
        "92": "G#6",
        "93": "A6",
        "94": "A#6",
        "95": "B6",
        "96": "C7",
        "97": "C#7",
        "98": "D7",
        "99": "D#7",
        "100": "E7",
        "101": "F7",
        "102": "F#7",
        "103": "G7",
        "104": "G#7",
        "105": "A7",
        "106": "A#7",
        "107": "B7",
        "108": "C8",
        "109": "C#8",
        "110": "D8",
        "111": "D#8",
        "112": "E8",
        "113": "F8",
        "114": "F#8",
        "115": "G8",
        "116": "G#8",
        "117": "A8",
        "118": "A#8",
        "119": "B8",
        "120": "C9",
        "121": "C#9",
        "122": "D9",
        "123": "D#9",
        "124": "E9",
        "125": "F9",
        "126": "F#9",
        "127": "G9"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "START_POINT": {
      "id": "START_POINT",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "Start Point",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 4
    },
    "LOOP_START_POINT": {
      "id": "LOOP_START_POINT",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "Loop Start Point",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 4
    },
    "END_POINT": {
      "id": "END_POINT",
      "byteOffset": 12,
      "byteLength": 2,
      "description": "End Point",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 4
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["VCLP"] = {
  "name": "VCLP",
  "description": "",
  "byteLength": 128,
  "sysexLength": 102,
  "parameters": {
    "POSITION": {
      "id": "POSITION",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "Position",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "EXT IN",
        "1": "PC IN",
        "2": "VOCAL-DRY",
        "3": "VOCAL-MFX"
      }
    },
    "SW": {
      "id": "SW",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "KEY_AUTO": {
      "id": "KEY_AUTO",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "Auto",
      "dataRange": [
        0,
        2
      ],
      "initValue": 2,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "values": {
        "0": "FULL",
        "1": "HYBRID",
        "2": "OFF"
      }
    },
    "KEY_KEY": {
      "id": "KEY_KEY",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Key",
      "dataRange": [
        0,
        23
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "values": {
        "0": "C",
        "1": "Db",
        "2": "D",
        "3": "Eb",
        "4": "E",
        "5": "F",
        "6": "F#",
        "7": "G",
        "8": "Ab",
        "9": "A",
        "10": "Bb",
        "11": "B",
        "12": "Cm",
        "13": "C#m",
        "14": "Dm",
        "15": "D#m",
        "16": "Em",
        "17": "Fm",
        "18": "F#m",
        "19": "Gm",
        "20": "G#m",
        "21": "Am",
        "22": "Bbm",
        "23": "Bm"
      }
    },
    "KEY_RECG_SRC": {
      "id": "KEY_RECG_SRC",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Recg Src",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "AUTO",
        "1": "INST",
        "2": "MIDI",
        "3": "MIDI(USB)"
      }
    },
    "KEY_MIDI2CHORD": {
      "id": "KEY_MIDI2CHORD",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "MIDI>Chord",
      "dataRange": [
        0,
        17
      ],
      "initValue": 17,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "Ch1",
        "1": "Ch2",
        "2": "Ch3",
        "3": "Ch4",
        "4": "Ch5",
        "5": "Ch6",
        "6": "Ch7",
        "7": "Ch8",
        "8": "Ch9",
        "9": "Ch10",
        "10": "Ch11",
        "11": "Ch12",
        "12": "Ch13",
        "13": "Ch14",
        "14": "Ch15",
        "15": "Ch16",
        "16": "RX",
        "17": "OFF"
      }
    },
    "KEY_M2C_ZONE_LOWER": {
      "id": "KEY_M2C_ZONE_LOWER",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "Zone Lwr",
      "dataRange": [
        0,
        103
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "KEY_M2C_ZONE_UPPER": {
      "id": "KEY_M2C_ZONE_UPPER",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "Zone Upr",
      "dataRange": [
        0,
        103
      ],
      "initValue": 103,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "KEY_BEND_RANGE": {
      "id": "KEY_BEND_RANGE",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "Bend Range",
      "dataRange": [
        0,
        12
      ],
      "initValue": 2,
      "sysexOffset": 8,
      "lengthSysex": 1
    },
    "MST_NS": {
      "id": "MST_NS",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "Noise Threshold",
      "dataRange": [
        0,
        100
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1
    },
    "MST_LEVEL": {
      "id": "MST_LEVEL",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 10,
      "lengthSysex": 1
    },
    "EH_SW": {
      "id": "EH_SW",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "EH_ENHANCE": {
      "id": "EH_ENHANCE",
      "byteOffset": 12,
      "byteLength": 1,
      "description": "Enhance",
      "dataRange": [
        0,
        100
      ],
      "initValue": 30,
      "sysexOffset": 12,
      "lengthSysex": 1
    },
    "EH_COMPRESS": {
      "id": "EH_COMPRESS",
      "byteOffset": 13,
      "byteLength": 1,
      "description": "Compress",
      "dataRange": [
        0,
        100
      ],
      "initValue": 20,
      "sysexOffset": 13,
      "lengthSysex": 1
    },
    "EH_DEESSER": {
      "id": "EH_DEESSER",
      "byteOffset": 14,
      "byteLength": 1,
      "description": "De-Esser",
      "dataRange": [
        0,
        100
      ],
      "initValue": 20,
      "sysexOffset": 14,
      "lengthSysex": 1
    },
    "EQ_SW": {
      "id": "EQ_SW",
      "byteOffset": 15,
      "byteLength": 1,
      "description": "Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "EQ_LOW_GAIN": {
      "id": "EQ_LOW_GAIN",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "Low Gain",
      "dataRange": [
        -20,
        20
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "EQ_HIGH_GAIN": {
      "id": "EQ_HIGH_GAIN",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "High Gain",
      "dataRange": [
        -20,
        20
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "EQ_LEVEL": {
      "id": "EQ_LEVEL",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Level",
      "dataRange": [
        -20,
        20
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "EQ_LMID_GAIN": {
      "id": "EQ_LMID_GAIN",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "Low-Mid Gain",
      "dataRange": [
        -20,
        20
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "EQ_LMID_FREQ": {
      "id": "EQ_LMID_FREQ",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "Low-Mid Freq",
      "dataRange": [
        0,
        29
      ],
      "initValue": 11,
      "sysexOffset": 20,
      "lengthSysex": 1,
      "values": {
        "0": "20.0Hz",
        "1": "25.0Hz",
        "2": "31.5Hz",
        "3": "40.0Hz",
        "4": "50.0Hz",
        "5": "63.0Hz",
        "6": "80.0Hz",
        "7": "100Hz",
        "8": "125Hz",
        "9": "160Hz",
        "10": "200Hz",
        "11": "250Hz",
        "12": "315Hz",
        "13": "400Hz",
        "14": "500Hz",
        "15": "630Hz",
        "16": "800Hz",
        "17": "1.00kHz",
        "18": "1.25kHz",
        "19": "1.60kHz",
        "20": "2.00kHz",
        "21": "2.50kHz",
        "22": "3.15kHz",
        "23": "4.00kHz",
        "24": "5.00kHz",
        "25": "6.30kHz",
        "26": "8.00kHz",
        "27": "10.0kHz",
        "28": "12.5kHz",
        "29": "16.0kHz"
      }
    },
    "EQ_LMID_Q": {
      "id": "EQ_LMID_Q",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Low-Mid Q",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 21,
      "lengthSysex": 1,
      "values": {
        "0": "0.5",
        "1": "1",
        "2": "2",
        "3": "4",
        "4": "8",
        "5": "16"
      }
    },
    "EQ_HMID_GAIN": {
      "id": "EQ_HMID_GAIN",
      "byteOffset": 22,
      "byteLength": 1,
      "description": "High-Mid Gain",
      "dataRange": [
        -20,
        20
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1,
      "displayMeasurement": "dB"
    },
    "EQ_HMID_FREQ": {
      "id": "EQ_HMID_FREQ",
      "byteOffset": 23,
      "byteLength": 1,
      "description": "High-Mid Freq",
      "dataRange": [
        0,
        29
      ],
      "initValue": 16,
      "sysexOffset": 23,
      "lengthSysex": 1,
      "values": {
        "0": "20.0Hz",
        "1": "25.0Hz",
        "2": "31.5Hz",
        "3": "40.0Hz",
        "4": "50.0Hz",
        "5": "63.0Hz",
        "6": "80.0Hz",
        "7": "100Hz",
        "8": "125Hz",
        "9": "160Hz",
        "10": "200Hz",
        "11": "250Hz",
        "12": "315Hz",
        "13": "400Hz",
        "14": "500Hz",
        "15": "630Hz",
        "16": "800Hz",
        "17": "1.00kHz",
        "18": "1.25kHz",
        "19": "1.60kHz",
        "20": "2.00kHz",
        "21": "2.50kHz",
        "22": "3.15kHz",
        "23": "4.00kHz",
        "24": "5.00kHz",
        "25": "6.30kHz",
        "26": "8.00kHz",
        "27": "10.0kHz",
        "28": "12.5kHz",
        "29": "16.0kHz"
      }
    },
    "EQ_HMID_Q": {
      "id": "EQ_HMID_Q",
      "byteOffset": 24,
      "byteLength": 1,
      "description": "High-Mid Q",
      "dataRange": [
        0,
        5
      ],
      "initValue": 1,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "0.5",
        "1": "1",
        "2": "2",
        "3": "4",
        "4": "8",
        "5": "16"
      }
    },
    "EQ_LOW_CUT": {
      "id": "EQ_LOW_CUT",
      "byteOffset": 25,
      "byteLength": 1,
      "description": "Low Cut",
      "dataRange": [
        0,
        17
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "FLAT",
        "1": "20.0Hz",
        "2": "25.0Hz",
        "3": "31.5Hz",
        "4": "40.0Hz",
        "5": "50.0Hz",
        "6": "63.0Hz",
        "7": "80.0Hz",
        "8": "100Hz",
        "9": "125Hz",
        "10": "160Hz",
        "11": "200Hz",
        "12": "250Hz",
        "13": "315Hz",
        "14": "400Hz",
        "15": "500Hz",
        "16": "630Hz",
        "17": "800Hz"
      }
    },
    "EQ_HIGH_CUT": {
      "id": "EQ_HIGH_CUT",
      "byteOffset": 26,
      "byteLength": 1,
      "description": "High Cut",
      "dataRange": [
        0,
        15
      ],
      "initValue": 15,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "630Hz",
        "1": "800Hz",
        "2": "1.00kHz",
        "3": "1.25kHz",
        "4": "1.60kHz",
        "5": "2.00kHz",
        "6": "2.50kHz",
        "7": "3.15kHz",
        "8": "4.00kHz",
        "9": "5.00kHz",
        "10": "6.30kHz",
        "11": "8.00kHz",
        "12": "10.0kHz",
        "13": "12.5kHz",
        "14": "16.0kHz",
        "15": "FLAT"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 27,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "PCR_SW": {
      "id": "PCR_SW",
      "byteOffset": 28,
      "byteLength": 1,
      "description": "Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "PCR_TYPE": {
      "id": "PCR_TYPE",
      "byteOffset": 29,
      "byteLength": 1,
      "description": "Tune Type",
      "dataRange": [
        0,
        3
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "SOFT",
        "1": "HARD",
        "2": "ELECTRIC",
        "3": "ROBOT"
      }
    },
    "PCR_SCALE": {
      "id": "PCR_SCALE",
      "byteOffset": 30,
      "byteLength": 1,
      "description": "Tune Scale",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "CHROMATIC",
        "1": "KEY"
      }
    },
    "PCR_NOTE": {
      "id": "PCR_NOTE",
      "byteOffset": 31,
      "byteLength": 1,
      "description": "Tune Robot Note",
      "dataRange": [
        0,
        11
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 1,
      "values": {
        "0": "C",
        "1": "Db",
        "2": "D",
        "3": "Eb",
        "4": "E",
        "5": "F",
        "6": "F#",
        "7": "G",
        "8": "Ab",
        "9": "A",
        "10": "Bb",
        "11": "B"
      }
    },
    "PCR_PAN": {
      "id": "PCR_PAN",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Tune Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 31,
      "lengthSysex": 1
    },
    "PCR_FORMANT": {
      "id": "PCR_FORMANT",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "Tune Formant",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 32,
      "lengthSysex": 1
    },
    "PCR_SHIFT": {
      "id": "PCR_SHIFT",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Tune Shift",
      "dataRange": [
        0,
        28
      ],
      "initValue": 12,
      "sysexOffset": 33,
      "lengthSysex": 1,
      "values": {
        "0": "-12",
        "1": "-11",
        "2": "-10",
        "3": "-9",
        "4": "-8",
        "5": "-7",
        "6": "-6",
        "7": "-5",
        "8": "-4",
        "9": "-3",
        "10": "-2",
        "11": "-1",
        "12": "0",
        "13": "+1",
        "14": "+2",
        "15": "+3",
        "16": "+4",
        "17": "+5",
        "18": "+6",
        "19": "+7",
        "20": "+8",
        "21": "+9",
        "22": "+10",
        "23": "+11",
        "24": "+12",
        "25": "USR-INT1",
        "26": "USR-INT2",
        "27": "USR-INT3",
        "28": "USR-INT4"
      }
    },
    "PCR_SPEED": {
      "id": "PCR_SPEED",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "Tune Speed",
      "dataRange": [
        0,
        10
      ],
      "initValue": 5,
      "sysexOffset": 34,
      "lengthSysex": 1
    },
    "PCR_STABILITY": {
      "id": "PCR_STABILITY",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "Tune Stability",
      "dataRange": [
        0,
        20
      ],
      "initValue": 10,
      "sysexOffset": 35,
      "lengthSysex": 1
    },
    "PCR_MIDI2PCR": {
      "id": "PCR_MIDI2PCR",
      "byteOffset": 37,
      "byteLength": 1,
      "description": "Tune MIDI",
      "dataRange": [
        0,
        17
      ],
      "initValue": 17,
      "sysexOffset": 36,
      "lengthSysex": 1,
      "values": {
        "0": "Ch1",
        "1": "Ch2",
        "2": "Ch3",
        "3": "Ch4",
        "4": "Ch5",
        "5": "Ch6",
        "6": "Ch7",
        "7": "Ch8",
        "8": "Ch9",
        "9": "Ch10",
        "10": "Ch11",
        "11": "Ch12",
        "12": "Ch13",
        "13": "Ch14",
        "14": "Ch15",
        "15": "Ch16",
        "16": "RX",
        "17": "OFF"
      }
    },
    "PCR_M2P_ZONE_LOWER": {
      "id": "PCR_M2P_ZONE_LOWER",
      "byteOffset": 38,
      "byteLength": 1,
      "description": "Tune Zone Lower",
      "dataRange": [
        0,
        103
      ],
      "initValue": 0,
      "sysexOffset": 37,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "PCR_M2P_ZONE_UPPER": {
      "id": "PCR_M2P_ZONE_UPPER",
      "byteOffset": 39,
      "byteLength": 1,
      "description": "Tune Zone Upper",
      "dataRange": [
        0,
        103
      ],
      "initValue": 103,
      "sysexOffset": 38,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "HRM_SW": {
      "id": "HRM_SW",
      "byteOffset": 40,
      "byteLength": 1,
      "description": "Switch",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 39,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "ON"
      }
    },
    "HRM_LEVEL": {
      "id": "HRM_LEVEL",
      "byteOffset": 41,
      "byteLength": 1,
      "description": "Hrm Effect Level",
      "dataRange": [
        0,
        100
      ],
      "initValue": 100,
      "sysexOffset": 40,
      "lengthSysex": 1
    },
    "HRM_DIRECT": {
      "id": "HRM_DIRECT",
      "byteOffset": 42,
      "byteLength": 1,
      "description": "Hrm Direct Level",
      "dataRange": [
        0,
        100
      ],
      "initValue": 100,
      "sysexOffset": 41,
      "lengthSysex": 1
    },
    "HRM_HIGH_NOTE_SENS": {
      "id": "HRM_HIGH_NOTE_SENS",
      "byteOffset": 43,
      "byteLength": 1,
      "description": "High Note Sens",
      "dataRange": [
        0,
        2
      ],
      "initValue": 1,
      "sysexOffset": 42,
      "lengthSysex": 1,
      "values": {
        "0": "LO",
        "1": "MID",
        "2": "HI"
      }
    },
    "HRM1_VOICE_AUTO": {
      "id": "HRM1_VOICE_AUTO",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "Hrm1 Voice Auto",
      "dataRange": [
        0,
        11
      ],
      "initValue": 5,
      "sysexOffset": 43,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "UNISON",
        "2": "OCT-",
        "3": "LOWER",
        "4": "LOW",
        "5": "HIGH",
        "6": "HIGHER",
        "7": "OCT+",
        "8": "USER1",
        "9": "USER2",
        "10": "USER3",
        "11": "USER4"
      }
    },
    "HRM1_VOICE_MANUAL": {
      "id": "HRM1_VOICE_MANUAL",
      "byteOffset": 45,
      "byteLength": 1,
      "description": "Hrm1 Voice Manual",
      "dataRange": [
        0,
        15
      ],
      "initValue": 7,
      "sysexOffset": 44,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "UNISON",
        "2": "OCT-",
        "3": "-6TH",
        "4": "-5TH",
        "5": "-4TH",
        "6": "-3RD",
        "7": "+3RD",
        "8": "+4TH",
        "9": "+5TH",
        "10": "+6TH",
        "11": "OCT+",
        "12": "USER1",
        "13": "USER2",
        "14": "USER3",
        "15": "USER4"
      }
    },
    "HRM1_PAN": {
      "id": "HRM1_PAN",
      "byteOffset": 46,
      "byteLength": 1,
      "description": "Hrm1 Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 45,
      "lengthSysex": 1
    },
    "HRM1_LEVEL": {
      "id": "HRM1_LEVEL",
      "byteOffset": 47,
      "byteLength": 1,
      "description": "Hrm1 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 46,
      "lengthSysex": 1
    },
    "HRM1_DELAY": {
      "id": "HRM1_DELAY",
      "byteOffset": 48,
      "byteLength": 1,
      "description": "Hrm1 Delay",
      "dataRange": [
        0,
        10
      ],
      "initValue": 0,
      "sysexOffset": 47,
      "lengthSysex": 1
    },
    "HRM1_ACCURATE": {
      "id": "HRM1_ACCURATE",
      "byteOffset": 49,
      "byteLength": 1,
      "description": "Hrm1 Accuracy",
      "dataRange": [
        0,
        10
      ],
      "initValue": 10,
      "sysexOffset": 48,
      "lengthSysex": 1
    },
    "HRM1_VIBRATO": {
      "id": "HRM1_VIBRATO",
      "byteOffset": 50,
      "byteLength": 1,
      "description": "Hrm1 Vibrato",
      "dataRange": [
        -10,
        10
      ],
      "initValue": 0,
      "sysexOffset": 49,
      "lengthSysex": 1
    },
    "HRM1_APPROACH": {
      "id": "HRM1_APPROACH",
      "byteOffset": 51,
      "byteLength": 1,
      "description": "Hrm1 Method",
      "dataRange": [
        0,
        3
      ],
      "initValue": 1,
      "sysexOffset": 50,
      "lengthSysex": 1,
      "values": {
        "0": "SCALE1",
        "1": "SCALE2",
        "2": "CHORD1",
        "3": "CHORD2"
      }
    },
    "HRM1_FORMANT": {
      "id": "HRM1_FORMANT",
      "byteOffset": 52,
      "byteLength": 1,
      "description": "Hrm1 Formant",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 51,
      "lengthSysex": 1
    },
    "HRM1_TONE": {
      "id": "HRM1_TONE",
      "byteOffset": 53,
      "byteLength": 1,
      "description": "Hrm1 Tone",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 52,
      "lengthSysex": 1
    },
    "HRM1_MIDI2VOICE": {
      "id": "HRM1_MIDI2VOICE",
      "byteOffset": 54,
      "byteLength": 1,
      "description": "Hrm1 MIDI",
      "dataRange": [
        0,
        17
      ],
      "initValue": 17,
      "sysexOffset": 53,
      "lengthSysex": 1,
      "values": {
        "0": "Ch1",
        "1": "Ch2",
        "2": "Ch3",
        "3": "Ch4",
        "4": "Ch5",
        "5": "Ch6",
        "6": "Ch7",
        "7": "Ch8",
        "8": "Ch9",
        "9": "Ch10",
        "10": "Ch11",
        "11": "Ch12",
        "12": "Ch13",
        "13": "Ch14",
        "14": "Ch15",
        "15": "Ch16",
        "16": "RX",
        "17": "OFF"
      }
    },
    "HRM1_M2V_ZONE_LOWER": {
      "id": "HRM1_M2V_ZONE_LOWER",
      "byteOffset": 55,
      "byteLength": 1,
      "description": "Hrm1 Zone Lower",
      "dataRange": [
        0,
        103
      ],
      "initValue": 0,
      "sysexOffset": 54,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "HRM1_M2V_ZONE_UPPER": {
      "id": "HRM1_M2V_ZONE_UPPER",
      "byteOffset": 56,
      "byteLength": 1,
      "description": "Hrm1 Zone Upper",
      "dataRange": [
        0,
        103
      ],
      "initValue": 103,
      "sysexOffset": 55,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "HRM2_VOICE_AUTO": {
      "id": "HRM2_VOICE_AUTO",
      "byteOffset": 57,
      "byteLength": 1,
      "description": "Hrm2 Voice Auto",
      "dataRange": [
        0,
        11
      ],
      "initValue": 4,
      "sysexOffset": 56,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "UNISON",
        "2": "OCT-",
        "3": "LOWER",
        "4": "LOW",
        "5": "HIGH",
        "6": "HIGHER",
        "7": "OCT+",
        "8": "USER1",
        "9": "USER2",
        "10": "USER3",
        "11": "USER4"
      }
    },
    "HRM2_VOICE_MANUAL": {
      "id": "HRM2_VOICE_MANUAL",
      "byteOffset": 58,
      "byteLength": 1,
      "description": "Hrm2 Voice Manual",
      "dataRange": [
        0,
        15
      ],
      "initValue": 5,
      "sysexOffset": 57,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "UNISON",
        "2": "OCT-",
        "3": "-6TH",
        "4": "-5TH",
        "5": "-4TH",
        "6": "-3RD",
        "7": "+3RD",
        "8": "+4TH",
        "9": "+5TH",
        "10": "+6TH",
        "11": "OCT+",
        "12": "USER1",
        "13": "USER2",
        "14": "USER3",
        "15": "USER4"
      }
    },
    "HRM2_PAN": {
      "id": "HRM2_PAN",
      "byteOffset": 59,
      "byteLength": 1,
      "description": "Hrm2 Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 58,
      "lengthSysex": 1
    },
    "HRM2_LEVEL": {
      "id": "HRM2_LEVEL",
      "byteOffset": 60,
      "byteLength": 1,
      "description": "Hrm2 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 59,
      "lengthSysex": 1
    },
    "HRM2_DELAY": {
      "id": "HRM2_DELAY",
      "byteOffset": 61,
      "byteLength": 1,
      "description": "Hrm2 Delay",
      "dataRange": [
        0,
        10
      ],
      "initValue": 0,
      "sysexOffset": 60,
      "lengthSysex": 1
    },
    "HRM2_ACCURATE": {
      "id": "HRM2_ACCURATE",
      "byteOffset": 62,
      "byteLength": 1,
      "description": "Hrm2 Accuracy",
      "dataRange": [
        0,
        10
      ],
      "initValue": 10,
      "sysexOffset": 61,
      "lengthSysex": 1
    },
    "HRM2_VIBRATO": {
      "id": "HRM2_VIBRATO",
      "byteOffset": 63,
      "byteLength": 1,
      "description": "Hrm2 Vibrato",
      "dataRange": [
        -10,
        10
      ],
      "initValue": 0,
      "sysexOffset": 62,
      "lengthSysex": 1
    },
    "HRM2_APPROACH": {
      "id": "HRM2_APPROACH",
      "byteOffset": 64,
      "byteLength": 1,
      "description": "Hrm2 Method",
      "dataRange": [
        0,
        3
      ],
      "initValue": 1,
      "sysexOffset": 63,
      "lengthSysex": 1,
      "values": {
        "0": "SCALE1",
        "1": "SCALE2",
        "2": "CHORD1",
        "3": "CHORD2"
      }
    },
    "HRM2_FORMANT": {
      "id": "HRM2_FORMANT",
      "byteOffset": 65,
      "byteLength": 1,
      "description": "Hrm2 Formant",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 64,
      "lengthSysex": 1
    },
    "HRM2_TONE": {
      "id": "HRM2_TONE",
      "byteOffset": 66,
      "byteLength": 1,
      "description": "Hrm2 Tone",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 65,
      "lengthSysex": 1
    },
    "HRM2_MIDI2VOICE": {
      "id": "HRM2_MIDI2VOICE",
      "byteOffset": 67,
      "byteLength": 1,
      "description": "Hrm2 MIDI",
      "dataRange": [
        0,
        17
      ],
      "initValue": 17,
      "sysexOffset": 66,
      "lengthSysex": 1,
      "values": {
        "0": "Ch1",
        "1": "Ch2",
        "2": "Ch3",
        "3": "Ch4",
        "4": "Ch5",
        "5": "Ch6",
        "6": "Ch7",
        "7": "Ch8",
        "8": "Ch9",
        "9": "Ch10",
        "10": "Ch11",
        "11": "Ch12",
        "12": "Ch13",
        "13": "Ch14",
        "14": "Ch15",
        "15": "Ch16",
        "16": "RX",
        "17": "OFF"
      }
    },
    "HRM2_M2V_ZONE_LOWER": {
      "id": "HRM2_M2V_ZONE_LOWER",
      "byteOffset": 68,
      "byteLength": 1,
      "description": "Hrm2 Zone Lower",
      "dataRange": [
        0,
        103
      ],
      "initValue": 0,
      "sysexOffset": 67,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "HRM2_M2V_ZONE_UPPER": {
      "id": "HRM2_M2V_ZONE_UPPER",
      "byteOffset": 69,
      "byteLength": 1,
      "description": "Hrm2 Zone Upper",
      "dataRange": [
        0,
        103
      ],
      "initValue": 103,
      "sysexOffset": 68,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "HRM3_VOICE_AUTO": {
      "id": "HRM3_VOICE_AUTO",
      "byteOffset": 70,
      "byteLength": 1,
      "description": "Hrm3 Voice Auto",
      "dataRange": [
        0,
        11
      ],
      "initValue": 7,
      "sysexOffset": 69,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "UNISON",
        "2": "OCT-",
        "3": "LOWER",
        "4": "LOW",
        "5": "HIGH",
        "6": "HIGHER",
        "7": "OCT+",
        "8": "USER1",
        "9": "USER2",
        "10": "USER3",
        "11": "USER4"
      }
    },
    "HRM3_VOICE_MANUAL": {
      "id": "HRM3_VOICE_MANUAL",
      "byteOffset": 71,
      "byteLength": 1,
      "description": "Hrm3 Voice Manual",
      "dataRange": [
        0,
        15
      ],
      "initValue": 11,
      "sysexOffset": 70,
      "lengthSysex": 1,
      "values": {
        "0": "OFF",
        "1": "UNISON",
        "2": "OCT-",
        "3": "-6TH",
        "4": "-5TH",
        "5": "-4TH",
        "6": "-3RD",
        "7": "+3RD",
        "8": "+4TH",
        "9": "+5TH",
        "10": "+6TH",
        "11": "OCT+",
        "12": "USER1",
        "13": "USER2",
        "14": "USER3",
        "15": "USER4"
      }
    },
    "HRM3_PAN": {
      "id": "HRM3_PAN",
      "byteOffset": 72,
      "byteLength": 1,
      "description": "Hrm3 Pan",
      "dataRange": [
        -64,
        63
      ],
      "initValue": 0,
      "sysexOffset": 71,
      "lengthSysex": 1
    },
    "HRM3_LEVEL": {
      "id": "HRM3_LEVEL",
      "byteOffset": 73,
      "byteLength": 1,
      "description": "Hrm3 Level",
      "dataRange": [
        0,
        127
      ],
      "initValue": 100,
      "sysexOffset": 72,
      "lengthSysex": 1
    },
    "HRM3_DELAY": {
      "id": "HRM3_DELAY",
      "byteOffset": 74,
      "byteLength": 1,
      "description": "Hrm3 Delay",
      "dataRange": [
        0,
        10
      ],
      "initValue": 0,
      "sysexOffset": 73,
      "lengthSysex": 1
    },
    "HRM3_ACCURATE": {
      "id": "HRM3_ACCURATE",
      "byteOffset": 75,
      "byteLength": 1,
      "description": "Hrm3 Accuracy",
      "dataRange": [
        0,
        10
      ],
      "initValue": 10,
      "sysexOffset": 74,
      "lengthSysex": 1
    },
    "HRM3_VIBRATO": {
      "id": "HRM3_VIBRATO",
      "byteOffset": 76,
      "byteLength": 1,
      "description": "Hrm3 Vibrato",
      "dataRange": [
        -10,
        10
      ],
      "initValue": 0,
      "sysexOffset": 75,
      "lengthSysex": 1
    },
    "HRM3_APPROACH": {
      "id": "HRM3_APPROACH",
      "byteOffset": 77,
      "byteLength": 1,
      "description": "Hrm3 Method",
      "dataRange": [
        0,
        3
      ],
      "initValue": 1,
      "sysexOffset": 76,
      "lengthSysex": 1,
      "values": {
        "0": "SCALE1",
        "1": "SCALE2",
        "2": "CHORD1",
        "3": "CHORD2"
      }
    },
    "HRM3_FORMANT": {
      "id": "HRM3_FORMANT",
      "byteOffset": 78,
      "byteLength": 1,
      "description": "Hrm3 Formant",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 77,
      "lengthSysex": 1
    },
    "HRM3_TONE": {
      "id": "HRM3_TONE",
      "byteOffset": 79,
      "byteLength": 1,
      "description": "Hrm3 Tone",
      "dataRange": [
        -50,
        50
      ],
      "initValue": 0,
      "sysexOffset": 78,
      "lengthSysex": 1
    },
    "HRM3_MIDI2VOICE": {
      "id": "HRM3_MIDI2VOICE",
      "byteOffset": 80,
      "byteLength": 1,
      "description": "Hrm3 MIDI",
      "dataRange": [
        0,
        17
      ],
      "initValue": 17,
      "sysexOffset": 79,
      "lengthSysex": 1,
      "values": {
        "0": "Ch1",
        "1": "Ch2",
        "2": "Ch3",
        "3": "Ch4",
        "4": "Ch5",
        "5": "Ch6",
        "6": "Ch7",
        "7": "Ch8",
        "8": "Ch9",
        "9": "Ch10",
        "10": "Ch11",
        "11": "Ch12",
        "12": "Ch13",
        "13": "Ch14",
        "14": "Ch15",
        "15": "Ch16",
        "16": "RX",
        "17": "OFF"
      }
    },
    "HRM3_M2V_ZONE_LOWER": {
      "id": "HRM3_M2V_ZONE_LOWER",
      "byteOffset": 81,
      "byteLength": 1,
      "description": "Hrm3 Zone Lower",
      "dataRange": [
        0,
        103
      ],
      "initValue": 0,
      "sysexOffset": 80,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "HRM3_M2V_ZONE_UPPER": {
      "id": "HRM3_M2V_ZONE_UPPER",
      "byteOffset": 82,
      "byteLength": 1,
      "description": "Hrm3 Zone Upper",
      "dataRange": [
        0,
        103
      ],
      "initValue": 103,
      "sysexOffset": 81,
      "lengthSysex": 1,
      "values": {
        "0": "C1",
        "1": "Db1",
        "2": "D1",
        "3": "Eb1",
        "4": "E1",
        "5": "F1",
        "6": "F#1",
        "7": "G1",
        "8": "Ab1",
        "9": "A1",
        "10": "Bb1",
        "11": "B1",
        "12": "C2",
        "13": "Db2",
        "14": "D2",
        "15": "Eb2",
        "16": "E2",
        "17": "F2",
        "18": "F#2",
        "19": "G2",
        "20": "Ab2",
        "21": "A2",
        "22": "Bb2",
        "23": "B2",
        "24": "C3",
        "25": "Db3",
        "26": "D3",
        "27": "Eb3",
        "28": "E3",
        "29": "F3",
        "30": "F#3",
        "31": "G3",
        "32": "Ab3",
        "33": "A3",
        "34": "Bb3",
        "35": "B3",
        "36": "C4",
        "37": "Db4",
        "38": "D4",
        "39": "Eb4",
        "40": "E4",
        "41": "F4",
        "42": "F#4",
        "43": "G4",
        "44": "Ab4",
        "45": "A4",
        "46": "Bb4",
        "47": "B4",
        "48": "C5",
        "49": "Db5",
        "50": "D5",
        "51": "Eb5",
        "52": "E5",
        "53": "F5",
        "54": "F#5",
        "55": "G5",
        "56": "Ab5",
        "57": "A5",
        "58": "Bb5",
        "59": "B5",
        "60": "C6",
        "61": "Db6",
        "62": "D6",
        "63": "Eb6",
        "64": "E6",
        "65": "F6",
        "66": "F#6",
        "67": "G6",
        "68": "Ab6",
        "69": "A6",
        "70": "Bb6",
        "71": "B6",
        "72": "C7",
        "73": "Db7",
        "74": "D7",
        "75": "Eb7",
        "76": "E7",
        "77": "F7",
        "78": "F#7",
        "79": "G7",
        "80": "Ab7",
        "81": "A7",
        "82": "Bb7",
        "83": "B7",
        "84": "C8",
        "85": "Db8",
        "86": "D8",
        "87": "Eb8",
        "88": "E8",
        "89": "F8",
        "90": "F#8",
        "91": "G8",
        "92": "Ab8",
        "93": "A8",
        "94": "Bb8",
        "95": "B8",
        "96": "C9",
        "97": "Db9",
        "98": "D9",
        "99": "Eb9",
        "100": "E9",
        "101": "F9",
        "102": "F#9",
        "103": "G9"
      }
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 83,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "KNOB_ASGN": {
      "id": "KNOB_ASGN",
      "byteOffset": 84,
      "byteLength": 2,
      "description": "Knob Assign",
      "dataRange": [
        -32768,
        32767
      ],
      "initValue": -1,
      "sysexOffset": 82,
      "lengthSysex": 4
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 86,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "NAME_1": {
      "id": "NAME_1",
      "byteOffset": 88,
      "byteLength": 1,
      "description": "Patch Name 1",
      "dataRange": [
        32,
        127
      ],
      "initValue": 32,
      "sysexOffset": 86,
      "lengthSysex": 1
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 104,
      "byteLength": 24,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["VCLU"] = {
  "name": "VCLU",
  "description": "",
  "byteLength": 16,
  "sysexLength": 12,
  "parameters": {
    "USRINT_C": {
      "id": "USRINT_C",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "User Intv:C",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "lengthSysex": 1,
      "values": {
        "0": "-12(C)",
        "1": "-11(Db)",
        "2": "-10(D)",
        "3": "-9(Eb)",
        "4": "-8(E)",
        "5": "-7(F)",
        "6": "-6(F#)",
        "7": "-5(G)",
        "8": "-4(Ab)",
        "9": "-3(A)",
        "10": "-2(Bb)",
        "11": "-1(B)",
        "12": "0(C)",
        "13": "+1(Db)",
        "14": "+2(D)",
        "15": "+3(Eb)",
        "16": "+4(E)",
        "17": "+5(F)",
        "18": "+6(F#)",
        "19": "+7(G)",
        "20": "+8(Ab)",
        "21": "+9(A)",
        "22": "+10(Bb)",
        "23": "+11(B)",
        "24": "+12(C)"
      }
    },
    "USRINT_CS": {
      "id": "USRINT_CS",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "User Intv:Db",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1,
      "values": {
        "0": "-12(Db)",
        "1": "-11(D)",
        "2": "-10(Eb)",
        "3": "-9(E)",
        "4": "-8(F)",
        "5": "-7(F#)",
        "6": "-6(G)",
        "7": "-5(Ab)",
        "8": "-4(A)",
        "9": "-3(Bb)",
        "10": "-2(B)",
        "11": "-1(C)",
        "12": "0(Db)",
        "13": "+1(D)",
        "14": "+2(Eb)",
        "15": "+3(E)",
        "16": "+4(F)",
        "17": "+5(F#)",
        "18": "+6(G)",
        "19": "+7(Ab)",
        "20": "+8(A)",
        "21": "+9(Bb)",
        "22": "+10(B)",
        "23": "+11(C)",
        "24": "+12(Db)"
      }
    },
    "USRINT_D": {
      "id": "USRINT_D",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "User Intv:D",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1,
      "values": {
        "0": "-12(D)",
        "1": "-11(Eb)",
        "2": "-10(E)",
        "3": "-9(F)",
        "4": "-8(F#)",
        "5": "-7(G)",
        "6": "-6(Ab)",
        "7": "-5(A)",
        "8": "-4(Bb)",
        "9": "-3(B)",
        "10": "-2(C)",
        "11": "-1(Db)",
        "12": "0(D)",
        "13": "+1(Eb)",
        "14": "+2(E)",
        "15": "+3(F)",
        "16": "+4(F#)",
        "17": "+5(G)",
        "18": "+6(Ab)",
        "19": "+7(A)",
        "20": "+8(Bb)",
        "21": "+9(B)",
        "22": "+10(C)",
        "23": "+11(Db)",
        "24": "+12(D)"
      }
    },
    "USRINT_DS": {
      "id": "USRINT_DS",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "User Intv:Eb",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1,
      "values": {
        "0": "-12(Eb)",
        "1": "-11(E)",
        "2": "-10(F)",
        "3": "-9(F#)",
        "4": "-8(G)",
        "5": "-7(Ab)",
        "6": "-6(A)",
        "7": "-5(Bb)",
        "8": "-4(B)",
        "9": "-3(C)",
        "10": "-2(Db)",
        "11": "-1(D)",
        "12": "0(Eb)",
        "13": "+1(E)",
        "14": "+2(F)",
        "15": "+3(F#)",
        "16": "+4(G)",
        "17": "+5(Ab)",
        "18": "+6(A)",
        "19": "+7(Bb)",
        "20": "+8(B)",
        "21": "+9(C)",
        "22": "+10(Db)",
        "23": "+11(D)",
        "24": "+12(Eb)"
      }
    },
    "USRINT_E": {
      "id": "USRINT_E",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "User Intv:E",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1,
      "values": {
        "0": "-12(E)",
        "1": "-11(F)",
        "2": "-10(F#)",
        "3": "-9(G)",
        "4": "-8(Ab)",
        "5": "-7(A)",
        "6": "-6(Bb)",
        "7": "-5(B)",
        "8": "-4(C)",
        "9": "-3(Db)",
        "10": "-2(D)",
        "11": "-1(Eb)",
        "12": "0(E)",
        "13": "+1(F)",
        "14": "+2(F#)",
        "15": "+3(G)",
        "16": "+4(Ab)",
        "17": "+5(A)",
        "18": "+6(Bb)",
        "19": "+7(B)",
        "20": "+8(C)",
        "21": "+9(Db)",
        "22": "+10(D)",
        "23": "+11(Eb)",
        "24": "+12(E)"
      }
    },
    "USRINT_F": {
      "id": "USRINT_F",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "User Intv:F",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1,
      "values": {
        "0": "-12(F)",
        "1": "-11(F#)",
        "2": "-10(G)",
        "3": "-9(Ab)",
        "4": "-8(A)",
        "5": "-7(Bb)",
        "6": "-6(B)",
        "7": "-5(C)",
        "8": "-4(Db)",
        "9": "-3(D)",
        "10": "-2(Eb)",
        "11": "-1(E)",
        "12": "0(F)",
        "13": "+1(F#)",
        "14": "+2(G)",
        "15": "+3(Ab)",
        "16": "+4(A)",
        "17": "+5(Bb)",
        "18": "+6(B)",
        "19": "+7(C)",
        "20": "+8(Db)",
        "21": "+9(D)",
        "22": "+10(Eb)",
        "23": "+11(E)",
        "24": "+12(F)"
      }
    },
    "USRINT_FS": {
      "id": "USRINT_FS",
      "byteOffset": 6,
      "byteLength": 1,
      "description": "User Intv:Gb",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1,
      "values": {
        "0": "-12(F#)",
        "1": "-11(G)",
        "2": "-10(Ab)",
        "3": "-9(A)",
        "4": "-8(Bb)",
        "5": "-7(B)",
        "6": "-6(C)",
        "7": "-5(Db)",
        "8": "-4(D)",
        "9": "-3(Eb)",
        "10": "-2(E)",
        "11": "-1(F)",
        "12": "0(F#)",
        "13": "+1(G)",
        "14": "+2(Ab)",
        "15": "+3(A)",
        "16": "+4(Bb)",
        "17": "+5(B)",
        "18": "+6(C)",
        "19": "+7(Db)",
        "20": "+8(D)",
        "21": "+9(Eb)",
        "22": "+10(E)",
        "23": "+11(F)",
        "24": "+12(F#)"
      }
    },
    "USRINT_G": {
      "id": "USRINT_G",
      "byteOffset": 7,
      "byteLength": 1,
      "description": "User Intv:G",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1,
      "values": {
        "0": "-12(G)",
        "1": "-11(Ab)",
        "2": "-10(A)",
        "3": "-9(Bb)",
        "4": "-8(B)",
        "5": "-7(C)",
        "6": "-6(Db)",
        "7": "-5(D)",
        "8": "-4(Eb)",
        "9": "-3(E)",
        "10": "-2(F)",
        "11": "-1(F#)",
        "12": "0(G)",
        "13": "+1(Ab)",
        "14": "+2(A)",
        "15": "+3(Bb)",
        "16": "+4(B)",
        "17": "+5(C)",
        "18": "+6(Db)",
        "19": "+7(D)",
        "20": "+8(Eb)",
        "21": "+9(E)",
        "22": "+10(F)",
        "23": "+11(Gb)",
        "24": "+12(G)"
      }
    },
    "USRINT_GS": {
      "id": "USRINT_GS",
      "byteOffset": 8,
      "byteLength": 1,
      "description": "User Intv:Ab",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1,
      "values": {
        "0": "-12(Ab)",
        "1": "-11(A)",
        "2": "-10(Bb)",
        "3": "-9(B)",
        "4": "-8(C)",
        "5": "-7(Db)",
        "6": "-6(D)",
        "7": "-5(Eb)",
        "8": "-4(E)",
        "9": "-3(F)",
        "10": "-2(F#)",
        "11": "-1(G)",
        "12": "0(Ab)",
        "13": "+1(A)",
        "14": "+2(Bb)",
        "15": "+3(B)",
        "16": "+4(C)",
        "17": "+5(Db)",
        "18": "+6(D)",
        "19": "+7(Eb)",
        "20": "+8(E)",
        "21": "+9(F)",
        "22": "+10(Gb)",
        "23": "+11(G)",
        "24": "+12(Ab)"
      }
    },
    "USRINT_A": {
      "id": "USRINT_A",
      "byteOffset": 9,
      "byteLength": 1,
      "description": "User Intv:A",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "values": {
        "0": "-12(A)",
        "1": "-11(Bb)",
        "2": "-10(B)",
        "3": "-9(C)",
        "4": "-8(Db)",
        "5": "-7(D)",
        "6": "-6(Eb)",
        "7": "-5(E)",
        "8": "-4(F)",
        "9": "-3(F#)",
        "10": "-2(G)",
        "11": "-1(Ab)",
        "12": "0(A)",
        "13": "+1(Bb)",
        "14": "+2(B)",
        "15": "+3(C)",
        "16": "+4(Db)",
        "17": "+5(D)",
        "18": "+6(Eb)",
        "19": "+7(E)",
        "20": "+8(F)",
        "21": "+9(Gb)",
        "22": "+10(G)",
        "23": "+11(Ab)",
        "24": "+12(A)"
      }
    },
    "USRINT_AS": {
      "id": "USRINT_AS",
      "byteOffset": 10,
      "byteLength": 1,
      "description": "User Intv:Bb",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "values": {
        "0": "-12(Bb)",
        "1": "-11(B)",
        "2": "-10(C)",
        "3": "-9(Db)",
        "4": "-8(D)",
        "5": "-7(Eb)",
        "6": "-6(E)",
        "7": "-5(F)",
        "8": "-4(F#)",
        "9": "-3(G)",
        "10": "-2(Ab)",
        "11": "-1(A)",
        "12": "0(Bb)",
        "13": "+1(B)",
        "14": "+2(C)",
        "15": "+3(Db)",
        "16": "+4(D)",
        "17": "+5(Eb)",
        "18": "+6(E)",
        "19": "+7(F)",
        "20": "+8(F#)",
        "21": "+9(G)",
        "22": "+10(Ab)",
        "23": "+11(A)",
        "24": "+12(Bb)"
      }
    },
    "USRINT_B": {
      "id": "USRINT_B",
      "byteOffset": 11,
      "byteLength": 1,
      "description": "User Intv:B",
      "dataRange": [
        -12,
        12
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "-12(B)",
        "1": "-11(C)",
        "2": "-10(Db)",
        "3": "-9(D)",
        "4": "-8(Eb)",
        "5": "-7(E)",
        "6": "-6(F)",
        "7": "-5(F#)",
        "8": "-4(G)",
        "9": "-3(Ab)",
        "10": "-2(A)",
        "11": "-1(Bb)",
        "12": "0(B)",
        "13": "+1(C)",
        "14": "+2(Db)",
        "15": "+3(D)",
        "16": "+4(Eb)",
        "17": "+5(E)",
        "18": "+6(F)",
        "19": "+7(F#)",
        "20": "+8(G)",
        "21": "+9(Ab)",
        "22": "+10(A)",
        "23": "+11(Bb)",
        "24": "+12(B)"
      }
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 12,
      "byteLength": 4,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["VOCAL_SEQ_DATA"] = {
  "name": "VOCAL_SEQ_DATA",
  "description": "",
  "byteLength": 12,
  "sysexLength": 18,
  "parameters": {
    "START_TICK": {
      "id": "START_TICK",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "Start Tick",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 0,
      "lengthSysex": 4
    },
    "LENG_TICK": {
      "id": "LENG_TICK",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "Length Tick",
      "dataRange": [
        0,
        2147483647
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 4
    },
    "TAKE_ID": {
      "id": "TAKE_ID",
      "byteOffset": 4,
      "byteLength": 1,
      "description": "Take ID",
      "dataRange": [
        -1,
        15
      ],
      "initValue": -1,
      "sysexOffset": 8,
      "lengthSysex": 1
    },
    "MUTE_FLG": {
      "id": "MUTE_FLG",
      "byteOffset": 5,
      "byteLength": 1,
      "description": "Mute Flag",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1
    },
    "NEXT_SEQ": {
      "id": "NEXT_SEQ",
      "byteOffset": 6,
      "byteLength": 2,
      "description": "Next Seq",
      "dataRange": [
        -1,
        511
      ],
      "initValue": -1,
      "sysexOffset": 10,
      "lengthSysex": 4
    },
    "PREV_SEQ": {
      "id": "PREV_SEQ",
      "byteOffset": 8,
      "byteLength": 2,
      "description": "Prev Seq",
      "dataRange": [
        -1,
        511
      ],
      "initValue": -1,
      "sysexOffset": 14,
      "lengthSysex": 4
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 10,
      "byteLength": 2,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["VOCAL_SEQ"] = {
  "name": "VOCAL_SEQ",
  "description": "",
  "byteLength": 12,
  "sysexLength": 8,
  "parameters": {
    "BEGIN_SEQ": {
      "id": "BEGIN_SEQ",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "Begin Seq",
      "dataRange": [
        -1,
        511
      ],
      "initValue": -1,
      "lengthSysex": 4
    },
    "NUM_SEQ": {
      "id": "NUM_SEQ",
      "byteOffset": 2,
      "byteLength": 2,
      "description": "Num of Seq",
      "dataRange": [
        0,
        512
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 4
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 4,
      "byteLength": 8,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["ZB_CC"] = {
  "name": "ZB_CC",
  "description": "",
  "byteLength": 93,
  "sysexLength": 58,
  "parameters": {
    "SYS_WRITE": {
      "id": "SYS_WRITE",
      "byteOffset": 0,
      "byteLength": 1,
      "description": "System Write",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "lengthSysex": 1
    },
    "PRJ_WRITE": {
      "id": "PRJ_WRITE",
      "byteOffset": 1,
      "byteLength": 1,
      "description": "Project Write",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 1,
      "lengthSysex": 1
    },
    "SYS_LOCK": {
      "id": "SYS_LOCK",
      "byteOffset": 2,
      "byteLength": 1,
      "description": "System Lock",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 2,
      "lengthSysex": 1
    },
    "ACTIVATE": {
      "id": "ACTIVATE",
      "byteOffset": 3,
      "byteLength": 1,
      "description": "Activate_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 3,
      "lengthSysex": 1
    },
    "PADDING1": {
      "id": "PADDING1",
      "byteOffset": 4,
      "byteLength": 12,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "IS_PLAY": {
      "id": "IS_PLAY",
      "byteOffset": 16,
      "byteLength": 1,
      "description": "IsPlaying_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 4,
      "lengthSysex": 1
    },
    "DISP_MSG": {
      "id": "DISP_MSG",
      "byteOffset": 17,
      "byteLength": 1,
      "description": "Disp Message_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 5,
      "lengthSysex": 1
    },
    "GET_VER": {
      "id": "GET_VER",
      "byteOffset": 18,
      "byteLength": 1,
      "description": "Get Version_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 6,
      "lengthSysex": 1
    },
    "RX_EDIT": {
      "id": "RX_EDIT",
      "byteOffset": 19,
      "byteLength": 1,
      "description": "RX EDIT_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 7,
      "lengthSysex": 1
    },
    "PADDING2": {
      "id": "PADDING2",
      "byteOffset": 20,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "CHG_PRJ": {
      "id": "CHG_PRJ",
      "byteOffset": 21,
      "byteLength": 1,
      "description": "Changed Project",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 8,
      "lengthSysex": 1
    },
    "PADDING3": {
      "id": "PADDING3",
      "byteOffset": 22,
      "byteLength": 10,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SEL_CLIP": {
      "id": "SEL_CLIP",
      "byteOffset": 32,
      "byteLength": 1,
      "description": "Select Clip",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 9,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "SEL_TRACK": {
      "id": "SEL_TRACK",
      "byteOffset": 33,
      "byteLength": 1,
      "description": "Select Track",
      "dataRange": [
        0,
        7
      ],
      "initValue": 0,
      "sysexOffset": 10,
      "lengthSysex": 1,
      "values": {
        "0": "KICK",
        "1": "SNARE",
        "2": "HIHAT",
        "3": "KIT",
        "4": "BASS",
        "5": "INST1",
        "6": "INST2",
        "7": "VOCAL"
      }
    },
    "PRV_CLIP_SW": {
      "id": "PRV_CLIP_SW",
      "byteOffset": 34,
      "byteLength": 1,
      "description": "Preview Clip Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 11,
      "lengthSysex": 1,
      "values": {
        "0": "STOP",
        "1": "PLAY"
      }
    },
    "PRV_CLIP": {
      "id": "PRV_CLIP",
      "byteOffset": 35,
      "byteLength": 1,
      "description": "Preview Clip",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 12,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "PRV_SCT_SW": {
      "id": "PRV_SCT_SW",
      "byteOffset": 36,
      "byteLength": 1,
      "description": "Preview Section Sw",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 13,
      "lengthSysex": 1,
      "values": {
        "0": "STOP",
        "1": "PLAY"
      }
    },
    "PRV_SCT": {
      "id": "PRV_SCT",
      "byteOffset": 37,
      "byteLength": 1,
      "description": "Preview Section",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 14,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "11",
        "11": "12",
        "12": "13",
        "13": "14",
        "14": "15",
        "15": "16"
      }
    },
    "CHG_MODE": {
      "id": "CHG_MODE",
      "byteOffset": 38,
      "byteLength": 1,
      "description": "Change Mode",
      "dataRange": [
        1,
        3
      ],
      "initValue": 1,
      "sysexOffset": 15,
      "lengthSysex": 1,
      "values": {
        "0": "SEQ",
        "1": "SECTION",
        "2": "SONG"
      }
    },
    "PADDING4": {
      "id": "PADDING4",
      "byteOffset": 39,
      "byteLength": 1,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "MUTE_BD": {
      "id": "MUTE_BD",
      "byteOffset": 40,
      "byteLength": 1,
      "description": "Mute BD",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 16,
      "lengthSysex": 1
    },
    "MUTE_SD": {
      "id": "MUTE_SD",
      "byteOffset": 41,
      "byteLength": 1,
      "description": "Mute SD",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 17,
      "lengthSysex": 1
    },
    "MUTE_HH": {
      "id": "MUTE_HH",
      "byteOffset": 42,
      "byteLength": 1,
      "description": "Mute HH",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 18,
      "lengthSysex": 1
    },
    "MUTE_KT": {
      "id": "MUTE_KT",
      "byteOffset": 43,
      "byteLength": 1,
      "description": "Mute KT",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 19,
      "lengthSysex": 1
    },
    "MUTE_BS": {
      "id": "MUTE_BS",
      "byteOffset": 44,
      "byteLength": 1,
      "description": "Mute BS",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 20,
      "lengthSysex": 1
    },
    "MUTE_I1": {
      "id": "MUTE_I1",
      "byteOffset": 45,
      "byteLength": 1,
      "description": "Mute I1",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 21,
      "lengthSysex": 1
    },
    "MUTE_I2": {
      "id": "MUTE_I2",
      "byteOffset": 46,
      "byteLength": 1,
      "description": "Mute I2",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 22,
      "lengthSysex": 1
    },
    "MUTE_VO": {
      "id": "MUTE_VO",
      "byteOffset": 47,
      "byteLength": 1,
      "description": "Mute VO",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 23,
      "lengthSysex": 1
    },
    "COPY_CLIP_SRC": {
      "id": "COPY_CLIP_SRC",
      "byteOffset": 48,
      "byteLength": 1,
      "description": "Copy Clip Src",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 24,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "COPY_CLIP_DST": {
      "id": "COPY_CLIP_DST",
      "byteOffset": 49,
      "byteLength": 1,
      "description": "Copy Clip Dst",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 25,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "COPY_SCT_SRC": {
      "id": "COPY_SCT_SRC",
      "byteOffset": 50,
      "byteLength": 1,
      "description": "Copy Section Src",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 26,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "11",
        "11": "12",
        "12": "13",
        "13": "14",
        "14": "15",
        "15": "16"
      }
    },
    "COPY_SCT_DST": {
      "id": "COPY_SCT_DST",
      "byteOffset": 51,
      "byteLength": 1,
      "description": "Copy Section Dst",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 27,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "11",
        "11": "12",
        "12": "13",
        "13": "14",
        "14": "15",
        "15": "16"
      }
    },
    "SWAP_CLIP_SRC": {
      "id": "SWAP_CLIP_SRC",
      "byteOffset": 52,
      "byteLength": 1,
      "description": "Swap Clip Src",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 28,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "SWAP_CLIP_DST": {
      "id": "SWAP_CLIP_DST",
      "byteOffset": 53,
      "byteLength": 1,
      "description": "Swap Clip Dst",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 29,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "SWAP_SCT_SRC": {
      "id": "SWAP_SCT_SRC",
      "byteOffset": 54,
      "byteLength": 1,
      "description": "Swap Section Src",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 30,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "11",
        "11": "12",
        "12": "13",
        "13": "14",
        "14": "15",
        "15": "16"
      }
    },
    "SWAP_SCT_DST": {
      "id": "SWAP_SCT_DST",
      "byteOffset": 55,
      "byteLength": 1,
      "description": "Swap Section Dst",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 31,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "11",
        "11": "12",
        "12": "13",
        "13": "14",
        "14": "15",
        "15": "16"
      }
    },
    "DEL_CLIP": {
      "id": "DEL_CLIP",
      "byteOffset": 56,
      "byteLength": 1,
      "description": "Delete Clip",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 32,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "DEL_SCT": {
      "id": "DEL_SCT",
      "byteOffset": 57,
      "byteLength": 1,
      "description": "Delete Section",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 33,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "11",
        "11": "12",
        "12": "13",
        "13": "14",
        "14": "15",
        "15": "16"
      }
    },
    "PADDING5": {
      "id": "PADDING5",
      "byteOffset": 58,
      "byteLength": 6,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "OPTIMIZE": {
      "id": "OPTIMIZE",
      "byteOffset": 64,
      "byteLength": 1,
      "description": "Optimize_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 34,
      "lengthSysex": 1
    },
    "SMP_FREE": {
      "id": "SMP_FREE",
      "byteOffset": 65,
      "byteLength": 1,
      "description": "Sample Free_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 35,
      "lengthSysex": 1
    },
    "NUMOF_FREE": {
      "id": "NUMOF_FREE",
      "byteOffset": 66,
      "byteLength": 1,
      "description": "Num Of Free_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 36,
      "lengthSysex": 1
    },
    "TONE_FREE": {
      "id": "TONE_FREE",
      "byteOffset": 67,
      "byteLength": 1,
      "description": "Tone Free_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 37,
      "lengthSysex": 1
    },
    "TONE_DEL": {
      "id": "TONE_DEL",
      "byteOffset": 68,
      "byteLength": 1,
      "description": "Tone Delete_not_use",
      "dataRange": [
        0,
        1
      ],
      "initValue": 0,
      "sysexOffset": 38,
      "lengthSysex": 1
    },
    "PADDING6": {
      "id": "PADDING6",
      "byteOffset": 69,
      "byteLength": 11,
      "description": "__padding",
      "dataRange": [
        0,
        0
      ],
      "initValue": null,
      "isPadding": true,
      "lengthSysex": 0
    },
    "SET_TONE_CLIP": {
      "id": "SET_TONE_CLIP",
      "byteOffset": 80,
      "byteLength": 1,
      "description": "Set Tone Clip",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 39,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "SET_TONE_BANK": {
      "id": "SET_TONE_BANK",
      "byteOffset": 81,
      "byteLength": 1,
      "description": "Set Tone Bank",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 40,
      "lengthSysex": 1
    },
    "SET_TONE_NUM": {
      "id": "SET_TONE_NUM",
      "byteOffset": 82,
      "byteLength": 2,
      "description": "Set Tone Number",
      "dataRange": [
        0,
        8192
      ],
      "initValue": 0,
      "sysexOffset": 41,
      "lengthSysex": 4
    },
    "SET_KIT_CLIP": {
      "id": "SET_KIT_CLIP",
      "byteOffset": 84,
      "byteLength": 1,
      "description": "Set Kit Clip",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 45,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "SET_KIT_BANK": {
      "id": "SET_KIT_BANK",
      "byteOffset": 85,
      "byteLength": 1,
      "description": "Set Kit Bank",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 46,
      "lengthSysex": 1
    },
    "SET_KIT_NUM": {
      "id": "SET_KIT_NUM",
      "byteOffset": 86,
      "byteLength": 2,
      "description": "Set Kit Number",
      "dataRange": [
        0,
        8192
      ],
      "initValue": 0,
      "sysexOffset": 47,
      "lengthSysex": 4
    },
    "SET_INST_CLIP": {
      "id": "SET_INST_CLIP",
      "byteOffset": 88,
      "byteLength": 1,
      "description": "Set Inst Clip",
      "dataRange": [
        0,
        111
      ],
      "initValue": 0,
      "sysexOffset": 51,
      "lengthSysex": 1,
      "values": {
        "0": "KC1",
        "1": "KC2",
        "2": "KC3",
        "3": "KC4",
        "4": "KC5",
        "5": "KC6",
        "6": "KC7",
        "7": "KC8",
        "8": "KC9",
        "9": "KC10",
        "10": "KC11",
        "11": "KC12",
        "12": "KC13",
        "13": "KC14",
        "14": "KC15",
        "15": "KC16",
        "16": "SN1",
        "17": "SN2",
        "18": "SN3",
        "19": "SN4",
        "20": "SN5",
        "21": "SN6",
        "22": "SN7",
        "23": "SN8",
        "24": "SN9",
        "25": "SN10",
        "26": "SN11",
        "27": "SN12",
        "28": "SN13",
        "29": "SN14",
        "30": "SN15",
        "31": "SN16",
        "32": "HH1",
        "33": "HH2",
        "34": "HH3",
        "35": "HH4",
        "36": "HH5",
        "37": "HH6",
        "38": "HH7",
        "39": "HH8",
        "40": "HH9",
        "41": "HH10",
        "42": "HH11",
        "43": "HH12",
        "44": "HH13",
        "45": "HH14",
        "46": "HH15",
        "47": "HH16",
        "48": "KT1",
        "49": "KT2",
        "50": "KT3",
        "51": "KT4",
        "52": "KT5",
        "53": "KT6",
        "54": "KT7",
        "55": "KT8",
        "56": "KT9",
        "57": "KT10",
        "58": "KT11",
        "59": "KT12",
        "60": "KT13",
        "61": "KT14",
        "62": "KT15",
        "63": "KT16",
        "64": "BS1",
        "65": "BS2",
        "66": "BS3",
        "67": "BS4",
        "68": "BS5",
        "69": "BS6",
        "70": "BS7",
        "71": "BS8",
        "72": "BS9",
        "73": "BS10",
        "74": "BS11",
        "75": "BS12",
        "76": "BS13",
        "77": "BS14",
        "78": "BS15",
        "79": "BS16",
        "80": "I11",
        "81": "I12",
        "82": "I13",
        "83": "I14",
        "84": "I15",
        "85": "I16",
        "86": "I17",
        "87": "I18",
        "88": "I19",
        "89": "I110",
        "90": "I111",
        "91": "I112",
        "92": "I113",
        "93": "I114",
        "94": "I115",
        "95": "I116",
        "96": "I21",
        "97": "I22",
        "98": "I23",
        "99": "I24",
        "100": "I25",
        "101": "I26",
        "102": "I27",
        "103": "I28",
        "104": "I29",
        "105": "I210",
        "106": "I211",
        "107": "I212",
        "108": "I213",
        "109": "I214",
        "110": "I215",
        "111": "I216"
      }
    },
    "SET_INST_PAD": {
      "id": "SET_INST_PAD",
      "byteOffset": 89,
      "byteLength": 1,
      "description": "Set Inst Pad",
      "dataRange": [
        0,
        15
      ],
      "initValue": 0,
      "sysexOffset": 52,
      "lengthSysex": 1,
      "values": {
        "0": "1",
        "1": "2",
        "2": "3",
        "3": "4",
        "4": "5",
        "5": "6",
        "6": "7",
        "7": "8",
        "8": "9",
        "9": "10",
        "10": "11",
        "11": "12",
        "12": "13",
        "13": "14",
        "14": "15",
        "15": "16"
      }
    },
    "SET_INST_BANK": {
      "id": "SET_INST_BANK",
      "byteOffset": 90,
      "byteLength": 1,
      "description": "Set Inst Bank",
      "dataRange": [
        0,
        99
      ],
      "initValue": 0,
      "sysexOffset": 53,
      "lengthSysex": 1
    },
    "SET_INST_NUM": {
      "id": "SET_INST_NUM",
      "byteOffset": 91,
      "byteLength": 2,
      "description": "Set Inst Number",
      "dataRange": [
        0,
        8192
      ],
      "initValue": 0,
      "sysexOffset": 54,
      "lengthSysex": 4
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["ZB_IN"] = {
  "name": "ZB_IN",
  "description": "",
  "byteLength": 2,
  "sysexLength": 4,
  "parameters": {
    "GET_INDEX_NOTE": {
      "id": "GET_INDEX_NOTE",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "Get Index Note",
      "dataRange": [
        0,
        2048
      ],
      "initValue": 0,
      "lengthSysex": 4
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["ZB_TN"] = {
  "name": "ZB_TN",
  "description": "",
  "byteLength": 2,
  "sysexLength": 4,
  "parameters": {
    "GET_TOTAL_NOTE": {
      "id": "GET_TOTAL_NOTE",
      "byteOffset": 0,
      "byteLength": 2,
      "description": "Get Total Note",
      "dataRange": [
        0,
        2048
      ],
      "initValue": 0,
      "lengthSysex": 4
    }
  },
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["Sys"] = {
  "name": "Sys",
  "parameters": {
    "SC": {
      "blockName": "SC",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 256,
      "byteLength": 256,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SC"]
    },
    "SPATH": {
      "blockName": "SPATH",
      "count": 1,
      "byteOffset": 256,
      "blockByteLength": 256,
      "byteLength": 256,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 256,
      "block": ZenProperties["SPATH"]
    }
  },
  "byteLength": 512,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["Proj"] = {
  "name": "Proj",
  "parameters": {
    "PJC": {
      "blockName": "PJC",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 369,
      "byteLength": 369,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 512,
      "block": ZenProperties["PJC"]
    },
    "PJC2": {
      "blockName": "PJC2",
      "count": 1,
      "byteOffset": 369,
      "blockByteLength": 134,
      "byteLength": 134,
      "sysexOffset": "00 04 00",
      "sysexItemSize": 512,
      "block": ZenProperties["PJC2"]
    },
    "PJT": {
      "blockName": "PJT",
      "count": 8,
      "byteOffset": 503,
      "blockByteLength": 256,
      "byteLength": 2048,
      "sysexOffset": "00 08 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PJT"]
    },
    "PEQ": {
      "blockName": "PEQ",
      "count": 8,
      "byteOffset": 2551,
      "blockByteLength": 12,
      "byteLength": 96,
      "sysexOffset": "00 10 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PEQ"]
    },
    "MFX": {
      "blockName": "MFX",
      "count": 3,
      "byteOffset": 2647,
      "blockByteLength": 84,
      "byteLength": 252,
      "sysexOffset": "00 18 00",
      "sysexItemSize": 256,
      "block": ZenProperties["MFX"]
    },
    "SH": {
      "blockName": "SH",
      "count": 1,
      "byteOffset": 2899,
      "blockByteLength": 48,
      "byteLength": 48,
      "sysexOffset": "00 1e 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SH"]
    },
    "SV": {
      "blockName": "SV",
      "count": 1,
      "byteOffset": 2947,
      "blockByteLength": 44,
      "byteLength": 44,
      "sysexOffset": "00 1f 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SV"]
    },
    "GLT": {
      "blockName": "GLT",
      "count": 1,
      "byteOffset": 2991,
      "blockByteLength": 64,
      "byteLength": 64,
      "sysexOffset": "00 20 00",
      "sysexItemSize": 128,
      "block": ZenProperties["GLT"]
    },
    "GLT2": {
      "blockName": "GLT2",
      "count": 16,
      "byteOffset": 3055,
      "blockByteLength": 76,
      "byteLength": 1216,
      "sysexOffset": "00 21 00",
      "sysexItemSize": 128,
      "block": ZenProperties["GLT2"]
    },
    "SEQ": {
      "blockName": "SEQ",
      "count": 1,
      "byteOffset": 4271,
      "blockByteLength": 16,
      "byteLength": 16,
      "sysexOffset": "00 31 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SEQ"]
    },
    "SCMP": {
      "blockName": "SCMP",
      "count": 1,
      "byteOffset": 4287,
      "blockByteLength": 24,
      "byteLength": 24,
      "sysexOffset": "00 32 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SCMP"]
    }
  },
  "byteLength": 4311,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["Clip"] = {
  "name": "Clip",
  "parameters": {
    "CLC": {
      "blockName": "CLC",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 128,
      "byteLength": 128,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 2048,
      "block": ZenProperties["CLC"]
    },
    "CLP": {
      "blockName": "CLP",
      "count": 1,
      "byteOffset": 128,
      "blockByteLength": 640,
      "byteLength": 640,
      "sysexOffset": "01 00 00",
      "sysexItemSize": 1024,
      "block": ZenProperties["CLP"]
    },
    "PHR": {
      "blockName": "PHR",
      "count": 1,
      "byteOffset": 768,
      "blockByteLength": 192,
      "byteLength": 192,
      "sysexOffset": "02 00 00",
      "sysexItemSize": 2048,
      "block": ZenProperties["PHR"]
    },
    "PHR_NT": {
      "blockName": "PHR_NT",
      "count": 128,
      "byteOffset": 960,
      "blockByteLength": 96,
      "byteLength": 12288,
      "sysexOffset": "03 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PHR_NT"]
    },
    "PHR_CC": {
      "blockName": "PHR_CC",
      "count": 128,
      "byteOffset": 13248,
      "blockByteLength": 64,
      "byteLength": 8192,
      "sysexOffset": "04 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PHR_CC"]
    },
    "PHR_BND": {
      "blockName": "PHR_BND",
      "count": 128,
      "byteOffset": 21440,
      "blockByteLength": 16,
      "byteLength": 2048,
      "sysexOffset": "05 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PHR_BND"]
    },
    "ARP": {
      "blockName": "ARP",
      "count": 1,
      "byteOffset": 23488,
      "blockByteLength": 128,
      "byteLength": 128,
      "sysexOffset": "06 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["ARP"]
    }
  },
  "byteLength": 23616,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["LOOP"] = {
  "name": "LOOP",
  "parameters": {
    "LOOP_CMN": {
      "blockName": "LOOP_CMN",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 124,
      "byteLength": 124,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["LOOP_CMN"]
    },
    "MFX": {
      "blockName": "MFX",
      "count": 1,
      "byteOffset": 124,
      "blockByteLength": 84,
      "byteLength": 84,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 256,
      "block": ZenProperties["MFX"]
    }
  },
  "byteLength": 208,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMR"] = {
  "name": "PCMR",
  "parameters": {
    "PCMR_CMN": {
      "blockName": "PCMR_CMN",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 28,
      "byteLength": 28,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMR_CMN"]
    },
    "MFX": {
      "blockName": "MFX",
      "count": 1,
      "byteOffset": 28,
      "blockByteLength": 84,
      "byteLength": 84,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 256,
      "block": ZenProperties["MFX"]
    },
    "RCMP": {
      "blockName": "RCMP",
      "count": 6,
      "byteOffset": 112,
      "blockByteLength": 8,
      "byteLength": 48,
      "sysexOffset": "00 10 00",
      "sysexItemSize": 128,
      "block": ZenProperties["RCMP"]
    },
    "PCMR_PTL": {
      "blockName": "PCMR_PTL",
      "count": 88,
      "byteOffset": 160,
      "blockByteLength": 20,
      "byteLength": 1760,
      "sysexOffset": "00 16 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMR_PTL"]
    },
    "PTL_EQ": {
      "blockName": "PTL_EQ",
      "count": 88,
      "byteOffset": 1920,
      "blockByteLength": 16,
      "byteLength": 1408,
      "sysexOffset": "00 6e 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_EQ"]
    }
  },
  "byteLength": 3328,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMRInst"] = {
  "name": "PCMRInst",
  "parameters": {
    "INST_CMN": {
      "blockName": "INST_CMN",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 152,
      "byteLength": 152,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["INST_CMN"]
    },
    "PTL_PENV": {
      "blockName": "PTL_PENV",
      "count": 1,
      "byteOffset": 152,
      "blockByteLength": 24,
      "byteLength": 24,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_PENV"]
    },
    "PTL_FENV": {
      "blockName": "PTL_FENV",
      "count": 1,
      "byteOffset": 176,
      "blockByteLength": 24,
      "byteLength": 24,
      "sysexOffset": "00 02 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_FENV"]
    },
    "PTL_AENV": {
      "blockName": "PTL_AENV",
      "count": 1,
      "byteOffset": 200,
      "blockByteLength": 16,
      "byteLength": 16,
      "sysexOffset": "00 03 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_AENV"]
    }
  },
  "byteLength": 216,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["PCMEX"] = {
  "name": "PCMEX",
  "parameters": {
    "PCMT_CMN": {
      "blockName": "PCMT_CMN",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 64,
      "byteLength": 64,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMT_CMN"]
    },
    "MFX": {
      "blockName": "MFX",
      "count": 1,
      "byteOffset": 64,
      "blockByteLength": 84,
      "byteLength": 84,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 256,
      "block": ZenProperties["MFX"]
    },
    "PCMT_PMT": {
      "blockName": "PCMT_PMT",
      "count": 1,
      "byteOffset": 148,
      "blockByteLength": 52,
      "byteLength": 52,
      "sysexOffset": "00 10 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMT_PMT"]
    },
    "PCMT_PTL": {
      "blockName": "PCMT_PTL",
      "count": 4,
      "byteOffset": 200,
      "blockByteLength": 124,
      "byteLength": 496,
      "sysexOffset": "00 20 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMT_PTL"]
    },
    "PTL_PENV": {
      "blockName": "PTL_PENV",
      "count": 4,
      "byteOffset": 696,
      "blockByteLength": 24,
      "byteLength": 96,
      "sysexOffset": "00 24 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_PENV"]
    },
    "PTL_FENV": {
      "blockName": "PTL_FENV",
      "count": 4,
      "byteOffset": 792,
      "blockByteLength": 24,
      "byteLength": 96,
      "sysexOffset": "00 28 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_FENV"]
    },
    "PTL_AENV": {
      "blockName": "PTL_AENV",
      "count": 4,
      "byteOffset": 888,
      "blockByteLength": 16,
      "byteLength": 64,
      "sysexOffset": "00 2c 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_AENV"]
    },
    "PTL_LFO": {
      "blockName": "PTL_LFO",
      "count": 4,
      "byteOffset": 952,
      "blockByteLength": 104,
      "byteLength": 416,
      "sysexOffset": "00 30 00",
      "sysexItemSize": 256,
      "block": ZenProperties["PTL_LFO"]
    },
    "PTL_EQ": {
      "blockName": "PTL_EQ",
      "count": 4,
      "byteOffset": 1368,
      "blockByteLength": 16,
      "byteLength": 64,
      "sysexOffset": "00 38 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PTL_EQ"]
    },
    "PCMS_CMN": {
      "blockName": "PCMS_CMN",
      "count": 1,
      "byteOffset": 1432,
      "blockByteLength": 20,
      "byteLength": 20,
      "sysexOffset": "00 3c 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMS_CMN"]
    },
    "PCMS_PMT": {
      "blockName": "PCMS_PMT",
      "count": 1,
      "byteOffset": 1452,
      "blockByteLength": 36,
      "byteLength": 36,
      "sysexOffset": "00 3d 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMS_PMT"]
    },
    "PCMS_PTL": {
      "blockName": "PCMS_PTL",
      "count": 4,
      "byteOffset": 1488,
      "blockByteLength": 36,
      "byteLength": 144,
      "sysexOffset": "00 3e 00",
      "sysexItemSize": 128,
      "block": ZenProperties["PCMS_PTL"]
    }
  },
  "byteLength": 1632,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["UserSample"] = {
  "name": "UserSample",
  "parameters": {
    "UserSampleCmn": {
      "blockName": "UserSampleCmn",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 64,
      "byteLength": 64,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["UserSampleCmn"]
    },
    "UserSampleModify": {
      "blockName": "UserSampleModify",
      "count": 1,
      "byteOffset": 64,
      "blockByteLength": 14,
      "byteLength": 14,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 128,
      "block": ZenProperties["UserSampleModify"]
    }
  },
  "byteLength": 78,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["MultiSample"] = {
  "name": "MultiSample",
  "parameters": {
    "MSMP_CMN": {
      "blockName": "MSMP_CMN",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 16,
      "byteLength": 16,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["MSMP_CMN"]
    },
    "MSMP_SPLT": {
      "blockName": "MSMP_SPLT",
      "count": 128,
      "byteOffset": 16,
      "blockByteLength": 4,
      "byteLength": 512,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 128,
      "block": ZenProperties["MSMP_SPLT"]
    }
  },
  "byteLength": 528,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["MVProj"] = {
  "name": "MVProj",
  "parameters": {
    "SCT": {
      "blockName": "SCT",
      "count": 16,
      "byteOffset": 0,
      "blockByteLength": 64,
      "byteLength": 1024,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SCT"]
    },
    "SNG_CMN": {
      "blockName": "SNG_CMN",
      "count": 1,
      "byteOffset": 1024,
      "blockByteLength": 64,
      "byteLength": 64,
      "sysexOffset": "00 10 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SNG_CMN"]
    },
    "SNG": {
      "blockName": "SNG",
      "count": 99,
      "byteOffset": 1088,
      "blockByteLength": 16,
      "byteLength": 1584,
      "sysexOffset": "00 11 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SNG"]
    },
    "VCLP": {
      "blockName": "VCLP",
      "count": 1,
      "byteOffset": 2672,
      "blockByteLength": 128,
      "byteLength": 128,
      "sysexOffset": "00 74 00",
      "sysexItemSize": 128,
      "block": ZenProperties["VCLP"]
    },
    "VCLU": {
      "blockName": "VCLU",
      "count": 4,
      "byteOffset": 2800,
      "blockByteLength": 16,
      "byteLength": 64,
      "sysexOffset": "00 75 00",
      "sysexItemSize": 128,
      "block": ZenProperties["VCLU"]
    },
    "KBDARP": {
      "blockName": "KBDARP",
      "count": 1,
      "byteOffset": 2864,
      "blockByteLength": 12,
      "byteLength": 12,
      "sysexOffset": "00 79 00",
      "sysexItemSize": 128,
      "block": ZenProperties["KBDARP"]
    },
    "TAKE": {
      "blockName": "TAKE",
      "count": 16,
      "byteOffset": 2876,
      "blockByteLength": 28,
      "byteLength": 448,
      "sysexOffset": "00 7a 00",
      "sysexItemSize": 128,
      "block": ZenProperties["TAKE"]
    },
    "VOCAL_SEQ": {
      "blockName": "VOCAL_SEQ",
      "count": 1,
      "byteOffset": 3324,
      "blockByteLength": 12,
      "byteLength": 12,
      "sysexOffset": "01 0a 00",
      "sysexItemSize": 128,
      "block": ZenProperties["VOCAL_SEQ"]
    },
    "VOCAL_SEQ_DATA": {
      "blockName": "VOCAL_SEQ_DATA",
      "count": 128,
      "byteOffset": 3336,
      "blockByteLength": 12,
      "byteLength": 1536,
      "sysexOffset": "01 0b 00",
      "sysexItemSize": 128,
      "block": ZenProperties["VOCAL_SEQ_DATA"]
    },
    "SLIM": {
      "blockName": "SLIM",
      "count": 1,
      "byteOffset": 4872,
      "blockByteLength": 12,
      "byteLength": 12,
      "sysexOffset": "02 0b 00",
      "sysexItemSize": 128,
      "block": ZenProperties["SLIM"]
    },
    "TCMP": {
      "blockName": "TCMP",
      "count": 7,
      "byteOffset": 4884,
      "blockByteLength": 12,
      "byteLength": 84,
      "sysexOffset": "02 0c 00",
      "sysexItemSize": 128,
      "block": ZenProperties["TCMP"]
    }
  },
  "byteLength": 4968,
  "category": "Autogenerated: mv_1_180_A"
};

ZenProperties["Ctrl"] = {
  "name": "Ctrl",
  "parameters": {
    "ZB_CC": {
      "blockName": "ZB_CC",
      "count": 1,
      "byteOffset": 0,
      "blockByteLength": 93,
      "byteLength": 93,
      "sysexOffset": "00 00 00",
      "sysexItemSize": 128,
      "block": ZenProperties["ZB_CC"]
    },
    "ZB_TN": {
      "blockName": "ZB_TN",
      "count": 1,
      "byteOffset": 93,
      "blockByteLength": 2,
      "byteLength": 2,
      "sysexOffset": "00 01 00",
      "sysexItemSize": 128,
      "block": ZenProperties["ZB_TN"]
    },
    "ZB_IN": {
      "blockName": "ZB_IN",
      "count": 1,
      "byteOffset": 95,
      "blockByteLength": 2,
      "byteLength": 2,
      "sysexOffset": "00 02 00",
      "sysexItemSize": 128,
      "block": ZenProperties["ZB_IN"]
    }
  },
  "byteLength": 97,
  "category": "Autogenerated: mv_1_180_A"
};

export default ZenProperties;
