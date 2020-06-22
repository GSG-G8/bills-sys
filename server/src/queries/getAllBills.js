const { Bill } = require('../models');

const getAllBills = () =>
  Bill.findAll({
    attributes: ['user_id'],
  });

module.exports = getAllBills;
