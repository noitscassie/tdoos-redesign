'use strict';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const fakeTextEntry = new JSDOM(`
  <div class="post text">
    <a href="#">Some text</a>
    <h2 class="title"><a href="#">kuebiko</a></h2>
    <div class="content"><p><i>n</i>. some definition</p></div>
  </div>
  `);

const fakePage = new JSDOM(`
  <body>
    <div class="post text">
      <a href="#">Some text</a>
      <h2 class="title"><a href="#">kuebiko</a></h2>
      <div class="content"><p><i>n</i>. some definition</p></div>
    </div>
    <div class="post video">
      <a href="#">Some text</a>
      <h2 class="title"><a href="#">lutalica</a></h2>
      <div class="content"><p><i>n</i>. another definition</p></div>
    </div>
    <div class="post text">
      <a href="#">Some text</a>
      <h2 class="title"><a href="#">lachesism</a></h2>
      <div class="content"><p><i>n</i>. a third definition definition</p></div>
    </div>
  </body>
  `);

module.exports.fakeTextEntry = fakeTextEntry;
module.exports.fakePage = fakePage;
