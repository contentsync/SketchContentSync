@import '../lib/Utils.js';
@import '../lib/MacOSAppCommunicator.js';
var onRun = function(context) {
  var doc = context.document;
  var response = {
    sketch_file:true,
    type: 'tool',
    skipwrite: true
  };

  response['file'] = null;
  if(doc != null && doc.fileURL() != null){
    response['file'] = doc.fileURL().path();
  }

  var comm = new MacOSAppCommunicator(context);
  comm.sendJSONCommands(response);
};
