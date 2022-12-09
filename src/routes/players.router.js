const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { createPlayerSchema, updatePlayerSchema, getPlayerSchema } = require('../schemas/player.schema');
const playerService = require('../services/player.service');

const router = express.Router();
const service = new playerService();

router.get('/', async(req,res,next)=>{
    try {

        const playersList = await service.find();
        res.json(playersList);

    } catch (error) {
        next(error)
    }
})

router.get('/:id',
    validatorHandler(getPlayerSchema, 'params'),
    async(req,res,next)=>{
        try {

            const {id} = req.params;
            player = await service.findOne(id);
            res.json(player);

        } catch (error) {
            next(error)
        }
    }
)

router.post('/',
    validatorHandler(createPlayerSchema, 'body'),
    async(req,res,next)=>{
        try {

            const body = req.body
            newPlayer = await service.create(body);
            res.json(newPlayer);

        } catch (error) {
            next(error)
        }
    }
)

router.patch('/:id', 
    validatorHandler(getPlayerSchema, 'params'),
    validatorHandler(updatePlayerSchema, 'body'),
    async(req,res,next)=>{
        try {
            const {id}= req.params;
            const data = req.body;
            player = await service.update(id,data);
            res.json(player);

        } catch (error) {
            next(error)
        }
    }
)

router.delete('/:id',
    validatorHandler(getPlayerSchema, 'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params
            player = await service.delete(id);
            res.json(id);

        } catch (error) {
            next(error)
        }
    }
)


module.exports = router