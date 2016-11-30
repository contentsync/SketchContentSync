@import './lib/TextLayerSync.js';
@import './lib/SymbolInstanceSync.js';

var onRun = function(context) {
  var app = NSApplication.sharedApplication();
  var doc = context.document;

  // Store for Sync Plugin Data
  var syncMetaData = NSThread.mainThread().threadDictionary();
    if(!syncMetaData['sync']){
    syncMetaData['sync'] = [[NSMutableDictionary alloc] init];
  }

  // Metadata for connection settings
  if(!syncMetaData['sync']['connection']){
    syncMetaData['sync']['connection'] = [[NSMutableDictionary alloc] init];
  }

  // Stored Content Syncs from remote file
  syncMetaData['sync']['synckeys'] = [[NSMutableDictionary alloc] init];

  // MasterSymbol mapping for symbol handling
  syncMetaData['sync']['symbolmap'] = generateMasterSymbolMap(doc);

  if(showOptions()){
    var data = loadFromURL(syncMetaData['sync']['connection']['syncSource']);
    if(data){
      storeData(data);
      if(ChooseLanguage()){
        doc.showMessage('Updating text fields...');
        updateTextBoxes();
        doc.showMessage('Sync completed!');
        doc.reloadInspector();
      } else {
        doc.showMessage('Content Sync Canceled.');
      }
    } else {
      doc.showMessage('Unable to fetch data.');
    }
  } else {
    doc.showMessage('Content Sync Canceled.');
  }

  function updateTextBoxes(){
    var message = 'Sync completed however the following errors occurred:\n'
    var invalidKey = false;
    var language = syncMetaData['sync']['connection']['syncLanguage'];
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
          layersync.sync(syncMetaData);
        }
      }
    }
    if(invalidKey){
      app.displayDialog_withTitle(message, "Invalid Key(s) Found");
    }
    return message;
  }

  function storeData(data){
    var languages = [[NSMutableArray alloc] init];
    var firstEntry = true;
    for(var i = 0; i < data.length; i++){
      var row = data[i];
      var propkey = null;
      for(var key in row) {
        if(propkey == null){
          propkey = row[key];
          syncMetaData['sync']['synckeys'][propkey] = [[NSMutableDictionary alloc] init];
        } else {
          if(firstEntry){
            [languages addObject:key];
          }
          syncMetaData['sync']['synckeys'][propkey][key] = row[key];
        }
      }
      firstEntry = false;
    }
    syncMetaData['sync']['connection']['syncLanguages'] = languages;
  }

  function loadFromURL(queryURL) {
    doc.showMessage('Sync starting...');
    var data = null;
    if(queryURL.indexOf("google.com") > -1) {
      var sheetID=queryURL.substring(queryURL.lastIndexOf("/d/")+3,queryURL.lastIndexOf("/"));
      queryURL = "https://spreadsheets.google.com/feeds/list/" + sheetID + "/1/public/values?alt=json";
      data = request(queryURL);
      try {
        data = JSON.parse(data);
        data = parseSheetsData(data);
      } catch(e){
        data = null;
      }
    } else {
      data = request(queryURL);
      data = JSON.parse(data);  
    }
    return data;
  }

  function request(queryURL) {
    var request = NSMutableURLRequest.new();
    [request setHTTPMethod:@"GET"];
    [request setURL:[NSURL URLWithString:queryURL]];
    var error = NSError.new();
    var responseCode = null;
    var oResponseData = [NSURLConnection sendSynchronousRequest:request returningResponse:responseCode error:error];
    var dataString = [[NSString alloc] initWithData:oResponseData encoding:NSUTF8StringEncoding];
    return dataString;
  }

  function parseSheetsData(data) {
    var result = [];
    var items = data.feed.entry;
    for(var i=0; i<items.length; i++) {
      var item = items[i];
      var resultItem = {}
      for(var key in item) {
        var attr = key.split('gsx$')[1];
        if(!attr) { continue; }
        attr = capitalize(attr);
        resultItem[attr] = item[key]['$t'];
      }
      result.push(resultItem);
    }
    return result;
  }

  function showOptions() {
    var alert = [NSAlert alertWithMessageText: "Sync Google Document Text"
                                   defaultButton:"Sync"
                                 alternateButton:"Cancel"
                                     otherButton:nil
                       informativeTextWithFormat:"Enter the URL where your text lives."];

    var input = [[NSTextField alloc] initWithFrame:NSMakeRect(0, 0, 300, 54)];
    input.setStringValue(syncMetaData['sync']['connection']['syncSource'] || "https://docs.google.com/spreadsheets/...");
    alert.setAccessoryView(input);
    var button = alert.runModal();
    input.validateEditing();
    syncMetaData['sync']['connection']['syncSource'] = input.stringValue();
    return button;
  }

  function ChooseLanguage(){
    var languages = syncMetaData['sync']['connection']['syncLanguages'];
    var alert = [NSAlert alertWithMessageText: "Sync Content Version"
                                   defaultButton:"Sync"
                                 alternateButton:"Cancel"
                                     otherButton:nil
                       informativeTextWithFormat:"Select which content version to use:"];

    var input = [[NSComboBox alloc] initWithFrame:NSMakeRect(0, 0, 300, 54)];
    for(var i = 0; i < [languages count]; ++i){
      [input addItemWithObjectValue:languages[i]];
    }
    input.setStringValue(syncMetaData['sync']['connection']['syncLanguage'] || languages[0]);
    alert.setAccessoryView(input);
    var button = alert.runModal();
    input.validateEditing();
    syncMetaData['sync']['connection']['syncLanguage'] = input.stringValue();
    return button;
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // This method will iterate through the entire document and make a map of all
  // master symbols and each symbol's properties and text layers.
  // This will then be used to set overrides per symbol
  function generateMasterSymbolMap(doc){
    var storedMasterSymbols = {};
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
          storedMasterSymbols[layer.symbolID()] = {
            defaultName: layer.name(),
            textlayers: textsublayers
          };
        }
      }
    }
    return storedMasterSymbols;
  }



}
