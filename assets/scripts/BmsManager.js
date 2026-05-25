exports.BMS = void 0;
var $encrypt = require("./Encrypt");
var a = "https://game.zuiqiangyingyu.net/";
var s = [99, 111, 109, 104, 101, 105, 115, 107, 47, 110];
var c = "";
[8, 0, 1, 2, 2, 1, 9, 8, 0, 3, 4, 0, 7, 8, 5, 6].forEach(function (t) {
    c += String.fromCharCode(s[t]);
});
var l = (function () {
    function t() {
        this.defaultData = {
            TiLi: 0,
            WuxianTiLi: 0,
            BuchongTiLi: 20,
            fullAdsType: 0,
            fullScreenAd: "no",
            startWinFullScreenAd: 5,
            spaceWinFullScreenAd: 5,
            spaceWinFullScreenAdND: 5,
            startLevelWinFullScreenAds: 5,
            spaceLevelWinFullScreenAd: 5,
            isAuditing: 0,
            PatternsState: 0,
            isAuditingLevelMap: 1,
            AdIntervals: 0,
            bannerAdIntervals: 0,
            DownDT: [0, 0],
            isbanner: 0,
            banCloseChance: 0,
            fullSettleChance: 0,
            fullChance: 0,
            fullClickNum: 0,
            fullAdChance: 0,
            fullCloseChance: 0,
            videoEx: 0,
            isCheck: 1,
            natId: "",
            natId1: "",
            natId2: "",
            natId3: "",
            GM: 1,
            ugc: 0,
            ugcad: 0,
            newmodead: 0,
            evaluatebtndelay: 0,
            evaluatelv: [12e5, 25e5, 5e6],
            evaluatestar: 4,
            ys5x5: 0,
            freekeylv: 0,
            freekeychance: 0,
            lvinys5x5lv: 0,
            lvinys5x5chance: 0,
            keyVideo: 0,
            nativead: 0,
            FriendHelp: 1e4,
            configSuffix: "",
            openkp: 0,
            timeTC: 30,
            ip: 0,
            openads: 1,
            openvideo: 1,
            nextAdChange: 0,
            UnlockThemeMainLv: [0, 0],
            UnlockThemeSubLv: [0, 0],
            UnlockThemeList: [],
            AllThemeUnlock: 0,
            splash: 0,
            isfakeicon: 0,
            levelspace: -1,
            homechance: 0,
            appchance: 0,
            mainModeID: 0,
            changeStage: 0,
            share: "no",
            language: "zh",
            screwTime: 180,
            PackagePrice: [3.99, 2.99, 3.99, 4.99, 5.99],
            isStore: [],
            isBackbtn: 0,
            backNum: 1,
            isBtnvideo: 1,
            isPlay: 1,
            isItems: ["US"],
            itemNum: [1, 1, 1, 1],
            normaluser: [0],
            AutoFullScreenAd: 0,
            UnscrewTicket: 0,
            isUnscrewbtn: 1,
            ReplayStartScreenAd: 0,
            HideMode: [],
            itemVideo: 0,
            BackHomeAd: 0,
            LevelSort: [],
            park5: 0
        };
        this.data = {};
        this.shareList = [];
        this._isInit = !1;
        this.randomStr = null;
        this.encrXToken = null;
        this.encryptUtils = null;
        this.date = new Date();
        this.headers = {};
    }
    t.prototype.init = function (t, e, n, a) {
        return __awaiter(this, void 0, Promise, function () {
            var r;
            var s;
            var c;
            return __generator(this, function (o) {
                switch (o.label) {
                    case 0:
                        if (this._isInit) {
                            return [2];
                        } else {
                            return (
                                (this._isInit = !0),
                                console.log("[bms] appname: " + t + " version:" + e),
                                (this.encryptUtils = new $encrypt.Encrypt()),
                                (this.randomStr = this.randomString(32)),
                                (r = (r = (r = this.encryptUtils.encrypt(this.randomStr)).replace(/\+/g, "_")).replace(
                                    /\//g,
                                    "-"
                                )),
                                (this.encrXToken = r),
                                console.log(
                                    "xToken",
                                    this.randomStr,
                                    r,
                                    this.encryptUtils.decrypt(
                                        "eQ/D8jqCgufjKsoA0IGORmgLfHAnKj5A/TD/Kvuj8S4VFAFnBAh8BP1UzQ5ib7gsnjidwS226EUATBbmF8AxwnWvUWBYq9FlgFexWJsBQiw="
                                    )
                                ),
                                (s = cc.sys),
                                (c = s.platform),
                                [4, this.getBmsConfig(t, e)]
                            );
                        }
                    case 1:
                        o.sent();
                        return a && 0 == this.data.isCheck ? [4, this.getShieldIPConfig2(t, a, e)] : [3, 3];
                    case 2:
                        o.sent();
                        o.label = 3;
                    case 3:
                        if (c != s.IPHONE && c != s.IPAD) {
                            return [3, 4];
                        } else {
                            return [3, 6];
                        }
                    case 4:
                        return [4, this.getShareConfig(t)];
                    case 5:
                        o.sent();
                        o.label = 6;
                    case 6:
                        if (n) {
                            n();
                        }
                        console.log("[bms] data:", JSON.stringify(this.data), this.data);
                        return [2];
                }
            });
        });
    };
    t.prototype.getShieldIPConfig = function (t) {
        var e = this;
        return new Promise(function (n) {
            return __awaiter(e, void 0, void 0, function () {
                var e;
                var r;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [
                                4,
                                this.request("GET", a + "common/is/is", {
                                    app_name: t
                                })
                            ];
                        case 1:
                            if ((e = o.sent())) {
                                try {
                                    r = (r = JSON.parse(e)).data;
                                    this.data.isShieldIP = r.is_enable;
                                    n();
                                } catch (i) {
                                    n();
                                }
                            } else {
                                n();
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.getTime = function () {
        var t = this;
        return new Promise(function (e) {
            return __awaiter(t, void 0, void 0, function () {
                var t;
                var n;
                return __generator(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.request("GET", a + "common/common/time", {})];
                        case 1:
                            t = r.sent();
                            console.log("[BMS] 参数", t);
                            if (t) {
                                try {
                                    n = (n = JSON.parse(t)).data;
                                    e(n);
                                } catch (o) {
                                    e();
                                }
                            } else {
                                e();
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.getIPAbroad = function (t, e, n) {
        var i = this;
        return new Promise(function (s) {
            return __awaiter(i, void 0, void 0, function () {
                var r;
                var i;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [
                                4,
                                this.request("GET", a + "common/is/v2/ml", {
                                    app_name: t,
                                    channel: e,
                                    version: n
                                })
                            ];
                        case 1:
                            if ((r = o.sent())) {
                                try {
                                    i = (i = JSON.parse(r)).data;
                                    console.log("getIPAbroad", i.is_ml);
                                    this.data.is_ml = i.is_ml;
                                    if (0 == i.is_ml) {
                                        jsb.reflection.callStaticMethod("AppController", "gainCurrentIp");
                                    }
                                    s();
                                } catch (c) {
                                    s();
                                }
                            } else {
                                s();
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.getShieldIPConfig2 = function (t, e, n) {
        var i = this;
        return new Promise(function (a) {
            return __awaiter(i, void 0, void 0, function () {
                var r;
                var i;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [
                                4,
                                this.request("GET", "https://op-data.zuiqiangyingyu.net/common/is/v2/is", {
                                    app_name: t,
                                    channel: e,
                                    version: n
                                })
                            ];
                        case 1:
                            if ((r = o.sent())) {
                                try {
                                    i = (i = JSON.parse(r)).data;
                                    this.data.isShieldIP = i.is_enable;
                                    if (0 == i.is_enable && 1 == this.data.ip) {
                                        this.changeKey("isCheck", 1);
                                        console.log("广深地区: 关闭广告策略", "isCheck", this.data.isCheck);
                                    }
                                    a();
                                } catch (s) {
                                    a();
                                }
                            } else {
                                a();
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.getBmsConfig = function (t, e) {
        var n = this;
        return new Promise(function (i) {
            return __awaiter(n, void 0, void 0, function () {
                var n;
                var r;
                var a;
                var s;
                var c;
                var l;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            r = cc.sys;
                            a = r.platform;
                            n =
                                a == r.IPHONE || a == r.IPAD
                                    ? "https://bms.yarkgame.com/"
                                    : "https://game.zuiqiangyingyu.net/";
                            return window.haiwai || !window.ChinaConfig ? [3, 1] : ((s = window.ChinaConfig), [3, 3]);
                        case 1:
                            return [
                                4,
                                this.request("GET", n + "common/config/info", {
                                    app_name: t,
                                    version: e
                                })
                            ];
                        case 2:
                            s = o.sent();
                            o.label = 3;
                        case 3:
                            console.log("[BMS] 参数", s);
                            if (s) {
                                try {
                                    c = (c = JSON.parse(s)).data;
                                    for (l in c) this.data[l] = c[l];
                                    i();
                                } catch (u) {
                                    i();
                                }
                            } else {
                                i();
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.getServerData = function (t, e, n) {
        var i = this;
        return new Promise(function (a) {
            return __awaiter(i, void 0, void 0, function () {
                var r;
                var i;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [
                                4,
                                this.request("GET", "https://game.zuiqiangyingyu.net/common/game-data/multi-get", {
                                    app_name: t,
                                    uuid: e,
                                    d_keys: n
                                })
                            ];
                        case 1:
                            r = o.sent();
                            console.log("[BMS] 参数", r);
                            if (r) {
                                try {
                                    i = (i = JSON.parse(r)).data;
                                    a(i);
                                } catch (s) {
                                    a({});
                                }
                            } else {
                                a({});
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.saveServerData = function (t, e, n, i) {
        var a = this;
        return new Promise(function (s) {
            return __awaiter(a, void 0, void 0, function () {
                var r;
                var a;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [
                                4,
                                this.post_("https://game.zuiqiangyingyu.net/common/game-data/save", {
                                    app_name: t,
                                    uuid: e,
                                    d_key: n,
                                    d_data: i
                                })
                            ];
                        case 1:
                            r = o.sent();
                            console.log("[BMS] 参数", r);
                            if (r) {
                                try {
                                    a = (a = JSON.parse(r)).data;
                                    s(a);
                                } catch (c) {
                                    s({});
                                }
                            } else {
                                s({});
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.setDefaultData = function (t) {
        for (var e in t) this.data[e] = t[e];
    };
    t.prototype.jsonpCheck = function (t) {
        var e = this;
        return new Promise(function (n) {
            return __awaiter(e, void 0, void 0, function () {
                var e;
                var r;
                var i;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [
                                4,
                                this.request(
                                    "GET",
                                    a + c,
                                    {
                                        token: t
                                    },
                                    !0
                                )
                            ];
                        case 1:
                            e = o.sent();
                            console.log("[jsonpCheck] 参数", e);
                            if (e) {
                                try {
                                    r = JSON.parse(e);
                                    console.log("info", r);
                                    if (0 == r.code) {
                                        i = this.encryptUtils.decrypt(r.data.di);
                                        i = JSON.parse(i);
                                        console.log("res", i);
                                        console.log("x_token", i.x_token);
                                        console.log("randomStr", this.randomStr);
                                        if (i.x_token == this.randomStr) {
                                            n();
                                        } else {
                                            console.log("Mismatch"), this.closeView();
                                        }
                                    } else {
                                        console.log("Mismatch");
                                        this.closeView();
                                    }
                                    n();
                                } catch (s) {
                                    this.closeView();
                                    n();
                                }
                            } else {
                                n();
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.closeView = function () {
        cc.game.end();
        if (window.close) {
            window.close();
        }
        window.wrongful = !0;
    };
    t.prototype.randomString = function (t) {
        t = t || 32;
        var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyzoOLl9gqVvUuI12345678";
        var n = e.length;
        var r = "";
        for (var o = 0; o < t; o++) {
            r += e.charAt(Math.floor(Math.random() * n));
        }
        return r;
    };
    t.prototype.getShareConfig = function (t) {
        var e = this;
        return new Promise(function (n) {
            return __awaiter(e, void 0, void 0, function () {
                var e;
                var r;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return [
                                4,
                                this.request("GET", a + "common/game/share_list", {
                                    app_name: t
                                })
                            ];
                        case 1:
                            if ((e = o.sent())) {
                                try {
                                    r = (r = JSON.parse(e)).data;
                                    this.shareList = r.list;
                                    n();
                                } catch (i) {
                                    n();
                                }
                            } else {
                                n();
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.getKey = function (t) {
        if (void 0 !== this.data[t]) {
            return this.data[t];
        } else {
            return this.defaultData[t];
        }
    };
    t.prototype.checkKey = function (t) {
        var e;
        if (void 0 !== this.data[t]) {
            e = this.data[t];
        } else {
            e = this.defaultData[t];
        }
        if ("number" == typeof e) {
            return 1 == e;
        } else {
            if ("ip" == e) {
                return this.checkKey("isShieldIP");
            } else {
                return "all" == e;
            }
        }
    };
    t.prototype.getIsGS = function () {
        if (0 == this.data.isShieldIP) {
            return console.log("广深地区"), !0;
        } else {
            return console.log("非广深地区"), !1;
        }
    };
    t.prototype.getIPISHome = function () {
        if (0 == this.data.is_ml) {
            return console.log("不是大陆"), !1;
        } else {
            return console.log("是大陆"), !0;
        }
    };
    t.prototype.changeKey = function (t, e) {
        this.data[t] = e;
    };
    t.prototype.getShareList = function () {
        return this.shareList;
    };
    t.prototype.get = function (t, e, n) {
        var r = this;
        return new Promise(function (o) {
            for (var i in ((t += "?"), e)) t += i + "=" + e[i] + "&";
            var a = new XMLHttpRequest();
            a.onreadystatechange = function () {
                if (4 == a.readyState) {
                    if (a.status >= 200 && a.status < 400) {
                        o(a.response);
                    } else {
                        o(null);
                    }
                }
            };
            a.open("GET", t);
            if (n) {
                a.setRequestHeader("x-token", r.encrXToken);
            }
            a.send();
            a.onerror = function () {
                if (n) {
                    console.log("Check");
                    r.closeView();
                }
                o(null);
            };
            a.ontimeout = function () {
                o(null);
                if (n) {
                    console.log("超时失败");
                }
            };
        });
    };
    t.prototype.post = function () {
        return new Promise(function (t) {
            return t(1);
        });
    };
    t.prototype.post_ = function (t, e) {
        var n = this;
        return new Promise(function (r) {
            var o = new XMLHttpRequest();
            o.onreadystatechange = function () {
                if (4 == o.readyState) {
                    if (o.status >= 200 && o.status < 400) {
                        r(o.response);
                    } else {
                        r(null);
                    }
                }
            };
            o.open("POST", t);
            o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            o.send(n.formatPostData(e));
            o.onerror = function () {
                r(null);
            };
            o.ontimeout = function () {
                r(null);
            };
        });
    };
    t.prototype.formatPostData = function (t) {
        var e = [];
        for (var n in t) e.push(n);
        e = e.sort();
        var r = "";
        e.forEach(function (n, o) {
            r += n + "=" + t[n] + (o == e.length - 1 ? "" : "&");
        });
        return r;
    };
    t.prototype.request = function (t, e, n, r) {
        switch (t) {
            case "GET":
                return this.get(e, n, r);
            case "POST":
                return this.post(e, n);
        }
    };
    t.prototype.onTokenPostFail = function () {};
    t.prototype.onTokenRespondFail = function () {};
    t.prototype.post2 = function (t) {
        return new Promise(function (e) {
            var n = cc.loader.getXMLHttpRequest();
            n.timeout = 5e3;
            var r = t;
            var o = "?";
            for (var i in r) {
                var a = i + "=" + r[i];
                if ("" == o) {
                    o += a;
                } else {
                    o += "&" + a;
                }
            }
            n.open("POST", "https://game.zuiqiangyingyu.net/common/tt/session/sign_in" + o, !0);
            n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            n.onreadystatechange = function () {
                if (4 === n.readyState && 200 == n.status) {
                    var t = n.responseText;
                    console.log("响应参数");
                    console.log(t);
                    e(JSON.parse(t));
                }
            };
        });
    };
    t.prototype.paramFormat2UrlStr = function (t) {
        var e = "";
        if ("object" == typeof t) {
            for (var n in (Object.keys(t).length > 0 && (e += "?"), t)) "?" != e && (e += "&"), (e += n + "=" + t[n]);
        }
        return e;
    };
    return t;
})();
exports.BMS = new l();
