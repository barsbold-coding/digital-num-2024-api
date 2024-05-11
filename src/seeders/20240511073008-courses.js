'use strict';

async function fetchData() {
  const res = await fetch(
    'https://sisi.num.edu.mn/digital_num/api/package/course',
  );
  const data = await res.json();
  return data;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await fetchData();
    await queryInterface.bulkInsert('Courses', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
