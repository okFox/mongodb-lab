require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
require('../lib/utils/connect').connect();

let bestColorId = '';

describe('application routes', () => {
  it('has a home route that says hello everyone', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });

  it('has a /api/post post route', () => request(app)
    .post('/api/post')
    .send({
      name: 'bestColor',
      red: 25,
      green: 25,
      blue: 25
    })
    .then(res => {
      expect(res.body).toEqual(expect.objectContaining({
        name: 'bestColor',
        red: 25,
        green: 25,
        blue: 25
      }));
      bestColorId = res.body._id;
    }));

  it('has a route that finds by ID', () => {
    return request(app)
      .get(`/api/colors/${bestColorId}`)
      .then(res => {
        expect(res.body._id).toContain(bestColorId);
      });
  });
  // it('can update an entry by ID', () => {
  //   return request(app)
  //     .put(`/api/put/${bestColorId}`)
  //     .send ({
  //       'red': 200,
  //     })
  //     .then(res => {
  //       console.log(res.body);
  //       expect(res.body).toContain({red: 200});
  //     });
  // });

});

