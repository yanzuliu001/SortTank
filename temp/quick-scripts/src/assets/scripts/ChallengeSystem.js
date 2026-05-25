"use strict";
cc._RF.push(module, 'e5e5dwYToVAEK9YeCPb25/3', 'ChallengeSystem');
// scripts/ChallengeSystem.js

"use strict";

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $timeManager = require("./TimeManager");

var $languageManager = require("./LanguageManager");

var s = new (function () {
  function t() {
    this.durationDay = 3;
    this.isOpen = !1;
    this.surplusTime = 0;
  }

  t.prototype.init = function () {
    var t = $localStorageManager["default"].get($localStorageConst["default"].challengeStartTime) || 0;

    if (t) {
      var e = $timeManager["default"].getCurrentTime();
      this.surplusTime = 864e5 * this.durationDay - (e - t);

      if (this.surplusTime > 0) {
        this.isOpen = !0;
        $timeManager["default"].addEventListener(this.timerFun.bind(this));
      } else {
        this.expire();
      }
    } else {
      $localStorageManager["default"].set($localStorageConst["default"].challengeStartTime, 0);
    }
  };

  t.prototype.expire = function () {
    $localStorageManager["default"].set($localStorageConst["default"].challengeStartTime, 0);
    $localStorageManager["default"].set($localStorageConst["default"].challengeUnlockAmount, 0);
    $localStorageManager["default"].set($localStorageConst["default"].challengeReceive, []);
  };

  t.prototype.timerFun = function () {
    this.surplusTime -= 1e3;
    cc.game.emit("challengeExpire_timerFun");

    if (this.surplusTime <= 0) {
      this.expire();
      console.log("极限挑战系统到期");
      cc.game.emit("challengeExpire");
      $timeManager["default"].removeEventListener(this.timerFun.bind(this));
    }
  };

  t.prototype.getSurplusTimeStr = function () {
    var t = Math.floor(this.surplusTime / 1e3 / 86400);
    var e = Math.floor(this.surplusTime / 1e3 % 86400 / 3600);
    var n = Math.floor(this.surplusTime / 1e3 % 3600 / 60);
    return $languageManager["default"].formatStr("%d天%d时%d分", t, e, n);
  };

  return t;
}())();
exports["default"] = s;

cc._RF.pop();