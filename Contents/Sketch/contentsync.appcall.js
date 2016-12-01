// Access to command line arguments on coscript
//
// Works with:
// ./coscript <thisfile>
//

var sketchApp = COScript.app("Sketch")
var appSupportPath = NSFileManager.defaultManager().URLsForDirectory_inDomains(NSApplicationSupportDirectory,NSUserDomainMask).firstObject().path()
var pluginFolderPath = appSupportPath.stringByAppendingPathComponent("com.bohemiancoding.sketch3/Plugins/SketchContentSync.sketchplugin")
var pluginURL = NSURL.fileURLWithPath(pluginFolderPath)
sketchApp.delegate().runPluginCommandWithIdentifier_fromBundleAtURL('appopen_contentsync',pluginURL)
