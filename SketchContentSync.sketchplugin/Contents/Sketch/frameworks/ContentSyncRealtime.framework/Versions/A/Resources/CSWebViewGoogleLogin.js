
var ContentSyncAppHandle = function(){

};

ContentSyncAppHandle.passAction_arg_ = function(action, arg){
    window.webkit.messageHandlers.nativeContentSync.postMessage(JSON.stringify({
        "action": action,
        "arg": arg
    }));
}
