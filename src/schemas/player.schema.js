const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const position = Joi.string();
const annotations = Joi.number().integer();
const triples = Joi.number().integer();
const teamId = Joi.number().integer();

const createPlayerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    position: position.required(),
    annotations: annotations,
    triples: triples,
    teamId: teamId.required()
});

const updatePlayerSchema = Joi.object({
    name: name,
    lastName: lastName,
    position: position,
    annotations: annotations,
    triples: triples,
    teamId: teamId
})

const getPlayerSchema = Joi.object({
    id: id.required()
})

module.exports = { createPlayerSchema, updatePlayerSchema, getPlayerSchema };