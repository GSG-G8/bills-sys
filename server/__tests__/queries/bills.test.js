const getBillsStats = require('../../src/queries/getBill');
const sequelize = require('../../src/models/connection');

describe('test get stats query', () => {
  afterAll(() => sequelize.close());
  it('get bills stats query', async () => {
    expect.assertions(1);
    const stat = await getBillsStats(1, 1, 3, 2020);
    expect(stat.get('amount')).toBe(80);
  });
});
