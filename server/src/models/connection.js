const { Sequelize } = require('sequelize');
require('env2')('./.env');

let dbUrl;

if (dbUrl === 'test') {
  dbUrl = process.env.DATABASE_TEST_URL;
} else {
  dbUrl = process.env.DATABASE_URL;
}

const sequelize = new Sequelize(dbUrl);

module.exports = sequelize;
