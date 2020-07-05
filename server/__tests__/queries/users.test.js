const sequelize = require('../../src/models/connection');
const { checkEmail } = require('../../src/queries/checkEmail');
const { getProfile } = require('../../src/queries/getProfile');

describe('test users queries', () => {
  afterAll(() => sequelize.close());
  describe('test checked email return the user data', () => {
    it('return user data', async () => {
      expect.assertions(2);
      const email = 'Allison_DAmore@yahoo.com';
      const [users] = await checkEmail(email);
      const { dataValues } = users;
      expect(dataValues.first_name).toBe('Maryam');
      expect(dataValues.last_name).toBe('Turner');
    });
  });

  describe('test get profile query', () => {
    afterAll(() => sequelize.close());
    it('get profile query', async () => {
      expect.assertions(4);
      const user = await getProfile(1);
      expect(user.first_name).toBe('Maryam');
      expect(user.last_name).toBe('Turner');
      expect(user.email).toBe('Allison_DAmore@yahoo.com');
      expect(user.mobile_num).toBe('478-517-5082');
    });
  });
});
