const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) res.send('You have to sign in');
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) throw Boom.unauthorized('Invalid token');
    req.user = decoded;
    next();
  });
};
