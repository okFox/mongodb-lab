const request = require('supertest');
const app = require('../lib/app');

describe('application routes', () => {
  it('has a home route that says hello everyone', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });

  it('has a /api/colors post route', () => {
    return request(app)
      .post('/api/colors')
      .send({
        name: 'bestColor',
        red: 25,
        green: 25,
        blue: 25
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'bestColor',
          red: 25,
          green: 25,
          blue: 25
        });
      });
  });
});
