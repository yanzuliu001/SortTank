"use strict";
cc._RF.push(module, '1f846/9dqFJBLapQhgbWK26', 'SpecialGift');
// scripts/SpecialGift.js

"use strict";

var r;

var $uIBase = require("./UIBase");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var $shuShuConst = require("./ShuShuConst");

var u = cc._decorator;
var f = u.ccclass;
var d = (u.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("buyBtn", this.buyBtn, this);
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Gift_page, {
      id: 2
    });
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.price, "special_pack");
  };

  e.prototype.onEnable = function () {
    cc.game.on("special_pack", this.specialGift, this);
  };

  e.prototype.onDisable = function () {
    cc.game.off("special_pack", this.specialGift, this);
  };

  e.prototype.specialGift = function () {
    $popupManager["default"].hide();
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.buyBtn = function () {
    $paymentSystem["default"].clickBuy("special_pack");
  };

  return __decorate([f], e);
}($uIBase["default"]));
exports["default"] = d;

cc._RF.pop();