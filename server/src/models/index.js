const Bill = require('./Bill');
const Type = require('./Type');
const User = require('./User');
const { sequelize } = require('./connection');

sequelize.sync();
// Type.bulkCreate([{ name: 'water' }]);

// User.bulkCreate([
//   {
//     first_name: 'Abeer',
//     last_name: 'Karam',
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
