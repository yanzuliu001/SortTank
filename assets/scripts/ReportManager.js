exports.Report = void 0;
var $platformManager = require("./PlatformManager");
var o = (function () {
    function t() {}
    t.prototype.init = function () {
        console.log("初始化:GameLogMgr");
        cc.game.on("gamelog", this.onGameLog, this);
        cc.game.on("gamelog_Thinking", this.onGameLog_Thinking, this);
        cc.game.on("gamelog_adjustEvent", this.onGameLog_adjustEvent, this);
        cc.game.on("gameTime-log", this.onGameTimeLog, this);
        cc.game.on("gameLevel-log", this.onGameLevelLog, this);
        cc.game.on("language-init", this.onLanguageInit, this);
    };
    t.prototype.onGameLog = function (t, e) {
        if (void 0 === e) {
            e = "count";
        }
        window.tt;
    };
    t.prototype.onGameLog_Thinking = function (t, e) {
        $platformManager.Platform.report(t, JSON.stringify(e));
        console.log("%c [GameLog] 事件打点: " + t + "  子事件 " + JSON.stringify(e), "color:#F500FF");
    };
    t.prototype.onGameLog_adjustEvent = function (t) {
        $platformManager.Platform.adjustEvent(t);
        console.log("%c [adjustEvent] 事件打点: " + t + " ", "color:#F500FF");
    };
    t.prototype.onGameTimeLog = function () {};
    t.prototype.onGameLevelLog = function (t) {
        console.log("%c [GameLog] **** 关卡打点: " + t + " ****}", "color:#F500FF");
    };
    t.prototype.onLanguageInit = function () {};
    return t;
})();
exports.Report = new o();
