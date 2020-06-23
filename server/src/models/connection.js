const { Sequelize } = require('sequelize');
require('env2')('.env');

let dbUrl;

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DATABASE_TEST_URL;
} else {
  dbUrl = process.env.DATABASE_URL;
}

const sequelize = new Sequelize(dbUrl, { logging: false });

module.exports = sequelize;
