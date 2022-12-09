const boom = require('@hapi/boom');
const sequelize = require('../../libs/sequelize');
const {models} = require('../../libs/sequelize');

class coachService {
    constructor(){
        this.coaches = [];
    }

    async create(data){
        const newCoach = await models.Coach.create(data);
        return newCoach;
    }

    async find(){
        const rta = await models.Coach.findAll();
        return rta;
    }

    async findOne(id){
        const coach = await models.Coach.findByPk(id)
        if(!team){
            throw boom.notFound('team not found');
        }
        return coach;
    }

    async update(id,changes){

        const coach = this.findOne(id);
        const rta = (await coach).update(changes)
        return rta;
    }

    async delete(id){
        const coach = this.findOne(id);
        (await coach).destroy();
        return {id};
    }
}

module.exports = coachService;