var r = (function () {
    function t() {}
    t.get = function (t) {
        if (window.tt) {
            t.method = "GET";
            t.header = {
                "content-type": "application/x-www-form-urlencoded"
            };
            return window.wxapi.request(t);
        }
    };
    t.post = function (t) {
        if (window.tt) {
            t.method = "POST";
            t.header = {
                "content-type": "application/x-www-form-urlencoded"
            };
            return window.wxapi.request(t);
        }
    };
    return t;
})();
exports.default = r;
