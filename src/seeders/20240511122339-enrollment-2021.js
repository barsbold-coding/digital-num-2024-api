'use strict';

let data = JSON.parse(`
[
    {
          "yesh_hicheeliin_ner": "Англи хэл",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 1933,
          "tootsuulsan_em_elsegchiin_too": 868,
          "tootsuulsan_er_elsegchiin_too": 1065,
          "tootsuulsan_elsegchiin_dundaj": 585.9037765,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 260
        },
    {
          "yesh_hicheeliin_ner": "Англи хэл",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 404,
          "tootsuulsan_em_elsegchiin_too": 121,
          "tootsuulsan_er_elsegchiin_too": 283,
          "tootsuulsan_elsegchiin_dundaj": 608.4207921,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 242
        },
    {
          "yesh_hicheeliin_ner": "Биологи",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 46,
          "tootsuulsan_em_elsegchiin_too": 13,
          "tootsuulsan_er_elsegchiin_too": 33,
          "tootsuulsan_elsegchiin_dundaj": 579.2173913,
          "tootsuulsan_elsegchiin_max": 718,
          "tootsuulsan_elsegchiin_min": 358
        },
    {
          "yesh_hicheeliin_ner": "Биологи",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 102,
          "tootsuulsan_em_elsegchiin_too": 23,
          "tootsuulsan_er_elsegchiin_too": 79,
          "tootsuulsan_elsegchiin_dundaj": 601.4313725,
          "tootsuulsan_elsegchiin_max": 795,
          "tootsuulsan_elsegchiin_min": 344
        },
    {
          "yesh_hicheeliin_ner": "Газар зүй",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 35,
          "tootsuulsan_em_elsegchiin_too": 22,
          "tootsuulsan_er_elsegchiin_too": 13,
          "tootsuulsan_elsegchiin_dundaj": 640.6571429,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 481
        },
    {
          "yesh_hicheeliin_ner": "Газар зүй",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 53,
          "tootsuulsan_em_elsegchiin_too": 24,
          "tootsuulsan_er_elsegchiin_too": 29,
          "tootsuulsan_elsegchiin_dundaj": 619.5660377,
          "tootsuulsan_elsegchiin_max": 736,
          "tootsuulsan_elsegchiin_min": 449
        },
    {
          "yesh_hicheeliin_ner": "Математик",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 894,
          "tootsuulsan_em_elsegchiin_too": 274,
          "tootsuulsan_er_elsegchiin_too": 620,
          "tootsuulsan_elsegchiin_dundaj": 580.5626398,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 277
        },
    {
          "yesh_hicheeliin_ner": "Математик",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 2541,
          "tootsuulsan_em_elsegchiin_too": 1213,
          "tootsuulsan_er_elsegchiin_too": 1328,
          "tootsuulsan_elsegchiin_dundaj": 599.2581661,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 200
        },
    {
          "yesh_hicheeliin_ner": "Монгол улсын түүх",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 31,
          "tootsuulsan_em_elsegchiin_too": 13,
          "tootsuulsan_er_elsegchiin_too": 18,
          "tootsuulsan_elsegchiin_dundaj": 590.516129,
          "tootsuulsan_elsegchiin_max": 758,
          "tootsuulsan_elsegchiin_min": 429
        },
    {
          "yesh_hicheeliin_ner": "Монгол улсын түүх",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 60,
          "tootsuulsan_em_elsegchiin_too": 24,
          "tootsuulsan_er_elsegchiin_too": 36,
          "tootsuulsan_elsegchiin_dundaj": 660.1,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 487
        },
    {
          "yesh_hicheeliin_ner": "Монгол хэл",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 499,
          "tootsuulsan_em_elsegchiin_too": 36,
          "tootsuulsan_er_elsegchiin_too": 463,
          "tootsuulsan_elsegchiin_dundaj": 604.8396794,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 242
        },
    {
          "yesh_hicheeliin_ner": "Монгол хэл",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 239,
          "tootsuulsan_em_elsegchiin_too": 17,
          "tootsuulsan_er_elsegchiin_too": 222,
          "tootsuulsan_elsegchiin_dundaj": 640.209205,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 342
        },
    {
          "yesh_hicheeliin_ner": "Нийгмийн тухай мэдлэг",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 1270,
          "tootsuulsan_em_elsegchiin_too": 327,
          "tootsuulsan_er_elsegchiin_too": 943,
          "tootsuulsan_elsegchiin_dundaj": 595.3755906,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 285
        },
    {
          "yesh_hicheeliin_ner": "Нийгмийн тухай мэдлэг",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 1327,
          "tootsuulsan_em_elsegchiin_too": 205,
          "tootsuulsan_er_elsegchiin_too": 1122,
          "tootsuulsan_elsegchiin_dundaj": 622.270535,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 223
        },
    {
          "yesh_hicheeliin_ner": "Орос хэл",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 22,
          "tootsuulsan_em_elsegchiin_too": 6,
          "tootsuulsan_er_elsegchiin_too": 16,
          "tootsuulsan_elsegchiin_dundaj": 715.6818182,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 563
        },
    {
          "yesh_hicheeliin_ner": "Орос хэл",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 80,
          "tootsuulsan_em_elsegchiin_too": 17,
          "tootsuulsan_er_elsegchiin_too": 63,
          "tootsuulsan_elsegchiin_dundaj": 736.15,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 379
        },
    {
          "yesh_hicheeliin_ner": "Физик",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 377,
          "tootsuulsan_em_elsegchiin_too": 240,
          "tootsuulsan_er_elsegchiin_too": 137,
          "tootsuulsan_elsegchiin_dundaj": 599.1724138,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 304
        },
    {
          "yesh_hicheeliin_ner": "Физик",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 274,
          "tootsuulsan_em_elsegchiin_too": 168,
          "tootsuulsan_er_elsegchiin_too": 106,
          "tootsuulsan_elsegchiin_dundaj": 622.1678832,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 317
        },
    {
          "yesh_hicheeliin_ner": "Хими",
          "tootsuulsan_huvi": 30,
          "tootsuulsan_elsegchiin_too": 66,
          "tootsuulsan_em_elsegchiin_too": 11,
          "tootsuulsan_er_elsegchiin_too": 55,
          "tootsuulsan_elsegchiin_dundaj": 593.5606061,
          "tootsuulsan_elsegchiin_max": 776,
          "tootsuulsan_elsegchiin_min": 410
        },
    {
          "yesh_hicheeliin_ner": "Хими",
          "tootsuulsan_huvi": 70,
          "tootsuulsan_elsegchiin_too": 94,
          "tootsuulsan_em_elsegchiin_too": 26,
          "tootsuulsan_er_elsegchiin_too": 68,
          "tootsuulsan_elsegchiin_dundaj": 635.4255319,
          "tootsuulsan_elsegchiin_max": 800,
          "tootsuulsan_elsegchiin_min": 344
        }
]
`);

data = data.map((el) => ({ ...el, year: 2021 }));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enrollments', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enrollments', null, {});
  },
};
