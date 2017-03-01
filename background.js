chrome.tabs.onUpdated.addListener(checkYoutube);

function showIntercomAction(tabId, changeInfo, tab) {
  if (tab.url.indexOf('youtube.com') > -1) {
    // Show icon for page action in the current tab.
    chrome.pageAction.show(tabId);
  }
};