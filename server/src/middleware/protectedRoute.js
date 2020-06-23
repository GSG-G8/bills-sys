require('env2')('./.env');
const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');

exports.protectedRoute = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) res.send('Access Denied');
  // eslint-disable-next-line no-unused-vars
  jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) throw Boom.unauthorized('Invalid Token');
    else {
      req.userId = token.id;
      next();
    }
  });
};
