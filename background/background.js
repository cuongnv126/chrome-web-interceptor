function initApplication() {
    try {
        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
            if (changeInfo.status != 'complete')
                return;

            chrome.tabs.sendMessage(tabId, { action: 'checkForChange' });
        });
    } catch (ex) {
        setTimeout(() => initApplication(), 2000);
    }
};

initApplication();