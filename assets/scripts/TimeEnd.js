var r;
var $baseUI = require("./BaseUI");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $popupConst = require("./PopupConst");
var $userConst = require("./UserConst");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $bmsManager = require("./BmsManager");
var $eventManager = require("./EventManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $tipManager = require("./TipManager");
var $userManager = require("./UserManager");
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $vIVOADUtils = require("./VIVOADUtils");
var $xMADUtils = require("./XMADUtils");
var $shuShuConst = require("./ShuShuConst");
var M = cc._decorator;
var P = M.ccclass;
var T =
    (M.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.text = null;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("noBtn", this.noBtn, this);
            this.addBtnOn("yesBtn", this.yesBtn, this);
            this.addBtnOn("answerBtn", this.answerBtn, this);
            this.addBtnOn("answerBtn2", this.answerBtn, this);
            this.addBtnOn("jumpBtn", this.jumpBtn, this);
            this.addBtnOn("resortBtn", this.resortBtn, this);
            this.addBtnOn("yesCardBtn", this.yesCardBtn, this);
            $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
            $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
            this.initView();
        };
        e.prototype.onEnable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                $xMADUtils.XMAD.showLargeFeed();
                $xMADUtils.XMAD.showInterstitialFeed_result();
            } else {
                if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                    $oPPOAndroidAdUtils.OPPOAndroidAd.showLargeFeed(),
                        $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_result();
                } else {
                    if ($platformManager.Platform.is($platformConst.EPlatform.OPPO)) {
                        $oPPOMiniADUtils.OPPOMiniAD.showLargeFeed(),
                            $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_result();
                    } else {
                        $platformManager.Platform.is($platformConst.EPlatform.VIVO) &&
                            $vIVOADUtils.VIVOAD.showCustomAd_1(function () {
                                $vIVOADUtils.VIVOAD.showCustomAd_2();
                            });
                    }
                }
            }
        };
        e.prototype.onDisable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                $xMADUtils.XMAD.removeLargePicFeed();
            } else {
                if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                    $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
                }
            }
            $platformManager.Platform.hideNativeAds();
            $platformManager.Platform.hideCustomAd1();
            $platformManager.Platform.hideCustomAd2();
            $platformManager.Platform.hideCustomAd_1();
            $platformManager.Platform.hideCustomAd_2();
            cc.game.emit("isTimeEnd");
        };
        e.prototype.noBtn = function () {
            var t = $userManager.User.getTempData("levelTime");
            var e = (new Date().getTime() - t) / 1e3;
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_End, {
                EndType: 1,
                Duration: e,
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
            });
            cc.game.emit("onRestartReset");
            $popupManager.default.hide();
        };
        e.prototype.yesCardBtn = function () {
            var t = $localStorageManager.default.get($localStorageConst.default.cardAmount) || 0;
            if (t < 1) {
                $tipManager.Tip.show($languageManager.default.formatStr("万能卡不足！"));
                return void $popupManager.default.show($popupConst.PopupConst.UniversalCard);
            }
            $localStorageManager.default.set($localStorageConst.default.cardAmount, t - 1);
            $eventManager.Event.emit($eventConst.default.extendTime);
            if (0 == $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)) {
                cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                    id: "004",
                    lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                    mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                });
            } else {
                cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                    id: "005",
                    lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                    mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                });
            }
            $popupManager.default.hide();
        };
        e.prototype.yesBtn = function () {
            if (this.dict.addTimeShareIcon.active) {
                cc.game.emit("timeEnd_addTime");
            } else {
                $platformManager.Platform.showRewardAds(function (t) {
                    if (0 == t) {
                        $eventManager.Event.emit($eventConst.default.extendTime);
                        $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
                        if (0 == $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)) {
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                                id: "004",
                                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                            });
                        } else {
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                                id: "005",
                                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                            });
                        }
                        $popupManager.default.hide();
                    }
                });
            }
        };
        e.prototype.jumpBtn = function () {
            $platformManager.Platform.showRewardAds(function (t) {
                if (0 == t) {
                    $userManager.User.setTempData("isNeedInsert", !1);
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                        id: "011",
                        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                    });
                    cc.game.emit("game_success2");
                    $popupManager.default.hide();
                }
            });
        };
        e.prototype.answerBtn = function () {
            if (this.dict.tipShareIcon.active) {
                cc.game.emit("timeEnd_answerBtn");
            } else {
                $platformManager.Platform.showRewardAds(function (t) {
                    if (0 == t) {
                        $eventManager.Event.emit($eventConst.default.restartAnswer);
                        $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
                        if (0 == $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)) {
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                                id: "014",
                                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                            });
                        } else {
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                                id: "015",
                                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                            });
                        }
                        $popupManager.default.hide();
                    }
                });
            }
        };
        e.prototype.initView = function () {
            $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
            var t = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
            var e =
                ($userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                $bmsManager.BMS.getKey("changeStage"));
            if (0 == t) {
                if (e) {
                    var n = $userManager.User.get($userConst.TempData.isUnlockTip) || !1;
                    this.dict.jumpBtn.active = !0;
                    this.dict.answerBtn.active = !1;
                    this.dict.answerBtn2.active = !n;
                    this.dict.answerBtn2.active = !1;
                } else {
                    n = $userManager.User.get($userConst.TempData.isUnlockTip) || !1;
                    this.dict.answerBtn.active = !n;
                    this.dict.answerBtn.active = !1;
                }
            }
            this.dict.answerBtn.active = !1;
            this.initShareView();
            if ($platformManager.Platform.getConfig().hasShare) {
                this.dict.resortBtn.active = !0;
            }
            if ($platformManager.Platform.getConfig().hasPurchase) {
                this.dict.yesCardBtn.active = !0;
            }
            if ("all" != $bmsManager.BMS.getKey("share")) {
                this.dict.resortBtn.active = !1;
            }
        };
        e.prototype.resortBtn = function () {
            $platformManager.Platform.share();
        };
        e.prototype.initShareView = function () {
            $userManager.User.get($userConst.UserData.getBoreByShareTimes);
            var t = $userManager.User.get($userConst.UserData.getTipShareTimes);
            var e =
                ($userManager.User.get($userConst.UserData.getResetByShareTimes),
                $userManager.User.get($userConst.UserData.getDelayedByShareTimes));
            if ($platformManager.Platform.getConfig().hasShare && "all" == $bmsManager.BMS.getKey("share")) {
                if (t) {
                    (this.dict.tipVideoIcon.getComponent(cc.Sprite).enabled = !1), (this.dict.tipShareIcon.active = !0);
                } else {
                    (this.dict.tipVideoIcon.getComponent(cc.Sprite).enabled = !0), (this.dict.tipShareIcon.active = !1);
                }
                if (e) {
                    (this.dict.addTimeVideoIcon.getComponent(cc.Sprite).enabled = !1),
                        (this.dict.addTimeShareIcon.active = !0);
                } else {
                    (this.dict.addTimeVideoIcon.getComponent(cc.Sprite).enabled = !0),
                        (this.dict.addTimeShareIcon.active = !1);
                }
            }
        };
        return __decorate([P], e);
    })($baseUI.default));
exports.default = T;
