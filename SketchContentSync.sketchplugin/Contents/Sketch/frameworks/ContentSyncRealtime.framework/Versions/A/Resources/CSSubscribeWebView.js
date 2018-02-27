
var ContentSyncAppHandle = function(){
};

ContentSyncAppHandle.stripeTokenHandler = function(stripeResponse){
    window.webkit.messageHandlers.nativeContentSync.postMessage(JSON.stringify(stripeResponse));
};

