@import '../lib/Utils.js';
@import '../lib/MacOSAppCommunicator.js';
@import '../lib/TextLayerSync.js';
@import '../lib/SymbolInstanceSync.js';
@import '../lib/TextLayerGetter.js';
@import '../lib/MasterSymbolMapper.js';
@import '../lib/ContentSyncStateStore.js';

var onRun = function(context) {
  var doc = context.document;
  // MasterSymbol mapping for symbol handling
  var stateStore = new ContentSyncStateStore();
  // Store symbol map
  stateStore.set('symbolmap', (new MasterSymbolMapper()).generate(doc).map());

  var textGetter = new TextLayerGetter(doc)
  var textValues = textGetter.get(stateStore);

  var commands = {
    sketch_file:true,
    type: 'tool',
    skipwrite: true,
    values: textValues
  };
  var comm = new MacOSAppCommunicator(context);
  comm.sendJSONCommands(commands);
};
