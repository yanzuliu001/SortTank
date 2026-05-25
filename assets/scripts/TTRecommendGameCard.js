var $platformManager = require("./PlatformManager");
var $userManager = require("./UserManager");
var $mD5Type = require("./MD5Type");
var c = window.tt;
var l = "https://game.zuiqiangyingyu.net/";
var u = new ((function () {
    function t() {}
    t.prototype.init = function () {};
    t.prototype.subscribe = function () {
        if (
            c &&
            ["Douyin", "douyin_lite"].some(function (t) {
                return t == window.tt.getSystemInfoSync().appName;
            })
        ) {
            console.log("是抖音，发起订阅", c.requestSubscribeMessage);
            if (!c.requestSubscribeMessage) {
                return;
            }
            var t = "MSG1459780748257277550466177960250";
            var e = this;
            c.requestSubscribeMessage({
                tmplIds: [t],
                success: function (n) {
                    console.log("## 订阅成功", JSON.stringify(n));
                    var r = {};
                    var o = $userManager.User.get("ttOpenid");
                    if ("accept" == n[t]) {
                        console.log("## 礼包领取-accept");
                        r = {
                            MSG1459780748257277550466177960250: "accept"
                        };
                        $userManager.User.get(t) ||
                            e.subscMessage(o, JSON.stringify(r)).then(function (e) {
                                $userManager.User.set(t, !0);
                                console.log("## 上报头条订阅", e);
                            });
                    } else {
                        if ("reject" == n[t]) {
                            console.log("## 礼包领取-reject"),
                                (r = {
                                    MSG1459780748257277550466177960250: "reject"
                                }),
                                $userManager.User.get(t) ||
                                    e.subscMessage(o, JSON.stringify(r)).then(function (e) {
                                        $userManager.User.set(t, !0);
                                        console.log("## 上报头条订阅", e);
                                    });
                        } else {
                            if ("ban" == n[t]) {
                                console.log("## 礼包领取-ban");
                            } else {
                                "fail" == n[t] && console.log("## 礼包领取-fail");
                            }
                        }
                    }
                },
                complete: function (t) {
                    console.log("## 订阅完成", JSON.stringify(t));
                },
                fail: function (t) {
                    console.log("## 订阅失败", JSON.stringify(t));
                }
            });
        }
    };
    t.prototype.subscMessage = function (t, e) {
        var n = this;
        return new Promise(function (a) {
            return __awaiter(n, void 0, void 0, function () {
                var n;
                var r;
                var s;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            n = {
                                app_name: $platformManager.Platform.getConfig().flag,
                                open_id: t,
                                template_ids: e
                            };
                            return [4, this.post(l + "common/toutiao/add-user-subsc-message", n)];
                        case 1:
                            r = o.sent();
                            try {
                                s = JSON.parse(r);
                                a(s.data);
                            } catch (c) {
                                a({});
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.ttLogin = function (t) {
        var e = this;
        if (c) {
            c.login({
                force: !0,
                success: function (n) {
                    return __awaiter(e, void 0, void 0, function () {
                        return __generator(this, function () {
                            console.log("登录成功", JSON.stringify(n));
                            t(n);
                            return [2];
                        });
                    });
                },
                complete: function (t) {
                    console.log("登录完成", JSON.stringify(t));
                },
                fail: function (t) {
                    console.log("登录失败", JSON.stringify(t));
                }
            });
        }
    };
    t.prototype.getTTOpenID = function (t, e) {
        var n = this;
        return new Promise(function (a) {
            return __awaiter(n, void 0, void 0, function () {
                var n;
                var r;
                var s;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            n = {
                                app_name: $platformManager.Platform.getConfig().flag,
                                code: t,
                                anonymous_code: e
                            };
                            return [4, this.post(l + "common/tt/session/sign_in", n)];
                        case 1:
                            r = o.sent();
                            try {
                                s = JSON.parse(r);
                                a(s.data);
                            } catch (c) {
                                a({});
                            }
                            return [2];
                    }
                });
            });
        });
    };
    t.prototype.get = function (t, e) {
        return new Promise(function (n) {
            for (var r in ((t += "?"), e)) t += r + "=" + e[r] + "&";
            var o = new XMLHttpRequest();
            o.onreadystatechange = function () {
                if (4 == o.readyState) {
                    if (o.status >= 200 && o.status < 400) {
                        n(o.response);
                    } else {
                        n(null);
                    }
                }
            };
            o.open("GET", t);
            o.send();
            o.onerror = function () {
                n(null);
            };
            o.ontimeout = function () {
                n(null);
            };
        });
    };
    t.prototype.post = function (t, e) {
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
    t.prototype.getSign = function (t) {
        var e = [];
        for (var n in t) e.push(n);
        e = e.sort();
        var r = "";
        e.forEach(function (n, o) {
            r += n + "=" + t[n] + (o == e.length - 1 ? "" : "&");
        });
        r += "VuFFap7NHJA70M9xWb9fSQcdVtivPY4E";
        return new $mD5Type.Md5().md5(r);
    };
    t.prototype.saveSignInData = function (t, e) {
        var n = this;
        return new Promise(function (a) {
            return __awaiter(n, void 0, void 0, function () {
                var n;
                var r;
                var s;
                var u;
                var f;
                return __generator(this, function (o) {
                    switch (o.label) {
                        case 0:
                            if ("Douyin" == (n = c.getSystemInfoSync().appName)) {
                                r = "user_sign_1";
                            } else {
                                if ("douyin_lite" == n) {
                                    r = "user_sign_2";
                                }
                            }
                            s = {
                                app_name: $platformManager.Platform.getConfig().flag,
                                uuid: t,
                                d_key: r,
                                d_data: e
                            };
                            return [4, this.post(l + "common/game-data/save", s)];
                        case 1:
                            u = o.sent();
                            try {
                                f = JSON.parse(u);
                                a(f.data);
                            } catch (d) {
                                a({});
                            }
                            return [2];
                    }
                });
            });
        });
    };
    return t;
})())();
exports.default = u;
