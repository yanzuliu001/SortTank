
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/XM.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '575f162rbxMAZPM9g+6gYXL', 'XM');
// scripts/XM.js

"use strict";

var r;
exports.XM = void 0;

var $basePlatform = require("./BasePlatform");

var a = cc._decorator;
var s = (a.ccclass, a.property, function (t) {
  function e() {
    var e = t.call(this) || this;
    e.firstBannerDelayTime = 90;
    e.sdk = window.qg;
    e._nativeAds = [];
    e.isInsert = !1;
    e.gamePortalAd = null;
    e.succFunc = null;
    e.failFunc = null;
    e.insertVideoInterval = 60;
    e.inertVideoLimitCount = 8;
    console.log("小米快应用");
    return e;
  }

  __extends(e, t);

  e.prototype.enabledDebug = function () {
    if (window.qg) {
      console.log("window['qg'].setEnableDebug", !1);
      window.qg.setEnableDebug({
        enableDebug: !1,
        success: function success() {},
        complete: function complete() {},
        fail: function fail() {}
      });
    }
  };

  e.prototype.silentLogin = function () {
    return new Promise(function (t, e) {
      window.qg.login({
        success: function success(n) {
          if (n) {
            t(n.uid);
          } else {
            e("[XM] --> data is null");
          }
        },
        fail: function fail(t) {
          e(t);
        }
      });
    });
  };

  e.prototype.showBanner = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        id: ""
      };
    }

    if (window.qg && this.sdk.createBannerAd) {
      var r = window.qg.getSystemInfoSync();
      var o = r.windowHeight - 80;
      var i = r.windowWidth;

      if (this._banner) {//
      } else {
        this._banner = this.sdk.createBannerAd({
          adUnitId: this._config.bannerID,
          style: {
            top: o,
            left: 0,
            width: i
          },
          adIntervals: 30
        });

        this._banner.onResize(function (t) {
          n._banner.style.top = r.windowHeight - t.height;
        });

        this._banner.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        });

        this._banner.onError(function (t) {
          console.log("[platform] [VIVOPlatform] showBanner", JSON.stringify(t));
        });
      }
    }
  };

  e.prototype.destroyBannerAd = function () {
    console.log("销毁banner000");

    if (this._banner) {
      console.log("销毁banner111");

      this._banner.destroy();

      console.log("销毁banner22");
      this._banner = null;
      console.log("销毁banne3333");
    }
  };

  e.prototype.showNativeAds = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        type: 0,
        container: null
      };
    }

    console.log("XM == >>", "showNativeAds", t);
    console.log("XM == >>", "showNativeAds11");
    console.log("XM == >>", "showNativeAds22");
    var r = this.sdk.createNativeAd({
      adUnitId: t.id || this._config.nativeID
    });
    t.container.opacity = 255;

    this._nativeAds.push({
      ads: r,
      container: t.container
    });

    console.log("XM == >>", "showNativeAds33");
    r.onLoad(function (o) {
      var i;

      if (o.adList) {
        i = o.adList[0];
      } else {
        i = null;
      }

      if (0 != t.container.opacity) {
        if (r && i) {
          r.reportAdShow({
            adId: i.adId
          });

          if (0 == t.type) {
            console.log("XM == >>", "showNativeAds444"), n.showNativeBanner2(i, r, t);
          } else {
            if (1 == t.type) {
              n.showNativeInsert(i, r, t);
            } else {
              n.showNativeIcon(i, r, t);
            }
          }
        }

        r.offError();
        r.offLoad();
      }

      if (e) {
        e(0);
      }
    });
    r.onError(function (o) {
      console.log("[platform] [XMPlatform] showNativeAd", o);

      if (t.container) {
        t.container.active = !1;
        t.container.opacity = 0;

        var i = n._nativeAds.findIndex(function (e) {
          return e.container.name == t.container.name;
        });

        if (-1 != i) {
          n._nativeAds.splice(i, 1);
        }
      }

      r.offError();
      r.offLoad();

      if (r.destory) {
        r.destory();
      }

      r = null;

      if (e) {
        e(1);
      }

      if (1 == t.type) {
        cc.game.emit("onInterstitialFeedShowFailed");
      }
    });

    if (r) {
      r.load();
    }
  };

  e.prototype.showNativeBanner2 = function (t, e, n) {
    var r = this;

    if (void 0 === n) {
      n = {
        type: 0,
        container: null
      };
    }

    console.log("显示原生Banner=======");
    var o = n.container;
    var i = o.getChildByName("img");
    var a = o.getChildByName("title");
    var s = o.getChildByName("desc");
    var c = o.getChildByName("btnText");
    var l = o.getChildByName("close");
    o.active = !0;
    o.once(cc.Node.EventType.TOUCH_START, function () {
      e.reportAdClick({
        adId: t.adId
      });
      r.hideNativeAds();

      if (n.hideCb) {
        n.hideCb();
      }
    }, this);

    if (l) {
      l.once(cc.Node.EventType.TOUCH_START, function () {
        if (n.isMistakeClose) {
          e.reportAdClick({
            adId: t.adId
          });
          r.hideNativeAds();
        } else {
          r.hideNativeAds();
        }

        if (n.hideCb) {
          n.hideCb();
        }
      });
    }

    if (a) {
      a.getComponent(cc.Label).string = "" + t.title;
    }

    if (s) {
      s.getComponent(cc.Label).string = "" + t.desc;
    }

    if (c) {
      c.getComponent(cc.Label).string = "" + (t.clickBtnTxt || "点击查看");
    }

    if (i) {
      var u = t.imgUrlList[Math.floor(Math.random() * t.imgUrlList.length)];
      cc.loader.load({
        url: u,
        type: "png"
      }, function (t, e) {
        if (!t && i) {
          i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
        }
      });
    }
  };

  e.prototype.hideNativeAds = function () {
    console.log("隐藏原生广告");

    if (this._nativeAds.length) {
      var t = this._nativeAds.pop();

      if (cc.isValid(t.container, !0)) {
        t.container.opacity = 0;
        t.container.active = !1;
        t.container.off(cc.Node.EventType.TOUCH_START);
        var e = t.container.getChildByName("close");

        if (e) {
          e.off(cc.Node.EventType.TOUCH_START);
        }

        var n = t.container.getChildByName("next");

        if (n) {
          n.off(cc.Node.EventType.TOUCH_START);
        }
      }

      if (t.ads.destory) {
        t.ads.destory();
      }

      if (this.isInsert) {
        cc.game.emit("onInterstitialFeedRemove");
      }

      this.isInsert = !1;
      console.log("抛事件关闭原生banner");
      cc.game.emit("hideNativeAds");
    }
  };

  e.prototype.showNativeInsert = function (t, e, n) {
    var r = this;

    if (void 0 === n) {
      n = {
        type: 0,
        container: null
      };
    }

    var o = n.container;
    var i = o.getChildByName("img") || o.getChildByName("mask").getChildByName("img");
    var a = o.getChildByName("title");
    var s = o.getChildByName("desc");
    var c = o.getChildByName("btnText");
    var l = o.getChildByName("next");
    var u = o.getChildByName("close");
    var f = o.getChildByName("mask");
    o.active = !0;
    o.once(cc.Node.EventType.TOUCH_START, function () {
      e.reportAdClick({
        adId: t.adId
      });
      r.hideNativeAds();

      if (n.hideCb) {
        n.hideCb();
      }
    }, this);

    if (l) {
      l.once(cc.Node.EventType.TOUCH_START, function () {
        e.reportAdClick({
          adId: t.adId
        });
        r.hideNativeAds();

        if (n.hideCb) {
          n.hideCb();
        }
      }, this);
    }

    if (u) {
      u.once(cc.Node.EventType.TOUCH_START, function () {
        if (n.isMistakeClose) {
          e.reportAdClick({
            adId: t.adId
          });
          r.hideNativeAds();
        } else {
          r.hideNativeAds();
        }

        if (n.hideCb) {
          n.hideCb();
        }
      });
    }

    if (f) {
      f.once(cc.Node.EventType.TOUCH_START, function () {
        if (n.isMistakeAll) {
          e.reportAdClick({
            adId: t.adId
          });
          r.hideNativeAds();
        } else {
          r.hideNativeAds();
        }

        if (n.hideCb) {
          n.hideCb();
        }
      });
    }

    if (a) {
      a.getComponent(cc.Label).string = "" + t.title;
    }

    if (s) {
      s.getComponent(cc.Label).string = "" + t.desc;
    }

    if (c) {
      c.getComponent(cc.Label).string = "" + (t.clickBtnTxt || "点击查看");
    }

    if (i) {
      var d = t.imgUrlList[Math.floor(Math.random() * t.imgUrlList.length)];
      cc.loader.load({
        url: d,
        type: "png"
      }, function (t, e) {
        if (!t && i) {
          i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
        }
      });
    }

    cc.game.emit("onInterstitialFeedShow");
    this.isInsert = !0;
  };

  e.prototype.showNativeIcon = function (t, e, n) {
    var r = this;

    if (void 0 === n) {
      n = {
        type: 0,
        container: null
      };
    }

    var o = n.container;
    var i = o.getChildByName("img") || o.getChildByName("mask").getChildByName("img");
    var a = o.getChildByName("title");
    var s = o.getChildByName("close");
    o.active = !0;
    o.once(cc.Node.EventType.TOUCH_START, function () {
      e.reportAdClick({
        adId: t.adId
      });
      r.hideNativeAds();

      if (n.hideCb) {
        n.hideCb();
      }
    }, this);

    if (s) {
      s.once(cc.Node.EventType.TOUCH_START, function () {
        if (n.isMistakeClose) {
          e.reportAdClick({
            adId: t.adId
          });
          r.hideNativeAds();
        } else {
          r.hideNativeAds();
        }

        if (n.hideCb) {
          n.hideCb();
        }
      });
    }

    if (a) {
      a.getComponent(cc.Label).string = "" + t.title;
    }

    if (i) {
      cc.loader.loadRes(t.icon, cc.SpriteFrame, function (t, e) {
        if (!t && i) {
          i.getComponent(cc.Sprite).spriteFrame = e;
        }
      });
    }
  };

  e.prototype.showPortalAd = function (t) {
    var e = this;

    if (window.qg.getSystemInfoSync().platformVersionCode >= 1076) {
      if (this.gamePortalAd) {
        this.gamePortalAd.show().then(function () {
          console.log("show success");

          if (t) {
            t(!0);
          }
        })["catch"](function (e) {
          if (t) {
            t(!1);
          }

          console.log("show fail with:" + e.errCode + "," + e.errMsg);
        });
      } else {
        this.gamePortalAd = window.qg.createGamePortalAd({
          adUnitId: "342428"
        }), this.gamePortalAd.onLoad(function () {
          console.log("互推盒子九宫格广告加载成功");
          e.gamePortalAd.show().then(function () {
            console.log("show success");

            if (t) {
              t(!0);
            }
          })["catch"](function (e) {
            if (t) {
              t(!1);
            }

            console.log("show fail with:" + e.errCode + "," + e.errMsg);
          });
        }), this.gamePortalAd.onClose(function () {
          console.log("互推盒子九宫格广告关闭");
        }), this.gamePortalAd.load().then(function () {
          console.log("load success");
        })["catch"](function (e) {
          if (t) {
            t(!1);
          }

          console.log("load fail with:" + e.errCode + "," + e.errMsg);
        });
      }
    } else {
      console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API");
    }
  };

  e.prototype.hideBanner = function () {
    if (window.qg && this._banner) {
      console.log("hideBannerAd====");

      this._banner.hide();

      this._banner.destroy();

      this._banner = null;
    }
  };

  e.prototype.hideNativeBanner = function () {
    console.log("hideNativeAds====");
    this.hideNativeAds();
  };

  e.prototype.loadRewardVideoAd = function () {};

  e.prototype.showRewardAds = function (t) {
    var e = this;
    console.log("[XM][showRewardVideo]");

    if (this.videoAd) {//
    } else {
      console.log("[XM][showRewardVideo1]");
      this.videoAd = window.qg.createRewardedVideoAd({
        adUnitId: this._config.rewardID
      });
      this.videoAd.onLoad(function () {
        console.log("[XM] load success");
      });
      this.videoAd.onError(function (t, e) {
        console.log("error: 错误信息: " + t + ", 错误码: " + e);
      });
    }

    var n = function n(r) {
      if (r.isEnded) {
        console.log("XM 激励视频广告完成，发放奖励");
        t(0);
      } else {
        console.log("XM 激励视频广告取消关闭，不发放奖励");
        t(1);
      }

      e.videoAd.offClose(n);
    };

    this.videoAd.onClose(n);
    console.log("[XM][showRewardVideo2]");
    this.videoAd.load().then(function () {
      e.videoAd.show().then(function () {
        console.log("xm 视频显示成功1");
      });
    })["catch"](function (e) {
      console.error("[XM][showVideoAD] error", JSON.stringify(e));
      t(-1);
    });
    console.log("[XM][showRewardVideo3]");
  };

  e.prototype.showInsert = function () {
    var t = this;
    console.log("[XM] --> 展示插屏");
    var e = window.qg.createInterstitialAd({
      adUnitId: this._config.insertID
    });
    e.show();

    if (e) {
      var n = function n() {
        if (e) {
          e.offClose(n);
          e.destroy();
          e = null;
          t.playInsertAdEnd();
        }
      };

      e.onClose(n);

      var r = function r(n, o) {
        console.log("XM 插屏错误");
        console.log("errCode", n);
        console.log("errMsg", o);

        if (e) {
          e.offError(r);
          e.destroy();
          e = null;
          t.playInsertAdEnd();
        }
      };

      e.onError(r);
    }
  };

  e.prototype.playInsertAdEnd = function () {};

  e.prototype.playInsertAdShow = function () {};

  e.prototype.hasShortcutInstalled = function () {
    return new Promise(function (t, e) {
      if (window.qg.hasShortcutInstalled) {
        window.qg.hasShortcutInstalled({
          success: function success(e) {
            if (0 == e) {
              t();
            }
          },
          fail: function fail(t) {
            e(t);
          },
          complete: function complete() {}
        });
      }
    });
  };

  e.prototype.removeLargePicFeed = function () {
    this.hideNativeAds();
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
  };

  return e;
}($basePlatform.BasePlatform));
exports.XM = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1hNLmpzIl0sIm5hbWVzIjpbInIiLCJleHBvcnRzIiwiWE0iLCIkYmFzZVBsYXRmb3JtIiwicmVxdWlyZSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwidCIsImUiLCJjYWxsIiwiZmlyc3RCYW5uZXJEZWxheVRpbWUiLCJzZGsiLCJ3aW5kb3ciLCJxZyIsIl9uYXRpdmVBZHMiLCJpc0luc2VydCIsImdhbWVQb3J0YWxBZCIsInN1Y2NGdW5jIiwiZmFpbEZ1bmMiLCJpbnNlcnRWaWRlb0ludGVydmFsIiwiaW5lcnRWaWRlb0xpbWl0Q291bnQiLCJjb25zb2xlIiwibG9nIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiZW5hYmxlZERlYnVnIiwic2V0RW5hYmxlRGVidWciLCJlbmFibGVEZWJ1ZyIsInN1Y2Nlc3MiLCJjb21wbGV0ZSIsImZhaWwiLCJzaWxlbnRMb2dpbiIsIlByb21pc2UiLCJsb2dpbiIsIm4iLCJ1aWQiLCJzaG93QmFubmVyIiwiaWQiLCJjcmVhdGVCYW5uZXJBZCIsImdldFN5c3RlbUluZm9TeW5jIiwibyIsIndpbmRvd0hlaWdodCIsImkiLCJ3aW5kb3dXaWR0aCIsIl9iYW5uZXIiLCJhZFVuaXRJZCIsIl9jb25maWciLCJiYW5uZXJJRCIsInN0eWxlIiwidG9wIiwibGVmdCIsIndpZHRoIiwiYWRJbnRlcnZhbHMiLCJvblJlc2l6ZSIsImhlaWdodCIsInNob3ciLCJ0aGVuIiwib25FcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZXN0cm95QmFubmVyQWQiLCJkZXN0cm95Iiwic2hvd05hdGl2ZUFkcyIsInR5cGUiLCJjb250YWluZXIiLCJjcmVhdGVOYXRpdmVBZCIsIm5hdGl2ZUlEIiwib3BhY2l0eSIsInB1c2giLCJhZHMiLCJvbkxvYWQiLCJhZExpc3QiLCJyZXBvcnRBZFNob3ciLCJhZElkIiwic2hvd05hdGl2ZUJhbm5lcjIiLCJzaG93TmF0aXZlSW5zZXJ0Iiwic2hvd05hdGl2ZUljb24iLCJvZmZFcnJvciIsIm9mZkxvYWQiLCJhY3RpdmUiLCJmaW5kSW5kZXgiLCJuYW1lIiwic3BsaWNlIiwiZGVzdG9yeSIsImdhbWUiLCJlbWl0IiwibG9hZCIsImdldENoaWxkQnlOYW1lIiwiYyIsImwiLCJvbmNlIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwicmVwb3J0QWRDbGljayIsImhpZGVOYXRpdmVBZHMiLCJoaWRlQ2IiLCJpc01pc3Rha2VDbG9zZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwidGl0bGUiLCJkZXNjIiwiY2xpY2tCdG5UeHQiLCJ1IiwiaW1nVXJsTGlzdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImxvYWRlciIsInVybCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJwb3AiLCJpc1ZhbGlkIiwib2ZmIiwiZiIsImlzTWlzdGFrZUFsbCIsImQiLCJsb2FkUmVzIiwiaWNvbiIsInNob3dQb3J0YWxBZCIsInBsYXRmb3JtVmVyc2lvbkNvZGUiLCJlcnJDb2RlIiwiZXJyTXNnIiwiY3JlYXRlR2FtZVBvcnRhbEFkIiwib25DbG9zZSIsImhpZGVCYW5uZXIiLCJoaWRlIiwiaGlkZU5hdGl2ZUJhbm5lciIsImxvYWRSZXdhcmRWaWRlb0FkIiwic2hvd1Jld2FyZEFkcyIsInZpZGVvQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJyZXdhcmRJRCIsImlzRW5kZWQiLCJvZmZDbG9zZSIsImVycm9yIiwic2hvd0luc2VydCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiaW5zZXJ0SUQiLCJwbGF5SW5zZXJ0QWRFbmQiLCJwbGF5SW5zZXJ0QWRTaG93IiwiaGFzU2hvcnRjdXRJbnN0YWxsZWQiLCJyZW1vdmVMYXJnZVBpY0ZlZWQiLCJzaG93SW50ZXJzdGl0aWFsRmVlZCIsIkJhc2VQbGF0Zm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0FDLE9BQU8sQ0FBQ0MsRUFBUixHQUFhLEtBQUssQ0FBbEI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLElBQ0FILENBQUMsQ0FBQ0ksT0FBRixFQUNESixDQUFDLENBQUNLLFFBREQsRUFFQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUdELENBQUMsQ0FBQ0UsSUFBRixDQUFPLElBQVAsS0FBZ0IsSUFBeEI7SUFDQUQsQ0FBQyxDQUFDRSxvQkFBRixHQUF5QixFQUF6QjtJQUNBRixDQUFDLENBQUNHLEdBQUYsR0FBUUMsTUFBTSxDQUFDQyxFQUFmO0lBQ0FMLENBQUMsQ0FBQ00sVUFBRixHQUFlLEVBQWY7SUFDQU4sQ0FBQyxDQUFDTyxRQUFGLEdBQWEsQ0FBQyxDQUFkO0lBQ0FQLENBQUMsQ0FBQ1EsWUFBRixHQUFpQixJQUFqQjtJQUNBUixDQUFDLENBQUNTLFFBQUYsR0FBYSxJQUFiO0lBQ0FULENBQUMsQ0FBQ1UsUUFBRixHQUFhLElBQWI7SUFDQVYsQ0FBQyxDQUFDVyxtQkFBRixHQUF3QixFQUF4QjtJQUNBWCxDQUFDLENBQUNZLG9CQUFGLEdBQXlCLENBQXpCO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7SUFDQSxPQUFPZCxDQUFQO0VBQ0g7O0VBQ0RlLFNBQVMsQ0FBQ2YsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ2dCLFNBQUYsQ0FBWUMsWUFBWixHQUEyQixZQUFZO0lBQ25DLElBQUliLE1BQU0sQ0FBQ0MsRUFBWCxFQUFlO01BQ1hRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDLENBQUMsQ0FBNUM7TUFDQVYsTUFBTSxDQUFDQyxFQUFQLENBQVVhLGNBQVYsQ0FBeUI7UUFDckJDLFdBQVcsRUFBRSxDQUFDLENBRE87UUFFckJDLE9BQU8sRUFBRSxtQkFBWSxDQUFFLENBRkY7UUFHckJDLFFBQVEsRUFBRSxvQkFBWSxDQUFFLENBSEg7UUFJckJDLElBQUksRUFBRSxnQkFBWSxDQUFFO01BSkMsQ0FBekI7SUFNSDtFQUNKLENBVkQ7O0VBV0F0QixDQUFDLENBQUNnQixTQUFGLENBQVlPLFdBQVosR0FBMEIsWUFBWTtJQUNsQyxPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVekIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO01BQy9CSSxNQUFNLENBQUNDLEVBQVAsQ0FBVW9CLEtBQVYsQ0FBZ0I7UUFDWkwsT0FBTyxFQUFFLGlCQUFVTSxDQUFWLEVBQWE7VUFDbEIsSUFBSUEsQ0FBSixFQUFPO1lBQ0gzQixDQUFDLENBQUMyQixDQUFDLENBQUNDLEdBQUgsQ0FBRDtVQUNILENBRkQsTUFFTztZQUNIM0IsQ0FBQyxDQUFDLHVCQUFELENBQUQ7VUFDSDtRQUNKLENBUFc7UUFRWnNCLElBQUksRUFBRSxjQUFVdkIsQ0FBVixFQUFhO1VBQ2ZDLENBQUMsQ0FBQ0QsQ0FBRCxDQUFEO1FBQ0g7TUFWVyxDQUFoQjtJQVlILENBYk0sQ0FBUDtFQWNILENBZkQ7O0VBZ0JBQyxDQUFDLENBQUNnQixTQUFGLENBQVlZLFVBQVosR0FBeUIsVUFBVTdCLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUNyQyxJQUFJMEIsQ0FBQyxHQUFHLElBQVI7O0lBQ0EsSUFBSSxLQUFLLENBQUwsS0FBVzNCLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHO1FBQ0E4QixFQUFFLEVBQUU7TUFESixDQUFKO0lBR0g7O0lBQ0QsSUFBSXpCLE1BQU0sQ0FBQ0MsRUFBUCxJQUFhLEtBQUtGLEdBQUwsQ0FBUzJCLGNBQTFCLEVBQTBDO01BQ3RDLElBQUkxQyxDQUFDLEdBQUdnQixNQUFNLENBQUNDLEVBQVAsQ0FBVTBCLGlCQUFWLEVBQVI7TUFDQSxJQUFJQyxDQUFDLEdBQUc1QyxDQUFDLENBQUM2QyxZQUFGLEdBQWlCLEVBQXpCO01BQ0EsSUFBSUMsQ0FBQyxHQUFHOUMsQ0FBQyxDQUFDK0MsV0FBVjs7TUFDQSxJQUFJLEtBQUtDLE9BQVQsRUFBa0IsQ0FDZDtNQUNILENBRkQsTUFFTztRQUNILEtBQUtBLE9BQUwsR0FBZSxLQUFLakMsR0FBTCxDQUFTMkIsY0FBVCxDQUF3QjtVQUNuQ08sUUFBUSxFQUFFLEtBQUtDLE9BQUwsQ0FBYUMsUUFEWTtVQUVuQ0MsS0FBSyxFQUFFO1lBQ0hDLEdBQUcsRUFBRVQsQ0FERjtZQUVIVSxJQUFJLEVBQUUsQ0FGSDtZQUdIQyxLQUFLLEVBQUVUO1VBSEosQ0FGNEI7VUFPbkNVLFdBQVcsRUFBRTtRQVBzQixDQUF4QixDQUFmOztRQVNBLEtBQUtSLE9BQUwsQ0FBYVMsUUFBYixDQUFzQixVQUFVOUMsQ0FBVixFQUFhO1VBQy9CMkIsQ0FBQyxDQUFDVSxPQUFGLENBQVVJLEtBQVYsQ0FBZ0JDLEdBQWhCLEdBQXNCckQsQ0FBQyxDQUFDNkMsWUFBRixHQUFpQmxDLENBQUMsQ0FBQytDLE1BQXpDO1FBQ0gsQ0FGRDs7UUFHQSxLQUFLVixPQUFMLENBQ0tXLElBREwsR0FFS0MsSUFGTCxDQUVVLFlBQVk7VUFDZCxJQUFJaEQsQ0FBSixFQUFPO1lBQ0hBLENBQUMsQ0FBQyxDQUFELENBQUQ7VUFDSDtRQUNKLENBTkwsV0FPVyxZQUFZO1VBQ2YsSUFBSUEsQ0FBSixFQUFPO1lBQ0hBLENBQUMsQ0FBQyxDQUFELENBQUQ7VUFDSDtRQUNKLENBWEw7O1FBWUEsS0FBS29DLE9BQUwsQ0FBYWEsT0FBYixDQUFxQixVQUFVbEQsQ0FBVixFQUFhO1VBQzlCYyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWixFQUFvRG9DLElBQUksQ0FBQ0MsU0FBTCxDQUFlcEQsQ0FBZixDQUFwRDtRQUNILENBRkQ7TUFHSDtJQUNKO0VBQ0osQ0EzQ0Q7O0VBNENBQyxDQUFDLENBQUNnQixTQUFGLENBQVlvQyxlQUFaLEdBQThCLFlBQVk7SUFDdEN2QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaOztJQUNBLElBQUksS0FBS3NCLE9BQVQsRUFBa0I7TUFDZHZCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7O01BQ0EsS0FBS3NCLE9BQUwsQ0FBYWlCLE9BQWI7O01BQ0F4QyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO01BQ0EsS0FBS3NCLE9BQUwsR0FBZSxJQUFmO01BQ0F2QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0lBQ0g7RUFDSixDQVREOztFQVVBZCxDQUFDLENBQUNnQixTQUFGLENBQVlzQyxhQUFaLEdBQTRCLFVBQVV2RCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFDeEMsSUFBSTBCLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBSyxDQUFMLEtBQVczQixDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRztRQUNBd0QsSUFBSSxFQUFFLENBRE47UUFFQUMsU0FBUyxFQUFFO01BRlgsQ0FBSjtJQUlIOztJQUNEM0MsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QixlQUF4QixFQUF5Q2YsQ0FBekM7SUFDQWMsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QixpQkFBeEI7SUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QixpQkFBeEI7SUFDQSxJQUFJMUIsQ0FBQyxHQUFHLEtBQUtlLEdBQUwsQ0FBU3NELGNBQVQsQ0FBd0I7TUFDNUJwQixRQUFRLEVBQUV0QyxDQUFDLENBQUM4QixFQUFGLElBQVEsS0FBS1MsT0FBTCxDQUFhb0I7SUFESCxDQUF4QixDQUFSO0lBR0EzRCxDQUFDLENBQUN5RCxTQUFGLENBQVlHLE9BQVosR0FBc0IsR0FBdEI7O0lBQ0EsS0FBS3JELFVBQUwsQ0FBZ0JzRCxJQUFoQixDQUFxQjtNQUNqQkMsR0FBRyxFQUFFekUsQ0FEWTtNQUVqQm9FLFNBQVMsRUFBRXpELENBQUMsQ0FBQ3lEO0lBRkksQ0FBckI7O0lBSUEzQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLGlCQUF4QjtJQUNBMUIsQ0FBQyxDQUFDMEUsTUFBRixDQUFTLFVBQVU5QixDQUFWLEVBQWE7TUFDbEIsSUFBSUUsQ0FBSjs7TUFDQSxJQUFJRixDQUFDLENBQUMrQixNQUFOLEVBQWM7UUFDVjdCLENBQUMsR0FBR0YsQ0FBQyxDQUFDK0IsTUFBRixDQUFTLENBQVQsQ0FBSjtNQUNILENBRkQsTUFFTztRQUNIN0IsQ0FBQyxHQUFHLElBQUo7TUFDSDs7TUFDRCxJQUFJLEtBQUtuQyxDQUFDLENBQUN5RCxTQUFGLENBQVlHLE9BQXJCLEVBQThCO1FBQzFCLElBQUl2RSxDQUFDLElBQUk4QyxDQUFULEVBQVk7VUFDUjlDLENBQUMsQ0FBQzRFLFlBQUYsQ0FBZTtZQUNYQyxJQUFJLEVBQUUvQixDQUFDLENBQUMrQjtVQURHLENBQWY7O1VBR0EsSUFBSSxLQUFLbEUsQ0FBQyxDQUFDd0QsSUFBWCxFQUFpQjtZQUNiMUMsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QixrQkFBeEIsR0FBNkNZLENBQUMsQ0FBQ3dDLGlCQUFGLENBQW9CaEMsQ0FBcEIsRUFBdUI5QyxDQUF2QixFQUEwQlcsQ0FBMUIsQ0FBN0M7VUFDSCxDQUZELE1BRU87WUFDSCxJQUFJLEtBQUtBLENBQUMsQ0FBQ3dELElBQVgsRUFBaUI7Y0FDYjdCLENBQUMsQ0FBQ3lDLGdCQUFGLENBQW1CakMsQ0FBbkIsRUFBc0I5QyxDQUF0QixFQUF5QlcsQ0FBekI7WUFDSCxDQUZELE1BRU87Y0FDSDJCLENBQUMsQ0FBQzBDLGNBQUYsQ0FBaUJsQyxDQUFqQixFQUFvQjlDLENBQXBCLEVBQXVCVyxDQUF2QjtZQUNIO1VBQ0o7UUFDSjs7UUFDRFgsQ0FBQyxDQUFDaUYsUUFBRjtRQUNBakYsQ0FBQyxDQUFDa0YsT0FBRjtNQUNIOztNQUNELElBQUl0RSxDQUFKLEVBQU87UUFDSEEsQ0FBQyxDQUFDLENBQUQsQ0FBRDtNQUNIO0lBQ0osQ0E1QkQ7SUE2QkFaLENBQUMsQ0FBQzZELE9BQUYsQ0FBVSxVQUFVakIsQ0FBVixFQUFhO01BQ25CbkIsT0FBTyxDQUFDQyxHQUFSLENBQVksc0NBQVosRUFBb0RrQixDQUFwRDs7TUFDQSxJQUFJakMsQ0FBQyxDQUFDeUQsU0FBTixFQUFpQjtRQUNiekQsQ0FBQyxDQUFDeUQsU0FBRixDQUFZZSxNQUFaLEdBQXFCLENBQUMsQ0FBdEI7UUFDQXhFLENBQUMsQ0FBQ3lELFNBQUYsQ0FBWUcsT0FBWixHQUFzQixDQUF0Qjs7UUFDQSxJQUFJekIsQ0FBQyxHQUFHUixDQUFDLENBQUNwQixVQUFGLENBQWFrRSxTQUFiLENBQXVCLFVBQVV4RSxDQUFWLEVBQWE7VUFDeEMsT0FBT0EsQ0FBQyxDQUFDd0QsU0FBRixDQUFZaUIsSUFBWixJQUFvQjFFLENBQUMsQ0FBQ3lELFNBQUYsQ0FBWWlCLElBQXZDO1FBQ0gsQ0FGTyxDQUFSOztRQUdBLElBQUksQ0FBQyxDQUFELElBQU12QyxDQUFWLEVBQWE7VUFDVFIsQ0FBQyxDQUFDcEIsVUFBRixDQUFhb0UsTUFBYixDQUFvQnhDLENBQXBCLEVBQXVCLENBQXZCO1FBQ0g7TUFDSjs7TUFDRDlDLENBQUMsQ0FBQ2lGLFFBQUY7TUFDQWpGLENBQUMsQ0FBQ2tGLE9BQUY7O01BQ0EsSUFBSWxGLENBQUMsQ0FBQ3VGLE9BQU4sRUFBZTtRQUNYdkYsQ0FBQyxDQUFDdUYsT0FBRjtNQUNIOztNQUNEdkYsQ0FBQyxHQUFHLElBQUo7O01BQ0EsSUFBSVksQ0FBSixFQUFPO1FBQ0hBLENBQUMsQ0FBQyxDQUFELENBQUQ7TUFDSDs7TUFDRCxJQUFJLEtBQUtELENBQUMsQ0FBQ3dELElBQVgsRUFBaUI7UUFDYjdELEVBQUUsQ0FBQ2tGLElBQUgsQ0FBUUMsSUFBUixDQUFhLDhCQUFiO01BQ0g7SUFDSixDQXhCRDs7SUF5QkEsSUFBSXpGLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUMwRixJQUFGO0lBQ0g7RUFDSixDQTdFRDs7RUE4RUE5RSxDQUFDLENBQUNnQixTQUFGLENBQVlrRCxpQkFBWixHQUFnQyxVQUFVbkUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCMEIsQ0FBaEIsRUFBbUI7SUFDL0MsSUFBSXRDLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBSyxDQUFMLEtBQVdzQyxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRztRQUNBNkIsSUFBSSxFQUFFLENBRE47UUFFQUMsU0FBUyxFQUFFO01BRlgsQ0FBSjtJQUlIOztJQUNEM0MsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7SUFDQSxJQUFJa0IsQ0FBQyxHQUFHTixDQUFDLENBQUM4QixTQUFWO0lBQ0EsSUFBSXRCLENBQUMsR0FBR0YsQ0FBQyxDQUFDK0MsY0FBRixDQUFpQixLQUFqQixDQUFSO0lBQ0EsSUFBSXRGLENBQUMsR0FBR3VDLENBQUMsQ0FBQytDLGNBQUYsQ0FBaUIsT0FBakIsQ0FBUjtJQUNBLElBQUluRixDQUFDLEdBQUdvQyxDQUFDLENBQUMrQyxjQUFGLENBQWlCLE1BQWpCLENBQVI7SUFDQSxJQUFJQyxDQUFDLEdBQUdoRCxDQUFDLENBQUMrQyxjQUFGLENBQWlCLFNBQWpCLENBQVI7SUFDQSxJQUFJRSxDQUFDLEdBQUdqRCxDQUFDLENBQUMrQyxjQUFGLENBQWlCLE9BQWpCLENBQVI7SUFDQS9DLENBQUMsQ0FBQ3VDLE1BQUYsR0FBVyxDQUFDLENBQVo7SUFDQXZDLENBQUMsQ0FBQ2tELElBQUYsQ0FDSXhGLEVBQUUsQ0FBQ3lGLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FEdEIsRUFFSSxZQUFZO01BQ1JyRixDQUFDLENBQUNzRixhQUFGLENBQWdCO1FBQ1pyQixJQUFJLEVBQUVsRSxDQUFDLENBQUNrRTtNQURJLENBQWhCO01BR0E3RSxDQUFDLENBQUNtRyxhQUFGOztNQUNBLElBQUk3RCxDQUFDLENBQUM4RCxNQUFOLEVBQWM7UUFDVjlELENBQUMsQ0FBQzhELE1BQUY7TUFDSDtJQUNKLENBVkwsRUFXSSxJQVhKOztJQWFBLElBQUlQLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUNDLElBQUYsQ0FBT3hGLEVBQUUsQ0FBQ3lGLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBekIsRUFBc0MsWUFBWTtRQUM5QyxJQUFJM0QsQ0FBQyxDQUFDK0QsY0FBTixFQUFzQjtVQUNsQnpGLENBQUMsQ0FBQ3NGLGFBQUYsQ0FBZ0I7WUFDWnJCLElBQUksRUFBRWxFLENBQUMsQ0FBQ2tFO1VBREksQ0FBaEI7VUFHQTdFLENBQUMsQ0FBQ21HLGFBQUY7UUFDSCxDQUxELE1BS087VUFDSG5HLENBQUMsQ0FBQ21HLGFBQUY7UUFDSDs7UUFDRCxJQUFJN0QsQ0FBQyxDQUFDOEQsTUFBTixFQUFjO1VBQ1Y5RCxDQUFDLENBQUM4RCxNQUFGO1FBQ0g7TUFDSixDQVpEO0lBYUg7O0lBQ0QsSUFBSS9GLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUNpRyxZQUFGLENBQWVoRyxFQUFFLENBQUNpRyxLQUFsQixFQUF5QkMsTUFBekIsR0FBa0MsS0FBSzdGLENBQUMsQ0FBQzhGLEtBQXpDO0lBQ0g7O0lBQ0QsSUFBSWpHLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUM4RixZQUFGLENBQWVoRyxFQUFFLENBQUNpRyxLQUFsQixFQUF5QkMsTUFBekIsR0FBa0MsS0FBSzdGLENBQUMsQ0FBQytGLElBQXpDO0lBQ0g7O0lBQ0QsSUFBSWQsQ0FBSixFQUFPO01BQ0hBLENBQUMsQ0FBQ1UsWUFBRixDQUFlaEcsRUFBRSxDQUFDaUcsS0FBbEIsRUFBeUJDLE1BQXpCLEdBQWtDLE1BQU03RixDQUFDLENBQUNnRyxXQUFGLElBQWlCLE1BQXZCLENBQWxDO0lBQ0g7O0lBQ0QsSUFBSTdELENBQUosRUFBTztNQUNILElBQUk4RCxDQUFDLEdBQUdqRyxDQUFDLENBQUNrRyxVQUFGLENBQWFDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyRyxDQUFDLENBQUNrRyxVQUFGLENBQWFJLE1BQXhDLENBQWIsQ0FBUjtNQUNBM0csRUFBRSxDQUFDNEcsTUFBSCxDQUFVeEIsSUFBVixDQUNJO1FBQ0l5QixHQUFHLEVBQUVQLENBRFQ7UUFFSXpDLElBQUksRUFBRTtNQUZWLENBREosRUFLSSxVQUFVeEQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO1FBQ1osSUFBSSxDQUFDRCxDQUFELElBQU1tQyxDQUFWLEVBQWE7VUFDVEEsQ0FBQyxDQUFDd0QsWUFBRixDQUFlaEcsRUFBRSxDQUFDOEcsTUFBbEIsRUFBMEJDLFdBQTFCLEdBQXdDLElBQUkvRyxFQUFFLENBQUNnSCxXQUFQLENBQW1CMUcsQ0FBbkIsQ0FBeEM7UUFDSDtNQUNKLENBVEw7SUFXSDtFQUNKLENBbkVEOztFQW9FQUEsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZdUUsYUFBWixHQUE0QixZQUFZO0lBQ3BDMUUsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjs7SUFDQSxJQUFJLEtBQUtSLFVBQUwsQ0FBZ0IrRixNQUFwQixFQUE0QjtNQUN4QixJQUFJdEcsQ0FBQyxHQUFHLEtBQUtPLFVBQUwsQ0FBZ0JxRyxHQUFoQixFQUFSOztNQUNBLElBQUlqSCxFQUFFLENBQUNrSCxPQUFILENBQVc3RyxDQUFDLENBQUN5RCxTQUFiLEVBQXdCLENBQUMsQ0FBekIsQ0FBSixFQUFpQztRQUM3QnpELENBQUMsQ0FBQ3lELFNBQUYsQ0FBWUcsT0FBWixHQUFzQixDQUF0QjtRQUNBNUQsQ0FBQyxDQUFDeUQsU0FBRixDQUFZZSxNQUFaLEdBQXFCLENBQUMsQ0FBdEI7UUFDQXhFLENBQUMsQ0FBQ3lELFNBQUYsQ0FBWXFELEdBQVosQ0FBZ0JuSCxFQUFFLENBQUN5RixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQWxDO1FBQ0EsSUFBSXJGLENBQUMsR0FBR0QsQ0FBQyxDQUFDeUQsU0FBRixDQUFZdUIsY0FBWixDQUEyQixPQUEzQixDQUFSOztRQUNBLElBQUkvRSxDQUFKLEVBQU87VUFDSEEsQ0FBQyxDQUFDNkcsR0FBRixDQUFNbkgsRUFBRSxDQUFDeUYsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUF4QjtRQUNIOztRQUNELElBQUkzRCxDQUFDLEdBQUczQixDQUFDLENBQUN5RCxTQUFGLENBQVl1QixjQUFaLENBQTJCLE1BQTNCLENBQVI7O1FBQ0EsSUFBSXJELENBQUosRUFBTztVQUNIQSxDQUFDLENBQUNtRixHQUFGLENBQU1uSCxFQUFFLENBQUN5RixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQXhCO1FBQ0g7TUFDSjs7TUFDRCxJQUFJdEYsQ0FBQyxDQUFDOEQsR0FBRixDQUFNYyxPQUFWLEVBQW1CO1FBQ2Y1RSxDQUFDLENBQUM4RCxHQUFGLENBQU1jLE9BQU47TUFDSDs7TUFDRCxJQUFJLEtBQUtwRSxRQUFULEVBQW1CO1FBQ2ZiLEVBQUUsQ0FBQ2tGLElBQUgsQ0FBUUMsSUFBUixDQUFhLDBCQUFiO01BQ0g7O01BQ0QsS0FBS3RFLFFBQUwsR0FBZ0IsQ0FBQyxDQUFqQjtNQUNBTSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO01BQ0FwQixFQUFFLENBQUNrRixJQUFILENBQVFDLElBQVIsQ0FBYSxlQUFiO0lBQ0g7RUFDSixDQTNCRDs7RUE0QkE3RSxDQUFDLENBQUNnQixTQUFGLENBQVltRCxnQkFBWixHQUErQixVQUFVcEUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCMEIsQ0FBaEIsRUFBbUI7SUFDOUMsSUFBSXRDLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBSyxDQUFMLEtBQVdzQyxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRztRQUNBNkIsSUFBSSxFQUFFLENBRE47UUFFQUMsU0FBUyxFQUFFO01BRlgsQ0FBSjtJQUlIOztJQUNELElBQUl4QixDQUFDLEdBQUdOLENBQUMsQ0FBQzhCLFNBQVY7SUFDQSxJQUFJdEIsQ0FBQyxHQUFHRixDQUFDLENBQUMrQyxjQUFGLENBQWlCLEtBQWpCLEtBQTJCL0MsQ0FBQyxDQUFDK0MsY0FBRixDQUFpQixNQUFqQixFQUF5QkEsY0FBekIsQ0FBd0MsS0FBeEMsQ0FBbkM7SUFDQSxJQUFJdEYsQ0FBQyxHQUFHdUMsQ0FBQyxDQUFDK0MsY0FBRixDQUFpQixPQUFqQixDQUFSO0lBQ0EsSUFBSW5GLENBQUMsR0FBR29DLENBQUMsQ0FBQytDLGNBQUYsQ0FBaUIsTUFBakIsQ0FBUjtJQUNBLElBQUlDLENBQUMsR0FBR2hELENBQUMsQ0FBQytDLGNBQUYsQ0FBaUIsU0FBakIsQ0FBUjtJQUNBLElBQUlFLENBQUMsR0FBR2pELENBQUMsQ0FBQytDLGNBQUYsQ0FBaUIsTUFBakIsQ0FBUjtJQUNBLElBQUlpQixDQUFDLEdBQUdoRSxDQUFDLENBQUMrQyxjQUFGLENBQWlCLE9BQWpCLENBQVI7SUFDQSxJQUFJK0IsQ0FBQyxHQUFHOUUsQ0FBQyxDQUFDK0MsY0FBRixDQUFpQixNQUFqQixDQUFSO0lBQ0EvQyxDQUFDLENBQUN1QyxNQUFGLEdBQVcsQ0FBQyxDQUFaO0lBQ0F2QyxDQUFDLENBQUNrRCxJQUFGLENBQ0l4RixFQUFFLENBQUN5RixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBRHRCLEVBRUksWUFBWTtNQUNSckYsQ0FBQyxDQUFDc0YsYUFBRixDQUFnQjtRQUNackIsSUFBSSxFQUFFbEUsQ0FBQyxDQUFDa0U7TUFESSxDQUFoQjtNQUdBN0UsQ0FBQyxDQUFDbUcsYUFBRjs7TUFDQSxJQUFJN0QsQ0FBQyxDQUFDOEQsTUFBTixFQUFjO1FBQ1Y5RCxDQUFDLENBQUM4RCxNQUFGO01BQ0g7SUFDSixDQVZMLEVBV0ksSUFYSjs7SUFhQSxJQUFJUCxDQUFKLEVBQU87TUFDSEEsQ0FBQyxDQUFDQyxJQUFGLENBQ0l4RixFQUFFLENBQUN5RixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBRHRCLEVBRUksWUFBWTtRQUNSckYsQ0FBQyxDQUFDc0YsYUFBRixDQUFnQjtVQUNackIsSUFBSSxFQUFFbEUsQ0FBQyxDQUFDa0U7UUFESSxDQUFoQjtRQUdBN0UsQ0FBQyxDQUFDbUcsYUFBRjs7UUFDQSxJQUFJN0QsQ0FBQyxDQUFDOEQsTUFBTixFQUFjO1VBQ1Y5RCxDQUFDLENBQUM4RCxNQUFGO1FBQ0g7TUFDSixDQVZMLEVBV0ksSUFYSjtJQWFIOztJQUNELElBQUlRLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUNkLElBQUYsQ0FBT3hGLEVBQUUsQ0FBQ3lGLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBekIsRUFBc0MsWUFBWTtRQUM5QyxJQUFJM0QsQ0FBQyxDQUFDK0QsY0FBTixFQUFzQjtVQUNsQnpGLENBQUMsQ0FBQ3NGLGFBQUYsQ0FBZ0I7WUFDWnJCLElBQUksRUFBRWxFLENBQUMsQ0FBQ2tFO1VBREksQ0FBaEI7VUFHQTdFLENBQUMsQ0FBQ21HLGFBQUY7UUFDSCxDQUxELE1BS087VUFDSG5HLENBQUMsQ0FBQ21HLGFBQUY7UUFDSDs7UUFDRCxJQUFJN0QsQ0FBQyxDQUFDOEQsTUFBTixFQUFjO1VBQ1Y5RCxDQUFDLENBQUM4RCxNQUFGO1FBQ0g7TUFDSixDQVpEO0lBYUg7O0lBQ0QsSUFBSXNCLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUM1QixJQUFGLENBQU94RixFQUFFLENBQUN5RixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQXpCLEVBQXNDLFlBQVk7UUFDOUMsSUFBSTNELENBQUMsQ0FBQ3FGLFlBQU4sRUFBb0I7VUFDaEIvRyxDQUFDLENBQUNzRixhQUFGLENBQWdCO1lBQ1pyQixJQUFJLEVBQUVsRSxDQUFDLENBQUNrRTtVQURJLENBQWhCO1VBR0E3RSxDQUFDLENBQUNtRyxhQUFGO1FBQ0gsQ0FMRCxNQUtPO1VBQ0huRyxDQUFDLENBQUNtRyxhQUFGO1FBQ0g7O1FBQ0QsSUFBSTdELENBQUMsQ0FBQzhELE1BQU4sRUFBYztVQUNWOUQsQ0FBQyxDQUFDOEQsTUFBRjtRQUNIO01BQ0osQ0FaRDtJQWFIOztJQUNELElBQUkvRixDQUFKLEVBQU87TUFDSEEsQ0FBQyxDQUFDaUcsWUFBRixDQUFlaEcsRUFBRSxDQUFDaUcsS0FBbEIsRUFBeUJDLE1BQXpCLEdBQWtDLEtBQUs3RixDQUFDLENBQUM4RixLQUF6QztJQUNIOztJQUNELElBQUlqRyxDQUFKLEVBQU87TUFDSEEsQ0FBQyxDQUFDOEYsWUFBRixDQUFlaEcsRUFBRSxDQUFDaUcsS0FBbEIsRUFBeUJDLE1BQXpCLEdBQWtDLEtBQUs3RixDQUFDLENBQUMrRixJQUF6QztJQUNIOztJQUNELElBQUlkLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUNVLFlBQUYsQ0FBZWhHLEVBQUUsQ0FBQ2lHLEtBQWxCLEVBQXlCQyxNQUF6QixHQUFrQyxNQUFNN0YsQ0FBQyxDQUFDZ0csV0FBRixJQUFpQixNQUF2QixDQUFsQztJQUNIOztJQUNELElBQUk3RCxDQUFKLEVBQU87TUFDSCxJQUFJOEUsQ0FBQyxHQUFHakgsQ0FBQyxDQUFDa0csVUFBRixDQUFhQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckcsQ0FBQyxDQUFDa0csVUFBRixDQUFhSSxNQUF4QyxDQUFiLENBQVI7TUFDQTNHLEVBQUUsQ0FBQzRHLE1BQUgsQ0FBVXhCLElBQVYsQ0FDSTtRQUNJeUIsR0FBRyxFQUFFUyxDQURUO1FBRUl6RCxJQUFJLEVBQUU7TUFGVixDQURKLEVBS0ksVUFBVXhELENBQVYsRUFBYUMsQ0FBYixFQUFnQjtRQUNaLElBQUksQ0FBQ0QsQ0FBRCxJQUFNbUMsQ0FBVixFQUFhO1VBQ1RBLENBQUMsQ0FBQ3dELFlBQUYsQ0FBZWhHLEVBQUUsQ0FBQzhHLE1BQWxCLEVBQTBCQyxXQUExQixHQUF3QyxJQUFJL0csRUFBRSxDQUFDZ0gsV0FBUCxDQUFtQjFHLENBQW5CLENBQXhDO1FBQ0g7TUFDSixDQVRMO0lBV0g7O0lBQ0ROLEVBQUUsQ0FBQ2tGLElBQUgsQ0FBUUMsSUFBUixDQUFhLHdCQUFiO0lBQ0EsS0FBS3RFLFFBQUwsR0FBZ0IsQ0FBQyxDQUFqQjtFQUNILENBcEdEOztFQXFHQVAsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZb0QsY0FBWixHQUE2QixVQUFVckUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCMEIsQ0FBaEIsRUFBbUI7SUFDNUMsSUFBSXRDLENBQUMsR0FBRyxJQUFSOztJQUNBLElBQUksS0FBSyxDQUFMLEtBQVdzQyxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRztRQUNBNkIsSUFBSSxFQUFFLENBRE47UUFFQUMsU0FBUyxFQUFFO01BRlgsQ0FBSjtJQUlIOztJQUNELElBQUl4QixDQUFDLEdBQUdOLENBQUMsQ0FBQzhCLFNBQVY7SUFDQSxJQUFJdEIsQ0FBQyxHQUFHRixDQUFDLENBQUMrQyxjQUFGLENBQWlCLEtBQWpCLEtBQTJCL0MsQ0FBQyxDQUFDK0MsY0FBRixDQUFpQixNQUFqQixFQUF5QkEsY0FBekIsQ0FBd0MsS0FBeEMsQ0FBbkM7SUFDQSxJQUFJdEYsQ0FBQyxHQUFHdUMsQ0FBQyxDQUFDK0MsY0FBRixDQUFpQixPQUFqQixDQUFSO0lBQ0EsSUFBSW5GLENBQUMsR0FBR29DLENBQUMsQ0FBQytDLGNBQUYsQ0FBaUIsT0FBakIsQ0FBUjtJQUNBL0MsQ0FBQyxDQUFDdUMsTUFBRixHQUFXLENBQUMsQ0FBWjtJQUNBdkMsQ0FBQyxDQUFDa0QsSUFBRixDQUNJeEYsRUFBRSxDQUFDeUYsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUR0QixFQUVJLFlBQVk7TUFDUnJGLENBQUMsQ0FBQ3NGLGFBQUYsQ0FBZ0I7UUFDWnJCLElBQUksRUFBRWxFLENBQUMsQ0FBQ2tFO01BREksQ0FBaEI7TUFHQTdFLENBQUMsQ0FBQ21HLGFBQUY7O01BQ0EsSUFBSTdELENBQUMsQ0FBQzhELE1BQU4sRUFBYztRQUNWOUQsQ0FBQyxDQUFDOEQsTUFBRjtNQUNIO0lBQ0osQ0FWTCxFQVdJLElBWEo7O0lBYUEsSUFBSTVGLENBQUosRUFBTztNQUNIQSxDQUFDLENBQUNzRixJQUFGLENBQU94RixFQUFFLENBQUN5RixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQXpCLEVBQXNDLFlBQVk7UUFDOUMsSUFBSTNELENBQUMsQ0FBQytELGNBQU4sRUFBc0I7VUFDbEJ6RixDQUFDLENBQUNzRixhQUFGLENBQWdCO1lBQ1pyQixJQUFJLEVBQUVsRSxDQUFDLENBQUNrRTtVQURJLENBQWhCO1VBR0E3RSxDQUFDLENBQUNtRyxhQUFGO1FBQ0gsQ0FMRCxNQUtPO1VBQ0huRyxDQUFDLENBQUNtRyxhQUFGO1FBQ0g7O1FBQ0QsSUFBSTdELENBQUMsQ0FBQzhELE1BQU4sRUFBYztVQUNWOUQsQ0FBQyxDQUFDOEQsTUFBRjtRQUNIO01BQ0osQ0FaRDtJQWFIOztJQUNELElBQUkvRixDQUFKLEVBQU87TUFDSEEsQ0FBQyxDQUFDaUcsWUFBRixDQUFlaEcsRUFBRSxDQUFDaUcsS0FBbEIsRUFBeUJDLE1BQXpCLEdBQWtDLEtBQUs3RixDQUFDLENBQUM4RixLQUF6QztJQUNIOztJQUNELElBQUkzRCxDQUFKLEVBQU87TUFDSHhDLEVBQUUsQ0FBQzRHLE1BQUgsQ0FBVVcsT0FBVixDQUFrQmxILENBQUMsQ0FBQ21ILElBQXBCLEVBQTBCeEgsRUFBRSxDQUFDZ0gsV0FBN0IsRUFBMEMsVUFBVTNHLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtRQUN0RCxJQUFJLENBQUNELENBQUQsSUFBTW1DLENBQVYsRUFBYTtVQUNUQSxDQUFDLENBQUN3RCxZQUFGLENBQWVoRyxFQUFFLENBQUM4RyxNQUFsQixFQUEwQkMsV0FBMUIsR0FBd0N6RyxDQUF4QztRQUNIO01BQ0osQ0FKRDtJQUtIO0VBQ0osQ0FuREQ7O0VBb0RBQSxDQUFDLENBQUNnQixTQUFGLENBQVltRyxZQUFaLEdBQTJCLFVBQVVwSCxDQUFWLEVBQWE7SUFDcEMsSUFBSUMsQ0FBQyxHQUFHLElBQVI7O0lBQ0EsSUFBSUksTUFBTSxDQUFDQyxFQUFQLENBQVUwQixpQkFBVixHQUE4QnFGLG1CQUE5QixJQUFxRCxJQUF6RCxFQUErRDtNQUMzRCxJQUFJLEtBQUs1RyxZQUFULEVBQXVCO1FBQ25CLEtBQUtBLFlBQUwsQ0FDS3VDLElBREwsR0FFS0MsSUFGTCxDQUVVLFlBQVk7VUFDZG5DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7O1VBQ0EsSUFBSWYsQ0FBSixFQUFPO1lBQ0hBLENBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtVQUNIO1FBQ0osQ0FQTCxXQVFXLFVBQVVDLENBQVYsRUFBYTtVQUNoQixJQUFJRCxDQUFKLEVBQU87WUFDSEEsQ0FBQyxDQUFDLENBQUMsQ0FBRixDQUFEO1VBQ0g7O1VBQ0RjLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFvQmQsQ0FBQyxDQUFDcUgsT0FBdEIsR0FBZ0MsR0FBaEMsR0FBc0NySCxDQUFDLENBQUNzSCxNQUFwRDtRQUNILENBYkw7TUFjSCxDQWZELE1BZU87UUFDRixLQUFLOUcsWUFBTCxHQUFvQkosTUFBTSxDQUFDQyxFQUFQLENBQVVrSCxrQkFBVixDQUE2QjtVQUM5Q2xGLFFBQVEsRUFBRTtRQURvQyxDQUE3QixDQUFyQixFQUdJLEtBQUs3QixZQUFMLENBQWtCc0QsTUFBbEIsQ0FBeUIsWUFBWTtVQUNqQ2pELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7VUFDQWQsQ0FBQyxDQUFDUSxZQUFGLENBQ0t1QyxJQURMLEdBRUtDLElBRkwsQ0FFVSxZQUFZO1lBQ2RuQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaOztZQUNBLElBQUlmLENBQUosRUFBTztjQUNIQSxDQUFDLENBQUMsQ0FBQyxDQUFGLENBQUQ7WUFDSDtVQUNKLENBUEwsV0FRVyxVQUFVQyxDQUFWLEVBQWE7WUFDaEIsSUFBSUQsQ0FBSixFQUFPO2NBQ0hBLENBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtZQUNIOztZQUNEYyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBb0JkLENBQUMsQ0FBQ3FILE9BQXRCLEdBQWdDLEdBQWhDLEdBQXNDckgsQ0FBQyxDQUFDc0gsTUFBcEQ7VUFDSCxDQWJMO1FBY0gsQ0FoQkQsQ0FISixFQW9CSSxLQUFLOUcsWUFBTCxDQUFrQmdILE9BQWxCLENBQTBCLFlBQVk7VUFDbEMzRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO1FBQ0gsQ0FGRCxDQXBCSixFQXVCSSxLQUFLTixZQUFMLENBQ0tzRSxJQURMLEdBRUs5QixJQUZMLENBRVUsWUFBWTtVQUNkbkMsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtRQUNILENBSkwsV0FLVyxVQUFVZCxDQUFWLEVBQWE7VUFDaEIsSUFBSUQsQ0FBSixFQUFPO1lBQ0hBLENBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtVQUNIOztVQUNEYyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBb0JkLENBQUMsQ0FBQ3FILE9BQXRCLEdBQWdDLEdBQWhDLEdBQXNDckgsQ0FBQyxDQUFDc0gsTUFBcEQ7UUFDSCxDQVZMLENBdkJKO01Ba0NIO0lBQ0osQ0FwREQsTUFvRE87TUFDSHpHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0lBQ0g7RUFDSixDQXpERDs7RUEwREFkLENBQUMsQ0FBQ2dCLFNBQUYsQ0FBWXlHLFVBQVosR0FBeUIsWUFBWTtJQUNqQyxJQUFJckgsTUFBTSxDQUFDQyxFQUFQLElBQWEsS0FBSytCLE9BQXRCLEVBQStCO01BQzNCdkIsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7O01BQ0EsS0FBS3NCLE9BQUwsQ0FBYXNGLElBQWI7O01BQ0EsS0FBS3RGLE9BQUwsQ0FBYWlCLE9BQWI7O01BQ0EsS0FBS2pCLE9BQUwsR0FBZSxJQUFmO0lBQ0g7RUFDSixDQVBEOztFQVFBcEMsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZMkcsZ0JBQVosR0FBK0IsWUFBWTtJQUN2QzlHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0lBQ0EsS0FBS3lFLGFBQUw7RUFDSCxDQUhEOztFQUlBdkYsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZNEcsaUJBQVosR0FBZ0MsWUFBWSxDQUFFLENBQTlDOztFQUNBNUgsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZNkcsYUFBWixHQUE0QixVQUFVOUgsQ0FBVixFQUFhO0lBQ3JDLElBQUlDLENBQUMsR0FBRyxJQUFSO0lBQ0FhLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaOztJQUNBLElBQUksS0FBS2dILE9BQVQsRUFBa0IsQ0FDZDtJQUNILENBRkQsTUFFTztNQUNIakgsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7TUFDQSxLQUFLZ0gsT0FBTCxHQUFlMUgsTUFBTSxDQUFDQyxFQUFQLENBQVUwSCxxQkFBVixDQUFnQztRQUMzQzFGLFFBQVEsRUFBRSxLQUFLQyxPQUFMLENBQWEwRjtNQURvQixDQUFoQyxDQUFmO01BR0EsS0FBS0YsT0FBTCxDQUFhaEUsTUFBYixDQUFvQixZQUFZO1FBQzVCakQsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7TUFDSCxDQUZEO01BR0EsS0FBS2dILE9BQUwsQ0FBYTdFLE9BQWIsQ0FBcUIsVUFBVWxELENBQVYsRUFBYUMsQ0FBYixFQUFnQjtRQUNqQ2EsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQWtCZixDQUFsQixHQUFzQixTQUF0QixHQUFrQ0MsQ0FBOUM7TUFDSCxDQUZEO0lBR0g7O0lBQ0QsSUFBSTBCLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQVV0QyxDQUFWLEVBQWE7TUFDakIsSUFBSUEsQ0FBQyxDQUFDNkksT0FBTixFQUFlO1FBQ1hwSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtRQUNBZixDQUFDLENBQUMsQ0FBRCxDQUFEO01BQ0gsQ0FIRCxNQUdPO1FBQ0hjLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO1FBQ0FmLENBQUMsQ0FBQyxDQUFELENBQUQ7TUFDSDs7TUFDREMsQ0FBQyxDQUFDOEgsT0FBRixDQUFVSSxRQUFWLENBQW1CeEcsQ0FBbkI7SUFDSCxDQVREOztJQVVBLEtBQUtvRyxPQUFMLENBQWFOLE9BQWIsQ0FBcUI5RixDQUFyQjtJQUNBYixPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtJQUNBLEtBQUtnSCxPQUFMLENBQ0toRCxJQURMLEdBRUs5QixJQUZMLENBRVUsWUFBWTtNQUNkaEQsQ0FBQyxDQUFDOEgsT0FBRixDQUFVL0UsSUFBVixHQUFpQkMsSUFBakIsQ0FBc0IsWUFBWTtRQUM5Qm5DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7TUFDSCxDQUZEO0lBR0gsQ0FOTCxXQU9XLFVBQVVkLENBQVYsRUFBYTtNQUNoQmEsT0FBTyxDQUFDc0gsS0FBUixDQUFjLHlCQUFkLEVBQXlDakYsSUFBSSxDQUFDQyxTQUFMLENBQWVuRCxDQUFmLENBQXpDO01BQ0FELENBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtJQUNILENBVkw7SUFXQWMsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7RUFDSCxDQXpDRDs7RUEwQ0FkLENBQUMsQ0FBQ2dCLFNBQUYsQ0FBWW9ILFVBQVosR0FBeUIsWUFBWTtJQUNqQyxJQUFJckksQ0FBQyxHQUFHLElBQVI7SUFDQWMsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtJQUNBLElBQUlkLENBQUMsR0FBR0ksTUFBTSxDQUFDQyxFQUFQLENBQVVnSSxvQkFBVixDQUErQjtNQUNuQ2hHLFFBQVEsRUFBRSxLQUFLQyxPQUFMLENBQWFnRztJQURZLENBQS9CLENBQVI7SUFHQXRJLENBQUMsQ0FBQytDLElBQUY7O0lBQ0EsSUFBSS9DLENBQUosRUFBTztNQUNILElBQUkwQixDQUFDLEdBQUcsU0FBSkEsQ0FBSSxHQUFZO1FBQ2hCLElBQUkxQixDQUFKLEVBQU87VUFDSEEsQ0FBQyxDQUFDa0ksUUFBRixDQUFXeEcsQ0FBWDtVQUNBMUIsQ0FBQyxDQUFDcUQsT0FBRjtVQUNBckQsQ0FBQyxHQUFHLElBQUo7VUFDQUQsQ0FBQyxDQUFDd0ksZUFBRjtRQUNIO01BQ0osQ0FQRDs7TUFRQXZJLENBQUMsQ0FBQ3dILE9BQUYsQ0FBVTlGLENBQVY7O01BQ0EsSUFBSXRDLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQVVzQyxDQUFWLEVBQWFNLENBQWIsRUFBZ0I7UUFDcEJuQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO1FBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJZLENBQXZCO1FBQ0FiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JrQixDQUF0Qjs7UUFDQSxJQUFJaEMsQ0FBSixFQUFPO1VBQ0hBLENBQUMsQ0FBQ3FFLFFBQUYsQ0FBV2pGLENBQVg7VUFDQVksQ0FBQyxDQUFDcUQsT0FBRjtVQUNBckQsQ0FBQyxHQUFHLElBQUo7VUFDQUQsQ0FBQyxDQUFDd0ksZUFBRjtRQUNIO01BQ0osQ0FWRDs7TUFXQXZJLENBQUMsQ0FBQ2lELE9BQUYsQ0FBVTdELENBQVY7SUFDSDtFQUNKLENBOUJEOztFQStCQVksQ0FBQyxDQUFDZ0IsU0FBRixDQUFZdUgsZUFBWixHQUE4QixZQUFZLENBQUUsQ0FBNUM7O0VBQ0F2SSxDQUFDLENBQUNnQixTQUFGLENBQVl3SCxnQkFBWixHQUErQixZQUFZLENBQUUsQ0FBN0M7O0VBQ0F4SSxDQUFDLENBQUNnQixTQUFGLENBQVl5SCxvQkFBWixHQUFtQyxZQUFZO0lBQzNDLE9BQU8sSUFBSWpILE9BQUosQ0FBWSxVQUFVekIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO01BQy9CLElBQUlJLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVb0ksb0JBQWQsRUFBb0M7UUFDaENySSxNQUFNLENBQUNDLEVBQVAsQ0FBVW9JLG9CQUFWLENBQStCO1VBQzNCckgsT0FBTyxFQUFFLGlCQUFVcEIsQ0FBVixFQUFhO1lBQ2xCLElBQUksS0FBS0EsQ0FBVCxFQUFZO2NBQ1JELENBQUM7WUFDSjtVQUNKLENBTDBCO1VBTTNCdUIsSUFBSSxFQUFFLGNBQVV2QixDQUFWLEVBQWE7WUFDZkMsQ0FBQyxDQUFDRCxDQUFELENBQUQ7VUFDSCxDQVIwQjtVQVMzQnNCLFFBQVEsRUFBRSxvQkFBWSxDQUFFO1FBVEcsQ0FBL0I7TUFXSDtJQUNKLENBZE0sQ0FBUDtFQWVILENBaEJEOztFQWlCQXJCLENBQUMsQ0FBQ2dCLFNBQUYsQ0FBWTBILGtCQUFaLEdBQWlDLFlBQVk7SUFDekMsS0FBS25ELGFBQUw7RUFDSCxDQUZEOztFQUdBdkYsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZMkgsb0JBQVosR0FBbUMsVUFBVTVJLENBQVYsRUFBYUMsQ0FBYixFQUFnQjBCLENBQWhCLEVBQW1CdEMsQ0FBbkIsRUFBc0I7SUFDckQsSUFBSSxLQUFLLENBQUwsS0FBV1csQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsRUFBSjtJQUNIOztJQUNELElBQUksS0FBSyxDQUFMLEtBQVdDLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLENBQUo7SUFDSDs7SUFDRCxJQUFJLEtBQUssQ0FBTCxLQUFXMEIsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsQ0FBSjtJQUNIOztJQUNELElBQUksS0FBSyxDQUFMLEtBQVd0QyxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxDQUFKO0lBQ0g7RUFDSixDQWJEOztFQWNBLE9BQU9ZLENBQVA7QUFDSCxDQTdsQkQsQ0E2bEJHVCxhQUFhLENBQUNxSixZQTdsQmpCLENBSEMsQ0FBTDtBQWltQkF2SixPQUFPLENBQUNDLEVBQVIsR0FBYU0sQ0FBYiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG5leHBvcnRzLlhNID0gdm9pZCAwO1xudmFyICRiYXNlUGxhdGZvcm0gPSByZXF1aXJlKFwiLi9CYXNlUGxhdGZvcm1cIik7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9XG4gICAgKGEuY2NjbGFzcyxcbiAgICBhLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0LmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgICAgIGUuZmlyc3RCYW5uZXJEZWxheVRpbWUgPSA5MDtcbiAgICAgICAgICAgIGUuc2RrID0gd2luZG93LnFnO1xuICAgICAgICAgICAgZS5fbmF0aXZlQWRzID0gW107XG4gICAgICAgICAgICBlLmlzSW5zZXJ0ID0gITE7XG4gICAgICAgICAgICBlLmdhbWVQb3J0YWxBZCA9IG51bGw7XG4gICAgICAgICAgICBlLnN1Y2NGdW5jID0gbnVsbDtcbiAgICAgICAgICAgIGUuZmFpbEZ1bmMgPSBudWxsO1xuICAgICAgICAgICAgZS5pbnNlcnRWaWRlb0ludGVydmFsID0gNjA7XG4gICAgICAgICAgICBlLmluZXJ0VmlkZW9MaW1pdENvdW50ID0gODtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bCP57Gz5b+r5bqU55SoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5lbmFibGVkRGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3aW5kb3dbJ3FnJ10uc2V0RW5hYmxlRGVidWdcIiwgITEpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5xZy5zZXRFbmFibGVEZWJ1Zyh7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZURlYnVnOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge30sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuc2lsZW50TG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucWcubG9naW4oe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0KG4udWlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZShcIltYTV0gLS0+IGRhdGEgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zaG93QmFubmVyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LnFnICYmIHRoaXMuc2RrLmNyZWF0ZUJhbm5lckFkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB3aW5kb3cucWcuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHIud2luZG93SGVpZ2h0IC0gODA7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSByLndpbmRvd1dpZHRoO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9iYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIgPSB0aGlzLnNkay5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5fY29uZmlnLmJhbm5lcklELFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOiAzMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFubmVyLm9uUmVzaXplKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLl9iYW5uZXIuc3R5bGUudG9wID0gci53aW5kb3dIZWlnaHQgLSB0LmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFubmVyLm9uRXJyb3IoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbVklWT1BsYXRmb3JtXSBzaG93QmFubmVyXCIsIEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5kZXN0cm95QmFubmVyQWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgWJhbm5lcjAwMFwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9iYW5uZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgWJhbm5lcjExMVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZSA5q+BYmFubmVyMjJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFubmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUgOavgWJhbm5lMzMzM1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuc2hvd05hdGl2ZUFkcyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWE0gPT0gPj5cIiwgXCJzaG93TmF0aXZlQWRzXCIsIHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJYTSA9PSA+PlwiLCBcInNob3dOYXRpdmVBZHMxMVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWE0gPT0gPj5cIiwgXCJzaG93TmF0aXZlQWRzMjJcIik7XG4gICAgICAgICAgICB2YXIgciA9IHRoaXMuc2RrLmNyZWF0ZU5hdGl2ZUFkKHtcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogdC5pZCB8fCB0aGlzLl9jb25maWcubmF0aXZlSURcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdC5jb250YWluZXIub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuX25hdGl2ZUFkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBhZHM6IHIsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiB0LmNvbnRhaW5lclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhNID09ID4+XCIsIFwic2hvd05hdGl2ZUFkczMzXCIpO1xuICAgICAgICAgICAgci5vbkxvYWQoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICBpZiAoby5hZExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IG8uYWRMaXN0WzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoMCAhPSB0LmNvbnRhaW5lci5vcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyICYmIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIucmVwb3J0QWRTaG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZElkOiBpLmFkSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gdC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYTSA9PSA+PlwiLCBcInNob3dOYXRpdmVBZHM0NDRcIiksIG4uc2hvd05hdGl2ZUJhbm5lcjIoaSwgciwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxID09IHQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnNob3dOYXRpdmVJbnNlcnQoaSwgciwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5zaG93TmF0aXZlSWNvbihpLCByLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgci5vZmZFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICByLm9mZkxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHIub25FcnJvcihmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWE1QbGF0Zm9ybV0gc2hvd05hdGl2ZUFkXCIsIG8pO1xuICAgICAgICAgICAgICAgIGlmICh0LmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0LmNvbnRhaW5lci5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdC5jb250YWluZXIub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gbi5fbmF0aXZlQWRzLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY29udGFpbmVyLm5hbWUgPT0gdC5jb250YWluZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLl9uYXRpdmVBZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHIub2ZmRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByLm9mZkxvYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoci5kZXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIHIuZGVzdG9yeSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoMSA9PSB0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwib25JbnRlcnN0aXRpYWxGZWVkU2hvd0ZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgci5sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLnNob3dOYXRpdmVCYW5uZXIyID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICAgICAgICAgIHZhciByID0gdGhpcztcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IG4pIHtcbiAgICAgICAgICAgICAgICBuID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmL7npLrljp/nlJ9CYW5uZXI9PT09PT09XCIpO1xuICAgICAgICAgICAgdmFyIG8gPSBuLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIHZhciBpID0gby5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKTtcbiAgICAgICAgICAgIHZhciBhID0gby5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpO1xuICAgICAgICAgICAgdmFyIHMgPSBvLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKTtcbiAgICAgICAgICAgIHZhciBjID0gby5nZXRDaGlsZEJ5TmFtZShcImJ0blRleHRcIik7XG4gICAgICAgICAgICB2YXIgbCA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJjbG9zZVwiKTtcbiAgICAgICAgICAgIG8uYWN0aXZlID0gITA7XG4gICAgICAgICAgICBvLm9uY2UoXG4gICAgICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlLnJlcG9ydEFkQ2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogdC5hZElkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByLmhpZGVOYXRpdmVBZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaGlkZUNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmhpZGVDYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgICAgICBsLm9uY2UoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNNaXN0YWtlQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucmVwb3J0QWRDbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogdC5hZElkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuaGlkZU5hdGl2ZUFkcygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgci5oaWRlTmF0aXZlQWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaGlkZUNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmhpZGVDYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdC50aXRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0LmRlc2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgIGMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgKHQuY2xpY2tCdG5UeHQgfHwgXCLngrnlh7vmn6XnnItcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gdC5pbWdVcmxMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHQuaW1nVXJsTGlzdC5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ICYmIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuaGlkZU5hdGl2ZUFkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZqQ6JeP5Y6f55Sf5bm/5ZGKXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX25hdGl2ZUFkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuX25hdGl2ZUFkcy5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0LmNvbnRhaW5lciwgITApKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuY29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0LmNvbnRhaW5lci5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdC5jb250YWluZXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0LmNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcImNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5jb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0LmFkcy5kZXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIHQuYWRzLmRlc3RvcnkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwib25JbnRlcnN0aXRpYWxGZWVkUmVtb3ZlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzSW5zZXJ0ID0gITE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmipvkuovku7blhbPpl63ljp/nlJ9iYW5uZXJcIik7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiaGlkZU5hdGl2ZUFkc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuc2hvd05hdGl2ZUluc2VydCA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgICAgICB2YXIgciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBuKSB7XG4gICAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvID0gbi5jb250YWluZXI7XG4gICAgICAgICAgICB2YXIgaSA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIikgfHwgby5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIik7XG4gICAgICAgICAgICB2YXIgYSA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHZhciBzID0gby5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIik7XG4gICAgICAgICAgICB2YXIgYyA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJidG5UZXh0XCIpO1xuICAgICAgICAgICAgdmFyIGwgPSBvLmdldENoaWxkQnlOYW1lKFwibmV4dFwiKTtcbiAgICAgICAgICAgIHZhciB1ID0gby5nZXRDaGlsZEJ5TmFtZShcImNsb3NlXCIpO1xuICAgICAgICAgICAgdmFyIGYgPSBvLmdldENoaWxkQnlOYW1lKFwibWFza1wiKTtcbiAgICAgICAgICAgIG8uYWN0aXZlID0gITA7XG4gICAgICAgICAgICBvLm9uY2UoXG4gICAgICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlLnJlcG9ydEFkQ2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogdC5hZElkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByLmhpZGVOYXRpdmVBZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaGlkZUNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmhpZGVDYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICAgICAgICBsLm9uY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnJlcG9ydEFkQ2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkSWQ6IHQuYWRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByLmhpZGVOYXRpdmVBZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmhpZGVDYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uaGlkZUNiKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICAgICAgICB1Lm9uY2UoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNNaXN0YWtlQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucmVwb3J0QWRDbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogdC5hZElkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuaGlkZU5hdGl2ZUFkcygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgci5oaWRlTmF0aXZlQWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaGlkZUNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmhpZGVDYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgIGYub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobi5pc01pc3Rha2VBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucmVwb3J0QWRDbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogdC5hZElkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuaGlkZU5hdGl2ZUFkcygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgci5oaWRlTmF0aXZlQWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaGlkZUNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmhpZGVDYigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdC50aXRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0LmRlc2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgIGMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgKHQuY2xpY2tCdG5UeHQgfHwgXCLngrnlh7vmn6XnnItcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gdC5pbWdVcmxMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHQuaW1nVXJsTGlzdC5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ICYmIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm9uSW50ZXJzdGl0aWFsRmVlZFNob3dcIik7XG4gICAgICAgICAgICB0aGlzLmlzSW5zZXJ0ID0gITA7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLnNob3dOYXRpdmVJY29uID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICAgICAgICAgIHZhciByID0gdGhpcztcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IG4pIHtcbiAgICAgICAgICAgICAgICBuID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAwLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSBuLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIHZhciBpID0gby5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKSB8fCBvLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKTtcbiAgICAgICAgICAgIHZhciBhID0gby5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpO1xuICAgICAgICAgICAgdmFyIHMgPSBvLmdldENoaWxkQnlOYW1lKFwiY2xvc2VcIik7XG4gICAgICAgICAgICBvLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgby5vbmNlKFxuICAgICAgICAgICAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5yZXBvcnRBZENsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkSWQ6IHQuYWRJZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgci5oaWRlTmF0aXZlQWRzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmhpZGVDYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5oaWRlQ2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgcy5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmlzTWlzdGFrZUNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnJlcG9ydEFkQ2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkSWQ6IHQuYWRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByLmhpZGVOYXRpdmVBZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuaGlkZU5hdGl2ZUFkcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmhpZGVDYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5oaWRlQ2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHQudGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHQuaWNvbiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdCAmJiBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zaG93UG9ydGFsQWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5xZy5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtVmVyc2lvbkNvZGUgPj0gMTA3Nikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQb3J0YWxBZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3J0YWxBZFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0KCExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93IGZhaWwgd2l0aDpcIiArIGUuZXJyQ29kZSArIFwiLFwiICsgZS5lcnJNc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ2FtZVBvcnRhbEFkID0gd2luZG93LnFnLmNyZWF0ZUdhbWVQb3J0YWxBZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogXCIzNDI0MjhcIlxuICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3J0YWxBZC5vbkxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqS5o6o55uS5a2Q5Lmd5a6r5qC85bm/5ZGK5Yqg6L295oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2FtZVBvcnRhbEFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCghMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3cgZmFpbCB3aXRoOlwiICsgZS5lcnJDb2RlICsgXCIsXCIgKyBlLmVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVQb3J0YWxBZC5vbkNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS6kuaOqOebkuWtkOS5neWuq+agvOW5v+WRiuWFs+mXrVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lUG9ydGFsQWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9hZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCghMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIGZhaWwgd2l0aDpcIiArIGUuZXJyQ29kZSArIFwiLFwiICsgZS5lcnJNc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlv6vlupTnlKjlubPlj7DniYjmnKzlj7fkvY7kuo4xMDc277yM5pqC5LiN5pSv5oyB5LqS5o6o55uS5a2Q55u45YWzIEFQSVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuaGlkZUJhbm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucWcgJiYgdGhpcy5fYmFubmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaWRlQmFubmVyQWQ9PT09XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFubmVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5oaWRlTmF0aXZlQmFubmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaWRlTmF0aXZlQWRzPT09PVwiKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU5hdGl2ZUFkcygpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5sb2FkUmV3YXJkVmlkZW9BZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBlLnByb3RvdHlwZS5zaG93UmV3YXJkQWRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1hNXVtzaG93UmV3YXJkVmlkZW9dXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMudmlkZW9BZCkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1hNXVtzaG93UmV3YXJkVmlkZW8xXVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQWQgPSB3aW5kb3cucWcuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IHRoaXMuX2NvbmZpZy5yZXdhcmRJRFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vbkxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltYTV0gbG9hZCBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vbkVycm9yKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IOmUmeivr+S/oeaBrzogXCIgKyB0ICsgXCIsIOmUmeivr+eggTogXCIgKyBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICBpZiAoci5pc0VuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWE0g5r+A5Yqx6KeG6aKR5bm/5ZGK5a6M5oiQ77yM5Y+R5pS+5aWW5YqxXCIpO1xuICAgICAgICAgICAgICAgICAgICB0KDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWE0g5r+A5Yqx6KeG6aKR5bm/5ZGK5Y+W5raI5YWz6Zet77yM5LiN5Y+R5pS+5aWW5YqxXCIpO1xuICAgICAgICAgICAgICAgICAgICB0KDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnZpZGVvQWQub2ZmQ2xvc2Uobik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy52aWRlb0FkLm9uQ2xvc2Uobik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltYTV1bc2hvd1Jld2FyZFZpZGVvMl1cIik7XG4gICAgICAgICAgICB0aGlzLnZpZGVvQWRcbiAgICAgICAgICAgICAgICAubG9hZCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlLnZpZGVvQWQuc2hvdygpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4bSDop4bpopHmmL7npLrmiJDlip8xXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW1hNXVtzaG93VmlkZW9BRF0gZXJyb3JcIiwgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgICAgICAgICB0KC0xKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1hNXVtzaG93UmV3YXJkVmlkZW8zXVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuc2hvd0luc2VydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1hNXSAtLT4g5bGV56S65o+S5bGPXCIpO1xuICAgICAgICAgICAgdmFyIGUgPSB3aW5kb3cucWcuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xuICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLl9jb25maWcuaW5zZXJ0SURcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5zaG93KCk7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5vZmZDbG9zZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnBsYXlJbnNlcnRBZEVuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlLm9uQ2xvc2Uobik7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBmdW5jdGlvbiAobiwgbykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhNIOaPkuWxj+mUmeivr1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJDb2RlXCIsIG4pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyck1zZ1wiLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUub2ZmRXJyb3Iocik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5wbGF5SW5zZXJ0QWRFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZS5vbkVycm9yKHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5wbGF5SW5zZXJ0QWRFbmQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgZS5wcm90b3R5cGUucGxheUluc2VydEFkU2hvdyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBlLnByb3RvdHlwZS5oYXNTaG9ydGN1dEluc3RhbGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucWcuaGFzU2hvcnRjdXRJbnN0YWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnFnLmhhc1Nob3J0Y3V0SW5zdGFsbGVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge31cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLnJlbW92ZUxhcmdlUGljRmVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU5hdGl2ZUFkcygpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zaG93SW50ZXJzdGl0aWFsRmVlZCA9IGZ1bmN0aW9uICh0LCBlLCBuLCByKSB7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgdCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICAgICAgZSA9IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBuKSB7XG4gICAgICAgICAgICAgICAgbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSByKSB7XG4gICAgICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlO1xuICAgIH0pKCRiYXNlUGxhdGZvcm0uQmFzZVBsYXRmb3JtKSk7XG5leHBvcnRzLlhNID0gcztcbiJdfQ==