var r;
var s = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.sdk = window.qg;
        e._rewardAds = null;
        e._rewardAdsCb = null;
        e._rewardHasShow = !1;
        e._rewardHasLoad = !1;
        e._banner = null;
        e._insert = null;
        e._nativeAds = [];
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
                    ((this._rewardAdsCb = t),
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
                                setTimeout(function () {
                                    e._rewardAdsCb(t.isEnded ? 0 : 1);
                                    e._rewardAdsCb = null;
                                }, 300);
                            }
                        }),
                        this._rewardAds.onError(function (t) {
                            e._rewardHasLoad = !1;
                            console.log("[platform] [HWPlatform] showRewardAds", JSON.stringify(t));
                            if (e._rewardAdsCb) {
                                setTimeout(function () {
                                    e._rewardAdsCb(-1);
                                    e._rewardAdsCb = null;
                                }, 300);
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
    e.prototype.showBanner = function (t) {
        if (void 0 === t) {
            t = {
                id: ""
            };
        }
        if (this._config.bannerID && !this._banner) {
            var e = this.sdk.getSystemInfoSync();
            console.log("on getSystemInfoSync: success =" + JSON.stringify(e));
            var n = e.safeArea.height;
            this._banner = this.sdk.createBannerAd({
                adUnitId: t.id || this._config.bannerID,
                style: {
                    top: n - 57,
                    left: 0,
                    height: 57,
                    width: 360
                }
            });
            this._banner.show();
            this._banner.onError(function (t) {
                console.log("[platform] [HWPlatform] showBanner", t);
            });
        }
    };
    e.prototype.hideBanner = function () {
        if (this._banner) {
            this._banner.hide();
            this._banner.destroy();
            this._banner = null;
        }
    };
    e.prototype.showInsert = function () {
        var t = this;
        if (this._config.insertID) {
            if (this._insert) {
                //
            } else {
                this._insert = this.sdk.createInterstitialAd({
                    adUnitId: this._config.insertID
                });
                this._insert.onLoad(function () {
                    console.log("[platform] [ZJTDPlatform] showInsert onLoad");
                    if (t._insert) {
                        t._insert.show();
                    }
                });
                this._insert.onClose(function () {
                    console.log("[platform] [ZJTDPlatform] showInsert onClose");
                    if (t._insert) {
                        t._insert.destroy();
                        t._insert = null;
                    }
                });
                this._insert.onError(function (e) {
                    console.log("[platform] [ZJTDPlatform] showInsert onError", e);
                    if (e && 1003 == e.errCode && t._insert) {
                        t._insert.destroy();
                        t._insert = null;
                    }
                });
                this._insert.load();
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
                        var a = function () {
                            console.log(i.adId);
                            r.reportAdShow({
                                adId: i.adId
                            });
                        };
                        a();
                        var s = n._nativeAds.findIndex(function (e) {
                            return e.container.name == t.container.name;
                        });
                        n._nativeAds[s].report = a;
                        cc.game.on(cc.game.EVENT_SHOW, a, n);
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
                console.log("[platform] [HWPlatform] showNativeAd", JSON.stringify(o));
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
            if (t.report) {
                cc.game.off(cc.game.EVENT_SHOW, t.report, this);
            }
            if (t.ads.destory) {
                t.ads.destory();
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
            s.getComponent(cc.Label).string = "" + (t.desc || "");
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
            s.getComponent(cc.Label).string = "" + (t.desc || "");
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
            var c = t.imgUrlList[Math.floor(Math.random() * t.imgUrlList.length)];
            cc.loader.load(
                {
                    url: c,
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
    e.prototype.login = function () {
        var t = this;
        return new Promise(function (e, n) {
            console.log("[platform] [HWPlatform] gameLoginWithReal");
            t.sdk.gameLoginWithReal({
                forceLogin: 1,
                appid: t._config.appID,
                success: function (t) {
                    console.log("[platform] [HWPlatform] gameLoginWithReal success:", JSON.stringify(t));
                    e(0);
                },
                fail: function (e, r) {
                    console.log("[platform] [HWPlatform] appid ", t._config.appID);
                    console.log("[platform] [HWPlatform] gameLoginWithReal fail:" + e + ", code:" + r);
                    n(7004 != r && 2012 != r ? -2 : -1);
                }
            });
        });
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
    e.prototype.canPlayGame = function () {
        var t = this;
        return new Promise(function (e) {
            return __awaiter(t, void 0, void 0, function () {
                var t;
                var n;
                return __generator(this, function (r) {
                    switch (r.label) {
                        case 0:
                            t = null;
                            try {
                                t = new Date();
                            } catch (o) {
                                t = new Date();
                            }
                            n = t.getDay();
                            return [5, 6, 7].some(function (t) {
                                return t == n;
                            })
                                ? [2, e(20 == t.getHours())]
                                : [4, this.isHoliday(t)];
                        case 1:
                            if (r.sent()) {
                                return [2, e(20 == t.getHours())];
                            } else {
                                return [2, e(!1)];
                            }
                    }
                });
            });
        });
    };
    e.prototype.getDate = function () {
        return new Promise(function (t, e) {
            var n = new XMLHttpRequest();
            n.open("HEAD", location.href, !0);
            n.onreadystatechange = function () {
                if (4 == n.readyState && 200 == n.status) {
                    return t(n.getResponseHeader("Date"));
                }
            };
            n.send(null);
            n.ontimeout = function () {
                return e();
            };
            n.onerror = function () {
                return e();
            };
        });
    };
    e.prototype.isHoliday = function (t) {
        return new Promise(function (e) {
            var n = new XMLHttpRequest();
            n.onreadystatechange = function () {
                if (4 == n.readyState && 200 == n.status) {
                    try {
                        var t = JSON.parse(n.response);
                        return e(t.holiday);
                    } catch (r) {
                        return e(!0);
                    }
                }
            };
            var r = t.getMonth() + 1;
            if (r < 10) {
                r = "0" + r;
            }
            var o = t.getDate();
            if (o < 10) {
                o = "0" + o;
            }
            n.open("GET", "http://timor.tech/api/holiday/info/" + t.getFullYear() + "-" + r + "-" + o, !0);
            n.send(null);
            n.ontimeout = function () {
                return e(!1);
            };
            n.onerror = function () {
                return e(!1);
            };
        });
    };
    return e;
})(require("./BasePlatform").BasePlatform);
exports.default = s;
