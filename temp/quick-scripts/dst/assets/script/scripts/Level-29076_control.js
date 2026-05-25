
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-29076_control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd6afGRw+pDqLAezH7s2PsJ', 'Level-29076_control');
// script/scripts/Level-29076_control.js

"use strict";

var i;

var $userConst = require("../../scripts/UserConst");

var $audioManager = require("../../scripts/AudioManager");

var $languageManager = require("../../scripts/LanguageManager");

var $platformManager = require("../../scripts/PlatformManager");

var $tipManager = require("../../scripts/TipManager");

var $userManager = require("../../scripts/UserManager");

var $limitRepeat = require("../../scripts/LimitRepeat");

var $shuShuConst = require("../../scripts/ShuShuConst");

var $localStorageConst = require("../../scripts/LocalStorageConst");

var $localStorageManager = require("../../scripts/LocalStorageManager");

var $memoryStorageConst = require("../../scripts/MemoryStorageConst");

var $memoryStorageManager = require("../../scripts/MemoryStorageManager");

var $assetManager = require("../../scripts/AssetManager");

var $popupConst = require("../../scripts/PopupConst");

var $popupManager = require("../../scripts/PopupManager");

var $brainLevelBase = require("./BrainLevelBase");

var $poolMgr = require("./PoolMgr");

var $level_29076_config = require("./Level-29076_config");

var $level_249667_personItem = require("./Level-249667_personItem");

var $level_29076_boxCarItem = require("./Level-29076_boxCarItem");

var $motionTrail = require("./MotionTrail");

var T = cc._decorator;
var B = T.ccclass;
var W = T.property;

var L = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.box2SpriteAtlas = null;
    e.isDebug = !1;
    e.boundary = 750;
    e.carRoot = null;
    e.colorTypeAmount = $level_29076_config.colorDes.length;
    e.lastCar = null;
    e.oldSortAmount = 0;
    e.guideNodes = [];
    e.guideText = ["汽车会朝着箭头方向移动", "大巴车可以载10个同色小人", "小巴士可以载6个同色小人", "轿车可以载4个同色小人"];
    e.currentGuideNode = null;
    e.guidedNodes = [];
    e.poolMgr = new $poolMgr["default"]();
    e.sortColor_new = [];
    e.levelDataJSON = {};
    e.parkingNodes = [];
    e.between2_4CarArr = [];
    e.highSpeedRailSpeed = 600;
    e.turntableCarArr = [];
    e.isTransportCarMove = !1;
    e.transportSpeed = 50;
    e.colorPersonArr = [];
    e.unlockParkingTarget = null;
    e.carparkIng = !1;
    e.isRotateCreate = !1;
    e.moveCarAmount = 0;
    e.allPersonAmount = 0;
    e.allPersonAmount2 = 0;
    e.extraWeightConst = 0;
    e.extraWeight = [];
    e.carWeight = [];
    e.parkingWeight = [];
    e.sortWeight = [];
    e.allWeight = [];
    e.colorPersonAmountArr = [];
    e.colorPersonAmountArrIndex = [];
    e.colorPersonIndexArr = [];
    e.uiShowPersonAmount = 20;
    e.currentPersonColorAmount = [];
    e.sortPersonNodes = [];
    e.times = 0;
    e.isCanStartClick = !1;
    e.isCheck = !1;
    e.isFail = !1;
    e.timeIDArr = [];
    e.isWin = !1;
    e.personSpeed = 1200;
    e.policeIndex = 0;
    e.goldIndex = 0;
    e.policeSkinName = "a";
    e.goldSkinName = "a";
    e.isReviveAmount = 0;
    e.lastExtraIndexArr = [];
    e.randomColorArr = [];
    e.randomColorNum = [];
    e.batchMap = {};
    e.pathArr = [];
    e.carIndex = [];
    e.carNodeArr = [];
    e.carAllAmount = 0;
    e.weightLimitIndex = 0;
    e.hardPointsIndexs = [];
    e.localData = {};
    e.reviveArr = [];
    e.firstSortIndexArr = [];
    e.firstSortAmountArr = [];
    e.isSorting = !1;
    e.isSortAnim = !1;
    e.isRemove = !1;
    e.tipRemove = null;
    e.removePropUsing = !1;
    e.transportCarArr = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      var i;
      return __generator(this, function () {
        t.prototype.onLoad.call(this);
        this.dict.carRoot.active = !1;
        this.dict.road.y = 168.789;
        this.dict["1-2"].y = -200.347;
        this.dict.carRoot.y = 47.5;
        cc.view.getFrameSize().width;
        cc.view.getFrameSize().height;

        for (e = 0; e < $level_29076_config.DrinkPosArr.length; e++) {
          o = new cc.Node("" + e);
          this.dict.personPosRoot.addChild(o);
          i = $level_29076_config.DrinkPosArr[e];
          o.position = cc.v3(i[0], i[1]);
        }

        this.uiShowPersonAmount = $level_29076_config.DrinkPosArr.length;
        this.carWeight = new Array(this.colorTypeAmount).fill(0);
        this.extraWeight = new Array(this.colorTypeAmount).fill(0);
        this.lastExtraIndexArr = new Array(this.colorTypeAmount).fill(0);
        this.parkingWeight = new Array(this.colorTypeAmount).fill(0);
        this.sortWeight = new Array(this.colorTypeAmount).fill(0);
        this.allWeight = new Array(this.colorTypeAmount).fill(0);
        this.colorPersonIndexArr = new Array(this.colorTypeAmount).fill(0);
        this.currentPersonColorAmount = new Array(this.colorTypeAmount).fill(0);
        this.colorPersonArr = new Array(this.colorTypeAmount).fill(0);
        this.levelDataJSON = JSON.parse(JSON.stringify($level_29076_config.levelData[this.levelID]));
        this.setCollisionManager(!0, !1);
        this.carRoot = this.dict.carRoot;

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

        if (this.dict.hand) {
          this.guideNodes.push(this.dict.carRoot.children[3]);
          this.guideNodes.push(this.dict.carRoot.children[0]);
          this.guideNodes.push(this.dict.carRoot.children[1]);
          this.guideNodes.push(this.dict.carRoot.children[2]);
          this.currentGuideNode = this.guideNodes[0];
          this.handPos();
        }

        return [2];
      });
    });
  };

  e.prototype.onDestroy = function () {
    t.prototype.onDestroy.call(this);

    try {
      for (var e = 0; e < this.timeIDArr.length; e++) {
        var o = this.timeIDArr[e];
        clearInterval(o);
      }
    } catch (i) {
      console.log(i);
    }
  };

  e.prototype.handPos = function () {
    var t = cc.v2(0, -20);

    if ("053-1" == this.currentGuideNode.name) {
      t = cc.v2(-15, -35);
    } else {
      if ("053-0" == this.currentGuideNode.name) {
        t = cc.v2(15, -35);
      } else {
        if ("042-0" == this.currentGuideNode.name) {
          t = cc.v2(15, -50);
        } else {
          t = cc.v2(-15, -20);
        }
      }
    }

    var e = this.currentGuideNode.convertToWorldSpaceAR(t);
    var o = this.guideNodes.indexOf(this.currentGuideNode);
    this.dict.handText.getComponent(cc.Label).string = this.guideText[o];
    var i = this.dict.hand.parent.convertToNodeSpaceAR(e);
    this.dict.hand.position = i;
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
      var d = this;
      return __generator(this, function () {
        t.getComponent($level_29076_boxCarItem["default"]).isReadyDestroy = !0;
        r = t.getComponent($level_29076_boxCarItem["default"]).colorImgName;
        n = t.getComponent($level_29076_boxCarItem["default"]).lenImgName;

        if (i) {
          console.log("changeCar-carName", i);
          (a = cc.instantiate(this.dict.carPrefab.getChildByName(i))).parking = t.parking;
        } else {
          console.log("`02${lenImgName}`", "02" + n);
          a = cc.instantiate(this.dict.carPrefab.getChildByName("02" + n));
        }

        if (t.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.InRoadRight && t.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.InRoadLeft) {//
        } else {
          this.updateCarWeight();
        }

        a.getComponent($level_29076_boxCarItem["default"]).carState = t.getComponent($level_29076_boxCarItem["default"]).carState;
        a.active = !1;
        this.carRoot.addChild(a);
        a.getComponent($level_29076_boxCarItem["default"]).mgr = this;
        a.getComponent($level_29076_boxCarItem["default"]).colorImgName = r;
        a.getComponent($level_29076_boxCarItem["default"]).lenImgName = n;
        a.getComponent($level_29076_boxCarItem["default"]).dirImgName = e;
        a.getComponent($level_29076_boxCarItem["default"]).carColor = t.getComponent($level_29076_boxCarItem["default"]).carColor;

        if (4 == e || 5 == e) {
          a.position = cc.v2(t.x, t.y);
          l = a.convertToWorldSpaceAR(cc.v2(0, t.height / 2));
          c = a.parent.convertToNodeSpaceAR(l);
          a.position = cc.v2(c.x, c.y);
        } else {
          if (0 == o) {
            a.position = cc.v2(t.x, t.y + t.height / 2);
          } else {
            if (a.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.OnBottomLeft) {
              a.position = cc.v2(t.x - t.width / 2, t.y);
            } else {
              if (a.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.OnBottomRight) {
                a.position = cc.v2(t.x + t.width / 2, t.y);
              } else {
                1 == o ? (l = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position), c = a.parent.convertToNodeSpaceAR(l), a.position = cc.v2(t.x + t.width / 2, c.y)) : (l = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position), c = a.parent.convertToNodeSpaceAR(l), a.position = cc.v2(t.x - t.width / 2, c.y));
              }
            }
          }
        }

        if (a.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.GoingParking) {
          h = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 - 127.469));
          c = a.parent.convertToNodeSpaceAR(h);
          a.position = cc.v2(c.x, c.y);
        }

        p = this.folder + "_" + $level_29076_config.getCarImgByColor(a, t.getComponent($level_29076_boxCarItem["default"]).carColor);
        a.stopAllActions();

        (function () {
          if (t.getChildByName("tailGasSpine")) {
            d.poolMgr.put(t.getChildByName("tailGasSpine"), "tailGasSpine");
          }

          if (t.getChildByName("tailGas")) {
            t.getChildByName("tailGas").destroy();
          }

          var e = t.getComponent($level_29076_boxCarItem["default"]).nextCar;

          try {
            if (e && e.getComponent($level_29076_boxCarItem["default"])) {
              e.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.Normal;
            }
          } catch (g) {}

          t.destroy();
          a.getChildByName("car").getComponent(cc.Sprite).spriteFrame = d.box2SpriteAtlas.getSpriteFrame(p);
          a.active = !0;
          var o = a.convertToWorldSpaceAR(cc.v2(0, 2250));
          var i = a.parent.convertToNodeSpaceAR(o);

          if (a.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.InRoadRight || a.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.InRoadLeft) {
            var r;
            var n = a.parent.convertToWorldSpaceAR(a.position);
            var s = void 0;

            if (a.getComponent($level_29076_boxCarItem["default"]).isFireEngine) {
              var c = a.parking.getChildByName("fireCarPos").position;
              s = a.parking.convertToWorldSpaceAR(c);
            } else {
              s = a.parking.convertToWorldSpaceAR(cc.v2(0, -142.893));
            }

            r = a.parent.convertToNodeSpaceAR(s);
            var l = Math.abs(s.x - n.x);
            d.addTailGasSpine(a);
            cc.tween(a).to(l / a.getComponent($level_29076_boxCarItem["default"]).speed, {
              x: r.x
            }).call(function () {
              a.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.GoingParking;
              console.log("isRichCar", a.getComponent($level_29076_boxCarItem["default"]).isRichCar);

              if (a.getComponent($level_29076_boxCarItem["default"]).isRichCar) {
                d.changeCar(a, 6, 0, "116" + a.getComponent($level_29076_boxCarItem["default"]).lenImgName);
              } else {
                if (a.getComponent($level_29076_boxCarItem["default"]).isTramcar) {
                  d.changeCar(a, 6, 0, "136" + a.getComponent($level_29076_boxCarItem["default"]).lenImgName);
                } else {
                  d.changeCar(a, 6, 0, "06" + a.getComponent($level_29076_boxCarItem["default"]).lenImgName);
                }
              }
            }).start();
          } else if (a.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.GoingParking) {
            n = d.getWPosByNode(a);
            s = void 0;

            if (a.parking) {
              if (1 == a.getComponent($level_29076_boxCarItem["default"]).lenImgName) {
                s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 + 20));
              } else {
                if (2 == a.getComponent($level_29076_boxCarItem["default"]).lenImgName) {
                  s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 + 15));
                } else {
                  s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 + 17));
                }
              }

              var h = a.parent.convertToNodeSpaceAR(s);
              a.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.Parking;
              a.stopAllActions();
              l = h.sub(a.position).mag();
              cc.tween(a).to(l / a.getComponent($level_29076_boxCarItem["default"]).speed, {
                position: h
              }).call(function () {
                a.parking.car = a;
                var t = a.getComponent($level_29076_boxCarItem["default"]).seatTotalAmount;
                var e = a.getComponent($level_29076_boxCarItem["default"]).carColor;
                a.getChildByName("sd").active = !1;
                a.getChildByName("shadow").active = !0;
                a.getChildByName("car").getComponent(cc.Sprite).spriteFrame = game.boxAtlas.getSpriteFrame("f28749_" + (100 * $level_29076_config.ParkingImg[t] + e + 1));
                d.putTailGas(a);
                d.checkPerson(!0);
              }).start();
            }
          } else if (a.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.GoingRoad) {
            n = d.dict.road.parent.convertToWorldSpaceAR(d.dict.road.position);
            var u = a.parent.convertToWorldSpaceAR(a.position);
            l = Math.abs(u.y - n.y);
            d.addTailGasSpine(a);
            cc.tween(a).by(l / a.getComponent($level_29076_boxCarItem["default"]).speed, {
              y: l
            }).call(function () {
              d.collision(a);
            }).start();
          } else {
            d.addTailGasSpine(a);
            cc.tween(a).to(2250 / a.getComponent($level_29076_boxCarItem["default"]).speed, {
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

  e.prototype.getWPosByNode = function (t) {
    return t.parent.convertToWorldSpaceAR(t.position);
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
    if (!t.getComponent($level_29076_boxCarItem["default"]).isFireEngine) {
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
        var a = o.convertToWorldSpaceAR(cc.v2(0, -142.893));

        if (n.x >= a.x) {
          e.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.InRoadLeft;

          if (e.getComponent($level_29076_boxCarItem["default"]).isRichCar) {
            e.getComponent($level_29076_boxCarItem["default"]).lenImgName = 1, this.changeCar(e, 1, 2, "111" + e.getComponent($level_29076_boxCarItem["default"]).lenImgName + "-0");
          } else {
            this.changeCar(e, 1, 2, "01" + e.getComponent($level_29076_boxCarItem["default"]).lenImgName + "-0");
          }
        } else {
          e.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.InRoadRight;

          if (e.getComponent($level_29076_boxCarItem["default"]).isRichCar) {
            e.getComponent($level_29076_boxCarItem["default"]).lenImgName = 1, this.changeCar(e, 1, 1, "111" + e.getComponent($level_29076_boxCarItem["default"]).lenImgName + "-1");
          } else {
            this.changeCar(e, 1, 1, "01" + e.getComponent($level_29076_boxCarItem["default"]).lenImgName + "-1");
          }
        }
      }
    }
  };

  e.prototype.onLevelReady = function () {
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
      var c;
      var l;
      var h;
      var p;
      var d;
      var u;
      var g;
      var m;
      var f;
      var v = this;
      return __generator(this, function (y) {
        switch (y.label) {
          case 0:
            for (this.dict.guide && this.scheduleOnce(function () {
              v.dict.guide.active = !1;
            }, 6), p = 0; p < this.dict.parkingRoot.childrenCount; p++) {
              (d = this.dict.parkingRoot.children[p]).active && d.getChildByName("empty").active && !d.getChildByName("fireSpine") && (d.isEmpty = !0, this.parkingNodes.push(d));
              d.getChildByName("videoLock") && (d.getChildByName("videoLock").getChildByName("icon").scale = 0.8);
            }

            if (this.isDebug) {
              t = [];

              for (p = 0; p < this.carRoot.childrenCount; p++) {
                d = this.carRoot.children[p];

                for (m = 0; m < t.length; m++) {
                  h = t[m];
                  d.x == h[0] && d.y == h[1] && console.error("同一个位置复制多辆车", d.name, p);
                }

                t.push([d.x, d.y]);
              }
            }

            for (e = this.getLocal("blackCar") || [], o = this.carRoot.children.concat(this.turntableCarArr), p = 0; p < o.length; p++) {
              d = o[p];
              this.carNodeArr.push(d);
              d.getComponent($level_29076_boxCarItem["default"]).mgr = this;
              d.indexID = "" + p;
              i = this.getPath(d);
              this.levelDataJSON.blackAmount && !e.length && i >= 2 && i <= 4 && this.between2_4CarArr.push(d);
              d.getComponent($level_29076_boxCarItem["default"]).path = i;
              this.isDebug && ((r = new cc.Node()).name = "path", r.addComponent(cc.Label).string = "" + i, r.color = cc.Color.WHITE, d.addChild(r), r.position = cc.v2(-13.105, -26.21));
              this.allPersonAmount += d.getComponent($level_29076_boxCarItem["default"]).seatTotalAmount;
            }

            this.allPersonAmount2 = this.allPersonAmount;
            this.dict.personAmount.getComponent(cc.Label).string = "" + this.allPersonAmount;
            cc.game.emit("allPersonAmount", this.allPersonAmount, this.allPersonAmount2);
            this.setCarID();

            if (this.levelDataJSON.blackAmount && !e.length) {
              if (this.levelDataJSON.blackAmount >= this.between2_4CarArr.length) {
                for (m = 0; m < this.between2_4CarArr.length; m++) {
                  (h = this.between2_4CarArr[m]).getComponent($level_29076_boxCarItem["default"]).isBlackCar = !0;
                  e.push(h.getComponent($level_29076_boxCarItem["default"]).carID);
                }
              } else {
                n = this.getRandomDistinctElements(this.between2_4CarArr, this.levelDataJSON.blackAmount);

                for (m = 0; m < n.length; m++) {
                  (h = n[m]).getComponent($level_29076_boxCarItem["default"]).isBlackCar = !0;
                  e.push(h.getComponent($level_29076_boxCarItem["default"]).carID);
                }
              }

              this.setLocal("blackCar", e);
            }

            c = [];

            if (-27361 == this.levelID) {
              c = [7, 4, 0, 3];
            }

            this.sortColor_new = $level_29076_config.sortColor;
            console.log("随机打乱颜色", this.sortColor_new);

            if (0 == c.length) {
              c = [];
              l = this.levelDataJSON.carColor;

              for (m = 0; m < l.length; m++) {
                h = l[m];
                this.randomColorArr.push(this.getArrByLen([0, 1, 2, 3, 4, 5, 6, 7], h[2]));
                this.randomColorNum[m] || (this.randomColorNum[m] = 0);
              }

              for (p = 0; p < this.carNodeArr.length; p++) {
                d = this.carNodeArr[p];
                u = this.getCarColor(p, l);
                c.push(u);
                this.setCarColorImg(d, u);
                null == (g = this.levelDataJSON.carWeight[d.getComponent($level_29076_boxCarItem["default"]).path - 1]) && (g = 0);
                this.carWeight[u] += g * d.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount;
              }

              this.setLocal("colorConfig", c);
            } else {
              for (p = 0; p < this.carNodeArr.length; p++) {
                d = this.carNodeArr[p];
                u = c[p];
                e.includes(d.getComponent($level_29076_boxCarItem["default"]).carID) && (d.getComponent($level_29076_boxCarItem["default"]).isBlackCar = !0);
                this.setCarColorImg(d, u);
                null == (g = this.levelDataJSON.carWeight[d.getComponent($level_29076_boxCarItem["default"]).path - 1]) && (g = 0);
                this.carWeight[u] += g * d.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount;
              }
            }

            for (console.log("车辆权重", this.carWeight), console.log("颜色", $level_29076_config.colorDes), console.log("人数", this.colorPersonArr), m = 0; m < $level_29076_config.colorDes.length; m++) {
              this.getAmountByColor(m);
            }

            console.log("this.colorPersonAmountArr", this.colorPersonAmountArr);
            console.log("this.colorPersonAmountArrIndex", this.colorPersonAmountArrIndex);

            if (-27361 == this.levelID) {
              this.colorPersonAmountArr = [[4, 4, 2], [], [], [3, 3], [1, 3], [], [], [2, 4, 4]];
              this.firstSortIndexArr = [0, 7, 3, 4, 0, 7, 3, 4, 0, 7];
            }

            return "f27597" != this.folder ? [3, 2] : [4, $assetManager["default"].getRes("ttBundle", "prefab/blockMan/Person", cc.Prefab)];

          case 1:
            f = y.sent();
            this.dict.personPrefab = cc.instantiate(f);
            this.dict.personPrefab.scale = 0.7;
            y.label = 2;

          case 2:
            this.createPerson();
            this.personMove();
            this.onTouch();
            this.scheduleOnce(function () {
              v.isCanStartClick = !0;
            }, 2);
            this.isTransportCarMove = !0;
            this.schedule(function () {
              return __awaiter(v, void 0, void 0, function () {
                var t;
                var e;
                return __generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (this.isFail) {
                        return [3, 9];
                      } else {
                        if (this.checkCarFull()) {
                          return [4, this.timer(0.1)];
                        } else {
                          return [3, 9];
                        }
                      }

                    case 1:
                      if (o.sent()) {
                        if (this.checkHasPersonMove()) {
                          return [3, 8];
                        } else {
                          return [3, 2];
                        }
                      } else {
                        return [3, 8];
                      }

                    case 2:
                      return [4, this.timer(0.1)];

                    case 3:
                      if (o.sent()) {
                        if (this.checkHasCarMove()) {
                          return [3, 8];
                        } else {
                          return [3, 4];
                        }
                      } else {
                        return [3, 8];
                      }

                    case 4:
                      t = this.allPersonAmount;
                      return [4, this.timer(1)];

                    case 5:
                      if (o.sent()) {
                        if (t != this.allPersonAmount) {
                          return [3, 8];
                        } else {
                          if (this.isFail) {
                            return [3, 7];
                          } else {
                            return this.isFail = !0, e = this.allPersonAmount, [4, this.timer(0.5)];
                          }
                        }
                      } else {
                        return [3, 8];
                      }

                    case 6:
                      if (o.sent()) {
                        if (this.check(e)) {
                          cc.game.emit("levelFailEvent");
                        } else {
                          this.isFail = !1;
                        }
                      }

                      o.label = 7;

                    case 7:
                      return [3, 8];

                    case 8:
                      return [3, 9];

                    case 9:
                      return [2];
                  }
                });
              });
            }, 0.4);
            return [2];
        }
      });
    });
  };

  e.prototype.check = function (t) {
    return this.checkCarFull() && !this.checkHasPersonMove() && !this.checkHasCarMove() && t == this.allPersonAmount;
  };

  e.prototype.func_checkCanUseSort = function () {
    return !(this.checkHasPersonMove() || this.checkHasCarMove() || this.moveCarAmount >= this.parkingNodes.length);
  };

  e.prototype.timer = function (t) {
    var e = this;
    return new Promise(function (o) {
      e.scheduleOnce(function () {
        o(1);
      }, t);
    });
  };

  e.prototype.checkCarFull = function () {
    var t = !0;

    for (var e = 0; e < this.parkingNodes.length; e++) {
      if (this.parkingNodes[e].car) {//
      } else {
        t = !1;
      }
    }

    return t;
  };

  e.prototype.checkHasPersonMove = function () {
    var t = !1;

    for (var e = 0; e < this.sortPersonNodes.length; e++) {
      if (this.sortPersonNodes[e].getComponent($level_249667_personItem["default"]).isMoving) {
        t = !0;
        break;
      }
    }

    return t;
  };

  e.prototype.checkHasCarMove = function () {
    var t = !1;
    var e = this.carRoot.children.concat(this.turntableCarArr);

    for (var o = 0; o < e.length; o++) {
      var i = e[o];

      if (i.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.Idle && i.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.Normal && i.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.Parking) {
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

      if (i && cc.isValid(i, !0) && i.active && i.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.Idle && i.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.OutParking) {
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

  e.prototype.touchStart_parking = function (t) {
    var e = this;

    if (!this.isRemove && !this.removePropUsing) {
      var o = t.target;
      this.unlockParkingTarget = o;

      if (o.getChildByName("videoLock")) {
        var i = $localStorageManager["default"].get($localStorageConst["default"].UnlockParking) || 0;

        if (i) {
          $localStorageManager["default"].set($localStorageConst["default"].UnlockParking, i - 1);
          o.getChildByName("videoLock").destroy();
          o.getChildByName("empty").active = !0;
          o.isEmpty = !0;
          this.parkingNodes.push(o);
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Booster_use, {
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
            id: 4,
            or: 1,
            sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
          });
          return void this.playUnlockSpine(o);
        }

        if ($localStorageManager["default"].get($localStorageConst["default"].cardAmount)) {
          $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 4);
          $popupManager["default"].show($popupConst.PopupConst.Prop);
        } else {
          $platformManager.Platform.showRewardAds(function (t) {
            if (0 == t) {
              o.getChildByName("videoLock").destroy();
              o.getChildByName("empty").active = !0;
              o.isEmpty = !0;
              e.parkingNodes.push(o);
              cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                id: 4,
                sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
              });
              e.playUnlockSpine(o);
            }
          });
        }
      }
    }
  };

  e.prototype.playUnlockSpine = function (t) {
    var e = cc.instantiate(this.dict.jiesuo);
    this.node.addChild(e);
    var o = t.parent.convertToWorldSpaceAR(t.position);
    var i = this.node.convertToNodeSpaceAR(o);
    e.position = i;
    e.getComponent(sp.Skeleton).premultipliedAlpha = !1;
    e.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
  };

  e.prototype.func_unlockParking = function () {
    this.playUnlockSpine(this.unlockParkingTarget);
    this.unlockParkingTarget.getChildByName("videoLock").destroy();
    this.unlockParkingTarget.getChildByName("empty").active = !0;
    this.unlockParkingTarget.isEmpty = !0;
    this.parkingNodes.push(this.unlockParkingTarget);
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

      if (p && p != t && p.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.Idle && p.active && !p.getComponent($level_29076_boxCarItem["default"]).isTransportCar && !p.getComponent($level_29076_boxCarItem["default"]).isUTransportCar) {
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
        f = p.convertToWorldSpaceAR(cc.v2(y / 2 + 1, 0));
        v = p.convertToWorldSpaceAR(cc.v2(-y / 2 - 1, 0));

        if (cc.Intersection.lineLine(e, o, d, u) || cc.Intersection.lineLine(e, o, g, m) || cc.Intersection.lineLine(i, r, d, u) || cc.Intersection.lineLine(i, r, g, m) || cc.Intersection.lineLine(e, o, f, v) || cc.Intersection.lineLine(n, a, f, v)) {
          return !0;
        }
      }
    }

    return !1;
  };

  e.prototype.touchStart = function (t) {
    if (this.isCanStartClick) {
      t.target;
      var e = t.getLocation();

      if (this.carparkIng) {
        return console.log("限制车库车点击");
      }

      if (this.isRotateCreate) {
        return console.log("正在旋转生成");
      }

      var o = this.carRoot.children.concat(this.turntableCarArr);

      for (var i = 0; i < o.length; i++) {
        var r = o[i];
        var n = r.getChildByName("car").getComponent(cc.PolygonCollider);

        if (cc.Intersection.pointInPolygon(e, this.getWPosByPolygon(n))) {
          console.log("新增限制快速点击", this.moveCarAmount, this.parkingNodes.length);

          if (this.moveCarAmount >= this.parkingNodes.length) {
            console.log("限制快速点击");
            return this.show($languageManager["default"].formatStr("暂时没有更多位置了"));
          }

          var a = r.getComponent($level_29076_boxCarItem["default"]).nextCar;
          var s = r.getComponent($level_29076_boxCarItem["default"]).prevCar;

          if ((a || s) && this.moveCarAmount >= this.parkingNodes.length - 1) {
            console.log("限制快速点击2");
            return this.show($languageManager["default"].formatStr("需要两个停车位"), 0.8, 1);
          }

          if (255 != r.opacity) {
            return;
          }

          if (r.getChildByName("lock")) {
            $tipManager.Tip.show($languageManager["default"].formatStr("需要钥匙解锁"));
            return void r.runAction(r.getComponent($level_29076_boxCarItem["default"]).shackAction(0.1, 2));
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

          if (this.isRemove && r.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.Idle && !this.removePropUsing && !r.obliqueHead && !r.getComponent($level_29076_boxCarItem["default"]).isFireEngine) {
            return void this.removeCar(r);
          }

          if (this.removePropUsing) {
            return;
          }

          if (!r.getComponent($level_29076_boxCarItem["default"]).isCanClick) {
            return;
          }

          if (r.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.Idle) {
            return;
          }

          if (r.getComponent($level_29076_boxCarItem["default"]).isTransportCar && (r.x > 267 || r.x < -267)) {
            return;
          }

          if (r.obliqueHead) {
            return void r.runAction(this.shackAction(0.1, 2));
          }

          if (this.dict.hand && this.dict.hand.active && (this.guidedNodes.push(r), this.currentGuideNode == r)) {
            var c = !1;

            for (var p = 0; p < this.guideNodes.length; p++) {
              var u = this.guideNodes[p];

              if (-1 == this.guidedNodes.indexOf(u)) {
                this.currentGuideNode = u;
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

          var g = !1;

          for (p = 0; p < this.parkingNodes.length; p++) {
            if (this.parkingNodes[p].isEmpty) {
              g = !0;
              break;
            }
          }

          if (!g) {
            console.log("所有车位都被占用了");
            return this.show($languageManager["default"].formatStr("目前位置已满"), 0.8, 1);
          }

          if (a || s) {
            var m = 0;

            for (p = 0; p < this.parkingNodes.length; p++) {
              if (this.parkingNodes[p].isEmpty) {
                m += 1;
              }
            }

            if (m <= 1) {
              console.log("拉链车-所有车位都被占用了");
              return this.show($languageManager["default"].formatStr("需要两个停车位"), 0.8, 1);
            }
          }

          if (this.checkHasCarMoveAmount() >= this.parkingNodes.length) {
            console.log("有相等于车位总量的车在运动，无法出车");
            return this.show($languageManager["default"].formatStr("暂时没有更多位置了"));
          }

          console.log("有" + this.checkHasCarMoveAmount() + "辆车在动！", this.parkingNodes.length);

          if ((a || s) && this.parkingNodes.length - this.checkHasCarMoveAmount() <= 1) {
            console.log("拉链车不能出车");
            return this.show($languageManager["default"].formatStr("暂时没有更多位置了"));
          }

          r.stopAllActions();
          var f = r.convertToWorldSpaceAR(cc.v2(0, 2250));
          var v = r.parent.convertToNodeSpaceAR(f);
          r.getComponent($level_29076_boxCarItem["default"]).otherCarNode = this.getOtherCarByDistance(r);
          r.getComponent($level_29076_boxCarItem["default"]).oldPos = r.position;

          if (a) {
            a.getComponent($level_29076_boxCarItem["default"]).otherCarNode = this.getOtherCarByDistance(a, !0);
            a.getComponent($level_29076_boxCarItem["default"]).oldPos = a.position;
          }

          if (s) {
            s.getComponent($level_29076_boxCarItem["default"]).otherCarNode = this.getOtherCarByDistance(s, !0);
            s.getComponent($level_29076_boxCarItem["default"]).oldPos = s.position;
          }

          if (r.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.Idle) {
            r.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.Normal;

            if (r.getComponent($level_29076_boxCarItem["default"]).isFireEngine) {//
            } else {
              this.moveCarAmount += 1;
            }

            cc.tween(r).to(2250 / r.getComponent($level_29076_boxCarItem["default"]).speed, {
              position: v
            }).start();
          }

          if (r.getComponent($level_29076_boxCarItem["default"]).isTransportCar || r.getComponent($level_29076_boxCarItem["default"]).isUTransportCar || 1 != r.getComponent($level_29076_boxCarItem["default"]).path) {//
          } else {
            this.addTailGasSpine(r);

            if ($audioManager.Audio.getEffectMute()) {//
            } else {
              this.playRemoteSound("audio/f27312/f27312_Engine2");
            }
          }

          break;
        }
      }
    }
  };

  e.prototype.getAngle = function (t, e) {
    return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI + 90;
  };

  e.prototype.addStarSpine = function (t) {
    var e = this;
    var o = cc.instantiate(this.poolMgr.get(this.dict.mixSpine, "mixSpine"));
    this.node.addChild(o);
    var i = t.convertToWorldSpaceAR(cc.v2(0, 0));
    var r = o.parent.convertToNodeSpaceAR(i);
    o.position = r;
    this.scheduleOnce(function () {
      e.poolMgr.put(o, "mixSpine");
    }, 2);
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

  e.prototype.getNodeWorldEulerAngles = function (t) {
    var e = 0;

    for (var o = t; o;) {
      e += o.angle;
      o = o.parent;
    }

    console.log("worldEulerAngles", e);
    console.log("worldEulerAngles2", e % 360);
    return e % 360;
  };

  e.prototype.fun = function (t, e, o) {
    if (t && e) {
      for (var i = 0; i < o.length; i++) {
        var r = o[i];
        console.log("item2.position", e.position);
        cc.tween(r).stop().to(0.05 * i + 0.02, {
          position: e.position
        }).start();
      }
    } else {
      this.unschedule(this.fun);
    }
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
    var i = t.getComponent($level_29076_boxCarItem["default"]);
    i.carColor = e;

    if (this.colorPersonArr[e]) {//
    } else {
      this.colorPersonArr[e] = 0;
    }

    this.colorPersonArr[e] += i.seatTotalAmount;
    i.colorImgName = e + 1;
    i.dirImgName = $level_29076_config.CarDirImg[Math.round(Math.abs(t.angle))];
    i.lenImgName = $level_29076_config.CarLenImg[i.seatTotalAmount];
    o = this.folder + "_" + $level_29076_config.getCarImgByColor(t, e);
    t.parent.active = !0;
    t.active = !0;
    t.getChildByName("car").getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame(o);

    if (this.levelDataJSON.carWeight[i.path]) {//
    } else {
      this.levelDataJSON.carWeight[i.path] = 0;
    }
  };

  e.prototype.setCarColorImg_2 = function (t, e) {
    var o;
    var i = t.getComponent($level_29076_boxCarItem["default"]);
    i.carColor = e;
    i.colorImgName = e + 1;
    var r = "" + i.colorImgName + i.dirImgName + i.lenImgName;
    o = "texture/" + this.folder + "/" + this.folder + "_" + r;
    cc.resources.load(o, function (e, o) {
      t.getChildByName("car").getComponent(cc.Sprite).enabled = !0;

      if (o) {
        t.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o);
      }
    });
  };

  e.prototype.updateCarWeight = function () {
    var t = this;
    this.carWeight = new Array(this.colorTypeAmount).fill(0);
    var e = this.carRoot.children.concat(this.turntableCarArr);

    var o = function o(_o) {
      var r = e[_o];

      if (r && r.getComponent($level_29076_boxCarItem["default"]) && r.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.Idle && !r.getComponent($level_29076_boxCarItem["default"]).isTransportCar && !r.getComponent($level_29076_boxCarItem["default"]).isUTransportCar) {
        r.path = null;
        var n = i.getPath(r);
        r.getComponent($level_29076_boxCarItem["default"]).path = n;

        if (1 == n && r.getComponent($level_29076_boxCarItem["default"]).isBlackCar && !r.isNoBlack) {
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
            var o = r.getComponent($level_29076_boxCarItem["default"]);
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

        if (null == a) {
          a = 0;
        }

        i.carWeight[r.getComponent($level_29076_boxCarItem["default"]).carColor] += a * r.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount;
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
      o += l = this.currentPersonColorAmount[i];
    }

    if (!(o >= this.allPersonAmount2)) {
      for (var r = 0; this.sortPersonNodes.length < this.uiShowPersonAmount;) {
        var n = this.getPersonColor();
        var a = (i = this.colorPersonIndexArr[n], this.colorPersonAmountArr[n][i]);

        if (this.isReviveAmount) {
          a = 1;
        }

        if (this.colorPersonAmountArrIndex[n] && this.colorPersonAmountArrIndex[n][i] == this.lastExtraIndexArr[n]) {
          this.extraWeight[n] = this.extraWeightConst;
        } else {
          this.extraWeight[n] = 0;
        }

        this.lastExtraIndexArr[n] = this.colorPersonAmountArrIndex[n][i];

        if (!a) {
          var s = [];

          for (var c = 0; c < this.colorPersonIndexArr.length; c++) {
            var l = this.colorPersonIndexArr[c];

            if (this.colorPersonAmountArr[c][l]) {
              s.push(c);
            }
          }

          if (!s.length) {
            return void (e && e());
          }

          n = s[this.randomNum(0, s.length - 1)];
          i = this.colorPersonIndexArr[n];
          a = this.colorPersonAmountArr[n][i];
        }

        this.currentPersonColorAmount[n] += a;

        if (this.isReviveAmount) {//
        } else {
          this.colorPersonIndexArr[n] += 1;
        }

        if (t) {
          this.goldIndex = 0;
          this.policeIndex = 0;
        }

        for (var h = 0; h < a; h++) {
          if (t) {
            var p = void 0;
            (p = cc.instantiate(this.dict.personPrefab)).oldPosIndex = -1;
            this.dict.personRoot.addChild(p);
            p.getComponent($level_249667_personItem["default"]).personColor = n;

            if (n + 1 == 10) {
              this.setColorPersonImg(n, p, 2, this.policeSkinName);

              if ("a" == this.policeSkinName) {
                this.policeSkinName = "b";
              } else {
                this.policeSkinName = "a";
              }
            } else {
              if (n + 1 == 11) {
                this.setColorPersonImg(n, p, 2, this.goldSkinName), this.goldSkinName = "a" == this.goldSkinName ? "b" : "a";
              } else {
                this.setColorPersonImg(n, p);
              }
            }

            var d = this.dict.personPosRoot.childrenCount - 1 - r;

            if (d < 0) {
              p.position = this.dict.doorOutside.position;
            } else {
              p.position = this.dict.personPosRoot.children[d].position;
              p.zIndex = this.dict.personPosRoot.childrenCount - this.sortPersonNodes.length;
              p.oldPosIndex = d;
              d >= 5 && this.setColorPersonImg(p.getComponent($level_249667_personItem["default"]).personColor, p, 1);
            }

            this.sortPersonNodes.push(p);
            r += 1;
          } else {
            p = void 0;
            (p = cc.instantiate(this.dict.personPrefab)).oldPosIndex = -1;
            this.dict.personRoot.addChild(p);
            p.position = this.dict.doorOutside.position;
            p.getComponent($level_249667_personItem["default"]).personColor = n;

            if (n + 1 == 10) {
              this.setColorPersonImg(n, p, 2, this.policeSkinName), this.policeSkinName = "a" == this.policeSkinName ? "b" : "a";
            } else {
              if (n + 1 == 11) {
                this.setColorPersonImg(n, p, 2, this.goldSkinName), this.goldSkinName = "a" == this.goldSkinName ? "b" : "a";
              } else {
                this.setColorPersonImg(n, p);
              }
            }

            this.sortPersonNodes.push(p);
            r += 1;
          }
        }
      }

      if (e) {
        e();
      }
    }
  };

  e.prototype.personMove = function () {
    var t = this;
    var e = this.sortPersonNodes.length;

    if (e >= this.uiShowPersonAmount) {
      e = this.uiShowPersonAmount;
    }

    var o = function o(e) {
      var o = i.sortPersonNodes[e];
      i.scheduleOnce(function () {
        o.oldPosIndex = 0;
        o.position = t.dict.personPosRoot.children[0].position;

        if (e != t.uiShowPersonAmount - 1) {
          o.zIndex = t.dict.personPosRoot.childrenCount - e;
          t.move(0, o, t.dict.personPosRoot.childrenCount - 1 - e, null, !0);
        }
      }, 0.1 * e);
    };

    var i = this;

    for (var r = 0; r < e; r++) {
      o(r);
    }
  };

  e.prototype.updateParkingWeight = function () {
    this.parkingWeight = new Array(this.colorTypeAmount).fill(0);

    for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
      var e = this.dict.parkingRoot.children[t];

      try {
        if (e.active && e.car) {
          var o = e.car;
          var i = o.getComponent($level_29076_boxCarItem["default"]).carColor;

          if (o && o.getComponent($level_29076_boxCarItem["default"])) {
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

  e.prototype.checkPerson = function (t) {
    var e = this;

    if (void 0 === t) {
      t = !1;
    }

    if (t) {
      this.checkTipText();
    }

    if (!this.isCheck) {
      var o = this.sortPersonNodes[0].getComponent($level_249667_personItem["default"]).personColor;
      var i = null;

      var r = function r(t) {
        var r = n.dict.parkingRoot.children[t];

        if (r.active && r.car) {
          var a = r.car;

          if (a.getComponent($level_29076_boxCarItem["default"]).carColor == o) {
            for (var s = function s(t) {
              var r = a.getChildByName("seatRoot").children[t];

              if (!r.active && !r.targetPerson && (r.targetPerson = !0, i = r)) {
                n.isCheck = !0;
                var s = n.sortPersonNodes.shift();
                s.targetSeat = i;
                n.setColorPersonImg(o, s);
                n.createPerson();
                var c = n.sortPersonNodes.length;

                if (c >= n.uiShowPersonAmount) {
                  c = n.uiShowPersonAmount;
                }

                for (var h = function h(t) {
                  var o = n.sortPersonNodes[t];
                  o.zIndex = c - t;
                  o.getComponent($level_249667_personItem["default"]).isMoving = !0;
                  n.move(o.oldPosIndex, o, o.oldPosIndex + 1, function () {
                    o.getComponent($level_249667_personItem["default"]).isMoving = !1;

                    if (t == c - 1) {
                      e.scheduleOnce(function () {
                        e.isCheck = !1;
                        e.checkPerson();
                      }, 0.005);
                    }
                  });
                }, p = 0; p < c; p++) {
                  h(p);
                }

                n.allPersonAmount -= 1;
                n.dict.personAmount.getComponent(cc.Label).string = "" + n.allPersonAmount;
                cc.game.emit("allPersonAmount", n.allPersonAmount, n.allPersonAmount2);
                var d = s.position;
                var u = i.parent.convertToWorldSpaceAR(i.position);
                var g = s.parent.convertToNodeSpaceAR(u);
                var m = g.sub(d).mag() / 1e3;
                console.log("time", m);
                var f;

                if (g.x > d.x) {
                  f = 1;
                } else {
                  f = -1;
                }

                var v = d.add(cc.v3(100 * f, 150));
                s.stopAllActions();
                cc.tween(s).bezierTo(m, d, v, g).call(function () {
                  e.setColorPersonImg_seat(o, i, 3);

                  if ($audioManager.Audio.getEffectMute()) {//
                  } else {
                    e.playRemoteSound("audio/f28749/f28749_Get_on");
                  }

                  i.active = !0;
                  a.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount -= 1;
                  e.carAnim(i);
                  s.destroy();
                  e.checkCarGo();
                }).start();
                return {
                  value: void 0
                };
              }
            }, c = 0; c < a.getChildByName("seatRoot").children.length; c++) {
              var h = s(c);

              if ("object" == typeof h) {
                return h;
              }
            }
          }
        }
      };

      var n = this;

      for (var a = 0; a < this.dict.parkingRoot.children.length; a++) {
        var s = r(a);

        if ("object" == typeof s) {
          return s.value;
        }
      }
    }
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

  e.prototype.checkCarGo = function () {
    var t = this;

    var e = function e(_e) {
      var i = o.dict.parkingRoot.children[_e];

      if (i.car) {
        var r = i.car;

        if (!r.setInterval) {
          for (var n = r.getChildByName("seatRoot"), a = 0, s = 0; s < n.children.length; s++) {
            if (n.children[s].active) {
              a += 1;
            }
          }

          if (a >= n.childrenCount) {
            o.moveCarAmount -= 1;
            var c = r.convertToWorldSpaceAR(cc.v2(0, -142.893));
            var h = r.parent.convertToNodeSpaceAR(c);
            r.setInterval = !0;
            var p = setInterval(function () {
              if (!t.checkCarBlock(h)) {
                clearInterval(p);
                i.car = null;

                if ($audioManager.Audio.getEffectMute()) {//
                } else {
                  t.playRemoteSound("audio/f28749/f28749_Full");
                }

                t.addStarSpine(i);
                r.GoingOutParking_nPos = h;
                r.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.GoingOutParking;

                if (0 == _e) {
                  i.active = !1;
                }

                i.isEmpty = !0;
                var o = Number(r.name[2]);
                var n = r.getComponent($level_29076_boxCarItem["default"]).carColor;
                r.getChildByName("car").active = !1;
                r.getChildByName("sd").active = !1;
                r.getChildByName("shadow").active = !1;
                r.getChildByName("boxSpine").active = !0;
                r.getChildByName("boxSpine").getComponent(sp.Skeleton).timeScale = 2;
                r.getChildByName("boxSpine").getComponent(sp.Skeleton).setSkin("skin" + (n + 1));
                r.getChildByName("boxSpine").getComponent(sp.Skeleton).setAnimation(0, "dabao" + o, !1);
                r.getChildByName("boxSpine").getComponent(sp.Skeleton).setCompleteListener(function () {
                  cc.tween(r).to(r.height / 2 / r.getComponent($level_29076_boxCarItem["default"]).speed * 1.3, {
                    position: h
                  }).call(function () {
                    t.checkRes();
                    r.getComponent($level_29076_boxCarItem["default"]).carState = $level_29076_config.CarState.OutParking;
                    t.changeCar(r, 1, 1, "01" + r.getComponent($level_29076_boxCarItem["default"]).lenImgName + "-1");
                  }).start();
                });
              }
            }, 0.5);
            o.timeIDArr.push(p);
          }
        }
      }
    };

    var o = this;

    for (var i = 0; i < this.dict.parkingRoot.children.length; i++) {
      e(i);
    }
  };

  e.prototype.checkCarBlock = function (t) {
    var e = this.carRoot.children.concat(this.turntableCarArr);

    for (var o = 0; o < e.length; o++) {
      var i = e[o];

      if (i.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.OutParking && i.position.sub(t).mag() < 400) {
        return !0;
      }

      if (i.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.GoingOutParking) {
        var r = i.GoingOutParking_nPos;

        if (r && r.sub(t).mag() < 400) {
          return !0;
        }
      }
    }

    return !1;
  };

  e.prototype.checkRes = function () {
    if (!this.isWin && 0 == this.allPersonAmount) {
      if ($platformManager.Platform.getConfig().hasCoin) {
        var t = $localStorageManager["default"].get($localStorageConst["default"].coin) || 0;
        t += this.allPersonAmount2;
        $localStorageManager["default"].set($localStorageConst["default"].coin, t);
        console.log("添加本地金币", t, this.allPersonAmount2);
      }

      this.isWin = !0;
      this.playRight();
    }
  };

  e.prototype.func_addResource = function () {
    var t = $localStorageManager["default"].get($localStorageConst["default"].BuildResource) || 0;
    t += this.carAllAmount;
    $localStorageManager["default"].set($localStorageConst["default"].BuildResource, t);
  };

  e.prototype.move = function (t, e, o, i, r) {
    var n = this;

    if (void 0 === t) {
      t = 0;
    }

    e.position.sub(this.dict.personPosRoot.children[t + 1].position).mag();
    this.personSpeed;

    if (r) {
      this.personSpeed;
    }

    cc.tween(e).to(0.055, {
      position: this.dict.personPosRoot.children[t + 1].position
    }).call(function () {
      e.oldPosIndex = t + 1;

      if (t + 1 == 5) {
        n.setColorPersonImg(e.getComponent($level_249667_personItem["default"]).personColor, e, 1);
      }

      if (t + 1 == o) {
        if (i) {
          i();
        }
      } else {
        n.move(t + 1, e, o);
      }
    }).start();
  };

  e.prototype.setColorPersonImg = function (t, e, o, i) {
    if (void 0 === o) {
      o = 2;
    }

    if (void 0 === i) {
      i = "";
    }

    e.getComponent(cc.Sprite).spriteFrame = game.drinkAtlas.getSpriteFrame("f28749_" + (t + 1 + 10));
  };

  e.prototype.setColorPersonImg_sort = function (t, e, o) {
    if (void 0 === o) {
      o = 2;
    }

    e.getComponent(cc.Sprite).spriteFrame = game.drinkAtlas.getSpriteFrame("f28749_" + (t + 1 + 10));
  };

  e.prototype.setColorPersonImg_seat = function (t, e, o) {
    if (void 0 === o) {
      o = 2;
    }

    e.getComponent(cc.Sprite).spriteFrame = game.drinkAtlas.getSpriteFrame("f28749_" + (t + 1 + 10) + "-1");
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
        var r = this.carNodeArr[i].getComponent($level_29076_boxCarItem["default"]);

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
      r = $level_29076_config.colorDes[i] + ":" + r;
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
      0 != this.currentPersonColorAmount[e] && this.currentPersonColorAmount[e] >= this.colorPersonArr[e] && (console.log($level_29076_config.colorDes[e] + "颜色已经满元"), this.allWeight[e] = 0);
    }

    return this.randomByWeight(new Array($level_29076_config.colorDes.length).fill(1).map(function (t, e) {
      return e;
    }), this.allWeight);
  };

  e.prototype.updateSortWeight = function () {
    this.sortWeight = new Array(this.colorTypeAmount).fill(0);

    for (var t = 0; t < this.sortPersonNodes.length; t++) {
      var e = this.sortPersonNodes[t].getComponent($level_249667_personItem["default"]).personColor;
      this.sortWeight[e] += this.levelDataJSON.sortWeight;
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
      return t.getComponent($level_29076_boxCarItem["default"]).path - e.getComponent($level_29076_boxCarItem["default"]).path;
    });
    this.carNodeArr.forEach(function (e, o) {
      e.getComponent($level_29076_boxCarItem["default"]).carID = o;

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

      if (n && n != t && n.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.Idle && n.active && !n.getComponent($level_29076_boxCarItem["default"]).isTransportCar && !n.getComponent($level_29076_boxCarItem["default"]).isUTransportCar) {
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
    var e;
    var o;
    var i;
    var r;
    var n;
    var a;
    var s = t;

    if (s.path) {
      return s.path;
    }

    var c = s.width;
    var l = s.height;
    e = s.convertToWorldSpaceAR(cc.v2(-c / 2, -l));
    o = s.convertToWorldSpaceAR(cc.v2(-c / 2, 2250));
    i = s.convertToWorldSpaceAR(cc.v2(c / 2, -l));
    r = s.convertToWorldSpaceAR(cc.v2(c / 2, 2250));
    n = s.convertToWorldSpaceAR(cc.v2(0, -l));
    a = s.convertToWorldSpaceAR(cc.v2(0, 2250));
    var h = this.getOtherCarByDistance(s);
    var p = !1;

    if (s.collisionArr) {//
    } else {
      s.collisionArr = [];
    }

    var d = 1;

    for (var u = 0; u < h.length; u++) {
      var g = h[u];

      if (g != s) {
        var m;
        var f;
        var v;
        var y;
        var C;

        var _;

        var S = g.width;
        var k = g.height;
        m = g.convertToWorldSpaceAR(cc.v2(-S / 2, -k));
        f = g.convertToWorldSpaceAR(cc.v2(-S / 2, 0));
        v = g.convertToWorldSpaceAR(cc.v2(S / 2, -k));
        y = g.convertToWorldSpaceAR(cc.v2(S / 2, 0));
        C = g.convertToWorldSpaceAR(cc.v2(S / 2 + 1, 0));
        _ = g.convertToWorldSpaceAR(cc.v2(-S / 2 - 1, 0));

        if (cc.Intersection.lineLine(e, o, m, f) || cc.Intersection.lineLine(e, o, v, y) || cc.Intersection.lineLine(i, r, m, f) || cc.Intersection.lineLine(i, r, v, y) || cc.Intersection.lineLine(e, o, C, _) || cc.Intersection.lineLine(i, r, C, _) || cc.Intersection.lineLine(n, a, C, _)) {
          p = !0;

          if (g.path) {
            d += g.path;
          } else {
            d += this.getPath(g);
          }
        }
      }
    }

    if (p) {
      return s.path = d, d;
    } else {
      return s.path = 1, 1;
    }
  };

  e.prototype.hasCommonElement = function (t, e) {
    return t.some(function (t) {
      return e.includes(t);
    });
  };

  e.prototype.areAllNumbersSmallerThan = function (t, e) {
    return t.every(function (t) {
      return t < e;
    });
  };

  e.prototype.checkWeightLimit = function (t, e) {
    if (void 0 === e) {
      e = 0;
    }

    this.weightLimitIndex = e;
    var o = 0;

    for (var i = 0; i < t.length; i++) {
      if (t[i] < this.levelDataJSON.weightLimit[e]) {
        o += 1;
      }
    }

    if (o >= t.length) {
      if (this.levelDataJSON.weightLimit[e + 1]) {
        return this.checkWeightLimit(t, e + 1);
      } else {
        return -1;
      }
    } else {
      return this.weightLimitIndex;
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

      if (i && i.active && i.getComponent($level_29076_boxCarItem["default"]).carState == $level_29076_config.CarState.Idle) {
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
      console.log("取权重不为0但最小的颜色");
      var o = 0;
      var i = e[0];

      for (var r = 0; r < e.length; r++) {
        var n = e[r];

        if (n < i && 0 != n || 0 == i && 0 != n) {
          o = r;
          i = n;
        }
      }

      console.log("minIndex", o);
      console.log("卡点过滤前权重", JSON.stringify(e));

      for (r = 0; r < e.length; r++) {
        if (r != o) {
          e[r] = 0;
        }
      }

      console.log("卡点过滤后权重", JSON.stringify(e));
    } else {
      var a = this.fetchMaxIndex(e, this.levelDataJSON.limitRank || $level_29076_config.colorDes.length);

      for (r = 0; r < e.length; r++) {
        e[r];
        a.includes(r) || (e[r] = 0);
      }
    }

    if (this.arraysEqual(e, new Array($level_29076_config.colorDes.length).fill(0))) {
      console.log("TODO");
      var s = [];

      for (r = 0; r < $level_29076_config.colorDes.length; r++) {
        if (this.colorPersonAmountArr[r].length && this.currentPersonColorAmount[r] < this.colorPersonArr[r]) {
          s.push(r);
        }
      }

      console.log("TODO", s);

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
    i.children[1].getComponent(cc.Label).string = $languageManager["default"].formatStr(t);
    i.setPosition(cc.v2(0, -60));
    i.opacity = 0;
    cc.tween(i).by(0.3, {
      position: cc.v3(0, 60),
      opacity: 255
    }).delay(e).by(0.3, {
      position: cc.v3(0, 60),
      opacity: -255
    }).call(function () {
      i.destroy();
    }).start();
  };

  e.prototype.func_sort2 = function () {
    this.func_sort();
  };

  e.prototype.func_sort = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i = this;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            if (this.isSorting) {
              return [2];
            } else {
              return this.isSorting = !0, this.isSortAnim = !0, t = 1.5, [4, $assetManager["default"].getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)];
            }

          case 1:
            e = r.sent();
            o = cc.instantiate(e);
            this.dict.tailGas.parent.addChild(o);
            this.schedule(function () {
              for (var t = 0; t < i.sortPersonNodes.length; t++) {
                var e = i.sortPersonNodes[t];
                var o = i.randomNum(0, $level_29076_config.colorDes.length - 1);
                i.setColorPersonImg_sort(o, e);
              }
            }, 0.2, (t - 1) / 0.2 - 0.3);
            cc.tween(this.node).delay(t).call(function () {
              i.isSortAnim = !1;
              o.destroy();
              i.isFail = !1;
              i.consoleWeight("总权重", i.allWeight);
              console.log("排队颜色顺序", i.fetchMaxIndex(i.allWeight, $level_29076_config.colorDes.length));
              var t = i.fetchMaxIndex(i.allWeight, $level_29076_config.colorDes.length);
              var e = new Array($level_29076_config.colorDes.length).fill(0);

              for (var r = 0; r < i.sortPersonNodes.length; r++) {
                e[(a = i.sortPersonNodes[r]).getComponent($level_249667_personItem["default"]).personColor] += 1;
              }

              var n = 0;

              for (r = 0; r < i.sortPersonNodes.length; r++) {
                var a = i.sortPersonNodes[r];

                for (var s = t[n]; 0 == e[s] && (s = t[n += 1], !(n >= $level_29076_config.colorDes.length - 1));) {}

                e[s] -= 1;
                a.getComponent($level_249667_personItem["default"]).personColor = s;
                i.setColorPersonImg_sort(s, a);
                console.log($level_29076_config.colorDes[s]);
              }

              i.checkPerson();
              i.isSorting = !1;
            }).start();
            return [2];
        }
      });
    });
  };

  e.prototype.remove = function () {
    console.log("start=====", JSON.parse(JSON.stringify(this.colorPersonAmountArr)));
    var t = [];

    for (var e = 0; e < this.sortPersonNodes.length; e++) {
      var o = (p = this.sortPersonNodes[e]).getComponent($level_249667_personItem["default"]).personColor;
      t.push(o);
    }

    console.log("消除", t);
    var i = this.dict.parkingRoot.children[0].car;
    var r = i.getComponent($level_29076_boxCarItem["default"]).carColor;
    var n = i.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount;
    var a = [];
    var s = [];

    for (e = 0; e < t.length; e++) {
      if (a.length < n && t[e] == r) {
        a.push(t[e]);
      } else {
        s.push(t[e]);
      }
    }

    var c = a.concat(s);
    console.log("新排序", JSON.stringify(c));
    var l = n - a.length;
    console.log("add", l);

    if (l > 0) {
      console.log("start", JSON.stringify(this.colorPersonAmountArr[r]));

      for (var h = 0; h < l; h++) {
        c.unshift(r);
        console.log("执行");
      }

      for (e = this.colorPersonAmountArr[r].length - 1; e >= 0; e--) {
        if (this.colorPersonAmountArr[r][e] > 0) {
          if (l <= this.colorPersonAmountArr[r][e]) {
            this.colorPersonAmountArr[r][e] -= l;
            l = 0;
            break;
          }

          l -= this.colorPersonAmountArr[r][e];
          this.colorPersonAmountArr[r][e] = 0;
        }
      }
    }

    console.log("end", JSON.stringify(this.colorPersonAmountArr[r]));
    console.log("新排序2", JSON.stringify(c));

    for (e = 0; e < c.length; e++) {
      var p = this.sortPersonNodes[e];
      var d = c[e];

      if (p) {
        p.getComponent($level_249667_personItem["default"]).personColor = d;
        this.setColorPersonImg_sort(d, p);
      } else {
        var u = this.colorPersonAmountArr[d].length - 1;
        this.colorPersonAmountArr[d][u] += 1;
        console.log("回收", $level_29076_config.colorDes[d]);
        this.currentPersonColorAmount[d] -= 1;
      }
    }

    console.log("end=====", JSON.parse(JSON.stringify(this.colorPersonAmountArr)));
    this.checkPerson();
  };

  e.prototype.revive = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i = this;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            if (this.isSorting) {
              return [2];
            } else {
              return this.isSorting = !0, this.isSortAnim = !0, t = 1.5, [4, $assetManager["default"].getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)];
            }

          case 1:
            e = r.sent();
            o = cc.instantiate(e);
            this.dict.tailGas.parent.addChild(o);
            this.schedule(function () {
              for (var t = 0; t < i.sortPersonNodes.length; t++) {
                var e = i.sortPersonNodes[t];
                var o = i.randomNum(0, $level_29076_config.colorDes.length - 1);
                i.setColorPersonImg_sort(o, e);
              }
            }, 0.2, (t - 1) / 0.2 - 0.3);
            cc.tween(this.node).delay(t).call(function () {
              i.isFail = !1;
              i.policeIndex = 0;
              i.goldIndex = 0;
              i.isSortAnim = !1;
              o.destroy();
              var t = 0;
              var e = {};
              var r = [];

              for (var n = 0; n < i.parkingNodes.length; n++) {
                var a = (g = i.parkingNodes[n]).car;

                if (!g.isEmpty && a && t < 4) {
                  t += 1;
                  var s = a.getComponent($level_29076_boxCarItem["default"]);
                  var c = new Array(s.emptySeatAmount).fill(s.carColor);
                  r = r.concat(c);

                  if (e[s.carColor]) {
                    var l = e[s.carColor];
                    l += s.emptySeatAmount;
                    e[s.carColor] = l;
                  } else {
                    e[s.carColor] = s.emptySeatAmount;
                  }
                }
              }

              console.log("需要从后面减掉", JSON.parse(JSON.stringify(e)));
              var h = [];

              for (n = 0; n < i.sortPersonNodes.length; n++) {
                var p = (g = i.sortPersonNodes[n]).getComponent($level_249667_personItem["default"]).personColor;

                if (r.includes(p)) {
                  if (0 == (l = e[p])) {
                    h.push(p);
                  } else {
                    l -= 1, e[p] = l;
                  }
                } else {
                  h.push(p);
                }
              }

              for (var d in r = r.concat(h), console.log("需要从后面减掉222", JSON.parse(JSON.stringify(e))), console.log("start", JSON.parse(JSON.stringify(i.colorPersonAmountArr))), e) {
                var u = e[d];
                p = Number(d);

                if (u > 0) {
                  for (n = i.colorPersonAmountArr[p].length - 1; n >= 0; n--) {
                    if (i.colorPersonAmountArr[p][n] > 0) {
                      if (u <= i.colorPersonAmountArr[p][n]) {
                        i.colorPersonAmountArr[p][n] -= u;
                        u = 0;
                        break;
                      }

                      u -= i.colorPersonAmountArr[p][n];
                      i.colorPersonAmountArr[p][n] = 0;
                    }
                  }
                }
              }

              console.log("end", JSON.parse(JSON.stringify(i.colorPersonAmountArr)));

              if (i.reviveArr.length) {
                i.reviveArr = r.concat(i.reviveArr);
              } else {
                i.reviveArr = r;
              }

              for (n = 0; n < r.length; n++) {
                var g = i.sortPersonNodes[n];
                p = r[n];

                if (g) {
                  g.getComponent($level_249667_personItem["default"]).personColor = p;
                  i.setColorPersonImg_sort(p, g);
                } else {
                  console.log("是否回收", $level_29076_config.colorDes[p]);
                }
              }

              console.log("start-reviveArr", JSON.parse(JSON.stringify(i.reviveArr)));

              for (n = 0; n < r.length; n++) {
                g = i.sortPersonNodes[n];
                p = r[n];

                if (!g) {
                  i.reviveArr = i.reviveArr.splice(n);
                  break;
                }
              }

              console.log("end-reviveArr", JSON.parse(JSON.stringify(i.reviveArr)));
              i.checkPerson();
              i.isSorting = !1;
            }).start();
            return [2];
        }
      });
    });
  };

  e.prototype.revive2 = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i = this;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            if (this.isSorting) {
              return [2];
            } else {
              return this.isSorting = !0, this.isSortAnim = !0, t = 1.5, [4, $assetManager["default"].getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)];
            }

          case 1:
            e = r.sent();
            o = cc.instantiate(e);
            this.dict.tailGas.parent.addChild(o);
            this.schedule(function () {
              for (var t = 0; t < i.sortPersonNodes.length; t++) {
                var e = i.sortPersonNodes[t];
                var o = i.randomNum(0, $level_29076_config.colorDes.length - 1);
                i.setColorPersonImg_sort(o, e);
              }
            }, 0.2, (t - 1) / 0.2 - 0.3);
            cc.tween(this.node).delay(t).call(function () {
              i.isFail = !1;
              i.policeIndex = 0;
              i.goldIndex = 0;
              i.isSortAnim = !1;
              o.destroy();
              var t = 0;
              var e = {};
              var r = [];

              for (var n = 0; n < i.parkingNodes.length; n++) {
                var a = (g = i.parkingNodes[n]).car;

                if (!g.isEmpty && a && t < 4) {
                  t += 1;
                  var s = a.getComponent($level_29076_boxCarItem["default"]);
                  var c = new Array(s.emptySeatAmount).fill(s.carColor);
                  r = r.concat(c);

                  if (e[s.carColor]) {
                    var l = e[s.carColor];
                    l += s.emptySeatAmount;
                    e[s.carColor] = l;
                  } else {
                    e[s.carColor] = s.emptySeatAmount;
                  }
                }
              }

              console.log("需要从后面减掉", JSON.parse(JSON.stringify(e)));
              var h = [];

              for (n = 0; n < i.sortPersonNodes.length; n++) {
                var p = (g = i.sortPersonNodes[n]).getComponent($level_249667_personItem["default"]).personColor;

                if (r.includes(p)) {
                  if (0 == (l = e[p])) {
                    h.push(p);
                  } else {
                    l -= 1, e[p] = l;
                  }
                } else {
                  h.push(p);
                }
              }

              for (var d in r = r.concat(h), console.log("需要从后面减掉222", JSON.parse(JSON.stringify(e))), console.log("start", JSON.parse(JSON.stringify(i.colorPersonAmountArr))), e) {
                var u = e[d];
                p = Number(d);

                if (u > 0) {
                  for (n = i.colorPersonAmountArr[p].length - 1; n >= 0; n--) {
                    if (i.colorPersonAmountArr[p][n] > 0) {
                      if (u <= i.colorPersonAmountArr[p][n]) {
                        i.colorPersonAmountArr[p][n] -= u;
                        u = 0;
                        break;
                      }

                      u -= i.colorPersonAmountArr[p][n];
                      i.colorPersonAmountArr[p][n] = 0;
                    }
                  }
                }
              }

              console.log("end", JSON.parse(JSON.stringify(i.colorPersonAmountArr)));

              if (i.reviveArr.length) {
                i.reviveArr = r.concat(i.reviveArr);
              } else {
                i.reviveArr = r;
              }

              for (n = 0; n < r.length; n++) {
                var g = i.sortPersonNodes[n];
                p = r[n];

                if (g) {
                  g.getComponent($level_249667_personItem["default"]).personColor = p;
                  i.setColorPersonImg_sort(p, g);
                } else {
                  console.log("是否回收", $level_29076_config.colorDes[p]);
                }
              }

              console.log("start-reviveArr", JSON.parse(JSON.stringify(i.reviveArr)));

              for (n = 0; n < r.length; n++) {
                g = i.sortPersonNodes[n];
                p = r[n];

                if (!g) {
                  i.reviveArr = i.reviveArr.splice(n);
                  break;
                }
              }

              console.log("end-reviveArr", JSON.parse(JSON.stringify(i.reviveArr)));
              i.checkPerson();
              i.isSorting = !1;
            }).start();
            return [2];
        }
      });
    });
  };

  e.prototype.func_sortOld = function (t) {
    if (void 0 === t) {
      t = !1;
    }

    return __awaiter(this, void 0, void 0, function () {
      var e;
      var o;
      var i;
      var r = this;
      return __generator(this, function (n) {
        switch (n.label) {
          case 0:
            if (this.isSorting) {
              return [2];
            } else {
              return this.isSorting = !0, this.isSortAnim = !0, e = 1.5, [4, $assetManager["default"].getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)];
            }

          case 1:
            o = n.sent();
            i = cc.instantiate(o);
            this.dict.tailGas.parent.addChild(i);
            this.schedule(function () {
              for (var t = 0; t < r.sortPersonNodes.length; t++) {
                var e = r.sortPersonNodes[t];
                var o = r.randomNum(0, $level_29076_config.colorDes.length - 1);
                r.setColorPersonImg_sort(o, e);
              }
            }, 0.2, (e - 1) / 0.2 - 0.3);
            this.scheduleOnce(function () {
              r.policeIndex = 0;
              r.goldIndex = 0;
              r.isSortAnim = !1;
              i.destroy();
              r.isFail = !1;
              r.firstSortIndexArr = [];
              r.firstSortAmountArr = [];
              var e = [];
              var o = [];

              if (t) {
                var n = r.dict.parkingRoot.children[0].car;
                e.push(n.getComponent($level_29076_boxCarItem["default"]).carColor);
                o.push(n.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount);

                for (var a = 0; a < r.parkingNodes.length; a++) {
                  var s = (p = r.parkingNodes[a]).car;

                  if (!p.isEmpty && s && e.length < 3) {
                    e.push(s.getComponent($level_29076_boxCarItem["default"]).carColor);
                    o.push(s.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount);
                  }
                }
              } else {
                for (a = 0; a < r.parkingNodes.length; a++) {
                  n = (p = r.parkingNodes[a]).car;
                  !p.isEmpty && n && e.length < 4 && (e.push(n.getComponent($level_29076_boxCarItem["default"]).carColor), o.push(n.getComponent($level_29076_boxCarItem["default"]).emptySeatAmount));
                }
              }

              if (0 == e.length) {
                var c = new Array(r.colorTypeAmount).fill(0);

                for (a = 0; a < r.sortPersonNodes.length; a++) {
                  c[h = (p = r.sortPersonNodes[a]).getComponent($level_249667_personItem["default"]).personColor] += 1;
                  r.currentPersonColorAmount[h] -= 1;
                  !r.firstSortIndexArr.includes(h) && r.firstSortIndexArr.length < 2 && r.firstSortIndexArr.push(h);
                }

                var l = new Array(r.colorTypeAmount).fill([]);

                for (var h = 0; h < r.colorPersonAmountArr.length; h++) {
                  var p = r.colorPersonAmountArr[h];
                  var d = void 0;

                  if (r.colorPersonIndexArr[h] == p.length) {
                    d = [];
                  } else {
                    d = p.slice(-(p.length - r.colorPersonIndexArr[h]));
                  }

                  l[h] = d;
                }

                for (a = 0; a < l.length; a++) {
                  if (0 != c[a]) {
                    l[a].push(c[a]);
                  }
                }

                for (a = 0; a < r.firstSortIndexArr.length; a++) {
                  h = r.firstSortIndexArr[a];
                  var u = void 0;

                  if ((f = r.colorPersonArr[h] - r.currentPersonColorAmount[h]) >= 10) {
                    u = 10;
                  } else {
                    u = f;
                  }

                  var g = 0;

                  if ((v = l[h])[v.length - 1] > u) {
                    g = u;
                    v[v.length - 1] -= u;
                    v.unshift(u);
                  } else if (v[v.length - 1] == u) {
                    v.pop();
                    v.unshift(u);
                  } else {
                    for (; g < u;) {
                      if ((g += v[v.length - 1]) > u) {
                        v[v.length - 1] = g - u;
                      } else {
                        v.pop();
                      }
                    }

                    v.unshift(u);
                  }

                  l[h] = v;
                }

                for (a = 0; a < r.sortPersonNodes.length; a++) {
                  (v = r.sortPersonNodes[a]).destroy();
                }

                r.sortPersonNodes = [];
                r.colorPersonIndexArr = new Array(r.colorTypeAmount).fill(0);
                r.colorPersonAmountArr = l;
                r.createPerson(!0);
                r.isSorting = !1;
              } else if (1 == e.length || 2 == e.length) {
                var m = e.length;
                r.firstSortIndexArr = e;
                r.firstSortAmountArr = o;
                c = new Array(r.colorTypeAmount).fill(0);

                for (a = 0; a < r.sortPersonNodes.length; a++) {
                  c[h = (p = r.sortPersonNodes[a]).getComponent($level_249667_personItem["default"]).personColor] += 1;
                  r.currentPersonColorAmount[h] -= 1;
                  r.firstSortIndexArr.length < m + 1 && r.firstSortIndexArr.push(h);
                }

                if (t) {} else if (r.firstSortIndexArr.length < m + 1) {
                  for (a = 0; a < r.colorPersonArr.length; a++) {
                    if ((v = r.colorPersonArr[a]) - r.currentPersonColorAmount[a] && r.firstSortIndexArr.length < m + 1) {
                      r.firstSortIndexArr.push(a);
                    }
                  }
                }

                l = new Array(r.colorTypeAmount).fill([]);

                for (h = 0; h < r.colorPersonAmountArr.length; h++) {
                  p = r.colorPersonAmountArr[h];
                  d = void 0;

                  if (r.colorPersonIndexArr[h] == p.length) {
                    d = [];
                  } else {
                    d = p.slice(-(p.length - r.colorPersonIndexArr[h]));
                  }

                  l[h] = d;
                }

                for (a = 0; a < l.length; a++) {
                  if (0 != c[a]) {
                    l[a].push(c[a]);
                  }
                }

                for (a = 0; a < r.firstSortIndexArr.length; a++) {
                  h = r.firstSortIndexArr[a];

                  if (u = r.firstSortAmountArr[a]) {//
                  } else {
                    u = 10;
                  }

                  if ((f = r.colorPersonArr[h] - r.currentPersonColorAmount[h]) < 10) {
                    u = f;
                  }

                  g = 0;

                  if ((v = l[h])[v.length - 1] > u) {
                    g = u;
                    v[v.length - 1] -= u;
                    v.unshift(u);
                  } else if (v[v.length - 1] == u) {
                    v.pop();
                    v.unshift(u);
                  } else {
                    for (; g < u;) {
                      if ((g += v[v.length - 1]) > u) {
                        v[v.length - 1] = g - u;
                      } else {
                        v.pop();
                      }
                    }

                    v.unshift(u);
                  }

                  l[h] = v;
                }

                for (a = 0; a < r.sortPersonNodes.length; a++) {
                  (v = r.sortPersonNodes[a]).destroy();
                }

                r.sortPersonNodes = [];
                r.colorPersonIndexArr = new Array(r.colorTypeAmount).fill(0);
                r.colorPersonAmountArr = l;
                r.createPerson(!0, function () {
                  r.checkPerson();
                  r.isSorting = !1;
                });
              } else {
                r.firstSortIndexArr = e;
                r.firstSortAmountArr = o;
                c = new Array(r.colorTypeAmount).fill(0);

                for (a = 0; a < r.sortPersonNodes.length; a++) {
                  c[h = (p = r.sortPersonNodes[a]).getComponent($level_249667_personItem["default"]).personColor] += 1;
                  r.currentPersonColorAmount[h] -= 1;
                }

                l = new Array(r.colorTypeAmount).fill([]);

                for (h = 0; h < r.colorPersonAmountArr.length; h++) {
                  p = r.colorPersonAmountArr[h];
                  d = void 0;

                  if (r.colorPersonIndexArr[h] == p.length) {
                    d = [];
                  } else {
                    d = p.slice(-(p.length - r.colorPersonIndexArr[h]));
                  }

                  l[h] = d;
                }

                for (a = 0; a < l.length; a++) {
                  if (0 != c[a]) {
                    l[a].push(c[a]);
                  }
                }

                for (a = 0; a < r.firstSortIndexArr.length; a++) {
                  h = r.firstSortIndexArr[a];
                  u = r.firstSortAmountArr[a];
                  var f = r.colorPersonArr[h] - r.currentPersonColorAmount[h];
                  g = 0;

                  if ((v = l[h])[v.length - 1] > u) {
                    g = u;
                    v[v.length - 1] -= u;
                    v.unshift(u);
                  } else if (v[v.length - 1] == u) {
                    v.pop();
                    v.unshift(u);
                  } else {
                    for (; g < u;) {
                      if ((g += v[v.length - 1]) > u) {
                        v[v.length - 1] = g - u;
                      } else {
                        v.pop();
                      }
                    }

                    v.unshift(u);
                  }

                  l[h] = v;
                }

                for (a = 0; a < r.sortPersonNodes.length; a++) {
                  var v;
                  (v = r.sortPersonNodes[a]).destroy();
                }

                r.sortPersonNodes = [];
                r.colorPersonIndexArr = new Array(r.colorTypeAmount).fill(0);
                r.colorPersonAmountArr = l;
                r.createPerson(!0, function () {
                  r.checkPerson();
                  r.isSorting = !1;
                });
              }
            }, e);
            return [2];
        }
      });
    });
  };

  e.prototype.func_updateCar = function () {
    var t = [];
    var e = this.carRoot.children.concat(this.turntableCarArr);

    for (var o = 0; o < e.length; o++) {
      if (!(l = e[o]).active || l.getComponent($level_29076_boxCarItem["default"]).carState != $level_29076_config.CarState.Idle || l.getComponent($level_29076_boxCarItem["default"]).isTransportCar || l.getComponent($level_29076_boxCarItem["default"]).isUTransportCar || l.getComponent($level_29076_boxCarItem["default"]).isBlackCar) {//
      } else {
        t.push(l);
      }
    }

    for (var i = 0; i < t.length; i++) {
      var r = t[i];

      for (var n = 0; n < t.length; n++) {
        var a = t[n];

        if (r != a && r.getComponent($level_29076_boxCarItem["default"]).seatTotalAmount == a.getComponent($level_29076_boxCarItem["default"]).seatTotalAmount && r.getComponent($level_29076_boxCarItem["default"]).carColor != a.getComponent($level_29076_boxCarItem["default"]).carColor && !r.isExchange && !a.isExchange && 1 == this.randomNum(0, 1)) {
          var s = r.getComponent($level_29076_boxCarItem["default"]).carColor;
          var c = a.getComponent($level_29076_boxCarItem["default"]).carColor;
          r.getComponent($level_29076_boxCarItem["default"]).carColor = c;
          a.getComponent($level_29076_boxCarItem["default"]).carColor = s;
          r.isExchange = !0;
          a.isExchange = !0;
          this.setCarColorImg(r, r.getComponent($level_29076_boxCarItem["default"]).carColor);
          this.setCarColorImg(a, a.getComponent($level_29076_boxCarItem["default"]).carColor);
          break;
        }
      }
    }

    for (o = 0; o < e.length; o++) {
      var l;
      (l = e[o]).isExchange = !1;
    }
  };

  e.prototype.func_chooseClear = function () {
    this.isTransportCarMove = !1;
    var t = cc.instantiate(this.dict.tipPrefab);
    this.dict.tipPrefab.parent.addChild(t);
    this.tipRemove = t;
    t.children[1].getComponent(cc.Label).string = $languageManager["default"].formatStr("可拎出任意一个盒子至VIP位置消除");
    t.y = 301.643;
    t.active = !0;
    this.isRemove = !0;
    cc.game.emit("isRemove", !0);

    for (var e = 0; e < this.carRoot.children.length; e++) {
      var o = this.carRoot.children[e];

      if (o.getComponent($level_29076_boxCarItem["default"]).prevCar || o.getComponent($level_29076_boxCarItem["default"]).nextCar || o.getChildByName("key") || o.getChildByName("lock")) {
        o.opacity = 100;
      }
    }
  };

  e.prototype.removeCarOld = function (t) {
    var e = this;
    this.removePropUsing = !0;
    this.tipRemove.destroy();
    var o = t.convertToWorldSpaceAR(cc.v2(0, -t.height / 2));
    this.dict.helicopterRoot.position = cc.v3(434, -614, 0);
    var i = this.dict.helicopterRoot.parent.convertToNodeSpaceAR(o);
    var r = this.dict.helicopterRoot.position.sub(i).mag();
    this.dict.helicopterSpine.getComponent(sp.Skeleton).setAnimation(0, "animation2", !0);
    this.dict.parkingRoot.children[0].active = !0;
    var n = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(cc.v2(0, -this.dict.parkingRoot.children[0].height / 2));
    var a = this.dict.helicopterRoot.parent.convertToNodeSpaceAR(n);
    var s = i.sub(a).mag();
    this.dict.helicopterRoot.active = !0;
    this.dict.helicopterRoot.opacity = 255;
    cc.tween(this.dict.helicopterRoot).to(r / 500, {
      position: i
    }).to(0.3, {
      scale: 0.9
    }).call(function () {
      var o = cc.instantiate(t);
      o.getChildByName("car").getComponent(cc.PolygonCollider).enabled = !1;
      o.getComponent($level_29076_boxCarItem["default"]).lenImgName = t.getComponent($level_29076_boxCarItem["default"]).lenImgName;
      o.getComponent($level_29076_boxCarItem["default"]).colorImgName = t.getComponent($level_29076_boxCarItem["default"]).colorImgName;
      o.getComponent($level_29076_boxCarItem["default"]).carColor = t.getComponent($level_29076_boxCarItem["default"]).carColor;

      if (t.getComponent($level_29076_boxCarItem["default"]).isTransportCar) {
        var i = e.transportCarArr.indexOf(t);

        if (-1 !== i) {
          e.transportCarArr.splice(i, 1);
        }
      }

      t.destroy();
      e.dict.helicopterRoot.getChildByName("car").addChild(o);
      var r = t.convertToWorldSpaceAR(cc.v2(0, 0));
      o.position = e.dict.helicopterRoot.getChildByName("car").parent.convertToNodeSpaceAR(r);
    }).delay(0.3).to(0.3, {
      scale: 1
    }).to(s / 500, {
      position: a
    }).to(0.3, {
      scale: 0.9
    }).call(function () {
      var t;
      var o = e.dict.helicopterRoot.getChildByName("car").children[0];
      var r = o.getComponent($level_29076_boxCarItem["default"]).colorImgName;
      var n = o.getComponent($level_29076_boxCarItem["default"]).lenImgName;
      (t = cc.instantiate(e.dict.carPrefab.getChildByName("06" + n))).parking = e.dict.parkingRoot.children[0];
      t.getChildByName("car").getComponent(cc.PolygonCollider).enabled = !1;
      t.active = !1;
      e.carRoot.addChild(t);
      var a;
      var s = t.parking.convertToWorldSpaceAR(cc.v2(0, 0));
      i = t.parent.convertToNodeSpaceAR(s);
      t.position = cc.v2(i.x, i.y);
      var c = "" + r + 6 + n;
      a = "texture/" + e.folder + "/" + e.folder + "_" + c;
      t.getComponent($level_29076_boxCarItem["default"]).carColor = o.getComponent($level_29076_boxCarItem["default"]).carColor;
      t.getComponent($level_29076_boxCarItem["default"]).colorImgName = o.getComponent($level_29076_boxCarItem["default"]).colorImgName;
      t.getComponent($level_29076_boxCarItem["default"]).lenImgName = o.getComponent($level_29076_boxCarItem["default"]).lenImgName;
      t.parking.car = t;
      t.parking.isEmpty = !1;
      cc.resources.load(a, function (i, r) {
        o.destroy();

        if (r) {
          t.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r);
        }

        t.active = !0;
        e.dict.helicopterRoot.opacity = 0;
        e.remove();
        e.scheduleOnce(function () {
          e.isRemove = !1;
          e.removePropUsing = !1;
          e.isTransportCarMove = !0;
          cc.game.emit("isRemove", !1);

          for (var t = 0; t < e.carRoot.children.length; t++) {
            var o = e.carRoot.children[t];

            if (o.getComponent($level_29076_boxCarItem["default"]).prevCar || o.getComponent($level_29076_boxCarItem["default"]).nextCar || o.getChildByName("key") || o.getChildByName("lock")) {
              o.opacity = 255;
            }
          }
        }, 1);
      });
    }).start();
  };

  e.prototype.removeCar = function (t) {
    var e;
    var o = this;
    this.removePropUsing = !0;
    this.tipRemove.destroy();
    this.dict.parkingRoot.children[0].active = !0;

    if (1 == t.getComponent($level_29076_boxCarItem["default"]).lenImgName) {
      e = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(cc.v2(0, t.height / 2 + 5));
    } else {
      if (2 == t.getComponent($level_29076_boxCarItem["default"]).lenImgName) {
        e = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(cc.v2(0, t.height / 2));
      } else {
        e = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(cc.v2(0, t.height / 2 + 2));
      }
    }

    var i = t.parent.convertToNodeSpaceAR(e);
    cc.tween(t).to(0.3, {
      position: i
    }).call(function () {
      var e;
      var r = t.getComponent($level_29076_boxCarItem["default"]).lenImgName;
      (e = cc.instantiate(o.dict.carPrefab.getChildByName("06" + r))).parking = o.dict.parkingRoot.children[0];
      e.getChildByName("car").getComponent(cc.PolygonCollider).enabled = !1;
      e.active = !1;
      o.carRoot.addChild(e);
      e.position = i;
      e.getComponent($level_29076_boxCarItem["default"]).carColor = t.getComponent($level_29076_boxCarItem["default"]).carColor;
      e.getComponent($level_29076_boxCarItem["default"]).colorImgName = t.getComponent($level_29076_boxCarItem["default"]).colorImgName;
      e.getComponent($level_29076_boxCarItem["default"]).lenImgName = t.getComponent($level_29076_boxCarItem["default"]).lenImgName;
      e.parking.car = e;
      e.parking.isEmpty = !1;
      t.destroy();
      var n = e.getComponent($level_29076_boxCarItem["default"]).seatTotalAmount;
      var a = e.getComponent($level_29076_boxCarItem["default"]).carColor;
      e.getChildByName("car").getComponent(cc.Sprite).spriteFrame = game.boxAtlas.getSpriteFrame("f28749_" + (100 * $level_29076_config.ParkingImg[n] + a + 1));
      e.active = !0;
      o.remove();
      o.scheduleOnce(function () {
        o.isRemove = !1;
        o.removePropUsing = !1;
        o.isTransportCarMove = !0;
        cc.game.emit("isRemove", !1);
      }, 1);
    }).start();
  };

  e.prototype.func_revive = function () {
    if (this.func_hasLockParking()) {
      for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
        var e = this.dict.parkingRoot.children[t];

        if (e.getChildByName("videoLock") && e.getChildByName("videoLock").active) {
          e.getChildByName("videoLock").destroy();
          e.getChildByName("empty").active = !0;
          this.playUnlockSpine(e);
          e.isEmpty = !0;
          this.parkingNodes.push(e);
          break;
        }
      }

      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
        queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
        id: 8,
        sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
      });
      this.func_sortOld();
    } else {
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
        queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
        id: 9,
        sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
      });
      this.func_sortOld();
    }
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

  e.prototype.func_endPause = function () {
    for (var t = 0; t < this.dict.personRoot.children.length; t++) {
      this.dict.personRoot.children[t].pauseAllActions();
    }
  };

  e.prototype.func_resume = function () {
    for (var t = 0; t < this.dict.personRoot.children.length; t++) {
      this.dict.personRoot.children[t].resumeAllActions();
    }
  };

  __decorate([W(cc.SpriteAtlas)], e.prototype, "box2SpriteAtlas", void 0);

  __decorate([W], e.prototype, "isDebug", void 0);

  __decorate([W], e.prototype, "boundary", void 0);

  __decorate([$limitRepeat.LimitRepeat(0.3)], e.prototype, "touchStart", null);

  return __decorate([B], e);
}($brainLevelBase["default"]);

exports["default"] = L;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA3Nl9jb250cm9sLmpzIl0sIm5hbWVzIjpbImkiLCIkdXNlckNvbnN0IiwicmVxdWlyZSIsIiRhdWRpb01hbmFnZXIiLCIkbGFuZ3VhZ2VNYW5hZ2VyIiwiJHBsYXRmb3JtTWFuYWdlciIsIiR0aXBNYW5hZ2VyIiwiJHVzZXJNYW5hZ2VyIiwiJGxpbWl0UmVwZWF0IiwiJHNodVNodUNvbnN0IiwiJGxvY2FsU3RvcmFnZUNvbnN0IiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCIkbWVtb3J5U3RvcmFnZUNvbnN0IiwiJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyIiwiJGFzc2V0TWFuYWdlciIsIiRwb3B1cENvbnN0IiwiJHBvcHVwTWFuYWdlciIsIiRicmFpbkxldmVsQmFzZSIsIiRwb29sTWdyIiwiJGxldmVsXzI5MDc2X2NvbmZpZyIsIiRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbSIsIiRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtIiwiJG1vdGlvblRyYWlsIiwiVCIsImNjIiwiX2RlY29yYXRvciIsIkIiLCJjY2NsYXNzIiwiVyIsInByb3BlcnR5IiwiTCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJib3gyU3ByaXRlQXRsYXMiLCJpc0RlYnVnIiwiYm91bmRhcnkiLCJjYXJSb290IiwiY29sb3JUeXBlQW1vdW50IiwiY29sb3JEZXMiLCJsZW5ndGgiLCJsYXN0Q2FyIiwib2xkU29ydEFtb3VudCIsImd1aWRlTm9kZXMiLCJndWlkZVRleHQiLCJjdXJyZW50R3VpZGVOb2RlIiwiZ3VpZGVkTm9kZXMiLCJwb29sTWdyIiwic29ydENvbG9yX25ldyIsImxldmVsRGF0YUpTT04iLCJwYXJraW5nTm9kZXMiLCJiZXR3ZWVuMl80Q2FyQXJyIiwiaGlnaFNwZWVkUmFpbFNwZWVkIiwidHVybnRhYmxlQ2FyQXJyIiwiaXNUcmFuc3BvcnRDYXJNb3ZlIiwidHJhbnNwb3J0U3BlZWQiLCJjb2xvclBlcnNvbkFyciIsInVubG9ja1BhcmtpbmdUYXJnZXQiLCJjYXJwYXJrSW5nIiwiaXNSb3RhdGVDcmVhdGUiLCJtb3ZlQ2FyQW1vdW50IiwiYWxsUGVyc29uQW1vdW50IiwiYWxsUGVyc29uQW1vdW50MiIsImV4dHJhV2VpZ2h0Q29uc3QiLCJleHRyYVdlaWdodCIsImNhcldlaWdodCIsInBhcmtpbmdXZWlnaHQiLCJzb3J0V2VpZ2h0IiwiYWxsV2VpZ2h0IiwiY29sb3JQZXJzb25BbW91bnRBcnIiLCJjb2xvclBlcnNvbkFtb3VudEFyckluZGV4IiwiY29sb3JQZXJzb25JbmRleEFyciIsInVpU2hvd1BlcnNvbkFtb3VudCIsImN1cnJlbnRQZXJzb25Db2xvckFtb3VudCIsInNvcnRQZXJzb25Ob2RlcyIsInRpbWVzIiwiaXNDYW5TdGFydENsaWNrIiwiaXNDaGVjayIsImlzRmFpbCIsInRpbWVJREFyciIsImlzV2luIiwicGVyc29uU3BlZWQiLCJwb2xpY2VJbmRleCIsImdvbGRJbmRleCIsInBvbGljZVNraW5OYW1lIiwiZ29sZFNraW5OYW1lIiwiaXNSZXZpdmVBbW91bnQiLCJsYXN0RXh0cmFJbmRleEFyciIsInJhbmRvbUNvbG9yQXJyIiwicmFuZG9tQ29sb3JOdW0iLCJiYXRjaE1hcCIsInBhdGhBcnIiLCJjYXJJbmRleCIsImNhck5vZGVBcnIiLCJjYXJBbGxBbW91bnQiLCJ3ZWlnaHRMaW1pdEluZGV4IiwiaGFyZFBvaW50c0luZGV4cyIsImxvY2FsRGF0YSIsInJldml2ZUFyciIsImZpcnN0U29ydEluZGV4QXJyIiwiZmlyc3RTb3J0QW1vdW50QXJyIiwiaXNTb3J0aW5nIiwiaXNTb3J0QW5pbSIsImlzUmVtb3ZlIiwidGlwUmVtb3ZlIiwicmVtb3ZlUHJvcFVzaW5nIiwidHJhbnNwb3J0Q2FyQXJyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiX19hd2FpdGVyIiwibyIsIl9fZ2VuZXJhdG9yIiwiY2FsbCIsImRpY3QiLCJhY3RpdmUiLCJyb2FkIiwieSIsInZpZXciLCJnZXRGcmFtZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsIkRyaW5rUG9zQXJyIiwiTm9kZSIsInBlcnNvblBvc1Jvb3QiLCJhZGRDaGlsZCIsInBvc2l0aW9uIiwidjMiLCJBcnJheSIsImZpbGwiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJsZXZlbERhdGEiLCJsZXZlbElEIiwic2V0Q29sbGlzaW9uTWFuYWdlciIsImJ0bnMiLCJoaXRTcGluZSIsInNjYWxlIiwidGFpbEdhcyIsImdldENvbXBvbmVudCIsImhlYWRXaWR0aCIsInRhaWxXaWR0aCIsImhlYWRPcGFjaXR5IiwidGFpbE9wYWNpdHkiLCJoYW5kIiwicHVzaCIsImNoaWxkcmVuIiwiaGFuZFBvcyIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwidjIiLCJuYW1lIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiaW5kZXhPZiIsImhhbmRUZXh0IiwiTGFiZWwiLCJzdHJpbmciLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNoYWNrQWN0aW9uIiwibW92ZUJ5IiwiciIsIm4iLCJhIiwicyIsImMiLCJsIiwiaCIsInAiLCJzZXF1ZW5jZSIsImNoYW5nZUNhciIsImQiLCJpc1JlYWR5RGVzdHJveSIsImNvbG9ySW1nTmFtZSIsImxlbkltZ05hbWUiLCJpbnN0YW50aWF0ZSIsImNhclByZWZhYiIsImdldENoaWxkQnlOYW1lIiwicGFya2luZyIsImNhclN0YXRlIiwiQ2FyU3RhdGUiLCJJblJvYWRSaWdodCIsIkluUm9hZExlZnQiLCJ1cGRhdGVDYXJXZWlnaHQiLCJtZ3IiLCJkaXJJbWdOYW1lIiwiY2FyQ29sb3IiLCJ4IiwiT25Cb3R0b21MZWZ0IiwiT25Cb3R0b21SaWdodCIsIkdvaW5nUGFya2luZyIsImZvbGRlciIsImdldENhckltZ0J5Q29sb3IiLCJzdG9wQWxsQWN0aW9ucyIsInB1dCIsImRlc3Ryb3kiLCJuZXh0Q2FyIiwiTm9ybWFsIiwiZyIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJpc0ZpcmVFbmdpbmUiLCJNYXRoIiwiYWJzIiwiYWRkVGFpbEdhc1NwaW5lIiwidHdlZW4iLCJ0byIsInNwZWVkIiwiaXNSaWNoQ2FyIiwiaXNUcmFtY2FyIiwic3RhcnQiLCJnZXRXUG9zQnlOb2RlIiwiUGFya2luZyIsInN1YiIsIm1hZyIsImNhciIsInNlYXRUb3RhbEFtb3VudCIsImdhbWUiLCJib3hBdGxhcyIsIlBhcmtpbmdJbWciLCJwdXRUYWlsR2FzIiwiY2hlY2tQZXJzb24iLCJHb2luZ1JvYWQiLCJ1IiwiYnkiLCJjb2xsaXNpb24iLCJsb2FkIiwiUHJvbWlzZSIsInJlc291cmNlcyIsIndhcm4iLCJTcHJpdGVGcmFtZSIsImhpdCIsInNjaGVkdWxlT25jZSIsImlzRW1wdHkiLCJvbkxldmVsUmVhZHkiLCJpbml0VmlldyIsIm0iLCJmIiwidiIsImxhYmVsIiwiZ3VpZGUiLCJwYXJraW5nUm9vdCIsImNoaWxkcmVuQ291bnQiLCJlcnJvciIsImdldExvY2FsIiwiY29uY2F0IiwiaW5kZXhJRCIsImdldFBhdGgiLCJibGFja0Ftb3VudCIsInBhdGgiLCJhZGRDb21wb25lbnQiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJwZXJzb25BbW91bnQiLCJlbWl0Iiwic2V0Q2FySUQiLCJpc0JsYWNrQ2FyIiwiY2FySUQiLCJnZXRSYW5kb21EaXN0aW5jdEVsZW1lbnRzIiwic2V0TG9jYWwiLCJzb3J0Q29sb3IiLCJnZXRBcnJCeUxlbiIsImdldENhckNvbG9yIiwic2V0Q2FyQ29sb3JJbWciLCJlbXB0eVNlYXRBbW91bnQiLCJpbmNsdWRlcyIsImdldEFtb3VudEJ5Q29sb3IiLCJnZXRSZXMiLCJQcmVmYWIiLCJzZW50IiwicGVyc29uUHJlZmFiIiwiY3JlYXRlUGVyc29uIiwicGVyc29uTW92ZSIsIm9uVG91Y2giLCJzY2hlZHVsZSIsImNoZWNrQ2FyRnVsbCIsInRpbWVyIiwiY2hlY2tIYXNQZXJzb25Nb3ZlIiwiY2hlY2tIYXNDYXJNb3ZlIiwiY2hlY2siLCJmdW5jX2NoZWNrQ2FuVXNlU29ydCIsImlzTW92aW5nIiwiSWRsZSIsImNoZWNrSGFzQ2FyTW92ZUFtb3VudCIsImlzVmFsaWQiLCJPdXRQYXJraW5nIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwidG91Y2hTdGFydF9wYXJraW5nIiwidGFyZ2V0IiwiZ2V0IiwiVW5sb2NrUGFya2luZyIsInNldCIsIlNodVNodUNvbnN0IiwiQm9vc3Rlcl91c2UiLCJsdiIsIlVzZXIiLCJnZXRUZW1wRGF0YSIsIlRlbXBEYXRhIiwiQ1VSUkVOVF9MRVZFTF9JRCIsInF1ZXVlIiwiQ1VSUkVOVF9MRVZFTCIsIm1vZGUiLCJDVVJSRU5UX01PREUiLCJpZCIsIm9yIiwic29ydCIsIkNvbmZpZ1N1ZmZpeCIsInBsYXlVbmxvY2tTcGluZSIsImNhcmRBbW91bnQiLCJwcm9wSW5kZXgiLCJzaG93IiwiUG9wdXBDb25zdCIsIlByb3AiLCJQbGF0Zm9ybSIsInNob3dSZXdhcmRBZHMiLCJyZXdhcmRfYnRuIiwiamllc3VvIiwic3AiLCJTa2VsZXRvbiIsInByZW11bHRpcGxpZWRBbHBoYSIsInNldEFuaW1hdGlvbiIsImZ1bmNfdW5sb2NrUGFya2luZyIsImNoZWNrSGFzQ29sbGlzaW9uIiwiaXNUcmFuc3BvcnRDYXIiLCJpc1VUcmFuc3BvcnRDYXIiLCJDIiwiSW50ZXJzZWN0aW9uIiwibGluZUxpbmUiLCJnZXRMb2NhdGlvbiIsIlBvbHlnb25Db2xsaWRlciIsInBvaW50SW5Qb2x5Z29uIiwiZ2V0V1Bvc0J5UG9seWdvbiIsImZvcm1hdFN0ciIsInByZXZDYXIiLCJvcGFjaXR5IiwiVGlwIiwicnVuQWN0aW9uIiwiaXNTY2FsZUFuaW0iLCJpc0NhclBhcmsiLCJpc1dlbiIsIm9ibGlxdWVIZWFkIiwicmVtb3ZlQ2FyIiwiaXNDYW5DbGljayIsIm90aGVyQ2FyTm9kZSIsImdldE90aGVyQ2FyQnlEaXN0YW5jZSIsIm9sZFBvcyIsIkF1ZGlvIiwiZ2V0RWZmZWN0TXV0ZSIsInBsYXlSZW1vdGVTb3VuZCIsImdldEFuZ2xlIiwiYXRhbjIiLCJQSSIsImFkZFN0YXJTcGluZSIsIm1peFNwaW5lIiwiZ2V0Tm9kZVdvcmxkRXVsZXJBbmdsZXMiLCJhbmdsZSIsImZ1biIsInN0b3AiLCJ1bnNjaGVkdWxlIiwicG9pbnRzIiwib2Zmc2V0IiwiZmxvb3IiLCJyYW5kb20iLCJDYXJEaXJJbWciLCJyb3VuZCIsIkNhckxlbkltZyIsInNldENhckNvbG9ySW1nXzIiLCJlbmFibGVkIiwiaXNOb0JsYWNrIiwiZ2V0UGVyc29uQ29sb3IiLCJyYW5kb21OdW0iLCJvbGRQb3NJbmRleCIsInBlcnNvblJvb3QiLCJwZXJzb25Db2xvciIsInNldENvbG9yUGVyc29uSW1nIiwiZG9vck91dHNpZGUiLCJ6SW5kZXgiLCJtb3ZlIiwidXBkYXRlUGFya2luZ1dlaWdodCIsInRhcmdldFBlcnNvbiIsImNoZWNrVGlwVGV4dCIsInNoaWZ0IiwidGFyZ2V0U2VhdCIsImFkZCIsImJlemllclRvIiwic2V0Q29sb3JQZXJzb25JbWdfc2VhdCIsImNhckFuaW0iLCJjaGVja0NhckdvIiwidmFsdWUiLCJpc0NhckFuaW0iLCJzZXRJbnRlcnZhbCIsImNoZWNrQ2FyQmxvY2siLCJHb2luZ091dFBhcmtpbmdfblBvcyIsIkdvaW5nT3V0UGFya2luZyIsIk51bWJlciIsInRpbWVTY2FsZSIsInNldFNraW4iLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwiY2hlY2tSZXMiLCJnZXRDb25maWciLCJoYXNDb2luIiwiY29pbiIsInBsYXlSaWdodCIsImZ1bmNfYWRkUmVzb3VyY2UiLCJCdWlsZFJlc291cmNlIiwiZHJpbmtBdGxhcyIsInNldENvbG9yUGVyc29uSW1nX3NvcnQiLCJzaHVmZmxlQXJyYXkiLCJmbGF0dGVuIiwicmVkdWNlIiwiaXNBcnJheSIsImNvbnNvbGVXZWlnaHQiLCJ1cGRhdGVTb3J0V2VpZ2h0IiwicmFuZG9tQnlXZWlnaHQiLCJtYXAiLCJmb3JFYWNoIiwiZm9udFNpemUiLCJwb2ludExpbmVEaXN0YW5jZSIsImNvbGxpc2lvbkFyciIsIl8iLCJTIiwiayIsImhhc0NvbW1vbkVsZW1lbnQiLCJzb21lIiwiYXJlQWxsTnVtYmVyc1NtYWxsZXJUaGFuIiwiZXZlcnkiLCJjaGVja1dlaWdodExpbWl0Iiwid2VpZ2h0TGltaXQiLCJmZXRjaE1heEluZGV4Iiwia2V5IiwiZmlsdGVyIiwiZ2V0TGV2ZWxQcm9ncmVzc0J5Q2FyIiwiaGFyZFBvaW50cyIsImxpbWl0UmFuayIsImFycmF5c0VxdWFsIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJ0aXBQcmVmYWIiLCJzZXRQb3NpdGlvbiIsImRlbGF5IiwiZnVuY19zb3J0MiIsImZ1bmNfc29ydCIsInJlbW92ZSIsInVuc2hpZnQiLCJyZXZpdmUiLCJzcGxpY2UiLCJyZXZpdmUyIiwiZnVuY19zb3J0T2xkIiwic2xpY2UiLCJwb3AiLCJmdW5jX3VwZGF0ZUNhciIsImlzRXhjaGFuZ2UiLCJmdW5jX2Nob29zZUNsZWFyIiwicmVtb3ZlQ2FyT2xkIiwiaGVsaWNvcHRlclJvb3QiLCJoZWxpY29wdGVyU3BpbmUiLCJmdW5jX3Jldml2ZSIsImZ1bmNfaGFzTG9ja1BhcmtpbmciLCJmdW5jX2VuZFBhdXNlIiwicGF1c2VBbGxBY3Rpb25zIiwiZnVuY19yZXN1bWUiLCJyZXN1bWVBbGxBY3Rpb25zIiwiX19kZWNvcmF0ZSIsIlNwcml0ZUF0bGFzIiwiTGltaXRSZXBlYXQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMseUJBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsNEJBQUQsQ0FBM0I7O0FBQ0EsSUFBSUUsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQywrQkFBRCxDQUE5Qjs7QUFDQSxJQUFJRyxnQkFBZ0IsR0FBR0gsT0FBTyxDQUFDLCtCQUFELENBQTlCOztBQUNBLElBQUlJLFdBQVcsR0FBR0osT0FBTyxD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M2IsQ0FBQyxDQUFDNkUsU0FBeEIsRUFBbUMsaUJBQW5DLEVBQXNELEtBQUssQ0FBM0QsQ0FBVjs7RUFDQTZXLFVBQVUsQ0FBQyxDQUFDOWIsQ0FBRCxDQUFELEVBQU1JLENBQUMsQ0FBQzZFLFNBQVIsRUFBbUIsU0FBbkIsRUFBOEIsS0FBSyxDQUFuQyxDQUFWOztFQUNBNlcsVUFBVSxDQUFDLENBQUM5YixDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDNkUsU0FBUixFQUFtQixVQUFuQixFQUErQixLQUFLLENBQXBDLENBQVY7O0VBQ0E2VyxVQUFVLENBQUMsQ0FBQ2xkLFlBQVksQ0FBQ29kLFdBQWIsQ0FBeUIsR0FBekIsQ0FBRCxDQUFELEVBQWtDNWIsQ0FBQyxDQUFDNkUsU0FBcEMsRUFBK0MsWUFBL0MsRUFBNkQsSUFBN0QsQ0FBVjs7RUFDQSxPQUFPNlcsVUFBVSxDQUFDLENBQUNoYyxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBL3BHTyxDQStwR0xmLGVBQWUsV0EvcEdWLENBQVI7O0FBZ3FHQTRjLE9BQU8sV0FBUCxHQUFrQi9iLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciAkdXNlckNvbnN0ID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvVXNlckNvbnN0XCIpO1xudmFyICRhdWRpb01hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9BdWRpb01hbmFnZXJcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICR0aXBNYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvVGlwTWFuYWdlclwiKTtcbnZhciAkdXNlck1hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9Vc2VyTWFuYWdlclwiKTtcbnZhciAkbGltaXRSZXBlYXQgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9MaW1pdFJlcGVhdFwiKTtcbnZhciAkc2h1U2h1Q29uc3QgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9TaHVTaHVDb25zdFwiKTtcbnZhciAkbG9jYWxTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9Mb2NhbFN0b3JhZ2VDb25zdFwiKTtcbnZhciAkbG9jYWxTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0xvY2FsU3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJG1lbW9yeVN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL01lbW9yeVN0b3JhZ2VDb25zdFwiKTtcbnZhciAkbWVtb3J5U3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9NZW1vcnlTdG9yYWdlTWFuYWdlclwiKTtcbnZhciAkYXNzZXRNYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvQXNzZXRNYW5hZ2VyXCIpO1xudmFyICRwb3B1cENvbnN0ID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvUG9wdXBDb25zdFwiKTtcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvUG9wdXBNYW5hZ2VyXCIpO1xudmFyICRicmFpbkxldmVsQmFzZSA9IHJlcXVpcmUoXCIuL0JyYWluTGV2ZWxCYXNlXCIpO1xudmFyICRwb29sTWdyID0gcmVxdWlyZShcIi4vUG9vbE1nclwiKTtcbnZhciAkbGV2ZWxfMjkwNzZfY29uZmlnID0gcmVxdWlyZShcIi4vTGV2ZWwtMjkwNzZfY29uZmlnXCIpO1xudmFyICRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbSA9IHJlcXVpcmUoXCIuL0xldmVsLTI0OTY2N19wZXJzb25JdGVtXCIpO1xudmFyICRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtID0gcmVxdWlyZShcIi4vTGV2ZWwtMjkwNzZfYm94Q2FySXRlbVwiKTtcbnZhciAkbW90aW9uVHJhaWwgPSByZXF1aXJlKFwiLi9Nb3Rpb25UcmFpbFwiKTtcbnZhciBUID0gY2MuX2RlY29yYXRvcjtcbnZhciBCID0gVC5jY2NsYXNzO1xudmFyIFcgPSBULnByb3BlcnR5O1xudmFyIEwgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5ib3gyU3ByaXRlQXRsYXMgPSBudWxsO1xuICAgICAgICBlLmlzRGVidWcgPSAhMTtcbiAgICAgICAgZS5ib3VuZGFyeSA9IDc1MDtcbiAgICAgICAgZS5jYXJSb290ID0gbnVsbDtcbiAgICAgICAgZS5jb2xvclR5cGVBbW91bnQgPSAkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzLmxlbmd0aDtcbiAgICAgICAgZS5sYXN0Q2FyID0gbnVsbDtcbiAgICAgICAgZS5vbGRTb3J0QW1vdW50ID0gMDtcbiAgICAgICAgZS5ndWlkZU5vZGVzID0gW107XG4gICAgICAgIGUuZ3VpZGVUZXh0ID0gW1xuICAgICAgICAgICAgXCLmsb3ovabkvJrmnJ3nnYDnrq3lpLTmlrnlkJHnp7vliqhcIixcbiAgICAgICAgICAgIFwi5aSn5be06L2m5Y+v5Lul6L29MTDkuKrlkIzoibLlsI/kurpcIixcbiAgICAgICAgICAgIFwi5bCP5be05aOr5Y+v5Lul6L29NuS4quWQjOiJsuWwj+S6ulwiLFxuICAgICAgICAgICAgXCLovb/ovablj6/ku6Xovb005Liq5ZCM6Imy5bCP5Lq6XCJcbiAgICAgICAgXTtcbiAgICAgICAgZS5jdXJyZW50R3VpZGVOb2RlID0gbnVsbDtcbiAgICAgICAgZS5ndWlkZWROb2RlcyA9IFtdO1xuICAgICAgICBlLnBvb2xNZ3IgPSBuZXcgJHBvb2xNZ3IuZGVmYXVsdCgpO1xuICAgICAgICBlLnNvcnRDb2xvcl9uZXcgPSBbXTtcbiAgICAgICAgZS5sZXZlbERhdGFKU09OID0ge307XG4gICAgICAgIGUucGFya2luZ05vZGVzID0gW107XG4gICAgICAgIGUuYmV0d2VlbjJfNENhckFyciA9IFtdO1xuICAgICAgICBlLmhpZ2hTcGVlZFJhaWxTcGVlZCA9IDYwMDtcbiAgICAgICAgZS50dXJudGFibGVDYXJBcnIgPSBbXTtcbiAgICAgICAgZS5pc1RyYW5zcG9ydENhck1vdmUgPSAhMTtcbiAgICAgICAgZS50cmFuc3BvcnRTcGVlZCA9IDUwO1xuICAgICAgICBlLmNvbG9yUGVyc29uQXJyID0gW107XG4gICAgICAgIGUudW5sb2NrUGFya2luZ1RhcmdldCA9IG51bGw7XG4gICAgICAgIGUuY2FycGFya0luZyA9ICExO1xuICAgICAgICBlLmlzUm90YXRlQ3JlYXRlID0gITE7XG4gICAgICAgIGUubW92ZUNhckFtb3VudCA9IDA7XG4gICAgICAgIGUuYWxsUGVyc29uQW1vdW50ID0gMDtcbiAgICAgICAgZS5hbGxQZXJzb25BbW91bnQyID0gMDtcbiAgICAgICAgZS5leHRyYVdlaWdodENvbnN0ID0gMDtcbiAgICAgICAgZS5leHRyYVdlaWdodCA9IFtdO1xuICAgICAgICBlLmNhcldlaWdodCA9IFtdO1xuICAgICAgICBlLnBhcmtpbmdXZWlnaHQgPSBbXTtcbiAgICAgICAgZS5zb3J0V2VpZ2h0ID0gW107XG4gICAgICAgIGUuYWxsV2VpZ2h0ID0gW107XG4gICAgICAgIGUuY29sb3JQZXJzb25BbW91bnRBcnIgPSBbXTtcbiAgICAgICAgZS5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4ID0gW107XG4gICAgICAgIGUuY29sb3JQZXJzb25JbmRleEFyciA9IFtdO1xuICAgICAgICBlLnVpU2hvd1BlcnNvbkFtb3VudCA9IDIwO1xuICAgICAgICBlLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudCA9IFtdO1xuICAgICAgICBlLnNvcnRQZXJzb25Ob2RlcyA9IFtdO1xuICAgICAgICBlLnRpbWVzID0gMDtcbiAgICAgICAgZS5pc0NhblN0YXJ0Q2xpY2sgPSAhMTtcbiAgICAgICAgZS5pc0NoZWNrID0gITE7XG4gICAgICAgIGUuaXNGYWlsID0gITE7XG4gICAgICAgIGUudGltZUlEQXJyID0gW107XG4gICAgICAgIGUuaXNXaW4gPSAhMTtcbiAgICAgICAgZS5wZXJzb25TcGVlZCA9IDEyMDA7XG4gICAgICAgIGUucG9saWNlSW5kZXggPSAwO1xuICAgICAgICBlLmdvbGRJbmRleCA9IDA7XG4gICAgICAgIGUucG9saWNlU2tpbk5hbWUgPSBcImFcIjtcbiAgICAgICAgZS5nb2xkU2tpbk5hbWUgPSBcImFcIjtcbiAgICAgICAgZS5pc1Jldml2ZUFtb3VudCA9IDA7XG4gICAgICAgIGUubGFzdEV4dHJhSW5kZXhBcnIgPSBbXTtcbiAgICAgICAgZS5yYW5kb21Db2xvckFyciA9IFtdO1xuICAgICAgICBlLnJhbmRvbUNvbG9yTnVtID0gW107XG4gICAgICAgIGUuYmF0Y2hNYXAgPSB7fTtcbiAgICAgICAgZS5wYXRoQXJyID0gW107XG4gICAgICAgIGUuY2FySW5kZXggPSBbXTtcbiAgICAgICAgZS5jYXJOb2RlQXJyID0gW107XG4gICAgICAgIGUuY2FyQWxsQW1vdW50ID0gMDtcbiAgICAgICAgZS53ZWlnaHRMaW1pdEluZGV4ID0gMDtcbiAgICAgICAgZS5oYXJkUG9pbnRzSW5kZXhzID0gW107XG4gICAgICAgIGUubG9jYWxEYXRhID0ge307XG4gICAgICAgIGUucmV2aXZlQXJyID0gW107XG4gICAgICAgIGUuZmlyc3RTb3J0SW5kZXhBcnIgPSBbXTtcbiAgICAgICAgZS5maXJzdFNvcnRBbW91bnRBcnIgPSBbXTtcbiAgICAgICAgZS5pc1NvcnRpbmcgPSAhMTtcbiAgICAgICAgZS5pc1NvcnRBbmltID0gITE7XG4gICAgICAgIGUuaXNSZW1vdmUgPSAhMTtcbiAgICAgICAgZS50aXBSZW1vdmUgPSBudWxsO1xuICAgICAgICBlLnJlbW92ZVByb3BVc2luZyA9ICExO1xuICAgICAgICBlLnRyYW5zcG9ydENhckFyciA9IFtdO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUm9vdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3Qucm9hZC55ID0gMTY4Ljc4OTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3RbXCIxLTJcIl0ueSA9IC0yMDAuMzQ3O1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJSb290LnkgPSA0Ny41O1xuICAgICAgICAgICAgICAgIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XG4gICAgICAgICAgICAgICAgY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgZm9yIChlID0gMDsgZSA8ICRsZXZlbF8yOTA3Nl9jb25maWcuRHJpbmtQb3NBcnIubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbyA9IG5ldyBjYy5Ob2RlKFwiXCIgKyBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAkbGV2ZWxfMjkwNzZfY29uZmlnLkRyaW5rUG9zQXJyW2VdO1xuICAgICAgICAgICAgICAgICAgICBvLnBvc2l0aW9uID0gY2MudjMoaVswXSwgaVsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudWlTaG93UGVyc29uQW1vdW50ID0gJGxldmVsXzI5MDc2X2NvbmZpZy5Ecmlua1Bvc0Fyci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYVdlaWdodCA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RFeHRyYUluZGV4QXJyID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgIHRoaXMucGFya2luZ1dlaWdodCA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkluZGV4QXJyID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BcnIgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbERhdGFKU09OID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkbGV2ZWxfMjkwNzZfY29uZmlnLmxldmVsRGF0YVt0aGlzLmxldmVsSURdKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xsaXNpb25NYW5hZ2VyKCEwLCAhMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJSb290ID0gdGhpcy5kaWN0LmNhclJvb3Q7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5idG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5idG5zLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGl0U3BpbmUuc2NhbGUgPSAwLjQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC50YWlsR2FzLmdldENvbXBvbmVudCgkbW90aW9uVHJhaWwuZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS5sZW5ndGggPSAyNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS5oZWFkV2lkdGggPSAzNTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS50YWlsV2lkdGggPSAyMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS5oZWFkT3BhY2l0eSA9IDIzMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS50YWlsT3BhY2l0eSA9IDQwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LmhhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGVzLnB1c2godGhpcy5kaWN0LmNhclJvb3QuY2hpbGRyZW5bM10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaCh0aGlzLmRpY3QuY2FyUm9vdC5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKHRoaXMuZGljdC5jYXJSb290LmNoaWxkcmVuWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGVzLnB1c2godGhpcy5kaWN0LmNhclJvb3QuY2hpbGRyZW5bMl0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHdWlkZU5vZGUgPSB0aGlzLmd1aWRlTm9kZXNbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZFBvcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnByb3RvdHlwZS5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy50aW1lSURBcnIubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHRoaXMudGltZUlEQXJyW2VdO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW5kUG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IGNjLnYyKDAsIC0yMCk7XG4gICAgICAgIGlmIChcIjA1My0xXCIgPT0gdGhpcy5jdXJyZW50R3VpZGVOb2RlLm5hbWUpIHtcbiAgICAgICAgICAgIHQgPSBjYy52MigtMTUsIC0zNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoXCIwNTMtMFwiID09IHRoaXMuY3VycmVudEd1aWRlTm9kZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdCA9IGNjLnYyKDE1LCAtMzUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXCIwNDItMFwiID09IHRoaXMuY3VycmVudEd1aWRlTm9kZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBjYy52MigxNSwgLTUwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ID0gY2MudjIoLTE1LCAtMjApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9IHRoaXMuY3VycmVudEd1aWRlTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodCk7XG4gICAgICAgIHZhciBvID0gdGhpcy5ndWlkZU5vZGVzLmluZGV4T2YodGhpcy5jdXJyZW50R3VpZGVOb2RlKTtcbiAgICAgICAgdGhpcy5kaWN0LmhhbmRUZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5ndWlkZVRleHRbb107XG4gICAgICAgIHZhciBpID0gdGhpcy5kaWN0LmhhbmQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGUpO1xuICAgICAgICB0aGlzLmRpY3QuaGFuZC5wb3NpdGlvbiA9IGk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaGFja0FjdGlvbiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gY2MubW92ZUJ5KHQsIGUsIGUpO1xuICAgICAgICB2YXIgaSA9IGNjLm1vdmVCeSh0LCAtZSwgLWUpO1xuICAgICAgICB2YXIgciA9IGNjLm1vdmVCeSgwLjggKiB0LCAwLjggKiBlLCAwLjggKiBlKTtcbiAgICAgICAgdmFyIG4gPSBjYy5tb3ZlQnkoMC44ICogdCwgMC44ICogLWUsIDAuOCAqIC1lKTtcbiAgICAgICAgdmFyIGEgPSBjYy5tb3ZlQnkoMC42ICogdCwgMC42ICogZSwgMC42ICogZSk7XG4gICAgICAgIHZhciBzID0gY2MubW92ZUJ5KDAuNiAqIHQsIDAuNiAqIC1lLCAwLjYgKiAtZSk7XG4gICAgICAgIHZhciBjID0gY2MubW92ZUJ5KDAuNCAqIHQsIDAuNCAqIGUsIDAuNCAqIGUpO1xuICAgICAgICB2YXIgbCA9IGNjLm1vdmVCeSgwLjQgKiB0LCAwLjQgKiAtZSwgMC40ICogLWUpO1xuICAgICAgICB2YXIgaCA9IGNjLm1vdmVCeSgwLjIgKiB0LCAwLjIgKiBlLCAwLjIgKiBlKTtcbiAgICAgICAgdmFyIHAgPSBjYy5tb3ZlQnkoMC4yICogdCwgMC4yICogLWUsIDAuMiAqIC1lKTtcbiAgICAgICAgcmV0dXJuIGNjLnNlcXVlbmNlKG8sIGksIHIsIG4sIGEsIHMsIGMsIGwsIGgsIHApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hhbmdlQ2FyID0gZnVuY3Rpb24gKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICB2YXIgbDtcbiAgICAgICAgICAgIHZhciBoO1xuICAgICAgICAgICAgdmFyIHA7XG4gICAgICAgICAgICB2YXIgZCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzUmVhZHlEZXN0cm95ID0gITA7XG4gICAgICAgICAgICAgICAgciA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNvbG9ySW1nTmFtZTtcbiAgICAgICAgICAgICAgICBuID0gdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZUNhci1jYXJOYW1lXCIsIGkpO1xuICAgICAgICAgICAgICAgICAgICAoYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoaSkpKS5wYXJraW5nID0gdC5wYXJraW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYDAyJHtsZW5JbWdOYW1lfWBcIiwgXCIwMlwiICsgbik7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMDJcIiArIG4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPVxuICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5JblJvYWRSaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLkluUm9hZExlZnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcldlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9IHQuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jYXJTdGF0ZTtcbiAgICAgICAgICAgICAgICBhLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyUm9vdC5hZGRDaGlsZChhKTtcbiAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5tZ3IgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNvbG9ySW1nTmFtZSA9IHI7XG4gICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSA9IG47XG4gICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuZGlySW1nTmFtZSA9IGU7XG4gICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IgPSB0LmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICkuY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgaWYgKDQgPT0gZSB8fCA1ID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wb3NpdGlvbiA9IGNjLnYyKHQueCwgdC55KTtcbiAgICAgICAgICAgICAgICAgICAgbCA9IGEuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIHQuaGVpZ2h0IC8gMikpO1xuICAgICAgICAgICAgICAgICAgICBjID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobCk7XG4gICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBjYy52MihjLngsIGMueSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5wb3NpdGlvbiA9IGNjLnYyKHQueCwgdC55ICsgdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA3Nl9jb25maWcuQ2FyU3RhdGUuT25Cb3R0b21MZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnBvc2l0aW9uID0gY2MudjIodC54IC0gdC53aWR0aCAvIDIsIHQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5PbkJvdHRvbVJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBjYy52Mih0LnggKyB0LndpZHRoIC8gMiwgdC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09IG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKChsID0gdGhpcy5kaWN0LnJvYWQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmRpY3Qucm9hZC5wb3NpdGlvbikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYyA9IGEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEucG9zaXRpb24gPSBjYy52Mih0LnggKyB0LndpZHRoIC8gMiwgYy55KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICgobCA9IHRoaXMuZGljdC5yb2FkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5kaWN0LnJvYWQucG9zaXRpb24pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMgPSBhLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhLnBvc2l0aW9uID0gY2MudjIodC54IC0gdC53aWR0aCAvIDIsIGMueSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PVxuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLkdvaW5nUGFya2luZ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBoID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCBhLmhlaWdodCAvIDIgLSAxMjcuNDY5KSk7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBhLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihoKTtcbiAgICAgICAgICAgICAgICAgICAgYS5wb3NpdGlvbiA9IGNjLnYyKGMueCwgYy55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9sZGVyICtcbiAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfY29uZmlnLmdldENhckltZ0J5Q29sb3IoYSwgdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IpO1xuICAgICAgICAgICAgICAgIGEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodC5nZXRDaGlsZEJ5TmFtZShcInRhaWxHYXNTcGluZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5wb29sTWdyLnB1dCh0LmdldENoaWxkQnlOYW1lKFwidGFpbEdhc1NwaW5lXCIpLCBcInRhaWxHYXNTcGluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodC5nZXRDaGlsZEJ5TmFtZShcInRhaWxHYXNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWlsR2FzXCIpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm5leHRDYXI7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGcpIHt9XG4gICAgICAgICAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZC5ib3gyU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUocCk7XG4gICAgICAgICAgICAgICAgICAgIGEuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gYS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMjI1MCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA3Nl9jb25maWcuQ2FyU3RhdGUuSW5Sb2FkUmlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5JblJvYWRMZWZ0XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gYS5wYXJraW5nLmdldENoaWxkQnlOYW1lKFwiZmlyZUNhclBvc1wiKS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGEucGFya2luZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLTE0Mi44OTMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBhLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gTWF0aC5hYnMocy54IC0gbi54KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRkVGFpbEdhc1NwaW5lKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8obCAvIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnNwZWVkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHIueFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLkdvaW5nUGFya2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc1JpY2hDYXJcIiwgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzUmljaENhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5jaGFuZ2VDYXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMTZcIiArIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNUcmFtY2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5jaGFuZ2VDYXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTM2XCIgKyBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5jaGFuZ2VDYXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMDZcIiArIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLkdvaW5nUGFya2luZ1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBkLmdldFdQb3NCeU5vZGUoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEucGFya2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxID09IGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGEucGFya2luZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgYS5oZWlnaHQgLyAyICsgMjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCBhLmhlaWdodCAvIDIgKyAxNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IGEucGFya2luZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgYS5oZWlnaHQgLyAyICsgMTcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5QYXJraW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gaC5zdWIoYS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKGwgLyBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wYXJraW5nLmNhciA9IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnNlYXRUb3RhbEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwic2RcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib3hBdGxhcy5nZXRTcHJpdGVGcmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmMjg3NDlfXCIgKyAoMTAwICogJGxldmVsXzI5MDc2X2NvbmZpZy5QYXJraW5nSW1nW3RdICsgZSArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucHV0VGFpbEdhcyhhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuY2hlY2tQZXJzb24oITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLkdvaW5nUm9hZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBkLmRpY3Qucm9hZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGQuZGljdC5yb2FkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gYS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGEucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IE1hdGguYWJzKHUueSAtIG4ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLmFkZFRhaWxHYXNTcGluZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KGwgLyBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuY29sbGlzaW9uKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkLmFkZFRhaWxHYXNTcGluZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDIyNTAgLyBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHQsIGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLndhcm4odCksIG8odCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUobmV3IGNjLlNwcml0ZUZyYW1lKGkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0V1Bvc0J5Tm9kZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodC5wb3NpdGlvbik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wdXRUYWlsR2FzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWlsR2FzXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2xNZ3IucHV0KHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWlsR2FzXCIpLCBcInRhaWxHYXNcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LmhpdFNwaW5lKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHQuYWRkQ2hpbGQoZSk7XG4gICAgICAgICAgICBlLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY29sbGlzaW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKCF0LmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc0ZpcmVFbmdpbmUpIHtcbiAgICAgICAgICAgIHZhciBlID0gdDtcbiAgICAgICAgICAgIHZhciBvID0gdm9pZCAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5wYXJraW5nTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHIuaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICByLmlzRW1wdHkgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgZS5wYXJraW5nID0gcjtcbiAgICAgICAgICAgICAgICAgICAgbyA9IHI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAtMTQyLjg5MykpO1xuICAgICAgICAgICAgICAgIGlmIChuLnggPj0gYS54KSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5JblJvYWRMZWZ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSA9IDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjExMVwiICsgZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArIFwiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAxXCIgKyBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lICsgXCItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLkluUm9hZFJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSA9IDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjExMVwiICsgZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArIFwiLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAxXCIgKyBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lICsgXCItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgIHZhciBsO1xuICAgICAgICAgICAgdmFyIGg7XG4gICAgICAgICAgICB2YXIgcDtcbiAgICAgICAgICAgIHZhciBkO1xuICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICB2YXIgZztcbiAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHkubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZ3VpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5kaWN0Lmd1aWRlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbkNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHArK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bcF0pLmFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmdldENoaWxkQnlOYW1lKFwiZW1wdHlcIikuYWN0aXZlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkLmdldENoaWxkQnlOYW1lKFwiZmlyZVNwaW5lXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZC5pc0VtcHR5ID0gITApLCB0aGlzLnBhcmtpbmdOb2Rlcy5wdXNoKGQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5zY2FsZSA9IDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCB0aGlzLmNhclJvb3QuY2hpbGRyZW5Db3VudDsgcCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSB0aGlzLmNhclJvb3QuY2hpbGRyZW5bcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDA7IG0gPCB0Lmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gdFttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQueCA9PSBoWzBdICYmIGQueSA9PSBoWzFdICYmIGNvbnNvbGUuZXJyb3IoXCLlkIzkuIDkuKrkvY3nva7lpI3liLblpJrovobovaZcIiwgZC5uYW1lLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2goW2QueCwgZC55XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gdGhpcy5nZXRMb2NhbChcImJsYWNrQ2FyXCIpIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFyciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPCBvLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwKytcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBvW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyTm9kZUFyci5wdXNoKGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm1nciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRleElEID0gXCJcIiArIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRoaXMuZ2V0UGF0aChkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04uYmxhY2tBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPj0gMiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDw9IDQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXR3ZWVuMl80Q2FyQXJyLnB1c2goZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkucGF0aCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RlYnVnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKHIgPSBuZXcgY2MuTm9kZSgpKS5uYW1lID0gXCJwYXRoXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoci5hZGRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIuY29sb3IgPSBjYy5Db2xvci5XSElURSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRkQ2hpbGQociksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyLnBvc2l0aW9uID0gY2MudjIoLTEzLjEwNSwgLTI2LjIxKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVyc29uQW1vdW50ICs9IGQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnNlYXRUb3RhbEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVyc29uQW1vdW50MiA9IHRoaXMuYWxsUGVyc29uQW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvbkFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLmFsbFBlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImFsbFBlcnNvbkFtb3VudFwiLCB0aGlzLmFsbFBlcnNvbkFtb3VudCwgdGhpcy5hbGxQZXJzb25BbW91bnQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FySUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsRGF0YUpTT04uYmxhY2tBbW91bnQgJiYgIWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhSlNPTi5ibGFja0Ftb3VudCA+PSB0aGlzLmJldHdlZW4yXzRDYXJBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDA7IG0gPCB0aGlzLmJldHdlZW4yXzRDYXJBcnIubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoID0gdGhpcy5iZXR3ZWVuMl80Q2FyQXJyW21dKS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5pc0JsYWNrQ2FyID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2goaC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IHRoaXMuZ2V0UmFuZG9tRGlzdGluY3RFbGVtZW50cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0d2VlbjJfNENhckFycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxEYXRhSlNPTi5ibGFja0Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwOyBtIDwgbi5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGggPSBuW21dKS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNCbGFja0NhciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKGguZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhcklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsKFwiYmxhY2tDYXJcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTI3MzYxID09IHRoaXMubGV2ZWxJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBbNywgNCwgMCwgM107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRDb2xvcl9uZXcgPSAkbGV2ZWxfMjkwNzZfY29uZmlnLnNvcnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65omT5Lmx6aKc6ImyXCIsIHRoaXMuc29ydENvbG9yX25ldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBjLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdGhpcy5sZXZlbERhdGFKU09OLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDA7IG0gPCBsLmxlbmd0aDsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSBsW21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmRvbUNvbG9yQXJyLnB1c2godGhpcy5nZXRBcnJCeUxlbihbMCwgMSwgMiwgMywgNCwgNSwgNiwgN10sIGhbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5kb21Db2xvck51bVttXSB8fCAodGhpcy5yYW5kb21Db2xvck51bVttXSA9IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgdGhpcy5jYXJOb2RlQXJyLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSB0aGlzLmNhck5vZGVBcnJbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSB0aGlzLmdldENhckNvbG9yKHAsIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnB1c2godSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyQ29sb3JJbWcoZCwgdSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04uY2FyV2VpZ2h0W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5wYXRoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pICYmIChnID0gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyV2VpZ2h0W3VdICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnICogZC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsKFwiY29sb3JDb25maWdcIiwgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCA9IDA7IHAgPCB0aGlzLmNhck5vZGVBcnIubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IHRoaXMuY2FyTm9kZUFycltwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGNbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5jbHVkZXMoZC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FySUQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNCbGFja0NhciA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJDb2xvckltZyhkLCB1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxEYXRhSlNPTi5jYXJXZWlnaHRbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnBhdGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkgJiYgKGcgPSAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJXZWlnaHRbdV0gKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgKiBkLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui9pui+huadg+mHjVwiLCB0aGlzLmNhcldlaWdodCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6aKc6ImyXCIsICRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS6uuaVsFwiLCB0aGlzLmNvbG9yUGVyc29uQXJyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA8ICRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0rK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbW91bnRCeUNvbG9yKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyXCIsIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJySW5kZXhcIiwgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMjczNjEgPT0gdGhpcy5sZXZlbElEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyciA9IFtbNCwgNCwgMl0sIFtdLCBbXSwgWzMsIDNdLCBbMSwgM10sIFtdLCBbXSwgWzIsIDQsIDRdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0U29ydEluZGV4QXJyID0gWzAsIDcsIDMsIDQsIDAsIDcsIDMsIDQsIDAsIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZjI3NTk3XCIgIT0gdGhpcy5mb2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFszLCAyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJ0dEJ1bmRsZVwiLCBcInByZWZhYi9ibG9ja01hbi9QZXJzb25cIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSB5LnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25QcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25QcmVmYWIuc2NhbGUgPSAwLjc7XG4gICAgICAgICAgICAgICAgICAgICAgICB5LmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQZXJzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uTW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRvdWNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5pc0NhblN0YXJ0Q2xpY2sgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RyYW5zcG9ydENhck1vdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodiwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDYXJGdWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMudGltZXIoMC4xKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLnNlbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tIYXNQZXJzb25Nb3ZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLnRpbWVyKDAuMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uc2VudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0hhc0Nhck1vdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gdGhpcy5hbGxQZXJzb25BbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy50aW1lcigxKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5zZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICE9IHRoaXMuYWxsUGVyc29uQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzRmFpbCA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlID0gdGhpcy5hbGxQZXJzb25BbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsIHRoaXMudGltZXIoMC41KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5zZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwibGV2ZWxGYWlsRXZlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWlsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5jaGVja0NhckZ1bGwoKSAmJiAhdGhpcy5jaGVja0hhc1BlcnNvbk1vdmUoKSAmJiAhdGhpcy5jaGVja0hhc0Nhck1vdmUoKSAmJiB0ID09IHRoaXMuYWxsUGVyc29uQW1vdW50XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2NoZWNrQ2FuVXNlU29ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICEodGhpcy5jaGVja0hhc1BlcnNvbk1vdmUoKSB8fCB0aGlzLmNoZWNrSGFzQ2FyTW92ZSgpIHx8IHRoaXMubW92ZUNhckFtb3VudCA+PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudGltZXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgZS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG8oMSk7XG4gICAgICAgICAgICB9LCB0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0NhckZ1bGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gITA7XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmtpbmdOb2Rlc1tlXS5jYXIpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0hhc1BlcnNvbk1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gITE7XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5zb3J0UGVyc29uTm9kZXMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNvcnRQZXJzb25Ob2Rlc1tlXS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLmlzTW92aW5nKSB7XG4gICAgICAgICAgICAgICAgdCA9ICEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tIYXNDYXJNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICExO1xuICAgICAgICB2YXIgZSA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gZVtvXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLklkbGUgJiZcbiAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLk5vcm1hbCAmJlxuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlICE9ICRsZXZlbF8yOTA3Nl9jb25maWcuQ2FyU3RhdGUuUGFya2luZ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdCA9ICEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tIYXNDYXJNb3ZlQW1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IDA7XG4gICAgICAgIHZhciBlID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgdmFyIGkgPSBlW29dO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGkgJiZcbiAgICAgICAgICAgICAgICBjYy5pc1ZhbGlkKGksICEwKSAmJlxuICAgICAgICAgICAgICAgIGkuYWN0aXZlICYmXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlICYmXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5PdXRQYXJraW5nXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vblRvdWNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgIGlmIChlLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpKSB7XG4gICAgICAgICAgICAgICAgZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0X3BhcmtpbmcsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50b3VjaFN0YXJ0X3BhcmtpbmcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1JlbW92ZSAmJiAhdGhpcy5yZW1vdmVQcm9wVXNpbmcpIHtcbiAgICAgICAgICAgIHZhciBvID0gdC50YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnVubG9ja1BhcmtpbmdUYXJnZXQgPSBvO1xuICAgICAgICAgICAgaWYgKG8uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlVubG9ja1BhcmtpbmcpIHx8IDA7XG4gICAgICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuVW5sb2NrUGFya2luZywgaSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImVtcHR5XCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBvLmlzRW1wdHkgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJraW5nTm9kZXMucHVzaChvKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuQm9vc3Rlcl91c2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5wbGF5VW5sb2NrU3BpbmUobyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50KSkge1xuICAgICAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnByb3BJbmRleCwgNCk7XG4gICAgICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuUHJvcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93UmV3YXJkQWRzKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImVtcHR5XCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uaXNFbXB0eSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGFya2luZ05vZGVzLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnBsYXlVbmxvY2tTcGluZShvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5VW5sb2NrU3BpbmUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5qaWVzdW8pO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZSk7XG4gICAgICAgIHZhciBvID0gdC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHQucG9zaXRpb24pO1xuICAgICAgICB2YXIgaSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICAgICAgZS5wb3NpdGlvbiA9IGk7XG4gICAgICAgIGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSAhMTtcbiAgICAgICAgZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3VubG9ja1BhcmtpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGxheVVubG9ja1NwaW5lKHRoaXMudW5sb2NrUGFya2luZ1RhcmdldCk7XG4gICAgICAgIHRoaXMudW5sb2NrUGFya2luZ1RhcmdldC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMudW5sb2NrUGFya2luZ1RhcmdldC5nZXRDaGlsZEJ5TmFtZShcImVtcHR5XCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLnVubG9ja1BhcmtpbmdUYXJnZXQuaXNFbXB0eSA9ICEwO1xuICAgICAgICB0aGlzLnBhcmtpbmdOb2Rlcy5wdXNoKHRoaXMudW5sb2NrUGFya2luZ1RhcmdldCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0hhc0NvbGxpc2lvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbztcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciByO1xuICAgICAgICB2YXIgbjtcbiAgICAgICAgdmFyIGE7XG4gICAgICAgIHZhciBzID0gdC53aWR0aDtcbiAgICAgICAgdmFyIGMgPSB0LmhlaWdodDtcbiAgICAgICAgZSA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC1zIC8gMiwgLWMpKTtcbiAgICAgICAgbyA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC1zIC8gMiwgMjI1MCkpO1xuICAgICAgICBpID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIocyAvIDIsIC1jKSk7XG4gICAgICAgIHIgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihzIC8gMiwgMjI1MCkpO1xuICAgICAgICBuID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLWMpKTtcbiAgICAgICAgYSA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDIyNTApKTtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmNhclJvb3QuY2hpbGRyZW4uY29uY2F0KHRoaXMudHVybnRhYmxlQ2FyQXJyKTtcbiAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCBsLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICB2YXIgcCA9IGxbaF07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcCAmJlxuICAgICAgICAgICAgICAgIHAgIT0gdCAmJlxuICAgICAgICAgICAgICAgIHAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09ICRsZXZlbF8yOTA3Nl9jb25maWcuQ2FyU3RhdGUuSWRsZSAmJlxuICAgICAgICAgICAgICAgIHAuYWN0aXZlICYmXG4gICAgICAgICAgICAgICAgIXAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzVHJhbnNwb3J0Q2FyICYmXG4gICAgICAgICAgICAgICAgIXAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzVVRyYW5zcG9ydENhclxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICAgICAgdmFyIHY7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBwLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBDID0gcC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgZCA9IHAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKC15IC8gMiwgLUMpKTtcbiAgICAgICAgICAgICAgICB1ID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLXkgLyAyLCAwKSk7XG4gICAgICAgICAgICAgICAgZyA9IHAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHkgLyAyLCAtQykpO1xuICAgICAgICAgICAgICAgIG0gPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih5IC8gMiwgMCkpO1xuICAgICAgICAgICAgICAgIGYgPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih5IC8gMiArIDEsIDApKTtcbiAgICAgICAgICAgICAgICB2ID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLXkgLyAyIC0gMSwgMCkpO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIGQsIHUpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShlLCBvLCBnLCBtKSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoaSwgciwgZCwgdSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGksIHIsIGcsIG0pIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShlLCBvLCBmLCB2KSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUobiwgYSwgZiwgdilcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50b3VjaFN0YXJ0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5TdGFydENsaWNrKSB7XG4gICAgICAgICAgICB0LnRhcmdldDtcbiAgICAgICAgICAgIHZhciBlID0gdC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FycGFya0luZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIumZkOWItui9puW6k+i9pueCueWHu1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzUm90YXRlQ3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwi5q2j5Zyo5peL6L2s55Sf5oiQXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmNhclJvb3QuY2hpbGRyZW4uY29uY2F0KHRoaXMudHVybnRhYmxlQ2FyQXJyKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gb1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHIuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcik7XG4gICAgICAgICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihlLCB0aGlzLmdldFdQb3NCeVBvbHlnb24obikpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5paw5aKe6ZmQ5Yi25b+r6YCf54K55Ye7XCIsIHRoaXMubW92ZUNhckFtb3VudCwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW92ZUNhckFtb3VudCA+PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZmQ5Yi25b+r6YCf54K55Ye7XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFwi5pqC5pe25rKh5pyJ5pu05aSa5L2N572u5LqGXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm5leHRDYXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkucHJldkNhcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhIHx8IHMpICYmIHRoaXMubW92ZUNhckFtb3VudCA+PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumZkOWItuW/q+mAn+eCueWHuzJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLpnIDopoHkuKTkuKrlgZzovabkvY1cIiksIDAuOCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKDI1NSAhPSByLm9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRDaGlsZEJ5TmFtZShcImxvY2tcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLpnIDopoHpkqXljJnop6PplIFcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgci5ydW5BY3Rpb24oci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuc2hhY2tBY3Rpb24oMC4xLCAyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNTY2FsZUFuaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvcnRBbmltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNDYXJQYXJrICYmICFyLmlzV2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCLpmZDliLbovablupPovaYs5rKh5YGc56izXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZW1vdmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09ICRsZXZlbF8yOTA3Nl9jb25maWcuQ2FyU3RhdGUuSWRsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucmVtb3ZlUHJvcFVzaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhci5vYmxpcXVlSGVhZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQ2FyKHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbW92ZVByb3BVc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNDYW5DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLklkbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgJiYgKHIueCA+IDI2NyB8fCByLnggPCAtMjY3KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLm9ibGlxdWVIZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCByLnJ1bkFjdGlvbih0aGlzLnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oYW5kICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGFuZC5hY3RpdmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmd1aWRlZE5vZGVzLnB1c2gociksIHRoaXMuY3VycmVudEd1aWRlTm9kZSA9PSByKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHRoaXMuZ3VpZGVOb2Rlcy5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdGhpcy5ndWlkZU5vZGVzW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PSB0aGlzLmd1aWRlZE5vZGVzLmluZGV4T2YodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3VpZGVOb2RlID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kUG9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGFuZC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGFuZFRleHQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmhhbmRUZXh0LnBhcmVudC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmtpbmdOb2Rlc1twXS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnInovabkvY3pg73ooqvljaDnlKjkuoZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLnm67liY3kvY3nva7lt7Lmu6FcIiksIDAuOCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgfHwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwID0gMDsgcCA8IHRoaXMucGFya2luZ05vZGVzLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFya2luZ05vZGVzW3BdLmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaLiemTvui9pi3miYDmnInovabkvY3pg73ooqvljaDnlKjkuoZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFwi6ZyA6KaB5Lik5Liq5YGc6L2m5L2NXCIpLCAwLjgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSGFzQ2FyTW92ZUFtb3VudCgpID49IHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnInnm7jnrYnkuo7ovabkvY3mgLvph4/nmoTovablnKjov5DliqjvvIzml6Dms5Xlh7rovaZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLmmoLml7bmsqHmnInmm7TlpJrkvY3nva7kuoZcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyJXCIgKyB0aGlzLmNoZWNrSGFzQ2FyTW92ZUFtb3VudCgpICsgXCLovobovablnKjliqjvvIFcIiwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhIHx8IHMpICYmIHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCAtIHRoaXMuY2hlY2tIYXNDYXJNb3ZlQW1vdW50KCkgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmi4npk77ovabkuI3og73lh7rovaZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLmmoLml7bmsqHmnInmm7TlpJrkvY3nva7kuoZcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHIuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSByLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyMjUwKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gci5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZik7XG4gICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm90aGVyQ2FyTm9kZSA9IHRoaXMuZ2V0T3RoZXJDYXJCeURpc3RhbmNlKHIpO1xuICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5vbGRQb3MgPSByLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkub3RoZXJDYXJOb2RlID0gdGhpcy5nZXRPdGhlckNhckJ5RGlzdGFuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm9sZFBvcyA9IGEucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm90aGVyQ2FyTm9kZSA9IHRoaXMuZ2V0T3RoZXJDYXJCeURpc3RhbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5vbGRQb3MgPSBzLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLklkbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNGaXJlRW5naW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyQW1vdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygyMjUwIC8gci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuc3BlZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmlzVHJhbnNwb3J0Q2FyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1VUcmFuc3BvcnRDYXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEgIT0gci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkucGF0aFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRhaWxHYXNTcGluZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkYXVkaW9NYW5hZ2VyLkF1ZGlvLmdldEVmZmVjdE11dGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVJlbW90ZVNvdW5kKFwiYXVkaW8vZjI3MzEyL2YyNzMxMl9FbmdpbmUyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gKDE4MCAqIE1hdGguYXRhbjIoZS55IC0gdC55LCBlLnggLSB0LngpKSAvIE1hdGguUEkgKyA5MDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZFN0YXJTcGluZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdmFyIG8gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvb2xNZ3IuZ2V0KHRoaXMuZGljdC5taXhTcGluZSwgXCJtaXhTcGluZVwiKSk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChvKTtcbiAgICAgICAgdmFyIGkgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIHZhciByID0gby5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgICAgIG8ucG9zaXRpb24gPSByO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLnBvb2xNZ3IucHV0KG8sIFwibWl4U3BpbmVcIik7XG4gICAgICAgIH0sIDIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYWRkVGFpbEdhc1NwaW5lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QudGFpbEdhcyk7XG4gICAgICAgICAgICAgICAgdC5hZGRDaGlsZChlKTtcbiAgICAgICAgICAgICAgICBlLnBvc2l0aW9uID0gY2MudjIoMCwgLXQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBpZiAoZS5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldE5vZGVXb3JsZEV1bGVyQW5nbGVzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSAwO1xuICAgICAgICBmb3IgKHZhciBvID0gdDsgbzsgKSB7XG4gICAgICAgICAgICBlICs9IG8uYW5nbGU7XG4gICAgICAgICAgICBvID0gby5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JsZEV1bGVyQW5nbGVzXCIsIGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmxkRXVsZXJBbmdsZXMyXCIsIGUgJSAzNjApO1xuICAgICAgICByZXR1cm4gZSAlIDM2MDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1biA9IGZ1bmN0aW9uICh0LCBlLCBvKSB7XG4gICAgICAgIGlmICh0ICYmIGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gb1tpXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0yLnBvc2l0aW9uXCIsIGUucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHIpXG4gICAgICAgICAgICAgICAgICAgIC5zdG9wKClcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMDUgKiBpICsgMC4wMiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGUucG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW4pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRXUG9zQnlQb2x5Z29uID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LnBvaW50cztcbiAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IGNjLnYyKGVbaV0ueCArIHQub2Zmc2V0LngsIGVbaV0ueSArIHQub2Zmc2V0LnkpO1xuICAgICAgICAgICAgdmFyIG4gPSB0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHIpO1xuICAgICAgICAgICAgby5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0UmFuZG9tRGlzdGluY3RFbGVtZW50cyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0Lmxlbmd0aCAtIGkpKTtcbiAgICAgICAgICAgIGlmIChvLmluY2x1ZGVzKHRbcl0pKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgby5wdXNoKHRbcl0pO1xuICAgICAgICAgICAgICAgIHRbcl0gPSB0W3QubGVuZ3RoIC0gaSAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Q2FyQ29sb3JJbWcgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgdmFyIGkgPSB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KTtcbiAgICAgICAgaS5jYXJDb2xvciA9IGU7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yUGVyc29uQXJyW2VdKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFycltlXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFycltlXSArPSBpLnNlYXRUb3RhbEFtb3VudDtcbiAgICAgICAgaS5jb2xvckltZ05hbWUgPSBlICsgMTtcbiAgICAgICAgaS5kaXJJbWdOYW1lID0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJEaXJJbWdbTWF0aC5yb3VuZChNYXRoLmFicyh0LmFuZ2xlKSldO1xuICAgICAgICBpLmxlbkltZ05hbWUgPSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhckxlbkltZ1tpLnNlYXRUb3RhbEFtb3VudF07XG4gICAgICAgIG8gPSB0aGlzLmZvbGRlciArIFwiX1wiICsgJGxldmVsXzI5MDc2X2NvbmZpZy5nZXRDYXJJbWdCeUNvbG9yKHQsIGUpO1xuICAgICAgICB0LnBhcmVudC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYm94MlNwcml0ZUF0bGFzLmdldFNwcml0ZUZyYW1lKG8pO1xuICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLmNhcldlaWdodFtpLnBhdGhdKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sZXZlbERhdGFKU09OLmNhcldlaWdodFtpLnBhdGhdID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0Q2FyQ29sb3JJbWdfMiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvO1xuICAgICAgICB2YXIgaSA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpO1xuICAgICAgICBpLmNhckNvbG9yID0gZTtcbiAgICAgICAgaS5jb2xvckltZ05hbWUgPSBlICsgMTtcbiAgICAgICAgdmFyIHIgPSBcIlwiICsgaS5jb2xvckltZ05hbWUgKyBpLmRpckltZ05hbWUgKyBpLmxlbkltZ05hbWU7XG4gICAgICAgIG8gPSBcInRleHR1cmUvXCIgKyB0aGlzLmZvbGRlciArIFwiL1wiICsgdGhpcy5mb2xkZXIgKyBcIl9cIiArIHI7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKG8sIGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSAhMDtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVDYXJXZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5jYXJXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgIHZhciBlID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIHZhciBvID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciByID0gZVtvXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICByICYmXG4gICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkgJiZcbiAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PSAkbGV2ZWxfMjkwNzZfY29uZmlnLkNhclN0YXRlLklkbGUgJiZcbiAgICAgICAgICAgICAgICAhci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgJiZcbiAgICAgICAgICAgICAgICAhci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNVVHJhbnNwb3J0Q2FyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByLnBhdGggPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBuID0gaS5nZXRQYXRoKHIpO1xuICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLnBhdGggPSBuO1xuICAgICAgICAgICAgICAgIGlmICgxID09IG4gJiYgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNCbGFja0NhciAmJiAhci5pc05vQmxhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgci5pc1NjYWxlQW5pbSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5pc1NjYWxlQW5pbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBcInRleHR1cmUvXCIgKyB0LmZvbGRlciArIFwiL1wiICsgdC5mb2xkZXIgKyBcIl8zXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEyOCA9PSBNYXRoLnJvdW5kKE1hdGguYWJzKHIuYW5nbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJ0ZXh0dXJlL1wiICsgdC5mb2xkZXIgKyBcIi9cIiArIHQuZm9sZGVyICsgXCJfNFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg5MCA9PSBNYXRoLnJvdW5kKE1hdGguYWJzKHIuYW5nbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwidGV4dHVyZS9cIiArIHQuZm9sZGVyICsgXCIvXCIgKyB0LmZvbGRlciArIFwiXzJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gTWF0aC5yb3VuZChNYXRoLmFicyhyLmFuZ2xlKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSA9IFwidGV4dHVyZS9cIiArIHQuZm9sZGVyICsgXCIvXCIgKyB0LmZvbGRlciArIFwiXzFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoZSwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiZGlyXCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiZGlyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlNwcml0ZUZyYW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IFwiXCIgKyBvLmNvbG9ySW1nTmFtZSArIG8uZGlySW1nTmFtZSArIG8ubGVuSW1nTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFwidGV4dHVyZS9cIiArIHQuZm9sZGVyICsgXCIvXCIgKyB0LmZvbGRlciArIFwiX1wiICsgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaXNOb0JsYWNrID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQobiwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlNwcml0ZUZyYW1lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpLmlzRGVidWcgJiYgci5nZXRDaGlsZEJ5TmFtZShcInBhdGhcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcInBhdGhcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBpLmxldmVsRGF0YUpTT04uY2FyV2VpZ2h0W24gLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBhKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpLmNhcldlaWdodFtyLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcl0gKz1cbiAgICAgICAgICAgICAgICAgICAgYSAqIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmVtcHR5U2VhdEFtb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIG8ocik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZVBlcnNvbiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG8gKz0gbCA9IHRoaXMuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKG8gPj0gdGhpcy5hbGxQZXJzb25BbW91bnQyKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCA8IHRoaXMudWlTaG93UGVyc29uQW1vdW50OyApIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuZ2V0UGVyc29uQ29sb3IoKTtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICgoaSA9IHRoaXMuY29sb3JQZXJzb25JbmRleEFycltuXSksIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbbl1baV0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmV2aXZlQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJJbmRleFtuXSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJySW5kZXhbbl1baV0gPT0gdGhpcy5sYXN0RXh0cmFJbmRleEFycltuXVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhV2VpZ2h0W25dID0gdGhpcy5leHRyYVdlaWdodENvbnN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFXZWlnaHRbbl0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RFeHRyYUluZGV4QXJyW25dID0gdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4W25dW2ldO1xuICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuY29sb3JQZXJzb25JbmRleEFyci5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLmNvbG9yUGVyc29uSW5kZXhBcnJbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltjXVtsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAoZSAmJiBlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG4gPSBzW3RoaXMucmFuZG9tTnVtKDAsIHMubGVuZ3RoIC0gMSldO1xuICAgICAgICAgICAgICAgICAgICBpID0gdGhpcy5jb2xvclBlcnNvbkluZGV4QXJyW25dO1xuICAgICAgICAgICAgICAgICAgICBhID0gdGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltuXVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbbl0gKz0gYTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Jldml2ZUFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25JbmRleEFycltuXSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvbGRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9saWNlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGE7IGgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAocCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5wZXJzb25QcmVmYWIpKS5vbGRQb3NJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblJvb3QuYWRkQ2hpbGQocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3IgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gKyAxID09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclBlcnNvbkltZyhuLCBwLCAyLCB0aGlzLnBvbGljZVNraW5OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJhXCIgPT0gdGhpcy5wb2xpY2VTa2luTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGljZVNraW5OYW1lID0gXCJiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xpY2VTa2luTmFtZSA9IFwiYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gKyAxID09IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JQZXJzb25JbWcobiwgcCwgMiwgdGhpcy5nb2xkU2tpbk5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ29sZFNraW5OYW1lID0gXCJhXCIgPT0gdGhpcy5nb2xkU2tpbk5hbWUgPyBcImJcIiA6IFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yUGVyc29uSW1nKG4sIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5Db3VudCAtIDEgLSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5wb3NpdGlvbiA9IHRoaXMuZGljdC5kb29yT3V0c2lkZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5wb3NpdGlvbiA9IHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNoaWxkcmVuW2RdLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuekluZGV4ID0gdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5Db3VudCAtIHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLm9sZFBvc0luZGV4ID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID49IDUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclBlcnNvbkltZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0KS5wZXJzb25Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIChwID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LnBlcnNvblByZWZhYikpLm9sZFBvc0luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QucGVyc29uUm9vdC5hZGRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucG9zaXRpb24gPSB0aGlzLmRpY3QuZG9vck91dHNpZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3IgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gKyAxID09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclBlcnNvbkltZyhuLCBwLCAyLCB0aGlzLnBvbGljZVNraW5OYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucG9saWNlU2tpbk5hbWUgPSBcImFcIiA9PSB0aGlzLnBvbGljZVNraW5OYW1lID8gXCJiXCIgOiBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuICsgMSA9PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yUGVyc29uSW1nKG4sIHAsIDIsIHRoaXMuZ29sZFNraW5OYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmdvbGRTa2luTmFtZSA9IFwiYVwiID09IHRoaXMuZ29sZFNraW5OYW1lID8gXCJiXCIgOiBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclBlcnNvbkltZyhuLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBlcnNvbk1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7XG4gICAgICAgIGlmIChlID49IHRoaXMudWlTaG93UGVyc29uQW1vdW50KSB7XG4gICAgICAgICAgICBlID0gdGhpcy51aVNob3dQZXJzb25BbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG8gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBpLnNvcnRQZXJzb25Ob2Rlc1tlXTtcbiAgICAgICAgICAgIGkuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvLm9sZFBvc0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBvLnBvc2l0aW9uID0gdC5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5bMF0ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKGUgIT0gdC51aVNob3dQZXJzb25BbW91bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG8uekluZGV4ID0gdC5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5Db3VudCAtIGU7XG4gICAgICAgICAgICAgICAgICAgIHQubW92ZSgwLCBvLCB0LmRpY3QucGVyc29uUG9zUm9vdC5jaGlsZHJlbkNvdW50IC0gMSAtIGUsIG51bGwsICEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwLjEgKiBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGU7IHIrKykge1xuICAgICAgICAgICAgbyhyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlUGFya2luZ1dlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJraW5nV2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChlLmFjdGl2ZSAmJiBlLmNhcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUuY2FyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBvLmdldENoaWxkQnlOYW1lKFwic2VhdFJvb3RcIikuY2hpbGRyZW4ubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJzZWF0Um9vdFwiKS5jaGlsZHJlbltyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5hY3RpdmUgfHwgbi50YXJnZXRQZXJzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmtpbmdXZWlnaHRbaV0gKz0gdGhpcy5sZXZlbERhdGFKU09OLnBhcmtpbmdXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoYSkge31cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tQZXJzb24gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1RpcFRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNDaGVjaykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLnBlcnNvbkNvbG9yO1xuICAgICAgICAgICAgdmFyIGkgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciByID0gbi5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgICAgIGlmIChyLmFjdGl2ZSAmJiByLmNhcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHIuY2FyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IgPT0gbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGEuZ2V0Q2hpbGRCeU5hbWUoXCJzZWF0Um9vdFwiKS5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghci5hY3RpdmUgJiYgIXIudGFyZ2V0UGVyc29uICYmICgoci50YXJnZXRQZXJzb24gPSAhMCksIChpID0gcikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5pc0NoZWNrID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuLnNvcnRQZXJzb25Ob2Rlcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudGFyZ2V0U2VhdCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5zZXRDb2xvclBlcnNvbkltZyhvLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNyZWF0ZVBlcnNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbi5zb3J0UGVyc29uTm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID49IG4udWlTaG93UGVyc29uQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBuLnVpU2hvd1BlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gbi5zb3J0UGVyc29uTm9kZXNbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby56SW5kZXggPSBjIC0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkuaXNNb3ZpbmcgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLm1vdmUoby5vbGRQb3NJbmRleCwgbywgby5vbGRQb3NJbmRleCArIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLmlzTW92aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09IGMgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pc0NoZWNrID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jaGVja1BlcnNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4wMDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPCBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwKytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5hbGxQZXJzb25BbW91bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmRpY3QucGVyc29uQW1vdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIG4uYWxsUGVyc29uQW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImFsbFBlcnNvbkFtb3VudFwiLCBuLmFsbFBlcnNvbkFtb3VudCwgbi5hbGxQZXJzb25BbW91bnQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHMucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBpLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBzLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGcuc3ViKGQpLm1hZygpIC8gMWUzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGltZVwiLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZy54ID4gZC54KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBkLmFkZChjYy52MygxMDAgKiBmLCAxNTApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJlemllclRvKG0sIGQsIHYsIGcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0Q29sb3JQZXJzb25JbWdfc2VhdChvLCBpLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkYXVkaW9NYW5hZ2VyLkF1ZGlvLmdldEVmZmVjdE11dGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGxheVJlbW90ZVNvdW5kKFwiYXVkaW8vZjI4NzQ5L2YyODc0OV9HZXRfb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50IC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNhckFuaW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2hlY2tDYXJHbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA8IGEuZ2V0Q2hpbGRCeU5hbWUoXCJzZWF0Um9vdFwiKS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYysrXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHMoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSByKGEpO1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2FyQW5pbSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0LmlzQ2FyQW5pbSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQuaXNDYXJBbmltID0gITA7XG4gICAgICAgICAgICBjYy50d2Vlbih0LnBhcmVudC5wYXJlbnQpXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC45XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuaXNDYXJBbmltID0gITE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tUaXBUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IDA7XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmtpbmdOb2Rlc1tlXS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ID09IHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiY2hlY2tUaXBUZXh0XCIsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHQgPT0gdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImNoZWNrVGlwVGV4dFwiLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tDYXJHbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG8uZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbltlXTtcbiAgICAgICAgICAgIGlmIChpLmNhcikge1xuICAgICAgICAgICAgICAgIHZhciByID0gaS5jYXI7XG4gICAgICAgICAgICAgICAgaWYgKCFyLnNldEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSByLmdldENoaWxkQnlOYW1lKFwic2VhdFJvb3RcIiksIGEgPSAwLCBzID0gMDsgcyA8IG4uY2hpbGRyZW4ubGVuZ3RoOyBzKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5jaGlsZHJlbltzXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhID49IG4uY2hpbGRyZW5Db3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgby5tb3ZlQ2FyQW1vdW50IC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC0xNDIuODkzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IHIucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgci5zZXRJbnRlcnZhbCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0LmNoZWNrQ2FyQmxvY2soaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jYXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGF1ZGlvTWFuYWdlci5BdWRpby5nZXRFZmZlY3RNdXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBsYXlSZW1vdGVTb3VuZChcImF1ZGlvL2YyODc0OS9mMjg3NDlfRnVsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmFkZFN0YXJTcGluZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5Hb2luZ091dFBhcmtpbmdfblBvcyA9IGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA3Nl9jb25maWcuQ2FyU3RhdGUuR29pbmdPdXRQYXJraW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNFbXB0eSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IE51bWJlcihyLm5hbWVbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwic2RcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJzaGFkb3dcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJib3hTcGluZVwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImJveFNwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikudGltZVNjYWxlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImJveFNwaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldFNraW4oXCJza2luXCIgKyAobiArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImJveFNwaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcImRhYmFvXCIgKyBvLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJib3hTcGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoci5oZWlnaHQgLyAyIC8gci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuc3BlZWQpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmNoZWNrUmVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5PdXRQYXJraW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGFuZ2VDYXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwMVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgby50aW1lSURBcnIucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZShpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tDYXJCbG9jayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgdmFyIGkgPSBlW29dO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09ICRsZXZlbF8yOTA3Nl9jb25maWcuQ2FyU3RhdGUuT3V0UGFya2luZyAmJlxuICAgICAgICAgICAgICAgIGkucG9zaXRpb24uc3ViKHQpLm1hZygpIDwgNDAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5Hb2luZ091dFBhcmtpbmdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciByID0gaS5Hb2luZ091dFBhcmtpbmdfblBvcztcbiAgICAgICAgICAgICAgICBpZiAociAmJiByLnN1Yih0KS5tYWcoKSA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrUmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNXaW4gJiYgMCA9PSB0aGlzLmFsbFBlcnNvbkFtb3VudCkge1xuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzQ29pbikge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY29pbikgfHwgMDtcbiAgICAgICAgICAgICAgICB0ICs9IHRoaXMuYWxsUGVyc29uQW1vdW50MjtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jb2luLCB0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua3u+WKoOacrOWcsOmHkeW4gVwiLCB0LCB0aGlzLmFsbFBlcnNvbkFtb3VudDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1dpbiA9ICEwO1xuICAgICAgICAgICAgdGhpcy5wbGF5UmlnaHQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19hZGRSZXNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5CdWlsZFJlc291cmNlKSB8fCAwO1xuICAgICAgICB0ICs9IHRoaXMuY2FyQWxsQW1vdW50O1xuICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5CdWlsZFJlc291cmNlLCB0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAodCwgZSwgbywgaSwgcikge1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGUucG9zaXRpb24uc3ViKHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNoaWxkcmVuW3QgKyAxXS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgIHRoaXMucGVyc29uU3BlZWQ7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvblNwZWVkO1xuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKGUpXG4gICAgICAgICAgICAudG8oMC4wNTUsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5bdCArIDFdLnBvc2l0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUub2xkUG9zSW5kZXggPSB0ICsgMTtcbiAgICAgICAgICAgICAgICBpZiAodCArIDEgPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICBuLnNldENvbG9yUGVyc29uSW1nKGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0KS5wZXJzb25Db2xvciwgZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0ICsgMSA9PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuLm1vdmUodCArIDEsIGUsIG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldENvbG9yUGVyc29uSW1nID0gZnVuY3Rpb24gKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkge1xuICAgICAgICAgICAgaSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGdhbWUuZHJpbmtBdGxhcy5nZXRTcHJpdGVGcmFtZShcImYyODc0OV9cIiArICh0ICsgMSArIDEwKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDb2xvclBlcnNvbkltZ19zb3J0ID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGdhbWUuZHJpbmtBdGxhcy5nZXRTcHJpdGVGcmFtZShcImYyODc0OV9cIiArICh0ICsgMSArIDEwKSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDb2xvclBlcnNvbkltZ19zZWF0ID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGdhbWUuZHJpbmtBdGxhcy5nZXRTcHJpdGVGcmFtZShcImYyODc0OV9cIiArICh0ICsgMSArIDEwKSArIFwiLTFcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgZm9yICh2YXIgbyA9IHQubGVuZ3RoIC0gMTsgbyA+IDA7IG8tLSkge1xuICAgICAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobyArIDEpKTtcbiAgICAgICAgICAgIGUgPSBbdFtpXSwgdFtvXV07XG4gICAgICAgICAgICB0W29dID0gZVswXTtcbiAgICAgICAgICAgIHRbaV0gPSBlWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0QW1vdW50QnlDb2xvciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyclt0XSkge1xuICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyclt0XSA9IFtdO1xuICAgICAgICAgICAgdmFyIGUgPSBbXTtcbiAgICAgICAgICAgIHZhciBvID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyTm9kZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5jYXJOb2RlQXJyW2ldLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoci5jYXJDb2xvciA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSByLnNlYXRUb3RhbEFtb3VudDsgcyA+IDA7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLnJhbmRvbU51bSgxLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucHVzaChlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzIC09IGM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICBvLnB1c2goYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLmZsYXR0ZW4oZSk7XG4gICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLmZsYXR0ZW4obyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyclt0XSA9IGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4W3RdID0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQuY29uY2F0KGUuZmxhdHRlbihvKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0LmNvbmNhdChvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY29uc29sZVdlaWdodCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSBvW2ldO1xuICAgICAgICAgICAgciA9ICRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXNbaV0gKyBcIjpcIiArIHI7XG4gICAgICAgICAgICBvW2ldID0gcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0LCBvKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFBlcnNvbkNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXZpdmVBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMucmV2aXZlQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLmlzUmV2aXZlQW1vdW50ID0gMTtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZXZpdmVBbW91bnQgPSAwO1xuICAgICAgICBpZiAodGhpcy5maXJzdFNvcnRJbmRleEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcnN0U29ydEluZGV4QXJyLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQYXJraW5nV2VpZ2h0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU29ydFdlaWdodCgpO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuY29sb3JUeXBlQW1vdW50OyBlKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdID0gMDtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdICs9IHRoaXMuY2FyV2VpZ2h0W2VdO1xuICAgICAgICAgICAgdGhpcy5hbGxXZWlnaHRbZV0gKz0gdGhpcy5wYXJraW5nV2VpZ2h0W2VdO1xuICAgICAgICAgICAgdGhpcy5hbGxXZWlnaHRbZV0gKz0gdGhpcy5leHRyYVdlaWdodFtlXTtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdIC09IHRoaXMuc29ydFdlaWdodFtlXTtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdIDwgMCAmJiAodGhpcy5hbGxXZWlnaHRbZV0gPSAwKTtcbiAgICAgICAgICAgIDAgIT0gdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbZV0gJiZcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFtlXSA+PSB0aGlzLmNvbG9yUGVyc29uQXJyW2VdICYmXG4gICAgICAgICAgICAgICAgKGNvbnNvbGUubG9nKCRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXNbZV0gKyBcIuminOiJsuW3sue7j+a7oeWFg1wiKSwgKHRoaXMuYWxsV2VpZ2h0W2VdID0gMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmRvbUJ5V2VpZ2h0KFxuICAgICAgICAgICAgbmV3IEFycmF5KCRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoKS5maWxsKDEpLm1hcChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLmFsbFdlaWdodFxuICAgICAgICApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlU29ydFdlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zb3J0V2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuc29ydFBlcnNvbk5vZGVzW3RdLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3I7XG4gICAgICAgICAgICB0aGlzLnNvcnRXZWlnaHRbZV0gKz0gdGhpcy5sZXZlbERhdGFKU09OLnNvcnRXZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldENhckNvbG9yID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmNhck5vZGVBcnIubGVuZ3RoO1xuICAgICAgICB2YXIgaSA9IE1hdGgucm91bmQoKCh0ICsgMSkgLyBvKSAqIDEwMCk7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgZS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgdmFyIG4gPSBlW3JdO1xuICAgICAgICAgICAgaWYgKGkgPD0gblsxXSAmJiBpID49IG5bMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYXRjaE1hcFtyXSkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmF0Y2hNYXBbcl0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLnJhbmRvbU51bSgwLCB0aGlzLnJhbmRvbUNvbG9yQXJyW3JdLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy5yYW5kb21Db2xvckFycltyXVthXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXRjaE1hcFtyXS5pbmNsdWRlcyhzKSAmJiB0aGlzLnJhbmRvbUNvbG9yTnVtW3JdIDwgdGhpcy5yYW5kb21Db2xvckFycltyXS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHRoaXMucmFuZG9tTnVtKDAsIHRoaXMucmFuZG9tQ29sb3JBcnJbcl0ubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHMgPSB0aGlzLnJhbmRvbUNvbG9yQXJyW3JdW2FdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRvbUNvbG9yTnVtW3JdICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXRjaE1hcFtyXS5wdXNoKHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDYXJJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhck5vZGVBcnIuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5wYXRoIC1cbiAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5wYXRoXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXJOb2RlQXJyLmZvckVhY2goZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhcklEID0gbztcbiAgICAgICAgICAgIGlmICh0LmlzRGVidWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGNjLmluc3RhbnRpYXRlKGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXRoXCIpKTtcbiAgICAgICAgICAgICAgICBpLnBvc2l0aW9uID0gY2MudjIoMCwgLTIwKTtcbiAgICAgICAgICAgICAgICBpLnBhcmVudCA9IGU7XG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiSURcIiArIG87XG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhckFsbEFtb3VudCA9IHRoaXMuY2FyTm9kZUFyci5sZW5ndGg7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRBcnJCeUxlbiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHQgPSB0aGlzLnNvcnRDb2xvcl9uZXc7XG4gICAgICAgIHZhciBvID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSB0W2ldO1xuICAgICAgICAgICAgaWYgKGkgPj0gZVswXSAtIDEgJiYgaSA8PSBlWzFdIC0gMSkge1xuICAgICAgICAgICAgICAgIG8ucHVzaChyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldE90aGVyQ2FyQnlEaXN0YW5jZSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICB2YXIgaSA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGkubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIHZhciBuID0gaVtyXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBuICYmXG4gICAgICAgICAgICAgICAgbiAhPSB0ICYmXG4gICAgICAgICAgICAgICAgbi5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlICYmXG4gICAgICAgICAgICAgICAgbi5hY3RpdmUgJiZcbiAgICAgICAgICAgICAgICAhbi5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgJiZcbiAgICAgICAgICAgICAgICAhbi5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNVVHJhbnNwb3J0Q2FyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvLnB1c2gobik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIG8uc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgdmFyIG8gPSB0O1xuICAgICAgICAgICAgdmFyIGkgPSBlO1xuICAgICAgICAgICAgdmFyIHIgPSBbby5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLCBvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAtby5oZWlnaHQpKV07XG4gICAgICAgICAgICB2YXIgbiA9IFtpLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksIGkuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC1pLmhlaWdodCkpXTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLnBvaW50TGluZURpc3RhbmNlKGEsIHJbMF0sIHJbMV0sICEwKSAtXG4gICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLnBvaW50TGluZURpc3RhbmNlKGEsIG5bMF0sIG5bMV0sICEwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0UGF0aCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbztcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciByO1xuICAgICAgICB2YXIgbjtcbiAgICAgICAgdmFyIGE7XG4gICAgICAgIHZhciBzID0gdDtcbiAgICAgICAgaWYgKHMucGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHMucGF0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IHMud2lkdGg7XG4gICAgICAgIHZhciBsID0gcy5oZWlnaHQ7XG4gICAgICAgIGUgPSBzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtYyAvIDIsIC1sKSk7XG4gICAgICAgIG8gPSBzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtYyAvIDIsIDIyNTApKTtcbiAgICAgICAgaSA9IHMuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGMgLyAyLCAtbCkpO1xuICAgICAgICByID0gcy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoYyAvIDIsIDIyNTApKTtcbiAgICAgICAgbiA9IHMuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC1sKSk7XG4gICAgICAgIGEgPSBzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyMjUwKSk7XG4gICAgICAgIHZhciBoID0gdGhpcy5nZXRPdGhlckNhckJ5RGlzdGFuY2Uocyk7XG4gICAgICAgIHZhciBwID0gITE7XG4gICAgICAgIGlmIChzLmNvbGxpc2lvbkFycikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMuY29sbGlzaW9uQXJyID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQgPSAxO1xuICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGgubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgIHZhciBnID0gaFt1XTtcbiAgICAgICAgICAgIGlmIChnICE9IHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgICB2YXIgdjtcbiAgICAgICAgICAgICAgICB2YXIgeTtcbiAgICAgICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgICAgICB2YXIgUyA9IGcud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBnLmhlaWdodDtcbiAgICAgICAgICAgICAgICBtID0gZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLVMgLyAyLCAtaykpO1xuICAgICAgICAgICAgICAgIGYgPSBnLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtUyAvIDIsIDApKTtcbiAgICAgICAgICAgICAgICB2ID0gZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoUyAvIDIsIC1rKSk7XG4gICAgICAgICAgICAgICAgeSA9IGcuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKFMgLyAyLCAwKSk7XG4gICAgICAgICAgICAgICAgQyA9IGcuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKFMgLyAyICsgMSwgMCkpO1xuICAgICAgICAgICAgICAgIF8gPSBnLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtUyAvIDIgLSAxLCAwKSk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoZSwgbywgbSwgZikgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIHYsIHkpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShpLCByLCBtLCBmKSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoaSwgciwgdiwgeSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIEMsIF8pIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShpLCByLCBDLCBfKSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUobiwgYSwgQywgXylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZy5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkICs9IGcucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gdGhpcy5nZXRQYXRoKGcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHMucGF0aCA9IGQpLCBkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChzLnBhdGggPSAxKSwgMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGFzQ29tbW9uRWxlbWVudCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiB0LnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmluY2x1ZGVzKHQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFyZUFsbE51bWJlcnNTbWFsbGVyVGhhbiA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiB0LmV2ZXJ5KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdCA8IGU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tXZWlnaHRMaW1pdCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2VpZ2h0TGltaXRJbmRleCA9IGU7XG4gICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodFtpXSA8IHRoaXMubGV2ZWxEYXRhSlNPTi53ZWlnaHRMaW1pdFtlXSkge1xuICAgICAgICAgICAgICAgIG8gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobyA+PSB0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhSlNPTi53ZWlnaHRMaW1pdFtlICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja1dlaWdodExpbWl0KHQsIGUgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2VpZ2h0TGltaXRJbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZmV0Y2hNYXhJbmRleCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHJldHVybiB0XG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZSAtIHQudmFsdWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodCwgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvIDwgZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQua2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRMZXZlbFByb2dyZXNzQnlDYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIHZhciBlID0gMDtcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0Lmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRbb107XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaSAmJlxuICAgICAgICAgICAgICAgIGkuYWN0aXZlICYmXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBlICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSAoKHRoaXMuY2FyQWxsQW1vdW50IC0gZSkgLyB0aGlzLmNhckFsbEFtb3VudCkgKiAxMDA7XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YUpTT04uaGFyZFBvaW50cykge1xuICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IHRoaXMubGV2ZWxEYXRhSlNPTi5oYXJkUG9pbnRzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmxldmVsRGF0YUpTT04uaGFyZFBvaW50c1tvXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFyZFBvaW50c0luZGV4cy5pbmNsdWRlcyhvKSAmJiBuWzBdIDw9IHIgJiYgblsxXSA+PSByKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Kem5Y+R5Y2h54K5XCIsIG4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhcmRQb2ludHNJbmRleHMucHVzaChvKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yYW5kb21CeVdlaWdodCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh0Lmxlbmd0aCAhPSBlLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwicmFuZG9tMui+k+WFpeS4jeWQiOazlTogcmVzdWx0QXJyLmxlbmd0aCAhPSB3ZWlnaHRBcnIubGVuZ3RoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2V0TGV2ZWxQcm9ncmVzc0J5Q2FyKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y+W5p2D6YeN5LiN5Li6MOS9huacgOWwj+eahOminOiJslwiKTtcbiAgICAgICAgICAgIHZhciBvID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gZVswXTtcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgZS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gZVtyXTtcbiAgICAgICAgICAgICAgICBpZiAoKG4gPCBpICYmIDAgIT0gbikgfHwgKDAgPT0gaSAmJiAwICE9IG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIG8gPSByO1xuICAgICAgICAgICAgICAgICAgICBpID0gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1pbkluZGV4XCIsIG8pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLljaHngrnov4fmu6TliY3mnYPph41cIiwgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICBpZiAociAhPSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIGVbcl0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y2h54K56L+H5ruk5ZCO5p2D6YeNXCIsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5mZXRjaE1heEluZGV4KGUsIHRoaXMubGV2ZWxEYXRhSlNPTi5saW1pdFJhbmsgfHwgJGxldmVsXzI5MDc2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IGUubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICBlW3JdO1xuICAgICAgICAgICAgICAgIGEuaW5jbHVkZXMocikgfHwgKGVbcl0gPSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcnJheXNFcXVhbChlLCBuZXcgQXJyYXkoJGxldmVsXzI5MDc2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGgpLmZpbGwoMCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE9cIik7XG4gICAgICAgICAgICB2YXIgcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChyID0gMDsgciA8ICRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltyXS5sZW5ndGggJiYgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbcl0gPCB0aGlzLmNvbG9yUGVyc29uQXJyW3JdKSB7XG4gICAgICAgICAgICAgICAgICAgIHMucHVzaChyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE9cIiwgcyk7XG4gICAgICAgICAgICBpZiAocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc1t0aGlzLnJhbmRvbU51bSgwLCBzLmxlbmd0aCAtIDEpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IDA7XG4gICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgdmFyIGggPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBmb3IgKHZhciBwID0gZS5sZW5ndGggLSAxOyBwID49IDA7IHAtLSkge1xuICAgICAgICAgICAgYyArPSBlW3BdO1xuICAgICAgICB9XG4gICAgICAgIGggKj0gYztcbiAgICAgICAgZm9yIChwID0gZS5sZW5ndGggLSAxOyBwID49IDA7IHAtLSkge1xuICAgICAgICAgICAgaWYgKGggPD0gKGwgKz0gZVtwXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdFtwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFycmF5c0VxdWFsID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHQubGVuZ3RoICE9PSBlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdC5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgaWYgKHRbb10gIT09IGVbb10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmFuZG9tTnVtID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSBlIC0gdDtcbiAgICAgICAgdmFyIHIgPSBvIHx8IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiB0ICsgTWF0aC5yb3VuZChyICogaSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRMb2NhbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsRGF0YVt0XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhW3RdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiXCIgKyB0aGlzLmxldmVsSUQgKyB0KTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldExvY2FsID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGFbdF0gPSBlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJcIiArIHRoaXMubGV2ZWxJRCArIHQsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAodCwgZSwgbykge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMC44O1xuICAgICAgICB9XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcbiAgICAgICAgICAgIG8gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LnRpcFByZWZhYik7XG4gICAgICAgIHRoaXMuZGljdC5nYW1lLmFkZENoaWxkKGkpO1xuICAgICAgICBpLmFjdGl2ZSA9ICEwO1xuICAgICAgICBpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKHQpO1xuICAgICAgICBpLnNldFBvc2l0aW9uKGNjLnYyKDAsIC02MCkpO1xuICAgICAgICBpLm9wYWNpdHkgPSAwO1xuICAgICAgICBjYy50d2VlbihpKVxuICAgICAgICAgICAgLmJ5KDAuMywge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCA2MCksXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KGUpXG4gICAgICAgICAgICAuYnkoMC4zLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDYwKSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAtMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19zb3J0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mdW5jX3NvcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfc29ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU29ydGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzU29ydGluZyA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNTb3J0QW5pbSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgPSAxLjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvaXRlbS9TdGFyUHJlZmFiXCIsIGNjLlByZWZhYildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IHIuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGNjLmluc3RhbnRpYXRlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMucGFyZW50LmFkZENoaWxkKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgaS5zb3J0UGVyc29uTm9kZXMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gaS5zb3J0UGVyc29uTm9kZXNbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGkucmFuZG9tTnVtKDAsICRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnNldENvbG9yUGVyc29uSW1nX3NvcnQobywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCAtIDEpIC8gMC4yIC0gMC4zXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5pc1NvcnRBbmltID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmlzRmFpbCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNvbnNvbGVXZWlnaHQoXCLmgLvmnYPph41cIiwgaS5hbGxXZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5o6S6Zif6aKc6Imy6aG65bqPXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmZldGNoTWF4SW5kZXgoaS5hbGxXZWlnaHQsICRsZXZlbF8yOTA3Nl9jb25maWcuY29sb3JEZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGkuZmV0Y2hNYXhJbmRleChpLmFsbFdlaWdodCwgJGxldmVsXzI5MDc2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBBcnJheSgkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzLmxlbmd0aCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBpLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IGkuc29ydFBlcnNvbk5vZGVzW3JdKS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5wZXJzb25Db2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChyID0gMDsgciA8IGkuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGkuc29ydFBlcnNvbk5vZGVzW3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHRbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSBlW3NdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChzID0gdFsobiArPSAxKV0pLCAhKG4gPj0gJGxldmVsXzI5MDc2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbc10gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0KS5wZXJzb25Db2xvciA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnNldENvbG9yUGVyc29uSW1nX3NvcnQocywgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzW3NdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNoZWNrUGVyc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNTb3J0aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0PT09PT1cIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyKSkpO1xuICAgICAgICB2YXIgdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICB2YXIgbyA9IChwID0gdGhpcy5zb3J0UGVyc29uTm9kZXNbZV0pLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3I7XG4gICAgICAgICAgICB0LnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLmtojpmaRcIiwgdCk7XG4gICAgICAgIHZhciBpID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdLmNhcjtcbiAgICAgICAgdmFyIHIgPSBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcjtcbiAgICAgICAgdmFyIG4gPSBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgIHZhciBhID0gW107XG4gICAgICAgIHZhciBzID0gW107XG4gICAgICAgIGZvciAoZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICBpZiAoYS5sZW5ndGggPCBuICYmIHRbZV0gPT0gcikge1xuICAgICAgICAgICAgICAgIGEucHVzaCh0W2VdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5wdXNoKHRbZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjID0gYS5jb25jYXQocyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5paw5o6S5bqPXCIsIEpTT04uc3RyaW5naWZ5KGMpKTtcbiAgICAgICAgdmFyIGwgPSBuIC0gYS5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkXCIsIGwpO1xuICAgICAgICBpZiAobCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltyXSkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCBsOyBoKyspIHtcbiAgICAgICAgICAgICAgICBjLnVuc2hpZnQocik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiafooYxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGUgPSB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3JdLmxlbmd0aCAtIDE7IGUgPj0gMDsgZS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbcl1bZV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsIDw9IHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbcl1bZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbcl1bZV0gLT0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbCAtPSB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3JdW2VdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3JdW2VdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltyXSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaWsOaOkuW6jzJcIiwgSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICBmb3IgKGUgPSAwOyBlIDwgYy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1tlXTtcbiAgICAgICAgICAgIHZhciBkID0gY1tlXTtcbiAgICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICAgICAgcC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLnBlcnNvbkNvbG9yID0gZDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yUGVyc29uSW1nX3NvcnQoZCwgcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gdGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltkXS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbZF1bdV0gKz0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWbnuaUtlwiLCAkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzW2RdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFtkXSAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kPT09PT1cIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyKSkpO1xuICAgICAgICB0aGlzLmNoZWNrUGVyc29uKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXZpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoci5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc1NvcnRpbmcgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzU29ydEFuaW0gPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ID0gMS41KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwicHJlZmFiL2l0ZW0vU3RhclByZWZhYlwiLCBjYy5QcmVmYWIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSByLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBjYy5pbnN0YW50aWF0ZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC50YWlsR2FzLnBhcmVudC5hZGRDaGlsZChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGkuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGkuc29ydFBlcnNvbk5vZGVzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBpLnJhbmRvbU51bSgwLCAkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5zZXRDb2xvclBlcnNvbkltZ19zb3J0KG8sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgLSAxKSAvIDAuMiAtIDAuM1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNGYWlsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucG9saWNlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmdvbGRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNTb3J0QW5pbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGkucGFya2luZ05vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IChnID0gaS5wYXJraW5nTm9kZXNbbl0pLmNhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZy5pc0VtcHR5ICYmIGEgJiYgdCA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShzLmVtcHR5U2VhdEFtb3VudCkuZmlsbChzLmNhckNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gci5jb25jYXQoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVbcy5jYXJDb2xvcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBlW3MuY2FyQ29sb3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsICs9IHMuZW1wdHlTZWF0QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3MuY2FyQ29sb3JdID0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3MuY2FyQ29sb3JdID0gcy5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZyA6KaB5LuO5ZCO6Z2i5YeP5o6JXCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IGkuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IChnID0gaS5zb3J0UGVyc29uTm9kZXNbbl0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5wZXJzb25Db2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmluY2x1ZGVzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gKGwgPSBlW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGwgLT0gMSksIChlW3BdID0gbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBpbiAoKHIgPSByLmNvbmNhdChoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZyA6KaB5LuO5ZCO6Z2i5YeP5o6JMjIyXCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydFwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkuY29sb3JQZXJzb25BbW91bnRBcnIpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGVbZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gTnVtYmVyKGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gaS5jb2xvclBlcnNvbkFtb3VudEFycltwXS5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5jb2xvclBlcnNvbkFtb3VudEFycltwXVtuXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1IDw9IGkuY29sb3JQZXJzb25BbW91bnRBcnJbcF1bbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNvbG9yUGVyc29uQW1vdW50QXJyW3BdW25dIC09IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1IC09IGkuY29sb3JQZXJzb25BbW91bnRBcnJbcF1bbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNvbG9yUGVyc29uQW1vdW50QXJyW3BdW25dID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZFwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkuY29sb3JQZXJzb25BbW91bnRBcnIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpLnJldml2ZUFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucmV2aXZlQXJyID0gci5jb25jYXQoaS5yZXZpdmVBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5yZXZpdmVBcnIgPSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCByLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IGkuc29ydFBlcnNvbk5vZGVzW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHJbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0KS5wZXJzb25Db2xvciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5zZXRDb2xvclBlcnNvbkltZ19zb3J0KHAsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuWbnuaUtlwiLCAkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzW3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0LXJldml2ZUFyclwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkucmV2aXZlQXJyKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgci5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGkuc29ydFBlcnNvbk5vZGVzW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHJbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnJldml2ZUFyciA9IGkucmV2aXZlQXJyLnNwbGljZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZC1yZXZpdmVBcnJcIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpLnJldml2ZUFycikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jaGVja1BlcnNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmlzU29ydGluZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJldml2ZTIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoci5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc1NvcnRpbmcgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzU29ydEFuaW0gPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ID0gMS41KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwicHJlZmFiL2l0ZW0vU3RhclByZWZhYlwiLCBjYy5QcmVmYWIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSByLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBjYy5pbnN0YW50aWF0ZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC50YWlsR2FzLnBhcmVudC5hZGRDaGlsZChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGkuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGkuc29ydFBlcnNvbk5vZGVzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBpLnJhbmRvbU51bSgwLCAkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5zZXRDb2xvclBlcnNvbkltZ19zb3J0KG8sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgLSAxKSAvIDAuMiAtIDAuM1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNGYWlsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucG9saWNlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmdvbGRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNTb3J0QW5pbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGkucGFya2luZ05vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IChnID0gaS5wYXJraW5nTm9kZXNbbl0pLmNhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZy5pc0VtcHR5ICYmIGEgJiYgdCA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShzLmVtcHR5U2VhdEFtb3VudCkuZmlsbChzLmNhckNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gci5jb25jYXQoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVbcy5jYXJDb2xvcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBlW3MuY2FyQ29sb3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsICs9IHMuZW1wdHlTZWF0QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3MuY2FyQ29sb3JdID0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3MuY2FyQ29sb3JdID0gcy5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZyA6KaB5LuO5ZCO6Z2i5YeP5o6JXCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IGkuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IChnID0gaS5zb3J0UGVyc29uTm9kZXNbbl0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5wZXJzb25Db2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmluY2x1ZGVzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gKGwgPSBlW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGwgLT0gMSksIChlW3BdID0gbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBpbiAoKHIgPSByLmNvbmNhdChoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZyA6KaB5LuO5ZCO6Z2i5YeP5o6JMjIyXCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydFwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkuY29sb3JQZXJzb25BbW91bnRBcnIpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGVbZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gTnVtYmVyKGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gaS5jb2xvclBlcnNvbkFtb3VudEFycltwXS5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5jb2xvclBlcnNvbkFtb3VudEFycltwXVtuXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1IDw9IGkuY29sb3JQZXJzb25BbW91bnRBcnJbcF1bbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNvbG9yUGVyc29uQW1vdW50QXJyW3BdW25dIC09IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1IC09IGkuY29sb3JQZXJzb25BbW91bnRBcnJbcF1bbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmNvbG9yUGVyc29uQW1vdW50QXJyW3BdW25dID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZFwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkuY29sb3JQZXJzb25BbW91bnRBcnIpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpLnJldml2ZUFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucmV2aXZlQXJyID0gci5jb25jYXQoaS5yZXZpdmVBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5yZXZpdmVBcnIgPSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCByLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IGkuc29ydFBlcnNvbk5vZGVzW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHJbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0KS5wZXJzb25Db2xvciA9IHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5zZXRDb2xvclBlcnNvbkltZ19zb3J0KHAsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuWbnuaUtlwiLCAkbGV2ZWxfMjkwNzZfY29uZmlnLmNvbG9yRGVzW3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0LXJldml2ZUFyclwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkucmV2aXZlQXJyKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgci5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGkuc29ydFBlcnNvbk5vZGVzW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHJbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnJldml2ZUFyciA9IGkucmV2aXZlQXJyLnNwbGljZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZC1yZXZpdmVBcnJcIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpLnJldml2ZUFycikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jaGVja1BlcnNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmlzU29ydGluZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfc29ydE9sZCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgciA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG4ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNTb3J0aW5nID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc1NvcnRBbmltID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSA9IDEuNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInByZWZhYi9pdGVtL1N0YXJQcmVmYWJcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gY2MuaW5zdGFudGlhdGUobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5wYXJlbnQuYWRkQ2hpbGQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSByLnNvcnRQZXJzb25Ob2Rlc1t0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gci5yYW5kb21OdW0oMCwgJGxldmVsXzI5MDc2X2NvbmZpZy5jb2xvckRlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0Q29sb3JQZXJzb25JbWdfc29ydChvLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlIC0gMSkgLyAwLjIgLSAwLjNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5wb2xpY2VJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nb2xkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaXNTb3J0QW5pbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaXNGYWlsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZmlyc3RTb3J0QW1vdW50QXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gci5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdLmNhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5wdXNoKG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmVtcHR5U2VhdEFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgci5wYXJraW5nTm9kZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gKHAgPSByLnBhcmtpbmdOb2Rlc1thXSkuY2FyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwLmlzRW1wdHkgJiYgcyAmJiBlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2gocy5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucHVzaChzLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHIucGFya2luZ05vZGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gKHAgPSByLnBhcmtpbmdOb2Rlc1thXSkuY2FyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXAuaXNFbXB0eSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmxlbmd0aCA8IDQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZS5wdXNoKG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnB1c2gobi5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkoci5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaCA9IChwID0gci5zb3J0UGVyc29uTm9kZXNbYV0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnBlcnNvbkNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbaF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyLmZpcnN0U29ydEluZGV4QXJyLmluY2x1ZGVzKGgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyci5sZW5ndGggPCAyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyci5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbmV3IEFycmF5KHIuY29sb3JUeXBlQW1vdW50KS5maWxsKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCByLmNvbG9yUGVyc29uQW1vdW50QXJyLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHIuY29sb3JQZXJzb25BbW91bnRBcnJbaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmNvbG9yUGVyc29uSW5kZXhBcnJbaF0gPT0gcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBwLnNsaWNlKC0ocC5sZW5ndGggLSByLmNvbG9yUGVyc29uSW5kZXhBcnJbaF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbaF0gPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBsLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCAhPSBjW2FdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbFthXS5wdXNoKGNbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLmZpcnN0U29ydEluZGV4QXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gci5maXJzdFNvcnRJbmRleEFyclthXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmID0gci5jb2xvclBlcnNvbkFycltoXSAtIHIuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2hdKSA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHYgPSBsW2hdKVt2Lmxlbmd0aCAtIDFdID4gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZbdi5sZW5ndGggLSAxXSAtPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodlt2Lmxlbmd0aCAtIDFdID09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGcgPCB1OyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnICs9IHZbdi5sZW5ndGggLSAxXSkgPiB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2W3YubGVuZ3RoIC0gMV0gPSBnIC0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi51bnNoaWZ0KHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbFtoXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHIuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodiA9IHIuc29ydFBlcnNvbk5vZGVzW2FdKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5zb3J0UGVyc29uTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jb2xvclBlcnNvbkluZGV4QXJyID0gbmV3IEFycmF5KHIuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNvbG9yUGVyc29uQW1vdW50QXJyID0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jcmVhdGVQZXJzb24oITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmlzU29ydGluZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMSA9PSBlLmxlbmd0aCB8fCAyID09IGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZmlyc3RTb3J0SW5kZXhBcnIgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmZpcnN0U29ydEFtb3VudEFyciA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBuZXcgQXJyYXkoci5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaCA9IChwID0gci5zb3J0UGVyc29uTm9kZXNbYV0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnBlcnNvbkNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbaF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZmlyc3RTb3J0SW5kZXhBcnIubGVuZ3RoIDwgbSArIDEgJiYgci5maXJzdFNvcnRJbmRleEFyci5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoci5maXJzdFNvcnRJbmRleEFyci5sZW5ndGggPCBtICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHIuY29sb3JQZXJzb25BcnIubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ID0gci5jb2xvclBlcnNvbkFyclthXSkgLSByLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFthXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmZpcnN0U29ydEluZGV4QXJyLmxlbmd0aCA8IG0gKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZmlyc3RTb3J0SW5kZXhBcnIucHVzaChhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IG5ldyBBcnJheShyLmNvbG9yVHlwZUFtb3VudCkuZmlsbChbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaCA9IDA7IGggPCByLmNvbG9yUGVyc29uQW1vdW50QXJyLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gci5jb2xvclBlcnNvbkFtb3VudEFycltoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5jb2xvclBlcnNvbkluZGV4QXJyW2hdID09IHAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gcC5zbGljZSgtKHAubGVuZ3RoIC0gci5jb2xvclBlcnNvbkluZGV4QXJyW2hdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsW2hdID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgbC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgIT0gY1thXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbYV0ucHVzaChjW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgci5maXJzdFNvcnRJbmRleEFyci5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHIuZmlyc3RTb3J0SW5kZXhBcnJbYV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHUgPSByLmZpcnN0U29ydEFtb3VudEFyclthXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGYgPSByLmNvbG9yUGVyc29uQXJyW2hdIC0gci5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbaF0pIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh2ID0gbFtoXSlbdi5sZW5ndGggLSAxXSA+IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2W3YubGVuZ3RoIC0gMV0gLT0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnVuc2hpZnQodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZbdi5sZW5ndGggLSAxXSA9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnVuc2hpZnQodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBnIDwgdTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZyArPSB2W3YubGVuZ3RoIC0gMV0pID4gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdlt2Lmxlbmd0aCAtIDFdID0gZyAtIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbaF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYgPSByLnNvcnRQZXJzb25Ob2Rlc1thXSkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc29ydFBlcnNvbk5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY29sb3JQZXJzb25JbmRleEFyciA9IG5ldyBBcnJheShyLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jb2xvclBlcnNvbkFtb3VudEFyciA9IGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY3JlYXRlUGVyc29uKCEwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNoZWNrUGVyc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmlzU29ydGluZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmZpcnN0U29ydEluZGV4QXJyID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRBbW91bnRBcnIgPSBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gbmV3IEFycmF5KHIuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgci5zb3J0UGVyc29uTm9kZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGggPSAocCA9IHIuc29ydFBlcnNvbk5vZGVzW2FdKS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5wZXJzb25Db2xvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2hdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IG5ldyBBcnJheShyLmNvbG9yVHlwZUFtb3VudCkuZmlsbChbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaCA9IDA7IGggPCByLmNvbG9yUGVyc29uQW1vdW50QXJyLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gci5jb2xvclBlcnNvbkFtb3VudEFycltoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5jb2xvclBlcnNvbkluZGV4QXJyW2hdID09IHAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gcC5zbGljZSgtKHAubGVuZ3RoIC0gci5jb2xvclBlcnNvbkluZGV4QXJyW2hdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsW2hdID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgbC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgIT0gY1thXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbYV0ucHVzaChjW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgci5maXJzdFNvcnRJbmRleEFyci5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHIuZmlyc3RTb3J0SW5kZXhBcnJbYV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gci5maXJzdFNvcnRBbW91bnRBcnJbYV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHIuY29sb3JQZXJzb25BcnJbaF0gLSByLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFtoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh2ID0gbFtoXSlbdi5sZW5ndGggLSAxXSA+IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2W3YubGVuZ3RoIC0gMV0gLT0gdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnVuc2hpZnQodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZbdi5sZW5ndGggLSAxXSA9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnVuc2hpZnQodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBnIDwgdTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZyArPSB2W3YubGVuZ3RoIC0gMV0pID4gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdlt2Lmxlbmd0aCAtIDFdID0gZyAtIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbaF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodiA9IHIuc29ydFBlcnNvbk5vZGVzW2FdKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5zb3J0UGVyc29uTm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jb2xvclBlcnNvbkluZGV4QXJyID0gbmV3IEFycmF5KHIuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNvbG9yUGVyc29uQW1vdW50QXJyID0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jcmVhdGVQZXJzb24oITAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2hlY2tQZXJzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaXNTb3J0aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3VwZGF0ZUNhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBbXTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmNhclJvb3QuY2hpbGRyZW4uY29uY2F0KHRoaXMudHVybnRhYmxlQ2FyQXJyKTtcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIShsID0gZVtvXSkuYWN0aXZlIHx8XG4gICAgICAgICAgICAgICAgbC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI5MDc2X2NvbmZpZy5DYXJTdGF0ZS5JZGxlIHx8XG4gICAgICAgICAgICAgICAgbC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgfHxcbiAgICAgICAgICAgICAgICBsLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc1VUcmFuc3BvcnRDYXIgfHxcbiAgICAgICAgICAgICAgICBsLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5pc0JsYWNrQ2FyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0LnB1c2gobCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IHRbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRbbl07XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICByICE9IGEgJiZcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuc2VhdFRvdGFsQW1vdW50ID09XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5zZWF0VG90YWxBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IgIT1cbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yICYmXG4gICAgICAgICAgICAgICAgICAgICFyLmlzRXhjaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgIWEuaXNFeGNoYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMucmFuZG9tTnVtKDAsIDEpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gYztcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IgPSBzO1xuICAgICAgICAgICAgICAgICAgICByLmlzRXhjaGFuZ2UgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgYS5pc0V4Y2hhbmdlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyQ29sb3JJbWcociwgci5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENhckNvbG9ySW1nKGEsIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICB2YXIgbDtcbiAgICAgICAgICAgIChsID0gZVtvXSkuaXNFeGNoYW5nZSA9ICExO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2Nob29zZUNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICExO1xuICAgICAgICB2YXIgdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC50aXBQcmVmYWIpO1xuICAgICAgICB0aGlzLmRpY3QudGlwUHJlZmFiLnBhcmVudC5hZGRDaGlsZCh0KTtcbiAgICAgICAgdGhpcy50aXBSZW1vdmUgPSB0O1xuICAgICAgICB0LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLlj6/mi47lh7rku7vmhI/kuIDkuKrnm5LlrZDoh7NWSVDkvY3nva7mtojpmaRcIik7XG4gICAgICAgIHQueSA9IDMwMS42NDM7XG4gICAgICAgIHQuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSAhMDtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiaXNSZW1vdmVcIiwgITApO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmNhclJvb3QuY2hpbGRyZW5bZV07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkucHJldkNhciB8fFxuICAgICAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLm5leHRDYXIgfHxcbiAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwia2V5XCIpIHx8XG4gICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImxvY2tcIilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG8ub3BhY2l0eSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVtb3ZlQ2FyT2xkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlbW92ZVByb3BVc2luZyA9ICEwO1xuICAgICAgICB0aGlzLnRpcFJlbW92ZS5kZXN0cm95KCk7XG4gICAgICAgIHZhciBvID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLXQuaGVpZ2h0IC8gMikpO1xuICAgICAgICB0aGlzLmRpY3QuaGVsaWNvcHRlclJvb3QucG9zaXRpb24gPSBjYy52Myg0MzQsIC02MTQsIDApO1xuICAgICAgICB2YXIgaSA9IHRoaXMuZGljdC5oZWxpY29wdGVyUm9vdC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobyk7XG4gICAgICAgIHZhciByID0gdGhpcy5kaWN0LmhlbGljb3B0ZXJSb290LnBvc2l0aW9uLnN1YihpKS5tYWcoKTtcbiAgICAgICAgdGhpcy5kaWN0LmhlbGljb3B0ZXJTcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjJcIiwgITApO1xuICAgICAgICB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bMF0uYWN0aXZlID0gITA7XG4gICAgICAgIHZhciBuID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihcbiAgICAgICAgICAgIGNjLnYyKDAsIC10aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bMF0uaGVpZ2h0IC8gMilcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmRpY3QuaGVsaWNvcHRlclJvb3QucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgICAgICB2YXIgcyA9IGkuc3ViKGEpLm1hZygpO1xuICAgICAgICB0aGlzLmRpY3QuaGVsaWNvcHRlclJvb3QuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC5oZWxpY29wdGVyUm9vdC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBjYy50d2Vlbih0aGlzLmRpY3QuaGVsaWNvcHRlclJvb3QpXG4gICAgICAgICAgICAudG8ociAvIDUwMCwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lID0gdC5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICApLmxlbkltZ05hbWU7XG4gICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY29sb3JJbWdOYW1lID0gdC5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICApLmNvbG9ySW1nTmFtZTtcbiAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvciA9IHQuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jYXJDb2xvcjtcbiAgICAgICAgICAgICAgICBpZiAodC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlLnRyYW5zcG9ydENhckFyci5pbmRleE9mKHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudHJhbnNwb3J0Q2FyQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBlLmRpY3QuaGVsaWNvcHRlclJvb3QuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgICAgICAgICAgby5wb3NpdGlvbiA9IGUuZGljdC5oZWxpY29wdGVyUm9vdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50byhzIC8gNTAwLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuOVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IGUuZGljdC5oZWxpY29wdGVyUm9vdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNvbG9ySW1nTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWU7XG4gICAgICAgICAgICAgICAgKHQgPSBjYy5pbnN0YW50aWF0ZShlLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMDZcIiArIG4pKSkucGFya2luZyA9XG4gICAgICAgICAgICAgICAgICAgIGUuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIGUuY2FyUm9vdC5hZGRDaGlsZCh0KTtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IHQucGFya2luZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgICAgIGkgPSB0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzKTtcbiAgICAgICAgICAgICAgICB0LnBvc2l0aW9uID0gY2MudjIoaS54LCBpLnkpO1xuICAgICAgICAgICAgICAgIHZhciBjID0gXCJcIiArIHIgKyA2ICsgbjtcbiAgICAgICAgICAgICAgICBhID0gXCJ0ZXh0dXJlL1wiICsgZS5mb2xkZXIgKyBcIi9cIiArIGUuZm9sZGVyICsgXCJfXCIgKyBjO1xuICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gby5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICApLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmNvbG9ySW1nTmFtZSA9IG8uZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jb2xvckltZ05hbWU7XG4gICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSA9IG8uZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5sZW5JbWdOYW1lO1xuICAgICAgICAgICAgICAgIHQucGFya2luZy5jYXIgPSB0O1xuICAgICAgICAgICAgICAgIHQucGFya2luZy5pc0VtcHR5ID0gITE7XG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoYSwgZnVuY3Rpb24gKGksIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgby5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGUuZGljdC5oZWxpY29wdGVyUm9vdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZS5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pc1JlbW92ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVQcm9wVXNpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJpc1JlbW92ZVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGUuY2FyUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5jYXJSb290LmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkucHJldkNhciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5uZXh0Q2FyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJrZXlcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImxvY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZW1vdmVDYXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICB0aGlzLnJlbW92ZVByb3BVc2luZyA9ICEwO1xuICAgICAgICB0aGlzLnRpcFJlbW92ZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblswXS5hY3RpdmUgPSAhMDtcbiAgICAgICAgaWYgKDEgPT0gdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSkge1xuICAgICAgICAgICAgZSA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblswXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgdC5oZWlnaHQgLyAyICsgNSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKDIgPT0gdC5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSkge1xuICAgICAgICAgICAgICAgIGUgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bMF0uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIHQuaGVpZ2h0IC8gMikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCB0LmhlaWdodCAvIDIgKyAyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSB0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKTtcbiAgICAgICAgY2MudHdlZW4odClcbiAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogaVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWU7XG4gICAgICAgICAgICAgICAgKGUgPSBjYy5pbnN0YW50aWF0ZShvLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMDZcIiArIHIpKSkucGFya2luZyA9XG4gICAgICAgICAgICAgICAgICAgIG8uZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBlLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgICAgICAgICBlLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIG8uY2FyUm9vdC5hZGRDaGlsZChlKTtcbiAgICAgICAgICAgICAgICBlLnBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvciA9IHQuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jYXJDb2xvcjtcbiAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwNzZfYm94Q2FySXRlbS5kZWZhdWx0KS5jb2xvckltZ05hbWUgPSB0LmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICkuY29sb3JJbWdOYW1lO1xuICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yOTA3Nl9ib3hDYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgPSB0LmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICkubGVuSW1nTmFtZTtcbiAgICAgICAgICAgICAgICBlLnBhcmtpbmcuY2FyID0gZTtcbiAgICAgICAgICAgICAgICBlLnBhcmtpbmcuaXNFbXB0eSA9ICExO1xuICAgICAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHZhciBuID0gZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuc2VhdFRvdGFsQW1vdW50O1xuICAgICAgICAgICAgICAgIHZhciBhID0gZS5nZXRDb21wb25lbnQoJGxldmVsXzI5MDc2X2JveENhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGdhbWUuYm94QXRsYXMuZ2V0U3ByaXRlRnJhbWUoXG4gICAgICAgICAgICAgICAgICAgIFwiZjI4NzQ5X1wiICsgKDEwMCAqICRsZXZlbF8yOTA3Nl9jb25maWcuUGFya2luZ0ltZ1tuXSArIGEgKyAxKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICBvLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIG8uc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgby5pc1JlbW92ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICBvLnJlbW92ZVByb3BVc2luZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICBvLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJpc1JlbW92ZVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3Jldml2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnVuY19oYXNMb2NrUGFya2luZygpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgICAgIGlmIChlLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpICYmIGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBlLmdldENoaWxkQnlOYW1lKFwiZW1wdHlcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVVubG9ja1NwaW5lKGUpO1xuICAgICAgICAgICAgICAgICAgICBlLmlzRW1wdHkgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJraW5nTm9kZXMucHVzaChlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZnVuY19zb3J0T2xkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgIHF1ZXVlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpLFxuICAgICAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mdW5jX3NvcnRPbGQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19oYXNMb2NrUGFya2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgaWYgKGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikgJiYgZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19lbmRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmRpY3QucGVyc29uUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblJvb3QuY2hpbGRyZW5bdF0ucGF1c2VBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfcmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuZGljdC5wZXJzb25Sb290LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QucGVyc29uUm9vdC5jaGlsZHJlblt0XS5yZXN1bWVBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1coY2MuU3ByaXRlQXRsYXMpXSwgZS5wcm90b3R5cGUsIFwiYm94MlNwcml0ZUF0bGFzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbV10sIGUucHJvdG90eXBlLCBcImlzRGVidWdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtXXSwgZS5wcm90b3R5cGUsIFwiYm91bmRhcnlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFskbGltaXRSZXBlYXQuTGltaXRSZXBlYXQoMC4zKV0sIGUucHJvdG90eXBlLCBcInRvdWNoU3RhcnRcIiwgbnVsbCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW0JdLCBlKTtcbn0pKCRicmFpbkxldmVsQmFzZS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEw7XG4iXX0=