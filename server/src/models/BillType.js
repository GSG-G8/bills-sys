const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');
const Bill = require('./Bill');

const Type = sequelize.define('types', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  type_name: { type: DataTypes.STRING, allowNull: false },
});
Type.hasOne(Bill);
module.exports = Type;
