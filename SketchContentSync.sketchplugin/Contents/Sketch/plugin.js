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
  version: '4.2.5',
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
    "version": "4.2.5",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHJlZmVyZW5jZXMuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblRvZ2dsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9mcmFtZXdvcmtzLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2luZGV4LmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2xvYWQuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvdW5sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbnRleHQuanMiLCJidWlsZC1zcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDS0E7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O0FBUUEsSUFBSSxHQUFKO0FBQ0EsSUFBSSxNQUFKOztrQkFFZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0EsUUFBTSx5QkFBVSxRQUFoQjtBQUNBLG1CQUFpQix3QkFBakI7QUFDQSxNQUFJO0FBQ0Ysd0JBQW9CLGlCQUFwQixDQUFzQyxHQUF0QztBQUNELEdBRkQsQ0FFRSxPQUFNLEtBQU4sRUFBWTtBQUNaLFFBQUksNkJBQUo7QUFDQSxRQUFJLEtBQUo7QUFDRDtBQUNGLEM7Ozs7Ozs7OztBQ2hCRDs7OztBQUNBOztJQUFZLGdCOzs7Ozs7QUFOWjs7Ozs7QUFRQSxJQUFJLEdBQUo7QUFDQSxJQUFJLE1BQUo7O2tCQUVlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxRQUFNLHlCQUFVLFFBQWhCO0FBQ0EsbUJBQWlCLHdCQUFqQjtBQUNBLE1BQUk7QUFDRix3QkFBb0IsVUFBcEIsQ0FBK0IsR0FBL0I7QUFDRCxHQUZELENBRUUsT0FBTSxLQUFOLEVB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ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uUHJlZmVyZW5jZXMoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVsbFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uUHVsbChkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25QdXNoKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFRvZ2dsZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uVG9nZ2xlKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCl7XG4gIGxvYWRGcmFtZXdvcmsoJ0NvbnRlbnRTeW5jUmVhbHRpbWUnLCAnQ29udGVudFN5bmNSZWFsdGltZScpO1xufTtcblxuZnVuY3Rpb24gZnJhbWV3b3JrRGlyZWN0b3J5KCl7XG4gIGxldCBkaXJlY3RvcnkgPSBDb250ZXh0KCkuc2NyaXB0UGF0aC5zdHJpbmdCeURlbGV0aW5nTGFzdFBhdGhDb21wb25lbnQoKTtcbiAgcmV0dXJuIGRpcmVjdG9yeSArICcvZnJhbWV3b3Jrcyc7XG59O1xuXG5mdW5jdGlvbiBsb2FkRnJhbWV3b3JrKGZyYW1ld29ya05hbWUsIGZyYW1ld29ya0NsYXNzKSB7XG4gIGxldCBkaXJlY3RvcnkgPSBmcmFtZXdvcmtEaXJlY3RvcnkoKTtcbiAgaWYgKHRydWUgfHwgTlNDbGFzc0Zyb21TdHJpbmcoZnJhbWV3b3JrQ2xhc3MpID09IG51bGwpIHtcbiAgICB2YXIgbW9jaGEgPSBNb2NoYS5zaGFyZWRSdW50aW1lKCk7XG4gICAgaWYobW9jaGEubG9hZEZyYW1ld29ya1dpdGhOYW1lX2luRGlyZWN0b3J5KGZyYW1ld29ya05hbWUsIGRpcmVjdG9yeSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZyhcIkVSUk9SIExPQURJTkcgXCIgKyBmcmFtZXdvcmtOYW1lICsgXCIgaW4gXCIgKyBkaXJlY3RvcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsImltcG9ydCBsb2FkIGZyb20gJy4vbG9hZC5qcydcbmltcG9ydCB1bmxvYWQgZnJvbSAnLi91bmxvYWQuanMnXG5pbXBvcnQgYWN0aW9uVG9nZ2xlIGZyb20gJy4vYWN0aW9uVG9nZ2xlLmpzJ1xuaW1wb3J0IGFjdGlvblB1c2ggZnJvbSAnLi9hY3Rpb25QdXNoLmpzJ1xuaW1wb3J0IGFjdGlvblB1bGwgZnJvbSAnLi9hY3Rpb25QdWxsLmpzJ1xuaW1wb3J0IGFjdGlvblByZWZlcmVuY2VzIGZyb20gJy4vYWN0aW9uUHJlZmVyZW5jZXMuanMnXG5cbmV4cG9ydCB7XG4gIGxvYWQsXG4gIHVubG9hZCxcbiAgYWN0aW9uVG9nZ2xlLFxuICBhY3Rpb25QdXNoLFxuICBhY3Rpb25QdWxsLFxuICBhY3Rpb25QcmVmZXJlbmNlc1xufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgY29zY3JpcHQuc2V0U2hvdWxkS2VlcEFyb3VuZCh0cnVlKVxuICBDb250ZXh0KGNvbnRleHQpXG4gIGxvZ2dlciA9IGxvZztcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5sb2FkKCk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZ2dlcihcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2dnZXIoZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQgPSBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIENvbnRlbnRTeW5jUmVhbHRpbWUudW5sb2FkKCk7XG59XG4iLCIvKipcbiAqIENvbnRleHRcbiAqXG4gKiBQcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHNldCBhbmQgZ2V0IHRoZSBjdXJyZW50IGNvbW1hbmQgY29udGV4dC5cbiAqL1xuXG4vL3N0b3JlIGNvbnRleHRcbmxldCBjb250ZXh0ID0gbnVsbFxuXG4vL3NldCBhbmQgZ2V0IGNvbnRleHQgdmlhIHRoZSBzYW1lIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmV3Q29udGV4dCkge1xuXG4gIC8vc2V0IG5ldyBjb250ZXh0XG4gIGlmIChuZXdDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG5ld0NvbnRleHRcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0XG59XG4iLCIvKipcbiAqIFBsdWdpblxuICpcbiAqIERlZmluZXMgdGhlIHBsdWdpbiBzdHJ1Y3R1cmUgYW5kIG1ldGFkYXRhLlxuICovXG5cblxuaW1wb3J0ICogYXMgY29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcblxuZXhwb3J0IGNvbnN0IFNrZXRjaENvbnRlbnRTeW5jRXh0ZW5zaW9uID0ge1xuICBuYW1lOiAnQ29udGVudFN5bmMgZm9yIFNrZXRjaCcsXG4gIGRlc2NyaXB0aW9uOiAnU3luYyB5b3VyIGNvbnRlbnQgdG8gYW5kIGZyb20gR29vZ2xlIFNwcmVhZHNoZWV0cy4gQWJzdHJhY3QsIHZlcnNpb24sIGFuZCB0cmFuc2xhdGUgeW91ciBkZXNpZ24gY29udGVudC4nLFxuICBhdXRob3I6ICdTeW5jaWZ5JyxcbiAgd2Vic2l0ZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmlvJyxcbiAgdmVyc2lvbjogJzQuMi41JyxcbiAgaWRlbnRpZmllcjogJ2NvbS5zeW5jaWZ5LnNrZXRjaC5jb250ZW50c3luYycsXG4gIGFwcGNhc3Q6ICdodHRwczovL2Nhc3QuYXBwY2FzdGlmeS5jb20vY29udGVudHN5bmMvY29udGVudHN5bmMueG1sJyxcbiAgY29tcGF0aWJsZVZlcnNpb246ICczLjcnLFxuICBidW5kbGVWZXJzaW9uOiAnMScsXG4gIGJ1bmRsZU5hbWU6ICdTa2V0Y2hDb250ZW50U3luYycsXG4gIGF1dGhvckVtYWlsOiAnc3VwcG9ydEBjb250ZW50c3luYy5pbycsXG4gIHJlcG9zaXRvcnk6IHtcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY29udGVudHN5bmMvU2tldGNoQ29udGVudFN5bmMnXG4gIH0sXG4gIG1lbnU6e1xuICAgIFwidGl0bGVcIjpcIlRvZ2dsZSBDb250ZW50U3luY1wiLFxuICAgIFwiaXRlbXNcIjpbXG4gICAgICBcImFjdGlvblRvZ2dsZUNvbnRlbnRTeW5jXCIsXG4gICAgICBcIi1cIixcbiAgICAgIFwiYWN0aW9uUHJlZmVyZW5jZXNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25QdXNoQ29udGVudFN5bmNcIixcbiAgICAgIFwiYWN0aW9uUHVsbENvbnRlbnRTeW5jXCJcbiAgICBdXG4gIH0sXG4gIGNvbW1hbmRzOiB7XG4gICAgbGlzdGVuZXJPblN0YXJ0dXA6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMubG9hZFxuICAgIH0sXG4gICAgbGlzdGVuZXJPblNodXRkb3duOiB7XG4gICAgICBydW46IGNvbW1hbmRzLnVubG9hZFxuICAgIH0sXG4gICAgc3RhcnRVcDoge1xuICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIFwiU3RhcnR1cFwiOiBcIl9fX2xpc3RlbmVyT25TdGFydHVwX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiU2h1dGRvd25cIjogXCJfX19saXN0ZW5lck9uU2h1dGRvd25fcnVuX2hhbmRsZXJfXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uVG9nZ2xlQ29udGVudFN5bmM6IHtcbiAgICAgIG5hbWU6ICdUb2dnbGUgQ29udGVudFN5bmMgUGFuZWwnLFxuICAgICAgc2hvcnRjdXQ6ICdjbWQgWycsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblRvZ2dsZVxuICAgIH0sXG4gICAgYWN0aW9uUHVzaENvbnRlbnRTeW5jOiB7XG4gICAgICBuYW1lOiAnUHVzaCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgcCcsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblB1c2hcbiAgICB9LFxuICAgIGFjdGlvblB1bGxDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1B1bGwnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IHUnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdWxsXG4gICAgfSxcbiAgICBhY3Rpb25QcmVmZXJlbmNlczoge1xuICAgICAgbmFtZTogJ1ByZWZlcmVuY2VzJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHJlZmVyZW5jZXNcbiAgICB9XG4gIH1cbn1cbiJdfQ==
