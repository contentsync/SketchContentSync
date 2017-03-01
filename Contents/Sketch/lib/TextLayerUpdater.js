/*
TextLayerUpdater
----------------

Updates all text layers with version content.

*/

var TextLayerUpdater = function(doc){

  this._doc = doc;

  this.update = function(stateStore){
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
          layersync.sync(stateStore);
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
