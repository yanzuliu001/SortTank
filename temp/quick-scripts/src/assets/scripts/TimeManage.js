"use strict";
cc._RF.push(module, 'a7b862fi75MzJjLzmuokVkX', 'TimeManage');
// scripts/TimeManage.js

"use strict";

var $function = require("./function");

var $localStorage = require("./LocalStorage");

var i = function () {
  function t() {
    this._startClientTime = "sdk_s_c_t";
    this._endClientTime = "sdk_e_c_t";
    this._firstReportServerTime = "sdk_s_b_t";
    this._firstReportClientTime = "sdk_c_b_t";
    this.lockGetFirstServerTime = "sdk_lock_get_fst";
  }

  t.prototype.setStartClientTime = function () {
    $localStorage["default"].setItem(this._startClientTime, $function.getClientTime());
  };

  t.prototype.getStartClientTime = function () {
    var t = $localStorage["default"].getItem(this._startClientTime);

    if (t > 0) {
      return t;
    } else {
      return 0;
    }
  };

  t.prototype.removeStartClientTime = function () {
    $localStorage["default"].removeItem(this._startClientTime);
  };

  t.prototype.setEndClientTime = function () {
    $localStorage["default"].setItem(this._endClientTime, $function.getClientTime());
  };

  t.prototype.getEndClientTime = function () {
    var t = $localStorage["default"].getItem(this._endClientTime);

    if (t > 0) {
      return t;
    } else {
      return 0;
    }
  };

  t.prototype.removeEndClientTime = function () {
    $localStorage["default"].removeItem(this._endClientTime);
  };

  t.prototype.getOnlineTime = function () {
    var t = this.getStartClientTime();
    var e = this.getEndClientTime();

    if (t > 0 && e > 0) {
      return e - t;
    } else {
      return 0;
    }
  };

  t.prototype.setFirstReportServerTime = function () {
    var t = this;

    if ($localStorage["default"].getItem(this.lockGetFirstServerTime)) {//
    } else {
      $localStorage["default"].setItem(this.lockGetFirstServerTime, $function.getClientTime());
      $function.getServerTime(function (e) {
        try {
          $localStorage["default"].setItem(t._firstReportServerTime, e.data.data.time);
          $localStorage["default"].removeItem(t.lockGetFirstServerTime);
        } catch (n) {}
      });
    }
  };

  t.prototype.getFirstReportServerTime = function () {
    return $localStorage["default"].getItem(this._firstReportServerTime);
  };

  t.prototype.removeFirstReportServerTime = function () {
    return $localStorage["default"].removeItem(this._firstReportServerTime);
  };

  t.prototype.setFirstReportClientTime = function () {
    $localStorage["default"].setItem(this._firstReportClientTime, $function.getClientTime());
  };

  t.prototype.getFirstReportClientTime = function () {
    return $localStorage["default"].getItem(this._firstReportClientTime);
  };

  t.prototype.removeFirstReportClientTime = function () {
    return $localStorage["default"].removeItem(this._firstReportClientTime);
  };

  return t;
}();

exports["default"] = new i();

cc._RF.pop();