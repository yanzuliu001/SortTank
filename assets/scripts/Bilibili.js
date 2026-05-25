var r;
exports.Bilibili = void 0;
var $basePlatform = require("./BasePlatform");
var $eventConst = require("./EventConst");
var $userConst = require("./UserConst");
var $audioManager = require("./AudioManager");
var $eventManager = require("./EventManager");
var $userManager = require("./UserManager");
var f = (function (t) {
    function e() {
        var e = t.call(this) || this;
        e.sdk = window.bl;
        e._rewardAds = null;
        e._rewardAdsCb = null;
        e._rewardHasShow = !1;
        e._rewardHasLoad = !1;
        e._banner = null;
        e._insert = null;
        e._block = null;
        e._isMute = null;
        e._ta = null;
        e._shareTime = 0;
        e._shareCb = null;
        e.reportScene();
        if (e.sdk && e.sdk.onShow) {
            e.sdk.onShow(function (t) {
                setTimeout(function () {
                    if ($audioManager.Audio.currentBgm) {
                        $audioManager.Audio.playMusic($audioManager.Audio.currentBgm, !0);
                    }
                }, 200);
                var n = t.scene;
                console.log("## res : ", JSON.stringify(t));
                console.log("## scene : ", n, "10002" == n, n.includes("10002"));
                if ("021036" == n) {
                    e.triggerSidebarEnter();
                }
                if ("10002" == n) {
                    console.log("从桌面进入，发送奖励");
                    window.sucAddDeskBtn = !0;
                    cc.game.emit("sucAddDeskBtn", !0);
                }
                window.bl.checkShortcut({
                    success: function (t) {
                        console.log("检查快捷方式", t.status);
                        if (t.status && t.status.exist) {
                            window.sucAddDeskBtn = !0;
                            cc.game.emit("sucAddDeskBtn", !0);
                        }
                    },
                    fail: function (t) {
                        console.log("检查快捷方式失败", t.errMsg);
                    }
                });
            });
        }
        var n = e.sdk.getLaunchOptionsSync();
        if (n.scene) {
            var r = n.scene;
            console.log("## options : ", JSON.stringify(n));
            console.log("## scene : ", r);
            if ("021036" == r) {
                e.triggerSidebarEnter();
            }
            if ("10002" == r) {
                window.sucAddDeskBtn = !0;
            }
        }
        return e;
    }
    __extends(e, t);
    e.prototype.triggerSidebarEnter = function () {
        if (0 == ($userManager.User.get($userConst.UserData.EnterSidebar) || 0)) {
            cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
                state: "complete"
            });
            $userManager.User.set($userConst.UserData.EnterSidebar, 1);
            $eventManager.Event.emit($eventConst.default.EnterSidebar);
        }
    };
    e.prototype.getInstance = function () {
        return this.sdk;
    };
    e.prototype.showRewardAds = function (t) {
        var e = this;
        if (this.sdk.createRewardedVideoAd) {
            if (this._config.rewardID) {
                return void (
                    this._rewardAdsCb ||
                    ((this._isMute = $audioManager.Audio.getMusicMute()),
                    $audioManager.Audio.setMusicMute(1),
                    (this._rewardAdsCb = t),
                    (this._rewardHasShow = !1),
                    cc.game.pause(),
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
                            cc.game.resume();
                            e._rewardAdsCb(t.isEnded ? 0 : 1);
                            e._rewardAdsCb = null;
                            $audioManager.Audio.setMusicMute(e._isMute);
                        }),
                        this._rewardAds.onError(function (t) {
                            e._rewardHasLoad = !1;
                            cc.game.resume();
                            console.log("[platform] [BilibiPlatform] showRewardAds", t);
                            e._rewardAdsCb(-1);
                            e._rewardAdsCb = null;
                            $audioManager.Audio.setMusicMute(e._isMute);
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
                id: "",
                left: null,
                top: null
            };
        }
    };
    e.prototype.hideBanner = function () {};
    e.prototype.showInsert = function () {};
    e.prototype.reportScene = function () {
        if (this.sdk) {
            this.sdk.reportScene({
                sceneId: 7,
                success: function (t) {
                    console.log("## ", JSON.stringify(t));
                },
                fail: function (t) {
                    console.log(t);
                }
            });
        }
    };
    return e;
})($basePlatform.BasePlatform);
exports.Bilibili = f;
