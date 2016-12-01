@import './helpers/GoogleSyncHelpers.js';

@import './lib/ContentSyncStateStore.js';
@import './lib/TextLayerUpdater.js';
@import './lib/MasterSymbolMapper.js';

var onRun = function(context) {
  var app = NSApplication.sharedApplication();
  var doc = context.document;

  // Store for Sync Plugin Data
  var stateStore = new ContentSyncStateStore();

  // MasterSymbol mapping for symbol handling
  stateStore.set('symbolmap', (new MasterSymbolMapper()).generate(doc).map());

  // Get public spreadsheet URL
  var previous_url = stateStore.retrieve('contentsync.google.url');
  var new_url = GoogleSyncHelpers.promptForUrl(previous_url);
  if(!new_url){
    doc.showMessage('Content Sync Canceled.');
    return;
  }

  // Save URL for next time
  stateStore.store('contentsync.google.url', new_url);

  // Load data from URL
  doc.showMessage('Sync starting...');
  var data = GoogleSyncHelpers.loadFromURL(new_url);
  if(!data){
    doc.showMessage('Unable to fetch data.');
    return;
  }

  // Map data to version map
  var datamap = GoogleSyncHelpers.makeDataMap(data);
  stateStore.set('synckeys', datamap);

  // Prompt for choosing version
  var versions = GoogleSyncHelpers.makeVersionList(data);
  var previouslyChosen = stateStore.version();
  var chosen_version = GoogleSyncHelpers.ChooseVersion(versions, previouslyChosen);
  if(!chosen_version){
    doc.showMessage('Content Sync Canceled.');
    return;
  }

  // Store chosen version for next go
  stateStore.version(chosen_version);

  doc.showMessage('Updating text fields...');
  var textUpdater = new TextLayerUpdater(doc)
  textUpdater.update(stateStore);
  delete textUpdater;
  doc.showMessage('Sync completed!');

  doc.reloadInspector();
}
