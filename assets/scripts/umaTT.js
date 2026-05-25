var n = "[UMENG] -- ";
var r = (function () {
    var t = null;
    var e = !1;

    function r() {
        this.setDebug = function (t) {
            e = t;
        };
        this.d = function () {
            if (e) {
                try {
                    if ("string" == typeof arguments[0]) {
                        arguments[0] = n + arguments[0];
                    }
                    console.debug.apply(console, arguments);
                } catch (n) {}
            }
        };
        this.i = function () {
            try {
                if (e) {
                    try {
                        if ("string" == typeof arguments[0]) {
                            arguments[0] = n + arguments[0];
                        }
                        console.info.apply(console, arguments);
                    } catch (n) {}
                }
            } catch (n) {}
        };
        this.e = function () {
            if (e) {
                try {
                    if ("string" == typeof arguments[0]) {
                        arguments[0] = n + arguments[0];
                    }
                    console.error.apply(console, arguments);
                } catch (n) {}
            }
        };
        this.w = function () {
            if (e) {
                try {
                    if ("string" == typeof arguments[0]) {
                        arguments[0] = n + arguments[0];
                    }
                    console.warn.apply(console, arguments);
                } catch (n) {}
            }
        };
        this.v = function () {
            if (e) {
                try {
                    if ("string" == typeof arguments[0]) {
                        arguments[0] = n + arguments[0];
                    }
                    console.log.apply(console, arguments);
                } catch (n) {}
            }
        };
        this.t = function () {
            if (e) {
                try {
                    console.table.apply(console, arguments);
                } catch (n) {}
            }
        };
        this.tip = function () {
            try {
                if ("string" == typeof arguments[0]) {
                    arguments[0] = n + arguments[0];
                }
                console.log.apply(console, arguments);
            } catch (n) {}
        };
        this.tip_w = function (t) {
            try {
                console.log(
                    "%c [UMENG] -- " + t,
                    "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;"
                );
            } catch (t) {}
        };
        this.err = function () {
            try {
                if ("string" == typeof arguments[0]) {
                    arguments[0] = n + arguments[0];
                }
                console.error.apply(console, arguments);
            } catch (n) {}
        };
        this.repeat = function (t) {
            for (var e = t; e.length < 86; ) {
                e += t;
            }
            return e;
        };
    }
    return function () {
        if (null === t) {
            t = new r();
        }
        return t;
    };
})();
var o = (function () {
    var t = null;

    function e() {
        var t = {};
        this.useOpenid = function () {
            return !!t.useOpenid;
        };
        this.useSwanid = function () {
            return !!t.useSwanid;
        };
        this.autoGetOpenid = function () {
            return !!t.autoGetOpenid;
        };
        this.appKey = function () {
            return t.appKey;
        };
        this.uploadUserInfo = function () {
            return t.uploadUserInfo;
        };
        this.enableVerify = function () {
            return t.enableVerify;
        };
        this.set = function (e) {
            t = e;
        };
        this.get = function () {
            return t;
        };
        this.setItem = function (e, n) {
            t[e] = n;
        };
        this.getItem = function (e) {
            return t[e];
        };
    }
    return function () {
        if (t) {
            //
        } else {
            t = new e();
        }
        return t;
    };
})();

function i() {}
i.prototype = {
    on: function (t, e, n) {
        var r = this.e || (this.e = {});
        (r[t] || (r[t] = [])).push({
            fn: e,
            ctx: n
        });
        return this;
    },
    once: function (t, e, n) {
        var r = this;

        function o() {
            r.off(t, o);
            e.apply(n, arguments);
        }
        o._ = e;
        return this.on(t, o, n);
    },
    emit: function (t) {
        var e = [].slice.call(arguments, 1);
        var n = ((this.e || (this.e = {}))[t] || []).slice();
        var r = 0;
        for (var o = n.length; r < o; r++) {
            n[r].fn.apply(n[r].ctx, e);
        }
        return this;
    },
    off: function (t, e) {
        var n = this.e || (this.e = {});
        var r = n[t];
        var o = [];
        if (r && e) {
            var i = 0;
            for (var a = r.length; i < a; i++) {
                if (r[i].fn !== e && r[i].fn._ !== e) {
                    o.push(r[i]);
                }
            }
        }
        if (o.length) {
            n[t] = o;
        } else {
            delete n[t];
        }
        return this;
    }
};
var a = new i();
a.messageType = {
    CONFIG_LOADED: 0,
    UMA_LIB_INITED: 1
};
var s = function (t, e) {
    return (s =
        Object.setPrototypeOf ||
        ({
            __proto__: []
        } instanceof Array &&
            function (t, e) {
                t.__proto__ = e;
            }) ||
        function (t, e) {
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    t[n] = e[n];
                }
        })(t, e);
};

function c(t, e) {
    function n() {
        this.constructor = t;
    }
    s(t, e);
    if (null === e) {
        t.prototype = Object.create(e);
    } else {
        t.prototype = ((n.prototype = e.prototype), new n());
    }
}
var l = new ((function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    c(e, t);
    e.prototype.getSdkType = function () {
        return "ttgamemp";
    };
    return e;
})(
    (function () {
        function t() {}
        t.prototype.setStorage = function (t, e, n) {
            tt.setStorage({
                key: t,
                data: e,
                success: function () {
                    if ("function" == typeof n) {
                        n(!0);
                    }
                },
                fail: function (e) {
                    r().w(t + ": " + e.errMsg);
                    if ("function" == typeof n) {
                        n(!1);
                    }
                }
            });
        };
        t.prototype.getStorage = function (t, e) {
            tt.getStorage({
                key: t,
                success: function (t) {
                    if ("function" == typeof e) {
                        e(t.data);
                    }
                },
                fail: function (n) {
                    r().w(t + ": " + n.errMsg);
                    if ("function" == typeof e) {
                        e();
                    }
                }
            });
        };
        t.prototype.removeStorage = function (t, e) {
            tt.removeStorage({
                key: t,
                success: function () {
                    if ("function" == typeof e) {
                        e(!0);
                    }
                },
                fail: function () {
                    if ("function" == typeof e) {
                        e(!1);
                    }
                }
            });
        };
        t.prototype.getSystemInfo = function (t) {
            tt.getSystemInfo({
                success: function (e) {
                    e.safeArea = e.safeArea || {};
                    var n = {
                        model: e.model,
                        brand: e.brand,
                        pixelRatio: e.pixelRatio,
                        screenWidth: e.screenWidth,
                        screenHeight: e.screenHeight,
                        fontSizeSetting: e.fontSizeSetting,
                        platform: e.platform,
                        platformVersion: e.version,
                        platformSDKVersion: e.SDKVersion,
                        language: e.language,
                        deviceName: e.model,
                        safeArea: {
                            width: e.safeArea.width,
                            height: e.safeArea.height,
                            top: e.safeArea.top,
                            left: e.safeArea.left,
                            bottom: e.safeArea.bottom,
                            right: e.safeArea.right
                        },
                        statusBarHeight: e.statusBarHeight,
                        host: e.appName
                    };
                    var r = e.system.split(" ");
                    if (Array.isArray(r)) {
                        n.OS = r[0];
                        n.OSVersion = r[1];
                    }
                    var o = Math.round(e.screenWidth * e.pixelRatio);
                    var i = Math.round(e.screenHeight * e.pixelRatio);
                    if (o > i) {
                        n.resolution = o + "*" + i;
                    } else {
                        n.resolution = i + "*" + o;
                    }
                    if ("function" == typeof t) {
                        t(n);
                    }
                },
                fail: function () {
                    if ("function" == typeof t) {
                        t();
                    }
                }
            });
        };
        t.prototype.getDeviceInfo = function (t) {
            if ("function" == typeof t) {
                t();
            }
        };
        t.prototype.checkNetworkAvailable = function (t) {
            tt.getNetworkType({
                success: function (e) {
                    if ("function" == typeof t) {
                        t(e && "none" !== e.networkType);
                    }
                },
                fail: function () {
                    if ("function" == typeof t) {
                        t();
                    }
                }
            });
        };
        t.prototype.getNetworkInfo = function (t) {
            tt.getNetworkType({
                success: function (e) {
                    if ("function" == typeof t) {
                        t(e);
                    }
                },
                fail: function () {
                    if ("function" == typeof t) {
                        t();
                    }
                }
            });
        };
        t.prototype.onNetworkStatusChange = function (t) {
            tt.onNetworkStatusChange(function (e) {
                if ("function" == typeof t) {
                    t("none" !== e.networkType);
                }
            });
        };
        t.prototype.request = function (t) {
            var e = (t = t || {}).success;
            var n = t.fail;
            var r = !1;
            var o = null;
            t.success = function (t) {
                if (r) {
                    //
                } else {
                    if (o) {
                        clearTimeout(o);
                    }
                    if ("function" == typeof e) {
                        e(t);
                    }
                }
            };
            t.fail = function () {
                if (r) {
                    //
                } else {
                    if (o) {
                        clearTimeout(o);
                    }
                    if ("function" == typeof n) {
                        n();
                    }
                }
            };
            if (window.tt) {
                tt.request(t);
            }
            o = setTimeout(function () {
                if (o) {
                    clearTimeout(o);
                }
                r = !0;
                if ("function" == typeof n) {
                    n(r);
                }
            }, t.timeout || 5e3);
        };
        t.prototype.getDeviceId = function (t) {
            t("");
        };
        t.prototype.getAdvertisingId = function (t) {
            if ("function" == typeof t) {
                t("");
            }
        };
        t.prototype.getSdkType = function () {
            return "ttmp";
        };
        t.prototype.getPlatform = function () {
            return "tt";
        };
        t.prototype.getUserInfo = function (t) {
            var e = {
                fail: function () {
                    if (t) {
                        t();
                    }
                },
                success: function (e) {
                    try {
                        var n = e.userInfo;
                        if (n && t) {
                            t({
                                avatar: n.avatarUrl,
                                nickName: n.nickName,
                                gender: n.gender,
                                country: n.country,
                                province: n.province,
                                city: n.city,
                                language: n.language
                            });
                        }
                    } catch (e) {
                        if (t) {
                            t();
                        }
                    }
                }
            };
            try {
                tt.getSetting({
                    success: function (t) {
                        if (t.authSetting["scope.userInfo"]) {
                            tt.getUserInfo(e);
                        }
                    },
                    fail: function () {
                        if (t) {
                            t();
                        }
                    }
                });
            } catch (t) {
                r.e("getUserInfo error", t);
            }
        };
        t.prototype.getAppInfoSync = function () {
            return {};
        };
        t.prototype.onShareAppMessage = function (t) {
            tt.onShareAppMessage(t);
        };
        t.prototype.shareAppMessage = function (t) {
            tt.shareAppMessage(t);
        };
        t.prototype.getLaunchOptionsSync = function () {
            var t = null;
            if (t) {
                return t;
            }
            if (!tt.getLaunchOptionsSync) {
                return {};
            }
            try {
                t = tt.getLaunchOptionsSync();
            } catch (r) {
                t = null;
            }
            return t || {};
        };
        return t;
    })()
))();
var u = {
    SESSION_INTERVAL: 3e4,
    LOG_URL: "/bytedancem_logs",
    GET_OPENID_URL: "/uminiprogram_logs/bytedance/getuut",
    USERINFO_URL: "/uminiprogram_logs/comm/uif",
    ENDPOINT: "https://umini.shujupie.com",
    ENDPOINTB: "https://ulogs.umeng.com",
    DEVICE_INFO_KEY: "device_info",
    ADVERTISING_ID: "mobile_ad_id",
    ANDROID_ID: "android_id",
    CURRENT_SESSION: "current_session",
    SESSION_PAUSE_TIME: "session_pause_time",
    EVENT_SEND_DEFAULT_INTERVAL: 15e3,
    EVENT_LAST_SEND_TIME: "last_send_time",
    MAX_EVENTID_LENGTH: 128,
    MAX_PROPERTY_KEY_LENGTH: 256,
    MAX_PROPERTY_KEYS_COUNT: 100,
    REPORT_POLICY: "report_policy",
    REPORT_INTERVAL_TIME: "report_interval_time",
    REPORT_POLICY_START_SEND: "1",
    REPORT_POLICY_INTERVAL: "6",
    IMPRINT: "imprint",
    SEED_VERSION: "1.0.0",
    IMPL_VERSION: "2.7.1",
    ALIPAY_AVAILABLE_VERSION: "10.1.52",
    SHARE_PATH: "um_share_path",
    SHARES: "shares",
    REQUESTS: "requests",
    UUID: "um_uuid",
    UUID_SUFFIX: "ud",
    OPENID: "um_od",
    UNIONID: "um_unid",
    ALIPAYID: "um_alipayid",
    USERID: "um_userid",
    PROVIDER: "um_provider",
    SWANID: "um_swanid",
    ANONYMOUSID: "um_anonymousid",
    LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
    UM_SSRC: "_um_ssrc",
    USER_INFO: "user_info",
    IS_ALIYUN: !1
};
var f = {
    isNumber: function (t) {
        return !Number.isNaN(parseInt(t, 10));
    },
    compareVersion: function (t, e) {
        var n = String(t).split(".");
        var r = String(e).split(".");
        for (var o = 0; o < Math.max(n.length, r.length); o++) {
            var i = parseInt(n[o] || 0, 10);
            var a = parseInt(r[o] || 0, 10);
            if (i > a) {
                return 1;
            }
            if (i < a) {
                return -1;
            }
        }
        return 0;
    },
    getRandomStr: function (t) {
        var e = "";
        var n = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
        ];
        for (var r = 0; r < Number(t); r++) {
            e += n[Math.round(Math.random() * (n.length - 1))];
        }
        return e;
    },
    clone: function (t) {
        return JSON.parse(JSON.stringify(t));
    },
    startsWith: function (t, e) {
        return !(!t || !e || 0 === e.length || e.length > t.length) && t.substr(0, e.length) === e;
    },
    endsWith: function (t, e) {
        return !(!e || 0 === t.length || e.length > t.length) && t.substring(t.length - e.length) === e;
    },
    assign: function (t) {
        if (null == t) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        var e = Object(t);
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (r) {
                for (var o in r)
                    if (Object.prototype.hasOwnProperty.call(r, o)) {
                        e[o] = r[o];
                    }
            }
        }
        return e;
    },
    deepEqual: function t(e, n) {
        if (e === n) {
            return !0;
        }
        if (e && "object" == typeof e && n && "object" == typeof n) {
            if (Object.keys(e).length !== Object.keys(n).length) {
                return !1;
            }
            for (var r in e) {
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    return !1;
                }
                if (!t(e[r], n[r])) {
                    return !1;
                }
            }
            return !0;
        }
        return !1;
    },
    trimStart: function (t, e) {
        if (!t) {
            return "";
        }
        if ("string" == typeof e && e.length) {
            var n = new RegExp("^" + e + "*");
            t = t.replace(n, "");
        } else {
            t = t.replace(/^s*/, "");
        }
        return t;
    },
    trimEnd: function (t, e) {
        if (!t) {
            return "";
        }
        var n;
        var r;
        if ("string" == typeof e && e.length) {
            n = new RegExp(e);
            for (r = t.length; n.test(t.charAt(r)); ) {
                r -= 1;
            }
            return t.slice(0, r + 1);
        }
        n = /s/;
        for (r = t.length - 1; n.test(t.charAt(r)); ) {
            r -= 1;
        }
        return t.slice(0, r + 1);
    },
    isFunction: function (t) {
        return "function" == typeof t;
    }
};
var d = (function () {
    function t() {
        this._uuid = "";
        this._userid = "";
        this._provider = "";
        this._idType = "";
    }
    t.prototype.createUUID = function () {
        return f.getRandomStr(10) + Date.now() + f.getRandomStr(7) + u.UUID_SUFFIX;
    };
    t.prototype.initUUID = function (t) {
        var e = this;
        l.getStorage(u.UUID, function (n) {
            if (n) {
                e._uuid = n;
            } else {
                e._uuid = e.createUUID();
                l.setStorage(u.UUID, e._uuid);
            }
            if (t) {
                t(n);
            }
        });
    };
    t.prototype.initUserid = function () {
        var t = this;
        l.getStorage(u.USERID, function (e) {
            if (!t._userid && e) {
                t._userid = e;
                r().v("userId is ", e);
            }
        });
        l.getStorage(u.PROVIDER, function (e) {
            if (!t._provider && e) {
                t._provider = e;
                r().v("provider is ", e);
            }
        });
    };
    t.prototype.init = function (t) {
        var e = this;
        e.initUUID(function () {
            e.initUserid();
            e.initID(t);
        });
    };
    t.prototype.setUserid = function (t, e) {
        if (!this._userid && t) {
            this._userid = t;
            this._provider = e;
            l.setStorage(u.USERID, t);
            l.setStorage(u.PROVIDER, e);
        }
    };
    t.prototype.getUserId = function () {
        return this._userid;
    };
    t.prototype.getProvider = function () {
        return this._provider;
    };
    t.prototype.getIdType = function () {
        return this._idType;
    };
    t.prototype.getIdTracking = function () {
        var t = {};
        if (this._uuid) {
            t.uuid = this._uuid;
        }
        if (this._userid) {
            t.userid = this._userid;
        }
        return t;
    };
    return t;
})();
!(function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e._openid = "";
        e._unionid = "";
        e._useOpenid = !1;
        return e;
    }
    c(e, t);
    e.prototype.initID = function (t) {
        var e = this;
        if (e._useOpenid) {
            e._idType = "openid";
        } else {
            e._idType = "uuid";
        }
        r().v("id type: ", e._idType);
        l.getStorage(u.UNIONID, function (t) {
            e._unionid = t;
        });
        if (this._useOpenid) {
            l.getStorage(u.OPENID, function (n) {
                e._openid = n;
                if (t) {
                    t();
                }
            });
        } else {
            if (t) {
                t();
            }
        }
    };
    e.prototype.setUseOpenid = function (t) {
        this._useOpenid = t;
    };
    e.prototype.setOpenid = function (t) {
        if (!this._openid && t) {
            this._openid = t;
            l.setStorage(u.OPENID, t);
        }
    };
    e.prototype.setUnionid = function (t) {
        if (!this._unionid && t) {
            this._unionid = t;
            l.setStorage(u.UNIONID, t);
        }
    };
    e.prototype.getIdTracking = function () {
        var e = t.prototype.getIdTracking.call(this);
        if (this._openid) {
            e.openid = this._openid;
        }
        if (this._unionid) {
            e.unionid = this._unionid;
        }
        if (this._userid) {
            e.userid = this._userid;
        }
        return e;
    };
    e.prototype.getId = function () {
        if (this._useOpenid) {
            return this._openid;
        } else {
            return this._uuid;
        }
    };
})(d);
var h;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e._unionid = "";
        e._openid = "";
        e._anonymousid = "";
        e._useOpenid = !1;
        return e;
    }
    c(e, t);
    e.prototype.getOpenIdAsync = function (t, e) {
        var n = this;
        tt.login({
            force: !1,
            success: function (o) {
                if (o) {
                    l.request({
                        url: u.ENDPOINT + u.GET_OPENID_URL,
                        method: "GET",
                        data: {
                            key: t,
                            code: o.code || "",
                            anonymous_code: o.anonymousCode || ""
                        },
                        success: function (t) {
                            r().v("tt request ss ", t, u.ENDPOINT + u.GET_OPENID_URL);
                            if (t && 200 === t.statusCode && t.data && t.data.data) {
                                var o = t.data.data;
                                n.setOpenid(o.oid);
                                n.setAnonymousid(o.nid);
                                return e && e(!0);
                            }
                            if (e) {
                                e();
                            }
                        },
                        fail: function (t) {
                            r().v("tt request failed...", t);
                            if (e) {
                                e();
                            }
                        }
                    });
                } else {
                    if (e) {
                        e();
                    }
                }
            },
            fail: function (t) {
                r().v("tt login failed...", t);
                if (e) {
                    e();
                }
            }
        });
    };
    e.prototype.initID = function (t) {
        var e = this;
        e._idType = "anonymousid";
        r().v("id type: ", e._idType);
        l.getStorage(u.OPENID, function (t) {
            e._openid = t;
        });
        l.getStorage(u.ANONYMOUSID, function (n) {
            e._anonymousid = n;
            if (t) {
                t();
            }
        });
    };
    e.prototype.setUseOpenid = function (t) {
        this._useOpenid = t;
    };
    e.prototype.setOpenid = function (t) {
        if (!this._openid && t) {
            this._openid = t;
            l.setStorage(u.OPENID, t);
        }
    };
    e.prototype.setAnonymousid = function (t) {
        if (!this._anonymousid && t) {
            this._anonymousid = t;
            l.setStorage(u.ANONYMOUSID, t);
        }
    };
    e.prototype.getIdTracking = function () {
        var e = t.prototype.getIdTracking.call(this);
        if (this._openid) {
            e.openid = this._openid;
        }
        if (this._userid) {
            e.userid = this._userid;
        }
        if (this._anonymousid) {
            e.anonymousid = this._anonymousid;
        }
        return e;
    };
    e.prototype.getId = function () {
        if (this._anonymousid) {
            this._idType = "anonymousid";
            return this._anonymousid;
        }
    };
    return e;
})(d);
var m =
    ((h = null),
    function () {
        if (h) {
            //
        } else {
            h = new p();
        }
        return h;
    });
var g = (function () {
    var t = null;

    function e() {
        var t = !1;
        var e = null;
        var n = [];
        this.addPageStart = function (n) {
            if (n && !t) {
                e = {
                    ts: Date.now(),
                    path: n,
                    page_name: n
                };
                t = !0;
            }
        };
        this.addPageEnd = function (r) {
            if (t && r && e && r === e.page_name) {
                var o = Date.now() - e.ts;
                e.duration = Math.abs(o);
                n.push(e);
                e = null;
                t = !1;
            }
        };
        this.get = function () {
            return n;
        };
        this.getCurrentPage = function () {
            return e;
        };
        this.clear = function () {
            n.length = 0;
        };
    }
    return function () {
        if (t) {
            //
        } else {
            t = new e();
        }
        return t;
    };
})();
var y = {};
var v = (function () {
    var t = null;
    var e = [];
    var n = "";

    function o() {
        return {
            add: function (t, o) {
                r().v("share origin: %o", t);
                var i = {
                    title: t && t.title,
                    path: t && t.path && t.path.split("?")[0],
                    _um_sts: Date.now()
                };
                if (i.path && i.path.length > 1 && f.startsWith(i.path, "/")) {
                    i.path = f.trimStart(i.path, "/");
                }
                var a = t.path || "";
                var s = m().getId();
                if (s) {
                    var c = n.split(",");
                    var l = (c = c.filter(function (t) {
                        return t.length > 0;
                    })).indexOf(s);
                    if (l >= 0) {
                        c = c.slice(0, l);
                    }
                    if (c.length < 3) {
                        c.push(s);
                    }
                    var u = c.join(",");
                    if (-1 !== a.indexOf("?")) {
                        a += "&_um_ssrc=" + u;
                    } else {
                        a += "?_um_ssrc=" + u;
                    }
                    var d = Date.now();
                    a += "&_um_sts=" + d;
                    if (o) {
                        var h = (function (t) {
                            var e = [];
                            for (var n in t)
                                if ("_um_ssrc" !== n && "_um_sts" !== n) {
                                    e.push(n + "=" + t[n]);
                                }
                            return e.join("&");
                        })(y);
                        var p;
                        if (h) {
                            p = h + "&_um_ssrc=" + u + "&_um_sts=" + d;
                        } else {
                            p = "_um_ssrc=" + u + "&_um_sts=" + d;
                        }
                        if (t.query) {
                            t.query = t.query + "&_um_ssrc=" + u + "&_um_sts=" + d;
                        } else {
                            t.query = p;
                        }
                    } else {
                        t.path = a;
                    }
                    i._um_ssrc = u;
                    i._um_sts = d;
                }
                e.push(i);
                r().v("share: %o", t);
                return t;
            },
            setShareSource: function (t) {
                n = t;
            },
            clear: function () {
                e.length = 0;
            },
            get: function () {
                return e;
            }
        };
    }
    return function () {
        if (t) {
            //
        } else {
            t = new o();
        }
        return t;
    };
})();
var w = function (t) {
    if (t) {
        try {
            return JSON.stringify(t);
        } catch (t) {}
    }
    return "";
};
var _ = function (t) {
    if (t) {
        try {
            return JSON.parse(t);
        } catch (t) {}
    }
    return null;
};
var b = (function () {
    var t = null;
    var e = "";
    var n = null;
    var r = !1;

    function i() {
        this.load = function (t) {
            if (n) {
                l.removeStorage(e);
                t();
            } else {
                e = "um_cache_" + o().appKey();
                l.getStorage(e, function (o) {
                    n = _(o) || {};
                    r = !0;
                    l.removeStorage(e);
                    t();
                });
            }
        };
        this.save = function () {
            if (n) {
                l.setStorage(e, w(n));
            }
        };
        this.set = function (t, e) {
            if (n) {
                n[t] = e;
            }
        };
        this.get = function (t) {
            return (n || {})[t];
        };
        this.remove = function (t) {
            if (n && n[t]) {
                delete n[t];
            }
        };
        this.getAll = function () {
            return n;
        };
        this.clear = function () {
            n = null;
        };
        this.has = function (t) {
            return !!this.get(t);
        };
        this.isLoaded = function () {
            return r;
        };
    }
    return function () {
        if (t) {
            //
        } else {
            t = new i();
        }
        return t;
    };
})();
var S = (function () {
    var t;
    var e;
    var n = [];
    var o = [];

    function i() {
        if (n.length) {
            var t = b().get("ekvs");
            if (
                (function (t) {
                    var e = 0;
                    for (var n in t)
                        if (Array.isArray(t[n])) {
                            e += t[n].length;
                        }
                    return e;
                })(t) +
                    n.length <=
                1e4
            ) {
                t = a(t, n);
                b().set("ekvs", t);
            }
        }
    }

    function a(t, n) {
        var r = (t = t || {})[e];
        if (Array.isArray(r) && r.length) {
            t[e] = r.concat(n);
        } else {
            t[e] = [].concat(n);
        }
        return t;
    }
    return function () {
        if (t) {
            //
        } else {
            t = {
                addEvent: function (t) {
                    if (e) {
                        n.unshift(t);
                        n.length > 1 && (i(), (n.length = 0));
                    } else {
                        r().w("session id is null: ", e);
                        o.unshift(t);
                    }
                },
                setSessionId: function (t) {
                    e = t;
                    r().v("setSessionId: ", e);
                    if (Array.isArray(o) && o.length && e) {
                        for (var n = 0; n < o.length; n++) {
                            this.addEvent(o[n]);
                        }
                        o.length = 0;
                    }
                },
                getEkvs: function () {
                    var t = b().get("ekvs");
                    if (n && n.length) {
                        t = a(t, n);
                    }
                    return t;
                },
                clear: function () {
                    b().remove("ekvs");
                    n.length = 0;
                }
            };
        }
        return t;
    };
})();
var k = "2g";
var C = "3g";
var M = "4g";
var P = "half_session";
var T = "close_session";
var A = "ekv";
var I = ["access", "access_subtype"];
var D = (function () {
    var t = null;

    function e() {
        var t = !1;
        var e = {};

        function n(t) {
            var n = b().get(u.IMPRINT);
            if (n) {
                e.imprint = n;
            }
            e.device_type = "Phone";
            e.sdk_version = u.IMPL_VERSION;
            e.appkey = o().appKey();
            l.getDeviceInfo(function (t) {
                e.device_info = t || "";
            });
            var r = l.getAppInfoSync();
            e.appid = r.appId;
            e.app_env = r.appEnv;
            e.app_version = r.appVersion;
            l.getSystemInfo(function (n) {
                l.getNetworkInfo(function (r) {
                    var o = (function (t, e) {
                        var n = {};
                        (t = t || {}).safeArea = t.safeArea || {};
                        var r = (e = e || {}).networkType;
                        if ("none" === r) {
                            r = "unknown";
                        }
                        var o = t.model || "";
                        var i = t.platform || "";
                        var a = t.brand || "";
                        var s = a.toLowerCase();
                        n.sdk_type = l.getSdkType();
                        n.platform = l.getPlatform();
                        n.platform_sdk_version = t.platformSDKVersion;
                        n.platform_version = t.platformVersion;
                        n.resolution = t.resolution;
                        n.pixel_ratio = t.pixelRatio;
                        n.os = i;
                        n.font_size_setting = t.fontSizeSetting;
                        n.device_model = o;
                        n.device_brand = a;
                        n.device_manufacturer = s;
                        n.device_manuid = o;
                        n.device_name = o;
                        n.os_version = t.OSVersion;
                        n.language = t.language;
                        n.theme = t.theme;
                        n.benchmark_level = t.benchmarkLevel;
                        n.status_bar_height = t.statusBarHeight;
                        n.safe_area_top = t.safeArea.top;
                        n.safe_area_left = t.safeArea.left;
                        n.safe_area_right = t.safeArea.right;
                        n.safe_area_bottom = t.safeArea.bottom;
                        n.safe_area_height = t.safeArea.height;
                        n.safe_area_width = t.safeArea.width;
                        n.storage = t.storage;
                        n.screen_width = t.screenWidth;
                        n.screen_height = t.screenHeight;
                        n.host = t.host;
                        switch ((r = r ? r.toLowerCase() : "")) {
                            case M:
                                n.access_subtype = "LTE";
                                n.access = "4G";
                                break;
                            case C:
                                n.access_subtype = "CDMA";
                                n.access = "3G";
                                break;
                            case k:
                                n.access_subtype = "GRPS";
                                n.access = "2G";
                                break;
                            default:
                                n.access = r;
                                delete n.access_subtype;
                        }
                        return n;
                    })(n, r);
                    f.assign(e, o);
                    if (t) {
                        t();
                    }
                });
            });
        }
        return {
            init: function () {
                n(function () {
                    t = !0;
                });
            },
            isLoaded: function () {
                return t;
            },
            get: function () {
                return e;
            },
            getRealtimeFields: function () {
                var t = {};
                I.forEach(function (n) {
                    t[n] = e[n];
                });
                return t;
            },
            setIdTracking: function (t) {
                this.setItem("id_tracking", t);
            },
            setIdType: function (t) {
                this.setItem("id_type", t);
            },
            setAppVersion: function (t) {
                this.setItem("app_version", t);
            },
            setSuperProperty: function (t) {
                if (e.sp) {
                    //
                } else {
                    e.sp = {};
                }
                e.sp.isv = t;
            },
            getSuperProperty: function () {
                if (e && e.sp) {
                    return e.sp.isv;
                } else {
                    return "";
                }
            },
            setItem: function (t, n) {
                e[t] = n;
            },
            getItem: function (t) {
                return e[t];
            }
        };
    }
    return {
        instance: function () {
            if (t) {
                //
            } else {
                t = e();
            }
            return t;
        }
    };
})();
var U = (function () {
    var t = null;
    var e = null;
    var n = null;
    return function () {
        if (t) {
            //
        } else {
            t = {
                resume: function (t) {
                    var o = !1;
                    if (n) {
                        //
                    } else {
                        n = b().get(u.CURRENT_SESSION);
                    }
                    var i = new Date();
                    e = i.getTime();
                    if (!n || !n.end_time || e - n.end_time > u.SESSION_INTERVAL) {
                        o = !0;
                        (function (t) {
                            try {
                                var e = (n || {}).options || {};
                                var o = f.assign(
                                    {},
                                    (function (t) {
                                        var e = {};
                                        for (var n in t)
                                            if (0 === n.indexOf("_um_")) {
                                                e[n] = t[n];
                                            }
                                        r().v("query: ", t);
                                        r().v("_um_params: ", e);
                                        return e;
                                    })(t.query)
                                );
                                o.path = t.path || e.path;
                                if (t.scene) {
                                    o.scene = l.getPlatform() + "_" + t.scene;
                                } else {
                                    o.scene = e.scene;
                                }
                                var i = t.referrerInfo;
                                if (i) {
                                    o.referrerAppId = i.appId;
                                }
                                r().v("session options: ", o);
                                var a = o[u.UM_SSRC];
                                if (a) {
                                    v().setShareSource(a);
                                }
                                var s = Date.now();
                                n = {
                                    id: f.getRandomStr(10) + s,
                                    start_time: s,
                                    options: o
                                };
                            } catch (t) {
                                r().e("生成新session失败: ", t);
                            }
                        })(t);
                        r().v("开始新的session(%s): ", n.id, n);
                    } else {
                        r().v("延续上一次session(%s): %s ", n.id, i.toLocaleTimeString(), n);
                    }
                    return o;
                },
                pause: function () {
                    !(function () {
                        if (n) {
                            var t = new Date();
                            n.end_time = t.getTime();
                            if ("number" != typeof n.duration) {
                                n.duration = 0;
                            }
                            n.duration = n.end_time - e;
                            b().set(u.CURRENT_SESSION, n);
                            r().v("退出会话(%s): %s ", n.id, t.toLocaleTimeString(), n);
                        }
                    })();
                },
                getCurrentSessionId: function () {
                    return (n || {}).id;
                },
                getCurrentSession: function () {
                    return n;
                },
                cloneCurrentSession: function () {
                    return f.clone(n);
                }
            };
        }
        return t;
    };
})();

function B(t) {
    var e = null;
    switch (t) {
        case P:
            e = (function () {
                var t = null;
                var e = U().cloneCurrentSession();
                if (e) {
                    t = {
                        header: {
                            st: "1"
                        },
                        analytics: {
                            sessions: [e]
                        }
                    };
                }
                return t;
            })();
            break;
        case T:
            e = (function () {
                var t = null;
                var e = {};
                var n = U().cloneCurrentSession();
                if (n) {
                    var r = g().get();
                    var o = v().get();
                    if (Array.isArray(r) && r.length) {
                        n.pages = f.clone(r);
                    }
                    if (Array.isArray(o) && o.length) {
                        n.shares = f.clone(o);
                    }
                    g().clear();
                    v().clear();
                    e.sessions = [n];
                }
                var i = S().getEkvs();
                if (i) {
                    e.ekvs = f.clone(i);
                    S().clear();
                }
                if (e.sessions || e.ekvs) {
                    t = {
                        analytics: e
                    };
                }
                return t;
            })();
            break;
        case A:
            e = (function () {
                var t = null;
                var e = S().getEkvs();
                if (e) {
                    t = {
                        analytics: {
                            ekvs: f.clone(e)
                        }
                    };
                    S().clear();
                }
                return t;
            })();
    }
    return e;
}
var E = {
    sessions: "sn",
    ekvs: "e",
    active_user: "active_user"
};
var O = {
    sdk_type: "sdt",
    access: "ac",
    access_subtype: "acs",
    device_model: "dm",
    language: "lang",
    device_type: "dt",
    device_manufacturer: "dmf",
    device_name: "dn",
    platform_version: "pv",
    id_type: "it",
    font_size_setting: "fss",
    os_version: "ov",
    device_manuid: "did",
    platform_sdk_version: "psv",
    device_brand: "db",
    appkey: "ak",
    _id: "id",
    id_tracking: "itr",
    imprint: "imp",
    sdk_version: "sv",
    resolution: "rl",
    testToken: "ttn",
    theme: "t5",
    benchmark_level: "bml",
    screen_width: "sw",
    screen_height: "sh",
    status_bar_height: "sbh",
    safe_area_top: "sat",
    safe_area_left: "sal",
    safe_area_right: "sar",
    safe_area_bottom: "sab",
    safe_area_height: "sah",
    safe_area_width: "saw",
    pixel_ratio: "pr",
    storage: "s7",
    host: "hs"
};
var R = {
    uuid: "ud",
    unionid: "und",
    openid: "od",
    anonymousid: "nd",
    alipay_id: "ad",
    device_id: "dd",
    userid: "puid"
};

function L(t, e) {
    var n = N(t, e);
    if (t && t.id_tracking) {
        n[e.id_tracking || "id_tracking"] = N(t.id_tracking, R);
    }
    return n;
}

function N(t, e) {
    var n = {};
    for (var r in t) e[r] ? (n[e[r]] = t[r]) : (n[r] = t[r]);
    return n;
}

function x(t, e) {
    var n = {};
    if (t) {
        for (var r in t)
            if (t[r]) {
                n[e[r]] = t[r];
            }
    }
    return n;
}
var F = "";

function j() {
    return F;
}
var V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var H = (function (t) {
    var e = {};
    var n = 0;
    for (var r = t.length; n < r; n++) {
        e[t.charAt(n)] = n;
    }
    return e;
})(V);
var q = String.fromCharCode;
var z = function (t) {
    if (t.length < 2) {
        if ((e = t.charCodeAt(0)) < 128) {
            return t;
        } else {
            if (e < 2048) {
                return q(192 | (e >>> 6)) + q(128 | (63 & e));
            } else {
                return q(224 | ((e >>> 12) & 15)) + q(128 | ((e >>> 6) & 63)) + q(128 | (63 & e));
            }
        }
    }
    var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
    return q(240 | ((e >>> 18) & 7)) + q(128 | ((e >>> 12) & 63)) + q(128 | ((e >>> 6) & 63)) + q(128 | (63 & e));
};
var G = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
var K = function (t) {
    var e = [0, 2, 1][t.length % 3];
    var n =
        (t.charCodeAt(0) << 16) | ((t.length > 1 ? t.charCodeAt(1) : 0) << 8) | (t.length > 2 ? t.charCodeAt(2) : 0);
    return [
        V.charAt(n >>> 18),
        V.charAt((n >>> 12) & 63),
        e >= 2 ? "=" : V.charAt((n >>> 6) & 63),
        e >= 1 ? "=" : V.charAt(63 & n)
    ].join("");
};
var W = function (t) {
    return (function (t) {
        return t.replace(G, z);
    })(t).replace(/[\s\S]{1,3}/g, K);
};
var X = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g");
var Y = function (t) {
    switch (t.length) {
        case 4:
            var e =
                (((7 & t.charCodeAt(0)) << 18) |
                    ((63 & t.charCodeAt(1)) << 12) |
                    ((63 & t.charCodeAt(2)) << 6) |
                    (63 & t.charCodeAt(3))) -
                65536;
            return q(55296 + (e >>> 10)) + q(56320 + (1023 & e));
        case 3:
            return q(((15 & t.charCodeAt(0)) << 12) | ((63 & t.charCodeAt(1)) << 6) | (63 & t.charCodeAt(2)));
        default:
            return q(((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1)));
    }
};
var J = function (t) {
    var e = t.length;
    var n = e % 4;
    var r =
        (e > 0 ? H[t.charAt(0)] << 18 : 0) |
        (e > 1 ? H[t.charAt(1)] << 12 : 0) |
        (e > 2 ? H[t.charAt(2)] << 6 : 0) |
        (e > 3 ? H[t.charAt(3)] : 0);
    var o = [q(r >>> 16), q((r >>> 8) & 255), q(255 & r)];
    o.length -= [0, 0, 2, 1][n];
    return o.join("");
};
var Z = function (t) {
    return (function (t) {
        return t.replace(/[\s\S]{1,4}/g, J);
    })(t).replace(X, Y);
};
var Q = function (t, e) {
    if (e) {
        return W(String(t))
            .replace(/[+\/]/g, function (t) {
                if ("+" == t) {
                    return "-";
                } else {
                    return "_";
                }
            })
            .replace(/=/g, "");
    } else {
        return W(String(t));
    }
};
var $ = function (t) {
    return Z(
        String(t)
            .replace(/[-_]/g, function (t) {
                if ("-" == t) {
                    return "+";
                } else {
                    return "/";
                }
            })
            .replace(/[^A-Za-z0-9\+\/]/g, "")
    );
};
var et = new (function () {
    var t = "";
    var e = this;
    this.set = function (e) {
        t = e;
    };
    this.get = function () {
        return t;
    };
    this.getImpObj = function () {
        return _($(t));
    };
    this.getItem = function (t) {
        var n = e.getImpObj();
        return (n && n[t]) || "";
    };
    this.load = function () {
        t = b().get(u.IMPRINT);
    };
    this.save = function () {
        if (t) {
            b().set(u.IMPRINT, t);
        }
    };
})();

function nt(t, e, n, o) {
    D.instance().setIdType(m().getIdType());
    D.instance().setIdTracking(m().getIdTracking());
    var i = m().getUserId();
    if (i && t.analytics) {
        t.analytics.active_user = {
            puid: i,
            provider: m().getProvider()
        };
    }
    var a = f.clone(D.instance().get());
    t.header = f.assign(a, t.header, {
        ts: Date.now(),
        testToken: j(),
        traceId: f.getRandomStr(10) + Date.now() + f.getRandomStr(9)
    });
    var s;
    var c = (function (t) {
        return {
            h: L(t.header, O),
            a: x(t.analytics, E)
        };
    })(t);
    var d = w(c);
    var h = {
        url: u.ENDPOINT + u.LOG_URL,
        method: "POST",
        data: Q(d),
        success: function (o) {
            var i = o.code || o.status || o.statusCode;
            if (200 === i || 413 === i) {
                r().i("数据发送成功: ", t, d);
                (function (t) {
                    if (t) {
                        D.instance().setItem(u.IMPRINT, t);
                        et.set(t);
                        et.save();
                        r().v("imprint: ", et.getImpObj());
                        if (et.getItem("ttn_invalid")) {
                            F = "";
                        }
                    }
                })((o.data || {}).imprint);
                "function" == typeof e && e(o);
            } else {
                r().w("数据发送失败: ", d);
                "function" == typeof n && n();
            }
        },
        fail: function () {
            r().w("超时: ", d);
            if ("function" == typeof n) {
                n();
            }
        },
        complete: function () {
            if ("function" == typeof o) {
                o();
            }
        }
    };
    l.request(
        f.assign(h, {
            header: {
                "Content-Type": (s = l.getSdkType() + "/json"),
                "Msg-Type": s
            }
        })
    );
}

function rt(t) {
    var e = t;
    var n = [];
    this.enqueue = function (t) {
        if ("number" == typeof e && this.size() >= e) {
            this.dequeue();
        }
        n.push(t);
    };
    this.dequeue = function () {
        return n.shift();
    };
    this.front = function () {
        return n[0];
    };
    this.isEmpty = function () {
        return 0 === n.length;
    };
    this.clear = function () {
        n.length = 0;
    };
    this.size = function () {
        return n.length;
    };
    this.items = function () {
        return n;
    };
    this.print = function () {
        console.log(n.toString());
    };
}
var ot = (function () {
    var t = null;
    var e = !1;
    var n = [];
    var o = new rt(50);

    function i(t, e, n) {
        if (D.instance().isLoaded()) {
            e = e || {};
            var r = B(t);
            if (r) {
                var a = D.instance().getRealtimeFields();
                r.header = f.assign({}, r.header, a);
                r.noCache = e.noCache;
                o.enqueue(r);
            }
            if ("function" == typeof n) {
                n();
            }
        } else {
            setTimeout(function () {
                i(t, e, n);
            }, 100);
        }
    }

    function a(t) {
        var e = o.front();
        if (e) {
            nt(
                e,
                function () {
                    o.dequeue();
                    a(t);
                },
                function () {
                    var e = o.dequeue();
                    if (e && !e.noCache) {
                        n.push(e);
                    }
                    a(t);
                }
            );
        } else {
            n.forEach(function (t) {
                o.enqueue(t);
            });
            n.length = 0;
            t();
        }
    }

    function s(t) {
        if (m().getId()) {
            if (e) {
                r().i("队列正在发送中");
            } else {
                (e = !0),
                    a(function () {
                        e = !1;
                        if ("function" == typeof t) {
                            t();
                        }
                    });
            }
        } else {
            r().i("获取id标识失败，暂缓发送");
            "function" == typeof t && t();
        }
    }

    function c() {
        this.send = function (t, e, n) {
            if (t) {
                this.add(t, e, function () {
                    s(n);
                });
            } else {
                s(n);
            }
        };
        this.add = function (t, e, n) {
            i(t, e, n);
        };
        this.load = function () {
            var t = b().get(u.REQUESTS);
            if (t && t.length) {
                t.forEach(function (t) {
                    o.enqueue(t);
                });
            }
            b().remove(u.REQUESTS);
        };
        this.save = function () {
            b().set(u.REQUESTS, f.clone(o.items()));
            o.clear();
        };
    }
    return function () {
        if (t) {
            //
        } else {
            t = new c();
        }
        return t;
    };
})();
var it = (function () {
    var t = null;
    var e = null;

    function n() {
        function t(t) {
            if (t && "object" == typeof t) {
                var e = b().get(u.USER_INFO);
                if (e && f.deepEqual(t, e)) {
                    //
                } else {
                    (function (t, e) {
                        var n = o().appKey();
                        var i = l.getSdkType();
                        var a = m().getId();
                        var s = m().getIdType();
                        if (n && i && a && s) {
                            var c = {
                                ak: o().appKey(),
                                sdt: l.getSdkType(),
                                uin: t.nickName,
                                uia: t.avatar || t.avatarUrl,
                                uig: t.gender,
                                uit: t.country,
                                uip: t.province,
                                uic: t.city,
                                uil: t.language,
                                id: m().getId(),
                                it: m().getIdType(),
                                age: t.age,
                                cln: t.constellation
                            };
                            var f = JSON.stringify(c);
                            f = Q(f);
                            l.request({
                                url: u.ENDPOINT + u.USERINFO_URL,
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: "ui=" + f,
                                success: function (n) {
                                    r().v("用户信息上传成功: ", t);
                                    if (e) {
                                        e(n && n.data && 200 === n.data.code);
                                    }
                                },
                                fail: function () {
                                    r().e("用户信息上传失败: ", t);
                                    if (e) {
                                        e(!1);
                                    }
                                }
                            });
                        }
                    })(t, function (e) {
                        if (e) {
                            b().set(u.USER_INFO, t);
                        }
                    });
                }
                return !0;
            }
            return !1;
        }
        this.setUserInfo = function (t) {
            e = t;
        };
        this.update = function () {
            if (t(e)) {
                //
            } else {
                l.getUserInfo(function (e) {
                    t(e);
                });
            }
        };
    }
    return function () {
        if (t) {
            //
        } else {
            t = new n();
        }
        return t;
    };
})();

function at(t, e) {
    this.id = t;
    this.ts = Date.now();
    var n = typeof e;
    if ("string" === n && e) {
        this[t] = e;
    } else if ("object" === n) {
        for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
                this[r] = e[r];
            }
    }
}

function st() {
    var t = !1;
    var e = !1;
    var n = 0;
    this.init = function (e) {
        r().v("sdk version: " + u.IMPL_VERSION);
        if (t) {
            r().v("Lib重复实例化");
        } else {
            b().load(function () {
                r().v("cache初始化成功: ", b().getAll());
                if (m().setUseOpenid) {
                    m().setUseOpenid(o().useOpenid());
                }
                m().init(function () {
                    D.instance().init();
                    r().v("Header初始化成功");
                });
                t = !0;
                if ("function" == typeof e) {
                    e();
                }
                r().tip("SDK集成成功");
            });
        }
    };
    this.resume = function (n) {
        var i;
        if (t && !e) {
            r().v("showOptions: ", n);
            e = !0;
            if (o().enableVerify() && n && n.query) {
                i = n.query._ttn;
                F = i || F;
            }
            this._resume(n);
        }
    };
    this._resume = function (t) {
        ot().load();
        var e = U().resume(t);
        var n = U().getCurrentSessionId();

        function i(t, e) {
            if (m().getId() || t <= 0) {
                //
            } else {
                m().getOpenIdAsync(o().appKey(), function (n) {
                    if (n) {
                        r().v("获取id成功");
                        ot().send();
                    } else {
                        r().v("获取openid失败,启动重试,剩余可用次数", t - 1);
                        setTimeout(function () {
                            i(t - 1, e);
                        }, e);
                    }
                });
            }
        }
        S().setSessionId(n);
        if (e) {
            ot().add(P, {}, function () {
                if (m().setUseOpenid) {
                    m().setUseOpenid(o().useOpenid());
                }
                if (o().useOpenid() && o().autoGetOpenid() && !m().getId()) {
                    r().v("get id async");
                    i(10, 3e3);
                } else {
                    r().v("session auto send");
                    ot().send();
                }
            });
        }
    };
    this.pause = function (i) {
        if (t) {
            e = !1;
            n = 0;
            U().pause();
            if (o().uploadUserInfo()) {
                it().update();
            }
            ot().send(T, {}, function () {
                ot().save();
                b().save();
                r().v("cache save success");
                if ("function" == typeof i) {
                    i();
                }
            });
        }
    };
    this.setOpenid = function (t) {
        r().v("setOpenId: %s", t);
        m().setOpenid(t);
        ot().send();
    };
    this.setUnionid = function (t) {
        r().v("setUnionid: %s", t);
        m().setUnionid(t);
    };
    this.setUserid = function (t, e) {
        r().v("setUserid: %s", t, e);
        m().setUserid(t, e);
    };
    this.setUserInfo = function (t) {
        r().v("setUserInfo: %s", t);
        it().setUserInfo(t);
    };
    this.setAnonymousid = function (t) {
        r().v("setAnonymousId: %s", t);
        m().setAnonymousid(t);
        ot().send();
    };
    this.setAppVersion = function (t) {
        if (t && "string" != typeof t) {
            r().w("setAppVersion方法只接受字符串类型参数");
        } else {
            D.instance().setAppVersion(t);
        }
    };
    this.setAlipayUserid = function (t) {
        if (t && "string" != typeof t) {
            r().w("setAlipayUserid方法只接受字符串类型参数");
        } else {
            r().v("setAlipayUserid: %s", t);
            m().setAlipayUserid(t);
        }
    };
    this.setDeviceId = function (t) {
        if ("string" == typeof t) {
            m().setDeviceId(t);
            return t;
        }
    };
    this.setSuperProperty = function (t) {
        if (t && "string" != typeof t) {
            r().w("超级属性只支持字符串类型");
        } else {
            var e = this;
            if (D.instance().getSuperProperty() !== t) {
                D.instance().setSuperProperty(t);
                e.pause(function () {
                    e.resume();
                });
            }
        }
    };
    this.trackEvent = function (e, o) {
        if (
            t &&
            (r().v("event: ", e, o),
            (function (t, e) {
                if (!t || "string" != typeof t) {
                    r().e('please check trackEvent id. id should be "string" and not null');
                    return !1;
                }
                var n = ["id", "ts", "du"];
                var o = {};
                n.forEach(function (t) {
                    o[t] = 1;
                });
                if (o[t]) {
                    r().e("eventId不能与以下保留字冲突: " + n.join(","));
                    return !1;
                }
                if (t.length > u.MAX_EVENTID_LENGTH) {
                    r().e("The maximum length of event id shall not exceed " + u.MAX_EVENTID_LENGTH);
                    return !1;
                }
                if (e && ("object" != typeof e || Array.isArray(e)) && "string" != typeof e) {
                    r().e(
                        "please check trackEvent properties. properties should be string or object(not include Array)"
                    );
                    return !1;
                }
                if ("object" == typeof e) {
                    var i = 0;
                    for (var a in e)
                        if ({}.hasOwnProperty.call(e, a)) {
                            if (a.length > u.MAX_PROPERTY_KEY_LENGTH) {
                                r().e(
                                    "The maximum length of property key shall not exceed " + u.MAX_PROPERTY_KEY_LENGTH
                                );
                                return !1;
                            }
                            if (i >= u.MAX_PROPERTY_KEYS_COUNT) {
                                r().e("The maximum count of properties shall not exceed " + u.MAX_PROPERTY_KEYS_COUNT);
                                return !1;
                            }
                            if (o[a]) {
                                r().e("属性中的key不能与以下保留字冲突: " + n.join(","));
                                return !1;
                            }
                            i += 1;
                        }
                }
                return !0;
            })(e, o))
        ) {
            var i = new at(e, o);
            S().addEvent(i);
            var a = !!j();
            var s;
            if (a) {
                s = 0;
            } else {
                s = u.EVENT_SEND_DEFAULT_INTERVAL;
            }
            var c = Date.now();
            if ("number" != typeof n || "number" != typeof s || n <= 0 || c - n > s) {
                n = c;
                ot().send(
                    A,
                    {
                        noCache: a
                    },
                    function () {}
                );
            }
        }
    };
    this.trackShare = function (e) {
        if (t) {
            try {
                if (l.getSdkType().indexOf("game") > -1) {
                    e = v().add(e, !0);
                    r().v("shareQuery: ", e);
                } else {
                    e = v().add(e, !1);
                    r().v("sharePath: ", e.path);
                }
            } catch (t) {
                r().v("shareAppMessage: ", t);
            }
        }
        return e;
    };
    this.trackPageStart = function (e) {
        if (t) {
            g().addPageStart(e);
        }
    };
    this.trackPageEnd = function (e) {
        if (t) {
            g().addPageEnd(e);
        }
    };
    this.onShareAppMessage = function (t) {
        var e = this;
        l.onShareAppMessage(function () {
            return e.trackShare(t());
        });
    };
    this.shareAppMessage = function (t) {
        this.trackShare(t);
        l.shareAppMessage(t);
    };
}
var ct = [];

function lt() {}
lt.prototype = {
    createMethod: function (t, e, n) {
        try {
            if (n && n[e]) {
                t[e] = function () {
                    return n[e].apply(n, arguments);
                };
            } else {
                t[e] = function () {
                    ct.push([e, [].slice.call(arguments)]);
                };
            }
        } catch (t) {
            r().v("create method errror: ", t);
        }
    },
    installApi: function (t, e) {
        try {
            var n;
            var o;
            var i =
                "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setAnonymousid,onShareAppMessage,shareAppMessage".split(
                    ","
                );
            n = 0;
            for (o = i.length; n < o; n++) {
                this.createMethod(t, i[n], e);
            }
            if (e) {
                n = 0;
                for (o = ct.length; n < o; n++) {
                    var a = ct[n];
                    try {
                        e[a[0]].apply(e, a[1]);
                    } catch (t) {
                        r().v("impl[v[0]].apply error: ", a[0], t);
                    }
                }
            }
        } catch (t) {
            r().v("install api errror: ", t);
        }
    }
};
var ut = [u.ENDPOINT, u.ENDPOINTB];

function ft(t, e) {
    var n;
    var o;
    if (0 === t || (1 === t && e)) {
        n = u.ENDPOINT;
    } else {
        if (2 === t && e) {
            n = u.ENDPOINTB;
        } else {
            e && (n = ut[t]);
        }
    }
    if (t >= ut.length || e) {
        if (e) {
            o = n;
            u.ENDPOINT = o;
        }
        if (e) {
            r().v("命中可用服务", n);
        }
        if (!e) {
            r().tip_w("未命中可用服务");
        }
        return !1;
    }
    l.request({
        url: u.ENDPOINT + "/uminiprogram_logs/ckdh",
        success: function (e) {
            if (200 === (e.code || e.status || e.statusCode) && e.data && 200 === e.data.code) {
                ft(t + 1, !0);
            } else {
                ft(t + 1, !1);
            }
        },
        fail: function () {
            ft(t + 1, !1);
        }
    });
}
if (u.ENDPOINTB) {
    setTimeout(function () {
        ft(0, !1);
    }, 3e3);
}
var dt = new lt();
var ht = {
    _inited: !1,
    _log: r(),
    preinit: function (t) {
        if (t && "object" == typeof t) {
            for (var e in t) u[e] = t[e];
        }
        return u;
    },
    use: function (t, e) {
        if (t && f.isFunction(t.install)) {
            t.install(ht, e);
        } else {
            if (f.isFunction(t)) {
                t(ht, e);
            }
        }
        return ht;
    },
    messager: a,
    init: function (t) {
        if (this._inited) {
            r().v("已经实例过，请避免重复初始化");
        } else if (t) {
            if (t.appKey) {
                if ("boolean" != typeof t.useOpenid) {
                    t.useOpenid = !0;
                }
                o().set(t);
                r().setDebug(t.debug);
                this._inited = !0;
                var e = this;
                a.emit(a.messageType.CONFIG_LOADED, t);
                try {
                    var n = new st();
                    r().v("成功创建Lib对象");
                    n.init(function () {
                        r().v("Lib对象初始化成功");
                        dt.installApi(e, n);
                        r().v("安装Lib接口成功");
                        a.emit(a.messageType.UMA_LIB_INITED, t);
                    });
                } catch (t) {
                    r().w("创建Lib对象异常: " + t);
                }
            } else {
                r().err("请确保传入正确的appkey");
            }
        } else {
            r().err("请正确设置相关信息！");
        }
    }
};
try {
    dt.installApi(ht, null);
} catch (n) {
    r().w("uma赋值异常: ", n);
}
var pt = "2.7.1";
var mt = "none";
var gt = {};
var yt = Array.isArray;
gt.isArray =
    yt ||
    function (t) {
        return "[object Array]" === toString.call(t);
    };
gt.isObject = function (t) {
    return t === Object(t) && !gt.isArray(t);
};
gt.isEmptyObject = function (t) {
    if (gt.isObject(t)) {
        for (var e in t)
            if (hasOwnProperty.call(t, e)) {
                return !1;
            }
        return !0;
    }
    return !1;
};
gt.isUndefined = function (t) {
    return void 0 === t;
};
gt.isString = function (t) {
    return "[object String]" === toString.call(t);
};
gt.isDate = function (t) {
    return "[object Date]" === toString.call(t);
};
gt.isNumber = function (t) {
    return "[object Number]" === toString.call(t);
};
gt.each = function (t, e, n) {
    if (null != t) {
        var r = {};
        var o = Array.prototype.forEach;
        if (o && t.forEach === o) {
            t.forEach(e, n);
        } else if (t.length === +t.length) {
            var i = 0;
            for (var a = t.length; i < a; i++) {
                if (i in t && e.call(n, t[i], i, t) === r) {
                    return;
                }
            }
        } else {
            for (var s in t)
                if (hasOwnProperty.call(t, s) && e.call(n, t[s], s, t) === r) {
                    return;
                }
        }
    }
};
gt.buildQuery = function (t, e) {
    var n;
    var r;
    var o = [];
    if (void 0 === e) {
        e = "&";
    }
    gt.each(t, function (t, e) {
        n = encodeURIComponent(t.toString());
        r = encodeURIComponent(e);
        o[o.length] = r + "=" + n;
    });
    return o.join(e);
};
gt.JSONDecode = function (t) {
    if (t) {
        try {
            return JSON.parse(t);
        } catch (t) {
            console.error("JSONDecode error", t);
        }
        return null;
    }
};
gt.JSONEncode = function (t) {
    try {
        return JSON.stringify(t);
    } catch (t) {
        console.error("JSONEncode error", t);
    }
};
var vt = Object.create(null);

function wt(t) {
    r().v("开始构建 fetch body");
    l.getSystemInfo(function (e) {
        l.getNetworkInfo(function (n) {
            var r = (n = n || {}).networkType;
            if (r === mt) {
                r = "unknown";
            } else {
                r = r.toUpperCase();
            }
            vt.access = r;
            (function (t, e) {
                var n = t.brand || "";
                vt.deviceType = "Phone";
                vt.sdkVersion = pt;
                vt.appkey = o().appKey();
                vt.sdkType = l.getSdkType();
                vt.umid = m().getId();
                if (t) {
                    vt.language = t.language || "";
                    vt.os = t.OS;
                    vt.osVersion = t.OSVersion;
                    vt.deviceName = t.deviceName;
                    vt.platformVersion = t.platformVersion;
                    vt.platformSdkVersion = t.platformSDKVersion;
                    vt.deviceBrand = n;
                    var r = t.resolution.split("*");
                    if (gt.isArray(r)) {
                        vt.resolutionHeight = Number(r[0]);
                        vt.resolutionWidth = Number(r[1]);
                    }
                }
                !(function (t) {
                    if (t) {
                        vt.installTime = t.install_datetime && Date.parse(t.install_datetime);
                        vt.scene = t.install_scene;
                        vt.channel = t.install_channel;
                        vt.campaign = t.install_campaign;
                    }
                })(et.getImpObj());
                if (e) {
                    e(vt);
                }
            })(e, t);
        });
    });
}
var _t = Object.create(null);
var bt = null;
var St = !1;
var kt = {
    minFetchIntervalSeconds: 43200
};

function Ct(t) {
    if (t) {
        gt.each(t, function (t) {
            _t[t.k] = t;
        });
    }
}

function Mt() {
    var t = this;
    this.STORAGE_NAME = null;
    a.once(a.messageType.CONFIG_LOADED, function (e) {
        r().v("云配初始化开始...");
        t.init(e);
    });
}
Mt.prototype = {
    setDefaultValues: function (t) {
        if (St && gt.isObject(t)) {
            gt.each(t, function (t, e) {
                if (_t[e] && _t[e].v) {
                    //
                } else {
                    _t[e] = {
                        v: t
                    };
                }
            });
        }
    },
    getValue: function (t) {
        r().v("从配置项中读取 value, 当前配置为: ", _t);
        r().v("待读取的 key : ", t);
        try {
            if (!St) {
                return;
            }
            var e = _t[t] || {};
            r().v("读取相应配置ing..., 结果为: ", e);
            if (gt.isNumber(e.e) && gt.isNumber(e.g)) {
                r().v("读取到相应配置, 开始数据上报...");
                (function (t) {
                    var e = {
                        appkey: o().appKey(),
                        sdkType: l.getSdkType(),
                        expId: t && t.e,
                        groupId: t && t.g,
                        clientTs: Date.now(),
                        key: t && t.k,
                        value: t && t.v,
                        umid: m().getId()
                    };
                    try {
                        l.request({
                            url: "https://pslog.umeng.com/mini_ablog",
                            method: "POST",
                            data: [e],
                            success: function (t) {
                                if (t && 200 === t.statusCode) {
                                    r().v("上传数据成功", e);
                                } else {
                                    r().w("ablog 请求成功, 返回结果异常 ", t);
                                }
                            },
                            fail: function (t) {
                                r().w("ablog 请求数据错误 ", e, t);
                            }
                        });
                    } catch (t) {
                        r().w("urequest 调用错误", t);
                    }
                })(e);
            }
            return e.v;
        } catch (o) {
            r().w("getValue error, key: ", t);
        }
    },
    active: function (t) {
        try {
            if (!St) {
                return;
            }
            var e;
            var n;
            if (t && t.params) {
                e = t.params;
            }
            if (t && t.callback) {
                n = t.callback;
            }
            r().v("激活配置项: ", e);
            if (e) {
                r().v("本地已缓存的配置项: ", _t);
                Ct(e);
                r().v("合并后的配置项: ", _t);
                n && n(_t);
                r().v("active 结束");
            } else {
                r().v("配置项为空!! 读取本地配置...");
                l.getStorage(this.STORAGE_NAME, function (t) {
                    if (t) {
                        Ct((t = gt.JSONDecode(t) || {}).params);
                        r().v("当前本地配置项为: ", _t);
                        n && n(_t);
                        r().v("active 结束");
                    } else {
                        r().v("当前本地配置项为空, 退出激活");
                    }
                });
            }
        } catch (t) {
            r().w("SDK active 错误", t);
        }
    },
    init: function (t) {
        if (t.appKey) {
            bt = t.appKey;
            this.STORAGE_NAME = "um_remote_config_{{" + bt + "}}";
        }
        if (bt) {
            if (St) {
                r().w("SDK 已经初始化, 请避免重复初始化");
            } else {
                (St = !0), this.setOptions(t), this.active();
            }
        } else {
            r().err("请检查您的小程序 appKey, appKey 不能为空");
        }
    },
    setOptions: function (t) {
        if (gt.isObject(t)) {
            var e = t.minFetchIntervalSeconds;
            if (gt.isNumber(e)) {
                kt.minFetchIntervalSeconds = Math.max(e, 5);
            }
        }
    },
    fetch: function (t) {
        if (St && this.STORAGE_NAME) {
            var e;
            var n;
            if (t && t.active) {
                e = t.active;
            }
            if (t && t.callback) {
                n = t.callback;
            }
            var o = this;
            l.getStorage(this.STORAGE_NAME, function (t) {
                r().v("开始读缓存 data is ", t);
                if (
                    (t = gt.JSONDecode(t) || {}).params &&
                    t.ts &&
                    Date.now() - t.ts < 1e3 * kt.minFetchIntervalSeconds
                ) {
                    r().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch");
                    n && n(t.params);
                } else {
                    wt(function (t) {
                        r().v("缓存数据不存在, 构建 fetch body :", t);
                        try {
                            l.request({
                                url: "https://ucc.umeng.com/v1/mini/fetch",
                                method: "POST",
                                data: t,
                                success: function (t) {
                                    if (t && 200 === t.statusCode && t.data && t.data.cc) {
                                        r().v("fetch 请求成功, 响应数据: ", t.data);
                                        var i = Object.create(null);
                                        gt.each(t.data.cc, function (t) {
                                            i[t.k] = t;
                                        });
                                        var a = {
                                            ts: Date.now(),
                                            params: i
                                        };
                                        r().v("开始缓存 fetch 请求的云配置结果...");
                                        l.setStorage(o.STORAGE_NAME, gt.JSONEncode(a), function (t) {
                                            r().v("缓存云配置成功, 缓存数据为: ", a);
                                            r().v("缓存云配置成功, 成功消息为: ", t);
                                            r().v("云配拉取数据是否自动激活: ", e);
                                            if (t && e) {
                                                r().v("激活云配置...");
                                                o.active({
                                                    params: i,
                                                    callback: n
                                                });
                                            }
                                        });
                                    } else {
                                        r().w("fetch 请求成功,返回结果异常 ", t.data);
                                        n && n();
                                    }
                                },
                                fail: function (e) {
                                    r().w("fetch请求数据错误 ", t, e);
                                    if (n) {
                                        n();
                                    }
                                }
                            });
                        } catch (t) {
                            r().w("urequest调用错误", t);
                        }
                    });
                }
            });
        }
    }
};
var Pt = {
    install: function (t) {
        if (t.rc) {
            //
        } else {
            t.rc = new Mt();
        }
        t.messager.once(t.messager.messageType.CONFIG_LOADED, function () {
            t._log.v("plugin rc installed");
        });
        return t.rc;
    }
};
var Tt = "_um";
var At = "revenue";
var It = "stage";
var Dt = "level";
var Ut = "running";
var Bt = "end";
var Et = "init";
var Ot = "set";
var Rt = [Tt, It, "start"].join(".");

function Lt(t) {
    var e = {};
    for (var n in t) {
        var r = t[n];
        if ("object" == typeof r) {
            for (var o in r) e[n + "." + o] = r[o];
        } else {
            e[n] = r;
        }
    }
    return e;
}
var Nt = {
    install: function (t) {
        t.revenue = function (e) {
            t.trackEvent([Tt, At, e.group].join("."), Lt(e));
        };
        var e = 0;
        t.stage = {
            onStart: function (n) {
                e = Date.now();
                t.trackEvent(Rt, Lt(n));
            },
            onEnd: function (n) {
                if ("number" != typeof n._um_sdu) {
                    if (0 !== e) {
                        n._um_sdu = Date.now() - e;
                    } else {
                        n._um_sdu = 0;
                    }
                }
                t.trackEvent([Tt, It, Bt, n.event].join("."), Lt(n));
            },
            onRunning: function (e) {
                t.trackEvent([Tt, It, Ut, e.event].join("."), Lt(e));
            }
        };
        t.level = {
            onInitLevel: function (e) {
                t.trackEvent([Tt, Dt, Et].join("."), Lt(e));
            },
            onSetLevel: function (e) {
                t.trackEvent([Tt, Dt, Ot].join("."), Lt(e));
            }
        };
        t.messager.once(t.messager.messageType.CONFIG_LOADED, function () {
            t._log.v("plugin game-ext installed");
        });
        return t;
    }
};
if (window.tt) {
    tt.onShow(function (t) {
        var e;
        r().v("game onShow: ", t);
        e = t.query;
        y = e;
        ht.resume(t, !0);
    });
}
if (window.tt) {
    tt.onHide(function () {
        r().v("game onHide");
        ht.pause();
    });
}
var xt = ht.init;
ht.init = function (t) {
    if (t && t.useOpenid) {
        r().tip_w(r().repeat("!"));
        r().tip_w(
            "您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"
        );
        r().tip_w(r().repeat("!"));
    }
    xt.call(ht, t);
};
ht.use(Pt);
ht.use(Nt);
if (window.tt) {
    tt.uma = ht;
}
module.exports = ht;
