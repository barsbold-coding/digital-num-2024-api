'use strict';

/*
{
  "id": 1,
  "conf_scope": "Бусад",
  "name": "test",
  "is_own_muis": 0,
  "author": "num",
  "introduction_mn": "m",
  "introduction_en": "a",
  "start_date": "2016-05-01T06:00:00",
  "frequency": "сар бүр",
  "url": "http://domain.com",
  "lang": "монгол",
  "email": "http://domain.com"
},
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conferences', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      conf_scope: {
        type: Sequelize.TEXT,
        unique: false,
      },
      name: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: false,
      },
      is_own_muis: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: true,
      },
      author: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: true,
      },
      introduction_mn: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: true,
      },
      introduction_en: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DATE,
        unique: false,
        allowNull: true,
      },
      frequency: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: true,
      },
      url: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: true,
      },
      lang: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: true,
      },
      email: {
        type: Sequelize.TEXT,
        unique: false,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Conferences');
  },
};
