"use strict";
cc._RF.push(module, 'a8643xXrDRAwoIz+TMrtkRv', 'Power');
// scripts/Power.js

"use strict";

var r;

var $eventConst = require("./EventConst");

var $popupConst = require("./PopupConst");

var $userConst = require("./UserConst");

var $bmsManager = require("./BmsManager");

var $effectManager = require("./EffectManager");

var $eventManager = require("./EventManager");

var $popupManager = require("./PopupManager");

var $userManager = require("./UserManager");

var $sceneConst = require("./SceneConst");

var $sceneManager = require("./SceneManager");

var g = cc._decorator;
var y = g.ccclass;
var v = g.property;

var w = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.labelTime = null;
    e.labelPower = null;
    e.icon = null;
    e.addImg = null;
    e.infinite = null;
    e.unitRecoverTime = 60;
    e.maxPower = 5;
    e.surplusTime = 0;
    e.power = 0;
    e.hasTimer = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {};

  e.prototype.powerEffect = function () {
    $effectManager.Effect.showEffect(5, this.icon);
  };

  e.prototype.onEnable = function () {
    this.initEvent();
    this.initView();
  };

  e.prototype.onDisable = function () {
    this.clearEvent();
  };

  e.prototype.initEvent = function () {
    $eventManager.Event.on($eventConst["default"].POWER_UPDATE, this.changePower, this);
    $eventManager.Event.on($eventConst["default"].POWER_EFFECT, this.powerEffect, this);
    $eventManager.Event.on($eventConst["default"].UPDATE_INFINITE_POWER, this.updateInfinitePower, this);
  };

  e.prototype.clearEvent = function () {
    $eventManager.Event.off($eventConst["default"].POWER_UPDATE, this.changePower, this);
    $eventManager.Event.off($eventConst["default"].POWER_EFFECT, this.powerEffect, this);
    $eventManager.Event.off($eventConst["default"].UPDATE_INFINITE_POWER, this.updateInfinitePower, this);
  };

  e.prototype.updateInfinitePower = function (t) {
    var e = this;
    console.log("测试status", t);

    if (t) {
      this.infinite.active = !0;
      this.labelTime.node.active = !1;
      this.labelPower.node.active = !1;
      this.scheduleOnce(function () {
        e.labelTime.node.active = !1;
      }, 0.2);
      this.addImg.active = !1;
    } else {
      this.infinite.active = !1;
      this.labelTime.node.active = !0;
      this.labelPower.node.active = !0;
      this.addImg.active = !0;
    }
  };

  e.prototype.startInvalidTimer = function () {
    this.schedule(function () {}, 5);
  };

  e.prototype.initView = function () {
    var t = $bmsManager.BMS.getKey("TiLi");
    console.log("bmsPower", t);

    if (0 == t) {
      this.node.active = !1;
    }

    if ($bmsManager.BMS.getKey("WuxianTiLi")) {
      var e = $userManager.User.get($userConst.UserData.INF_POWER_START_TIME);
      var n = new Date().getTime();

      if (e) {
        if (!((n - e) / 1e3 >= 86400)) {
          console.log("[当前属于无限体力状态]");
          $userManager.User.setTempData($userConst.TempData.IS_INFINITE_POWER, !0);
          $eventManager.Event.emit($eventConst["default"].UPDATE_INFINITE_POWER, !0);
          var r = 86400 - (n - e) / 1e3;
          console.log("剩余时间（小时）", r / 60 / 60);
          this.scheduleOnce(function () {
            $userManager.User.set($userConst.UserData.INF_POWER_START_TIME, 0);
            $userManager.User.set($userConst.UserData.INF_POWER_VIDEO_TIMES, 0);
            $userManager.User.setTempData($userConst.TempData.IS_INFINITE_POWER, !1);
            $eventManager.Event.emit($eventConst["default"].UPDATE_INFINITE_POWER, !1);
          }, r);
          return void (this.labelTime.node.active = !1);
        }

        $userManager.User.set($userConst.UserData.INF_POWER_START_TIME, 0);
        $userManager.User.setTempData($userConst.TempData.IS_INFINITE_POWER, !1);
        $userManager.User.set($userConst.UserData.INF_POWER_VIDEO_TIMES, 0);
      }
    }

    this.maxPower = $bmsManager.BMS.getKey("TiLi");
    this.surplusTime = this.unitRecoverTime;
    var o = cc.sys.localStorage.getItem("walkFast_power");
    console.log("本地存储res", o);

    if (null == o || null == o || "" == o) {
      this.power = this.maxPower;
    } else {
      this.power = $userManager.User.get($userConst.UserData.POWER);
    }

    $userManager.User.set($userConst.UserData.POWER, this.power);
    var i = this.getTime();
    var s;

    if (null == $userManager.User.get($userConst.UserData.RECOVERY_TIME)) {
      s = i;
    } else {
      s = $userManager.User.get($userConst.UserData.RECOVERY_TIME);
    }

    if (this.power >= this.maxPower) {
      this.updatePowerView();
    } else {
      var u = Math.floor((i - s) / 1e3);
      var d = Math.floor(u / this.unitRecoverTime);
      var p = u % this.unitRecoverTime;
      console.log("离线秒数", u);
      console.log("离线加体力", d);
      console.log("剩余计时时间", p);

      if (this.power + d >= this.maxPower) {
        this.power = this.maxPower;
      } else {
        this.power = this.power + d;
      }

      $userManager.User.set($userConst.UserData.POWER, this.power);
      this.updatePowerView();

      if (this.power < this.maxPower) {
        this.surplusTime = this.unitRecoverTime - p;
        $userManager.User.set($userConst.UserData.RECOVERY_TIME, i - 1e3 * p);
        this.updateTimeView();
        this.startTimer();
      }
    }
  };

  e.prototype.getTime = function () {
    return new Date().getTime();
  };

  e.prototype.changePower = function () {
    this.power = $userManager.User.get($userConst.UserData.POWER);
    this.updatePowerView();

    if (this.power >= this.maxPower && this.hasTimer) {
      this.hasTimer = !1;
      this.unscheduleAllCallbacks();
    }

    if (this.power < this.maxPower && !this.hasTimer) {
      this.surplusTime = this.unitRecoverTime;
      $userManager.User.set($userConst.UserData.RECOVERY_TIME, this.getTime());
      this.updateTimeView();
      this.startTimer();
    }
  };

  e.prototype.startTimer = function () {
    var t = this;

    if (this.hasTimer) {//
    } else {
      this.hasTimer = !0;
      this.schedule(function () {
        t.surplusTime -= 1;
        t.updateTimeView();

        if (0 == t.surplusTime) {
          t.power += 1;
          $userManager.User.set($userConst.UserData.POWER, t.power);
          t.updatePowerView();

          if (t.power >= t.maxPower) {
            t.hasTimer = !1, t.unscheduleAllCallbacks();
          } else {
            t.surplusTime = t.unitRecoverTime + 1, $userManager.User.set($userConst.UserData.RECOVERY_TIME, t.getTime());
          }
        }
      }, 1);
    }
  };

  e.prototype.updateTimeView = function () {
    this.labelTime.string = "" + this.secondFormat(this.surplusTime);
  };

  e.prototype.updatePowerView = function () {
    this.labelPower.string = "" + this.power;
    this.labelTime.node.active = this.power < this.maxPower;
  };

  e.prototype.clickSelf = function () {
    cc.game.emit("playClickAudio");

    if ($sceneManager["default"].getCurrentScene() == $sceneConst.SceneConst.MAIN) {
      cc.game.emit("gamelog", "btn006");
    } else {
      if ($sceneManager["default"].getCurrentScene() == $sceneConst.SceneConst.GAME) {
        cc.game.emit("gamelog", "btn021");
      }
    }

    if ($userManager.User.getTempData($userConst.TempData.IS_INFINITE_POWER)) {//
    } else {
      cc.game.emit("gamelog", "page010");
      $popupManager["default"].show($popupConst.PopupConst.POWER_SHORTAGE);
    }
  };

  e.prototype.secondFormat = function (t, e, n) {
    if (void 0 === e) {
      e = 2;
    }

    if (void 0 === n) {
      n = !1;
    }

    var r = t / 3600;
    var o = (t %= 3600) / 60;
    var i = t %= 60;
    var a;

    if ((r = Math.floor(r)) >= 10) {
      a = r + "";
    } else {
      a = "0" + r;
    }

    var s;

    if ((o = Math.floor(o)) >= 10) {
      s = o + "";
    } else {
      s = "0" + o;
    }

    var c;

    if ((i = Math.floor(i)) >= 10) {
      c = i + "";
    } else {
      c = "0" + i;
    }

    if (n) {
      i = 100 * i / 60;

      if ((i = Math.floor(i)) >= 10) {
        c = i + "";
      } else {
        c = "0" + i;
      }
    }

    var l = a + ":" + s + ":" + c;

    switch (e) {
      case 2:
        l = s + ":" + c;
    }

    return l;
  };

  __decorate([v(cc.Label)], e.prototype, "labelTime", void 0);

  __decorate([v(cc.Label)], e.prototype, "labelPower", void 0);

  __decorate([v(cc.Node)], e.prototype, "icon", void 0);

  __decorate([v(cc.Node)], e.prototype, "addImg", void 0);

  __decorate([v(cc.Node)], e.prototype, "infinite", void 0);

  return __decorate([y], e);
}(cc.Component);

exports["default"] = w;

cc._RF.pop();