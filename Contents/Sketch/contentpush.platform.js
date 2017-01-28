
@import './lib/MacOSAppCommunicator.js';
@import './lib/TextLayerGetter.js';
@import './lib/Utils.js';
var onContentPushRun = function(context) {

  Utils.writeToLog("HELLO");

  var doc = context.document;

  var textGetter = new TextLayerGetter(doc)
  var textValues = textGetter.get();

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
