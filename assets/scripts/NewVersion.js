var r;
var $userConst = require("./UserConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $bmsManager = require("./BmsManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var p = cc._decorator;
var m = p.ccclass;
var g =
    (p.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.cardTimesVal = 0;
            return e;
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
            var e = $userManager.User.get($userConst.UserData.boreTimes) || 0;
            var n = $userManager.User.get($userConst.UserData.tipTimes) || 0;
            var r = $userManager.User.get($userConst.UserData.screwBoxTimes) || 0;
            this.dict.boreTimes.getComponent(cc.Label).string = "x" + e;
            this.dict.tipTimes.getComponent(cc.Label).string = "x" + n;
            this.dict.screwBoxTimes.getComponent(cc.Label).string = "x" + r;
            var o = 2 * e + 2 * n + 2 * r;
            var i = $localStorageManager.default.get($localStorageConst.default.cardAmount) || 0;
            $localStorageManager.default.set($localStorageConst.default.cardAmount, i + o);
            $userManager.User.set($userConst.UserData.boreTimes, 0);
            $userManager.User.set($userConst.UserData.tipTimes, 0);
            $userManager.User.set($userConst.UserData.screwBoxTimes, 0);
            this.saveServerData($userConst.UserData.boreTimes, 0);
            this.saveServerData($userConst.UserData.tipTimes, 0);
            this.saveServerData($userConst.UserData.screwBoxTimes, 0);
            this.scheduleOnce(function () {
                t.cardTimesVal += 2 * e;
                cc.tween(t.dict.boreIcon)
                    .to(0.3, {
                        position: t.dict.cardIcon.position
                    })
                    .call(function () {
                        t.dict.boreIcon.active = !1;
                        t.dict.cardTimes.getComponent(cc.Label).string = "x" + t.cardTimesVal;
                        t.cardTimesVal += 2 * n;
                    })
                    .start();
                cc.tween(t.dict.TipIcon)
                    .delay(0.3)
                    .to(0.3, {
                        position: t.dict.cardIcon.position
                    })
                    .call(function () {
                        t.dict.TipIcon.active = !1;
                        t.dict.cardTimes.getComponent(cc.Label).string = "x" + t.cardTimesVal;
                        t.cardTimesVal += 2 * r;
                    })
                    .start();
                cc.tween(t.dict.boxIcon)
                    .delay(0.6)
                    .to(0.3, {
                        position: t.dict.cardIcon.position
                    })
                    .call(function () {
                        t.dict.boxIcon.active = !1;
                        t.dict.cardTimes.getComponent(cc.Label).string = "x" + t.cardTimesVal;
                        t.dict.noBtn.active = !0;
                    })
                    .start();
            }, 1.3);
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
        e.prototype.onEnable = function () {};
        e.prototype.onDisable = function () {};
        e.prototype.noBtn = function () {
            $popupManager.default.hide();
        };
        return __decorate([m], e);
    })($uIBase.default));
exports.default = g;
