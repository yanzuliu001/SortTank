var r;
var $platformConst = require("./PlatformConst");
var $userConst = require("./UserConst");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $tipManager = require("./TipManager");
var $userManager = require("./UserManager");
var $vIVOADUtils = require("./VIVOADUtils");
var $xMADUtils = require("./XMADUtils");
var $shuShuConst = require("./ShuShuConst");
var $uIBase = require("./UIBase");
var $configManager = require("./ConfigManager");
var $configConst = require("./ConfigConst");
var $utils = require("./Utils");
var $assetManager = require("./AssetManager");
var M = cc._decorator;
var P = M.ccclass;
var T =
    (M.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            var e = $localStorageManager.default.get($localStorageConst.default.todaySignIn) || 0;
            var n = $localStorageManager.default.get($localStorageConst.default.todaySignInVideo) || 0;
            var r = $localStorageManager.default.get($localStorageConst.default.signInDays) || 0;
            $localStorageManager.default.set($localStorageConst.default.todaySignIn, e);
            $localStorageManager.default.set($localStorageConst.default.todaySignInVideo, n);
            $localStorageManager.default.set($localStorageConst.default.signInDays, r);
            this.localStorageUIData[$localStorageConst.default.signInDays] = this.updateSignInDays.bind(this);
            this.localStorageUIData[$localStorageConst.default.todaySignIn] = this.updateTodaySignIn.bind(this);
            this.localStorageUIData[$localStorageConst.default.todaySignInVideo] =
                this.updateTodaySignInVideo.bind(this);
            this.localStorageUIData[$localStorageConst.default.todayReceiveCard] =
                this.updateTodayReceiveCard.bind(this);
            this.addBtnOn("noBtn", this.noBtn, this);
            this.addBtnOn("videoBtn", this.videoBtn, this);
            this.addBtnOn("receiveBtn", this.receiveBtn, this);
            this.addBtnOn("cardBtn", this.cardBtn, this);
        };
        e.prototype.onEnable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                $xMADUtils.XMAD.showBannerFeed();
            } else {
                if ($platformManager.Platform.is($platformConst.EPlatform.VIVO)) {
                    $vIVOADUtils.VIVOAD.showCustomAd_1();
                }
            }
        };
        e.prototype.onDisable = function () {
            $platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID);
            $platformManager.Platform.hideCustomAd();
            $platformManager.Platform.hideCustomAd_1();
            $platformManager.Platform.hideCustomAd_2();
        };
        e.prototype.updateTodayReceiveCard = function () {
            this.dict.cardBtn.active = !1;
        };
        e.prototype.cardBtn = function () {
            var t = this;
            if ($localStorageManager.default.get($localStorageConst.default.todayReceiveCard)) {
                return $tipManager.Tip.show("今日已领取");
            }
            $platformManager.Platform.showRewardAds(function (e) {
                if (0 == e) {
                    t.cardReward(1);
                    $localStorageManager.default.set($localStorageConst.default.todayReceiveCard, 1);
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                        id: "078",
                        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                    });
                }
            });
        };
        e.prototype.cardReward = function (t) {
            var e = ($localStorageManager.default.get($localStorageConst.default.cardAmount) || 0) + t;
            $localStorageManager.default.set($localStorageConst.default.cardAmount, e);
            $tipManager.Tip.show($languageManager.default.formatStr("万能卡x%d", t));
        };
        e.prototype.updateTodaySignIn = function () {};
        e.prototype.updateTodaySignInVideo = function () {};
        e.prototype.updateSignInDays = function (t) {
            return __awaiter(this, void 0, void 0, function () {
                var e;
                var n;
                var r;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [4, $configManager.Config.get($configConst.ConfigConst.SignIn)];
                        case 1:
                            for (
                                e = o.sent(),
                                    this.dict.content2.children.forEach(function (t, n) {
                                        var r = $utils.Utils.paramObj(e[n].reward);
                                        t.getChildByName("day").getComponent(cc.Label).string =
                                            $languageManager.default.formatStr("第%d天", n + 1);
                                        if (6 == n) {
                                            t.getChildByName("coin").getComponent(cc.Label).string = "x" + r.coin;
                                            t.getChildByName("dragonBall").getComponent(cc.Label).string =
                                                "x" + r.dragonBall;
                                        } else {
                                            r.coin &&
                                                (t.getChildByName("amount").getComponent(cc.Label).string =
                                                    "x" + r.coin);
                                            r.slowDown &&
                                                (t.getChildByName("amount").getComponent(cc.Label).string =
                                                    "x" + r.slowDown);
                                            r.sortAmount &&
                                                (t.getChildByName("amount").getComponent(cc.Label).string =
                                                    "x" + r.sortAmount);
                                            r.unlockPos &&
                                                (t.getChildByName("amount").getComponent(cc.Label).string =
                                                    "x" + r.unlockPos);
                                            $assetManager.default
                                                .getRes("gameBundle", "texture/signIn/" + e[n].icon, cc.Texture2D)
                                                .then(function (r) {
                                                    t.getChildByName("icon").getComponent(cc.Sprite).spriteFrame =
                                                        new cc.SpriteFrame(r);
                                                    if ("unlockPos" == e[n].icon) {
                                                        t.getChildByName("icon").scale = 0.4;
                                                    }
                                                });
                                        }
                                        t.getChildByName("mask").active = !1;
                                        t.getChildByName("gou").active = !1;
                                        t.name = "" + n;
                                    }),
                                    console.log("val", t),
                                    n = 0;
                                n < t;
                                n++
                            ) {
                                console.log("index", n, t);
                                (r = this.dict.content2.children[n]).getChildByName("mask").active = !0;
                                r.getChildByName("gou").active = !0;
                                console.log("mask", r.getChildByName("mask").active);
                                console.log("gou", r.getChildByName("gou").active);
                            }
                            return [2];
                    }
                });
            });
        };
        e.prototype.noBtn = function () {
            $popupManager.default.hide();
        };
        e.prototype.videoBtn = function () {
            var t = this;
            var e = $localStorageManager.default.get($localStorageConst.default.todaySignIn) || 0;
            var n = $localStorageManager.default.get($localStorageConst.default.signInDays) || 0;
            if (e) {
                return $tipManager.Tip.show($languageManager.default.formatStr("今天已签到"));
            } else {
                if (n >= 7) {
                    return $tipManager.Tip.show($languageManager.default.formatStr("已经全部签到"));
                } else {
                    return void $platformManager.Platform.showRewardAds(function (e) {
                        if (0 == e) {
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                                id: "015",
                                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                            });
                            t.receiveBtn(2);
                        }
                    });
                }
            }
        };
        e.prototype.receiveBtn = function (t) {
            if (void 0 === t) {
                t = 1;
            }
            return __awaiter(this, void 0, void 0, function () {
                var e;
                var n;
                var r;
                var o;
                var i;
                var a;
                return __generator(this, function (s) {
                    switch (s.label) {
                        case 0:
                            e = $localStorageManager.default.get($localStorageConst.default.todaySignIn) || 0;
                            n = $localStorageManager.default.get($localStorageConst.default.signInDays) || 0;
                            return e
                                ? [2, $tipManager.Tip.show($languageManager.default.formatStr("今天已签到"))]
                                : n >= 7
                                ? [2, $tipManager.Tip.show("已经全部签到")]
                                : ($userManager.User.setTempData($userConst.TempData.isFirstBack, !1),
                                  $userManager.User.setTempData($userConst.TempData.isFirst, !1),
                                  $tipManager.Tip.show($languageManager.default.formatStr("签到成功！")),
                                  cc.game.emit("signInHint"),
                                  $localStorageManager.default.set($localStorageConst.default.signInDays, n + 1),
                                  $localStorageManager.default.set($localStorageConst.default.todaySignIn, 1),
                                  cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Sign, {
                                      type: t - 1,
                                      id: n + 1
                                  }),
                                  [4, $configManager.Config.get($configConst.ConfigConst.SignIn)]);
                        case 1:
                            for (i in ((r = s.sent()), (o = $utils.Utils.paramObj(r[n].reward))))
                                (a = $localStorageManager.default.get("" + i) || 0),
                                    $localStorageManager.default.set("" + i, a + o[i] * t);
                            return [2];
                    }
                });
            });
        };
        return __decorate([P], e);
    })($uIBase.default));
exports.default = T;
