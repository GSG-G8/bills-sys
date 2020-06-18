const Bill = require('./Bill');
const Type = require('./BillType');
const User = require('./User');
const { sequelize } = require('./connection');

sequelize.sync();
// Type.bulkCreate([{ type_name: 'water' }]);

// User.bulkCreate([
//   {
//     firstname: 'Abeer',
//     lastname: 'Karam',
//     password: 'ak',
//     email: 'abeer@gmail.com',
//     is_married: true,
//     mobile_num: '5576789896',
//     family_count: 3,
//   },
// ]);

// Bill.bulkCreate([
//   { billing_year: 2020, billing_month: 3, amount: 7, user_id: 1, type_id: 1 },
// ]);
module.exports = { Bill, Type, User };
