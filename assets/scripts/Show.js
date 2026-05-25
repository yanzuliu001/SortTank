var r = (function () {
    function t() {}
    t.prototype.show = function (t) {
        if (window.tt) {
            window.wxapi.onShow(t);
        }
    };
    return t;
})();
exports.default = new r();
