var i;
var $audioManager = require("../../scripts/AudioManager");
var $collision = require("./Collision");
var $level_249667_busConfig = require("./Level-249667_busConfig");
var $level_249667_carItem = require("./Level-249667_carItem");
var h = cc._decorator;
var p = h.ccclass;
var d =
    (h.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.oldPos = null;
            e.bulldozerSpeed = 400;
            e.state = $level_249667_busConfig.BulldozerState.Idle;
            e.mgr = null;
            e.minLen = 10;
            e.boundary = 750;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            this.node.getChildByName("bulldozerChild").getComponent($collision.default).onCollisionEnter =
                this.onCollisionEnter.bind(this);
        };
        e.prototype.init = function (t) {
            this.mgr = t;
        };
        e.prototype.onCollisionEnter = function (t, e) {
            var o = this;
            if ("box" == t.node.name) {
                this.scheduleOnce(function () {
                    var i = t.node.parent.convertToWorldSpaceAR(t.node.position);
                    var r = e.node.parent.convertToNodeSpaceAR(i);
                    var n = cc.instantiate(t.node);
                    n.name = "boxCopy";
                    n.position = r;
                    n.getComponent($collision.default).onCollisionEnter = o.onCollisionEnter_boxCopy.bind(o);
                    e.node.parent.addChild(n);
                    n.angle = -e.node.parent.angle;
                    t.node.destroy();
                    o.oldPos = o.node.position;
                    if (52 == Math.round(Math.abs(e.node.parent.angle))) {
                        var a = cc.instantiate(e.node);
                        a.removeComponent(cc.PolygonCollider);
                        e.node.parent.addChild(a);
                    }
                }, 0);
            } else {
                if (
                    "car" == t.node.name &&
                    t.node.parent.getComponent($level_249667_carItem.default).carState ==
                        $level_249667_busConfig.CarState.Idle
                ) {
                    this.scheduleOnce(function () {
                        var e = o.node.position.sub(o.oldPos).mag();
                        o.node.stopAllActions();
                        if ($audioManager.Audio.getEffectMute()) {
                            //
                        } else {
                            o.mgr.playLevelSound("Crash");
                        }
                        o.mgr.hit(o.node);
                        var i = t.node.parent.getComponent($level_249667_carItem.default);
                        t.node.parent.runAction(i.shackAction(0.1, 2));
                        cc.tween(o.node)
                            .to(e / o.bulldozerSpeed, {
                                position: o.oldPos
                            })
                            .call(function () {
                                o.state = $level_249667_busConfig.BulldozerState.Idle;
                            })
                            .start();
                    }, 0);
                } else {
                    "car" == t.node.name &&
                        t.node.parent.getComponent($level_249667_carItem.default).carState ==
                            $level_249667_busConfig.CarState.Normal &&
                        this.scheduleOnce(function () {
                            t.node.parent.getComponent($level_249667_carItem.default).carBack(o.node);
                        }, 0);
                }
            }
        };
        e.prototype.onCollisionEnter_boxCopy = function (t, e) {
            var o = this;
            if ("car" == t.node.name) {
                e.node.parent.stopAllActions();
                if ($audioManager.Audio.getEffectMute()) {
                    //
                } else {
                    this.mgr.playLevelSound("Crash");
                }
                var i = t.node.parent.getComponent($level_249667_carItem.default);
                t.node.parent.runAction(i.shackAction(0.1, 2));
                var r = this.node.position.sub(this.oldPos).mag();
                cc.tween(this.node)
                    .to(r / this.bulldozerSpeed, {
                        position: this.oldPos
                    })
                    .call(function () {
                        o.state = $level_249667_busConfig.BulldozerState.Idle;
                    })
                    .start();
            } else if ("box" == t.node.name) {
                var n = t.node.parent.convertToWorldSpaceAR(t.node.position);
                var h = this.node.convertToNodeSpaceAR(n);
                var p = cc.instantiate(t.node);
                p.name = "boxCopy";
                p.position = h;
                p.getComponent($collision.default).onCollisionEnter = this.onCollisionEnter_boxCopy.bind(this);
                this.node.addChild(p);
                p.angle = -this.node.angle;
                t.node.destroy();
                this.oldPos = this.node.position;
                var d = e.node.position;
                e.node.position = h;
                p.position = d;
                if (52 == Math.round(Math.abs(this.node.angle))) {
                    var u = cc.instantiate(this.node.getChildByName("bulldozerChild"));
                    u.removeComponent(cc.PolygonCollider);
                    this.node.addChild(u);
                }
            }
        };
        e.prototype.update = function () {
            if (this.state == $level_249667_busConfig.BulldozerState.Normal) {
                if (
                    this.node.x <= -(this.boundary / 2 + this.node.width / 2) ||
                    this.node.x >= this.boundary / 2 + this.node.width / 2
                ) {
                    console.log("超过边界销毁");
                    this.node.destroy();
                }
                var t = this.mgr.dict.road.parent.convertToWorldSpaceAR(this.mgr.dict.road.position);
                var e = this.node.parent.convertToNodeSpaceAR(t);
                if (this.node.y >= e.y - 2 * this.minLen) {
                    console.log("检测碰到公路");
                    this.state = $level_249667_busConfig.BulldozerState.OnRoad;
                    this.mgr.changeBulldozer(this.node);
                }
            }
        };
        e.prototype.getWPosByNode = function (t) {
            return t.parent.convertToWorldSpaceAR(t.position);
        };
        return __decorate([p], e);
    })(cc.Component));
exports.default = d;
