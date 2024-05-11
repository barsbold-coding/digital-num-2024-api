'use strict';

/*
  {
    "surgaltyn_tuluvluguunii_dugaar": "7a50d83a1e70e9d96c3357438aed7a44",
    "khutulburiin_dugaar": "eb8f1fff473dad02daf00f34dbf651c7",
    "surgaltyn_tuluvluguu": 2022,
    "khutulburiin_ner": "Хичээл солилцооны хөтөлбөр",
    "khutulbur_batlagdsan_on": 2021,
    "khutulbur_batlagdsan_uliral": "Намрын улирал"
  },
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Curriculums', {
      surgaltyn_tuluvluguunii_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khutulburiin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
      },
      surgaltyn_tuluvluguu: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      khutulburiin_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khutulbur_batlagdsan_on: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      khutulbur_batlagdsan_uliral: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Curriculums');
  },
};
