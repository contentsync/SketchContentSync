@import '../lib/Utils.js';
@import '../lib/MacOSAppCommunicator.js';
var onRun = function(context) {
  var response = {
    type: 'sketch',
    action: 'open',
    skipwrite: false
  };
  var comm = new MacOSAppCommunicator(context);
  comm.sendJSONCommands(response);
};
