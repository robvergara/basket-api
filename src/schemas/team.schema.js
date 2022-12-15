const { array } = require('joi');
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
const name_ = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const position = Joi.string();
const annotations = Joi.number().integer();
const triples = Joi.number().integer();
const teamId = Joi.number().integer();
const name_coach= Joi.string().min(3).max(15);
const lastName_coach = Joi.string().min(3).max(15);


const playerSchema = Joi.object({
    name:name_.required(),
    lastName: lastName.required(),
    position: position.required(),
    annotations: annotations.required(),
    triples: triples.required(),
    teamId: id
})

const coachSchema = Joi.object({
    name:name_coach.required(),
    lastName: lastName_coach.required(),
    teamId: id
})

const players = Joi.array().items(playerSchema).min(1).unique().required();
const Coach = Joi.array().items(coachSchema).min(1).unique().required();

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
    players,
    Coach
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