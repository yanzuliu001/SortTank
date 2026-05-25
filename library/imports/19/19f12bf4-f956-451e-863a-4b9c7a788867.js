"use strict";
cc._RF.push(module, '19f12v0+VZFHoY6S5x6eIhn', 'function');
// scripts/function.js

"use strict";

exports.getServerTime = exports.getClientTime = exports.getNonce = exports.arrSort = exports.getSign = exports.response = exports.formatDate = exports.versionFormat = void 0;

var $api = require("./Api");

var $md5 = require("./md5");

var $config = require("./config");

function a(t) {
  var e = {};
  Object.keys(t).sort().forEach(function (n) {
    e[n] = t[n];
  });
  return e;
}

function s() {
  return $md5.md5((c() + 1e3 * Math.random()).toString());
}

function c() {
  return Math.round(Date.now() / 1e3);
}

exports.versionFormat = function (t) {
  return parseInt(t.replace(".", ""));
};

exports.formatDate = function (t, e) {
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
};

exports.response = function (t, e, n) {
  if (void 0 === t) {
    t = 0;
  }

  if (void 0 === e) {
    e = "";
  }

  if (void 0 === n) {
    n = {};
  }

  return {
    code: t,
    msg: e,
    data: n
  };
};

exports.getSign = function (t) {
  t.timestamp = c();
  t.nonce = s();
  t = a(t);
  var e = [];

  for (var n in t) {
    e.push(n + "=" + t[n]);
  }

  var r = e.join("&") + $config.API_SECRET;
  t.sign = $md5.md5(r);
  return t;
};

exports.arrSort = a;
exports.getNonce = s;
exports.getClientTime = c;

exports.getServerTime = function (t) {
  $api.serverTime(t);
};

cc._RF.pop();