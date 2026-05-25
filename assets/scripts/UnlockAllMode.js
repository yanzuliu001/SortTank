var r;
var $baseUI = require("./BaseUI");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $userConst = require("./UserConst");
var $eventManager = require("./EventManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $tipManager = require("./TipManager");
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
            var t = $userManager.User.get($userConst.UserData.UNLOCK_ALL_MODE_VIDEO_TIMES) || 0;
            $userManager.User.set($userConst.UserData.UNLOCK_ALL_MODE_VIDEO_TIMES, t);
            this.dict.amount.getComponent(cc.Label).string = $languageManager.default.formatStr("领取(%d/2)", t);
        };
        e.prototype.clickGiveUp = function () {
            $popupManager.default.hide();
        };
        e.prototype.clickVideo = function () {
            var t = this;
            console.log("点击看视频解锁");
            $platformManager.Platform.showRewardAds(function (e) {
                if (0 == e) {
                    cc.game.emit("gamelog", "rewarde_btn013");
                    var n = $userManager.User.get($userConst.UserData.UNLOCK_ALL_MODE_VIDEO_TIMES) + 1;
                    $userManager.User.set($userConst.UserData.UNLOCK_ALL_MODE_VIDEO_TIMES, n);
                    t.initView();
                    if (1 == n) {
                        $tipManager.Tip.show($languageManager.default.formatStr("还需再看1次激励视频解锁全主题"));
                    } else {
                        $tipManager.Tip.show($languageManager.default.formatStr("已解锁所有主题"));
                        var r = $userManager.User.get($userConst.UserData.LEVEL_LIST);
                        var o = [];
                        for (var i in r) o.push(Number(i));
                        $userManager.User.set($userConst.UserData.UNLOCK_MODE_LIST, o);
                        $eventManager.Event.emit($eventConst.default.updateUnlockAllMode, !0);
                        $popupManager.default.hide();
                    }
                }
            });
        };
        return __decorate([_], e);
    })($baseUI.default));
exports.default = b;
