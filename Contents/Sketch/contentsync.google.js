@import './helpers/GoogleSyncHelpers.js';

@import './lib/TextLayerUpdater.js';
@import './lib/MasterSymbolMapper.js';

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
  syncMetaData['sync']['symbolmap'] = (new MasterSymbolMapper()).generate(doc).map()

  // Get public spreadsheet URL
  var previous_url = syncMetaData['sync']['connection']['syncSource'];
  var new_url = GoogleSyncHelpers.promptForUrl(previous_url);
  if(!new_url){
    doc.showMessage('Content Sync Canceled.');
    return;
  }

  // Save URL for next time
  syncMetaData['sync']['connection']['syncSource'] = new_url;

  // Load data from URL
  doc.showMessage('Sync starting...');
  var data = GoogleSyncHelpers.loadFromURL(syncMetaData['sync']['connection']['syncSource']);
  if(!data){
    doc.showMessage('Unable to fetch data.');
    return;
  }

  // Map data to version map
  var datamap = GoogleSyncHelpers.makeDataMap(data);
  syncMetaData['sync']['synckeys'] = datamap;

  // Prompt for choosing language
  var versions = GoogleSyncHelpers.makeVersionList(data);
  var previouslyChosen = syncMetaData['sync']['connection']['syncLanguage'];
  var chosenLanguage = GoogleSyncHelpers.ChooseLanguage(versions, previouslyChosen);
  if(!chosenLanguage){
    doc.showMessage('Content Sync Canceled.');
    return;
  }

  // Store Chosen Language for next go
  syncMetaData['sync']['connection']['syncLanguage'] = chosenLanguage;

  var version = syncMetaData['sync']['connection']['syncLanguage'];
  var versionData = syncMetaData['sync']['synckeys'][version];

  doc.showMessage('Updating text fields...');
  var textUpdater = new TextLayerUpdater(doc)
  textUpdater.update(syncMetaData, versionData);
  delete textUpdater;
  doc.showMessage('Sync completed!');

  doc.reloadInspector();
}
