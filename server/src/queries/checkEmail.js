const { Sequelize } = require('sequelize');
const { User } = require('../models');

exports.checkEmail = (email) =>
  User.findAll({
    where: Sequelize.where(
      Sequelize.fn('lower', Sequelize.col('email')),
      Sequelize.fn('lower', email)
    ),
  });
