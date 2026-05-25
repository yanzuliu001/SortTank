"use strict";
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