var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.diskNode = null;
        e.startAngle = 33;
        e.angleInterval = 50;
        e.itemAmount = 7;
        e._isRunning = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.startRun = function (t, e) {
        if (!this._isRunning) {
            var n = [];
            for (var r = 0; r < this.itemAmount; r++) {
                var o = this.startAngle + this.angleInterval * r;
                n.push(o);
            }
            for (var i = -this.diskNode.angle; i < 0; ) {
                i += 360;
            }
            i -= 360 * Math.floor(i / 360);
            var a = 1800 + n[t - 1] - i;
            var s = 4 + 2 * Math.random();
            var c = cc.rotateBy(s, a).easing(cc.easeCubicActionOut());
            var l = cc.callFunc(
                function () {
                    this._isRunning = !1;
                    console.log("转动结束");
                    if (e) {
                        e();
                    }
                }.bind(this)
            );
            var u = cc.sequence(c, l);
            this.diskNode.runAction(u);
            this._isRunning = !0;
        }
    };
    __decorate([c(cc.Node)], e.prototype, "diskNode", void 0);
    __decorate([c], e.prototype, "startAngle", void 0);
    __decorate([c], e.prototype, "angleInterval", void 0);
    __decorate([c], e.prototype, "itemAmount", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
