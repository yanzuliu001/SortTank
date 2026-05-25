"use strict";
cc._RF.push(module, '14446SbIvVEhYdQ55icLW8O', 'SupervalueBtn');
// scripts/SupervalueBtn.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var h = cc._decorator;
var p = h.ccclass;
var m = (h.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.localStorageUIData[$localStorageConst["default"].value_pack] = this.value_pack.bind(this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.newHandBtn, this);
    this.dict.btn_04.children[0].getComponent(cc.Label).string = "$1.99";
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.btn_04.children[0], "value_pack");
  };

  e.prototype.value_pack = function (t) {
    var e = $localStorageManager["default"].get($localStorageConst["default"].starter_pack) || 0;
    this.node.active = !(!e || t);

    if ($platformManager.Platform.getConfig().hasPurchase) {//
    } else {
      this.node.active = !1;
    }
  };

  e.prototype.newHandBtn = function () {
    $paymentSystem["default"].clickBuy("value_pack");
  };

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.UniversalCard);
  };

  return __decorate([p], e);
}($uIBase["default"]));
exports["default"] = m;

cc._RF.pop();