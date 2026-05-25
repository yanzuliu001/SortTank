"use strict";
cc._RF.push(module, '2098bxGltFP5IC+VY6fSSaX', 'SignInManager');
// scripts/SignInManager.js

"use strict";

var r = new (function () {
  function t() {
    this.key = "signIn";
    this.todayIsSigned = !1;
  }

  t.prototype.init = function () {
    console.log("初始化签到系统");
    var t = this.getItem() || [new Date().getTime(), 0];
    this.setItem(t);

    if (this.isSameDay(new Date().getTime(), t[0])) {
      this.todayIsSigned = !0;
    } else {
      this.todayIsSigned = !1;
    }
  };

  t.prototype.signIn = function (t) {
    if (void 0 === t) {
      t = 1;
    }

    console.log("点击签到按钮");

    if (this.todayIsSigned) {
      return console.log("今天已经签到");
    }

    var e = this.getItem();
    e[0] = new Date().getTime();
    e[1] += 1;
    this.setItem(e);
    console.log("签到奖励");
    cc.game.emit("signInReward", t);
  };

  t.prototype.getItem = function () {
    var t = cc.sys.localStorage.getItem(this.key) || null;
    return JSON.parse(t);
  };

  t.prototype.setItem = function (t) {
    return cc.sys.localStorage.setItem(this.key, JSON.stringify(t));
  };

  t.prototype.isSameDay = function (t, e) {
    var n = new Date(t);
    var r = new Date(e);
    return n.getDate() === r.getDate() && n.getMonth() === r.getMonth() && n.getFullYear() === r.getFullYear();
  };

  return t;
}())();
exports["default"] = r;

cc._RF.pop();