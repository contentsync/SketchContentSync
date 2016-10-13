/*
TextLayerSync
--------------------

Class used to synchronize a Text Layer with the key/value map.

*/
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
    this.dataStore = syncMetaData['sync']['synckeys'];
    this.language = syncMetaData['sync']['connection']['syncLanguage'];

    // Dont overwrite text content if text layer belongs to SymbolMaster
    if(this.isInSymbol(syncMetaData)){
      return;
    }

    var layerName = _layer.name();
    var parts = layerName.split(':');
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
            var value = this.dataStore[keyValue][this.language];
            newValue += value;
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