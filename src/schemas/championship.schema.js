const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const cantTeams = Joi.number().integer().min(3);

const createChampionshipSchema = Joi.object({
    name: name.required(),
    cantTeams: cantTeams.required()
});

const updateChampionshipSchema = Joi.object({
    name:name,
    cantTeams: cantTeams
});

const getChampionshipSchema = Joi.object({
    id: id.required(),
});

module.exports = { createChampionshipSchema, updateChampionshipSchema, getChampionshipSchema }