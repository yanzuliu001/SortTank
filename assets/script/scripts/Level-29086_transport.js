var i;
var $level_29086_boxCarItem = require("./Level-29086_boxCarItem");
var $level_29086_config = require("./Level-29086_config");
var c = cc._decorator;
var l = c.ccclass;
var h = c.property;
var p = {
    1: "021",
    2: "022",
    3: "023"
};
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.road0 = null;
        e.road1 = null;
        e.isMove = !1;
        e.isInit = !1;
        e.currentCarAmount = 0;
        e.speed = 50;
        e.allBox = [];
        e.distanceInterval = 80;
        e.mgr = null;
        e.config = [];
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t, e) {
        var o = this;
        this.mgr = t;
        this.config = e;
        this.isInit = !0;
        this.currentCarAmount = e.length;
        this.node.getChildByName("transportBoxAmount").getComponent(cc.Label).string = this.currentCarAmount.toString();
        this.createBox();
        this.scheduleOnce(function () {
            o.isMove = !0;
        }, 1);
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
        var t = this.node.convertToWorldSpaceAR(this.node.getChildByName("023").position);
        var e = this.mgr.dict.carRoot.convertToNodeSpaceAR(t);
        var o = this.node.convertToWorldSpaceAR(this.node.getChildByName("022").position);
        var i = this.mgr.dict.carRoot.convertToNodeSpaceAR(o);
        var r = this.node.convertToWorldSpaceAR(this.node.getChildByName("021").position);
        var n = this.mgr.dict.carRoot.convertToNodeSpaceAR(r);
        for (var s = 0; s < this.config.length; s++) {
            var c = this.config[s];
            var l = this.mgr.dict.carPrefab.getChildByName(p[c]);
            var h = cc.instantiate(l);
            this.mgr.dict.carRoot.addChild(h);
            h.position = e;
            h.isTransportBox = !0;
            this.allBox.push(h);
            h.x = e.x + s * this.distanceInterval;
            if ("021" == p[c]) {
                h.y = n.y;
            } else {
                if ("022" == p[c]) {
                    h.y = i.y;
                } else {
                    h.y = e.y;
                }
            }
            h.name = l.name;
            h.getComponent($level_29086_boxCarItem.default).path = 99;
            h.path = 99;
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
                if (
                    o &&
                    o.getComponent($level_29086_boxCarItem.default).carState == $level_29086_config.CarState.Idle
                ) {
                    var i = o.x - t * this.speed;
                    if (i <= -380 && this.getMaxXTransportCar()) {
                        var r = this.getMaxXTransportCar().x + this.distanceInterval;
                        if (r <= this.node.getChildByName("023").x) {
                            i = this.node.getChildByName("023").x;
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
    e.prototype.timerTransportMove = function (t) {
        if (void 0 === t) {
            t = 1.2;
        }
        this.unschedule(this.setTransportCarMove);
        this.scheduleOnce(this.setTransportCarMove, t);
    };
    e.prototype.setTransportCarMove = function () {
        this.isMove = !0;
    };
    e.prototype.setTransportCarNoMove = function (t) {
        this.isMove = !1;
        this.timerTransportMove(0.6);
        if (this.mgr.checkHasCollision(t)) {
            //
        } else {
            this.mgr.addTailGasSpine(t);
        }
    };
    __decorate([h(cc.Node)], e.prototype, "road0", void 0);
    __decorate([h(cc.Node)], e.prototype, "road1", void 0);
    return __decorate([l], e);
})(cc.Component);
exports.default = d;
