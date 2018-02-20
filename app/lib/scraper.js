'use strict';

class Scraper {
  getWord(entry) {
    return entry.window.document.querySelector('.title').textContent;
  }

  getDefinition(entry) {
    return entry.window.document.querySelector('.content').textContent;
  }

  getEntry(entry) {
    let word = this.getWord(entry);
    let definition = this.getDefinition(entry);
    return { word, definition };
  }
}

module.exports = Scraper;
