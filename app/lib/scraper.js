'use strict';

class Scraper {
  getWord(entry) {
    let childNodes = entry.childNodes;
    for (let node of childNodes) {
      if (node.className === 'title') {
        return node.textContent;
      };
    };
  }

  getDefinition(entry) {
    let childNodes = entry.childNodes;
    for (let node of childNodes) {
      if (node.className === 'content') {
        return node.textContent;
      };
    };
  }

  getEntry(entry) {
    let word = this.getWord(entry);
    let definition = this.getDefinition(entry);
    return { word, definition };
  }

  getEntryElements(page) {
    return page.window.document.querySelectorAll('.post.text');
  }

  getPageEntries(page) {
    let entryElements = this.getEntryElements(page);
    let entries = [];
    for (let element of entryElements) {
      let entry = this.getEntry(element);
      entries.push(entry);
    }
    return entries;
  }
}

module.exports = Scraper;
