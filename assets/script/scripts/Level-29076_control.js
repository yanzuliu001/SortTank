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
var L = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.box2SpriteAtlas = null;
        e.isDebug = !1;
        e.boundary = 750;
        e.carRoot = null;
        e.colorTypeAmount = $level_29076_config.colorDes.length;
        e.lastCar = null;
        e.oldSortAmount = 0;
        e.guideNodes = [];
        e.guideText = [
            "汽车会朝着箭头方向移动",
            "大巴车可以载10个同色小人",
            "小巴士可以载6个同色小人",
            "轿车可以载4个同色小人"
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
                if (this.dict.tailGas.getComponent($motionTrail.default)) {
                    this.dict.tailGas.getComponent($motionTrail.default).length = 25;
                    this.dict.tailGas.getComponent($motionTrail.default).headWidth = 35;
                    this.dict.tailGas.getComponent($motionTrail.default).tailWidth = 20;
                    this.dict.tailGas.getComponent($motionTrail.default).headOpacity = 230;
                    this.dict.tailGas.getComponent($motionTrail.default).tailOpacity = 40;
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
                t.getComponent($level_29076_boxCarItem.default).isReadyDestroy = !0;
                r = t.getComponent($level_29076_boxCarItem.default).colorImgName;
                n = t.getComponent($level_29076_boxCarItem.default).lenImgName;
                if (i) {
                    console.log("changeCar-carName", i);
                    (a = cc.instantiate(this.dict.carPrefab.getChildByName(i))).parking = t.parking;
                } else {
                    console.log("`02${lenImgName}`", "02" + n);
                    a = cc.instantiate(this.dict.carPrefab.getChildByName("02" + n));
                }
                if (
                    t.getComponent($level_29076_boxCarItem.default).carState !=
                        $level_29076_config.CarState.InRoadRight &&
                    t.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.InRoadLeft
                ) {
                    //
                } else {
                    this.updateCarWeight();
                }
                a.getComponent($level_29076_boxCarItem.default).carState = t.getComponent(
                    $level_29076_boxCarItem.default
                ).carState;
                a.active = !1;
                this.carRoot.addChild(a);
                a.getComponent($level_29076_boxCarItem.default).mgr = this;
                a.getComponent($level_29076_boxCarItem.default).colorImgName = r;
                a.getComponent($level_29076_boxCarItem.default).lenImgName = n;
                a.getComponent($level_29076_boxCarItem.default).dirImgName = e;
                a.getComponent($level_29076_boxCarItem.default).carColor = t.getComponent(
                    $level_29076_boxCarItem.default
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
                            a.getComponent($level_29076_boxCarItem.default).carState ==
                            $level_29076_config.CarState.OnBottomLeft
                        ) {
                            a.position = cc.v2(t.x - t.width / 2, t.y);
                        } else {
                            if (
                                a.getComponent($level_29076_boxCarItem.default).carState ==
                                $level_29076_config.CarState.OnBottomRight
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
                    a.getComponent($level_29076_boxCarItem.default).carState ==
                    $level_29076_config.CarState.GoingParking
                ) {
                    h = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 - 127.469));
                    c = a.parent.convertToNodeSpaceAR(h);
                    a.position = cc.v2(c.x, c.y);
                }
                p =
                    this.folder +
                    "_" +
                    $level_29076_config.getCarImgByColor(a, t.getComponent($level_29076_boxCarItem.default).carColor);
                a.stopAllActions();
                (function () {
                    if (t.getChildByName("tailGasSpine")) {
                        d.poolMgr.put(t.getChildByName("tailGasSpine"), "tailGasSpine");
                    }
                    if (t.getChildByName("tailGas")) {
                        t.getChildByName("tailGas").destroy();
                    }
                    var e = t.getComponent($level_29076_boxCarItem.default).nextCar;
                    try {
                        if (e && e.getComponent($level_29076_boxCarItem.default)) {
                            e.getComponent($level_29076_boxCarItem.default).carState =
                                $level_29076_config.CarState.Normal;
                        }
                    } catch (g) {}
                    t.destroy();
                    a.getChildByName("car").getComponent(cc.Sprite).spriteFrame = d.box2SpriteAtlas.getSpriteFrame(p);
                    a.active = !0;
                    var o = a.convertToWorldSpaceAR(cc.v2(0, 2250));
                    var i = a.parent.convertToNodeSpaceAR(o);
                    if (
                        a.getComponent($level_29076_boxCarItem.default).carState ==
                            $level_29076_config.CarState.InRoadRight ||
                        a.getComponent($level_29076_boxCarItem.default).carState ==
                            $level_29076_config.CarState.InRoadLeft
                    ) {
                        var r;
                        var n = a.parent.convertToWorldSpaceAR(a.position);
                        var s = void 0;
                        if (a.getComponent($level_29076_boxCarItem.default).isFireEngine) {
                            var c = a.parking.getChildByName("fireCarPos").position;
                            s = a.parking.convertToWorldSpaceAR(c);
                        } else {
                            s = a.parking.convertToWorldSpaceAR(cc.v2(0, -142.893));
                        }
                        r = a.parent.convertToNodeSpaceAR(s);
                        var l = Math.abs(s.x - n.x);
                        d.addTailGasSpine(a);
                        cc.tween(a)
                            .to(l / a.getComponent($level_29076_boxCarItem.default).speed, {
                                x: r.x
                            })
                            .call(function () {
                                a.getComponent($level_29076_boxCarItem.default).carState =
                                    $level_29076_config.CarState.GoingParking;
                                console.log("isRichCar", a.getComponent($level_29076_boxCarItem.default).isRichCar);
                                if (a.getComponent($level_29076_boxCarItem.default).isRichCar) {
                                    d.changeCar(
                                        a,
                                        6,
                                        0,
                                        "116" + a.getComponent($level_29076_boxCarItem.default).lenImgName
                                    );
                                } else {
                                    if (a.getComponent($level_29076_boxCarItem.default).isTramcar) {
                                        d.changeCar(
                                            a,
                                            6,
                                            0,
                                            "136" + a.getComponent($level_29076_boxCarItem.default).lenImgName
                                        );
                                    } else {
                                        d.changeCar(
                                            a,
                                            6,
                                            0,
                                            "06" + a.getComponent($level_29076_boxCarItem.default).lenImgName
                                        );
                                    }
                                }
                            })
                            .start();
                    } else if (
                        a.getComponent($level_29076_boxCarItem.default).carState ==
                        $level_29076_config.CarState.GoingParking
                    ) {
                        n = d.getWPosByNode(a);
                        s = void 0;
                        if (a.parking) {
                            if (1 == a.getComponent($level_29076_boxCarItem.default).lenImgName) {
                                s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 + 20));
                            } else {
                                if (2 == a.getComponent($level_29076_boxCarItem.default).lenImgName) {
                                    s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 + 15));
                                } else {
                                    s = a.parking.convertToWorldSpaceAR(cc.v2(0, a.height / 2 + 17));
                                }
                            }
                            var h = a.parent.convertToNodeSpaceAR(s);
                            a.getComponent($level_29076_boxCarItem.default).carState =
                                $level_29076_config.CarState.Parking;
                            a.stopAllActions();
                            l = h.sub(a.position).mag();
                            cc.tween(a)
                                .to(l / a.getComponent($level_29076_boxCarItem.default).speed, {
                                    position: h
                                })
                                .call(function () {
                                    a.parking.car = a;
                                    var t = a.getComponent($level_29076_boxCarItem.default).seatTotalAmount;
                                    var e = a.getComponent($level_29076_boxCarItem.default).carColor;
                                    a.getChildByName("sd").active = !1;
                                    a.getChildByName("shadow").active = !0;
                                    a.getChildByName("car").getComponent(cc.Sprite).spriteFrame =
                                        game.boxAtlas.getSpriteFrame(
                                            "f28749_" + (100 * $level_29076_config.ParkingImg[t] + e + 1)
                                        );
                                    d.putTailGas(a);
                                    d.checkPerson(!0);
                                })
                                .start();
                        }
                    } else if (
                        a.getComponent($level_29076_boxCarItem.default).carState ==
                        $level_29076_config.CarState.GoingRoad
                    ) {
                        n = d.dict.road.parent.convertToWorldSpaceAR(d.dict.road.position);
                        var u = a.parent.convertToWorldSpaceAR(a.position);
                        l = Math.abs(u.y - n.y);
                        d.addTailGasSpine(a);
                        cc.tween(a)
                            .by(l / a.getComponent($level_29076_boxCarItem.default).speed, {
                                y: l
                            })
                            .call(function () {
                                d.collision(a);
                            })
                            .start();
                    } else {
                        d.addTailGasSpine(a);
                        cc.tween(a)
                            .to(2250 / a.getComponent($level_29076_boxCarItem.default).speed, {
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
        if (!t.getComponent($level_29076_boxCarItem.default).isFireEngine) {
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
                    e.getComponent($level_29076_boxCarItem.default).carState = $level_29076_config.CarState.InRoadLeft;
                    if (e.getComponent($level_29076_boxCarItem.default).isRichCar) {
                        (e.getComponent($level_29076_boxCarItem.default).lenImgName = 1),
                            this.changeCar(
                                e,
                                1,
                                2,
                                "111" + e.getComponent($level_29076_boxCarItem.default).lenImgName + "-0"
                            );
                    } else {
                        this.changeCar(
                            e,
                            1,
                            2,
                            "01" + e.getComponent($level_29076_boxCarItem.default).lenImgName + "-0"
                        );
                    }
                } else {
                    e.getComponent($level_29076_boxCarItem.default).carState = $level_29076_config.CarState.InRoadRight;
                    if (e.getComponent($level_29076_boxCarItem.default).isRichCar) {
                        (e.getComponent($level_29076_boxCarItem.default).lenImgName = 1),
                            this.changeCar(
                                e,
                                1,
                                1,
                                "111" + e.getComponent($level_29076_boxCarItem.default).lenImgName + "-1"
                            );
                    } else {
                        this.changeCar(
                            e,
                            1,
                            1,
                            "01" + e.getComponent($level_29076_boxCarItem.default).lenImgName + "-1"
                        );
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
                        for (
                            this.dict.guide &&
                                this.scheduleOnce(function () {
                                    v.dict.guide.active = !1;
                                }, 6),
                                p = 0;
                            p < this.dict.parkingRoot.childrenCount;
                            p++
                        ) {
                            (d = this.dict.parkingRoot.children[p]).active &&
                                d.getChildByName("empty").active &&
                                !d.getChildByName("fireSpine") &&
                                ((d.isEmpty = !0), this.parkingNodes.push(d));
                            d.getChildByName("videoLock") &&
                                (d.getChildByName("videoLock").getChildByName("icon").scale = 0.8);
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
                        for (
                            e = this.getLocal("blackCar") || [],
                                o = this.carRoot.children.concat(this.turntableCarArr),
                                p = 0;
                            p < o.length;
                            p++
                        ) {
                            d = o[p];
                            this.carNodeArr.push(d);
                            d.getComponent($level_29076_boxCarItem.default).mgr = this;
                            d.indexID = "" + p;
                            i = this.getPath(d);
                            this.levelDataJSON.blackAmount &&
                                !e.length &&
                                i >= 2 &&
                                i <= 4 &&
                                this.between2_4CarArr.push(d);
                            d.getComponent($level_29076_boxCarItem.default).path = i;
                            this.isDebug &&
                                (((r = new cc.Node()).name = "path"),
                                (r.addComponent(cc.Label).string = "" + i),
                                (r.color = cc.Color.WHITE),
                                d.addChild(r),
                                (r.position = cc.v2(-13.105, -26.21)));
                            this.allPersonAmount += d.getComponent($level_29076_boxCarItem.default).seatTotalAmount;
                        }
                        this.allPersonAmount2 = this.allPersonAmount;
                        this.dict.personAmount.getComponent(cc.Label).string = "" + this.allPersonAmount;
                        cc.game.emit("allPersonAmount", this.allPersonAmount, this.allPersonAmount2);
                        this.setCarID();
                        if (this.levelDataJSON.blackAmount && !e.length) {
                            if (this.levelDataJSON.blackAmount >= this.between2_4CarArr.length) {
                                for (m = 0; m < this.between2_4CarArr.length; m++) {
                                    (h = this.between2_4CarArr[m]).getComponent(
                                        $level_29076_boxCarItem.default
                                    ).isBlackCar = !0;
                                    e.push(h.getComponent($level_29076_boxCarItem.default).carID);
                                }
                            } else {
                                n = this.getRandomDistinctElements(
                                    this.between2_4CarArr,
                                    this.levelDataJSON.blackAmount
                                );
                                for (m = 0; m < n.length; m++) {
                                    (h = n[m]).getComponent($level_29076_boxCarItem.default).isBlackCar = !0;
                                    e.push(h.getComponent($level_29076_boxCarItem.default).carID);
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
                                null ==
                                    (g =
                                        this.levelDataJSON.carWeight[
                                            d.getComponent($level_29076_boxCarItem.default).path - 1
                                        ]) && (g = 0);
                                this.carWeight[u] +=
                                    g * d.getComponent($level_29076_boxCarItem.default).emptySeatAmount;
                            }
                            this.setLocal("colorConfig", c);
                        } else {
                            for (p = 0; p < this.carNodeArr.length; p++) {
                                d = this.carNodeArr[p];
                                u = c[p];
                                e.includes(d.getComponent($level_29076_boxCarItem.default).carID) &&
                                    (d.getComponent($level_29076_boxCarItem.default).isBlackCar = !0);
                                this.setCarColorImg(d, u);
                                null ==
                                    (g =
                                        this.levelDataJSON.carWeight[
                                            d.getComponent($level_29076_boxCarItem.default).path - 1
                                        ]) && (g = 0);
                                this.carWeight[u] +=
                                    g * d.getComponent($level_29076_boxCarItem.default).emptySeatAmount;
                            }
                        }
                        for (
                            console.log("车辆权重", this.carWeight),
                                console.log("颜色", $level_29076_config.colorDes),
                                console.log("人数", this.colorPersonArr),
                                m = 0;
                            m < $level_29076_config.colorDes.length;
                            m++
                        ) {
                            this.getAmountByColor(m);
                        }
                        console.log("this.colorPersonAmountArr", this.colorPersonAmountArr);
                        console.log("this.colorPersonAmountArrIndex", this.colorPersonAmountArrIndex);
                        if (-27361 == this.levelID) {
                            this.colorPersonAmountArr = [[4, 4, 2], [], [], [3, 3], [1, 3], [], [], [2, 4, 4]];
                            this.firstSortIndexArr = [0, 7, 3, 4, 0, 7, 3, 4, 0, 7];
                        }
                        return "f27597" != this.folder
                            ? [3, 2]
                            : [4, $assetManager.default.getRes("ttBundle", "prefab/blockMan/Person", cc.Prefab)];
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
                                                        return (
                                                            (this.isFail = !0),
                                                            (e = this.allPersonAmount),
                                                            [4, this.timer(0.5)]
                                                        );
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
        return (
            this.checkCarFull() && !this.checkHasPersonMove() && !this.checkHasCarMove() && t == this.allPersonAmount
        );
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
            if (this.parkingNodes[e].car) {
                //
            } else {
                t = !1;
            }
        }
        return t;
    };
    e.prototype.checkHasPersonMove = function () {
        var t = !1;
        for (var e = 0; e < this.sortPersonNodes.length; e++) {
            if (this.sortPersonNodes[e].getComponent($level_249667_personItem.default).isMoving) {
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
            if (
                i.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.Idle &&
                i.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.Normal &&
                i.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.Parking
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
                i.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.Idle &&
                i.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.OutParking
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
    e.prototype.touchStart_parking = function (t) {
        var e = this;
        if (!this.isRemove && !this.removePropUsing) {
            var o = t.target;
            this.unlockParkingTarget = o;
            if (o.getChildByName("videoLock")) {
                var i = $localStorageManager.default.get($localStorageConst.default.UnlockParking) || 0;
                if (i) {
                    $localStorageManager.default.set($localStorageConst.default.UnlockParking, i - 1);
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
                        sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
                    });
                    return void this.playUnlockSpine(o);
                }
                if ($localStorageManager.default.get($localStorageConst.default.cardAmount)) {
                    $memoryStorageManager.default.set($memoryStorageConst.default.propIndex, 4);
                    $popupManager.default.show($popupConst.PopupConst.Prop);
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
                                sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
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
            if (
                p &&
                p != t &&
                p.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.Idle &&
                p.active &&
                !p.getComponent($level_29076_boxCarItem.default).isTransportCar &&
                !p.getComponent($level_29076_boxCarItem.default).isUTransportCar
            ) {
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
                if (
                    cc.Intersection.lineLine(e, o, d, u) ||
                    cc.Intersection.lineLine(e, o, g, m) ||
                    cc.Intersection.lineLine(i, r, d, u) ||
                    cc.Intersection.lineLine(i, r, g, m) ||
                    cc.Intersection.lineLine(e, o, f, v) ||
                    cc.Intersection.lineLine(n, a, f, v)
                ) {
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
                        return this.show($languageManager.default.formatStr("暂时没有更多位置了"));
                    }
                    var a = r.getComponent($level_29076_boxCarItem.default).nextCar;
                    var s = r.getComponent($level_29076_boxCarItem.default).prevCar;
                    if ((a || s) && this.moveCarAmount >= this.parkingNodes.length - 1) {
                        console.log("限制快速点击2");
                        return this.show($languageManager.default.formatStr("需要两个停车位"), 0.8, 1);
                    }
                    if (255 != r.opacity) {
                        return;
                    }
                    if (r.getChildByName("lock")) {
                        $tipManager.Tip.show($languageManager.default.formatStr("需要钥匙解锁"));
                        return void r.runAction(r.getComponent($level_29076_boxCarItem.default).shackAction(0.1, 2));
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
                    if (
                        this.isRemove &&
                        r.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.Idle &&
                        !this.removePropUsing &&
                        !r.obliqueHead &&
                        !r.getComponent($level_29076_boxCarItem.default).isFireEngine
                    ) {
                        return void this.removeCar(r);
                    }
                    if (this.removePropUsing) {
                        return;
                    }
                    if (!r.getComponent($level_29076_boxCarItem.default).isCanClick) {
                        return;
                    }
                    if (r.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.Idle) {
                        return;
                    }
                    if (r.getComponent($level_29076_boxCarItem.default).isTransportCar && (r.x > 267 || r.x < -267)) {
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
                        for (var p = 0; p < this.guideNodes.length; p++) {
                            var u = this.guideNodes[p];
                            if (-1 == this.guidedNodes.indexOf(u)) {
                                this.currentGuideNode = u;
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
                    var g = !1;
                    for (p = 0; p < this.parkingNodes.length; p++) {
                        if (this.parkingNodes[p].isEmpty) {
                            g = !0;
                            break;
                        }
                    }
                    if (!g) {
                        console.log("所有车位都被占用了");
                        return this.show($languageManager.default.formatStr("目前位置已满"), 0.8, 1);
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
                            return this.show($languageManager.default.formatStr("需要两个停车位"), 0.8, 1);
                        }
                    }
                    if (this.checkHasCarMoveAmount() >= this.parkingNodes.length) {
                        console.log("有相等于车位总量的车在运动，无法出车");
                        return this.show($languageManager.default.formatStr("暂时没有更多位置了"));
                    }
                    console.log("有" + this.checkHasCarMoveAmount() + "辆车在动！", this.parkingNodes.length);
                    if ((a || s) && this.parkingNodes.length - this.checkHasCarMoveAmount() <= 1) {
                        console.log("拉链车不能出车");
                        return this.show($languageManager.default.formatStr("暂时没有更多位置了"));
                    }
                    r.stopAllActions();
                    var f = r.convertToWorldSpaceAR(cc.v2(0, 2250));
                    var v = r.parent.convertToNodeSpaceAR(f);
                    r.getComponent($level_29076_boxCarItem.default).otherCarNode = this.getOtherCarByDistance(r);
                    r.getComponent($level_29076_boxCarItem.default).oldPos = r.position;
                    if (a) {
                        a.getComponent($level_29076_boxCarItem.default).otherCarNode = this.getOtherCarByDistance(
                            a,
                            !0
                        );
                        a.getComponent($level_29076_boxCarItem.default).oldPos = a.position;
                    }
                    if (s) {
                        s.getComponent($level_29076_boxCarItem.default).otherCarNode = this.getOtherCarByDistance(
                            s,
                            !0
                        );
                        s.getComponent($level_29076_boxCarItem.default).oldPos = s.position;
                    }
                    if (r.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.Idle) {
                        r.getComponent($level_29076_boxCarItem.default).carState = $level_29076_config.CarState.Normal;
                        if (r.getComponent($level_29076_boxCarItem.default).isFireEngine) {
                            //
                        } else {
                            this.moveCarAmount += 1;
                        }
                        cc.tween(r)
                            .to(2250 / r.getComponent($level_29076_boxCarItem.default).speed, {
                                position: v
                            })
                            .start();
                    }
                    if (
                        r.getComponent($level_29076_boxCarItem.default).isTransportCar ||
                        r.getComponent($level_29076_boxCarItem.default).isUTransportCar ||
                        1 != r.getComponent($level_29076_boxCarItem.default).path
                    ) {
                        //
                    } else {
                        this.addTailGasSpine(r);
                        if ($audioManager.Audio.getEffectMute()) {
                            //
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
        return (180 * Math.atan2(e.y - t.y, e.x - t.x)) / Math.PI + 90;
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
                if (e.getComponent($motionTrail.default)) {
                    e.getComponent($motionTrail.default).active = !0;
                }
                return [2];
            });
        });
    };
    e.prototype.getNodeWorldEulerAngles = function (t) {
        var e = 0;
        for (var o = t; o; ) {
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
                cc.tween(r)
                    .stop()
                    .to(0.05 * i + 0.02, {
                        position: e.position
                    })
                    .start();
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
            if (o.includes(t[r])) {
                //
            } else {
                o.push(t[r]);
                t[r] = t[t.length - i - 1];
            }
        }
        return o;
    };
    e.prototype.setCarColorImg = function (t, e) {
        var o;
        var i = t.getComponent($level_29076_boxCarItem.default);
        i.carColor = e;
        if (this.colorPersonArr[e]) {
            //
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
        if (this.levelDataJSON.carWeight[i.path]) {
            //
        } else {
            this.levelDataJSON.carWeight[i.path] = 0;
        }
    };
    e.prototype.setCarColorImg_2 = function (t, e) {
        var o;
        var i = t.getComponent($level_29076_boxCarItem.default);
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
        var o = function (o) {
            var r = e[o];
            if (
                r &&
                r.getComponent($level_29076_boxCarItem.default) &&
                r.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.Idle &&
                !r.getComponent($level_29076_boxCarItem.default).isTransportCar &&
                !r.getComponent($level_29076_boxCarItem.default).isUTransportCar
            ) {
                r.path = null;
                var n = i.getPath(r);
                r.getComponent($level_29076_boxCarItem.default).path = n;
                if (1 == n && r.getComponent($level_29076_boxCarItem.default).isBlackCar && !r.isNoBlack) {
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
                            var o = r.getComponent($level_29076_boxCarItem.default);
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
                if (null == a) {
                    a = 0;
                }
                i.carWeight[r.getComponent($level_29076_boxCarItem.default).carColor] +=
                    a * r.getComponent($level_29076_boxCarItem.default).emptySeatAmount;
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
            for (var r = 0; this.sortPersonNodes.length < this.uiShowPersonAmount; ) {
                var n = this.getPersonColor();
                var a = ((i = this.colorPersonIndexArr[n]), this.colorPersonAmountArr[n][i]);
                if (this.isReviveAmount) {
                    a = 1;
                }
                if (
                    this.colorPersonAmountArrIndex[n] &&
                    this.colorPersonAmountArrIndex[n][i] == this.lastExtraIndexArr[n]
                ) {
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
                if (this.isReviveAmount) {
                    //
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
                        p.getComponent($level_249667_personItem.default).personColor = n;
                        if (n + 1 == 10) {
                            this.setColorPersonImg(n, p, 2, this.policeSkinName);
                            if ("a" == this.policeSkinName) {
                                this.policeSkinName = "b";
                            } else {
                                this.policeSkinName = "a";
                            }
                        } else {
                            if (n + 1 == 11) {
                                this.setColorPersonImg(n, p, 2, this.goldSkinName),
                                    (this.goldSkinName = "a" == this.goldSkinName ? "b" : "a");
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
                            d >= 5 &&
                                this.setColorPersonImg(
                                    p.getComponent($level_249667_personItem.default).personColor,
                                    p,
                                    1
                                );
                        }
                        this.sortPersonNodes.push(p);
                        r += 1;
                    } else {
                        p = void 0;
                        (p = cc.instantiate(this.dict.personPrefab)).oldPosIndex = -1;
                        this.dict.personRoot.addChild(p);
                        p.position = this.dict.doorOutside.position;
                        p.getComponent($level_249667_personItem.default).personColor = n;
                        if (n + 1 == 10) {
                            this.setColorPersonImg(n, p, 2, this.policeSkinName),
                                (this.policeSkinName = "a" == this.policeSkinName ? "b" : "a");
                        } else {
                            if (n + 1 == 11) {
                                this.setColorPersonImg(n, p, 2, this.goldSkinName),
                                    (this.goldSkinName = "a" == this.goldSkinName ? "b" : "a");
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
        var o = function (e) {
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
                    var i = o.getComponent($level_29076_boxCarItem.default).carColor;
                    if (o && o.getComponent($level_29076_boxCarItem.default)) {
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
    e.prototype.checkPerson = function (t) {
        var e = this;
        if (void 0 === t) {
            t = !1;
        }
        if (t) {
            this.checkTipText();
        }
        if (!this.isCheck) {
            var o = this.sortPersonNodes[0].getComponent($level_249667_personItem.default).personColor;
            var i = null;
            var r = function (t) {
                var r = n.dict.parkingRoot.children[t];
                if (r.active && r.car) {
                    var a = r.car;
                    if (a.getComponent($level_29076_boxCarItem.default).carColor == o) {
                        for (
                            var s = function (t) {
                                    var r = a.getChildByName("seatRoot").children[t];
                                    if (!r.active && !r.targetPerson && ((r.targetPerson = !0), (i = r))) {
                                        n.isCheck = !0;
                                        var s = n.sortPersonNodes.shift();
                                        s.targetSeat = i;
                                        n.setColorPersonImg(o, s);
                                        n.createPerson();
                                        var c = n.sortPersonNodes.length;
                                        if (c >= n.uiShowPersonAmount) {
                                            c = n.uiShowPersonAmount;
                                        }
                                        for (
                                            var h = function (t) {
                                                    var o = n.sortPersonNodes[t];
                                                    o.zIndex = c - t;
                                                    o.getComponent($level_249667_personItem.default).isMoving = !0;
                                                    n.move(o.oldPosIndex, o, o.oldPosIndex + 1, function () {
                                                        o.getComponent($level_249667_personItem.default).isMoving = !1;
                                                        if (t == c - 1) {
                                                            e.scheduleOnce(function () {
                                                                e.isCheck = !1;
                                                                e.checkPerson();
                                                            }, 0.005);
                                                        }
                                                    });
                                                },
                                                p = 0;
                                            p < c;
                                            p++
                                        )
                                            h(p);
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
                                        cc.tween(s)
                                            .bezierTo(m, d, v, g)
                                            .call(function () {
                                                e.setColorPersonImg_seat(o, i, 3);
                                                if ($audioManager.Audio.getEffectMute()) {
                                                    //
                                                } else {
                                                    e.playRemoteSound("audio/f28749/f28749_Get_on");
                                                }
                                                i.active = !0;
                                                a.getComponent($level_29076_boxCarItem.default).emptySeatAmount -= 1;
                                                e.carAnim(i);
                                                s.destroy();
                                                e.checkCarGo();
                                            })
                                            .start();
                                        return {
                                            value: void 0
                                        };
                                    }
                                },
                                c = 0;
                            c < a.getChildByName("seatRoot").children.length;
                            c++
                        ) {
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
    e.prototype.checkCarGo = function () {
        var t = this;
        var e = function (e) {
            var i = o.dict.parkingRoot.children[e];
            if (i.car) {
                var r = i.car;
                if (!r.setInterval) {
                    for (var n = r.getChildByName("seatRoot"), a = 0, s = 0; s < n.children.length; s++)
                        if (n.children[s].active) {
                            a += 1;
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
                                if ($audioManager.Audio.getEffectMute()) {
                                    //
                                } else {
                                    t.playRemoteSound("audio/f28749/f28749_Full");
                                }
                                t.addStarSpine(i);
                                r.GoingOutParking_nPos = h;
                                r.getComponent($level_29076_boxCarItem.default).carState =
                                    $level_29076_config.CarState.GoingOutParking;
                                if (0 == e) {
                                    i.active = !1;
                                }
                                i.isEmpty = !0;
                                var o = Number(r.name[2]);
                                var n = r.getComponent($level_29076_boxCarItem.default).carColor;
                                r.getChildByName("car").active = !1;
                                r.getChildByName("sd").active = !1;
                                r.getChildByName("shadow").active = !1;
                                r.getChildByName("boxSpine").active = !0;
                                r.getChildByName("boxSpine").getComponent(sp.Skeleton).timeScale = 2;
                                r.getChildByName("boxSpine")
                                    .getComponent(sp.Skeleton)
                                    .setSkin("skin" + (n + 1));
                                r.getChildByName("boxSpine")
                                    .getComponent(sp.Skeleton)
                                    .setAnimation(0, "dabao" + o, !1);
                                r.getChildByName("boxSpine")
                                    .getComponent(sp.Skeleton)
                                    .setCompleteListener(function () {
                                        cc.tween(r)
                                            .to(
                                                (r.height / 2 / r.getComponent($level_29076_boxCarItem.default).speed) *
                                                    1.3,
                                                {
                                                    position: h
                                                }
                                            )
                                            .call(function () {
                                                t.checkRes();
                                                r.getComponent($level_29076_boxCarItem.default).carState =
                                                    $level_29076_config.CarState.OutParking;
                                                t.changeCar(
                                                    r,
                                                    1,
                                                    1,
                                                    "01" +
                                                        r.getComponent($level_29076_boxCarItem.default).lenImgName +
                                                        "-1"
                                                );
                                            })
                                            .start();
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
            if (
                i.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.OutParking &&
                i.position.sub(t).mag() < 400
            ) {
                return !0;
            }
            if (
                i.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.GoingOutParking
            ) {
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
                var t = $localStorageManager.default.get($localStorageConst.default.coin) || 0;
                t += this.allPersonAmount2;
                $localStorageManager.default.set($localStorageConst.default.coin, t);
                console.log("添加本地金币", t, this.allPersonAmount2);
            }
            this.isWin = !0;
            this.playRight();
        }
    };
    e.prototype.func_addResource = function () {
        var t = $localStorageManager.default.get($localStorageConst.default.BuildResource) || 0;
        t += this.carAllAmount;
        $localStorageManager.default.set($localStorageConst.default.BuildResource, t);
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
        cc.tween(e)
            .to(0.055, {
                position: this.dict.personPosRoot.children[t + 1].position
            })
            .call(function () {
                e.oldPosIndex = t + 1;
                if (t + 1 == 5) {
                    n.setColorPersonImg(e.getComponent($level_249667_personItem.default).personColor, e, 1);
                }
                if (t + 1 == o) {
                    if (i) {
                        i();
                    }
                } else {
                    n.move(t + 1, e, o);
                }
            })
            .start();
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
                var r = this.carNodeArr[i].getComponent($level_29076_boxCarItem.default);
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
            0 != this.currentPersonColorAmount[e] &&
                this.currentPersonColorAmount[e] >= this.colorPersonArr[e] &&
                (console.log($level_29076_config.colorDes[e] + "颜色已经满元"), (this.allWeight[e] = 0));
        }
        return this.randomByWeight(
            new Array($level_29076_config.colorDes.length).fill(1).map(function (t, e) {
                return e;
            }),
            this.allWeight
        );
    };
    e.prototype.updateSortWeight = function () {
        this.sortWeight = new Array(this.colorTypeAmount).fill(0);
        for (var t = 0; t < this.sortPersonNodes.length; t++) {
            var e = this.sortPersonNodes[t].getComponent($level_249667_personItem.default).personColor;
            this.sortWeight[e] += this.levelDataJSON.sortWeight;
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
                t.getComponent($level_29076_boxCarItem.default).path -
                e.getComponent($level_29076_boxCarItem.default).path
            );
        });
        this.carNodeArr.forEach(function (e, o) {
            e.getComponent($level_29076_boxCarItem.default).carID = o;
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
                n &&
                n != t &&
                n.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.Idle &&
                n.active &&
                !n.getComponent($level_29076_boxCarItem.default).isTransportCar &&
                !n.getComponent($level_29076_boxCarItem.default).isUTransportCar
            ) {
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
        if (s.collisionArr) {
            //
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
                if (
                    cc.Intersection.lineLine(e, o, m, f) ||
                    cc.Intersection.lineLine(e, o, v, y) ||
                    cc.Intersection.lineLine(i, r, m, f) ||
                    cc.Intersection.lineLine(i, r, v, y) ||
                    cc.Intersection.lineLine(e, o, C, _) ||
                    cc.Intersection.lineLine(i, r, C, _) ||
                    cc.Intersection.lineLine(n, a, C, _)
                ) {
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
            return (s.path = d), d;
        } else {
            return (s.path = 1), 1;
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
                i.getComponent($level_29076_boxCarItem.default).carState == $level_29076_config.CarState.Idle
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
            console.log("取权重不为0但最小的颜色");
            var o = 0;
            var i = e[0];
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                if ((n < i && 0 != n) || (0 == i && 0 != n)) {
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
        i.children[1].getComponent(cc.Label).string = $languageManager.default.formatStr(t);
        i.setPosition(cc.v2(0, -60));
        i.opacity = 0;
        cc.tween(i)
            .by(0.3, {
                position: cc.v3(0, 60),
                opacity: 255
            })
            .delay(e)
            .by(0.3, {
                position: cc.v3(0, 60),
                opacity: -255
            })
            .call(function () {
                i.destroy();
            })
            .start();
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
                            return (
                                (this.isSorting = !0),
                                (this.isSortAnim = !0),
                                (t = 1.5),
                                [4, $assetManager.default.getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)]
                            );
                        }
                    case 1:
                        e = r.sent();
                        o = cc.instantiate(e);
                        this.dict.tailGas.parent.addChild(o);
                        this.schedule(
                            function () {
                                for (var t = 0; t < i.sortPersonNodes.length; t++) {
                                    var e = i.sortPersonNodes[t];
                                    var o = i.randomNum(0, $level_29076_config.colorDes.length - 1);
                                    i.setColorPersonImg_sort(o, e);
                                }
                            },
                            0.2,
                            (t - 1) / 0.2 - 0.3
                        );
                        cc.tween(this.node)
                            .delay(t)
                            .call(function () {
                                i.isSortAnim = !1;
                                o.destroy();
                                i.isFail = !1;
                                i.consoleWeight("总权重", i.allWeight);
                                console.log(
                                    "排队颜色顺序",
                                    i.fetchMaxIndex(i.allWeight, $level_29076_config.colorDes.length)
                                );
                                var t = i.fetchMaxIndex(i.allWeight, $level_29076_config.colorDes.length);
                                var e = new Array($level_29076_config.colorDes.length).fill(0);
                                for (var r = 0; r < i.sortPersonNodes.length; r++) {
                                    e[
                                        (a = i.sortPersonNodes[r]).getComponent(
                                            $level_249667_personItem.default
                                        ).personColor
                                    ] += 1;
                                }
                                var n = 0;
                                for (r = 0; r < i.sortPersonNodes.length; r++) {
                                    var a = i.sortPersonNodes[r];
                                    for (
                                        var s = t[n];
                                        0 == e[s] &&
                                        ((s = t[(n += 1)]), !(n >= $level_29076_config.colorDes.length - 1));

                                    ) {}
                                    e[s] -= 1;
                                    a.getComponent($level_249667_personItem.default).personColor = s;
                                    i.setColorPersonImg_sort(s, a);
                                    console.log($level_29076_config.colorDes[s]);
                                }
                                i.checkPerson();
                                i.isSorting = !1;
                            })
                            .start();
                        return [2];
                }
            });
        });
    };
    e.prototype.remove = function () {
        console.log("start=====", JSON.parse(JSON.stringify(this.colorPersonAmountArr)));
        var t = [];
        for (var e = 0; e < this.sortPersonNodes.length; e++) {
            var o = (p = this.sortPersonNodes[e]).getComponent($level_249667_personItem.default).personColor;
            t.push(o);
        }
        console.log("消除", t);
        var i = this.dict.parkingRoot.children[0].car;
        var r = i.getComponent($level_29076_boxCarItem.default).carColor;
        var n = i.getComponent($level_29076_boxCarItem.default).emptySeatAmount;
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
                p.getComponent($level_249667_personItem.default).personColor = d;
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
                            return (
                                (this.isSorting = !0),
                                (this.isSortAnim = !0),
                                (t = 1.5),
                                [4, $assetManager.default.getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)]
                            );
                        }
                    case 1:
                        e = r.sent();
                        o = cc.instantiate(e);
                        this.dict.tailGas.parent.addChild(o);
                        this.schedule(
                            function () {
                                for (var t = 0; t < i.sortPersonNodes.length; t++) {
                                    var e = i.sortPersonNodes[t];
                                    var o = i.randomNum(0, $level_29076_config.colorDes.length - 1);
                                    i.setColorPersonImg_sort(o, e);
                                }
                            },
                            0.2,
                            (t - 1) / 0.2 - 0.3
                        );
                        cc.tween(this.node)
                            .delay(t)
                            .call(function () {
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
                                        var s = a.getComponent($level_29076_boxCarItem.default);
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
                                    var p = (g = i.sortPersonNodes[n]).getComponent(
                                        $level_249667_personItem.default
                                    ).personColor;
                                    if (r.includes(p)) {
                                        if (0 == (l = e[p])) {
                                            h.push(p);
                                        } else {
                                            (l -= 1), (e[p] = l);
                                        }
                                    } else {
                                        h.push(p);
                                    }
                                }
                                for (var d in ((r = r.concat(h)),
                                console.log("需要从后面减掉222", JSON.parse(JSON.stringify(e))),
                                console.log("start", JSON.parse(JSON.stringify(i.colorPersonAmountArr))),
                                e)) {
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
                                        g.getComponent($level_249667_personItem.default).personColor = p;
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
                            })
                            .start();
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
                            return (
                                (this.isSorting = !0),
                                (this.isSortAnim = !0),
                                (t = 1.5),
                                [4, $assetManager.default.getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)]
                            );
                        }
                    case 1:
                        e = r.sent();
                        o = cc.instantiate(e);
                        this.dict.tailGas.parent.addChild(o);
                        this.schedule(
                            function () {
                                for (var t = 0; t < i.sortPersonNodes.length; t++) {
                                    var e = i.sortPersonNodes[t];
                                    var o = i.randomNum(0, $level_29076_config.colorDes.length - 1);
                                    i.setColorPersonImg_sort(o, e);
                                }
                            },
                            0.2,
                            (t - 1) / 0.2 - 0.3
                        );
                        cc.tween(this.node)
                            .delay(t)
                            .call(function () {
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
                                        var s = a.getComponent($level_29076_boxCarItem.default);
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
                                    var p = (g = i.sortPersonNodes[n]).getComponent(
                                        $level_249667_personItem.default
                                    ).personColor;
                                    if (r.includes(p)) {
                                        if (0 == (l = e[p])) {
                                            h.push(p);
                                        } else {
                                            (l -= 1), (e[p] = l);
                                        }
                                    } else {
                                        h.push(p);
                                    }
                                }
                                for (var d in ((r = r.concat(h)),
                                console.log("需要从后面减掉222", JSON.parse(JSON.stringify(e))),
                                console.log("start", JSON.parse(JSON.stringify(i.colorPersonAmountArr))),
                                e)) {
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
                                        g.getComponent($level_249667_personItem.default).personColor = p;
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
                            })
                            .start();
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
                            return (
                                (this.isSorting = !0),
                                (this.isSortAnim = !0),
                                (e = 1.5),
                                [4, $assetManager.default.getRes("gameBundle", "prefab/item/StarPrefab", cc.Prefab)]
                            );
                        }
                    case 1:
                        o = n.sent();
                        i = cc.instantiate(o);
                        this.dict.tailGas.parent.addChild(i);
                        this.schedule(
                            function () {
                                for (var t = 0; t < r.sortPersonNodes.length; t++) {
                                    var e = r.sortPersonNodes[t];
                                    var o = r.randomNum(0, $level_29076_config.colorDes.length - 1);
                                    r.setColorPersonImg_sort(o, e);
                                }
                            },
                            0.2,
                            (e - 1) / 0.2 - 0.3
                        );
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
                                e.push(n.getComponent($level_29076_boxCarItem.default).carColor);
                                o.push(n.getComponent($level_29076_boxCarItem.default).emptySeatAmount);
                                for (var a = 0; a < r.parkingNodes.length; a++) {
                                    var s = (p = r.parkingNodes[a]).car;
                                    if (!p.isEmpty && s && e.length < 3) {
                                        e.push(s.getComponent($level_29076_boxCarItem.default).carColor);
                                        o.push(s.getComponent($level_29076_boxCarItem.default).emptySeatAmount);
                                    }
                                }
                            } else {
                                for (a = 0; a < r.parkingNodes.length; a++) {
                                    n = (p = r.parkingNodes[a]).car;
                                    !p.isEmpty &&
                                        n &&
                                        e.length < 4 &&
                                        (e.push(n.getComponent($level_29076_boxCarItem.default).carColor),
                                        o.push(n.getComponent($level_29076_boxCarItem.default).emptySeatAmount));
                                }
                            }
                            if (0 == e.length) {
                                var c = new Array(r.colorTypeAmount).fill(0);
                                for (a = 0; a < r.sortPersonNodes.length; a++) {
                                    c[
                                        (h = (p = r.sortPersonNodes[a]).getComponent(
                                            $level_249667_personItem.default
                                        ).personColor)
                                    ] += 1;
                                    r.currentPersonColorAmount[h] -= 1;
                                    !r.firstSortIndexArr.includes(h) &&
                                        r.firstSortIndexArr.length < 2 &&
                                        r.firstSortIndexArr.push(h);
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
                                        for (; g < u; ) {
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
                                    c[
                                        (h = (p = r.sortPersonNodes[a]).getComponent(
                                            $level_249667_personItem.default
                                        ).personColor)
                                    ] += 1;
                                    r.currentPersonColorAmount[h] -= 1;
                                    r.firstSortIndexArr.length < m + 1 && r.firstSortIndexArr.push(h);
                                }
                                if (t) {
                                } else if (r.firstSortIndexArr.length < m + 1) {
                                    for (a = 0; a < r.colorPersonArr.length; a++) {
                                        if (
                                            (v = r.colorPersonArr[a]) - r.currentPersonColorAmount[a] &&
                                            r.firstSortIndexArr.length < m + 1
                                        ) {
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
                                    if ((u = r.firstSortAmountArr[a])) {
                                        //
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
                                        for (; g < u; ) {
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
                                    c[
                                        (h = (p = r.sortPersonNodes[a]).getComponent(
                                            $level_249667_personItem.default
                                        ).personColor)
                                    ] += 1;
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
                                        for (; g < u; ) {
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
            if (
                !(l = e[o]).active ||
                l.getComponent($level_29076_boxCarItem.default).carState != $level_29076_config.CarState.Idle ||
                l.getComponent($level_29076_boxCarItem.default).isTransportCar ||
                l.getComponent($level_29076_boxCarItem.default).isUTransportCar ||
                l.getComponent($level_29076_boxCarItem.default).isBlackCar
            ) {
                //
            } else {
                t.push(l);
            }
        }
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                if (
                    r != a &&
                    r.getComponent($level_29076_boxCarItem.default).seatTotalAmount ==
                        a.getComponent($level_29076_boxCarItem.default).seatTotalAmount &&
                    r.getComponent($level_29076_boxCarItem.default).carColor !=
                        a.getComponent($level_29076_boxCarItem.default).carColor &&
                    !r.isExchange &&
                    !a.isExchange &&
                    1 == this.randomNum(0, 1)
                ) {
                    var s = r.getComponent($level_29076_boxCarItem.default).carColor;
                    var c = a.getComponent($level_29076_boxCarItem.default).carColor;
                    r.getComponent($level_29076_boxCarItem.default).carColor = c;
                    a.getComponent($level_29076_boxCarItem.default).carColor = s;
                    r.isExchange = !0;
                    a.isExchange = !0;
                    this.setCarColorImg(r, r.getComponent($level_29076_boxCarItem.default).carColor);
                    this.setCarColorImg(a, a.getComponent($level_29076_boxCarItem.default).carColor);
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
        t.children[1].getComponent(cc.Label).string =
            $languageManager.default.formatStr("可拎出任意一个盒子至VIP位置消除");
        t.y = 301.643;
        t.active = !0;
        this.isRemove = !0;
        cc.game.emit("isRemove", !0);
        for (var e = 0; e < this.carRoot.children.length; e++) {
            var o = this.carRoot.children[e];
            if (
                o.getComponent($level_29076_boxCarItem.default).prevCar ||
                o.getComponent($level_29076_boxCarItem.default).nextCar ||
                o.getChildByName("key") ||
                o.getChildByName("lock")
            ) {
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
        var n = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(
            cc.v2(0, -this.dict.parkingRoot.children[0].height / 2)
        );
        var a = this.dict.helicopterRoot.parent.convertToNodeSpaceAR(n);
        var s = i.sub(a).mag();
        this.dict.helicopterRoot.active = !0;
        this.dict.helicopterRoot.opacity = 255;
        cc.tween(this.dict.helicopterRoot)
            .to(r / 500, {
                position: i
            })
            .to(0.3, {
                scale: 0.9
            })
            .call(function () {
                var o = cc.instantiate(t);
                o.getChildByName("car").getComponent(cc.PolygonCollider).enabled = !1;
                o.getComponent($level_29076_boxCarItem.default).lenImgName = t.getComponent(
                    $level_29076_boxCarItem.default
                ).lenImgName;
                o.getComponent($level_29076_boxCarItem.default).colorImgName = t.getComponent(
                    $level_29076_boxCarItem.default
                ).colorImgName;
                o.getComponent($level_29076_boxCarItem.default).carColor = t.getComponent(
                    $level_29076_boxCarItem.default
                ).carColor;
                if (t.getComponent($level_29076_boxCarItem.default).isTransportCar) {
                    var i = e.transportCarArr.indexOf(t);
                    if (-1 !== i) {
                        e.transportCarArr.splice(i, 1);
                    }
                }
                t.destroy();
                e.dict.helicopterRoot.getChildByName("car").addChild(o);
                var r = t.convertToWorldSpaceAR(cc.v2(0, 0));
                o.position = e.dict.helicopterRoot.getChildByName("car").parent.convertToNodeSpaceAR(r);
            })
            .delay(0.3)
            .to(0.3, {
                scale: 1
            })
            .to(s / 500, {
                position: a
            })
            .to(0.3, {
                scale: 0.9
            })
            .call(function () {
                var t;
                var o = e.dict.helicopterRoot.getChildByName("car").children[0];
                var r = o.getComponent($level_29076_boxCarItem.default).colorImgName;
                var n = o.getComponent($level_29076_boxCarItem.default).lenImgName;
                (t = cc.instantiate(e.dict.carPrefab.getChildByName("06" + n))).parking =
                    e.dict.parkingRoot.children[0];
                t.getChildByName("car").getComponent(cc.PolygonCollider).enabled = !1;
                t.active = !1;
                e.carRoot.addChild(t);
                var a;
                var s = t.parking.convertToWorldSpaceAR(cc.v2(0, 0));
                i = t.parent.convertToNodeSpaceAR(s);
                t.position = cc.v2(i.x, i.y);
                var c = "" + r + 6 + n;
                a = "texture/" + e.folder + "/" + e.folder + "_" + c;
                t.getComponent($level_29076_boxCarItem.default).carColor = o.getComponent(
                    $level_29076_boxCarItem.default
                ).carColor;
                t.getComponent($level_29076_boxCarItem.default).colorImgName = o.getComponent(
                    $level_29076_boxCarItem.default
                ).colorImgName;
                t.getComponent($level_29076_boxCarItem.default).lenImgName = o.getComponent(
                    $level_29076_boxCarItem.default
                ).lenImgName;
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
                            if (
                                o.getComponent($level_29076_boxCarItem.default).prevCar ||
                                o.getComponent($level_29076_boxCarItem.default).nextCar ||
                                o.getChildByName("key") ||
                                o.getChildByName("lock")
                            ) {
                                o.opacity = 255;
                            }
                        }
                    }, 1);
                });
            })
            .start();
    };
    e.prototype.removeCar = function (t) {
        var e;
        var o = this;
        this.removePropUsing = !0;
        this.tipRemove.destroy();
        this.dict.parkingRoot.children[0].active = !0;
        if (1 == t.getComponent($level_29076_boxCarItem.default).lenImgName) {
            e = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(cc.v2(0, t.height / 2 + 5));
        } else {
            if (2 == t.getComponent($level_29076_boxCarItem.default).lenImgName) {
                e = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(cc.v2(0, t.height / 2));
            } else {
                e = this.dict.parkingRoot.children[0].convertToWorldSpaceAR(cc.v2(0, t.height / 2 + 2));
            }
        }
        var i = t.parent.convertToNodeSpaceAR(e);
        cc.tween(t)
            .to(0.3, {
                position: i
            })
            .call(function () {
                var e;
                var r = t.getComponent($level_29076_boxCarItem.default).lenImgName;
                (e = cc.instantiate(o.dict.carPrefab.getChildByName("06" + r))).parking =
                    o.dict.parkingRoot.children[0];
                e.getChildByName("car").getComponent(cc.PolygonCollider).enabled = !1;
                e.active = !1;
                o.carRoot.addChild(e);
                e.position = i;
                e.getComponent($level_29076_boxCarItem.default).carColor = t.getComponent(
                    $level_29076_boxCarItem.default
                ).carColor;
                e.getComponent($level_29076_boxCarItem.default).colorImgName = t.getComponent(
                    $level_29076_boxCarItem.default
                ).colorImgName;
                e.getComponent($level_29076_boxCarItem.default).lenImgName = t.getComponent(
                    $level_29076_boxCarItem.default
                ).lenImgName;
                e.parking.car = e;
                e.parking.isEmpty = !1;
                t.destroy();
                var n = e.getComponent($level_29076_boxCarItem.default).seatTotalAmount;
                var a = e.getComponent($level_29076_boxCarItem.default).carColor;
                e.getChildByName("car").getComponent(cc.Sprite).spriteFrame = game.boxAtlas.getSpriteFrame(
                    "f28749_" + (100 * $level_29076_config.ParkingImg[n] + a + 1)
                );
                e.active = !0;
                o.remove();
                o.scheduleOnce(function () {
                    o.isRemove = !1;
                    o.removePropUsing = !1;
                    o.isTransportCarMove = !0;
                    cc.game.emit("isRemove", !1);
                }, 1);
            })
            .start();
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
                sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
            });
            this.func_sortOld();
        } else {
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                id: 9,
                sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
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
})($brainLevelBase.default);
exports.default = L;
