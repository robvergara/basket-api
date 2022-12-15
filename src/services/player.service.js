const boom = require('@hapi/boom');
const sequelize = require('../../libs/sequelize');
const {models} = require('../../libs/sequelize');

class playerService {
    constructor(){
        this.players = []
    }

    async create (data){
        const newPlayer = await models.Player.create(data);
        return newPlayer;
    }

    async find(){
        const rta = await models.Player.findAll({
            include: ['team']
        });
        return rta;
    }

    async findOne(id){
        const player = await models.Player.findByPk(id)
        
        if(!player){
            throw boom.notFound('player not found');
        }

        return player;
    }

    async update(id, changes){
        const player = this.findOne(id);
        const rta = (await player).update(changes);
        return rta;
    }

    async delete(id){
        const player = this.findOne(id);
        (await player).destroy()
        return {id};
    }
}

module.exports = playerService;