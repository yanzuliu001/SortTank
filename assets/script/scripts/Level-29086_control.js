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
    t[(t.map1 = 1)] = "map1";
    t[(t.map2 = 2)] = "map2";
    t[(t.map3 = 3)] = "map3";
    t[(t.map4 = 4)] = "map4";
    t[(t.map5 = 5)] = "map5";
    t[(t.map6 = 6)] = "map6";
    t[(t.map7 = 7)] = "map7";
    t[(t.map8 = 8)] = "map8";
    t[(t.map9 = 9)] = "map9";
    t[(t.map10 = 10)] = "map10";
    t[(t.map101 = 101)] = "map101";
    t[(t.map102 = 102)] = "map102";
})(c || (c = {}));
(function (t) {
    t[(t.normal = 0)] = "normal";
    t[(t.back = 1)] = "back";
    t[(t.slowStart = 2)] = "slowStart";
    t[(t.item1Start = 3)] = "item1Start";
    t[(t.item2Start = 4)] = "item2Start";
    t[(t.item3Start = 5)] = "item3Start";
    t[(t.revive = 6)] = "revive";
})(l || (l = {}));
var TANK_SKIN_LEVEL_IDS = {
    "-29095": !0,
    "-29290": !0
};
var TANK_SKIN_SPRITE_DIR = "zqddn_zhb/texture/tank/";
var TANK_SKIN_COLOR = {
    0: "purple",
    1: "yellow",
    2: "blue",
    3: "blue",
    4: "green",
    5: "purple",
    6: "purple",
    7: "yellow"
};
var TANK_SKIN_DIR = {
    0: 2,
    45: 0,
    90: 1,
    135: 4,
    180: 7,
    225: 6,
    270: 5,
    315: 3
};
var W = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.box2SpriteAtlas = null;
        e.tankSpriteFrameCache = {};
        e.tankSpriteFrameLoading = {};
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
        e.guideText = [
            "箱子会朝着箭头方向移动",
            "这种箱子可以发射10颗炮弹",
            "这种箱子可以发射6颗炮弹",
            "这种箱子可以发射4颗炮弹"
        ];
        e.currentGuideNode = null;
        e.guidedNodes = [];
        e.poolMgr = new $poolMgr.default();
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
                    this.dict["map" + e] &&
                        e != this.mapType &&
                        (this.dict["map" + e].removeFromParent(), this.dict["mapBg" + e].removeFromParent());
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
                                this.mapType == c.map5
                                    ? (r = $level_29086_config.DrinkPosArr5)
                                    : this.mapType == c.map6
                                    ? (r = $level_29086_config.DrinkPosArr6)
                                    : this.mapType == c.map7
                                    ? (r = $level_29086_config.DrinkPosArr7)
                                    : this.mapType == c.map8
                                    ? (r = $level_29086_config.DrinkPosArr8)
                                    : this.mapType == c.map9
                                    ? (r = $level_29086_config.DrinkPosArr9)
                                    : this.mapType == c.map10
                                    ? (r = $level_29086_config.DrinkPosArr10)
                                    : this.mapType == c.map101
                                    ? ((r = $level_29086_config.DrinkPosArr101_1),
                                      (n = $level_29086_config.DrinkPosArr101_2))
                                    : this.mapType == c.map102 &&
                                      ((r = $level_29086_config.DrinkPosArr102_1),
                                      (n = $level_29086_config.DrinkPosArr102_2));
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
                if (this.dict.tailGas.getComponent($motionTrail.default)) {
                    this.dict.tailGas.getComponent($motionTrail.default).length = 25;
                    this.dict.tailGas.getComponent($motionTrail.default).headWidth = 35;
                    this.dict.tailGas.getComponent($motionTrail.default).tailWidth = 20;
                    this.dict.tailGas.getComponent($motionTrail.default).headOpacity = 230;
                    this.dict.tailGas.getComponent($motionTrail.default).tailOpacity = 40;
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
        cc.tween(this.dict.sz)
            .to(0.6, {
                scale: 1
            })
            .to(0.6, {
                scale: 1.1
            })
            .union()
            .repeatForever()
            .start();
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
                t.getComponent($level_29086_boxCarItem.default).isReadyDestroy = !0;
                r = t.getComponent($level_29086_boxCarItem.default).colorImgName;
                n = t.getComponent($level_29086_boxCarItem.default).lenImgName;
                if (i) {
                    (a = cc.instantiate(this.dict.carPrefab.getChildByName(i))).parking = t.parking;
                } else {
                    a = cc.instantiate(this.dict.carPrefab.getChildByName("02" + n));
                }
                a.getComponent($level_29086_boxCarItem.default).carState = t.getComponent(
                    $level_29086_boxCarItem.default
                ).carState;
                a.active = !1;
                this.carRoot.addChild(a);
                a.getComponent($level_29086_boxCarItem.default).mgr = this;
                a.getComponent($level_29086_boxCarItem.default).colorImgName = r;
                a.getComponent($level_29086_boxCarItem.default).lenImgName = n;
                a.getComponent($level_29086_boxCarItem.default).dirImgName = e;
                a.getComponent($level_29086_boxCarItem.default).carColor = t.getComponent(
                    $level_29086_boxCarItem.default
                ).carColor;
                if (4 == e || 5 == e) {
                    a.position = cc.v2(t.x, t.y);
                    l = a.convertToWorldSpaceAR(cc.v2(0, t.height / 2));
                    c = a.parent.convertToNodeSpaceAR(l);
                    a.position = cc.v2(c.x, c.y);
                } else {
                    if (0 == o) {
                        a.position = cc.v2(t.x, t.y + t.height / 2);
                    } else {
                        if (
                            a.getComponent($level_29086_boxCarItem.default).carState ==
                            $level_29086_config.CarState.OnBottomLeft
                        ) {
                            a.position = cc.v2(t.x - t.width / 2, t.y);
                        } else {
                            if (
                                a.getComponent($level_29086_boxCarItem.default).carState ==
                                $level_29086_config.CarState.OnBottomRight
                            ) {
                                a.position = cc.v2(t.x + t.width / 2, t.y);
                            } else {
                                1 == o
                                    ? ((l = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position)),
                                      (c = a.parent.convertToNodeSpaceAR(l)),
                                      (a.position = cc.v2(t.x + t.width / 2, c.y)))
                                    : ((l = this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position)),
                                      (c = a.parent.convertToNodeSpaceAR(l)),
                                      (a.position = cc.v2(t.x - t.width / 2, c.y)));
                            }
                        }
                    }
                }
                if (
                    a.getComponent($level_29086_boxCarItem.default).carState ==
                    $level_29086_config.CarState.GoingParking
                ) {
                    h = a.parking.convertToWorldSpaceAR(cc.v2(0, 0));
                    c = a.parent.convertToNodeSpaceAR(h);
                    a.position = cc.v2(c.x, c.y);
                }
                p =
                    "f29086_" +
                    $level_29086_config.getCarImgByColor(a, t.getComponent($level_29086_boxCarItem.default).carColor);
                g =
                    "f29086_" +
                    $level_29086_config.getCarBodyImgByColor(
                        a,
                        t.getComponent($level_29086_boxCarItem.default).carColor
                    );
                a.stopAllActions();
                (function () {
                    if (t.getChildByName("tailGasSpine")) {
                        m.poolMgr.put(t.getChildByName("tailGasSpine"), "tailGasSpine");
                    }
                    if (t.getChildByName("tailGas")) {
                        t.getChildByName("tailGas").destroy();
                    }
                    var e = t.getComponent($level_29086_boxCarItem.default).nextCar;
                    try {
                        if (e && e.getComponent($level_29086_boxCarItem.default)) {
                            e.getComponent($level_29086_boxCarItem.default).carState =
                                $level_29086_config.CarState.Normal;
                        }
                    } catch (v) {}
                    if (t.isTransportBox) {
                        m.dict.transportLayer.getComponent($level_29086_transport.default).reduceCarAmount(t);
                    }
                    t.destroy();
                    a.getChildByName("car").getComponent(cc.Sprite).spriteFrame = m.box2SpriteAtlas.getSpriteFrame(p);
                    if (a.getChildByName("body")) {
                        a.getChildByName("body").getComponent(cc.Sprite).spriteFrame =
                            m.box2SpriteAtlas.getSpriteFrame(g);
                    }
                    m.applyTankSkin(a, a.getComponent($level_29086_boxCarItem.default).carColor);
                    a.active = !0;
                    var o = a.convertToWorldSpaceAR(cc.v2(0, 2250));
                    var i = a.parent.convertToNodeSpaceAR(o);
                    if (
                        a.getComponent($level_29086_boxCarItem.default).carState ==
                            $level_29086_config.CarState.InRoadRight ||
                        a.getComponent($level_29086_boxCarItem.default).carState ==
                            $level_29086_config.CarState.InRoadLeft
                    ) {
                        var r;
                        var n = a.parent.convertToWorldSpaceAR(a.position);
                        var s = void 0;
                        if (a.getComponent($level_29086_boxCarItem.default).isFireEngine) {
                            var c = a.parking.getChildByName("fireCarPos").position;
                            s = a.parking.convertToWorldSpaceAR(c);
                        } else {
                            s = a.parking.currentParkingWPos;
                        }
                        a.setSiblingIndex(0);
                        r = a.parking.currentParkingNPos;
                        var l = Math.abs(s.x - n.x);
                        m.addTailGasSpine(a);
                        cc.tween(a)
                            .to(l / a.getComponent($level_29086_boxCarItem.default).speed, {
                                x: r.x
                            })
                            .call(function () {
                                a.getComponent($level_29086_boxCarItem.default).carState =
                                    $level_29086_config.CarState.GoingParking;
                                console.log("isRichCar", a.getComponent($level_29086_boxCarItem.default).isRichCar);
                                if (a.getComponent($level_29086_boxCarItem.default).isRichCar) {
                                    m.changeCar(
                                        a,
                                        6,
                                        0,
                                        "116" + a.getComponent($level_29086_boxCarItem.default).lenImgName
                                    );
                                } else {
                                    if (a.getComponent($level_29086_boxCarItem.default).isTramcar) {
                                        m.changeCar(
                                            a,
                                            6,
                                            0,
                                            "136" + a.getComponent($level_29086_boxCarItem.default).lenImgName
                                        );
                                    } else {
                                        m.changeCar(
                                            a,
                                            6,
                                            0,
                                            "06" + a.getComponent($level_29086_boxCarItem.default).lenImgName
                                        );
                                    }
                                }
                            })
                            .start();
                    } else if (
                        a.getComponent($level_29086_boxCarItem.default).carState ==
                        $level_29086_config.CarState.GoingParking
                    ) {
                        s = void 0;
                        if (a.parking) {
                            s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.parking.height / 2));
                            var h = a.parent.convertToNodeSpaceAR(s);
                            a.getComponent($level_29086_boxCarItem.default).carState =
                                $level_29086_config.CarState.Parking;
                            a.stopAllActions();
                            a.getChildByName("car").getComponent(cc.Sprite).spriteFrame =
                                m.box2SpriteAtlas.getSpriteFrame(p);
                            if (a.getChildByName("body")) {
                                a.getChildByName("body").getComponent(cc.Sprite).spriteFrame =
                                    m.box2SpriteAtlas.getSpriteFrame(g);
                            }
                            m.applyTankSkin(a, a.getComponent($level_29086_boxCarItem.default).carColor);
                            l = h.sub(a.position).mag();
                            cc.tween(a)
                                .to(l / a.getComponent($level_29086_boxCarItem.default).speed, {
                                    position: h
                                })
                                .call(function () {
                                    m.updateCarWeight();
                                    a.parking.car = a;
                                    var t = a.getComponent($level_29086_boxCarItem.default).seatTotalAmount;
                                    a.getChildByName("sd").active = !1;
                                    a.getChildByName("shadow").active = !0;
                                    var e = Number(a.name[2]);
                                    var o = a.getComponent($level_29086_boxCarItem.default).carColor;
                                    if (a.getChildByName("body")) {
                                        a.getChildByName("body").active = !1;
                                    }
                                    a.getChildByName("car").active = !1;
                                    a.getChildByName("sd").active = !1;
                                    a.getChildByName("shadow").active = !1;
                                    a.getChildByName("boxSpine").active = !0;
                                    a.getChildByName("boxSpine").getComponent(sp.Skeleton).timeScale = 2;
                                    a.getChildByName("boxSpine")
                                        .getComponent(sp.Skeleton)
                                        .setSkin("skin" + (o + 1));
                                    a.getChildByName("boxSpine")
                                        .getComponent(sp.Skeleton)
                                        .setAnimation(0, "open" + (3 - e + 1), !1);
                                    a.getChildByName("boxSpine")
                                        .getComponent(sp.Skeleton)
                                        .setCompleteListener(function () {
                                            a.getComponent($level_29086_boxCarItem.default).carState =
                                                $level_29086_config.CarState.OutParking;
                                            var e = m.getCannon();
                                            if (m._item4Start) {
                                                m.showItem4Spine(e);
                                            }
                                            if (m._item5Start) {
                                                m.showItem5Spine(e);
                                            }
                                            m.dict.cannonRoot.addChild(e);
                                            e.position = e.parent.convertToNodeSpaceAR(
                                                a.parking.convertToWorldSpaceAR(cc.v2(0, 0))
                                            );
                                            e.getChildByName("body").getComponent(cc.Sprite).spriteFrame =
                                                m.box2SpriteAtlas.getSpriteFrame("f29086_" + (o + 1 + 2e3));
                                            e.getChildByName("bullet").getComponent(cc.Sprite).spriteFrame =
                                                m.box2SpriteAtlas.getSpriteFrame("f29086_" + (o + 1 + 2200));
                                            e.getChildByName("num").getComponent(cc.Label).string = "x" + t;
                                            e.parking = a.parking;
                                            e[m._cannonType] = o;
                                            e[m._cannonNum] = t;
                                            e[m._cannonState] = 0;
                                            e.getChildByName("cannon")
                                                .getComponent(sp.Skeleton)
                                                .setSkin("skin" + (o + 1));
                                            e.getChildByName("cannon")
                                                .getComponent(sp.Skeleton)
                                                .setAnimation(0, "enter", !1);
                                            e.getChildByName("cannon")
                                                .getComponent(sp.Skeleton)
                                                .setCompleteListener(function () {
                                                    e[m._cannonState] = 1;
                                                    e.getChildByName("cannon")
                                                        .getComponent(sp.Skeleton)
                                                        .setAnimation(0, "idle", !0);
                                                });
                                        });
                                    m.putTailGas(a);
                                })
                                .start();
                        }
                    } else if (
                        a.getComponent($level_29086_boxCarItem.default).carState ==
                        $level_29086_config.CarState.GoingRoad
                    ) {
                        n = m.dict.road.parent.convertToWorldSpaceAR(m.dict.road.position);
                        var f = a.parent.convertToWorldSpaceAR(a.position);
                        l = Math.abs(f.y - n.y);
                        m.addTailGasSpine(a);
                        cc.tween(a)
                            .by(l / a.getComponent($level_29086_boxCarItem.default).speed, {
                                y: l
                            })
                            .call(function () {
                                m.collision(a);
                            })
                            .start();
                    } else {
                        m.addTailGasSpine(a);
                        cc.tween(a)
                            .to(2250 / a.getComponent($level_29086_boxCarItem.default).speed, {
                                position: i
                            })
                            .start();
                    }
                })();
                return [2];
            });
        });
    };
    e.prototype.load = function (t) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function () {
                return [
                    2,
                    new Promise(function (e, o) {
                        cc.resources.load(t, function (t, i) {
                            if (t) {
                                return cc.warn(t), o(t);
                            } else {
                                return e(new cc.SpriteFrame(i));
                            }
                        });
                    })
                ];
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
        t.getComponent($level_29086_boxCarItem.default).isReadyDestroy = !0;
        if (!t.getComponent($level_29086_boxCarItem.default).isFireEngine) {
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
                    e.getComponent($level_29086_boxCarItem.default).carState = $level_29086_config.CarState.InRoadLeft;
                    if (e.getComponent($level_29086_boxCarItem.default).isRichCar) {
                        (e.getComponent($level_29086_boxCarItem.default).lenImgName = 1),
                            this.changeCar(
                                e,
                                1,
                                2,
                                "111" + e.getComponent($level_29086_boxCarItem.default).lenImgName + "-0"
                            );
                    } else {
                        this.changeCar(
                            e,
                            1,
                            2,
                            "01" + e.getComponent($level_29086_boxCarItem.default).lenImgName + "-0"
                        );
                    }
                } else {
                    e.getComponent($level_29086_boxCarItem.default).carState = $level_29086_config.CarState.InRoadRight;
                    if (e.getComponent($level_29086_boxCarItem.default).isRichCar) {
                        (e.getComponent($level_29086_boxCarItem.default).lenImgName = 1),
                            this.changeCar(
                                e,
                                1,
                                1,
                                "111" + e.getComponent($level_29086_boxCarItem.default).lenImgName + "-1"
                            );
                    } else {
                        this.changeCar(
                            e,
                            1,
                            1,
                            "01" + e.getComponent($level_29086_boxCarItem.default).lenImgName + "-1"
                        );
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
                    this.dict.transportLayer
                        .getComponent($level_29086_transport.default)
                        .init(this, this.levelDataJSON.transport);
                }
                for (_ = 0; _ < this.dict.parkingRoot.childrenCount; _++) {
                    !(t = this.dict.parkingRoot.children[_]).active ||
                        t.getChildByName("videoLock") ||
                        t.getChildByName("fireSpine") ||
                        ((t.isEmpty = !0), this.parkingNodes.push(t));
                    t.getChildByName("videoLock") &&
                        ((t.getChildByName("videoLock").active = !0),
                        (t.getChildByName("videoLock").getChildByName("text").getComponent(cc.Label).overflow =
                            cc.Label.Overflow.SHRINK),
                        (t.getChildByName("videoLock").getChildByName("text").width = 80),
                        (t.getChildByName("videoLock").getChildByName("text").scale = 0.85));
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
                    this.dict.carParkRoot
                        .getComponent($level_29086_carPark.default)
                        .init(this, this.levelDataJSON.carpark);
                }
                i = this.getLocal("blackCar") || [];
                r = this.carRoot.children.concat(this.turntableCarArr);
                for (_ = 0; _ < r.length; _++) {
                    n = r[_];
                    this.carNodeArr.push(n);
                    n.getComponent($level_29086_boxCarItem.default).mgr = this;
                    n.indexID = "" + _;
                    a = this.getPath(n);
                    this.levelDataJSON.blackAmount && !i.length && a >= 2 && a <= 4 && this.between2_4CarArr.push(n);
                    n.getComponent($level_29086_boxCarItem.default).path = a;
                    this.isDebug &&
                        (((c = new cc.Node()).name = "path"),
                        (c.addComponent(cc.Label).string = "" + a),
                        (c.color = cc.Color.WHITE),
                        n.addChild(c),
                        (c.position = cc.v2(-13.105, -26.21)));
                    this.allPersonAmount += n.getComponent($level_29086_boxCarItem.default).seatTotalAmount;
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
                            (g = this.between2_4CarArr[N]).getComponent($level_29086_boxCarItem.default).isBlackCar =
                                !0;
                            i.push(g.getComponent($level_29086_boxCarItem.default).carID);
                        }
                    } else {
                        l = this.getRandomDistinctElements(this.between2_4CarArr, this.levelDataJSON.blackAmount);
                        for (N = 0; N < l.length; N++) {
                            (g = l[N]).getComponent($level_29086_boxCarItem.default).isBlackCar = !0;
                            i.push(g.getComponent($level_29086_boxCarItem.default).carID);
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
                        (A = this.levelDataJSON.carWeight[v.getComponent($level_29086_boxCarItem.default).path - 1]) ||
                            (A = 1);
                        this.carWeight[k] += A * v.getComponent($level_29086_boxCarItem.default).emptySeatAmount;
                    }
                    this.setLocal("colorConfig", h);
                } else {
                    for (_ = 0; _ < this.carNodeArr.length; _++) {
                        S = this.carNodeArr[_];
                        k = h[_];
                        i.includes(S.getComponent($level_29086_boxCarItem.default).carID) &&
                            (S.getComponent($level_29086_boxCarItem.default).isBlackCar = !0);
                        this.setCarColorImg(S, k);
                        (A = this.levelDataJSON.carWeight[S.getComponent($level_29086_boxCarItem.default).path - 1]) ||
                            (A = 1);
                        this.carWeight[k] += A * S.getComponent($level_29086_boxCarItem.default).emptySeatAmount;
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
                (P = cc.instantiate(this.dict.longtou)).getComponent($level_29086_dragonItem.default).dragonColor = 1;
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
                cc.tween(P)
                    .delay($levelUtils.default.getRandomInt(3, 8))
                    .call(function () {
                        if (W.isWin || W.isReviveBack || W._item1Start) {
                            //
                        } else {
                            P.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
                            P.getComponent(sp.Skeleton).addAnimation(0, "angry", !1);
                            P.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);
                        }
                    })
                    .delay(1.5)
                    .union()
                    .repeatForever()
                    .start();
                this._curLastBoxItemNode = P;
                if (this.personPosRoot2) {
                    (x = cc.instantiate(this.dict.longtou)).getComponent(
                        $level_29086_dragonItem.default
                    ).dragonColor = 1;
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
                    cc.tween(x)
                        .delay($levelUtils.default.getRandomInt(3, 8))
                        .call(function () {
                            if (W.isWin || W.isReviveBack || W._item1Start) {
                                //
                            } else {
                                x.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
                                x.getComponent(sp.Skeleton).addAnimation(0, "angry", !1);
                                x.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);
                            }
                        })
                        .delay(1.5)
                        .union()
                        .repeatForever()
                        .start();
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
                cc.tween(T)
                    .to(0.3, {
                        scale: 1
                    })
                    .delay(1)
                    .to(0.05, {
                        angle: -10
                    })
                    .to(0.05, {
                        angle: 10
                    })
                    .to(0.05, {
                        angle: -10
                    })
                    .to(0.05, {
                        angle: 10
                    })
                    .to(0.05, {
                        angle: 0
                    })
                    .delay(1)
                    .to(0.05, {
                        angle: -10
                    })
                    .to(0.05, {
                        angle: 10
                    })
                    .to(0.05, {
                        angle: -10
                    })
                    .to(0.05, {
                        angle: 10
                    })
                    .to(0.05, {
                        angle: 0
                    })
                    .delay(0.8)
                    .to(0.3, {
                        scale: 0
                    })
                    .call(function () {
                        W.dict.roleHpNode.active = !0;
                    })
                    .start();
                this.roleNode._targetPos = this.roleNode.position;
                B = cc.v2(this._mapConfig[0][0], this._mapConfig[0][1]);
                B = this.dict.personPosRoot.convertToWorldSpaceAR(B);
                this.dict["f29086.48"].position = this.dict["f29086.48"].parent
                    .convertToNodeSpaceAR(B)
                    .add(cc.v2(0, 0));
                this.dict["f29086.csm"].position = this.dict["f29086.csm"].parent
                    .convertToNodeSpaceAR(B)
                    .add(cc.v2(0, 0));
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
            if (
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Idle &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Normal &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Parking
            ) {
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
            if (
                i &&
                cc.isValid(i, !0) &&
                i.active &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Idle &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.OutParking
            ) {
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
                        sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
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
                    if (
                        this._removeStage &&
                        !this._removeClick &&
                        r.getComponent($level_29086_boxCarItem.default).carState == $level_29086_config.CarState.Idle &&
                        !r.obliqueHead &&
                        !r.getComponent($level_29086_boxCarItem.default).isFireEngine
                    ) {
                        return void this.remove(r);
                    }
                    console.log("新增限制快速点击", this.moveCarAmount, this.parkingNodes.length);
                    if (this.moveCarAmount >= this.parkingNodes.length) {
                        console.log("限制快速点击");
                        return this.show("需要解锁更多炮台位置");
                    }
                    var a = r.getComponent($level_29086_boxCarItem.default).nextCar;
                    var s = r.getComponent($level_29086_boxCarItem.default).prevCar;
                    if ((a || s) && this.moveCarAmount >= this.parkingNodes.length - 1) {
                        console.log("限制快速点击2");
                        return this.show("需要两个停车位", 0.8, 1);
                    }
                    if (255 != r.opacity) {
                        return;
                    }
                    if (r.getChildByName("lock")) {
                        return void r.runAction(r.getComponent($level_29086_boxCarItem.default).shackAction(0.1, 2));
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
                    if (!r.getComponent($level_29086_boxCarItem.default).isCanClick) {
                        return;
                    }
                    if (r.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Idle) {
                        return;
                    }
                    if (r.obliqueHead) {
                        return void r.runAction(this.shackAction(0.1, 2));
                    }
                    if (
                        this.dict.hand &&
                        this.dict.hand.active &&
                        (this.guidedNodes.push(r), this.currentGuideNode == r)
                    ) {
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
                        if (c) {
                            //
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
                        this.dict.transportLayer.getComponent($level_29086_transport.default).setTransportCarNoMove(r);
                    }
                    var m = r.convertToWorldSpaceAR(cc.v2(0, 2250));
                    var f = r.parent.convertToNodeSpaceAR(m);
                    r.getComponent($level_29086_boxCarItem.default).otherCarNode = this.getOtherCarByDistance(r);
                    r.getComponent($level_29086_boxCarItem.default).oldPos = r.position;
                    if (a) {
                        a.getComponent($level_29086_boxCarItem.default).otherCarNode = this.getOtherCarByDistance(
                            a,
                            !0
                        );
                        a.getComponent($level_29086_boxCarItem.default).oldPos = a.position;
                    }
                    if (s) {
                        s.getComponent($level_29086_boxCarItem.default).otherCarNode = this.getOtherCarByDistance(
                            s,
                            !0
                        );
                        s.getComponent($level_29086_boxCarItem.default).oldPos = s.position;
                    }
                    if (r.getComponent($level_29086_boxCarItem.default).carState == $level_29086_config.CarState.Idle) {
                        r.getComponent($level_29086_boxCarItem.default).carState = $level_29086_config.CarState.Normal;
                        if (r.getComponent($level_29086_boxCarItem.default).isFireEngine) {
                            //
                        } else {
                            this.moveCarAmount += 1;
                        }
                        cc.tween(r)
                            .to(2250 / r.getComponent($level_29086_boxCarItem.default).speed, {
                                position: f
                            })
                            .start();
                    }
                    if (
                        r.isTransportBox ||
                        r.getComponent($level_29086_boxCarItem.default).isUTransportCar ||
                        1 != r.getComponent($level_29086_boxCarItem.default).path
                    ) {
                        //
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
            if (
                p &&
                p != t &&
                p.getComponent($level_29086_boxCarItem.default).carState == $level_29086_config.CarState.Idle &&
                p.active &&
                !p.isTransportBox
            ) {
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
                if (
                    cc.Intersection.lineLine(e, o, g, m) ||
                    cc.Intersection.lineLine(e, o, f, v) ||
                    cc.Intersection.lineLine(i, r, g, m) ||
                    cc.Intersection.lineLine(i, r, f, v) ||
                    cc.Intersection.lineLine(e, o, y, C) ||
                    cc.Intersection.lineLine(n, a, y, C)
                ) {
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
                if (e.getComponent($motionTrail.default)) {
                    e.getComponent($motionTrail.default).active = !0;
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
            if (o.includes(t[r])) {
                //
            } else {
                o.push(t[r]);
                t[r] = t[t.length - i - 1];
            }
        }
        return o;
    };
    e.prototype.getTankDirIndex = function (t) {
        var e = Math.round((((t % 360) + 360) % 360) / 45) * 45;
        e = 360 == e ? 0 : e;
        return TANK_SKIN_DIR[e];
    };
    e.prototype.getTankSpritePath = function (t, e) {
        var o = TANK_SKIN_COLOR[e];
        var i = this.getTankDirIndex(t.angle);
        if (void 0 === o || void 0 === i) {
            return null;
        }
        return TANK_SKIN_SPRITE_DIR + "tank_" + o + "_" + i;
    };
    e.prototype.loadTankSpriteFrame = function (t, e) {
        var o = this;
        if (this.tankSpriteFrameCache[t]) {
            e(this.tankSpriteFrameCache[t]);
            return;
        }
        if (this.tankSpriteFrameLoading[t]) {
            this.tankSpriteFrameLoading[t].push(e);
            return;
        }
        this.tankSpriteFrameLoading[t] = [e];
        cc.resources.load(t, cc.SpriteFrame, function (i, r) {
            var n = o.tankSpriteFrameLoading[t] || [];
            delete o.tankSpriteFrameLoading[t];
            if (i || !r) {
                cc.warn && cc.warn("load tank sprite failed:", t, i);
                n.forEach(function (t) {
                    t(null);
                });
                return;
            }
            o.tankSpriteFrameCache[t] = r;
            n.forEach(function (t) {
                t(r);
            });
        });
    };
    e.prototype.applyTankSkin = function (t, e) {
        if (!TANK_SKIN_LEVEL_IDS[this.levelID] || t.isCarPark) {
            return;
        }
        var o = this.getTankSpritePath(t, e);
        var i = t.getChildByName("car");
        if (!o || !i) {
            return;
        }
        var r = t.getChildByName("body");
        var n = t.getChildByName("sd");
        if (!n) {
            n = t.children.find(function (t) {
                return t.name && t.name.indexOf("=sd") >= 0;
            });
        }
        if (n) {
            n.active = !1;
        }
        if (t.getChildByName("shadow")) {
            t.getChildByName("shadow").active = !1;
        }
        this.loadTankSpriteFrame(o, function (e) {
            if (!e || !cc.isValid(t) || !cc.isValid(i)) {
                return;
            }
            i.getComponent(cc.Sprite).spriteFrame = e;
            i.active = !0;
            if (r && cc.isValid(r)) {
                r.active = !1;
            }
            if (n && cc.isValid(n)) {
                n.active = !1;
            }
        });
    };
    e.prototype.setCarColorImg = function (t, e) {
        var o;
        var i;
        var r = t.getComponent($level_29086_boxCarItem.default);
        r.carColor = e;
        if (this.colorPersonArr[e]) {
            //
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
        this.applyTankSkin(t, e);
        if (this.levelDataJSON.carWeight[r.path]) {
            //
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
        var o = function (o) {
            var r = e[o];
            if (
                r &&
                r.getComponent($level_29086_boxCarItem.default) &&
                r.getComponent($level_29086_boxCarItem.default).carState == $level_29086_config.CarState.Idle &&
                !r.isTransportBox &&
                !r.getComponent($level_29086_boxCarItem.default).isUTransportCar
            ) {
                r.path = null;
                var n = i.getPath(r);
                r.getComponent($level_29086_boxCarItem.default).path = n;
                if (1 == n && r.getComponent($level_29086_boxCarItem.default).isBlackCar && !r.isNoBlack) {
                    r.isScaleAnim = !0;
                    cc.tween(r)
                        .to(0.2, {
                            scale: 1.2
                        })
                        .to(0.2, {
                            scale: 1
                        })
                        .call(function () {
                            r.isScaleAnim = !1;
                            r.getChildByName("dir").active = !1;
                            var e = "texture/" + t.folder + "/" + t.folder + "_3";
                            if (128 == Math.round(Math.abs(r.angle))) {
                                e = "texture/" + t.folder + "/" + t.folder + "_4";
                            } else {
                                if (90 == Math.round(Math.abs(r.angle))) {
                                    e = "texture/" + t.folder + "/" + t.folder + "_2";
                                } else {
                                    0 == Math.round(Math.abs(r.angle)) &&
                                        (e = "texture/" + t.folder + "/" + t.folder + "_1");
                                }
                            }
                            cc.resources.load(e, function (t, e) {
                                if (t) {
                                    //
                                } else {
                                    r.getChildByName("dir").active = !0;
                                    if (e) {
                                        r.getChildByName("dir").getComponent(cc.Sprite).spriteFrame =
                                            new cc.SpriteFrame(e);
                                    }
                                }
                            });
                            var o = r.getComponent($level_29086_boxCarItem.default);
                            var i = "" + o.colorImgName + o.dirImgName + o.lenImgName;
                            var n = "texture/" + t.folder + "/" + t.folder + "_" + i;
                            r.getChildByName("car").active = !1;
                            r.isNoBlack = !0;
                            cc.resources.load(n, function (t, e) {
                                if (t) {
                                    //
                                } else {
                                    r.getChildByName("car").active = !0;
                                    if (e) {
                                        r.getChildByName("car").getComponent(cc.Sprite).spriteFrame =
                                            new cc.SpriteFrame(e);
                                    }
                                }
                            });
                        })
                        .start();
                }
                if (i.isDebug && r.getChildByName("path")) {
                    r.getChildByName("path").getComponent(cc.Label).string = "" + n;
                }
                var a = i.levelDataJSON.carWeight[n - 1];
                if (a) {
                    //
                } else {
                    a = 1;
                }
                i.carWeight[r.getComponent($level_29086_boxCarItem.default).carColor] +=
                    a * r.getComponent($level_29086_boxCarItem.default).emptySeatAmount;
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
            if (this.sortPersonNodes[this.sortPersonNodes.length - 1].longwei) {
                //
            } else {
                (r = cc.instantiate(this.dict.longwei)).getComponent($level_29086_dragonItem.default).dragonColor = 1;
                this.dragonRoot.addChild(r, 0);
                r.longwei = !0;
                r.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                r._moveIndex = 0;
                r[this._mBodyMoveDis] =
                    this._curLastBoxItemNode[this._mBodyMoveDis] -
                    (this._curLastBoxItemNode.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
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
                (n = cc.instantiate(this.dict.longwei)).getComponent($level_29086_dragonItem.default).dragonColor = 1;
                this.dragonRoot.addChild(n, 0);
                n.longwei = !0;
                n.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                n._moveIndex = 0;
                n[this._mBodyMoveDis] =
                    this._curLastBoxItemNode2[this._mBodyMoveDis] -
                    (this._curLastBoxItemNode2.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
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
            for (; this.sortPersonNodes.length + this.sortPersonNodes2.length < this.uiShowPersonAmount; ) {
                var a = this.getPersonColor();
                var s = ((i = this.colorPersonIndexArr[a]), this.colorPersonAmountArr[a][i]);
                var c = Math.floor((o / this.allPersonAmount2) * 100);
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
                    if (this.isReviveAmount) {
                        //
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
                                    this.sortPersonNodes.length &&
                                        this.sortPersonNodes2.length &&
                                        (d = !(this.sortPersonNodes.length > this.sortPersonNodes2.length));
                                }
                            } else {
                                d = !0;
                            }
                        }
                        if (t) {
                            var y = void 0;
                            y = cc.instantiate(this.dict.dragonPrefab);
                            this.dragonRoot.addChild(y);
                            y.getComponent($level_29086_dragonItem.default).dragonColor = a;
                            this.setColorPersonImg(a, y);
                            y.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                            y._moveIndex = 0;
                            y[this._itemType] = g;
                            y[this._mBodyMoveBackDis] = 0;
                            if ((C = this.createItem(g))) {
                                C.position = y.position;
                                y[this._itemNode] = C;
                                C[this._itemDepend] = y;
                                this._itemNodeList.push(C);
                            }
                            this.createNum++;
                            y.zIndex = 999 - this.createNum;
                            if (d) {
                                y[this._mBodyMoveDis] =
                                    this._curLastBoxItemNode[this._mBodyMoveDis] -
                                    (this._curLastBoxItemNode.longtou
                                        ? 1.7 * this._keepDistance
                                        : 1.5 * this._keepDistance);
                                y[this._mBodyEven] = !0;
                                this.sortPersonNodes.push(y);
                                this._curLastBoxItemNode = y;
                            } else {
                                y[this._mBodyMoveDis] =
                                    this._curLastBoxItemNode2[this._mBodyMoveDis] -
                                    (this._curLastBoxItemNode2.longtou
                                        ? 1.7 * this._keepDistance
                                        : 1.5 * this._keepDistance);
                                y[this._mBodyEven] = !1;
                                this.sortPersonNodes2.push(y);
                                this._curLastBoxItemNode2 = y;
                            }
                        } else {
                            var C;
                            y = void 0;
                            y = cc.instantiate(this.dict.dragonPrefab);
                            this.dragonRoot.addChild(y);
                            y.getComponent($level_29086_dragonItem.default).dragonColor = a;
                            this.setColorPersonImg(a, y);
                            y.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                            y._moveIndex = 0;
                            y[this._itemType] = g;
                            y[this._mBodyMoveBackDis] = 0;
                            if ((C = this.createItem(g))) {
                                C.position = y.position;
                                y[this._itemNode] = C;
                                C[this._itemDepend] = y;
                                this._itemNodeList.push(C);
                            }
                            this.createNum++;
                            y.zIndex = 999 - this.createNum;
                            if (d) {
                                y[this._mBodyMoveDis] =
                                    this._curLastBoxItemNode[this._mBodyMoveDis] -
                                    (this._curLastBoxItemNode.longtou
                                        ? 1.7 * this._keepDistance
                                        : 1.5 * this._keepDistance);
                                y[this._mBodyEven] = !0;
                                this.sortPersonNodes.push(y);
                                this._curLastBoxItemNode = y;
                            } else {
                                y[this._mBodyMoveDis] =
                                    this._curLastBoxItemNode2[this._mBodyMoveDis] -
                                    (this._curLastBoxItemNode2.longtou
                                        ? 1.7 * this._keepDistance
                                        : 1.5 * this._keepDistance);
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
        (e = this._itemPoolList.length ? this._itemPoolList.shift() : cc.instantiate(this.dict.itemPrefab))
            .getChildByName("itemImg")
            .getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame("f29086_" + (t + 5e3));
        e.getChildByName("itemName").getComponent(cc.Label).string = $languageManager.default.formatStr(
            this._itemNameList[t - 1]
        );
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
        if (
            game.dragonMoving &&
            ((t = 0.016),
            !this.isWin &&
                this.createFinish &&
                !this.isSorting &&
                !this._removeStage &&
                (this.sortPersonNodes.length || this.sortPersonNodes2.length))
        ) {
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
                            this._roleLevel5Count++,
                                this.itemActive(2),
                                this.isDragonAttack &&
                                    ((this.isDragonAttack = !1),
                                    (this.isDragonAttacking = !1),
                                    this.sortPersonNodes.length &&
                                        ((this.sortPersonNodes[0][this._moveEnd] = !1),
                                        this.sortPersonNodes[0].stopAllActions())),
                                this.isDragonAttack2 &&
                                    ((this.isDragonAttack2 = !1),
                                    (this.isDragonAttacking2 = !1),
                                    this.sortPersonNodes2.length &&
                                        ((this.sortPersonNodes2[0][this._moveEnd] = !1),
                                        this.sortPersonNodes2[0].stopAllActions())),
                                this.hideWudi(!0);
                        } else {
                            this.hideWudi();
                        }
                    }
                }
                if (
                    this._roleLevel10Count &&
                    this._roleLevel10CurTime <= this._roleLevel10Time &&
                    this._roleLevel >= 10 &&
                    ((this._roleLevel10CurTime += t), this._roleLevel10CurTime >= this._roleLevel10Time)
                ) {
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
                if (this._item1Start && ((this._item1Cur += t), this._item1Cur >= this._item1Time)) {
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
                if (this._item4Start && ((this._item4Cur += t), this._item4Cur >= this._item4Time)) {
                    this._item4Cur = 0;
                    this._item4Start = !1;
                    for (r = 0; r < this.cannonRoot.children.length; r++) {
                        var n = this.cannonRoot.children[r];
                        this.hideItem4Spine(n);
                    }
                }
                if (this._item5Start && ((this._item5Cur += t), this._item5Cur >= this._item5Time)) {
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
                    if (
                        !this.isReviveSort &&
                        ((e && 0 == e[this._mBodyMoveBackDis]) || !e) &&
                        ((o && 0 == o[this._mBodyMoveBackDis]) || !o)
                    ) {
                        if (e && 0 == e[this._mBodyMoveBackDis]) {
                            for (r = this.sortPersonNodes.length - 1; r >= 0; r--) {
                                if (!(_ = this.sortPersonNodes[r]).parent || _.longtou || _.longwei) {
                                    //
                                } else {
                                    if (_[this._turnBackDestroy]) {
                                        if ((s = _[this._itemNode])) {
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
                                    _[this._mBodyMoveDis] =
                                        r * -(0 == r ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                                    _[this._mBodyMoveBackDis] = 0;
                                }
                            }
                            this._curLastBoxItemNode = this.sortPersonNodes[this.sortPersonNodes.length - 1];
                            e.getComponent(sp.Skeleton).setAnimation(0, "idle1", !0);
                        }
                        if (o && 0 == o[this._mBodyMoveBackDis]) {
                            for (r = this.sortPersonNodes2.length - 1; r >= 0; r--) {
                                var s;
                                if (!(_ = this.sortPersonNodes2[r]).parent || _.longtou || _.longwei) {
                                    //
                                } else {
                                    if (_[this._turnBackDestroy]) {
                                        if ((s = _[this._itemNode])) {
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
                                    _[this._mBodyMoveDis] =
                                        r * -(0 == r ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                                    _[this._mBodyMoveBackDis] = 0;
                                }
                            }
                            this._curLastBoxItemNode2 = this.sortPersonNodes2[this.sortPersonNodes2.length - 1];
                            o.getComponent(sp.Skeleton).setAnimation(0, "idle1", !0);
                        }
                        return void (
                            ((e && 0 == e[this._mBodyMoveBackDis]) || !e) &&
                            ((o && 0 == o[this._mBodyMoveBackDis]) || !o) &&
                            ((this.isReviveBack = !1), this.checkRes())
                        );
                    }
                    this.moveInUpdate(t, 0);
                    this.moveInUpdate2(t, 0);
                    return void this.itemNodeMove();
                }
                if ((a[this._mBodyMoveDis] > 0 && !a.longwei) || a.longtou) {
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
                var l = (1 / this._moveSpeed[c]) * 1e5 * t;
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
                var p = (1 / this._moveSpeed[h]) * 1e5 * t;
                if (0 != l) {
                    if (e) {
                        if (
                            e._moveIndex >= this._mapConfig.length - 1 &&
                            e.position.sub(this._curvePoints[this._curvePoints.length - 1].position).mag() <= 0 &&
                            0 == e[this._mBodyMoveBackDis]
                        ) {
                            (e[this._moveEnd] = !0), (this.isDragonAttack = !0), this.doDragonAttack();
                        } else {
                            this.checkWarning(e._moveIndex), this.checkRole(e._moveIndex);
                        }
                    }
                    if (o) {
                        if (
                            o._moveIndex >= this._mapConfig2.length - 1 &&
                            o.position.sub(this._curvePoints2[this._curvePoints2.length - 1].position).mag() <= 0 &&
                            0 == o[this._mBodyMoveBackDis]
                        ) {
                            (o[this._moveEnd] = !0), (this.isDragonAttack2 = !0), this.doDragonAttack();
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
                                if (
                                    !(_ = v ? this.sortPersonNodes[C] : this.sortPersonNodes2[C]).longtou &&
                                    !_.longwei &&
                                    !_[this._bulletTarget] &&
                                    _[this._mBodyMoveDis] > 0 &&
                                    (this._item5Start || this.checkCannonAttack(_._moveIndex)) &&
                                    _.getComponent($level_29086_dragonItem.default).dragonColor == n[this._cannonType]
                                ) {
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
                        if (
                            this._item1Start ||
                            (this._roleLevel10Count && this._roleLevel10CurTime <= this._roleLevel10Time)
                        ) {
                            var c = this.getMoveDis(e, l.item1Start);
                            n[this._mBodyMoveDis] += c;
                        } else {
                            if (this._slowStart) {
                                c = this.getMoveDis(e, l.slowStart);
                                n[this._mBodyMoveDis] += c;
                            } else {
                                if (this._item3Start) {
                                    (c = this.getMoveDis(e, l.item3Start)), (n[this._mBodyMoveDis] += c);
                                } else {
                                    (c = this.getMoveDis(e)), (n[this._mBodyMoveDis] += c);
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
                        if (
                            this._item1Start ||
                            (this._roleLevel10Count && this._roleLevel10CurTime <= this._roleLevel10Time)
                        ) {
                            var c = this.getMoveDis(e, l.item1Start);
                            n[this._mBodyMoveDis] += c;
                        } else {
                            if (this._slowStart) {
                                c = this.getMoveDis(e, l.slowStart);
                                n[this._mBodyMoveDis] += c;
                            } else {
                                if (this._item3Start) {
                                    (c = this.getMoveDis(e, l.item3Start)), (n[this._mBodyMoveDis] += c);
                                } else {
                                    (c = this.getMoveDis(e)), (n[this._mBodyMoveDis] += c);
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
                        e == l.item1Start ? (t = 0) : e == l.revive && (t = 30);
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
        var e = Math.floor((this.curCreatePersonAmount / this.allPersonAmount2) * 100);
        if (e >= this._addSpeed[0] && e <= this._addSpeed[1]) {
            t += Math.floor(Math.floor(e - this._addSpeed[0]) / this._addSpeed[2]) * this._addSpeed[3];
        } else {
            if (e >= this._addSpeed[1]) {
                t +=
                    Math.floor(Math.floor(this._addSpeed[1] - this._addSpeed[0]) / this._addSpeed[2]) *
                    this._addSpeed[3];
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
                    (t.scaleX = 0.9), t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = -1);
                } else {
                    t.x < o[0].x &&
                        ((t.scaleX = -0.9), t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = 1));
                }
            } else {
                t._moveIndex < o[2].mapIndex &&
                    (t.x > o[0].x
                        ? ((t.scaleX = -0.9), t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = 1))
                        : t.x < o[0].x &&
                          ((t.scaleX = 0.9), t.longtou && this.dict.hpPrefab && (this.dict.hpPrefab.scaleX = -1)));
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
        return [
            this._curvePoints[this._curvePoints.length - 1].position,
            this._curvePoints[this._curvePoints.length - 2],
            this._curvePoints[this._curvePoints.length - 1],
            1
        ];
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
        return [
            this._curvePoints2[this._curvePoints2.length - 1].position,
            this._curvePoints2[this._curvePoints2.length - 2],
            this._curvePoints2[this._curvePoints2.length - 1],
            1
        ];
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
            t[o._mBodyMoveBackDis] =
                (null !== (e = t[o._mBodyMoveBackDis]) && void 0 !== e ? e : 0) - 1.5 * o._keepDistance;
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
            t[o._mBodyMoveBackDis] =
                (null !== (e = t[o._mBodyMoveBackDis]) && void 0 !== e ? e : 0) - 1.5 * o._keepDistance;
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
        t.parking.car.getComponent($level_29086_boxCarItem.default).emptySeatAmount =
            t.parking.car.getComponent($level_29086_boxCarItem.default).emptySeatAmount - 1;
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
        a.getChildByName("bullet").getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame(
            "f29086_" + (t[this._cannonType] + 1 + 2200)
        );
        a.getChildByName("xiaochu")
            .getComponent(sp.Skeleton)
            .setSkin("skin" + (t[this._cannonType] + 1));
        a.active = !1;
        e[this._bulletTarget] = a;
        a[this._dragonTarget] = e;
        t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "attack", !1);
        cc.tween(t)
            .delay(0.1)
            .call(function () {
                t[o._cannonNum]--;
                t.getChildByName("num").getComponent(cc.Label).string = "x" + t[o._cannonNum];
                a.active = !0;
                o._bulletMoveList.push(a);
            })
            .start();
        if (this._item4Start) {
            t.getChildByName("cannon").getComponent(sp.Skeleton).timeScale = 1.3;
        } else {
            t.getChildByName("cannon").getComponent(sp.Skeleton).timeScale = 1;
        }
        t.getChildByName("cannon")
            .getComponent(sp.Skeleton)
            .setCompleteListener(function () {
                t.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(null);
                if (t[o._cannonNum] <= 0) {
                    t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "exit", !1);
                    t.getChildByName("cannon")
                        .getComponent(sp.Skeleton)
                        .setCompleteListener(function () {
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
        cc.tween(t)
            .delay(0.1)
            .call(function () {
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
            })
            .start();
        t.getChildByName("xiaochu")
            .getComponent(sp.Skeleton)
            .setCompleteListener(function () {
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
                    if (
                        (s = this.dict.parkingRoot.children[n]).getChildByName("videoLock") &&
                        s.getChildByName("videoLock").active
                    ) {
                        (c = this.dict.unlockTips).active = !0;
                        c.parent = s;
                        c.position = cc.v2(20, 50);
                        c.stopAllActions();
                        c.scale = 1;
                        cc.tween(c)
                            .to(0.5, {
                                scale: 1.2
                            })
                            .to(0.5, {
                                scale: 1
                            })
                            .union()
                            .repeatForever()
                            .start();
                        break;
                    }
                }
            } else if (!o || !this.func_hasLockParking()) {
                for (var a = 0; a < this.dict.parkingRoot.children.length; a++) {
                    var s;
                    if (
                        (s = this.dict.parkingRoot.children[a]).getChildByName("videoLock") &&
                        s.getChildByName("videoLock").active
                    ) {
                        var c;
                        if ((c = this.dict.unlockTips)) {
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
            cc.tween(this.warnNode)
                .to(r, {
                    opacity: 255
                })
                .to(r, {
                    opacity: 0
                })
                .union()
                .repeatForever()
                .start();
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
            if (this.roleNode.moving || "haipa" == i.animation) {
                //
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
                    t.x < t._targetPos.x &&
                        Math.abs(t.y - t._targetPos.y) <= 10 &&
                        (t.getChildByName("role").scaleX = 1);
                }
            }
            if (t._targetPos) {
                t.position = t._targetPos;
            }
        }
    };
    e.prototype.getBullet = function () {
        var t;
        (t = this._bulletModelList.length
            ? this._bulletModelList.shift()
            : cc.instantiate(this.dict.bulletPrefab)).parent = this.dict.bulletRoot;
        t.angle = 0;
        t.getChildByName("bullet").active = !0;
        t.getChildByName("xiaochu").opacity = 0;
        t[this._dragonTarget] = null;
        return t;
    };
    e.prototype.getCannon = function () {
        var t;
        (t = this._cannonList.length
            ? this._cannonList.shift()
            : cc.instantiate(this.dict.cannonPrefab)).getChildByName("cannon").angle = 0;
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
        var t = [
            [this._item1Cur, 1],
            [this._item2Cur, 2],
            [this._item3Cur, 3],
            [this._item4Cur, 4],
            [this._item5Cur, 5]
        ].sort(function (t, e) {
            return e[0] - t[0];
        });
        if (t[0][0]) {
            var e = t[0][1];
            var o = this._itemTipsList[e - 1];
            if (o) {
                this._itemTipsNode.active = !0;
                this._itemTipsNode.getComponent(cc.Label).string = $languageManager.default.formatStr(
                    o + "%dS",
                    this["_item" + e + "Time"] - Math.round(t[0][0])
                );
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
                    var i = o.getComponent($level_29086_boxCarItem.default).carColor;
                    if (o && o.getComponent($level_29086_boxCarItem.default)) {
                        for (var r = 0; r < o.getChildByName("seatRoot").children.length; r++) {
                            var n = o.getChildByName("seatRoot").children[r];
                            if (n.active || n.targetPerson) {
                                //
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
        if (t.isCarAnim) {
            //
        } else {
            t.isCarAnim = !0;
            cc.tween(t.parent.parent)
                .to(0.1, {
                    scale: 0.9
                })
                .to(0.1, {
                    scale: 1
                })
                .call(function () {
                    t.isCarAnim = !1;
                })
                .start();
        }
    };
    e.prototype.checkTipText = function () {
        var t = 0;
        for (var e = 0; e < this.parkingNodes.length; e++) {
            if (this.parkingNodes[e].isEmpty) {
                //
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
                    cc.tween(r)
                        .to(0.5, {
                            opacity: 0
                        })
                        .start();
                    if (r.longtou) {
                        e = r;
                    }
                }
            }
            for (i = 0; i < this.sortPersonNodes2.length; i++) {
                var r;
                if ((r = this.sortPersonNodes2[i]).longtou || r.longwei) {
                    r.getComponent(sp.Skeleton).setAnimation(0, "die", !1);
                    cc.tween(r)
                        .to(0.5, {
                            opacity: 0
                        })
                        .start();
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
        e.getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame(
            "f29086_" + (t + 1 + 4e3 + 100 * this._dragonSkin)
        );
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
                var r = this.carNodeArr[i].getComponent($level_29086_boxCarItem.default);
                if (r.carColor == t) {
                    var n = [];
                    var a = [];
                    for (var s = r.seatTotalAmount; s > 0; ) {
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
            0 != this.currentPersonColorAmount[e] &&
                this.currentPersonColorAmount[e] >= this.colorPersonArr[e] &&
                (this.allWeight[e] = 0);
        }
        return this.randomByWeight(
            new Array($level_29086_config.colorDes.length).fill(1).map(function (t, e) {
                return e;
            }),
            this.allWeight
        );
    };
    e.prototype.updateSortWeight = function () {
        this.sortWeight = new Array(this.colorTypeAmount).fill(0);
        for (var t = 0; t < this.sortPersonNodes.length; t++) {
            if (!(o = this.sortPersonNodes[t]).longtou && !o.longwei && o.parent) {
                var e = o.getComponent($level_29086_dragonItem.default).dragonColor;
                this.sortWeight[e] += this.levelDataJSON.sortWeight;
            }
        }
        for (t = 0; t < this.sortPersonNodes2.length; t++) {
            var o;
            if ((o = this.sortPersonNodes2[t]).longtou || o.longwei || !o.parent) {
                //
            } else {
                e = o.getComponent($level_29086_dragonItem.default).dragonColor;
                this.sortWeight[e] += this.levelDataJSON.sortWeight;
            }
        }
    };
    e.prototype.getCarColor = function (t, e) {
        var o = this.carNodeArr.length;
        var i = Math.round(((t + 1) / o) * 100);
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            if (i <= n[1] && i >= n[0]) {
                if (this.batchMap[r]) {
                    //
                } else {
                    this.batchMap[r] = [];
                }
                var a = this.randomNum(0, this.randomColorArr[r].length - 1);
                for (
                    var s = this.randomColorArr[r][a];
                    this.batchMap[r].includes(s) && this.randomColorNum[r] < this.randomColorArr[r].length;

                ) {
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
            return (
                t.getComponent($level_29086_boxCarItem.default).path -
                e.getComponent($level_29086_boxCarItem.default).path
            );
        });
        this.carNodeArr.forEach(function (e, o) {
            e.getComponent($level_29086_boxCarItem.default).carID = o;
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
            if (
                !n ||
                n == t ||
                n.getComponent($level_29086_boxCarItem.default).isReadyDestroy ||
                n.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Idle ||
                !n.active ||
                n.isTransportBox ||
                n.getComponent($level_29086_boxCarItem.default).isUTransportCar
            ) {
                //
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
            return (
                cc.Intersection.pointLineDistance(a, r[0], r[1], !0) -
                cc.Intersection.pointLineDistance(a, n[0], n[1], !0)
            );
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
        if (this.carMap[t.uuid]) {
            //
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
        if (t.collisionArr) {
            //
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
                if (this.carMap[p.uuid]) {
                    //
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
                if (
                    cc.Intersection.lineLine(e, o, d, u) ||
                    cc.Intersection.lineLine(i, r, d, u) ||
                    cc.Intersection.lineLine(e, o, g, m) ||
                    cc.Intersection.lineLine(i, r, g, m)
                ) {
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
            return (t.path = l), l;
        } else {
            return (t.path = 1), 1;
        }
    };
    e.prototype.fetchMaxIndex = function (t, e) {
        return t
            .map(function (t, e) {
                return {
                    key: e,
                    value: t
                };
            })
            .sort(function (t, e) {
                return e.value - t.value;
            })
            .filter(function (t, o) {
                return o < e;
            })
            .map(function (t) {
                return t.key;
            });
    };
    e.prototype.getLevelProgressByCar = function () {
        var t = this.carRoot.children.concat(this.turntableCarArr);
        var e = 0;
        for (var o = 0; o < t.length; o++) {
            var i = t[o];
            if (
                i &&
                i.active &&
                i.getComponent($level_29086_boxCarItem.default).carState == $level_29086_config.CarState.Idle
            ) {
                e += 1;
            }
        }
        var r = ((this.carAllAmount - e) / this.carAllAmount) * 100;
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
                if ((n < i && 0 != n) || (0 == i && 0 != n)) {
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
        cc.tween(i)
            .by(0.3, {
                position: cc.v2(0, 60),
                opacity: 255
            })
            .delay(e)
            .by(0.3, {
                position: cc.v2(0, 60),
                opacity: -255
            })
            .call(function () {
                i.destroy();
            })
            .start();
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
                    (i = o[this._itemNode]) &&
                        (i.removeFromParent(),
                        (i[this._itemDepend] = null),
                        this._itemNodeList.splice(this._itemNodeList.indexOf(i), 1),
                        this._itemPoolList.push(i));
                    this.hideItem1BigSpine(o);
                    this.hideItem1SmallSpine(o);
                    this.hideItem4Spine(o);
                    this.hideItem5Spine(o);
                    this.removeBody(o);
                    this.checkRes();
                    e.active = !1;
                    this._bulletModelList.push(e);
                }
                this.schedule(
                    function () {
                        for (var t = 0; t < r.sortPersonNodes.length; t++) {
                            if (!((o = r.sortPersonNodes[t]).longtou || o.longwei || o[r._bulletTarget]) && o.parent) {
                                var e = r.randomNum(0, $level_29086_config.colorDes.length - 1);
                                r.setColorPersonImg(e, o);
                            }
                        }
                        for (t = 0; t < r.sortPersonNodes2.length; t++) {
                            var o;
                            if ((o = r.sortPersonNodes2[t]).longtou || o.longwei || o[r._bulletTarget] || !o.parent) {
                                //
                            } else {
                                e = r.randomNum(0, $level_29086_config.colorDes.length - 1);
                                r.setColorPersonImg(e, o);
                            }
                        }
                    },
                    0.2,
                    2.2
                );
                cc.tween(this.node)
                    .delay(1.5)
                    .call(function () {
                        r.isSortAnim = !1;
                        r.isWin = !1;
                        r.consoleWeight("总权重", r.allWeight);
                        console.log("排队颜色顺序", r.fetchMaxIndex(r.allWeight, $level_29086_config.colorDes.length));
                        var t = r.fetchMaxIndex(r.allWeight, $level_29086_config.colorDes.length);
                        var e = new Array($level_29086_config.colorDes.length).fill(0);
                        for (var o = 0; o < r.sortPersonNodes.length; o++) {
                            if ((l = r.sortPersonNodes[o]).longtou || l.longwei || l[r._bulletTarget] || !l.parent) {
                                //
                            } else {
                                e[l.getComponent($level_29086_dragonItem.default).dragonColor] += 1;
                            }
                        }
                        for (o = 0; o < r.sortPersonNodes2.length; o++) {
                            if ((l = r.sortPersonNodes2[o]).longtou || l.longwei || l[r._bulletTarget] || !l.parent) {
                                //
                            } else {
                                e[l.getComponent($level_29086_dragonItem.default).dragonColor] += 1;
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
                                        s && c && (a = !(!r.sortPersonNodes[s] || (r.sortPersonNodes2[c] && s > c)));
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
                                for (
                                    var h = t[i];
                                    0 == e[h] && ((h = t[(i += 1)]), !(i >= $level_29086_config.colorDes.length - 1));

                                ) {}
                                e[h] -= 1;
                                l.getComponent($level_29086_dragonItem.default).dragonColor = h;
                                r.setColorPersonImg(h, l);
                                console.log($level_29086_config.colorDes[h]);
                            }
                        }
                        r.isSorting = !1;
                    })
                    .start();
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
                    (i = o[this._itemNode]) &&
                        (i.removeFromParent(),
                        (i[this._itemDepend] = null),
                        this._itemNodeList.splice(this._itemNodeList.indexOf(i), 1),
                        this._itemPoolList.push(i));
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
                r = function (t, e, o) {
                    var i;
                    if (e) {
                        i = n.sortPersonNodes;
                    } else {
                        i = n.sortPersonNodes2;
                    }
                    for (var r = 0; r < i.length; r++) {
                        var a = i[r];
                        if (
                            !a.longtou &&
                            !a.longwei &&
                            !a[n._turnBackDestroy] &&
                            a.getComponent($level_29086_dragonItem.default).dragonColor == o
                        ) {
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
                    var e = function (e) {
                        for (var o = n.cannonRoot.children[e], i = o[n._cannonType], a = 0; a < o[n._cannonNum]; a++) {
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
                        cc.tween(o)
                            .delay(0.05 * e)
                            .call(function () {
                                o.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "exit", !1);
                                o.getChildByName("cannon")
                                    .getComponent(sp.Skeleton)
                                    .setCompleteListener(function () {
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
                                        cc.tween(o)
                                            .delay(0.5)
                                            .call(function () {
                                                o.active = !1;
                                                o.removeFromParent(!0);
                                                n._cannonList.push(o);
                                                o.parking.isEmpty = !0;
                                                o.parking.car = null;
                                                n.moveCarAmount -= 1;
                                            })
                                            .start();
                                    });
                            })
                            .start();
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
            (o = this._item1BigSpineList.size()
                ? this._item1BigSpineList.get()
                : cc.instantiate(this.dict["f29086.bingkuai_da"])).name = "item1BigSpine";
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
            (e = this._item1SmallSpineList.size()
                ? this._item1SmallSpineList.get()
                : cc.instantiate(this.dict["f29086.bingkuai_xiao"])).name = "item1SmallSpine";
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
            (e = this._item4SpineList.size()
                ? this._item4SpineList.get()
                : cc.instantiate(this.dict["f29086.pt_texiao1"])).name = "item4Spine";
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
            (e = this._item5SpineList.size()
                ? this._item5SpineList.get()
                : cc.instantiate(this.dict["f29086.pt_texiao2"])).name = "item5Spine";
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
                cc.tween(e)
                    .to(0.2, {
                        scale: 1.8 * e.scale
                    })
                    .call(function () {
                        e.active = !1;
                    })
                    .start();
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
        cc.tween(i)
            .to(1, {
                angle: 360
            })
            .call(function () {
                i.angle = 0;
            })
            .union()
            .repeatForever()
            .start();
        cc.tween(o)
            .delay(1)
            .to(0.5, {
                position: this.transformPosition(this.roleNode, o)
            })
            .call(function () {
                if (e) {
                    e();
                }
                o.active = !1;
                o.stopAllActions();
            })
            .start();
        cc.tween(i)
            .delay(1)
            .to(0.5, {
                position: this.transformPosition(this.roleNode, i)
            })
            .call(function () {
                i.active = !1;
                i.stopAllActions();
            })
            .start();
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
                cc.tween(e)
                    .call(function () {
                        if (!t._roleLevel2Count && t._roleLevel >= 2) {
                            t._roleLevel2Count++;
                            t.showWudi();
                        }
                        e.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
                        e.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);
                        if (t._roleLevel2Count && t._roleLevel2CurTime < t._roleLevel2Time) {
                            //
                        } else {
                            t._roleCurHp--;
                            t.updateRoleHp();
                            if (t._roleCurHp <= 0) {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", !0),
                                    t.scheduleOnce(function () {
                                        e.getComponent(sp.Skeleton).setAnimation(0, "idle2", !0);
                                        e.stopAllActions();
                                        t.isWin = !0;
                                        cc.log("levelReviveHelper");
                                        $levelReviveHelper.default.levelFailEvent("是否需要复活", function () {
                                            t.func_revive();
                                        });
                                    }, 1.5);
                            } else {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", !1),
                                    t.roleNode
                                        .getChildByName("role")
                                        .getComponent(sp.Skeleton)
                                        .addAnimation(0, "haipa", !0);
                            }
                        }
                    })
                    .delay(this._dragonAttackInterval)
                    .union()
                    .repeatForever()
                    .start();
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
                cc.tween(i)
                    .call(function () {
                        if (!t._roleLevel2Count && t._roleLevel >= 2) {
                            t._roleLevel2Count++;
                            t.showWudi();
                        }
                        i.getComponent(sp.Skeleton).setAnimation(0, "angry", !1);
                        i.getComponent(sp.Skeleton).addAnimation(0, "idle1", !0);
                        if (t._roleLevel2Count && t._roleLevel2CurTime < t._roleLevel2Time) {
                            //
                        } else {
                            t._roleCurHp--;
                            t.updateRoleHp();
                            if (t._roleCurHp <= 0) {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", !0),
                                    t.scheduleOnce(function () {
                                        i.getComponent(sp.Skeleton).setAnimation(0, "idle2", !0);
                                        i.stopAllActions();
                                        t.isWin = !0;
                                        cc.log("levelReviveHelper");
                                        $levelReviveHelper.default.levelFailEvent("是否需要复活", function () {
                                            t.func_revive();
                                        });
                                    }, 1.5);
                            } else {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", !1),
                                    t.roleNode
                                        .getChildByName("role")
                                        .getComponent(sp.Skeleton)
                                        .addAnimation(0, "haipa", !0);
                            }
                        }
                    })
                    .delay(this._dragonAttackInterval)
                    .union()
                    .repeatForever()
                    .start();
            }
        }
    };
    e.prototype.func_checkRemove = function () {
        if (
            !this.isWin &&
            !this._removeStage &&
            this.carRoot.children.length &&
            !(this.carRoot.children.length - this.parkingNodes.length <= 0)
        ) {
            return !0;
        }
    };
    e.prototype.func_remove = function () {
        if (this.func_checkRemove()) {
            if (this.dict.transportLayer) {
                this.dict.transportLayer.getComponent($level_29086_transport.default).isMove = !1;
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
        var o = function (t, o, i) {
            var r;
            if (o) {
                r = e.sortPersonNodes;
            } else {
                r = e.sortPersonNodes2;
            }
            for (var n = 0; n < r.length; n++) {
                var a = r[n];
                if (
                    !(
                        a.longtou ||
                        a.longwei ||
                        a[e._bulletTarget] ||
                        a[e._turnBackDestroy] ||
                        a.readyDestroy ||
                        a.getComponent($level_29086_dragonItem.default).dragonColor != i
                    )
                ) {
                    t = a;
                    o = !o;
                    break;
                }
            }
            return {
                dragon: t,
                inputList1: o
            };
        };
        this._removeClick = !0;
        this._tipRemove.active = !1;
        var i;
        var r = !0;
        var n = t.getComponent($level_29086_boxCarItem.default).carColor;
        var a = [];
        for (var s = 0; s < t.getComponent($level_29086_boxCarItem.default).emptySeatAmount; s++) {
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
        cc.tween(d)
            .to(0.5, {
                position: v
            })
            .call(function () {
                cc.game.emit("needLimitNoHandle", !1);
                if (e.dict.transportLayer) {
                    e.dict.transportLayer.getComponent($level_29086_transport.default).isMove = !0;
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
                    e.dict.transportLayer.getComponent($level_29086_transport.default).reduceCarAmount(t);
                }
                t.destroy();
                e._removeClick = !1;
                e._removeStage = !1;
                e.checkRes();
            })
            .start();
    };
    e.prototype.getFeidan = function () {
        var t;
        (t = this._feidan.size() > 0 ? this._feidan.get() : cc.instantiate(this.dict["f29086.feidan"])).parent =
            this.dict["f29086.feidan"].parent;
        t.active = !1;
        return t;
    };
    e.prototype.getFeidanYanwu = function () {
        var t;
        (t =
            this._feidanYanwu.size() > 0
                ? this._feidanYanwu.get()
                : cc.instantiate(this.dict["f29086.feidan_yanwu"])).parent = this.dict["f29086.feidan_yanwu"].parent;
        t.active = !1;
        return t;
    };
    e.prototype.getFeidanBaozha = function () {
        var t;
        (t =
            this._feidanBaozha.size() > 0
                ? this._feidanBaozha.get()
                : cc.instantiate(this.dict["f29086.baozha"])).parent = this.dict["f29086.baozha"].parent;
        t.active = !1;
        return t;
    };
    e.prototype.getAngle = function (t, e) {
        return (180 * Math.atan2(e.y - t.y, e.x - t.x)) / Math.PI;
    };
    __decorate([B(cc.SpriteAtlas)], e.prototype, "box2SpriteAtlas", void 0);
    __decorate([B], e.prototype, "isDebug", void 0);
    __decorate([B], e.prototype, "boundary", void 0);
    __decorate(
        [
            B({
                type: cc.Enum(c),
                tooltip: "地图"
            })
        ],
        e.prototype,
        "mapType",
        void 0
    );
    return __decorate([T], e);
})($brainLevelBase.default);
exports.default = W;
