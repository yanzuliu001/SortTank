"use strict";
cc._RF.push(module, '7bbb1IoePRKOomJZz3+A/Cg', 'BaseUI');
// scripts/BaseUI.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.dict = {};
    e.childNum = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.node.setContentSize(cc.winSize);
    this.loadAllObj(this.node);
  };

  e.prototype.loadAllObj = function (t, e) {
    if (void 0 === e) {
      e = "";
    }

    if ("_" != t.name[0] && -1 == t.name.indexOf("copy")) {
      var n = e;
      var r = "";

      if (this.childNum) {
        n = e + t.name;

        if (this.dict[t.name]) {//
        } else {
          this.dict[t.name] = t;
        }

        r = n + "/";
      }

      for (var o = 0; o < t.children.length; ++o) {
        this.childNum++;
        this.loadAllObj(t.children[o], r);
      }
    }
  };

  e.prototype.addBtnOn = function (t, e, n) {
    var r = this.dict[t];

    if (!r) {
      return cc.warn("没有" + t + "该节点");
    }

    if (r.getComponent(cc.Button)) {//
    } else {
      r.addComponent(cc.Button);
    }

    var o = r.getComponent(cc.Button);
    o.transition = cc.Button.Transition.SCALE;
    o.duration = 0.1;
    o.zoomScale = 1.2;
    r.on(cc.Node.EventType.TOUCH_END, function () {
      cc.game.emit("playClickAudio");
      e.call(n);
    }, this);
  };

  return __decorate([s], e);
}(cc.Component));
exports["default"] = c;

cc._RF.pop();