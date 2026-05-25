var r;
var a = (function () {
    function t() {
        this.timerController = null;
        this.events = [];
        this.serverStartTime = 0;
        this.useTime = 0;
    }
    t.prototype.init = function (t) {
        var e = this;
        this.timerController = cc.find("Canvas").addComponent(c);
        this.serverStartTime = t;
        console.log("开始计时");
        this.schedule(function () {
            e.useTime += 1;
            if (e.events.length) {
                for (var t = 0; t < e.events.length; t++) {
                    e.events[t]();
                }
            }
        }, 1);
    };
    t.prototype.addEventListener = function (t) {
        this.events.push(t);
    };
    t.prototype.removeEventListener = function (t) {
        var e = this.events.indexOf(t);
        this.events.splice(e, 1);
    };
    t.prototype.schedule = function (t, e, n, r) {
        this.timerController.schedule(t, e, n, r);
    };
    t.prototype.scheduleOnce = function (t, e) {
        this.timerController.scheduleOnce(t, e);
    };
    t.prototype.unschedule = function (t) {
        this.timerController.unschedule(t);
    };
    t.prototype.unscheduleAllCallbacks = function () {
        this.timerController.unscheduleAllCallbacks();
    };
    t.prototype.getCurrentTime = function () {
        return 1e3 * (this.serverStartTime + this.useTime);
    };
    return t;
})();
var s = cc._decorator.ccclass;
var c = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    __extends(e, t);
    return __decorate([s], e);
})(cc.Component);
var l = new a();
exports.default = l;
