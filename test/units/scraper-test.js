'use strict';

const helpers = require('./../helpers');
const chai = require('chai');
const Scraper = require('./../../app/lib/scraper');

const fakeTextEntry = helpers.fakeTextEntry;
const fakePage = helpers.fakePage;
const expect = chai.expect;


describe('Scraper', () => {
  let scraper;
  before(() => {
    scraper = new Scraper();
  });

  describe('getWord', () => {
    it('returns a word from a TDOOS entry', () => {
      expect(scraper.getWord(fakeTextEntry)).to.eql('kuebiko');
    });
  });
  describe('getDefinition', () => {
    it('returns a definition from a TDOOS entry', () => {
      expect(scraper.getDefinition(fakeTextEntry)).to.eql('n. some definition');
    });
  });
  describe('getEntry', () => {
    it('returns a hash with a word and definition', () => {
      expect(scraper.getEntry(fakeTextEntry)).to.eql({
        word: 'kuebiko',
        definition: 'n. some definition',
      });
    });
  });
  describe('getEntryElements', () => {
    it('returns an iterable object', () => {
      expect(scraper.getEntryElements(fakePage)).to.be.iterable;
    });
    it('returns an object with a length of 2', () => {
      expect(scraper.getEntryElements(fakePage).length).to.eql(2);
    });
  });
  describe('getPageEntries', () => {
    it('returns an array', () => {
      expect(scraper.getPageEntries(fakePage)).to.be.an('array');
    });
  });
});
