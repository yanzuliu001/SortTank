var r;
var $popupConst = require("./PopupConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $popupManager = require("./PopupManager");
var f = cc._decorator;
var d = f.ccclass;
var h =
    (f.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            var e = $localStorageManager.default.get($localStorageConst.default.cardAmount) || 0;
            $localStorageManager.default.set($localStorageConst.default.cardAmount, e);
            this.localStorageUIData[$localStorageConst.default.cardAmount] = this.updateCardAmount.bind(this);
        };
        e.prototype.updateCardAmount = function (t) {
            this.dict.cardAmount.getComponent(cc.Label).string = "" + t;
        };
        e.prototype.clickSelf = function () {
            $popupManager.default.show($popupConst.PopupConst.UniversalCard);
        };
        return __decorate([d], e);
    })($uIBase.default));
exports.default = h;
