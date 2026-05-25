"use strict";
cc._RF.push(module, '09f8c6tS5RMJJok1qE+Wivd', 'Hint');
// scripts/Hint.js

"use strict";

var r = function () {
  function t(t, e, n) {
    this.node = null;
    this.node = new cc.Node("Hint");
    this.node.setPosition(e);
    this.node.setScale(n);
    this.node.scale = 0;
    this.node.opacity = 0;
  }

  t.prototype.show = function () {
    this.node.scale = 1;
    this.node.opacity = 1;
  };

  t.prototype.hide = function () {
    this.node.scale = 0;
    this.node.opacity = 0;
  };

  return t;
}();

exports["default"] = r;

cc._RF.pop();