const { getProfile } = require('../../queries/getProfile');

exports.getProfile = async (req, res, next) => {
  const {
    user: { id },
  } = req;
  try {
    const userData = await getProfile(id);
    res.json(userData);
  } catch (err) {
    next(err);
  }
};
