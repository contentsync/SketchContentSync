/*
TextLayerSync
--------------------

Class used to synchronize a Text Layer with the key/value map.
*/


function randomArrayItem(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

var TextLayerSync = function(layer)
{
  var _layer = layer;
  var _message = null;

  this.hasMessage = function(){
    return _message != null;
  };

  this.message = function(){
    return _message;
  };

  this.sync = function(stateStore) {
    this.dataStore = stateStore.data_version();

    // Dont overwrite text content if text layer belongs to SymbolMaster
    if(this.isInSymbol(stateStore)){
      return;
    }

    var layerName = _layer.name();

    function wildcardMatch(key, store) {
      key = key.replace('*', '.*');
      key = '/^' + key + '$/';
      var rex = new RegExp(key, 'i');
      var candidateKeys = Object.keys(store);
      var matchedKeys = candidateKeys.filter(function(key) {
        return rex.test(key);
      });
      if (matchedKeys.length != 0) {
        var randomMatchedKey = randomArrayItem(matchedKeys)
        return store[randomMatchedKey];
      }
      return null;
    }

    var parts = layerName.split(':');
    var newValue = '';
    var namePart = '';

    // If it doesnt start with sync: use the layer name
    if(parts.length > 1 && parts[0] == "sync"){
      namePart = parts.slice(1).join(':')
    } else {
      namePart = layerName;
    }

    // Now support `key+'constant'+key` concatenation
    var keyParts = namePart.split('+');
    for(var k = 0; k < keyParts.length; k++){
      var keyValue = keyParts[k].replace(/^\s+|\s+$/g, '');
      if(keyValue[0] == '\'' && keyValue[keyValue.length-1] == '\''){
        newValue += keyValue.substring(1, keyValue.length-1);
      } else if(this.dataStore[keyValue]){
        var value = this.dataStore[keyValue];
        newValue += value;
      } else if (wildcardMatch(keyValue, this.dataStore)) {
        var randomMatchedValue = wildcardMatch(keyValue, this.dataStore);
        newValue += randomMatchedValue;
        _message += '\nUsed wildcard ' + randomMatchedValue;
      } else {
        invalidKey = true;
        if(!this.hasMessage()){
          _message = "";
        }
        _message += '\nInvalid Key: ' + keyValue + ' used in \'' + layerName + '\'';
      }
    }

    // Only update if new text is not blank
    if(newValue.length > 0){
      newValue = newValue.replace(/\\n/g, '\n');
      _layer.stringValue = newValue;
    }
  };

  this.get = function(stateStore){
    var rawkeyName = this.contentKeyName();

    // Is in Symbol?
    var r = {};
    if(rawkeyName != null){
      keyName = rawkeyName;
      if(this.isInSymbol(stateStore)){
        keyName += "[default]";
      }
      r[keyName] = _layer.stringValue();
      if(rawkeyName == _layer.name()){
        // _layer.name = "sync:" + rawkeyName;
        _layer.nameIsFixed = true
      }
    }
    return r;
  }

  this.contentKeyName = function(){
    var layerName = _layer.name();
    var parts = layerName.split(':');
    var syncPart = parts[0];
    if(syncPart == "sync"){
      var keyname = parts[1];
      // Only take names that arent formulas
      var keyParts = keyname.split('+');
      if(keyParts.length == 1){
        return keyname;
      } else {
        return null;
      }
    } else {
      return _layer.name();
    }
  };

  // Returns true if _layer is found as belonging to a SymbolMaster
  this.isInSymbol = function(stateStore){
    var symboldmap = stateStore.get('symbolmap');
    for(var symbolID in symboldmap){
      var symbol = symboldmap[symbolID];
      for(var i = 0; i < symbol['textlayers'].count(); i++){
        var textlayer = symbol['textlayers'].objectAtIndex(i);
        if(textlayer.objectID() == _layer.objectID()){
          return true;
        }
      }
    }
    return false;
  }
};
