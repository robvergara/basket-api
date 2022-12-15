const express = require('express');

const boardService = require('./../services/board.service');

const service = new boardService();
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('tabla de equipos');
})

router.get('/query', (req, res)=>{
    const positionTable = service.find(req.query);
    res.send('tabla de un campeonato');
})

module.exports = router;