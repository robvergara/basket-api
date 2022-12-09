const {Model, DataTypes, Sequelize} = require('sequelize');

const CHAMPIONSHIPS_TABLE = 'championships';

const ChampionshipSchema = {
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
    cantTeams: {
        allowNull: false,
        type: DataTypes.INTEGER
    }

}

class Championship extends Model {
    static associate(models){
        //asociaciones de tablas
        this.hasMany(models.Team, {
            as: 'Teams',
            foreignKey: 'championshipId'
        })
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: CHAMPIONSHIPS_TABLE,
            modelName: 'Championship',
            timestamps: false
        }
    }
}

module.exports = {CHAMPIONSHIPS_TABLE, ChampionshipSchema, Championship};