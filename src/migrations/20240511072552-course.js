'use strict';

/*
 {
    "khicheeliin_dugaar": "a3c65c2974270fd093ee8a9bf8ae7d0b",
    "khicheeliin_indyeks": "PSYC233",
    "mongol_ner": "Психотерапи I",
    "angli_ner": "Psychotherapy I",
    "khariyaalakh_buttsiin_dugaar": "b43d3f04841fc58b6e155df37be8b3f0",
    "khariyaalakh_butets": "Шинжлэх ухааны сургууль",
    "khariyaalakh_tenkhim_dugaar": "fec353261d6cc45fc9e4eafa7213532a",
    "khariyaalakh_tenkhim": "Сэтгэл судлалын тэнхим",
    "surgaltyn_tuvshin": "Бакалавр",
    "orokh_uliral": "Хаврын улирал",
    "zorilgo": "Психотерапийн суурь болсон онолын үзэл баримтлалууд, тэдгээрийн зарчим, үйл явцын талаарх мэдлэг эзэмшүүлж, кейсийг эдгээр онолын үүднээс тайлбарлах чадвар, дадал төлөвшүүлэх, сэтгэл заслын үндсэн техникийг хэрэглэх чадвартай болгоход тус хичээлийн зорилго оршино.",
    "zorilgo_angli": "",
    "tovch_aguulga": "Психотерапийн орчин үеийн чиг хандлага, зөвлөх мэргэжилтэнд тавигдах шаардлага, сэтгэл заслын ёс зүйн зарчим, Психоаналтик, Бодьгаль-сэтгэл зүйн, Оршихуйн, Хүн төвт, Гештальт, Зан үйлийн, Когнитив, Бодит байдлын, Феминист, Постмодерн, Гэр бүлийн тогтолцооны сэтгэл заслын онолын үндэслэлийг ойлгож, зөвлөгөө, засалд хэрэглэх мэдлэг олгоно.",
    "tovch_aguulga_angli": "In this you will learn about modern trends in psychotherapy, requirements for counselors, ethical principles of psychotherapy, and understand the theoretical basis of the Psychoanalytic, Personality-psychological, Existential, Person-centered, Gestalt, Behavioral, Cognitive, Reality, Feminist, Postmodern, Family system psychotherapy theories, and provide knowledge to be applied in counseling and psychotherapy.",
    "todorkhoilson_ognoo": 2015,
    "bagts_tsag": 3.0,
    "lyektsiin_bagts_tsag": "#2 цаг - 16 хоног",
    "syeminaryn_bagts_tsag": "#2 цаг - 16 хоног",
    "laboratoriin_bagts_tsag": "-",
    "biye_daaltyn_bagts_tsag": "#5 цаг - 16 хоног",
    "dadlaga_sudalgaany_bagts_tsag": "-"
  },
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      khicheeliin_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khicheeliin_indyeks: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mongol_ner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      angli_ner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khariyaalakh_buttsiin_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khariyaalakh_butets: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khariyaalakh_tenkhim_dugaar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      khariyaalakh_tenkhim: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surgaltyn_tuvshin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orokh_uliral: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zorilgo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      zorilgo_angli: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tovch_aguulga: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tovch_aguulga_angli: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      todorkhoilson_ognoo: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      bagts_tsag: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      lyektsiin_bagts_tsag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      syeminaryn_bagts_tsag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      laboratoriin_bagts_tsag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      biye_daaltyn_bagts_tsag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dadlaga_sudalgaany_bagts_tsag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  },
};
