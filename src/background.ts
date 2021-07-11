class UrlHandler {
  private url = ''

  handle(url: string | undefined) {
    if (!url || this.url == url) {
      return;
    }
    this.url = url;
    console.log(url);
  }
}

const handler = new UrlHandler();

chrome.tabs.onActivated.addListener(async function (info) {
  const tab = await chrome.tabs.get(info.tabId);
  if (!tab.active) {
    return;
  }
  handler.handle(tab.url);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  handler.handle(tab.url);
})

