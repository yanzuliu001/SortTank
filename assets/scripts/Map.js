var r;
var $configConst = require("./ConfigConst");
var $uIBase = require("./UIBase");
var $configManager = require("./ConfigManager");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $popupManager = require("./PopupManager");
var p = cc._decorator;
var m = p.ccclass;
var g = p.property;
var y = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.lightSpriteFrame = null;
        e.propIndex = 0;
        e.provinceAmount = 34;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
        this.node.setContentSize(cc.winSize);
        var e = $localStorageManager.default.get($localStorageConst.default.CityList) || [];
        $localStorageManager.default.set($localStorageConst.default.CityList, e);
        this.localStorageUIData[$localStorageConst.default.CityList] = this.updateCityList.bind(this);
        this.addBtnOn("noBtn", this.noBtn, this);
    };
    e.prototype.updateCityList = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            var n;
            var r;
            var o;
            var i;
            var a;
            var l;
            var f;
            var d;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        return [4, $configManager.Config.get($configConst.ConfigConst.City)];
                    case 1:
                        (e = s.sent()).sort(function (t, e) {
                            return t.sort - e.sort;
                        });
                        n = "";
                        n =
                            0 == t.length
                                ? e.find(function (t) {
                                      return 1 == t.sort;
                                  }).province
                                : e.find(function (e) {
                                      return e.id == t[t.length - 1];
                                  }).province;
                        r = [];
                        o = e.filter(function (t) {
                            return t.province == n;
                        }).length;
                        i = [];
                        a = "";
                        t.forEach(function (t) {
                            var o = e.find(function (e) {
                                return e.id == t;
                            });
                            if (r.includes(o.province)) {
                                //
                            } else {
                                r.push(o.province);
                            }
                            if (o.province == n) {
                                i.push(o.cityID);
                                a +=
                                    e.find(function (e) {
                                        return e.id == t;
                                    }).cityID + "，";
                            }
                        });
                        return [4, this.getLightProvince()];
                    case 2:
                        for (
                            l = s.sent(),
                                this.dict.provinceAmount.getComponent(cc.Label).string = "已点亮" + l.length + "个省份",
                                this.dict.progress.getComponent(cc.Sprite).fillRange = l.length / this.provinceAmount,
                                this.dict.progressText.getComponent(cc.Label).string =
                                    ((l.length / this.provinceAmount) * 100).toFixed(0) + "%",
                                this.dict.local.position = this.dict.pointRoot.children.find(function (t) {
                                    return n.includes(t.name);
                                }).position,
                                this.dict.local.y += 25,
                                this.dict.province.getComponent(cc.Label).string = "" + n,
                                this.dict.localProvince.getComponent(cc.Label).string = "目前处于省份：" + n,
                                this.dict.cityAmount.getComponent(cc.Label).string = i.length + "/" + o,
                                this.dict.sucCity.getComponent(cc.Label).string = "已经完成城市：" + a.slice(0, -1),
                                console.log("amountArr", l),
                                f = 0;
                            f < this.dict.pointRoot.children.length;
                            f++
                        ) {
                            d = this.dict.pointRoot.children[f];
                            console.log("element.name", d.name);
                            (l.includes(d.name) || l.includes(d.name + "省")) &&
                                (d.getComponent(cc.Sprite).spriteFrame = this.lightSpriteFrame);
                        }
                        if (t.length >= e.length) {
                            this.dict.sucCity.getComponent(cc.Label).string = "已激活全部省份";
                        }
                        return [2];
                }
            });
        });
    };
    e.prototype.getLightProvince = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            var e;
            var n;
            var r;
            var o;
            return __generator(this, function (i) {
                switch (i.label) {
                    case 0:
                        t = $localStorageManager.default.get($localStorageConst.default.CityList) || [];
                        return [4, $configManager.Config.get($configConst.ConfigConst.City)];
                    case 1:
                        (e = i.sent()).sort(function (t, e) {
                            return t.sort - e.sort;
                        });
                        n = {};
                        e.forEach(function (t) {
                            if (n[t.province]) {
                                //
                            } else {
                                n[t.province] = 0;
                            }
                            n[t.province] += 1;
                        });
                        r = [];
                        o = {};
                        t.forEach(function (t) {
                            var i = e.find(function (e) {
                                return e.id == t;
                            }).province;
                            if (o[i]) {
                                //
                            } else {
                                o[i] = 0;
                            }
                            o[i] += 1;
                            if (o[i] >= n[i]) {
                                r.push(i);
                            }
                        });
                        return [2, r];
                }
            });
        });
    };
    e.prototype.noBtn = function () {
        $popupManager.default.hide();
    };
    __decorate([g(cc.SpriteFrame)], e.prototype, "lightSpriteFrame", void 0);
    return __decorate([m], e);
})($uIBase.default);
exports.default = y;
