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
  name: 'ContentSync for Sketch',
  description: 'Sync your content to and from Google Spreadsheets. Abstract, version, and translate your design content.',
  author: 'Syncify',
  website: 'https://www.contentsync.io',
  homepage: 'https://www.contentsync.io',
  version: '5.1',
  identifier: 'com.syncify.sketch.contentsync',
  appcast: 'https://cast.appcastify.com/contentsync/contentsync.xml',
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
    "name": "ContentSync for Sketch",
    "description": "Sync your content to and from Google Spreadsheets. Abstract, version, and translate your design content.",
    "author": "Syncify",
    "website": "https://www.contentsync.io",
    "homepage": "https://www.contentsync.io",
    "version": "5.1",
    "identifier": "com.syncify.sketch.contentsync",
    "appcast": "https://cast.appcastify.com/contentsync/contentsync.xml",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHJlZmVyZW5jZXMuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25Ub2dnbGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvZnJhbWV3b3Jrcy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9pbmRleC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3VubG9hZC5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tBOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQU5aOzs7OztBQVFBLElBQUksR0FBSjtBQUNBLElBQUksTUFBSjs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIseUJBQVEsT0FBUjtBQUNBLFFBQU0seUJBQVUsUUFBaEI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSTtBQUNGLHdCQUFvQixpQkFBcEIsQ0FBc0MsR0FBdEM7QUFDRCxHQUZELENBRUUsT0FBTSxLQUFOLEVBQVk7QUFDWixRQUFJLDZCQUFKO0FBQ0EsUUFBSSxLQUFKO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7QUNoQkQ7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O0FBUUEsSUFBSSxHQUFKO0FBQ0EsSUFBSSxNQUFKOztrQkFFZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0Es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dCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblByZWZlcmVuY2VzKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1bGxcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblB1bGwoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uUHVzaChkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUb2dnbGVcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZShkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUb2dnbGVcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFRvZ2dsZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uVG9nZ2xlKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCl7XG4gIGxvYWRGcmFtZXdvcmsoJ0NvbnRlbnRTeW5jUmVhbHRpbWUnLCAnQ29udGVudFN5bmNSZWFsdGltZScpO1xufTtcblxuZnVuY3Rpb24gZnJhbWV3b3JrRGlyZWN0b3J5KCl7XG4gIGxldCBkaXJlY3RvcnkgPSBDb250ZXh0KCkuc2NyaXB0UGF0aC5zdHJpbmdCeURlbGV0aW5nTGFzdFBhdGhDb21wb25lbnQoKTtcbiAgcmV0dXJuIGRpcmVjdG9yeSArICcvZnJhbWV3b3Jrcyc7XG59O1xuXG5mdW5jdGlvbiBsb2FkRnJhbWV3b3JrKGZyYW1ld29ya05hbWUsIGZyYW1ld29ya0NsYXNzKSB7XG4gIGxldCBkaXJlY3RvcnkgPSBmcmFtZXdvcmtEaXJlY3RvcnkoKTtcbiAgaWYgKHRydWUgfHwgTlNDbGFzc0Zyb21TdHJpbmcoZnJhbWV3b3JrQ2xhc3MpID09IG51bGwpIHtcbiAgICB2YXIgbW9jaGEgPSBNb2NoYS5zaGFyZWRSdW50aW1lKCk7XG4gICAgaWYobW9jaGEubG9hZEZyYW1ld29ya1dpdGhOYW1lX2luRGlyZWN0b3J5KGZyYW1ld29ya05hbWUsIGRpcmVjdG9yeSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZyhcIkVSUk9SIExPQURJTkcgXCIgKyBmcmFtZXdvcmtOYW1lICsgXCIgaW4gXCIgKyBkaXJlY3RvcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsImltcG9ydCBsb2FkIGZyb20gJy4vbG9hZC5qcydcbmltcG9ydCB1bmxvYWQgZnJvbSAnLi91bmxvYWQuanMnXG5pbXBvcnQgYWN0aW9uVG9nZ2xlIGZyb20gJy4vYWN0aW9uVG9nZ2xlLmpzJ1xuaW1wb3J0IGFjdGlvblB1c2ggZnJvbSAnLi9hY3Rpb25QdXNoLmpzJ1xuaW1wb3J0IGFjdGlvblB1bGwgZnJvbSAnLi9hY3Rpb25QdWxsLmpzJ1xuaW1wb3J0IGFjdGlvblByZWZlcmVuY2VzIGZyb20gJy4vYWN0aW9uUHJlZmVyZW5jZXMuanMnXG5cbmltcG9ydCBhY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUgZnJvbSAnLi9hY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUuanMnXG5pbXBvcnQgYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGUgZnJvbSAnLi9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcydcblxuZXhwb3J0IHtcbiAgbG9hZCxcbiAgdW5sb2FkLFxuICBhY3Rpb25Ub2dnbGUsXG4gIGFjdGlvblB1c2gsXG4gIGFjdGlvblB1bGwsXG4gIGFjdGlvblByZWZlcmVuY2VzLFxuICBhY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUsXG4gIGFjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlXG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBjb3NjcmlwdC5zZXRTaG91bGRLZWVwQXJvdW5kKHRydWUpXG4gIENvbnRleHQoY29udGV4dClcbiAgbG9nZ2VyID0gbG9nO1xuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG5cbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmxvYWQoKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nZ2VyKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZ2dlcihlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgY29udGV4dCA9IENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgQ29udGVudFN5bmNSZWFsdGltZS51bmxvYWQoKTtcbn1cbiIsIi8qKlxuICogQ29udGV4dFxuICpcbiAqIFByb3ZpZGVzIGEgY29udmVuaWVudCB3YXkgdG8gc2V0IGFuZCBnZXQgdGhlIGN1cnJlbnQgY29tbWFuZCBjb250ZXh0LlxuICovXG5cbi8vc3RvcmUgY29udGV4dFxubGV0IGNvbnRleHQgPSBudWxsXG5cbi8vc2V0IGFuZCBnZXQgY29udGV4dCB2aWEgdGhlIHNhbWUgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuZXdDb250ZXh0KSB7XG5cbiAgLy9zZXQgbmV3IGNvbnRleHRcbiAgaWYgKG5ld0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gbmV3Q29udGV4dFxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cbiIsIi8qKlxuICogUGx1Z2luXG4gKlxuICogRGVmaW5lcyB0aGUgcGx1Z2luIHN0cnVjdHVyZSBhbmQgbWV0YWRhdGEuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBjb21tYW5kcyBmcm9tICcuL2NvbW1hbmRzJ1xuXG5leHBvcnQgY29uc3QgU2tldGNoQ29udGVudFN5bmNFeHRlbnNpb24gPSB7XG4gIG5hbWU6ICdDb250ZW50U3luYyBmb3IgU2tldGNoJyxcbiAgZGVzY3JpcHRpb246ICdTeW5jIHlvdXIgY29udGVudCB0byBhbmQgZnJvbSBHb29nbGUgU3ByZWFkc2hlZXRzLiBBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LicsXG4gIGF1dGhvcjogJ1N5bmNpZnknLFxuICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuY29udGVudHN5bmMuaW8nLFxuICBob21lcGFnZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmlvJyxcbiAgdmVyc2lvbjogJzUuMScsXG4gIGlkZW50aWZpZXI6ICdjb20uc3luY2lmeS5za2V0Y2guY29udGVudHN5bmMnLFxuICBhcHBjYXN0OiAnaHR0cHM6Ly9jYXN0LmFwcGNhc3RpZnkuY29tL2NvbnRlbnRzeW5jL2NvbnRlbnRzeW5jLnhtbCcsXG4gIGNvbXBhdGlibGVWZXJzaW9uOiAnMy43JyxcbiAgYnVuZGxlVmVyc2lvbjogJzEnLFxuICBidW5kbGVOYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBhdXRob3JFbWFpbDogJ3N1cHBvcnRAY29udGVudHN5bmMuaW8nLFxuICByZXBvc2l0b3J5OiB7XG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnRlbnRzeW5jL1NrZXRjaENvbnRlbnRTeW5jJ1xuICB9LFxuICBtZW51OntcbiAgICBcInRpdGxlXCI6XCJDb250ZW50U3luY1wiLFxuICAgIFwiaXRlbXNcIjpbXG4gICAgICBcImFjdGlvblB1c2hDb250ZW50U3luY1wiLFxuICAgICAgXCJhY3Rpb25QdWxsQ29udGVudFN5bmNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25EaXNhYmxlTGF5ZXJzXCIsXG4gICAgICBcImFjdGlvbkVuYWJsZUxheWVyc1wiLFxuICAgICAgXCItXCIsXG4gICAgICBcImFjdGlvblByZWZlcmVuY2VzXCIsXG4gICAgICBcIi1cIixcbiAgICAgIFwiYWN0aW9uVG9nZ2xlQ29udGVudFN5bmNcIlxuICAgIF1cbiAgfSxcbiAgY29tbWFuZHM6IHtcbiAgICBsaXN0ZW5lck9uU3RhcnR1cDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5sb2FkXG4gICAgfSxcbiAgICBsaXN0ZW5lck9uU2h1dGRvd246IHtcbiAgICAgIHJ1bjogY29tbWFuZHMudW5sb2FkXG4gICAgfSxcbiAgICBzdGFydFVwOiB7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgXCJTdGFydHVwXCI6IFwiX19fbGlzdGVuZXJPblN0YXJ0dXBfcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTaHV0ZG93blwiOiBcIl9fX2xpc3RlbmVyT25TaHV0ZG93bl9ydW5faGFuZGxlcl9cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25Ub2dnbGVDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1RvZ2dsZSBDb250ZW50U3luYyBQYW5lbCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgWycsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblRvZ2dsZVxuICAgIH0sXG4gICAgYWN0aW9uUHVzaENvbnRlbnRTeW5jOiB7XG4gICAgICBuYW1lOiAnUHVzaCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgcCcsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblB1c2hcbiAgICB9LFxuICAgIGFjdGlvblB1bGxDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1B1bGwnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IHUnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdWxsXG4gICAgfSxcbiAgICBhY3Rpb25QcmVmZXJlbmNlczoge1xuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IF0nLFxuICAgICAgbmFtZTogJ1ByZWZlcmVuY2VzJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHJlZmVyZW5jZXNcbiAgICB9LFxuICAgIGFjdGlvbkRpc2FibGVMYXllcnM6IHtcbiAgICAgIG5hbWU6ICdEaXNhYmxlIFN5bmMgb24gU2VsZWN0ZWQgTGF5ZXJzJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCBvJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlXG4gICAgfSxcbiAgICBhY3Rpb25FbmFibGVMYXllcnM6IHtcbiAgICAgIG5hbWU6ICdFbmFibGUgU3luYyBvbiBTZWxlY3RlZCBMYXllcnMnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IGknLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZVxuICAgIH1cbiAgfVxufVxuIl19
