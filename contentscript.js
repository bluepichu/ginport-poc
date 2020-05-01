const port = chrome.runtime.connect();

port.onMessage.addListener((msg) => {
	console.log("received", msg);
	console.log("sending ack");
	port.postMessage("ack");
});

document.addEventListener("click", () => {
	port.postMessage("clicked");
});
