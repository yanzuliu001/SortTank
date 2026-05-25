var r = (function () {
    function t() {}
    t.createPool = function (t) {
        var e = new cc.NodePool();
        this.dictPool[t.name] = e;
    };
    t.get = function (t) {
        var e = this.dictPool["" + t.name];
        if (null == e ? void 0 : e.size()) {
            return e.get();
        } else {
            if (e) {
                return cc.instantiate(t);
            } else {
                return this.createPool(t), cc.instantiate(t);
            }
        }
    };
    t.put = function (t) {
        var e = this.dictPool[t.name];
        if (e) {
            return e.put(t);
        }
        this.createPool(t);
        this.dictPool[t.name].put(t);
    };
    t.clear = function (t) {
        if (this.dictPool[t]) {
            this.dictPool[t].clear();
            delete this.dictPool[t];
        }
    };
    t.dictPool = {};
    return t;
})();
exports.default = r;
