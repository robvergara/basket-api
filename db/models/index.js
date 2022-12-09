const {teamSchema, Team} = require('./team.model');
const {Championship, ChampionshipSchema} = require('./championship.model');
const {playerSchema, Player } = require('./player.model');
const {coachSchema, Coach} = require('./coach.model');
const { newsSchema, News} = require('./news.model');

function setupModels(sequelize){
    Championship.init(ChampionshipSchema,Championship.config(sequelize));
    Team.init(teamSchema, Team.config(sequelize));
    Player.init(playerSchema, Player.config(sequelize));
    Coach.init(coachSchema, Coach.config(sequelize));
    News.init(newsSchema, News.config(sequelize));

    Coach.associate(sequelize.models);
    Player.associate(sequelize.models);
    Team.associate(sequelize.models);
    Championship.associate(sequelize.models);
    News.associate(sequelize.models);
}

module.exports = setupModels;