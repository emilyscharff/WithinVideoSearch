
//
function search(text) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {greeting: text});
});
	alert('You just typed "' + text + '"');
}


// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
	search
 );
