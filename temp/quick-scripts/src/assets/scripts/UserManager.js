"use strict";
cc._RF.push(module, 'ccac2FwSaVHbrrHai/vHFRO', 'UserManager');
// scripts/UserManager.js

"use strict";

exports.User = void 0;

var $userConst = require("./UserConst");

var o = function () {
  function t() {
    this.prefix = "walkFast";
    this.defaultData = {};
    this.data = {};
    this.tempData = {};
    var t = this.get("offlineTime") || new Date().getTime();
    this.set("offlineTime", t);
    var e = new Date().getDate();
    var n = this.get($userConst.UserData.loginDaysTimes) || 1;
    this.set($userConst.UserData.loginDaysTimes, n);
    var o = this.get("newUserTimes") || 1;
    this.set("newUserTimes", o);
    var i = this.get("PlayDays") || 1;
    this.set("PlayDays", i);

    if (new Date(this.data.offlineTime).getDate() != e) {
      console.log("新的一天");
      this.set("cryHelpTimes", 0);
      this.set("todaySignIn", 0);
      this.set("todaySignInNationalDay", 0);
      this.set("offlineTime", new Date().getTime());
      this.set("todayOpenSignIn", !1);
      this.set($userConst.UserData.loginDaysTimes, n + 1);
      this.set("newUserTimes", o + 1);
      this.set($userConst.UserData.todayFirstPass, 0);
      this.set($userConst.UserData.isFirstShared, !1);
      this.set($userConst.UserData.getBoreByShareTimes, 2);
      this.set($userConst.UserData.getTipShareTimes, 2);
      this.set($userConst.UserData.getResetByShareTimes, 2);
      this.set($userConst.UserData.getDelayedByShareTimes, 2);
      this.set($userConst.UserData.todayShareOrVideoTimes, 0);
      this.set($userConst.UserData.todayChallengeTimes, 0);
      this.set("dailyShareFriendTimes", 0);
      this.set("dailyShareRecordTimes", 0);
      this.set($userConst.UserData.todayChallengeModeSuc, []);
      this.set($userConst.UserData.todayChallengeModeFail, []);
      this.set("tipWanTimes", 0);
      this.set("isGetBore", 0);
      this.set("PlayDays", i + 1);
      this.set("EnterSidebar", 0);
    }
  }

  t.prototype.get = function (t) {
    return this.getData(t);
  };

  t.prototype.set = function (t, e) {
    this.data[t] = e;
    this.save();
  };

  t.prototype.getTempData = function (t) {
    return this.tempData[t];
  };

  t.prototype.setTempData = function (t, e) {
    this.tempData[t] = e;
  };

  t.prototype.save = function () {
    for (var t in this.data) {
      cc.sys.localStorage.setItem(this.prefix + "_" + t, JSON.stringify(this.data[t]));
    }
  };

  t.prototype.getData = function (t) {
    var e = this.data[t];

    if (void 0 !== e) {
      return e;
    }

    try {
      var n = JSON.parse(cc.sys.localStorage.getItem(this.prefix + "_" + t)) || this.defaultData[t] || null;
      this.data[t] = n;
      return n;
    } catch (r) {
      return this.defaultData[t] || null;
    }
  };

  return t;
}();

exports.User = new o();

cc._RF.pop();