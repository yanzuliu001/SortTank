var r;
var $configConst = require("./ConfigConst");
var $configManager = require("./ConfigManager");
var $tipManager = require("./TipManager");
var $baseUICtrl = require("./BaseUICtrl");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $assetManager = require("./AssetManager");
var m = cc._decorator;
var g = m.ccclass;
var y =
    (m.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.param = null;
            e.goodsIndex = 0;
            e.goodsType = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
        };
        e.prototype.setData = function (t) {
            this.param = t;
            this.node.zIndex = this.param.index;
            this.goodsIndex = this.param.index;
            this.refresh();
        };
        e.prototype.refresh = function () {
            return __awaiter(this, void 0, void 0, function () {
                var t;
                return __generator(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [
                                4,
                                $assetManager.default.getRes(
                                    "gameBundle",
                                    "texture/collect/" + this.param.goodsID,
                                    cc.Texture2D
                                )
                            ];
                        case 1:
                            t = e.sent();
                            this.dict.icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t);
                            this.dict.id0.getComponent(cc.Label).string = this.param.goodsID;
                            this.dict.id1.getComponent(cc.Label).string = this.param.goodsID;
                            this.dict.name.getComponent(cc.Label).string = this.param.goodsName;
                            if (
                                ($localStorageManager.default.get($localStorageConst.default.Collect) || {
                                    0: []
                                })[this.goodsType].includes(this.param.goodsID)
                            ) {
                                this.dict.state0.active = !1;
                                this.dict.state1.active = !0;
                                this.dict.icon.getComponent(cc.Button).interactable = !0;
                                this.dict.icon.getComponent(cc.Button).enableAutoGrayEffect = !1;
                            } else {
                                this.dict.state0.active = !0;
                                this.dict.state1.active = !1;
                                this.dict.icon.getComponent(cc.Button).interactable = !1;
                                this.dict.icon.getComponent(cc.Button).enableAutoGrayEffect = !0;
                            }
                            return [2];
                    }
                });
            });
        };
        e.prototype.clickEnter = function () {
            return __awaiter(this, void 0, void 0, function () {
                var t;
                var e;
                var n = this;
                return __generator(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, $configManager.Config.get($configConst.ConfigConst.Collect)];
                        case 1:
                            t = r.sent();
                            e =
                                t.find(function (t) {
                                    return t.id == n.param.index + 1;
                                }).id + 1;
                            if (this.dict.state1.active) {
                                //
                            } else {
                                $tipManager.Tip.show("通过第" + e + "关可获得");
                            }
                            return [2];
                    }
                });
            });
        };
        return __decorate([g], e);
    })($baseUICtrl.default));
exports.default = y;
