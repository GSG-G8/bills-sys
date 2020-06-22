const request = require('supertest');
const app = require('../../src/app');
const { sequelize } = require('../../src/models/connection');

describe('test requests related to bill types', () => {
  afterAll(() => sequelize.close());
  describe('test get request to /types', () => {
    it('should return all bill types with status of 200', async () => {
      expect.assertions(5);
      const response = await request(app)
        .get('/api/v1/types')
        .set('Accept', 'application/json')
        .expect(200);
      expect(response.body).toHaveLength(4);
      expect(response.body).toContainEqual({ id: 1, name: 'water' });
      expect(response.body).toContainEqual({ id: 2, name: 'electricity' });
      expect(response.body).toContainEqual({ id: 3, name: 'internet' });
      expect(response.body).toContainEqual({ id: 4, name: 'mobile' });
    });
  });
});
