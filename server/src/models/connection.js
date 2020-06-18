const { Sequelize } = require('sequelize');
require('env2')('./.env');

const sequelize = new Sequelize(process.env.DB_URL);

sequelize.authenticate();

module.exports = { sequelize };
