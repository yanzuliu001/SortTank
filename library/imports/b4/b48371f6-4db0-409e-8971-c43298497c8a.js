"use strict";
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