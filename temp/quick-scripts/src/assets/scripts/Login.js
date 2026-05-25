"use strict";
cc._RF.push(module, 'ab35dAQdupCxpxGtt20wS0X', 'Login');
// scripts/Login.js

"use strict";

var r = function () {
  function t() {}

  t.prototype.login = function (t) {
    if (window.tt) {
      window.wxapi.login(t);
    }
  };

  return t;
}();

exports["default"] = new r();

cc._RF.pop();