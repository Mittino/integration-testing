'use strict';

process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

var allPuppies = null;

beforeEach((done) => {
  knex.migrate.latest().then(() => {
    knex.seed.run().then(() =>{
      knex('puppies').then(puppies => {
        allPuppies = puppies;
        done();
      });
    });
  });
});

afterEach((done) => {
  knex.migrate.rollback()
  .then(() => {
    done();
  });
});

describe('GET /puppies', () => {
  it('gets all puppies', done => {
    request(app)
    .get('/puppies')
    .expect('Content-Type', /json/)
    .end((err,res) => {
      expect(res.body.length).to.equal(allPuppies.length);
      done();
    });
  });
});
