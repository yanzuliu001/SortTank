
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BmsManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40a5e6y7ZtPq5+OZDi3Jdpj', 'BmsManager');
// scripts/BmsManager.js

"use strict";

exports.BMS = void 0;

var $encrypt = require("./Encrypt");

var a = "https://game.zuiqiangyingyu.net/";
var s = [99, 111, 109, 104, 101, 105, 115, 107, 47, 110];
var c = "";
[8, 0, 1, 2, 2, 1, 9, 8, 0, 3, 4, 0, 7, 8, 5, 6].forEach(function (t) {
  c += String.fromCharCode(s[t]);
});

var l = function () {
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
              return this._isInit = !0, console.log("[bms] appname: " + t + " version:" + e), this.encryptUtils = new $encrypt.Encrypt(), this.randomStr = this.randomString(32), r = (r = (r = this.encryptUtils.encrypt(this.randomStr)).replace(/\+/g, "_")).replace(/\//g, "-"), this.encrXToken = r, console.log("xToken", this.randomStr, r, this.encryptUtils.decrypt("eQ/D8jqCgufjKsoA0IGORmgLfHAnKj5A/TD/Kvuj8S4VFAFnBAh8BP1UzQ5ib7gsnjidwS226EUATBbmF8AxwnWvUWBYq9FlgFexWJsBQiw=")), s = cc.sys, c = s.platform, [4, this.getBmsConfig(t, e)];
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
              return [4, this.request("GET", a + "common/is/is", {
                app_name: t
              })];

            case 1:
              if (e = o.sent()) {
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
              return [4, this.request("GET", a + "common/is/v2/ml", {
                app_name: t,
                channel: e,
                version: n
              })];

            case 1:
              if (r = o.sent()) {
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
              return [4, this.request("GET", "https://op-data.zuiqiangyingyu.net/common/is/v2/is", {
                app_name: t,
                channel: e,
                version: n
              })];

            case 1:
              if (r = o.sent()) {
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
              n = a == r.IPHONE || a == r.IPAD ? "https://bms.yarkgame.com/" : "https://game.zuiqiangyingyu.net/";
              return window.haiwai || !window.ChinaConfig ? [3, 1] : (s = window.ChinaConfig, [3, 3]);

            case 1:
              return [4, this.request("GET", n + "common/config/info", {
                app_name: t,
                version: e
              })];

            case 2:
              s = o.sent();
              o.label = 3;

            case 3:
              console.log("[BMS] 参数", s);

              if (s) {
                try {
                  c = (c = JSON.parse(s)).data;

                  for (l in c) {
                    this.data[l] = c[l];
                  }

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
              return [4, this.request("GET", "https://game.zuiqiangyingyu.net/common/game-data/multi-get", {
                app_name: t,
                uuid: e,
                d_keys: n
              })];

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
              return [4, this.post_("https://game.zuiqiangyingyu.net/common/game-data/save", {
                app_name: t,
                uuid: e,
                d_key: n,
                d_data: i
              })];

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
    for (var e in t) {
      this.data[e] = t[e];
    }
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
              return [4, this.request("GET", a + c, {
                token: t
              }, !0)];

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
              return [4, this.request("GET", a + "common/game/share_list", {
                app_name: t
              })];

            case 1:
              if (e = o.sent()) {
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
      for (var i in t += "?", e) {
        t += i + "=" + e[i] + "&";
      }

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

    for (var n in t) {
      e.push(n);
    }

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
      for (var n in Object.keys(t).length > 0 && (e += "?"), t) {
        "?" != e && (e += "&"), e += n + "=" + t[n];
      }
    }

    return e;
  };

  return t;
}();

exports.BMS = new l();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0Jtc01hbmFnZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIkJNUyIsIiRlbmNyeXB0IiwicmVxdWlyZSIsImEiLCJzIiwiYyIsImZvckVhY2giLCJ0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibCIsImRlZmF1bHREYXRhIiwiVGlMaSIsIld1eGlhblRpTGkiLCJCdWNob25nVGlMaSIsImZ1bGxBZHNUeXBlIiwiZnVsbFNjcmVlbkFkIiwic3RhcnRXaW5GdWxsU2NyZWVuQWQiLCJzcGFjZVdpbkZ1bGxTY3JlZW5BZCIsInNwYWNlV2luRnVsbFNjcmVlbkFkTkQiLCJzdGFydExldmVsV2luRnVsbFNjcmVlbkFkcyIsInNwYWNlTGV2ZWxXaW5GdWxsU2NyZWVuQWQiLCJpc0F1ZGl0aW5nIiwiUGF0dGVybnNTdGF0ZSIsImlzQXVkaXRpbmdMZXZlbE1hcCIsIkFkSW50ZXJ2YWxzIiwiYmFubmVyQWRJbnRlcnZhbHMiLCJEb3duRFQiLCJpc2Jhbm5lciIsImJhbkNsb3NlQ2hhbmNlIiwiZnVsbFNldHRsZUNoYW5jZSIsImZ1bGxDaGFuY2UiLCJmdWxsQ2xpY2tOdW0iLCJmdWxsQWRDaGFuY2UiLCJmdWxsQ2xvc2VDaGFuY2UiLCJ2aWRlb0V4IiwiaXNDaGVjayIsIm5hdElkIiwibmF0SWQxIiwibmF0SWQyIiwibmF0SWQzIiwiR00iLCJ1Z2MiLCJ1Z2NhZCIsIm5ld21vZGVhZCIsImV2YWx1YXRlYnRuZGVsYXkiLCJldmFsdWF0ZWx2IiwiZXZhbHVhdGVzdGFyIiwieXM1eDUiLCJmcmVla2V5bHYiLCJmcmVla2V5Y2hhbmNlIiwibHZpbnlzNXg1bHYiLCJsdmlueXM1eDVjaGFuY2UiLCJrZXlWaWRlbyIsIm5hdGl2ZWFkIiwiRnJpZW5kSGVscCIsImNvbmZpZ1N1ZmZpeCIsIm9wZW5rcCIsInRpbWVUQyIsImlwIiwib3BlbmFkcyIsIm9wZW52aWRlbyIsIm5leHRBZENoYW5nZSIsIlVubG9ja1RoZW1lTWFpbkx2IiwiVW5sb2NrVGhlbWVTdWJMdiIsIlVubG9ja1RoZW1lTGlzdCIsIkFsbFRoZW1lVW5sb2NrIiwic3BsYXNoIiwiaXNmYWtlaWNvbiIsImxldmVsc3BhY2UiLCJob21lY2hhbmNlIiwiYXBwY2hhbmNlIiwibWFpbk1vZGVJRCIsImNoYW5nZVN0YWdlIiwic2hhcmUiLCJsYW5ndWFnZSIsInNjcmV3VGltZSIsIlBhY2thZ2VQcmljZSIsImlzU3RvcmUiLCJpc0JhY2tidG4iLCJiYWNrTnVtIiwiaXNCdG52aWRlbyIsImlzUGxheSIsImlzSXRlbXMiLCJpdGVtTnVtIiwibm9ybWFsdXNlciIsIkF1dG9GdWxsU2NyZWVuQWQiLCJVbnNjcmV3VGlja2V0IiwiaXNVbnNjcmV3YnRuIiwiUmVwbGF5U3RhcnRTY3JlZW5BZCIsIkhpZGVNb2RlIiwiaXRlbVZpZGVvIiwiQmFja0hvbWVBZCIsIkxldmVsU29ydCIsInBhcms1IiwiZGF0YSIsInNoYXJlTGlzdCIsIl9pc0luaXQiLCJyYW5kb21TdHIiLCJlbmNyWFRva2VuIiwiZW5jcnlwdFV0aWxzIiwiZGF0ZSIsIkRhdGUiLCJoZWFkZXJzIiwicHJvdG90eXBlIiwiaW5pdCIsImUiLCJuIiwiX19hd2FpdGVyIiwiUHJvbWlzZSIsInIiLCJfX2dlbmVyYXRvciIsIm8iLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJFbmNyeXB0IiwicmFuZG9tU3RyaW5nIiwiZW5jcnlwdCIsInJlcGxhY2UiLCJkZWNyeXB0IiwiY2MiLCJzeXMiLCJwbGF0Zm9ybSIsImdldEJtc0NvbmZpZyIsInNlbnQiLCJnZXRTaGllbGRJUENvbmZpZzIiLCJJUEhPTkUiLCJJUEFEIiwiZ2V0U2hhcmVDb25maWciLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2hpZWxkSVBDb25maWciLCJyZXF1ZXN0IiwiYXBwX25hbWUiLCJwYXJzZSIsImlzU2hpZWxkSVAiLCJpc19lbmFibGUiLCJpIiwiZ2V0VGltZSIsImdldElQQWJyb2FkIiwiY2hhbm5lbCIsInZlcnNpb24iLCJpc19tbCIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwiY2hhbmdlS2V5Iiwid2luZG93IiwiaGFpd2FpIiwiQ2hpbmFDb25maWciLCJ1IiwiZ2V0U2VydmVyRGF0YSIsInV1aWQiLCJkX2tleXMiLCJzYXZlU2VydmVyRGF0YSIsInBvc3RfIiwiZF9rZXkiLCJkX2RhdGEiLCJzZXREZWZhdWx0RGF0YSIsImpzb25wQ2hlY2siLCJ0b2tlbiIsImNvZGUiLCJkaSIsInhfdG9rZW4iLCJjbG9zZVZpZXciLCJnYW1lIiwiZW5kIiwiY2xvc2UiLCJ3cm9uZ2Z1bCIsImxlbmd0aCIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxpc3QiLCJnZXRLZXkiLCJjaGVja0tleSIsImdldElzR1MiLCJnZXRJUElTSG9tZSIsImdldFNoYXJlTGlzdCIsImdldCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwib25lcnJvciIsIm9udGltZW91dCIsInBvc3QiLCJmb3JtYXRQb3N0RGF0YSIsInB1c2giLCJzb3J0Iiwib25Ub2tlblBvc3RGYWlsIiwib25Ub2tlblJlc3BvbmRGYWlsIiwicG9zdDIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsInRpbWVvdXQiLCJyZXNwb25zZVRleHQiLCJwYXJhbUZvcm1hdDJVcmxTdHIiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLEdBQVIsR0FBYyxLQUFLLENBQW5COztBQUNBLElBQUlDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdEI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHLGtDQUFSO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QixHQUE5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QUNDLEdBQVIsR0FBYyxJQUFJVSxDQUFKLEVBQWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuQk1TID0gdm9pZCAwO1xudmFyICRlbmNyeXB0ID0gcmVxdWlyZShcIi4vRW5jcnlwdFwiKTtcbnZhciBhID0gXCJodHRwczovL2dhbWUuenVpcWlhbmd5aW5neXUubmV0L1wiO1xudmFyIHMgPSBbOTksIDExMSwgMTA5LCAxMDQsIDEwMSwgMTA1LCAxMTUsIDEwNywgNDcsIDExMF07XG52YXIgYyA9IFwiXCI7XG5bOCwgMCwgMSwgMiwgMiwgMSwgOSwgOCwgMCwgMywgNCwgMCwgNywgOCwgNSwgNl0uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgIGMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzW3RdKTtcbn0pO1xudmFyIGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdERhdGEgPSB7XG4gICAgICAgICAgICBUaUxpOiAwLFxuICAgICAgICAgICAgV3V4aWFuVGlMaTogMCxcbiAgICAgICAgICAgIEJ1Y2hvbmdUaUxpOiAyMCxcbiAgICAgICAgICAgIGZ1bGxBZHNUeXBlOiAwLFxuICAgICAgICAgICAgZnVsbFNjcmVlbkFkOiBcIm5vXCIsXG4gICAgICAgICAgICBzdGFydFdpbkZ1bGxTY3JlZW5BZDogNSxcbiAgICAgICAgICAgIHNwYWNlV2luRnVsbFNjcmVlbkFkOiA1LFxuICAgICAgICAgICAgc3BhY2VXaW5GdWxsU2NyZWVuQWRORDogNSxcbiAgICAgICAgICAgIHN0YXJ0TGV2ZWxXaW5GdWxsU2NyZWVuQWRzOiA1LFxuICAgICAgICAgICAgc3BhY2VMZXZlbFdpbkZ1bGxTY3JlZW5BZDogNSxcbiAgICAgICAgICAgIGlzQXVkaXRpbmc6IDAsXG4gICAgICAgICAgICBQYXR0ZXJuc1N0YXRlOiAwLFxuICAgICAgICAgICAgaXNBdWRpdGluZ0xldmVsTWFwOiAxLFxuICAgICAgICAgICAgQWRJbnRlcnZhbHM6IDAsXG4gICAgICAgICAgICBiYW5uZXJBZEludGVydmFsczogMCxcbiAgICAgICAgICAgIERvd25EVDogWzAsIDBdLFxuICAgICAgICAgICAgaXNiYW5uZXI6IDAsXG4gICAgICAgICAgICBiYW5DbG9zZUNoYW5jZTogMCxcbiAgICAgICAgICAgIGZ1bGxTZXR0bGVDaGFuY2U6IDAsXG4gICAgICAgICAgICBmdWxsQ2hhbmNlOiAwLFxuICAgICAgICAgICAgZnVsbENsaWNrTnVtOiAwLFxuICAgICAgICAgICAgZnVsbEFkQ2hhbmNlOiAwLFxuICAgICAgICAgICAgZnVsbENsb3NlQ2hhbmNlOiAwLFxuICAgICAgICAgICAgdmlkZW9FeDogMCxcbiAgICAgICAgICAgIGlzQ2hlY2s6IDEsXG4gICAgICAgICAgICBuYXRJZDogXCJcIixcbiAgICAgICAgICAgIG5hdElkMTogXCJcIixcbiAgICAgICAgICAgIG5hdElkMjogXCJcIixcbiAgICAgICAgICAgIG5hdElkMzogXCJcIixcbiAgICAgICAgICAgIEdNOiAxLFxuICAgICAgICAgICAgdWdjOiAwLFxuICAgICAgICAgICAgdWdjYWQ6IDAsXG4gICAgICAgICAgICBuZXdtb2RlYWQ6IDAsXG4gICAgICAgICAgICBldmFsdWF0ZWJ0bmRlbGF5OiAwLFxuICAgICAgICAgICAgZXZhbHVhdGVsdjogWzEyZTUsIDI1ZTUsIDVlNl0sXG4gICAgICAgICAgICBldmFsdWF0ZXN0YXI6IDQsXG4gICAgICAgICAgICB5czV4NTogMCxcbiAgICAgICAgICAgIGZyZWVrZXlsdjogMCxcbiAgICAgICAgICAgIGZyZWVrZXljaGFuY2U6IDAsXG4gICAgICAgICAgICBsdmlueXM1eDVsdjogMCxcbiAgICAgICAgICAgIGx2aW55czV4NWNoYW5jZTogMCxcbiAgICAgICAgICAgIGtleVZpZGVvOiAwLFxuICAgICAgICAgICAgbmF0aXZlYWQ6IDAsXG4gICAgICAgICAgICBGcmllbmRIZWxwOiAxZTQsXG4gICAgICAgICAgICBjb25maWdTdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICBvcGVua3A6IDAsXG4gICAgICAgICAgICB0aW1lVEM6IDMwLFxuICAgICAgICAgICAgaXA6IDAsXG4gICAgICAgICAgICBvcGVuYWRzOiAxLFxuICAgICAgICAgICAgb3BlbnZpZGVvOiAxLFxuICAgICAgICAgICAgbmV4dEFkQ2hhbmdlOiAwLFxuICAgICAgICAgICAgVW5sb2NrVGhlbWVNYWluTHY6IFswLCAwXSxcbiAgICAgICAgICAgIFVubG9ja1RoZW1lU3ViTHY6IFswLCAwXSxcbiAgICAgICAgICAgIFVubG9ja1RoZW1lTGlzdDogW10sXG4gICAgICAgICAgICBBbGxUaGVtZVVubG9jazogMCxcbiAgICAgICAgICAgIHNwbGFzaDogMCxcbiAgICAgICAgICAgIGlzZmFrZWljb246IDAsXG4gICAgICAgICAgICBsZXZlbHNwYWNlOiAtMSxcbiAgICAgICAgICAgIGhvbWVjaGFuY2U6IDAsXG4gICAgICAgICAgICBhcHBjaGFuY2U6IDAsXG4gICAgICAgICAgICBtYWluTW9kZUlEOiAwLFxuICAgICAgICAgICAgY2hhbmdlU3RhZ2U6IDAsXG4gICAgICAgICAgICBzaGFyZTogXCJub1wiLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IFwiemhcIixcbiAgICAgICAgICAgIHNjcmV3VGltZTogMTgwLFxuICAgICAgICAgICAgUGFja2FnZVByaWNlOiBbMy45OSwgMi45OSwgMy45OSwgNC45OSwgNS45OV0sXG4gICAgICAgICAgICBpc1N0b3JlOiBbXSxcbiAgICAgICAgICAgIGlzQmFja2J0bjogMCxcbiAgICAgICAgICAgIGJhY2tOdW06IDEsXG4gICAgICAgICAgICBpc0J0bnZpZGVvOiAxLFxuICAgICAgICAgICAgaXNQbGF5OiAxLFxuICAgICAgICAgICAgaXNJdGVtczogW1wiVVNcIl0sXG4gICAgICAgICAgICBpdGVtTnVtOiBbMSwgMSwgMSwgMV0sXG4gICAgICAgICAgICBub3JtYWx1c2VyOiBbMF0sXG4gICAgICAgICAgICBBdXRvRnVsbFNjcmVlbkFkOiAwLFxuICAgICAgICAgICAgVW5zY3Jld1RpY2tldDogMCxcbiAgICAgICAgICAgIGlzVW5zY3Jld2J0bjogMSxcbiAgICAgICAgICAgIFJlcGxheVN0YXJ0U2NyZWVuQWQ6IDAsXG4gICAgICAgICAgICBIaWRlTW9kZTogW10sXG4gICAgICAgICAgICBpdGVtVmlkZW86IDAsXG4gICAgICAgICAgICBCYWNrSG9tZUFkOiAwLFxuICAgICAgICAgICAgTGV2ZWxTb3J0OiBbXSxcbiAgICAgICAgICAgIHBhcms1OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLnNoYXJlTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLl9pc0luaXQgPSAhMTtcbiAgICAgICAgdGhpcy5yYW5kb21TdHIgPSBudWxsO1xuICAgICAgICB0aGlzLmVuY3JYVG9rZW4gPSBudWxsO1xuICAgICAgICB0aGlzLmVuY3J5cHRVdGlscyA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHt9O1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQsIGUsIG4sIGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIHM7XG4gICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNJbml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX2lzSW5pdCA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbYm1zXSBhcHBuYW1lOiBcIiArIHQgKyBcIiB2ZXJzaW9uOlwiICsgZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmVuY3J5cHRVdGlscyA9IG5ldyAkZW5jcnlwdC5FbmNyeXB0KCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5yYW5kb21TdHIgPSB0aGlzLnJhbmRvbVN0cmluZygzMikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IChyID0gKHIgPSB0aGlzLmVuY3J5cHRVdGlscy5lbmNyeXB0KHRoaXMucmFuZG9tU3RyKSkucmVwbGFjZSgvXFwrL2csIFwiX1wiKSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9cXC8vZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5lbmNyWFRva2VuID0gciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ4VG9rZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tU3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5jcnlwdFV0aWxzLmRlY3J5cHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlUS9EOGpxQ2d1ZmpLc29BMElHT1JtZ0xmSEFuS2o1QS9URC9LdnVqOFM0VkZBRm5CQWg4QlAxVXpRNWliN2dzbmppZHdTMjI2RVVBVEJibUY4QXh3bld2VVdCWXE5RmxnRmV4V0pzQlFpdz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocyA9IGNjLnN5cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID0gcy5wbGF0Zm9ybSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFs0LCB0aGlzLmdldEJtc0NvbmZpZyh0LCBlKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBvLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICYmIDAgPT0gdGhpcy5kYXRhLmlzQ2hlY2sgPyBbNCwgdGhpcy5nZXRTaGllbGRJUENvbmZpZzIodCwgYSwgZSldIDogWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPSBzLklQSE9ORSAmJiBjICE9IHMuSVBBRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5nZXRTaGFyZUNvbmZpZyh0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgby5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbYm1zXSBkYXRhOlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTaGllbGRJUENvbmZpZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKGUsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdChcIkdFVFwiLCBhICsgXCJjb21tb24vaXMvaXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwX25hbWU6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZSA9IG8uc2VudCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IChyID0gSlNPTi5wYXJzZShlKSkuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pc1NoaWVsZElQID0gci5pc19lbmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLnJlcXVlc3QoXCJHRVRcIiwgYSArIFwiY29tbW9uL2NvbW1vbi90aW1lXCIsIHt9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHIuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0JNU10g5Y+C5pWwXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gKG4gPSBKU09OLnBhcnNlKHQpKS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRJUEFicm9hZCA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKGksIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdChcIkdFVFwiLCBhICsgXCJjb21tb24vaXMvdjIvbWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwX25hbWU6IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyID0gby5zZW50KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gKGkgPSBKU09OLnBhcnNlKHIpKS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRJUEFicm9hZFwiLCBpLmlzX21sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pc19tbCA9IGkuaXNfbWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBpLmlzX21sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIkFwcENvbnRyb2xsZXJcIiwgXCJnYWluQ3VycmVudElwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFNoaWVsZElQQ29uZmlnMiA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKGksIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdChcIkdFVFwiLCBcImh0dHBzOi8vb3AtZGF0YS56dWlxaWFuZ3lpbmd5dS5uZXQvY29tbW9uL2lzL3YyL2lzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9uYW1lOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgociA9IG8uc2VudCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IChpID0gSlNPTi5wYXJzZShyKSkuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pc1NoaWVsZElQID0gaS5pc19lbmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBpLmlzX2VuYWJsZSAmJiAxID09IHRoaXMuZGF0YS5pcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlS2V5KFwiaXNDaGVja1wiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW5v+a3seWcsOWMujog5YWz6Zet5bm/5ZGK562W55WlXCIsIFwiaXNDaGVja1wiLCB0aGlzLmRhdGEuaXNDaGVjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0Qm1zQ29uZmlnID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIobiwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICB2YXIgcztcbiAgICAgICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgICAgICB2YXIgbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IGNjLnN5cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gci5wbGF0Zm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9PSByLklQSE9ORSB8fCBhID09IHIuSVBBRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImh0dHBzOi8vYm1zLnlhcmtnYW1lLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImh0dHBzOi8vZ2FtZS56dWlxaWFuZ3lpbmd5dS5uZXQvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5oYWl3YWkgfHwgIXdpbmRvdy5DaGluYUNvbmZpZyA/IFszLCAxXSA6ICgocyA9IHdpbmRvdy5DaGluYUNvbmZpZyksIFszLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KFwiR0VUXCIsIG4gKyBcImNvbW1vbi9jb25maWcvaW5mb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBfbmFtZTogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBvLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltCTVNdIOWPguaVsFwiLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChjID0gSlNPTi5wYXJzZShzKSkuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobCBpbiBjKSB0aGlzLmRhdGFbbF0gPSBjW2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICh1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFNlcnZlckRhdGEgPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihpLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG8ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoXCJHRVRcIiwgXCJodHRwczovL2dhbWUuenVpcWlhbmd5aW5neXUubmV0L2NvbW1vbi9nYW1lLWRhdGEvbXVsdGktZ2V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9uYW1lOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRfa2V5czogblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IG8uc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0JNU10g5Y+C5pWwXCIsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gKGkgPSBKU09OLnBhcnNlKHIpKS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2F2ZVNlcnZlckRhdGEgPSBmdW5jdGlvbiAodCwgZSwgbiwgaSkge1xuICAgICAgICB2YXIgYSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihhLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG8ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RfKFwiaHR0cHM6Ly9nYW1lLnp1aXFpYW5neWluZ3l1Lm5ldC9jb21tb24vZ2FtZS1kYXRhL3NhdmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwX25hbWU6IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZF9rZXk6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkX2RhdGE6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBvLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltCTVNdIOWPguaVsFwiLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IChhID0gSlNPTi5wYXJzZShyKSkuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldERlZmF1bHREYXRhID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgZSBpbiB0KSB0aGlzLmRhdGFbZV0gPSB0W2VdO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuanNvbnBDaGVjayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKGUsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhICsgYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBvLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltqc29ucENoZWNrXSDlj4LmlbBcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBKU09OLnBhcnNlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmZvXCIsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gci5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuZW5jcnlwdFV0aWxzLmRlY3J5cHQoci5kYXRhLmRpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gSlNPTi5wYXJzZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInhfdG9rZW5cIiwgaS54X3Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJhbmRvbVN0clwiLCB0aGlzLnJhbmRvbVN0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkueF90b2tlbiA9PSB0aGlzLnJhbmRvbVN0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNaXNtYXRjaFwiKSwgdGhpcy5jbG9zZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWlzbWF0Y2hcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY2xvc2VWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVuZCgpO1xuICAgICAgICBpZiAod2luZG93LmNsb3NlKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cud3JvbmdmdWwgPSAhMDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQgPSB0IHx8IDMyO1xuICAgICAgICB2YXIgZSA9IFwiQUJDREVGR0hKS01OUFFSU1RXWFlaYWJjZGVmaGlqa21ucHJzdHd4eXpvT0xsOWdxVnZVdUkxMjM0NTY3OFwiO1xuICAgICAgICB2YXIgbiA9IGUubGVuZ3RoO1xuICAgICAgICB2YXIgciA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdDsgbysrKSB7XG4gICAgICAgICAgICByICs9IGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFNoYXJlQ29uZmlnID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIoZSwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KFwiR0VUXCIsIGEgKyBcImNvbW1vbi9nYW1lL3NoYXJlX2xpc3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwX25hbWU6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZSA9IG8uc2VudCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IChyID0gSlNPTi5wYXJzZShlKSkuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVMaXN0ID0gci5saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEtleSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgIT09IHRoaXMuZGF0YVt0XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHREYXRhW3RdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jaGVja0tleSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAodm9pZCAwICE9PSB0aGlzLmRhdGFbdF0pIHtcbiAgICAgICAgICAgIGUgPSB0aGlzLmRhdGFbdF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlID0gdGhpcy5kZWZhdWx0RGF0YVt0XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2YgZSkge1xuICAgICAgICAgICAgcmV0dXJuIDEgPT0gZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcImlwXCIgPT0gZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrS2V5KFwiaXNTaGllbGRJUFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYWxsXCIgPT0gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0SXNHUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKDAgPT0gdGhpcy5kYXRhLmlzU2hpZWxkSVApIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIuW5v+a3seWcsOWMulwiKSwgITA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCLpnZ7lub/mt7HlnLDljLpcIiksICExO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRJUElTSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKDAgPT0gdGhpcy5kYXRhLmlzX21sKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCLkuI3mmK/lpKfpmYZcIiksICExO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwi5piv5aSn6ZmGXCIpLCAhMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY2hhbmdlS2V5ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdGhpcy5kYXRhW3RdID0gZTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFNoYXJlTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhcmVMaXN0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gKCh0ICs9IFwiP1wiKSwgZSkpIHQgKz0gaSArIFwiPVwiICsgZVtpXSArIFwiJlwiO1xuICAgICAgICAgICAgdmFyIGEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICg0ID09IGEucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5zdGF0dXMgPj0gMjAwICYmIGEuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvKGEucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhLm9wZW4oXCJHRVRcIiwgdCk7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIGEuc2V0UmVxdWVzdEhlYWRlcihcIngtdG9rZW5cIiwgci5lbmNyWFRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEuc2VuZCgpO1xuICAgICAgICAgICAgYS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tcIik7XG4gICAgICAgICAgICAgICAgICAgIHIuY2xvc2VWaWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG8obnVsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYS5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbyhudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui2heaXtuWksei0pVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQoMSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucG9zdF8gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgdmFyIG8gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIG8ub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICg0ID09IG8ucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoby5zdGF0dXMgPj0gMjAwICYmIG8uc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByKG8ucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvLm9wZW4oXCJQT1NUXCIsIHQpO1xuICAgICAgICAgICAgby5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICAgICAgby5zZW5kKG4uZm9ybWF0UG9zdERhdGEoZSkpO1xuICAgICAgICAgICAgby5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHIobnVsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgby5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcihudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZm9ybWF0UG9zdERhdGEgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBuIGluIHQpIGUucHVzaChuKTtcbiAgICAgICAgZSA9IGUuc29ydCgpO1xuICAgICAgICB2YXIgciA9IFwiXCI7XG4gICAgICAgIGUuZm9yRWFjaChmdW5jdGlvbiAobiwgbykge1xuICAgICAgICAgICAgciArPSBuICsgXCI9XCIgKyB0W25dICsgKG8gPT0gZS5sZW5ndGggLSAxID8gXCJcIiA6IFwiJlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uICh0LCBlLCBuLCByKSB7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldChlLCBuLCByKTtcbiAgICAgICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zdChlLCBuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUub25Ub2tlblBvc3RGYWlsID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUub25Ub2tlblJlc3BvbmRGYWlsID0gZnVuY3Rpb24gKCkge307XG4gICAgdC5wcm90b3R5cGUucG9zdDIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBuID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICBuLnRpbWVvdXQgPSA1ZTM7XG4gICAgICAgICAgICB2YXIgciA9IHQ7XG4gICAgICAgICAgICB2YXIgbyA9IFwiP1wiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBpICsgXCI9XCIgKyByW2ldO1xuICAgICAgICAgICAgICAgIGlmIChcIlwiID09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbyArPSBhO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG8gKz0gXCImXCIgKyBhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4ub3BlbihcIlBPU1RcIiwgXCJodHRwczovL2dhbWUuenVpcWlhbmd5aW5neXUubmV0L2NvbW1vbi90dC9zZXNzaW9uL3NpZ25faW5cIiArIG8sICEwKTtcbiAgICAgICAgICAgIG4uc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04XCIpO1xuICAgICAgICAgICAgbi5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKDQgPT09IG4ucmVhZHlTdGF0ZSAmJiAyMDAgPT0gbi5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBuLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlk43lupTlj4LmlbBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHQpO1xuICAgICAgICAgICAgICAgICAgICBlKEpTT04ucGFyc2UodCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucGFyYW1Gb3JtYXQyVXJsU3RyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBcIlwiO1xuICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiAoT2JqZWN0LmtleXModCkubGVuZ3RoID4gMCAmJiAoZSArPSBcIj9cIiksIHQpKSBcIj9cIiAhPSBlICYmIChlICs9IFwiJlwiKSwgKGUgKz0gbiArIFwiPVwiICsgdFtuXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLkJNUyA9IG5ldyBsKCk7XG4iXX0=