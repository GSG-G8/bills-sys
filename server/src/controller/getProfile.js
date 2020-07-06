const { getProfile } = require('../queries/getProfile');

exports.getProfile = async (req, res, next) => {
  try {
    const userData = await getProfile(req.user.id);
    res.json(userData);
  } catch (err) {
    next(err);
  }
};
