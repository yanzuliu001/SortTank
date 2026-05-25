var r;
var $baseUI = require("./BaseUI");
var $recycleScroll = require("./RecycleScroll");
var $platformConst = require("./PlatformConst");
var $sceneConst = require("./SceneConst");
var $userConst = require("./UserConst");
var $platformManager = require("./PlatformManager");
var $sceneManager = require("./SceneManager");
var $userManager = require("./UserManager");
var $configUtils = require("./ConfigUtils");
var $xMADUtils = require("./XMADUtils");
var $vIVOADUtils = require("./VIVOADUtils");
var $configManager = require("./ConfigManager");
var $configConst = require("./ConfigConst");
var $popupManager = require("./PopupManager");
var $shuShuConst = require("./ShuShuConst");
var $playItem = require("./PlayItem");
var S = cc._decorator;
var k = S.ccclass;
var C = S.property;
var M = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.scroll = null;
        e._data = null;
        e.itemsData = [];
        e.childrenLength = 6;
        e.currentUnlockLevel = 1;
        e.currentAlreadyPlay = [];
        e.currentAlreadyUnlock = [];
        e.playList = [];
        e.isLoadingScene = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
        this.addBtnOn("noBtn", this.noBtn, this);
        this.initView();
    };
    e.prototype.noBtn = function () {
        $popupManager.default.hide();
    };
    e.prototype.onItemRender = function (t, e) {
        var n = e.getComponent($playItem.default);
        var r =
            ($playItem.default.state.Normal,
            {
                index: t,
                modeID: this.playList[t].theme,
                modeName: this.playList[t].themeName
            });
        n.setData(r);
    };
    e.prototype.onItemClicked = function () {};
    e.prototype.mode1Btn = function () {
        var t = this;
        cc.game.emit("gamelog", "modebtn_1");
        if (this.dict.mode1BtnIcon.active) {
            $platformManager.Platform.showRewardAds(function (e) {
                if (0 == e) {
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                        id: "012",
                        lv: 1,
                        mode: 1
                    });
                    $userManager.User.set("mode1Btn", 1);
                    t.enterByMode(1);
                }
            });
        } else {
            this.enterByMode(1);
        }
    };
    e.prototype.mode2Btn = function () {
        var t = this;
        cc.game.emit("gamelog", "modebtn_2");
        if (this.dict.mode2BtnIcon.active) {
            $platformManager.Platform.showRewardAds(function (e) {
                if (0 == e) {
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                        id: "013",
                        lv: 1,
                        mode: 2
                    });
                    $userManager.User.set("mode2Btn", 1);
                    t.enterByMode(2);
                }
            });
        } else {
            this.enterByMode(2);
        }
    };
    e.prototype.mode3Btn = function () {
        var t = this;
        if (this.dict.mode3BtnIcon.active) {
            $platformManager.Platform.showRewardAds(function (e) {
                if (0 == e) {
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                        id: "014",
                        lv: 1,
                        mode: 3
                    });
                    $userManager.User.set("mode3Btn", 1);
                    t.enterByMode(3);
                }
            });
        } else {
            this.enterByMode(3);
        }
    };
    e.prototype.enterByMode = function (t) {
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
                $sceneManager.default.loadScene($sceneConst.SceneConst.GAME);
            });
        }
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
        if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
            $platformManager.Platform.removeBannerFeed();
        }
        $platformManager.Platform.hideCustomAd();
        $platformManager.Platform.hideCustomAd_1();
        $platformManager.Platform.hideCustomAd_2();
    };
    e.prototype.initView = function () {
        var t = this;
        $configManager.Config.get($configConst.ConfigConst.THEME).then(function (e) {
            e.sort(function (t, e) {
                return t.sort - e.sort;
            });
            e.forEach(function (e, n) {
                if (0 != n) {
                    t.playList.push(e);
                }
            });
            console.log("playList", t.playList);
            t.scroll.onItemRender = t.onItemRender.bind(t);
            t.scroll.onItemClicked = t.onItemClicked.bind(t);
            t.scroll.numItems = t.playList.length;
        });
    };
    __decorate([C($recycleScroll.default)], e.prototype, "scroll", void 0);
    return __decorate([k], e);
})($baseUI.default);
exports.default = M;
