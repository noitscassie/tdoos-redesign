'use strict';

const helpers = require('./../helpers');
const chai = require('chai');
const Scraper = require('./../../app/lib/scraper');

const fakeTextEntry = helpers.fakeTextEntry;
const expect = chai.expect;

describe('Scraper', () => {
  describe('getWord', () => {
    it('returns a word from a TDOOS entry', () => {
      const scraper = new Scraper();
      expect(scraper.getWord(fakeTextEntry)).to.eql('kuebiko');
    });
  });
  describe('getDefinition', () => {
    it('returns a definition from a TDOOS entry', () => {
      const scraper = new Scraper();
      expect(scraper.getDefinition(fakeTextEntry)).to.eql('n. some definition');
    });
  });
  describe('getEntry', () => {
    it('returns a hash with a word and definition', () => {
      const scraper = new Scraper();
      expect(scraper.getEntry(fakeTextEntry)).to.eql({
        word: 'kuebiko',
        definition: 'n. some definition'
      });
    });
  });
});
