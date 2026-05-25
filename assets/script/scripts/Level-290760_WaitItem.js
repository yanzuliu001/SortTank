var i;
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.mgr = null;
            e.path = 1;
            return e;
        }
        __extends(e, t);
        e.prototype.init = function (t) {
            this.mgr = t;
        };
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
