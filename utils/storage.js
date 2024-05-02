class storage {
    static get(key, callback) {
        chrome.storage.local.get(key, function(value) {
            if (typeof(value[key]) != "undefined") {
                callback(value[key]);
            }
        });
    };

    static set(key, value) {
        chrome.storage.local.set({[key]: value});
    };
}