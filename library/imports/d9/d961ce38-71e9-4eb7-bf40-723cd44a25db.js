"use strict";
cc._RF.push(module, 'd961c44celOt79AcjzUSiXb', 'TopBar');
// scripts/TopBar.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $eventManager = require("./EventManager");

var $platformManager = require("./PlatformManager");

var f = cc._decorator;
var d = f.ccclass;
var h = (f.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.key = null;
    e.power = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("backBtn", this.clickBack, this);
    this.addBtnOn("backBtn_tt", this.clickBack, this);
    this.addBtnOn("backBtn_ks", this.clickBack, this);
    this.initPlatformUI();
  };

  e.prototype.initPlatformUI = function () {
    this.dict.normal.active = !1;
    this.dict.tt.active = !1;
    this.dict.ks.active = !1;

    if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.TT) {
      this.dict.tt.active = !0;
    } else {
      if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.KS) {
        this.dict.ks.active = !0;
      } else {
        this.dict.normal.active = !0;
      }
    }
  };

  e.prototype.clickBack = function () {
    $eventManager.Event.emit($eventConst["default"].CLICK_BACK);
  };

  return __decorate([d], e);
}($baseUI["default"]));
exports["default"] = h;

cc._RF.pop();