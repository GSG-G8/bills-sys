const sequelize = require('../../src/models/connection');
const getAllBills = require('../../src/queries/getAllBills');

describe('test queries related to bills', () => {
  afterAll(() => sequelize.close());
  describe('test getAllBills', () => {
    it('return all bills', async () => {
      expect.assertions(5);
      const bills = await getAllBills(2).map((e) => e.get({ plain: true }));
      expect(bills).toHaveLength(48);
      expect(bills).toContainEqual({
        id: 49,
        billing_year: 2020,
        billing_month: 1,
        amount: 74,
        user_id: 2,
        type_id: 1,
        type: { name: 'water' },
      });
      expect(bills).toContainEqual({
        id: 50,
        billing_year: 2020,
        billing_month: 1,
        amount: 86,
        user_id: 2,
        type_id: 2,
        type: { name: 'electricity' },
      });
      expect(bills).toContainEqual({
        id: 51,
        billing_year: 2020,
        billing_month: 1,
        amount: 176,
        user_id: 2,
        type_id: 3,
        type: { name: 'internet' },
      });
      expect(bills).toContainEqual({
        id: 52,
        billing_year: 2020,
        billing_month: 1,
        amount: 47,
        user_id: 2,
        type_id: 4,
        type: { name: 'mobile' },
      });
    });
  });
});
