"use strict";
cc._RF.push(module, '9c193marbdExb2qZAnPEXpF', 'Api');
// scripts/Api.js

"use strict";

exports.serverTime = exports.getOpenid = exports.report = exports.click = void 0;

var $request = require("./Request");

var $config = require("./config");

var $md5 = require("./md5");

exports.click = function (t, e, n, i) {
  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  if (void 0 === i) {
    i = function i() {};
  }

  $request["default"].post({
    url: $config.DOMAIN + "/common/app-track/click",
    data: t,
    dataType: "json",
    success: e,
    fail: n,
    complete: i
  });
};

exports.report = function (t, e, n, a) {
  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  if (void 0 === a) {
    a = function a() {};
  }

  $request["default"].post({
    url: $config.DOMAIN + "/common/user-op/op-merge-report?trace_id=" + $md5.md5((Math.round(Date.now() / 1e3) + 1e3 * Math.random()).toString()),
    data: t,
    dataType: "json",
    success: e,
    fail: n,
    complete: a
  });
};

exports.getOpenid = function (t, e, n, i) {
  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  if (void 0 === i) {
    i = function i() {};
  }

  $request["default"].post({
    url: $config.DOMAIN + "/common/tt/session/sign_in",
    data: t,
    dataType: "json",
    success: e,
    fail: n,
    complete: i
  });
};

exports.serverTime = function (t, e, n) {
  if (void 0 === t) {
    t = function t() {};
  }

  if (void 0 === e) {
    e = function e() {};
  }

  if (void 0 === n) {
    n = function n() {};
  }

  $request["default"].get({
    url: $config.DOMAIN + "/common/common/time",
    dataType: "json",
    success: t,
    fail: e,
    complete: n
  });
};

cc._RF.pop();