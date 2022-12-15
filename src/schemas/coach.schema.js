const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const teamId = Joi.number().integer();

const createCoachSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    teamId: teamId.required()
});

const updateCoachSchema = Joi.object({
    name: name,
    lastName: lastName,
    teamId: teamId
})

const getCoachSchema = Joi.object({
    id: id.required()
})

module.exports = { createCoachSchema, updateCoachSchema, getCoachSchema };