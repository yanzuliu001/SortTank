
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-249667_bus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cae89gsklEoIUAnoA32UtM', 'Level-249667_bus');
// script/scripts/Level-249667_bus.js

"use strict";

var i;

var $userConst = require("../../scripts/UserConst");

var $tools = require("../../scripts/Tools");

var $audioManager = require("../../scripts/AudioManager");

var $bmsManager = require("../../scripts/BmsManager");

var $languageManager = require("../../scripts/LanguageManager");

var $platformManager = require("../../scripts/PlatformManager");

var $tipManager = require("../../scripts/TipManager");

var $userManager = require("../../scripts/UserManager");

var $limitRepeat = require("../../scripts/LimitRepeat");

var $utils = require("../../scripts/Utils");

var $shuShuConst = require("../../scripts/ShuShuConst");

var $localStorageConst = require("../../scripts/LocalStorageConst");

var $localStorageManager = require("../../scripts/LocalStorageManager");

var $memoryStorageConst = require("../../scripts/MemoryStorageConst");

var $memoryStorageManager = require("../../scripts/MemoryStorageManager");

var $assetManager = require("../../scripts/AssetManager");

var $popupConst = require("../../scripts/PopupConst");

var $popupManager = require("../../scripts/PopupManager");

var $toastManager = require("../../scripts/ToastManager");

var $brainLevelBase = require("./BrainLevelBase");

var $poolMgr = require("./PoolMgr");

var $level_249667_bulldozer = require("./Level-249667_bulldozer");

var $level_249667_busConfig = require("./Level-249667_busConfig");

var $level_249667_carItem = require("./Level-249667_carItem");

var $level_249667_carpark = require("./Level-249667_carpark");

var $level_249667_carSquare = require("./Level-249667_carSquare");

var $level_249667_chain = require("./Level-249667_chain");

var $level_249667_key = require("./Level-249667_key");

var $level_249667_oblique = require("./Level-249667_oblique");

var $level_249667_personItem = require("./Level-249667_personItem");

var $level_249667_turntable = require("./Level-249667_turntable");

var $level_249667_uTransport = require("./Level-249667_uTransport");

var $motionTrail = require("./MotionTrail");

var j = cc._decorator;
var U = j.ccclass;
var z = j.property;

var H = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isDebug = !1;
    e.boundary = 750;
    e.isWaterMode = !1;
    e.isHighSpeedRailway = !1;
    e.carRoot = null;
    e.colorTypeAmount = $level_249667_busConfig.colorDes.length;
    e.roadPoint0 = null;
    e.roadPoint1 = null;
    e.turntableCarArr = [];
    e.transportAmount = null;
    e.transportCarArr = [];
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
    e.isWin = !1;
    e.personSpeed = 1200;
    e.policeIndex = 0;
    e.goldIndex = 0;
    e.policeSkinName = "a";
    e.goldSkinName = "a";
    e.policeIndexSeat = 0;
    e.goldIndexSeat = 0;
    e.isReviveAmount = 0;
    e.lastExtraIndexArr = [];
    e.randomColorArr = [];
    e.randomColorNum = [];
    e.pathArr = [];
    e.carIndex = [];
    e.carNodeArr = [];
    e.carAllAmount = 0;
    e.weightLimitIndex = 0;
    e.localData = {};
    e.reviveArr = [];
    e.firstSortIndexArr = [];
    e.firstSortAmountArr = [];
    e.isSorting = !1;
    e.isSortAnim = !1;
    e.isRemove = !1;
    e.tipRemove = null;
    e.removePropUsing = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.changeBg = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i;
      var r;
      var n;
      var a;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            if (this.isWaterMode) {
              return [2];
            } else {
              if (this.isHighSpeedRailway) {
                return [2];
              } else {
                return (t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL) || 1) > 50 && (t %= 50), this.dict.bg.width = 1e4, t >= 41 ? (this.dict.bg.color = new cc.Color(254, 205, 136), [4, $assetManager["default"].getRes("gameBundle", "prefab/map/SandBg", cc.Prefab)]) : [3, 3];
              }
            }

          case 1:
            n = s.sent();
            this.dict.bg.addChild(cc.instantiate(n));
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/map/SandDoor", cc.Prefab)];

          case 2:
            a = s.sent();
            this.dict.door.getComponent(cc.Sprite).enabled = !1;
            this.dict.door.children[0].active = !1;
            this.dict.door.children[1].active = !1;
            this.dict.door.addChild(cc.instantiate(a));
            return [3, 12];

          case 3:
            if (t >= 31) {
              return this.dict.bg.color = new cc.Color(254, 205, 136), [4, $assetManager["default"].getRes("gameBundle", "prefab/map/SnowBg", cc.Prefab)];
            } else {
              return [3, 6];
            }

          case 4:
            e = s.sent();
            this.dict.bg.addChild(cc.instantiate(e));
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/map/SnowDoor", cc.Prefab)];

          case 5:
            o = s.sent();
            this.dict.door.getComponent(cc.Sprite).enabled = !1;
            this.dict.door.children[0].active = !1;
            this.dict.door.children[1].active = !1;
            this.dict.door.addChild(cc.instantiate(o));
            return [3, 12];

          case 6:
            if (t >= 21) {
              return this.dict.bg.color = new cc.Color(227, 196, 163), [4, $assetManager["default"].getRes("gameBundle", "prefab/map/DoorYellow", cc.Prefab)];
            } else {
              return [3, 9];
            }

          case 7:
            i = s.sent();
            this.dict.bg.addChild(cc.instantiate(i));
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/map/HouseYellow", cc.Prefab)];

          case 8:
            r = s.sent();
            this.dict.door.addChild(cc.instantiate(r));
            this.dict.door.getComponent(cc.Sprite).enabled = !1;
            this.dict.door.children[0].active = !1;
            this.dict.door.children[1].active = !1;
            console.log("黄色背景");
            return [3, 12];

          case 9:
            if (t >= 11) {
              return this.dict.bg.color = new cc.Color(160, 193, 122), [4, $assetManager["default"].getRes("gameBundle", "prefab/map/GrassBg", cc.Prefab)];
            } else {
              return [3, 12];
            }

          case 10:
            n = s.sent();
            this.dict.bg.addChild(cc.instantiate(n));
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/map/GrassDoor", cc.Prefab)];

          case 11:
            a = s.sent();
            this.dict.door.getComponent(cc.Sprite).enabled = !1;
            this.dict.door.children[0].active = !1;
            this.dict.door.children[1].active = !1;
            this.dict.door.addChild(cc.instantiate(a));
            return [3, 12];

          case 12:
            return [2];
        }
      });
    });
  };

  e.prototype.updateCarParking = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i;
      var r;
      var n;
      var a;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            return [4, $assetManager["default"].getRes("gameBundle", "texture/vip", cc.Texture2D)];

          case 1:
            for (t = s.sent(), n = 0; n < this.dict.parkingRoot.children.length; n++) {
              (a = this.dict.parkingRoot.children[n]).opacity = 255;
              a.getChildByName("videoLock") && (a.getChildByName("videoLock").getChildByName("text").getComponent(cc.Label).fontSize = 35, a.getChildByName("videoLock").getChildByName("text").getComponent(cc.Label).lineHeight = 40, a.getChildByName("videoLock").getChildByName("text").width = 90, a.getChildByName("videoLock").opacity = 200);
            }

            return [4, $assetManager["default"].getRes("gameBundle", "prefab/item/unlock_pack", cc.Prefab)];

          case 2:
            e = s.sent();
            (o = cc.instantiate(e)).active = !1;
            this.dict.parkingRoot.parent.addChild(o);
            i = $localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0;
            return $localStorageManager["default"].get($localStorageConst["default"].UnlockParking) ? (o.active = !0, o.children[1].getComponent(cc.Label).string = "" + $localStorageManager["default"].get($localStorageConst["default"].UnlockParking), [4, $assetManager["default"].getRes("gameBundle", "texture/lock", cc.Texture2D)]) : [3, 4];

          case 3:
            for (r = s.sent(), n = 0; n < this.dict.parkingRoot.children.length; n++) {
              (a = this.dict.parkingRoot.children[n]).opacity = 255;
              a.getChildByName("videoLock") && (a.getChildByName("videoLock").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r));
            }

            return [3, 6];

          case 4:
            if (i) {
              return [4, $assetManager["default"].getRes("gameBundle", "texture/lock", cc.Texture2D)];
            } else {
              return [3, 6];
            }

          case 5:
            for (r = s.sent(), n = 0; n < this.dict.parkingRoot.children.length; n++) {
              (a = this.dict.parkingRoot.children[n]).opacity = 255;
              a.getChildByName("videoLock") && (a.getChildByName("videoLock").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r));
            }

            s.label = 6;

          case 6:
            this.dict.parkingRoot.children[0].getChildByName("empty").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t);
            o.on(cc.Node.EventType.TOUCH_START, function () {
              $toastManager["default"].show($languageManager["default"].formatStr("可以解锁一个新的停车位"));
            }, this);
            return [2];
        }
      });
    });
  };

  e.prototype.updateUnlockParking = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i;
      var r;
      return __generator(this, function (n) {
        switch (n.label) {
          case 0:
            t = $localStorageManager["default"].get($localStorageConst["default"].UnlockParking) || 0;
            e = $localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0;
            return t ? (this.dict.parkingRoot.parent.getChildByName("unlock_pack").active = !0, this.dict.parkingRoot.parent.getChildByName("unlock_pack").children[1].getComponent(cc.Label).string = "" + t, [4, $assetManager["default"].getRes("gameBundle", "texture/lock", cc.Texture2D)]) : [3, 2];

          case 1:
            for (o = n.sent(), i = 0; i < this.dict.parkingRoot.children.length; i++) {
              (r = this.dict.parkingRoot.children[i]).opacity = 255;
              r.getChildByName("videoLock") && (r.getChildByName("videoLock").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o));
            }

            return [3, 6];

          case 2:
            if (e) {
              return this.dict.parkingRoot.parent.getChildByName("unlock_pack").active = !1, [4, $assetManager["default"].getRes("gameBundle", "texture/lock", cc.Texture2D)];
            } else {
              return [3, 4];
            }

          case 3:
            for (o = n.sent(), i = 0; i < this.dict.parkingRoot.children.length; i++) {
              (r = this.dict.parkingRoot.children[i]).opacity = 255;
              r.getChildByName("videoLock") && (r.getChildByName("videoLock").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o));
            }

            return [3, 6];

          case 4:
            this.dict.parkingRoot.parent.getChildByName("unlock_pack").active = !1;
            return [4, $assetManager["default"].getRes("gameBundle", "texture/video", cc.Texture2D)];

          case 5:
            for (o = n.sent(), i = 0; i < this.dict.parkingRoot.children.length; i++) {
              (r = this.dict.parkingRoot.children[i]).opacity = 255;
              r.getChildByName("videoLock") && (r.getChildByName("videoLock").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o));
            }

            n.label = 6;

          case 6:
            return [2];
        }
      });
    });
  };

  e.prototype.onLoad = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            for (this.changeNodeName(), this.createSpine(), t.prototype.onLoad.call(this), ($platformManager.Platform.getConfig().flag.includes("ios") || this.isHighSpeedRailway) && (this.dict.door.getComponent(cc.Sprite).enabled = !1, this.dict.door.getChildByName("bg").active = !1, this.dict.doorOutside.active = !1, this.dict.door2.getComponent(cc.Sprite).enabled = !1, this.dict.door2.active = !1, this.dict.board && (this.dict.board.active = !1)), cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5 && this.dict.carRoot.getComponent($level_249667_oblique["default"]) && this.dict.carRootBg2 && (this.dict.carRootBg2.children[0].y -= 50), e = 0; e < this.dict.personPosRoot.children.length; e++) {
              this.dict.personPosRoot.children[e].y += 14;
            }

            this.dict.personRoot.setSiblingIndex(100);
            this.dict.door.setSiblingIndex(101);

            if (window.tt) {
              this.isDebug = !1;
            }

            if ($platformManager.Platform.getConfig().flag.includes("gg")) {
              this.isDebug = !1;
            }

            if ($platformManager.Platform.getConfig().flag.includes("ios")) {
              this.isDebug = !1;
            }

            this.roadPoint0 = this.dict.road.convertToWorldSpaceAR(cc.v2(-2250, 0));
            this.roadPoint1 = this.dict.road.convertToWorldSpaceAR(cc.v2(2250, 0));
            this.dict.personAmount.getComponent(cc.Label).fontSize = 32;
            this.dict.personAmount.getComponent(cc.Label).enableBold = !0;
            this.dict.personAmount.parent.children[0].getComponent(cc.Label).fontSize = 17;
            this.dict.personAmount.parent.children[0].getComponent(cc.Label).enableBold = !0;
            this.dict.personAmount.parent.y -= 15;
            this.dict.personAmount.parent.zIndex = 1e3;
            this.changeBg();
            this.updateCarParking();
            this.carWeight = new Array(this.colorTypeAmount).fill(0);
            this.extraWeight = new Array(this.colorTypeAmount).fill(0);
            this.lastExtraIndexArr = new Array(this.colorTypeAmount).fill(0);
            this.parkingWeight = new Array(this.colorTypeAmount).fill(0);
            this.sortWeight = new Array(this.colorTypeAmount).fill(0);
            this.allWeight = new Array(this.colorTypeAmount).fill(0);
            this.colorPersonIndexArr = new Array(this.colorTypeAmount).fill(0);
            this.currentPersonColorAmount = new Array(this.colorTypeAmount).fill(0);
            this.colorPersonArr = new Array(this.colorTypeAmount).fill(0);
            this.levelDataJSON = JSON.parse(JSON.stringify($level_249667_busConfig.levelData[this.levelID]));
            this.setCollisionManager(!0, !1);
            this.carRoot = this.dict.carRoot;

            if (this.isHighSpeedRailway) {
              this.dict.fence.x -= 45;
            } else {
              this.dict.fence.x -= 17;
            }

            if (this.dict.btns) {
              this.dict.btns.active = !1;
            }

            this.dict.hitSpine.scale = 0.4;
            return [4, this.updatePersonPrefab()];

          case 1:
            o.sent();

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

            return [4, this.initTT()];

          case 2:
            o.sent();
            return [4, this.initIOS()];

          case 3:
            o.sent();
            return [4, this.initShipMode()];

          case 4:
            o.sent();
            return [2];
        }
      });
    });
  };

  e.prototype.initIOS = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      var i;
      var r;
      var n;
      var a;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            if ($platformManager.Platform.getConfig().flag.includes("ios") || this.isHighSpeedRailway) {
              return this.dict.personAmount.parent.active = !1, [4, $assetManager["default"].getRes("iosBundle", "prefab/Mark", cc.Prefab)];
            } else {
              return [3, 4];
            }

          case 1:
            t = s.sent();
            e = cc.instantiate(t);
            this.dict.element.addChild(e);
            this.dict.personAmount = e.getChildByName("personAmount");
            this.dict.personAmount.getComponent(cc.Label).string = "" + this.allPersonAmount;
            return [4, $assetManager["default"].getRes("iosBundle", "prefab/Roof", cc.Prefab)];

          case 2:
            o = s.sent();
            i = cc.instantiate(o);
            this.dict.door.addChild(i);
            this.dict.highSpeedRail2Root = i.getChildByName("highSpeedRail2Root");
            return [4, $assetManager["default"].getRes("iosBundle", "prefab/personPosRoot", cc.Prefab)];

          case 3:
            for (r = s.sent(), n = cc.instantiate(r), a = 0; a < this.dict.personPosRoot.children.length; a++) {
              this.dict.personPosRoot.children[a].position = n.children[a].position;
            }

            s.label = 4;

          case 4:
            return [2];
        }
      });
    });
  };

  e.prototype.initShipMode = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            if (this.isWaterMode) {
              return this.dict.personAmount.parent.active = !1, [4, $assetManager["default"].getRes("iosBundle", "prefab/Mark", cc.Prefab)];
            } else {
              return [3, 2];
            }

          case 1:
            t = o.sent();
            e = cc.instantiate(t);
            this.dict.element.addChild(e);
            this.dict.personAmount = e.getChildByName("personAmount");
            this.dict.personAmount.getComponent(cc.Label).string = "" + this.allPersonAmount;
            o.label = 2;

          case 2:
            return [2];
        }
      });
    });
  };

  e.prototype.updatePersonPrefab = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var o;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            if ("f27597" != this.folder) {
              return [3, 4];
            } else {
              return this.dict.carPrefab.getChildByName("061").destroy(), this.dict.carPrefab.getChildByName("062").destroy(), this.dict.carPrefab.getChildByName("063").destroy(), [4, $assetManager["default"].getRes("ttBundle", "prefab/blockMan/061", cc.Prefab)];
            }

          case 1:
            t = i.sent();
            return [4, $assetManager["default"].getRes("ttBundle", "prefab/blockMan/062", cc.Prefab)];

          case 2:
            e = i.sent();
            return [4, $assetManager["default"].getRes("ttBundle", "prefab/blockMan/063", cc.Prefab)];

          case 3:
            o = i.sent();
            this.dict.carPrefab.addChild(cc.instantiate(t));
            this.dict.carPrefab.addChild(cc.instantiate(e));
            this.dict.carPrefab.addChild(cc.instantiate(o));
            return [3, 5];

          case 4:
            this.isWaterMode;
            this.dict.personPrefab.scale = 0.9;
            i.label = 5;

          case 5:
            this.dict.personPrefab.getComponent(cc.Sprite).enabled = !1;
            return [4, this.addCoin()];

          case 6:
            i.sent();
            return [2];
        }
      });
    });
  };

  e.prototype.updateTransportAmount = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            if (this.dict.transportAmount) {
              if ($platformManager.Platform.getConfig().flag.includes("ios") || this.isHighSpeedRailway) {
                return [4, $assetManager["default"].getRes("iosBundle", "prefab/TransportAmountRoot", cc.Prefab)];
              } else {
                return [3, 2];
              }
            } else {
              return [3, 3];
            }

          case 1:
            t = o.sent();
            e = cc.instantiate(t);
            this.dict.right.addChild(e);
            this.dict.transportAmount = e.getChildByName("transportAmount");
            o.label = 2;

          case 2:
            this.dict.transportAmount.getComponent(cc.Label).string = "" + this.transportCarArr.length;
            o.label = 3;

          case 3:
            return [2];
        }
      });
    });
  };

  e.prototype.addTurntableCar = function () {
    if (this.dict.turntableRoot) {
      this.turntableCarArr = [];

      for (var t = 0; t < this.dict.turntableRoot.children.length; t++) {
        var e = this.dict.turntableRoot.children[t];
        e.getComponent($level_249667_turntable["default"]).init(this);
        this.turntableCarArr = this.turntableCarArr.concat(e.getComponent($level_249667_turntable["default"]).getCars());
      }
    }
  };

  e.prototype.updateTurntableCar = function () {
    this.turntableCarArr = [];

    for (var t = 0; t < this.dict.turntableRoot.children.length; t++) {
      var e = this.dict.turntableRoot.children[t];
      this.turntableCarArr = this.turntableCarArr.concat(e.getComponent($level_249667_turntable["default"]).getCars());
    }
  };

  e.prototype.addTransportCar = function () {
    var t = this.levelDataJSON.transport;

    if (t) {
      var e = this.dict.transportPos.parent.convertToWorldSpaceAR(this.dict.transportPos.position);
      var o = this.dict.carRoot.convertToNodeSpaceAR(e);

      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        var n = cc.instantiate(this.dict.carPrefab.getChildByName("02" + r));
        this.dict.carRoot.addChild(n);
        n.getComponent($level_249667_carItem["default"]).isTransportCar = !0;
        this.transportCarArr.push(n);
        n.x = 397 + 70 * i;

        switch (r) {
          case 1:
            n.y = o.y;
            break;

          case 2:
            n.y = o.y + 10;
            break;

          case 3:
            n.y = o.y + 27;
        }
      }

      this.lastCar = this.transportCarArr[this.transportCarArr.length - 1];
      this.transportAmount = this.transportCarArr.length;
      this.updateTransportAmount();
    }
  };

  e.prototype.timerTransportMove = function (t) {
    if (void 0 === t) {
      t = 1.2;
    }

    this.unschedule(this.setTransportCarMove);
    this.scheduleOnce(this.setTransportCarMove, t);
  };

  e.prototype.setTransportCarMove = function () {
    this.isTransportCarMove = !0;
  };

  e.prototype.update = function (t) {
    if (this.isTransportCarMove && this.dict.line) {
      this.dict.line.x -= t * this.transportSpeed;
      this.dict.line2.x -= t * this.transportSpeed;

      if (this.dict.line.x <= -(315 + this.dict.line.width)) {
        this.dict.line.x = this.dict.line2.x + this.dict.line.width;
      }

      if (this.dict.line2.x <= -(315 + this.dict.line.width)) {
        this.dict.line2.x = this.dict.line.x + this.dict.line.width;
      }

      try {
        for (var e = 0; e < this.transportCarArr.length; e++) {
          var o = this.transportCarArr[e];

          if (o) {
            var i = o.x - t * this.transportSpeed;

            if (i <= -350) {
              var r = this.getMaxXTransportCar().x + 70;

              if (r <= 397) {
                i = 397;
              } else {
                i = r;
              }
            }

            o.x = i;
          }
        }
      } catch (n) {}
    }
  };

  e.prototype.getMaxXTransportCar = function () {
    var t = this.transportCarArr[0];

    for (var e = 0; e < this.transportCarArr.length; e++) {
      var o = this.transportCarArr[e];

      if (o.x > t.x) {
        t = o;
      }
    }

    return t;
  };

  e.prototype.addCoin = function () {
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
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            if ($platformManager.Platform.getConfig().hasCoin) {
              return console.log("addCoin"), [4, $assetManager["default"].getRes("gameBundle", "prefab/coin/coinRoot0", cc.Prefab)];
            } else {
              return [2];
            }

          case 1:
            t = s.sent();
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/coin/coinRoot1", cc.Prefab)];

          case 2:
            e = s.sent();
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/coin/coinRoot2", cc.Prefab)];

          case 3:
            o = s.sent();
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/coin/coinRoot11", cc.Prefab)];

          case 4:
            i = s.sent();
            return [4, $assetManager["default"].getRes("gameBundle", "prefab/coin/coinRoot13", cc.Prefab)];

          case 5:
            r = s.sent();
            (n = cc.instantiate(t)).name = "coinRoot";
            (a = cc.instantiate(e)).name = "coinRoot";
            (c = cc.instantiate(o)).name = "coinRoot";
            (l = cc.instantiate(i)).name = "coinRoot";
            (h = cc.instantiate(r)).name = "coinRoot";
            this.dict.carPrefab.getChildByName("061").addChild(n);
            this.dict.carPrefab.getChildByName("062").addChild(a);
            this.dict.carPrefab.getChildByName("063").addChild(c);

            if (this.dict.carPrefab.getChildByName("1161")) {
              this.dict.carPrefab.getChildByName("1161").addChild(l);
            }

            if (this.dict.carPrefab.getChildByName("1363")) {
              this.dict.carPrefab.getChildByName("1363").addChild(h);
            }

            return [2];
        }
      });
    });
  };

  e.prototype.initTT = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      return __generator(this, function (e) {
        switch (e.label) {
          case 0:
            if (this.isWaterMode) {
              return [3, 2];
            } else {
              return [4, $assetManager["default"].getRes("gameBundle", "prefab/item/Line", cc.Prefab)];
            }

          case 1:
            t = e.sent();
            this.dict.road.addChild(cc.instantiate(t));
            e.label = 2;

          case 2:
            this.dict.fence.y += 5;
            return [2];
        }
      });
    });
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

  e.prototype.changeNodeName = function () {
    var t = cc.find("game/element/carRoot", this.node);

    for (var e = 0; e < t.children.length; e++) {
      t.children[e].children[1].getComponent(cc.Sprite).enabled = !1;
    }
  };

  e.prototype.createSpine = function () {
    (function (t, e) {
      if (!t.getChildByName(e)) {
        var o = new cc.Node(e);
        t.addChild(o);
        o.position = cc.v2(0, 1e5);
        o.addComponent(sp.Skeleton);
        o.getComponent(sp.Skeleton).premultipliedAlpha = !1;
      }
    })(cc.find("game", this.node), "f28749.jiesuo=jiesuo");
  };

  e.prototype.changeBulldozer = function (t) {
    var e = cc.instantiate(this.dict.carPrefab.getChildByName("bulldozer"));
    this.dict.bulldozerRoot.addChild(e);
    e.position = t.position;
    var o = t.getComponent($level_249667_bulldozer["default"]).bulldozerSpeed;
    var i = e.convertToWorldSpaceAR(cc.v2(0, 1500));
    var r = e.parent.convertToNodeSpaceAR(i);
    t.destroy();
    cc.tween(e).to(1500 / o, {
      position: r
    }).call(function () {
      e.destroy();
    }).start();
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
      var d;
      var u;
      var g;
      var m = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            t.getComponent($level_249667_carItem["default"]).isReadyDestroy = !0;
            r = t.getComponent($level_249667_carItem["default"]).colorImgName;
            n = t.getComponent($level_249667_carItem["default"]).lenImgName;

            if (i) {
              t.getComponent($level_249667_carItem["default"]).isFireEngine && (i = "1213");
              console.log("changeCar-carName", i);
              (a = cc.instantiate(this.dict.carPrefab.getChildByName(i))).parking = t.parking;
              a.getComponent($level_249667_carItem["default"]).isRichCar = t.getComponent($level_249667_carItem["default"]).isRichCar;
            } else {
              if (t.getComponent($level_249667_carItem["default"]).isFireEngine) {
                a = cc.instantiate(this.dict.carPrefab.getChildByName("1223"));
              } else {
                if (t.getComponent($level_249667_carItem["default"]).isPoliceCar) {
                  a = cc.instantiate(this.dict.carPrefab.getChildByName("102" + n));
                } else {
                  if (t.getComponent($level_249667_carItem["default"]).isRichCar) {
                    n = 1, a = cc.instantiate(this.dict.carPrefab.getChildByName("112" + n));
                  } else {
                    a = t.getComponent($level_249667_carItem["default"]).isTramcar ? 4 != e && 5 != e || 2 != o ? 4 != e && 5 != e || 1 != o ? cc.instantiate(this.dict.carPrefab.getChildByName("132" + n)) : cc.instantiate(this.dict.carPrefab.getChildByName("13" + e + n + "-1")) : cc.instantiate(this.dict.carPrefab.getChildByName("13" + e + n + "-0")) : cc.instantiate(this.dict.carPrefab.getChildByName("02" + n));
                  }
                }
              }
            }

            a.getComponent($level_249667_carItem["default"]).isTramcar = t.getComponent($level_249667_carItem["default"]).isTramcar;
            a.getComponent($level_249667_carItem["default"]).tramcarPosIndex = t.getComponent($level_249667_carItem["default"]).tramcarPosIndex;

            if (a.getComponent($level_249667_carItem["default"]).isTramcar) {
              a.getComponent($level_249667_carItem["default"]).otherCarNode = this.getOtherCarByDistance(a);
            }

            if (t.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.InRoadRight && t.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.InRoadLeft) {//
            } else {
              this.updateCarWeight();
            }

            a.getComponent($level_249667_carItem["default"]).carState = t.getComponent($level_249667_carItem["default"]).carState;
            a.active = !1;
            this.carRoot.addChild(a);
            a.getComponent($level_249667_carItem["default"]).mgr = this;
            a.getComponent($level_249667_carItem["default"]).colorImgName = r;
            a.getComponent($level_249667_carItem["default"]).lenImgName = n;
            a.getComponent($level_249667_carItem["default"]).dirImgName = e;
            a.getComponent($level_249667_carItem["default"]).carColor = t.getComponent($level_249667_carItem["default"]).carColor;
            l = 2;

            if (a.getComponent($level_249667_carItem["default"]).isTramcar) {
              l = 1;
            }

            if (4 == e || 5 == e) {
              a.position = cc.v2(t.x, t.y);
              h = a.convertToWorldSpaceAR(cc.v2(0, t.height / l));
              c = a.parent.convertToNodeSpaceAR(h);
              a.position = cc.v2(c.x, c.y);
            } else {
              if (0 == o) {
                a.position = cc.v2(t.x, t.y + t.height / l);
              } else {
                if (a.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.OnBottomLeft) {
                  a.position = cc.v2(t.x - t.width / l, t.y);
                } else {
                  if (a.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.OnBottomRight) {
                    a.position = cc.v2(t.x + t.width / l, t.y);
                  } else {
                    1 == o ? (h = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position), c = a.parent.convertToNodeSpaceAR(h), a.position = cc.v2(t.x + t.width / l, c.y)) : (h = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position), c = a.parent.convertToNodeSpaceAR(h), a.position = cc.v2(t.x - t.width / l, c.y));
                  }
                }
              }
            }

            if (a.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.GoingParking) {
              p = a.parking.convertToWorldSpaceAR(cc.v2(0, -155));
              c = a.parent.convertToNodeSpaceAR(p);
              a.position = cc.v2(c.x, c.y);
            }

            u = "" + r + e + n;
            d = "texture/" + this.folder + "/" + this.folder + "_" + u;
            a.stopAllActions();

            g = function g(e) {
              if (t.getChildByName("tailGasSpine")) {
                m.poolMgr.put(t.getChildByName("tailGasSpine"), "tailGasSpine");
              }

              if (t.getChildByName("tailGas")) {
                t.getChildByName("tailGas").destroy();
              }

              if (t.getComponent($level_249667_carItem["default"]).isTurntableCar) {
                var o = t.parent.getComponent($level_249667_turntable["default"]).cars.indexOf(t);
                t.parent.getComponent($level_249667_turntable["default"]).cars.splice(o, 1);
                m.updateTurntableCar();
              }

              var i = t.getComponent($level_249667_carItem["default"]).nextCar;

              try {
                if (i && i.getComponent($level_249667_carItem["default"])) {
                  i.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.Normal;
                }
              } catch (S) {}

              if (t.getChildByName("key")) {
                var r = cc.instantiate(t.getChildByName("key"));
                var n = t.getChildByName("key").getComponent($level_249667_key["default"]).lock;
                var s = t.convertToWorldSpaceAR(r.position);
                var c = m.node.convertToNodeSpaceAR(s);
                var l = n.parent.convertToWorldSpaceAR(n.position);
                var h = m.node.convertToNodeSpaceAR(l);
                r.position = c;
                m.node.addChild(r);
                var p = s.sub(l).mag();
                var d = r.scale;
                cc.tween(r).to(0.3, {
                  scale: 1.5 * d
                }).to(p / 800, {
                  position: h
                }).call(function () {
                  r.opacity = 0;
                  var t = n.scale;
                  cc.tween(n).to(0.3, {
                    scale: 1.5 * t
                  }).call(function () {
                    n.runAction(m.shackAction(0.1, 2));
                  }).delay(0.5).call(function () {
                    r.destroy();
                    n.destroy();
                  }).start();
                }).start();
              }

              t.destroy();

              if (e) {
                a.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
              }

              a.active = !0;
              var u = a.convertToWorldSpaceAR(cc.v2(0, 2250));
              var g = a.parent.convertToNodeSpaceAR(u);

              if (a.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.InRoadRight || a.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.InRoadLeft) {
                s = a.parent.convertToWorldSpaceAR(a.position);
                var f;
                var v = void 0;

                if (a.getComponent($level_249667_carItem["default"]).isFireEngine) {
                  var y = a.parking.getChildByName("fireCarPos").position;
                  v = a.parking.convertToWorldSpaceAR(y);
                } else {
                  v = a.parking.convertToWorldSpaceAR(cc.v2(0, -229));
                }

                f = a.parent.convertToNodeSpaceAR(v);
                p = Math.abs(v.x - s.x);
                m.addTailGasSpine(a);
                cc.tween(a).to(p / a.getComponent($level_249667_carItem["default"]).speed, {
                  position: f
                }).call(function () {
                  if (a.getComponent($level_249667_carItem["default"]).isFireEngine) {
                    a.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.WaterSpray;
                    a.getChildByName("penshui").active = !0;
                    cc.tween(a.parking.getChildByName("fireSpine")).to(1, {
                      opacity: 0
                    }).start();
                    cc.tween(a).delay(1).call(function () {
                      m.fireEngineLeave(a);
                    }).start();
                  } else {
                    a.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.GoingParking;
                    console.log("isRichCar", a.getComponent($level_249667_carItem["default"]).isRichCar);

                    if (a.getComponent($level_249667_carItem["default"]).isRichCar) {
                      m.changeCar(a, 6, 0, "116" + a.getComponent($level_249667_carItem["default"]).lenImgName);
                    } else {
                      if (a.getComponent($level_249667_carItem["default"]).isTramcar) {
                        m.changeCar(a, 6, 0, "136" + a.getComponent($level_249667_carItem["default"]).lenImgName);
                      } else {
                        m.changeCar(a, 6, 0, "06" + a.getComponent($level_249667_carItem["default"]).lenImgName);
                      }
                    }
                  }
                }).start();
              } else if (a.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.GoingParking) {
                s = m.getWPosByNode(a);
                v = void 0;

                if (a.parking) {
                  if (1 == a.getComponent($level_249667_carItem["default"]).lenImgName) {
                    v = a.parking.convertToWorldSpaceAR(cc.v2(0, -20));
                  } else {
                    if (2 == a.getComponent($level_249667_carItem["default"]).lenImgName) {
                      v = a.parking.convertToWorldSpaceAR(cc.v2(0, -3)), a.getChildByName("car").angle = -27.592;
                    } else {
                      v = a.parking.convertToWorldSpaceAR(cc.v2(3, 3)), a.getChildByName("car").angle = -27.592;
                    }
                  }

                  var C = a.parent.convertToNodeSpaceAR(v);
                  a.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.Parking;
                  a.stopAllActions();
                  p = C.sub(a.position).mag();
                  cc.tween(a).to(p / a.getComponent($level_249667_carItem["default"]).speed, {
                    position: C
                  }).call(function () {
                    a.parking.car = a;
                    m.putTailGas(a);
                    m.checkPerson(!0);
                  }).start();
                }
              } else if (a.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.GoingRoad) {
                s = m.dict.road.parent.convertToWorldSpaceAR(m.dict.road.position);

                var _ = a.parent.convertToWorldSpaceAR(a.position);

                p = Math.abs(_.y - s.y);
                m.addTailGasSpine(a);
                cc.tween(a).by(p / a.getComponent($level_249667_carItem["default"]).speed, {
                  y: p
                }).call(function () {
                  m.collision(a);
                }).start();
              } else {
                m.addTailGasSpine(a);
                cc.tween(a).to(2250 / a.getComponent($level_249667_carItem["default"]).speed, {
                  position: g
                }).start();
              }
            };

            if (t.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.GoingParking) {
              this.preLoadMannedImg(a, r, e, n);
            }

            return t.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.OutParking ? [3, 2] : [4, this.addMannedImg(a, r, e, n)];

          case 1:
            s.sent();
            g(null);
            return [3, 3];

          case 2:
            cc.resources.load(d, function (t, e) {
              g(e);
            });
            s.label = 3;

          case 3:
            return [2];
        }
      });
    });
  };

  e.prototype.preLoadMannedImg = function (t, e, o, i) {
    var r;
    var n = "" + e + 7 + i;
    r = "texture/" + this.folder + "/" + this.folder + "_" + n;
    this.load(r);
  };

  e.prototype.addMannedImg = function (t, e, o, i) {
    return __awaiter(this, void 0, void 0, function () {
      var o;
      var r;
      var n;
      var a;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            o = new cc.Node();
            n = "" + e + 7 + i;
            r = "texture/" + this.folder + "/" + this.folder + "_" + n;
            return [4, this.load(r)];

          case 1:
            a = s.sent();
            o.addComponent(cc.Sprite).spriteFrame = a;
            o.y = -38.458;
            t.getChildByName("car").addChild(o);
            t.getChildByName("dir").active = !1;
            return [2];
        }
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

  e.prototype.fireEngineLeave = function (t) {
    t.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.WaterSprayLeave;
    var e = t.convertToWorldSpaceAR(cc.v2(0, 2250));
    var o = t.parent.convertToNodeSpaceAR(e);
    this.addTailGasSpine(t);
    cc.tween(t).to(2250 / t.getComponent($level_249667_carItem["default"]).speed, {
      position: o
    }).start();
    t.parking.getChildByName("fireSpine").destroy();
    t.parking.car = null;
    t.parking.isEmpty = !0;
    var i = this.dict.parkingRoot.children.indexOf(t.parking);
    console.log("index", i, this.parkingNodes.length);
    this.parkingNodes.splice(i - 1, 0, t.parking);
    console.log("index2", i, this.parkingNodes.length);
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
    if (t.getComponent($level_249667_carItem["default"]).isFireEngine) {
      i = t;
      r = void 0;

      for (n = 0; n < this.dict.parkingRoot.children.length; n++) {
        var e = this.dict.parkingRoot.children[n];

        if (e.getChildByName("fireSpine") && e.getChildByName("fireSpine").active) {
          e.isEmpty = !1;
          i.parking = e;
          r = e;
          break;
        }
      }

      if (r) {
        s = i.parent.convertToWorldSpaceAR(i.position);
        var o = r.getChildByName("fireCarPos").position;
        c = r.convertToWorldSpaceAR(o);

        if (s.x >= c.x) {
          i.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.InRoadLeft;
          this.changeCar(i, 1, 2, "01" + i.getComponent($level_249667_carItem["default"]).lenImgName + "-0");
        } else {
          i.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.InRoadRight;
          this.changeCar(i, 1, 1, "01" + i.getComponent($level_249667_carItem["default"]).lenImgName + "-1");
        }
      }
    } else {
      if (this.dict.carRoot.getComponent($level_249667_carSquare["default"])) {
        this.dict.carRoot.getComponent($level_249667_carSquare["default"]).carMove(t);
      }

      if (this.dict.carRoot.getComponent($level_249667_oblique["default"])) {
        this.dict.carRoot.getComponent($level_249667_oblique["default"]).carMove(t);
      }

      var i = t;
      var r = void 0;

      for (var n = 0; n < this.parkingNodes.length; n++) {
        var a = this.parkingNodes[n];

        if (a.isEmpty) {
          a.isEmpty = !1;
          i.parking = a;
          r = a;
          break;
        }
      }

      if (r) {
        var s = i.parent.convertToWorldSpaceAR(i.position);
        var c = r.convertToWorldSpaceAR(cc.v2(0, -229));

        if (s.x >= c.x) {
          i.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.InRoadLeft;

          if (i.getComponent($level_249667_carItem["default"]).isRichCar) {
            i.getComponent($level_249667_carItem["default"]).lenImgName = 1, this.changeCar(i, 1, 2, "111" + i.getComponent($level_249667_carItem["default"]).lenImgName + "-0");
          } else {
            this.changeCar(i, 1, 2, "01" + i.getComponent($level_249667_carItem["default"]).lenImgName + "-0");
          }
        } else {
          i.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.InRoadRight;

          if (i.getComponent($level_249667_carItem["default"]).isRichCar) {
            i.getComponent($level_249667_carItem["default"]).lenImgName = 1, this.changeCar(i, 1, 1, "111" + i.getComponent($level_249667_carItem["default"]).lenImgName + "-1");
          } else {
            this.changeCar(i, 1, 1, "01" + i.getComponent($level_249667_carItem["default"]).lenImgName + "-1");
          }
        }
      }
    }
  };

  e.prototype.onLevelReady = function () {
    this.dict.personPrefab.children[0].getComponent(sp.Skeleton).setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.PRIVATE_CACHE);
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
      var h;
      var d;
      var g;
      var f;
      var v;
      var y;
      var C;

      var _;

      var S;
      var k;
      var N;
      var P;
      var x;
      var b;
      var R;
      var w;
      var O;
      var M;
      var E = this;
      return __generator(this, function (G) {
        switch (G.label) {
          case 0:
            if (this.dict.carRoot.getComponent($level_249667_carSquare["default"])) {
              this.dict.carRoot.getComponent($level_249667_carSquare["default"]).init(this.levelDataJSON.carSquare, this);
            }

            if (this.dict.carRoot.getComponent($level_249667_oblique["default"])) {
              this.dict.carRoot.getComponent($level_249667_oblique["default"]).init(this.levelDataJSON.centerSquare, this.levelDataJSON.oblique, this);
            }

            if (this.dict.carRoot.getComponent($level_249667_uTransport["default"])) {
              for (b = 0; b < this.dict.carRoot.children.length; b++) {
                (S = this.dict.carRoot.children[b]).getComponent($level_249667_carItem["default"]).isUTransportCar_noIn = !0;
              }

              this.dict.carRoot.getComponent($level_249667_uTransport["default"]).init(this.levelDataJSON.uTransport, this);
            }

            if (this.dict.guide) {
              this.scheduleOnce(function () {
                E.dict.guide.active = !1;
              }, 6);
            }

            if (this.dict.bulldozerRoot) {
              for (b = 0; b < this.dict.bulldozerRoot.children.length; b++) {
                if ("bulldozer" == (S = this.dict.bulldozerRoot.children[b]).name) {
                  S.getComponent($level_249667_bulldozer["default"]).init(this);
                }
              }
            }

            for (this.addTurntableCar(), this.addTransportCar(), k = 0; k < this.dict.parkingRoot.childrenCount; k++) {
              (N = this.dict.parkingRoot.children[k]).active && N.getChildByName("empty").active && !N.getChildByName("fireSpine") && (N.isEmpty = !0, this.parkingNodes.push(N));
              N.getChildByName("videoLock") && (N.getChildByName("videoLock").getChildByName("icon").scale = 0.8);
            }

            if (this.isDebug) {
              t = [];

              for (k = 0; k < this.carRoot.childrenCount; k++) {
                N = this.carRoot.children[k];

                for (b = 0; b < t.length; b++) {
                  S = t[b];
                  N.x == S[0] && N.y == S[1] && console.error("同一个位置复制多辆车", N.name, k);
                }

                t.push([N.x, N.y]);
              }
            }

            for (e = this.getLocal("blackCar") || [], o = this.carRoot.children.concat(this.turntableCarArr), k = 0; k < o.length; k++) {
              N = o[k];
              this.carNodeArr.push(N);
              N.getComponent($level_249667_carItem["default"]).mgr = this;
              N.indexID = "" + k;
              i = void 0;

              if (N.getComponent($level_249667_carItem["default"]).isTransportCar) {
                i = 99;
              } else {
                if (N.getComponent($level_249667_carItem["default"]).isUTransportCar) {
                  i = 99;
                } else {
                  i = this.getPath(N), this.levelDataJSON.blackAmount && !e.length && i >= 2 && i <= 4 && this.between2_4CarArr.push(N);
                }
              }

              N.getComponent($level_249667_carItem["default"]).path = i;
              this.isDebug && ((r = new cc.Node()).name = "path", r.addComponent(cc.Label).string = "" + i, r.color = cc.Color.WHITE, N.addChild(r), r.position = cc.v2(-13.105, -26.21));
              this.allPersonAmount += N.getComponent($level_249667_carItem["default"]).seatTotalAmount;
            }

            if (this.dict.carParkRoot) {
              n = {
                1: 4,
                2: 6,
                3: 10
              };

              for (b = 0; b < this.dict.carParkRoot.children.length; b++) {
                (S = this.dict.carParkRoot.children[b]).getComponent($level_249667_carpark["default"]).initData(this.levelDataJSON.carpark[b], this);
                h = this.levelDataJSON.carpark[b];

                for (d = 0; d < h.length; d++) {
                  g = h[d];
                  this.allPersonAmount += n[g];
                }
              }
            }

            this.allPersonAmount2 = this.allPersonAmount;
            this.dict.personAmount.getComponent(cc.Label).string = "" + this.allPersonAmount;
            cc.game.emit("allPersonAmount", this.allPersonAmount, this.allPersonAmount2);
            this.setCarID();

            if (this.levelDataJSON.blackAmount && !e.length) {
              if (this.levelDataJSON.blackAmount >= this.between2_4CarArr.length) {
                for (b = 0; b < this.between2_4CarArr.length; b++) {
                  (S = this.between2_4CarArr[b]).getComponent($level_249667_carItem["default"]).isBlackCar = !0;
                  e.push(S.getComponent($level_249667_carItem["default"]).carID);
                }
              } else {
                f = this.getRandomDistinctElements(this.between2_4CarArr, this.levelDataJSON.blackAmount);

                for (b = 0; b < f.length; b++) {
                  (S = f[b]).getComponent($level_249667_carItem["default"]).isBlackCar = !0;
                  e.push(S.getComponent($level_249667_carItem["default"]).carID);
                }
              }

              this.setLocal("blackCar", e);
            }

            v = this.getLocal("colorConfig") || [];

            if (-27361 == this.levelID) {
              v = [7, 4, 0, 3];
            }

            y = $bmsManager.BMS.getKey("RandomColor");

            if ((C = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL) || 1) >= y && 0 != y && C > 1) {
              this.sortColor_new = $tools["default"].shuffleArray(JSON.parse(JSON.stringify($level_249667_busConfig.sortColor)));
              console.log("随机打乱颜色", this.sortColor_new);
            } else {
              this.sortColor_new = $level_249667_busConfig.sortColor;
            }

            if (0 == v.length || C >= y && 0 != y && C > 1) {
              _ = this.levelDataJSON.carColor;

              for (b = 0; b < _.length; b++) {
                S = _[b];
                this.randomColorArr.push(this.getArrByLen([0, 1, 2, 3, 4, 5, 6, 7], S[2]));
                this.randomColorNum[b] || (this.randomColorNum[b] = 0);
              }

              for (k = 0; k < this.carNodeArr.length; k++) {
                N = this.carNodeArr[k];
                P = this.getCarColor(k, _);
                N.getComponent($level_249667_carItem["default"]).isPoliceCar && (P = $level_249667_busConfig.CarColor.Police);
                N.getComponent($level_249667_carItem["default"]).isRichCar && (P = $level_249667_busConfig.CarColor.Gold);
                v.push(P);
                this.setCarColorImg(N, P);
                null == (x = this.levelDataJSON.carWeight[N.getComponent($level_249667_carItem["default"]).path - 1]) && (x = 0);

                if (P == $level_249667_busConfig.CarColor.Gold) {
                  this.carWeight[P] += x * N.getComponent($level_249667_carItem["default"]).emptySeatAmount * 2;
                } else {
                  this.carWeight[P] += x * N.getComponent($level_249667_carItem["default"]).emptySeatAmount;
                }
              }

              this.setLocal("colorConfig", v);
            } else {
              for (k = 0; k < this.carNodeArr.length; k++) {
                N = this.carNodeArr[k];
                P = v[k];
                e.includes(N.getComponent($level_249667_carItem["default"]).carID) && (N.getComponent($level_249667_carItem["default"]).isBlackCar = !0);
                N.getComponent($level_249667_carItem["default"]).isPoliceCar && (P = $level_249667_busConfig.CarColor.Police);
                N.getComponent($level_249667_carItem["default"]).isRichCar && (P = $level_249667_busConfig.CarColor.Gold);
                this.setCarColorImg(N, P);
                null == (x = this.levelDataJSON.carWeight[N.getComponent($level_249667_carItem["default"]).path - 1]) && (x = 0);

                if (P == $level_249667_busConfig.CarColor.Gold) {
                  this.carWeight[P] += x * N.getComponent($level_249667_carItem["default"]).emptySeatAmount * 2;
                } else {
                  this.carWeight[P] += x * N.getComponent($level_249667_carItem["default"]).emptySeatAmount;
                }
              }
            }

            for (console.log("车辆权重", this.carWeight), console.log("颜色", $level_249667_busConfig.colorDes), console.log("人数", this.colorPersonArr), b = 0; b < $level_249667_busConfig.colorDes.length; b++) {
              this.getAmountByColor(b);
            }

            console.log("this.colorPersonAmountArr", this.colorPersonAmountArr);
            console.log("this.colorPersonAmountArrIndex", this.colorPersonAmountArrIndex);

            if (-27361 == this.levelID) {
              this.colorPersonAmountArr = [[4, 4, 2], [], [], [3, 3], [1, 3], [], [], [2, 4, 4]];
              this.firstSortIndexArr = [0, 7, 3, 4, 0, 7, 3, 4, 0, 7];
            }

            return "f27597" != this.folder ? [3, 2] : [4, $assetManager["default"].getRes("ttBundle", "prefab/blockMan/Person", cc.Prefab)];

          case 1:
            R = G.sent();
            this.dict.personPrefab = cc.instantiate(R);
            this.dict.personPrefab.scale = 0.7;
            G.label = 2;

          case 2:
            if ($platformManager.Platform.getConfig().flag.includes("ios") || this.isHighSpeedRailway) {
              return [4, $assetManager["default"].getRes("iosBundle", "prefab/PavementRoot", cc.Prefab)];
            } else {
              return [3, 4];
            }

          case 3:
            w = G.sent();
            O = cc.instantiate(w);
            this.dict.bg.addChild(O);
            this.dict.highSpeedRail = O.getChildByName("highSpeedRail");
            this.dict.highSpeedRail.x = -850;
            this.dict.leftDoor = O.getChildByName("highSpeedRail").getChildByName("leftDoor");
            this.dict.rightDoor = O.getChildByName("highSpeedRail").getChildByName("rightDoor");
            this.dict.door2.parent.getChildByName("bg").active = !1;
            this.dict.door2.getComponent(cc.Sprite).enabled = !1;
            M = Math.abs(-837);
            cc.tween(this.dict.highSpeedRail).to(M / this.highSpeedRailSpeed, {
              x: -13
            }).call(function () {
              E.dict.highSpeedRail2Root.active = !0;
              cc.tween(E.dict.leftDoor).by(0.3, {
                x: -34
              }).start();
              cc.tween(E.dict.rightDoor).by(0.3, {
                x: 34
              }).call(function () {
                E.createPerson();
                E.personMove();
                E.onTouch();
                E.scheduleOnce(function () {
                  E.isCanStartClick = !0;
                }, 1);
              }).start();
            }).start();
            return [3, 5];

          case 4:
            this.createPerson();
            this.personMove();
            this.onTouch();
            this.isCanStartClick = !0;
            G.label = 5;

          case 5:
            this.isTransportCarMove = !0;
            this.scheduleOnce(function () {
              E.face();
              E.face2();
            }, 2);
            this.schedule(function () {
              return __awaiter(E, void 0, void 0, function () {
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
                          cc.game.emit("func_revive");
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
            this.initWaterModeEffect();
            return [2];
        }
      });
    });
  };

  e.prototype.initWaterModeEffect = function () {
    if (this.isWaterMode) {
      var t = function t(_t) {
        var o = e.dict.carRoot.children[_t];
        var i = $utils.Utils.randomNum(0, 20) / 10;

        if (!o.getComponent($level_249667_carItem["default"]).floatPos) {
          var r = Math.PI / 180 * (90 - o.angle);
          var n = 2 * Math.cos(r);
          var a = 2 * Math.sin(r);
          var s = o.convertToWorldSpaceAR(cc.v2(n, a));
          var c = o.parent.convertToNodeSpaceAR(s);
          o.getComponent($level_249667_carItem["default"]).floatPos = c;
          var l = o.position;
          e.scheduleOnce(function () {
            cc.tween(o).to(0.6, {
              position: c
            }).to(0.6, {
              position: l
            }).union().repeatForever().start();
          }, i);
        }
      };

      var e = this;

      for (var o = 0; o < this.dict.carRoot.children.length; o++) {
        t(o);
      }
    }
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

      if (i.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.Idle && i.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.Normal && i.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.Parking) {
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

      if (i && cc.isValid(i, !0) && i.active && i.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.Idle && i.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.OutParking) {
        t += 1;
      }
    }

    return t;
  };

  e.prototype.face = function () {
    var t = this;

    if (this.dict.faceSpine) {
      var e = this.randomNum(5, 10);
      this.scheduleOnce(function () {
        if (t.sortPersonNodes.length) {
          var e = t.randomNum(3, 4);
          var o = t.randomNum(0, t.sortPersonNodes.length - 1);

          if (t.sortPersonNodes[o]) {
            var i = cc.v2(t.sortPersonNodes[o].x, t.sortPersonNodes[o].y + 67 + 20);
            var r = t.sortPersonNodes[o].parent.convertToWorldSpaceAR(i);
            var n = t.dict.faceSpine.parent.convertToNodeSpaceAR(r);
            var a = cc.instantiate(t.poolMgr.get(t.dict.faceSpine, "faceSpine"));
            t.dict.faceSpine.parent.addChild(a);
            a.position = n;
            a.getComponent(sp.Skeleton).setAnimation(0, "animation" + e, !0);
            cc.tween(t.dict.faceSpine.parent).delay(3).call(function () {
              t.poolMgr.put(a, "faceSpine");
              t.face();
            }).start();
          }
        }
      }, e);
    }
  };

  e.prototype.face2 = function () {
    var t = this;

    if (this.dict.faceSpine) {
      var e = [];

      for (var o = 0; o < this.dict.parkingRoot.children.length; o++) {
        var i = this.dict.parkingRoot.children[o].car;

        if (i) {
          for (var r = 0; r < i.getChildByName("seatRoot").children.length; r++) {
            var n = i.getChildByName("seatRoot").children[r];

            if (n.active) {
              e.push(n);
            }
          }
        }
      }

      if (e.length) {
        var a = this.randomNum(5, 10);
        this.scheduleOnce(function () {
          var o = t.randomNum(0, e.length - 1);

          if (e[o]) {
            if (e[o]) {
              try {
                var i = cc.v2(e[o].x, e[o].y + 67);
                var r = e[o].parent.convertToWorldSpaceAR(i);
                var n = t.dict.faceSpine.parent.convertToNodeSpaceAR(r);
                var a = cc.instantiate(t.poolMgr.get(t.dict.faceSpine, "faceSpine"));
                t.dict.faceSpine.parent.addChild(a);
                a.position = n;
                a.getComponent(sp.Skeleton).setAnimation(0, "animation", !0);
                cc.tween(t.dict.faceSpine.parent).delay(3).call(function () {
                  t.poolMgr.put(a, "faceSpine");
                  t.face2();
                }).start();
              } catch (s) {}
            }
          } else {
            t.scheduleOnce(function () {
              t.face2();
            }, 3);
          }
        }, a);
      } else {
        this.scheduleOnce(function () {
          t.face2();
        }, 3);
      }
    }
  };

  e.prototype.createCarByCarPark = function (t, e, o, i) {
    var r = "0" + i + t + "-" + o;
    console.log("name", r);
    var n = this.dict.carPrefab.getChildByName(r);
    var a = cc.instantiate(n);
    a.active = !1;
    a.parent = this.carRoot;
    a.position = cc.v2(0, 0);
    a.getComponent($level_249667_carItem["default"]).mgr = this;
    a.getComponent($level_249667_carItem["default"]).path = e;

    if (this.isDebug) {
      var s = new cc.Node();
      s.name = "path";
      s.addComponent(cc.Label).string = "" + e;
      s.color = cc.Color.WHITE;
      a.addChild(s);
      s.position = cc.v2(-13.105, -26.21);
    }

    return a;
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
    var o = t.convertToWorldSpaceAR(cc.v2(0, -t.height / 2));
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

      if (p && p != t && p.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.Idle && p.active && !p.getComponent($level_249667_carItem["default"]).isTransportCar && !p.getComponent($level_249667_carItem["default"]).isUTransportCar) {
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
          if (this.dict.carRoot.getComponent($level_249667_oblique["default"]) && null != r.carSquareCol && this.dict.carRoot.getComponent($level_249667_oblique["default"]).isAnim) {
            return;
          }

          console.log("新增限制快速点击", this.moveCarAmount, this.parkingNodes.length);

          if (this.moveCarAmount >= this.parkingNodes.length) {
            console.log("限制快速点击");
            return this.show($languageManager["default"].formatStr("暂时没有车位空出"));
          }

          var a = r.getComponent($level_249667_carItem["default"]).nextCar;
          var s = r.getComponent($level_249667_carItem["default"]).prevCar;

          if ((a || s) && this.moveCarAmount >= this.parkingNodes.length - 1) {
            console.log("限制快速点击2");
            return this.show($languageManager["default"].formatStr("需要两个停车位"), 0.8, 1);
          }

          if (255 != r.opacity) {
            return;
          }

          if (r.getChildByName("lock")) {
            $tipManager.Tip.show($languageManager["default"].formatStr("需要钥匙解锁"));
            return void r.runAction(r.getComponent($level_249667_carItem["default"]).shackAction(0.1, 2));
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

          if (this.isRemove && r.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.Idle && !this.removePropUsing && !r.obliqueHead && !r.getComponent($level_249667_carItem["default"]).isFireEngine) {
            return void this.removeCar(r);
          }

          if (this.removePropUsing) {
            return;
          }

          if (!r.getComponent($level_249667_carItem["default"]).isCanClick) {
            return;
          }

          if (r.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.Idle) {
            return;
          }

          if (r.getComponent($level_249667_carItem["default"]).isTransportCar && (r.x > 267 || r.x < -267)) {
            return;
          }

          if (r.obliqueHead) {
            return void r.runAction(this.shackAction(0.1, 2));
          }

          if (this.dict.hand && this.dict.hand.active && (this.guidedNodes.push(r), this.currentGuideNode == r)) {
            var c = !1;

            for (var l = 0; l < this.guideNodes.length; l++) {
              var p = this.guideNodes[l];

              if (-1 == this.guidedNodes.indexOf(p)) {
                this.currentGuideNode = p;
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

          var u = !1;

          for (l = 0; l < this.parkingNodes.length; l++) {
            if (this.parkingNodes[l].isEmpty) {
              u = !0;
              break;
            }
          }

          if (!u) {
            console.log("所有车位都被占用了");
            return this.show($languageManager["default"].formatStr("目前车位已满"), 0.8, 1);
          }

          if (a || s) {
            var m = 0;

            for (l = 0; l < this.parkingNodes.length; l++) {
              if (this.parkingNodes[l].isEmpty) {
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
            return this.show($languageManager["default"].formatStr("暂时没有车位空出"));
          }

          console.log("有" + this.checkHasCarMoveAmount() + "辆车在动！", this.parkingNodes.length);

          if ((a || s) && this.parkingNodes.length - this.checkHasCarMoveAmount() <= 1) {
            console.log("拉链车不能出车");
            return this.show($languageManager["default"].formatStr("暂时没有车位空出"));
          }

          r.stopAllActions();

          if (this.isWaterMode) {
            r.position = r.getComponent($level_249667_carItem["default"]).oldPos;
          }

          if (r.getComponent($level_249667_carItem["default"]).isTransportCar) {
            this.isTransportCarMove = !1;
            this.timerTransportMove(2);

            if (this.checkHasCollision(r)) {//
            } else {
              this.addTailGasSpine(r);
            }
          }

          if (r.getComponent($level_249667_carItem["default"]).isUTransportCar) {
            this.dict.carRoot.getComponent($level_249667_uTransport["default"]).stop(r);
          }

          var f = r.convertToWorldSpaceAR(cc.v2(0, 2250));
          var v = r.parent.convertToNodeSpaceAR(f);
          r.getComponent($level_249667_carItem["default"]).otherCarNode = this.getOtherCarByDistance(r);
          r.getComponent($level_249667_carItem["default"]).oldPos = r.position;

          if (a) {
            a.getComponent($level_249667_carItem["default"]).otherCarNode = this.getOtherCarByDistance(a, !0);
            a.getComponent($level_249667_carItem["default"]).oldPos = a.position;
          }

          if (s) {
            s.getComponent($level_249667_carItem["default"]).otherCarNode = this.getOtherCarByDistance(s, !0);
            s.getComponent($level_249667_carItem["default"]).oldPos = s.position;
          }

          if (r.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.Idle) {
            r.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.Normal;

            if (r.getComponent($level_249667_carItem["default"]).isFireEngine) {//
            } else {
              this.moveCarAmount += 1;
            }

            cc.tween(r).to(2250 / r.getComponent($level_249667_carItem["default"]).speed, {
              position: v
            }).start();
            var y = r.getComponent($level_249667_carItem["default"]).nextCar;

            if (y) {
              if (r.getChildByName("chain") && 1 == r.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || y.getChildByName("chain") && 1 == y.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType) {
                y.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.Normal;
                console.log("平行加入检测");
              }

              this.moveCarAmount += 1;
              cc.tween(y).to(2250 / r.getComponent($level_249667_carItem["default"]).speed, {
                position: v
              }).start();
            }

            if (s && (s.getChildByName("chain") && 1 == s.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType || r.getChildByName("chain") && 1 == r.getChildByName("chain").getComponent($level_249667_chain["default"]).linkType)) {
              s.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.Normal;
              this.moveCarAmount += 1;
              cc.tween(s).to(2250 / s.getComponent($level_249667_carItem["default"]).speed, {
                position: v
              }).start();
            }
          }

          if (r.getComponent($level_249667_carItem["default"]).isTransportCar || r.getComponent($level_249667_carItem["default"]).isUTransportCar || 1 != r.getComponent($level_249667_carItem["default"]).path) {//
          } else {
            this.addTailGasSpine(r);

            if ($audioManager.Audio.getEffectMute()) {//
            } else {
              this.playLevelSound("Engine2");
            }
          }

          break;
        }
      }

      this.touchStart_bulldozerRoot(e);
    }
  };

  e.prototype.touchStart_bulldozerRoot = function (t) {
    if (this.dict.bulldozerRoot) {
      for (var e = 0; e < this.dict.bulldozerRoot.children.length; e++) {
        var o = this.dict.bulldozerRoot.children[e];

        if ("bulldozer" == o.name) {
          var i = o.getChildByName("bulldozerChild").getComponent(cc.PolygonCollider);

          if (cc.Intersection.pointInPolygon(t, this.getWPosByPolygon(i)) && o.getComponent($level_249667_bulldozer["default"]).state == $level_249667_busConfig.BulldozerState.Idle) {
            console.log("点击到推土机");
            o.getComponent($level_249667_bulldozer["default"]).state = $level_249667_busConfig.BulldozerState.Normal;
            o.getComponent($level_249667_bulldozer["default"]).oldPos = o.position;
            var r = o.convertToWorldSpaceAR(cc.v2(0, 2250));
            var n = o.parent.convertToNodeSpaceAR(r);
            cc.tween(o).to(2250 / o.getComponent($level_249667_bulldozer["default"]).bulldozerSpeed, {
              position: n
            }).start();
          }
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
    var i = t.convertToWorldSpaceAR(cc.v2(0, -t.height / 2));
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
    var i = t.getComponent($level_249667_carItem["default"]);
    i.carColor = e;

    if (this.colorPersonArr[e]) {//
    } else {
      this.colorPersonArr[e] = 0;
    }

    this.colorPersonArr[e] += i.seatTotalAmount;
    i.colorImgName = e + 1;

    if (t.getComponent($level_249667_carItem["default"]).isTramcar) {
      i.colorImgName = e + 1 + 12;
    }

    i.dirImgName = $level_249667_busConfig.CarDirImg[Math.round(Math.abs(t.angle))];
    i.lenImgName = $level_249667_busConfig.CarLenImg[i.seatTotalAmount];
    var r = "" + i.colorImgName + i.dirImgName + i.lenImgName;
    o = "texture/" + this.folder + "/" + this.folder + "_" + r;

    if (t.getComponent($level_249667_carItem["default"]).isBlackCar) {
      o = "texture/" + this.folder + "/" + this.folder + "_9" + i.dirImgName + i.lenImgName;
      t.getChildByName("dir").active = !1;
      var n = "texture/" + this.folder + "/" + this.folder + "_15";
      console.log("newDirUrl1111", t.angle);

      if (128 == Math.round(Math.abs(t.angle))) {
        n = "texture/" + this.folder + "/" + this.folder + "_17";
      } else {
        if (90 == Math.round(Math.abs(t.angle))) {
          n = "texture/" + this.folder + "/" + this.folder + "_34";
        } else {
          0 == Math.round(Math.abs(t.angle)) && (n = "texture/" + this.folder + "/" + this.folder + "_35");
        }
      }

      console.log("newDirUrl", n);
      cc.resources.load(n, function (e, o) {
        if (e) {//
        } else {
          t.getChildByName("dir").active = !0;

          if (o) {
            t.getChildByName("dir").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o);
          }
        }
      });
    }

    if (t.getComponent($level_249667_carItem["default"]).isFireEngine || t.getComponent($level_249667_carItem["default"]).isPoliceCar || t.getComponent($level_249667_carItem["default"]).isRichCar) {
      t.getChildByName("car").getComponent(cc.Sprite).enabled = !0;
    } else {
      cc.resources.load(o, function (e, o) {
        if (e) {//
        } else {
          t.getChildByName("car").getComponent(cc.Sprite).enabled = !0;

          if (o) {
            t.getChildByName("car").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o);
          }
        }
      });
    }

    if (this.levelDataJSON.carWeight[i.path]) {//
    } else {
      this.levelDataJSON.carWeight[i.path] = 0;
    }
  };

  e.prototype.setCarColorImg_2 = function (t, e) {
    var o;
    var i = t.getComponent($level_249667_carItem["default"]);
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

      if (r && r.getComponent($level_249667_carItem["default"]) && r.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.Idle && !r.getComponent($level_249667_carItem["default"]).isTransportCar && !r.getComponent($level_249667_carItem["default"]).isUTransportCar) {
        r.path = null;
        var n = i.getPath(r);
        r.getComponent($level_249667_carItem["default"]).path = n;

        if (1 == n && r.getComponent($level_249667_carItem["default"]).isBlackCar && !r.isNoBlack) {
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
            var o = r.getComponent($level_249667_carItem["default"]);
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

        if (r.getComponent($level_249667_carItem["default"]).carColor == $level_249667_busConfig.CarColor.Gold) {
          i.carWeight[r.getComponent($level_249667_carItem["default"]).carColor] += a * r.getComponent($level_249667_carItem["default"]).emptySeatAmount * 2;
        } else {
          i.carWeight[r.getComponent($level_249667_carItem["default"]).carColor] += a * r.getComponent($level_249667_carItem["default"]).emptySeatAmount;
        }
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

        if (this.colorPersonAmountArrIndex[n][i] == this.lastExtraIndexArr[n]) {
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
            (p = n >= $level_249667_busConfig.CarColor.Police ? cc.instantiate(this.dict.careerPrefab) : cc.instantiate(this.dict.personPrefab)).oldPosIndex = -1;
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

            p.children[0].getComponent(sp.Skeleton).setAnimation(0, "daiji_zheng", !0);
            var d = this.dict.personPosRoot.childrenCount - 1 - r;

            if (d < 0) {
              p.position = this.dict.doorOutside.position;
            } else {
              p.position = this.dict.personPosRoot.children[d].position;
              p.zIndex = this.dict.personPosRoot.childrenCount - this.sortPersonNodes.length;
              p.oldPosIndex = d;
              d >= 5 && (this.setColorPersonImg(p.getComponent($level_249667_personItem["default"]).personColor, p, 1), p.children[0].getComponent(sp.Skeleton).setAnimation(0, "daiji_ce", !0));
            }

            this.sortPersonNodes.push(p);
            r += 1;
          } else {
            p = void 0;
            (p = n >= $level_249667_busConfig.CarColor.Police ? cc.instantiate(this.dict.careerPrefab) : cc.instantiate(this.dict.personPrefab)).oldPosIndex = -1;
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
        o.children[0].getComponent(sp.Skeleton).setAnimation(0, "daiji_zheng", !0);

        if (e != t.uiShowPersonAmount - 1) {
          o.zIndex = t.dict.personPosRoot.childrenCount - e;
          o.children[0].getComponent(sp.Skeleton).setAnimation(0, "pao_zheng", !0);
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
          var i = o.getComponent($level_249667_carItem["default"]).carColor;

          if (o && o.getComponent($level_249667_carItem["default"])) {
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

          if (a.getComponent($level_249667_carItem["default"]).carColor == o) {
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

                for (var l = function l(t) {
                  var o = n.sortPersonNodes[t];
                  o.zIndex = c - t;
                  o.getComponent($level_249667_personItem["default"]).isMoving = !0;
                  n.move(o.oldPosIndex, o, o.oldPosIndex + 1, function () {
                    o.getComponent($level_249667_personItem["default"]).isMoving = !1;

                    if (t == c - 1) {
                      e.scheduleOnce(function () {
                        e.isCheck = !1;
                        e.checkPerson();
                      }, 0.05);
                    }
                  });
                }, p = 0; p < c; p++) {
                  l(p);
                }

                n.allPersonAmount -= 1;
                n.dict.personAmount.getComponent(cc.Label).string = "" + n.allPersonAmount;
                cc.game.emit("allPersonAmount", n.allPersonAmount, n.allPersonAmount2);
                cc.tween(s).to(30 / n.personSpeed, {
                  position: cc.v2(-140.859, 412)
                }).call(function () {
                  var t = i.parent.convertToWorldSpaceAR(i.position);
                  var r = s.parent.convertToNodeSpaceAR(t);
                  var n = Math.abs(r.x - s.x);
                  var c = Math.abs(r.y - s.y);
                  e.setColorPersonImg_seat(o, i, 3);

                  if (r.x < s.x) {
                    s.children[0].getComponent(sp.Skeleton).setAnimation(0, "pao_ce", !0);
                  } else {
                    s.scaleX = -s.scaleX;
                    s.children[0].getComponent(sp.Skeleton).setAnimation(0, "pao_ce", !0);
                  }

                  cc.tween(s).to(n / (0.6 * e.personSpeed), {
                    x: r.x
                  }).call(function () {
                    s.children[0].getComponent(sp.Skeleton).setAnimation(0, "pao_zheng", !0);
                  }).to(c / (0.6 * e.personSpeed), {
                    y: r.y
                  }).call(function () {
                    if ($audioManager.Audio.getEffectMute()) {//
                    } else {
                      e.playLevelSound("Get_on");
                    }

                    i.active = !0;
                    a.getComponent($level_249667_carItem["default"]).emptySeatAmount -= 1;
                    e.carAnim(i);
                    s.destroy();
                    e.checkCarGo();

                    if ($platformManager.Platform.getConfig().hasCoin) {
                      var t = i.parent.children.indexOf(i);
                      i.parent.parent.getChildByName("coinRoot").children[t].getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
                    }
                  }).start();
                }).start();
                return {
                  value: void 0
                };
              }
            }, c = 0; c < a.getChildByName("seatRoot").children.length; c++) {
              var l = s(c);

              if ("object" == typeof l) {
                return l;
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
            var c = r.convertToWorldSpaceAR(cc.v2(0, -r.height / 2));
            var l = r.parent.convertToNodeSpaceAR(c);
            r.setInterval = !0;
            var p = setInterval(function () {
              if (!t.checkCarBlock(l)) {
                clearInterval(p);
                i.car = null;

                if ($audioManager.Audio.getEffectMute()) {//
                } else {
                  t.playLevelSound("Full");
                }

                t.addStarSpine(i);
                r.GoingOutParking_nPos = l;
                r.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.GoingOutParking;

                if (0 == _e) {
                  i.active = !1;
                }

                i.isEmpty = !0;

                if ($platformManager.Platform.getConfig().hasCoin) {
                  var o = n.parent.getChildByName("coinRoot");
                  cc.game.emit("coinEffect", o);
                }

                cc.tween(r).to(r.height / 2 / r.getComponent($level_249667_carItem["default"]).speed * 1.3, {
                  position: l
                }).call(function () {
                  t.checkRes();
                  r.getComponent($level_249667_carItem["default"]).carState = $level_249667_busConfig.CarState.OutParking;

                  if (r.getComponent($level_249667_carItem["default"]).isRichCar) {
                    t.changeCar(r, 1, 1, "1111-1");
                  } else {
                    t.changeCar(r, 1, 1, "01" + r.getComponent($level_249667_carItem["default"]).lenImgName + "-1");
                  }
                }).start();
              }
            }, 0.5);
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

      if (i.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.OutParking && i.position.sub(t).mag() < 400) {
        return !0;
      }

      if (i.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.GoingOutParking) {
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

    var a = e.position.sub(this.dict.personPosRoot.children[t + 1].position).mag();
    var s = a / this.personSpeed;

    if (r) {
      s = a / (0.3 * this.personSpeed);
    }

    cc.tween(e).to(s, {
      position: this.dict.personPosRoot.children[t + 1].position
    }).call(function () {
      e.oldPosIndex = t + 1;

      if (t + 1 == 5) {
        n.setColorPersonImg(e.getComponent($level_249667_personItem["default"]).personColor, e, 1);
      }

      if (t + 1 == o) {
        if (o >= 5) {
          e.children[0].getComponent(sp.Skeleton).setAnimation(0, "daiji_ce", !0);
        } else {
          e.children[0].getComponent(sp.Skeleton).setAnimation(0, "daiji_zheng", !0);
        }

        i && i();
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

    this.folder;
    this.folder;
    var r = "skin_" + (t + 1);
    e.children[0].scale = 1;

    if (t + 1 == 10) {
      r = "skin_" + (t + 1) + i;
      "" != i && (e.children[0].getComponent(sp.Skeleton).setSkin("" + r), e.children[0].getComponent(sp.Skeleton).defaultSkin = r);
    } else {
      if (t + 1 == 11) {
        r = "skin_" + (t + 1) + i, "" != i && (e.children[0].getComponent(sp.Skeleton).setSkin("" + r), e.children[0].getComponent(sp.Skeleton).defaultSkin = r);
      } else {
        e.children[0].getComponent(sp.Skeleton).setSkin("" + r), e.children[0].getComponent(sp.Skeleton).defaultSkin = r;
      }
    }

    if (2 == o) {
      e.children[0].getComponent(sp.Skeleton).setAnimation(0, "pao_zheng", !0);
    } else {
      e.children[0].getComponent(sp.Skeleton).setAnimation(0, "pao_ce", !0);
    }
  };

  e.prototype.setColorPersonImg_sort = function (t, e, o) {
    if (void 0 === o) {
      o = 2;
    }

    var i = "skin_" + (t + 1);

    if (e.name.includes("careerPrefab")) {
      console.log("职业小人 不变");
    } else {
      t + 1 >= 9 && (i = "skin_8");
      e.children[0].scale = 1;
      e.children[0].getComponent(sp.Skeleton).setSkin("" + i);
      e.children[0].getComponent(sp.Skeleton).defaultSkin = i;
    }
  };

  e.prototype.setColorPersonImg_seat = function (t, e, o) {
    var i;
    var r;

    if (void 0 === o) {
      o = 2;
    }

    r = "r" + (t + 1) + o;

    if (t == $level_249667_busConfig.CarColor.Police) {
      if (0 == this.policeIndexSeat) {
        r = "r" + (t + 1) + o, this.policeIndexSeat = 1;
      } else {
        r = "r11" + o, this.policeIndexSeat = 0;
      }
    } else {
      if (t == $level_249667_busConfig.CarColor.Gold) {
        if (0 == this.goldIndexSeat) {
          r = "r12" + o, this.goldIndexSeat = 1;
        } else {
          r = "r13" + o, this.goldIndexSeat = 0;
        }
      }
    }

    i = "texture/f27312/f27312_" + r;
    cc.resources.load(i, function (t, o) {
      if (o) {
        e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o);
      }
    });
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
        var r = this.carNodeArr[i].getComponent($level_249667_carItem["default"]);

        if (r.carColor == t) {
          var n = [];
          var a = [];

          for (var s = r.seatTotalAmount; s > 0;) {
            var c = this.randomNum(1, s);

            if (t != $level_249667_busConfig.CarColor.Police && t != $level_249667_busConfig.CarColor.Gold) {//
            } else {
              c = 2;
            }

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
      r = $level_249667_busConfig.colorDes[i] + ":" + r;
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
      0 != this.currentPersonColorAmount[e] && this.currentPersonColorAmount[e] >= this.colorPersonArr[e] && (console.log($level_249667_busConfig.colorDes[e] + "颜色已经满元"), this.allWeight[e] = 0);
    }

    return this.randomByWeight(new Array($level_249667_busConfig.colorDes.length).fill(1).map(function (t, e) {
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
        if (this.randomColorNum[r] == this.randomColorArr[r].length) {
          var a = this.randomNum(0, this.randomColorArr[r].length - 1);
          return this.randomColorArr[r][a];
        }

        var s = this.randomColorNum[r];
        var c = this.randomColorArr[r][s];
        this.randomColorNum[r] += 1;
        return c;
      }
    }
  };

  e.prototype.setCarID = function () {
    var t = this;

    if (this.dict.carParkRoot) {
      for (var e = 0; e < this.dict.carParkRoot.children.length; e++) {
        var o = this.dict.carParkRoot.children[e].getComponent($level_249667_carpark["default"]).carParkCars;

        for (var i = 0; i < o.length; i++) {
          this.carNodeArr.push(o[i]);
        }
      }
    }

    this.carNodeArr.sort(function (t, e) {
      return t.getComponent($level_249667_carItem["default"]).path - e.getComponent($level_249667_carItem["default"]).path;
    });
    this.carNodeArr.forEach(function (e, o) {
      e.getComponent($level_249667_carItem["default"]).carID = o;

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

      if (i >= e[0] && i <= e[1]) {
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

      if (n && n != t && n.getComponent($level_249667_carItem["default"]).carState == $level_249667_busConfig.CarState.Idle && n.active && !n.getComponent($level_249667_carItem["default"]).isTransportCar && !n.getComponent($level_249667_carItem["default"]).isUTransportCar) {
        if (e && t.getComponent($level_249667_carItem["default"]).prevCar == n) {//
        } else {
          o.push(n);
        }
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

    if (s.getComponent($level_249667_carItem["default"]).isTramcar) {
      s.path = 30;
      return s.path;
    }

    if (s.getComponent($level_249667_carItem["default"]).leftObliqueCar || s.getComponent($level_249667_carItem["default"]).rightObliqueCar) {
      return 1;
    }

    if (s.getComponent($level_249667_carItem["default"]).isUTransportCar_noIn) {
      return 2;
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

  e.prototype.randomByWeight = function (t, e) {
    if (t.length != e.length) {
      console.warn("random2输入不合法: resultArr.length != weightArr.length");
      return null;
    }

    var o = this.fetchMaxIndex(e, this.levelDataJSON.limitRank || $level_249667_busConfig.colorDes.length);

    for (var i = 0; i < e.length; i++) {
      e[i];
      o.includes(i) || (e[i] = 0);
    }

    if (this.arraysEqual(e, new Array($level_249667_busConfig.colorDes.length).fill(0))) {
      console.log("TODO");
      var r = [];

      for (i = 0; i < $level_249667_busConfig.colorDes.length; i++) {
        if (this.colorPersonAmountArr[i].length && this.currentPersonColorAmount[i] < this.colorPersonArr[i]) {
          r.push(i);
        }
      }

      console.log("TODO", r);

      if (r.length) {
        return r[this.randomNum(0, r.length - 1)];
      }
    }

    var n = 0;
    var a = 0;
    var s = Math.random();

    for (var c = e.length - 1; c >= 0; c--) {
      n += e[c];
    }

    s *= n;

    for (c = e.length - 1; c >= 0; c--) {
      if (s <= (a += e[c])) {
        return t[c];
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
      position: cc.v2(0, 60),
      opacity: 255
    }).delay(e).by(0.3, {
      position: cc.v2(0, 60),
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
                var o = i.randomNum(0, $level_249667_busConfig.colorDes.length - 1);
                i.setColorPersonImg_sort(o, e);
              }
            }, 0.2, (t - 1) / 0.2 - 0.3);
            cc.tween(this.node).delay(t).call(function () {
              i.isSortAnim = !1;
              o.destroy();
              i.isFail = !1;
              i.consoleWeight("总权重", i.allWeight);
              console.log("排队颜色顺序", i.fetchMaxIndex(i.allWeight, $level_249667_busConfig.colorDes.length));
              var t = i.fetchMaxIndex(i.allWeight, $level_249667_busConfig.colorDes.length);
              var e = new Array($level_249667_busConfig.colorDes.length).fill(0);

              for (var r = 0; r < i.sortPersonNodes.length; r++) {
                e[(a = i.sortPersonNodes[r]).getComponent($level_249667_personItem["default"]).personColor] += 1;
              }

              var n = 0;

              for (r = 0; r < i.sortPersonNodes.length; r++) {
                var a = i.sortPersonNodes[r];

                for (var s = t[n]; 0 == e[s] && (s = t[n += 1], !(n >= $level_249667_busConfig.colorDes.length - 1));) {}

                e[s] -= 1;
                a.getComponent($level_249667_personItem["default"]).personColor = s;
                i.setColorPersonImg_sort(s, a);
                console.log($level_249667_busConfig.colorDes[s]);
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
    var r = i.getComponent($level_249667_carItem["default"]).carColor;
    var n = i.getComponent($level_249667_carItem["default"]).emptySeatAmount;
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
        console.log("回收", $level_249667_busConfig.colorDes[d]);
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
                var o = i.randomNum(0, $level_249667_busConfig.colorDes.length - 1);
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
                  var s = a.getComponent($level_249667_carItem["default"]);
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
                var o = r.randomNum(0, $level_249667_busConfig.colorDes.length - 1);
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
                e.push(n.getComponent($level_249667_carItem["default"]).carColor);
                o.push(n.getComponent($level_249667_carItem["default"]).emptySeatAmount);

                for (var a = 0; a < r.parkingNodes.length; a++) {
                  var s = (p = r.parkingNodes[a]).car;

                  if (!p.isEmpty && s && e.length < 3) {
                    e.push(s.getComponent($level_249667_carItem["default"]).carColor);
                    o.push(s.getComponent($level_249667_carItem["default"]).emptySeatAmount);
                  }
                }
              } else {
                for (a = 0; a < r.parkingNodes.length; a++) {
                  n = (p = r.parkingNodes[a]).car;
                  !p.isEmpty && n && e.length < 4 && (e.push(n.getComponent($level_249667_carItem["default"]).carColor), o.push(n.getComponent($level_249667_carItem["default"]).emptySeatAmount));
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
      if (!(l = e[o]).active || l.getComponent($level_249667_carItem["default"]).carState != $level_249667_busConfig.CarState.Idle || l.getComponent($level_249667_carItem["default"]).isTransportCar || l.getComponent($level_249667_carItem["default"]).isUTransportCar || l.getComponent($level_249667_carItem["default"]).isBlackCar) {//
      } else {
        t.push(l);
      }
    }

    for (var i = 0; i < t.length; i++) {
      var r = t[i];

      for (var n = 0; n < t.length; n++) {
        var a = t[n];

        if (r != a && r.getComponent($level_249667_carItem["default"]).seatTotalAmount == a.getComponent($level_249667_carItem["default"]).seatTotalAmount && r.getComponent($level_249667_carItem["default"]).carColor != a.getComponent($level_249667_carItem["default"]).carColor && !r.isExchange && !a.isExchange && 1 == this.randomNum(0, 1)) {
          var s = r.getComponent($level_249667_carItem["default"]).carColor;
          var c = a.getComponent($level_249667_carItem["default"]).carColor;
          r.getComponent($level_249667_carItem["default"]).carColor = c;
          a.getComponent($level_249667_carItem["default"]).carColor = s;
          r.isExchange = !0;
          a.isExchange = !0;
          this.setCarColorImg(r, r.getComponent($level_249667_carItem["default"]).carColor);
          this.setCarColorImg(a, a.getComponent($level_249667_carItem["default"]).carColor);
          break;
        }
      }
    }

    for (o = 0; o < e.length; o++) {
      var l;
      (l = e[o]).isExchange = !1;
    }
  };

  e.prototype.func_removeCar = function () {
    this.isTransportCarMove = !1;

    if (this.dict.carRoot.getComponent($level_249667_uTransport["default"])) {
      this.dict.carRoot.getComponent($level_249667_uTransport["default"]).isTransportCarMove = !1;
    }

    var t = cc.instantiate(this.dict.tipPrefab);
    this.dict.tipPrefab.parent.addChild(t);
    this.tipRemove = t;
    t.children[1].getComponent(cc.Label).string = $languageManager["default"].formatStr("可拎出任意一辆汽车至VIP车位消除");
    t.y = 301.643;
    t.active = !0;
    this.isRemove = !0;
    cc.game.emit("isRemove", !0);

    for (var e = 0; e < this.carRoot.children.length; e++) {
      var o = this.carRoot.children[e];

      if (o.getComponent($level_249667_carItem["default"]).prevCar || o.getComponent($level_249667_carItem["default"]).nextCar || o.getChildByName("key") || o.getChildByName("lock")) {
        o.opacity = 100;
      }
    }
  };

  e.prototype.removeCar = function (t) {
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
      o.getComponent($level_249667_carItem["default"]).lenImgName = t.getComponent($level_249667_carItem["default"]).lenImgName;
      o.getComponent($level_249667_carItem["default"]).colorImgName = t.getComponent($level_249667_carItem["default"]).colorImgName;
      o.getComponent($level_249667_carItem["default"]).carColor = t.getComponent($level_249667_carItem["default"]).carColor;

      if (t.getComponent($level_249667_carItem["default"]).isTransportCar && -1 !== (i = e.transportCarArr.indexOf(t))) {
        e.transportCarArr.splice(i, 1);
      }

      if (t.getComponent($level_249667_carItem["default"]).isUTransportCar && -1 !== (i = e.dict.carRoot.getComponent($level_249667_uTransport["default"]).carArr.indexOf(t))) {
        e.dict.carRoot.getComponent($level_249667_uTransport["default"]).carArr[i] = null;
        e.dict.carRoot.getComponent($level_249667_uTransport["default"]).reduceUpdate();
      }

      if (t.getComponent($level_249667_carItem["default"]).isTurntableCar) {
        var i = t.parent.getComponent($level_249667_turntable["default"]).cars.indexOf(t);
        t.parent.getComponent($level_249667_turntable["default"]).cars.splice(i, 1);
        e.updateTurntableCar();
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
      var r = o.getComponent($level_249667_carItem["default"]).colorImgName;
      var n = o.getComponent($level_249667_carItem["default"]).lenImgName;

      if (o.getComponent($level_249667_carItem["default"]).isRichCar) {
        n = 1;
        t = cc.instantiate(e.dict.carPrefab.getChildByName("116" + n));
      } else {
        if (o.getComponent($level_249667_carItem["default"]).isTramcar) {
          t = cc.instantiate(e.dict.carPrefab.getChildByName("136" + n));
        } else {
          t = cc.instantiate(e.dict.carPrefab.getChildByName("06" + n));
        }
      }

      t.parking = e.dict.parkingRoot.children[0];
      t.getChildByName("car").getComponent(cc.PolygonCollider).enabled = !1;
      t.active = !1;
      e.carRoot.addChild(t);
      var a;
      var s = t.parking.convertToWorldSpaceAR(cc.v2(0, 0));
      i = t.parent.convertToNodeSpaceAR(s);
      t.position = cc.v2(i.x, i.y);
      var c = "" + r + 6 + n;
      a = "texture/" + e.folder + "/" + e.folder + "_" + c;
      t.getComponent($level_249667_carItem["default"]).carColor = o.getComponent($level_249667_carItem["default"]).carColor;
      t.getComponent($level_249667_carItem["default"]).colorImgName = o.getComponent($level_249667_carItem["default"]).colorImgName;
      t.getComponent($level_249667_carItem["default"]).lenImgName = o.getComponent($level_249667_carItem["default"]).lenImgName;
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

          if (e.dict.carRoot.getComponent($level_249667_uTransport["default"])) {
            e.dict.carRoot.getComponent($level_249667_uTransport["default"]).isTransportCarMove = !0;
          }

          e.updateTransportAmount();
          cc.game.emit("isRemove", !1);

          for (var t = 0; t < e.carRoot.children.length; t++) {
            var o = e.carRoot.children[t];

            if (o.getComponent($level_249667_carItem["default"]).prevCar || o.getComponent($level_249667_carItem["default"]).nextCar || o.getChildByName("key") || o.getChildByName("lock")) {
              o.opacity = 255;
            }
          }
        }, 1);
      });
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
      this.revive();
    } else {
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
        queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
        id: 9,
        sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
      });
      this.revive();
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

  __decorate([z], e.prototype, "isDebug", void 0);

  __decorate([z], e.prototype, "boundary", void 0);

  __decorate([z], e.prototype, "isWaterMode", void 0);

  __decorate([z], e.prototype, "isHighSpeedRailway", void 0);

  __decorate([$limitRepeat.LimitRepeat(0.3)], e.prototype, "touchStart", null);

  return __decorate([U], e);
}($brainLevelBase["default"]);

exports["default"] = H;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yNDk2NjdfYnVzLmpzIl0sIm5hbWVzIjpbImkiLCIkdXNlckNvbnN0IiwicmVxdWlyZSIsIiR0b29scyIsIiRhdWRpb01hbmFnZXIiLCIkYm1zTWFuYWdlciIsIiRsYW5ndWFnZU1hbmFnZXIiLCIkcGxhdGZvcm1NYW5hZ2VyIiwiJHRpcE1hbmFnZXIiLCIkdXNlck1hbmFnZXIiLCIkbGltaXRSZXBlYXQiLCIkdXRpbHMiLCIkc2h1U2h1Q29uc3QiLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkbG9jYWxTdG9yYWdlTWFuYWdlciIsIiRtZW1vcnlTdG9yYWdlQ29uc3QiLCIkbWVtb3J5U3RvcmFnZU1hbmFnZXIiLCIkYXNzZXRNYW5hZ2VyIiwiJHBvcHVwQ29uc3QiLCIkcG9wdXBNYW5hZ2VyIiwiJHRvYXN0TWFuYWdlciIsIiRicmFpbkxldmVsQmFzZSIsIiRwb29sTWdyIiwiJGxldmVsXzI0OTY2N19idWxsZG96ZXIiLCIkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZyIsIiRsZXZlbF8yNDk2NjdfY2FySXRlbSIsIiRsZXZlbF8yNDk2NjdfY2FycGFyayIsIiRsZXZlbF8yNDk2NjdfY2FyU3F1YXJlIiwiJGxldmVsXzI0OTY2N19jaGFpbiIsIiRsZXZlbF8yNDk2Njdfa2V5IiwiJGxldmVsXzI0OTY2N19vYmxpcXVlIiwiJGxldmVsXzI0OTY2N19wZXJzb25JdGVtIiwiJGxldmVsXzI0OTY2N190dXJudGFibGUiLCIkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQiLCIkbW90aW9uVHJhaWwiLCJqIiwiY2MiLCJfZGVjb3JhdG9yIiwiVSIsImNjY2xhc3MiLCJ6IiwicHJvcGVydHkiLCJIIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImlzRGVidWciLCJib3VuZGFyeSIsImlzV2F0ZXJNb2RlIiwiaXNIaWdoU3BlZWRSYWlsd2F5IiwiY2FyUm9vdCIsImNvbG9yVHlwZUFtb3VudCIsImNvbG9yRGVzIiwibGVuZ3RoIiwicm9hZFBvaW50MCIsInJvYWRQb2ludDEiLCJ0dXJudGFibGVDYXJBcnIiLCJ0cmFuc3BvcnRBbW91bnQiLCJ0cmFuc3BvcnRDYXJBcnIiLCJsYXN0Q2FyIiwib2xkU29ydEFtb3VudCIsImd1aWRlTm9kZXMiLCJndWlkZVRleHQiLCJjdXJyZW50R3VpZGVOb2RlIiwiZ3VpZGVkTm9kZXMiLCJwb29sTWdyIiwic29ydENvbG9yX25ldyIsImxldmVsRGF0YUpTT04iLCJwYXJraW5nTm9kZXMiLCJiZXR3ZWVuMl80Q2FyQXJyIiwiaGlnaFNwZWVkUmFpbFNwZWVkIiwiaXNUcmFuc3BvcnRDYXJNb3ZlIiwidHJhbnNwb3J0U3BlZWQiLCJjb2xvclBlcnNvbkFyciIsInVubG9ja1BhcmtpbmdUYXJnZXQiLCJjYXJwYXJrSW5nIiwiaXNSb3RhdGVDcmVhdGUiLCJtb3ZlQ2FyQW1vdW50IiwiYWxsUGVyc29uQW1vdW50IiwiYWxsUGVyc29uQW1vdW50MiIsImV4dHJhV2VpZ2h0Q29uc3QiLCJleHRyYVdlaWdodCIsImNhcldlaWdodCIsInBhcmtpbmdXZWlnaHQiLCJzb3J0V2VpZ2h0IiwiYWxsV2VpZ2h0IiwiY29sb3JQZXJzb25BbW91bnRBcnIiLCJjb2xvclBlcnNvbkFtb3VudEFyckluZGV4IiwiY29sb3JQZXJzb25JbmRleEFyciIsInVpU2hvd1BlcnNvbkFtb3VudCIsImN1cnJlbnRQZXJzb25Db2xvckFtb3VudCIsInNvcnRQZXJzb25Ob2RlcyIsInRpbWVzIiwiaXNDYW5TdGFydENsaWNrIiwiaXNDaGVjayIsImlzRmFpbCIsImlzV2luIiwicGVyc29uU3BlZWQiLCJwb2xpY2VJbmRleCIsImdvbGRJbmRleCIsInBvbGljZVNraW5OYW1lIiwiZ29sZFNraW5OYW1lIiwicG9saWNlSW5kZXhTZWF0IiwiZ29sZEluZGV4U2VhdCIsImlzUmV2aXZlQW1vdW50IiwibGFzdEV4dHJhSW5kZXhBcnIiLCJyYW5kb21Db2xvckFyciIsInJhbmRvbUNvbG9yTnVtIiwicGF0aEFyciIsImNhckluZGV4IiwiY2FyTm9kZUFyciIsImNhckFsbEFtb3VudCIsIndlaWdodExpbWl0SW5kZXgiLCJsb2NhbERhdGEiLCJyZXZpdmVBcnIiLCJmaXJzdFNvcnRJbmRleEFyciIsImZpcnN0U29ydEFtb3VudEFyciIsImlzU29ydGluZyIsImlzU29ydEFuaW0iLCJpc1JlbW92ZSIsInRpcFJlbW92ZSIsInJlbW92ZVByb3BVc2luZyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImNoYW5nZUJnIiwiX19hd2FpdGVyIiwibyIsInIiLCJuIiwiYSIsIl9fZ2VuZXJhdG9yIiwicyIsImxhYmVsIiwiVXNlciIsImdldFRlbXBEYXRhIiwiVGVtcERhdGEiLCJDVVJSRU5UX0xFVkVMIiwiZGljdCIsImJnIiwid2lkdGgiLCJjb2xvciIsIkNvbG9yIiwiZ2V0UmVzIiwiUHJlZmFiIiwic2VudCIsImFkZENoaWxkIiwiaW5zdGFudGlhdGUiLCJkb29yIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiZW5hYmxlZCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUNhclBhcmtpbmciLCJUZXh0dXJlMkQiLCJwYXJraW5nUm9vdCIsIm9wYWNpdHkiLCJnZXRDaGlsZEJ5TmFtZSIsIkxhYmVsIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicGFyZW50IiwiZ2V0IiwiY2FyZEFtb3VudCIsIlVubG9ja1BhcmtpbmciLCJzdHJpbmciLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJzaG93IiwiZm9ybWF0U3RyIiwidXBkYXRlVW5sb2NrUGFya2luZyIsIm9uTG9hZCIsImNoYW5nZU5vZGVOYW1lIiwiY3JlYXRlU3BpbmUiLCJjYWxsIiwiUGxhdGZvcm0iLCJnZXRDb25maWciLCJmbGFnIiwiaW5jbHVkZXMiLCJkb29yT3V0c2lkZSIsImRvb3IyIiwiYm9hcmQiLCJ2aWV3IiwiZ2V0RnJhbWVTaXplIiwiaGVpZ2h0IiwiY2FyUm9vdEJnMiIsInkiLCJwZXJzb25Qb3NSb290IiwicGVyc29uUm9vdCIsInNldFNpYmxpbmdJbmRleCIsIndpbmRvdyIsInR0Iiwicm9hZCIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwicGVyc29uQW1vdW50IiwiZW5hYmxlQm9sZCIsInpJbmRleCIsIkFycmF5IiwiZmlsbCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImxldmVsRGF0YSIsImxldmVsSUQiLCJzZXRDb2xsaXNpb25NYW5hZ2VyIiwiZmVuY2UiLCJ4IiwiYnRucyIsImhpdFNwaW5lIiwic2NhbGUiLCJ1cGRhdGVQZXJzb25QcmVmYWIiLCJ0YWlsR2FzIiwiaGVhZFdpZHRoIiwidGFpbFdpZHRoIiwiaGVhZE9wYWNpdHkiLCJ0YWlsT3BhY2l0eSIsImhhbmQiLCJwdXNoIiwiaGFuZFBvcyIsImluaXRUVCIsImluaXRJT1MiLCJpbml0U2hpcE1vZGUiLCJlbGVtZW50IiwiaGlnaFNwZWVkUmFpbDJSb290IiwicG9zaXRpb24iLCJmb2xkZXIiLCJjYXJQcmVmYWIiLCJkZXN0cm95IiwicGVyc29uUHJlZmFiIiwiYWRkQ29pbiIsInVwZGF0ZVRyYW5zcG9ydEFtb3VudCIsInJpZ2h0IiwiYWRkVHVybnRhYmxlQ2FyIiwidHVybnRhYmxlUm9vdCIsImluaXQiLCJjb25jYXQiLCJnZXRDYXJzIiwidXBkYXRlVHVybnRhYmxlQ2FyIiwiYWRkVHJhbnNwb3J0Q2FyIiwidHJhbnNwb3J0IiwidHJhbnNwb3J0UG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJpc1RyYW5zcG9ydENhciIsInRpbWVyVHJhbnNwb3J0TW92ZSIsInVuc2NoZWR1bGUiLCJzZXRUcmFuc3BvcnRDYXJNb3ZlIiwic2NoZWR1bGVPbmNlIiwidXBkYXRlIiwibGluZSIsImxpbmUyIiwiZ2V0TWF4WFRyYW5zcG9ydENhciIsImMiLCJsIiwiaCIsImhhc0NvaW4iLCJuYW1lIiwiaW5kZXhPZiIsImhhbmRUZXh0IiwiZmluZCIsIm5vZGUiLCJhZGRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwicHJlbXVsdGlwbGllZEFscGhhIiwiY2hhbmdlQnVsbGRvemVyIiwiYnVsbGRvemVyUm9vdCIsImJ1bGxkb3plclNwZWVkIiwidHdlZW4iLCJ0byIsInN0YXJ0Iiwic2hhY2tBY3Rpb24iLCJtb3ZlQnkiLCJwIiwic2VxdWVuY2UiLCJjaGFuZ2VDYXIiLCJkIiwidSIsImciLCJtIiwiaXNSZWFkeURlc3Ryb3kiLCJjb2xvckltZ05hbWUiLCJsZW5JbWdOYW1lIiwiaXNGaXJlRW5naW5lIiwicGFya2luZyIsImlzUmljaENhciIsImlzUG9saWNlQ2FyIiwiaXNUcmFtY2FyIiwidHJhbWNhclBvc0luZGV4Iiwib3RoZXJDYXJOb2RlIiwiZ2V0T3RoZXJDYXJCeURpc3RhbmNlIiwiY2FyU3RhdGUiLCJDYXJTdGF0ZSIsIkluUm9hZFJpZ2h0IiwiSW5Sb2FkTGVmdCIsInVwZGF0ZUNhcldlaWdodCIsIm1nciIsImRpckltZ05hbWUiLCJjYXJDb2xvciIsIk9uQm90dG9tTGVmdCIsIk9uQm90dG9tUmlnaHQiLCJHb2luZ1BhcmtpbmciLCJzdG9wQWxsQWN0aW9ucyIsInB1dCIsImlzVHVybnRhYmxlQ2FyIiwiY2FycyIsInNwbGljZSIsIm5leHRDYXIiLCJOb3JtYWwiLCJTIiwibG9jayIsInN1YiIsIm1hZyIsInJ1bkFjdGlvbiIsImRlbGF5IiwiZiIsInYiLCJNYXRoIiwiYWJzIiwiYWRkVGFpbEdhc1NwaW5lIiwic3BlZWQiLCJXYXRlclNwcmF5IiwiZmlyZUVuZ2luZUxlYXZlIiwiZ2V0V1Bvc0J5Tm9kZSIsImFuZ2xlIiwiQyIsIlBhcmtpbmciLCJjYXIiLCJwdXRUYWlsR2FzIiwiY2hlY2tQZXJzb24iLCJHb2luZ1JvYWQiLCJfIiwiYnkiLCJjb2xsaXNpb24iLCJwcmVMb2FkTWFubmVkSW1nIiwiT3V0UGFya2luZyIsImFkZE1hbm5lZEltZyIsInJlc291cmNlcyIsImxvYWQiLCJQcm9taXNlIiwid2FybiIsIldhdGVyU3ByYXlMZWF2ZSIsImlzRW1wdHkiLCJoaXQiLCJjYXJNb3ZlIiwib25MZXZlbFJlYWR5Iiwic2V0QW5pbWF0aW9uQ2FjaGVNb2RlIiwiQW5pbWF0aW9uQ2FjaGVNb2RlIiwiUFJJVkFURV9DQUNIRSIsImluaXRWaWV3IiwiayIsIk4iLCJQIiwiYiIsIlIiLCJ3IiwiTyIsIk0iLCJFIiwiRyIsImNhclNxdWFyZSIsImNlbnRlclNxdWFyZSIsIm9ibGlxdWUiLCJpc1VUcmFuc3BvcnRDYXJfbm9JbiIsInVUcmFuc3BvcnQiLCJndWlkZSIsImNoaWxkcmVuQ291bnQiLCJlcnJvciIsImdldExvY2FsIiwiaW5kZXhJRCIsImlzVVRyYW5zcG9ydENhciIsImdldFBhdGgiLCJibGFja0Ftb3VudCIsInBhdGgiLCJXSElURSIsInNlYXRUb3RhbEFtb3VudCIsImNhclBhcmtSb290IiwiaW5pdERhdGEiLCJjYXJwYXJrIiwiZ2FtZSIsImVtaXQiLCJzZXRDYXJJRCIsImlzQmxhY2tDYXIiLCJjYXJJRCIsImdldFJhbmRvbURpc3RpbmN0RWxlbWVudHMiLCJzZXRMb2NhbCIsIkJNUyIsImdldEtleSIsInNodWZmbGVBcnJheSIsInNvcnRDb2xvciIsImdldEFyckJ5TGVuIiwiZ2V0Q2FyQ29sb3IiLCJDYXJDb2xvciIsIlBvbGljZSIsIkdvbGQiLCJzZXRDYXJDb2xvckltZyIsImVtcHR5U2VhdEFtb3VudCIsImdldEFtb3VudEJ5Q29sb3IiLCJoaWdoU3BlZWRSYWlsIiwibGVmdERvb3IiLCJyaWdodERvb3IiLCJjcmVhdGVQZXJzb24iLCJwZXJzb25Nb3ZlIiwib25Ub3VjaCIsImZhY2UiLCJmYWNlMiIsInNjaGVkdWxlIiwiY2hlY2tDYXJGdWxsIiwidGltZXIiLCJjaGVja0hhc1BlcnNvbk1vdmUiLCJjaGVja0hhc0Nhck1vdmUiLCJjaGVjayIsImluaXRXYXRlck1vZGVFZmZlY3QiLCJVdGlscyIsInJhbmRvbU51bSIsImZsb2F0UG9zIiwiUEkiLCJjb3MiLCJzaW4iLCJ1bmlvbiIsInJlcGVhdEZvcmV2ZXIiLCJmdW5jX2NoZWNrQ2FuVXNlU29ydCIsImlzTW92aW5nIiwiSWRsZSIsImNoZWNrSGFzQ2FyTW92ZUFtb3VudCIsImlzVmFsaWQiLCJmYWNlU3BpbmUiLCJzZXRBbmltYXRpb24iLCJjcmVhdGVDYXJCeUNhclBhcmsiLCJ0b3VjaFN0YXJ0IiwidG91Y2hTdGFydF9wYXJraW5nIiwidGFyZ2V0Iiwic2V0IiwiU2h1U2h1Q29uc3QiLCJCb29zdGVyX3VzZSIsImx2IiwiQ1VSUkVOVF9MRVZFTF9JRCIsInF1ZXVlIiwibW9kZSIsIkNVUlJFTlRfTU9ERSIsImlkIiwib3IiLCJzb3J0IiwiQ29uZmlnU3VmZml4IiwicGxheVVubG9ja1NwaW5lIiwicHJvcEluZGV4IiwiUG9wdXBDb25zdCIsIlByb3AiLCJzaG93UmV3YXJkQWRzIiwicmV3YXJkX2J0biIsImppZXN1byIsImZ1bmNfdW5sb2NrUGFya2luZyIsImNoZWNrSGFzQ29sbGlzaW9uIiwiSW50ZXJzZWN0aW9uIiwibGluZUxpbmUiLCJnZXRMb2NhdGlvbiIsIlBvbHlnb25Db2xsaWRlciIsInBvaW50SW5Qb2x5Z29uIiwiZ2V0V1Bvc0J5UG9seWdvbiIsImNhclNxdWFyZUNvbCIsImlzQW5pbSIsInByZXZDYXIiLCJUaXAiLCJpc1NjYWxlQW5pbSIsImlzQ2FyUGFyayIsImlzV2VuIiwib2JsaXF1ZUhlYWQiLCJyZW1vdmVDYXIiLCJpc0NhbkNsaWNrIiwib2xkUG9zIiwic3RvcCIsImxpbmtUeXBlIiwiQXVkaW8iLCJnZXRFZmZlY3RNdXRlIiwicGxheUxldmVsU291bmQiLCJ0b3VjaFN0YXJ0X2J1bGxkb3plclJvb3QiLCJzdGF0ZSIsIkJ1bGxkb3plclN0YXRlIiwiZ2V0QW5nbGUiLCJhdGFuMiIsImFkZFN0YXJTcGluZSIsIm1peFNwaW5lIiwiZ2V0Tm9kZVdvcmxkRXVsZXJBbmdsZXMiLCJmdW4iLCJwb2ludHMiLCJvZmZzZXQiLCJmbG9vciIsInJhbmRvbSIsIkNhckRpckltZyIsInJvdW5kIiwiQ2FyTGVuSW1nIiwic2V0Q2FyQ29sb3JJbWdfMiIsImlzTm9CbGFjayIsImdldFBlcnNvbkNvbG9yIiwiY2FyZWVyUHJlZmFiIiwib2xkUG9zSW5kZXgiLCJwZXJzb25Db2xvciIsInNldENvbG9yUGVyc29uSW1nIiwibW92ZSIsInVwZGF0ZVBhcmtpbmdXZWlnaHQiLCJ0YXJnZXRQZXJzb24iLCJjaGVja1RpcFRleHQiLCJzaGlmdCIsInRhcmdldFNlYXQiLCJzZXRDb2xvclBlcnNvbkltZ19zZWF0Iiwic2NhbGVYIiwiY2FyQW5pbSIsImNoZWNrQ2FyR28iLCJ2YWx1ZSIsImlzQ2FyQW5pbSIsInNldEludGVydmFsIiwiY2hlY2tDYXJCbG9jayIsImNsZWFySW50ZXJ2YWwiLCJHb2luZ091dFBhcmtpbmdfblBvcyIsIkdvaW5nT3V0UGFya2luZyIsImNoZWNrUmVzIiwiY29pbiIsInBsYXlSaWdodCIsImZ1bmNfYWRkUmVzb3VyY2UiLCJCdWlsZFJlc291cmNlIiwic2V0U2tpbiIsImRlZmF1bHRTa2luIiwic2V0Q29sb3JQZXJzb25JbWdfc29ydCIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJpc0FycmF5IiwiY29uc29sZVdlaWdodCIsInVwZGF0ZVNvcnRXZWlnaHQiLCJyYW5kb21CeVdlaWdodCIsIm1hcCIsImNhclBhcmtDYXJzIiwiZm9yRWFjaCIsInBvaW50TGluZURpc3RhbmNlIiwibGVmdE9ibGlxdWVDYXIiLCJyaWdodE9ibGlxdWVDYXIiLCJjb2xsaXNpb25BcnIiLCJoYXNDb21tb25FbGVtZW50Iiwic29tZSIsImFyZUFsbE51bWJlcnNTbWFsbGVyVGhhbiIsImV2ZXJ5IiwiY2hlY2tXZWlnaHRMaW1pdCIsIndlaWdodExpbWl0IiwiZmV0Y2hNYXhJbmRleCIsImtleSIsImZpbHRlciIsImxpbWl0UmFuayIsImFycmF5c0VxdWFsIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJ0aXBQcmVmYWIiLCJzZXRQb3NpdGlvbiIsImZ1bmNfc29ydDIiLCJmdW5jX3NvcnQiLCJyZW1vdmUiLCJ1bnNoaWZ0IiwicmV2aXZlIiwiTnVtYmVyIiwiZnVuY19zb3J0T2xkIiwic2xpY2UiLCJwb3AiLCJmdW5jX3VwZGF0ZUNhciIsImlzRXhjaGFuZ2UiLCJmdW5jX3JlbW92ZUNhciIsImhlbGljb3B0ZXJSb290IiwidjMiLCJoZWxpY29wdGVyU3BpbmUiLCJjYXJBcnIiLCJyZWR1Y2VVcGRhdGUiLCJmdW5jX3Jldml2ZSIsImZ1bmNfaGFzTG9ja1BhcmtpbmciLCJmdW5jX2VuZFBhdXNlIiwicGF1c2VBbGxBY3Rpb25zIiwiZnVuY19yZXN1bWUiLCJyZXN1bWVBbGxBY3Rpb25zIiwiX19kZWNvcmF0ZSIsIkxpbWl0UmVwZWF0IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLHlCQUFELENBQXhCOztBQUNBLElBQUlDLE1BQU0sR0FBR0QsT0FBTyxDQUFDLHFCQUFELENBQXBCOztBQUNBLElBQUlFLGFBQWEsR0FBR0YsT0FBTyxDQUFDLDRCQUFELENBQTNCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLDBCQUFELENBQXpCOztBQUNBLElBQUlJLGdCQUFnQixHQUFHSixPQUFPLENBQUMsK0JBQUQsQ0FBOUI7O0FBQ0EsSUFBSUssZ0JBQWdCLEdBQUdMLE9BQU8sQ0FBQywrQkFBRCxDQUE5Qjs7QUFDQSxJQUFJTSxXQUFXLEdBQUdOLE9BQU8sQ0FBQywwQkFBRCxDQUF6Qjs7QUFDQSxJQUFJTyxZQUFZLEdBQUdQLE9BQU8sQ0FBQywyQkFBRCxDQUExQjs7QUFDQSxJQUFJUSxZQUFZLEdBQUdSLE9BQU8sQ0FBQywyQkFBRCxDQUExQjs7QUFDQSxJQUFJUyxNQUFNLEdBQUdULE9BQU8sQ0FBQyxxQkFBRCxDQUFwQjs7QUFDQSxJQUFJVSxZQUFZLEdBQUdWLE9BQU8sQ0FBQywyQkFBRCxDQUExQjs7QUFDQSxJQUFJVyxrQkFBa0IsR0FBR1gsT0FBTyxDQUFDLGlDQUFELENBQWhDOztBQUNBLElBQUlZLG9CQUFvQixHQUFHWixPQUFPLENBQUMs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Q0EyYyxVQUFVLENBQUMsQ0FBQy9oQixDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDZ0YsU0FBUixFQUFtQixVQUFuQixFQUErQixLQUFLLENBQXBDLENBQVY7O0VBQ0EyYyxVQUFVLENBQUMsQ0FBQy9oQixDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDZ0YsU0FBUixFQUFtQixhQUFuQixFQUFrQyxLQUFLLENBQXZDLENBQVY7O0VBQ0EyYyxVQUFVLENBQUMsQ0FBQy9oQixDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDZ0YsU0FBUixFQUFtQixvQkFBbkIsRUFBeUMsS0FBSyxDQUE5QyxDQUFWOztFQUNBMmMsVUFBVSxDQUFDLENBQUM3akIsWUFBWSxDQUFDOGpCLFdBQWIsQ0FBeUIsR0FBekIsQ0FBRCxDQUFELEVBQWtDNWhCLENBQUMsQ0FBQ2dGLFNBQXBDLEVBQStDLFlBQS9DLEVBQTZELElBQTdELENBQVY7O0VBQ0EsT0FBTzJjLFVBQVUsQ0FBQyxDQUFDamlCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0E3d0lPLENBNndJTHZCLGVBQWUsV0E3d0lWLENBQVI7O0FBOHdJQW9qQixPQUFPLFdBQVAsR0FBa0IvaEIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyICR1c2VyQ29uc3QgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9Vc2VyQ29uc3RcIik7XG52YXIgJHRvb2xzID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvVG9vbHNcIik7XG52YXIgJGF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0F1ZGlvTWFuYWdlclwiKTtcbnZhciAkYm1zTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0Jtc01hbmFnZXJcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICR0aXBNYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvVGlwTWFuYWdlclwiKTtcbnZhciAkdXNlck1hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9Vc2VyTWFuYWdlclwiKTtcbnZhciAkbGltaXRSZXBlYXQgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9MaW1pdFJlcGVhdFwiKTtcbnZhciAkdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9VdGlsc1wiKTtcbnZhciAkc2h1U2h1Q29uc3QgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9TaHVTaHVDb25zdFwiKTtcbnZhciAkbG9jYWxTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9Mb2NhbFN0b3JhZ2VDb25zdFwiKTtcbnZhciAkbG9jYWxTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL0xvY2FsU3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJG1lbW9yeVN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuLi8uLi9zY3JpcHRzL01lbW9yeVN0b3JhZ2VDb25zdFwiKTtcbnZhciAkbWVtb3J5U3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9NZW1vcnlTdG9yYWdlTWFuYWdlclwiKTtcbnZhciAkYXNzZXRNYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvQXNzZXRNYW5hZ2VyXCIpO1xudmFyICRwb3B1cENvbnN0ID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvUG9wdXBDb25zdFwiKTtcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4uLy4uL3NjcmlwdHMvUG9wdXBNYW5hZ2VyXCIpO1xudmFyICR0b2FzdE1hbmFnZXIgPSByZXF1aXJlKFwiLi4vLi4vc2NyaXB0cy9Ub2FzdE1hbmFnZXJcIik7XG52YXIgJGJyYWluTGV2ZWxCYXNlID0gcmVxdWlyZShcIi4vQnJhaW5MZXZlbEJhc2VcIik7XG52YXIgJHBvb2xNZ3IgPSByZXF1aXJlKFwiLi9Qb29sTWdyXCIpO1xudmFyICRsZXZlbF8yNDk2NjdfYnVsbGRvemVyID0gcmVxdWlyZShcIi4vTGV2ZWwtMjQ5NjY3X2J1bGxkb3plclwiKTtcbnZhciAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZyA9IHJlcXVpcmUoXCIuL0xldmVsLTI0OTY2N19idXNDb25maWdcIik7XG52YXIgJGxldmVsXzI0OTY2N19jYXJJdGVtID0gcmVxdWlyZShcIi4vTGV2ZWwtMjQ5NjY3X2Nhckl0ZW1cIik7XG52YXIgJGxldmVsXzI0OTY2N19jYXJwYXJrID0gcmVxdWlyZShcIi4vTGV2ZWwtMjQ5NjY3X2NhcnBhcmtcIik7XG52YXIgJGxldmVsXzI0OTY2N19jYXJTcXVhcmUgPSByZXF1aXJlKFwiLi9MZXZlbC0yNDk2NjdfY2FyU3F1YXJlXCIpO1xudmFyICRsZXZlbF8yNDk2NjdfY2hhaW4gPSByZXF1aXJlKFwiLi9MZXZlbC0yNDk2NjdfY2hhaW5cIik7XG52YXIgJGxldmVsXzI0OTY2N19rZXkgPSByZXF1aXJlKFwiLi9MZXZlbC0yNDk2Njdfa2V5XCIpO1xudmFyICRsZXZlbF8yNDk2Njdfb2JsaXF1ZSA9IHJlcXVpcmUoXCIuL0xldmVsLTI0OTY2N19vYmxpcXVlXCIpO1xudmFyICRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbSA9IHJlcXVpcmUoXCIuL0xldmVsLTI0OTY2N19wZXJzb25JdGVtXCIpO1xudmFyICRsZXZlbF8yNDk2NjdfdHVybnRhYmxlID0gcmVxdWlyZShcIi4vTGV2ZWwtMjQ5NjY3X3R1cm50YWJsZVwiKTtcbnZhciAkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi9MZXZlbC0yNDk2NjdfdVRyYW5zcG9ydFwiKTtcbnZhciAkbW90aW9uVHJhaWwgPSByZXF1aXJlKFwiLi9Nb3Rpb25UcmFpbFwiKTtcbnZhciBqID0gY2MuX2RlY29yYXRvcjtcbnZhciBVID0gai5jY2NsYXNzO1xudmFyIHogPSBqLnByb3BlcnR5O1xudmFyIEggPSAoZnVuY3Rpb24odCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmlzRGVidWcgPSAhMTtcbiAgICAgICAgZS5ib3VuZGFyeSA9IDc1MDtcbiAgICAgICAgZS5pc1dhdGVyTW9kZSA9ICExO1xuICAgICAgICBlLmlzSGlnaFNwZWVkUmFpbHdheSA9ICExO1xuICAgICAgICBlLmNhclJvb3QgPSBudWxsO1xuICAgICAgICBlLmNvbG9yVHlwZUFtb3VudCA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLmNvbG9yRGVzLmxlbmd0aDtcbiAgICAgICAgZS5yb2FkUG9pbnQwID0gbnVsbDtcbiAgICAgICAgZS5yb2FkUG9pbnQxID0gbnVsbDtcbiAgICAgICAgZS50dXJudGFibGVDYXJBcnIgPSBbXTtcbiAgICAgICAgZS50cmFuc3BvcnRBbW91bnQgPSBudWxsO1xuICAgICAgICBlLnRyYW5zcG9ydENhckFyciA9IFtdO1xuICAgICAgICBlLmxhc3RDYXIgPSBudWxsO1xuICAgICAgICBlLm9sZFNvcnRBbW91bnQgPSAwO1xuICAgICAgICBlLmd1aWRlTm9kZXMgPSBbXTtcbiAgICAgICAgZS5ndWlkZVRleHQgPSBbXG4gICAgICAgICAgICBcIuaxvei9puS8muacneedgOeureWktOaWueWQkeenu+WKqFwiLFxuICAgICAgICAgICAgXCLlpKflt7Tovablj6/ku6Xovb0xMOS4quWQjOiJsuWwj+S6ulwiLFxuICAgICAgICAgICAgXCLlsI/lt7Tlo6vlj6/ku6Xovb025Liq5ZCM6Imy5bCP5Lq6XCIsXG4gICAgICAgICAgICBcIui9v+i9puWPr+S7pei9vTTkuKrlkIzoibLlsI/kurpcIlxuICAgICAgICBdO1xuICAgICAgICBlLmN1cnJlbnRHdWlkZU5vZGUgPSBudWxsO1xuICAgICAgICBlLmd1aWRlZE5vZGVzID0gW107XG4gICAgICAgIGUucG9vbE1nciA9IG5ldyAkcG9vbE1nci5kZWZhdWx0KCk7XG4gICAgICAgIGUuc29ydENvbG9yX25ldyA9IFtdO1xuICAgICAgICBlLmxldmVsRGF0YUpTT04gPSB7fTtcbiAgICAgICAgZS5wYXJraW5nTm9kZXMgPSBbXTtcbiAgICAgICAgZS5iZXR3ZWVuMl80Q2FyQXJyID0gW107XG4gICAgICAgIGUuaGlnaFNwZWVkUmFpbFNwZWVkID0gNjAwO1xuICAgICAgICBlLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICExO1xuICAgICAgICBlLnRyYW5zcG9ydFNwZWVkID0gNTA7XG4gICAgICAgIGUuY29sb3JQZXJzb25BcnIgPSBbXTtcbiAgICAgICAgZS51bmxvY2tQYXJraW5nVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgZS5jYXJwYXJrSW5nID0gITE7XG4gICAgICAgIGUuaXNSb3RhdGVDcmVhdGUgPSAhMTtcbiAgICAgICAgZS5tb3ZlQ2FyQW1vdW50ID0gMDtcbiAgICAgICAgZS5hbGxQZXJzb25BbW91bnQgPSAwO1xuICAgICAgICBlLmFsbFBlcnNvbkFtb3VudDIgPSAwO1xuICAgICAgICBlLmV4dHJhV2VpZ2h0Q29uc3QgPSAwO1xuICAgICAgICBlLmV4dHJhV2VpZ2h0ID0gW107XG4gICAgICAgIGUuY2FyV2VpZ2h0ID0gW107XG4gICAgICAgIGUucGFya2luZ1dlaWdodCA9IFtdO1xuICAgICAgICBlLnNvcnRXZWlnaHQgPSBbXTtcbiAgICAgICAgZS5hbGxXZWlnaHQgPSBbXTtcbiAgICAgICAgZS5jb2xvclBlcnNvbkFtb3VudEFyciA9IFtdO1xuICAgICAgICBlLmNvbG9yUGVyc29uQW1vdW50QXJySW5kZXggPSBbXTtcbiAgICAgICAgZS5jb2xvclBlcnNvbkluZGV4QXJyID0gW107XG4gICAgICAgIGUudWlTaG93UGVyc29uQW1vdW50ID0gMjA7XG4gICAgICAgIGUuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50ID0gW107XG4gICAgICAgIGUuc29ydFBlcnNvbk5vZGVzID0gW107XG4gICAgICAgIGUudGltZXMgPSAwO1xuICAgICAgICBlLmlzQ2FuU3RhcnRDbGljayA9ICExO1xuICAgICAgICBlLmlzQ2hlY2sgPSAhMTtcbiAgICAgICAgZS5pc0ZhaWwgPSAhMTtcbiAgICAgICAgZS5pc1dpbiA9ICExO1xuICAgICAgICBlLnBlcnNvblNwZWVkID0gMTIwMDtcbiAgICAgICAgZS5wb2xpY2VJbmRleCA9IDA7XG4gICAgICAgIGUuZ29sZEluZGV4ID0gMDtcbiAgICAgICAgZS5wb2xpY2VTa2luTmFtZSA9IFwiYVwiO1xuICAgICAgICBlLmdvbGRTa2luTmFtZSA9IFwiYVwiO1xuICAgICAgICBlLnBvbGljZUluZGV4U2VhdCA9IDA7XG4gICAgICAgIGUuZ29sZEluZGV4U2VhdCA9IDA7XG4gICAgICAgIGUuaXNSZXZpdmVBbW91bnQgPSAwO1xuICAgICAgICBlLmxhc3RFeHRyYUluZGV4QXJyID0gW107XG4gICAgICAgIGUucmFuZG9tQ29sb3JBcnIgPSBbXTtcbiAgICAgICAgZS5yYW5kb21Db2xvck51bSA9IFtdO1xuICAgICAgICBlLnBhdGhBcnIgPSBbXTtcbiAgICAgICAgZS5jYXJJbmRleCA9IFtdO1xuICAgICAgICBlLmNhck5vZGVBcnIgPSBbXTtcbiAgICAgICAgZS5jYXJBbGxBbW91bnQgPSAwO1xuICAgICAgICBlLndlaWdodExpbWl0SW5kZXggPSAwO1xuICAgICAgICBlLmxvY2FsRGF0YSA9IHt9O1xuICAgICAgICBlLnJldml2ZUFyciA9IFtdO1xuICAgICAgICBlLmZpcnN0U29ydEluZGV4QXJyID0gW107XG4gICAgICAgIGUuZmlyc3RTb3J0QW1vdW50QXJyID0gW107XG4gICAgICAgIGUuaXNTb3J0aW5nID0gITE7XG4gICAgICAgIGUuaXNTb3J0QW5pbSA9ICExO1xuICAgICAgICBlLmlzUmVtb3ZlID0gITE7XG4gICAgICAgIGUudGlwUmVtb3ZlID0gbnVsbDtcbiAgICAgICAgZS5yZW1vdmVQcm9wVXNpbmcgPSAhMTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5jaGFuZ2VCZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNXYXRlck1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hpZ2hTcGVlZFJhaWx3YXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpIHx8IDEpID4gNTAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ICU9IDUwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuYmcud2lkdGggPSAxZTQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA+PSA0MSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuZGljdC5iZy5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTQsIDIwNSwgMTM2KSksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwicHJlZmFiL21hcC9TYW5kQmdcIiwgY2MuUHJlZmFiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkgOiBbMywgM11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5iZy5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwicHJlZmFiL21hcC9TYW5kRG9vclwiLCBjYy5QcmVmYWIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmRvb3IuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmRvb3IuY2hpbGRyZW5bMF0uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZG9vci5jaGlsZHJlblsxXS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5kb29yLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+PSAzMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuYmcuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU0LCAyMDUsIDEzNikpLCBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvbWFwL1Nub3dCZ1wiLCBjYy5QcmVmYWIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5iZy5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwicHJlZmFiL21hcC9Tbm93RG9vclwiLCBjYy5QcmVmYWIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmRvb3IuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmRvb3IuY2hpbGRyZW5bMF0uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZG9vci5jaGlsZHJlblsxXS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5kb29yLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKG8pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+PSAyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuYmcuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjI3LCAxOTYsIDE2MykpLCBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvbWFwL0Rvb3JZZWxsb3dcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuYmcuYWRkQ2hpbGQoY2MuaW5zdGFudGlhdGUoaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInByZWZhYi9tYXAvSG91c2VZZWxsb3dcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5kb29yLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5kb29yLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5kb29yLmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmRvb3IuY2hpbGRyZW5bMV0uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIum7hOiJsuiDjOaZr1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuYmcuY29sb3IgPSBuZXcgY2MuQ29sb3IoMTYwLCAxOTMsIDEyMikpLCBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvbWFwL0dyYXNzQmdcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5iZy5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwicHJlZmFiL21hcC9HcmFzc0Rvb3JcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZG9vci5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZG9vci5jaGlsZHJlblswXS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5kb29yLmNoaWxkcmVuWzFdLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmRvb3IuYWRkQ2hpbGQoY2MuaW5zdGFudGlhdGUoYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUNhclBhcmtpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJ0ZXh0dXJlL3ZpcFwiLCBjYy5UZXh0dXJlMkQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh0ID0gcy5zZW50KCksIG4gPSAwOyBuIDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bbl0pLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSAzNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5saW5lSGVpZ2h0ID0gNDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLndpZHRoID0gOTApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikub3BhY2l0eSA9IDIwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInByZWZhYi9pdGVtL3VubG9ja19wYWNrXCIsIGNjLlByZWZhYildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAobyA9IGNjLmluc3RhbnRpYXRlKGUpKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wYXJraW5nUm9vdC5wYXJlbnQuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FyZEFtb3VudCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5VbmxvY2tQYXJraW5nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChvLmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG8uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiArICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlVubG9ja1BhcmtpbmcpKSwgWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwidGV4dHVyZS9sb2NrXCIsIGNjLlRleHR1cmUyRCldKSA6IFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChyID0gcy5zZW50KCksIG4gPSAwOyBuIDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bbl0pLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUocikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwidGV4dHVyZS9sb2NrXCIsIGNjLlRleHR1cmUyRCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHIgPSBzLnNlbnQoKSwgbiA9IDA7IG4gPCB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbltuXSkub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdLmdldENoaWxkQnlOYW1lKFwiZW1wdHlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5TcHJpdGVGcmFtZSh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ub24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0b2FzdE1hbmFnZXIuZGVmYXVsdC5zaG93KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcIuWPr+S7peino+mUgeS4gOS4quaWsOeahOWBnOi9puS9jVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlVW5sb2NrUGFya2luZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuVW5sb2NrUGFya2luZykgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50KSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5kaWN0LnBhcmtpbmdSb290LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInVubG9ja19wYWNrXCIpLmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5wYXJraW5nUm9vdC5wYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInVubG9ja19wYWNrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdCksIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInRleHR1cmUvbG9ja1wiLCBjYy5UZXh0dXJlMkQpXSkgOiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobyA9IG4uc2VudCgpLCBpID0gMDsgaSA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW2ldKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKG8pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5wYXJraW5nUm9vdC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tfcGFja1wiKS5hY3RpdmUgPSAhMSksIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInRleHR1cmUvbG9ja1wiLCBjYy5UZXh0dXJlMkQpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobyA9IG4uc2VudCgpLCBpID0gMDsgaSA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW2ldKS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKG8pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wYXJraW5nUm9vdC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tfcGFja1wiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJ0ZXh0dXJlL3ZpZGVvXCIsIGNjLlRleHR1cmUyRCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG8gPSBuLnNlbnQoKSwgaSA9IDA7IGkgPCB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbltpXSkub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShvKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VOb2RlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3BpbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLmluY2x1ZGVzKFwiaW9zXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNIaWdoU3BlZWRSYWlsd2F5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5kaWN0LmRvb3IuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5kb29yLmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmRvb3JPdXRzaWRlLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5kb29yMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmRvb3IyLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmJvYXJkICYmICh0aGlzLmRpY3QuYm9hcmQuYWN0aXZlID0gITEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19vYmxpcXVlLmRlZmF1bHQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclJvb3RCZzIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmNhclJvb3RCZzIuY2hpbGRyZW5bMF0ueSAtPSA1MCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IDA7IGUgPCB0aGlzLmRpY3QucGVyc29uUG9zUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGUrK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5bZV0ueSArPSAxNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25Sb290LnNldFNpYmxpbmdJbmRleCgxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmRvb3Iuc2V0U2libGluZ0luZGV4KDEwMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnR0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RlYnVnID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLmluY2x1ZGVzKFwiZ2dcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGVidWcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmZsYWcuaW5jbHVkZXMoXCJpb3NcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGVidWcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9hZFBvaW50MCA9IHRoaXMuZGljdC5yb2FkLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtMjI1MCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2FkUG9pbnQxID0gdGhpcy5kaWN0LnJvYWQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDIyNTAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25BbW91bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDMyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvbkFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmVuYWJsZUJvbGQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25BbW91bnQucGFyZW50LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSAxNztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25BbW91bnQucGFyZW50LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZW5hYmxlQm9sZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvbkFtb3VudC5wYXJlbnQueSAtPSAxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25BbW91bnQucGFyZW50LnpJbmRleCA9IDFlMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FyUGFya2luZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhV2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RXh0cmFJbmRleEFyciA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFya2luZ1dlaWdodCA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFdlaWdodCA9IG5ldyBBcnJheSh0aGlzLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkluZGV4QXJyID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQXJyID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbERhdGFKU09OID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSgkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5sZXZlbERhdGFbdGhpcy5sZXZlbElEXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbGxpc2lvbk1hbmFnZXIoITAsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyUm9vdCA9IHRoaXMuZGljdC5jYXJSb290O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNIaWdoU3BlZWRSYWlsd2F5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmZlbmNlLnggLT0gNDU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5mZW5jZS54IC09IDE3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5idG5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmJ0bnMuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGl0U3BpbmUuc2NhbGUgPSAwLjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMudXBkYXRlUGVyc29uUHJlZmFiKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBvLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS5sZW5ndGggPSAyNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLmhlYWRXaWR0aCA9IDM1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC50YWlsR2FzLmdldENvbXBvbmVudCgkbW90aW9uVHJhaWwuZGVmYXVsdCkudGFpbFdpZHRoID0gMjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KS5oZWFkT3BhY2l0eSA9IDIzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5nZXRDb21wb25lbnQoJG1vdGlvblRyYWlsLmRlZmF1bHQpLnRhaWxPcGFjaXR5ID0gNDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LmhhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaCh0aGlzLmRpY3QuY2FyUm9vdC5jaGlsZHJlblszXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGVzLnB1c2godGhpcy5kaWN0LmNhclJvb3QuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGVOb2Rlcy5wdXNoKHRoaXMuZGljdC5jYXJSb290LmNoaWxkcmVuWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZXMucHVzaCh0aGlzLmRpY3QuY2FyUm9vdC5jaGlsZHJlblsyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3VpZGVOb2RlID0gdGhpcy5ndWlkZU5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZFBvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmluaXRUVCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgby5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuaW5pdElPUygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgby5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuaW5pdFNoaXBNb2RlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBvLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdElPUyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZmxhZy5pbmNsdWRlcyhcImlvc1wiKSB8fCB0aGlzLmlzSGlnaFNwZWVkUmFpbHdheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QucGVyc29uQW1vdW50LnBhcmVudC5hY3RpdmUgPSAhMSksIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiaW9zQnVuZGxlXCIsIFwicHJlZmFiL01hcmtcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gY2MuaW5zdGFudGlhdGUodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZWxlbWVudC5hZGRDaGlsZChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25BbW91bnQgPSBlLmdldENoaWxkQnlOYW1lKFwicGVyc29uQW1vdW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvbkFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLmFsbFBlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImlvc0J1bmRsZVwiLCBcInByZWZhYi9Sb29mXCIsIGNjLlByZWZhYildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gY2MuaW5zdGFudGlhdGUobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZG9vci5hZGRDaGlsZChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oaWdoU3BlZWRSYWlsMlJvb3QgPSBpLmdldENoaWxkQnlOYW1lKFwiaGlnaFNwZWVkUmFpbDJSb290XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiaW9zQnVuZGxlXCIsIFwicHJlZmFiL3BlcnNvblBvc1Jvb3RcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IHMuc2VudCgpLCBuID0gY2MuaW5zdGFudGlhdGUociksIGEgPSAwOyBhIDwgdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW4ubGVuZ3RoOyBhKytcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNoaWxkcmVuW2FdLnBvc2l0aW9uID0gbi5jaGlsZHJlblthXS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRTaGlwTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1dhdGVyTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QucGVyc29uQW1vdW50LnBhcmVudC5hY3RpdmUgPSAhMSksIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiaW9zQnVuZGxlXCIsIFwicHJlZmFiL01hcmtcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gby5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gY2MuaW5zdGFudGlhdGUodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZWxlbWVudC5hZGRDaGlsZChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25BbW91bnQgPSBlLmdldENoaWxkQnlOYW1lKFwicGVyc29uQW1vdW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvbkFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLmFsbFBlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVBlcnNvblByZWZhYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImYyNzU5N1wiICE9IHRoaXMuZm9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjA2MVwiKS5kZXN0cm95KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCIwNjJcIikuZGVzdHJveSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMDYzXCIpLmRlc3Ryb3koKSwgWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJ0dEJ1bmRsZVwiLCBcInByZWZhYi9ibG9ja01hbi8wNjFcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gaS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJ0dEJ1bmRsZVwiLCBcInByZWZhYi9ibG9ja01hbi8wNjJcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBpLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcInR0QnVuZGxlXCIsIFwicHJlZmFiL2Jsb2NrTWFuLzA2M1wiLCBjYy5QcmVmYWIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGkuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclByZWZhYi5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZSh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUHJlZmFiLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJQcmVmYWIuYWRkQ2hpbGQoY2MuaW5zdGFudGlhdGUobykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dhdGVyTW9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25QcmVmYWIuc2NhbGUgPSAwLjk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblByZWZhYi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuYWRkQ29pbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVRyYW5zcG9ydEFtb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoby5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnRyYW5zcG9ydEFtb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmZsYWcuaW5jbHVkZXMoXCJpb3NcIikgfHwgdGhpcy5pc0hpZ2hTcGVlZFJhaWx3YXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiaW9zQnVuZGxlXCIsIFwicHJlZmFiL1RyYW5zcG9ydEFtb3VudFJvb3RcIiwgY2MuUHJlZmFiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gby5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gY2MuaW5zdGFudGlhdGUodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QucmlnaHQuYWRkQ2hpbGQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudHJhbnNwb3J0QW1vdW50ID0gZS5nZXRDaGlsZEJ5TmFtZShcInRyYW5zcG9ydEFtb3VudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudHJhbnNwb3J0QW1vdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHRoaXMudHJhbnNwb3J0Q2FyQXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZFR1cm50YWJsZUNhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kaWN0LnR1cm50YWJsZVJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMudHVybnRhYmxlQ2FyQXJyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuZGljdC50dXJudGFibGVSb290LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmRpY3QudHVybnRhYmxlUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3R1cm50YWJsZS5kZWZhdWx0KS5pbml0KHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybnRhYmxlQ2FyQXJyID0gdGhpcy50dXJudGFibGVDYXJBcnIuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3R1cm50YWJsZS5kZWZhdWx0KS5nZXRDYXJzKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVUdXJudGFibGVDYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy50dXJudGFibGVDYXJBcnIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmRpY3QudHVybnRhYmxlUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmRpY3QudHVybnRhYmxlUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgIHRoaXMudHVybnRhYmxlQ2FyQXJyID0gdGhpcy50dXJudGFibGVDYXJBcnIuY29uY2F0KFxuICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdHVybnRhYmxlLmRlZmF1bHQpLmdldENhcnMoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYWRkVHJhbnNwb3J0Q2FyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5sZXZlbERhdGFKU09OLnRyYW5zcG9ydDtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5kaWN0LnRyYW5zcG9ydFBvcy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuZGljdC50cmFuc3BvcnRQb3MucG9zaXRpb24pO1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmRpY3QuY2FyUm9vdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gdFtpXTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCIwMlwiICsgcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJSb290LmFkZENoaWxkKG4pO1xuICAgICAgICAgICAgICAgIG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1RyYW5zcG9ydENhciA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0Q2FyQXJyLnB1c2gobik7XG4gICAgICAgICAgICAgICAgbi54ID0gMzk3ICsgNzAgKiBpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnkgPSBvLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbi55ID0gby55ICsgMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbi55ID0gby55ICsgMjc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXN0Q2FyID0gdGhpcy50cmFuc3BvcnRDYXJBcnJbdGhpcy50cmFuc3BvcnRDYXJBcnIubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydEFtb3VudCA9IHRoaXMudHJhbnNwb3J0Q2FyQXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJhbnNwb3J0QW1vdW50KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRpbWVyVHJhbnNwb3J0TW92ZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IDEuMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zZXRUcmFuc3BvcnRDYXJNb3ZlKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zZXRUcmFuc3BvcnRDYXJNb3ZlLCB0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldFRyYW5zcG9ydENhck1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc1RyYW5zcG9ydENhck1vdmUgPSAhMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFuc3BvcnRDYXJNb3ZlICYmIHRoaXMuZGljdC5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QubGluZS54IC09IHQgKiB0aGlzLnRyYW5zcG9ydFNwZWVkO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmxpbmUyLnggLT0gdCAqIHRoaXMudHJhbnNwb3J0U3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5kaWN0LmxpbmUueCA8PSAtKDMxNSArIHRoaXMuZGljdC5saW5lLndpZHRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5saW5lLnggPSB0aGlzLmRpY3QubGluZTIueCArIHRoaXMuZGljdC5saW5lLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5saW5lMi54IDw9IC0oMzE1ICsgdGhpcy5kaWN0LmxpbmUud2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LmxpbmUyLnggPSB0aGlzLmRpY3QubGluZS54ICsgdGhpcy5kaWN0LmxpbmUud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy50cmFuc3BvcnRDYXJBcnIubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnRyYW5zcG9ydENhckFycltlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gby54IC0gdCAqIHRoaXMudHJhbnNwb3J0U3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8PSAtMzUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldE1heFhUcmFuc3BvcnRDYXIoKS54ICsgNzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPD0gMzk3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAzOTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgby54ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKG4pIHt9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldE1heFhUcmFuc3BvcnRDYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLnRyYW5zcG9ydENhckFyclswXTtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLnRyYW5zcG9ydENhckFyci5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnRyYW5zcG9ydENhckFycltlXTtcbiAgICAgICAgICAgIGlmIChvLnggPiB0LngpIHtcbiAgICAgICAgICAgICAgICB0ID0gbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZENvaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc0NvaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZENvaW5cIiksIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInByZWZhYi9jb2luL2NvaW5Sb290MFwiLCBjYy5QcmVmYWIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvY29pbi9jb2luUm9vdDFcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvY29pbi9jb2luUm9vdDJcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvY29pbi9jb2luUm9vdDExXCIsIGNjLlByZWZhYildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJnYW1lQnVuZGxlXCIsIFwicHJlZmFiL2NvaW4vY29pblJvb3QxM1wiLCBjYy5QcmVmYWIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgciA9IHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKG4gPSBjYy5pbnN0YW50aWF0ZSh0KSkubmFtZSA9IFwiY29pblJvb3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhID0gY2MuaW5zdGFudGlhdGUoZSkpLm5hbWUgPSBcImNvaW5Sb290XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAoYyA9IGNjLmluc3RhbnRpYXRlKG8pKS5uYW1lID0gXCJjb2luUm9vdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGwgPSBjYy5pbnN0YW50aWF0ZShpKSkubmFtZSA9IFwiY29pblJvb3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIChoID0gY2MuaW5zdGFudGlhdGUocikpLm5hbWUgPSBcImNvaW5Sb290XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMDYxXCIpLmFkZENoaWxkKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjA2MlwiKS5hZGRDaGlsZChhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCIwNjNcIikuYWRkQ2hpbGQoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjExNjFcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMTE2MVwiKS5hZGRDaGlsZChsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMTM2M1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCIxMzYzXCIpLmFkZENoaWxkKGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0VFQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzV2F0ZXJNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInByZWZhYi9pdGVtL0xpbmVcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yb2FkLmFkZENoaWxkKGNjLmluc3RhbnRpYXRlKHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZmVuY2UueSArPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW5kUG9zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gY2MudjIoMCwgLTIwKTtcbiAgICAgICAgaWYgKFwiMDUzLTFcIiA9PSB0aGlzLmN1cnJlbnRHdWlkZU5vZGUubmFtZSkge1xuICAgICAgICAgICAgdCA9IGNjLnYyKC0xNSwgLTM1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcIjA1My0wXCIgPT0gdGhpcy5jdXJyZW50R3VpZGVOb2RlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0ID0gY2MudjIoMTUsIC0zNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcIjA0Mi0wXCIgPT0gdGhpcy5jdXJyZW50R3VpZGVOb2RlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IGNjLnYyKDE1LCAtNTApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBjYy52MigtMTUsIC0yMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gdGhpcy5jdXJyZW50R3VpZGVOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0KTtcbiAgICAgICAgdmFyIG8gPSB0aGlzLmd1aWRlTm9kZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRHdWlkZU5vZGUpO1xuICAgICAgICB0aGlzLmRpY3QuaGFuZFRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmd1aWRlVGV4dFtvXTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmRpY3QuaGFuZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZSk7XG4gICAgICAgIHRoaXMuZGljdC5oYW5kLnBvc2l0aW9uID0gaTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYW5nZU5vZGVOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gY2MuZmluZChcImdhbWUvZWxlbWVudC9jYXJSb290XCIsIHRoaXMubm9kZSk7XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5jaGlsZHJlbi5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdC5jaGlsZHJlbltlXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gITE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNyZWF0ZVNwaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICBpZiAoIXQuZ2V0Q2hpbGRCeU5hbWUoZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IG5ldyBjYy5Ob2RlKGUpO1xuICAgICAgICAgICAgICAgIHQuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgICAgICAgby5wb3NpdGlvbiA9IGNjLnYyKDAsIDFlNSk7XG4gICAgICAgICAgICAgICAgby5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoY2MuZmluZChcImdhbWVcIiwgdGhpcy5ub2RlKSwgXCJmMjg3NDkuamllc3VvPWppZXN1b1wiKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYW5nZUJ1bGxkb3plciA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiYnVsbGRvemVyXCIpKTtcbiAgICAgICAgdGhpcy5kaWN0LmJ1bGxkb3plclJvb3QuYWRkQ2hpbGQoZSk7XG4gICAgICAgIGUucG9zaXRpb24gPSB0LnBvc2l0aW9uO1xuICAgICAgICB2YXIgbyA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfYnVsbGRvemVyLmRlZmF1bHQpLmJ1bGxkb3plclNwZWVkO1xuICAgICAgICB2YXIgaSA9IGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDE1MDApKTtcbiAgICAgICAgdmFyIHIgPSBlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKTtcbiAgICAgICAgdC5kZXN0cm95KCk7XG4gICAgICAgIGNjLnR3ZWVuKGUpXG4gICAgICAgICAgICAudG8oMTUwMCAvIG8sIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hhY2tBY3Rpb24gPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZhciBvID0gY2MubW92ZUJ5KHQsIGUsIGUpO1xuICAgICAgICB2YXIgaSA9IGNjLm1vdmVCeSh0LCAtZSwgLWUpO1xuICAgICAgICB2YXIgciA9IGNjLm1vdmVCeSgwLjggKiB0LCAwLjggKiBlLCAwLjggKiBlKTtcbiAgICAgICAgdmFyIG4gPSBjYy5tb3ZlQnkoMC44ICogdCwgMC44ICogLWUsIDAuOCAqIC1lKTtcbiAgICAgICAgdmFyIGEgPSBjYy5tb3ZlQnkoMC42ICogdCwgMC42ICogZSwgMC42ICogZSk7XG4gICAgICAgIHZhciBzID0gY2MubW92ZUJ5KDAuNiAqIHQsIDAuNiAqIC1lLCAwLjYgKiAtZSk7XG4gICAgICAgIHZhciBjID0gY2MubW92ZUJ5KDAuNCAqIHQsIDAuNCAqIGUsIDAuNCAqIGUpO1xuICAgICAgICB2YXIgbCA9IGNjLm1vdmVCeSgwLjQgKiB0LCAwLjQgKiAtZSwgMC40ICogLWUpO1xuICAgICAgICB2YXIgaCA9IGNjLm1vdmVCeSgwLjIgKiB0LCAwLjIgKiBlLCAwLjIgKiBlKTtcbiAgICAgICAgdmFyIHAgPSBjYy5tb3ZlQnkoMC4yICogdCwgMC4yICogLWUsIDAuMiAqIC1lKTtcbiAgICAgICAgcmV0dXJuIGNjLnNlcXVlbmNlKG8sIGksIHIsIG4sIGEsIHMsIGMsIGwsIGgsIHApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hhbmdlQ2FyID0gZnVuY3Rpb24odCwgZSwgbywgaSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XG4gICAgICAgICAgICBvID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgIHZhciBnO1xuICAgICAgICAgICAgdmFyIG0gPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzUmVhZHlEZXN0cm95ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNvbG9ySW1nTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZSAmJiAoaSA9IFwiMTIxM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZUNhci1jYXJOYW1lXCIsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShpKSkpLnBhcmtpbmcgPSB0LnBhcmtpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzUmljaENhciA9IHQuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuaXNSaWNoQ2FyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjEyMjNcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNQb2xpY2VDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMTAyXCIgKyBuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzUmljaENhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID0gMSksIChhID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjExMlwiICsgbikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1RyYW1jYXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoNCAhPSBlICYmIDUgIT0gZSkgfHwgMiAhPSBvID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDQgIT0gZSAmJiA1ICE9IGUpIHx8IDEgIT0gbyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCIxMzJcIiArIG4pKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmluc3RhbnRpYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjEzXCIgKyBlICsgbiArIFwiLTFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmluc3RhbnRpYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjEzXCIgKyBlICsgbiArIFwiLTBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUoXCIwMlwiICsgbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVHJhbWNhciA9IHQuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICApLmlzVHJhbWNhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS50cmFtY2FyUG9zSW5kZXggPSB0LmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgKS50cmFtY2FyUG9zSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVHJhbWNhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5vdGhlckNhck5vZGUgPSB0aGlzLmdldE90aGVyQ2FyQnlEaXN0YW5jZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5JblJvYWRSaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLkluUm9hZExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FyV2VpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPSB0LmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgKS5jYXJTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhclJvb3QuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubWdyID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jb2xvckltZ05hbWUgPSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmRpckltZ05hbWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gdC5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICkuY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUcmFtY2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoNCA9PSBlIHx8IDUgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBjYy52Mih0LngsIHQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IGEuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIHQuaGVpZ2h0IC8gbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBhLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnBvc2l0aW9uID0gY2MudjIoYy54LCBjLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBjYy52Mih0LngsIHQueSArIHQuaGVpZ2h0IC8gbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5PbkJvdHRvbUxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnBvc2l0aW9uID0gY2MudjIodC54IC0gdC53aWR0aCAvIGwsIHQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuT25Cb3R0b21SaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wb3NpdGlvbiA9IGNjLnYyKHQueCArIHQud2lkdGggLyBsLCB0LnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09IG8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGggPSB0aGlzLmRpY3Qucm9hZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yb2FkLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEucG9zaXRpb24gPSBjYy52Mih0LnggKyB0LndpZHRoIC8gbCwgYy55KSkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChoID0gdGhpcy5kaWN0LnJvYWQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Qucm9hZC5wb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYyA9IGEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhLnBvc2l0aW9uID0gY2MudjIodC54IC0gdC53aWR0aCAvIGwsIGMueSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1BhcmtpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBhLnBhcmtpbmcuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC0xNTUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wb3NpdGlvbiA9IGNjLnYyKGMueCwgYy55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBcIlwiICsgciArIGUgKyBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IFwidGV4dHVyZS9cIiArIHRoaXMuZm9sZGVyICsgXCIvXCIgKyB0aGlzLmZvbGRlciArIFwiX1wiICsgdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWlsR2FzU3BpbmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5wb29sTWdyLnB1dCh0LmdldENoaWxkQnlOYW1lKFwidGFpbEdhc1NwaW5lXCIpLCBcInRhaWxHYXNTcGluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWlsR2FzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWlsR2FzXCIpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1R1cm50YWJsZUNhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHQucGFyZW50LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3R1cm50YWJsZS5kZWZhdWx0KS5jYXJzLmluZGV4T2YodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQucGFyZW50LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3R1cm50YWJsZS5kZWZhdWx0KS5jYXJzLnNwbGljZShvLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS51cGRhdGVUdXJudGFibGVDYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubmV4dENhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAmJiBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuTm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoUykge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5nZXRDaGlsZEJ5TmFtZShcImtleVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGNjLmluc3RhbnRpYXRlKHQuZ2V0Q2hpbGRCeU5hbWUoXCJrZXlcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJrZXlcIikuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2Njdfa2V5LmRlZmF1bHQpLmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbS5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IG4ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihuLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBtLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIucG9zaXRpb24gPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLm5vZGUuYWRkQ2hpbGQocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gcy5zdWIobCkubWFnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gci5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS41ICogZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byhwIC8gODAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbi5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS41ICogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ucnVuQWN0aW9uKG0uc2hhY2tBY3Rpb24oMC4xLCAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBhLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyMjUwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBhLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5JblJvYWRSaWdodCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSW5Sb2FkTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gYS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGEucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNGaXJlRW5naW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGEucGFya2luZy5nZXRDaGlsZEJ5TmFtZShcImZpcmVDYXJQb3NcIikucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBhLnBhcmtpbmcuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC0yMjkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBNYXRoLmFicyh2LnggLSBzLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmFkZFRhaWxHYXNTcGluZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byhwIC8gYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnNwZWVkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuV2F0ZXJTcHJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDaGlsZEJ5TmFtZShcInBlbnNodWlcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGEucGFya2luZy5nZXRDaGlsZEJ5TmFtZShcImZpcmVTcGluZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmZpcmVFbmdpbmVMZWF2ZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuR29pbmdQYXJraW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNSaWNoQ2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjExNlwiICsgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVHJhbWNhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uY2hhbmdlQ2FyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEzNlwiICsgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwNlwiICsgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1BhcmtpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IG0uZ2V0V1Bvc0J5Tm9kZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEucGFya2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT0gYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAtMjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDIgPT0gYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYgPSBhLnBhcmtpbmcuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC0zKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYS5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5hbmdsZSA9IC0yNy41OTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ID0gYS5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigzLCAzKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYS5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5hbmdsZSA9IC0yNy41OTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDID0gYS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLlBhcmtpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gQy5zdWIoYS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byhwIC8gYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnNwZWVkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wYXJraW5nLmNhciA9IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0ucHV0VGFpbEdhcyhhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5jaGVja1BlcnNvbighMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1JvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IG0uZGljdC5yb2FkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobS5kaWN0LnJvYWQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgXyA9IGEucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihhLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IE1hdGguYWJzKF8ueSAtIHMueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uYWRkVGFpbEdhc1NwaW5lKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KHAgLyBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuc3BlZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5jb2xsaXNpb24oYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5hZGRUYWlsR2FzU3BpbmUoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMjI1MCAvIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ1BhcmtpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTG9hZE1hbm5lZEltZyhhLCByLCBlLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5PdXRQYXJraW5nID8gWzMsIDJdIDogWzQsIHRoaXMuYWRkTWFubmVkSW1nKGEsIHIsIGUsIG4pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoZCwgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnByZUxvYWRNYW5uZWRJbWcgPSBmdW5jdGlvbih0LCBlLCBvLCBpKSB7XG4gICAgICAgIHZhciByO1xuICAgICAgICB2YXIgbiA9IFwiXCIgKyBlICsgNyArIGk7XG4gICAgICAgIHIgPSBcInRleHR1cmUvXCIgKyB0aGlzLmZvbGRlciArIFwiL1wiICsgdGhpcy5mb2xkZXIgKyBcIl9cIiArIG47XG4gICAgICAgIHRoaXMubG9hZChyKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZE1hbm5lZEltZyA9IGZ1bmN0aW9uKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IFwiXCIgKyBlICsgNyArIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gXCJ0ZXh0dXJlL1wiICsgdGhpcy5mb2xkZXIgKyBcIi9cIiArIHRoaXMuZm9sZGVyICsgXCJfXCIgKyBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmxvYWQocildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ueSA9IC0zOC40NTg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmFkZENoaWxkKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImRpclwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHQsIGZ1bmN0aW9uKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2Mud2Fybih0KSwgbyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZShuZXcgY2MuU3ByaXRlRnJhbWUoaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5maXJlRW5naW5lTGVhdmUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLldhdGVyU3ByYXlMZWF2ZTtcbiAgICAgICAgdmFyIGUgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyMjUwKSk7XG4gICAgICAgIHZhciBvID0gdC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZSk7XG4gICAgICAgIHRoaXMuYWRkVGFpbEdhc1NwaW5lKHQpO1xuICAgICAgICBjYy50d2Vlbih0KVxuICAgICAgICAgICAgLnRvKDIyNTAgLyB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuc3BlZWQsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogb1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB0LnBhcmtpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJlU3BpbmVcIikuZGVzdHJveSgpO1xuICAgICAgICB0LnBhcmtpbmcuY2FyID0gbnVsbDtcbiAgICAgICAgdC5wYXJraW5nLmlzRW1wdHkgPSAhMDtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW4uaW5kZXhPZih0LnBhcmtpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsIGksIHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMucGFya2luZ05vZGVzLnNwbGljZShpIC0gMSwgMCwgdC5wYXJraW5nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleDJcIiwgaSwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldFdQb3NCeU5vZGUgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodC5wb3NpdGlvbik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wdXRUYWlsR2FzID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodC5nZXRDaGlsZEJ5TmFtZShcInRhaWxHYXNcIikpIHtcbiAgICAgICAgICAgIHRoaXMucG9vbE1nci5wdXQodC5nZXRDaGlsZEJ5TmFtZShcInRhaWxHYXNcIiksIFwidGFpbEdhc1wiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5oaXRTcGluZSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB0LmFkZENoaWxkKGUpO1xuICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY29sbGlzaW9uID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZSkge1xuICAgICAgICAgICAgaSA9IHQ7XG4gICAgICAgICAgICByID0gdm9pZCAwO1xuICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW25dO1xuICAgICAgICAgICAgICAgIGlmIChlLmdldENoaWxkQnlOYW1lKFwiZmlyZVNwaW5lXCIpICYmIGUuZ2V0Q2hpbGRCeU5hbWUoXCJmaXJlU3BpbmVcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuaXNFbXB0eSA9ICExO1xuICAgICAgICAgICAgICAgICAgICBpLnBhcmtpbmcgPSBlO1xuICAgICAgICAgICAgICAgICAgICByID0gZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICBzID0gaS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGkucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBvID0gci5nZXRDaGlsZEJ5TmFtZShcImZpcmVDYXJQb3NcIikucG9zaXRpb247XG4gICAgICAgICAgICAgICAgYyA9IHIuY29udmVydFRvV29ybGRTcGFjZUFSKG8pO1xuICAgICAgICAgICAgICAgIGlmIChzLnggPj0gYy54KSB7XG4gICAgICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5JblJvYWRMZWZ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNhcihpLCAxLCAyLCBcIjAxXCIgKyBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArIFwiLTBcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLkluUm9hZFJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNhcihpLCAxLCAxLCBcIjAxXCIgKyBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArIFwiLTFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NhclNxdWFyZS5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NhclNxdWFyZS5kZWZhdWx0KS5jYXJNb3ZlKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X29ibGlxdWUuZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19vYmxpcXVlLmRlZmF1bHQpLmNhck1vdmUodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaSA9IHQ7XG4gICAgICAgICAgICB2YXIgciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMucGFya2luZ05vZGVzW25dO1xuICAgICAgICAgICAgICAgIGlmIChhLmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5pc0VtcHR5ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGkucGFya2luZyA9IGE7XG4gICAgICAgICAgICAgICAgICAgIHIgPSBhO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIHZhciBzID0gaS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGkucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBjID0gci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLTIyOSkpO1xuICAgICAgICAgICAgICAgIGlmIChzLnggPj0gYy54KSB7XG4gICAgICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5JblJvYWRMZWZ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzUmljaENhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lID0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNhcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjExMVwiICsgaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgKyBcIi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNhcihpLCAxLCAyLCBcIjAxXCIgKyBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArIFwiLTBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSW5Sb2FkUmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgPSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTExXCIgKyBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArIFwiLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2FyKGksIDEsIDEsIFwiMDFcIiArIGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5sZW5JbWdOYW1lICsgXCItMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25MZXZlbFJlYWR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZGljdC5wZXJzb25QcmVmYWIuY2hpbGRyZW5bMF1cbiAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAuc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKHNwLlNrZWxldG9uLkFuaW1hdGlvbkNhY2hlTW9kZS5QUklWQVRFX0NBQ0hFKTtcbiAgICAgICAgdGhpcy5pbml0VmlldygpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgIHZhciBkO1xuICAgICAgICAgICAgdmFyIGc7XG4gICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgIHZhciB2O1xuICAgICAgICAgICAgdmFyIHk7XG4gICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgIHZhciBfO1xuICAgICAgICAgICAgdmFyIFM7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIHZhciBOO1xuICAgICAgICAgICAgdmFyIFA7XG4gICAgICAgICAgICB2YXIgeDtcbiAgICAgICAgICAgIHZhciBiO1xuICAgICAgICAgICAgdmFyIFI7XG4gICAgICAgICAgICB2YXIgdztcbiAgICAgICAgICAgIHZhciBPO1xuICAgICAgICAgICAgdmFyIE07XG4gICAgICAgICAgICB2YXIgRSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oRykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoRy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FyU3F1YXJlLmRlZmF1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2NhclNxdWFyZS5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5pdCh0aGlzLmxldmVsRGF0YUpTT04uY2FyU3F1YXJlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19vYmxpcXVlLmRlZmF1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNhclJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X29ibGlxdWUuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluaXQodGhpcy5sZXZlbERhdGFKU09OLmNlbnRlclNxdWFyZSwgdGhpcy5sZXZlbERhdGFKU09OLm9ibGlxdWUsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgdGhpcy5kaWN0LmNhclJvb3QuY2hpbGRyZW4ubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFMgPSB0aGlzLmRpY3QuY2FyUm9vdC5jaGlsZHJlbltiXSkuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5pc1VUcmFuc3BvcnRDYXJfbm9JbiA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUm9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5pdCh0aGlzLmxldmVsRGF0YUpTT04udVRyYW5zcG9ydCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0Lmd1aWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUuZGljdC5ndWlkZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QuYnVsbGRvemVyUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCB0aGlzLmRpY3QuYnVsbGRvemVyUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJidWxsZG96ZXJcIiA9PSAoUyA9IHRoaXMuZGljdC5idWxsZG96ZXJSb290LmNoaWxkcmVuW2JdKS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2J1bGxkb3plci5kZWZhdWx0KS5pbml0KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFR1cm50YWJsZUNhcigpLCB0aGlzLmFkZFRyYW5zcG9ydENhcigpLCBrID0gMDsgayA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbkNvdW50OyBrKytcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChOID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW2tdKS5hY3RpdmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTi5nZXRDaGlsZEJ5TmFtZShcImVtcHR5XCIpLmFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhTi5nZXRDaGlsZEJ5TmFtZShcImZpcmVTcGluZVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKE4uaXNFbXB0eSA9ICEwKSwgdGhpcy5wYXJraW5nTm9kZXMucHVzaChOKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTi5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoTi5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuc2NhbGUgPSAwLjgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgdGhpcy5jYXJSb290LmNoaWxkcmVuQ291bnQ7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOID0gdGhpcy5jYXJSb290LmNoaWxkcmVuW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgdC5sZW5ndGg7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUyA9IHRbYl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOLnggPT0gU1swXSAmJiBOLnkgPT0gU1sxXSAmJiBjb25zb2xlLmVycm9yKFwi5ZCM5LiA5Liq5L2N572u5aSN5Yi25aSa6L6G6L2mXCIsIE4ubmFtZSwgayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5wdXNoKFtOLngsIE4ueV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IHRoaXMuZ2V0TG9jYWwoXCJibGFja0NhclwiKSB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFyciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgayA9IDA7IGsgPCBvLmxlbmd0aDsgaysrXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOID0gb1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhck5vZGVBcnIucHVzaChOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubWdyID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOLmluZGV4SUQgPSBcIlwiICsgaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNVVHJhbnNwb3J0Q2FyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gOTk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9IHRoaXMuZ2V0UGF0aChOKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04uYmxhY2tBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID49IDIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDw9IDQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldHdlZW4yXzRDYXJBcnIucHVzaChOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucGF0aCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RlYnVnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoKHIgPSBuZXcgY2MuTm9kZSgpKS5uYW1lID0gXCJwYXRoXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgaSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoci5jb2xvciA9IGNjLkNvbG9yLldISVRFKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4uYWRkQ2hpbGQociksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoci5wb3NpdGlvbiA9IGNjLnYyKC0xMy4xMDUsIC0yNi4yMSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBlcnNvbkFtb3VudCArPSBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuc2VhdFRvdGFsQW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5jYXJQYXJrUm9vdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgdGhpcy5kaWN0LmNhclBhcmtSb290LmNoaWxkcmVuLmxlbmd0aDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTID0gdGhpcy5kaWN0LmNhclBhcmtSb290LmNoaWxkcmVuW2JdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FycGFyay5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluaXREYXRhKHRoaXMubGV2ZWxEYXRhSlNPTi5jYXJwYXJrW2JdLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHRoaXMubGV2ZWxEYXRhSlNPTi5jYXJwYXJrW2JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAwOyBkIDwgaC5sZW5ndGg7IGQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGhbZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFBlcnNvbkFtb3VudCArPSBuW2ddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxQZXJzb25BbW91bnQyID0gdGhpcy5hbGxQZXJzb25BbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QucGVyc29uQW1vdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHRoaXMuYWxsUGVyc29uQW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiYWxsUGVyc29uQW1vdW50XCIsIHRoaXMuYWxsUGVyc29uQW1vdW50LCB0aGlzLmFsbFBlcnNvbkFtb3VudDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJJRCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWxEYXRhSlNPTi5ibGFja0Ftb3VudCAmJiAhZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXZlbERhdGFKU09OLmJsYWNrQW1vdW50ID49IHRoaXMuYmV0d2VlbjJfNENhckFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IHRoaXMuYmV0d2VlbjJfNENhckFyci5sZW5ndGg7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFMgPSB0aGlzLmJldHdlZW4yXzRDYXJBcnJbYl0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5pc0JsYWNrQ2FyID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2goUy5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhcklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSB0aGlzLmdldFJhbmRvbURpc3RpbmN0RWxlbWVudHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldHdlZW4yXzRDYXJBcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04uYmxhY2tBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IGYubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChTID0gZltiXSkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc0JsYWNrQ2FyID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2goUy5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhcklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsKFwiYmxhY2tDYXJcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy5nZXRMb2NhbChcImNvbG9yQ29uZmlnXCIpIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0yNzM2MSA9PSB0aGlzLmxldmVsSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gWzcsIDQsIDAsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJSYW5kb21Db2xvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCkgfHwgMSkgPj0geSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0geSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEMgPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRDb2xvcl9uZXcgPSAkdG9vbHMuZGVmYXVsdC5zaHVmZmxlQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJGxldmVsXzI0OTY2N19idXNDb25maWcuc29ydENvbG9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65omT5Lmx6aKc6ImyXCIsIHRoaXMuc29ydENvbG9yX25ldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydENvbG9yX25ldyA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLnNvcnRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09IHYubGVuZ3RoIHx8IChDID49IHkgJiYgMCAhPSB5ICYmIEMgPiAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gPSB0aGlzLmxldmVsRGF0YUpTT04uY2FyQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IF8ubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUyA9IF9bYl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tQ29sb3JBcnIucHVzaCh0aGlzLmdldEFyckJ5TGVuKFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XSwgU1syXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmRvbUNvbG9yTnVtW2JdIHx8ICh0aGlzLnJhbmRvbUNvbG9yTnVtW2JdID0gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCB0aGlzLmNhck5vZGVBcnIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTiA9IHRoaXMuY2FyTm9kZUFycltrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUCA9IHRoaXMuZ2V0Q2FyQ29sb3IoaywgXyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1BvbGljZUNhciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFAgPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJDb2xvci5Qb2xpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNSaWNoQ2FyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoUCA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhckNvbG9yLkdvbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnB1c2goUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyQ29sb3JJbWcoTiwgUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04uY2FyV2VpZ2h0W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucGF0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSAmJiAoeCA9IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUCA9PSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJDb2xvci5Hb2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcldlaWdodFtQXSArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggKiBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50ICogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyV2VpZ2h0W1BdICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAqIE4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbChcImNvbG9yQ29uZmlnXCIsIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgdGhpcy5jYXJOb2RlQXJyLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4gPSB0aGlzLmNhck5vZGVBcnJba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAgPSB2W2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmluY2x1ZGVzKE4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJJRCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNCbGFja0NhciA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTi5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzUG9saWNlQ2FyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoUCA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhckNvbG9yLlBvbGljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1JpY2hDYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChQID0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyQ29sb3IuR29sZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyQ29sb3JJbWcoTiwgUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04uY2FyV2VpZ2h0W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucGF0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSAmJiAoeCA9IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUCA9PSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJDb2xvci5Hb2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcldlaWdodFtQXSArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggKiBOLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50ICogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyV2VpZ2h0W1BdICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAqIE4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L2m6L6G5p2D6YeNXCIsIHRoaXMuY2FyV2VpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuminOiJslwiLCAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5jb2xvckRlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkurrmlbBcIiwgdGhpcy5jb2xvclBlcnNvbkFyciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IDA7IGIgPCAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5jb2xvckRlcy5sZW5ndGg7IGIrK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbW91bnRCeUNvbG9yKGIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyXCIsIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJySW5kZXhcIiwgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMjczNjEgPT0gdGhpcy5sZXZlbElEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyciA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsIDQsIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFszLCAzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsIDNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsyLCA0LCA0XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFNvcnRJbmRleEFyciA9IFswLCA3LCAzLCA0LCAwLCA3LCAzLCA0LCAwLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImYyNzU5N1wiICE9IHRoaXMuZm9sZGVyID8gWzMsIDJdIDogWzQsICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXCJ0dEJ1bmRsZVwiLCBcInByZWZhYi9ibG9ja01hbi9QZXJzb25cIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFIgPSBHLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25QcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25QcmVmYWIuc2NhbGUgPSAwLjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBHLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZmxhZy5pbmNsdWRlcyhcImlvc1wiKSB8fCB0aGlzLmlzSGlnaFNwZWVkUmFpbHdheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImlvc0J1bmRsZVwiLCBcInByZWZhYi9QYXZlbWVudFJvb3RcIiwgY2MuUHJlZmFiKV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSBHLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE8gPSBjYy5pbnN0YW50aWF0ZSh3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5iZy5hZGRDaGlsZChPKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oaWdoU3BlZWRSYWlsID0gTy5nZXRDaGlsZEJ5TmFtZShcImhpZ2hTcGVlZFJhaWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGlnaFNwZWVkUmFpbC54ID0gLTg1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5sZWZ0RG9vciA9IE8uZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoU3BlZWRSYWlsXCIpLmdldENoaWxkQnlOYW1lKFwibGVmdERvb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QucmlnaHREb29yID0gTy5nZXRDaGlsZEJ5TmFtZShcImhpZ2hTcGVlZFJhaWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodERvb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZG9vcjIucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYmdcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZG9vcjIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgTSA9IE1hdGguYWJzKC04MzcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5kaWN0LmhpZ2hTcGVlZFJhaWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKE0gLyB0aGlzLmhpZ2hTcGVlZFJhaWxTcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtMTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLmRpY3QuaGlnaFNwZWVkUmFpbDJSb290LmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihFLmRpY3QubGVmdERvb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogLTM0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKEUuZGljdC5yaWdodERvb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMzRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLmNyZWF0ZVBlcnNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUucGVyc29uTW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUub25Ub3VjaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFLmlzQ2FuU3RhcnRDbGljayA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVBlcnNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25Nb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVG91Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5TdGFydENsaWNrID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBHLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RyYW5zcG9ydENhck1vdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUuZmFjZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUuZmFjZTIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKEUsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0NhckZ1bGwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdGhpcy50aW1lcigwLjEpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uc2VudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0hhc1BlcnNvbk1vdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMudGltZXIoMC4xKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5zZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSGFzQ2FyTW92ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSB0aGlzLmFsbFBlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLnRpbWVyKDEpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLnNlbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgIT0gdGhpcy5hbGxQZXJzb25BbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNGYWlsID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUgPSB0aGlzLmFsbFBlcnNvbkFtb3VudCksIFs0LCB0aGlzLnRpbWVyKDAuNSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uc2VudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVjayhlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImZ1bmNfcmV2aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFpbCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgOV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRXYXRlck1vZGVFZmZlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFdhdGVyTW9kZUVmZmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc1dhdGVyTW9kZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBlLmRpY3QuY2FyUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9ICR1dGlscy5VdGlscy5yYW5kb21OdW0oMCwgMjApIC8gMTA7XG4gICAgICAgICAgICAgICAgaWYgKCFvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuZmxvYXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSAoTWF0aC5QSSAvIDE4MCkgKiAoOTAgLSBvLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAyICogTWF0aC5jb3Mocik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gMiAqIE1hdGguc2luKHIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG8uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG4sIGEpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBvLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzKTtcbiAgICAgICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmZsb2F0UG9zID0gYztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBvLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBlLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuZGljdC5jYXJSb290LmNoaWxkcmVuLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgdChvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ2FyRnVsbCgpICYmICF0aGlzLmNoZWNrSGFzUGVyc29uTW92ZSgpICYmICF0aGlzLmNoZWNrSGFzQ2FyTW92ZSgpICYmIHQgPT0gdGhpcy5hbGxQZXJzb25BbW91bnRcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfY2hlY2tDYW5Vc2VTb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhKHRoaXMuY2hlY2tIYXNQZXJzb25Nb3ZlKCkgfHwgdGhpcy5jaGVja0hhc0Nhck1vdmUoKSB8fCB0aGlzLm1vdmVDYXJBbW91bnQgPj0gdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRpbWVyID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICBlLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBvKDEpO1xuICAgICAgICAgICAgfSwgdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tDYXJGdWxsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gITA7XG4gICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmtpbmdOb2Rlc1tlXS5jYXIpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0hhc1BlcnNvbk1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSAhMTtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc29ydFBlcnNvbk5vZGVzW2VdLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkuaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICB0ID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0hhc0Nhck1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSAhMTtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmNhclJvb3QuY2hpbGRyZW4uY29uY2F0KHRoaXMudHVybnRhYmxlQ2FyQXJyKTtcbiAgICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGVbb107XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlICE9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLklkbGUgJiZcbiAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuTm9ybWFsICYmXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlICE9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLlBhcmtpbmdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHQgPSAhMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrSGFzQ2FyTW92ZUFtb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IDA7XG4gICAgICAgIHZhciBlID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgdmFyIGkgPSBlW29dO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGkgJiZcbiAgICAgICAgICAgICAgICBjYy5pc1ZhbGlkKGksICEwKSAmJlxuICAgICAgICAgICAgICAgIGkuYWN0aXZlICYmXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlICE9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLklkbGUgJiZcbiAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuT3V0UGFya2luZ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZmFjZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmRpY3QuZmFjZVNwaW5lKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMucmFuZG9tTnVtKDUsIDEwKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0LnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0LnJhbmRvbU51bSgzLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0LnJhbmRvbU51bSgwLCB0LnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuc29ydFBlcnNvbk5vZGVzW29dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNjLnYyKHQuc29ydFBlcnNvbk5vZGVzW29dLngsIHQuc29ydFBlcnNvbk5vZGVzW29dLnkgKyA2NyArIDIwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdC5zb3J0UGVyc29uTm9kZXNbb10ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC5kaWN0LmZhY2VTcGluZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGNjLmluc3RhbnRpYXRlKHQucG9vbE1nci5nZXQodC5kaWN0LmZhY2VTcGluZSwgXCJmYWNlU3BpbmVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5kaWN0LmZhY2VTcGluZS5wYXJlbnQuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLnBvc2l0aW9uID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiArIGUsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHQuZGljdC5mYWNlU3BpbmUucGFyZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBvb2xNZ3IucHV0KGEsIFwiZmFjZVNwaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmZhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZhY2UyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZGljdC5mYWNlU3BpbmUpIHtcbiAgICAgICAgICAgIHZhciBlID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW29dLmNhcjtcbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGkuZ2V0Q2hpbGRCeU5hbWUoXCJzZWF0Um9vdFwiKS5jaGlsZHJlbi5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBpLmdldENoaWxkQnlOYW1lKFwic2VhdFJvb3RcIikuY2hpbGRyZW5bcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2gobik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMucmFuZG9tTnVtKDUsIDEwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0LnJhbmRvbU51bSgwLCBlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVtvXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVbb10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGNjLnYyKGVbb10ueCwgZVtvXS55ICsgNjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGVbb10ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0LmRpY3QuZmFjZVNwaW5lLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBjYy5pbnN0YW50aWF0ZSh0LnBvb2xNZ3IuZ2V0KHQuZGljdC5mYWNlU3BpbmUsIFwiZmFjZVNwaW5lXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kaWN0LmZhY2VTcGluZS5wYXJlbnQuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucG9zaXRpb24gPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odC5kaWN0LmZhY2VTcGluZS5wYXJlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQucG9vbE1nci5wdXQoYSwgXCJmYWNlU3BpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5mYWNlMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHMpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmZhY2UyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5mYWNlMigpO1xuICAgICAgICAgICAgICAgIH0sIDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVDYXJCeUNhclBhcmsgPSBmdW5jdGlvbih0LCBlLCBvLCBpKSB7XG4gICAgICAgIHZhciByID0gXCIwXCIgKyBpICsgdCArIFwiLVwiICsgbztcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lXCIsIHIpO1xuICAgICAgICB2YXIgbiA9IHRoaXMuZGljdC5jYXJQcmVmYWIuZ2V0Q2hpbGRCeU5hbWUocik7XG4gICAgICAgIHZhciBhID0gY2MuaW5zdGFudGlhdGUobik7XG4gICAgICAgIGEuYWN0aXZlID0gITE7XG4gICAgICAgIGEucGFyZW50ID0gdGhpcy5jYXJSb290O1xuICAgICAgICBhLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5tZ3IgPSB0aGlzO1xuICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucGF0aCA9IGU7XG4gICAgICAgIGlmICh0aGlzLmlzRGVidWcpIHtcbiAgICAgICAgICAgIHZhciBzID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgIHMubmFtZSA9IFwicGF0aFwiO1xuICAgICAgICAgICAgcy5hZGRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBlO1xuICAgICAgICAgICAgcy5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgYS5hZGRDaGlsZChzKTtcbiAgICAgICAgICAgIHMucG9zaXRpb24gPSBjYy52MigtMTMuMTA1LCAtMjYuMjEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25Ub3VjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgIGlmIChlLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpKSB7XG4gICAgICAgICAgICAgICAgZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0X3BhcmtpbmcsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50b3VjaFN0YXJ0X3BhcmtpbmcgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVtb3ZlICYmICF0aGlzLnJlbW92ZVByb3BVc2luZykge1xuICAgICAgICAgICAgdmFyIG8gPSB0LnRhcmdldDtcbiAgICAgICAgICAgIHRoaXMudW5sb2NrUGFya2luZ1RhcmdldCA9IG87XG4gICAgICAgICAgICBpZiAoby5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKSkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuVW5sb2NrUGFya2luZykgfHwgMDtcbiAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5VbmxvY2tQYXJraW5nLCBpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwiZW1wdHlcIikuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIG8uaXNFbXB0eSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmtpbmdOb2Rlcy5wdXNoKG8pO1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5Cb29zdGVyX3VzZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3I6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnBsYXlVbmxvY2tTcGluZShvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhcmRBbW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucHJvcEluZGV4LCA0KTtcbiAgICAgICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJlbXB0eVwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmlzRW1wdHkgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnBhcmtpbmdOb2Rlcy5wdXNoKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wbGF5VW5sb2NrU3BpbmUobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheVVubG9ja1NwaW5lID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5qaWVzdW8pO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZSk7XG4gICAgICAgIHZhciBvID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLXQuaGVpZ2h0IC8gMikpO1xuICAgICAgICB2YXIgaSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICAgICAgZS5wb3NpdGlvbiA9IGk7XG4gICAgICAgIGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5wcmVtdWx0aXBsaWVkQWxwaGEgPSAhMTtcbiAgICAgICAgZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3VubG9ja1BhcmtpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wbGF5VW5sb2NrU3BpbmUodGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0KTtcbiAgICAgICAgdGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZW1wdHlcIikuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMudW5sb2NrUGFya2luZ1RhcmdldC5pc0VtcHR5ID0gITA7XG4gICAgICAgIHRoaXMucGFya2luZ05vZGVzLnB1c2godGhpcy51bmxvY2tQYXJraW5nVGFyZ2V0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrSGFzQ29sbGlzaW9uID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgdmFyIG47XG4gICAgICAgIHZhciBhO1xuICAgICAgICB2YXIgcyA9IHQud2lkdGg7XG4gICAgICAgIHZhciBjID0gdC5oZWlnaHQ7XG4gICAgICAgIGUgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtcyAvIDIsIC1jKSk7XG4gICAgICAgIG8gPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtcyAvIDIsIDIyNTApKTtcbiAgICAgICAgaSA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHMgLyAyLCAtYykpO1xuICAgICAgICByID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIocyAvIDIsIDIyNTApKTtcbiAgICAgICAgbiA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC1jKSk7XG4gICAgICAgIGEgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyMjUwKSk7XG4gICAgICAgIHZhciBsID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgbC5sZW5ndGg7IGgrKykge1xuICAgICAgICAgICAgdmFyIHAgPSBsW2hdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHAgJiZcbiAgICAgICAgICAgICAgICBwICE9IHQgJiZcbiAgICAgICAgICAgICAgICBwLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZSAmJlxuICAgICAgICAgICAgICAgIHAuYWN0aXZlICYmXG4gICAgICAgICAgICAgICAgIXAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1RyYW5zcG9ydENhciAmJlxuICAgICAgICAgICAgICAgICFwLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNVVHJhbnNwb3J0Q2FyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgICAgICB2YXIgZztcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgICB2YXIgdjtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHAud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIEMgPSBwLmhlaWdodDtcbiAgICAgICAgICAgICAgICBkID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLXkgLyAyLCAtQykpO1xuICAgICAgICAgICAgICAgIHUgPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigteSAvIDIsIDApKTtcbiAgICAgICAgICAgICAgICBnID0gcC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoeSAvIDIsIC1DKSk7XG4gICAgICAgICAgICAgICAgbSA9IHAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHkgLyAyLCAwKSk7XG4gICAgICAgICAgICAgICAgZiA9IHAuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHkgLyAyICsgMSwgMCkpO1xuICAgICAgICAgICAgICAgIHYgPSBwLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigteSAvIDIgLSAxLCAwKSk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoZSwgbywgZCwgdSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIGcsIG0pIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShpLCByLCBkLCB1KSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoaSwgciwgZywgbSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIGYsIHYpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShuLCBhLCBmLCB2KVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRvdWNoU3RhcnQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2FuU3RhcnRDbGljaykge1xuICAgICAgICAgICAgdC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgZSA9IHQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnBhcmtJbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCLpmZDliLbovablupPovabngrnlh7tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JvdGF0ZUNyZWF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIuato+WcqOaXi+i9rOeUn+aIkFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG9baV07XG4gICAgICAgICAgICAgICAgdmFyIG4gPSByLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpO1xuICAgICAgICAgICAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucG9pbnRJblBvbHlnb24oZSwgdGhpcy5nZXRXUG9zQnlQb2x5Z29uKG4pKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19vYmxpcXVlLmRlZmF1bHQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9IHIuY2FyU3F1YXJlQ29sICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19vYmxpcXVlLmRlZmF1bHQpLmlzQW5pbVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaWsOWinumZkOWItuW/q+mAn+eCueWHu1wiLCB0aGlzLm1vdmVDYXJBbW91bnQsIHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVDYXJBbW91bnQgPj0gdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumZkOWItuW/q+mAn+eCueWHu1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3coJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcIuaaguaXtuayoeaciei9puS9jeepuuWHulwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubmV4dENhcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucHJldkNhcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhIHx8IHMpICYmIHRoaXMubW92ZUNhckFtb3VudCA+PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumZkOWItuW/q+mAn+eCueWHuzJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLpnIDopoHkuKTkuKrlgZzovabkvY1cIiksIDAuOCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKDI1NSAhPSByLm9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRDaGlsZEJ5TmFtZShcImxvY2tcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLpnIDopoHpkqXljJnop6PplIFcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgci5ydW5BY3Rpb24oci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmlzU2NhbGVBbmltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3J0QW5pbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmlzQ2FyUGFyayAmJiAhci5pc1dlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwi6ZmQ5Yi26L2m5bqT6L2mLOayoeWBnOeos1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVtb3ZlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLklkbGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnJlbW92ZVByb3BVc2luZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXIub2JsaXF1ZUhlYWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFyLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNGaXJlRW5naW5lXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgdGhpcy5yZW1vdmVDYXIocik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlUHJvcFVzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNDYW5DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSAhPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5JZGxlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgJiYgKHIueCA+IDI2NyB8fCByLnggPCAtMjY3KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLm9ibGlxdWVIZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCByLnJ1bkFjdGlvbih0aGlzLnNoYWNrQWN0aW9uKDAuMSwgMikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5oYW5kICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGFuZC5hY3RpdmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmd1aWRlZE5vZGVzLnB1c2gociksIHRoaXMuY3VycmVudEd1aWRlTm9kZSA9PSByKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHRoaXMuZ3VpZGVOb2Rlcy5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy5ndWlkZU5vZGVzW2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PSB0aGlzLmd1aWRlZE5vZGVzLmluZGV4T2YocCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3VpZGVOb2RlID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kUG9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGFuZC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaGFuZFRleHQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmhhbmRUZXh0LnBhcmVudC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdSA9ICExO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGwgPSAwOyBsIDwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmtpbmdOb2Rlc1tsXS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnInovabkvY3pg73ooqvljaDnlKjkuoZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLnm67liY3ovabkvY3lt7Lmu6FcIiksIDAuOCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgfHwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsID0gMDsgbCA8IHRoaXMucGFya2luZ05vZGVzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFya2luZ05vZGVzW2xdLmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaLiemTvui9pi3miYDmnInovabkvY3pg73ooqvljaDnlKjkuoZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFwi6ZyA6KaB5Lik5Liq5YGc6L2m5L2NXCIpLCAwLjgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSGFzQ2FyTW92ZUFtb3VudCgpID49IHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnInnm7jnrYnkuo7ovabkvY3mgLvph4/nmoTovablnKjov5DliqjvvIzml6Dms5Xlh7rovaZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLmmoLml7bmsqHmnInovabkvY3nqbrlh7pcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyJXCIgKyB0aGlzLmNoZWNrSGFzQ2FyTW92ZUFtb3VudCgpICsgXCLovobovablnKjliqjvvIFcIiwgdGhpcy5wYXJraW5nTm9kZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhIHx8IHMpICYmIHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCAtIHRoaXMuY2hlY2tIYXNDYXJNb3ZlQW1vdW50KCkgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmi4npk77ovabkuI3og73lh7rovaZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLmmoLml7bmsqHmnInovabkvY3nqbrlh7pcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHIuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNXYXRlck1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIucG9zaXRpb24gPSByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkub2xkUG9zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyVHJhbnNwb3J0TW92ZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSGFzQ29sbGlzaW9uKHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYWlsR2FzU3BpbmUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1VUcmFuc3BvcnRDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdCkuc3RvcChyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDIyNTApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSByLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihmKTtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLm90aGVyQ2FyTm9kZSA9IHRoaXMuZ2V0T3RoZXJDYXJCeURpc3RhbmNlKHIpO1xuICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkub2xkUG9zID0gci5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5vdGhlckNhck5vZGUgPSB0aGlzLmdldE90aGVyQ2FyQnlEaXN0YW5jZShhLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkub2xkUG9zID0gYS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLm90aGVyQ2FyTm9kZSA9IHRoaXMuZ2V0T3RoZXJDYXJCeURpc3RhbmNlKHMsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5vbGRQb3MgPSBzLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9PSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5JZGxlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzRmlyZUVuZ2luZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhckFtb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMjI1MCAvIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5uZXh0Q2FyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHkuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSA9PSB5LmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2hhaW4uZGVmYXVsdCkubGlua1R5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Ob3JtYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bmz6KGM5Yqg5YWl5qOA5rWLXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXJBbW91bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMjI1MCAvIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5zcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgocy5nZXRDaGlsZEJ5TmFtZShcImNoYWluXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09IHMuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jaGFpbi5kZWZhdWx0KS5saW5rVHlwZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIuZ2V0Q2hpbGRCeU5hbWUoXCJjaGFpblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSA9PSByLmdldENoaWxkQnlOYW1lKFwiY2hhaW5cIikuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2hhaW4uZGVmYXVsdCkubGlua1R5cGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuTm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhckFtb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygyMjUwIC8gcy5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnNwZWVkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1VUcmFuc3BvcnRDYXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEgIT0gci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYWlsR2FzU3BpbmUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGF1ZGlvTWFuYWdlci5BdWRpby5nZXRFZmZlY3RNdXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlMZXZlbFNvdW5kKFwiRW5naW5lMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnRfYnVsbGRvemVyUm9vdChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudG91Y2hTdGFydF9idWxsZG96ZXJSb290ID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodGhpcy5kaWN0LmJ1bGxkb3plclJvb3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5kaWN0LmJ1bGxkb3plclJvb3QuY2hpbGRyZW4ubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHRoaXMuZGljdC5idWxsZG96ZXJSb290LmNoaWxkcmVuW2VdO1xuICAgICAgICAgICAgICAgIGlmIChcImJ1bGxkb3plclwiID09IG8ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJidWxsZG96ZXJDaGlsZFwiKS5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLnBvaW50SW5Qb2x5Z29uKHQsIHRoaXMuZ2V0V1Bvc0J5UG9seWdvbihpKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfYnVsbGRvemVyLmRlZmF1bHQpLnN0YXRlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5CdWxsZG96ZXJTdGF0ZS5JZGxlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vliLDmjqjlnJ/mnLpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2J1bGxkb3plci5kZWZhdWx0KS5zdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQnVsbGRvemVyU3RhdGUuTm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19idWxsZG96ZXIuZGVmYXVsdCkub2xkUG9zID0gby5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gby5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMjI1MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBvLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDIyNTAgLyBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2J1bGxkb3plci5kZWZhdWx0KS5idWxsZG96ZXJTcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICByZXR1cm4gKDE4MCAqIE1hdGguYXRhbjIoZS55IC0gdC55LCBlLnggLSB0LngpKSAvIE1hdGguUEkgKyA5MDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZFN0YXJTcGluZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB2YXIgbyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9vbE1nci5nZXQodGhpcy5kaWN0Lm1peFNwaW5lLCBcIm1peFNwaW5lXCIpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG8pO1xuICAgICAgICB2YXIgaSA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC10LmhlaWdodCAvIDIpKTtcbiAgICAgICAgdmFyIHIgPSBvLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKTtcbiAgICAgICAgby5wb3NpdGlvbiA9IHI7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZS5wb29sTWdyLnB1dChvLCBcIm1peFNwaW5lXCIpO1xuICAgICAgICB9LCAyKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmFkZFRhaWxHYXNTcGluZSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LnRhaWxHYXMpO1xuICAgICAgICAgICAgICAgIHQuYWRkQ2hpbGQoZSk7XG4gICAgICAgICAgICAgICAgZS5wb3NpdGlvbiA9IGNjLnYyKDAsIC10LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgaWYgKGUuZ2V0Q29tcG9uZW50KCRtb3Rpb25UcmFpbC5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICBlLmdldENvbXBvbmVudCgkbW90aW9uVHJhaWwuZGVmYXVsdCkuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXROb2RlV29ybGRFdWxlckFuZ2xlcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSAwO1xuICAgICAgICBmb3IgKHZhciBvID0gdDsgbzspIHtcbiAgICAgICAgICAgIGUgKz0gby5hbmdsZTtcbiAgICAgICAgICAgIG8gPSBvLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmxkRXVsZXJBbmdsZXNcIiwgZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ybGRFdWxlckFuZ2xlczJcIiwgZSAlIDM2MCk7XG4gICAgICAgIHJldHVybiBlICUgMzYwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuID0gZnVuY3Rpb24odCwgZSwgbykge1xuICAgICAgICBpZiAodCAmJiBlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IG9baV07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtMi5wb3NpdGlvblwiLCBlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgICAgICAuc3RvcCgpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjA1ICogaSArIDAuMDIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZnVuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0V1Bvc0J5UG9seWdvbiA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0LnBvaW50cztcbiAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IGNjLnYyKGVbaV0ueCArIHQub2Zmc2V0LngsIGVbaV0ueSArIHQub2Zmc2V0LnkpO1xuICAgICAgICAgICAgdmFyIG4gPSB0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHIpO1xuICAgICAgICAgICAgby5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0UmFuZG9tRGlzdGluY3RFbGVtZW50cyA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHQubGVuZ3RoIC0gaSkpO1xuICAgICAgICAgICAgaWYgKG8uaW5jbHVkZXModFtyXSkpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvLnB1c2godFtyXSk7XG4gICAgICAgICAgICAgICAgdFtyXSA9IHRbdC5sZW5ndGggLSBpIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDYXJDb2xvckltZyA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIHZhciBpID0gdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpO1xuICAgICAgICBpLmNhckNvbG9yID0gZTtcbiAgICAgICAgaWYgKHRoaXMuY29sb3JQZXJzb25BcnJbZV0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQXJyW2VdID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yUGVyc29uQXJyW2VdICs9IGkuc2VhdFRvdGFsQW1vdW50O1xuICAgICAgICBpLmNvbG9ySW1nTmFtZSA9IGUgKyAxO1xuICAgICAgICBpZiAodC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVHJhbWNhcikge1xuICAgICAgICAgICAgaS5jb2xvckltZ05hbWUgPSBlICsgMSArIDEyO1xuICAgICAgICB9XG4gICAgICAgIGkuZGlySW1nTmFtZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhckRpckltZ1tNYXRoLnJvdW5kKE1hdGguYWJzKHQuYW5nbGUpKV07XG4gICAgICAgIGkubGVuSW1nTmFtZSA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhckxlbkltZ1tpLnNlYXRUb3RhbEFtb3VudF07XG4gICAgICAgIHZhciByID0gXCJcIiArIGkuY29sb3JJbWdOYW1lICsgaS5kaXJJbWdOYW1lICsgaS5sZW5JbWdOYW1lO1xuICAgICAgICBvID0gXCJ0ZXh0dXJlL1wiICsgdGhpcy5mb2xkZXIgKyBcIi9cIiArIHRoaXMuZm9sZGVyICsgXCJfXCIgKyByO1xuICAgICAgICBpZiAodC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzQmxhY2tDYXIpIHtcbiAgICAgICAgICAgIG8gPSBcInRleHR1cmUvXCIgKyB0aGlzLmZvbGRlciArIFwiL1wiICsgdGhpcy5mb2xkZXIgKyBcIl85XCIgKyBpLmRpckltZ05hbWUgKyBpLmxlbkltZ05hbWU7XG4gICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiZGlyXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdmFyIG4gPSBcInRleHR1cmUvXCIgKyB0aGlzLmZvbGRlciArIFwiL1wiICsgdGhpcy5mb2xkZXIgKyBcIl8xNVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdEaXJVcmwxMTExXCIsIHQuYW5nbGUpO1xuICAgICAgICAgICAgaWYgKDEyOCA9PSBNYXRoLnJvdW5kKE1hdGguYWJzKHQuYW5nbGUpKSkge1xuICAgICAgICAgICAgICAgIG4gPSBcInRleHR1cmUvXCIgKyB0aGlzLmZvbGRlciArIFwiL1wiICsgdGhpcy5mb2xkZXIgKyBcIl8xN1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoOTAgPT0gTWF0aC5yb3VuZChNYXRoLmFicyh0LmFuZ2xlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IFwidGV4dHVyZS9cIiArIHRoaXMuZm9sZGVyICsgXCIvXCIgKyB0aGlzLmZvbGRlciArIFwiXzM0XCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgMCA9PSBNYXRoLnJvdW5kKE1hdGguYWJzKHQuYW5nbGUpKSAmJiAobiA9IFwidGV4dHVyZS9cIiArIHRoaXMuZm9sZGVyICsgXCIvXCIgKyB0aGlzLmZvbGRlciArIFwiXzM1XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3RGlyVXJsXCIsIG4pO1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQobiwgZnVuY3Rpb24oZSwgbykge1xuICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImRpclwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUobyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNGaXJlRW5naW5lIHx8XG4gICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNQb2xpY2VDYXIgfHxcbiAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1JpY2hDYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0LmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSAhMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKG8sIGZ1bmN0aW9uKGUsIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsRGF0YUpTT04uY2FyV2VpZ2h0W2kucGF0aF0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsRGF0YUpTT04uY2FyV2VpZ2h0W2kucGF0aF0gPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDYXJDb2xvckltZ18yID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgdmFyIGkgPSB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCk7XG4gICAgICAgIGkuY2FyQ29sb3IgPSBlO1xuICAgICAgICBpLmNvbG9ySW1nTmFtZSA9IGUgKyAxO1xuICAgICAgICB2YXIgciA9IFwiXCIgKyBpLmNvbG9ySW1nTmFtZSArIGkuZGlySW1nTmFtZSArIGkubGVuSW1nTmFtZTtcbiAgICAgICAgbyA9IFwidGV4dHVyZS9cIiArIHRoaXMuZm9sZGVyICsgXCIvXCIgKyB0aGlzLmZvbGRlciArIFwiX1wiICsgcjtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQobywgZnVuY3Rpb24oZSwgbykge1xuICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gITA7XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlQ2FyV2VpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5jYXJXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgIHZhciBlID0gdGhpcy5jYXJSb290LmNoaWxkcmVuLmNvbmNhdCh0aGlzLnR1cm50YWJsZUNhckFycik7XG4gICAgICAgIHZhciBvID0gZnVuY3Rpb24obykge1xuICAgICAgICAgICAgdmFyIHIgPSBlW29dO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHIgJiZcbiAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkgJiZcbiAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZSAmJlxuICAgICAgICAgICAgICAgICFyLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgJiZcbiAgICAgICAgICAgICAgICAhci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVVRyYW5zcG9ydENhclxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgci5wYXRoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkuZ2V0UGF0aChyKTtcbiAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucGF0aCA9IG47XG4gICAgICAgICAgICAgICAgaWYgKDEgPT0gbiAmJiByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNCbGFja0NhciAmJiAhci5pc05vQmxhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgci5pc1NjYWxlQW5pbSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmlzU2NhbGVBbmltID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImRpclwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IFwidGV4dHVyZS9cIiArIHQuZm9sZGVyICsgXCIvXCIgKyB0LmZvbGRlciArIFwiXzNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMTI4ID09IE1hdGgucm91bmQoTWF0aC5hYnMoci5hbmdsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcInRleHR1cmUvXCIgKyB0LmZvbGRlciArIFwiL1wiICsgdC5mb2xkZXIgKyBcIl80XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDkwID09IE1hdGgucm91bmQoTWF0aC5hYnMoci5hbmdsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJ0ZXh0dXJlL1wiICsgdC5mb2xkZXIgKyBcIi9cIiArIHQuZm9sZGVyICsgXCJfMlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSBNYXRoLnJvdW5kKE1hdGguYWJzKHIuYW5nbGUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlID0gXCJ0ZXh0dXJlL1wiICsgdC5mb2xkZXIgKyBcIi9cIiArIHQuZm9sZGVyICsgXCJfMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChlLCBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImRpclwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImRpclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5TcHJpdGVGcmFtZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gXCJcIiArIG8uY29sb3JJbWdOYW1lICsgby5kaXJJbWdOYW1lICsgby5sZW5JbWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gXCJ0ZXh0dXJlL1wiICsgdC5mb2xkZXIgKyBcIi9cIiArIHQuZm9sZGVyICsgXCJfXCIgKyBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5pc05vQmxhY2sgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChuLCBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5TcHJpdGVGcmFtZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaS5pc0RlYnVnICYmIHIuZ2V0Q2hpbGRCeU5hbWUoXCJwYXRoXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHIuZ2V0Q2hpbGRCeU5hbWUoXCJwYXRoXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhID0gaS5sZXZlbERhdGFKU09OLmNhcldlaWdodFtuIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gYSkge1xuICAgICAgICAgICAgICAgICAgICBhID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvciA9PSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJDb2xvci5Hb2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGkuY2FyV2VpZ2h0W3IuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcl0gKz1cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKiByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50ICogMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpLmNhcldlaWdodFtyLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3JdICs9XG4gICAgICAgICAgICAgICAgICAgICAgICBhICogci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmVtcHR5U2VhdEFtb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBlLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICBvKHIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jcmVhdGVQZXJzb24gPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG8gKz0gbCA9IHRoaXMuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKG8gPj0gdGhpcy5hbGxQZXJzb25BbW91bnQyKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aCA8IHRoaXMudWlTaG93UGVyc29uQW1vdW50Oykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5nZXRQZXJzb25Db2xvcigpO1xuICAgICAgICAgICAgICAgIHZhciBhID0gKChpID0gdGhpcy5jb2xvclBlcnNvbkluZGV4QXJyW25dKSwgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltuXVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXZpdmVBbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJySW5kZXhbbl1baV0gPT0gdGhpcy5sYXN0RXh0cmFJbmRleEFycltuXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhV2VpZ2h0W25dID0gdGhpcy5leHRyYVdlaWdodENvbnN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFXZWlnaHRbbl0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RFeHRyYUluZGV4QXJyW25dID0gdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4W25dW2ldO1xuICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuY29sb3JQZXJzb25JbmRleEFyci5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLmNvbG9yUGVyc29uSW5kZXhBcnJbY107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltjXVtsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZChlICYmIGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbiA9IHNbdGhpcy5yYW5kb21OdW0oMCwgcy5sZW5ndGggLSAxKV07XG4gICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLmNvbG9yUGVyc29uSW5kZXhBcnJbbl07XG4gICAgICAgICAgICAgICAgICAgIGEgPSB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW25dW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFtuXSArPSBhO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmV2aXZlQW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkluZGV4QXJyW25dICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29sZEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xpY2VJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgYTsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIChwID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID49ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhckNvbG9yLlBvbGljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LmNhcmVlclByZWZhYikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC5wZXJzb25QcmVmYWIpKS5vbGRQb3NJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblJvb3QuYWRkQ2hpbGQocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3IgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gKyAxID09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclBlcnNvbkltZyhuLCBwLCAyLCB0aGlzLnBvbGljZVNraW5OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJhXCIgPT0gdGhpcy5wb2xpY2VTa2luTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbGljZVNraW5OYW1lID0gXCJiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xpY2VTa2luTmFtZSA9IFwiYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gKyAxID09IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JQZXJzb25JbWcobiwgcCwgMiwgdGhpcy5nb2xkU2tpbk5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ29sZFNraW5OYW1lID0gXCJhXCIgPT0gdGhpcy5nb2xkU2tpbk5hbWUgPyBcImJcIiA6IFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yUGVyc29uSW1nKG4sIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHAuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJkYWlqaV96aGVuZ1wiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNoaWxkcmVuQ291bnQgLSAxIC0gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAucG9zaXRpb24gPSB0aGlzLmRpY3QuZG9vck91dHNpZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAucG9zaXRpb24gPSB0aGlzLmRpY3QucGVyc29uUG9zUm9vdC5jaGlsZHJlbltkXS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnpJbmRleCA9IHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNoaWxkcmVuQ291bnQgLSB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5vbGRQb3NJbmRleCA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA+PSA1ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnNldENvbG9yUGVyc29uSW1nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfcGVyc29uSXRlbS5kZWZhdWx0KS5wZXJzb25Db2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiZGFpamlfY2VcIiwgITApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFBlcnNvbk5vZGVzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgKHAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPj0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyQ29sb3IuUG9saWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QuY2FyZWVyUHJlZmFiKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuaW5zdGFudGlhdGUodGhpcy5kaWN0LnBlcnNvblByZWZhYikpLm9sZFBvc0luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QucGVyc29uUm9vdC5hZGRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucG9zaXRpb24gPSB0aGlzLmRpY3QuZG9vck91dHNpZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3IgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gKyAxID09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclBlcnNvbkltZyhuLCBwLCAyLCB0aGlzLnBvbGljZVNraW5OYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucG9saWNlU2tpbk5hbWUgPSBcImFcIiA9PSB0aGlzLnBvbGljZVNraW5OYW1lID8gXCJiXCIgOiBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuICsgMSA9PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yUGVyc29uSW1nKG4sIHAsIDIsIHRoaXMuZ29sZFNraW5OYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmdvbGRTa2luTmFtZSA9IFwiYVwiID09IHRoaXMuZ29sZFNraW5OYW1lID8gXCJiXCIgOiBcImFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclBlcnNvbkltZyhuLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBlcnNvbk1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGUgPj0gdGhpcy51aVNob3dQZXJzb25BbW91bnQpIHtcbiAgICAgICAgICAgIGUgPSB0aGlzLnVpU2hvd1BlcnNvbkFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gaS5zb3J0UGVyc29uTm9kZXNbZV07XG4gICAgICAgICAgICBpLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBvLm9sZFBvc0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBvLnBvc2l0aW9uID0gdC5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5bMF0ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgby5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImRhaWppX3poZW5nXCIsICEwKTtcbiAgICAgICAgICAgICAgICBpZiAoZSAhPSB0LnVpU2hvd1BlcnNvbkFtb3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgby56SW5kZXggPSB0LmRpY3QucGVyc29uUG9zUm9vdC5jaGlsZHJlbkNvdW50IC0gZTtcbiAgICAgICAgICAgICAgICAgICAgby5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInBhb196aGVuZ1wiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIHQubW92ZSgwLCBvLCB0LmRpY3QucGVyc29uUG9zUm9vdC5jaGlsZHJlbkNvdW50IC0gMSAtIGUsIG51bGwsICEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwLjEgKiBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGU7IHIrKykge1xuICAgICAgICAgICAgbyhyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlUGFya2luZ1dlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBhcmtpbmdXZWlnaHQgPSBuZXcgQXJyYXkodGhpcy5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuYWN0aXZlICYmIGUuY2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5jYXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgby5nZXRDaGlsZEJ5TmFtZShcInNlYXRSb290XCIpLmNoaWxkcmVuLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBvLmdldENoaWxkQnlOYW1lKFwic2VhdFJvb3RcIikuY2hpbGRyZW5bcl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uYWN0aXZlIHx8IG4udGFyZ2V0UGVyc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJraW5nV2VpZ2h0W2ldICs9IHRoaXMubGV2ZWxEYXRhSlNPTi5wYXJraW5nV2VpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGEpIHt9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrUGVyc29uID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja1RpcFRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNDaGVjaykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1swXS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLnBlcnNvbkNvbG9yO1xuICAgICAgICAgICAgdmFyIGkgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHIgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBuLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICAgICAgaWYgKHIuYWN0aXZlICYmIHIuY2FyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gci5jYXI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IgPT0gbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gYS5nZXRDaGlsZEJ5TmFtZShcInNlYXRSb290XCIpLmNoaWxkcmVuW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyLmFjdGl2ZSAmJiAhci50YXJnZXRQZXJzb24gJiYgKChyLnRhcmdldFBlcnNvbiA9ICEwKSwgKGkgPSByKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmlzQ2hlY2sgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG4uc29ydFBlcnNvbk5vZGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy50YXJnZXRTZWF0ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnNldENvbG9yUGVyc29uSW1nKG8sIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY3JlYXRlUGVyc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBuLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgPj0gbi51aVNob3dQZXJzb25BbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IG4udWlTaG93UGVyc29uQW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IG4uc29ydFBlcnNvbk5vZGVzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uekluZGV4ID0gYyAtIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLmlzTW92aW5nID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5tb3ZlKG8ub2xkUG9zSW5kZXgsIG8sIG8ub2xkUG9zSW5kZXggKyAxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLmlzTW92aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09IGMgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlzQ2hlY2sgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNoZWNrUGVyc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSAwOyBwIDwgYzsgcCsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uYWxsUGVyc29uQW1vdW50IC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5kaWN0LnBlcnNvbkFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBuLmFsbFBlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJhbGxQZXJzb25BbW91bnRcIiwgbi5hbGxQZXJzb25BbW91bnQsIG4uYWxsUGVyc29uQW1vdW50Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDMwIC8gbi5wZXJzb25TcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKC0xNDAuODU5LCA0MTIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBpLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHMucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBNYXRoLmFicyhyLnggLSBzLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBNYXRoLmFicyhyLnkgLSBzLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRDb2xvclBlcnNvbkltZ19zZWF0KG8sIGksIDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIueCA8IHMueCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInBhb19jZVwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2NhbGVYID0gLXMuc2NhbGVYO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEFuaW1hdGlvbigwLCBcInBhb19jZVwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byhuIC8gKDAuNiAqIGUucGVyc29uU3BlZWQpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHIueFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0QW5pbWF0aW9uKDAsIFwicGFvX3poZW5nXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byhjIC8gKDAuNiAqIGUucGVyc29uU3BlZWQpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHIueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkYXVkaW9NYW5hZ2VyLkF1ZGlvLmdldEVmZmVjdE11dGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGxheUxldmVsU291bmQoXCJHZXRfb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmVtcHR5U2VhdEFtb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNhckFuaW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNoZWNrQ2FyR28oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzQ29pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBpLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5wYXJlbnQucGFyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiY29pblJvb3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5bdF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb24yXCIsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gMDsgYyA8IGEuZ2V0Q2hpbGRCeU5hbWUoXCJzZWF0Um9vdFwiKS5jaGlsZHJlbi5sZW5ndGg7IGMrK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBzKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gcihhKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2Ygcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNhckFuaW0gPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICh0LmlzQ2FyQW5pbSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQuaXNDYXJBbmltID0gITA7XG4gICAgICAgICAgICBjYy50d2Vlbih0LnBhcmVudC5wYXJlbnQpXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC45XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5pc0NhckFuaW0gPSAhMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1RpcFRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMucGFya2luZ05vZGVzLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJraW5nTm9kZXNbZV0uaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodCA9PSB0aGlzLnBhcmtpbmdOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImNoZWNrVGlwVGV4dFwiLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0ID09IHRoaXMucGFya2luZ05vZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJjaGVja1RpcFRleHRcIiwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrQ2FyR28gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBpID0gby5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuW2VdO1xuICAgICAgICAgICAgaWYgKGkuY2FyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBpLmNhcjtcbiAgICAgICAgICAgICAgICBpZiAoIXIuc2V0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IHIuZ2V0Q2hpbGRCeU5hbWUoXCJzZWF0Um9vdFwiKSwgYSA9IDAsIHMgPSAwOyBzIDwgbi5jaGlsZHJlbi5sZW5ndGg7IHMrKylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmNoaWxkcmVuW3NdLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgPj0gbi5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvLm1vdmVDYXJBbW91bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLXIuaGVpZ2h0IC8gMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSByLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0SW50ZXJ2YWwgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0LmNoZWNrQ2FyQmxvY2sobCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jYXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGF1ZGlvTWFuYWdlci5BdWRpby5nZXRFZmZlY3RNdXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnBsYXlMZXZlbFNvdW5kKFwiRnVsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmFkZFN0YXJTcGluZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5Hb2luZ091dFBhcmtpbmdfblBvcyA9IGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJTdGF0ZS5Hb2luZ091dFBhcmtpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5pc0VtcHR5ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc0NvaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gbi5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luUm9vdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImNvaW5FZmZlY3RcIiwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4ocilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygoci5oZWlnaHQgLyAyIC8gci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnNwZWVkKSAqIDEuMywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGVja1JlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJTdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLk91dFBhcmtpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1JpY2hDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGFuZ2VDYXIociwgMSwgMSwgXCIxMTExLTFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGFuZ2VDYXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAxXCIgKyByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSArIFwiLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlKGkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja0NhckJsb2NrID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIHZhciBpID0gZVtvXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgPT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuT3V0UGFya2luZyAmJlxuICAgICAgICAgICAgICAgIGkucG9zaXRpb24uc3ViKHQpLm1hZygpIDwgNDAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09XG4gICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuR29pbmdPdXRQYXJraW5nXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGkuR29pbmdPdXRQYXJraW5nX25Qb3M7XG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgci5zdWIodCkubWFnKCkgPCA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1JlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNXaW4gJiYgMCA9PSB0aGlzLmFsbFBlcnNvbkFtb3VudCkge1xuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzQ29pbikge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY29pbikgfHwgMDtcbiAgICAgICAgICAgICAgICB0ICs9IHRoaXMuYWxsUGVyc29uQW1vdW50MjtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jb2luLCB0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua3u+WKoOacrOWcsOmHkeW4gVwiLCB0LCB0aGlzLmFsbFBlcnNvbkFtb3VudDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1dpbiA9ICEwO1xuICAgICAgICAgICAgdGhpcy5wbGF5UmlnaHQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19hZGRSZXNvdXJjZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkJ1aWxkUmVzb3VyY2UpIHx8IDA7XG4gICAgICAgIHQgKz0gdGhpcy5jYXJBbGxBbW91bnQ7XG4gICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkJ1aWxkUmVzb3VyY2UsIHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHQsIGUsIG8sIGksIHIpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IGUucG9zaXRpb24uc3ViKHRoaXMuZGljdC5wZXJzb25Qb3NSb290LmNoaWxkcmVuW3QgKyAxXS5wb3NpdGlvbikubWFnKCk7XG4gICAgICAgIHZhciBzID0gYSAvIHRoaXMucGVyc29uU3BlZWQ7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICBzID0gYSAvICgwLjMgKiB0aGlzLnBlcnNvblNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBjYy50d2VlbihlKVxuICAgICAgICAgICAgLnRvKHMsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5kaWN0LnBlcnNvblBvc1Jvb3QuY2hpbGRyZW5bdCArIDFdLnBvc2l0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZS5vbGRQb3NJbmRleCA9IHQgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh0ICsgMSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIG4uc2V0Q29sb3JQZXJzb25JbWcoZS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLnBlcnNvbkNvbG9yLCBlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHQgKyAxID09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8gPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImRhaWppX2NlXCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJkYWlqaV96aGVuZ1wiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSAmJiBpKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbi5tb3ZlKHQgKyAxLCBlLCBvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDb2xvclBlcnNvbkltZyA9IGZ1bmN0aW9uKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkge1xuICAgICAgICAgICAgaSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2xkZXI7XG4gICAgICAgIHRoaXMuZm9sZGVyO1xuICAgICAgICB2YXIgciA9IFwic2tpbl9cIiArICh0ICsgMSk7XG4gICAgICAgIGUuY2hpbGRyZW5bMF0uc2NhbGUgPSAxO1xuICAgICAgICBpZiAodCArIDEgPT0gMTApIHtcbiAgICAgICAgICAgIHIgPSBcInNraW5fXCIgKyAodCArIDEpICsgaTtcbiAgICAgICAgICAgIFwiXCIgIT0gaSAmJlxuICAgICAgICAgICAgICAgIChlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0U2tpbihcIlwiICsgciksXG4gICAgICAgICAgICAgICAgICAgIChlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZGVmYXVsdFNraW4gPSByKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodCArIDEgPT0gMTEpIHtcbiAgICAgICAgICAgICAgICAociA9IFwic2tpbl9cIiArICh0ICsgMSkgKyBpKSxcbiAgICAgICAgICAgICAgICBcIlwiICE9IGkgJiZcbiAgICAgICAgICAgICAgICAgICAgKGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRTa2luKFwiXCIgKyByKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZGVmYXVsdFNraW4gPSByKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRTa2luKFwiXCIgKyByKSxcbiAgICAgICAgICAgICAgICAgICAgKGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5kZWZhdWx0U2tpbiA9IHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgyID09IG8pIHtcbiAgICAgICAgICAgIGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJwYW9femhlbmdcIiwgITApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcInBhb19jZVwiLCAhMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldENvbG9yUGVyc29uSW1nX3NvcnQgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcbiAgICAgICAgICAgIG8gPSAyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gXCJza2luX1wiICsgKHQgKyAxKTtcbiAgICAgICAgaWYgKGUubmFtZS5pbmNsdWRlcyhcImNhcmVlclByZWZhYlwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLogYzkuJrlsI/kurog5LiN5Y+YXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCArIDEgPj0gOSAmJiAoaSA9IFwic2tpbl84XCIpO1xuICAgICAgICAgICAgZS5jaGlsZHJlblswXS5zY2FsZSA9IDE7XG4gICAgICAgICAgICBlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0U2tpbihcIlwiICsgaSk7XG4gICAgICAgICAgICBlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuZGVmYXVsdFNraW4gPSBpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDb2xvclBlcnNvbkltZ19zZWF0ID0gZnVuY3Rpb24odCwgZSwgbykge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHI7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG8pIHtcbiAgICAgICAgICAgIG8gPSAyO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBcInJcIiArICh0ICsgMSkgKyBvO1xuICAgICAgICBpZiAodCA9PSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJDb2xvci5Qb2xpY2UpIHtcbiAgICAgICAgICAgIGlmICgwID09IHRoaXMucG9saWNlSW5kZXhTZWF0KSB7XG4gICAgICAgICAgICAgICAgKHIgPSBcInJcIiArICh0ICsgMSkgKyBvKSwgKHRoaXMucG9saWNlSW5kZXhTZWF0ID0gMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChyID0gXCJyMTFcIiArIG8pLCAodGhpcy5wb2xpY2VJbmRleFNlYXQgPSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0ID09ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhckNvbG9yLkdvbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSB0aGlzLmdvbGRJbmRleFNlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgKHIgPSBcInIxMlwiICsgbyksICh0aGlzLmdvbGRJbmRleFNlYXQgPSAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAociA9IFwicjEzXCIgKyBvKSwgKHRoaXMuZ29sZEluZGV4U2VhdCA9IDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpID0gXCJ0ZXh0dXJlL2YyNzMxMi9mMjczMTJfXCIgKyByO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChpLCBmdW5jdGlvbih0LCBvKSB7XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgZm9yICh2YXIgbyA9IHQubGVuZ3RoIC0gMTsgbyA+IDA7IG8tLSkge1xuICAgICAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobyArIDEpKTtcbiAgICAgICAgICAgIGUgPSBbdFtpXSwgdFtvXV07XG4gICAgICAgICAgICB0W29dID0gZVswXTtcbiAgICAgICAgICAgIHRbaV0gPSBlWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0QW1vdW50QnlDb2xvciA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3RdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3RdID0gW107XG4gICAgICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jYXJOb2RlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmNhck5vZGVBcnJbaV0uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoci5jYXJDb2xvciA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSByLnNlYXRUb3RhbEFtb3VudDsgcyA+IDA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMucmFuZG9tTnVtKDEsIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgIT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyQ29sb3IuUG9saWNlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCAhPSAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5DYXJDb2xvci5Hb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucHVzaChlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzIC09IGM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZS5wdXNoKG4pO1xuICAgICAgICAgICAgICAgICAgICBvLnB1c2goYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLmZsYXR0ZW4oZSk7XG4gICAgICAgICAgICAgICAgdmFyIGggPSB0aGlzLmZsYXR0ZW4obyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyclt0XSA9IGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvclBlcnNvbkFtb3VudEFyckluZGV4W3RdID0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LCBvKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0LmNvbmNhdChlLmZsYXR0ZW4obykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5jb25jYXQobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNvbnNvbGVXZWlnaHQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZhciBvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSBvW2ldO1xuICAgICAgICAgICAgciA9ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLmNvbG9yRGVzW2ldICsgXCI6XCIgKyByO1xuICAgICAgICAgICAgb1tpXSA9IHI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codCwgbyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRQZXJzb25Db2xvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5yZXZpdmVBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMucmV2aXZlQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLmlzUmV2aXZlQW1vdW50ID0gMTtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZXZpdmVBbW91bnQgPSAwO1xuICAgICAgICBpZiAodGhpcy5maXJzdFNvcnRJbmRleEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcnN0U29ydEluZGV4QXJyLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQYXJraW5nV2VpZ2h0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU29ydFdlaWdodCgpO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuY29sb3JUeXBlQW1vdW50OyBlKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdID0gMDtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdICs9IHRoaXMuY2FyV2VpZ2h0W2VdO1xuICAgICAgICAgICAgdGhpcy5hbGxXZWlnaHRbZV0gKz0gdGhpcy5wYXJraW5nV2VpZ2h0W2VdO1xuICAgICAgICAgICAgdGhpcy5hbGxXZWlnaHRbZV0gKz0gdGhpcy5leHRyYVdlaWdodFtlXTtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdIC09IHRoaXMuc29ydFdlaWdodFtlXTtcbiAgICAgICAgICAgIHRoaXMuYWxsV2VpZ2h0W2VdIDwgMCAmJiAodGhpcy5hbGxXZWlnaHRbZV0gPSAwKTtcbiAgICAgICAgICAgIDAgIT0gdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbZV0gJiZcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFtlXSA+PSB0aGlzLmNvbG9yUGVyc29uQXJyW2VdICYmXG4gICAgICAgICAgICAgICAgKGNvbnNvbGUubG9nKCRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLmNvbG9yRGVzW2VdICsgXCLpopzoibLlt7Lnu4/mu6HlhYNcIiksICh0aGlzLmFsbFdlaWdodFtlXSA9IDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21CeVdlaWdodChcbiAgICAgICAgICAgIG5ldyBBcnJheSgkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5jb2xvckRlcy5sZW5ndGgpLmZpbGwoMSkubWFwKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5hbGxXZWlnaHRcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVNvcnRXZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zb3J0V2VpZ2h0ID0gbmV3IEFycmF5KHRoaXMuY29sb3JUeXBlQW1vdW50KS5maWxsKDApO1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuc29ydFBlcnNvbk5vZGVzW3RdLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3I7XG4gICAgICAgICAgICB0aGlzLnNvcnRXZWlnaHRbZV0gKz0gdGhpcy5sZXZlbERhdGFKU09OLnNvcnRXZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldENhckNvbG9yID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuY2FyTm9kZUFyci5sZW5ndGg7XG4gICAgICAgIHZhciBpID0gTWF0aC5yb3VuZCgoKHQgKyAxKSAvIG8pICogMTAwKTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBlLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGVbcl07XG4gICAgICAgICAgICBpZiAoaSA8PSBuWzFdICYmIGkgPj0gblswXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbUNvbG9yTnVtW3JdID09IHRoaXMucmFuZG9tQ29sb3JBcnJbcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcy5yYW5kb21OdW0oMCwgdGhpcy5yYW5kb21Db2xvckFycltyXS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQ29sb3JBcnJbcl1bYV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy5yYW5kb21Db2xvck51bVtyXTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMucmFuZG9tQ29sb3JBcnJbcl1bc107XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb21Db2xvck51bVtyXSArPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDYXJJRCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmRpY3QuY2FyUGFya1Jvb3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5kaWN0LmNhclBhcmtSb290LmNoaWxkcmVuLmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmRpY3QuY2FyUGFya1Jvb3QuY2hpbGRyZW5bZV0uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FycGFyay5kZWZhdWx0KS5jYXJQYXJrQ2FycztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJOb2RlQXJyLnB1c2gob1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FyTm9kZUFyci5zb3J0KGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnBhdGggLSBlLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucGF0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FyTm9kZUFyci5mb3JFYWNoKGZ1bmN0aW9uKGUsIG8pIHtcbiAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJJRCA9IG87XG4gICAgICAgICAgICBpZiAodC5pc0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBjYy5pbnN0YW50aWF0ZShlLmdldENoaWxkQnlOYW1lKFwicGF0aFwiKSk7XG4gICAgICAgICAgICAgICAgaS5wb3NpdGlvbiA9IGNjLnYyKDAsIC0yMCk7XG4gICAgICAgICAgICAgICAgaS5wYXJlbnQgPSBlO1xuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIklEXCIgKyBvO1xuICAgICAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYXJBbGxBbW91bnQgPSB0aGlzLmNhck5vZGVBcnIubGVuZ3RoO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0QXJyQnlMZW4gPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHQgPSB0aGlzLnNvcnRDb2xvcl9uZXc7XG4gICAgICAgIHZhciBvID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSB0W2ldO1xuICAgICAgICAgICAgaWYgKGkgPj0gZVswXSAmJiBpIDw9IGVbMV0pIHtcbiAgICAgICAgICAgICAgICBvLnB1c2gocik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRPdGhlckNhckJ5RGlzdGFuY2UgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICB2YXIgaSA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGkubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIHZhciBuID0gaVtyXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBuICYmXG4gICAgICAgICAgICAgICAgbiAhPSB0ICYmXG4gICAgICAgICAgICAgICAgbi5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhclN0YXRlID09ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLkNhclN0YXRlLklkbGUgJiZcbiAgICAgICAgICAgICAgICBuLmFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgICFuLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXIgJiZcbiAgICAgICAgICAgICAgICAhbi5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVVRyYW5zcG9ydENhclxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgJiYgdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnByZXZDYXIgPT0gbikge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG8ucHVzaChuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIG8uc29ydChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHQ7XG4gICAgICAgICAgICB2YXIgaSA9IGU7XG4gICAgICAgICAgICB2YXIgciA9IFtvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksIG8uY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC1vLmhlaWdodCkpXTtcbiAgICAgICAgICAgIHZhciBuID0gW2kuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSwgaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLWkuaGVpZ2h0KSldO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoYSwgclswXSwgclsxXSwgITApIC1cbiAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ucG9pbnRMaW5lRGlzdGFuY2UoYSwgblswXSwgblsxXSwgITApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRQYXRoID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgdmFyIG87XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgdmFyIG47XG4gICAgICAgIHZhciBhO1xuICAgICAgICB2YXIgcyA9IHQ7XG4gICAgICAgIGlmIChzLnBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1RyYW1jYXIpIHtcbiAgICAgICAgICAgIHMucGF0aCA9IDMwO1xuICAgICAgICAgICAgcmV0dXJuIHMucGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBzLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVmdE9ibGlxdWVDYXIgfHxcbiAgICAgICAgICAgIHMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5yaWdodE9ibGlxdWVDYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocy5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVVRyYW5zcG9ydENhcl9ub0luKSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYyA9IHMud2lkdGg7XG4gICAgICAgIHZhciBsID0gcy5oZWlnaHQ7XG4gICAgICAgIGUgPSBzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtYyAvIDIsIC1sKSk7XG4gICAgICAgIG8gPSBzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtYyAvIDIsIDIyNTApKTtcbiAgICAgICAgaSA9IHMuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKGMgLyAyLCAtbCkpO1xuICAgICAgICByID0gcy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoYyAvIDIsIDIyNTApKTtcbiAgICAgICAgbiA9IHMuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC1sKSk7XG4gICAgICAgIGEgPSBzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAyMjUwKSk7XG4gICAgICAgIHZhciBoID0gdGhpcy5nZXRPdGhlckNhckJ5RGlzdGFuY2Uocyk7XG4gICAgICAgIHZhciBwID0gITE7XG4gICAgICAgIGlmIChzLmNvbGxpc2lvbkFycikge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMuY29sbGlzaW9uQXJyID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQgPSAxO1xuICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGgubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgIHZhciBnID0gaFt1XTtcbiAgICAgICAgICAgIGlmIChnICE9IHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgICB2YXIgdjtcbiAgICAgICAgICAgICAgICB2YXIgeTtcbiAgICAgICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgICAgICB2YXIgUyA9IGcud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBnLmhlaWdodDtcbiAgICAgICAgICAgICAgICBtID0gZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLVMgLyAyLCAtaykpO1xuICAgICAgICAgICAgICAgIGYgPSBnLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtUyAvIDIsIDApKTtcbiAgICAgICAgICAgICAgICB2ID0gZy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoUyAvIDIsIC1rKSk7XG4gICAgICAgICAgICAgICAgeSA9IGcuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKFMgLyAyLCAwKSk7XG4gICAgICAgICAgICAgICAgQyA9IGcuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKFMgLyAyICsgMSwgMCkpO1xuICAgICAgICAgICAgICAgIF8gPSBnLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtUyAvIDIgLSAxLCAwKSk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoZSwgbywgbSwgZikgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIHYsIHkpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShpLCByLCBtLCBmKSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUoaSwgciwgdiwgeSkgfHxcbiAgICAgICAgICAgICAgICAgICAgY2MuSW50ZXJzZWN0aW9uLmxpbmVMaW5lKGUsIG8sIEMsIF8pIHx8XG4gICAgICAgICAgICAgICAgICAgIGNjLkludGVyc2VjdGlvbi5saW5lTGluZShpLCByLCBDLCBfKSB8fFxuICAgICAgICAgICAgICAgICAgICBjYy5JbnRlcnNlY3Rpb24ubGluZUxpbmUobiwgYSwgQywgXylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZy5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkICs9IGcucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgKz0gdGhpcy5nZXRQYXRoKGcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHMucGF0aCA9IGQpLCBkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChzLnBhdGggPSAxKSwgMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGFzQ29tbW9uRWxlbWVudCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgcmV0dXJuIHQuc29tZShmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICByZXR1cm4gZS5pbmNsdWRlcyh0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hcmVBbGxOdW1iZXJzU21hbGxlclRoYW4gPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHJldHVybiB0LmV2ZXJ5KGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0IDwgZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVja1dlaWdodExpbWl0ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndlaWdodExpbWl0SW5kZXggPSBlO1xuICAgICAgICB2YXIgbyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRbaV0gPCB0aGlzLmxldmVsRGF0YUpTT04ud2VpZ2h0TGltaXRbZV0pIHtcbiAgICAgICAgICAgICAgICBvICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG8gPj0gdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxldmVsRGF0YUpTT04ud2VpZ2h0TGltaXRbZSArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tXZWlnaHRMaW1pdCh0LCBlICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndlaWdodExpbWl0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZldGNoTWF4SW5kZXggPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHJldHVybiB0XG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydChmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWUgLSB0LnZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odCwgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvIDwgZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdC5rZXk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJhbmRvbUJ5V2VpZ2h0ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBpZiAodC5sZW5ndGggIT0gZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInJhbmRvbTLovpPlhaXkuI3lkIjms5U6IHJlc3VsdEFyci5sZW5ndGggIT0gd2VpZ2h0QXJyLmxlbmd0aFwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gdGhpcy5mZXRjaE1heEluZGV4KGUsIHRoaXMubGV2ZWxEYXRhSlNPTi5saW1pdFJhbmsgfHwgJGxldmVsXzI0OTY2N19idXNDb25maWcuY29sb3JEZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlW2ldO1xuICAgICAgICAgICAgby5pbmNsdWRlcyhpKSB8fCAoZVtpXSA9IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFycmF5c0VxdWFsKGUsIG5ldyBBcnJheSgkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5jb2xvckRlcy5sZW5ndGgpLmZpbGwoMCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE9cIik7XG4gICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8ICRsZXZlbF8yNDk2NjdfYnVzQ29uZmlnLmNvbG9yRGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbaV0ubGVuZ3RoICYmIHRoaXMuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2ldIDwgdGhpcy5jb2xvclBlcnNvbkFycltpXSkge1xuICAgICAgICAgICAgICAgICAgICByLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUT0RPXCIsIHIpO1xuICAgICAgICAgICAgaWYgKHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJbdGhpcy5yYW5kb21OdW0oMCwgci5sZW5ndGggLSAxKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgIHZhciBzID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgZm9yICh2YXIgYyA9IGUubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgICAgICAgIG4gKz0gZVtjXTtcbiAgICAgICAgfVxuICAgICAgICBzICo9IG47XG4gICAgICAgIGZvciAoYyA9IGUubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgICAgICAgIGlmIChzIDw9IChhICs9IGVbY10pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRbY107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hcnJheXNFcXVhbCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgaWYgKHQubGVuZ3RoICE9PSBlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdC5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgaWYgKHRbb10gIT09IGVbb10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmFuZG9tTnVtID0gZnVuY3Rpb24odCwgZSwgbykge1xuICAgICAgICB2YXIgaSA9IGUgLSB0O1xuICAgICAgICB2YXIgciA9IG8gfHwgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuIHQgKyBNYXRoLnJvdW5kKHIgKiBpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldExvY2FsID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbERhdGFbdF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlwiICsgdGhpcy5sZXZlbElEICsgdCk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRMb2NhbCA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGFbdF0gPSBlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJcIiArIHRoaXMubGV2ZWxJRCArIHQsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbih0LCBlLCBvKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRpY3QudGlwUHJlZmFiKTtcbiAgICAgICAgdGhpcy5kaWN0LmdhbWUuYWRkQ2hpbGQoaSk7XG4gICAgICAgIGkuYWN0aXZlID0gITA7XG4gICAgICAgIGkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgaS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIodCk7XG4gICAgICAgIGkuc2V0UG9zaXRpb24oY2MudjIoMCwgLTYwKSk7XG4gICAgICAgIGkub3BhY2l0eSA9IDA7XG4gICAgICAgIGNjLnR3ZWVuKGkpXG4gICAgICAgICAgICAuYnkoMC4zLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYyKDAsIDYwKSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoZSlcbiAgICAgICAgICAgIC5ieSgwLjMsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjIoMCwgNjApLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC0yNTVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfc29ydDIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5mdW5jX3NvcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfc29ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU29ydGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzU29ydGluZyA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNTb3J0QW5pbSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgPSAxLjUpLCBbNCwgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcImdhbWVCdW5kbGVcIiwgXCJwcmVmYWIvaXRlbS9TdGFyUHJlZmFiXCIsIGNjLlByZWZhYildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IHIuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGNjLmluc3RhbnRpYXRlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRhaWxHYXMucGFyZW50LmFkZENoaWxkKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBpLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBpLnNvcnRQZXJzb25Ob2Rlc1t0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gaS5yYW5kb21OdW0oMCwgJGxldmVsXzI0OTY2N19idXNDb25maWcuY29sb3JEZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnNldENvbG9yUGVyc29uSW1nX3NvcnQobywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCAtIDEpIC8gMC4yIC0gMC4zXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmlzU29ydEFuaW0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNGYWlsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuY29uc29sZVdlaWdodChcIuaAu+adg+mHjVwiLCBpLmFsbFdlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmjpLpmJ/popzoibLpobrluo9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuZmV0Y2hNYXhJbmRleChpLmFsbFdlaWdodCwgJGxldmVsXzI0OTY2N19idXNDb25maWcuY29sb3JEZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGkuZmV0Y2hNYXhJbmRleChpLmFsbFdlaWdodCwgJGxldmVsXzI0OTY2N19idXNDb25maWcuY29sb3JEZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgQXJyYXkoJGxldmVsXzI0OTY2N19idXNDb25maWcuY29sb3JEZXMubGVuZ3RoKS5maWxsKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGkuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhID0gaS5zb3J0UGVyc29uTm9kZXNbcl0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnBlcnNvbkNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHIgPSAwOyByIDwgaS5zb3J0UGVyc29uTm9kZXMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaS5zb3J0UGVyc29uTm9kZXNbcl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdFtuXTsgMCA9PSBlW3NdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChzID0gdFsobiArPSAxKV0pLCAhKG4gPj0gJGxldmVsXzI0OTY2N19idXNDb25maWcuY29sb3JEZXMubGVuZ3RoIC0gMSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3NdIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3IgPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5zZXRDb2xvclBlcnNvbkltZ19zb3J0KHMsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJGxldmVsXzI0OTY2N19idXNDb25maWcuY29sb3JEZXNbc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuY2hlY2tQZXJzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5pc1NvcnRpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydD09PT09XCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycikpKTtcbiAgICAgICAgdmFyIHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSAocCA9IHRoaXMuc29ydFBlcnNvbk5vZGVzW2VdKS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLnBlcnNvbkNvbG9yO1xuICAgICAgICAgICAgdC5wdXNoKG8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5raI6ZmkXCIsIHQpO1xuICAgICAgICB2YXIgaSA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblswXS5jYXI7XG4gICAgICAgIHZhciByID0gaS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yO1xuICAgICAgICB2YXIgbiA9IGkuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQ7XG4gICAgICAgIHZhciBhID0gW107XG4gICAgICAgIHZhciBzID0gW107XG4gICAgICAgIGZvciAoZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICBpZiAoYS5sZW5ndGggPCBuICYmIHRbZV0gPT0gcikge1xuICAgICAgICAgICAgICAgIGEucHVzaCh0W2VdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcy5wdXNoKHRbZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjID0gYS5jb25jYXQocyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5paw5o6S5bqPXCIsIEpTT04uc3RyaW5naWZ5KGMpKTtcbiAgICAgICAgdmFyIGwgPSBuIC0gYS5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkXCIsIGwpO1xuICAgICAgICBpZiAobCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltyXSkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCBsOyBoKyspIHtcbiAgICAgICAgICAgICAgICBjLnVuc2hpZnQocik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiafooYxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGUgPSB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3JdLmxlbmd0aCAtIDE7IGUgPj0gMDsgZS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbcl1bZV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsIDw9IHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbcl1bZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbcl1bZV0gLT0gbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbCAtPSB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3JdW2VdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUGVyc29uQW1vdW50QXJyW3JdW2VdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltyXSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaWsOaOkuW6jzJcIiwgSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICBmb3IgKGUgPSAwOyBlIDwgYy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIHAgPSB0aGlzLnNvcnRQZXJzb25Ob2Rlc1tlXTtcbiAgICAgICAgICAgIHZhciBkID0gY1tlXTtcbiAgICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICAgICAgcC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHQpLnBlcnNvbkNvbG9yID0gZDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yUGVyc29uSW1nX3NvcnQoZCwgcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB1ID0gdGhpcy5jb2xvclBlcnNvbkFtb3VudEFycltkXS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQZXJzb25BbW91bnRBcnJbZF1bdV0gKz0gMTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWbnuaUtlwiLCAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5jb2xvckRlc1tkXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbZF0gLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZD09PT09XCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb2xvclBlcnNvbkFtb3VudEFycikpKTtcbiAgICAgICAgdGhpcy5jaGVja1BlcnNvbigpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmV2aXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHIubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNTb3J0aW5nID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc1NvcnRBbmltID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCA9IDEuNSksIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInByZWZhYi9pdGVtL1N0YXJQcmVmYWJcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gci5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gY2MuaW5zdGFudGlhdGUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5wYXJlbnQuYWRkQ2hpbGQobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGkuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGkuc29ydFBlcnNvbk5vZGVzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBpLnJhbmRvbU51bSgwLCAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5jb2xvckRlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuc2V0Q29sb3JQZXJzb25JbWdfc29ydChvLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0IC0gMSkgLyAwLjIgLSAwLjNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNGYWlsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucG9saWNlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmdvbGRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNTb3J0QW5pbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGkucGFya2luZ05vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IChnID0gaS5wYXJraW5nTm9kZXNbbl0pLmNhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZy5pc0VtcHR5ICYmIGEgJiYgdCA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocy5lbXB0eVNlYXRBbW91bnQpLmZpbGwocy5jYXJDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IHIuY29uY2F0KGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlW3MuY2FyQ29sb3JdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gZVtzLmNhckNvbG9yXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCArPSBzLmVtcHR5U2VhdEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtzLmNhckNvbG9yXSA9IGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZVtzLmNhckNvbG9yXSA9IHMuZW1wdHlTZWF0QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumcgOimgeS7juWQjumdouWHj+aOiVwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCBpLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSAoZyA9IGkuc29ydFBlcnNvbk5vZGVzW25dKS5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkucGVyc29uQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pbmNsdWRlcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09IChsID0gZVtwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsIC09IDEpLCAoZVtwXSA9IGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQgaW4gKChyID0gci5jb25jYXQoaCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZyA6KaB5LuO5ZCO6Z2i5YeP5o6JMjIyXCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaS5jb2xvclBlcnNvbkFtb3VudEFycikpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBlW2RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IE51bWJlcihkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobiA9IGkuY29sb3JQZXJzb25BbW91bnRBcnJbcF0ubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkuY29sb3JQZXJzb25BbW91bnRBcnJbcF1bbl0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodSA8PSBpLmNvbG9yUGVyc29uQW1vdW50QXJyW3BdW25dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jb2xvclBlcnNvbkFtb3VudEFycltwXVtuXSAtPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSAtPSBpLmNvbG9yUGVyc29uQW1vdW50QXJyW3BdW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jb2xvclBlcnNvbkFtb3VudEFycltwXVtuXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmRcIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpLmNvbG9yUGVyc29uQW1vdW50QXJyKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5yZXZpdmVBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnJldml2ZUFyciA9IHIuY29uY2F0KGkucmV2aXZlQXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucmV2aXZlQXJyID0gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgci5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBpLnNvcnRQZXJzb25Ob2Rlc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSByW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdCkucGVyc29uQ29sb3IgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuc2V0Q29sb3JQZXJzb25JbWdfc29ydChwLCBnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0LXJldml2ZUFyclwiLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGkucmV2aXZlQXJyKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgci5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IGkuc29ydFBlcnNvbk5vZGVzW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHJbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnJldml2ZUFyciA9IGkucmV2aXZlQXJyLnNwbGljZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZC1yZXZpdmVBcnJcIiwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpLnJldml2ZUFycikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5jaGVja1BlcnNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmlzU29ydGluZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfc29ydE9sZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9ICExO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG4ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3J0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNTb3J0aW5nID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc1NvcnRBbmltID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSA9IDEuNSksIFs0LCAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInByZWZhYi9pdGVtL1N0YXJQcmVmYWJcIiwgY2MuUHJlZmFiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gY2MuaW5zdGFudGlhdGUobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudGFpbEdhcy5wYXJlbnQuYWRkQ2hpbGQoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHIuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHIuc29ydFBlcnNvbk5vZGVzW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLnJhbmRvbU51bSgwLCAkbGV2ZWxfMjQ5NjY3X2J1c0NvbmZpZy5jb2xvckRlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0Q29sb3JQZXJzb25JbWdfc29ydChvLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlIC0gMSkgLyAwLjIgLSAwLjNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnBvbGljZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmdvbGRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5pc1NvcnRBbmltID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5pc0ZhaWwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmZpcnN0U29ydEluZGV4QXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRBbW91bnRBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSByLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bMF0uY2FyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2gobi5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5wdXNoKG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHIucGFya2luZ05vZGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IChwID0gci5wYXJraW5nTm9kZXNbYV0pLmNhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcC5pc0VtcHR5ICYmIHMgJiYgZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5wdXNoKHMuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5lbXB0eVNlYXRBbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHIucGFya2luZ05vZGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gKHAgPSByLnBhcmtpbmdOb2Rlc1thXSkuY2FyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXAuaXNFbXB0eSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmxlbmd0aCA8IDQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZS5wdXNoKG4uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucHVzaChuLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuZW1wdHlTZWF0QW1vdW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkoci5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaCA9IChwID0gci5zb3J0UGVyc29uTm9kZXNbYV0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnBlcnNvbkNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbaF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyLmZpcnN0U29ydEluZGV4QXJyLmluY2x1ZGVzKGgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyci5sZW5ndGggPCAyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyci5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbmV3IEFycmF5KHIuY29sb3JUeXBlQW1vdW50KS5maWxsKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCByLmNvbG9yUGVyc29uQW1vdW50QXJyLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHIuY29sb3JQZXJzb25BbW91bnRBcnJbaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmNvbG9yUGVyc29uSW5kZXhBcnJbaF0gPT0gcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBwLnNsaWNlKC0ocC5sZW5ndGggLSByLmNvbG9yUGVyc29uSW5kZXhBcnJbaF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbaF0gPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBsLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCAhPSBjW2FdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbFthXS5wdXNoKGNbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLmZpcnN0U29ydEluZGV4QXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gci5maXJzdFNvcnRJbmRleEFyclthXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmID0gci5jb2xvclBlcnNvbkFycltoXSAtIHIuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2hdKSA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHYgPSBsW2hdKVt2Lmxlbmd0aCAtIDFdID4gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZbdi5sZW5ndGggLSAxXSAtPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodlt2Lmxlbmd0aCAtIDFdID09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGcgPCB1Oykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGcgKz0gdlt2Lmxlbmd0aCAtIDFdKSA+IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZbdi5sZW5ndGggLSAxXSA9IGcgLSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnVuc2hpZnQodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsW2hdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgci5zb3J0UGVyc29uTm9kZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2ID0gci5zb3J0UGVyc29uTm9kZXNbYV0pLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnNvcnRQZXJzb25Ob2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNvbG9yUGVyc29uSW5kZXhBcnIgPSBuZXcgQXJyYXkoci5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY29sb3JQZXJzb25BbW91bnRBcnIgPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNyZWF0ZVBlcnNvbighMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaXNTb3J0aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgxID09IGUubGVuZ3RoIHx8IDIgPT0gZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyciA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZmlyc3RTb3J0QW1vdW50QXJyID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IG5ldyBBcnJheShyLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHIuc29ydFBlcnNvbk5vZGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoID0gKHAgPSByLnNvcnRQZXJzb25Ob2Rlc1thXSkuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X3BlcnNvbkl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkucGVyc29uQ29sb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmN1cnJlbnRQZXJzb25Db2xvckFtb3VudFtoXSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyci5sZW5ndGggPCBtICsgMSAmJiByLmZpcnN0U29ydEluZGV4QXJyLnB1c2goaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHt9IGVsc2UgaWYgKHIuZmlyc3RTb3J0SW5kZXhBcnIubGVuZ3RoIDwgbSArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLmNvbG9yUGVyc29uQXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodiA9IHIuY29sb3JQZXJzb25BcnJbYV0pIC0gci5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbYV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5maXJzdFNvcnRJbmRleEFyci5sZW5ndGggPCBtICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmZpcnN0U29ydEluZGV4QXJyLnB1c2goYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBuZXcgQXJyYXkoci5jb2xvclR5cGVBbW91bnQpLmZpbGwoW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGggPSAwOyBoIDwgci5jb2xvclBlcnNvbkFtb3VudEFyci5sZW5ndGg7IGgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHIuY29sb3JQZXJzb25BbW91bnRBcnJbaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuY29sb3JQZXJzb25JbmRleEFycltoXSA9PSBwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IHAuc2xpY2UoLShwLmxlbmd0aCAtIHIuY29sb3JQZXJzb25JbmRleEFycltoXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbFtoXSA9IGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IGwubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwICE9IGNbYV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsW2FdLnB1c2goY1thXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHIuZmlyc3RTb3J0SW5kZXhBcnIubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSByLmZpcnN0U29ydEluZGV4QXJyW2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh1ID0gci5maXJzdFNvcnRBbW91bnRBcnJbYV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmID0gci5jb2xvclBlcnNvbkFycltoXSAtIHIuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2hdKSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodiA9IGxbaF0pW3YubGVuZ3RoIC0gMV0gPiB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdlt2Lmxlbmd0aCAtIDFdIC09IHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi51bnNoaWZ0KHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2W3YubGVuZ3RoIC0gMV0gPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi51bnNoaWZ0KHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgZyA8IHU7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZyArPSB2W3YubGVuZ3RoIC0gMV0pID4gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdlt2Lmxlbmd0aCAtIDFdID0gZyAtIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbaF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYgPSByLnNvcnRQZXJzb25Ob2Rlc1thXSkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc29ydFBlcnNvbk5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY29sb3JQZXJzb25JbmRleEFyciA9IG5ldyBBcnJheShyLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jb2xvclBlcnNvbkFtb3VudEFyciA9IGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY3JlYXRlUGVyc29uKCEwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2hlY2tQZXJzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaXNTb3J0aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZmlyc3RTb3J0SW5kZXhBcnIgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmZpcnN0U29ydEFtb3VudEFyciA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBuZXcgQXJyYXkoci5jb2xvclR5cGVBbW91bnQpLmZpbGwoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLnNvcnRQZXJzb25Ob2Rlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaCA9IChwID0gci5zb3J0UGVyc29uTm9kZXNbYV0pLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19wZXJzb25JdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnBlcnNvbkNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jdXJyZW50UGVyc29uQ29sb3JBbW91bnRbaF0gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gbmV3IEFycmF5KHIuY29sb3JUeXBlQW1vdW50KS5maWxsKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChoID0gMDsgaCA8IHIuY29sb3JQZXJzb25BbW91bnRBcnIubGVuZ3RoOyBoKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSByLmNvbG9yUGVyc29uQW1vdW50QXJyW2hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmNvbG9yUGVyc29uSW5kZXhBcnJbaF0gPT0gcC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBwLnNsaWNlKC0ocC5sZW5ndGggLSByLmNvbG9yUGVyc29uSW5kZXhBcnJbaF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxbaF0gPSBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBsLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCAhPSBjW2FdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbFthXS5wdXNoKGNbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCByLmZpcnN0U29ydEluZGV4QXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gci5maXJzdFNvcnRJbmRleEFyclthXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSByLmZpcnN0U29ydEFtb3VudEFyclthXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gci5jb2xvclBlcnNvbkFycltoXSAtIHIuY3VycmVudFBlcnNvbkNvbG9yQW1vdW50W2hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHYgPSBsW2hdKVt2Lmxlbmd0aCAtIDFdID4gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZbdi5sZW5ndGggLSAxXSAtPSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodlt2Lmxlbmd0aCAtIDFdID09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudW5zaGlmdCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGcgPCB1Oykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGcgKz0gdlt2Lmxlbmd0aCAtIDFdKSA+IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZbdi5sZW5ndGggLSAxXSA9IGcgLSB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnVuc2hpZnQodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsW2hdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgci5zb3J0UGVyc29uTm9kZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYgPSByLnNvcnRQZXJzb25Ob2Rlc1thXSkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc29ydFBlcnNvbk5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY29sb3JQZXJzb25JbmRleEFyciA9IG5ldyBBcnJheShyLmNvbG9yVHlwZUFtb3VudCkuZmlsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jb2xvclBlcnNvbkFtb3VudEFyciA9IGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY3JlYXRlUGVyc29uKCEwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2hlY2tQZXJzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuaXNTb3J0aW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3VwZGF0ZUNhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdCA9IFtdO1xuICAgICAgICB2YXIgZSA9IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5jb25jYXQodGhpcy50dXJudGFibGVDYXJBcnIpO1xuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIGlmICghKGwgPSBlW29dKS5hY3RpdmUgfHxcbiAgICAgICAgICAgICAgICBsLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyU3RhdGUgIT0gJGxldmVsXzI0OTY2N19idXNDb25maWcuQ2FyU3RhdGUuSWRsZSB8fFxuICAgICAgICAgICAgICAgIGwuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1RyYW5zcG9ydENhciB8fFxuICAgICAgICAgICAgICAgIGwuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1VUcmFuc3BvcnRDYXIgfHxcbiAgICAgICAgICAgICAgICBsLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNCbGFja0NhclxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdC5wdXNoKGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSB0W2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0W25dO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgciAhPSBhICYmXG4gICAgICAgICAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5zZWF0VG90YWxBbW91bnQgPT1cbiAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnNlYXRUb3RhbEFtb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICByLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY2FyQ29sb3IgIT1cbiAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yICYmXG4gICAgICAgICAgICAgICAgICAgICFyLmlzRXhjaGFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgIWEuaXNFeGNoYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMucmFuZG9tTnVtKDAsIDEpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGEuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gYztcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gcztcbiAgICAgICAgICAgICAgICAgICAgci5pc0V4Y2hhbmdlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGEuaXNFeGNoYW5nZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENhckNvbG9ySW1nKHIsIHIuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5jYXJDb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyQ29sb3JJbWcoYSwgYS5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICB2YXIgbDtcbiAgICAgICAgICAgIChsID0gZVtvXSkuaXNFeGNoYW5nZSA9ICExO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3JlbW92ZUNhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlzVHJhbnNwb3J0Q2FyTW92ZSA9ICExO1xuICAgICAgICBpZiAodGhpcy5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KS5pc1RyYW5zcG9ydENhck1vdmUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGljdC50aXBQcmVmYWIpO1xuICAgICAgICB0aGlzLmRpY3QudGlwUHJlZmFiLnBhcmVudC5hZGRDaGlsZCh0KTtcbiAgICAgICAgdGhpcy50aXBSZW1vdmUgPSB0O1xuICAgICAgICB0LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLlj6/mi47lh7rku7vmhI/kuIDovobmsb3ovaboh7NWSVDovabkvY3mtojpmaRcIik7XG4gICAgICAgIHQueSA9IDMwMS42NDM7XG4gICAgICAgIHQuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuaXNSZW1vdmUgPSAhMDtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiaXNSZW1vdmVcIiwgITApO1xuICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuY2FyUm9vdC5jaGlsZHJlbi5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmNhclJvb3QuY2hpbGRyZW5bZV07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLnByZXZDYXIgfHxcbiAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubmV4dENhciB8fFxuICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJrZXlcIikgfHxcbiAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwibG9ja1wiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgby5vcGFjaXR5ID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZW1vdmVDYXIgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9wVXNpbmcgPSAhMDtcbiAgICAgICAgdGhpcy50aXBSZW1vdmUuZGVzdHJveSgpO1xuICAgICAgICB2YXIgbyA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIC10LmhlaWdodCAvIDIpKTtcbiAgICAgICAgdGhpcy5kaWN0LmhlbGljb3B0ZXJSb290LnBvc2l0aW9uID0gY2MudjMoNDM0LCAtNjE0LCAwKTtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmRpY3QuaGVsaWNvcHRlclJvb3QucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgICB2YXIgciA9IHRoaXMuZGljdC5oZWxpY29wdGVyUm9vdC5wb3NpdGlvbi5zdWIoaSkubWFnKCk7XG4gICAgICAgIHRoaXMuZGljdC5oZWxpY29wdGVyU3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb24yXCIsICEwKTtcbiAgICAgICAgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdLmFjdGl2ZSA9ICEwO1xuICAgICAgICB2YXIgbiA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblswXS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoXG4gICAgICAgICAgICBjYy52MigwLCAtdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdLmhlaWdodCAvIDIpXG4gICAgICAgICk7XG4gICAgICAgIHZhciBhID0gdGhpcy5kaWN0LmhlbGljb3B0ZXJSb290LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuKTtcbiAgICAgICAgdmFyIHMgPSBpLnN1YihhKS5tYWcoKTtcbiAgICAgICAgdGhpcy5kaWN0LmhlbGljb3B0ZXJSb290LmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmRpY3QuaGVsaWNvcHRlclJvb3Qub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5kaWN0LmhlbGljb3B0ZXJSb290KVxuICAgICAgICAgICAgLnRvKHIgLyA1MDAsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogaVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMC45XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgICAgICBvLmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpLmVuYWJsZWQgPSAhMTtcbiAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubGVuSW1nTmFtZSA9IHQuZ2V0Q29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdFxuICAgICAgICAgICAgICAgICkubGVuSW1nTmFtZTtcbiAgICAgICAgICAgICAgICBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY29sb3JJbWdOYW1lID0gdC5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jb2xvckltZ05hbWU7XG4gICAgICAgICAgICAgICAgby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gdC5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jYXJDb2xvcjtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1RyYW5zcG9ydENhciAmJlxuICAgICAgICAgICAgICAgICAgICAtMSAhPT0gKGkgPSBlLnRyYW5zcG9ydENhckFyci5pbmRleE9mKHQpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBlLnRyYW5zcG9ydENhckFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmlzVVRyYW5zcG9ydENhciAmJlxuICAgICAgICAgICAgICAgICAgICAtMSAhPT0gKGkgPSBlLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N191VHJhbnNwb3J0LmRlZmF1bHQpLmNhckFyci5pbmRleE9mKHQpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBlLmRpY3QuY2FyUm9vdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N191VHJhbnNwb3J0LmRlZmF1bHQpLmNhckFycltpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGUuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdCkucmVkdWNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuaXNUdXJudGFibGVDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0LnBhcmVudC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N190dXJudGFibGUuZGVmYXVsdCkuY2Fycy5pbmRleE9mKHQpO1xuICAgICAgICAgICAgICAgICAgICB0LnBhcmVudC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N190dXJudGFibGUuZGVmYXVsdCkuY2Fycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGUudXBkYXRlVHVybnRhYmxlQ2FyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGUuZGljdC5oZWxpY29wdGVyUm9vdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5hZGRDaGlsZChvKTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IHQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICBvLnBvc2l0aW9uID0gZS5kaWN0LmhlbGljb3B0ZXJSb290LmdldENoaWxkQnlOYW1lKFwiY2FyXCIpLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMC4zKVxuICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKHMgLyA1MDAsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMC45XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBlLmRpY3QuaGVsaWNvcHRlclJvb3QuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBvLmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY29sb3JJbWdOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBuID0gby5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWU7XG4gICAgICAgICAgICAgICAgaWYgKG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1JpY2hDYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBjYy5pbnN0YW50aWF0ZShlLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMTE2XCIgKyBuKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5pc1RyYW1jYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBjYy5pbnN0YW50aWF0ZShlLmRpY3QuY2FyUHJlZmFiLmdldENoaWxkQnlOYW1lKFwiMTM2XCIgKyBuKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gY2MuaW5zdGFudGlhdGUoZS5kaWN0LmNhclByZWZhYi5nZXRDaGlsZEJ5TmFtZShcIjA2XCIgKyBuKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5wYXJraW5nID0gZS5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJjYXJcIikuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9ICExO1xuICAgICAgICAgICAgICAgIHQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgZS5jYXJSb290LmFkZENoaWxkKHQpO1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIHZhciBzID0gdC5wYXJraW5nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgICAgICAgICAgaSA9IHQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHMpO1xuICAgICAgICAgICAgICAgIHQucG9zaXRpb24gPSBjYy52MihpLngsIGkueSk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBcIlwiICsgciArIDYgKyBuO1xuICAgICAgICAgICAgICAgIGEgPSBcInRleHR1cmUvXCIgKyBlLmZvbGRlciArIFwiL1wiICsgZS5mb2xkZXIgKyBcIl9cIiArIGM7XG4gICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmNhckNvbG9yID0gby5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jYXJDb2xvcjtcbiAgICAgICAgICAgICAgICB0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkuY29sb3JJbWdOYW1lID0gby5nZXRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgKS5jb2xvckltZ05hbWU7XG4gICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHQpLmxlbkltZ05hbWUgPSBvLmdldENvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgJGxldmVsXzI0OTY2N19jYXJJdGVtLmRlZmF1bHRcbiAgICAgICAgICAgICAgICApLmxlbkltZ05hbWU7XG4gICAgICAgICAgICAgICAgdC5wYXJraW5nLmNhciA9IHQ7XG4gICAgICAgICAgICAgICAgdC5wYXJraW5nLmlzRW1wdHkgPSAhMTtcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChhLCBmdW5jdGlvbihpLCByKSB7XG4gICAgICAgICAgICAgICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5nZXRDaGlsZEJ5TmFtZShcImNhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0LmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBlLmRpY3QuaGVsaWNvcHRlclJvb3Qub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pc1JlbW92ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVQcm9wVXNpbmcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kaWN0LmNhclJvb3QuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfdVRyYW5zcG9ydC5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGljdC5jYXJSb290LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X3VUcmFuc3BvcnQuZGVmYXVsdCkuaXNUcmFuc3BvcnRDYXJNb3ZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnVwZGF0ZVRyYW5zcG9ydEFtb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiaXNSZW1vdmVcIiwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBlLmNhclJvb3QuY2hpbGRyZW4ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUuY2FyUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5wcmV2Q2FyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5uZXh0Q2FyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZ2V0Q2hpbGRCeU5hbWUoXCJrZXlcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5nZXRDaGlsZEJ5TmFtZShcImxvY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3Jldml2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5mdW5jX2hhc0xvY2tQYXJraW5nKCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmRpY3QucGFya2luZ1Jvb3QuY2hpbGRyZW5bdF07XG4gICAgICAgICAgICAgICAgaWYgKGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikgJiYgZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5nZXRDaGlsZEJ5TmFtZShcInZpZGVvTG9ja1wiKS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJlbXB0eVwiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5VW5sb2NrU3BpbmUoZSk7XG4gICAgICAgICAgICAgICAgICAgIGUuaXNFbXB0eSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmtpbmdOb2Rlcy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgIHF1ZXVlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpLFxuICAgICAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yZXZpdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgcXVldWU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCksXG4gICAgICAgICAgICAgICAgaWQ6IDksXG4gICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJldml2ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2hhc0xvY2tQYXJraW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5kaWN0LnBhcmtpbmdSb290LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMuZGljdC5wYXJraW5nUm9vdC5jaGlsZHJlblt0XTtcbiAgICAgICAgICAgIGlmIChlLmdldENoaWxkQnlOYW1lKFwidmlkZW9Mb2NrXCIpICYmIGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0xvY2tcIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfZW5kUGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLmRpY3QucGVyc29uUm9vdC5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnBlcnNvblJvb3QuY2hpbGRyZW5bdF0ucGF1c2VBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmZ1bmNfcmVzdW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5kaWN0LnBlcnNvblJvb3QuY2hpbGRyZW4ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5wZXJzb25Sb290LmNoaWxkcmVuW3RdLnJlc3VtZUFsbEFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX19kZWNvcmF0ZShbel0sIGUucHJvdG90eXBlLCBcImlzRGVidWdcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFt6XSwgZS5wcm90b3R5cGUsIFwiYm91bmRhcnlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFt6XSwgZS5wcm90b3R5cGUsIFwiaXNXYXRlck1vZGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFt6XSwgZS5wcm90b3R5cGUsIFwiaXNIaWdoU3BlZWRSYWlsd2F5XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbJGxpbWl0UmVwZWF0LkxpbWl0UmVwZWF0KDAuMyldLCBlLnByb3RvdHlwZSwgXCJ0b3VjaFN0YXJ0XCIsIG51bGwpO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtVXSwgZSk7XG59KSgkYnJhaW5MZXZlbEJhc2UuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBIOyJdfQ==