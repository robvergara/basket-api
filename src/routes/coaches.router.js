const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const {createCoachSchema, updateCoachSchema, getCoachSchema } = require('../schemas/coach.schema');
const coachService = require('../services/coach.service');

const router = express.Router();
const service = new coachService();

router.get('/', async(req,res,next)=>{
    try {

        const coachList = await service.find();
        res.json(coachList);

    } catch (error) {
        next(error)
    }
})

router.get('/:id',
    validatorHandler(getCoachSchema, 'params'),
    async(req,res,next)=>{
        try {

            const {id} = req.params;
            coach = await service.findOne(id);
            res.json(coach);

        } catch (error) {
            next(error)
        }
    }
)

router.post('/',
    validatorHandler(createCoachSchema, 'body'),
    async(req,res,next)=>{
        try {

            const body = req.body
            newCoach = await service.create(body);
            res.json(newCoach);

        } catch (error) {
            next(error)
        }
    }
)

router.patch('/:id', 
    validatorHandler(getCoachSchema, 'params'),
    validatorHandler(updateCoachSchema, 'body'),
    async(req,res,next)=>{
        try {
            const {id}= req.params;
            const data = req.body;
            coach = await service.update(id,data);
            res.json(coach);

        } catch (error) {
            next(error)
        }
    }
)

router.delete('/:id',
    validatorHandler(getCoachSchema, 'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params
            coach = await service.delete(id);
            res.json(id);

        } catch (error) {
            next(error)
        }
    }
)


module.exports = router