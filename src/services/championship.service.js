// const faker = require('faker');
const boom = require('@hapi/boom');
const sequelize = require('../../libs/sequelize');
const {models} = require('../../libs/sequelize');


class championshipsService {
    constructor(){
        this.championshipList = [];

    }

    async create(data){
        const newChampionship = await models.Championship.create(data);
        return newChampionship;
    }

    async find(){
        const rta = await models.Championship.findAll({
            include: ['Teams']
        });
        return rta;
        // return this.championshipList;
    }

    async findOne(id){
        const Championship = await models.Championship.findByPk(id, {
            include: ['Teams']
        });
        if (!Championship){
            throw boom.notFound('Championship not found');
        }
        return Championship;
    }

    async update(id, changes){
        const Championship = this.findOne(id);
        const rta = (await Championship).update(changes);
        return rta;
    }

    async delete(id){
        const Championship = this.findOne(id);
        (await Championship).destroy();
        return {id};
    }
}

module.exports = championshipsService;