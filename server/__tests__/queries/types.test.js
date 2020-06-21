const { sequelize } = require('../../src/models/connection');
const getAllBillTypes = require('../../src/queries/getAllBillTypes');

describe('test queries related to bill types', () => {
  afterAll(() => sequelize.close());
  describe('test getAllBillTypes', () => {
    it('return all bill types', async () => {
      expect.assertions(5);
      const billTypes = await getAllBillTypes().map((e) => e.get('name'));
      expect(billTypes).toHaveLength(4);
      expect(billTypes).toContain('water');
      expect(billTypes).toContain('electricity');
      expect(billTypes).toContain('internet');
      expect(billTypes).toContain('mobile');
    });
  });
});
