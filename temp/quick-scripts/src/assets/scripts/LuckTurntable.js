"use strict";
cc._RF.push(module, 'd2305ltsO9Pqqx4LbEvyV+I', 'LuckTurntable');
// scripts/LuckTurntable.js

"use strict";

var r;

var $frameAnim = require("./FrameAnim");

var $turntable = require("./Turntable");

var $eventConst = require("./EventConst");

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $bmsManager = require("./BmsManager");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $userManager = require("./UserManager");

var $utils = require("./Utils");

var $shuShuConst = require("./ShuShuConst");

var k = cc._decorator;
var C = k.ccclass;
var M = (k.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.reward = [[0, 1, 10], [1, 100, 40], [0, 1, 9], [1, 100, 32.5], [0, 2, 0.5], [1, 300, 5], [0, 3, 0.5], [1, 500, 2.5]];
    e._isRunning = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.addBtnOn("yesBtn", this.yesBtn, this);
    this.addBtnOn("noBtn", this.noBtn, this);
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Activity_page, {
      id: 1
    });
    this.initView();
  };

  e.prototype.initView = function () {
    if (this.dict["title_" + $languageManager["default"].instance.lan]) {
      this.dict["title_" + $languageManager["default"].instance.lan].active = !0;
    }
  };

  e.prototype.yesBtn = function () {
    var t = this;

    if (!this._isRunning) {
      this._isRunning = !0;
      var e = [];
      this.reward.forEach(function (t, n) {
        e.push([n, t[2]]);
      });
      var n;
      var r = $localStorageManager["default"].get($localStorageConst["default"].isFirstTurntable) || 0;
      var o = $localStorageManager["default"].get($localStorageConst["default"].canTurntableTimes) || 0;

      if (r) {
        n = $utils.Utils.randomByWeight(e);
        o -= 8;
      } else {
        $localStorageManager["default"].set($localStorageConst["default"].isFirstTurntable, 1);
        n = 2;
        o -= 6;
      }

      console.log("权重", e, n);
      $localStorageManager["default"].set($localStorageConst["default"].canTurntableTimes, o);
      cc.game.emit("canTurntableTimes");
      this.node.getComponent($turntable["default"]).startRun(n, function () {
        console.log("结束");
        t.dict.light.getComponent($frameAnim["default"]).stopAnim();
        t._isRunning = !1;
        var e;
        var r = t.reward[n][0];
        var o = t.reward[n][1];

        if (0 == r) {
          e = [["card", o]];
          t.cardReward(o);
        } else {
          e = [["coin", o]];
          t.coinReward(o);
        }

        t.noBtn();
        $memoryStorageManager["default"].set($memoryStorageConst["default"].rewardType, "LuckTurntable");
        $memoryStorageManager["default"].set($memoryStorageConst["default"].reward, e);
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Activity_get, {
          id: 1
        });
        $popupManager["default"].show($popupConst.PopupConst.Get);
      });
      this.dict.light.getComponent($frameAnim["default"]).playLoop();
    }
  };

  e.prototype.cardReward = function (t) {
    var e = ($localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0) + t;
    $localStorageManager["default"].set($localStorageConst["default"].cardAmount, e);
  };

  e.prototype.coinReward = function (t) {
    var e = ($userManager.User.get("coin") || 0) + t;
    $userManager.User.set("coin", e);
    $eventManager.Event.emit($eventConst["default"].COIN_UPDATE);
    cc.game.emit("updateCoin");
    this.saveServerData("coin", e);
  };

  e.prototype.saveServerData = function (t, e) {
    e = e.toString();
    $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), t, e).then(function () {
      console.log("保存" + t + "成功:" + e);
    });
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  return __decorate([C], e);
}($uIBase["default"]));
exports["default"] = M;

cc._RF.pop();