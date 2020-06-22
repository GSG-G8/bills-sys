/* eslint-disable camelcase */
const { Bill, User, Type } = require('../models');
const { bills, types, users } = require('./data.json');
const sequelize = require('../models/connection');

(async () => {
  await sequelize.sync({ force: true });

  const usersPromises = users.map(
    ({
      id,
      email,
      family_count,
      first_name,
      is_married,
      last_name,
      mobile_num,
      password,
    }) =>
      User.create({
        id,
        email,
        family_count,
        first_name,
        is_married,
        last_name,
        mobile_num,
        password,
      })
  );
  const typesPromises = types.map((name) => Type.create({ name }));

  await Promise.all([...usersPromises, ...typesPromises]);
  await Promise.all(
    bills.map(({ amount, billing_month, billing_year, type, id }) =>
      Bill.create({
        amount,
        billing_month,
        billing_year,
        type_id: type,
        user_id: id,
      })
    )
  );
})();
