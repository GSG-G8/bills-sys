const { Type } = require('../models');

const getAllBillTypes = () =>
  Type.findAll({
    attributes: ['id', 'name'],
  });

module.exports = getAllBillTypes;
