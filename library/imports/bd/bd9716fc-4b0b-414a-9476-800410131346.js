"use strict";
cc._RF.push(module, 'bd971b8SwtBSpR2gAQQExNG', 'Level-249667_key');
// script/scripts/Level-249667_key.js

"use strict";

var i;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.lock = null;
    return e;
  }

  __extends(e, t);

  __decorate([c(cc.Node)], e.prototype, "lock", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();