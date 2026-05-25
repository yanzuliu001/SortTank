var r;
exports.OPPO = void 0;
var i = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.sdk = window.qg;
        e._rewardAds = null;
        e._rewardAdsCb = null;
        e._rewardHasShow = !1;
        e._rewardHasLoad = !1;
        e._banner = null;
        e._nativeAds = [];
        e.ads = null;
        e.adId = null;
        console.log("oppo");
        return e;
    }
    __extends(e, t);
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
                    this._rewardAds ||
                        ((this._rewardAds = this.sdk.createRewardedVideoAd({
                            adUnitId: this._config.rewardID
                        })),
                        this._rewardAds.onLoad(function () {
                            e._rewardHasLoad = !0;
                            if (e._rewardHasShow) {
                                //
                            } else {
                                e._rewardHasShow = !0;
                                e._rewardAds.show();
                            }
                        }),
                        this._rewardAds.onClose(function (t) {
                            e._rewardHasLoad = !1;
                            if (e._rewardAdsCb) {
                                e._rewardAdsCb(t.isEnded ? 0 : 1);
                                e._rewardAdsCb = null;
                            }
                        }),
                        this._rewardAds.onError(function (t) {
                            e._rewardHasLoad = !1;
                            console.log("[platform] [OPPOPlatform] showRewardAds", t);
                            if (e._rewardAdsCb) {
                                e._rewardAdsCb(-1);
                                e._rewardAdsCb = null;
                            }
                        })),
                    void (this._rewardHasLoad && !this._rewardHasShow
                        ? ((this._rewardHasShow = !0), this._rewardAds.show())
                        : this._rewardAds.load())
                );
            } else {
                return t(-3);
            }
        } else {
            return t(-2);
        }
    };
    e.prototype.showBanner = function (t, e) {
        if (void 0 === t) {
            t = {
                id: ""
            };
        }
        if (this.sdk.createBannerAd && this._config.bannerID) {
            if (this._banner) {
                //
            } else {
                this._banner = this.sdk.createBannerAd({
                    adUnitId: t.id || this._config.bannerID
                });
                console.log("[platform] [OPPOPlatform] create");
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
                    console.log("[platform] [OPPOPlatform] showBanner", t);
                });
            }
        }
    };
    e.prototype.hideBanner = function () {
        if (this._banner) {
            this._banner.destroy();
            this._banner = null;
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
        if (this.sdk.createNativeAd && this._config.nativeID) {
            var r = this.sdk.createNativeAd({
                adUnitId: t.id || this._config.nativeID
            });
            t.container.opacity = 255;
            this._nativeAds.push({
                ads: r,
                container: t.container
            });
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
                            n.showNativeBanner(i, r, t);
                        } else {
                            if (1 == t.type) {
                                n.showNativeInsert(i, r, t),
                                    console.log("[原生插屏展示]"),
                                    cc.game.emit("onInterstitialFeedShow");
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
                console.log("[platform] [OPPOPlatform] showNativeAd", o);
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
                if (1 == t.type) {
                    console.log("[原生插屏展示失败]");
                    cc.game.emit("onInterstitialFeedShowFailed");
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
            });
            if (r) {
                r.load();
            }
        }
    };
    e.prototype.hideNativeAds = function () {
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
            if (this.ads) {
                this.ads = null;
                this.adId = null;
            }
        }
    };
    e.prototype.clickAdJump = function () {
        console.log("测试触发", this.ads, this.adId);
        if (this.ads) {
            this.ads.reportAdClick({
                adId: this.adId
            });
        }
    };
    e.prototype.showNativeBanner = function (t, e, n) {
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
        var l = o.getChildByName("close");
        this.ads = e;
        this.adId = t.adId;
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
            cc.assetManager.loadRemote(
                u,
                {
                    ext: ".png"
                },
                function (t, e) {
                    if (!t && i) {
                        i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                    }
                }
            );
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
        var f = o.getChildByName("bg2");
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
                console.log(n.isMistakeClose);
                if (n.isMistakeClose) {
                    console.log(1);
                    e.reportAdClick({
                        adId: t.adId
                    });
                    r.hideNativeAds();
                } else {
                    console.log(2);
                    r.hideNativeAds();
                }
                if (n.hideCb) {
                    n.hideCb();
                }
            });
        }
        console.log("blank", f, n.isMistakeClose_blank);
        if (f && n.isMistakeClose_blank) {
            f.once(cc.Node.EventType.TOUCH_START, function () {
                console.log("点击空白处 - 下载");
                e.reportAdClick({
                    adId: t.adId
                });
                r.hideNativeAds();
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
            cc.assetManager.loadRemote(
                d,
                {
                    ext: ".png"
                },
                function (t, e) {
                    if (!t && i) {
                        i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                    }
                }
            );
        }
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
            cc.assetManager.loadRemote(
                t.icon,
                {
                    ext: ".png"
                },
                function (t, e) {
                    if (!t && i) {
                        i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                    }
                }
            );
        }
    };
    return e;
})(require("./BasePlatform").BasePlatform);
exports.OPPO = i;
