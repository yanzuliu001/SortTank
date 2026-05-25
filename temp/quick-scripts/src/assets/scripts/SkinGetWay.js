"use strict";
cc._RF.push(module, '2009afHRkBODIsUGZI9F9aX', 'SkinGetWay');
// scripts/SkinGetWay.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $configConst = require("./ConfigConst");

var $eventConst = require("./EventConst");

var $configManager = require("./ConfigManager");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

var $popupManager = require("./PopupManager");

var $userManager = require("./UserManager");

var p = cc._decorator;
var m = p.ccclass;
var g = (p.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("noBtn2", this.noBtn, this);
    this.updateView();
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.onEnable = function () {
    $eventManager.Event.on($eventConst["default"].update_use_skin, this.updateView, this);
  };

  e.prototype.onDisable = function () {
    $eventManager.Event.off($eventConst["default"].update_use_skin, this.updateView, this);
  };

  e.prototype.updateView = function () {
    var t = this;
    var e = $userManager.User.getTempData("chooseSkin") || 0;
    cc.resources.load("texture/skin/pifu" + e, function (e, n) {
      if (e) {
        return console.log(e);
      }

      t.dict.img.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
    });
    $configManager.Config.get($configConst.ConfigConst.Skin0).then(function (n) {
      var r = n.find(function (t) {
        return t.id == e;
      }).unlock;

      if (r.includes("打螺丝模式累计通过")) {
        var o = r.replace(/\u6253\u87ba\u4e1d\u6a21\u5f0f\u7d2f\u8ba1\u901a\u8fc7/g, "");
        o = o.replace(/\u5173/g, "");
        t.dict.describe.getComponent(cc.Label).string = $languageManager["default"].formatStr("打螺丝模式累计通过%d关", Number(o));
      } else {
        t.dict.describe.getComponent(cc.Label).string = r;
      }
    });
  };

  return __decorate([m], e);
}($baseUI["default"]));
exports["default"] = g;

cc._RF.pop();