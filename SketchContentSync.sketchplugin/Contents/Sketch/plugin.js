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

},{"../context":10,"./frameworks":6}],2:[function(require,module,exports){
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

},{"../context":10,"./frameworks":6}],3:[function(require,module,exports){
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

},{"../context":10,"./frameworks":6}],4:[function(require,module,exports){
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

},{"../context":10,"./frameworks":6}],5:[function(require,module,exports){
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

},{"../context":10,"./frameworks":6}],6:[function(require,module,exports){
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

},{"../context":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionSelectedLayersEnable = exports.actionSelectedLayersDisable = exports.actionPull = exports.actionPush = exports.actionToggle = exports.unload = exports.load = undefined;

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
exports.actionSelectedLayersDisable = _actionSelectedLayersDisable2.default;
exports.actionSelectedLayersEnable = _actionSelectedLayersEnable2.default;

},{"./actionPull.js":1,"./actionPush.js":2,"./actionSelectedLayersDisable.js":3,"./actionSelectedLayersEnable.js":4,"./actionToggle.js":5,"./load.js":8,"./unload.js":9}],8:[function(require,module,exports){
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

},{"../context":10,"./frameworks":6}],9:[function(require,module,exports){
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

},{"../context":10,"./frameworks":6}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
  icon: 'plugin_logo.png',
  description: 'Sync your content to and from Google Spreadsheets. Abstract, version, and translate your design content.',
  author: 'Syncify',
  website: 'https://www.contentsync.io',
  homepage: 'https://www.contentsync.io',
  version: '6.4.0',
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
    "items": ["actionPushContentSync", "actionPullContentSync", "-", "actionDisableLayers", "actionEnableLayers", "-", "actionToggleContentSync"]
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

__globals.___actionDisableLayers_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionDisableLayers'].run(context, params);
};

__globals.___actionEnableLayers_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionEnableLayers'].run(context, params);
};

/*__$begin_of_manifest_
{
    "name": "ContentSync",
    "icon": "plugin_logo.png",
    "description": "Sync your content to and from Google Spreadsheets. Abstract, version, and translate your design content.",
    "author": "Syncify",
    "website": "https://www.contentsync.io",
    "homepage": "https://www.contentsync.io",
    "version": "6.4.0",
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

},{"./commands":7}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25Ub2dnbGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvZnJhbWV3b3Jrcy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9pbmRleC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3VubG9hZC5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tBOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQU5aOzs7OztBQVFBLElBQUksR0FBSjtBQUNBLElBQUksTUFBSjs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIseUJBQVEsT0FBUjtBQUNBLFFBQU0seUJBQVUsUUFBaEI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSTtBQUNGLHdCQUFvQixVQUFwQixDQUErQixHQUEvQjtBQUNELEdBRkQsQ0FFRSxPQUFNLEtBQU4sRUFBWTtBQUNaLFFBQUksNkJBQUo7QUFDQSxRQUFJLEtBQUo7QUFDRDtBQUNGLEM7Ozs7Ozs7OztBQ2hCRDs7OztBQUNBOztJQUFZLGdCOzs7Ozs7QUFOWjs7Ozs7QUFRQSxJQUFJLEdBQUo7QUFDQSxJQUFJLE1BQUo7O2tCQUVlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxRQUFNLHlCQUFVLFFBQWhCO0FBQ0EsbUJBQWlCLHdCQUFqQjtBQUNBLE1B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LG1DQURKO0FBRVAsc0JBQVk7QUFGTDtBQUREO0FBREgsS0FQRDtBQWVSLDZCQUF5QjtBQUN2QixZQUFNLDBCQURpQjtBQUV2QixnQkFBVSxjQUZhO0FBR3ZCLFdBQUssU0FBUztBQUhTLEtBZmpCO0FBb0JSLDJCQUF1QjtBQUNyQixZQUFNLE1BRGU7QUFFckIsZ0JBQVUsY0FGVztBQUdyQixXQUFLLFNBQVM7QUFITyxLQXBCZjtBQXlCUiwyQkFBdUI7QUFDckIsWUFBTSxNQURlO0FBRXJCLGdCQUFVLGNBRlc7QUFHckIsV0FBSyxTQUFTO0FBSE8sS0F6QmY7QUE4QlIseUJBQXFCO0FBQ25CLFlBQU0saUNBRGE7QUFFbkIsZ0JBQVUsY0FGUztBQUduQixXQUFLLFNBQVM7QUFISyxLQTlCYjtBQW1DUix3QkFBb0I7QUFDbEIsWUFBTSxnQ0FEWTtBQUVsQixnQkFBVSxjQUZRO0FBR2xCLFdBQUssU0FBUztBQUhJO0FBbkNaO0FBN0I4QixDQUFuQyxDLENBVFAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBQdWxsXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25QdWxsKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblB1c2goZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVG9nZ2xlXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVG9nZ2xlXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZShkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUb2dnbGVcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblRvZ2dsZShkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpe1xuICBsb2FkRnJhbWV3b3JrKCdDb250ZW50U3luY1JlYWx0aW1lJywgJ0NvbnRlbnRTeW5jUmVhbHRpbWUnKTtcbn07XG5cbmZ1bmN0aW9uIGZyYW1ld29ya0RpcmVjdG9yeSgpe1xuICBsZXQgZGlyZWN0b3J5ID0gQ29udGV4dCgpLnNjcmlwdFBhdGguc3RyaW5nQnlEZWxldGluZ0xhc3RQYXRoQ29tcG9uZW50KCk7XG4gIHJldHVybiBkaXJlY3RvcnkgKyAnL2ZyYW1ld29ya3MnO1xufTtcblxuZnVuY3Rpb24gbG9hZEZyYW1ld29yayhmcmFtZXdvcmtOYW1lLCBmcmFtZXdvcmtDbGFzcykge1xuICBsZXQgZGlyZWN0b3J5ID0gZnJhbWV3b3JrRGlyZWN0b3J5KCk7XG4gIGlmICh0cnVlIHx8IE5TQ2xhc3NGcm9tU3RyaW5nKGZyYW1ld29ya0NsYXNzKSA9PSBudWxsKSB7XG4gICAgdmFyIG1vY2hhID0gTW9jaGEuc2hhcmVkUnVudGltZSgpO1xuICAgIGlmKG1vY2hhLmxvYWRGcmFtZXdvcmtXaXRoTmFtZV9pbkRpcmVjdG9yeShmcmFtZXdvcmtOYW1lLCBkaXJlY3RvcnkpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2coXCJFUlJPUiBMT0FESU5HIFwiICsgZnJhbWV3b3JrTmFtZSArIFwiIGluIFwiICsgZGlyZWN0b3J5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJpbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQuanMnXG5pbXBvcnQgdW5sb2FkIGZyb20gJy4vdW5sb2FkLmpzJ1xuaW1wb3J0IGFjdGlvblRvZ2dsZSBmcm9tICcuL2FjdGlvblRvZ2dsZS5qcydcbmltcG9ydCBhY3Rpb25QdXNoIGZyb20gJy4vYWN0aW9uUHVzaC5qcydcbmltcG9ydCBhY3Rpb25QdWxsIGZyb20gJy4vYWN0aW9uUHVsbC5qcydcblxuaW1wb3J0IGFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZSBmcm9tICcuL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcydcbmltcG9ydCBhY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZSBmcm9tICcuL2FjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlLmpzJ1xuXG5leHBvcnQge1xuICBsb2FkLFxuICB1bmxvYWQsXG4gIGFjdGlvblRvZ2dsZSxcbiAgYWN0aW9uUHVzaCxcbiAgYWN0aW9uUHVsbCxcbiAgYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlLFxuICBhY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgY29zY3JpcHQuc2V0U2hvdWxkS2VlcEFyb3VuZCh0cnVlKVxuICBDb250ZXh0KGNvbnRleHQpXG4gIGxvZ2dlciA9IGxvZztcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5sb2FkKCk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZ2dlcihcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2dnZXIoZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQgPSBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIENvbnRlbnRTeW5jUmVhbHRpbWUudW5sb2FkKCk7XG59XG4iLCIvKipcbiAqIENvbnRleHRcbiAqXG4gKiBQcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHNldCBhbmQgZ2V0IHRoZSBjdXJyZW50IGNvbW1hbmQgY29udGV4dC5cbiAqL1xuXG4vL3N0b3JlIGNvbnRleHRcbmxldCBjb250ZXh0ID0gbnVsbFxuXG4vL3NldCBhbmQgZ2V0IGNvbnRleHQgdmlhIHRoZSBzYW1lIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmV3Q29udGV4dCkge1xuXG4gIC8vc2V0IG5ldyBjb250ZXh0XG4gIGlmIChuZXdDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG5ld0NvbnRleHRcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0XG59XG4iLCIvKipcbiAqIFBsdWdpblxuICpcbiAqIERlZmluZXMgdGhlIHBsdWdpbiBzdHJ1Y3R1cmUgYW5kIG1ldGFkYXRhLlxuICovXG5cblxuaW1wb3J0ICogYXMgY29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcblxuZXhwb3J0IGNvbnN0IFNrZXRjaENvbnRlbnRTeW5jRXh0ZW5zaW9uID0ge1xuICBuYW1lOiAnQ29udGVudFN5bmMnLFxuICBpY29uOiAncGx1Z2luX2xvZ28ucG5nJyxcbiAgZGVzY3JpcHRpb246ICdTeW5jIHlvdXIgY29udGVudCB0byBhbmQgZnJvbSBHb29nbGUgU3ByZWFkc2hlZXRzLiBBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LicsXG4gIGF1dGhvcjogJ1N5bmNpZnknLFxuICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuY29udGVudHN5bmMuaW8nLFxuICBob21lcGFnZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmlvJyxcbiAgdmVyc2lvbjogJzYuNC4wJyxcbiAgaWRlbnRpZmllcjogJ2NvbS5zeW5jaWZ5LnNrZXRjaC5jb250ZW50c3luYycsXG4gIGFwcGNhc3Q6ICdodHRwczovL2Nhc3QuYXBwY2FzdGlmeS5jb20vY29udGVudHN5bmMvY29udGVudHN5bmM2LnhtbCcsXG4gIGNvbXBhdGlibGVWZXJzaW9uOiAnMy43JyxcbiAgYnVuZGxlVmVyc2lvbjogJzEnLFxuICBidW5kbGVOYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBhdXRob3JFbWFpbDogJ3N1cHBvcnRAY29udGVudHN5bmMuaW8nLFxuICByZXBvc2l0b3J5OiB7XG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnRlbnRzeW5jL1NrZXRjaENvbnRlbnRTeW5jJ1xuICB9LFxuICBtZW51OntcbiAgICBcInRpdGxlXCI6XCJDb250ZW50U3luY1wiLFxuICAgIFwiaXRlbXNcIjpbXG4gICAgICBcImFjdGlvblB1c2hDb250ZW50U3luY1wiLFxuICAgICAgXCJhY3Rpb25QdWxsQ29udGVudFN5bmNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25EaXNhYmxlTGF5ZXJzXCIsXG4gICAgICBcImFjdGlvbkVuYWJsZUxheWVyc1wiLFxuICAgICAgXCItXCIsXG4gICAgICBcImFjdGlvblRvZ2dsZUNvbnRlbnRTeW5jXCJcbiAgICBdXG4gIH0sXG4gIGNvbW1hbmRzOiB7XG4gICAgbGlzdGVuZXJPblN0YXJ0dXA6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMubG9hZFxuICAgIH0sXG4gICAgbGlzdGVuZXJPblNodXRkb3duOiB7XG4gICAgICBydW46IGNvbW1hbmRzLnVubG9hZFxuICAgIH0sXG4gICAgc3RhcnRVcDoge1xuICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIFwiU3RhcnR1cFwiOiBcIl9fX2xpc3RlbmVyT25TdGFydHVwX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiU2h1dGRvd25cIjogXCJfX19saXN0ZW5lck9uU2h1dGRvd25fcnVuX2hhbmRsZXJfXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uVG9nZ2xlQ29udGVudFN5bmM6IHtcbiAgICAgIG5hbWU6ICdUb2dnbGUgQ29udGVudFN5bmMgUGFuZWwnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IFsnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25Ub2dnbGVcbiAgICB9LFxuICAgIGFjdGlvblB1c2hDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1B1c2gnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IHAnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdXNoXG4gICAgfSxcbiAgICBhY3Rpb25QdWxsQ29udGVudFN5bmM6IHtcbiAgICAgIG5hbWU6ICdQdWxsJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCB1JyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHVsbFxuICAgIH0sXG4gICAgYWN0aW9uRGlzYWJsZUxheWVyczoge1xuICAgICAgbmFtZTogJ0Rpc2FibGUgU3luYyBvbiBTZWxlY3RlZCBMYXllcnMnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IG8nLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGVcbiAgICB9LFxuICAgIGFjdGlvbkVuYWJsZUxheWVyczoge1xuICAgICAgbmFtZTogJ0VuYWJsZSBTeW5jIG9uIFNlbGVjdGVkIExheWVycycsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgaScsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlXG4gICAgfVxuICB9XG59XG4iXX0=
