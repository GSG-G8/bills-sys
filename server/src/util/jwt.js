const jwt = require('jsonwebtoken');

exports.sign = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET_KEY, (err, encoded) => {
      if (err) reject(err);
      else resolve(encoded);
    });
  });

exports.verfy = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
