const getAllBills = require('../../queries/getAllBills');

exports.getBills = async (req, res, next) => {
  try {
    const userBills = await getAllBills(2);
    res.json(userBills);
  } catch (err) {
    next(err);
  }
};
