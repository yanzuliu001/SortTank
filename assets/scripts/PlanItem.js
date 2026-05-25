var r;
var a;
var $eventConst = require("./EventConst");
var $popupConst = require("./PopupConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $memoryStorageConst = require("./MemoryStorageConst");
var $memoryStorageManager = require("./MemoryStorageManager");
var $bmsManager = require("./BmsManager");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $shuShuConst = require("./ShuShuConst");
var _ = cc._decorator;
var b = _.ccclass;
var S = _.property;
(function (t) {
    t[(t.Normal = 0)] = "Normal";
    t[(t.Finish = 1)] = "Finish";
    t[(t.Lock = 2)] = "Lock";
})(a || (a = {}));
var k = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.levelSpriteFrame = [];
        e.param = null;
        e.state = null;
        e.starAmount = 0;
        e.skinNameArr = [];
        e.free = [];
        e.master = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
    };
    e.prototype.setData = function (t) {
        this.param = t;
        this.node.zIndex = this.param.index;
        this.free = JSON.parse(this.param.type.free);
        this.master = JSON.parse(this.param.type.master);
        this.refresh();
    };
    e.prototype.refresh = function () {
        this.dict.ordinaryContainer.color = cc.Color.GRAY;
        this.dict.container.color = cc.Color.GRAY;
        this.dict.ordinaryIcon.color = cc.Color.GRAY;
        this.dict.icon.color = cc.Color.GRAY;
        this.dict.ordinaryCard.color = cc.Color.GRAY;
        this.dict.card.color = cc.Color.GRAY;
        this.dict.ordinaryAmount.color = cc.Color.GRAY;
        this.dict.amount.color = cc.Color.GRAY;
        this.dict.fill.active = !1;
        this.dict.ordinaryYesBtn.active = !1;
        this.dict.yesBtn.active = !1;
        this.dict.ordinaryGou.active = !1;
        this.dict.gou.active = !1;
        this.dict.ordinaryLock.active = !0;
        this.dict.lock.active = !0;
        this.dict.ordinaryCard.active = !1;
        this.dict.card.active = !1;
        this.dict.levelSprite.getComponent(cc.Sprite).spriteFrame = this.levelSpriteFrame[1];
        this.dict.level.color = cc.Color.WHITE;
        this.dict.bg0.active = !1;
        if (0 == this.param.index) {
            this.dict.bg0.active = !0;
        }
        if (this.param.index % 2 == 0) {
            this.dict.bg.color = new cc.Color().fromHEX("#f3e0ac");
        } else {
            this.dict.bg.color = new cc.Color().fromHEX("#FEEFC6");
        }
        this.dict.level.getComponent(cc.Label).string = "" + (this.param.index + 1);
        var t = $memoryStorageManager.default.get($memoryStorageConst.default.planLevel) || 1;
        var e = $localStorageManager.default.get($localStorageConst.default.planReceive) || [];
        var n = $localStorageManager.default.get($localStorageConst.default.planReceive2) || [];
        var r = $localStorageManager.default.get($localStorageConst.default.master_pass) || !1;
        if (t > this.param.index + 1) {
            this.dict.ordinaryContainer.color = cc.Color.WHITE;
            this.dict.ordinaryIcon.color = cc.Color.WHITE;
            this.dict.ordinaryCard.color = cc.Color.WHITE;
            this.dict.ordinaryAmount.color = cc.Color.WHITE;
            this.dict.fill.active = !0;
            this.dict.ordinaryLock.active = !1;
            this.dict.levelSprite.getComponent(cc.Sprite).spriteFrame = this.levelSpriteFrame[0];
            this.dict.level.color = cc.Color.WHITE;
            if (r) {
                this.dict.icon.color = cc.Color.WHITE;
                this.dict.card.color = cc.Color.WHITE;
                this.dict.container.color = cc.Color.WHITE;
                this.dict.amount.color = cc.Color.WHITE;
                this.dict.lock.active = !1;
            }
            if (e.includes(this.param.index + 1)) {
                this.dict.ordinaryGou.active = !0;
            } else {
                this.dict.ordinaryYesBtn.active = !0;
            }
            if (n.includes(this.param.index + 1)) {
                this.dict.gou.active = !0;
            } else {
                r && (this.dict.yesBtn.active = !0);
            }
        }
        if (1 == this.free[0]) {
            this.dict.ordinaryAmount.getComponent(cc.Label).string = "x" + this.free[1];
            this.dict.ordinaryCard.active = !1;
        } else {
            if (2 == this.free[0]) {
                this.dict.ordinaryAmount.getComponent(cc.Label).string = "x" + this.free[1];
                this.dict.ordinaryCard.active = !0;
            }
        }
        if (1 == this.master[0]) {
            this.dict.amount.getComponent(cc.Label).string = "x" + this.master[1];
            this.dict.card.active = !1;
        } else {
            if (2 == this.master[0]) {
                this.dict.amount.getComponent(cc.Label).string = "x" + this.master[1];
                this.dict.card.active = !0;
            }
        }
    };
    e.prototype.clickEnter = function () {
        var t = $localStorageManager.default.get($localStorageConst.default.planReceive) || [];
        t.push(this.param.index + 1);
        $localStorageManager.default.set($localStorageConst.default.planReceive, t);
        this.refresh();
        if (2 == this.free[0]) {
            this.cardReward(this.free[1]);
            $memoryStorageManager.default.set($memoryStorageConst.default.reward, [["card", this.free[1]]]);
        } else {
            this.coinReward(this.free[1]);
            $memoryStorageManager.default.set($memoryStorageConst.default.reward, [["coin", this.free[1]]]);
        }
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Activity_get, {
            id: 4
        });
        $popupManager.default.show($popupConst.PopupConst.Get);
    };
    e.prototype.clickEnter2 = function () {
        var t = $localStorageManager.default.get($localStorageConst.default.planReceive2) || [];
        t.push(this.param.index + 1);
        $localStorageManager.default.set($localStorageConst.default.planReceive2, t);
        this.refresh();
        if (2 == this.master[0]) {
            this.cardReward(this.master[1]);
            $memoryStorageManager.default.set($memoryStorageConst.default.reward, [["card", this.master[1]]]);
        } else {
            this.coinReward(this.master[1]);
            $memoryStorageManager.default.set($memoryStorageConst.default.reward, [["coin", this.master[1]]]);
        }
        $popupManager.default.show($popupConst.PopupConst.Get);
    };
    e.prototype.cardReward = function (t) {
        var e = ($localStorageManager.default.get($localStorageConst.default.cardAmount) || 0) + t;
        $localStorageManager.default.set($localStorageConst.default.cardAmount, e);
        this.saveServerData($localStorageConst.default.cardAmount, e);
    };
    e.prototype.coinReward = function (t) {
        var e = ($userManager.User.get("coin") || 0) + t;
        $userManager.User.set("coin", e);
        $eventManager.Event.emit($eventConst.default.COIN_UPDATE);
        cc.game.emit("updateCoin");
        this.saveServerData("coin", e);
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
    e.state = a;
    __decorate([S([cc.SpriteFrame])], e.prototype, "levelSpriteFrame", void 0);
    return __decorate([b], e);
})($uIBase.default);
exports.default = k;
