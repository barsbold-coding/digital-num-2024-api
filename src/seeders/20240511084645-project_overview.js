'use strict';

async function fetchData() {
  const res = await fetch('https://project.num.edu.mn/api/du/project-overview');
  const data = await res.json();
  return data;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await fetchData();
    await queryInterface.bulkInsert('ProjectOverviews', data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectOverviews', null, {});
  },
};
