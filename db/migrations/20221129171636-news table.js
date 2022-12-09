'use strict';

const { NEWS_TABLE, newsSchema } = require('./../models/news.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(NEWS_TABLE, newsSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(NEWS_TABLE); 

  }
};