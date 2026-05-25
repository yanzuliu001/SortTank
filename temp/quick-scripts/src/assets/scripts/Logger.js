"use strict";
cc._RF.push(module, 'eb9750DVjdITq4LPJ9lzjKK', 'Logger');
// scripts/Logger.js

"use strict";

function o(t, e) {
  var n = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours() % 12 == 0 ? 12 : t.getHours() % 12,
    "H+": t.getHours(),
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "q+": Math.floor((t.getMonth() + 3) / 3),
    S: t.getMilliseconds()
  };

  for (var r in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + "日一二三四五六".charAt(t.getDay()))), n) {
    if (new RegExp("(" + r + ")").test(e)) {
      e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length));
    }
  }

  return e;
}

exports.isLegalLogLevel = exports.LOG_LEVEL = void 0;
exports.LOG_LEVEL = {
  VERBOSE: "verbose",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
  NONE: "none"
};

exports.isLegalLogLevel = function (t) {
  return [exports.LOG_LEVEL.VERBOSE, exports.LOG_LEVEL.INFO, exports.LOG_LEVEL.WARNING, exports.LOG_LEVEL.ERROR, exports.LOG_LEVEL.NONE].includes(t);
};

var i = function () {
  function t(e, n) {
    if (void 0 === e) {
      e = "none";
    }

    if (void 0 === n) {
      n = "LOG";
    }

    this.level = e;
    this.prefix = n;
    this.id = t.id;
  }

  t.isLegalLogLevel = function (t) {
    return [exports.LOG_LEVEL.VERBOSE, exports.LOG_LEVEL.INFO, exports.LOG_LEVEL.WARNING, exports.LOG_LEVEL.ERROR, exports.LOG_LEVEL.NONE].includes(t);
  };

  t.prototype.getPrintPrefix = function (t) {
    this.id++;
    return "[wonder-js-sdk] " + o(new Date(), "yyyy-MM-ddThh:mm:ss.SZ") + " [" + t.toLocaleUpperCase() + "][" + this.prefix + "#" + this.id + "]:";
  };

  t.prototype.setLogLevel = function (t) {
    return this.level = t;
  };

  t.prototype.getLogLevel = function () {
    return this.level;
  };

  t.prototype.info = function () {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    var n = ["info"];

    if (n.includes(this.level)) {
      console.log.apply(console, __spreadArrays([this.getPrintPrefix("info")], t));
    }
  };

  t.prototype.warn = function () {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    var n = ["info", "warn"];

    if (n.includes(this.level)) {
      console.warn.apply(console, __spreadArrays([this.getPrintPrefix("warn")], t));
    }
  };

  t.prototype.error = function () {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    var n = ["info", "warn", "error", "verbose"];

    if (n.includes(this.level)) {
      console.error.apply(console, __spreadArrays([this.getPrintPrefix("error")], t));
    }
  };

  t.prototype.verbose = function () {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    var n = ["info", "warn", "error", "verbose"];

    if (n.includes(this.level)) {
      console.error.apply(console, __spreadArrays([this.getPrintPrefix("verbose")], t));
    }
  };

  t.id = 0;
  t.LOG_LEVEL = {
    VERBOSE: "verbose",
    INFO: "info",
    WARNING: "warning",
    ERROR: "error",
    NONE: "none"
  };
  return t;
}();

exports["default"] = i;

cc._RF.pop();