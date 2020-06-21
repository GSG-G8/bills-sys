const { Type } = require('../models');

const getAllBillTypes = () => Type.findAll();

module.exports = getAllBillTypes;
