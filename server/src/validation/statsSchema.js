const Joi = require('@hapi/joi');

const statsSchema = Joi.object({
  userId: Joi.number().min(1).required().messages({}),
  typeId: Joi.number().min(1).required(),
  billingMonth: Joi.number().min(1).max(12).required(),
  billingYear: Joi.number().min(2000).max(2020).required(),
});

module.exports = statsSchema;
