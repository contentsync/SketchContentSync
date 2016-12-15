
@import './lib/MacOSAppCommunicator.js';

var onRun = function(context) {
  var commands = {
    sketch_file:true,
    import: true,
    export: false
  };
  var comm = new MacOSAppCommunicator(context);
  comm.sendJSONCommands(commands);
};
