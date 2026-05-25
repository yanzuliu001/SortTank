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
var m = (function (t) {
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
        if (
            ["Douyin", "douyin_lite"].some(function (t) {
                return t == window.tt.getSystemInfoSync().appName;
            })
        ) {
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
            if (
                ("021001" == e._inScene ||
                    "101001" == e._inScene ||
                    "021036" == e._inScene ||
                    "homepage" == (null == n ? void 0 : n.launch_from) ||
                    "sidebar_card" == (null == n ? void 0 : n.location)) &&
                0 == ($userManager.User.get($userConst.UserData.EnterSidebar) || 0)
            ) {
                cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
                    state: "complete"
                });
                $userManager.User.set($userConst.UserData.EnterSidebar, 1);
                $eventManager.Event.emit($eventConst.default.EnterSidebar);
            }
            if ("025001" != e._inScene && "105001" != e._inScene) {
                //
            } else {
                $userManager.User.setTempData("isZt", 1);
            }
        }
        window.tt.onShow(function (t) {
            console.log("启动参数如下：", t.query);
            if (n.scene) {
                console.log("## 2 进入场景值：", n.scene);
                if (
                    ("021001" == n.scene ||
                        "101001" == n.scene ||
                        "021036" == n.scene ||
                        "homepage" == (null == n ? void 0 : n.launch_from) ||
                        "sidebar_card" == (null == n ? void 0 : n.location)) &&
                    0 == ($userManager.User.get($userConst.UserData.EnterSidebar) || 0)
                ) {
                    cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
                        state: "complete"
                    });
                    $userManager.User.set($userConst.UserData.EnterSidebar, 1);
                    $eventManager.Event.emit($eventConst.default.EnterSidebar);
                }
            }
        });
        if (
            ["Douyin", "douyin_lite", "live_stream", "aweme_hotsoon"].some(function (t) {
                return t == window.tt.getSystemInfoSync().appName;
            })
        ) {
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
        $ttPostbackCtl.default.GetInstance().init(this._config.flag, this._config.version);
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
                success: function (t) {
                    console.log("## getImRankData success res: ", JSON.stringify(t));
                },
                fail: function (t) {
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
            success: function (t) {
                console.log("## setImRankData success res: ", JSON.stringify(t));
            },
            fail: function (t) {
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
            success: function (t) {
                console.log("" + t);
            },
            fail: function () {
                console.log("vibrateShort调用失败");
            }
        });
    };
    e.prototype.login1 = function () {
        console.log("[ToutiaoLoginCtrler][login]");
        tt.login({
            force: !1,
            success: function (t) {
                console.log("login调用成功" + t.code + " " + t.anonymousCode);
            },
            fail: function () {
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
                return (
                    (this._rewardAdsCb = t),
                    (this._rewardHasShow = !1),
                    (this.bgm = $audioManager.Audio.currentBgm),
                    $audioManager.Audio.stopMusic(),
                    $eventManager.Event.emit($eventConst.default.StopTimer),
                    (game.dragonMoving = !1),
                    this._rewardAds ||
                        ((this._rewardAds = this.sdk.createRewardedVideoAd({
                            adUnitId: this._config.rewardID
                        })),
                        $ttPostbackCtl.default.GetInstance().adRequest("激励视频"),
                        this._rewardAds.onLoad(function () {
                            e._rewardHasLoad = !0;
                            $ttPostbackCtl.default.GetInstance().adFill("激励视频");
                            if (e._rewardHasShow) {
                                //
                            } else {
                                e._rewardHasShow = !0;
                                $ttPostbackCtl.default.GetInstance().adClick("激励视频");
                                e._rewardAds.show().then(function () {
                                    $ttPostbackCtl.default.GetInstance().adImpression("激励视频");
                                });
                                e.playVideoShow();
                            }
                        }),
                        this._rewardAds.onClose(function (t) {
                            e._rewardHasLoad = !1;
                            if (t.isEnded) {
                                $ttPostbackCtl.default.GetInstance().adImpressionDone("激励视频");
                            }
                            e._rewardAdsCb(t.isEnded ? 0 : 1);
                            e.playVideoEnd();
                            $audioManager.Audio.playMusic(e.bgm);
                            $eventManager.Event.emit($eventConst.default.restoreTime);
                            game.dragonMoving = !0;
                            if (t.isEnded) {
                                window.lastVideoAdTime = new Date().getTime() / 1e3;
                            }
                        }),
                        this._rewardAds.onError(function (t) {
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
                            $eventManager.Event.emit($eventConst.default.restoreTime);
                            game.dragonMoving = !0;
                        })),
                    void (this._rewardHasLoad && !this._rewardHasShow
                        ? ((this._rewardHasShow = !0),
                          $ttPostbackCtl.default.GetInstance().adClick("激励视频"),
                          this._rewardAds.show().then(function () {
                              $ttPostbackCtl.default.GetInstance().adImpression("激励视频");
                          }))
                        : ($ttPostbackCtl.default.GetInstance().adRequest("激励视频"), this._rewardAds.load()))
                );
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
        if (this._banner) {
            //
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
                    n._banner
                        .show()
                        .then(function () {
                            if (e) {
                                e(0);
                            }
                        })
                        .catch(function () {
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
                    t._insert
                        .show()
                        .then(function () {})
                        .catch(function (t) {
                            console.log("## tt showInsert1 err:", t);
                        });
                });
            } else {
                this._insert ||
                    ((this._insert = this.sdk.createInterstitialAd({
                        adUnitId: this._config.insertID
                    })),
                    this._insert.onLoad(function () {
                        if (t._insert) {
                            t._insert.offLoad();
                            t._insert
                                .show()
                                .then(function () {
                                    t.playInsertAdShow();
                                })
                                .catch(function (t) {
                                    console.log("## tt showInsert2 err:", t);
                                });
                        }
                    }),
                    this._insert.onClose(function () {
                        if (t._insert) {
                            t._insert.offClose();
                            t._insert.destroy();
                            t._insert = null;
                            t.playInsertAdEnd();
                            window.lastInsertAdTime = new Date().getTime() / 1e3;
                        }
                    }),
                    this._insert.onError(function (e) {
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
            success: function () {
                console.log("分享成功");
                t(0);
            },
            fail: function () {
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
                    success: function () {
                        console.log("分享视频成功");
                        e._recordStatus = 1;
                        t(0);
                    },
                    fail: function (e) {
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
            if (this._recorder) {
                //
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
                data: r
                    ? {
                          di: new $encrypt.Encrypt().encrypt(
                              JSON.stringify(
                                  Object.assign(n, {
                                      seq: a.randomString(16)
                                  })
                              )
                          )
                      }
                    : n,
                header: o,
                success: function (t) {
                    console.log(t);
                    s(t);
                },
                fail: function (t) {
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
                        success: function (n) {
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
        this.request("https://addata-api.zuiqiangyingyu.net/game/Video/getPreVideoId?dr_pid=" + t, "GET")
            .then(function (t) {
                console.log("[platform] [ZJTDPlatform] getPreVideoId success", t);
                e.preVideoId = t.data.data;
            })
            .catch(function (t) {
                console.log("[platform] [ZJTDPlatform] getPreVideoId fail", t);
            });
    };
    e.prototype.uploadUserInfo = function (t) {
        var e = this;
        console.log("[platform] [ZJTDPlatform] uploadUserInfo success", t);
        this.request("https://addata-api.zuiqiangyingyu.net/game/user/auth", "POST", t, !1)
            .then(function (t) {
                console.log("[platform] [ZJTDPlatform] uploadUserInfo success", t);
                e.promoteOpenId = t.data.data.open_id;
            })
            .catch(function (t) {
                console.log("[platform] [ZJTDPlatform] uploadUserInfo fail", t);
            });
    };
    e.prototype.uploadVideoId = function (t) {
        this.request("https://addata-api.zuiqiangyingyu.net/game/Video/saveVideo", "POST", t, !1)
            .then(function (t) {
                console.warn("[platform] [ZJTDPlatform] uploadVideoId success", t);
            })
            .catch(function (t) {
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
                success: function (t) {
                    console.log("[platform] [ZJTDPlatform] silentLogin success ", t);
                    n(t);
                    e.showShareMenu();
                    e.onShareAppMessage();
                },
                fail: function (t) {
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
        })
            .then(function (t) {
                console.log("[platform] [ZJTDPlatform] getOpenid success", t);
                e.userInfo = {
                    anonymous_openid: t.data.data.anonymous_openid,
                    openid: t.data.data.openid
                };
            })
            .catch(function (t) {
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
                    query:
                        "promote" == t.drType
                            ? "dr_pid=" +
                              t.drPid +
                              "&dr_type=share&pre_video_id=" +
                              t.preVideoId +
                              (t.dr_params ? "&dr_params=" + JSON.stringify(t.dr_params) : "")
                            : "",
                    extra: {
                        withVideoId: !0
                    },
                    success: function (e) {
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
                    fail: function (t) {
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
            success: function (e) {
                console.log("" + e.networkType);
                t(e);
            },
            fail: function () {
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
                success: function (e) {
                    console.log("---- open success, res: ", e);
                    t(0);
                },
                fail: function (e) {
                    console.log("---- open fail, err: ", e);
                    t(-1);
                },
                complete: function (t) {
                    console.log("---- open complete, res: ", t);
                }
            });
        }
    };
    return e;
})($basePlatform.BasePlatform);
exports.TT = m;
