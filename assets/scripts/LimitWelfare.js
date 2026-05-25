var r;
var $baseUI = require("./BaseUI");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $userConst = require("./UserConst");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $tipManager = require("./TipManager");
var $userManager = require("./UserManager");
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $xMADUtils = require("./XMADUtils");
var $shuShuConst = require("./ShuShuConst");
var $localStorageManager = require("./LocalStorageManager");
var $localStorageConst = require("./LocalStorageConst");
var b = cc._decorator;
var S = b.ccclass;
var k =
    (b.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.type = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("noBtn", this.noBtn, this);
            this.addBtnOn("yesBtn", this.yesBtn, this);
            this.initView();
        };
        e.prototype.initView = function () {
            var t = $userManager.User.get($userConst.UserData.EnterSidebar) || 0;
            this.dict.lock.active = 1 != t;
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
            $eventManager.Event.on($eventConst.default.EnterSidebar, this.initView, this);
        };
        e.prototype.onDisable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
            }
            $platformManager.Platform.hideNativeAds();
            $platformManager.Platform.hideCustomAd1();
            $platformManager.Platform.hideCustomAd2();
            $platformManager.Platform.hideCustomAd_1();
            $platformManager.Platform.hideCustomAd_2();
            $eventManager.Event.off($eventConst.default.EnterSidebar, this.initView, this);
        };
        e.prototype.yesBtn = function () {
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
                id: "010"
            });
            if (this.dict.lock.active) {
                $tipManager.Tip.show("请从侧边栏进入游戏");
            } else {
                $userManager.User.set($userConst.UserData.EnterSidebar, 2);
                $tipManager.Tip.show("排序道具数量+1");
                var t = $localStorageManager.default.get($localStorageConst.default.SortAmount) || 0;
                t += 1;
                $localStorageManager.default.set($localStorageConst.default.SortAmount, t);
                cc.game.emit("updateSort");
                $eventManager.Event.emit($eventConst.default.hideLimitWelfareBtn);
                cc.game.emit("gamelog_Thinking", "Sidebar_Reward", {
                    state: "collect"
                });
                $popupManager.default.hide();
            }
        };
        e.prototype.noBtn = function () {
            $popupManager.default.hide();
        };
        return __decorate([S], e);
    })($baseUI.default));
exports.default = k;
