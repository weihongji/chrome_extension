var divCount=0;

var divs = getElementsByAttr("adtype", "rightAd").forEach(function(div) {
	if (div.style.display != "none") {
		addClass(div, "jesse");
		div.style.display="none";
		divCount++;
	}
})

var iframeCount=0;
var iframes = getFrames(document);
for(var i=0; i<iframes.length; i++) {
	var f=iframes[i];
	var src = f.src;
	if (src.indexOf(".baidu.com") >= 0 && f.style.display != "none") {
		addClass(f, "jesse");
		f.style.display="none";
		iframeCount++;
		console.log(src);
	}
}

var count = divCount + iframeCount;
if(count == 0) {
	console.log("No AD found.");
}
else {
	console.log(count + "(div: " + divCount + ", iframe: " + iframeCount + ") AD" + (count > 1 ? "s have":" has") + " been removed.");
}
if (iframes.length > 0) {
	console.log(iframes.length + " iframe" + (iframes.length > 1 ? "s":"") + " on the page.");
}
else {
	console.log("No iframe on the page.");
}

function addClass(elem, className) {
	if(elem.className.indexOf(className)<0) {
		elem.className+=(elem.className.length > 0 ? " ":"") + className;
	}
}

function getFrames(doc) {
	if (!doc) {
		return [];
	}
	var result = [];
	var iframes = doc.getElementsByTagName("iframe");
	for (var i=0; i<iframes.length; i++) {
		result.push(iframes[i]);
		var a = getFrames(iframes[i].contentDocument);
		for(var j=0; j<a.length; j++) {
			result.push(a[j]);
		}
	}
	return result;
}

function getElementsByAttr(attr, value) {
	var result = [];
	var divs = document.getElementsByTagName("div");
	for(var j=0; j<divs.length; j++) {
		var d = divs[j];
		if (d.getAttribute(attr) == value) {
			result.push(d);
		}
	}
	
	var iframes = getFrames(document);
	for(var i=0; i<iframes.length; i++) {
		var doc = iframes[i].contentDocument;
		if (!doc) {
			continue;
		}
		var divs = doc.getElementsByTagName("div");
		for(var j=0; j<divs.length; j++) {
			var d = divs[j];
			if (d.getAttribute(attr) == value) {
				result.push(d);
			}
		}
	}
	return result;
}