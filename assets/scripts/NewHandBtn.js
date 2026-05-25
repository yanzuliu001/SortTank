var r;
var $popupConst = require("./PopupConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $paymentSystem = require("./PaymentSystem");
var d = cc._decorator;
var h = d.ccclass;
var p =
    (d.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.localStorageUIData[$localStorageConst.default.starter_pack] = this.updatestarter_pack.bind(this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.newHandBtn, this);
            $paymentSystem.default.getGoodsLocalPrice(this.dict.btn_04.children[0], "starter_pack");
        };
        e.prototype.updatestarter_pack = function (t) {
            this.node.active = !t;
            if ($platformManager.Platform.getConfig().hasPurchase) {
                //
            } else {
                this.node.active = !1;
            }
        };
        e.prototype.newHandBtn = function () {
            $paymentSystem.default.clickBuy("starter_pack");
        };
        e.prototype.clickSelf = function () {
            $popupManager.default.show($popupConst.PopupConst.UniversalCard);
        };
        return __decorate([h], e);
    })($uIBase.default));
exports.default = p;
