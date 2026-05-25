"use strict";
cc._RF.push(module, '99335lOQzJOGq0Mx5PwkbFK', 'PigItem');
// scripts/PigItem.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

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
    var e = $localStorageManager["default"].get($localStorageConst["default"].tempCoin) || 0;
    $localStorageManager["default"].set($localStorageConst["default"].tempCoin, e);
    this.localStorageUIData[$localStorageConst["default"].tempCoin] = this.updateTempCoin.bind(this);
    this.initView();
  };

  e.prototype.initView = function () {};

  e.prototype.updateTempCoin = function (t) {
    if (t >= 4e3) {
      t = 4e3;
    }

    this.dict.pigProgress.getComponent(cc.Sprite).fillRange = t / 4e3;
    this.dict.pigProgressText.getComponent(cc.Label).string = t / 4e3 * 100 + "%";
  };

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.Pig);
  };

  return __decorate([d], e);
}($uIBase["default"]));
exports["default"] = h;

cc._RF.pop();