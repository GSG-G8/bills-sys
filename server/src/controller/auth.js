require('env2')('./config.env');
const Boom = require('@hapi/boom');
// const bcrypt = require('bcrypt');
const { checkEmail } = require('../queries');

// eslint-disable-next-line no-unused-vars
const checkUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const { rows } = await checkEmail(email);
  if (rows[0]) {
    return rows[0];
  }
  throw Boom.unauthorized('Email does not exist, signup first');
};

module.exports = { checkUserEmail };
