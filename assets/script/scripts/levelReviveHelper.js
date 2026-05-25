var i = (function () {
    function t() {}
    t.levelFailEvent = function (t, e) {
        cc.game.emit("levelFailEvent", t, e);
    };
    return t;
})();
exports.default = i;
