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
  loadFramework('ContentSync', 'ContentSync');
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
  version: '8.4.2-alpha',
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
    "version": "8.4.2-alpha",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25Ub2dnbGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvZnJhbWV3b3Jrcy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9pbmRleC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL29wZW5Eb2N1bWVudC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9zZWxlY3Rpb25DaGFuZ2VkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3VubG9hZC5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tBOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQU5aOzs7OztBQVFBLElBQUksR0FBSjtBQUNBLElBQUksTUFBSjs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIseUJBQVEsT0FBUjtBQUNBLFFBQU0seUJBQVUsUUFBaEI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSTtBQUNGLHdCQUFvQixVQUFwQixDQUErQixHQUEvQjtBQUNELEdBRkQsQ0FFRSxPQUFNLEtBQU4sRUFBWTtBQUNaLFFBQUksNkJBQUo7QUFDQSxRQUFJLEtBQUo7QUFDRDtBQUNGLEM7Ozs7Ozs7OztBQ2hCRDs7OztBQUNBOztJQUFZLGdCOzs7Ozs7QUFOWjs7Ozs7QUFRQSxJQUFJLEdBQUo7QUFDQSxJQUFJLE1BQUo7O2tCQUVlLFVB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RXZCLGdCQUFVLGNBRmE7QUFHdkIsV0FBSyxTQUFTO0FBSFMsS0F2QmpCO0FBNEJSLDJCQUF1QjtBQUNyQixZQUFNLE1BRGU7QUFFckIsZ0JBQVUsY0FGVztBQUdyQixXQUFLLFNBQVM7QUFITyxLQTVCZjtBQWlDUiwyQkFBdUI7QUFDckIsWUFBTSxNQURlO0FBRXJCLGdCQUFVLGNBRlc7QUFHckIsV0FBSyxTQUFTO0FBSE8sS0FqQ2Y7QUFzQ1IseUJBQXFCO0FBQ25CLFlBQU0saUNBRGE7QUFFbkIsZ0JBQVUsY0FGUztBQUduQixXQUFLLFNBQVM7QUFISyxLQXRDYjtBQTJDUix3QkFBb0I7QUFDbEIsWUFBTSxnQ0FEWTtBQUVsQixnQkFBVSxjQUZRO0FBR2xCLFdBQUssU0FBUztBQUhJO0FBM0NaO0FBOUI4QixDQUFuQyxDLENBVFAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBQdWxsXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25QdWxsKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblB1c2goZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVG9nZ2xlXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVG9nZ2xlXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZShkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUb2dnbGVcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblRvZ2dsZShkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpe1xuICBsb2FkRnJhbWV3b3JrKCdDb250ZW50U3luY1JlYWx0aW1lJywgJ0NvbnRlbnRTeW5jUmVhbHRpbWUnKTtcbiAgbG9hZEZyYW1ld29yaygnQ29udGVudFN5bmMnLCAnQ29udGVudFN5bmMnKTtcbn07XG5cbmZ1bmN0aW9uIGZyYW1ld29ya0RpcmVjdG9yeSgpe1xuICBsZXQgZGlyZWN0b3J5ID0gQ29udGV4dCgpLnNjcmlwdFBhdGguc3RyaW5nQnlEZWxldGluZ0xhc3RQYXRoQ29tcG9uZW50KCk7XG4gIHJldHVybiBkaXJlY3RvcnkgKyAnL2ZyYW1ld29ya3MnO1xufTtcblxuZnVuY3Rpb24gbG9hZEZyYW1ld29yayhmcmFtZXdvcmtOYW1lLCBmcmFtZXdvcmtDbGFzcykge1xuICBsZXQgZGlyZWN0b3J5ID0gZnJhbWV3b3JrRGlyZWN0b3J5KCk7XG4gIGlmICh0cnVlIHx8IE5TQ2xhc3NGcm9tU3RyaW5nKGZyYW1ld29ya0NsYXNzKSA9PSBudWxsKSB7XG4gICAgdmFyIG1vY2hhID0gTW9jaGEuc2hhcmVkUnVudGltZSgpO1xuICAgIGlmKG1vY2hhLmxvYWRGcmFtZXdvcmtXaXRoTmFtZV9pbkRpcmVjdG9yeShmcmFtZXdvcmtOYW1lLCBkaXJlY3RvcnkpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2coXCJFUlJPUiBMT0FESU5HIFwiICsgZnJhbWV3b3JrTmFtZSArIFwiIGluIFwiICsgZGlyZWN0b3J5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJpbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQuanMnXG5pbXBvcnQgdW5sb2FkIGZyb20gJy4vdW5sb2FkLmpzJ1xuXG5pbXBvcnQgb3BlbkRvY3VtZW50IGZyb20gJy4vb3BlbkRvY3VtZW50LmpzJ1xuaW1wb3J0IHNlbGVjdGlvbkNoYW5nZWQgZnJvbSAnLi9zZWxlY3Rpb25DaGFuZ2VkLmpzJztcblxuaW1wb3J0IGFjdGlvblRvZ2dsZSBmcm9tICcuL2FjdGlvblRvZ2dsZS5qcydcbmltcG9ydCBhY3Rpb25QdXNoIGZyb20gJy4vYWN0aW9uUHVzaC5qcydcbmltcG9ydCBhY3Rpb25QdWxsIGZyb20gJy4vYWN0aW9uUHVsbC5qcydcblxuaW1wb3J0IGFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZSBmcm9tICcuL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcydcbmltcG9ydCBhY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZSBmcm9tICcuL2FjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlLmpzJ1xuXG5leHBvcnQge1xuICBsb2FkLFxuICB1bmxvYWQsXG4gIG9wZW5Eb2N1bWVudCxcbiAgc2VsZWN0aW9uQ2hhbmdlZCxcbiAgYWN0aW9uVG9nZ2xlLFxuICBhY3Rpb25QdXNoLFxuICBhY3Rpb25QdWxsLFxuICBhY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUsXG4gIGFjdGlvblNlbGVjdGVkTGF5ZXJzRW5hYmxlXG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBjb3NjcmlwdC5zZXRTaG91bGRLZWVwQXJvdW5kKHRydWUpXG4gIENvbnRleHQoY29udGV4dClcbiAgbG9nZ2VyID0gbG9nO1xuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG5cbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmxvYWQoKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nZ2VyKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZ2dlcihlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmFjdGlvbkNvbnRleHQuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5vbk9wZW5Eb2N1bWVudChkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbiBpbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbiBpbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG4gXG4gdmFyIGRvYztcbiB2YXIgbG9nZ2VyO1xuIFxuIGV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gICBDb250ZXh0KGNvbnRleHQpXG4gICBkb2MgPSBDb250ZXh0KCkuYWN0aW9uQ29udGV4dC5kb2N1bWVudDtcbiAgIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gICB0cnkge1xuICAgICBDb250ZW50U3luY1JlYWx0aW1lLm9uU2VsZWN0aW9uQ2hhbmdlZChkb2MpO1xuICAgfSBjYXRjaChlcnJvcil7XG4gICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICAgbG9nKGVycm9yKTtcbiAgIH1cbiB9XG4gIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBjb250ZXh0ID0gQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBDb250ZW50U3luY1JlYWx0aW1lLnVubG9hZCgpO1xufVxuIiwiLyoqXG4gKiBDb250ZXh0XG4gKlxuICogUHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSB0byBzZXQgYW5kIGdldCB0aGUgY3VycmVudCBjb21tYW5kIGNvbnRleHQuXG4gKi9cblxuLy9zdG9yZSBjb250ZXh0XG5sZXQgY29udGV4dCA9IG51bGxcblxuLy9zZXQgYW5kIGdldCBjb250ZXh0IHZpYSB0aGUgc2FtZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5ld0NvbnRleHQpIHtcblxuICAvL3NldCBuZXcgY29udGV4dFxuICBpZiAobmV3Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBuZXdDb250ZXh0XG4gIH1cblxuICByZXR1cm4gY29udGV4dFxufVxuIiwiLyoqXG4gKiBQbHVnaW5cbiAqXG4gKiBEZWZpbmVzIHRoZSBwbHVnaW4gc3RydWN0dXJlIGFuZCBtZXRhZGF0YS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIGNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnXG5cbmV4cG9ydCBjb25zdCBTa2V0Y2hDb250ZW50U3luY0V4dGVuc2lvbiA9IHtcbiAgbmFtZTogJ0NvbnRlbnRTeW5jJyxcbiAgaWNvbjogJ3BsdWdpbl9sb2dvLnBuZycsXG4gIGRlc2NyaXB0aW9uOiAnU3luYyB5b3VyIGNvbnRlbnQgdG8gYW5kIGZyb20gR29vZ2xlIFNwcmVhZHNoZWV0cyBhbmQgTWljcm9zb2Z0IDM2NSBFeGNlbC4gQWJzdHJhY3QsIHZlcnNpb24sIGFuZCB0cmFuc2xhdGUgeW91ciBkZXNpZ24gY29udGVudC4nLFxuICBhdXRob3I6ICdTeW5jaWZ5JyxcbiAgd2Vic2l0ZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmlvJyxcbiAgaG9tZXBhZ2U6ICdodHRwczovL3d3dy5jb250ZW50c3luYy5pbycsXG4gIHZlcnNpb246ICc4LjQuMi1hbHBoYScsXG4gIGlkZW50aWZpZXI6ICdjb20uc3luY2lmeS5za2V0Y2guY29udGVudHN5bmMnLFxuICBhcHBjYXN0OiAnaHR0cHM6Ly9jYXN0LmFwcGNhc3RpZnkuY29tL2NvbnRlbnRzeW5jL2NvbnRlbnRzeW5jNi54bWwnLFxuICBjb21wYXRpYmxlVmVyc2lvbjogJzcxJyxcbiAgbWF4Q29tcGF0aWJsZVZlcnNpb246ICc3MScsXG4gIGJ1bmRsZVZlcnNpb246ICcxJyxcbiAgYnVuZGxlTmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgYXV0aG9yRW1haWw6ICdzdXBwb3J0QGNvbnRlbnRzeW5jLmlvJyxcbiAgcmVwb3NpdG9yeToge1xuICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb250ZW50c3luYy9Ta2V0Y2hDb250ZW50U3luYydcbiAgfSxcbiAgbWVudTp7XG4gICAgXCJ0aXRsZVwiOlwiQ29udGVudFN5bmNcIixcbiAgICBcIml0ZW1zXCI6W1xuICAgICAgXCJhY3Rpb25QdXNoQ29udGVudFN5bmNcIixcbiAgICAgIFwiYWN0aW9uUHVsbENvbnRlbnRTeW5jXCIsXG4gICAgICBcIi1cIixcbiAgICAgIFwiYWN0aW9uRGlzYWJsZUxheWVyc1wiLFxuICAgICAgXCJhY3Rpb25FbmFibGVMYXllcnNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25Ub2dnbGVDb250ZW50U3luY1wiXG4gICAgXVxuICB9LFxuICBjb21tYW5kczoge1xuICAgIGxpc3RlbmVyT25TdGFydHVwOiB7XG4gICAgICBydW46IGNvbW1hbmRzLmxvYWRcbiAgICB9LFxuICAgIGxpc3RlbmVyT25TaHV0ZG93bjoge1xuICAgICAgcnVuOiBjb21tYW5kcy51bmxvYWRcbiAgICB9LFxuICAgIGxpc3RlbmVyT3BlbkRvY3VtZW50OiB7XG4gICAgICBydW46IGNvbW1hbmRzLm9wZW5Eb2N1bWVudFxuICAgIH0sXG4gICAgbGlzdGVuZXJTZWxlY3Rpb25DaGFuZ2VkOiB7XG4gICAgICBydW46IGNvbW1hbmRzLnNlbGVjdGlvbkNoYW5nZWRcbiAgICB9LFxuICAgIHN0YXJ0VXA6IHtcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBcIlN0YXJ0dXBcIjogXCJfX19saXN0ZW5lck9uU3RhcnR1cF9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIlNodXRkb3duXCI6IFwiX19fbGlzdGVuZXJPblNodXRkb3duX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiT3BlbkRvY3VtZW50XCI6IFwiX19fbGlzdGVuZXJPcGVuRG9jdW1lbnRfcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTZWxlY3Rpb25DaGFuZ2VkXCI6IFwiX19fbGlzdGVuZXJTZWxlY3Rpb25DaGFuZ2VkX3J1bl9oYW5kbGVyX1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvblRvZ2dsZUNvbnRlbnRTeW5jOiB7XG4gICAgICBuYW1lOiAnVG9nZ2xlIENvbnRlbnRTeW5jIFBhbmVsJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCBbJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uVG9nZ2xlXG4gICAgfSxcbiAgICBhY3Rpb25QdXNoQ29udGVudFN5bmM6IHtcbiAgICAgIG5hbWU6ICdQdXNoJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCBwJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHVzaFxuICAgIH0sXG4gICAgYWN0aW9uUHVsbENvbnRlbnRTeW5jOiB7XG4gICAgICBuYW1lOiAnUHVsbCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgdScsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblB1bGxcbiAgICB9LFxuICAgIGFjdGlvbkRpc2FibGVMYXllcnM6IHtcbiAgICAgIG5hbWU6ICdEaXNhYmxlIFN5bmMgb24gU2VsZWN0ZWQgTGF5ZXJzJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCBvJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlXG4gICAgfSxcbiAgICBhY3Rpb25FbmFibGVMYXllcnM6IHtcbiAgICAgIG5hbWU6ICdFbmFibGUgU3luYyBvbiBTZWxlY3RlZCBMYXllcnMnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IGknLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZVxuICAgIH1cbiAgfVxufVxuIl19
