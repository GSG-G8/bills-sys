const { verify } = require('../util/jwt');

module.exports = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) res.json({ message: 'You have to sign in' });
  else {
    try {
      req.user = await verify(token);
      next();
    } catch (err) {
      next(err);
    }
  }
};
