'use strict';

const helpers = require('./../helpers');
const chai = require('chai');
const Scraper = require('./../../app/scraper');

const fakeEntry = helpers.fakeEntry;
const expect = chai.expect;

describe('Scraper', () => {
  describe('getWord', () => {
    it('returns a word from TDOOS', () => {
      const scraper = new Scraper();
      expect(scraper.getWord(fakeEntry)).to.equal('kuebiko');
    });
  });
});
