
var Utils = {};

Utils.getSketchVersionNumber = function() {
  const version = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"]
  var versionNumber = version.stringByReplacingOccurrencesOfString_withString(".", "") + ""
  while(versionNumber.length != 3) {
    versionNumber += "0"
  }
  return parseInt(versionNumber)
};

Utils.getSketchMajorVersion = function() {
  const version = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"]
  return (version+"").substr(0, 3)
};

Utils.createDict = function(objects,keys){
    return NSDictionary.dictionaryWithObjects_forKeys(objects, keys);
};

Utils.objToDict = function(obj){
  if(typeof obj != 'object'){
    return "" + obj;
  }
  var keys = Object.keys(obj);
  var values = new Array(keys.length);

  for(var i = 0, l = keys.length, value; i < l; ++i){
    value = obj[""+keys[i]];
    values[i] = Utils.objToDict(value);
  }

  return Utils.createDict(values,keys);
}


Utils.dictToObj = function(dict){
  var obj  = {};
  if(dict != null){
    var keys = dict.allKeys();
    for(var i = 0, l = keys.count(), key, value; i < l; ++i){
      key = keys[i];
      value = dict.objectForKey_(key);
      if(value.class() == '__NSDictionaryI'){
        obj[key] = Utils.dictToObj(value);
      } else {
        obj[key] = String(value);
      }
    }
  }
  return obj;
};

//

Utils.getTempFolderPath = function(withName) {
  var fileManager = [NSFileManager defaultManager];
  var cachesURL = [[fileManager URLsForDirectory:NSCachesDirectory inDomains:NSUserDomainMask] lastObject];
  if(typeof withName !== 'undefined') return [[cachesURL URLByAppendingPathComponent:kPluginDomain] path] + "/" + withName;
  return [[cachesURL URLByAppendingPathComponent:kPluginDomain] path] + "/" + [[NSDate date] timeIntervalSince1970];
};

Utils.writeTextToFile = function(text, filePath) {
  var t = [NSString stringWithFormat:@"%@", text],
  f = [NSString stringWithFormat:@"%@", filePath];
  return [t writeToFile:f atomically:true encoding:NSUTF8StringEncoding error:nil];
};

Utils.createFolderForPath = function(pathString) {
  var fileManager = [NSFileManager defaultManager];
  if([fileManager fileExistsAtPath:pathString]) return true;
  return [fileManager createDirectoryAtPath:pathString withIntermediateDirectories:true attributes:nil error:nil]
}

Utils.showDialog = function(message, OKHandler, img) {
  var alert = [COSAlertWindow new];
  [alert setMessageText: kPluginName]
  [alert setInformativeText: message]
  if(img){
    var icon = NSImage.alloc().initByReferencingFile(img);
    [alert setIcon:icon]
  }
  var responseCode = [alert runModal];
  if(OKHandler != nil && responseCode == 0) OKHandler()
};

Utils.showDownloadModal = function(message, img){
  var alert = [COSAlertWindow new];
  [alert setMessageText: kPluginName]
  [alert setInformativeText: message]
  alert.addButtonWithTitle('Download ContentSync.app');
  alert.addButtonWithTitle('OK');
  if(img){
    var icon = NSImage.alloc().initByReferencingFile(img);
    [alert setIcon:icon]
  }
  var responseCode = [alert runModal];
  if(responseCode == 1000){
    var url = [NSURL URLWithString:@"https://www.contentsync.io/download"]
    if(![[NSWorkspace sharedWorkspace] openURL:url]){
        this.showDialog(@"Failed to open url:" + [url description])
    }
  }
};

Utils.ContentSyncAppInstalled = function(){
  var task = NSTask.alloc().init();
  task.setLaunchPath("/usr/bin/osascript");
  var args = NSArray.arrayWithObjects("-e", 'id of app "ContentSync"', nil);
  task.setArguments(args)
  var outputPipe = [NSPipe pipe]
  [task setStandardOutput:outputPipe]
  task.launch()
  var outputData = [[outputPipe fileHandleForReading] readDataToEndOfFile]
  var outputString = [[[NSString alloc] initWithData:outputData encoding:NSUTF8StringEncoding]]
  return (outputString == "com.syncify.ContentSync\n");
};

Utils.ContentSyncAppOpen = function(){
  var task = NSTask.alloc().init();
  task.setLaunchPath("/usr/bin/open");
  var args = NSArray.arrayWithObjects("-a", "ContentSync");
  task.setArguments(args)
  var outputPipe = [NSPipe pipe]
  [task setStandardOutput:outputPipe]
  task.launch()
  var outputData = [[outputPipe fileHandleForReading] readDataToEndOfFile];
};

Utils.writeToLog = function(text){
  var path = "~/Library/Logs/SketchContentSync/logging.log";
  var nspath = [NSString stringWithFormat:@"%@", path];
  var logPath = [nspath expandTilde];
  this.createFolderForPath([logPath stringByDeletingLastPathComponent]);
  this.writeTextToFile(text, logPath);
};

Utils.writeDictToLog = function(dict){
  var d = [NSMutableDictionary new];
  for (var key in params) {
    val = params[key]
    [d setValue:val forKey:key]
  }
  var jData = [NSJSONSerialization dataWithJSONObject:d options:0 error:nil];
  var jsonString = [[NSString alloc] initWithData:jData encoding:NSUTF8StringEncoding];
  this.writeToLog(jsonString);
};
