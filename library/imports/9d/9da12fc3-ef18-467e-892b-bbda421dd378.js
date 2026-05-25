"use strict";
cc._RF.push(module, '9da12/D7xhGfokru9pCHdN4', 'First');
// scripts/First.js

"use strict";

var r;
var c = cc._decorator;
var l = c.ccclass;
var u = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.encrXToken = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    console.log("首场景");
    this.loadSubpackage();
  };

  e.prototype.loadSubpackage = function () {
    var t = this;
    var e = cc.sys;
    var n = e.platform;

    if (n == e.IPHONE || n == e.IPAD) {
      this.getDefaultLanguage().then(function (e) {
        if (e) {
          var n = cc.sys.localStorage.getItem("isCheckIP");

          if (null == n || null == n || "" == n) {
            var r = jsb.reflection.callStaticMethod("AppController", "gainIOSBMSVersion");
            console.log("获得版本号", r);
            console.time("test time");
            t.getIPAbroad("zqdn2ios", "ios", r).then(function (t) {
              console.log(t);
              console.timeEnd("test time");
              cc.director.loadScene("App");
            });
          } else {
            if (0 == Number(n)) {
              t.en(), window.haiwai = !0;
            } else {
              t.zh(), window.haiwai = !1;
            }

            cc.director.loadScene("App");
          }
        } else {
          t.zh();
          window.haiwai = !1;
          cc.director.loadScene("App");
        }
      });
    } else {
      this.loadSubs([], function () {
        cc.director.loadScene("App");
      }, function () {});
    }
  };

  e.prototype.getDefaultLanguage = function () {
    var t = this;
    var e = jsb.reflection.callStaticMethod("AppController", "gainIOSBMSVersion");
    return new Promise(function (n) {
      return __awaiter(t, void 0, void 0, function () {
        var t;
        var r;
        var o;
        var i;
        return __generator(this, function (a) {
          switch (a.label) {
            case 0:
              r = cc.sys;
              o = r.platform;
              t = o == r.IPHONE || o == r.IPAD ? "https://bms.yarkgame.com/" : "https://game.zuiqiangyingyu.net/";
              return [4, this.request("GET", t + "common/config/info", {
                app_name: "zqdn2ios",
                version: e
              })];

            case 1:
              i = a.sent();
              console.log("[BMS] 参数", i);

              if (i) {
                window.ChinaConfig = i;

                try {
                  if ("zh" == JSON.parse(i).data.language) {
                    n(!1);
                  } else {
                    n(!0);
                  }
                } catch (s) {
                  n(!1);
                }
              } else {
                n(!1);
              }

              return [2];
          }
        });
      });
    });
  };

  e.prototype.getIPAbroad = function (t, e, n) {
    var r = this;
    return new Promise(function (o) {
      return __awaiter(r, void 0, void 0, function () {
        var r;
        var i;
        return __generator(this, function (a) {
          switch (a.label) {
            case 0:
              return [4, this.request("GET", "https://bms.yarkgame.com/common/is/v2/ml", {
                app_name: t,
                channel: e,
                version: n
              })];

            case 1:
              r = a.sent();
              console.timeLog("test time");

              if (r) {
                try {
                  i = (i = JSON.parse(r)).data;
                  console.log("getIPAbroad", i.is_ml);

                  if (0 == i.is_ml) {
                    cc.sys.localStorage.setItem("isCheckIP", 0);
                    this.en();
                    console.log("海外");
                    window.haiwai = !0;
                  } else {
                    cc.sys.localStorage.setItem("isCheckIP", 1);
                    this.zh();
                    console.log("大陆");
                    window.haiwai = !1;
                  }

                  o();
                } catch (s) {
                  this.zh();
                  o();
                }
              } else {
                o();
              }

              return [2];
          }
        });
      });
    });
  };

  e.prototype.en = function () {
    if (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) {//
    } else {
      jsb.reflection.callStaticMethod("AppController", "gainCurrentIp:", "en");
    }
  };

  e.prototype.zh = function () {
    if (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) {//
    } else {
      jsb.reflection.callStaticMethod("AppController", "gainCurrentIp:", "zh");
    }
  };

  e.prototype.request = function (t, e, n, r) {
    switch (t) {
      case "GET":
        return this.get(e, n, r);
    }
  };

  e.prototype.get = function (t, e, n) {
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
            r.zh(), o(null);
          }
        }
      };

      a.open("GET", t);

      if (n) {
        a.setRequestHeader("x-token", r.encrXToken);
      }

      a.send();

      a.onerror = function () {
        r.zh();
        o(null);
      };

      a.ontimeout = function () {
        r.zh();
        o(null);

        if (n) {
          console.log("超时失败");
        }
      };
    });
  };

  e.prototype.loadSub = function (t) {
    return new Promise(function (e, n) {
      cc.assetManager.loadBundle(t, function (r) {
        if (null !== r) {
          console.log("[ResMgr]:Load AssetsBundle Error: " + t);
          return n();
        }

        console.log("[ResMgr]:Load AssetsBundle Success: " + t);
        console.log("加载完成", t);
        e(null);
      });
    });
  };

  e.prototype.loadSubs = function (t, e, n) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            r.trys.push([0, 4,, 5]);
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

  return __decorate([l], e);
}(cc.Component));
exports["default"] = u;

cc._RF.pop();