var r;
var $baseUI = require("./BaseUI");
var $recycleScroll = require("./RecycleScroll");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $sceneConst = require("./SceneConst");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $sceneManager = require("./SceneManager");
var $userManager = require("./UserManager");
var $xMADUtils = require("./XMADUtils");
var $vIVOADUtils = require("./VIVOADUtils");
var $challengeHttp = require("./ChallengeHttp");
var $configManager = require("./ConfigManager");
var $configConst = require("./ConfigConst");
var $rankItem = require("./RankItem");
var $popupManager = require("./PopupManager");
var S = cc._decorator;
var k = S.ccclass;
var C = S.property;
var M = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.scroll = null;
        e.bgSpriteFrame = [];
        e.rankingBgSpriteFrame = [];
        e._data = null;
        e.itemsData = [];
        e.childrenLength = 6;
        e.currentUnlockLevel = 1;
        e.currentAlreadyPlay = [];
        e.currentAlreadyUnlock = [];
        e.rankList = [];
        e.myRank = 1;
        e.myScore = 1;
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
    e.prototype.getRank = function () {
        var t = this;
        var e = new Date();
        var n = this.showTime(e.getMonth() + 1);
        var r = this.showTime(e.getDate());
        var o = "province_" + n + r + "_" + $platformManager.Platform.getConfig().rank;
        if ("haiwai" == $platformManager.Platform.getConfig().rank) {
            o = "country_" + n + r + "_" + $platformManager.Platform.getConfig().rank;
        }
        $platformManager.Platform.getConfig().rank;
        $challengeHttp.challengeHttp.getRank(o, "1").then(function (e) {
            console.log("排行榜数据", e);
            if (e.total) {
                var n = [];
                var r = 0;
                for (var i in e.list)
                    (r += 1),
                        n.push({
                            id: r,
                            province: i,
                            score: e.list[i].score
                        });
                console.log("list", n);
                t.rankList = n;
                t.sucGetRank();
            } else {
                var a = $configConst.ConfigConst.Rank;
                if ("haiwai" == $platformManager.Platform.getConfig().rank) {
                    a = $configConst.ConfigConst.RankHW;
                }
                $configManager.Config.get(a).then(function (e) {
                    console.log("假数据", e);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        $challengeHttp.challengeHttp.incrRank(o, r.province, r.score).then(function () {
                            console.log("顺便上传");
                        });
                    }
                    t.rankList = e;
                    t.rankList.sort(function (t, e) {
                        return e.score - t.score;
                    });
                    t.sucGetRank();
                });
            }
        });
    };
    e.prototype.sucGetRank = function () {
        var t;
        this.scroll.onItemRender = this.onItemRender.bind(this);
        this.scroll.onItemClicked = this.onItemClicked.bind(this);
        this.scroll.numItems = this.rankList.length;
        this.rankList.forEach(function (t) {
            t.score;
        });
        if ($platformManager.Platform.getConfig().rank.includes("haiwai")) {
            t = "nation";
        } else {
            t = "province";
        }
        var e = this.rankList.findIndex(function (e) {
            return e.province == $userManager.User.get(t);
        });
        if (-1 == e) {
            e = this.rankList.length;
            this.myScore = 1;
        } else {
            this.myScore = this.rankList.find(function (e) {
                return e.province == $userManager.User.get(t);
            }).score;
        }
        this.myRank = e + 1;
        this.dict.ranking.getComponent(cc.Label).string = "" + this.myRank;
        this.dict.province.getComponent(cc.Label).string = "" + $userManager.User.get(t);
        this.dict.score.getComponent(cc.Label).string = "" + this.myScore;
        if (this.myRank > 3) {
            this.dict.rankingBg.getComponent(cc.Sprite).spriteFrame = this.rankingBgSpriteFrame[3];
            this.dict.rankingBg.active = !1;
            this.dict.ranking.active = !0;
        } else {
            this.dict.ranking.active = !1;
            this.dict.rankingBg.getComponent(cc.Sprite).spriteFrame = this.rankingBgSpriteFrame[this.myRank - 1];
        }
    };
    e.prototype.showTime = function (t) {
        if (t > 10) {
            return t;
        } else {
            return "0" + t;
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
        this.getRank();
    };
    e.prototype.onItemRender = function (t, e) {
        var n = e.getComponent($rankItem.default);
        var r =
            ($rankItem.default.state.Normal,
            {
                index: t,
                province: this.rankList[t].province,
                score: this.rankList[t].score
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
    __decorate([C($recycleScroll.default)], e.prototype, "scroll", void 0);
    __decorate([C([cc.SpriteFrame])], e.prototype, "bgSpriteFrame", void 0);
    __decorate([C([cc.SpriteFrame])], e.prototype, "rankingBgSpriteFrame", void 0);
    return __decorate([k], e);
})($baseUI.default);
exports.default = M;
