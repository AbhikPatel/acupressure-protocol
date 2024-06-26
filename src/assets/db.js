const folders = [
    {
        id: 1,
        folderName: "Heart"
    },
    {
        id: 2,
        folderName: "Small Intestine"
    },
    {
        id: 3,
        folderName: "Urinary Bladder"
    },
    {
        id: 4,
        folderName: "Kidney"
    },
    {
        id: 5,
        folderName: "Paricardium"
    },
    {
        id: 6,
        folderName: "TW"
    },
    {
        id: 7,
        folderName: "Liver"
    },
    {
        id: 8,
        folderName: "Gall Bladder"
    },
    {
        id: 9,
        folderName: "Lungs"
    },
    {
        id: 10,
        folderName: "Large Intestine"
    },
    {
        id: 11,
        folderName: "Stomach"
    },
    {
        id: 12,
        folderName: "Spleen"
    }
]

const protocolsDB = [
    {
        id: 100,
        folder_id: 1,
        name: "Heart Qi Deficiency",
        points: "P6, H5, Cv6, Ub15, Cv17 ⬆",
        count: 5,
        comment: null
    },
    {
        id: 101,
        folder_id: 1,
        name: "Heart Yang Deficiency ",
        points: "P6, H5, 7, 9 Cv6, 17, Ub15, Gv14 ⬆",
        count: 8,
        comment: null
    },
    {
        id: 102,
        folder_id: 1,
        name: "Heart Yang collapse",
        points: "P6, Cv6, 4, 8, Gv4, 14, 20, Ub15, 23, St36 ⬆ ",
        count: 10,
        comment: null
    },
    {
        id: 103,
        folder_id: 1,
        name: "Heart Blood Deficiency ",
        points: "P6, Cv4, 14, 15, H7, Ub17, 20 ⬆",
        count: 7,
        comment: null
    },
    {
        id: 104,
        folder_id: 1,
        name: "Heart Yin Deficiency ",
        points: "P6, H6, 7, 8, Sp6, K6, 7, Cv4, 14, 15, Lu7 ⬆",
        count: 11,
        comment: null
    },
    {
        id: 105,
        folder_id: 1,
        name: "Heart fire blazing ",
        points: "Sp6, K6, ⬆ H7 ,8 ,9, Cv15 ⬇",
        count: 6,
        comment: null
    },
    {
        id: 106,
        folder_id: 1,
        name: "Phlegm fire in heart ",
        points: "H7, 8, 9 P5, 7, Cv15, St40, Sp6, Gv20, 24, Ub15, Liv2, 3, Gb13,15 ⬇ Ub20, Cv12 ⬆",
        count: 17,
        comment: null
    },
    {
        id: 107,
        folder_id: 1,
        name: "Phlegm misting the mind",
        points: "H9, P5, St40, Ub15, Gv26 ⬇ Cv12, Ub20 ⬆",
        count: 7,
        comment: null
    },
    {
        id: 108,
        folder_id: 1,
        name: "Heart Blood stagnation ",
        points: "P4, 6, H7, Cv17, Ub14, 17, K25, Sp10 ⬇",
        count: 8,
        comment: "on attack, on intervening Time"
    },
    {
        id: 109,
        folder_id: 2,
        name: "Small Intestine Heat excess",
        points: "H5, 8, Si2, 5, St39 ⬇",
        count: 5,
        comment: null
    },
    {
        id: 110,
        folder_id: 2,
        name: "Small Intestine Qi Excess pain",
        points: "St39, 29, 27, Cv6, Liv3, 13, Sp6, Gb34 ⬇",
        count: 8,
        comment: null
    },
    {
        id: 111,
        folder_id: 2,
        name: "Small Intestine Qi Stagnation/Appendicitis",
        points: "St25, 36.5, 39, Cv6, Gb34, Sp6, Liv3 ⬇",
        count: 7,
        comment: null
    },
    {
        id: 112,
        folder_id: 2,
        name: "Small Intestine worms ",
        points: "Li 4, 7, Si 4, 6, St42, 34",
        count: 6,
        comment: "Black Colour"
    },
    {
        id: 113,
        folder_id: 2,
        name: "Small Intestine Cold and Deficiency ",
        points: "St25, 36, 39, Cv6, Ub20, 27⬆",
        count: 6,
        comment: null
    },
    {
        id: 114,
        folder_id: 2,
        name: "Stasis of Blood in Small Intestine ",
        points: "Liv3, 13, 14, Gb34, Ub17, 18, Cv6, Sp10, P6, Tw6 (L&R) ⬇",
        count: 10,
        comment: null
    },
    {
        id: 115,
        folder_id: 3,
        name: "Urinary Bladder humid heat ",
        points: "Sp6, 9, Ub22, 28, Cv3, 4, Ub63, 66 ⬇",
        count: 8,
        comment: "Use kidney Yang after this in kidney stone"
    },
    {
        id: 116,
        folder_id: 3,
        name: "Urinary Bladder humid cold ",
        points: "Sp6, 9, Ub22, 28, 53, Cv3, 9, St28 ⬇",
        count: 8,
        comment: null
    },
    {
        id: 117,
        folder_id: 3,
        name: "Urinary Bladder Cold and Deficiency",
        points: "K3, 7, Ub23, 47, Cv4, 6, Gv4, Ub28 ⬆",
        count: 8,
        comment: null
    },
    {
        id: 118,
        folder_id: 3,
        name: "Stasis of Blood in Uterus ",
        points: "Liv3, 13, 14, Gb34, Ub17, 18, Cv6, Sp10, P6, Tw6 ⬇",
        count: 10,
        comment: null
    },
    {
        id: 119,
        folder_id: 4,
        name: "Kidney Yin Deficiency",
        points: "K3, 6, 9, 10, Sp6, Cv1, 4, Si3, UB62 ⬆ (9) Or, K3, St30, Sp6, Cv1, 2, 3 Gv1, Ub15, 23 ⬆",
        count: 9,
        comment: null
    },
    {
        id: 120,
        folder_id: 4,
        name: "Kidney Yang Deficiency",
        points: "K3, 7, Cv4, 6, Gv4, Ub23, 47 ⬆ (7)   Or St30, GV4, Cv6, Ub23 ⬆ (4)",
        comment: null
    },
    {
        id: 121,
        folder_id: 4,
        name: "Kidney Qi Deficiency ",
        points: "K3, Cv4, Gv4, Ub23, 47 (5) ⬆Or H4, K1, 2, 3, Gv4, Ub23, 47⬆ (7)",
        comment: null
    },
    {
        id: 122,
        folder_id: 4,
        name: "Kidney not receiving lung Qi",
        points: "K3, 6, 7, 25, Lu7, St36, Cv6, 17, Gv4, 12, Ub23 ⬆",
        count: 11,
        comment: null
    },
    {
        id: 123,
        folder_id: 4,
        name: "Kidney Essence Deficiency ",
        points: "K3, 6, Cv4, Gv4, 14, 20, Ub11, 15, 23, Gb39 (Right Side) ⬆",
        count: 10,
        comment: null
    },
    {
        id: 124,
        folder_id: 4,
        name: "Kidney Yang Deficiency causing Oedema",
        points: "Sp6, 9, St28, Ub22, Cv9 ⬇ K7, Gv4, Ub20, 23 ⬆ (9)  Add - heart swelling Gv14, Ub15 ⬆ lung Swelling- Lu7, Gv12, Ub13 ⬆",
        count: 9,
        comment: null
    },
    {
        id: 125,
        folder_id: 4,
        name: "Kidney Yin Deficiency causing empty heat",
        points: "K2, H5, Lu10 ⬇ K3, 6, 9, 10 Sp6, Lu7, Cv4 ⬆",
        count: 10,
        comment: null
    },
    {
        id: 126,
        folder_id: 4,
        name: "Kidney and liver Yin Deficiency",
        points: "K3, 6, Liv8, Cv4, Ub10, 17, 18, 20, 23, Gv20 ⬆",
        count: 10,
        comment: null
    },
    {
        id: 127,
        folder_id: 4,
        name: "Kidney and heart Yin Deficiency",
        points: "H5, 6, 7, P6, Ub15 ⬇ K3, 6, 9, 10, Cv4, Sp6 ⬆ Cv15, Gv24, Gb13 ⬇️",
        count: 14,
        comment: null
    },
    {
        id: 128,
        folder_id: 4,
        name: "Kidney and lung Yin Deficiency",
        points: "Lu1, 7, 9, K3, 6, Sp6, Cv4, Ub37 ⬆",
        count: 8,
        comment: null
    },
    {
        id: 129,
        folder_id: 4,
        name: "Kidney and spleen Yang Deficiency",
        points: "K3, 7, St25, 36, 37, Gv4, Ub20, 21, 23, 25, Cv6 ⬆",
        count: 11,
        comment: null
    },
    {
        id: 130,
        folder_id: 5,
        name: "Pericardium Deficiency ",
        points: "P6, Gv25, 26, Sp6, K3, 7, Liv13, Ub15, H7, Sp4 ⬆",
        count: 10,
        comment: null
    },
    {
        id: 131,
        folder_id: 5,
        name: "Pericardium excess energy ",
        points: " P3, 7, 8, Ub14 ⬇ Sp6 ⬆",
        count: 5,
        comment: null
    },
    {
        id: 132,
        folder_id: 5,
        name: "Pericardium & Tw Imbalance.",
        points: "Brain Deficits with stiff neck - P7⬆ Tw5⬇  Tw Deficits with chest pain - P6 ⬇",
        count: 3,
        comment: null
    },
    {
        id: 133,
        folder_id: 5,
        name: "Blocked heart Orfices",
        points: "P4, 7, 9 H6, 7, Lu9 ⬇",
        count: 6,
        comment: null
    },
    {
        id: 134,
        folder_id: 6,
        name: "Tw wind attack",
        points: "Tw5, Gb34, 41, Liv3 ⬇",
        count: 4,
        comment: null
    },
    {
        id: 135,
        folder_id: 6,
        name: "Upper warmer ",
        points: "Treat Lungs wind cold attack.",
        comment: null
    },
    {
        id: 136,
        folder_id: 6,
        name: "Middle warmer",
        points: "Tw4, St42 ⬇",
        count: 2,
        comment: null
    },
    {
        id: 137,
        folder_id: 6,
        name: "Lower warmer",
        points: "Tw4, Ub53, 64 ⬇",
        count: 3,
        comment: null
    },
    {
        id: 138,
        folder_id: 6,
        name: "Tw for knots, Fibro masses, Glands, Lymph glands, Swellings, Glands sweats, Tonsils",
        points: " Tw5, Tw10, Gb20, 21, 34, 41, Si3⬇",
        count: 7,
        comment: null
    },
    {
        id: 139,
        folder_id: 7,
        name: "Liver Blood Deficiency ",
        points: "Liv8, P6, Sp6, St36, Cv4, Ub17, 18, 20, 23⬆",
        count: 9,
        comment: null
    },
    {
        id: 140,
        folder_id: 7,
        name: "Liver Yin Deficiency Yang raising ",
        points: "Liv3, Tw5, Gb43, 38, 20, 6, 8, 9 ⬇ Liv8, Sp6, K3 ⬆",
        count: 12,
        comment: null
    },
    {
        id: 141,
        folder_id: 7,
        name: "Liver Qi stagnation",
        points: "Liv3, 13, 14, Gb34, Tw6, P6⬇",
        count: 6,
        comment: null
    },
    {
        id: 142,
        folder_id: 7,
        name: "Liver Blood stagnation ",
        points: "Liv3, Gb34, Ub17, 18, Cv6, Sp10 ⬇",
        count: 6,
        comment: null
    },
    {
        id: 143,
        folder_id: 7,
        name: "Liver heat raise upwards",
        points: "Liv2, 3, Gb13, 20 ⬇ (4) or Liv2, 3, Ub18, 19, Liv14 ⬇ Liv 8, Lu5 ⬆",
        count: 7,
        comment: null
    },
    {
        id: 144,
        folder_id: 7,
        name: "Liver internal wind generating verry high heat",
        points: "Liv2, 3, Si3, Gv16, 20, Gb20 ⬇",
        count: 6,
        comment: null
    },
    {
        id: 145,
        folder_id: 7,
        name: "Liver wind caused by liver Yang Raising ",
        points: "Liv3, Gb20, Gv16 ⬇ Liv8, Sp6, Ub18, k3, ⬆",
        count: 7,
        comment: null
    },
    {
        id: 146,
        folder_id: 7,
        name: "Humid heat in Liver & Gall Bladder",
        points: "Liv2, 14, Gb24, 34, Ub18, 19, Gv9, Sp3, 6, 9, Li11 ⬇ Cv12 ⬆ ",
        count: 12,
        comment: null
    },
    {
        id: 147,
        folder_id: 7,
        name: "Liver cold stagnation",
        points: "Liv1, 5, Cv3⬇",
        count: 3,
        comment: null
    },
    {
        id: 148,
        folder_id: 7,
        name: "Liver and kidney Yin Deficiency ",
        points: "K3, 6, Liv8, Cv4, Ub10, 17, 18, 20, 23, Gv20 ⬆",
        count: 10,
        comment: null
    },
    {
        id: 149,
        folder_id: 7,
        name: "Liver attacking spleen ",
        points: "Liv3, 13, 14, Gb34 ⬇ Sp6, St36, Cv6, 12⬆",
        count: 8,
        comment: null
    },
    {
        id: 150,
        folder_id: 7,
        name: "Liver attacking stomach ",
        points: "Liv13, 14, Gb34 ⬇ St36, Cv10, 13, Ub21 ⬆",
        count: 7,
        comment: null
    },
    {
        id: 151,
        folder_id: 7,
        name: "Liver attacking lungs ",
        points: "Liv2, 14 ⬇ Lu7, P6, Li11, Cv17, 22⬆",
        count: 7,
        comment: null
    },
    {
        id: 152,
        folder_id: 8,
        name: "Humid heat in Gall Bladder",
        points: "Gb24, 34 Liv14, Li11, Tw6, Gv9, Ub18, Ub19 ⬇ Cv12, Ub20 ⬆",
        count: 10,
        comment: null
    },
    {
        id: 153,
        folder_id: 8,
        name: "Gall Bladder Deficiency ",
        points: "Gb40, 35, 38, 39, 43, 44 ⬆",
        count: 6,
        comment: null
    },
    {
        id: 154,
        folder_id: 9,
        name: "Lungs Qi Deficiency ",
        points: "Lu7, 9, Ub13, Gv12, Cv6, St36 ⬆",
        count: 6,
        comment: null
    },
    {
        id: 155,
        folder_id: 9,
        name: "Lungs Yin Deficiency ",
        points: "Lu9, 10, Ub13,37, Cv4, 12, 17, Gv12, K6 ⬆",
        count: 9,
        comment: null
    },
    {
        id: 156,
        folder_id: 9,
        name: "Dryness due to Lungs",
        points: "Lu9, Sp6, K6, Cv4, 12 ⬆",
        count: 5,
        comment: null
    },
    {
        id: 157,
        folder_id: 9,
        name: "Lungs External wind cold attack",
        points: "Lu7, Li4, Ub12, Gv16, Cv17 ⬇",
        count: 5,
        comment: null
    },
    {
        id: 158,
        folder_id: 9,
        name: "Attack of External wind heat in lungs [Group 1]",
        points: "Lu11, Li4, 11, Gv14, Ub12, Gb20, Gv16 ⬇",
        count: 7,
        comment: null
    },
    {
        id: 159,
        folder_id: 9,
        name: "Attack of External wind heat in lungs [Group 2]",
        points: "Lu5, 6, 9 ⬇",
        count: 3,
        comment: null
    },
    {
        id: 160,
        folder_id: 9,
        name: "Attack of External wind on lungs",
        points: "Lu11, 7, Li4, 11, H5, Ub60 ⬇",
        count: 6,
        comment: null
    },
    {
        id: 161,
        folder_id: 9,
        name: "Attack of External wind, cold and damp on lungs",
        points: "Lu7, Li4, 6, 7, Ub12, 13, Cv9 ⬇",
        count: 7,
        comment: null
    },
    {
        id: 162,
        folder_id: 9,
        name: "Lungs Obstructed by Humid Phlegm",
        points: "P6, Lu1, 5, 7, St40, Ub13 ⬇ 20 ⬆, Cv9 ⬇ 12 ⬆,17, 22 ⬇",
        count: 11,
        comment: null
    },
    {
        id: 163,
        folder_id: 9,
        name: "Lungs Obstructed by Phlegm Heat",
        points: "Lu1, 5, 7, 10, Li4, 11, Ub13, St40, Lu5, 10 ⬇ Cv12⬆",
        count: 11,
        comment: null
    },
    {
        id: 164,
        folder_id: 9,
        name: "Lungs Obstructed by Phlegm Fluids",
        points: "Lu5, St40, Cv9 ⬇ Lu9, St36, Cv12, 17, Ub13, 37⬆",
        count: 9,
        comment: null
    },
    {
        id: 165,
        folder_id: 9,
        name: "Lungs Qi Stagnation in chest and Lungs ",
        points: "P6, Cv13, 12, 10, Lu7, 5, Ub13 ⬆",
        count: 7,
        comment: null
    },
    {
        id: 166,
        folder_id: 9,
        name: "Stasis of Blood in Lungs ",
        points: "P6, Lu1, 5, 7, 10, 11, St40, Cv9, 12, 17, 20, 21, Ub13, 20 Li11 ⬆",
        count: 15,
        comment: null
    },
    {
        id: 167,
        folder_id: 10,
        name: "Large Intestine  Dryness",
        points: "K6, Sp6, St36, Cv4 ⬆",
        count: 4,
        comment: null
    },
    {
        id: 168,
        folder_id: 10,
        name: "Large Intestine Coldness ",
        points: "St25, 36, 37, Cv4, 6, Ub20, 25 ⬆",
        count: 7,
        comment: null
    },
    {
        id: 169,
        folder_id: 10,
        name: "Large Intestine Collapse [Group 1]",
        points: "Sp3, Cv6, 1, St25, 36, Ub20, 21, Gv1,20 ⬆",
        count: 9,
        comment: null
    },
    {
        id: 170,
        folder_id: 10,
        name: "Large Intestine Collapse [Group 2]",
        points: "Sp2, St25, Ub25, Gb37 ⬆",
        count: 4,
        comment: null
    },
    {
        id: 171,
        folder_id: 10,
        name: "Large Intestine Collapse [Group 3]",
        points: "Sp6, Ub54, 57, Gb36, Tw6, Liv 3, K4, 6, 7, Cv1, 6, Gv1, 20 ⬆",
        count: 13,
        comment: null
    },
    {
        id: 172,
        folder_id: 10,
        name: "Large Intestine Humid heat",
        points: "Li3, Sp6, 9, Cv3, 12, Ub17,20, 22, 25, Li11, St37 ⬇",
        count: 11,
        comment: null
    },
    {
        id: 173,
        folder_id: 10,
        name: "Large Intestine Hotness [Group 1]",
        points: "Li2, 11, St37, 44, ⬇ Cv4, 12, Sp6, K6 ⬆",
        count: 8,
        comment: null
    },
    {
        id: 174,
        folder_id: 10,
        name: "Large Intestine Hotness [Group 2]",
        points: "Li2, Cv6, Ub25, 31, St25 ⬇",
        count: 5,
        comment: null
    },
    {
        id: 175,
        folder_id: 10,
        name: "Obstruction in large Intestine due to Hotness [Group 1]",
        points: "Li2, 4, 11, St25, 37, 44, Sp6, 15, Cv4, Tw6 ⬇",
        count: 10,
        comment: null
    },
    {
        id: 176,
        folder_id: 10,
        name: "Obstruction in large Intestine due to Hotness [Group 2]",
        points: "Li2, 11, Gv14, Ub25, 31, Cv6, St25, 36 ⬇",
        count: 8,
        comment: null
    },
    {
        id: 177,
        folder_id: 10,
        name: "Obstruction in Large Intestine due to Coldness ",
        points: "St25, 27, 36, 37, Sp6, Liv3, Cv4, Ub25 ⬇",
        count: 8,
        comment: null
    },
    {
        id: 178,
        folder_id: 10,
        name: "Stasis of Blood in Large Intestine ",
        points: "Li3, Sp6, 9, 11, Cv3, 12, St37, Ub17, 20, 22, 25 (L&R) ⬇",
        count: 11,
        comment: null
    },
    {
        id: 179,
        folder_id: 11,
        name: "Stomach Qi Deficiency disease ",
        points: "St36, Cv6, 12, Ub21 ⬆ ",
        count: 4,
        comment: null
    },
    {
        id: 180,
        folder_id: 11,
        name: "Stomach coldness Disease [Group 1]",
        points: "St36, Cv6, 12 Ub20, 21 ⬆",
        count: 5,
        comment: null
    },
    {
        id: 181,
        folder_id: 11,
        name: "Stomach coldness Disease [Group 2]",
        points: "P6, Cv12, St34, Ub21, ⬆",
        count: 4,
        comment: null
    },
    {
        id: 182,
        folder_id: 11,
        name: "Stomach Yin Deficiency",
        points: "Sp3, 6, St36, Cv12 ⬆",
        count: 4,
        comment: null
    },
    {
        id: 183,
        folder_id: 11,
        name: "Interior Heat in Stomach",
        points: "P6, Sp6, St21, 44, 45, Cv13 ⬇ Cv12⬆ ",
        count: 7,
        comment: "Tobacco"
    },
    {
        id: 184,
        folder_id: 11,
        name: "Phlegm Fire in Stomach",
        points: "St31, 44, 45, P6, Sp6 ⬇ Cv12, Cv13 ⬆",
        count: 7,
        comment: null
    },
    {
        id: 185,
        folder_id: 11,
        name: "Attack of Cold in Stomach",
        points: "St21, 34, Sp4, Cv13 ⬇",
        count: 4,
        comment: null
    },
    {
        id: 186,
        folder_id: 11,
        name: "Stomach Qi Contravention ",
        points: "P6, Sp4, Cv10, 13, St36 ⬇",
        count: 5,
        comment: null
    },
    {
        id: 187,
        folder_id: 11,
        name: "Stomach food Retention ",
        points: "St21, 44, 45, Sp4, P6, Cv10, 13 ⬇",
        count: 7,
        comment: null
    },
    {
        id: 188,
        folder_id: 11,
        name: "Stomach Blood Statis ",
        points: "St21, 34, Sp10, Cv10, Ub17, 18 ⬇",
        count: 6,
        comment: "also treat liver Qi invading stomach"
    },
    {
        id: 189,
        folder_id: 12,
        name: "Spleen Qi Deficiency",
        points: "Sp,3, 6, Cv12, St36 Ub20, 21 ⬆ ",
        count: 6,
        comment: null
    },
    {
        id: 190,
        folder_id: 12,
        name: "Spleen Yang Deficiency ",
        points: "Sp3, 6, 9, Cv9, 12, St28, 36 Ub20, 21, 22 Liv13 ⬆",
        count: 11,
        comment: null
    },
    {
        id: 191,
        folder_id: 12,
        name: "Spleen not controlling Blood",
        points: "Sp 10, 1, Ub17, ⬆ ",
        count: 3,
        comment: "Moxa, also treat Sp Qi Deficiency, treatment of low platelets count"
    },
    {
        id: 192,
        folder_id: 12,
        name: "Spleen Qi sinking ",
        points: "Sp3, 6, St21, 36, Gv1, 20, Cv6, 12, Ub20, 21 ⬆",
        count: 10,
        comment: null
    },
    {
        id: 193,
        folder_id: 12,
        name: "Cold Damp Attacking the Spleen ",
        points: "Sp3, 6, 9, St8, Cv12 ⬇",
        count: 5,
        comment: null
    },
    {
        id: 194,
        folder_id: 12,
        name: "Heat Damp Attacking the Spleen ",
        points: "Sp6, 9, Gv9, Li11, Ub20, Gb34 ⬇",
        count: 6,
        comment: null
    },
    {
        id: 195,
        folder_id: 12,
        name: "Spleen Blood Deficiency ",
        points: "Sp3, 6, St36, Ub18, 20, 21 ⬆",
        count: 6,
        comment: null
    }
]

export { folders, protocolsDB }