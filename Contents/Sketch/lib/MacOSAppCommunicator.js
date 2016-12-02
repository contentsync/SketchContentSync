@import './lib/Utils.js'

var kPluginName = "ContentSync",
  kPluginDomain = "com.syncify.ContentSync"

var MacOSAppCommunicator = function(context){

  this.context = context;

  // List of paths where the ContentSync.app may be
  // Multiple items is useful for development.
  this.appPaths = [
    "~/Library/Developer/Xcode/DerivedData/ContentSync-aczvmrxkkrbszrftgltjcizttdxl/Build/Products/Debug/ContentSync.app",
    "/Applications/ContentSync.app"
  ];

  this.sendJSONCommands = function(params) {
    var sketchFilePath = this.context.document.fileURL().path();
    var
      sp = this.context.scriptPath,
      uniqueID = [[NSUUID UUID] UUIDString],
      tempFolderPath = Utils.getTempFolderPath("temp-commands/"+uniqueID),
      jsonPath = sketchFilePath + ".contentsync",
      bundlePath = [[NSBundle mainBundle] bundlePath],
      appName = [[NSFileManager defaultManager] displayNameAtPath: bundlePath],
      d = [NSMutableDictionary new],
      val;

    for (var key in params) {
      val = params[key]
      [d setValue:val forKey:key]
    }
    [d setValue:[sketchFilePath lastPathComponent] forKey:"sketchfilename"]
    [d setValue:sketchFilePath forKey:"sketchfilepath"]
    [d setValue:kPluginDomain forKey:"pluginDomain"]

    var jData = [NSJSONSerialization dataWithJSONObject:d options:0 error:nil];
    var jsonString = [[NSString alloc] initWithData:jData encoding:NSUTF8StringEncoding]

    Utils.writeTextToFile(jsonString, jsonPath)

    // Try each path until one succeeds
    for(var i = 0; i < this.appPaths.length; i++){
      var appPath = this.appPaths[i];
      var path = [NSString stringWithFormat:@"%@", appPath];
      appPath = path.expandTilde();

      if([[NSWorkspace sharedWorkspace] openFile:jsonPath withApplication:appPath]]) {
        // Able to launch with path
        log("Found at path: " + appPath);
        return true;
      }
    }
    Utils.showDialog("Could not launch plugin. Please make sure you have ContentSync.app installed.")
  }
};
