const { Sequelize } = require('sequelize');
require('env2')('./.env');

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;
