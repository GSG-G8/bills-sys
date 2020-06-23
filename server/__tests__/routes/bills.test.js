const request = require('supertest');
const app = require('../../src/app');
const sequelize = require('../../src/models/connection');

describe('test requests related to bills', () => {
  afterAll(() => sequelize.close());
  describe('test get request to /bills/me', () => {
    it('should return all bills with status of 200', async () => {
      expect.assertions(5);
      const response = await request(app)
        .get('/api/v1/bills/me')
        .set('Accept', 'application/json')
        .expect(200);
      expect(response.body).toHaveLength(48);
      expect(response.body).toContainEqual({
        id: 49,
        billing_year: 2020,
        billing_month: 1,
        amount: 74,
        user_id: 2,
        type_id: 1,
        type: { name: 'water' },
      });
      expect(response.body).toContainEqual({
        id: 50,
        billing_year: 2020,
        billing_month: 1,
        amount: 86,
        user_id: 2,
        type_id: 2,
        type: { name: 'electricity' },
      });
      expect(response.body).toContainEqual({
        id: 51,
        billing_year: 2020,
        billing_month: 1,
        amount: 176,
        user_id: 2,
        type_id: 3,
        type: { name: 'internet' },
      });
      expect(response.body).toContainEqual({
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
