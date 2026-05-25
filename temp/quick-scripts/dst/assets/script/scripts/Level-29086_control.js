
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-29086_control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da5bc1iDY1HtYXnseJZZXbN', 'Level-29086_control');
// script/scripts/Level-29086_control.js

"use strict";

var i;
var c;
var l;

var $brainLevelBase = require("./BrainLevelBase");

var $poolMgr = require("./PoolMgr");

var $level_29086_config = require("./Level-29086_config");

var $level_29086_boxCarItem = require("./Level-29086_boxCarItem");

var $motionTrail = require("./MotionTrail");

var $level_29086_dragonItem = require("./Level-29086_dragonItem");

var $levelUtils = require("./LevelUtils");

var $levelConstant = require("./LevelConstant");

var $level_29086_transport = require("./Level-29086_transport");

var $level_29086_carPark = require("./Level-29086_carPark");

var $levelReviveHelper = require("./levelReviveHelper");

var $platformManager = require("../../scripts/PlatformManager");

var $shuShuConst = require("../../scripts/ShuShuConst");

var $userManager = require("../../scripts/UserManager");

var $userConst = require("../../scripts/UserConst");

var $localStorageManager = require("../../scripts/LocalStorageManager");

var $localStorageConst = require("../../scripts/LocalStorageConst");

var $languageManager = require("../../scripts/LanguageManager");

var R = cc._decorator;
var T = R.ccclass;
var B = R.property;

(function (t) {
  t[t.map1 = 1] = "map1";
  t[t.map2 = 2] = "map2";
  t[t.map3 = 3] = "map3";
  t[t.map4 = 4] = "map4";
  t[t.map5 = 5] = "map5";
  t[t.map6 = 6] = "map6";
  t[t.map7 = 7] = "map7";
  t[t.map8 = 8] = "map8";
  t[t.map9 = 9] = "map9";
  t[t.map10 = 10] = "map10";
  t[t.map101 = 101] = "map101";
  t[t.map102 = 102] = "map102";
})(c || (c = {}));

(function (t) {
  t[t.normal = 0] = "normal";
  t[t.back = 1] = "back";
  t[t.slowStart = 2] = "slowStart";
  t[t.item1Start = 3] = "item1Start";
  t[t.item2Start = 4] = "item2Start";
  t[t.item3Start = 5] = "item3Start";
  t[t.revive = 6] = "revive";
})(l || (l = {}));

var W = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.box2SpriteAtlas = null;
    e.isDebug = !1;
    e.boundary = 750;
    e.mapType = c.map1;
    e.carRoot = null;
    e.cannonRoot = null;
    e.dragonRoot = null;
    e.warnNode = null;
    e.roleNode = null;
    e._cannonNum = Symbol("_cannonNum");
    e._cannonType = Symbol("_cannonType");
    e._cannonState = Symbol("_cannonState");
    e._cannonList = [];
    e._keepDistance = 30;
    e._moveSpeed = [50, 500, 700];
    e._speedIndexList = [0, 70, 160];
    e._addSpeed = [0, 0, 5, 2];
    e.cannonAttackList = [[70, 179]];
    e._bulletModelList = [];
    e._bulletMoveList = [];
    e._bulletTarget = Symbol("_bulletTarget");
    e._dragonTarget = Symbol("_dragonTarget");
    e._itemType = Symbol("_itemType");
    e._itemNode = Symbol("_itemNode");
    e._itemDepend = Symbol("_itemDepend");
    e._turnBackDestroy = Symbol("_turnBackDestroy");
    e._moveEnd = Symbol("_moveEnd");
    e.createFinish = !1;
    e._slowTime = 12;
    e._slowCur = 0;
    e._slowStart = !1;
    e._warning = !1;
    e._rolePointIndex = 0;
    e._mapConfig = [];
    e._mapConfig2 = [];
    e._item1Time = 5;
    e._item1Cur = 0;
    e._item1Start = !1;
    e._item1BigSpineList = new cc.NodePool();
    e._item1SmallSpineList = new cc.NodePool();
    e._item2Time = 2;
    e._item2Cur = 0;
    e._item2Start = !1;
    e._item3Time = 5;
    e._item3Cur = 0;
    e._item3Start = !1;
    e._item4Time = 8;
    e._item4Cur = 0;
    e._item4Start = !1;
    e._item4SpineList = new cc.NodePool();
    e._item5Time = 12;
    e._item5Cur = 0;
    e._item5Start = !1;
    e._item5SpineList = new cc.NodePool();
    e._itemCreatedList = [];
    e._warningIndex = 0;
    e._itemPoolList = [];
    e._itemNodeList = [];
    e._itemNameList = ["冰封", "击退", "巨龙减速", "射速加快", "射程增加", "少量金币", "大量金币"];
    e._itemTipsList = ["冰冻效果生效中", "", "减速效果生效中", "射速加快中", "射程增加中", "", ""];
    e._itemTipsNode = null;
    e._touchBegin = !1;
    e.colorTypeAmount = $level_29086_config.colorDes.length;
    e._dragonSkin = 0;
    e._roleSkin = 0;
    e._roleHp = 1;
    e._roleCurHp = 1;
    e._roleLevel = 1;
    e._dragonAttackInterval = 3;
    e._roleLevel2Time = 3;
    e._roleLevel2CurTime = 0;
    e._roleLevel2Count = 0;
    e._roleLevel5Count = 0;
    e._roleLevel10Time = 3;
    e._roleLevel10CurTime = 0;
    e._roleLevel10Count = 0;
    e._removeStage = !1;
    e._removeClick = !1;
    e._tipRemove = null;
    e._feidan = new cc.NodePool();
    e._feidanYanwu = new cc.NodePool();
    e._feidanBaozha = new cc.NodePool();
    e.personPosRoot2 = null;
    e.isTransportCarMove = !1;
    e.oldSortAmount = 0;
    e.guideNodes = [];
    e.guideText = ["箱子会朝着箭头方向移动", "这种箱子可以发射10颗炮弹", "这种箱子可以发射6颗炮弹", "这种箱子可以发射4颗炮弹"];
    e.currentGuideNode = null;
    e.guidedNodes = [];
    e.poolMgr = new $poolMgr["default"]();
    e.sortColor_new = [];
    e.levelDataJSON = {};
    e.parkingNodes = [];
    e.between2_4CarArr = [];
    e.highSpeedRailSpeed = 600;
    e.turntableCarArr = [];
    e.colorPersonArr = [];
    e.unlockParkingTarget = null;
    e.carparkIng = !1;
    e.moveCarAmount = 0;
    e.allPersonAmount = 0;
    e.allPersonAmount2 = 0;
    e.curCreatePersonAmount = 0;
    e.extraWeightConst = 0;
    e.extraWeight = [];
    e.carWeight = [];
    e.parkingWeight = [];
    e.sortWeight = [];
    e.allWeight = [];
    e.colorPersonAmountArr = [];
    e.colorPersonAmountArrIndex = [];
    e.colorPersonIndexArr = [];
    e.uiShowPersonAmount = 0;
    e.currentPersonColorAmount = [];
    e.sortPersonNodes = [];
    e.sortPersonNodes2 = [];
    e.times = 0;
    e.createNum = 0;
    e.isCanStartClick = !1;
    e._curLastBoxItemNode = null;
    e._curLastBoxItemNode2 = null;
    e._mBodyMoveBackDis = Symbol("_mBodyMoveBackDis");
    e._mBodyMoveDis = Symbol("_mBodyMoveDis");
    e._mBodyEven = Symbol("_mBodyEven");
    e._curMoveState = l.normal;
    e._curMoveState2 = l.normal;
    e._curvePoints = [];
    e._curvePoints2 = [];
    e.isFail = !1;
    e.isWin = !1;
    e.isDragonAttack = !1;
    e.isDragonAttacking = !1;
    e.isDragonAttack2 = !1;
    e.isDragonAttacking2 = !1;
    e.isReviveAmount = 0;
    e.lastExtraIndexArr = [];
    e.randomColorArr = [];
    e.randomColorNum = [];
    e.batchMap = {};
    e.pathArr = [];
    e.carIndex = [];
    e.carNodeArr = [];
    e.carAllAmount = 0;
    e.carMap = {};
    e.hardPointsIndexs = [];
    e.localData = {};
    e.reviveArr = [];
    e.reviveRemoveArr = [];
    e.firstSortIndexArr = [];
    e.isSorting = !1;
    e.isSortAnim = !1;
    e.isReviveBack = !1;
    e.isReviveSort = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      var i;
      var r;
      var n;
      var a;
      var l;
      var h;
      var p;
      var u;
      var m;
      var f;
      var v;
      var y;
      var C;
      return __generator(this, function () {
        for (f = 0; f < Object.keys(c).length; f++) {
          e = f + 1;
          this.dict["map" + e] && e != this.mapType && (this.dict["map" + e].removeFromParent(), this.dict["mapBg" + e].removeFromParent());
        }

        t.prototype.onLoad.call(this);
        this.dict.carRoot.active = !1;
        this._itemTipsNode = new cc.Node();
        this._itemTipsNode.parent = this.dict.game;
        this._itemTipsNode.position = cc.v2(374.169, 360);
        this._itemTipsNode.anchorX = 1;
        (o = this._itemTipsNode.addComponent(cc.Label)).fontSize = 22;
        o.lineHeight = 30;
        (i = this._itemTipsNode.addComponent(cc.LabelOutline)).color = cc.Color.BLACK;
        i.width = 2;

        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
          this.dict.element.y -= 80;
          this._itemTipsNode.y -= 80;
          this.dict.topMask.active = !0;
          this.dict.topMask.y = 504;
          this.dict.topMask.height = 642;
        }

        this.dict.warnNode.height = cc.winSize.height;
        this.dict.warnNode.y = -1 * this.dict.game.y;
        r = [];
        n = [];

        if (this.mapType == c.map1) {
          r = $level_29086_config.DrinkPosArr;
        } else {
          if (this.mapType == c.map2) {
            r = $level_29086_config.DrinkPosArr2;
          } else {
            if (this.mapType == c.map3) {
              r = $level_29086_config.DrinkPosArr3;
            } else {
              if (this.mapType == c.map4) {
                r = $level_29086_config.DrinkPosArr4;
              } else {
                this.mapType == c.map5 ? r = $level_29086_config.DrinkPosArr5 : this.mapType == c.map6 ? r = $level_29086_config.DrinkPosArr6 : this.mapType == c.map7 ? r = $level_29086_config.DrinkPosArr7 : this.mapType == c.map8 ? r = $level_29086_config.DrinkPosArr8 : this.mapType == c.map9 ? r = $level_29086_config.DrinkPosArr9 : this.mapType == c.map10 ? r = $level_29086_config.DrinkPosArr10 : this.mapType == c.map101 ? (r = $level_29086_config.DrinkPosArr101_1, n = $level_29086_config.DrinkPosArr101_2) : this.mapType == c.map102 && (r = $level_29086_config.DrinkPosArr102_1, n = $level_29086_config.DrinkPosArr102_2);
              }
            }
          }
        }

        a = $level_29086_config.MapParam[this.mapType].mapOrigin;
        l = this.dict["map" + this.mapType].position.sub(a);

        for (f = 0; f < r.length; f++) {
          m = r[f];

          this._mapConfig.push([m[0] + l.x, m[1] + l.y]);
        }

        for (f = 0; f < n.length; f++) {
          m = n[f];

          this._mapConfig2.push([m[0] + l.x, m[1] + l.y]);

          h = this.dict.personPosRoot;
          this.personPosRoot2 = cc.instantiate(h);
          this.personPosRoot2.parent = h.parent;
          this.personPosRoot2.position = h.position;
          this.personPosRoot2.setSiblingIndex(h.getSiblingIndex());
        }

        for (p = 0; p < this._mapConfig.length; p++) {
          u = new cc.Node("" + p);
          this.dict.personPosRoot.addChild(u);
          m = this._mapConfig[p];
          u.position = cc.v2(m[0], m[1]);
        }

        for (f = 1; f < this.dict.personPosRoot.children.length; f++) {
          v = this.dict.personPosRoot.children[f - 1].position;
          y = this.dict.personPosRoot.children[f].position;
          C = v.sub(y);

          this._curvePoints.push({
            position: y,
            distance: C.len(),
            mapIndex: f
          });
        }

        for (p = 0; p < this._mapConfig2.length; p++) {
          u = new cc.Node("" + p);
          this.personPosRoot2.addChild(u);
          m = this._mapConfig2[p];
          u.position = cc.v2(m[0], m[1]);
        }

        if (this.personPosRoot2) {
          for (f = 1; f < this.personPosRoot2.children.length; f++) {
            v = this.personPosRoot2.children[f - 1].position;
            y = this.personPosRoot2.children[f].position;
            C = v.sub(y);

            this._curvePoints2.push({
              position: y,
              distance: C.len(),
              mapIndex: f
            });
          }
        }

        this.carWeight = new Array(this.colorTypeAmount).fill(0);
        this.extraWeight = new Array(this.colorTypeAmount).fill(0);
        this.lastExtraIndexArr = new Array(this.colorTypeAmount).fill(0);
        this.parkingWeight = new Array(this.colorTypeAmount).fill(0);
        this.sortWeight = new Array(this.colorTypeAmount).fill(0);
        this.allWeight = new Array(this.colorTypeAmount).fill(0);
        this.colorPersonIndexArr = new Array(this.colorTypeAmount).fill(0);
        this.currentPersonColorAmount = new Array(this.colorTypeAmount).fill(0);
        this.colorPersonArr = new Array(this.colorTypeAmount).fill(0);
        this.levelDataJSON = JSON.parse(JSON.stringify($level_29086_config.levelData[this.levelID]));

        if (this.levelDataJSON.moveSpeed) {
          this._moveSpeed = this.levelDataJSON.moveSpeed;
        }

        if (this.levelDataJSON.addSpeed) {
          this._addSpeed = this.levelDataJSON.addSpeed;
        }

        if (this.levelDataJSON.item) {
          this._itemConfig = this.levelDataJSON.item;
        }

        this._speedIndexList = $level_29086_config.MapParam[this.mapType].speedIndexList;

        if (-29095 == this.levelID) {
          this._speedIndexList = $level_29086_config.MapParam[0].speedIndexList;
        }

        this.cannonAttackList = $level_29086_config.MapParam[this.mapType].cannonAttackList;
        this.setCollisionManager(!0, !1);
        this.carRoot = this.dict.carRoot;
        this.cannonRoot = this.dict.cannonRoot;
        this.dragonRoot = this.dict.dragonRoot;
        this.warnNode = this.dict.warnNode;
        this.roleNode = this.dict.roleNode;

        if (this.dict.btns) {
          this.dict.btns.active = !1;
        }

        this.dict.hitSpine.scale = 0.4;

        if (this.dict.tailGas.getComponent($motionTrail["default"])) {
          this.dict.tailGas.getComponent($motionTrail["default"]).length = 25;
          this.dict.tailGas.getComponent($motionTrail["default"]).headWidth = 35;
          this.dict.tailGas.getComponent($motionTrail["default"]).tailWidth = 20;
          this.dict.tailGas.getComponent($motionTrail["default"]).headOpacity = 230;
          this.dict.tailGas.getComponent($motionTrail["default"]).tailOpacity = 40;
        }

        if (this.dict.hand && this.dict.hand.active) {
          this.guideNodes.push(this.dict.carRoot.children[1]);
          this.guideNodes.push(this.dict.carRoot.children[0]);
          this.guideNodes.push(this.dict.carRoot.children[3]);
          this.guideNodes.push(this.dict.carRoot.children[2]);
          this.currentGuideNode = this.guideNodes[0];
          this.handPos();
        }

        this.roleNode._moveIndex = $level_29086_config.MapParam[this.mapType].rolePoint[0];

        if (-29095 == this.levelID) {
          this.roleNode._moveIndex = $level_29086_config.MapParam[0].rolePoint[0];
        }

        return [2];
      });
    });
  };

  e.prototype.handPos = function () {
    var t = cc.v2(-20, -20);

    if ("012-1" == this.currentGuideNode.name) {
      t = cc.v2(0, -20);
    } else {
      if ("023" == this.currentGuideNode.name) {
        t = cc.v2(0, -80);
      } else {
        "031" == this.currentGuideNode.name && (t = cc.v2(-15, -20));
      }
    }

    var e = this.currentGuideNode.convertToWorldSpaceAR(t);
    var o = this.guideNodes.indexOf(this.currentGuideNode);
    this.dict.handText.getComponent(cc.Label).string = this.guideText[o];
    var i = this.dict.hand.parent.convertToNodeSpaceAR(e);
    this.dict.hand.position = i;
    this.dict.hand.children[0].getComponent(cc.Animation).play();
    cc.tween(this.dict.sz).to(0.6, {
      scale: 1
    }).to(0.6, {
      scale: 1.1
    }).union().repeatForever().start();
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

  e.prototype.changeCar = function (t, e, o, i) {
    if (void 0 === o) {
      o = 0;
    }

    return __awaiter(this, void 0, void 0, function () {
      var r;
      var n;
      var a;
      var c;
      var l;
      var h;
      var p;
      var g;
      var m = this;
      return __generator(this, function () {
        t.getComponent($level_29086_boxCarItem["default"]).isReadyDestroy = !0;
        r = t.getComponent($level_29086_boxCarItem["default"]).colorImgName;
        n = t.getComponent($level_29086_boxCarItem["default"]).lenImgName;

        if (i) {
          (a = cc.instantiate(this.dict.carPrefab.getChildByName(i))).parking = t.parking;
        } else {
          a = cc.instantiate(this.dict.carPrefab.getChildByName("02" + n));
        }

        a.getComponent($level_29086_boxCarItem["default"]).carState = t.getComponent($level_29086_boxCarItem["default"]).carState;
        a.active = !1;
        this.carRoot.addChild(a);
        a.getComponent($level_29086_boxCarItem["default"]).mgr = this;
        a.getComponent($level_29086_boxCarItem["default"]).colorImgName = r;
        a.getComponent($level_29086_boxCarItem["default"]).lenImgName = n;
        a.getComponent($level_29086_boxCarItem["default"]).dirImgName = e;
        a.getComponent($level_29086_boxCarItem["default"]).carColor = t.getComponent($level_29086_boxCarItem["default"]).carColor;

        if (4 == e || 5 == e) {
          a.position = cc.v2(t.x, t.y);
          l = a.convertToWorldSpaceAR(cc.v2(0, t.height / 2));
          c = a.parent.convertToNodeSpaceAR(l);
          a.position = cc.v2(c.x, c.y);
        } else {
          if (0 == o) {
            a.position = cc.v2(t.x, t.y + t.height / 2);
          } else {
            if (a.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.OnBottomLeft) {
              a.position = cc.v2(t.x - t.width / 2, t.y);
            } else {
              if (a.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.OnBottomRight) {
                a.position = cc.v2(t.x + t.width / 2, t.y);
              } else {
                1 == o ? (l = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position), c = a.parent.convertToNodeSpaceAR(l), a.position = cc.v2(t.x + t.width / 2, c.y)) : (l = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position), c = a.parent.convertToNodeSpaceAR(l), a.position = cc.v2(t.x - t.width / 2, c.y));
              }
            }
          }
        }

        if (a.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.GoingParking) {
          h = a.parking.convertToWorldSpaceAR(cc.v2(0, 0));
          c = a.parent.convertToNodeSpaceAR(h);
          a.position = cc.v2(c.x, c.y);
        }

        p = "f29086_" + $level_29086_config.getCarImgByColor(a, t.getComponent($level_29086_boxCarItem["default"]).carColor);
        g = "f29086_" + $level_29086_config.getCarBodyImgByColor(a, t.getComponent($level_29086_boxCarItem["default"]).carColor);
        a.stopAllActions();

        (function () {
          if (t.getChildByName("tailGasSpine")) {
            m.poolMgr.put(t.getChildByName("tailGasSpine"), "tailGasSpine");
          }

          if (t.getChildByName("tailGas")) {
            t.getChildByName("tailGas").destroy();
          }

          var e = t.getComponent($level_29086_boxCarItem["default"]).nextCar;

          try {
            if (e && e.getComponent($level_29086_boxCarItem["default"])) {
              e.getComponent($level_29086_boxCarItem["default"]).carState = $level_29086_config.CarState.Normal;
            }
          } catch (v) {}

          if (t.isTransportBox) {
            m.dict.transportLayer.getComponent($level_29086_transport["default"]).reduceCarAmount(t);
          }

          t.destroy();
          a.getChildByName("car").getComponent(cc.Sprite).spriteFrame = m.box2SpriteAtlas.getSpriteFrame(p);

          if (a.getChildByName("body")) {
            a.getChildByName("body").getComponent(cc.Sprite).spriteFrame = m.box2SpriteAtlas.getSpriteFrame(g);
          }

          a.active = !0;
          var o = a.convertToWorldSpaceAR(cc.v2(0, 2250));
          var i = a.parent.convertToNodeSpaceAR(o);

          if (a.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.InRoadRight || a.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.InRoadLeft) {
            var r;
            var n = a.parent.convertToWorldSpaceAR(a.position);
            var s = void 0;

            if (a.getComponent($level_29086_boxCarItem["default"]).isFireEngine) {
              var c = a.parking.getChildByName("fireCarPos").position;
              s = a.parking.convertToWorldSpaceAR(c);
            } else {
              s = a.parking.currentParkingWPos;
            }

            a.setSiblingIndex(0);
            r = a.parking.currentParkingNPos;
            var l = Math.abs(s.x - n.x);
            m.addTailGasSpine(a);
            cc.tween(a).to(l / a.getComponent($level_29086_boxCarItem["default"]).speed, {
              x: r.x
            }).call(function () {
              a.getComponent($level_29086_boxCarItem["default"]).carState = $level_29086_config.CarState.GoingParking;
              console.log("isRichCar", a.getComponent($level_29086_boxCarItem["default"]).isRichCar);

              if (a.getComponent($level_29086_boxCarItem["default"]).isRichCar) {
                m.changeCar(a, 6, 0, "116" + a.getComponent($level_29086_boxCarItem["default"]).lenImgName);
              } else {
                if (a.getComponent($level_29086_boxCarItem["default"]).isTramcar) {
                  m.changeCar(a, 6, 0, "136" + a.getComponent($level_29086_boxCarItem["default"]).lenImgName);
                } else {
                  m.changeCar(a, 6, 0, "06" + a.getComponent($level_29086_boxCarItem["default"]).lenImgName);
                }
              }
            }).start();
          } else if (a.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.GoingParking) {
            s = void 0;

            if (a.parking) {
              s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.parking.height / 2));
              var h = a.parent.convertToNodeSpaceAR(s);
              a.getComponent($level_29086_boxCarItem["default"]).carState = $level_29086_config.CarState.Parking;
              a.stopAllActions();
              a.getChildByName("car").getComponent(cc.Sprite).spriteFrame = m.box2SpriteAtlas.getSpriteFrame(p);

              if (a.getChildByName("body")) {
                a.getChildByName("body").getComponent(cc.Sprite).spriteFrame = m.box2SpriteAtlas.getSpriteFrame(g);
              }

              l = h.sub(a.position).mag();
              cc.tween(a).to(l / a.getComponent($level_29086_boxCarItem["default"]).speed, {
                position: h
              }).call(function () {
                m.updateCarWeight();
                a.parking.car = a;
                var t = a.getComponent($level_29086_boxCarItem["default"]).seatTotalAmount;
                a.getChildByName("sd").active = !1;
                a.getChildByName("shadow").active = !0;
                var e = Number(a.name[2]);
                var o = a.getComponent($level_29086_boxCarItem["default"]).carColor;

                if (a.getChildByName("body")) {
                  a.getChildByName("body").active = !1;
                }

                a.getChildByName("car").active = !1;
                a.getChildByName("sd").active = !1;
                a.getChildByName("shadow").active = !1;
                a.getChildByName("boxSpine").active = !0;
                a.getChildByName("boxSpine").getComponent(sp.Skeleton).timeScale = 2;
                a.getChildByName("boxSpine").getComponent(sp.Skeleton).setSkin("skin" + (o + 1));
                a.getChildByName("boxSpine").getComponent(sp.Skeleton).setAnimation(0, "open" + (3 - e + 1), !1);
                a.getChildByName("boxSpine").getComponent(sp.Skeleton).setCompleteListener(function () {
                  a.getComponent($level_29086_boxCarItem["default"]).carState = $level_29086_config.CarState.OutParking;
                  var e = m.getCannon();

                  if (m._item4Start) {
                    m.showItem4Spine(e);
                  }

                  if (m._item5Start) {
                    m.showItem5Spine(e);
                  }

                  m.dict.cannonRoot.addChild(e);
                  e.position = e.parent.convertToNodeSpaceAR(a.parking.convertToWorldSpaceAR(cc.v2(0, 0)));
                  e.getChildByName("body").getComponent(cc.Sprite).spriteFrame = m.box2SpriteAtlas.getSpriteFrame("f29086_" + (o + 1 + 2e3));
                  e.getChildByName("bullet").getComponent(cc.Sprite).spriteFrame = m.box2SpriteAtlas.getSpriteFrame("f29086_" + (o + 1 + 2200));
                  e.getChildByName("num").getComponent(cc.Label).string = "x" + t;
                  e.parking = a.parking;
                  e[m._cannonType] = o;
                  e[m._cannonNum] = t;
                  e[m._cannonState] = 0;
                  e.getChildByName("cannon").getComponent(sp.Skeleton).setSkin("skin" + (o + 1));
                  e.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "enter", !1);
                  e.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(function () {
                    e[m._cannonState] = 1;
                    e.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "idle", !0);
                  });
                });
                m.putTailGas(a);
              }).start();
            }
          } else if (a.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.GoingRoad) {
            n = m.dict.road.parent.convertToWorldSpaceAR(m.dict.road.position);
            var f = a.parent.convertToWorldSpaceAR(a.position);
            l = Math.abs(f.y - n.y);
            m.addTailGasSpine(a);
            cc.tween(a).by(l / a.getComponent($level_29086_boxCarItem["default"]).speed, {
              y: l
            }).call(function () {
              m.collision(a);
            }).start();
          } else {
            m.addTailGasSpine(a);
            cc.tween(a).to(2250 / a.getComponent($level_29086_boxCarItem["default"]).speed, {
              position: i
            }).start();
          }
        })();

        return [2];
      });
    });
  };

  e.prototype.load = function (t) {
    return __awaiter(this, void 0, Promise, function () {
      return __generator(this, function () {
        return [2, new Promise(function (e, o) {
          cc.resources.load(t, function (t, i) {
            if (t) {
              return cc.warn(t), o(t);
            } else {
              return e(new cc.SpriteFrame(i));
            }
          });
        })];
      });
    });
  };

  e.prototype.putTailGas = function (t) {
    if (t.getChildByName("tailGas")) {
      this.poolMgr.put(t.getChildByName("tailGas"), "tailGas");
    }
  };

  e.prototype.hit = function (t) {
    var e = cc.instantiate(this.dict.hitSpine);

    if (e) {
      t.addChild(e);
      e.position = cc.v2(0, 0);
      this.scheduleOnce(function () {
        e.destroy();
      }, 1);
    }
  };

  e.prototype.collision = function (t) {
    t.getComponent($level_29086_boxCarItem["default"]).isReadyDestroy = !0;

    if (!t.getComponent($level_29086_boxCarItem["default"]).isFireEngine) {
      var e = t;
      var o = void 0;

      for (var i = 0; i < this.parkingNodes.length; i++) {
        var r = this.parkingNodes[i];

        if (r.isEmpty) {
          r.isEmpty = !1;
          e.parking = r;
          o = r;
          break;
        }
      }

      if (o) {
        var n = e.parent.convertToWorldSpaceAR(e.position);
        var a = o.currentParkingWPos;

        if (n.x >= a.x) {
          e.getComponent($level_29086_boxCarItem["default"]).carState = $level_29086_config.CarState.InRoadLeft;

          if (e.getComponent($level_29086_boxCarItem["default"]).isRichCar) {
            e.getComponent($level_29086_boxCarItem["default"]).lenImgName = 1, this.changeCar(e, 1, 2, "111" + e.getComponent($level_29086_boxCarItem["default"]).lenImgName + "-0");
          } else {
            this.changeCar(e, 1, 2, "01" + e.getComponent($level_29086_boxCarItem["default"]).lenImgName + "-0");
          }
        } else {
          e.getComponent($level_29086_boxCarItem["default"]).carState = $level_29086_config.CarState.InRoadRight;

          if (e.getComponent($level_29086_boxCarItem["default"]).isRichCar) {
            e.getComponent($level_29086_boxCarItem["default"]).lenImgName = 1, this.changeCar(e, 1, 1, "111" + e.getComponent($level_29086_boxCarItem["default"]).lenImgName + "-1");
          } else {
            this.changeCar(e, 1, 1, "01" + e.getComponent($level_29086_boxCarItem["default"]).lenImgName + "-1");
          }
        }
      }
    }
  };

  e.prototype.saveParkingWPos = function () {
    for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
      var e = this.dict.parkingRoot.children[t];
      e.currentParkingWPos = e.convertToWorldSpaceAR(cc.v2(0, -168.549));
      e.currentParkingNPos = this.dict.carRoot.convertToNodeSpaceAR(e.currentParkingWPos);
    }

    console.log("初始算好每个车位的停车点的世界坐标");
  };

  e.prototype.onLevelReady = function () {
    var t = this;
    this.saveParkingWPos();
    this.dict.carRoot.children.forEach(function (e) {
      if (e.childrenCount >= 3) {
        var o = "";

        if (71 == e.children[0].width && 88 == e.children[0].height) {
          o = "f29076_1-s";
        } else {
          if (70 == e.children[0].width && 117 == e.children[0].height) {
            o = "f29076_4-s";
          } else {
            if (100 == e.children[0].width && 87 == e.children[0].height) {
              o = "f29076_6-s";
            } else {
              if (70 == e.children[0].width && 147 == e.children[0].height) {
                o = "f29076_7-s";
              } else {
                130 == e.children[0].width && 88 == e.children[0].height && (o = "f29076_9-s");
              }
            }
          }
        }

        e.children[0].getComponent(cc.Sprite).spriteFrame = t.box2SpriteAtlas.getSpriteFrame(o);
      }
    });
    this.dict.carPrefab.children.forEach(function (e) {
      if (e.childrenCount >= 3) {
        var o = "";

        if (71 == e.children[0].width && 88 == e.children[0].height) {
          o = "f29076_1-s";
        } else {
          if (70 == e.children[0].width && 117 == e.children[0].height) {
            o = "f29076_4-s";
          } else {
            if (100 == e.children[0].width && 87 == e.children[0].height) {
              o = "f29076_6-s";
            } else {
              if (70 == e.children[0].width && 147 == e.children[0].height) {
                o = "f29076_7-s";
              } else {
                130 == e.children[0].width && 88 == e.children[0].height && (o = "f29076_9-s");
              }
            }
          }
        }

        e.children[0].getComponent(cc.Sprite).spriteFrame = t.box2SpriteAtlas.getSpriteFrame(o);
      }
    });

    if (window.f29086_LevelData) {
      if (this._roleLevel != window.f29086_LevelData.heroLevel) {
        this._roleLevel = window.f29086_LevelData.heroLevel;
      }

      if (this._roleSkin != window.f29086_LevelData.useSkin[0]) {
        this._roleSkin = window.f29086_LevelData.useSkin[0];
      }

      if (this._dragonSkin != window.f29086_LevelData.useSkin[1]) {
        this._dragonSkin = window.f29086_LevelData.useSkin[1];
      }
    }

    if (this._roleLevel >= 7) {
      this._roleHp += 2;
    } else {
      if (this._roleLevel >= 4) {
        this._roleHp += 1;
      }
    }

    if (this._roleLevel >= 8) {
      this._roleLevel2Time += 2;
    }

    this._roleCurHp = this._roleHp;
    this.updateRoleHp();
    this.initView();
  };

  e.prototype.initView = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i;
      var r;
      var n;
      var a;
      var c;
      var l;
      var h;
      var p;
      var g;
      var v;

      var _;

      var S;
      var k;
      var A;
      var N;
      var P;
      var x;
      var b;
      var R;
      var T;
      var B;
      var W = this;
      return __generator(this, function () {
        if (this.dict.guide) {
          this.scheduleOnce(function () {
            W.dict.guide.active = !1;
          }, 6);
        }

        if (this.levelDataJSON.transport) {
          this.dict.transportLayer.getComponent($level_29086_transport["default"]).init(this, this.levelDataJSON.transport);
        }

        for (_ = 0; _ < this.dict.parkingRoot.childrenCount; _++) {
          !(t = this.dict.parkingRoot.children[_]).active || t.getChildByName("videoLock") || t.getChildByName("fireSpine") || (t.isEmpty = !0, this.parkingNodes.push(t));
          t.getChildByName("videoLock") && (t.getChildByName("videoLock").active = !0, t.getChildByName("videoLock").getChildByName("text").getComponent(cc.Label).overflow = cc.Label.Overflow.SHRINK, t.getChildByName("videoLock").getChildByName("text").width = 80, t.getChildByName("videoLock").getChildByName("text").scale = 0.85);
        }

        if (this.isDebug) {
          e = [];

          for (_ = 0; _ < this.carRoot.childrenCount; _++) {
            o = this.carRoot.children[_];

            for (N = 0; N < e.length; N++) {
              g = e[N];
              o.x == g[0] && o.y == g[1] && console.error("同一个位置复制多辆车", o.name, _);
            }

            e.push([o.x, o.y]);
          }
        }

        if (this.levelDataJSON.carpark) {
          this.dict.carParkRoot.getComponent($level_29086_carPark["default"]).init(this, this.levelDataJSON.carpark);
        }

        i = this.getLocal("blackCar") || [];
        r = this.carRoot.children.concat(this.turntableCarArr);

        for (_ = 0; _ < r.length; _++) {
          n = r[_];
          this.carNodeArr.push(n);
          n.getComponent($level_29086_boxCarItem["default"]).mgr = this;
          n.indexID = "" + _;
          a = this.getPath(n);
          this.levelDataJSON.blackAmount && !i.length && a >= 2 && a <= 4 && this.between2_4CarArr.push(n);
          n.getComponent($level_29086_boxCarItem["default"]).path = a;
          this.isDebug && ((c = new cc.Node()).name = "path", c.addComponent(cc.Label).string = "" + a, c.color = cc.Color.WHITE, n.addChild(c), c.position = cc.v2(-13.105, -26.21));
          this.allPersonAmount += n.getComponent($level_29086_boxCarItem["default"]).seatTotalAmount;
        }

        console.log("总上车人数", this.allPersonAmount);
        this.allPersonAmount2 = this.allPersonAmount;
        cc.game.emit("allPersonAmount", this.allPersonAmount, this.allPersonAmount2);

        if (this.mapType < 100) {
          window.f29086_dragonBall = 1;
        } else {
          window.f29086_dragonBall = 2;
        }

        window.f29086_coin = this.allPersonAmount2;
        this.setCarID();

        if (this.levelDataJSON.blackAmount && !i.length) {
          if (this.levelDataJSON.blackAmount >= this.between2_4CarArr.length) {
            for (N = 0; N < this.between2_4CarArr.length; N++) {
              (g = this.between2_4CarArr[N]).getComponent($level_29086_boxCarItem["default"]).isBlackCar = !0;
              i.push(g.getComponent($level_29086_boxCarItem["default"]).carID);
            }
          } else {
            l = this.getRandomDistinctElements(this.between2_4CarArr, this.levelDataJSON.blackAmount);

            for (N = 0; N < l.length; N++) {
              (g = l[N]).getComponent($level_29086_boxCarItem["default"]).isBlackCar = !0;
              i.push(g.getComponent($level_29086_boxCarItem["default"]).carID);
            }
          }

          this.setLocal("blackCar", i);
        }

        h = this.getLocal("colorConfig") || [];

        if (-29095 == this.levelID) {
          h = [4, 1, 3, 0];
        } else {
          this.sortColor_new = this.shuffleArray(JSON.parse(JSON.stringify($level_29086_config.sortColor)));
        }

        if (0 == h.length) {
          p = this.levelDataJSON.carColor;

          for (N = 0; N < p.length; N++) {
            g = p[N];
            this.randomColorArr.push(this.getArrByLen([0, 1, 2, 3, 4, 5, 6, 7], g[2]));
            this.randomColorNum[N] || (this.randomColorNum[N] = 0);
          }

          for (_ = 0; _ < this.carNodeArr.length; _++) {
            v = this.carNodeArr[_];
            k = this.getCarColor(_, p);
            h.push(k);
            this.setCarColorImg(v, k);
            (A = this.levelDataJSON.carWeight[v.getComponent($level_29086_boxCarItem["default"]).path - 1]) || (A = 1);
            this.carWeight[k] += A * v.getComponent($level_29086_boxCarItem["default"]).emptySeatAmount;
          }

          this.setLocal("colorConfig", h);
        } else {
          for (_ = 0; _ < this.carNodeArr.length; _++) {
            S = this.carNodeArr[_];
            k = h[_];
            i.includes(S.getComponent($level_29086_boxCarItem["default"]).carID) && (S.getComponent($level_29086_boxCarItem["default"]).isBlackCar = !0);
            this.setCarColorImg(S, k);
            (A = this.levelDataJSON.carWeight[S.getComponent($level_29086_boxCarItem["default"]).path - 1]) || (A = 1);
            this.carWeight[k] += A * S.getComponent($level_29086_boxCarItem["default"]).emptySeatAmount;
          }
        }

        console.log("车辆权重", this.carWeight);
        console.log("颜色", $level_29086_config.colorDes);
        console.log("人数", this.colorPersonArr);

        for (N = 0; N < $level_29086_config.colorDes.length; N++) {
          this.getAmountByColor(N);
        }

        console.log("this.colorPersonAmountArr", this.colorPersonAmountArr);
        console.log("this.colorPersonAmountArrIndex", this.colorPersonAmountArrIndex);

        if (-29095 == this.levelID) {
          this.colorPersonAmountArr = [[3, 3], [4, 6], [], [3, 1], [3, 3, 4], [], [], []];
          this.firstSortIndexArr = [1, 4, 0, 3, 4, 3, 0, 1, 4];
        }

        (P = cc.instantiate(this.dict.longtou)).getComponent($level_29086_dragonItem["default"]).dragonColor = 1;
        this.dragonRoot.addChild(P, 999);
        P.longtou = !0;
        P.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
        P._moveIndex = 0;
        P[this._mBodyMoveDis] = 0;
        P[this._mBodyMoveBackDis] = 0;
        P[this._mBodyEven] = !0;
        P.active = !1;
        this.changeDragonSkin(P, function () {
          P.active = !0;
        });
        this.updateBodyPos(P);
        this.dict.hpPrefab.parent = P;
        this.dict.hpPrefab.position = cc.v2();
        this.dict.hpPrefab.active = !1;
        cc.tween(P).delay($levelUtils["default"].getRandomInt(3, 8)).call(function () {
          if (W.isWin || W.isReviveBack || W._item1Start) {//
          } else {
            P.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
            P.getComponent(sp.Skeleton).addAnimation(0, "angry", !1);
            P.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);
          }
        }).delay(1.5).union().repeatForever().start();
        this._curLastBoxItemNode = P;

        if (this.personPosRoot2) {
          (x = cc.instantiate(this.dict.longtou)).getComponent($level_29086_dragonItem["default"]).dragonColor = 1;
          this.dragonRoot.addChild(x, 999);
          x.longtou = !0;
          x.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
          x._moveIndex = 0;
          x[this._mBodyMoveDis] = 0;
          x[this._mBodyMoveBackDis] = 0;
          x[this._mBodyEven] = !1;
          x.active = !1;
          this.changeDragonSkin(x, function () {
            x.active = !0;
          });
          this.updateBodyPos(x);
          cc.tween(x).delay($levelUtils["default"].getRandomInt(3, 8)).call(function () {
            if (W.isWin || W.isReviveBack || W._item1Start) {//
            } else {
              x.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
              x.getComponent(sp.Skeleton).addAnimation(0, "angry", !1);
              x.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);
            }
          }).delay(1.5).union().repeatForever().start();
          this._curLastBoxItemNode2 = x;
        }

        this.createPerson(!1, function () {
          W.createFinish = !0;
        });
        this.sortPersonNodes.unshift(P);

        if (x) {
          this.sortPersonNodes2.unshift(x);
        }

        b = this._mapConfig[this.roleNode._moveIndex];
        R = cc.v2(b[0], b[1]);
        R = this.dict.personPosRoot.convertToWorldSpaceAR(R);
        this.roleNode.active = !1;
        this.changeRoleSkin(this.roleNode, function () {
          W.roleNode.active = !0;
        });
        this.roleNode.position = this.roleNode.parent.convertToNodeSpaceAR(R).add(cc.v2(0, -20));
        this.updateRoleHp();
        this.updateRoleHpPos();
        (T = this.dict.roleText).active = !0;
        T.scale = 0;
        this.dict.roleHpNode.active = !1;
        cc.tween(T).to(0.3, {
          scale: 1
        }).delay(1).to(0.05, {
          angle: -10
        }).to(0.05, {
          angle: 10
        }).to(0.05, {
          angle: -10
        }).to(0.05, {
          angle: 10
        }).to(0.05, {
          angle: 0
        }).delay(1).to(0.05, {
          angle: -10
        }).to(0.05, {
          angle: 10
        }).to(0.05, {
          angle: -10
        }).to(0.05, {
          angle: 10
        }).to(0.05, {
          angle: 0
        }).delay(0.8).to(0.3, {
          scale: 0
        }).call(function () {
          W.dict.roleHpNode.active = !0;
        }).start();
        this.roleNode._targetPos = this.roleNode.position;
        B = cc.v2(this._mapConfig[0][0], this._mapConfig[0][1]);
        B = this.dict.personPosRoot.convertToWorldSpaceAR(B);
        this.dict["f29086.48"].position = this.dict["f29086.48"].parent.convertToNodeSpaceAR(B).add(cc.v2(0, 0));
        this.dict["f29086.csm"].position = this.dict["f29086.csm"].parent.convertToNodeSpaceAR(B).add(cc.v2(0, 0));
        this.dict["f29086.48"].scale = 1;
        this.dict["f29086.csm"].scale = 0.8;
        this.updateHp();
        this.onTouch();
        this.isCanStartClick = !0;
        return [2];
      });
    });
  };

  e.prototype.checkHasCarMove = function () {
    var t = !1;
    var e = this.carRoot.children.concat(this.turntableCarArr);

    for (var o = 0; o < e.length; o++) {
      var i = e[o];

      if (i.getComponent($level_29086_boxCarItem["default"]).carState != $level_29086_config.CarState.Idle && i.getComponent($level_29086_boxCarItem["default"]).carState != $level_29086_config.CarState.Normal && i.getComponent($level_29086_boxCarItem["default"]).carState != $level_29086_config.CarState.Parking) {
        t = !0;
        break;
      }
    }

    return t;
  };

  e.prototype.checkHasCarMoveAmount = function () {
    var t = 0;
    var e = this.carRoot.children.concat(this.turntableCarArr);

    for (var o = 0; o < e.length; o++) {
      var i = e[o];

      if (i && cc.isValid(i, !0) && i.active && i.getComponent($level_29086_boxCarItem["default"]).carState != $level_29086_config.CarState.Idle && i.getComponent($level_29086_boxCarItem["default"]).carState != $level_29086_config.CarState.OutParking) {
        t += 1;
      }
    }

    return t;
  };

  e.prototype.onTouch = function () {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);

    for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
      var e = this.dict.parkingRoot.children[t];

      if (e.getChildByName("videoLock")) {
        e.on(cc.Node.EventType.TOUCH_START, this.touchStart_parking, this);
      }
    }
  };

  e.prototype.fun_unlockNewPos = function () {
    for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
      var e = this.dict.parkingRoot.children[t];

      if (e.getChildByName("videoLock")) {
        this.unlockParkingTarget = e;
        e.getChildByName("videoLock").destroy();
        e.getChildByName("empty").active = !0;
        e.isEmpty = !0;
        this.parkingNodes.push(e);
        return void this.playUnlockSpine(e);
      }
    }
  };

  e.prototype.touchStart_parking = function (t) {
    var e = this;

    if (!this.isWin && !this._removeStage) {
      var o = t.target;
      $platformManager.Platform.showRewardAds(function (t) {
        if (0 == t && o.getChildByName("videoLock")) {
          o.getChildByName("videoLock").destroy();
          o.getChildByName("empty").active = !0;
          o.isEmpty = !0;
          e.parkingNodes.push(o);
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
            queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
            id: 1,
            sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
          });
          e.playUnlockSpine(o);
        }
      });
    }
  };

  e.prototype.playUnlockSpine = function (t) {
    var e = cc.instantiate(this.dict.jiesuo);
    this.node.addChild(e);
    var o = t.convertToWorldSpaceAR(cc.v2(0, 0));
    var i = this.node.convertToNodeSpaceAR(o);
    e.position = i;
    e.getComponent(sp.Skeleton).premultipliedAlpha = !1;
    e.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    var r = t.getChildByName("unlockTips");

    if (r) {
      r.removeFromParent();
      r.active = !1;
    }

    cc.game.emit("unlockVideoLock", this.func_hasLockParking());
  };

  e.prototype.func_unlockParking = function () {
    this.playUnlockSpine(this.unlockParkingTarget);
    this.unlockParkingTarget.getChildByName("videoLock").destroy();
    this.unlockParkingTarget.getChildByName("empty").active = !0;
    this.unlockParkingTarget.isEmpty = !0;
    this.parkingNodes.push(this.unlockParkingTarget);
  };

  e.prototype.touchStart = function (t) {
    if (this.isCanStartClick) {
      t.target;
      var e = t.getLocation();

      if (this.carparkIng) {
        return console.log("限制车库车点击");
      }

      var o = this.carRoot.children.concat(this.turntableCarArr);

      for (var i = 0; i < o.length; i++) {
        var r = o[i];
        var n = r.getChildByName("car").getComponent(cc.PolygonCollider);

        if (r.active && cc.Intersection.pointInPolygon(e, this.getWPosByPolygon(n))) {
          this._touchBegin = !0;

          if (this._removeStage && !this._removeClick && r.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.Idle && !r.obliqueHead && !r.getComponent($level_29086_boxCarItem["default"]).isFireEngine) {
            return void this.remove(r);
          }

          console.log("新增限制快速点击", this.moveCarAmount, this.parkingNodes.length);

          if (this.moveCarAmount >= this.parkingNodes.length) {
            console.log("限制快速点击");
            return this.show("需要解锁更多炮台位置");
          }

          var a = r.getComponent($level_29086_boxCarItem["default"]).nextCar;
          var s = r.getComponent($level_29086_boxCarItem["default"]).prevCar;

          if ((a || s) && this.moveCarAmount >= this.parkingNodes.length - 1) {
            console.log("限制快速点击2");
            return this.show("需要两个停车位", 0.8, 1);
          }

          if (255 != r.opacity) {
            return;
          }

          if (r.getChildByName("lock")) {
            return void r.runAction(r.getComponent($level_29086_boxCarItem["default"]).shackAction(0.1, 2));
          }

          if (r.isScaleAnim) {
            return;
          }

          if (this.isSortAnim) {
            return;
          }

          if (r.isCarPark && !r.isWen) {
            return console.log("限制车库车,没停稳");
          }

          if (!r.getComponent($level_29086_boxCarItem["default"]).isCanClick) {
            return;
          }

          if (r.getComponent($level_29086_boxCarItem["default"]).carState != $level_29086_config.CarState.Idle) {
            return;
          }

          if (r.obliqueHead) {
            return void r.runAction(this.shackAction(0.1, 2));
          }

          if (this.dict.hand && this.dict.hand.active && (this.guidedNodes.push(r), this.currentGuideNode == r)) {
            var c = !1;

            for (var l = 0; l < this.guideNodes.length; l++) {
              var h = this.guideNodes[l];

              if (-1 == this.guidedNodes.indexOf(h)) {
                this.currentGuideNode = h;
                this.handPos();
                c = !0;
                break;
              }
            }

            if (c) {//
            } else {
              this.dict.hand.active = !1;
              this.dict.handText.active = !1;
              this.dict.handText.parent.active = !1;
            }
          }

          var p = !1;

          for (l = 0; l < this.parkingNodes.length; l++) {
            if (this.parkingNodes[l].isEmpty) {
              p = !0;
              break;
            }
          }

          if (!p) {
            console.log("所有车位都被占用了");
            return this.show("目前车位已满", 0.8, 1);
          }

          if (a || s) {
            var g = 0;

            for (l = 0; l < this.parkingNodes.length; l++) {
              if (this.parkingNodes[l].isEmpty) {
                g += 1;
              }
            }

            if (g <= 1) {
              console.log("拉链车-所有车位都被占用了");
              return this.show("需要两个停车位", 0.8, 1);
            }
          }

          if (this.checkHasCarMoveAmount() >= this.parkingNodes.length) {
            console.log("有相等于车位总量的车在运动，无法出车");
            return this.show("需要解锁更多炮台位置");
          }

          console.log("有" + this.checkHasCarMoveAmount() + "辆车在动！", this.parkingNodes.length);

          if ((a || s) && this.parkingNodes.length - this.checkHasCarMoveAmount() <= 1) {
            console.log("拉链车不能出车");
            return this.show("需要解锁更多炮台位置");
          }

          r.stopAllActions();

          if (r.isTransportBox) {
            this.dict.transportLayer.getComponent($level_29086_transport["default"]).setTransportCarNoMove(r);
          }

          var m = r.convertToWorldSpaceAR(cc.v2(0, 2250));
          var f = r.parent.convertToNodeSpaceAR(m);
          r.getComponent($level_29086_boxCarItem["default"]).otherCarNode = this.getOtherCarByDistance(r);
          r.getComponent($level_29086_boxCarItem["default"]).oldPos = r.position;

          if (a) {
            a.getComponent($level_29086_boxCarItem["default"]).otherCarNode = this.getOtherCarByDistance(a, !0);
            a.getComponent($level_29086_boxCarItem["default"]).oldPos = a.position;
          }

          if (s) {
            s.getComponent($level_29086_boxCarItem["default"]).otherCarNode = this.getOtherCarByDistance(s, !0);
            s.getComponent($level_29086_boxCarItem["default"]).oldPos = s.position;
          }

          if (r.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.Idle) {
            r.getComponent($level_29086_boxCarItem["default"]).carState = $level_29086_config.CarState.Normal;

            if (r.getComponent($level_29086_boxCarItem["default"]).isFireEngine) {//
            } else {
              this.moveCarAmount += 1;
            }

            cc.tween(r).to(2250 / r.getComponent($level_29086_boxCarItem["default"]).speed, {
              position: f
            }).start();
          }

          if (r.isTransportBox || r.getComponent($level_29086_boxCarItem["default"]).isUTransportCar || 1 != r.getComponent($level_29086_boxCarItem["default"]).path) {//
          } else {
            this.addTailGasSpine(r);
            this.playRemoteSound("audio/f27312/f27312_Engine2");
          }

          break;
        }
      }
    }
  };

  e.prototype.checkHasCollision = function (t) {
    var e;
    var o;
    var i;
    var r;
    var n;
    var a;
    var s = t.width;
    var c = t.height;
    e = t.convertToWorldSpaceAR(cc.v2(-s / 2, -c));
    o = t.convertToWorldSpaceAR(cc.v2(-s / 2, 2250));
    i = t.convertToWorldSpaceAR(cc.v2(s / 2, -c));
    r = t.convertToWorldSpaceAR(cc.v2(s / 2, 2250));
    n = t.convertToWorldSpaceAR(cc.v2(0, -c));
    a = t.convertToWorldSpaceAR(cc.v2(0, 2250));
    var l = this.carRoot.children.concat(this.turntableCarArr);

    for (var h = 0; h < l.length; h++) {
      var p = l[h];

      if (p && p != t && p.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.Idle && p.active && !p.isTransportBox) {
        var g;
        var m;
        var f;
        var v;
        var y;
        var C;
        var _ = p.width;
        var S = p.height;
        g = p.convertToWorldSpaceAR(cc.v2(-_ / 2, -S));
        m = p.convertToWorldSpaceAR(cc.v2(-_ / 2, 0));
        f = p.convertToWorldSpaceAR(cc.v2(_ / 2, -S));
        v = p.convertToWorldSpaceAR(cc.v2(_ / 2, 0));
        y = p.convertToWorldSpaceAR(cc.v2(_ / 2 + 1, 0));
        C = p.convertToWorldSpaceAR(cc.v2(-_ / 2 - 1, 0));

        if (cc.Intersection.lineLine(e, o, g, m) || cc.Intersection.lineLine(e, o, f, v) || cc.Intersection.lineLine(i, r, g, m) || cc.Intersection.lineLine(i, r, f, v) || cc.Intersection.lineLine(e, o, y, C) || cc.Intersection.lineLine(n, a, y, C)) {
          return !0;
        }
      }
    }

    return !1;
  };

  e.prototype.addTailGasSpine = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      return __generator(this, function () {
        e = cc.instantiate(this.dict.tailGas);
        t.addChild(e);
        e.position = cc.v2(0, -t.height);

        if (e.getComponent($motionTrail["default"])) {
          e.getComponent($motionTrail["default"]).active = !0;
        }

        return [2];
      });
    });
  };

  e.prototype.getWPosByPolygon = function (t) {
    var e = t.points;
    var o = [];

    for (var i = 0; i < e.length; i++) {
      var r = cc.v2(e[i].x + t.offset.x, e[i].y + t.offset.y);
      var n = t.node.convertToWorldSpaceAR(r);
      o.push(n);
    }

    return o;
  };

  e.prototype.getRandomDistinctElements = function (t, e) {
    var o = [];

    for (var i = 0; i < e; i++) {
      var r = Math.floor(Math.random() * (t.length - i));

      if (o.includes(t[r])) {//
      } else {
        o.push(t[r]);
        t[r] = t[t.length - i - 1];
      }
    }

    return o;
  };

  e.prototype.setCarColorImg = function (t, e) {
    var o;
    var i;
    var r = t.getComponent($level_29086_boxCarItem["default"]);
    r.carColor = e;

    if (this.colorPersonArr[e]) {//
    } else {
      this.colorPersonArr[e] = 0;
    }

    this.colorPersonArr[e] += r.seatTotalAmount;
    r.colorImgName = e + 1;
    r.dirImgName = $level_29086_config.CarDirImg[Math.round(Math.abs(t.angle))];
    r.lenImgName = $level_29086_config.CarLenImg[r.seatTotalAmount];
    o = "f29086_" + $level_29086_config.getCarImgByColor(t, e);
    i = "f29086_" + $level_29086_config.getCarBodyImgByColor(t, e);
    t.parent.active = !0;
    t.active = !0;
    t.getChildByName("car").getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame(o);

    if (t.getChildByName("body")) {
      t.getChildByName("body").getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame(i);
    }

    if (this.levelDataJSON.carWeight[r.path]) {//
    } else {
      this.levelDataJSON.carWeight[r.path] = 0;
    }

    if (t.isCarPark) {
      t.active = !1;
    }
  };

  e.prototype.updateCarWeight = function () {
    var t = this;
    this.carWeight = new Array(this.colorTypeAmount).fill(0);
    var e = this.carRoot.children.concat(this.turntableCarArr);

    var o = function o(_o) {
      var r = e[_o];

      if (r && r.getComponent($level_29086_boxCarItem["default"]) && r.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.Idle && !r.isTransportBox && !r.getComponent($level_29086_boxCarItem["default"]).isUTransportCar) {
        r.path = null;
        var n = i.getPath(r);
        r.getComponent($level_29086_boxCarItem["default"]).path = n;

        if (1 == n && r.getComponent($level_29086_boxCarItem["default"]).isBlackCar && !r.isNoBlack) {
          r.isScaleAnim = !0;
          cc.tween(r).to(0.2, {
            scale: 1.2
          }).to(0.2, {
            scale: 1
          }).call(function () {
            r.isScaleAnim = !1;
            r.getChildByName("dir").active = !1;
            var e = "texture/" + t.folder + "/" + t.folder + "_3";

            if (128 == Math.round(Math.abs(r.angle))) {
              e = "texture/" + t.folder + "/" + t.folder + "_4";
            } else {
              if (90 == Math.round(Math.abs(r.angle))) {
                e = "texture/" + t.folder + "/" + t.folder + "_2";
              } else {
                0 == Math.round(Math.abs(r.angle)) && (e = "texture/" + t.folder + "/" + t.folder + "_1");
              }
            }

            cc.resources.load(e, function (t, e) {
              if (t) {//
              } else {
                r.getChildByName("dir").active = !0;

                if (e) {
                  r.getChildByName("dir").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                }
              }
            });
            var o = r.getComponent($level_29086_boxCarItem["default"]);
            var i = "" + o.colorImgName + o.dirImgName + o.lenImgName;
            var n = "texture/" + t.folder + "/" + t.folder + "_" + i;
            r.getChildByName("car").active = !1;
            r.isNoBlack = !0;
            cc.resources.load(n, function (t, e) {
              if (t) {//
              } else {
                r.getChildByName("car").active = !0;

                if (e) {
                  r.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                }
              }
            });
          }).start();
        }

        if (i.isDebug && r.getChildByName("path")) {
          r.getChildByName("path").getComponent(cc.Label).string = "" + n;
        }

        var a = i.levelDataJSON.carWeight[n - 1];

        if (a) {//
        } else {
          a = 1;
        }

        i.carWeight[r.getComponent($level_29086_boxCarItem["default"]).carColor] += a * r.getComponent($level_29086_boxCarItem["default"]).emptySeatAmount;
      }
    };

    var i = this;

    for (var r = 0; r < e.length; r++) {
      o(r);
    }
  };

  e.prototype.createPerson = function (t, e) {
    if (void 0 === t) {
      t = !1;
    }

    var o = 0;

    for (var i = 0; i < this.currentPersonColorAmount.length; i++) {
      o += p = this.currentPersonColorAmount[i];
    }

    this.curCreatePersonAmount = o;

    if (o >= this.allPersonAmount2) {
      var r;
      var n;

      if (this.sortPersonNodes[this.sortPersonNodes.length - 1].longwei) {//
      } else {
        (r = cc.instantiate(this.dict.longwei)).getComponent($level_29086_dragonItem["default"]).dragonColor = 1;
        this.dragonRoot.addChild(r, 0);
        r.longwei = !0;
        r.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
        r._moveIndex = 0;
        r[this._mBodyMoveDis] = this._curLastBoxItemNode[this._mBodyMoveDis] - (this._curLastBoxItemNode.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
        r[this._mBodyMoveBackDis] = 0;
        r[this._mBodyEven] = !0;
        r.active = !1;
        this.changeDragonSkin(r, function () {
          r.active = !0;
        });
        this.sortPersonNodes.push(r);
        this._curLastBoxItemNode = r;
      }

      if (this.personPosRoot2 && !this.sortPersonNodes2[this.sortPersonNodes2.length - 1].longwei) {
        (n = cc.instantiate(this.dict.longwei)).getComponent($level_29086_dragonItem["default"]).dragonColor = 1;
        this.dragonRoot.addChild(n, 0);
        n.longwei = !0;
        n.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
        n._moveIndex = 0;
        n[this._mBodyMoveDis] = this._curLastBoxItemNode2[this._mBodyMoveDis] - (this._curLastBoxItemNode2.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
        n[this._mBodyMoveBackDis] = 0;
        n[this._mBodyEven] = !1;
        n.active = !1;
        this.changeDragonSkin(n, function () {
          n.active = !0;
        });
        this.sortPersonNodes2.push(n);
        this._curLastBoxItemNode2 = n;
      }
    } else {
      for (; this.sortPersonNodes.length + this.sortPersonNodes2.length < this.uiShowPersonAmount;) {
        var a = this.getPersonColor();
        var s = (i = this.colorPersonIndexArr[a], this.colorPersonAmountArr[a][i]);
        var c = Math.floor(o / this.allPersonAmount2 * 100);

        if (this.isReviveAmount) {
          s = 1;
        }

        if (null != a) {
          if (this.colorPersonAmountArrIndex[a][i] == this.lastExtraIndexArr[a]) {
            this.extraWeight[a] = this.extraWeightConst;
          } else {
            this.extraWeight[a] = 0;
          }

          this.lastExtraIndexArr[a] = this.colorPersonAmountArrIndex[a][i];

          if (!s) {
            var l = [];

            for (var h = 0; h < this.colorPersonIndexArr.length; h++) {
              var p = this.colorPersonIndexArr[h];

              if (this.colorPersonAmountArr[h][p]) {
                l.push(h);
              }
            }

            if (!l.length) {
              return void (e && e());
            }

            a = l[this.randomNum(0, l.length - 1)];
            i = this.colorPersonIndexArr[a];
            s = this.colorPersonAmountArr[a][i];
          }

          this.currentPersonColorAmount[a] += s;

          if (this.isReviveAmount) {//
          } else {
            this.colorPersonIndexArr[a] += 1;
          }

          var d = !0;

          for (var u = 0; u < s; u++) {
            var g = 0;

            if (this._itemConfig) {
              for (var f = 0; f < this._itemConfig.length; f++) {
                var v = this._itemConfig[f];

                if (c >= v[0] && c <= v[1] && !this._itemCreatedList.includes(f)) {
                  g = v[2];

                  this._itemCreatedList.push(f);

                  break;
                }
              }
            }

            if (this.personPosRoot2) {
              if (this.sortPersonNodes.length || this.sortPersonNodes2.length) {
                if (this.sortPersonNodes.length && !this.sortPersonNodes2.length) {
                  d = !1;
                } else {
                  this.sortPersonNodes.length && this.sortPersonNodes2.length && (d = !(this.sortPersonNodes.length > this.sortPersonNodes2.length));
                }
              } else {
                d = !0;
              }
            }

            if (t) {
              var y = void 0;
              y = cc.instantiate(this.dict.dragonPrefab);
              this.dragonRoot.addChild(y);
              y.getComponent($level_29086_dragonItem["default"]).dragonColor = a;
              this.setColorPersonImg(a, y);
              y.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
              y._moveIndex = 0;
              y[this._itemType] = g;
              y[this._mBodyMoveBackDis] = 0;

              if (C = this.createItem(g)) {
                C.position = y.position;
                y[this._itemNode] = C;
                C[this._itemDepend] = y;

                this._itemNodeList.push(C);
              }

              this.createNum++;
              y.zIndex = 999 - this.createNum;

              if (d) {
                y[this._mBodyMoveDis] = this._curLastBoxItemNode[this._mBodyMoveDis] - (this._curLastBoxItemNode.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                y[this._mBodyEven] = !0;
                this.sortPersonNodes.push(y);
                this._curLastBoxItemNode = y;
              } else {
                y[this._mBodyMoveDis] = this._curLastBoxItemNode2[this._mBodyMoveDis] - (this._curLastBoxItemNode2.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                y[this._mBodyEven] = !1;
                this.sortPersonNodes2.push(y);
                this._curLastBoxItemNode2 = y;
              }
            } else {
              var C;
              y = void 0;
              y = cc.instantiate(this.dict.dragonPrefab);
              this.dragonRoot.addChild(y);
              y.getComponent($level_29086_dragonItem["default"]).dragonColor = a;
              this.setColorPersonImg(a, y);
              y.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
              y._moveIndex = 0;
              y[this._itemType] = g;
              y[this._mBodyMoveBackDis] = 0;

              if (C = this.createItem(g)) {
                C.position = y.position;
                y[this._itemNode] = C;
                C[this._itemDepend] = y;

                this._itemNodeList.push(C);
              }

              this.createNum++;
              y.zIndex = 999 - this.createNum;

              if (d) {
                y[this._mBodyMoveDis] = this._curLastBoxItemNode[this._mBodyMoveDis] - (this._curLastBoxItemNode.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                y[this._mBodyEven] = !0;
                this.sortPersonNodes.push(y);
                this._curLastBoxItemNode = y;
              } else {
                y[this._mBodyMoveDis] = this._curLastBoxItemNode2[this._mBodyMoveDis] - (this._curLastBoxItemNode2.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                y[this._mBodyEven] = !1;
                this.sortPersonNodes2.push(y);
                this._curLastBoxItemNode2 = y;
              }
            }
          }
        }
      }

      if (e) {
        e();
      }

      if (this.uiShowPersonAmount) {
        if (this.sortPersonNodes2.length && this.sortPersonNodes2[0].longtou) {
          this.sortPersonNodes2[0].setSiblingIndex(999);
        }

        if (this.sortPersonNodes.length && this.sortPersonNodes[0].longtou) {
          this.sortPersonNodes[0].setSiblingIndex(999);
        }
      }
    }
  };

  e.prototype.createItem = function (t) {
    if (!t) {
      return null;
    }

    var e;
    (e = this._itemPoolList.length ? this._itemPoolList.shift() : cc.instantiate(this.dict.itemPrefab)).getChildByName("itemImg").getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame("f29086_" + (t + 5e3));
    e.getChildByName("itemName").getComponent(cc.Label).string = $languageManager["default"].formatStr(this._itemNameList[t - 1]);
    e.parent = this.dict.itemRoot;
    e.active = !0;
    var o = e.getChildByName("spine");

    if (o) {
      o.active = !1;
    }

    if (1 == t || 5 == t) {
      if (e.getChildByName("spine")) {
        o.active = !0;
      } else {
        var i = cc.instantiate(this.dict["f29086.jn_texiao"]);
        i.name = "spine";
        i.parent = e;
        i.active = !0;
        i.position = cc.v2(0, 90);
      }
    }

    return e;
  };

  e.prototype.update = function (t) {
    if (game.dragonMoving && (t = 0.016, !this.isWin && this.createFinish && !this.isSorting && !this._removeStage && (this.sortPersonNodes.length || this.sortPersonNodes2.length))) {
      var e = this.sortPersonNodes[0];
      var o = this.sortPersonNodes2[0];
      var i = $level_29086_config.MapParam[this.mapType].noTouchAndStop;

      if (-29095 == this.levelID) {
        i = $level_29086_config.MapParam[0].noTouchAndStop;
      }

      if (!(!this._touchBegin && e && e._moveIndex >= i)) {
        if (this._roleLevel2Count && this._roleLevel2CurTime <= this._roleLevel2Time && this._roleLevel >= 2) {
          this._roleLevel2CurTime += t;

          if (this._roleLevel2CurTime >= this._roleLevel2Time) {
            if (!this._roleLevel5Count && this._roleLevel >= 5) {
              this._roleLevel5Count++, this.itemActive(2), this.isDragonAttack && (this.isDragonAttack = !1, this.isDragonAttacking = !1, this.sortPersonNodes.length && (this.sortPersonNodes[0][this._moveEnd] = !1, this.sortPersonNodes[0].stopAllActions())), this.isDragonAttack2 && (this.isDragonAttack2 = !1, this.isDragonAttacking2 = !1, this.sortPersonNodes2.length && (this.sortPersonNodes2[0][this._moveEnd] = !1, this.sortPersonNodes2[0].stopAllActions())), this.hideWudi(!0);
            } else {
              this.hideWudi();
            }
          }
        }

        if (this._roleLevel10Count && this._roleLevel10CurTime <= this._roleLevel10Time && this._roleLevel >= 10 && (this._roleLevel10CurTime += t, this._roleLevel10CurTime >= this._roleLevel10Time)) {
          for (var r = 0; r < this.sortPersonNodes.length; r++) {
            if ((_ = this.sortPersonNodes[r]).parent) {
              if (_.longtou || _.longwei) {
                this.hideItem1BigSpine(_);
              } else {
                this.hideItem1SmallSpine(_);
              }
            }
          }

          for (r = 0; r < this.sortPersonNodes2.length; r++) {
            if ((_ = this.sortPersonNodes2[r]).parent) {
              if (_.longtou || _.longwei) {
                this.hideItem1BigSpine(_);
              } else {
                this.hideItem1SmallSpine(_);
              }
            }
          }
        }

        if (this._slowStart) {
          this._slowCur += t;

          if (this._slowCur >= this._slowTime) {
            this._slowCur = 0;
            this._slowStart = !1;
          }
        }

        if (this._item1Start && (this._item1Cur += t, this._item1Cur >= this._item1Time)) {
          this._item1Cur = 0;
          this._item1Start = !1;

          for (r = 0; r < this.sortPersonNodes.length; r++) {
            if ((_ = this.sortPersonNodes[r]).parent) {
              if (_.longtou || _.longwei) {
                this.hideItem1BigSpine(_);
              } else {
                this.hideItem1SmallSpine(_);
              }
            }
          }

          for (r = 0; r < this.sortPersonNodes2.length; r++) {
            if ((_ = this.sortPersonNodes2[r]).parent) {
              if (_.longtou || _.longwei) {
                this.hideItem1BigSpine(_);
              } else {
                this.hideItem1SmallSpine(_);
              }
            }
          }
        }

        if (this._item2Start) {
          this._item2Cur += t;

          if (this._item2Cur >= this._item2Time) {
            this._item2Cur = 0;
            this._item2Start = !1;
          }
        }

        if (this._item3Start) {
          this._item3Cur += t;

          if (this._item3Cur >= this._item3Time) {
            this._item3Cur = 0;
            this._item3Start = !1;
          }
        }

        if (this._item4Start && (this._item4Cur += t, this._item4Cur >= this._item4Time)) {
          this._item4Cur = 0;
          this._item4Start = !1;

          for (r = 0; r < this.cannonRoot.children.length; r++) {
            var n = this.cannonRoot.children[r];
            this.hideItem4Spine(n);
          }
        }

        if (this._item5Start && (this._item5Cur += t, this._item5Cur >= this._item5Time)) {
          this._item5Cur = 0;
          this._item5Start = !1;

          for (r = 0; r < this.cannonRoot.children.length; r++) {
            n = this.cannonRoot.children[r];
            this.hideItem5Spine(n);
          }
        }

        this.updateItemTips();
        var a = this.sortPersonNodes[this.sortPersonNodes.length - 1];
        this.sortPersonNodes2[this.sortPersonNodes2.length - 1];

        if (this.isReviveBack) {
          if (!this.isReviveSort && (e && 0 == e[this._mBodyMoveBackDis] || !e) && (o && 0 == o[this._mBodyMoveBackDis] || !o)) {
            if (e && 0 == e[this._mBodyMoveBackDis]) {
              for (r = this.sortPersonNodes.length - 1; r >= 0; r--) {
                if (!(_ = this.sortPersonNodes[r]).parent || _.longtou || _.longwei) {//
                } else {
                  if (_[this._turnBackDestroy]) {
                    if (s = _[this._itemNode]) {
                      s.removeFromParent();
                      s[this._itemDepend] = null;

                      this._itemNodeList.splice(this._itemNodeList.indexOf(s), 1);

                      this._itemPoolList.push(s);
                    }

                    this.sortPersonNodes.splice(r, 1);

                    _.destroy();
                  }
                }
              }

              for (r = 0; r < this.sortPersonNodes.length; r++) {
                if ((_ = this.sortPersonNodes[r]).parent) {
                  _[this._mBodyMoveDis] = r * -(0 == r ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                  _[this._mBodyMoveBackDis] = 0;
                }
              }

              this._curLastBoxItemNode = this.sortPersonNodes[this.sortPersonNodes.length - 1];
              e.getComponent(sp.Skeleton).setAnimation(0, "idle1", !0);
            }

            if (o && 0 == o[this._mBodyMoveBackDis]) {
              for (r = this.sortPersonNodes2.length - 1; r >= 0; r--) {
                var s;

                if (!(_ = this.sortPersonNodes2[r]).parent || _.longtou || _.longwei) {//
                } else {
                  if (_[this._turnBackDestroy]) {
                    if (s = _[this._itemNode]) {
                      s.removeFromParent();
                      s[this._itemDepend] = null;

                      this._itemNodeList.splice(this._itemNodeList.indexOf(s), 1);

                      this._itemPoolList.push(s);
                    }

                    this.sortPersonNodes2.splice(r, 1);

                    _.destroy();
                  }
                }
              }

              for (r = 0; r < this.sortPersonNodes2.length; r++) {
                if ((_ = this.sortPersonNodes2[r]).parent) {
                  _[this._mBodyMoveDis] = r * -(0 == r ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                  _[this._mBodyMoveBackDis] = 0;
                }
              }

              this._curLastBoxItemNode2 = this.sortPersonNodes2[this.sortPersonNodes2.length - 1];
              o.getComponent(sp.Skeleton).setAnimation(0, "idle1", !0);
            }

            return void ((e && 0 == e[this._mBodyMoveBackDis] || !e) && (o && 0 == o[this._mBodyMoveBackDis] || !o) && (this.isReviveBack = !1, this.checkRes()));
          }

          this.moveInUpdate(t, 0);
          this.moveInUpdate2(t, 0);
          return void this.itemNodeMove();
        }

        if (a[this._mBodyMoveDis] > 0 && !a.longwei || a.longtou) {
          this.uiShowPersonAmount += 1;
          this.createPerson();
        }

        var c = 0;

        for (r = 0; r < this._speedIndexList.length; r++) {
          if ((P = this._speedIndexList[r]) <= e._moveIndex) {
            c = r;
          } else {
            if (e._moveIndex >= this._speedIndexList[this._speedIndexList.length - 1]) {
              c = this._speedIndexList.length - 1;
            }
          }
        }

        var l = 1 / this._moveSpeed[c] * 1e5 * t;
        var h = 0;

        if (o) {
          for (r = 0; r < this._speedIndexList.length; r++) {
            if ((P = this._speedIndexList[r]) <= o._moveIndex) {
              h = r;
            } else {
              if (o._moveIndex >= this._speedIndexList[this._speedIndexList.length - 1]) {
                h = this._speedIndexList.length - 1;
              }
            }
          }
        }

        var p = 1 / this._moveSpeed[h] * 1e5 * t;

        if (0 != l) {
          if (e) {
            if (e._moveIndex >= this._mapConfig.length - 1 && e.position.sub(this._curvePoints[this._curvePoints.length - 1].position).mag() <= 0 && 0 == e[this._mBodyMoveBackDis]) {
              e[this._moveEnd] = !0, this.isDragonAttack = !0, this.doDragonAttack();
            } else {
              this.checkWarning(e._moveIndex), this.checkRole(e._moveIndex);
            }
          }

          if (o) {
            if (o._moveIndex >= this._mapConfig2.length - 1 && o.position.sub(this._curvePoints2[this._curvePoints2.length - 1].position).mag() <= 0 && 0 == o[this._mBodyMoveBackDis]) {
              o[this._moveEnd] = !0, this.isDragonAttack2 = !0, this.doDragonAttack();
            } else {
              this.checkWarning(o._moveIndex), this.checkRole(o._moveIndex);
            }
          }

          this.moveInUpdate(t, l);

          if (o) {
            this.moveInUpdate2(t, p);
          }

          if (!this.isReviveBack && !this.isSorting) {
            for (r = 0; r < this.cannonRoot.children.length; r++) {
              n = this.cannonRoot.children[r];
              var u = void 0;
              var g = null;
              var f = null;

              if (this.sortPersonNodes.length > 2) {
                g = this.sortPersonNodes[0];
              }

              if (this.sortPersonNodes2.length > 2) {
                f = this.sortPersonNodes2[0];
              }

              var v;

              if (g && f) {
                v = g._moveIndex >= f._moveIndex;
              } else {
                v = !!g;
              }

              var y;

              if (v) {
                y = this.sortPersonNodes.length;
              } else {
                y = this.sortPersonNodes2.length;
              }

              for (var C = 0; C < y; C++) {
                var _;

                if (!(_ = v ? this.sortPersonNodes[C] : this.sortPersonNodes2[C]).longtou && !_.longwei && !_[this._bulletTarget] && _[this._mBodyMoveDis] > 0 && (this._item5Start || this.checkCannonAttack(_._moveIndex)) && _.getComponent($level_29086_dragonItem["default"]).dragonColor == n[this._cannonType]) {
                  u = _;
                  break;
                }
              }

              if (1 == n[this._cannonState] && u) {
                this.cannonAttack(n, u);
              }
            }
          }

          for (r = this._bulletMoveList.length - 1; r >= 0; r--) {
            var S = this._bulletMoveList[r];
            var k = S[this._dragonTarget];

            if (k && k.parent) {
              if (S.position.sub(k.position).mag() <= 10) {
                this.bulletArrived(S, r);
              } else {
                var A = {
                  x: k.x - S.x,
                  y: k.y - S.y
                };
                var N = Math.sqrt(A.x * A.x + A.y * A.y);

                if (N > 0) {
                  A.x /= N;
                  A.y /= N;
                }

                var P = 10;

                if (this._item4Start) {
                  P += 0.3 * P;
                }

                S.x += A.x * P;
                S.y += A.y * P;
                var x = Math.atan2(A.y, A.x) - Math.atan2(-1, 0);
                S.angle = x * (180 / Math.PI) - 180;
              }
            }
          }

          this.itemNodeMove();
        }
      }
    }
  };

  e.prototype.moveInUpdate = function (t, e) {
    var o;

    if (!this.isWin) {
      var i = this.sortPersonNodes[0];

      if (i && !i[this._moveEnd]) {
        for (var r = 0; r < this.sortPersonNodes.length; r++) {
          var n = this.sortPersonNodes[r];

          if (!this.isReviveBack || 0 != n[this._mBodyMoveBackDis]) {
            var a;

            if (null !== (o = n[this._mBodyMoveBackDis]) && void 0 !== o) {
              a = o;
            } else {
              a = 0;
            }

            var s = !1;

            if (a < 0) {
              s = !0;
              a += c = this.getMoveDis(e, this.isReviveBack ? l.revive : l.back);
              n[this._mBodyMoveDis] -= c - (a > 0 ? a : 0);
              n[this._mBodyMoveBackDis] = Math.min(0, a);
            }

            if (this._item1Start || this._roleLevel10Count && this._roleLevel10CurTime <= this._roleLevel10Time) {
              var c = this.getMoveDis(e, l.item1Start);
              n[this._mBodyMoveDis] += c;
            } else {
              if (this._slowStart) {
                c = this.getMoveDis(e, l.slowStart);
                n[this._mBodyMoveDis] += c;
              } else {
                if (this._item3Start) {
                  c = this.getMoveDis(e, l.item3Start), n[this._mBodyMoveDis] += c;
                } else {
                  c = this.getMoveDis(e), n[this._mBodyMoveDis] += c;
                }
              }
            }

            if (n[this._mBodyMoveDis] > 0) {
              this.updateBodyPos(n, s);
            }
          }
        }
      }
    }
  };

  e.prototype.moveInUpdate2 = function (t, e) {
    var o;

    if (!this.isWin) {
      var i = this.sortPersonNodes2[0];

      if (i && !i[this._moveEnd]) {
        for (var r = 0; r < this.sortPersonNodes2.length; r++) {
          var n = this.sortPersonNodes2[r];

          if (!this.isReviveBack || 0 != n[this._mBodyMoveBackDis]) {
            var a;

            if (null !== (o = n[this._mBodyMoveBackDis]) && void 0 !== o) {
              a = o;
            } else {
              a = 0;
            }

            var s = !1;

            if (a < 0) {
              s = !0;
              a += c = this.getMoveDis(e, this.isReviveBack ? l.revive : l.back);
              n[this._mBodyMoveDis] -= c - (a > 0 ? a : 0);
              n[this._mBodyMoveBackDis] = Math.min(0, a);
            }

            if (this._item1Start || this._roleLevel10Count && this._roleLevel10CurTime <= this._roleLevel10Time) {
              var c = this.getMoveDis(e, l.item1Start);
              n[this._mBodyMoveDis] += c;
            } else {
              if (this._slowStart) {
                c = this.getMoveDis(e, l.slowStart);
                n[this._mBodyMoveDis] += c;
              } else {
                if (this._item3Start) {
                  c = this.getMoveDis(e, l.item3Start), n[this._mBodyMoveDis] += c;
                } else {
                  c = this.getMoveDis(e), n[this._mBodyMoveDis] += c;
                }
              }
            }

            if (n[this._mBodyMoveDis] > 0) {
              this.updateBodyPos(n, s);
            }
          }
        }
      }
    }
  };

  e.prototype.getMoveDis = function (t, e) {
    if (void 0 === e) {
      e = this._curMoveState;
    }

    var o = this.getAddSpeed();

    if (e == l.normal) {
      t = t;
    } else {
      if (e == l.back) {
        if (t < 5) {
          t = 5;
        } else {
          t *= 3;
        }
      } else {
        if (e == l.slowStart) {
          t *= 0.2;
        } else {
          if (e == l.item3Start) {
            t *= 0.7;
          } else {
            e == l.item1Start ? t = 0 : e == l.revive && (t = 30);
          }
        }
      }
    }

    if (o) {
      t *= 1 + o / 100;
    }

    return t;
  };

  e.prototype.getAddSpeed = function () {
    if (!this._addSpeed[0] && !this._addSpeed[1]) {
      return 0;
    }

    var t = 0;
    var e = Math.floor(this.curCreatePersonAmount / this.allPersonAmount2 * 100);

    if (e >= this._addSpeed[0] && e <= this._addSpeed[1]) {
      t += Math.floor(Math.floor(e - this._addSpeed[0]) / this._addSpeed[2]) * this._addSpeed[3];
    } else {
      if (e >= this._addSpeed[1]) {
        t += Math.floor(Math.floor(this._addSpeed[1] - this._addSpeed[0]) / this._addSpeed[2]) * this._addSpeed[3];
      }
    }

    return t;
  };

  e.prototype.updateBodyPos = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    var o;

    if (t[this._mBodyEven]) {
      o = this.getPosByDis(t[this._mBodyMoveDis]);
    } else {
      o = this.getPos2ByDis(t[this._mBodyMoveDis]);
    }

    if (Math.abs(t.y - o[0].y) <= 10) {
      if (t._moveIndex > o[2].mapIndex) {
        if (t.x > o[0].x) {
          t.scaleX = 0.9, t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = -1);
        } else {
          t.x < o[0].x && (t.scaleX = -0.9, t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = 1));
        }
      } else {
        t._moveIndex < o[2].mapIndex && (t.x > o[0].x ? (t.scaleX = -0.9, t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = 1)) : t.x < o[0].x && (t.scaleX = 0.9, t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = -1)));
      }
    }

    t._moveIndex = o[2].mapIndex;
    t.setPosition(o[0]);
  };

  e.prototype.getPosByDis = function (t) {
    if (t < 0) {
      if (this._curvePoints.length > 0) {
        return [this._curvePoints[0].position, this._curvePoints[0], this._curvePoints[1], 1];
      } else {
        return [cc.Vec2.ZERO];
      }
    }

    var e = t;

    for (var o = 1; o < this._curvePoints.length; o++) {
      var i = this._curvePoints[o - 1];
      var r = this._curvePoints[o];

      if (e <= r.distance) {
        var n = e / r.distance;
        var a = r.position.sub(i.position);
        return [i.position.add(a.normalize().mulSelf(a.len() * n)), i, r, n];
      }

      e -= r.distance;
    }

    return [this._curvePoints[this._curvePoints.length - 1].position, this._curvePoints[this._curvePoints.length - 2], this._curvePoints[this._curvePoints.length - 1], 1];
  };

  e.prototype.getPos2ByDis = function (t) {
    if (t < 0) {
      if (this._curvePoints2.length > 0) {
        return [this._curvePoints2[0].position, this._curvePoints2[0], this._curvePoints2[1], 1];
      } else {
        return [cc.Vec2.ZERO];
      }
    }

    var e = t;

    for (var o = 1; o < this._curvePoints2.length; o++) {
      var i = this._curvePoints2[o - 1];
      var r = this._curvePoints2[o];

      if (e <= r.distance) {
        var n = e / r.distance;
        var a = r.position.sub(i.position);
        return [i.position.add(a.normalize().mulSelf(a.len() * n)), i, r, n];
      }

      e -= r.distance;
    }

    return [this._curvePoints2[this._curvePoints2.length - 1].position, this._curvePoints2[this._curvePoints2.length - 2], this._curvePoints2[this._curvePoints2.length - 1], 1];
  };

  e.prototype.moveBodyBack = function () {
    var t = this;

    if (this.sortPersonNodes.length) {
      var e = 0.5 * this.sortPersonNodes[0][this._mBodyMoveDis];
      this.sortPersonNodes.forEach(function (o) {
        o[t._mBodyMoveBackDis] -= e;
      });
    }

    if (this.sortPersonNodes2.length) {
      var o = 0.5 * this.sortPersonNodes2[0][this._mBodyMoveDis];
      this.sortPersonNodes2.forEach(function (e) {
        e[t._mBodyMoveBackDis] = -o;
      });
    }
  };

  e.prototype.moveBodyRevive = function () {
    var t = this;

    if (this.sortPersonNodes.length) {
      this.sortPersonNodes[0][this._mBodyMoveDis];
      this.sortPersonNodes.forEach(function (e) {
        e[t._mBodyMoveBackDis] -= e[t._mBodyMoveDis];
      });
    }

    if (this.sortPersonNodes2.length) {
      this.sortPersonNodes2[0][this._mBodyMoveDis];
      this.sortPersonNodes2.forEach(function (e) {
        e[t._mBodyMoveBackDis] -= e[t._mBodyMoveDis];
      });
    }
  };

  e.prototype.removeBody = function (t) {
    var e = this.sortPersonNodes.indexOf(t);

    if (-1 !== e) {
      this.sortPersonNodes.splice(e, 1);
      this.backBodyWithPick2(t, e);
    }

    var o = this.sortPersonNodes2.indexOf(t);

    if (-1 !== o) {
      this.sortPersonNodes2.splice(o, 1);
      this.backBodyWithPick3(t, o);
    }
  };

  e.prototype.backBodyWithPick2 = function (t, e) {
    var o = this;
    this.sortPersonNodes.slice(0, e).forEach(function (t) {
      var e;
      t[o._mBodyMoveBackDis] = (null !== (e = t[o._mBodyMoveBackDis]) && void 0 !== e ? e : 0) - 1.5 * o._keepDistance;
    });
    t.destroy();

    if (this.isDragonAttack) {
      this.isDragonAttack = !1;
      this.isDragonAttacking = !1;
      this.sortPersonNodes[0][this._moveEnd] = !1;
      this.sortPersonNodes[0].stopAllActions();
    }
  };

  e.prototype.backBodyWithPick3 = function (t, e) {
    var o = this;
    this.sortPersonNodes2.slice(0, e).forEach(function (t) {
      var e;
      t[o._mBodyMoveBackDis] = (null !== (e = t[o._mBodyMoveBackDis]) && void 0 !== e ? e : 0) - 1.5 * o._keepDistance;
    });
    t.destroy();

    if (this.isDragonAttack2) {
      this.isDragonAttack2 = !1;
      this.isDragonAttacking2 = !1;
      this.sortPersonNodes2[0][this._moveEnd] = !1;
      this.sortPersonNodes2[0].stopAllActions();
    }
  };

  e.prototype.itemNodeMove = function () {
    for (var t = 0; t < this._itemNodeList.length; t++) {
      var e = this._itemNodeList[t];

      if (e[this._itemDepend]) {
        e.position = e[this._itemDepend].position;
      }
    }
  };

  e.prototype.checkCannonAttack = function (t) {
    for (var e = 0; e < this.cannonAttackList.length; e++) {
      var o = this.cannonAttackList[e];

      if (t >= o[0] && t <= o[1]) {
        return !0;
      }
    }

    return !1;
  };

  e.prototype.cannonAttack = function (t, e) {
    var o = this;
    this.playRemoteSound($levelConstant.domain + "audio/f29086/f29086_Shoot.mp3", !1);
    t[this._cannonState] = 2;
    t.parking.car.getComponent($level_29086_boxCarItem["default"]).emptySeatAmount = t.parking.car.getComponent($level_29086_boxCarItem["default"]).emptySeatAmount - 1;
    var i = {
      x: e.x - t.x,
      y: e.y - t.y
    };
    var r = Math.sqrt(i.x * i.x + i.y * i.y);

    if (r > 0) {
      i.x /= r;
      i.y /= r;
    }

    var n = Math.atan2(i.y, i.x) - Math.atan2(-1, 0);
    t.getChildByName("cannon").angle = n * (180 / Math.PI) - 180;
    var a = this.getBullet();
    a.position = this.transformPosition(t, a).add(cc.v2(0, 10));
    a.getChildByName("bullet").getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame("f29086_" + (t[this._cannonType] + 1 + 2200));
    a.getChildByName("xiaochu").getComponent(sp.Skeleton).setSkin("skin" + (t[this._cannonType] + 1));
    a.active = !1;
    e[this._bulletTarget] = a;
    a[this._dragonTarget] = e;
    t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "attack", !1);
    cc.tween(t).delay(0.1).call(function () {
      t[o._cannonNum]--;
      t.getChildByName("num").getComponent(cc.Label).string = "x" + t[o._cannonNum];
      a.active = !0;

      o._bulletMoveList.push(a);
    }).start();

    if (this._item4Start) {
      t.getChildByName("cannon").getComponent(sp.Skeleton).timeScale = 1.3;
    } else {
      t.getChildByName("cannon").getComponent(sp.Skeleton).timeScale = 1;
    }

    t.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(function () {
      t.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(null);

      if (t[o._cannonNum] <= 0) {
        t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "exit", !1);
        t.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(function () {
          t.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(null);
          t.active = !1;
          t.removeFromParent(!0);

          o._cannonList.push(t);

          t.parking.isEmpty = !0;
          t.parking.car = null;
          o.moveCarAmount -= 1;
        });
      } else {
        t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "idle", !0);
        t[o._cannonState] = 1;
      }
    });
  };

  e.prototype.bulletArrived = function (t, e) {
    var o = this;
    this.playRemoteSound($levelConstant.domain + "audio/f29086/f29086_Blow.mp3", !1);

    this._bulletMoveList.splice(e, 1);

    this.allPersonAmount--;
    cc.game.emit("allPersonAmount", this.allPersonAmount, this.allPersonAmount2);
    this.uiShowPersonAmount--;
    this.updateHp();
    t.getChildByName("bullet").active = !1;
    t.getChildByName("xiaochu").opacity = 255;
    t.getChildByName("xiaochu").getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    var i = t[this._dragonTarget];
    var r = i[this._itemType];

    if (r) {
      this.itemActive(r);
    }

    cc.tween(t).delay(0.1).call(function () {
      var t = i[o._itemNode];

      if (t) {
        var e = cc.instantiate(o.dict["f29086.xiaoshi"]);
        e.parent = o.dict["f29086.xiaoshi"].parent;
        e.position = o.transformPosition(t.children[0], e);
        e.active = !0;
        e.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
        e.getComponent(sp.Skeleton).setCompleteListener(function () {
          e.destroy();
        });
        t.removeFromParent();
        t[o._itemDepend] = null;

        o._itemNodeList.splice(o._itemNodeList.indexOf(t), 1);

        o._itemPoolList.push(t);
      }

      o.hideItem1BigSpine(i);
      o.hideItem1SmallSpine(i);
      o.hideItem4Spine(i);
      o.hideItem5Spine(i);
      o.removeBody(i);
      o.checkRes();
    }).start();
    t.getChildByName("xiaochu").getComponent(sp.Skeleton).setCompleteListener(function () {
      t.getChildByName("xiaochu").getComponent(sp.Skeleton).setCompleteListener(null);
      t.active = !1;

      o._bulletModelList.push(t);
    });
  };

  e.prototype.itemActive = function (t, e) {
    switch (t) {
      case 1:
        this.func_item1();
        break;

      case 2:
        this._item2Cur = 0;
        this._item2Start = !0;
        this.moveBodyBack();
        break;

      case 3:
        this._item3Cur = 0;
        this._item3Start = !0;
        break;

      case 4:
        this._item4Cur = 0;
        this._item4Start = !0;

        for (var o = 0; o < this.cannonRoot.children.length; o++) {
          var i = this.cannonRoot.children[o];
          this.showItem4Spine(i);
        }

        break;

      case 5:
        this.func_item5();
        break;

      case 6:
        this.func_item6(e);
        break;

      case 7:
        this.func_item7(e);
    }
  };

  e.prototype.checkWarning = function (t) {
    var e = $level_29086_config.MapParam[this.mapType].warnPoints;
    var o = 0;

    for (var i = e.length - 1; i >= 0; i--) {
      if (t >= e[i]) {
        o = i + 1;
        break;
      }
    }

    var r = 0;

    if (this._warningIndex != o) {
      this._warningIndex = o;

      if (o && this.func_hasLockParking()) {
        for (var n = 0; n < this.dict.parkingRoot.children.length; n++) {
          if ((s = this.dict.parkingRoot.children[n]).getChildByName("videoLock") && s.getChildByName("videoLock").active) {
            (c = this.dict.unlockTips).active = !0;
            c.parent = s;
            c.position = cc.v2(20, 50);
            c.stopAllActions();
            c.scale = 1;
            cc.tween(c).to(0.5, {
              scale: 1.2
            }).to(0.5, {
              scale: 1
            }).union().repeatForever().start();
            break;
          }
        }
      } else if (!o || !this.func_hasLockParking()) {
        for (var a = 0; a < this.dict.parkingRoot.children.length; a++) {
          var s;

          if ((s = this.dict.parkingRoot.children[a]).getChildByName("videoLock") && s.getChildByName("videoLock").active) {
            var c;

            if (c = this.dict.unlockTips) {
              c.removeFromParent();
              c.active = !1;
            }

            break;
          }
        }
      }

      if (o >= e.length && 0 == this._roleLevel10Count && this._roleLevel >= 10) {
        this.doRoleLevel10Skill();
      }

      cc.game.emit("f29086_warningIndex", this._warningIndex);
    }

    if (!this._warning && o) {
      this._warning = !0;
      r = (1 == o ? 3 : 2 == o ? 1.5 : 0) / 2;
      this.warnNode.stopAllActions();
      cc.tween(this.warnNode).to(r, {
        opacity: 255
      }).to(r, {
        opacity: 0
      }).union().repeatForever().start();
    } else {
      if (this._warning && !o) {
        this.warnNode.stopAllActions();
        this.warnNode.opacity = 0;
        this._warning = !1;
      }
    }
  };

  e.prototype.checkRole = function (t) {
    var e = $level_29086_config.MapParam[this.mapType].roleWarn;

    if (-29095 == this.levelID) {
      e = $level_29086_config.MapParam[0].roleWarn;
    }

    var o = $level_29086_config.MapParam[this.mapType].rolePoint;

    if (t >= e[this._rolePointIndex] && this.roleNode._moveIndex >= o[this._rolePointIndex]) {
      this._rolePointIndex += 1;
      this.roleNode.moving = !0;
    }

    var i = this.roleNode.getChildByName("role").getComponent(sp.Skeleton);

    if (this.roleNode.moving) {
      this.roleMoving();
      this.updateRoleHpPos();

      if (this.roleNode._moveIndex >= o[this._rolePointIndex]) {
        this.roleNode.moving = !1;
      }
    }

    if (this.roleNode.moving && "zou" != i.animation) {
      this.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "zou", !0);
    } else {
      if (this.roleNode.moving || "haipa" == i.animation) {//
      } else {
        this.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "haipa", !0);
      }
    }
  };

  e.prototype.roleMoving = function () {
    var t = this.roleNode;
    var e = this._mapConfig;
    var o = t._moveIndex;

    if (!(0 === e.length || o >= e.length - 1)) {
      var i = t.position;
      var r = e[o + 1];
      var n = cc.v2(r[0], r[1]);
      n = this.dict.personPosRoot.convertToWorldSpaceAR(n);
      var a = this.roleNode.parent.convertToNodeSpaceAR(n).add(cc.v2(0, -20));

      if (t._moveIndex == e.length - 2) {
        a.addSelf($level_29086_config.MapParam[this.mapType].roleOffset);
      }

      if (!r) {
        t._moveIndex = e.length - 1;
        return void (t.getChildByName("role").scaleX = 1);
      }

      var s = a.x - i.x;
      var c = a.y - i.y;
      var l = Math.sqrt(s * s + c * c);

      if (l <= this._keepDistance) {
        t._moveIndex++;
        t._moveIndex == e.length - 1 && (t.getChildByName("role").scaleX = 1);
      } else {
        var h = this._keepDistance / l / 10;
        t._targetPos.x = i.x + s * h;
        t._targetPos.y = i.y + c * h;
      }

      if (Math.abs(t.x - t._targetPos.x) >= 1) {
        if (t.x > t._targetPos.x && Math.abs(t.y - t._targetPos.y) <= 10) {
          t.getChildByName("role").scaleX = -1;
        } else {
          t.x < t._targetPos.x && Math.abs(t.y - t._targetPos.y) <= 10 && (t.getChildByName("role").scaleX = 1);
        }
      }

      if (t._targetPos) {
        t.position = t._targetPos;
      }
    }
  };

  e.prototype.getBullet = function () {
    var t;
    (t = this._bulletModelList.length ? this._bulletModelList.shift() : cc.instantiate(this.dict.bulletPrefab)).parent = this.dict.bulletRoot;
    t.angle = 0;
    t.getChildByName("bullet").active = !0;
    t.getChildByName("xiaochu").opacity = 0;
    t[this._dragonTarget] = null;
    return t;
  };

  e.prototype.getCannon = function () {
    var t;
    (t = this._cannonList.length ? this._cannonList.shift() : cc.instantiate(this.dict.cannonPrefab)).getChildByName("cannon").angle = 0;
    t.getChildByName("num").getComponent(cc.Label).string = "";
    t.getChildByName("body").active = !0;
    t.active = !0;

    if (!this._item4Start && t.getChildByName("item4Spine")) {
      this.hideItem4Spine(t);
    }

    if (!this._item5Start && t.getChildByName("item5Spine")) {
      this.hideItem5Spine(t);
    }

    return t;
  };

  e.prototype.updateItemTips = function () {
    var t = [[this._item1Cur, 1], [this._item2Cur, 2], [this._item3Cur, 3], [this._item4Cur, 4], [this._item5Cur, 5]].sort(function (t, e) {
      return e[0] - t[0];
    });

    if (t[0][0]) {
      var e = t[0][1];
      var o = this._itemTipsList[e - 1];

      if (o) {
        this._itemTipsNode.active = !0;
        this._itemTipsNode.getComponent(cc.Label).string = $languageManager["default"].formatStr(o + "%dS", this["_item" + e + "Time"] - Math.round(t[0][0]));
      }
    } else {
      this._itemTipsNode.active = !1;
    }
  };

  e.prototype.updateParkingWeight = function () {
    this.parkingWeight = new Array(this.colorTypeAmount).fill(0);

    for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
      var e = this.dict.parkingRoot.children[t];

      try {
        if (e.active && e.car) {
          var o = e.car;
          var i = o.getComponent($level_29086_boxCarItem["default"]).carColor;

          if (o && o.getComponent($level_29086_boxCarItem["default"])) {
            for (var r = 0; r < o.getChildByName("seatRoot").children.length; r++) {
              var n = o.getChildByName("seatRoot").children[r];

              if (n.active || n.targetPerson) {//
              } else {
                this.parkingWeight[i] += this.levelDataJSON.parkingWeight;
              }
            }
          }
        }
      } catch (a) {}
    }
  };

  e.prototype.updateHp = function () {
    var t = this.allPersonAmount;
    var e = this.allPersonAmount2;
    this.dict.hpCount.getComponent(cc.Label).string = "" + t;
    this.dict.hpImg.getComponent(cc.Sprite).fillRange = t / e;
  };

  e.prototype.carAnim = function (t) {
    if (t.isCarAnim) {//
    } else {
      t.isCarAnim = !0;
      cc.tween(t.parent.parent).to(0.1, {
        scale: 0.9
      }).to(0.1, {
        scale: 1
      }).call(function () {
        t.isCarAnim = !1;
      }).start();
    }
  };

  e.prototype.checkTipText = function () {
    var t = 0;

    for (var e = 0; e < this.parkingNodes.length; e++) {
      if (this.parkingNodes[e].isEmpty) {//
      } else {
        t += 1;
      }
    }

    if (t == this.parkingNodes.length) {
      cc.game.emit("checkTipText", 1);
    } else {
      if (t == this.parkingNodes.length - 1) {
        cc.game.emit("checkTipText", 0);
      }
    }
  };

  e.prototype.checkRes = function () {
    var t = this;

    if (!this.isWin && 0 == this.allPersonAmount) {
      this.isWin = !0;
      var e = null;
      var o = null;

      for (var i = 0; i < this.sortPersonNodes.length; i++) {
        if ((r = this.sortPersonNodes[i]).longtou || r.longwei) {
          r.getComponent(sp.Skeleton).setAnimation(0, "die", !1);
          cc.tween(r).to(0.5, {
            opacity: 0
          }).start();

          if (r.longtou) {
            e = r;
          }
        }
      }

      for (i = 0; i < this.sortPersonNodes2.length; i++) {
        var r;

        if ((r = this.sortPersonNodes2[i]).longtou || r.longwei) {
          r.getComponent(sp.Skeleton).setAnimation(0, "die", !1);
          cc.tween(r).to(0.5, {
            opacity: 0
          }).start();

          if (r.longtou) {
            o = r;
          }
        }
      }

      if (e) {
        this.showDragonBall(e, function () {
          t.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "shengli", !0);
          t.playRight();
        });
      }

      if (o) {
        this.showDragonBall(o);
      }
    }
  };

  e.prototype.setColorPersonImg = function (t, e) {
    e.getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame("f29086_" + (t + 1 + 4e3 + 100 * this._dragonSkin));
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

  e.prototype.getAmountByColor = function (t) {
    if (!this.colorPersonAmountArr[t]) {
      this.colorPersonAmountArr[t] = [];
      var e = [];
      var o = [];

      for (var i = 0; i < this.carNodeArr.length; i++) {
        var r = this.carNodeArr[i].getComponent($level_29086_boxCarItem["default"]);

        if (r.carColor == t) {
          var n = [];
          var a = [];

          for (var s = r.seatTotalAmount; s > 0;) {
            var c = this.randomNum(1, s);
            n.push(c);
            a.push(e.length);
            s -= c;
          }

          e.push(n);
          o.push(a);
        }
      }

      if (e.length) {
        var l = this.flatten(e);
        var h = this.flatten(o);
        this.colorPersonAmountArr[t] = l;
        this.colorPersonAmountArrIndex[t] = h;
      }

      return e;
    }
  };

  e.prototype.flatten = function (t) {
    var e = this;
    return t.reduce(function (t, o) {
      if (Array.isArray(o)) {
        return t.concat(e.flatten(o));
      } else {
        return t.concat(o);
      }
    }, []);
  };

  e.prototype.consoleWeight = function (t, e) {
    var o = JSON.parse(JSON.stringify(e));

    for (var i = 0; i < o.length; i++) {
      var r = o[i];
      r = $level_29086_config.colorDes[i] + ":" + r;
      o[i] = r;
    }

    console.log(t, o);
  };

  e.prototype.getPersonColor = function () {
    if (this.reviveArr.length) {
      var t = this.reviveArr.shift();
      this.isReviveAmount = 1;
      return t;
    }

    this.isReviveAmount = 0;

    if (this.firstSortIndexArr.length) {
      return this.firstSortIndexArr.shift();
    }

    this.updateParkingWeight();
    this.updateSortWeight();

    for (var e = 0; e < this.colorTypeAmount; e++) {
      this.allWeight[e] = 0;
      this.allWeight[e] += this.carWeight[e];
      this.allWeight[e] += this.parkingWeight[e];
      this.allWeight[e] += this.extraWeight[e];
      this.allWeight[e] -= this.sortWeight[e];
      this.allWeight[e] < 0 && (this.allWeight[e] = 0);
      0 != this.currentPersonColorAmount[e] && this.currentPersonColorAmount[e] >= this.colorPersonArr[e] && (this.allWeight[e] = 0);
    }

    return this.randomByWeight(new Array($level_29086_config.colorDes.length).fill(1).map(function (t, e) {
      return e;
    }), this.allWeight);
  };

  e.prototype.updateSortWeight = function () {
    this.sortWeight = new Array(this.colorTypeAmount).fill(0);

    for (var t = 0; t < this.sortPersonNodes.length; t++) {
      if (!(o = this.sortPersonNodes[t]).longtou && !o.longwei && o.parent) {
        var e = o.getComponent($level_29086_dragonItem["default"]).dragonColor;
        this.sortWeight[e] += this.levelDataJSON.sortWeight;
      }
    }

    for (t = 0; t < this.sortPersonNodes2.length; t++) {
      var o;

      if ((o = this.sortPersonNodes2[t]).longtou || o.longwei || !o.parent) {//
      } else {
        e = o.getComponent($level_29086_dragonItem["default"]).dragonColor;
        this.sortWeight[e] += this.levelDataJSON.sortWeight;
      }
    }
  };

  e.prototype.getCarColor = function (t, e) {
    var o = this.carNodeArr.length;
    var i = Math.round((t + 1) / o * 100);

    for (var r = 0; r < e.length; r++) {
      var n = e[r];

      if (i <= n[1] && i >= n[0]) {
        if (this.batchMap[r]) {//
        } else {
          this.batchMap[r] = [];
        }

        var a = this.randomNum(0, this.randomColorArr[r].length - 1);

        for (var s = this.randomColorArr[r][a]; this.batchMap[r].includes(s) && this.randomColorNum[r] < this.randomColorArr[r].length;) {
          a = this.randomNum(0, this.randomColorArr[r].length - 1);
          s = this.randomColorArr[r][a];
        }

        this.randomColorNum[r] += 1;
        this.batchMap[r].push(s);
        return s;
      }
    }
  };

  e.prototype.setCarID = function () {
    var t = this;
    this.carNodeArr.sort(function (t, e) {
      return t.getComponent($level_29086_boxCarItem["default"]).path - e.getComponent($level_29086_boxCarItem["default"]).path;
    });
    this.carNodeArr.forEach(function (e, o) {
      e.getComponent($level_29086_boxCarItem["default"]).carID = o;

      if (t.isDebug) {
        var i = cc.instantiate(e.getChildByName("path"));
        i.position = cc.v2(0, -20);
        i.parent = e;
        i.getComponent(cc.Label).string = "ID" + o;
        i.getComponent(cc.Label).fontSize = 20;
      }
    });
    this.carAllAmount = this.carNodeArr.length;
  };

  e.prototype.getArrByLen = function (t, e) {
    t = this.sortColor_new;
    var o = [];

    for (var i = 0; i < t.length; i++) {
      var r = t[i];

      if (i >= e[0] - 1 && i <= e[1] - 1) {
        o.push(r);
      }
    }

    return o;
  };

  e.prototype.getOtherCarByDistance = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    var o = [];
    var i = this.carRoot.children.concat(this.turntableCarArr);

    for (var r = 0; r < i.length; r++) {
      var n = i[r];

      if (!n || n == t || n.getComponent($level_29086_boxCarItem["default"]).isReadyDestroy || n.getComponent($level_29086_boxCarItem["default"]).carState != $level_29086_config.CarState.Idle || !n.active || n.isTransportBox || n.getComponent($level_29086_boxCarItem["default"]).isUTransportCar) {//
      } else {
        o.push(n);
      }
    }

    var a = t.convertToWorldSpaceAR(cc.v2(0, 0));
    o.sort(function (t, e) {
      var o = t;
      var i = e;
      var r = [o.convertToWorldSpaceAR(cc.v2(0, 0)), o.convertToWorldSpaceAR(cc.v2(0, -o.height))];
      var n = [i.convertToWorldSpaceAR(cc.v2(0, 0)), i.convertToWorldSpaceAR(cc.v2(0, -i.height))];
      return cc.Intersection.pointLineDistance(a, r[0], r[1], !0) - cc.Intersection.pointLineDistance(a, n[0], n[1], !0);
    });
    return o;
  };

  e.prototype.getPath = function (t) {
    if (t.path) {
      return t.path;
    }

    var e;
    var o;
    var i;
    var r;
    var n = t.width;
    var a = t.height;

    if (this.carMap[t.uuid]) {//
    } else {
      this.carMap[t.uuid] = {};
    }

    if (this.carMap[t.uuid].a1) {
      e = this.carMap[t.uuid].a1;
    } else {
      e = t.convertToWorldSpaceAR(cc.v2(-n / 2, -a));
      this.carMap[t.uuid].a1 = e;
    }

    if (this.carMap[t.uuid].a2) {
      o = this.carMap[t.uuid].a2;
    } else {
      o = t.convertToWorldSpaceAR(cc.v2(-n / 2, 2250));
      this.carMap[t.uuid].a2 = o;
    }

    if (this.carMap[t.uuid].b1) {
      i = this.carMap[t.uuid].b1;
      r = this.carMap[t.uuid].b2;
    } else {
      i = t.convertToWorldSpaceAR(cc.v2(n / 2, -a));
      r = t.convertToWorldSpaceAR(cc.v2(n / 2, 2250));
      this.carMap[t.uuid].b1 = i;
      this.carMap[t.uuid].b2 = r;
    }

    var s = this.getOtherCarByDistance(t);
    var c = !1;

    if (t.collisionArr) {//
    } else {
      t.collisionArr = [];
    }

    var l = 1;

    for (var h = 0; h < s.length; h++) {
      var p = s[h];

      if (p != t) {
        var d = void 0;
        var u = void 0;
        var g = void 0;
        var m = void 0;
        var f = p.width;
        var v = p.height;

        if (this.carMap[p.uuid]) {//
        } else {
          this.carMap[p.uuid] = {};
        }

        if (this.carMap[p.uuid].a1) {
          d = this.carMap[p.uuid].a1;
        } else {
          d = p.convertToWorldSpaceAR(cc.v2(-f / 2, -v));
          this.carMap[p.uuid].a1 = d;
        }

        if (this.carMap[p.uuid].elementA2) {
          u = this.carMap[p.uuid].elementA2;
        } else {
          u = p.convertToWorldSpaceAR(cc.v2(-f / 2, 0));
          this.carMap[p.uuid].elementA2 = u;
        }

        if (this.carMap[p.uuid].elementC1) {
          g = this.carMap[p.uuid].elementC1;
          m = this.carMap[p.uuid].elementC2;
        } else {
          g = p.convertToWorldSpaceAR(cc.v2(f / 2 + 1, 0));
          m = p.convertToWorldSpaceAR(cc.v2(-f / 2 - 1, 0));
          this.carMap[p.uuid].elementC1 = g;
          this.carMap[p.uuid].elementC2 = m;
        }

        if (cc.Intersection.lineLine(e, o, d, u) || cc.Intersection.lineLine(i, r, d, u) || cc.Intersection.lineLine(e, o, g, m) || cc.Intersection.lineLine(i, r, g, m)) {
          c = !0;

          if (p.path) {
            l += p.path;
          } else {
            l += this.getPath(p);
          }
        }
      }
    }

    if (c) {
      return t.path = l, l;
    } else {
      return t.path = 1, 1;
    }
  };

  e.prototype.fetchMaxIndex = function (t, e) {
    return t.map(function (t, e) {
      return {
        key: e,
        value: t
      };
    }).sort(function (t, e) {
      return e.value - t.value;
    }).filter(function (t, o) {
      return o < e;
    }).map(function (t) {
      return t.key;
    });
  };

  e.prototype.getLevelProgressByCar = function () {
    var t = this.carRoot.children.concat(this.turntableCarArr);
    var e = 0;

    for (var o = 0; o < t.length; o++) {
      var i = t[o];

      if (i && i.active && i.getComponent($level_29086_boxCarItem["default"]).carState == $level_29086_config.CarState.Idle) {
        e += 1;
      }
    }

    var r = (this.carAllAmount - e) / this.carAllAmount * 100;

    if (this.levelDataJSON.hardPoints) {
      for (o = 0; o < this.levelDataJSON.hardPoints.length; o++) {
        var n = this.levelDataJSON.hardPoints[o];

        if (!this.hardPointsIndexs.includes(o) && n[0] <= r && n[1] >= r) {
          console.log("触发卡点", n);
          this.hardPointsIndexs.push(o);
          return !0;
        }
      }
    }

    return !1;
  };

  e.prototype.randomByWeight = function (t, e) {
    if (t.length != e.length) {
      console.warn("random2输入不合法: resultArr.length != weightArr.length");
      return null;
    }

    if (this.getLevelProgressByCar()) {
      var o = 0;
      var i = e[0];

      for (var r = 0; r < e.length; r++) {
        var n = e[r];

        if (n < i && 0 != n || 0 == i && 0 != n) {
          o = r;
          i = n;
        }
      }

      for (r = 0; r < e.length; r++) {
        if (r != o) {
          e[r] = 0;
        }
      }
    } else {
      var a = this.fetchMaxIndex(e, this.levelDataJSON.limitRank || $level_29086_config.colorDes.length);

      for (r = 0; r < e.length; r++) {
        e[r];
        a.includes(r) || (e[r] = 0);
      }
    }

    if (this.arraysEqual(e, new Array($level_29086_config.colorDes.length).fill(0))) {
      var s = [];

      for (r = 0; r < $level_29086_config.colorDes.length; r++) {
        if (this.colorPersonAmountArr[r].length && this.currentPersonColorAmount[r] < this.colorPersonArr[r]) {
          s.push(r);
        }
      }

      if (s.length) {
        return s[this.randomNum(0, s.length - 1)];
      }
    }

    var c = 0;
    var l = 0;
    var h = Math.random();

    for (var p = e.length - 1; p >= 0; p--) {
      c += e[p];
    }

    h *= c;

    for (p = e.length - 1; p >= 0; p--) {
      if (h <= (l += e[p])) {
        return t[p];
      }
    }

    return null;
  };

  e.prototype.arraysEqual = function (t, e) {
    if (t.length !== e.length) {
      return !1;
    }

    for (var o = 0; o < t.length; o++) {
      if (t[o] !== e[o]) {
        return !1;
      }
    }

    return !0;
  };

  e.prototype.randomNum = function (t, e, o) {
    var i = e - t;
    var r = o || Math.random();
    return t + Math.round(r * i);
  };

  e.prototype.getLocal = function (t) {
    if (this.localData[t]) {
      return this.localData[t];
    }

    var e = cc.sys.localStorage.getItem("" + this.levelID + t);

    if (e) {
      return JSON.parse(e);
    } else {
      return null;
    }
  };

  e.prototype.setLocal = function (t, e) {
    this.localData[t] = e;
    cc.sys.localStorage.setItem("" + this.levelID + t, JSON.stringify(e));
  };

  e.prototype.show = function (t, e, o) {
    if (void 0 === e) {
      e = 0.8;
    }

    if (void 0 === o) {
      o = 0;
    }

    var i = cc.instantiate(this.dict.tipPrefab);
    this.dict.game.addChild(i);
    i.active = !0;
    i.stopAllActions();
    i.children[1].getComponent(cc.Label).string = t;
    i.setPosition(cc.v2(0, -60));
    i.opacity = 0;
    cc.tween(i).by(0.3, {
      position: cc.v2(0, 60),
      opacity: 255
    }).delay(e).by(0.3, {
      position: cc.v2(0, 60),
      opacity: -255
    }).call(function () {
      i.destroy();
    }).start();
  };

  e.prototype.transformPosition = function (t, e) {
    return e.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec2.ZERO));
  };

  e.prototype.func_sort = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i;
      var r = this;
      return __generator(this, function () {
        if (this.isSorting) {
          return [2];
        }

        this.isSorting = !0;
        this.isSortAnim = !0;

        for (t = this._bulletMoveList.length - 1; t >= 0; t--) {
          e = this._bulletMoveList[t];
          o = e[this._dragonTarget];

          this._bulletMoveList.splice(t, 1);

          this.allPersonAmount--;
          this.uiShowPersonAmount--;
          this.updateHp();
          e.stopAllActions();
          (i = o[this._itemNode]) && (i.removeFromParent(), i[this._itemDepend] = null, this._itemNodeList.splice(this._itemNodeList.indexOf(i), 1), this._itemPoolList.push(i));
          this.hideItem1BigSpine(o);
          this.hideItem1SmallSpine(o);
          this.hideItem4Spine(o);
          this.hideItem5Spine(o);
          this.removeBody(o);
          this.checkRes();
          e.active = !1;

          this._bulletModelList.push(e);
        }

        this.schedule(function () {
          for (var t = 0; t < r.sortPersonNodes.length; t++) {
            if (!((o = r.sortPersonNodes[t]).longtou || o.longwei || o[r._bulletTarget]) && o.parent) {
              var e = r.randomNum(0, $level_29086_config.colorDes.length - 1);
              r.setColorPersonImg(e, o);
            }
          }

          for (t = 0; t < r.sortPersonNodes2.length; t++) {
            var o;

            if ((o = r.sortPersonNodes2[t]).longtou || o.longwei || o[r._bulletTarget] || !o.parent) {//
            } else {
              e = r.randomNum(0, $level_29086_config.colorDes.length - 1);
              r.setColorPersonImg(e, o);
            }
          }
        }, 0.2, 2.2);
        cc.tween(this.node).delay(1.5).call(function () {
          r.isSortAnim = !1;
          r.isWin = !1;
          r.consoleWeight("总权重", r.allWeight);
          console.log("排队颜色顺序", r.fetchMaxIndex(r.allWeight, $level_29086_config.colorDes.length));
          var t = r.fetchMaxIndex(r.allWeight, $level_29086_config.colorDes.length);
          var e = new Array($level_29086_config.colorDes.length).fill(0);

          for (var o = 0; o < r.sortPersonNodes.length; o++) {
            if ((l = r.sortPersonNodes[o]).longtou || l.longwei || l[r._bulletTarget] || !l.parent) {//
            } else {
              e[l.getComponent($level_29086_dragonItem["default"]).dragonColor] += 1;
            }
          }

          for (o = 0; o < r.sortPersonNodes2.length; o++) {
            if ((l = r.sortPersonNodes2[o]).longtou || l.longwei || l[r._bulletTarget] || !l.parent) {//
            } else {
              e[l.getComponent($level_29086_dragonItem["default"]).dragonColor] += 1;
            }
          }

          var i = 0;
          var n = r.sortPersonNodes.length + r.sortPersonNodes2.length;
          var a = !0;
          var s = 0;
          var c = 0;

          for (o = 0; o < n; o++) {
            if (r.personPosRoot2) {
              if (s || c) {
                if (s && !c) {
                  a = !1;
                } else {
                  s && c && (a = !(!r.sortPersonNodes[s] || r.sortPersonNodes2[c] && s > c));
                }
              } else {
                a = !0;
              }
            }

            var l = void 0;

            if (a) {
              l = r.sortPersonNodes[s];
              s++;
            } else {
              l = r.sortPersonNodes2[c];
              c++;
            }

            if (!(l.longtou || l.longwei || l[r._bulletTarget]) && l.parent) {
              for (var h = t[i]; 0 == e[h] && (h = t[i += 1], !(i >= $level_29086_config.colorDes.length - 1));) {}

              e[h] -= 1;
              l.getComponent($level_29086_dragonItem["default"]).dragonColor = h;
              r.setColorPersonImg(h, l);
              console.log($level_29086_config.colorDes[h]);
            }
          }

          r.isSorting = !1;
        }).start();
        return [2];
      });
    });
  };

  e.prototype.revive = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i;
      var r;
      var n = this;
      return __generator(this, function () {
        if (this.isReviveBack) {
          return [2];
        }

        if (this._roleCurHp <= 0) {
          this._roleCurHp = 1;
          this.updateRoleHp();
        }

        for (t = this._bulletMoveList.length - 1; t >= 0; t--) {
          e = this._bulletMoveList[t];
          o = e[this._dragonTarget];
          e.stopAllActions();

          this._bulletMoveList.splice(t, 1);

          this.allPersonAmount--;
          this.uiShowPersonAmount--;
          this.updateHp();
          (i = o[this._itemNode]) && (i.removeFromParent(), i[this._itemDepend] = null, this._itemNodeList.splice(this._itemNodeList.indexOf(i), 1), this._itemPoolList.push(i));
          this.hideItem1BigSpine(o);
          this.hideItem1SmallSpine(o);
          this.hideItem4Spine(o);
          this.hideItem5Spine(o);
          this.removeBody(o);
          e.active = !1;

          this._bulletModelList.push(e);
        }

        this.isDragonAttack = !1;
        this.isDragonAttacking = !1;
        this.isDragonAttack2 = !1;
        this.isDragonAttacking2 = !1;

        if (this.sortPersonNodes.length) {
          this.sortPersonNodes[0][this._moveEnd] = !1;
          this.sortPersonNodes[0].stopAllActions();
        }

        if (this.sortPersonNodes2.length) {
          this.sortPersonNodes2[0][this._moveEnd] = !1;
          this.sortPersonNodes2[0].stopAllActions();
        }

        this.moveBodyRevive();
        this.isReviveBack = !0;
        this.isReviveSort = !0;
        this.reviveArr = [];

        r = function r(t, e, o) {
          var i;

          if (e) {
            i = n.sortPersonNodes;
          } else {
            i = n.sortPersonNodes2;
          }

          for (var r = 0; r < i.length; r++) {
            var a = i[r];

            if (!a.longtou && !a.longwei && !a[n._turnBackDestroy] && a.getComponent($level_29086_dragonItem["default"]).dragonColor == o) {
              t = a;
              e = !e;
              break;
            }
          }

          return {
            dragon: t,
            inputList1: e
          };
        };

        this.scheduleOnce(function () {
          n.isWin = !1;
          var t = !0;

          var e = function e(_e) {
            for (var o = n.cannonRoot.children[_e], i = o[n._cannonType], a = 0; a < o[n._cannonNum]; a++) {
              var s;
              var c = void 0;

              if (n.personPosRoot2) {
                c = (s = r(c, t, i)).dragon;
                t = s.inputList1;

                if (!c) {
                  var l = r(c, t, i);
                  c = l.dragon;
                  t = l.inputList1;
                }
              } else {
                c = (s = r(c, t, i)).dragon;
                t = !0;
              }

              if (c) {
                c[n._turnBackDestroy] = !0;
              } else {
                n.currentPersonColorAmount[i] += 1;
                var h = n.colorPersonAmountArr[i].length - 1;

                if (n.colorPersonAmountArr[i][h] > 0) {
                  n.colorPersonAmountArr[i][h] -= 1;
                }

                if (0 == n.colorPersonAmountArr[i][h]) {
                  n.colorPersonAmountArr[i].pop();
                }
              }

              n.allPersonAmount--;
              n.updateHp();
            }

            cc.tween(o).delay(0.05 * _e).call(function () {
              o.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "exit", !1);
              o.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(function () {
                o.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(null);
                o.getChildByName("body").active = !1;
                var t = null;

                if (o.getChildByName("xiaoshi")) {
                  t = o.getChildByName("xiaoshi");
                } else {
                  (t = cc.instantiate(n.dict["f29086.xiaoshi"])).name = "xiaoshi";
                  t.parent = o;
                  t.position = cc.v2();
                }

                t.active = !0;
                t.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
                cc.tween(o).delay(0.5).call(function () {
                  o.active = !1;
                  o.removeFromParent(!0);

                  n._cannonList.push(o);

                  o.parking.isEmpty = !0;
                  o.parking.car = null;
                  n.moveCarAmount -= 1;
                }).start();
              });
            }).start();
          };

          for (var o = n.cannonRoot.children.length - 1; o >= 0; o--) {
            e(o);
          }

          n.scheduleOnce(function () {
            n.isReviveSort = !1;
            n.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "haipa", !0);
          });
        });
        return [2];
      });
    });
  };

  e.prototype.func_revive = function () {
    var t = this;

    if (!(this.isReviveBack || this.isReviveSort || this.dict.dazhao.active)) {
      if (this.func_hasLockParking()) {
        for (var e = 0; e < this.dict.parkingRoot.children.length; e++) {
          var o = this.dict.parkingRoot.children[e];

          if (o.getChildByName("videoLock") && o.getChildByName("videoLock").active) {
            o.getChildByName("videoLock").destroy();
            o.getChildByName("empty").active = !0;
            this.playUnlockSpine(o);
            var i = o.getChildByName("unlockTips");

            if (i) {
              i.removeFromParent();
              i.active = !1;
            }

            o.isEmpty = !0;
            this.parkingNodes.push(o);
            cc.game.emit("unlockVideoLock", this.func_hasLockParking());
            break;
          }
        }

        this.reviveAnim(function () {
          t.revive();
        });
      } else {
        this.reviveAnim(function () {
          t.revive();
        });
      }
    }
  };

  e.prototype.reviveAnim = function (t) {
    var e = this;
    this.isWin = !0;
    this.dict.dazhao.active = !0;
    this.dict.dazhao.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    this.dict.dazhao.getComponent(sp.Skeleton).setCompleteListener(function () {
      e.dict.dazhao.getComponent(sp.Skeleton).setCompleteListener(null);
      e.dict.dazhao.active = !1;
    });
    this.scheduleOnce(function () {
      if (t) {
        t();
      }
    }, 0.6);
  };

  e.prototype.func_hasLockParking = function () {
    for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
      var e = this.dict.parkingRoot.children[t];

      if (e.getChildByName("videoLock") && e.getChildByName("videoLock").active) {
        return !0;
      }
    }

    return !1;
  };

  e.prototype.func_checkSlowDown = function () {
    if (!this.isWin && !this._removeStage && !this._slowStart) {
      return !0;
    }
  };

  e.prototype.func_slowDown = function () {
    this._slowStart = !0;
    this._slowCur = 0;
  };

  e.prototype.func_item1 = function () {
    cc.game.emit("f29086_item1");
  };

  e.prototype.func_item5 = function () {
    cc.game.emit("f29086_item5");
  };

  e.prototype.func_item6 = function (t) {
    cc.game.emit("f29086_addCoin", 20, t);
  };

  e.prototype.func_item7 = function (t) {
    cc.game.emit("f29086_addCoin", 500, t);
  };

  e.prototype.func_item1CB = function () {
    this._item1Cur = 0;
    this._item1Start = !0;

    for (var t = 0; t < this.sortPersonNodes.length; t++) {
      if ((e = this.sortPersonNodes[t]).parent) {
        if (e.longtou || e.longwei) {
          this.showItem1BigSpine(e);
        } else {
          t % 5 == 0 && this.showItem1SmallSpine(e);
        }
      }
    }

    for (t = 0; t < this.sortPersonNodes2.length; t++) {
      var e;

      if ((e = this.sortPersonNodes2[t]).parent) {
        if (e.longtou || e.longwei) {
          this.showItem1BigSpine(e);
        } else {
          t % 5 == 0 && this.showItem1SmallSpine(e);
        }
      }
    }
  };

  e.prototype.func_item5CB = function () {
    this._item5Cur = 0;
    this._item5Start = !0;

    for (var t = 0; t < this.cannonRoot.children.length; t++) {
      var e = this.cannonRoot.children[t];
      this.showItem5Spine(e);
    }
  };

  e.prototype.showItem1BigSpine = function (t) {
    var e = t.getChildByName("item1BigSpine");

    if (e) {
      e.active = !0;
    } else {
      var o = void 0;
      (o = this._item1BigSpineList.size() ? this._item1BigSpineList.get() : cc.instantiate(this.dict["f29086.bingkuai_da"])).name = "item1BigSpine";
      o.parent = t;
      o.active = !0;
      o.position = cc.v2(0, 0);
    }
  };

  e.prototype.hideItem1BigSpine = function (t) {
    var e = t.getChildByName("item1BigSpine");

    if (e) {
      e.active = !1;
    }
  };

  e.prototype.showItem1SmallSpine = function (t) {
    if (!t.getChildByName("item1SmallSpine")) {
      var e = void 0;
      (e = this._item1SmallSpineList.size() ? this._item1SmallSpineList.get() : cc.instantiate(this.dict["f29086.bingkuai_xiao"])).name = "item1SmallSpine";
      e.parent = t;
      e.active = !0;
      e.position = cc.v2(0, 0);
    }
  };

  e.prototype.hideItem1SmallSpine = function (t) {
    var e = t.getChildByName("item1SmallSpine");

    if (e) {
      e.active = !1;
      e.removeFromParent();

      this._item1SmallSpineList.put(e);
    }
  };

  e.prototype.showItem4Spine = function (t) {
    if (!t.getChildByName("item4Spine")) {
      var e = void 0;
      (e = this._item4SpineList.size() ? this._item4SpineList.get() : cc.instantiate(this.dict["f29086.pt_texiao1"])).name = "item4Spine";
      e.parent = t;
      e.active = !0;
      e.position = cc.v2(0, -35);
    }
  };

  e.prototype.hideItem4Spine = function (t) {
    var e = t.getChildByName("item4Spine");

    if (e) {
      e.active = !1;
      e.removeFromParent();

      this._item4SpineList.put(e);
    }
  };

  e.prototype.showItem5Spine = function (t) {
    if (!t.getChildByName("item5Spine")) {
      var e = void 0;
      (e = this._item5SpineList.size() ? this._item5SpineList.get() : cc.instantiate(this.dict["f29086.pt_texiao2"])).name = "item5Spine";
      e.parent = t;
      e.active = !0;
      e.position = cc.v2(0, -35);
    }
  };

  e.prototype.hideItem5Spine = function (t) {
    var e = t.getChildByName("item5Spine");

    if (e) {
      e.active = !1;
      e.removeFromParent();

      this._item5SpineList.put(e);
    }
  };

  e.prototype.showWudi = function () {
    var t = this.roleNode.getChildByName("wudi");

    if (t) {
      t.active = !0;
    } else {
      var e = cc.instantiate(this.dict["f29086.wudi"]);
      e.name = "wudi";
      e.parent = this.roleNode;
      e.position = cc.v2();
      e.active = !0;
    }
  };

  e.prototype.hideWudi = function (t) {
    if (void 0 === t) {
      t = !1;
    }

    var e = this.roleNode.getChildByName("wudi");

    if (e) {
      if (t) {
        cc.tween(e).to(0.2, {
          scale: 1.8 * e.scale
        }).call(function () {
          e.active = !1;
        }).start();
      } else {
        e.active = !1;
      }
    }
  };

  e.prototype.changeDragonSkin = function (t, e) {
    if (this._dragonSkin) {
      var o;
      var i;
      var r = null;

      switch (this._dragonSkin) {
        case 1:
          if (t.longtou) {
            i = "f29086.longtou_ys,idle1";
          } else {
            if (t.longwei) {
              i = "f29086.longwei_ys,idle1";
            }
          }

          o = this.dict[i];
      }

      if (o) {
        var n = i.split(",");

        if (n.length >= 2) {
          r = n[1];
        }

        var a = o.getComponent(sp.Skeleton);
        var s = t.getComponent(sp.Skeleton);
        s.skeletonData = a.skeletonData;
        s.defaultSkin = a.defaultSkin;
        s.defaultAnimation = r || a.skeletonData.getRuntimeData().animations[0].name;
        s.setAnimation(0, r || a.skeletonData.getRuntimeData().animations[0].name, s.loop);
        var c = this.dict["f29086.xiaochu_ys"].getComponent(sp.Skeleton);
        var l = this.dict.bulletPrefab.getChildByName("xiaochu").getComponent(sp.Skeleton);
        l.skeletonData = c.skeletonData;
        l.defaultSkin = c.defaultSkin;
        l.defaultAnimation = c.skeletonData.getRuntimeData().animations[0].name;
        l.setAnimation(0, c.skeletonData.getRuntimeData().animations[0].name, s.loop);
      }

      if (e) {
        e();
      }
    } else {
      if (e) {
        e();
      }
    }
  };

  e.prototype.changeRoleSkin = function (t, e) {
    if (this._roleSkin) {
      var o;
      var i;
      var r = null;

      switch (this._roleSkin) {
        case 1:
          i = "f29086.gongzhu1";
          o = this.dict[i];
          break;

        case 2:
          i = "f29086.gongzhu2";
          o = this.dict[i];
          break;

        case 3:
          i = "f29086.gongzhu3";
          o = this.dict[i];
          break;

        case 4:
          i = "f29086.guowang";
          o = this.dict[i];
          break;

        case 5:
          i = "f29086.wangzi";
          o = this.dict[i];
          break;

        case 6:
          i = "f29086.huakucha";
          o = this.dict[i];
      }

      if (o) {
        var n = i.split(",");

        if (n.length >= 2) {
          r = n[1];
        }

        var a = o.getComponent(sp.Skeleton);
        var s = t.getChildByName("role").getComponent(sp.Skeleton);
        s.skeletonData = a.skeletonData;
        s.defaultSkin = a.defaultSkin;
        s.defaultAnimation = r || a.skeletonData.getRuntimeData().animations[0].name;
        s.setAnimation(0, r || a.skeletonData.getRuntimeData().animations[0].name, s.loop);
      }

      if (e) {
        e();
      }
    } else {
      if (e) {
        e();
      }
    }
  };

  e.prototype.updateRoleHp = function () {
    var t = this.dict.roleHpNode;
    var e = t.getChildByName("list");
    var o = this.dict.roleHpImg;

    if (e.childrenCount) {
      if (this._roleCurHp < e.childrenCount) {
        for (i = e.childrenCount - 1; i >= this._roleCurHp; i--) {
          e.children[i].removeFromParent(!0);
        }
      }
    } else {
      for (var i = 0; i < this._roleCurHp; i++) {
        var r = cc.instantiate(o);
        r.parent = t.getChildByName("list");
        r.position = cc.v2();
        r.active = !0;
      }
    }

    if (1 == this._roleCurHp) {
      for (i = 0; i < e.childrenCount; i) {
        e.children[i].removeFromParent(!0);
      }

      e.width = 0;
    } else {
      e.width = o.width * this._roleCurHp;
    }

    e.getComponent(cc.Layout).updateLayout();
  };

  e.prototype.updateRoleHpPos = function () {
    this.dict.roleHpNode.position = this.transformPosition(this.roleNode, this.dict.roleHpNode);
  };

  e.prototype.showDragonBall = function (t, e) {
    var o = cc.instantiate(this.dict.dragonBallImg);
    var i = cc.instantiate(this.dict.dragonBallBg);
    o.parent = this.dict.dragonBallImg.parent;
    i.parent = this.dict.dragonBallBg.parent;
    o.active = !0;
    i.active = !0;
    i.scale = 0.5;
    o.setSiblingIndex(999);
    o.position = this.transformPosition(t, o);
    i.position = this.transformPosition(t, i);
    cc.tween(i).to(1, {
      angle: 360
    }).call(function () {
      i.angle = 0;
    }).union().repeatForever().start();
    cc.tween(o).delay(1).to(0.5, {
      position: this.transformPosition(this.roleNode, o)
    }).call(function () {
      if (e) {
        e();
      }

      o.active = !1;
      o.stopAllActions();
    }).start();
    cc.tween(i).delay(1).to(0.5, {
      position: this.transformPosition(this.roleNode, i)
    }).call(function () {
      i.active = !1;
      i.stopAllActions();
    }).start();
  };

  e.prototype.doRoleLevel10Skill = function () {
    this._roleLevel10Count = 1;

    for (var t = 0; t < this.sortPersonNodes.length; t++) {
      if ((e = this.sortPersonNodes[t]).parent) {
        if (e.longtou || e.longwei) {
          this.showItem1BigSpine(e);
        } else {
          t % 5 == 0 && this.showItem1SmallSpine(e);
        }
      }
    }

    for (t = 0; t < this.sortPersonNodes2.length; t++) {
      var e;

      if ((e = this.sortPersonNodes2[t]).parent) {
        if (e.longtou || e.longwei) {
          this.showItem1BigSpine(e);
        } else {
          t % 5 == 0 && this.showItem1SmallSpine(e);
        }
      }
    }
  };

  e.prototype.doDragonAttack = function () {
    var t = this;

    if (!this.isDragonAttacking) {
      this.isDragonAttacking = !0;
      var e = this.sortPersonNodes[0];

      if (e) {
        var o = this.transformPosition(this.roleNode, e);

        if (o.x >= e.x) {
          e.scaleX = 0.9;
        } else {
          e.scaleX = -0.9;
        }

        cc.tween(e).call(function () {
          if (!t._roleLevel2Count && t._roleLevel >= 2) {
            t._roleLevel2Count++;
            t.showWudi();
          }

          e.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
          e.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);

          if (t._roleLevel2Count && t._roleLevel2CurTime < t._roleLevel2Time) {//
          } else {
            t._roleCurHp--;
            t.updateRoleHp();

            if (t._roleCurHp <= 0) {
              t.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "shibai", !0), t.scheduleOnce(function () {
                e.getComponent(sp.Skeleton).setAnimation(0, "idle2", !0);
                e.stopAllActions();
                t.isWin = !0;
                cc.log("levelReviveHelper");
                $levelReviveHelper["default"].levelFailEvent("是否需要复活", function () {
                  t.func_revive();
                });
              }, 1.5);
            } else {
              t.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "shibai", !1), t.roleNode.getChildByName("role").getComponent(sp.Skeleton).addAnimation(0, "haipa", !0);
            }
          }
        }).delay(this._dragonAttackInterval).union().repeatForever().start();
      }
    }

    if (!this.isDragonAttacking2) {
      this.isDragonAttacking2 = !0;
      var i = this.sortPersonNodes[0];

      if (i) {
        o = this.transformPosition(this.roleNode, i);

        if (o.x >= i.x) {
          i.scaleX = 0.9;
        } else {
          i.scaleX = -0.9;
        }

        cc.tween(i).call(function () {
          if (!t._roleLevel2Count && t._roleLevel >= 2) {
            t._roleLevel2Count++;
            t.showWudi();
          }

          i.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
          i.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);

          if (t._roleLevel2Count && t._roleLevel2CurTime < t._roleLevel2Time) {//
          } else {
            t._roleCurHp--;
            t.updateRoleHp();

            if (t._roleCurHp <= 0) {
              t.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "shibai", !0), t.scheduleOnce(function () {
                i.getComponent(sp.Skeleton).setAnimation(0, "idle2", !0);
                i.stopAllActions();
                t.isWin = !0;
                cc.log("levelReviveHelper");
                $levelReviveHelper["default"].levelFailEvent("是否需要复活", function () {
                  t.func_revive();
                });
              }, 1.5);
            } else {
              t.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "shibai", !1), t.roleNode.getChildByName("role").getComponent(sp.Skeleton).addAnimation(0, "haipa", !0);
            }
          }
        }).delay(this._dragonAttackInterval).union().repeatForever().start();
      }
    }
  };

  e.prototype.func_checkRemove = function () {
    if (!this.isWin && !this._removeStage && this.carRoot.children.length && !(this.carRoot.children.length - this.parkingNodes.length <= 0)) {
      return !0;
    }
  };

  e.prototype.func_remove = function () {
    if (this.func_checkRemove()) {
      if (this.dict.transportLayer) {
        this.dict.transportLayer.getComponent($level_29086_transport["default"]).isMove = !1;
      }

      this._removeStage = !0;

      if (this._tipRemove) {
        this._tipRemove.active = !0;
      } else {
        var t = cc.instantiate(this.dict.tipPrefab);
        t.parent = this.dict.tipPrefab.parent;
        t.width = 500;

        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
          t.y = 100;
        } else {
          t.y = 188;
        }

        t.scale = 0.8;
        t.active = !0;
        t.children[1].getComponent(cc.Label).string = "请选择箱子";
        this._tipRemove = t;
      }
    }
  };

  e.prototype.remove = function (t) {
    var e = this;

    var o = function o(t, _o2, i) {
      var r;

      if (_o2) {
        r = e.sortPersonNodes;
      } else {
        r = e.sortPersonNodes2;
      }

      for (var n = 0; n < r.length; n++) {
        var a = r[n];

        if (!(a.longtou || a.longwei || a[e._bulletTarget] || a[e._turnBackDestroy] || a.readyDestroy || a.getComponent($level_29086_dragonItem["default"]).dragonColor != i)) {
          t = a;
          _o2 = !_o2;
          break;
        }
      }

      return {
        dragon: t,
        inputList1: _o2
      };
    };

    this._removeClick = !0;
    this._tipRemove.active = !1;
    var i;
    var r = !0;
    var n = t.getComponent($level_29086_boxCarItem["default"]).carColor;
    var a = [];

    for (var s = 0; s < t.getComponent($level_29086_boxCarItem["default"]).emptySeatAmount; s++) {
      var c;
      var l = void 0;

      if (this.personPosRoot2) {
        l = (c = o(l, r, n)).dragon;
        r = c.inputList1;

        if (!l) {
          var h = o(l, r, n);
          l = h.dragon;
          r = h.inputList1;
        }
      } else {
        l = (c = o(l, r, n)).dragon;
        r = !0;
      }

      if (l) {
        l.readyDestroy = !0;
        a.push(l);
      } else {
        this.currentPersonColorAmount[n] += 1;
        var p = this.colorPersonAmountArr[n].length - 1;

        if (this.colorPersonAmountArr[n][p] > 0) {
          this.colorPersonAmountArr[n][p] -= 1;
        }

        if (0 == this.colorPersonAmountArr[n][p]) {
          this.colorPersonAmountArr[n].pop();
        }
      }

      this.allPersonAmount--;
      this.updateHp();
    }

    if (this.personPosRoot2) {
      if (Math.random() < 0.5) {
        i = this.sortPersonNodes[0];
      } else {
        i = this.sortPersonNodes2[0];
      }
    } else {
      i = this.sortPersonNodes[0];
    }

    t.active = !1;
    var d = this.getFeidan();
    var g = this.getFeidanYanwu();
    var f = this.getFeidanBaozha();
    d.position = this.transformPosition(t.getChildByName("car"), d);
    d.y -= t.getChildByName("car").height / 2;
    d.active = !0;
    g.position = this.transformPosition(t.getChildByName("car"), g);
    g.y -= t.getChildByName("car").height / 2;
    g.active = !0;
    g.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    g.getComponent(sp.Skeleton).setCompleteListener(function () {
      g.getComponent(sp.Skeleton).setCompleteListener(null);
      g.active = !1;

      e._feidanYanwu.put(g);
    });
    f.position = this.transformPosition(i, f);
    var v = this.transformPosition(i, d);
    var C = this.getAngle(d.position, v) - 90;
    d.angle = C;
    cc.tween(d).to(0.5, {
      position: v
    }).call(function () {
      cc.game.emit("needLimitNoHandle", !1);

      if (e.dict.transportLayer) {
        e.dict.transportLayer.getComponent($level_29086_transport["default"]).isMove = !0;
      }

      d.active = !1;

      e._feidan.put(d);

      f.active = !0;
      f.getComponent(sp.Skeleton).setAnimation(0, "zha_da", !1);
      f.getComponent(sp.Skeleton).setCompleteListener(function () {
        f.getComponent(sp.Skeleton).setCompleteListener(null);
        f.active = !1;

        e._feidanBaozha.put(f);
      });

      for (var o = a.length - 1; o >= 0; o--) {
        var i = a[o];
        var r = i[e._itemNode];

        if (r) {
          r.removeFromParent();
          r[e._itemDepend] = null;

          e._itemNodeList.splice(e._itemNodeList.indexOf(r), 1);

          e._itemPoolList.push(r);
        }

        e.removeBody(i);
      }

      if (t.isTransportBox) {
        e.dict.transportLayer.getComponent($level_29086_transport["default"]).reduceCarAmount(t);
      }

      t.destroy();
      e._removeClick = !1;
      e._removeStage = !1;
      e.checkRes();
    }).start();
  };

  e.prototype.getFeidan = function () {
    var t;
    (t = this._feidan.size() > 0 ? this._feidan.get() : cc.instantiate(this.dict["f29086.feidan"])).parent = this.dict["f29086.feidan"].parent;
    t.active = !1;
    return t;
  };

  e.prototype.getFeidanYanwu = function () {
    var t;
    (t = this._feidanYanwu.size() > 0 ? this._feidanYanwu.get() : cc.instantiate(this.dict["f29086.feidan_yanwu"])).parent = this.dict["f29086.feidan_yanwu"].parent;
    t.active = !1;
    return t;
  };

  e.prototype.getFeidanBaozha = function () {
    var t;
    (t = this._feidanBaozha.size() > 0 ? this._feidanBaozha.get() : cc.instantiate(this.dict["f29086.baozha"])).parent = this.dict["f29086.baozha"].parent;
    t.active = !1;
    return t;
  };

  e.prototype.getAngle = function (t, e) {
    return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI;
  };

  __decorate([B(cc.SpriteAtlas)], e.prototype, "box2SpriteAtlas", void 0);

  __decorate([B], e.prototype, "isDebug", void 0);

  __decorate([B], e.prototype, "boundary", void 0);

  __decorate([B({
    type: cc.Enum(c),
    tooltip: "地图"
  })], e.prototype, "mapType", void 0);

  return __decorate([T], e);
}($brainLevelBase["default"]);

exports["default"] = W;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA4Nl9jb250cm9sLmpzIl0sIm5hbWVzIjpbImkiLCJjIiwibCIsIiRicmFpbkxldmVsQmFzZSIsInJlcXVpcmUiLCIkcG9vbE1nciIsIiRsZXZlbF8yOTA4Nl9jb25maWciLCIkbGV2ZWxfMjkwODZfYm94Q2FySXRlbSIsIiRtb3Rpb25UcmFpbCIsIiRsZXZlbF8yOTA4Nl9kcmFnb25JdGVtIiwiJGxldmVsVXRpbHMiLCIkbGV2ZWxDb25zdGFudCIsIiRsZXZlbF8yOTA4Nl90cmFuc3BvcnQiLCIkbGV2ZWxfMjkwODZfY2FyUGFyayIsIiRsZXZlbFJldml2ZUhlbHBlciIsIiRwbGF0Zm9ybU1hbmFnZXIiLCIkc2h1U2h1Q29uc3QiLCIkdXNlck1hbmFnZXIiLCIkdXNlckNvbnN0IiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkbGFuZ3VhZ2VNYW5hZ2VyIiwiUiIsImNjIiwiX2RlY29yYXRvciIsIlQiLCJjY2NsYXNzIiwiQiIsInByb3BlcnR5IiwidCIsIm1hcDEiLCJtYXAyIiwibWFwMyIsIm1hcDQiLCJtYXA1IiwibWFwNiIsIm1hcDciLCJtYXA4IiwibWFwOSIsIm1hcDEwIiwibWFwMTAxIiwibWFwMTAyIiwibm9ybWFsIiwiYmFjayIsInNsb3dTdGFydCIsIml0ZW0xU3RhcnQiLCJpdGVtMlN0YXJ0IiwiaXRlbTNTdGFydCIsInJldml2ZSIsIlciLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJib3gyU3ByaXRlQXRsYXMiLCJpc0RlYnVnIiwiYm91bmRhcnkiLCJtYXBUeXBlIiwiY2FyUm9vdCIsImNhbm5vblJvb3QiLCJkcmFnb25Sb290Iiwid2Fybk5vZGUiLCJyb2xlTm9kZSIsIl9jYW5ub25OdW0iLCJTeW1ib2wiLCJfY2Fubm9uVHlwZSIsIl9jYW5ub25TdGF0ZSIsIl9jYW5ub25MaXN0IiwiX2tlZXBEaXN0YW5jZSIsIl9tb3ZlU3BlZWQiLCJfc3BlZWRJbmRleExpc3QiLCJfYWRkU3BlZWQiLCJjYW5ub25BdHRhY2tMaXN0IiwiX2J1bGxldE1vZGVsTGlzdCIsIl9idWxsZXRNb3ZlTGlzdCIsIl9idWxsZXRUYXJnZXQiLCJfZHJhZ29uVGFyZ2V0IiwiX2l0ZW1UeXBlIiwiX2l0ZW1Ob2RlIiwiX2l0ZW1EZXBlbmQiLCJfdHVybkJhY2tEZXN0cm95IiwiX21vdmVFbmQiLCJjcmVhdGVGaW5pc2giLCJfc2xvd1RpbWUiLCJfc2xvd0N1ciIsIl9zbG93U3RhcnQiLCJfd2FybmluZyIsIl9yb2xlUG9pbnRJbmRleCIsIl9tYXBDb25maWciLCJfbWFwQ29uZmlnMiIsIl9pdGVtMVRpbWUiLCJfaXRlbTFDdXIiLCJfaXRlbTFTdGFydCIsIl9pdGVtMUJpZ1NwaW5lTGlzdCIsIk5vZGVQb29sIiwiX2l0ZW0xU21hbGxTcGluZUxpc3QiLCJfaXRlbTJUaW1lIiwiX2l0ZW0yQ3VyIiwiX2l0ZW0yU3RhcnQiLCJfaXRlbTNUaW1lIiwiX2l0ZW0zQ3VyIiwiX2l0ZW0zU3RhcnQiLCJfaXRlbTRUaW1lIiwiX2l0ZW00Q3VyIiwiX2l0ZW00U3RhcnQiLCJfaXRlbTRTcGluZUxpc3QiLCJfaXRlbTVUaW1lIiwiX2l0ZW01Q3VyIiwiX2l0ZW01U3RhcnQiLCJfaXRlbTVTcGluZUxpc3QiLCJfaXRlbUNyZWF0ZWRMaXN0IiwiX3dhcm5pbmdJbmRleCIsIl9pdGVtUG9vbExpc3QiLCJfaXRlbU5vZGVMaXN0IiwiX2l0ZW1OYW1lTGlzdCIsIl9pdGVtVGlwc0xpc3QiLCJfaXRlbVRpcHNOb2RlIiwiX3RvdWNoQmVnaW4iLCJjb2xvclR5cGVBbW91bnQiLCJjb2xvckRlcyIsImxlbmd0aCIsIl9kcmFnb25Ta2luIiwiX3JvbGVTa2luIiwiX3JvbGVIcCIsIl9yb2xlQ3VySHAiLCJfcm9sZUxldmVsIiwiX2RyYWdvbkF0dGFja0ludGVydmFsIiwiX3JvbGVMZXZlbDJUaW1lIiwiX3JvbGVMZXZlbDJDdXJUaW1lIiwiX3JvbGVMZXZlbDJDb3VudCIsIl9yb2xlTGV2ZWw1Q291bnQiLCJfcm9sZUxldmVsMTBUaW1lIiwiX3JvbGVMZXZlbDEwQ3VyVGltZSIsIl9yb2xlTGV2ZWwxMENvdW50IiwiX3JlbW92ZVN0YWdlIiwiX3JlbW92ZUNsaWNrIiwiX3RpcFJlbW92ZSIsIl9mZWlkYW4iLCJfZmVpZGFuWWFud3UiLCJfZmVpZGFuQmFvemhhIiwicGVyc29uUG9zUm9vdDIiLCJpc1RyYW5zcG9ydENhck1vdmUiLCJvbGRTb3J0QW1vdW50IiwiZ3VpZGVOb2RlcyIsImd1aWRlVGV4dCIsImN1cnJlbnRHdWlkZU5vZGUiLCJndWlkZWROb2RlcyIsInBvb2xNZ3IiLCJzb3J0Q29sb3JfbmV3IiwibGV2ZWxEYXRhSlNPTiIsInBhcmtpbmdOb2RlcyIsImJldHdlZW4yXzRDYXJBcnIiLCJoaWdoU3BlZWRSYWlsU3BlZWQiLCJ0dXJudGFibGVDYXJBcnIiLCJjb2xvclBlcnNvbkFyciIsInVubG9ja1BhcmtpbmdUYXJnZXQiLCJjYXJwYXJrSW5nIiwibW92ZUNhckFtb3VudCIsImFsbFBlcnNvbkFtb3VudCIsImFsbFBlcnNvbkFtb3VudDIiLCJjdXJDcmVhdGVQZXJzb25BbW91bnQiLCJleHRyYVdlaWdodENvbnN0IiwiZXh0cmFXZWlnaHQiLCJjYXJXZWlnaHQiLCJwYXJraW5nV2VpZ2h0Iiwic29ydFdlaWdodCIsImFsbFdlaWdodCIsImNvbG9yUGVyc29uQW1vdW50QXJyIiwiY29sb3JQZXJzb25BbW91bnRBcnJJbmRleCIsImNvbG9yUGVyc29uSW5kZXhBcnIiLCJ1aVNob3dQZXJzb25BbW91bnQiLCJjdXJyZW50UGVyc29uQ29sb3JBbW91bnQiLCJzb3J0UGVyc29uTm9kZXMiLCJzb3J0UGVyc29uTm9kZXMyIiwidGltZXMiLCJjcmVhdGVOdW0iLCJpc0NhblN0YXJ0Q2xpY2siLCJfY3VyTGFzdEJveEl0ZW1Ob2RlIiwiX2N1ckxhc3RCb3hJdGVtTm9kZTIiLCJfbUJvZHlNb3ZlQmFja0RpcyIsIl9tQm9keU1vdmVEaXMiLCJfbUJvZHlFdmVuIiwiX2N1ck1vdmVTdGF0ZSIsIl9jdXJNb3ZlU3RhdGUyIiwiX2N1cnZlUG9pbnRzIiwiX2N1cnZlUG9pbnRzMiIsImlzRmFpbCIsImlzV2luIiwiaXNEcmFnb25BdHRhY2siLCJpc0RyYWdvbkF0dGFja2luZyIsImlzRHJhZ29uQXR0YWNrMiIsImlzRHJhZ29uQXR0YWNraW5nMiIsImlzUmV2aXZlQW1vdW50IiwibGFzdEV4dHJhSW5kZXhBcnIiLCJyYW5kb21Db2xvckFyciIsInJhbmRvbUNvbG9yTnVtIiwiYmF0Y2hNYXAiLCJwYXRoQXJyIiwiY2FySW5kZXgiLCJjYXJOb2RlQXJyIiwiY2FyQWxsQW1vdW50IiwiY2FyTWFwIiwiaGFyZFBvaW50c0luZGV4cyIsImxvY2FsRGF0YSIsInJldml2ZUFyciIsInJldml2ZVJlbW92ZUFyciIsImZpcnN0U29ydEluZGV4QXJyIiwiaXNTb3J0aW5nIiwiaXNTb3J0QW5pbSIsImlzUmV2aXZlQmFjayIsImlzUmV2aXZlU29ydCIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsIl9fYXdhaXRlciIsIm8iLCJyIiwibiIsImEiLCJoIiwicCIsInUiLCJtIiwiZiIsInYiLCJ5IiwiQyIsIl9fZ2VuZXJhdG9yIiwiT2JqZWN0Iiwia2V5cyIsImRpY3QiLCJyZW1vdmVGcm9tUGFyZW50IiwiY2FsbCIsImFjdGl2ZSIsIk5vZGUiLCJwYXJlbnQiLCJnYW1lIiwicG9zaXRpb24iLCJ2MiIsImFuY2hvclgiLCJhZGRDb21wb25lbnQiLCJMYWJlbCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIkxhYmVsT3V0bGluZSIsImNvbG9yIiwiQ29sb3IiLCJCTEFDSyIsIndpZHRoIiwidmlldyIsImdldEZyYW1lU2l6ZSIsImhlaWdodCIsImVsZW1lbnQiLCJ0b3BNYXNrIiwid2luU2l6ZSIsIkRyaW5rUG9zQXJyIiwiRHJpbmtQb3NBcnIyIiwiRHJpbmtQb3NBcnIzIiwiRHJpbmtQb3NBcnI0IiwiRHJpbmtQb3NBcnI1IiwiRHJpbmtQb3NBcnI2IiwiRHJpbmtQb3NBcnI3IiwiRHJpbmtQb3NBcnI4IiwiRHJpbmtQb3NBcnI5IiwiRHJpbmtQb3NBcnIxMCIsIkRyaW5rUG9zQXJyMTAxXzEiLCJEcmlua1Bvc0FycjEwMV8yIiwiRHJpbmtQb3NBcnIxMDJfMSIsIkRyaW5rUG9zQXJyMTAyXzIiLCJNYXBQYXJhbSIsIm1hcE9yaWdpbiIsInN1YiIsInB1c2giLCJ4IiwicGVyc29uUG9zUm9vdCIsImluc3RhbnRpYXRlIiwic2V0U2libGluZ0luZGV4IiwiZ2V0U2libGluZ0luZGV4IiwiYWRkQ2hpbGQiLCJjaGlsZHJlbiIsImRpc3RhbmNlIiwibGVuIiwibWFwSW5kZXgiLCJBcnJheSIsImZpbGwiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJsZXZlbERhdGEiLCJsZXZlbElEIiwibW92ZVNwZWVkIiwiYWRkU3BlZWQiLCJpdGVtIiwiX2l0ZW1Db25maWciLCJzcGVlZEluZGV4TGlzdCIsInNldENvbGxpc2lvbk1hbmFnZXIiLCJidG5zIiwiaGl0U3BpbmUiLCJzY2FsZSIsInRhaWxHYXMiLCJnZXRDb21wb25lbnQiLCJoZWFkV2lkdGgiLCJ0YWlsV2lkdGgiLCJoZWFkT3BhY2l0eSIsInRhaWxPcGFjaXR5IiwiaGFuZCIsImhhbmRQb3MiLCJfbW92ZUluZGV4Iiwicm9sZVBvaW50IiwibmFtZSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsImluZGV4T2YiLCJoYW5kVGV4dCIsInN0cmluZyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiQW5pbWF0aW9uIiwicGxheSIsInR3ZWVuIiwic3oiLCJ0byIsInVuaW9uIiwicmVwZWF0Rm9yZXZlciIsInN0YXJ0Iiwic2hhY2tBY3Rpb24iLCJtb3ZlQnkiLCJzIiwic2VxdWVuY2UiLCJjaGFuZ2VDYXIiLCJnIiwiaXNSZWFkeURlc3Ryb3kiLCJjb2xvckltZ05hbWUiLCJsZW5JbWdOYW1lIiwiY2FyUHJlZmFiIiwiZ2V0Q2hpbGRCeU5hbWUiLCJwYXJraW5nIiwiY2FyU3RhdGUiLCJtZ3IiLCJkaXJJbWdOYW1lIiwiY2FyQ29sb3IiLCJDYXJTdGF0ZSIsIk9uQm90dG9tTGVmdCIsIk9uQm90dG9tUmlnaHQiLCJyb2FkIiwiR29pbmdQYXJraW5nIiwiZ2V0Q2FySW1nQnlDb2xvciIsImdldENhckJvZHlJbWdCeUNvbG9yIiwic3RvcEFsbEFjdGlvbnMiLCJwdXQiLCJkZXN0cm95IiwibmV4dENhciIsIk5vcm1hbCIsImlzVHJhbnNwb3J0Qm94IiwidHJhbnNwb3J0TGF5ZXIiLCJyZWR1Y2VDYXJBbW91bnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiSW5Sb2FkUmlnaHQiLCJJblJvYWRMZWZ0IiwiaXNGaXJlRW5naW5lIiwiY3VycmVudFBhcmtpbmdXUG9zIiwiY3VycmVudFBhcmtpbmdOUG9zIiwiTWF0aCIsImFicyIsImFkZFRhaWxHYXNTcGluZSIsInNwZWVkIiwiY29uc29sZSIsImxvZyIsImlzUmljaENhciIsImlzVHJhbWNhciIsIlBhcmtpbmciLCJtYWciLCJ1cGRhdGVDYXJXZWlnaHQiLCJjYXIiLCJzZWF0VG90YWxBbW91bnQiLCJOdW1iZXIiLCJzcCIsIlNrZWxldG9uIiwidGltZVNjYWxlIiwic2V0U2tpbiIsInNldEFuaW1hdGlvbiIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJPdXRQYXJraW5nIiwiZ2V0Q2Fubm9uIiwic2hvd0l0ZW00U3BpbmUiLCJzaG93SXRlbTVTcGluZSIsInB1dFRhaWxHYXMiLCJHb2luZ1JvYWQiLCJieSIsImNvbGxpc2lvbiIsImxvYWQiLCJQcm9taXNlIiwicmVzb3VyY2VzIiwid2FybiIsIlNwcml0ZUZyYW1lIiwiaGl0Iiwic2NoZWR1bGVPbmNlIiwiaXNFbXB0eSIsInNhdmVQYXJraW5nV1BvcyIsInBhcmtpbmdSb290Iiwib25MZXZlbFJlYWR5IiwiZm9yRWFjaCIsImNoaWxkcmVuQ291bnQiLCJ3aW5kb3ciLCJmMjkwODZfTGV2ZWxEYXRhIiwiaGVyb0xldmVsIiwidXNlU2tpbiIsInVwZGF0ZVJvbGVIcCIsImluaXRWaWV3IiwiXyIsIlMiLCJrIiwiQSIsIk4iLCJQIiwiYiIsImd1aWRlIiwidHJhbnNwb3J0IiwiaW5pdCIsIm92ZXJmbG93IiwiT3ZlcmZsb3ciLCJTSFJJTksiLCJlcnJvciIsImNhcnBhcmsiLCJjYXJQYXJrUm9vdCIsImdldExvY2FsIiwiY29uY2F0IiwiaW5kZXhJRCIsImdldFBhdGgiLCJibGFja0Ftb3VudCIsInBhdGgiLCJXSElURSIsImVtaXQiLCJmMjkwODZfZHJhZ29uQmFsbCIsImYyOTA4Nl9jb2luIiwic2V0Q2FySUQiLCJpc0JsYWNrQ2FyIiwiY2FySUQiLCJnZXRSYW5kb21EaXN0aW5jdEVsZW1lbnRzIiwic2V0TG9jYWwiLCJzaHVmZmxlQXJyYXkiLCJzb3J0Q29sb3IiLCJnZXRBcnJCeUxlbiIsImdldENhckNvbG9yIiwic2V0Q2FyQ29sb3JJbWciLCJlbXB0eVNlYXRBbW91bnQiLCJpbmNsdWRlcyIsImdldEFtb3VudEJ5Q29sb3IiLCJsb25ndG91IiwiZHJhZ29uQ29sb3IiLCJ2MyIsImNoYW5nZURyYWdvblNraW4iLCJ1cGRhdGVCb2R5UG9zIiwiaHBQcmVmYWIiLCJkZWxheSIsImdldFJhbmRvbUludCIsImFkZEFuaW1hdGlvbiIsImNyZWF0ZVBlcnNvbiIsInVuc2hpZnQiLCJjaGFuZ2VSb2xlU2tpbiIsImFkZCIsInVwZGF0ZVJvbGVIcFBvcyIsInJvbGVUZXh0Iiwicm9sZUhwTm9kZSIsImFuZ2xlIiwiX3RhcmdldFBvcyIsInVwZGF0ZUhwIiwib25Ub3VjaCIsImNoZWNrSGFzQ2FyTW92ZSIsIklkbGUiLCJjaGVja0hhc0Nhck1vdmVBbW91bnQiLCJpc1ZhbGlkIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwidG91Y2hTdGFydF9wYXJraW5nIiwiZnVuX3VubG9ja05ld1BvcyIsInBsYXlVbmxvY2tTcGluZSIsInRhcmdldCIsIlBsYXRmb3JtIiwic2hvd1Jld2FyZEFkcyIsIlNodVNodUNvbnN0IiwicmV3YXJkX2J0biIsImx2IiwiVXNlciIsImdldFRlbXBEYXRhIiwiVGVtcERhdGEiLCJDVVJSRU5UX0xFVkVMX0lEIiwibW9kZSIsIkNVUlJFTlRfTU9ERSIsInF1ZXVlIiwiQ1VSUkVOVF9MRVZFTCIsImlkIiwic29ydCIsImdldCIsIkNvbmZpZ1N1ZmZpeCIsImppZXN1byIsInByZW11bHRpcGxpZWRBbHBoYSIsImZ1bmNfaGFzTG9ja1BhcmtpbmciLCJmdW5jX3VubG9ja1BhcmtpbmciLCJnZXRMb2NhdGlvbiIsIlBvbHlnb25Db2xsaWRlciIsIkludGVyc2VjdGlvbiIsInBvaW50SW5Qb2x5Z29uIiwiZ2V0V1Bvc0J5UG9seWdvbiIsIm9ibGlxdWVIZWFkIiwicmVtb3ZlIiwic2hvdyIsInByZXZDYXIiLCJvcGFjaXR5IiwicnVuQWN0aW9uIiwiaXNTY2FsZUFuaW0iLCJpc0NhclBhcmsiLCJpc1dlbiIsImlzQ2FuQ2xpY2siLCJzZXRUcmFuc3BvcnRDYXJOb01vdmUiLCJvdGhlckNhck5vZGUiLCJnZXRPdGhlckNhckJ5RGlzdGFuY2UiLCJvbGRQb3MiLCJpc1VUcmFuc3BvcnRDYXIiLCJwbGF5UmVtb3RlU291bmQiLCJjaGVja0hhc0NvbGxpc2lvbiIsImxpbmVMaW5lIiwicG9pbnRzIiwib2Zmc2V0IiwiZmxvb3IiLCJyYW5kb20iLCJDYXJEaXJJbWciLCJyb3VuZCIsIkNhckxlbkltZyIsImlzTm9CbGFjayIsImZvbGRlciIsImxvbmd3ZWkiLCJnZXRQZXJzb25Db2xvciIsInJhbmRvbU51bSIsImQiLCJkcmFnb25QcmVmYWIiLCJzZXRDb2xvclBlcnNvbkltZyIsImNyZWF0ZUl0ZW0iLCJ6SW5kZXgiLCJzaGlmdCIsIml0ZW1QcmVmYWIiLCJmb3JtYXRTdHIiLCJpdGVtUm9vdCIsInVwZGF0ZSIsImRyYWdvbk1vdmluZyIsIm5vVG91Y2hBbmRTdG9wIiwiaXRlbUFjdGl2ZSIsImhpZGVXdWRpIiwiaGlkZUl0ZW0xQmlnU3BpbmUiLCJoaWRlSXRlbTFTbWFsbFNwaW5lIiwiaGlkZUl0ZW00U3BpbmUiLCJoaWRlSXRlbTVTcGluZSIsInVwZGF0ZUl0ZW1UaXBzIiwic3BsaWNlIiwiY2hlY2tSZXMiLCJtb3ZlSW5VcGRhdGUiLCJtb3ZlSW5VcGRhdGUyIiwiaXRlbU5vZGVNb3ZlIiwiZG9EcmFnb25BdHRhY2siLCJjaGVja1dhcm5pbmciLCJjaGVja1JvbGUiLCJjaGVja0Nhbm5vbkF0dGFjayIsImNhbm5vbkF0dGFjayIsImJ1bGxldEFycml2ZWQiLCJzcXJ0IiwiYXRhbjIiLCJQSSIsImdldE1vdmVEaXMiLCJtaW4iLCJnZXRBZGRTcGVlZCIsImdldFBvc0J5RGlzIiwiZ2V0UG9zMkJ5RGlzIiwic2NhbGVYIiwic2V0UG9zaXRpb24iLCJWZWMyIiwiWkVSTyIsIm5vcm1hbGl6ZSIsIm11bFNlbGYiLCJtb3ZlQm9keUJhY2siLCJtb3ZlQm9keVJldml2ZSIsInJlbW92ZUJvZHkiLCJiYWNrQm9keVdpdGhQaWNrMiIsImJhY2tCb2R5V2l0aFBpY2szIiwic2xpY2UiLCJkb21haW4iLCJnZXRCdWxsZXQiLCJ0cmFuc2Zvcm1Qb3NpdGlvbiIsImZ1bmNfaXRlbTEiLCJmdW5jX2l0ZW01IiwiZnVuY19pdGVtNiIsImZ1bmNfaXRlbTciLCJ3YXJuUG9pbnRzIiwidW5sb2NrVGlwcyIsImRvUm9sZUxldmVsMTBTa2lsbCIsInJvbGVXYXJuIiwibW92aW5nIiwicm9sZU1vdmluZyIsImFuaW1hdGlvbiIsImFkZFNlbGYiLCJyb2xlT2Zmc2V0IiwiYnVsbGV0UHJlZmFiIiwiYnVsbGV0Um9vdCIsImNhbm5vblByZWZhYiIsInVwZGF0ZVBhcmtpbmdXZWlnaHQiLCJ0YXJnZXRQZXJzb24iLCJocENvdW50IiwiaHBJbWciLCJmaWxsUmFuZ2UiLCJjYXJBbmltIiwiaXNDYXJBbmltIiwiY2hlY2tUaXBUZXh0Iiwic2hvd0RyYWdvbkJhbGwiLCJwbGF5UmlnaHQiLCJmbGF0dGVuIiwicmVkdWNlIiwiaXNBcnJheSIsImNvbnNvbGVXZWlnaHQiLCJ1cGRhdGVTb3J0V2VpZ2h0IiwicmFuZG9tQnlXZWlnaHQiLCJtYXAiLCJwb2ludExpbmVEaXN0YW5jZSIsInV1aWQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImNvbGxpc2lvbkFyciIsImVsZW1lbnRBMiIsImVsZW1lbnRDMSIsImVsZW1lbnRDMiIsImZldGNoTWF4SW5kZXgiLCJrZXkiLCJ2YWx1ZSIsImZpbHRlciIsImdldExldmVsUHJvZ3Jlc3NCeUNhciIsImhhcmRQb2ludHMiLCJsaW1pdFJhbmsiLCJhcnJheXNFcXVhbCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwidGlwUHJlZmFiIiwiZnVuY19zb3J0Iiwic2NoZWR1bGUiLCJkcmFnb24iLCJpbnB1dExpc3QxIiwicG9wIiwiZnVuY19yZXZpdmUiLCJkYXpoYW8iLCJyZXZpdmVBbmltIiwiZnVuY19jaGVja1Nsb3dEb3duIiwiZnVuY19zbG93RG93biIsImZ1bmNfaXRlbTFDQiIsInNob3dJdGVtMUJpZ1NwaW5lIiwic2hvd0l0ZW0xU21hbGxTcGluZSIsImZ1bmNfaXRlbTVDQiIsInNpemUiLCJzaG93V3VkaSIsInNwbGl0Iiwic2tlbGV0b25EYXRhIiwiZGVmYXVsdFNraW4iLCJkZWZhdWx0QW5pbWF0aW9uIiwiZ2V0UnVudGltZURhdGEiLCJhbmltYXRpb25zIiwibG9vcCIsInJvbGVIcEltZyIsIkxheW91dCIsInVwZGF0ZUxheW91dCIsImRyYWdvbkJhbGxJbWciLCJkcmFnb25CYWxsQmciLCJsZXZlbEZhaWxFdmVudCIsImZ1bmNfY2hlY2tSZW1vdmUiLCJmdW5jX3JlbW92ZSIsImlzTW92ZSIsInJlYWR5RGVzdHJveSIsImdldEZlaWRhbiIsImdldEZlaWRhbllhbnd1IiwiZ2V0RmVpZGFuQmFvemhhIiwiZ2V0QW5nbGUiLCJfX2RlY29yYXRlIiwiU3ByaXRlQXRsYXMiLCJ0eXBlIiwiRW51bSIsInRvb2x0aXAiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjs7QUFDQSxJQUFJQyxlQUFlLEdBQUdDLE9BQU8sQ0FBQyxrQkFB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QixDQUFDLENBQUNpSyxTQUF4QixFQUFtQyxpQkFBbkMsRUFBc0QsS0FBSyxDQUEzRCxDQUFWOztFQUNBdWQsVUFBVSxDQUFDLENBQUMvb0IsQ0FBRCxDQUFELEVBQU11QixDQUFDLENBQUNpSyxTQUFSLEVBQW1CLFNBQW5CLEVBQThCLEtBQUssQ0FBbkMsQ0FBVjs7RUFDQXVkLFVBQVUsQ0FBQyxDQUFDL29CLENBQUQsQ0FBRCxFQUFNdUIsQ0FBQyxDQUFDaUssU0FBUixFQUFtQixVQUFuQixFQUErQixLQUFLLENBQXBDLENBQVY7O0VBQ0F1ZCxVQUFVLENBQ04sQ0FDSS9vQixDQUFDLENBQUM7SUFDRWlwQixJQUFJLEVBQUVycEIsRUFBRSxDQUFDc3BCLElBQUgsQ0FBUTVxQixDQUFSLENBRFI7SUFFRTZxQixPQUFPLEVBQUU7RUFGWCxDQUFELENBREwsQ0FETSxFQU9ONW5CLENBQUMsQ0FBQ2lLLFNBUEksRUFRTixTQVJNLEVBU04sS0FBSyxDQVRDLENBQVY7O0VBV0EsT0FBT3VkLFVBQVUsQ0FBQyxDQUFDanBCLENBQUQsQ0FBRCxFQUFNeUIsQ0FBTixDQUFqQjtBQUNILENBdjBJTyxDQXUwSUwvQyxlQUFlLFdBdjBJVixDQUFSOztBQXcwSUE0cUIsT0FBTyxXQUFQLEdBQWtCOW5CLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciBjO1xudmFyIGw7XG52YXIgJGJyYWluTGV2ZWxCYXNlID0gcmVxdWlyZShcIi4vQnJhaW5MZXZlbEJhc2VcIik7XG52YXIgJHBvb2xNZ3IgPSByZXF1aXJlKFwiLi9Qb29sTWdyXCIpO1xudmFyICRsZXZlbF8yOTA4Nl9jb25maWcgPSByZXF1aXJlKFwiLi9MZXZlbC0yOTA4Nl9jb25maWdcIik7XG52YXIgJGxldmVsXzI5MDg2X2JveENhckl0ZW0gPSByZXF1aXJlKFwiLi9MZXZlbC0yOTA4Nl9ib3hDYXJJdGVtXCIpO1xudmFyICRtb3Rpb25UcmFpbCA9IHJlcXVpcmUoXCIuL01vdGlvblRyYWlsXCIpO1xudmFyICRsZXZlbF8yOTA4Nl9kcmFnb25JdGVtID0gcmVxdWlyZShcIi4vTGV2ZWwtMjkwODZfZHJhZ29uSXRlbVwiKTtcbnZhciAkbGV2ZWxVdGlscyA9IHJlcXVpcmUoXCIuL0xldmVsVXRpbHNcIik7XG52YXIgJGxldmVsQ29uc3RhbnQgPSByZXF1aXJlKFwiLi9MZXZlbENvbnN0YW50XCIpO1xudmFyICRsZXZlbF8yOTA4Nl90cmFuc3BvcnQgPSByZXF1aXJlKFwiLi9MZXZlbC0yOTA4Nl90cmFuc3BvcnRcIik7XG52YXIgJGxldmVsXzI5MDg2X2NhclBhcmsgPSByZXF1aXJlKFwiLi9MZXZlbC0yOTA4Nl9jYXJQYXJrXCIpO1xudmFyICRsZXZlbFJldml2ZUhlbHBlciA9IHJlcXVpcmUoXCIuL2xldmVsUmV2aXZlSGVscGVyXCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHNodVNodUNvbnN0ID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvU2h1U2h1Q29uc3RcIik7XG52YXIgJHVzZXJNYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvVXNlck1hbmFnZXJcIik7XG52YXIgJHVzZXJDb25zdCA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL1VzZXJDb25zdFwiKTtcbnZhciAkbG9jYWxTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0xvY2FsU3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciBSID0gY2MuX2RlY29yYXRvcjtcbnZhciBUID0gUi5jY2NsYXNzO1xudmFyIEIgPSBSLnByb3BlcnR5O1xuKGZ1bmN0aW9uICh0KSB7XG4gICAgdFsodC5tYXAxID0gMSldID0gXCJtYXAxXCI7XG4gICAgdFsodC5tYXAyID0gMildID0gXCJtYXAyXCI7XG4gICAgdFsodC5tYXAzID0gMyldID0gXCJtYXAzXCI7XG4gICAgdFsodC5tYXA0ID0gNCldID0gXCJtYXA0XCI7XG4gICAgdFsodC5tYXA1ID0gNSldID0gXCJtYXA1XCI7XG4gICAgdFsodC5tYXA2ID0gNildID0gXCJtYXA2XCI7XG4gICAgdFsodC5tYXA3ID0gNyldID0gXCJtYXA3XCI7XG4gICAgdFsodC5tYXA4ID0gOCldID0gXCJtYXA4XCI7XG4gICAgdFsodC5tYXA5ID0gOSldID0gXCJtYXA5XCI7XG4gICAgdFsodC5tYXAxMCA9IDEwKV0gPSBcIm1hcDEwXCI7XG4gICAgdFsodC5tYXAxMDEgPSAxMDEpXSA9IFwibWFwMTAxXCI7XG4gICAgdFsodC5tYXAxMDIgPSAxMDIpXSA9IFwibWFwMTAyXCI7XG59KShjIHx8IChjID0ge30pKTtcbihmdW5jdGlvbiAodCkge1xuICAgIHRbKHQubm9ybWFsID0gMCldID0gXCJub3JtYWxcIjtcbiAgICB0Wyh0LmJhY2sgPSAxKV0gPSBcImJhY2tcIjtcbiAgICB0Wyh0LnNsb3dTdGFydCA9IDIpXSA9IFwic2xvd1N0YXJ0XCI7XG4gICAgdFsodC5pdGVtMVN0YXJ0ID0gMyldID0gXCJpdGVtMVN0YXJ0XCI7XG4gICAgdFsodC5pdGVtMlN0YXJ0ID0gNCldID0gXCJpdGVtMlN0YXJ0XCI7XG4gICAgdFsodC5pdGVtM1N0YXJ0ID0gNSldID0gXCJpdGVtM1N0YXJ0XCI7XG4gICAgdFsodC5yZXZpdmUgPSA2KV0gPSBcInJldml2ZVwiO1xufSkobCB8fCAobCA9IHt9KSk7XG52YXIgVyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmJveDJTcHJpdGVBdGxhcyA9IG51bGw7XG4gICAgICAgIGUuaXNEZWJ1ZyA9ICExO1xuICAgICAgICBlLmJvdW5kYXJ5ID0gNzUwO1xuICAgICAgICBlLm1hcFR5cGUgPSBjLm1hcDE7XG4gICAgICAgIGUuY2FyUm9vdCA9IG51bGw7XG4gICAgICAgIGUuY2Fubm9uUm9vdCA9IG51bGw7XG4gICAgICAgIGUuZHJhZ29uUm9vdCA9IG51bGw7XG4gICAgICAgIGUud2Fybk5vZGUgPSBudWxsO1xuICAgICAgICBlLnJvbGVOb2RlID0gbnVsbDtcbiAgICAgICAgZS5fY2Fubm9uTnVtID0gU3ltYm9sKFwiX2Nhbm5vbk51bVwiKTtcbiAgICAgICAgZS5fY2Fubm9uVHlwZSA9IFN5bWJvbChcIl9jYW5ub25UeXBlXCIpO1xuICAgICAgICBlLl9jYW5ub25TdGF0ZSA9IFN5bWJvbChcIl9jYW5ub25TdGF0ZVwiKTtcbiAgICAgICAgZS5fY2Fubm9uTGlzdCA9IFtdO1xuICAgICAgICBlLl9rZWVwRGlzdGFuY2UgPSAzMDtcbiAgICAgICAgZS5fbW92ZVNwZWVkID0gWzUwLCA1MDAsIDcwMF07XG4gICAgICAgIGUuX3NwZWVkSW5kZXhMaXN0ID0gWzAsIDcwLCAxNjBdO1xuICAgICAgICBlLl9hZGRTcGVlZCA9IFswLCAwLCA1LCAyXTtcbiAgICAgICAgZS5jYW5ub25BdHRhY2tMaXN0ID0gW1s3MCwgMTc5XV07XG4gICAgICAgIGUuX2J1bGxldE1vZGVsTGlzdCA9IFtdO1xuICAgICAgICBlLl9idWxsZXRNb3ZlTGlzdCA9IFtdO1xuICAgICAgICBlLl9idWxsZXRUYXJnZXQgPSBTeW1ib2woXCJfYnVsbGV0VGFyZ2V0XCIpO1xuICAgICAgICBlLl9kcmFnb25UYXJnZXQgPSBTeW1ib2woXCJfZHJhZ29uVGFyZ2V0XCIpO1xuICAgICAgICBlLl9pdGVtVHlwZSA9IFN5bWJvbChcIl9pdGVtVHlwZVwiKTtcbiAgICAgICAgZS5faXRlbU5vZGUgPSBTeW1ib2woXCJfaXRlbU5vZGVcIik7XG4gICAgICAgIGUuX2l0ZW1EZXBlbmQgPSBTeW1ib2woXCJfaXRlbURlcGVuZFwiKTtcbiAgICAgICAgZS5fdHVybkJhY2tEZXN0cm95ID0gU3ltYm9sKFwiX3R1cm5CYWNrRGVzdHJveVwiKTtcbiAgICAgICAgZS5fbW92ZUVuZCA9IFN5bWJvbChcIl9tb3ZlRW5kXCIpO1xuICAgICAgICBlLmNyZWF0ZUZpbmlzaCA9ICExO1xuICAgICAgICBlLl9zbG93VGltZSA9IDEyO1xuICAgICAgICBlLl9zbG93Q3VyID0gMDtcbiAgICAgICAgZS5fc2xvd1N0YXJ0ID0gITE7XG4gICAgICAgIGUuX3dhcm5pbmcgPSAhMTtcbiAgICAgICAgZS5fcm9sZVBvaW50SW5kZXggPSAwO1xuICAgICAgICBlLl9tYXBDb25maWcgPSBbXTtcbiAgICAgICAgZS5fbWFwQ29uZmlnMiA9IFtdO1xuICAgICAgICBlLl9pdGVtMVRpbWUgPSA1O1xuICAgICAgICBlLl9pdGVtMUN1ciA9IDA7XG4gICAgICAgIGUuX2l0ZW0xU3RhcnQgPSAhMTtcbiAgICAgICAgZS5faXRlbTFCaWdTcGluZUxpc3QgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgICAgZS5faXRlbTFTbWFsbFNwaW5lTGlzdCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICBlLl9pdGVtMlRpbWUgPSAyO1xuICAgICAgICBlLl9pdGVtMkN1ciA9IDA7XG4gICAgICAgIGUuX2l0ZW0yU3RhcnQgPSAhMTtcbiAgICAgICAgZS5faXRlbTNUaW1lID0gNTtcbiAgICAgICAgZS5faXRlbTNDdXIgPSAwO1xuICAgICAgICBlLl9pdGVtM1N0YXJ0ID0gITE7XG4gICAgICAgIGUuX2l0ZW00VGltZSA9IDg7XG4gICAgICAgIGUuX2l0ZW00Q3VyID0gMDtcbiAgICAgICAgZS5faXRlbTRTdGFydCA9ICExO1xuICAgICAgICBlLl9pdGVtNFNwaW5lTGlzdCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuICAgICAgICBlLl9pdGVtNVRpbWUgPSAxMjtcbiAgICAgICAgZS5faXRlbTVDdXIgPSAwO1xuICAgICAgICBlLl9pdGVtNVN0YXJ0ID0gITE7XG4gICAgICAgIGUuX2l0ZW01U3BpbmVMaXN0ID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgIGUuX2l0ZW1DcmVhdGVkTGlzdCA9IFtdO1xuICAgICAgICBlLl93YXJuaW5nSW5kZXggPSAwO1xuICAgICAgICBlLl9pdGVtUG9vbExpc3QgPSBbXTtcbiAgICAgICAgZS5faXRlbU5vZGVMaXN0ID0gW107XG4gICAgICAgIGUuX2l0ZW1OYW1lTGlzdCA9IFtcIuWGsOWwgVwiLCBcIuWHu+mAgFwiLCBcIuW3qOm+meWHj+mAn1wiLCBcIuWwhOmAn+WKoOW/q1wiLCBcIuWwhOeoi+WinuWKoFwiLCBcIuWwkemHj+mHkeW4gVwiLCBcIuWkp+mHj+mHkeW4gVwiXTtcbiAgICAgICAgZS5faXRlbVRpcHNMaXN0ID0gW1wi5Yaw5Ya75pWI5p6c55Sf5pWI5LitXCIsIFwiXCIsIFwi5YeP6YCf5pWI5p6c55Sf5pWI5LitXCIsIFwi5bCE6YCf5Yqg5b+r5LitXCIsIFwi5bCE56iL5aKe5Yqg5LitXCIsIFwiXCIsIFwiXCJdO1xuICAgICAgICBlLl9pdGVtVGlwc05vZGUgPSBudWxsO1xuICAgICAgICBlLl90b3VjaEJlZ2luID0gITE7XG4gICAgICAgIGUuY29sb3JUeXBlQW1vdW50ID0gJGxldmVsXzI5MDg2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGg7XG4gICAgICAgIGUuX2RyYWdvblNraW4gPSAwO1xuICAgICAgICBlLl9yb2xlU2tpbiA9IDA7XG4gICAgICAgIGUuX3JvbGVIcCA9IDE7XG4gICAgICAgIGUuX3JvbGVDdXJIcCA9IDE7XG4gICAgICAgIGUuX3JvbGVMZXZlbCA9IDE7XG4gICAgICAgIGUuX2RyYWdvbkF0dGFja0ludGVydmFsID0gMztcbiAgICAgICAgZS5fcm9sZUxldmVsMlRpbWUgPSAzO1xuICAgICAgICBlLl9yb2xlTGV2ZWwyQ3VyVGltZSA9IDA7XG4gICAgICAgIGUuX3JvbGVMZXZlbDJDb3VudCA9IDA7XG4gICAgICAgIGUuX3JvbGVMZXZlbDVDb3VudCA9IDA7XG4gICAgICAgIGUuX3JvbGVMZXZlbDEwVGltZSA9IDM7XG4gICAgICAgIGUuX3JvbGVMZXZlbDEwQ3VyVGltZSA9IDA7XG4gICAgICAgIGUuX3JvbGVMZXZlbDEwQ291bnQgPSAwO1xuICAgICAgICBlLl9yZW1vdmVTdGFnZSA9ICExO1xuICAgICAgICBlLl9yZW1vdmVDbGljayA9ICExO1xuICAgICAgICBlLl90aXBSZW1vdmUgPSBudWxsO1xuICAgICAgICBlLl9mZWlkYW4gPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgICAgZS5fZmVpZGFuWWFud3UgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgICAgZS5fZmVpZGFuQmFvemhhID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgIGUucGVyc29uUG9zUm9vdDIgPSBudWxsO1xuICAgICAgICBlLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICExO1xuICAgICAgICBlLm9sZFNvcnRBbW91bnQgPSAwO1xuICAgICAgICBlLmd1aWRlTm9kZXMgPSBbXTtcbiAgICAgICAgZS5ndWlkZVRleHQgPSBbXG4gICAgICAgICAgICBcIueuseWtkOS8muacneedgOeureWktOaWueWQkeenu+WKqFwiLFxuICAgICAgICAgICAgXCLov5nnp43nrrHlrZDlj6/ku6Xlj5HlsIQxMOmil+eCruW8uVwiLFxuICAgICAgICAgICAgXCLov5nnp43nrrHlrZDlj6/ku6Xlj5HlsIQ26aKX54Ku5by5XCIsXG4gICAgICAgICAgICBcIui/meenjeeuseWtkOWPr+S7peWPkeWwhDTpopfngq7lvLlcIlxuICAgICAgICBdO1xuICAgICAgICBlLmN1cnJlbnRHdWlkZU5vZGUgPSBudWxsO1xuICAgICAgICBlLmd1aWRlZE5vZGVzID0gW107XG4gICAgICAgIGUucG9vbE1nciA9IG5ldyAkcG9vbE1nci5kZWZhdWx0KCk7XG4gICAgICAgIGUuc29ydENvbG9yX25ldyA9IFtdO1xuICAgICAgICBlLmxldmVsRGF0YUpTT04gPSB7fTtcbiAgICAgICAgZS5wYXJraW5nTm9kZXMgPSBbXTtcbiAgICAgICAgZS5iZXR3ZWVuMl80Q2FyQXJyID0gW107XG4gICAgICAgIGUuaGlnaFNwZWVkUmFpbFNwZWVkID0gNjAwO1xuICAgICAgICBlLnR1cm50YWJsZUNhckFyciA9IFtdO1xuICAgICAgICBlLmNvbG9yUGVyc29uQXJyID0gW107XG4gICAgICAgIGUudW5sb2NrUGFya2luZ1RhcmdldCA9IG51bGw7XG4gICAgICAgIGUuY2FycGFya0luZyA9ICExO1xuICAgICAgICBlLm1vdmVDYXJBbW91bnQgPSAwO1xuICAgICAgICBlLmFsbFBlcnNvbkFtb3VudCA9IDA7XG4gICAgICAgIGUuYWxsUGVyc29uQW1vdW50MiA9IDA7XG4gICAgICAgIGUuY3VyQ3JlYXRlUGVyc29uQW1vdW50ID0gMDtcbiAgICAgICAgZS5leHRyYVdlaWdodENvbnN0ID0gMDtcbiAgICAgICAgZS5leHRyYVdlaWdodCA9IFtdO1xuICAgICAgICBlLmNhcldlaWdodCA9IFtdO1xuICAgICAgICBlLnBhcmtpbmdXZWlnaHQgPSBbXTtcbiAgICAgICAgZS5zb3J0V2VpZ2h0ID0gW107XG4gICAgICAgIGUuYWxsV2VpZ2h0ID0gW107XG4gICAgICAgIGUuY29sb3JQZXJzb25BbW91bnRBcnIgPSBbXTtcbiAgICAgICAgZS5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4ID0gW107XG4gICAgICAgIGUuY29sb3JQZXJzb25JbmRleEFyciA9IFtdO1xuICAgICAgICBlLnVpU2hvd1BlcnNvbkFtb3VudCA9IDA7XG4gICAgICAgIGUuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50ID0gW107XG4gICAgICAgIGUuc29ydFBlcnNvbk5vZGVzID0gW107XG4gICAgICAgIGUuc29ydFBlcnNvbk5vZGVzMiA9IFtdO1xuICAgICAgICBlLnRpbWVzID0gMDtcbiAgICAgICAgZS5jcmVhdGVOdW0gPSAwO1xuICAgICAgICBlLmlzQ2FuU3RhcnRDbGljayA9ICExO1xuICAgICAgICBlLl9jdXJMYXN0Qm94SXRlbU5vZGUgPSBudWxsO1xuICAgICAgICBlLl9jdXJMYXN0Qm94SXRlbU5vZGUyID0gbnVsbDtcbiAgICAgICAgZS5fbUJvZHlNb3ZlQmFja0RpcyA9IFN5bWJvbChcIl9tQm9keU1vdmVCYWNrRGlzXCIpO1xuICAgICAgICBlLl9tQm9keU1vdmVEaXMgPSBTeW1ib2woXCJfbUJvZHlNb3ZlRGlzXCIpO1xuICAgICAgICBlLl9tQm9keUV2ZW4gPSBTeW1ib2woXCJfbUJvZHlFdmVuXCIpO1xuICAgICAgICBlLl9jdXJNb3ZlU3RhdGUgPSBsLm5vcm1hbDtcbiAgICAgICAgZS5fY3VyTW92ZVN0YXRlMiA9IGwubm9ybWFsO1xuICAgICAgICBlLl9jdXJ2ZVBvaW50cyA9IFtdO1xuICAgICAgICBlLl9jdXJ2ZVBvaW50czIgPSBbXTtcbiAgICAgICAgZS5pc0ZhaWwgPSAhMTtcbiAgICAgICAgZS5pc1dpbiA9ICExO1xuICAgICAgICBlLmlzRHJhZ29uQXR0YWNrID0gITE7XG4gICAgICAgIGUuaXNEcmFnb25BdHRhY2tpbmcgPSAhMTtcbiAgICAgICAgZS5pc0RyYWdvbkF0dGFjazIgPSAhMTtcbiAgICAgICAgZS5pc0RyYWdvbkF0dGFja2luZzIgPSAhMTtcbiAgICAgICAgZS5pc1Jldml2ZUFtb3VudCA9IDA7XG4gICAgICAgIGUubGFzdEV4dHJhSW5kZXhBcnIgPSBbXTtcbiAgICAgICAgZS5yYW5kb21Db2xvckFyciA9IFtdO1xuICAgICAgICBlLnJhbmRvbUNvbG9yTnVtID0gW107XG4gICAgICAgIGUuYmF0Y2hNYXAgPSB7fTtcbiAgICAgICAgZS5wYXRoQXJyID0gW107XG4gICAgICAgIGUuY2FySW5kZXggPSBbXTtcbiAgICAgICAgZS5jYXJOb2RlQXJyID0gW107XG4gICAgICAgIGUuY2FyQWxsQW1vdW50ID0gMDtcbiAgICAgICAgZS5jYXJNYXAgPSB7fTtcbiAgICAgICAgZS5oYXJkUG9pbnRzSW5kZXhzID0gW107XG4gICAgICAgIGUubG9jYWxEYXRhID0ge307XG4gICAgICAgIGUucmV2aXZlQXJyID0gW107XG4gICAgICAgIGUucmV2aXZlUmVtb3ZlQXJyID0gW107XG4gICAgICAgIGUuZmlyc3RTb3J0SW5kZXhBcnIgPSBbXTtcbiAgICAgICAgZS5pc1NvcnRpbmcgPSAhMTtcbiAgICAgICAgZS5pc1NvcnRBbmltID0gITE7XG4gICAgICAgIGUuaXNSZXZpdmVCYWNrID0gITE7XG4gICAgICAgIGUuaXNSZXZpdmVTb3J0ID0gITE7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICB2YXIgbDtcbiAgICAgICAgICAgIHZhciBoO1xuICAgICAgICAgICAgdmFyIHA7XG4gICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICB2YXIgdjtcbiAgICAgICAgICAgIHZhciB5O1xuICAgICAgICAgICAgdmFyIEM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCBPYmplY3Qua2V5cyhjKS5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICBlID0gZiArIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdFtcIm1hcFwiICsgZV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgIT0gdGhpcy5tYXBUeXBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0W1wibWFwXCIgKyBlXS5yZW1vdmVGcm9tUGFyZW50KCksIHRoaXMuZGljdFtcIm1hcEJnXCIgKyBlXS5yZW1vdmVGcm9tUGFyZW50KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUm9vdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtVGlwc05vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1UaXBzTm9kZS5wYXJlbnQgPSB0aGlzLmRpY3QuZ2FtZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtVGlwc05vZGUucG9zaXRpb24gPSBjYy52MigzNzQuMTY5LCAzNjApO1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1UaXBzTm9kZS5hbmNob3JYID0gMTtcbiAgICAgICAgICAgICAgICAobyA9IHRoaXMuX2l0ZW1UaXBzTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpKS5mb250U2l6ZSA9IDIyO1xuICAgICAgICAgICAgICAgIG8ubGluZUhlaWdodCA9IDMwO1xuICAgICAgICAgICAgICAgIChpID0gdGhpcy5faXRlbVRpcHNOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpKS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgICAgIGkud2lkdGggPSAyO1xuICAgICAgICAgICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmVsZW1lbnQueSAtPSA4MDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbVRpcHNOb2RlLnkgLT0gODA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC50b3BNYXNrLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTWFzay55ID0gNTA0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTWFzay5oZWlnaHQgPSA2NDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGljdC53YXJuTm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3Qud2Fybk5vZGUueSA9IC0xICogdGhpcy5kaWN0LmdhbWUueTtcbiAgICAgICAgICAgICAgICByID0gW107XG4gICAgICAgICAgICAgICAgbiA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcFR5cGUgPT0gYy5tYXAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHIgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkRyaW5rUG9zQXJyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcFR5cGUgPT0gYy5tYXAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gJGxldmVsXzI5MDg2X2NvbmZpZy5Ecmlua1Bvc0FycjI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBUeXBlID09IGMubWFwMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkRyaW5rUG9zQXJyMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwVHlwZSA9PSBjLm1hcDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9ICRsZXZlbF8yOTA4Nl9jb25maWcuRHJpbmtQb3NBcnI0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwVHlwZSA9PSBjLm1hcDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHIgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkRyaW5rUG9zQXJyNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5tYXBUeXBlID09IGMubWFwNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAociA9ICRsZXZlbF8yOTA4Nl9jb25maWcuRHJpbmtQb3NBcnI2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm1hcFR5cGUgPT0gYy5tYXA3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChyID0gJGxldmVsXzI5MDg2X2NvbmZpZy5Ecmlua1Bvc0FycjcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubWFwVHlwZSA9PSBjLm1hcDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHIgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkRyaW5rUG9zQXJyOClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5tYXBUeXBlID09IGMubWFwOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAociA9ICRsZXZlbF8yOTA4Nl9jb25maWcuRHJpbmtQb3NBcnI5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm1hcFR5cGUgPT0gYy5tYXAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAociA9ICRsZXZlbF8yOTA4Nl9jb25maWcuRHJpbmtQb3NBcnIxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5tYXBUeXBlID09IGMubWFwMTAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgociA9ICRsZXZlbF8yOTA4Nl9jb25maWcuRHJpbmtQb3NBcnIxMDFfMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID0gJGxldmVsXzI5MDg2X2NvbmZpZy5Ecmlua1Bvc0FycjEwMV8yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5tYXBUeXBlID09IGMubWFwMTAyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgociA9ICRsZXZlbF8yOTA4Nl9jb25maWcuRHJpbmtQb3NBcnIxMDJfMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID0gJGxldmVsXzI5MDg2X2NvbmZpZy5Ecmlua1Bvc0FycjEwMl8yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEgPSAkbGV2ZWxfMjkwODZfY29uZmlnLk1hcFBhcmFtW3RoaXMubWFwVHlwZV0ubWFwT3JpZ2luO1xuICAgICAgICAgICAgICAgIGwgPSB0aGlzLmRpY3RbXCJtYXBcIiArIHRoaXMubWFwVHlwZV0ucG9zaXRpb24uc3ViKGEpO1xuICAgICAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCByLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG0gPSByW2ZdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXBDb25maWcucHVzaChbbVswXSArIGwueCwgbVsxXSArIGwueV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGYgPSAwOyBmIDwgbi5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICBtID0gbltmXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFwQ29uZmlnMi5wdXNoKFttWzBdICsgbC54LCBtWzFdICsgbC55XSk7XG4gICAgICAgICAgICAgICAgICAgIGggPSB0aGlzLmRpY3QucGVyc29uUG9zUm9vdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25Qb3NSb290MiA9IGNjLmluc3RhbnRpYXRlKGgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvblBvc1Jvb3QyLnBhcmVudCA9IGgucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvblBvc1Jvb3QyLnBvc2l0aW9uID0gaC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25Qb3NSb290Mi5zZXRTaWJsaW5nSW5kZXgoaC5nZXRTaWJsaW5nSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCB0aGlzLl9tYXBDb25maWcubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdSA9IG5ldyBjYy5Ob2RlKFwiXCIgKyBwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuYWRkQ2hpbGQodSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSB0aGlzLl9tYXBDb25maWdbcF07XG4gICAgICAgICAgICAgICAgICAgIHUucG9zaXRpb24gPSBjYy52MihtWzBdLCBtWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChmID0gMTsgZiA8IHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNoaWxkcmVuLmxlbmd0aDsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmRpY3QucGVyc29uUG9zUm9vdC5jaGlsZHJlbltmIC0gMV0ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLmRpY3QucGVyc29uUG9zUm9vdC5jaGlsZHJlbltmXS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgQyA9IHYuc3ViKHkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJ2ZVBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IEMubGVuKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBJbmRleDogZlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChwID0gMDsgcCA8IHRoaXMuX21hcENvbmZpZzIubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdSA9IG5ldyBjYy5Ob2RlKFwiXCIgKyBwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25Qb3NSb290Mi5hZGRDaGlsZCh1KTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IHRoaXMuX21hcENvbmZpZzJbcF07XG4gICAgICAgICAgICAgICAgICAgIHUucG9zaXRpb24gPSBjYy52MihtWzBdLCBtWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVyc29uUG9zUm9vdDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChmID0gMTsgZiA8IHRoaXMucGVyc29uUG9zUm9vdDIuY2hpbGRyZW4ubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnBlcnNvblBvc1Jvb3QyLmNoaWxkcmVuW2YgLSAxXS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLnBlcnNvblBvc1Jvb3QyLmNoaWxkcmVuW2ZdLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgQyA9IHYuc3ViKHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VydmVQb2ludHMyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBDLmxlbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEluZGV4OiBmXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhcldlaWdodCA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhV2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdEV4dHJhSW5kZXhBcnIgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJraW5nV2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydFdlaWdodCA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFdlaWdodCA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uSW5kZXhBcnIgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFyciA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRsZXZlbF8yOTA4Nl9jb25maWcubGV2ZWxEYXRhW3RoaXMubGV2ZWxJRF0pKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLm1vdmVTcGVlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3BlZWQgPSB0aGlzLmxldmVsRGF0YUpTT04ubW92ZVNwZWVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLmFkZFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZFNwZWVkID0gdGhpcy5sZXZlbERhdGFKU09OLmFkZFNwZWVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLml0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbUNvbmZpZyA9IHRoaXMubGV2ZWxEYXRhSlNPTi5pdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZEluZGV4TGlzdCA9ICRsZXZlbF8yOTA4Nl9jb25maWcuTWFwUGFyYW1bdGhpcy5tYXBUeXBlXS5zcGVlZEluZGV4TGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoLTI5MDk1ID09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGVlZEluZGV4TGlzdCA9ICRsZXZlbF8yOTA4Nl9jb25maWcuTWFwUGFyYW1bMF0uc3BlZWRJbmRleExpc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2Fubm9uQXR0YWNrTGlzdCA9ICRsZXZlbF8yOTA4Nl9jb25maWcuTWFwUGFyYW1bdGhpcy5tYXBUeXBlXS5jYW5ub25BdHRhY2tMaXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sbGlzaW9uTWFuYWdlcighMCwgITEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyUm9vdCA9IHRoaXMuZGljdC5jYXJSb290O1xuICAgICAgICAgICAgICAgIHRoaXMuY2Fubm9uUm9vdCA9IHRoaXMuZGljdC5jYW5ub25Sb290O1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uUm9vdCA9IHRoaXMuZGljdC5kcmFnb25Sb290O1xuICAgICAgICAgICAgICAgIHRoaXMud2Fybk5vZGUgPSB0aGlzLmRpY3Qud2Fybk5vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlTm9kZSA9IHRoaXMuZGljdC5yb2xlTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LmJ0bnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmJ0bnMuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oaXRTcGluZS5zY2FsZSA9IDAuNDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLmxlbmd0aCA9IDI1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLmhlYWRXaWR0aCA9IDM1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLnRhaWxXaWR0aCA9IDIwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLmhlYWRPcGFjaXR5ID0gMjMwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLnRhaWxPcGFjaXR5ID0gNDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QuaGFuZCAmJiB0aGlzLmRpY3QuaGFuZC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGVzLnB1c2godGhpcy5kaWN0LmNhclJvb3QuY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaCh0aGlzLmRpY3QuY2FyUm9vdC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKHRoaXMuZGljdC5jYXJSb290LmNoaWxkcmVuWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGVzLnB1c2godGhpcy5kaWN0LmNhclJvb3QuY2hpbGRyZW5bMl0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHdWlkZU5vZGUgPSB0aGlzLmd1aWRlTm9kZXNbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZFBvcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVOb2RlLl9tb3ZlSW5kZXggPSAkbGV2ZWxfMjkwODZfY29uZmlnLk1hcFBhcmFtW3RoaXMubWFwVHlwZV0ucm9sZVBvaW50WzBdO1xuICAgICAgICAgICAgICAgIGlmICgtMjkwOTUgPT0gdGhpcy5sZXZlbElEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZU5vZGUuX21vdmVJbmRleCA9ICRsZXZlbF8yOTA4Nl9jb25maWcuTWFwUGFyYW1bMF0ucm9sZVBvaW50WzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGFuZFBvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBjYy52MigtMjAsIC0yMCk7XG4gICAgICAgIGlmIChcIjAxMi0xXCIgPT0gdGhpcy5jdXJyZW50R3VpZGVOb2RlLm5hbWUpIHtcbiAgICAgICAgICAgIHQgPSBjYy52MigwLCAtMjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFwiMDIzXCIgPT0gdGhpcy5jdXJyZW50R3VpZGVOb2RlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0ID0gY2MudjIoMCwgLTgwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXCIwMzFcIiA9PSB0aGlzLmN1cnJlbnRHdWlkZU5vZGUubmFtZSAmJiAodCA9IGNjLnYyKC0xNSwgLTIwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGUgPSB0aGlzLmN1cnJlbnRHdWlkZU5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHQpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ3VpZGVOb2Rlcy5pbmRleE9mKHRoaXMuY3VycmVudEd1aWRlTm9kZSk7XG4gICAgICAgIHRoaXMuZGljdC5oYW5kVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZ3VpZGVUZXh0W29dO1xuICAgICAgICB2YXIgaSA9IHRoaXMuZGljdC5oYW5kLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKTtcbiAgICAgICAgdGhpcy5kaWN0LmhhbmQucG9zaXRpb24gPSBpO1xuICAgICAgICB0aGlzLmRpY3QuaGFuZC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZGljdC5zeilcbiAgICAgICAgICAgIC50bygwLjYsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjYsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMS4xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hhY2tBY3Rpb24gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IGNjLm1vdmVCeSh0LCBlLCBlKTtcbiAgICAgICAgdmFyIGkgPSBjYy5tb3ZlQnkodCwgLWUsIC1lKTtcbiAgICAgICAgdmFyIHIgPSBjYy5tb3ZlQnkoMC44ICogdCwgMC44ICogZSwgMC44ICogZSk7XG4gICAgICAgIHZhciBuID0gY2MubW92ZUJ5KDAuOCAqIHQsIDAuOCAqIC1lLCAwLjggKiAtZSk7XG4gICAgICAgIHZhciBhID0gY2MubW92ZUJ5KDAuNiAqIHQsIDAuNiAqIGUsIDAuNiAqIGUpO1xuICAgICAgICB2YXIgcyA9IGNjLm1vdmVCeSgwLjYgKiB0LCAwLjYgKiAtZSwgMC42ICogLWUpO1xuICAgICAgICB2YXIgYyA9IGNjLm1vdmVCeSgwLjQgKiB0LCAwLjQgKiBlLCAwLjQgKiBlKTtcbiAgICAgICAgdmFyIGwgPSBjYy5tb3ZlQnkoMC40ICogdCwgMC40ICogLWUsIDAuNCAqIC1lKTtcbiAgICAgICAgdmFyIGggPSBjYy5tb3ZlQnkoMC4yICogdCwgMC4yICogZSwgMC4yICogZSk7XG4gICAgICAgIHZhciBwID0gY2MubW92ZUJ5KDAuMiAqIHQsIDAuMiAqIC1lLCAwLjIgKiAtZSk7XG4gICAgICAgIHJldHVybiBjYy5zZXF1ZW5jZShvLCBpLCByLCBuLCBhLCBzLCBjLCBsLCBoLCBwKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYW5nZUNhciA9IGZ1bmN0aW9uICh0LCBlLCBvLCBpKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcbiAgICAgICAgICAgIG8gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICB2YXIgbSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzUmVhZHlEZXN0cm95ID0gITA7XG4gICAgICAgICAgICAgICAgciA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNvbG9ySW1nTmFtZTtcbiAgICAgICAgICAgICAgICBuID0gdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAoYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoaSkpKS5wYXJraW5nID0gdC5wYXJraW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMDJcIiArIG4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPSB0LmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICkuY2FyU3RhdGU7XG4gICAgICAgICAgICAgICAgYS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhclJvb3QuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkubWdyID0gdGhpcztcbiAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jb2xvckltZ05hbWUgPSByO1xuICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgPSBuO1xuICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmRpckltZ05hbWUgPSBlO1xuICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gdC5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICApLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgIGlmICg0ID09IGUgfHwgNSA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBjYy52Mih0LngsIHQueSk7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCB0LmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGwpO1xuICAgICAgICAgICAgICAgICAgICBhLnBvc2l0aW9uID0gY2MudjIoYy54LCBjLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBjYy52Mih0LngsIHQueSArIHQuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLk9uQm90dG9tTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wb3NpdGlvbiA9IGNjLnYyKHQueCAtIHQud2lkdGggLyAyLCB0LnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuT25Cb3R0b21SaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnBvc2l0aW9uID0gY2MudjIodC54ICsgdC53aWR0aCAvIDIsIHQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSA9PSBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgobCA9IHRoaXMuZGljdC5yb2FkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5kaWN0LnJvYWQucG9zaXRpb24pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMgPSBhLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhLnBvc2l0aW9uID0gY2MudjIodC54ICsgdC53aWR0aCAvIDIsIGMueSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoKGwgPSB0aGlzLmRpY3Qucm9hZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuZGljdC5yb2FkLnBvc2l0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYS5wb3NpdGlvbiA9IGNjLnYyKHQueCAtIHQud2lkdGggLyAyLCBjLnkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1BhcmtpbmdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGEucGFya2luZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICBjID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaCk7XG4gICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBjYy52MihjLngsIGMueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAgPVxuICAgICAgICAgICAgICAgICAgICBcImYyOTA4Nl9cIiArXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA4Nl9jb25maWcuZ2V0Q2FySW1nQnlDb2xvcihhLCB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcik7XG4gICAgICAgICAgICAgICAgZyA9XG4gICAgICAgICAgICAgICAgICAgIFwiZjI5MDg2X1wiICtcbiAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDg2X2NvbmZpZy5nZXRDYXJCb2R5SW1nQnlDb2xvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodC5nZXRDaGlsZEJ5TmFtZShcInRhaWxHYXNTcGluZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5wb29sTWdyLnB1dCh0LmdldENoaWxkQnlOYW1lKFwidGFpbEdhc1NwaW5lXCIpLCBcInRhaWxHYXNTcGluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodC5nZXRDaGlsZEJ5TmFtZShcInRhaWxHYXNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWlsR2FzXCIpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm5leHRDYXI7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHYpIHt9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmlzVHJhbnNwb3J0Qm94KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmRpY3QudHJhbnNwb3J0TGF5ZXIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl90cmFuc3BvcnQuZGVmYXVsdCkucmVkdWNlQ2FyQW1vdW50KHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbS5ib3gyU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUocCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uYm94MlNwcml0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKGcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gYS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMjI1MCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuSW5Sb2FkUmlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JblJvYWRMZWZ0XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gYS5wYXJraW5nLmdldENoaWxkQnlOYW1lKFwiZmlyZUNhclBvc1wiKS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGEucGFya2luZy5jdXJyZW50UGFya2luZ1dQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBhLnBhcmtpbmcuY3VycmVudFBhcmtpbmdOUG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBNYXRoLmFicyhzLnggLSBuLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5hZGRUYWlsR2FzU3BpbmUoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byhsIC8gYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuc3BlZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogci54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuR29pbmdQYXJraW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzUmljaENhclwiLCBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1JpY2hDYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjExNlwiICsgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1RyYW1jYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMzZcIiArIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwNlwiICsgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuR29pbmdQYXJraW5nXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLnBhcmtpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCBhLnBhcmtpbmcuaGVpZ2h0IC8gMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLlBhcmtpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmJveDJTcHJpdGVBdGxhcy5nZXRTcHJpdGVGcmFtZShwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5ib3gyU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBoLnN1YihhLnBvc2l0aW9uKS5tYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8obCAvIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnNwZWVkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnVwZGF0ZUNhcldlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wYXJraW5nLmNhciA9IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnNlYXRUb3RhbEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJzZFwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IE51bWJlcihhLm5hbWVbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJib2R5XCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJzZFwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwiYm94U3BpbmVcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwiYm94U3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS50aW1lU2NhbGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcImJveFNwaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0U2tpbihcInNraW5cIiArIChvICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcImJveFNwaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwib3BlblwiICsgKDMgLSBlICsgMSksICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJib3hTcGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLk91dFBhcmtpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gbS5nZXRDYW5ub24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uX2l0ZW00U3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uc2hvd0l0ZW00U3BpbmUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uX2l0ZW01U3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uc2hvd0l0ZW01U3BpbmUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5kaWN0LmNhbm5vblJvb3QuYWRkQ2hpbGQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucG9zaXRpb24gPSBlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucGFya2luZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJib2R5XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uYm94MlNwcml0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKFwiZjI5MDg2X1wiICsgKG8gKyAxICsgMmUzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJidWxsZXRcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5ib3gyU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJmMjkwODZfXCIgKyAobyArIDEgKyAyMjAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcInhcIiArIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGFya2luZyA9IGEucGFya2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVttLl9jYW5ub25UeXBlXSA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbbS5fY2Fubm9uTnVtXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbbS5fY2Fubm9uU3RhdGVdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcImNhbm5vblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRTa2luKFwic2tpblwiICsgKG8gKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJjYW5ub25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwiZW50ZXJcIiwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbbS5fY2Fubm9uU3RhdGVdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5wdXRUYWlsR2FzKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLkdvaW5nUm9hZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBtLmRpY3Qucm9hZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG0uZGljdC5yb2FkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gYS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGEucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IE1hdGguYWJzKGYueSAtIG4ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmFkZFRhaWxHYXNTcGluZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KGwgLyBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uY29sbGlzaW9uKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmFkZFRhaWxHYXNTcGluZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDIyNTAgLyBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHQsIGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLndhcm4odCksIG8odCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUobmV3IGNjLlNwcml0ZUZyYW1lKGkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucHV0VGFpbEdhcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0LmdldENoaWxkQnlOYW1lKFwidGFpbEdhc1wiKSkge1xuICAgICAgICAgICAgdGhpcy5wb29sTWdyLnB1dCh0LmdldENoaWxkQnlOYW1lKFwidGFpbEdhc1wiKSwgXCJ0YWlsR2FzXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5oaXRTcGluZSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB0LmFkZENoaWxkKGUpO1xuICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNvbGxpc2lvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzUmVhZHlEZXN0cm95ID0gITA7XG4gICAgICAgIGlmICghdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNGaXJlRW5naW5lKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHQ7XG4gICAgICAgICAgICB2YXIgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMucGFya2luZ05vZGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChyLmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgci5pc0VtcHR5ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGUucGFya2luZyA9IHI7XG4gICAgICAgICAgICAgICAgICAgIG8gPSByO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBhID0gby5jdXJyZW50UGFya2luZ1dQb3M7XG4gICAgICAgICAgICAgICAgaWYgKG4ueCA+PSBhLngpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLkluUm9hZExlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1JpY2hDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lID0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTExXCIgKyBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lICsgXCItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMDFcIiArIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgKyBcIi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuSW5Sb2FkUmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1JpY2hDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lID0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTExXCIgKyBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lICsgXCItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMDFcIiArIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgKyBcIi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNhdmVQYXJraW5nV1BvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgZS5jdXJyZW50UGFya2luZ1dQb3MgPSBlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAtMTY4LjU0OSkpO1xuICAgICAgICAgICAgZS5jdXJyZW50UGFya2luZ05Qb3MgPSB0aGlzLmRpY3QuY2FyUm9vdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlLmN1cnJlbnRQYXJraW5nV1Bvcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vnrpflpb3mr4/kuKrovabkvY3nmoTlgZzovabngrnnmoTkuJbnlYzlnZDmoIdcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5zYXZlUGFya2luZ1dQb3MoKTtcbiAgICAgICAgdGhpcy5kaWN0LmNhclJvb3QuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUuY2hpbGRyZW5Db3VudCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmICg3MSA9PSBlLmNoaWxkcmVuWzBdLndpZHRoICYmIDg4ID09IGUuY2hpbGRyZW5bMF0uaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIG8gPSBcImYyOTA3Nl8xLXNcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoNzAgPT0gZS5jaGlsZHJlblswXS53aWR0aCAmJiAxMTcgPT0gZS5jaGlsZHJlblswXS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcImYyOTA3Nl80LXNcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxMDAgPT0gZS5jaGlsZHJlblswXS53aWR0aCAmJiA4NyA9PSBlLmNoaWxkcmVuWzBdLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcImYyOTA3Nl82LXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDcwID09IGUuY2hpbGRyZW5bMF0ud2lkdGggJiYgMTQ3ID09IGUuY2hpbGRyZW5bMF0uaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcImYyOTA3Nl83LXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMzAgPT0gZS5jaGlsZHJlblswXS53aWR0aCAmJiA4OCA9PSBlLmNoaWxkcmVuWzBdLmhlaWdodCAmJiAobyA9IFwiZjI5MDc2Xzktc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHQuYm94MlNwcml0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaWN0LmNhclByZWZhYi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5jaGlsZHJlbkNvdW50ID49IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKDcxID09IGUuY2hpbGRyZW5bMF0ud2lkdGggJiYgODggPT0gZS5jaGlsZHJlblswXS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IFwiZjI5MDc2XzEtc1wiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICg3MCA9PSBlLmNoaWxkcmVuWzBdLndpZHRoICYmIDExNyA9PSBlLmNoaWxkcmVuWzBdLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwiZjI5MDc2XzQtc1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEwMCA9PSBlLmNoaWxkcmVuWzBdLndpZHRoICYmIDg3ID09IGUuY2hpbGRyZW5bMF0uaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwiZjI5MDc2XzYtc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNzAgPT0gZS5jaGlsZHJlblswXS53aWR0aCAmJiAxNDcgPT0gZS5jaGlsZHJlblswXS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwiZjI5MDc2Xzctc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzMCA9PSBlLmNoaWxkcmVuWzBdLndpZHRoICYmIDg4ID09IGUuY2hpbGRyZW5bMF0uaGVpZ2h0ICYmIChvID0gXCJmMjkwNzZfOS1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdC5ib3gyU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAod2luZG93LmYyOTA4Nl9MZXZlbERhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb2xlTGV2ZWwgIT0gd2luZG93LmYyOTA4Nl9MZXZlbERhdGEuaGVyb0xldmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm9sZUxldmVsID0gd2luZG93LmYyOTA4Nl9MZXZlbERhdGEuaGVyb0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVTa2luICE9IHdpbmRvdy5mMjkwODZfTGV2ZWxEYXRhLnVzZVNraW5bMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb2xlU2tpbiA9IHdpbmRvdy5mMjkwODZfTGV2ZWxEYXRhLnVzZVNraW5bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ29uU2tpbiAhPSB3aW5kb3cuZjI5MDg2X0xldmVsRGF0YS51c2VTa2luWzFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ29uU2tpbiA9IHdpbmRvdy5mMjkwODZfTGV2ZWxEYXRhLnVzZVNraW5bMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JvbGVMZXZlbCA+PSA3KSB7XG4gICAgICAgICAgICB0aGlzLl9yb2xlSHAgKz0gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yb2xlTGV2ZWwgPj0gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvbGVIcCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yb2xlTGV2ZWwgPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5fcm9sZUxldmVsMlRpbWUgKz0gMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb2xlQ3VySHAgPSB0aGlzLl9yb2xlSHA7XG4gICAgICAgIHRoaXMudXBkYXRlUm9sZUhwKCk7XG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICB2YXIgdjtcbiAgICAgICAgICAgIHZhciBfO1xuICAgICAgICAgICAgdmFyIFM7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIHZhciBBO1xuICAgICAgICAgICAgdmFyIE47XG4gICAgICAgICAgICB2YXIgUDtcbiAgICAgICAgICAgIHZhciB4O1xuICAgICAgICAgICAgdmFyIGI7XG4gICAgICAgICAgICB2YXIgUjtcbiAgICAgICAgICAgIHZhciBUO1xuICAgICAgICAgICAgdmFyIEI7XG4gICAgICAgICAgICB2YXIgVyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QuZ3VpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVy5kaWN0Lmd1aWRlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICB9LCA2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhSlNPTi50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRyYW5zcG9ydExheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl90cmFuc3BvcnQuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0KHRoaXMsIHRoaXMubGV2ZWxEYXRhSlNPTi50cmFuc3BvcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKF8gPSAwOyBfIDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuQ291bnQ7IF8rKykge1xuICAgICAgICAgICAgICAgICAgICAhKHQgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bX10pLmFjdGl2ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImZpcmVTcGluZVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0LmlzRW1wdHkgPSAhMCksIHRoaXMucGFya2luZ05vZGVzLnB1c2godCkpO1xuICAgICAgICAgICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHQuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkub3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSyksXG4gICAgICAgICAgICAgICAgICAgICAgICAodC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikud2lkdGggPSA4MCksXG4gICAgICAgICAgICAgICAgICAgICAgICAodC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuc2NhbGUgPSAwLjg1KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKF8gPSAwOyBfIDwgdGhpcy5jYXJSb290LmNoaWxkcmVuQ291bnQ7IF8rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbltfXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoTiA9IDA7IE4gPCBlLmxlbmd0aDsgTisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGVbTl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby54ID09IGdbMF0gJiYgby55ID09IGdbMV0gJiYgY29uc29sZS5lcnJvcihcIuWQjOS4gOS4quS9jee9ruWkjeWItuWkmui+hui9plwiLCBvLm5hbWUsIF8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKFtvLngsIG8ueV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsRGF0YUpTT04uY2FycGFyaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUGFya1Jvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2NhclBhcmsuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbml0KHRoaXMsIHRoaXMubGV2ZWxEYXRhSlNPTi5jYXJwYXJrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuZ2V0TG9jYWwoXCJibGFja0NhclwiKSB8fCBbXTtcbiAgICAgICAgICAgICAgICByID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgICAgICAgICAgZm9yIChfID0gMDsgXyA8IHIubGVuZ3RoOyBfKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IHJbX107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyTm9kZUFyci5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICBuLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5tZ3IgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBuLmluZGV4SUQgPSBcIlwiICsgXztcbiAgICAgICAgICAgICAgICAgICAgYSA9IHRoaXMuZ2V0UGF0aChuKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbERhdGFKU09OLmJsYWNrQW1vdW50ICYmICFpLmxlbmd0aCAmJiBhID49IDIgJiYgYSA8PSA0ICYmIHRoaXMuYmV0d2VlbjJfNENhckFyci5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICBuLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5wYXRoID0gYTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RlYnVnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKChjID0gbmV3IGNjLk5vZGUoKSkubmFtZSA9IFwicGF0aFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChjLmFkZENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGMuY29sb3IgPSBjYy5Db2xvci5XSElURSksXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmFkZENoaWxkKGMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGMucG9zaXRpb24gPSBjYy52MigtMTMuMTA1LCAtMjYuMjEpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVyc29uQW1vdW50ICs9IG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnNlYXRUb3RhbEFtb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmgLvkuIrovabkurrmlbBcIiwgdGhpcy5hbGxQZXJzb25BbW91bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVyc29uQW1vdW50MiA9IHRoaXMuYWxsUGVyc29uQW1vdW50O1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImFsbFBlcnNvbkFtb3VudFwiLCB0aGlzLmFsbFBlcnNvbkFtb3VudCwgdGhpcy5hbGxQZXJzb25BbW91bnQyKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBUeXBlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mMjkwODZfZHJhZ29uQmFsbCA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmYyOTA4Nl9kcmFnb25CYWxsID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmYyOTA4Nl9jb2luID0gdGhpcy5hbGxQZXJzb25BbW91bnQyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FySUQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLmJsYWNrQW1vdW50ICYmICFpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLmJsYWNrQW1vdW50ID49IHRoaXMuYmV0d2VlbjJfNENhckFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoTiA9IDA7IE4gPCB0aGlzLmJldHdlZW4yXzRDYXJBcnIubGVuZ3RoOyBOKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZyA9IHRoaXMuYmV0d2VlbjJfNENhckFycltOXSkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzQmxhY2tDYXIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2goZy5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHRoaXMuZ2V0UmFuZG9tRGlzdGluY3RFbGVtZW50cyh0aGlzLmJldHdlZW4yXzRDYXJBcnIsIHRoaXMubGV2ZWxEYXRhSlNPTi5ibGFja0Ftb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKE4gPSAwOyBOIDwgbC5sZW5ndGg7IE4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnID0gbFtOXSkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzQmxhY2tDYXIgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2goZy5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TG9jYWwoXCJibGFja0NhclwiLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaCA9IHRoaXMuZ2V0TG9jYWwoXCJjb2xvckNvbmZpZ1wiKSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAoLTI5MDk1ID09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgICAgICAgICBoID0gWzQsIDEsIDMsIDBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydENvbG9yX25ldyA9IHRoaXMuc2h1ZmZsZUFycmF5KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJGxldmVsXzI5MDg2X2NvbmZpZy5zb3J0Q29sb3IpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgwID09IGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSB0aGlzLmxldmVsRGF0YUpTT04uY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoTiA9IDA7IE4gPCBwLmxlbmd0aDsgTisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnID0gcFtOXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tQ29sb3JBcnIucHVzaCh0aGlzLmdldEFyckJ5TGVuKFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XSwgZ1syXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5kb21Db2xvck51bVtOXSB8fCAodGhpcy5yYW5kb21Db2xvck51bVtOXSA9IDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoXyA9IDA7IF8gPCB0aGlzLmNhck5vZGVBcnIubGVuZ3RoOyBfKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLmNhck5vZGVBcnJbX107XG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gdGhpcy5nZXRDYXJDb2xvcihfLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucHVzaChrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyQ29sb3JJbWcodiwgayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoQSA9IHRoaXMubGV2ZWxEYXRhSlNPTi5jYXJXZWlnaHRbdi5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkucGF0aCAtIDFdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBID0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcldlaWdodFtrXSArPSBBICogdi5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TG9jYWwoXCJjb2xvckNvbmZpZ1wiLCBoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKF8gPSAwOyBfIDwgdGhpcy5jYXJOb2RlQXJyLmxlbmd0aDsgXysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTID0gdGhpcy5jYXJOb2RlQXJyW19dO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IGhbX107XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmluY2x1ZGVzKFMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhcklEKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc0JsYWNrQ2FyID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJDb2xvckltZyhTLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChBID0gdGhpcy5sZXZlbERhdGFKU09OLmNhcldlaWdodFtTLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5wYXRoIC0gMV0pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEEgPSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyV2VpZ2h0W2tdICs9IEEgKiBTLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLovabovobmnYPph41cIiwgdGhpcy5jYXJXZWlnaHQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6aKc6ImyXCIsICRsZXZlbF8yOTA4Nl9jb25maWcuY29sb3JEZXMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Lq65pWwXCIsIHRoaXMuY29sb3JQZXJzb25BcnIpO1xuICAgICAgICAgICAgICAgIGZvciAoTiA9IDA7IE4gPCAkbGV2ZWxfMjkwODZfY29uZmlnLmNvbG9yRGVzLmxlbmd0aDsgTisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QW1vdW50QnlDb2xvcihOKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyXCIsIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4XCIsIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKC0yOTA5NSA9PSB0aGlzLmxldmVsSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyciA9IFtbMywgM10sIFs0LCA2XSwgW10sIFszLCAxXSwgWzMsIDMsIDRdLCBbXSwgW10sIFtdXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFNvcnRJbmRleEFyciA9IFsxLCA0LCAwLCAzLCA0LCAzLCAwLCAxLCA0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKFAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QubG9uZ3RvdSkpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfZHJhZ29uSXRlbS5kZWZhdWx0KS5kcmFnb25Db2xvciA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb25Sb290LmFkZENoaWxkKFAsIDk5OSk7XG4gICAgICAgICAgICAgICAgUC5sb25ndG91ID0gITA7XG4gICAgICAgICAgICAgICAgUC5wb3NpdGlvbiA9IGNjLnYzKHRoaXMuX21hcENvbmZpZ1swXVswXSwgdGhpcy5fbWFwQ29uZmlnWzBdWzFdKTtcbiAgICAgICAgICAgICAgICBQLl9tb3ZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIFBbdGhpcy5fbUJvZHlNb3ZlRGlzXSA9IDA7XG4gICAgICAgICAgICAgICAgUFt0aGlzLl9tQm9keU1vdmVCYWNrRGlzXSA9IDA7XG4gICAgICAgICAgICAgICAgUFt0aGlzLl9tQm9keUV2ZW5dID0gITA7XG4gICAgICAgICAgICAgICAgUC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURyYWdvblNraW4oUCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBQLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQm9keVBvcyhQKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaHBQcmVmYWIucGFyZW50ID0gUDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaHBQcmVmYWIucG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5ocFByZWZhYi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihQKVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoJGxldmVsVXRpbHMuZGVmYXVsdC5nZXRSYW5kb21JbnQoMywgOCkpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChXLmlzV2luIHx8IFcuaXNSZXZpdmVCYWNrIHx8IFcuX2l0ZW0xU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hZGRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmFkZEFuaW1hdGlvbigwLCBcImlkbGUxXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEuNSlcbiAgICAgICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJMYXN0Qm94SXRlbU5vZGUgPSBQO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvblBvc1Jvb3QyKSB7XG4gICAgICAgICAgICAgICAgICAgICh4ID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0Lmxvbmd0b3UpKS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwODZfZHJhZ29uSXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICkuZHJhZ29uQ29sb3IgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdvblJvb3QuYWRkQ2hpbGQoeCwgOTk5KTtcbiAgICAgICAgICAgICAgICAgICAgeC5sb25ndG91ID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHgucG9zaXRpb24gPSBjYy52Myh0aGlzLl9tYXBDb25maWdbMF1bMF0sIHRoaXMuX21hcENvbmZpZ1swXVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIHguX21vdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHhbdGhpcy5fbUJvZHlNb3ZlRGlzXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHhbdGhpcy5fbUJvZHlNb3ZlQmFja0Rpc10gPSAwO1xuICAgICAgICAgICAgICAgICAgICB4W3RoaXMuX21Cb2R5RXZlbl0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgeC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEcmFnb25Ta2luKHgsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHguYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJvZHlQb3MoeCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoJGxldmVsVXRpbHMuZGVmYXVsdC5nZXRSYW5kb21JbnQoMywgOCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFcuaXNXaW4gfHwgVy5pc1Jldml2ZUJhY2sgfHwgVy5faXRlbTFTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hZGRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hZGRBbmltYXRpb24oMCwgXCJpZGxlMVwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgxLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudW5pb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckxhc3RCb3hJdGVtTm9kZTIgPSB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBlcnNvbighMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBXLmNyZWF0ZUZpbmlzaCA9ICEwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzLnVuc2hpZnQoUCk7XG4gICAgICAgICAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMyLnVuc2hpZnQoeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgPSB0aGlzLl9tYXBDb25maWdbdGhpcy5yb2xlTm9kZS5fbW92ZUluZGV4XTtcbiAgICAgICAgICAgICAgICBSID0gY2MudjIoYlswXSwgYlsxXSk7XG4gICAgICAgICAgICAgICAgUiA9IHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihSKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVOb2RlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUm9sZVNraW4odGhpcy5yb2xlTm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBXLnJvbGVOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZU5vZGUucG9zaXRpb24gPSB0aGlzLnJvbGVOb2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihSKS5hZGQoY2MudjIoMCwgLTIwKSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSb2xlSHAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJvbGVIcFBvcygpO1xuICAgICAgICAgICAgICAgIChUID0gdGhpcy5kaWN0LnJvbGVUZXh0KS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICBULnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3Qucm9sZUhwTm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihUKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAtMTBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAxMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5nbGU6IC0xMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5nbGU6IDEwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjA1LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmdsZTogMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAtMTBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ2xlOiAxMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5nbGU6IC0xMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4wNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5nbGU6IDEwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjA1LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmdsZTogMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC44KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBXLmRpY3Qucm9sZUhwTm9kZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlTm9kZS5fdGFyZ2V0UG9zID0gdGhpcy5yb2xlTm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBCID0gY2MudjIodGhpcy5fbWFwQ29uZmlnWzBdWzBdLCB0aGlzLl9tYXBDb25maWdbMF1bMV0pO1xuICAgICAgICAgICAgICAgIEIgPSB0aGlzLmRpY3QucGVyc29uUG9zUm9vdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoQik7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0W1wiZjI5MDg2LjQ4XCJdLnBvc2l0aW9uID0gdGhpcy5kaWN0W1wiZjI5MDg2LjQ4XCJdLnBhcmVudFxuICAgICAgICAgICAgICAgICAgICAuY29udmVydFRvTm9kZVNwYWNlQVIoQilcbiAgICAgICAgICAgICAgICAgICAgLmFkZChjYy52MigwLCAwKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0W1wiZjI5MDg2LmNzbVwiXS5wb3NpdGlvbiA9IHRoaXMuZGljdFtcImYyOTA4Ni5jc21cIl0ucGFyZW50XG4gICAgICAgICAgICAgICAgICAgIC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihCKVxuICAgICAgICAgICAgICAgICAgICAuYWRkKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RbXCJmMjkwODYuNDhcIl0uc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdFtcImYyOTA4Ni5jc21cIl0uc2NhbGUgPSAwLjg7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25Ub3VjaCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5TdGFydENsaWNrID0gITA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrSGFzQ2FyTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAhMTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmNhclJvb3QuY2hpbGRyZW4uY29uY2F0KHRoaXMudHVybnRhYmxlQ2FyQXJyKTtcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGVbb107XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlICYmXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWwgJiZcbiAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLlBhcmtpbmdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHQgPSAhMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrSGFzQ2FyTW92ZUFtb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICB2YXIgZSA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gZVtvXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpICYmXG4gICAgICAgICAgICAgICAgY2MuaXNWYWxpZChpLCAhMCkgJiZcbiAgICAgICAgICAgICAgICBpLmFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlICE9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuSWRsZSAmJlxuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlICE9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuT3V0UGFya2luZ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25Ub3VjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICBpZiAoZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSkge1xuICAgICAgICAgICAgICAgIGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydF9wYXJraW5nLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuX3VubG9ja05ld1BvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgaWYgKGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9ja1BhcmtpbmdUYXJnZXQgPSBlO1xuICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbXB0eVwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICBlLmlzRW1wdHkgPSAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmtpbmdOb2Rlcy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMucGxheVVubG9ja1NwaW5lKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50b3VjaFN0YXJ0X3BhcmtpbmcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1dpbiAmJiAhdGhpcy5fcmVtb3ZlU3RhZ2UpIHtcbiAgICAgICAgICAgIHZhciBvID0gdC50YXJnZXQ7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSB0ICYmIG8uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJlbXB0eVwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgby5pc0VtcHR5ID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGUucGFya2luZ05vZGVzLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGUucGxheVVubG9ja1NwaW5lKG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5VW5sb2NrU3BpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5qaWVzdW8pO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZSk7XG4gICAgICAgIHZhciBvID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICB2YXIgaSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICAgICAgZS5wb3NpdGlvbiA9IGk7XG4gICAgICAgIGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSAhMTtcbiAgICAgICAgZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgIHZhciByID0gdC5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1RpcHNcIik7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICByLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHIuYWN0aXZlID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwidW5sb2NrVmlkZW9Mb2NrXCIsIHRoaXMuZnVuY19oYXNMb2NrUGFya2luZygpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfdW5sb2NrUGFya2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wbGF5VW5sb2NrU3BpbmUodGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0KTtcbiAgICAgICAgdGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZW1wdHlcIikuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMudW5sb2NrUGFya2luZ1RhcmdldC5pc0VtcHR5ID0gITA7XG4gICAgICAgIHRoaXMucGFya2luZ05vZGVzLnB1c2godGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRvdWNoU3RhcnQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodGhpcy5pc0NhblN0YXJ0Q2xpY2spIHtcbiAgICAgICAgICAgIHQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGUgPSB0LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJwYXJrSW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwi6ZmQ5Yi26L2m5bqT6L2m54K55Ye7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmNhclJvb3QuY2hpbGRyZW4uY29uY2F0KHRoaXMudHVybnRhYmxlQ2FyQXJyKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gb1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHIuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XG4gICAgICAgICAgICAgICAgaWYgKHIuYWN0aXZlICYmIGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihlLCB0aGlzLmdldFdQb3NCeVBvbHlnb24obikpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvdWNoQmVnaW4gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU3RhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9yZW1vdmVDbGljayAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhci5vYmxpcXVlSGVhZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlKHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5paw5aKe6ZmQ5Yi25b+r6YCf54K55Ye7XCIsIHRoaXMubW92ZUNhckFtb3VudCwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZUNhckFtb3VudCA+PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZmQ5Yi25b+r6YCf54K55Ye7XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdyhcIumcgOimgeino+mUgeabtOWkmueCruWPsOS9jee9rlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm5leHRDYXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkucHJldkNhcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhIHx8IHMpICYmIHRoaXMubW92ZUNhckFtb3VudCA+PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumZkOWItuW/q+mAn+eCueWHuzJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KFwi6ZyA6KaB5Lik5Liq5YGc6L2m5L2NXCIsIDAuOCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKDI1NSAhPSByLm9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRDaGlsZEJ5TmFtZShcImxvY2tcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHIucnVuQWN0aW9uKHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmlzU2NhbGVBbmltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3J0QW5pbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmlzQ2FyUGFyayAmJiAhci5pc1dlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwi6ZmQ5Yi26L2m5bqT6L2mLOayoeWBnOeos1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzQ2FuQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIub2JsaXF1ZUhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHIucnVuQWN0aW9uKHRoaXMuc2hhY2tBY3Rpb24oMC4xLCAyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmhhbmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oYW5kLmFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3VpZGVkTm9kZXMucHVzaChyKSwgdGhpcy5jdXJyZW50R3VpZGVOb2RlID09IHIpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgdGhpcy5ndWlkZU5vZGVzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLmd1aWRlTm9kZXNbbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09IHRoaXMuZ3VpZGVkTm9kZXMuaW5kZXhPZihoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHdWlkZU5vZGUgPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRQb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oYW5kLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oYW5kVGV4dC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGFuZFRleHQucGFyZW50LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobCA9IDA7IGwgPCB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFya2luZ05vZGVzW2xdLmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciei9puS9jemDveiiq+WNoOeUqOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3coXCLnm67liY3ovabkvY3lt7Lmu6FcIiwgMC44LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYSB8fCBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGwgPSAwOyBsIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJraW5nTm9kZXNbbF0uaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGcgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5ouJ6ZO+6L2mLeaJgOaciei9puS9jemDveiiq+WNoOeUqOS6hlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KFwi6ZyA6KaB5Lik5Liq5YGc6L2m5L2NXCIsIDAuOCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tIYXNDYXJNb3ZlQW1vdW50KCkgPj0gdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacieebuOetieS6jui9puS9jeaAu+mHj+eahOi9puWcqOi/kOWKqO+8jOaXoOazleWHuui9plwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3coXCLpnIDopoHop6PplIHmm7TlpJrngq7lj7DkvY3nva5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnIlcIiArIHRoaXMuY2hlY2tIYXNDYXJNb3ZlQW1vdW50KCkgKyBcIui+hui9puWcqOWKqO+8gVwiLCB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGEgfHwgcykgJiYgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoIC0gdGhpcy5jaGVja0hhc0Nhck1vdmVBbW91bnQoKSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaLiemTvui9puS4jeiDveWHuui9plwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3coXCLpnIDopoHop6PplIHmm7TlpJrngq7lj7DkvY3nva5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgci5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5pc1RyYW5zcG9ydEJveCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRyYW5zcG9ydExheWVyLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfdHJhbnNwb3J0LmRlZmF1bHQpLnNldFRyYW5zcG9ydENhck5vTW92ZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDIyNTApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSByLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtKTtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkub3RoZXJDYXJOb2RlID0gdGhpcy5nZXRPdGhlckNhckJ5RGlzdGFuY2Uocik7XG4gICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm9sZFBvcyA9IHIucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5vdGhlckNhck5vZGUgPSB0aGlzLmdldE90aGVyQ2FyQnlEaXN0YW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkub2xkUG9zID0gYS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkub3RoZXJDYXJOb2RlID0gdGhpcy5nZXRPdGhlckNhckJ5RGlzdGFuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm9sZFBvcyA9IHMucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuSWRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLk5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc0ZpcmVFbmdpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXJBbW91bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDIyNTAgLyByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgci5pc1RyYW5zcG9ydEJveCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNVVHJhbnNwb3J0Q2FyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAxICE9IHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYWlsR2FzU3BpbmUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlSZW1vdGVTb3VuZChcImF1ZGlvL2YyNzMxMi9mMjczMTJfRW5naW5lMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrSGFzQ29sbGlzaW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIHZhciBvO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHI7XG4gICAgICAgIHZhciBuO1xuICAgICAgICB2YXIgYTtcbiAgICAgICAgdmFyIHMgPSB0LndpZHRoO1xuICAgICAgICB2YXIgYyA9IHQuaGVpZ2h0O1xuICAgICAgICBlID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLXMgLyAyLCAtYykpO1xuICAgICAgICBvID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLXMgLyAyLCAyMjUwKSk7XG4gICAgICAgIGkgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihzIC8gMiwgLWMpKTtcbiAgICAgICAgciA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHMgLyAyLCAyMjUwKSk7XG4gICAgICAgIG4gPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAtYykpO1xuICAgICAgICBhID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMjI1MCkpO1xuICAgICAgICB2YXIgbCA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGwubGVuZ3RoOyBoKyspIHtcbiAgICAgICAgICAgIHZhciBwID0gbFtoXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwICYmXG4gICAgICAgICAgICAgICAgcCAhPSB0ICYmXG4gICAgICAgICAgICAgICAgcC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDg2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlICYmXG4gICAgICAgICAgICAgICAgcC5hY3RpdmUgJiZcbiAgICAgICAgICAgICAgICAhcC5pc1RyYW5zcG9ydEJveFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICAgICAgdmFyIHY7XG4gICAgICAgICAgICAgICAgdmFyIHk7XG4gICAgICAgICAgICAgICAgdmFyIEM7XG4gICAgICAgICAgICAgICAgdmFyIF8gPSBwLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBTID0gcC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgZyA9IHAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC1fIC8gMiwgLVMpKTtcbiAgICAgICAgICAgICAgICBtID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLV8gLyAyLCAwKSk7XG4gICAgICAgICAgICAgICAgZiA9IHAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKF8gLyAyLCAtUykpO1xuICAgICAgICAgICAgICAgIHYgPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihfIC8gMiwgMCkpO1xuICAgICAgICAgICAgICAgIHkgPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihfIC8gMiArIDEsIDApKTtcbiAgICAgICAgICAgICAgICBDID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLV8gLyAyIC0gMSwgMCkpO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIGcsIG0pIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShlLCBvLCBmLCB2KSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoaSwgciwgZywgbSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGksIHIsIGYsIHYpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShlLCBvLCB5LCBDKSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUobiwgYSwgeSwgQylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRUYWlsR2FzU3BpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC50YWlsR2FzKTtcbiAgICAgICAgICAgICAgICB0LmFkZENoaWxkKGUpO1xuICAgICAgICAgICAgICAgIGUucG9zaXRpb24gPSBjYy52MigwLCAtdC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGlmIChlLmdldENvbXBvbmVudCgkbW90aW9uVHJhaWwuZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0V1Bvc0J5UG9seWdvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdC5wb2ludHM7XG4gICAgICAgIHZhciBvID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSBjYy52MihlW2ldLnggKyB0Lm9mZnNldC54LCBlW2ldLnkgKyB0Lm9mZnNldC55KTtcbiAgICAgICAgICAgIHZhciBuID0gdC5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihyKTtcbiAgICAgICAgICAgIG8ucHVzaChuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFJhbmRvbURpc3RpbmN0RWxlbWVudHMgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGU7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodC5sZW5ndGggLSBpKSk7XG4gICAgICAgICAgICBpZiAoby5pbmNsdWRlcyh0W3JdKSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG8ucHVzaCh0W3JdKTtcbiAgICAgICAgICAgICAgICB0W3JdID0gdFt0Lmxlbmd0aCAtIGkgLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldENhckNvbG9ySW1nID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgciA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpO1xuICAgICAgICByLmNhckNvbG9yID0gZTtcbiAgICAgICAgaWYgKHRoaXMuY29sb3JQZXJzb25BcnJbZV0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQXJyW2VdID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yUGVyc29uQXJyW2VdICs9IHIuc2VhdFRvdGFsQW1vdW50O1xuICAgICAgICByLmNvbG9ySW1nTmFtZSA9IGUgKyAxO1xuICAgICAgICByLmRpckltZ05hbWUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhckRpckltZ1tNYXRoLnJvdW5kKE1hdGguYWJzKHQuYW5nbGUpKV07XG4gICAgICAgIHIubGVuSW1nTmFtZSA9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyTGVuSW1nW3Iuc2VhdFRvdGFsQW1vdW50XTtcbiAgICAgICAgbyA9IFwiZjI5MDg2X1wiICsgJGxldmVsXzI5MDg2X2NvbmZpZy5nZXRDYXJJbWdCeUNvbG9yKHQsIGUpO1xuICAgICAgICBpID0gXCJmMjkwODZfXCIgKyAkbGV2ZWxfMjkwODZfY29uZmlnLmdldENhckJvZHlJbWdCeUNvbG9yKHQsIGUpO1xuICAgICAgICB0LnBhcmVudC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYm94MlNwcml0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKG8pO1xuICAgICAgICBpZiAodC5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIikpIHtcbiAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJib2R5XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ib3gyU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoaSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhSlNPTi5jYXJXZWlnaHRbci5wYXRoXSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxEYXRhSlNPTi5jYXJXZWlnaHRbci5wYXRoXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQuaXNDYXJQYXJrKSB7XG4gICAgICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVDYXJXZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5jYXJXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgIHZhciBlID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIHZhciBvID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciByID0gZVtvXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICByICYmXG4gICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkgJiZcbiAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PSAkbGV2ZWxfMjkwODZfY29uZmlnLkNhclN0YXRlLklkbGUgJiZcbiAgICAgICAgICAgICAgICAhci5pc1RyYW5zcG9ydEJveCAmJlxuICAgICAgICAgICAgICAgICFyLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1VUcmFuc3BvcnRDYXJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHIucGF0aCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpLmdldFBhdGgocik7XG4gICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkucGF0aCA9IG47XG4gICAgICAgICAgICAgICAgaWYgKDEgPT0gbiAmJiByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc0JsYWNrQ2FyICYmICFyLmlzTm9CbGFjaykge1xuICAgICAgICAgICAgICAgICAgICByLmlzU2NhbGVBbmltID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmlzU2NhbGVBbmltID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImRpclwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IFwidGV4dHVyZS9cIiArIHQuZm9sZGVyICsgXCIvXCIgKyB0LmZvbGRlciArIFwiXzNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMTI4ID09IE1hdGgucm91bmQoTWF0aC5hYnMoci5hbmdsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcInRleHR1cmUvXCIgKyB0LmZvbGRlciArIFwiL1wiICsgdC5mb2xkZXIgKyBcIl80XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDkwID09IE1hdGgucm91bmQoTWF0aC5hYnMoci5hbmdsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJ0ZXh0dXJlL1wiICsgdC5mb2xkZXIgKyBcIi9cIiArIHQuZm9sZGVyICsgXCJfMlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSBNYXRoLnJvdW5kKE1hdGguYWJzKHIuYW5nbGUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlID0gXCJ0ZXh0dXJlL1wiICsgdC5mb2xkZXIgKyBcIi9cIiArIHQuZm9sZGVyICsgXCJfMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChlLCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuU3ByaXRlRnJhbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gXCJcIiArIG8uY29sb3JJbWdOYW1lICsgby5kaXJJbWdOYW1lICsgby5sZW5JbWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gXCJ0ZXh0dXJlL1wiICsgdC5mb2xkZXIgKyBcIi9cIiArIHQuZm9sZGVyICsgXCJfXCIgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5pc05vQmxhY2sgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChuLCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuU3ByaXRlRnJhbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkuaXNEZWJ1ZyAmJiByLmdldENoaWxkQnlOYW1lKFwicGF0aFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwicGF0aFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYSA9IGkubGV2ZWxEYXRhSlNPTi5jYXJXZWlnaHRbbiAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkuY2FyV2VpZ2h0W3IuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yXSArPVxuICAgICAgICAgICAgICAgICAgICBhICogci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgZS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgbyhyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY3JlYXRlUGVyc29uID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9ICExO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbyArPSBwID0gdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJDcmVhdGVQZXJzb25BbW91bnQgPSBvO1xuICAgICAgICBpZiAobyA+PSB0aGlzLmFsbFBlcnNvbkFtb3VudDIpIHtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICBpZiAodGhpcy5zb3J0UGVyc29uTm9kZXNbdGhpcy5zb3J0UGVyc29uTm9kZXMubGVuZ3RoIC0gMV0ubG9uZ3dlaSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChyID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0Lmxvbmd3ZWkpKS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2RyYWdvbkl0ZW0uZGVmYXVsdCkuZHJhZ29uQ29sb3IgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uUm9vdC5hZGRDaGlsZChyLCAwKTtcbiAgICAgICAgICAgICAgICByLmxvbmd3ZWkgPSAhMDtcbiAgICAgICAgICAgICAgICByLnBvc2l0aW9uID0gY2MudjModGhpcy5fbWFwQ29uZmlnWzBdWzBdLCB0aGlzLl9tYXBDb25maWdbMF1bMV0pO1xuICAgICAgICAgICAgICAgIHIuX21vdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgclt0aGlzLl9tQm9keU1vdmVEaXNdID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlW3RoaXMuX21Cb2R5TW92ZURpc10gLVxuICAgICAgICAgICAgICAgICAgICAodGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlLmxvbmd0b3UgPyAxLjcgKiB0aGlzLl9rZWVwRGlzdGFuY2UgOiAxLjUgKiB0aGlzLl9rZWVwRGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIHJbdGhpcy5fbUJvZHlNb3ZlQmFja0Rpc10gPSAwO1xuICAgICAgICAgICAgICAgIHJbdGhpcy5fbUJvZHlFdmVuXSA9ICEwO1xuICAgICAgICAgICAgICAgIHIuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEcmFnb25Ta2luKHIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgci5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5wdXNoKHIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1ckxhc3RCb3hJdGVtTm9kZSA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzb25Qb3NSb290MiAmJiAhdGhpcy5zb3J0UGVyc29uTm9kZXMyW3RoaXMuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGggLSAxXS5sb25nd2VpKSB7XG4gICAgICAgICAgICAgICAgKG4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QubG9uZ3dlaSkpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfZHJhZ29uSXRlbS5kZWZhdWx0KS5kcmFnb25Db2xvciA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb25Sb290LmFkZENoaWxkKG4sIDApO1xuICAgICAgICAgICAgICAgIG4ubG9uZ3dlaSA9ICEwO1xuICAgICAgICAgICAgICAgIG4ucG9zaXRpb24gPSBjYy52Myh0aGlzLl9tYXBDb25maWdbMF1bMF0sIHRoaXMuX21hcENvbmZpZ1swXVsxXSk7XG4gICAgICAgICAgICAgICAgbi5fbW92ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBuW3RoaXMuX21Cb2R5TW92ZURpc10gPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJMYXN0Qm94SXRlbU5vZGUyW3RoaXMuX21Cb2R5TW92ZURpc10gLVxuICAgICAgICAgICAgICAgICAgICAodGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlMi5sb25ndG91ID8gMS43ICogdGhpcy5fa2VlcERpc3RhbmNlIDogMS41ICogdGhpcy5fa2VlcERpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBuW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdID0gMDtcbiAgICAgICAgICAgICAgICBuW3RoaXMuX21Cb2R5RXZlbl0gPSAhMTtcbiAgICAgICAgICAgICAgICBuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRHJhZ29uU2tpbihuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG4uYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMyLnB1c2gobik7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlMiA9IG47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKDsgdGhpcy5zb3J0UGVyc29uTm9kZXMubGVuZ3RoICsgdGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCA8IHRoaXMudWlTaG93UGVyc29uQW1vdW50OyApIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0UGVyc29uQ29sb3IoKTtcbiAgICAgICAgICAgICAgICB2YXIgcyA9ICgoaSA9IHRoaXMuY29sb3JQZXJzb25JbmRleEFyclthXSksIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbYV1baV0pO1xuICAgICAgICAgICAgICAgIHZhciBjID0gTWF0aC5mbG9vcigobyAvIHRoaXMuYWxsUGVyc29uQW1vdW50MikgKiAxMDApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmV2aXZlQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSBhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJySW5kZXhbYV1baV0gPT0gdGhpcy5sYXN0RXh0cmFJbmRleEFyclthXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYVdlaWdodFthXSA9IHRoaXMuZXh0cmFXZWlnaHRDb25zdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFXZWlnaHRbYV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEV4dHJhSW5kZXhBcnJbYV0gPSB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJySW5kZXhbYV1baV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgdGhpcy5jb2xvclBlcnNvbkluZGV4QXJyLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmNvbG9yUGVyc29uSW5kZXhBcnJbaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbaF1bcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAoZSAmJiBlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGxbdGhpcy5yYW5kb21OdW0oMCwgbC5sZW5ndGggLSAxKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gdGhpcy5jb2xvclBlcnNvbkluZGV4QXJyW2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbYV1baV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbYV0gKz0gcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXZpdmVBbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uSW5kZXhBcnJbYV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IHM7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2l0ZW1Db25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMDsgZiA8IHRoaXMuX2l0ZW1Db25maWcubGVuZ3RoOyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLl9pdGVtQ29uZmlnW2ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA+PSB2WzBdICYmIGMgPD0gdlsxXSAmJiAhdGhpcy5faXRlbUNyZWF0ZWRMaXN0LmluY2x1ZGVzKGYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gdlsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1DcmVhdGVkTGlzdC5wdXNoKGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzb25Qb3NSb290Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGggfHwgdGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0UGVyc29uTm9kZXMubGVuZ3RoICYmICF0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQgPSAhKHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCA+IHRoaXMuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuZHJhZ29uUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdvblJvb3QuYWRkQ2hpbGQoeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2RyYWdvbkl0ZW0uZGVmYXVsdCkuZHJhZ29uQ29sb3IgPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JQZXJzb25JbWcoYSwgeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeS5wb3NpdGlvbiA9IGNjLnYzKHRoaXMuX21hcENvbmZpZ1swXVswXSwgdGhpcy5fbWFwQ29uZmlnWzBdWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Ll9tb3ZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbdGhpcy5faXRlbVR5cGVdID0gZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5W3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEMgPSB0aGlzLmNyZWF0ZUl0ZW0oZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEMucG9zaXRpb24gPSB5LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5W3RoaXMuX2l0ZW1Ob2RlXSA9IEM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENbdGhpcy5faXRlbURlcGVuZF0gPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtTm9kZUxpc3QucHVzaChDKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LnpJbmRleCA9IDk5OSAtIHRoaXMuY3JlYXRlTnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbdGhpcy5fbUJvZHlNb3ZlRGlzXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJMYXN0Qm94SXRlbU5vZGVbdGhpcy5fbUJvZHlNb3ZlRGlzXSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlLmxvbmd0b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEuNyAqIHRoaXMuX2tlZXBEaXN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMS41ICogdGhpcy5fa2VlcERpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVt0aGlzLl9tQm9keUV2ZW5dID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzLnB1c2goeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckxhc3RCb3hJdGVtTm9kZSA9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVt0aGlzLl9tQm9keU1vdmVEaXNdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckxhc3RCb3hJdGVtTm9kZTJbdGhpcy5fbUJvZHlNb3ZlRGlzXSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlMi5sb25ndG91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxLjcgKiB0aGlzLl9rZWVwRGlzdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDEuNSAqIHRoaXMuX2tlZXBEaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbdGhpcy5fbUJvZHlFdmVuXSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczIucHVzaCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlMiA9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuZHJhZ29uUHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdvblJvb3QuYWRkQ2hpbGQoeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2RyYWdvbkl0ZW0uZGVmYXVsdCkuZHJhZ29uQ29sb3IgPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JQZXJzb25JbWcoYSwgeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeS5wb3NpdGlvbiA9IGNjLnYzKHRoaXMuX21hcENvbmZpZ1swXVswXSwgdGhpcy5fbWFwQ29uZmlnWzBdWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Ll9tb3ZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbdGhpcy5faXRlbVR5cGVdID0gZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5W3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEMgPSB0aGlzLmNyZWF0ZUl0ZW0oZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEMucG9zaXRpb24gPSB5LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5W3RoaXMuX2l0ZW1Ob2RlXSA9IEM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENbdGhpcy5faXRlbURlcGVuZF0gPSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtTm9kZUxpc3QucHVzaChDKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVOdW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LnpJbmRleCA9IDk5OSAtIHRoaXMuY3JlYXRlTnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbdGhpcy5fbUJvZHlNb3ZlRGlzXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJMYXN0Qm94SXRlbU5vZGVbdGhpcy5fbUJvZHlNb3ZlRGlzXSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlLmxvbmd0b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEuNyAqIHRoaXMuX2tlZXBEaXN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMS41ICogdGhpcy5fa2VlcERpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVt0aGlzLl9tQm9keUV2ZW5dID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzLnB1c2goeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckxhc3RCb3hJdGVtTm9kZSA9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVt0aGlzLl9tQm9keU1vdmVEaXNdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckxhc3RCb3hJdGVtTm9kZTJbdGhpcy5fbUJvZHlNb3ZlRGlzXSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlMi5sb25ndG91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxLjcgKiB0aGlzLl9rZWVwRGlzdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDEuNSAqIHRoaXMuX2tlZXBEaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlbdGhpcy5fbUJvZHlFdmVuXSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczIucHVzaCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlMiA9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy51aVNob3dQZXJzb25BbW91bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCAmJiB0aGlzLnNvcnRQZXJzb25Ob2RlczJbMF0ubG9uZ3RvdSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczJbMF0uc2V0U2libGluZ0luZGV4KDk5OSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGggJiYgdGhpcy5zb3J0UGVyc29uTm9kZXNbMF0ubG9uZ3RvdSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXS5zZXRTaWJsaW5nSW5kZXgoOTk5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlO1xuICAgICAgICAoZSA9IHRoaXMuX2l0ZW1Qb29sTGlzdC5sZW5ndGggPyB0aGlzLl9pdGVtUG9vbExpc3Quc2hpZnQoKSA6IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5pdGVtUHJlZmFiKSlcbiAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1JbWdcIilcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYm94MlNwcml0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKFwiZjI5MDg2X1wiICsgKHQgKyA1ZTMpKTtcbiAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW1OYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1OYW1lTGlzdFt0IC0gMV1cbiAgICAgICAgKTtcbiAgICAgICAgZS5wYXJlbnQgPSB0aGlzLmRpY3QuaXRlbVJvb3Q7XG4gICAgICAgIGUuYWN0aXZlID0gITA7XG4gICAgICAgIHZhciBvID0gZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpO1xuICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgby5hY3RpdmUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoMSA9PSB0IHx8IDUgPT0gdCkge1xuICAgICAgICAgICAgaWYgKGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKSkge1xuICAgICAgICAgICAgICAgIG8uYWN0aXZlID0gITA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0W1wiZjI5MDg2LmpuX3RleGlhb1wiXSk7XG4gICAgICAgICAgICAgICAgaS5uYW1lID0gXCJzcGluZVwiO1xuICAgICAgICAgICAgICAgIGkucGFyZW50ID0gZTtcbiAgICAgICAgICAgICAgICBpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIGkucG9zaXRpb24gPSBjYy52MigwLCA5MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBnYW1lLmRyYWdvbk1vdmluZyAmJlxuICAgICAgICAgICAgKCh0ID0gMC4wMTYpLFxuICAgICAgICAgICAgIXRoaXMuaXNXaW4gJiZcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZpbmlzaCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmlzU29ydGluZyAmJlxuICAgICAgICAgICAgICAgICF0aGlzLl9yZW1vdmVTdGFnZSAmJlxuICAgICAgICAgICAgICAgICh0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGggfHwgdGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXTtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5zb3J0UGVyc29uTm9kZXMyWzBdO1xuICAgICAgICAgICAgdmFyIGkgPSAkbGV2ZWxfMjkwODZfY29uZmlnLk1hcFBhcmFtW3RoaXMubWFwVHlwZV0ubm9Ub3VjaEFuZFN0b3A7XG4gICAgICAgICAgICBpZiAoLTI5MDk1ID09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgICAgIGkgPSAkbGV2ZWxfMjkwODZfY29uZmlnLk1hcFBhcmFtWzBdLm5vVG91Y2hBbmRTdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoIXRoaXMuX3RvdWNoQmVnaW4gJiYgZSAmJiBlLl9tb3ZlSW5kZXggPj0gaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcm9sZUxldmVsMkNvdW50ICYmIHRoaXMuX3JvbGVMZXZlbDJDdXJUaW1lIDw9IHRoaXMuX3JvbGVMZXZlbDJUaW1lICYmIHRoaXMuX3JvbGVMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvbGVMZXZlbDJDdXJUaW1lICs9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yb2xlTGV2ZWwyQ3VyVGltZSA+PSB0aGlzLl9yb2xlTGV2ZWwyVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9yb2xlTGV2ZWw1Q291bnQgJiYgdGhpcy5fcm9sZUxldmVsID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlTGV2ZWw1Q291bnQrKyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQWN0aXZlKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRHJhZ29uQXR0YWNrICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuaXNEcmFnb25BdHRhY2sgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc0RyYWdvbkF0dGFja2luZyA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5zb3J0UGVyc29uTm9kZXNbMF1bdGhpcy5fbW92ZUVuZF0gPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXNbMF0uc3RvcEFsbEFjdGlvbnMoKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRHJhZ29uQXR0YWNrMiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmlzRHJhZ29uQXR0YWNrMiA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzRHJhZ29uQXR0YWNraW5nMiA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuc29ydFBlcnNvbk5vZGVzMlswXVt0aGlzLl9tb3ZlRW5kXSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczJbMF0uc3RvcEFsbEFjdGlvbnMoKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVXdWRpKCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlV3VkaSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZUxldmVsMTBDb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlTGV2ZWwxMEN1clRpbWUgPD0gdGhpcy5fcm9sZUxldmVsMTBUaW1lICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvbGVMZXZlbCA+PSAxMCAmJlxuICAgICAgICAgICAgICAgICAgICAoKHRoaXMuX3JvbGVMZXZlbDEwQ3VyVGltZSArPSB0KSwgdGhpcy5fcm9sZUxldmVsMTBDdXJUaW1lID49IHRoaXMuX3JvbGVMZXZlbDEwVGltZSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChfID0gdGhpcy5zb3J0UGVyc29uTm9kZXNbcl0pLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmxvbmd0b3UgfHwgXy5sb25nd2VpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUl0ZW0xQmlnU3BpbmUoXyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTFTbWFsbFNwaW5lKF8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHIgPSAwOyByIDwgdGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF8gPSB0aGlzLnNvcnRQZXJzb25Ob2RlczJbcl0pLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmxvbmd0b3UgfHwgXy5sb25nd2VpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUl0ZW0xQmlnU3BpbmUoXyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTFTbWFsbFNwaW5lKF8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2xvd1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nsb3dDdXIgKz0gdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nsb3dDdXIgPj0gdGhpcy5fc2xvd1RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nsb3dDdXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2xvd1N0YXJ0ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2l0ZW0xU3RhcnQgJiYgKCh0aGlzLl9pdGVtMUN1ciArPSB0KSwgdGhpcy5faXRlbTFDdXIgPj0gdGhpcy5faXRlbTFUaW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtMUN1ciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0xU3RhcnQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF8gPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1tyXSkucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ubG9uZ3RvdSB8fCBfLmxvbmd3ZWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTFCaWdTcGluZShfKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVJdGVtMVNtYWxsU3BpbmUoXyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoXyA9IHRoaXMuc29ydFBlcnNvbk5vZGVzMltyXSkucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ubG9uZ3RvdSB8fCBfLmxvbmd3ZWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTFCaWdTcGluZShfKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVJdGVtMVNtYWxsU3BpbmUoXyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtMlN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0yQ3VyICs9IHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtMkN1ciA+PSB0aGlzLl9pdGVtMlRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0yQ3VyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0yU3RhcnQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXRlbTNTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtM0N1ciArPSB0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXRlbTNDdXIgPj0gdGhpcy5faXRlbTNUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtM0N1ciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtM1N0YXJ0ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2l0ZW00U3RhcnQgJiYgKCh0aGlzLl9pdGVtNEN1ciArPSB0KSwgdGhpcy5faXRlbTRDdXIgPj0gdGhpcy5faXRlbTRUaW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtNEN1ciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW00U3RhcnQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IHRoaXMuY2Fubm9uUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmNhbm5vblJvb3QuY2hpbGRyZW5bcl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVJdGVtNFNwaW5lKG4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtNVN0YXJ0ICYmICgodGhpcy5faXRlbTVDdXIgKz0gdCksIHRoaXMuX2l0ZW01Q3VyID49IHRoaXMuX2l0ZW01VGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbTVDdXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtNVN0YXJ0ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLmNhbm5vblJvb3QuY2hpbGRyZW4ubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB0aGlzLmNhbm5vblJvb3QuY2hpbGRyZW5bcl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVJdGVtNVNwaW5lKG4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVRpcHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuc29ydFBlcnNvbk5vZGVzW3RoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzMlt0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXZpdmVCYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmlzUmV2aXZlU29ydCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKChlICYmIDAgPT0gZVt0aGlzLl9tQm9keU1vdmVCYWNrRGlzXSkgfHwgIWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG8gJiYgMCA9PSBvW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdKSB8fCAhbylcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiAwID09IGVbdGhpcy5fbUJvZHlNb3ZlQmFja0Rpc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHIgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGggLSAxOyByID49IDA7IHItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfID0gdGhpcy5zb3J0UGVyc29uTm9kZXNbcl0pLnBhcmVudCB8fCBfLmxvbmd0b3UgfHwgXy5sb25nd2VpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9bdGhpcy5fdHVybkJhY2tEZXN0cm95XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocyA9IF9bdGhpcy5faXRlbU5vZGVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc1t0aGlzLl9pdGVtRGVwZW5kXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1Ob2RlTGlzdC5zcGxpY2UodGhpcy5faXRlbU5vZGVMaXN0LmluZGV4T2YocyksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtUG9vbExpc3QucHVzaChzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMuc3BsaWNlKHIsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF8gPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1tyXSkucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfW3RoaXMuX21Cb2R5TW92ZURpc10gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgKiAtKDAgPT0gciA/IDEuNyAqIHRoaXMuX2tlZXBEaXN0YW5jZSA6IDEuNSAqIHRoaXMuX2tlZXBEaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJMYXN0Qm94SXRlbU5vZGUgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1t0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZTFcIiwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgMCA9PSBvW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChyID0gdGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCAtIDE7IHIgPj0gMDsgci0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfID0gdGhpcy5zb3J0UGVyc29uTm9kZXMyW3JdKS5wYXJlbnQgfHwgXy5sb25ndG91IHx8IF8ubG9uZ3dlaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfW3RoaXMuX3R1cm5CYWNrRGVzdHJveV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHMgPSBfW3RoaXMuX2l0ZW1Ob2RlXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNbdGhpcy5faXRlbURlcGVuZF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtTm9kZUxpc3Quc3BsaWNlKHRoaXMuX2l0ZW1Ob2RlTGlzdC5pbmRleE9mKHMpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbVBvb2xMaXN0LnB1c2gocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzMi5zcGxpY2UociwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IHRoaXMuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF8gPSB0aGlzLnNvcnRQZXJzb25Ob2RlczJbcl0pLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1t0aGlzLl9tQm9keU1vdmVEaXNdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByICogLSgwID09IHIgPyAxLjcgKiB0aGlzLl9rZWVwRGlzdGFuY2UgOiAxLjUgKiB0aGlzLl9rZWVwRGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1t0aGlzLl9tQm9keU1vdmVCYWNrRGlzXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyTGFzdEJveEl0ZW1Ob2RlMiA9IHRoaXMuc29ydFBlcnNvbk5vZGVzMlt0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGUxXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGUgJiYgMCA9PSBlW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdKSB8fCAhZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKG8gJiYgMCA9PSBvW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdKSB8fCAhbykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuaXNSZXZpdmVCYWNrID0gITEpLCB0aGlzLmNoZWNrUmVzKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUluVXBkYXRlKHQsIDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVJblVwZGF0ZTIodCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuaXRlbU5vZGVNb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoYVt0aGlzLl9tQm9keU1vdmVEaXNdID4gMCAmJiAhYS5sb25nd2VpKSB8fCBhLmxvbmd0b3UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVNob3dQZXJzb25BbW91bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQZXJzb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLl9zcGVlZEluZGV4TGlzdC5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFAgPSB0aGlzLl9zcGVlZEluZGV4TGlzdFtyXSkgPD0gZS5fbW92ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gcjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLl9tb3ZlSW5kZXggPj0gdGhpcy5fc3BlZWRJbmRleExpc3RbdGhpcy5fc3BlZWRJbmRleExpc3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gdGhpcy5fc3BlZWRJbmRleExpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbCA9ICgxIC8gdGhpcy5fbW92ZVNwZWVkW2NdKSAqIDFlNSAqIHQ7XG4gICAgICAgICAgICAgICAgdmFyIGggPSAwO1xuICAgICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLl9zcGVlZEluZGV4TGlzdC5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChQID0gdGhpcy5fc3BlZWRJbmRleExpc3Rbcl0pIDw9IG8uX21vdmVJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5fbW92ZUluZGV4ID49IHRoaXMuX3NwZWVkSW5kZXhMaXN0W3RoaXMuX3NwZWVkSW5kZXhMaXN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0aGlzLl9zcGVlZEluZGV4TGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcCA9ICgxIC8gdGhpcy5fbW92ZVNwZWVkW2hdKSAqIDFlNSAqIHQ7XG4gICAgICAgICAgICAgICAgaWYgKDAgIT0gbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuX21vdmVJbmRleCA+PSB0aGlzLl9tYXBDb25maWcubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucG9zaXRpb24uc3ViKHRoaXMuX2N1cnZlUG9pbnRzW3RoaXMuX2N1cnZlUG9pbnRzLmxlbmd0aCAtIDFdLnBvc2l0aW9uKS5tYWcoKSA8PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSBlW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZVt0aGlzLl9tb3ZlRW5kXSA9ICEwKSwgKHRoaXMuaXNEcmFnb25BdHRhY2sgPSAhMCksIHRoaXMuZG9EcmFnb25BdHRhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1dhcm5pbmcoZS5fbW92ZUluZGV4KSwgdGhpcy5jaGVja1JvbGUoZS5fbW92ZUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uX21vdmVJbmRleCA+PSB0aGlzLl9tYXBDb25maWcyLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnBvc2l0aW9uLnN1Yih0aGlzLl9jdXJ2ZVBvaW50czJbdGhpcy5fY3VydmVQb2ludHMyLmxlbmd0aCAtIDFdLnBvc2l0aW9uKS5tYWcoKSA8PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSBvW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob1t0aGlzLl9tb3ZlRW5kXSA9ICEwKSwgKHRoaXMuaXNEcmFnb25BdHRhY2syID0gITApLCB0aGlzLmRvRHJhZ29uQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tXYXJuaW5nKG8uX21vdmVJbmRleCksIHRoaXMuY2hlY2tSb2xlKG8uX21vdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSW5VcGRhdGUodCwgbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVJblVwZGF0ZTIodCwgcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmV2aXZlQmFjayAmJiAhdGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLmNhbm5vblJvb3QuY2hpbGRyZW4ubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gdGhpcy5jYW5ub25Sb290LmNoaWxkcmVuW3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IHRoaXMuc29ydFBlcnNvbk5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHRoaXMuc29ydFBlcnNvbk5vZGVzMlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGcgJiYgZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gZy5fbW92ZUluZGV4ID49IGYuX21vdmVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gISFnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdGhpcy5zb3J0UGVyc29uTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBDID0gMDsgQyA8IHk7IEMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShfID0gdiA/IHRoaXMuc29ydFBlcnNvbk5vZGVzW0NdIDogdGhpcy5zb3J0UGVyc29uTm9kZXMyW0NdKS5sb25ndG91ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhXy5sb25nd2VpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX1t0aGlzLl9idWxsZXRUYXJnZXRdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfW3RoaXMuX21Cb2R5TW92ZURpc10gPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5faXRlbTVTdGFydCB8fCB0aGlzLmNoZWNrQ2Fubm9uQXR0YWNrKF8uX21vdmVJbmRleCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfZHJhZ29uSXRlbS5kZWZhdWx0KS5kcmFnb25Db2xvciA9PSBuW3RoaXMuX2Nhbm5vblR5cGVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IF87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PSBuW3RoaXMuX2Nhbm5vblN0YXRlXSAmJiB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fubm9uQXR0YWNrKG4sIHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHIgPSB0aGlzLl9idWxsZXRNb3ZlTGlzdC5sZW5ndGggLSAxOyByID49IDA7IHItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFMgPSB0aGlzLl9idWxsZXRNb3ZlTGlzdFtyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0gU1t0aGlzLl9kcmFnb25UYXJnZXRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsgJiYgay5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUy5wb3NpdGlvbi5zdWIoay5wb3NpdGlvbikubWFnKCkgPD0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRBcnJpdmVkKFMsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogay54IC0gUy54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogay55IC0gUy55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBOID0gTWF0aC5zcXJ0KEEueCAqIEEueCArIEEueSAqIEEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQS54IC89IE47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBLnkgLz0gTjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgUCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXRlbTRTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUCArPSAwLjMgKiBQO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMueCArPSBBLnggKiBQO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTLnkgKz0gQS55ICogUDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLmF0YW4yKEEueSwgQS54KSAtIE1hdGguYXRhbjIoLTEsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTLmFuZ2xlID0geCAqICgxODAgLyBNYXRoLlBJKSAtIDE4MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTm9kZU1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm1vdmVJblVwZGF0ZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvO1xuICAgICAgICBpZiAoIXRoaXMuaXNXaW4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5zb3J0UGVyc29uTm9kZXNbMF07XG4gICAgICAgICAgICBpZiAoaSAmJiAhaVt0aGlzLl9tb3ZlRW5kXSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgdGhpcy5zb3J0UGVyc29uTm9kZXMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1tyXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmV2aXZlQmFjayB8fCAwICE9IG5bdGhpcy5fbUJvZHlNb3ZlQmFja0Rpc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IChvID0gblt0aGlzLl9tQm9keU1vdmVCYWNrRGlzXSkgJiYgdm9pZCAwICE9PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhICs9IGMgPSB0aGlzLmdldE1vdmVEaXMoZSwgdGhpcy5pc1Jldml2ZUJhY2sgPyBsLnJldml2ZSA6IGwuYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgblt0aGlzLl9tQm9keU1vdmVEaXNdIC09IGMgLSAoYSA+IDAgPyBhIDogMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgblt0aGlzLl9tQm9keU1vdmVCYWNrRGlzXSA9IE1hdGgubWluKDAsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0xU3RhcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fcm9sZUxldmVsMTBDb3VudCAmJiB0aGlzLl9yb2xlTGV2ZWwxMEN1clRpbWUgPD0gdGhpcy5fcm9sZUxldmVsMTBUaW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmdldE1vdmVEaXMoZSwgbC5pdGVtMVN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuW3RoaXMuX21Cb2R5TW92ZURpc10gKz0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Nsb3dTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gdGhpcy5nZXRNb3ZlRGlzKGUsIGwuc2xvd1N0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgblt0aGlzLl9tQm9keU1vdmVEaXNdICs9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2l0ZW0zU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID0gdGhpcy5nZXRNb3ZlRGlzKGUsIGwuaXRlbTNTdGFydCkpLCAoblt0aGlzLl9tQm9keU1vdmVEaXNdICs9IGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMgPSB0aGlzLmdldE1vdmVEaXMoZSkpLCAoblt0aGlzLl9tQm9keU1vdmVEaXNdICs9IGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5bdGhpcy5fbUJvZHlNb3ZlRGlzXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJvZHlQb3Mobiwgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm1vdmVJblVwZGF0ZTIgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgaWYgKCF0aGlzLmlzV2luKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuc29ydFBlcnNvbk5vZGVzMlswXTtcbiAgICAgICAgICAgIGlmIChpICYmICFpW3RoaXMuX21vdmVFbmRdKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnNvcnRQZXJzb25Ob2RlczJbcl07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Jldml2ZUJhY2sgfHwgMCAhPSBuW3RoaXMuX21Cb2R5TW92ZUJhY2tEaXNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSAobyA9IG5bdGhpcy5fbUJvZHlNb3ZlQmFja0Rpc10pICYmIHZvaWQgMCAhPT0gbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSArPSBjID0gdGhpcy5nZXRNb3ZlRGlzKGUsIHRoaXMuaXNSZXZpdmVCYWNrID8gbC5yZXZpdmUgOiBsLmJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5bdGhpcy5fbUJvZHlNb3ZlRGlzXSAtPSBjIC0gKGEgPiAwID8gYSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5bdGhpcy5fbUJvZHlNb3ZlQmFja0Rpc10gPSBNYXRoLm1pbigwLCBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtMVN0YXJ0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3JvbGVMZXZlbDEwQ291bnQgJiYgdGhpcy5fcm9sZUxldmVsMTBDdXJUaW1lIDw9IHRoaXMuX3JvbGVMZXZlbDEwVGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5nZXRNb3ZlRGlzKGUsIGwuaXRlbTFTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgblt0aGlzLl9tQm9keU1vdmVEaXNdICs9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zbG93U3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHRoaXMuZ2V0TW92ZURpcyhlLCBsLnNsb3dTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5bdGhpcy5fbUJvZHlNb3ZlRGlzXSArPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtM1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYyA9IHRoaXMuZ2V0TW92ZURpcyhlLCBsLml0ZW0zU3RhcnQpKSwgKG5bdGhpcy5fbUJvZHlNb3ZlRGlzXSArPSBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID0gdGhpcy5nZXRNb3ZlRGlzKGUpKSwgKG5bdGhpcy5fbUJvZHlNb3ZlRGlzXSArPSBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuW3RoaXMuX21Cb2R5TW92ZURpc10gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCb2R5UG9zKG4sIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRNb3ZlRGlzID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9IHRoaXMuX2N1ck1vdmVTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0QWRkU3BlZWQoKTtcbiAgICAgICAgaWYgKGUgPT0gbC5ub3JtYWwpIHtcbiAgICAgICAgICAgIHQgPSB0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUgPT0gbC5iYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSA1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgKj0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlID09IGwuc2xvd1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQgKj0gMC4yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlID09IGwuaXRlbTNTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCAqPSAwLjc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID09IGwuaXRlbTFTdGFydCA/ICh0ID0gMCkgOiBlID09IGwucmV2aXZlICYmICh0ID0gMzApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICB0ICo9IDEgKyBvIC8gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0QWRkU3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fYWRkU3BlZWRbMF0gJiYgIXRoaXMuX2FkZFNwZWVkWzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IDA7XG4gICAgICAgIHZhciBlID0gTWF0aC5mbG9vcigodGhpcy5jdXJDcmVhdGVQZXJzb25BbW91bnQgLyB0aGlzLmFsbFBlcnNvbkFtb3VudDIpICogMTAwKTtcbiAgICAgICAgaWYgKGUgPj0gdGhpcy5fYWRkU3BlZWRbMF0gJiYgZSA8PSB0aGlzLl9hZGRTcGVlZFsxXSkge1xuICAgICAgICAgICAgdCArPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoZSAtIHRoaXMuX2FkZFNwZWVkWzBdKSAvIHRoaXMuX2FkZFNwZWVkWzJdKSAqIHRoaXMuX2FkZFNwZWVkWzNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUgPj0gdGhpcy5fYWRkU3BlZWRbMV0pIHtcbiAgICAgICAgICAgICAgICB0ICs9XG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5mbG9vcih0aGlzLl9hZGRTcGVlZFsxXSAtIHRoaXMuX2FkZFNwZWVkWzBdKSAvIHRoaXMuX2FkZFNwZWVkWzJdKSAqXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZFNwZWVkWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlQm9keVBvcyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbztcbiAgICAgICAgaWYgKHRbdGhpcy5fbUJvZHlFdmVuXSkge1xuICAgICAgICAgICAgbyA9IHRoaXMuZ2V0UG9zQnlEaXModFt0aGlzLl9tQm9keU1vdmVEaXNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG8gPSB0aGlzLmdldFBvczJCeURpcyh0W3RoaXMuX21Cb2R5TW92ZURpc10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmFicyh0LnkgLSBvWzBdLnkpIDw9IDEwKSB7XG4gICAgICAgICAgICBpZiAodC5fbW92ZUluZGV4ID4gb1syXS5tYXBJbmRleCkge1xuICAgICAgICAgICAgICAgIGlmICh0LnggPiBvWzBdLngpIHtcbiAgICAgICAgICAgICAgICAgICAgKHQuc2NhbGVYID0gMC45KSwgdC5sb25ndG91ICYmIHRoaXMuZGljdC5ocFByZWZhYiAmJiAodGhpcy5kaWN0LmhwUHJlZmFiLnNjYWxlWCA9IC0xKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0LnggPCBvWzBdLnggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgodC5zY2FsZVggPSAtMC45KSwgdC5sb25ndG91ICYmIHRoaXMuZGljdC5ocFByZWZhYiAmJiAodGhpcy5kaWN0LmhwUHJlZmFiLnNjYWxlWCA9IDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQuX21vdmVJbmRleCA8IG9bMl0ubWFwSW5kZXggJiZcbiAgICAgICAgICAgICAgICAgICAgKHQueCA+IG9bMF0ueFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoKHQuc2NhbGVYID0gLTAuOSksIHQubG9uZ3RvdSAmJiB0aGlzLmRpY3QuaHBQcmVmYWIgJiYgKHRoaXMuZGljdC5ocFByZWZhYi5zY2FsZVggPSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdC54IDwgb1swXS54ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgodC5zY2FsZVggPSAwLjkpLCB0Lmxvbmd0b3UgJiYgdGhpcy5kaWN0LmhwUHJlZmFiICYmICh0aGlzLmRpY3QuaHBQcmVmYWIuc2NhbGVYID0gLTEpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdC5fbW92ZUluZGV4ID0gb1syXS5tYXBJbmRleDtcbiAgICAgICAgdC5zZXRQb3NpdGlvbihvWzBdKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFBvc0J5RGlzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgPCAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY3VydmVQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5fY3VydmVQb2ludHNbMF0ucG9zaXRpb24sIHRoaXMuX2N1cnZlUG9pbnRzWzBdLCB0aGlzLl9jdXJ2ZVBvaW50c1sxXSwgMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbY2MuVmVjMi5aRVJPXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9IHQ7XG4gICAgICAgIGZvciAodmFyIG8gPSAxOyBvIDwgdGhpcy5fY3VydmVQb2ludHMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5fY3VydmVQb2ludHNbbyAtIDFdO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLl9jdXJ2ZVBvaW50c1tvXTtcbiAgICAgICAgICAgIGlmIChlIDw9IHIuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGUgLyByLmRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIHZhciBhID0gci5wb3NpdGlvbi5zdWIoaS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtpLnBvc2l0aW9uLmFkZChhLm5vcm1hbGl6ZSgpLm11bFNlbGYoYS5sZW4oKSAqIG4pKSwgaSwgciwgbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlIC09IHIuZGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHRoaXMuX2N1cnZlUG9pbnRzW3RoaXMuX2N1cnZlUG9pbnRzLmxlbmd0aCAtIDFdLnBvc2l0aW9uLFxuICAgICAgICAgICAgdGhpcy5fY3VydmVQb2ludHNbdGhpcy5fY3VydmVQb2ludHMubGVuZ3RoIC0gMl0sXG4gICAgICAgICAgICB0aGlzLl9jdXJ2ZVBvaW50c1t0aGlzLl9jdXJ2ZVBvaW50cy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgXTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFBvczJCeURpcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0IDwgMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnZlUG9pbnRzMi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLl9jdXJ2ZVBvaW50czJbMF0ucG9zaXRpb24sIHRoaXMuX2N1cnZlUG9pbnRzMlswXSwgdGhpcy5fY3VydmVQb2ludHMyWzFdLCAxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtjYy5WZWMyLlpFUk9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdDtcbiAgICAgICAgZm9yICh2YXIgbyA9IDE7IG8gPCB0aGlzLl9jdXJ2ZVBvaW50czIubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5fY3VydmVQb2ludHMyW28gLSAxXTtcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5fY3VydmVQb2ludHMyW29dO1xuICAgICAgICAgICAgaWYgKGUgPD0gci5kaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gZSAvIHIuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSByLnBvc2l0aW9uLnN1YihpLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2kucG9zaXRpb24uYWRkKGEubm9ybWFsaXplKCkubXVsU2VsZihhLmxlbigpICogbikpLCBpLCByLCBuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUgLT0gci5kaXN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcy5fY3VydmVQb2ludHMyW3RoaXMuX2N1cnZlUG9pbnRzMi5sZW5ndGggLSAxXS5wb3NpdGlvbixcbiAgICAgICAgICAgIHRoaXMuX2N1cnZlUG9pbnRzMlt0aGlzLl9jdXJ2ZVBvaW50czIubGVuZ3RoIC0gMl0sXG4gICAgICAgICAgICB0aGlzLl9jdXJ2ZVBvaW50czJbdGhpcy5fY3VydmVQb2ludHMyLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgMVxuICAgICAgICBdO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubW92ZUJvZHlCYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBlID0gMC41ICogdGhpcy5zb3J0UGVyc29uTm9kZXNbMF1bdGhpcy5fbUJvZHlNb3ZlRGlzXTtcbiAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICBvW3QuX21Cb2R5TW92ZUJhY2tEaXNdIC09IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIG8gPSAwLjUgKiB0aGlzLnNvcnRQZXJzb25Ob2RlczJbMF1bdGhpcy5fbUJvZHlNb3ZlRGlzXTtcbiAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzMi5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZVt0Ll9tQm9keU1vdmVCYWNrRGlzXSA9IC1vO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm1vdmVCb2R5UmV2aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzWzBdW3RoaXMuX21Cb2R5TW92ZURpc107XG4gICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZVt0Ll9tQm9keU1vdmVCYWNrRGlzXSAtPSBlW3QuX21Cb2R5TW92ZURpc107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMyWzBdW3RoaXMuX21Cb2R5TW92ZURpc107XG4gICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczIuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGVbdC5fbUJvZHlNb3ZlQmFja0Rpc10gLT0gZVt0Ll9tQm9keU1vdmVEaXNdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlbW92ZUJvZHkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuc29ydFBlcnNvbk5vZGVzLmluZGV4T2YodCk7XG4gICAgICAgIGlmICgtMSAhPT0gZSkge1xuICAgICAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMuc3BsaWNlKGUsIDEpO1xuICAgICAgICAgICAgdGhpcy5iYWNrQm9keVdpdGhQaWNrMih0LCBlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHRoaXMuc29ydFBlcnNvbk5vZGVzMi5pbmRleE9mKHQpO1xuICAgICAgICBpZiAoLTEgIT09IG8pIHtcbiAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzMi5zcGxpY2UobywgMSk7XG4gICAgICAgICAgICB0aGlzLmJhY2tCb2R5V2l0aFBpY2szKHQsIG8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5iYWNrQm9keVdpdGhQaWNrMiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMuc2xpY2UoMCwgZSkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB0W28uX21Cb2R5TW92ZUJhY2tEaXNdID1cbiAgICAgICAgICAgICAgICAobnVsbCAhPT0gKGUgPSB0W28uX21Cb2R5TW92ZUJhY2tEaXNdKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMCkgLSAxLjUgKiBvLl9rZWVwRGlzdGFuY2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0LmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnb25BdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnb25BdHRhY2sgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnb25BdHRhY2tpbmcgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzWzBdW3RoaXMuX21vdmVFbmRdID0gITE7XG4gICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5iYWNrQm9keVdpdGhQaWNrMyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMyLnNsaWNlKDAsIGUpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdFtvLl9tQm9keU1vdmVCYWNrRGlzXSA9XG4gICAgICAgICAgICAgICAgKG51bGwgIT09IChlID0gdFtvLl9tQm9keU1vdmVCYWNrRGlzXSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDApIC0gMS41ICogby5fa2VlcERpc3RhbmNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdC5kZXN0cm95KCk7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ29uQXR0YWNrMikge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdvbkF0dGFjazIgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnb25BdHRhY2tpbmcyID0gITE7XG4gICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczJbMF1bdGhpcy5fbW92ZUVuZF0gPSAhMTtcbiAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzMlswXS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pdGVtTm9kZU1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5faXRlbU5vZGVMaXN0Lmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuX2l0ZW1Ob2RlTGlzdFt0XTtcbiAgICAgICAgICAgIGlmIChlW3RoaXMuX2l0ZW1EZXBlbmRdKSB7XG4gICAgICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGVbdGhpcy5faXRlbURlcGVuZF0ucG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrQ2Fubm9uQXR0YWNrID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLmNhbm5vbkF0dGFja0xpc3QubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5jYW5ub25BdHRhY2tMaXN0W2VdO1xuICAgICAgICAgICAgaWYgKHQgPj0gb1swXSAmJiB0IDw9IG9bMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2Fubm9uQXR0YWNrID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICB0aGlzLnBsYXlSZW1vdGVTb3VuZCgkbGV2ZWxDb25zdGFudC5kb21haW4gKyBcImF1ZGlvL2YyOTA4Ni9mMjkwODZfU2hvb3QubXAzXCIsICExKTtcbiAgICAgICAgdFt0aGlzLl9jYW5ub25TdGF0ZV0gPSAyO1xuICAgICAgICB0LnBhcmtpbmcuY2FyLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQgPVxuICAgICAgICAgICAgdC5wYXJraW5nLmNhci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50IC0gMTtcbiAgICAgICAgdmFyIGkgPSB7XG4gICAgICAgICAgICB4OiBlLnggLSB0LngsXG4gICAgICAgICAgICB5OiBlLnkgLSB0LnlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHIgPSBNYXRoLnNxcnQoaS54ICogaS54ICsgaS55ICogaS55KTtcbiAgICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgICAgICBpLnggLz0gcjtcbiAgICAgICAgICAgIGkueSAvPSByO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gTWF0aC5hdGFuMihpLnksIGkueCkgLSBNYXRoLmF0YW4yKC0xLCAwKTtcbiAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhbm5vblwiKS5hbmdsZSA9IG4gKiAoMTgwIC8gTWF0aC5QSSkgLSAxODA7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRCdWxsZXQoKTtcbiAgICAgICAgYS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtUG9zaXRpb24odCwgYSkuYWRkKGNjLnYyKDAsIDEwKSk7XG4gICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJidWxsZXRcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJveDJTcHJpdGVBdGxhcy5nZXRTcHJpdGVGcmFtZShcbiAgICAgICAgICAgIFwiZjI5MDg2X1wiICsgKHRbdGhpcy5fY2Fubm9uVHlwZV0gKyAxICsgMjIwMClcbiAgICAgICAgKTtcbiAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcInhpYW9jaHVcIilcbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAuc2V0U2tpbihcInNraW5cIiArICh0W3RoaXMuX2Nhbm5vblR5cGVdICsgMSkpO1xuICAgICAgICBhLmFjdGl2ZSA9ICExO1xuICAgICAgICBlW3RoaXMuX2J1bGxldFRhcmdldF0gPSBhO1xuICAgICAgICBhW3RoaXMuX2RyYWdvblRhcmdldF0gPSBlO1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYXR0YWNrXCIsICExKTtcbiAgICAgICAgY2MudHdlZW4odClcbiAgICAgICAgICAgIC5kZWxheSgwLjEpXG4gICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdFtvLl9jYW5ub25OdW1dLS07XG4gICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwieFwiICsgdFtvLl9jYW5ub25OdW1dO1xuICAgICAgICAgICAgICAgIGEuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgby5fYnVsbGV0TW92ZUxpc3QucHVzaChhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2l0ZW00U3RhcnQpIHtcbiAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYW5ub25cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS50aW1lU2NhbGUgPSAxLjM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikudGltZVNjYWxlID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpXG4gICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYW5ub25cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgICAgIGlmICh0W28uX2Nhbm5vbk51bV0gPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiZXhpdFwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYW5ub25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0Q29tcGxldGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhbm5vblwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZUZyb21QYXJlbnQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uX2Nhbm5vbkxpc3QucHVzaCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBhcmtpbmcuaXNFbXB0eSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQucGFya2luZy5jYXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ubW92ZUNhckFtb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhbm5vblwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgITApO1xuICAgICAgICAgICAgICAgICAgICB0W28uX2Nhbm5vblN0YXRlXSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5idWxsZXRBcnJpdmVkID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICB0aGlzLnBsYXlSZW1vdGVTb3VuZCgkbGV2ZWxDb25zdGFudC5kb21haW4gKyBcImF1ZGlvL2YyOTA4Ni9mMjkwODZfQmxvdy5tcDNcIiwgITEpO1xuICAgICAgICB0aGlzLl9idWxsZXRNb3ZlTGlzdC5zcGxpY2UoZSwgMSk7XG4gICAgICAgIHRoaXMuYWxsUGVyc29uQW1vdW50LS07XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImFsbFBlcnNvbkFtb3VudFwiLCB0aGlzLmFsbFBlcnNvbkFtb3VudCwgdGhpcy5hbGxQZXJzb25BbW91bnQyKTtcbiAgICAgICAgdGhpcy51aVNob3dQZXJzb25BbW91bnQtLTtcbiAgICAgICAgdGhpcy51cGRhdGVIcCgpO1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiYnVsbGV0XCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwieGlhb2NodVwiKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwieGlhb2NodVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgIHZhciBpID0gdFt0aGlzLl9kcmFnb25UYXJnZXRdO1xuICAgICAgICB2YXIgciA9IGlbdGhpcy5faXRlbVR5cGVdO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgdGhpcy5pdGVtQWN0aXZlKHIpO1xuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHQpXG4gICAgICAgICAgICAuZGVsYXkoMC4xKVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gaVtvLl9pdGVtTm9kZV07XG4gICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBjYy5pbnN0YW50aWF0ZShvLmRpY3RbXCJmMjkwODYueGlhb3NoaVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGUucGFyZW50ID0gby5kaWN0W1wiZjI5MDg2LnhpYW9zaGlcIl0ucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBlLnBvc2l0aW9uID0gby50cmFuc2Zvcm1Qb3NpdGlvbih0LmNoaWxkcmVuWzBdLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHRbby5faXRlbURlcGVuZF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBvLl9pdGVtTm9kZUxpc3Quc3BsaWNlKG8uX2l0ZW1Ob2RlTGlzdC5pbmRleE9mKHQpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgby5faXRlbVBvb2xMaXN0LnB1c2godCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG8uaGlkZUl0ZW0xQmlnU3BpbmUoaSk7XG4gICAgICAgICAgICAgICAgby5oaWRlSXRlbTFTbWFsbFNwaW5lKGkpO1xuICAgICAgICAgICAgICAgIG8uaGlkZUl0ZW00U3BpbmUoaSk7XG4gICAgICAgICAgICAgICAgby5oaWRlSXRlbTVTcGluZShpKTtcbiAgICAgICAgICAgICAgICBvLnJlbW92ZUJvZHkoaSk7XG4gICAgICAgICAgICAgICAgby5jaGVja1JlcygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwieGlhb2NodVwiKVxuICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgIC5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwieGlhb2NodVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICBvLl9idWxsZXRNb2RlbExpc3QucHVzaCh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaXRlbUFjdGl2ZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHN3aXRjaCAodCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY19pdGVtMSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW0yQ3VyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtMlN0YXJ0ID0gITA7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQm9keUJhY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtM0N1ciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbTNTdGFydCA9ICEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW00Q3VyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtNFN0YXJ0ID0gITA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLmNhbm5vblJvb3QuY2hpbGRyZW4ubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLmNhbm5vblJvb3QuY2hpbGRyZW5bb107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW00U3BpbmUoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY19pdGVtNSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHRoaXMuZnVuY19pdGVtNihlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bmNfaXRlbTcoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrV2FybmluZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5NYXBQYXJhbVt0aGlzLm1hcFR5cGVdLndhcm5Qb2ludHM7XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0ID49IGVbaV0pIHtcbiAgICAgICAgICAgICAgICBvID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSAwO1xuICAgICAgICBpZiAodGhpcy5fd2FybmluZ0luZGV4ICE9IG8pIHtcbiAgICAgICAgICAgIHRoaXMuX3dhcm5pbmdJbmRleCA9IG87XG4gICAgICAgICAgICBpZiAobyAmJiB0aGlzLmZ1bmNfaGFzTG9ja1BhcmtpbmcoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChzID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW25dKS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoYyA9IHRoaXMuZGljdC51bmxvY2tUaXBzKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucGFyZW50ID0gcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucG9zaXRpb24gPSBjYy52MigyMCwgNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW8gfHwgIXRoaXMuZnVuY19oYXNMb2NrUGFya2luZygpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChzID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW2FdKS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYyA9IHRoaXMuZGljdC51bmxvY2tUaXBzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvID49IGUubGVuZ3RoICYmIDAgPT0gdGhpcy5fcm9sZUxldmVsMTBDb3VudCAmJiB0aGlzLl9yb2xlTGV2ZWwgPj0gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvUm9sZUxldmVsMTBTa2lsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZjI5MDg2X3dhcm5pbmdJbmRleFwiLCB0aGlzLl93YXJuaW5nSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fd2FybmluZyAmJiBvKSB7XG4gICAgICAgICAgICB0aGlzLl93YXJuaW5nID0gITA7XG4gICAgICAgICAgICByID0gKDEgPT0gbyA/IDMgOiAyID09IG8gPyAxLjUgOiAwKSAvIDI7XG4gICAgICAgICAgICB0aGlzLndhcm5Ob2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLndhcm5Ob2RlKVxuICAgICAgICAgICAgICAgIC50byhyLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKHIsIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fd2FybmluZyAmJiAhbykge1xuICAgICAgICAgICAgICAgIHRoaXMud2Fybk5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5Ob2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhcm5pbmcgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tSb2xlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSAkbGV2ZWxfMjkwODZfY29uZmlnLk1hcFBhcmFtW3RoaXMubWFwVHlwZV0ucm9sZVdhcm47XG4gICAgICAgIGlmICgtMjkwOTUgPT0gdGhpcy5sZXZlbElEKSB7XG4gICAgICAgICAgICBlID0gJGxldmVsXzI5MDg2X2NvbmZpZy5NYXBQYXJhbVswXS5yb2xlV2FybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9ICRsZXZlbF8yOTA4Nl9jb25maWcuTWFwUGFyYW1bdGhpcy5tYXBUeXBlXS5yb2xlUG9pbnQ7XG4gICAgICAgIGlmICh0ID49IGVbdGhpcy5fcm9sZVBvaW50SW5kZXhdICYmIHRoaXMucm9sZU5vZGUuX21vdmVJbmRleCA+PSBvW3RoaXMuX3JvbGVQb2ludEluZGV4XSkge1xuICAgICAgICAgICAgdGhpcy5fcm9sZVBvaW50SW5kZXggKz0gMTtcbiAgICAgICAgICAgIHRoaXMucm9sZU5vZGUubW92aW5nID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSB0aGlzLnJvbGVOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBpZiAodGhpcy5yb2xlTm9kZS5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucm9sZU1vdmluZygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSb2xlSHBQb3MoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvbGVOb2RlLl9tb3ZlSW5kZXggPj0gb1t0aGlzLl9yb2xlUG9pbnRJbmRleF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVOb2RlLm1vdmluZyA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJvbGVOb2RlLm1vdmluZyAmJiBcInpvdVwiICE9IGkuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInpvdVwiLCAhMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlTm9kZS5tb3ZpbmcgfHwgXCJoYWlwYVwiID09IGkuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJoYWlwYVwiLCAhMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJvbGVNb3ZpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5yb2xlTm9kZTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLl9tYXBDb25maWc7XG4gICAgICAgIHZhciBvID0gdC5fbW92ZUluZGV4O1xuICAgICAgICBpZiAoISgwID09PSBlLmxlbmd0aCB8fCBvID49IGUubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHZhciBpID0gdC5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciByID0gZVtvICsgMV07XG4gICAgICAgICAgICB2YXIgbiA9IGNjLnYyKHJbMF0sIHJbMV0pO1xuICAgICAgICAgICAgbiA9IHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuKTtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5yb2xlTm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobikuYWRkKGNjLnYyKDAsIC0yMCkpO1xuICAgICAgICAgICAgaWYgKHQuX21vdmVJbmRleCA9PSBlLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICBhLmFkZFNlbGYoJGxldmVsXzI5MDg2X2NvbmZpZy5NYXBQYXJhbVt0aGlzLm1hcFR5cGVdLnJvbGVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyKSB7XG4gICAgICAgICAgICAgICAgdC5fbW92ZUluZGV4ID0gZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkICh0LmdldENoaWxkQnlOYW1lKFwicm9sZVwiKS5zY2FsZVggPSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzID0gYS54IC0gaS54O1xuICAgICAgICAgICAgdmFyIGMgPSBhLnkgLSBpLnk7XG4gICAgICAgICAgICB2YXIgbCA9IE1hdGguc3FydChzICogcyArIGMgKiBjKTtcbiAgICAgICAgICAgIGlmIChsIDw9IHRoaXMuX2tlZXBEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHQuX21vdmVJbmRleCsrO1xuICAgICAgICAgICAgICAgIHQuX21vdmVJbmRleCA9PSBlLmxlbmd0aCAtIDEgJiYgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpLnNjYWxlWCA9IDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMuX2tlZXBEaXN0YW5jZSAvIGwgLyAxMDtcbiAgICAgICAgICAgICAgICB0Ll90YXJnZXRQb3MueCA9IGkueCArIHMgKiBoO1xuICAgICAgICAgICAgICAgIHQuX3RhcmdldFBvcy55ID0gaS55ICsgYyAqIGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModC54IC0gdC5fdGFyZ2V0UG9zLngpID49IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodC54ID4gdC5fdGFyZ2V0UG9zLnggJiYgTWF0aC5hYnModC55IC0gdC5fdGFyZ2V0UG9zLnkpIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQueCA8IHQuX3RhcmdldFBvcy54ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyh0LnkgLSB0Ll90YXJnZXRQb3MueSkgPD0gMTAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0LmdldENoaWxkQnlOYW1lKFwicm9sZVwiKS5zY2FsZVggPSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodC5fdGFyZ2V0UG9zKSB7XG4gICAgICAgICAgICAgICAgdC5wb3NpdGlvbiA9IHQuX3RhcmdldFBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0QnVsbGV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgKHQgPSB0aGlzLl9idWxsZXRNb2RlbExpc3QubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMuX2J1bGxldE1vZGVsTGlzdC5zaGlmdCgpXG4gICAgICAgICAgICA6IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5idWxsZXRQcmVmYWIpKS5wYXJlbnQgPSB0aGlzLmRpY3QuYnVsbGV0Um9vdDtcbiAgICAgICAgdC5hbmdsZSA9IDA7XG4gICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJidWxsZXRcIikuYWN0aXZlID0gITA7XG4gICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJ4aWFvY2h1XCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICB0W3RoaXMuX2RyYWdvblRhcmdldF0gPSBudWxsO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldENhbm5vbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgICh0ID0gdGhpcy5fY2Fubm9uTGlzdC5sZW5ndGhcbiAgICAgICAgICAgID8gdGhpcy5fY2Fubm9uTGlzdC5zaGlmdCgpXG4gICAgICAgICAgICA6IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5jYW5ub25QcmVmYWIpKS5nZXRDaGlsZEJ5TmFtZShcImNhbm5vblwiKS5hbmdsZSA9IDA7XG4gICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiYm9keVwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgdC5hY3RpdmUgPSAhMDtcbiAgICAgICAgaWYgKCF0aGlzLl9pdGVtNFN0YXJ0ICYmIHQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtNFNwaW5lXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVJdGVtNFNwaW5lKHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faXRlbTVTdGFydCAmJiB0LmdldENoaWxkQnlOYW1lKFwiaXRlbTVTcGluZVwiKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTVTcGluZSh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUl0ZW1UaXBzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IFtcbiAgICAgICAgICAgIFt0aGlzLl9pdGVtMUN1ciwgMV0sXG4gICAgICAgICAgICBbdGhpcy5faXRlbTJDdXIsIDJdLFxuICAgICAgICAgICAgW3RoaXMuX2l0ZW0zQ3VyLCAzXSxcbiAgICAgICAgICAgIFt0aGlzLl9pdGVtNEN1ciwgNF0sXG4gICAgICAgICAgICBbdGhpcy5faXRlbTVDdXIsIDVdXG4gICAgICAgIF0uc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVbMF0gLSB0WzBdO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRbMF1bMF0pIHtcbiAgICAgICAgICAgIHZhciBlID0gdFswXVsxXTtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5faXRlbVRpcHNMaXN0W2UgLSAxXTtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbVRpcHNOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1UaXBzTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXG4gICAgICAgICAgICAgICAgICAgIG8gKyBcIiVkU1wiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzW1wiX2l0ZW1cIiArIGUgKyBcIlRpbWVcIl0gLSBNYXRoLnJvdW5kKHRbMF1bMF0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1UaXBzTm9kZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlUGFya2luZ1dlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJraW5nV2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChlLmFjdGl2ZSAmJiBlLmNhcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUuY2FyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBvLmdldENoaWxkQnlOYW1lKFwic2VhdFJvb3RcIikuY2hpbGRyZW4ubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJzZWF0Um9vdFwiKS5jaGlsZHJlbltyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5hY3RpdmUgfHwgbi50YXJnZXRQZXJzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmtpbmdXZWlnaHRbaV0gKz0gdGhpcy5sZXZlbERhdGFKU09OLnBhcmtpbmdXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoYSkge31cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlSHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5hbGxQZXJzb25BbW91bnQ7XG4gICAgICAgIHZhciBlID0gdGhpcy5hbGxQZXJzb25BbW91bnQyO1xuICAgICAgICB0aGlzLmRpY3QuaHBDb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0O1xuICAgICAgICB0aGlzLmRpY3QuaHBJbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdCAvIGU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jYXJBbmltID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQuaXNDYXJBbmltKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdC5pc0NhckFuaW0gPSAhMDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHQucGFyZW50LnBhcmVudClcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLjlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50bygwLjEsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5pc0NhckFuaW0gPSAhMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1RpcFRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFya2luZ05vZGVzW2VdLmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgPT0gdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJjaGVja1RpcFRleHRcIiwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodCA9PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiY2hlY2tUaXBUZXh0XCIsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1JlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNXaW4gJiYgMCA9PSB0aGlzLmFsbFBlcnNvbkFtb3VudCkge1xuICAgICAgICAgICAgdGhpcy5pc1dpbiA9ICEwO1xuICAgICAgICAgICAgdmFyIGUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIG8gPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICgociA9IHRoaXMuc29ydFBlcnNvbk5vZGVzW2ldKS5sb25ndG91IHx8IHIubG9uZ3dlaSkge1xuICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiZGllXCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmxvbmd0b3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSByO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgICAgIGlmICgociA9IHRoaXMuc29ydFBlcnNvbk5vZGVzMltpXSkubG9uZ3RvdSB8fCByLmxvbmd3ZWkpIHtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImRpZVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoci5sb25ndG91KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RHJhZ29uQmFsbChlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQucm9sZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwic2hlbmdsaVwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIHQucGxheVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RyYWdvbkJhbGwobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldENvbG9yUGVyc29uSW1nID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYm94MlNwcml0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKFxuICAgICAgICAgICAgXCJmMjkwODZfXCIgKyAodCArIDEgKyA0ZTMgKyAxMDAgKiB0aGlzLl9kcmFnb25Ta2luKVxuICAgICAgICApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGZvciAodmFyIG8gPSB0Lmxlbmd0aCAtIDE7IG8gPiAwOyBvLS0pIHtcbiAgICAgICAgICAgIHZhciBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG8gKyAxKSk7XG4gICAgICAgICAgICBlID0gW3RbaV0sIHRbb11dO1xuICAgICAgICAgICAgdFtvXSA9IGVbMF07XG4gICAgICAgICAgICB0W2ldID0gZVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEFtb3VudEJ5Q29sb3IgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbdF0pIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbdF0gPSBbXTtcbiAgICAgICAgICAgIHZhciBlID0gW107XG4gICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhck5vZGVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuY2FyTm9kZUFycltpXS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgaWYgKHIuY2FyQ29sb3IgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gci5zZWF0VG90YWxBbW91bnQ7IHMgPiAwOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5yYW5kb21OdW0oMSwgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyAtPSBjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUucHVzaChuKTtcbiAgICAgICAgICAgICAgICAgICAgby5wdXNoKGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBsID0gdGhpcy5mbGF0dGVuKGUpO1xuICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5mbGF0dGVuKG8pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbdF0gPSBsO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJJbmRleFt0XSA9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0LmNvbmNhdChlLmZsYXR0ZW4obykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5jb25jYXQobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNvbnNvbGVXZWlnaHQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByID0gb1tpXTtcbiAgICAgICAgICAgIHIgPSAkbGV2ZWxfMjkwODZfY29uZmlnLmNvbG9yRGVzW2ldICsgXCI6XCIgKyByO1xuICAgICAgICAgICAgb1tpXSA9IHI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codCwgbyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRQZXJzb25Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmV2aXZlQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnJldml2ZUFyci5zaGlmdCgpO1xuICAgICAgICAgICAgdGhpcy5pc1Jldml2ZUFtb3VudCA9IDE7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmV2aXZlQW1vdW50ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RTb3J0SW5kZXhBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJzdFNvcnRJbmRleEFyci5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUGFya2luZ1dlaWdodCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNvcnRXZWlnaHQoKTtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLmNvbG9yVHlwZUFtb3VudDsgZSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFsbFdlaWdodFtlXSA9IDA7XG4gICAgICAgICAgICB0aGlzLmFsbFdlaWdodFtlXSArPSB0aGlzLmNhcldlaWdodFtlXTtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdICs9IHRoaXMucGFya2luZ1dlaWdodFtlXTtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdICs9IHRoaXMuZXh0cmFXZWlnaHRbZV07XG4gICAgICAgICAgICB0aGlzLmFsbFdlaWdodFtlXSAtPSB0aGlzLnNvcnRXZWlnaHRbZV07XG4gICAgICAgICAgICB0aGlzLmFsbFdlaWdodFtlXSA8IDAgJiYgKHRoaXMuYWxsV2VpZ2h0W2VdID0gMCk7XG4gICAgICAgICAgICAwICE9IHRoaXMuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2VdICYmXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbZV0gPj0gdGhpcy5jb2xvclBlcnNvbkFycltlXSAmJlxuICAgICAgICAgICAgICAgICh0aGlzLmFsbFdlaWdodFtlXSA9IDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmRvbUJ5V2VpZ2h0KFxuICAgICAgICAgICAgbmV3IEFycmF5KCRsZXZlbF8yOTA4Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoKS5maWxsKDEpLm1hcChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLmFsbFdlaWdodFxuICAgICAgICApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlU29ydFdlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zb3J0V2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBpZiAoIShvID0gdGhpcy5zb3J0UGVyc29uTm9kZXNbdF0pLmxvbmd0b3UgJiYgIW8ubG9uZ3dlaSAmJiBvLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gby5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2RyYWdvbkl0ZW0uZGVmYXVsdCkuZHJhZ29uQ29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0V2VpZ2h0W2VdICs9IHRoaXMubGV2ZWxEYXRhSlNPTi5zb3J0V2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodCA9IDA7IHQgPCB0aGlzLnNvcnRQZXJzb25Ob2RlczIubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgaWYgKChvID0gdGhpcy5zb3J0UGVyc29uTm9kZXMyW3RdKS5sb25ndG91IHx8IG8ubG9uZ3dlaSB8fCAhby5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlID0gby5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2RyYWdvbkl0ZW0uZGVmYXVsdCkuZHJhZ29uQ29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0V2VpZ2h0W2VdICs9IHRoaXMubGV2ZWxEYXRhSlNPTi5zb3J0V2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRDYXJDb2xvciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5jYXJOb2RlQXJyLmxlbmd0aDtcbiAgICAgICAgdmFyIGkgPSBNYXRoLnJvdW5kKCgodCArIDEpIC8gbykgKiAxMDApO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIHZhciBuID0gZVtyXTtcbiAgICAgICAgICAgIGlmIChpIDw9IG5bMV0gJiYgaSA+PSBuWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmF0Y2hNYXBbcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhdGNoTWFwW3JdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcy5yYW5kb21OdW0oMCwgdGhpcy5yYW5kb21Db2xvckFycltyXS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMucmFuZG9tQ29sb3JBcnJbcl1bYV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmF0Y2hNYXBbcl0uaW5jbHVkZXMocykgJiYgdGhpcy5yYW5kb21Db2xvck51bVtyXSA8IHRoaXMucmFuZG9tQ29sb3JBcnJbcl0ubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB0aGlzLnJhbmRvbU51bSgwLCB0aGlzLnJhbmRvbUNvbG9yQXJyW3JdLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBzID0gdGhpcy5yYW5kb21Db2xvckFycltyXVthXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb21Db2xvck51bVtyXSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYmF0Y2hNYXBbcl0ucHVzaChzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Q2FySUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5jYXJOb2RlQXJyLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkucGF0aCAtXG4gICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkucGF0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FyTm9kZUFyci5mb3JFYWNoKGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJJRCA9IG87XG4gICAgICAgICAgICBpZiAodC5pc0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBjYy5pbnN0YW50aWF0ZShlLmdldENoaWxkQnlOYW1lKFwicGF0aFwiKSk7XG4gICAgICAgICAgICAgICAgaS5wb3NpdGlvbiA9IGNjLnYyKDAsIC0yMCk7XG4gICAgICAgICAgICAgICAgaS5wYXJlbnQgPSBlO1xuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIklEXCIgKyBvO1xuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXJBbGxBbW91bnQgPSB0aGlzLmNhck5vZGVBcnIubGVuZ3RoO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0QXJyQnlMZW4gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB0ID0gdGhpcy5zb3J0Q29sb3JfbmV3O1xuICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByID0gdFtpXTtcbiAgICAgICAgICAgIGlmIChpID49IGVbMF0gLSAxICYmIGkgPD0gZVsxXSAtIDEpIHtcbiAgICAgICAgICAgICAgICBvLnB1c2gocik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRPdGhlckNhckJ5RGlzdGFuY2UgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmNhclJvb3QuY2hpbGRyZW4uY29uY2F0KHRoaXMudHVybnRhYmxlQ2FyQXJyKTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBpLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGlbcl07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIW4gfHxcbiAgICAgICAgICAgICAgICBuID09IHQgfHxcbiAgICAgICAgICAgICAgICBuLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1JlYWR5RGVzdHJveSB8fFxuICAgICAgICAgICAgICAgIG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlICE9ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuSWRsZSB8fFxuICAgICAgICAgICAgICAgICFuLmFjdGl2ZSB8fFxuICAgICAgICAgICAgICAgIG4uaXNUcmFuc3BvcnRCb3ggfHxcbiAgICAgICAgICAgICAgICBuLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1VUcmFuc3BvcnRDYXJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG8ucHVzaChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgby5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHQ7XG4gICAgICAgICAgICB2YXIgaSA9IGU7XG4gICAgICAgICAgICB2YXIgciA9IFtvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksIG8uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC1vLmhlaWdodCkpXTtcbiAgICAgICAgICAgIHZhciBuID0gW2kuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSwgaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLWkuaGVpZ2h0KSldO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoYSwgclswXSwgclsxXSwgITApIC1cbiAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoYSwgblswXSwgblsxXSwgITApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRQYXRoID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQucGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHQucGF0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZTtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgdmFyIG4gPSB0LndpZHRoO1xuICAgICAgICB2YXIgYSA9IHQuaGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5jYXJNYXBbdC51dWlkXSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FyTWFwW3QudXVpZF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYXJNYXBbdC51dWlkXS5hMSkge1xuICAgICAgICAgICAgZSA9IHRoaXMuY2FyTWFwW3QudXVpZF0uYTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLW4gLyAyLCAtYSkpO1xuICAgICAgICAgICAgdGhpcy5jYXJNYXBbdC51dWlkXS5hMSA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FyTWFwW3QudXVpZF0uYTIpIHtcbiAgICAgICAgICAgIG8gPSB0aGlzLmNhck1hcFt0LnV1aWRdLmEyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbyA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC1uIC8gMiwgMjI1MCkpO1xuICAgICAgICAgICAgdGhpcy5jYXJNYXBbdC51dWlkXS5hMiA9IG87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FyTWFwW3QudXVpZF0uYjEpIHtcbiAgICAgICAgICAgIGkgPSB0aGlzLmNhck1hcFt0LnV1aWRdLmIxO1xuICAgICAgICAgICAgciA9IHRoaXMuY2FyTWFwW3QudXVpZF0uYjI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIobiAvIDIsIC1hKSk7XG4gICAgICAgICAgICByID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIobiAvIDIsIDIyNTApKTtcbiAgICAgICAgICAgIHRoaXMuY2FyTWFwW3QudXVpZF0uYjEgPSBpO1xuICAgICAgICAgICAgdGhpcy5jYXJNYXBbdC51dWlkXS5iMiA9IHI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHMgPSB0aGlzLmdldE90aGVyQ2FyQnlEaXN0YW5jZSh0KTtcbiAgICAgICAgdmFyIGMgPSAhMTtcbiAgICAgICAgaWYgKHQuY29sbGlzaW9uQXJyKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdC5jb2xsaXNpb25BcnIgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbCA9IDE7XG4gICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgcy5sZW5ndGg7IGgrKykge1xuICAgICAgICAgICAgdmFyIHAgPSBzW2hdO1xuICAgICAgICAgICAgaWYgKHAgIT0gdCkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciB1ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBnID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBtID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBmID0gcC53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHAuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhck1hcFtwLnV1aWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJNYXBbcC51dWlkXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJNYXBbcC51dWlkXS5hMSkge1xuICAgICAgICAgICAgICAgICAgICBkID0gdGhpcy5jYXJNYXBbcC51dWlkXS5hMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLWYgLyAyLCAtdikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhck1hcFtwLnV1aWRdLmExID0gZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyTWFwW3AudXVpZF0uZWxlbWVudEEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHUgPSB0aGlzLmNhck1hcFtwLnV1aWRdLmVsZW1lbnRBMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1ID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLWYgLyAyLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyTWFwW3AudXVpZF0uZWxlbWVudEEyID0gdTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyTWFwW3AudXVpZF0uZWxlbWVudEMxKSB7XG4gICAgICAgICAgICAgICAgICAgIGcgPSB0aGlzLmNhck1hcFtwLnV1aWRdLmVsZW1lbnRDMTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IHRoaXMuY2FyTWFwW3AudXVpZF0uZWxlbWVudEMyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGcgPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihmIC8gMiArIDEsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IHAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC1mIC8gMiAtIDEsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJNYXBbcC51dWlkXS5lbGVtZW50QzEgPSBnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhck1hcFtwLnV1aWRdLmVsZW1lbnRDMiA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIGQsIHUpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShpLCByLCBkLCB1KSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoZSwgbywgZywgbSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGksIHIsIGcsIG0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbCArPSBwLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsICs9IHRoaXMuZ2V0UGF0aChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgcmV0dXJuICh0LnBhdGggPSBsKSwgbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodC5wYXRoID0gMSksIDE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZldGNoTWF4SW5kZXggPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gdFxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWUgLSB0LnZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbyA8IGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0LmtleTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0TGV2ZWxQcm9ncmVzc0J5Q2FyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICB2YXIgZSA9IDA7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdC5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgdmFyIGkgPSB0W29dO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGkgJiZcbiAgICAgICAgICAgICAgICBpLmFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09ICRsZXZlbF8yOTA4Nl9jb25maWcuQ2FyU3RhdGUuSWRsZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciByID0gKCh0aGlzLmNhckFsbEFtb3VudCAtIGUpIC8gdGhpcy5jYXJBbGxBbW91bnQpICogMTAwO1xuICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLmhhcmRQb2ludHMpIHtcbiAgICAgICAgICAgIGZvciAobyA9IDA7IG8gPCB0aGlzLmxldmVsRGF0YUpTT04uaGFyZFBvaW50cy5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5sZXZlbERhdGFKU09OLmhhcmRQb2ludHNbb107XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhcmRQb2ludHNJbmRleHMuaW5jbHVkZXMobykgJiYgblswXSA8PSByICYmIG5bMV0gPj0gcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuinpuWPkeWNoeeCuVwiLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXJkUG9pbnRzSW5kZXhzLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmFuZG9tQnlXZWlnaHQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodC5sZW5ndGggIT0gZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInJhbmRvbTLovpPlhaXkuI3lkIjms5U6IHJlc3VsdEFyci5sZW5ndGggIT0gd2VpZ2h0QXJyLmxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldExldmVsUHJvZ3Jlc3NCeUNhcigpKSB7XG4gICAgICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgICAgICB2YXIgaSA9IGVbMF07XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGVbcl07XG4gICAgICAgICAgICAgICAgaWYgKChuIDwgaSAmJiAwICE9IG4pIHx8ICgwID09IGkgJiYgMCAhPSBuKSkge1xuICAgICAgICAgICAgICAgICAgICBvID0gcjtcbiAgICAgICAgICAgICAgICAgICAgaSA9IG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICBpZiAociAhPSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIGVbcl0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5mZXRjaE1heEluZGV4KGUsIHRoaXMubGV2ZWxEYXRhSlNPTi5saW1pdFJhbmsgfHwgJGxldmVsXzI5MDg2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICBlW3JdO1xuICAgICAgICAgICAgICAgIGEuaW5jbHVkZXMocikgfHwgKGVbcl0gPSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcnJheXNFcXVhbChlLCBuZXcgQXJyYXkoJGxldmVsXzI5MDg2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGgpLmZpbGwoMCkpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChyID0gMDsgciA8ICRsZXZlbF8yOTA4Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltyXS5sZW5ndGggJiYgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbcl0gPCB0aGlzLmNvbG9yUGVyc29uQXJyW3JdKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucHVzaChyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc1t0aGlzLnJhbmRvbU51bSgwLCBzLmxlbmd0aCAtIDEpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IDA7XG4gICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgdmFyIGggPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBmb3IgKHZhciBwID0gZS5sZW5ndGggLSAxOyBwID49IDA7IHAtLSkge1xuICAgICAgICAgICAgYyArPSBlW3BdO1xuICAgICAgICB9XG4gICAgICAgIGggKj0gYztcbiAgICAgICAgZm9yIChwID0gZS5sZW5ndGggLSAxOyBwID49IDA7IHAtLSkge1xuICAgICAgICAgICAgaWYgKGggPD0gKGwgKz0gZVtwXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdFtwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFycmF5c0VxdWFsID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHQubGVuZ3RoICE9PSBlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdC5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgaWYgKHRbb10gIT09IGVbb10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmFuZG9tTnVtID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSBlIC0gdDtcbiAgICAgICAgdmFyIHIgPSBvIHx8IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiB0ICsgTWF0aC5yb3VuZChyICogaSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRMb2NhbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsRGF0YVt0XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhW3RdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiXCIgKyB0aGlzLmxldmVsSUQgKyB0KTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldExvY2FsID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGFbdF0gPSBlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJcIiArIHRoaXMubGV2ZWxJRCArIHQsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodCwgZSwgbykge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMC44O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcbiAgICAgICAgICAgIG8gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LnRpcFByZWZhYik7XG4gICAgICAgIHRoaXMuZGljdC5nYW1lLmFkZENoaWxkKGkpO1xuICAgICAgICBpLmFjdGl2ZSA9ICEwO1xuICAgICAgICBpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0O1xuICAgICAgICBpLnNldFBvc2l0aW9uKGNjLnYyKDAsIC02MCkpO1xuICAgICAgICBpLm9wYWNpdHkgPSAwO1xuICAgICAgICBjYy50d2VlbihpKVxuICAgICAgICAgICAgLmJ5KDAuMywge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MigwLCA2MCksXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KGUpXG4gICAgICAgICAgICAuYnkoMC4zLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKDAsIDYwKSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAtMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudHJhbnNmb3JtUG9zaXRpb24gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3NvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NvcnRpbmcgPSAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU29ydEFuaW0gPSAhMDtcbiAgICAgICAgICAgICAgICBmb3IgKHQgPSB0aGlzLl9idWxsZXRNb3ZlTGlzdC5sZW5ndGggLSAxOyB0ID49IDA7IHQtLSkge1xuICAgICAgICAgICAgICAgICAgICBlID0gdGhpcy5fYnVsbGV0TW92ZUxpc3RbdF07XG4gICAgICAgICAgICAgICAgICAgIG8gPSBlW3RoaXMuX2RyYWdvblRhcmdldF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1bGxldE1vdmVMaXN0LnNwbGljZSh0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQZXJzb25BbW91bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVNob3dQZXJzb25BbW91bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcCgpO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIChpID0gb1t0aGlzLl9pdGVtTm9kZV0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoaS5yZW1vdmVGcm9tUGFyZW50KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAoaVt0aGlzLl9pdGVtRGVwZW5kXSA9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbU5vZGVMaXN0LnNwbGljZSh0aGlzLl9pdGVtTm9kZUxpc3QuaW5kZXhPZihpKSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtUG9vbExpc3QucHVzaChpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUl0ZW0xQmlnU3BpbmUobyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUl0ZW0xU21hbGxTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTRTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTVTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCb2R5KG8pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1bGxldE1vZGVsTGlzdC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHIuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKG8gPSByLnNvcnRQZXJzb25Ob2Rlc1t0XSkubG9uZ3RvdSB8fCBvLmxvbmd3ZWkgfHwgb1tyLl9idWxsZXRUYXJnZXRdKSAmJiBvLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHIucmFuZG9tTnVtKDAsICRsZXZlbF8yOTA4Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0Q29sb3JQZXJzb25JbWcoZSwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh0ID0gMDsgdCA8IHIuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobyA9IHIuc29ydFBlcnNvbk5vZGVzMlt0XSkubG9uZ3RvdSB8fCBvLmxvbmd3ZWkgfHwgb1tyLl9idWxsZXRUYXJnZXRdIHx8ICFvLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSByLnJhbmRvbU51bSgwLCAkbGV2ZWxfMjkwODZfY29uZmlnLmNvbG9yRGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnNldENvbG9yUGVyc29uSW1nKGUsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgICAgICAyLjJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEuNSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgci5pc1NvcnRBbmltID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByLmlzV2luID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByLmNvbnNvbGVXZWlnaHQoXCLmgLvmnYPph41cIiwgci5hbGxXZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmjpLpmJ/popzoibLpobrluo9cIiwgci5mZXRjaE1heEluZGV4KHIuYWxsV2VpZ2h0LCAkbGV2ZWxfMjkwODZfY29uZmlnLmNvbG9yRGVzLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByLmZldGNoTWF4SW5kZXgoci5hbGxXZWlnaHQsICRsZXZlbF8yOTA4Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEFycmF5KCRsZXZlbF8yOTA4Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoKS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobCA9IHIuc29ydFBlcnNvbk5vZGVzW29dKS5sb25ndG91IHx8IGwubG9uZ3dlaSB8fCBsW3IuX2J1bGxldFRhcmdldF0gfHwgIWwucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtsLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfZHJhZ29uSXRlbS5kZWZhdWx0KS5kcmFnb25Db2xvcl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgci5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChsID0gci5zb3J0UGVyc29uTm9kZXMyW29dKS5sb25ndG91IHx8IGwubG9uZ3dlaSB8fCBsW3IuX2J1bGxldFRhcmdldF0gfHwgIWwucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtsLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfZHJhZ29uSXRlbS5kZWZhdWx0KS5kcmFnb25Db2xvcl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHIuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCArIHIuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IG47IG8rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLnBlcnNvblBvc1Jvb3QyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzIHx8IGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzICYmICFjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzICYmIGMgJiYgKGEgPSAhKCFyLnNvcnRQZXJzb25Ob2Rlc1tzXSB8fCAoci5zb3J0UGVyc29uTm9kZXMyW2NdICYmIHMgPiBjKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSByLnNvcnRQZXJzb25Ob2Rlc1tzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSByLnNvcnRQZXJzb25Ob2RlczJbY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobC5sb25ndG91IHx8IGwubG9uZ3dlaSB8fCBsW3IuX2J1bGxldFRhcmdldF0pICYmIGwucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwID09IGVbaF0gJiYgKChoID0gdFsoaSArPSAxKV0pLCAhKGkgPj0gJGxldmVsXzI5MDg2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW2hdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9kcmFnb25JdGVtLmRlZmF1bHQpLmRyYWdvbkNvbG9yID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5zZXRDb2xvclBlcnNvbkltZyhoLCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJGxldmVsXzI5MDg2X2NvbmZpZy5jb2xvckRlc1toXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgci5pc1NvcnRpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJldml2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXZpdmVCYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yb2xlQ3VySHAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlQ3VySHAgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJvbGVIcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHQgPSB0aGlzLl9idWxsZXRNb3ZlTGlzdC5sZW5ndGggLSAxOyB0ID49IDA7IHQtLSkge1xuICAgICAgICAgICAgICAgICAgICBlID0gdGhpcy5fYnVsbGV0TW92ZUxpc3RbdF07XG4gICAgICAgICAgICAgICAgICAgIG8gPSBlW3RoaXMuX2RyYWdvblRhcmdldF07XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVsbGV0TW92ZUxpc3Quc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBlcnNvbkFtb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpU2hvd1BlcnNvbkFtb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwKCk7XG4gICAgICAgICAgICAgICAgICAgIChpID0gb1t0aGlzLl9pdGVtTm9kZV0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoaS5yZW1vdmVGcm9tUGFyZW50KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAoaVt0aGlzLl9pdGVtRGVwZW5kXSA9IG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXRlbU5vZGVMaXN0LnNwbGljZSh0aGlzLl9pdGVtTm9kZUxpc3QuaW5kZXhPZihpKSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pdGVtUG9vbExpc3QucHVzaChpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUl0ZW0xQmlnU3BpbmUobyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUl0ZW0xU21hbGxTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTRTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlSXRlbTVTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCb2R5KG8pO1xuICAgICAgICAgICAgICAgICAgICBlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWxsZXRNb2RlbExpc3QucHVzaChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyYWdvbkF0dGFjayA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmFnb25BdHRhY2tpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHJhZ29uQXR0YWNrMiA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmFnb25BdHRhY2tpbmcyID0gITE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXVt0aGlzLl9tb3ZlRW5kXSA9ICExO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0UGVyc29uTm9kZXMyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2RlczJbMF1bdGhpcy5fbW92ZUVuZF0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0UGVyc29uTm9kZXMyWzBdLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJvZHlSZXZpdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmV2aXZlQmFjayA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSZXZpdmVTb3J0ID0gITA7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZpdmVBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICByID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbi5zb3J0UGVyc29uTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbi5zb3J0UGVyc29uTm9kZXMyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgaS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpW3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhLmxvbmd0b3UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYS5sb25nd2VpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFbbi5fdHVybkJhY2tEZXN0cm95XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl9kcmFnb25JdGVtLmRlZmF1bHQpLmRyYWdvbkNvbG9yID09IG9cbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSAhZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ29uOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRMaXN0MTogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBuLmlzV2luID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSBuLmNhbm5vblJvb3QuY2hpbGRyZW5bZV0sIGkgPSBvW24uX2Nhbm5vblR5cGVdLCBhID0gMDsgYSA8IG9bbi5fY2Fubm9uTnVtXTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4ucGVyc29uUG9zUm9vdDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChzID0gcihjLCB0LCBpKSkuZHJhZ29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gcy5pbnB1dExpc3QxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gcihjLCB0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBsLmRyYWdvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLmlucHV0TGlzdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gKHMgPSByKGMsIHQsIGkpKS5kcmFnb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY1tuLl90dXJuQmFja0Rlc3Ryb3ldID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbaV0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBuLmNvbG9yUGVyc29uQW1vdW50QXJyW2ldLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmNvbG9yUGVyc29uQW1vdW50QXJyW2ldW2hdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jb2xvclBlcnNvbkFtb3VudEFycltpXVtoXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09IG4uY29sb3JQZXJzb25BbW91bnRBcnJbaV1baF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY29sb3JQZXJzb25BbW91bnRBcnJbaV0ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5hbGxQZXJzb25BbW91bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnVwZGF0ZUhwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjA1ICogZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJjYW5ub25cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJleGl0XCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImNhbm5vblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwiY2Fubm9uXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwiYm9keVwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uZ2V0Q2hpbGRCeU5hbWUoXCJ4aWFvc2hpXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBvLmdldENoaWxkQnlOYW1lKFwieGlhb3NoaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9IGNjLmluc3RhbnRpYXRlKG4uZGljdFtcImYyOTA4Ni54aWFvc2hpXCJdKSkubmFtZSA9IFwieGlhb3NoaVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBhcmVudCA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQucG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnJlbW92ZUZyb21QYXJlbnQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5fY2Fubm9uTGlzdC5wdXNoKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5wYXJraW5nLmlzRW1wdHkgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucGFya2luZy5jYXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5tb3ZlQ2FyQW1vdW50IC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IG4uY2Fubm9uUm9vdC5jaGlsZHJlbi5sZW5ndGggLSAxOyBvID49IDA7IG8tLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZShvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmlzUmV2aXZlU29ydCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5yb2xlTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJoYWlwYVwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3Jldml2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAoISh0aGlzLmlzUmV2aXZlQmFjayB8fCB0aGlzLmlzUmV2aXZlU29ydCB8fCB0aGlzLmRpY3QuZGF6aGFvLmFjdGl2ZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZ1bmNfaGFzTG9ja1BhcmtpbmcoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW2VdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoby5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSAmJiBvLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwiZW1wdHlcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlVbmxvY2tTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gby5nZXRDaGlsZEJ5TmFtZShcInVubG9ja1RpcHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvLmlzRW1wdHkgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFya2luZ05vZGVzLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJ1bmxvY2tWaWRlb0xvY2tcIiwgdGhpcy5mdW5jX2hhc0xvY2tQYXJraW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZpdmVBbmltKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5yZXZpdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXZpdmVBbmltKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5yZXZpdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmV2aXZlQW5pbSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdGhpcy5pc1dpbiA9ICEwO1xuICAgICAgICB0aGlzLmRpY3QuZGF6aGFvLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmRpY3QuZGF6aGFvLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsICExKTtcbiAgICAgICAgdGhpcy5kaWN0LmRhemhhby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5kaWN0LmRhemhhby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICBlLmRpY3QuZGF6aGFvLmFjdGl2ZSA9ICExO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2hhc0xvY2tQYXJraW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICBpZiAoZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSAmJiBlLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2NoZWNrU2xvd0Rvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1dpbiAmJiAhdGhpcy5fcmVtb3ZlU3RhZ2UgJiYgIXRoaXMuX3Nsb3dTdGFydCkge1xuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3Nsb3dEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9zbG93U3RhcnQgPSAhMDtcbiAgICAgICAgdGhpcy5fc2xvd0N1ciA9IDA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2l0ZW0xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJmMjkwODZfaXRlbTFcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2l0ZW01ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJmMjkwODZfaXRlbTVcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2l0ZW02ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZjI5MDg2X2FkZENvaW5cIiwgMjAsIHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19pdGVtNyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImYyOTA4Nl9hZGRDb2luXCIsIDUwMCwgdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2l0ZW0xQ0IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2l0ZW0xQ3VyID0gMDtcbiAgICAgICAgdGhpcy5faXRlbTFTdGFydCA9ICEwO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBpZiAoKGUgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1t0XSkucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubG9uZ3RvdSB8fCBlLmxvbmd3ZWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SXRlbTFCaWdTcGluZShlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ICUgNSA9PSAwICYmIHRoaXMuc2hvd0l0ZW0xU21hbGxTcGluZShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh0ID0gMDsgdCA8IHRoaXMuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICBpZiAoKGUgPSB0aGlzLnNvcnRQZXJzb25Ob2RlczJbdF0pLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChlLmxvbmd0b3UgfHwgZS5sb25nd2VpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW0xQmlnU3BpbmUoZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdCAlIDUgPT0gMCAmJiB0aGlzLnNob3dJdGVtMVNtYWxsU3BpbmUoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2l0ZW01Q0IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2l0ZW01Q3VyID0gMDtcbiAgICAgICAgdGhpcy5faXRlbTVTdGFydCA9ICEwO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuY2Fubm9uUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmNhbm5vblJvb3QuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICB0aGlzLnNob3dJdGVtNVNwaW5lKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93SXRlbTFCaWdTcGluZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdC5nZXRDaGlsZEJ5TmFtZShcIml0ZW0xQmlnU3BpbmVcIik7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICAobyA9IHRoaXMuX2l0ZW0xQmlnU3BpbmVMaXN0LnNpemUoKVxuICAgICAgICAgICAgICAgID8gdGhpcy5faXRlbTFCaWdTcGluZUxpc3QuZ2V0KClcbiAgICAgICAgICAgICAgICA6IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdFtcImYyOTA4Ni5iaW5na3VhaV9kYVwiXSkpLm5hbWUgPSBcIml0ZW0xQmlnU3BpbmVcIjtcbiAgICAgICAgICAgIG8ucGFyZW50ID0gdDtcbiAgICAgICAgICAgIG8uYWN0aXZlID0gITA7XG4gICAgICAgICAgICBvLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVJdGVtMUJpZ1NwaW5lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiaXRlbTFCaWdTcGluZVwiKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUuYWN0aXZlID0gITE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dJdGVtMVNtYWxsU3BpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtMVNtYWxsU3BpbmVcIikpIHtcbiAgICAgICAgICAgIHZhciBlID0gdm9pZCAwO1xuICAgICAgICAgICAgKGUgPSB0aGlzLl9pdGVtMVNtYWxsU3BpbmVMaXN0LnNpemUoKVxuICAgICAgICAgICAgICAgID8gdGhpcy5faXRlbTFTbWFsbFNwaW5lTGlzdC5nZXQoKVxuICAgICAgICAgICAgICAgIDogY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0W1wiZjI5MDg2LmJpbmdrdWFpX3hpYW9cIl0pKS5uYW1lID0gXCJpdGVtMVNtYWxsU3BpbmVcIjtcbiAgICAgICAgICAgIGUucGFyZW50ID0gdDtcbiAgICAgICAgICAgIGUuYWN0aXZlID0gITA7XG4gICAgICAgICAgICBlLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVJdGVtMVNtYWxsU3BpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtMVNtYWxsU3BpbmVcIik7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICB0aGlzLl9pdGVtMVNtYWxsU3BpbmVMaXN0LnB1dChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0l0ZW00U3BpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtNFNwaW5lXCIpKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIChlID0gdGhpcy5faXRlbTRTcGluZUxpc3Quc2l6ZSgpXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9pdGVtNFNwaW5lTGlzdC5nZXQoKVxuICAgICAgICAgICAgICAgIDogY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0W1wiZjI5MDg2LnB0X3RleGlhbzFcIl0pKS5uYW1lID0gXCJpdGVtNFNwaW5lXCI7XG4gICAgICAgICAgICBlLnBhcmVudCA9IHQ7XG4gICAgICAgICAgICBlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYyKDAsIC0zNSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVJdGVtNFNwaW5lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiaXRlbTRTcGluZVwiKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICBlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW00U3BpbmVMaXN0LnB1dChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0l0ZW01U3BpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtNVNwaW5lXCIpKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIChlID0gdGhpcy5faXRlbTVTcGluZUxpc3Quc2l6ZSgpXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9pdGVtNVNwaW5lTGlzdC5nZXQoKVxuICAgICAgICAgICAgICAgIDogY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0W1wiZjI5MDg2LnB0X3RleGlhbzJcIl0pKS5uYW1lID0gXCJpdGVtNVNwaW5lXCI7XG4gICAgICAgICAgICBlLnBhcmVudCA9IHQ7XG4gICAgICAgICAgICBlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYyKDAsIC0zNSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZGVJdGVtNVNwaW5lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiaXRlbTVTcGluZVwiKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICBlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW01U3BpbmVMaXN0LnB1dChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd1d1ZGkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5yb2xlTm9kZS5nZXRDaGlsZEJ5TmFtZShcInd1ZGlcIik7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0LmFjdGl2ZSA9ICEwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3RbXCJmMjkwODYud3VkaVwiXSk7XG4gICAgICAgICAgICBlLm5hbWUgPSBcInd1ZGlcIjtcbiAgICAgICAgICAgIGUucGFyZW50ID0gdGhpcy5yb2xlTm9kZTtcbiAgICAgICAgICAgIGUucG9zaXRpb24gPSBjYy52MigpO1xuICAgICAgICAgICAgZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZVd1ZGkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGUgPSB0aGlzLnJvbGVOb2RlLmdldENoaWxkQnlOYW1lKFwid3VkaVwiKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuOCAqIGUuc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYW5nZURyYWdvblNraW4gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodGhpcy5fZHJhZ29uU2tpbikge1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fZHJhZ29uU2tpbikge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQubG9uZ3RvdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IFwiZjI5MDg2Lmxvbmd0b3VfeXMsaWRsZTFcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Lmxvbmd3ZWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gXCJmMjkwODYubG9uZ3dlaV95cyxpZGxlMVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLmRpY3RbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gaS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgaWYgKG4ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IG5bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhID0gby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHZhciBzID0gdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHMuc2tlbGV0b25EYXRhID0gYS5za2VsZXRvbkRhdGE7XG4gICAgICAgICAgICAgICAgcy5kZWZhdWx0U2tpbiA9IGEuZGVmYXVsdFNraW47XG4gICAgICAgICAgICAgICAgcy5kZWZhdWx0QW5pbWF0aW9uID0gciB8fCBhLnNrZWxldG9uRGF0YS5nZXRSdW50aW1lRGF0YSgpLmFuaW1hdGlvbnNbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICBzLnNldEFuaW1hdGlvbigwLCByIHx8IGEuc2tlbGV0b25EYXRhLmdldFJ1bnRpbWVEYXRhKCkuYW5pbWF0aW9uc1swXS5uYW1lLCBzLmxvb3ApO1xuICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5kaWN0W1wiZjI5MDg2LnhpYW9jaHVfeXNcIl0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHRoaXMuZGljdC5idWxsZXRQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCJ4aWFvY2h1XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgbC5za2VsZXRvbkRhdGEgPSBjLnNrZWxldG9uRGF0YTtcbiAgICAgICAgICAgICAgICBsLmRlZmF1bHRTa2luID0gYy5kZWZhdWx0U2tpbjtcbiAgICAgICAgICAgICAgICBsLmRlZmF1bHRBbmltYXRpb24gPSBjLnNrZWxldG9uRGF0YS5nZXRSdW50aW1lRGF0YSgpLmFuaW1hdGlvbnNbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICBsLnNldEFuaW1hdGlvbigwLCBjLnNrZWxldG9uRGF0YS5nZXRSdW50aW1lRGF0YSgpLmFuaW1hdGlvbnNbMF0ubmFtZSwgcy5sb29wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYW5nZVJvbGVTa2luID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JvbGVTa2luKSB7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHIgPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9yb2xlU2tpbikge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgaSA9IFwiZjI5MDg2Lmdvbmd6aHUxXCI7XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLmRpY3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaSA9IFwiZjI5MDg2Lmdvbmd6aHUyXCI7XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLmRpY3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaSA9IFwiZjI5MDg2Lmdvbmd6aHUzXCI7XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLmRpY3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgaSA9IFwiZjI5MDg2Lmd1b3dhbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMuZGljdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBpID0gXCJmMjkwODYud2FuZ3ppXCI7XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLmRpY3RbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgaSA9IFwiZjI5MDg2Lmh1YWt1Y2hhXCI7XG4gICAgICAgICAgICAgICAgICAgIG8gPSB0aGlzLmRpY3RbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gaS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgaWYgKG4ubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IG5bMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhID0gby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIHZhciBzID0gdC5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgICAgICBzLnNrZWxldG9uRGF0YSA9IGEuc2tlbGV0b25EYXRhO1xuICAgICAgICAgICAgICAgIHMuZGVmYXVsdFNraW4gPSBhLmRlZmF1bHRTa2luO1xuICAgICAgICAgICAgICAgIHMuZGVmYXVsdEFuaW1hdGlvbiA9IHIgfHwgYS5za2VsZXRvbkRhdGEuZ2V0UnVudGltZURhdGEoKS5hbmltYXRpb25zWzBdLm5hbWU7XG4gICAgICAgICAgICAgICAgcy5zZXRBbmltYXRpb24oMCwgciB8fCBhLnNrZWxldG9uRGF0YS5nZXRSdW50aW1lRGF0YSgpLmFuaW1hdGlvbnNbMF0ubmFtZSwgcy5sb29wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVJvbGVIcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3Qucm9sZUhwTm9kZTtcbiAgICAgICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwibGlzdFwiKTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmRpY3Qucm9sZUhwSW1nO1xuICAgICAgICBpZiAoZS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcm9sZUN1ckhwIDwgZS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gZS5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSB0aGlzLl9yb2xlQ3VySHA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBlLmNoaWxkcmVuW2ldLnJlbW92ZUZyb21QYXJlbnQoITApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcm9sZUN1ckhwOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGNjLmluc3RhbnRpYXRlKG8pO1xuICAgICAgICAgICAgICAgIHIucGFyZW50ID0gdC5nZXRDaGlsZEJ5TmFtZShcImxpc3RcIik7XG4gICAgICAgICAgICAgICAgci5wb3NpdGlvbiA9IGNjLnYyKCk7XG4gICAgICAgICAgICAgICAgci5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoMSA9PSB0aGlzLl9yb2xlQ3VySHApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBlLmNoaWxkcmVuQ291bnQ7IGkpIHtcbiAgICAgICAgICAgICAgICBlLmNoaWxkcmVuW2ldLnJlbW92ZUZyb21QYXJlbnQoITApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS53aWR0aCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLndpZHRoID0gby53aWR0aCAqIHRoaXMuX3JvbGVDdXJIcDtcbiAgICAgICAgfVxuICAgICAgICBlLmdldENvbXBvbmVudChjYy5MYXlvdXQpLnVwZGF0ZUxheW91dCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlUm9sZUhwUG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3Qucm9sZUhwTm9kZS5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtUG9zaXRpb24odGhpcy5yb2xlTm9kZSwgdGhpcy5kaWN0LnJvbGVIcE5vZGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0RyYWdvbkJhbGwgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5kcmFnb25CYWxsSW1nKTtcbiAgICAgICAgdmFyIGkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuZHJhZ29uQmFsbEJnKTtcbiAgICAgICAgby5wYXJlbnQgPSB0aGlzLmRpY3QuZHJhZ29uQmFsbEltZy5wYXJlbnQ7XG4gICAgICAgIGkucGFyZW50ID0gdGhpcy5kaWN0LmRyYWdvbkJhbGxCZy5wYXJlbnQ7XG4gICAgICAgIG8uYWN0aXZlID0gITA7XG4gICAgICAgIGkuYWN0aXZlID0gITA7XG4gICAgICAgIGkuc2NhbGUgPSAwLjU7XG4gICAgICAgIG8uc2V0U2libGluZ0luZGV4KDk5OSk7XG4gICAgICAgIG8ucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHQsIG8pO1xuICAgICAgICBpLnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm1Qb3NpdGlvbih0LCBpKTtcbiAgICAgICAgY2MudHdlZW4oaSlcbiAgICAgICAgICAgIC50bygxLCB7XG4gICAgICAgICAgICAgICAgYW5nbGU6IDM2MFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpLmFuZ2xlID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudW5pb24oKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKG8pXG4gICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgIC50bygwLjUsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy50cmFuc2Zvcm1Qb3NpdGlvbih0aGlzLnJvbGVOb2RlLCBvKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG8uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgby5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICBjYy50d2VlbihpKVxuICAgICAgICAgICAgLmRlbGF5KDEpXG4gICAgICAgICAgICAudG8oMC41LCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMudHJhbnNmb3JtUG9zaXRpb24odGhpcy5yb2xlTm9kZSwgaSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICBpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kb1JvbGVMZXZlbDEwU2tpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3JvbGVMZXZlbDEwQ291bnQgPSAxO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBpZiAoKGUgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1t0XSkucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGUubG9uZ3RvdSB8fCBlLmxvbmd3ZWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SXRlbTFCaWdTcGluZShlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ICUgNSA9PSAwICYmIHRoaXMuc2hvd0l0ZW0xU21hbGxTcGluZShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh0ID0gMDsgdCA8IHRoaXMuc29ydFBlcnNvbk5vZGVzMi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICBpZiAoKGUgPSB0aGlzLnNvcnRQZXJzb25Ob2RlczJbdF0pLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChlLmxvbmd0b3UgfHwgZS5sb25nd2VpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW0xQmlnU3BpbmUoZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdCAlIDUgPT0gMCAmJiB0aGlzLnNob3dJdGVtMVNtYWxsU3BpbmUoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kb0RyYWdvbkF0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnb25BdHRhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnb25BdHRhY2tpbmcgPSAhMDtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5zb3J0UGVyc29uTm9kZXNbMF07XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcy50cmFuc2Zvcm1Qb3NpdGlvbih0aGlzLnJvbGVOb2RlLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAoby54ID49IGUueCkge1xuICAgICAgICAgICAgICAgICAgICBlLnNjYWxlWCA9IDAuOTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLnNjYWxlWCA9IC0wLjk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGUpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdC5fcm9sZUxldmVsMkNvdW50ICYmIHQuX3JvbGVMZXZlbCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fcm9sZUxldmVsMkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zaG93V3VkaSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuZ3J5XCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hZGRBbmltYXRpb24oMCwgXCJpZGxlMVwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5fcm9sZUxldmVsMkNvdW50ICYmIHQuX3JvbGVMZXZlbDJDdXJUaW1lIDwgdC5fcm9sZUxldmVsMlRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9yb2xlQ3VySHAtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZVJvbGVIcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Ll9yb2xlQ3VySHAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJvbGVOb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInNoaWJhaVwiLCAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImlkbGUyXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pc1dpbiA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImxldmVsUmV2aXZlSGVscGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbFJldml2ZUhlbHBlci5kZWZhdWx0LmxldmVsRmFpbEV2ZW50KFwi5piv5ZCm6ZyA6KaB5aSN5rS7XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5mdW5jX3Jldml2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMS41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJvbGVOb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInNoaWJhaVwiLCAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnJvbGVOb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEFuaW1hdGlvbigwLCBcImhhaXBhXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSh0aGlzLl9kcmFnb25BdHRhY2tJbnRlcnZhbClcbiAgICAgICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnb25BdHRhY2tpbmcyKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ29uQXR0YWNraW5nMiA9ICEwO1xuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXTtcbiAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgbyA9IHRoaXMudHJhbnNmb3JtUG9zaXRpb24odGhpcy5yb2xlTm9kZSwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKG8ueCA+PSBpLngpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5zY2FsZVggPSAwLjk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaS5zY2FsZVggPSAtMC45O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy50d2VlbihpKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXQuX3JvbGVMZXZlbDJDb3VudCAmJiB0Ll9yb2xlTGV2ZWwgPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX3JvbGVMZXZlbDJDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc2hvd1d1ZGkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmdyeVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuYWRkQW5pbWF0aW9uKDAsIFwiaWRsZTFcIiwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX3JvbGVMZXZlbDJDb3VudCAmJiB0Ll9yb2xlTGV2ZWwyQ3VyVGltZSA8IHQuX3JvbGVMZXZlbDJUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fcm9sZUN1ckhwLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC51cGRhdGVSb2xlSHAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5fcm9sZUN1ckhwIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yb2xlTm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJzaGliYWlcIiwgITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJpZGxlMlwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaXNXaW4gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJsZXZlbFJldml2ZUhlbHBlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxSZXZpdmVIZWxwZXIuZGVmYXVsdC5sZXZlbEZhaWxFdmVudChcIuaYr+WQpumcgOimgeWkjea0u1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZnVuY19yZXZpdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yb2xlTm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJzaGliYWlcIiwgITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5yb2xlTm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRBbmltYXRpb24oMCwgXCJoYWlwYVwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkodGhpcy5fZHJhZ29uQXR0YWNrSW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfY2hlY2tSZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLmlzV2luICYmXG4gICAgICAgICAgICAhdGhpcy5fcmVtb3ZlU3RhZ2UgJiZcbiAgICAgICAgICAgIHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5sZW5ndGggJiZcbiAgICAgICAgICAgICEodGhpcy5jYXJSb290LmNoaWxkcmVuLmxlbmd0aCAtIHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCA8PSAwKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZ1bmNfY2hlY2tSZW1vdmUoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC50cmFuc3BvcnRMYXllcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC50cmFuc3BvcnRMYXllci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X3RyYW5zcG9ydC5kZWZhdWx0KS5pc01vdmUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZVN0YWdlID0gITA7XG4gICAgICAgICAgICBpZiAodGhpcy5fdGlwUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGlwUmVtb3ZlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC50aXBQcmVmYWIpO1xuICAgICAgICAgICAgICAgIHQucGFyZW50ID0gdGhpcy5kaWN0LnRpcFByZWZhYi5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgdC53aWR0aCA9IDUwMDtcbiAgICAgICAgICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IDwgMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIHQueSA9IDEwMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0LnkgPSAxODg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuc2NhbGUgPSAwLjg7XG4gICAgICAgICAgICAgICAgdC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB0LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLor7fpgInmi6nnrrHlrZBcIjtcbiAgICAgICAgICAgICAgICB0aGlzLl90aXBSZW1vdmUgPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHZhciBvID0gZnVuY3Rpb24gKHQsIG8sIGkpIHtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICByID0gZS5zb3J0UGVyc29uTm9kZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSBlLnNvcnRQZXJzb25Ob2RlczI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHIubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHJbbl07XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5sb25ndG91IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmxvbmd3ZWkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbZS5fYnVsbGV0VGFyZ2V0XSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYVtlLl90dXJuQmFja0Rlc3Ryb3ldIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnJlYWR5RGVzdHJveSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2RyYWdvbkl0ZW0uZGVmYXVsdCkuZHJhZ29uQ29sb3IgIT0gaVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBhO1xuICAgICAgICAgICAgICAgICAgICBvID0gIW87XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZHJhZ29uOiB0LFxuICAgICAgICAgICAgICAgIGlucHV0TGlzdDE6IG9cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3JlbW92ZUNsaWNrID0gITA7XG4gICAgICAgIHRoaXMuX3RpcFJlbW92ZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciByID0gITA7XG4gICAgICAgIHZhciBuID0gdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3I7XG4gICAgICAgIHZhciBhID0gW107XG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDg2X2JveENhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50OyBzKyspIHtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzb25Qb3NSb290Mikge1xuICAgICAgICAgICAgICAgIGwgPSAoYyA9IG8obCwgciwgbikpLmRyYWdvbjtcbiAgICAgICAgICAgICAgICByID0gYy5pbnB1dExpc3QxO1xuICAgICAgICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IG8obCwgciwgbik7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBoLmRyYWdvbjtcbiAgICAgICAgICAgICAgICAgICAgciA9IGguaW5wdXRMaXN0MTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGwgPSAoYyA9IG8obCwgciwgbikpLmRyYWdvbjtcbiAgICAgICAgICAgICAgICByID0gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgICAgIGwucmVhZHlEZXN0cm95ID0gITA7XG4gICAgICAgICAgICAgICAgYS5wdXNoKGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFtuXSArPSAxO1xuICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltuXS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW25dW3BdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW25dW3BdIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgwID09IHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbbl1bcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltuXS5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFsbFBlcnNvbkFtb3VudC0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlcnNvblBvc1Jvb3QyKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICAgICAgICAgIGkgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuc29ydFBlcnNvbk5vZGVzMlswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICB2YXIgZCA9IHRoaXMuZ2V0RmVpZGFuKCk7XG4gICAgICAgIHZhciBnID0gdGhpcy5nZXRGZWlkYW5ZYW53dSgpO1xuICAgICAgICB2YXIgZiA9IHRoaXMuZ2V0RmVpZGFuQmFvemhhKCk7XG4gICAgICAgIGQucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIiksIGQpO1xuICAgICAgICBkLnkgLT0gdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5oZWlnaHQgLyAyO1xuICAgICAgICBkLmFjdGl2ZSA9ICEwO1xuICAgICAgICBnLnBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm1Qb3NpdGlvbih0LmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLCBnKTtcbiAgICAgICAgZy55IC09IHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuaGVpZ2h0IC8gMjtcbiAgICAgICAgZy5hY3RpdmUgPSAhMDtcbiAgICAgICAgZy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgIGcuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGcuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xuICAgICAgICAgICAgZy5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIGUuX2ZlaWRhbllhbnd1LnB1dChnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGYucG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKGksIGYpO1xuICAgICAgICB2YXIgdiA9IHRoaXMudHJhbnNmb3JtUG9zaXRpb24oaSwgZCk7XG4gICAgICAgIHZhciBDID0gdGhpcy5nZXRBbmdsZShkLnBvc2l0aW9uLCB2KSAtIDkwO1xuICAgICAgICBkLmFuZ2xlID0gQztcbiAgICAgICAgY2MudHdlZW4oZClcbiAgICAgICAgICAgIC50bygwLjUsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJuZWVkTGltaXROb0hhbmRsZVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgaWYgKGUuZGljdC50cmFuc3BvcnRMYXllcikge1xuICAgICAgICAgICAgICAgICAgICBlLmRpY3QudHJhbnNwb3J0TGF5ZXIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl90cmFuc3BvcnQuZGVmYXVsdCkuaXNNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgZS5fZmVpZGFuLnB1dChkKTtcbiAgICAgICAgICAgICAgICBmLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIGYuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJ6aGFfZGFcIiwgITEpO1xuICAgICAgICAgICAgICAgIGYuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGYuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGUuX2ZlaWRhbkJhb3poYS5wdXQoZik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IGEubGVuZ3RoIC0gMTsgbyA+PSAwOyBvLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBhW29dO1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGlbZS5faXRlbU5vZGVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgci5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByW2UuX2l0ZW1EZXBlbmRdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuX2l0ZW1Ob2RlTGlzdC5zcGxpY2UoZS5faXRlbU5vZGVMaXN0LmluZGV4T2YociksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5faXRlbVBvb2xMaXN0LnB1c2gocik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVCb2R5KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodC5pc1RyYW5zcG9ydEJveCkge1xuICAgICAgICAgICAgICAgICAgICBlLmRpY3QudHJhbnNwb3J0TGF5ZXIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA4Nl90cmFuc3BvcnQuZGVmYXVsdCkucmVkdWNlQ2FyQW1vdW50KHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBlLl9yZW1vdmVDbGljayA9ICExO1xuICAgICAgICAgICAgICAgIGUuX3JlbW92ZVN0YWdlID0gITE7XG4gICAgICAgICAgICAgICAgZS5jaGVja1JlcygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0RmVpZGFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgKHQgPSB0aGlzLl9mZWlkYW4uc2l6ZSgpID4gMCA/IHRoaXMuX2ZlaWRhbi5nZXQoKSA6IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdFtcImYyOTA4Ni5mZWlkYW5cIl0pKS5wYXJlbnQgPVxuICAgICAgICAgICAgdGhpcy5kaWN0W1wiZjI5MDg2LmZlaWRhblwiXS5wYXJlbnQ7XG4gICAgICAgIHQuYWN0aXZlID0gITE7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0RmVpZGFuWWFud3UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICAodCA9XG4gICAgICAgICAgICB0aGlzLl9mZWlkYW5ZYW53dS5zaXplKCkgPiAwXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9mZWlkYW5ZYW53dS5nZXQoKVxuICAgICAgICAgICAgICAgIDogY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0W1wiZjI5MDg2LmZlaWRhbl95YW53dVwiXSkpLnBhcmVudCA9IHRoaXMuZGljdFtcImYyOTA4Ni5mZWlkYW5feWFud3VcIl0ucGFyZW50O1xuICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEZlaWRhbkJhb3poYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgICh0ID1cbiAgICAgICAgICAgIHRoaXMuX2ZlaWRhbkJhb3poYS5zaXplKCkgPiAwXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9mZWlkYW5CYW96aGEuZ2V0KClcbiAgICAgICAgICAgICAgICA6IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdFtcImYyOTA4Ni5iYW96aGFcIl0pKS5wYXJlbnQgPSB0aGlzLmRpY3RbXCJmMjkwODYuYmFvemhhXCJdLnBhcmVudDtcbiAgICAgICAgdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiAoMTgwICogTWF0aC5hdGFuMihlLnkgLSB0LnksIGUueCAtIHQueCkpIC8gTWF0aC5QSTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW0IoY2MuU3ByaXRlQXRsYXMpXSwgZS5wcm90b3R5cGUsIFwiYm94MlNwcml0ZUF0bGFzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbQl0sIGUucHJvdG90eXBlLCBcImlzRGVidWdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtCXSwgZS5wcm90b3R5cGUsIFwiYm91bmRhcnlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFxuICAgICAgICBbXG4gICAgICAgICAgICBCKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjYy5FbnVtKGMpLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwi5Zyw5Zu+XCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIGUucHJvdG90eXBlLFxuICAgICAgICBcIm1hcFR5cGVcIixcbiAgICAgICAgdm9pZCAwXG4gICAgKTtcbiAgICByZXR1cm4gX19kZWNvcmF0ZShbVF0sIGUpO1xufSkoJGJyYWluTGV2ZWxCYXNlLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVztcbiJdfQ==