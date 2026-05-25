var i;
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            cc.director.getCollisionManager().enabled = !0;
        };
        e.prototype.onCollisionEnter = function () {};
        e.prototype.onCollisionStay = function () {};
        e.prototype.onCollisionExit = function () {};
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
