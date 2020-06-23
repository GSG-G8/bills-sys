const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

exports.loginValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.empty': `email is a required field`,
    }),
    password: Joi.string()
      .regex(/[A-z0-9]{6,}/)
      .required()
      .messages({
        'string.empty': `Password is a required field`,
        'string.pattern.base':
          'Your password has to be at least six characters or numbers',
      }),
  });
  try {
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw Boom.badRequest(error.details.map((e) => e.message));
    next();
  } catch (error) {
    next(error);
  }
};