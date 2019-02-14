var __globals = this;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

var doc;
var logger;

exports.default = function (context) {
  (0, _context2.default)(context);
  doc = (0, _context2.default)().document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.actionPreferences(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":11,"./frameworks":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pull
 *
 */

var doc;
var logger;

exports.default = function (context) {
  (0, _context2.default)(context);
  doc = (0, _context2.default)().document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.actionPull(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":11,"./frameworks":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

var doc;
var logger;

exports.default = function (context) {
  (0, _context2.default)(context);
  doc = (0, _context2.default)().document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.actionPush(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":11,"./frameworks":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toggle
 *
 */

var doc;
var logger;

exports.default = function (context) {
  (0, _context2.default)(context);
  doc = (0, _context2.default)().document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.actionSelectedLayersDisable(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":11,"./frameworks":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toggle
 *
 */

var doc;
var logger;

exports.default = function (context) {
  (0, _context2.default)(context);
  doc = (0, _context2.default)().document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.actionSelectedLayersEnable(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":11,"./frameworks":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toggle
 *
 */

var doc;
var logger;

exports.default = function (context) {
  (0, _context2.default)(context);
  doc = (0, _context2.default)().document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.actionToggle(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":11,"./frameworks":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContentSyncFramework = loadContentSyncFramework;

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadContentSyncFramework() {
  loadFramework('ContentSyncRealtime', 'ContentSyncRealtime');
};

function frameworkDirectory() {
  var directory = (0, _context2.default)().scriptPath.stringByDeletingLastPathComponent();
  return directory + '/frameworks';
};

function loadFramework(frameworkName, frameworkClass) {
  var directory = frameworkDirectory();
  if (true || NSClassFromString(frameworkClass) == null) {
    var mocha = Mocha.sharedRuntime();
    if (mocha.loadFrameworkWithName_inDirectory(frameworkName, directory)) {
      return true;
    } else {
      log("ERROR LOADING " + frameworkName + " in " + directory);
      return false;
    }
  } else {
    return true;
  }
};

},{"../context":11}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionSelectedLayersEnable = exports.actionSelectedLayersDisable = exports.actionPreferences = exports.actionPull = exports.actionPush = exports.actionToggle = exports.unload = exports.load = undefined;

var _load = require('./load.js');

var _load2 = _interopRequireDefault(_load);

var _unload = require('./unload.js');

var _unload2 = _interopRequireDefault(_unload);

var _actionToggle = require('./actionToggle.js');

var _actionToggle2 = _interopRequireDefault(_actionToggle);

var _actionPush = require('./actionPush.js');

var _actionPush2 = _interopRequireDefault(_actionPush);

var _actionPull = require('./actionPull.js');

var _actionPull2 = _interopRequireDefault(_actionPull);

var _actionPreferences = require('./actionPreferences.js');

var _actionPreferences2 = _interopRequireDefault(_actionPreferences);

var _actionSelectedLayersDisable = require('./actionSelectedLayersDisable.js');

var _actionSelectedLayersDisable2 = _interopRequireDefault(_actionSelectedLayersDisable);

var _actionSelectedLayersEnable = require('./actionSelectedLayersEnable.js');

var _actionSelectedLayersEnable2 = _interopRequireDefault(_actionSelectedLayersEnable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.load = _load2.default;
exports.unload = _unload2.default;
exports.actionToggle = _actionToggle2.default;
exports.actionPush = _actionPush2.default;
exports.actionPull = _actionPull2.default;
exports.actionPreferences = _actionPreferences2.default;
exports.actionSelectedLayersDisable = _actionSelectedLayersDisable2.default;
exports.actionSelectedLayersEnable = _actionSelectedLayersEnable2.default;

},{"./actionPreferences.js":1,"./actionPull.js":2,"./actionPush.js":3,"./actionSelectedLayersDisable.js":4,"./actionSelectedLayersEnable.js":5,"./actionToggle.js":6,"./load.js":9,"./unload.js":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

var doc;
var logger;

exports.default = function (context) {
  coscript.setShouldKeepAround(true);
  (0, _context2.default)(context);
  logger = log;
  doc = (0, _context2.default)().document;

  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.load();
  } catch (error) {
    logger("[ContentSyncRealtime] ERROR");
    logger(error);
  }
};

},{"../context":11,"./frameworks":7}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _frameworks = require('./frameworks');

var FrameworkManager = _interopRequireWildcard(_frameworks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

exports.default = function (context) {
  context = (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  ContentSyncRealtime.unload();
};

},{"../context":11,"./frameworks":7}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (newContext) {

  //set new context
  if (newContext) {
    context = newContext;
  }

  return context;
};

/**
 * Context
 *
 * Provides a convenient way to set and get the current command context.
 */

//store context
var context = null;

//set and get context via the same function

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchContentSyncExtension = undefined;

var _commands = require('./commands');

var commands = _interopRequireWildcard(_commands);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SketchContentSyncExtension = exports.SketchContentSyncExtension = {
  name: 'ContentSync',
  description: 'Sync your content to and from Google Spreadsheets. Abstract, version, and translate your design content.',
  author: 'Syncify',
  website: 'https://www.contentsync.io',
  homepage: 'https://www.contentsync.io',
  version: '6.0.1',
  identifier: 'com.syncify.sketch.contentsync',
  appcast: 'https://cast.appcastify.com/contentsync/contentsync6.xml',
  compatibleVersion: '3.7',
  bundleVersion: '1',
  bundleName: 'SketchContentSync',
  authorEmail: 'support@contentsync.io',
  repository: {
    url: 'https://github.com/contentsync/SketchContentSync'
  },
  menu: {
    "title": "ContentSync",
    "items": ["actionPushContentSync", "actionPullContentSync", "-", "actionDisableLayers", "actionEnableLayers", "-", "actionPreferences", "-", "actionToggleContentSync"]
  },
  commands: {
    listenerOnStartup: {
      run: commands.load
    },
    listenerOnShutdown: {
      run: commands.unload
    },
    startUp: {
      handlers: {
        actions: {
          "Startup": "___listenerOnStartup_run_handler_",
          "Shutdown": "___listenerOnShutdown_run_handler_"
        }
      }
    },
    actionToggleContentSync: {
      name: 'Toggle ContentSync Panel',
      shortcut: 'ctrl shift [',
      run: commands.actionToggle
    },
    actionPushContentSync: {
      name: 'Push',
      shortcut: 'ctrl shift p',
      run: commands.actionPush
    },
    actionPullContentSync: {
      name: 'Pull',
      shortcut: 'ctrl shift u',
      run: commands.actionPull
    },
    actionPreferences: {
      shortcut: 'ctrl shift ]',
      name: 'Preferences',
      run: commands.actionPreferences
    },
    actionDisableLayers: {
      name: 'Disable Sync on Selected Layers',
      shortcut: 'ctrl shift o',
      run: commands.actionSelectedLayersDisable
    },
    actionEnableLayers: {
      name: 'Enable Sync on Selected Layers',
      shortcut: 'ctrl shift i',
      run: commands.actionSelectedLayersEnable
    }
  }
}; /**
    * Plugin
    *
    * Defines the plugin structure and metadata.
    */

__globals.___listenerOnStartup_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOnStartup'].run(context, params);
};

__globals.___listenerOnShutdown_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOnShutdown'].run(context, params);
};

__globals.___startUp_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['startUp'].run(context, params);
};

__globals.___actionToggleContentSync_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionToggleContentSync'].run(context, params);
};

__globals.___actionPushContentSync_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionPushContentSync'].run(context, params);
};

__globals.___actionPullContentSync_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionPullContentSync'].run(context, params);
};

__globals.___actionPreferences_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionPreferences'].run(context, params);
};

__globals.___actionDisableLayers_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionDisableLayers'].run(context, params);
};

__globals.___actionEnableLayers_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionEnableLayers'].run(context, params);
};

/*__$begin_of_manifest_
{
    "name": "ContentSync",
    "description": "Sync your content to and from Google Spreadsheets. Abstract, version, and translate your design content.",
    "author": "Syncify",
    "website": "https://www.contentsync.io",
    "homepage": "https://www.contentsync.io",
    "version": "6.0.1",
    "identifier": "com.syncify.sketch.contentsync",
    "appcast": "https://cast.appcastify.com/contentsync/contentsync6.xml",
    "compatibleVersion": "3.7",
    "bundleVersion": "1",
    "bundleName": "SketchContentSync",
    "authorEmail": "support@contentsync.io",
    "repository": {
        "url": "https://github.com/contentsync/SketchContentSync"
    },
    "menu": {
        "title": "ContentSync",
        "items": [
            "actionPushContentSync",
            "actionPullContentSync",
            "-",
            "actionDisableLayers",
            "actionEnableLayers",
            "-",
            "actionPreferences",
            "-",
            "actionToggleContentSync"
        ]
    },
    "commands": [
        {
            "identifier": "listenerOnStartup",
            "handler": "___listenerOnStartup_run_handler_",
            "script": "plugin.js"
        },
        {
            "identifier": "listenerOnShutdown",
            "handler": "___listenerOnShutdown_run_handler_",
            "script": "plugin.js"
        },
        {
            "identifier": "startUp",
            "handler": "___startUp_run_handler_",
            "script": "plugin.js",
            "handlers": {
                "actions": {
                    "Startup": "___listenerOnStartup_run_handler_",
                    "Shutdown": "___listenerOnShutdown_run_handler_"
                }
            }
        },
        {
            "identifier": "actionToggleContentSync",
            "handler": "___actionToggleContentSync_run_handler_",
            "script": "plugin.js",
            "name": "Toggle ContentSync Panel",
            "shortcut": "ctrl shift ["
        },
        {
            "identifier": "actionPushContentSync",
            "handler": "___actionPushContentSync_run_handler_",
            "script": "plugin.js",
            "name": "Push",
            "shortcut": "ctrl shift p"
        },
        {
            "identifier": "actionPullContentSync",
            "handler": "___actionPullContentSync_run_handler_",
            "script": "plugin.js",
            "name": "Pull",
            "shortcut": "ctrl shift u"
        },
        {
            "identifier": "actionPreferences",
            "handler": "___actionPreferences_run_handler_",
            "script": "plugin.js",
            "shortcut": "ctrl shift ]",
            "name": "Preferences"
        },
        {
            "identifier": "actionDisableLayers",
            "handler": "___actionDisableLayers_run_handler_",
            "script": "plugin.js",
            "name": "Disable Sync on Selected Layers",
            "shortcut": "ctrl shift o"
        },
        {
            "identifier": "actionEnableLayers",
            "handler": "___actionEnableLayers_run_handler_",
            "script": "plugin.js",
            "name": "Enable Sync on Selected Layers",
            "shortcut": "ctrl shift i"
        }
    ],
    "disableCocoaScriptPreprocessor": true
}__$end_of_manifest_
*/

},{"./commands":8}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHJlZmVyZW5jZXMuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25Ub2dnbGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvZnJhbWV3b3Jrcy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9pbmRleC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3VubG9hZC5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tBOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQU5aOzs7OztBQVFBLElBQUksR0FBSjtBQUNBLElBQUksTUFBSjs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIseUJBQVEsT0FBUjtBQUNBLFFBQU0seUJBQVUsUUFBaEI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSTtBQUNGLHdCQUFvQixpQkFBcEIsQ0FBc0MsR0FBdEM7QUFDRCxHQUZELENBRUUsT0FBTSxLQUFOLEVBQVk7QUFDWixRQUFJLDZCQUFKO0FBQ0EsUUFBSSxLQUFKO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7QUNoQkQ7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O0FBUUEsSUFBSSxHQUFKO0FBQ0EsSUFBSSxNQUFKOztrQkFFZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0Es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QVg0QjtBQVl4QyxlQUFhLHdCQVoyQjtBQWF4QyxjQUFZO0FBQ1YsU0FBSztBQURLLEdBYjRCO0FBZ0J4QyxRQUFLO0FBQ0gsYUFBUSxhQURMO0FBRUgsYUFBUSxDQUNOLHVCQURNLEVBRU4sdUJBRk0sRUFHTixHQUhNLEVBSU4scUJBSk0sRUFLTixvQkFMTSxFQU1OLEdBTk0sRUFPTixtQkFQTSxFQVFOLEdBUk0sRUFTTix5QkFUTTtBQUZMLEdBaEJtQztBQThCeEMsWUFBVTtBQUNSLHVCQUFtQjtBQUNqQixXQUFLLFNBQVM7QUFERyxLQURYO0FBSVIsd0JBQW9CO0FBQ2xCLFdBQUssU0FBUztBQURJLEtBSlo7QUFPUixhQUFTO0FBQ1AsZ0JBQVU7QUFDUixpQkFBUztBQUNQLHFCQUFXLG1DQURKO0FBRVAsc0JBQVk7QUFGTDtBQUREO0FBREgsS0FQRDtBQWVSLDZCQUF5QjtBQUN2QixZQUFNLDBCQURpQjtBQUV2QixnQkFBVSxjQUZhO0FBR3ZCLFdBQUssU0FBUztBQUhTLEtBZmpCO0FBb0JSLDJCQUF1QjtBQUNyQixZQUFNLE1BRGU7QUFFckIsZ0JBQVUsY0FGVztBQUdyQixXQUFLLFNBQVM7QUFITyxLQXBCZjtBQXlCUiwyQkFBdUI7QUFDckIsWUFBTSxNQURlO0FBRXJCLGdCQUFVLGNBRlc7QUFHckIsV0FBSyxTQUFTO0FBSE8sS0F6QmY7QUE4QlIsdUJBQW1CO0FBQ2pCLGdCQUFVLGNBRE87QUFFakIsWUFBTSxhQUZXO0FBR2pCLFdBQUssU0FBUztBQUhHLEtBOUJYO0FBbUNSLHlCQUFxQjtBQUNuQixZQUFNLGlDQURhO0FBRW5CLGdCQUFVLGNBRlM7QUFHbkIsV0FBSyxTQUFTO0FBSEssS0FuQ2I7QUF3Q1Isd0JBQW9CO0FBQ2xCLFlBQU0sZ0NBRFk7QUFFbEIsZ0JBQVUsY0FGUTtBQUdsQixXQUFLLFNBQVM7QUFISTtBQXhDWjtBQTlCOEIsQ0FBbkMsQyxDQVRQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uUHJlZmVyZW5jZXMoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVsbFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uUHVsbChkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25QdXNoKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFRvZ2dsZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFRvZ2dsZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGUoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVG9nZ2xlXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25Ub2dnbGUoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKXtcbiAgbG9hZEZyYW1ld29yaygnQ29udGVudFN5bmNSZWFsdGltZScsICdDb250ZW50U3luY1JlYWx0aW1lJyk7XG59O1xuXG5mdW5jdGlvbiBmcmFtZXdvcmtEaXJlY3RvcnkoKXtcbiAgbGV0IGRpcmVjdG9yeSA9IENvbnRleHQoKS5zY3JpcHRQYXRoLnN0cmluZ0J5RGVsZXRpbmdMYXN0UGF0aENvbXBvbmVudCgpO1xuICByZXR1cm4gZGlyZWN0b3J5ICsgJy9mcmFtZXdvcmtzJztcbn07XG5cbmZ1bmN0aW9uIGxvYWRGcmFtZXdvcmsoZnJhbWV3b3JrTmFtZSwgZnJhbWV3b3JrQ2xhc3MpIHtcbiAgbGV0IGRpcmVjdG9yeSA9IGZyYW1ld29ya0RpcmVjdG9yeSgpO1xuICBpZiAodHJ1ZSB8fCBOU0NsYXNzRnJvbVN0cmluZyhmcmFtZXdvcmtDbGFzcykgPT0gbnVsbCkge1xuICAgIHZhciBtb2NoYSA9IE1vY2hhLnNoYXJlZFJ1bnRpbWUoKTtcbiAgICBpZihtb2NoYS5sb2FkRnJhbWV3b3JrV2l0aE5hbWVfaW5EaXJlY3RvcnkoZnJhbWV3b3JrTmFtZSwgZGlyZWN0b3J5KSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nKFwiRVJST1IgTE9BRElORyBcIiArIGZyYW1ld29ya05hbWUgKyBcIiBpbiBcIiArIGRpcmVjdG9yeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkLmpzJ1xuaW1wb3J0IHVubG9hZCBmcm9tICcuL3VubG9hZC5qcydcbmltcG9ydCBhY3Rpb25Ub2dnbGUgZnJvbSAnLi9hY3Rpb25Ub2dnbGUuanMnXG5pbXBvcnQgYWN0aW9uUHVzaCBmcm9tICcuL2FjdGlvblB1c2guanMnXG5pbXBvcnQgYWN0aW9uUHVsbCBmcm9tICcuL2FjdGlvblB1bGwuanMnXG5pbXBvcnQgYWN0aW9uUHJlZmVyZW5jZXMgZnJvbSAnLi9hY3Rpb25QcmVmZXJlbmNlcy5qcydcblxuaW1wb3J0IGFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZSBmcm9tICcuL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcydcbmltcG9ydCBhY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZSBmcm9tICcuL2FjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlLmpzJ1xuXG5leHBvcnQge1xuICBsb2FkLFxuICB1bmxvYWQsXG4gIGFjdGlvblRvZ2dsZSxcbiAgYWN0aW9uUHVzaCxcbiAgYWN0aW9uUHVsbCxcbiAgYWN0aW9uUHJlZmVyZW5jZXMsXG4gIGFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZSxcbiAgYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGVcbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIGNvc2NyaXB0LnNldFNob3VsZEtlZXBBcm91bmQodHJ1ZSlcbiAgQ29udGV4dChjb250ZXh0KVxuICBsb2dnZXIgPSBsb2c7XG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcblxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUubG9hZCgpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2dnZXIoXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nZ2VyKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBjb250ZXh0ID0gQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBDb250ZW50U3luY1JlYWx0aW1lLnVubG9hZCgpO1xufVxuIiwiLyoqXG4gKiBDb250ZXh0XG4gKlxuICogUHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSB0byBzZXQgYW5kIGdldCB0aGUgY3VycmVudCBjb21tYW5kIGNvbnRleHQuXG4gKi9cblxuLy9zdG9yZSBjb250ZXh0XG5sZXQgY29udGV4dCA9IG51bGxcblxuLy9zZXQgYW5kIGdldCBjb250ZXh0IHZpYSB0aGUgc2FtZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5ld0NvbnRleHQpIHtcblxuICAvL3NldCBuZXcgY29udGV4dFxuICBpZiAobmV3Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBuZXdDb250ZXh0XG4gIH1cblxuICByZXR1cm4gY29udGV4dFxufVxuIiwiLyoqXG4gKiBQbHVnaW5cbiAqXG4gKiBEZWZpbmVzIHRoZSBwbHVnaW4gc3RydWN0dXJlIGFuZCBtZXRhZGF0YS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIGNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnXG5cbmV4cG9ydCBjb25zdCBTa2V0Y2hDb250ZW50U3luY0V4dGVuc2lvbiA9IHtcbiAgbmFtZTogJ0NvbnRlbnRTeW5jJyxcbiAgZGVzY3JpcHRpb246ICdTeW5jIHlvdXIgY29udGVudCB0byBhbmQgZnJvbSBHb29nbGUgU3ByZWFkc2hlZXRzLiBBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LicsXG4gIGF1dGhvcjogJ1N5bmNpZnknLFxuICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuY29udGVudHN5bmMuaW8nLFxuICBob21lcGFnZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmlvJyxcbiAgdmVyc2lvbjogJzYuMC4xJyxcbiAgaWRlbnRpZmllcjogJ2NvbS5zeW5jaWZ5LnNrZXRjaC5jb250ZW50c3luYycsXG4gIGFwcGNhc3Q6ICdodHRwczovL2Nhc3QuYXBwY2FzdGlmeS5jb20vY29udGVudHN5bmMvY29udGVudHN5bmM2LnhtbCcsXG4gIGNvbXBhdGlibGVWZXJzaW9uOiAnMy43JyxcbiAgYnVuZGxlVmVyc2lvbjogJzEnLFxuICBidW5kbGVOYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBhdXRob3JFbWFpbDogJ3N1cHBvcnRAY29udGVudHN5bmMuaW8nLFxuICByZXBvc2l0b3J5OiB7XG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnRlbnRzeW5jL1NrZXRjaENvbnRlbnRTeW5jJ1xuICB9LFxuICBtZW51OntcbiAgICBcInRpdGxlXCI6XCJDb250ZW50U3luY1wiLFxuICAgIFwiaXRlbXNcIjpbXG4gICAgICBcImFjdGlvblB1c2hDb250ZW50U3luY1wiLFxuICAgICAgXCJhY3Rpb25QdWxsQ29udGVudFN5bmNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25EaXNhYmxlTGF5ZXJzXCIsXG4gICAgICBcImFjdGlvbkVuYWJsZUxheWVyc1wiLFxuICAgICAgXCItXCIsXG4gICAgICBcImFjdGlvblByZWZlcmVuY2VzXCIsXG4gICAgICBcIi1cIixcbiAgICAgIFwiYWN0aW9uVG9nZ2xlQ29udGVudFN5bmNcIlxuICAgIF1cbiAgfSxcbiAgY29tbWFuZHM6IHtcbiAgICBsaXN0ZW5lck9uU3RhcnR1cDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5sb2FkXG4gICAgfSxcbiAgICBsaXN0ZW5lck9uU2h1dGRvd246IHtcbiAgICAgIHJ1bjogY29tbWFuZHMudW5sb2FkXG4gICAgfSxcbiAgICBzdGFydFVwOiB7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgXCJTdGFydHVwXCI6IFwiX19fbGlzdGVuZXJPblN0YXJ0dXBfcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTaHV0ZG93blwiOiBcIl9fX2xpc3RlbmVyT25TaHV0ZG93bl9ydW5faGFuZGxlcl9cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25Ub2dnbGVDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1RvZ2dsZSBDb250ZW50U3luYyBQYW5lbCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgWycsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblRvZ2dsZVxuICAgIH0sXG4gICAgYWN0aW9uUHVzaENvbnRlbnRTeW5jOiB7XG4gICAgICBuYW1lOiAnUHVzaCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgcCcsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblB1c2hcbiAgICB9LFxuICAgIGFjdGlvblB1bGxDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1B1bGwnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IHUnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdWxsXG4gICAgfSxcbiAgICBhY3Rpb25QcmVmZXJlbmNlczoge1xuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IF0nLFxuICAgICAgbmFtZTogJ1ByZWZlcmVuY2VzJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHJlZmVyZW5jZXNcbiAgICB9LFxuICAgIGFjdGlvbkRpc2FibGVMYXllcnM6IHtcbiAgICAgIG5hbWU6ICdEaXNhYmxlIFN5bmMgb24gU2VsZWN0ZWQgTGF5ZXJzJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCBvJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlXG4gICAgfSxcbiAgICBhY3Rpb25FbmFibGVMYXllcnM6IHtcbiAgICAgIG5hbWU6ICdFbmFibGUgU3luYyBvbiBTZWxlY3RlZCBMYXllcnMnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IGknLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZVxuICAgIH1cbiAgfVxufVxuIl19
