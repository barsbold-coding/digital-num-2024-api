'use strict';

/**
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
*/
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      yesh_hicheeliin_ner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tootsuulsan_huvi: {
        type: Sequelize.INTEGER,
      },
      tootsuulsan_elsegchiin_too: {
        type: Sequelize.INTEGER,
      },
      tootsuulsan_em_elsegchiin_too: {
        type: Sequelize.INTEGER,
      },
      tootsuulsan_er_elsegchiin_too: {
        type: Sequelize.INTEGER,
      },
      tootsuulsan_elsegchiin_dundaj: {
        type: Sequelize.FLOAT,
      },
      tootsuulsan_elsegchiin_max: {
        type: Sequelize.INTEGER,
      },
      tootsuulsan_elsegchiin_min: {
        type: Sequelize.INTEGER,
      },
      year: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enrollments');
  },
};
