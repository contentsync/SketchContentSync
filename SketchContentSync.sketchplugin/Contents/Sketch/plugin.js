var __globals = this;(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Pull
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  (0, _context["default"])(context);
  doc = (0, _context["default"])().document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.actionPull(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Push
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  (0, _context["default"])(context);
  doc = (0, _context["default"])().document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.actionPush(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Toggle
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  (0, _context["default"])(context);
  doc = (0, _context["default"])().document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.actionSelectedLayersDisable(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Toggle
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  (0, _context["default"])(context);
  doc = (0, _context["default"])().document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.actionSelectedLayersEnable(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],5:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Toggle
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  (0, _context["default"])(context);
  doc = (0, _context["default"])().document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.actionToggle(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContentSyncFramework = loadContentSyncFramework;

var _context = _interopRequireDefault(require("../context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loadContentSyncFramework() {
  loadFramework('ContentSyncRealtime', 'ContentSyncRealtime');
  loadFramework('ContentSync', 'ContentSync');
}

;

function frameworkDirectory() {
  var directory = (0, _context["default"])().scriptPath.stringByDeletingLastPathComponent();
  return directory + '/frameworks';
}

;

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
}

;

},{"../context":12}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "actionPull", {
  enumerable: true,
  get: function get() {
    return _actionPull["default"];
  }
});
Object.defineProperty(exports, "actionPush", {
  enumerable: true,
  get: function get() {
    return _actionPush["default"];
  }
});
Object.defineProperty(exports, "actionSelectedLayersDisable", {
  enumerable: true,
  get: function get() {
    return _actionSelectedLayersDisable["default"];
  }
});
Object.defineProperty(exports, "actionSelectedLayersEnable", {
  enumerable: true,
  get: function get() {
    return _actionSelectedLayersEnable["default"];
  }
});
Object.defineProperty(exports, "actionToggle", {
  enumerable: true,
  get: function get() {
    return _actionToggle["default"];
  }
});
Object.defineProperty(exports, "load", {
  enumerable: true,
  get: function get() {
    return _load["default"];
  }
});
Object.defineProperty(exports, "openDocument", {
  enumerable: true,
  get: function get() {
    return _openDocument["default"];
  }
});
Object.defineProperty(exports, "selectionChanged", {
  enumerable: true,
  get: function get() {
    return _selectionChanged["default"];
  }
});
Object.defineProperty(exports, "unload", {
  enumerable: true,
  get: function get() {
    return _unload["default"];
  }
});

var _load = _interopRequireDefault(require("./load.js"));

var _unload = _interopRequireDefault(require("./unload.js"));

var _openDocument = _interopRequireDefault(require("./openDocument.js"));

var _selectionChanged = _interopRequireDefault(require("./selectionChanged.js"));

var _actionToggle = _interopRequireDefault(require("./actionToggle.js"));

var _actionPush = _interopRequireDefault(require("./actionPush.js"));

var _actionPull = _interopRequireDefault(require("./actionPull.js"));

var _actionSelectedLayersDisable = _interopRequireDefault(require("./actionSelectedLayersDisable.js"));

var _actionSelectedLayersEnable = _interopRequireDefault(require("./actionSelectedLayersEnable.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./actionPull.js":1,"./actionPush.js":2,"./actionSelectedLayersDisable.js":3,"./actionSelectedLayersEnable.js":4,"./actionToggle.js":5,"./load.js":8,"./openDocument.js":9,"./selectionChanged.js":10,"./unload.js":11}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Push
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  coscript.setShouldKeepAround(true);
  (0, _context["default"])(context);
  logger = log;
  doc = (0, _context["default"])().document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.load();
  } catch (error) {
    logger("[ContentSyncRealtime] ERROR");
    logger(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],9:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Push
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  (0, _context["default"])(context);
  doc = (0, _context["default"])().actionContext.document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.onOpenDocument(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],10:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Push
 *
 */
var doc;
var logger;

var _default = function _default(context) {
  (0, _context["default"])(context);
  doc = (0, _context["default"])().actionContext.document;
  FrameworkManager.loadContentSyncFramework();

  try {
    ContentSyncRealtime.onSelectionChanged(doc);
  } catch (error) {
    log("[ContentSyncRealtime] ERROR");
    log(error);
  }
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("../context"));

var FrameworkManager = _interopRequireWildcard(require("./frameworks"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Push
 *
 */
var _default = function _default(context) {
  context = (0, _context["default"])(context);
  FrameworkManager.loadContentSyncFramework();
  ContentSyncRealtime.unload();
};

exports["default"] = _default;

},{"../context":12,"./frameworks":6}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/**
 * Context
 *
 * Provides a convenient way to set and get the current command context.
 */
//store context
var context = null; //set and get context via the same function

function _default(newContext) {
  //set new context
  if (newContext) {
    context = newContext;
  }

  return context;
}

},{}],13:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchContentSyncExtension = void 0;

var commands = _interopRequireWildcard(require("./commands"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Plugin
 *
 * Defines the plugin structure and metadata.
 */
var SketchContentSyncExtension = {
  name: 'ContentSync',
  icon: 'plugin_logo.png',
  description: 'Sync your content to and from Google Spreadsheets and Microsoft 365 Excel. Abstract, version, and translate your design content.',
  author: 'Syncify',
  website: 'https://www.contentsync.io',
  homepage: 'https://www.contentsync.io',
  version: '8.6.3',
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
};
exports.SketchContentSyncExtension = SketchContentSyncExtension;

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
    "version": "8.6.3",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvYWN0aW9uUHVsbC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25QdXNoLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL2FjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9hY3Rpb25Ub2dnbGUuanMiLCJidWlsZC1zcmMvY29tbWFuZHMvZnJhbWV3b3Jrcy5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9pbmRleC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9sb2FkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL29wZW5Eb2N1bWVudC5qcyIsImJ1aWxkLXNyYy9jb21tYW5kcy9zZWxlY3Rpb25DaGFuZ2VkLmpzIiwiYnVpbGQtc3JjL2NvbW1hbmRzL3VubG9hZC5qcyIsImJ1aWxkLXNyYy9jb250ZXh0LmpzIiwiYnVpbGQtc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0tBOztBQUNBOzs7Ozs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBSSxHQUFKO0FBQ0EsSUFBSSxNQUFKOztlQUVlLGtCQUFDLE9BQUQsRUFBYTtBQUMxQiwyQkFBUSxPQUFSO0FBQ0EsRUFBQSxHQUFHLEdBQUcsMkJBQVUsUUFBaEI7QUFDQSxFQUFBLGdCQUFnQixDQUFDLHdCQUFqQjs7QUFDQSxNQUFJO0FBQ0YsSUFBQSxtQkFBbUIsQ0FBQyxVQUFwQixDQUErQixHQUEvQjtBQUNELEdBRkQsQ0FFRSxPQUFNLEtBQU4sRUFBWTtBQUNaLElBQUEsR0FBRyxDQUFDLDZCQUFELENBQUg7QUFDQSxJQUFBLEdBQUcsQ0FBQyxLQUFELENBQUg7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7O0FDaEJE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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogUHVsbFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uUHVsbChkb2MpO1xuICB9IGNhdGNoKGVycm9yKXtcbiAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgbG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25QdXNoKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFRvZ2dsZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlKGRvYyk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZyhcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2coZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFRvZ2dsZVxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxudmFyIGRvYztcbnZhciBsb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0KSA9PiB7XG4gIENvbnRleHQoY29udGV4dClcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUuYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGUoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVG9nZ2xlXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgQ29udGV4dChjb250ZXh0KVxuICBkb2MgPSBDb250ZXh0KCkuZG9jdW1lbnQ7XG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5hY3Rpb25Ub2dnbGUoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKXtcbiAgbG9hZEZyYW1ld29yaygnQ29udGVudFN5bmNSZWFsdGltZScsICdDb250ZW50U3luY1JlYWx0aW1lJyk7XG4gIGxvYWRGcmFtZXdvcmsoJ0NvbnRlbnRTeW5jJywgJ0NvbnRlbnRTeW5jJyk7XG59O1xuXG5mdW5jdGlvbiBmcmFtZXdvcmtEaXJlY3RvcnkoKXtcbiAgbGV0IGRpcmVjdG9yeSA9IENvbnRleHQoKS5zY3JpcHRQYXRoLnN0cmluZ0J5RGVsZXRpbmdMYXN0UGF0aENvbXBvbmVudCgpO1xuICByZXR1cm4gZGlyZWN0b3J5ICsgJy9mcmFtZXdvcmtzJztcbn07XG5cbmZ1bmN0aW9uIGxvYWRGcmFtZXdvcmsoZnJhbWV3b3JrTmFtZSwgZnJhbWV3b3JrQ2xhc3MpIHtcbiAgbGV0IGRpcmVjdG9yeSA9IGZyYW1ld29ya0RpcmVjdG9yeSgpO1xuICBpZiAodHJ1ZSB8fCBOU0NsYXNzRnJvbVN0cmluZyhmcmFtZXdvcmtDbGFzcykgPT0gbnVsbCkge1xuICAgIHZhciBtb2NoYSA9IE1vY2hhLnNoYXJlZFJ1bnRpbWUoKTtcbiAgICBpZihtb2NoYS5sb2FkRnJhbWV3b3JrV2l0aE5hbWVfaW5EaXJlY3RvcnkoZnJhbWV3b3JrTmFtZSwgZGlyZWN0b3J5KSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nKFwiRVJST1IgTE9BRElORyBcIiArIGZyYW1ld29ya05hbWUgKyBcIiBpbiBcIiArIGRpcmVjdG9yeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkLmpzJ1xuaW1wb3J0IHVubG9hZCBmcm9tICcuL3VubG9hZC5qcydcblxuaW1wb3J0IG9wZW5Eb2N1bWVudCBmcm9tICcuL29wZW5Eb2N1bWVudC5qcydcbmltcG9ydCBzZWxlY3Rpb25DaGFuZ2VkIGZyb20gJy4vc2VsZWN0aW9uQ2hhbmdlZC5qcyc7XG5cbmltcG9ydCBhY3Rpb25Ub2dnbGUgZnJvbSAnLi9hY3Rpb25Ub2dnbGUuanMnXG5pbXBvcnQgYWN0aW9uUHVzaCBmcm9tICcuL2FjdGlvblB1c2guanMnXG5pbXBvcnQgYWN0aW9uUHVsbCBmcm9tICcuL2FjdGlvblB1bGwuanMnXG5cbmltcG9ydCBhY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUgZnJvbSAnLi9hY3Rpb25TZWxlY3RlZExheWVyc0Rpc2FibGUuanMnXG5pbXBvcnQgYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGUgZnJvbSAnLi9hY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZS5qcydcblxuZXhwb3J0IHtcbiAgbG9hZCxcbiAgdW5sb2FkLFxuICBvcGVuRG9jdW1lbnQsXG4gIHNlbGVjdGlvbkNoYW5nZWQsXG4gIGFjdGlvblRvZ2dsZSxcbiAgYWN0aW9uUHVzaCxcbiAgYWN0aW9uUHVsbCxcbiAgYWN0aW9uU2VsZWN0ZWRMYXllcnNEaXNhYmxlLFxuICBhY3Rpb25TZWxlY3RlZExheWVyc0VuYWJsZVxufVxuIiwiLyoqXG4gKiBQdXNoXG4gKlxuICovXG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuXG52YXIgZG9jO1xudmFyIGxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgY29zY3JpcHQuc2V0U2hvdWxkS2VlcEFyb3VuZCh0cnVlKVxuICBDb250ZXh0KGNvbnRleHQpXG4gIGxvZ2dlciA9IGxvZztcbiAgZG9jID0gQ29udGV4dCgpLmRvY3VtZW50O1xuXG4gIEZyYW1ld29ya01hbmFnZXIubG9hZENvbnRlbnRTeW5jRnJhbWV3b3JrKCk7XG4gIHRyeSB7XG4gICAgQ29udGVudFN5bmNSZWFsdGltZS5sb2FkKCk7XG4gIH0gY2F0Y2goZXJyb3Ipe1xuICAgIGxvZ2dlcihcIltDb250ZW50U3luY1JlYWx0aW1lXSBFUlJPUlwiKTtcbiAgICBsb2dnZXIoZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFB1c2hcbiAqXG4gKi9cblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBGcmFtZXdvcmtNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3Jrcyc7XG5cbnZhciBkb2M7XG52YXIgbG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICBDb250ZXh0KGNvbnRleHQpXG4gIGRvYyA9IENvbnRleHQoKS5hY3Rpb25Db250ZXh0LmRvY3VtZW50O1xuICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICB0cnkge1xuICAgIENvbnRlbnRTeW5jUmVhbHRpbWUub25PcGVuRG9jdW1lbnQoZG9jKTtcbiAgfSBjYXRjaChlcnJvcil7XG4gICAgbG9nKFwiW0NvbnRlbnRTeW5jUmVhbHRpbWVdIEVSUk9SXCIpO1xuICAgIGxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG4gaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG4gaW1wb3J0ICogYXMgRnJhbWV3b3JrTWFuYWdlciBmcm9tICcuL2ZyYW1ld29ya3MnO1xuIFxuIHZhciBkb2M7XG4gdmFyIGxvZ2dlcjtcbiBcbiBleHBvcnQgZGVmYXVsdCAoY29udGV4dCkgPT4ge1xuICAgQ29udGV4dChjb250ZXh0KVxuICAgZG9jID0gQ29udGV4dCgpLmFjdGlvbkNvbnRleHQuZG9jdW1lbnQ7XG4gICBGcmFtZXdvcmtNYW5hZ2VyLmxvYWRDb250ZW50U3luY0ZyYW1ld29yaygpO1xuICAgdHJ5IHtcbiAgICAgQ29udGVudFN5bmNSZWFsdGltZS5vblNlbGVjdGlvbkNoYW5nZWQoZG9jKTtcbiAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICBsb2coXCJbQ29udGVudFN5bmNSZWFsdGltZV0gRVJST1JcIik7XG4gICAgIGxvZyhlcnJvcik7XG4gICB9XG4gfVxuICIsIi8qKlxuICogUHVzaFxuICpcbiAqL1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCAqIGFzIEZyYW1ld29ya01hbmFnZXIgZnJvbSAnLi9mcmFtZXdvcmtzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRleHQpID0+IHtcbiAgY29udGV4dCA9IENvbnRleHQoY29udGV4dClcbiAgRnJhbWV3b3JrTWFuYWdlci5sb2FkQ29udGVudFN5bmNGcmFtZXdvcmsoKTtcbiAgQ29udGVudFN5bmNSZWFsdGltZS51bmxvYWQoKTtcbn1cbiIsIi8qKlxuICogQ29udGV4dFxuICpcbiAqIFByb3ZpZGVzIGEgY29udmVuaWVudCB3YXkgdG8gc2V0IGFuZCBnZXQgdGhlIGN1cnJlbnQgY29tbWFuZCBjb250ZXh0LlxuICovXG5cbi8vc3RvcmUgY29udGV4dFxubGV0IGNvbnRleHQgPSBudWxsXG5cbi8vc2V0IGFuZCBnZXQgY29udGV4dCB2aWEgdGhlIHNhbWUgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuZXdDb250ZXh0KSB7XG5cbiAgLy9zZXQgbmV3IGNvbnRleHRcbiAgaWYgKG5ld0NvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gbmV3Q29udGV4dFxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cbiIsIi8qKlxuICogUGx1Z2luXG4gKlxuICogRGVmaW5lcyB0aGUgcGx1Z2luIHN0cnVjdHVyZSBhbmQgbWV0YWRhdGEuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBjb21tYW5kcyBmcm9tICcuL2NvbW1hbmRzJ1xuXG5leHBvcnQgY29uc3QgU2tldGNoQ29udGVudFN5bmNFeHRlbnNpb24gPSB7XG4gIG5hbWU6ICdDb250ZW50U3luYycsXG4gIGljb246ICdwbHVnaW5fbG9nby5wbmcnLFxuICBkZXNjcmlwdGlvbjogJ1N5bmMgeW91ciBjb250ZW50IHRvIGFuZCBmcm9tIEdvb2dsZSBTcHJlYWRzaGVldHMgYW5kIE1pY3Jvc29mdCAzNjUgRXhjZWwuIEFic3RyYWN0LCB2ZXJzaW9uLCBhbmQgdHJhbnNsYXRlIHlvdXIgZGVzaWduIGNvbnRlbnQuJyxcbiAgYXV0aG9yOiAnU3luY2lmeScsXG4gIHdlYnNpdGU6ICdodHRwczovL3d3dy5jb250ZW50c3luYy5pbycsXG4gIGhvbWVwYWdlOiAnaHR0cHM6Ly93d3cuY29udGVudHN5bmMuaW8nLFxuICB2ZXJzaW9uOiAnOC42LjMnLFxuICBpZGVudGlmaWVyOiAnY29tLnN5bmNpZnkuc2tldGNoLmNvbnRlbnRzeW5jJyxcbiAgYXBwY2FzdDogJ2h0dHBzOi8vY2FzdC5hcHBjYXN0aWZ5LmNvbS9jb250ZW50c3luYy9jb250ZW50c3luYzYueG1sJyxcbiAgY29tcGF0aWJsZVZlcnNpb246ICc3MScsXG4gIG1heENvbXBhdGlibGVWZXJzaW9uOiAnNzEnLFxuICBidW5kbGVWZXJzaW9uOiAnMScsXG4gIGJ1bmRsZU5hbWU6ICdTa2V0Y2hDb250ZW50U3luYycsXG4gIGF1dGhvckVtYWlsOiAnc3VwcG9ydEBjb250ZW50c3luYy5pbycsXG4gIHJlcG9zaXRvcnk6IHtcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY29udGVudHN5bmMvU2tldGNoQ29udGVudFN5bmMnXG4gIH0sXG4gIG1lbnU6e1xuICAgIFwidGl0bGVcIjpcIkNvbnRlbnRTeW5jXCIsXG4gICAgXCJpdGVtc1wiOltcbiAgICAgIFwiYWN0aW9uUHVzaENvbnRlbnRTeW5jXCIsXG4gICAgICBcImFjdGlvblB1bGxDb250ZW50U3luY1wiLFxuICAgICAgXCItXCIsXG4gICAgICBcImFjdGlvbkRpc2FibGVMYXllcnNcIixcbiAgICAgIFwiYWN0aW9uRW5hYmxlTGF5ZXJzXCIsXG4gICAgICBcIi1cIixcbiAgICAgIFwiYWN0aW9uVG9nZ2xlQ29udGVudFN5bmNcIlxuICAgIF1cbiAgfSxcbiAgY29tbWFuZHM6IHtcbiAgICBsaXN0ZW5lck9uU3RhcnR1cDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5sb2FkXG4gICAgfSxcbiAgICBsaXN0ZW5lck9uU2h1dGRvd246IHtcbiAgICAgIHJ1bjogY29tbWFuZHMudW5sb2FkXG4gICAgfSxcbiAgICBsaXN0ZW5lck9wZW5Eb2N1bWVudDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5vcGVuRG9jdW1lbnRcbiAgICB9LFxuICAgIGxpc3RlbmVyU2VsZWN0aW9uQ2hhbmdlZDoge1xuICAgICAgcnVuOiBjb21tYW5kcy5zZWxlY3Rpb25DaGFuZ2VkXG4gICAgfSxcbiAgICBzdGFydFVwOiB7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgXCJTdGFydHVwXCI6IFwiX19fbGlzdGVuZXJPblN0YXJ0dXBfcnVuX2hhbmRsZXJfXCIsXG4gICAgICAgICAgXCJTaHV0ZG93blwiOiBcIl9fX2xpc3RlbmVyT25TaHV0ZG93bl9ydW5faGFuZGxlcl9cIixcbiAgICAgICAgICBcIk9wZW5Eb2N1bWVudFwiOiBcIl9fX2xpc3RlbmVyT3BlbkRvY3VtZW50X3J1bl9oYW5kbGVyX1wiLFxuICAgICAgICAgIFwiU2VsZWN0aW9uQ2hhbmdlZFwiOiBcIl9fX2xpc3RlbmVyU2VsZWN0aW9uQ2hhbmdlZF9ydW5faGFuZGxlcl9cIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb25Ub2dnbGVDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1RvZ2dsZSBDb250ZW50U3luYyBQYW5lbCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgWycsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblRvZ2dsZVxuICAgIH0sXG4gICAgYWN0aW9uUHVzaENvbnRlbnRTeW5jOiB7XG4gICAgICBuYW1lOiAnUHVzaCcsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgcCcsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblB1c2hcbiAgICB9LFxuICAgIGFjdGlvblB1bGxDb250ZW50U3luYzoge1xuICAgICAgbmFtZTogJ1B1bGwnLFxuICAgICAgc2hvcnRjdXQ6ICdjdHJsIHNoaWZ0IHUnLFxuICAgICAgcnVuOiBjb21tYW5kcy5hY3Rpb25QdWxsXG4gICAgfSxcbiAgICBhY3Rpb25EaXNhYmxlTGF5ZXJzOiB7XG4gICAgICBuYW1lOiAnRGlzYWJsZSBTeW5jIG9uIFNlbGVjdGVkIExheWVycycsXG4gICAgICBzaG9ydGN1dDogJ2N0cmwgc2hpZnQgbycsXG4gICAgICBydW46IGNvbW1hbmRzLmFjdGlvblNlbGVjdGVkTGF5ZXJzRGlzYWJsZVxuICAgIH0sXG4gICAgYWN0aW9uRW5hYmxlTGF5ZXJzOiB7XG4gICAgICBuYW1lOiAnRW5hYmxlIFN5bmMgb24gU2VsZWN0ZWQgTGF5ZXJzJyxcbiAgICAgIHNob3J0Y3V0OiAnY3RybCBzaGlmdCBpJyxcbiAgICAgIHJ1bjogY29tbWFuZHMuYWN0aW9uU2VsZWN0ZWRMYXllcnNFbmFibGVcbiAgICB9XG4gIH1cbn1cbiJdfQ==
