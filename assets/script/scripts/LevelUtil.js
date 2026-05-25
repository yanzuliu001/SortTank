var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function () {
        function t() {}
        t.log = function (t, e) {
            if (this.isShowLog) {
                if (e) {
                    cc.log(
                        "%c " + t + " %c " + e + " ",
                        "background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;",
                        "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;"
                    );
                } else {
                    cc.log("%c " + t + " ", "background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;");
                }
            }
        };
        t.setProjectBg = function (t) {
            var e;
            if (void 0 === t) {
                t = cc.Color.GRAY;
            }
            for (var o = 0; o < cc.Camera.cameras.length; o++) {
                var i = cc.Camera.cameras[o];
                if ("Main Camera" == i.node.name) {
                    e = i;
                }
            }
            if (e) {
                var r = e.node.parent.getChildByName("Sprite Background");
                if (r) {
                    cc.log("更改项目背景图 测试碰撞");
                    r.color = t;
                }
            }
        };
        t.touchEvent = function (t, e) {
            var o = {
                start: function (t) {
                    if (e.sFunc) {
                        e.sFunc(t);
                    }
                },
                move: function (t) {
                    if (e.mFunc) {
                        e.mFunc(t);
                    }
                },
                end: function (t) {
                    if (e.eFunc) {
                        e.eFunc(t);
                    }
                }
            };
            if (e.sFunc) {
                t.on(cc.Node.EventType.TOUCH_START, o.start, this);
            }
            if (e.mFunc) {
                t.on(cc.Node.EventType.TOUCH_MOVE, o.move, this);
            }
            if (e.eFunc) {
                t.on(cc.Node.EventType.TOUCH_END, o.end, this);
                t.on(cc.Node.EventType.TOUCH_CANCEL, o.end, this);
            }
            this.touchList[t.uuid] = {
                target: t,
                func: o
            };
        };
        t.clearEvent = function (t, e) {
            if (void 0 === e) {
                e = !1;
            }
            if (e) {
                var o = 0;
                for (var i = Object.entries(this.touchList); o < i.length; o++) {
                    var r = i[o];
                    var n = r[0];
                    var a = (r[1], this.touchList[n]);
                    var s = a.func;
                    var c = a.target;
                    c.off(cc.Node.EventType.TOUCH_START, s.start, this);
                    c.off(cc.Node.EventType.TOUCH_MOVE, s.move, this);
                    c.off(cc.Node.EventType.TOUCH_END, s.end, this);
                    c.off(cc.Node.EventType.TOUCH_CANCEL, s.end, this);
                    delete this.touchList[n];
                }
            } else {
                if (!t) {
                    return void cc.log("[LevelUtil.clearEvent] target为空");
                }
                if (this.touchList[t.uuid]) {
                    s = this.touchList[t.uuid].func;
                    t.off(cc.Node.EventType.TOUCH_START, s.start, this);
                    t.off(cc.Node.EventType.TOUCH_MOVE, s.move, this);
                    t.off(cc.Node.EventType.TOUCH_END, s.end, this);
                    t.off(cc.Node.EventType.TOUCH_CANCEL, s.end, this);
                    delete this.touchList[t.uuid];
                }
            }
        };
        t.onClickEvent = function (t, e, o) {
            if (void 0 === o) {
                o = !0;
            }
            var i = {
                start: function () {},
                move: function () {},
                end: function () {}
            };
            if (o) {
                i.start = function (t) {
                    if (e) {
                        e(t);
                    }
                };
                t.on(cc.Node.EventType.TOUCH_START, i.start, this);
            } else {
                i.end = function (t) {
                    if (e) {
                        e(t);
                    }
                };
                t.on(cc.Node.EventType.TOUCH_END, i.end, this);
            }
            this.touchList[t.uuid] = {
                target: t,
                func: i
            };
        };
        t.setRigidBodyType = function (t, e, o) {
            if (void 0 === o) {
                o = !1;
            }
            if (t) {
                var i = null;
                if (t instanceof cc.Node) {
                    i = t.getComponent(cc.RigidBody);
                } else {
                    i = t;
                }
                e.scheduleOnce(function () {
                    if (o) {
                        i.type = cc.RigidBodyType.Static;
                    } else {
                        i.type = cc.RigidBodyType.Dynamic;
                    }
                });
            }
        };
        t.removePhysics = function (t, e) {
            e.scheduleOnce(function () {
                t.removeComponent(cc.PhysicsCollider);
                t.removeComponent(cc.RigidBody);
            });
        };
        t.playSpineCallBack = function (t, e, o, i) {
            if (void 0 === o) {
                o = !1;
            }
            if (void 0 === i) {
                i = null;
            }
            if (t) {
                var r;
                if (t instanceof sp.Skeleton) {
                    r = t;
                } else {
                    r = t.getComponent(sp.Skeleton);
                }
                if (r) {
                    r.setAnimation(0, e, o);
                    r.setCompleteListener(function (t) {
                        if (t.animation.name == e && i) {
                            i();
                        }
                    });
                }
            }
        };
        t.convertPosition = function (t, e) {
            return e.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec2.ZERO));
        };
        t.getWorldPos = function (t) {
            return t.parent.convertToWorldSpaceAR(t.position);
        };
        t.getObj = function (t, e) {
            var o = null;
            var i = this.poolMap[t];
            (o = i && i.size() ? i.get() : cc.instantiate(e)).active = !0;
            return o;
        };
        t.putObj = function (t, e) {
            e.active = !1;
            var o = this.poolMap[t];
            if (o) {
                o.put(e);
            } else {
                var i = new cc.NodePool();
                this.poolMap[t] = i;
                i.put(e);
            }
        };
        t.clearObj = function () {
            this.poolMap.clear;
        };
        t.loadByFrame = function (t, e, o, i) {
            var r = 0;
            var n = function () {
                for (var a = 0; a < o; a++) {
                    if (e) {
                        e(r++);
                    }
                }
                if (r < i) {
                    t.scheduleOnce(function () {
                        return n();
                    });
                }
            };
            n();
        };
        t.setChildrenActive = function (t, e) {
            if (t) {
                t.children.forEach(function (t, o) {
                    t.active = e == o;
                });
            }
        };
        t.deepCopy = function (t) {
            if (null == t || "object" != typeof t) {
                return t;
            }
            var e = null;
            if (t instanceof Date) {
                (e = new Date()).setTime(t.getTime());
                return e;
            }
            if (t instanceof Array) {
                e = [];
                var o = 0;
                for (var i = t.length; o < i; o++) {
                    e[o] = this.deepCopy(t[o]);
                }
                return e;
            }
            if (t instanceof Object) {
                for (var r in ((e = {}), t))
                    if (t.hasOwnProperty(r)) {
                        e[r] = this.deepCopy(t[r]);
                    }
                return e;
            }
            console.warn("不支持的类型：" + e);
        };
        t.getRandomInt = function (t, e) {
            if (void 0 === t) {
                t = 0;
            }
            if (void 0 === e) {
                e = 1;
            }
            return Math.floor(Math.random() * (e - t) + t);
        };
        t.getAngle = function (t, e) {
            return Math.atan((e.y - t.y) / (e.x - t.x));
        };
        t.getDistance = function (t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        };
        t.angleToRadian = function (t) {
            return (t * Math.PI) / 180;
        };
        t.addSafely = function (t, e) {
            var o = (t.toString().split(".")[1] || "").length;
            var i = (e.toString().split(".")[1] || "").length;
            var r = Math.pow(10, Math.max(o, i));
            return (t * r + e * r) / r;
        };
        t.getRandomValueInArray = function (t) {
            return t[Math.floor(Math.random() * t.length)];
        };
        t.copyArray = function (t) {
            var e = [];
            for (var o = 0; o < t.length; o++) {
                e.push(t[o]);
            }
            return e;
        };
        t.copy2DArray = function (t) {
            var e = [];
            for (var o = 0; o < t.length; o++) {
                e.push(t[o].concat());
            }
            return e;
        };
        t.fisherYatesShuffle = function (t) {
            for (var e = t.length; e; ) {
                var o = Math.floor(Math.random() * e--);
                var i = t[e];
                t[e] = t[o];
                t[o] = i;
            }
            return t;
        };
        t.isHex = function (t) {
            return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t);
        };
        t.hexToRgba = function (t) {
            if (this.isHex(t)) {
                return {
                    r: parseInt(t.substr(1, 2), 16) || 0,
                    g: parseInt(t.substr(3, 2), 16) || 0,
                    b: parseInt(t.substr(5, 2), 16) || 0,
                    a: parseInt(t.substr(7, 2), 16) || 255
                };
            } else {
                return null;
            }
        };
        t.rgbaToHex = function (t) {
            var e = (256 | t.r).toString(16).slice(1);
            var o = (256 | t.g).toString(16).slice(1);
            var i = (256 | t.b).toString(16).slice(1);
            if (null == t.a) {
                return ("#" + e + o + i).toUpperCase();
            } else {
                return ("#" + e + o + i + (256 | t.a).toString(16).slice(1)).toUpperCase();
            }
        };
        t.createCircleData = function (t, e, o) {
            if (void 0 === o) {
                o = 60;
            }
            var i = [];
            var r = 360;
            var n = 0;
            for (var a = 0; a < o; a++) {
                n = ((r -= 360 / o) * Math.PI) / 180;
                var s = t * Math.sin(n) + e.x;
                var c = t * Math.cos(n) + e.y;
                i.push(cc.v2(s, c));
            }
            return i;
        };
        t.getWorldPointsByPolygonComp = function (t) {
            var e = t.getComponent(cc.PolygonCollider);
            if (e) {
                //
            } else {
                e = t.getComponent(cc.PhysicsPolygonCollider);
            }
            var o = [];
            var i = [];
            if (e) {
                o = e.points;
                var r = e.offset;
                o.forEach(function (e) {
                    var o = cc.v2(e.x + r.x, e.y + r.y);
                    i.push(t.convertToWorldSpaceAR(o));
                });
            }
            return i;
        };
        t.getAreaByPoints = function (t) {
            var e = t.length;
            var o = 0;
            var i = 0;
            for (var r = 0; r < e - 1; ++r) {
                o += t[r].x * t[r + 1].y;
                i += t[r + 1].x * t[r].y;
            }
            return 0.5 * ((o += t[e - 1].x * t[0].y) - (i + t[0].x * t[e - 1].y));
        };
        t.optimizePoints = function (t) {
            var e = [];
            for (var o = 0; o < t.length; o++) {
                var i = t[o];
                var r = Math.floor(1 * i.x) / 1;
                var n = Math.floor(1 * i.y) / 1;
                e.push(cc.v2(r, n));
            }
            return e;
        };
        t.handleOneByOne = function (t, e) {
            return __awaiter(this, void 0, void 0, function () {
                var o = this;
                return __generator(this, function () {
                    if (this.canHandle) {
                        console.log("干他", new Date().getTime());
                        this.canHandle = !1;
                        e && e();
                        t.scheduleOnce(function () {
                            o.canHandle = !0;
                            var e = o.missionArr.shift();
                            if (e) {
                                o.handleOneByOne(t, e);
                            }
                        }, this.duration);
                    } else {
                        this.missionArr.push(e);
                    }
                    return [2];
                });
            });
        };
        t.isShowLog = !0;
        t.touchList = {};
        t.poolMap = {};
        t.duration = 0.1;
        t.missionArr = [];
        t.canHandle = !0;
        return __decorate([s], t);
    })());
exports.default = c;
