"use strict";
cc._RF.push(module, '2d9527YnMpNn4MqmpCbRoLB', 'Level-290760_Controller');
// script/scripts/Level-290760_Controller.js

"use strict";

var i;

var $brainLevelBase = require("./BrainLevelBase");

var $level_290760_Box = require("./Level-290760_Box");

var $level_290760_Drink = require("./Level-290760_Drink");

var $level_290760_Model = require("./Level-290760_Model");

var $level_290760_Wait = require("./Level-290760_Wait");

var p = cc._decorator;
var d = p.ccclass;
var u = p.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.drinkAtlas = null;
    e.boxAtlas = null;
    e.model = new $level_290760_Model["default"]();
    e.drinkRoot = null;
    e.waitRoot = null;
    e.boxRoot = null;
    e.amount = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.drinkRoot = this.dict.drinkRoot;
    this.boxRoot = this.dict.boxRoot;
    this.waitRoot = this.dict.waitRoot;
    this.amount = this.dict.amount.getComponent(cc.Label);
    this.setCollisionManager(!0, !1);
    this.dict.propBtnRoot.active = !1;
  };

  e.prototype.onLevelReady = function () {
    this.model.init(this.levelJSON.json[this.levelID]);
    this.boxRoot.addComponent($level_290760_Box["default"]).init(this);
    this.drinkRoot.addComponent($level_290760_Drink["default"]).init(this);
    this.waitRoot.addComponent($level_290760_Wait["default"]).init(this);
    this.updateDrinkAmountView();
  };

  e.prototype.updateDrinkAmountView = function () {
    this.amount.string = (this.model.drinkAmount - this.model.removeDrinkAmount).toString();
  };

  e.prototype.randomNum = function (t, e, o) {
    var i = e - t;
    var r = o || Math.random();
    return t + Math.round(r * i);
  };

  __decorate([u(cc.SpriteAtlas)], e.prototype, "drinkAtlas", void 0);

  __decorate([u(cc.SpriteAtlas)], e.prototype, "boxAtlas", void 0);

  return __decorate([d], e);
}($brainLevelBase["default"]);

exports["default"] = g;

cc._RF.pop();