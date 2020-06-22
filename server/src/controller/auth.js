require('env2')('./.env');
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { checkEmail } = require('../queries');

// eslint-disable-next-line no-unused-vars
const checkUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const [users] = await checkEmail(email);
  if (users) {
    const { dataValues } = users;
    req.userData = dataValues;
    next();
  } else {
    throw Boom.unauthorized('Email does not exist, signup first');
  }
};

const signIn = async (req, res, next) => {
  const hashedPassword = req.userData.password;
  const { password } = req.body;
  try {
    const result = await bcrypt.compare(password, hashedPassword);
    if (result === false) {
      throw Boom.unauthorized('invalid password');
    } else {
      const token = jwt.sign({ id: req.userData.id }, process.env.SECRET_KEY);
      res.cookie('token', token).status(200);
      res.json({ msg: 'logged in successfully' });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { checkUserEmail, signIn };
