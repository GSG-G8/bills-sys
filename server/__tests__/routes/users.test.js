const request = require('supertest');
const sequelize = require('../../src/models/connection');
const app = require('../../src/app');

describe('test users route', () => {
  afterAll(() => sequelize.close());
  it('return status 200 for success login', async () => {
    expect.assertions(0);
    const reqBody = {
      email: 'Conrad_Rosenbaum38@gmail.com',
      password: '123456',
    };
    await request(app)
      .post('/api/v1/login')
      .send(reqBody)
      .set('Accept', 'application/json')
      .expect(200);
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

  it('return status 401 for Not existed email', async () => {
    expect.assertions(1);
    const reqBody = {
      email: 'Conrad_Rosenbaum8@gmail.com',
      password: '123456',
    };
    const res = await request(app)
      .post('/api/v1/login')
      .send(reqBody)
      .set('Accept', 'application/json')
      .expect(401);
    expect(res.body.message).toStrictEqual(
      'Email does not exist, signup first'
    );
  });

  it('return status 401 for in valid password', async () => {
    expect.assertions(1);
    const reqBody = {
      email: 'Conrad_Rosenbaum38@gmail.com',
      password: '1234566',
    };
    const res = await request(app)
      .post('/api/v1/login')
      .send(reqBody)
      .set('Accept', 'application/json')
      .expect(401);
    expect(res.body.message).toStrictEqual('invalid password');
  });
});
