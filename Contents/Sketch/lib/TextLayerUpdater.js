/*
TextLayerUpdater
----------------

Updates all text layers with version content.

*/

@import './lib/TextLayerSync.js';
@import './lib/SymbolInstanceSync.js';

var TextLayerUpdater = function(doc){

  this._doc = doc;

  this.update = function(syncMetaData, versionData){
    var message = 'Sync completed however the following errors occurred:\n'
    var invalidKey = false;
    for (var i = 0; i < doc.pages().count(); i++) {
      var page = doc.pages().objectAtIndex(i),
        layers = page.children();
      // Loop through all children of the page
      for (var j = 0; j < layers.count(); j++) {
        var layer = layers.objectAtIndex(j);
        // Check if the layer is a text layer
        var layersync = null;
        if(layer.class() == "MSTextLayer") {
          layersync = new TextLayerSync(layer);
        } else if(layer.class() == "MSSymbolInstance"){
          layersync = new SymbolInstanceSync(layer);
        }
        if(layersync){
          layersync.sync(syncMetaData, versionData);
        }
      }
    }
    if(invalidKey){
      var app = NSApplication.sharedApplication();
      app.displayDialog_withTitle(message, "Invalid Key(s) Found");
    }
    return message;
  }

  return this;
};