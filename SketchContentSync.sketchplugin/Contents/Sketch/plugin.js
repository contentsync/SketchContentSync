var __globals = this;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _framework_manager = require('../library/framework_manager');

var FrameworkManager = _interopRequireWildcard(_framework_manager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.actionPull();
  log(response);
};

},{"../context":7,"../library/framework_manager":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _framework_manager = require('../library/framework_manager');

var FrameworkManager = _interopRequireWildcard(_framework_manager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.actionPush();
  log(response);
};

},{"../context":7,"../library/framework_manager":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionPull = exports.actionPush = exports.toggleContentSync = exports.unloadContentSync = exports.loadContentSync = undefined;

var _loadContentSync = require('./loadContentSync.js');

var _loadContentSync2 = _interopRequireDefault(_loadContentSync);

var _unloadContentSync = require('./unloadContentSync.js');

var _unloadContentSync2 = _interopRequireDefault(_unloadContentSync);

var _toggleContentSync = require('./toggleContentSync.js');

var _toggleContentSync2 = _interopRequireDefault(_toggleContentSync);

var _actionPush = require('./actionPush.js');

var _actionPush2 = _interopRequireDefault(_actionPush);

var _actionPull = require('./actionPull.js');

var _actionPull2 = _interopRequireDefault(_actionPull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.loadContentSync = _loadContentSync2.default;
exports.unloadContentSync = _unloadContentSync2.default;
exports.toggleContentSync = _toggleContentSync2.default;
exports.actionPush = _actionPush2.default;
exports.actionPull = _actionPull2.default;

},{"./actionPull.js":1,"./actionPush.js":2,"./loadContentSync.js":4,"./toggleContentSync.js":5,"./unloadContentSync.js":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _framework_manager = require('../library/framework_manager');

var FrameworkManager = _interopRequireWildcard(_framework_manager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.loadContentSync();
  log(response);
};

},{"../context":7,"../library/framework_manager":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _framework_manager = require('../library/framework_manager');

var FrameworkManager = _interopRequireWildcard(_framework_manager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.toggleContentSync();
  log(response);
};

},{"../context":7,"../library/framework_manager":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

var _framework_manager = require('../library/framework_manager');

var FrameworkManager = _interopRequireWildcard(_framework_manager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Push
 *
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.unloadContentSync();
  log(response);
};

},{"../context":7,"../library/framework_manager":8}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContentSyncFramework = loadContentSyncFramework;

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadContentSyncFramework() {
  loadFramework('ContentSync', 'ContentSyncPanelManager');
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

},{"../context":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchContentSyncExtension = undefined;

var _commands = require('./commands');

var commands = _interopRequireWildcard(_commands);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SketchContentSyncExtension = exports.SketchContentSyncExtension = {
  name: 'SketchContentSync',
  description: 'Abstract, version, and translate your design content. Sync to Google Documents and more.',
  author: 'Syncify',
  website: 'https://www.contentsync.com',
  version: '3.1.0',
  identifier: 'com.syncify.sketch.contentsync',
  appcast: 'https://cast.appcastify.com/contentsync/contentsync.xml',
  compatibleVersion: '3.7',
  bundleVersion: '1',
  bundleName: 'SketchContentSync',
  authorEmail: 'support@contentsync.io',
  repository: {
    url: 'https://github.com/contentsync/SketchContentSync.sketchplugin'
  },
  menu: {
    "title": "Toggle ContentSync",
    "items": ["commandTogglePanels", "-", "actionPush", "actionPull"]
  },
  commands: {
    commandTogglePanels: {
      name: 'Toggle ContentSync',
      shortcut: 'cmd [',
      run: commands.toggleContentSync
    },
    actionPush: {
      run: commands.actionPush,
      description: "Push version to ContentSync",
      icon: "icons/icon_action_push.png",
      name: "Push ContentSync Version"
    },
    actionPull: {
      run: commands.actionPull,
      description: "Pull version from ContentSync",
      icon: "icons/icon_action_pull.png",
      name: "Pull ContentSync Version"
    },
    listenerOnStartup: {
      run: commands.loadContentSync
    },
    listenerOnShutdown: {
      run: commands.unloadContentSync
    },
    startUp: {
      handlers: {
        actions: {
          "Startup": "___listenerOnStartup_run_handler_",
          "Shutdown": "___listenerOnShutdown_run_handler_"
        }
      }
    }
  }
}; /**
    * Plugin
    *
    * Defines the plugin structure and metadata.
    */

__globals.___commandTogglePanels_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['commandTogglePanels'].run(context, params);
};

__globals.___actionPush_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionPush'].run(context, params);
};

__globals.___actionPull_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['actionPull'].run(context, params);
};

__globals.___listenerOnStartup_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOnStartup'].run(context, params);
};

__globals.___listenerOnShutdown_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOnShutdown'].run(context, params);
};

__globals.____run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['undefined'].run(context, params);
};

/*__$begin_of_manifest_
{
    "name": "SketchContentSync",
    "description": "Abstract, version, and translate your design content. Sync to Google Documents and more.",
    "author": "Syncify",
    "website": "https://www.contentsync.com",
    "version": "3.1.0",
    "identifier": "com.syncify.sketch.contentsync",
    "appcast": "https://cast.appcastify.com/contentsync/contentsync.xml",
    "compatibleVersion": "3.7",
    "bundleVersion": "1",
    "bundleName": "SketchContentSync",
    "authorEmail": "support@contentsync.io",
    "repository": {
        "url": "https://github.com/contentsync/SketchContentSync.sketchplugin"
    },
    "menu": {
        "title": "Toggle ContentSync",
        "items": [
            "commandTogglePanels",
            "-",
            "actionPush",
            "actionPull"
        ]
    },
    "commands": [
        {
            "script": "plugin.js",
            "name": "Toggle ContentSync",
            "shortcut": "cmd [",
            "identifier": "commandTogglePanels",
            "handler": "___commandTogglePanels_run_handler_"
        },
        {
            "script": "plugin.js",
            "description": "Push version to ContentSync",
            "icon": "icons/icon_action_push.png",
            "name": "Push ContentSync Version",
            "identifier": "actionPush",
            "handler": "___actionPush_run_handler_"
        },
        {
            "script": "plugin.js",
            "description": "Pull version from ContentSync",
            "icon": "icons/icon_action_pull.png",
            "name": "Pull ContentSync Version",
            "identifier": "actionPull",
            "handler": "___actionPull_run_handler_"
        },
        {
            "script": "plugin.js",
            "identifier": "listenerOnStartup",
            "handler": "___listenerOnStartup_run_handler_"
        },
        {
            "script": "plugin.js",
            "identifier": "listenerOnShutdown",
            "handler": "___listenerOnShutdown_run_handler_"
        },
        {
            "script": "plugin.js",
            "handlers": {
                "actions": {
                    "Startup": "___listenerOnStartup_run_handler_",
                    "Shutdown": "___listenerOnShutdown_run_handler_"
                }
            }
        }
    ],
    "disableCocoaScriptPreprocessor": true
}__$end_of_manifest_
*/

},{"./commands":3}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2luZGV4LmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2xvYWRDb250ZW50U3luYy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy90b2dnbGVDb250ZW50U3luYy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy91bmxvYWRDb250ZW50U3luYy5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXIuanMiLCJidWlsZC1zcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDS0E7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O2tCQVFlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixLQUF4QixHQUFnQyxJQUFoQyxFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssVUFBTCxFQUFmO0FBQ0EsTUFBSSxRQUFKO0FBQ0QsQzs7Ozs7Ozs7O0FDVEQ7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O2tCQVFlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixLQUF4QixHQUFnQyxJQUFoQyxFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssVUFBTCxFQUFmO0FBQ0EsTUFBSSxRQUFKO0FBQ0QsQzs7Ozs7Ozs7OztBQ2REOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztRQUdFLGU7UUFDQSxpQjtRQUNBLGlCO1FBRUEsVTtRQUNBLFU7Ozs7Ozs7OztBQ1JGOzs7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QUssU0FBUyxVQURKO0FBRVYsbUJBQWEsK0JBRkg7QUFHVixZQUFPLDRCQUhHO0FBSVYsWUFBTztBQUpHLEtBWko7QUFrQlIsdUJBQW1CO0FBQ2pCLFdBQUssU0FBUztBQURHLEtBbEJYO0FBcUJSLHdCQUFvQjtBQUNsQixXQUFLLFNBQVM7QUFESSxLQXJCWjtBQXdCUixhQUFTO0FBQ1AsZ0JBQVU7QUFDUixpQkFBUztBQUNQLHFCQUFXLG1DQURKO0FBRVAsc0JBQVk7QUFGTDtBQUREO0FBREg7QUF4QkQ7QUF4QjhCLENBQW5DLEMsQ0FUUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4uYWN0aW9uUHVsbCgpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLmFjdGlvblB1c2goKTtcbiAgbG9nKHJlc3BvbnNlKTtcbn1cbiIsImltcG9ydCBsb2FkQ29udGVudFN5bmMgZnJvbSAnLi9sb2FkQ29udGVudFN5bmMuanMnXG5pbXBvcnQgdW5sb2FkQ29udGVudFN5bmMgZnJvbSAnLi91bmxvYWRDb250ZW50U3luYy5qcydcbmltcG9ydCB0b2dnbGVDb250ZW50U3luYyBmcm9tICcuL3RvZ2dsZUNvbnRlbnRTeW5jLmpzJ1xuXG5pbXBvcnQgYWN0aW9uUHVzaCBmcm9tICcuL2FjdGlvblB1c2guanMnXG5pbXBvcnQgYWN0aW9uUHVsbCBmcm9tICcuL2FjdGlvblB1bGwuanMnXG5cbmV4cG9ydCB7XG4gIGxvYWRDb250ZW50U3luYyxcbiAgdW5sb2FkQ29udGVudFN5bmMsXG4gIHRvZ2dsZUNvbnRlbnRTeW5jLFxuXG4gIGFjdGlvblB1c2gsXG4gIGFjdGlvblB1bGxcbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5hbGxvYygpLmluaXQoKTtcbiAgbGV0IHJlc3BvbnNlID0gbWFpbi5sb2FkQ29udGVudFN5bmMoKTtcbiAgbG9nKHJlc3BvbnNlKTtcbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5hbGxvYygpLmluaXQoKTtcbiAgbGV0IHJlc3BvbnNlID0gbWFpbi50b2dnbGVDb250ZW50U3luYygpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLnVubG9hZENvbnRlbnRTeW5jKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCIvKipcbiAqIENvbnRleHRcbiAqXG4gKiBQcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHNldCBhbmQgZ2V0IHRoZSBjdXJyZW50IGNvbW1hbmQgY29udGV4dC5cbiAqL1xuXG4vL3N0b3JlIGNvbnRleHRcbmxldCBjb250ZXh0ID0gbnVsbFxuXG4vL3NldCBhbmQgZ2V0IGNvbnRleHQgdmlhIHRoZSBzYW1lIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmV3Q29udGV4dCkge1xuXG4gIC8vc2V0IG5ldyBjb250ZXh0XG4gIGlmIChuZXdDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG5ld0NvbnRleHRcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0XG59XG4iLCJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCl7XG4gIGxvYWRGcmFtZXdvcmsoJ0NvbnRlbnRTeW5jJywgJ0NvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyJyk7XG59O1xuXG5mdW5jdGlvbiBmcmFtZXdvcmtEaXJlY3RvcnkoKXtcbiAgbGV0IGRpcmVjdG9yeSA9IENvbnRleHQoKS5zY3JpcHRQYXRoLnN0cmluZ0J5RGVsZXRpbmdMYXN0UGF0aENvbXBvbmVudCgpO1xuICByZXR1cm4gZGlyZWN0b3J5ICsgJy9mcmFtZXdvcmtzJztcbn07XG5cbmZ1bmN0aW9uIGxvYWRGcmFtZXdvcmsoZnJhbWV3b3JrTmFtZSwgZnJhbWV3b3JrQ2xhc3MpIHtcbiAgbGV0IGRpcmVjdG9yeSA9IGZyYW1ld29ya0RpcmVjdG9yeSgpO1xuICBpZiAodHJ1ZSB8fCBOU0NsYXNzRnJvbVN0cmluZyhmcmFtZXdvcmtDbGFzcykgPT0gbnVsbCkge1xuICAgIHZhciBtb2NoYSA9IE1vY2hhLnNoYXJlZFJ1bnRpbWUoKTtcbiAgICBpZihtb2NoYS5sb2FkRnJhbWV3b3JrV2l0aE5hbWVfaW5EaXJlY3RvcnkoZnJhbWV3b3JrTmFtZSwgZGlyZWN0b3J5KSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nKFwiRVJST1IgTE9BRElORyBcIiArIGZyYW1ld29ya05hbWUgKyBcIiBpbiBcIiArIGRpcmVjdG9yeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLyoqXG4gKiBQbHVnaW5cbiAqXG4gKiBEZWZpbmVzIHRoZSBwbHVnaW4gc3RydWN0dXJlIGFuZCBtZXRhZGF0YS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIGNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnXG5cbmV4cG9ydCBjb25zdCBTa2V0Y2hDb250ZW50U3luY0V4dGVuc2lvbiA9IHtcbiAgbmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgZGVzY3JpcHRpb246ICdBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LiBTeW5jIHRvIEdvb2dsZSBEb2N1bWVudHMgYW5kIG1vcmUuJyxcbiAgYXV0aG9yOiAnU3luY2lmeScsXG4gIHdlYnNpdGU6ICdodHRwczovL3d3dy5jb250ZW50c3luYy5jb20nLFxuICB2ZXJzaW9uOiAnMy4xLjAnLFxuICBpZGVudGlmaWVyOiAnY29tLnN5bmNpZnkuc2tldGNoLmNvbnRlbnRzeW5jJyxcbiAgYXBwY2FzdDogJ2h0dHBzOi8vY2FzdC5hcHBjYXN0aWZ5LmNvbS9jb250ZW50c3luYy9jb250ZW50c3luYy54bWwnLFxuICBjb21wYXRpYmxlVmVyc2lvbjogJzMuNycsXG4gIGJ1bmRsZVZlcnNpb246ICcxJyxcbiAgYnVuZGxlTmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgYXV0aG9yRW1haWw6ICdzdXBwb3J0QGNvbnRlbnRzeW5jLmlvJyxcbiAgcmVwb3NpdG9yeToge1xuICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb250ZW50c3luYy9Ta2V0Y2hDb250ZW50U3luYy5za2V0Y2hwbHVnaW4nXG4gIH0sXG4gIG1lbnU6e1xuICAgIFwidGl0bGVcIjpcIlRvZ2dsZSBDb250ZW50U3luY1wiLFxuICAgIFwiaXRlbXNcIjpbXG4gICAgICBcImNvbW1hbmRUb2dnbGVQYW5lbHNcIixcbiAgICAgIFwiLVwiLFxuICAgICAgXCJhY3Rpb25QdXNoXCIsXG4gICAgICBcImFjdGlvblB1bGxcIlxuICAgIF1cbiAgfSxcbiAgY29tbWFuZHM6IHtcbiAgICBjb21tYW5kVG9nZ2xlUGFuZWxzOiB7XG4gICAgICBuYW1lOiAnVG9nZ2xlIENvbnRlbnRTeW5jJyxcbiAgICAgIHNob3J0Y3V0OiAnY21kIFsnLFxuICAgICAgcnVuOiBjb21tYW5kcy50b2dnbGVDb250ZW50U3luY1xuICAgIH0sXG4gICAgYWN0aW9uUHVzaDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdXNoLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHVzaCB2ZXJzaW9uIHRvIENvbnRlbnRTeW5jXCIsXG4gICAgICBpY29uIDogXCJpY29ucy9pY29uX2FjdGlvbl9wdXNoLnBuZ1wiLFxuICAgICAgbmFtZSA6IFwiUHVzaCBDb250ZW50U3luYyBWZXJzaW9uXCJcbiAgICB9LFxuICAgIGFjdGlvblB1bGw6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uUHVsbCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlB1bGwgdmVyc2lvbiBmcm9tIENvbnRlbnRTeW5jXCIsXG4gICAgICBpY29uIDogXCJpY29ucy9pY29uX2FjdGlvbl9wdWxsLnBuZ1wiLFxuICAgICAgbmFtZSA6IFwiUHVsbCBDb250ZW50U3luYyBWZXJzaW9uXCJcbiAgICB9LFxuICAgIGxpc3RlbmVyT25TdGFydHVwOiB7XG4gICAgICBydW46IGNvbW1hbmRzLmxvYWRDb250ZW50U3luY1xuICAgIH0sXG4gICAgbGlzdGVuZXJPblNodXRkb3duOiB7XG4gICAgICBydW46IGNvbW1hbmRzLnVubG9hZENvbnRlbnRTeW5jXG4gICAgfSxcbiAgICBzdGFydFVwOiB7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgXCJTdGFydHVwXCI6IFwiX19fbGlzdGVuZXJPblN0YXJ0dXBfcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTaHV0ZG93blwiOiBcIl9fX2xpc3RlbmVyT25TaHV0ZG93bl9ydW5faGFuZGxlcl9cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
