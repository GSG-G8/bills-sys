const request = require('supertest');
const app = require('../../src/app');
const sequelize = require('../../src/models/connection');

console.log(process.env.SECRET_KEY);
describe('test requests related to bills', () => {
  afterAll(() => sequelize.close());
  describe('test get request to /bills/me', () => {
    it('should return all bills with status of 200', async () => {
      expect.assertions(5);
      const response = await request(app)
        .get('/api/v1/bills/me')
        .set('Accept', 'application/json')
        .set('Cookie', [
          'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkyOTI5NDU0fQ.6djnNEyhspmE43z7dHufLeUnWHU0ndaldeBxG9d2p1E; Path=/',
        ])
        .expect(200);
      expect(response.body).toHaveLength(48);
      expect(response.body).toContainEqual({
        amount: 97,
        billing_month: 1,
        billing_year: 2020,
        id: 49,
        type: { name: 'water' },
        type_id: 1,
        user_id: 2,
      });
      expect(response.body).toContainEqual({
        amount: 223,
        billing_month: 1,
        billing_year: 2020,
        id: 51,
        type: { name: 'electricity' },
        type_id: 2,
        user_id: 2,
      });
      expect(response.body).toContainEqual({
        amount: 113,
        billing_month: 1,
        billing_year: 2020,
        id: 53,
        type: { name: 'internet' },
        type_id: 3,
        user_id: 2,
      });
      expect(response.body).toContainEqual({
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
