var $userConst = require("./UserConst");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $platformManager = require("./PlatformManager");
var $userManager = require("./UserManager");
var c = new ((function () {
    function t() {
        this.loginDaysTimes = 1;
    }
    t.prototype.init = function () {
        this.loginDaysTimes = $userManager.User.get($userConst.UserData.loginDaysTimes) || 1;
        if (1 == this.loginDaysTimes) {
            var t = $localStorageManager.default.get($localStorageConst.default.todayPlayTime) || 0;
            setInterval(function () {
                t += 5;
                $localStorageManager.default.set($localStorageConst.default.todayPlayTime, t);
                var e = {
                    300: "x3cnsd",
                    900: "lmz49o",
                    1200: "elxnda",
                    1500: "dtpl38",
                    1800: "cksi73"
                };
                if (e["" + t]) {
                    console.log("%c [adjustEvent] 首日游戏时长: " + t + " ", "color:#F500FF");
                    $platformManager.Platform.adjustEvent(e["" + t]);
                }
            }, 5e3);
        }
    };
    t.prototype.todayPassTimes = function () {
        if (1 == this.loginDaysTimes) {
            var t = ($localStorageManager.default.get($localStorageConst.default.todayPassTimes) || 0) + 1;
            $localStorageManager.default.set($localStorageConst.default.todayPassTimes, t);
            var e = {
                2: "ubnrq3",
                3: "5h5ad7",
                5: "iacn55",
                7: "gec2aj"
            };
            if (e["" + t]) {
                console.log("%c [adjustEvent] 首日成功通关-埋点: " + t + " ", "color:#F500FF");
                $platformManager.Platform.adjustEvent(e["" + t]);
            }
        }
    };
    t.prototype.todayRewardTimes = function () {
        if (1 == this.loginDaysTimes) {
            var t = ($localStorageManager.default.get($localStorageConst.default.todayRewardTimes) || 0) + 1;
            $localStorageManager.default.set($localStorageConst.default.todayRewardTimes, t);
            var e = {
                3: "jex8bx",
                5: "1a2gc8",
                8: "52qh6z",
                10: "a2cf8q",
                15: "9l9hd5",
                20: "y81ddi"
            };
            if (e["" + t]) {
                console.log("%c [adjustEvent] 首日激励次数-埋点: " + t + " ", "color:#F500FF");
                $platformManager.Platform.adjustEvent(e["" + t]);
            }
        }
    };
    t.prototype.todayPay = function (t) {
        if (1 == this.loginDaysTimes) {
            var e = $localStorageManager.default.get($localStorageConst.default.todayPay) || 0;
            var n = $localStorageManager.default.get($localStorageConst.default.todayPayEvent) || [];
            var r = e + t;
            $localStorageManager.default.set($localStorageConst.default.todayPay, r);
            var s = {
                1: "q1nzj6",
                2: "b07t2h",
                4: "h4xjwq",
                8: "xolts1",
                10: "a2cf8q",
                20: "k49yek"
            };
            for (var c in s)
                if (r >= Number(c) && !n.includes(Number(c))) {
                    n.push(Number(c));
                    $localStorageManager.default.set($localStorageConst.default.todayPayEvent, n);
                    console.log("%c [adjustEvent] 首日付费-埋点: " + c + " ", "color:#F500FF");
                    $platformManager.Platform.adjustEvent(s["" + c]);
                }
        }
    };
    return t;
})())();
window.AdjustEventSys = c;
exports.default = c;
