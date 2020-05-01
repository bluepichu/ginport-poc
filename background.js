chrome.runtime.onInstalled.addListener(() => {
	chrome.runtime.onConnect.addListener((port) => {
		port.onMessage.addListener((msg) => console.log("received", msg));

		console.log("sending init");
		port.postMessage("init");
	});
});
