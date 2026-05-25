var r = new ((function () {
    function t() {
        this.hints = [];
    }
    t.prototype.init = function () {};
    t.prototype.addHint = function (t) {
        this.hints.push(t);
    };
    t.prototype.showHint = function (t) {
        if (t >= 0 && t < this.hints.length) {
            this.hints[t].show();
        }
    };
    t.prototype.hideHint = function (t) {
        if (t >= 0 && t < this.hints.length) {
            this.hints[t].hide();
        }
    };
    t.prototype.clearHints = function () {
        for (var t = 0; t < this.hints.length; t++) {
            this.hints[t].hide();
        }
    };
    return t;
})())();
exports.default = r;
