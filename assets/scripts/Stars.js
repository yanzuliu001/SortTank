var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.mask = null;
        e.starNum = 0;
        e.canMark = !0;
        e.isTouch = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    e.prototype.onTouchStart = function (t) {
        this.isTouch = !0;
        if (this.canMark) {
            this.checkStar(this.node.convertToNodeSpaceAR(t.getLocation()));
        }
    };
    e.prototype.onTouchMove = function (t) {
        if (this.canMark) {
            this.checkStar(this.node.convertToNodeSpaceAR(t.getLocation()));
        }
    };
    e.prototype.setCanMark = function (t) {
        this.canMark = t;
    };
    e.prototype.checkStar = function (t) {
        var e = t.x + this.node.width / 2;
        this.mask.node.width = e;
        var n = this.node.width / 5;
        this.starNum = e / n;
        this.starNum = Math.ceil(this.starNum);
        if (this.starNum < 1) {
            this.starNum = 1;
        } else {
            this.starNum = this.starNum;
        }
    };
    e.prototype.onDestroy = function () {
        this.node.targetOff(this);
    };
    __decorate([c(cc.Mask)], e.prototype, "mask", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
