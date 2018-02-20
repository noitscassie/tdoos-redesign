'use strict';

class Scraper {
  getWord(entry) {
    return entry.window.document.querySelector('.title').textContent;
  }

  getDefinition(entry) {
    return entry.window.document.querySelector('.content').textContent;
  }
}

module.exports = Scraper;
