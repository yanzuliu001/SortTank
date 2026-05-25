var r = (function () {
    function t() {}
    t.getItem = function (t) {
        if (window.tt) {
            return window.wxapi.getStorageSync(t);
        }
    };
    t.setItem = function (t, e) {
        if (window.tt) {
            return window.wxapi.setStorageSync(t, e);
        }
    };
    t.removeItem = function (t) {
        if (window.tt) {
            return window.wxapi.removeStorageSync(t);
        }
    };
    return t;
})();
exports.default = r;
