const request = require('supertest');
const app = require('../../src/app');
const sequelize = require('../../src/models/connection');

describe('test requests related to bills', () => {
  // eslint-disable-next-line jest/no-hooks
  afterAll(() => sequelize.close());
  describe('test get request to /bills', () => {
    it('should return all bills with status of 200', async () => {
      expect.assertions(5);
      const response = await request(app)
        .get('/api/v1/bills')
        .set('Accept', 'application/json')
        .expect(200);
      expect(response.body).toHaveLength(48);
      expect(response.body).toContainEqual({
        id: 58,
        billing_year: 2020,
        billing_month: 3,
        amount: 88,
        user_id: 2,
        type_id: 2,
      });
      expect(response.body).toContainEqual({
        id: 95,
        billing_year: 2020,
        billing_month: 12,
        amount: 177,
        user_id: 2,
        type_id: 3,
      });
      expect(response.body).toContainEqual({
        id: 88,
        billing_year: 2020,
        billing_month: 10,
        amount: 44,
        user_id: 2,
        type_id: 4,
      });
      expect(response.body).toContainEqual({
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
