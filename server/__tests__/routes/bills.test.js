const request = require('supertest');
const app = require('../../src/app');
const sequelize = require('../../src/models/connection');

describe('get stats', () => {
  afterAll(() => sequelize.close());
  it('route /bills/1/stats?typeId=1&billingMonth=3&billingYear=2020', async () => {
    expect.assertions(1);
    const result = await request(app)
      .get('/api/v1/bills/1/stats?typeId=1&billingMonth=3&billingYear=2020')
      .set('Accept', 'application/json')
      .expect(200);
    expect(result.body).not.toHaveLength(0);
  });
});
