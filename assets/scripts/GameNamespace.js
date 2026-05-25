var r;
exports.game = void 0;
(function (t) {
    t.log = console.log;
    t.warn = console.warn;
    t.error = console.error;
    t.userID = null;
    t.currentLevel = 1;
    t.boxAtlas = null;
    t.drinkAtlas = null;
    t.plateAtlas = null;
    t.totalAmount = null;
    t.remainingAmount = null;
    t.dragonMoving = !0;
    t.canUseProps = !0;
    t.random = function (t, e) {
        if (void 0 === e) {
            e = 0;
        }
        return (t - e) * Math.random() + e;
    };
    t.randomInt = function (t, e) {
        if (void 0 === e) {
            e = 0;
        }
        return ~~((t - e) * Math.random() + e);
    };
})((r = exports.game || (exports.game = {})));
window.game = r;
