var r;
var $baseUI = require("./BaseUI");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $userConst = require("./UserConst");
var $eventManager = require("./EventManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $configUtils = require("./ConfigUtils");
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $utils = require("./Utils");
var $xMADUtils = require("./XMADUtils");
var _ = cc._decorator;
var b = _.ccclass;
var S =
    (_.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.isEnterUgc = !1;
            e.isLoadingScene = !1;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("giveUpBtn", this.clickGiveUp, this);
            this.addBtnOn("videoBtn", this.clickVideo, this);
            this.initView();
        };
        e.prototype.onEnable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                $xMADUtils.XMAD.showBannerFeed();
            } else {
                if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                    $oPPOAndroidAdUtils.OPPOAndroidAd.showLargeFeed();
                } else {
                    $platformManager.Platform.is($platformConst.EPlatform.OPPO) &&
                        $oPPOMiniADUtils.OPPOMiniAD.showLargeFeed();
                }
            }
        };
        e.prototype.onDisable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
            }
            $platformManager.Platform.hideNativeAds();
        };
        e.prototype.initView = function () {
            var t = this;
            var e = $utils.Utils.randomNum(80, 92);
            this.dict.rate.getComponent(cc.Label).string = $languageManager.default.formatStr(
                "超过%d%的玩家解锁该主题",
                e
            );
            var n = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE_UNLOCK_ID);
            cc.resources.load("texture/newBanner/" + n, function (e, n) {
                if (e) {
                    return console.log(e);
                }
                t.dict.img.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
            });
        };
        e.prototype.clickGiveUp = function () {
            $popupManager.default.hide();
        };
        e.prototype.clickVideo = function () {
            var t = this;
            var e = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE_UNLOCK_ID);
            console.log("点击看视频解锁");
            $platformManager.Platform.showRewardAds(function (n) {
                if (0 == n) {
                    if (t.isEnterUgc) {
                        return;
                    }
                    cc.game.emit("gamelog", "rewarde_btn011");
                    t.isEnterUgc = !0;
                    var r = $userManager.User.get($userConst.UserData.UNLOCK_MODE_LIST) || [];
                    r.push(e);
                    $userManager.User.set($userConst.UserData.UNLOCK_MODE_LIST, r);
                    t.sucEnterByMode(e);
                    $popupManager.default.hideAll();
                }
            });
        };
        e.prototype.sucEnterByMode = function (t) {
            if (!this.isLoadingScene) {
                this.isLoadingScene = !0;
                $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t);
                var e = $userManager.User.get($userConst.UserData.LEVEL_LIST);
                $configUtils.ConfigUtils.setNextModeID();
                var n = 1;
                $configUtils.ConfigUtils.getDataByID(t, function (r) {
                    n = r.amount;
                    if (e[t] > n) {
                        $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
                    } else {
                        $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, e[t]);
                    }
                    $eventManager.Event.emit($eventConst.default.enterNewMode);
                });
            }
        };
        return __decorate([b], e);
    })($baseUI.default));
exports.default = S;
