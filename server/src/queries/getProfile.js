const { User } = require('../models');

exports.getProfile = (id) =>
  User.findAll({
    where: {
      id,
    },
  });
