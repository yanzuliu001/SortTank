"use strict";
cc._RF.push(module, '04ef7knxCdEc4pZmdU3U0P4', 'NoADBtn');
// scripts/NoADBtn.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var f = cc._decorator;
var d = f.ccclass;
var h = (f.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.localStorageUIData[$localStorageConst["default"].isNoAD] = this.isNoAD.bind(this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.newHandBtn, this);
    this.node.scale = 0.8;
  };

  e.prototype.isNoAD = function (t) {
    this.node.active = !t;

    if ($platformManager.Platform.getConfig().hasPurchase) {//
    } else {
      this.node.active = !1;
    }
  };

  e.prototype.newHandBtn = function () {};

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.UniversalCard);
  };

  return __decorate([d], e);
}($uIBase["default"]));
exports["default"] = h;

cc._RF.pop();