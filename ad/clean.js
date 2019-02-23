var iframes = document.getElementsByTagName("iframe");
var count=0;
for(var i=0; i<iframes.length; i++) {
	var f=iframes[i];
	var src = f.src;
	if (src.indexOf("pos.baidu.com") >= 0 && f.style.display != "none") {
		if(f.className.indexOf("jesse")<0) {
			f.className+=(f.className.length > 0 ? " ":"") + "jesse";
		}
		f.style.display="none";
		count++;
		console.log(src);
	}
}
if(count == 0) {
	console.log("No AD found.");
}
else {
	console.log(count + " AD" + (count > 4 ? "s have":" has") + " been removed.");
}