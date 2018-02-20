'use strict';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const fakeTextEntry = new JSDOM(`
  <div class="post text">
    <a herf="#">Some text</a>
    <h2 class="title"><a href="#">kuebiko</a></h2>
    <div class="content"><p><i>n</i>. some definition</p></div>
  </div>
  `);

const fakePage = new JSDOM(`
  <body>
    <div class="post text"></div>
    <div class="post video"></div>
    <div class="post text"></div>
  </body>
  `);

module.exports.fakeTextEntry = fakeTextEntry;
module.exports.fakePage = fakePage;
