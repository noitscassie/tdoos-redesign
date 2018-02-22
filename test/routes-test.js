'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Tests routes', () => {
  describe('Tests index', () => {
    it('Should return status code 200', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});
