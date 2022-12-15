const {Model, DataTypes, Sequelize} = require('sequelize');
const { TEAMS_TABLE } = require('./team.model');


const PLAYER_TABLE = 'player';

const playerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    position: {
        allowNull: false,
        type: DataTypes.STRING
    },
    annotations: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    triples: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    teamId: {
        field: 'team_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: TEAMS_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
}

class Player extends Model {

    static associate(models){
        this.belongsTo(models.Team,{as:'team'})
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: PLAYER_TABLE,
            modelName: 'Player',
            timestamps: false
        }
    }
};

module.exports = { PLAYER_TABLE, playerSchema, Player };