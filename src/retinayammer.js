if (window.devicePixelRatio && window.devicePixelRatio > 1) {
    chrome.webRequest.onBeforeRequest.addListener(function(details) {        
            if (details.url.indexOf('#retina') > 0) {
                return {}
            } else {
                var new_url = details.url.replace('16x16', '32x32').replace('33x33', '66x66').replace('48x48', '96x96').replace('75x75', '150x150');
                console.log('Retinifying ' + details.url + ' to ' + new_url);
                return { redirectUrl: new_url + '#retina' };
            }
        },
        { urls: ["*://mug0.assets-yammer.com/mugshot/images/*"], types: ["image"] },
        ["blocking"]
    );
}