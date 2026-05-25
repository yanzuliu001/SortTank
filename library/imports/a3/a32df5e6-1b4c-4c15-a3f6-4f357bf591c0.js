"use strict";
cc._RF.push(module, 'a32dfXmG0xMFaP2TzV79ZHA', 'ConfigManager');
// scripts/ConfigManager.js

"use strict";

exports.Config = void 0;

var r = function () {
  function t() {
    this.list = {};
  }

  t.prototype.preload = function (t) {
    if (this.list[t]) {//
    } else {
      cc.resources.preload(t);
    }
  };

  t.prototype.get = function (t) {
    var e = this;
    return new Promise(function (n, r) {
      if (e.list[t]) {
        return n(e.list[t]);
      }

      cc.resources.load(t, function (o, i) {
        if (o) {
          return r(), console.warn(o);
        } else {
          return e.list[t] = e.parseData(i.json, t), n(e.list[t]);
        }
      });
    });
  };

  t.prototype.parseData = function (t, e) {
    var n = {};

    for (var r = 0; r < t.values.length; r++) {
      n["" + t.values[r][0]] = t.values[r];
    }

    var o = t.values.length;
    var i = [];

    for (r = 0; r < o; r++) {
      var a = n["" + (r + 1)];

      if (a.every(function (t) {
        return 0 == t;
      })) {
        console.log(e + "表有空白数据，已过滤");
      } else {
        var s = {};

        for (var c = 0; c < a.length; c++) {
          s["" + t.keys[c]] = a[c];
        }

        i.push(s);
      }
    }

    return i;
  };

  return t;
}();

exports.Config = new r();

cc._RF.pop();