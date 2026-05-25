var i;
var a;
var $level_249667_carItem = require("./Level-249667_carItem");
var c = cc._decorator;
var l = c.ccclass;
c.property;
(function (t) {
    t[(t.Stop = 0)] = "Stop";
    t[(t.Down = 1)] = "Down";
    t[(t.Up = 2)] = "Up";
    t[(t.Left = 3)] = "Left";
    t[(t.DownHide = 4)] = "DownHide";
})(a || (a = {}));
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.startPos = cc.v2(277, 177);
        e.config = [];
        e.mgr = null;
        e.carArr = [];
        e.distance = 140;
        e.horizontalDistance = 85;
        e.carAmount = 0;
        e.isStart = !1;
        e.speed = 50;
        e.isTransportCarMove = !0;
        return e;
    }
    __extends(e, t);
    e.prototype.init = function (t, e) {
        var o = this;
        this.config = t;
        this.mgr = e;
        this.carAmount = this.config.length;
        this.mgr.dict.uTransportAmount.getComponent(cc.Label).string = "" + this.carAmount;
        for (var i = 0; i < this.config.length; i++) {
            var r = this.config[i];
            var n = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("01" + r + "-0"));
            this.node.addChild(n);
            n.getComponent($level_249667_carItem.default).isUTransportCar = !0;
            n.getComponent($level_249667_carItem.default).path = 99;
            n.uTransportState = a.Stop;
            n.position = cc.v2(this.startPos.x, this.startPos.y + 70 * i);
            this.updatePos(r, n);
            this.carArr.push(n);
            n.opacity = 0;
        }
        this.scheduleOnce(function () {
            console.log("len", o.carArr[0].getComponent($level_249667_carItem.default).lenImgName);
            switch (o.carArr[0].getComponent($level_249667_carItem.default).lenImgName) {
                case 1:
                    o.carArr[0].x = o.startPos.x + 23;
                    break;
                case 2:
                    o.carArr[0].x = o.startPos.x + 7;
            }
            o.carArr[0].opacity = 255;
            o.carArr[0].uTransportState = a.Down;
            for (var t = 0; t < o.carArr.length; t++) {
                var e = o.carArr[t];
                if (0 != t) {
                    e.uTransportState = a.DownHide;
                }
            }
            o.isStart = !0;
        }, 0.5);
    };
    e.prototype.reduceUpdate = function () {
        this.carAmount -= 1;
        this.mgr.dict.uTransportAmount.getComponent(cc.Label).string = "" + this.carAmount;
    };
    e.prototype.updatePos = function (t, e) {
        if (2 == t) {
            var o = e.convertToWorldSpaceAR(cc.v2(0, -10));
            var i = e.parent.convertToNodeSpaceAR(o);
            e.position = i;
        } else {
            if (1 == t) {
                o = e.convertToWorldSpaceAR(cc.v2(0, -20));
                i = e.parent.convertToNodeSpaceAR(o);
                e.position = i;
            }
        }
    };
    e.prototype.update = function (t) {
        if (this.isStart && this.isTransportCarMove) {
            for (var e = 0; e < this.carArr.length; e++) {
                if (this.carArr[e] && this.carArr[e].active) {
                    var o = this.carArr[e];
                    if (o.uTransportState == a.Down) {
                        o.y -= this.speed * t;
                        o.y <= -345 && ((o.uTransportState = a.Left), this.changeCar(e, o));
                    } else if (o.uTransportState == a.DownHide) {
                        o.y -= this.speed * t;
                        o.y <= this.startPos.y && ((o.opacity = 255), (o.uTransportState = a.Down));
                    } else if (o.uTransportState == a.Left) {
                        o.x -= this.speed * t;
                        o.x <= -276 && ((o.uTransportState = a.Up), this.changeCar(e, o));
                    } else if ((o.uTransportState = a.Up) && ((o.y += this.speed * t), o.y >= this.startPos.y)) {
                        var i = this.filterCar(o);
                        if (i) {
                            o.uTransportState = a.DownHide;
                            this.changeCar(e, o, i.position.y + 70);
                        } else {
                            o.opacity = 255;
                            o.uTransportState = a.Down;
                            this.changeCar(e, o);
                        }
                    }
                }
            }
        }
    };
    e.prototype.stop = function (t) {
        this.isTransportCarMove = !1;
        this.unschedule(this.setTransportCarMove);
        this.scheduleOnce(this.setTransportCarMove, 1);
        if (this.mgr.checkHasCollision(t)) {
            //
        } else {
            this.mgr.addTailGasSpine(t);
        }
    };
    e.prototype.setTransportCarMove = function () {
        this.isTransportCarMove = !0;
    };
    e.prototype.filterCar = function (t) {
        var e = [];
        for (var o = 0; o < this.carArr.length; o++) {
            var i = this.carArr[o];
            if (i && i != t && i.uTransportState == a.DownHide) {
                e.push(i);
            }
        }
        if (0 == e.length) {
            return null;
        } else {
            return e.reduce(function (t, e) {
                if ((t.y || 0) > (e.y || 0)) {
                    return t;
                } else {
                    return e;
                }
            });
        }
    };
    e.prototype.changeCar = function (t, e, o) {
        var i = this;
        this.carArr[t] = null;
        var r;
        var n;
        var c;
        var l = e.getComponent($level_249667_carItem.default).colorImgName;
        var h = e.getComponent($level_249667_carItem.default).lenImgName;
        if (e.uTransportState == a.Left) {
            r = 2;
            (n = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("02" + h))).position = cc.v2(351, -345);
        } else {
            if (e.uTransportState == a.Up) {
                (r = 1),
                    ((n = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("01" + h + "-1"))).position = cc.v2(
                        -276,
                        -400
                    ));
            } else {
                if (e.uTransportState == a.Down) {
                    (r = 1),
                        ((n = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("01" + h + "-0"))).position =
                            this.startPos);
                } else {
                    e.uTransportState == a.DownHide &&
                        ((r = 1),
                        ((n = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("01" + h + "-0"))).position = cc.v2(
                            this.startPos.x,
                            o
                        )),
                        (n.opacity = 0));
                }
            }
        }
        n.uTransportState = e.uTransportState;
        n.active = !1;
        this.node.addChild(n);
        this.updatePos(h, n);
        n.getComponent($level_249667_carItem.default).mgr = this.mgr;
        n.getComponent($level_249667_carItem.default).colorImgName = l;
        n.getComponent($level_249667_carItem.default).lenImgName = h;
        n.getComponent($level_249667_carItem.default).dirImgName = r;
        n.getComponent($level_249667_carItem.default).carColor = e.getComponent($level_249667_carItem.default).carColor;
        n.getComponent($level_249667_carItem.default).isUTransportCar = !0;
        n.getComponent($level_249667_carItem.default).path = 99;
        if (this.mgr.isDebug) {
            var p = new cc.Node();
            p.name = "path";
            p.color = cc.Color.WHITE;
            p.addComponent(cc.Label);
            n.addChild(p);
            p.position = cc.v2(-13.105, -26.21);
        }
        var d = "" + l + r + h;
        c = "texture/" + this.mgr.folder + "/" + this.mgr.folder + "_" + d;
        cc.resources.load(c, function (o, r) {
            e.destroy();
            if (o) {
                //
            } else {
                if (r) {
                    n.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r);
                }
                n.active = !0;
                i.carArr[t] = n;
            }
        });
    };
    return __decorate([l], e);
})(cc.Component);
exports.default = h;
