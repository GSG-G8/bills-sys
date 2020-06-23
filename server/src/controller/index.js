const login = require('./auth');

const { clientError, serverError } = require('./error');
const getTypes = require('./types/getTypes');

module.exports = {
  clientError,
  serverError,
  getTypes,
  login,
};
