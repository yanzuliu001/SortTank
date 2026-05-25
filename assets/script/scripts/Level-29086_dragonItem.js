var i;
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.dragonColor = null;
            e.dir = 0;
            e.colorImgName = null;
            e.dirImgName = null;
            e.isMoving = !1;
            return e;
        }
        __extends(e, t);
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
