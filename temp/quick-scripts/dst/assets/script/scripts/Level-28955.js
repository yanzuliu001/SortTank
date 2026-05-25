
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-28955.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4837H2TbBAnolxxDKYSXyK', 'Level-28955');
// script/scripts/Level-28955.js

"use strict";

var i;
var l;

var $brainLevelBase = require("./BrainLevelBase");

var $levelConstant = require("./LevelConstant");

var $levelReviveHelper = require("./levelReviveHelper");

var $levelUtil = require("./LevelUtil");

var $poolMgr = require("./PoolMgr");

var m = cc._decorator;
var f = m.ccclass;
var v = m.property;

(function (t) {
  t[t.none = 0] = "none";
  t[t.init = 1] = "init";
  t[t.waitTouch = 2] = "waitTouch";
  t[t.checkWin = 3] = "checkWin";
  t[t.prop_clear = 4] = "prop_clear";
  t[t.prop_sort = 5] = "prop_sort";
  t[t.over = 6] = "over";
})(l || (l = {}));

var y;
var C;

var _;

var S = {
  "1-1": [[0, 16]],
  "2-1": [[0, 35.7], [0, -4.5]],
  "3-1": [[0, 55], [0, 15.5], [0, -24.4]],
  "2-2": [[-18.6, 35.5], [20.3, 35.5], [-18.6, -4.5], [20.3, -4.5]],
  "3-2": [[-18.6, 55.6], [20.2, 55.6], [-18.6, 15.6], [20.2, 15.6], [-18.6, -24.5], [20.2, -24.5]],
  "4-2": [[-18.6, 75.5], [20.8, 75.5], [-18.6, 35.4], [20.8, 35.4], [-18.6, -4.6], [20.8, -4.6], [-18.6, -44.5], [20.8, -44.5]]
};

(function (t) {
  t[t.None = 0] = "None";
  t[t.Empty = 1] = "Empty";
  t[t.Occupy = 2] = "Occupy";
  t[t.OccupyAnimation = 3] = "OccupyAnimation";
  t[t.FinishAnimation = 4] = "FinishAnimation";
  t[t.Finish = 5] = "Finish";
})(y || (y = {}));

(function (t) {
  t[t.None = 0] = "None";
  t[t.Idle = 1] = "Idle";
  t[t.WaitClick = 2] = "WaitClick";
  t[t.Wait = 3] = "Wait";
  t[t.Box = 4] = "Box";
  t[t.Animation = 5] = "Animation";
  t[t.Suc = 6] = "Suc";
})(C || (C = {}));

(function (t) {
  t[t.Lock = 0] = "Lock";
  t[t.Empty = 1] = "Empty";
  t[t.Occupy = 2] = "Occupy";
})(_ || (_ = {}));

var k = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.boxItemScale = 1;
    e._state = l.waitTouch;
    e.m_hierarchy = Symbol("m_hierarchy");
    e.m_index = Symbol("m_index");
    e.m_posIndex = Symbol("m_posIndex");
    e.m_id = Symbol("m_id");
    e.mTween = Symbol("mTween");
    e.m_state = Symbol("m_state");
    e.mStartPos = Symbol("mStartPos");
    e.m_occupy = Symbol("m_occupy");
    e.m_items = Symbol("m_items");
    e.m_wait = Symbol("m_wait");
    e.m_block = Symbol("m_block");
    e.effectLayer = null;
    e.gridLayer = null;
    e.itemLayer = null;
    e.propLayer = null;
    e.pres = null;
    e.isDebug = !1;
    e.bg = null;
    e.grid_bg = null;
    e.nodeDict = {};
    e.container = null;
    e.labProgress = null;
    e.pre_box = null;
    e.image = null;
    e.waitLayer = null;
    e.boxLayer = null;
    e.boxSpine = null;
    e.waitList = [];
    e.itemFirstPos = null;
    e.shadowLayer = null;
    e.pre_item = null;
    e.time = 1.5;
    e.clearAmount = 0;
    e.lastGood = null;
    e.guideNodes = [];
    e.currentGuideNode = null;
    e.guideText = ["点击盘子可放置对应颜色的饮料", "这种盘子子可以装4杯饮料", "这种盘子子可以装3杯饮料", "这种盘子子可以装6杯饮料"];
    e.guidedNodes = [];
    e.types = [];
    e.levelTotal = 0;
    e.level_config = null;
    e.boxDataObjects = [];
    e.itemPosList = [];
    e.guideLevelColor = [6, 1, 4, 8];
    e.guideLevelColor2 = [4, 1, 6, 8];
    e.boxMap = new Map();
    e.boxQueue = [];
    e.boxTypeGroup = {};
    e.nextNeedAdd2Index = 0;
    e.nextNeedAdd2 = [];
    e.isCheck = !1;
    e.drinkArr = [];
    e.itemQueue = [];
    e.noAmount = [];
    e.clearNum = 0;
    e.poolMgr = new $poolMgr["default"]();
    e.nextNeedAdd_new = [];
    e.reviveArr = [];
    e.isReviving = !1;
    e.nextNeedAdd = [];
    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "state", {
    get: function get() {
      return this._state;
    },
    set: function set(t) {
      this._state = t;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype.printData = function () {
    var t = [];
    this.dict.gridLayer.children.map(function (e) {
      t.push({
        x: e.x,
        y: e.y
      });
    });
    cc.log(JSON.stringify(t));
  };

  e.prototype.createSpine = function () {
    var t = function t(_t, e) {
      if (!_t.getChildByName(e)) {
        var o = new cc.Node(e);

        _t.addChild(o);

        o.addComponent(sp.Skeleton);
        o.getComponent(sp.Skeleton).premultipliedAlpha = !1;
        return o;
      }
    };

    var e = cc.find("game/image", this.node);
    t(e, "good");
    t(e, "jiesuo");
  };

  e.prototype.startClearTimer = function () {
    this.clearAmount += 1;
    this.unschedule(this.timer);
    this.scheduleOnce(this.timer, this.time);
    var t = null;

    if (this.clearAmount >= 5) {
      t = "animation3";
    } else {
      if (this.clearAmount >= 4) {
        t = "animation2";
      } else {
        if (this.clearAmount >= 3) {
          t = "animation1";
        } else {
          this.clearAmount >= 2 && (t = "animation0");
        }
      }
    }

    if (t) {
      console.log("测试效果");
      var e = cc.instantiate(this.dict.good);
      this.node.getChildByName("game").addChild(e);

      if (this.lastGood) {
        this.lastGood.destroy();
      }

      this.lastGood = e;
      e.getComponent(sp.Skeleton).setAnimation(0, t, !1);
      e.position = cc.v2();
      e.y = 100;
    }
  };

  e.prototype.timer = function () {
    this.clearAmount = 0;
  };

  e.prototype.createSprite = function () {
    if (this.folder) {//
    } else {
      this.folder = "f28749";
    }

    var t = function t(_t2, e) {
      if (!_t2.getChildByName(e)) {
        var o = new cc.Node(e);

        _t2.addChild(o);

        o.addComponent(cc.Sprite);
        return o;
      }
    };

    var e = cc.find("game/image", this.node);
    t(e, "1-s");
    t(e, "3-s");
    t(e, "5-s");
    t(e, "6-s");
    t(e, "8-s");
    t(e, "10-s");
  };

  e.prototype.onLoad = function () {
    this.createSprite();
    this.createSpine();
    t.prototype.onLoad.call(this);
    this.initLevel();
    this.dict.game.active = !1;
    this.dict.prop_clear_box.x = -88.236;
    this.dict.waitLayer.y = 330.487;

    if (this.dict[9]) {
      this.dict[9].x = 0;
    }

    this.cwNode.opacity = 0;
    this.dict.shadow.opacity = 150;
  };

  e.prototype.initLevel = function () {
    this.bg = this.dict.bg;
    this.itemLayer = this.dict.itemLayer;
    this.effectLayer = this.dict.effectLayer;
    this.gridLayer = this.dict.gridLayer;
    this.labProgress = this.dict.labProgress.getComponent(cc.Label);
    this.image = this.dict.image;
    this.waitLayer = this.dict.waitLayer;
    this.boxLayer = this.dict.boxLayer;
    this.boxSpine = this.dict.boxSpine;
    this.pre_item = this.dict.pre_item;

    if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
      this.dict.boxLayer.y -= 40;
    }

    this.shadowLayer = this.dict.shadowLayer;
  };

  e.prototype.init = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        this.initData();
        this.initGridLayer();
        this.initWaitLayer();
        this.initBoxLayer();
        this.initItemLayer();
        this.initEvent();
        this.initPool();
        this.initProgress();
        this.dict.game.active = !0;
        this.dict.game.getComponent(cc.Mask).enabled = !0;
        return [2];
      });
    });
  };

  e.prototype.handPos = function () {
    var t = this.currentGuideNode.parent.convertToWorldSpaceAR(this.currentGuideNode.position);
    var e = this.guideNodes.indexOf(this.currentGuideNode);
    this.dict.handText.getComponent(cc.Label).string = this.guideText[e];
    var o = this.dict.hand.parent.convertToNodeSpaceAR(t);
    this.dict.hand.position = o;
  };

  e.prototype.initData = function () {
    var t = this;
    var e = $levelUtil["default"].deepCopy(this.levelJSON.json[this.levelID]);
    this.level_config = e;
    this.types = Array.from({
      length: 8
    }, function (t, e) {
      return e + 1;
    });
    $levelUtil["default"].fisherYatesShuffle(this.types);

    if (e) {
      var o = e.box_config_editor;
      var i = $levelUtil["default"].deepCopy(o).split("*");
      i[1].split("#").forEach(function (e) {
        var o = e.split("_");
        var i = {
          name: o[0],
          hierarchy: Number(o[1]),
          index: Number(o[2]),
          x: Number(o[3]),
          y: Number(o[4])
        };
        t.boxDataObjects.push(i);
      });
      this.boxDataObjects.reverse();
      var r = i[2];

      if (r) {
        var n = r.split("_");
        cc.log("样式为：", Number(n[1]));
      }
    }

    if (-28807 == this.levelID) {
      this.level_config = {
        boxConfig: [[25, [1, 4]], [100, [1, 6]]],
        blockWeight: [50, 10, 1],
        waitWeight: 10,
        queueWeight: 10,
        limitRank: 4,
        lastTypeWeight: 0
      };
      this.boxDataObjects = [{
        name: "3-2-2",
        hierarchy: 1,
        index: 0,
        x: -50.721,
        y: 112.009
      }, {
        name: "2-2-2",
        hierarchy: 1,
        index: 1,
        x: 74.796,
        y: 112.009
      }, {
        name: "4-2",
        hierarchy: 1,
        index: 2,
        x: -75.404,
        y: -37.424
      }, {
        name: "4-2",
        hierarchy: 1,
        index: 3,
        x: 75.1,
        y: -39.981
      }];
    }

    if (-29055 == this.levelID) {
      this.level_config = {
        boxConfig: [[10, [6, 8]], [20, [5, 8]], [30, [6, 8]], [40, [5, 8]], [50, [4, 8]], [60, [4, 8]], [70, [3, 8]], [80, [3, 8]], [90, [2, 8]], [100, [1, 8]]],
        blockWeight: [50, 10, 1],
        waitWeight: 10,
        queueWeight: 10,
        limitRank: 3,
        lastTypeWeight: 0
      };
      this.boxDataObjects = [{
        name: "2-2",
        hierarchy: 1,
        index: 0,
        x: -75.404,
        y: 112.009
      }, {
        name: "1-3",
        hierarchy: 1,
        index: 1,
        x: 89.796,
        y: 117.009 + 20
      }, {
        name: "2-2",
        hierarchy: 1,
        index: 2,
        x: -75.404,
        y: -24.424
      }, {
        name: "3-2",
        hierarchy: 1,
        index: 3,
        x: 110.1,
        y: 30 - 39.981 + 15
      }];
    }

    this.boxDataObjects.forEach(function (e) {
      var o = e.hierarchy;

      if (t.boxMap.get(o)) {//
      } else {
        t.boxMap.set(o, []);
      }
    });
    A.forEach(function (e) {
      t.itemPosList.push(cc.v2(e.x, e.y));
    });
    this.itemPosList.reverse();
  };

  e.prototype.shuffleArray = function (t) {
    var e;

    for (var o = t.length - 1; o > 0; o--) {
      var i = Math.floor(Math.random() * (o + 1));
      e = [t[i], t[o]];
      t[o] = e[0];
      t[i] = e[1];
    }

    return t;
  };

  e.prototype.initBoxLayer = function () {
    var t = this;
    this.boxDataObjects.forEach(function (e) {
      t.createBox(e);
    });

    if (this.dict.hand) {
      var e = this.boxLayer;

      if (-28807 == this.levelID) {
        this.guideNodes.push(e.children[3]);
        this.guideNodes.push(e.children[2]);
        this.guideNodes.push(e.children[0]);
        this.guideNodes.push(e.children[1]);
      } else {
        this.guideNodes.push(e.children[2]);
        this.guideNodes.push(e.children[0]);
        this.guideNodes.push(e.children[1]);
        this.guideNodes.push(e.children[3]);
      }

      this.currentGuideNode = this.guideNodes[0];
      this.handPos();
    }

    var o = this.level_config.boxConfig;
    var i = [];
    this.boxMap.forEach(function (e) {
      e.forEach(function (e) {
        i.push(e);
        t.boxQueue.push(e);
      });
    });
    var r = Array.from({
      length: i.length
    }, function () {
      return 0;
    });
    var n = r.length;

    var a = function a(e, i) {
      var r = o.findIndex(function (t) {
        var o = t[0];
        return e <= n * o / 100;
      });

      if (r >= 0) {
        for (var a = o[r][1], s = [], c = a[0]; c <= a[1]; c++) {
          s.push(c);
        }

        s = t.shuffleArray(s);

        for (var l = $levelUtil["default"].getRandomValueInArray(s); l === i;) {
          l = $levelUtil["default"].getRandomValueInArray(s);
        }

        return l;
      }
    };

    var s = -1;

    for (var l = 0; l < r.length; l++) {
      if (0 === r[l]) {
        var h = a(l, s);
        r[l] = h;
        s = h;
      }
    }

    var p = {};
    r.forEach(function (e, o) {
      var r = t.types[e - 1];
      var n = i[o];

      if (-28807 == t.levelID) {
        r = t.guideLevelColor[o];
      }

      if (-29055 == t.levelID) {
        r = t.guideLevelColor2[o];
      }

      t.setBoxData(n, r);
      var a = t.getBoxOccupyPos(n).length;
      t.levelTotal += a;

      if (p[r]) {//
      } else {
        p[r] = [];
      }

      p[r].push(a);
    });
    cc.log("饮料总数：", this.levelTotal);

    var d = function d(e) {
      var o = [];
      p[e].forEach(function (e) {
        var i = [];

        for (var r = 0; r < e;) {
          var n = t.getRandomInteger(1, e / 2);

          if ((r += n) <= e) {
            i.push(n);
          } else {
            var a = e - (r -= n);
            i.push(a);
            r += a;
          }
        }

        i.forEach(function (t) {
          return o.push(t);
        });
      });
      var i = Number(e);
      g.boxTypeGroup[i] = [];
      o.forEach(function (e) {
        return t.boxTypeGroup[i].push(Number(e));
      });
    };

    var g = this;

    for (var m in p) {
      d(m);
    }

    if (-28807 == this.levelID) {
      this.nextNeedAdd2 = [8, 4, 6, 1, 8, 4, 6, 1, 8, 4];
      this.boxTypeGroup = {
        1: [1, 3],
        4: [2, 4, 2],
        6: [3, 3],
        8: [4, 2, 2]
      };
    }

    if (-29055 == this.levelID) {
      this.nextNeedAdd2 = [6, 4, 1, 8, 6, 8, 1, 4, 6];
      this.boxTypeGroup = {
        1: [1, 2],
        4: [2, 2],
        6: [2, 1, 1],
        8: [3, 3]
      };
    }

    this.updateBoxState();

    var f = __spreadArrays(this.boxLayer.children);

    f.sort(function (t, e) {
      return t.x - e.x;
    });
    f.forEach(function (t, e) {
      t.scale = 0;
      cc.tween(t).delay(0.01 * e).to(0.1, {
        scale: 1
      }).start();
    });
  };

  e.prototype.getBoxCloseSFName = function (t, e) {
    var o = 0;

    switch (t) {
      case "1-1":
        o = 100;
        break;

      case "1-2":
        o = 200;
        break;

      case "2-1":
        o = 300;
        break;

      case "1-3":
        o = 400;
        break;

      case "3-1":
        o = 500;
        break;

      case "2-2":
        o = 600;
        break;

      case "2-3":
        o = 700;
        break;

      case "3-2":
        o = 800;
        break;

      case "2-4":
        o = 900;
        break;

      case "4-2":
        o = 1e3;
    }

    return String(o + e);
  };

  e.prototype.getBoxOpenSFName = function (t, e) {
    var o = 0;

    switch (t) {
      case "1-1":
        o = 100;
        break;

      case "1-2":
      case "2-1":
        o = 300;
        break;

      case "1-3":
      case "3-1":
        o = 500;
        break;

      case "2-2":
        o = 600;
        break;

      case "2-3":
      case "3-2":
        o = 800;
        break;

      case "2-4":
      case "4-2":
        o = 1e3;
    }

    return String(o + e);
  };

  e.prototype.getBoxAnimId = function (t) {
    var e = 0;

    switch (t) {
      case "2-2":
      case "2-2-2":
        e = 1;
        break;

      case "3-2":
      case "3-2-2":
        e = 2;
        break;

      case "4-2":
      case "4-2-2":
        e = 3;
    }

    return String(e);
  };

  e.prototype.createBox = function (t) {
    var e = t.name;
    var o = t.hierarchy;
    var i = t.index;
    var r = t.x;
    var n = t.y;
    var a = this.boxLayer;
    var s = this.dict.boxPrefab.getChildByName(e);
    var c = cc.v2(r, n);
    var l = cc.instantiate(s);
    l.parent = a;
    l.position = c;
    l[this.m_hierarchy] = o;
    l[this.m_index] = i;
    l.name = s.name;
    this.setBoxIndex(l);
    var h = l.getChildByName("sp");
    h.zIndex = 0;
    h.scale = this.boxItemScale;
    var p = this.boxMap.get(o);
    p.push(l);
    this.boxMap.set(o, p);
    return l;
  };

  e.prototype.setBoxData = function (t, e, o) {
    if (void 0 === o) {
      o = !1;
    }

    if (e) {
      var i = e;
      t[this.m_id] = i;
      t[this.m_state] = y.Empty;
      t[this.m_occupy] = 0;
      t[this.m_items] = [];
      t[this.m_items].length = 0;
      this.setBoxSP(t, this.getBoxCloseSFName(t.name, e));
    }
  };

  e.prototype.setBoxSP = function (t, e) {
    t.getChildByName("sp").getComponent(cc.Sprite).spriteFrame = game.plateAtlas.getSpriteFrame(this.folder + "_" + e);
  };

  e.prototype.setBoxIndex = function (t, e) {
    if (void 0 === e) {
      e = 1;
    }

    if (1 == e) {
      var o = t[this.m_hierarchy];
      var i = t[this.m_index];
      t.zIndex = 100 * o + i;
    } else {
      if (2 == e) {
        t.zIndex = 4e3 + this.clearNum;
      } else {
        if (3 == e) {
          t.zIndex = 3e3 + this.clearNum;
        }
      }
    }
  };

  e.prototype.updateBoxState = function () {
    var t = this;
    var e = [];
    this.boxMap.forEach(function (t, o) {
      if (e.includes(o)) {//
      } else {
        e.push(o);
      }
    });

    var o = function o(_o) {
      var r = e[_o];
      var n = i.boxMap.get(r);

      if (0 === _o) {
        n.forEach(function (e) {
          if (e[t.m_state] === y.Empty) {
            e[t.m_block] = 1;
          }
        });
      } else {
        n.forEach(function (i) {
          if (i[t.m_state] === y.Empty) {
            i[t.m_block] = 1;

            for (var r = t.getBoxBoundingBox(i), n = _o - 1; n >= 0; n--) {
              var a = e[n];
              t.boxMap.get(a).forEach(function (e) {
                if (e[t.m_state] === y.Empty) {
                  var o = t.getBoxBoundingBox(e);

                  if (r.intersects(o)) {
                    i[t.m_block] += e[t.m_block];
                  }
                }
              });
            }
          }
        });
      }

      n.forEach(function (e) {
        if (e.active) {
          if (1 === e[t.m_block]) {
            e.getChildByName("sp").color = cc.Color.WHITE;
          } else {
            e.getChildByName("sp").color = cc.color().fromHEX("#828282");
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
    var e = t.getChildByName("sp").getBoundingBoxToWorld();
    return cc.rect(e.x, e.y, e.width - 6, e.height - 6);
  };

  e.prototype.setBoxToWait = function (t, e) {
    var o = this;

    if (e) {
      e[this.m_state] = _.Occupy;
      t[this.m_wait] = e;
    }

    this.addToArray(t, this.waitList);
    this.boxFly(t, e, function () {
      if (o.checkBoxTakeItem(t)) {//
      } else {
        cc.log("checkIsFail setBoxToWait");
        o.checkIsFail();
      }
    });
  };

  e.prototype.checkBoxTakeItem = function (t) {
    if (!t.flySuc) {
      return !1;
    }

    var e = this.getItemData(t);

    if (e && e.item) {
      var o = e.item;
      this.isCheck = !0;

      if (e.inFirstPos) {
        this.deleteFromArray(o, this.itemQueue);
        this.setItemToBox(o, t, !0);
        this.itemSupply();
        this.updateItemQueue();
      }

      return !0;
    }

    return !1;
  };

  e.prototype.getItemData = function (t) {
    if (0 === this.itemQueue.length) {
      return null;
    }

    var e = this.getBoxOccupyPos(t).length - t[this.m_occupy];
    var o = this.itemQueue[0];
    var i = !1;

    if (o[this.m_state] === C.Idle && o[this.m_id] === t[this.m_id] && e > 0) {
      i = !0;
    }

    if (i) {
      var r = o.position.sub(this.itemFirstPos).mag();
      return {
        item: o,
        inFirstPos: r < 5
      };
    }

    return null;
  };

  e.prototype.clearBox = function (t) {
    var e = this;
    var o = this.getBoxOccupyPos(t).length;
    t[this.m_state] = y.Finish;
    t.zIndex = 10;
    this.setBoxIndex(t, 3);
    t[this.m_id];
    this.scheduleOnce(function () {
      t.isClearBox;
      e.playEffect(t, function () {
        e.playLevelSound("Full");
        t.getChildByName("sp").active = !1;

        for (var i = t.getChildByName("item"); i.childrenCount;) {
          e.putItemToPool(i.children[0]);
        }

        e.setClearNum(o);
        t.active = !1;
        t.destroy();
        t.parent = null;
        e.checkWin();
        e.startClearTimer();
      });
      e.scheduleOnce(function () {
        e.deleteFromArray(t, e.waitList);

        if (t[e.m_wait]) {
          t[e.m_wait][e.m_state] = _.Empty;
          t[e.m_wait] = null;
        }
      }, 0.1);
    });
  };

  e.prototype.playEffect = function (t, e) {
    t.zIndex = 1e4;
    var o = this.getBoxOccupyPos(t).length;
    var i = this.dict.xiangzi_xiao;

    if (o >= 4 && o < 6) {
      i = this.dict.xiangzi_zhong;
    } else {
      if (o >= 6) {
        i = this.dict.xiangzi_da;
      }
    }

    var r = cc.instantiate(i);
    r.scale = 1.05;
    r.active = !0;
    r.name = "effect";
    this.effectLayer.addChild(r);
    r.position = $levelUtil["default"].convertPosition(cc.find("point", t), r);
    r.zIndex = 300;
    r.getComponent(sp.Skeleton).timeScale = 1.6;
    $levelUtil["default"].playSpineCallBack(r, "animation", !1, function () {
      if (e) {
        e();
      }

      cc.tween(r).by(3, {
        x: 7500
      }).call(function () {
        r.active = !1;
        r.removeFromParent(!0);
      }).start();
    });
  };

  e.prototype.boxFly = function (t, e, o) {
    var i = this;
    var r = t.getChildByName("item");

    if (r) {//
    } else {
      (r = new cc.Node("item")).parent = t;
      r.position = cc.v2();
      r.zIndex = 2;
    }

    var n = t.getChildByName("shadow");

    if (n) {//
    } else {
      if ("1-1" == t.name) {
        (n = cc.instantiate(this.dict["1-s"])).position = cc.v2(-5, 2);
      } else {
        if ("1-3" == t.name || "3-1" == t.name) {
          (n = cc.instantiate(this.dict["5-s"])).position = cc.v2(-5, 2);
        } else {
          if ("2-2" == t.name) {
            (n = cc.instantiate(this.dict["6-s"])).position = cc.v2(-5, 2);
          } else {
            "2-3" == t.name || "3-2" == t.name ? (n = cc.instantiate(this.dict["8-s"])).position = cc.v2(-5, 2) : "2-4" != t.name && "4-2" != t.name || ((n = cc.instantiate(this.dict["10-s"])).position = cc.v2(-5, 2));
          }
        }
      }

      n.name = "shadow";
      n.parent = t;
      t.children[0].zIndex = 2;
      n.zIndex = 1;
      n.scale = 0.85;
    }

    if (e) {
      this.setBoxIndex(t, 2);
      cc.tween(t).to(0.2, {
        position: $levelUtil["default"].convertPosition(e, t)
      }).call(function () {
        t.flySuc = !0;
        var e = i.getBoxOpenSFName(t.name, t[i.m_id]);
        i.setBoxSP(t, e);
        var r = t.getChildByName("sp");
        cc.tween(r).to(0.2, {
          scale: 0.85
        }).start();

        if (o) {
          o();
        }
      }).start();
    } else {
      if (o) {
        o();
      }
    }
  };

  e.prototype.getBoxOccupyPos = function (t) {
    var e = this.getBoxTypeByName(t.name);
    var o = S[e];

    if (o) {//
    } else {
      e = this.getBoxTypeByName(t.name, !0);
      o = S[e];
    }

    return o || (console.warn("No occupy positions found for box type: " + e), []);
  };

  e.prototype.getBoxTypeByName = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    var o = t.split("-");
    var i = o[0] + "-" + o[1];

    if (e) {
      i = o[1] + "-" + o[0];
    }

    return i;
  };

  e.prototype.boxIsEmpty = function (t) {
    return t[this.m_state] === y.Empty;
  };

  e.prototype.getBoxGroup = function (t, e) {
    if (void 0 === e) {
      e = -1;
    }

    if (this.boxTypeGroup[t]) {
      this.boxTypeGroup[t] = this.filterBoxTypeGroupArr(this.boxTypeGroup[t]);
    }

    var o = 0;
    var i = e;

    if (e < 0) {
      try {
        o = this.boxTypeGroup[t].shift();
      } catch (l) {}
    } else {
      var r = __spreadArrays(this.boxTypeGroup[t]);

      for (var n = 0; n < r.length; n++) {
        var a = r[n];

        if (a >= i) {
          r[n] -= i;
          i = 0;
          break;
        }

        i -= a;
        r[n] = 0;
      }

      for (var s = !0; s;) {
        if (r[0] <= 0) {
          r.shift();
        } else {
          s = !1;
        }
      }

      this.boxTypeGroup[t].length = 0;
      this.boxTypeGroup[t] = __spreadArrays(r);
      o = e;
    }

    return o;
  };

  e.prototype.initItemLayer = function () {
    this.drinkArr = new Array(this.levelTotal).fill(-1);
    var t = 0;

    for (var e = this.itemPosList.length; t < e;) {
      var o = this.getItemType(-1);

      if (!o) {
        break;
      }

      var i = o.type;
      var r = o.num;

      for (var n = 0; n < r; n++) {
        var a;

        if (t + n >= e) {
          a = e - 1;
        } else {
          a = t + n;
        }

        this.createItem(a, Number(i));
      }

      t += r;
    }

    this.itemFirstPos = this.itemQueue[0].position;
  };

  e.prototype.itemSupply = function (t) {
    if (void 0 === t) {
      t = -1;
    }

    if (!(this.itemQueue.length > this.itemPosList.length)) {
      if (this.reviveArr.length) {
        var e = this.reviveArr.shift();
        cc.log("复活-新增", e, 1, this.itemQueue.length);

        for (var o = 0; o < 1; o++) {
          var i = this.itemPosList.length - 1;
          this.createItem(i, e);
        }
      } else if (this.nextNeedAdd.length > 0) {
        console.log("复活", "饮料新增");
        e = this.nextNeedAdd.shift();
        this.boxTypeGroup[e][0] -= 1;

        if (0 == this.boxTypeGroup[e][0]) {
          this.boxTypeGroup[e].shift();
        }

        for (o = 0; o < 1; o++) {
          i = this.itemPosList.length - 1;
          this.createItem(i, e);
        }
      } else {
        var r = this.getItemType(t);

        if (r && r.type && r.num) {
          e = r.type;
          var n = r.num;

          for (o = 0; o < n; o++) {
            i = this.itemPosList.length - 1;
            this.createItem(i, e);
          }
        }
      }
    }
  };

  e.prototype.updateItemQueue = function (t) {
    var e = this;

    if (void 0 === t) {
      t = 0;
    }

    var o = this.itemQueue;
    var i = this.itemPosList;
    var r = 1;

    var n = function n() {
      if (++r >= o.length) {
        if (e.state === l.prop_sort) {
          e.state = l.waitTouch;
        }

        e.itemQueue.forEach(function (t) {
          t[e.m_state] = C.Idle;
        });
        e.waitList.sort(function (t, o) {
          return e.getBoxOccupyPos(t).length - t[e.m_occupy] - (e.getBoxOccupyPos(o).length - o[e.m_occupy]);
        });

        for (var t = !1, i = 0; i < e.waitList.length; i++) {
          var n = e.waitList[i];

          if (e.checkBoxTakeItem(n)) {
            t = !0;
            break;
          }
        }

        if (t) {//
        } else {
          e.isCheck = !1;
          e.checkIsFail();
        }
      }
    };

    var a = function a(e) {
      var r = o[e];
      r.stopAllActions();
      cc.tween(r).stop();

      if (e > i.length - 1) {
        r.opacity = 255;
        n();
      } else {
        r.opacity = 255;

        for (var a = [], c = e, l = r[s.m_posIndex] - 1; l >= c; l--) {
          a.push(l);
        }

        if (a.length) {
          s.itemMove(r, a, 0, function () {
            n();
          }, t * e);
        }
      }
    };

    var s = this;

    for (var c = 0; c < o.length; c++) {
      a(c);
    }
  };

  e.prototype.itemMove = function (t, e, o, i, r) {
    var n = this;

    if (void 0 === i) {
      i = null;
    }

    if (void 0 === r) {
      r = 0;
    }

    if (o >= e.length) {
      if (i) {
        i();
      }
    } else {
      t[this.m_state] = C.Animation;
      var a = e[o];
      var s = t.position;
      var c = this.itemPosList[a];
      s.sub(c).mag();
      cc.tween(t).delay(r).to(0.055, {
        position: c
      }).call(function () {
        if (r > 0) {
          r = 0;
        }

        n.setItemIndex(t);
        t[n.m_posIndex] = a;
        o += 1;
        n.itemMove(t, e, o, i);
      }).start();
    }
  };

  e.prototype.setItemToBox = function (t, e, o) {
    var i = this;

    if (void 0 === o) {
      o = !1;
    }

    if (t[this.m_state] != C.Box) {
      var r = this.getBoxOccupyPos(e);
      var n = r.length;
      var a = r[e[this.m_occupy]];
      var s = cc.v2(a[0], a[1]);
      var c = e.getChildByName("item");
      var l = e.convertToWorldSpaceAR(s);
      var h = t.parent.convertToNodeSpaceAR(l);
      e[this.m_occupy]++;

      if (e[this.m_occupy] >= n) {
        e[this.m_occupy] = n;
        e[this.m_state] = y.FinishAnimation;
        this.deleteFromArray(e, this.boxQueue);
      }

      t[this.m_state] = C.Box;
      this.setItemIndex(t, 2);
      this.deleteFromArray(t, this.itemQueue);
      var p = t.position;
      var d = h.sub(p).mag() / 1e3;
      t.stopAllActions();
      var u;

      if (h.x > p.x) {
        u = 1;
      } else {
        u = -1;
      }

      var g = p.add(cc.v2(100 * u, 150));
      t.m_shadow.active = !1;
      cc.tween(t).bezierTo(d, p, g, h).call(function () {
        i.playLevelSound("Get_on");
        var e = t.getChildByName("sp").getComponent(cc.Sprite);
        var o = 10 + t[i.m_id];
        e.spriteFrame = game.plateAtlas.getSpriteFrame(i.folder + "_" + o + "_1");
        i.changeParent(t, c);
      }).to(0.1, {
        scale: 1
      }).call(function () {
        i.addToArray(t, e[i.m_items]);

        if (e[i.m_items].length >= n) {
          if (e.getChildByName("shadow")) {
            e.getChildByName("shadow").destroy();
          }

          i.clearBox(e);
        }

        t.stopAllActions();
      }).start();
    }
  };

  e.prototype.getItemType = function (t) {
    if (void 0 === t) {
      t = -1;
    }

    var e = this.level_config;
    var o = this.getWeight();
    cc.log("权重：", o);

    if (o.length) {
      var i = e.limitRank;
      var r = Math.min(i, o.length);
      var n = [];
      var a = 0;

      for (var s = 0; s < r; s++) {
        var c = o[s].split("_")[1];
        n.push(Number(c));
      }

      n.forEach(function (t) {
        a += Number(t);
      });
      var l = this.getRandomInteger(1, a);
      var h = 0;
      var p = 0;

      for (var d = 0; d < n.length; d++) {
        if ((h += n[d]) >= l && this.checkHasItemByColor(o[d].split("_")[0])) {
          p = d;
          break;
        }
      }

      var u = o[p].split("_")[0];

      if ((-28807 == this.levelID || -29055 == this.levelID) && (u = this.nextNeedAdd2[this.nextNeedAdd2Index], this.nextNeedAdd2Index += 1, null == u)) {
        return null;
      }

      var g = this.getBoxGroup(Number(u), t);
      return {
        type: Number(u),
        num: Number(g)
      };
    }

    return null;
  };

  e.prototype.checkHasItemByColor = function (t) {
    return !!this.boxTypeGroup[t] && !!this.boxTypeGroup[t].length;
  };

  e.prototype.createItem = function (t, e, o) {
    if (void 0 === o) {
      o = null;
    }

    var i = this.itemPosList[t];

    if (o) {
      i.addSelf(o);
    }

    var r = String(Number(e) + 10);
    var n = this.itemLayer;
    var a = this.poolMgr.get(this.pre_item, "pre_item");
    a.parent = n;
    a.position = i;
    a[this.m_index] = this.itemLayer.childrenCount;
    a[this.m_state] = C.Idle;
    a[this.m_id] = e;
    a[this.m_posIndex] = t;
    a.name = String(e);
    a.getChildByName("sp").getComponent(cc.Sprite).spriteFrame = game.plateAtlas.getSpriteFrame(this.folder + "_" + r);
    this.setItemIndex(a);
    this.itemQueue.push(a);
    var s = a.getChildByName("shadow");
    s.active = !0;
    s.setPosition(-18, -18);
    this.changeParent(s, this.shadowLayer);
    s.m_follow = a;
    var c = s.parent.convertToWorldSpaceAR(s.position);
    var l = a.parent.convertToWorldSpaceAR(a.position);
    s.m_follow_wVec = l.sub(c);
    a.m_shadow = s;
    return a;
  };

  e.prototype.setItemIndex = function (t, e) {
    if (void 0 === e) {
      e = 1;
    }

    switch (e) {
      case 1:
        t.zIndex = 5e3 - t.y;
        break;

      case 2:
        t.zIndex = 9999;
    }
  };

  e.prototype.getWeight = function (t) {
    var e = this;

    if (void 0 === t) {
      t = !0;
    }

    var o = this.level_config;
    var i = {};
    this.types.forEach(function (t) {
      return i[t] = 0;
    });
    var r = o.blockWeight;
    this.boxQueue.forEach(function (t) {
      if (e.boxIsEmpty(t)) {
        var o;
        var n = t[e.m_id];
        var a = t[e.m_block];

        if (1 === a) {
          o = r[0];
        } else {
          if (2 == a) {
            o = r[1];
          } else {
            o = r[2];
          }
        }

        i[n] += o * e.getBoxOccupyPos(t).length;
      }
    });
    var n = o.waitWeight;
    this.waitList.forEach(function (t) {
      var o = t[e.m_id];
      var r = (e.getBoxOccupyPos(t).length - t[e.m_occupy]) * n;
      i[o] += r;
    });

    if (t) {
      var a = o.queueWeight;
      this.itemQueue.forEach(function (t) {
        var o = t[e.m_id];
        var r = a;
        i[o] -= r;
      });
    }

    var s = [];

    for (var c in i) {
      var l = c + "_" + i[c];
      s.push(l);
    }

    if (s) {
      s.sort(function (t, e) {
        var o = t.split("_");
        var i = Number(o[1]);
        var r = e.split("_");
        return Number(r[1]) - i;
      });
    }

    return s;
  };

  e.prototype.initWaitLayer = function () {
    var t = this;

    var e = function e(_e) {
      var i = o.waitLayer.children[_e];
      i.name = "wait_" + _e;
      var r = i.getChildByName("video");

      if (null == r ? void 0 : r.active) {
        i[o.m_state] = _.Lock;
        $levelUtil["default"].onClickEvent(i, function () {
          if (r.active) {
            cc.game.emit($levelConstant.LEVEL_EVENT.REWARDVIDEO, function (e) {
              if (0 === e) {
                t.unlockWait(i);
              }
            });
          }
        });
      } else {
        i[o.m_state] = _.Empty;
      }
    };

    var o = this;

    for (var i = 0; i < this.waitLayer.children.length; i++) {
      e(i);
    }
  };

  e.prototype.unlockWait = function (t) {
    var e = this;

    if (void 0 === t) {
      t = null;
    }

    if (t) {//
    } else {
      t = this.waitLayer.children.find(function (t) {
        return t[e.m_state] === _.Lock;
      });
    }

    var o = t.getChildByName("video");
    o.active = !1;
    var i = cc.instantiate(this.dict.jiesuo);
    i.position = cc.v2();
    o.parent.addChild(i);
    i.getComponent(sp.Skeleton).premultipliedAlpha = !1;
    i.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    o.removeFromParent(!0);
    t[this.m_state] = _.Empty;
  };

  e.prototype.func_check_unlockWait = function () {
    var t = null;

    for (var e = 0; e < this.waitLayer.children.length; e++) {
      var o = this.waitLayer.children[e];
      o.name = String(e);
      var i = o.getChildByName("video");

      if (i && i.active) {
        t = o;
        break;
      }
    }

    return t;
  };

  e.prototype.func_unlockWait = function () {
    var t = this.func_check_unlockWait();

    if (t) {
      this.unlockWait(t);
    }
  };

  e.prototype.getWait = function () {
    for (var t = 0; t < this.waitLayer.children.length; t++) {
      var e = this.waitLayer.children[t];

      if (e.active && e[this.m_state] === _.Empty) {
        return e;
      }
    }

    return null;
  };

  e.prototype.getRandomInteger = function (t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t;
  };

  e.prototype.loadSpriteFrame = function (t) {
    return this.image.getChildByName(t).getComponent(cc.Sprite).spriteFrame;
  };

  e.prototype.checkIsFail = function () {
    if (this.state !== l.over) {
      var t = 0;

      for (var e = 0; e < this.waitLayer.children.length; e++) {
        if (this.waitLayer.children[e][this.m_state] !== _.Lock) {
          t += 1;
        }
      }

      var o = 0;

      for (e = 0; e < this.waitList.length; e++) {
        if ((r = this.waitList[e])[this.m_state] === y.Occupy) {
          o += 1;
        }
      }

      if (t == o) {
        cc.game.emit("checkTipText", 1);
      } else {
        if (t - 1 == o) {
          cc.game.emit("checkTipText", 0);
        }
      }

      if (!this.isCheck && o === t) {
        var i = !1;

        for (e = 0; e < this.waitList.length; e++) {
          var r = this.waitList[e];
          var n = this.getItemData(r);

          if (n && n.item) {
            i = !0;
            break;
          }
        }

        if (i) {//
        } else {
          this.fail(1);
        }
      }
    }
  };

  e.prototype.update = function () {
    if (this.state != l.none) {
      this.updateShadow();
    }
  };

  e.prototype.updateShadow = function () {
    var t = this;
    this.shadowLayer.children.map(function (e) {
      if (e.active) {
        var o = e.m_follow;

        if (o && o.active && o[t.m_state] != C.Box) {
          var i = o.parent.convertToWorldSpaceAR(o.position).sub(e.m_follow_wVec);
          var r = e.parent.convertToNodeSpaceAR(i);
          e.position = r;
        }
      }
    });
  };

  e.prototype.initGuidence = function () {
    if (-28391 === this.levelID) {
      var t = this.dict.sz;
      cc.tween(t).to(0.2, {
        scale: 0.8
      }).to(0.2, {
        scale: 1
      }).union().repeatForever().start();
    }
  };

  e.prototype.updateGuidence = function () {
    if (-28391 === this.levelID) {
      var t = this.dict.sz;

      if (t.active) {
        t.active = !1;
      }
    }
  };

  e.prototype.initGridLayer = function () {
    this.gridLayer.active = !1;
  };

  e.prototype.getTouchNode = function (t) {
    var e = this;
    var o = this.boxLayer.children;
    var i = [];

    for (var r = 0; r < o.length; r++) {
      if ((a = o[r])[this.m_state] === y.Empty) {
        if (a[this.m_block] > 1) {//
        } else {
          if (a.getBoundingBoxToWorld().contains(t)) {
            i.push(a);
          }
        }
      }
    }

    var n = [];

    for (r = 0; r < o.length; r++) {
      var a;

      if ((a = o[r]).getBoundingBoxToWorld().contains(t)) {
        n.push(a);
      }
    }

    if (!i.length && n.length) {
      n.sort(function (t, o) {
        return o[e.m_index] - t[e.m_index];
      });
      n[0].runAction(this.shackAction(0.1, 2));
    }

    return i.length ? (i.sort(function (t, o) {
      return o[e.m_index] - t[e.m_index];
    }), i[0]) : null;
  };

  e.prototype.initEvent = function () {
    var t = this;
    var e = null;
    $levelUtil["default"].touchEvent(this.dict.touchNode, {
      sFunc: function sFunc(o) {
        t.playClickSound();

        if (t.state === l.waitTouch || t.state === l.prop_clear) {
          var i = o.getLocation();

          if (e = t.getTouchNode(i)) {
            if (t.state == l.waitTouch) {
              if (t.dict.hand && t.dict.hand.active && (t.guidedNodes.push(e), t.currentGuideNode == e)) {
                var r = !1;

                for (var n = 0; n < t.guideNodes.length; n++) {
                  var a = t.guideNodes[n];

                  if (-1 == t.guidedNodes.indexOf(a)) {
                    t.currentGuideNode = a;
                    t.handPos();
                    r = !0;
                    break;
                  }
                }

                if (r) {//
                } else {
                  t.dict.hand.active = !1;
                  t.dict.handText.active = !1;
                  t.dict.handText.parent.active = !1;
                }
              }

              var s = t.getWait();

              if (s) {
                e[t.m_state] = y.Occupy;
                t.updateBoxState();
                t.setBoxToWait(e, s);
              } else {
                e.runAction(t.shackAction(0.1, 2));
              }
            } else {
              if (t.state == l.prop_clear) {
                e[t.m_state] = y.Finish;
                t.updateBoxState();
                t.scheduleOnce(function () {
                  cc.game.emit("isRemove", !1);
                }, 0.2);
                t.setBoxToPropClear(e);
              }
            }
          }
        }
      },
      mFunc: function mFunc() {},
      eFunc: function eFunc() {}
    });
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.enterKeyInput, this);
  };

  e.prototype.setClearNum = function (t) {
    this.clearNum += t;

    if (this.clearNum < 0) {
      this.clearNum = 0;
    }

    this.updateProgress();
  };

  e.prototype.initProgress = function () {
    this.clearNum = 0;
    this.updateProgress();
  };

  e.prototype.updateProgress = function () {
    var t = this.levelTotal;
    var e = t - this.clearNum;
    var o = (this.clearNum / t).toFixed(2);
    var i = Number(o);
    i *= 100;

    if ((i = Math.floor(i)) > 100) {
      i = 100;
    }

    this.labProgress.string = "" + e;
    cc.game.emit("allPersonAmount", e, t);
    console.log("allPersonAmount", e, t);
    game.totalAmount = this.levelTotal;
    game.remainingAmount = e;
  };

  e.prototype.checkWin = function () {
    if (this.boxLayer.children.some(function (t) {
      return t.active;
    })) {//
    } else {
      this.suc(1);
    }
  };

  e.prototype.onLevelReady = function () {
    this.init();
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

  e.prototype.suc = function (t) {
    var e = this;

    if (void 0 === t) {
      t = 1;
    }

    cc.log("suc");

    if (this.state != l.over) {
      this.state = l.over;
      this.scheduleOnce(function () {
        e.playRight(null, 1);
      }, t);
    }
  };

  e.prototype.lose = function (t, e, o, i) {
    if (void 0 === e) {
      e = !0;
    }

    if (void 0 === i) {
      i = 1;
    }

    if (this.state != l.over) {
      if (t) {
        if (t instanceof cc.Node) {
          var r = cc.instantiate(t);
          r.x += 70;
          r.y -= 70;
          r.parent = t.parent;
          r.active = !1;

          if (e) {
            this.playError(r);
          } else {
            this.playErrorOnce(r);
          }

          r.destroy();
        } else {
          if (e) {
            this.playError(t);
          } else {
            this.playErrorOnce(t);
          }
        }
      } else {
        if (e) {
          this.playError();
        } else {
          this.playErrorOnce();
        }
      }

      this.scheduleOnce(function () {
        if (o) {
          o();
        }
      }, i);
    }
  };

  e.prototype.fail = function (t, e) {
    var o = this;

    if (void 0 === t) {
      t = 1;
    }

    if (void 0 === e) {
      e = null;
    }

    cc.log("fail");
    this.lose(null, !1, function () {
      cc.log("levelReviveHelper");
      $levelReviveHelper["default"].levelFailEvent("是否需要复活", function () {
        o.func_revive();
      });
    });
    this.state = l.over;
  };

  e.prototype.getWordPos = function (t) {
    return t.parent.convertToWorldSpaceAR(t.position);
  };

  e.prototype.getDistance = function (t, e) {
    var o = $levelUtil["default"].convertPosition(t, e);
    return e.position.sub(o).mag();
  };

  e.prototype.deleteFromArray = function (t, e) {
    var o = e.indexOf(t);

    if (-1 !== o) {
      e.splice(o, 1);
    }
  };

  e.prototype.addToArray = function (t, e) {
    if (-1 === e.indexOf(t)) {
      e.push(t);
    }
  };

  e.prototype.changeParent = function (t, e) {
    var o = t.parent.convertToWorldSpaceAR(t.position);
    t.parent = e;
    t.position = t.parent.convertToNodeSpaceAR(o);
  };

  e.prototype.onDisable = function () {
    t.prototype.onDisable.call(this);
    cc.director.getCollisionManager().enabled = !1;
    cc.director.getCollisionManager().enabledDebugDraw = !1;
    this.unscheduleAllCallbacks();
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.enterKeyInput, this);
  };

  e.prototype.initPool = function () {
    for (var t = 0; t < 4; t++) {
      this.poolMgr.put(cc.instantiate(this.pre_item), "pre_item");
    }
  };

  e.prototype.putItemToPool = function (t) {
    t.active = !1;
    var e = t.m_shadow;
    e.m_follow = null;
    this.changeParent(e, t);
    this.poolMgr.put(t, "pre_item");
  };

  e.prototype.func_chooseClear = function () {
    if (this.state != l.prop_clear) {
      cc.log("道具：选择消除");
      this.state = l.prop_clear;
      cc.game.emit("isRemove", !0);
    }
  };

  e.prototype.getBoxRemainNum = function (t) {
    return this.getBoxTotalNum(t) - t[this.m_occupy];
  };

  e.prototype.getBoxTotalNum = function (t) {
    return this.getBoxOccupyPos(t).length;
  };

  e.prototype.setBoxToPropClear = function (t, e) {
    var o = this;

    if (void 0 === e) {
      e = !0;
    }

    var i = null;

    if (e) {
      i = this.dict.prop_clear_box;
    }

    t.isClearBox = !0;
    var r = this.getBoxRemainNum(t);
    var n = [];

    var a = __spreadArrays(this.itemQueue);

    var s = t[this.m_id];

    for (var h = 0; h < a.length && (s !== (m = a[h])[this.m_id] || (n.push(m), this.deleteFromArray(m, this.itemQueue), 0 != --r)); h++) {}

    if (r > 0) {
      var p = this.itemPosList.length - 1;
      var d = cc.v2();
      var u = this.getBoxGroup(s, r);

      for (var g = 0; g < u; g++) {
        var m;
        d = cc.v2(0, 30 * (g + 1));
        (m = this.createItem(p, s, d)).opacity = 0;
        n.push(m);
      }
    }

    this.boxFly(t, i, function () {
      n.forEach(function (e) {
        e.opacity = 255;
        e.stopAllActions();
        o.setItemToBox(e, t, !0);
      });
      var e = o.getBoxTotalNum(t);

      for (var i = 0; i < e; i++) {
        o.itemSupply();
      }

      o.itemQueue.forEach(function (t) {
        return t.stopAllActions();
      });
      o.updateItemQueue();
      o.state = l.waitTouch;
    });
  };

  e.prototype.func_sort = function () {
    this.state = l.prop_sort;
    var t = this.getWeight(!0);
    cc.log("道具：排序");
    cc.log("排序：权重：", t);
    cc.log("队列：", this.itemQueue.length);

    if (t.length) {
      var e = this.itemPosList.length - 1;
      var o = this.itemPosList[e];
      var i = [];

      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        var a = Number(n.split("_")[0]);

        for (var s = 0; s < this.itemQueue.length; s++) {
          var h = this.itemQueue[s];

          if (a === h[this.m_id]) {
            h[this.m_posIndex] = e;
            h.position = o;
            i.push(h);
          }
        }
      }

      this.itemQueue.length = 0;
      this.itemQueue = __spreadArrays(i);
      this.updateItemQueue(0.05);
    }
  };

  e.prototype.func_revive = function () {
    this.state = l.waitTouch;
    cc.log("道具：复活");
    var t = this.func_check_unlockWait();

    if (t) {
      this.unlockWait(t);
    }

    this.newReviveAnim();
  };

  e.prototype.clear = function (t) {
    var e = this;
    t.isClearBox = !0;
    var o = this.dict.prop_clear_box;
    this.boxFly(t, o, function () {
      var o = e.getBoxOccupyPos(t).length;
      o -= t[e.m_occupy];
      console.log("消除道具", o);
      var i = t[e.m_id];
      var r = [];
      var n = new Array(o).fill(i);
      cc.log("getBoxGroup start ", $levelUtil["default"].deepCopy(e.boxTypeGroup));

      for (var a = 0; a < o; a++) {
        var s = e.itemQueue[a];
        r.push(s);
      }

      for (a = 0; a < e.itemQueue.length; a++) {
        var c = (s = e.itemQueue[a])[e.m_id];

        if (e.boxTypeGroup[i].length) {//
        } else {
          e.boxTypeGroup[i] = [0];
        }

        e.boxTypeGroup[i][0] += 1;

        if (c != i) {
          n.push(c);
        }
      }

      for (console.log("还剩余有----", n.length, e.itemQueue.length); n.length < e.itemQueue.length;) {
        c = e.getSurplusColor();
        console.log("还剩余有", c);
        e.boxTypeGroup[c][0] -= 1;
        n.push(c);
      }

      cc.log("getBoxGroup start2 ", $levelUtil["default"].deepCopy(e.boxTypeGroup));
      console.log("colorSort", n);

      for (a = 0; a < n.length; a++) {
        var h = n[a];

        if (e.itemQueue[a]) {
          s = e.itemQueue[a];
          var p = String(Number(h) + 10);
          s[e.m_id] = h;
          s.name = String(h);
          var d = s.getChildByName("sp");
          var g = e.image.getChildByName(p);
          d.getComponent(cc.Sprite).spriteFrame = g.getComponent(cc.Sprite).spriteFrame;
        }
      }

      cc.log("getBoxGroup start3 ", $levelUtil["default"].deepCopy(e.boxTypeGroup));
      r.forEach(function (o) {
        e.setItemToBox(o, t, !0);
      });
      e.updateItemQueue();
      e.state = l.waitTouch;
    });
  };

  e.prototype.setSurplusColor = function (t, e) {
    for (var o = 0; o < this.itemQueue.length; o++) {
      if (!e[o]) {
        var i = this.itemQueue[o];

        if (t == i[this.m_id]) {
          var r = this.getSurplusColor();

          if (r) {
            console.log("还剩余有", r);
            this.boxTypeGroup[r][0] -= 1;
            i[this.m_id] = r;
            var n = String(Number(r) + 10);
            var a = i.getChildByName("sp");
            var s = this.image.getChildByName(n);
            return void (a.getComponent(cc.Sprite).spriteFrame = s.getComponent(cc.Sprite).spriteFrame);
          }
        }
      }
    }
  };

  e.prototype.filterBoxTypeGroupArr = function (t) {
    return t.filter(function (t) {
      return 0 != t;
    });
  };

  e.prototype.newReviveAnim = function () {
    var t = this;

    if (this.isReviving) {//
    } else {
      this.isReviving = !0;
      this.dict.starSpine.active = !0;
      this.schedule(function () {
        for (var e = 0; e < t.itemQueue.length; e++) {
          var o = t.itemQueue[e];
          var i = $levelUtil["default"].getRandomInt(1, 8);
          t.setColorItemImg_revive(i, o);
        }
      }, 0.2, 2.2);
      cc.tween(this.node).delay(1.5).call(function () {
        t.dict.starSpine.active = !1;
        var e = Math.min(4, t.waitList.length);
        var o = [];

        for (var i = 0; i < e; i++) {
          var r = t.waitList[i];
          var n = t.getBoxOccupyPos(r).length;
          n -= r[t.m_occupy];
          var a = r[t.m_id];
          o = o.concat(new Array(n).fill(a));
        }

        var s = {};

        for (i = 0; i < t.itemQueue.length; i++) {
          s[c = (m = t.itemQueue[i])[t.m_id]] || (s[c] = 0);
          s[c] += 1;
        }

        for (var c in s) {
          if (s[c]) {
            t.boxTypeGroup[c].push(s[c]);
          }
        }

        console.log("colorSort", o);
        console.log("itemQueue", t.itemQueue.length);

        for (i = 0; i < t.itemQueue.length; i++) {
          (m = t.itemQueue[i]).m_shadow.active = !1;
          m.destroy();
        }

        t.itemQueue = [];
        t.nextNeedAdd_new = o;
        var l = 0;

        for (var h = t.itemPosList.length; l < h;) {
          var p = void 0;
          var d = void 0;

          if (t.nextNeedAdd_new.length > 0) {
            p = t.nextNeedAdd_new.shift();
            d = 1;
            t.getBoxGroup(p, 1);
          } else {
            var u = t.getItemType(-1);
            p = u.type;
            d = u.num;

            if (!u) {
              break;
            }
          }

          for (i = 0; i < d; i++) {
            var g,
                m = t.createItem(g, Number(p));

            if (l + i >= h) {
              g = h - 1;
            } else {
              g = l + i;
            }
          }

          l += d;
        }

        for (i = 0; i < e && (r = t.waitList[i], !t.checkBoxTakeItem(r)); i++) {}

        t.isReviving = !1;
      }).start();
    }
  };

  e.prototype.getSurplusColor = function () {
    console.log("this.boxTypeGroup", this.boxTypeGroup);

    for (var t = 1; t < 9; t++) {
      this.boxTypeGroup[t] = this.filterBoxTypeGroupArr(this.boxTypeGroup[t]);
      var e = this.boxTypeGroup[t];

      if (e && e[0]) {
        for (var o = 0; o < e.length; o++) {
          if (e[o]) {
            return t;
          }
        }
      }
    }
  };

  e.prototype.setColorItemImg_revive = function (t, e) {
    var o = String(Number(t) + 10);
    var i = e.getChildByName("sp");
    game.drinkAtlas;
    i.getComponent(cc.Sprite).spriteFrame = game.plateAtlas.getSpriteFrame(this.folder + "_" + o);
  };

  e.prototype.enterKeyInput = function (t) {
    switch (t.keyCode) {
      case cc.macro.KEY.a:
        return this.func_chooseClear();

      case cc.macro.KEY.s:
        return this.func_sort();

      case cc.macro.KEY.x:
        return this.func_revive();
    }
  };

  __decorate([v], e.prototype, "boxItemScale", void 0);

  return __decorate([f], e);
}($brainLevelBase["default"]);

exports["default"] = k;
var A = [{
  x: 220,
  y: 865
}, {
  x: 220,
  y: 800
}, {
  x: 220,
  y: 735
}, {
  x: 165,
  y: 735
}, {
  x: 110,
  y: 735
}, {
  x: 55,
  y: 735
}, {
  x: 0,
  y: 735
}, {
  x: -55,
  y: 735
}, {
  x: -110,
  y: 735
}, {
  x: -165,
  y: 735
}, {
  x: -220,
  y: 735
}, {
  x: -220,
  y: 695
}, {
  x: -220,
  y: 645
}, {
  x: -165,
  y: 645
}, {
  x: -110,
  y: 645
}, {
  x: -55,
  y: 645
}, {
  x: 0,
  y: 645
}, {
  x: 55,
  y: 645
}, {
  x: 110,
  y: 645
}, {
  x: 165,
  y: 645
}, {
  x: 220,
  y: 645
}, {
  x: 220,
  y: 600.223
}, {
  x: 220,
  y: 560
}, {
  x: 165,
  y: 560
}, {
  x: 110,
  y: 560
}, {
  x: 55,
  y: 560
}, {
  x: 0,
  y: 560
}, {
  x: 0,
  y: 500.732
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yODk1NS5qcyJdLCJuYW1lcyI6WyJpIiwibCIsIiRicmFpbkxldmVsQmFzZSIsInJlcXVpcmUiLCIkbGV2ZWxDb25zdGFudCIsIiRsZXZlbFJldml2ZUhlbHBlciIsIiRsZXZlbFV0aWwiLCIkcG9vbE1nciIsIm0iLCJjYyIsIl9kZWNvcmF0b3IiLCJmIiwiY2NjbGFzcyIsInYiLCJwcm9wZXJ0eSIsInQiLCJub25lIiwiaW5pdCIsIndhaXRUb3VjaCIsImNoZWNrV2luIiwicHJvcF9jbGVhciIsInByb3Bfc29ydCIsIm92ZXIiLCJ5IiwiQyIsIl8iLCJTIiwiTm9uZSIsIkVtcHR5IiwiT2NjdXB5IiwiT2NjdXB5QW5pbWF0aW9uIiwiRmluaXNoQW5pbWF0aW9uIiwiRmluaXNoIiwiSWRsZSIsIldhaXRDbGljayIsIldhaXQiLCJCb3giLCJBbmltYXRpb24iLCJTdWMiLCJMb2NrIiwiayIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImJveEl0ZW1TY2FsZSIsIl9zdGF0ZSIsIm1faGllcmFyY2h5IiwiU3ltYm9sIiwibV9pbmRleCIsIm1fcG9zSW5kZXgiLCJtX2lkIiwibVR3ZWVuIiwibV9zdGF0ZSIsIm1TdGFydFBvcyIsIm1fb2NjdXB5IiwibV9pdGVtcyIsIm1fd2FpdCIsIm1fYmxvY2siLCJlZmZlY3RMYXllciIsImdyaWRMYXllciIsIml0ZW1MYXllciIsInByb3BMYXllciIsInByZXMiLCJpc0RlYnVnIiwiYmciLCJncmlkX2JnIiwibm9kZURpY3QiLCJjb250YWluZXIiLCJsYWJQcm9ncmVzcyIsInByZV9ib3giLCJpbWFnZSIsIndhaXRMYXllciIsImJveExheWVyIiwiYm94U3BpbmUiLCJ3YWl0TGlzdCIsIml0ZW1GaXJzdFBvcyIsInNoYWRvd0xheWVyIiwicHJlX2l0ZW0iLCJ0aW1lIiwiY2xlYXJBbW91bnQiLCJsYXN0R29vZCIsImd1aWRlTm9kZXMiLCJjdXJyZW50R3VpZGVOb2RlIiwiZ3VpZGVUZXh0IiwiZ3VpZGVkTm9kZXMiLCJ0eXBlcyIsImxldmVsVG90YWwiLCJsZXZlbF9jb25maWciLCJib3hEYXRhT2JqZWN0cyIsIml0ZW1Qb3NMaXN0IiwiZ3VpZGVMZXZlbENvbG9yIiwiZ3VpZGVMZXZlbENvbG9yMiIsImJveE1hcCIsIk1hcCIsImJveFF1ZXVlIiwiYm94VHlwZUdyb3VwIiwibmV4dE5lZWRBZGQySW5kZXgiLCJuZXh0TmVlZEFkZDIiLCJpc0NoZWNrIiwiZHJpbmtBcnIiLCJpdGVtUXVldWUiLCJub0Ftb3VudCIsImNsZWFyTnVtIiwicG9vbE1nciIsIm5leHROZWVkQWRkX25ldyIsInJldml2ZUFyciIsImlzUmV2aXZpbmciLCJuZXh0TmVlZEFkZCIsIl9fZXh0ZW5kcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwiZ2V0Iiwic2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByaW50RGF0YSIsImRpY3QiLCJjaGlsZHJlbiIsIm1hcCIsInB1c2giLCJ4IiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZVNwaW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJvIiwiTm9kZSIsImFkZENoaWxkIiwiYWRkQ29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsImdldENvbXBvbmVudCIsInByZW11bHRpcGxpZWRBbHBoYSIsImZpbmQiLCJub2RlIiwic3RhcnRDbGVhclRpbWVyIiwidW5zY2hlZHVsZSIsInRpbWVyIiwic2NoZWR1bGVPbmNlIiwiY29uc29sZSIsImluc3RhbnRpYXRlIiwiZ29vZCIsImRlc3Ryb3kiLCJzZXRBbmltYXRpb24iLCJwb3NpdGlvbiIsInYyIiwiY3JlYXRlU3ByaXRlIiwiZm9sZGVyIiwiU3ByaXRlIiwib25Mb2FkIiwiY2FsbCIsImluaXRMZXZlbCIsImdhbWUiLCJhY3RpdmUiLCJwcm9wX2NsZWFyX2JveCIsImN3Tm9kZSIsIm9wYWNpdHkiLCJzaGFkb3ciLCJMYWJlbCIsInZpZXciLCJnZXRGcmFtZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsIl9fYXdhaXRlciIsIl9fZ2VuZXJhdG9yIiwiaW5pdERhdGEiLCJpbml0R3JpZExheWVyIiwiaW5pdFdhaXRMYXllciIsImluaXRCb3hMYXllciIsImluaXRJdGVtTGF5ZXIiLCJpbml0RXZlbnQiLCJpbml0UG9vbCIsImluaXRQcm9ncmVzcyIsIk1hc2siLCJlbmFibGVkIiwiaGFuZFBvcyIsInBhcmVudCIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsImluZGV4T2YiLCJoYW5kVGV4dCIsInN0cmluZyIsImhhbmQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImRlZXBDb3B5IiwibGV2ZWxKU09OIiwianNvbiIsImxldmVsSUQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaXNoZXJZYXRlc1NodWZmbGUiLCJib3hfY29uZmlnX2VkaXRvciIsInNwbGl0IiwiZm9yRWFjaCIsIm5hbWUiLCJoaWVyYXJjaHkiLCJOdW1iZXIiLCJpbmRleCIsInJldmVyc2UiLCJyIiwibiIsImJveENvbmZpZyIsImJsb2NrV2VpZ2h0Iiwid2FpdFdlaWdodCIsInF1ZXVlV2VpZ2h0IiwibGltaXRSYW5rIiwibGFzdFR5cGVXZWlnaHQiLCJBIiwic2h1ZmZsZUFycmF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY3JlYXRlQm94IiwiYSIsImZpbmRJbmRleCIsInMiLCJjIiwiZ2V0UmFuZG9tVmFsdWVJbkFycmF5IiwiaCIsInAiLCJzZXRCb3hEYXRhIiwiZ2V0Qm94T2NjdXB5UG9zIiwiZCIsImdldFJhbmRvbUludGVnZXIiLCJnIiwidXBkYXRlQm94U3RhdGUiLCJfX3NwcmVhZEFycmF5cyIsInNvcnQiLCJzY2FsZSIsInR3ZWVuIiwiZGVsYXkiLCJ0byIsInN0YXJ0IiwiZ2V0Qm94Q2xvc2VTRk5hbWUiLCJTdHJpbmciLCJnZXRCb3hPcGVuU0ZOYW1lIiwiZ2V0Qm94QW5pbUlkIiwiYm94UHJlZmFiIiwic2V0Qm94SW5kZXgiLCJ6SW5kZXgiLCJzZXRCb3hTUCIsInNwcml0ZUZyYW1lIiwicGxhdGVBdGxhcyIsImdldFNwcml0ZUZyYW1lIiwiaW5jbHVkZXMiLCJnZXRCb3hCb3VuZGluZ0JveCIsImludGVyc2VjdHMiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJmcm9tSEVYIiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwicmVjdCIsInNldEJveFRvV2FpdCIsImFkZFRvQXJyYXkiLCJib3hGbHkiLCJjaGVja0JveFRha2VJdGVtIiwiY2hlY2tJc0ZhaWwiLCJmbHlTdWMiLCJnZXRJdGVtRGF0YSIsIml0ZW0iLCJpbkZpcnN0UG9zIiwiZGVsZXRlRnJvbUFycmF5Iiwic2V0SXRlbVRvQm94IiwiaXRlbVN1cHBseSIsInVwZGF0ZUl0ZW1RdWV1ZSIsInN1YiIsIm1hZyIsImNsZWFyQm94IiwiaXNDbGVhckJveCIsInBsYXlFZmZlY3QiLCJwbGF5TGV2ZWxTb3VuZCIsImNoaWxkcmVuQ291bnQiLCJwdXRJdGVtVG9Qb29sIiwic2V0Q2xlYXJOdW0iLCJ4aWFuZ3ppX3hpYW8iLCJ4aWFuZ3ppX3pob25nIiwieGlhbmd6aV9kYSIsImNvbnZlcnRQb3NpdGlvbiIsInRpbWVTY2FsZSIsInBsYXlTcGluZUNhbGxCYWNrIiwiYnkiLCJyZW1vdmVGcm9tUGFyZW50IiwiZ2V0Qm94VHlwZUJ5TmFtZSIsIndhcm4iLCJib3hJc0VtcHR5IiwiZ2V0Qm94R3JvdXAiLCJmaWx0ZXJCb3hUeXBlR3JvdXBBcnIiLCJzaGlmdCIsImZpbGwiLCJnZXRJdGVtVHlwZSIsInR5cGUiLCJudW0iLCJjcmVhdGVJdGVtIiwic3RhdGUiLCJzdG9wQWxsQWN0aW9ucyIsInN0b3AiLCJpdGVtTW92ZSIsInNldEl0ZW1JbmRleCIsInUiLCJhZGQiLCJtX3NoYWRvdyIsImJlemllclRvIiwiY2hhbmdlUGFyZW50IiwiZ2V0V2VpZ2h0IiwibWluIiwiY2hlY2tIYXNJdGVtQnlDb2xvciIsImFkZFNlbGYiLCJzZXRQb3NpdGlvbiIsIm1fZm9sbG93IiwibV9mb2xsb3dfd1ZlYyIsIm9uQ2xpY2tFdmVudCIsImVtaXQiLCJMRVZFTF9FVkVOVCIsIlJFV0FSRFZJREVPIiwidW5sb2NrV2FpdCIsImppZXN1byIsImZ1bmNfY2hlY2tfdW5sb2NrV2FpdCIsImZ1bmNfdW5sb2NrV2FpdCIsImdldFdhaXQiLCJsb2FkU3ByaXRlRnJhbWUiLCJmYWlsIiwidXBkYXRlIiwidXBkYXRlU2hhZG93IiwiaW5pdEd1aWRlbmNlIiwic3oiLCJ1bmlvbiIsInJlcGVhdEZvcmV2ZXIiLCJ1cGRhdGVHdWlkZW5jZSIsImdldFRvdWNoTm9kZSIsImNvbnRhaW5zIiwicnVuQWN0aW9uIiwic2hhY2tBY3Rpb24iLCJ0b3VjaEV2ZW50IiwidG91Y2hOb2RlIiwic0Z1bmMiLCJwbGF5Q2xpY2tTb3VuZCIsImdldExvY2F0aW9uIiwic2V0Qm94VG9Qcm9wQ2xlYXIiLCJtRnVuYyIsImVGdW5jIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJlbnRlcktleUlucHV0IiwidXBkYXRlUHJvZ3Jlc3MiLCJ0b0ZpeGVkIiwidG90YWxBbW91bnQiLCJyZW1haW5pbmdBbW91bnQiLCJzb21lIiwic3VjIiwib25MZXZlbFJlYWR5IiwibW92ZUJ5Iiwic2VxdWVuY2UiLCJwbGF5UmlnaHQiLCJsb3NlIiwicGxheUVycm9yIiwicGxheUVycm9yT25jZSIsImxldmVsRmFpbEV2ZW50IiwiZnVuY19yZXZpdmUiLCJnZXRXb3JkUG9zIiwiZ2V0RGlzdGFuY2UiLCJzcGxpY2UiLCJvbkRpc2FibGUiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkRGVidWdEcmF3IiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsIm9mZiIsInB1dCIsImZ1bmNfY2hvb3NlQ2xlYXIiLCJnZXRCb3hSZW1haW5OdW0iLCJnZXRCb3hUb3RhbE51bSIsImZ1bmNfc29ydCIsIm5ld1Jldml2ZUFuaW0iLCJjbGVhciIsImdldFN1cnBsdXNDb2xvciIsInNldFN1cnBsdXNDb2xvciIsImZpbHRlciIsInN0YXJTcGluZSIsInNjaGVkdWxlIiwiZ2V0UmFuZG9tSW50Iiwic2V0Q29sb3JJdGVtSW1nX3Jldml2ZSIsImNvbmNhdCIsImRyaW5rQXRsYXMiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjs7QUFDQSxJQUFJQyxlQUFlLEdBQUdDLE9BQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRSxrQkFBa0IsR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBQWhDOztBQUNBLElBQUlHLFVBQVUsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUksUUFBUSxHQUFHSixPQUFPLENBQUMsV0FBRCxDQUF0Qjs7QUFDQSxJQUFJSyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNNLFFBQVY7O0FBQ0EsQ0FBQyxVQUFVQyxDQUFWLEVBQWE7RUFDVkEsQ0FBQyxDQUFFQSxDQUFDLENBQUNDLElBQUYsR0FBUyxDQUFYLENBQUQsR0FBa0IsTUFBbEI7RUFDQUQsQ0FBQyxDQUFFQSxDQUFDLENBQUNFLElBQUYsR0FBUyxDQUFYLENBQUQsR0FBa0IsTUFBbEI7RUFDQUYsQ0FBQyxDQUFFQSxDQUFDLENBQUNHLFNBQUYsR0FBYyxDQUFoQixDQUFELEdBQXVCLFdBQXZCO0VBQ0FILENBQUMsQ0FBRUEsQ0FBQyxDQUFDSSxRQUFGLEdBQWEsQ0FBZixDQUFELEdBQXNCLFVBQXRCO0VBQ0FKLENBQUMsQ0FBRUEsQ0FBQyxDQUFDSyxVQUFGLEdBQWUsQ0FBakIsQ0FBRCxHQUF3QixZQUF4QjtFQUNBTCxDQUFDLENBQUVBLENBQUMsQ0FBQ00sU0FBRixHQUFjLENBQWhC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R0FEUDtFQUVJbEcsQ0FBQyxFQUFFO0FBRlAsQ0F6RkksRUE2Rko7RUFDSWtHLENBQUMsRUFBRSxHQURQO0VBRUlsRyxDQUFDLEVBQUU7QUFGUCxDQTdGSSxFQWlHSjtFQUNJa0csQ0FBQyxFQUFFLEdBRFA7RUFFSWxHLENBQUMsRUFBRTtBQUZQLENBakdJLEVBcUdKO0VBQ0lrRyxDQUFDLEVBQUUsRUFEUDtFQUVJbEcsQ0FBQyxFQUFFO0FBRlAsQ0FyR0ksRUF5R0o7RUFDSWtHLENBQUMsRUFBRSxDQURQO0VBRUlsRyxDQUFDLEVBQUU7QUFGUCxDQXpHSSxFQTZHSjtFQUNJa0csQ0FBQyxFQUFFLENBRFA7RUFFSWxHLENBQUMsRUFBRTtBQUZQLENBN0dJLENBQVIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGw7XG52YXIgJGJyYWluTGV2ZWxCYXNlID0gcmVxdWlyZShcIi4vQnJhaW5MZXZlbEJhc2VcIik7XG52YXIgJGxldmVsQ29uc3RhbnQgPSByZXF1aXJlKFwiLi9MZXZlbENvbnN0YW50XCIpO1xudmFyICRsZXZlbFJldml2ZUhlbHBlciA9IHJlcXVpcmUoXCIuL2xldmVsUmV2aXZlSGVscGVyXCIpO1xudmFyICRsZXZlbFV0aWwgPSByZXF1aXJlKFwiLi9MZXZlbFV0aWxcIik7XG52YXIgJHBvb2xNZ3IgPSByZXF1aXJlKFwiLi9Qb29sTWdyXCIpO1xudmFyIG0gPSBjYy5fZGVjb3JhdG9yO1xudmFyIGYgPSBtLmNjY2xhc3M7XG52YXIgdiA9IG0ucHJvcGVydHk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgICB0Wyh0Lm5vbmUgPSAwKV0gPSBcIm5vbmVcIjtcbiAgICB0Wyh0LmluaXQgPSAxKV0gPSBcImluaXRcIjtcbiAgICB0Wyh0LndhaXRUb3VjaCA9IDIpXSA9IFwid2FpdFRvdWNoXCI7XG4gICAgdFsodC5jaGVja1dpbiA9IDMpXSA9IFwiY2hlY2tXaW5cIjtcbiAgICB0Wyh0LnByb3BfY2xlYXIgPSA0KV0gPSBcInByb3BfY2xlYXJcIjtcbiAgICB0Wyh0LnByb3Bfc29ydCA9IDUpXSA9IFwicHJvcF9zb3J0XCI7XG4gICAgdFsodC5vdmVyID0gNildID0gXCJvdmVyXCI7XG59KShsIHx8IChsID0ge30pKTtcbnZhciB5O1xudmFyIEM7XG52YXIgXztcbnZhciBTID0ge1xuICAgIFwiMS0xXCI6IFtbMCwgMTZdXSxcbiAgICBcIjItMVwiOiBbXG4gICAgICAgIFswLCAzNS43XSxcbiAgICAgICAgWzAsIC00LjVdXG4gICAgXSxcbiAgICBcIjMtMVwiOiBbXG4gICAgICAgIFswLCA1NV0sXG4gICAgICAgIFswLCAxNS41XSxcbiAgICAgICAgWzAsIC0yNC40XVxuICAgIF0sXG4gICAgXCIyLTJcIjogW1xuICAgICAgICBbLTE4LjYsIDM1LjVdLFxuICAgICAgICBbMjAuMywgMzUuNV0sXG4gICAgICAgIFstMTguNiwgLTQuNV0sXG4gICAgICAgIFsyMC4zLCAtNC41XVxuICAgIF0sXG4gICAgXCIzLTJcIjogW1xuICAgICAgICBbLTE4LjYsIDU1LjZdLFxuICAgICAgICBbMjAuMiwgNTUuNl0sXG4gICAgICAgIFstMTguNiwgMTUuNl0sXG4gICAgICAgIFsyMC4yLCAxNS42XSxcbiAgICAgICAgWy0xOC42LCAtMjQuNV0sXG4gICAgICAgIFsyMC4yLCAtMjQuNV1cbiAgICBdLFxuICAgIFwiNC0yXCI6IFtcbiAgICAgICAgWy0xOC42LCA3NS41XSxcbiAgICAgICAgWzIwLjgsIDc1LjVdLFxuICAgICAgICBbLTE4LjYsIDM1LjRdLFxuICAgICAgICBbMjAuOCwgMzUuNF0sXG4gICAgICAgIFstMTguNiwgLTQuNl0sXG4gICAgICAgIFsyMC44LCAtNC42XSxcbiAgICAgICAgWy0xOC42LCAtNDQuNV0sXG4gICAgICAgIFsyMC44LCAtNDQuNV1cbiAgICBdXG59O1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdFsodC5Ob25lID0gMCldID0gXCJOb25lXCI7XG4gICAgdFsodC5FbXB0eSA9IDEpXSA9IFwiRW1wdHlcIjtcbiAgICB0Wyh0Lk9jY3VweSA9IDIpXSA9IFwiT2NjdXB5XCI7XG4gICAgdFsodC5PY2N1cHlBbmltYXRpb24gPSAzKV0gPSBcIk9jY3VweUFuaW1hdGlvblwiO1xuICAgIHRbKHQuRmluaXNoQW5pbWF0aW9uID0gNCldID0gXCJGaW5pc2hBbmltYXRpb25cIjtcbiAgICB0Wyh0LkZpbmlzaCA9IDUpXSA9IFwiRmluaXNoXCI7XG59KSh5IHx8ICh5ID0ge30pKTtcbihmdW5jdGlvbiAodCkge1xuICAgIHRbKHQuTm9uZSA9IDApXSA9IFwiTm9uZVwiO1xuICAgIHRbKHQuSWRsZSA9IDEpXSA9IFwiSWRsZVwiO1xuICAgIHRbKHQuV2FpdENsaWNrID0gMildID0gXCJXYWl0Q2xpY2tcIjtcbiAgICB0Wyh0LldhaXQgPSAzKV0gPSBcIldhaXRcIjtcbiAgICB0Wyh0LkJveCA9IDQpXSA9IFwiQm94XCI7XG4gICAgdFsodC5BbmltYXRpb24gPSA1KV0gPSBcIkFuaW1hdGlvblwiO1xuICAgIHRbKHQuU3VjID0gNildID0gXCJTdWNcIjtcbn0pKEMgfHwgKEMgPSB7fSkpO1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdFsodC5Mb2NrID0gMCldID0gXCJMb2NrXCI7XG4gICAgdFsodC5FbXB0eSA9IDEpXSA9IFwiRW1wdHlcIjtcbiAgICB0Wyh0Lk9jY3VweSA9IDIpXSA9IFwiT2NjdXB5XCI7XG59KShfIHx8IChfID0ge30pKTtcbnZhciBrID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuYm94SXRlbVNjYWxlID0gMTtcbiAgICAgICAgZS5fc3RhdGUgPSBsLndhaXRUb3VjaDtcbiAgICAgICAgZS5tX2hpZXJhcmNoeSA9IFN5bWJvbChcIm1faGllcmFyY2h5XCIpO1xuICAgICAgICBlLm1faW5kZXggPSBTeW1ib2woXCJtX2luZGV4XCIpO1xuICAgICAgICBlLm1fcG9zSW5kZXggPSBTeW1ib2woXCJtX3Bvc0luZGV4XCIpO1xuICAgICAgICBlLm1faWQgPSBTeW1ib2woXCJtX2lkXCIpO1xuICAgICAgICBlLm1Ud2VlbiA9IFN5bWJvbChcIm1Ud2VlblwiKTtcbiAgICAgICAgZS5tX3N0YXRlID0gU3ltYm9sKFwibV9zdGF0ZVwiKTtcbiAgICAgICAgZS5tU3RhcnRQb3MgPSBTeW1ib2woXCJtU3RhcnRQb3NcIik7XG4gICAgICAgIGUubV9vY2N1cHkgPSBTeW1ib2woXCJtX29jY3VweVwiKTtcbiAgICAgICAgZS5tX2l0ZW1zID0gU3ltYm9sKFwibV9pdGVtc1wiKTtcbiAgICAgICAgZS5tX3dhaXQgPSBTeW1ib2woXCJtX3dhaXRcIik7XG4gICAgICAgIGUubV9ibG9jayA9IFN5bWJvbChcIm1fYmxvY2tcIik7XG4gICAgICAgIGUuZWZmZWN0TGF5ZXIgPSBudWxsO1xuICAgICAgICBlLmdyaWRMYXllciA9IG51bGw7XG4gICAgICAgIGUuaXRlbUxheWVyID0gbnVsbDtcbiAgICAgICAgZS5wcm9wTGF5ZXIgPSBudWxsO1xuICAgICAgICBlLnByZXMgPSBudWxsO1xuICAgICAgICBlLmlzRGVidWcgPSAhMTtcbiAgICAgICAgZS5iZyA9IG51bGw7XG4gICAgICAgIGUuZ3JpZF9iZyA9IG51bGw7XG4gICAgICAgIGUubm9kZURpY3QgPSB7fTtcbiAgICAgICAgZS5jb250YWluZXIgPSBudWxsO1xuICAgICAgICBlLmxhYlByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgZS5wcmVfYm94ID0gbnVsbDtcbiAgICAgICAgZS5pbWFnZSA9IG51bGw7XG4gICAgICAgIGUud2FpdExheWVyID0gbnVsbDtcbiAgICAgICAgZS5ib3hMYXllciA9IG51bGw7XG4gICAgICAgIGUuYm94U3BpbmUgPSBudWxsO1xuICAgICAgICBlLndhaXRMaXN0ID0gW107XG4gICAgICAgIGUuaXRlbUZpcnN0UG9zID0gbnVsbDtcbiAgICAgICAgZS5zaGFkb3dMYXllciA9IG51bGw7XG4gICAgICAgIGUucHJlX2l0ZW0gPSBudWxsO1xuICAgICAgICBlLnRpbWUgPSAxLjU7XG4gICAgICAgIGUuY2xlYXJBbW91bnQgPSAwO1xuICAgICAgICBlLmxhc3RHb29kID0gbnVsbDtcbiAgICAgICAgZS5ndWlkZU5vZGVzID0gW107XG4gICAgICAgIGUuY3VycmVudEd1aWRlTm9kZSA9IG51bGw7XG4gICAgICAgIGUuZ3VpZGVUZXh0ID0gW1xuICAgICAgICAgICAgXCLngrnlh7vnm5jlrZDlj6/mlL7nva7lr7nlupTpopzoibLnmoTppa7mlplcIixcbiAgICAgICAgICAgIFwi6L+Z56eN55uY5a2Q5a2Q5Y+v5Lul6KOFNOadr+mlruaWmVwiLFxuICAgICAgICAgICAgXCLov5nnp43nm5jlrZDlrZDlj6/ku6Xoo4Uz5p2v6aWu5paZXCIsXG4gICAgICAgICAgICBcIui/meenjeebmOWtkOWtkOWPr+S7peijhTbmna/ppa7mlplcIlxuICAgICAgICBdO1xuICAgICAgICBlLmd1aWRlZE5vZGVzID0gW107XG4gICAgICAgIGUudHlwZXMgPSBbXTtcbiAgICAgICAgZS5sZXZlbFRvdGFsID0gMDtcbiAgICAgICAgZS5sZXZlbF9jb25maWcgPSBudWxsO1xuICAgICAgICBlLmJveERhdGFPYmplY3RzID0gW107XG4gICAgICAgIGUuaXRlbVBvc0xpc3QgPSBbXTtcbiAgICAgICAgZS5ndWlkZUxldmVsQ29sb3IgPSBbNiwgMSwgNCwgOF07XG4gICAgICAgIGUuZ3VpZGVMZXZlbENvbG9yMiA9IFs0LCAxLCA2LCA4XTtcbiAgICAgICAgZS5ib3hNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGUuYm94UXVldWUgPSBbXTtcbiAgICAgICAgZS5ib3hUeXBlR3JvdXAgPSB7fTtcbiAgICAgICAgZS5uZXh0TmVlZEFkZDJJbmRleCA9IDA7XG4gICAgICAgIGUubmV4dE5lZWRBZGQyID0gW107XG4gICAgICAgIGUuaXNDaGVjayA9ICExO1xuICAgICAgICBlLmRyaW5rQXJyID0gW107XG4gICAgICAgIGUuaXRlbVF1ZXVlID0gW107XG4gICAgICAgIGUubm9BbW91bnQgPSBbXTtcbiAgICAgICAgZS5jbGVhck51bSA9IDA7XG4gICAgICAgIGUucG9vbE1nciA9IG5ldyAkcG9vbE1nci5kZWZhdWx0KCk7XG4gICAgICAgIGUubmV4dE5lZWRBZGRfbmV3ID0gW107XG4gICAgICAgIGUucmV2aXZlQXJyID0gW107XG4gICAgICAgIGUuaXNSZXZpdmluZyA9ICExO1xuICAgICAgICBlLm5leHROZWVkQWRkID0gW107XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICBlLnByb3RvdHlwZS5wcmludERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gW107XG4gICAgICAgIHRoaXMuZGljdC5ncmlkTGF5ZXIuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0LnB1c2goe1xuICAgICAgICAgICAgICAgIHg6IGUueCxcbiAgICAgICAgICAgICAgICB5OiBlLnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9nKEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZVNwaW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICBpZiAoIXQuZ2V0Q2hpbGRCeU5hbWUoZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IG5ldyBjYy5Ob2RlKGUpO1xuICAgICAgICAgICAgICAgIHQuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgICAgICAgby5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSAhMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGUgPSBjYy5maW5kKFwiZ2FtZS9pbWFnZVwiLCB0aGlzLm5vZGUpO1xuICAgICAgICB0KGUsIFwiZ29vZFwiKTtcbiAgICAgICAgdChlLCBcImppZXN1b1wiKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnN0YXJ0Q2xlYXJUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhckFtb3VudCArPSAxO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMudGltZXIsIHRoaXMudGltZSk7XG4gICAgICAgIHZhciB0ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJBbW91bnQgPj0gNSkge1xuICAgICAgICAgICAgdCA9IFwiYW5pbWF0aW9uM1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJBbW91bnQgPj0gNCkge1xuICAgICAgICAgICAgICAgIHQgPSBcImFuaW1hdGlvbjJcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJBbW91bnQgPj0gMykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gXCJhbmltYXRpb24xXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckFtb3VudCA+PSAyICYmICh0ID0gXCJhbmltYXRpb24wXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5XmlYjmnpxcIik7XG4gICAgICAgICAgICB2YXIgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5nb29kKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVcIikuYWRkQ2hpbGQoZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0R29vZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdEdvb2QuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0R29vZCA9IGU7XG4gICAgICAgICAgICBlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHQsICExKTtcbiAgICAgICAgICAgIGUucG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICAgICAgZS55ID0gMTAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50aW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhckFtb3VudCA9IDA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVTcHJpdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvbGRlcikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9sZGVyID0gXCJmMjg3NDlcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICBpZiAoIXQuZ2V0Q2hpbGRCeU5hbWUoZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IG5ldyBjYy5Ob2RlKGUpO1xuICAgICAgICAgICAgICAgIHQuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgICAgICAgby5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGUgPSBjYy5maW5kKFwiZ2FtZS9pbWFnZVwiLCB0aGlzLm5vZGUpO1xuICAgICAgICB0KGUsIFwiMS1zXCIpO1xuICAgICAgICB0KGUsIFwiMy1zXCIpO1xuICAgICAgICB0KGUsIFwiNS1zXCIpO1xuICAgICAgICB0KGUsIFwiNi1zXCIpO1xuICAgICAgICB0KGUsIFwiOC1zXCIpO1xuICAgICAgICB0KGUsIFwiMTAtc1wiKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTcGluZSgpO1xuICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbml0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5kaWN0LmdhbWUuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuZGljdC5wcm9wX2NsZWFyX2JveC54ID0gLTg4LjIzNjtcbiAgICAgICAgdGhpcy5kaWN0LndhaXRMYXllci55ID0gMzMwLjQ4NztcbiAgICAgICAgaWYgKHRoaXMuZGljdFs5XSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0WzldLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3dOb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmRpY3Quc2hhZG93Lm9wYWNpdHkgPSAxNTA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0TGV2ZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYmcgPSB0aGlzLmRpY3QuYmc7XG4gICAgICAgIHRoaXMuaXRlbUxheWVyID0gdGhpcy5kaWN0Lml0ZW1MYXllcjtcbiAgICAgICAgdGhpcy5lZmZlY3RMYXllciA9IHRoaXMuZGljdC5lZmZlY3RMYXllcjtcbiAgICAgICAgdGhpcy5ncmlkTGF5ZXIgPSB0aGlzLmRpY3QuZ3JpZExheWVyO1xuICAgICAgICB0aGlzLmxhYlByb2dyZXNzID0gdGhpcy5kaWN0LmxhYlByb2dyZXNzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmRpY3QuaW1hZ2U7XG4gICAgICAgIHRoaXMud2FpdExheWVyID0gdGhpcy5kaWN0LndhaXRMYXllcjtcbiAgICAgICAgdGhpcy5ib3hMYXllciA9IHRoaXMuZGljdC5ib3hMYXllcjtcbiAgICAgICAgdGhpcy5ib3hTcGluZSA9IHRoaXMuZGljdC5ib3hTcGluZTtcbiAgICAgICAgdGhpcy5wcmVfaXRlbSA9IHRoaXMuZGljdC5wcmVfaXRlbTtcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJveExheWVyLnkgLT0gNDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGFkb3dMYXllciA9IHRoaXMuZGljdC5zaGFkb3dMYXllcjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdyaWRMYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFdhaXRMYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJveExheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0SXRlbUxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQb29sKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZ2FtZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZ2FtZS5nZXRDb21wb25lbnQoY2MuTWFzaykuZW5hYmxlZCA9ICEwO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW5kUG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuY3VycmVudEd1aWRlTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY3VycmVudEd1aWRlTm9kZS5wb3NpdGlvbik7XG4gICAgICAgIHZhciBlID0gdGhpcy5ndWlkZU5vZGVzLmluZGV4T2YodGhpcy5jdXJyZW50R3VpZGVOb2RlKTtcbiAgICAgICAgdGhpcy5kaWN0LmhhbmRUZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5ndWlkZVRleHRbZV07XG4gICAgICAgIHZhciBvID0gdGhpcy5kaWN0LmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHQpO1xuICAgICAgICB0aGlzLmRpY3QuaGFuZC5wb3NpdGlvbiA9IG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9ICRsZXZlbFV0aWwuZGVmYXVsdC5kZWVwQ29weSh0aGlzLmxldmVsSlNPTi5qc29uW3RoaXMubGV2ZWxJRF0pO1xuICAgICAgICB0aGlzLmxldmVsX2NvbmZpZyA9IGU7XG4gICAgICAgIHRoaXMudHlwZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQuZmlzaGVyWWF0ZXNTaHVmZmxlKHRoaXMudHlwZXMpO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBlLmJveF9jb25maWdfZWRpdG9yO1xuICAgICAgICAgICAgdmFyIGkgPSAkbGV2ZWxVdGlsLmRlZmF1bHQuZGVlcENvcHkobykuc3BsaXQoXCIqXCIpO1xuICAgICAgICAgICAgaVsxXS5zcGxpdChcIiNcIikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gZS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG9bMF0sXG4gICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeTogTnVtYmVyKG9bMV0pLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogTnVtYmVyKG9bMl0pLFxuICAgICAgICAgICAgICAgICAgICB4OiBOdW1iZXIob1szXSksXG4gICAgICAgICAgICAgICAgICAgIHk6IE51bWJlcihvWzRdKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdC5ib3hEYXRhT2JqZWN0cy5wdXNoKGkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmJveERhdGFPYmplY3RzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIHZhciByID0gaVsyXTtcbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSByLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmoLflvI/kuLrvvJpcIiwgTnVtYmVyKG5bMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoLTI4ODA3ID09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbF9jb25maWcgPSB7XG4gICAgICAgICAgICAgICAgYm94Q29uZmlnOiBbXG4gICAgICAgICAgICAgICAgICAgIFsyNSwgWzEsIDRdXSxcbiAgICAgICAgICAgICAgICAgICAgWzEwMCwgWzEsIDZdXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYmxvY2tXZWlnaHQ6IFs1MCwgMTAsIDFdLFxuICAgICAgICAgICAgICAgIHdhaXRXZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgIHF1ZXVlV2VpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICBsaW1pdFJhbms6IDQsXG4gICAgICAgICAgICAgICAgbGFzdFR5cGVXZWlnaHQ6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmJveERhdGFPYmplY3RzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIzLTItMlwiLFxuICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICB4OiAtNTAuNzIxLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTIuMDA5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMi0yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgaGllcmFyY2h5OiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMSxcbiAgICAgICAgICAgICAgICAgICAgeDogNzQuNzk2LFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTIuMDA5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeTogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDIsXG4gICAgICAgICAgICAgICAgICAgIHg6IC03NS40MDQsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0zNy40MjRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI0LTJcIixcbiAgICAgICAgICAgICAgICAgICAgaGllcmFyY2h5OiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMyxcbiAgICAgICAgICAgICAgICAgICAgeDogNzUuMSxcbiAgICAgICAgICAgICAgICAgICAgeTogLTM5Ljk4MVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC0yOTA1NSA9PSB0aGlzLmxldmVsSUQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGJveENvbmZpZzogW1xuICAgICAgICAgICAgICAgICAgICBbMTAsIFs2LCA4XV0sXG4gICAgICAgICAgICAgICAgICAgIFsyMCwgWzUsIDhdXSxcbiAgICAgICAgICAgICAgICAgICAgWzMwLCBbNiwgOF1dLFxuICAgICAgICAgICAgICAgICAgICBbNDAsIFs1LCA4XV0sXG4gICAgICAgICAgICAgICAgICAgIFs1MCwgWzQsIDhdXSxcbiAgICAgICAgICAgICAgICAgICAgWzYwLCBbNCwgOF1dLFxuICAgICAgICAgICAgICAgICAgICBbNzAsIFszLCA4XV0sXG4gICAgICAgICAgICAgICAgICAgIFs4MCwgWzMsIDhdXSxcbiAgICAgICAgICAgICAgICAgICAgWzkwLCBbMiwgOF1dLFxuICAgICAgICAgICAgICAgICAgICBbMTAwLCBbMSwgOF1dXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBibG9ja1dlaWdodDogWzUwLCAxMCwgMV0sXG4gICAgICAgICAgICAgICAgd2FpdFdlaWdodDogMTAsXG4gICAgICAgICAgICAgICAgcXVldWVXZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgIGxpbWl0UmFuazogMyxcbiAgICAgICAgICAgICAgICBsYXN0VHlwZVdlaWdodDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYm94RGF0YU9iamVjdHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjItMlwiLFxuICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICB4OiAtNzUuNDA0LFxuICAgICAgICAgICAgICAgICAgICB5OiAxMTIuMDA5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMS0zXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeTogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgICAgIHg6IDg5Ljc5NixcbiAgICAgICAgICAgICAgICAgICAgeTogMTE3LjAwOSArIDIwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMi0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeTogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDIsXG4gICAgICAgICAgICAgICAgICAgIHg6IC03NS40MDQsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0yNC40MjRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIzLTJcIixcbiAgICAgICAgICAgICAgICAgICAgaGllcmFyY2h5OiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMyxcbiAgICAgICAgICAgICAgICAgICAgeDogMTEwLjEsXG4gICAgICAgICAgICAgICAgICAgIHk6IDMwIC0gMzkuOTgxICsgMTVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm94RGF0YU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBlLmhpZXJhcmNoeTtcbiAgICAgICAgICAgIGlmICh0LmJveE1hcC5nZXQobykpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0LmJveE1hcC5zZXQobywgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgQS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0Lml0ZW1Qb3NMaXN0LnB1c2goY2MudjIoZS54LCBlLnkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbVBvc0xpc3QucmV2ZXJzZSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGZvciAodmFyIG8gPSB0Lmxlbmd0aCAtIDE7IG8gPiAwOyBvLS0pIHtcbiAgICAgICAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG8gKyAxKSk7XG4gICAgICAgICAgICBlID0gW3RbaV0sIHRbb11dO1xuICAgICAgICAgICAgdFtvXSA9IGVbMF07XG4gICAgICAgICAgICB0W2ldID0gZVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRCb3hMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmJveERhdGFPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHQuY3JlYXRlQm94KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuZGljdC5oYW5kKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuYm94TGF5ZXI7XG4gICAgICAgICAgICBpZiAoLTI4ODA3ID09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKGUuY2hpbGRyZW5bM10pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKGUuY2hpbGRyZW5bMl0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKGUuY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaChlLmNoaWxkcmVuWzJdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaChlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaChlLmNoaWxkcmVuWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaChlLmNoaWxkcmVuWzNdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudEd1aWRlTm9kZSA9IHRoaXMuZ3VpZGVOb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMuaGFuZFBvcygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gdGhpcy5sZXZlbF9jb25maWcuYm94Q29uZmlnO1xuICAgICAgICB2YXIgaSA9IFtdO1xuICAgICAgICB0aGlzLmJveE1hcC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgdC5ib3hRdWV1ZS5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgciA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBpLmxlbmd0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG4gPSByLmxlbmd0aDtcbiAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgICAgdmFyIHIgPSBvLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdFswXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZSA8PSAobiAqIG8pIC8gMTAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAociA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IG9bcl1bMV0sIHMgPSBbXSwgYyA9IGFbMF07IGMgPD0gYVsxXTsgYysrKSBzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgcyA9IHQuc2h1ZmZsZUFycmF5KHMpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgPSAkbGV2ZWxVdGlsLmRlZmF1bHQuZ2V0UmFuZG9tVmFsdWVJbkFycmF5KHMpOyBsID09PSBpOyApXG4gICAgICAgICAgICAgICAgICAgIGwgPSAkbGV2ZWxVdGlsLmRlZmF1bHQuZ2V0UmFuZG9tVmFsdWVJbkFycmF5KHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcyA9IC0xO1xuICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHIubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgIGlmICgwID09PSByW2xdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBhKGwsIHMpO1xuICAgICAgICAgICAgICAgIHJbbF0gPSBoO1xuICAgICAgICAgICAgICAgIHMgPSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBwID0ge307XG4gICAgICAgIHIuZm9yRWFjaChmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgdmFyIHIgPSB0LnR5cGVzW2UgLSAxXTtcbiAgICAgICAgICAgIHZhciBuID0gaVtvXTtcbiAgICAgICAgICAgIGlmICgtMjg4MDcgPT0gdC5sZXZlbElEKSB7XG4gICAgICAgICAgICAgICAgciA9IHQuZ3VpZGVMZXZlbENvbG9yW29dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC0yOTA1NSA9PSB0LmxldmVsSUQpIHtcbiAgICAgICAgICAgICAgICByID0gdC5ndWlkZUxldmVsQ29sb3IyW29dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdC5zZXRCb3hEYXRhKG4sIHIpO1xuICAgICAgICAgICAgdmFyIGEgPSB0LmdldEJveE9jY3VweVBvcyhuKS5sZW5ndGg7XG4gICAgICAgICAgICB0LmxldmVsVG90YWwgKz0gYTtcbiAgICAgICAgICAgIGlmIChwW3JdKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcFtyXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcFtyXS5wdXNoKGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9nKFwi6aWu5paZ5oC75pWw77yaXCIsIHRoaXMubGV2ZWxUb3RhbCk7XG4gICAgICAgIHZhciBkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gW107XG4gICAgICAgICAgICBwW2VdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgZTsgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5nZXRSYW5kb21JbnRlZ2VyKDEsIGUgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyICs9IG4pIDw9IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChuKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gZSAtIChyIC09IG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSBhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5wdXNoKHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgaSA9IE51bWJlcihlKTtcbiAgICAgICAgICAgIGcuYm94VHlwZUdyb3VwW2ldID0gW107XG4gICAgICAgICAgICBvLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5ib3hUeXBlR3JvdXBbaV0ucHVzaChOdW1iZXIoZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgbSBpbiBwKSBkKG0pO1xuICAgICAgICBpZiAoLTI4ODA3ID09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0TmVlZEFkZDIgPSBbOCwgNCwgNiwgMSwgOCwgNCwgNiwgMSwgOCwgNF07XG4gICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cCA9IHtcbiAgICAgICAgICAgICAgICAxOiBbMSwgM10sXG4gICAgICAgICAgICAgICAgNDogWzIsIDQsIDJdLFxuICAgICAgICAgICAgICAgIDY6IFszLCAzXSxcbiAgICAgICAgICAgICAgICA4OiBbNCwgMiwgMl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC0yOTA1NSA9PSB0aGlzLmxldmVsSUQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dE5lZWRBZGQyID0gWzYsIDQsIDEsIDgsIDYsIDgsIDEsIDQsIDZdO1xuICAgICAgICAgICAgdGhpcy5ib3hUeXBlR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgMTogWzEsIDJdLFxuICAgICAgICAgICAgICAgIDQ6IFsyLCAyXSxcbiAgICAgICAgICAgICAgICA2OiBbMiwgMSwgMV0sXG4gICAgICAgICAgICAgICAgODogWzMsIDNdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQm94U3RhdGUoKTtcbiAgICAgICAgdmFyIGYgPSBfX3NwcmVhZEFycmF5cyh0aGlzLmJveExheWVyLmNoaWxkcmVuKTtcbiAgICAgICAgZi5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdC54IC0gZS54O1xuICAgICAgICB9KTtcbiAgICAgICAgZi5mb3JFYWNoKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICB0LnNjYWxlID0gMDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHQpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDAuMDEgKiBlKVxuICAgICAgICAgICAgICAgIC50bygwLjEsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveENsb3NlU0ZOYW1lID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSAwO1xuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCIxLTFcIjpcbiAgICAgICAgICAgICAgICBvID0gMTAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjEtMlwiOlxuICAgICAgICAgICAgICAgIG8gPSAyMDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMi0xXCI6XG4gICAgICAgICAgICAgICAgbyA9IDMwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxLTNcIjpcbiAgICAgICAgICAgICAgICBvID0gNDAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjMtMVwiOlxuICAgICAgICAgICAgICAgIG8gPSA1MDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMi0yXCI6XG4gICAgICAgICAgICAgICAgbyA9IDYwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyLTNcIjpcbiAgICAgICAgICAgICAgICBvID0gNzAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjMtMlwiOlxuICAgICAgICAgICAgICAgIG8gPSA4MDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMi00XCI6XG4gICAgICAgICAgICAgICAgbyA9IDkwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0LTJcIjpcbiAgICAgICAgICAgICAgICBvID0gMWUzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcobyArIGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94T3BlblNGTmFtZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgICBjYXNlIFwiMS0xXCI6XG4gICAgICAgICAgICAgICAgbyA9IDEwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxLTJcIjpcbiAgICAgICAgICAgIGNhc2UgXCIyLTFcIjpcbiAgICAgICAgICAgICAgICBvID0gMzAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjEtM1wiOlxuICAgICAgICAgICAgY2FzZSBcIjMtMVwiOlxuICAgICAgICAgICAgICAgIG8gPSA1MDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMi0yXCI6XG4gICAgICAgICAgICAgICAgbyA9IDYwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyLTNcIjpcbiAgICAgICAgICAgIGNhc2UgXCIzLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gODAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjItNFwiOlxuICAgICAgICAgICAgY2FzZSBcIjQtMlwiOlxuICAgICAgICAgICAgICAgIG8gPSAxZTM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0cmluZyhvICsgZSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hBbmltSWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IDA7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSBcIjItMlwiOlxuICAgICAgICAgICAgY2FzZSBcIjItMi0yXCI6XG4gICAgICAgICAgICAgICAgZSA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMy0yXCI6XG4gICAgICAgICAgICBjYXNlIFwiMy0yLTJcIjpcbiAgICAgICAgICAgICAgICBlID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0LTJcIjpcbiAgICAgICAgICAgIGNhc2UgXCI0LTItMlwiOlxuICAgICAgICAgICAgICAgIGUgPSAzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcoZSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVCb3ggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHQubmFtZTtcbiAgICAgICAgdmFyIG8gPSB0LmhpZXJhcmNoeTtcbiAgICAgICAgdmFyIGkgPSB0LmluZGV4O1xuICAgICAgICB2YXIgciA9IHQueDtcbiAgICAgICAgdmFyIG4gPSB0Lnk7XG4gICAgICAgIHZhciBhID0gdGhpcy5ib3hMYXllcjtcbiAgICAgICAgdmFyIHMgPSB0aGlzLmRpY3QuYm94UHJlZmFiLmdldENoaWxkQnlOYW1lKGUpO1xuICAgICAgICB2YXIgYyA9IGNjLnYyKHIsIG4pO1xuICAgICAgICB2YXIgbCA9IGNjLmluc3RhbnRpYXRlKHMpO1xuICAgICAgICBsLnBhcmVudCA9IGE7XG4gICAgICAgIGwucG9zaXRpb24gPSBjO1xuICAgICAgICBsW3RoaXMubV9oaWVyYXJjaHldID0gbztcbiAgICAgICAgbFt0aGlzLm1faW5kZXhdID0gaTtcbiAgICAgICAgbC5uYW1lID0gcy5uYW1lO1xuICAgICAgICB0aGlzLnNldEJveEluZGV4KGwpO1xuICAgICAgICB2YXIgaCA9IGwuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgaC56SW5kZXggPSAwO1xuICAgICAgICBoLnNjYWxlID0gdGhpcy5ib3hJdGVtU2NhbGU7XG4gICAgICAgIHZhciBwID0gdGhpcy5ib3hNYXAuZ2V0KG8pO1xuICAgICAgICBwLnB1c2gobCk7XG4gICAgICAgIHRoaXMuYm94TWFwLnNldChvLCBwKTtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRCb3hEYXRhID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9ICExO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGU7XG4gICAgICAgICAgICB0W3RoaXMubV9pZF0gPSBpO1xuICAgICAgICAgICAgdFt0aGlzLm1fc3RhdGVdID0geS5FbXB0eTtcbiAgICAgICAgICAgIHRbdGhpcy5tX29jY3VweV0gPSAwO1xuICAgICAgICAgICAgdFt0aGlzLm1faXRlbXNdID0gW107XG4gICAgICAgICAgICB0W3RoaXMubV9pdGVtc10ubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm94U1AodCwgdGhpcy5nZXRCb3hDbG9zZVNGTmFtZSh0Lm5hbWUsIGUpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Qm94U1AgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBnYW1lLnBsYXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXG4gICAgICAgICAgICB0aGlzLmZvbGRlciArIFwiX1wiICsgZVxuICAgICAgICApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Qm94SW5kZXggPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoMSA9PSBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRbdGhpcy5tX2hpZXJhcmNoeV07XG4gICAgICAgICAgICB2YXIgaSA9IHRbdGhpcy5tX2luZGV4XTtcbiAgICAgICAgICAgIHQuekluZGV4ID0gMTAwICogbyArIGk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoMiA9PSBlKSB7XG4gICAgICAgICAgICAgICAgdC56SW5kZXggPSA0ZTMgKyB0aGlzLmNsZWFyTnVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoMyA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuekluZGV4ID0gM2UzICsgdGhpcy5jbGVhck51bTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUJveFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gW107XG4gICAgICAgIHRoaXMuYm94TWFwLmZvckVhY2goZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgICAgIGlmIChlLmluY2x1ZGVzKG8pKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5wdXNoKG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG8gPSBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgdmFyIHIgPSBlW29dO1xuICAgICAgICAgICAgdmFyIG4gPSBpLmJveE1hcC5nZXQocik7XG4gICAgICAgICAgICBpZiAoMCA9PT0gbykge1xuICAgICAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVt0Lm1fc3RhdGVdID09PSB5LkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlW3QubV9ibG9ja10gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaVt0Lm1fc3RhdGVdID09PSB5LkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpW3QubV9ibG9ja10gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IHQuZ2V0Qm94Qm91bmRpbmdCb3goaSksIG4gPSBvIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5ib3hNYXAuZ2V0KGEpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVbdC5tX3N0YXRlXSA9PT0geS5FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0LmdldEJveEJvdW5kaW5nQm94KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaW50ZXJzZWN0cyhvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlbdC5tX2Jsb2NrXSArPSBlW3QubV9ibG9ja107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgxID09PSBlW3QubV9ibG9ja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLmNvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKFwiIzgyODI4MlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgZS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgbyhyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcbiAgICAgICAgcmV0dXJuIGNjLnJlY3QoZS54LCBlLnksIGUud2lkdGggLSA2LCBlLmhlaWdodCAtIDYpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Qm94VG9XYWl0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgZVt0aGlzLm1fc3RhdGVdID0gXy5PY2N1cHk7XG4gICAgICAgICAgICB0W3RoaXMubV93YWl0XSA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRUb0FycmF5KHQsIHRoaXMud2FpdExpc3QpO1xuICAgICAgICB0aGlzLmJveEZseSh0LCBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoby5jaGVja0JveFRha2VJdGVtKHQpKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY2hlY2tJc0ZhaWwgc2V0Qm94VG9XYWl0XCIpO1xuICAgICAgICAgICAgICAgIG8uY2hlY2tJc0ZhaWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0JveFRha2VJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKCF0LmZseVN1Yykge1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRJdGVtRGF0YSh0KTtcbiAgICAgICAgaWYgKGUgJiYgZS5pdGVtKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGUuaXRlbTtcbiAgICAgICAgICAgIHRoaXMuaXNDaGVjayA9ICEwO1xuICAgICAgICAgICAgaWYgKGUuaW5GaXJzdFBvcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJvbUFycmF5KG8sIHRoaXMuaXRlbVF1ZXVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1Ub0JveChvLCB0LCAhMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU3VwcGx5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtUXVldWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJdGVtRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICgwID09PSB0aGlzLml0ZW1RdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRCb3hPY2N1cHlQb3ModCkubGVuZ3RoIC0gdFt0aGlzLm1fb2NjdXB5XTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLml0ZW1RdWV1ZVswXTtcbiAgICAgICAgdmFyIGkgPSAhMTtcbiAgICAgICAgaWYgKG9bdGhpcy5tX3N0YXRlXSA9PT0gQy5JZGxlICYmIG9bdGhpcy5tX2lkXSA9PT0gdFt0aGlzLm1faWRdICYmIGUgPiAwKSB7XG4gICAgICAgICAgICBpID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgIHZhciByID0gby5wb3NpdGlvbi5zdWIodGhpcy5pdGVtRmlyc3RQb3MpLm1hZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtOiBvLFxuICAgICAgICAgICAgICAgIGluRmlyc3RQb3M6IHIgPCA1XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXJCb3ggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRCb3hPY2N1cHlQb3ModCkubGVuZ3RoO1xuICAgICAgICB0W3RoaXMubV9zdGF0ZV0gPSB5LkZpbmlzaDtcbiAgICAgICAgdC56SW5kZXggPSAxMDtcbiAgICAgICAgdGhpcy5zZXRCb3hJbmRleCh0LCAzKTtcbiAgICAgICAgdFt0aGlzLm1faWRdO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LmlzQ2xlYXJCb3g7XG4gICAgICAgICAgICBlLnBsYXlFZmZlY3QodCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUucGxheUxldmVsU291bmQoXCJGdWxsXCIpO1xuICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1cIik7IGkuY2hpbGRyZW5Db3VudDsgKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHV0SXRlbVRvUG9vbChpLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5zZXRDbGVhck51bShvKTtcbiAgICAgICAgICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBlLmNoZWNrV2luKCk7XG4gICAgICAgICAgICAgICAgZS5zdGFydENsZWFyVGltZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuZGVsZXRlRnJvbUFycmF5KHQsIGUud2FpdExpc3QpO1xuICAgICAgICAgICAgICAgIGlmICh0W2UubV93YWl0XSkge1xuICAgICAgICAgICAgICAgICAgICB0W2UubV93YWl0XVtlLm1fc3RhdGVdID0gXy5FbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgdFtlLm1fd2FpdF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAuMSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUVmZmVjdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHQuekluZGV4ID0gMWU0O1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0Qm94T2NjdXB5UG9zKHQpLmxlbmd0aDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmRpY3QueGlhbmd6aV94aWFvO1xuICAgICAgICBpZiAobyA+PSA0ICYmIG8gPCA2KSB7XG4gICAgICAgICAgICBpID0gdGhpcy5kaWN0LnhpYW5nemlfemhvbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobyA+PSA2KSB7XG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuZGljdC54aWFuZ3ppX2RhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciByID0gY2MuaW5zdGFudGlhdGUoaSk7XG4gICAgICAgIHIuc2NhbGUgPSAxLjA1O1xuICAgICAgICByLmFjdGl2ZSA9ICEwO1xuICAgICAgICByLm5hbWUgPSBcImVmZmVjdFwiO1xuICAgICAgICB0aGlzLmVmZmVjdExheWVyLmFkZENoaWxkKHIpO1xuICAgICAgICByLnBvc2l0aW9uID0gJGxldmVsVXRpbC5kZWZhdWx0LmNvbnZlcnRQb3NpdGlvbihjYy5maW5kKFwicG9pbnRcIiwgdCksIHIpO1xuICAgICAgICByLnpJbmRleCA9IDMwMDtcbiAgICAgICAgci5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnRpbWVTY2FsZSA9IDEuNjtcbiAgICAgICAgJGxldmVsVXRpbC5kZWZhdWx0LnBsYXlTcGluZUNhbGxCYWNrKHIsIFwiYW5pbWF0aW9uXCIsICExLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnR3ZWVuKHIpXG4gICAgICAgICAgICAgICAgLmJ5KDMsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogNzUwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICByLnJlbW92ZUZyb21QYXJlbnQoITApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYm94Rmx5ID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICB2YXIgciA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXCIpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIChyID0gbmV3IGNjLk5vZGUoXCJpdGVtXCIpKS5wYXJlbnQgPSB0O1xuICAgICAgICAgICAgci5wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgICAgICByLnpJbmRleCA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSB0LmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcIjEtMVwiID09IHQubmFtZSkge1xuICAgICAgICAgICAgICAgIChuID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0W1wiMS1zXCJdKSkucG9zaXRpb24gPSBjYy52MigtNSwgMik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcIjEtM1wiID09IHQubmFtZSB8fCBcIjMtMVwiID09IHQubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAobiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdFtcIjUtc1wiXSkpLnBvc2l0aW9uID0gY2MudjIoLTUsIDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIjItMlwiID09IHQubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3RbXCI2LXNcIl0pKS5wb3NpdGlvbiA9IGNjLnYyKC01LCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMi0zXCIgPT0gdC5uYW1lIHx8IFwiMy0yXCIgPT0gdC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKG4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3RbXCI4LXNcIl0pKS5wb3NpdGlvbiA9IGNjLnYyKC01LCAyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChcIjItNFwiICE9IHQubmFtZSAmJiBcIjQtMlwiICE9IHQubmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgobiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdFtcIjEwLXNcIl0pKS5wb3NpdGlvbiA9IGNjLnYyKC01LCAyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuLm5hbWUgPSBcInNoYWRvd1wiO1xuICAgICAgICAgICAgbi5wYXJlbnQgPSB0O1xuICAgICAgICAgICAgdC5jaGlsZHJlblswXS56SW5kZXggPSAyO1xuICAgICAgICAgICAgbi56SW5kZXggPSAxO1xuICAgICAgICAgICAgbi5zY2FsZSA9IDAuODU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm94SW5kZXgodCwgMik7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICRsZXZlbFV0aWwuZGVmYXVsdC5jb252ZXJ0UG9zaXRpb24oZSwgdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5mbHlTdWMgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBpLmdldEJveE9wZW5TRk5hbWUodC5uYW1lLCB0W2kubV9pZF0pO1xuICAgICAgICAgICAgICAgICAgICBpLnNldEJveFNQKHQsIGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC44NVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hPY2N1cHlQb3MgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0Qm94VHlwZUJ5TmFtZSh0Lm5hbWUpO1xuICAgICAgICB2YXIgbyA9IFNbZV07XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSA9IHRoaXMuZ2V0Qm94VHlwZUJ5TmFtZSh0Lm5hbWUsICEwKTtcbiAgICAgICAgICAgIG8gPSBTW2VdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvIHx8IChjb25zb2xlLndhcm4oXCJObyBvY2N1cHkgcG9zaXRpb25zIGZvdW5kIGZvciBib3ggdHlwZTogXCIgKyBlKSwgW10pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94VHlwZUJ5TmFtZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHQuc3BsaXQoXCItXCIpO1xuICAgICAgICB2YXIgaSA9IG9bMF0gKyBcIi1cIiArIG9bMV07XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBpID0gb1sxXSArIFwiLVwiICsgb1swXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmJveElzRW1wdHkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdFt0aGlzLm1fc3RhdGVdID09PSB5LkVtcHR5O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94R3JvdXAgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm94VHlwZUdyb3VwW3RdKSB7XG4gICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFt0XSA9IHRoaXMuZmlsdGVyQm94VHlwZUdyb3VwQXJyKHRoaXMuYm94VHlwZUdyb3VwW3RdKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgIHZhciBpID0gZTtcbiAgICAgICAgaWYgKGUgPCAwKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG8gPSB0aGlzLmJveFR5cGVHcm91cFt0XS5zaGlmdCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAobCkge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciByID0gX19zcHJlYWRBcnJheXModGhpcy5ib3hUeXBlR3JvdXBbdF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCByLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByW25dO1xuICAgICAgICAgICAgICAgIGlmIChhID49IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcltuXSAtPSBpO1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgLT0gYTtcbiAgICAgICAgICAgICAgICByW25dID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIHMgPSAhMDsgczsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJbMF0gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9ICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm94VHlwZUdyb3VwW3RdLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFt0XSA9IF9fc3ByZWFkQXJyYXlzKHIpO1xuICAgICAgICAgICAgbyA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0SXRlbUxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRyaW5rQXJyID0gbmV3IEFycmF5KHRoaXMubGV2ZWxUb3RhbCkuZmlsbCgtMSk7XG4gICAgICAgIHZhciB0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuaXRlbVBvc0xpc3QubGVuZ3RoOyB0IDwgZTsgKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0SXRlbVR5cGUoLTEpO1xuICAgICAgICAgICAgaWYgKCFvKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaSA9IG8udHlwZTtcbiAgICAgICAgICAgIHZhciByID0gby5udW07XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHI7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmICh0ICsgbiA+PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBlIC0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhID0gdCArIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShhLCBOdW1iZXIoaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCArPSByO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbUZpcnN0UG9zID0gdGhpcy5pdGVtUXVldWVbMF0ucG9zaXRpb247XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pdGVtU3VwcGx5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA+IHRoaXMuaXRlbVBvc0xpc3QubGVuZ3RoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmV2aXZlQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5yZXZpdmVBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLlpI3mtLst5paw5aKeXCIsIGUsIDEsIHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCAxOyBvKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLml0ZW1Qb3NMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV4dE5lZWRBZGQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5aSN5rS7XCIsIFwi6aWu5paZ5paw5aKeXCIpO1xuICAgICAgICAgICAgICAgIGUgPSB0aGlzLm5leHROZWVkQWRkLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3hUeXBlR3JvdXBbZV1bMF0gLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSB0aGlzLmJveFR5cGVHcm91cFtlXVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFtlXS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgMTsgbysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLml0ZW1Qb3NMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRJdGVtVHlwZSh0KTtcbiAgICAgICAgICAgICAgICBpZiAociAmJiByLnR5cGUgJiYgci5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHIudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSByLm51bTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IG47IG8rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuaXRlbVBvc0xpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlSXRlbVF1ZXVlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHRoaXMuaXRlbVF1ZXVlO1xuICAgICAgICB2YXIgaSA9IHRoaXMuaXRlbVBvc0xpc3Q7XG4gICAgICAgIHZhciByID0gMTtcbiAgICAgICAgdmFyIG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKytyID49IG8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuc3RhdGUgPT09IGwucHJvcF9zb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RhdGUgPSBsLndhaXRUb3VjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5pdGVtUXVldWUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICB0W2UubV9zdGF0ZV0gPSBDLklkbGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZS53YWl0TGlzdC5zb3J0KGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldEJveE9jY3VweVBvcyh0KS5sZW5ndGggLSB0W2UubV9vY2N1cHldIC0gKGUuZ2V0Qm94T2NjdXB5UG9zKG8pLmxlbmd0aCAtIG9bZS5tX29jY3VweV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAhMSwgaSA9IDA7IGkgPCBlLndhaXRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS53YWl0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY2hlY2tCb3hUYWtlSXRlbShuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLmlzQ2hlY2sgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgZS5jaGVja0lzRmFpbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHIgPSBvW2VdO1xuICAgICAgICAgICAgci5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgY2MudHdlZW4ocikuc3RvcCgpO1xuICAgICAgICAgICAgaWYgKGUgPiBpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBjID0gZSwgbCA9IHJbcy5tX3Bvc0luZGV4XSAtIDE7IGwgPj0gYzsgbC0tKSBhLnB1c2gobCk7XG4gICAgICAgICAgICAgICAgaWYgKGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuaXRlbU1vdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgKiBlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcyA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgby5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgYShjKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaXRlbU1vdmUgPSBmdW5jdGlvbiAodCwgZSwgbywgaSwgcikge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGkpIHtcbiAgICAgICAgICAgIGkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHIpIHtcbiAgICAgICAgICAgIHIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvID49IGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIGkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRbdGhpcy5tX3N0YXRlXSA9IEMuQW5pbWF0aW9uO1xuICAgICAgICAgICAgdmFyIGEgPSBlW29dO1xuICAgICAgICAgICAgdmFyIHMgPSB0LnBvc2l0aW9uO1xuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLml0ZW1Qb3NMaXN0W2FdO1xuICAgICAgICAgICAgcy5zdWIoYykubWFnKCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC5kZWxheShyKVxuICAgICAgICAgICAgICAgIC50bygwLjA1NSwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAociA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4uc2V0SXRlbUluZGV4KHQpO1xuICAgICAgICAgICAgICAgICAgICB0W24ubV9wb3NJbmRleF0gPSBhO1xuICAgICAgICAgICAgICAgICAgICBvICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIG4uaXRlbU1vdmUodCwgZSwgbywgaSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0SXRlbVRvQm94ID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XG4gICAgICAgICAgICBvID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRbdGhpcy5tX3N0YXRlXSAhPSBDLkJveCkge1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldEJveE9jY3VweVBvcyhlKTtcbiAgICAgICAgICAgIHZhciBuID0gci5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYSA9IHJbZVt0aGlzLm1fb2NjdXB5XV07XG4gICAgICAgICAgICB2YXIgcyA9IGNjLnYyKGFbMF0sIGFbMV0pO1xuICAgICAgICAgICAgdmFyIGMgPSBlLmdldENoaWxkQnlOYW1lKFwiaXRlbVwiKTtcbiAgICAgICAgICAgIHZhciBsID0gZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocyk7XG4gICAgICAgICAgICB2YXIgaCA9IHQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGwpO1xuICAgICAgICAgICAgZVt0aGlzLm1fb2NjdXB5XSsrO1xuICAgICAgICAgICAgaWYgKGVbdGhpcy5tX29jY3VweV0gPj0gbikge1xuICAgICAgICAgICAgICAgIGVbdGhpcy5tX29jY3VweV0gPSBuO1xuICAgICAgICAgICAgICAgIGVbdGhpcy5tX3N0YXRlXSA9IHkuRmluaXNoQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJvbUFycmF5KGUsIHRoaXMuYm94UXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdFt0aGlzLm1fc3RhdGVdID0gQy5Cb3g7XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1JbmRleCh0LCAyKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJvbUFycmF5KHQsIHRoaXMuaXRlbVF1ZXVlKTtcbiAgICAgICAgICAgIHZhciBwID0gdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBkID0gaC5zdWIocCkubWFnKCkgLyAxZTM7XG4gICAgICAgICAgICB0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgIGlmIChoLnggPiBwLngpIHtcbiAgICAgICAgICAgICAgICB1ID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdSA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGcgPSBwLmFkZChjYy52MigxMDAgKiB1LCAxNTApKTtcbiAgICAgICAgICAgIHQubV9zaGFkb3cuYWN0aXZlID0gITE7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC5iZXppZXJUbyhkLCBwLCBnLCBoKVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5wbGF5TGV2ZWxTb3VuZChcIkdldF9vblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gMTAgKyB0W2kubV9pZF07XG4gICAgICAgICAgICAgICAgICAgIGUuc3ByaXRlRnJhbWUgPSBnYW1lLnBsYXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoaS5mb2xkZXIgKyBcIl9cIiArIG8gKyBcIl8xXCIpO1xuICAgICAgICAgICAgICAgICAgICBpLmNoYW5nZVBhcmVudCh0LCBjKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjEsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5hZGRUb0FycmF5KHQsIGVbaS5tX2l0ZW1zXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW2kubV9pdGVtc10ubGVuZ3RoID49IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcInNoYWRvd1wiKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmNsZWFyQm94KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9IHRoaXMubGV2ZWxfY29uZmlnO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0V2VpZ2h0KCk7XG4gICAgICAgIGNjLmxvZyhcIuadg+mHje+8mlwiLCBvKTtcbiAgICAgICAgaWYgKG8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGUubGltaXRSYW5rO1xuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLm1pbihpLCBvLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgbiA9IFtdO1xuICAgICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCByOyBzKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG9bc10uc3BsaXQoXCJfXCIpWzFdO1xuICAgICAgICAgICAgICAgIG4ucHVzaChOdW1iZXIoYykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgYSArPSBOdW1iZXIodCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBsID0gdGhpcy5nZXRSYW5kb21JbnRlZ2VyKDEsIGEpO1xuICAgICAgICAgICAgdmFyIGggPSAwO1xuICAgICAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBuLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChoICs9IG5bZF0pID49IGwgJiYgdGhpcy5jaGVja0hhc0l0ZW1CeUNvbG9yKG9bZF0uc3BsaXQoXCJfXCIpWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICBwID0gZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUgPSBvW3BdLnNwbGl0KFwiX1wiKVswXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoLTI4ODA3ID09IHRoaXMubGV2ZWxJRCB8fCAtMjkwNTUgPT0gdGhpcy5sZXZlbElEKSAmJlxuICAgICAgICAgICAgICAgICgodSA9IHRoaXMubmV4dE5lZWRBZGQyW3RoaXMubmV4dE5lZWRBZGQySW5kZXhdKSwgKHRoaXMubmV4dE5lZWRBZGQySW5kZXggKz0gMSksIG51bGwgPT0gdSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGcgPSB0aGlzLmdldEJveEdyb3VwKE51bWJlcih1KSwgdCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcih1KSxcbiAgICAgICAgICAgICAgICBudW06IE51bWJlcihnKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrSGFzSXRlbUJ5Q29sb3IgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmJveFR5cGVHcm91cFt0XSAmJiAhIXRoaXMuYm94VHlwZUdyb3VwW3RdLmxlbmd0aDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAodCwgZSwgbykge1xuICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XG4gICAgICAgICAgICBvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IHRoaXMuaXRlbVBvc0xpc3RbdF07XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICBpLmFkZFNlbGYobyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBTdHJpbmcoTnVtYmVyKGUpICsgMTApO1xuICAgICAgICB2YXIgbiA9IHRoaXMuaXRlbUxheWVyO1xuICAgICAgICB2YXIgYSA9IHRoaXMucG9vbE1nci5nZXQodGhpcy5wcmVfaXRlbSwgXCJwcmVfaXRlbVwiKTtcbiAgICAgICAgYS5wYXJlbnQgPSBuO1xuICAgICAgICBhLnBvc2l0aW9uID0gaTtcbiAgICAgICAgYVt0aGlzLm1faW5kZXhdID0gdGhpcy5pdGVtTGF5ZXIuY2hpbGRyZW5Db3VudDtcbiAgICAgICAgYVt0aGlzLm1fc3RhdGVdID0gQy5JZGxlO1xuICAgICAgICBhW3RoaXMubV9pZF0gPSBlO1xuICAgICAgICBhW3RoaXMubV9wb3NJbmRleF0gPSB0O1xuICAgICAgICBhLm5hbWUgPSBTdHJpbmcoZSk7XG4gICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGdhbWUucGxhdGVBdGxhcy5nZXRTcHJpdGVGcmFtZShcbiAgICAgICAgICAgIHRoaXMuZm9sZGVyICsgXCJfXCIgKyByXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUluZGV4KGEpO1xuICAgICAgICB0aGlzLml0ZW1RdWV1ZS5wdXNoKGEpO1xuICAgICAgICB2YXIgcyA9IGEuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIik7XG4gICAgICAgIHMuYWN0aXZlID0gITA7XG4gICAgICAgIHMuc2V0UG9zaXRpb24oLTE4LCAtMTgpO1xuICAgICAgICB0aGlzLmNoYW5nZVBhcmVudChzLCB0aGlzLnNoYWRvd0xheWVyKTtcbiAgICAgICAgcy5tX2ZvbGxvdyA9IGE7XG4gICAgICAgIHZhciBjID0gcy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHMucG9zaXRpb24pO1xuICAgICAgICB2YXIgbCA9IGEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhLnBvc2l0aW9uKTtcbiAgICAgICAgcy5tX2ZvbGxvd193VmVjID0gbC5zdWIoYyk7XG4gICAgICAgIGEubV9zaGFkb3cgPSBzO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldEl0ZW1JbmRleCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHQuekluZGV4ID0gNWUzIC0gdC55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHQuekluZGV4ID0gOTk5OTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0V2VpZ2h0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG8gPSB0aGlzLmxldmVsX2NvbmZpZztcbiAgICAgICAgdmFyIGkgPSB7fTtcbiAgICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gKGlbdF0gPSAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByID0gby5ibG9ja1dlaWdodDtcbiAgICAgICAgdGhpcy5ib3hRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBpZiAoZS5ib3hJc0VtcHR5KHQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0W2UubV9pZF07XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0W2UubV9ibG9ja107XG4gICAgICAgICAgICAgICAgaWYgKDEgPT09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IHJbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDIgPT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHJbMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gclsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpW25dICs9IG8gKiBlLmdldEJveE9jY3VweVBvcyh0KS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbiA9IG8ud2FpdFdlaWdodDtcbiAgICAgICAgdGhpcy53YWl0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRbZS5tX2lkXTtcbiAgICAgICAgICAgIHZhciByID0gKGUuZ2V0Qm94T2NjdXB5UG9zKHQpLmxlbmd0aCAtIHRbZS5tX29jY3VweV0pICogbjtcbiAgICAgICAgICAgIGlbb10gKz0gcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IG8ucXVldWVXZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLml0ZW1RdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0W2UubV9pZF07XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBhO1xuICAgICAgICAgICAgICAgIGlbb10gLT0gcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzID0gW107XG4gICAgICAgIGZvciAodmFyIGMgaW4gaSkge1xuICAgICAgICAgICAgdmFyIGwgPSBjICsgXCJfXCIgKyBpW2NdO1xuICAgICAgICAgICAgcy5wdXNoKGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICBzLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHQuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIHZhciBpID0gTnVtYmVyKG9bMV0pO1xuICAgICAgICAgICAgICAgIHZhciByID0gZS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihyWzFdKSAtIGk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRXYWl0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGkgPSBvLndhaXRMYXllci5jaGlsZHJlbltlXTtcbiAgICAgICAgICAgIGkubmFtZSA9IFwid2FpdF9cIiArIGU7XG4gICAgICAgICAgICB2YXIgciA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIGlmIChudWxsID09IHIgPyB2b2lkIDAgOiByLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlbby5tX3N0YXRlXSA9IF8uTG9jaztcbiAgICAgICAgICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQub25DbGlja0V2ZW50KGksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoJGxldmVsQ29uc3RhbnQuTEVWRUxfRVZFTlQuUkVXQVJEVklERU8sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC51bmxvY2tXYWl0KGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlbby5tX3N0YXRlXSA9IF8uRW1wdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndhaXRMYXllci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZShpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudW5sb2NrV2FpdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ID0gdGhpcy53YWl0TGF5ZXIuY2hpbGRyZW4uZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0W2UubV9zdGF0ZV0gPT09IF8uTG9jaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gdC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpO1xuICAgICAgICBvLmFjdGl2ZSA9ICExO1xuICAgICAgICB2YXIgaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5qaWVzdW8pO1xuICAgICAgICBpLnBvc2l0aW9uID0gY2MudjIoKTtcbiAgICAgICAgby5wYXJlbnQuYWRkQ2hpbGQoaSk7XG4gICAgICAgIGkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSAhMTtcbiAgICAgICAgaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgIG8ucmVtb3ZlRnJvbVBhcmVudCghMCk7XG4gICAgICAgIHRbdGhpcy5tX3N0YXRlXSA9IF8uRW1wdHk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2NoZWNrX3VubG9ja1dhaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLndhaXRMYXllci5jaGlsZHJlbi5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLndhaXRMYXllci5jaGlsZHJlbltlXTtcbiAgICAgICAgICAgIG8ubmFtZSA9IFN0cmluZyhlKTtcbiAgICAgICAgICAgIHZhciBpID0gby5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpO1xuICAgICAgICAgICAgaWYgKGkgJiYgaS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0ID0gbztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfdW5sb2NrV2FpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmZ1bmNfY2hlY2tfdW5sb2NrV2FpdCgpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tXYWl0KHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXYWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMud2FpdExheWVyLmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMud2FpdExheWVyLmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgaWYgKGUuYWN0aXZlICYmIGVbdGhpcy5tX3N0YXRlXSA9PT0gXy5FbXB0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0UmFuZG9tSW50ZWdlciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZSAtIHQgKyAxKSkgKyB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9hZFNwcml0ZUZyYW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0Q2hpbGRCeU5hbWUodCkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0lzRmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IGwub3Zlcikge1xuICAgICAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLndhaXRMYXllci5jaGlsZHJlbi5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLndhaXRMYXllci5jaGlsZHJlbltlXVt0aGlzLm1fc3RhdGVdICE9PSBfLkxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgICAgIGZvciAoZSA9IDA7IGUgPCB0aGlzLndhaXRMaXN0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChyID0gdGhpcy53YWl0TGlzdFtlXSlbdGhpcy5tX3N0YXRlXSA9PT0geS5PY2N1cHkpIHtcbiAgICAgICAgICAgICAgICAgICAgbyArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ID09IG8pIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJjaGVja1RpcFRleHRcIiwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0IC0gMSA9PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImNoZWNrVGlwVGV4dFwiLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVjayAmJiBvID09PSB0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAhMTtcbiAgICAgICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgdGhpcy53YWl0TGlzdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMud2FpdExpc3RbZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5nZXRJdGVtRGF0YShyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gJiYgbi5pdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5ub25lKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNoYWRvdygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVTaGFkb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5zaGFkb3dMYXllci5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gZS5tX2ZvbGxvdztcbiAgICAgICAgICAgICAgICBpZiAobyAmJiBvLmFjdGl2ZSAmJiBvW3QubV9zdGF0ZV0gIT0gQy5Cb3gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBvLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoby5wb3NpdGlvbikuc3ViKGUubV9mb2xsb3dfd1ZlYyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgICAgICAgICAgICAgICAgIGUucG9zaXRpb24gPSByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0R3VpZGVuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgtMjgzOTEgPT09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3Quc3o7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDAuOFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUd1aWRlbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoLTI4MzkxID09PSB0aGlzLmxldmVsSUQpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5kaWN0LnN6O1xuICAgICAgICAgICAgaWYgKHQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdEdyaWRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ncmlkTGF5ZXIuYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRUb3VjaE5vZGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdGhpcy5ib3hMYXllci5jaGlsZHJlbjtcbiAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBvLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICBpZiAoKGEgPSBvW3JdKVt0aGlzLm1fc3RhdGVdID09PSB5LkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGFbdGhpcy5tX2Jsb2NrXSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIGZvciAociA9IDA7IHIgPCBvLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIGlmICgoYSA9IG9bcl0pLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHQpKSB7XG4gICAgICAgICAgICAgICAgbi5wdXNoKGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaS5sZW5ndGggJiYgbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIG4uc29ydChmdW5jdGlvbiAodCwgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvW2UubV9pbmRleF0gLSB0W2UubV9pbmRleF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5bMF0ucnVuQWN0aW9uKHRoaXMuc2hhY2tBY3Rpb24oMC4xLCAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkubGVuZ3RoXG4gICAgICAgICAgICA/IChpLnNvcnQoZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvW2UubV9pbmRleF0gLSB0W2UubV9pbmRleF07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBpWzBdKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgICAgJGxldmVsVXRpbC5kZWZhdWx0LnRvdWNoRXZlbnQodGhpcy5kaWN0LnRvdWNoTm9kZSwge1xuICAgICAgICAgICAgc0Z1bmM6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgdC5wbGF5Q2xpY2tTb3VuZCgpO1xuICAgICAgICAgICAgICAgIGlmICh0LnN0YXRlID09PSBsLndhaXRUb3VjaCB8fCB0LnN0YXRlID09PSBsLnByb3BfY2xlYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBvLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZSA9IHQuZ2V0VG91Y2hOb2RlKGkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc3RhdGUgPT0gbC53YWl0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5kaWN0LmhhbmQgJiYgdC5kaWN0LmhhbmQuYWN0aXZlICYmICh0Lmd1aWRlZE5vZGVzLnB1c2goZSksIHQuY3VycmVudEd1aWRlTm9kZSA9PSBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQuZ3VpZGVOb2Rlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0Lmd1aWRlTm9kZXNbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgPT0gdC5ndWlkZWROb2Rlcy5pbmRleE9mKGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jdXJyZW50R3VpZGVOb2RlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmhhbmRQb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmRpY3QuaGFuZC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC5oYW5kVGV4dC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC5oYW5kVGV4dC5wYXJlbnQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0LmdldFdhaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3QubV9zdGF0ZV0gPSB5Lk9jY3VweTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC51cGRhdGVCb3hTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldEJveFRvV2FpdChlLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJ1bkFjdGlvbih0LnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc3RhdGUgPT0gbC5wcm9wX2NsZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbdC5tX3N0YXRlXSA9IHkuRmluaXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUJveFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImlzUmVtb3ZlXCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zZXRCb3hUb1Byb3BDbGVhcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbUZ1bmM6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgZUZ1bmM6IGZ1bmN0aW9uICgpIHt9XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMuZW50ZXJLZXlJbnB1dCwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDbGVhck51bSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJOdW0gKz0gdDtcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJOdW0gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTnVtID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJOdW0gPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmxldmVsVG90YWw7XG4gICAgICAgIHZhciBlID0gdCAtIHRoaXMuY2xlYXJOdW07XG4gICAgICAgIHZhciBvID0gKHRoaXMuY2xlYXJOdW0gLyB0KS50b0ZpeGVkKDIpO1xuICAgICAgICB2YXIgaSA9IE51bWJlcihvKTtcbiAgICAgICAgaSAqPSAxMDA7XG4gICAgICAgIGlmICgoaSA9IE1hdGguZmxvb3IoaSkpID4gMTAwKSB7XG4gICAgICAgICAgICBpID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiUHJvZ3Jlc3Muc3RyaW5nID0gXCJcIiArIGU7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImFsbFBlcnNvbkFtb3VudFwiLCBlLCB0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGxQZXJzb25BbW91bnRcIiwgZSwgdCk7XG4gICAgICAgIGdhbWUudG90YWxBbW91bnQgPSB0aGlzLmxldmVsVG90YWw7XG4gICAgICAgIGdhbWUucmVtYWluaW5nQW1vdW50ID0gZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrV2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmJveExheWVyLmNoaWxkcmVuLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5hY3RpdmU7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YygxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25MZXZlbFJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYWNrQWN0aW9uID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5tb3ZlQnkodCwgZSwgZSk7XG4gICAgICAgIHZhciBpID0gY2MubW92ZUJ5KHQsIC1lLCAtZSk7XG4gICAgICAgIHZhciByID0gY2MubW92ZUJ5KDAuOCAqIHQsIDAuOCAqIGUsIDAuOCAqIGUpO1xuICAgICAgICB2YXIgbiA9IGNjLm1vdmVCeSgwLjggKiB0LCAwLjggKiAtZSwgMC44ICogLWUpO1xuICAgICAgICB2YXIgYSA9IGNjLm1vdmVCeSgwLjYgKiB0LCAwLjYgKiBlLCAwLjYgKiBlKTtcbiAgICAgICAgdmFyIHMgPSBjYy5tb3ZlQnkoMC42ICogdCwgMC42ICogLWUsIDAuNiAqIC1lKTtcbiAgICAgICAgdmFyIGMgPSBjYy5tb3ZlQnkoMC40ICogdCwgMC40ICogZSwgMC40ICogZSk7XG4gICAgICAgIHZhciBsID0gY2MubW92ZUJ5KDAuNCAqIHQsIDAuNCAqIC1lLCAwLjQgKiAtZSk7XG4gICAgICAgIHZhciBoID0gY2MubW92ZUJ5KDAuMiAqIHQsIDAuMiAqIGUsIDAuMiAqIGUpO1xuICAgICAgICB2YXIgcCA9IGNjLm1vdmVCeSgwLjIgKiB0LCAwLjIgKiAtZSwgMC4yICogLWUpO1xuICAgICAgICByZXR1cm4gY2Muc2VxdWVuY2UobywgaSwgciwgbiwgYSwgcywgYywgbCwgaCwgcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdWMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvZyhcInN1Y1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5vdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gbC5vdmVyO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUucGxheVJpZ2h0KG51bGwsIDEpO1xuICAgICAgICAgICAgfSwgdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvc2UgPSBmdW5jdGlvbiAodCwgZSwgbywgaSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkge1xuICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5vdmVyKSB7XG4gICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICAgICAgICAgICAgICByLnggKz0gNzA7XG4gICAgICAgICAgICAgICAgICAgIHIueSAtPSA3MDtcbiAgICAgICAgICAgICAgICAgICAgci5wYXJlbnQgPSB0LnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgci5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUVycm9yKHIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RXJyb3JPbmNlKHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFcnJvcih0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUVycm9yT25jZSh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFcnJvck9uY2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2coXCJmYWlsXCIpO1xuICAgICAgICB0aGlzLmxvc2UobnVsbCwgITEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcImxldmVsUmV2aXZlSGVscGVyXCIpO1xuICAgICAgICAgICAgJGxldmVsUmV2aXZlSGVscGVyLmRlZmF1bHQubGV2ZWxGYWlsRXZlbnQoXCLmmK/lkKbpnIDopoHlpI3mtLtcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG8uZnVuY19yZXZpdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGwub3ZlcjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFdvcmRQb3MgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHQucG9zaXRpb24pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9ICRsZXZlbFV0aWwuZGVmYXVsdC5jb252ZXJ0UG9zaXRpb24odCwgZSk7XG4gICAgICAgIHJldHVybiBlLnBvc2l0aW9uLnN1YihvKS5tYWcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmRlbGV0ZUZyb21BcnJheSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gZS5pbmRleE9mKHQpO1xuICAgICAgICBpZiAoLTEgIT09IG8pIHtcbiAgICAgICAgICAgIGUuc3BsaWNlKG8sIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRUb0FycmF5ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKC0xID09PSBlLmluZGV4T2YodCkpIHtcbiAgICAgICAgICAgIGUucHVzaCh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hhbmdlUGFyZW50ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodC5wb3NpdGlvbik7XG4gICAgICAgIHQucGFyZW50ID0gZTtcbiAgICAgICAgdC5wb3NpdGlvbiA9IHQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25EaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnByb3RvdHlwZS5vbkRpc2FibGUuY2FsbCh0aGlzKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSAhMTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMuZW50ZXJLZXlJbnB1dCwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0UG9vbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA0OyB0KyspIHtcbiAgICAgICAgICAgIHRoaXMucG9vbE1nci5wdXQoY2MuaW5zdGFudGlhdGUodGhpcy5wcmVfaXRlbSksIFwicHJlX2l0ZW1cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnB1dEl0ZW1Ub1Bvb2wgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICB2YXIgZSA9IHQubV9zaGFkb3c7XG4gICAgICAgIGUubV9mb2xsb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZVBhcmVudChlLCB0KTtcbiAgICAgICAgdGhpcy5wb29sTWdyLnB1dCh0LCBcInByZV9pdGVtXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19jaG9vc2VDbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5wcm9wX2NsZWFyKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLpgZPlhbfvvJrpgInmi6nmtojpmaRcIik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gbC5wcm9wX2NsZWFyO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiaXNSZW1vdmVcIiwgITApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hSZW1haW5OdW0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3hUb3RhbE51bSh0KSAtIHRbdGhpcy5tX29jY3VweV07XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hUb3RhbE51bSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJveE9jY3VweVBvcyh0KS5sZW5ndGg7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRCb3hUb1Byb3BDbGVhciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gbnVsbDtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGkgPSB0aGlzLmRpY3QucHJvcF9jbGVhcl9ib3g7XG4gICAgICAgIH1cbiAgICAgICAgdC5pc0NsZWFyQm94ID0gITA7XG4gICAgICAgIHZhciByID0gdGhpcy5nZXRCb3hSZW1haW5OdW0odCk7XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIHZhciBhID0gX19zcHJlYWRBcnJheXModGhpcy5pdGVtUXVldWUpO1xuICAgICAgICB2YXIgcyA9IHRbdGhpcy5tX2lkXTtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIHZhciBoID0gMDtcbiAgICAgICAgICAgIGggPCBhLmxlbmd0aCAmJlxuICAgICAgICAgICAgKHMgIT09IChtID0gYVtoXSlbdGhpcy5tX2lkXSB8fCAobi5wdXNoKG0pLCB0aGlzLmRlbGV0ZUZyb21BcnJheShtLCB0aGlzLml0ZW1RdWV1ZSksIDAgIT0gLS1yKSk7XG4gICAgICAgICAgICBoKytcbiAgICAgICAgKSB7fVxuICAgICAgICBpZiAociA+IDApIHtcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5pdGVtUG9zTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIGQgPSBjYy52MigpO1xuICAgICAgICAgICAgdmFyIHUgPSB0aGlzLmdldEJveEdyb3VwKHMsIHIpO1xuICAgICAgICAgICAgZm9yICh2YXIgZyA9IDA7IGcgPCB1OyBnKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBkID0gY2MudjIoMCwgMzAgKiAoZyArIDEpKTtcbiAgICAgICAgICAgICAgICAobSA9IHRoaXMuY3JlYXRlSXRlbShwLCBzLCBkKSkub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgbi5wdXNoKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm94Rmx5KHQsIGksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICBlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgby5zZXRJdGVtVG9Cb3goZSwgdCwgITApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZSA9IG8uZ2V0Qm94VG90YWxOdW0odCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGU7IGkrKykge1xuICAgICAgICAgICAgICAgIG8uaXRlbVN1cHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5pdGVtUXVldWUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG8udXBkYXRlSXRlbVF1ZXVlKCk7XG4gICAgICAgICAgICBvLnN0YXRlID0gbC53YWl0VG91Y2g7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19zb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbC5wcm9wX3NvcnQ7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXRXZWlnaHQoITApO1xuICAgICAgICBjYy5sb2coXCLpgZPlhbfvvJrmjpLluo9cIik7XG4gICAgICAgIGNjLmxvZyhcIuaOkuW6j++8muadg+mHje+8mlwiLCB0KTtcbiAgICAgICAgY2MubG9nKFwi6Zif5YiX77yaXCIsIHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCk7XG4gICAgICAgIGlmICh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLml0ZW1Qb3NMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuaXRlbVBvc0xpc3RbZV07XG4gICAgICAgICAgICB2YXIgaSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0W3JdO1xuICAgICAgICAgICAgICAgIHZhciBhID0gTnVtYmVyKG4uc3BsaXQoXCJfXCIpWzBdKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5pdGVtUXVldWVbc107XG4gICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBoW3RoaXMubV9pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhbdGhpcy5tX3Bvc0luZGV4XSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoLnBvc2l0aW9uID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLml0ZW1RdWV1ZSA9IF9fc3ByZWFkQXJyYXlzKGkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtUXVldWUoMC4wNSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfcmV2aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbC53YWl0VG91Y2g7XG4gICAgICAgIGNjLmxvZyhcIumBk+WFt++8muWkjea0u1wiKTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmZ1bmNfY2hlY2tfdW5sb2NrV2FpdCgpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tXYWl0KHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV3UmV2aXZlQW5pbSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHQuaXNDbGVhckJveCA9ICEwO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZGljdC5wcm9wX2NsZWFyX2JveDtcbiAgICAgICAgdGhpcy5ib3hGbHkodCwgbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG8gPSBlLmdldEJveE9jY3VweVBvcyh0KS5sZW5ndGg7XG4gICAgICAgICAgICBvIC09IHRbZS5tX29jY3VweV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIua2iOmZpOmBk+WFt1wiLCBvKTtcbiAgICAgICAgICAgIHZhciBpID0gdFtlLm1faWRdO1xuICAgICAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IEFycmF5KG8pLmZpbGwoaSk7XG4gICAgICAgICAgICBjYy5sb2coXCJnZXRCb3hHcm91cCBzdGFydCBcIiwgJGxldmVsVXRpbC5kZWZhdWx0LmRlZXBDb3B5KGUuYm94VHlwZUdyb3VwKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG87IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gZS5pdGVtUXVldWVbYV07XG4gICAgICAgICAgICAgICAgci5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IGUuaXRlbVF1ZXVlLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSAocyA9IGUuaXRlbVF1ZXVlW2FdKVtlLm1faWRdO1xuICAgICAgICAgICAgICAgIGlmIChlLmJveFR5cGVHcm91cFtpXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLmJveFR5cGVHcm91cFtpXSA9IFswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5ib3hUeXBlR3JvdXBbaV1bMF0gKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoYyAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIG4ucHVzaChjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnNvbGUubG9nKFwi6L+Y5Ymp5L2Z5pyJLS0tLVwiLCBuLmxlbmd0aCwgZS5pdGVtUXVldWUubGVuZ3RoKTsgbi5sZW5ndGggPCBlLml0ZW1RdWV1ZS5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGMgPSBlLmdldFN1cnBsdXNDb2xvcigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+Y5Ymp5L2Z5pyJXCIsIGMpO1xuICAgICAgICAgICAgICAgIGUuYm94VHlwZUdyb3VwW2NdWzBdIC09IDE7XG4gICAgICAgICAgICAgICAgbi5wdXNoKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKFwiZ2V0Qm94R3JvdXAgc3RhcnQyIFwiLCAkbGV2ZWxVdGlsLmRlZmF1bHQuZGVlcENvcHkoZS5ib3hUeXBlR3JvdXApKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3JTb3J0XCIsIG4pO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IG4ubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IG5bYV07XG4gICAgICAgICAgICAgICAgaWYgKGUuaXRlbVF1ZXVlW2FdKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSBlLml0ZW1RdWV1ZVthXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBTdHJpbmcoTnVtYmVyKGgpICsgMTApO1xuICAgICAgICAgICAgICAgICAgICBzW2UubV9pZF0gPSBoO1xuICAgICAgICAgICAgICAgICAgICBzLm5hbWUgPSBTdHJpbmcoaCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gcy5nZXRDaGlsZEJ5TmFtZShcInNwXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IGUuaW1hZ2UuZ2V0Q2hpbGRCeU5hbWUocCk7XG4gICAgICAgICAgICAgICAgICAgIGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmxvZyhcImdldEJveEdyb3VwIHN0YXJ0MyBcIiwgJGxldmVsVXRpbC5kZWZhdWx0LmRlZXBDb3B5KGUuYm94VHlwZUdyb3VwKSk7XG4gICAgICAgICAgICByLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICBlLnNldEl0ZW1Ub0JveChvLCB0LCAhMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUudXBkYXRlSXRlbVF1ZXVlKCk7XG4gICAgICAgICAgICBlLnN0YXRlID0gbC53YWl0VG91Y2g7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0U3VycGx1c0NvbG9yID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLml0ZW1RdWV1ZS5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgaWYgKCFlW29dKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLml0ZW1RdWV1ZVtvXTtcbiAgICAgICAgICAgICAgICBpZiAodCA9PSBpW3RoaXMubV9pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldFN1cnBsdXNDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5jliankvZnmnIlcIiwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFtyXVswXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaVt0aGlzLm1faWRdID0gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gU3RyaW5nKE51bWJlcihyKSArIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaS5nZXRDaGlsZEJ5TmFtZShcInNwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLmltYWdlLmdldENoaWxkQnlOYW1lKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZmlsdGVyQm94VHlwZUdyb3VwQXJyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gMCAhPSB0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm5ld1Jldml2ZUFuaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaXNSZXZpdmluZykge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZXZpdmluZyA9ICEwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnN0YXJTcGluZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHQuaXRlbVF1ZXVlLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHQuaXRlbVF1ZXVlW2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAkbGV2ZWxVdGlsLmRlZmF1bHQuZ2V0UmFuZG9tSW50KDEsIDgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5zZXRDb2xvckl0ZW1JbWdfcmV2aXZlKGksIG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAgICAgMi4yXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgIC5kZWxheSgxLjUpXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0LmRpY3Quc3RhclNwaW5lLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IE1hdGgubWluKDQsIHQud2FpdExpc3QubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdC53YWl0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5nZXRCb3hPY2N1cHlQb3MocikubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiAtPSByW3QubV9vY2N1cHldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSByW3QubV9pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gby5jb25jYXQobmV3IEFycmF5KG4pLmZpbGwoYSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0Lml0ZW1RdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc1soYyA9IChtID0gdC5pdGVtUXVldWVbaV0pW3QubV9pZF0pXSB8fCAoc1tjXSA9IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1tjXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgaW4gcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzW2NdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5ib3hUeXBlR3JvdXBbY10ucHVzaChzW2NdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xvclNvcnRcIiwgbyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbVF1ZXVlXCIsIHQuaXRlbVF1ZXVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0Lml0ZW1RdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgKG0gPSB0Lml0ZW1RdWV1ZVtpXSkubV9zaGFkb3cuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0Lml0ZW1RdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0Lm5leHROZWVkQWRkX25ldyA9IG87XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaCA9IHQuaXRlbVBvc0xpc3QubGVuZ3RoOyBsIDwgaDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQubmV4dE5lZWRBZGRfbmV3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gdC5uZXh0TmVlZEFkZF9uZXcuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmdldEJveEdyb3VwKHAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IHQuZ2V0SXRlbVR5cGUoLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB1LnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IHUubnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSB0LmNyZWF0ZUl0ZW0oZywgTnVtYmVyKHApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCArIGkgPj0gaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gaCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGwgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgKz0gZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZSAmJiAoKHIgPSB0LndhaXRMaXN0W2ldKSwgIXQuY2hlY2tCb3hUYWtlSXRlbShyKSk7IGkrKykge31cbiAgICAgICAgICAgICAgICAgICAgdC5pc1Jldml2aW5nID0gITE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0U3VycGx1c0NvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuYm94VHlwZUdyb3VwXCIsIHRoaXMuYm94VHlwZUdyb3VwKTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDE7IHQgPCA5OyB0KyspIHtcbiAgICAgICAgICAgIHRoaXMuYm94VHlwZUdyb3VwW3RdID0gdGhpcy5maWx0ZXJCb3hUeXBlR3JvdXBBcnIodGhpcy5ib3hUeXBlR3JvdXBbdF0pO1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmJveFR5cGVHcm91cFt0XTtcbiAgICAgICAgICAgIGlmIChlICYmIGVbMF0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbb10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDb2xvckl0ZW1JbWdfcmV2aXZlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBTdHJpbmcoTnVtYmVyKHQpICsgMTApO1xuICAgICAgICB2YXIgaSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgZ2FtZS5kcmlua0F0bGFzO1xuICAgICAgICBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZ2FtZS5wbGF0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKHRoaXMuZm9sZGVyICsgXCJfXCIgKyBvKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmVudGVyS2V5SW5wdXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBzd2l0Y2ggKHQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jX2Nob29zZUNsZWFyKCk7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmNfc29ydCgpO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jX3Jldml2ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFt2XSwgZS5wcm90b3R5cGUsIFwiYm94SXRlbVNjYWxlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2ZdLCBlKTtcbn0pKCRicmFpbkxldmVsQmFzZS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGs7XG52YXIgQSA9IFtcbiAgICB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogODY1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogODAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDE2NSxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDExMCxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDU1LFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC01NSxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0xMTAsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMTY1LFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTIyMCxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0yMjAsXG4gICAgICAgIHk6IDY5NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMjIwLFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTE2NSxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0xMTAsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtNTUsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogNTUsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAxMTAsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAxNjUsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyMjAsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyMjAsXG4gICAgICAgIHk6IDYwMC4yMjNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA1NjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMTY1LFxuICAgICAgICB5OiA1NjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMTEwLFxuICAgICAgICB5OiA1NjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogNTUsXG4gICAgICAgIHk6IDU2MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA1NjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogNTAwLjczMlxuICAgIH1cbl07XG4iXX0=