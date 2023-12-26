chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading' && tab.url === 'chrome://newtab/') {
      chrome.tabs.update(tabId, { url: 'https://browser-start.netlify.app/' });
  }
});