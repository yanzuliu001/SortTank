
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-29071.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f99f1RwUnVPL64T4RHubkY+', 'Level-29071');
// script/scripts/Level-29071.js

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
  "3-1": [[0, 60.8], [0, 14], [0, -33.5]],
  "2-2": [[-22, 37], [22.8, 37], [-22, -8.8], [22.8, -8.8]],
  "3-2": [[-22.5, 60.5], [22.5, 60.5], [-22.5, 13.5], [22.5, 13.5], [-22.5, -33], [22.5, -33]]
};

(function (t) {
  t[t.None = 0] = "None";
  t[t.Empty = 1] = "Empty";
  t[t.Animation = 2] = "Animation";
  t[t.Occupy = 3] = "Occupy";
  t[t.OccupyAnimation = 4] = "OccupyAnimation";
  t[t.FinishAnimation = 5] = "FinishAnimation";
  t[t.Finish = 6] = "Finish";
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
    e.lines = 5;
    e.cols = 4;
    e._state = l.waitTouch;
    e.m_hierarchy = Symbol("m_hierarchy");
    e.m_index = Symbol("m_index");
    e.m_posIndex = Symbol("m_posIndex");
    e.m_type = Symbol("m_type");
    e.mTween = Symbol("mTween");
    e.m_state = Symbol("m_state");
    e.mStartPos = Symbol("mStartPos");
    e.m_place = Symbol("m_place");
    e.m_arrive = Symbol("m_arrive");
    e.m_have = Symbol("m_have");
    e.m_limit = Symbol("m_limit");
    e.m_wait = Symbol("m_wait");
    e.m_block = Symbol("m_block");
    e.m_col = Symbol("m_col");
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
    e.standLayer = null;
    e.placeLayer = null;
    e.touchNode = null;
    e.guideNodes = [];
    e.currentGuideNode = null;
    e.guideText = ["点击盒子可上去装对应颜色的饮料", "大盒子可以装8杯饮料", "中盒子可以装6杯饮料", "小盒子可以装4杯饮料"];
    e.guidedNodes = [];
    e.types = [];
    e.levelTotal = 0;
    e.level_config = null;
    e.boxDataObjects = [];
    e.itemPosList = [];
    e.boxNumArr = [];
    e.boxTypeArr = [];
    e.boxMap = new Map();
    e.boxQueue = [];
    e.boxTypeGroup = {};
    e.boxGrids = null;
    e.boxGridPos = [];
    e.box_spacing_y = 0;
    e.boxPosList = [];
    e.boxUnitTime = 0.2;
    e.guideLevelColor = [6, 1, 4, 8];
    e.nextNeedAdd2Index = 0;
    e.nextNeedAdd2 = [];
    e.isCheck = !1;
    e.drinkArr = [];
    e.itemQueue = [];
    e.noAmount = [];
    e.clearNum = 0;
    e.poolMgr = new $poolMgr["default"]();
    e.isReviving = !1;
    e.nextNeedAdd = [];
    e.nextNeedAdd_new = [];
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
    this.dict.boxGrids.children.map(function (e) {
      t.push({
        x: e.x,
        y: e.y
      });
    });
    cc.log(JSON.stringify(t));
  };

  e.prototype.createSprite = function () {
    if (this.folder) {//
    } else {
      this.folder = "f28749";
    }

    var t = function t(_t, e) {
      if (!_t.getChildByName(e)) {
        var o = new cc.Node(e);

        _t.addChild(o);

        o.addComponent(cc.Sprite);
        return o;
      }
    };

    var e = cc.find("game/image", this.node);

    var o = function o(_o, i, r) {
      if (void 0 === r) {
        r = 0;
      }

      for (var n = _o; n <= i; n++) {
        t(e, String(n));
      }

      if (0 != r) {
        for (n = _o + r; n <= i + r; n++) {
          t(e, String(n));
        }
      }
    };

    o(11, 18);

    (function () {
      for (var o = 11; o <= 18; o++) {
        t(e, String(o) + "_1");
      }
    })();

    o(101, 103);
    o(201, 203);
    o(301, 303);
    o(401, 403);
    o(501, 503);
    o(601, 603);
    o(701, 703);
    o(801, 803);
    cc.find("game/pres", this.node);
  };

  e.prototype.onLoad = function () {
    this.createSprite();
    t.prototype.onLoad.call(this);
    this.initLevel();
    this.dict.prop_clear_box.x = -88.236;
    this.cwNode.opacity = 0;
    this.dict.shadow.opacity = 150;
  };

  e.prototype.initLevel = function () {
    var t = this;
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
    this.standLayer = this.dict.standLayer;
    this.placeLayer = this.dict.placeLayer;
    this.placeLayer.children.forEach(function (t) {
      return t.active = !1;
    });
    this.touchNode = this.dict.touchNode;
    this.standLayer.children.forEach(function (e) {
      return e[t.m_state] === _.Empty;
    });

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
        this.initProgress();
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
      var o = [];
      var i = e.centersquare;
      var r = [3, 4, 6];

      for (var n = 0; n < i.length; n++) {
        var a = i[n];

        for (var s = 0; s < a; s++) {
          var l = r[n];
          o.push(l);
        }
      }

      var h = e.boxConfig;
      var p = Array.from({
        length: o.length
      }, function () {
        return 0;
      });
      var d = p.length;

      var g = function g(e, o) {
        var i = h.findIndex(function (t) {
          var o = t[0];
          return e <= d * o / 100;
        });

        if (i >= 0) {
          var r = h[i][1];
          var n = [];

          for (var a = r[0]; a <= r[1]; a++) {
            n.push(a);
          }

          n = t.shuffleArray(n);

          for (var s = $levelUtil["default"].getRandomValueInArray(n); s === o;) {
            s = $levelUtil["default"].getRandomValueInArray(n);
          }

          return s;
        }
      };

      var m = -1;

      for (n = 0; n < p.length; n++) {
        if (0 === p[n]) {
          l = g(n, m);
          p[n] = l;
          m = l;
        }
      }

      $levelUtil["default"].fisherYatesShuffle(o);
      this.boxNumArr = __spreadArrays(o);
      this.boxTypeArr = __spreadArrays(p);
      cc.log("盒子 数量：", $levelUtil["default"].deepCopy(this.boxNumArr));
      cc.log("盒子 类型：", $levelUtil["default"].deepCopy(this.boxTypeArr));
      var f = {};
      p.forEach(function (e, i) {
        var r = o[i];
        t.levelTotal += r;

        if (-28807 == t.levelID) {
          e = t.guideLevelColor[i];
        }

        if (f[e]) {//
        } else {
          f[e] = [];
        }

        f[e].push(r);
      });
      cc.log("饮料总数：", this.levelTotal);

      var v = function v(e) {
        var o = [];
        f[e].forEach(function (e) {
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
        y.boxTypeGroup[i] = [];
        o.forEach(function (e) {
          return t.boxTypeGroup[i].push(Number(e));
        });
      };

      var y = this;

      for (var C in f) {
        v(C);
      }
    }

    N.forEach(function (e) {
      t.itemPosList.push(cc.v2(e.x, e.y));
    });
    this.itemPosList.reverse();
  };

  e.prototype.initBoxLayer = function () {
    var t = this;
    this.boxGrids = this.dict.boxGrids;
    var e = [];
    A.forEach(function (t) {
      e.push(cc.v2(t.x, t.y));
    });

    if (0 === this.boxGridPos.length) {
      this.boxGridPos = __spreadArrays(e);
    }

    this.box_spacing_y = 120;
    this.boxGridPos.forEach(function (e) {
      var o = t.boxGrids.convertToWorldSpaceAR(e);
      var i = t.boxLayer.convertToNodeSpaceAR(o).add(cc.v2(0, 0));
      t.boxPosList.push(i);
      var r = t.createBox(i);
      t.scheduleOnce(function () {
        t.goInMap(r);
      });
    });
    this.touchNode.active = !1;
    this.scheduleOnce(function () {
      t.touchNode.active = !0;
    }, (this.lines + 1) * this.boxUnitTime);
  };

  e.prototype.goInMap = function (t, e) {
    var o = this;

    if (void 0 === e) {
      e = 0;
    }

    var i = this.lines;
    var r = this.boxUnitTime;
    var n;

    if (e > 0) {
      n = e;
    } else {
      n = i * r;
    }

    var a = t.y;
    t.y = a - this.box_spacing_y * i;
    t.opacity = 255;
    this.boxRun(t);
    cc.tween(t).to(n, {
      y: a
    }).call(function () {
      o.boxIdle(t);
    }).start();
  };

  e.prototype.createBox = function (t) {
    if (0 !== this.boxTypeArr.length && 0 !== this.boxNumArr.length) {
      var e = this.boxTypeArr.shift();
      var o = this.boxNumArr.shift();
      var i = 1;

      switch (e) {
        case 1:
          i = 2;
          break;

        case 2:
          i = 8;
          break;

        case 3:
          i = 1;
          break;

        case 4:
          i = 3;
          break;

        case 5:
          i = 4;
          break;

        case 6:
          i = 6;
          break;

        case 7:
          i = 7;
          break;

        case 8:
          i = 5;
      }

      var r = String(e);
      var n = this.boxLayer;
      var a = this.dict.pre_box;
      var s = cc.instantiate(a);
      s.parent = n;
      s.position = t;
      s.name = r;
      s.m_spineID = this.getSpineIDByNum(o);
      this.scheduleOnce(function () {
        var t = s.getChildByName("spine").getComponent(sp.Skeleton);
        t.setSkin("skin" + i);
        t.setAnimation(0, "daiji" + s.m_spineID, !0);
      });
      s[this.m_limit] = o;
      s[this.m_have] = 0;
      s[this.m_arrive] = [];
      s[this.m_block] = this.getBlock(s);
      s[this.m_state] = y.Empty;
      s[this.m_type] = e;
      s[this.m_index] = n.childrenCount;
      s[this.m_col] = this.getBoxCol(s);
      s.opacity = 0;
      this.setBoxIndex(s, 3);
      this.boxQueue.push(s);
      return s;
    }
  };

  e.prototype.getBoxLine = function (t) {
    var e = this.boxPosList[0];
    var o = this.boxPosList[this.cols];
    var i = t.y;

    var r = function r(t) {
      return Math.abs(t.y - i);
    };

    if (r(e) < 5) {
      return 1;
    } else {
      if (r(o) < 5) {
        return 2;
      } else {
        return 3;
      }
    }
  };

  e.prototype.getBoxCol = function (t) {
    for (var e = 0; e < this.cols; e++) {
      var o = this.boxPosList[e];

      if (Math.abs(t.x - o.x) < 5) {
        return e;
      }
    }

    return -1;
  };

  e.prototype.getColsBox = function (t) {
    var e = this;
    var o = this.getColFirstPos(t).x;
    var i = [];
    this.boxLayer.children.map(function (r) {
      if (t != r && t[e.m_state] != y.Empty) {
        var n = r.x - o;

        if (Math.abs(n) < 5) {
          i.push(r);
        }
      }
    });
    return i;
  };

  e.prototype.getColFirstPos = function (t) {
    var e = t[this.m_col];
    return this.boxPosList[e];
  };

  e.prototype.updateBoxColView = function (t) {
    var e = this;
    var o = this.box_spacing_y;
    var i = this.getColFirstPos(t);
    var r = this.boxUnitTime;
    var n = this.getColsBox(t);

    if (n.length) {
      n.sort(function (t, o) {
        return t[e.m_index] - o[e.m_index];
      });
      n.forEach(function (t) {
        i.y;
        e.box_spacing_y;
        t[e.m_state] = y.Animation;
        e.boxRun(t);
        cc.tween(t).by(r, {
          y: o
        }).call(function () {
          e.boxIdle(t);
          t[e.m_block] = e.getBlock(t);
          t[e.m_state] = y.Empty;
        }).start();
      });

      var a = __spreadArrays(n);

      a.sort(function (t, e) {
        return t.y - e.y;
      });
      var s = i.x;
      var l = a[0].y;
      var h = this.createBox(cc.v2(s, l));

      if (h) {
        this.scheduleOnce(function () {
          e.goInMap(h, e.boxUnitTime);
        });
      }
    }
  };

  e.prototype.getBlock = function (t) {
    return this.getBoxLine(t);
  };

  e.prototype.setBoxIndex = function (t, e) {
    if (void 0 === e) {
      e = 1;
    }

    if (1 == e) {
      t.zIndex = 3e3 - t.y;
    } else {
      if (2 == e) {
        t.zIndex = 4e3 - t.y + this.clearNum;
      } else {
        3 == e && (t.zIndex = 5e3 - t.y + this.clearNum);
      }
    }
  };

  e.prototype.getSpineIDByNum = function (t) {
    return [3, 4, 6].indexOf(t) + 1;
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

  e.prototype.setBoxSP = function (t, e) {
    t.getChildByName("sp").getComponent(cc.Sprite).spriteFrame = this.loadSpriteFrame(e);
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

    var o = function o(_o2) {
      var r = e[_o2];
      var n = i.boxMap.get(r);

      if (0 === _o2) {
        n.forEach(function (e) {
          if (e[t.m_state] === y.Empty) {
            e[t.m_block] = 1;
          }
        });
      } else {
        n.forEach(function (i) {
          if (i[t.m_state] === y.Empty) {
            i[t.m_block] = 1;

            for (var r = t.getBoxBoundingBox(i), n = _o2 - 1; n >= 0; n--) {
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
            e.getChildByName("sp").color = cc.color().fromHEX("#B2B1B1");
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

    var e = this.getBoxRemainNum(t);
    var o = this.itemQueue[0];
    var i = !1;

    if (o[this.m_state] === C.Idle && o[this.m_type] === t[this.m_type] && e > 0) {
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
    this.setBoxIndex(t, 2);
    this.scheduleOnce(function () {
      t.isClearBox;
      e.playLevelSound("Full");
      e.playEffect(t, function () {
        e.deleteFromArray(t, e.waitList);

        if (t[e.m_wait]) {
          t[e.m_wait][e.m_state] = _.Empty;
          t[e.m_wait] = null;
        }

        e.setClearNum(o);
        var i = t.getChildByName("spine");
        i.scaleX = -1;
        $levelUtil["default"].playSpineCallBack(i, "likai", !0);
        cc.tween(t).by(0.5, {
          x: 1e3
        }).call(function () {
          t.active = !1;
          t.destroy();
          t.parent = null;
          e.checkWin();
        }).start();
      });
    });
  };

  e.prototype.playEffect = function (t, e) {
    var o = this;
    t.zIndex = 1e4;
    var i = this.getBoxOccupyPos(t).length;
    var r = this.dict.packingBox1;

    if (i >= 4 && i < 6) {
      r = this.dict.packingBox2;
    } else {
      if (i >= 6) {
        r = this.dict.packingBox3;
      }
    }

    var n = cc.instantiate(r);
    n.scale = 1.05;
    n.active = !0;
    n.name = "effect";
    var a = t[this.m_wait];
    this.effectLayer.addChild(n);
    n.position = $levelUtil["default"].convertPosition(a, n);
    n.zIndex = 300;
    var s = n.children[0].getComponent(sp.Skeleton);
    s.timeScale = 1.5;
    $levelUtil["default"].playSpineCallBack(s, "animation", !1, function () {});
    this.scheduleOnce(function () {
      var i = t[o.m_place];
      i.active = !1;

      for (var r = i.getChildByName("item"); r.childrenCount;) {
        o.putItemToPool(r.children[0]);
      }

      o.setBoxIndex(t, 1);
      o.boxRun(t);
      cc.tween(t).by(0.2, {
        y: 100
      }).call(function () {
        n.active = !1;
        n.removeFromParent(!0);

        if (e) {
          e();
        }
      }).start();
    }, 0.4);
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

    if (e) {
      var n = e[this.m_index];
      var a = this.standLayer.children[n];
      var s = this.placeLayer.children[n];
      t[this.m_place] = s;
      var c = 100 * t[this.m_type] + this.getSpineIDByNum(t[this.m_limit]);
      this.setBoxIndex(t, 1);
      var l = $levelUtil["default"].convertPosition(a, t);
      this.boxRun(t);
      cc.tween(t).to(0.4, {
        position: l.add(cc.v2(0, 10))
      }).call(function () {
        i.setBoxIndex(t, 1);
        $levelUtil["default"].playSpineCallBack(t.getChildByName("spine"), "zhan", !0);
        t.flySuc = !0;
        s.active = !0;
        s.getChildByName("sp").getComponent(cc.Sprite).spriteFrame = i.loadSpriteFrame(String(c));

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

  e.prototype.boxRun = function (t) {
    $levelUtil["default"].playSpineCallBack(t.getChildByName("spine"), "pao" + t.m_spineID, !0);
  };

  e.prototype.boxIdle = function (t) {
    $levelUtil["default"].playSpineCallBack(t.getChildByName("spine"), "daiji" + t.m_spineID, !0);
  };

  e.prototype.getBoxOccupyPos = function (t) {
    var e = this.getBoxTypeByName(t[this.m_limit]);
    return S[e];
  };

  e.prototype.getBoxTypeByName = function (t) {
    var e = "";

    if (3 === t) {
      e = "3-1";
    } else {
      if (4 === t) {
        e = "2-2";
      } else {
        6 === t && (e = "3-2");
      }
    }

    return e;
  };

  e.prototype.boxIsEmpty = function (t) {
    return t[this.m_state] === y.Empty;
  };

  e.prototype.getBoxGroup = function (t, e) {
    if (void 0 === e) {
      e = -1;
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

    for (console.log("饮料：total", e); t < e;) {
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
          return e.getBoxOccupyPos(t).length - t[e.m_have] - (e.getBoxOccupyPos(o).length - o[e.m_have]);
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
      var r = e[this.m_place].getChildByName("item");
      var n = this.getBoxOccupyPos(e);
      var a = n.length;
      var s = n[e[this.m_have]];
      var c = cc.v2(s[0], s[1]);
      var l = r.convertToWorldSpaceAR(c);
      var h = t.parent.convertToNodeSpaceAR(l);
      e[this.m_have]++;

      if (this.getBoxRemainNum(e) <= 0) {
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
        var o = 10 + t[i.m_type];
        e.spriteFrame = i.loadSpriteFrame(o + "_1");
        i.changeParent(t, r);
      }).to(0.1, {
        scale: 1
      }).call(function () {
        i.addToArray(t, e[i.m_arrive]);

        if (e[i.m_arrive].length >= a) {
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
    a[this.m_type] = e;
    a[this.m_posIndex] = t;
    a.name = String(e);
    var s = a.getChildByName("sp");
    var c = this.image.getChildByName(r);
    s.getComponent(cc.Sprite).spriteFrame = c.getComponent(cc.Sprite).spriteFrame;
    this.setItemIndex(a);
    this.itemQueue.push(a);
    var l = a.getChildByName("shadow");
    l.active = !0;
    l.setPosition(-18, -18);
    this.changeParent(l, this.shadowLayer);
    l.m_follow = a;
    var h = l.parent.convertToWorldSpaceAR(l.position);
    var p = a.parent.convertToWorldSpaceAR(a.position);
    l.m_follow_wVec = p.sub(h);
    a.m_shadow = l;
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
      t = !1;
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
        var n = t[e.m_type];
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

        i[n] += o * t[e.m_limit];
      }
    });
    var n = o.waitWeight;
    this.waitList.forEach(function (t) {
      var o = t[e.m_type];
      var r = (t[e.m_limit] - t[e.m_have]) * n;
      i[o] += r;
    });

    if (t) {
      var a = o.queueWeight;
      this.itemQueue.forEach(function (t) {
        var o = t[e.m_type];
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
      i[o.m_index] = _e;
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

      var n = o.placeLayer.children[_e];

      if (n) {//
      } else {
        (n = cc.instantiate(o.placeLayer.children[0])).parent = o.placeLayer;
      }

      n.position = $levelUtil["default"].convertPosition(i, n);
      n.active = !1;
    };

    var o = this;

    for (var i = 0; i < this.waitLayer.children.length; i++) {
      e(i);
    }

    this.placeLayer.active = !0;
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
    o.removeFromParent(!0);
    t[this.m_state] = _.Empty;
    var i = this.standLayer.children[t[this.m_index]];
    i.active = !0;
    i.scale = 0;
    cc.tween(i).to(0.1, {
      scale: 1
    }).start();
    var r = cc.instantiate(this.dict.jiesuo);
    r.active = !0;
    r.parent = t;
    r.position = cc.v2();
    $levelUtil["default"].playSpineCallBack(r, "animation", !1, function () {
      r.active = !0;
      r.removeFromParent(!0);
    });
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
    var r = [];

    for (var n = 0; n < o.length; n++) {
      var a = o[n];

      if (a[this.m_state] === y.Empty && a.getChildByName("box").getBoundingBoxToWorld().contains(t)) {
        if (1 == a[this.m_block]) {
          i.push(a);
        } else {
          r.push(a);
        }
      }
    }

    if (i.length) {
      return i.sort(function (t, o) {
        return t[e.m_index] - o[e.m_index];
      }), i[0];
    } else {
      return r.length && (r.sort(function (t, o) {
        return o[e.m_index] - t[e.m_index];
      }), r[0].runAction(this.shackAction(0.1, 2))), null;
    }
  };

  e.prototype.initEvent = function () {
    var t = this;
    var e = null;
    $levelUtil["default"].touchEvent(this.touchNode, {
      sFunc: function sFunc(o) {
        t.playClickSound();

        if (t.state === l.waitTouch || t.state === l.prop_clear) {
          var i = o.getLocation();

          if (e = t.getTouchNode(i)) {
            if (t.state == l.waitTouch) {
              var r = t.getWait();

              if (r) {
                e[t.m_state] = y.Occupy;
                t.updateBoxState();
                t.setBoxToWait(e, r);
                t.updateBoxColView(e);
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
    return t[this.m_limit] - t[this.m_have];
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

    var s = t[this.m_type];

    for (var h = 0; h < a.length && (s !== (m = a[h])[this.m_type] || (n.push(m), this.deleteFromArray(m, this.itemQueue), 0 != --r)); h++) {}

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
      var e = t[o.m_limit];

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

          if (a === h[this.m_type]) {
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
      o -= t[e.m_have];
      console.log("消除道具", o);
      var i = t[e.m_type];
      var r = [];
      var n = new Array(o).fill(i);

      for (var a = 0; a < o; a++) {
        var s = e.itemQueue[a];
        r.push(s);
      }

      for (a = 0; a < e.itemQueue.length; a++) {
        var c = (s = e.itemQueue[a])[e.m_type];

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
          s[e.m_type] = h;
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

        if (t == i[this.m_type]) {
          var r = this.getSurplusColor();
          console.log("还剩余有", r);
          this.boxTypeGroup[r][0] -= 1;
          i[this.m_type] = r;
          var n = String(Number(r) + 10);
          var a = i.getChildByName("sp");
          var s = this.image.getChildByName(n);
          return void (a.getComponent(cc.Sprite).spriteFrame = s.getComponent(cc.Sprite).spriteFrame);
        }
      }
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
          n -= r[t.m_have];
          var a = r[t.m_type];
          o = o.concat(new Array(n).fill(a));
        }

        for (i = 0; i < t.itemQueue.length; i++) {
          a = (c = t.itemQueue[i])[t.m_type];
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
            c[t.m_type] = s;
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
          o[i] || (s = c[t.m_type], t.boxTypeGroup[s].length && t.boxTypeGroup[s][0] || (s = t.getSurplusColor(), console.log("还剩余有", s), t.boxTypeGroup[s][0] -= 1), c[t.m_type] = s, l = String(Number(s) + 10), h = c.getChildByName("sp"), p = t.image.getChildByName(l), h.getComponent(cc.Sprite).spriteFrame = p.getComponent(cc.Sprite).spriteFrame);
        }

        cc.log(" end2", $levelUtil["default"].deepCopy(t.boxTypeGroup));
        cc.log(" nextNeedAdd", t.nextNeedAdd);

        for (i = 0; i < e && (r = t.waitList[i], !t.checkBoxTakeItem(r)); i++) {}

        t.isReviving = !1;
      }).start();
    }
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
          n -= r[t.m_have];
          var a = r[t.m_type];
          o = o.concat(new Array(n).fill(a));
        }

        var s = {};

        for (i = 0; i < t.itemQueue.length; i++) {
          s[c = (m = t.itemQueue[i])[t.m_type]] || (s[c] = 0);
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
    for (var t = 1; t <= 8; t++) {
      var e = this.boxTypeGroup[t];

      if (e) {
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
    var r = this.image.getChildByName(o);
    i.getComponent(cc.Sprite).spriteFrame = r.getComponent(cc.Sprite).spriteFrame;
  };

  e.prototype.testLabel = function (t, e) {
    var o = t.getChildByName("labelNode");

    if (o) {//
    } else {
      (o = new cc.Node()).name = "labelNode";
      o.parent = t;
      o.position = cc.v2();
    }

    var i = o.getComponent(cc.Label);

    if (i) {//
    } else {
      i = o.addComponent(cc.Label);
    }

    i.string = e;
  };

  e.prototype.enterKeyInput = function (t) {
    switch (t.keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.s:
        return this.func_sort();

      case cc.macro.KEY.x:
    }
  };

  __decorate([v({
    type: cc.Integer,
    tooltip: "行"
  })], e.prototype, "lines", void 0);

  __decorate([v({
    type: cc.Integer,
    tooltip: "列"
  })], e.prototype, "cols", void 0);

  return __decorate([f], e);
}($brainLevelBase["default"]);

exports["default"] = k;
var A = [{
  x: -240,
  y: -50
}, {
  x: -80,
  y: -50
}, {
  x: 80,
  y: -50
}, {
  x: 240,
  y: -50
}, {
  x: -240,
  y: -170
}, {
  x: -80,
  y: -170
}, {
  x: 80,
  y: -170
}, {
  x: 240,
  y: -170
}, {
  x: -240,
  y: -290
}, {
  x: -80,
  y: -290
}, {
  x: 80,
  y: -290
}, {
  x: 240,
  y: -290
}, {
  x: -240,
  y: -410
}, {
  x: -80,
  y: -410
}, {
  x: 80,
  y: -410
}, {
  x: 240,
  y: -410
}, {
  x: -240,
  y: -530
}, {
  x: -80,
  y: -530
}, {
  x: 80,
  y: -530
}, {
  x: 240,
  y: -530
}, {
  x: -240,
  y: -650
}, {
  x: -80,
  y: -650
}, {
  x: 80,
  y: -650
}, {
  x: 240,
  y: -650
}];
var N = [{
  x: 220,
  y: 930
}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA3MS5qcyJdLCJuYW1lcyI6WyJpIiwibCIsIiRicmFpbkxldmVsQmFzZSIsInJlcXVpcmUiLCIkbGV2ZWxDb25zdGFudCIsIiRsZXZlbFJldml2ZUhlbHBlciIsIiRsZXZlbFV0aWwiLCIkcG9vbE1nciIsIm0iLCJjYyIsIl9kZWNvcmF0b3IiLCJmIiwiY2NjbGFzcyIsInYiLCJwcm9wZXJ0eSIsInQiLCJub25lIiwiaW5pdCIsIndhaXRUb3VjaCIsImNoZWNrV2luIiwicHJvcF9jbGVhciIsInByb3Bfc29ydCIsIm92ZXIiLCJ5IiwiQyIsIl8iLCJTIiwiTm9uZSIsIkVtcHR5IiwiQW5pbWF0aW9uIiwiT2NjdXB5IiwiT2NjdXB5QW5pbWF0aW9uIiwiRmluaXNoQW5pbWF0aW9uIiwiRmluaXNoIiwiSWRsZSIsIldhaXRDbGljayIsIldhaXQiLCJCb3giLCJTdWMiLCJMb2NrIiwiayIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImxpbmVzIiwiY29scyIsIl9zdGF0ZSIsIm1faGllcmFyY2h5IiwiU3ltYm9sIiwibV9pbmRleCIsIm1fcG9zSW5kZXgiLCJtX3R5cGUiLCJtVHdlZW4iLCJtX3N0YXRlIiwibVN0YXJ0UG9zIiwibV9wbGFjZSIsIm1fYXJyaXZlIiwibV9oYXZlIiwibV9saW1pdCIsIm1fd2FpdCIsIm1fYmxvY2siLCJtX2NvbCIsImVmZmVjdExheWVyIiwiZ3JpZExheWVyIiwiaXRlbUxheWVyIiwicHJvcExheWVyIiwicHJlcyIsImlzRGVidWciLCJiZyIsImdyaWRfYmciLCJub2RlRGljdCIsImNvbnRhaW5lciIsImxhYlByb2dyZXNzIiwicHJlX2JveCIsImltYWdlIiwid2FpdExheWVyIiwiYm94TGF5ZXIiLCJib3hTcGluZSIsIndhaXRMaXN0IiwiaXRlbUZpcnN0UG9zIiwic2hhZG93TGF5ZXIiLCJwcmVfaXRlbSIsInN0YW5kTGF5ZXIiLCJwbGFjZUxheWVyIiwidG91Y2hOb2RlIiwiZ3VpZGVOb2RlcyIsImN1cnJlbnRHdWlkZU5vZGUiLCJndWlkZVRleHQiLCJndWlkZWROb2RlcyIsInR5cGVzIiwibGV2ZWxUb3RhbCIsImxldmVsX2NvbmZpZyIsImJveERhdGFPYmplY3RzIiwiaXRlbVBvc0xpc3QiLCJib3hOdW1BcnIiLCJib3hUeXBlQXJyIiwiYm94TWFwIiwiTWFwIiwiYm94UXVldWUiLCJib3hUeXBlR3JvdXAiLCJib3hHcmlkcyIsImJveEdyaWRQb3MiLCJib3hfc3BhY2luZ195IiwiYm94UG9zTGlzdCIsImJveFVuaXRUaW1lIiwiZ3VpZGVMZXZlbENvbG9yIiwibmV4dE5lZWRBZGQySW5kZXgiLCJuZXh0TmVlZEFkZDIiLCJpc0NoZWNrIiwiZHJpbmtBcnIiLCJpdGVtUXVldWUiLCJub0Ftb3VudCIsImNsZWFyTnVtIiwicG9vbE1nciIsImlzUmV2aXZpbmciLCJuZXh0TmVlZEFkZCIsIm5leHROZWVkQWRkX25ldyIsIl9fZXh0ZW5kcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwiZ2V0Iiwic2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByaW50RGF0YSIsImRpY3QiLCJjaGlsZHJlbiIsIm1hcCIsInB1c2giLCJ4IiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZVNwcml0ZSIsImZvbGRlciIsImdldENoaWxkQnlOYW1lIiwibyIsIk5vZGUiLCJhZGRDaGlsZCIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsImZpbmQiLCJub2RlIiwiciIsIm4iLCJTdHJpbmciLCJvbkxvYWQiLCJjYWxsIiwiaW5pdExldmVsIiwicHJvcF9jbGVhcl9ib3giLCJjd05vZGUiLCJvcGFjaXR5Iiwic2hhZG93IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJmb3JFYWNoIiwiYWN0aXZlIiwidmlldyIsImdldEZyYW1lU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiX19hd2FpdGVyIiwiX19nZW5lcmF0b3IiLCJpbml0RGF0YSIsImluaXRHcmlkTGF5ZXIiLCJpbml0V2FpdExheWVyIiwiaW5pdEJveExheWVyIiwiaW5pdEl0ZW1MYXllciIsImluaXRFdmVudCIsImluaXRQcm9ncmVzcyIsImdhbWUiLCJNYXNrIiwiZW5hYmxlZCIsImhhbmRQb3MiLCJwYXJlbnQiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJwb3NpdGlvbiIsImluZGV4T2YiLCJoYW5kVGV4dCIsInN0cmluZyIsImhhbmQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImRlZXBDb3B5IiwibGV2ZWxKU09OIiwianNvbiIsImxldmVsSUQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJmaXNoZXJZYXRlc1NodWZmbGUiLCJjZW50ZXJzcXVhcmUiLCJhIiwicyIsImgiLCJib3hDb25maWciLCJwIiwiZCIsImciLCJmaW5kSW5kZXgiLCJzaHVmZmxlQXJyYXkiLCJnZXRSYW5kb21WYWx1ZUluQXJyYXkiLCJfX3NwcmVhZEFycmF5cyIsImdldFJhbmRvbUludGVnZXIiLCJOdW1iZXIiLCJOIiwidjIiLCJyZXZlcnNlIiwiQSIsImFkZCIsImNyZWF0ZUJveCIsInNjaGVkdWxlT25jZSIsImdvSW5NYXAiLCJib3hSdW4iLCJ0d2VlbiIsInRvIiwiYm94SWRsZSIsInN0YXJ0Iiwic2hpZnQiLCJpbnN0YW50aWF0ZSIsIm5hbWUiLCJtX3NwaW5lSUQiLCJnZXRTcGluZUlEQnlOdW0iLCJzcCIsIlNrZWxldG9uIiwic2V0U2tpbiIsInNldEFuaW1hdGlvbiIsImdldEJsb2NrIiwiY2hpbGRyZW5Db3VudCIsImdldEJveENvbCIsInNldEJveEluZGV4IiwiZ2V0Qm94TGluZSIsIk1hdGgiLCJhYnMiLCJnZXRDb2xzQm94IiwiZ2V0Q29sRmlyc3RQb3MiLCJ1cGRhdGVCb3hDb2xWaWV3Iiwic29ydCIsImJ5IiwiekluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJnZXRCb3hDbG9zZVNGTmFtZSIsImdldEJveE9wZW5TRk5hbWUiLCJnZXRCb3hBbmltSWQiLCJzZXRCb3hTUCIsInNwcml0ZUZyYW1lIiwibG9hZFNwcml0ZUZyYW1lIiwidXBkYXRlQm94U3RhdGUiLCJpbmNsdWRlcyIsImdldEJveEJvdW5kaW5nQm94IiwiaW50ZXJzZWN0cyIsImNvbG9yIiwiQ29sb3IiLCJXSElURSIsImZyb21IRVgiLCJnZXRCb3VuZGluZ0JveFRvV29ybGQiLCJyZWN0Iiwic2V0Qm94VG9XYWl0IiwiYWRkVG9BcnJheSIsImJveEZseSIsImNoZWNrQm94VGFrZUl0ZW0iLCJjaGVja0lzRmFpbCIsImZseVN1YyIsImdldEl0ZW1EYXRhIiwiaXRlbSIsImluRmlyc3RQb3MiLCJkZWxldGVGcm9tQXJyYXkiLCJzZXRJdGVtVG9Cb3giLCJpdGVtU3VwcGx5IiwidXBkYXRlSXRlbVF1ZXVlIiwiZ2V0Qm94UmVtYWluTnVtIiwic3ViIiwibWFnIiwiY2xlYXJCb3giLCJnZXRCb3hPY2N1cHlQb3MiLCJpc0NsZWFyQm94IiwicGxheUxldmVsU291bmQiLCJwbGF5RWZmZWN0Iiwic2V0Q2xlYXJOdW0iLCJzY2FsZVgiLCJwbGF5U3BpbmVDYWxsQmFjayIsImRlc3Ryb3kiLCJwYWNraW5nQm94MSIsInBhY2tpbmdCb3gyIiwicGFja2luZ0JveDMiLCJzY2FsZSIsImNvbnZlcnRQb3NpdGlvbiIsInRpbWVTY2FsZSIsInB1dEl0ZW1Ub1Bvb2wiLCJyZW1vdmVGcm9tUGFyZW50IiwiYyIsImdldEJveFR5cGVCeU5hbWUiLCJib3hJc0VtcHR5IiwiZ2V0Qm94R3JvdXAiLCJmaWxsIiwiY29uc29sZSIsImdldEl0ZW1UeXBlIiwidHlwZSIsIm51bSIsImNyZWF0ZUl0ZW0iLCJzdGF0ZSIsInN0b3BBbGxBY3Rpb25zIiwic3RvcCIsIml0ZW1Nb3ZlIiwiZGVsYXkiLCJzZXRJdGVtSW5kZXgiLCJ1IiwibV9zaGFkb3ciLCJiZXppZXJUbyIsImNoYW5nZVBhcmVudCIsImdldFdlaWdodCIsImxpbWl0UmFuayIsIm1pbiIsInNwbGl0IiwiY2hlY2tIYXNJdGVtQnlDb2xvciIsImFkZFNlbGYiLCJzZXRQb3NpdGlvbiIsIm1fZm9sbG93IiwibV9mb2xsb3dfd1ZlYyIsImJsb2NrV2VpZ2h0Iiwid2FpdFdlaWdodCIsInF1ZXVlV2VpZ2h0Iiwib25DbGlja0V2ZW50IiwiZW1pdCIsIkxFVkVMX0VWRU5UIiwiUkVXQVJEVklERU8iLCJ1bmxvY2tXYWl0Iiwiamllc3VvIiwiZnVuY19jaGVja191bmxvY2tXYWl0IiwiZnVuY191bmxvY2tXYWl0IiwiZ2V0V2FpdCIsImZhaWwiLCJ1cGRhdGUiLCJ1cGRhdGVTaGFkb3ciLCJpbml0R3VpZGVuY2UiLCJzeiIsInVuaW9uIiwicmVwZWF0Rm9yZXZlciIsInVwZGF0ZUd1aWRlbmNlIiwiZ2V0VG91Y2hOb2RlIiwiY29udGFpbnMiLCJydW5BY3Rpb24iLCJzaGFja0FjdGlvbiIsInRvdWNoRXZlbnQiLCJzRnVuYyIsInBsYXlDbGlja1NvdW5kIiwiZ2V0TG9jYXRpb24iLCJzZXRCb3hUb1Byb3BDbGVhciIsIm1GdW5jIiwiZUZ1bmMiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsImVudGVyS2V5SW5wdXQiLCJ1cGRhdGVQcm9ncmVzcyIsInRvRml4ZWQiLCJzb21lIiwic3VjIiwib25MZXZlbFJlYWR5IiwibW92ZUJ5Iiwic2VxdWVuY2UiLCJwbGF5UmlnaHQiLCJsb3NlIiwicGxheUVycm9yIiwicGxheUVycm9yT25jZSIsImxldmVsRmFpbEV2ZW50IiwiZnVuY19yZXZpdmUiLCJnZXRXb3JkUG9zIiwiZ2V0RGlzdGFuY2UiLCJzcGxpY2UiLCJvbkRpc2FibGUiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkRGVidWdEcmF3IiwidW5zY2hlZHVsZUFsbENhbGxiYWNrcyIsIm9mZiIsImluaXRQb29sIiwicHV0IiwiZnVuY19jaG9vc2VDbGVhciIsImZ1bmNfc29ydCIsIm5ld1Jldml2ZUFuaW0iLCJjbGVhciIsImdldFN1cnBsdXNDb2xvciIsInNldFN1cnBsdXNDb2xvciIsInJldml2ZUFuaW0iLCJzdGFyU3BpbmUiLCJzY2hlZHVsZSIsImdldFJhbmRvbUludCIsInNldENvbG9ySXRlbUltZ19yZXZpdmUiLCJjb25jYXQiLCJ0ZXN0TGFiZWwiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJfX2RlY29yYXRlIiwiSW50ZWdlciIsInRvb2x0aXAiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxDQUFKOztBQUNBLElBQUlDLGVBQWUsR0FBR0MsT0FBTyxDQUFDLGtCQUFELENBQTdCOztBQUNBLElBQUlDLGNBQWMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlFLGtCQUFrQixHQUFHRixPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUcsVUFBVSxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJSSxRQUFRLEdBQUdKLE9BQU8sQ0FBQyxXQUFELENBQXRCOztBQUNBLElBQUlLLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxDQUFDLFVBQVVDLENBQVYsRUFBYTtFQUNWQSxDQUFDLENBQUVBLENBQUMsQ0FBQ0MsSUFBRixHQUFTLENBQVgsQ0FBRCxHQUFrQixNQUFsQjtFQUNBRCxDQUFDLENBQUVBLENBQUMsQ0FBQ0UsSUFBRixHQUFTLENBQVgsQ0FBRCxHQUFrQixNQUFsQjtFQUNBRixDQUFDLENBQUVBLENBQUMsQ0FBQ0csU0FBRixHQUFjLENBQWhCLENBQUQsR0FBdUIsV0FBdkI7RUFDQUgsQ0FBQyxDQUFFQSxDQUFDLENBQUNJLFFBQUYsR0FBYSxDQUFmLENBQUQsR0FBc0IsVUFBdEI7RUFDQUosQ0FBQyxDQUFFQSxDQUFDLENBQUNLLFVBQUYsR0FBZSxDQUFqQixDQUFELEdBQXdCLFlBQXhCO0VBQ0FMLENBQUMsQ0FBRUEsQ0FBQyxD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LENBN0ZJLEVBaUdKO0VBQ0kyRyxDQUFDLEVBQUUsR0FEUDtFQUVJM0csQ0FBQyxFQUFFO0FBRlAsQ0FqR0ksRUFxR0o7RUFDSTJHLENBQUMsRUFBRSxHQURQO0VBRUkzRyxDQUFDLEVBQUU7QUFGUCxDQXJHSSxFQXlHSjtFQUNJMkcsQ0FBQyxFQUFFLEVBRFA7RUFFSTNHLENBQUMsRUFBRTtBQUZQLENBekdJLEVBNkdKO0VBQ0kyRyxDQUFDLEVBQUUsQ0FEUDtFQUVJM0csQ0FBQyxFQUFFO0FBRlAsQ0E3R0ksRUFpSEo7RUFDSTJHLENBQUMsRUFBRSxDQURQO0VBRUkzRyxDQUFDLEVBQUU7QUFGUCxDQWpISSxDQUFSIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBsO1xudmFyICRicmFpbkxldmVsQmFzZSA9IHJlcXVpcmUoXCIuL0JyYWluTGV2ZWxCYXNlXCIpO1xudmFyICRsZXZlbENvbnN0YW50ID0gcmVxdWlyZShcIi4vTGV2ZWxDb25zdGFudFwiKTtcbnZhciAkbGV2ZWxSZXZpdmVIZWxwZXIgPSByZXF1aXJlKFwiLi9sZXZlbFJldml2ZUhlbHBlclwiKTtcbnZhciAkbGV2ZWxVdGlsID0gcmVxdWlyZShcIi4vTGV2ZWxVdGlsXCIpO1xudmFyICRwb29sTWdyID0gcmVxdWlyZShcIi4vUG9vbE1nclwiKTtcbnZhciBtID0gY2MuX2RlY29yYXRvcjtcbnZhciBmID0gbS5jY2NsYXNzO1xudmFyIHYgPSBtLnByb3BlcnR5O1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdFsodC5ub25lID0gMCldID0gXCJub25lXCI7XG4gICAgdFsodC5pbml0ID0gMSldID0gXCJpbml0XCI7XG4gICAgdFsodC53YWl0VG91Y2ggPSAyKV0gPSBcIndhaXRUb3VjaFwiO1xuICAgIHRbKHQuY2hlY2tXaW4gPSAzKV0gPSBcImNoZWNrV2luXCI7XG4gICAgdFsodC5wcm9wX2NsZWFyID0gNCldID0gXCJwcm9wX2NsZWFyXCI7XG4gICAgdFsodC5wcm9wX3NvcnQgPSA1KV0gPSBcInByb3Bfc29ydFwiO1xuICAgIHRbKHQub3ZlciA9IDYpXSA9IFwib3ZlclwiO1xufSkobCB8fCAobCA9IHt9KSk7XG52YXIgeTtcbnZhciBDO1xudmFyIF87XG52YXIgUyA9IHtcbiAgICBcIjMtMVwiOiBbXG4gICAgICAgIFswLCA2MC44XSxcbiAgICAgICAgWzAsIDE0XSxcbiAgICAgICAgWzAsIC0zMy41XVxuICAgIF0sXG4gICAgXCIyLTJcIjogW1xuICAgICAgICBbLTIyLCAzN10sXG4gICAgICAgIFsyMi44LCAzN10sXG4gICAgICAgIFstMjIsIC04LjhdLFxuICAgICAgICBbMjIuOCwgLTguOF1cbiAgICBdLFxuICAgIFwiMy0yXCI6IFtcbiAgICAgICAgWy0yMi41LCA2MC41XSxcbiAgICAgICAgWzIyLjUsIDYwLjVdLFxuICAgICAgICBbLTIyLjUsIDEzLjVdLFxuICAgICAgICBbMjIuNSwgMTMuNV0sXG4gICAgICAgIFstMjIuNSwgLTMzXSxcbiAgICAgICAgWzIyLjUsIC0zM11cbiAgICBdXG59O1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdFsodC5Ob25lID0gMCldID0gXCJOb25lXCI7XG4gICAgdFsodC5FbXB0eSA9IDEpXSA9IFwiRW1wdHlcIjtcbiAgICB0Wyh0LkFuaW1hdGlvbiA9IDIpXSA9IFwiQW5pbWF0aW9uXCI7XG4gICAgdFsodC5PY2N1cHkgPSAzKV0gPSBcIk9jY3VweVwiO1xuICAgIHRbKHQuT2NjdXB5QW5pbWF0aW9uID0gNCldID0gXCJPY2N1cHlBbmltYXRpb25cIjtcbiAgICB0Wyh0LkZpbmlzaEFuaW1hdGlvbiA9IDUpXSA9IFwiRmluaXNoQW5pbWF0aW9uXCI7XG4gICAgdFsodC5GaW5pc2ggPSA2KV0gPSBcIkZpbmlzaFwiO1xufSkoeSB8fCAoeSA9IHt9KSk7XG4oZnVuY3Rpb24gKHQpIHtcbiAgICB0Wyh0Lk5vbmUgPSAwKV0gPSBcIk5vbmVcIjtcbiAgICB0Wyh0LklkbGUgPSAxKV0gPSBcIklkbGVcIjtcbiAgICB0Wyh0LldhaXRDbGljayA9IDIpXSA9IFwiV2FpdENsaWNrXCI7XG4gICAgdFsodC5XYWl0ID0gMyldID0gXCJXYWl0XCI7XG4gICAgdFsodC5Cb3ggPSA0KV0gPSBcIkJveFwiO1xuICAgIHRbKHQuQW5pbWF0aW9uID0gNSldID0gXCJBbmltYXRpb25cIjtcbiAgICB0Wyh0LlN1YyA9IDYpXSA9IFwiU3VjXCI7XG59KShDIHx8IChDID0ge30pKTtcbihmdW5jdGlvbiAodCkge1xuICAgIHRbKHQuTG9jayA9IDApXSA9IFwiTG9ja1wiO1xuICAgIHRbKHQuRW1wdHkgPSAxKV0gPSBcIkVtcHR5XCI7XG4gICAgdFsodC5PY2N1cHkgPSAyKV0gPSBcIk9jY3VweVwiO1xufSkoXyB8fCAoXyA9IHt9KSk7XG52YXIgayA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmxpbmVzID0gNTtcbiAgICAgICAgZS5jb2xzID0gNDtcbiAgICAgICAgZS5fc3RhdGUgPSBsLndhaXRUb3VjaDtcbiAgICAgICAgZS5tX2hpZXJhcmNoeSA9IFN5bWJvbChcIm1faGllcmFyY2h5XCIpO1xuICAgICAgICBlLm1faW5kZXggPSBTeW1ib2woXCJtX2luZGV4XCIpO1xuICAgICAgICBlLm1fcG9zSW5kZXggPSBTeW1ib2woXCJtX3Bvc0luZGV4XCIpO1xuICAgICAgICBlLm1fdHlwZSA9IFN5bWJvbChcIm1fdHlwZVwiKTtcbiAgICAgICAgZS5tVHdlZW4gPSBTeW1ib2woXCJtVHdlZW5cIik7XG4gICAgICAgIGUubV9zdGF0ZSA9IFN5bWJvbChcIm1fc3RhdGVcIik7XG4gICAgICAgIGUubVN0YXJ0UG9zID0gU3ltYm9sKFwibVN0YXJ0UG9zXCIpO1xuICAgICAgICBlLm1fcGxhY2UgPSBTeW1ib2woXCJtX3BsYWNlXCIpO1xuICAgICAgICBlLm1fYXJyaXZlID0gU3ltYm9sKFwibV9hcnJpdmVcIik7XG4gICAgICAgIGUubV9oYXZlID0gU3ltYm9sKFwibV9oYXZlXCIpO1xuICAgICAgICBlLm1fbGltaXQgPSBTeW1ib2woXCJtX2xpbWl0XCIpO1xuICAgICAgICBlLm1fd2FpdCA9IFN5bWJvbChcIm1fd2FpdFwiKTtcbiAgICAgICAgZS5tX2Jsb2NrID0gU3ltYm9sKFwibV9ibG9ja1wiKTtcbiAgICAgICAgZS5tX2NvbCA9IFN5bWJvbChcIm1fY29sXCIpO1xuICAgICAgICBlLmVmZmVjdExheWVyID0gbnVsbDtcbiAgICAgICAgZS5ncmlkTGF5ZXIgPSBudWxsO1xuICAgICAgICBlLml0ZW1MYXllciA9IG51bGw7XG4gICAgICAgIGUucHJvcExheWVyID0gbnVsbDtcbiAgICAgICAgZS5wcmVzID0gbnVsbDtcbiAgICAgICAgZS5pc0RlYnVnID0gITE7XG4gICAgICAgIGUuYmcgPSBudWxsO1xuICAgICAgICBlLmdyaWRfYmcgPSBudWxsO1xuICAgICAgICBlLm5vZGVEaWN0ID0ge307XG4gICAgICAgIGUuY29udGFpbmVyID0gbnVsbDtcbiAgICAgICAgZS5sYWJQcm9ncmVzcyA9IG51bGw7XG4gICAgICAgIGUucHJlX2JveCA9IG51bGw7XG4gICAgICAgIGUuaW1hZ2UgPSBudWxsO1xuICAgICAgICBlLndhaXRMYXllciA9IG51bGw7XG4gICAgICAgIGUuYm94TGF5ZXIgPSBudWxsO1xuICAgICAgICBlLmJveFNwaW5lID0gbnVsbDtcbiAgICAgICAgZS53YWl0TGlzdCA9IFtdO1xuICAgICAgICBlLml0ZW1GaXJzdFBvcyA9IG51bGw7XG4gICAgICAgIGUuc2hhZG93TGF5ZXIgPSBudWxsO1xuICAgICAgICBlLnByZV9pdGVtID0gbnVsbDtcbiAgICAgICAgZS5zdGFuZExheWVyID0gbnVsbDtcbiAgICAgICAgZS5wbGFjZUxheWVyID0gbnVsbDtcbiAgICAgICAgZS50b3VjaE5vZGUgPSBudWxsO1xuICAgICAgICBlLmd1aWRlTm9kZXMgPSBbXTtcbiAgICAgICAgZS5jdXJyZW50R3VpZGVOb2RlID0gbnVsbDtcbiAgICAgICAgZS5ndWlkZVRleHQgPSBbXG4gICAgICAgICAgICBcIueCueWHu+ebkuWtkOWPr+S4iuWOu+ijheWvueW6lOminOiJsueahOmlruaWmVwiLFxuICAgICAgICAgICAgXCLlpKfnm5LlrZDlj6/ku6Xoo4U45p2v6aWu5paZXCIsXG4gICAgICAgICAgICBcIuS4reebkuWtkOWPr+S7peijhTbmna/ppa7mlplcIixcbiAgICAgICAgICAgIFwi5bCP55uS5a2Q5Y+v5Lul6KOFNOadr+mlruaWmVwiXG4gICAgICAgIF07XG4gICAgICAgIGUuZ3VpZGVkTm9kZXMgPSBbXTtcbiAgICAgICAgZS50eXBlcyA9IFtdO1xuICAgICAgICBlLmxldmVsVG90YWwgPSAwO1xuICAgICAgICBlLmxldmVsX2NvbmZpZyA9IG51bGw7XG4gICAgICAgIGUuYm94RGF0YU9iamVjdHMgPSBbXTtcbiAgICAgICAgZS5pdGVtUG9zTGlzdCA9IFtdO1xuICAgICAgICBlLmJveE51bUFyciA9IFtdO1xuICAgICAgICBlLmJveFR5cGVBcnIgPSBbXTtcbiAgICAgICAgZS5ib3hNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGUuYm94UXVldWUgPSBbXTtcbiAgICAgICAgZS5ib3hUeXBlR3JvdXAgPSB7fTtcbiAgICAgICAgZS5ib3hHcmlkcyA9IG51bGw7XG4gICAgICAgIGUuYm94R3JpZFBvcyA9IFtdO1xuICAgICAgICBlLmJveF9zcGFjaW5nX3kgPSAwO1xuICAgICAgICBlLmJveFBvc0xpc3QgPSBbXTtcbiAgICAgICAgZS5ib3hVbml0VGltZSA9IDAuMjtcbiAgICAgICAgZS5ndWlkZUxldmVsQ29sb3IgPSBbNiwgMSwgNCwgOF07XG4gICAgICAgIGUubmV4dE5lZWRBZGQySW5kZXggPSAwO1xuICAgICAgICBlLm5leHROZWVkQWRkMiA9IFtdO1xuICAgICAgICBlLmlzQ2hlY2sgPSAhMTtcbiAgICAgICAgZS5kcmlua0FyciA9IFtdO1xuICAgICAgICBlLml0ZW1RdWV1ZSA9IFtdO1xuICAgICAgICBlLm5vQW1vdW50ID0gW107XG4gICAgICAgIGUuY2xlYXJOdW0gPSAwO1xuICAgICAgICBlLnBvb2xNZ3IgPSBuZXcgJHBvb2xNZ3IuZGVmYXVsdCgpO1xuICAgICAgICBlLmlzUmV2aXZpbmcgPSAhMTtcbiAgICAgICAgZS5uZXh0TmVlZEFkZCA9IFtdO1xuICAgICAgICBlLm5leHROZWVkQWRkX25ldyA9IFtdO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSwgXCJzdGF0ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfSk7XG4gICAgZS5wcm90b3R5cGUucHJpbnREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IFtdO1xuICAgICAgICB0aGlzLmRpY3QuYm94R3JpZHMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0LnB1c2goe1xuICAgICAgICAgICAgICAgIHg6IGUueCxcbiAgICAgICAgICAgICAgICB5OiBlLnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2MubG9nKEpTT04uc3RyaW5naWZ5KHQpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZVNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2xkZXIgPSBcImYyODc0OVwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIGlmICghdC5nZXRDaGlsZEJ5TmFtZShlKSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gbmV3IGNjLk5vZGUoZSk7XG4gICAgICAgICAgICAgICAgdC5hZGRDaGlsZChvKTtcbiAgICAgICAgICAgICAgICBvLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZSA9IGNjLmZpbmQoXCJnYW1lL2ltYWdlXCIsIHRoaXMubm9kZSk7XG4gICAgICAgIHZhciBvID0gZnVuY3Rpb24gKG8sIGksIHIpIHtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHIpIHtcbiAgICAgICAgICAgICAgICByID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIG4gPSBvOyBuIDw9IGk7IG4rKykge1xuICAgICAgICAgICAgICAgIHQoZSwgU3RyaW5nKG4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgwICE9IHIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG4gPSBvICsgcjsgbiA8PSBpICsgcjsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHQoZSwgU3RyaW5nKG4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG8oMTEsIDE4KTtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG8gPSAxMTsgbyA8PSAxODsgbysrKSB7XG4gICAgICAgICAgICAgICAgdChlLCBTdHJpbmcobykgKyBcIl8xXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgICBvKDEwMSwgMTAzKTtcbiAgICAgICAgbygyMDEsIDIwMyk7XG4gICAgICAgIG8oMzAxLCAzMDMpO1xuICAgICAgICBvKDQwMSwgNDAzKTtcbiAgICAgICAgbyg1MDEsIDUwMyk7XG4gICAgICAgIG8oNjAxLCA2MDMpO1xuICAgICAgICBvKDcwMSwgNzAzKTtcbiAgICAgICAgbyg4MDEsIDgwMyk7XG4gICAgICAgIGNjLmZpbmQoXCJnYW1lL3ByZXNcIiwgdGhpcy5ub2RlKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTcHJpdGUoKTtcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaW5pdExldmVsKCk7XG4gICAgICAgIHRoaXMuZGljdC5wcm9wX2NsZWFyX2JveC54ID0gLTg4LjIzNjtcbiAgICAgICAgdGhpcy5jd05vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuZGljdC5zaGFkb3cub3BhY2l0eSA9IDE1MDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmJnID0gdGhpcy5kaWN0LmJnO1xuICAgICAgICB0aGlzLml0ZW1MYXllciA9IHRoaXMuZGljdC5pdGVtTGF5ZXI7XG4gICAgICAgIHRoaXMuZWZmZWN0TGF5ZXIgPSB0aGlzLmRpY3QuZWZmZWN0TGF5ZXI7XG4gICAgICAgIHRoaXMuZ3JpZExheWVyID0gdGhpcy5kaWN0LmdyaWRMYXllcjtcbiAgICAgICAgdGhpcy5sYWJQcm9ncmVzcyA9IHRoaXMuZGljdC5sYWJQcm9ncmVzcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5kaWN0LmltYWdlO1xuICAgICAgICB0aGlzLndhaXRMYXllciA9IHRoaXMuZGljdC53YWl0TGF5ZXI7XG4gICAgICAgIHRoaXMuYm94TGF5ZXIgPSB0aGlzLmRpY3QuYm94TGF5ZXI7XG4gICAgICAgIHRoaXMuYm94U3BpbmUgPSB0aGlzLmRpY3QuYm94U3BpbmU7XG4gICAgICAgIHRoaXMucHJlX2l0ZW0gPSB0aGlzLmRpY3QucHJlX2l0ZW07XG4gICAgICAgIHRoaXMuc3RhbmRMYXllciA9IHRoaXMuZGljdC5zdGFuZExheWVyO1xuICAgICAgICB0aGlzLnBsYWNlTGF5ZXIgPSB0aGlzLmRpY3QucGxhY2VMYXllcjtcbiAgICAgICAgdGhpcy5wbGFjZUxheWVyLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAodC5hY3RpdmUgPSAhMSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvdWNoTm9kZSA9IHRoaXMuZGljdC50b3VjaE5vZGU7XG4gICAgICAgIHRoaXMuc3RhbmRMYXllci5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZVt0Lm1fc3RhdGVdID09PSBfLkVtcHR5O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJveExheWVyLnkgLT0gNDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGFkb3dMYXllciA9IHRoaXMuZGljdC5zaGFkb3dMYXllcjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdyaWRMYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFdhaXRMYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJveExheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0SXRlbUxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5nYW1lLmdldENvbXBvbmVudChjYy5NYXNrKS5lbmFibGVkID0gITA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhhbmRQb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5jdXJyZW50R3VpZGVOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5jdXJyZW50R3VpZGVOb2RlLnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmd1aWRlTm9kZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRHdWlkZU5vZGUpO1xuICAgICAgICB0aGlzLmRpY3QuaGFuZFRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmd1aWRlVGV4dFtlXTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmRpY3QuaGFuZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodCk7XG4gICAgICAgIHRoaXMuZGljdC5oYW5kLnBvc2l0aW9uID0gbztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gJGxldmVsVXRpbC5kZWZhdWx0LmRlZXBDb3B5KHRoaXMubGV2ZWxKU09OLmpzb25bdGhpcy5sZXZlbElEXSk7XG4gICAgICAgIHRoaXMubGV2ZWxfY29uZmlnID0gZTtcbiAgICAgICAgdGhpcy50eXBlcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgICRsZXZlbFV0aWwuZGVmYXVsdC5maXNoZXJZYXRlc1NodWZmbGUodGhpcy50eXBlcyk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgdmFyIGkgPSBlLmNlbnRlcnNxdWFyZTtcbiAgICAgICAgICAgIHZhciByID0gWzMsIDQsIDZdO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBpLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBpW25dO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYTsgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gcltuXTtcbiAgICAgICAgICAgICAgICAgICAgby5wdXNoKGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoID0gZS5ib3hDb25maWc7XG4gICAgICAgICAgICB2YXIgcCA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IG8ubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgZCA9IHAubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGcgPSBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgICAgIHZhciBpID0gaC5maW5kSW5kZXgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0WzBdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA8PSAoZCAqIG8pIC8gMTAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBoW2ldWzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gclswXTsgYSA8PSByWzFdOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucHVzaChhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gdC5zaHVmZmxlQXJyYXkobik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAkbGV2ZWxVdGlsLmRlZmF1bHQuZ2V0UmFuZG9tVmFsdWVJbkFycmF5KG4pOyBzID09PSBvOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAkbGV2ZWxVdGlsLmRlZmF1bHQuZ2V0UmFuZG9tVmFsdWVJbkFycmF5KG4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbSA9IC0xO1xuICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IHAubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcFtuXSkge1xuICAgICAgICAgICAgICAgICAgICBsID0gZyhuLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgcFtuXSA9IGw7XG4gICAgICAgICAgICAgICAgICAgIG0gPSBsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRsZXZlbFV0aWwuZGVmYXVsdC5maXNoZXJZYXRlc1NodWZmbGUobyk7XG4gICAgICAgICAgICB0aGlzLmJveE51bUFyciA9IF9fc3ByZWFkQXJyYXlzKG8pO1xuICAgICAgICAgICAgdGhpcy5ib3hUeXBlQXJyID0gX19zcHJlYWRBcnJheXMocCk7XG4gICAgICAgICAgICBjYy5sb2coXCLnm5LlrZAg5pWw6YeP77yaXCIsICRsZXZlbFV0aWwuZGVmYXVsdC5kZWVwQ29weSh0aGlzLmJveE51bUFycikpO1xuICAgICAgICAgICAgY2MubG9nKFwi55uS5a2QIOexu+Wei++8mlwiLCAkbGV2ZWxVdGlsLmRlZmF1bHQuZGVlcENvcHkodGhpcy5ib3hUeXBlQXJyKSk7XG4gICAgICAgICAgICB2YXIgZiA9IHt9O1xuICAgICAgICAgICAgcC5mb3JFYWNoKGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBvW2ldO1xuICAgICAgICAgICAgICAgIHQubGV2ZWxUb3RhbCArPSByO1xuICAgICAgICAgICAgICAgIGlmICgtMjg4MDcgPT0gdC5sZXZlbElEKSB7XG4gICAgICAgICAgICAgICAgICAgIGUgPSB0Lmd1aWRlTGV2ZWxDb2xvcltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZbZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmW2VdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZbZV0ucHVzaChyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MubG9nKFwi6aWu5paZ5oC75pWw77yaXCIsIHRoaXMubGV2ZWxUb3RhbCk7XG4gICAgICAgICAgICB2YXIgdiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgICAgICAgICBmW2VdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBlOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5nZXRSYW5kb21JbnRlZ2VyKDEsIGUgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgociArPSBuKSA8PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGUgLSAociAtPSBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2goYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciArPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8ucHVzaCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBOdW1iZXIoZSk7XG4gICAgICAgICAgICAgICAgeS5ib3hUeXBlR3JvdXBbaV0gPSBbXTtcbiAgICAgICAgICAgICAgICBvLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuYm94VHlwZUdyb3VwW2ldLnB1c2goTnVtYmVyKGUpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgeSA9IHRoaXM7XG4gICAgICAgICAgICBmb3IgKHZhciBDIGluIGYpIHYoQyk7XG4gICAgICAgIH1cbiAgICAgICAgTi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0Lml0ZW1Qb3NMaXN0LnB1c2goY2MudjIoZS54LCBlLnkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXRlbVBvc0xpc3QucmV2ZXJzZSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdEJveExheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuYm94R3JpZHMgPSB0aGlzLmRpY3QuYm94R3JpZHM7XG4gICAgICAgIHZhciBlID0gW107XG4gICAgICAgIEEuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgZS5wdXNoKGNjLnYyKHQueCwgdC55KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoMCA9PT0gdGhpcy5ib3hHcmlkUG9zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5ib3hHcmlkUG9zID0gX19zcHJlYWRBcnJheXMoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3hfc3BhY2luZ195ID0gMTIwO1xuICAgICAgICB0aGlzLmJveEdyaWRQb3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG8gPSB0LmJveEdyaWRzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlKTtcbiAgICAgICAgICAgIHZhciBpID0gdC5ib3hMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKS5hZGQoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgdC5ib3hQb3NMaXN0LnB1c2goaSk7XG4gICAgICAgICAgICB2YXIgciA9IHQuY3JlYXRlQm94KGkpO1xuICAgICAgICAgICAgdC5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHQuZ29Jbk1hcChyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b3VjaE5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQudG91Y2hOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9LCAodGhpcy5saW5lcyArIDEpICogdGhpcy5ib3hVbml0VGltZSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nb0luTWFwID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IHRoaXMubGluZXM7XG4gICAgICAgIHZhciByID0gdGhpcy5ib3hVbml0VGltZTtcbiAgICAgICAgdmFyIG47XG4gICAgICAgIGlmIChlID4gMCkge1xuICAgICAgICAgICAgbiA9IGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuID0gaSAqIHI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSB0Lnk7XG4gICAgICAgIHQueSA9IGEgLSB0aGlzLmJveF9zcGFjaW5nX3kgKiBpO1xuICAgICAgICB0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuYm94UnVuKHQpO1xuICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgLnRvKG4sIHtcbiAgICAgICAgICAgICAgICB5OiBhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG8uYm94SWRsZSh0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZUJveCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICgwICE9PSB0aGlzLmJveFR5cGVBcnIubGVuZ3RoICYmIDAgIT09IHRoaXMuYm94TnVtQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmJveFR5cGVBcnIuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5ib3hOdW1BcnIuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgICAgIHN3aXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgaSA9IDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgciA9IFN0cmluZyhlKTtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5ib3hMYXllcjtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5kaWN0LnByZV9ib3g7XG4gICAgICAgICAgICB2YXIgcyA9IGNjLmluc3RhbnRpYXRlKGEpO1xuICAgICAgICAgICAgcy5wYXJlbnQgPSBuO1xuICAgICAgICAgICAgcy5wb3NpdGlvbiA9IHQ7XG4gICAgICAgICAgICBzLm5hbWUgPSByO1xuICAgICAgICAgICAgcy5tX3NwaW5lSUQgPSB0aGlzLmdldFNwaW5lSURCeU51bShvKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHMuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHQuc2V0U2tpbihcInNraW5cIiArIGkpO1xuICAgICAgICAgICAgICAgIHQuc2V0QW5pbWF0aW9uKDAsIFwiZGFpamlcIiArIHMubV9zcGluZUlELCAhMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNbdGhpcy5tX2xpbWl0XSA9IG87XG4gICAgICAgICAgICBzW3RoaXMubV9oYXZlXSA9IDA7XG4gICAgICAgICAgICBzW3RoaXMubV9hcnJpdmVdID0gW107XG4gICAgICAgICAgICBzW3RoaXMubV9ibG9ja10gPSB0aGlzLmdldEJsb2NrKHMpO1xuICAgICAgICAgICAgc1t0aGlzLm1fc3RhdGVdID0geS5FbXB0eTtcbiAgICAgICAgICAgIHNbdGhpcy5tX3R5cGVdID0gZTtcbiAgICAgICAgICAgIHNbdGhpcy5tX2luZGV4XSA9IG4uY2hpbGRyZW5Db3VudDtcbiAgICAgICAgICAgIHNbdGhpcy5tX2NvbF0gPSB0aGlzLmdldEJveENvbChzKTtcbiAgICAgICAgICAgIHMub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNldEJveEluZGV4KHMsIDMpO1xuICAgICAgICAgICAgdGhpcy5ib3hRdWV1ZS5wdXNoKHMpO1xuICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveExpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuYm94UG9zTGlzdFswXTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmJveFBvc0xpc3RbdGhpcy5jb2xzXTtcbiAgICAgICAgdmFyIGkgPSB0Lnk7XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyh0LnkgLSBpKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHIoZSkgPCA1KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyKG8pIDwgNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94Q29sID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLmNvbHM7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmJveFBvc0xpc3RbZV07XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModC54IC0gby54KSA8IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRDb2xzQm94ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0Q29sRmlyc3RQb3ModCkueDtcbiAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgdGhpcy5ib3hMYXllci5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIGlmICh0ICE9IHIgJiYgdFtlLm1fc3RhdGVdICE9IHkuRW1wdHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHIueCAtIG87XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKG4pIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICBpLnB1c2gocik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRDb2xGaXJzdFBvcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdFt0aGlzLm1fY29sXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm94UG9zTGlzdFtlXTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUJveENvbFZpZXcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdGhpcy5ib3hfc3BhY2luZ195O1xuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0Q29sRmlyc3RQb3ModCk7XG4gICAgICAgIHZhciByID0gdGhpcy5ib3hVbml0VGltZTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmdldENvbHNCb3godCk7XG4gICAgICAgIGlmIChuLmxlbmd0aCkge1xuICAgICAgICAgICAgbi5zb3J0KGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRbZS5tX2luZGV4XSAtIG9bZS5tX2luZGV4XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaS55O1xuICAgICAgICAgICAgICAgIGUuYm94X3NwYWNpbmdfeTtcbiAgICAgICAgICAgICAgICB0W2UubV9zdGF0ZV0gPSB5LkFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICBlLmJveFJ1bih0KTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgICAgICAuYnkociwge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogb1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmJveElkbGUodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0W2UubV9ibG9ja10gPSBlLmdldEJsb2NrKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdFtlLm1fc3RhdGVdID0geS5FbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBhID0gX19zcHJlYWRBcnJheXMobik7XG4gICAgICAgICAgICBhLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC55IC0gZS55O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcyA9IGkueDtcbiAgICAgICAgICAgIHZhciBsID0gYVswXS55O1xuICAgICAgICAgICAgdmFyIGggPSB0aGlzLmNyZWF0ZUJveChjYy52MihzLCBsKSk7XG4gICAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5nb0luTWFwKGgsIGUuYm94VW5pdFRpbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCbG9jayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJveExpbmUodCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRCb3hJbmRleCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICgxID09IGUpIHtcbiAgICAgICAgICAgIHQuekluZGV4ID0gM2UzIC0gdC55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKDIgPT0gZSkge1xuICAgICAgICAgICAgICAgIHQuekluZGV4ID0gNGUzIC0gdC55ICsgdGhpcy5jbGVhck51bTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgMyA9PSBlICYmICh0LnpJbmRleCA9IDVlMyAtIHQueSArIHRoaXMuY2xlYXJOdW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRTcGluZUlEQnlOdW0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gWzMsIDQsIDZdLmluZGV4T2YodCkgKyAxO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGZvciAodmFyIG8gPSB0Lmxlbmd0aCAtIDE7IG8gPiAwOyBvLS0pIHtcbiAgICAgICAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG8gKyAxKSk7XG4gICAgICAgICAgICBlID0gW3RbaV0sIHRbb11dO1xuICAgICAgICAgICAgdFtvXSA9IGVbMF07XG4gICAgICAgICAgICB0W2ldID0gZVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveENsb3NlU0ZOYW1lID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSAwO1xuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCIyLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gMTAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjItMi0yXCI6XG4gICAgICAgICAgICAgICAgbyA9IDIwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIzLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gMzAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjMtMi0yXCI6XG4gICAgICAgICAgICAgICAgbyA9IDQwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0LTJcIjpcbiAgICAgICAgICAgICAgICBvID0gNTAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjQtMi0yXCI6XG4gICAgICAgICAgICAgICAgbyA9IDYwMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RyaW5nKG8gKyBlKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveE9wZW5TRk5hbWUgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSBcIjItMlwiOlxuICAgICAgICAgICAgY2FzZSBcIjItMi0yXCI6XG4gICAgICAgICAgICAgICAgbyA9IDEwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIzLTJcIjpcbiAgICAgICAgICAgIGNhc2UgXCIzLTItMlwiOlxuICAgICAgICAgICAgICAgIG8gPSAzMDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNC0yXCI6XG4gICAgICAgICAgICBjYXNlIFwiNC0yLTJcIjpcbiAgICAgICAgICAgICAgICBvID0gNTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gbyArIE51bWJlcihlKSArIDFlMztcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveEFuaW1JZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gMDtcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgICBjYXNlIFwiMi0yXCI6XG4gICAgICAgICAgICBjYXNlIFwiMi0yLTJcIjpcbiAgICAgICAgICAgICAgICBlID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIzLTJcIjpcbiAgICAgICAgICAgIGNhc2UgXCIzLTItMlwiOlxuICAgICAgICAgICAgICAgIGUgPSAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjQtMlwiOlxuICAgICAgICAgICAgY2FzZSBcIjQtMi0yXCI6XG4gICAgICAgICAgICAgICAgZSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0cmluZyhlKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldEJveFNQID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sb2FkU3ByaXRlRnJhbWUoZSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVCb3hTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICB0aGlzLmJveE1hcC5mb3JFYWNoKGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmNsdWRlcyhvKSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUucHVzaChvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBvID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciByID0gZVtvXTtcbiAgICAgICAgICAgIHZhciBuID0gaS5ib3hNYXAuZ2V0KHIpO1xuICAgICAgICAgICAgaWYgKDAgPT09IG8pIHtcbiAgICAgICAgICAgICAgICBuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbdC5tX3N0YXRlXSA9PT0geS5FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZVt0Lm1fYmxvY2tdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlbdC5tX3N0YXRlXSA9PT0geS5FbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaVt0Lm1fYmxvY2tdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSB0LmdldEJveEJvdW5kaW5nQm94KGkpLCBuID0gbyAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuYm94TWFwLmdldChhKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlW3QubV9zdGF0ZV0gPT09IHkuRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdC5nZXRCb3hCb3VuZGluZ0JveChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmludGVyc2VjdHMobykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpW3QubV9ibG9ja10gKz0gZVt0Lm1fYmxvY2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PT0gZVt0Lm1fYmxvY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmdldENoaWxkQnlOYW1lKFwic3BcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5jb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNCMkIxQjFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIG8ocik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveEJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCk7XG4gICAgICAgIHJldHVybiBjYy5yZWN0KGUueCwgZS55LCBlLndpZHRoIC0gNiwgZS5oZWlnaHQgLSA2KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldEJveFRvV2FpdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGVbdGhpcy5tX3N0YXRlXSA9IF8uT2NjdXB5O1xuICAgICAgICAgICAgdFt0aGlzLm1fd2FpdF0gPSBlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkVG9BcnJheSh0LCB0aGlzLndhaXRMaXN0KTtcbiAgICAgICAgdGhpcy5ib3hGbHkodCwgZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8uY2hlY2tCb3hUYWtlSXRlbSh0KSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNoZWNrSXNGYWlsIHNldEJveFRvV2FpdFwiKTtcbiAgICAgICAgICAgICAgICBvLmNoZWNrSXNGYWlsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tCb3hUYWtlSXRlbSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghdC5mbHlTdWMpIHtcbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0SXRlbURhdGEodCk7XG4gICAgICAgIGlmIChlICYmIGUuaXRlbSkge1xuICAgICAgICAgICAgdmFyIG8gPSBlLml0ZW07XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2sgPSAhMDtcbiAgICAgICAgICAgIGlmIChlLmluRmlyc3RQb3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUZyb21BcnJheShvLCB0aGlzLml0ZW1RdWV1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtVG9Cb3gobywgdCwgITApO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVN1cHBseSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVF1ZXVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0SXRlbURhdGEgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoMCA9PT0gdGhpcy5pdGVtUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0Qm94UmVtYWluTnVtKHQpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuaXRlbVF1ZXVlWzBdO1xuICAgICAgICB2YXIgaSA9ICExO1xuICAgICAgICBpZiAob1t0aGlzLm1fc3RhdGVdID09PSBDLklkbGUgJiYgb1t0aGlzLm1fdHlwZV0gPT09IHRbdGhpcy5tX3R5cGVdICYmIGUgPiAwKSB7XG4gICAgICAgICAgICBpID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgIHZhciByID0gby5wb3NpdGlvbi5zdWIodGhpcy5pdGVtRmlyc3RQb3MpLm1hZygpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpdGVtOiBvLFxuICAgICAgICAgICAgICAgIGluRmlyc3RQb3M6IHIgPCA1XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXJCb3ggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRCb3hPY2N1cHlQb3ModCkubGVuZ3RoO1xuICAgICAgICB0W3RoaXMubV9zdGF0ZV0gPSB5LkZpbmlzaDtcbiAgICAgICAgdC56SW5kZXggPSAxMDtcbiAgICAgICAgdGhpcy5zZXRCb3hJbmRleCh0LCAyKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5pc0NsZWFyQm94O1xuICAgICAgICAgICAgZS5wbGF5TGV2ZWxTb3VuZChcIkZ1bGxcIik7XG4gICAgICAgICAgICBlLnBsYXlFZmZlY3QodCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuZGVsZXRlRnJvbUFycmF5KHQsIGUud2FpdExpc3QpO1xuICAgICAgICAgICAgICAgIGlmICh0W2UubV93YWl0XSkge1xuICAgICAgICAgICAgICAgICAgICB0W2UubV93YWl0XVtlLm1fc3RhdGVdID0gXy5FbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgdFtlLm1fd2FpdF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnNldENsZWFyTnVtKG8pO1xuICAgICAgICAgICAgICAgIHZhciBpID0gdC5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpO1xuICAgICAgICAgICAgICAgIGkuc2NhbGVYID0gLTE7XG4gICAgICAgICAgICAgICAgJGxldmVsVXRpbC5kZWZhdWx0LnBsYXlTcGluZUNhbGxCYWNrKGksIFwibGlrYWlcIiwgITApO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHQpXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDFlM1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNoZWNrV2luKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUVmZmVjdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgdC56SW5kZXggPSAxZTQ7XG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRCb3hPY2N1cHlQb3ModCkubGVuZ3RoO1xuICAgICAgICB2YXIgciA9IHRoaXMuZGljdC5wYWNraW5nQm94MTtcbiAgICAgICAgaWYgKGkgPj0gNCAmJiBpIDwgNikge1xuICAgICAgICAgICAgciA9IHRoaXMuZGljdC5wYWNraW5nQm94MjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpID49IDYpIHtcbiAgICAgICAgICAgICAgICByID0gdGhpcy5kaWN0LnBhY2tpbmdCb3gzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gY2MuaW5zdGFudGlhdGUocik7XG4gICAgICAgIG4uc2NhbGUgPSAxLjA1O1xuICAgICAgICBuLmFjdGl2ZSA9ICEwO1xuICAgICAgICBuLm5hbWUgPSBcImVmZmVjdFwiO1xuICAgICAgICB2YXIgYSA9IHRbdGhpcy5tX3dhaXRdO1xuICAgICAgICB0aGlzLmVmZmVjdExheWVyLmFkZENoaWxkKG4pO1xuICAgICAgICBuLnBvc2l0aW9uID0gJGxldmVsVXRpbC5kZWZhdWx0LmNvbnZlcnRQb3NpdGlvbihhLCBuKTtcbiAgICAgICAgbi56SW5kZXggPSAzMDA7XG4gICAgICAgIHZhciBzID0gbi5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBzLnRpbWVTY2FsZSA9IDEuNTtcbiAgICAgICAgJGxldmVsVXRpbC5kZWZhdWx0LnBsYXlTcGluZUNhbGxCYWNrKHMsIFwiYW5pbWF0aW9uXCIsICExLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpID0gdFtvLm1fcGxhY2VdO1xuICAgICAgICAgICAgaS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSBpLmdldENoaWxkQnlOYW1lKFwiaXRlbVwiKTsgci5jaGlsZHJlbkNvdW50OyApIHtcbiAgICAgICAgICAgICAgICBvLnB1dEl0ZW1Ub1Bvb2woci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvLnNldEJveEluZGV4KHQsIDEpO1xuICAgICAgICAgICAgby5ib3hSdW4odCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC5ieSgwLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgeTogMTAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgIG4ucmVtb3ZlRnJvbVBhcmVudCghMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9LCAwLjQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYm94Rmx5ID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICB2YXIgciA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXCIpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIChyID0gbmV3IGNjLk5vZGUoXCJpdGVtXCIpKS5wYXJlbnQgPSB0O1xuICAgICAgICAgICAgci5wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgICAgICByLnpJbmRleCA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHZhciBuID0gZVt0aGlzLm1faW5kZXhdO1xuICAgICAgICAgICAgdmFyIGEgPSB0aGlzLnN0YW5kTGF5ZXIuY2hpbGRyZW5bbl07XG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMucGxhY2VMYXllci5jaGlsZHJlbltuXTtcbiAgICAgICAgICAgIHRbdGhpcy5tX3BsYWNlXSA9IHM7XG4gICAgICAgICAgICB2YXIgYyA9IDEwMCAqIHRbdGhpcy5tX3R5cGVdICsgdGhpcy5nZXRTcGluZUlEQnlOdW0odFt0aGlzLm1fbGltaXRdKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Qm94SW5kZXgodCwgMSk7XG4gICAgICAgICAgICB2YXIgbCA9ICRsZXZlbFV0aWwuZGVmYXVsdC5jb252ZXJ0UG9zaXRpb24oYSwgdCk7XG4gICAgICAgICAgICB0aGlzLmJveFJ1bih0KTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHQpXG4gICAgICAgICAgICAgICAgLnRvKDAuNCwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbC5hZGQoY2MudjIoMCwgMTApKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpLnNldEJveEluZGV4KHQsIDEpO1xuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQucGxheVNwaW5lQ2FsbEJhY2sodC5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLCBcInpoYW5cIiwgITApO1xuICAgICAgICAgICAgICAgICAgICB0LmZseVN1YyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBzLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBzLmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBpLmxvYWRTcHJpdGVGcmFtZShTdHJpbmcoYykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5ib3hSdW4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQucGxheVNwaW5lQ2FsbEJhY2sodC5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLCBcInBhb1wiICsgdC5tX3NwaW5lSUQsICEwKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmJveElkbGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQucGxheVNwaW5lQ2FsbEJhY2sodC5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLCBcImRhaWppXCIgKyB0Lm1fc3BpbmVJRCwgITApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94T2NjdXB5UG9zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmdldEJveFR5cGVCeU5hbWUodFt0aGlzLm1fbGltaXRdKTtcbiAgICAgICAgcmV0dXJuIFNbZV07XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRCb3hUeXBlQnlOYW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBcIlwiO1xuICAgICAgICBpZiAoMyA9PT0gdCkge1xuICAgICAgICAgICAgZSA9IFwiMy0xXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoNCA9PT0gdCkge1xuICAgICAgICAgICAgICAgIGUgPSBcIjItMlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICA2ID09PSB0ICYmIChlID0gXCIzLTJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5ib3hJc0VtcHR5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHRbdGhpcy5tX3N0YXRlXSA9PT0geS5FbXB0eTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEJveEdyb3VwID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgdmFyIGkgPSBlO1xuICAgICAgICBpZiAoZSA8IDApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbyA9IHRoaXMuYm94VHlwZUdyb3VwW3RdLnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGNhdGNoIChsKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHIgPSBfX3NwcmVhZEFycmF5cyh0aGlzLmJveFR5cGVHcm91cFt0XSk7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHIubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHJbbl07XG4gICAgICAgICAgICAgICAgaWYgKGEgPj0gaSkge1xuICAgICAgICAgICAgICAgICAgICByW25dIC09IGk7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSAtPSBhO1xuICAgICAgICAgICAgICAgIHJbbl0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgcyA9ICEwOyBzOyApIHtcbiAgICAgICAgICAgICAgICBpZiAoclswXSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzID0gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib3hUeXBlR3JvdXBbdF0ubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuYm94VHlwZUdyb3VwW3RdID0gX19zcHJlYWRBcnJheXMocik7XG4gICAgICAgICAgICBvID0gZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRJdGVtTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZHJpbmtBcnIgPSBuZXcgQXJyYXkodGhpcy5sZXZlbFRvdGFsKS5maWxsKC0xKTtcbiAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICB2YXIgZSA9IHRoaXMuaXRlbVBvc0xpc3QubGVuZ3RoO1xuICAgICAgICBmb3IgKGNvbnNvbGUubG9nKFwi6aWu5paZ77yadG90YWxcIiwgZSk7IHQgPCBlOyApIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5nZXRJdGVtVHlwZSgtMSk7XG4gICAgICAgICAgICBpZiAoIW8pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpID0gby50eXBlO1xuICAgICAgICAgICAgdmFyIHIgPSBvLm51bTtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgcjsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgaWYgKHQgKyBuID49IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IGUgLSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB0ICsgbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKGEsIE51bWJlcihpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ICs9IHI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtRmlyc3RQb3MgPSB0aGlzLml0ZW1RdWV1ZVswXS5wb3NpdGlvbjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLml0ZW1TdXBwbHkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEodGhpcy5pdGVtUXVldWUubGVuZ3RoID4gdGhpcy5pdGVtUG9zTGlzdC5sZW5ndGgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZXh0TmVlZEFkZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlpI3mtLtcIiwgXCLppa7mlpnmlrDlop5cIik7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm5leHROZWVkQWRkLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3hUeXBlR3JvdXBbZV1bMF0gLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSB0aGlzLmJveFR5cGVHcm91cFtlXVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveFR5cGVHcm91cFtlXS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IDE7IG8rKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMuaXRlbVBvc0xpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKGksIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldEl0ZW1UeXBlKHQpO1xuICAgICAgICAgICAgICAgIGlmIChyICYmIHIudHlwZSAmJiByLm51bSkge1xuICAgICAgICAgICAgICAgICAgICBlID0gci50eXBlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHIubnVtO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgbjsgbysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gdGhpcy5pdGVtUG9zTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKGksIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVJdGVtUXVldWUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gdGhpcy5pdGVtUXVldWU7XG4gICAgICAgIHZhciBpID0gdGhpcy5pdGVtUG9zTGlzdDtcbiAgICAgICAgdmFyIHIgPSAxO1xuICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgrK3IgPj0gby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zdGF0ZSA9PT0gbC5wcm9wX3NvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdGF0ZSA9IGwud2FpdFRvdWNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLml0ZW1RdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRbZS5tX3N0YXRlXSA9IEMuSWRsZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlLndhaXRMaXN0LnNvcnQoZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0Qm94T2NjdXB5UG9zKHQpLmxlbmd0aCAtIHRbZS5tX2hhdmVdIC0gKGUuZ2V0Qm94T2NjdXB5UG9zKG8pLmxlbmd0aCAtIG9bZS5tX2hhdmVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gITEsIGkgPSAwOyBpIDwgZS53YWl0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUud2FpdExpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmNoZWNrQm94VGFrZUl0ZW0obikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5pc0NoZWNrID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGUuY2hlY2tJc0ZhaWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciByID0gb1tlXTtcbiAgICAgICAgICAgIHIuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHIpLnN0b3AoKTtcbiAgICAgICAgICAgIGlmIChlID4gaS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgci5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgci5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgYyA9IGUsIGwgPSByW3MubV9wb3NJbmRleF0gLSAxOyBsID49IGM7IGwtLSkgYS5wdXNoKGwpO1xuICAgICAgICAgICAgICAgIGlmIChhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzLml0ZW1Nb3ZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ICogZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IG8ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGEoYyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLml0ZW1Nb3ZlID0gZnVuY3Rpb24gKHQsIGUsIG8sIGksIHIpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSBpKSB7XG4gICAgICAgICAgICBpID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSByKSB7XG4gICAgICAgICAgICByID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobyA+PSBlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICBpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0W3RoaXMubV9zdGF0ZV0gPSBDLkFuaW1hdGlvbjtcbiAgICAgICAgICAgIHZhciBhID0gZVtvXTtcbiAgICAgICAgICAgIHZhciBzID0gdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5pdGVtUG9zTGlzdFthXTtcbiAgICAgICAgICAgIHMuc3ViKGMpLm1hZygpO1xuICAgICAgICAgICAgY2MudHdlZW4odClcbiAgICAgICAgICAgICAgICAuZGVsYXkocilcbiAgICAgICAgICAgICAgICAudG8oMC4wNTUsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuLnNldEl0ZW1JbmRleCh0KTtcbiAgICAgICAgICAgICAgICAgICAgdFtuLm1fcG9zSW5kZXhdID0gYTtcbiAgICAgICAgICAgICAgICAgICAgbyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBuLml0ZW1Nb3ZlKHQsIGUsIG8sIGkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldEl0ZW1Ub0JveCA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9ICExO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0W3RoaXMubV9zdGF0ZV0gIT0gQy5Cb3gpIHtcbiAgICAgICAgICAgIHZhciByID0gZVt0aGlzLm1fcGxhY2VdLmdldENoaWxkQnlOYW1lKFwiaXRlbVwiKTtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5nZXRCb3hPY2N1cHlQb3MoZSk7XG4gICAgICAgICAgICB2YXIgYSA9IG4ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHMgPSBuW2VbdGhpcy5tX2hhdmVdXTtcbiAgICAgICAgICAgIHZhciBjID0gY2MudjIoc1swXSwgc1sxXSk7XG4gICAgICAgICAgICB2YXIgbCA9IHIuY29udmVydFRvV29ybGRTcGFjZUFSKGMpO1xuICAgICAgICAgICAgdmFyIGggPSB0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsKTtcbiAgICAgICAgICAgIGVbdGhpcy5tX2hhdmVdKys7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRCb3hSZW1haW5OdW0oZSkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGVbdGhpcy5tX3N0YXRlXSA9IHkuRmluaXNoQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJvbUFycmF5KGUsIHRoaXMuYm94UXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdFt0aGlzLm1fc3RhdGVdID0gQy5Cb3g7XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1JbmRleCh0LCAyKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJvbUFycmF5KHQsIHRoaXMuaXRlbVF1ZXVlKTtcbiAgICAgICAgICAgIHZhciBwID0gdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciBkID0gaC5zdWIocCkubWFnKCkgLyAxZTM7XG4gICAgICAgICAgICB0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgIGlmIChoLnggPiBwLngpIHtcbiAgICAgICAgICAgICAgICB1ID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdSA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGcgPSBwLmFkZChjYy52MigxMDAgKiB1LCAxNTApKTtcbiAgICAgICAgICAgIHQubV9zaGFkb3cuYWN0aXZlID0gITE7XG4gICAgICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgICAgIC5iZXppZXJUbyhkLCBwLCBnLCBoKVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5wbGF5TGV2ZWxTb3VuZChcIkdldF9vblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gMTAgKyB0W2kubV90eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgZS5zcHJpdGVGcmFtZSA9IGkubG9hZFNwcml0ZUZyYW1lKG8gKyBcIl8xXCIpO1xuICAgICAgICAgICAgICAgICAgICBpLmNoYW5nZVBhcmVudCh0LCByKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjEsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5hZGRUb0FycmF5KHQsIGVbaS5tX2Fycml2ZV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtpLm1fYXJyaXZlXS5sZW5ndGggPj0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkuY2xlYXJCb3goZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdGhpcy5sZXZlbF9jb25maWc7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRXZWlnaHQoKTtcbiAgICAgICAgaWYgKG8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGUubGltaXRSYW5rO1xuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLm1pbihpLCBvLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgbiA9IFtdO1xuICAgICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCByOyBzKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG9bc10uc3BsaXQoXCJfXCIpWzFdO1xuICAgICAgICAgICAgICAgIG4ucHVzaChOdW1iZXIoYykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgYSArPSBOdW1iZXIodCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBsID0gdGhpcy5nZXRSYW5kb21JbnRlZ2VyKDEsIGEpO1xuICAgICAgICAgICAgdmFyIGggPSAwO1xuICAgICAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBuLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKChoICs9IG5bZF0pID49IGwgJiYgdGhpcy5jaGVja0hhc0l0ZW1CeUNvbG9yKG9bZF0uc3BsaXQoXCJfXCIpWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICBwID0gZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUgPSBvW3BdLnNwbGl0KFwiX1wiKVswXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAtMjg4MDcgPT0gdGhpcy5sZXZlbElEICYmXG4gICAgICAgICAgICAgICAgKCh1ID0gdGhpcy5uZXh0TmVlZEFkZDJbdGhpcy5uZXh0TmVlZEFkZDJJbmRleF0pLCAodGhpcy5uZXh0TmVlZEFkZDJJbmRleCArPSAxKSwgbnVsbCA9PSB1KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0Qm94R3JvdXAoTnVtYmVyKHUpLCB0KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyKHUpLFxuICAgICAgICAgICAgICAgIG51bTogTnVtYmVyKGcpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tIYXNJdGVtQnlDb2xvciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuYm94VHlwZUdyb3VwW3RdICYmICEhdGhpcy5ib3hUeXBlR3JvdXBbdF0ubGVuZ3RoO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY3JlYXRlSXRlbSA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcbiAgICAgICAgICAgIG8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy5pdGVtUG9zTGlzdFt0XTtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgIGkuYWRkU2VsZihvKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IFN0cmluZyhOdW1iZXIoZSkgKyAxMCk7XG4gICAgICAgIHZhciBuID0gdGhpcy5pdGVtTGF5ZXI7XG4gICAgICAgIHZhciBhID0gdGhpcy5wb29sTWdyLmdldCh0aGlzLnByZV9pdGVtLCBcInByZV9pdGVtXCIpO1xuICAgICAgICBhLnBhcmVudCA9IG47XG4gICAgICAgIGEucG9zaXRpb24gPSBpO1xuICAgICAgICBhW3RoaXMubV9pbmRleF0gPSB0aGlzLml0ZW1MYXllci5jaGlsZHJlbkNvdW50O1xuICAgICAgICBhW3RoaXMubV9zdGF0ZV0gPSBDLklkbGU7XG4gICAgICAgIGFbdGhpcy5tX3R5cGVdID0gZTtcbiAgICAgICAgYVt0aGlzLm1fcG9zSW5kZXhdID0gdDtcbiAgICAgICAgYS5uYW1lID0gU3RyaW5nKGUpO1xuICAgICAgICB2YXIgcyA9IGEuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmltYWdlLmdldENoaWxkQnlOYW1lKHIpO1xuICAgICAgICBzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gYy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgdGhpcy5zZXRJdGVtSW5kZXgoYSk7XG4gICAgICAgIHRoaXMuaXRlbVF1ZXVlLnB1c2goYSk7XG4gICAgICAgIHZhciBsID0gYS5nZXRDaGlsZEJ5TmFtZShcInNoYWRvd1wiKTtcbiAgICAgICAgbC5hY3RpdmUgPSAhMDtcbiAgICAgICAgbC5zZXRQb3NpdGlvbigtMTgsIC0xOCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFyZW50KGwsIHRoaXMuc2hhZG93TGF5ZXIpO1xuICAgICAgICBsLm1fZm9sbG93ID0gYTtcbiAgICAgICAgdmFyIGggPSBsLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobC5wb3NpdGlvbik7XG4gICAgICAgIHZhciBwID0gYS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGEucG9zaXRpb24pO1xuICAgICAgICBsLm1fZm9sbG93X3dWZWMgPSBwLnN1YihoKTtcbiAgICAgICAgYS5tX3NoYWRvdyA9IGw7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0SXRlbUluZGV4ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdC56SW5kZXggPSA1ZTMgLSB0Lnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdC56SW5kZXggPSA5OTk5O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXZWlnaHQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHRoaXMubGV2ZWxfY29uZmlnO1xuICAgICAgICB2YXIgaSA9IHt9O1xuICAgICAgICB0aGlzLnR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAoaVt0XSA9IDApO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHIgPSBvLmJsb2NrV2VpZ2h0O1xuICAgICAgICB0aGlzLmJveFF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGlmIChlLmJveElzRW1wdHkodCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRbZS5tX3R5cGVdO1xuICAgICAgICAgICAgICAgIHZhciBhID0gdFtlLm1fYmxvY2tdO1xuICAgICAgICAgICAgICAgIGlmICgxID09PSBhKSB7XG4gICAgICAgICAgICAgICAgICAgIG8gPSByWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgyID09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSByWzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHJbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaVtuXSArPSBvICogdFtlLm1fbGltaXRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG4gPSBvLndhaXRXZWlnaHQ7XG4gICAgICAgIHRoaXMud2FpdExpc3QuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIG8gPSB0W2UubV90eXBlXTtcbiAgICAgICAgICAgIHZhciByID0gKHRbZS5tX2xpbWl0XSAtIHRbZS5tX2hhdmVdKSAqIG47XG4gICAgICAgICAgICBpW29dICs9IHI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdmFyIGEgPSBvLnF1ZXVlV2VpZ2h0O1xuICAgICAgICAgICAgdGhpcy5pdGVtUXVldWUuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdFtlLm1fdHlwZV07XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBhO1xuICAgICAgICAgICAgICAgIGlbb10gLT0gcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzID0gW107XG4gICAgICAgIGZvciAodmFyIGMgaW4gaSkge1xuICAgICAgICAgICAgdmFyIGwgPSBjICsgXCJfXCIgKyBpW2NdO1xuICAgICAgICAgICAgcy5wdXNoKGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICBzLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHQuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIHZhciBpID0gTnVtYmVyKG9bMV0pO1xuICAgICAgICAgICAgICAgIHZhciByID0gZS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihyWzFdKSAtIGk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRXYWl0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGkgPSBvLndhaXRMYXllci5jaGlsZHJlbltlXTtcbiAgICAgICAgICAgIGlbby5tX2luZGV4XSA9IGU7XG4gICAgICAgICAgICBpLm5hbWUgPSBcIndhaXRfXCIgKyBlO1xuICAgICAgICAgICAgdmFyIHIgPSBpLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIik7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSByID8gdm9pZCAwIDogci5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpW28ubV9zdGF0ZV0gPSBfLkxvY2s7XG4gICAgICAgICAgICAgICAgJGxldmVsVXRpbC5kZWZhdWx0Lm9uQ2xpY2tFdmVudChpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KCRsZXZlbENvbnN0YW50LkxFVkVMX0VWRU5ULlJFV0FSRFZJREVPLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudW5sb2NrV2FpdChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpW28ubV9zdGF0ZV0gPSBfLkVtcHR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG4gPSBvLnBsYWNlTGF5ZXIuY2hpbGRyZW5bZV07XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChuID0gY2MuaW5zdGFudGlhdGUoby5wbGFjZUxheWVyLmNoaWxkcmVuWzBdKSkucGFyZW50ID0gby5wbGFjZUxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbi5wb3NpdGlvbiA9ICRsZXZlbFV0aWwuZGVmYXVsdC5jb252ZXJ0UG9zaXRpb24oaSwgbik7XG4gICAgICAgICAgICBuLmFjdGl2ZSA9ICExO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YWl0TGF5ZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGUoaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGFjZUxheWVyLmFjdGl2ZSA9ICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudW5sb2NrV2FpdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ID0gdGhpcy53YWl0TGF5ZXIuY2hpbGRyZW4uZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0W2UubV9zdGF0ZV0gPT09IF8uTG9jaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gdC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpO1xuICAgICAgICBvLmFjdGl2ZSA9ICExO1xuICAgICAgICBvLnJlbW92ZUZyb21QYXJlbnQoITApO1xuICAgICAgICB0W3RoaXMubV9zdGF0ZV0gPSBfLkVtcHR5O1xuICAgICAgICB2YXIgaSA9IHRoaXMuc3RhbmRMYXllci5jaGlsZHJlblt0W3RoaXMubV9pbmRleF1dO1xuICAgICAgICBpLmFjdGl2ZSA9ICEwO1xuICAgICAgICBpLnNjYWxlID0gMDtcbiAgICAgICAgY2MudHdlZW4oaSlcbiAgICAgICAgICAgIC50bygwLjEsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB2YXIgciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5qaWVzdW8pO1xuICAgICAgICByLmFjdGl2ZSA9ICEwO1xuICAgICAgICByLnBhcmVudCA9IHQ7XG4gICAgICAgIHIucG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICAkbGV2ZWxVdGlsLmRlZmF1bHQucGxheVNwaW5lQ2FsbEJhY2sociwgXCJhbmltYXRpb25cIiwgITEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHIuYWN0aXZlID0gITA7XG4gICAgICAgICAgICByLnJlbW92ZUZyb21QYXJlbnQoITApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfY2hlY2tfdW5sb2NrV2FpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMud2FpdExheWVyLmNoaWxkcmVuLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMud2FpdExheWVyLmNoaWxkcmVuW2VdO1xuICAgICAgICAgICAgby5uYW1lID0gU3RyaW5nKGUpO1xuICAgICAgICAgICAgdmFyIGkgPSBvLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIik7XG4gICAgICAgICAgICBpZiAoaSAmJiBpLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHQgPSBvO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY191bmxvY2tXYWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZnVuY19jaGVja191bmxvY2tXYWl0KCk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLnVubG9ja1dhaXQodCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFdhaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy53YWl0TGF5ZXIuY2hpbGRyZW4ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy53YWl0TGF5ZXIuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICBpZiAoZS5hY3RpdmUgJiYgZVt0aGlzLm1fc3RhdGVdID09PSBfLkVtcHR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRSYW5kb21JbnRlZ2VyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlIC0gdCArIDEpKSArIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2FkU3ByaXRlRnJhbWUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZS5nZXRDaGlsZEJ5TmFtZSh0KS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrSXNGYWlsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gbC5vdmVyKSB7XG4gICAgICAgICAgICB2YXIgdCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMud2FpdExheWVyLmNoaWxkcmVuLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2FpdExheWVyLmNoaWxkcmVuW2VdW3RoaXMubV9zdGF0ZV0gIT09IF8uTG9jaykge1xuICAgICAgICAgICAgICAgICAgICB0ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSAwO1xuICAgICAgICAgICAgZm9yIChlID0gMDsgZSA8IHRoaXMud2FpdExpc3QubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoKHIgPSB0aGlzLndhaXRMaXN0W2VdKVt0aGlzLm1fc3RhdGVdID09PSB5Lk9jY3VweSkge1xuICAgICAgICAgICAgICAgICAgICBvICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHQgPT0gbykge1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImNoZWNrVGlwVGV4dFwiLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHQgLSAxID09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiY2hlY2tUaXBUZXh0XCIsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0NoZWNrICYmIG8gPT09IHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9ICExO1xuICAgICAgICAgICAgICAgIGZvciAoZSA9IDA7IGUgPCB0aGlzLndhaXRMaXN0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy53YWl0TGlzdFtlXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmdldEl0ZW1EYXRhKHIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiAmJiBuLml0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPSBsLm5vbmUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hhZG93KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVNoYWRvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLnNoYWRvd0xheWVyLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBlLm1fZm9sbG93O1xuICAgICAgICAgICAgICAgIGlmIChvICYmIG8uYWN0aXZlICYmIG9bdC5tX3N0YXRlXSAhPSBDLkJveCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG8ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihvLnBvc2l0aW9uKS5zdWIoZS5tX2ZvbGxvd193VmVjKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wb3NpdGlvbiA9IHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRHdWlkZW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKC0yODM5MSA9PT0gdGhpcy5sZXZlbElEKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMuZGljdC5zejtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHQpXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC44XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudW5pb24oKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlR3VpZGVuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgtMjgzOTEgPT09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3Quc3o7XG4gICAgICAgICAgICBpZiAodC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0R3JpZExheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdyaWRMYXllci5hY3RpdmUgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFRvdWNoTm9kZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdmFyIG8gPSB0aGlzLmJveExheWVyLmNoaWxkcmVuO1xuICAgICAgICB2YXIgaSA9IFtdO1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG8ubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIHZhciBhID0gb1tuXTtcbiAgICAgICAgICAgIGlmIChhW3RoaXMubV9zdGF0ZV0gPT09IHkuRW1wdHkgJiYgYS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0KSkge1xuICAgICAgICAgICAgICAgIGlmICgxID09IGFbdGhpcy5tX2Jsb2NrXSkge1xuICAgICAgICAgICAgICAgICAgICBpLnB1c2goYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgaS5zb3J0KGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0W2UubV9pbmRleF0gLSBvW2UubV9pbmRleF07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaVswXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgci5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgKHIuc29ydChmdW5jdGlvbiAodCwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9bZS5tX2luZGV4XSAtIHRbZS5tX2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHJbMF0ucnVuQWN0aW9uKHRoaXMuc2hhY2tBY3Rpb24oMC4xLCAyKSkpLFxuICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IG51bGw7XG4gICAgICAgICRsZXZlbFV0aWwuZGVmYXVsdC50b3VjaEV2ZW50KHRoaXMudG91Y2hOb2RlLCB7XG4gICAgICAgICAgICBzRnVuYzogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICB0LnBsYXlDbGlja1NvdW5kKCk7XG4gICAgICAgICAgICAgICAgaWYgKHQuc3RhdGUgPT09IGwud2FpdFRvdWNoIHx8IHQuc3RhdGUgPT09IGwucHJvcF9jbGVhcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG8uZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlID0gdC5nZXRUb3VjaE5vZGUoaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5zdGF0ZSA9PSBsLndhaXRUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdC5nZXRXYWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVt0Lm1fc3RhdGVdID0geS5PY2N1cHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudXBkYXRlQm94U3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zZXRCb3hUb1dhaXQoZSwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudXBkYXRlQm94Q29sVmlldyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJ1bkFjdGlvbih0LnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc3RhdGUgPT0gbC5wcm9wX2NsZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbdC5tX3N0YXRlXSA9IHkuRmluaXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUJveFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImlzUmVtb3ZlXCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zZXRCb3hUb1Byb3BDbGVhcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbUZ1bmM6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgZUZ1bmM6IGZ1bmN0aW9uICgpIHt9XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMuZW50ZXJLZXlJbnB1dCwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDbGVhck51bSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJOdW0gKz0gdDtcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJOdW0gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTnVtID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJOdW0gPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmxldmVsVG90YWw7XG4gICAgICAgIHZhciBlID0gdCAtIHRoaXMuY2xlYXJOdW07XG4gICAgICAgIHZhciBvID0gKHRoaXMuY2xlYXJOdW0gLyB0KS50b0ZpeGVkKDIpO1xuICAgICAgICB2YXIgaSA9IE51bWJlcihvKTtcbiAgICAgICAgaSAqPSAxMDA7XG4gICAgICAgIGlmICgoaSA9IE1hdGguZmxvb3IoaSkpID4gMTAwKSB7XG4gICAgICAgICAgICBpID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFiUHJvZ3Jlc3Muc3RyaW5nID0gXCJcIiArIGU7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImFsbFBlcnNvbkFtb3VudFwiLCBlLCB0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGxQZXJzb25BbW91bnRcIiwgZSwgdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5ib3hMYXllci5jaGlsZHJlbi5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQuYWN0aXZlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWMoMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uTGV2ZWxSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaGFja0FjdGlvbiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gY2MubW92ZUJ5KHQsIGUsIGUpO1xuICAgICAgICB2YXIgaSA9IGNjLm1vdmVCeSh0LCAtZSwgLWUpO1xuICAgICAgICB2YXIgciA9IGNjLm1vdmVCeSgwLjggKiB0LCAwLjggKiBlLCAwLjggKiBlKTtcbiAgICAgICAgdmFyIG4gPSBjYy5tb3ZlQnkoMC44ICogdCwgMC44ICogLWUsIDAuOCAqIC1lKTtcbiAgICAgICAgdmFyIGEgPSBjYy5tb3ZlQnkoMC42ICogdCwgMC42ICogZSwgMC42ICogZSk7XG4gICAgICAgIHZhciBzID0gY2MubW92ZUJ5KDAuNiAqIHQsIDAuNiAqIC1lLCAwLjYgKiAtZSk7XG4gICAgICAgIHZhciBjID0gY2MubW92ZUJ5KDAuNCAqIHQsIDAuNCAqIGUsIDAuNCAqIGUpO1xuICAgICAgICB2YXIgbCA9IGNjLm1vdmVCeSgwLjQgKiB0LCAwLjQgKiAtZSwgMC40ICogLWUpO1xuICAgICAgICB2YXIgaCA9IGNjLm1vdmVCeSgwLjIgKiB0LCAwLjIgKiBlLCAwLjIgKiBlKTtcbiAgICAgICAgdmFyIHAgPSBjYy5tb3ZlQnkoMC4yICogdCwgMC4yICogLWUsIDAuMiAqIC1lKTtcbiAgICAgICAgcmV0dXJuIGNjLnNlcXVlbmNlKG8sIGksIHIsIG4sIGEsIHMsIGMsIGwsIGgsIHApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VjID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2coXCJzdWNcIik7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9IGwub3Zlcikge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGwub3ZlcjtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlLnBsYXlSaWdodChudWxsLCAxKTtcbiAgICAgICAgICAgIH0sIHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb3NlID0gZnVuY3Rpb24gKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGkpIHtcbiAgICAgICAgICAgIGkgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9IGwub3Zlcikge1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgICAgICAgICAgci54ICs9IDcwO1xuICAgICAgICAgICAgICAgICAgICByLnkgLT0gNzA7XG4gICAgICAgICAgICAgICAgICAgIHIucGFyZW50ID0gdC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHIuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFcnJvcihyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUVycm9yT25jZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RXJyb3IodCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFcnJvck9uY2UodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RXJyb3JPbmNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIG8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKFwiZmFpbFwiKTtcbiAgICAgICAgdGhpcy5sb3NlKG51bGwsICExLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJsZXZlbFJldml2ZUhlbHBlclwiKTtcbiAgICAgICAgICAgICRsZXZlbFJldml2ZUhlbHBlci5kZWZhdWx0LmxldmVsRmFpbEV2ZW50KFwi5piv5ZCm6ZyA6KaB5aSN5rS7XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvLmZ1bmNfcmV2aXZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBsLm92ZXI7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXb3JkUG9zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0LnBvc2l0aW9uKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSAkbGV2ZWxVdGlsLmRlZmF1bHQuY29udmVydFBvc2l0aW9uKHQsIGUpO1xuICAgICAgICByZXR1cm4gZS5wb3NpdGlvbi5zdWIobykubWFnKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kZWxldGVGcm9tQXJyYXkgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IGUuaW5kZXhPZih0KTtcbiAgICAgICAgaWYgKC0xICE9PSBvKSB7XG4gICAgICAgICAgICBlLnNwbGljZShvLCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYWRkVG9BcnJheSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICgtMSA9PT0gZS5pbmRleE9mKHQpKSB7XG4gICAgICAgICAgICBlLnB1c2godCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYW5nZVBhcmVudCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHQucG9zaXRpb24pO1xuICAgICAgICB0LnBhcmVudCA9IGU7XG4gICAgICAgIHQucG9zaXRpb24gPSB0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5wcm90b3R5cGUub25EaXNhYmxlLmNhbGwodGhpcyk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gITE7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gITE7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLmVudGVyS2V5SW5wdXQsIHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFBvb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgNDsgdCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2xNZ3IucHV0KGNjLmluc3RhbnRpYXRlKHRoaXMucHJlX2l0ZW0pLCBcInByZV9pdGVtXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wdXRJdGVtVG9Qb29sID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgdmFyIGUgPSB0Lm1fc2hhZG93O1xuICAgICAgICBlLm1fZm9sbG93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXJlbnQoZSwgdCk7XG4gICAgICAgIHRoaXMucG9vbE1nci5wdXQodCwgXCJwcmVfaXRlbVwiKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfY2hvb3NlQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9IGwucHJvcF9jbGVhcikge1xuICAgICAgICAgICAgY2MubG9nKFwi6YGT5YW377ya6YCJ5oup5raI6ZmkXCIpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGwucHJvcF9jbGVhcjtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImlzUmVtb3ZlXCIsICEwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0Qm94UmVtYWluTnVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHRbdGhpcy5tX2xpbWl0XSAtIHRbdGhpcy5tX2hhdmVdO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Qm94VG9Qcm9wQ2xlYXIgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAhMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IG51bGw7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBpID0gdGhpcy5kaWN0LnByb3BfY2xlYXJfYm94O1xuICAgICAgICB9XG4gICAgICAgIHQuaXNDbGVhckJveCA9ICEwO1xuICAgICAgICB2YXIgciA9IHRoaXMuZ2V0Qm94UmVtYWluTnVtKHQpO1xuICAgICAgICB2YXIgbiA9IFtdO1xuICAgICAgICB2YXIgYSA9IF9fc3ByZWFkQXJyYXlzKHRoaXMuaXRlbVF1ZXVlKTtcbiAgICAgICAgdmFyIHMgPSB0W3RoaXMubV90eXBlXTtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIHZhciBoID0gMDtcbiAgICAgICAgICAgIGggPCBhLmxlbmd0aCAmJlxuICAgICAgICAgICAgKHMgIT09IChtID0gYVtoXSlbdGhpcy5tX3R5cGVdIHx8IChuLnB1c2gobSksIHRoaXMuZGVsZXRlRnJvbUFycmF5KG0sIHRoaXMuaXRlbVF1ZXVlKSwgMCAhPSAtLXIpKTtcbiAgICAgICAgICAgIGgrK1xuICAgICAgICApIHt9XG4gICAgICAgIGlmIChyID4gMCkge1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLml0ZW1Qb3NMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgZCA9IGNjLnYyKCk7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMuZ2V0Qm94R3JvdXAocywgcik7XG4gICAgICAgICAgICBmb3IgKHZhciBnID0gMDsgZyA8IHU7IGcrKykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGQgPSBjYy52MigwLCAzMCAqIChnICsgMSkpO1xuICAgICAgICAgICAgICAgIChtID0gdGhpcy5jcmVhdGVJdGVtKHAsIHMsIGQpKS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBuLnB1c2gobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3hGbHkodCwgaSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBvLnNldEl0ZW1Ub0JveChlLCB0LCAhMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBlID0gdFtvLm1fbGltaXRdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvLml0ZW1TdXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8uaXRlbVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvLnVwZGF0ZUl0ZW1RdWV1ZSgpO1xuICAgICAgICAgICAgby5zdGF0ZSA9IGwud2FpdFRvdWNoO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfc29ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGwucHJvcF9zb3J0O1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0V2VpZ2h0KCEwKTtcbiAgICAgICAgY2MubG9nKFwi6YGT5YW377ya5o6S5bqPXCIpO1xuICAgICAgICBjYy5sb2coXCLmjpLluo/vvJrmnYPph43vvJpcIiwgdCk7XG4gICAgICAgIGNjLmxvZyhcIumYn+WIl++8mlwiLCB0aGlzLml0ZW1RdWV1ZS5sZW5ndGgpO1xuICAgICAgICBpZiAodC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5pdGVtUG9zTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLml0ZW1Qb3NMaXN0W2VdO1xuICAgICAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgdC5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdFtyXTtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IE51bWJlcihuLnNwbGl0KFwiX1wiKVswXSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCB0aGlzLml0ZW1RdWV1ZS5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMuaXRlbVF1ZXVlW3NdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSA9PT0gaFt0aGlzLm1fdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhbdGhpcy5tX3Bvc0luZGV4XSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoLnBvc2l0aW9uID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXRlbVF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLml0ZW1RdWV1ZSA9IF9fc3ByZWFkQXJyYXlzKGkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtUXVldWUoMC4wNSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfcmV2aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbC53YWl0VG91Y2g7XG4gICAgICAgIGNjLmxvZyhcIumBk+WFt++8muWkjea0u1wiKTtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmZ1bmNfY2hlY2tfdW5sb2NrV2FpdCgpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy51bmxvY2tXYWl0KHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV3UmV2aXZlQW5pbSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHQuaXNDbGVhckJveCA9ICEwO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZGljdC5wcm9wX2NsZWFyX2JveDtcbiAgICAgICAgdGhpcy5ib3hGbHkodCwgbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG8gPSBlLmdldEJveE9jY3VweVBvcyh0KS5sZW5ndGg7XG4gICAgICAgICAgICBvIC09IHRbZS5tX2hhdmVdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtojpmaTpgZPlhbdcIiwgbyk7XG4gICAgICAgICAgICB2YXIgaSA9IHRbZS5tX3R5cGVdO1xuICAgICAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IEFycmF5KG8pLmZpbGwoaSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IG87IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gZS5pdGVtUXVldWVbYV07XG4gICAgICAgICAgICAgICAgci5wdXNoKHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IGUuaXRlbVF1ZXVlLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSAocyA9IGUuaXRlbVF1ZXVlW2FdKVtlLm1fdHlwZV07XG4gICAgICAgICAgICAgICAgaWYgKGUuYm94VHlwZUdyb3VwW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGUuYm94VHlwZUdyb3VwW2ldID0gWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmJveFR5cGVHcm91cFtpXVswXSArPSAxO1xuICAgICAgICAgICAgICAgIGlmIChjICE9IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc29sZS5sb2coXCLov5jliankvZnmnIktLS0tXCIsIG4ubGVuZ3RoLCBlLml0ZW1RdWV1ZS5sZW5ndGgpOyBuLmxlbmd0aCA8IGUuaXRlbVF1ZXVlLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgYyA9IGUuZ2V0U3VycGx1c0NvbG9yKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5jliankvZnmnIlcIiwgYyk7XG4gICAgICAgICAgICAgICAgZS5ib3hUeXBlR3JvdXBbY11bMF0gLT0gMTtcbiAgICAgICAgICAgICAgICBuLnB1c2goYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coXCJnZXRCb3hHcm91cCBzdGFydDIgXCIsICRsZXZlbFV0aWwuZGVmYXVsdC5kZWVwQ29weShlLmJveFR5cGVHcm91cCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xvclNvcnRcIiwgbik7XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgbi5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBoID0gblthXTtcbiAgICAgICAgICAgICAgICBpZiAoZS5pdGVtUXVldWVbYV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9IGUuaXRlbVF1ZXVlW2FdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IFN0cmluZyhOdW1iZXIoaCkgKyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIHNbZS5tX3R5cGVdID0gaDtcbiAgICAgICAgICAgICAgICAgICAgcy5uYW1lID0gU3RyaW5nKGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHMuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBlLmltYWdlLmdldENoaWxkQnlOYW1lKHApO1xuICAgICAgICAgICAgICAgICAgICBkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coXCJnZXRCb3hHcm91cCBzdGFydDMgXCIsICRsZXZlbFV0aWwuZGVmYXVsdC5kZWVwQ29weShlLmJveFR5cGVHcm91cCkpO1xuICAgICAgICAgICAgci5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgZS5zZXRJdGVtVG9Cb3gobywgdCwgITApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLnVwZGF0ZUl0ZW1RdWV1ZSgpO1xuICAgICAgICAgICAgZS5zdGF0ZSA9IGwud2FpdFRvdWNoO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldFN1cnBsdXNDb2xvciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdGhpcy5pdGVtUXVldWUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIGlmICghZVtvXSkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5pdGVtUXVldWVbb107XG4gICAgICAgICAgICAgICAgaWYgKHQgPT0gaVt0aGlzLm1fdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldFN1cnBsdXNDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/mOWJqeS9meaciVwiLCByKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hUeXBlR3JvdXBbcl1bMF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgaVt0aGlzLm1fdHlwZV0gPSByO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFN0cmluZyhOdW1iZXIocikgKyAxMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gaS5nZXRDaGlsZEJ5TmFtZShcInNwXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMuaW1hZ2UuZ2V0Q2hpbGRCeU5hbWUobik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIChhLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXZpdmVBbmltID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmlzUmV2aXZpbmcpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzUmV2aXZpbmcgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC5zdGFyU3BpbmUuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lml0ZW1RdWV1ZS5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0Lml0ZW1RdWV1ZVtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gJGxldmVsVXRpbC5kZWZhdWx0LmdldFJhbmRvbUludCgxLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc2V0Q29sb3JJdGVtSW1nX3Jldml2ZShpLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgIDIuMlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMS41KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5kaWN0LnN0YXJTcGluZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBNYXRoLm1pbig0LCB0LndhaXRMaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQud2FpdExpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQuZ2V0Qm94T2NjdXB5UG9zKHIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gLT0gclt0Lm1faGF2ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHJbdC5tX3R5cGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IG8uY29uY2F0KG5ldyBBcnJheShuKS5maWxsKGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdC5pdGVtUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAoYyA9IHQuaXRlbVF1ZXVlW2ldKVt0Lm1fdHlwZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmJveFR5cGVHcm91cFthXS5sZW5ndGggfHwgKHQuYm94VHlwZUdyb3VwW2FdID0gWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9baV0gJiYgKHQuYm94VHlwZUdyb3VwW2FdWzBdICs9IDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3JTb3J0XCIsIG8pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1RdWV1ZVwiLCB0Lml0ZW1RdWV1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBvW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaXRlbVF1ZXVlW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0Lml0ZW1RdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IFN0cmluZyhOdW1iZXIocykgKyAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1t0Lm1fdHlwZV0gPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubmFtZSA9IFN0cmluZyhzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGMuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHQuaW1hZ2UuZ2V0Q2hpbGRCeU5hbWUobCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5ib3hUeXBlR3JvdXBbc11bMF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSB0LmJveFR5cGVHcm91cFtzXVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmJveFR5cGVHcm91cFtzXS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0TmVlZEFkZC5wdXNoKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdC5pdGVtUXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua1i+ivlVwiLCB0LmdldFN1cnBsdXNDb2xvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHQuaXRlbVF1ZXVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgb1tpXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgocyA9IGNbdC5tX3R5cGVdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodC5ib3hUeXBlR3JvdXBbc10ubGVuZ3RoICYmIHQuYm94VHlwZUdyb3VwW3NdWzBdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHMgPSB0LmdldFN1cnBsdXNDb2xvcigpKSwgY29uc29sZS5sb2coXCLov5jliankvZnmnIlcIiwgcyksICh0LmJveFR5cGVHcm91cFtzXVswXSAtPSAxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNbdC5tX3R5cGVdID0gcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGwgPSBTdHJpbmcoTnVtYmVyKHMpICsgMTApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaCA9IGMuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHAgPSB0LmltYWdlLmdldENoaWxkQnlOYW1lKGwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCIgZW5kMlwiLCAkbGV2ZWxVdGlsLmRlZmF1bHQuZGVlcENvcHkodC5ib3hUeXBlR3JvdXApKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiIG5leHROZWVkQWRkXCIsIHQubmV4dE5lZWRBZGQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZSAmJiAoKHIgPSB0LndhaXRMaXN0W2ldKSwgIXQuY2hlY2tCb3hUYWtlSXRlbShyKSk7IGkrKykge31cbiAgICAgICAgICAgICAgICAgICAgdC5pc1Jldml2aW5nID0gITE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUubmV3UmV2aXZlQW5pbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5pc1Jldml2aW5nKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1Jldml2aW5nID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc3RhclNwaW5lLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5pdGVtUXVldWUubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdC5pdGVtUXVldWVbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9ICRsZXZlbFV0aWwuZGVmYXVsdC5nZXRSYW5kb21JbnQoMSwgOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnNldENvbG9ySXRlbUltZ19yZXZpdmUoaSwgbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgICAgICAyLjJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEuNSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZGljdC5zdGFyU3BpbmUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gTWF0aC5taW4oNCwgdC53YWl0TGlzdC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0LndhaXRMaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0LmdldEJveE9jY3VweVBvcyhyKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBuIC09IHJbdC5tX2hhdmVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSByW3QubV90eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBvLmNvbmNhdChuZXcgQXJyYXkobikuZmlsbChhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHQuaXRlbVF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzWyhjID0gKG0gPSB0Lml0ZW1RdWV1ZVtpXSlbdC5tX3R5cGVdKV0gfHwgKHNbY10gPSAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbY10gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc1tjXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuYm94VHlwZUdyb3VwW2NdLnB1c2goc1tjXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sb3JTb3J0XCIsIG8pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1RdWV1ZVwiLCB0Lml0ZW1RdWV1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdC5pdGVtUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChtID0gdC5pdGVtUXVldWVbaV0pLm1fc2hhZG93LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdC5pdGVtUXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdC5uZXh0TmVlZEFkZF9uZXcgPSBvO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSB0Lml0ZW1Qb3NMaXN0Lmxlbmd0aDsgbCA8IGg7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Lm5leHROZWVkQWRkX25ldy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHQubmV4dE5lZWRBZGRfbmV3LnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRCb3hHcm91cChwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSB0LmdldEl0ZW1UeXBlKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gdS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSB1Lm51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gdC5jcmVhdGVJdGVtKGcsIE51bWJlcihwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwgKyBpID49IGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBsICsgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsICs9IGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGUgJiYgKChyID0gdC53YWl0TGlzdFtpXSksICF0LmNoZWNrQm94VGFrZUl0ZW0ocikpOyBpKyspIHt9XG4gICAgICAgICAgICAgICAgICAgIHQuaXNSZXZpdmluZyA9ICExO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFN1cnBsdXNDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDE7IHQgPD0gODsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuYm94VHlwZUdyb3VwW3RdO1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbb10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDb2xvckl0ZW1JbWdfcmV2aXZlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBTdHJpbmcoTnVtYmVyKHQpICsgMTApO1xuICAgICAgICB2YXIgaSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmltYWdlLmdldENoaWxkQnlOYW1lKG8pO1xuICAgICAgICBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gci5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRlc3RMYWJlbCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsTm9kZVwiKTtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAobyA9IG5ldyBjYy5Ob2RlKCkpLm5hbWUgPSBcImxhYmVsTm9kZVwiO1xuICAgICAgICAgICAgby5wYXJlbnQgPSB0O1xuICAgICAgICAgICAgby5wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBvLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSA9IG8uYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBpLnN0cmluZyA9IGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5lbnRlcktleUlucHV0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgc3dpdGNoICh0LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmNfc29ydCgpO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkueDpcbiAgICAgICAgfVxuICAgIH07XG4gICAgX19kZWNvcmF0ZShcbiAgICAgICAgW1xuICAgICAgICAgICAgdih7XG4gICAgICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBcIuihjFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBlLnByb3RvdHlwZSxcbiAgICAgICAgXCJsaW5lc1wiLFxuICAgICAgICB2b2lkIDBcbiAgICApO1xuICAgIF9fZGVjb3JhdGUoXG4gICAgICAgIFtcbiAgICAgICAgICAgIHYoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogXCLliJdcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgZS5wcm90b3R5cGUsXG4gICAgICAgIFwiY29sc1wiLFxuICAgICAgICB2b2lkIDBcbiAgICApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtmXSwgZSk7XG59KSgkYnJhaW5MZXZlbEJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBrO1xudmFyIEEgPSBbXG4gICAge1xuICAgICAgICB4OiAtMjQwLFxuICAgICAgICB5OiAtNTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTgwLFxuICAgICAgICB5OiAtNTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogODAsXG4gICAgICAgIHk6IC01MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyNDAsXG4gICAgICAgIHk6IC01MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMjQwLFxuICAgICAgICB5OiAtMTcwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC04MCxcbiAgICAgICAgeTogLTE3MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiA4MCxcbiAgICAgICAgeTogLTE3MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyNDAsXG4gICAgICAgIHk6IC0xNzBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTI0MCxcbiAgICAgICAgeTogLTI5MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtODAsXG4gICAgICAgIHk6IC0yOTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogODAsXG4gICAgICAgIHk6IC0yOTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjQwLFxuICAgICAgICB5OiAtMjkwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0yNDAsXG4gICAgICAgIHk6IC00MTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTgwLFxuICAgICAgICB5OiAtNDEwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDgwLFxuICAgICAgICB5OiAtNDEwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDI0MCxcbiAgICAgICAgeTogLTQxMFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMjQwLFxuICAgICAgICB5OiAtNTMwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC04MCxcbiAgICAgICAgeTogLTUzMFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiA4MCxcbiAgICAgICAgeTogLTUzMFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyNDAsXG4gICAgICAgIHk6IC01MzBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTI0MCxcbiAgICAgICAgeTogLTY1MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtODAsXG4gICAgICAgIHk6IC02NTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogODAsXG4gICAgICAgIHk6IC02NTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjQwLFxuICAgICAgICB5OiAtNjUwXG4gICAgfVxuXTtcbnZhciBOID0gW1xuICAgIHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA5MzBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA4NjVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA4MDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMTY1LFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogMTEwLFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogNTUsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTU1LFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTExMCxcbiAgICAgICAgeTogNzM1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0xNjUsXG4gICAgICAgIHk6IDczNVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMjIwLFxuICAgICAgICB5OiA3MzVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTIyMCxcbiAgICAgICAgeTogNjk1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC0yMjAsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAtMTY1LFxuICAgICAgICB5OiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgeDogLTExMCxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IC01NSxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDY0NVxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiA1NSxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDExMCxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDE2NSxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogNjQ1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogNjAwLjIyM1xuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAyMjAsXG4gICAgICAgIHk6IDU2MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAxNjUsXG4gICAgICAgIHk6IDU2MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAxMTAsXG4gICAgICAgIHk6IDU2MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiA1NSxcbiAgICAgICAgeTogNTYwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDU2MFxuICAgIH0sXG4gICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA1MDAuNzMyXG4gICAgfVxuXTtcbiJdfQ==