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
  version: '3.0.2',
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
          "*": "___listenerLogger_run_handler_",
          "Startup": "___listenerOnStartup_run_handler_",
          "Shutdown": "___listenerOnShutdown_run_handler_",
          "OpenDocument": "___listenerOnDocumentOpen_run_handler_",
          "SelectionChanged.finish": "___listenerOnSelectionChanged_run_handler_"
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
    "version": "3.0.2",
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
                    "*": "___listenerLogger_run_handler_",
                    "Startup": "___listenerOnStartup_run_handler_",
                    "Shutdown": "___listenerOnShutdown_run_handler_",
                    "OpenDocument": "___listenerOnDocumentOpen_run_handler_",
                    "SelectionChanged.finish": "___listenerOnSelectionChanged_run_handler_"
                }
            }
        }
    ],
    "disableCocoaScriptPreprocessor": true
}__$end_of_manifest_
*/

},{"./commands":3}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2luZGV4LmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2xvYWRDb250ZW50U3luYy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy90b2dnbGVDb250ZW50U3luYy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy91bmxvYWRDb250ZW50U3luYy5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXIuanMiLCJidWlsZC1zcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDS0E7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O2tCQVFlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixLQUF4QixHQUFnQyxJQUFoQyxFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssVUFBTCxFQUFmO0FBQ0EsTUFBSSxRQUFKO0FBQ0QsQzs7Ozs7Ozs7O0FDVEQ7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O2tCQVFlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixLQUF4QixHQUFnQyxJQUFoQyxFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssVUFBTCxFQUFmO0FBQ0EsTUFBSSxRQUFKO0FBQ0QsQzs7Ozs7Ozs7OztBQ2REOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztRQUdFLGU7UUFDQSxpQjtRQUNBLGlCO1FBRUEsVTtRQUNBLFU7Ozs7Ozs7OztBQ1JGOzs7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QUssU0FBUyxVQURKO0FBRVYsbUJBQWEsK0JBRkg7QUFHVixZQUFPLDRCQUhHO0FBSVYsWUFBTztBQUpHLEtBWko7QUFrQlIsdUJBQW1CO0FBQ2pCLFdBQUssU0FBUztBQURHLEtBbEJYO0FBcUJSLHdCQUFvQjtBQUNsQixXQUFLLFNBQVM7QUFESSxLQXJCWjtBQXdCUixhQUFTO0FBQ1AsZ0JBQVU7QUFDUixpQkFBUztBQUNQLGVBQUssZ0NBREU7QUFFUCxxQkFBVyxtQ0FGSjtBQUdQLHNCQUFZLG9DQUhMO0FBSVAsMEJBQWdCLHdDQUpUO0FBS1AscUNBQTJCO0FBTHBCO0FBREQ7QUFESDtBQXhCRDtBQXhCOEIsQ0FBbkMsQyxDQVRQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5hbGxvYygpLmluaXQoKTtcbiAgbGV0IHJlc3BvbnNlID0gbWFpbi5hY3Rpb25QdWxsKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4uYWN0aW9uUHVzaCgpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiaW1wb3J0IGxvYWRDb250ZW50U3luYyBmcm9tICcuL2xvYWRDb250ZW50U3luYy5qcydcbmltcG9ydCB1bmxvYWRDb250ZW50U3luYyBmcm9tICcuL3VubG9hZENvbnRlbnRTeW5jLmpzJ1xuaW1wb3J0IHRvZ2dsZUNvbnRlbnRTeW5jIGZyb20gJy4vdG9nZ2xlQ29udGVudFN5bmMuanMnXG5cbmltcG9ydCBhY3Rpb25QdXNoIGZyb20gJy4vYWN0aW9uUHVzaC5qcydcbmltcG9ydCBhY3Rpb25QdWxsIGZyb20gJy4vYWN0aW9uUHVsbC5qcydcblxuZXhwb3J0IHtcbiAgbG9hZENvbnRlbnRTeW5jLFxuICB1bmxvYWRDb250ZW50U3luYyxcbiAgdG9nZ2xlQ29udGVudFN5bmMsXG5cbiAgYWN0aW9uUHVzaCxcbiAgYWN0aW9uUHVsbFxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLmxvYWRDb250ZW50U3luYygpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLnRvZ2dsZUNvbnRlbnRTeW5jKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4udW5sb2FkQ29udGVudFN5bmMoKTtcbiAgbG9nKHJlc3BvbnNlKTtcbn1cbiIsIi8qKlxuICogQ29udGV4dFxuICpcbiAqIFByb3ZpZGVzIGEgY29udmVuaWVudCB3YXkgdG8gc2V0IGFuZCBnZXQgdGhlIGN1cnJlbnQgY29tbWFuZCBjb250ZXh0LlxuICovXG5cbi8vc3RvcmUgY29udGV4dFxubGV0IGNvbnRleHQgPSBudWxsXG5cbi8vc2V0IGFuZCBnZXQgY29udGV4dCB2aWEgdGhlIHNhbWUgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuZXdDb250ZXh0KSB7XG5cbiAgLy9zZXQgbmV3IGNvbnRleHRcbiAgaWYgKG5ld0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gbmV3Q29udGV4dFxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cbiIsIlxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKXtcbiAgbG9hZEZyYW1ld29yaygnQ29udGVudFN5bmMnLCAnQ29udGVudFN5bmNQYW5lbE1hbmFnZXInKTtcbn07XG5cbmZ1bmN0aW9uIGZyYW1ld29ya0RpcmVjdG9yeSgpe1xuICBsZXQgZGlyZWN0b3J5ID0gQ29udGV4dCgpLnNjcmlwdFBhdGguc3RyaW5nQnlEZWxldGluZ0xhc3RQYXRoQ29tcG9uZW50KCk7XG4gIHJldHVybiBkaXJlY3RvcnkgKyAnL2ZyYW1ld29ya3MnO1xufTtcblxuZnVuY3Rpb24gbG9hZEZyYW1ld29yayhmcmFtZXdvcmtOYW1lLCBmcmFtZXdvcmtDbGFzcykge1xuICBsZXQgZGlyZWN0b3J5ID0gZnJhbWV3b3JrRGlyZWN0b3J5KCk7XG4gIGlmICh0cnVlIHx8IE5TQ2xhc3NGcm9tU3RyaW5nKGZyYW1ld29ya0NsYXNzKSA9PSBudWxsKSB7XG4gICAgdmFyIG1vY2hhID0gTW9jaGEuc2hhcmVkUnVudGltZSgpO1xuICAgIGlmKG1vY2hhLmxvYWRGcmFtZXdvcmtXaXRoTmFtZV9pbkRpcmVjdG9yeShmcmFtZXdvcmtOYW1lLCBkaXJlY3RvcnkpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2coXCJFUlJPUiBMT0FESU5HIFwiICsgZnJhbWV3b3JrTmFtZSArIFwiIGluIFwiICsgZGlyZWN0b3J5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvKipcbiAqIFBsdWdpblxuICpcbiAqIERlZmluZXMgdGhlIHBsdWdpbiBzdHJ1Y3R1cmUgYW5kIG1ldGFkYXRhLlxuICovXG5cblxuaW1wb3J0ICogYXMgY29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcblxuZXhwb3J0IGNvbnN0IFNrZXRjaENvbnRlbnRTeW5jRXh0ZW5zaW9uID0ge1xuICBuYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBkZXNjcmlwdGlvbjogJ0Fic3RyYWN0LCB2ZXJzaW9uLCBhbmQgdHJhbnNsYXRlIHlvdXIgZGVzaWduIGNvbnRlbnQuIFN5bmMgdG8gR29vZ2xlIERvY3VtZW50cyBhbmQgbW9yZS4nLFxuICBhdXRob3I6ICdTeW5jaWZ5JyxcbiAgd2Vic2l0ZTogJ2h0dHBzOi8vd3d3LmNvbnRlbnRzeW5jLmNvbScsXG4gIHZlcnNpb246ICczLjAuMicsXG4gIGlkZW50aWZpZXI6ICdjb20uc3luY2lmeS5za2V0Y2guY29udGVudHN5bmMnLFxuICBhcHBjYXN0OiAnaHR0cHM6Ly9jYXN0LmFwcGNhc3RpZnkuY29tL2NvbnRlbnRzeW5jL2NvbnRlbnRzeW5jLnhtbCcsXG4gIGNvbXBhdGlibGVWZXJzaW9uOiAnMy43JyxcbiAgYnVuZGxlVmVyc2lvbjogJzEnLFxuICBidW5kbGVOYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBhdXRob3JFbWFpbDogJ3N1cHBvcnRAY29udGVudHN5bmMuaW8nLFxuICByZXBvc2l0b3J5OiB7XG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnRlbnRzeW5jL1NrZXRjaENvbnRlbnRTeW5jLnNrZXRjaHBsdWdpbidcbiAgfSxcbiAgbWVudTp7XG4gICAgXCJ0aXRsZVwiOlwiVG9nZ2xlIENvbnRlbnRTeW5jXCIsXG4gICAgXCJpdGVtc1wiOltcbiAgICAgIFwiY29tbWFuZFRvZ2dsZVBhbmVsc1wiLFxuICAgICAgXCItXCIsXG4gICAgICBcImFjdGlvblB1c2hcIixcbiAgICAgIFwiYWN0aW9uUHVsbFwiXG4gICAgXVxuICB9LFxuICBjb21tYW5kczoge1xuICAgIGNvbW1hbmRUb2dnbGVQYW5lbHM6IHtcbiAgICAgIG5hbWU6ICdUb2dnbGUgQ29udGVudFN5bmMnLFxuICAgICAgc2hvcnRjdXQ6ICdjbWQgWycsXG4gICAgICBydW46IGNvbW1hbmRzLnRvZ2dsZUNvbnRlbnRTeW5jXG4gICAgfSxcbiAgICBhY3Rpb25QdXNoOiB7XG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblB1c2gsXG4gICAgICBkZXNjcmlwdGlvbjogXCJQdXNoIHZlcnNpb24gdG8gQ29udGVudFN5bmNcIixcbiAgICAgIGljb24gOiBcImljb25zL2ljb25fYWN0aW9uX3B1c2gucG5nXCIsXG4gICAgICBuYW1lIDogXCJQdXNoIENvbnRlbnRTeW5jIFZlcnNpb25cIlxuICAgIH0sXG4gICAgYWN0aW9uUHVsbDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdWxsLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHVsbCB2ZXJzaW9uIGZyb20gQ29udGVudFN5bmNcIixcbiAgICAgIGljb24gOiBcImljb25zL2ljb25fYWN0aW9uX3B1bGwucG5nXCIsXG4gICAgICBuYW1lIDogXCJQdWxsIENvbnRlbnRTeW5jIFZlcnNpb25cIlxuICAgIH0sXG4gICAgbGlzdGVuZXJPblN0YXJ0dXA6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMubG9hZENvbnRlbnRTeW5jXG4gICAgfSxcbiAgICBsaXN0ZW5lck9uU2h1dGRvd246IHtcbiAgICAgIHJ1bjogY29tbWFuZHMudW5sb2FkQ29udGVudFN5bmNcbiAgICB9LFxuICAgIHN0YXJ0VXA6IHtcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBcIipcIjogXCJfX19saXN0ZW5lckxvZ2dlcl9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIlN0YXJ0dXBcIjogXCJfX19saXN0ZW5lck9uU3RhcnR1cF9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIlNodXRkb3duXCI6IFwiX19fbGlzdGVuZXJPblNodXRkb3duX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiT3BlbkRvY3VtZW50XCI6IFwiX19fbGlzdGVuZXJPbkRvY3VtZW50T3Blbl9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIlNlbGVjdGlvbkNoYW5nZWQuZmluaXNoXCI6IFwiX19fbGlzdGVuZXJPblNlbGVjdGlvbkNoYW5nZWRfcnVuX2hhbmRsZXJfXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
