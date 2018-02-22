'use strict';

const express = require('express');
const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const Scraper = require('./lib/scraper');

const app = express();
const scraper = new Scraper();
const url = 'http://www.dictionaryofobscuresorrows.com/page/2';

app.get('/', (req, res) => {
  let entries;
  request(url, function(err, response, html) {
    const page = new JSDOM(html);
    entries = scraper.getPageEntries(page);
    res.send(entries);
  });
});

app.listen(8000);

module.exports = app;
