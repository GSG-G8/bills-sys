const { User } = require('../models');

exports.checkEmail = (email) =>
  User.findAll({
    where: {
      email,
    },
  });
