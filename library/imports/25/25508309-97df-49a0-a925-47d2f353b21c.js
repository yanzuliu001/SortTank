"use strict";
cc._RF.push(module, '25508MJl99JoKklR9LzU7Ic', 'Level-287490_waitItem');
// script/scripts/Level-287490_waitItem.js

"use strict";

var i;

var $levelConstant = require("./LevelConstant");

var $levelUtil = require("./LevelUtil");

var c = cc._decorator;
var l = c.ccclass;
var h = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mgr = null;
    e.placeBox = null;
    e.posIndex = -1;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    var o = this;
    this.mgr = t;
    this.posIndex = e;
    this.node.name = "wait_" + e;

    if (this.node.getChildByName("video")) {
      $levelUtil["default"].onClickEvent(this.node, function () {
        cc.game.emit($levelConstant.LEVEL_EVENT.REWARDVIDEO, function (t) {
          if (0 === t) {
            o.unlockWait();
          }
        });
      });
    }
  };

  e.prototype.unlockWait = function () {
    this.node.getChildByName("video").destroy();
  };

  return __decorate([l], e);
}(cc.Component));
exports["default"] = h;

cc._RF.pop();