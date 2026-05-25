
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8551jOC9tJUbIJ/M2kC5Pw', 'WX');
// scripts/WX.js

"use strict";

var r;
exports.WX = void 0;

var $basePlatform = require("./BasePlatform");

var $eventConst = require("./EventConst");

var $userConst = require("./UserConst");

var $audioManager = require("./AudioManager");

var $bmsManager = require("./BmsManager");

var $eventManager = require("./EventManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var h = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.sdk = window.wx;
    e._rewardAds = null;
    e._rewardAdsCb = null;
    e._rewardHasShow = !1;
    e._rewardHasLoad = !1;
    e._banner = null;
    e._insert = null;
    e._block = null;
    e._appBox = null;
    e._isMute = !1;
    e.time = null;
    e._inScene = null;
    e.ta = null;
    e.musicVolume = null;
    e.bgm = null;
    e._block2 = null;
    e._block3 = null;
    e._gridAd1 = null;
    e._gridAd2 = null;
    console.log("微信");
    e.sdk.showShareMenu({
      withShareTicket: !0
    });
    e.sdk.onShareTimeline(function () {
      return e.getShareData();
    });
    e.sdk.onShareAppMessage(function () {
      return e.getShareData();
    });
    var n = e.sdk.getLaunchOptionsSync();
    console.log("微信启动参数", n);
    window.scene = n.scene || 0;

    if ([1045, 1067, 1095, 1228, 1232, 1238, 1200].includes(window.scene)) {
      window.buyuser = !0;
    } else {
      window.buyuser = !1;
    }

    window.query = n.query || {};
    window.source_appid = n.source_appid || null;

    if (window.query) {
      window.channel_id = window.query.channel_id || "";
    } else {
      window.channel_id = null;
    }

    if (window.wx.getDeviceInfo) {
      window.system = window.wx.getDeviceInfo().system || null;
      window.client = window.wx.getDeviceInfo().model || null;
    } else {
      window.system = "";
      window.client = "";
    }

    if (n.scene) {
      e._inScene = n.scene;
      console.log("## 进入场景值：", e._inScene);

      if ((1104 == e._inScene || 1103 == e._inScene) && 0 == ($userManager.User.get($userConst.UserData.EnterSidebar) || 0)) {
        cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
          state: "complete"
        });
        $userManager.User.set($userConst.UserData.EnterSidebar, 1);
        $eventManager.Event.emit($eventConst["default"].EnterSidebar);
      }
    }

    e.sdk.onShow(function (t) {
      $eventManager.Event.emit($eventConst["default"].restoreTime);
      console.log("启动参数如下：", t);
      var n = new Date().getTime();
      var r = $bmsManager.BMS.getKey("shareCD");

      if ($userManager.User.getTempData("clickShareNew")) {
        console.log("分享时间判断", n, e.time, n - e.time, r);

        if ((n - e.time) / 1e3 >= r) {
          cc.game.emit("shareSuc");

          if (window.rewardCB) {
            window.rewardCB(0);
            window.rewardCB = null;
            var o = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
            $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, o + 1);
            e.checkNext();
          }
        } else {
          cc.game.emit("shareFail");
          $tipManager.Tip.show("分享失败，请分享到大于10人的群里");
        }

        $userManager.User.setTempData("clickShareNew", !1);
      }

      if (1104 != t.scene && 1103 != t.scene) {//
      } else {
        if (0 == ($userManager.User.get($userConst.UserData.EnterSidebar) || 0)) {
          cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
            state: "complete"
          });
          $userManager.User.set($userConst.UserData.EnterSidebar, 1);
          $eventManager.Event.emit($eventConst["default"].EnterSidebar);
        }
      }
    });
    e.sdk.onHide(function () {
      $eventManager.Event.emit($eventConst["default"].StopTimer);
      e.time = new Date().getTime();
      cc.game.emit("gamelog_Thinking", "Leave_Game", {
        Duration: Math.floor(new Date().getTime() / 1e3) - window.start_in_time
      });
    });
    return e;
  }

  __extends(e, t);

  e.prototype.checkNext = function () {
    if ("all" == $bmsManager.BMS.getKey("share")) {
      var t = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;

      if (window.buyuser) {
        var e = $bmsManager.BMS.getKey("buyuser");
        console.log("买量用户", e);

        if (1 == e.length && 0 == e[0]) {} else if (0 == e[e.length - 1]) {
          if (2 == e[t % e.length] && t < e.length) {
            window.rewardType = "share";
            return void cc.game.emit("updateVideoShare");
          }
        } else if (2 == e[t % e.length]) {
          window.rewardType = "share";
          return void cc.game.emit("updateVideoShare");
        }
      } else {
        var n = $bmsManager.BMS.getKey("normaluser");
        console.log("自然用户", n);

        if (1 == n.length && 0 == n[0]) {} else if (0 == n[n.length - 1]) {
          if (2 == n[t % n.length] && t < n.length) {
            window.rewardType = "share";
            return void cc.game.emit("updateVideoShare");
          }
        } else if (2 == n[t % n.length]) {
          window.rewardType = "share";
          return void cc.game.emit("updateVideoShare");
        }
      }

      window.rewardType = "video";
      cc.game.emit("updateVideoShare");
    }
  };

  e.prototype.initThinking = function () {
    this.ta = new ThinkingAnalyticsAPI({
      appId: "536288bb49c6415c9b6d971e0c7fe661",
      serverUrl: "https://ta-data.zuiqiangyingyu.net",
      autoTrack: {
        appShow: !0,
        appHide: !0
      }
    });
  };

  e.prototype.taInit = function (t) {
    this.initThinking();
    this.ta.login(t);
    this.ta.init();
  };

  e.prototype.report = function (t, e) {
    this.ta.setSuperProperties({
      version: this._config.version
    });
    this.ta.track(t, JSON.parse(e));
  };

  e.prototype.getInstance = function () {
    return this.sdk;
  };

  e.prototype.showRewardAds = function (t) {
    var e = this;
    var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
    console.log("显示激励视频 todayShareOrVideoTimes", n);

    if ("all" == $bmsManager.BMS.getKey("share")) {
      if (window.buyuser) {
        var r = $bmsManager.BMS.getKey("buyuser");

        if (1 == r.length && 0 == r[0]) {} else if (0 == r[r.length - 1]) {
          if (2 == r[n % r.length] && n < r.length) {
            $userManager.User.setTempData("clickShareNew", !0);
            window.rewardCB = t;
            return void this.share();
          }
        } else if (2 == r[n % r.length]) {
          $userManager.User.setTempData("clickShareNew", !0);
          window.rewardCB = t;
          return void this.share();
        }
      } else {
        var o = $bmsManager.BMS.getKey("normaluser");

        if (1 == o.length && 0 == o[0]) {} else if (0 == o[o.length - 1]) {
          if (2 == o[n % o.length] && n < o.length) {
            $userManager.User.setTempData("clickShareNew", !0);
            window.rewardCB = t;
            return void this.share();
          }
        } else if (2 == o[n % o.length]) {
          $userManager.User.setTempData("clickShareNew", !0);
          window.rewardCB = t;
          return void this.share();
        }
      }
    }

    if (this.sdk.createRewardedVideoAd) {
      if (this._config.rewardID) {
        return void (this._rewardAdsCb || ($eventManager.Event.emit($eventConst["default"].StopTimer), this.bgm = $audioManager.Audio.currentBgm, $audioManager.Audio.stopMusic(), this._rewardAdsCb = t, this._rewardHasShow = !1, this._rewardAds || (this._rewardAds = this.sdk.createRewardedVideoAd({
          adUnitId: this._config.rewardID
        }), this._rewardAds.onLoad(function () {
          e._rewardHasLoad = !0;

          if (e._rewardHasShow) {//
          } else {
            e._rewardHasShow = !0;
            cc.game.emit("ad_show");

            e._rewardAds.show();
          }
        }), this._rewardAds.onClose(function (t) {
          e._rewardHasLoad = !1;

          if (t.isEnded) {
            cc.game.emit("addVideoTimes");
            var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
            $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
            e.checkNext();
          }

          e._rewardAdsCb(t.isEnded ? 0 : 1);

          e._rewardAdsCb = null;
          $audioManager.Audio.playMusic(e.bgm);
          $eventManager.Event.emit($eventConst["default"].restoreTime);
        }), this._rewardAds.onError(function (t) {
          e._rewardHasLoad = !1;
          console.log("[platform] [WeChatPlatform] showRewardAds", t);

          e._rewardAdsCb(-1);

          e._rewardAdsCb = null;
          $eventManager.Event.emit($eventConst["default"].restoreTime);
          $audioManager.Audio.playMusic(e.bgm);
        })), this._rewardHasLoad && !this._rewardHasShow ? (this._rewardHasShow = !0, cc.game.emit("ad_show"), this._rewardAds.show()) : this._rewardAds.load()));
      } else {
        return $tipManager.Tip.show("暂无广告，敬请期待"), t(-3);
      }
    } else {
      return t(-2);
    }
  };

  e.prototype.preloadBanner = function (t) {
    var e = this;

    if (void 0 === t) {
      t = {
        id: ""
      };
    }

    if (this.sdk.createBannerAd && this._config.bannerID) {
      if (this._banner) {//
      } else {
        this._banner = this.sdk.createBannerAd({
          adUnitId: t.id || this._config.bannerID,
          style: {
            left: 9999,
            top: 9999
          },
          adIntervals: 30
        });

        this._banner.onLoad(function () {});

        this._banner.onError(function (t) {
          console.log("[platform] [WeChatPlatform] preloadBanner", t);
        });

        this._banner.onResize(function (t) {
          var n = e.sdk.getSystemInfoSync();

          if (e._banner) {
            e._banner.style.top = n.windowHeight - t.height;
          }

          if (e._banner) {
            e._banner.style.left = (n.windowWidth - t.width) / 2;
          }
        });
      }
    }
  };

  e.prototype.showBanner = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        id: "",
        left: null,
        top: null
      };
    }

    if (this.sdk.createBannerAd && this._config.bannerID) {
      if (this._banner) {
        this._banner && (this._banner.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        }), t.top && (this._banner.style.top = t.top), t.left && (this._banner.style.left = t.left));
      } else {
        this._banner = this.sdk.createBannerAd({
          adUnitId: t.id || this._config.bannerID,
          style: {
            left: 9999,
            top: 9999
          },
          adIntervals: 30
        }), this._banner.onLoad(function () {
          if (n._banner) {
            n._banner.show().then(function () {
              if (e) {
                e(0);
              }
            })["catch"](function () {
              if (e) {
                e(1);
              }
            });
          } else {
            if (e) {
              e(0);
            }
          }
        }), this._banner.onError(function (t) {
          console.log("[platform] [WeChatPlatform] showBanner", t);
          cc.game.emit("showBannerError");

          if (e) {
            e(1);
          }
        }), this._banner.onResize(function (e) {
          var r = n.sdk.getSystemInfoSync();
          var o = r.windowHeight - e.height;
          var i = (r.windowWidth - e.width) / 2;

          if (t.top) {
            o = t.top;
          }

          if (t.left) {
            i = t.left;
          }

          n._banner.style.top = o;
          n._banner.style.left = i;
        });
      }
    }
  };

  e.prototype.hideBanner = function (t) {
    if (this._banner) {
      console.log("hideBanner() keepAlive:", t);

      if (t) {
        this._banner.hide();
      } else {
        this._banner.destroy(), this._banner = null;
      }
    }
  };

  e.prototype.showInsert = function () {
    var t = this;

    if (this.sdk.createInterstitialAd && this._config.insertID) {
      if (this._insert) {
        this._insert.load().then(function () {
          t._insert.show().then(function () {})["catch"](function (t) {
            console.log("[platform] [WeChatPlatform] showInsert", t);
          });
        });
      } else {
        this._insert || (this._insert = this.sdk.createInterstitialAd({
          adUnitId: this._config.insertID
        }), this._insert.onLoad(function () {
          if (t._insert) {
            t._insert.show().then(function () {})["catch"](function (t) {
              console.log("[platform] [WeChatPlatform] showInsert", t);
            });
          }
        }), this._insert.onClose(function () {
          if (t._insert) {
            t._insert.destroy();

            t._insert = null;
          }
        }), this._insert.onError(function (e) {
          console.log("[platform] [WeChatPlatform] showInsert", e);

          if (e && 1003 == e.errCode && t._insert) {
            t._insert.destroy();

            t._insert = null;
          }
        }));
      }
    }
  };

  e.prototype.showBlockAds = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        id: "",
        left: 0,
        top: 0
      };
    }

    if (this.sdk.createCustomAd) {
      if (this._block) {
        console.log("显示"), this._block && this._block.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        });
      } else {
        this._block = this.sdk.createCustomAd({
          adUnitId: t.id,
          style: {
            left: t.left,
            top: t.top
          },
          adIntervals: 60
        }), this._block.onError(function (t) {
          console.log("[platform] [WeChatPlatform] showBlockAds", JSON.stringify(t));
        }), this._block.onLoad(function () {
          console.log("[platform] [WeChatPlatform] showBlockAds onLoad");
        }), this._block.onClose(function () {
          if (n._block) {
            n._block.destroy();

            n._block = null;

            if (t.hideCb) {
              t.hideCb();
            }
          }
        }), this._block.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        });
      }
    }
  };

  e.prototype.showBlockAds2 = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        id: "",
        left: 0,
        top: 0
      };
    }

    if (this.sdk.createCustomAd) {
      if (this._block2) {
        console.log("显示"), this._block2 && this._block2.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        });
      } else {
        this._block2 = this.sdk.createCustomAd({
          adUnitId: t.id,
          style: {
            left: t.left,
            top: t.top
          },
          adIntervals: 60
        }), this._block2.onError(function (t) {
          console.log("[platform] [WeChatPlatform] showBlockAds", JSON.stringify(t));
        }), this._block2.onLoad(function () {
          console.log("[platform] [WeChatPlatform] showBlockAds onLoad");
        }), this._block2.onClose(function () {
          if (n._block2) {
            n._block2.destroy();

            n._block2 = null;

            if (t.hideCb) {
              t.hideCb();
            }
          }
        }), this._block2.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        });
      }
    }
  };

  e.prototype.hideBlockAds2 = function () {
    if (this._block2) {
      this._block2.destroy();

      this._block2 = null;
    }
  };

  e.prototype.showBlockAds3 = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        id: "",
        left: 0,
        top: 0
      };
    }

    if (this._block3) {
      console.log("显示");
      this._block3 && this._block3.show().then(function () {
        if (e) {
          e(0);
        }
      })["catch"](function () {
        if (e) {
          e(1);
        }
      });
    } else {
      this._block3 = this.sdk.createCustomAd({
        adUnitId: t.id,
        style: {
          left: t.left,
          top: t.top
        },
        adIntervals: 60
      });

      this._block3.onError(function (t) {
        console.log("[platform] [WeChatPlatform] showBlockAds", JSON.stringify(t));
      });

      this._block3.onLoad(function () {
        console.log("[platform] [WeChatPlatform] showBlockAds onLoad");
      });

      this._block3.onClose(function () {
        if (n._block3) {
          n._block3.destroy();

          n._block3 = null;

          if (t.hideCb) {
            t.hideCb();
          }
        }
      });

      this._block3.show().then(function () {
        if (e) {
          e(0);
        }
      })["catch"](function () {
        if (e) {
          e(1);
        }
      });
    }
  };

  e.prototype.hideBlockAds3 = function () {
    if (this._block3) {
      this._block3.destroy();

      this._block3 = null;
    }
  };

  e.prototype.hideBlockAds = function () {
    if (this._block) {
      this._block.destroy();

      this._block = null;
    }
  };

  e.prototype.showAppBoxAds = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        id: "",
        left: 0,
        top: 0
      };
    }

    if (this.sdk.createCustomAd && this._config.boxID) {
      if (this._appBox) {
        this._appBox && this._appBox.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        });
      } else {
        this._appBox = this.sdk.createCustomAd({
          adUnitId: t.id || this._config.boxID,
          style: {
            left: t.left,
            top: t.top
          },
          adIntervals: 60
        }), this._appBox.onError(function (t) {
          console.log("[platform] [WeChatPlatform] showAppBoxAds", t);
        }), this._appBox.onLoad(function () {
          console.log("[platform] [WeChatPlatform] showAppBoxAds onLoad");
        }), this._appBox.onClose(function () {
          if (n._appBox) {
            n._appBox.destroy();

            n._appBox = null;

            if (t.hideCb) {
              t.hideCb();
            }
          }
        }), this._appBox.show().then(function () {
          if (e) {
            e(0);
          }
        })["catch"](function () {
          if (e) {
            e(1);
          }
        });
      }
    }
  };

  e.prototype.hideAppBoxAds = function () {
    if (this._appBox) {
      this._appBox.destroy();

      this._appBox = null;
    }
  };

  e.prototype.share = function () {
    this.sdk.shareAppMessage(this.getShareData());
  };

  e.prototype.getShareData = function () {
    var t = $bmsManager.BMS.getShareList();
    var e = {};

    if (t.length > 0) {
      var n = t[Math.floor(Math.random() * t.length)];
      e.title = n.title;
      e.imageUrl = n.image;
    }

    return e;
  };

  e.prototype.showCustomAd1 = function (t) {
    var e = this;
    var n = (t.width, t.height, t.x, t.y, cc.winSize.width, cc.winSize.height, window.wx.getSystemInfoSync());
    var r = (n.screenWidth, n.screenHeight, cc.Canvas.instance.node.width, cc.Canvas.instance.node.height);
    var o = n.screenHeight / r;
    var i = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
    var a = (i.x - t.width * t.anchorX) * o;
    var s = (r - i.y - t.height * (1 - t.anchorY)) * o;

    if (this._gridAd1) {
      this._gridAd1.show().then(function () {})["catch"](function () {});
    } else {
      this._gridAd1 = window.wx.createCustomAd({
        adUnitId: "adunit-135903ab906789f2",
        adIntervals: 30,
        style: {
          left: a,
          top: s
        }
      });

      this._gridAd1.onError(function (t) {
        console.log("[platform] [WeChatPlatform] showBlockAds", t);
      });

      this._gridAd1.onLoad(function () {
        console.log("[platform] [WeChatPlatform] showBlockAds onLoad");
      });

      this._gridAd1.onClose(function () {
        if (e._gridAd1) {
          e._gridAd1.destroy();

          e._gridAd1 = null;
        }
      });

      this._gridAd1.show().then(function () {})["catch"](function () {});
    }
  };

  e.prototype.showCustomAd2 = function (t) {
    var e = this;
    var n = (t.width, t.height, t.x, t.y, cc.winSize.width, cc.winSize.height, window.wx.getSystemInfoSync());
    var r = (n.screenWidth, n.screenHeight, cc.Canvas.instance.node.width, cc.Canvas.instance.node.height);
    var o = n.screenHeight / r;
    var i = t.convertToWorldSpaceAR(cc.Vec2.ZERO);
    var a = (i.x - t.width * t.anchorX) * o;
    var s = (r - i.y - t.height * (1 - t.anchorY)) * o;

    if (this._gridAd2) {
      this._gridAd2.show().then(function () {})["catch"](function () {});
    } else {
      this._gridAd2 = window.wx.createCustomAd({
        adUnitId: "adunit-135903ab906789f2",
        adIntervals: 30,
        style: {
          left: a,
          top: s
        }
      });

      this._gridAd2.onError(function (t) {
        console.log("[platform] [WeChatPlatform] showBlockAds", t);
      });

      this._gridAd2.onLoad(function () {
        console.log("[platform] [WeChatPlatform] showBlockAds onLoad");
      });

      this._gridAd2.onClose(function () {
        if (e._gridAd2) {
          e._gridAd2.destroy();

          e._gridAd2 = null;
        }
      });

      this._gridAd2.show().then(function () {})["catch"](function () {});
    }
  };

  e.prototype.hideCustomAd1 = function () {
    if (this._gridAd1) {
      this._gridAd1.destroy();

      this._gridAd1 = null;
    }
  };

  e.prototype.hideCustomAd2 = function () {
    if (this._gridAd2) {
      this._gridAd2.destroy();

      this._gridAd2 = null;
    }
  };

  return e;
}($basePlatform.BasePlatform);

exports.WX = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1dYLmpzIl0sIm5hbWVzIjpbInIiLCJleHBvcnRzIiwiV1giLCIkYmFzZVBsYXRmb3JtIiwicmVxdWlyZSIsIiRldmVudENvbnN0IiwiJHVzZXJDb25zdCIsIiRhdWRpb01hbmFnZXIiLCIkYm1zTWFuYWdlciIsIiRldmVudE1hbmFnZXIiLCIkdGlwTWFuYWdlciIsIiR1c2VyTWFuYWdlciIsImgiLCJ0IiwiZSIsImNhbGwiLCJzZGsiLCJ3aW5kb3ciLCJ3eCIsIl9yZXdhcmRBZHMiLCJfcmV3YXJkQWRzQ2IiLCJfcmV3YXJkSGFzU2hvdyIsIl9yZXdhcmRIYXNMb2FkIiwiX2Jhbm5lciIsIl9pbnNlcnQiLCJfYmxvY2siLCJfYXBwQm94IiwiX2lzTXV0ZSIsInRpbWUiLCJfaW5TY2VuZSIsInRhIiwibXVzaWNWb2x1bWUiLCJiZ20iLCJfYmxvY2syIiwiX2Jsb2NrMyIsIl9ncmlkQWQxIiwiX2dyaWRBZDIiLCJjb25zb2xlIiwibG9nIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsIm9uU2hhcmVUaW1lbGluZSIsImdldFNoYXJlRGF0YSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwibiIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwic2NlbmUiLCJpbmNsdWRlcyIsImJ1eXVzZXIiLCJxdWVyeSIsInNvdXJjZV9hcHBpZCIsImNoYW5uZWxfaWQiLCJnZXREZXZpY2VJbmZvIiwic3lzdGVtIiwiY2xpZW50IiwibW9kZWwiLCJVc2VyIiwiZ2V0IiwiVXNlckRhdGEiLCJFbnRlclNpZGViYXIiLCJjYyIsImdhbWUiLCJlbWl0Iiwic3RhdGUiLCJzZXQiLCJFdmVudCIsIm9uU2hvdyIsInJlc3RvcmVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJCTVMiLCJnZXRLZXkiLCJnZXRUZW1wRGF0YSIsInJld2FyZENCIiwibyIsInRvZGF5U2hhcmVPclZpZGVvVGltZXMiLCJjaGVja05leHQiLCJUaXAiLCJzaG93Iiwic2V0VGVtcERhdGEiLCJvbkhpZGUiLCJTdG9wVGltZXIiLCJEdXJhdGlvbiIsIk1hdGgiLCJmbG9vciIsInN0YXJ0X2luX3RpbWUiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJsZW5ndGgiLCJyZXdhcmRUeXBlIiwiaW5pdFRoaW5raW5nIiwiVGhpbmtpbmdBbmFseXRpY3NBUEkiLCJhcHBJZCIsInNlcnZlclVybCIsImF1dG9UcmFjayIsImFwcFNob3ciLCJhcHBIaWRlIiwidGFJbml0IiwibG9naW4iLCJpbml0IiwicmVwb3J0Iiwic2V0U3VwZXJQcm9wZXJ0aWVzIiwidmVyc2lvbiIsIl9jb25maWciLCJ0cmFjayIsIkpTT04iLCJwYXJzZSIsImdldEluc3RhbmNlIiwic2hvd1Jld2FyZEFkcyIsInNoYXJlIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwicmV3YXJkSUQiLCJBdWRpbyIsImN1cnJlbnRCZ20iLCJzdG9wTXVzaWMiLCJhZFVuaXRJZCIsIm9uTG9hZCIsIm9uQ2xvc2UiLCJpc0VuZGVkIiwicGxheU11c2ljIiwib25FcnJvciIsImxvYWQiLCJwcmVsb2FkQmFubmVyIiwiaWQiLCJjcmVhdGVCYW5uZXJBZCIsImJhbm5lcklEIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiYWRJbnRlcnZhbHMiLCJvblJlc2l6ZSIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwiaGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3aWR0aCIsInNob3dCYW5uZXIiLCJ0aGVuIiwiaSIsImhpZGVCYW5uZXIiLCJoaWRlIiwiZGVzdHJveSIsInNob3dJbnNlcnQiLCJjcmVhdGVJbnRlcnN0aXRpYWxBZCIsImluc2VydElEIiwiZXJyQ29kZSIsInNob3dCbG9ja0FkcyIsImNyZWF0ZUN1c3RvbUFkIiwic3RyaW5naWZ5IiwiaGlkZUNiIiwic2hvd0Jsb2NrQWRzMiIsImhpZGVCbG9ja0FkczIiLCJzaG93QmxvY2tBZHMzIiwiaGlkZUJsb2NrQWRzMyIsImhpZGVCbG9ja0FkcyIsInNob3dBcHBCb3hBZHMiLCJib3hJRCIsImhpZGVBcHBCb3hBZHMiLCJzaGFyZUFwcE1lc3NhZ2UiLCJnZXRTaGFyZUxpc3QiLCJyYW5kb20iLCJ0aXRsZSIsImltYWdlVXJsIiwiaW1hZ2UiLCJzaG93Q3VzdG9tQWQxIiwieCIsInkiLCJ3aW5TaXplIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJDYW52YXMiLCJpbnN0YW5jZSIsIm5vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJWZWMyIiwiWkVSTyIsImEiLCJhbmNob3JYIiwicyIsImFuY2hvclkiLCJzaG93Q3VzdG9tQWQyIiwiaGlkZUN1c3RvbUFkMSIsImhpZGVDdXN0b21BZDIiLCJCYXNlUGxhdGZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBQyxPQUFPLENBQUNDLEVBQVIsR0FBYSxLQUFLLENBQWxCOztBQUNBLElBQUlDLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRyxhQUFhLEdBQUdILE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJSSxXQUFXLEdBQUdKLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlLLGFBQWEsR0FBR0wsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlNLFdBQVcsR0FBR04sT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSU8sWUFBWSxHQUFHUCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJUSxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxJQUFGLENBQU8sSUFBUCxLQUFnQixJQUF4QjtJQUNBRCxDQUFDLENBQUNFLEdBQUYsR0FBUUMsTUFBTSxD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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG5leHBvcnRzLldYID0gdm9pZCAwO1xudmFyICRiYXNlUGxhdGZvcm0gPSByZXF1aXJlKFwiLi9CYXNlUGxhdGZvcm1cIik7XG52YXIgJGV2ZW50Q29uc3QgPSByZXF1aXJlKFwiLi9FdmVudENvbnN0XCIpO1xudmFyICR1c2VyQ29uc3QgPSByZXF1aXJlKFwiLi9Vc2VyQ29uc3RcIik7XG52YXIgJGF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCIuL0F1ZGlvTWFuYWdlclwiKTtcbnZhciAkYm1zTWFuYWdlciA9IHJlcXVpcmUoXCIuL0Jtc01hbmFnZXJcIik7XG52YXIgJGV2ZW50TWFuYWdlciA9IHJlcXVpcmUoXCIuL0V2ZW50TWFuYWdlclwiKTtcbnZhciAkdGlwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1RpcE1hbmFnZXJcIik7XG52YXIgJHVzZXJNYW5hZ2VyID0gcmVxdWlyZShcIi4vVXNlck1hbmFnZXJcIik7XG52YXIgaCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gdC5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIGUuc2RrID0gd2luZG93Lnd4O1xuICAgICAgICBlLl9yZXdhcmRBZHMgPSBudWxsO1xuICAgICAgICBlLl9yZXdhcmRBZHNDYiA9IG51bGw7XG4gICAgICAgIGUuX3Jld2FyZEhhc1Nob3cgPSAhMTtcbiAgICAgICAgZS5fcmV3YXJkSGFzTG9hZCA9ICExO1xuICAgICAgICBlLl9iYW5uZXIgPSBudWxsO1xuICAgICAgICBlLl9pbnNlcnQgPSBudWxsO1xuICAgICAgICBlLl9ibG9jayA9IG51bGw7XG4gICAgICAgIGUuX2FwcEJveCA9IG51bGw7XG4gICAgICAgIGUuX2lzTXV0ZSA9ICExO1xuICAgICAgICBlLnRpbWUgPSBudWxsO1xuICAgICAgICBlLl9pblNjZW5lID0gbnVsbDtcbiAgICAgICAgZS50YSA9IG51bGw7XG4gICAgICAgIGUubXVzaWNWb2x1bWUgPSBudWxsO1xuICAgICAgICBlLmJnbSA9IG51bGw7XG4gICAgICAgIGUuX2Jsb2NrMiA9IG51bGw7XG4gICAgICAgIGUuX2Jsb2NrMyA9IG51bGw7XG4gICAgICAgIGUuX2dyaWRBZDEgPSBudWxsO1xuICAgICAgICBlLl9ncmlkQWQyID0gbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvq7kv6FcIik7XG4gICAgICAgIGUuc2RrLnNob3dTaGFyZU1lbnUoe1xuICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgZS5zZGsub25TaGFyZVRpbWVsaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmdldFNoYXJlRGF0YSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZS5zZGsub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGUuZ2V0U2hhcmVEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbiA9IGUuc2RrLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b6u5L+h5ZCv5Yqo5Y+C5pWwXCIsIG4pO1xuICAgICAgICB3aW5kb3cuc2NlbmUgPSBuLnNjZW5lIHx8IDA7XG4gICAgICAgIGlmIChbMTA0NSwgMTA2NywgMTA5NSwgMTIyOCwgMTIzMiwgMTIzOCwgMTIwMF0uaW5jbHVkZXMod2luZG93LnNjZW5lKSkge1xuICAgICAgICAgICAgd2luZG93LmJ1eXVzZXIgPSAhMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5idXl1c2VyID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnF1ZXJ5ID0gbi5xdWVyeSB8fCB7fTtcbiAgICAgICAgd2luZG93LnNvdXJjZV9hcHBpZCA9IG4uc291cmNlX2FwcGlkIHx8IG51bGw7XG4gICAgICAgIGlmICh3aW5kb3cucXVlcnkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jaGFubmVsX2lkID0gd2luZG93LnF1ZXJ5LmNoYW5uZWxfaWQgfHwgXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5jaGFubmVsX2lkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93Lnd4LmdldERldmljZUluZm8pIHtcbiAgICAgICAgICAgIHdpbmRvdy5zeXN0ZW0gPSB3aW5kb3cud3guZ2V0RGV2aWNlSW5mbygpLnN5c3RlbSB8fCBudWxsO1xuICAgICAgICAgICAgd2luZG93LmNsaWVudCA9IHdpbmRvdy53eC5nZXREZXZpY2VJbmZvKCkubW9kZWwgfHwgbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5zeXN0ZW0gPSBcIlwiO1xuICAgICAgICAgICAgd2luZG93LmNsaWVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4uc2NlbmUpIHtcbiAgICAgICAgICAgIGUuX2luU2NlbmUgPSBuLnNjZW5lO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyDov5vlhaXlnLrmma/lgLzvvJpcIiwgZS5faW5TY2VuZSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKDExMDQgPT0gZS5faW5TY2VuZSB8fCAxMTAzID09IGUuX2luU2NlbmUpICYmXG4gICAgICAgICAgICAgICAgMCA9PSAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuRW50ZXJTaWRlYmFyKSB8fCAwKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBcIlNpZGViYXJfUmV3YXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiY29tcGxldGVcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkVudGVyU2lkZWJhciwgMSk7XG4gICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuRW50ZXJTaWRlYmFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlLnNkay5vblNob3coZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LnJlc3RvcmVUaW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ZCv5Yqo5Y+C5pWw5aaC5LiL77yaXCIsIHQpO1xuICAgICAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciByID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcInNoYXJlQ0RcIik7XG4gICAgICAgICAgICBpZiAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjbGlja1NoYXJlTmV3XCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvml7bpl7TliKTmlq1cIiwgbiwgZS50aW1lLCBuIC0gZS50aW1lLCByKTtcbiAgICAgICAgICAgICAgICBpZiAoKG4gLSBlLnRpbWUpIC8gMWUzID49IHIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwic2hhcmVTdWNcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucmV3YXJkQ0IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXdhcmRDQigwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXdhcmRDQiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnRvZGF5U2hhcmVPclZpZGVvVGltZXMpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzLCBvICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNoZWNrTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwic2hhcmVGYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIuWIhuS6q+Wksei0pe+8jOivt+WIhuS6q+WIsOWkp+S6jjEw5Lq655qE576k6YeMXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImNsaWNrU2hhcmVOZXdcIiwgITEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDExMDQgIT0gdC5zY2VuZSAmJiAxMTAzICE9IHQuc2NlbmUpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuRW50ZXJTaWRlYmFyKSB8fCAwKSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsIFwiU2lkZWJhcl9SZXdhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuRW50ZXJTaWRlYmFyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuRW50ZXJTaWRlYmFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlLnNkay5vbkhpZGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuU3RvcFRpbWVyKTtcbiAgICAgICAgICAgIGUudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBcIkxlYXZlX0dhbWVcIiwge1xuICAgICAgICAgICAgICAgIER1cmF0aW9uOiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzKSAtIHdpbmRvdy5zdGFydF9pbl90aW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuY2hlY2tOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoXCJhbGxcIiA9PSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwic2hhcmVcIikpIHtcbiAgICAgICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcykgfHwgMDtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYnV5dXNlcikge1xuICAgICAgICAgICAgICAgIHZhciBlID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcImJ1eXVzZXJcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkubDph4/nlKjmiLdcIiwgZSk7XG4gICAgICAgICAgICAgICAgaWYgKDEgPT0gZS5sZW5ndGggJiYgMCA9PSBlWzBdKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgwID09IGVbZS5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSBlW3QgJSBlLmxlbmd0aF0gJiYgdCA8IGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmV3YXJkVHlwZSA9IFwic2hhcmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIGNjLmdhbWUuZW1pdChcInVwZGF0ZVZpZGVvU2hhcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDIgPT0gZVt0ICUgZS5sZW5ndGhdKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXdhcmRUeXBlID0gXCJzaGFyZVwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCBjYy5nYW1lLmVtaXQoXCJ1cGRhdGVWaWRlb1NoYXJlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibm9ybWFsdXNlclwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiHqueEtueUqOaIt1wiLCBuKTtcbiAgICAgICAgICAgICAgICBpZiAoMSA9PSBuLmxlbmd0aCAmJiAwID09IG5bMF0pIHtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDAgPT0gbltuLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgyID09IG5bdCAlIG4ubGVuZ3RoXSAmJiB0IDwgbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXdhcmRUeXBlID0gXCJzaGFyZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgY2MuZ2FtZS5lbWl0KFwidXBkYXRlVmlkZW9TaGFyZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMiA9PSBuW3QgJSBuLmxlbmd0aF0pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJld2FyZFR5cGUgPSBcInNoYXJlXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIGNjLmdhbWUuZW1pdChcInVwZGF0ZVZpZGVvU2hhcmVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnJld2FyZFR5cGUgPSBcInZpZGVvXCI7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJ1cGRhdGVWaWRlb1NoYXJlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0VGhpbmtpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGEgPSBuZXcgVGhpbmtpbmdBbmFseXRpY3NBUEkoe1xuICAgICAgICAgICAgYXBwSWQ6IFwiNTM2Mjg4YmI0OWM2NDE1YzliNmQ5NzFlMGM3ZmU2NjFcIixcbiAgICAgICAgICAgIHNlcnZlclVybDogXCJodHRwczovL3RhLWRhdGEuenVpcWlhbmd5aW5neXUubmV0XCIsXG4gICAgICAgICAgICBhdXRvVHJhY2s6IHtcbiAgICAgICAgICAgICAgICBhcHBTaG93OiAhMCxcbiAgICAgICAgICAgICAgICBhcHBIaWRlOiAhMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRhSW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuaW5pdFRoaW5raW5nKCk7XG4gICAgICAgIHRoaXMudGEubG9naW4odCk7XG4gICAgICAgIHRoaXMudGEuaW5pdCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVwb3J0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdGhpcy50YS5zZXRTdXBlclByb3BlcnRpZXMoe1xuICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5fY29uZmlnLnZlcnNpb25cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGEudHJhY2sodCwgSlNPTi5wYXJzZShlKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2RrO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd1Jld2FyZEFkcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzKSB8fCAwO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaYvuekuua/gOWKseinhumikSB0b2RheVNoYXJlT3JWaWRlb1RpbWVzXCIsIG4pO1xuICAgICAgICBpZiAoXCJhbGxcIiA9PSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwic2hhcmVcIikpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYnV5dXNlcikge1xuICAgICAgICAgICAgICAgIHZhciByID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcImJ1eXVzZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKDEgPT0gci5sZW5ndGggJiYgMCA9PSByWzBdKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgwID09IHJbci5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSByW24gJSByLmxlbmd0aF0gJiYgbiA8IHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImNsaWNrU2hhcmVOZXdcIiwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJld2FyZENCID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuc2hhcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMiA9PSByW24gJSByLmxlbmd0aF0pIHtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJjbGlja1NoYXJlTmV3XCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJld2FyZENCID0gdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5zaGFyZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibm9ybWFsdXNlclwiKTtcbiAgICAgICAgICAgICAgICBpZiAoMSA9PSBvLmxlbmd0aCAmJiAwID09IG9bMF0pIHtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDAgPT0gb1tvLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgyID09IG9bbiAlIG8ubGVuZ3RoXSAmJiBuIDwgby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiY2xpY2tTaGFyZU5ld1wiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmV3YXJkQ0IgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5zaGFyZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgyID09IG9bbiAlIG8ubGVuZ3RoXSkge1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImNsaWNrU2hhcmVOZXdcIiwgITApO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmV3YXJkQ0IgPSB0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnNoYXJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNkay5jcmVhdGVSZXdhcmRlZFZpZGVvQWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcucmV3YXJkSUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZEFkc0NiIHx8XG4gICAgICAgICAgICAgICAgICAgICgkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5TdG9wVGltZXIpLFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5iZ20gPSAkYXVkaW9NYW5hZ2VyLkF1ZGlvLmN1cnJlbnRCZ20pLFxuICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnN0b3BNdXNpYygpLFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5fcmV3YXJkQWRzQ2IgPSB0KSxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3Jld2FyZEhhc1Nob3cgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZEFkcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLl9yZXdhcmRBZHMgPSB0aGlzLnNkay5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLl9jb25maWcucmV3YXJkSURcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZEFkcy5vbkxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3Jld2FyZEhhc0xvYWQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5fcmV3YXJkSGFzU2hvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3Jld2FyZEhhc1Nob3cgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiYWRfc2hvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fcmV3YXJkQWRzLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZEFkcy5vbkNsb3NlKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fcmV3YXJkSGFzTG9hZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlzRW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiYWRkVmlkZW9UaW1lc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzLCBuICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2hlY2tOZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3Jld2FyZEFkc0NiKHQuaXNFbmRlZCA/IDAgOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXdhcmRBZHNDYiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGF1ZGlvTWFuYWdlci5BdWRpby5wbGF5TXVzaWMoZS5iZ20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LnJlc3RvcmVUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkQWRzLm9uRXJyb3IoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXdhcmRIYXNMb2FkID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtXZUNoYXRQbGF0Zm9ybV0gc2hvd1Jld2FyZEFkc1wiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXdhcmRBZHNDYigtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fcmV3YXJkQWRzQ2IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LnJlc3RvcmVUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlNdXNpYyhlLmJnbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZEhhc0xvYWQgJiYgIXRoaXMuX3Jld2FyZEhhc1Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLl9yZXdhcmRIYXNTaG93ID0gITApLCBjYy5nYW1lLmVtaXQoXCJhZF9zaG93XCIpLCB0aGlzLl9yZXdhcmRBZHMuc2hvdygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9yZXdhcmRBZHMubG9hZCgpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIuaaguaXoOW5v+WRiu+8jOaVrOivt+acn+W+hVwiKSwgdCgtMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdCgtMik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnByZWxvYWRCYW5uZXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2RrLmNyZWF0ZUJhbm5lckFkICYmIHRoaXMuX2NvbmZpZy5iYW5uZXJJRCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Jhbm5lcikge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lciA9IHRoaXMuc2RrLmNyZWF0ZUJhbm5lckFkKHtcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IHQuaWQgfHwgdGhpcy5fY29uZmlnLmJhbm5lcklELFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTk5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOTk5OVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhZEludGVydmFsczogMzBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIub25Mb2FkKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIub25FcnJvcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBwcmVsb2FkQmFubmVyXCIsIHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lci5vblJlc2l6ZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUuc2RrLmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLl9iYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuX2Jhbm5lci5zdHlsZS50b3AgPSBuLndpbmRvd0hlaWdodCAtIHQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLl9iYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuX2Jhbm5lci5zdHlsZS5sZWZ0ID0gKG4ud2luZG93V2lkdGggLSB0LndpZHRoKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0Jhbm5lciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvcDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZGsuY3JlYXRlQmFubmVyQWQgJiYgdGhpcy5fY29uZmlnLmJhbm5lcklEKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmFubmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFubmVyICYmXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLl9iYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHQudG9wICYmICh0aGlzLl9iYW5uZXIuc3R5bGUudG9wID0gdC50b3ApLFxuICAgICAgICAgICAgICAgICAgICB0LmxlZnQgJiYgKHRoaXMuX2Jhbm5lci5zdHlsZS5sZWZ0ID0gdC5sZWZ0KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICh0aGlzLl9iYW5uZXIgPSB0aGlzLnNkay5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0LmlkIHx8IHRoaXMuX2NvbmZpZy5iYW5uZXJJRCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk5OTksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDk5OTlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6IDMwXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIub25Mb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLl9iYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9iYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lci5vbkVycm9yKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QmFubmVyXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwic2hvd0Jhbm5lckVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFubmVyLm9uUmVzaXplKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG4uc2RrLmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIud2luZG93SGVpZ2h0IC0gZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IChyLndpbmRvd1dpZHRoIC0gZS53aWR0aCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHQudG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuLl9iYW5uZXIuc3R5bGUudG9wID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uX2Jhbm5lci5zdHlsZS5sZWZ0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVCYW5uZXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodGhpcy5fYmFubmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpZGVCYW5uZXIoKSBrZWVwQWxpdmU6XCIsIHQpO1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXIuZGVzdHJveSgpLCAodGhpcy5fYmFubmVyID0gbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dJbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc2RrLmNyZWF0ZUludGVyc3RpdGlhbEFkICYmIHRoaXMuX2NvbmZpZy5pbnNlcnRJRCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luc2VydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luc2VydC5sb2FkKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuX2luc2VydFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93SW5zZXJ0XCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luc2VydCB8fFxuICAgICAgICAgICAgICAgICAgICAoKHRoaXMuX2luc2VydCA9IHRoaXMuc2RrLmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLl9jb25maWcuaW5zZXJ0SURcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQub25Mb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Ll9pbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93SW5zZXJ0XCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc2VydC5vbkNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Ll9pbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9pbnNlcnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2luc2VydCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQub25FcnJvcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtXZUNoYXRQbGF0Zm9ybV0gc2hvd0luc2VydFwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlICYmIDEwMDMgPT0gZS5lcnJDb2RlICYmIHQuX2luc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2luc2VydC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5faW5zZXJ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93QmxvY2tBZHMgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2RrLmNyZWF0ZUN1c3RvbUFkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYmxvY2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYvuekulwiKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2sgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICh0aGlzLl9ibG9jayA9IHRoaXMuc2RrLmNyZWF0ZUN1c3RvbUFkKHtcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IHQuaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHQudG9wXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOiA2MFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2sub25FcnJvcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtXZUNoYXRQbGF0Zm9ybV0gc2hvd0Jsb2NrQWRzXCIsIEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrLm9uTG9hZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QmxvY2tBZHMgb25Mb2FkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2sub25DbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5fYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9ibG9jay5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5fYmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmhpZGVDYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmhpZGVDYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93QmxvY2tBZHMyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNkay5jcmVhdGVDdXN0b21BZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2NrMikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pi+56S6XCIpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9jazIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAodGhpcy5fYmxvY2syID0gdGhpcy5zZGsuY3JlYXRlQ3VzdG9tQWQoe1xuICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHQubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdC50b3BcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6IDYwXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9jazIub25FcnJvcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtXZUNoYXRQbGF0Zm9ybV0gc2hvd0Jsb2NrQWRzXCIsIEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrMi5vbkxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtXZUNoYXRQbGF0Zm9ybV0gc2hvd0Jsb2NrQWRzIG9uTG9hZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrMi5vbkNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLl9ibG9jazIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9ibG9jazIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2Jsb2NrMiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaGlkZUNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaGlkZUNiKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2syXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlQmxvY2tBZHMyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYmxvY2syKSB7XG4gICAgICAgICAgICB0aGlzLl9ibG9jazIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fYmxvY2syID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0Jsb2NrQWRzMyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYmxvY2szKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYvuekulwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrMyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrM1xuICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ibG9jazMgPSB0aGlzLnNkay5jcmVhdGVDdXN0b21BZCh7XG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6IHQuaWQsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHQudG9wXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZEludGVydmFsczogNjBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fYmxvY2szLm9uRXJyb3IoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QmxvY2tBZHNcIiwgSlNPTi5zdHJpbmdpZnkodCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9ibG9jazMub25Mb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QmxvY2tBZHMgb25Mb2FkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9ibG9jazMub25DbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4uX2Jsb2NrMykge1xuICAgICAgICAgICAgICAgICAgICBuLl9ibG9jazMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBuLl9ibG9jazMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodC5oaWRlQ2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuaGlkZUNiKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrM1xuICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlQmxvY2tBZHMzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYmxvY2szKSB7XG4gICAgICAgICAgICB0aGlzLl9ibG9jazMuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fYmxvY2szID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUJsb2NrQWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYmxvY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0FwcEJveEFkcyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZGsuY3JlYXRlQ3VzdG9tQWQgJiYgdGhpcy5fY29uZmlnLmJveElEKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXBwQm94KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwQm94ICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuX2FwcEJveCA9IHRoaXMuc2RrLmNyZWF0ZUN1c3RvbUFkKHtcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IHQuaWQgfHwgdGhpcy5fY29uZmlnLmJveElELFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogdC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0LnRvcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhZEludGVydmFsczogNjBcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcEJveC5vbkVycm9yKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QXBwQm94QWRzXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwQm94Lm9uTG9hZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QXBwQm94QWRzIG9uTG9hZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcEJveC5vbkNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLl9hcHBCb3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9hcHBCb3guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2FwcEJveCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaGlkZUNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaGlkZUNiKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXBwQm94XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlQXBwQm94QWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYXBwQm94KSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBCb3guZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fYXBwQm94ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2RrLnNoYXJlQXBwTWVzc2FnZSh0aGlzLmdldFNoYXJlRGF0YSgpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFNoYXJlRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAkYm1zTWFuYWdlci5CTVMuZ2V0U2hhcmVMaXN0KCk7XG4gICAgICAgIHZhciBlID0ge307XG4gICAgICAgIGlmICh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBuID0gdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0Lmxlbmd0aCldO1xuICAgICAgICAgICAgZS50aXRsZSA9IG4udGl0bGU7XG4gICAgICAgICAgICBlLmltYWdlVXJsID0gbi5pbWFnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dDdXN0b21BZDEgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBuID0gKHQud2lkdGgsIHQuaGVpZ2h0LCB0LngsIHQueSwgY2Mud2luU2l6ZS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQsIHdpbmRvdy53eC5nZXRTeXN0ZW1JbmZvU3luYygpKTtcbiAgICAgICAgdmFyIHIgPSAobi5zY3JlZW5XaWR0aCwgbi5zY3JlZW5IZWlnaHQsIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLndpZHRoLCBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5oZWlnaHQpO1xuICAgICAgICB2YXIgbyA9IG4uc2NyZWVuSGVpZ2h0IC8gcjtcbiAgICAgICAgdmFyIGkgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICB2YXIgYSA9IChpLnggLSB0LndpZHRoICogdC5hbmNob3JYKSAqIG87XG4gICAgICAgIHZhciBzID0gKHIgLSBpLnkgLSB0LmhlaWdodCAqICgxIC0gdC5hbmNob3JZKSkgKiBvO1xuICAgICAgICBpZiAodGhpcy5fZ3JpZEFkMSkge1xuICAgICAgICAgICAgdGhpcy5fZ3JpZEFkMVxuICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7fSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ3JpZEFkMSA9IHdpbmRvdy53eC5jcmVhdGVDdXN0b21BZCh7XG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6IFwiYWR1bml0LTEzNTkwM2FiOTA2Nzg5ZjJcIixcbiAgICAgICAgICAgICAgICBhZEludGVydmFsczogMzAsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQWQxLm9uRXJyb3IoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QmxvY2tBZHNcIiwgdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRBZDEub25Mb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1dlQ2hhdFBsYXRmb3JtXSBzaG93QmxvY2tBZHMgb25Mb2FkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQWQxLm9uQ2xvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChlLl9ncmlkQWQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuX2dyaWRBZDEuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBlLl9ncmlkQWQxID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRBZDFcbiAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge30pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0N1c3RvbUFkMiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdmFyIG4gPSAodC53aWR0aCwgdC5oZWlnaHQsIHQueCwgdC55LCBjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCwgd2luZG93Lnd4LmdldFN5c3RlbUluZm9TeW5jKCkpO1xuICAgICAgICB2YXIgciA9IChuLnNjcmVlbldpZHRoLCBuLnNjcmVlbkhlaWdodCwgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUud2lkdGgsIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmhlaWdodCk7XG4gICAgICAgIHZhciBvID0gbi5zY3JlZW5IZWlnaHQgLyByO1xuICAgICAgICB2YXIgaSA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIHZhciBhID0gKGkueCAtIHQud2lkdGggKiB0LmFuY2hvclgpICogbztcbiAgICAgICAgdmFyIHMgPSAociAtIGkueSAtIHQuaGVpZ2h0ICogKDEgLSB0LmFuY2hvclkpKSAqIG87XG4gICAgICAgIGlmICh0aGlzLl9ncmlkQWQyKSB7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQWQyXG4gICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHt9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQWQyID0gd2luZG93Lnd4LmNyZWF0ZUN1c3RvbUFkKHtcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogXCJhZHVuaXQtMTM1OTAzYWI5MDY3ODlmMlwiLFxuICAgICAgICAgICAgICAgIGFkSW50ZXJ2YWxzOiAzMCxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRBZDIub25FcnJvcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbV2VDaGF0UGxhdGZvcm1dIHNob3dCbG9ja0Fkc1wiLCB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fZ3JpZEFkMi5vbkxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbV2VDaGF0UGxhdGZvcm1dIHNob3dCbG9ja0FkcyBvbkxvYWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRBZDIub25DbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuX2dyaWRBZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5fZ3JpZEFkMi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuX2dyaWRBZDIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fZ3JpZEFkMlxuICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7fSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlQ3VzdG9tQWQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fZ3JpZEFkMSkge1xuICAgICAgICAgICAgdGhpcy5fZ3JpZEFkMS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9ncmlkQWQxID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUN1c3RvbUFkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2dyaWRBZDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRBZDIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fZ3JpZEFkMiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBlO1xufSkoJGJhc2VQbGF0Zm9ybS5CYXNlUGxhdGZvcm0pO1xuZXhwb3J0cy5XWCA9IGg7XG4iXX0=