var r;
var $platformConst = require("./PlatformConst");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $tipManager = require("./TipManager");
var $vIVOADUtils = require("./VIVOADUtils");
var $xMADUtils = require("./XMADUtils");
var $uIBase = require("./UIBase");
var $configManager = require("./ConfigManager");
var $configConst = require("./ConfigConst");
var $assetManager = require("./AssetManager");
var _ = cc._decorator;
var b = _.ccclass;
var S = _.property;
var k = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.unlockBg = null;
        e.lockBg = null;
        e.cost = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
        var e = $localStorageManager.default.get($localStorageConst.default.DragonBall) || 0;
        $localStorageManager.default.set($localStorageConst.default.DragonBall, e);
        var n = $localStorageManager.default.get($localStorageConst.default.HeroLevel) || 1;
        $localStorageManager.default.set($localStorageConst.default.HeroLevel, n);
        this.localStorageUIData[$localStorageConst.default.HeroLevel] = this.updateHeroLevel.bind(this);
        this.addBtnOn("noBtn", this.noBtn, this);
        this.addBtnOn("yesBtn", this.yesBtn, this);
    };
    e.prototype.updateHeroLevel = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            var n;
            var r;
            var o;
            var i;
            var a = this;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        this.dict.heroLevel.getComponent(cc.Label).string = "Lv" + t;
                        this.dict.yesBtn.active = t < 10;
                        return [4, $configManager.Config.get($configConst.ConfigConst.Role)];
                    case 1:
                        e = s.sent();
                        n = $localStorageManager.default.get($localStorageConst.default.DragonBall) || 0;
                        if (
                            (r = e.find(function (e) {
                                return e.id == t + 1;
                            }))
                        ) {
                            this.dict.dragonBall.getComponent(cc.Label).string = n + "/" + r.cost;
                            this.cost = r.cost;
                            if (n >= this.cost) {
                                this.dict.yesBtn.getComponent(cc.Animation).play();
                            } else {
                                this.dict.yesBtn.getComponent(cc.Animation).stop(), (this.dict.yesBtn.scale = 1);
                            }
                        } else {
                            this.dict.dragonBall.parent.active = !1;
                        }
                        e.forEach(function (e, n) {
                            if (a.dict.scrollViewContent.children[n]) {
                                //
                            } else {
                                a.dict.scrollViewContent.addChild(cc.instantiate(a.dict.scrollViewContent.children[0]));
                            }
                            a.dict.scrollViewContent.children[n].getChildByName("level").getComponent(cc.Label).string =
                                "Lv" + e.id;
                            a.dict.scrollViewContent.children[n].getChildByName("text").getComponent(cc.Label).string =
                                e.roleTxt;
                            if (t >= e.id) {
                                a.dict.scrollViewContent.children[n].getComponent(cc.Sprite).spriteFrame = a.unlockBg;
                            } else {
                                a.dict.scrollViewContent.children[n].getComponent(cc.Sprite).spriteFrame = a.lockBg;
                            }
                        });
                        null;
                        o =
                            t >= 9
                                ? "texture/skin/role3"
                                : t >= 6
                                ? "texture/skin/role2"
                                : t >= 3
                                ? "texture/skin/role1"
                                : "texture/skin/role0";
                        return [4, $assetManager.default.getRes("gameBundle", o, cc.Texture2D)];
                    case 2:
                        i = s.sent();
                        this.dict.roleIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i);
                        return [2];
                }
            });
        });
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
    e.prototype.yesBtn = function () {
        var t = $localStorageManager.default.get($localStorageConst.default.DragonBall) || 0;
        if (t < this.cost) {
            return $tipManager.Tip.show("龙珠不足！");
        }
        $localStorageManager.default.set($localStorageConst.default.DragonBall, t - this.cost);
        $tipManager.Tip.show("升级成功");
        var e = $localStorageManager.default.get($localStorageConst.default.HeroLevel) || 1;
        e += 1;
        $localStorageManager.default.set($localStorageConst.default.HeroLevel, e);
        this.dict.upgradeSpine.active = !0;
        this.dict.upgradeSpine.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
        console.log("解锁皮肤0000");
        if (3 == e || 6 == e || 9 == e) {
            var n = $localStorageManager.default.get($localStorageConst.default.SkinList) || {};
            if (n[0]) {
                //
            } else {
                n[0] = [0];
            }
            if (n[1]) {
                //
            } else {
                n[1] = [0];
            }
            var r = $localStorageManager.default.get($localStorageConst.default.UseSkin) || {};
            if (r[0]) {
                //
            } else {
                r[0] = 0;
            }
            if (r[1]) {
                //
            } else {
                r[1] = 0;
            }
            var o = {
                3: 1,
                6: 2,
                9: 3
            }[e];
            if (n[0].includes(o)) {
                //
            } else {
                n[0].push(o);
            }
            r[0] = o;
            console.log("解锁皮肤", o);
            $localStorageManager.default.set($localStorageConst.default.SkinList, n);
            $localStorageManager.default.set($localStorageConst.default.UseSkin, r);
        }
    };
    e.prototype.noBtn = function () {
        $popupManager.default.hide();
    };
    __decorate([S(cc.SpriteFrame)], e.prototype, "unlockBg", void 0);
    __decorate([S(cc.SpriteFrame)], e.prototype, "lockBg", void 0);
    return __decorate([b], e);
})($uIBase.default);
exports.default = k;
