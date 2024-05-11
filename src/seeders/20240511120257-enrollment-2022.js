'use strict';

let data = JSON.parse(`
  [
      {
            "yesh_hicheeliin_ner": "Англи хэл",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 1846,
            "tootsuulsan_em_elsegchiin_too": 813,
            "tootsuulsan_er_elsegchiin_too": 1033,
            "tootsuulsan_elsegchiin_dundaj": 583.5032503,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 217
          },
      {
            "yesh_hicheeliin_ner": "Англи хэл",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 543,
            "tootsuulsan_em_elsegchiin_too": 182,
            "tootsuulsan_er_elsegchiin_too": 361,
            "tootsuulsan_elsegchiin_dundaj": 609.2062615,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 314
          },
      {
            "yesh_hicheeliin_ner": "Биологи",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 57,
            "tootsuulsan_em_elsegchiin_too": 5,
            "tootsuulsan_er_elsegchiin_too": 52,
            "tootsuulsan_elsegchiin_dundaj": 605.5087719,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 498
          },
      {
            "yesh_hicheeliin_ner": "Биологи",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 101,
            "tootsuulsan_em_elsegchiin_too": 22,
            "tootsuulsan_er_elsegchiin_too": 79,
            "tootsuulsan_elsegchiin_dundaj": 607.9108911,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 443
          },
      {
            "yesh_hicheeliin_ner": "Газар зүй",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 19,
            "tootsuulsan_em_elsegchiin_too": 7,
            "tootsuulsan_er_elsegchiin_too": 12,
            "tootsuulsan_elsegchiin_dundaj": 613.2105263,
            "tootsuulsan_elsegchiin_max": 761,
            "tootsuulsan_elsegchiin_min": 536
          },
      {
            "yesh_hicheeliin_ner": "Газар зүй",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 55,
            "tootsuulsan_em_elsegchiin_too": 24,
            "tootsuulsan_er_elsegchiin_too": 31,
            "tootsuulsan_elsegchiin_dundaj": 630.1272727,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 491
          },
      {
            "yesh_hicheeliin_ner": "Математик",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 854,
            "tootsuulsan_em_elsegchiin_too": 262,
            "tootsuulsan_er_elsegchiin_too": 592,
            "tootsuulsan_elsegchiin_dundaj": 570.2880562,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 241
          },
      {
            "yesh_hicheeliin_ner": "Математик",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 2599,
            "tootsuulsan_em_elsegchiin_too": 1229,
            "tootsuulsan_er_elsegchiin_too": 1370,
            "tootsuulsan_elsegchiin_dundaj": 595.9811466,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 222
          },
      {
            "yesh_hicheeliin_ner": "Монгол улсын түүх",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 39,
            "tootsuulsan_em_elsegchiin_too": 19,
            "tootsuulsan_er_elsegchiin_too": 20,
            "tootsuulsan_elsegchiin_dundaj": 604.5641026,
            "tootsuulsan_elsegchiin_max": 750,
            "tootsuulsan_elsegchiin_min": 485
          },
      {
            "yesh_hicheeliin_ner": "Монгол улсын түүх",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 46,
            "tootsuulsan_em_elsegchiin_too": 15,
            "tootsuulsan_er_elsegchiin_too": 31,
            "tootsuulsan_elsegchiin_dundaj": 660.1521739,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 440
          },
      {
            "yesh_hicheeliin_ner": "Монгол хэл",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 402,
            "tootsuulsan_em_elsegchiin_too": 52,
            "tootsuulsan_er_elsegchiin_too": 350,
            "tootsuulsan_elsegchiin_dundaj": 594.9850746,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 380
          },
      {
            "yesh_hicheeliin_ner": "Монгол хэл",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 351,
            "tootsuulsan_em_elsegchiin_too": 21,
            "tootsuulsan_er_elsegchiin_too": 330,
            "tootsuulsan_elsegchiin_dundaj": 640.2279202,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 359
          },
      {
            "yesh_hicheeliin_ner": "Нийгмийн тухай мэдлэг",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 1407,
            "tootsuulsan_em_elsegchiin_too": 342,
            "tootsuulsan_er_elsegchiin_too": 1065,
            "tootsuulsan_elsegchiin_dundaj": 591.7022033,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 234
          },
      {
            "yesh_hicheeliin_ner": "Нийгмийн тухай мэдлэг",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 1104,
            "tootsuulsan_em_elsegchiin_too": 215,
            "tootsuulsan_er_elsegchiin_too": 889,
            "tootsuulsan_elsegchiin_dundaj": 626.821558,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 315
          },
      {
            "yesh_hicheeliin_ner": "Орос хэл",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 21,
            "tootsuulsan_em_elsegchiin_too": 9,
            "tootsuulsan_er_elsegchiin_too": 12,
            "tootsuulsan_elsegchiin_dundaj": 710.2857143,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 548
          },
      {
            "yesh_hicheeliin_ner": "Орос хэл",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 83,
            "tootsuulsan_em_elsegchiin_too": 30,
            "tootsuulsan_er_elsegchiin_too": 53,
            "tootsuulsan_elsegchiin_dundaj": 749.0722892,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 496
          },
      {
            "yesh_hicheeliin_ner": "Физик",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 422,
            "tootsuulsan_em_elsegchiin_too": 281,
            "tootsuulsan_er_elsegchiin_too": 141,
            "tootsuulsan_elsegchiin_dundaj": 616.8127962,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 309
          },
      {
            "yesh_hicheeliin_ner": "Физик",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 196,
            "tootsuulsan_em_elsegchiin_too": 122,
            "tootsuulsan_er_elsegchiin_too": 74,
            "tootsuulsan_elsegchiin_dundaj": 595.6836735,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 269
          },
      {
            "yesh_hicheeliin_ner": "Хими",
            "tootsuulsan_huvi": 30,
            "tootsuulsan_elsegchiin_too": 71,
            "tootsuulsan_em_elsegchiin_too": 20,
            "tootsuulsan_er_elsegchiin_too": 51,
            "tootsuulsan_elsegchiin_dundaj": 585.5774648,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 409
          },
      {
            "yesh_hicheeliin_ner": "Хими",
            "tootsuulsan_huvi": 70,
            "tootsuulsan_elsegchiin_too": 88,
            "tootsuulsan_em_elsegchiin_too": 15,
            "tootsuulsan_er_elsegchiin_too": 73,
            "tootsuulsan_elsegchiin_dundaj": 636.9318182,
            "tootsuulsan_elsegchiin_max": 800,
            "tootsuulsan_elsegchiin_min": 460
          }
  ]
`);

data = data.map((el) => ({ ...el, year: 2022 }));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enrollments', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enrollments', null, {});
  },
};
