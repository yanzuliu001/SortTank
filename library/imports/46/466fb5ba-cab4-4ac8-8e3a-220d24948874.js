"use strict";
cc._RF.push(module, '466fbW6yrRKyI46Ig0klIh0', 'LevelSelectItem');
// scripts/LevelSelectItem.js

"use strict";

var r;
var a;

var $sceneConst = require("./SceneConst");

var $userConst = require("./UserConst");

var $platformManager = require("./PlatformManager");

var $sceneManager = require("./SceneManager");

var $userManager = require("./UserManager");

var d = cc._decorator;
var h = d.ccclass;
var p = d.property;

(function (t) {
  t[t.Normal = 0] = "Normal";
  t[t.Finish = 1] = "Finish";
  t[t.Lock = 2] = "Lock";
})(a || (a = {}));

var m = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.pass = null;
    e.level = null;
    e["new"] = null;
    e.lock = null;
    e.videoIcon = null;
    e.param = null;
    e.state = null;
    e.starAmount = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.setData = function (t) {
    this.param = t;
    this.node.zIndex = this.param.index;
    this.refresh();
  };

  e.prototype.refresh = function () {
    var t = this.param.index + 1;
    this["new"].active = !1;
    this.lock.active = !1;
    this.pass.active = !1;
    this.videoIcon.active = !1;
    this.level.string = t + "";

    if (-1 != $platformManager.Platform.getConfig().flag.indexOf("tt")) {
      if (-1 != this.param.currentAlreadyPlay.indexOf(t)) {
        this.pass.active = !0, this.level.node.active = !0;
      } else {
        if (-1 != this.param.currentAlreadyUnlock.indexOf(t)) {
          this["new"].active = !0, this.level.node.active = !0;
        } else {
          this.lock.active = !0, this.videoIcon.active = !0;
        }
      }
    } else {
      if (t == this.param.currentLevel) {
        this["new"].active = !0, this.level.node.active = !0;
      } else {
        if (t > this.param.currentLevel) {
          this.lock.active = !0;
        } else {
          this.pass.active = !0, this.level.node.active = !0;
        }
      }
    }
  };

  e.prototype.clickEnter = function () {
    var t = this;

    if (this.lock.active) {
      if (this.videoIcon.active) {
        $platformManager.Platform.showRewardAds(function (e) {
          if (0 == e) {
            cc.game.emit("gamelog", "rewarde_btn012");
            $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, t.param.index + 1);
            var n = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
            var r = $userManager.User.get($userConst.UserData.ALREADY_UNLOCK);

            if (-1 == r[n].indexOf(t.param.index + 1)) {
              r[n].push(t.param.index + 1);
            }

            $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, r);
            var o = t.param.index + 1;
            var i = $userManager.User.get($userConst.UserData.LEVEL_LIST);

            if (o > i[n]) {
              i[n] = o;
              $userManager.User.set($userConst.UserData.LEVEL_LIST, i);
            }

            $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
          }
        });
      }
    } else {
      $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, this.param.index + 1);
      $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
    }
  };

  e.state = a;

  __decorate([p(cc.Node)], e.prototype, "pass", void 0);

  __decorate([p(cc.Label)], e.prototype, "level", void 0);

  __decorate([p(cc.Node)], e.prototype, "new", void 0);

  __decorate([p(cc.Node)], e.prototype, "lock", void 0);

  __decorate([p(cc.Node)], e.prototype, "videoIcon", void 0);

  return __decorate([h], e);
}(cc.Component);

exports["default"] = m;

cc._RF.pop();