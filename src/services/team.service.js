const boom = require('@hapi/boom');
const sequelize = require('../../libs/sequelize');
const {models} = require('../../libs/sequelize');

class teamService {
    constructor(){
        this.teams = [];
    }

    async create(data){
        const newTeam = models.Team.create(data, {
            include: ['players', 'Coach']
        });
        return newTeam;
    }

    async find(){
        const rta = await models.Team.findAll({
            include: ['championship']
        });
        return rta;
    }

    async findOne(id){
        const team = await models.Team.findByPk(id, {
            include: ['players','Coach']
        })
        if(!team){
            throw boom.notFound('team not found');
        }
        return team;
    }

    async update(id,changes){

        const team = this.findOne(id);
        const rta = (await team).update(changes)
        return rta;
    }

    async delete(id){
        const team = this.findOne(id);
        (await team).destroy();
        return {id};
    }
}

module.exports = teamService;