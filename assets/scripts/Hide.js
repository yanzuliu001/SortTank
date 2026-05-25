var r = (function () {
    function t() {}
    t.prototype.hide = function (t) {
        if (window.tt) {
            window.wxapi.onHide(t);
        }
    };
    return t;
})();
exports.default = new r();
