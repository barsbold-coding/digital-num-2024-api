'use strict';

/*
{
  "project_id": 1220,
  "project_code": "P2016-1220",
  "position": 2,
  "member_position": "Үндсэн ажилтан",
  "researcher_id": "10001000012",
  "first_name": "Адъяасүрэн",
  "last_name": "Ванданжав",
  "sisi_id": 10001000012,
  "person_id": "2c0b85bc-fd4d-49cd-9c84-50260704dceb"
},
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectMembers', {
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      project_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      member_position: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      researcher_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sisi_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      person_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectMembers');
  },
};
