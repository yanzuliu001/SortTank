"use strict";
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