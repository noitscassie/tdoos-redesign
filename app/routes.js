'use strict';

const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const Scraper = require('./lib/scraper');

const scraper = new Scraper();
const url = 'http://www.dictionaryofobscuresorrows.com/page/2';

function routes(app) {
  app.get('/', (req, res) => {
    let entries;
    request(url, function(err, response, html) {
      const page = new JSDOM(html);
      entries = scraper.getPageEntries(page);
      res.send(entries);
    });
  });
}

module.exports = routes;
