'use strict';

/*
  {
    "khuvaariin_dugaar": "e56ff59145a77be20f35f33931c9d4a9",
    "khicheeliin_dugaar": "7c56c456f0bf44cc23ecb6792768cf87",
    "khicheeliin_jil": "2023-2024",
    "uliral": "Хаврын улирал",
    "zaasan_bagshiin_ner": "Г.Нарантунгалаг",
    "bagshiin_khuviin_dugaar": "30dbf36d-b9fc-4685-b192-ccc95b717aa0",
    "khicheeliin_ner": "Илтгэх урлаг (Ерөнхий суурь)",
    "bagts_tsag": 3.0,
    "khicheeliin_khelber": "Лекц",
    "garag": "Даваа",
    "ekhlekh_tsag": "11:00",
    "duusakh_tsag": "12:30",
    "oroltyn_too": 16,
    "davtamj": "7 хоног тутам",
    "ekhlekh_ognoo": "2024-02-05T11:00:00",
    "batalgaajuulsan_suraltsagchiin_too": 383,
    "uruunii_khuviin_dugaar": "9908279ebbf1f9b250ba689db6a0222b",
    "khicheellekh_bair": "E-Номын сан",
    "uruunii_dugaar": "302",
    "uruunii_ner": "Лекцийн заал",
    "bolomjit_suudal": 100,
    "khicheeliin_tenkhimiin_dugaar": "765aa7e7f496fb8e860a555c0746df0e",
    "khicheeliin_surguuliin_dugaar": "b43d3f04841fc58b6e155df37be8b3f0"
  },
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CourseSchedules', {
      khuvaariin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khicheeliin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khicheeliin_jil: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      uliral: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      zaasan_bagshiin_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      bagshiin_khuviin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khicheeliin_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      bagts_tsag: {
        type: Sequelize.FLOAT,
        unique: false,
        allowNull: false,
      },
      khicheeliin_khelber: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      garag: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      ekhlekh_tsag: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      duusakh_tsag: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      oroltyn_too: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      davtamj: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      ekhlekh_ognoo: {
        type: Sequelize.DATE,
        unique: false,
        allowNull: false,
      },
      batalgaajuulsan_suraltsagchiin_too: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      uruunii_khuviin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khicheellekh_bair: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      uruunii_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
      },
      uruunii_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      bolomjit_suudal: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      khicheeliin_tenkhimiin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khicheeliin_surguuliin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CourseSchedules');
  },
};
