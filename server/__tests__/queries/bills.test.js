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
        amount: 97,
        billing_month: 1,
        billing_year: 2020,
        id: 49,
        type: { name: 'water' },
        type_id: 1,
        user_id: 2,
      });
      expect(bills).toContainEqual({
        amount: 223,
        billing_month: 1,
        billing_year: 2020,
        id: 51,
        type: { name: 'electricity' },
        type_id: 2,
        user_id: 2,
      });
      expect(bills).toContainEqual({
        amount: 113,
        billing_month: 1,
        billing_year: 2020,
        id: 53,
        type: { name: 'internet' },
        type_id: 3,
        user_id: 2,
      });
      expect(bills).toContainEqual({
        amount: 63,
        billing_month: 1,
        billing_year: 2020,
        id: 52,
        type: { name: 'mobile' },
        type_id: 4,
        user_id: 2,
      });
    });
  });
});
