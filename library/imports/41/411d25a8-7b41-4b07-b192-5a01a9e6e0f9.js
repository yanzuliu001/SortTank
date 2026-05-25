"use strict";
cc._RF.push(module, '411d2Woe0FLB7GSWgGp5uD5', 'Level-249667_chain');
// script/scripts/Level-249667_chain.js

"use strict";

var i;

var $level_249667_carItem = require("./Level-249667_carItem");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.next = null;
    e.isReverse = !1;
    e.linkType = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    if (this.isReverse) {
      this.next.getComponent($level_249667_carItem["default"]).nextCar = this.node.parent;
      this.node.parent.getComponent($level_249667_carItem["default"]).prevCar = this.next;
    } else {
      this.next.getComponent($level_249667_carItem["default"]).prevCar = this.node.parent;
      this.node.parent.getComponent($level_249667_carItem["default"]).nextCar = this.next;
    }
  };

  __decorate([l(cc.Node)], e.prototype, "next", void 0);

  __decorate([l], e.prototype, "isReverse", void 0);

  __decorate([l], e.prototype, "linkType", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = h;

cc._RF.pop();