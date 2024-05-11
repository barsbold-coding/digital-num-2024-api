'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grades', {
      khariyaalakh_buttsiin_negjiin_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khariyaalakh_buttsiin_negjiin_ner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      khicheeliin_dugaar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mongol_ner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dun: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      usgen_dun: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      usgen_dun_too: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 2023,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grades');
  },
};
