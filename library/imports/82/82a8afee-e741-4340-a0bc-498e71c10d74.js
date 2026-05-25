"use strict";
cc._RF.push(module, '82a8a/u50FDQKC8SY5xwQ10', 'Level-290760_Box');
// script/scripts/Level-290760_Box.js

"use strict";

var i;

var $level_290760_BoxItem = require("./Level-290760_BoxItem");

var $level_290760_Enum = require("./Level-290760_Enum");

var c = cc._decorator;
var l = c.ccclass;
var h = (c.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isTest = !1;
    e.mgr = null;
    e.boxArrByIDSort = [];
    e.batchMap = {};
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    this.mgr = t;
    this.isTest = !1;
    this.node.children.forEach(function (t) {
      t.addComponent($level_290760_BoxItem["default"]).init(e);
    });
    this.node.children.forEach(function (t) {
      e.boxArrByIDSort.push(t);
      t.getComponent($level_290760_BoxItem["default"]).path = e.getPath(t);
      e.mgr.model.drinkAmount += t.getComponent($level_290760_BoxItem["default"]).seat;
    });
    this.setBoxID();
  };

  e.prototype.getPath = function (t) {
    if (t.getComponent($level_290760_BoxItem["default"]).path) {
      return t.getComponent($level_290760_BoxItem["default"]).path;
    }

    var e = t.width;
    var o = t.convertToWorldSpaceAR(cc.v2(-e / 2, 0));
    var i = t.convertToWorldSpaceAR(cc.v2(-e / 2, 3 * cc.winSize.height));
    var r = t.convertToWorldSpaceAR(cc.v2(e / 2, 0));
    var n = t.convertToWorldSpaceAR(cc.v2(e / 2, 3 * cc.winSize.height));
    var s = this.getOtherBoxArrByDistance(t);
    var c = !1;
    var l = 1;

    for (var h = 0; h < s.length; h++) {
      var p = s[h];

      if (p != t) {
        var d;
        var u;
        var g;
        var m;
        var f;
        var v;
        var y = p.width;
        var C = p.height;
        d = p.convertToWorldSpaceAR(cc.v2(-y / 2, -C));
        u = p.convertToWorldSpaceAR(cc.v2(-y / 2, 0));
        g = p.convertToWorldSpaceAR(cc.v2(y / 2, -C));
        m = p.convertToWorldSpaceAR(cc.v2(y / 2, 0));
        f = p.convertToWorldSpaceAR(cc.v2(y / 2 + 2, 0));
        v = p.convertToWorldSpaceAR(cc.v2(-y / 2 - 2, 0));

        if (cc.Intersection.lineLine(o, i, d, u) || cc.Intersection.lineLine(o, i, g, m) || cc.Intersection.lineLine(r, n, d, u) || cc.Intersection.lineLine(r, n, g, m) || cc.Intersection.lineLine(o, i, f, v) || cc.Intersection.lineLine(o, i, f, v) || cc.Intersection.lineLine(r, n, f, v) || cc.Intersection.lineLine(r, n, f, v)) {
          c = !0;

          if (p.getComponent($level_290760_BoxItem["default"]).path) {
            l += p.getComponent($level_290760_BoxItem["default"]).path;
          } else {
            l += this.getPath(p);
          }
        }
      }
    }

    if (c) {
      return t.getComponent($level_290760_BoxItem["default"]).path = l, l;
    } else {
      return t.getComponent($level_290760_BoxItem["default"]).path = 1, 1;
    }
  };

  e.prototype.getOtherBoxArrByDistance = function (t) {
    var e = [];

    for (var o = 0; o < this.node.children.length; o++) {
      var i = this.node.children[o];

      if (i && i != t && i.active && i.getComponent($level_290760_BoxItem["default"]).state == $level_290760_Enum.BoxState.Idle) {
        e.push(i);
      }
    }

    var r = t.convertToWorldSpaceAR(cc.v2(0, 0));
    e.sort(function (t, e) {
      var o = [t.convertToWorldSpaceAR(cc.v2(0, 0)), t.convertToWorldSpaceAR(cc.v2(0, -t.height))];
      var i = [e.convertToWorldSpaceAR(cc.v2(0, 0)), e.convertToWorldSpaceAR(cc.v2(0, -e.height))];
      return cc.Intersection.pointLineDistance(r, o[0], o[1], !0) - cc.Intersection.pointLineDistance(r, i[0], i[1], !0);
    });
    return e;
  };

  e.prototype.setBoxID = function () {
    var t = this;
    this.boxArrByIDSort.sort(function (t, e) {
      return t.getComponent($level_290760_BoxItem["default"]).path - e.getComponent($level_290760_BoxItem["default"]).path;
    });
    this.boxArrByIDSort.forEach(function (e, o) {
      e.getComponent($level_290760_BoxItem["default"]).ID = o;
      e.getComponent($level_290760_BoxItem["default"]).percent = Math.round((o + 1) / t.boxArrByIDSort.length * 100);

      if (t.isTest) {
        e.getComponent($level_290760_BoxItem["default"]).showPathAndID();
      }

      t.setBoxColor(e.getComponent($level_290760_BoxItem["default"]));
    });
  };

  e.prototype.setBoxColor = function (t) {
    var e = this.mgr.model.config.carColor;
    var o = this.mgr.model.colorSort;
    var i = this.mgr.model.boxNameMap;

    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      var a = n[2];

      if (t.percent <= n[1] && t.percent >= n[0]) {
        if (this.batchMap[r]) {//
        } else {
          this.batchMap[r] = [];
        }

        var s = this.mgr.randomNum(a[0], a[1]);

        for (var c = o[s]; this.batchMap[r].includes(c) && this.batchMap[r].length < a[1] - a[0] + 1;) {
          c = o[s = this.mgr.randomNum(a[0], a[1])];
        }

        this.batchMap[r].push(c);
        t.setBoxImg(c, i);
        break;
      }
    }
  };

  return __decorate([l], e);
}(cc.Component));
exports["default"] = h;

cc._RF.pop();