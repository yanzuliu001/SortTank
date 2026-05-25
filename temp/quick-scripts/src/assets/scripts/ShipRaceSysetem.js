"use strict";
cc._RF.push(module, '18ac00oSwFMy4eJ6zRvl4Nt', 'ShipRaceSysetem');
// scripts/ShipRaceSysetem.js

"use strict";

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $timeManager = require("./TimeManager");

var $bmsManager = require("./BmsManager");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var l = new (function () {
  function t() {
    this.startDate = new Date();
    this.isOpenShip = !1;
    this.initStartTime = $timeManager["default"].getCurrentTime();
    this.shipLevelTimeArr = [8, 12];
    this.surplusTime = 0;
    this.surplusTimeID = null;
    this.second = 0;
    this.secondTemp = 0;
  }

  t.prototype.init = function () {
    var t = this;
    var e = $localStorageManager["default"].get($localStorageConst["default"].shipStartTime) || 0;
    var n = $localStorageManager["default"].get($localStorageConst["default"].shipLevel) || 0;
    var s = this.shipLevelTimeArr[n];

    if (s) {//
    } else {
      s = this.shipLevelTimeArr[1];
    }

    if (e) {
      $bmsManager.BMS.getTime().then(function (n) {
        if (n.time) {
          console.log("服务器时间");
          t.initStartTime = 1e3 * n.time;
        }

        setInterval(function () {
          t.second += 3;
          t.secondTemp += 3;

          if (t.secondTemp >= 60) {
            t.secondTemp = 0;
            cc.game.emit("updateShipTime");
          }
        }, 3e3);
        t.surplusTime = 36e5 * s - (t.initStartTime - e);

        if (t.surplusTime > 0) {
          t.isOpenShip = !0;
          $timeManager["default"].addEventListener(t.timerFun.bind(t));
        } else {
          console.log("测试清湖村");
          t.clear();
        }
      });
    } else {
      $localStorageManager["default"].set($localStorageConst["default"].shipStartTime, 0);
    }
  };

  t.prototype.timerFun = function () {
    this.surplusTime -= 1e3;

    if (this.surplusTime <= 0) {
      console.log("测试清湖村222  timerFun");
      this.clear();
      console.log("划船阶段结束");
      cc.game.emit("shipExpire");
      $timeManager["default"].removeEventListener(this.timerFun.bind(this));
    }
  };

  t.prototype.clear = function () {
    console.log("clear-clear");
    var t = $localStorageManager["default"].get($localStorageConst["default"].shipLevel) || 0;
    t += 1;
    $localStorageManager["default"].set($localStorageConst["default"].shipLevel, t);
    $localStorageManager["default"].set($localStorageConst["default"].shipStartTime, 0);
    $localStorageManager["default"].set($localStorageConst["default"].todayShipExpire, 1);
    $localStorageManager["default"].set($localStorageConst["default"].allShipUIPos, null);
    $localStorageManager["default"].set($localStorageConst["default"].forwardTimes, 0);
    $localStorageManager["default"].set($localStorageConst["default"].lastTimeHasForward, null);
    $localStorageManager["default"].set($localStorageConst["default"].shipAICount, null);
    $localStorageManager["default"].set($localStorageConst["default"].otherShipForwardTimes, null);
    $localStorageManager["default"].set($localStorageConst["default"].shipAICount, null);
    $localStorageManager["default"].set($localStorageConst["default"].allShipName, null);
    $localStorageManager["default"].set($localStorageConst["default"].allShipRank, null);
  };

  t.prototype.countAIRanking = function () {
    $platformManager.Platform.getConfig().rank.includes("haiwai");
    var t = $localStorageManager["default"].get($localStorageConst["default"].allShipRank) || [];
    var e = $localStorageManager["default"].get($localStorageConst["default"].allShipName) || [];
    var n = $localStorageManager["default"].get($localStorageConst["default"].otherShipForwardTimes) || [0, 0, 0, 0];
    var i = $localStorageManager["default"].get($localStorageConst["default"].shipAICount) || 0;
    var a = $localStorageManager["default"].get($localStorageConst["default"].lastTimeHasForward) || [0, 0, 0, 0];
    var s = $localStorageManager["default"].get($localStorageConst["default"].shipStartTime);
    var l = $localStorageManager["default"].get($localStorageConst["default"].shipLevel) || 0;
    var u = this.shipLevelTimeArr[l];

    if (u) {//
    } else {
      u = this.shipLevelTimeArr[1];
    }

    var f = (this.initStartTime + 1e3 * this.second - s) / 1e3;
    var d = u / 10 * 3600;
    var h = Math.floor(f / d) - i;
    i += h;
    console.log("计算次数", h);
    var p = 4;

    if (l) {
      p = 8;
    }

    if (h > 0) {
      for (var m = 0; m < h; m++) {
        for (var g = 0; g < a.length; g++) {
          var y = 30;

          if (a[g]) {
            y = 0;
          }

          if (this.getResByChance(y)) {
            n[g] += 1;
            n[g] >= p && (n[g] = p);
            a[g] = 1;
          } else {
            a[g] = 0;
          }
        }
      }

      $localStorageManager["default"].set($localStorageConst["default"].otherShipForwardTimes, n);
      $localStorageManager["default"].set($localStorageConst["default"].lastTimeHasForward, a);
      var v = $localStorageManager["default"].get($localStorageConst["default"].forwardTimes) || 0;
      var w = this.insertElement(JSON.parse(JSON.stringify(n)), 2, v);
      console.log("五个前进次数", w);
      var _ = [];

      for (var b = 0; b < 5; b++) {
        var S = {};
        S.pos = b;
        S.nation = e[b];

        if (2 == b) {
          S.forward = v;
        } else {
          S.forward = w[b];
        }

        _.push(S);
      }

      console.log(_);

      _.sort(function (t, e) {
        return e.forward - t.forward;
      });

      for (b = 0; b < _.length; b++) {
        _[b].rank = b + 1;
      }

      var k = [];

      for (g = 0; g < e.length; g++) {
        var C = e[g];

        for (b = 0; b < _.length; b++) {
          if (C == _[b].nation) {
            k.push(_[b].rank);
            break;
          }
        }
      }

      console.log("旧排名", t);
      console.log("新排名", k);
      $localStorageManager["default"].set($localStorageConst["default"].allShipRank, k);
    }
  };

  t.prototype.insertElement = function (t, e, n) {
    t.splice(e, 0, n);
    return t;
  };

  t.prototype.calculateRank = function (t) {
    t.sort(function (t, e) {
      return e - t;
    });
    var e = [];

    for (var n = 0; n < t.length; n++) {
      if (0 === n || t[n] !== t[n - 1]) {
        e.push({
          value: t[n],
          rank: n + 1
        });
      } else {
        e[e.length - 1].rank++;
      }
    }

    return e;
  };

  t.prototype.getResByChance = function (t) {
    var e = 100 * Math.random();
    var n = !1;

    if (0 == t) {
      return n;
    } else {
      return t >= e && (n = !0), n;
    }
  };

  t.prototype.getSurplusTimeStr = function () {
    var t = this.initStartTime + 1e3 * this.second;
    var e = $localStorageManager["default"].get($localStorageConst["default"].shipLevel) || 0;
    var n = this.shipLevelTimeArr[e];

    if (n) {//
    } else {
      n = this.shipLevelTimeArr[1];
    }

    var i = 36e5 * n - (t - ($localStorageManager["default"].get($localStorageConst["default"].shipStartTime) || t));

    if (i > 0) {
      var a = Math.floor(i / 1e3 / 3600);
      var c = Math.floor(i / 1e3 % 3600 / 60);
      console.log("划船剩余时间:", i, Math.floor(a) + "时" + Math.floor(c) + "分");
      return $languageManager["default"].formatStr("%d时%d分", Math.floor(a), Math.floor(c));
    }

    return "";
  };

  return t;
}())();
exports["default"] = l;

cc._RF.pop();