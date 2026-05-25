var r = (function () {
    function t() {}
    t.prototype.login = function (t) {
        if (window.tt) {
            window.wxapi.login(t);
        }
    };
    return t;
})();
exports.default = new r();
