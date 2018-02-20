'use strict';

class Scraper {
  getWord(entry) {
    return entry.window.document.querySelector('.title').textContent;
  }
}

module.exports = Scraper;
