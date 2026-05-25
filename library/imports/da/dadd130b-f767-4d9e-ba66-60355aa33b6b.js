"use strict";
cc._RF.push(module, 'dadd1ML92dNnrpmYDVaoztr', 'Get3');
// scripts/Get3.js

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
    this.initView();
  };

  e.prototype.initView = function () {
    this.dict["title_" + $languageManager["default"].instance.lan].active = !0;
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  return __decorate([u], e);
}($uIBase["default"]));
exports["default"] = f;

cc._RF.pop();