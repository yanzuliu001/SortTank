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
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $utils = require("./Utils");
var $xMADUtils = require("./XMADUtils");
var w = cc._decorator;
var _ = w.ccclass;
var b =
    (w.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.isEnterUgc = !1;
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
            cc.game.emit("gamelog", "page015");
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
            cc.game.emit("gamelog", "btn031");
            var e = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE_UNLOCK_ID);
            $platformManager.Platform.showRewardAds(function (n) {
                if (0 == n) {
                    if (t.isEnterUgc) {
                        return;
                    }
                    cc.game.emit("gamelog", "rewarde_btn009");
                    t.isEnterUgc = !0;
                    var r = $userManager.User.get($userConst.UserData.UNLOCK_MODE_LIST) || [];
                    r.push(e);
                    $userManager.User.set($userConst.UserData.UNLOCK_MODE_LIST, r);
                    $eventManager.Event.emit($eventConst.default.ENTER_ID, e);
                }
            });
        };
        return __decorate([_], e);
    })($baseUI.default));
exports.default = b;
