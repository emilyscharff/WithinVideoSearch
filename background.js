
//
function search(text) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log("Searching");
        chrome.tabs.sendMessage(tabs[0].id, {msg: text}, null);
        console.log("message sent");
});
}


// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
	search
 );
