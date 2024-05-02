function ZaloInterceptor() {
    function hideContentIf(className, condition) {
        try {
            const elem = document.getElementsByClassName(className);
            if (elem && elem[0] && condition(elem[0])) {
                elem[0].style.display = "none";
                return true;
            }
        } catch (ex) { }

        return false;
    }

    function hideUntil(className, condition, retryCount) {
        let result = hideContentIf(className, condition);
        if (!result && retryCount > 0) {
            setTimeout(
                () => hideUntil(className, condition, retryCount - 1),
                1000
            );
        }
    }

    function removeZaloBanner() {
        hideUntil("tds-banner-download__container", (elem) => true, 5);
        hideUntil("zl-mini-notification", (elem) => elem.textContent.toLowerCase().includes("zalo pc"), 5);
    }

    return {
        hostname: "chat.zalo.me",
        onIntercept: () => removeZaloBanner()
    };
}