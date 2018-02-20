'use strict';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const fakeEntry = new JSDOM('<div class="post text"><a herf="#">Some text</a><h2 class="title"><a href="#">kuebiko</a></h2><div class="content"><p><i>n</i>. a definition of the word</p></div></div>');

module.exports.fakeEntry = fakeEntry;
// global.window = document.defaultView;

// <div class="post text">
// 	<a href="http://www.dictionaryofobscuresorrows.com/post/147440417070/kuebiko" class="icon"></a>
// 	<h2 class="title"><a href="http://www.dictionaryofobscuresorrows.com/post/147440417070/kuebiko">kuebiko</a></h2>
// 	<div class="content">
// 		<p><i>n</i>. a state of exhaustion inspired by an act of senseless violence, which forces you to revise your image of what can happen in this world—mending the fences of your expectations, weeding out invasive truths, cultivating the perennial good that’s buried under the surface—before propping yourself up in the middle of it like an old scarecrow, who’s bursting at the seams but powerless to do anything but stand there and watch.</p>
// 	</div>
// 	<div class="meta">
// 		<ul class="metaList">
// 			<li class="posted">
//         <a href="http://www.dictionaryofobscuresorrows.com/post/147440417070/kuebiko"><span>Posted 1 year ago</span></a>
//       </li>
// 			<li class="author">
//         by <a href="http://jkcreative.tumblr.com/">jkcreative</a>
//       </li>
// 			<li class="notes">
//         <a href="http://www.dictionaryofobscuresorrows.com/post/147440417070/kuebiko#notes"><span>2,223 notes</span></a>
//       </li>
//       <!-- <li class="comments">
//         <a href="http://www.dictionaryofobscuresorrows.com/post/147440417070/kuebiko#disqus_thread"><span class="dsq-comment-count">Comments</span></a>
//       </li> -->
// 		</ul>
// 		<div class="clear">
//     </div>
// 	</div>
// </div>
