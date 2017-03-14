
import Context from '../context';

export function loadContentSyncFramework(){
  loadFramework('ContentSync', 'ContentSyncPanelManager');
};

function frameworkDirectory(){
  let directory = Context().scriptPath.stringByDeletingLastPathComponent();
  return directory + '/frameworks';
};

function loadFramework(frameworkName, frameworkClass) {
  let directory = frameworkDirectory();
  if (true || NSClassFromString(frameworkClass) == null) {
    var mocha = Mocha.sharedRuntime();
    if(mocha.loadFrameworkWithName_inDirectory(frameworkName, directory)){
      return true;
    } else {
      log("ERROR LOADING " + frameworkName + " in " + directory);
      return false;
    }
  } else {
    return true;
  }
};
