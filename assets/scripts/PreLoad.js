var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.carSpriteFrame = [];
        return e;
    }
    __extends(e, t);
    e.prototype.start = function () {};
    __decorate([c([cc.SpriteFrame])], e.prototype, "carSpriteFrame", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
