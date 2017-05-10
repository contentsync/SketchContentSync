var __globals = this;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.togglePanels = undefined;

var _togglePanels = require('./togglePanels.js');

var _togglePanels2 = _interopRequireDefault(_togglePanels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.togglePanels = _togglePanels2.default;

},{"./togglePanels.js":2}],2:[function(require,module,exports){
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

},{"../context":3,"../library/framework_manager":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"../context":3}],5:[function(require,module,exports){
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

},{"./logger.js":6,"./onDocumentOpen.js":7,"./onSelectionChanged.js":8,"./onStartup.js":9}],6:[function(require,module,exports){
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

},{"../context":3,"../library/framework_manager":4}],7:[function(require,module,exports){
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

},{"../context":3,"../library/framework_manager":4}],8:[function(require,module,exports){
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

},{"../context":3,"../library/framework_manager":4}],9:[function(require,module,exports){
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

},{"../context":3,"../library/framework_manager":4}],10:[function(require,module,exports){
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
  version: '2.4.5',
  identifier: 'com.syncify.sketch.contentsync',
  compatibleVersion: '3.7',
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
    listenerLogger: {
      run: listeners.logger
    },
    startUp: {
      handlers: {
        actions: {
          "*": "___listenerLogger_run_handler_",
          "Startup": "___listenerOnStartup_run_handler_",
          "OpenDocument": "___listenerOnDocumentOpen_run_handler_",
          "SelectionChanged.finish": "___listenerOnSelectionChanged_run_handler_"
        }
      }
    }
  }
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

__globals.___listenerLogger_run_handler_ = function (context, params) {
  SketchContentSyncExtension.commands['listenerLogger'].run(context, params);
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
    "version": "2.4.5",
    "identifier": "com.syncify.sketch.contentsync",
    "compatibleVersion": "3.7",
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
            "identifier": "listenerLogger",
            "handler": "___listenerLogger_run_handler_"
        },
        {
            "script": "plugin.js",
            "handlers": {
                "actions": {
                    "*": "___listenerLogger_run_handler_",
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

},{"./commands":1,"./listeners":5}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tbWFuZHMvaW5kZXguanMiLCJzcmMvY29tbWFuZHMvdG9nZ2xlUGFuZWxzLmpzIiwic3JjL2NvbnRleHQuanMiLCJzcmMvbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlci5qcyIsInNyYy9saXN0ZW5lcnMvaW5kZXguanMiLCJzcmMvbGlzdGVuZXJzL2xvZ2dlci5qcyIsInNyYy9saXN0ZW5lcnMvb25Eb2N1bWVudE9wZW4uanMiLCJzcmMvbGlzdGVuZXJzL29uU2VsZWN0aW9uQ2hhbmdlZC5qcyIsInNyYy9saXN0ZW5lcnMvb25TdGFydHVwLmpzIiwic3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7Ozs7O1FBR0UsWTs7Ozs7Ozs7O0FDRUY7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBTlo7Ozs7O2tCQVFlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixLQUF4QixHQUFnQyxJQUFoQyxFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssWUFBTCxFQUFmO0FBQ0EsTUFBSSxRQUFKO0FBQ0QsQzs7Ozs7Ozs7O2tCQ0pjLFVBQVUsVUFBVixFQUFzQjs7QUFFbkM7QUFDQSxNQUFJLFVBQUosRUFBZ0I7QUFDZCxjQUFVLFVBQVY7QUFDRDs7QUFFRCxTQUFPLE9BQVA7QUFDRCxDOztBQWxCRDs7Ozs7O0FBTUE7QUFDQSxJQUFJLFVBQVUsSUFBZDs7QUFFQTs7Ozs7Ozs7UUNOZ0Isd0IsR0FBQSx3Qjs7QUFGaEI7Ozs7OztBQUVPLFNBQVMsd0JBQVQsR0FBbUM7QUFDeEMsZ0JBQWMsYUFBZCxFQUE2Qix5QkFBN0I7QUFDRDs7QUFFRCxTQUFTLGtCQUFULEdBQTZCO0FBQzNCLE1BQUksWUFBWSx5QkFBVSxVQUFWLENBQXFCLGlDQUFyQixFQUFoQjtBQUNBLFNBQU8sWUFBWSxhQUFuQjtBQUNEOztBQUVELFNBQVMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxjQUF0QyxFQUFzRDtBQUNwRCxNQUFJLFlBQVksb0JBQWhCO0FBQ0EsTUFBSSxRQUFRLGtCQUFrQixjQUFsQixLQUFxQyxJQUFqRCxFQUF1RDtBQUNyRCxRQUFJLFFBQVEsTUFBTSxhQUFOLEVBQVo7QUFDQSxRQUFHLE1BQU0saUNBQU4sQ0FBd0MsYUFBeEMsRUFBdUQsU0FBdkQsQ0FBSCxFQUFxRTtBQUNuRSxhQUFPLElBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLG1CQUFtQixhQUFuQixHQUFtQyxNQUFuQyxHQUE0QyxTQUFoRDtBQUNBLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FSRCxNQVFPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7Ozs7Ozs7OztBQ3pCRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBR0UsTTtRQUNBLFM7UUFDQSxjO1FBQ0Esa0I7Ozs7Ozs7OztBQ0hGOzs7O0FBQ0E7O0lBQVksZ0I7Ozs7OztBQVBaOzs7Ozs7a0JBU2UsVUFBQyxPQUFELEVBQWE7QUFDMUIsTUFBSSxtQkFBbUIsT0FBdkI7QUFDRCxDOzs7Ozs7Ozs7QUNMRDs7OztBQUNBOztJQUFZLGdCOzs7Ozs7QUFQWjs7Ozs7O2tCQVNlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixhQUF4QixFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssY0FBTCxFQUFmO0FBQ0QsQzs7Ozs7Ozs7O0FDUkQ7Ozs7QUFDQTs7SUFBWSxnQjs7Ozs7O0FBUFo7Ozs7OztrQkFTZSxVQUFDLE9BQUQsRUFBYTtBQUMxQix5QkFBUSxPQUFSO0FBQ0EsbUJBQWlCLHdCQUFqQjtBQUNBLE1BQUksT0FBTyx3QkFBd0IsYUFBeEIsRUFBWDtBQUNBLE1BQUksV0FBVyxLQUFLLGtCQUFMLEVBQWY7QUFDRCxDOzs7Ozs7Ozs7QUNSRDs7OztBQUNBOztJQUFZLGdCOzs7Ozs7QUFQWjs7Ozs7O2tCQVNlLFVBQUMsT0FBRCxFQUFhO0FBQzFCLHlCQUFRLE9BQVI7QUFDQSxtQkFBaUIsd0JBQWpCO0FBQ0EsTUFBSSxPQUFPLHdCQUF3QixhQUF4QixFQUFYO0FBQ0EsTUFBSSxXQUFXLEtBQUssU0FBTCxFQUFmO0FBQ0QsQzs7Ozs7Ozs7OztBQ1BEOztJQUFZLFE7O0FBQ1o7O0lBQVksUzs7OztBQVJaOzs7Ozs7QUFVTyxJQUFNLGtFQUE2QjtBQUN4QyxRQUFNLG1CQURrQztBQUV4QyxjQUFZLG1CQUY0QjtBQUd4QyxlQUFhLDBGQUgyQjtBQUl4QyxVQUFRLFNBSmdDO0FBS3hDLGVBQWEsd0JBTDJCO0FBTXhDLFdBQVMsT0FOK0I7QUFPeEMsY0FBWSxnQ0FQNEI7QUFReEMscUJBQW1CLEtBUnFCO0FBU3hDLGNBQVk7QUFDVixTQUFLO0FBREssR0FUNEI7QUFZeEMsUUFBSztBQUNILGFBQVEsb0JBREw7QUFFSCxjQUFTLElBRk47QUFHSCxhQUFRLENBQ04scUJBRE07QUFITCxHQVptQztBQW1CeEMsWUFBVTtBQUNSLHlCQUFxQjtBQUNuQixZQUFNLG9CQURhO0FBRW5CLGdCQUFVLE9BRlM7QUFHbkIsV0FBSyxTQUFTO0FBSEssS0FEYjtBQU1SLHVCQUFtQjtBQUNqQixXQUFLLFVBQVU7QUFERSxLQU5YO0FBU1IsNEJBQXdCO0FBQ3RCLFdBQUssVUFBVTtBQURPLEtBVGhCO0FBWVIsZ0NBQTRCO0FBQzFCLFdBQUssVUFBVTtBQURXLEtBWnBCO0FBZVIsb0JBQWdCO0FBQ2QsV0FBSyxVQUFVO0FBREQsS0FmUjtBQWtCUixhQUFTO0FBQ1AsZ0JBQVU7QUFDUixpQkFBUztBQUNQLGVBQUssZ0NBREU7QUFFUCxxQkFBVyxtQ0FGSjtBQUdQLDBCQUFnQix3Q0FIVDtBQUlQLHFDQUEyQjtBQUpwQjtBQUREO0FBREg7QUFsQkQ7QUFuQjhCLENBQW5DIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB0b2dnbGVQYW5lbHMgZnJvbSAnLi90b2dnbGVQYW5lbHMuanMnXG5cbmV4cG9ydCB7XG4gIHRvZ2dsZVBhbmVsc1xufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLmFsbG9jKCkuaW5pdCgpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLnRvZ2dsZVBhbmVscygpO1xuICBsb2cocmVzcG9uc2UpO1xufVxuIiwiLyoqXG4gKiBDb250ZXh0XG4gKlxuICogUHJvdmlkZXMgYSBjb252ZW5pZW50IHdheSB0byBzZXQgYW5kIGdldCB0aGUgY3VycmVudCBjb21tYW5kIGNvbnRleHQuXG4gKi9cblxuLy9zdG9yZSBjb250ZXh0XG5sZXQgY29udGV4dCA9IG51bGxcblxuLy9zZXQgYW5kIGdldCBjb250ZXh0IHZpYSB0aGUgc2FtZSBmdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5ld0NvbnRleHQpIHtcblxuICAvL3NldCBuZXcgY29udGV4dFxuICBpZiAobmV3Q29udGV4dCkge1xuICAgIGNvbnRleHQgPSBuZXdDb250ZXh0XG4gIH1cblxuICByZXR1cm4gY29udGV4dFxufVxuIiwiXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpe1xuICBsb2FkRnJhbWV3b3JrKCdDb250ZW50U3luYycsICdDb250ZW50U3luY1BhbmVsTWFuYWdlcicpO1xufTtcblxuZnVuY3Rpb24gZnJhbWV3b3JrRGlyZWN0b3J5KCl7XG4gIGxldCBkaXJlY3RvcnkgPSBDb250ZXh0KCkuc2NyaXB0UGF0aC5zdHJpbmdCeURlbGV0aW5nTGFzdFBhdGhDb21wb25lbnQoKTtcbiAgcmV0dXJuIGRpcmVjdG9yeSArICcvZnJhbWV3b3Jrcyc7XG59O1xuXG5mdW5jdGlvbiBsb2FkRnJhbWV3b3JrKGZyYW1ld29ya05hbWUsIGZyYW1ld29ya0NsYXNzKSB7XG4gIGxldCBkaXJlY3RvcnkgPSBmcmFtZXdvcmtEaXJlY3RvcnkoKTtcbiAgaWYgKHRydWUgfHwgTlNDbGFzc0Zyb21TdHJpbmcoZnJhbWV3b3JrQ2xhc3MpID09IG51bGwpIHtcbiAgICB2YXIgbW9jaGEgPSBNb2NoYS5zaGFyZWRSdW50aW1lKCk7XG4gICAgaWYobW9jaGEubG9hZEZyYW1ld29ya1dpdGhOYW1lX2luRGlyZWN0b3J5KGZyYW1ld29ya05hbWUsIGRpcmVjdG9yeSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZyhcIkVSUk9SIExPQURJTkcgXCIgKyBmcmFtZXdvcmtOYW1lICsgXCIgaW4gXCIgKyBkaXJlY3RvcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsImltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXIuanMnXG5pbXBvcnQgb25TdGFydHVwIGZyb20gJy4vb25TdGFydHVwLmpzJ1xuaW1wb3J0IG9uRG9jdW1lbnRPcGVuIGZyb20gJy4vb25Eb2N1bWVudE9wZW4uanMnXG5pbXBvcnQgb25TZWxlY3Rpb25DaGFuZ2VkIGZyb20gJy4vb25TZWxlY3Rpb25DaGFuZ2VkLmpzJ1xuXG5leHBvcnQge1xuICBsb2dnZXIsXG4gIG9uU3RhcnR1cCxcbiAgb25Eb2N1bWVudE9wZW4sXG4gIG9uU2VsZWN0aW9uQ2hhbmdlZFxufVxuIiwiLyoqXG4gKiBHaXQgRmlsZSBOYW1lXG4gKlxuICogUmV0dXJucyB0aGUgY3VycmVudGx5IG9wZW4gYW5kIHNlbGVjdGVkIHNrZXRjaCBmaWxlLlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4uL2xpYnJhcnkvZnJhbWV3b3JrX21hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIGxvZyhcIltDb250ZW50U3luY10gXCIgKyBjb250ZXh0KTtcbn1cbiIsIi8qKlxuICogR2l0IEZpbGUgTmFtZVxuICpcbiAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBvcGVuIGFuZCBzZWxlY3RlZCBza2V0Y2ggZmlsZS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuc2hhcmVkTWFuYWdlcigpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLm9uT3BlbkRvY3VtZW50KCk7XG59XG4iLCIvKipcbiAqIEdpdCBGaWxlIE5hbWVcbiAqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgb3BlbiBhbmQgc2VsZWN0ZWQgc2tldGNoIGZpbGUuXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi4vbGlicmFyeS9mcmFtZXdvcmtfbWFuYWdlcidcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICBsZXQgbWFpbiA9IENvbnRlbnRTeW5jUGFuZWxNYW5hZ2VyLnNoYXJlZE1hbmFnZXIoKTtcbiAgbGV0IHJlc3BvbnNlID0gbWFpbi5vblNlbGVjdGlvbkNoYW5nZWQoKTtcbn1cbiIsIi8qKlxuICogR2l0IEZpbGUgTmFtZVxuICpcbiAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBvcGVuIGFuZCBzZWxlY3RlZCBza2V0Y2ggZmlsZS5cbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuLi9saWJyYXJ5L2ZyYW1ld29ya19tYW5hZ2VyJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIGxldCBtYWluID0gQ29udGVudFN5bmNQYW5lbE1hbmFnZXIuc2hhcmVkTWFuYWdlcigpO1xuICBsZXQgcmVzcG9uc2UgPSBtYWluLm9uU3RhcnR1cCgpO1xufVxuIiwiLyoqXG4gKiBQbHVnaW5cbiAqXG4gKiBEZWZpbmVzIHRoZSBwbHVnaW4gc3RydWN0dXJlIGFuZCBtZXRhZGF0YS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIGNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnXG5pbXBvcnQgKiBhcyBsaXN0ZW5lcnMgZnJvbSAnLi9saXN0ZW5lcnMnXG5cbmV4cG9ydCBjb25zdCBTa2V0Y2hDb250ZW50U3luY0V4dGVuc2lvbiA9IHtcbiAgbmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgYnVuZGxlTmFtZTogJ1NrZXRjaENvbnRlbnRTeW5jJyxcbiAgZGVzY3JpcHRpb246ICdBYnN0cmFjdCwgdmVyc2lvbiwgYW5kIHRyYW5zbGF0ZSB5b3VyIGRlc2lnbiBjb250ZW50LiBTeW5jIHRvIEdvb2dsZSBEb2N1bWVudHMgYW5kIG1vcmUuJyxcbiAgYXV0aG9yOiAnU3luY2lmeScsXG4gIGF1dGhvckVtYWlsOiAnc3VwcG9ydEBjb250ZW50c3luYy5pbycsXG4gIHZlcnNpb246ICcyLjQuNScsXG4gIGlkZW50aWZpZXI6ICdjb20uc3luY2lmeS5za2V0Y2guY29udGVudHN5bmMnLFxuICBjb21wYXRpYmxlVmVyc2lvbjogJzMuNycsXG4gIHJlcG9zaXRvcnk6IHtcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY29udGVudHN5bmMvU2tldGNoQ29udGVudFN5bmMuc2tldGNocGx1Z2luJ1xuICB9LFxuICBtZW51OntcbiAgICBcInRpdGxlXCI6XCJUb2dnbGUgQ29udGVudFN5bmNcIixcbiAgICBcImlzUm9vdFwiOnRydWUsXG4gICAgXCJpdGVtc1wiOltcbiAgICAgIFwiY29tbWFuZFRvZ2dsZVBhbmVsc1wiXG4gICAgXVxuICB9LFxuICBjb21tYW5kczoge1xuICAgIGNvbW1hbmRUb2dnbGVQYW5lbHM6IHtcbiAgICAgIG5hbWU6ICdUb2dnbGUgQ29udGVudFN5bmMnLFxuICAgICAgc2hvcnRjdXQ6ICdjbWQgWycsXG4gICAgICBydW46IGNvbW1hbmRzLnRvZ2dsZVBhbmVsc1xuICAgIH0sXG4gICAgbGlzdGVuZXJPblN0YXJ0dXA6IHtcbiAgICAgIHJ1bjogbGlzdGVuZXJzLm9uU3RhcnR1cFxuICAgIH0sXG4gICAgbGlzdGVuZXJPbkRvY3VtZW50T3Blbjoge1xuICAgICAgcnVuOiBsaXN0ZW5lcnMub25Eb2N1bWVudE9wZW5cbiAgICB9LFxuICAgIGxpc3RlbmVyT25TZWxlY3Rpb25DaGFuZ2VkOiB7XG4gICAgICBydW46IGxpc3RlbmVycy5vblNlbGVjdGlvbkNoYW5nZWRcbiAgICB9LFxuICAgIGxpc3RlbmVyTG9nZ2VyOiB7XG4gICAgICBydW46IGxpc3RlbmVycy5sb2dnZXJcbiAgICB9LFxuICAgIHN0YXJ0VXA6IHtcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBcIipcIjogXCJfX19saXN0ZW5lckxvZ2dlcl9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIlN0YXJ0dXBcIjogXCJfX19saXN0ZW5lck9uU3RhcnR1cF9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIk9wZW5Eb2N1bWVudFwiOiBcIl9fX2xpc3RlbmVyT25Eb2N1bWVudE9wZW5fcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTZWxlY3Rpb25DaGFuZ2VkLmZpbmlzaFwiOiBcIl9fX2xpc3RlbmVyT25TZWxlY3Rpb25DaGFuZ2VkX3J1bl9oYW5kbGVyX1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
