"use strict";
cc._RF.push(module, 'ad60amMOi5HOr1zdtf8EqBs', 'Hide');
// scripts/Hide.js

"use strict";

var r = function () {
  function t() {}

  t.prototype.hide = function (t) {
    if (window.tt) {
      window.wxapi.onHide(t);
    }
  };

  return t;
}();

exports["default"] = new r();

cc._RF.pop();