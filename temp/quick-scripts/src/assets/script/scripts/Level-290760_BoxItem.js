"use strict";
cc._RF.push(module, '650e4GS/elGAKA3Vt23Wydw', 'Level-290760_BoxItem');
// script/scripts/Level-290760_BoxItem.js

"use strict";

var i;

var $level_290760_Enum = require("./Level-290760_Enum");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mgr = null;
    e.ID = null;
    e.path = null;
    e.dir = null;
    e.seat = null;
    e.state = $level_290760_Enum.BoxState.Idle;
    e.percent = 0;
    e.color = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    this.mgr = t;
    var e = this.node.name.split("_");
    this.dir = e[0];
    this.seat = Number(e[1]);
  };

  e.prototype.showPathAndID = function () {
    var t = new cc.Node();
    t.name = "path";
    t.addComponent(cc.Label).string = "" + this.path;
    t.color = cc.Color.BLACK;
    this.node.addChild(t);
    t.position = cc.v3(-13.105, -26.21);
    var e = cc.instantiate(t);
    e.position = cc.v3(0, -20);
    e.parent = this.node;
    e.color = cc.Color.GREEN;
    e.getComponent(cc.Label).string = "ID-" + this.ID;
    e.getComponent(cc.Label).fontSize = 20;
  };

  e.prototype.setBoxImg = function (t, e) {
    this.color = t;
    this.node.getChildByName("car").getComponent(cc.Sprite).spriteFrame = this.mgr.mgr.boxAtlas.getSpriteFrame("f29076_" + (e[this.node.name] + t + 1));
  };

  return __decorate([c], e);
}(cc.Component));
exports["default"] = l;

cc._RF.pop();