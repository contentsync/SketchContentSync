
@import './lib/MacOSAppCommunicator.js';
@import './lib/TextLayerGetter.js';
@import './lib/Utils.js';

@import './lib/MasterSymbolMapper.js';
@import './lib/ContentSyncStateStore.js';

var onContentPushRun = function(context) {
  var doc = context.document;
  // MasterSymbol mapping for symbol handling
  var stateStore = new ContentSyncStateStore();
  // Store symbol map
  stateStore.set('symbolmap', (new MasterSymbolMapper()).generate(doc).map());

  var textGetter = new TextLayerGetter(doc)
  var textValues = textGetter.get(stateStore);

  var commands = {
    sketch_file:true,
    import: false,
    export: true,
    values: textValues
  };
  log(commands);

  var comm = new MacOSAppCommunicator(context);
  comm.sendJSONCommands(commands);
};
