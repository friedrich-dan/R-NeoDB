chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.url);
  chrome.tabs.update(sender.tab.id, {
    url: "https://neodb.social/search/?q=" + encodeURIComponent(request.url),
  });
});
