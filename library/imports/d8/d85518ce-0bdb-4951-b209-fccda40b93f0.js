"use strict";
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