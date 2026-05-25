exports.Event = void 0;
var r = (function () {
    function t() {
        this.prefix = "event_";
    }
    t.prototype.on = function (t, e, n) {
        var r = "" + this.prefix + t;
        cc.game.on(r, e, n);
    };
    t.prototype.off = function (t, e, n) {
        var r = "" + this.prefix + t;
        cc.game.off(r, e, n);
    };
    t.prototype.emit = function (t) {
        var e = [];
        for (var n = 1; n < arguments.length; n++) {
            e[n - 1] = arguments[n];
        }
        var r = "" + this.prefix + t;
        cc.game.emit(r, e);
    };
    return t;
})();
exports.Event = new r();
