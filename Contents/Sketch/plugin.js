var __globals = this;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleContentSync = exports.unloadContentSync = exports.loadContentSync = undefined;

var _loadContentSync = require('./loadContentSync.js');

var _loadContentSync2 = _interopRequireDefault(_loadContentSync);

var _unloadContentSync = require('./unloadContentSync.js');

var _unloadContentSync2 = _interopRequireDefault(_unloadContentSync);

var _toggleContentSync = require('./toggleContentSync.js');

var _toggleContentSync2 = _interopRequireDefault(_toggleContentSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.loadContentSync = _loadContentSync2.default;
exports.unloadContentSync = _unloadContentSync2.default;
exports.toggleContentSync = _toggleContentSync2.default;

},{"./loadContentSync.js":2,"./toggleContentSync.js":3,"./unloadContentSync.js":4}],2:[function(require,module,exports){
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

},{"../context":5,"../library/framework_manager":6}],3:[function(require,module,exports){
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

},{"../context":5,"../library/framework_manager":6}],4:[function(require,module,exports){
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

},{"../context":5,"../library/framework_manager":6}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"../context":5}],7:[function(require,module,exports){
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
  version: '3.0.0',
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
    "isRoot": true,
    "items": ["commandTogglePanels"]
  },
  commands: {
    commandTogglePanels: {
      name: 'Toggle ContentSync',
      shortcut: 'cmd [',
      run: commands.toggleContentSync
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
    "version": "3.0.0",
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
        "isRoot": true,
        "items": [
            "commandTogglePanels"
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

},{"./commands":1}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvaW5kZXguanMiLCJidWlsZC1zcmMvY29tbWFuZHMvbG9hZENvbnRlbnRTeW5jLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3RvZ2dsZUNvbnRlbnRTeW5jLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3VubG9hZENvbnRlbnRTeW5jLmpzIiwiYnVpbGQtc3JjL2NvbnRleHQuanMiLCJidWlsZC1zcmMvbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlci5qcyIsImJ1aWxkLXNyYy9wbHVnaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHRSxlO1FBQ0EsaUI7UUFDQSxpQjs7Ozs7Ozs7O0FDRkY7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O2tCQVFlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixLQUF4QixHQUFnQyxJQUFoQyxFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssZUFBTCxFQUFmO0FBQ0EsTUFBSSxRQUFKO0FBQ0QsQzs7Ozs7Ozs7O0FDVEQ7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O2tCQVFlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixLQUF4QixHQUFnQyxJQUFoQyxFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssaUJBQUwsRUFBZjtBQUNBLE1BQUksUUFBSjtBQUNELEM7Ozs7Ozs7OztBQ1REOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQU5aOzs7OztrQkFRZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0EsbUJBQWlCLHdCQUFqQjtBQUNBLE1BQUksT0FBTyx3QkFBd0IsS0FBeEIsR0FBZ0MsSUFBaEMsRUFBWDtBQUNBLE1BQUksV0FBVyxLQUFLLGlCQUFMLEVBQWY7QUFDQSxNQUFJLFFBQUo7QUFDRCxDOzs7Ozs7Ozs7a0JDSmMsVUFBVSxVQUFWLEVBQXNCOztBQUVuQztBQUNBLE1BQUksVUFBSixFQUFnQjtBQUNkLGNBQVUsVUFBVjtBQUNEOztBQUVELFNBQU8sT0FBUDtBQUNELEM7O0FBbEJEOzs7Ozs7QUFNQTtBQUNBLElBQUksVUFBVSxJQUFkOztBQUVBOzs7Ozs7OztRQ05nQix3QixHQUFBLHdCOztBQUZoQjs7Ozs7O0FBRU8sU0FBUyx3QkFBVCxHQUFtQztBQUN4QyxnQkFBYyxhQUFkLEVBQTZCLHlCQUE3QjtBQUNEOztBQUVELFNBQVMsa0JBQVQsR0FBNkI7QUFDM0IsTUFBSSxZQUFZLHlCQUFVLFVBQVYsQ0FBcUIsaUNBQXJCLEVBQWhCO0FBQ0EsU0FBTyxZQUFZLGFBQW5CO0FBQ0Q7O0FBRUQsU0FBUyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLGNBQXRDLEVBQXNEO0FBQ3BELE1BQUksWUFBWSxvQkFBaEI7QUFDQSxNQUFJLFFBQVEsa0JBQWtCLGNBQWxCLEtBQXFDLElBQWpELEVBQXVEO0FBQ3JELFFBQUksUUFBUSxNQUFNLGFBQU4sRUFBWjtBQUNBLFFBQUcsTUFBTSxpQ0FBTixDQUF3QyxhQUF4QyxFQUF1RCxTQUF2RCxDQUFILEVBQXFFO0FBQ25FLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksbUJBQW1CLGFBQW5CLEdBQW1DLE1BQW5DLEdBQTRDLFNBQWhEO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQVJELE1BUU87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGOzs7Ozs7Ozs7O0FDbEJEOztJQUFZLFE7Ozs7QUFFTCxJQUFNLGtFQUE2QjtBQUN4QyxRQUFNLG1CQURrQztBQUV4QyxlQUFhLDBGQUYyQjtBQUd4QyxVQUFRLFNBSGdDO0FBSXhDLFdBQVMsNkJBSitCO0FBS3hDLFdBQVMsT0FMK0I7QUFNeEMsY0FBWSxnQ0FONEI7QUFPeEMsV0FBUyx5REFQK0I7QUFReEMscUJBQW1CLEtBUnFCO0FBU3hDLGlCQUFlLEdBVHlCO0FBVXhDLGNBQVksbUJBVjRCO0FBV3hDLGVBQWEsd0JBWDJCO0FBWXhDLGNBQVk7QUFDVixTQUFLO0FBREssR0FaNEI7QUFleEMsUUFBSztBQUNILGFBQVEsb0JBREw7QUFFSCxjQUFTLElBRk47QUFHSCxhQUFRLENBQ04scUJBRE07QUFITCxHQWZtQztBQXNCeEMsWUFBVTtBQUNSLHlCQUFxQjtBQUNuQixZQUFNLG9CQURhO0FBRW5CLGdCQUFVLE9BRlM7QUFHbkIsV0FBSyxTQUFTO0FBSEssS0FEYjtBQU1SLHVCQUFtQjtBQUNqQixXQUFLLFNBQVM7QUFERyxLQU5YO0FBU1Isd0JBQW9CO0FBQ2xCLFdBQUssU0FBUztBQURJLEtBVFo7QUFZUixhQUFTO0FBQ1AsZ0JBQVU7QUFDUixpQkFBUztBQUNQLGVBQUssZ0NBREU7QUFFUCxxQkFBVyxtQ0FGSjtBQUdQLHNCQUFZLG9DQUhMO0FBSVAsMEJBQWdCLHdDQUpUO0FBS1AscUNBQTJCO0FBTHBCO0FBREQ7QUFESDtBQVpEO0FBdEI4QixDQUFuQyxDLENBVFAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGxvYWRDb250ZW50U3luYyBmcm9tICcuL2xvYWRDb250ZW50U3luYy5qcydcbmltcG9ydCB1bmxvYWRDb250ZW50U3luYyBmcm9tICcuL3VubG9hZENvbnRlbnRTeW5jLmpzJ1xuaW1wb3J0IHRvZ2dsZUNvbnRlbnRTeW5jIGZyb20gJy4vdG9nZ2xlQ29udGVudFN5bmMuanMnXG5cbmV4cG9ydCB7XG4gIGxvYWRDb250ZW50U3luYyxcbiAgdW5sb2FkQ29udGVudFN5bmMsXG4gIHRvZ2dsZUNvbnRlbnRTeW5jXG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4ubG9hZENvbnRlbnRTeW5jKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4udG9nZ2xlQ29udGVudFN5bmMoKTtcbiAgbG9nKHJlc3BvbnNlKTtcbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5hbGxvYygpLmluaXQoKTtcbiAgbGV0IHJlc3BvbnNlID0gbWFpbi51bmxvYWRDb250ZW50U3luYygpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBDb250ZXh0XG4gKlxuICogUHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSB0byBzZXQgYW5kIGdldCB0aGUgY3VycmVudCBjb21tYW5kIGNvbnRleHQuXG4gKi9cblxuLy9zdG9yZSBjb250ZXh0XG5sZXQgY29udGV4dCA9IG51bGxcblxuLy9zZXQgYW5kIGdldCBjb250ZXh0IHZpYSB0aGUgc2FtZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5ld0NvbnRleHQpIHtcblxuICAvL3NldCBuZXcgY29udGV4dFxuICBpZiAobmV3Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBuZXdDb250ZXh0XG4gIH1cblxuICByZXR1cm4gY29udGV4dFxufVxuIiwiXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpe1xuICBsb2FkRnJhbWV3b3JrKCdDb250ZW50U3luYycsICdDb250ZW50U3luY1BhbmVsTWFuYWdlcicpO1xufTtcblxuZnVuY3Rpb24gZnJhbWV3b3JrRGlyZWN0b3J5KCl7XG4gIGxldCBkaXJlY3RvcnkgPSBDb250ZXh0KCkuc2NyaXB0UGF0aC5zdHJpbmdCeURlbGV0aW5nTGFzdFBhdGhDb21wb25lbnQoKTtcbiAgcmV0dXJuIGRpcmVjdG9yeSArICcvZnJhbWV3b3Jrcyc7XG59O1xuXG5mdW5jdGlvbiBsb2FkRnJhbWV3b3JrKGZyYW1ld29ya05hbWUsIGZyYW1ld29ya0NsYXNzKSB7XG4gIGxldCBkaXJlY3RvcnkgPSBmcmFtZXdvcmtEaXJlY3RvcnkoKTtcbiAgaWYgKHRydWUgfHwgTlNDbGFzc0Zyb21TdHJpbmcoZnJhbWV3b3JrQ2xhc3MpID09IG51bGwpIHtcbiAgICB2YXIgbW9jaGEgPSBNb2NoYS5zaGFyZWRSdW50aW1lKCk7XG4gICAgaWYobW9jaGEubG9hZEZyYW1ld29ya1dpdGhOYW1lX2luRGlyZWN0b3J5KGZyYW1ld29ya05hbWUsIGRpcmVjdG9yeSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZyhcIkVSUk9SIExPQURJTkcgXCIgKyBmcmFtZXdvcmtOYW1lICsgXCIgaW4gXCIgKyBkaXJlY3RvcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8qKlxuICogUGx1Z2luXG4gKlxuICogRGVmaW5lcyB0aGUgcGx1Z2luIHN0cnVjdHVyZSBhbmQgbWV0YWRhdGEuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBjb21tYW5kcyBmcm9tICcuL2NvbW1hbmRzJ1xuXG5leHBvcnQgY29uc3QgU2tldGNoQ29udGVudFN5bmNFeHRlbnNpb24gPSB7XG4gIG5hbWU6ICdTa2V0Y2hDb250ZW50U3luYycsXG4gIGRlc2NyaXB0aW9uOiAnQWJzdHJhY3QsIHZlcnNpb24sIGFuZCB0cmFuc2xhdGUgeW91ciBkZXNpZ24gY29udGVudC4gU3luYyB0byBHb29nbGUgRG9jdW1lbnRzIGFuZCBtb3JlLicsXG4gIGF1dGhvcjogJ1N5bmNpZnknLFxuICB3ZWJzaXRlOiAnaHR0cHM6Ly93d3cuY29udGVudHN5bmMuY29tJyxcbiAgdmVyc2lvbjogJzMuMC4wJyxcbiAgaWRlbnRpZmllcjogJ2NvbS5zeW5jaWZ5LnNrZXRjaC5jb250ZW50c3luYycsXG4gIGFwcGNhc3Q6ICdodHRwczovL2Nhc3QuYXBwY2FzdGlmeS5jb20vY29udGVudHN5bmMvY29udGVudHN5bmMueG1sJyxcbiAgY29tcGF0aWJsZVZlcnNpb246ICczLjcnLFxuICBidW5kbGVWZXJzaW9uOiAnMScsXG4gIGJ1bmRsZU5hbWU6ICdTa2V0Y2hDb250ZW50U3luYycsXG4gIGF1dGhvckVtYWlsOiAnc3VwcG9ydEBjb250ZW50c3luYy5pbycsXG4gIHJlcG9zaXRvcnk6IHtcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY29udGVudHN5bmMvU2tldGNoQ29udGVudFN5bmMuc2tldGNocGx1Z2luJ1xuICB9LFxuICBtZW51OntcbiAgICBcInRpdGxlXCI6XCJUb2dnbGUgQ29udGVudFN5bmNcIixcbiAgICBcImlzUm9vdFwiOnRydWUsXG4gICAgXCJpdGVtc1wiOltcbiAgICAgIFwiY29tbWFuZFRvZ2dsZVBhbmVsc1wiXG4gICAgXVxuICB9LFxuICBjb21tYW5kczoge1xuICAgIGNvbW1hbmRUb2dnbGVQYW5lbHM6IHtcbiAgICAgIG5hbWU6ICdUb2dnbGUgQ29udGVudFN5bmMnLFxuICAgICAgc2hvcnRjdXQ6ICdjbWQgWycsXG4gICAgICBydW46IGNvbW1hbmRzLnRvZ2dsZUNvbnRlbnRTeW5jXG4gICAgfSxcbiAgICBsaXN0ZW5lck9uU3RhcnR1cDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5sb2FkQ29udGVudFN5bmNcbiAgICB9LFxuICAgIGxpc3RlbmVyT25TaHV0ZG93bjoge1xuICAgICAgcnVuOiBjb21tYW5kcy51bmxvYWRDb250ZW50U3luY1xuICAgIH0sXG4gICAgc3RhcnRVcDoge1xuICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIFwiKlwiOiBcIl9fX2xpc3RlbmVyTG9nZ2VyX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiU3RhcnR1cFwiOiBcIl9fX2xpc3RlbmVyT25TdGFydHVwX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiU2h1dGRvd25cIjogXCJfX19saXN0ZW5lck9uU2h1dGRvd25fcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJPcGVuRG9jdW1lbnRcIjogXCJfX19saXN0ZW5lck9uRG9jdW1lbnRPcGVuX3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiU2VsZWN0aW9uQ2hhbmdlZC5maW5pc2hcIjogXCJfX19saXN0ZW5lck9uU2VsZWN0aW9uQ2hhbmdlZF9ydW5faGFuZGxlcl9cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
