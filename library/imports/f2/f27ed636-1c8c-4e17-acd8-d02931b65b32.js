"use strict";
cc._RF.push(module, 'f27edY2HIxOF6zY0Ckxtlsy', 'Android');
// scripts/Android.js

"use strict";

var r;
exports.Android = void 0;

var $basePlatform = require("./BasePlatform");

var $configManager = require("./ConfigManager");

var c;

if (window.jsb && jsb.reflection) {
  c = jsb.reflection.callStaticMethod;
} else {
  c = function c() {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
  };
}

var l = function (t) {
  function e() {
    var e = t.call(this) || this;
    e._rewardAdsCb = null;
    e._isGetReward = !1;
    e.insertCallBack = null;
    e.rewardCallBack = null;
    e.nativeAdvanceBigBannerCallBack = null;
    e.nativeInsertBannerImgCallBack = null;
    e.nativeAdvanceBigBannerTotal = 0;
    e.nativeInsertBannerImgTotal = 0;
    e.defaultClass = "org/cocos2dx/javascript/AppActivity";
    console.log("安卓");
    e.bindEvents();
    return e;
  }

  __extends(e, t);

  e.prototype.getInstance = function () {
    return this;
  };

  e.prototype.showRewardAds = function (t) {
    console.log("[platform] [AndroidPlatform] showRewardAds");
    window.iOSSendMsg = this.rewardCallBack;
    this._rewardAdsCb = null;
    this._rewardAdsCb = t;

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showVideo", "(Ljava/lang/String;)V", this._config.rewardID);
    }
  };

  e.prototype.showBanner = function () {
    console.log("[platform] [AndroidPlatform] showBanner");

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "addBanner", "(Ljava/lang/String;)V", this._config.bannerID);
    }
  };

  e.prototype.hideBanner = function () {
    console.log("[platform] [AndroidPlatform] hideBanner");

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
    }
  };

  e.prototype.showNativeAdvanceBigBanner = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    if (this.nativeAdvanceBigBannerTotal > 0) {
      return t && t();
    }

    this.nativeAdvanceBigBannerTotal++;
    console.log("[platform] [AndroidPlatform] showNativeAdvanceBigBanner");

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showNativeAdvanceBigBanner", "(Z)V", e);
    }

    this.nativeAdvanceBigBannerCallBack = t;
  };

  e.prototype.showAdDebugger = function () {
    console.log("调用debug");
    this.javaCall("showAdDebugger", "()V");
  };

  e.prototype.hideNativeAdvanceBigBanner = function () {
    console.log("[platform] [AndroidPlatform] hideNativeAdvanceBigBanner");

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideNativeAdvanceBigBanner", "()V");
    }

    this.nativeAdvanceBigBannerTotal--;

    if (this.nativeAdvanceBigBannerTotal <= 0) {
      this.nativeAdvanceBigBannerTotal = 0;
    }
  };

  e.prototype.showInsertBannerImg = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    if (this.nativeInsertBannerImgTotal > 0) {
      return t && t(0);
    }

    this.nativeInsertBannerImgTotal++;
    console.log("[platform] [AndroidPlatform] showInsertBannerImg");

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInsertBannerImg", "(Z)V", e);
    }

    this.nativeInsertBannerImgCallBack = t;
  };

  e.prototype.hideInsertBannerImg = function () {
    console.log("[platform] [AndroidPlatform] hideInsertBannerImg");

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideInsertBannerImg", "()V");
    }

    this.nativeInsertBannerImgTotal--;

    if (this.nativeInsertBannerImgTotal <= 0) {
      this.nativeInsertBannerImgTotal = 0;
    }
  };

  e.prototype.showInsert = function () {
    console.log("[platform] [AndroidPlatform] showInsert");
    cc.game.emit("insetVideoAsk");
    window.iOSSendMsg = this.insertCallBack;

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInsertBanner", "(Ljava/lang/String;)V", this._config.insertID);
    }
  };

  e.prototype.vibrate = function (t) {
    if (void 0 === t) {
      t = 30;
    }

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "vibrate", "(I)V", t);
    }
  };

  e.prototype.showPrivacyPolicy = function () {
    console.log("[platform] [AndroidPlatform] showPrivacyPolicy");

    if (window.jsb && window.jsb.reflection) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "lookPrivacyPolicy", "()V");
    }
  };

  e.prototype.bindEvents = function () {
    var t = this;

    window.bannerShow = function () {
      console.log("[platform] [AndroidPlatform] bannerShow");
    };

    window.bannerShow_err = function () {
      console.log("[platform] [AndroidPlatform] bannerShow_err");
    };

    window.clickBanner = function () {
      console.log("[platform] [AndroidPlatform] clickBanner");
    };

    window.videoUnfinish = function () {
      console.log("[platform] [AndroidPlatform] videoUnfinish");
      setTimeout(function () {
        if (t._rewardAdsCb) {
          t._rewardAdsCb(1);
        }

        t._rewardAdsCb = null;
      }, 200);
    };

    window.videoFinish = function () {
      console.log("[platform] [AndroidPlatform] videoFinish");
      setTimeout(function () {
        if (t._rewardAdsCb) {
          t._rewardAdsCb(0);
        }

        t._rewardAdsCb = null;
        window.AdjustEventSys.todayRewardTimes();
      }, 200);
    };

    window.videoError = function () {
      console.log("[platform] [AndroidPlatform] videoError");
      cc.game.emit("adNotReady");
      setTimeout(function () {
        if (t._rewardAdsCb) {
          t._rewardAdsCb(-1);
        }

        t._rewardAdsCb = null;
      }, 200);
    };

    window.insetVideoSuccess = function () {
      console.log("[platform] [AndroidPlatform] insetVideoSuccess");
    };

    window.rewardVideoSuccess = function () {
      console.log("[platform] [AndroidPlatform] rewardVideoSuccess");
    };

    var e = {
      onRequestPermissionsSuccess: function onRequestPermissionsSuccess() {
        console.log("[platform] [AndroidPlatform] 权限获取成功");
      },
      onRequestPermissionsFail: function onRequestPermissionsFail() {
        console.log("[platform] [AndroidPlatform] 权限获取失败");
      },
      onRequestFailAndNeverAsk: function onRequestFailAndNeverAsk() {
        console.log("[platform] [AndroidPlatform] 权限获取失败且用户点选不再询问");
      },
      onPrivacyAccept: function onPrivacyAccept() {
        console.log("[platform] [AndroidPlatform] 同意隐私协议");
      },
      onPrivacyReject: function onPrivacyReject() {
        console.log("[platform] [AndroidPlatform] 拒绝隐私协议");
      },
      onRewardVideoShow: function onRewardVideoShow() {
        console.log("[platform] [AndroidPlatform] 激励视频展示");
        cc.audioEngine.pauseAll();
        window.rewardVideoSuccess();
        t._isGetReward = !1;
      },
      onRewardVideoComplete: function onRewardVideoComplete() {
        console.log("[platform] [AndroidPlatform] 激励视频播放完成");
        t._isGetReward = !0;
      },
      onRewardVideoClose: function onRewardVideoClose() {
        console.log("[platform] [AndroidPlatform] 激励视频关闭 是否发放奖励:", t._isGetReward);
        cc.audioEngine.resumeAll();

        if (t._isGetReward) {
          setTimeout(function () {
            window.videoFinish();
          }, 200);
        } else {
          window.videoUnfinish();
        }

        t._isGetReward = !1;
      },
      onRewardVideoFail: function onRewardVideoFail() {
        console.log("[platform] [AndroidPlatform] 激励视频播放失败");
        window.videoError();
        t._isGetReward = !1;
      },
      onInterstitialShow: function onInterstitialShow() {
        console.log("[platform] [AndroidPlatform] 插屏展示");
        window.insetVideoSuccess();
        cc.audioEngine.pauseAll();
      },
      onInterstitialClose: function onInterstitialClose() {
        console.log("[platform] [AndroidPlatform] 插屏跳过");
        cc.audioEngine.resumeAll();
      },
      onFeedRenderSuccess: function onFeedRenderSuccess() {
        console.log("[platform] [AndroidPlatform] 信息流渲染成功");
      },
      onFeedRenderFail: function onFeedRenderFail() {
        console.log("[platform] [AndroidPlatform] 信息流渲染失败");
      },
      onSplashShow: function onSplashShow() {
        console.log("[platform] [AndroidPlatform] onSplashShow");
      },
      onSplashClose: function onSplashClose() {
        console.log("[platform] [AndroidPlatform] onSplashClose");
      },
      onUnionSdkInitSuccess: function onUnionSdkInitSuccess() {
        console.log("[platform] [AndroidPlatform] 聚合sdk初始化成功");
      },
      onNativeAdvanceBigBannerShow: function onNativeAdvanceBigBannerShow() {
        console.log("[platform] [AndroidPlatform] 原生大图成功展示");

        if (t.nativeAdvanceBigBannerCallBack) {
          t.nativeAdvanceBigBannerCallBack();
        }

        t.nativeAdvanceBigBannerCallBack = null;
      },
      onInsertBannerImgClose: function onInsertBannerImgClose() {
        console.log("[platform] [AndroidPlatform] 插屏图片关闭展示");

        if (t.nativeInsertBannerImgCallBack) {
          t.nativeInsertBannerImgCallBack(0);
        }

        t.nativeInsertBannerImgCallBack = null;
        t.nativeInsertBannerImgTotal--;

        if (t.nativeInsertBannerImgTotal <= 0) {
          t.nativeInsertBannerImgTotal = 0;
        }
      },
      onBannerShow: function onBannerShow() {},
      onBannerRemoved: function onBannerRemoved() {
        console.log("onBannerRemoved");
        cc.game.emit("onBannerRemoved");
      }
    };
    window.unionSdkCallback = e;

    this.insertCallBack = function (t) {
      if ("adCompleted" == t) {
        console.log("[AndroidAdCtrler][insertCallBack][adCompleted]");
      } else {
        if ("adSkipped" == t) {
          console.log("[AndroidAdCtrler][insertCallBack][adSkipped]"), cc.game.emit("adSkipped"), console.log("中途播放");
        } else {
          if ("adsVideoFail" == t) {
            console.log("[AndroidAdCtrler][insertCallBack][adsVideoFail]"), cc.game.emit("adsVideoFail"), window.iOSSendMsg = function () {};
          } else {
            "insetVideoSuccess" == t && (cc.game.emit("insetVideoSuccess"), console.log("[AndroidAdCtrler][insertCallBack][insetVideoSuccess]"));
          }
        }
      }
    };

    this.rewardCallBack = function (e) {
      if ("adCompleted" == e) {
        console.log("[AndroidAdCtrler][rewardCallBack][videoFinish] 看完广告");

        window.iOSSendMsg = function () {};

        t._rewardAdsCb && t._rewardAdsCb(0);
        t._rewardAdsCb = null;
        cc.audioEngine.resumeAll();
      } else {
        if ("adSkipped" == e) {
          console.log("[AndroidAdCtrler][rewardCallBack][videoUnfinish] 中途广告"), cc.audioEngine.resumeAll(), window.iOSSendMsg = function () {}, t._rewardAdsCb && t._rewardAdsCb(1), t._rewardAdsCb = null;
        } else {
          if ("adsVideoFail" == e) {
            console.log("[AndroidAdCtrler][rewardCallBack][adsVideoFail]"), window.iOSSendMsg = function () {}, t._rewardAdsCb && t._rewardAdsCb(1), t._rewardAdsCb = null, cc.audioEngine.resumeAll();
          } else {
            "rewardVideoSuccess" == e && (console.log("[AndroidAdCtrler][rewardCallBack][rewardVideoSuccess]"), cc.audioEngine.pauseAll());
          }
        }
      }
    };

    window.androidSignInClose = function () {
      setTimeout(function () {
        cc.game.emit("androidSignInClose");
      }, 0);
    };

    window.androidSignInSuc = function () {
      setTimeout(function () {
        cc.game.emit("androidSignInSuc");
      }, 0);
    };

    window.insetVideoSkip = function () {
      cc.game.emit("interad_close");
    };

    window.insetVideoClose = function () {
      cc.game.emit("interad_close");
    };

    window.adNotReady = function () {
      cc.game.emit("adNotReady");
    };

    window.shareSuc = function () {
      cc.game.emit("shareSuc_");
    };

    window.shareFail = function () {
      cc.game.emit("shareFail_");
    };

    var n = [];
    $configManager.Config.get("config/Purchase").then(function (t) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e];
        n.push(r.goodsID);
      }

      n.forEach(function (t) {
        window[t + "_suc"] = function (e) {
          if (void 0 === e) {
            e = 1;
          }

          cc.game.emit(t + "_suc", e);
        };

        window[t + "_fail"] = function () {
          cc.game.emit(t + "_fail");
        };
      });
    });
  };

  e.prototype.report = function (t, e) {
    if ("number" == typeof e) {
      e = e.toString();
    }

    this.javaCall("sendMsg", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
  };

  e.prototype.adjustEvent = function (t) {
    this.javaCall("adjustEvent", "(Ljava/lang/String;)V", t);
  };

  e.prototype.javaCall = function () {
    var t = [];

    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    return c.apply(void 0, __spreadArrays([this.defaultClass], t));
  };

  e.prototype.showMoreGame = function () {
    this.javaCall("jumpLeisureSubject", "()V");
  };

  e.prototype.signIn = function () {
    console.log("调用登录");
    this.javaCall("signIn", "()V");
  };

  e.prototype.gameComment = function () {
    this.javaCall("onCommentBtn", "()V");
  };

  e.prototype.purchase = function (t) {
    this.javaCall("purchase", "(Ljava/lang/String;)V", t);
  };

  e.prototype.subscribe = function (t) {
    this.javaCall("subscribe", "(Ljava/lang/String;)V", t);
  };

  e.prototype.share = function () {
    this.javaCall("share", "()V");
  };

  return e;
}($basePlatform.BasePlatform);

exports.Android = l;

cc._RF.pop();