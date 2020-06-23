const getAllBills = require('../../queries/getAllBills');

exports.getBills = async (req, res, next) => {
  try {
    const userBills = await getAllBills(req.user.id);
    res.json(userBills);
  } catch (err) {
    next(err);
  }
};
