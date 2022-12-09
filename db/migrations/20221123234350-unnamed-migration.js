'use strict';

const { coachSchema , COACH_TABLE } = require('./../models/coach.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(COACH_TABLE, coachSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(COACH_TABLE); 

  }
};
