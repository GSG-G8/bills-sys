const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  is_married: { type: DataTypes.STRING, allowNull: false },
  mobile_num: { type: DataTypes.STRING, allowNull: false },
  family_count: { type: DataTypes.INTEGER, allowNull: false },
});
module.exports = User;
