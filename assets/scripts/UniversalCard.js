var r;
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $popupManager = require("./PopupManager");
var $paymentSystem = require("./PaymentSystem");
var $shuShuConst = require("./ShuShuConst");
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
            this.node.setContentSize(cc.winSize);
            this.localStorageUIData[$localStorageConst.default.cardAmount] = this.updateCardAmount.bind(this);
            this.localStorageUIData[$localStorageConst.default.starter_pack] = this.updatestarter_pack.bind(this);
            this.addBtnOn("cardBtn0", this.buyBtn.bind(this, "small_st"), this);
            this.addBtnOn("cardBtn1", this.buyBtn.bind(this, "medium_st"), this);
            this.addBtnOn("cardBtn2", this.buyBtn.bind(this, "big_st"), this);
            this.addBtnOn("cardBtn3", this.buyBtn.bind(this, "huge_st"), this);
            this.addBtnOn("cardBtn4", this.buyBtn.bind(this, "mega_st"), this);
            this.addBtnOn("cardBtn5", this.buyBtn.bind(this, "brilliant_st"), this);
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Gift_page, {
                id: 3
            });
            var e = ["small_st", "medium_st", "big_st", "huge_st", "mega_st", "brilliant_st"];
            for (var n = 0; n < this.dict.layout.children.length; n++) {
                var r = this.dict.layout.children[n].getChildByName("money");
                var o = e[n];
                $paymentSystem.default.getGoodsLocalPrice(r, o);
            }
        };
        e.prototype.buyBtn = function (t) {
            $paymentSystem.default.clickBuy(t);
        };
        e.prototype.updateCardAmount = function (t) {
            this.dict.cardAmount.getComponent(cc.Label).string = "" + t;
        };
        e.prototype.updatestarter_pack = function (t) {
            if (t) {
                this.dict.universalCard.y = 534.669;
            }
        };
        e.prototype.start = function () {
            t.prototype.start.call(this);
            this.addBtnOn("noBtn", this.noBtn, this);
        };
        e.prototype.noBtn = function () {
            console.log("测试");
            $popupManager.default.hide();
        };
        return __decorate([d], e);
    })($uIBase.default));
exports.default = h;
