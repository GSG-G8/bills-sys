const sequelize = require('../../src/models/connection');
const getAllBills = require('../../src/queries/getAllBills');

describe('test queries related to bills', () => {
  afterAll(() => sequelize.close());
  describe('test getAllBills', () => {
    it('return all bills', async () => {
      expect.assertions(5);
      const bills = await getAllBills().map((e) => e.get());
      expect(bills).toHaveLength(48);
      expect(bills).toContainEqual({
        id: 58,
        billing_year: 2020,
        billing_month: 3,
        amount: 88,
        user_id: 2,
        type_id: 2,
      });
      expect(bills).toContainEqual({
        id: 95,
        billing_year: 2020,
        billing_month: 12,
        amount: 177,
        user_id: 2,
        type_id: 3,
      });
      expect(bills).toContainEqual({
        id: 88,
        billing_year: 2020,
        billing_month: 10,
        amount: 44,
        user_id: 2,
        type_id: 4,
      });
      expect(bills).toContainEqual({
        id: 89,
        billing_year: 2020,
        billing_month: 11,
        amount: 77,
        user_id: 2,
        type_id: 1,
      });
    });
  });
});
