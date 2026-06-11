// @ts-nocheck

const $brainLevelBase = require("./BrainLevelBase");
const $poolMgr = require("./PoolMgr");
const $level_29086_config = require("./Level-29086_config");
const $level_29086_boxCarItem = require("./Level-29086_boxCarItem");
const $motionTrail = require("./MotionTrail");
const $level_29086_dragonItem = require("./Level-29086_dragonItem");
const $levelUtils = require("./LevelUtils");
const $levelConstant = require("./LevelConstant");
const $level_29086_transport = require("./Level-29086_transport");
const $level_29086_carPark = require("./Level-29086_carPark");
const $levelReviveHelper = require("./levelReviveHelper");
const $platformManager = require("../../scripts/PlatformManager");
const $shuShuConst = require("../../scripts/ShuShuConst");
const $userManager = require("../../scripts/UserManager");
const $userConst = require("../../scripts/UserConst");
const $localStorageManager = require("../../scripts/LocalStorageManager");
const $localStorageConst = require("../../scripts/LocalStorageConst");
const $languageManager = require("../../scripts/LanguageManager");
const $eventManager = require("../../scripts/EventManager");
const $eventConst = require("../../scripts/EventConst");

const { ccclass, property } = cc._decorator;

enum MapType {
    map1 = 1,
    map2 = 2,
    map3 = 3,
    map4 = 4,
    map5 = 5,
    map6 = 6,
    map7 = 7,
    map8 = 8,
    map9 = 9,
    map10 = 10,
    map101 = 101,
    map102 = 102,
}

enum MoveState {
    normal = 0,
    back = 1,
    slowStart = 2,
    item1Start = 3,
    item2Start = 4,
    item3Start = 5,
    revive = 6,
}

const c = MapType;
const l = MoveState;

const TANK_SKIN_LEVEL_IDS = $level_29086_config.TankSkinLevelIds;
const TANK_SKIN_SPRITE_DIR = $level_29086_config.TankSkinTextureDir;
const TANK_SKIN_TYPE_ASSET = $level_29086_config.TankSkinTypeDefaultAsset;
const TANK_SKIN_BY_COLOR = $level_29086_config.TankSkinByColor;
const TANK_ASSEMBLY_TYPES = $level_29086_config.TankAssemblyTypes || [];
const TANK_ASSEMBLY_CONVEYOR_CONFIG = $level_29086_config.TankAssemblyConveyorConfig || {};
const TANK_SKIN_DIR = {
    0: 2,
    45: 0,
    90: 1,
    135: 4,
    180: 7,
    225: 6,
    270: 5,
    315: 3
};

@ccclass
export default class Level29086Control extends $brainLevelBase.default {
    @property(cc.SpriteAtlas)
    box2SpriteAtlas: any = null;
    tankSpriteFrameCache: any = {};
    tankSpriteFrameLoading: any = {};
    @property
    isDebug: any = false;
    @property
    boundary: any = 750;
    @property({
            type: cc.Enum(c),
            tooltip: "地图",
        })
    mapType: any = c.map1;
    carRoot: any = null;
    cannonRoot: any = null;
    dragonRoot: any = null;
    warnNode: any = null;
    roleNode: any = null;
    _cannonNum: any = Symbol("_cannonNum");
    _cannonType: any = Symbol("_cannonType");
    _cannonState: any = Symbol("_cannonState");
    _cannonList: any = [];
    _keepDistance: any = 30;
    _moveSpeed: any = [50, 500, 700];
    _speedIndexList: any = [0, 70, 160];
    _addSpeed: any = [0, 0, 5, 2];
    cannonAttackList: any = [[70, 179]];
    _bulletModelList: any = [];
    _bulletMoveList: any = [];
    _bulletTarget: any = Symbol("_bulletTarget");
    _dragonTarget: any = Symbol("_dragonTarget");
    _itemType: any = Symbol("_itemType");
    _itemNode: any = Symbol("_itemNode");
    _itemDepend: any = Symbol("_itemDepend");
    _turnBackDestroy: any = Symbol("_turnBackDestroy");
    _moveEnd: any = Symbol("_moveEnd");
    createFinish: any = false;
    _slowTime: any = 12;
    _slowCur: any = 0;
    _slowStart: any = false;
    _warning: any = false;
    _rolePointIndex: any = 0;
    _mapConfig: any = [];
    _mapConfig2: any = [];
    _item1Time: any = 5;
    _item1Cur: any = 0;
    _item1Start: any = false;
    _item1BigSpineList: any = new cc.NodePool();
    _item1SmallSpineList: any = new cc.NodePool();
    _item2Time: any = 2;
    _item2Cur: any = 0;
    _item2Start: any = false;
    _item3Time: any = 5;
    _item3Cur: any = 0;
    _item3Start: any = false;
    _item4Time: any = 8;
    _item4Cur: any = 0;
    _item4Start: any = false;
    _item4SpineList: any = new cc.NodePool();
    _item5Time: any = 12;
    _item5Cur: any = 0;
    _item5Start: any = false;
    _item5SpineList: any = new cc.NodePool();
    _itemCreatedList: any = [];
    _warningIndex: any = 0;
    _itemPoolList: any = [];
    _itemNodeList: any = [];
    _itemNameList: any = ["冰封", "击退", "巨龙减速", "射速加快", "射程增加", "少量金币", "大量金币"];
    _itemTipsList: any = ["冰冻效果生效中", "", "减速效果生效中", "射速加快中", "射程增加中", "", ""];
    _itemTipsNode: any = null;
    _touchBegin: any = false;
    colorTypeAmount: any = $level_29086_config.colorDes.length;
    _dragonSkin: any = 0;
    _roleSkin: any = 0;
    _roleHp: any = 1;
    _roleCurHp: any = 1;
    _roleLevel: any = 1;
    _dragonAttackInterval: any = 3;
    _roleLevel2Time: any = 3;
    _roleLevel2CurTime: any = 0;
    _roleLevel2Count: any = 0;
    _roleLevel5Count: any = 0;
    _roleLevel10Time: any = 3;
    _roleLevel10CurTime: any = 0;
    _roleLevel10Count: any = 0;
    _removeStage: any = false;
    _removeClick: any = false;
    _tipRemove: any = null;
    _feidan: any = new cc.NodePool();
    _feidanYanwu: any = new cc.NodePool();
    _feidanBaozha: any = new cc.NodePool();
    personPosRoot2: any = null;
    isTransportCarMove: any = false;
    oldSortAmount: any = 0;
    guideNodes: any = [];
    guideText: any = [
            "箱子会朝着箭头方向移动",
            "这种箱子可以发射10颗炮弹",
            "这种箱子可以发射6颗炮弹",
            "这种箱子可以发射4颗炮弹"
        ];
    currentGuideNode: any = null;
    guidedNodes: any = [];
    poolMgr: any = new $poolMgr.default();
    sortColor_new: any = [];
    levelDataJSON: any = {};
    parkingNodes: any = [];
    between2_4CarArr: any = [];
    highSpeedRailSpeed: any = 600;
    turntableCarArr: any = [];
    colorPersonArr: any = [];
    unlockParkingTarget: any = null;
    carparkIng: any = false;
    moveCarAmount: any = 0;
    allPersonAmount: any = 0;
    allPersonAmount2: any = 0;
    curCreatePersonAmount: any = 0;
    extraWeightConst: any = 0;
    extraWeight: any = [];
    carWeight: any = [];
    parkingWeight: any = [];
    sortWeight: any = [];
    allWeight: any = [];
    colorPersonAmountArr: any = [];
    colorPersonAmountArrIndex: any = [];
    colorPersonIndexArr: any = [];
    uiShowPersonAmount: any = 0;
    currentPersonColorAmount: any = [];
    sortPersonNodes: any = [];
    sortPersonNodes2: any = [];
    times: any = 0;
    createNum: any = 0;
    isCanStartClick: any = false;
    _curLastBoxItemNode: any = null;
    _curLastBoxItemNode2: any = null;
    _mBodyMoveBackDis: any = Symbol("_mBodyMoveBackDis");
    _mBodyMoveDis: any = Symbol("_mBodyMoveDis");
    _mBodyEven: any = Symbol("_mBodyEven");
    _curMoveState: any = l.normal;
    _curMoveState2: any = l.normal;
    _curvePoints: any = [];
    _curvePoints2: any = [];
    isFail: any = false;
    isWin: any = false;
    isDragonAttack: any = false;
    isDragonAttacking: any = false;
    isDragonAttack2: any = false;
    isDragonAttacking2: any = false;
    isReviveAmount: any = 0;
    lastExtraIndexArr: any = [];
    randomColorArr: any = [];
    randomColorNum: any = [];
    batchMap: any = {};
    pathArr: any = [];
    carIndex: any = [];
    carNodeArr: any = [];
    carAllAmount: any = 0;
    carMap: any = {};
    hardPointsIndexs: any = [];
    localData: any = {};
    reviveArr: any = [];
    reviveRemoveArr: any = [];
    firstSortIndexArr: any = [];
    isSorting: any = false;
    isSortAnim: any = false;
    isReviveBack: any = false;
    isReviveSort: any = false;
    tankAssemblyPartLayer: any = null;
    tankAssemblyAbsorbLayer: any = null;
    tankAssemblyCountBoardRoot: any = null;
    tankAssemblyPathPoints: any = [];
    tankAssemblyParts: any = [];
    tankAssemblyTypeByColor: any = {};
    tankAssemblyCounters: any = {};
    tankAssemblySpawnTimer: any = 0;
    tankAssemblySpawnStarted: any = false;
    tankAssemblyEnded: any = false;
    tankAssemblyCompletedAmount: any = 0;
    tankAssemblyTotalCarAmount: any = 0;
    tankAssemblyDebugLogged: any = {};

    onLoad() {
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
                $brainLevelBase.default.prototype.onLoad.call(this);
                this.dict.carRoot.active = false;
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
                    this.dict.topMask.active = true;
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
                this.setCollisionManager(true, false);
                this.carRoot = this.dict.carRoot;
                this.cannonRoot = this.dict.cannonRoot;
                this.dragonRoot = this.dict.dragonRoot;
                this.warnNode = this.dict.warnNode;
                this.roleNode = this.dict.roleNode;
                this.refreshTankAssemblyRouteLayout();
                this.hideTankAssemblyBottomButtons();
                this.dict.hitSpine.scale = 0.4;
                if (this.dict.tailGas.getComponent($motionTrail.default)) {
                    this.dict.tailGas.getComponent($motionTrail.default).length = 25;
                    this.dict.tailGas.getComponent($motionTrail.default).headWidth = 35;
                    this.dict.tailGas.getComponent($motionTrail.default).tailWidth = 20;
                    this.dict.tailGas.getComponent($motionTrail.default).headOpacity = 230;
                    this.dict.tailGas.getComponent($motionTrail.default).tailOpacity = 40;
                }
                if (!this.disableFirstLevelGuide() && this.dict.hand && this.dict.hand.active) {
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
    }
    shouldDisableTankAssemblyGuide() {
        return (
            $level_29086_config.TankAssemblyGuideDisabledLevelIds &&
            $level_29086_config.TankAssemblyGuideDisabledLevelIds[this.levelID]
        );
    }
    shouldHideTankAssemblyBottomButtons() {
        return (
            $level_29086_config.TankAssemblyBottomButtonsHiddenLevelIds &&
            $level_29086_config.TankAssemblyBottomButtonsHiddenLevelIds[this.levelID]
        );
    }
    hideTankAssemblyBottomButtons() {
        var t = ["btns", "btnRoot", "updateBtn", "removeBtn", "sortBtn"];
        if (!this.shouldHideTankAssemblyBottomButtons()) {
            if (this.dict.btns) {
                this.dict.btns.active = false;
            }
            return;
        }
        for (var e = 0; e < t.length; e++) {
            if (this.dict[t[e]]) {
                this.dict[t[e]].active = false;
            }
        }
    }
    disableFirstLevelGuide() {
        if (!this.shouldDisableTankAssemblyGuide()) {
            return false;
        }
        this.guideNodes = [];
        this.guidedNodes = [];
        this.currentGuideNode = null;
        if (this.dict.guide) {
            this.dict.guide.active = false;
        }
        if (this.dict.hand) {
            this.dict.hand.active = false;
        }
        if (this.dict.handText) {
            this.dict.handText.active = false;
            if (this.dict.handText.parent) {
                this.dict.handText.parent.active = false;
            }
        }
        return true;
    }
    handPos() {
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
    }
    shackAction(t, e) {
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
    }
    changeCar(t, e, o, i) {
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
                t.getComponent($level_29086_boxCarItem.default).isReadyDestroy = true;
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
                a.active = false;
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
                                    ? ((l = this.getRouteRoadWorldPosition()),
                                      (c = a.parent.convertToNodeSpaceAR(l)),
                                      (a.position = cc.v2(t.x + t.width / 2, c.y)))
                                    : ((l = this.getRouteRoadWorldPosition()),
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
                    a.active = true;
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
                            s = m.getParkingFinalWorldPosition(a.parking);
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
                                    if (m.isTankAssemblyLevel()) {
                                        m.finishTankAssemblyParking(a, a.parking);
                                        return;
                                    }
                                    a.parking.car = a;
                                    var t = a.getComponent($level_29086_boxCarItem.default).seatTotalAmount;
                                    a.getChildByName("sd").active = false;
                                    a.getChildByName("shadow").active = true;
                                    var e = Number(a.name[2]);
                                    var o = a.getComponent($level_29086_boxCarItem.default).carColor;
                                    if (a.getChildByName("body")) {
                                        a.getChildByName("body").active = false;
                                    }
                                    a.getChildByName("car").active = false;
                                    a.getChildByName("sd").active = false;
                                    a.getChildByName("shadow").active = false;
                                    a.getChildByName("boxSpine").active = true;
                                    a.getChildByName("boxSpine").getComponent(sp.Skeleton).timeScale = 2;
                                    a.getChildByName("boxSpine")
                                        .getComponent(sp.Skeleton)
                                        .setSkin("skin" + (o + 1));
                                    a.getChildByName("boxSpine")
                                        .getComponent(sp.Skeleton)
                                        .setAnimation(0, "open" + (3 - e + 1), false);
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
                                                .setAnimation(0, "enter", false);
                                            e.getChildByName("cannon")
                                                .getComponent(sp.Skeleton)
                                                .setCompleteListener(function () {
                                                    e[m._cannonState] = 1;
                                                    e.getChildByName("cannon")
                                                        .getComponent(sp.Skeleton)
                                                        .setAnimation(0, "idle", true);
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
                        if (m.isTankAssemblyLevel()) {
                            var d = m.getRouteRoadLocalPosition(a.parent);
                            l = Math.abs(a.y - d.y);
                            m.addTailGasSpine(a);
                            cc.tween(a)
                                .to(l / a.getComponent($level_29086_boxCarItem.default).speed, {
                                    y: d.y
                                })
                                .call(function () {
                                    m.collision(a);
                                })
                                .start();
                        } else {
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
                        }
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
    }
    load(t) {
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
    }
    putTailGas(t) {
        if (t.getChildByName("tailGas")) {
            this.poolMgr.put(t.getChildByName("tailGas"), "tailGas");
        }
    }
    hit(t) {
        var e = cc.instantiate(this.dict.hitSpine);
        if (e) {
            t.addChild(e);
            e.position = cc.v2(0, 0);
            this.scheduleOnce(function () {
                e.destroy();
            }, 1);
        }
    }
    collision(t) {
        t.getComponent($level_29086_boxCarItem.default).isReadyDestroy = true;
        if (!t.getComponent($level_29086_boxCarItem.default).isFireEngine) {
            var e = t;
            var o = void 0;
            for (var i = 0; i < this.parkingNodes.length; i++) {
                var r = this.parkingNodes[i];
                if (r.isEmpty) {
                    r.isEmpty = false;
                    e.parking = r;
                    o = r;
                    break;
                }
            }
            if (o) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                var a = this.getParkingEntryWorldPosition(o);
                o.currentParkingWPos = a;
                o.currentParkingNPos = this.dict.carRoot.convertToNodeSpaceAR(a);
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
    }
    saveParkingWPos() {
        for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
            var e = this.dict.parkingRoot.children[t];
            e.currentParkingWPos = this.getParkingEntryWorldPosition(e);
            e.currentParkingNPos = this.dict.carRoot.convertToNodeSpaceAR(e.currentParkingWPos);
        }
        console.log("初始算好每个车位的停车点的世界坐标");
    }
    isTankAssemblyLevel() {
        return (
            $level_29086_config.TankAssemblyLevelIds &&
            $level_29086_config.TankAssemblyLevelIds[this.levelID]
        );
    }
    isTankAssemblyTopEnabled() {
        return this.isTankAssemblyLevel() && false !== $level_29086_config.TankAssemblyTopEnabled;
    }
    setTankAssemblyTopVisible(t) {
        var e = this.findTankAssemblyNode("assemblyTopRoot");
        if (e) {
            e.active = t;
        }
    }
    shouldAutoNextWhenTankAssemblyTopDisabled() {
        return (
            this.isTankAssemblyLevel() &&
            !this.isTankAssemblyTopEnabled() &&
            $level_29086_config.TankAssemblyAutoNextWhenTopDisabledLevelIds &&
            $level_29086_config.TankAssemblyAutoNextWhenTopDisabledLevelIds[this.levelID]
        );
    }
    checkTankAssemblyAutoNextWhenTopDisabled() {
        if (!this.shouldAutoNextWhenTankAssemblyTopDisabled() || this.tankAssemblyAutoNextTriggered) {
            return;
        }
        var t = this.tankAssemblyTotalCarAmount || this.carNodeArr.length;
        if (!t) {
            return;
        }
        var e = 0;
        for (var o = 0; o < this.parkingNodes.length; o++) {
            var i = this.parkingNodes[o];
            if (i && !i.isEmpty && i.assemblyCar) {
                e++;
            }
        }
        this.tankAssemblyParkedAmount = e;
        if (e < t) {
            return;
        }
        this.tankAssemblyAutoNextTriggered = true;
        console.log("顶部关闭演示流程：全部坦克已停入，自动进入下一关", e, "/", t);
        var r = this;
        this.scheduleOnce(function () {
            if (cc.isValid(r.node)) {
                $eventManager.Event.emit($eventConst.default.CLICK_NEXT);
            }
        }, $level_29086_config.TankAssemblyAutoNextDelay || 0.35);
    }
    refreshTankAssemblyRouteLayout() {
        if (!this.isTankAssemblyLevel()) {
            return;
        }
        if (this.dict.parkingRoot && this.dict.parkingRoot.width > 0) {
            this.boundary = this.dict.parkingRoot.width;
        }
    }
    getRouteRoadWorldPosition() {
        if (!this.isTankAssemblyLevel()) {
            return this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position);
        }
        if (!this.dict.carRoot) {
            return this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position);
        }
        return this.dict.carRoot.convertToWorldSpaceAR(cc.v2(0, this.getTankAssemblyRoadLocalY()));
    }
    getRouteRoadLocalPosition(t) {
        return t.convertToNodeSpaceAR(this.getRouteRoadWorldPosition());
    }
    getRouteSideLimitX(t, e) {
        var o = e < 0 ? -1 : 1;
        if (!this.isTankAssemblyLevel()) {
            return o * (this.boundary / 2 + t.width / 2);
        }
        var i = $level_29086_config.TankAssemblyRouteConfig || {};
        var r = i.sideScreenMargin || 12;
        var n = this.node.width || cc.winSize.width;
        var a = this.node.convertToWorldSpaceAR(cc.v2(o * n / 2, 0));
        var s = t.parent.convertToNodeSpaceAR(a).x;
        return s - o * (t.width / 2 + r);
    }
    getRouteBottomTurnY(t) {
        if (!this.isTankAssemblyLevel()) {
            return -620;
        }
        var e = $level_29086_config.TankAssemblyRouteConfig || {};
        var o = e.bottomTurnScreenMargin || 145;
        var i = this.node.height || cc.winSize.height;
        var r = this.node.convertToWorldSpaceAR(cc.v2(0, -i / 2 + o));
        return t.convertToNodeSpaceAR(r).y;
    }
    getTankAssemblyRoadLocalY() {
        var t = null;
        if (this.dict.parkingRoot && this.dict.carRoot) {
            for (var e = 0; e < this.dict.parkingRoot.childrenCount; e++) {
                var o = this.dict.parkingRoot.children[e];
                if (o.active) {
                    var i = this.getParkingEntryWorldPosition(o);
                    var r = this.dict.carRoot.convertToNodeSpaceAR(i);
                    t = null == t ? r.y : Math.min(t, r.y);
                }
            }
        }
        if (null == t) {
            return this.dict.carRoot.convertToNodeSpaceAR(
                this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position)
            ).y;
        }
        var n = $level_29086_config.TankAssemblyRouteConfig || {};
        return t - (n.parkingRoadGap || 18);
    }
    getParkingEntryWorldPosition(t) {
        var e = this.isTankAssemblyLevel() && t.getChildByName("tankStop");
        if (e) {
            return e.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return t.convertToWorldSpaceAR(cc.v2(0, -168.549));
    }
    getParkingFinalWorldPosition(t) {
        var e = this.isTankAssemblyLevel() && t.getChildByName("tankStop");
        if (e) {
            return e.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return t.convertToWorldSpaceAR(cc.v2(0, t.height / 2));
    }
    initTankAssemblyParkingSlots() {
        this.parkingNodes = [];
        this.tankAssemblyParkedAmount = 0;
        this.tankAssemblyAutoNextTriggered = false;
        for (var t = 0; t < this.dict.parkingRoot.childrenCount; t++) {
            var e = this.dict.parkingRoot.children[t];
            var o = e.getChildByName("tankStop");
            var i = e.getChildByName("progressRoot");
            if (o) {
                o.active = false;
            }
            if (i) {
                i.active = false;
            }
            e.car = null;
            e.assemblyCar = null;
            e.assemblyColor = null;
            e.assemblyConfig = null;
            e.assemblyCapacity = 0;
            e.assemblyCollected = 0;
            e.assemblyProgress = 0;
            e.assemblyComplete = false;
            if (e.active && !e.getChildByName("videoLock") && !e.getChildByName("fireSpine")) {
                e.isEmpty = true;
                this.parkingNodes.push(e);
            }
        }
    }
    findChildByName(t, e) {
        if (!t) {
            return null;
        }
        var o = t.getChildByName(e);
        if (o) {
            return o;
        }
        for (var i = 0; i < t.childrenCount; i++) {
            var r = t.children[i];
            if (r.name && r.name.trim && r.name.trim() == e) {
                return r;
            }
        }
        return null;
    }
    getTankAssemblyTypeByColor(t) {
        if (this.tankAssemblyTypeByColor[t]) {
            return this.tankAssemblyTypeByColor[t];
        }
        for (var e = 0; e < TANK_ASSEMBLY_TYPES.length; e++) {
            var o = TANK_ASSEMBLY_TYPES[e];
            this.tankAssemblyTypeByColor[o.colorId] = o;
        }
        return this.tankAssemblyTypeByColor[t] || null;
    }
    initTankAssemblyConveyor() {
        this.setTankAssemblyTopVisible(this.isTankAssemblyTopEnabled());
        this.tankAssemblyPartLayer = this.findTankAssemblyNode("partLayer") || this.dict.dragonRoot;
        this.tankAssemblyAbsorbLayer = this.findTankAssemblyNode("absorbEffectLayer") || this.tankAssemblyPartLayer;
        this.tankAssemblyCountBoardRoot = this.findTankAssemblyNode("countBoardRoot");
        if (this.tankAssemblyPartLayer) {
            this.tankAssemblyPartLayer.active = true;
        }
        if (this.tankAssemblyAbsorbLayer) {
            this.tankAssemblyAbsorbLayer.active = true;
        }
        this.tankAssemblyParts = [];
        this.tankAssemblyTypeByColor = {};
        this.tankAssemblyCounters = {};
        this.tankAssemblySpawnTimer = this.isTankAssemblyTopEnabled() ? -(TANK_ASSEMBLY_CONVEYOR_CONFIG.startDelay || 0) : 0;
        this.tankAssemblySpawnStarted = this.isTankAssemblyTopEnabled();
        this.tankAssemblyEnded = false;
        this.tankAssemblyCompletedAmount = 0;
        this.tankAssemblyTotalCarAmount = this.carNodeArr.length;
        this.sortPersonNodes = [];
        this.sortPersonNodes2 = [];
        this._curLastBoxItemNode = null;
        this._curLastBoxItemNode2 = null;
        if (this.dragonRoot) {
            this.dragonRoot.removeAllChildren();
        }
        if (this.roleNode) {
            this.roleNode.active = false;
        }
        if (this.dict.roleHpNode) {
            this.dict.roleHpNode.active = false;
        }
        if (this.dict.roleText) {
            this.dict.roleText.active = false;
        }
        if (!this.isTankAssemblyTopEnabled()) {
            this.clearTankAssemblyParts();
            return;
        }
        this.buildTankAssemblyPathPoints();
        var t = this.getTankAssemblyConveyorPathRoot();
        this.logTankAssemblyDebug("initConveyor", "传送带初始化", {
            levelID: this.levelID,
            topEnabled: this.isTankAssemblyTopEnabled(),
            partLayer: this.tankAssemblyPartLayer && this.tankAssemblyPartLayer.name,
            absorbLayer: this.tankAssemblyAbsorbLayer && this.tankAssemblyAbsorbLayer.name,
            countBoardRoot: this.tankAssemblyCountBoardRoot && this.tankAssemblyCountBoardRoot.name,
            pathRoot: t && t.name,
            pathRootChildren: t && t.childrenCount,
            pathPointCount: this.tankAssemblyPathPoints.length
        });
        this.initTankAssemblyCountBoard();
    }
    initTankAssemblyCountBoard() {
        for (var t = 0; t < TANK_ASSEMBLY_TYPES.length; t++) {
            var e = TANK_ASSEMBLY_TYPES[t];
            var o = this.tankAssemblyCountBoardRoot && this.tankAssemblyCountBoardRoot.getChildByName(e.counterNode);
            if (!o) {
                continue;
            }
            var i = this.findChildByName(o, "icon");
            var r = this.findChildByName(o, "count");
            this.tankAssemblyCounters[e.colorId] = {
                node: o,
                countNode: r,
                amount: 0
            };
            if (r && r.getComponent(cc.Label)) {
                r.getComponent(cc.Label).string = "x0";
            }
            if (i && i.getComponent(cc.Sprite)) {
                var n = TANK_SKIN_SPRITE_DIR + e.counterSprite;
                this.loadTankSpriteFrame(n, function (t, e) {
                    return function (o) {
                        if (o && cc.isValid(t)) {
                            t.getComponent(cc.Sprite).spriteFrame = o;
                        }
                    };
                }(i, e));
            }
        }
    }
    buildTankAssemblyPathPoints() {
        this.tankAssemblyPathPoints = [];
        if (!this.tankAssemblyPartLayer) {
            return;
        }
        var t = this.getTankAssemblyConveyorPathRoot();
        if (t && t.childrenCount > 0) {
            var e = this.getTankAssemblyConveyorPointNodes(t);
            this.logTankAssemblyDebug("pathRoot", "读取 conveyorPathRoot 路径点", {
                pathRoot: t.name,
                pointCount: e.length,
                firstPoint: e[0] && { name: e[0].name, x: e[0].x, y: e[0].y },
                secondPoint: e[1] && { name: e[1].name, x: e[1].x, y: e[1].y }
            });
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                // conveyorPathRoot 是全屏路径容器，c001/c002... 的 position 就是路径点坐标。
                var r = t.convertToWorldSpaceAR(cc.v2(i.x, i.y));
                this.tankAssemblyPathPoints.push(this.tankAssemblyPartLayer.convertToNodeSpaceAR(r));
            }
            if (this.tankAssemblyPathPoints.length >= 2) {
                return;
            }
            this.tankAssemblyPathPoints = [];
        }
        this.logTankAssemblyDebug("pathFallback", "未使用 conveyorPathRoot，回退旧路径", {
            hasConveyorPathRoot: !!t,
            conveyorChildren: t && t.childrenCount
        });
        var n = this.dict.personPosRoot;
        if (n && n.childrenCount > 0) {
            for (o = 0; o < n.childrenCount; o++) {
                i = n.children[o];
                r = i.convertToWorldSpaceAR(cc.v2(0, 0));
                this.tankAssemblyPathPoints.push(this.tankAssemblyPartLayer.convertToNodeSpaceAR(r));
            }
        } else {
            if (n && this._mapConfig && this._mapConfig.length) {
                for (o = 0; o < this._mapConfig.length; o++) {
                    var a = this._mapConfig[o];
                    r = n.convertToWorldSpaceAR(cc.v2(a[0], a[1]));
                    this.tankAssemblyPathPoints.push(this.tankAssemblyPartLayer.convertToNodeSpaceAR(r));
                }
            }
        }
    }
    getTankAssemblyConveyorPointNodes(t) {
        var e = [];
        for (var o = 0; o < t.childrenCount; o++) {
            var i = t.children[o];
            if (this.isTankAssemblyConveyorPointNode(i)) {
                e.push(i);
            }
        }
        e.sort(function (t, e) {
            var o = t.name.match(/\d+/);
            var i = e.name.match(/\d+/);
            return Number(o ? o[0] : 0) - Number(i ? i[0] : 0);
        });
        return e;
    }
    isTankAssemblyConveyorPointNode(t) {
        return !!(t && t.name && /^c\d+$/.test(t.name));
    }
    getTankAssemblyPartSpawnPosition() {
        if (!this.tankAssemblyPathPoints || !this.tankAssemblyPathPoints.length) {
            return null;
        }
        return this.tankAssemblyPathPoints[0];
    }
    findTankAssemblyNode(t) {
        if (this.dict[t]) {
            return this.dict[t];
        }
        if ("assemblyTopRoot" != t && this.dict.assemblyTopRoot) {
            var e = this.dict.assemblyTopRoot.getChildByName(t) || this.findChildDeep(this.dict.assemblyTopRoot, t);
            if (e) {
                return e;
            }
        }
        if (this.node) {
            return this.findChildDeep(this.node, t);
        }
        return null;
    }
    logTankAssemblyDebug(t, e, o?) {
        if (!$level_29086_config.TankAssemblyDebugLog) {
            return;
        }
        if (!this.tankAssemblyDebugLogged) {
            this.tankAssemblyDebugLogged = {};
        }
        if (this.tankAssemblyDebugLogged[t]) {
            return;
        }
        this.tankAssemblyDebugLogged[t] = true;
        if (void 0 !== o) {
            console.log("[TankAssembly]", e, o);
        } else {
            console.log("[TankAssembly]", e);
        }
    }
    getTankAssemblyConveyorPathRoot() {
        return this.findTankAssemblyNode("conveyorPathRoot");
    }
    findChildDeep(t, e) {
        if (!t) {
            return null;
        }
        if (t.name == e) {
            return t;
        }
        for (var o = 0; o < t.childrenCount; o++) {
            var i = this.findChildDeep(t.children[o], e);
            if (i) {
                return i;
            }
        }
        return null;
    }
    updateTankAssemblyConveyor(t) {
        if (!this.isTankAssemblyTopEnabled()) {
            this.logTankAssemblyDebug("updateTopDisabled", "传送带 update 被跳过：顶部开关关闭", {
                levelID: this.levelID
            });
            return;
        }
        if (!this.tankAssemblySpawnStarted || this.tankAssemblyEnded || !this.tankAssemblyPartLayer) {
            this.logTankAssemblyDebug("updateBlocked", "传送带 update 被跳过：状态未就绪", {
                spawnStarted: this.tankAssemblySpawnStarted,
                ended: this.tankAssemblyEnded,
                hasPartLayer: !!this.tankAssemblyPartLayer
            });
            return;
        }
        if (!this.tankAssemblyPathPoints.length) {
            this.buildTankAssemblyPathPoints();
        }
        if (this.tankAssemblyPathPoints.length < 2) {
            this.logTankAssemblyDebug("updateNoPath", "传送带 update 被跳过：路径点不足", {
                pathPointCount: this.tankAssemblyPathPoints.length
            });
            return;
        }
        this.tankAssemblySpawnTimer += t;
        if (this.tankAssemblySpawnTimer >= (TANK_ASSEMBLY_CONVEYOR_CONFIG.spawnInterval || 1)) {
            this.tankAssemblySpawnTimer = 0;
            this.createTankAssemblyPart();
        }
        for (var e = this.tankAssemblyParts.length - 1; e >= 0; e--) {
            var o = this.tankAssemblyParts[e];
            if (!o || !o.node || !cc.isValid(o.node)) {
                this.tankAssemblyParts.splice(e, 1);
            } else {
                if (!o.absorbing) {
                    this.moveTankAssemblyPart(o, t);
                    this.tryAbsorbTankAssemblyPart(o);
                }
            }
        }
    }
    createTankAssemblyPart() {
        if (!TANK_ASSEMBLY_TYPES.length || this.tankAssemblyPathPoints.length < 2) {
            return;
        }
        var t = TANK_ASSEMBLY_TYPES[this.randomNum(0, TANK_ASSEMBLY_TYPES.length - 1)];
        var e = new cc.Node("tankAssemblyPart_" + t.colorId);
        var i = this.getTankAssemblyPartSpawnPosition();
        if (!i) {
            return;
        }
        e.parent = this.tankAssemblyPartLayer;
        e.position = cc.v2(i.x, i.y);
        e.scale = TANK_ASSEMBLY_CONVEYOR_CONFIG.partScale || 0.55;
        var o = e.addComponent(cc.Sprite);
        var r = TANK_SKIN_SPRITE_DIR + t.partSprite;
        this.logTankAssemblyDebug("firstPartCreated", "创建传送带零件", {
            nodeName: e.name,
            parent: e.parent && e.parent.name,
            position: { x: e.x, y: e.y },
            spritePath: r
        });
        var n = this;
        this.loadTankSpriteFrame(r, function (t) {
            if (t && cc.isValid(e)) {
                o.spriteFrame = t;
            } else {
                n.logTankAssemblyDebug("partSpriteMissing_" + r, "零件图片加载失败", {
                    spritePath: r
                });
            }
        });
        this.tankAssemblyParts.push({
            node: e,
            config: t,
            pathIndex: 0,
            absorbing: false
        });
    }
    moveTankAssemblyPart(t, e) {
        var o = this.tankAssemblyPathPoints[t.pathIndex + 1];
        if (!o) {
            this.removeTankAssemblyPart(t);
            this.finishTankAssemblyStage("partEnd");
            return;
        }
        var i = cc.v2(o.x - t.node.x, o.y - t.node.y);
        var r = i.mag();
        var n = (TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeed || 160) * (e || 0.016);
        if (r <= n) {
            t.node.position = cc.v2(o.x, o.y);
            t.pathIndex++;
            if (t.pathIndex >= this.tankAssemblyPathPoints.length - 1) {
                this.removeTankAssemblyPart(t);
                this.finishTankAssemblyStage("partEnd");
            }
        } else {
            t.node.position = t.node.position.add(i.normalize().mul(n));
        }
    }
    tryAbsorbTankAssemblyPart(t) {
        var e = this.getMatchingTankAssemblyParking(t.config.colorId);
        if (!e) {
            return;
        }
        this.absorbTankAssemblyPart(t, e);
    }
    getMatchingTankAssemblyParking(t) {
        for (var e = 0; e < this.parkingNodes.length; e++) {
            var o = this.parkingNodes[e];
            if (
                o &&
                o.active &&
                !o.isEmpty &&
                o.assemblyConfig &&
                o.assemblyConfig.colorId == t &&
                !o.assemblyComplete
            ) {
                return o;
            }
        }
        return null;
    }
    absorbTankAssemblyPart(t, e) {
        if (!t || !t.node || !cc.isValid(t.node)) {
            return;
        }
        t.absorbing = true;
        var o = t.node.parent.convertToWorldSpaceAR(t.node.position);
        t.node.parent = this.tankAssemblyAbsorbLayer || t.node.parent;
        t.node.position = t.node.parent.convertToNodeSpaceAR(o);
        var i = e.getChildByName("tankStop") || e;
        var r = i.convertToWorldSpaceAR(cc.v2(0, 0));
        var n = t.node.parent.convertToNodeSpaceAR(r);
        var a = this;
        var c = TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbDuration || 0.25;
        var l = TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbShrinkDelayRatio;
        l = void 0 === l ? 0.75 : Math.max(0, Math.min(0.95, l));
        var h = Math.max(0, c * l);
        var p = Math.max(0.01, c - h);
        cc.tween(t.node)
            .delay(h)
            .to(p, {
                scale: TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbEndScale || 0.2
            })
            .start();
        cc.tween(t.node)
            .to(c, {
                position: n
            })
            .call(function () {
                a.applyTankAssemblyPartToParking(e);
                a.removeTankAssemblyPart(t);
            })
            .start();
    }
    applyTankAssemblyPartToParking(t) {
        if (this.tankAssemblyEnded || !t || t.isEmpty || t.assemblyComplete) {
            return;
        }
        t.assemblyCollected += 1;
        var e = Math.max(1, t.assemblyCapacity || 1);
        var o = Math.min(100, Math.ceil((t.assemblyCollected / e) * 100));
        this.setTankAssemblyParkingProgress(t, o);
        if (t.assemblyCollected >= e) {
            this.completeTankAssemblyParking(t);
        }
    }
    completeTankAssemblyParking(t) {
        if (!t || t.assemblyComplete) {
            return;
        }
        t.assemblyComplete = true;
        this.tankAssemblyCompletedAmount += 1;
        this.refreshTankAssemblyCounter(t.assemblyColor);
        this.resetTankAssemblyParking(t);
        if (
            this.tankAssemblyTotalCarAmount > 0 &&
            this.tankAssemblyCompletedAmount >= this.tankAssemblyTotalCarAmount
        ) {
            this.finishTankAssemblyStage("allComplete");
        }
    }
    refreshTankAssemblyCounter(t) {
        var e = this.tankAssemblyCounters[t];
        if (!e) {
            return;
        }
        e.amount += 1;
        if (e.countNode && e.countNode.getComponent(cc.Label)) {
            e.countNode.getComponent(cc.Label).string = "x" + e.amount;
        }
    }
    resetTankAssemblyParking(t) {
        var e = t.getChildByName("tankStop");
        var o = t.getChildByName("progressRoot");
        if (e) {
            e.active = false;
        }
        if (o) {
            o.active = false;
        }
        t.car = null;
        t.assemblyCar = null;
        t.assemblyColor = null;
        t.assemblyConfig = null;
        t.assemblyCapacity = 0;
        t.assemblyCollected = 0;
        t.assemblyProgress = 0;
        t.assemblyComplete = false;
        t.isEmpty = true;
    }
    removeTankAssemblyPart(t) {
        var e = this.tankAssemblyParts.indexOf(t);
        if (e >= 0) {
            this.tankAssemblyParts.splice(e, 1);
        }
        if (t && t.node && cc.isValid(t.node)) {
            t.node.destroy();
        }
    }
    clearTankAssemblyParts() {
        for (var t = this.tankAssemblyParts.length - 1; t >= 0; t--) {
            this.removeTankAssemblyPart(this.tankAssemblyParts[t]);
        }
    }
    finishTankAssemblyStage(t) {
        if (this.tankAssemblyEnded) {
            return;
        }
        this.tankAssemblyEnded = true;
        this.tankAssemblySpawnStarted = false;
        this.clearTankAssemblyParts();
        var e = {
            reason: t,
            completedAmount: this.tankAssemblyCompletedAmount,
            totalAmount: this.tankAssemblyTotalCarAmount,
            guaranteedWin: "allComplete" == t,
            isFail: "partEnd" == t && 0 == this.tankAssemblyCompletedAmount,
            enterBattle: "allComplete" == t || this.tankAssemblyCompletedAmount > 0
        };
        console.log("坦克组装阶段结束", e);
        cc.game.emit("tankAssemblyStageEnd", e);
    }
    onLevelReady() {
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
    }
    initView() {
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
                if (this.disableFirstLevelGuide()) {
                    //
                } else if (this.dict.guide) {
                    this.scheduleOnce(function () {
                        W.dict.guide.active = false;
                    }, 6);
                }
                this.hideTankAssemblyBottomButtons();
                this.scheduleOnce(function () {
                    W.hideTankAssemblyBottomButtons();
                }, 0);
                if (this.levelDataJSON.transport) {
                    this.dict.transportLayer
                        .getComponent($level_29086_transport.default)
                        .init(this, this.levelDataJSON.transport);
                }
                if (this.isTankAssemblyLevel()) {
                    this.initTankAssemblyParkingSlots();
                } else {
                    for (_ = 0; _ < this.dict.parkingRoot.childrenCount; _++) {
                        !(t = this.dict.parkingRoot.children[_]).active ||
                            t.getChildByName("videoLock") ||
                            t.getChildByName("fireSpine") ||
                            ((t.isEmpty = true), this.parkingNodes.push(t));
                        t.getChildByName("videoLock") &&
                            ((t.getChildByName("videoLock").active = true),
                            (t.getChildByName("videoLock").getChildByName("text").getComponent(cc.Label).overflow =
                                cc.Label.Overflow.SHRINK),
                            (t.getChildByName("videoLock").getChildByName("text").width = 80),
                            (t.getChildByName("videoLock").getChildByName("text").scale = 0.85));
                    }
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
                                true;
                            i.push(g.getComponent($level_29086_boxCarItem.default).carID);
                        }
                    } else {
                        l = this.getRandomDistinctElements(this.between2_4CarArr, this.levelDataJSON.blackAmount);
                        for (N = 0; N < l.length; N++) {
                            (g = l[N]).getComponent($level_29086_boxCarItem.default).isBlackCar = true;
                            i.push(g.getComponent($level_29086_boxCarItem.default).carID);
                        }
                    }
                    this.setLocal("blackCar", i);
                }
                h = this.getLocal("colorConfig") || [];
                if (-29095 == this.levelID) {
                    h = [4, 1, 2, 6];
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
                            (S.getComponent($level_29086_boxCarItem.default).isBlackCar = true);
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
                if (this.isTankAssemblyLevel()) {
                    this.initTankAssemblyConveyor();
                    this.updateHp();
                    this.onTouch();
                    this.isCanStartClick = true;
                    this.createFinish = true;
                    return [2];
                }
                (P = cc.instantiate(this.dict.longtou)).getComponent($level_29086_dragonItem.default).dragonColor = 1;
                this.dragonRoot.addChild(P, 999);
                P.longtou = true;
                P.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                P._moveIndex = 0;
                P[this._mBodyMoveDis] = 0;
                P[this._mBodyMoveBackDis] = 0;
                P[this._mBodyEven] = true;
                P.active = false;
                this.changeDragonSkin(P, function () {
                    P.active = true;
                });
                this.updateBodyPos(P);
                this.dict.hpPrefab.parent = P;
                this.dict.hpPrefab.position = cc.v2();
                this.dict.hpPrefab.active = false;
                cc.tween(P)
                    .delay($levelUtils.default.getRandomInt(3, 8))
                    .call(function () {
                        if (W.isWin || W.isReviveBack || W._item1Start) {
                            //
                        } else {
                            P.getComponent(sp.Skeleton).setAnimation(0, "angry", false);
                            P.getComponent(sp.Skeleton).addAnimation(0, "angry", false);
                            P.getComponent(sp.Skeleton).addAnimation(0, "idle1", true);
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
                    x.longtou = true;
                    x.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                    x._moveIndex = 0;
                    x[this._mBodyMoveDis] = 0;
                    x[this._mBodyMoveBackDis] = 0;
                    x[this._mBodyEven] = false;
                    x.active = false;
                    this.changeDragonSkin(x, function () {
                        x.active = true;
                    });
                    this.updateBodyPos(x);
                    cc.tween(x)
                        .delay($levelUtils.default.getRandomInt(3, 8))
                        .call(function () {
                            if (W.isWin || W.isReviveBack || W._item1Start) {
                                //
                            } else {
                                x.getComponent(sp.Skeleton).setAnimation(0, "angry", false);
                                x.getComponent(sp.Skeleton).addAnimation(0, "angry", false);
                                x.getComponent(sp.Skeleton).addAnimation(0, "idle1", true);
                            }
                        })
                        .delay(1.5)
                        .union()
                        .repeatForever()
                        .start();
                    this._curLastBoxItemNode2 = x;
                }
                this.createPerson(false, function () {
                    W.createFinish = true;
                });
                this.sortPersonNodes.unshift(P);
                if (x) {
                    this.sortPersonNodes2.unshift(x);
                }
                b = this._mapConfig[this.roleNode._moveIndex];
                R = cc.v2(b[0], b[1]);
                R = this.dict.personPosRoot.convertToWorldSpaceAR(R);
                this.roleNode.active = false;
                this.changeRoleSkin(this.roleNode, function () {
                    W.roleNode.active = true;
                });
                this.roleNode.position = this.roleNode.parent.convertToNodeSpaceAR(R).add(cc.v2(0, -20));
                this.updateRoleHp();
                this.updateRoleHpPos();
                (T = this.dict.roleText).active = true;
                T.scale = 0;
                this.dict.roleHpNode.active = false;
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
                        W.dict.roleHpNode.active = true;
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
                this.isCanStartClick = true;
                return [2];
            });
        });
    }
    checkHasCarMove() {
        var t = false;
        var e = this.carRoot.children.concat(this.turntableCarArr);
        for (var o = 0; o < e.length; o++) {
            var i = e[o];
            if (
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Idle &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Normal &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Parking
            ) {
                t = true;
                break;
            }
        }
        return t;
    }
    checkHasCarMoveAmount() {
        var t = 0;
        var e = this.carRoot.children.concat(this.turntableCarArr);
        for (var o = 0; o < e.length; o++) {
            var i = e[o];
            if (
                i &&
                cc.isValid(i, true) &&
                i.active &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.Idle &&
                i.getComponent($level_29086_boxCarItem.default).carState != $level_29086_config.CarState.OutParking
            ) {
                t += 1;
            }
        }
        return t;
    }
    onTouch() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
            var e = this.dict.parkingRoot.children[t];
            if (e.getChildByName("videoLock")) {
                e.on(cc.Node.EventType.TOUCH_START, this.touchStart_parking, this);
            }
        }
    }
    fun_unlockNewPos() {
        for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
            var e = this.dict.parkingRoot.children[t];
            if (e.getChildByName("videoLock")) {
                this.unlockParkingTarget = e;
                e.getChildByName("videoLock").destroy();
                e.getChildByName("empty").active = true;
                e.isEmpty = true;
                this.parkingNodes.push(e);
                return void this.playUnlockSpine(e);
            }
        }
    }
    touchStart_parking(t) {
        var e = this;
        if (!this.isWin && !this._removeStage) {
            var o = t.target;
            $platformManager.Platform.showRewardAds(function (t) {
                if (0 == t && o.getChildByName("videoLock")) {
                    o.getChildByName("videoLock").destroy();
                    o.getChildByName("empty").active = true;
                    o.isEmpty = true;
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
    }
    playUnlockSpine(t) {
        var e = cc.instantiate(this.dict.jiesuo);
        this.node.addChild(e);
        var o = t.convertToWorldSpaceAR(cc.v2(0, 0));
        var i = this.node.convertToNodeSpaceAR(o);
        e.position = i;
        e.getComponent(sp.Skeleton).premultipliedAlpha = false;
        e.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        var r = t.getChildByName("unlockTips");
        if (r) {
            r.removeFromParent();
            r.active = false;
        }
        cc.game.emit("unlockVideoLock", this.func_hasLockParking());
    }
    func_unlockParking() {
        this.playUnlockSpine(this.unlockParkingTarget);
        this.unlockParkingTarget.getChildByName("videoLock").destroy();
        this.unlockParkingTarget.getChildByName("empty").active = true;
        this.unlockParkingTarget.isEmpty = true;
        this.parkingNodes.push(this.unlockParkingTarget);
    }
    touchStart(t) {
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
                    this._touchBegin = true;
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
                        var c = false;
                        for (var l = 0; l < this.guideNodes.length; l++) {
                            var h = this.guideNodes[l];
                            if (-1 == this.guidedNodes.indexOf(h)) {
                                this.currentGuideNode = h;
                                this.handPos();
                                c = true;
                                break;
                            }
                        }
                        if (c) {
                            //
                        } else {
                            this.dict.hand.active = false;
                            this.dict.handText.active = false;
                            this.dict.handText.parent.active = false;
                        }
                    }
                    var p = false;
                    for (l = 0; l < this.parkingNodes.length; l++) {
                        if (this.parkingNodes[l].isEmpty) {
                            p = true;
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
                            true
                        );
                        a.getComponent($level_29086_boxCarItem.default).oldPos = a.position;
                    }
                    if (s) {
                        s.getComponent($level_29086_boxCarItem.default).otherCarNode = this.getOtherCarByDistance(
                            s,
                            true
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
    }
    checkHasCollision(t) {
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
                    return true;
                }
            }
        }
        return false;
    }
    addTailGasSpine(t) {
        //暂时关闭拖尾
        if (true){
            return;
        }
        return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function () {
                e = cc.instantiate(this.dict.tailGas);
                t.addChild(e);
                e.position = cc.v2(0, -t.height);
                if (e.getComponent($motionTrail.default)) {
                    e.getComponent($motionTrail.default).active = true;
                }
                return [2];
            });
        });
    }
    getWPosByPolygon(t) {
        var e = t.points;
        var o = [];
        for (var i = 0; i < e.length; i++) {
            var r = cc.v2(e[i].x + t.offset.x, e[i].y + t.offset.y);
            var n = t.node.convertToWorldSpaceAR(r);
            o.push(n);
        }
        return o;
    }
    getRandomDistinctElements(t, e) {
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
    }
    getTankDirIndex(t) {
        var e = Math.round((((t % 360) + 360) % 360) / 45) * 45;
        e = 360 == e ? 0 : e;
        return TANK_SKIN_DIR[e];
    }
    getTankSkinAssetPrefixes(t) {
        var e = TANK_SKIN_BY_COLOR[t];
        if (!e) {
            return [];
        }
        var o = [];
        if (e.tankAssetPrefix) {
            o.push(e.tankAssetPrefix);
        }
        if (e.assetPrefix && o.indexOf(e.assetPrefix) < 0) {
            o.push(e.assetPrefix);
        }
        var i = TANK_SKIN_TYPE_ASSET[e.type];
        if (i && o.indexOf(i) < 0) {
            o.push(i);
        }
        return o;
    }
    getTankSpritePaths(t, e) {
        var o = this.getTankSkinAssetPrefixes(e);
        var i = this.getTankDirIndex(t.angle);
        if (!o.length || void 0 === i) {
            return [];
        }
        return o.map(function (t) {
            return TANK_SKIN_SPRITE_DIR + t + "_" + i;
        });
    }
    getTankArrowSpritePath(t) {
        if (!$level_29086_config.TankAssemblyArrowEnabled) {
            return null;
        }
        var e = this.getTankDirIndex(t.angle);
        if (void 0 === e) {
            return null;
        }
        var o = $level_29086_config.TankAssemblyArrowSpritePrefix || "tank_arrow_";
        return $level_29086_config.TankAssemblyProgressTextureDir + o + e;
    }
    getOrCreateTankArrowNode(t) {
        var e = t.getChildByName("dir") || t.getChildByName("tankArrow");
        if (!e) {
            e = new cc.Node("dir");
            t.addChild(e);
            e.addComponent(cc.Sprite);
        } else if (!e.getComponent(cc.Sprite)) {
            e.addComponent(cc.Sprite);
        }
        e.setSiblingIndex(t.childrenCount - 1);
        return e;
    }
    layoutTankArrowNode(t, e) {
        var o = t.getChildByName("car");
        var i = cc.v2(0, -t.height / 2);
        var n = 0;
        if (o) {
            var a = cc.v2((0.5 - o.anchorX) * o.width, (0.5 - o.anchorY) * o.height);
            i = t.convertToNodeSpaceAR(o.convertToWorldSpaceAR(a));
            n = o.angle || 0;
        }
        var r = $level_29086_config.TankAssemblyArrowOffset || [0, 0];
        e.position = cc.v2(i.x + (r[0] || 0), i.y + (r[1] || 0));
        e.scale = $level_29086_config.TankAssemblyArrowScale || 1;
        e.angle = n;
        e.active = true;
    }
    applyTankArrow(t) {
        if (!this.isTankAssemblyLevel() || t.isCarPark) {
            return;
        }
        var e = this.getTankArrowSpritePath(t);
        if (!e) {
            return;
        }
        var o = this.getOrCreateTankArrowNode(t);
        this.layoutTankArrowNode(t, o);
        var i = o.getComponent(cc.Sprite);
        this.loadTankSpriteFrame(e, function (e) {
            if (e && cc.isValid(t) && cc.isValid(o)) {
                i.spriteFrame = e;
                o.active = true;
            }
        });
    }
    loadTankSpriteFrame(t, e) {
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
    }
    loadTankSpriteFrameFromPaths(t, e) {
        var o = this;
        var i = 0;
        var r = function () {
            if (i >= t.length) {
                e(null);
                return;
            }
            o.loadTankSpriteFrame(t[i++], function (t) {
                if (t) {
                    e(t);
                    return;
                }
                r();
            });
        };
        r();
    }
    getTankAssemblyProgressStage(t) {
        var e = $level_29086_config.TankAssemblyProgressStages || [];
        if (!e.length) {
            return null;
        }
        var o = e[0];
        for (var i = 0; i < e.length; i++) {
            if (t >= e[i].progress) {
                o = e[i];
            }
        }
        return o;
    }
    setTankAssemblyParkingProgress(t, e) {
        var o = this.getTankAssemblyProgressStage(e);
        if (!o) {
            return;
        }
        t.assemblyProgress = o.progress;
        var i = t.getChildByName("tankStop");
        if (i) {
            i.active = true;
            var r = i.getComponent(cc.Sprite);
            var n = $level_29086_config.TankAssemblyProgressTextureDir + o.sprite;
            r &&
                this.loadTankSpriteFrame(n, function (t) {
                    if (t && cc.isValid(i)) {
                        r.spriteFrame = t;
                    }
                });
        }
        var a = t.getChildByName("progressRoot");
        if (a) {
            a.active = true;
            var s = a.getComponent(cc.Label);
            if (s) {
                s.string = o.progress + "%";
            }
        }
    }
    finishTankAssemblyParking(t, e) {
        if (!e || !cc.isValid(t)) {
            return;
        }
        var o = t.getComponent($level_29086_boxCarItem.default);
        e.car = t;
        e.assemblyCar = t;
        e.isEmpty = false;
        e.assemblyColor = o.carColor;
        e.assemblyConfig = this.getTankAssemblyTypeByColor(o.carColor);
        e.assemblyCapacity = o.seatTotalAmount;
        e.assemblyCollected = 0;
        e.assemblyProgress = $level_29086_config.TankAssemblyInitialProgress;
        e.assemblyComplete = false;
        if (!e.assemblyConfig) {
            console.warn("未配置坦克组装颜色", o.carColor);
        }
        this.setTankAssemblyParkingProgress(e, e.assemblyProgress);
        if (t.getChildByName("boxSpine")) {
            t.getChildByName("boxSpine").active = false;
        }
        this.putTailGas(t);
        t.stopAllActions();
        t.active = false;
        this.checkTankAssemblyAutoNextWhenTopDisabled();
    }
    applyTankSkin(t, e) {
        if (!TANK_SKIN_LEVEL_IDS[this.levelID] || t.isCarPark) {
            return;
        }
        var a = this;
        var o = this.getTankSpritePaths(t, e);
        var i = t.getChildByName("car");
        if (!o.length || !i) {
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
            n.active = false;
        }
        if (t.getChildByName("shadow")) {
            t.getChildByName("shadow").active = false;
        }
        this.loadTankSpriteFrameFromPaths(o, function (e) {
            if (!e || !cc.isValid(t) || !cc.isValid(i)) {
                return;
            }
            i.getComponent(cc.Sprite).spriteFrame = e;
            i.active = true;
            if (r && cc.isValid(r)) {
                r.active = false;
            }
            if (n && cc.isValid(n)) {
                n.active = false;
            }
            a.applyTankArrow(t);
        });
    }
    setCarColorImg(t, e) {
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
        t.parent.active = true;
        t.active = true;
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
            t.active = false;
        }
    }
    updateCarWeight() {
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
                    r.isScaleAnim = true;
                    cc.tween(r)
                        .to(0.2, {
                            scale: 1.2
                        })
                        .to(0.2, {
                            scale: 1
                        })
                        .call(function () {
                            r.isScaleAnim = false;
                            r.getChildByName("dir").active = false;
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
                                    r.getChildByName("dir").active = true;
                                    if (e) {
                                        r.getChildByName("dir").getComponent(cc.Sprite).spriteFrame =
                                            new cc.SpriteFrame(e);
                                    }
                                }
                            });
                            var o = r.getComponent($level_29086_boxCarItem.default);
                            var i = "" + o.colorImgName + o.dirImgName + o.lenImgName;
                            var n = "texture/" + t.folder + "/" + t.folder + "_" + i;
                            r.getChildByName("car").active = false;
                            r.isNoBlack = true;
                            cc.resources.load(n, function (t, e) {
                                if (t) {
                                    //
                                } else {
                                    r.getChildByName("car").active = true;
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
    }
    createPerson(t, e) {
        if (void 0 === t) {
            t = false;
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
                r.longwei = true;
                r.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                r._moveIndex = 0;
                r[this._mBodyMoveDis] =
                    this._curLastBoxItemNode[this._mBodyMoveDis] -
                    (this._curLastBoxItemNode.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                r[this._mBodyMoveBackDis] = 0;
                r[this._mBodyEven] = true;
                r.active = false;
                this.changeDragonSkin(r, function () {
                    r.active = true;
                });
                this.sortPersonNodes.push(r);
                this._curLastBoxItemNode = r;
            }
            if (this.personPosRoot2 && !this.sortPersonNodes2[this.sortPersonNodes2.length - 1].longwei) {
                (n = cc.instantiate(this.dict.longwei)).getComponent($level_29086_dragonItem.default).dragonColor = 1;
                this.dragonRoot.addChild(n, 0);
                n.longwei = true;
                n.position = cc.v3(this._mapConfig[0][0], this._mapConfig[0][1]);
                n._moveIndex = 0;
                n[this._mBodyMoveDis] =
                    this._curLastBoxItemNode2[this._mBodyMoveDis] -
                    (this._curLastBoxItemNode2.longtou ? 1.7 * this._keepDistance : 1.5 * this._keepDistance);
                n[this._mBodyMoveBackDis] = 0;
                n[this._mBodyEven] = false;
                n.active = false;
                this.changeDragonSkin(n, function () {
                    n.active = true;
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
                    var d = true;
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
                                    d = false;
                                } else {
                                    this.sortPersonNodes.length &&
                                        this.sortPersonNodes2.length &&
                                        (d = !(this.sortPersonNodes.length > this.sortPersonNodes2.length));
                                }
                            } else {
                                d = true;
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
                                y[this._mBodyEven] = true;
                                this.sortPersonNodes.push(y);
                                this._curLastBoxItemNode = y;
                            } else {
                                y[this._mBodyMoveDis] =
                                    this._curLastBoxItemNode2[this._mBodyMoveDis] -
                                    (this._curLastBoxItemNode2.longtou
                                        ? 1.7 * this._keepDistance
                                        : 1.5 * this._keepDistance);
                                y[this._mBodyEven] = false;
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
                                y[this._mBodyEven] = true;
                                this.sortPersonNodes.push(y);
                                this._curLastBoxItemNode = y;
                            } else {
                                y[this._mBodyMoveDis] =
                                    this._curLastBoxItemNode2[this._mBodyMoveDis] -
                                    (this._curLastBoxItemNode2.longtou
                                        ? 1.7 * this._keepDistance
                                        : 1.5 * this._keepDistance);
                                y[this._mBodyEven] = false;
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
    }
    createItem(t) {
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
        e.active = true;
        var o = e.getChildByName("spine");
        if (o) {
            o.active = false;
        }
        if (1 == t || 5 == t) {
            if (e.getChildByName("spine")) {
                o.active = true;
            } else {
                var i = cc.instantiate(this.dict["f29086.jn_texiao"]);
                i.name = "spine";
                i.parent = e;
                i.active = true;
                i.position = cc.v2(0, 90);
            }
        }
        return e;
    }
    update(t) {
        if (this.isTankAssemblyLevel()) {
            this.updateTankAssemblyConveyor(t);
            return;
        }
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
                                    ((this.isDragonAttack = false),
                                    (this.isDragonAttacking = false),
                                    this.sortPersonNodes.length &&
                                        ((this.sortPersonNodes[0][this._moveEnd] = false),
                                        this.sortPersonNodes[0].stopAllActions())),
                                this.isDragonAttack2 &&
                                    ((this.isDragonAttack2 = false),
                                    (this.isDragonAttacking2 = false),
                                    this.sortPersonNodes2.length &&
                                        ((this.sortPersonNodes2[0][this._moveEnd] = false),
                                        this.sortPersonNodes2[0].stopAllActions())),
                                this.hideWudi(true);
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
                        this._slowStart = false;
                    }
                }
                if (this._item1Start && ((this._item1Cur += t), this._item1Cur >= this._item1Time)) {
                    this._item1Cur = 0;
                    this._item1Start = false;
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
                        this._item2Start = false;
                    }
                }
                if (this._item3Start) {
                    this._item3Cur += t;
                    if (this._item3Cur >= this._item3Time) {
                        this._item3Cur = 0;
                        this._item3Start = false;
                    }
                }
                if (this._item4Start && ((this._item4Cur += t), this._item4Cur >= this._item4Time)) {
                    this._item4Cur = 0;
                    this._item4Start = false;
                    for (r = 0; r < this.cannonRoot.children.length; r++) {
                        var n = this.cannonRoot.children[r];
                        this.hideItem4Spine(n);
                    }
                }
                if (this._item5Start && ((this._item5Cur += t), this._item5Cur >= this._item5Time)) {
                    this._item5Cur = 0;
                    this._item5Start = false;
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
                            e.getComponent(sp.Skeleton).setAnimation(0, "idle1", true);
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
                            o.getComponent(sp.Skeleton).setAnimation(0, "idle1", true);
                        }
                        return void (
                            ((e && 0 == e[this._mBodyMoveBackDis]) || !e) &&
                            ((o && 0 == o[this._mBodyMoveBackDis]) || !o) &&
                            ((this.isReviveBack = false), this.checkRes())
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
                            (e[this._moveEnd] = true), (this.isDragonAttack = true), this.doDragonAttack();
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
                            (o[this._moveEnd] = true), (this.isDragonAttack2 = true), this.doDragonAttack();
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
    }
    moveInUpdate(t, e) {
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
                        var s = false;
                        if (a < 0) {
                            s = true;
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
    }
    moveInUpdate2(t, e) {
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
                        var s = false;
                        if (a < 0) {
                            s = true;
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
    }
    getMoveDis(t, e) {
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
    }
    getAddSpeed() {
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
    }
    updateBodyPos(t, e) {
        if (void 0 === e) {
            e = false;
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
    }
    getPosByDis(t) {
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
    }
    getPos2ByDis(t) {
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
    }
    moveBodyBack() {
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
    }
    moveBodyRevive() {
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
    }
    removeBody(t) {
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
    }
    backBodyWithPick2(t, e) {
        var o = this;
        this.sortPersonNodes.slice(0, e).forEach(function (t) {
            var e;
            t[o._mBodyMoveBackDis] =
                (null !== (e = t[o._mBodyMoveBackDis]) && void 0 !== e ? e : 0) - 1.5 * o._keepDistance;
        });
        t.destroy();
        if (this.isDragonAttack) {
            this.isDragonAttack = false;
            this.isDragonAttacking = false;
            this.sortPersonNodes[0][this._moveEnd] = false;
            this.sortPersonNodes[0].stopAllActions();
        }
    }
    backBodyWithPick3(t, e) {
        var o = this;
        this.sortPersonNodes2.slice(0, e).forEach(function (t) {
            var e;
            t[o._mBodyMoveBackDis] =
                (null !== (e = t[o._mBodyMoveBackDis]) && void 0 !== e ? e : 0) - 1.5 * o._keepDistance;
        });
        t.destroy();
        if (this.isDragonAttack2) {
            this.isDragonAttack2 = false;
            this.isDragonAttacking2 = false;
            this.sortPersonNodes2[0][this._moveEnd] = false;
            this.sortPersonNodes2[0].stopAllActions();
        }
    }
    itemNodeMove() {
        for (var t = 0; t < this._itemNodeList.length; t++) {
            var e = this._itemNodeList[t];
            if (e[this._itemDepend]) {
                e.position = e[this._itemDepend].position;
            }
        }
    }
    checkCannonAttack(t) {
        for (var e = 0; e < this.cannonAttackList.length; e++) {
            var o = this.cannonAttackList[e];
            if (t >= o[0] && t <= o[1]) {
                return true;
            }
        }
        return false;
    }
    cannonAttack(t, e) {
        var o = this;
        this.playRemoteSound($levelConstant.domain + "audio/f29086/f29086_Shoot.mp3", false);
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
        a.active = false;
        e[this._bulletTarget] = a;
        a[this._dragonTarget] = e;
        t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "attack", false);
        cc.tween(t)
            .delay(0.1)
            .call(function () {
                t[o._cannonNum]--;
                t.getChildByName("num").getComponent(cc.Label).string = "x" + t[o._cannonNum];
                a.active = true;
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
                    t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "exit", false);
                    t.getChildByName("cannon")
                        .getComponent(sp.Skeleton)
                        .setCompleteListener(function () {
                            t.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(null);
                            t.active = false;
                            t.removeFromParent(true);
                            o._cannonList.push(t);
                            t.parking.isEmpty = true;
                            t.parking.car = null;
                            o.moveCarAmount -= 1;
                        });
                } else {
                    t.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                    t[o._cannonState] = 1;
                }
            });
    }
    bulletArrived(t, e) {
        var o = this;
        this.playRemoteSound($levelConstant.domain + "audio/f29086/f29086_Blow.mp3", false);
        this._bulletMoveList.splice(e, 1);
        this.allPersonAmount--;
        cc.game.emit("allPersonAmount", this.allPersonAmount, this.allPersonAmount2);
        this.uiShowPersonAmount--;
        this.updateHp();
        t.getChildByName("bullet").active = false;
        t.getChildByName("xiaochu").opacity = 255;
        t.getChildByName("xiaochu").getComponent(sp.Skeleton).setAnimation(0, "animation", false);
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
                    e.active = true;
                    e.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
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
                t.active = false;
                o._bulletModelList.push(t);
            });
    }
    itemActive(t, e) {
        switch (t) {
            case 1:
                this.func_item1();
                break;
            case 2:
                this._item2Cur = 0;
                this._item2Start = true;
                this.moveBodyBack();
                break;
            case 3:
                this._item3Cur = 0;
                this._item3Start = true;
                break;
            case 4:
                this._item4Cur = 0;
                this._item4Start = true;
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
    }
    checkWarning(t) {
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
                        (c = this.dict.unlockTips).active = true;
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
                            c.active = false;
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
            this._warning = true;
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
                this._warning = false;
            }
        }
    }
    checkRole(t) {
        var e = $level_29086_config.MapParam[this.mapType].roleWarn;
        if (-29095 == this.levelID) {
            e = $level_29086_config.MapParam[0].roleWarn;
        }
        var o = $level_29086_config.MapParam[this.mapType].rolePoint;
        if (t >= e[this._rolePointIndex] && this.roleNode._moveIndex >= o[this._rolePointIndex]) {
            this._rolePointIndex += 1;
            this.roleNode.moving = true;
        }
        var i = this.roleNode.getChildByName("role").getComponent(sp.Skeleton);
        if (this.roleNode.moving) {
            this.roleMoving();
            this.updateRoleHpPos();
            if (this.roleNode._moveIndex >= o[this._rolePointIndex]) {
                this.roleNode.moving = false;
            }
        }
        if (this.roleNode.moving && "zou" != i.animation) {
            this.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "zou", true);
        } else {
            if (this.roleNode.moving || "haipa" == i.animation) {
                //
            } else {
                this.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "haipa", true);
            }
        }
    }
    roleMoving() {
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
    }
    getBullet() {
        var t;
        (t = this._bulletModelList.length
            ? this._bulletModelList.shift()
            : cc.instantiate(this.dict.bulletPrefab)).parent = this.dict.bulletRoot;
        t.angle = 0;
        t.getChildByName("bullet").active = true;
        t.getChildByName("xiaochu").opacity = 0;
        t[this._dragonTarget] = null;
        return t;
    }
    getCannon() {
        var t;
        (t = this._cannonList.length
            ? this._cannonList.shift()
            : cc.instantiate(this.dict.cannonPrefab)).getChildByName("cannon").angle = 0;
        t.getChildByName("num").getComponent(cc.Label).string = "";
        t.getChildByName("body").active = true;
        t.active = true;
        if (!this._item4Start && t.getChildByName("item4Spine")) {
            this.hideItem4Spine(t);
        }
        if (!this._item5Start && t.getChildByName("item5Spine")) {
            this.hideItem5Spine(t);
        }
        return t;
    }
    updateItemTips() {
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
                this._itemTipsNode.active = true;
                this._itemTipsNode.getComponent(cc.Label).string = $languageManager.default.formatStr(
                    o + "%dS",
                    this["_item" + e + "Time"] - Math.round(t[0][0])
                );
            }
        } else {
            this._itemTipsNode.active = false;
        }
    }
    updateParkingWeight() {
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
    }
    updateHp() {
        var t = this.allPersonAmount;
        var e = this.allPersonAmount2;
        this.dict.hpCount.getComponent(cc.Label).string = "" + t;
        this.dict.hpImg.getComponent(cc.Sprite).fillRange = t / e;
    }
    carAnim(t) {
        if (t.isCarAnim) {
            //
        } else {
            t.isCarAnim = true;
            cc.tween(t.parent.parent)
                .to(0.1, {
                    scale: 0.9
                })
                .to(0.1, {
                    scale: 1
                })
                .call(function () {
                    t.isCarAnim = false;
                })
                .start();
        }
    }
    checkTipText() {
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
    }
    checkRes() {
        var t = this;
        if (!this.isWin && 0 == this.allPersonAmount) {
            this.isWin = true;
            var e = null;
            var o = null;
            for (var i = 0; i < this.sortPersonNodes.length; i++) {
                if ((r = this.sortPersonNodes[i]).longtou || r.longwei) {
                    r.getComponent(sp.Skeleton).setAnimation(0, "die", false);
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
                    r.getComponent(sp.Skeleton).setAnimation(0, "die", false);
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
                    t.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "shengli", true);
                    t.playRight();
                });
            }
            if (o) {
                this.showDragonBall(o);
            }
        }
    }
    setColorPersonImg(t, e) {
        e.getComponent(cc.Sprite).spriteFrame = this.box2SpriteAtlas.getSpriteFrame(
            "f29086_" + (t + 1 + 4e3 + 100 * this._dragonSkin)
        );
    }
    shuffleArray(t) {
        var e;
        for (var o = t.length - 1; o > 0; o--) {
            var i = Math.floor(Math.random() * (o + 1));
            e = [t[i], t[o]];
            t[o] = e[0];
            t[i] = e[1];
        }
        return t;
    }
    getAmountByColor(t) {
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
    }
    flatten(t) {
        var e = this;
        return t.reduce(function (t, o) {
            if (Array.isArray(o)) {
                return t.concat(e.flatten(o));
            } else {
                return t.concat(o);
            }
        }, []);
    }
    consoleWeight(t, e) {
        var o = JSON.parse(JSON.stringify(e));
        for (var i = 0; i < o.length; i++) {
            var r = o[i];
            r = $level_29086_config.colorDes[i] + ":" + r;
            o[i] = r;
        }
        console.log(t, o);
    }
    getPersonColor() {
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
    }
    updateSortWeight() {
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
    }
    getCarColor(t, e) {
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
    }
    setCarID() {
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
    }
    getArrByLen(t, e) {
        t = this.sortColor_new;
        var o = [];
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            if (i >= e[0] - 1 && i <= e[1] - 1) {
                o.push(r);
            }
        }
        return o;
    }
    getOtherCarByDistance(t, e) {
        if (void 0 === e) {
            e = false;
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
                cc.Intersection.pointLineDistance(a, r[0], r[1], true) -
                cc.Intersection.pointLineDistance(a, n[0], n[1], true)
            );
        });
        return o;
    }
    getPath(t) {
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
        var c = false;
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
                    c = true;
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
    }
    fetchMaxIndex(t, e) {
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
    }
    getLevelProgressByCar() {
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
                    return true;
                }
            }
        }
        return false;
    }
    randomByWeight(t, e) {
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
    }
    arraysEqual(t, e) {
        if (t.length !== e.length) {
            return false;
        }
        for (var o = 0; o < t.length; o++) {
            if (t[o] !== e[o]) {
                return false;
            }
        }
        return true;
    }
    randomNum(t, e, o) {
        var i = e - t;
        var r = o || Math.random();
        return t + Math.round(r * i);
    }
    getLocal(t) {
        if (this.localData[t]) {
            return this.localData[t];
        }
        var e = cc.sys.localStorage.getItem("" + this.levelID + t);
        if (e) {
            return JSON.parse(e);
        } else {
            return null;
        }
    }
    setLocal(t, e) {
        this.localData[t] = e;
        cc.sys.localStorage.setItem("" + this.levelID + t, JSON.stringify(e));
    }
    show(t, e, o) {
        if (void 0 === e) {
            e = 0.8;
        }
        if (void 0 === o) {
            o = 0;
        }
        var i = cc.instantiate(this.dict.tipPrefab);
        this.dict.game.addChild(i);
        i.active = true;
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
    }
    transformPosition(t, e) {
        return e.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec2.ZERO));
    }
    func_sort() {
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
                this.isSorting = true;
                this.isSortAnim = true;
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
                    e.active = false;
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
                        r.isSortAnim = false;
                        r.isWin = false;
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
                        var a = true;
                        var s = 0;
                        var c = 0;
                        for (o = 0; o < n; o++) {
                            if (r.personPosRoot2) {
                                if (s || c) {
                                    if (s && !c) {
                                        a = false;
                                    } else {
                                        s && c && (a = !(!r.sortPersonNodes[s] || (r.sortPersonNodes2[c] && s > c)));
                                    }
                                } else {
                                    a = true;
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
                        r.isSorting = false;
                    })
                    .start();
                return [2];
            });
        });
    }
    revive() {
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
                    e.active = false;
                    this._bulletModelList.push(e);
                }
                this.isDragonAttack = false;
                this.isDragonAttacking = false;
                this.isDragonAttack2 = false;
                this.isDragonAttacking2 = false;
                if (this.sortPersonNodes.length) {
                    this.sortPersonNodes[0][this._moveEnd] = false;
                    this.sortPersonNodes[0].stopAllActions();
                }
                if (this.sortPersonNodes2.length) {
                    this.sortPersonNodes2[0][this._moveEnd] = false;
                    this.sortPersonNodes2[0].stopAllActions();
                }
                this.moveBodyRevive();
                this.isReviveBack = true;
                this.isReviveSort = true;
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
                    n.isWin = false;
                    var t = true;
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
                                t = true;
                            }
                            if (c) {
                                c[n._turnBackDestroy] = true;
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
                                o.getChildByName("cannon").getComponent(sp.Skeleton).setAnimation(0, "exit", false);
                                o.getChildByName("cannon")
                                    .getComponent(sp.Skeleton)
                                    .setCompleteListener(function () {
                                        o.getChildByName("cannon").getComponent(sp.Skeleton).setCompleteListener(null);
                                        o.getChildByName("body").active = false;
                                        var t = null;
                                        if (o.getChildByName("xiaoshi")) {
                                            t = o.getChildByName("xiaoshi");
                                        } else {
                                            (t = cc.instantiate(n.dict["f29086.xiaoshi"])).name = "xiaoshi";
                                            t.parent = o;
                                            t.position = cc.v2();
                                        }
                                        t.active = true;
                                        t.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                        cc.tween(o)
                                            .delay(0.5)
                                            .call(function () {
                                                o.active = false;
                                                o.removeFromParent(true);
                                                n._cannonList.push(o);
                                                o.parking.isEmpty = true;
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
                        n.isReviveSort = false;
                        n.roleNode.getChildByName("role").getComponent(sp.Skeleton).setAnimation(0, "haipa", true);
                    });
                });
                return [2];
            });
        });
    }
    func_revive() {
        var t = this;
        if (!(this.isReviveBack || this.isReviveSort || this.dict.dazhao.active)) {
            if (this.func_hasLockParking()) {
                for (var e = 0; e < this.dict.parkingRoot.children.length; e++) {
                    var o = this.dict.parkingRoot.children[e];
                    if (o.getChildByName("videoLock") && o.getChildByName("videoLock").active) {
                        o.getChildByName("videoLock").destroy();
                        o.getChildByName("empty").active = true;
                        this.playUnlockSpine(o);
                        var i = o.getChildByName("unlockTips");
                        if (i) {
                            i.removeFromParent();
                            i.active = false;
                        }
                        o.isEmpty = true;
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
    }
    reviveAnim(t) {
        var e = this;
        this.isWin = true;
        this.dict.dazhao.active = true;
        this.dict.dazhao.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        this.dict.dazhao.getComponent(sp.Skeleton).setCompleteListener(function () {
            e.dict.dazhao.getComponent(sp.Skeleton).setCompleteListener(null);
            e.dict.dazhao.active = false;
        });
        this.scheduleOnce(function () {
            if (t) {
                t();
            }
        }, 0.6);
    }
    func_hasLockParking() {
        for (var t = 0; t < this.dict.parkingRoot.children.length; t++) {
            var e = this.dict.parkingRoot.children[t];
            if (e.getChildByName("videoLock") && e.getChildByName("videoLock").active) {
                return true;
            }
        }
        return false;
    }
    func_checkSlowDown() {
        if (!this.isWin && !this._removeStage && !this._slowStart) {
            return true;
        }
    }
    func_slowDown() {
        this._slowStart = true;
        this._slowCur = 0;
    }
    func_item1() {
        cc.game.emit("f29086_item1");
    }
    func_item5() {
        cc.game.emit("f29086_item5");
    }
    func_item6(t) {
        cc.game.emit("f29086_addCoin", 20, t);
    }
    func_item7(t) {
        cc.game.emit("f29086_addCoin", 500, t);
    }
    func_item1CB() {
        this._item1Cur = 0;
        this._item1Start = true;
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
    }
    func_item5CB() {
        this._item5Cur = 0;
        this._item5Start = true;
        for (var t = 0; t < this.cannonRoot.children.length; t++) {
            var e = this.cannonRoot.children[t];
            this.showItem5Spine(e);
        }
    }
    showItem1BigSpine(t) {
        var e = t.getChildByName("item1BigSpine");
        if (e) {
            e.active = true;
        } else {
            var o = void 0;
            (o = this._item1BigSpineList.size()
                ? this._item1BigSpineList.get()
                : cc.instantiate(this.dict["f29086.bingkuai_da"])).name = "item1BigSpine";
            o.parent = t;
            o.active = true;
            o.position = cc.v2(0, 0);
        }
    }
    hideItem1BigSpine(t) {
        var e = t.getChildByName("item1BigSpine");
        if (e) {
            e.active = false;
        }
    }
    showItem1SmallSpine(t) {
        if (!t.getChildByName("item1SmallSpine")) {
            var e = void 0;
            (e = this._item1SmallSpineList.size()
                ? this._item1SmallSpineList.get()
                : cc.instantiate(this.dict["f29086.bingkuai_xiao"])).name = "item1SmallSpine";
            e.parent = t;
            e.active = true;
            e.position = cc.v2(0, 0);
        }
    }
    hideItem1SmallSpine(t) {
        var e = t.getChildByName("item1SmallSpine");
        if (e) {
            e.active = false;
            e.removeFromParent();
            this._item1SmallSpineList.put(e);
        }
    }
    showItem4Spine(t) {
        if (!t.getChildByName("item4Spine")) {
            var e = void 0;
            (e = this._item4SpineList.size()
                ? this._item4SpineList.get()
                : cc.instantiate(this.dict["f29086.pt_texiao1"])).name = "item4Spine";
            e.parent = t;
            e.active = true;
            e.position = cc.v2(0, -35);
        }
    }
    hideItem4Spine(t) {
        var e = t.getChildByName("item4Spine");
        if (e) {
            e.active = false;
            e.removeFromParent();
            this._item4SpineList.put(e);
        }
    }
    showItem5Spine(t) {
        if (!t.getChildByName("item5Spine")) {
            var e = void 0;
            (e = this._item5SpineList.size()
                ? this._item5SpineList.get()
                : cc.instantiate(this.dict["f29086.pt_texiao2"])).name = "item5Spine";
            e.parent = t;
            e.active = true;
            e.position = cc.v2(0, -35);
        }
    }
    hideItem5Spine(t) {
        var e = t.getChildByName("item5Spine");
        if (e) {
            e.active = false;
            e.removeFromParent();
            this._item5SpineList.put(e);
        }
    }
    showWudi() {
        var t = this.roleNode.getChildByName("wudi");
        if (t) {
            t.active = true;
        } else {
            var e = cc.instantiate(this.dict["f29086.wudi"]);
            e.name = "wudi";
            e.parent = this.roleNode;
            e.position = cc.v2();
            e.active = true;
        }
    }
    hideWudi(t) {
        if (void 0 === t) {
            t = false;
        }
        var e = this.roleNode.getChildByName("wudi");
        if (e) {
            if (t) {
                cc.tween(e)
                    .to(0.2, {
                        scale: 1.8 * e.scale
                    })
                    .call(function () {
                        e.active = false;
                    })
                    .start();
            } else {
                e.active = false;
            }
        }
    }
    changeDragonSkin(t, e) {
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
    }
    changeRoleSkin(t, e) {
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
    }
    updateRoleHp() {
        var t = this.dict.roleHpNode;
        var e = t.getChildByName("list");
        var o = this.dict.roleHpImg;
        if (e.childrenCount) {
            if (this._roleCurHp < e.childrenCount) {
                for (i = e.childrenCount - 1; i >= this._roleCurHp; i--) {
                    e.children[i].removeFromParent(true);
                }
            }
        } else {
            for (var i = 0; i < this._roleCurHp; i++) {
                var r = cc.instantiate(o);
                r.parent = t.getChildByName("list");
                r.position = cc.v2();
                r.active = true;
            }
        }
        if (1 == this._roleCurHp) {
            for (i = 0; i < e.childrenCount; i) {
                e.children[i].removeFromParent(true);
            }
            e.width = 0;
        } else {
            e.width = o.width * this._roleCurHp;
        }
        e.getComponent(cc.Layout).updateLayout();
    }
    updateRoleHpPos() {
        this.dict.roleHpNode.position = this.transformPosition(this.roleNode, this.dict.roleHpNode);
    }
    showDragonBall(t, e) {
        var o = cc.instantiate(this.dict.dragonBallImg);
        var i = cc.instantiate(this.dict.dragonBallBg);
        o.parent = this.dict.dragonBallImg.parent;
        i.parent = this.dict.dragonBallBg.parent;
        o.active = true;
        i.active = true;
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
                o.active = false;
                o.stopAllActions();
            })
            .start();
        cc.tween(i)
            .delay(1)
            .to(0.5, {
                position: this.transformPosition(this.roleNode, i)
            })
            .call(function () {
                i.active = false;
                i.stopAllActions();
            })
            .start();
    }
    doRoleLevel10Skill() {
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
    }
    doDragonAttack() {
        var t = this;
        if (!this.isDragonAttacking) {
            this.isDragonAttacking = true;
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
                        e.getComponent(sp.Skeleton).setAnimation(0, "angry", false);
                        e.getComponent(sp.Skeleton).addAnimation(0, "idle1", true);
                        if (t._roleLevel2Count && t._roleLevel2CurTime < t._roleLevel2Time) {
                            //
                        } else {
                            t._roleCurHp--;
                            t.updateRoleHp();
                            if (t._roleCurHp <= 0) {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", true),
                                    t.scheduleOnce(function () {
                                        e.getComponent(sp.Skeleton).setAnimation(0, "idle2", true);
                                        e.stopAllActions();
                                        t.isWin = true;
                                        cc.log("levelReviveHelper");
                                        $levelReviveHelper.default.levelFailEvent("是否需要复活", function () {
                                            t.func_revive();
                                        });
                                    }, 1.5);
                            } else {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", false),
                                    t.roleNode
                                        .getChildByName("role")
                                        .getComponent(sp.Skeleton)
                                        .addAnimation(0, "haipa", true);
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
            this.isDragonAttacking2 = true;
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
                        i.getComponent(sp.Skeleton).setAnimation(0, "angry", false);
                        i.getComponent(sp.Skeleton).addAnimation(0, "idle1", true);
                        if (t._roleLevel2Count && t._roleLevel2CurTime < t._roleLevel2Time) {
                            //
                        } else {
                            t._roleCurHp--;
                            t.updateRoleHp();
                            if (t._roleCurHp <= 0) {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", true),
                                    t.scheduleOnce(function () {
                                        i.getComponent(sp.Skeleton).setAnimation(0, "idle2", true);
                                        i.stopAllActions();
                                        t.isWin = true;
                                        cc.log("levelReviveHelper");
                                        $levelReviveHelper.default.levelFailEvent("是否需要复活", function () {
                                            t.func_revive();
                                        });
                                    }, 1.5);
                            } else {
                                t.roleNode
                                    .getChildByName("role")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "shibai", false),
                                    t.roleNode
                                        .getChildByName("role")
                                        .getComponent(sp.Skeleton)
                                        .addAnimation(0, "haipa", true);
                            }
                        }
                    })
                    .delay(this._dragonAttackInterval)
                    .union()
                    .repeatForever()
                    .start();
            }
        }
    }
    func_checkRemove() {
        if (
            !this.isWin &&
            !this._removeStage &&
            this.carRoot.children.length &&
            !(this.carRoot.children.length - this.parkingNodes.length <= 0)
        ) {
            return true;
        }
    }
    func_remove() {
        if (this.func_checkRemove()) {
            if (this.dict.transportLayer) {
                this.dict.transportLayer.getComponent($level_29086_transport.default).isMove = false;
            }
            this._removeStage = true;
            if (this._tipRemove) {
                this._tipRemove.active = true;
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
                t.active = true;
                t.children[1].getComponent(cc.Label).string = "请选择箱子";
                this._tipRemove = t;
            }
        }
    }
    remove(t) {
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
        this._removeClick = true;
        this._tipRemove.active = false;
        var i;
        var r = true;
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
                r = true;
            }
            if (l) {
                l.readyDestroy = true;
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
        t.active = false;
        var d = this.getFeidan();
        var g = this.getFeidanYanwu();
        var f = this.getFeidanBaozha();
        d.position = this.transformPosition(t.getChildByName("car"), d);
        d.y -= t.getChildByName("car").height / 2;
        d.active = true;
        g.position = this.transformPosition(t.getChildByName("car"), g);
        g.y -= t.getChildByName("car").height / 2;
        g.active = true;
        g.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
        g.getComponent(sp.Skeleton).setCompleteListener(function () {
            g.getComponent(sp.Skeleton).setCompleteListener(null);
            g.active = false;
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
                cc.game.emit("needLimitNoHandle", false);
                if (e.dict.transportLayer) {
                    e.dict.transportLayer.getComponent($level_29086_transport.default).isMove = true;
                }
                d.active = false;
                e._feidan.put(d);
                f.active = true;
                f.getComponent(sp.Skeleton).setAnimation(0, "zha_da", false);
                f.getComponent(sp.Skeleton).setCompleteListener(function () {
                    f.getComponent(sp.Skeleton).setCompleteListener(null);
                    f.active = false;
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
                e._removeClick = false;
                e._removeStage = false;
                e.checkRes();
            })
            .start();
    }
    getFeidan() {
        var t;
        (t = this._feidan.size() > 0 ? this._feidan.get() : cc.instantiate(this.dict["f29086.feidan"])).parent =
            this.dict["f29086.feidan"].parent;
        t.active = false;
        return t;
    }
    getFeidanYanwu() {
        var t;
        (t =
            this._feidanYanwu.size() > 0
                ? this._feidanYanwu.get()
                : cc.instantiate(this.dict["f29086.feidan_yanwu"])).parent = this.dict["f29086.feidan_yanwu"].parent;
        t.active = false;
        return t;
    }
    getFeidanBaozha() {
        var t;
        (t =
            this._feidanBaozha.size() > 0
                ? this._feidanBaozha.get()
                : cc.instantiate(this.dict["f29086.baozha"])).parent = this.dict["f29086.baozha"].parent;
        t.active = false;
        return t;
    }
    getAngle(t, e) {
        return (180 * Math.atan2(e.y - t.y, e.x - t.x)) / Math.PI;
    }
}
