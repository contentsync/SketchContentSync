
var kPluginName = "ContentSync",
  kPluginDomain = "com.syncify.ContentSync"

var MacOSAppCommunicator = function(context){
  var self = this;
  self.context = context;

  // List of paths where the ContentSync.app may be
  // Multiple items is useful for development.
  self.appPaths = [
    "/Applications/ContentSync.app",
    "~/Library/Developer/Xcode/DerivedData/ContentSync-aczvmrxkkrbszrftgltjcizttdxl/Build/Products/Debug/ContentSync.app"
  ];

  self.sendJSONCommands = function(params) {
    if(!Utils){
      log("Utils not loaded.");
      return;
    }
    //var sp = self.context.scriptPath;
    var d = [NSMutableDictionary new];

    var sketchFileID = "";
    var sketchFilePath = "";
    var sketchFileName = "";
    if(!self.context.document || !self.context.document.fileURL()){
      // Unknown Sketch File...
    } else {
      sketchFileID = self.context.document.documentData().objectID();
      sketchFilePath = self.context.document.fileURL().path();
      sketchFileName = [sketchFilePath lastPathComponent];
    }

    for (var key in params) {
      var val = params[key]
      [d setValue:val forKey:key]
    }
    [d setValue:sketchFilePath forKey:"sketchfilepath"]
    [d setValue:sketchFileName forKey:"sketchfilename"]
    [d setValue:sketchFileID forKey:"sketchfileid"]
    [d setValue:kPluginDomain forKey:"pluginDomain"]

    var jData = [NSJSONSerialization dataWithJSONObject:d options:0 error:nil];
    var jsonString = [[NSString alloc] initWithData:jData encoding:NSUTF8StringEncoding]

    var shouldWriteToFile = params["skipwrite"]
    if(params["skipwrite"] != true){
      // Communicate via files
      self.sendViaFile(jsonString);
    } else {
      // Communicate via command line
      self.sendViaCommandLine(jsonString);
    }
  };

  self.sendViaFile = function(jsonString){
    var uniqueID = [[NSUUID UUID] UUIDString];
    var tempFolderPath = Utils.getTempFolderPath("temp-commands/"+uniqueID);
    var jsonPath = tempFolderPath + "/command.contentsync";
    Utils.createFolderForPath(tempFolderPath)
    Utils.writeTextToFile(jsonString, jsonPath)
    // Try each path until one succeeds
    for(var i = 0; i < self.appPaths.length; i++){
      var appPath = self.appPaths[i];
      var path = [NSString stringWithFormat:@"%@", appPath];
      appPath = path.expandTilde();

      if([[NSWorkspace sharedWorkspace] openFile:jsonPath withApplication:appPath]]) {
        // Able to launch with path
        return true;
      }
    }

    if(Utils.ContentSyncAppInstalled()){
      Utils.ContentSyncAppOpen();
    } else {
      var scriptPath = self.context.scriptPath;
      var folder = [scriptPath stringByDeletingLastPathComponent];
      folder = [folder stringByDeletingLastPathComponent];
      var img = folder + "/assets/images/contentsyncplatform.png";
      Utils.showDownloadModal("Could not launch plugin. Please make sure you have ContentSync.app installed - visit contentsync.io.", img)
    }
  };

  self.sendViaCommandLine = function(jsonString){
    log(jsonString)
  };
};
