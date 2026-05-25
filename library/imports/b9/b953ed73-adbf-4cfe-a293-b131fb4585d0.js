"use strict";
cc._RF.push(module, 'b953e1zrb9M/qKTsTH7RYXQ', 'TouchSound');
// scripts/TouchSound.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.clickSound = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchStart, this);

    if (this.node._touchListener) {
      this.node._touchListener.setSwallowTouches(!1);
    }
  };

  e.prototype.onTouchStart = function () {
    cc.audioEngine.playEffect(this.clickSound, !1);
  };

  __decorate([c({
    type: cc.AudioClip
  })], e.prototype, "clickSound", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();