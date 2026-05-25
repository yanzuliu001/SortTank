"use strict";
cc._RF.push(module, '042d9c603NG8JyHDrds8I2x', 'Level-287490_containerControl');
// script/scripts/Level-287490_containerControl.js

"use strict";

var i;

var $levelUtil = require("./LevelUtil");

var $level_287490_boxItem = require("./Level-287490_boxItem");

var $level_287490_config = require("./Level-287490_config");

var h = cc._decorator;
var p = h.ccclass;
var d = (h.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mgr = null;
    e.boxData = [];
    e.boxMap = new Map();
    e.boxQueue = [];
    e.lastBoxColorType = -1;
    e.boxColorGroup = {};
    e.isAnim = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    this.mgr = t;
    var o = this.mgr.levelData.boxConfig;
    this.mgr.levelData.box_config_editor.split("*")[1].split("#").forEach(function (t) {
      var o = t.split("_");
      e.boxData.push({
        name: $level_287490_config.BoxName[o[0]],
        layer: Number(o[1]),
        index: Number(o[2]),
        x: Number(o[3]),
        y: Number(o[4])
      });
    });
    this.boxData.reverse();
    this.boxData.forEach(function (t) {
      if (e.boxMap.get(t.layer)) {//
      } else {
        e.boxMap.set(t.layer, []);
      }
    });
    console.log("盒子数据", this.boxData);
    this.boxData.forEach(function (t) {
      return e.createBox(t);
    });
    this.boxMap.forEach(function (t) {
      return t.forEach(function (t) {
        return e.boxQueue.push(t);
      });
    });
    var i = {};

    for (var r = 0; r < this.boxQueue.length; r++) {
      var n = Math.round((r + 1) / this.boxQueue.length * 100);

      for (var a = 0; a < o.length; a++) {
        var h = o[a][0];
        var p = o[a][1];

        if (n <= h) {
          var d = this.mgr.randomNum(p[0] - 1, p[1] - 1);

          for (var u = this.mgr.colorType[d]; u == this.lastBoxColorType;) {
            d = this.mgr.randomNum(p[0] - 1, p[1] - 1);
            u = this.mgr.colorType[d];
          }

          this.lastBoxColorType = u;
          this.boxQueue[r].getComponent($level_287490_boxItem["default"]).setColor(u, this.mgr.boxAtlas);

          if (i[u]) {//
          } else {
            i[u] = [];
          }

          i[u].push(this.boxQueue[r].getComponent($level_287490_boxItem["default"]).posCount);
          break;
        }
      }
    }

    console.log("每种颜色数量", i);

    var g = function g(t) {
      var o = [];
      i[t].forEach(function (t) {
        var i = [];

        for (var r = 0; r < t;) {
          var n = e.mgr.randomNum(1, t / 2);

          if ((r += n) <= t) {
            i.push(n);
          } else {
            var a = t - (r -= n);
            i.push(a);
            r += a;
          }
        }

        i.forEach(function (t) {
          return o.push(t);
        });
      });
      var r = Number(t);
      m.boxColorGroup[r] = [];
      o.forEach(function (t) {
        return e.boxColorGroup[r].push(Number(t));
      });
    };

    var m = this;

    for (var f in i) {
      g(f);
    }

    console.log("开始切片结果", $levelUtil["default"].deepCopy(this.boxColorGroup));
    this.updateBoxState();
    this.playStartAnim();
  };

  e.prototype.playStartAnim = function () {
    var t = this;

    var e = __spreadArrays(this.node.children);

    e.sort(function (t, e) {
      return t.y + 1e3 * t.getComponent($level_287490_boxItem["default"]).layer - (e.y + 1e3 * e.getComponent($level_287490_boxItem["default"]).layer);
    }).forEach(function (o, i) {
      var r = cc.winSize.height / 2 + o.width;
      var n = o.y;
      o.y = r;
      cc.tween(o).delay(0.02 * i).to(0.8, {
        y: n
      }).by(0.1, {
        y: -5
      }).by(0.1, {
        y: 8
      }).by(0.1, {
        y: -3
      }).call(function () {
        if (i == e.length - 1) {
          t.isAnim = !0;
        }
      }).start();
    });
  };

  e.prototype.createBox = function (t) {
    var e = t.name;
    var o = t.layer;
    var i = (t.index, t.x, t.y, this.mgr.prefabRoot.getChildByName(e));
    var r = cc.instantiate(i);
    r.parent = this.node;
    r.getComponent($level_287490_boxItem["default"]).init(this, t);
    this.mgr.drinkCount += r.getComponent($level_287490_boxItem["default"]).posCount;
    var n = this.boxMap.get(o);
    n.push(r);
    this.boxMap.set(o, n);
  };

  e.prototype.updateBoxState = function () {
    var t = this;
    var e = [];
    this.boxMap.forEach(function (t, o) {
      e.push(o);
    });

    var o = function o(_o) {
      var r = e[_o];
      var n = i.boxMap.get(r);

      if (0 === _o) {
        n.forEach(function (t) {
          if (t.getComponent($level_287490_boxItem["default"]).state == $level_287490_config.BoxState.Idle) {
            t.getComponent($level_287490_boxItem["default"]).coverCount = 1;
          }
        });
      } else {
        n.forEach(function (i) {
          if (i.getComponent($level_287490_boxItem["default"]).state == $level_287490_config.BoxState.Idle) {
            i.getComponent($level_287490_boxItem["default"]).coverCount = 1;

            for (var r = t.mgr.getBoxBoundingBox(i), n = _o - 1; n >= 0; n--) {
              var a = e[n];
              t.boxMap.get(a).forEach(function (e) {
                if (e.getComponent($level_287490_boxItem["default"]).state == $level_287490_config.BoxState.Idle) {
                  var o = t.mgr.getBoxBoundingBox(e);

                  if (r.intersects(o)) {
                    i.getComponent($level_287490_boxItem["default"]).coverCount += e.getComponent($level_287490_boxItem["default"]).coverCount;
                  }
                }
              });
            }
          }
        });
      }

      n.forEach(function (t) {
        if (t.active) {
          if (1 === t.getComponent($level_287490_boxItem["default"]).coverCount) {
            t.color = cc.Color.WHITE;
          } else {
            t.color = cc.color().fromHEX("#828282");
          }
        }
      });
    };

    var i = this;

    for (var r = 0; r < e.length; r++) {
      o(r);
    }
  };

  e.prototype.getBoxGroup = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    if (e < 0) {
      return this.boxColorGroup[t].shift();
    }
  };

  e.prototype.checkHasItemByColor = function (t) {
    return !!this.boxColorGroup[t] && !!this.boxColorGroup[t].length;
  };

  return __decorate([p], e);
}(cc.Component));
exports["default"] = d;

cc._RF.pop();