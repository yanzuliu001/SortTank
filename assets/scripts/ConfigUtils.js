exports.ConfigUtils = void 0;
var $configConst = require("./ConfigConst");
var $userConst = require("./UserConst");
var $configManager = require("./ConfigManager");
var $platformManager = require("./PlatformManager");
var $userManager = require("./UserManager");
var u = (function () {
    function t() {}
    t.getLevelIDByIndex = function (t, e, n) {
        var r = String(t);
        if (0 == t) {
            r = t + $platformManager.Platform.getConfig().configSuffix;
            console.log("path", r);
        }
        $configManager.Config.get($configConst.ConfigConst.THEME + r).then(function (t) {
            for (var r = 0; r < t.length; r++) {
                if (t[r].id == e) {
                    n(t[r].stageID);
                }
            }
        });
    };
    t.getLevelIDByDevelop = function (t, e) {
        var n = this;
        var r = [];
        $configManager.Config.get($configConst.ConfigConst.THEME).then(function (o) {
            o.forEach(function (t) {
                if (4 != t.type) {
                    r.push("" + t.theme);
                }
            });
            if (0 == n.allLevel.length) {
                n.loadSubs(
                    r,
                    function () {
                        for (var r = 0; r < n.allLevel.length; r++) {
                            if (n.allLevel[r].stage1ID == t) {
                                e(n.allLevel[r], 1);
                            } else {
                                if (n.allLevel[r].stage2ID == t) {
                                    e(n.allLevel[r], 2);
                                }
                            }
                        }
                    },
                    function () {}
                );
            } else {
                for (var i = 0; i < n.allLevel.length; i++) {
                    if (n.allLevel[i].stage1ID == t) {
                        e(n.allLevel[i], 1);
                    } else {
                        if (n.allLevel[i].stage2ID == t) {
                            e(n.allLevel[i], 2);
                        }
                    }
                }
            }
        });
    };
    t.loadSubs = function (t, e, n) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (r) {
                switch (r.label) {
                    case 0:
                        r.trys.push([0, 4, , 5]);
                        r.label = 1;
                    case 1:
                        if (t.length) {
                            return [4, this.loadSub(t.shift())];
                        } else {
                            return [3, 3];
                        }
                    case 2:
                        r.sent();
                        return [3, 1];
                    case 3:
                        if (e) {
                            e();
                        }
                        return [3, 5];
                    case 4:
                        r.sent();
                        return n ? [2] : [3, 5];
                    case 5:
                        return [2];
                }
            });
        });
    };
    t.loadSub = function (t) {
        var e = this;
        return new Promise(function (n) {
            $configManager.Config.get($configConst.ConfigConst.THEME + t).then(function (r) {
                r.mode = t;
                for (var o = 0; o < r.length; o++) {
                    r[o].mode = t;
                }
                e.allLevel = e.allLevel.concat(r);
                n(null);
            });
        });
    };
    t.getDataByID = function (t, e) {
        $configManager.Config.get($configConst.ConfigConst.THEME).then(function (n) {
            var r;
            for (var o = 0; o < n.length; o++) {
                if (n[o].theme == t) {
                    r = n[o];
                }
            }
            console.log("result", r);
            if (r) {
                var a = String(t);
                if (0 == t) {
                    a = t + $platformManager.Platform.getConfig().configSuffix;
                }
                $configManager.Config.get($configConst.ConfigConst.THEME + a).then(function (t) {
                    r.amount = t.length;
                    e(r);
                });
            } else {
                console.log("加载另外一个主题");
                $configManager.Config.get($configConst.ConfigConst.Subject).then(function (n) {
                    for (var o = 0; o < n.length; o++) {
                        if (n[o].theme == t) {
                            r = n[o];
                        }
                    }
                    var a = String(t);
                    if (0 == t) {
                        a = t + $platformManager.Platform.getConfig().configSuffix;
                    }
                    $configManager.Config.get($configConst.ConfigConst.THEME + a).then(function (t) {
                        r.amount = t.length;
                        console.log("脑洞模式", r);
                        e(r);
                    });
                });
            }
        });
    };
    t.getDataByID_99 = function (t, e) {
        $configManager.Config.get($configConst.ConfigConst.THEME + t).then(function (t) {
            var n = 0;
            for (var r = 0; r < t.length; r++) {
                n += 1;
            }
            console.groupCollapsed;
            t.amount = n;
            e(t);
        });
    };
    t.setNextModeID = function () {
        var t = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
        var e = $userManager.User.getTempData($userConst.TempData.CURRENT_ALL_MODE);
        for (var n = 0; n < e.length; n++) {
            if (e[n].theme == t) {
                return void (n + 1 >= e.length
                    ? $userManager.User.setTempData($userConst.TempData.NEXT_MODE_ID, t)
                    : $userManager.User.setTempData($userConst.TempData.NEXT_MODE_ID, e[n + 1].theme));
            }
        }
    };
    t.allLevel = [];
    return t;
})();
exports.ConfigUtils = u;
