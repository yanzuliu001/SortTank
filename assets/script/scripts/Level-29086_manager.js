var i;
var a;
var $brainLevelBase = require("./BrainLevelBase");
var c = cc._decorator;
var l = c.ccclass;
var h = c.property;
(function (t) {
    t[(t.map1 = 1)] = "map1";
    t[(t.map2 = 2)] = "map2";
    t[(t.map3 = 3)] = "map3";
    t[(t.map4 = 4)] = "map4";
    t[(t.map5 = 5)] = "map5";
    t[(t.map6 = 6)] = "map6";
    t[(t.map7 = 7)] = "map7";
    t[(t.map8 = 8)] = "map8";
    t[(t.map9 = 9)] = "map9";
    t[(t.map10 = 10)] = "map10";
    t[(t.map101 = 101)] = "map101";
    t[(t.map102 = 102)] = "map102";
})(a || (a = {}));
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.mapType = a.map1;
        return e;
    }
    __extends(e, t);
    e.prototype.onAssetLoadedAllFinishHandle = function () {};
    e.prototype.btnLoadMap = function () {
        var t = this.dict["Editbox Level"].getComponent(cc.EditBox).string || "";
        if (t) {
            this.loadMap(t);
        }
    };
    e.prototype.loadMap = function (t) {
        var e = this;
        return new Promise(function (o) {
            cc.loader.loadRes("zqddn_zhb/prefab/level/zqddn_zhb_level" + t, function (t, i) {
                if (t) {
                    return o();
                }
                var r = cc.instantiate(i);
                r.position = cc.Vec2.ZERO;
                var n = r._components;
                var a = !0;
                n.forEach(function (t) {
                    if (void 0 !== t.onLevelReady) {
                        a = !1;
                        t.onLevelReadyCopy = t.onLevelReady;
                        t.onLevelReady = function () {
                            t.onLevelReadyCopy();
                            e.scheduleOnce(function () {
                                e.dict["Button Jump"].active = !1;
                                e.dict["Editbox Level"].active = !1;
                                o();
                            });
                        };
                    }
                });
                r.parent = e.node;
                r.active = !1;
                if (a) {
                    e.scheduleOnce(function () {
                        e.dict["Button Jump"].active = !1;
                        e.dict["Editbox Level"].active = !1;
                        o();
                    });
                }
            });
        });
    };
    __decorate(
        [
            h({
                type: cc.Enum(a),
                tooltip: "地图"
            })
        ],
        e.prototype,
        "mapType",
        void 0
    );
    return __decorate([l], e);
})($brainLevelBase.default);
exports.default = p;
