const getAllBills = require('../../queries/getAllBills');

exports.getBills = async (req, res, next) => {
  try {
    const user = await getAllBills();
    res.json(user);
  } catch (err) {
    next(err);
  }
};
