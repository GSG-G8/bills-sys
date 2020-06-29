const getAllBillTypes = require('../../queries/getAllBillTypes');

const getTypes = async (req, res, next) => {
  try {
    const data = await getAllBillTypes();
    res.json({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};

module.exports = getTypes;
