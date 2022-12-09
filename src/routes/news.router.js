const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { createNewsSchema, updateNewsSchema, getNewsSchema } = require('../schemas/news.schema');
const newsService = require('../services/news.service')

const service = new newsService();
const router = express.Router();

router.get('/', async(req,res,next)=>{
    try {
        const newsList = await service.find();
        res.json(newsList);
    } catch (error) {
        next(error)
    }
});

router.get('/:id', 
    validatorHandler(getNewsSchema, 'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params
            const news = await service.findOne(id);
            res.json(news);
        } catch (error) {
            next(error)
        }
})

router.post('/',
    validatorHandler(createNewsSchema, 'body'),
    async(req,res,next)=>{
        try {
            const body = req.body;
            const newNews = await service.create(body);
            res.json(newNews)
        } catch (error) {
            next(error)
        }

})

router.patch('/:id',
    validatorHandler(getNewsSchema, 'params'),
    validatorHandler(updateNewsSchema, 'body'),
    async(req,res,next)=>{
        try {
            const {id} = req.params
            const data =req.body
            const news = await service.update(id,data);
            res.json(
                news
            );
        } 
        
        catch (error) {
            next(error)
        }
})

router.delete('/:id',
    validatorHandler(getNewsSchema, 'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const rta = service.delete(id);
            res.json(rta);
        } catch (error) {
            next(error)
        }
})

module.exports = router