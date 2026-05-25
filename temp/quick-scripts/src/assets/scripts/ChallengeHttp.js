"use strict";
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