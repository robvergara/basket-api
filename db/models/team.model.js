const {Model, DataTypes, Sequelize} = require('sequelize');
const { CHAMPIONSHIPS_TABLE } = require('./championship.model');

const TEAMS_TABLE = 'teams';

const teamSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    player: {
        allowNull: false,
        type: DataTypes.INTEGER,

    },
    coach: {
        allowNull: false,
        type: DataTypes.INTEGER,

    },
    image: {
        allowNull:true,
        type: DataTypes.STRING
    },
    winnerGames: {
        field: 'winner_games',
        allowNull:true,
        type: DataTypes.INTEGER
    },
    losedGames: {
        field: 'losed_games',
        allowNull:true,
        type: DataTypes.INTEGER
    },
    WGames: {
        field: 'w_games',
        allowNull:true,
        type: DataTypes.INTEGER
    },
    favorPoints: {
        field: 'favor_points',
        allowNull:true,
        type: DataTypes.INTEGER
    },
    againstPoints: {
        field: 'against_points',
        allowNull:true,
        type: DataTypes.INTEGER
    },
    points: {
        allowNull:true,
        type: DataTypes.INTEGER
    },
    championshipId: {
        field: 'championship_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CHAMPIONSHIPS_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }

}

class Team extends Model {
    static associate(models){
        // associations
        this.belongsTo(models.Championship,{as:'championship'})
        this.hasMany(models.Player,{
            as: 'players',
            foreignKey: 'teamId'
        })
        this.hasMany(models.Coach,{
            as: 'Coach',
            foreignKey: 'teamId'
        })
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: TEAMS_TABLE,
            modelName: 'Team',
            timestamps: false
        }
    }
}

module.exports = {TEAMS_TABLE, teamSchema, Team}