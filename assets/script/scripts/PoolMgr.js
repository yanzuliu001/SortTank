var i = (function () {
    function t() {
        this.poolMap = {};
    }
    t.prototype.get = function (t, e) {
        var o = null;
        var i = this.poolMap[e];
        (o = i && i.size() ? i.get() : cc.instantiate(t)).active = !0;
        return o;
    };
    t.prototype.put = function (t, e) {
        t.active = !1;
        var o = this.poolMap[e];
        if (o) {
            o.put(t);
        } else {
            var i = new cc.NodePool();
            this.poolMap[e] = i;
            i.put(t);
        }
    };
    t.prototype.clear = function (t) {
        this.poolMap[t].clear();
        delete this.poolMap[t];
    };
    return t;
})();
exports.default = i;
