var r;
var $baseUI = require("./BaseUI");
var $recycleScroll = require("./RecycleScroll");
var $audioConst = require("./AudioConst");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $sceneConst = require("./SceneConst");
var $userConst = require("./UserConst");
var $audioManager = require("./AudioManager");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $resManager = require("./ResManager");
var $sceneManager = require("./SceneManager");
var $userManager = require("./UserManager");
var $levelSelectItem = require("./LevelSelectItem");
var $configUtils = require("./ConfigUtils");
var $xMADUtils = require("./XMADUtils");
var $vIVOADUtils = require("./VIVOADUtils");
var k = cc._decorator;
var C = k.ccclass;
var M = k.property;
var P = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.scroll = null;
        e._data = null;
        e.itemsData = [];
        e.childrenLength = 6;
        e.currentUnlockLevel = 1;
        e.currentAlreadyPlay = [];
        e.currentAlreadyUnlock = [];
        e.isLoadingScene = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
        this.initView();
    };
    e.prototype.onEnable = function () {
        $eventManager.Event.on($eventConst.default.CLICK_BACK, this.clickBack, this);
        if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
            $xMADUtils.XMAD.showBannerFeed();
        } else {
            if ($platformManager.Platform.is($platformConst.EPlatform.VIVO)) {
                $vIVOADUtils.VIVOAD.showCustomAd_1();
            }
        }
    };
    e.prototype.onDisable = function () {
        $eventManager.Event.off($eventConst.default.CLICK_BACK, this.clickBack, this);
        if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
            $platformManager.Platform.removeBannerFeed();
        }
        $platformManager.Platform.hideCustomAd();
        $platformManager.Platform.hideCustomAd_1();
        $platformManager.Platform.hideCustomAd_2();
    };
    e.prototype.initView = function () {
        var t = this;
        var e = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
        var n = $userManager.User.get($userConst.UserData.LEVEL_LIST);
        var r = $userManager.User.get($userConst.UserData.ALREADY_PLAY);
        var o = $userManager.User.get($userConst.UserData.ALREADY_UNLOCK);
        var i = 1;
        var a = 1;
        if (n[e]) {
            i = n[e];
            this.currentUnlockLevel = i;
            this.currentAlreadyPlay = r[e];
            this.currentAlreadyUnlock = o[e];
        }
        cc.resources.load("texture/banner/" + e, function (e, n) {
            if (e) {
                return console.log(e);
            }
            t.dict.icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
        });
        $configUtils.ConfigUtils.getDataByID(e, function (e) {
            console.log("res - ", e);
            a = e.amount;
            if (i >= a) {
                i = a;
            }
            t.dict.name.getComponent(cc.Label).string = e.themeName;
            t.dict.level.getComponent(cc.Label).string = i + "/" + a;
            t.scroll.onItemRender = t.onItemRender.bind(t);
            t.scroll.onItemClicked = t.onItemClicked.bind(t);
            t.scroll.numItems = a;
        });
        $resManager.Res.load("prefab/item/TopBar").then(function (e) {
            console.log("测试加载");
            var n = cc.instantiate(e);
            t.node.addChild(n);
        });
        $audioManager.Audio.playMusic($audioConst.AudioConst.BGM_MAIN);
    };
    e.prototype.onItemRender = function (t, e) {
        var n = e.getComponent($levelSelectItem.default);
        var r =
            ($levelSelectItem.default.state.Normal,
            {
                index: t,
                currentLevel: this.currentUnlockLevel,
                currentAlreadyPlay: this.currentAlreadyPlay,
                currentAlreadyUnlock: this.currentAlreadyUnlock
            });
        n.setData(r);
    };
    e.prototype.onItemClicked = function () {};
    e.prototype.clickBack = function () {
        if (this.isLoadingScene) {
            //
        } else {
            this.isLoadingScene = !0;
            cc.game.emit("gamelog", "btn008");
            $sceneManager.default.loadScene($sceneConst.SceneConst.MAIN);
        }
    };
    __decorate([M($recycleScroll.default)], e.prototype, "scroll", void 0);
    return __decorate([C], e);
})($baseUI.default);
exports.default = P;
