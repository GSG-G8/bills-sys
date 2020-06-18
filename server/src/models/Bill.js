const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');

const Bill = sequelize.define('bills', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  billing_year: { type: DataTypes.INTEGER, allowNull: false },
  billing_month: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.INTEGER, allowNull: false },
});
module.exports = Bill;
