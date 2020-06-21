const { DataTypes } = require('sequelize');
const User = require('./User');
const Type = require('./Type');
const { sequelize } = require('./connection');

const Bill = sequelize.define('bills', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  billing_year: { type: DataTypes.INTEGER, allowNull: false },
  billing_month: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.INTEGER, allowNull: false },
});
Bill.belongsTo(User, { foreignKey: 'user_id' });
Bill.belongsTo(Type, { foreignKey: 'type_id' });
module.exports = Bill;
