const express = require('express');
const teamService = require('./../services/team.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createTeamSchema, updateTeamSchema, getTeamSchema } = require('./../schemas/team.schema');

const service = new teamService();
const router = express.Router();

router.get('/', async(req, res, next)=>{
    try {
        const teamlist = await service.find();
        res.json(teamlist);
    } catch (error) {
        next(error)
    }

});

router.get('/:id',
    validatorHandler(getTeamSchema, 'params'),
    async(req, res, next)=>{
        try {
            const {id} = req.params;
            const team = await service.findOne(id);
            res.json(team);
        } catch (error) {
            next(error)
        }
    }
);

router.post ('/',
    validatorHandler(createTeamSchema, 'body'),
    async(req,res, next)=>{
        try {
            const body = req.body;
            const newTeam = await service.create(body);
            res.json(newTeam)
        } catch (error) {
            next(error)
        }
    }
);

router.patch('/:id',
    validatorHandler(getTeamSchema, 'params'),
    validatorHandler(updateTeamSchema, 'body'),
    async(req,res, next)=>{
        try {
            const data = req.body;
            const {id} = req.params;
            const team = await service.update(id, data);
            res.json({
                team
            }); 
        } catch (error) {
            next(error)
        }
    }
);

router.delete('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const rta = service.delete(id);
        res.json(rta);
    } catch (error) {
        next(error)
    }

})


module.exports = router;