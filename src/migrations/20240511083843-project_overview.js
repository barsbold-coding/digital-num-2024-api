'use strict';

/*
{
  "project_id": 24,
  "project_code": "P2016-24",
  "project_name": "Кристалл торын динамик, соронзон бүтэц, оптик шинж чанарууд ба эрэмблэлтийн судалгаа",
  "project_name_eng": "Study of the Crystal Lattice Dynamics, Magnetic and Optical Properties and Ordering Processes",
  "abstract_mn": "Дэвшүүлж буй төсөл нь МУИС-д хатуу биеийн онол, туршилтын судалгааг цаашид хөгжүүлэх, залуу судлаачдыг энэ  чиглэлээр мэргэшүүлэх ач холбогдолтой бөгөөд энэ сэдвээр 2 докторантыг сургах юм. Уг төслийн үр дүнд нийтлүүлэх эрдэм шинжилгээний өгүүлэл, бүтээлүүд МУИС-ийн олон улсын зэрэглэлийг дээшлүүлэхэд хувь нэмрээ оруулна.",
  "abstract_eng": "Дэвшүүлж буй төсөл нь МУИС-д хатуу биеийн онол, туршилтын судалгааг цаашид хөгжүүлэх, залуу судлаачдыг энэ  чиглэлээр мэргэшүүлэх ач холбогдолтой бөгөөд энэ сэдвээр 2 докторантыг сургах юм. Уг төслийн үр дүнд нийтлүүлэх эрдэм шинжилгээний өгүүлэл, бүтээлүүд МУИС-ийн олон улсын зэрэглэлийг дээшлүүлэхэд хувь нэмрээ оруулна.",
  "start_date": "2014-12-30T00:00:00",
  "end_date": "2015-12-30T00:00:00",
  "sponsor_id": 1,
  "sponsor_name": "Монгол Улсын Их Сургууль",
  "performer_id": 62,
  "performer_name": "МУИС, ШУС, БУС, Физикийн тэнхим",
  "funding_type_id": 10,
  "funding_type": "Өндөр түвшний судалгаа",
  "research_field_id": 3,
  "research_field": "Физикийн шинжлэх ухаан",
  "type_id": 1,
  "project_type": "Суурь судалгаа",
  "project_state_name": "Хэрэгжиж байгаа\r\n"
},
  */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectOverviews', {
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      project_code: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      project_name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      project_name_eng: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      abstract_mn: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      abstract_eng: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      sponsor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      sponsor_name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      performer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      performer_name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      funding_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      funding_type: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      research_field_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      research_field: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      project_type: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      project_state_name: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectOverviews');
  },
};
