const getBillsStats = require('../../src/queries/getBill');
const sequelize = require('../../src/models/connection');

describe('test get stats query', () => {
  afterAll(() => sequelize.close());
  it('get bills stats query', async () => {
    expect.assertions(1);
    const stats = await getBillsStats(1, 1, 3, 2020);
    expect(stats.get('amount')).toBe(93);
  });
});
