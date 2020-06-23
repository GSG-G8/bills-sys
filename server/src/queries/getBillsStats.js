const { Bill } = require('../models');

const getBillsState = (userId, typeId, month, year) =>
  Bill.findOne({
    where: {
      user_id: userId,
      type_id: typeId,
      billing_month: month,
      billing_year: year,
    },
    attributes: ['amount'],
  });

module.exports = getBillsState;
