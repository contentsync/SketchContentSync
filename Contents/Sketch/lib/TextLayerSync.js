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

  this.sync = function(syncMetaData) {
    this.language = syncMetaData['sync']['connection']['syncLanguage'];
    this.dataStore = syncMetaData['sync']['synckeys'][this.language];

    // Dont overwrite text content if text layer belongs to SymbolMaster
    if(this.isInSymbol(syncMetaData)){
      return;
    }

    var layerName = _layer.name();
    var parts = layerName.split(':');

    function wildcardMatch(key, store, language) {
      var rex = new RegExp(key.replace('*', '.*'), 'i');
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

    if(parts.length == 2){
      var syncPart = parts[0];
      var namePart = parts[1];
      if(syncPart == "sync"){
        var newValue = '';

        // Now support `key+'constant'+key` concatenation
        var keyParts = namePart.split('+');
        for(var k = 0; k < keyParts.length; k++){
          var keyValue = keyParts[k].replace(/^\s+|\s+$/g, '');
          if(keyValue[0] == '\'' && keyValue[keyValue.length-1] == '\''){
            newValue += keyValue.substring(1, keyValue.length-1);
          } else if(this.dataStore[keyValue]){
            var value = this.dataStore[keyValue];
            newValue += value;
          } else if (wildcardMatch(keyValue, this.dataStore, this.language)) {
            var randomMatchedValue = wildcardMatch(keyValue, this.dataStore, this.language);
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
      }
    }
  };


  // Returns true if _layer is found as belonging to a SymbolMaster
  this.isInSymbol = function(syncMetaData){
    for(var symbolID in syncMetaData['sync']['symbolmap']){
      var symbol = syncMetaData['sync']['symbolmap'][symbolID];
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
