var i;
var $level_28749 = require("./Level-28749");
var s = cc._decorator;
var c = s.ccclass;
var l = s.property;
var h = {
    1: "2-2",
    2: "3-2",
    3: "4-2"
};
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.road0 = null;
        e.road1 = null;
        e.isMove = !1;
        e.isInit = !1;
        e.currentCarAmount = 0;
        e.speed = 50;
        e.allBox = [];
        e.distanceInterval = 110;
        e.mgr = null;
        e.config = [];
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t, e) {
        this.mgr = t;
        this.config = e;
        this.isInit = !0;
        this.currentCarAmount = e.length;
        this.node.getChildByName("transportBoxAmount").getComponent(cc.Label).string = this.currentCarAmount.toString();
    };
    e.prototype.reduceCarAmount = function (t) {
        var e = this.allBox.indexOf(t);
        if (-1 !== e) {
            this.allBox.splice(e, 1);
        }
        if (t.getChildByName("shadow0")) {
            t.getChildByName("shadow0").destroy();
        }
        this.currentCarAmount -= 1;
        this.node.getChildByName("transportBoxAmount").getComponent(cc.Label).string = this.currentCarAmount.toString();
    };
    e.prototype.createBox = function () {
        var t = this.node.convertToWorldSpaceAR(this.node.getChildByName("4-2").position);
        var e = this.mgr.dict.boxLayer.convertToNodeSpaceAR(t);
        var o = this.node.convertToWorldSpaceAR(this.node.getChildByName("3-2").position);
        var i = this.mgr.dict.boxLayer.convertToNodeSpaceAR(o);
        var r = this.node.convertToWorldSpaceAR(this.node.getChildByName("2-2").position);
        var n = this.mgr.dict.boxLayer.convertToNodeSpaceAR(r);
        for (var a = 0; a < this.config.length; a++) {
            var s = this.config[a];
            var c = this.mgr.dict.boxPrefab.getChildByName(h[s]);
            var l = cc.instantiate(c);
            this.mgr.dict.boxLayer.addChild(l);
            l.position = e;
            l.isTransportBox = !0;
            this.allBox.push(l);
            l.x = e.x + a * this.distanceInterval;
            if ("2-2" == h[s]) {
                l.y = n.y;
            } else {
                if ("3-2" == h[s]) {
                    l.y = i.y;
                } else {
                    l.y = e.y;
                }
            }
            l.name = c.name;
            l[this.mgr.m_hierarchy] = 1;
            l[this.mgr.m_index] = 1;
            l.name = c.name;
            this.mgr.setBoxIndex(l);
            l.getChildByName("sp").zIndex = 0;
            var p = this.mgr.boxMap.get(1);
            p.push(l);
            this.mgr.boxMap.set(1, p);
            var d = null;
            if (l.name.includes("4-2")) {
                (d = cc.instantiate(this.mgr.dict.boxShadow_2)).position = cc.v2(-7, 3);
            } else {
                if (l.name.includes("3-2")) {
                    (d = cc.instantiate(this.mgr.dict.boxShadow_1)).position = cc.v2(-7, 3);
                } else {
                    (d = cc.instantiate(this.mgr.dict.boxShadow_0)).position = cc.v2(-7, 3);
                }
            }
            d.name = "shadow0";
            d.parent = l;
            l.children[0].zIndex = 2;
            d.zIndex = 1;
        }
    };
    e.prototype.update = function (t) {
        if (this.isInit && this.isMove) {
            this.road0.x -= t * this.speed;
            this.road1.x -= t * this.speed;
            if (this.road0.x <= -(315 + this.road0.width)) {
                this.road0.x = this.road1.x + this.road0.width;
            }
            if (this.road1.x <= -(315 + this.road0.width)) {
                this.road1.x = this.road0.x + this.road0.width;
            }
            for (var e = 0; e < this.allBox.length; e++) {
                var o = this.allBox[e];
                if (o && o[this.mgr.m_state] == $level_28749.BoxState.Empty) {
                    var i = o.x - t * this.speed;
                    if (i <= -350 && this.getMaxXTransportCar()) {
                        var r = this.getMaxXTransportCar().x + this.distanceInterval;
                        if (r <= this.node.getChildByName("4-2").x) {
                            i = this.node.getChildByName("4-2").x;
                        } else {
                            i = r;
                        }
                    }
                    o.x = i;
                }
            }
        }
    };
    e.prototype.getMaxXTransportCar = function () {
        var t = this.allBox[0];
        for (var e = 0; e < this.allBox.length; e++) {
            var o = this.allBox[e];
            if (o && o.x > t.x) {
                t = o;
            }
        }
        return t;
    };
    __decorate([l(cc.Node)], e.prototype, "road0", void 0);
    __decorate([l(cc.Node)], e.prototype, "road1", void 0);
    return __decorate([c], e);
})(cc.Component);
exports.default = p;
