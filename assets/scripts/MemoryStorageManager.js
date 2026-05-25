var r = new ((function () {
    function t() {
        this.data = {};
    }
    t.prototype.init = function (t) {
        this.data = t;
    };
    t.prototype.set = function (t, e) {
        if (JSON.stringify(this.data[t]) !== JSON.stringify(e)) {
            this.data[t] = e;
            console.log("触发：memoryStorage_" + t);
            cc.game.emit("memoryStorage_" + t, e);
        }
    };
    t.prototype.get = function (t) {
        return this.data[t];
    };
    t.prototype.remove = function (t) {
        delete this.data[t];
    };
    t.prototype.clear = function () {
        this.data = {};
    };
    return t;
})())();
exports.default = r;
