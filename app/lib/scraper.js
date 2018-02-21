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

  getEntryElements(page) {
    return page.window.document.getElementsByClassName('post text');
  }

  getPageEntries(page) {
    let entryElements = this.getEntryElements(page);
    let entries = []
    for (let element of entryElements) {
      entries.push(element);
    }
    return entries;
  }
}

module.exports = Scraper;
