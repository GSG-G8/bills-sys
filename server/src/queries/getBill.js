const { Bill } = require('../models');

const getBill = (userId, typeId, month, year) =>
  Bill.findOne({
    where: {
      user_id: userId,
      type_id: typeId,
      billing_month: month,
      billing_year: year,
    },
    attributes: ['amount'],
  });

module.exports = getBill;
