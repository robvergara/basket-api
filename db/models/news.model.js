const { extend } = require('joi');
const {Model, DataTypes, Sequelize} = require('sequelize');

const NEWS_TABLE = 'news';

const newsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    body: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true
    },
    image: {
        allowNull:true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      }
}

class News extends Model {
    static associate(models){
        //asociaciones de tablas
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: NEWS_TABLE,
            modelName: 'News',
            timestamps: false
        }
    }
}

module.exports = {NEWS_TABLE, newsSchema, News}