"use strict";
cc._RF.push(module, 'f8349AE5+ZPpZvR8AKR4YL7', 'NoAD');
// scripts/NoAD.js

"use strict";

var r;

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var $shuShuConst = require("./ShuShuConst");

var h = cc._decorator;
var p = h.ccclass;
var m = h.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.currentVIP = 0;
    e.bgSF = [];
    e.iconSF = [];
    e.bg2SF = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.localStorageUIData[$localStorageConst["default"].isNoAD] = this.updateIsNoAD.bind(this);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("noADBtn", this.noADBtn, this);
    this.addBtnOn("noADBtn1", this.noADBtn1, this);
    this.initView();
  };

  e.prototype.updateIsNoAD = function (t) {
    if (t) {
      $popupManager["default"].hide();
    }
  };

  e.prototype.initView = function () {
    this.dict.skin.getComponent(cc.Label).string = $languageManager["default"].formatStr("获得皮肤：%s", "电音钉");
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Gift_page, {
      id: 1
    });
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.money0, "remove_ads");
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.money1, "remove_ads_pack");
  };

  e.prototype.noBtn = function () {
    if (window.hideIsNeedInsert) {
      window.hideIsNeedInsert = !1;
      $platformManager.Platform.showInsert();
    }

    $popupManager["default"].hide();
  };

  e.prototype.noADBtn = function () {
    $paymentSystem["default"].clickBuy("remove_ads");
  };

  e.prototype.noADBtn1 = function () {
    $paymentSystem["default"].clickBuy("remove_ads_pack");
  };

  __decorate([m([cc.SpriteFrame])], e.prototype, "bgSF", void 0);

  __decorate([m([cc.SpriteFrame])], e.prototype, "iconSF", void 0);

  __decorate([m([cc.SpriteFrame])], e.prototype, "bg2SF", void 0);

  return __decorate([p], e);
}($uIBase["default"]);

exports["default"] = g;

cc._RF.pop();