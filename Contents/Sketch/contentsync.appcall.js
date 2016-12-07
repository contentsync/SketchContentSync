//
// Works with:
// ./coscript <thisfile>
//
try {
  var sketchApp = COScript.app("Sketch")
  var plugins = sketchApp.delegate().pluginManager().plugins()
  var plugin = plugins["com.github.contentsync.sketchcontentsync"]
  var commands = plugin.commands();
  var command = commands["appopen_contentsync"];
  sketchApp.delegate().runPluginCommand_fromMenu(command, false);
} catch(e){
  log("ContentSync appcall Error:")
  log(e);
}