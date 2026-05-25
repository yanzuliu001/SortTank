"use strict";
cc._RF.push(module, 'f929cIDE0dJPIwOrBhsBkwC', 'ResManager');
// scripts/ResManager.js

"use strict";

exports.Res = void 0;

var r = function () {
  function t() {}

  t.prototype.load = function (t) {
    return new Promise(function (e, n) {
      cc.resources.load(t, function (t, r) {
        if (t) {
          return cc.warn(t), n(t);
        } else {
          return e(r);
        }
      });
    });
  };

  t.prototype.releaseResPackage = function (t) {
    for (var e in t) {
      for (var n = t[e].urls, r = 0; r < n.length; r++) {
        cc.assetManager.releaseAsset(n[r]);
      }
    }
  };

  return t;
}();

exports.Res = new r();

cc._RF.pop();