
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TT.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b32fekWcWlOpod1TZygzpDy', 'TT');
// scripts/TT.js

"use strict";

var r;
exports.TT = void 0;

var $encrypt = require("./Encrypt");

var $basePlatform = require("./BasePlatform");

var $eventConst = require("./EventConst");

var $userConst = require("./UserConst");

var $audioManager = require("./AudioManager");

var $eventManager = require("./EventManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $ttPostbackCtl = require("./ttPostbackCtl");

var $utils = require("./Utils");

var m = function (t) {
  function e() {
    var e = t.call(this) || this;
    e.sdk = window.tt;
    e._rewardAds = null;
    e._rewardAdsCb = null;
    e._rewardHasShow = !1;
    e._rewardHasLoad = !1;
    e._banner = null;
    e._insert = null;
    e._recorder = null;
    e._recordStatus = -1;
    e._recordPath = null;
    e._inScene = null;
    e.networkType = null;
    e.ta = null;
    e.openid = null;
    e._authorization = null;
    e._isLog = !0;
    e.init = !1;
    e.bgm = null;
    e.rewardAdsID = ["4kgicn0c138h50fe0b", "32ehgd89milcgfen2t"];
    e.rewardAdsIDIndex = 0;
    e.actionRecord = null;
    e.recordingSecond = 0;
    console.log("头条");
    var n = window.tt.getLaunchOptionsSync();

    if (["Douyin", "douyin_lite"].some(function (t) {
      return t == window.tt.getSystemInfoSync().appName;
    })) {
      var r = window.tt.getLaunchOptionsSync();

      if (r.query && r.query.card_id && [436, 556].includes(r.query.card_id)) {
        window.TTRecommendGameCard = !0;
      }

      if (r.query && r.query.card_id && [645].includes(r.query.card_id)) {
        window.TTRecommendGameCard2 = !0;
      }
    }

    if (n.scene) {
      e._inScene = n.scene;
      console.log("## 进入场景值：", e._inScene);

      if (("021001" == e._inScene || "101001" == e._inScene || "021036" == e._inScene || "homepage" == (null == n ? void 0 : n.launch_from) || "sidebar_card" == (null == n ? void 0 : n.location)) && 0 == ($userManager.User.get($userConst.UserData.EnterSidebar) || 0)) {
        cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
          state: "complete"
        });
        $userManager.User.set($userConst.UserData.EnterSidebar, 1);
        $eventManager.Event.emit($eventConst["default"].EnterSidebar);
      }

      if ("025001" != e._inScene && "105001" != e._inScene) {//
      } else {
        $userManager.User.setTempData("isZt", 1);
      }
    }

    window.tt.onShow(function (t) {
      console.log("启动参数如下：", t.query);

      if (n.scene) {
        console.log("## 2 进入场景值：", n.scene);

        if (("021001" == n.scene || "101001" == n.scene || "021036" == n.scene || "homepage" == (null == n ? void 0 : n.launch_from) || "sidebar_card" == (null == n ? void 0 : n.location)) && 0 == ($userManager.User.get($userConst.UserData.EnterSidebar) || 0)) {
          cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
            state: "complete"
          });
          $userManager.User.set($userConst.UserData.EnterSidebar, 1);
          $eventManager.Event.emit($eventConst["default"].EnterSidebar);
        }
      }
    });

    if (["Douyin", "douyin_lite", "live_stream", "aweme_hotsoon"].some(function (t) {
      return t == window.tt.getSystemInfoSync().appName;
    })) {
      window.isDouyin = !0;
    }

    e.getNetworkType(function (t) {
      e.networkType = t.networkType;
    });
    e.sdk.onNetworkStatusChange(function (t) {
      console.log(t.networkType);
      console.log(t.isConnected);
      var n = e.networkType;
      console.log("网络状态变化");

      if ("none" == n && "none" != t.networkType) {
        console.log("无网变成有网");
        cc.game.emit("noneChangeHas");
      }

      e.networkType = t.networkType;
    });
    return e;
  }

  __extends(e, t);

  e.prototype.setConfig = function (t) {
    this._config = t;
    this.initThinking();
    this.initTTPostbackCtl();
  };

  e.prototype.initTTPostbackCtl = function () {
    $ttPostbackCtl["default"].GetInstance().init(this._config.flag, this._config.version);
  };

  e.prototype.initThinking = function () {
    var t = {
      appId: this._config.thinkingID,
      serverUrl: "https://ta-data.zuiqiangyingyu.net",
      autoTrack: {
        appShow: !0,
        appHide: !0
      }
    };
    this.ta = new ThinkingAnalyticsAPI(t);
    this.ta.login("TA");
  };

  e.prototype.showRankList = function () {
    if (window.game_loginDone) {
      tt.getImRankList({
        relationType: "default",
        dataType: 0,
        rankType: "month",
        suffix: "关",
        rankTitle: "通关排行榜",
        zoneId: "default",
        success: function success(t) {
          console.log("## getImRankData success res: ", JSON.stringify(t));
        },
        fail: function fail(t) {
          console.log("## getImRankData fail res: ", JSON.stringify(t));
        }
      });
    }
  };

  e.prototype.sendRankData = function () {
    tt.setImRankData({
      dataType: 0,
      relationType: "default",
      value: ($userManager.User.get("record") || 0).toString(),
      priority: 0,
      extra: "extra",
      zoneId: "default",
      success: function success(t) {
        console.log("## setImRankData success res: ", JSON.stringify(t));
      },
      fail: function fail(t) {
        console.log("## setImRankData fail res: ", JSON.stringify(t));
      }
    });
  };

  e.prototype.taInit = function (t) {
    this.ta.login(t);
    this.ta.init();
  };

  e.prototype.vibrate = function (t) {
    if (void 0 === t) {
      t = 30;
    }

    tt.vibrateShort({
      success: function success(t) {
        console.log("" + t);
      },
      fail: function fail() {
        console.log("vibrateShort调用失败");
      }
    });
  };

  e.prototype.login1 = function () {
    console.log("[ToutiaoLoginCtrler][login]");
    tt.login({
      force: !1,
      success: function success(t) {
        console.log("login调用成功" + t.code + " " + t.anonymousCode);
      },
      fail: function fail() {
        console.log("login调用失败");
      }
    });
  };

  e.prototype.post2 = function (t) {
    return new Promise(function (e) {
      console.log("请求");
      var n = cc.loader.getXMLHttpRequest();
      n.timeout = 5e3;
      var r = t;
      var o = "?";

      for (var i in r) {
        var a = i + "=" + r[i];

        if ("" == o) {
          o += a;
        } else {
          o += "&" + a;
        }
      }

      console.log("请求11");
      n.open("POST", "https://game.zuiqiangyingyu.net/common/tt/session/sign_in" + o, !0);
      n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

      n.onreadystatechange = function () {
        if (4 === n.readyState && 200 == n.status) {
          var t = n.responseText;
          console.log("响应参数");
          console.log(t);
          e(JSON.parse(t));
        } else {
          console.log("xhr.readyState", n.readyState);
        }
      };
    });
  };

  e.prototype.post = function (t, e, n, r, o) {
    var i = cc.loader.getXMLHttpRequest();
    var a = this;

    i.onreadystatechange = function () {
      if (4 === i.readyState) {
        if (i.status >= 200 && i.status <= 400) {
          a._isLog && cc.log("[Http][Post][请求成功] status : " + i.status + ", url : " + t);
          n && n(i.responseText, o);
        } else {
          if (502 == i.status && (!o || o.reSendTimes < 3)) {
            (o = o || {
              reSendTimes: 0
            }).reSendTimes++;
            console.warn("[Http][Post][502] reSendTimes : " + o.reSendTimes + ", url : " + t);
            return void a.post(t, e, n, r, o);
          }

          if (a._isLog) {
            cc.log("[Http][Post][请求失败] status : " + i.status);
          }

          if (r) {
            r(o);
          }
        }
      }
    };

    console.log("[Http][Post][发起请求] url : " + t);
    var s;
    var c = !o || 0 != o.async;
    i.open("POST", t, c);

    if (this._authorization) {
      i.setRequestHeader("authorization", this._authorization);
    }

    if (cc.sys.isNative) {
      i.setRequestHeader("Accept-Encoding", "gzip,deflate");
    }

    i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    i.ontimeout = function () {
      if (a._isLog) {
        console.warn("[Http][Post][请求超时] [event] : ");
      }

      if (a._isLog) {
        console.warn(t);
      }

      if (a._isLog) {
        console.warn(arguments);
      }

      if (r) {
        r(arguments);
      }
    };

    i.onerror = function () {
      if (a._isLog) {
        console.error("[Http][Post][请求异常] [event] : ");
      }

      if (a._isLog) {
        console.error(t);
      }

      if (a._isLog) {
        console.error(arguments);
      }

      if (r) {
        r(arguments);
      }
    };

    if (c) {
      i.timeout = 5e3;
    }

    if (o && 1 == o.isBodyTypeRequest) {
      s = JSON.stringify(e);
    } else {
      s = a._EncodeFormData(e);
    }

    i.send(s);
  };

  e.prototype._EncodeFormData = function (t) {
    var e = [];
    var n = /%20/g;

    for (var r in t) {
      var o = t[r];
      var i = encodeURIComponent(r).replace(n, "+") + "=" + encodeURIComponent(o).replace(n, "+");
      e.push(i);
    }

    return e.join("&");
  };

  e.prototype.report = function (t, e) {
    var n = window.ad_id;

    if (n && n.length < 19) {
      this.ta.setSuperProperties({
        version: this._config.version,
        video_id: window.video_id || "",
        projectid: window.projectid || "",
        promotionid: window.promotionid || "",
        mid1: window.mid1 || "",
        mid2: window.mid2 || "",
        mid3: window.mid3 || "",
        mid4: window.mid4 || "",
        mid5: window.mid5 || "",
        mid6: window.mid6 || ""
      });
    } else {
      this.ta.setSuperProperties({
        version: this._config.version,
        ad_id: window.ad_id,
        video_id: window.video_id || "",
        projectid: window.projectid || "",
        promotionid: window.promotionid || "",
        mid1: window.mid1 || "",
        mid2: window.mid2 || "",
        mid3: window.mid3 || "",
        mid4: window.mid4 || "",
        mid5: window.mid5 || "",
        mid6: window.mid6 || ""
      });
    }

    this.ta.track(t, JSON.parse(e));

    if (window.openid && !this.init) {
      this.init = !0;

      if (window.ad_id.length < 19) {
        this.ta.userSet({
          openid: window.openid
        });
      } else {
        this.ta.userSet({
          openid: window.openid,
          ad_id: window.ad_id
        });
      }

      console.log("测试", window.openid);
    }
  };

  e.prototype.getInstance = function () {
    return this.sdk;
  };

  e.prototype.showRewardAds = function (t) {
    var e = this;

    if (this.sdk.createRewardedVideoAd) {
      if (this._config.rewardID) {
        return this._rewardAdsCb = t, this._rewardHasShow = !1, this.bgm = $audioManager.Audio.currentBgm, $audioManager.Audio.stopMusic(), $eventManager.Event.emit($eventConst["default"].StopTimer), game.dragonMoving = !1, this._rewardAds || (this._rewardAds = this.sdk.createRewardedVideoAd({
          adUnitId: this._config.rewardID
        }), $ttPostbackCtl["default"].GetInstance().adRequest("激励视频"), this._rewardAds.onLoad(function () {
          e._rewardHasLoad = !0;
          $ttPostbackCtl["default"].GetInstance().adFill("激励视频");

          if (e._rewardHasShow) {//
          } else {
            e._rewardHasShow = !0;
            $ttPostbackCtl["default"].GetInstance().adClick("激励视频");

            e._rewardAds.show().then(function () {
              $ttPostbackCtl["default"].GetInstance().adImpression("激励视频");
            });

            e.playVideoShow();
          }
        }), this._rewardAds.onClose(function (t) {
          e._rewardHasLoad = !1;

          if (t.isEnded) {
            $ttPostbackCtl["default"].GetInstance().adImpressionDone("激励视频");
          }

          e._rewardAdsCb(t.isEnded ? 0 : 1);

          e.playVideoEnd();
          $audioManager.Audio.playMusic(e.bgm);
          $eventManager.Event.emit($eventConst["default"].restoreTime);
          game.dragonMoving = !0;

          if (t.isEnded) {
            window.lastVideoAdTime = new Date().getTime() / 1e3;
          }
        }), this._rewardAds.onError(function (t) {
          e._rewardHasLoad = !1;
          console.log("[platform] [ZJTDPlatform] showRewardAds", t);

          e._rewardAdsCb(-1);

          $tipManager.Tip.show("广告加载中，请稍后。");

          e._rewardAds.destroy();

          e._rewardAds = null;

          if (e.rewardAdsIDIndex) {
            e.rewardAdsIDIndex = 0;
          } else {
            e.rewardAdsIDIndex = 1;
          }

          $audioManager.Audio.playMusic(e.bgm);
          $eventManager.Event.emit($eventConst["default"].restoreTime);
          game.dragonMoving = !0;
        })), void (this._rewardHasLoad && !this._rewardHasShow ? (this._rewardHasShow = !0, $ttPostbackCtl["default"].GetInstance().adClick("激励视频"), this._rewardAds.show().then(function () {
          $ttPostbackCtl["default"].GetInstance().adImpression("激励视频");
        })) : ($ttPostbackCtl["default"].GetInstance().adRequest("激励视频"), this._rewardAds.load()));
      } else {
        return t(-3);
      }
    } else {
      return t(-2);
    }
  };

  e.prototype.showBanner = function (t, e) {
    var n = this;

    if (void 0 === t) {
      t = {
        id: ""
      };
    }

    if (this._banner) {//
    } else {
      this._banner = this.sdk.createBannerAd({
        adUnitId: t.id || this._config.bannerID,
        style: {
          left: 9999,
          top: 9999
        },
        adIntervals: 60
      });

      this._banner.onLoad(function () {
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
      });

      this._banner.onError(function (t) {
        console.log("[platform] [ZJTDPlatform] showBanner", t);
      });

      this._banner.onResize(function (t) {
        var e = n.sdk.getSystemInfoSync();
        n._banner.style.top = e.windowHeight - t.height;
        n._banner.style.left = (e.windowWidth - t.width) / 2;
      });
    }
  };

  e.prototype.hideBanner = function () {
    if (this._banner) {
      this._banner.destroy();

      this._banner = null;
    }
  };

  e.prototype.showInsert = function () {
    var t = this;

    if (this.sdk.createInterstitialAd && this._config.insertID) {
      if (this._insert) {
        this._insert.load().then(function () {
          t._insert.show().then(function () {})["catch"](function (t) {
            console.log("## tt showInsert1 err:", t);
          });
        });
      } else {
        this._insert || (this._insert = this.sdk.createInterstitialAd({
          adUnitId: this._config.insertID
        }), this._insert.onLoad(function () {
          if (t._insert) {
            t._insert.offLoad();

            t._insert.show().then(function () {
              t.playInsertAdShow();
            })["catch"](function (t) {
              console.log("## tt showInsert2 err:", t);
            });
          }
        }), this._insert.onClose(function () {
          if (t._insert) {
            t._insert.offClose();

            t._insert.destroy();

            t._insert = null;
            t.playInsertAdEnd();
            window.lastInsertAdTime = new Date().getTime() / 1e3;
          }
        }), this._insert.onError(function (e) {
          console.log("## tt showInsert3", e);

          if (e && 1003 == e.errCode && t._insert) {
            t._insert.destroy();

            t._insert = null;
          }

          window.lastInsertAdTime = new Date().getTime() / 1e3;
        }));
      }
    }
  };

  e.prototype.destroyInsert = function () {
    if (this._insert) {
      this._insert.destroy();

      this._insert = null;
    }
  };

  e.prototype.share = function (t) {
    var e = $utils.Utils.randomNum(0, 2);
    this.sdk.shareAppMessage({
      templateId: ["5aq5j6olagof08j32d", "35cfwvbcl5sclmmfao", "1e7ccm02h0amf9b13a"][e],
      query: "",
      success: function success() {
        console.log("分享成功");
        t(0);
      },
      fail: function fail() {
        console.log("分享失败");
      }
    });
  };

  e.prototype.shareRecordCap = function (t) {
    var e = this;

    if (this._recorder) {
      if (this._recordPath) {
        return void this.sdk.shareAppMessage({
          channel: "video",
          extra: {
            videoPath: this._recordPath
          },
          success: function success() {
            console.log("分享视频成功");
            e._recordStatus = 1;
            t(0);
          },
          fail: function fail(e) {
            console.log("分享视频失败", e);

            if (e && -1 != e.errMsg.indexOf("short")) {
              t(-1);
            } else {
              t(1);
            }
          }
        });
      } else {
        return t(-3);
      }
    } else {
      return t(-2);
    }
  };

  e.prototype.startRecordCap = function (t) {
    var e = this;

    if (void 0 === t) {
      t = 300;
    }

    if (this.sdk.getGameRecorderManager) {
      if (this._recorder) {//
      } else {
        console.log("开始录屏");
        this._recorder = this.sdk.getGameRecorderManager();

        this._recorder.onStart(function (t) {
          console.log("ttManager录屏开始：", t);
        });

        this._recorder.onStop(function (t) {
          e._recordPath = t.videoPath;
          console.log("录屏结束：", t);
        });

        this._recorder.onError(function (t) {
          e._recordStatus = -1;
          console.log("录屏错误的信息", JSON.stringify(t));
        });
      }

      this._recordPath = null;
      console.log("开始录屏");

      this._recorder.start({
        duration: t
      });

      this._recordStatus = 1;
      var n = this;

      if (null != this.actionRecord) {
        clearInterval(this.actionRecord);
      }

      this.recordingSecond = 0;
      this.actionRecord = setInterval(function () {
        e.recordingSecond++;

        if (e.recordingSecond >= 299) {
          n.stopRecordCap();
          e.actionRecord = null;
          clearInterval(e.actionRecord);
        }
      }, 1e3);
    }
  };

  e.prototype.pauseRecord = function () {
    if (this._recorder) {
      this._recorder.pause();
    }
  };

  e.prototype.resumeRecord = function () {
    if (this._recorder) {
      this._recorder.resume();
    }
  };

  e.prototype.stopRecordCap = function () {
    if (this._recorder && 1 == this._recordStatus) {
      console.log("结束录屏");

      this._recorder.stop();

      this._recordStatus = 0;
    }
  };

  e.prototype.getShareStatus = function () {
    return this._recordStatus;
  };

  e.prototype.request = function (t, e, n, r, o) {
    var a = this;
    return new Promise(function (s, c) {
      a.sdk.request({
        url: t,
        method: e,
        data: r ? {
          di: new $encrypt.Encrypt().encrypt(JSON.stringify(Object.assign(n, {
            seq: a.randomString(16)
          })))
        } : n,
        header: o,
        success: function success(t) {
          console.log(t);
          s(t);
        },
        fail: function fail(t) {
          console.log(t);
          c(t);
        }
      });
    });
  };

  e.prototype.darenLogin = function () {
    var t = this;
    this.launchOpt = this.sdk.getLaunchOptionsSync();
    console.log("[platform] [ZJTDPlatform] darenLogin launchOpt: ", this.launchOpt);
    this.query = this.launchOpt.query;
    console.log("[platform] [ZJTDPlatform] darenLogin query: ", this.query);
    this.drPid = this.query.dr_pid;
    console.log("[platform] [ZJTDPlatform] darenLogin drPid: ", this.drPid);
    this.preVideoId = this.query.pre_video_id;
    console.log("[platform] [ZJTDPlatform] darenLogin preVideoId: ", this.preVideoId);
    this.drType = this.query.dr_type;
    console.log("[platform] [ZJTDPlatform] darenLogin drType: ", this.drType);

    if (this.query && this.query.hasOwnProperty("dr_params")) {
      if (this.query.dr_params instanceof Object) {
        this.dr_params = this.query.dr_params;
      } else {
        this.dr_params = JSON.parse(this.query.dr_params);
      }
    }

    if (this.drPid && this.drType && "promote" == this.drType) {
      this.getPreVideoId(this.drPid);
    }

    if (this.query && this.drType && this.drPid && "promote" == this.drType) {
      this.silentLogin(!0).then(function (e) {
        if (t.query && t.drType && t.drPid && "promote" == t.drType) {
          t.sdk.getUserInfo({
            withCredentials: !0,
            success: function success(n) {
              console.log("[platform] [ZJTDPlatform] darenLogin userInfo", n);
              t.uploadUserInfo({
                code: e.code ? e.code : "",
                raw_data: n.rawData ? n.rawData : "",
                dr_pid: t.drPid,
                bms_flag: t._config.flag
              });
            }
          });
        }
      });
    } else {
      this.silentLogin(!1).then(function (e) {
        t.getOpenid({
          anonymous_code: e.anonymousCode ? e.anonymousCode : "",
          code: e.code ? e.code : "",
          flag: t._config.flag
        });
      });
    }
  };

  e.prototype.getPreVideoId = function (t) {
    var e = this;
    console.log("[platform] [ZJTDPlatform] getPreVideoId", t);
    this.request("https://addata-api.zuiqiangyingyu.net/game/Video/getPreVideoId?dr_pid=" + t, "GET").then(function (t) {
      console.log("[platform] [ZJTDPlatform] getPreVideoId success", t);
      e.preVideoId = t.data.data;
    })["catch"](function (t) {
      console.log("[platform] [ZJTDPlatform] getPreVideoId fail", t);
    });
  };

  e.prototype.uploadUserInfo = function (t) {
    var e = this;
    console.log("[platform] [ZJTDPlatform] uploadUserInfo success", t);
    this.request("https://addata-api.zuiqiangyingyu.net/game/user/auth", "POST", t, !1).then(function (t) {
      console.log("[platform] [ZJTDPlatform] uploadUserInfo success", t);
      e.promoteOpenId = t.data.data.open_id;
    })["catch"](function (t) {
      console.log("[platform] [ZJTDPlatform] uploadUserInfo fail", t);
    });
  };

  e.prototype.uploadVideoId = function (t) {
    this.request("https://addata-api.zuiqiangyingyu.net/game/Video/saveVideo", "POST", t, !1).then(function (t) {
      console.warn("[platform] [ZJTDPlatform] uploadVideoId success", t);
    })["catch"](function (t) {
      console.warn("[platform] [ZJTDPlatform] uploadVideoId fail", t);
    });
  };

  e.prototype.silentLogin = function (t) {
    var e = this;

    if (void 0 === t) {
      t = !1;
    }

    return new Promise(function (n, r) {
      e.sdk.login({
        force: t,
        success: function success(t) {
          console.log("[platform] [ZJTDPlatform] silentLogin success ", t);
          n(t);
          e.showShareMenu();
          e.onShareAppMessage();
        },
        fail: function fail(t) {
          console.log("[platform] [ZJTDPlatform] silentLogin fail ", t);
          r(null);
        }
      });
    });
  };

  e.prototype.getOpenid = function (t) {
    var e = this;
    console.log("[platform] [ZJTDPlatform] getOpenid", t);
    this.request("https://game.zuiqiangyingyu.net/common/tt/session/sign_in", "POST", t, !1, {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }).then(function (t) {
      console.log("[platform] [ZJTDPlatform] getOpenid success", t);
      e.userInfo = {
        anonymous_openid: t.data.data.anonymous_openid,
        openid: t.data.data.openid
      };
    })["catch"](function (t) {
      console.log("[platform] [ZJTDPlatform] getOpenid fail", t);
    });
  };

  e.prototype.showShareMenu = function () {
    this.sdk.showShareMenu({
      withShareTicket: !0
    });
  };

  e.prototype.onShareAppMessage = function () {
    var t = this;
    this.sdk.onShareAppMessage(function (e) {
      console.log("[platform] [ZJTDPlatform] onShareAppMessage", e);

      if (e && "video" == e.channel) {
        return {
          channel: "video",
          query: "promote" == t.drType ? "dr_pid=" + t.drPid + "&dr_type=share&pre_video_id=" + t.preVideoId + (t.dr_params ? "&dr_params=" + JSON.stringify(t.dr_params) : "") : "",
          extra: {
            withVideoId: !0
          },
          success: function success(e) {
            console.warn("[platform] [ZJTDPlatform] onShareAppMessage success", e, t.drType);

            if ("promote" == t.drType) {
              t.uploadVideoId({
                dr_pid: t.drPid,
                bms_flag: t._config.flag,
                video_id: e.videoId,
                pre_video_id: t.preVideoId,
                open_id: t.promoteOpenId ? t.promoteOpenId : ""
              });
              t.getPreVideoId(t.drPid);
            }
          },
          fail: function fail(t) {
            console.warn("[platform] [ZJTDPlatform] onShareAppMessage fail", t);
          }
        };
      }
    });
  };

  e.prototype.playVideoEnd = function () {
    var t;

    if ("share" == this.drType) {
      t = {
        dr_pid: this.drPid,
        pre_video_id: this.preVideoId,
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "daren",
        ad_type: 5,
        event_type: "adp"
      };
    } else {
      t = {
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "normal",
        ad_type: 5,
        event_type: "adp"
      };
    }

    console.log("[platform] [ZJTDPlatform] playVideoEnd", t);
  };

  e.prototype.playInsertAdEnd = function () {
    var t;

    if ("share" == this.drType) {
      t = {
        dr_pid: this.drPid,
        pre_video_id: this.preVideoId,
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "daren",
        ad_type: 6,
        event_type: "adp"
      };
    } else {
      t = {
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "normal",
        ad_type: 6,
        event_type: "adp"
      };
    }

    console.log("[platform] [ZJTDPlatform] playInsertAdEnd", t);
  };

  e.prototype.getNetworkType = function (t) {
    this.sdk.getNetworkType({
      success: function success(e) {
        console.log("" + e.networkType);
        t(e);
      },
      fail: function fail() {
        console.log("getNetworkType调用失败");
        t({
          networkType: "none"
        });
      }
    });
  };

  e.prototype.playVideoShow = function () {
    var t;

    if ("share" == this.drType) {
      t = {
        event_type: "eps",
        dr_pid: this.drPid,
        pre_video_id: this.preVideoId,
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "daren",
        ad_type: 5
      };
    } else {
      t = {
        event_type: "eps",
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "normal",
        ad_type: 5
      };
    }

    console.log("[platform] [ZJTDPlatform] playVideoShow", t);
  };

  e.prototype.playInsertAdShow = function () {
    var t;

    if ("share" == this.drType) {
      t = {
        event_type: "eps",
        dr_pid: this.drPid,
        pre_video_id: this.preVideoId,
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "daren",
        ad_type: 6
      };
    } else {
      t = {
        event_type: "eps",
        bms_flag: this._config.flag,
        user_info: this.userInfo,
        play_type: "normal",
        ad_type: 6
      };
    }

    console.log("[platform] [ZJTDPlatform] playInsertAdShow", t);
  };

  e.prototype.randomString = function (t) {
    t = t || 32;
    var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyzoOLl9gqVvUuI12345678";
    var n = e.length;
    var r = "";

    for (var o = 0; o < t; o++) {
      r += e.charAt(Math.floor(Math.random() * n));
    }

    return r;
  };

  e.prototype.follow = function (t) {
    console.log("[bytedance] 点击关注", this.sdk.openAwemeUserProfile);

    if (this.sdk.openAwemeUserProfile) {
      this.sdk.openAwemeUserProfile({
        success: function success(e) {
          console.log("---- open success, res: ", e);
          t(0);
        },
        fail: function fail(e) {
          console.log("---- open fail, err: ", e);
          t(-1);
        },
        complete: function complete(t) {
          console.log("---- open complete, res: ", t);
        }
      });
    }
  };

  return e;
}($basePlatform.BasePlatform);

exports.TT = m;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RULmpzIl0sIm5hbWVzIjpbInIiLCJleHBvcnRzIiwiVFQiLCIkZW5jcnlwdCIsInJlcXVpcmUiLCIkYmFzZVBsYXRmb3JtIiwiJGV2ZW50Q29uc3QiLCIkdXNlckNvbnN0IiwiJGF1ZGlvTWFuYWdlciIsIiRldmVudE1hbmFnZXIiLCIkdGlwTWFuYWdlciIsIiR1c2VyTWFuYWdlciIsIiR0dFBvc3RiYWNrQ3RsIiwiJHV0aWxzIiwibSIsInQiLCJlIiwiY2FsbCIsInNkayIsIndpbmRvdyIsInR0IiwiX3Jld2FyZEFkcyIsIl9yZXdhcmRBZHNDYiIsIl9yZXdhcmRIYXNTaG93IiwiX3Jld2FyZEhhc0xvYWQiLCJfYmFubmVyIiwiX2luc2VydCIsIl9yZWNvcmRlciIsIl9yZWNvcmRTdGF0dXMiLCJfcmVjb3JkUGF0aCIsIl9pblNjZW5lIiwibmV0d29ya1R5cGUiLCJ0YSIsIm9wZW5pZCIsIl9hdXRob3JpemF0aW9uIiwiX2lzTG9nIiwiaW5pdCIsImJnbSIsInJld2FyZEFkc0lEIiwicmV3YXJkQWRzSURJbmRleCIsImFjdGlvblJlY29yZCIsInJlY29yZGluZ1NlY29uZCIsImNvbnNvbGUiLCJsb2ciLCJuIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJzb21lIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJhcHBOYW1lIiwicXVlcnkiLCJjYXJkX2lkIiwiaW5jbHVkZXMiLCJUVFJlY29tbWVuZEdhbWVDYXJkIiwiVFRSZWNvbW1lbmRHYW1lQ2FyZDIiLCJzY2VuZSIsImxhdW5jaF9mcm9tIiwibG9jYXRpb24iLCJVc2VyIiwiZ2V0IiwiVXNlckRhdGEiLCJFbnRlclNpZGViYXIiLCJjYyIsImdhbWUiLCJlbWl0Iiwic3RhdGUiLCJzZXQiLCJFdmVudCIsInNldFRlbXBEYXRhIiwib25TaG93IiwiaXNEb3V5aW4iLCJnZXROZXR3b3JrVHlwZSIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwic2V0Q29uZmlnIiwiX2NvbmZpZyIsImluaXRUaGlua2luZyIsImluaXRUVFBvc3RiYWNrQ3RsIiwiR2V0SW5zdGFuY2UiLCJmbGFnIiwidmVyc2lvbiIsImFwcElkIiwidGhpbmtpbmdJRCIsInNlcnZlclVybCIsImF1dG9UcmFjayIsImFwcFNob3ciLCJhcHBIaWRlIiwiVGhpbmtpbmdBbmFseXRpY3NBUEkiLCJsb2dpbiIsInNob3dSYW5rTGlzdCIsImdhbWVfbG9naW5Eb25lIiwiZ2V0SW1SYW5rTGlzdCIsInJlbGF0aW9uVHlwZSIsImRhdGFUeXBlIiwicmFua1R5cGUiLCJzdWZmaXgiLCJyYW5rVGl0bGUiLCJ6b25lSWQiLCJzdWNjZXNzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZhaWwiLCJzZW5kUmFua0RhdGEiLCJzZXRJbVJhbmtEYXRhIiwidmFsdWUiLCJ0b1N0cmluZyIsInByaW9yaXR5IiwiZXh0cmEiLCJ0YUluaXQiLCJ2aWJyYXRlIiwidmlicmF0ZVNob3J0IiwibG9naW4xIiwiZm9yY2UiLCJjb2RlIiwiYW5vbnltb3VzQ29kZSIsInBvc3QyIiwiUHJvbWlzZSIsImxvYWRlciIsImdldFhNTEh0dHBSZXF1ZXN0IiwidGltZW91dCIsIm8iLCJpIiwiYSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInBhcnNlIiwicG9zdCIsInJlU2VuZFRpbWVzIiwid2FybiIsInMiLCJjIiwiYXN5bmMiLCJzeXMiLCJpc05hdGl2ZSIsIm9udGltZW91dCIsImFyZ3VtZW50cyIsIm9uZXJyb3IiLCJlcnJvciIsImlzQm9keVR5cGVSZXF1ZXN0IiwiX0VuY29kZUZvcm1EYXRhIiwic2VuZCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJwdXNoIiwiam9pbiIsInJlcG9ydCIsImFkX2lkIiwibGVuZ3RoIiwic2V0U3VwZXJQcm9wZXJ0aWVzIiwidmlkZW9faWQiLCJwcm9qZWN0aWQiLCJwcm9tb3Rpb25pZCIsIm1pZDEiLCJtaWQyIiwibWlkMyIsIm1pZDQiLCJtaWQ1IiwibWlkNiIsInRyYWNrIiwidXNlclNldCIsImdldEluc3RhbmNlIiwic2hvd1Jld2FyZEFkcyIsImNyZWF0ZVJld2FyZGVkVmlkZW9BZCIsInJld2FyZElEIiwiQXVkaW8iLCJjdXJyZW50QmdtIiwic3RvcE11c2ljIiwiU3RvcFRpbWVyIiwiZHJhZ29uTW92aW5nIiwiYWRVbml0SWQiLCJhZFJlcXVlc3QiLCJvbkxvYWQiLCJhZEZpbGwiLCJhZENsaWNrIiwic2hvdyIsInRoZW4iLCJhZEltcHJlc3Npb24iLCJwbGF5VmlkZW9TaG93Iiwib25DbG9zZSIsImlzRW5kZWQiLCJhZEltcHJlc3Npb25Eb25lIiwicGxheVZpZGVvRW5kIiwicGxheU11c2ljIiwicmVzdG9yZVRpbWUiLCJsYXN0VmlkZW9BZFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm9uRXJyb3IiLCJUaXAiLCJkZXN0cm95IiwibG9hZCIsInNob3dCYW5uZXIiLCJpZCIsImNyZWF0ZUJhbm5lckFkIiwiYmFubmVySUQiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJhZEludGVydmFscyIsIm9uUmVzaXplIiwid2luZG93SGVpZ2h0IiwiaGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3aWR0aCIsImhpZGVCYW5uZXIiLCJzaG93SW5zZXJ0IiwiY3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJpbnNlcnRJRCIsIm9mZkxvYWQiLCJwbGF5SW5zZXJ0QWRTaG93Iiwib2ZmQ2xvc2UiLCJwbGF5SW5zZXJ0QWRFbmQiLCJsYXN0SW5zZXJ0QWRUaW1lIiwiZXJyQ29kZSIsImRlc3Ryb3lJbnNlcnQiLCJzaGFyZSIsIlV0aWxzIiwicmFuZG9tTnVtIiwic2hhcmVBcHBNZXNzYWdlIiwidGVtcGxhdGVJZCIsInNoYXJlUmVjb3JkQ2FwIiwiY2hhbm5lbCIsInZpZGVvUGF0aCIsImVyck1zZyIsImluZGV4T2YiLCJzdGFydFJlY29yZENhcCIsImdldEdhbWVSZWNvcmRlck1hbmFnZXIiLCJvblN0YXJ0Iiwib25TdG9wIiwic3RhcnQiLCJkdXJhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0b3BSZWNvcmRDYXAiLCJwYXVzZVJlY29yZCIsInBhdXNlIiwicmVzdW1lUmVjb3JkIiwicmVzdW1lIiwic3RvcCIsImdldFNoYXJlU3RhdHVzIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJkaSIsIkVuY3J5cHQiLCJlbmNyeXB0IiwiT2JqZWN0IiwiYXNzaWduIiwic2VxIiwicmFuZG9tU3RyaW5nIiwiaGVhZGVyIiwiZGFyZW5Mb2dpbiIsImxhdW5jaE9wdCIsImRyUGlkIiwiZHJfcGlkIiwicHJlVmlkZW9JZCIsInByZV92aWRlb19pZCIsImRyVHlwZSIsImRyX3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImRyX3BhcmFtcyIsImdldFByZVZpZGVvSWQiLCJzaWxlbnRMb2dpbiIsImdldFVzZXJJbmZvIiwid2l0aENyZWRlbnRpYWxzIiwidXBsb2FkVXNlckluZm8iLCJyYXdfZGF0YSIsInJhd0RhdGEiLCJibXNfZmxhZyIsImdldE9wZW5pZCIsImFub255bW91c19jb2RlIiwicHJvbW90ZU9wZW5JZCIsIm9wZW5faWQiLCJ1cGxvYWRWaWRlb0lkIiwic2hvd1NoYXJlTWVudSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidXNlckluZm8iLCJhbm9ueW1vdXNfb3BlbmlkIiwid2l0aFNoYXJlVGlja2V0Iiwid2l0aFZpZGVvSWQiLCJ2aWRlb0lkIiwidXNlcl9pbmZvIiwicGxheV90eXBlIiwiYWRfdHlwZSIsImV2ZW50X3R5cGUiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmb2xsb3ciLCJvcGVuQXdlbWVVc2VyUHJvZmlsZSIsImNvbXBsZXRlIiwiQmFzZVBsYXRmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsT0FBTyxDQUFDQyxFQUFSLEdBQWEsS0FB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RixJQUFJLEVBQUUsY0FBVXRGLENBQVYsRUFBYTtVQUNmMEIsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUMzQixDQUFyQztVQUNBRCxDQUFDLENBQUMsQ0FBQyxDQUFGLENBQUQ7UUFDSCxDQVJ5QjtRQVMxQjBSLFFBQVEsRUFBRSxrQkFBVTFSLENBQVYsRUFBYTtVQUNuQjJCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDNUIsQ0FBekM7UUFDSDtNQVh5QixDQUE5QjtJQWFIO0VBQ0osQ0FqQkQ7O0VBa0JBLE9BQU9DLENBQVA7QUFDSCxDQTc4Qk8sQ0E2OEJMWCxhQUFhLENBQUNxUyxZQTc4QlQsQ0FBUjs7QUE4OEJBelMsT0FBTyxDQUFDQyxFQUFSLEdBQWFZLENBQWIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xuZXhwb3J0cy5UVCA9IHZvaWQgMDtcbnZhciAkZW5jcnlwdCA9IHJlcXVpcmUoXCIuL0VuY3J5cHRcIik7XG52YXIgJGJhc2VQbGF0Zm9ybSA9IHJlcXVpcmUoXCIuL0Jhc2VQbGF0Zm9ybVwiKTtcbnZhciAkZXZlbnRDb25zdCA9IHJlcXVpcmUoXCIuL0V2ZW50Q29uc3RcIik7XG52YXIgJHVzZXJDb25zdCA9IHJlcXVpcmUoXCIuL1VzZXJDb25zdFwiKTtcbnZhciAkYXVkaW9NYW5hZ2VyID0gcmVxdWlyZShcIi4vQXVkaW9NYW5hZ2VyXCIpO1xudmFyICRldmVudE1hbmFnZXIgPSByZXF1aXJlKFwiLi9FdmVudE1hbmFnZXJcIik7XG52YXIgJHRpcE1hbmFnZXIgPSByZXF1aXJlKFwiLi9UaXBNYW5hZ2VyXCIpO1xudmFyICR1c2VyTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VzZXJNYW5hZ2VyXCIpO1xudmFyICR0dFBvc3RiYWNrQ3RsID0gcmVxdWlyZShcIi4vdHRQb3N0YmFja0N0bFwiKTtcbnZhciAkdXRpbHMgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcbnZhciBtID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSB0LmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgZS5zZGsgPSB3aW5kb3cudHQ7XG4gICAgICAgIGUuX3Jld2FyZEFkcyA9IG51bGw7XG4gICAgICAgIGUuX3Jld2FyZEFkc0NiID0gbnVsbDtcbiAgICAgICAgZS5fcmV3YXJkSGFzU2hvdyA9ICExO1xuICAgICAgICBlLl9yZXdhcmRIYXNMb2FkID0gITE7XG4gICAgICAgIGUuX2Jhbm5lciA9IG51bGw7XG4gICAgICAgIGUuX2luc2VydCA9IG51bGw7XG4gICAgICAgIGUuX3JlY29yZGVyID0gbnVsbDtcbiAgICAgICAgZS5fcmVjb3JkU3RhdHVzID0gLTE7XG4gICAgICAgIGUuX3JlY29yZFBhdGggPSBudWxsO1xuICAgICAgICBlLl9pblNjZW5lID0gbnVsbDtcbiAgICAgICAgZS5uZXR3b3JrVHlwZSA9IG51bGw7XG4gICAgICAgIGUudGEgPSBudWxsO1xuICAgICAgICBlLm9wZW5pZCA9IG51bGw7XG4gICAgICAgIGUuX2F1dGhvcml6YXRpb24gPSBudWxsO1xuICAgICAgICBlLl9pc0xvZyA9ICEwO1xuICAgICAgICBlLmluaXQgPSAhMTtcbiAgICAgICAgZS5iZ20gPSBudWxsO1xuICAgICAgICBlLnJld2FyZEFkc0lEID0gW1wiNGtnaWNuMGMxMzhoNTBmZTBiXCIsIFwiMzJlaGdkODltaWxjZ2ZlbjJ0XCJdO1xuICAgICAgICBlLnJld2FyZEFkc0lESW5kZXggPSAwO1xuICAgICAgICBlLmFjdGlvblJlY29yZCA9IG51bGw7XG4gICAgICAgIGUucmVjb3JkaW5nU2Vjb25kID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coXCLlpLTmnaFcIik7XG4gICAgICAgIHZhciBuID0gd2luZG93LnR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIFtcIkRvdXlpblwiLCBcImRvdXlpbl9saXRlXCJdLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA9PSB3aW5kb3cudHQuZ2V0U3lzdGVtSW5mb1N5bmMoKS5hcHBOYW1lO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgciA9IHdpbmRvdy50dC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xuICAgICAgICAgICAgaWYgKHIucXVlcnkgJiYgci5xdWVyeS5jYXJkX2lkICYmIFs0MzYsIDU1Nl0uaW5jbHVkZXMoci5xdWVyeS5jYXJkX2lkKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5UVFJlY29tbWVuZEdhbWVDYXJkID0gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoci5xdWVyeSAmJiByLnF1ZXJ5LmNhcmRfaWQgJiYgWzY0NV0uaW5jbHVkZXMoci5xdWVyeS5jYXJkX2lkKSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5UVFJlY29tbWVuZEdhbWVDYXJkMiA9ICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuLnNjZW5lKSB7XG4gICAgICAgICAgICBlLl9pblNjZW5lID0gbi5zY2VuZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMg6L+b5YWl5Zy65pmv5YC877yaXCIsIGUuX2luU2NlbmUpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChcIjAyMTAwMVwiID09IGUuX2luU2NlbmUgfHxcbiAgICAgICAgICAgICAgICAgICAgXCIxMDEwMDFcIiA9PSBlLl9pblNjZW5lIHx8XG4gICAgICAgICAgICAgICAgICAgIFwiMDIxMDM2XCIgPT0gZS5faW5TY2VuZSB8fFxuICAgICAgICAgICAgICAgICAgICBcImhvbWVwYWdlXCIgPT0gKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4ubGF1bmNoX2Zyb20pIHx8XG4gICAgICAgICAgICAgICAgICAgIFwic2lkZWJhcl9jYXJkXCIgPT0gKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4ubG9jYXRpb24pKSAmJlxuICAgICAgICAgICAgICAgIDAgPT0gKCR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkVudGVyU2lkZWJhcikgfHwgMClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgXCJTaWRlYmFyX1Jld2FyZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5FbnRlclNpZGViYXIsIDEpO1xuICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LkVudGVyU2lkZWJhcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCIwMjUwMDFcIiAhPSBlLl9pblNjZW5lICYmIFwiMTA1MDAxXCIgIT0gZS5faW5TY2VuZSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiaXNadFwiLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cudHQub25TaG93KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWQr+WKqOWPguaVsOWmguS4i++8mlwiLCB0LnF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChuLnNjZW5lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyAyIOi/m+WFpeWcuuaZr+WAvO+8mlwiLCBuLnNjZW5lKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChcIjAyMTAwMVwiID09IG4uc2NlbmUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAxMDAxXCIgPT0gbi5zY2VuZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIwMjEwMzZcIiA9PSBuLnNjZW5lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhvbWVwYWdlXCIgPT0gKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4ubGF1bmNoX2Zyb20pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpZGViYXJfY2FyZFwiID09IChudWxsID09IG4gPyB2b2lkIDAgOiBuLmxvY2F0aW9uKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgMCA9PSAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuRW50ZXJTaWRlYmFyKSB8fCAwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsIFwiU2lkZWJhcl9SZXdhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwiY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuRW50ZXJTaWRlYmFyLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuRW50ZXJTaWRlYmFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBbXCJEb3V5aW5cIiwgXCJkb3V5aW5fbGl0ZVwiLCBcImxpdmVfc3RyZWFtXCIsIFwiYXdlbWVfaG90c29vblwiXS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPT0gd2luZG93LnR0LmdldFN5c3RlbUluZm9TeW5jKCkuYXBwTmFtZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkge1xuICAgICAgICAgICAgd2luZG93LmlzRG91eWluID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgZS5nZXROZXR3b3JrVHlwZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZS5uZXR3b3JrVHlwZSA9IHQubmV0d29ya1R5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICBlLnNkay5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHQubmV0d29ya1R5cGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codC5pc0Nvbm5lY3RlZCk7XG4gICAgICAgICAgICB2YXIgbiA9IGUubmV0d29ya1R5cGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIue9kee7nOeKtuaAgeWPmOWMllwiKTtcbiAgICAgICAgICAgIGlmIChcIm5vbmVcIiA9PSBuICYmIFwibm9uZVwiICE9IHQubmV0d29ya1R5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOe9keWPmOaIkOaciee9kVwiKTtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJub25lQ2hhbmdlSGFzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5uZXR3b3JrVHlwZSA9IHQubmV0d29ya1R5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLnNldENvbmZpZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHQ7XG4gICAgICAgIHRoaXMuaW5pdFRoaW5raW5nKCk7XG4gICAgICAgIHRoaXMuaW5pdFRUUG9zdGJhY2tDdGwoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRUVFBvc3RiYWNrQ3RsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkdHRQb3N0YmFja0N0bC5kZWZhdWx0LkdldEluc3RhbmNlKCkuaW5pdCh0aGlzLl9jb25maWcuZmxhZywgdGhpcy5fY29uZmlnLnZlcnNpb24pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFRoaW5raW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICAgIGFwcElkOiB0aGlzLl9jb25maWcudGhpbmtpbmdJRCxcbiAgICAgICAgICAgIHNlcnZlclVybDogXCJodHRwczovL3RhLWRhdGEuenVpcWlhbmd5aW5neXUubmV0XCIsXG4gICAgICAgICAgICBhdXRvVHJhY2s6IHtcbiAgICAgICAgICAgICAgICBhcHBTaG93OiAhMCxcbiAgICAgICAgICAgICAgICBhcHBIaWRlOiAhMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhID0gbmV3IFRoaW5raW5nQW5hbHl0aWNzQVBJKHQpO1xuICAgICAgICB0aGlzLnRhLmxvZ2luKFwiVEFcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93UmFua0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuZ2FtZV9sb2dpbkRvbmUpIHtcbiAgICAgICAgICAgIHR0LmdldEltUmFua0xpc3Qoe1xuICAgICAgICAgICAgICAgIHJlbGF0aW9uVHlwZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IDAsXG4gICAgICAgICAgICAgICAgcmFua1R5cGU6IFwibW9udGhcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwi5YWzXCIsXG4gICAgICAgICAgICAgICAgcmFua1RpdGxlOiBcIumAmuWFs+aOkuihjOamnFwiLFxuICAgICAgICAgICAgICAgIHpvbmVJZDogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyBnZXRJbVJhbmtEYXRhIHN1Y2Nlc3MgcmVzOiBcIiwgSlNPTi5zdHJpbmdpZnkodCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyBnZXRJbVJhbmtEYXRhIGZhaWwgcmVzOiBcIiwgSlNPTi5zdHJpbmdpZnkodCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZW5kUmFua0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHR0LnNldEltUmFua0RhdGEoe1xuICAgICAgICAgICAgZGF0YVR5cGU6IDAsXG4gICAgICAgICAgICByZWxhdGlvblR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgdmFsdWU6ICgkdXNlck1hbmFnZXIuVXNlci5nZXQoXCJyZWNvcmRcIikgfHwgMCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHByaW9yaXR5OiAwLFxuICAgICAgICAgICAgZXh0cmE6IFwiZXh0cmFcIixcbiAgICAgICAgICAgIHpvbmVJZDogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMgc2V0SW1SYW5rRGF0YSBzdWNjZXNzIHJlczogXCIsIEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMgc2V0SW1SYW5rRGF0YSBmYWlsIHJlczogXCIsIEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50YUluaXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLnRhLmxvZ2luKHQpO1xuICAgICAgICB0aGlzLnRhLmluaXQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnZpYnJhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgdHQudmlicmF0ZVNob3J0KHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIiArIHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpYnJhdGVTaG9ydOiwg+eUqOWksei0pVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2dpbjEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1RvdXRpYW9Mb2dpbkN0cmxlcl1bbG9naW5dXCIpO1xuICAgICAgICB0dC5sb2dpbih7XG4gICAgICAgICAgICBmb3JjZTogITEsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW7osIPnlKjmiJDlip9cIiArIHQuY29kZSArIFwiIFwiICsgdC5hbm9ueW1vdXNDb2RlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbuiwg+eUqOWksei0pVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wb3N0MiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLor7fmsYJcIik7XG4gICAgICAgICAgICB2YXIgbiA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgbi50aW1lb3V0ID0gNWUzO1xuICAgICAgICAgICAgdmFyIHIgPSB0O1xuICAgICAgICAgICAgdmFyIG8gPSBcIj9cIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcikge1xuICAgICAgICAgICAgICAgIHZhciBhID0gaSArIFwiPVwiICsgcltpXTtcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIG8gKz0gYTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvICs9IFwiJlwiICsgYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuivt+axgjExXCIpO1xuICAgICAgICAgICAgbi5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vZ2FtZS56dWlxaWFuZ3lpbmd5dS5uZXQvY29tbW9uL3R0L3Nlc3Npb24vc2lnbl9pblwiICsgbywgITApO1xuICAgICAgICAgICAgbi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIik7XG4gICAgICAgICAgICBuLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoNCA9PT0gbi5yZWFkeVN0YXRlICYmIDIwMCA9PSBuLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG4ucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWTjeW6lOWPguaVsFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgICAgIGUoSlNPTi5wYXJzZSh0KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4aHIucmVhZHlTdGF0ZVwiLCBuLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh0LCBlLCBuLCByLCBvKSB7XG4gICAgICAgIHZhciBpID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBhID0gdGhpcztcbiAgICAgICAgaS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoNCA9PT0gaS5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkuc3RhdHVzID49IDIwMCAmJiBpLnN0YXR1cyA8PSA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgYS5faXNMb2cgJiYgY2MubG9nKFwiW0h0dHBdW1Bvc3RdW+ivt+axguaIkOWKn10gc3RhdHVzIDogXCIgKyBpLnN0YXR1cyArIFwiLCB1cmwgOiBcIiArIHQpO1xuICAgICAgICAgICAgICAgICAgICBuICYmIG4oaS5yZXNwb25zZVRleHQsIG8pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICg1MDIgPT0gaS5zdGF0dXMgJiYgKCFvIHx8IG8ucmVTZW5kVGltZXMgPCAzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG8gPSBvIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZVNlbmRUaW1lczogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkucmVTZW5kVGltZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltIdHRwXVtQb3N0XVs1MDJdIHJlU2VuZFRpbWVzIDogXCIgKyBvLnJlU2VuZFRpbWVzICsgXCIsIHVybCA6IFwiICsgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCBhLnBvc3QodCwgZSwgbiwgciwgbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuX2lzTG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJbSHR0cF1bUG9zdF1b6K+35rGC5aSx6LSlXSBzdGF0dXMgOiBcIiArIGkuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcihvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbSHR0cF1bUG9zdF1b5Y+R6LW36K+35rGCXSB1cmwgOiBcIiArIHQpO1xuICAgICAgICB2YXIgcztcbiAgICAgICAgdmFyIGMgPSAhbyB8fCAwICE9IG8uYXN5bmM7XG4gICAgICAgIGkub3BlbihcIlBPU1RcIiwgdCwgYyk7XG4gICAgICAgIGlmICh0aGlzLl9hdXRob3JpemF0aW9uKSB7XG4gICAgICAgICAgICBpLnNldFJlcXVlc3RIZWFkZXIoXCJhdXRob3JpemF0aW9uXCIsIHRoaXMuX2F1dGhvcml6YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGkuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIGkub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGEuX2lzTG9nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW0h0dHBdW1Bvc3RdW+ivt+axgui2heaXtl0gW2V2ZW50XSA6IFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLl9pc0xvZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLl9pc0xvZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICByKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGkub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhLl9pc0xvZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbSHR0cF1bUG9zdF1b6K+35rGC5byC5bi4XSBbZXZlbnRdIDogXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuX2lzTG9nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLl9pc0xvZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgcihhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgaS50aW1lb3V0ID0gNWUzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvICYmIDEgPT0gby5pc0JvZHlUeXBlUmVxdWVzdCkge1xuICAgICAgICAgICAgcyA9IEpTT04uc3RyaW5naWZ5KGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IGEuX0VuY29kZUZvcm1EYXRhKGUpO1xuICAgICAgICB9XG4gICAgICAgIGkuc2VuZChzKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLl9FbmNvZGVGb3JtRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gW107XG4gICAgICAgIHZhciBuID0gLyUyMC9nO1xuICAgICAgICBmb3IgKHZhciByIGluIHQpIHtcbiAgICAgICAgICAgIHZhciBvID0gdFtyXTtcbiAgICAgICAgICAgIHZhciBpID0gZW5jb2RlVVJJQ29tcG9uZW50KHIpLnJlcGxhY2UobiwgXCIrXCIpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZShuLCBcIitcIik7XG4gICAgICAgICAgICBlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGUuam9pbihcIiZcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHdpbmRvdy5hZF9pZDtcbiAgICAgICAgaWYgKG4gJiYgbi5sZW5ndGggPCAxOSkge1xuICAgICAgICAgICAgdGhpcy50YS5zZXRTdXBlclByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgIHZlcnNpb246IHRoaXMuX2NvbmZpZy52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIHZpZGVvX2lkOiB3aW5kb3cudmlkZW9faWQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWQ6IHdpbmRvdy5wcm9qZWN0aWQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBwcm9tb3Rpb25pZDogd2luZG93LnByb21vdGlvbmlkIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbWlkMTogd2luZG93Lm1pZDEgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBtaWQyOiB3aW5kb3cubWlkMiB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG1pZDM6IHdpbmRvdy5taWQzIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbWlkNDogd2luZG93Lm1pZDQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBtaWQ1OiB3aW5kb3cubWlkNSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG1pZDY6IHdpbmRvdy5taWQ2IHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YS5zZXRTdXBlclByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgIHZlcnNpb246IHRoaXMuX2NvbmZpZy52ZXJzaW9uLFxuICAgICAgICAgICAgICAgIGFkX2lkOiB3aW5kb3cuYWRfaWQsXG4gICAgICAgICAgICAgICAgdmlkZW9faWQ6IHdpbmRvdy52aWRlb19pZCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIHByb2plY3RpZDogd2luZG93LnByb2plY3RpZCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIHByb21vdGlvbmlkOiB3aW5kb3cucHJvbW90aW9uaWQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBtaWQxOiB3aW5kb3cubWlkMSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG1pZDI6IHdpbmRvdy5taWQyIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbWlkMzogd2luZG93Lm1pZDMgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBtaWQ0OiB3aW5kb3cubWlkNCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG1pZDU6IHdpbmRvdy5taWQ1IHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbWlkNjogd2luZG93Lm1pZDYgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YS50cmFjayh0LCBKU09OLnBhcnNlKGUpKTtcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVuaWQgJiYgIXRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0ID0gITA7XG4gICAgICAgICAgICBpZiAod2luZG93LmFkX2lkLmxlbmd0aCA8IDE5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YS51c2VyU2V0KHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmlkOiB3aW5kb3cub3BlbmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGEudXNlclNldCh7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5pZDogd2luZG93Lm9wZW5pZCxcbiAgICAgICAgICAgICAgICAgICAgYWRfaWQ6IHdpbmRvdy5hZF9pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5VcIiwgd2luZG93Lm9wZW5pZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZGs7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93UmV3YXJkQWRzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zZGsuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnJld2FyZElEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3Jld2FyZEFkc0NiID0gdCksXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLl9yZXdhcmRIYXNTaG93ID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5iZ20gPSAkYXVkaW9NYW5hZ2VyLkF1ZGlvLmN1cnJlbnRCZ20pLFxuICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnN0b3BNdXNpYygpLFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5TdG9wVGltZXIpLFxuICAgICAgICAgICAgICAgICAgICAoZ2FtZS5kcmFnb25Nb3ZpbmcgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jld2FyZEFkcyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLl9yZXdhcmRBZHMgPSB0aGlzLnNkay5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLl9jb25maWcucmV3YXJkSURcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0dFBvc3RiYWNrQ3RsLmRlZmF1bHQuR2V0SW5zdGFuY2UoKS5hZFJlcXVlc3QoXCLmv4DlirHop4bpopFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRBZHMub25Mb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXdhcmRIYXNMb2FkID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHR0UG9zdGJhY2tDdGwuZGVmYXVsdC5HZXRJbnN0YW5jZSgpLmFkRmlsbChcIua/gOWKseinhumikVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5fcmV3YXJkSGFzU2hvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3Jld2FyZEhhc1Nob3cgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHR0UG9zdGJhY2tDdGwuZGVmYXVsdC5HZXRJbnN0YW5jZSgpLmFkQ2xpY2soXCLmv4DlirHop4bpopFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3Jld2FyZEFkcy5zaG93KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdHRQb3N0YmFja0N0bC5kZWZhdWx0LkdldEluc3RhbmNlKCkuYWRJbXByZXNzaW9uKFwi5r+A5Yqx6KeG6aKRXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wbGF5VmlkZW9TaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRBZHMub25DbG9zZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3Jld2FyZEhhc0xvYWQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5pc0VuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0dFBvc3RiYWNrQ3RsLmRlZmF1bHQuR2V0SW5zdGFuY2UoKS5hZEltcHJlc3Npb25Eb25lKFwi5r+A5Yqx6KeG6aKRXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXdhcmRBZHNDYih0LmlzRW5kZWQgPyAwIDogMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wbGF5VmlkZW9FbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlNdXNpYyhlLmJnbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQucmVzdG9yZVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZHJhZ29uTW92aW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaXNFbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGFzdFZpZGVvQWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXdhcmRBZHMub25FcnJvcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX3Jld2FyZEhhc0xvYWQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gc2hvd1Jld2FyZEFkc1wiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXdhcmRBZHNDYigtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLlub/lkYrliqDovb3kuK3vvIzor7fnqI3lkI7jgIJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5fcmV3YXJkQWRzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLl9yZXdhcmRBZHMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnJld2FyZEFkc0lESW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZXdhcmRBZHNJREluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJld2FyZEFkc0lESW5kZXggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlNdXNpYyhlLmJnbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQucmVzdG9yZVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZHJhZ29uTW92aW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgKHRoaXMuX3Jld2FyZEhhc0xvYWQgJiYgIXRoaXMuX3Jld2FyZEhhc1Nob3dcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLl9yZXdhcmRIYXNTaG93ID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkdHRQb3N0YmFja0N0bC5kZWZhdWx0LkdldEluc3RhbmNlKCkuYWRDbGljayhcIua/gOWKseinhumikVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmV3YXJkQWRzLnNob3coKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0dFBvc3RiYWNrQ3RsLmRlZmF1bHQuR2V0SW5zdGFuY2UoKS5hZEltcHJlc3Npb24oXCLmv4DlirHop4bpopFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoJHR0UG9zdGJhY2tDdGwuZGVmYXVsdC5HZXRJbnN0YW5jZSgpLmFkUmVxdWVzdChcIua/gOWKseinhumikVwiKSwgdGhpcy5fcmV3YXJkQWRzLmxvYWQoKSkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQoLTMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHQoLTIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93QmFubmVyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9iYW5uZXIpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9iYW5uZXIgPSB0aGlzLnNkay5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6IHQuaWQgfHwgdGhpcy5fY29uZmlnLmJhbm5lcklELFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDk5OTksXG4gICAgICAgICAgICAgICAgICAgIHRvcDogOTk5OVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6IDYwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2Jhbm5lci5vbkxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChuLl9iYW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5fYmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9iYW5uZXIub25FcnJvcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBzaG93QmFubmVyXCIsIHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9iYW5uZXIub25SZXNpemUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG4uc2RrLmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgbi5fYmFubmVyLnN0eWxlLnRvcCA9IGUud2luZG93SGVpZ2h0IC0gdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgbi5fYmFubmVyLnN0eWxlLmxlZnQgPSAoZS53aW5kb3dXaWR0aCAtIHQud2lkdGgpIC8gMjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlQmFubmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYmFubmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9iYW5uZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fYmFubmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0luc2VydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zZGsuY3JlYXRlSW50ZXJzdGl0aWFsQWQgJiYgdGhpcy5fY29uZmlnLmluc2VydElEKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5zZXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0LmxvYWQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5faW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMgdHQgc2hvd0luc2VydDEgZXJyOlwiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgKCh0aGlzLl9pbnNlcnQgPSB0aGlzLnNkay5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5fY29uZmlnLmluc2VydElEXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0Lm9uTG9hZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5faW5zZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5faW5zZXJ0Lm9mZkxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9pbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBsYXlJbnNlcnRBZFNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiMjIHR0IHNob3dJbnNlcnQyIGVycjpcIiwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5zZXJ0Lm9uQ2xvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX2luc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2luc2VydC5vZmZDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2luc2VydC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5faW5zZXJ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBsYXlJbnNlcnRBZEVuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sYXN0SW5zZXJ0QWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnNlcnQub25FcnJvcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyB0dCBzaG93SW5zZXJ0M1wiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlICYmIDEwMDMgPT0gZS5lcnJDb2RlICYmIHQuX2luc2VydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2luc2VydC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5faW5zZXJ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sYXN0SW5zZXJ0QWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxZTM7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZGVzdHJveUluc2VydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc2VydCkge1xuICAgICAgICAgICAgdGhpcy5faW5zZXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2luc2VydCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYXJlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSAkdXRpbHMuVXRpbHMucmFuZG9tTnVtKDAsIDIpO1xuICAgICAgICB0aGlzLnNkay5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdGVtcGxhdGVJZDogW1wiNWFxNWo2b2xhZ29mMDhqMzJkXCIsIFwiMzVjZnd2YmNsNXNjbG1tZmFvXCIsIFwiMWU3Y2NtMDJoMGFtZjliMTNhXCJdW2VdLFxuICAgICAgICAgICAgcXVlcnk6IFwiXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgdCgwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvlpLHotKVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hhcmVSZWNvcmRDYXAgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLl9yZWNvcmRlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlY29yZFBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnNkay5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBcInZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb1BhdGg6IHRoaXMuX3JlY29yZFBhdGhcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvop4bpopHmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLl9yZWNvcmRTdGF0dXMgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiG5Lqr6KeG6aKR5aSx6LSlXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgJiYgLTEgIT0gZS5lcnJNc2cuaW5kZXhPZihcInNob3J0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCgtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQoLTMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHQoLTIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdGFydFJlY29yZENhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IDMwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZGsuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3JlY29yZGVyKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4vlvZXlsY9cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb3JkZXIgPSB0aGlzLnNkay5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb3JkZXIub25TdGFydChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInR0TWFuYWdlcuW9leWxj+W8gOWni++8mlwiLCB0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvcmRlci5vblN0b3AoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5fcmVjb3JkUGF0aCA9IHQudmlkZW9QYXRoO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9leWxj+e7k+adn++8mlwiLCB0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvcmRlci5vbkVycm9yKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUuX3JlY29yZFN0YXR1cyA9IC0xO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9leWxj+mUmeivr+eahOS/oeaBr1wiLCBKU09OLnN0cmluZ2lmeSh0KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZWNvcmRQYXRoID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5b2V5bGPXCIpO1xuICAgICAgICAgICAgdGhpcy5fcmVjb3JkZXIuc3RhcnQoe1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29yZFN0YXR1cyA9IDE7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLmFjdGlvblJlY29yZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hY3Rpb25SZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWNvcmRpbmdTZWNvbmQgPSAwO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25SZWNvcmQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZS5yZWNvcmRpbmdTZWNvbmQrKztcbiAgICAgICAgICAgICAgICBpZiAoZS5yZWNvcmRpbmdTZWNvbmQgPj0gMjk5KSB7XG4gICAgICAgICAgICAgICAgICAgIG4uc3RvcFJlY29yZENhcCgpO1xuICAgICAgICAgICAgICAgICAgICBlLmFjdGlvblJlY29yZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZS5hY3Rpb25SZWNvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDFlMyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBhdXNlUmVjb3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcmVjb3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY29yZGVyLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlc3VtZVJlY29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29yZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWNvcmRlci5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3RvcFJlY29yZENhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlY29yZGVyICYmIDEgPT0gdGhpcy5fcmVjb3JkU3RhdHVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIue7k+adn+W9leWxj1wiKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29yZGVyLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY29yZFN0YXR1cyA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFNoYXJlU3RhdHVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVjb3JkU3RhdHVzO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uICh0LCBlLCBuLCByLCBvKSB7XG4gICAgICAgIHZhciBhID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChzLCBjKSB7XG4gICAgICAgICAgICBhLnNkay5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHQsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJcbiAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpOiBuZXcgJGVuY3J5cHQuRW5jcnlwdCgpLmVuY3J5cHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VxOiBhLnJhbmRvbVN0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA6IG4sXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBvLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHQpO1xuICAgICAgICAgICAgICAgICAgICBzKHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgICAgIGModCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZGFyZW5Mb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmxhdW5jaE9wdCA9IHRoaXMuc2RrLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBkYXJlbkxvZ2luIGxhdW5jaE9wdDogXCIsIHRoaXMubGF1bmNoT3B0KTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMubGF1bmNoT3B0LnF1ZXJ5O1xuICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gZGFyZW5Mb2dpbiBxdWVyeTogXCIsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmRyUGlkID0gdGhpcy5xdWVyeS5kcl9waWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBkYXJlbkxvZ2luIGRyUGlkOiBcIiwgdGhpcy5kclBpZCk7XG4gICAgICAgIHRoaXMucHJlVmlkZW9JZCA9IHRoaXMucXVlcnkucHJlX3ZpZGVvX2lkO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gZGFyZW5Mb2dpbiBwcmVWaWRlb0lkOiBcIiwgdGhpcy5wcmVWaWRlb0lkKTtcbiAgICAgICAgdGhpcy5kclR5cGUgPSB0aGlzLnF1ZXJ5LmRyX3R5cGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBkYXJlbkxvZ2luIGRyVHlwZTogXCIsIHRoaXMuZHJUeXBlKTtcbiAgICAgICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5oYXNPd25Qcm9wZXJ0eShcImRyX3BhcmFtc1wiKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnkuZHJfcGFyYW1zIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcl9wYXJhbXMgPSB0aGlzLnF1ZXJ5LmRyX3BhcmFtcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcl9wYXJhbXMgPSBKU09OLnBhcnNlKHRoaXMucXVlcnkuZHJfcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kclBpZCAmJiB0aGlzLmRyVHlwZSAmJiBcInByb21vdGVcIiA9PSB0aGlzLmRyVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5nZXRQcmVWaWRlb0lkKHRoaXMuZHJQaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMuZHJUeXBlICYmIHRoaXMuZHJQaWQgJiYgXCJwcm9tb3RlXCIgPT0gdGhpcy5kclR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4oITApLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodC5xdWVyeSAmJiB0LmRyVHlwZSAmJiB0LmRyUGlkICYmIFwicHJvbW90ZVwiID09IHQuZHJUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuc2RrLmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBkYXJlbkxvZ2luIHVzZXJJbmZvXCIsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudXBsb2FkVXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBlLmNvZGUgPyBlLmNvZGUgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdfZGF0YTogbi5yYXdEYXRhID8gbi5yYXdEYXRhIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJfcGlkOiB0LmRyUGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibXNfZmxhZzogdC5fY29uZmlnLmZsYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luKCExKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdC5nZXRPcGVuaWQoe1xuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNfY29kZTogZS5hbm9ueW1vdXNDb2RlID8gZS5hbm9ueW1vdXNDb2RlIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29kZTogZS5jb2RlID8gZS5jb2RlIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZmxhZzogdC5fY29uZmlnLmZsYWdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRQcmVWaWRlb0lkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gZ2V0UHJlVmlkZW9JZFwiLCB0KTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwiaHR0cHM6Ly9hZGRhdGEtYXBpLnp1aXFpYW5neWluZ3l1Lm5ldC9nYW1lL1ZpZGVvL2dldFByZVZpZGVvSWQ/ZHJfcGlkPVwiICsgdCwgXCJHRVRcIilcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtaSlREUGxhdGZvcm1dIGdldFByZVZpZGVvSWQgc3VjY2Vzc1wiLCB0KTtcbiAgICAgICAgICAgICAgICBlLnByZVZpZGVvSWQgPSB0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gZ2V0UHJlVmlkZW9JZCBmYWlsXCIsIHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGxvYWRVc2VySW5mbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtaSlREUGxhdGZvcm1dIHVwbG9hZFVzZXJJbmZvIHN1Y2Nlc3NcIiwgdCk7XG4gICAgICAgIHRoaXMucmVxdWVzdChcImh0dHBzOi8vYWRkYXRhLWFwaS56dWlxaWFuZ3lpbmd5dS5uZXQvZ2FtZS91c2VyL2F1dGhcIiwgXCJQT1NUXCIsIHQsICExKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gdXBsb2FkVXNlckluZm8gc3VjY2Vzc1wiLCB0KTtcbiAgICAgICAgICAgICAgICBlLnByb21vdGVPcGVuSWQgPSB0LmRhdGEuZGF0YS5vcGVuX2lkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSB1cGxvYWRVc2VySW5mbyBmYWlsXCIsIHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGxvYWRWaWRlb0lkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwiaHR0cHM6Ly9hZGRhdGEtYXBpLnp1aXFpYW5neWluZ3l1Lm5ldC9nYW1lL1ZpZGVvL3NhdmVWaWRlb1wiLCBcIlBPU1RcIiwgdCwgITEpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gdXBsb2FkVmlkZW9JZCBzdWNjZXNzXCIsIHQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gdXBsb2FkVmlkZW9JZCBmYWlsXCIsIHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaWxlbnRMb2dpbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9ICExO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobiwgcikge1xuICAgICAgICAgICAgZS5zZGsubG9naW4oe1xuICAgICAgICAgICAgICAgIGZvcmNlOiB0LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBzaWxlbnRMb2dpbiBzdWNjZXNzIFwiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgbih0KTtcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhcmVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIGUub25TaGFyZUFwcE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBzaWxlbnRMb2dpbiBmYWlsIFwiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgcihudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRPcGVuaWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBnZXRPcGVuaWRcIiwgdCk7XG4gICAgICAgIHRoaXMucmVxdWVzdChcImh0dHBzOi8vZ2FtZS56dWlxaWFuZ3lpbmd5dS5uZXQvY29tbW9uL3R0L3Nlc3Npb24vc2lnbl9pblwiLCBcIlBPU1RcIiwgdCwgITEsIHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIlxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltwbGF0Zm9ybV0gW1pKVERQbGF0Zm9ybV0gZ2V0T3BlbmlkIHN1Y2Nlc3NcIiwgdCk7XG4gICAgICAgICAgICAgICAgZS51c2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzX29wZW5pZDogdC5kYXRhLmRhdGEuYW5vbnltb3VzX29wZW5pZCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbmlkOiB0LmRhdGEuZGF0YS5vcGVuaWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBnZXRPcGVuaWQgZmFpbFwiLCB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd1NoYXJlTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZGsuc2hvd1NoYXJlTWVudSh7XG4gICAgICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6ICEwXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5zZGsub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBvblNoYXJlQXBwTWVzc2FnZVwiLCBlKTtcbiAgICAgICAgICAgIGlmIChlICYmIFwidmlkZW9cIiA9PSBlLmNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBcInZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3RlXCIgPT0gdC5kclR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZHJfcGlkPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZHJQaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImZHJfdHlwZT1zaGFyZSZwcmVfdmlkZW9faWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVWaWRlb0lkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0LmRyX3BhcmFtcyA/IFwiJmRyX3BhcmFtcz1cIiArIEpTT04uc3RyaW5naWZ5KHQuZHJfcGFyYW1zKSA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aFZpZGVvSWQ6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbcGxhdGZvcm1dIFtaSlREUGxhdGZvcm1dIG9uU2hhcmVBcHBNZXNzYWdlIHN1Y2Nlc3NcIiwgZSwgdC5kclR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwicHJvbW90ZVwiID09IHQuZHJUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC51cGxvYWRWaWRlb0lkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJfcGlkOiB0LmRyUGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibXNfZmxhZzogdC5fY29uZmlnLmZsYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvX2lkOiBlLnZpZGVvSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZV92aWRlb19pZDogdC5wcmVWaWRlb0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuX2lkOiB0LnByb21vdGVPcGVuSWQgPyB0LnByb21vdGVPcGVuSWQgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRQcmVWaWRlb0lkKHQuZHJQaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBvblNoYXJlQXBwTWVzc2FnZSBmYWlsXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5VmlkZW9FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICBpZiAoXCJzaGFyZVwiID09IHRoaXMuZHJUeXBlKSB7XG4gICAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgICAgIGRyX3BpZDogdGhpcy5kclBpZCxcbiAgICAgICAgICAgICAgICBwcmVfdmlkZW9faWQ6IHRoaXMucHJlVmlkZW9JZCxcbiAgICAgICAgICAgICAgICBibXNfZmxhZzogdGhpcy5fY29uZmlnLmZsYWcsXG4gICAgICAgICAgICAgICAgdXNlcl9pbmZvOiB0aGlzLnVzZXJJbmZvLFxuICAgICAgICAgICAgICAgIHBsYXlfdHlwZTogXCJkYXJlblwiLFxuICAgICAgICAgICAgICAgIGFkX3R5cGU6IDUsXG4gICAgICAgICAgICAgICAgZXZlbnRfdHlwZTogXCJhZHBcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgYm1zX2ZsYWc6IHRoaXMuX2NvbmZpZy5mbGFnLFxuICAgICAgICAgICAgICAgIHVzZXJfaW5mbzogdGhpcy51c2VySW5mbyxcbiAgICAgICAgICAgICAgICBwbGF5X3R5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgYWRfdHlwZTogNSxcbiAgICAgICAgICAgICAgICBldmVudF90eXBlOiBcImFkcFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBwbGF5VmlkZW9FbmRcIiwgdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5SW5zZXJ0QWRFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICBpZiAoXCJzaGFyZVwiID09IHRoaXMuZHJUeXBlKSB7XG4gICAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgICAgIGRyX3BpZDogdGhpcy5kclBpZCxcbiAgICAgICAgICAgICAgICBwcmVfdmlkZW9faWQ6IHRoaXMucHJlVmlkZW9JZCxcbiAgICAgICAgICAgICAgICBibXNfZmxhZzogdGhpcy5fY29uZmlnLmZsYWcsXG4gICAgICAgICAgICAgICAgdXNlcl9pbmZvOiB0aGlzLnVzZXJJbmZvLFxuICAgICAgICAgICAgICAgIHBsYXlfdHlwZTogXCJkYXJlblwiLFxuICAgICAgICAgICAgICAgIGFkX3R5cGU6IDYsXG4gICAgICAgICAgICAgICAgZXZlbnRfdHlwZTogXCJhZHBcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgYm1zX2ZsYWc6IHRoaXMuX2NvbmZpZy5mbGFnLFxuICAgICAgICAgICAgICAgIHVzZXJfaW5mbzogdGhpcy51c2VySW5mbyxcbiAgICAgICAgICAgICAgICBwbGF5X3R5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgYWRfdHlwZTogNixcbiAgICAgICAgICAgICAgICBldmVudF90eXBlOiBcImFkcFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBwbGF5SW5zZXJ0QWRFbmRcIiwgdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXROZXR3b3JrVHlwZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuc2RrLmdldE5ldHdvcmtUeXBlKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIiArIGUubmV0d29ya1R5cGUpO1xuICAgICAgICAgICAgICAgIHQoZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0TmV0d29ya1R5cGXosIPnlKjlpLHotKVcIik7XG4gICAgICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtUeXBlOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlWaWRlb1Nob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICBpZiAoXCJzaGFyZVwiID09IHRoaXMuZHJUeXBlKSB7XG4gICAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50X3R5cGU6IFwiZXBzXCIsXG4gICAgICAgICAgICAgICAgZHJfcGlkOiB0aGlzLmRyUGlkLFxuICAgICAgICAgICAgICAgIHByZV92aWRlb19pZDogdGhpcy5wcmVWaWRlb0lkLFxuICAgICAgICAgICAgICAgIGJtc19mbGFnOiB0aGlzLl9jb25maWcuZmxhZyxcbiAgICAgICAgICAgICAgICB1c2VyX2luZm86IHRoaXMudXNlckluZm8sXG4gICAgICAgICAgICAgICAgcGxheV90eXBlOiBcImRhcmVuXCIsXG4gICAgICAgICAgICAgICAgYWRfdHlwZTogNVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnRfdHlwZTogXCJlcHNcIixcbiAgICAgICAgICAgICAgICBibXNfZmxhZzogdGhpcy5fY29uZmlnLmZsYWcsXG4gICAgICAgICAgICAgICAgdXNlcl9pbmZvOiB0aGlzLnVzZXJJbmZvLFxuICAgICAgICAgICAgICAgIHBsYXlfdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICBhZF90eXBlOiA1XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW3BsYXRmb3JtXSBbWkpURFBsYXRmb3JtXSBwbGF5VmlkZW9TaG93XCIsIHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUluc2VydEFkU2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIGlmIChcInNoYXJlXCIgPT0gdGhpcy5kclR5cGUpIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnRfdHlwZTogXCJlcHNcIixcbiAgICAgICAgICAgICAgICBkcl9waWQ6IHRoaXMuZHJQaWQsXG4gICAgICAgICAgICAgICAgcHJlX3ZpZGVvX2lkOiB0aGlzLnByZVZpZGVvSWQsXG4gICAgICAgICAgICAgICAgYm1zX2ZsYWc6IHRoaXMuX2NvbmZpZy5mbGFnLFxuICAgICAgICAgICAgICAgIHVzZXJfaW5mbzogdGhpcy51c2VySW5mbyxcbiAgICAgICAgICAgICAgICBwbGF5X3R5cGU6IFwiZGFyZW5cIixcbiAgICAgICAgICAgICAgICBhZF90eXBlOiA2XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBldmVudF90eXBlOiBcImVwc1wiLFxuICAgICAgICAgICAgICAgIGJtc19mbGFnOiB0aGlzLl9jb25maWcuZmxhZyxcbiAgICAgICAgICAgICAgICB1c2VyX2luZm86IHRoaXMudXNlckluZm8sXG4gICAgICAgICAgICAgICAgcGxheV90eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgIGFkX3R5cGU6IDZcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJbcGxhdGZvcm1dIFtaSlREUGxhdGZvcm1dIHBsYXlJbnNlcnRBZFNob3dcIiwgdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0ID0gdCB8fCAzMjtcbiAgICAgICAgdmFyIGUgPSBcIkFCQ0RFRkdISktNTlBRUlNUV1hZWmFiY2RlZmhpamttbnByc3R3eHl6b09MbDlncVZ2VXVJMTIzNDU2NzhcIjtcbiAgICAgICAgdmFyIG4gPSBlLmxlbmd0aDtcbiAgICAgICAgdmFyIHIgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHQ7IG8rKykge1xuICAgICAgICAgICAgciArPSBlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mb2xsb3cgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltieXRlZGFuY2VdIOeCueWHu+WFs+azqFwiLCB0aGlzLnNkay5vcGVuQXdlbWVVc2VyUHJvZmlsZSk7XG4gICAgICAgIGlmICh0aGlzLnNkay5vcGVuQXdlbWVVc2VyUHJvZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5zZGsub3BlbkF3ZW1lVXNlclByb2ZpbGUoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLSBvcGVuIHN1Y2Nlc3MsIHJlczogXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICB0KDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tIG9wZW4gZmFpbCwgZXJyOiBcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHQoLTEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLSBvcGVuIGNvbXBsZXRlLCByZXM6IFwiLCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGU7XG59KSgkYmFzZVBsYXRmb3JtLkJhc2VQbGF0Zm9ybSk7XG5leHBvcnRzLlRUID0gbTtcbiJdfQ==