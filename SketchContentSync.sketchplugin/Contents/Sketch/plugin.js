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

},{"../context":12,"./frameworks":6}],2:[function(require,module,exports){
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

},{"../context":12,"./frameworks":6}],3:[function(require,module,exports){
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

},{"../context":12,"./frameworks":6}],4:[function(require,module,exports){
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

},{"../context":12,"./frameworks":6}],5:[function(require,module,exports){
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

},{"../context":12,"./frameworks":6}],6:[function(require,module,exports){
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

},{"../context":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionSelectedLayersEnable = exports.actionSelectedLayersDisable = exports.actionPull = exports.actionPush = exports.actionToggle = exports.selectionChanged = exports.openDocument = exports.unload = exports.load = undefined;

var _load = require('./load.js');

var _load2 = _interopRequireDefault(_load);

var _unload = require('./unload.js');

var _unload2 = _interopRequireDefault(_unload);

var _openDocument = require('./openDocument.js');

var _openDocument2 = _interopRequireDefault(_openDocument);

var _selectionChanged = require('./selectionChanged.js');

var _selectionChanged2 = _interopRequireDefault(_selectionChanged);

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
exports.openDocument = _openDocument2.default;
exports.selectionChanged = _selectionChanged2.default;
exports.actionToggle = _actionToggle2.default;
exports.actionPush = _actionPush2.default;
exports.actionPull = _actionPull2.default;
exports.actionSelectedLayersDisable = _actionSelectedLayersDisable2.default;
exports.actionSelectedLayersEnable = _actionSelectedLayersEnable2.default;

},{"./actionPull.js":1,"./actionPush.js":2,"./actionSelectedLayersDisable.js":3,"./actionSelectedLayersEnable.js":4,"./actionToggle.js":5,"./load.js":8,"./openDocument.js":9,"./selectionChanged.js":10,"./unload.js":11}],8:[function(require,module,exports){
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

},{"../context":12,"./frameworks":6}],9:[function(require,module,exports){
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
  doc = (0, _context2.default)().actionContext.document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.onOpenDocument(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":12,"./frameworks":6}],10:[function(require,module,exports){
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
  doc = (0, _context2.default)().actionContext.document;
  FrameworkManager.loadContentSyncFramework();
  try {
    ContentSyncRealtime.onSelectionChanged(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

},{"../context":12,"./frameworks":6}],11:[function(require,module,exports){
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

},{"../context":12,"./frameworks":6}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
  description: 'Sync your content to and from Google Spreadsheets and Microsoft 365 Excel. Abstract, version, and translate your design content.',
  author: 'Syncify',
  website: 'https://www.contentsync.io',
  homepage: 'https://www.contentsync.io',
  version: '8.1.1',
  identifier: 'com.syncify.sketch.contentsync',
  appcast: 'https://cast.appcastify.com/contentsync/contentsync6.xml',
  compatibleVersion: '71',
  maxCompatibleVersion: '71',
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
    listenerOpenDocument: {
      run: commands.openDocument
    },
    listenerSelectionChanged: {
      run: commands.selectionChanged
    },
    startUp: {
      handlers: {
        actions: {
          "Startup": "___listenerOnStartup_run_handler_",
          "Shutdown": "___listenerOnShutdown_run_handler_",
          "OpenDocument": "___listenerOpenDocument_run_handler_",
          "SelectionChanged": "___listenerSelectionChanged_run_handler_"
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

__globals.___listenerOpenDocument_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOpenDocument'].run(context, params);
};

__globals.___listenerSelectionChanged_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerSelectionChanged'].run(context, params);
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
    "description": "Sync your content to and from Google Spreadsheets and Microsoft 365 Excel. Abstract, version, and translate your design content.",
    "author": "Syncify",
    "website": "https://www.contentsync.io",
    "homepage": "https://www.contentsync.io",
    "version": "8.1.1",
    "identifier": "com.syncify.sketch.contentsync",
    "appcast": "https://cast.appcastify.com/contentsync/contentsync6.xml",
    "compatibleVersion": "71",
    "maxCompatibleVersion": "71",
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
            "identifier": "listenerOpenDocument",
            "handler": "___listenerOpenDocument_run_handler_",
            "script": "plugin.js"
        },
        {
            "identifier": "listenerSelectionChanged",
            "handler": "___listenerSelectionChanged_run_handler_",
            "script": "plugin.js"
        },
        {
            "identifier": "startUp",
            "handler": "___startUp_run_handler_",
            "script": "plugin.js",
            "handlers": {
                "actions": {
                    "Startup": "___listenerOnStartup_run_handler_",
                    "Shutdown": "___listenerOnShutdown_run_handler_",
                    "OpenDocument": "___listenerOpenDocument_run_handler_",
                    "SelectionChanged": "___listenerSelectionChanged_run_handler_"
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

},{"./commands":7}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25Ub2dnbGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvZnJhbWV3b3Jrcy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9pbmRleC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL29wZW5Eb2N1bWVudC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9zZWxlY3Rpb25DaGFuZ2VkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3VubG9hZC5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tBOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQU5aOzs7OztBQVFBLElBQUksR0FBSjtBQUNBLElBQUksTUFBSjs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIseUJBQVEsT0FBUjtBQUNBLFFBQU0seUJBQVUsUUFBaEI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSTtBQUNGLHdCQUFvQixVQUFwQixDQUErQixHQUEvQjtBQUNELEdBRkQsQ0FFRSxPQUFNLEtBQU4sRUFBWTtBQUNaLFFBQUksNkJBQUo7QUFDQSxRQUFJLEtBQUo7QUFDRDtBQUNGLEM7Ozs7Ozs7OztBQ2hCRDs7OztBQUNBOztJQUFZLGdCOzs7Ozs7QUFOWjs7Ozs7QUFRQSxJQUFJLEdBQUo7QUFDQSxJQUFJLE1BQUo7O2tCQUVlLFVB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QVM7QUFIUyxLQXZCakI7QUE0QlIsMkJBQXVCO0FBQ3JCLFlBQU0sTUFEZTtBQUVyQixnQkFBVSxjQUZXO0FBR3JCLFdBQUssU0FBUztBQUhPLEtBNUJmO0FBaUNSLDJCQUF1QjtBQUNyQixZQUFNLE1BRGU7QUFFckIsZ0JBQVUsY0FGVztBQUdyQixXQUFLLFNBQVM7QUFITyxLQWpDZjtBQXNDUix5QkFBcUI7QUFDbkIsWUFBTSxpQ0FEYTtBQUVuQixnQkFBVSxjQUZTO0FBR25CLFdBQUssU0FBUztBQUhLLEtBdENiO0FBMkNSLHdCQUFvQjtBQUNsQixZQUFNLGdDQURZO0FBRWxCLGdCQUFVLGNBRlE7QUFHbEIsV0FBSyxTQUFTO0FBSEk7QUEzQ1o7QUE5QjhCLENBQW5DLEMsQ0FUUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFB1bGxcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblB1bGwoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uUHVzaChkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUb2dnbGVcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZShkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUb2dnbGVcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFRvZ2dsZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uVG9nZ2xlKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCl7XG4gIGxvYWRGcmFtZXdvcmsoJ0NvbnRlbnRTeW5jUmVhbHRpbWUnLCAnQ29udGVudFN5bmNSZWFsdGltZScpO1xufTtcblxuZnVuY3Rpb24gZnJhbWV3b3JrRGlyZWN0b3J5KCl7XG4gIGxldCBkaXJlY3RvcnkgPSBDb250ZXh0KCkuc2NyaXB0UGF0aC5zdHJpbmdCeURlbGV0aW5nTGFzdFBhdGhDb21wb25lbnQoKTtcbiAgcmV0dXJuIGRpcmVjdG9yeSArICcvZnJhbWV3b3Jrcyc7XG59O1xuXG5mdW5jdGlvbiBsb2FkRnJhbWV3b3JrKGZyYW1ld29ya05hbWUsIGZyYW1ld29ya0NsYXNzKSB7XG4gIGxldCBkaXJlY3RvcnkgPSBmcmFtZXdvcmtEaXJlY3RvcnkoKTtcbiAgaWYgKHRydWUgfHwgTlNDbGFzc0Zyb21TdHJpbmcoZnJhbWV3b3JrQ2xhc3MpID09IG51bGwpIHtcbiAgICB2YXIgbW9jaGEgPSBNb2NoYS5zaGFyZWRSdW50aW1lKCk7XG4gICAgaWYobW9jaGEubG9hZEZyYW1ld29ya1dpdGhOYW1lX2luRGlyZWN0b3J5KGZyYW1ld29ya05hbWUsIGRpcmVjdG9yeSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZyhcIkVSUk9SIExPQURJTkcgXCIgKyBmcmFtZXdvcmtOYW1lICsgXCIgaW4gXCIgKyBkaXJlY3RvcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsImltcG9ydCBsb2FkIGZyb20gJy4vbG9hZC5qcydcbmltcG9ydCB1bmxvYWQgZnJvbSAnLi91bmxvYWQuanMnXG5cbmltcG9ydCBvcGVuRG9jdW1lbnQgZnJvbSAnLi9vcGVuRG9jdW1lbnQuanMnXG5pbXBvcnQgc2VsZWN0aW9uQ2hhbmdlZCBmcm9tICcuL3NlbGVjdGlvbkNoYW5nZWQuanMnO1xuXG5pbXBvcnQgYWN0aW9uVG9nZ2xlIGZyb20gJy4vYWN0aW9uVG9nZ2xlLmpzJ1xuaW1wb3J0IGFjdGlvblB1c2ggZnJvbSAnLi9hY3Rpb25QdXNoLmpzJ1xuaW1wb3J0IGFjdGlvblB1bGwgZnJvbSAnLi9hY3Rpb25QdWxsLmpzJ1xuXG5pbXBvcnQgYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlIGZyb20gJy4vYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlLmpzJ1xuaW1wb3J0IGFjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlIGZyb20gJy4vYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGUuanMnXG5cbmV4cG9ydCB7XG4gIGxvYWQsXG4gIHVubG9hZCxcbiAgb3BlbkRvY3VtZW50LFxuICBzZWxlY3Rpb25DaGFuZ2VkLFxuICBhY3Rpb25Ub2dnbGUsXG4gIGFjdGlvblB1c2gsXG4gIGFjdGlvblB1bGwsXG4gIGFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZSxcbiAgYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGVcbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIGNvc2NyaXB0LnNldFNob3VsZEtlZXBBcm91bmQodHJ1ZSlcbiAgQ29udGV4dChjb250ZXh0KVxuICBsb2dnZXIgPSBsb2c7XG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcblxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUubG9hZCgpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2dnZXIoXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nZ2VyKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuYWN0aW9uQ29udGV4dC5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLm9uT3BlbkRvY3VtZW50KGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuIGltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuIGltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcbiBcbiB2YXIgZG9jO1xuIHZhciBsb2dnZXI7XG4gXG4gZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgIENvbnRleHQoY29udGV4dClcbiAgIGRvYyA9IENvbnRleHQoKS5hY3Rpb25Db250ZXh0LmRvY3VtZW50O1xuICAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgIHRyeSB7XG4gICAgIENvbnRlbnRTeW5jUmVhbHRpbWUub25TZWxlY3Rpb25DaGFuZ2VkKGRvYyk7XG4gICB9IGNhdGNoKGVycm9yKXtcbiAgICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgICBsb2coZXJyb3IpO1xuICAgfVxuIH1cbiAiLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQgPSBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIENvbnRlbnRTeW5jUmVhbHRpbWUudW5sb2FkKCk7XG59XG4iLCIvKipcbiAqIENvbnRleHRcbiAqXG4gKiBQcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHNldCBhbmQgZ2V0IHRoZSBjdXJyZW50IGNvbW1hbmQgY29udGV4dC5cbiAqL1xuXG4vL3N0b3JlIGNvbnRleHRcbmxldCBjb250ZXh0ID0gbnVsbFxuXG4vL3NldCBhbmQgZ2V0IGNvbnRleHQgdmlhIHRoZSBzYW1lIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmV3Q29udGV4dCkge1xuXG4gIC8vc2V0IG5ldyBjb250ZXh0XG4gIGlmIChuZXdDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG5ld0NvbnRleHRcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0XG59XG4iLCIvKipcbiAqIFBsdWdpblxuICpcbiAqIERlZmluZXMgdGhlIHBsdWdpbiBzdHJ1Y3R1cmUgYW5kIG1ldGFkYXRhLlxuICovXG5cblxuaW1wb3J0ICogYXMgY29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcblxuZXhwb3J0IGNvbnN0IFNrZXRjaENvbnRlbnRTeW5jRXh0ZW5zaW9uID0ge1xuICBuYW1lOiAnQ29udGVudFN5bmMnLFxuICBpY29uOiAncGx1Z2luX2xvZ28ucG5nJyxcbiAgZGVzY3JpcHRpb246ICdTeW5jIHlvdXIgY29udGVudCB0byBhbmQgZnJvbSBHb29nbGUgU3ByZWFkc2hlZXRzIGFuZCBNaWNyb3NvZnQgMzY1IEV4Y2VsLiBBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LicsXG4gIGF1dGhvcjogJ1N5bmNpZnknLFxuICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuY29udGVudHN5bmMuaW8nLFxuICBob21lcGFnZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmlvJyxcbiAgdmVyc2lvbjogJzguMS4xJyxcbiAgaWRlbnRpZmllcjogJ2NvbS5zeW5jaWZ5LnNrZXRjaC5jb250ZW50c3luYycsXG4gIGFwcGNhc3Q6ICdodHRwczovL2Nhc3QuYXBwY2FzdGlmeS5jb20vY29udGVudHN5bmMvY29udGVudHN5bmM2LnhtbCcsXG4gIGNvbXBhdGlibGVWZXJzaW9uOiAnNzEnLFxuICBtYXhDb21wYXRpYmxlVmVyc2lvbjogJzcxJyxcbiAgYnVuZGxlVmVyc2lvbjogJzEnLFxuICBidW5kbGVOYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBhdXRob3JFbWFpbDogJ3N1cHBvcnRAY29udGVudHN5bmMuaW8nLFxuICByZXBvc2l0b3J5OiB7XG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnRlbnRzeW5jL1NrZXRjaENvbnRlbnRTeW5jJ1xuICB9LFxuICBtZW51OntcbiAgICBcInRpdGxlXCI6XCJDb250ZW50U3luY1wiLFxuICAgIFwiaXRlbXNcIjpbXG4gICAgICBcImFjdGlvblB1c2hDb250ZW50U3luY1wiLFxuICAgICAgXCJhY3Rpb25QdWxsQ29udGVudFN5bmNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25EaXNhYmxlTGF5ZXJzXCIsXG4gICAgICBcImFjdGlvbkVuYWJsZUxheWVyc1wiLFxuICAgICAgXCItXCIsXG4gICAgICBcImFjdGlvblRvZ2dsZUNvbnRlbnRTeW5jXCJcbiAgICBdXG4gIH0sXG4gIGNvbW1hbmRzOiB7XG4gICAgbGlzdGVuZXJPblN0YXJ0dXA6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMubG9hZFxuICAgIH0sXG4gICAgbGlzdGVuZXJPblNodXRkb3duOiB7XG4gICAgICBydW46IGNvbW1hbmRzLnVubG9hZFxuICAgIH0sXG4gICAgbGlzdGVuZXJPcGVuRG9jdW1lbnQ6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMub3BlbkRvY3VtZW50XG4gICAgfSxcbiAgICBsaXN0ZW5lclNlbGVjdGlvbkNoYW5nZWQ6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMuc2VsZWN0aW9uQ2hhbmdlZFxuICAgIH0sXG4gICAgc3RhcnRVcDoge1xuICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIFwiU3RhcnR1cFwiOiBcIl9fX2xpc3RlbmVyT25TdGFydHVwX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiU2h1dGRvd25cIjogXCJfX19saXN0ZW5lck9uU2h1dGRvd25fcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJPcGVuRG9jdW1lbnRcIjogXCJfX19saXN0ZW5lck9wZW5Eb2N1bWVudF9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIlNlbGVjdGlvbkNoYW5nZWRcIjogXCJfX19saXN0ZW5lclNlbGVjdGlvbkNoYW5nZWRfcnVuX2hhbmRsZXJfXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uVG9nZ2xlQ29udGVudFN5bmM6IHtcbiAgICAgIG5hbWU6ICdUb2dnbGUgQ29udGVudFN5bmMgUGFuZWwnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IFsnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25Ub2dnbGVcbiAgICB9LFxuICAgIGFjdGlvblB1c2hDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1B1c2gnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IHAnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdXNoXG4gICAgfSxcbiAgICBhY3Rpb25QdWxsQ29udGVudFN5bmM6IHtcbiAgICAgIG5hbWU6ICdQdWxsJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCB1JyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHVsbFxuICAgIH0sXG4gICAgYWN0aW9uRGlzYWJsZUxheWVyczoge1xuICAgICAgbmFtZTogJ0Rpc2FibGUgU3luYyBvbiBTZWxlY3RlZCBMYXllcnMnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IG8nLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGVcbiAgICB9LFxuICAgIGFjdGlvbkVuYWJsZUxheWVyczoge1xuICAgICAgbmFtZTogJ0VuYWJsZSBTeW5jIG9uIFNlbGVjdGVkIExheWVycycsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgaScsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlXG4gICAgfVxuICB9XG59XG4iXX0=
