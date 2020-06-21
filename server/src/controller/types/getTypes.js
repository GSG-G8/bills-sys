const getAllBillTypes = require('../../queries/getAllBillTypes');

const getTypes = (req, res, next) => {
  getAllBillTypes()
    .then((data) => res.json(data))
    .catch(next);
};

module.exports = getTypes;
