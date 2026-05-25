"use strict";
cc._RF.push(module, 'e8a40W5KeJDTL/az7nUfbxg', 'StorageSync');
// scripts/StorageSync.js

"use strict";

var r = function () {
  function t() {}

  t.getItem = function (t) {
    if (window.tt) {
      return window.wxapi.getStorageSync(t);
    }
  };

  t.setItem = function (t, e) {
    if (window.tt) {
      return window.wxapi.setStorageSync(t, e);
    }
  };

  t.removeItem = function (t) {
    if (window.tt) {
      return window.wxapi.removeStorageSync(t);
    }
  };

  return t;
}();

exports["default"] = r;

cc._RF.pop();