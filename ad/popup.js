// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let btnClean = document.getElementById('btnClean');

btnClean.onclick = function() {
	// The extension must query the active tab before it can injected a content script
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.executeScript(
				tabs[0].id,
				//{code: 'var iframes = document.getElementsByTagName("iframe"); var count=0; for(var i=0; i<iframes.length; i++) {var f=iframes[i]; var src = f.src;  if (src.indexOf("pos.baidu.com") >= 0 && f.style.display != "none") { if(f.className.indexOf("jesse")<0) {f.className+=(f.className.length > 0 ? " ":"") + "jesse";} f.style.display="none"; count++;  console.log(src);} } if(count == 0) {console.log("No ad found.");} else  {console.log(count + " ad removed.");}'}
				{file: 'clean.js'}
			);
		}
	);
};
