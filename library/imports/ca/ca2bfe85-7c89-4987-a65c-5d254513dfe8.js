"use strict";
cc._RF.push(module, 'ca2bf6FfIlJh6ZcXSVFE9/o', 'Level-29086_carPark');
// script/scripts/Level-29086_carPark.js

"use strict";

var i;

var $level_29086_carParkItem = require("./Level-29086_carParkItem");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mgr = null;
    e.config = [];
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    this.mgr = t;
    this.config = e;

    for (var o = 0; o < this.node.children.length; o++) {
      var i = this.node.children[o];
      var r = this.config[o];
      i.getComponent($level_29086_carParkItem["default"]).init(this, r);
    }
  };

  return __decorate([c], e);
}(cc.Component));
exports["default"] = l;

cc._RF.pop();