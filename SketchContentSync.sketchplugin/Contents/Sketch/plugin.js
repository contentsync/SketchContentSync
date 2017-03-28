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
 * Git File Name
 *
 * Returns the currently open and selected sketch file.
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.getFileName();
  log(response);
};

},{"../context":7,"../library/framework_manager":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.togglePanels = exports.push = exports.pull = exports.openOSXApp = exports.getFileName = undefined;

var _getFileName = require('./getFileName.js');

var _getFileName2 = _interopRequireDefault(_getFileName);

var _openOSXApp = require('./openOSXApp.js');

var _openOSXApp2 = _interopRequireDefault(_openOSXApp);

var _pull = require('./pull.js');

var _pull2 = _interopRequireDefault(_pull);

var _push = require('./push.js');

var _push2 = _interopRequireDefault(_push);

var _togglePanels = require('./togglePanels.js');

var _togglePanels2 = _interopRequireDefault(_togglePanels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getFileName = _getFileName2.default;
exports.openOSXApp = _openOSXApp2.default;
exports.pull = _pull2.default;
exports.push = _push2.default;
exports.togglePanels = _togglePanels2.default;

},{"./getFileName.js":1,"./openOSXApp.js":3,"./pull.js":4,"./push.js":5,"./togglePanels.js":6}],3:[function(require,module,exports){
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
 * Git File Name
 *
 * Returns the currently open and selected sketch file.
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.openOSXApp();
  log(response);
};

},{"../context":7,"../library/framework_manager":8}],4:[function(require,module,exports){
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
 * Pull
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.alloc().init();
  var response = main.pull();
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
  var response = main.push();
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
  var response = main.togglePanels();
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
exports.onDocumentOpen = exports.onStartup = undefined;

var _onStartup = require('./onStartup.js');

var _onStartup2 = _interopRequireDefault(_onStartup);

var _onDocumentOpen = require('./onDocumentOpen.js');

var _onDocumentOpen2 = _interopRequireDefault(_onDocumentOpen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onStartup = _onStartup2.default;
exports.onDocumentOpen = _onDocumentOpen2.default;

},{"./onDocumentOpen.js":10,"./onStartup.js":11}],10:[function(require,module,exports){
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
 * Git File Name
 *
 * Returns the currently open and selected sketch file.
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.sharedManager();
  var response = main.onOpenDocument();
};

},{"../context":7,"../library/framework_manager":8}],11:[function(require,module,exports){
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
 * Git File Name
 *
 * Returns the currently open and selected sketch file.
 */

exports.default = function (context) {
  (0, _context2.default)(context);
  FrameworkManager.loadContentSyncFramework();
  var main = ContentSyncPanelManager.sharedManager();
  var response = main.onStartup();
};

},{"../context":7,"../library/framework_manager":8}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchContentSyncExtension = undefined;

var _commands = require('./commands');

var commands = _interopRequireWildcard(_commands);

var _listeners = require('./listeners');

var listeners = _interopRequireWildcard(_listeners);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Plugin
 *
 * Defines the plugin structure and metadata.
 */

var SketchContentSyncExtension = exports.SketchContentSyncExtension = {
  name: 'SketchContentSync',
  bundleName: 'SketchContentSync',
  description: 'Abstract, version, and translate your design content. Sync to Google Documents and more.',
  author: 'Syncify',
  authorEmail: 'support@contentsync.io',
  version: '2.2.1',
  identifier: 'com.syncify.sketch.contentsync',
  compatibleVersion: '3.7',
  repository: {
    url: 'https://github.com/contentsync/SketchContentSync'
  },
  menu: {
    "title": "Toggle ContentSync",
    "isRoot": true,
    "items": ["commandTogglePanels"]
  },
  commands: {
    commandPull: {
      run: commands.pull
    },
    commandPush: {
      run: commands.push
    },
    commandGetFileName: {
      run: commands.getFileName
    },
    commandOpenOSXApp: {
      run: commands.openOSXApp
    },
    commandTogglePanels: {
      name: 'Toggle ContentSync',
      shortcut: 'cmd =',
      run: commands.togglePanels
    },
    listenerOnStartup: {
      run: listeners.onStartup
    },
    listenerOnDocumentOpen: {
      run: listeners.onDocumentOpen
    },
    startUp: {
      handlers: {
        actions: {
          "Startup": "___listenerOnStartup_run_handler_",
          "OpenDocument": "___listenerOnDocumentOpen_run_handler_"
        }
      }
    }
  }
};

__globals.___commandPull_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['commandPull'].run(context, params);
};

__globals.___commandPush_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['commandPush'].run(context, params);
};

__globals.___commandGetFileName_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['commandGetFileName'].run(context, params);
};

__globals.___commandOpenOsxApp_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['commandOpenOSXApp'].run(context, params);
};

__globals.___commandTogglePanels_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['commandTogglePanels'].run(context, params);
};

__globals.___listenerOnStartup_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOnStartup'].run(context, params);
};

__globals.___listenerOnDocumentOpen_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOnDocumentOpen'].run(context, params);
};

__globals.____run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['undefined'].run(context, params);
};

/*__$begin_of_manifest_
{
    "name": "SketchContentSync",
    "bundleName": "SketchContentSync",
    "description": "Abstract, version, and translate your design content. Sync to Google Documents and more.",
    "author": "Syncify",
    "authorEmail": "support@contentsync.io",
    "version": "2.2.1",
    "identifier": "com.syncify.sketch.contentsync",
    "compatibleVersion": "3.7",
    "repository": {
        "url": "https://github.com/contentsync/SketchContentSync"
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
            "identifier": "commandPull",
            "handler": "___commandPull_run_handler_"
        },
        {
            "script": "plugin.js",
            "identifier": "commandPush",
            "handler": "___commandPush_run_handler_"
        },
        {
            "script": "plugin.js",
            "identifier": "commandGetFileName",
            "handler": "___commandGetFileName_run_handler_"
        },
        {
            "script": "plugin.js",
            "identifier": "commandOpenOSXApp",
            "handler": "___commandOpenOsxApp_run_handler_"
        },
        {
            "script": "plugin.js",
            "name": "Toggle ContentSync",
            "shortcut": "cmd =",
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
            "identifier": "listenerOnDocumentOpen",
            "handler": "___listenerOnDocumentOpen_run_handler_"
        },
        {
            "script": "plugin.js",
            "handlers": {
                "actions": {
                    "Startup": "___listenerOnStartup_run_handler_",
                    "OpenDocument": "___listenerOnDocumentOpen_run_handler_"
                }
            }
        }
    ],
    "disableCocoaScriptPreprocessor": true
}__$end_of_manifest_
*/

},{"./commands":2,"./listeners":9}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tbWFuZHMvZ2V0RmlsZU5hbWUuanMiLCJzcmMvY29tbWFuZHMvaW5kZXguanMiLCJzcmMvY29tbWFuZHMvb3Blbk9TWEFwcC5qcyIsInNyYy9jb21tYW5kcy9wdWxsLmpzIiwic3JjL2NvbW1hbmRzL3B1c2guanMiLCJzcmMvY29tbWFuZHMvdG9nZ2xlUGFuZWxzLmpzIiwic3JjL2NvbnRleHQuanMiLCJzcmMvbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlci5qcyIsInNyYy9saXN0ZW5lcnMvaW5kZXguanMiLCJzcmMvbGlzdGVuZXJzL29uRG9jdW1lbnRPcGVuLmpzIiwic3JjL2xpc3RlbmVycy9vblN0YXJ0dXAuanMiLCJzcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDTUE7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBUFo7Ozs7OztrQkFTZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0EsbUJBQWlCLHdCQUFqQjtBQUNBLE1BQUksT0FBTyx3QkFBd0IsS0FBeEIsR0FBZ0MsSUFBaEMsRUFBWDtBQUNBLE1BQUksV0FBVyxLQUFLLFdBQUwsRUFBZjtBQUNBLE1BQUksUUFBSjtBQUNELEM7Ozs7Ozs7Ozs7QUNmRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7UUFJRSxXO1FBQ0EsVTtRQUNBLEk7UUFDQSxJO1FBQ0EsWTs7Ozs7Ozs7O0FDUEY7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBUFo7Ozs7OztrQkFTZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0EsbUJBQWlCLHdCQUFqQjtBQUNBLE1BQUksT0FBTyx3QkFBd0IsS0FBeEIsR0FBZ0MsSUFBaEMsRUFBWDtBQUNBLE1BQUksV0FBVyxLQUFLLFVBQUwsRUFBZjtBQUNBLE1BQUksUUFBSjtBQUNELEM7Ozs7Ozs7OztB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eEMsV0FBUyxPQU4rQjtBQU94QyxjQUFZLGdDQVA0QjtBQVF4QyxxQkFBbUIsS0FScUI7QUFTeEMsY0FBWTtBQUNWLFNBQUs7QUFESyxHQVQ0QjtBQVl4QyxRQUFLO0FBQ0gsYUFBUSxvQkFETDtBQUVILGNBQVMsSUFGTjtBQUdILGFBQVEsQ0FDTixxQkFETTtBQUhMLEdBWm1DO0FBbUJ4QyxZQUFVO0FBQ1IsaUJBQWE7QUFDWCxXQUFLLFNBQVM7QUFESCxLQURMO0FBSVIsaUJBQWE7QUFDWCxXQUFLLFNBQVM7QUFESCxLQUpMO0FBT1Isd0JBQW9CO0FBQ2xCLFdBQUssU0FBUztBQURJLEtBUFo7QUFVUix1QkFBbUI7QUFDakIsV0FBSyxTQUFTO0FBREcsS0FWWDtBQWFSLHlCQUFxQjtBQUNuQixZQUFNLG9CQURhO0FBRW5CLGdCQUFVLE9BRlM7QUFHbkIsV0FBSyxTQUFTO0FBSEssS0FiYjtBQWtCUix1QkFBbUI7QUFDakIsV0FBSyxVQUFVO0FBREUsS0FsQlg7QUFxQlIsNEJBQXdCO0FBQ3RCLFdBQUssVUFBVTtBQURPLEtBckJoQjtBQXdCUixhQUFTO0FBQ1AsZ0JBQVU7QUFDUixpQkFBUztBQUNQLHFCQUFXLG1DQURKO0FBRVAsMEJBQWdCO0FBRlQ7QUFERDtBQURIO0FBeEJEO0FBbkI4QixDQUFuQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEdpdCBGaWxlIE5hbWVcbiAqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgb3BlbiBhbmQgc2VsZWN0ZWQgc2tldGNoIGZpbGUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcidcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLmdldEZpbGVOYW1lKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCJpbXBvcnQgZ2V0RmlsZU5hbWUgZnJvbSAnLi9nZXRGaWxlTmFtZS5qcydcbmltcG9ydCBvcGVuT1NYQXBwIGZyb20gJy4vb3Blbk9TWEFwcC5qcydcbmltcG9ydCBwdWxsIGZyb20gJy4vcHVsbC5qcydcbmltcG9ydCBwdXNoIGZyb20gJy4vcHVzaC5qcydcblxuaW1wb3J0IHRvZ2dsZVBhbmVscyBmcm9tICcuL3RvZ2dsZVBhbmVscy5qcydcblxuXG5leHBvcnQge1xuICBnZXRGaWxlTmFtZSxcbiAgb3Blbk9TWEFwcCxcbiAgcHVsbCxcbiAgcHVzaCxcbiAgdG9nZ2xlUGFuZWxzXG59XG4iLCIvKipcbiAqIEdpdCBGaWxlIE5hbWVcbiAqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgb3BlbiBhbmQgc2VsZWN0ZWQgc2tldGNoIGZpbGUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcidcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLm9wZW5PU1hBcHAoKTtcbiAgbG9nKHJlc3BvbnNlKTtcbn1cbiIsIi8qKlxuICogUHVsbFxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5hbGxvYygpLmluaXQoKTtcbiAgbGV0IHJlc3BvbnNlID0gbWFpbi5wdWxsKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4ucHVzaCgpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLnRvZ2dsZVBhbmVscygpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBDb250ZXh0XG4gKlxuICogUHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSB0byBzZXQgYW5kIGdldCB0aGUgY3VycmVudCBjb21tYW5kIGNvbnRleHQuXG4gKi9cblxuLy9zdG9yZSBjb250ZXh0XG5sZXQgY29udGV4dCA9IG51bGxcblxuLy9zZXQgYW5kIGdldCBjb250ZXh0IHZpYSB0aGUgc2FtZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5ld0NvbnRleHQpIHtcblxuICAvL3NldCBuZXcgY29udGV4dFxuICBpZiAobmV3Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBuZXdDb250ZXh0XG4gIH1cblxuICByZXR1cm4gY29udGV4dFxufVxuIiwiXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpe1xuICBsb2FkRnJhbWV3b3JrKCdDb250ZW50U3luYycsICdDb250ZW50U3luY1BhbmVsTWFuYWdlcicpO1xufTtcblxuZnVuY3Rpb24gZnJhbWV3b3JrRGlyZWN0b3J5KCl7XG4gIGxldCBkaXJlY3RvcnkgPSBDb250ZXh0KCkuc2NyaXB0UGF0aC5zdHJpbmdCeURlbGV0aW5nTGFzdFBhdGhDb21wb25lbnQoKTtcbiAgcmV0dXJuIGRpcmVjdG9yeSArICcvZnJhbWV3b3Jrcyc7XG59O1xuXG5mdW5jdGlvbiBsb2FkRnJhbWV3b3JrKGZyYW1ld29ya05hbWUsIGZyYW1ld29ya0NsYXNzKSB7XG4gIGxldCBkaXJlY3RvcnkgPSBmcmFtZXdvcmtEaXJlY3RvcnkoKTtcbiAgaWYgKHRydWUgfHwgTlNDbGFzc0Zyb21TdHJpbmcoZnJhbWV3b3JrQ2xhc3MpID09IG51bGwpIHtcbiAgICB2YXIgbW9jaGEgPSBNb2NoYS5zaGFyZWRSdW50aW1lKCk7XG4gICAgaWYobW9jaGEubG9hZEZyYW1ld29ya1dpdGhOYW1lX2luRGlyZWN0b3J5KGZyYW1ld29ya05hbWUsIGRpcmVjdG9yeSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZyhcIkVSUk9SIExPQURJTkcgXCIgKyBmcmFtZXdvcmtOYW1lICsgXCIgaW4gXCIgKyBkaXJlY3RvcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsImltcG9ydCBvblN0YXJ0dXAgZnJvbSAnLi9vblN0YXJ0dXAuanMnXG5pbXBvcnQgb25Eb2N1bWVudE9wZW4gZnJvbSAnLi9vbkRvY3VtZW50T3Blbi5qcydcblxuZXhwb3J0IHtcbiAgb25TdGFydHVwLFxuICBvbkRvY3VtZW50T3BlblxufVxuIiwiLyoqXG4gKiBHaXQgRmlsZSBOYW1lXG4gKlxuICogUmV0dXJucyB0aGUgY3VycmVudGx5IG9wZW4gYW5kIHNlbGVjdGVkIHNrZXRjaCBmaWxlLlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5zaGFyZWRNYW5hZ2VyKCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4ub25PcGVuRG9jdW1lbnQoKTtcbn1cbiIsIi8qKlxuICogR2l0IEZpbGUgTmFtZVxuICpcbiAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBvcGVuIGFuZCBzZWxlY3RlZCBza2V0Y2ggZmlsZS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuc2hhcmVkTWFuYWdlcigpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLm9uU3RhcnR1cCgpO1xufVxuIiwiLyoqXG4gKiBQbHVnaW5cbiAqXG4gKiBEZWZpbmVzIHRoZSBwbHVnaW4gc3RydWN0dXJlIGFuZCBtZXRhZGF0YS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIGNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnXG5pbXBvcnQgKiBhcyBsaXN0ZW5lcnMgZnJvbSAnLi9saXN0ZW5lcnMnXG5cbmV4cG9ydCBjb25zdCBTa2V0Y2hDb250ZW50U3luY0V4dGVuc2lvbiA9IHtcbiAgbmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgYnVuZGxlTmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgZGVzY3JpcHRpb246ICdBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LiBTeW5jIHRvIEdvb2dsZSBEb2N1bWVudHMgYW5kIG1vcmUuJyxcbiAgYXV0aG9yOiAnU3luY2lmeScsXG4gIGF1dGhvckVtYWlsOiAnc3VwcG9ydEBjb250ZW50c3luYy5pbycsXG4gIHZlcnNpb246ICcyLjIuMScsXG4gIGlkZW50aWZpZXI6ICdjb20uc3luY2lmeS5za2V0Y2guY29udGVudHN5bmMnLFxuICBjb21wYXRpYmxlVmVyc2lvbjogJzMuNycsXG4gIHJlcG9zaXRvcnk6IHtcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY29udGVudHN5bmMvU2tldGNoQ29udGVudFN5bmMnXG4gIH0sXG4gIG1lbnU6e1xuICAgIFwidGl0bGVcIjpcIlRvZ2dsZSBDb250ZW50U3luY1wiLFxuICAgIFwiaXNSb290XCI6dHJ1ZSxcbiAgICBcIml0ZW1zXCI6W1xuICAgICAgXCJjb21tYW5kVG9nZ2xlUGFuZWxzXCJcbiAgICBdXG4gIH0sXG4gIGNvbW1hbmRzOiB7XG4gICAgY29tbWFuZFB1bGw6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMucHVsbFxuICAgIH0sXG4gICAgY29tbWFuZFB1c2g6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMucHVzaFxuICAgIH0sXG4gICAgY29tbWFuZEdldEZpbGVOYW1lOiB7XG4gICAgICBydW46IGNvbW1hbmRzLmdldEZpbGVOYW1lXG4gICAgfSxcbiAgICBjb21tYW5kT3Blbk9TWEFwcDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5vcGVuT1NYQXBwXG4gICAgfSxcbiAgICBjb21tYW5kVG9nZ2xlUGFuZWxzOiB7XG4gICAgICBuYW1lOiAnVG9nZ2xlIENvbnRlbnRTeW5jJyxcbiAgICAgIHNob3J0Y3V0OiAnY21kID0nLFxuICAgICAgcnVuOiBjb21tYW5kcy50b2dnbGVQYW5lbHNcbiAgICB9LFxuICAgIGxpc3RlbmVyT25TdGFydHVwOiB7XG4gICAgICBydW46IGxpc3RlbmVycy5vblN0YXJ0dXBcbiAgICB9LFxuICAgIGxpc3RlbmVyT25Eb2N1bWVudE9wZW46IHtcbiAgICAgIHJ1bjogbGlzdGVuZXJzLm9uRG9jdW1lbnRPcGVuXG4gICAgfSxcbiAgICBzdGFydFVwOiB7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgXCJTdGFydHVwXCI6IFwiX19fbGlzdGVuZXJPblN0YXJ0dXBfcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJPcGVuRG9jdW1lbnRcIjogXCJfX19saXN0ZW5lck9uRG9jdW1lbnRPcGVuX3J1bl9oYW5kbGVyX1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
