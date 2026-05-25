
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Android.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FuZHJvaWQuanMiXSwibmFtZXMiOlsiciIsImV4cG9ydHMiLCJBbmRyb2lkIiwiJGJhc2VQbGF0Zm9ybSIsInJlcXVpcmUiLCIkY29uZmlnTWFuYWdlciIsImMiLCJ3aW5kb3ciLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsInQiLCJlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibCIsImNhbGwiLCJfcmV3YXJkQWRzQ2IiLCJfaXNHZXRSZXdhcmQiLCJpbnNlcnRDYWxsQmFjayIsInJld2FyZENhbGxCYWNrIiwibmF0aXZlQWR2YW5jZUJpZ0Jhbm5lckNhbGxCYWNrIiwibmF0aXZlSW5zZXJ0QmFubmVySW1nQ2FsbEJhY2siLCJuYXRpdmVBZHZhbmNlQmlnQmFubmVyVG90YWwiLCJuYXRpdmVJbnNlcnRCYW5uZXJJbWdUb3RhbCIsImRlZmF1bHRDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJiaW5kRXZlbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiZ2V0SW5zdGFuY2UiLCJzaG93UmV3YXJkQWRzIiwiaU9TU2VuZE1zZyIsIl9jb25maWciLCJyZXdhcmRJRCIsInNob3dCYW5uZXIiLCJiYW5uZXJJRCIsImhpZGVCYW5uZXIiLCJzaG93TmF0aXZlQWR2YW5jZUJpZ0Jhbm5lciIsInNob3dBZERlYnVnZ2VyIiwiamF2YUNhbGwiLCJoaWRlTmF0aXZlQWR2YW5jZUJpZ0Jhbm5lciIsInNob3dJbnNlcnRCYW5uZXJJbWciLCJoaWRlSW5zZXJ0QmFubmVySW1nIiwic2hvd0luc2VydCIsImNjIiwiZ2FtZSIsImVtaXQiLCJpbnNlcnRJRCIsInZpYnJhdGUiLCJzaG93UHJpdmFjeVBvbGljeSIsImJhbm5lclNob3ciLCJiYW5uZXJTaG93X2VyciIsImNsaWNrQmFubmVyIiwidmlkZW9VbmZpbmlzaCIsInNldFRpbWVvdXQiLCJ2aWRlb0ZpbmlzaCIsIkFkanVzdEV2ZW50U3lzIiwidG9kYXlSZXdhcmRUaW1lcyIsInZpZGVvRXJyb3IiLCJpbnNldFZpZGVvU3VjY2VzcyIsInJld2FyZFZpZGVvU3VjY2VzcyIsIm9uUmVxdWVzdFBlcm1pc3Npb25zU3VjY2VzcyIsIm9uUmVxdWVzdFBlcm1pc3Npb25zRmFpbCIsIm9uUmVxdWVzdEZhaWxBbmROZXZlckFzayIsIm9uUHJpdmFjeUFjY2VwdCIsIm9uUHJpdmFjeVJlamVjdCIsIm9uUmV3YXJkVmlkZW9TaG93IiwiYXVkaW9FbmdpbmUiLCJwYXVzZUFsbCIsIm9uUmV3YXJkVmlkZW9Db21wbGV0ZSIsIm9uUmV3YXJkVmlkZW9DbG9zZSIsInJlc3VtZUFsbCIsIm9uUmV3YXJkVmlkZW9GYWlsIiwib25JbnRlcnN0aXRpYWxTaG93Iiwib25JbnRlcnN0aXRpYWxDbG9zZSIsIm9uRmVlZFJlbmRlclN1Y2Nlc3MiLCJvbkZlZWRSZW5kZXJGYWlsIiwib25TcGxhc2hTaG93Iiwib25TcGxhc2hDbG9zZSIsIm9uVW5pb25TZGtJbml0U3VjY2VzcyIsIm9uTmF0aXZlQWR2YW5jZUJpZ0Jhbm5lclNob3ciLCJvbkluc2VydEJhbm5lckltZ0Nsb3NlIiwib25CYW5uZXJTaG93Iiwib25CYW5uZXJSZW1vdmVkIiwidW5pb25TZGtDYWxsYmFjayIsImFuZHJvaWRTaWduSW5DbG9zZSIsImFuZHJvaWRTaWduSW5TdWMiLCJpbnNldFZpZGVvU2tpcCIsImluc2V0VmlkZW9DbG9zZSIsImFkTm90UmVhZHkiLCJzaGFyZVN1YyIsInNoYXJlRmFpbCIsIm4iLCJDb25maWciLCJnZXQiLCJ0aGVuIiwicHVzaCIsImdvb2RzSUQiLCJmb3JFYWNoIiwicmVwb3J0IiwidG9TdHJpbmciLCJhZGp1c3RFdmVudCIsImFwcGx5IiwiX19zcHJlYWRBcnJheXMiLCJzaG93TW9yZUdhbWUiLCJzaWduSW4iLCJnYW1lQ29tbWVudCIsInB1cmNoYXNlIiwic3Vic2NyaWJlIiwic2hhcmUiLCJCYXNlUGxhdGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtB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TFQsYUFBYSxDQUFDNkcsWUFuWlQsQ0FBUjs7QUFvWkEvRyxPQUFPLENBQUNDLE9BQVIsR0FBa0JhLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbmV4cG9ydHMuQW5kcm9pZCA9IHZvaWQgMDtcbnZhciAkYmFzZVBsYXRmb3JtID0gcmVxdWlyZShcIi4vQmFzZVBsYXRmb3JtXCIpO1xudmFyICRjb25maWdNYW5hZ2VyID0gcmVxdWlyZShcIi4vQ29uZmlnTWFuYWdlclwiKTtcbnZhciBjO1xuaWYgKHdpbmRvdy5qc2IgJiYganNiLnJlZmxlY3Rpb24pIHtcbiAgICBjID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZDtcbn0gZWxzZSB7XG4gICAgYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgIHRbZV0gPSBhcmd1bWVudHNbZV07XG4gICAgICAgIH1cbiAgICB9O1xufVxudmFyIGwgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IHQuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBlLl9yZXdhcmRBZHNDYiA9IG51bGw7XG4gICAgICAgIGUuX2lzR2V0UmV3YXJkID0gITE7XG4gICAgICAgIGUuaW5zZXJ0Q2FsbEJhY2sgPSBudWxsO1xuICAgICAgICBlLnJld2FyZENhbGxCYWNrID0gbnVsbDtcbiAgICAgICAgZS5uYXRpdmVBZHZhbmNlQmlnQmFubmVyQ2FsbEJhY2sgPSBudWxsO1xuICAgICAgICBlLm5hdGl2ZUluc2VydEJhbm5lckltZ0NhbGxCYWNrID0gbnVsbDtcbiAgICAgICAgZS5uYXRpdmVBZHZhbmNlQmlnQmFubmVyVG90YWwgPSAwO1xuICAgICAgICBlLm5hdGl2ZUluc2VydEJhbm5lckltZ1RvdGFsID0gMDtcbiAgICAgICAgZS5kZWZhdWx0Q2xhc3MgPSBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5a6J5Y2TXCIpO1xuICAgICAgICBlLmJpbmRFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93UmV3YXJkQWRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIHNob3dSZXdhcmRBZHNcIik7XG4gICAgICAgIHdpbmRvdy5pT1NTZW5kTXNnID0gdGhpcy5yZXdhcmRDYWxsQmFjaztcbiAgICAgICAgdGhpcy5fcmV3YXJkQWRzQ2IgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZXdhcmRBZHNDYiA9IHQ7XG4gICAgICAgIGlmICh3aW5kb3cuanNiICYmIHdpbmRvdy5qc2IucmVmbGVjdGlvbikge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcbiAgICAgICAgICAgICAgICBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsXG4gICAgICAgICAgICAgICAgXCJzaG93VmlkZW9cIixcbiAgICAgICAgICAgICAgICBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLFxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5yZXdhcmRJRFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0Jhbm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIHNob3dCYW5uZXJcIik7XG4gICAgICAgIGlmICh3aW5kb3cuanNiICYmIHdpbmRvdy5qc2IucmVmbGVjdGlvbikge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcbiAgICAgICAgICAgICAgICBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsXG4gICAgICAgICAgICAgICAgXCJhZGRCYW5uZXJcIixcbiAgICAgICAgICAgICAgICBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLFxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5iYW5uZXJJRFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUJhbm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIGhpZGVCYW5uZXJcIik7XG4gICAgICAgIGlmICh3aW5kb3cuanNiICYmIHdpbmRvdy5qc2IucmVmbGVjdGlvbikge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd05hdGl2ZUFkdmFuY2VCaWdCYW5uZXIgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubmF0aXZlQWR2YW5jZUJpZ0Jhbm5lclRvdGFsID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHQgJiYgdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmF0aXZlQWR2YW5jZUJpZ0Jhbm5lclRvdGFsKys7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSBzaG93TmF0aXZlQWR2YW5jZUJpZ0Jhbm5lclwiKTtcbiAgICAgICAgaWYgKHdpbmRvdy5qc2IgJiYgd2luZG93LmpzYi5yZWZsZWN0aW9uKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFxuICAgICAgICAgICAgICAgIFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIixcbiAgICAgICAgICAgICAgICBcInNob3dOYXRpdmVBZHZhbmNlQmlnQmFubmVyXCIsXG4gICAgICAgICAgICAgICAgXCIoWilWXCIsXG4gICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hdGl2ZUFkdmFuY2VCaWdCYW5uZXJDYWxsQmFjayA9IHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93QWREZWJ1Z2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKhkZWJ1Z1wiKTtcbiAgICAgICAgdGhpcy5qYXZhQ2FsbChcInNob3dBZERlYnVnZ2VyXCIsIFwiKClWXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZU5hdGl2ZUFkdmFuY2VCaWdCYW5uZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSBoaWRlTmF0aXZlQWR2YW5jZUJpZ0Jhbm5lclwiKTtcbiAgICAgICAgaWYgKHdpbmRvdy5qc2IgJiYgd2luZG93LmpzYi5yZWZsZWN0aW9uKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlTmF0aXZlQWR2YW5jZUJpZ0Jhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hdGl2ZUFkdmFuY2VCaWdCYW5uZXJUb3RhbC0tO1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVBZHZhbmNlQmlnQmFubmVyVG90YWwgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZHZhbmNlQmlnQmFubmVyVG90YWwgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93SW5zZXJ0QmFubmVySW1nID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9ICExO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUluc2VydEJhbm5lckltZ1RvdGFsID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHQgJiYgdCgwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hdGl2ZUluc2VydEJhbm5lckltZ1RvdGFsKys7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSBzaG93SW5zZXJ0QmFubmVySW1nXCIpO1xuICAgICAgICBpZiAod2luZG93LmpzYiAmJiB3aW5kb3cuanNiLnJlZmxlY3Rpb24pIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dJbnNlcnRCYW5uZXJJbWdcIiwgXCIoWilWXCIsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmF0aXZlSW5zZXJ0QmFubmVySW1nQ2FsbEJhY2sgPSB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUluc2VydEJhbm5lckltZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIGhpZGVJbnNlcnRCYW5uZXJJbWdcIik7XG4gICAgICAgIGlmICh3aW5kb3cuanNiICYmIHdpbmRvdy5qc2IucmVmbGVjdGlvbikge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUluc2VydEJhbm5lckltZ1wiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hdGl2ZUluc2VydEJhbm5lckltZ1RvdGFsLS07XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZUluc2VydEJhbm5lckltZ1RvdGFsIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlSW5zZXJ0QmFubmVySW1nVG90YWwgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93SW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0gc2hvd0luc2VydFwiKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiaW5zZXRWaWRlb0Fza1wiKTtcbiAgICAgICAgd2luZG93LmlPU1NlbmRNc2cgPSB0aGlzLmluc2VydENhbGxCYWNrO1xuICAgICAgICBpZiAod2luZG93LmpzYiAmJiB3aW5kb3cuanNiLnJlZmxlY3Rpb24pIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgICAgICAgICAgXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFxuICAgICAgICAgICAgICAgIFwic2hvd0luc2VydEJhbm5lclwiLFxuICAgICAgICAgICAgICAgIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLmluc2VydElEXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS52aWJyYXRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuanNiICYmIHdpbmRvdy5qc2IucmVmbGVjdGlvbikge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwidmlicmF0ZVwiLCBcIihJKVZcIiwgdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dQcml2YWN5UG9saWN5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0gc2hvd1ByaXZhY3lQb2xpY3lcIik7XG4gICAgICAgIGlmICh3aW5kb3cuanNiICYmIHdpbmRvdy5qc2IucmVmbGVjdGlvbikge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwibG9va1ByaXZhY3lQb2xpY3lcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgd2luZG93LmJhbm5lclNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0gYmFubmVyU2hvd1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmJhbm5lclNob3dfZXJyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIGJhbm5lclNob3dfZXJyXCIpO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuY2xpY2tCYW5uZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0gY2xpY2tCYW5uZXJcIik7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy52aWRlb1VuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIHZpZGVvVW5maW5pc2hcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodC5fcmV3YXJkQWRzQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5fcmV3YXJkQWRzQ2IoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuX3Jld2FyZEFkc0NiID0gbnVsbDtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy52aWRlb0ZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSB2aWRlb0ZpbmlzaFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0Ll9yZXdhcmRBZHNDYikge1xuICAgICAgICAgICAgICAgICAgICB0Ll9yZXdhcmRBZHNDYigwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5fcmV3YXJkQWRzQ2IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5BZGp1c3RFdmVudFN5cy50b2RheVJld2FyZFRpbWVzKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cudmlkZW9FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSB2aWRlb0Vycm9yXCIpO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiYWROb3RSZWFkeVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0Ll9yZXdhcmRBZHNDYikge1xuICAgICAgICAgICAgICAgICAgICB0Ll9yZXdhcmRBZHNDYigtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuX3Jld2FyZEFkc0NiID0gbnVsbDtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5pbnNldFZpZGVvU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSBpbnNldFZpZGVvU3VjY2Vzc1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LnJld2FyZFZpZGVvU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSByZXdhcmRWaWRlb1N1Y2Nlc3NcIik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBlID0ge1xuICAgICAgICAgICAgb25SZXF1ZXN0UGVybWlzc2lvbnNTdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIOadg+mZkOiOt+WPluaIkOWKn1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJlcXVlc3RQZXJtaXNzaW9uc0ZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0g5p2D6ZmQ6I635Y+W5aSx6LSlXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmVxdWVzdEZhaWxBbmROZXZlckFzazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSDmnYPpmZDojrflj5blpLHotKXkuJTnlKjmiLfngrnpgInkuI3lho3or6Lpl65cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Qcml2YWN5QWNjZXB0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIOWQjOaEj+makOengeWNj+iurlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblByaXZhY3lSZWplY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0g5ouS57ud6ZqQ56eB5Y2P6K6uXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmV3YXJkVmlkZW9TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIOa/gOWKseinhumikeWxleekulwiKTtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXdhcmRWaWRlb1N1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB0Ll9pc0dldFJld2FyZCA9ICExO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUmV3YXJkVmlkZW9Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSDmv4DlirHop4bpopHmkq3mlL7lrozmiJBcIik7XG4gICAgICAgICAgICAgICAgdC5faXNHZXRSZXdhcmQgPSAhMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblJld2FyZFZpZGVvQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0g5r+A5Yqx6KeG6aKR5YWz6ZetIOaYr+WQpuWPkeaUvuWlluWKsTpcIiwgdC5faXNHZXRSZXdhcmQpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgICAgICAgICAgICAgIGlmICh0Ll9pc0dldFJld2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy52aWRlb0ZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy52aWRlb1VuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuX2lzR2V0UmV3YXJkID0gITE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SZXdhcmRWaWRlb0ZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0g5r+A5Yqx6KeG6aKR5pKt5pS+5aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy52aWRlb0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgdC5faXNHZXRSZXdhcmQgPSAhMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkludGVyc3RpdGlhbFNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0g5o+S5bGP5bGV56S6XCIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5pbnNldFZpZGVvU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25JbnRlcnN0aXRpYWxDbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSDmj5LlsY/ot7Pov4dcIik7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25GZWVkUmVuZGVyU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSDkv6Hmga/mtYHmuLLmn5PmiJDlip9cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25GZWVkUmVuZGVyRmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbQW5kcm9pZFBsYXRmb3JtXSDkv6Hmga/mtYHmuLLmn5PlpLHotKVcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TcGxhc2hTaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIG9uU3BsYXNoU2hvd1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNwbGFzaENsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIG9uU3BsYXNoQ2xvc2VcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25VbmlvblNka0luaXRTdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIOiBmuWQiHNka+WIneWni+WMluaIkOWKn1wiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk5hdGl2ZUFkdmFuY2VCaWdCYW5uZXJTaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtBbmRyb2lkUGxhdGZvcm1dIOWOn+eUn+Wkp+WbvuaIkOWKn+WxleekulwiKTtcbiAgICAgICAgICAgICAgICBpZiAodC5uYXRpdmVBZHZhbmNlQmlnQmFubmVyQ2FsbEJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdC5uYXRpdmVBZHZhbmNlQmlnQmFubmVyQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5uYXRpdmVBZHZhbmNlQmlnQmFubmVyQ2FsbEJhY2sgPSBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSW5zZXJ0QmFubmVySW1nQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW0FuZHJvaWRQbGF0Zm9ybV0g5o+S5bGP5Zu+54mH5YWz6Zet5bGV56S6XCIpO1xuICAgICAgICAgICAgICAgIGlmICh0Lm5hdGl2ZUluc2VydEJhbm5lckltZ0NhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHQubmF0aXZlSW5zZXJ0QmFubmVySW1nQ2FsbEJhY2soMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQubmF0aXZlSW5zZXJ0QmFubmVySW1nQ2FsbEJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHQubmF0aXZlSW5zZXJ0QmFubmVySW1nVG90YWwtLTtcbiAgICAgICAgICAgICAgICBpZiAodC5uYXRpdmVJbnNlcnRCYW5uZXJJbWdUb3RhbCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHQubmF0aXZlSW5zZXJ0QmFubmVySW1nVG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkJhbm5lclNob3c6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgb25CYW5uZXJSZW1vdmVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkJhbm5lclJlbW92ZWRcIik7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwib25CYW5uZXJSZW1vdmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cudW5pb25TZGtDYWxsYmFjayA9IGU7XG4gICAgICAgIHRoaXMuaW5zZXJ0Q2FsbEJhY2sgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgaWYgKFwiYWRDb21wbGV0ZWRcIiA9PSB0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbQW5kcm9pZEFkQ3RybGVyXVtpbnNlcnRDYWxsQmFja11bYWRDb21wbGV0ZWRdXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJhZFNraXBwZWRcIiA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0FuZHJvaWRBZEN0cmxlcl1baW5zZXJ0Q2FsbEJhY2tdW2FkU2tpcHBlZF1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJhZFNraXBwZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4remAlOaSreaUvlwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJhZHNWaWRlb0ZhaWxcIiA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltBbmRyb2lkQWRDdHJsZXJdW2luc2VydENhbGxCYWNrXVthZHNWaWRlb0ZhaWxdXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImFkc1ZpZGVvRmFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2luZG93LmlPU1NlbmRNc2cgPSBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImluc2V0VmlkZW9TdWNjZXNzXCIgPT0gdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYy5nYW1lLmVtaXQoXCJpbnNldFZpZGVvU3VjY2Vzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltBbmRyb2lkQWRDdHJsZXJdW2luc2VydENhbGxCYWNrXVtpbnNldFZpZGVvU3VjY2Vzc11cIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJld2FyZENhbGxCYWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChcImFkQ29tcGxldGVkXCIgPT0gZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0FuZHJvaWRBZEN0cmxlcl1bcmV3YXJkQ2FsbEJhY2tdW3ZpZGVvRmluaXNoXSDnnIvlrozlub/lkYpcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LmlPU1NlbmRNc2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB0Ll9yZXdhcmRBZHNDYiAmJiB0Ll9yZXdhcmRBZHNDYigwKTtcbiAgICAgICAgICAgICAgICB0Ll9yZXdhcmRBZHNDYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcImFkU2tpcHBlZFwiID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbQW5kcm9pZEFkQ3RybGVyXVtyZXdhcmRDYWxsQmFja11bdmlkZW9VbmZpbmlzaF0g5Lit6YCU5bm/5ZGKXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lQWxsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAod2luZG93LmlPU1NlbmRNc2cgPSBmdW5jdGlvbiAoKSB7fSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9yZXdhcmRBZHNDYiAmJiB0Ll9yZXdhcmRBZHNDYigxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0Ll9yZXdhcmRBZHNDYiA9IG51bGwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImFkc1ZpZGVvRmFpbFwiID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0FuZHJvaWRBZEN0cmxlcl1bcmV3YXJkQ2FsbEJhY2tdW2Fkc1ZpZGVvRmFpbF1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbmRvdy5pT1NTZW5kTXNnID0gZnVuY3Rpb24gKCkge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX3Jld2FyZEFkc0NiICYmIHQuX3Jld2FyZEFkc0NiKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0Ll9yZXdhcmRBZHNDYiA9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXdhcmRWaWRlb1N1Y2Nlc3NcIiA9PSBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnNvbGUubG9nKFwiW0FuZHJvaWRBZEN0cmxlcl1bcmV3YXJkQ2FsbEJhY2tdW3Jld2FyZFZpZGVvU3VjY2Vzc11cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VBbGwoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hbmRyb2lkU2lnbkluQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJhbmRyb2lkU2lnbkluQ2xvc2VcIik7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFuZHJvaWRTaWduSW5TdWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJhbmRyb2lkU2lnbkluU3VjXCIpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5pbnNldFZpZGVvU2tpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImludGVyYWRfY2xvc2VcIik7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5pbnNldFZpZGVvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJpbnRlcmFkX2Nsb3NlXCIpO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWROb3RSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImFkTm90UmVhZHlcIik7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5zaGFyZVN1YyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInNoYXJlU3VjX1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LnNoYXJlRmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInNoYXJlRmFpbF9cIik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoXCJjb25maWcvUHVyY2hhc2VcIikudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0W2VdO1xuICAgICAgICAgICAgICAgIG4ucHVzaChyLmdvb2RzSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93W3QgKyBcIl9zdWNcIl0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQodCArIFwiX3N1Y1wiLCBlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdpbmRvd1t0ICsgXCJfZmFpbFwiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KHQgKyBcIl9mYWlsXCIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2YgZSkge1xuICAgICAgICAgICAgZSA9IGUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmphdmFDYWxsKFwic2VuZE1zZ1wiLCBcIihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspVlwiLCB0LCBlKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkanVzdEV2ZW50ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5qYXZhQ2FsbChcImFkanVzdEV2ZW50XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuamF2YUNhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gW107XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICB0W2VdID0gYXJndW1lbnRzW2VdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW3RoaXMuZGVmYXVsdENsYXNzXSwgdCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd01vcmVHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmphdmFDYWxsKFwianVtcExlaXN1cmVTdWJqZWN0XCIsIFwiKClWXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2lnbkluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuiwg+eUqOeZu+W9lVwiKTtcbiAgICAgICAgdGhpcy5qYXZhQ2FsbChcInNpZ25JblwiLCBcIigpVlwiKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdhbWVDb21tZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmphdmFDYWxsKFwib25Db21tZW50QnRuXCIsIFwiKClWXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucHVyY2hhc2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLmphdmFDYWxsKFwicHVyY2hhc2VcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLmphdmFDYWxsKFwic3Vic2NyaWJlXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuamF2YUNhbGwoXCJzaGFyZVwiLCBcIigpVlwiKTtcbiAgICB9O1xuICAgIHJldHVybiBlO1xufSkoJGJhc2VQbGF0Zm9ybS5CYXNlUGxhdGZvcm0pO1xuZXhwb3J0cy5BbmRyb2lkID0gbDtcbiJdfQ==