var r;
var $baseUI = require("./BaseUI");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $userConst = require("./UserConst");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $xMADUtils = require("./XMADUtils");
var y = cc._decorator;
var v = y.ccclass;
var w =
    (y.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("giveUpBtn", this.clickGiveUp, this);
            this.addBtnOn("defineBtn", this.clickDefine, this);
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
        e.prototype.clickGiveUp = function () {
            $popupManager.default.hide();
        };
        e.prototype.clickDefine = function () {
            var t = $userManager.User.get($userConst.UserData.KEY) - 2;
            if (t <= 0) {
                t = 0;
            }
            $userManager.User.set($userConst.UserData.KEY, t);
            $eventManager.Event.emit($eventConst.default.KEY_UPDATE);
            $userManager.User.setTempData("isNeedInsert", !1);
            if ($userManager.User.getTempData("cheats")) {
                $userManager.User.setTempData("isNeedInsert", !0);
            }
            setTimeout(function () {
                cc.game.emit("game_success2");
            }, 300);
            $popupManager.default.hide();
        };
        return __decorate([v], e);
    })($baseUI.default));
exports.default = w;
