var r;
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
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
            var e = $localStorageManager.default.get($localStorageConst.default.Coin) || 0;
            $localStorageManager.default.set($localStorageConst.default.Coin, e);
            this.localStorageUIData[$localStorageConst.default.Coin] = this.updateCoin.bind(this);
        };
        e.prototype.updateCoin = function (t) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function () {
                    this.dict.amount.getComponent(cc.Label).string = "" + t;
                    return [2];
                });
            });
        };
        e.prototype.clickSelf = function () {};
        return __decorate([d], e);
    })($uIBase.default));
exports.default = h;
