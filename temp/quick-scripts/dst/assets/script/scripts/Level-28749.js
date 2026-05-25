
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-28749.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56335XIFHRHuKgN3o8zcILd', 'Level-28749');
// script/scripts/Level-28749.js

"use strict";

var i;
exports.BoxState = void 0;
var l;

var $brainLevelBase = require("./BrainLevelBase");

var $levelConstant = require("./LevelConstant");

var $levelReviveHelper = require("./levelReviveHelper");

var $levelUtil = require("./LevelUtil");

var $poolMgr = require("./PoolMgr");

var $level_28749_transport = require("./Level-28749_transport");

var f = cc._decorator;
var v = f.ccclass;
f.property;

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
  "2-2": [[-15, 24], [14, 24], [-15, -6], [14, -6]],
  "3-2": [[-14.5, 39], [15, 39], [-14.5, 9], [15, 9], [-14.5, -21], [15, -21]],
  "4-2": [[-15, 54], [13, 54], [-15, 24], [13, 24], [-15, -5.5], [13, -5.5], [-15, -34.5], [13, -34.5]]
};

(function (t) {
  t[t.None = 0] = "None";
  t[t.Empty = 1] = "Empty";
  t[t.Occupy = 2] = "Occupy";
  t[t.OccupyAnimation = 3] = "OccupyAnimation";
  t[t.FinishAnimation = 4] = "FinishAnimation";
  t[t.Finish = 5] = "Finish";
})(y = exports.BoxState || (exports.BoxState = {}));

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
    e.guideText = ["点击盒子可上去装对应颜色的饮料", "大盒子可以装8杯饮料", "中盒子可以装6杯饮料", "小盒子可以装4杯饮料"];
    e.guidedNodes = [];
    e.types = [];
    e.levelTotal = 0;
    e.level_config = null;
    e.boxDataObjects = [];
    e.itemPosList = [];
    e.guideLevelColor = [6, 1, 4, 8];
    e.boxMap = new Map();
    e.boxQueue = [];
    e.boxTypeGroup = {};
    e._canTouch = !1;
    e.nextNeedAdd2Index = 0;
    e.nextNeedAdd2 = [];
    e.maxBlockIndex = 1;
    e.isCheck = !1;
    e.drinkArr = [];
    e.itemQueue = [];
    e.noAmount = [];
    e.clearNum = 0;
    e.poolMgr = new $poolMgr["default"]();
    e.nextNeedAdd_new = [];
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

  e.prototype.changeBg = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      return __generator(this, function () {
        try {
          if ((t = game.currentLevel || 1) > 40) {
            t %= 40;
          }

          console.log("测试修改背景", t, game.currentLevel);

          if (t >= 31) {
            console.log("紫色");
            cc.find("game/bg/8", this.node).name = "3-1";
            (e = cc.find("game/container/7=cover", this.node)).name = "3-2=cover";
            e.children[0].active = !1;
          } else {
            if (t >= 21) {
              console.log("海边"), cc.find("game/bg/8", this.node).name = "2-1", (e = cc.find("game/container/7=cover", this.node)).name = "2-2=cover", e.y -= 125, e.children[0].active = !1;
            } else {
              t >= 11 && (console.log("条纹"), cc.find("game/bg/8", this.node).name = "1-1", (e = cc.find("game/container/7=cover", this.node)).name = "1-2=cover", e.children[0].active = !1);
            }
          }
        } catch (o) {
          console.log(o);
          return [2];
        }

        return [2];
      });
    });
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

    var e = (cc.find("game/image", this.node), cc.find("game/pres", this.node));
    t(e, "20=boxShadow0");
    t(e, "21=boxShadow1");
    t(e, "22=boxShadow2");
    t(e, "28=boxShadow_0");
    t(e, "29=boxShadow_1");
    t(e, "30=boxShadow_2");
  };

  e.prototype.onLoad = function () {
    this.createSprite();
    this.createSpine();
    this.changeBg();
    t.prototype.onLoad.call(this);
    this.initLevel();
    this.dict.game.active = !1;
    this.dict.prop_clear_box.x = -88.236;
    this.dict[9].x = 0;
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

      if (this.dict.transportBg) {
        this.dict.transportBg.y -= 80;
        this.dict.transportLayer.y -= 80;
      }
    }

    this.shadowLayer = this.dict.shadowLayer;
  };

  e.prototype.init = function () {
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
      $levelUtil["default"].deepCopy(o).split("*")[1].split("#").forEach(function (e) {
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
    }

    if (this.level_config && this.level_config.transport) {
      this.dict.transportLayer.getComponent($level_28749_transport["default"]).init(this, this.level_config.transport);
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

    if (this.level_config.transport) {
      this.dict.transportLayer.getComponent($level_28749_transport["default"]).createBox();
    }

    if (this.dict.hand) {
      var e = this.boxLayer;
      this.guideNodes.push(e.children[3]);
      this.guideNodes.push(e.children[2]);
      this.guideNodes.push(e.children[0]);
      this.guideNodes.push(e.children[1]);
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

    for (var c = 0; c < r.length; c++) {
      if (0 === r[c]) {
        var l = a(c, s);
        r[c] = l;
        s = l;
      }
    }

    var h = {};
    r.forEach(function (e, o) {
      var r = t.types[e - 1];
      var n = i[o];

      if (-28807 == t.levelID) {
        r = t.guideLevelColor[o];
      }

      t.setBoxData(n, r);
      var a = t.getBoxOccupyPos(n).length;
      t.levelTotal += a;

      if (h[r]) {//
      } else {
        h[r] = [];
      }

      h[r].push(a);
    });
    console.log("type_numArr====", h);
    cc.log("饮料总数：", this.levelTotal);

    var p = function p(e) {
      var o = [];
      h[e].forEach(function (e) {
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
      d.boxTypeGroup[i] = [];
      o.forEach(function (e) {
        return t.boxTypeGroup[i].push(Number(e));
      });
    };

    var d = this;

    for (var g in h) {
      p(g);
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

    this.updateBoxState();
    this.playItemsIn();
  };

  e.prototype.addShadow = function (t, e, o) {
    console.log("this.image", this.image);
    var i = this.image.getChildByName(e);
    var r = cc.instantiate(i);
    r.name = "shadow";
    r.active = !0;
    r.parent = this.shadowLayer;
    var n = t.convertToWorldSpaceAR(o);
    r.position = r.parent.convertToNodeSpaceAR(n);
    r.scale = t.scale;
    r.shadow_target = t;
    t.shadow_target = r;
    var a = t.parent.convertToWorldSpaceAR(t.position);
    r.m_follow_vec = a.sub(n);
  };

  e.prototype.playItemsIn = function () {
    var t = this;
    this.boxLayer.zIndex = 101;
    this.itemLayer.zIndex = 100;
    this.dict.cover.zIndex = 102;
    this.dict.testLayer.zIndex = 103;
    this.effectLayer.zIndex = 104;

    if (this.dict.transportLayer) {
      this.dict.transportBg.zIndex = 99;
      this.boxLayer.zIndex = 101;
      this.dict.transportLayer.zIndex = 102;
      this.itemLayer.zIndex = 100;
      this.dict.cover.zIndex = 103;
      this.dict.testLayer.zIndex = 104;
      this.effectLayer.zIndex = 105;
    }

    var e = __spreadArrays(this.boxLayer.children);

    (e = e.filter(function (t) {
      return !t.isTransportBox;
    })).sort(function (e, o) {
      return e.y + 1e3 * e[t.m_hierarchy] - (o.y + 1e3 * o[t.m_hierarchy]);
    }).forEach(function (o, i) {
      var r = cc.winSize.height / 2 + 3 * o.width;
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
          t._canTouch = !0;
          t.boxLayer.zIndex = 100;
          t.itemLayer.zIndex = 101;
          t.dict.cover.zIndex = 102;
          t.dict.testLayer.zIndex = 103;
          t.effectLayer.zIndex = 104;

          if (t.dict.transportLayer) {
            t.dict.transportBg.zIndex = 98;
            t.boxLayer.zIndex = 99;
            t.dict.transportLayer.zIndex = 100;
            t.itemLayer.zIndex = 101;
            t.dict.cover.zIndex = 102;
            t.dict.testLayer.zIndex = 103;
            t.effectLayer.zIndex = 104;
          }

          if (t.level_config && t.level_config.transport) {
            t.dict.transportLayer.getComponent($level_28749_transport["default"]).isMove = !0;
          }
        }
      }).start();
    });
  };

  e.prototype.getBoxCloseSFName = function (t, e) {
    var o = 0;

    switch (t) {
      case "2-2":
        o = 100;
        break;

      case "2-2-2":
        o = 200;
        break;

      case "3-2":
        o = 300;
        break;

      case "3-2-2":
        o = 400;
        break;

      case "4-2":
        o = 500;
        break;

      case "4-2-2":
        o = 600;
    }

    return String(o + e);
  };

  e.prototype.getBoxOpenSFName = function (t, e) {
    var o = 0;

    switch (t) {
      case "2-2":
      case "2-2-2":
        o = 100;
        break;

      case "3-2":
      case "3-2-2":
        o = 300;
        break;

      case "4-2":
      case "4-2-2":
        o = 500;
    }

    var i = o + Number(e) + 1e3;
    return String(i);
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
    l.getChildByName("sp").zIndex = 0;
    var h = this.boxMap.get(o);
    h.push(l);
    this.boxMap.set(o, h);
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
    var o = t.getChildByName("sp").getComponent(cc.Sprite);

    try {
      o.spriteFrame = game.boxAtlas.getSpriteFrame(this.folder + "_" + e);
    } catch (i) {
      o.spriteFrame = this.loadSpriteFrame(e);
    }
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
      console.log("hierarchyLevels", e);

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

                    if (i[t.m_block] >= t.maxBlockIndex) {
                      t.maxBlockIndex = i[t.m_block];
                    }
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
    t.getChildByName("sp").active = !1;

    for (var i = t.getChildByName("item"); i.childrenCount;) {
      this.putItemToPool(i.children[0]);
    }

    this.setBoxIndex(t, 3);
    var r = cc.instantiate(this.boxSpine);
    r.name = "spine";
    r.parent = t;
    r.position = cc.v2();
    r.scale = 1.2;
    r.active = !0;
    var n = t[this.m_id];
    this.scheduleOnce(function () {
      var i = r.getComponent(sp.Skeleton);
      var a = "skin" + Number(n);
      i.setSkin(a);
      var s = e.getBoxAnimId(t.name);
      i.timeScale = 1.3;
      i.setAnimation(0, "daiji" + s, !0);

      var c = function c() {
        $levelUtil["default"].playSpineCallBack(i, "dabao" + s, !1, function () {
          e.playLevelSound("Full");
          e.playEffect(t);
          e.setClearNum(o);
          e.startClearTimer();
          cc.tween(t).delay(0.3).by(0.2, {
            x: 1e3
          }).call(function () {
            t.active = !1;
            t.destroy();
            t.parent = null;
            e.checkWin();
          }).start();
        });
        e.scheduleOnce(function () {
          e.deleteFromArray(t, e.waitList);

          if (t[e.m_wait]) {
            t[e.m_wait][e.m_state] = _.Empty;
            t[e.m_wait] = null;
          }
        }, 0.1);
      };

      if (t.isClearBox) {
        c();
      } else {
        cc.tween(t).by(0.1, {
          y: -150
        }).call(function () {
          c();
        }).start();
      }
    });
  };

  e.prototype.playEffect = function (t) {
    var e = cc.instantiate(this.dict.guangquan);
    e.parent = this.effectLayer;
    e.active = !0;
    e.name = "effect";
    e.position = $levelUtil["default"].convertPosition(t, e);
    $levelUtil["default"].playSpineCallBack(e, "animation", !1, function () {
      e.active = !1;
      e.removeFromParent(!0);
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
      if (t.name.includes("4-2")) {
        (n = cc.instantiate(this.dict.boxShadow2)).position = cc.v2(-13.831, 21);
      } else {
        if (t.name.includes("3-2")) {
          (n = cc.instantiate(this.dict.boxShadow1)).position = cc.v2(5 - 17.906, 18.094);
        } else {
          (n = cc.instantiate(this.dict.boxShadow0)).position = cc.v2(-21.968, 14.023);
        }
      }

      n.name = "shadow";
      n.parent = t;
      t.children[0].zIndex = 2;
      n.zIndex = 1;
    }

    if (e) {
      this.setBoxIndex(t, 2);
      cc.tween(t).to(0.2, {
        position: $levelUtil["default"].convertPosition(e, t)
      }).call(function () {
        t.flySuc = !0;
        var e = i.getBoxOpenSFName(t.name, t[i.m_id]);
        i.setBoxSP(t, e);

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
    return S[e];
  };

  e.prototype.getBoxTypeByName = function (t) {
    var e = t.split("-");
    return e[0] + "-" + e[1];
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
    var e = this.itemPosList.length;

    for (console.log("饮料：初始化", e); t < e;) {
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
      if (this.nextNeedAdd.length > 0) {
        console.log("复活", "饮料新增");
        var e = this.nextNeedAdd.shift();
        this.boxTypeGroup[e][0] -= 1;

        if (0 == this.boxTypeGroup[e][0]) {
          this.boxTypeGroup[e].shift();
        }

        for (var o = 0; o < 1; o++) {
          var i = this.itemPosList.length - 1;
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
      console.log("time", d);
      cc.tween(t).bezierTo(d, p, g, h).call(function () {
        i.playLevelSound("Get_on");
        var e = t.getChildByName("sp").getComponent(cc.Sprite);
        var o = 10 + t[i.m_id];

        try {
          var r = game.drinkAtlas;
          e.spriteFrame = r.getSpriteFrame(i.folder + "_" + o + "-1");
        } catch (a) {
          var n = i.image.getChildByName(o + "-1").getComponent(cc.Sprite).spriteFrame;
          e.spriteFrame = n;
        }

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

      if (-28807 == this.levelID && (u = this.nextNeedAdd2[this.nextNeedAdd2Index], this.nextNeedAdd2Index += 1, null == u)) {
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
    var s = a.getChildByName("sp");

    try {
      var c = game.drinkAtlas;
      s.getComponent(cc.Sprite).spriteFrame = c.getSpriteFrame(this.folder + "_" + r);
    } catch (u) {
      var l = this.image.getChildByName(r);
      s.getComponent(cc.Sprite).spriteFrame = l.getComponent(cc.Sprite).spriteFrame;
    }

    this.setItemIndex(a);
    this.itemQueue.push(a);
    var h = a.getChildByName("shadow");
    h.active = !0;
    h.setPosition(-18, -18);
    this.changeParent(h, this.shadowLayer);
    h.m_follow = a;
    var p = h.parent.convertToWorldSpaceAR(h.position);
    var d = a.parent.convertToWorldSpaceAR(a.position);
    h.m_follow_wVec = d.sub(p);
    a.m_shadow = h;
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
        var o = t[e.m_id];
        var n = t[e.m_block];
        var a = 0;

        if (1 === n) {
          a = r[0];
        } else {
          if (2 == n) {
            a = r[1];
          } else {
            a = r[2];
          }
        }

        if (t.isTransportBox) {
          a = r[1];
        }

        i[o] += a * e.getBoxOccupyPos(t).length;
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
        if (t._canTouch && (t.playClickSound(), t.state === l.waitTouch || t.state === l.prop_clear)) {
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
                e.isTransportBox && t.dict.transportLayer.getComponent($level_28749_transport["default"]).reduceCarAmount(e);
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

                if (e.isTransportBox) {
                  t.dict.transportLayer.getComponent($level_28749_transport["default"]).reduceCarAmount(e);
                }
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
    cc.log("取：之前", r, n.length, this.itemQueue.length);

    for (var h = 0; h < a.length && (s !== (m = a[h])[this.m_id] || (n.push(m), this.deleteFromArray(m, this.itemQueue), 0 != --r)); h++) {}

    cc.log("取：之后", r, n.length, this.itemQueue.length);

    if (r > 0) {
      cc.log("取2222：之前", this.boxTypeGroup[s]);
      var p = this.itemPosList.length - 1;
      var d = cc.v2();
      var u = this.getBoxGroup(s, r);

      for (var g = 0; g < u; g++) {
        var m;
        d = cc.v2(0, 30 * (g + 1));
        (m = this.createItem(p, s, d)).opacity = 0;
        n.push(m);
      }

      cc.log("取2222：之后", this.boxTypeGroup[s]);
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
      cc.game.emit("gamelog_Thinking_reward_btn", 8);
    } else {
      cc.game.emit("gamelog_Thinking_reward_btn", 9);
    }

    this.newReviveAnim();
  };

  e.prototype.clear = function (t) {
    var e = this;
    t.isClearBox = !0;
    var o = this.dict.prop_clear_box;
    this.boxFly(t, o, function () {
      var o = e.getBoxOccupyPos(t).length;
      var i = o;
      i -= t[e.m_occupy];
      console.log("消除道具", i);
      var r = t[e.m_id];
      var n = [];
      var a = new Array(i).fill(r);
      cc.log("getBoxGroup start ", $levelUtil["default"].deepCopy(e.boxTypeGroup));

      for (var s = 0; s < i; s++) {
        var c = (d = e.itemQueue[s])[e.m_id];

        if (e.boxTypeGroup[c].length) {//
        } else {
          e.boxTypeGroup[c] = [0];
        }

        e.boxTypeGroup[c][0] += 1;
        n.push(d);
      }

      cc.log("getBoxGroup start2 ", $levelUtil["default"].deepCopy(e.boxTypeGroup));
      console.log("colorSort", a);
      var h = [];

      for (s = 0; s < a.length; s++) {
        var p = a[s];

        if (e.itemQueue[s]) {
          var d = e.itemQueue[s];
          var g = String(Number(p) + 10);
          d[e.m_id] = p;
          d.name = String(p);
          var m = d.getChildByName("sp");
          var f = e.image.getChildByName(g);
          m.getComponent(cc.Sprite).spriteFrame = f.getComponent(cc.Sprite).spriteFrame;

          if (e.boxTypeGroup[p].length) {
            e.boxTypeGroup[p][0] -= 1;
            e.boxTypeGroup[p][0] <= 0 && e.boxTypeGroup[p].shift();
          } else {
            h.push(p);
          }
        }
      }

      for (s = 0; s < h.length; s++) {
        var v = h[s];
        console.log("没有这个颜色了，要找到场上的颜色修改成有的", v);
        e.setSurplusColor(v, a);
      }

      cc.log("getBoxGroup start3 ", $levelUtil["default"].deepCopy(e.boxTypeGroup));
      n.forEach(function (o) {
        e.setItemToBox(o, t, !0);
      });

      for (s = 0; s < o; s++) {
        e.itemSupply();
      }

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

  e.prototype.reviveAnim = function () {
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

        for (i = 0; i < t.itemQueue.length; i++) {
          a = (c = t.itemQueue[i])[t.m_id];
          t.boxTypeGroup[a].length || (t.boxTypeGroup[a] = [0]);
          o[i] && (t.boxTypeGroup[a][0] += 1);
        }

        console.log("colorSort", o);
        console.log("itemQueue", t.itemQueue.length);

        for (i = 0; i < o.length; i++) {
          var s = o[i];

          if (t.itemQueue[i]) {
            var c = t.itemQueue[i];
            var l = String(Number(s) + 10);
            c[t.m_id] = s;
            c.name = String(s);
            var h = c.getChildByName("sp");
            var p = t.image.getChildByName(l);
            h.getComponent(cc.Sprite).spriteFrame = p.getComponent(cc.Sprite).spriteFrame;
            t.boxTypeGroup[s][0] -= 1;

            if (0 == t.boxTypeGroup[s][0]) {
              t.boxTypeGroup[s].shift();
            }
          } else {
            t.nextNeedAdd.push(s);
          }
        }

        var d = t.itemQueue.length;
        console.log("测试", t.getSurplusColor());

        for (i = 0; i < d; i++) {
          c = t.itemQueue[i];
          o[i] || (s = c[t.m_id], t.boxTypeGroup[s].length && t.boxTypeGroup[s][0] || (s = t.getSurplusColor(), console.log("还剩余有", s), t.boxTypeGroup[s][0] -= 1), c[t.m_id] = s, l = String(Number(s) + 10), h = c.getChildByName("sp"), p = t.image.getChildByName(l), h.getComponent(cc.Sprite).spriteFrame = p.getComponent(cc.Sprite).spriteFrame);
        }

        cc.log(" end2", $levelUtil["default"].deepCopy(t.boxTypeGroup));
        cc.log(" nextNeedAdd", t.nextNeedAdd);

        for (i = 0; i < e && (r = t.waitList[i], !t.checkBoxTakeItem(r)); i++) {}

        t.isReviving = !1;
      }).start();
    }
  };

  e.prototype.getSurplusColor = function () {
    console.log("this.boxTypeGroup", this.boxTypeGroup);

    for (var t = 1; t < 9; t++) {
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
    var r = game.drinkAtlas;
    i.getComponent(cc.Sprite).spriteFrame = r.getSpriteFrame(this.folder + "_" + o);
  };

  e.prototype.getSpriteFrameByAtlas = function (t, e) {
    var o = this;
    return new Promise(function (i, r) {
      cc.resources.load("zqddn_zhb/texture/" + t, cc.SpriteAtlas, function (t, n) {
        if (t) {
          console.error(e + "不存在");
          return r(null);
        }

        i(n.getSpriteFrame(o.folder + "_" + e));
      });
    });
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

  return __decorate([v], e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yODc0OS5qcyJdLCJuYW1lcyI6WyJpIiwiZXhwb3J0cyIsIkJveFN0YXRlIiwibCIsIiRicmFpbkxldmVsQmFzZSIsInJlcXVpcmUiLCIkbGV2ZWxDb25zdGFudCIsIiRsZXZlbFJldml2ZUhlbHBlciIsIiRsZXZlbFV0aWwiLCIkcG9vbE1nciIsIiRsZXZlbF8yODc0OV90cmFuc3BvcnQiLCJmIiwiY2MiLCJfZGVjb3JhdG9yIiwidiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInQiLCJub25lIiwiaW5pdCIsIndhaXRUb3VjaCIsImNoZWNrV2luIiwicHJvcF9jbGVhciIsInByb3Bfc29ydCIsIm92ZXIiLCJ5IiwiQyIsIl8iLCJTIiwiTm9uZSIsIkVtcHR5IiwiT2NjdXB5IiwiT2NjdXB5QW5pbWF0aW9uIiwiRmluaXNoQW5pbWF0aW9uIiwiRmluaXNoIiwiSWRsZSIsIldhaXRDbGljayIsIldhaXQiLCJCb3giLCJBbmltYXRpb24iLCJTdWMiLCJMb2NrIiwiayIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9zdGF0ZSIsIm1faGllcmFyY2h5IiwiU3ltYm9sIiwibV9pbmRleCIsIm1fcG9zSW5kZXgiLCJtX2lkIiwibVR3ZWVuIiwibV9zdGF0ZSIsIm1TdGFydFBvcyIsIm1fb2NjdXB5IiwibV9pdGVtcyIsIm1fd2FpdCIsIm1fYmxvY2siLCJlZmZlY3RMYXllciIsImdyaWRMYXllciIsIml0ZW1MYXllciIsInByb3BMYXllciIsInByZXMiLCJpc0RlYnVnIiwiYmciLCJncmlkX2JnIiwibm9kZURpY3QiLCJjb250YWluZXIiLCJsYWJQcm9ncmVzcyIsInByZV9ib3giLCJpbWFnZSIsIndhaXRMYXllciIsImJveExheWVyIiwiYm94U3BpbmUiLCJ3YWl0TGlzdCIsIml0ZW1GaXJzdFBvcyIsInNoYWRvd0xheWVyIiwicHJlX2l0ZW0iLCJ0aW1lIiwiY2xlYXJBbW91bnQiLCJsYXN0R29vZCIsImd1aWRlTm9kZXMiLCJjdXJyZW50R3VpZGVOb2RlIiwiZ3VpZGVUZXh0IiwiZ3VpZGVkTm9kZXMiLCJ0eXBlcyIsImxldmVsVG90YWwiLCJsZXZlbF9jb25maWciLCJib3hEYXRhT2JqZWN0cyIsIml0ZW1Qb3NMaXN0IiwiZ3VpZGVMZXZlbENvbG9yIiwiYm94TWFwIiwiTWFwIiwiYm94UXVldWUiLCJib3hUeXBlR3JvdXAiLCJfY2FuVG91Y2giLCJuZXh0TmVlZEFkZDJJbmRleCIsIm5leHROZWVkQWRkMiIsIm1heEJsb2NrSW5kZXgiLCJpc0NoZWNrIiwiZHJpbmtBcnIiLCJpdGVtUXVldWUiLCJub0Ftb3VudCIsImNsZWFyTnVtIiwicG9vbE1nciIsIm5leHROZWVkQWRkX25ldyIsImlzUmV2aXZpbmciLCJuZXh0TmVlZEFkZCIsIl9fZXh0ZW5kcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwiZ2V0Iiwic2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByaW50RGF0YSIsImRpY3QiLCJjaGlsZHJlbiIsIm1hcCIsInB1c2giLCJ4IiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYW5nZUJnIiwiX19hd2FpdGVyIiwiX19nZW5lcmF0b3IiLCJnYW1lIiwiY3VycmVudExldmVsIiwiY29uc29sZSIsImZpbmQiLCJub2RlIiwibmFtZSIsImFjdGl2ZSIsIm8iLCJjcmVhdGVTcGluZSIsImdldENoaWxkQnlOYW1lIiwiTm9kZSIsImFkZENoaWxkIiwiYWRkQ29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsImdldENvbXBvbmVudCIsInByZW11bHRpcGxpZWRBbHBoYSIsInN0YXJ0Q2xlYXJUaW1lciIsInVuc2NoZWR1bGUiLCJ0aW1lciIsInNjaGVkdWxlT25jZSIsImluc3RhbnRpYXRlIiwiZ29vZCIsImRlc3Ryb3kiLCJzZXRBbmltYXRpb24iLCJwb3NpdGlvbiIsInYyIiwiY3JlYXRlU3ByaXRlIiwiZm9sZGVyIiwiU3ByaXRlIiwib25Mb2FkIiwiY2FsbCIsImluaXRMZXZlbCIsInByb3BfY2xlYXJfYm94IiwiY3dOb2RlIiwib3BhY2l0eSIsInNoYWRvdyIsIkxhYmVsIiwidmlldyIsImdldEZyYW1lU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNwb3J0QmciLCJ0cmFuc3BvcnRMYXllciIsImluaXREYXRhIiwiaW5pdEdyaWRMYXllciIsImluaXRXYWl0TGF5ZXIiLCJpbml0Qm94TGF5ZXIiLCJpbml0SXRlbUxheWVyIiwiaW5pdEV2ZW50IiwiaW5pdFBvb2wiLCJpbml0UHJvZ3Jlc3MiLCJNYXNrIiwiZW5hYmxlZCIsImhhbmRQb3MiLCJwYXJlbnQiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJpbmRleE9mIiwiaGFuZFRleHQiLCJzdHJpbmciLCJoYW5kIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJkZWVwQ29weSIsImxldmVsSlNPTiIsImpzb24iLCJsZXZlbElEIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlzaGVyWWF0ZXNTaHVmZmxlIiwiYm94X2NvbmZpZ19lZGl0b3IiLCJzcGxpdCIsImZvckVhY2giLCJoaWVyYXJjaHkiLCJOdW1iZXIiLCJpbmRleCIsInJldmVyc2UiLCJ0cmFuc3BvcnQiLCJib3hDb25maWciLCJibG9ja1dlaWdodCIsIndhaXRXZWlnaHQiLCJxdWV1ZVdlaWdodCIsImxpbWl0UmFuayIsImxhc3RUeXBlV2VpZ2h0IiwiQSIsInNodWZmbGVBcnJheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNyZWF0ZUJveCIsInIiLCJuIiwiYSIsImZpbmRJbmRleCIsInMiLCJjIiwiZ2V0UmFuZG9tVmFsdWVJbkFycmF5IiwiaCIsInNldEJveERhdGEiLCJnZXRCb3hPY2N1cHlQb3MiLCJwIiwiZ2V0UmFuZG9tSW50ZWdlciIsImQiLCJnIiwidXBkYXRlQm94U3RhdGUiLCJwbGF5SXRlbXNJbiIsImFkZFNoYWRvdyIsInNjYWxlIiwic2hhZG93X3RhcmdldCIsIm1fZm9sbG93X3ZlYyIsInN1YiIsInpJbmRleCIsImNvdmVyIiwidGVzdExheWVyIiwiX19zcHJlYWRBcnJheXMiLCJmaWx0ZXIiLCJpc1RyYW5zcG9ydEJveCIsInNvcnQiLCJ3aW5TaXplIiwidHdlZW4iLCJkZWxheSIsInRvIiwiYnkiLCJpc01vdmUiLCJzdGFydCIsImdldEJveENsb3NlU0ZOYW1lIiwiU3RyaW5nIiwiZ2V0Qm94T3BlblNGTmFtZSIsImdldEJveEFuaW1JZCIsImJveFByZWZhYiIsInNldEJveEluZGV4Iiwic2V0Qm94U1AiLCJzcHJpdGVGcmFtZSIsImJveEF0bGFzIiwiZ2V0U3ByaXRlRnJhbWUiLCJsb2FkU3ByaXRlRnJhbWUiLCJpbmNsdWRlcyIsImdldEJveEJvdW5kaW5nQm94IiwiaW50ZXJzZWN0cyIsImNvbG9yIiwiQ29sb3IiLCJXSElURSIsImZyb21IRVgiLCJnZXRCb3VuZGluZ0JveFRvV29ybGQiLCJyZWN0Iiwic2V0Qm94VG9XYWl0IiwiYWRkVG9BcnJheSIsImJveEZseSIsImNoZWNrQm94VGFrZUl0ZW0iLCJjaGVja0lzRmFpbCIsImZseVN1YyIsImdldEl0ZW1EYXRhIiwiaXRlbSIsImluRmlyc3RQb3MiLCJkZWxldGVGcm9tQXJyYXkiLCJzZXRJdGVtVG9Cb3giLCJpdGVtU3VwcGx5IiwidXBkYXRlSXRlbVF1ZXVlIiwibWFnIiwiY2xlYXJCb3giLCJjaGlsZHJlbkNvdW50IiwicHV0SXRlbVRvUG9vbCIsInNldFNraW4iLCJ0aW1lU2NhbGUiLCJwbGF5U3BpbmVDYWxsQmFjayIsInBsYXlMZXZlbFNvdW5kIiwicGxheUVmZmVjdCIsInNldENsZWFyTnVtIiwiaXNDbGVhckJveCIsImd1YW5ncXVhbiIsImNvbnZlcnRQb3NpdGlvbiIsInJlbW92ZUZyb21QYXJlbnQiLCJib3hTaGFkb3cyIiwiYm94U2hhZG93MSIsImJveFNoYWRvdzAiLCJnZXRCb3hUeXBlQnlOYW1lIiwiYm94SXNFbXB0eSIsImdldEJveEdyb3VwIiwiZmlsdGVyQm94VHlwZUdyb3VwQXJyIiwic2hpZnQiLCJmaWxsIiwiZ2V0SXRlbVR5cGUiLCJ0eXBlIiwibnVtIiwiY3JlYXRlSXRlbSIsInN0YXRlIiwic3RvcEFsbEFjdGlvbnMiLCJzdG9wIiwiaXRlbU1vdmUiLCJzZXRJdGVtSW5kZXgiLCJ1IiwiYWRkIiwibV9zaGFkb3ciLCJiZXppZXJUbyIsImRyaW5rQXRsYXMiLCJjaGFuZ2VQYXJlbnQiLCJnZXRXZWlnaHQiLCJtaW4iLCJjaGVja0hhc0l0ZW1CeUNvbG9yIiwiYWRkU2VsZiIsInNldFBvc2l0aW9uIiwibV9mb2xsb3ciLCJtX2ZvbGxvd193VmVjIiwib25DbGlja0V2ZW50IiwiZW1pdCIsIkxFVkVMX0VWRU5UIiwiUkVXQVJEVklERU8iLCJ1bmxvY2tXYWl0Iiwiamllc3VvIiwiZnVuY19jaGVja191bmxvY2tXYWl0IiwiZnVuY191bmxvY2tXYWl0IiwiZ2V0V2FpdCIsImZhaWwiLCJ1cGRhdGUiLCJ1cGRhdGVTaGFkb3ciLCJpbml0R3VpZGVuY2UiLCJzeiIsInVuaW9uIiwicmVwZWF0Rm9yZXZlciIsInVwZGF0ZUd1aWRlbmNlIiwiZ2V0VG91Y2hOb2RlIiwiY29udGFpbnMiLCJydW5BY3Rpb24iLCJzaGFja0FjdGlvbiIsInRvdWNoRXZlbnQiLCJ0b3VjaE5vZGUiLCJzRnVuYyIsInBsYXlDbGlja1NvdW5kIiwiZ2V0TG9jYXRpb24iLCJyZWR1Y2VDYXJBbW91bnQiLCJzZXRCb3hUb1Byb3BDbGVhciIsIm1GdW5jIiwiZUZ1bmMiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsImVudGVyS2V5SW5wdXQiLCJ1cGRhdGVQcm9ncmVzcyIsInRvRml4ZWQiLCJ0b3RhbEFtb3VudCIsInJlbWFpbmluZ0Ftb3VudCIsInNvbWUiLCJzdWMiLCJvbkxldmVsUmVhZHkiLCJtb3ZlQnkiLCJzZXF1ZW5jZSIsInBsYXlSaWdodCIsImxvc2UiLCJwbGF5RXJyb3IiLCJwbGF5RXJyb3JPbmNlIiwibGV2ZWxGYWlsRXZlbnQiLCJmdW5jX3Jldml2ZSIsImdldFdvcmRQb3MiLCJnZXREaXN0YW5jZSIsInNwbGljZSIsIm9uRGlzYWJsZSIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWREZWJ1Z0RyYXciLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIiwib2ZmIiwicHV0IiwiZnVuY19jaG9vc2VDbGVhciIsImdldEJveFJlbWFpbk51bSIsImdldEJveFRvdGFsTnVtIiwibSIsImZ1bmNfc29ydCIsIm5ld1Jldml2ZUFuaW0iLCJjbGVhciIsInNldFN1cnBsdXNDb2xvciIsImdldFN1cnBsdXNDb2xvciIsInN0YXJTcGluZSIsInNjaGVkdWxlIiwiZ2V0UmFuZG9tSW50Iiwic2V0Q29sb3JJdGVtSW1nX3Jldml2ZSIsImNvbmNhdCIsInJldml2ZUFuaW0iLCJnZXRTcHJpdGVGcmFtZUJ5QXRsYXMiLCJQcm9taXNlIiwicmVzb3VyY2VzIiwibG9hZCIsIlNwcml0ZUF0bGFzIiwiZXJyb3IiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJfX2RlY29yYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsT0FBTyxDQUFDQyxRQUFSLEdBQW1CLEtBQUssQ0FBeEI7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLGVBQWUsR0FBR0MsT0FBTyxDQUFDLGtCQUFELENBQTdCOztBQUNBLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlFLGtCQUFrQixHQUFHRixPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJSSxRQUFRLEdBQUdKLE9BQU8sQ0FBQyxXQUFELENBQXRCOztBQUNBLElBQUlLLHNCQUFzQixHQUFHTCxPQUFPLENBQUMseUJBQUQsQ0FBcEM7O0FBQ0EsSUFBSU0sQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBSixDQUFD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QUFFLENBQUMsRUFEUjtFQUVJakcsQ0FBQyxFQUFFO0FBRlAsQ0E3REksRUFpRUo7RUFDSWlHLENBQUMsRUFBRSxDQURQO0VBRUlqRyxDQUFDLEVBQUU7QUFGUCxDQWpFSSxFQXFFSjtFQUNJaUcsQ0FBQyxFQUFFLEVBRFA7RUFFSWpHLENBQUMsRUFBRTtBQUZQLENBckVJLEVBeUVKO0VBQ0lpRyxDQUFDLEVBQUUsR0FEUDtFQUVJakcsQ0FBQyxFQUFFO0FBRlAsQ0F6RUksRUE2RUo7RUFDSWlHLENBQUMsRUFBRSxHQURQO0VBRUlqRyxDQUFDLEVBQUU7QUFGUCxDQTdFSSxFQWlGSjtFQUNJaUcsQ0FBQyxFQUFFLEdBRFA7RUFFSWpHLENBQUMsRUFBRTtBQUZQLENBakZJLEVBcUZKO0VBQ0lpRyxDQUFDLEVBQUUsR0FEUDtFQUVJakcsQ0FBQyxFQUFFO0FBRlAsQ0FyRkksRUF5Rko7RUFDSWlHLENBQUMsRUFBRSxHQURQO0VBRUlqRyxDQUFDLEVBQUU7QUFGUCxDQXpGSSxFQTZGSjtFQUNJaUcsQ0FBQyxFQUFFLEdBRFA7RUFFSWpHLENBQUMsRUFBRTtBQUZQLENBN0ZJLEVBaUdKO0VBQ0lpRyxDQUFDLEVBQUUsR0FEUDtFQUVJakcsQ0FBQyxFQUFFO0FBRlAsQ0FqR0ksRUFxR0o7RUFDSWlHLENBQUMsRUFBRSxFQURQO0VBRUlqRyxDQUFDLEVBQUU7QUFGUCxDQXJHSSxFQXlHSjtFQUNJaUcsQ0FBQyxFQUFFLENBRFA7RUFFSWpHLENBQUMsRUFBRTtBQUZQLENBekdJLEVBNkdKO0VBQ0lpRyxDQUFDLEVBQUUsQ0FEUDtFQUVJakcsQ0FBQyxFQUFFO0FBRlAsQ0E3R0ksQ0FBUiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG5leHBvcnRzLkJveFN0YXRlID0gdm9pZCAwO1xudmFyIGw7XG52YXIgJGJyYWluTGV2ZWxCYXNlID0gcmVxdWlyZShcIi4vQnJhaW5MZXZlbEJhc2VcIik7XG52YXIgJGxldmVsQ29uc3RhbnQgPSByZXF1aXJlKFwiLi9MZXZlbENvbnN0YW50XCIpO1xudmFyICRsZXZlbFJldml2ZUhlbHBlciA9IHJlcXVpcmUoXCIuL2xldmVsUmV2aXZlSGVscGVyXCIpO1xudmFyICRsZXZlbFV0aWwgPSByZXF1aXJlKFwiLi9MZXZlbFV0aWxcIik7XG52YXIgJHBvb2xNZ3IgPSByZXF1aXJlKFwiLi9Qb29sTWdyXCIpO1xudmFyICRsZXZlbF8yODc0OV90cmFuc3BvcnQgPSByZXF1aXJlKFwiLi9MZXZlbC0yODc0OV90cmFuc3BvcnRcIik7XG52YXIgZiA9IGNjLl9kZWNvcmF0b3I7XG52YXIgdiA9IGYuY2NjbGFzcztcbmYucHJvcGVydHk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgICB0Wyh0Lm5vbmUgPSAwKV0gPSBcIm5vbmVcIjtcbiAgICB0Wyh0LmluaXQgPSAxKV0gPSBcImluaXRcIjtcbiAgICB0Wyh0LndhaXRUb3VjaCA9IDIpXSA9IFwid2FpdFRvdWNoXCI7XG4gICAgdFsodC5jaGVja1dpbiA9IDMpXSA9IFwiY2hlY2tXaW5cIjtcbiAgICB0Wyh0LnByb3BfY2xlYXIgPSA0KV0gPSBcInByb3BfY2xlYXJcIjtcbiAgICB0Wyh0LnByb3Bfc29ydCA9IDUpXSA9IFwicHJvcF9zb3J0XCI7XG4gICAgdFsodC5vdmVyID0gNildID0gXCJvdmVyXCI7XG59KShsIHx8IChsID0ge30pKTtcbnZhciB5O1xudmFyIEM7XG52YXIgXztcbnZhciBTID0ge1xuICAgIFwiMi0yXCI6IFtcbiAgICAgICAgWy0xNSwgMjRdLFxuICAgICAgICBbMTQsIDI0XSxcbiAgICAgICAgWy0xNSwgLTZdLFxuICAgICAgICBbMTQsIC02XVxuICAgIF0sXG4gICAgXCIzLTJcIjogW1xuICAgICAgICBbLTE0LjUsIDM5XSxcbiAgICAgICAgWzE1LCAzOV0sXG4gICAgICAgIFstMTQuNSwgOV0sXG4gICAgICAgIFsxNSwgOV0sXG4gICAgICAgIFstMTQuNSwgLTIxXSxcbiAgICAgICAgWzE1LCAtMjFdXG4gICAgXSxcbiAgICBcIjQtMlwiOiBbXG4gICAgICAgIFstMTUsIDU0XSxcbiAgICAgICAgWzEzLCA1NF0sXG4gICAgICAgIFstMTUsIDI0XSxcbiAgICAgICAgWzEzLCAyNF0sXG4gICAgICAgIFstMTUsIC01LjVdLFxuICAgICAgICBbMTMsIC01LjVdLFxuICAgICAgICBbLTE1LCAtMzQuNV0sXG4gICAgICAgIFsxMywgLTM0LjVdXG4gICAgXVxufTtcbihmdW5jdGlvbiAodCkge1xuICAgIHRbKHQuTm9uZSA9IDApXSA9IFwiTm9uZVwiO1xuICAgIHRbKHQuRW1wdHkgPSAxKV0gPSBcIkVtcHR5XCI7XG4gICAgdFsodC5PY2N1cHkgPSAyKV0gPSBcIk9jY3VweVwiO1xuICAgIHRbKHQuT2NjdXB5QW5pbWF0aW9uID0gMyldID0gXCJPY2N1cHlBbmltYXRpb25cIjtcbiAgICB0Wyh0LkZpbmlzaEFuaW1hdGlvbiA9IDQpXSA9IFwiRmluaXNoQW5pbWF0aW9uXCI7XG4gICAgdFsodC5GaW5pc2ggPSA1KV0gPSBcIkZpbmlzaFwiO1xufSkoKHkgPSBleHBvcnRzLkJveFN0YXRlIHx8IChleHBvcnRzLkJveFN0YXRlID0ge30pKSk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgICB0Wyh0Lk5vbmUgPSAwKV0gPSBcIk5vbmVcIjtcbiAgICB0Wyh0LklkbGUgPSAxKV0gPSBcIklkbGVcIjtcbiAgICB0Wyh0LldhaXRDbGljayA9IDIpXSA9IFwiV2FpdENsaWNrXCI7XG4gICAgdFsodC5XYWl0ID0gMyldID0gXCJXYWl0XCI7XG4gICAgdFsodC5Cb3ggPSA0KV0gPSBcIkJveFwiO1xuICAgIHRbKHQuQW5pbWF0aW9uID0gNSldID0gXCJBbmltYXRpb25cIjtcbiAgICB0Wyh0LlN1YyA9IDYpXSA9IFwiU3VjXCI7XG59KShDIHx8IChDID0ge30pKTtcbihmdW5jdGlvbiAodCkge1xuICAgIHRbKHQuTG9jayA9IDApXSA9IFwiTG9ja1wiO1xuICAgIHRbKHQuRW1wdHkgPSAxKV0gPSBcIkVtcHR5XCI7XG4gICAgdFsodC5PY2N1cHkgPSAyKV0gPSBcIk9jY3VweVwiO1xufSkoXyB8fCAoXyA9IHt9KSk7XG52YXIgayA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLl9zdGF0ZSA9IGwud2FpdFRvdWNoO1xuICAgICAgICBlLm1faGllcmFyY2h5ID0gU3ltYm9sKFwibV9oaWVyYXJjaHlcIik7XG4gICAgICAgIGUubV9pbmRleCA9IFN5bWJvbChcIm1faW5kZXhcIik7XG4gICAgICAgIGUubV9wb3NJbmRleCA9IFN5bWJvbChcIm1fcG9zSW5kZXhcIik7XG4gICAgICAgIGUubV9pZCA9IFN5bWJvbChcIm1faWRcIik7XG4gICAgICAgIGUubVR3ZWVuID0gU3ltYm9sKFwibVR3ZWVuXCIpO1xuICAgICAgICBlLm1fc3RhdGUgPSBTeW1ib2woXCJtX3N0YXRlXCIpO1xuICAgICAgICBlLm1TdGFydFBvcyA9IFN5bWJvbChcIm1TdGFydFBvc1wiKTtcbiAgICAgICAgZS5tX29jY3VweSA9IFN5bWJvbChcIm1fb2NjdXB5XCIpO1xuICAgICAgICBlLm1faXRlbXMgPSBTeW1ib2woXCJtX2l0ZW1zXCIpO1xuICAgICAgICBlLm1fd2FpdCA9IFN5bWJvbChcIm1fd2FpdFwiKTtcbiAgICAgICAgZS5tX2Jsb2NrID0gU3ltYm9sKFwibV9ibG9ja1wiKTtcbiAgICAgICAgZS5lZmZlY3RMYXllciA9IG51bGw7XG4gICAgICAgIGUuZ3JpZExheWVyID0gbnVsbDtcbiAgICAgICAgZS5pdGVtTGF5ZXIgPSBudWxsO1xuICAgICAgICBlLnByb3BMYXllciA9IG51bGw7XG4gICAgICAgIGUucHJlcyA9IG51bGw7XG4gICAgICAgIGUuaXNEZWJ1ZyA9ICExO1xuICAgICAgICBlLmJnID0gbnVsbDtcbiAgICAgICAgZS5ncmlkX2JnID0gbnVsbDtcbiAgICAgICAgZS5ub2RlRGljdCA9IHt9O1xuICAgICAgICBlLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIGUubGFiUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICBlLnByZV9ib3ggPSBudWxsO1xuICAgICAgICBlLmltYWdlID0gbnVsbDtcbiAgICAgICAgZS53YWl0TGF5ZXIgPSBudWxsO1xuICAgICAgICBlLmJveExheWVyID0gbnVsbDtcbiAgICAgICAgZS5ib3hTcGluZSA9IG51bGw7XG4gICAgICAgIGUud2FpdExpc3QgPSBbXTtcbiAgICAgICAgZS5pdGVtRmlyc3RQb3MgPSBudWxsO1xuICAgICAgICBlLnNoYWRvd0xheWVyID0gbnVsbDtcbiAgICAgICAgZS5wcmVfaXRlbSA9IG51bGw7XG4gICAgICAgIGUudGltZSA9IDEuNTtcbiAgICAgICAgZS5jbGVhckFtb3VudCA9IDA7XG4gICAgICAgIGUubGFzdEdvb2QgPSBudWxsO1xuICAgICAgICBlLmd1aWRlTm9kZXMgPSBbXTtcbiAgICAgICAgZS5jdXJyZW50R3VpZGVOb2RlID0gbnVsbDtcbiAgICAgICAgZS5ndWlkZVRleHQgPSBbXG4gICAgICAgICAgICBcIueCueWHu+ebkuWtkOWPr+S4iuWOu+ijheWvueW6lOminOiJsueahOmlruaWmVwiLFxuICAgICAgICAgICAgXCLlpKfnm5LlrZDlj6/ku6Xoo4U45p2v6aWu5paZXCIsXG4gICAgICAgICAgICBcIuS4reebkuWtkOWPr+S7peijhTbmna/ppa7mlplcIixcbiAgICAgICAgICAgIFwi5bCP55uS5a2Q5Y+v5Lul6KOFNOadr+mlruaWmVwiXG4gICAgICAgIF07XG4gICAgICAgIGUuZ3VpZGVkTm9kZXMgPSBbXTtcbiAgICAgICAgZS50eXBlcyA9IFtdO1xuICAgICAgICBlLmxldmVsVG90YWwgPSAwO1xuICAgICAgICBlLmxldmVsX2NvbmZpZyA9IG51bGw7XG4gICAgICAgIGUuYm94RGF0YU9iamVjdHMgPSBbXTtcbiAgICAgICAgZS5pdGVtUG9zTGlzdCA9IFtdO1xuICAgICAgICBlLmd1aWRlTGV2ZWxDb2xvciA9IFs2LCAxLCA0LCA4XTtcbiAgICAgICAgZS5ib3hNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGUuYm94UXVldWUgPSBbXTtcbiAgICAgICAgZS5ib3hUeXBlR3JvdXAgPSB7fTtcbiAgICAgICAgZS5fY2FuVG91Y2ggPSAhMTtcbiAgICAgICAgZS5uZXh0TmVlZEFkZDJJbmRleCA9IDA7XG4gICAgICAgIGUubmV4dE5lZWRBZGQyID0gW107XG4gICAgICAgIGUubWF4QmxvY2tJbmRleCA9IDE7XG4gICAgICAgIGUuaXNDaGVjayA9ICExO1xuICAgICAgICBlLmRyaW5rQXJyID0gW107XG4gICAgICAgIGUuaXRlbVF1ZXVlID0gW107XG4gICAgICAgIGUubm9BbW91bnQgPSBbXTtcbiAgICAgICAgZS5jbGVhck51bSA9IDA7XG4gICAgICAgIGUucG9vbE1nciA9IG5ldyAkcG9vbE1nci5kZWZhdWx0KCk7XG4gICAgICAgIGUubmV4dE5lZWRBZGRfbmV3ID0gW107XG4gICAgICAgIGUuaXNSZXZpdmluZyA9ICExO1xuICAgICAgICBlLm5leHROZWVkQWRkID0gW107XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICB9KTtcbiAgICBlLnByb3RvdHlwZS5wcmludERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gW107XG4gICAgICAgIHRoaXMuZGljdC5ncmlkTGF5ZXIuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0LnB1c2goe1xuICAgICAgICAgICAgICAgIHg6IGUueCxcbiAgICAgICAgICAgICAgICB5OiBlLnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9nKEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYW5nZUJnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHQgPSBnYW1lLmN1cnJlbnRMZXZlbCB8fCAxKSA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ICU9IDQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rWL6K+V5L+u5pS56IOM5pmvXCIsIHQsIGdhbWUuY3VycmVudExldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPj0gMzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi57Sr6ImyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcImdhbWUvYmcvOFwiLCB0aGlzLm5vZGUpLm5hbWUgPSBcIjMtMVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGUgPSBjYy5maW5kKFwiZ2FtZS9jb250YWluZXIvNz1jb3ZlclwiLCB0aGlzLm5vZGUpKS5uYW1lID0gXCIzLTI9Y292ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+PSAyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rW36L65XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2MuZmluZChcImdhbWUvYmcvOFwiLCB0aGlzLm5vZGUpLm5hbWUgPSBcIjItMVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChlID0gY2MuZmluZChcImdhbWUvY29udGFpbmVyLzc9Y292ZXJcIiwgdGhpcy5ub2RlKSkubmFtZSA9IFwiMi0yPWNvdmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZS55IC09IDEyNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA+PSAxMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uc29sZS5sb2coXCLmnaHnurlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYy5maW5kKFwiZ2FtZS9iZy84XCIsIHRoaXMubm9kZSkubmFtZSA9IFwiMS0xXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGUgPSBjYy5maW5kKFwiZ2FtZS9jb250YWluZXIvNz1jb3ZlclwiLCB0aGlzLm5vZGUpKS5uYW1lID0gXCIxLTI9Y292ZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICExKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG8pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY3JlYXRlU3BpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIGlmICghdC5nZXRDaGlsZEJ5TmFtZShlKSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gbmV3IGNjLk5vZGUoZSk7XG4gICAgICAgICAgICAgICAgdC5hZGRDaGlsZChvKTtcbiAgICAgICAgICAgICAgICBvLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnByZW11bHRpcGxpZWRBbHBoYSA9ICExO1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZSA9IGNjLmZpbmQoXCJnYW1lL2ltYWdlXCIsIHRoaXMubm9kZSk7XG4gICAgICAgIHQoZSwgXCJnb29kXCIpO1xuICAgICAgICB0KGUsIFwiamllc3VvXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3RhcnRDbGVhclRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyQW1vdW50ICs9IDE7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy50aW1lciwgdGhpcy50aW1lKTtcbiAgICAgICAgdmFyIHQgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5jbGVhckFtb3VudCA+PSA1KSB7XG4gICAgICAgICAgICB0ID0gXCJhbmltYXRpb24zXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhckFtb3VudCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgdCA9IFwiYW5pbWF0aW9uMlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGVhckFtb3VudCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBcImFuaW1hdGlvbjFcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQW1vdW50ID49IDIgJiYgKHQgPSBcImFuaW1hdGlvbjBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIua1i+ivleaViOaenFwiKTtcbiAgICAgICAgICAgIHZhciBlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0Lmdvb2QpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZVwiKS5hZGRDaGlsZChlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RHb29kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0R29vZC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3RHb29kID0gZTtcbiAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdCwgITEpO1xuICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgICAgICBlLnkgPSAxMDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyQW1vdW50ID0gMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZVNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2xkZXIgPSBcImYyODc0OVwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIGlmICghdC5nZXRDaGlsZEJ5TmFtZShlKSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gbmV3IGNjLk5vZGUoZSk7XG4gICAgICAgICAgICAgICAgdC5hZGRDaGlsZChvKTtcbiAgICAgICAgICAgICAgICBvLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZSA9IChjYy5maW5kKFwiZ2FtZS9pbWFnZVwiLCB0aGlzLm5vZGUpLCBjYy5maW5kKFwiZ2FtZS9wcmVzXCIsIHRoaXMubm9kZSkpO1xuICAgICAgICB0KGUsIFwiMjA9Ym94U2hhZG93MFwiKTtcbiAgICAgICAgdChlLCBcIjIxPWJveFNoYWRvdzFcIik7XG4gICAgICAgIHQoZSwgXCIyMj1ib3hTaGFkb3cyXCIpO1xuICAgICAgICB0KGUsIFwiMjg9Ym94U2hhZG93XzBcIik7XG4gICAgICAgIHQoZSwgXCIyOT1ib3hTaGFkb3dfMVwiKTtcbiAgICAgICAgdChlLCBcIjMwPWJveFNoYWRvd18yXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVNwcml0ZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNwaW5lKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQmcoKTtcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaW5pdExldmVsKCk7XG4gICAgICAgIHRoaXMuZGljdC5nYW1lLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLmRpY3QucHJvcF9jbGVhcl9ib3gueCA9IC04OC4yMzY7XG4gICAgICAgIHRoaXMuZGljdFs5XS54ID0gMDtcbiAgICAgICAgdGhpcy5jd05vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuZGljdC5zaGFkb3cub3BhY2l0eSA9IDE1MDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMuZGljdC5iZztcbiAgICAgICAgdGhpcy5pdGVtTGF5ZXIgPSB0aGlzLmRpY3QuaXRlbUxheWVyO1xuICAgICAgICB0aGlzLmVmZmVjdExheWVyID0gdGhpcy5kaWN0LmVmZmVjdExheWVyO1xuICAgICAgICB0aGlzLmdyaWRMYXllciA9IHRoaXMuZGljdC5ncmlkTGF5ZXI7XG4gICAgICAgIHRoaXMubGFiUHJvZ3Jlc3MgPSB0aGlzLmRpY3QubGFiUHJvZ3Jlc3MuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuZGljdC5pbWFnZTtcbiAgICAgICAgdGhpcy53YWl0TGF5ZXIgPSB0aGlzLmRpY3Qud2FpdExheWVyO1xuICAgICAgICB0aGlzLmJveExheWVyID0gdGhpcy5kaWN0LmJveExheWVyO1xuICAgICAgICB0aGlzLmJveFNwaW5lID0gdGhpcy5kaWN0LmJveFNwaW5lO1xuICAgICAgICB0aGlzLnByZV9pdGVtID0gdGhpcy5kaWN0LnByZV9pdGVtO1xuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC41KSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYm94TGF5ZXIueSAtPSA0MDtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpY3QudHJhbnNwb3J0QmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudHJhbnNwb3J0QmcueSAtPSA4MDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudHJhbnNwb3J0TGF5ZXIueSAtPSA4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoYWRvd0xheWVyID0gdGhpcy5kaWN0LnNoYWRvd0xheWVyO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xuICAgICAgICB0aGlzLmluaXRHcmlkTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5pbml0V2FpdExheWVyKCk7XG4gICAgICAgIHRoaXMuaW5pdEJveExheWVyKCk7XG4gICAgICAgIHRoaXMuaW5pdEl0ZW1MYXllcigpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICB0aGlzLmluaXRQb29sKCk7XG4gICAgICAgIHRoaXMuaW5pdFByb2dyZXNzKCk7XG4gICAgICAgIHRoaXMuZGljdC5nYW1lLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmRpY3QuZ2FtZS5nZXRDb21wb25lbnQoY2MuTWFzaykuZW5hYmxlZCA9ICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGFuZFBvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmN1cnJlbnRHdWlkZU5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmN1cnJlbnRHdWlkZU5vZGUucG9zaXRpb24pO1xuICAgICAgICB2YXIgZSA9IHRoaXMuZ3VpZGVOb2Rlcy5pbmRleE9mKHRoaXMuY3VycmVudEd1aWRlTm9kZSk7XG4gICAgICAgIHRoaXMuZGljdC5oYW5kVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZ3VpZGVUZXh0W2VdO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZGljdC5oYW5kLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KTtcbiAgICAgICAgdGhpcy5kaWN0LmhhbmQucG9zaXRpb24gPSBvO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSAkbGV2ZWxVdGlsLmRlZmF1bHQuZGVlcENvcHkodGhpcy5sZXZlbEpTT04uanNvblt0aGlzLmxldmVsSURdKTtcbiAgICAgICAgdGhpcy5sZXZlbF9jb25maWcgPSBlO1xuICAgICAgICB0aGlzLnR5cGVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgJGxldmVsVXRpbC5kZWZhdWx0LmZpc2hlcllhdGVzU2h1ZmZsZSh0aGlzLnR5cGVzKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gZS5ib3hfY29uZmlnX2VkaXRvcjtcbiAgICAgICAgICAgICRsZXZlbFV0aWwuZGVmYXVsdFxuICAgICAgICAgICAgICAgIC5kZWVwQ29weShvKVxuICAgICAgICAgICAgICAgIC5zcGxpdChcIipcIilbMV1cbiAgICAgICAgICAgICAgICAuc3BsaXQoXCIjXCIpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBlLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGllcmFyY2h5OiBOdW1iZXIob1sxXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogTnVtYmVyKG9bMl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogTnVtYmVyKG9bM10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogTnVtYmVyKG9bNF0pXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHQuYm94RGF0YU9iamVjdHMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYm94RGF0YU9iamVjdHMucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsX2NvbmZpZyAmJiB0aGlzLmxldmVsX2NvbmZpZy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC50cmFuc3BvcnRMYXllclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoJGxldmVsXzI4NzQ5X3RyYW5zcG9ydC5kZWZhdWx0KVxuICAgICAgICAgICAgICAgIC5pbml0KHRoaXMsIHRoaXMubGV2ZWxfY29uZmlnLnRyYW5zcG9ydCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC0yODgwNyA9PSB0aGlzLmxldmVsSUQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGJveENvbmZpZzogW1xuICAgICAgICAgICAgICAgICAgICBbMjUsIFsxLCA0XV0sXG4gICAgICAgICAgICAgICAgICAgIFsxMDAsIFsxLCA2XV1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGJsb2NrV2VpZ2h0OiBbNTAsIDEwLCAxXSxcbiAgICAgICAgICAgICAgICB3YWl0V2VpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICBxdWV1ZVdlaWdodDogMTAsXG4gICAgICAgICAgICAgICAgbGltaXRSYW5rOiA0LFxuICAgICAgICAgICAgICAgIGxhc3RUeXBlV2VpZ2h0OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ib3hEYXRhT2JqZWN0cyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMy0yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgaGllcmFyY2h5OiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgeDogLTUwLjcyMSxcbiAgICAgICAgICAgICAgICAgICAgeTogMTEyLjAwOVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjItMi0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeTogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgICAgIHg6IDc0Ljc5NixcbiAgICAgICAgICAgICAgICAgICAgeTogMTEyLjAwOVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjQtMlwiLFxuICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAyLFxuICAgICAgICAgICAgICAgICAgICB4OiAtNzUuNDA0LFxuICAgICAgICAgICAgICAgICAgICB5OiAtMzcuNDI0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeTogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDMsXG4gICAgICAgICAgICAgICAgICAgIHg6IDc1LjEsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0zOS45ODFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm94RGF0YU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBlLmhpZXJhcmNoeTtcbiAgICAgICAgICAgIGlmICh0LmJveE1hcC5nZXQobykpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0LmJveE1hcC5zZXQobywgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgQS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0Lml0ZW1Qb3NMaXN0LnB1c2goY2MudjIoZS54LCBlLnkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbVBvc0xpc3QucmV2ZXJzZSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGZvciAodmFyIG8gPSB0Lmxlbmd0aCAtIDE7IG8gPiAwOyBvLS0pIHtcbiAgICAgICAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG8gKyAxKSk7XG4gICAgICAgICAgICBlID0gW3RbaV0sIHRbb11dO1xuICAgICAgICAgICAgdFtvXSA9IGVbMF07XG4gICAgICAgICAgICB0W2ldID0gZVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRCb3hMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmJveERhdGFPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHQuY3JlYXRlQm94KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxfY29uZmlnLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRyYW5zcG9ydExheWVyLmdldENvbXBvbmVudCgkbGV2ZWxfMjg3NDlfdHJhbnNwb3J0LmRlZmF1bHQpLmNyZWF0ZUJveCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpY3QuaGFuZCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmJveExheWVyO1xuICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGVzLnB1c2goZS5jaGlsZHJlblszXSk7XG4gICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaChlLmNoaWxkcmVuWzJdKTtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGVzLnB1c2goZS5jaGlsZHJlblsxXSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHdWlkZU5vZGUgPSB0aGlzLmd1aWRlTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmhhbmRQb3MoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHRoaXMubGV2ZWxfY29uZmlnLmJveENvbmZpZztcbiAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgdGhpcy5ib3hNYXAuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaS5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIHQuYm94UXVldWUucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHIgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogaS5sZW5ndGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHZhciBuID0gci5sZW5ndGg7XG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgICAgIHZhciByID0gby5maW5kSW5kZXgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHRbMF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgPD0gKG4gKiBvKSAvIDEwMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHIgPj0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBvW3JdWzFdLCBzID0gW10sIGMgPSBhWzBdOyBjIDw9IGFbMV07IGMrKykgcy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIHMgPSB0LnNodWZmbGVBcnJheShzKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBsID0gJGxldmVsVXRpbC5kZWZhdWx0LmdldFJhbmRvbVZhbHVlSW5BcnJheShzKTsgbCA9PT0gaTsgKVxuICAgICAgICAgICAgICAgICAgICBsID0gJGxldmVsVXRpbC5kZWZhdWx0LmdldFJhbmRvbVZhbHVlSW5BcnJheShzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHMgPSAtMTtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCByLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gcltjXSkge1xuICAgICAgICAgICAgICAgIHZhciBsID0gYShjLCBzKTtcbiAgICAgICAgICAgICAgICByW2NdID0gbDtcbiAgICAgICAgICAgICAgICBzID0gbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaCA9IHt9O1xuICAgICAgICByLmZvckVhY2goZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgIHZhciByID0gdC50eXBlc1tlIC0gMV07XG4gICAgICAgICAgICB2YXIgbiA9IGlbb107XG4gICAgICAgICAgICBpZiAoLTI4ODA3ID09IHQubGV2ZWxJRCkge1xuICAgICAgICAgICAgICAgIHIgPSB0Lmd1aWRlTGV2ZWxDb2xvcltvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQuc2V0Qm94RGF0YShuLCByKTtcbiAgICAgICAgICAgIHZhciBhID0gdC5nZXRCb3hPY2N1cHlQb3MobikubGVuZ3RoO1xuICAgICAgICAgICAgdC5sZXZlbFRvdGFsICs9IGE7XG4gICAgICAgICAgICBpZiAoaFtyXSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhbcl0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhbcl0ucHVzaChhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZV9udW1BcnI9PT09XCIsIGgpO1xuICAgICAgICBjYy5sb2coXCLppa7mlpnmgLvmlbDvvJpcIiwgdGhpcy5sZXZlbFRvdGFsKTtcbiAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgICAgIGhbZV0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBlOyApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0LmdldFJhbmRvbUludGVnZXIoMSwgZSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHIgKz0gbikgPD0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlIC0gKHIgLT0gbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2goYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnB1c2godCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpID0gTnVtYmVyKGUpO1xuICAgICAgICAgICAgZC5ib3hUeXBlR3JvdXBbaV0gPSBbXTtcbiAgICAgICAgICAgIG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0LmJveFR5cGVHcm91cFtpXS5wdXNoKE51bWJlcihlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGQgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBnIGluIGgpIHAoZyk7XG4gICAgICAgIGlmICgtMjg4MDcgPT0gdGhpcy5sZXZlbElEKSB7XG4gICAgICAgICAgICB0aGlzLm5leHROZWVkQWRkMiA9IFs4LCA0LCA2LCAxLCA4LCA0LCA2LCAxLCA4LCA0XTtcbiAgICAgICAgICAgIHRoaXMuYm94VHlwZUdyb3VwID0ge1xuICAgICAgICAgICAgICAgIDE6IFsxLCAzXSxcbiAgICAgICAgICAgICAgICA0OiBbMiwgNCwgMl0sXG4gICAgICAgICAgICAgICAgNjogWzMsIDNdLFxuICAgICAgICAgICAgICAgIDg6IFs0LCAyLCAyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUJveFN0YXRlKCk7XG4gICAgICAgIHRoaXMucGxheUl0ZW1zSW4oKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZFNoYWRvdyA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbWFnZVwiLCB0aGlzLmltYWdlKTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmltYWdlLmdldENoaWxkQnlOYW1lKGUpO1xuICAgICAgICB2YXIgciA9IGNjLmluc3RhbnRpYXRlKGkpO1xuICAgICAgICByLm5hbWUgPSBcInNoYWRvd1wiO1xuICAgICAgICByLmFjdGl2ZSA9ICEwO1xuICAgICAgICByLnBhcmVudCA9IHRoaXMuc2hhZG93TGF5ZXI7XG4gICAgICAgIHZhciBuID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobyk7XG4gICAgICAgIHIucG9zaXRpb24gPSByLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuKTtcbiAgICAgICAgci5zY2FsZSA9IHQuc2NhbGU7XG4gICAgICAgIHIuc2hhZG93X3RhcmdldCA9IHQ7XG4gICAgICAgIHQuc2hhZG93X3RhcmdldCA9IHI7XG4gICAgICAgIHZhciBhID0gdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHQucG9zaXRpb24pO1xuICAgICAgICByLm1fZm9sbG93X3ZlYyA9IGEuc3ViKG4pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUl0ZW1zSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5ib3hMYXllci56SW5kZXggPSAxMDE7XG4gICAgICAgIHRoaXMuaXRlbUxheWVyLnpJbmRleCA9IDEwMDtcbiAgICAgICAgdGhpcy5kaWN0LmNvdmVyLnpJbmRleCA9IDEwMjtcbiAgICAgICAgdGhpcy5kaWN0LnRlc3RMYXllci56SW5kZXggPSAxMDM7XG4gICAgICAgIHRoaXMuZWZmZWN0TGF5ZXIuekluZGV4ID0gMTA0O1xuICAgICAgICBpZiAodGhpcy5kaWN0LnRyYW5zcG9ydExheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QudHJhbnNwb3J0QmcuekluZGV4ID0gOTk7XG4gICAgICAgICAgICB0aGlzLmJveExheWVyLnpJbmRleCA9IDEwMTtcbiAgICAgICAgICAgIHRoaXMuZGljdC50cmFuc3BvcnRMYXllci56SW5kZXggPSAxMDI7XG4gICAgICAgICAgICB0aGlzLml0ZW1MYXllci56SW5kZXggPSAxMDA7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY292ZXIuekluZGV4ID0gMTAzO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRlc3RMYXllci56SW5kZXggPSAxMDQ7XG4gICAgICAgICAgICB0aGlzLmVmZmVjdExheWVyLnpJbmRleCA9IDEwNTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9IF9fc3ByZWFkQXJyYXlzKHRoaXMuYm94TGF5ZXIuY2hpbGRyZW4pO1xuICAgICAgICAoZSA9IGUuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gIXQuaXNUcmFuc3BvcnRCb3g7XG4gICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS55ICsgMWUzICogZVt0Lm1faGllcmFyY2h5XSAtIChvLnkgKyAxZTMgKiBvW3QubV9oaWVyYXJjaHldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobywgaSkge1xuICAgICAgICAgICAgICAgIHZhciByID0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyICsgMyAqIG8ud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBvLnk7XG4gICAgICAgICAgICAgICAgby55ID0gcjtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihvKVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4wMiAqIGkpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogLTVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogOFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4xLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAtM1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9jYW5Ub3VjaCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuYm94TGF5ZXIuekluZGV4ID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaXRlbUxheWVyLnpJbmRleCA9IDEwMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmRpY3QuY292ZXIuekluZGV4ID0gMTAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC50ZXN0TGF5ZXIuekluZGV4ID0gMTAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZWZmZWN0TGF5ZXIuekluZGV4ID0gMTA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmRpY3QudHJhbnNwb3J0TGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kaWN0LnRyYW5zcG9ydEJnLnpJbmRleCA9IDk4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmJveExheWVyLnpJbmRleCA9IDk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmRpY3QudHJhbnNwb3J0TGF5ZXIuekluZGV4ID0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lml0ZW1MYXllci56SW5kZXggPSAxMDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC5jb3Zlci56SW5kZXggPSAxMDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC50ZXN0TGF5ZXIuekluZGV4ID0gMTAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmVmZmVjdExheWVyLnpJbmRleCA9IDEwNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQubGV2ZWxfY29uZmlnICYmIHQubGV2ZWxfY29uZmlnLnRyYW5zcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmRpY3QudHJhbnNwb3J0TGF5ZXIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yODc0OV90cmFuc3BvcnQuZGVmYXVsdCkuaXNNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94Q2xvc2VTRk5hbWUgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSBcIjItMlwiOlxuICAgICAgICAgICAgICAgIG8gPSAxMDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMi0yLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gMjAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjMtMlwiOlxuICAgICAgICAgICAgICAgIG8gPSAzMDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMy0yLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gNDAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjQtMlwiOlxuICAgICAgICAgICAgICAgIG8gPSA1MDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNC0yLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gNjAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcobyArIGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94T3BlblNGTmFtZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgICBjYXNlIFwiMi0yXCI6XG4gICAgICAgICAgICBjYXNlIFwiMi0yLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gMTAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjMtMlwiOlxuICAgICAgICAgICAgY2FzZSBcIjMtMi0yXCI6XG4gICAgICAgICAgICAgICAgbyA9IDMwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0LTJcIjpcbiAgICAgICAgICAgIGNhc2UgXCI0LTItMlwiOlxuICAgICAgICAgICAgICAgIG8gPSA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBvICsgTnVtYmVyKGUpICsgMWUzO1xuICAgICAgICByZXR1cm4gU3RyaW5nKGkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94QW5pbUlkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSAwO1xuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCIyLTJcIjpcbiAgICAgICAgICAgIGNhc2UgXCIyLTItMlwiOlxuICAgICAgICAgICAgICAgIGUgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjMtMlwiOlxuICAgICAgICAgICAgY2FzZSBcIjMtMi0yXCI6XG4gICAgICAgICAgICAgICAgZSA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNC0yXCI6XG4gICAgICAgICAgICBjYXNlIFwiNC0yLTJcIjpcbiAgICAgICAgICAgICAgICBlID0gMztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RyaW5nKGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY3JlYXRlQm94ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0Lm5hbWU7XG4gICAgICAgIHZhciBvID0gdC5oaWVyYXJjaHk7XG4gICAgICAgIHZhciBpID0gdC5pbmRleDtcbiAgICAgICAgdmFyIHIgPSB0Lng7XG4gICAgICAgIHZhciBuID0gdC55O1xuICAgICAgICB2YXIgYSA9IHRoaXMuYm94TGF5ZXI7XG4gICAgICAgIHZhciBzID0gdGhpcy5kaWN0LmJveFByZWZhYi5nZXRDaGlsZEJ5TmFtZShlKTtcbiAgICAgICAgdmFyIGMgPSBjYy52MihyLCBuKTtcbiAgICAgICAgdmFyIGwgPSBjYy5pbnN0YW50aWF0ZShzKTtcbiAgICAgICAgbC5wYXJlbnQgPSBhO1xuICAgICAgICBsLnBvc2l0aW9uID0gYztcbiAgICAgICAgbFt0aGlzLm1faGllcmFyY2h5XSA9IG87XG4gICAgICAgIGxbdGhpcy5tX2luZGV4XSA9IGk7XG4gICAgICAgIGwubmFtZSA9IHMubmFtZTtcbiAgICAgICAgdGhpcy5zZXRCb3hJbmRleChsKTtcbiAgICAgICAgbC5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLnpJbmRleCA9IDA7XG4gICAgICAgIHZhciBoID0gdGhpcy5ib3hNYXAuZ2V0KG8pO1xuICAgICAgICBoLnB1c2gobCk7XG4gICAgICAgIHRoaXMuYm94TWFwLnNldChvLCBoKTtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRCb3hEYXRhID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9ICExO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGU7XG4gICAgICAgICAgICB0W3RoaXMubV9pZF0gPSBpO1xuICAgICAgICAgICAgdFt0aGlzLm1fc3RhdGVdID0geS5FbXB0eTtcbiAgICAgICAgICAgIHRbdGhpcy5tX29jY3VweV0gPSAwO1xuICAgICAgICAgICAgdFt0aGlzLm1faXRlbXNdID0gW107XG4gICAgICAgICAgICB0W3RoaXMubV9pdGVtc10ubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm94U1AodCwgdGhpcy5nZXRCb3hDbG9zZVNGTmFtZSh0Lm5hbWUsIGUpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Qm94U1AgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG8uc3ByaXRlRnJhbWUgPSBnYW1lLmJveEF0bGFzLmdldFNwcml0ZUZyYW1lKHRoaXMuZm9sZGVyICsgXCJfXCIgKyBlKTtcbiAgICAgICAgfSBjYXRjaCAoaSkge1xuICAgICAgICAgICAgby5zcHJpdGVGcmFtZSA9IHRoaXMubG9hZFNwcml0ZUZyYW1lKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRCb3hJbmRleCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgxID09IGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gdFt0aGlzLm1faGllcmFyY2h5XTtcbiAgICAgICAgICAgIHZhciBpID0gdFt0aGlzLm1faW5kZXhdO1xuICAgICAgICAgICAgdC56SW5kZXggPSAxMDAgKiBvICsgaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgyID09IGUpIHtcbiAgICAgICAgICAgICAgICB0LnpJbmRleCA9IDRlMyArIHRoaXMuY2xlYXJOdW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgzID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdC56SW5kZXggPSAzZTMgKyB0aGlzLmNsZWFyTnVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlQm94U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSBbXTtcbiAgICAgICAgdGhpcy5ib3hNYXAuZm9yRWFjaChmdW5jdGlvbiAodCwgbykge1xuICAgICAgICAgICAgaWYgKGUuaW5jbHVkZXMobykpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnB1c2gobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgciA9IGVbb107XG4gICAgICAgICAgICB2YXIgbiA9IGkuYm94TWFwLmdldChyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGllcmFyY2h5TGV2ZWxzXCIsIGUpO1xuICAgICAgICAgICAgaWYgKDAgPT09IG8pIHtcbiAgICAgICAgICAgICAgICBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbdC5tX3N0YXRlXSA9PT0geS5FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZVt0Lm1fYmxvY2tdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlbdC5tX3N0YXRlXSA9PT0geS5FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaVt0Lm1fYmxvY2tdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSB0LmdldEJveEJvdW5kaW5nQm94KGkpLCBuID0gbyAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuYm94TWFwLmdldChhKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlW3QubV9zdGF0ZV0gPT09IHkuRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdC5nZXRCb3hCb3VuZGluZ0JveChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmludGVyc2VjdHMobykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpW3QubV9ibG9ja10gKz0gZVt0Lm1fYmxvY2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpW3QubV9ibG9ja10gPj0gdC5tYXhCbG9ja0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubWF4QmxvY2tJbmRleCA9IGlbdC5tX2Jsb2NrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgxID09PSBlW3QubV9ibG9ja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLmNvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKFwiIzgyODI4MlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgZS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgbyhyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcbiAgICAgICAgcmV0dXJuIGNjLnJlY3QoZS54LCBlLnksIGUud2lkdGggLSA2LCBlLmhlaWdodCAtIDYpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Qm94VG9XYWl0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgZVt0aGlzLm1fc3RhdGVdID0gXy5PY2N1cHk7XG4gICAgICAgICAgICB0W3RoaXMubV93YWl0XSA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRUb0FycmF5KHQsIHRoaXMud2FpdExpc3QpO1xuICAgICAgICB0aGlzLmJveEZseSh0LCBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoby5jaGVja0JveFRha2VJdGVtKHQpKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY2hlY2tJc0ZhaWwgc2V0Qm94VG9XYWl0XCIpO1xuICAgICAgICAgICAgICAgIG8uY2hlY2tJc0ZhaWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0JveFRha2VJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKCF0LmZseVN1Yykge1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRJdGVtRGF0YSh0KTtcbiAgICAgICAgaWYgKGUgJiYgZS5pdGVtKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGUuaXRlbTtcbiAgICAgICAgICAgIHRoaXMuaXNDaGVjayA9ICEwO1xuICAgICAgICAgICAgaWYgKGUuaW5GaXJzdFBvcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJvbUFycmF5KG8sIHRoaXMuaXRlbVF1ZXVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1Ub0JveChvLCB0LCAhMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU3VwcGx5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtUXVldWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJdGVtRGF0YSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICgwID09PSB0aGlzLml0ZW1RdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRCb3hPY2N1cHlQb3ModCkubGVuZ3RoIC0gdFt0aGlzLm1fb2NjdXB5XTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLml0ZW1RdWV1ZVswXTtcbiAgICAgICAgdmFyIGkgPSAhMTtcbiAgICAgICAgaWYgKG9bdGhpcy5tX3N0YXRlXSA9PT0gQy5JZGxlICYmIG9bdGhpcy5tX2lkXSA9PT0gdFt0aGlzLm1faWRdICYmIGUgPiAwKSB7XG4gICAgICAgICAgICBpID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgIHZhciByID0gby5wb3NpdGlvbi5zdWIodGhpcy5pdGVtRmlyc3RQb3MpLm1hZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtOiBvLFxuICAgICAgICAgICAgICAgIGluRmlyc3RQb3M6IHIgPCA1XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXJCb3ggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRCb3hPY2N1cHlQb3ModCkubGVuZ3RoO1xuICAgICAgICB0W3RoaXMubV9zdGF0ZV0gPSB5LkZpbmlzaDtcbiAgICAgICAgdC56SW5kZXggPSAxMDtcbiAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICBmb3IgKHZhciBpID0gdC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1cIik7IGkuY2hpbGRyZW5Db3VudDsgKSB7XG4gICAgICAgICAgICB0aGlzLnB1dEl0ZW1Ub1Bvb2woaS5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRCb3hJbmRleCh0LCAzKTtcbiAgICAgICAgdmFyIHIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJveFNwaW5lKTtcbiAgICAgICAgci5uYW1lID0gXCJzcGluZVwiO1xuICAgICAgICByLnBhcmVudCA9IHQ7XG4gICAgICAgIHIucG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICByLnNjYWxlID0gMS4yO1xuICAgICAgICByLmFjdGl2ZSA9ICEwO1xuICAgICAgICB2YXIgbiA9IHRbdGhpcy5tX2lkXTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGkgPSByLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICB2YXIgYSA9IFwic2tpblwiICsgTnVtYmVyKG4pO1xuICAgICAgICAgICAgaS5zZXRTa2luKGEpO1xuICAgICAgICAgICAgdmFyIHMgPSBlLmdldEJveEFuaW1JZCh0Lm5hbWUpO1xuICAgICAgICAgICAgaS50aW1lU2NhbGUgPSAxLjM7XG4gICAgICAgICAgICBpLnNldEFuaW1hdGlvbigwLCBcImRhaWppXCIgKyBzLCAhMCk7XG4gICAgICAgICAgICB2YXIgYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQucGxheVNwaW5lQ2FsbEJhY2soaSwgXCJkYWJhb1wiICsgcywgITEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wbGF5TGV2ZWxTb3VuZChcIkZ1bGxcIik7XG4gICAgICAgICAgICAgICAgICAgIGUucGxheUVmZmVjdCh0KTtcbiAgICAgICAgICAgICAgICAgICAgZS5zZXRDbGVhck51bShvKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdGFydENsZWFyVGltZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMWUzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2hlY2tXaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZGVsZXRlRnJvbUFycmF5KHQsIGUud2FpdExpc3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodFtlLm1fd2FpdF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRbZS5tX3dhaXRdW2UubV9zdGF0ZV0gPSBfLkVtcHR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdFtlLm1fd2FpdF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodC5pc0NsZWFyQm94KSB7XG4gICAgICAgICAgICAgICAgYygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgICAgICAuYnkoMC4xLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAtMTUwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUVmZmVjdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0Lmd1YW5ncXVhbik7XG4gICAgICAgIGUucGFyZW50ID0gdGhpcy5lZmZlY3RMYXllcjtcbiAgICAgICAgZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgZS5uYW1lID0gXCJlZmZlY3RcIjtcbiAgICAgICAgZS5wb3NpdGlvbiA9ICRsZXZlbFV0aWwuZGVmYXVsdC5jb252ZXJ0UG9zaXRpb24odCwgZSk7XG4gICAgICAgICRsZXZlbFV0aWwuZGVmYXVsdC5wbGF5U3BpbmVDYWxsQmFjayhlLCBcImFuaW1hdGlvblwiLCAhMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIGUucmVtb3ZlRnJvbVBhcmVudCghMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYm94Rmx5ID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICB2YXIgciA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXCIpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIChyID0gbmV3IGNjLk5vZGUoXCJpdGVtXCIpKS5wYXJlbnQgPSB0O1xuICAgICAgICAgICAgci5wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgICAgICByLnpJbmRleCA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSB0LmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0Lm5hbWUuaW5jbHVkZXMoXCI0LTJcIikpIHtcbiAgICAgICAgICAgICAgICAobiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5ib3hTaGFkb3cyKSkucG9zaXRpb24gPSBjYy52MigtMTMuODMxLCAyMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0Lm5hbWUuaW5jbHVkZXMoXCIzLTJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgKG4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuYm94U2hhZG93MSkpLnBvc2l0aW9uID0gY2MudjIoNSAtIDE3LjkwNiwgMTguMDk0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAobiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5ib3hTaGFkb3cwKSkucG9zaXRpb24gPSBjYy52MigtMjEuOTY4LCAxNC4wMjMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4ubmFtZSA9IFwic2hhZG93XCI7XG4gICAgICAgICAgICBuLnBhcmVudCA9IHQ7XG4gICAgICAgICAgICB0LmNoaWxkcmVuWzBdLnpJbmRleCA9IDI7XG4gICAgICAgICAgICBuLnpJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm94SW5kZXgodCwgMik7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICRsZXZlbFV0aWwuZGVmYXVsdC5jb252ZXJ0UG9zaXRpb24oZSwgdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5mbHlTdWMgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBpLmdldEJveE9wZW5TRk5hbWUodC5uYW1lLCB0W2kubV9pZF0pO1xuICAgICAgICAgICAgICAgICAgICBpLnNldEJveFNQKHQsIGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hPY2N1cHlQb3MgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0Qm94VHlwZUJ5TmFtZSh0Lm5hbWUpO1xuICAgICAgICByZXR1cm4gU1tlXTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveFR5cGVCeU5hbWUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHQuc3BsaXQoXCItXCIpO1xuICAgICAgICByZXR1cm4gZVswXSArIFwiLVwiICsgZVsxXTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmJveElzRW1wdHkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdFt0aGlzLm1fc3RhdGVdID09PSB5LkVtcHR5O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94R3JvdXAgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm94VHlwZUdyb3VwW3RdKSB7XG4gICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFt0XSA9IHRoaXMuZmlsdGVyQm94VHlwZUdyb3VwQXJyKHRoaXMuYm94VHlwZUdyb3VwW3RdKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgIHZhciBpID0gZTtcbiAgICAgICAgaWYgKGUgPCAwKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG8gPSB0aGlzLmJveFR5cGVHcm91cFt0XS5zaGlmdCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAobCkge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciByID0gX19zcHJlYWRBcnJheXModGhpcy5ib3hUeXBlR3JvdXBbdF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCByLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByW25dO1xuICAgICAgICAgICAgICAgIGlmIChhID49IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcltuXSAtPSBpO1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgLT0gYTtcbiAgICAgICAgICAgICAgICByW25dID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIHMgPSAhMDsgczsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJbMF0gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9ICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm94VHlwZUdyb3VwW3RdLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFt0XSA9IF9fc3ByZWFkQXJyYXlzKHIpO1xuICAgICAgICAgICAgbyA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0SXRlbUxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRyaW5rQXJyID0gbmV3IEFycmF5KHRoaXMubGV2ZWxUb3RhbCkuZmlsbCgtMSk7XG4gICAgICAgIHZhciB0ID0gMDtcbiAgICAgICAgdmFyIGUgPSB0aGlzLml0ZW1Qb3NMaXN0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChjb25zb2xlLmxvZyhcIumlruaWme+8muWIneWni+WMllwiLCBlKTsgdCA8IGU7ICkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmdldEl0ZW1UeXBlKC0xKTtcbiAgICAgICAgICAgIGlmICghbykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGkgPSBvLnR5cGU7XG4gICAgICAgICAgICB2YXIgciA9IG8ubnVtO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCByOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAodCArIG4gPj0gZSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gZSAtIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHQgKyBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oYSwgTnVtYmVyKGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgKz0gcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1GaXJzdFBvcyA9IHRoaXMuaXRlbVF1ZXVlWzBdLnBvc2l0aW9uO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaXRlbVN1cHBseSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISh0aGlzLml0ZW1RdWV1ZS5sZW5ndGggPiB0aGlzLml0ZW1Qb3NMaXN0Lmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHROZWVkQWRkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWkjea0u1wiLCBcIumlruaWmeaWsOWinlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubmV4dE5lZWRBZGQuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFtlXVswXSAtPSAxO1xuICAgICAgICAgICAgICAgIGlmICgwID09IHRoaXMuYm94VHlwZUdyb3VwW2VdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94VHlwZUdyb3VwW2VdLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgMTsgbysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5pdGVtUG9zTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaSwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuZ2V0SXRlbVR5cGUodCk7XG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgci50eXBlICYmIHIubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGUgPSByLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gci5udW07XG4gICAgICAgICAgICAgICAgICAgIGZvciAobyA9IDA7IG8gPCBuOyBvKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLml0ZW1Qb3NMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0oaSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUl0ZW1RdWV1ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG8gPSB0aGlzLml0ZW1RdWV1ZTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLml0ZW1Qb3NMaXN0O1xuICAgICAgICB2YXIgciA9IDE7XG4gICAgICAgIHZhciBuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCsrciA+PSBvLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChlLnN0YXRlID09PSBsLnByb3Bfc29ydCkge1xuICAgICAgICAgICAgICAgICAgICBlLnN0YXRlID0gbC53YWl0VG91Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuaXRlbVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdFtlLm1fc3RhdGVdID0gQy5JZGxlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGUud2FpdExpc3Quc29ydChmdW5jdGlvbiAodCwgbykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRCb3hPY2N1cHlQb3ModCkubGVuZ3RoIC0gdFtlLm1fb2NjdXB5XSAtIChlLmdldEJveE9jY3VweVBvcyhvKS5sZW5ndGggLSBvW2UubV9vY2N1cHldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gITEsIGkgPSAwOyBpIDwgZS53YWl0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUud2FpdExpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNoZWNrQm94VGFrZUl0ZW0obikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5pc0NoZWNrID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGUuY2hlY2tJc0ZhaWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciByID0gb1tlXTtcbiAgICAgICAgICAgIHIuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHIpLnN0b3AoKTtcbiAgICAgICAgICAgIGlmIChlID4gaS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgci5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgci5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgYyA9IGUsIGwgPSByW3MubV9wb3NJbmRleF0gLSAxOyBsID49IGM7IGwtLSkgYS5wdXNoKGwpO1xuICAgICAgICAgICAgICAgIGlmIChhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzLml0ZW1Nb3ZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ICogZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IG8ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGEoYyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLml0ZW1Nb3ZlID0gZnVuY3Rpb24gKHQsIGUsIG8sIGksIHIpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSBpKSB7XG4gICAgICAgICAgICBpID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSByKSB7XG4gICAgICAgICAgICByID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobyA+PSBlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICBpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0W3RoaXMubV9zdGF0ZV0gPSBDLkFuaW1hdGlvbjtcbiAgICAgICAgICAgIHZhciBhID0gZVtvXTtcbiAgICAgICAgICAgIHZhciBzID0gdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5pdGVtUG9zTGlzdFthXTtcbiAgICAgICAgICAgIHMuc3ViKGMpLm1hZygpO1xuICAgICAgICAgICAgY2MudHdlZW4odClcbiAgICAgICAgICAgICAgICAuZGVsYXkocilcbiAgICAgICAgICAgICAgICAudG8oMC4wNTUsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuLnNldEl0ZW1JbmRleCh0KTtcbiAgICAgICAgICAgICAgICAgICAgdFtuLm1fcG9zSW5kZXhdID0gYTtcbiAgICAgICAgICAgICAgICAgICAgbyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBuLml0ZW1Nb3ZlKHQsIGUsIG8sIGkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldEl0ZW1Ub0JveCA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9ICExO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0W3RoaXMubV9zdGF0ZV0gIT0gQy5Cb3gpIHtcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRCb3hPY2N1cHlQb3MoZSk7XG4gICAgICAgICAgICB2YXIgbiA9IHIubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGEgPSByW2VbdGhpcy5tX29jY3VweV1dO1xuICAgICAgICAgICAgdmFyIHMgPSBjYy52MihhWzBdLCBhWzFdKTtcbiAgICAgICAgICAgIHZhciBjID0gZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW1cIik7XG4gICAgICAgICAgICB2YXIgbCA9IGUuY29udmVydFRvV29ybGRTcGFjZUFSKHMpO1xuICAgICAgICAgICAgdmFyIGggPSB0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsKTtcbiAgICAgICAgICAgIGVbdGhpcy5tX29jY3VweV0rKztcbiAgICAgICAgICAgIGlmIChlW3RoaXMubV9vY2N1cHldID49IG4pIHtcbiAgICAgICAgICAgICAgICBlW3RoaXMubV9vY2N1cHldID0gbjtcbiAgICAgICAgICAgICAgICBlW3RoaXMubV9zdGF0ZV0gPSB5LkZpbmlzaEFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUZyb21BcnJheShlLCB0aGlzLmJveFF1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRbdGhpcy5tX3N0YXRlXSA9IEMuQm94O1xuICAgICAgICAgICAgdGhpcy5zZXRJdGVtSW5kZXgodCwgMik7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZyb21BcnJheSh0LCB0aGlzLml0ZW1RdWV1ZSk7XG4gICAgICAgICAgICB2YXIgcCA9IHQucG9zaXRpb247XG4gICAgICAgICAgICB2YXIgZCA9IGguc3ViKHApLm1hZygpIC8gMWUzO1xuICAgICAgICAgICAgdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICBpZiAoaC54ID4gcC54KSB7XG4gICAgICAgICAgICAgICAgdSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHUgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBnID0gcC5hZGQoY2MudjIoMTAwICogdSwgMTUwKSk7XG4gICAgICAgICAgICB0Lm1fc2hhZG93LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aW1lXCIsIGQpO1xuICAgICAgICAgICAgY2MudHdlZW4odClcbiAgICAgICAgICAgICAgICAuYmV6aWVyVG8oZCwgcCwgZywgaClcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGkucGxheUxldmVsU291bmQoXCJHZXRfb25cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdC5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IDEwICsgdFtpLm1faWRdO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBnYW1lLmRyaW5rQXRsYXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNwcml0ZUZyYW1lID0gci5nZXRTcHJpdGVGcmFtZShpLmZvbGRlciArIFwiX1wiICsgbyArIFwiLTFcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gaS5pbWFnZS5nZXRDaGlsZEJ5TmFtZShvICsgXCItMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3ByaXRlRnJhbWUgPSBuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkuY2hhbmdlUGFyZW50KHQsIGMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpLmFkZFRvQXJyYXkodCwgZVtpLm1faXRlbXNdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbaS5tX2l0ZW1zXS5sZW5ndGggPj0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkuY2xlYXJCb3goZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdGhpcy5sZXZlbF9jb25maWc7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRXZWlnaHQoKTtcbiAgICAgICAgY2MubG9nKFwi5p2D6YeN77yaXCIsIG8pO1xuICAgICAgICBpZiAoby5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBpID0gZS5saW1pdFJhbms7XG4gICAgICAgICAgICB2YXIgciA9IE1hdGgubWluKGksIG8ubGVuZ3RoKTtcbiAgICAgICAgICAgIHZhciBuID0gW107XG4gICAgICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHI7IHMrKykge1xuICAgICAgICAgICAgICAgIHZhciBjID0gb1tzXS5zcGxpdChcIl9cIilbMV07XG4gICAgICAgICAgICAgICAgbi5wdXNoKE51bWJlcihjKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBhICs9IE51bWJlcih0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGwgPSB0aGlzLmdldFJhbmRvbUludGVnZXIoMSwgYSk7XG4gICAgICAgICAgICB2YXIgaCA9IDA7XG4gICAgICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IG4ubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKGggKz0gbltkXSkgPj0gbCAmJiB0aGlzLmNoZWNrSGFzSXRlbUJ5Q29sb3Iob1tkXS5zcGxpdChcIl9cIilbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdSA9IG9bcF0uc3BsaXQoXCJfXCIpWzBdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC0yODgwNyA9PSB0aGlzLmxldmVsSUQgJiZcbiAgICAgICAgICAgICAgICAoKHUgPSB0aGlzLm5leHROZWVkQWRkMlt0aGlzLm5leHROZWVkQWRkMkluZGV4XSksICh0aGlzLm5leHROZWVkQWRkMkluZGV4ICs9IDEpLCBudWxsID09IHUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBnID0gdGhpcy5nZXRCb3hHcm91cChOdW1iZXIodSksIHQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIodSksXG4gICAgICAgICAgICAgICAgbnVtOiBOdW1iZXIoZylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0hhc0l0ZW1CeUNvbG9yID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5ib3hUeXBlR3JvdXBbdF0gJiYgISF0aGlzLmJveFR5cGVHcm91cFt0XS5sZW5ndGg7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVJdGVtID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSB0aGlzLml0ZW1Qb3NMaXN0W3RdO1xuICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgaS5hZGRTZWxmKG8pO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gU3RyaW5nKE51bWJlcihlKSArIDEwKTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLml0ZW1MYXllcjtcbiAgICAgICAgdmFyIGEgPSB0aGlzLnBvb2xNZ3IuZ2V0KHRoaXMucHJlX2l0ZW0sIFwicHJlX2l0ZW1cIik7XG4gICAgICAgIGEucGFyZW50ID0gbjtcbiAgICAgICAgYS5wb3NpdGlvbiA9IGk7XG4gICAgICAgIGFbdGhpcy5tX2luZGV4XSA9IHRoaXMuaXRlbUxheWVyLmNoaWxkcmVuQ291bnQ7XG4gICAgICAgIGFbdGhpcy5tX3N0YXRlXSA9IEMuSWRsZTtcbiAgICAgICAgYVt0aGlzLm1faWRdID0gZTtcbiAgICAgICAgYVt0aGlzLm1fcG9zSW5kZXhdID0gdDtcbiAgICAgICAgYS5uYW1lID0gU3RyaW5nKGUpO1xuICAgICAgICB2YXIgcyA9IGEuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjID0gZ2FtZS5kcmlua0F0bGFzO1xuICAgICAgICAgICAgcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGMuZ2V0U3ByaXRlRnJhbWUodGhpcy5mb2xkZXIgKyBcIl9cIiArIHIpO1xuICAgICAgICB9IGNhdGNoICh1KSB7XG4gICAgICAgICAgICB2YXIgbCA9IHRoaXMuaW1hZ2UuZ2V0Q2hpbGRCeU5hbWUocik7XG4gICAgICAgICAgICBzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEl0ZW1JbmRleChhKTtcbiAgICAgICAgdGhpcy5pdGVtUXVldWUucHVzaChhKTtcbiAgICAgICAgdmFyIGggPSBhLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpO1xuICAgICAgICBoLmFjdGl2ZSA9ICEwO1xuICAgICAgICBoLnNldFBvc2l0aW9uKC0xOCwgLTE4KTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJlbnQoaCwgdGhpcy5zaGFkb3dMYXllcik7XG4gICAgICAgIGgubV9mb2xsb3cgPSBhO1xuICAgICAgICB2YXIgcCA9IGgucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihoLnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIGQgPSBhLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoYS5wb3NpdGlvbik7XG4gICAgICAgIGgubV9mb2xsb3dfd1ZlYyA9IGQuc3ViKHApO1xuICAgICAgICBhLm1fc2hhZG93ID0gaDtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRJdGVtSW5kZXggPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0LnpJbmRleCA9IDVlMyAtIHQueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0LnpJbmRleCA9IDk5OTk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFdlaWdodCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gdGhpcy5sZXZlbF9jb25maWc7XG4gICAgICAgIHZhciBpID0ge307XG4gICAgICAgIHRoaXMudHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIChpW3RdID0gMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgciA9IG8uYmxvY2tXZWlnaHQ7XG4gICAgICAgIHRoaXMuYm94UXVldWUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgaWYgKGUuYm94SXNFbXB0eSh0KSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdFtlLm1faWRdO1xuICAgICAgICAgICAgICAgIHZhciBuID0gdFtlLm1fYmxvY2tdO1xuICAgICAgICAgICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoMSA9PT0gbikge1xuICAgICAgICAgICAgICAgICAgICBhID0gclswXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gclsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSByWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0LmlzVHJhbnNwb3J0Qm94KSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSByWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpW29dICs9IGEgKiBlLmdldEJveE9jY3VweVBvcyh0KS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbiA9IG8ud2FpdFdlaWdodDtcbiAgICAgICAgdGhpcy53YWl0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRbZS5tX2lkXTtcbiAgICAgICAgICAgIHZhciByID0gKGUuZ2V0Qm94T2NjdXB5UG9zKHQpLmxlbmd0aCAtIHRbZS5tX29jY3VweV0pICogbjtcbiAgICAgICAgICAgIGlbb10gKz0gcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IG8ucXVldWVXZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLml0ZW1RdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0W2UubV9pZF07XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBhO1xuICAgICAgICAgICAgICAgIGlbb10gLT0gcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzID0gW107XG4gICAgICAgIGZvciAodmFyIGMgaW4gaSkge1xuICAgICAgICAgICAgdmFyIGwgPSBjICsgXCJfXCIgKyBpW2NdO1xuICAgICAgICAgICAgcy5wdXNoKGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICBzLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHQuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIHZhciBpID0gTnVtYmVyKG9bMV0pO1xuICAgICAgICAgICAgICAgIHZhciByID0gZS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihyWzFdKSAtIGk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRXYWl0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGkgPSBvLndhaXRMYXllci5jaGlsZHJlbltlXTtcbiAgICAgICAgICAgIGkubmFtZSA9IFwid2FpdF9cIiArIGU7XG4gICAgICAgICAgICB2YXIgciA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIGlmIChudWxsID09IHIgPyB2b2lkIDAgOiByLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlbby5tX3N0YXRlXSA9IF8uTG9jaztcbiAgICAgICAgICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQub25DbGlja0V2ZW50KGksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoJGxldmVsQ29uc3RhbnQuTEVWRUxfRVZFTlQuUkVXQVJEVklERU8sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC51bmxvY2tXYWl0KGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlbby5tX3N0YXRlXSA9IF8uRW1wdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndhaXRMYXllci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZShpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudW5sb2NrV2FpdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ID0gdGhpcy53YWl0TGF5ZXIuY2hpbGRyZW4uZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0W2UubV9zdGF0ZV0gPT09IF8uTG9jaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gdC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpO1xuICAgICAgICBvLmFjdGl2ZSA9ICExO1xuICAgICAgICB2YXIgaSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5qaWVzdW8pO1xuICAgICAgICBpLnBvc2l0aW9uID0gY2MudjIoKTtcbiAgICAgICAgby5wYXJlbnQuYWRkQ2hpbGQoaSk7XG4gICAgICAgIGkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSAhMTtcbiAgICAgICAgaS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgIG8ucmVtb3ZlRnJvbVBhcmVudCghMCk7XG4gICAgICAgIHRbdGhpcy5tX3N0YXRlXSA9IF8uRW1wdHk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2NoZWNrX3VubG9ja1dhaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLndhaXRMYXllci5jaGlsZHJlbi5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLndhaXRMYXllci5jaGlsZHJlbltlXTtcbiAgICAgICAgICAgIG8ubmFtZSA9IFN0cmluZyhlKTtcbiAgICAgICAgICAgIHZhciBpID0gby5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpO1xuICAgICAgICAgICAgaWYgKGkgJiYgaS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0ID0gbztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfdW5sb2NrV2FpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmZ1bmNfY2hlY2tfdW5sb2NrV2FpdCgpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tXYWl0KHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXYWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMud2FpdExheWVyLmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMud2FpdExheWVyLmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgaWYgKGUuYWN0aXZlICYmIGVbdGhpcy5tX3N0YXRlXSA9PT0gXy5FbXB0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0UmFuZG9tSW50ZWdlciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZSAtIHQgKyAxKSkgKyB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9hZFNwcml0ZUZyYW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2UuZ2V0Q2hpbGRCeU5hbWUodCkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0lzRmFpbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IGwub3Zlcikge1xuICAgICAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLndhaXRMYXllci5jaGlsZHJlbi5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLndhaXRMYXllci5jaGlsZHJlbltlXVt0aGlzLm1fc3RhdGVdICE9PSBfLkxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgICAgIGZvciAoZSA9IDA7IGUgPCB0aGlzLndhaXRMaXN0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChyID0gdGhpcy53YWl0TGlzdFtlXSlbdGhpcy5tX3N0YXRlXSA9PT0geS5PY2N1cHkpIHtcbiAgICAgICAgICAgICAgICAgICAgbyArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ID09IG8pIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJjaGVja1RpcFRleHRcIiwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0IC0gMSA9PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImNoZWNrVGlwVGV4dFwiLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVjayAmJiBvID09PSB0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAhMTtcbiAgICAgICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgdGhpcy53YWl0TGlzdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMud2FpdExpc3RbZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5nZXRJdGVtRGF0YShyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gJiYgbi5pdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbCgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5ub25lKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNoYWRvdygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVTaGFkb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5zaGFkb3dMYXllci5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gZS5tX2ZvbGxvdztcbiAgICAgICAgICAgICAgICBpZiAobyAmJiBvLmFjdGl2ZSAmJiBvW3QubV9zdGF0ZV0gIT0gQy5Cb3gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBvLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoby5wb3NpdGlvbikuc3ViKGUubV9mb2xsb3dfd1ZlYyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgICAgICAgICAgICAgICAgIGUucG9zaXRpb24gPSByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0R3VpZGVuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgtMjgzOTEgPT09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3Quc3o7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDAuOFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUd1aWRlbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoLTI4MzkxID09PSB0aGlzLmxldmVsSUQpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5kaWN0LnN6O1xuICAgICAgICAgICAgaWYgKHQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdEdyaWRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ncmlkTGF5ZXIuYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRUb3VjaE5vZGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdGhpcy5ib3hMYXllci5jaGlsZHJlbjtcbiAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBvLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICBpZiAoKGEgPSBvW3JdKVt0aGlzLm1fc3RhdGVdID09PSB5LkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGFbdGhpcy5tX2Jsb2NrXSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIGZvciAociA9IDA7IHIgPCBvLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIGlmICgoYSA9IG9bcl0pLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHQpKSB7XG4gICAgICAgICAgICAgICAgbi5wdXNoKGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaS5sZW5ndGggJiYgbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIG4uc29ydChmdW5jdGlvbiAodCwgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvW2UubV9pbmRleF0gLSB0W2UubV9pbmRleF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5bMF0ucnVuQWN0aW9uKHRoaXMuc2hhY2tBY3Rpb24oMC4xLCAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGkubGVuZ3RoXG4gICAgICAgICAgICA/IChpLnNvcnQoZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBvW2UubV9pbmRleF0gLSB0W2UubV9pbmRleF07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBpWzBdKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgICAgJGxldmVsVXRpbC5kZWZhdWx0LnRvdWNoRXZlbnQodGhpcy5kaWN0LnRvdWNoTm9kZSwge1xuICAgICAgICAgICAgc0Z1bmM6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuX2NhblRvdWNoICYmICh0LnBsYXlDbGlja1NvdW5kKCksIHQuc3RhdGUgPT09IGwud2FpdFRvdWNoIHx8IHQuc3RhdGUgPT09IGwucHJvcF9jbGVhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBvLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZSA9IHQuZ2V0VG91Y2hOb2RlKGkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc3RhdGUgPT0gbC53YWl0VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5kaWN0LmhhbmQgJiYgdC5kaWN0LmhhbmQuYWN0aXZlICYmICh0Lmd1aWRlZE5vZGVzLnB1c2goZSksIHQuY3VycmVudEd1aWRlTm9kZSA9PSBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQuZ3VpZGVOb2Rlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0Lmd1aWRlTm9kZXNbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgPT0gdC5ndWlkZWROb2Rlcy5pbmRleE9mKGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jdXJyZW50R3VpZGVOb2RlID0gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmhhbmRQb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmRpY3QuaGFuZC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC5oYW5kVGV4dC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC5oYW5kVGV4dC5wYXJlbnQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0LmdldFdhaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3QubV9zdGF0ZV0gPSB5Lk9jY3VweTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC51cGRhdGVCb3hTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldEJveFRvV2FpdChlLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pc1RyYW5zcG9ydEJveCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kaWN0LnRyYW5zcG9ydExheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudCgkbGV2ZWxfMjg3NDlfdHJhbnNwb3J0LmRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZUNhckFtb3VudChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJ1bkFjdGlvbih0LnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc3RhdGUgPT0gbC5wcm9wX2NsZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbdC5tX3N0YXRlXSA9IHkuRmluaXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUJveFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImlzUmVtb3ZlXCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zZXRCb3hUb1Byb3BDbGVhcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaXNUcmFuc3BvcnRCb3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdC50cmFuc3BvcnRMYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoJGxldmVsXzI4NzQ5X3RyYW5zcG9ydC5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2VDYXJBbW91bnQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbUZ1bmM6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgZUZ1bmM6IGZ1bmN0aW9uICgpIHt9XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMuZW50ZXJLZXlJbnB1dCwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDbGVhck51bSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJOdW0gKz0gdDtcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJOdW0gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTnVtID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJOdW0gPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmxldmVsVG90YWw7XG4gICAgICAgIHZhciBlID0gdCAtIHRoaXMuY2xlYXJOdW07XG4gICAgICAgIHZhciBvID0gKHRoaXMuY2xlYXJOdW0gLyB0KS50b0ZpeGVkKDIpO1xuICAgICAgICB2YXIgaSA9IE51bWJlcihvKTtcbiAgICAgICAgaSAqPSAxMDA7XG4gICAgICAgIGlmICgoaSA9IE1hdGguZmxvb3IoaSkpID4gMTAwKSB7XG4gICAgICAgICAgICBpID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiUHJvZ3Jlc3Muc3RyaW5nID0gXCJcIiArIGU7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImFsbFBlcnNvbkFtb3VudFwiLCBlLCB0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGxQZXJzb25BbW91bnRcIiwgZSwgdCk7XG4gICAgICAgIGdhbWUudG90YWxBbW91bnQgPSB0aGlzLmxldmVsVG90YWw7XG4gICAgICAgIGdhbWUucmVtYWluaW5nQW1vdW50ID0gZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrV2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmJveExheWVyLmNoaWxkcmVuLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5hY3RpdmU7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YygxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25MZXZlbFJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYWNrQWN0aW9uID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBjYy5tb3ZlQnkodCwgZSwgZSk7XG4gICAgICAgIHZhciBpID0gY2MubW92ZUJ5KHQsIC1lLCAtZSk7XG4gICAgICAgIHZhciByID0gY2MubW92ZUJ5KDAuOCAqIHQsIDAuOCAqIGUsIDAuOCAqIGUpO1xuICAgICAgICB2YXIgbiA9IGNjLm1vdmVCeSgwLjggKiB0LCAwLjggKiAtZSwgMC44ICogLWUpO1xuICAgICAgICB2YXIgYSA9IGNjLm1vdmVCeSgwLjYgKiB0LCAwLjYgKiBlLCAwLjYgKiBlKTtcbiAgICAgICAgdmFyIHMgPSBjYy5tb3ZlQnkoMC42ICogdCwgMC42ICogLWUsIDAuNiAqIC1lKTtcbiAgICAgICAgdmFyIGMgPSBjYy5tb3ZlQnkoMC40ICogdCwgMC40ICogZSwgMC40ICogZSk7XG4gICAgICAgIHZhciBsID0gY2MubW92ZUJ5KDAuNCAqIHQsIDAuNCAqIC1lLCAwLjQgKiAtZSk7XG4gICAgICAgIHZhciBoID0gY2MubW92ZUJ5KDAuMiAqIHQsIDAuMiAqIGUsIDAuMiAqIGUpO1xuICAgICAgICB2YXIgcCA9IGNjLm1vdmVCeSgwLjIgKiB0LCAwLjIgKiAtZSwgMC4yICogLWUpO1xuICAgICAgICByZXR1cm4gY2Muc2VxdWVuY2UobywgaSwgciwgbiwgYSwgcywgYywgbCwgaCwgcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdWMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvZyhcInN1Y1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5vdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gbC5vdmVyO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUucGxheVJpZ2h0KG51bGwsIDEpO1xuICAgICAgICAgICAgfSwgdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvc2UgPSBmdW5jdGlvbiAodCwgZSwgbywgaSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkge1xuICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5vdmVyKSB7XG4gICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICAgICAgICAgICAgICByLnggKz0gNzA7XG4gICAgICAgICAgICAgICAgICAgIHIueSAtPSA3MDtcbiAgICAgICAgICAgICAgICAgICAgci5wYXJlbnQgPSB0LnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgci5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUVycm9yKHIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RXJyb3JPbmNlKHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFcnJvcih0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUVycm9yT25jZSh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFcnJvck9uY2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2coXCJmYWlsXCIpO1xuICAgICAgICB0aGlzLmxvc2UobnVsbCwgITEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcImxldmVsUmV2aXZlSGVscGVyXCIpO1xuICAgICAgICAgICAgJGxldmVsUmV2aXZlSGVscGVyLmRlZmF1bHQubGV2ZWxGYWlsRXZlbnQoXCLmmK/lkKbpnIDopoHlpI3mtLtcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG8uZnVuY19yZXZpdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGwub3ZlcjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFdvcmRQb3MgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHQucG9zaXRpb24pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9ICRsZXZlbFV0aWwuZGVmYXVsdC5jb252ZXJ0UG9zaXRpb24odCwgZSk7XG4gICAgICAgIHJldHVybiBlLnBvc2l0aW9uLnN1YihvKS5tYWcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmRlbGV0ZUZyb21BcnJheSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gZS5pbmRleE9mKHQpO1xuICAgICAgICBpZiAoLTEgIT09IG8pIHtcbiAgICAgICAgICAgIGUuc3BsaWNlKG8sIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRUb0FycmF5ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKC0xID09PSBlLmluZGV4T2YodCkpIHtcbiAgICAgICAgICAgIGUucHVzaCh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hhbmdlUGFyZW50ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodC5wb3NpdGlvbik7XG4gICAgICAgIHQucGFyZW50ID0gZTtcbiAgICAgICAgdC5wb3NpdGlvbiA9IHQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25EaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnByb3RvdHlwZS5vbkRpc2FibGUuY2FsbCh0aGlzKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSAhMTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMuZW50ZXJLZXlJbnB1dCwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0UG9vbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCA0OyB0KyspIHtcbiAgICAgICAgICAgIHRoaXMucG9vbE1nci5wdXQoY2MuaW5zdGFudGlhdGUodGhpcy5wcmVfaXRlbSksIFwicHJlX2l0ZW1cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnB1dEl0ZW1Ub1Bvb2wgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICB2YXIgZSA9IHQubV9zaGFkb3c7XG4gICAgICAgIGUubV9mb2xsb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZVBhcmVudChlLCB0KTtcbiAgICAgICAgdGhpcy5wb29sTWdyLnB1dCh0LCBcInByZV9pdGVtXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19jaG9vc2VDbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gbC5wcm9wX2NsZWFyKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLpgZPlhbfvvJrpgInmi6nmtojpmaRcIik7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gbC5wcm9wX2NsZWFyO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiaXNSZW1vdmVcIiwgITApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hSZW1haW5OdW0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3hUb3RhbE51bSh0KSAtIHRbdGhpcy5tX29jY3VweV07XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hUb3RhbE51bSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJveE9jY3VweVBvcyh0KS5sZW5ndGg7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRCb3hUb1Byb3BDbGVhciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gbnVsbDtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGkgPSB0aGlzLmRpY3QucHJvcF9jbGVhcl9ib3g7XG4gICAgICAgIH1cbiAgICAgICAgdC5pc0NsZWFyQm94ID0gITA7XG4gICAgICAgIHZhciByID0gdGhpcy5nZXRCb3hSZW1haW5OdW0odCk7XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIHZhciBhID0gX19zcHJlYWRBcnJheXModGhpcy5pdGVtUXVldWUpO1xuICAgICAgICB2YXIgcyA9IHRbdGhpcy5tX2lkXTtcbiAgICAgICAgY2MubG9nKFwi5Y+W77ya5LmL5YmNXCIsIHIsIG4ubGVuZ3RoLCB0aGlzLml0ZW1RdWV1ZS5sZW5ndGgpO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgdmFyIGggPSAwO1xuICAgICAgICAgICAgaCA8IGEubGVuZ3RoICYmXG4gICAgICAgICAgICAocyAhPT0gKG0gPSBhW2hdKVt0aGlzLm1faWRdIHx8IChuLnB1c2gobSksIHRoaXMuZGVsZXRlRnJvbUFycmF5KG0sIHRoaXMuaXRlbVF1ZXVlKSwgMCAhPSAtLXIpKTtcbiAgICAgICAgICAgIGgrK1xuICAgICAgICApIHt9XG4gICAgICAgIGNjLmxvZyhcIuWPlu+8muS5i+WQjlwiLCByLCBuLmxlbmd0aCwgdGhpcy5pdGVtUXVldWUubGVuZ3RoKTtcbiAgICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLlj5YyMjIy77ya5LmL5YmNXCIsIHRoaXMuYm94VHlwZUdyb3VwW3NdKTtcbiAgICAgICAgICAgIHZhciBwID0gdGhpcy5pdGVtUG9zTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIGQgPSBjYy52MigpO1xuICAgICAgICAgICAgdmFyIHUgPSB0aGlzLmdldEJveEdyb3VwKHMsIHIpO1xuICAgICAgICAgICAgZm9yICh2YXIgZyA9IDA7IGcgPCB1OyBnKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBkID0gY2MudjIoMCwgMzAgKiAoZyArIDEpKTtcbiAgICAgICAgICAgICAgICAobSA9IHRoaXMuY3JlYXRlSXRlbShwLCBzLCBkKSkub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgbi5wdXNoKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKFwi5Y+WMjIyMu+8muS5i+WQjlwiLCB0aGlzLmJveFR5cGVHcm91cFtzXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3hGbHkodCwgaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBvLnNldEl0ZW1Ub0JveChlLCB0LCAhMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBlID0gby5nZXRCb3hUb3RhbE51bSh0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgby5pdGVtU3VwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvLml0ZW1RdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgby51cGRhdGVJdGVtUXVldWUoKTtcbiAgICAgICAgICAgIG8uc3RhdGUgPSBsLndhaXRUb3VjaDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3NvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBsLnByb3Bfc29ydDtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldFdlaWdodCghMCk7XG4gICAgICAgIGNjLmxvZyhcIumBk+WFt++8muaOkuW6j1wiKTtcbiAgICAgICAgY2MubG9nKFwi5o6S5bqP77ya5p2D6YeN77yaXCIsIHQpO1xuICAgICAgICBjYy5sb2coXCLpmJ/liJfvvJpcIiwgdGhpcy5pdGVtUXVldWUubGVuZ3RoKTtcbiAgICAgICAgaWYgKHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuaXRlbVBvc0xpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5pdGVtUG9zTGlzdFtlXTtcbiAgICAgICAgICAgIHZhciBpID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHQubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRbcl07XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBOdW1iZXIobi5zcGxpdChcIl9cIilbMF0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgdGhpcy5pdGVtUXVldWUubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLml0ZW1RdWV1ZVtzXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IGhbdGhpcy5tX2lkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaFt0aGlzLm1fcG9zSW5kZXhdID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucG9zaXRpb24gPSBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pdGVtUXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuaXRlbVF1ZXVlID0gX19zcHJlYWRBcnJheXMoaSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1RdWV1ZSgwLjA1KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19yZXZpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBsLndhaXRUb3VjaDtcbiAgICAgICAgY2MubG9nKFwi6YGT5YW377ya5aSN5rS7XCIpO1xuICAgICAgICB2YXIgdCA9IHRoaXMuZnVuY19jaGVja191bmxvY2tXYWl0KCk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLnVubG9ja1dhaXQodCk7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG5cIiwgOCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG5cIiwgOSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXdSZXZpdmVBbmltKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdC5pc0NsZWFyQm94ID0gITA7XG4gICAgICAgIHZhciBvID0gdGhpcy5kaWN0LnByb3BfY2xlYXJfYm94O1xuICAgICAgICB0aGlzLmJveEZseSh0LCBvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbyA9IGUuZ2V0Qm94T2NjdXB5UG9zKHQpLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBpID0gbztcbiAgICAgICAgICAgIGkgLT0gdFtlLm1fb2NjdXB5XTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5raI6Zmk6YGT5YW3XCIsIGkpO1xuICAgICAgICAgICAgdmFyIHIgPSB0W2UubV9pZF07XG4gICAgICAgICAgICB2YXIgbiA9IFtdO1xuICAgICAgICAgICAgdmFyIGEgPSBuZXcgQXJyYXkoaSkuZmlsbChyKTtcbiAgICAgICAgICAgIGNjLmxvZyhcImdldEJveEdyb3VwIHN0YXJ0IFwiLCAkbGV2ZWxVdGlsLmRlZmF1bHQuZGVlcENvcHkoZS5ib3hUeXBlR3JvdXApKTtcbiAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgaTsgcysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSAoZCA9IGUuaXRlbVF1ZXVlW3NdKVtlLm1faWRdO1xuICAgICAgICAgICAgICAgIGlmIChlLmJveFR5cGVHcm91cFtjXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLmJveFR5cGVHcm91cFtjXSA9IFswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5ib3hUeXBlR3JvdXBbY11bMF0gKz0gMTtcbiAgICAgICAgICAgICAgICBuLnB1c2goZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coXCJnZXRCb3hHcm91cCBzdGFydDIgXCIsICRsZXZlbFV0aWwuZGVmYXVsdC5kZWVwQ29weShlLmJveFR5cGVHcm91cCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xvclNvcnRcIiwgYSk7XG4gICAgICAgICAgICB2YXIgaCA9IFtdO1xuICAgICAgICAgICAgZm9yIChzID0gMDsgcyA8IGEubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGFbc107XG4gICAgICAgICAgICAgICAgaWYgKGUuaXRlbVF1ZXVlW3NdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gZS5pdGVtUXVldWVbc107XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gU3RyaW5nKE51bWJlcihwKSArIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgZFtlLm1faWRdID0gcDtcbiAgICAgICAgICAgICAgICAgICAgZC5uYW1lID0gU3RyaW5nKHApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGQuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBlLmltYWdlLmdldENoaWxkQnlOYW1lKGcpO1xuICAgICAgICAgICAgICAgICAgICBtLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuYm94VHlwZUdyb3VwW3BdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5ib3hUeXBlR3JvdXBbcF1bMF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuYm94VHlwZUdyb3VwW3BdWzBdIDw9IDAgJiYgZS5ib3hUeXBlR3JvdXBbcF0uc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAocyA9IDA7IHMgPCBoLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBoW3NdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJ6L+Z5Liq6aKc6Imy5LqG77yM6KaB5om+5Yiw5Zy65LiK55qE6aKc6Imy5L+u5pS55oiQ5pyJ55qEXCIsIHYpO1xuICAgICAgICAgICAgICAgIGUuc2V0U3VycGx1c0NvbG9yKHYsIGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKFwiZ2V0Qm94R3JvdXAgc3RhcnQzIFwiLCAkbGV2ZWxVdGlsLmRlZmF1bHQuZGVlcENvcHkoZS5ib3hUeXBlR3JvdXApKTtcbiAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIGUuc2V0SXRlbVRvQm94KG8sIHQsICEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yIChzID0gMDsgcyA8IG87IHMrKykge1xuICAgICAgICAgICAgICAgIGUuaXRlbVN1cHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS51cGRhdGVJdGVtUXVldWUoKTtcbiAgICAgICAgICAgIGUuc3RhdGUgPSBsLndhaXRUb3VjaDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRTdXJwbHVzQ29sb3IgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuaXRlbVF1ZXVlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICBpZiAoIWVbb10pIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMuaXRlbVF1ZXVlW29dO1xuICAgICAgICAgICAgICAgIGlmICh0ID09IGlbdGhpcy5tX2lkXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuZ2V0U3VycGx1c0NvbG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/mOWJqeS9meaciVwiLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm94VHlwZUdyb3VwW3JdWzBdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpW3RoaXMubV9pZF0gPSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBTdHJpbmcoTnVtYmVyKHIpICsgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpLmdldENoaWxkQnlOYW1lKFwic3BcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMuaW1hZ2UuZ2V0Q2hpbGRCeU5hbWUobik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAoYS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5maWx0ZXJCb3hUeXBlR3JvdXBBcnIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAwICE9IHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubmV3UmV2aXZlQW5pbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5pc1Jldml2aW5nKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1Jldml2aW5nID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc3RhclNwaW5lLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5pdGVtUXVldWUubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdC5pdGVtUXVldWVbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9ICRsZXZlbFV0aWwuZGVmYXVsdC5nZXRSYW5kb21JbnQoMSwgOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnNldENvbG9ySXRlbUltZ19yZXZpdmUoaSwgbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgICAgICAyLjJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEuNSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZGljdC5zdGFyU3BpbmUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gTWF0aC5taW4oNCwgdC53YWl0TGlzdC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0LndhaXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0LmdldEJveE9jY3VweVBvcyhyKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBuIC09IHJbdC5tX29jY3VweV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHJbdC5tX2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBvLmNvbmNhdChuZXcgQXJyYXkobikuZmlsbChhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHQuaXRlbVF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzWyhjID0gKG0gPSB0Lml0ZW1RdWV1ZVtpXSlbdC5tX2lkXSldIHx8IChzW2NdID0gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzW2NdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiBzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNbY10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmJveFR5cGVHcm91cFtjXS5wdXNoKHNbY10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbG9yU29ydFwiLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtUXVldWVcIiwgdC5pdGVtUXVldWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHQuaXRlbVF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobSA9IHQuaXRlbVF1ZXVlW2ldKS5tX3NoYWRvdy5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQuaXRlbVF1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgICAgIHQubmV4dE5lZWRBZGRfbmV3ID0gbztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBoID0gdC5pdGVtUG9zTGlzdC5sZW5ndGg7IGwgPCBoOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5uZXh0TmVlZEFkZF9uZXcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB0Lm5leHROZWVkQWRkX25ldy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Qm94R3JvdXAocCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdC5nZXRJdGVtVHlwZSgtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gdS5udW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IHQuY3JlYXRlSXRlbShnLCBOdW1iZXIocCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsICsgaSA+PSBoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gbCArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbCArPSBkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlICYmICgociA9IHQud2FpdExpc3RbaV0pLCAhdC5jaGVja0JveFRha2VJdGVtKHIpKTsgaSsrKSB7fVxuICAgICAgICAgICAgICAgICAgICB0LmlzUmV2aXZpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXZpdmVBbmltID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmlzUmV2aXZpbmcpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzUmV2aXZpbmcgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC5zdGFyU3BpbmUuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lml0ZW1RdWV1ZS5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0Lml0ZW1RdWV1ZVtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gJGxldmVsVXRpbC5kZWZhdWx0LmdldFJhbmRvbUludCgxLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc2V0Q29sb3JJdGVtSW1nX3Jldml2ZShpLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgIDIuMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMS41KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5kaWN0LnN0YXJTcGluZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBNYXRoLm1pbig0LCB0LndhaXRMaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQud2FpdExpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQuZ2V0Qm94T2NjdXB5UG9zKHIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gLT0gclt0Lm1fb2NjdXB5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gclt0Lm1faWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IG8uY29uY2F0KG5ldyBBcnJheShuKS5maWxsKGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdC5pdGVtUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAoYyA9IHQuaXRlbVF1ZXVlW2ldKVt0Lm1faWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5ib3hUeXBlR3JvdXBbYV0ubGVuZ3RoIHx8ICh0LmJveFR5cGVHcm91cFthXSA9IFswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2ldICYmICh0LmJveFR5cGVHcm91cFthXVswXSArPSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbG9yU29ydFwiLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtUXVldWVcIiwgdC5pdGVtUXVldWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gb1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Lml0ZW1RdWV1ZVtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdC5pdGVtUXVldWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBTdHJpbmcoTnVtYmVyKHMpICsgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNbdC5tX2lkXSA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5uYW1lID0gU3RyaW5nKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gYy5nZXRDaGlsZEJ5TmFtZShcInNwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gdC5pbWFnZS5nZXRDaGlsZEJ5TmFtZShsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmJveFR5cGVHcm91cFtzXVswXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09IHQuYm94VHlwZUdyb3VwW3NdWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuYm94VHlwZUdyb3VwW3NdLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHROZWVkQWRkLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0Lml0ZW1RdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rWL6K+VXCIsIHQuZ2V0U3VycGx1c0NvbG9yKCkpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gdC5pdGVtUXVldWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBvW2ldIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChzID0gY1t0Lm1faWRdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodC5ib3hUeXBlR3JvdXBbc10ubGVuZ3RoICYmIHQuYm94VHlwZUdyb3VwW3NdWzBdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHMgPSB0LmdldFN1cnBsdXNDb2xvcigpKSwgY29uc29sZS5sb2coXCLov5jliankvZnmnIlcIiwgcyksICh0LmJveFR5cGVHcm91cFtzXVswXSAtPSAxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNbdC5tX2lkXSA9IHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsID0gU3RyaW5nKE51bWJlcihzKSArIDEwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGggPSBjLmdldENoaWxkQnlOYW1lKFwic3BcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwID0gdC5pbWFnZS5nZXRDaGlsZEJ5TmFtZShsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGguZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiIGVuZDJcIiwgJGxldmVsVXRpbC5kZWZhdWx0LmRlZXBDb3B5KHQuYm94VHlwZUdyb3VwKSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIiBuZXh0TmVlZEFkZFwiLCB0Lm5leHROZWVkQWRkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGUgJiYgKChyID0gdC53YWl0TGlzdFtpXSksICF0LmNoZWNrQm94VGFrZUl0ZW0ocikpOyBpKyspIHt9XG4gICAgICAgICAgICAgICAgICAgIHQuaXNSZXZpdmluZyA9ICExO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFN1cnBsdXNDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmJveFR5cGVHcm91cFwiLCB0aGlzLmJveFR5cGVHcm91cCk7XG4gICAgICAgIGZvciAodmFyIHQgPSAxOyB0IDwgOTsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuYm94VHlwZUdyb3VwW3RdO1xuICAgICAgICAgICAgaWYgKGUgJiYgZVswXSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtvXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldENvbG9ySXRlbUltZ19yZXZpdmUgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IFN0cmluZyhOdW1iZXIodCkgKyAxMCk7XG4gICAgICAgIHZhciBpID0gZS5nZXRDaGlsZEJ5TmFtZShcInNwXCIpO1xuICAgICAgICB2YXIgciA9IGdhbWUuZHJpbmtBdGxhcztcbiAgICAgICAgaS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHIuZ2V0U3ByaXRlRnJhbWUodGhpcy5mb2xkZXIgKyBcIl9cIiArIG8pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0U3ByaXRlRnJhbWVCeUF0bGFzID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGksIHIpIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwienFkZG5femhiL3RleHR1cmUvXCIgKyB0LCBjYy5TcHJpdGVBdGxhcywgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUgKyBcIuS4jeWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkobi5nZXRTcHJpdGVGcmFtZShvLmZvbGRlciArIFwiX1wiICsgZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZW50ZXJLZXlJbnB1dCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHN3aXRjaCAodC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmNfY2hvb3NlQ2xlYXIoKTtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY19zb3J0KCk7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS54OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmNfcmV2aXZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfX2RlY29yYXRlKFt2XSwgZSk7XG59KSgkYnJhaW5MZXZlbEJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBrO1xudmFyIEEgPSBbXG4gICAge1xuICAgICAgICB4OiAyMjAsXG4gICAgICAgIHk6IDg2NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyMjAsXG4gICAgICAgIHk6IDgwMFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyMjAsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAxNjUsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAxMTAsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiA1NSxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtNTUsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMTEwLFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTE2NSxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0yMjAsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMjIwLFxuICAgICAgICB5OiA2OTVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTIyMCxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0xNjUsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMTEwLFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTU1LFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDU1LFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMTEwLFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMTY1LFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA2MDAuMjIzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogNTYwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDE2NSxcbiAgICAgICAgeTogNTYwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDExMCxcbiAgICAgICAgeTogNTYwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDU1LFxuICAgICAgICB5OiA1NjBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogNTYwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDUwMC43MzJcbiAgICB9XG5dO1xuIl19