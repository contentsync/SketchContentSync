@import '../lib/MasterSymbolMapper.js';
@import '../lib/ContentSyncStateStore.js';
@import '../lib/TextLayerSync.js';
@import '../lib/SymbolInstanceSync.js';
@import '../lib/TextLayerUpdater.js';

var onRun = function(context) {
  var doc = context.document;
  var contentsyncFile = doc.fileURL().path() + ".contentsync"
  var fileContentsJsonString = [[NSString alloc]initWithContentsOfFile:contentsyncFile encoding:NSUTF8StringEncoding error:nil];
  var data = [fileContentsJsonString dataUsingEncoding:NSUTF8StringEncoding];
  var json = [NSJSONSerialization JSONObjectWithData:data options:0 error:nil];

  // MasterSymbol mapping for symbol handling
  var stateStore = new ContentSyncStateStore();
  // Store symbol map
  stateStore.set('symbolmap', (new MasterSymbolMapper()).generate(doc).map());
  // Store selected version
  var selectedVersion = json["selection"]["versionName"]
  stateStore.version(selectedVersion);
  // Store data
  stateStore.set('synckeys', json["data"]["versions"]);

  var textUpdater = new TextLayerUpdater(doc)
  textUpdater.update(stateStore);
  delete textUpdater;

  doc.showMessage('Content Sync Completed - Version: ' + selectedVersion);
};
