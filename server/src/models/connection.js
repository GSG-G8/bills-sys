const { Sequelize } = require('sequelize');
require('env2')('./.env');

let dbUrl;

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DATABASE_TEST_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DATABASE_DEV_URL;
} else {
  throw new Error('No Database URL!!!');
}

const sequelize = new Sequelize(dbUrl);

module.exports = sequelize;
