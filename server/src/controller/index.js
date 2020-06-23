const { clientError, serverError } = require('./error');
const getTypes = require('./types/getTypes');
const getStats = require('./stats/getStats');

module.exports = {
  clientError,
  serverError,
  getTypes,
  getStats,
};
