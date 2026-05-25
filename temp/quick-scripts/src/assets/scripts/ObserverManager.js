"use strict";
cc._RF.push(module, '3f65cN83ZtA4Larl4qubgll', 'ObserverManager');
// scripts/ObserverManager.js

"use strict";

exports.Observer = void 0;

var r = function () {
  function t() {
    this.prefix = "event_";
  }

  t.prototype.on = function (t, e, n) {
    cc.game.on("" + this.prefix + t, e, n);
  };

  t.prototype.off = function (t, e, n) {
    cc.game.off("" + this.prefix + t, e, n);
  };

  t.prototype.emit = function (t, e, n, r, o, i) {
    cc.game.emit("" + this.prefix + t, e, n, r, o, i);
  };

  return t;
}();

exports.Observer = new r();

cc._RF.pop();