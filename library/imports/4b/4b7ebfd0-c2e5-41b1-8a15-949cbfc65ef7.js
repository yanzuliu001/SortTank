"use strict";
cc._RF.push(module, '4b7eb/QwuVBsYoVlJy/xl73', 'Level-287490_gameControl');
// script/scripts/Level-287490_gameControl.js

"use strict";

var i;

var $brainLevelBase = require("./BrainLevelBase");

var $levelUtil = require("./LevelUtil");

var $level_287490_boxItem = require("./Level-287490_boxItem");

var $level_287490_config = require("./Level-287490_config");

var $level_287490_containerControl = require("./Level-287490_containerControl");

var $level_287490_drinkItem = require("./Level-287490_drinkItem");

var $level_287490_waitItem = require("./Level-287490_waitItem");

var g = cc._decorator;
var m = g.ccclass;
var f = g.property;

var v = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.boxAtlas = null;
    e.drinkAtlas = null;
    e.drinkRoot = null;
    e.drinkShadowRoot = null;
    e.waitRoot = null;
    e.boxRoot = null;
    e.prefabRoot = null;
    e.reviveStarSpine = null;
    e.progress = null;
    e.containerControl = null;
    e.isReady = !1;
    e.colorType = [];
    e.levelData = null;
    e.boxData = [];
    e.boxMap = new Map();
    e.drinkPosArr = [];
    e.boxQueue = [];
    e.drinkQueue = [];
    e.lastBoxColorType = -1;
    e.drinkCount = 0;
    e.boxColorGroup = {};
    e.isAnim = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.changeBg = function () {};

  e.prototype.onLoad = function () {
    this.changeBg();
    t.prototype.onLoad.call(this);
    this.initNode();
  };

  e.prototype.initNode = function () {
    this.drinkRoot = this.dict.drinkRoot;
    this.drinkShadowRoot = this.dict.drinkShadowRoot;
    this.waitRoot = this.dict.waitRoot;
    this.boxRoot = this.dict.boxRoot;
    this.prefabRoot = this.dict.prefabRoot;
    this.reviveStarSpine = this.dict.reviveStarSpine.getComponent(sp.Skeleton);
    this.progress = this.dict.progress.getComponent(cc.Label);
    var t = cc.view.getFrameSize();
    t.width;
    t.height;
  };

  e.prototype.onLevelReady = function () {
    this.initData();
    this.initWait();
    this.containerControl = this.boxRoot.getComponent($level_287490_containerControl["default"]);
    this.containerControl.init(this);
    this.initDrink();
    this.initEvent();
  };

  e.prototype.getWaitEmptyNode = function () {
    var t = [];

    for (var e = 0; e < this.waitRoot.childrenCount; e++) {
      var o = this.waitRoot.children[e];

      if (o.getComponent($level_287490_waitItem["default"]).placeBox || o.getChildByName("video")) {//
      } else {
        t.push(o);
      }
    }

    return t;
  };

  e.prototype.initEvent = function () {
    var t = this;
    var e = null;
    $levelUtil["default"].touchEvent(this.dict.bg, {
      sFunc: function sFunc(o) {
        if (t.isAnim && t.isReady) {
          t.playClickSound();
          var i = o.getLocation();

          if (e = t.getTouchTarget(i)) {
            if (e.getComponent($level_287490_boxItem["default"]).coverCount > 1) {
              return e.runAction(t.shackAction(0.1, 2));
            }

            var r = t.getWaitEmptyNode()[0];

            if (!r) {
              return e.runAction(t.shackAction(0.1, 2));
            }

            if (e.getComponent($level_287490_boxItem["default"]).isAnim) {
              return;
            }

            e.getComponent($level_287490_boxItem["default"]).move(r);
            t.updateBoxState();
          }
        }
      }
    });
  };

  e.prototype.getTouchTarget = function (t) {
    var e = [];

    for (var o = 0; o < this.boxRoot.children.length; o++) {
      var i = this.boxRoot.children[o];

      if (i.getComponent($level_287490_boxItem["default"]).state == $level_287490_config.BoxState.Idle && i.getBoundingBoxToWorld().contains(t)) {
        e.push(i);
      }
    }

    e.sort(function (t, e) {
      return e.getComponent($level_287490_boxItem["default"]).layer - t.getComponent($level_287490_boxItem["default"]).layer || e.getComponent($level_287490_boxItem["default"]).index - t.getComponent($level_287490_boxItem["default"]).index;
    });
    return e[0];
  };

  e.prototype.shackAction = function (t, e) {
    var o = cc.moveBy(t, e, e);
    var i = cc.moveBy(t, -e, -e);
    var r = cc.moveBy(0.8 * t, 0.8 * e, 0.8 * e);
    var n = cc.moveBy(0.8 * t, 0.8 * -e, 0.8 * -e);
    var a = cc.moveBy(0.6 * t, 0.6 * e, 0.6 * e);
    var s = cc.moveBy(0.6 * t, 0.6 * -e, 0.6 * -e);
    var c = cc.moveBy(0.4 * t, 0.4 * e, 0.4 * e);
    var l = cc.moveBy(0.4 * t, 0.4 * -e, 0.4 * -e);
    var h = cc.moveBy(0.2 * t, 0.2 * e, 0.2 * e);
    var p = cc.moveBy(0.2 * t, 0.2 * -e, 0.2 * -e);
    return cc.sequence(o, i, r, n, a, s, c, l, h, p);
  };

  e.prototype.initData = function () {
    this.levelData = $levelUtil["default"].deepCopy(this.levelJSON.json[this.levelID]);
    this.colorType = Array.from({
      length: $level_287490_config.ColorName.length
    }, function (t, e) {
      return e;
    });
    $levelUtil["default"].fisherYatesShuffle(this.colorType);
    console.log("颜色顺序", this.colorType);
    this.drinkPosArr = $levelUtil["default"].deepCopy($level_287490_config.DrinkPosArr).reverse();
  };

  e.prototype.initWait = function () {
    for (var t = 0; t < this.waitRoot.childrenCount; t++) {
      this.waitRoot.children[t].getComponent($level_287490_waitItem["default"]).init(this, t);
    }
  };

  e.prototype.initBox = function () {};

  e.prototype.initDrink = function () {
    console.log("饮料总数", this.drinkCount);

    for (this.progress.string = "" + this.drinkCount; this.drinkQueue.length < this.drinkPosArr.length;) {
      var t = this.getDrinkColor(-1);

      if (!t) {
        break;
      }

      t.color;
      var e = t.amount;

      for (var o = 0; o < e; o++) {
        var i = cc.instantiate(this.prefabRoot.getChildByName("drinkItem"));
        i.parent = this.drinkRoot;
        i.getComponent($level_287490_drinkItem["default"]).init(this, t, this.drinkQueue.length);
        this.drinkQueue.push(i);
      }
    }
  };

  e.prototype.getDrinkColor = function (t) {
    var e = this.getWeight();

    if (e) {
      var o = this.levelData.limitRank;
      var i = Math.min(o, e.length);
      var r = [];
      var n = 0;

      for (var a = 0; a < i; a++) {
        var s = e[a].split("_")[1];
        r.push(Number(s));
      }

      r.forEach(function (t) {
        n += Number(t);
      });
      var c = this.randomNum(1, n);
      var l = 0;
      var h = 0;

      for (var p = 0; p < r.length; p++) {
        if ((l += r[p]) >= c && this.containerControl.checkHasItemByColor(e[p].split("_")[0])) {
          h = p;
          break;
        }
      }

      var d = e[h].split("_")[0];
      var u = this.containerControl.getBoxGroup(Number(d), t);
      return {
        color: Number(d),
        amount: Number(u)
      };
    }
  };

  e.prototype.getWaitAllBox = function () {
    var t = [];

    for (var e = 0; e < this.waitRoot.childrenCount; e++) {
      var o = this.waitRoot.children[e];

      if (o.getComponent($level_287490_waitItem["default"]).placeBox) {
        t.push(o.getComponent($level_287490_waitItem["default"]).placeBox);
      }
    }

    return t;
  };

  e.prototype.getWeight = function (t) {
    if (void 0 === t) {
      t = !1;
    }

    var e = {};
    this.colorType.forEach(function (t) {
      return e[t] = 0;
    });
    var o = this.levelData.blockWeight;
    this.boxQueue.forEach(function (t) {
      var i = t.getComponent($level_287490_boxItem["default"]);

      if (i.state == $level_287490_config.BoxState.Idle) {
        var r;
        var n = i.colorType;
        var a = i.coverCount;

        if (1 === a) {
          r = o[0];
        } else {
          if (2 == a) {
            r = o[1];
          } else {
            r = o[2];
          }
        }

        e[n] += r * i.posCount;
      }
    });
    var i = this.levelData.waitWeight;
    this.getWaitAllBox().forEach(function (t) {
      var o = t.getComponent($level_287490_boxItem["default"]);
      var r = o.colorType;
      var n = (o.posCount - o.putCount) * i;
      e[r] += n;
    });

    if (t) {
      var r = this.levelData.queueWeight;
      this.drinkQueue.forEach(function (t) {
        var o = t.getComponent($level_287490_drinkItem["default"]).colorType;
        var i = r;
        e[o] -= i;
      });
    }

    var n = [];

    for (var a in e) {
      var s = a + "_" + e[a];
      n.push(s);
    }

    if (n) {
      n.sort(function (t, e) {
        var o = t.split("_");
        var i = Number(o[1]);
        var r = e.split("_");
        return Number(r[1]) - i;
      });
    }

    return n;
  };

  e.prototype.playItemsIn = function () {
    var t = this;

    var e = __spreadArrays(this.boxRoot.children);

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

  e.prototype.randomNum = function (t, e) {
    var o = e - t;
    var i = Math.random();
    return t + Math.round(i * o);
  };

  e.prototype.createBox = function (t) {
    var e = t.name;
    var o = t.layer;
    var i = (t.index, t.x, t.y, this.prefabRoot.getChildByName(e));
    var r = cc.instantiate(i);
    r.parent = this.boxRoot;
    r.getComponent($level_287490_boxItem["default"]).init(this, t);
    this.drinkCount += r.getComponent($level_287490_boxItem["default"]).posCount;
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

            for (var r = t.getBoxBoundingBox(i), n = _o - 1; n >= 0; n--) {
              var a = e[n];
              t.boxMap.get(a).forEach(function (e) {
                if (e.getComponent($level_287490_boxItem["default"]).state == $level_287490_config.BoxState.Idle) {
                  var o = t.getBoxBoundingBox(e);

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

  e.prototype.getBoxBoundingBox = function (t) {
    var e = t.getBoundingBoxToWorld();
    return cc.rect(e.x, e.y, e.width - 6, e.height - 6);
  };

  e.prototype.checkDrinkMove = function () {
    var t = this.drinkQueue[0];

    if (t.getComponent($level_287490_drinkItem["default"]).state == $level_287490_config.DrinkState.Idle && !t.getComponent($level_287490_drinkItem["default"]).isAnim) {
      var e = this.getWaitAllBox();

      for (var o = 0; o < e.length; o++) {
        var i = e[o];

        if (t.getComponent($level_287490_drinkItem["default"]).colorType == i.getComponent($level_287490_boxItem["default"]).colorType) {
          this.drinkQueue.shift();
          return void t.getComponent($level_287490_drinkItem["default"]).moveToBox(i);
        }
      }
    }
  };

  __decorate([f(cc.SpriteAtlas)], e.prototype, "boxAtlas", void 0);

  __decorate([f(cc.SpriteAtlas)], e.prototype, "drinkAtlas", void 0);

  return __decorate([m], e);
}($brainLevelBase["default"]);

exports["default"] = v;

cc._RF.pop();