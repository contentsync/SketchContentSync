
export function load(){
    var ContentSync_FrameworkPath = ContentSync_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
    var ContentSync_Log = ContentSync_Log || log;

     var mocha = Mocha.sharedRuntime();
     var frameworkName = "ContentSync";
     var directory = ContentSync_FrameworkPath;
     if (false && mocha.valueForKey(frameworkName)) {
         ContentSync_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
         return true;
     } else if (mocha.loadFrameworkWithName_inDirectory(frameworkName, directory)) {
         ContentSync_Log("✅ loadFramework: `" + frameworkName + "` success!");
         mocha.setValue_forKey_(true, frameworkName);
         return true;
     } else {
         ContentSync_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define ContentSync_FrameworkPath if you're trying to @import in a custom plugin");
         return false;
     }
}