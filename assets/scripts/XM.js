var r;
exports.XM = void 0;
var $basePlatform = require("./BasePlatform");
var a = cc._decorator;
var s =
    (a.ccclass,
    a.property,
    (function (t) {
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
                    success: function () {},
                    complete: function () {},
                    fail: function () {}
                });
            }
        };
        e.prototype.silentLogin = function () {
            return new Promise(function (t, e) {
                window.qg.login({
                    success: function (n) {
                        if (n) {
                            t(n.uid);
                        } else {
                            e("[XM] --> data is null");
                        }
                    },
                    fail: function (t) {
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
                if (this._banner) {
                    //
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
                    this._banner
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
            o.once(
                cc.Node.EventType.TOUCH_START,
                function () {
                    e.reportAdClick({
                        adId: t.adId
                    });
                    r.hideNativeAds();
                    if (n.hideCb) {
                        n.hideCb();
                    }
                },
                this
            );
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
                cc.loader.load(
                    {
                        url: u,
                        type: "png"
                    },
                    function (t, e) {
                        if (!t && i) {
                            i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                        }
                    }
                );
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
            o.once(
                cc.Node.EventType.TOUCH_START,
                function () {
                    e.reportAdClick({
                        adId: t.adId
                    });
                    r.hideNativeAds();
                    if (n.hideCb) {
                        n.hideCb();
                    }
                },
                this
            );
            if (l) {
                l.once(
                    cc.Node.EventType.TOUCH_START,
                    function () {
                        e.reportAdClick({
                            adId: t.adId
                        });
                        r.hideNativeAds();
                        if (n.hideCb) {
                            n.hideCb();
                        }
                    },
                    this
                );
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
                cc.loader.load(
                    {
                        url: d,
                        type: "png"
                    },
                    function (t, e) {
                        if (!t && i) {
                            i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                        }
                    }
                );
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
            o.once(
                cc.Node.EventType.TOUCH_START,
                function () {
                    e.reportAdClick({
                        adId: t.adId
                    });
                    r.hideNativeAds();
                    if (n.hideCb) {
                        n.hideCb();
                    }
                },
                this
            );
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
                    this.gamePortalAd
                        .show()
                        .then(function () {
                            console.log("show success");
                            if (t) {
                                t(!0);
                            }
                        })
                        .catch(function (e) {
                            if (t) {
                                t(!1);
                            }
                            console.log("show fail with:" + e.errCode + "," + e.errMsg);
                        });
                } else {
                    (this.gamePortalAd = window.qg.createGamePortalAd({
                        adUnitId: "342428"
                    })),
                        this.gamePortalAd.onLoad(function () {
                            console.log("互推盒子九宫格广告加载成功");
                            e.gamePortalAd
                                .show()
                                .then(function () {
                                    console.log("show success");
                                    if (t) {
                                        t(!0);
                                    }
                                })
                                .catch(function (e) {
                                    if (t) {
                                        t(!1);
                                    }
                                    console.log("show fail with:" + e.errCode + "," + e.errMsg);
                                });
                        }),
                        this.gamePortalAd.onClose(function () {
                            console.log("互推盒子九宫格广告关闭");
                        }),
                        this.gamePortalAd
                            .load()
                            .then(function () {
                                console.log("load success");
                            })
                            .catch(function (e) {
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
            if (this.videoAd) {
                //
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
            var n = function (r) {
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
            this.videoAd
                .load()
                .then(function () {
                    e.videoAd.show().then(function () {
                        console.log("xm 视频显示成功1");
                    });
                })
                .catch(function (e) {
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
                var n = function () {
                    if (e) {
                        e.offClose(n);
                        e.destroy();
                        e = null;
                        t.playInsertAdEnd();
                    }
                };
                e.onClose(n);
                var r = function (n, o) {
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
                        success: function (e) {
                            if (0 == e) {
                                t();
                            }
                        },
                        fail: function (t) {
                            e(t);
                        },
                        complete: function () {}
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
    })($basePlatform.BasePlatform));
exports.XM = s;
