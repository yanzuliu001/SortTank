var $userConst = require("./UserConst");
var $platformManager = require("./PlatformManager");
var $userManager = require("./UserManager");
var $shuShuConst = require("./ShuShuConst");
var s = new ((function () {
    function t() {
        this.taskConfig = [];
    }
    t.prototype.init = function () {};
    t.prototype.taskFinish = function () {
        if (!$platformManager.Platform.getConfig().hasPurchase) {
            var t = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
            var e = $userManager.User.get("passLevel" + t) || 0;
            e += 1;
            $userManager.User.set("passLevel" + t, e);
            for (var n = 0; n < this.taskConfig.length; n++) {
                var s = this.taskConfig[n];
                var c = this.paramObj(s.finishCondition);
                if (t == c.mode && e == c.passLevel) {
                    var l = this.paramObj(s.reward);
                    console.log("测试解锁皮肤", l.skinID);
                    var u = $userManager.User.get($userConst.UserData.skinList);
                    var f = Number(l.skinID);
                    if (u[0].includes(f)) {
                        //
                    } else {
                        u[0].push(f);
                    }
                    $userManager.User.set($userConst.UserData.skinList, u);
                    var d = $userManager.User.get($userConst.UserData.useSkinIDList);
                    d[0] = f;
                    $userManager.User.set($userConst.UserData.useSkinIDList, d);
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Skin_unlock, {
                        mode: 0,
                        id: f
                    });
                    break;
                }
            }
        }
    };
    t.prototype.paramObj = function (t) {
        var e;
        var n = /([^&=]+)=?([^&]*)/g;
        var r = /\+/g;
        var o = function (t) {
            return decodeURIComponent(t.replace(r, " "));
        };
        for (var i = {}; (e = n.exec(t)); ) {
            i[o(e[1])] = o(e[2]);
        }
        return i;
    };
    return t;
})())();
exports.default = s;
