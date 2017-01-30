/*
TextLayerUpdater
----------------

Updates all text layers with version content.

*/

@import './lib/TextLayerSync.js';
@import './lib/SymbolInstanceSync.js';

var TextLayerGetter = function(doc){

  this._doc = doc;

  this.get = function(stateStore){
    var message = 'Sync completed however the following errors occurred:\n'
    var invalidKey = false;
    var response = {};
    this._merge(response, this._forEachTextLayer(stateStore));
    this._merge(response, this._forEachSymbolLayer(stateStore));
    return response;
  };

  this._forEachTextLayer = function(stateStore){
    var self = this;
    var response = {};
    this._callForEachLayer(function(layer){
      if(layer.class() == "MSTextLayer") {
        var syncer = new TextLayerSync(layer);
        var val = syncer.get(stateStore);
        self._merge(response, val);
      }
    });
    return response;
  };

  this._forEachSymbolLayer = function(stateStore){
    var self = this;
    var response = {};
    this._callForEachLayer(function(layer){
      if(layer.class() == "MSSymbolInstance") {
        var syncer = new SymbolInstanceSync(layer);
        var val = syncer.get(stateStore);
        self._merge(response, val);
      }
    });
    return response;
  };

  this._merge = function(master, extension){
    for(var p in extension){
      master[p] = extension[p];
    }
    return master;
  };

  this._callForEachLayer = function(fn){
    for (var i = 0; i < doc.pages().count(); i++) {
      var page = doc.pages().objectAtIndex(i),
        layers = page.children();
      // Loop through all children of the page
      for (var j = 0; j < layers.count(); j++) {
        var layer = layers.objectAtIndex(j);
        fn(layer);
      }
    }
  };

  return this;
};
