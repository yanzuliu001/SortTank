"use strict";
cc._RF.push(module, 'a70a8sc1yVNz7MeZG+eJSCO', 'ModeSelectItem');
// scripts/ModeSelectItem.js

"use strict";

var r;
var a;

var $sceneConst = require("./SceneConst");

var $userConst = require("./UserConst");

var $sceneManager = require("./SceneManager");

var $userManager = require("./UserManager");

var $configUtils = require("./ConfigUtils");

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
    e.icon = null;
    e.level = null;
    e.modeName = null;
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
    var t = this;
    var e = this.param.data;
    var n = e.theme;
    var r = $userManager.User.get($userConst.UserData.LEVEL_LIST);
    var o = 1;
    var i = 1;

    if (r[n]) {
      o = r[n];
    }

    $configUtils.ConfigUtils.getDataByID(e.theme, function (e) {
      i = e.amount;

      if (o >= i) {
        o = i;
      }

      t.level.string = o + "/" + i;
    });
    this.modeName.string = "" + e.themeName;
    cc.resources.load("texture/banner/" + e.theme, function (e, n) {
      if (e) {
        return console.log(e);
      }

      t.icon.spriteFrame = new cc.SpriteFrame(n);
    });
  };

  e.prototype.clickEnter = function () {
    console.log("测试点鸡蛋1111");
    var t = this.param.data.theme;
    $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t);
    var e = $userManager.User.get($userConst.UserData.LEVEL_LIST);
    $configUtils.ConfigUtils.setNextModeID();
    var n = 1;
    $configUtils.ConfigUtils.getDataByID(t, function (r) {
      n = r.amount;

      if (e[t] > n) {
        $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
      } else {
        $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, e[t]);
      }
    });
    $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
  };

  e.state = a;

  __decorate([p(cc.Sprite)], e.prototype, "icon", void 0);

  __decorate([p(cc.Label)], e.prototype, "level", void 0);

  __decorate([p(cc.Label)], e.prototype, "modeName", void 0);

  return __decorate([h], e);
}(cc.Component);

exports["default"] = m;

cc._RF.pop();