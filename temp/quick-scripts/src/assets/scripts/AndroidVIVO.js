"use strict";
cc._RF.push(module, '6fdf6GtxzFCJIVJDPn7n3kv', 'AndroidVIVO');
// scripts/AndroidVIVO.js

"use strict";

var r;

var $android = require("./Android");

var s;

if (window.jsb && jsb.reflection) {
  s = jsb.reflection.callStaticMethod;
} else {
  s = function s() {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
  };
}

var c = "org/cocos2dx/javascript/SdkBridge";

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e._canReward = !1;
    e.onRewardSucFunc = null;

    e.onRewardFaiFunc = function () {};

    e.onInterstitialFeedSucFunc = function () {};

    e.onInterstitialFeedFaiFunc = function () {};

    e.isRewardVideo = !1;
    e.isGetReward = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.javaCall = function () {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    s.apply(void 0, __spreadArrays([c], t));
  };

  e.prototype.bindEvents = function () {
    var t = this;
    var e = {
      onRewardVideoComplete: function onRewardVideoComplete() {
        console.log("== [AndroidVIVO] 激励视频播放完成 ==");
        t._canReward = !0;
        cc.audioEngine.resumeAll();
        setTimeout(function () {
          t.onRewardAdCallBack("adCompleted");
        }, 200);
      },
      onRewardVideoClose: function onRewardVideoClose() {
        console.log("== [AndroidVIVO] 激励视频关闭 是否发放奖励: " + t._canReward + " ==");
        t._canReward = !1;
      },
      onRewardVideoShow: function onRewardVideoShow() {
        console.log("== [AndroidVIVO] 激励视频展示 ==");
        t.onRewardAdCallBack("rewardVideoSuccess");
        t._canReward = !1;
        cc.audioEngine.pauseAll();
      },
      onRewardVideoFailed: function onRewardVideoFailed() {
        console.log("== [AndroidVIVO] 激励视频播放失败 ==");
        t._canReward = !1;
        t.onRewardAdCallBack("adsVideoFail");
      },
      onInterstitialVideoShow: function onInterstitialVideoShow() {
        console.log("== [AndroidVIVO] 插屏展示 ==");
        cc.audioEngine.pauseAll();
      },
      onInterstitialVideoClose: function onInterstitialVideoClose() {
        console.log("== [AndroidVIVO] 插屏跳过 ==");
        cc.audioEngine.resumeAll();
      },
      onInterstitialVideoShowFailed: function onInterstitialVideoShowFailed() {},
      onFeedShow: function onFeedShow() {},
      onFeedShowFailed: function onFeedShowFailed() {},
      onFeedClose: function onFeedClose() {},
      onBannerShow: function onBannerShow() {},
      onBannerShowFailed: function onBannerShowFailed() {},
      onBannerRemove: function onBannerRemove() {},
      onBannerFeedShow: function onBannerFeedShow() {},
      onBannerFeedShowFailed: function onBannerFeedShowFailed() {},
      onBannerFeedRemove: function onBannerFeedRemove() {},
      onInterstitialFeedShow: function onInterstitialFeedShow() {
        console.log("[原生插屏展示]");
        cc.game.emit("onInterstitialFeedShow");
      },
      onInterstitialFeedShowFailed: function onInterstitialFeedShowFailed() {
        console.log("[原生插屏展示失败]");
        cc.game.emit("onInterstitialFeedShowFailed");
      },
      onInterstitialFeedRemove: function onInterstitialFeedRemove() {
        console.log("[原生插屏移除]");
      },
      onLargeFeedShow: function onLargeFeedShow() {},
      onLargeFeedShowFailed: function onLargeFeedShowFailed() {},
      onLargeFeedRemove: function onLargeFeedRemove() {},
      onInterstitialFeedClick: function onInterstitialFeedClick() {},
      onInterstitialClick: function onInterstitialClick() {
        console.log("[插屏点击]");
      },
      onUserCloseBannerFeed: function onUserCloseBannerFeed() {
        console.log("[用户主动关闭原生banner]");
      },
      onUserCloseLargeFeed: function onUserCloseLargeFeed() {
        console.log("[用户主动关闭原生大图]");
      },
      onUserCloseInterstitialFeed: function onUserCloseInterstitialFeed() {
        console.log("[用户主动关闭原生插屏]");
        cc.game.emit("onInterstitialFeedRemove");
      }
    };
    window.vivoAdCallback = e;
  };

  e.prototype.onRewardAdCallBack = function (t) {
    var e = this;
    setTimeout(function () {
      if ("adCompleted" == t) {
        console.log("[this] --> 视频观看完毕");
        cc.audioEngine.resumeAll();
        e.onRewardSucFunc && e.onRewardSucFunc(0);

        window.iOSSendMsg = function () {};
      } else {
        if ("adSkipped" == t) {
          console.log("[this] --> 中途关闭广告"), cc.audioEngine.resumeAll(), window.iOSSendMsg = function () {}, e.onRewardSucFunc && e.onRewardSucFunc(1);
        } else {
          if ("adsVideoFail" == t) {
            console.log("[this] --> 视频正在加载中，请稍后"), console.log("[AndroidAdCtrler] --> [adsVideoFail]"), e.onRewardSucFunc && e.onRewardSucFunc(-1), window.iOSSendMsg = function () {};
          } else {
            "rewardVideoSuccess" == t && (console.log("[AndroidAdCtrler] --> [rewardVideoSuccess]"), cc.audioEngine.pauseAll());
          }
        }
      }
    }, 100);
  };

  e.prototype.setNativeAdId = function (t) {
    s(c, "saveNativeAdPosId", "(Ljava/lang/String;)V", t);
  };

  e.prototype.showRewardAds = function (t) {
    this.isRewardVideo = !0;
    s(c, "showVideo", "(Ljava/lang/String;)V", "");
    this.onRewardSucFunc = t;
    window.iOSSendMsg = this.onRewardAdCallBack.bind(this);
  };

  e.prototype.showInsert = function () {
    this.javaCall("showFullVideo", "()V");
    window.iOSSendMsg = this.onFullAdCallBack.bind(this);
  };

  e.prototype.onFullAdCallBack = function (t) {
    if ("adCompleted" == t) {
      console.log("[AndroidAdCtrler][insertCallBack][adCompleted]");

      window.iOSSendMsg = function () {};
    } else {
      if ("adSkipped" == t) {
        console.log("[AndroidAdCtrler][insertCallBack][adSkipped]"), console.log("中途播放");
      } else {
        if ("adsVideoFail" == t) {
          console.log("[AndroidAdCtrler][insertCallBack][adsVideoFail]"), window.iOSSendMsg = function () {};
        } else {
          "insetVideoSuccess" == t && console.log("[AndroidAdCtrler][insertCallBack][insetVideoSuccess]");
        }
      }
    }
  };

  e.prototype.showBanner = function () {
    s(c, "showBanner", "()V");
  };

  e.prototype.showBannerFeed = function (t) {
    s(c, "showBannerFeed", "(IIII)V", 2, 0, 0, t.ratio);
  };

  e.prototype.showLargeFeed = function (t, e) {
    if (void 0 === t) {
      t = "";
    }

    if (void 0 === e) {
      e = 0;
    }

    jsb.reflection.callStaticMethod(c, "showLargeFeed", "(Ljava/lang/String;III)V", t, 0, 0, e);
  };

  e.prototype.removeLargePicFeed = function (t) {
    if (void 0 === t) {
      t = "";
    }

    jsb.reflection.callStaticMethod("com/wonder/xiaomi/XiaomiSdk", "removeLargePicFeed", "(Ljava/lang/String;)V", t);
  };

  e.prototype.showInterstitialFeed = function (t, e, n, r) {
    if (void 0 === t) {
      t = "";
    }

    if (void 0 === e) {
      e = 3;
    }

    if (void 0 === n) {
      n = 0;
    }

    if (void 0 === r) {
      r = 0;
    }

    jsb.reflection.callStaticMethod(c, "showInterstitialFeed", "(Ljava/lang/String;IIIII)V", t, e, 0, 0, n, r);
  };

  e.prototype.hideBanner = function () {
    s(c, "removeBannerFeed", "()V");
    s(c, "removeBanner", "()V");
  };

  return e;
}($android.Android);

exports["default"] = l;

cc._RF.pop();