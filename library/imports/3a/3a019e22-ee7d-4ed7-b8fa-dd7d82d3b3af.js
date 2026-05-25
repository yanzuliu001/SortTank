"use strict";
cc._RF.push(module, '3a0194i7n1O17j63X2C07Ov', 'Show');
// scripts/Show.js

"use strict";

var r = function () {
  function t() {}

  t.prototype.show = function (t) {
    if (window.tt) {
      window.wxapi.onShow(t);
    }
  };

  return t;
}();

exports["default"] = new r();

cc._RF.pop();