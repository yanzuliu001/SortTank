var r;
exports.VIVO = void 0;
var $basePlatform = require("./BasePlatform");
var $audioManager = require("./AudioManager");
var s = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.sdk = window.qg;
        e._rewardAds = null;
        e._rewardAdsCb = null;
        e._rewardHasShow = !1;
        e._rewardHasLoad = !1;
        e._banner = null;
        e._insert = null;
        e._isMute = !1;
        e._nativeAds = [];
        e.musicVolume = null;
        e.musicMute = null;
        e.bgm = null;
        e.customAd_1 = null;
        e.customAd_2 = null;
        e.hideCb = null;
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
                return void (
                    this._rewardAdsCb ||
                    ((this.bgm = $audioManager.Audio.currentBgm),
                    $audioManager.Audio.stopMusic(),
                    (this._rewardAdsCb = t),
                    (this._rewardHasShow = !1),
                    this._rewardAds ||
                        ((this._rewardAds = this.sdk.createRewardedVideoAd({
                            posId: this._config.rewardID
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
                                $audioManager.Audio.playMusic(e.bgm);
                            }
                        }),
                        this._rewardAds.onError(function (t) {
                            e._rewardHasLoad = !1;
                            console.log("[platform] [VIVOPlatform] showRewardAds", t);
                            if (e._rewardAdsCb) {
                                e._rewardAdsCb(-1);
                                e._rewardAdsCb = null;
                                $audioManager.Audio.playMusic(e.bgm);
                            }
                        })),
                    this._rewardHasLoad && !this._rewardHasShow
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
                    posId: t.id || this._config.bannerID,
                    style: {}
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
                    console.log("[platform] [VIVOPlatform] showBanner", t);
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
    e.prototype.showInsert = function () {
        var t = this;
        if (this.sdk.createInterstitialAd && this._config.insertID) {
            if (this._insert) {
                this._insert.load().then(function () {
                    t._insert
                        .show()
                        .then(function () {})
                        .catch(function (t) {
                            console.log("[platform] [VIVOPlatform] showInsert", t);
                        });
                });
            } else {
                this._insert ||
                    ((this._insert = this.sdk.createInterstitialAd({
                        posId: this._config.insertID
                    })),
                    this._insert.onLoad(function () {
                        if (t._insert) {
                            t._insert
                                .show()
                                .then(function () {})
                                .catch(function (t) {
                                    console.log("[platform] [VIVOPlatform] showInsert", t);
                                });
                        }
                    }),
                    this._insert.onClose(function () {
                        if (t._insert) {
                            t._insert.destroy();
                            t._insert = null;
                        }
                    }),
                    this._insert.onError(function (e) {
                        console.log("[platform] [ZJTDPlatform] showInsert", e);
                        if (e && 1003 == e.errCode && t._insert) {
                            t._insert.destroy();
                            t._insert = null;
                        }
                    }));
            }
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
                posId: t.id || this._config.nativeID
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
                console.log("[platform] [VIVOPlatform] showNativeAd", o);
                if (t && t.container) {
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
            var f = t.imgUrlList[Math.floor(Math.random() * t.imgUrlList.length)];
            cc.assetManager.loadRemote(
                f,
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
    e.prototype.showCustomAd_1 = function (t, e) {
        var n = this;
        if (this.sdk.createCustomAd) {
            if (this.customAd_1) {
                this.customAd_1.destroy();
            }
            var r = cc.winSize.height * (352 / 1334);
            console.log("showCustomAd id", t);
            this.hideCb = e;
            this.customAd_1 = this.sdk.createCustomAd({
                posId: t,
                style: {
                    top: r
                }
            });
            this.customAd_1.onLoad(function () {
                console.log("showCustomAd onLoad 111 成功");
            });
            this.customAd_1.onClose(function () {
                if (n.hideCb) {
                    console.log("关闭回调");
                    n.hideCb();
                }
            });
            this.customAd_1.onError(function (t) {
                console.log("[platform] [VIVOPlatform] onError1", JSON.stringify(t));
            });
            console.log("showCustomAd id 1111", t);
            this.customAd_1
                .show()
                .then(function () {
                    console.log("[platform] [VIVOPlatform] showCustomAd 成功显示");
                })
                .catch(function (t) {
                    console.log("[platform] [VIVOPlatform] showCustomAd", JSON.stringify(t));
                });
        }
    };
    e.prototype.hideCustomAd_1 = function () {
        if (this.customAd_1) {
            this.customAd_1.hide();
            this.customAd_1.destroy();
        }
    };
    e.prototype.showCustomAd_2 = function (t) {
        if (this.sdk.createCustomAd) {
            if (this.customAd_2) {
                this.customAd_2.destroy();
            }
            var e = cc.winSize.height - 350;
            console.log("showCustomAd id", t);
            this.customAd_2 = this.sdk.createCustomAd({
                posId: t,
                style: {
                    top: e
                }
            });
            this.customAd_2.onLoad(function () {
                console.log("showCustomAd onLoad 111 成功");
            });
            this.customAd_2.onError(function (t) {
                console.log("[platform] [VIVOPlatform] onError2", JSON.stringify(t));
            });
            console.log("showCustomAd id 2222", t);
            this.customAd_2
                .show()
                .then(function () {
                    console.log("[platform] [VIVOPlatform] showCustomAd 成功显示");
                })
                .catch(function (t) {
                    console.log("[platform] [VIVOPlatform] showCustomAd", JSON.stringify(t));
                });
        }
    };
    e.prototype.hideCustomAd_2 = function () {
        if (this.customAd_2) {
            this.customAd_2.hide();
            this.customAd_2.destroy();
        }
    };
    return e;
})($basePlatform.BasePlatform);
exports.VIVO = s;
