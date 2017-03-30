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
exports.onSelectionChanged = exports.onDocumentOpen = exports.onStartup = exports.logger = undefined;

var _logger = require('./logger.js');

var _logger2 = _interopRequireDefault(_logger);

var _onStartup = require('./onStartup.js');

var _onStartup2 = _interopRequireDefault(_onStartup);

var _onDocumentOpen = require('./onDocumentOpen.js');

var _onDocumentOpen2 = _interopRequireDefault(_onDocumentOpen);

var _onSelectionChanged = require('./onSelectionChanged.js');

var _onSelectionChanged2 = _interopRequireDefault(_onSelectionChanged);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.logger = _logger2.default;
exports.onStartup = _onStartup2.default;
exports.onDocumentOpen = _onDocumentOpen2.default;
exports.onSelectionChanged = _onSelectionChanged2.default;

},{"./logger.js":10,"./onDocumentOpen.js":11,"./onSelectionChanged.js":12,"./onStartup.js":13}],10:[function(require,module,exports){
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
  log("[ContentSync] " + context);
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
  var response = main.onOpenDocument();
};

},{"../context":7,"../library/framework_manager":8}],12:[function(require,module,exports){
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
  var response = main.onSelectionChanged();
};

},{"../context":7,"../library/framework_manager":8}],13:[function(require,module,exports){
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

},{"../context":7,"../library/framework_manager":8}],14:[function(require,module,exports){
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
  version: '2.3.0',
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
    listenerOnSelectionChanged: {
      run: listeners.onSelectionChanged
    },
    startUp: {
      handlers: {
        actions: {
          "Startup": "___listenerOnStartup_run_handler_",
          "OpenDocument": "___listenerOnDocumentOpen_run_handler_",
          "SelectionChanged.finish": "___listenerOnSelectionChanged_run_handler_"
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

__globals.___listenerOnSelectionChanged_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerOnSelectionChanged'].run(context, params);
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
    "version": "2.3.0",
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
            "identifier": "listenerOnSelectionChanged",
            "handler": "___listenerOnSelectionChanged_run_handler_"
        },
        {
            "script": "plugin.js",
            "handlers": {
                "actions": {
                    "Startup": "___listenerOnStartup_run_handler_",
                    "OpenDocument": "___listenerOnDocumentOpen_run_handler_",
                    "SelectionChanged.finish": "___listenerOnSelectionChanged_run_handler_"
                }
            }
        }
    ],
    "disableCocoaScriptPreprocessor": true
}__$end_of_manifest_
*/

},{"./commands":2,"./listeners":9}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tbWFuZHMvZ2V0RmlsZU5hbWUuanMiLCJzcmMvY29tbWFuZHMvaW5kZXguanMiLCJzcmMvY29tbWFuZHMvb3Blbk9TWEFwcC5qcyIsInNyYy9jb21tYW5kcy9wdWxsLmpzIiwic3JjL2NvbW1hbmRzL3B1c2guanMiLCJzcmMvY29tbWFuZHMvdG9nZ2xlUGFuZWxzLmpzIiwic3JjL2NvbnRleHQuanMiLCJzcmMvbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlci5qcyIsInNyYy9saXN0ZW5lcnMvaW5kZXguanMiLCJzcmMvbGlzdGVuZXJzL2xvZ2dlci5qcyIsInNyYy9saXN0ZW5lcnMvb25Eb2N1bWVudE9wZW4uanMiLCJzcmMvbGlzdGVuZXJzL29uU2VsZWN0aW9uQ2hhbmdlZC5qcyIsInNyYy9saXN0ZW5lcnMvb25TdGFydHVwLmpzIiwic3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ01BOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQVBaOzs7Ozs7a0JBU2UsVUFBQyxPQUFELEVBQWE7QUFDMUIseUJBQVEsT0FBUjtBQUNBLG1CQUFpQix3QkFBakI7QUFDQSxNQUFJLE9BQU8sd0JBQXdCLEtBQXhCLEdBQWdDLElBQWhDLEVBQVg7QUFDQSxNQUFJLFdBQVcsS0FBSyxXQUFMLEVBQWY7QUFDQSxNQUFJLFFBQUo7QUFDRCxDOzs7Ozs7Ozs7O0FDZkQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O1FBSUUsVztRQUNBLFU7UUFDQSxJO1FBQ0EsSTtRQUNBLFk7Ozs7Ozs7OztBQ1BGOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQVBaOzs7Ozs7a0JBU2UsVUFBQyxPQUFELEVBQWE7QUFDMUIseUJBQVEsT0FBUjtBQUNBLG1CQUFpQix3QkFBakI7QUFDQSxNQUFJLE9BQU8sd0JBQXdCLEtBQXhCLEdBQWdDLElBQWhDLEVB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Q1IsaUJBQVM7QUFDUCxxQkFBVyxtQ0FESjtBQUVQLDBCQUFnQix3Q0FGVDtBQUdQLHFDQUEyQjtBQUhwQjtBQUREO0FBREg7QUEzQkQ7QUFuQjhCLENBQW5DIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogR2l0IEZpbGUgTmFtZVxuICpcbiAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBvcGVuIGFuZCBzZWxlY3RlZCBza2V0Y2ggZmlsZS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4uZ2V0RmlsZU5hbWUoKTtcbiAgbG9nKHJlc3BvbnNlKTtcbn1cbiIsImltcG9ydCBnZXRGaWxlTmFtZSBmcm9tICcuL2dldEZpbGVOYW1lLmpzJ1xuaW1wb3J0IG9wZW5PU1hBcHAgZnJvbSAnLi9vcGVuT1NYQXBwLmpzJ1xuaW1wb3J0IHB1bGwgZnJvbSAnLi9wdWxsLmpzJ1xuaW1wb3J0IHB1c2ggZnJvbSAnLi9wdXNoLmpzJ1xuXG5pbXBvcnQgdG9nZ2xlUGFuZWxzIGZyb20gJy4vdG9nZ2xlUGFuZWxzLmpzJ1xuXG5cbmV4cG9ydCB7XG4gIGdldEZpbGVOYW1lLFxuICBvcGVuT1NYQXBwLFxuICBwdWxsLFxuICBwdXNoLFxuICB0b2dnbGVQYW5lbHNcbn1cbiIsIi8qKlxuICogR2l0IEZpbGUgTmFtZVxuICpcbiAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBvcGVuIGFuZCBzZWxlY3RlZCBza2V0Y2ggZmlsZS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4ub3Blbk9TWEFwcCgpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBQdWxsXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcidcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLnB1bGwoKTtcbiAgbG9nKHJlc3BvbnNlKTtcbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5hbGxvYygpLmluaXQoKTtcbiAgbGV0IHJlc3BvbnNlID0gbWFpbi5wdXNoKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuYWxsb2MoKS5pbml0KCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4udG9nZ2xlUGFuZWxzKCk7XG4gIGxvZyhyZXNwb25zZSk7XG59XG4iLCIvKipcbiAqIENvbnRleHRcbiAqXG4gKiBQcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHNldCBhbmQgZ2V0IHRoZSBjdXJyZW50IGNvbW1hbmQgY29udGV4dC5cbiAqL1xuXG4vL3N0b3JlIGNvbnRleHRcbmxldCBjb250ZXh0ID0gbnVsbFxuXG4vL3NldCBhbmQgZ2V0IGNvbnRleHQgdmlhIHRoZSBzYW1lIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmV3Q29udGV4dCkge1xuXG4gIC8vc2V0IG5ldyBjb250ZXh0XG4gIGlmIChuZXdDb250ZXh0KSB7XG4gICAgY29udGV4dCA9IG5ld0NvbnRleHRcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0XG59XG4iLCJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCl7XG4gIGxvYWRGcmFtZXdvcmsoJ0NvbnRlbnRTeW5jJywgJ0NvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyJyk7XG59O1xuXG5mdW5jdGlvbiBmcmFtZXdvcmtEaXJlY3RvcnkoKXtcbiAgbGV0IGRpcmVjdG9yeSA9IENvbnRleHQoKS5zY3JpcHRQYXRoLnN0cmluZ0J5RGVsZXRpbmdMYXN0UGF0aENvbXBvbmVudCgpO1xuICByZXR1cm4gZGlyZWN0b3J5ICsgJy9mcmFtZXdvcmtzJztcbn07XG5cbmZ1bmN0aW9uIGxvYWRGcmFtZXdvcmsoZnJhbWV3b3JrTmFtZSwgZnJhbWV3b3JrQ2xhc3MpIHtcbiAgbGV0IGRpcmVjdG9yeSA9IGZyYW1ld29ya0RpcmVjdG9yeSgpO1xuICBpZiAodHJ1ZSB8fCBOU0NsYXNzRnJvbVN0cmluZyhmcmFtZXdvcmtDbGFzcykgPT0gbnVsbCkge1xuICAgIHZhciBtb2NoYSA9IE1vY2hhLnNoYXJlZFJ1bnRpbWUoKTtcbiAgICBpZihtb2NoYS5sb2FkRnJhbWV3b3JrV2l0aE5hbWVfaW5EaXJlY3RvcnkoZnJhbWV3b3JrTmFtZSwgZGlyZWN0b3J5KSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nKFwiRVJST1IgTE9BRElORyBcIiArIGZyYW1ld29ya05hbWUgKyBcIiBpbiBcIiArIGRpcmVjdG9yeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlci5qcydcbmltcG9ydCBvblN0YXJ0dXAgZnJvbSAnLi9vblN0YXJ0dXAuanMnXG5pbXBvcnQgb25Eb2N1bWVudE9wZW4gZnJvbSAnLi9vbkRvY3VtZW50T3Blbi5qcydcbmltcG9ydCBvblNlbGVjdGlvbkNoYW5nZWQgZnJvbSAnLi9vblNlbGVjdGlvbkNoYW5nZWQuanMnXG5cbmV4cG9ydCB7XG4gIGxvZ2dlcixcbiAgb25TdGFydHVwLFxuICBvbkRvY3VtZW50T3BlbixcbiAgb25TZWxlY3Rpb25DaGFuZ2VkXG59XG4iLCIvKipcbiAqIEdpdCBGaWxlIE5hbWVcbiAqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgb3BlbiBhbmQgc2VsZWN0ZWQgc2tldGNoIGZpbGUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcidcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgbG9nKFwiW0NvbnRlbnRTeW5jXSBcIiArIGNvbnRleHQpO1xufVxuIiwiLyoqXG4gKiBHaXQgRmlsZSBOYW1lXG4gKlxuICogUmV0dXJucyB0aGUgY3VycmVudGx5IG9wZW4gYW5kIHNlbGVjdGVkIHNrZXRjaCBmaWxlLlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5zaGFyZWRNYW5hZ2VyKCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4ub25PcGVuRG9jdW1lbnQoKTtcbn1cbiIsIi8qKlxuICogR2l0IEZpbGUgTmFtZVxuICpcbiAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBvcGVuIGFuZCBzZWxlY3RlZCBza2V0Y2ggZmlsZS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuc2hhcmVkTWFuYWdlcigpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLm9uU2VsZWN0aW9uQ2hhbmdlZCgpO1xufVxuIiwiLyoqXG4gKiBHaXQgRmlsZSBOYW1lXG4gKlxuICogUmV0dXJucyB0aGUgY3VycmVudGx5IG9wZW4gYW5kIHNlbGVjdGVkIHNrZXRjaCBmaWxlLlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgbGV0IG1haW4gPSBDb250ZW50U3luY1BhbmVsTWFuYWdlci5zaGFyZWRNYW5hZ2VyKCk7XG4gIGxldCByZXNwb25zZSA9IG1haW4ub25TdGFydHVwKCk7XG59XG4iLCIvKipcbiAqIFBsdWdpblxuICpcbiAqIERlZmluZXMgdGhlIHBsdWdpbiBzdHJ1Y3R1cmUgYW5kIG1ldGFkYXRhLlxuICovXG5cblxuaW1wb3J0ICogYXMgY29tbWFuZHMgZnJvbSAnLi9jb21tYW5kcydcbmltcG9ydCAqIGFzIGxpc3RlbmVycyBmcm9tICcuL2xpc3RlbmVycydcblxuZXhwb3J0IGNvbnN0IFNrZXRjaENvbnRlbnRTeW5jRXh0ZW5zaW9uID0ge1xuICBuYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBidW5kbGVOYW1lOiAnU2tldGNoQ29udGVudFN5bmMnLFxuICBkZXNjcmlwdGlvbjogJ0Fic3RyYWN0LCB2ZXJzaW9uLCBhbmQgdHJhbnNsYXRlIHlvdXIgZGVzaWduIGNvbnRlbnQuIFN5bmMgdG8gR29vZ2xlIERvY3VtZW50cyBhbmQgbW9yZS4nLFxuICBhdXRob3I6ICdTeW5jaWZ5JyxcbiAgYXV0aG9yRW1haWw6ICdzdXBwb3J0QGNvbnRlbnRzeW5jLmlvJyxcbiAgdmVyc2lvbjogJzIuMy4wJyxcbiAgaWRlbnRpZmllcjogJ2NvbS5zeW5jaWZ5LnNrZXRjaC5jb250ZW50c3luYycsXG4gIGNvbXBhdGlibGVWZXJzaW9uOiAnMy43JyxcbiAgcmVwb3NpdG9yeToge1xuICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb250ZW50c3luYy9Ta2V0Y2hDb250ZW50U3luYydcbiAgfSxcbiAgbWVudTp7XG4gICAgXCJ0aXRsZVwiOlwiVG9nZ2xlIENvbnRlbnRTeW5jXCIsXG4gICAgXCJpc1Jvb3RcIjp0cnVlLFxuICAgIFwiaXRlbXNcIjpbXG4gICAgICBcImNvbW1hbmRUb2dnbGVQYW5lbHNcIlxuICAgIF1cbiAgfSxcbiAgY29tbWFuZHM6IHtcbiAgICBjb21tYW5kUHVsbDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5wdWxsXG4gICAgfSxcbiAgICBjb21tYW5kUHVzaDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5wdXNoXG4gICAgfSxcbiAgICBjb21tYW5kR2V0RmlsZU5hbWU6IHtcbiAgICAgIHJ1bjogY29tbWFuZHMuZ2V0RmlsZU5hbWVcbiAgICB9LFxuICAgIGNvbW1hbmRPcGVuT1NYQXBwOiB7XG4gICAgICBydW46IGNvbW1hbmRzLm9wZW5PU1hBcHBcbiAgICB9LFxuICAgIGNvbW1hbmRUb2dnbGVQYW5lbHM6IHtcbiAgICAgIG5hbWU6ICdUb2dnbGUgQ29udGVudFN5bmMnLFxuICAgICAgc2hvcnRjdXQ6ICdjbWQgPScsXG4gICAgICBydW46IGNvbW1hbmRzLnRvZ2dsZVBhbmVsc1xuICAgIH0sXG4gICAgbGlzdGVuZXJPblN0YXJ0dXA6IHtcbiAgICAgIHJ1bjogbGlzdGVuZXJzLm9uU3RhcnR1cFxuICAgIH0sXG4gICAgbGlzdGVuZXJPbkRvY3VtZW50T3Blbjoge1xuICAgICAgcnVuOiBsaXN0ZW5lcnMub25Eb2N1bWVudE9wZW5cbiAgICB9LFxuICAgIGxpc3RlbmVyT25TZWxlY3Rpb25DaGFuZ2VkOiB7XG4gICAgICBydW46IGxpc3RlbmVycy5vblNlbGVjdGlvbkNoYW5nZWRcbiAgICB9LFxuICAgIHN0YXJ0VXA6IHtcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBcIlN0YXJ0dXBcIjogXCJfX19saXN0ZW5lck9uU3RhcnR1cF9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIk9wZW5Eb2N1bWVudFwiOiBcIl9fX2xpc3RlbmVyT25Eb2N1bWVudE9wZW5fcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTZWxlY3Rpb25DaGFuZ2VkLmZpbmlzaFwiOiBcIl9fX2xpc3RlbmVyT25TZWxlY3Rpb25DaGFuZ2VkX3J1bl9oYW5kbGVyX1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
