console.log("Hello, world!");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log("message:")
  	console.log(request.msg)
  });