"use strict";
cc._RF.push(module, '80238wgshFJbp6+kf1BaEPu', 'AgeTip');
// scripts/AgeTip.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $platformConst = require("./PlatformConst");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var u = cc._decorator;
var f = u.ccclass;
var d = (u.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("defineBtn", this.clickDefine, this);

    if ($platformManager.Platform.getConfig().ageTipType == $platformConst.AgeTipType.AGE_12) {
      var e = this.dict.text.getComponent(cc.Label).string.replace("16周岁", "12周岁");
      this.dict.text.getComponent(cc.Label).string = e;
    }
  };

  e.prototype.clickDefine = function () {
    $popupManager["default"].hide();
  };

  return __decorate([f], e);
}($baseUI["default"]));
exports["default"] = d;

cc._RF.pop();