const {Model, DataTypes, Sequelize} = require('sequelize');
const { TEAMS_TABLE } = require('./team.model');


const COACH_TABLE = 'Coach';

const coachSchema = {
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

class Coach extends Model {

    static associate(models){
        this.belongsTo(models.Team,{as:'team'})
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: COACH_TABLE,
            modelName: 'Coach',
            timestamps: false
        }
    }
};

module.exports = { COACH_TABLE, coachSchema, Coach };