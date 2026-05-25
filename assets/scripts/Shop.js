var r;
var $baseUI = require("./BaseUI");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $sceneConst = require("./SceneConst");
var $userConst = require("./UserConst");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $sceneManager = require("./SceneManager");
var $userManager = require("./UserManager");
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $xMADUtils = require("./XMADUtils");
var w = cc._decorator;
var _ = w.ccclass;
var b =
    (w.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
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
            console.log("测试", $sceneManager.default.getCurrentScene());
            if ($sceneManager.default.getCurrentScene() == $sceneConst.SceneConst.MAIN) {
                cc.game.emit("gamelog", "page003");
            } else {
                if ($sceneManager.default.getCurrentScene() == $sceneConst.SceneConst.GAME) {
                    cc.game.emit("gamelog", "page004");
                }
            }
            if (1 == $userManager.User.getTempData($userConst.TempData.current_key_type)) {
                this.dict.amount.getComponent(cc.Label).string = "x3";
            }
        };
        e.prototype.clickGiveUp = function () {
            cc.game.emit("gamelog", "btn011");
            $popupManager.default.hide();
        };
        e.prototype.clickVideo = function () {
            cc.game.emit("gamelog", "btn012");
            if ($userManager.User.getTempData($userConst.TempData.current_key_type)) {
                $platformManager.Platform.showRewardAds(function (t) {
                    if (0 == t) {
                        cc.game.emit("gamelog", "rewarde_btn010");
                        var e = $userManager.User.get($userConst.UserData.KEY);
                        $userManager.User.set($userConst.UserData.KEY, e + 3);
                        $eventManager.Event.emit($eventConst.default.KEY_EFFECT);
                        $userManager.User.set($userConst.UserData.hasUseKey, 1);
                    }
                });
            } else {
                $platformManager.Platform.showRewardAds(function (t) {
                    if (0 == t) {
                        cc.game.emit("gamelog", "rewarde_btn001");
                        var e = $userManager.User.get($userConst.UserData.KEY);
                        $userManager.User.set($userConst.UserData.KEY, e + 1);
                        $eventManager.Event.emit($eventConst.default.KEY_EFFECT);
                    }
                });
            }
        };
        return __decorate([_], e);
    })($baseUI.default));
exports.default = b;
