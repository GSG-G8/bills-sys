const sequelize = require('../../src/models/connection');
const { checkEmail } = require('../../src/queries/checkEmail');

describe('test users queries', () => {
  afterAll(() => sequelize.close());
  describe('test checked email return the user data', () => {
    it.only('return user data', async () => {
      expect.assertions(2);
      const email = 'Allison_DAmore@yahoo.com';
      const [users] = await checkEmail(email);
      const { dataValues } = users;
      expect(dataValues.first_name).toBe('Maryam');
      expect(dataValues.last_name).toBe('Turner');
    });
  });
});
