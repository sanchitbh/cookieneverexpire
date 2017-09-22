
chrome.webRequest.onHeadersReceived.addListener( ({responseHeaders = []}) => {
	var mod = false;
	responseHeaders.forEach(header => {
		if( header.name.toLowerCase() == "set-cookie" ) {
			mod = true;
			header.value = header.value.replace(/Expires=[^;]*/i, "").replace(/Max-Age=[^;]*/i, '') + ";Max-Age=3153600000"; // 86400 * 365 * 100
		}
	});
	if( mod ) return {responseHeaders};
}, {urls: ["<all_urls>"], types: ["main_frame", "xmlhttprequest", "sub_frame"]}, ["blocking", "responseHeaders"]);
