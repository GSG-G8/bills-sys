require('env2')('./.env');
const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');

exports.protectedRoute = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) res.send('un-authorized');
  jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) throw Boom.unauthorized('you have to signIn');
    req.userId = decoded.id;
    next();
  });
};
