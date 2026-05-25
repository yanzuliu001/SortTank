
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ChallengeHttp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e05fcG+euBPNZPaWNAB54S2', 'ChallengeHttp');
// scripts/ChallengeHttp.js

"use strict";

exports.challengeHttp = void 0;

var $platformManager = require("./PlatformManager");

var $mD5Type = require("./MD5Type");

var s = "https://op-data.zuiqiangyingyu.net/";

var c = function () {
  function t() {}

  t.prototype.getCountry = function (t) {
    var e = this;

    if (void 0 === t) {
      t = !1;
    }

    return new Promise(function (n) {
      return __awaiter(e, void 0, void 0, function () {
        var e;
        var r;
        var a;
        var c;
        var l;
        var u;
        return __generator(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, Promise.resolve() // this.get(s + "common/is/v2/is", {
              //     app_name: $platformManager.Platform.getConfig().flag,
              //     channel: "tt",
              //     version: $platformManager.Platform.getConfig().version
              // })
              ];

            case 1:
              e = o.sent();

              try {
                r = {
                  "code": 0,
                  "msg": "成功",
                  "data": {
                    "is_enable": 1,
                    "info": {
                      "ip_address": "",
                      "global": "亚洲",
                      "nation": "中国",
                      "nation_name_en": "CHINA",
                      "nation_name_en_abbr": "CN",
                      "province": "",
                      "city": "",
                      "district": "",
                      "isp": "",
                      "adcode": "",
                      "gps": ""
                    },
                    "ip": ""
                  }
                };
                n(t ? (null === (c = null === (a = r.data) || void 0 === a ? void 0 : a.info) || void 0 === c ? void 0 : c.nation_name_en_abbr) || "Other" : (null === (u = null === (l = r.data) || void 0 === l ? void 0 : l.info) || void 0 === u ? void 0 : u.province) || "其他");
              } catch (f) {
                n(t ? "Other" : "其他");
              }

              return [2];
          }
        });
      });
    });
  };

  t.prototype.getRank = function (t, e) {
    var n = this;

    if (void 0 === e) {
      e = "1";
    }

    return new Promise(function (a) {
      return __awaiter(n, void 0, void 0, function () {
        var n;
        var r;
        var c;
        return __generator(this, function (o) {
          switch (o.label) {
            case 0:
              // (n = {
              //     app_name: $platformManager.Platform.getConfig().flag,
              //     rank_name: t,
              //     page_size: "233",
              //     page: e,
              //     timestamp: Math.floor(new Date().getTime() / 1e3),
              //     nonce: this.randomString(32)
              // }).sign = this.getSign(n);
              // return [4, this.post(s + "common/rank/list", n)];
              return [4, Promise.resolve()];

            case 1:
              r = o.sent();

              try {
                c = {
                  "code": 0,
                  "msg": "成功",
                  "data": {
                    "list": {
                      "广东": {
                        "seq": 1,
                        "score": 602
                      },
                      "湖北": {
                        "seq": 2,
                        "score": 580
                      },
                      "山东": {
                        "seq": 3,
                        "score": 407
                      },
                      "河北": {
                        "seq": 4,
                        "score": 398
                      },
                      "河南": {
                        "seq": 5,
                        "score": 394
                      },
                      "江苏": {
                        "seq": 6,
                        "score": 383
                      },
                      "安徽": {
                        "seq": 7,
                        "score": 175
                      },
                      "广西": {
                        "seq": 8,
                        "score": 164
                      },
                      "福建": {
                        "seq": 9,
                        "score": 151
                      },
                      "四川": {
                        "seq": 10,
                        "score": 127
                      },
                      "北京": {
                        "seq": 11,
                        "score": 112
                      },
                      "吉林": {
                        "seq": 12,
                        "score": 103
                      },
                      "江西": {
                        "seq": 13,
                        "score": 91
                      },
                      "浙江": {
                        "seq": 14,
                        "score": 75
                      },
                      "湖南": {
                        "seq": 15,
                        "score": 66
                      },
                      "天津": {
                        "seq": 16,
                        "score": 65
                      },
                      "山西": {
                        "seq": 17,
                        "score": 63
                      },
                      "贵州": {
                        "seq": 18,
                        "score": 61
                      },
                      "海南": {
                        "seq": 19,
                        "score": 45
                      },
                      "陕西": {
                        "seq": 20,
                        "score": 38
                      },
                      "内蒙古": {
                        "seq": 21,
                        "score": 38
                      },
                      "重庆": {
                        "seq": 22,
                        "score": 35
                      },
                      "辽宁": {
                        "seq": 23,
                        "score": 21
                      },
                      "云南": {
                        "seq": 24,
                        "score": 16
                      },
                      "黑龙江": {
                        "seq": 25,
                        "score": 14
                      },
                      "其他": {
                        "seq": 26,
                        "score": 12
                      },
                      "甘肃": {
                        "seq": 27,
                        "score": 6
                      },
                      "新疆": {
                        "seq": 28,
                        "score": 4
                      },
                      "上海": {
                        "seq": 29,
                        "score": 2
                      }
                    },
                    "total": 29
                  }
                };
                a(c.data);
              } catch (l) {
                a({
                  list: [],
                  total: 0
                });
              }

              return [2];
          }
        });
      });
    });
  };

  t.prototype.setRank = function (t, e, n) {
    var a = this;
    return new Promise(function (c) {
      return __awaiter(a, void 0, void 0, function () {
        var r;
        var a;
        var l;
        return __generator(this, function (o) {
          switch (o.label) {
            case 0:
              (r = {
                app_name: $platformManager.Platform.getConfig().flag,
                rank_name: t,
                key: e,
                score: n,
                timestamp: Math.floor(new Date().getTime() / 1e3),
                nonce: this.randomString(32)
              }).sign = this.getSign(r);
              return [4, this.post(s + "/common/rank/set-score", r)];

            case 1:
              a = o.sent();

              try {
                l = JSON.parse(a);
                c(l.data);
              } catch (u) {
                c({
                  list: [],
                  total: 0
                });
              }

              return [2];
          }
        });
      });
    });
  };

  t.prototype.incrRank = function (t, e, n) {
    return Promise.resolve(); // var a = this;
    // if (void 0 === n) {
    //     n = 1;
    // }
    // return new Promise(function(c) {
    //     return __awaiter(a, void 0, void 0, function() {
    //         var r;
    //         var a;
    //         var l;
    //         return __generator(this, function(o) {
    //             switch (o.label) {
    //                 case 0:
    //                     (r = {
    //                         app_name: $platformManager.Platform.getConfig().flag,
    //                         rank_name: t,
    //                         key: e,
    //                         score: n,
    //                         timestamp: Math.floor(new Date().getTime() / 1e3),
    //                         nonce: this.randomString(32)
    //                     }).sign = this.getSign(r);
    //                     return [4, this.post(s + "common/rank/incr-score", r)];
    //                 case 1:
    //                     a = o.sent();
    //                     try {
    //                         l = JSON.parse(a);
    //                         c(l.data);
    //                     } catch (u) {
    //                         c({
    //                             list: [],
    //                             total: 0
    //                         });
    //                     }
    //                     return [2];
    //             }
    //         });
    //     });
    // });
  };

  t.prototype.getServerTime = function () {
    var t = this;
    return new Promise(function (e) {
      return __awaiter(t, void 0, void 0, function () {
        var t;
        var n;
        return __generator(this, function (r) {
          switch (r.label) {
            case 0:
              return [4, this.get("https://game.zuiqiangyingyu.net//common/common/time", {})];

            case 1:
              t = r.sent();

              try {
                n = JSON.parse(t);
                e(n.data && n.data.date_time || new Date().toString());
              } catch (o) {
                e(new Date().toString());
              }

              return [2];
          }
        });
      });
    });
  };

  t.prototype.randomString = function (t) {
    t = t || 32;
    var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyzoOLl9gqVvUuI12345678_";
    var n = e.length;
    var r = "";

    for (var o = 0; o < t; o++) {
      r += e.charAt(Math.floor(Math.random() * n));
    }

    return r;
  };

  t.prototype.getSign = function (t) {
    var e = [];

    for (var n in t) {
      e.push(n);
    }

    e = e.sort();
    var r = "";
    e.forEach(function (n, o) {
      r += n + "=" + t[n] + (o == e.length - 1 ? "" : "&");
    });
    r += "VuFFap7NHJA70M9xWb9fSQcdVtivPY4E";
    return new $mD5Type.Md5().md5(r);
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

  t.prototype.get = function (t, e) {
    return new Promise(function (n) {
      for (var r in t += "?", e) {
        t += r + "=" + e[r] + "&";
      }

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

  t.prototype.request = function (t, e, n) {
    switch (t) {
      case "GET":
        return this.get(e, n);

      case "POST":
        return this.post(e, n);
    }
  };

  return t;
}();

exports.challengeHttp = new c();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NoYWxsZW5nZUh0dHAuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsImNoYWxsZW5nZUh0dHAiLCIkcGxhdGZvcm1NYW5hZ2VyIiwicmVxdWlyZSIsIiRtRDVUeXBlIiwicyIsImMiLCJ0IiwicHJvdG90eXBlIiwiZ2V0Q291bnRyeSIsImUiLCJQcm9taXNlIiwibiIsIl9fYXdhaXRlciIsInIiLCJhIiwibCIsInUiLCJfX2dlbmVyYXRvciIsIm8iLCJsYWJlbCIsInJlc29sdmUiLCJzZW50IiwiZGF0YSIsImluZm8iLCJuYXRpb25fbmFtZV9lbl9hYmJyIiwicHJvdmluY2UiLCJmIiwiZ2V0UmFuayIsImxpc3QiLCJ0b3RhbCIsInNldFJhbmsiLCJhcHBfbmFtZSIsIlBsYXRmb3JtIiwiZ2V0Q29uZmlnIiwiZmxhZyIsInJhbmtfbmFtZSIsImtleSIsInNjb3JlIiwidGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldFRpbWUiLCJub25jZSIsInJhbmRvbVN0cmluZyIsInNpZ24iLCJnZXRTaWduIiwicG9zdCIsIkpTT04iLCJwYXJzZSIsImluY3JSYW5rIiwiZ2V0U2VydmVyVGltZSIsImdldCIsImRhdGVfdGltZSIsInRvU3RyaW5nIiwibGVuZ3RoIiwiY2hhckF0IiwicmFuZG9tIiwicHVzaCIsInNvcnQiLCJmb3JFYWNoIiwiTWQ1IiwibWQ1IiwiZm9ybWF0UG9zdERhdGEiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIm9wZW4iLCJzZW5kIiwib25lcnJvciIsIm9udGltZW91dCIsInNldFJlcXVlc3RIZWFkZXIiLCJyZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLGFBQVIsR0FBd0IsS0FBSyxDQUE3Qjs7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBR0MsT0FBTyxDQUFDLG1CQUFE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QTdCRjtzQkFpQ0osTUFBTTt3QkFDRixPQUFPLENBREw7d0JBRUYsU0FBUztzQkFGUCxDQWpDRjtzQkFxQ0osTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXJDRjtzQkF5Q0osTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXpDRjtzQkE2Q0osTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQTdDRjtzQkFpREosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQWpERjtzQkFxREosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXJERjtzQkF5REosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXpERjtzQkE2REosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQTdERjtzQkFpRUosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQWpFRjtzQkFxRUosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXJFRjtzQkF5RUosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXpFRjtzQkE2RUosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQTdFRjtzQkFpRkosT0FBTzt3QkFDSCxPQUFPLEVBREo7d0JBRUgsU0FBUztzQkFGTixDQWpGSDtzQkFxRkosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXJGRjtzQkF5RkosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQXpGRjtzQkE2RkosTUFBTTt3QkFDRixPQUFPLEVBREw7d0JBRUYsU0FBUztzQkFGUCxDQTdGRjtzQkFpR0osT0FBTzt3QkFDSCxPQUFPLEVBREo7d0JBRUgsU0FBUztzQkFGTixDQWpHSDtzQkFxR0osTUFBTTt3QkFDRixPQUFPLEVBREw7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QUFuQixFQUFtQyxtQ0FBbkM7TUFDQXZELENBQUMsQ0FBQ29ELElBQUYsQ0FBTzNELENBQUMsQ0FBQ29ELGNBQUYsQ0FBaUJ0RCxDQUFqQixDQUFQOztNQUNBUyxDQUFDLENBQUNxRCxPQUFGLEdBQVksWUFBVztRQUNuQjFELENBQUMsQ0FBQyxJQUFELENBQUQ7TUFDSCxDQUZEOztNQUdBSyxDQUFDLENBQUNzRCxTQUFGLEdBQWMsWUFBVztRQUNyQjNELENBQUMsQ0FBQyxJQUFELENBQUQ7TUFDSCxDQUZEO0lBR0gsQ0FwQk0sQ0FBUDtFQXFCSCxDQXZCRDs7RUF3QkFQLENBQUMsQ0FBQ0MsU0FBRixDQUFZbUUsT0FBWixHQUFzQixVQUFTcEUsQ0FBVCxFQUFZRyxDQUFaLEVBQWVFLENBQWYsRUFBa0I7SUFDcEMsUUFBUUwsQ0FBUjtNQUNJLEtBQUssS0FBTDtRQUNJLE9BQU8sS0FBSzhDLEdBQUwsQ0FBUzNDLENBQVQsRUFBWUUsQ0FBWixDQUFQOztNQUNKLEtBQUssTUFBTDtRQUNJLE9BQU8sS0FBS29DLElBQUwsQ0FBVXRDLENBQVYsRUFBYUUsQ0FBYixDQUFQO0lBSlI7RUFNSCxDQVBEOztFQVFBLE9BQU9MLENBQVA7QUFDSCxDQXJhTyxFQUFSOztBQXNhQVAsT0FBTyxDQUFDQyxhQUFSLEdBQXdCLElBQUlLLENBQUosRUFBeEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuY2hhbGxlbmdlSHR0cCA9IHZvaWQgMDtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICRtRDVUeXBlID0gcmVxdWlyZShcIi4vTUQ1VHlwZVwiKTtcbnZhciBzID0gXCJodHRwczovL29wLWRhdGEuenVpcWlhbmd5aW5neXUubmV0L1wiO1xudmFyIGMgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5wcm90b3R5cGUuZ2V0Q291bnRyeSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIoZSwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgICAgIHZhciBsO1xuICAgICAgICAgICAgICAgIHZhciB1O1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2V0KHMgKyBcImNvbW1vbi9pcy92Mi9pc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhcHBfbmFtZTogJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2hhbm5lbDogXCJ0dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmVyc2lvbjogJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS52ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gby5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtc2dcIjogXCLmiJDlip9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc19lbmFibGVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZm9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlwX2FkZHJlc3NcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWxcIjogXCLkuprmtLJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpb25cIjogXCLkuK3lm71cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpb25fbmFtZV9lblwiOiBcIkNISU5BXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmF0aW9uX25hbWVfZW5fYWJiclwiOiBcIkNOXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvdmluY2VcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzdHJpY3RcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc3BcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGNvZGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncHNcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChudWxsID09PSAoYyA9IG51bGwgPT09IChhID0gci5kYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmluZm8pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBjID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubmF0aW9uX25hbWVfZW5fYWJicikgfHwgXCJPdGhlclwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChudWxsID09PSAodSA9IG51bGwgPT09IChsID0gci5kYXRhKSB8fCB2b2lkIDAgPT09IGwgPyB2b2lkIDAgOiBsLmluZm8pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSB1ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUucHJvdmluY2UpIHx8IFwi5YW25LuWXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4odCA/IFwiT3RoZXJcIiA6IFwi5YW25LuWXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRSYW5rID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSBcIjFcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihuLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKG4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFwcF9uYW1lOiAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmZsYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJhbmtfbmFtZTogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFnZV9zaXplOiBcIjIzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWdlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aW1lc3RhbXA6IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxZTMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBub25jZTogdGhpcy5yYW5kb21TdHJpbmcoMzIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSkuc2lnbiA9IHRoaXMuZ2V0U2lnbihuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gWzQsIHRoaXMucG9zdChzICsgXCJjb21tb24vcmFuay9saXN0XCIsIG4pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFByb21pc2UucmVzb2x2ZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gby5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtc2dcIjogXCLmiJDlip9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLlub/kuJxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNjAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5rmW5YyXXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDU4MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWxseS4nFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA0MDdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmsrPljJdcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMzk4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5rKz5Y2XXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDM5NFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuaxn+iLj1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAzODNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLlronlvr1cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMTc1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5bm/6KW/XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDE2NFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuemj+W7ulwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAxNTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLlm5vlt51cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDEyN1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWMl+S6rFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAxMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMTEyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5ZCJ5p6XXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAxMDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmsZ/opb9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDkxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5rWZ5rGfXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA3NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIua5luWNl1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNjZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLlpKnmtKVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDY1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5bGx6KW/XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDE3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA2M1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIui0teW3nlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmtbfljZdcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogMTksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDQ1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi6ZmV6KW/XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAzOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWGheiSmeWPpFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAyMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMzhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLph43luoZcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDM1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi6L695a6BXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAyMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuS6keWNl1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMTZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLpu5HpvpnmsZ9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXFcIjogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDE0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5YW25LuWXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VxXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiAxMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIueUmOiCg1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAyNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuaWsOeWhlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuS4iua1t1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlcVwiOiAyOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdGFsXCI6IDI5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEoYy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2V0UmFuayA9IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihhLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcF9uYW1lOiAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmZsYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtfbmFtZTogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMWUzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucmFuZG9tU3RyaW5nKDMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnNpZ24gPSB0aGlzLmdldFNpZ24ocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLnBvc3QocyArIFwiL2NvbW1vbi9yYW5rL3NldC1zY29yZVwiLCByKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IG8uc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBKU09OLnBhcnNlKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjKGwuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmluY3JSYW5rID0gZnVuY3Rpb24odCwgZSwgbikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIC8vIHZhciBhID0gdGhpcztcbiAgICAgICAgLy8gaWYgKHZvaWQgMCA9PT0gbikge1xuICAgICAgICAvLyAgICAgbiA9IDE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBfX2F3YWl0ZXIoYSwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgICAgIHZhciByO1xuICAgICAgICAvLyAgICAgICAgIHZhciBhO1xuICAgICAgICAvLyAgICAgICAgIHZhciBsO1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihvKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIChyID0ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBhcHBfbmFtZTogJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICByYW5rX25hbWU6IHQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IG4sXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDFlMyksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnJhbmRvbVN0cmluZygzMilcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9KS5zaWduID0gdGhpcy5nZXRTaWduKHIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5wb3N0KHMgKyBcImNvbW1vbi9yYW5rL2luY3Itc2NvcmVcIiwgcildO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGEgPSBvLnNlbnQoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBsID0gSlNPTi5wYXJzZShhKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYyhsLmRhdGEpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYyh7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiAwXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTZXJ2ZXJUaW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoci5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy5nZXQoXCJodHRwczovL2dhbWUuenVpcWlhbmd5aW5neXUubmV0Ly9jb21tb24vY29tbW9uL3RpbWVcIiwge30pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gci5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IEpTT04ucGFyc2UodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoKG4uZGF0YSAmJiBuLmRhdGEuZGF0ZV90aW1lKSB8fCBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZShuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5yYW5kb21TdHJpbmcgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHQgPSB0IHx8IDMyO1xuICAgICAgICB2YXIgZSA9IFwiQUJDREVGR0hKS01OUFFSU1RXWFlaYWJjZGVmaGlqa21ucHJzdHd4eXpvT0xsOWdxVnZVdUkxMjM0NTY3OF9cIjtcbiAgICAgICAgdmFyIG4gPSBlLmxlbmd0aDtcbiAgICAgICAgdmFyIHIgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHQ7IG8rKykge1xuICAgICAgICAgICAgciArPSBlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTaWduID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBuIGluIHQpIGUucHVzaChuKTtcbiAgICAgICAgZSA9IGUuc29ydCgpO1xuICAgICAgICB2YXIgciA9IFwiXCI7XG4gICAgICAgIGUuZm9yRWFjaChmdW5jdGlvbihuLCBvKSB7XG4gICAgICAgICAgICByICs9IG4gKyBcIj1cIiArIHRbbl0gKyAobyA9PSBlLmxlbmd0aCAtIDEgPyBcIlwiIDogXCImXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgciArPSBcIlZ1RkZhcDdOSEpBNzBNOXhXYjlmU1FjZFZ0aXZQWTRFXCI7XG4gICAgICAgIHJldHVybiBuZXcgJG1ENVR5cGUuTWQ1KCkubWQ1KHIpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZm9ybWF0UG9zdERhdGEgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gW107XG4gICAgICAgIGZvciAodmFyIG4gaW4gdCkgZS5wdXNoKG4pO1xuICAgICAgICBlID0gZS5zb3J0KCk7XG4gICAgICAgIHZhciByID0gXCJcIjtcbiAgICAgICAgZS5mb3JFYWNoKGZ1bmN0aW9uKG4sIG8pIHtcbiAgICAgICAgICAgIHIgKz0gbiArIFwiPVwiICsgdFtuXSArIChvID09IGUubGVuZ3RoIC0gMSA/IFwiXCIgOiBcIiZcIik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIHIgaW4gKCh0ICs9IFwiP1wiKSwgZSkpIHQgKz0gciArIFwiPVwiICsgZVtyXSArIFwiJlwiO1xuICAgICAgICAgICAgdmFyIG8gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIG8ub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKDQgPT0gby5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvLnN0YXR1cyA+PSAyMDAgJiYgby5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4oby5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG8ub3BlbihcIkdFVFwiLCB0KTtcbiAgICAgICAgICAgIG8uc2VuZCgpO1xuICAgICAgICAgICAgby5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbihudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG4obnVsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgIHZhciBvID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICBvLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICg0ID09IG8ucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoby5zdGF0dXMgPj0gMjAwICYmIG8uc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByKG8ucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvLm9wZW4oXCJQT1NUXCIsIHQpO1xuICAgICAgICAgICAgby5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICAgICAgby5zZW5kKG4uZm9ybWF0UG9zdERhdGEoZSkpO1xuICAgICAgICAgICAgby5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcihudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHIobnVsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldChlLCBuKTtcbiAgICAgICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zdChlLCBuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5jaGFsbGVuZ2VIdHRwID0gbmV3IGMoKTsiXX0=