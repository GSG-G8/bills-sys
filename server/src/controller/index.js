const { clientError, serverError } = require('./error');
const { getBills } = require('./bills/getBills');
const getTypes = require('./types/getTypes');

module.exports = {
  clientError,
  serverError,
  getTypes,
  getBills,
};
