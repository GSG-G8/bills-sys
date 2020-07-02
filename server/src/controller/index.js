const login = require('./auth');

const { clientError, serverError } = require('./error');
const { getBills } = require('./bills/getBills');
const { getProfile } = require('./getProfile');

const getTypes = require('./types/getTypes');
const logout = require('./logout');
const getStats = require('./stats/getStats');

module.exports = {
  clientError,
  serverError,
  getTypes,
  getBills,
  getStats,
  login,
  logout,
  getProfile,
};
