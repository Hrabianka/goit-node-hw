const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name - field",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "missing required email - field",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing required phone - field",
  }),
  favorite: Joi.boolean(),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
}).min(1).messages({
  "object.min": "missing fields",
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
  }),
});

module.exports = {
  contactSchema,
  updateContactSchema,
  updateFavoriteSchema,
};
