'use strict';

async function fetchData() {
  const res = await fetch(
    'https://sisi.num.edu.mn/digital_num/api/package/hicheeliin-huvaari',
  );
  const data = await res.json();
  return data;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await fetchData();
    await queryInterface.bulkInsert('CourseSchedules', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CourseSchedules', null, {});
  },
};
