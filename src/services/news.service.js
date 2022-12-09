const boom = require('@hapi/boom');
const sequelize = require('../../libs/sequelize');
const {models} = require('../../libs/sequelize');

class newsService{

    async create(data){
        const newNews = await models.News.create(data);
        return newNews;
    }

    async find(){
        const rta = await models.News.findAll();
        return rta;
    }

    async findOne(id){
        const News = await models.News.findByPk(id);
        if (!News){
            throw boom.notFound('News not found');
        };
        return News;
    }

    async update(id,changes){
        const News = this.findOne(id);
        const rta = (await News).update(changes);
        return rta;
    }

    async delete(id){
        const News = this.findOne(id);
        (await News).destroy();
        return {id};
    }
} 

module.exports = newsService;
