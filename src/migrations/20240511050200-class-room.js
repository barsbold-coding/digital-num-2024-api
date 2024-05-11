'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      uruunii_khuviin_dugaar: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true,
      },
      khicheeliin_bair: {
        type: Sequelize.STRING,
        unique: false,
      },
      uruunii_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khariyaalakh_surguuliin_dugaar: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      khariyaalakh_surguuliin_ner: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      uruunii_zoriulalt: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      talbain_khemjee: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      khicheeliin_khuvaari_tavikh_bolomj: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      suudlyn_too: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
      },
      proyektortoi_esekh: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await QueryInterface.dropTable('Rooms');
  },
};
