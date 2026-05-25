"use strict";
cc._RF.push(module, '750acfRluZDq6HBqxs7/vQJ', 'LoadingManager');
// scripts/LoadingManager.js

"use strict";

exports.LoadingMgr = void 0;

var r = function () {
  function t() {}

  t.prototype.show = function () {
    cc.find("Canvas/LoadingRoot").active = !0;
  };

  t.prototype.hide = function () {
    cc.find("Canvas/LoadingRoot").active = !1;
  };

  return t;
}();

exports.LoadingMgr = new r();

cc._RF.pop();