require('env2')('./.env');
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { checkEmail } = require('../queries');
const loginSchema = require('./validation/loginSchema');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    try {
      await loginSchema.validateAsync(req.body, {
        abortEarly: false,
      });
    } catch (error) {
      throw Boom.badRequest(error.details.map((e) => e.message));
    }
    const [users] = await checkEmail(email);
    if (users) {
      const { dataValues } = users;
      const hashedPassword = dataValues.password;
      const result = await bcrypt.compare(password, hashedPassword);
      if (result === false) {
        throw Boom.badRequest('Please double check your password or email');
      } else {
        const token = jwt.sign({ id: dataValues.id }, process.env.SECRET_KEY);
        res.cookie('token', token).status(200);
        res.json({
          statusCode: 200,
          msg: 'logged in successfully',
          userId: dataValues.id,
        });
      }
    } else {
      throw Boom.badRequest('Please double check your password or email');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = login;
