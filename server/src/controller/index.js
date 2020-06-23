const login = require('./auth');

const { clientError, serverError } = require('./error');
const getTypes = require('./types/getTypes');
const logout = require('./logout');

module.exports = {
  clientError,
  serverError,
  getTypes,
  login,
  logout,
};
