"use strict";
cc._RF.push(module, '62a3cUDSBpAx7vj0LlIgCaQ', 'VIPSystem');
// scripts/VIPSystem.js

"use strict";

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $timeManager = require("./TimeManager");

var $languageManager = require("./LanguageManager");

var l = new (function () {
  function t() {
    this.vipIndexArr = [3, 7, 30];
    this.cardRewardArr = [5, 20, 60];
    this.surplusTime = 0;
    this.surplusTimeID = null;
  }

  t.prototype.init = function () {
    var t = this;
    var e = !1;
    var n = $timeManager["default"].getCurrentTime(); // try {
    //     e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIsVip", "()Z");
    //     console.log("获取是否是VIP", e);
    // } catch (u) {
    // console.log("checkIsSubscribeValid error:", u);

    var c = $localStorageManager["default"].get($localStorageConst["default"].vipStartTime) || 0;
    var l = $localStorageManager["default"].get($localStorageConst["default"].vipType) || 3;

    if (c) {
      if (864e5 * l - (n - c) > 0) {
        e = !0;
      } else {
        $localStorageManager["default"].set($localStorageConst["default"].vipStartTime, 0);
      }
    } // }


    $memoryStorageManager["default"].set($memoryStorageConst["default"].isVIP, e);

    if (e) {
      l = $localStorageManager["default"].get($localStorageConst["default"].vipType) || 3;
      c = $localStorageManager["default"].get($localStorageConst["default"].vipStartTime) || n;
      this.surplusTime = 864e5 * l - (n - c);
      this.surplusTimeID = setInterval(function () {
        t.surplusTime -= 1e4;

        if (t.surplusTime <= 0) {
          clearInterval(t.surplusTimeID);
          console.log("vip到期");
          cc.game.emit("vipExpire");
        }
      }, 1e4);
    } else {
      $localStorageManager["default"].set($localStorageConst["default"].vipType, 3);
    }
  };

  t.prototype.getSurplusTimeStr = function () {
    var t = $timeManager["default"].getCurrentTime();
    var e = 864e5 * ($localStorageManager["default"].get($localStorageConst["default"].vipType) || 3) - (t - ($localStorageManager["default"].get($localStorageConst["default"].vipStartTime) || t));
    var n = e / 864e5;
    var i = e / 36e5 % 24;
    console.log("VIP剩余时间:", e, Math.floor(n) + "天" + Math.floor(i) + "时");
    return $languageManager["default"].formatStr("%d天%d时", Math.floor(n), Math.floor(i));
  };

  return t;
}())();
exports["default"] = l;

cc._RF.pop();