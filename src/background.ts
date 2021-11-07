import Tab = chrome.tabs.Tab;

class TabHandler {
  private tab: Tab | null = null

  handle(tab: Tab) {
    const url = tab.url;
    if (!url.startsWith('http') && !url.startsWith('https')) {
      return;
    }
    if (this.tab == tab) {
      return;
    }
    this.tab = tab;
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content-script.bundle.js']
    }, function () {
    });
  }
}

const handler = new TabHandler();

chrome.tabs.onActivated.addListener(async function (info) {
  const tab = await chrome.tabs.get(info.tabId);
  if (!tab.active) {
    return;
  }
  handler.handle(tab);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  handler.handle(tab);
})

