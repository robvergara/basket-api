const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);;
const player = Joi.number().integer().min(7).max(12);
const coach = Joi.number().integer().min(1);
const image = Joi.string().uri();
const winnerGames = Joi.number().integer();
const losedGames = Joi.number().integer();
const WGames = Joi.number().integer();
const favorPoints = Joi.number().integer();
const againstPoints = Joi.number().integer();
const points = Joi.number().integer();
const championshipId = Joi.number().integer();


const createTeamSchema = Joi.object({
    name: name.required(),
    player:player.required(),
    coach: coach.required(),
    winnerGames: winnerGames.required(),
    losedGames: losedGames.required(),
    WGames: WGames.required(),
    favorPoints: favorPoints.required(),
    againstPoints: againstPoints.required(),
    points: points.required(),
    image: image,
    championshipId: championshipId.required(),
});

const updateTeamSchema = Joi.object({
    name:name,
    player:player,
    coach: coach,
    image: image,
    winnerGames,
    losedGames,
    WGames,
    favorPoints,
    againstPoints,
    points,
    championshipId: championshipId
});

const getTeamSchema = Joi.object({
    id: id.required()
});


module.exports = { createTeamSchema, updateTeamSchema, getTeamSchema }