const { Bill } = require('../models');

const getAllBills = () =>
  Bill.findAll({
    attributes: [
      'id',
      'billing_year',
      'billing_month',
      'amount',
      'user_id',
      'type_id',
    ],
    where: { user_id: 2 },
  });

module.exports = getAllBills;
