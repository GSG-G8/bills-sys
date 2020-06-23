require('env2')('./.env');
const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');

exports.protectedRoute = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) res.send('you have to sign in');
  jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) throw Boom.unauthorized('Invalid token');
    req.user = decoded;
    next();
  });
};
