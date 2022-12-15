const express = require('express');
const championshipsService = require('./../services/championship.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createChampionshipSchema, updateChampionshipSchema, getChampionshipSchema } = require('./../schemas/championship.schema');

const service = new championshipsService();
const router = express.Router();


router.get('/', async(req, res, next)=>{
    try {
        const teamlist = await service.find();
        res.json(teamlist);
    } catch (error) {
        next(error); //Para ejecutar los middlewares de tipo error que tenemos programados por si algo sale mal
    }

})

router.get('/:id', 
    validatorHandler(getChampionshipSchema, 'params'),
    async(req, res, next)=>{
        try {
            const {id} = req.params;
            const championship = await service.findOne(id);
            console.log(championship);
            res.json(championship);
        } catch (error) {
            next(error);
        };
    }
)

router.post ('/',
    validatorHandler(createChampionshipSchema, 'body'),
    async(req,res, next)=>{
        try {
            const body = req.body;
            const newChampionship = await service.create(body);
            res.json(newChampionship);
        } catch (error) {
            next(error);
        }
    }
)

router.patch('/:id',
    validatorHandler(getChampionshipSchema, 'params'),
    validatorHandler(updateChampionshipSchema, 'body'),
    async(req,res, next)=>{
        try {
            const {id} = req.params;
            const body = req.body;
            const championship = await service.update(id, body);
            res.json(championship); 
        } catch (error) {
            next(error)
        }
    }
)

router.delete('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const rta = await service.delete(id);
        res.json(rta);
    } catch (error) {
        next(error);
    }

})

module.exports = router;