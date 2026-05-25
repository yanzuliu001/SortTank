var r;
var $baseUI = require("./BaseUI");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $userConst = require("./UserConst");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $userManager = require("./UserManager");
var $xMADUtils = require("./XMADUtils");
var $vIVOADUtils = require("./VIVOADUtils");
var $popupManager = require("./PopupManager");
var $popupConst = require("./PopupConst");
var $shuShuConst = require("./ShuShuConst");
var $tipManager = require("./TipManager");
var $bmsManager = require("./BmsManager");
var _ = cc._decorator;
var b = _.ccclass;
var S =
    (_.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.clickBuyID = null;
            e.canClick = !0;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("noBtn", this.noBtn, this);
            this.addBtnOn("btn0", this.btn0.bind(this, "noads"), this);
            this.addBtnOn("btn1", this.btn0.bind(this, "dakong09"), this);
            this.addBtnOn("btn2", this.btn0.bind(this, "luosihezi"), this);
            this.addBtnOn("btn3", this.btn0.bind(this, "noads_plus"), this);
            this.addBtnOn("restoreBtn0", this.restoreBtn0, this);
            this.addBtnOn("restoreBtn3", this.restoreBtn3, this);
            this.addBtnOn("btn4", this.btn4, this);
            this.initView();
            console.log("11111");
        };
        e.prototype.restoreBtn0 = function () {
            var t = $userManager.User.getTempData("noads");
            $userManager.User.getTempData("noads_plus");
            if (t) {
                $tipManager.Tip.show("已恢复");
            } else {
                $tipManager.Tip.show("未购买");
            }
        };
        e.prototype.restoreBtn3 = function () {
            $userManager.User.getTempData("noads");
            if ($userManager.User.getTempData("noads_plus")) {
                $tipManager.Tip.show("已恢复");
            } else {
                $tipManager.Tip.show("未购买");
            }
        };
        e.prototype.btn0 = function (t) {
            if (this.canClick) {
                this.canClick = !1;
                this.clickBuyID = t;
                console.log("id", t);
                cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
                cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
                cc.game.on(this.clickBuyID + "_suc", this.purchaseSuc, this);
                cc.game.on(this.clickBuyID + "_fail", this.purchaseFail, this);
                $platformManager.Platform.purchase(this.clickBuyID);
            }
        };
        e.prototype.purchaseSuc = function (t) {
            this.canClick = !0;
            cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
            cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
            console.log(this.clickBuyID + "_suc", "购买成功！");
            if ("dakong09" == this.clickBuyID) {
                var e = $userManager.User.get($userConst.UserData.boreTimes) || 0;
                var n = 9 * Number(t) + e;
                $userManager.User.set($userConst.UserData.boreTimes, n);
                var r = $userManager.User.get($userConst.UserData.tipTimes) || 0;
                var o = 2 * Number(t) + r;
                $userManager.User.set($userConst.UserData.tipTimes, o);
                $tipManager.Tip.show("购买成功！");
                cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store, {
                    id: 2,
                    pageid: $userManager.User.getTempData("currentScene_")
                });
                $bmsManager.BMS.saveServerData(
                    $platformManager.Platform.getConfig().flag,
                    $userManager.User.get("googleID") || $userManager.User.get("uuid"),
                    $userConst.UserData.boreTimes,
                    String(n)
                ).then(function () {
                    console.log("保存boreTimes成功");
                });
                $bmsManager.BMS.saveServerData(
                    $platformManager.Platform.getConfig().flag,
                    $userManager.User.get("googleID") || $userManager.User.get("uuid"),
                    $userConst.UserData.tipTimes,
                    String(o)
                ).then(function () {
                    console.log("保存tipTimes成功");
                });
                cc.game.emit("updateBoreView");
                cc.game.emit("updateTipTimesView");
            } else if ("luosihezi" == this.clickBuyID) {
                var i = $userManager.User.get($userConst.UserData.screwBoxTimes) || 0;
                var a = 5 * Number(t) + i;
                $userManager.User.set($userConst.UserData.screwBoxTimes, a);
                r = $userManager.User.get($userConst.UserData.tipTimes) || 0;
                o = 2 * Number(t) + r;
                $userManager.User.set($userConst.UserData.tipTimes, o);
                $tipManager.Tip.show("购买成功！");
                cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store, {
                    id: 3,
                    pageid: $userManager.User.getTempData("currentScene_")
                });
                $bmsManager.BMS.saveServerData(
                    $platformManager.Platform.getConfig().flag,
                    $userManager.User.get("googleID") || $userManager.User.get("uuid"),
                    $userConst.UserData.screwBoxTimes,
                    String(a)
                ).then(function () {
                    console.log("保存boreTimes成功");
                });
                $bmsManager.BMS.saveServerData(
                    $platformManager.Platform.getConfig().flag,
                    $userManager.User.get("googleID") || $userManager.User.get("uuid"),
                    $userConst.UserData.tipTimes,
                    String(o)
                ).then(function () {
                    console.log("保存tipTimes成功");
                });
                cc.game.emit("updateScrewBoxView");
                cc.game.emit("updateTipTimesView");
            } else {
                if ("noads" == this.clickBuyID) {
                    $platformManager.Platform.setIsBuyRemoveInsert(!0);
                    $userManager.User.setTempData("noads", !0);
                    this.initView();
                    $tipManager.Tip.show("购买成功！");
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store, {
                        id: 1,
                        pageid: $userManager.User.getTempData("currentScene_")
                    });
                } else {
                    if ("noads_plus" == this.clickBuyID) {
                        n = 9 + (e = $userManager.User.get($userConst.UserData.boreTimes) || 0);
                        $userManager.User.set($userConst.UserData.boreTimes, n);
                        $userManager.User.setTempData("noads_plus", !0);
                        this.initView();
                        $platformManager.Platform.setIsBuyRemoveInsert(!0);
                        $tipManager.Tip.show("购买成功！");
                        $bmsManager.BMS.saveServerData(
                            $platformManager.Platform.getConfig().flag,
                            $userManager.User.get("googleID") || $userManager.User.get("uuid"),
                            $userConst.UserData.boreTimes,
                            String(n)
                        ).then(function () {
                            console.log("保存boreTimes成功");
                        });
                        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store, {
                            id: 4,
                            pageid: $userManager.User.getTempData("currentScene_")
                        });
                        cc.game.emit("updateBoreView");
                    }
                }
            }
            cc.game.emit("gameRestart");
        };
        e.prototype.purchaseFail = function () {
            this.canClick = !0;
            cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
            cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
            console.log(this.clickBuyID + "_suc", "购买失败！");
            $tipManager.Tip.show("购买失败！");
        };
        e.prototype.btn4 = function () {
            this.dict.hint.active = !1;
            $userManager.User.setTempData("shopNewFirst", 1);
            $popupManager.default.show($popupConst.PopupConst.Subscribe);
        };
        e.prototype.noBtn = function () {
            $popupManager.default.hide();
        };
        e.prototype.onEnable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                $xMADUtils.XMAD.showBannerFeed();
            } else {
                if ($platformManager.Platform.is($platformConst.EPlatform.VIVO)) {
                    $vIVOADUtils.VIVOAD.showCustomAd_1();
                }
            }
            cc.game.on("yongjiuhezi", this.initView, this);
        };
        e.prototype.onDisable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                $platformManager.Platform.removeBannerFeed();
            }
            $platformManager.Platform.hideCustomAd();
            $platformManager.Platform.hideCustomAd_1();
            $platformManager.Platform.hideCustomAd_2();
            $eventManager.Event.emit($eventConst.default.restoreTime);
            cc.game.off("yongjiuhezi", this.initView, this);
        };
        e.prototype.initView = function () {
            var t = $bmsManager.BMS.getKey("PackagePrice");
            this.dict.btn0.children[0].children[0].getComponent(cc.Label).string = "$" + t[0];
            this.dict.btn1.children[0].children[0].getComponent(cc.Label).string = "$" + t[1];
            this.dict.btn2.children[0].children[0].getComponent(cc.Label).string = "$" + t[2];
            this.dict.btn3.children[0].children[0].getComponent(cc.Label).string = "$" + t[3];
            if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
                this.dict.bg.height = cc.winSize.height;
            }
            var e = $userManager.User.getTempData("noads");
            var n = $userManager.User.getTempData("noads_plus");
            $userManager.User.getTempData("yongjiuhezi");
            if (e) {
                this.dict.btn0Mask.active = !0;
            }
            if (n) {
                this.dict.btn3Mask.active = !0;
            }
            $eventManager.Event.emit($eventConst.default.StopTimer);
            if ($userManager.User.getTempData("shopNewFirst")) {
                //
            } else {
                this.dict.hint.active = !0;
                $userManager.User.setTempData("shopNewFirst", 1);
            }
        };
        return __decorate([b], e);
    })($baseUI.default));
exports.default = S;
