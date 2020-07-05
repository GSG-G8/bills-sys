const { User } = require('../models');

exports.getProfile = (id) =>
  User.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['password'] },
  });
