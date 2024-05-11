'use strict';

async function fetchData() {
  const res = await fetch('https://research.num.edu.mn/api/du/v-conference');
  const data = await res.json();
  return data;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await fetchData();
    await queryInterface.bulkInsert('Conferences', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Conferences', null, {});
  },
};
