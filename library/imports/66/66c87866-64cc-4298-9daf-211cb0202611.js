"use strict";
cc._RF.push(module, '66c87hmZMxCmJ2vIRywICYR', 'IOS');
// scripts/IOS.js

"use strict";

var r;
exports.IOS = void 0;

var $basePlatform = require("./BasePlatform");

var $userConst = require("./UserConst");

var $audioManager = require("./AudioManager");

var $languageManager = require("./LanguageManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var f;

if (window.jsb && jsb.reflection) {
  f = jsb.reflection.callStaticMethod;
} else {
  f = function f() {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
  };
}

var d = function (t) {
  function e() {
    var e = t.call(this) || this;
    e._rewardAdsCb = null;
    e._isMute = null;
    console.log("ios");
    e.bindEvents();
    return e;
  }

  __extends(e, t);

  e.prototype.getInstance = function () {
    return this;
  };

  e.prototype.gainIOSBMSVersion = function () {
    var t = jsb.reflection.callStaticMethod("AppController", "gainIOSBMSVersion");
    console.log("获得版本号", t);
    cc.game.emit("version-update", t);
  };

  e.prototype.showRewardAds = function (t) {
    console.log("[platform] [IosPlatform] showRewardAds");
    this._rewardAdsCb = null;
    this._rewardAdsCb = t;
    jsb.reflection.callStaticMethod("AppController", "showAds");
  };

  e.prototype.showBanner = function () {
    console.log("[platform] [IosPlatform] showBanner");
    jsb.reflection.callStaticMethod("AppController", "showBannerAds1");
  };

  e.prototype.hideBanner = function () {
    console.log("[platform] [IosPlatform] hideBanner");
    jsb.reflection.callStaticMethod("AppController", "hiddenBanner");
  };

  e.prototype.showInsert = function () {
    console.log("[platform] [IosPlatform] showInsert");
    cc.game.emit("gamelog", "Level_Inter_" + $userManager.User.getTempData($userConst.TempData.CURRENT_MODE) + "_" + $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL));
    jsb.reflection.callStaticMethod("AppController", "fullscreenAds");
  };

  e.prototype.showOpenAd = function () {
    jsb.reflection.callStaticMethod("AppController", "showOpenAd");
  };

  e.prototype.bindEvents = function () {
    var t = this;

    window.iOSSendMsg = function (e) {
      if ("playAds" == e) {
        $audioManager.Audio.setMusicMute(1);
        cc.director.pause();
        cc.game.pause();
      }

      if ("playAdsEnd" != e && "rewardPlayEnd" != e && "rewardPlayNotEnd" != e) {//
      } else {
        cc.director.resume();
        cc.game.resume();
        $audioManager.Audio.setMusicMute(0);

        if ("rewardPlayEnd" == e && t._rewardAdsCb) {
          t._rewardAdsCb(0);
        }

        if ("rewardPlayNotEnd" == e && t._rewardAdsCb) {
          t._rewardAdsCb(1);
        }
      }

      if ("rewardad_fail" == e) {
        $tipManager.Tip.show($languageManager["default"].formatStr("暂无广告"));
      }

      if ("interad_fail" == e) {
        cc.game.emit("gamelog", "Level_Inter_Fail_" + $userManager.User.getTempData($userConst.TempData.CURRENT_MODE) + "_" + $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL));
      }

      if ("interad_suc" == e) {
        cc.game.emit("gamelog", "Level_Inter_Play_" + $userManager.User.getTempData($userConst.TempData.CURRENT_MODE) + "_" + $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL));
      }

      if ("iosApplicationDidBecomeActive" == e) {
        cc.game.emit("iosApplicationDidBecomeActive");
      }

      return "abcd";
    };

    cc.game.on(cc.game.EVENT_SHOW, function () {
      cc.director.resume();
      cc.game.resume();
      $audioManager.Audio.setMusicMute(0);
    });
  };

  e.prototype.report = function (t, e) {
    f("AppController", "customTrackerWithName:andDictString:", t, e);
  };

  e.prototype.gameComment = function () {
    f("AppController", "onCommentBtn");
  };

  e.prototype.showAdDebugger = function () {
    f("AppController", "showMediationDebugger");
  };

  return e;
}($basePlatform.BasePlatform);

exports.IOS = d;

cc._RF.pop();