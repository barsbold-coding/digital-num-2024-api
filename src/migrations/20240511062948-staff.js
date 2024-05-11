'use strict';
/*
  {
    "bagsh_ajiltny_khuviin_dugaar": "271e735f-666a-4337-bc56-b257d07fecd4",
    "bagsh_ajiltny_ovog": "Сүхбаатар",
    "bagsh_ajiltny_ner": "Отгонцэцэг",
    "khariyaalakh_buttsiin_negjiin_ner": "Багшийн хөгжил, суралцахуйг дэмжих төв",
    "khariyaalakh_buttsiin_negjiin_dugaar": "4afd55157555bbff4c861e344b2af98f",
    "alban_tushaal": "Эрхлэгч",
    "ezemshsen_bolovsrol": "Доктор (Ph.D.)",
    "tuluv": "Ажиллаж байгаа",
    "imeil_khayag": "otgontsetseg@num.edu.mn, faculty_development@num.edu.mn",
    "alban_uruunii_khayag": "E-Номын сан-209",
    "dotuur_utas": "0"
  },
*/
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Staffs', {
      bagsh_ajiltny_khuviin_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bagsh_ajiltny_ovog: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bagsh_ajiltny_ner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khariyaalakh_buttsiin_negjiin_ner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khariyaalakh_buttsiin_negjiin_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alban_tushaal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ezemshsen_bolovsrol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tuluv: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imeil_khayag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alban_uruunii_khayag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dotuur_utas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Staffs');
  },
};
