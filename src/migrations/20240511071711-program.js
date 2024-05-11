'use strict';

/*
{
  "khutulburiin_dugaar": "f967583e8993189602373898eb7d4e84",
  "khutulburiin_indyeks": "D 041304",
  "khutulburiin_mongol_ner": "Аялал жуулчлалын менежмент",
  "khutulburiin_angli_ner": "Tourism management",
  "akadyemik_tuvshin": "Бакалавр",
  "suraltsakh_khelber": "Өдрийн сургалт",
  "khariyaalakh_negjiin_dugaar": "d8b895cde1c2fac83b938cd1ae057f72",
  "khariyaalakh_negjiin_ner": "Баруун бүсийн сургууль",
  "batlagdsan_on": 2022
},
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Programs', {
      khutulburiin_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khutulburiin_indyeks: {
        type: Sequelize.STRING,
        unique: false,
      },
      khutulburiin_mongol_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khutulburiin_angli_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      akadyemik_tuvshin: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      suraltsakh_khelber: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khariyaalakh_negjiin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khariyaalakh_negjiin_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      batlagdsan_on: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Programs');
  },
};
