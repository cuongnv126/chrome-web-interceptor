const interceptors = [
    ZaloInterceptor(),
];

function hasSamePath(path, interceptor) {
    if (!interceptor.path) return true

    for (const ipath in interceptor.paths) {
        if (path.startsWith(ipath)) {
            return true;
        } 
    }

    return false;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'checkForChange') {
        $(document).ready(function () {
            const hostname = window.location.hostname;
            const path = window.location.pathname;
            interceptors.forEach((interceptor) => {
                if (hostname == interceptor.hostname && hasSamePath(path, interceptor)) {
                    interceptor.onIntercept();
                }
            });
        });
    }
});