var r;
exports.QQ = void 0;
var $basePlatform = require("./BasePlatform");
var $audioManager = require("./AudioManager");
var $bmsManager = require("./BmsManager");
var c = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.sdk = window.qq;
        e._rewardAds = null;
        e._rewardAdsCb = null;
        e._rewardHasShow = !1;
        e._rewardHasLoad = !1;
        e._banner = null;
        e._insert = null;
        e._block = null;
        e._appBox = null;
        e._toastTimer = null;
        e._isMute = !1;
        e.bgm = null;
        console.log("qq");
        e.sdk.showShareMenu({
            withShareTicket: !0
        });
        e.sdk.onShareAppMessage(function () {
            return e.getShareData();
        });
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
                    (this.bgm = $audioManager.Audio.currentBgm),
                    $audioManager.Audio.stopMusic(),
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
                            e._rewardAdsCb(t.isEnded ? 0 : 1);
                            clearTimeout(e._toastTimer);
                            $audioManager.Audio.playMusic(e.bgm);
                        }),
                        this._rewardAds.onError(function (t) {
                            e._rewardHasLoad = !1;
                            console.log("[platform] [QQPlatform] showRewardAds", t);
                            e._rewardAdsCb(-1);
                            clearTimeout(e._toastTimer);
                            $audioManager.Audio.playMusic(e.bgm);
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
    e.prototype.preloadBanner = function (t) {
        var e = this;
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
                    adUnitId: t.id || this._config.bannerID,
                    style: {
                        left: 9999,
                        top: 9999,
                        width: 300,
                        height: 300
                    },
                    adIntervals: 30
                });
                this._banner.onLoad(function () {
                    console.log("[platform] [QQPlatform] showBanner", "onLoad 1");
                });
                this._banner.onError(function (t) {
                    console.log("[platform] [QQPlatform] preloadBanner", t);
                });
                this._banner.onResize(function (t) {
                    console.log("[platform] [QQPlatform] showBanner", "onResize 1");
                    var n = e.sdk.getSystemInfoSync();
                    e._banner.style.top = n.windowHeight - t.height;
                    e._banner.style.left = (n.windowWidth - t.width) / 2;
                });
            }
        }
    };
    e.prototype.showBanner = function (t, e) {
        var n = this;
        if (void 0 === t) {
            t = {
                id: ""
            };
        }
        if (this.sdk.createBannerAd && this._config.bannerID) {
            if (this._banner) {
                if (this._banner) {
                    var r = this._banner.show();
                    if (r) {
                        r.then(function () {
                            if (e) {
                                e(0);
                            }
                        }).catch(function (t) {
                            console.log("[platform] [QQPlatform] showBanner", "show error 2", t);
                            if (e) {
                                e(1);
                            }
                        });
                    } else {
                        if (e) {
                            e(1);
                        }
                    }
                }
            } else {
                this._banner = this.sdk.createBannerAd({
                    adUnitId: t.id || this._config.bannerID,
                    style: {
                        left: 9999,
                        top: 9999,
                        width: 300,
                        height: 300
                    },
                    adIntervals: 30
                });
                this._banner.onLoad(function () {
                    if (n._banner) {
                        var t = n._banner.show();
                        if (t) {
                            t.then(function () {
                                if (e) {
                                    e(0);
                                }
                            }).catch(function (t) {
                                console.log("[platform] [QQPlatform] showBanner", "show error 2", t);
                                if (e) {
                                    e(1);
                                }
                            });
                        } else {
                            if (e) {
                                e(1);
                            }
                        }
                    } else {
                        if (e) {
                            e(0);
                        }
                    }
                });
                this._banner.onError(function (t) {
                    console.log("[platform] [QQPlatform] showBanner", t);
                    if (e) {
                        e(1);
                    }
                });
                this._banner.onResize(function (t) {
                    var e = n.sdk.getSystemInfoSync();
                    n._banner.style.top = e.windowHeight - t.height;
                    n._banner.style.left = (e.windowWidth - t.width) / 2;
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
                            console.log("[platform] [QQPlatform] showInsert", t);
                        });
                });
            } else {
                this._insert ||
                    ((this._insert = this.sdk.createInterstitialAd({
                        adUnitId: this._config.insertID
                    })),
                    this._insert.onLoad(function () {
                        if (t._insert) {
                            t._insert
                                .show()
                                .then(function () {})
                                .catch(function (t) {
                                    console.log("[platform] [QQPlatform] showInsert", t);
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
                        console.log("[platform] [QQPlatform] showInsert", e);
                        if (e && 1003 == e.errCode && t._insert) {
                            t._insert.destroy();
                            t._insert = null;
                        }
                    }));
            }
        }
    };
    e.prototype.showBlockAds = function (t) {
        var e = this;
        if (void 0 === t) {
            t = {
                id: "",
                left: 0,
                top: 0
            };
        }
        if (this.sdk.createBlockAd && this._config.blockID) {
            if (this._block) {
                //
            } else {
                this._block = this.sdk.createBlockAd({
                    adUnitId: t.id || this._config.blockID,
                    style: {
                        left: t.left,
                        top: t.top
                    },
                    size: 1,
                    orientation: "landscape",
                    adIntervals: 60
                });
                this._block.onError(function (t) {
                    console.log("[platform] [QQPlatform] showBlockAds", t);
                });
                this._block.onLoad(function () {
                    console.log("[platform] [QQPlatform] showBlockAds onLoad");
                    e._block.show();
                });
            }
        }
    };
    e.prototype.hideBlockAds = function () {
        if (this._block) {
            this._block.destroy();
            this._block = null;
        }
    };
    e.prototype.showAppBoxAds = function () {
        var t = this;
        if (this.sdk.createAppBox && this._config.boxID) {
            if (this._appBox) {
                //
            } else {
                this._appBox = this.sdk.createAppBox({
                    adUnitId: this._config.boxID
                });
                this._appBox.onClose(function () {
                    console.log("[platform] [QQPlatform] showAppBox onClose");
                    t.hideAppBoxAds();
                });
                this._appBox
                    .load()
                    .then(function () {
                        console.log("[platform] [QQPlatform] showAppBox onLoad");
                        t._appBox.show();
                    })
                    .catch(function (t) {
                        console.log("[platform] [QQPlatform] showAppBox onError", t);
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
    return e;
})($basePlatform.BasePlatform);
exports.QQ = c;
