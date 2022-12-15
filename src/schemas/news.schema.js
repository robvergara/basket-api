const Joi = require('joi');

// const id = Joi.string().uuid();
const id = Joi.number().integer();
const title = Joi.string().min(8).max(125);
const body = Joi.string().min(50).max(5000);
const image = Joi.string().uri();

const createNewsSchema = Joi.object({
    title: title.required(),
    body: body.required(),
    image: image.required()
});

const updateNewsSchema = Joi.object({
    title,
    body,
    image
});

const getNewsSchema = Joi.object({
    id: id.required(),
});

module.exports = { createNewsSchema, updateNewsSchema, getNewsSchema };