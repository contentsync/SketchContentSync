/*
MasterSymbolMapper
------------------

This class iterates through the entire document and makes a map of all
master symbols and each symbol's properties and text layers.
This may then be used to set overrides per symbol.

API:

+ generate(doc) -> Makes a mapping of all symbols to contained text layers
+ map() -> Returns generated map

Typical usage:

  (new MasterSymbolMapper()).generate(doc).map()

  Will create mapper, generate map from the document, and return the map.

*/
var MasterSymbolMapper = function()
{
  this._map = {};

  this.map = function(){
    return this._map;
  }

  this.generate = function(doc){
    this._map = {};
    for (var i = 0; i < doc.pages().count(); i++) {
      var page = doc.pages().objectAtIndex(i);
      var layers = page.children();
      for (var j = 0; j < layers.count(); j++) {
        var layer = layers.objectAtIndex(j);
        if(layer.class() == "MSSymbolMaster") {

          // Store all relevent text fields within the symbol
          var textsublayers = [];
          var sublayers = layer.layers();
          for(var k = 0; k < sublayers.count(); k++){
            var sublayer = sublayers.objectAtIndex(k);
            if(sublayer.class() == "MSTextLayer") {
              textsublayers.push(sublayer);
            }
          }

          // Make Master Symbol Entry
          this._map[layer.symbolID()] = {
            defaultName: layer.name(),
            textlayers: textsublayers
          };
        }
      }
    }
    return this;
  }

  return this;
};
