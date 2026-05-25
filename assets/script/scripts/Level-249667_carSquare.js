var i;
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.startPos = cc.v2(-256, 255);
            e.roadAmount = 7;
            e.horizontalDistance = 85;
            e.verticalDistance = 20;
            e.carArr = [];
            e.carAmount = [];
            e.mgr = null;
            e.row = 0;
            e.col = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {};
        e.prototype.init = function (t, e) {
            this.carAmount = t;
            this.mgr = e;
            var o = this.carAmount.reduce(function (t, e) {
                return t + e;
            }, 0);
            for (var i = 0; i < o; i++) {
                var r = this.getLen();
                var n = cc.instantiate(this.mgr.dict.carPrefab.getChildByName("02" + (r + 1)));
                if (this.row - 1 == -1) {
                    n.position = cc.v2(this.startPos.x + this.col * this.horizontalDistance, this.startPos.y);
                } else {
                    var a = this.carArr[this.row - 1][this.col];
                    n.position = cc.v2(
                        this.startPos.x + this.col * this.horizontalDistance,
                        a.y - a.height - this.verticalDistance
                    );
                }
                this.node.addChild(n);
                n.carSquareCol = this.col;
                if (this.carArr[this.row]) {
                    //
                } else {
                    this.carArr[this.row] = [];
                }
                this.carArr[this.row][this.col] = n;
                this.col += 1;
                if (this.col >= this.roadAmount) {
                    this.col = 0;
                    this.row += 1;
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
            var e = t.carSquareCol;
            var o = t.height;
            for (var i = 0; i < this.carArr.length; i++) {
                for (var r = 0; r < this.carArr[0].length; r++) {
                    this.carArr[i][r];
                    this.carArr[i][r] &&
                        this.carArr[i][r].carSquareCol == e &&
                        cc
                            .tween(this.carArr[i][r])
                            .by(0.3, {
                                y: o + this.verticalDistance
                            })
                            .start();
                }
            }
        };
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
