
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/umaTT.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbddf+O0clMOKM7wwtIR2r8', 'umaTT');
// scripts/umaTT.js

"use strict";

var n = "[UMENG] -- ";

var r = function () {
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
        console.log("%c [UMENG] -- " + t, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
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
      for (var e = t; e.length < 86;) {
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
}();

var o = function () {
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
    if (t) {//
    } else {
      t = new e();
    }

    return t;
  };
}();

function i() {}

i.prototype = {
  on: function on(t, e, n) {
    var r = this.e || (this.e = {});
    (r[t] || (r[t] = [])).push({
      fn: e,
      ctx: n
    });
    return this;
  },
  once: function once(t, e, n) {
    var r = this;

    function o() {
      r.off(t, o);
      e.apply(n, arguments);
    }

    o._ = e;
    return this.on(t, o, n);
  },
  emit: function emit(t) {
    var e = [].slice.call(arguments, 1);
    var n = ((this.e || (this.e = {}))[t] || []).slice();
    var r = 0;

    for (var o = n.length; r < o; r++) {
      n[r].fn.apply(n[r].ctx, e);
    }

    return this;
  },
  off: function off(t, e) {
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

var _s = function s(t, e) {
  return (_s = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var n in e) {
      if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    }
  })(t, e);
};

function c(t, e) {
  function n() {
    this.constructor = t;
  }

  _s(t, e);

  if (null === e) {
    t.prototype = Object.create(e);
  } else {
    t.prototype = (n.prototype = e.prototype, new n());
  }
}

var l = new (function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  c(e, t);

  e.prototype.getSdkType = function () {
    return "ttgamemp";
  };

  return e;
}(function () {
  function t() {}

  t.prototype.setStorage = function (t, e, n) {
    tt.setStorage({
      key: t,
      data: e,
      success: function success() {
        if ("function" == typeof n) {
          n(!0);
        }
      },
      fail: function fail(e) {
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
      success: function success(t) {
        if ("function" == typeof e) {
          e(t.data);
        }
      },
      fail: function fail(n) {
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
      success: function success() {
        if ("function" == typeof e) {
          e(!0);
        }
      },
      fail: function fail() {
        if ("function" == typeof e) {
          e(!1);
        }
      }
    });
  };

  t.prototype.getSystemInfo = function (t) {
    tt.getSystemInfo({
      success: function success(e) {
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
      fail: function fail() {
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
      success: function success(e) {
        if ("function" == typeof t) {
          t(e && "none" !== e.networkType);
        }
      },
      fail: function fail() {
        if ("function" == typeof t) {
          t();
        }
      }
    });
  };

  t.prototype.getNetworkInfo = function (t) {
    tt.getNetworkType({
      success: function success(e) {
        if ("function" == typeof t) {
          t(e);
        }
      },
      fail: function fail() {
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
      if (r) {//
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
      if (r) {//
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
      fail: function fail() {
        if (t) {
          t();
        }
      },
      success: function success(e) {
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
        success: function success(t) {
          if (t.authSetting["scope.userInfo"]) {
            tt.getUserInfo(e);
          }
        },
        fail: function fail() {
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
}()))();
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
  isNumber: function isNumber(t) {
    return !Number.isNaN(parseInt(t, 10));
  },
  compareVersion: function compareVersion(t, e) {
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
  getRandomStr: function getRandomStr(t) {
    var e = "";
    var n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for (var r = 0; r < Number(t); r++) {
      e += n[Math.round(Math.random() * (n.length - 1))];
    }

    return e;
  },
  clone: function clone(t) {
    return JSON.parse(JSON.stringify(t));
  },
  startsWith: function startsWith(t, e) {
    return !(!t || !e || 0 === e.length || e.length > t.length) && t.substr(0, e.length) === e;
  },
  endsWith: function endsWith(t, e) {
    return !(!e || 0 === t.length || e.length > t.length) && t.substring(t.length - e.length) === e;
  },
  assign: function assign(t) {
    if (null == t) {
      throw new TypeError("Cannot convert undefined or null to object");
    }

    var e = Object(t);

    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];

      if (r) {
        for (var o in r) {
          if (Object.prototype.hasOwnProperty.call(r, o)) {
            e[o] = r[o];
          }
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
  trimStart: function trimStart(t, e) {
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
  trimEnd: function trimEnd(t, e) {
    if (!t) {
      return "";
    }

    var n;
    var r;

    if ("string" == typeof e && e.length) {
      n = new RegExp(e);

      for (r = t.length; n.test(t.charAt(r));) {
        r -= 1;
      }

      return t.slice(0, r + 1);
    }

    n = /s/;

    for (r = t.length - 1; n.test(t.charAt(r));) {
      r -= 1;
    }

    return t.slice(0, r + 1);
  },
  isFunction: function isFunction(t) {
    return "function" == typeof t;
  }
};

var d = function () {
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
}();

!function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
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
}(d);
var h;

var p = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
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
      success: function success(o) {
        if (o) {
          l.request({
            url: u.ENDPOINT + u.GET_OPENID_URL,
            method: "GET",
            data: {
              key: t,
              code: o.code || "",
              anonymous_code: o.anonymousCode || ""
            },
            success: function success(t) {
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
            fail: function fail(t) {
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
      fail: function fail(t) {
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
}(d);

var m = (h = null, function () {
  if (h) {//
  } else {
    h = new p();
  }

  return h;
});

var g = function () {
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
    if (t) {//
    } else {
      t = new e();
    }

    return t;
  };
}();

var y = {};

var v = function () {
  var t = null;
  var e = [];
  var n = "";

  function o() {
    return {
      add: function add(t, o) {
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
            var h = function (t) {
              var e = [];

              for (var n in t) {
                if ("_um_ssrc" !== n && "_um_sts" !== n) {
                  e.push(n + "=" + t[n]);
                }
              }

              return e.join("&");
            }(y);

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
      setShareSource: function setShareSource(t) {
        n = t;
      },
      clear: function clear() {
        e.length = 0;
      },
      get: function get() {
        return e;
      }
    };
  }

  return function () {
    if (t) {//
    } else {
      t = new o();
    }

    return t;
  };
}();

var w = function w(t) {
  if (t) {
    try {
      return JSON.stringify(t);
    } catch (t) {}
  }

  return "";
};

var _ = function _(t) {
  if (t) {
    try {
      return JSON.parse(t);
    } catch (t) {}
  }

  return null;
};

var b = function () {
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
    if (t) {//
    } else {
      t = new i();
    }

    return t;
  };
}();

var S = function () {
  var t;
  var e;
  var n = [];
  var o = [];

  function i() {
    if (n.length) {
      var t = b().get("ekvs");

      if (function (t) {
        var e = 0;

        for (var n in t) {
          if (Array.isArray(t[n])) {
            e += t[n].length;
          }
        }

        return e;
      }(t) + n.length <= 1e4) {
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
    if (t) {//
    } else {
      t = {
        addEvent: function addEvent(t) {
          if (e) {
            n.unshift(t);
            n.length > 1 && (i(), n.length = 0);
          } else {
            r().w("session id is null: ", e);
            o.unshift(t);
          }
        },
        setSessionId: function setSessionId(t) {
          e = t;
          r().v("setSessionId: ", e);

          if (Array.isArray(o) && o.length && e) {
            for (var n = 0; n < o.length; n++) {
              this.addEvent(o[n]);
            }

            o.length = 0;
          }
        },
        getEkvs: function getEkvs() {
          var t = b().get("ekvs");

          if (n && n.length) {
            t = a(t, n);
          }

          return t;
        },
        clear: function clear() {
          b().remove("ekvs");
          n.length = 0;
        }
      };
    }

    return t;
  };
}();

var k = "2g";
var C = "3g";
var M = "4g";
var P = "half_session";
var T = "close_session";
var A = "ekv";
var I = ["access", "access_subtype"];

var D = function () {
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
          var o = function (t, e) {
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

            switch (r = r ? r.toLowerCase() : "") {
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
          }(n, r);

          f.assign(e, o);

          if (t) {
            t();
          }
        });
      });
    }

    return {
      init: function init() {
        n(function () {
          t = !0;
        });
      },
      isLoaded: function isLoaded() {
        return t;
      },
      get: function get() {
        return e;
      },
      getRealtimeFields: function getRealtimeFields() {
        var t = {};
        I.forEach(function (n) {
          t[n] = e[n];
        });
        return t;
      },
      setIdTracking: function setIdTracking(t) {
        this.setItem("id_tracking", t);
      },
      setIdType: function setIdType(t) {
        this.setItem("id_type", t);
      },
      setAppVersion: function setAppVersion(t) {
        this.setItem("app_version", t);
      },
      setSuperProperty: function setSuperProperty(t) {
        if (e.sp) {//
        } else {
          e.sp = {};
        }

        e.sp.isv = t;
      },
      getSuperProperty: function getSuperProperty() {
        if (e && e.sp) {
          return e.sp.isv;
        } else {
          return "";
        }
      },
      setItem: function setItem(t, n) {
        e[t] = n;
      },
      getItem: function getItem(t) {
        return e[t];
      }
    };
  }

  return {
    instance: function instance() {
      if (t) {//
      } else {
        t = e();
      }

      return t;
    }
  };
}();

var U = function () {
  var t = null;
  var e = null;
  var n = null;
  return function () {
    if (t) {//
    } else {
      t = {
        resume: function resume(t) {
          var o = !1;

          if (n) {//
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
                var o = f.assign({}, function (t) {
                  var e = {};

                  for (var n in t) {
                    if (0 === n.indexOf("_um_")) {
                      e[n] = t[n];
                    }
                  }

                  r().v("query: ", t);
                  r().v("_um_params: ", e);
                  return e;
                }(t.query));
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
        pause: function pause() {
          !function () {
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
          }();
        },
        getCurrentSessionId: function getCurrentSessionId() {
          return (n || {}).id;
        },
        getCurrentSession: function getCurrentSession() {
          return n;
        },
        cloneCurrentSession: function cloneCurrentSession() {
          return f.clone(n);
        }
      };
    }

    return t;
  };
}();

function B(t) {
  var e = null;

  switch (t) {
    case P:
      e = function () {
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
      }();

      break;

    case T:
      e = function () {
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
      }();

      break;

    case A:
      e = function () {
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
      }();

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

  for (var r in t) {
    e[r] ? n[e[r]] = t[r] : n[r] = t[r];
  }

  return n;
}

function x(t, e) {
  var n = {};

  if (t) {
    for (var r in t) {
      if (t[r]) {
        n[e[r]] = t[r];
      }
    }
  }

  return n;
}

var F = "";

function j() {
  return F;
}

var V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var H = function (t) {
  var e = {};
  var n = 0;

  for (var r = t.length; n < r; n++) {
    e[t.charAt(n)] = n;
  }

  return e;
}(V);

var q = String.fromCharCode;

var z = function z(t) {
  if (t.length < 2) {
    if ((e = t.charCodeAt(0)) < 128) {
      return t;
    } else {
      if (e < 2048) {
        return q(192 | e >>> 6) + q(128 | 63 & e);
      } else {
        return q(224 | e >>> 12 & 15) + q(128 | e >>> 6 & 63) + q(128 | 63 & e);
      }
    }
  }

  var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
  return q(240 | e >>> 18 & 7) + q(128 | e >>> 12 & 63) + q(128 | e >>> 6 & 63) + q(128 | 63 & e);
};

var G = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;

var K = function K(t) {
  var e = [0, 2, 1][t.length % 3];
  var n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
  return [V.charAt(n >>> 18), V.charAt(n >>> 12 & 63), e >= 2 ? "=" : V.charAt(n >>> 6 & 63), e >= 1 ? "=" : V.charAt(63 & n)].join("");
};

var W = function W(t) {
  return function (t) {
    return t.replace(G, z);
  }(t).replace(/[\s\S]{1,3}/g, K);
};

var X = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g");

var Y = function Y(t) {
  switch (t.length) {
    case 4:
      var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
      return q(55296 + (e >>> 10)) + q(56320 + (1023 & e));

    case 3:
      return q((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

    default:
      return q((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
  }
};

var J = function J(t) {
  var e = t.length;
  var n = e % 4;
  var r = (e > 0 ? H[t.charAt(0)] << 18 : 0) | (e > 1 ? H[t.charAt(1)] << 12 : 0) | (e > 2 ? H[t.charAt(2)] << 6 : 0) | (e > 3 ? H[t.charAt(3)] : 0);
  var o = [q(r >>> 16), q(r >>> 8 & 255), q(255 & r)];
  o.length -= [0, 0, 2, 1][n];
  return o.join("");
};

var Z = function Z(t) {
  return function (t) {
    return t.replace(/[\s\S]{1,4}/g, J);
  }(t).replace(X, Y);
};

var Q = function Q(t, e) {
  if (e) {
    return W(String(t)).replace(/[+\/]/g, function (t) {
      if ("+" == t) {
        return "-";
      } else {
        return "_";
      }
    }).replace(/=/g, "");
  } else {
    return W(String(t));
  }
};

var $ = function $(t) {
  return Z(String(t).replace(/[-_]/g, function (t) {
    if ("-" == t) {
      return "+";
    } else {
      return "/";
    }
  }).replace(/[^A-Za-z0-9\+\/]/g, ""));
};

var et = new function () {
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
    return n && n[t] || "";
  };

  this.load = function () {
    t = b().get(u.IMPRINT);
  };

  this.save = function () {
    if (t) {
      b().set(u.IMPRINT, t);
    }
  };
}();

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

  var c = function (t) {
    return {
      h: L(t.header, O),
      a: x(t.analytics, E)
    };
  }(t);

  var d = w(c);
  var h = {
    url: u.ENDPOINT + u.LOG_URL,
    method: "POST",
    data: Q(d),
    success: function success(o) {
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
    fail: function fail() {
      r().w("超时: ", d);

      if ("function" == typeof n) {
        n();
      }
    },
    complete: function complete() {
      if ("function" == typeof o) {
        o();
      }
    }
  };
  l.request(f.assign(h, {
    header: {
      "Content-Type": s = l.getSdkType() + "/json",
      "Msg-Type": s
    }
  }));
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

var ot = function () {
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
      nt(e, function () {
        o.dequeue();
        a(t);
      }, function () {
        var e = o.dequeue();

        if (e && !e.noCache) {
          n.push(e);
        }

        a(t);
      });
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
        e = !0, a(function () {
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
    if (t) {//
    } else {
      t = new c();
    }

    return t;
  };
}();

var it = function () {
  var t = null;
  var e = null;

  function n() {
    function t(t) {
      if (t && "object" == typeof t) {
        var e = b().get(u.USER_INFO);

        if (e && f.deepEqual(t, e)) {//
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
                success: function success(n) {
                  r().v("用户信息上传成功: ", t);

                  if (e) {
                    e(n && n.data && 200 === n.data.code);
                  }
                },
                fail: function fail() {
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
      if (t(e)) {//
      } else {
        l.getUserInfo(function (e) {
          t(e);
        });
      }
    };
  }

  return function () {
    if (t) {//
    } else {
      t = new n();
    }

    return t;
  };
}();

function at(t, e) {
  this.id = t;
  this.ts = Date.now();
  var n = typeof e;

  if ("string" === n && e) {
    this[t] = e;
  } else if ("object" === n) {
    for (var r in e) {
      if ({}.hasOwnProperty.call(e, r)) {
        this[r] = e[r];
      }
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
      if (m().getId() || t <= 0) {//
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
    if (t && (r().v("event: ", e, o), function (t, e) {
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
        r().e("please check trackEvent properties. properties should be string or object(not include Array)");
        return !1;
      }

      if ("object" == typeof e) {
        var i = 0;

        for (var a in e) {
          if ({}.hasOwnProperty.call(e, a)) {
            if (a.length > u.MAX_PROPERTY_KEY_LENGTH) {
              r().e("The maximum length of property key shall not exceed " + u.MAX_PROPERTY_KEY_LENGTH);
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
      }

      return !0;
    }(e, o))) {
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
        ot().send(A, {
          noCache: a
        }, function () {});
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
  createMethod: function createMethod(t, e, n) {
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
  installApi: function installApi(t, e) {
    try {
      var n;
      var o;
      var i = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setAnonymousid,onShareAppMessage,shareAppMessage".split(",");
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

  if (0 === t || 1 === t && e) {
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
    success: function success(e) {
      if (200 === (e.code || e.status || e.statusCode) && e.data && 200 === e.data.code) {
        ft(t + 1, !0);
      } else {
        ft(t + 1, !1);
      }
    },
    fail: function fail() {
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
  preinit: function preinit(t) {
    if (t && "object" == typeof t) {
      for (var e in t) {
        u[e] = t[e];
      }
    }

    return u;
  },
  use: function use(t, e) {
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
  init: function init(t) {
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

gt.isArray = yt || function (t) {
  return "[object Array]" === toString.call(t);
};

gt.isObject = function (t) {
  return t === Object(t) && !gt.isArray(t);
};

gt.isEmptyObject = function (t) {
  if (gt.isObject(t)) {
    for (var e in t) {
      if (hasOwnProperty.call(t, e)) {
        return !1;
      }
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
      for (var s in t) {
        if (hasOwnProperty.call(t, s) && e.call(n, t[s], s, t) === r) {
          return;
        }
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

        !function (t) {
          if (t) {
            vt.installTime = t.install_datetime && Date.parse(t.install_datetime);
            vt.scene = t.install_scene;
            vt.channel = t.install_channel;
            vt.campaign = t.install_campaign;
          }
        }(et.getImpObj());

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
  setDefaultValues: function setDefaultValues(t) {
    if (St && gt.isObject(t)) {
      gt.each(t, function (t, e) {
        if (_t[e] && _t[e].v) {//
        } else {
          _t[e] = {
            v: t
          };
        }
      });
    }
  },
  getValue: function getValue(t) {
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
              success: function success(t) {
                if (t && 200 === t.statusCode) {
                  r().v("上传数据成功", e);
                } else {
                  r().w("ablog 请求成功, 返回结果异常 ", t);
                }
              },
              fail: function fail(t) {
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
  active: function active(t) {
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
  init: function init(t) {
    if (t.appKey) {
      bt = t.appKey;
      this.STORAGE_NAME = "um_remote_config_{{" + bt + "}}";
    }

    if (bt) {
      if (St) {
        r().w("SDK 已经初始化, 请避免重复初始化");
      } else {
        St = !0, this.setOptions(t), this.active();
      }
    } else {
      r().err("请检查您的小程序 appKey, appKey 不能为空");
    }
  },
  setOptions: function setOptions(t) {
    if (gt.isObject(t)) {
      var e = t.minFetchIntervalSeconds;

      if (gt.isNumber(e)) {
        kt.minFetchIntervalSeconds = Math.max(e, 5);
      }
    }
  },
  fetch: function fetch(t) {
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

        if ((t = gt.JSONDecode(t) || {}).params && t.ts && Date.now() - t.ts < 1e3 * kt.minFetchIntervalSeconds) {
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
                success: function success(t) {
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
                fail: function fail(e) {
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
  install: function install(t) {
    if (t.rc) {//
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
      for (var o in r) {
        e[n + "." + o] = r[o];
      }
    } else {
      e[n] = r;
    }
  }

  return e;
}

var Nt = {
  install: function install(t) {
    t.revenue = function (e) {
      t.trackEvent([Tt, At, e.group].join("."), Lt(e));
    };

    var e = 0;
    t.stage = {
      onStart: function onStart(n) {
        e = Date.now();
        t.trackEvent(Rt, Lt(n));
      },
      onEnd: function onEnd(n) {
        if ("number" != typeof n._um_sdu) {
          if (0 !== e) {
            n._um_sdu = Date.now() - e;
          } else {
            n._um_sdu = 0;
          }
        }

        t.trackEvent([Tt, It, Bt, n.event].join("."), Lt(n));
      },
      onRunning: function onRunning(e) {
        t.trackEvent([Tt, It, Ut, e.event].join("."), Lt(e));
      }
    };
    t.level = {
      onInitLevel: function onInitLevel(e) {
        t.trackEvent([Tt, Dt, Et].join("."), Lt(e));
      },
      onSetLevel: function onSetLevel(e) {
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
    r().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取");
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

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VtYVRULmpzIl0sIm5hbWVzIjpbIm4iLCJyIiwidCIsImUiLCJzZXREZWJ1ZyIsImQiLCJhcmd1bWVudHMiLCJjb25zb2xlIiwiZGVidWciLCJhcHBseSIsImkiLCJpbmZvIiwiZXJyb3IiLCJ3Iiwid2FybiIsInYiLCJsb2ciLCJ0YWJsZSIsInRpcCIsInRpcF93IiwiZXJyIiwicmVwZWF0IiwibGVuZ3RoIiwibyIsInVzZU9wZW5pZCIsInVzZVN3YW5pZCIsImF1dG9HZXRPcGVuaWQiLCJhcHBLZXkiLCJ1cGxvYWRVc2VySW5mbyIsImVuYWJsZVZlcmlmeSIsInNldCIsImdldCIsInNldEl0ZW0iLCJnZXRJdGVtIiwicHJvdG90eXBlIiwib24iLCJwdXNoIiwiZm4iLCJjdHgiLCJvbmNlIiwib2ZmIiwiXyIsImVtaXQiLCJzbGljZSIsImNhbGwiLCJhIiwibWVzc2FnZVR5cGUiLCJDT05GSUdfTE9BREVEIiwiVU1BX0xJQl9JTklURUQiLCJzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsImhhc093blByb3BlcnR5IiwiYyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwibCIsImdldFNka1R5cGUiLCJzZXRTdG9yYWdlIiwidHQiLCJrZXkiLCJkYXRhIiwic3VjY2VzcyIsImZhaWwiLCJlcnJNc2ciLCJnZXRTdG9yYWdlIiwicmVtb3ZlU3RvcmFnZSIsImdldFN5c3RlbUluZm8iLCJzYWZlQXJlYSIsIm1vZGVsIiwiYnJhbmQiLCJwaXhlbFJhdGlvIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJmb250U2l6ZVNldHRpbmciLCJwbGF0Zm9ybSIsInBsYXRmb3JtVmVyc2lvbiIsInZlcnNpb24iLCJwbGF0Zm9ybVNES1ZlcnNpb24iLCJTREtWZXJzaW9uIiwibGFuZ3VhZ2UiLCJkZXZpY2VOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJzdGF0dXNCYXJIZWlnaHQiLCJob3N0IiwiYXBwTmFtZSIsInN5c3RlbSIsInNwbGl0IiwiaXNBcnJheSIsIk9TIiwiT1NWZXJzaW9uIiwiTWF0aCIsInJvdW5kIiwicmVzb2x1dGlvbiIsImdldERldmljZUluZm8iLCJjaGVja05ldHdvcmtBdmFpbGFibGUiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwiZ2V0TmV0d29ya0luZm8iLCJvbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJyZXF1ZXN0IiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsInRpbWVvdXQiLCJnZXREZXZpY2VJZCIsImdldEFkdmVydGlzaW5nSWQiLCJnZXRQbGF0Zm9ybSIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJhdmF0YXIiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImdlbmRlciIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJnZXRBcHBJbmZvU3luYyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwic2hhcmVBcHBNZXNzYWdlIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJ1IiwiU0VTU0lPTl9JTlRFUlZBTCIsIkxPR19VUkwiLCJHRVRfT1BFTklEX1VSTCIsIlVTRVJJTkZPX1VSTCIsIkVORFBPSU5UIiwiRU5EUE9JTlRCIiwiREVWSUNFX0lORk9fS0VZIiwiQURWRVJUSVNJTkdfSUQiLCJBTkRST0lEX0lEIiwiQ1VSUkVOVF9TRVNTSU9OIiwiU0VTU0lPTl9QQVVTRV9USU1FIiwiRVZFTlRfU0VORF9ERUZBVUxUX0lOVEVSVkFMIiwiRVZFTlRfTEFTVF9TRU5EX1RJTUUiLCJNQVhfRVZFTlRJRF9MRU5HVEgiLCJNQVhfUFJPUEVSVFlfS0VZX0xFTkdUSCIsIk1BWF9QUk9QRVJUWV9LRVlTX0NPVU5UIiwiUkVQT1JUX1BPTElDWSIsIlJFUE9SVF9JTlRFUlZBTF9USU1FIiwiUkVQT1JUX1BPTElDWV9TVEFSVF9TRU5EIiwiUkVQT1JUX1BPTElDWV9JTlRFUlZBTCIsIklNUFJJTlQiLCJTRUVEX1ZFUlNJT04iLCJJTVBMX1ZFUlNJT04iLCJBTElQQVlfQVZBSUxBQkxFX1ZFUlNJT04iLCJTSEFSRV9QQVRIIiwiU0hBUkVTIiwiUkVRVUVTVFMiLCJVVUlEIiwiVVVJRF9TVUZGSVgiLCJPUEVOSUQiLCJVTklPTklEIiwiQUxJUEFZSUQiLCJVU0VSSUQiLCJQUk9WSURFUiIsIlNXQU5JRCIsIkFOT05ZTU9VU0lEIiwiTEFVTkNIX09QVElPTlMiLCJVTV9TU1JDIiwiVVNFUl9JTkZPIiwiSVNfQUxJWVVOIiwiZiIsImlzTnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUludCIsImNvbXBhcmVWZXJzaW9uIiwiU3RyaW5nIiwibWF4IiwiZ2V0UmFuZG9tU3RyIiwicmFuZG9tIiwiY2xvbmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGFydHNXaXRoIiwic3Vic3RyIiwiZW5kc1dpdGgiLCJzdWJzdHJpbmciLCJhc3NpZ24iLCJUeXBlRXJyb3IiLCJkZWVwRXF1YWwiLCJrZXlzIiwidHJpbVN0YXJ0IiwiUmVnRXhwIiwicmVwbGFjZSIsInRyaW1FbmQiLCJ0ZXN0IiwiY2hhckF0IiwiaXNGdW5jdGlvbiIsIl91dWlkIiwiX3VzZXJpZCIsIl9wcm92aWRlciIsIl9pZFR5cGUiLCJjcmVhdGVVVUlEIiwiRGF0ZSIsIm5vdyIsImluaXRVVUlEIiwiaW5pdFVzZXJpZCIsImluaXQiLCJpbml0SUQiLCJzZXRVc2VyaWQiLCJnZXRVc2VySWQiLCJnZXRQcm92aWRlciIsImdldElkVHlwZSIsImdldElkVHJhY2tpbmciLCJ1dWlkIiwidXNlcmlkIiwiX29wZW5pZCIsIl91bmlvbmlkIiwiX3VzZU9wZW5pZCIsInNldFVzZU9wZW5pZCIsInNldE9wZW5pZCIsInNldFVuaW9uaWQiLCJvcGVuaWQiLCJ1bmlvbmlkIiwiZ2V0SWQiLCJoIiwicCIsIl9hbm9ueW1vdXNpZCIsImdldE9wZW5JZEFzeW5jIiwibG9naW4iLCJmb3JjZSIsInVybCIsIm1ldGhvZCIsImNvZGUiLCJhbm9ueW1vdXNfY29kZSIsImFub255bW91c0NvZGUiLCJzdGF0dXNDb2RlIiwib2lkIiwic2V0QW5vbnltb3VzaWQiLCJuaWQiLCJhbm9ueW1vdXNpZCIsIm0iLCJnIiwiYWRkUGFnZVN0YXJ0IiwidHMiLCJwYXRoIiwicGFnZV9uYW1lIiwiYWRkUGFnZUVuZCIsImR1cmF0aW9uIiwiYWJzIiwiZ2V0Q3VycmVudFBhZ2UiLCJjbGVhciIsInkiLCJhZGQiLCJ0aXRsZSIsIl91bV9zdHMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiam9pbiIsInF1ZXJ5IiwiX3VtX3NzcmMiLCJzZXRTaGFyZVNvdXJjZSIsImIiLCJsb2FkIiwic2F2ZSIsInJlbW92ZSIsImdldEFsbCIsImhhcyIsImlzTG9hZGVkIiwiUyIsImNvbmNhdCIsImFkZEV2ZW50IiwidW5zaGlmdCIsInNldFNlc3Npb25JZCIsImdldEVrdnMiLCJrIiwiQyIsIk0iLCJQIiwiVCIsIkEiLCJJIiwiRCIsImltcHJpbnQiLCJkZXZpY2VfdHlwZSIsInNka192ZXJzaW9uIiwiYXBwa2V5IiwiZGV2aWNlX2luZm8iLCJhcHBpZCIsImFwcElkIiwiYXBwX2VudiIsImFwcEVudiIsImFwcF92ZXJzaW9uIiwiYXBwVmVyc2lvbiIsInRvTG93ZXJDYXNlIiwic2RrX3R5cGUiLCJwbGF0Zm9ybV9zZGtfdmVyc2lvbiIsInBsYXRmb3JtX3ZlcnNpb24iLCJwaXhlbF9yYXRpbyIsIm9zIiwiZm9udF9zaXplX3NldHRpbmciLCJkZXZpY2VfbW9kZWwiLCJkZXZpY2VfYnJhbmQiLCJkZXZpY2VfbWFudWZhY3R1cmVyIiwiZGV2aWNlX21hbnVpZCIsImRldmljZV9uYW1lIiwib3NfdmVyc2lvbiIsInRoZW1lIiwiYmVuY2htYXJrX2xldmVsIiwiYmVuY2htYXJrTGV2ZWwiLCJzdGF0dXNfYmFyX2hlaWdodCIsInNhZmVfYXJlYV90b3AiLCJzYWZlX2FyZWFfbGVmdCIsInNhZmVfYXJlYV9yaWdodCIsInNhZmVfYXJlYV9ib3R0b20iLCJzYWZlX2FyZWFfaGVpZ2h0Iiwic2FmZV9hcmVhX3dpZHRoIiwic3RvcmFnZSIsInNjcmVlbl93aWR0aCIsInNjcmVlbl9oZWlnaHQiLCJhY2Nlc3Nfc3VidHlwZSIsImFjY2VzcyIsImdldFJlYWx0aW1lRmllbGRzIiwiZm9yRWFjaCIsInNldElkVHJhY2tpbmciLCJzZXRJZFR5cGUiLCJzZXRBcHBWZXJzaW9uIiwic2V0U3VwZXJQcm9wZXJ0eSIsInNwIiwiaXN2IiwiZ2V0U3VwZXJQcm9wZXJ0eSIsImluc3RhbmNlIiwiVSIsInJlc3VtZSIsImdldFRpbWUiLCJlbmRfdGltZSIsIm9wdGlvbnMiLCJzY2VuZSIsInJlZmVycmVySW5mbyIsInJlZmVycmVyQXBwSWQiLCJpZCIsInN0YXJ0X3RpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJwYXVzZSIsImdldEN1cnJlbnRTZXNzaW9uSWQiLCJnZXRDdXJyZW50U2Vzc2lvbiIsImNsb25lQ3VycmVudFNlc3Npb24iLCJCIiwiaGVhZGVyIiwic3QiLCJhbmFseXRpY3MiLCJzZXNzaW9ucyIsInBhZ2VzIiwic2hhcmVzIiwiZWt2cyIsIkUiLCJhY3RpdmVfdXNlciIsIk8iLCJpZF90eXBlIiwiX2lkIiwiaWRfdHJhY2tpbmciLCJ0ZXN0VG9rZW4iLCJSIiwiYWxpcGF5X2lkIiwiZGV2aWNlX2lkIiwiTCIsIk4iLCJ4IiwiRiIsImoiLCJWIiwiSCIsInEiLCJmcm9tQ2hhckNvZGUiLCJ6IiwiY2hhckNvZGVBdCIsIkciLCJLIiwiVyIsIlgiLCJZIiwiSiIsIloiLCJRIiwiJCIsImV0IiwiZ2V0SW1wT2JqIiwibnQiLCJwdWlkIiwicHJvdmlkZXIiLCJ0cmFjZUlkIiwic3RhdHVzIiwiY29tcGxldGUiLCJydCIsImVucXVldWUiLCJzaXplIiwiZGVxdWV1ZSIsInNoaWZ0IiwiZnJvbnQiLCJpc0VtcHR5IiwiaXRlbXMiLCJwcmludCIsInRvU3RyaW5nIiwib3QiLCJub0NhY2hlIiwic2VuZCIsIml0IiwiYWsiLCJzZHQiLCJ1aW4iLCJ1aWEiLCJ1aWciLCJ1aXQiLCJ1aXAiLCJ1aWMiLCJ1aWwiLCJhZ2UiLCJjbG4iLCJjb25zdGVsbGF0aW9uIiwic2V0VXNlckluZm8iLCJ1cGRhdGUiLCJhdCIsIl90dG4iLCJfcmVzdW1lIiwic2V0QWxpcGF5VXNlcmlkIiwic2V0RGV2aWNlSWQiLCJ0cmFja0V2ZW50IiwidHJhY2tTaGFyZSIsInRyYWNrUGFnZVN0YXJ0IiwidHJhY2tQYWdlRW5kIiwiY3QiLCJsdCIsImNyZWF0ZU1ldGhvZCIsImluc3RhbGxBcGkiLCJ1dCIsImZ0IiwiZHQiLCJodCIsIl9pbml0ZWQiLCJfbG9nIiwicHJlaW5pdCIsInVzZSIsImluc3RhbGwiLCJtZXNzYWdlciIsInB0IiwibXQiLCJndCIsInl0IiwiaXNPYmplY3QiLCJpc0VtcHR5T2JqZWN0IiwiaXNVbmRlZmluZWQiLCJpc1N0cmluZyIsImlzRGF0ZSIsImVhY2giLCJidWlsZFF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTkRlY29kZSIsIkpTT05FbmNvZGUiLCJ2dCIsInd0IiwidG9VcHBlckNhc2UiLCJkZXZpY2VUeXBlIiwic2RrVmVyc2lvbiIsInNka1R5cGUiLCJ1bWlkIiwib3NWZXJzaW9uIiwicGxhdGZvcm1TZGtWZXJzaW9uIiwiZGV2aWNlQnJhbmQiLCJyZXNvbHV0aW9uSGVpZ2h0IiwicmVzb2x1dGlvbldpZHRoIiwiaW5zdGFsbFRpbWUiLCJpbnN0YWxsX2RhdGV0aW1lIiwiaW5zdGFsbF9zY2VuZSIsImNoYW5uZWwiLCJpbnN0YWxsX2NoYW5uZWwiLCJjYW1wYWlnbiIsImluc3RhbGxfY2FtcGFpZ24iLCJfdCIsImJ0IiwiU3QiLCJrdCIsIm1pbkZldGNoSW50ZXJ2YWxTZWNvbmRzIiwiQ3QiLCJNdCIsIlNUT1JBR0VfTkFNRSIsInNldERlZmF1bHRWYWx1ZXMiLCJnZXRWYWx1ZSIsImV4cElkIiwiZ3JvdXBJZCIsImNsaWVudFRzIiwidmFsdWUiLCJhY3RpdmUiLCJwYXJhbXMiLCJjYWxsYmFjayIsInNldE9wdGlvbnMiLCJmZXRjaCIsImNjIiwiUHQiLCJyYyIsIlR0IiwiQXQiLCJJdCIsIkR0IiwiVXQiLCJCdCIsIkV0IiwiT3QiLCJSdCIsIkx0IiwiTnQiLCJyZXZlbnVlIiwiZ3JvdXAiLCJzdGFnZSIsIm9uU3RhcnQiLCJvbkVuZCIsIl91bV9zZHUiLCJldmVudCIsIm9uUnVubmluZyIsImxldmVsIiwib25Jbml0TGV2ZWwiLCJvblNldExldmVsIiwib25TaG93Iiwib25IaWRlIiwieHQiLCJ1bWEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBRyxhQUFSOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLElBQUlDLENBQUMsR0FBRyxJQUFSO0VBQ0EsSUFBSUMsQ0FBQyxHQUFHLENBQUMsQ0FBVDs7RUFFQSxTQUFTRixDQUFULEdBQWE7SUFDVCxLQUFLRyxRQUFMLEdBQWdCLFVBQVVGLENBQVYsRUFBYTtNQUN6QkMsQ0FBQyxHQUFHRCxDQUFKO0lBQ0gsQ0FGRDs7SUFHQSxLQUFLRyxDQUFMLEdBQVMsWUFBWTtNQUNqQixJQUFJRixDQUFKLEVBQU87UUFDSCxJQUFJO1VBQ0EsSUFBSSxZQUFZLE9BQU9HLFNBQVMsQ0FBQyxDQUFELENBQWhDLEVBQXFDO1lBQ2pDQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVOLENBQUMsR0FBR00sU0FBUyxDQUFDLENBQUQsQ0FBNUI7VUFDSDs7VUFDREMsT0FBTyxDQUFDQyxLQUFSLENBQWNDLEtBQWQsQ0FBb0JGLE9BQXBCLEVBQTZCRCxTQUE3QjtRQUNILENBTEQsQ0FLRSxPQUFPTixDQUFQLEVBQVUsQ0FBRTtNQUNqQjtJQUNKLENBVEQ7O0lBVUEsS0FBS1UsQ0FBTCxHQUFTLFlBQVk7TUFDakIsSUFBSTtRQUNBLElBQUlQLENBQUosRUFBTztVQUNILElBQUk7WUFDQSxJQUFJLFlBQVksT0FBT0csU0FBUyxDQUFDLENBQUQsQ0FBaEMsRUFBcUM7Y0FDakNBLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZU4sQ0FBQyxHQUFH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QUdBbEIsQ0FBQyxHQUFHa0IsS0FBSixDQUFVbEIsQ0FBQyxHQUFHb0IsTUFBSixDQUFXLEdBQVgsQ0FBVjtFQUNIOztFQUNEd2YsRUFBRSxDQUFDamUsSUFBSCxDQUFRMlksRUFBUixFQUFZcmIsQ0FBWjtBQUNILENBVEQ7O0FBVUFxYixFQUFFLENBQUNJLEdBQUgsQ0FBT3dELEVBQVA7QUFDQTVELEVBQUUsQ0FBQ0ksR0FBSCxDQUFPb0UsRUFBUDs7QUFDQSxJQUFJbFosTUFBTSxDQUFDaEQsRUFBWCxFQUFlO0VBQ1hBLEVBQUUsQ0FBQ2lkLEdBQUgsR0FBU3ZGLEVBQVQ7QUFDSDs7QUFDRHdGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpGLEVBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbiA9IFwiW1VNRU5HXSAtLSBcIjtcbnZhciByID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IG51bGw7XG4gICAgdmFyIGUgPSAhMTtcblxuICAgIGZ1bmN0aW9uIHIoKSB7XG4gICAgICAgIHRoaXMuc2V0RGVidWcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZSA9IHQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gbiArIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAobikge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG4gKyBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAobikge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChuKSB7fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG4gKyBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKG4pIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gbiArIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChuKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG4gKyBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChuKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChuKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuICsgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAobikge31cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50aXBfdyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcIiVjIFtVTUVOR10gLS0gXCIgKyB0LFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQ6cmVkOyBwYWRkaW5nOiA0cHg7IHBhZGRpbmctcmlnaHQ6IDhweDsgYm9yZGVyLXJhZGl1czogNHB4OyBjb2xvcjogI2ZmZjtcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGNhdGNoICh0KSB7fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVyciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuICsgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChuKSB7fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlcGVhdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gdDsgZS5sZW5ndGggPCA4NjsgKSB7XG4gICAgICAgICAgICAgICAgZSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChudWxsID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gbmV3IHIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xufSkoKTtcbnZhciBvID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgdCA9IHt9O1xuICAgICAgICB0aGlzLnVzZU9wZW5pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXQudXNlT3BlbmlkO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVzZVN3YW5pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXQudXNlU3dhbmlkO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1dG9HZXRPcGVuaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0LmF1dG9HZXRPcGVuaWQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXBwS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuYXBwS2V5O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwbG9hZFVzZXJJbmZvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQudXBsb2FkVXNlckluZm87XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW5hYmxlVmVyaWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuZW5hYmxlVmVyaWZ5O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0ID0gZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRJdGVtID0gZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgICAgIHRbZV0gPSBuO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEl0ZW0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRbZV07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IG5ldyBlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGkoKSB7fVxuaS5wcm90b3R5cGUgPSB7XG4gICAgb246IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgICAgIChyW3RdIHx8IChyW3RdID0gW10pKS5wdXNoKHtcbiAgICAgICAgICAgIGZuOiBlLFxuICAgICAgICAgICAgY3R4OiBuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIG9uY2U6IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIHZhciByID0gdGhpcztcblxuICAgICAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICAgICAgci5vZmYodCwgbyk7XG4gICAgICAgICAgICBlLmFwcGx5KG4sIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgby5fID0gZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub24odCwgbywgbik7XG4gICAgfSxcbiAgICBlbWl0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIG4gPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVt0XSB8fCBbXSkuc2xpY2UoKTtcbiAgICAgICAgdmFyIHIgPSAwO1xuICAgICAgICBmb3IgKHZhciBvID0gbi5sZW5ndGg7IHIgPCBvOyByKyspIHtcbiAgICAgICAgICAgIG5bcl0uZm4uYXBwbHkobltyXS5jdHgsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgICAgICB2YXIgciA9IG5bdF07XG4gICAgICAgIHZhciBvID0gW107XG4gICAgICAgIGlmIChyICYmIGUpIHtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSByLmxlbmd0aDsgaSA8IGE7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyW2ldLmZuICE9PSBlICYmIHJbaV0uZm4uXyAhPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICBvLnB1c2gocltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvLmxlbmd0aCkge1xuICAgICAgICAgICAgblt0XSA9IG87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgblt0XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xudmFyIGEgPSBuZXcgaSgpO1xuYS5tZXNzYWdlVHlwZSA9IHtcbiAgICBDT05GSUdfTE9BREVEOiAwLFxuICAgIFVNQV9MSUJfSU5JVEVEOiAxXG59O1xudmFyIHMgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHJldHVybiAocyA9XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoe1xuICAgICAgICAgICAgX19wcm90b19fOiBbXVxuICAgICAgICB9IGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgdC5fX3Byb3RvX18gPSBlO1xuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gZSlcbiAgICAgICAgICAgICAgICBpZiAoZS5oYXNPd25Qcm9wZXJ0eShuKSkge1xuICAgICAgICAgICAgICAgICAgICB0W25dID0gZVtuXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pKHQsIGUpO1xufTtcblxuZnVuY3Rpb24gYyh0LCBlKSB7XG4gICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IHQ7XG4gICAgfVxuICAgIHModCwgZSk7XG4gICAgaWYgKG51bGwgPT09IGUpIHtcbiAgICAgICAgdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHQucHJvdG90eXBlID0gKChuLnByb3RvdHlwZSA9IGUucHJvdG90eXBlKSwgbmV3IG4oKSk7XG4gICAgfVxufVxudmFyIGwgPSBuZXcgKChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgfVxuICAgIGMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuZ2V0U2RrVHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwidHRnYW1lbXBcIjtcbiAgICB9O1xuICAgIHJldHVybiBlO1xufSkoXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgICAgIHQucHJvdG90eXBlLnNldFN0b3JhZ2UgPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgICAgICAgICAgdHQuc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICAgICAga2V5OiB0LFxuICAgICAgICAgICAgICAgIGRhdGE6IGUsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuKCEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcigpLncodCArIFwiOiBcIiArIGUuZXJyTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbighMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuZ2V0U3RvcmFnZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICB0dC5nZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICBrZXk6IHQsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSh0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICByKCkudyh0ICsgXCI6IFwiICsgbi5lcnJNc2cpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUucmVtb3ZlU3RvcmFnZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICB0dC5yZW1vdmVTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICBrZXk6IHQsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKCEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKCExKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0LnByb3RvdHlwZS5nZXRTeXN0ZW1JbmZvID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHR0LmdldFN5c3RlbUluZm8oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc2FmZUFyZWEgPSBlLnNhZmVBcmVhIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiBlLm1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQ6IGUuYnJhbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvOiBlLnBpeGVsUmF0aW8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5XaWR0aDogZS5zY3JlZW5XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbkhlaWdodDogZS5zY3JlZW5IZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZVNldHRpbmc6IGUuZm9udFNpemVTZXR0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IGUucGxhdGZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybVZlcnNpb246IGUudmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtU0RLVmVyc2lvbjogZS5TREtWZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGUubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXZpY2VOYW1lOiBlLm1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZUFyZWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZS5zYWZlQXJlYS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGUuc2FmZUFyZWEuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZS5zYWZlQXJlYS50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogZS5zYWZlQXJlYS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogZS5zYWZlQXJlYS5ib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGUuc2FmZUFyZWEucmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IGUuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogZS5hcHBOYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gZS5zeXN0ZW0uc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5PUyA9IHJbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBuLk9TVmVyc2lvbiA9IHJbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBNYXRoLnJvdW5kKGUuc2NyZWVuV2lkdGggKiBlLnBpeGVsUmF0aW8pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE1hdGgucm91bmQoZS5zY3JlZW5IZWlnaHQgKiBlLnBpeGVsUmF0aW8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobyA+IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucmVzb2x1dGlvbiA9IG8gKyBcIipcIiArIGk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnJlc29sdXRpb24gPSBpICsgXCIqXCIgKyBvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQobik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHQucHJvdG90eXBlLmdldERldmljZUluZm8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuY2hlY2tOZXR3b3JrQXZhaWxhYmxlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHR0LmdldE5ldHdvcmtUeXBlKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0KGUgJiYgXCJub25lXCIgIT09IGUubmV0d29ya1R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0LnByb3RvdHlwZS5nZXROZXR3b3JrSW5mbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0dC5nZXROZXR3b3JrVHlwZSh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUub25OZXR3b3JrU3RhdHVzQ2hhbmdlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHR0Lm9uTmV0d29ya1N0YXR1c0NoYW5nZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdChcIm5vbmVcIiAhPT0gZS5uZXR3b3JrVHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHQucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGUgPSAodCA9IHQgfHwge30pLnN1Y2Nlc3M7XG4gICAgICAgICAgICB2YXIgbiA9IHQuZmFpbDtcbiAgICAgICAgICAgIHZhciByID0gITE7XG4gICAgICAgICAgICB2YXIgbyA9IG51bGw7XG4gICAgICAgICAgICB0LnN1Y2Nlc3MgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHQuZmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cudHQpIHtcbiAgICAgICAgICAgICAgICB0dC5yZXF1ZXN0KHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgciA9ICEwO1xuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgbihyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0LnRpbWVvdXQgfHwgNWUzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuZ2V0RGV2aWNlSWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdChcIlwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuZ2V0QWR2ZXJ0aXNpbmdJZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgICAgICAgdChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuZ2V0U2RrVHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcInR0bXBcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuZ2V0UGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0dFwiO1xuICAgICAgICB9O1xuICAgICAgICB0LnByb3RvdHlwZS5nZXRVc2VySW5mbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZSA9IHtcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUudXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiAmJiB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogbi5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBuLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6IG4uZ2VuZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBuLmNvdW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlOiBuLnByb3ZpbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiBuLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBuLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHQuZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJJbmZvXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHQuZ2V0VXNlckluZm8oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgICAgci5lKFwiZ2V0VXNlckluZm8gZXJyb3JcIiwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHQucHJvdG90eXBlLmdldEFwcEluZm9TeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9O1xuICAgICAgICB0LnByb3RvdHlwZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0dC5vblNoYXJlQXBwTWVzc2FnZSh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuc2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHR0LnNoYXJlQXBwTWVzc2FnZSh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdC5wcm90b3R5cGUuZ2V0TGF1bmNoT3B0aW9uc1N5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0dC5nZXRMYXVuY2hPcHRpb25zU3luYykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdCA9IHR0LmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChyKSB7XG4gICAgICAgICAgICAgICAgdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdCB8fCB7fTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfSkoKVxuKSkoKTtcbnZhciB1ID0ge1xuICAgIFNFU1NJT05fSU5URVJWQUw6IDNlNCxcbiAgICBMT0dfVVJMOiBcIi9ieXRlZGFuY2VtX2xvZ3NcIixcbiAgICBHRVRfT1BFTklEX1VSTDogXCIvdW1pbmlwcm9ncmFtX2xvZ3MvYnl0ZWRhbmNlL2dldHV1dFwiLFxuICAgIFVTRVJJTkZPX1VSTDogXCIvdW1pbmlwcm9ncmFtX2xvZ3MvY29tbS91aWZcIixcbiAgICBFTkRQT0lOVDogXCJodHRwczovL3VtaW5pLnNodWp1cGllLmNvbVwiLFxuICAgIEVORFBPSU5UQjogXCJodHRwczovL3Vsb2dzLnVtZW5nLmNvbVwiLFxuICAgIERFVklDRV9JTkZPX0tFWTogXCJkZXZpY2VfaW5mb1wiLFxuICAgIEFEVkVSVElTSU5HX0lEOiBcIm1vYmlsZV9hZF9pZFwiLFxuICAgIEFORFJPSURfSUQ6IFwiYW5kcm9pZF9pZFwiLFxuICAgIENVUlJFTlRfU0VTU0lPTjogXCJjdXJyZW50X3Nlc3Npb25cIixcbiAgICBTRVNTSU9OX1BBVVNFX1RJTUU6IFwic2Vzc2lvbl9wYXVzZV90aW1lXCIsXG4gICAgRVZFTlRfU0VORF9ERUZBVUxUX0lOVEVSVkFMOiAxNWUzLFxuICAgIEVWRU5UX0xBU1RfU0VORF9USU1FOiBcImxhc3Rfc2VuZF90aW1lXCIsXG4gICAgTUFYX0VWRU5USURfTEVOR1RIOiAxMjgsXG4gICAgTUFYX1BST1BFUlRZX0tFWV9MRU5HVEg6IDI1NixcbiAgICBNQVhfUFJPUEVSVFlfS0VZU19DT1VOVDogMTAwLFxuICAgIFJFUE9SVF9QT0xJQ1k6IFwicmVwb3J0X3BvbGljeVwiLFxuICAgIFJFUE9SVF9JTlRFUlZBTF9USU1FOiBcInJlcG9ydF9pbnRlcnZhbF90aW1lXCIsXG4gICAgUkVQT1JUX1BPTElDWV9TVEFSVF9TRU5EOiBcIjFcIixcbiAgICBSRVBPUlRfUE9MSUNZX0lOVEVSVkFMOiBcIjZcIixcbiAgICBJTVBSSU5UOiBcImltcHJpbnRcIixcbiAgICBTRUVEX1ZFUlNJT046IFwiMS4wLjBcIixcbiAgICBJTVBMX1ZFUlNJT046IFwiMi43LjFcIixcbiAgICBBTElQQVlfQVZBSUxBQkxFX1ZFUlNJT046IFwiMTAuMS41MlwiLFxuICAgIFNIQVJFX1BBVEg6IFwidW1fc2hhcmVfcGF0aFwiLFxuICAgIFNIQVJFUzogXCJzaGFyZXNcIixcbiAgICBSRVFVRVNUUzogXCJyZXF1ZXN0c1wiLFxuICAgIFVVSUQ6IFwidW1fdXVpZFwiLFxuICAgIFVVSURfU1VGRklYOiBcInVkXCIsXG4gICAgT1BFTklEOiBcInVtX29kXCIsXG4gICAgVU5JT05JRDogXCJ1bV91bmlkXCIsXG4gICAgQUxJUEFZSUQ6IFwidW1fYWxpcGF5aWRcIixcbiAgICBVU0VSSUQ6IFwidW1fdXNlcmlkXCIsXG4gICAgUFJPVklERVI6IFwidW1fcHJvdmlkZXJcIixcbiAgICBTV0FOSUQ6IFwidW1fc3dhbmlkXCIsXG4gICAgQU5PTllNT1VTSUQ6IFwidW1fYW5vbnltb3VzaWRcIixcbiAgICBMQVVOQ0hfT1BUSU9OUzogXCJMQVVOQ0hfT1BUSU9OU1wiLFxuICAgIFVNX1NTUkM6IFwiX3VtX3NzcmNcIixcbiAgICBVU0VSX0lORk86IFwidXNlcl9pbmZvXCIsXG4gICAgSVNfQUxJWVVOOiAhMVxufTtcbnZhciBmID0ge1xuICAgIGlzTnVtYmVyOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gIU51bWJlci5pc05hTihwYXJzZUludCh0LCAxMCkpO1xuICAgIH0sXG4gICAgY29tcGFyZVZlcnNpb246IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBuID0gU3RyaW5nKHQpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgdmFyIHIgPSBTdHJpbmcoZSkuc3BsaXQoXCIuXCIpO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IE1hdGgubWF4KG4ubGVuZ3RoLCByLmxlbmd0aCk7IG8rKykge1xuICAgICAgICAgICAgdmFyIGkgPSBwYXJzZUludChuW29dIHx8IDAsIDEwKTtcbiAgICAgICAgICAgIHZhciBhID0gcGFyc2VJbnQocltvXSB8fCAwLCAxMCk7XG4gICAgICAgICAgICBpZiAoaSA+IGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpIDwgYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIGdldFJhbmRvbVN0cjogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBcIlwiO1xuICAgICAgICB2YXIgbiA9IFtcbiAgICAgICAgICAgIFwiMFwiLFxuICAgICAgICAgICAgXCIxXCIsXG4gICAgICAgICAgICBcIjJcIixcbiAgICAgICAgICAgIFwiM1wiLFxuICAgICAgICAgICAgXCI0XCIsXG4gICAgICAgICAgICBcIjVcIixcbiAgICAgICAgICAgIFwiNlwiLFxuICAgICAgICAgICAgXCI3XCIsXG4gICAgICAgICAgICBcIjhcIixcbiAgICAgICAgICAgIFwiOVwiLFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICBcImJcIixcbiAgICAgICAgICAgIFwiY1wiLFxuICAgICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgICBcImVcIixcbiAgICAgICAgICAgIFwiZlwiLFxuICAgICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgICBcImhcIixcbiAgICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgICAgXCJqXCIsXG4gICAgICAgICAgICBcImtcIixcbiAgICAgICAgICAgIFwibFwiLFxuICAgICAgICAgICAgXCJtXCIsXG4gICAgICAgICAgICBcIm5cIixcbiAgICAgICAgICAgIFwib1wiLFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICBcInFcIixcbiAgICAgICAgICAgIFwiclwiLFxuICAgICAgICAgICAgXCJzXCIsXG4gICAgICAgICAgICBcInRcIixcbiAgICAgICAgICAgIFwidVwiLFxuICAgICAgICAgICAgXCJ2XCIsXG4gICAgICAgICAgICBcIndcIixcbiAgICAgICAgICAgIFwieFwiLFxuICAgICAgICAgICAgXCJ5XCIsXG4gICAgICAgICAgICBcInpcIixcbiAgICAgICAgICAgIFwiQVwiLFxuICAgICAgICAgICAgXCJCXCIsXG4gICAgICAgICAgICBcIkNcIixcbiAgICAgICAgICAgIFwiRFwiLFxuICAgICAgICAgICAgXCJFXCIsXG4gICAgICAgICAgICBcIkZcIixcbiAgICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgICAgXCJIXCIsXG4gICAgICAgICAgICBcIklcIixcbiAgICAgICAgICAgIFwiSlwiLFxuICAgICAgICAgICAgXCJLXCIsXG4gICAgICAgICAgICBcIkxcIixcbiAgICAgICAgICAgIFwiTVwiLFxuICAgICAgICAgICAgXCJOXCIsXG4gICAgICAgICAgICBcIk9cIixcbiAgICAgICAgICAgIFwiUFwiLFxuICAgICAgICAgICAgXCJRXCIsXG4gICAgICAgICAgICBcIlJcIixcbiAgICAgICAgICAgIFwiU1wiLFxuICAgICAgICAgICAgXCJUXCIsXG4gICAgICAgICAgICBcIlVcIixcbiAgICAgICAgICAgIFwiVlwiLFxuICAgICAgICAgICAgXCJXXCIsXG4gICAgICAgICAgICBcIlhcIixcbiAgICAgICAgICAgIFwiWVwiLFxuICAgICAgICAgICAgXCJaXCJcbiAgICAgICAgXTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBOdW1iZXIodCk7IHIrKykge1xuICAgICAgICAgICAgZSArPSBuW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChuLmxlbmd0aCAtIDEpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodCkpO1xuICAgIH0sXG4gICAgc3RhcnRzV2l0aDogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgcmV0dXJuICEoIXQgfHwgIWUgfHwgMCA9PT0gZS5sZW5ndGggfHwgZS5sZW5ndGggPiB0Lmxlbmd0aCkgJiYgdC5zdWJzdHIoMCwgZS5sZW5ndGgpID09PSBlO1xuICAgIH0sXG4gICAgZW5kc1dpdGg6IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiAhKCFlIHx8IDAgPT09IHQubGVuZ3RoIHx8IGUubGVuZ3RoID4gdC5sZW5ndGgpICYmIHQuc3Vic3RyaW5nKHQubGVuZ3RoIC0gZS5sZW5ndGgpID09PSBlO1xuICAgIH0sXG4gICAgYXNzaWduOiBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAobnVsbCA9PSB0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gT2JqZWN0KHQpO1xuICAgICAgICBmb3IgKHZhciBuID0gMTsgbiA8IGFyZ3VtZW50cy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgdmFyIHIgPSBhcmd1bWVudHNbbl07XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gaW4gcilcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLCBvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZVtvXSA9IHJbb107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZTtcbiAgICB9LFxuICAgIGRlZXBFcXVhbDogZnVuY3Rpb24gdChlLCBuKSB7XG4gICAgICAgIGlmIChlID09PSBuKSB7XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBuICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG4pIHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhlKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG4pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIHIgaW4gZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobiwgcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXQoZVtyXSwgbltyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfSxcbiAgICB0cmltU3RhcnQ6IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IFJlZ0V4cChcIl5cIiArIGUgKyBcIipcIik7XG4gICAgICAgICAgICB0ID0gdC5yZXBsYWNlKG4sIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IHQucmVwbGFjZSgvXnMqLywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfSxcbiAgICB0cmltRW5kOiBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuO1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG4gPSBuZXcgUmVnRXhwKGUpO1xuICAgICAgICAgICAgZm9yIChyID0gdC5sZW5ndGg7IG4udGVzdCh0LmNoYXJBdChyKSk7ICkge1xuICAgICAgICAgICAgICAgIHIgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0LnNsaWNlKDAsIHIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBuID0gL3MvO1xuICAgICAgICBmb3IgKHIgPSB0Lmxlbmd0aCAtIDE7IG4udGVzdCh0LmNoYXJBdChyKSk7ICkge1xuICAgICAgICAgICAgciAtPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0LnNsaWNlKDAsIHIgKyAxKTtcbiAgICB9LFxuICAgIGlzRnVuY3Rpb246IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQ7XG4gICAgfVxufTtcbnZhciBkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLl91dWlkID0gXCJcIjtcbiAgICAgICAgdGhpcy5fdXNlcmlkID0gXCJcIjtcbiAgICAgICAgdGhpcy5fcHJvdmlkZXIgPSBcIlwiO1xuICAgICAgICB0aGlzLl9pZFR5cGUgPSBcIlwiO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5jcmVhdGVVVUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZi5nZXRSYW5kb21TdHIoMTApICsgRGF0ZS5ub3coKSArIGYuZ2V0UmFuZG9tU3RyKDcpICsgdS5VVUlEX1NVRkZJWDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmluaXRVVUlEID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBsLmdldFN0b3JhZ2UodS5VVUlELCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICBlLl91dWlkID0gbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5fdXVpZCA9IGUuY3JlYXRlVVVJRCgpO1xuICAgICAgICAgICAgICAgIGwuc2V0U3RvcmFnZSh1LlVVSUQsIGUuX3V1aWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICB0KG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmluaXRVc2VyaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgbC5nZXRTdG9yYWdlKHUuVVNFUklELCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCF0Ll91c2VyaWQgJiYgZSkge1xuICAgICAgICAgICAgICAgIHQuX3VzZXJpZCA9IGU7XG4gICAgICAgICAgICAgICAgcigpLnYoXCJ1c2VySWQgaXMgXCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbC5nZXRTdG9yYWdlKHUuUFJPVklERVIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoIXQuX3Byb3ZpZGVyICYmIGUpIHtcbiAgICAgICAgICAgICAgICB0Ll9wcm92aWRlciA9IGU7XG4gICAgICAgICAgICAgICAgcigpLnYoXCJwcm92aWRlciBpcyBcIiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgZS5pbml0VVVJRChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLmluaXRVc2VyaWQoKTtcbiAgICAgICAgICAgIGUuaW5pdElEKHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFVzZXJpZCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlcmlkICYmIHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJpZCA9IHQ7XG4gICAgICAgICAgICB0aGlzLl9wcm92aWRlciA9IGU7XG4gICAgICAgICAgICBsLnNldFN0b3JhZ2UodS5VU0VSSUQsIHQpO1xuICAgICAgICAgICAgbC5zZXRTdG9yYWdlKHUuUFJPVklERVIsIGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRVc2VySWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyaWQ7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRQcm92aWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3ZpZGVyO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0SWRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWRUeXBlO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0SWRUcmFja2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuX3V1aWQpIHtcbiAgICAgICAgICAgIHQudXVpZCA9IHRoaXMuX3V1aWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3VzZXJpZCkge1xuICAgICAgICAgICAgdC51c2VyaWQgPSB0aGlzLl91c2VyaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG4hKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuX29wZW5pZCA9IFwiXCI7XG4gICAgICAgIGUuX3VuaW9uaWQgPSBcIlwiO1xuICAgICAgICBlLl91c2VPcGVuaWQgPSAhMTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuaW5pdElEID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoZS5fdXNlT3BlbmlkKSB7XG4gICAgICAgICAgICBlLl9pZFR5cGUgPSBcIm9wZW5pZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5faWRUeXBlID0gXCJ1dWlkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcigpLnYoXCJpZCB0eXBlOiBcIiwgZS5faWRUeXBlKTtcbiAgICAgICAgbC5nZXRTdG9yYWdlKHUuVU5JT05JRCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGUuX3VuaW9uaWQgPSB0O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuX3VzZU9wZW5pZCkge1xuICAgICAgICAgICAgbC5nZXRTdG9yYWdlKHUuT1BFTklELCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGUuX29wZW5pZCA9IG47XG4gICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldFVzZU9wZW5pZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuX3VzZU9wZW5pZCA9IHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRPcGVuaWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXRoaXMuX29wZW5pZCAmJiB0KSB7XG4gICAgICAgICAgICB0aGlzLl9vcGVuaWQgPSB0O1xuICAgICAgICAgICAgbC5zZXRTdG9yYWdlKHUuT1BFTklELCB0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0VW5pb25pZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghdGhpcy5fdW5pb25pZCAmJiB0KSB7XG4gICAgICAgICAgICB0aGlzLl91bmlvbmlkID0gdDtcbiAgICAgICAgICAgIGwuc2V0U3RvcmFnZSh1LlVOSU9OSUQsIHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJZFRyYWNraW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHQucHJvdG90eXBlLmdldElkVHJhY2tpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuX29wZW5pZCkge1xuICAgICAgICAgICAgZS5vcGVuaWQgPSB0aGlzLl9vcGVuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3VuaW9uaWQpIHtcbiAgICAgICAgICAgIGUudW5pb25pZCA9IHRoaXMuX3VuaW9uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3VzZXJpZCkge1xuICAgICAgICAgICAgZS51c2VyaWQgPSB0aGlzLl91c2VyaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VzZU9wZW5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29wZW5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91dWlkO1xuICAgICAgICB9XG4gICAgfTtcbn0pKGQpO1xudmFyIGg7XG52YXIgcCA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLl91bmlvbmlkID0gXCJcIjtcbiAgICAgICAgZS5fb3BlbmlkID0gXCJcIjtcbiAgICAgICAgZS5fYW5vbnltb3VzaWQgPSBcIlwiO1xuICAgICAgICBlLl91c2VPcGVuaWQgPSAhMTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUuZ2V0T3BlbklkQXN5bmMgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIHR0LmxvZ2luKHtcbiAgICAgICAgICAgIGZvcmNlOiAhMSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdS5FTkRQT0lOVCArIHUuR0VUX09QRU5JRF9VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IG8uY29kZSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFub255bW91c19jb2RlOiBvLmFub255bW91c0NvZGUgfHwgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcigpLnYoXCJ0dCByZXF1ZXN0IHNzIFwiLCB0LCB1LkVORFBPSU5UICsgdS5HRVRfT1BFTklEX1VSTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgMjAwID09PSB0LnN0YXR1c0NvZGUgJiYgdC5kYXRhICYmIHQuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uc2V0T3BlbmlkKG8ub2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5zZXRBbm9ueW1vdXNpZChvLm5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcigpLnYoXCJ0dCByZXF1ZXN0IGZhaWxlZC4uLlwiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcigpLnYoXCJ0dCBsb2dpbiBmYWlsZWQuLi5cIiwgdCk7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0SUQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGUuX2lkVHlwZSA9IFwiYW5vbnltb3VzaWRcIjtcbiAgICAgICAgcigpLnYoXCJpZCB0eXBlOiBcIiwgZS5faWRUeXBlKTtcbiAgICAgICAgbC5nZXRTdG9yYWdlKHUuT1BFTklELCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZS5fb3BlbmlkID0gdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGwuZ2V0U3RvcmFnZSh1LkFOT05ZTU9VU0lELCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgZS5fYW5vbnltb3VzaWQgPSBuO1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0VXNlT3BlbmlkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5fdXNlT3BlbmlkID0gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldE9wZW5pZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghdGhpcy5fb3BlbmlkICYmIHQpIHtcbiAgICAgICAgICAgIHRoaXMuX29wZW5pZCA9IHQ7XG4gICAgICAgICAgICBsLnNldFN0b3JhZ2UodS5PUEVOSUQsIHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRBbm9ueW1vdXNpZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghdGhpcy5fYW5vbnltb3VzaWQgJiYgdCkge1xuICAgICAgICAgICAgdGhpcy5fYW5vbnltb3VzaWQgPSB0O1xuICAgICAgICAgICAgbC5zZXRTdG9yYWdlKHUuQU5PTllNT1VTSUQsIHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJZFRyYWNraW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHQucHJvdG90eXBlLmdldElkVHJhY2tpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuX29wZW5pZCkge1xuICAgICAgICAgICAgZS5vcGVuaWQgPSB0aGlzLl9vcGVuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3VzZXJpZCkge1xuICAgICAgICAgICAgZS51c2VyaWQgPSB0aGlzLl91c2VyaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2Fub255bW91c2lkKSB7XG4gICAgICAgICAgICBlLmFub255bW91c2lkID0gdGhpcy5fYW5vbnltb3VzaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Fub255bW91c2lkKSB7XG4gICAgICAgICAgICB0aGlzLl9pZFR5cGUgPSBcImFub255bW91c2lkXCI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5vbnltb3VzaWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBlO1xufSkoZCk7XG52YXIgbSA9XG4gICAgKChoID0gbnVsbCksXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggPSBuZXcgcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoO1xuICAgIH0pO1xudmFyIGcgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciB0ID0gITE7XG4gICAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgICAgdmFyIG4gPSBbXTtcbiAgICAgICAgdGhpcy5hZGRQYWdlU3RhcnQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgaWYgKG4gJiYgIXQpIHtcbiAgICAgICAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgICAgICAgICB0czogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogbixcbiAgICAgICAgICAgICAgICAgICAgcGFnZV9uYW1lOiBuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0ID0gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkUGFnZUVuZCA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICBpZiAodCAmJiByICYmIGUgJiYgciA9PT0gZS5wYWdlX25hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IERhdGUubm93KCkgLSBlLnRzO1xuICAgICAgICAgICAgICAgIGUuZHVyYXRpb24gPSBNYXRoLmFicyhvKTtcbiAgICAgICAgICAgICAgICBuLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdCA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuLmxlbmd0aCA9IDA7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IG5ldyBlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgeSA9IHt9O1xudmFyIHYgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gbnVsbDtcbiAgICB2YXIgZSA9IFtdO1xuICAgIHZhciBuID0gXCJcIjtcblxuICAgIGZ1bmN0aW9uIG8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICAgICAgcigpLnYoXCJzaGFyZSBvcmlnaW46ICVvXCIsIHQpO1xuICAgICAgICAgICAgICAgIHZhciBpID0ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdCAmJiB0LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiB0ICYmIHQucGF0aCAmJiB0LnBhdGguc3BsaXQoXCI/XCIpWzBdLFxuICAgICAgICAgICAgICAgICAgICBfdW1fc3RzOiBEYXRlLm5vdygpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoaS5wYXRoICYmIGkucGF0aC5sZW5ndGggPiAxICYmIGYuc3RhcnRzV2l0aChpLnBhdGgsIFwiL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBpLnBhdGggPSBmLnRyaW1TdGFydChpLnBhdGgsIFwiL1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0LnBhdGggfHwgXCJcIjtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG0oKS5nZXRJZCgpO1xuICAgICAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gbi5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gKGMgPSBjLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSkpLmluZGV4T2Yocyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBjLnNsaWNlKDAsIGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucHVzaChzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGMuam9pbihcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gYS5pbmRleE9mKFwiP1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSBcIiZfdW1fc3NyYz1cIiArIHU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhICs9IFwiP191bV9zc3JjPVwiICsgdTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gXCImX3VtX3N0cz1cIiArIGQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiB0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJfdW1fc3NyY1wiICE9PSBuICYmIFwiX3VtX3N0c1wiICE9PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2gobiArIFwiPVwiICsgdFtuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5qb2luKFwiJlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBoICsgXCImX3VtX3NzcmM9XCIgKyB1ICsgXCImX3VtX3N0cz1cIiArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBcIl91bV9zc3JjPVwiICsgdSArIFwiJl91bV9zdHM9XCIgKyBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQucXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnF1ZXJ5ID0gdC5xdWVyeSArIFwiJl91bV9zc3JjPVwiICsgdSArIFwiJl91bV9zdHM9XCIgKyBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnF1ZXJ5ID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucGF0aCA9IGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaS5fdW1fc3NyYyA9IHU7XG4gICAgICAgICAgICAgICAgICAgIGkuX3VtX3N0cyA9IGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHVzaChpKTtcbiAgICAgICAgICAgICAgICByKCkudihcInNoYXJlOiAlb1wiLCB0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRTaGFyZVNvdXJjZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBuID0gdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ID0gbmV3IG8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xufSkoKTtcbnZhciB3ID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHQpO1xuICAgICAgICB9IGNhdGNoICh0KSB7fVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn07XG52YXIgXyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHQpO1xuICAgICAgICB9IGNhdGNoICh0KSB7fVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG52YXIgYiA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSBudWxsO1xuICAgIHZhciBlID0gXCJcIjtcbiAgICB2YXIgbiA9IG51bGw7XG4gICAgdmFyIHIgPSAhMTtcblxuICAgIGZ1bmN0aW9uIGkoKSB7XG4gICAgICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIGwucmVtb3ZlU3RvcmFnZShlKTtcbiAgICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUgPSBcInVtX2NhY2hlX1wiICsgbygpLmFwcEtleSgpO1xuICAgICAgICAgICAgICAgIGwuZ2V0U3RvcmFnZShlLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICBuID0gXyhvKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBsLnJlbW92ZVN0b3JhZ2UoZSk7XG4gICAgICAgICAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICBsLnNldFN0b3JhZ2UoZSwgdyhuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgblt0XSA9IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAobiB8fCB7fSlbdF07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGlmIChuICYmIG5bdF0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgblt0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG4gPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmdldCh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQgPSBuZXcgaSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG59KSgpO1xudmFyIFMgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0O1xuICAgIHZhciBlO1xuICAgIHZhciBuID0gW107XG4gICAgdmFyIG8gPSBbXTtcblxuICAgIGZ1bmN0aW9uIGkoKSB7XG4gICAgICAgIGlmIChuLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHQgPSBiKCkuZ2V0KFwiZWt2c1wiKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0W25dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgKz0gdFtuXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgIH0pKHQpICtcbiAgICAgICAgICAgICAgICAgICAgbi5sZW5ndGggPD1cbiAgICAgICAgICAgICAgICAxZTRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHQgPSBhKHQsIG4pO1xuICAgICAgICAgICAgICAgIGIoKS5zZXQoXCJla3ZzXCIsIHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYSh0LCBuKSB7XG4gICAgICAgIHZhciByID0gKHQgPSB0IHx8IHt9KVtlXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocikgJiYgci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRbZV0gPSByLmNvbmNhdChuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRbZV0gPSBbXS5jb25jYXQobik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBhZGRFdmVudDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4udW5zaGlmdCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ubGVuZ3RoID4gMSAmJiAoaSgpLCAobi5sZW5ndGggPSAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudyhcInNlc3Npb24gaWQgaXMgbnVsbDogXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgby51bnNoaWZ0KHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRTZXNzaW9uSWQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUgPSB0O1xuICAgICAgICAgICAgICAgICAgICByKCkudihcInNldFNlc3Npb25JZDogXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvKSAmJiBvLmxlbmd0aCAmJiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG8ubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50KG9bbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgby5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRFa3ZzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gYigpLmdldChcImVrdnNcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuICYmIG4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYSh0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGIoKS5yZW1vdmUoXCJla3ZzXCIpO1xuICAgICAgICAgICAgICAgICAgICBuLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xufSkoKTtcbnZhciBrID0gXCIyZ1wiO1xudmFyIEMgPSBcIjNnXCI7XG52YXIgTSA9IFwiNGdcIjtcbnZhciBQID0gXCJoYWxmX3Nlc3Npb25cIjtcbnZhciBUID0gXCJjbG9zZV9zZXNzaW9uXCI7XG52YXIgQSA9IFwiZWt2XCI7XG52YXIgSSA9IFtcImFjY2Vzc1wiLCBcImFjY2Vzc19zdWJ0eXBlXCJdO1xudmFyIEQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciB0ID0gITE7XG4gICAgICAgIHZhciBlID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gbih0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IGIoKS5nZXQodS5JTVBSSU5UKTtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgZS5pbXByaW50ID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUuZGV2aWNlX3R5cGUgPSBcIlBob25lXCI7XG4gICAgICAgICAgICBlLnNka192ZXJzaW9uID0gdS5JTVBMX1ZFUlNJT047XG4gICAgICAgICAgICBlLmFwcGtleSA9IG8oKS5hcHBLZXkoKTtcbiAgICAgICAgICAgIGwuZ2V0RGV2aWNlSW5mbyhmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGUuZGV2aWNlX2luZm8gPSB0IHx8IFwiXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByID0gbC5nZXRBcHBJbmZvU3luYygpO1xuICAgICAgICAgICAgZS5hcHBpZCA9IHIuYXBwSWQ7XG4gICAgICAgICAgICBlLmFwcF9lbnYgPSByLmFwcEVudjtcbiAgICAgICAgICAgIGUuYXBwX3ZlcnNpb24gPSByLmFwcFZlcnNpb247XG4gICAgICAgICAgICBsLmdldFN5c3RlbUluZm8oZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBsLmdldE5ldHdvcmtJbmZvKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgKHQgPSB0IHx8IHt9KS5zYWZlQXJlYSA9IHQuc2FmZUFyZWEgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IChlID0gZSB8fCB7fSkubmV0d29ya1R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJub25lXCIgPT09IHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gXCJ1bmtub3duXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHQubW9kZWwgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdC5wbGF0Zm9ybSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0LmJyYW5kIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGEudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uc2RrX3R5cGUgPSBsLmdldFNka1R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucGxhdGZvcm0gPSBsLmdldFBsYXRmb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnBsYXRmb3JtX3Nka192ZXJzaW9uID0gdC5wbGF0Zm9ybVNES1ZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnBsYXRmb3JtX3ZlcnNpb24gPSB0LnBsYXRmb3JtVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucmVzb2x1dGlvbiA9IHQucmVzb2x1dGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucGl4ZWxfcmF0aW8gPSB0LnBpeGVsUmF0aW87XG4gICAgICAgICAgICAgICAgICAgICAgICBuLm9zID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZm9udF9zaXplX3NldHRpbmcgPSB0LmZvbnRTaXplU2V0dGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZGV2aWNlX21vZGVsID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZGV2aWNlX2JyYW5kID0gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZGV2aWNlX21hbnVmYWN0dXJlciA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmRldmljZV9tYW51aWQgPSBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5kZXZpY2VfbmFtZSA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICBuLm9zX3ZlcnNpb24gPSB0Lk9TVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ubGFuZ3VhZ2UgPSB0Lmxhbmd1YWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi50aGVtZSA9IHQudGhlbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmJlbmNobWFya19sZXZlbCA9IHQuYmVuY2htYXJrTGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnN0YXR1c19iYXJfaGVpZ2h0ID0gdC5zdGF0dXNCYXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnNhZmVfYXJlYV90b3AgPSB0LnNhZmVBcmVhLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uc2FmZV9hcmVhX2xlZnQgPSB0LnNhZmVBcmVhLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnNhZmVfYXJlYV9yaWdodCA9IHQuc2FmZUFyZWEucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnNhZmVfYXJlYV9ib3R0b20gPSB0LnNhZmVBcmVhLmJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uc2FmZV9hcmVhX2hlaWdodCA9IHQuc2FmZUFyZWEuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5zYWZlX2FyZWFfd2lkdGggPSB0LnNhZmVBcmVhLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5zdG9yYWdlID0gdC5zdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5zY3JlZW5fd2lkdGggPSB0LnNjcmVlbldpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5zY3JlZW5faGVpZ2h0ID0gdC5zY3JlZW5IZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmhvc3QgPSB0Lmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKChyID0gciA/IHIudG9Mb3dlckNhc2UoKSA6IFwiXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBNOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmFjY2Vzc19zdWJ0eXBlID0gXCJMVEVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5hY2Nlc3MgPSBcIjRHXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5hY2Nlc3Nfc3VidHlwZSA9IFwiQ0RNQVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmFjY2VzcyA9IFwiM0dcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBrOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmFjY2Vzc19zdWJ0eXBlID0gXCJHUlBTXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uYWNjZXNzID0gXCIyR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmFjY2VzcyA9IHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuLmFjY2Vzc19zdWJ0eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgICAgIH0pKG4sIHIpO1xuICAgICAgICAgICAgICAgICAgICBmLmFzc2lnbihlLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9ICEwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UmVhbHRpbWVGaWVsZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHt9O1xuICAgICAgICAgICAgICAgIEkuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICB0W25dID0gZVtuXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRJZFRyYWNraW5nOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbShcImlkX3RyYWNraW5nXCIsIHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldElkVHlwZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW0oXCJpZF90eXBlXCIsIHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEFwcFZlcnNpb246IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtKFwiYXBwX3ZlcnNpb25cIiwgdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U3VwZXJQcm9wZXJ0eTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zcCkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3AgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5zcC5pc3YgPSB0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFN1cGVyUHJvcGVydHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLnNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnNwLmlzdjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SXRlbTogZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICBlW3RdID0gbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlW3RdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN0YW5jZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcbnZhciBVID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IG51bGw7XG4gICAgdmFyIGUgPSBudWxsO1xuICAgIHZhciBuID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgcmVzdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9ICExO1xuICAgICAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBiKCkuZ2V0KHUuQ1VSUkVOVF9TRVNTSU9OKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuIHx8ICFuLmVuZF90aW1lIHx8IGUgLSBuLmVuZF90aW1lID4gdS5TRVNTSU9OX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IChuIHx8IHt9KS5vcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGYuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IG4uaW5kZXhPZihcIl91bV9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbbl0gPSB0W25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcigpLnYoXCJxdWVyeTogXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS52KFwiX3VtX3BhcmFtczogXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkodC5xdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5wYXRoID0gdC5wYXRoIHx8IGUucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc2NlbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uc2NlbmUgPSBsLmdldFBsYXRmb3JtKCkgKyBcIl9cIiArIHQuc2NlbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnNjZW5lID0gZS5zY2VuZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHQucmVmZXJyZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5yZWZlcnJlckFwcElkID0gaS5hcHBJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkudihcInNlc3Npb24gb3B0aW9uczogXCIsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG9bdS5VTV9TU1JDXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYoKS5zZXRTaGFyZVNvdXJjZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZi5nZXRSYW5kb21TdHIoMTApICsgcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkuZShcIueUn+aIkOaWsHNlc3Npb27lpLHotKU6IFwiLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIoKS52KFwi5byA5aeL5paw55qEc2Vzc2lvbiglcyk6IFwiLCBuLmlkLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIoKS52KFwi5bu257ut5LiK5LiA5qyhc2Vzc2lvbiglcyk6ICVzIFwiLCBuLmlkLCBpLnRvTG9jYWxlVGltZVN0cmluZygpLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5lbmRfdGltZSA9IHQuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm51bWJlclwiICE9IHR5cGVvZiBuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmR1cmF0aW9uID0gbi5lbmRfdGltZSAtIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYigpLnNldCh1LkNVUlJFTlRfU0VTU0lPTiwgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcigpLnYoXCLpgIDlh7rkvJror50oJXMpOiAlcyBcIiwgbi5pZCwgdC50b0xvY2FsZVRpbWVTdHJpbmcoKSwgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50U2Vzc2lvbklkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobiB8fCB7fSkuaWQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50U2Vzc2lvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb25lQ3VycmVudFNlc3Npb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGYuY2xvbmUobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xufSkoKTtcblxuZnVuY3Rpb24gQih0KSB7XG4gICAgdmFyIGUgPSBudWxsO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgICBjYXNlIFA6XG4gICAgICAgICAgICBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBVKCkuY2xvbmVDdXJyZW50U2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uczogW2VdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFQ6XG4gICAgICAgICAgICBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB7fTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IFUoKS5jbG9uZUN1cnJlbnRTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBnKCkuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gdigpLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyKSAmJiByLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5wYWdlcyA9IGYuY2xvbmUocik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobykgJiYgby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uc2hhcmVzID0gZi5jbG9uZShvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnKCkuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdigpLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc2Vzc2lvbnMgPSBbbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpID0gUygpLmdldEVrdnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICBlLmVrdnMgPSBmLmNsb25lKGkpO1xuICAgICAgICAgICAgICAgICAgICBTKCkuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUuc2Vzc2lvbnMgfHwgZS5la3ZzKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXRpY3M6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQTpcbiAgICAgICAgICAgIGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IFMoKS5nZXRFa3ZzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5dGljczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVrdnM6IGYuY2xvbmUoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgUygpLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfSkoKTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG59XG52YXIgRSA9IHtcbiAgICBzZXNzaW9uczogXCJzblwiLFxuICAgIGVrdnM6IFwiZVwiLFxuICAgIGFjdGl2ZV91c2VyOiBcImFjdGl2ZV91c2VyXCJcbn07XG52YXIgTyA9IHtcbiAgICBzZGtfdHlwZTogXCJzZHRcIixcbiAgICBhY2Nlc3M6IFwiYWNcIixcbiAgICBhY2Nlc3Nfc3VidHlwZTogXCJhY3NcIixcbiAgICBkZXZpY2VfbW9kZWw6IFwiZG1cIixcbiAgICBsYW5ndWFnZTogXCJsYW5nXCIsXG4gICAgZGV2aWNlX3R5cGU6IFwiZHRcIixcbiAgICBkZXZpY2VfbWFudWZhY3R1cmVyOiBcImRtZlwiLFxuICAgIGRldmljZV9uYW1lOiBcImRuXCIsXG4gICAgcGxhdGZvcm1fdmVyc2lvbjogXCJwdlwiLFxuICAgIGlkX3R5cGU6IFwiaXRcIixcbiAgICBmb250X3NpemVfc2V0dGluZzogXCJmc3NcIixcbiAgICBvc192ZXJzaW9uOiBcIm92XCIsXG4gICAgZGV2aWNlX21hbnVpZDogXCJkaWRcIixcbiAgICBwbGF0Zm9ybV9zZGtfdmVyc2lvbjogXCJwc3ZcIixcbiAgICBkZXZpY2VfYnJhbmQ6IFwiZGJcIixcbiAgICBhcHBrZXk6IFwiYWtcIixcbiAgICBfaWQ6IFwiaWRcIixcbiAgICBpZF90cmFja2luZzogXCJpdHJcIixcbiAgICBpbXByaW50OiBcImltcFwiLFxuICAgIHNka192ZXJzaW9uOiBcInN2XCIsXG4gICAgcmVzb2x1dGlvbjogXCJybFwiLFxuICAgIHRlc3RUb2tlbjogXCJ0dG5cIixcbiAgICB0aGVtZTogXCJ0NVwiLFxuICAgIGJlbmNobWFya19sZXZlbDogXCJibWxcIixcbiAgICBzY3JlZW5fd2lkdGg6IFwic3dcIixcbiAgICBzY3JlZW5faGVpZ2h0OiBcInNoXCIsXG4gICAgc3RhdHVzX2Jhcl9oZWlnaHQ6IFwic2JoXCIsXG4gICAgc2FmZV9hcmVhX3RvcDogXCJzYXRcIixcbiAgICBzYWZlX2FyZWFfbGVmdDogXCJzYWxcIixcbiAgICBzYWZlX2FyZWFfcmlnaHQ6IFwic2FyXCIsXG4gICAgc2FmZV9hcmVhX2JvdHRvbTogXCJzYWJcIixcbiAgICBzYWZlX2FyZWFfaGVpZ2h0OiBcInNhaFwiLFxuICAgIHNhZmVfYXJlYV93aWR0aDogXCJzYXdcIixcbiAgICBwaXhlbF9yYXRpbzogXCJwclwiLFxuICAgIHN0b3JhZ2U6IFwiczdcIixcbiAgICBob3N0OiBcImhzXCJcbn07XG52YXIgUiA9IHtcbiAgICB1dWlkOiBcInVkXCIsXG4gICAgdW5pb25pZDogXCJ1bmRcIixcbiAgICBvcGVuaWQ6IFwib2RcIixcbiAgICBhbm9ueW1vdXNpZDogXCJuZFwiLFxuICAgIGFsaXBheV9pZDogXCJhZFwiLFxuICAgIGRldmljZV9pZDogXCJkZFwiLFxuICAgIHVzZXJpZDogXCJwdWlkXCJcbn07XG5cbmZ1bmN0aW9uIEwodCwgZSkge1xuICAgIHZhciBuID0gTih0LCBlKTtcbiAgICBpZiAodCAmJiB0LmlkX3RyYWNraW5nKSB7XG4gICAgICAgIG5bZS5pZF90cmFja2luZyB8fCBcImlkX3RyYWNraW5nXCJdID0gTih0LmlkX3RyYWNraW5nLCBSKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG5cbmZ1bmN0aW9uIE4odCwgZSkge1xuICAgIHZhciBuID0ge307XG4gICAgZm9yICh2YXIgciBpbiB0KSBlW3JdID8gKG5bZVtyXV0gPSB0W3JdKSA6IChuW3JdID0gdFtyXSk7XG4gICAgcmV0dXJuIG47XG59XG5cbmZ1bmN0aW9uIHgodCwgZSkge1xuICAgIHZhciBuID0ge307XG4gICAgaWYgKHQpIHtcbiAgICAgICAgZm9yICh2YXIgciBpbiB0KVxuICAgICAgICAgICAgaWYgKHRbcl0pIHtcbiAgICAgICAgICAgICAgICBuW2Vbcl1dID0gdFtyXTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG52YXIgRiA9IFwiXCI7XG5cbmZ1bmN0aW9uIGooKSB7XG4gICAgcmV0dXJuIEY7XG59XG52YXIgViA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xudmFyIEggPSAoZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHt9O1xuICAgIHZhciBuID0gMDtcbiAgICBmb3IgKHZhciByID0gdC5sZW5ndGg7IG4gPCByOyBuKyspIHtcbiAgICAgICAgZVt0LmNoYXJBdChuKV0gPSBuO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbn0pKFYpO1xudmFyIHEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIHogPSBmdW5jdGlvbiAodCkge1xuICAgIGlmICh0Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgaWYgKChlID0gdC5jaGFyQ29kZUF0KDApKSA8IDEyOCkge1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZSA8IDIwNDgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcSgxOTIgfCAoZSA+Pj4gNikpICsgcSgxMjggfCAoNjMgJiBlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBxKDIyNCB8ICgoZSA+Pj4gMTIpICYgMTUpKSArIHEoMTI4IHwgKChlID4+PiA2KSAmIDYzKSkgKyBxKDEyOCB8ICg2MyAmIGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZSA9IDY1NTM2ICsgMTAyNCAqICh0LmNoYXJDb2RlQXQoMCkgLSA1NTI5NikgKyAodC5jaGFyQ29kZUF0KDEpIC0gNTYzMjApO1xuICAgIHJldHVybiBxKDI0MCB8ICgoZSA+Pj4gMTgpICYgNykpICsgcSgxMjggfCAoKGUgPj4+IDEyKSAmIDYzKSkgKyBxKDEyOCB8ICgoZSA+Pj4gNikgJiA2MykpICsgcSgxMjggfCAoNjMgJiBlKSk7XG59O1xudmFyIEcgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGRl18W15cXHgwMC1cXHg3Rl0vZztcbnZhciBLID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IFswLCAyLCAxXVt0Lmxlbmd0aCAlIDNdO1xuICAgIHZhciBuID1cbiAgICAgICAgKHQuY2hhckNvZGVBdCgwKSA8PCAxNikgfCAoKHQubGVuZ3RoID4gMSA/IHQuY2hhckNvZGVBdCgxKSA6IDApIDw8IDgpIHwgKHQubGVuZ3RoID4gMiA/IHQuY2hhckNvZGVBdCgyKSA6IDApO1xuICAgIHJldHVybiBbXG4gICAgICAgIFYuY2hhckF0KG4gPj4+IDE4KSxcbiAgICAgICAgVi5jaGFyQXQoKG4gPj4+IDEyKSAmIDYzKSxcbiAgICAgICAgZSA+PSAyID8gXCI9XCIgOiBWLmNoYXJBdCgobiA+Pj4gNikgJiA2MyksXG4gICAgICAgIGUgPj0gMSA/IFwiPVwiIDogVi5jaGFyQXQoNjMgJiBuKVxuICAgIF0uam9pbihcIlwiKTtcbn07XG52YXIgVyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5yZXBsYWNlKEcsIHopO1xuICAgIH0pKHQpLnJlcGxhY2UoL1tcXHNcXFNdezEsM30vZywgSyk7XG59O1xudmFyIFggPSBuZXcgUmVnRXhwKFtcIlvDgC3Dn11bwoAtwr9dXCIsIFwiW8OgLcOvXVvCgC3Cv117Mn1cIiwgXCJbw7Atw7ddW8KALcK/XXszfVwiXS5qb2luKFwifFwiKSwgXCJnXCIpO1xudmFyIFkgPSBmdW5jdGlvbiAodCkge1xuICAgIHN3aXRjaCAodC5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdmFyIGUgPVxuICAgICAgICAgICAgICAgICgoKDcgJiB0LmNoYXJDb2RlQXQoMCkpIDw8IDE4KSB8XG4gICAgICAgICAgICAgICAgICAgICgoNjMgJiB0LmNoYXJDb2RlQXQoMSkpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgICAgICgoNjMgJiB0LmNoYXJDb2RlQXQoMikpIDw8IDYpIHxcbiAgICAgICAgICAgICAgICAgICAgKDYzICYgdC5jaGFyQ29kZUF0KDMpKSkgLVxuICAgICAgICAgICAgICAgIDY1NTM2O1xuICAgICAgICAgICAgcmV0dXJuIHEoNTUyOTYgKyAoZSA+Pj4gMTApKSArIHEoNTYzMjAgKyAoMTAyMyAmIGUpKTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHEoKCgxNSAmIHQuY2hhckNvZGVBdCgwKSkgPDwgMTIpIHwgKCg2MyAmIHQuY2hhckNvZGVBdCgxKSkgPDwgNikgfCAoNjMgJiB0LmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBxKCgoMzEgJiB0LmNoYXJDb2RlQXQoMCkpIDw8IDYpIHwgKDYzICYgdC5jaGFyQ29kZUF0KDEpKSk7XG4gICAgfVxufTtcbnZhciBKID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IHQubGVuZ3RoO1xuICAgIHZhciBuID0gZSAlIDQ7XG4gICAgdmFyIHIgPVxuICAgICAgICAoZSA+IDAgPyBIW3QuY2hhckF0KDApXSA8PCAxOCA6IDApIHxcbiAgICAgICAgKGUgPiAxID8gSFt0LmNoYXJBdCgxKV0gPDwgMTIgOiAwKSB8XG4gICAgICAgIChlID4gMiA/IEhbdC5jaGFyQXQoMildIDw8IDYgOiAwKSB8XG4gICAgICAgIChlID4gMyA/IEhbdC5jaGFyQXQoMyldIDogMCk7XG4gICAgdmFyIG8gPSBbcShyID4+PiAxNiksIHEoKHIgPj4+IDgpICYgMjU1KSwgcSgyNTUgJiByKV07XG4gICAgby5sZW5ndGggLT0gWzAsIDAsIDIsIDFdW25dO1xuICAgIHJldHVybiBvLmpvaW4oXCJcIik7XG59O1xudmFyIFogPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQucmVwbGFjZSgvW1xcc1xcU117MSw0fS9nLCBKKTtcbiAgICB9KSh0KS5yZXBsYWNlKFgsIFkpO1xufTtcbnZhciBRID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgICByZXR1cm4gVyhTdHJpbmcodCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvWytcXC9dL2csIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiK1wiID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiLVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIl9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoLz0vZywgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFcoU3RyaW5nKHQpKTtcbiAgICB9XG59O1xudmFyICQgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBaKFxuICAgICAgICBTdHJpbmcodClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bLV9dL2csIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiLVwiID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiK1wiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIi9cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXS9nLCBcIlwiKVxuICAgICk7XG59O1xudmFyIGV0ID0gbmV3IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSBcIlwiO1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLnNldCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHQgPSBlO1xuICAgIH07XG4gICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgdGhpcy5nZXRJbXBPYmogPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfKCQodCkpO1xuICAgIH07XG4gICAgdGhpcy5nZXRJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIG4gPSBlLmdldEltcE9iaigpO1xuICAgICAgICByZXR1cm4gKG4gJiYgblt0XSkgfHwgXCJcIjtcbiAgICB9O1xuICAgIHRoaXMubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdCA9IGIoKS5nZXQodS5JTVBSSU5UKTtcbiAgICB9O1xuICAgIHRoaXMuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIGIoKS5zZXQodS5JTVBSSU5ULCB0KTtcbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiBudCh0LCBlLCBuLCBvKSB7XG4gICAgRC5pbnN0YW5jZSgpLnNldElkVHlwZShtKCkuZ2V0SWRUeXBlKCkpO1xuICAgIEQuaW5zdGFuY2UoKS5zZXRJZFRyYWNraW5nKG0oKS5nZXRJZFRyYWNraW5nKCkpO1xuICAgIHZhciBpID0gbSgpLmdldFVzZXJJZCgpO1xuICAgIGlmIChpICYmIHQuYW5hbHl0aWNzKSB7XG4gICAgICAgIHQuYW5hbHl0aWNzLmFjdGl2ZV91c2VyID0ge1xuICAgICAgICAgICAgcHVpZDogaSxcbiAgICAgICAgICAgIHByb3ZpZGVyOiBtKCkuZ2V0UHJvdmlkZXIoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgYSA9IGYuY2xvbmUoRC5pbnN0YW5jZSgpLmdldCgpKTtcbiAgICB0LmhlYWRlciA9IGYuYXNzaWduKGEsIHQuaGVhZGVyLCB7XG4gICAgICAgIHRzOiBEYXRlLm5vdygpLFxuICAgICAgICB0ZXN0VG9rZW46IGooKSxcbiAgICAgICAgdHJhY2VJZDogZi5nZXRSYW5kb21TdHIoMTApICsgRGF0ZS5ub3coKSArIGYuZ2V0UmFuZG9tU3RyKDkpXG4gICAgfSk7XG4gICAgdmFyIHM7XG4gICAgdmFyIGMgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGg6IEwodC5oZWFkZXIsIE8pLFxuICAgICAgICAgICAgYTogeCh0LmFuYWx5dGljcywgRSlcbiAgICAgICAgfTtcbiAgICB9KSh0KTtcbiAgICB2YXIgZCA9IHcoYyk7XG4gICAgdmFyIGggPSB7XG4gICAgICAgIHVybDogdS5FTkRQT0lOVCArIHUuTE9HX1VSTCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YTogUShkKSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBpID0gby5jb2RlIHx8IG8uc3RhdHVzIHx8IG8uc3RhdHVzQ29kZTtcbiAgICAgICAgICAgIGlmICgyMDAgPT09IGkgfHwgNDEzID09PSBpKSB7XG4gICAgICAgICAgICAgICAgcigpLmkoXCLmlbDmja7lj5HpgIHmiJDlip86IFwiLCB0LCBkKTtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuaW5zdGFuY2UoKS5zZXRJdGVtKHUuSU1QUklOVCwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldC5zZXQodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudihcImltcHJpbnQ6IFwiLCBldC5nZXRJbXBPYmooKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXQuZ2V0SXRlbShcInR0bl9pbnZhbGlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgoby5kYXRhIHx8IHt9KS5pbXByaW50KTtcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUgJiYgZShvKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcigpLncoXCLmlbDmja7lj5HpgIHlpLHotKU6IFwiLCBkKTtcbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4gJiYgbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByKCkudyhcIui2heaXtjogXCIsIGQpO1xuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbikge1xuICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG8pIHtcbiAgICAgICAgICAgICAgICBvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGwucmVxdWVzdChcbiAgICAgICAgZi5hc3NpZ24oaCwge1xuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogKHMgPSBsLmdldFNka1R5cGUoKSArIFwiL2pzb25cIiksXG4gICAgICAgICAgICAgICAgXCJNc2ctVHlwZVwiOiBzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcnQodCkge1xuICAgIHZhciBlID0gdDtcbiAgICB2YXIgbiA9IFtdO1xuICAgIHRoaXMuZW5xdWV1ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChcIm51bWJlclwiID09IHR5cGVvZiBlICYmIHRoaXMuc2l6ZSgpID49IGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG4ucHVzaCh0KTtcbiAgICB9O1xuICAgIHRoaXMuZGVxdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG4uc2hpZnQoKTtcbiAgICB9O1xuICAgIHRoaXMuZnJvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuWzBdO1xuICAgIH07XG4gICAgdGhpcy5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gMCA9PT0gbi5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICB0aGlzLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuLmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuaXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH07XG4gICAgdGhpcy5wcmludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2cobi50b1N0cmluZygpKTtcbiAgICB9O1xufVxudmFyIG90ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IG51bGw7XG4gICAgdmFyIGUgPSAhMTtcbiAgICB2YXIgbiA9IFtdO1xuICAgIHZhciBvID0gbmV3IHJ0KDUwKTtcblxuICAgIGZ1bmN0aW9uIGkodCwgZSwgbikge1xuICAgICAgICBpZiAoRC5pbnN0YW5jZSgpLmlzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIGUgPSBlIHx8IHt9O1xuICAgICAgICAgICAgdmFyIHIgPSBCKHQpO1xuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IEQuaW5zdGFuY2UoKS5nZXRSZWFsdGltZUZpZWxkcygpO1xuICAgICAgICAgICAgICAgIHIuaGVhZGVyID0gZi5hc3NpZ24oe30sIHIuaGVhZGVyLCBhKTtcbiAgICAgICAgICAgICAgICByLm5vQ2FjaGUgPSBlLm5vQ2FjaGU7XG4gICAgICAgICAgICAgICAgby5lbnF1ZXVlKHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbikge1xuICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGkodCwgZSwgbik7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYSh0KSB7XG4gICAgICAgIHZhciBlID0gby5mcm9udCgpO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgbnQoXG4gICAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG8uZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBhKHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG8uZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiAhZS5ub0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYSh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgby5lbnF1ZXVlKHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzKHQpIHtcbiAgICAgICAgaWYgKG0oKS5nZXRJZCgpKSB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIHIoKS5pKFwi6Zif5YiX5q2j5Zyo5Y+R6YCB5LitXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAoZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgYShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIoKS5pKFwi6I635Y+WaWTmoIfor4blpLHotKXvvIzmmoLnvJPlj5HpgIFcIik7XG4gICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYygpIHtcbiAgICAgICAgdGhpcy5zZW5kID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQodCwgZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzKG4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgICAgICBpKHQsIGUsIG4pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGIoKS5nZXQodS5SRVFVRVNUUyk7XG4gICAgICAgICAgICBpZiAodCAmJiB0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBvLmVucXVldWUodCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiKCkucmVtb3ZlKHUuUkVRVUVTVFMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiKCkuc2V0KHUuUkVRVUVTVFMsIGYuY2xvbmUoby5pdGVtcygpKSk7XG4gICAgICAgICAgICBvLmNsZWFyKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IG5ldyBjKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbn0pKCk7XG52YXIgaXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gbnVsbDtcbiAgICB2YXIgZSA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBuKCkge1xuICAgICAgICBmdW5jdGlvbiB0KHQpIHtcbiAgICAgICAgICAgIGlmICh0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGIoKS5nZXQodS5VU0VSX0lORk8pO1xuICAgICAgICAgICAgICAgIGlmIChlICYmIGYuZGVlcEVxdWFsKHQsIGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG8oKS5hcHBLZXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbC5nZXRTZGtUeXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG0oKS5nZXRJZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBtKCkuZ2V0SWRUeXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiAmJiBpICYmIGEgJiYgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhazogbygpLmFwcEtleSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZHQ6IGwuZ2V0U2RrVHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aW46IHQubmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpYTogdC5hdmF0YXIgfHwgdC5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZzogdC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpdDogdC5jb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aXA6IHQucHJvdmluY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpYzogdC5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWw6IHQubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtKCkuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQ6IG0oKS5nZXRJZFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOiB0LmFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xuOiB0LmNvbnN0ZWxsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gSlNPTi5zdHJpbmdpZnkoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZiA9IFEoZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1LkVORFBPSU5UICsgdS5VU0VSSU5GT19VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBcInVpPVwiICsgZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS52KFwi55So5oi35L+h5oGv5LiK5Lyg5oiQ5YqfOiBcIiwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUobiAmJiBuLmRhdGEgJiYgMjAwID09PSBuLmRhdGEuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS5lKFwi55So5oi35L+h5oGv5LiK5Lyg5aSx6LSlOiBcIiwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKHQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIoKS5zZXQodS5VU0VSX0lORk8sIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VXNlckluZm8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZSA9IHQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHQoZSkpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsLmdldFVzZXJJbmZvKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHQoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IG5ldyBuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGF0KHQsIGUpIHtcbiAgICB0aGlzLmlkID0gdDtcbiAgICB0aGlzLnRzID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbiA9IHR5cGVvZiBlO1xuICAgIGlmIChcInN0cmluZ1wiID09PSBuICYmIGUpIHtcbiAgICAgICAgdGhpc1t0XSA9IGU7XG4gICAgfSBlbHNlIGlmIChcIm9iamVjdFwiID09PSBuKSB7XG4gICAgICAgIGZvciAodmFyIHIgaW4gZSlcbiAgICAgICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHIpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tyXSA9IGVbcl07XG4gICAgICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdCgpIHtcbiAgICB2YXIgdCA9ICExO1xuICAgIHZhciBlID0gITE7XG4gICAgdmFyIG4gPSAwO1xuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHIoKS52KFwic2RrIHZlcnNpb246IFwiICsgdS5JTVBMX1ZFUlNJT04pO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgcigpLnYoXCJMaWLph43lpI3lrp7kvovljJZcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiKCkubG9hZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcigpLnYoXCJjYWNoZeWIneWni+WMluaIkOWKnzogXCIsIGIoKS5nZXRBbGwoKSk7XG4gICAgICAgICAgICAgICAgaWYgKG0oKS5zZXRVc2VPcGVuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbSgpLnNldFVzZU9wZW5pZChvKCkudXNlT3BlbmlkKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtKCkuaW5pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIEQuaW5zdGFuY2UoKS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHIoKS52KFwiSGVhZGVy5Yid5aeL5YyW5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHQgPSAhMDtcbiAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcigpLnRpcChcIlNES+mbhuaIkOaIkOWKn1wiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAodCAmJiAhZSkge1xuICAgICAgICAgICAgcigpLnYoXCJzaG93T3B0aW9uczogXCIsIG4pO1xuICAgICAgICAgICAgZSA9ICEwO1xuICAgICAgICAgICAgaWYgKG8oKS5lbmFibGVWZXJpZnkoKSAmJiBuICYmIG4ucXVlcnkpIHtcbiAgICAgICAgICAgICAgICBpID0gbi5xdWVyeS5fdHRuO1xuICAgICAgICAgICAgICAgIEYgPSBpIHx8IEY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZXN1bWUobik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuX3Jlc3VtZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIG90KCkubG9hZCgpO1xuICAgICAgICB2YXIgZSA9IFUoKS5yZXN1bWUodCk7XG4gICAgICAgIHZhciBuID0gVSgpLmdldEN1cnJlbnRTZXNzaW9uSWQoKTtcblxuICAgICAgICBmdW5jdGlvbiBpKHQsIGUpIHtcbiAgICAgICAgICAgIGlmIChtKCkuZ2V0SWQoKSB8fCB0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtKCkuZ2V0T3BlbklkQXN5bmMobygpLmFwcEtleSgpLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcigpLnYoXCLojrflj5ZpZOaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90KCkuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcigpLnYoXCLojrflj5ZvcGVuaWTlpLHotKUs5ZCv5Yqo6YeN6K+VLOWJqeS9meWPr+eUqOasoeaVsFwiLCB0IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKHQgLSAxLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUygpLnNldFNlc3Npb25JZChuKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIG90KCkuYWRkKFAsIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG0oKS5zZXRVc2VPcGVuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbSgpLnNldFVzZU9wZW5pZChvKCkudXNlT3BlbmlkKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobygpLnVzZU9wZW5pZCgpICYmIG8oKS5hdXRvR2V0T3BlbmlkKCkgJiYgIW0oKS5nZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHIoKS52KFwiZ2V0IGlkIGFzeW5jXCIpO1xuICAgICAgICAgICAgICAgICAgICBpKDEwLCAzZTMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHIoKS52KFwic2Vzc2lvbiBhdXRvIHNlbmRcIik7XG4gICAgICAgICAgICAgICAgICAgIG90KCkuc2VuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgICAgVSgpLnBhdXNlKCk7XG4gICAgICAgICAgICBpZiAobygpLnVwbG9hZFVzZXJJbmZvKCkpIHtcbiAgICAgICAgICAgICAgICBpdCgpLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3QoKS5zZW5kKFQsIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3QoKS5zYXZlKCk7XG4gICAgICAgICAgICAgICAgYigpLnNhdmUoKTtcbiAgICAgICAgICAgICAgICByKCkudihcImNhY2hlIHNhdmUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRPcGVuaWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByKCkudihcInNldE9wZW5JZDogJXNcIiwgdCk7XG4gICAgICAgIG0oKS5zZXRPcGVuaWQodCk7XG4gICAgICAgIG90KCkuc2VuZCgpO1xuICAgIH07XG4gICAgdGhpcy5zZXRVbmlvbmlkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcigpLnYoXCJzZXRVbmlvbmlkOiAlc1wiLCB0KTtcbiAgICAgICAgbSgpLnNldFVuaW9uaWQodCk7XG4gICAgfTtcbiAgICB0aGlzLnNldFVzZXJpZCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHIoKS52KFwic2V0VXNlcmlkOiAlc1wiLCB0LCBlKTtcbiAgICAgICAgbSgpLnNldFVzZXJpZCh0LCBlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0VXNlckluZm8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByKCkudihcInNldFVzZXJJbmZvOiAlc1wiLCB0KTtcbiAgICAgICAgaXQoKS5zZXRVc2VySW5mbyh0KTtcbiAgICB9O1xuICAgIHRoaXMuc2V0QW5vbnltb3VzaWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByKCkudihcInNldEFub255bW91c0lkOiAlc1wiLCB0KTtcbiAgICAgICAgbSgpLnNldEFub255bW91c2lkKHQpO1xuICAgICAgICBvdCgpLnNlbmQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0QXBwVmVyc2lvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgIHIoKS53KFwic2V0QXBwVmVyc2lvbuaWueazleWPquaOpeWPl+Wtl+espuS4suexu+Wei+WPguaVsFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEQuaW5zdGFuY2UoKS5zZXRBcHBWZXJzaW9uKHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldEFsaXBheVVzZXJpZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgIHIoKS53KFwic2V0QWxpcGF5VXNlcmlk5pa55rOV5Y+q5o6l5Y+X5a2X56ym5Liy57G75Z6L5Y+C5pWwXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcigpLnYoXCJzZXRBbGlwYXlVc2VyaWQ6ICVzXCIsIHQpO1xuICAgICAgICAgICAgbSgpLnNldEFsaXBheVVzZXJpZCh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXREZXZpY2VJZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgICBtKCkuc2V0RGV2aWNlSWQodCk7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRTdXBlclByb3BlcnR5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgcigpLncoXCLotoXnuqflsZ7mgKflj6rmlK/mjIHlrZfnrKbkuLLnsbvlnotcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoRC5pbnN0YW5jZSgpLmdldFN1cGVyUHJvcGVydHkoKSAhPT0gdCkge1xuICAgICAgICAgICAgICAgIEQuaW5zdGFuY2UoKS5zZXRTdXBlclByb3BlcnR5KHQpO1xuICAgICAgICAgICAgICAgIGUucGF1c2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlLnJlc3VtZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRyYWNrRXZlbnQgPSBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0ICYmXG4gICAgICAgICAgICAocigpLnYoXCJldmVudDogXCIsIGUsIG8pLFxuICAgICAgICAgICAgKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0IHx8IFwic3RyaW5nXCIgIT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcigpLmUoJ3BsZWFzZSBjaGVjayB0cmFja0V2ZW50IGlkLiBpZCBzaG91bGQgYmUgXCJzdHJpbmdcIiBhbmQgbm90IG51bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbiA9IFtcImlkXCIsIFwidHNcIiwgXCJkdVwiXTtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBvW3RdID0gMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob1t0XSkge1xuICAgICAgICAgICAgICAgICAgICByKCkuZShcImV2ZW50SWTkuI3og73kuI7ku6XkuIvkv53nlZnlrZflhrLnqoE6IFwiICsgbi5qb2luKFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHQubGVuZ3RoID4gdS5NQVhfRVZFTlRJRF9MRU5HVEgpIHtcbiAgICAgICAgICAgICAgICAgICAgcigpLmUoXCJUaGUgbWF4aW11bSBsZW5ndGggb2YgZXZlbnQgaWQgc2hhbGwgbm90IGV4Y2VlZCBcIiArIHUuTUFYX0VWRU5USURfTEVOR1RIKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZSAmJiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgZSB8fCBBcnJheS5pc0FycmF5KGUpKSAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHIoKS5lKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGVhc2UgY2hlY2sgdHJhY2tFdmVudCBwcm9wZXJ0aWVzLiBwcm9wZXJ0aWVzIHNob3VsZCBiZSBzdHJpbmcgb3Igb2JqZWN0KG5vdCBpbmNsdWRlIEFycmF5KVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhIGluIGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChlLCBhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmxlbmd0aCA+IHUuTUFYX1BST1BFUlRZX0tFWV9MRU5HVEgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcigpLmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBtYXhpbXVtIGxlbmd0aCBvZiBwcm9wZXJ0eSBrZXkgc2hhbGwgbm90IGV4Y2VlZCBcIiArIHUuTUFYX1BST1BFUlRZX0tFWV9MRU5HVEhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB1Lk1BWF9QUk9QRVJUWV9LRVlTX0NPVU5UKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS5lKFwiVGhlIG1heGltdW0gY291bnQgb2YgcHJvcGVydGllcyBzaGFsbCBub3QgZXhjZWVkIFwiICsgdS5NQVhfUFJPUEVSVFlfS0VZU19DT1VOVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9bYV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcigpLmUoXCLlsZ7mgKfkuK3nmoRrZXnkuI3og73kuI7ku6XkuIvkv53nlZnlrZflhrLnqoE6IFwiICsgbi5qb2luKFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICB9KShlLCBvKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG5ldyBhdChlLCBvKTtcbiAgICAgICAgICAgIFMoKS5hZGRFdmVudChpKTtcbiAgICAgICAgICAgIHZhciBhID0gISFqKCk7XG4gICAgICAgICAgICB2YXIgcztcbiAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgPSB1LkVWRU5UX1NFTkRfREVGQVVMVF9JTlRFUlZBTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChcIm51bWJlclwiICE9IHR5cGVvZiBuIHx8IFwibnVtYmVyXCIgIT0gdHlwZW9mIHMgfHwgbiA8PSAwIHx8IGMgLSBuID4gcykge1xuICAgICAgICAgICAgICAgIG4gPSBjO1xuICAgICAgICAgICAgICAgIG90KCkuc2VuZChcbiAgICAgICAgICAgICAgICAgICAgQSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9DYWNoZTogYVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7fVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudHJhY2tTaGFyZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChsLmdldFNka1R5cGUoKS5pbmRleE9mKFwiZ2FtZVwiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGUgPSB2KCkuYWRkKGUsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgcigpLnYoXCJzaGFyZVF1ZXJ5OiBcIiwgZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHYoKS5hZGQoZSwgITEpO1xuICAgICAgICAgICAgICAgICAgICByKCkudihcInNoYXJlUGF0aDogXCIsIGUucGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgIHIoKS52KFwic2hhcmVBcHBNZXNzYWdlOiBcIiwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICB0aGlzLnRyYWNrUGFnZVN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIGcoKS5hZGRQYWdlU3RhcnQoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudHJhY2tQYWdlRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIGcoKS5hZGRQYWdlRW5kKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBsLm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnRyYWNrU2hhcmUodCgpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMudHJhY2tTaGFyZSh0KTtcbiAgICAgICAgbC5zaGFyZUFwcE1lc3NhZ2UodCk7XG4gICAgfTtcbn1cbnZhciBjdCA9IFtdO1xuXG5mdW5jdGlvbiBsdCgpIHt9XG5sdC5wcm90b3R5cGUgPSB7XG4gICAgY3JlYXRlTWV0aG9kOiBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG4gJiYgbltlXSkge1xuICAgICAgICAgICAgICAgIHRbZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuW2VdLmFwcGx5KG4sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdFtlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3QucHVzaChbZSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgcigpLnYoXCJjcmVhdGUgbWV0aG9kIGVycnJvcjogXCIsIHQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbnN0YWxsQXBpOiBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpID1cbiAgICAgICAgICAgICAgICBcInJlc3VtZSxwYXVzZSx0cmFja0V2ZW50LHRyYWNrUGFnZVN0YXJ0LHRyYWNrUGFnZUVuZCx0cmFja1NoYXJlLHNldFVzZXJpZCxzZXRPcGVuaWQsc2V0QW5vbnltb3VzaWQsb25TaGFyZUFwcE1lc3NhZ2Usc2hhcmVBcHBNZXNzYWdlXCIuc3BsaXQoXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgICAgZm9yIChvID0gaS5sZW5ndGg7IG4gPCBvOyBuKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1ldGhvZCh0LCBpW25dLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgbiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChvID0gY3QubGVuZ3RoOyBuIDwgbzsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gY3Rbbl07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlW2FbMF1dLmFwcGx5KGUsIGFbMV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudihcImltcGxbdlswXV0uYXBwbHkgZXJyb3I6IFwiLCBhWzBdLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgcigpLnYoXCJpbnN0YWxsIGFwaSBlcnJyb3I6IFwiLCB0KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG52YXIgdXQgPSBbdS5FTkRQT0lOVCwgdS5FTkRQT0lOVEJdO1xuXG5mdW5jdGlvbiBmdCh0LCBlKSB7XG4gICAgdmFyIG47XG4gICAgdmFyIG87XG4gICAgaWYgKDAgPT09IHQgfHwgKDEgPT09IHQgJiYgZSkpIHtcbiAgICAgICAgbiA9IHUuRU5EUE9JTlQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKDIgPT09IHQgJiYgZSkge1xuICAgICAgICAgICAgbiA9IHUuRU5EUE9JTlRCO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSAmJiAobiA9IHV0W3RdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodCA+PSB1dC5sZW5ndGggfHwgZSkge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgbyA9IG47XG4gICAgICAgICAgICB1LkVORFBPSU5UID0gbztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgcigpLnYoXCLlkb3kuK3lj6/nlKjmnI3liqFcIiwgbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICByKCkudGlwX3coXCLmnKrlkb3kuK3lj6/nlKjmnI3liqFcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgIH1cbiAgICBsLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHUuRU5EUE9JTlQgKyBcIi91bWluaXByb2dyYW1fbG9ncy9ja2RoXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoMjAwID09PSAoZS5jb2RlIHx8IGUuc3RhdHVzIHx8IGUuc3RhdHVzQ29kZSkgJiYgZS5kYXRhICYmIDIwMCA9PT0gZS5kYXRhLmNvZGUpIHtcbiAgICAgICAgICAgICAgICBmdCh0ICsgMSwgITApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmdCh0ICsgMSwgITEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdCh0ICsgMSwgITEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5pZiAodS5FTkRQT0lOVEIpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnQoMCwgITEpO1xuICAgIH0sIDNlMyk7XG59XG52YXIgZHQgPSBuZXcgbHQoKTtcbnZhciBodCA9IHtcbiAgICBfaW5pdGVkOiAhMSxcbiAgICBfbG9nOiByKCksXG4gICAgcHJlaW5pdDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgZSBpbiB0KSB1W2VdID0gdFtlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdTtcbiAgICB9LFxuICAgIHVzZTogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHQgJiYgZi5pc0Z1bmN0aW9uKHQuaW5zdGFsbCkpIHtcbiAgICAgICAgICAgIHQuaW5zdGFsbChodCwgZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZi5pc0Z1bmN0aW9uKHQpKSB7XG4gICAgICAgICAgICAgICAgdChodCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0O1xuICAgIH0sXG4gICAgbWVzc2FnZXI6IGEsXG4gICAgaW5pdDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRlZCkge1xuICAgICAgICAgICAgcigpLnYoXCLlt7Lnu4/lrp7kvovov4fvvIzor7fpgb/lhY3ph43lpI3liJ3lp4vljJZcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodCkge1xuICAgICAgICAgICAgaWYgKHQuYXBwS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiYm9vbGVhblwiICE9IHR5cGVvZiB0LnVzZU9wZW5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0LnVzZU9wZW5pZCA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvKCkuc2V0KHQpO1xuICAgICAgICAgICAgICAgIHIoKS5zZXREZWJ1Zyh0LmRlYnVnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0ZWQgPSAhMDtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgYS5lbWl0KGEubWVzc2FnZVR5cGUuQ09ORklHX0xPQURFRCwgdCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcigpLnYoXCLmiJDlip/liJvlu7pMaWLlr7nosaFcIik7XG4gICAgICAgICAgICAgICAgICAgIG4uaW5pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudihcIkxpYuWvueixoeWIneWni+WMluaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR0Lmluc3RhbGxBcGkoZSwgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudihcIuWuieijhUxpYuaOpeWPo+aIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZW1pdChhLm1lc3NhZ2VUeXBlLlVNQV9MSUJfSU5JVEVELCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICAgICAgICByKCkudyhcIuWIm+W7ukxpYuWvueixoeW8guW4uDogXCIgKyB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIoKS5lcnIoXCLor7fnoa7kv53kvKDlhaXmraPnoa7nmoRhcHBrZXlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByKCkuZXJyKFwi6K+35q2j56Gu6K6+572u55u45YWz5L+h5oGv77yBXCIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbnRyeSB7XG4gICAgZHQuaW5zdGFsbEFwaShodCwgbnVsbCk7XG59IGNhdGNoIChuKSB7XG4gICAgcigpLncoXCJ1bWHotYvlgLzlvILluLg6IFwiLCBuKTtcbn1cbnZhciBwdCA9IFwiMi43LjFcIjtcbnZhciBtdCA9IFwibm9uZVwiO1xudmFyIGd0ID0ge307XG52YXIgeXQgPSBBcnJheS5pc0FycmF5O1xuZ3QuaXNBcnJheSA9XG4gICAgeXQgfHxcbiAgICBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSB0b1N0cmluZy5jYWxsKHQpO1xuICAgIH07XG5ndC5pc09iamVjdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQgPT09IE9iamVjdCh0KSAmJiAhZ3QuaXNBcnJheSh0KTtcbn07XG5ndC5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAoZ3QuaXNPYmplY3QodCkpIHtcbiAgICAgICAgZm9yICh2YXIgZSBpbiB0KVxuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodCwgZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiAhMDtcbiAgICB9XG4gICAgcmV0dXJuICExO1xufTtcbmd0LmlzVW5kZWZpbmVkID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdm9pZCAwID09PSB0O1xufTtcbmd0LmlzU3RyaW5nID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IFN0cmluZ11cIiA9PT0gdG9TdHJpbmcuY2FsbCh0KTtcbn07XG5ndC5pc0RhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBcIltvYmplY3QgRGF0ZV1cIiA9PT0gdG9TdHJpbmcuY2FsbCh0KTtcbn07XG5ndC5pc051bWJlciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBOdW1iZXJdXCIgPT09IHRvU3RyaW5nLmNhbGwodCk7XG59O1xuZ3QuZWFjaCA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgaWYgKG51bGwgIT0gdCkge1xuICAgICAgICB2YXIgciA9IHt9O1xuICAgICAgICB2YXIgbyA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICAgICAgICBpZiAobyAmJiB0LmZvckVhY2ggPT09IG8pIHtcbiAgICAgICAgICAgIHQuZm9yRWFjaChlLCBuKTtcbiAgICAgICAgfSBlbHNlIGlmICh0Lmxlbmd0aCA9PT0gK3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gdC5sZW5ndGg7IGkgPCBhOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGUuY2FsbChuLCB0W2ldLCBpLCB0KSA9PT0gcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgcyBpbiB0KVxuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHMpICYmIGUuY2FsbChuLCB0W3NdLCBzLCB0KSA9PT0gcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmd0LmJ1aWxkUXVlcnkgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgIHZhciBuO1xuICAgIHZhciByO1xuICAgIHZhciBvID0gW107XG4gICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICBlID0gXCImXCI7XG4gICAgfVxuICAgIGd0LmVhY2godCwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgbiA9IGVuY29kZVVSSUNvbXBvbmVudCh0LnRvU3RyaW5nKCkpO1xuICAgICAgICByID0gZW5jb2RlVVJJQ29tcG9uZW50KGUpO1xuICAgICAgICBvW28ubGVuZ3RoXSA9IHIgKyBcIj1cIiArIG47XG4gICAgfSk7XG4gICAgcmV0dXJuIG8uam9pbihlKTtcbn07XG5ndC5KU09ORGVjb2RlID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodCk7XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJKU09ORGVjb2RlIGVycm9yXCIsIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5ndC5KU09ORW5jb2RlID0gZnVuY3Rpb24gKHQpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiSlNPTkVuY29kZSBlcnJvclwiLCB0KTtcbiAgICB9XG59O1xudmFyIHZ0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gd3QodCkge1xuICAgIHIoKS52KFwi5byA5aeL5p6E5bu6IGZldGNoIGJvZHlcIik7XG4gICAgbC5nZXRTeXN0ZW1JbmZvKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGwuZ2V0TmV0d29ya0luZm8oZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHZhciByID0gKG4gPSBuIHx8IHt9KS5uZXR3b3JrVHlwZTtcbiAgICAgICAgICAgIGlmIChyID09PSBtdCkge1xuICAgICAgICAgICAgICAgIHIgPSBcInVua25vd25cIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZ0LmFjY2VzcyA9IHI7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHQuYnJhbmQgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICB2dC5kZXZpY2VUeXBlID0gXCJQaG9uZVwiO1xuICAgICAgICAgICAgICAgIHZ0LnNka1ZlcnNpb24gPSBwdDtcbiAgICAgICAgICAgICAgICB2dC5hcHBrZXkgPSBvKCkuYXBwS2V5KCk7XG4gICAgICAgICAgICAgICAgdnQuc2RrVHlwZSA9IGwuZ2V0U2RrVHlwZSgpO1xuICAgICAgICAgICAgICAgIHZ0LnVtaWQgPSBtKCkuZ2V0SWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICB2dC5sYW5ndWFnZSA9IHQubGFuZ3VhZ2UgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdnQub3MgPSB0Lk9TO1xuICAgICAgICAgICAgICAgICAgICB2dC5vc1ZlcnNpb24gPSB0Lk9TVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgdnQuZGV2aWNlTmFtZSA9IHQuZGV2aWNlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdnQucGxhdGZvcm1WZXJzaW9uID0gdC5wbGF0Zm9ybVZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgIHZ0LnBsYXRmb3JtU2RrVmVyc2lvbiA9IHQucGxhdGZvcm1TREtWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICB2dC5kZXZpY2VCcmFuZCA9IG47XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gdC5yZXNvbHV0aW9uLnNwbGl0KFwiKlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGd0LmlzQXJyYXkocikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ0LnJlc29sdXRpb25IZWlnaHQgPSBOdW1iZXIoclswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2dC5yZXNvbHV0aW9uV2lkdGggPSBOdW1iZXIoclsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdnQuaW5zdGFsbFRpbWUgPSB0Lmluc3RhbGxfZGF0ZXRpbWUgJiYgRGF0ZS5wYXJzZSh0Lmluc3RhbGxfZGF0ZXRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdnQuc2NlbmUgPSB0Lmluc3RhbGxfc2NlbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2dC5jaGFubmVsID0gdC5pbnN0YWxsX2NoYW5uZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2dC5jYW1wYWlnbiA9IHQuaW5zdGFsbF9jYW1wYWlnbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKGV0LmdldEltcE9iaigpKTtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlKHZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KShlLCB0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG52YXIgX3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGJ0ID0gbnVsbDtcbnZhciBTdCA9ICExO1xudmFyIGt0ID0ge1xuICAgIG1pbkZldGNoSW50ZXJ2YWxTZWNvbmRzOiA0MzIwMFxufTtcblxuZnVuY3Rpb24gQ3QodCkge1xuICAgIGlmICh0KSB7XG4gICAgICAgIGd0LmVhY2godCwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIF90W3Qua10gPSB0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIE10KCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLlNUT1JBR0VfTkFNRSA9IG51bGw7XG4gICAgYS5vbmNlKGEubWVzc2FnZVR5cGUuQ09ORklHX0xPQURFRCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcigpLnYoXCLkupHphY3liJ3lp4vljJblvIDlp4suLi5cIik7XG4gICAgICAgIHQuaW5pdChlKTtcbiAgICB9KTtcbn1cbk10LnByb3RvdHlwZSA9IHtcbiAgICBzZXREZWZhdWx0VmFsdWVzOiBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoU3QgJiYgZ3QuaXNPYmplY3QodCkpIHtcbiAgICAgICAgICAgIGd0LmVhY2godCwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RbZV0gJiYgX3RbZV0udikge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90W2VdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdjogdFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcigpLnYoXCLku47phY3nva7pobnkuK3or7vlj5YgdmFsdWUsIOW9k+WJjemFjee9ruS4ujogXCIsIF90KTtcbiAgICAgICAgcigpLnYoXCLlvoXor7vlj5bnmoQga2V5IDogXCIsIHQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFTdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlID0gX3RbdF0gfHwge307XG4gICAgICAgICAgICByKCkudihcIuivu+WPluebuOW6lOmFjee9rmluZy4uLiwg57uT5p6c5Li6OiBcIiwgZSk7XG4gICAgICAgICAgICBpZiAoZ3QuaXNOdW1iZXIoZS5lKSAmJiBndC5pc051bWJlcihlLmcpKSB7XG4gICAgICAgICAgICAgICAgcigpLnYoXCLor7vlj5bliLDnm7jlupTphY3nva4sIOW8gOWni+aVsOaNruS4iuaKpS4uLlwiKTtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBrZXk6IG8oKS5hcHBLZXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNka1R5cGU6IGwuZ2V0U2RrVHlwZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwSWQ6IHQgJiYgdC5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogdCAmJiB0LmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRUczogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdCAmJiB0LmssXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdCAmJiB0LnYsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bWlkOiBtKCkuZ2V0SWQoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9wc2xvZy51bWVuZy5jb20vbWluaV9hYmxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW2VdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIDIwMCA9PT0gdC5zdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkudihcIuS4iuS8oOaVsOaNruaIkOWKn1wiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS53KFwiYWJsb2cg6K+35rGC5oiQ5YqfLCDov5Tlm57nu5PmnpzlvILluLggXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkudyhcImFibG9nIOivt+axguaVsOaNrumUmeivryBcIiwgZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIoKS53KFwidXJlcXVlc3Qg6LCD55So6ZSZ6K+vXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZS52O1xuICAgICAgICB9IGNhdGNoIChvKSB7XG4gICAgICAgICAgICByKCkudyhcImdldFZhbHVlIGVycm9yLCBrZXk6IFwiLCB0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZlOiBmdW5jdGlvbiAodCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFTdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICBpZiAodCAmJiB0LnBhcmFtcykge1xuICAgICAgICAgICAgICAgIGUgPSB0LnBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ICYmIHQuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBuID0gdC5jYWxsYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIoKS52KFwi5r+A5rS76YWN572u6aG5OiBcIiwgZSk7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIHIoKS52KFwi5pys5Zyw5bey57yT5a2Y55qE6YWN572u6aG5OiBcIiwgX3QpO1xuICAgICAgICAgICAgICAgIEN0KGUpO1xuICAgICAgICAgICAgICAgIHIoKS52KFwi5ZCI5bm25ZCO55qE6YWN572u6aG5OiBcIiwgX3QpO1xuICAgICAgICAgICAgICAgIG4gJiYgbihfdCk7XG4gICAgICAgICAgICAgICAgcigpLnYoXCJhY3RpdmUg57uT5p2fXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByKCkudihcIumFjee9rumhueS4uuepuiEhIOivu+WPluacrOWcsOmFjee9ri4uLlwiKTtcbiAgICAgICAgICAgICAgICBsLmdldFN0b3JhZ2UodGhpcy5TVE9SQUdFX05BTUUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDdCgodCA9IGd0LkpTT05EZWNvZGUodCkgfHwge30pLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudihcIuW9k+WJjeacrOWcsOmFjee9rumhueS4ujogXCIsIF90KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gJiYgbihfdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudihcImFjdGl2ZSDnu5PmnZ9cIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCkudihcIuW9k+WJjeacrOWcsOmFjee9rumhueS4uuepuiwg6YCA5Ye65r+A5rS7XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgIHIoKS53KFwiU0RLIGFjdGl2ZSDplJnor69cIiwgdCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0LmFwcEtleSkge1xuICAgICAgICAgICAgYnQgPSB0LmFwcEtleTtcbiAgICAgICAgICAgIHRoaXMuU1RPUkFHRV9OQU1FID0gXCJ1bV9yZW1vdGVfY29uZmlnX3t7XCIgKyBidCArIFwifX1cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnQpIHtcbiAgICAgICAgICAgIGlmIChTdCkge1xuICAgICAgICAgICAgICAgIHIoKS53KFwiU0RLIOW3sue7j+WIneWni+WMliwg6K+36YG/5YWN6YeN5aSN5Yid5aeL5YyWXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAoU3QgPSAhMCksIHRoaXMuc2V0T3B0aW9ucyh0KSwgdGhpcy5hY3RpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIoKS5lcnIoXCLor7fmo4Dmn6XmgqjnmoTlsI/nqIvluo8gYXBwS2V5LCBhcHBLZXkg5LiN6IO95Li656m6XCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoZ3QuaXNPYmplY3QodCkpIHtcbiAgICAgICAgICAgIHZhciBlID0gdC5taW5GZXRjaEludGVydmFsU2Vjb25kcztcbiAgICAgICAgICAgIGlmIChndC5pc051bWJlcihlKSkge1xuICAgICAgICAgICAgICAgIGt0Lm1pbkZldGNoSW50ZXJ2YWxTZWNvbmRzID0gTWF0aC5tYXgoZSwgNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZldGNoOiBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoU3QgJiYgdGhpcy5TVE9SQUdFX05BTUUpIHtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICBpZiAodCAmJiB0LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGUgPSB0LmFjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ICYmIHQuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBuID0gdC5jYWxsYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgICAgIGwuZ2V0U3RvcmFnZSh0aGlzLlNUT1JBR0VfTkFNRSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByKCkudihcIuW8gOWni+ivu+e8k+WtmCBkYXRhIGlzIFwiLCB0KTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICh0ID0gZ3QuSlNPTkRlY29kZSh0KSB8fCB7fSkucGFyYW1zICYmXG4gICAgICAgICAgICAgICAgICAgIHQudHMgJiZcbiAgICAgICAgICAgICAgICAgICAgRGF0ZS5ub3coKSAtIHQudHMgPCAxZTMgKiBrdC5taW5GZXRjaEludGVydmFsU2Vjb25kc1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByKCkudihcIue8k+WtmOaVsOaNruWtmOWcqCwg5bm25LiU5pys5qyh6Kem5Y+R5pe26Ze06Led56a75LiK5qyhZmV0Y2jop6blj5Hml7bpl7TmnKrotoXov4cgZmV0Y2gg5pe26Ze06Ze06ZqULCDml6DpnIAgZmV0Y2hcIik7XG4gICAgICAgICAgICAgICAgICAgIG4gJiYgbih0LnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3QoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIoKS52KFwi57yT5a2Y5pWw5o2u5LiN5a2Y5ZyoLCDmnoTlu7ogZmV0Y2ggYm9keSA6XCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly91Y2MudW1lbmcuY29tL3YxL21pbmkvZmV0Y2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIDIwMCA9PT0gdC5zdGF0dXNDb2RlICYmIHQuZGF0YSAmJiB0LmRhdGEuY2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkudihcImZldGNoIOivt+axguaIkOWKnywg5ZON5bqU5pWw5o2uOiBcIiwgdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3QuZWFjaCh0LmRhdGEuY2MsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlbdC5rXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRzOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS52KFwi5byA5aeL57yT5a2YIGZldGNoIOivt+axgueahOS6kemFjee9rue7k+aenC4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnNldFN0b3JhZ2Uoby5TVE9SQUdFX05BTUUsIGd0LkpTT05FbmNvZGUoYSksIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS52KFwi57yT5a2Y5LqR6YWN572u5oiQ5YqfLCDnvJPlrZjmlbDmja7kuLo6IFwiLCBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcigpLnYoXCLnvJPlrZjkupHphY3nva7miJDlip8sIOaIkOWKn+a2iOaBr+S4ujogXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkudihcIuS6kemFjeaLieWPluaVsOaNruaYr+WQpuiHquWKqOa/gOa0uzogXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkudihcIua/gOa0u+S6kemFjee9ri4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uYWN0aXZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS53KFwiZmV0Y2gg6K+35rGC5oiQ5YqfLOi/lOWbnue7k+aenOW8guW4uCBcIiwgdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuICYmIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoKS53KFwiZmV0Y2jor7fmsYLmlbDmja7plJnor68gXCIsIHQsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCkudyhcInVyZXF1ZXN06LCD55So6ZSZ6K+vXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG52YXIgUHQgPSB7XG4gICAgaW5zdGFsbDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQucmMpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0LnJjID0gbmV3IE10KCk7XG4gICAgICAgIH1cbiAgICAgICAgdC5tZXNzYWdlci5vbmNlKHQubWVzc2FnZXIubWVzc2FnZVR5cGUuQ09ORklHX0xPQURFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5fbG9nLnYoXCJwbHVnaW4gcmMgaW5zdGFsbGVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHQucmM7XG4gICAgfVxufTtcbnZhciBUdCA9IFwiX3VtXCI7XG52YXIgQXQgPSBcInJldmVudWVcIjtcbnZhciBJdCA9IFwic3RhZ2VcIjtcbnZhciBEdCA9IFwibGV2ZWxcIjtcbnZhciBVdCA9IFwicnVubmluZ1wiO1xudmFyIEJ0ID0gXCJlbmRcIjtcbnZhciBFdCA9IFwiaW5pdFwiO1xudmFyIE90ID0gXCJzZXRcIjtcbnZhciBSdCA9IFtUdCwgSXQsIFwic3RhcnRcIl0uam9pbihcIi5cIik7XG5cbmZ1bmN0aW9uIEx0KHQpIHtcbiAgICB2YXIgZSA9IHt9O1xuICAgIGZvciAodmFyIG4gaW4gdCkge1xuICAgICAgICB2YXIgciA9IHRbbl07XG4gICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiByKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBvIGluIHIpIGVbbiArIFwiLlwiICsgb10gPSByW29dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZVtuXSA9IHI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGU7XG59XG52YXIgTnQgPSB7XG4gICAgaW5zdGFsbDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdC5yZXZlbnVlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHQudHJhY2tFdmVudChbVHQsIEF0LCBlLmdyb3VwXS5qb2luKFwiLlwiKSwgTHQoZSkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgZSA9IDA7XG4gICAgICAgIHQuc3RhZ2UgPSB7XG4gICAgICAgICAgICBvblN0YXJ0OiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHQudHJhY2tFdmVudChSdCwgTHQobikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGlmIChcIm51bWJlclwiICE9IHR5cGVvZiBuLl91bV9zZHUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgIT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uX3VtX3NkdSA9IERhdGUubm93KCkgLSBlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5fdW1fc2R1ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LnRyYWNrRXZlbnQoW1R0LCBJdCwgQnQsIG4uZXZlbnRdLmpvaW4oXCIuXCIpLCBMdChuKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25SdW5uaW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHQudHJhY2tFdmVudChbVHQsIEl0LCBVdCwgZS5ldmVudF0uam9pbihcIi5cIiksIEx0KGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdC5sZXZlbCA9IHtcbiAgICAgICAgICAgIG9uSW5pdExldmVsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHQudHJhY2tFdmVudChbVHQsIER0LCBFdF0uam9pbihcIi5cIiksIEx0KGUpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNldExldmVsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHQudHJhY2tFdmVudChbVHQsIER0LCBPdF0uam9pbihcIi5cIiksIEx0KGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdC5tZXNzYWdlci5vbmNlKHQubWVzc2FnZXIubWVzc2FnZVR5cGUuQ09ORklHX0xPQURFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5fbG9nLnYoXCJwbHVnaW4gZ2FtZS1leHQgaW5zdGFsbGVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxufTtcbmlmICh3aW5kb3cudHQpIHtcbiAgICB0dC5vblNob3coZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHIoKS52KFwiZ2FtZSBvblNob3c6IFwiLCB0KTtcbiAgICAgICAgZSA9IHQucXVlcnk7XG4gICAgICAgIHkgPSBlO1xuICAgICAgICBodC5yZXN1bWUodCwgITApO1xuICAgIH0pO1xufVxuaWYgKHdpbmRvdy50dCkge1xuICAgIHR0Lm9uSGlkZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHIoKS52KFwiZ2FtZSBvbkhpZGVcIik7XG4gICAgICAgIGh0LnBhdXNlKCk7XG4gICAgfSk7XG59XG52YXIgeHQgPSBodC5pbml0O1xuaHQuaW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgaWYgKHQgJiYgdC51c2VPcGVuaWQpIHtcbiAgICAgICAgcigpLnRpcF93KHIoKS5yZXBlYXQoXCIhXCIpKTtcbiAgICAgICAgcigpLnRpcF93KFxuICAgICAgICAgICAgXCLmgqjpgInmi6nkuobkvb/nlKhvcGVuaWTov5vooYznu5/orqHvvIzor7fnoa7kv53kvb/nlKhzZXRPcGVuaWTlm57kvKBvcGVuaWTmiJbpgJrov4forr7nva5hdXRvR2V0T3Blbmlk5Li6dHJ1Ze+8jOW5tuWcqOWPi+ebn+WQjuWPsOiuvue9rnNlY3JldOeUseWPi+ebn+W4ruaCqOiOt+WPllwiXG4gICAgICAgICk7XG4gICAgICAgIHIoKS50aXBfdyhyKCkucmVwZWF0KFwiIVwiKSk7XG4gICAgfVxuICAgIHh0LmNhbGwoaHQsIHQpO1xufTtcbmh0LnVzZShQdCk7XG5odC51c2UoTnQpO1xuaWYgKHdpbmRvdy50dCkge1xuICAgIHR0LnVtYSA9IGh0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBodDtcbiJdfQ==