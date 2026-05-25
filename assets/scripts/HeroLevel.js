var r;
var $popupConst = require("./PopupConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $popupManager = require("./PopupManager");
var $configManager = require("./ConfigManager");
var $configConst = require("./ConfigConst");
var m = cc._decorator;
var g = m.ccclass;
var y =
    (m.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.cost = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.node.scale = 1.2;
            var e = $localStorageManager.default.get($localStorageConst.default.HeroLevel) || 1;
            $localStorageManager.default.set($localStorageConst.default.HeroLevel, e);
            this.localStorageUIData[$localStorageConst.default.HeroLevel] = this.updateHeroLevel.bind(this);
        };
        e.prototype.updateHeroLevel = function (t) {
            return __awaiter(this, void 0, void 0, function () {
                var e;
                var n;
                var r;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            this.dict.heroLevel.getComponent(cc.Label).string = "Lv" + t;
                            return [4, $configManager.Config.get($configConst.ConfigConst.Role)];
                        case 1:
                            e = o.sent();
                            n = $localStorageManager.default.get($localStorageConst.default.DragonBall) || 0;
                            if (
                                (r = e.find(function (e) {
                                    return e.id == t + 1;
                                }))
                            ) {
                                this.cost = r.cost;
                                this.dict.upgrade.active = n >= this.cost;
                            } else {
                                this.dict.upgrade.active = !1;
                            }
                            return [2];
                    }
                });
            });
        };
        e.prototype.clickSelf = function () {
            $popupManager.default.show($popupConst.PopupConst.Role);
        };
        return __decorate([g], e);
    })($uIBase.default));
exports.default = y;
