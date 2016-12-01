/*
SymbolInstanceSync
--------------------

Class used to synchronize a symbol instance with the key/value map.

Instead of actually setting the text fields content to the sync content,
this class uses Sketch's SymbolInstance overrides feature.

This will set the override for each of the text fields in the Symbol
based on the symbol instance's name.

Each SymbolInstance will override its respective symbol masters text
field's contents by first looking for a content key with subscript
of its name. If the subscript is not found then
it will use the default.


Example:

SymbolMaster with name: 'SampleSymbol'
  SymbolTextField with name: 'sync:symboltext'

One SymbolInstance with name 'OtherSymbol'
One SymbolInstance with name 'AnotherSymbol'

Sync Content:

key                       |      value
symboltext                |      FOO
symboltext[othersymbol]   |      BAR
symboltext[unused]        |      NAN

When synced:
OtherSymbol will get the text override 'BAR'
AnotherSymbol will get the text override 'FOO'

*/
var SymbolInstanceSync = function(layer)
{
  var _layer = layer
  var _message = null;

  this.hasMessage = function(){
    return _message != null;
  }

  this.message = function(){
    return _message;
  }

  this.sync = function(syncMetaData) {
    this.language = syncMetaData['sync']['connection']['syncLanguage'];
    this.dataStore = syncMetaData['sync']['synckeys'][this.language];
    this.masterSymbolMap = syncMetaData['sync']['symbolmap'];

    var masterSymbol = this.masterSymbolMap[_layer.symbolID()];

    if(!masterSymbol){
      log("MasterSymbol not found int map. ID: " + _layer.symbolID());
      log(_layer);
      return;
    }

    var values = _layer.overrides();
    var mutableValues = null;
    var hasPreviousValue = false;
    if(values){
      hasPreviousValue = true;
      mutableValues = NSMutableDictionary.dictionaryWithDictionary(values)
      mutableValues.setObject_forKey(NSMutableDictionary.dictionaryWithDictionary(values.objectForKey(0)),0)
    } else {
      mutableValues = [[NSMutableDictionary alloc] init]
    }
    
    var newOverrides = {};
    for(var i = 0; i < masterSymbol.textlayers.count(); i++){
      var layer = masterSymbol.textlayers.objectAtIndex(i);
      var newValue = this.parseValueForLayer(layer);
      if(newValue){
        if(hasPreviousValue){
          mutableValues.objectForKey(0).setObject_forKey(newValue,masterSymbol.textlayers[i].objectID());
        } else {
          mutableValues.setObject_forKey(newValue,masterSymbol.textlayers[i].objectID());
        }
      }
    }
    // Only overwrite if no errors
    _layer.overrides = mutableValues;
  };
    

  this.parseValueForLayer = function(layer){
    this._layerName = layer.name();
    var parts = this._layerName.split(':');
    if(parts.length == 2){
      var syncPart = parts[0];
      var namePart = parts[1];
      if(syncPart == "sync"){
        var newValue = '';

        // Split by '+' to support `key+'constant'+key` concatenation
        var keyParts = namePart.split('+');
        for(var k = 0; k < keyParts.length; k++){
          var keyValue = keyParts[k].replace(/^\s+|\s+$/g, '');
          newValue += this.parsePart(keyValue);
        }

        // Only update if new text is not blank
        if(newValue.length > 0){
          newValue = newValue.replace(/\\n/g, '\n');
          return newValue;
        }
      }
    }
    return null;
  };

  // Parsing single sync label part
  this.parsePart = function(partKey){
    return (
      this.parsePartStaticString(partKey) ||
      this.parsePartDictLookup(partKey + '[' + _layer.name().toLowerCase() + ']') ||
      this.parsePartDictLookup(partKey) ||
      this.parseError(partKey)
    );
  }

  // Handles static strings: sync:'helloworld'
  this.parsePartStaticString = function(partKey){
    if(partKey[0] == '\'' && partKey[partKey.length-1] == '\''){
      return partKey.substring(1, partKey.length-1);
    }
    return null;
  };

  // Handles static strings: sync:googledockey
  this.parsePartDictLookup = function(partKey){
    if(this.dataStore[partKey]){
      return this.dataStore[partKey];
    }
    return null;
  };

  // Handles unmatched parts: sync:nomatchingkey
  this.parseError = function(partKey){
    if(!this.hasMessage()){
      _message = "";
    } 
    _message += '\nInvalid Key: ' + partKey + ' used in \'' + this._layerName + '\'';
    return "";
  };
};