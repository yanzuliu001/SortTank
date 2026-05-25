"use strict";
cc._RF.push(module, 'cf531ZkQGNLg5ZSaolqWple', 'AssetManager');
// scripts/AssetManager.js

"use strict";

var i = new (function () {
  function t() {}

  t.prototype.getRes = function (t, e, n) {
    return __awaiter(this, void 0, void 0, function () {
      var r;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            return [4, this.loadBundle(t)];

          case 1:
            if (r = o.sent()) {
              return [4, this.load(r, e, n)];
            } else {
              return [2];
            }

          case 2:
            return [2, o.sent()];
        }
      });
    });
  };

  t.prototype.getScene = function (t, e) {
    return __awaiter(this, void 0, void 0, function () {
      var n;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, this.loadBundle(t)];

          case 1:
            if (n = r.sent()) {
              return [4, this.loadScene(n, e)];
            } else {
              return [2];
            }

          case 2:
            return [2, r.sent()];
        }
      });
    });
  };

  t.prototype.releaseAsset = function (t) {
    cc.assetManager.releaseAsset(t);
  };

  t.prototype.releaseAll = function (t) {
    var e = cc.assetManager.getBundle(t);

    if (e) {
      e.releaseAll();
      cc.assetManager.removeBundle(e);
    }
  };

  t.prototype.loadBundle = function (t) {
    return __awaiter(this, void 0, Promise, function () {
      return __generator(this, function () {
        return [2, new Promise(function (e, n) {
          var r = cc.assetManager.getBundle(t);

          if (r) {
            return e(r);
          }

          cc.assetManager.loadBundle(t, function (t, r) {
            if (t) {
              cc.error(t);
              return n(null);
            }

            e(r);
          });
        })];
      });
    });
  };

  t.prototype.load = function (t, e, n) {
    return __awaiter(this, void 0, Promise, function () {
      return __generator(this, function () {
        return [2, new Promise(function (r, o) {
          var i = t.get(e);

          if (i) {
            return r(i);
          }

          t.load("" + e, n, function (t, e) {
            if (t) {
              cc.error(t);
              return o(t);
            }

            r(e);
          });
        })];
      });
    });
  };

  t.prototype.loadScene = function (t, e) {
    return new Promise(function (n, r) {
      t.loadScene(e, function (t, e) {
        if (t) {
          cc.error(t);
          return r(null);
        }

        n(e);
      });
    });
  };

  return t;
}())();
exports["default"] = i;

cc._RF.pop();