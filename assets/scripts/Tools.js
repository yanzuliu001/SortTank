var r = (function () {
    function t() {}
    t.deepClone = function (t) {
        var e;
        if (t instanceof Array) {
            e = [];
        } else {
            e = {};
        }
        for (var n in t) e[n] = "object" == typeof t[n] ? this.deepClone(t[n]) : t[n];
        return e;
    };
    t.shuffleArray = function (t) {
        var e;
        for (var n = t.length - 1; n > 0; n--) {
            var r = Math.floor(Math.random() * (n + 1));
            e = [t[r], t[n]];
            t[n] = e[0];
            t[r] = e[1];
        }
        return t;
    };
    t.isNationalDay = function () {
        var t = new Date();
        var e = t.getMonth() + 1;
        var n = t.getDate();
        return 10 == e && n <= 7;
    };
    t.rockAction = function (t, e, n) {
        var r = cc.rotateBy(t, e);
        var o = cc.rotateBy(t, -2 * e);
        var i = cc.rotateBy(0.8 * t, 1.6 * e);
        var a = cc.rotateBy(0.6 * t, -2 * e * 0.6);
        var s = cc.rotateBy(0.4 * t, 0.8 * e);
        var c = cc.rotateTo(0.2 * t, 0);
        return cc.sequence(
            r,
            o,
            i,
            a,
            s,
            c,
            cc.callFunc(function () {
                console.log("动画序列完成");
                n();
            }, this)
        );
    };
    return t;
})();
exports.default = r;
