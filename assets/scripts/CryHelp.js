var r;
var $baseUI = require("./BaseUI");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var l = cc._decorator;
var u = l.ccclass;
var f =
    (l.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("defineBtn", this.clickDefine, this);
            this.addBtnOn("giveUpBtn", this.clickGiveUp, this);
        };
        e.prototype.onEnable = function () {
            cc.game.on("shareSuc", this.shareSuc, this);
        };
        e.prototype.onDisable = function () {
            cc.game.off("shareSuc", this.shareSuc, this);
        };
        e.prototype.clickDefine = function () {
            $platformManager.Platform.share();
            $popupManager.default.hide();
            setTimeout(function () {
                cc.game.emit("clickTip");
            }, 2e3);
        };
        e.prototype.clickGiveUp = function () {
            $popupManager.default.hide();
        };
        e.prototype.shareSuc = function () {};
        return __decorate([u], e);
    })($baseUI.default));
exports.default = f;
