"use strict";
cc._RF.push(module, 'b733fCBKrtGGauvrMx54orD', 'ttPostbackCtl');
// scripts/ttPostbackCtl.js

"use strict";

var $index = require("./index");

var $report = require("./Report");

var i = function () {
  function t() {
    this._sdk = $index["default"];
  }

  t.GetInstance = function () {
    if (t.instance) {//
    } else {
      t.instance = new t();
    }

    return this.instance;
  };

  t.prototype.init = function (t, e) {
    if (window.tt) {
      var n = t;
      var r = e;

      this._sdk.initParams({
        app_name: n,
        channel: "tt_minigame",
        version: r,
        log_level: "info"
      });
    }
  };

  t.prototype.adRequest = function (t) {
    $report["default"].adRequest(t);
  };

  t.prototype.adClick = function (t) {
    $report["default"].adClick(t);
  };

  t.prototype.adImpression = function (t) {
    $report["default"].adImpression(t);
  };

  t.prototype.adFill = function (t) {
    $report["default"].adFill(t);
  };

  t.prototype.adImpressionDone = function (t) {
    $report["default"].adImpressionDone(t);
  };

  t.instance = null;
  return t;
}();

exports["default"] = i;

cc._RF.pop();