"use strict";
cc._RF.push(module, 'dccdej6X9tPY4wPiS7pHujm', 'BrainLevelTips');
// script/scripts/BrainLevelTips.js

"use strict";

var i;

var $levelConstant = require("./LevelConstant");

var l = cc._decorator;
var h = l.ccclass;
var p = l.property;
var d = l.executeInEditMode;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.folder = "";
    e.tipsSize = cc.v2(650, 650);
    e.assetName = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this.node.getChildByName("node") || this.node.children[0];
    var e = this.tipsSize.x / t.width;
    var o = this.tipsSize.y / t.height;
    t.scale = Math.min(o, e);
    this.autoSetAssetName();
    this.setLevelAsset();
  };

  e.prototype.onDestroy = function () {};

  e.prototype.autoSetAssetName = function () {
    var t = this.assetName || this.node.assetName;

    if (t) {
      switch (!0) {
        case Number(t) < -2e4:
          this.folder = "cf20000";
      }

      this.node.children[0].name = "" + t;
    }
  };

  e.prototype.setLevelAsset = function () {
    var t = this;
    var e = this.node;

    if (e) {
      var o = function o(e, _o) {
        return __awaiter(t, void 0, void 0, function () {
          var t;
          var i;
          var r;
          var n;
          var c = this;
          return __generator(this, function (l) {
            switch (l.label) {
              case 0:
                t = function t(_t, e) {
                  return new Promise(function (i) {
                    return __awaiter(c, void 0, void 0, function () {
                      var r;
                      var n;
                      var a;
                      var c;
                      var l;
                      return __generator(this, function (s) {
                        switch (s.label) {
                          case 0:
                            s.trys.push([0, 2,, 3]);
                            return [4, this.downloadSpriteFrame(_t, e)];

                          case 1:
                            r = s.sent();
                            return _o && cc.isValid(_o.node) ? (_o.spriteFrame = new cc.SpriteFrame(r), this.tipsSize.equals(cc.v2()) ? (n = this.node.getChildByName("node") || this.node.children[0]) && (a = n.width / _o.node.width, c = n.height / _o.node.height, _o.node.scale = Math.min(c, a)) : (a = this.tipsSize.x / _o.node.width, c = this.tipsSize.y / _o.node.height, _o.node.scale = Math.min(c, a)), [2, i(!0)]) : [2, i(!0)];

                          case 2:
                            l = s.sent();
                            console.log(l);
                            return [2, i(!1)];

                          case 3:
                            return [2];
                        }
                      });
                    });
                  });
                };

                i = this.folder;

                if ((r = e.split(".")).length > 1) {
                  if ("c" == r[0]) {
                    i = "common";
                  } else {
                    i = r[0];
                  }
                }

                return [4, t(n = "tips/" + i + "/" + e, ".png")];

              case 1:
                if (l.sent()) {//
                } else {
                  t(n, ".jpg");
                }

                return [2];
            }
          });
        });
      };

      var i = function i(t) {
        t.children.forEach(function (t) {
          if (0 != t.children.length) {
            i(t);
          }

          var e = t.getComponent(cc.Sprite);

          if (e && e.enabled && !e.spriteFrame) {
            return o(t.name.split("=")[0], e);
          }
        });
      };

      i(e);
    }
  };

  e.prototype.downloadSpriteFrame = function (t, e) {
    var o = this;
    return new Promise(function (i, r) {
      if ($levelConstant.ASSET_LOCAL_BUNDLE) {
        cc.assetManager.loadBundle($levelConstant.ASSET_LOCAL_BUNDLE, function (e, o) {
          if (e) {
            return r(e);
          }

          o.load(t, cc.Texture2D, function (t, e) {
            if (t) {
              return r(t);
            }

            i(e);
          });
        });
      } else {
        t += e;
        t = "" + o.getDomain() + t;
        cc.assetManager.loadRemote(t, {
          maxRetryCount: 1,
          retryInterval: 100
        }, function (t, e) {
          if (t) {
            return r(t);
          }

          i(e);
        });
      }
    });
  };

  e.prototype.getDomain = function () {
    return $levelConstant.domain;
  };

  __decorate([p({
    tooltip: "资源远程文件夹名字(若无则为关卡ID)"
  })], e.prototype, "folder", void 0);

  return __decorate([h, d], e);
}(cc.Component);

exports["default"] = u;

cc._RF.pop();