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

},{"../context":9,"./frameworks":5}],2:[function(require,module,exports){
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

},{"../context":9,"./frameworks":5}],3:[function(require,module,exports){
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

},{"../context":9,"./frameworks":5}],4:[function(require,module,exports){
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

},{"../context":9,"./frameworks":5}],5:[function(require,module,exports){
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

},{"../context":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionPreferences = exports.actionPull = exports.actionPush = exports.actionToggle = exports.unload = exports.load = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.load = _load2.default;
exports.unload = _unload2.default;
exports.actionToggle = _actionToggle2.default;
exports.actionPush = _actionPush2.default;
exports.actionPull = _actionPull2.default;
exports.actionPreferences = _actionPreferences2.default;

},{"./actionPreferences.js":1,"./actionPull.js":2,"./actionPush.js":3,"./actionToggle.js":4,"./load.js":7,"./unload.js":8}],7:[function(require,module,exports){
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

},{"../context":9,"./frameworks":5}],8:[function(require,module,exports){
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

},{"../context":9,"./frameworks":5}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
  version: '5',
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
    "title": "Toggle ContentSync",
    "items": ["actionToggleContentSync", "-", "actionPreferences", "-", "actionPushContentSync", "actionPullContentSync"]
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
      shortcut: 'cmd [',
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
      name: 'Preferences',
      run: commands.actionPreferences
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

/*__$begin_of_manifest_
{
    "name": "ContentSync for Sketch",
    "description": "Sync your content to and from Google Spreadsheets. Abstract, version, and translate your design content.",
    "author": "Syncify",
    "website": "https://www.contentsync.io",
    "homepage": "https://www.contentsync.io",
    "version": "5",
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
        "title": "Toggle ContentSync",
        "items": [
            "actionToggleContentSync",
            "-",
            "actionPreferences",
            "-",
            "actionPushContentSync",
            "actionPullContentSync"
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
            "shortcut": "cmd ["
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
            "name": "Preferences"
        }
    ],
    "disableCocoaScriptPreprocessor": true
}__$end_of_manifest_
*/

},{"./commands":6}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHJlZmVyZW5jZXMuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblRvZ2dsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9mcmFtZXdvcmtzLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2luZGV4LmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2xvYWQuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvdW5sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbnRleHQuanMiLCJidWlsZC1zcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDS0E7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O0FBUUEsSUFBSSxHQUFKO0FBQ0EsSUFBSSxNQUFKOztrQkFFZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0EsUUFBTSx5QkFBVSxRQUFoQjtBQUNBLG1CQUFpQix3QkFBakI7QUFDQSxNQUFJO0FBQ0Ysd0JBQW9CLGlCQUFwQixDQUFzQyxHQUF0QztBQUNELEdBRkQsQ0FFRSxPQUFNLEtBQU4sRUFBWTtBQUNaLFFBQUksNkJBQUo7QUFDQSxRQUFJLEtBQUo7QUFDRDtBQUNGLEM7Ozs7Ozs7OztBQ2hCRDs7OztBQUNBOztJQUFZLGdCOzs7Ozs7QUFOWjs7Ozs7QUFRQSxJQUFJLEdBQUo7QUFDQSxJQUFJLE1BQUo7O2tCQUVlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxRQUFNLHlCQUFVLFFBQWhCO0FBQ0EsbUJBQWlCLHdCQUFqQjtBQUNBLE1BQUk7QUFDRix3QkFBb0IsVUFBcEIsQ0FBK0IsR0FBL0I7QUFDRCxHQUZELENBRUUsT0FBTSxLQUFOLEVB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InNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25QcmVmZXJlbmNlcyhkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBQdWxsXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25QdWxsKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5kb2N1bWVudDtcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmFjdGlvblB1c2goZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVG9nZ2xlXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25Ub2dnbGUoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKXtcbiAgbG9hZEZyYW1ld29yaygnQ29udGVudFN5bmNSZWFsdGltZScsICdDb250ZW50U3luY1JlYWx0aW1lJyk7XG59O1xuXG5mdW5jdGlvbiBmcmFtZXdvcmtEaXJlY3RvcnkoKXtcbiAgbGV0IGRpcmVjdG9yeSA9IENvbnRleHQoKS5zY3JpcHRQYXRoLnN0cmluZ0J5RGVsZXRpbmdMYXN0UGF0aENvbXBvbmVudCgpO1xuICByZXR1cm4gZGlyZWN0b3J5ICsgJy9mcmFtZXdvcmtzJztcbn07XG5cbmZ1bmN0aW9uIGxvYWRGcmFtZXdvcmsoZnJhbWV3b3JrTmFtZSwgZnJhbWV3b3JrQ2xhc3MpIHtcbiAgbGV0IGRpcmVjdG9yeSA9IGZyYW1ld29ya0RpcmVjdG9yeSgpO1xuICBpZiAodHJ1ZSB8fCBOU0NsYXNzRnJvbVN0cmluZyhmcmFtZXdvcmtDbGFzcykgPT0gbnVsbCkge1xuICAgIHZhciBtb2NoYSA9IE1vY2hhLnNoYXJlZFJ1bnRpbWUoKTtcbiAgICBpZihtb2NoYS5sb2FkRnJhbWV3b3JrV2l0aE5hbWVfaW5EaXJlY3RvcnkoZnJhbWV3b3JrTmFtZSwgZGlyZWN0b3J5KSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nKFwiRVJST1IgTE9BRElORyBcIiArIGZyYW1ld29ya05hbWUgKyBcIiBpbiBcIiArIGRpcmVjdG9yeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkLmpzJ1xuaW1wb3J0IHVubG9hZCBmcm9tICcuL3VubG9hZC5qcydcbmltcG9ydCBhY3Rpb25Ub2dnbGUgZnJvbSAnLi9hY3Rpb25Ub2dnbGUuanMnXG5pbXBvcnQgYWN0aW9uUHVzaCBmcm9tICcuL2FjdGlvblB1c2guanMnXG5pbXBvcnQgYWN0aW9uUHVsbCBmcm9tICcuL2FjdGlvblB1bGwuanMnXG5pbXBvcnQgYWN0aW9uUHJlZmVyZW5jZXMgZnJvbSAnLi9hY3Rpb25QcmVmZXJlbmNlcy5qcydcblxuZXhwb3J0IHtcbiAgbG9hZCxcbiAgdW5sb2FkLFxuICBhY3Rpb25Ub2dnbGUsXG4gIGFjdGlvblB1c2gsXG4gIGFjdGlvblB1bGwsXG4gIGFjdGlvblByZWZlcmVuY2VzXG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBjb3NjcmlwdC5zZXRTaG91bGRLZWVwQXJvdW5kKHRydWUpXG4gIENvbnRleHQoY29udGV4dClcbiAgbG9nZ2VyID0gbG9nO1xuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG5cbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgdHJ5IHtcbiAgICBDb250ZW50U3luY1JlYWx0aW1lLmxvYWQoKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nZ2VyKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZ2dlcihlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgY29udGV4dCA9IENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgQ29udGVudFN5bmNSZWFsdGltZS51bmxvYWQoKTtcbn1cbiIsIi8qKlxuICogQ29udGV4dFxuICpcbiAqIFByb3ZpZGVzIGEgY29udmVuaWVudCB3YXkgdG8gc2V0IGFuZCBnZXQgdGhlIGN1cnJlbnQgY29tbWFuZCBjb250ZXh0LlxuICovXG5cbi8vc3RvcmUgY29udGV4dFxubGV0IGNvbnRleHQgPSBudWxsXG5cbi8vc2V0IGFuZCBnZXQgY29udGV4dCB2aWEgdGhlIHNhbWUgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuZXdDb250ZXh0KSB7XG5cbiAgLy9zZXQgbmV3IGNvbnRleHRcbiAgaWYgKG5ld0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gbmV3Q29udGV4dFxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cbiIsIi8qKlxuICogUGx1Z2luXG4gKlxuICogRGVmaW5lcyB0aGUgcGx1Z2luIHN0cnVjdHVyZSBhbmQgbWV0YWRhdGEuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBjb21tYW5kcyBmcm9tICcuL2NvbW1hbmRzJ1xuXG5leHBvcnQgY29uc3QgU2tldGNoQ29udGVudFN5bmNFeHRlbnNpb24gPSB7XG4gIG5hbWU6ICdDb250ZW50U3luYyBmb3IgU2tldGNoJyxcbiAgZGVzY3JpcHRpb246ICdTeW5jIHlvdXIgY29udGVudCB0byBhbmQgZnJvbSBHb29nbGUgU3ByZWFkc2hlZXRzLiBBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LicsXG4gIGF1dGhvcjogJ1N5bmNpZnknLFxuICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuY29udGVudHN5bmMuaW8nLFxuICBob21lcGFnZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmlvJyxcbiAgdmVyc2lvbjogJzUnLFxuICBpZGVudGlmaWVyOiAnY29tLnN5bmNpZnkuc2tldGNoLmNvbnRlbnRzeW5jJyxcbiAgYXBwY2FzdDogJ2h0dHBzOi8vY2FzdC5hcHBjYXN0aWZ5LmNvbS9jb250ZW50c3luYy9jb250ZW50c3luYy54bWwnLFxuICBjb21wYXRpYmxlVmVyc2lvbjogJzMuNycsXG4gIGJ1bmRsZVZlcnNpb246ICcxJyxcbiAgYnVuZGxlTmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgYXV0aG9yRW1haWw6ICdzdXBwb3J0QGNvbnRlbnRzeW5jLmlvJyxcbiAgcmVwb3NpdG9yeToge1xuICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb250ZW50c3luYy9Ta2V0Y2hDb250ZW50U3luYydcbiAgfSxcbiAgbWVudTp7XG4gICAgXCJ0aXRsZVwiOlwiVG9nZ2xlIENvbnRlbnRTeW5jXCIsXG4gICAgXCJpdGVtc1wiOltcbiAgICAgIFwiYWN0aW9uVG9nZ2xlQ29udGVudFN5bmNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25QcmVmZXJlbmNlc1wiLFxuICAgICAgXCItXCIsXG4gICAgICBcImFjdGlvblB1c2hDb250ZW50U3luY1wiLFxuICAgICAgXCJhY3Rpb25QdWxsQ29udGVudFN5bmNcIlxuICAgIF1cbiAgfSxcbiAgY29tbWFuZHM6IHtcbiAgICBsaXN0ZW5lck9uU3RhcnR1cDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5sb2FkXG4gICAgfSxcbiAgICBsaXN0ZW5lck9uU2h1dGRvd246IHtcbiAgICAgIHJ1bjogY29tbWFuZHMudW5sb2FkXG4gICAgfSxcbiAgICBzdGFydFVwOiB7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgXCJTdGFydHVwXCI6IFwiX19fbGlzdGVuZXJPblN0YXJ0dXBfcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTaHV0ZG93blwiOiBcIl9fX2xpc3RlbmVyT25TaHV0ZG93bl9ydW5faGFuZGxlcl9cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25Ub2dnbGVDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1RvZ2dsZSBDb250ZW50U3luYyBQYW5lbCcsXG4gICAgICBzaG9ydGN1dDogJ2NtZCBbJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uVG9nZ2xlXG4gICAgfSxcbiAgICBhY3Rpb25QdXNoQ29udGVudFN5bmM6IHtcbiAgICAgIG5hbWU6ICdQdXNoJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCBwJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHVzaFxuICAgIH0sXG4gICAgYWN0aW9uUHVsbENvbnRlbnRTeW5jOiB7XG4gICAgICBuYW1lOiAnUHVsbCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgdScsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblB1bGxcbiAgICB9LFxuICAgIGFjdGlvblByZWZlcmVuY2VzOiB7XG4gICAgICBuYW1lOiAnUHJlZmVyZW5jZXMnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QcmVmZXJlbmNlc1xuICAgIH1cbiAgfVxufVxuIl19
