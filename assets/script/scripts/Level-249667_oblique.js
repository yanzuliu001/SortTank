var i;
var $level_249667_carItem = require("./Level-249667_carItem");
var s = cc._decorator;
var c = s.ccclass;
var l =
    (s.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.startPos = cc.v2(-85, 245);
            e.roadAmount = 3;
            e.horizontalDistance = 85;
            e.verticalDistance = 20;
            e.carArr = [];
            e.leftCarArr = [];
            e.rightCarArr = [];
            e.hideCarArr = [];
            e.carAmount = [];
            e.mgr = null;
            e.row = 0;
            e.col = 0;
            e.oblique = [];
            e.distance = 140;
            e.leftObliquePos = cc.v2(-265, 188);
            e.rightObliquePos = cc.v2(265, 188);
            e.sum = 0;
            e.surplusAmount = 0;
            e.isAnim = !1;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {};
        e.prototype.init = function (t, e, o) {
            this.mgr = o;
            this.carAmount = t;
            this.oblique = e;
            this.sum = this.carAmount.reduce(function (t, e) {
                return t + e;
            }, 0);
            var i = this.sum;
            if (this.sum >= 9) {
                i = 9;
            }
            for (var r = 0; r < i; r++) {
                var n = this.getLen();
                var s = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("02" + (n + 1)));
                if (this.row - 1 == -1) {
                    s.position = cc.v2(this.startPos.x + this.col * this.horizontalDistance, this.startPos.y);
                } else {
                    var c = this.carArr[this.row - 1][this.col];
                    s.position = cc.v2(
                        this.startPos.x + this.col * this.horizontalDistance,
                        c.y - this.distance - this.verticalDistance
                    );
                }
                this.node.addChild(s);
                s.carSquareCol = this.col;
                s.carSquareRow = this.row;
                if (this.carArr[this.row]) {
                    //
                } else {
                    this.carArr[this.row] = [];
                }
                this.carArr[this.row][this.col] = s;
                this.col += 1;
                if (this.col >= this.roadAmount) {
                    this.col = 0;
                    this.row += 1;
                }
            }
            this.surplusAmount = this.sum - i;
            this.mgr.dict.queueAmount.getComponent(cc.Label).string = "" + this.surplusAmount;
            if (this.surplusAmount > 0) {
                for (r = 0; r < this.sum - i; r++) {
                    n = this.getLen();
                    s = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("02" + (n + 1)));
                    var l = cc.view.getFrameSize().width / cc.view.getFrameSize().height;
                    if (l < 0.5) {
                        s.position = cc.v2(0, -339 - (this.distance + this.verticalDistance) * r);
                    } else {
                        s.position = cc.v2(0, -289 - (this.distance + this.verticalDistance) * r);
                    }
                    this.node.addChild(s);
                    this.hideCarArr.push(s);
                    if (0 == r) {
                        s.obliqueHead = !0;
                    }
                    if (0 != r) {
                        s.opacity = 0;
                    }
                }
            }
            if (this.oblique[0].length) {
                for (r = 0; r < this.oblique[0].length; r++) {
                    if (0 != (n = this.oblique[0][r])) {
                        s = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("04" + n + "-1"));
                        this.node.addChild(s);
                        s.position = cc.v2(this.leftObliquePos.x, this.leftObliquePos.y - 99 * r);
                        if (2 == n) {
                            var h = s.convertToWorldSpaceAR(cc.v2(0, -10));
                            var p = s.parent.convertToNodeSpaceAR(h);
                            s.position = p;
                        } else {
                            if (1 == n) {
                                h = s.convertToWorldSpaceAR(cc.v2(0, -20));
                                p = s.parent.convertToNodeSpaceAR(h);
                                s.position = p;
                            }
                        }
                        s.path = 1;
                        s.getComponent($level_249667_carItem.default).leftObliqueCar = !0;
                        this.leftCarArr.push(s);
                    }
                }
            }
            if (this.oblique[1].length) {
                for (r = 0; r < this.oblique[1].length; r++) {
                    if (0 != (n = this.oblique[1][r])) {
                        s = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("04" + n + "-0"));
                        this.node.addChild(s);
                        s.position = cc.v2(this.rightObliquePos.x, this.rightObliquePos.y - 99 * r);
                        if (2 == n) {
                            (h = s.convertToWorldSpaceAR(cc.v2(0, -10))),
                                (p = s.parent.convertToNodeSpaceAR(h)),
                                (s.position = p);
                        } else {
                            1 == n &&
                                ((h = s.convertToWorldSpaceAR(cc.v2(0, -20))),
                                (p = s.parent.convertToNodeSpaceAR(h)),
                                (s.position = p));
                        }
                        s.path = 1;
                        s.getComponent($level_249667_carItem.default).rightObliqueCar = !0;
                        this.rightCarArr.push(s);
                    }
                }
            }
        };
        e.prototype.getLen = function () {
            for (
                var t = this.mgr.randomNum(0, 2);
                !this.carAmount[t] &&
                0 !=
                    this.carAmount.reduce(function (t, e) {
                        return t + e;
                    }, 0);

            ) {
                t = this.mgr.randomNum(0, 2);
            }
            this.carAmount[t] -= 1;
            return t;
        };
        e.prototype.carMove = function (t) {
            var e = this;
            if (null != t.carSquareCol || null != t.carSquareRow) {
                this.isAnim = !0;
                var o = t.carSquareCol;
                var i = t.carSquareRow;
                for (var r = (t.height, 0); r < this.carArr.length; r++) {
                    for (var n = 0; n < this.carArr[0].length; n++) {
                        if (this.carArr[r][n] && this.carArr[r][n].carSquareCol == o) {
                            cc.tween(this.carArr[r][n])
                                .by(0.3, {
                                    y: this.distance + this.verticalDistance
                                })
                                .start();
                        }
                    }
                }
                if (this.hideCarArr.length) {
                    this.scheduleOnce(function () {
                        var t = e.hideCarArr.shift();
                        t.position;
                        console.log("后面车补充");
                        t.carSquareCol = o;
                        t.carSquareRow = i;
                        cc.tween(t)
                            .to(0.3, {
                                position: cc.v2(
                                    e.startPos.x + o * e.horizontalDistance,
                                    e.startPos.y - 2 * (e.distance + e.verticalDistance)
                                )
                            })
                            .call(function () {
                                t.obliqueHead = !1;
                                console.log("this.carArr[carSquareRow][carSquareCol]", i, o);
                                e.carArr[i][o] = t;
                            })
                            .start();
                        e.surplusAmount -= 1;
                        e.mgr.dict.queueAmount.getComponent(cc.Label).string = "" + e.surplusAmount;
                        if (e.hideCarArr.length > 0) {
                            var r = function (t) {
                                var o = e.hideCarArr[t];
                                if (0 == t) {
                                    o.opacity = 255;
                                }
                                cc.tween(o)
                                    .by(0.3, {
                                        y: e.distance + e.verticalDistance
                                    })
                                    .call(function () {
                                        if (t == e.hideCarArr.length - 1) {
                                            e.isAnim = !1;
                                            console.log("isAnim-结束");
                                        } else {
                                            if (0 == t) {
                                                console.log("车头");
                                                o.obliqueHead = !0;
                                            }
                                        }
                                    })
                                    .start();
                            };
                            for (var n = 0; n < e.hideCarArr.length; n++) {
                                r(n);
                            }
                        } else {
                            e.isAnim = !1;
                        }
                    }, 0.4);
                } else {
                    this.isAnim = !1;
                }
            }
        };
        return __decorate([c], e);
    })(cc.Component));
exports.default = l;
