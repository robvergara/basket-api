const express = require('express');
const teamsRouter = require('./teams.router');
const boardsRouter = require('./boards.router');
const championshipsRouter = require('./championship.router');
const playersRouter = require('./players.router');
const coachRouter = require('./coaches.router');
const newsRouter = require('./news.router');


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/players', playersRouter);
    router.use('/teams', teamsRouter);
    router.use('/boards', boardsRouter);
    router.use('/championships', championshipsRouter);
    router.use('/coaches', coachRouter);
    router.use('/news',newsRouter);

}

module.exports = routerApi;