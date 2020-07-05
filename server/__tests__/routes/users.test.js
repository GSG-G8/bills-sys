const request = require('supertest');
const sequelize = require('../../src/models/connection');
const app = require('../../src/app');

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTkyOTM3MzM4fQ.oMH81PEhFOH7cK6ydhG-wp8DyLIopyDoXDW-gUSyP24';

describe('test users route', () => {
  afterAll(() => sequelize.close());
  it('return status 200 for success login', async () => {
    expect.assertions(1);
    const reqBody = {
      email: 'Conrad_Rosenbaum38@gmail.com',
      password: '123456',
    };
    const res = await request(app)
      .post('/api/v1/login')
      .send(reqBody)
      .set('Accept', 'application/json')
      .expect(200);
    expect(res.header['set-cookie'][0].split('=')[0]).toStrictEqual('token');
  });

  it('return status 400 for bad request', async () => {
    expect.assertions(1);
    const reqBody = {
      email: 'Conrad_Rosenbaum38@gmail.com',
      password: '12345',
    };
    const res = await request(app)
      .post('/api/v1/login')
      .send(reqBody)
      .set('Accept', 'application/json')
      .expect(400);
    expect(res.body.message).toStrictEqual(
      'Your password has to be at least six characters or numbers'
    );
  });

  it('return status 400 for Not existed email', async () => {
    expect.assertions(1);
    const reqBody = {
      email: 'Conrad_Rosenbaum8@gmail.com',
      password: '123456',
    };
    const res = await request(app)
      .post('/api/v1/login')
      .send(reqBody)
      .set('Accept', 'application/json')
      .expect(400);
    expect(res.body.message).toStrictEqual(
      'Please double check your password or email'
    );
  });

  it('return status 400 for invalid password', async () => {
    expect.assertions(1);
    const reqBody = {
      email: 'Conrad_Rosenbaum38@gmail.com',
      password: '1234566',
    };
    const res = await request(app)
      .post('/api/v1/login')
      .send(reqBody)
      .set('Accept', 'application/json')
      .expect(400);
    expect(res.body.message).toStrictEqual(
      'Please double check your password or email'
    );
  });

  describe('test logout', () => {
    it('route /logout', async () => {
      expect.assertions(2);
      const result = await request(app)
        .get('/api/v1/logout')
        .set('Cookie', [token])
        .set('Accept', 'application/json')
        .expect(200);
      expect(result.body.message).toStrictEqual('logout successfully');
      expect(result.header['set-cookie']).toContainEqual(
        'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      );
    });
  });

  describe('test get profile route', () => {
    it('route /profile', async () => {
      expect.assertions(4);
      const result = await request(app)
        .get('/api/v1/profile')
        .set('Accept', 'application/json')
        .set('Cookie', [
          'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTkzOTM2NzMyfQ.1zjgDwHRr-1KOFJQGTBGkmESCMo5NeJwW7hcjt9h6nU',
        ])
        .expect(200);
      expect(result.body.first_name).toBe('Arturo');
      expect(result.body.last_name).toBe('Carter');
      expect(result.body.email).toBe('Conrad_Rosenbaum38@gmail.com');
      expect(result.body.mobile_num).toBe('692-815-0979');
    });
  });
});
