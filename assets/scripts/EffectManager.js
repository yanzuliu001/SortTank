exports.Effect = void 0;
var r;
var $eventConst = require("./EventConst");
var $eventManager = require("./EventManager");
var a = (function () {
    function t() {
        this.poolMap = {};
    }
    t.prototype.showEffect = function (t, e, n) {
        var a = this;
        if (void 0 === t) {
            t = 50;
        }
        if (void 0 === n) {
            n = 0;
        }
        if (t > 50) {
            t = 50;
        } else {
            t = t;
        }
        var s = "prefab/item/Power";
        var c = r.power;
        if (1 == n) {
            s = "prefab/item/Key";
            c = r.key;
        } else {
            if (2 == n) {
                (s = "prefab/item/Coin"), (c = r.coin);
            } else {
                3 == n && ((s = "prefab/item/DragonBall"), (c = r.metal));
            }
        }
        for (var l = 0; l < t; ++l) {
            this.getNode(c, s).then(function (t) {
                var r = e;
                if (r && cc.isValid(r)) {
                    var s = cc.find("Canvas");
                    t.parent = s;
                    var l = cc.find("Canvas").getChildByName("Main Camera");
                    var u = s.convertToNodeSpaceAR(l.parent.convertToWorldSpaceAR(l.position));
                    var f = s.convertToNodeSpaceAR(r.parent.convertToWorldSpaceAR(r.position));
                    var d = cc.v3(200 * Math.random() - 100 + u.x, 200 * Math.random() - 100 + u.y, 0);
                    if (3 == n) {
                        d = cc.v3(200 * Math.random() - 100 + u.x, 200 * Math.random() - 100 + u.y - 200, 0);
                    }
                    t.position = d;
                    t.stopAllActions();
                    t.opacity = 0;
                    t.zIndex = cc.macro.MAX_ZINDEX;
                    setTimeout(function () {
                        if (r && cc.isValid(r)) {
                            var s = cc.moveTo(1, cc.v2(f.x, f.y));
                            t.runAction(
                                cc.sequence(
                                    cc.spawn(cc.fadeIn(0.1), cc.moveBy(0.1, 0, 15).easing(cc.easeBackIn())),
                                    cc.delayTime(0.05),
                                    s.easing(cc.easeBackIn()),
                                    cc.callFunc(function () {
                                        var r = e;
                                        if (r && cc.isValid(r)) {
                                            a.putNode(c, t);
                                            r.stopAllActions();
                                            var s = r.scale;
                                            if (1 == n) {
                                                $eventManager.Event.emit($eventConst.default.KEY_UPDATE);
                                            } else {
                                                if (2 == n) {
                                                    $eventManager.Event.emit($eventConst.default.COIN_UPDATE);
                                                } else {
                                                    if (3 == n) {
                                                        $eventManager.Event.emit($eventConst.default.Metal_UPDATE);
                                                    } else {
                                                        $eventManager.Event.emit($eventConst.default.POWER_UPDATE);
                                                    }
                                                }
                                            }
                                            cc.tween(r)
                                                .to(
                                                    0.3 * s,
                                                    {
                                                        scale: s
                                                    },
                                                    {
                                                        easing: cc.easing.backOut
                                                    }
                                                )
                                                .start();
                                        } else {
                                            a.putNode(c, t);
                                        }
                                    })
                                )
                            );
                        }
                    }, 800 * Math.random());
                }
            });
        }
    };
    t.prototype.getNode = function (t, e) {
        var n = this;
        return new Promise(function (r) {
            var o = null;
            var i = n.poolMap[t];
            if (i && i.size()) {
                (o = i.get()).active = !0;
                console.log("数量充足,从对象池获取<" + o.name + ">");
                r(o);
            } else {
                cc.resources.load("" + e, function (t, n) {
                    if (t) {
                        return cc.error(t);
                    }
                    cc.log("加载预制成功", "" + e);
                    (o = cc.instantiate(n)).active = !0;
                    console.log("数量不足,创建<" + o.name + ">");
                    r(o);
                });
            }
        });
    };
    t.prototype.putNode = function (t, e) {
        e.active = !1;
        var n = this.poolMap[t];
        if (n) {
            n.put(e);
        } else {
            var r = new cc.NodePool();
            this.poolMap[t] = r;
            r.put(e);
        }
    };
    t.prototype.clear = function (t) {
        this.poolMap[t].clear();
        delete this.poolMap[t];
    };
    return t;
})();
(function (t) {
    t.power = "power";
    t.key = "key";
    t.coin = "coin";
    t.metal = "Metal";
})(r || (r = {}));
exports.Effect = new a();
