var $storageSync = require("./StorageSync");
var o = (function () {
    function t() {}
    t.getItem = function (t) {
        if (void 0 === window.localStorage) {
            return $storageSync.default.getItem(t);
        } else {
            return window.localStorage.getItem(t);
        }
    };
    t.setItem = function (t, e) {
        if (void 0 === window.localStorage) {
            return $storageSync.default.setItem(t, e);
        } else {
            return window.localStorage.setItem(t, e);
        }
    };
    t.removeItem = function (t) {
        if (void 0 === window.localStorage) {
            return $storageSync.default.removeItem(t);
        } else {
            return window.localStorage.removeItem(t);
        }
    };
    return t;
})();
exports.default = o;
