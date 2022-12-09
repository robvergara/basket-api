'use strict';

const { ChampionshipSchema , CHAMPIONSHIPS_TABLE } = require('./../models/championship.model');
const {TEAMS_TABLE, teamSchema} = require('./../models/team.model')
const {PLAYER_TABLE, playerSchema} = require('./../models/player.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(CHAMPIONSHIPS_TABLE, ChampionshipSchema);
    await queryInterface.createTable(TEAMS_TABLE, teamSchema);
    await queryInterface.createTable(PLAYER_TABLE, playerSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PLAYER_TABLE); 
    await queryInterface.dropTable(TEAMS_TABLE); 
    await queryInterface.dropTable(CHAMPIONSHIPS_TABLE);
  }
};
