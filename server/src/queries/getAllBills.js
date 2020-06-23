const { Bill, Type } = require('../models');

const getAllBills = (id) =>
  Bill.findAll({
    attributes: [
      'id',
      'billing_year',
      'billing_month',
      'amount',
      'user_id',
      'type_id',
    ],
    where: { user_id: id },
    include: [
      {
        model: Type,
        attributes: ['name'],
      },
    ],
  });

module.exports = getAllBills;
