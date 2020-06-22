const { sequelize } = require('../../src/models/connection');
const getAllBillTypes = require('../../src/queries/getAllBillTypes');

describe('test queries related to bill types', () => {
  afterAll(() => sequelize.close());
  describe('test getAllBillTypes', () => {
    it('return all bill types', async () => {
      expect.assertions(5);
      const billTypes = await getAllBillTypes().map((e) => e.get());
      expect(billTypes).toHaveLength(4);
      expect(billTypes).toContainEqual({ id: 1, name: 'water' });
      expect(billTypes).toContainEqual({ id: 2, name: 'electricity' });
      expect(billTypes).toContainEqual({ id: 3, name: 'internet' });
      expect(billTypes).toContainEqual({ id: 4, name: 'mobile' });
    });
  });
});
