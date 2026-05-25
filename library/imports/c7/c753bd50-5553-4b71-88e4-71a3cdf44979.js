"use strict";
cc._RF.push(module, 'c753b1QVVNLcYjkcaPN9El5', 'SceneManager');
// scripts/SceneManager.js

"use strict";

var $platformManager = require("./PlatformManager");

var $assetManager = require("./AssetManager");

var $popupManager = require("./PopupManager");

var $sceneConst = require("./SceneConst");

var l = new (function () {
  function t() {
    this.currentScene = $sceneConst.SceneConst.LOADING;
    this.isLoading = !1;
    this.hasAnim = !0;
    this.time = 0.1;
    this.sceneRoot = null;
    this.transition = null;
    this.timerID = null;
  }

  t.prototype.init = function (t) {
    var e = cc.find("Canvas");
    this.sceneRoot = e.getChildByName("sceneRoot");
    this.transition = e.getChildByName("transition");
    this.transition.color = cc.Color.WHITE;
    this.transition.opacity = 0;
    var n = cc.instantiate(t);
    this.sceneRoot.addChild(n);
  };

  t.prototype.suc = function (t, e) {
    this.sceneRoot.destroyAllChildren();
    this.sceneRoot.addChild(t);
    this.currentScene = e;
    this.isLoading = !1;
    console.log("进入新场景", this.currentScene);
  };

  t.prototype.getCurrentScene = function () {
    return this.currentScene;
  };

  t.prototype.loadScene = function (t, e) {
    if (void 0 === e) {
      e = !0;
    }

    return __awaiter(this, void 0, void 0, function () {
      var n;
      var r;
      var l;
      var u = this;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            if (t != $sceneConst.SceneConst.GAME || window.levelSub) {
              if (this.isLoading) {
                return [2, console.log("场景正在加载中。。。")];
              } else {
                return this.isLoading = !0, e && $popupManager["default"].hideAll(), n = "gameBundle", $platformManager.Platform.getConfig().appID.includes("tt") && t == $sceneConst.SceneConst.Home && (n = "ttBundle"), [4, $assetManager["default"].getRes(n, "prefab/scene/" + t, cc.Prefab)];
              }
            } else {
              return this.timerID = setInterval(function () {
                console.log("计时器检查是否加载完");

                if (window.levelSub) {
                  clearInterval(u.timerID);
                  u.loadScene(t, e);
                }
              }, 200), [2];
            }

          case 1:
            r = o.sent();
            l = cc.instantiate(r);
            return this.hasAnim ? (this.transition.opacity = 0, this.transition.stopAllActions(), cc.tween(this.transition).to(this.time, {
              opacity: 255
            }).call(function () {
              u.suc(l, t);
            }).to(this.time, {
              opacity: 0
            }).start(), [2]) : [2, this.suc(l, t)];
        }
      });
    });
  };

  return t;
}())();
exports["default"] = l;

cc._RF.pop();