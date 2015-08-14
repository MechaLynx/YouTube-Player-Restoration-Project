// ==UserScript==
// @name        restore-watch-later
// @namespace   ytrestore2015
// @author MechaLynx
// @date 2015-08-04
// @description Places the 'Watch Later' button on the youtube player
// @include http://www.youtube.com/*
// @include https://www.youtube.com/*
// @match http://www.youtube.com/*
// @match https://www.youtube.com/*
// @run-at document-end
// @version     0.0.2
// @grant       none
// ==/UserScript==

var origbutt = document.getElementsByClassName('ytp-watch-later-button ytp-button')[0]
var watchlaterbutt = origbutt.cloneNode(1);

watchlaterbutt.style.float = 'right';
watchlaterbutt.addEventListener('click', function(e){
    origbutt.click();
    // this will probably ensure the behavior of both buttons is exactly the same
    // previously, the cloned button would not update it's state.
    // this is still quite crude though, and untested.
    watchlaterbutt.innerHTML = origbutt.innerHTML
})

document.getElementsByClassName('ytp-chrome-controls')[0].appendChild(watchlaterbutt);
