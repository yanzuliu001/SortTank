var r;
var $eventConst = require("./EventConst");
var $userConst = require("./UserConst");
var $bmsManager = require("./BmsManager");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $memoryStorageConst = require("./MemoryStorageConst");
var $memoryStorageManager = require("./MemoryStorageManager");
var $uIBase = require("./UIBase");
var $languageManager = require("./LanguageManager");
var $configManager = require("./ConfigManager");
var $configConst = require("./ConfigConst");
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
            this.node.setContentSize(cc.winSize);
            this.addBtnOn("noBtn", this.noBtn, this);
            this.initView();
        };
        e.prototype.initView = function () {
            var t = this;
            this.dict["title_" + $languageManager.default.instance.lan].active = !0;
            var e = $memoryStorageManager.default.get($memoryStorageConst.default.rewardType);
            var n = $memoryStorageManager.default.get($memoryStorageConst.default.reward);
            if ("VIPCard" == e) {
                this.dict["title_" + $languageManager.default.instance.lan].active = !1;
                this.dict.titleCard.active = !0;
            } else {
                if ("remove_ads_pack" == e) {
                    this.dict.skin.active = !0;
                    this.dict.card.active = !0;
                }
            }
            $memoryStorageManager.default.set($memoryStorageConst.default.rewardType, "");
            n.forEach(function (e) {
                var n = e[0];
                var r = e[1];
                t.dict[n].active = !0;
                if ("card" == n) {
                    t.dict[n].getChildByName("text").getComponent(cc.Label).string = $languageManager.default.formatStr(
                        "万能卡x%d",
                        r
                    );
                }
                if ("skin" == n) {
                    $userManager.User.get($userConst.UserData.getLockSkinList);
                    $userManager.User.get($userConst.UserData.skinList);
                    $userManager.User.get($userConst.UserData.useSkinIDList);
                    var o = "pifu" + r;
                    if (r >= 16) {
                        t.dict.skin.getComponent(sp.Skeleton).enabled = !1;
                        var i = t.dict.skin.getChildByName("spine2").getComponent(sp.Skeleton);
                        t.dict.skin.getChildByName("spine2").active = !0;
                        i.setSkin(o);
                        i.defaultSkin = o;
                    } else {
                        var a = t.dict.skin.getComponent(sp.Skeleton);
                        a.node.active = !0;
                        a.setSkin(o);
                        a.defaultSkin = o;
                    }
                    $configManager.Config.get($configConst.ConfigConst.Skin0).then(function (e) {
                        t.dict[n].getChildByName("text").getComponent(cc.Label).string = e.find(function (t) {
                            return t.id == r;
                        }).skinName;
                    });
                }
                if ("coin" == n) {
                    t.dict[n].getChildByName("text").getComponent(cc.Label).string = $languageManager.default.formatStr(
                        "金币x%d",
                        r
                    );
                }
            });
        };
        e.prototype.skinReward = function (t) {
            var e = t;
            var n = $userManager.User.get($userConst.UserData.getLockSkinList);
            if (n[0].includes(e)) {
                //
            } else {
                n[0].push(e);
            }
            $userManager.User.set($userConst.UserData.getLockSkinList, n);
            $userManager.User.setTempData("chooseSkinPage", 0);
            $userManager.User.setTempData("chooseSkin", e + 1);
        };
        e.prototype.saveServerData = function (t, e) {
            e = e.toString();
            $bmsManager.BMS.saveServerData(
                $platformManager.Platform.getConfig().flag,
                $userManager.User.get("googleID") || $userManager.User.get("uuid"),
                t,
                e
            ).then(function () {
                console.log("保存" + t + "成功:" + e);
            });
        };
        e.prototype.nextBtn = function () {
            $eventManager.Event.emit($eventConst.default.CLICK_NEXT);
            $popupManager.default.hide();
        };
        e.prototype.noBtn = function () {
            console.log("测试");
            $popupManager.default.hide();
        };
        return __decorate([_], e);
    })($uIBase.default));
exports.default = b;
