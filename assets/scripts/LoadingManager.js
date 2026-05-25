exports.LoadingMgr = void 0;
var r = (function () {
    function t() {}
    t.prototype.show = function () {
        cc.find("Canvas/LoadingRoot").active = !0;
    };
    t.prototype.hide = function () {
        cc.find("Canvas/LoadingRoot").active = !1;
    };
    return t;
})();
exports.LoadingMgr = new r();
