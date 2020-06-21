const { Sequelize } = require('sequelize');
require('env2')('./.env');

const dbUrl = process.env.DATABASE_URL;
const sequelize = new Sequelize(dbUrl);

module.exports = sequelize;
