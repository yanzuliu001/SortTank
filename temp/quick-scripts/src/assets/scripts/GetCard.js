"use strict";
cc._RF.push(module, '88e9fUh1aBA1roJxmdS51vX', 'GetCard');
// scripts/GetCard.js

"use strict";

var r;

var $popupManager = require("./PopupManager");

var $uIBase = require("./UIBase");

var $languageManager = require("./LanguageManager");

var l = cc._decorator;
var u = l.ccclass;
var f = (l.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.dict.cardAmount.getComponent(cc.Label).string = $languageManager["default"].formatStr("万能卡x%d", 1);
  };

  e.prototype.noBtn = function () {
    console.log("测试");
    cc.game.emit("hideGetCard");
    $popupManager["default"].hide();
  };

  return __decorate([u], e);
}($uIBase["default"]));
exports["default"] = f;

cc._RF.pop();