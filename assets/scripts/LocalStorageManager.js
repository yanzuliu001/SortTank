var $localStorageConst = require("./LocalStorageConst");
var o = new ((function () {
    function t() {
        this.data = {};
        this.gameName = "oldDriver_";
    }
    t.prototype.init = function (t, e) {
        var n = this.get($localStorageConst.default.offlineTime) || new Date().getTime();
        this.set($localStorageConst.default.offlineTime, n);
        this.nextDayRefresh(t, e);
    };
    t.prototype.nextDayRefresh = function (t, e) {
        var n = new Date().getTime();
        var o = this.data[$localStorageConst.default.offlineTime];
        if (!this.isSameMonth() && e) {
            for (var i in e) this.set(i, e[i]);
        }
        if (!this.isSameDay() && n > o) {
            this.set($localStorageConst.default.offlineTime, n);
            if (!t) {
                return;
            }
            for (var i in t) this.set(i, t[i]);
        }
    };
    t.prototype.isSameDay = function () {
        var t = new Date();
        var e = new Date(this.data[$localStorageConst.default.offlineTime]);
        return t.getDate() === e.getDate() && t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
    };
    t.prototype.isSameMonth = function () {
        var t = new Date();
        var e = new Date(this.data[$localStorageConst.default.offlineTime]);
        return t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
    };
    t.prototype.set = function (t, e, n, r) {
        if (void 0 === n) {
            n = !0;
        }
        if (void 0 === r) {
            r = !0;
        }
        this.data[t] = e;
        if (r) {
            cc.sys.localStorage.setItem("" + this.gameName + t, JSON.stringify(e));
        }
        if (n) {
            cc.game.emit("localStorage_" + t, e);
        }
    };
    t.prototype.get = function (t) {
        if (this.data[t]) {
            return this.data[t];
        }
        var e = cc.sys.localStorage.getItem("" + this.gameName + t);
        if (e) {
            return JSON.parse(e);
        } else {
            return null;
        }
    };
    t.prototype.remove = function (t) {
        delete this.data[t];
        cc.sys.localStorage.removeItem("" + this.gameName + t);
    };
    t.prototype.clear = function () {
        this.data = {};
        cc.sys.localStorage.clear();
    };
    t.prototype.console = function (t) {
        console.log(this.data[t]);
    };
    return t;
})())();
exports.default = o;
