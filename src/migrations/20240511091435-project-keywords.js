'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectKeywords', {
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      project_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      keyword_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      keyword: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectKeywords');
  },
};
