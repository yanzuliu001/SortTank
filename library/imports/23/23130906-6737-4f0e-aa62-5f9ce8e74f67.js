"use strict";
cc._RF.push(module, '23130kGZzdPDqpiX5zo509n', 'Level-29086_dragonItem');
// script/scripts/Level-29086_dragonItem.js

"use strict";

var i;
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.dragonColor = null;
    e.dir = 0;
    e.colorImgName = null;
    e.dirImgName = null;
    e.isMoving = !1;
    return e;
  }

  __extends(e, t);

  return __decorate([s], e);
}(cc.Component));
exports["default"] = c;

cc._RF.pop();