// @ts-nocheck

const $brainLevelBase = require("./BrainLevelBase");
const $level_29086_config = require("./Level-29086_config");
const $level_29086_tankLayoutConfig = require("./Level-29086_tankLayoutConfig");
const $level_29086_tankBoardConfig = require("./Level-29086_tankBoardConfig");
const $level_29086_tankBoard = require("./Level-29086_tankBoard");
const $level_29086_tankItem = require("./Level-29086_tankItem");
const $level_29086_tankPartShatter = require("./Level-29086_tankPartShatter");
const $eventManager = require("../../scripts/EventManager");
const $eventConst = require("../../scripts/EventConst");

const { ccclass, property } = cc._decorator;
const TANK_SKIN_SPRITE_DIR = $level_29086_config.TankSkinTextureDir;
const TANK_ASSEMBLY_TYPES = $level_29086_config.TankAssemblyTypes || [];
const TANK_ASSEMBLY_CONVEYOR_CONFIG = $level_29086_config.TankAssemblyConveyorConfig || {};
const TANK_ASSEMBLY_SPEED_ICON_DIR = "zqddn_zhb/texture/sorttank/tank_speed";
const TANK_PART_SHATTER_EFFECT_PATH = "zqddn_zhb/effect/tank-part-shatter";
const TANK_DEBUG_LAYER_SAMPLE_SCALE = 0.8;

function level29086SilentLog() {}

@ccclass
export default class Level29086Control extends $brainLevelBase.default {
    @property(cc.SpriteAtlas)
    box2SpriteAtlas: any = null;
    @property
    isDebug: any = false;
    @property
    boundary: any = 750;
    @property
    mapType: any = 1;

    carRoot: any = null;
    parkingNodes: any[] = [];
    carNodeArr: any[] = [];
    isCanStartClick: any = false;

    tankLayoutDebugEnabled: any = false;
    tankLayoutDebugTarget: any = null;
    tankLayoutDebugOffset: any = null;
    tankDebugLayerDragTarget: any = null;
    tankDebugLayerDragOffset: any = null;
    tankDebugLayerDragSource: any = null;
    tankDebugLayerConfigApplied: any = false;
    tankDebugLayerSamplesBuilt: any = false;

    tankSpriteFrameCache: any = {};
    tankSpriteFrameLoading: any = {};
    tankWaitingBoard: any = null;
    tankAssemblyPartLayer: any = null;
    tankAssemblyAbsorbLayer: any = null;
    tankAssemblyCountBoardRoot: any = null;
    tankAssemblyPathPoints: any[] = [];
    tankAssemblyPathDistances: any[] = [];
    tankAssemblyPathLength: any = 0;
    tankAssemblyParts: any[] = [];
    tankAssemblyChainItems: any[] = [];
    tankAssemblyActiveAbsorptionCount: any = 0;
    tankAssemblyFailed: any = false;
    tankAssemblyShatterMaterial: any = null;
    tankAssemblyShatterLoading: any = false;
    tankAssemblyPartMoveSpeed: any = "number" == typeof TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeed
        ? TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeed : 160;
    tankAssemblySpeedMultiplier: any = 1;
    tankAssemblyTypeByColor: any = {};
    tankAssemblyCounters: any = {};
    tankAssemblyEnded: any = false;
    tankAssemblyCompletedAmount: any = 0;
    tankAssemblyTotalCarAmount: any = 0;
    tankAssemblyCompletionPendingAmount: any = 0;
    tankAssemblyParkedAmount: any = 0;
    tankAssemblyAutoNextTriggered: any = false;
    tankAssemblyDebugLogged: any = {};

    onLoad() {
        $brainLevelBase.default.prototype.onLoad.call(this);
        this.carRoot = this.dict.carRoot || null;
        this.setTankAssemblyOkVisible(false);
        this.hideTankAssemblyGuide();
        this.hideTankAssemblyBottomButtons();
        if (this.dict.carPrefab) this.dict.carPrefab.active = false;
    }

    onLevelReady() {
        if (!this.isTankAssemblyLevel()) {
            cc.warn("Level29086Control only supports tank assembly levels:", this.levelID);
            return;
        }
        this.carRoot = this.dict.carRoot || this.carRoot;
        this.hideTankAssemblyGuide();
        this.hideTankAssemblyBottomButtons();
        this.initTankAssemblyParkingSlots();
        if (!this.initTankWaitingBoard()) {
            cc.error("Tank waiting board init failed:", this.levelID);
            return;
        }
        this.initTankAssemblyConveyor();
        this.onTouch();
        this.isCanStartClick = true;
    }

    onTouch() {
        this.bindTankLayoutDebugButtons();
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveTankLayoutDebug, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEndTankLayoutDebug, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndTankLayoutDebug, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveTankLayoutDebug, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndTankLayoutDebug, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndTankLayoutDebug, this);
    }

    touchStart(event) {
        if (!this.isCanStartClick || !event) return;
        if (this.isTankLayoutDebugControlTarget(event.target)) return;
        if (this.tankLayoutDebugEnabled) {
            this.handleTankLayoutDebugTouchStart(event);
            return;
        }
        if (this.tankWaitingBoard) this.tankWaitingBoard.handleTouchStart(event);
    }

    touchMoveTankLayoutDebug(event) {
        if (!this.tankLayoutDebugEnabled || !this.tankLayoutDebugTarget) return;
        var target = this.tankLayoutDebugTarget;
        if (!cc.isValid(target) || !target.parent) {
            this.tankLayoutDebugTarget = null;
            return;
        }
        var local = target.parent.convertToNodeSpaceAR(event.getLocation());
        target.position = local.add(this.tankLayoutDebugOffset || cc.v2());
    }

    touchEndTankLayoutDebug() {
        this.tankLayoutDebugTarget = null;
        this.tankLayoutDebugOffset = null;
    }

    update(dt) {
        if (this.isTankAssemblyLevel()) this.updateTankAssemblyConveyor(dt);
    }

    onLevelDisable() {
        this.clearTankAssemblyParts();
        if (!this.node) return;
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveTankLayoutDebug, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEndTankLayoutDebug, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndTankLayoutDebug, this);
    }

    findTankByWorldPoint(worldPoint) {
        if (!this.tankWaitingBoard || !this.tankWaitingBoard.findItemAt) return null;
        var item = this.tankWaitingBoard.findItemAt(worldPoint);
        return item && item.node ? item.node : null;
    }

    onTankDebugLayerSampleTouchEnd(event) {
        event && event.stopPropagation && event.stopPropagation();
        var target = this.tankDebugLayerDragTarget;
        if (target && cc.isValid(target) && target.parent) {
            var world = target.parent.convertToWorldSpaceAR(target.position);
            if (this.isWorldPointInsideTankWaitingBoard(world)) {
                var meta = this.getTankDebugLayerSampleMeta(this.tankDebugLayerDragSource || target);
                if (meta && this.tankWaitingBoard && this.tankWaitingBoard.addDebugItem) {
                    this.tankWaitingBoard.addDebugItem(
                        $level_29086_tankBoardConfig.getTankTypeValue(meta.type),
                        meta.direction,
                        world
                    );
                }
            }
            target.removeFromParent(false);
            target.destroy();
        }
        this.tankDebugLayerDragTarget = null;
        this.tankDebugLayerDragOffset = null;
        this.tankDebugLayerDragSource = null;
    }

    onTankLayoutResetButton(event) {
        event && event.stopPropagation && event.stopPropagation();
        if (this.tankDebugLayerDragTarget && cc.isValid(this.tankDebugLayerDragTarget)) {
            this.tankDebugLayerDragTarget.destroy();
        }
        this.tankDebugLayerDragTarget = null;
        this.tankDebugLayerDragOffset = null;
        this.tankDebugLayerDragSource = null;
        if (this.tankWaitingBoard && this.tankWaitingBoard.clearDebugItems) {
            this.tankWaitingBoard.clearDebugItems();
        }
    }

    finishTankAssemblyParking(tankNode, parking) {
        if (!parking || !cc.isValid(tankNode)) return;
        var data = this.getTankAssemblyCarData(tankNode);
        if (!data) {
            parking.isEmpty = true;
            parking.tankWaitingReservation = null;
            return;
        }
        parking.car = tankNode;
        parking.assemblyCar = tankNode;
        parking.isEmpty = false;
        parking.assemblyColor = data.carColor;
        parking.assemblyConfig = this.getTankAssemblyTypeByColor(data.carColor);
        parking.assemblyCapacity = data.seatTotalAmount;
        parking.assemblyCollected = 0;
        parking.assemblyIncoming = 0;
        parking.assemblyProgress = 0;
        parking.assemblyComplete = false;
        parking.assemblyCompleting = false;
        parking.assemblyActivePart = null;
        this.setTankAssemblyParkingTankVisual(parking, tankNode, data);
        this.setTankAssemblyParkingProgress(parking, 0);
        tankNode.stopAllActions();
        tankNode.active = false;
        this.checkTankAssemblyAutoNextWhenTopDisabled();
    }

    getTankAssemblyCarData(tankNode) {
        return this.tankWaitingBoard ? this.tankWaitingBoard.getItemData(tankNode) : null;
    }

    getTankAssemblyVisualAssetPrefixByData(tankNode, data) {
        return data && data.item && data.item.typeConfig ? data.item.typeConfig.assetPrefix : null;
    }

    applyTankDebugLayerSamplePose(node) {
        var meta = this.getTankDebugLayerSampleMeta(node);
        if (!meta) return;
        node.tankDebugType = meta.type;
        node.tankDebugDirection = meta.direction;
        node.angle = 0;
        node.scaleX = TANK_DEBUG_LAYER_SAMPLE_SCALE;
        node.scaleY = TANK_DEBUG_LAYER_SAMPLE_SCALE;
        var item = node.getComponent && node.getComponent($level_29086_tankItem.default);
        if (item) {
            item.setDirection(meta.direction);
            item.setArrowVisible(true);
        }
    }

    show(message, duration?) {
        duration = null == duration ? 0.8 : duration;
        if (!this.dict.tipPrefab || !this.dict.game) {
            cc.warn(message);
            return;
        }
        var tip = cc.instantiate(this.dict.tipPrefab);
        this.dict.game.addChild(tip);
        tip.active = true;
        tip.children[1].getComponent(cc.Label).string = message;
        tip.setPosition(cc.v2(0, -60));
        tip.opacity = 0;
        cc.tween(tip).by(0.3, { position: cc.v2(0, 60), opacity: 255 })
            .delay(duration).by(0.3, { position: cc.v2(0, 60), opacity: -255 })
            .call(function () { tip.destroy(); }).start();
    }

    shouldHideTankAssemblyBottomButtons() {
            return (
                $level_29086_config.TankAssemblyBottomButtonsHiddenLevelIds &&
                $level_29086_config.TankAssemblyBottomButtonsHiddenLevelIds[this.levelID]
            );
        }

    shouldHideTankAssemblyGuide() {
            return !!(
                $level_29086_config.TankAssemblyGuideDisabledLevelIds &&
                $level_29086_config.TankAssemblyGuideDisabledLevelIds[this.levelID]
            );
        }

    hideTankAssemblyGuide() {
            if (!this.shouldHideTankAssemblyGuide()) {
                return;
            }
            var names = ["guide", "hand", "handText", "handTextRoot"];
            for (var i = 0; i < names.length; i++) {
                var node = this.dict[names[i]] || this.findChildDeep(this.node, names[i]);
                if (node) {
                    node.stopAllActions();
                    node.active = false;
                }
            }
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

    isTankAssemblyLevel() {
            return (
                $level_29086_config.TankAssemblyLevelIds &&
                $level_29086_config.TankAssemblyLevelIds[this.levelID]
            );
        }

    isTankAssemblyTopEnabled() {
            return this.isTankAssemblyLevel() && false !== $level_29086_config.TankAssemblyTopEnabled;
        }

    getTankWaitingBoardConfig() {
            return $level_29086_tankBoardConfig.getTankWaitingBoardConfig(this.levelID);
        }

    getTankWaitingBoardRectNode() {
            return this.dict.rectNode || this.findChildDeep(this.node, "rectNode") || null;
        }

    getNodeBoundsInTarget(t, e) {
            if (!t || !e || !cc.isValid(t) || !cc.isValid(e) || t.width <= 0 || t.height <= 0) {
                return null;
            }
            var o = [
                cc.v2(-t.anchorX * t.width, -t.anchorY * t.height),
                cc.v2((1 - t.anchorX) * t.width, -t.anchorY * t.height),
                cc.v2((1 - t.anchorX) * t.width, (1 - t.anchorY) * t.height),
                cc.v2(-t.anchorX * t.width, (1 - t.anchorY) * t.height)
            ];
            var i = [];
            for (var r = 0; r < o.length; r++) {
                i.push(e.convertToNodeSpaceAR(t.convertToWorldSpaceAR(o[r])));
            }
            var n = i[0].x;
            var a = i[0].x;
            var s = i[0].y;
            var c = i[0].y;
            for (r = 1; r < i.length; r++) {
                n = Math.min(n, i[r].x);
                a = Math.max(a, i[r].x);
                s = Math.min(s, i[r].y);
                c = Math.max(c, i[r].y);
            }
            return {
                left: Number(n.toFixed(3)),
                right: Number(a.toFixed(3)),
                bottom: Number(s.toFixed(3)),
                top: Number(c.toFixed(3))
            };
        }

    buildTankWaitingBoardRuntimeConfig(t) {
            var e = JSON.parse(JSON.stringify(t));
            var o = this.getTankWaitingBoardRectNode();
            var i = o && this.carRoot ? this.getNodeBoundsInTarget(o, this.carRoot) : null;
            if (i) {
                e.board = i;
            }
            return e;
        }

    initTankWaitingBoard() {
            var t = this.getTankWaitingBoardConfig();
            if (!this.isTankAssemblyLevel() || !t || !this.carRoot) {
                return false;
            }
            t = this.buildTankWaitingBoardRuntimeConfig(t);
            this.tankWaitingBoard = new $level_29086_tankBoard.default();
            return this.tankWaitingBoard.init(this, this.carRoot, t);
        }

    getTankLayoutPrintButton() {
            return (
                this.dict.dyBtn ||
                this.dict.printPosBtn ||
                this.dict.printPositionBtn ||
                this.dict.printBtn ||
                this.dict.logPosBtn ||
                this.dict.logPositionBtn ||
                null
            );
        }

    getNodeLabelComponent(t) {
            if (!t) {
                return null;
            }
            if (t.getComponent && t.getComponent(cc.Label)) {
                return t.getComponent(cc.Label);
            }
            for (var e = 0; e < t.childrenCount; e++) {
                var o = this.getNodeLabelComponent(t.children[e]);
                if (o) {
                    return o;
                }
            }
            return null;
        }

    setButtonLabel(t, e) {
            var o = this.getNodeLabelComponent(t);
            if (o) {
                o.string = e;
            }
        }

    getTankLayoutCurrentLevelDisplayId() {
            var t = "" + this.levelID;
            return "-" == t.charAt(0) ? t.substring(1) : t;
        }

    getTankLayoutCurrentLevelNode() {
            return (
                this.dict.curLevel ||
                (this.dict.debugLayer && this.findChildDeep(this.dict.debugLayer, "curLevel")) ||
                null
            );
        }

    getTankLayoutLevelEditNode() {
            return (
                this.dict.levelEdit ||
                (this.dict.debugLayer && this.findChildDeep(this.dict.debugLayer, "levelEdit")) ||
                null
            );
        }

    getTankAssemblySpeedLabelNode() {
            return this.dict.speedLabel || this.findChildDeep(this.node, "speedLabel") || null;
        }

    getTankAssemblySpeedSliderNode() {
            return this.dict.speedSlider || this.findChildDeep(this.node, "speedSlider") || null;
        }

    getTankAssemblySpeedToggleNode() {
            return this.dict.tank_speed || this.findChildDeep(this.node, "tank_speed") || null;
        }

    getTankAssemblyPartSpeedRange() {
            var t = TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeedMin;
            var e = TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeedMax;
            t = "number" == typeof t ? t : 0;
            e = "number" == typeof e && e > t ? e : t + 1000;
            return { min: t, max: e };
        }

    getTankAssemblyPartMoveSpeed() {
            return "number" == typeof this.tankAssemblyPartMoveSpeed
                ? this.tankAssemblyPartMoveSpeed
                : "number" == typeof TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeed
                ? TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeed
                : 160;
        }

    setTankAssemblyPartMoveSpeed(t) {
            var e = this.getTankAssemblyPartSpeedRange();
            var o = Number(t);
            if (!isFinite(o)) {
                return;
            }
            this.tankAssemblyPartMoveSpeed = Math.round(Math.max(e.min, Math.min(e.max, o)));
            this.updateTankAssemblySpeedLabel();
        }

    updateTankAssemblySpeedSliderProgress() {
            var t = this.getTankAssemblySpeedSliderNode();
            var e = t && t.getComponent(cc.Slider);
            if (!e) {
                return;
            }
            var o = this.getTankAssemblyPartSpeedRange();
            var i = this.getTankAssemblyPartMoveSpeed();
            e.progress = Math.max(0, Math.min(1, (i - o.min) / (o.max - o.min)));
        }

    updateTankAssemblySpeedLabel() {
            var t = this.getTankAssemblySpeedLabelNode();
            var e = t && t.getComponent(cc.Label);
            if (e) {
                e.string = "移动速度：" + Math.round(this.getTankAssemblyPartMoveSpeed()) //+ " 像素/秒";
            }
        }

    onTankAssemblySpeedSlider(t) {
            var e = t && "number" == typeof t.progress ? t : null;
            if (!e) {
                var o = this.getTankAssemblySpeedSliderNode();
                e = o && o.getComponent(cc.Slider);
            }
            if (!e) {
                return;
            }
            var i = this.getTankAssemblyPartSpeedRange();
            this.setTankAssemblyPartMoveSpeed(i.min + (i.max - i.min) * e.progress);
        }

    bindTankAssemblySpeedControl() {
            var t = this.getTankAssemblySpeedSliderNode();
            var e = t && t.getComponent(cc.Slider);
            if (!t || !e) {
                return;
            }
            this.setTankAssemblySpeedControlVisible(true);
            this.updateTankAssemblySpeedSliderProgress();
            var r = cc.Slider.EventType && cc.Slider.EventType.SLIDE ? cc.Slider.EventType.SLIDE : "slide";
            t.off(r, this.onTankAssemblySpeedSlider, this);
            t.on(r, this.onTankAssemblySpeedSlider, this);
            this.updateTankAssemblySpeedLabel();
        }

    updateTankAssemblySpeedToggleSprite() {
            var t = this.getTankAssemblySpeedToggleNode();
            var e = t && t.getComponent(cc.Sprite);
            if (!e) {
                return;
            }
            var o = this.tankAssemblySpeedMultiplier;
            var i = TANK_ASSEMBLY_SPEED_ICON_DIR + (2 == o ? "2" : "1");
            var r = this;
            this.loadTankSpriteFrame(i, function (t) {
                if (t && cc.isValid(e.node) && o == r.tankAssemblySpeedMultiplier) {
                    e.spriteFrame = t;
                }
            });
        }

    setTankAssemblySpeedMultiplier(t) {
            this.tankAssemblySpeedMultiplier = 2 == t ? 2 : 1;
            var e = "number" == typeof TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeed
                ? TANK_ASSEMBLY_CONVEYOR_CONFIG.moveSpeed
                : 160;
            this.setTankAssemblyPartMoveSpeed(e * this.tankAssemblySpeedMultiplier);
            this.updateTankAssemblySpeedSliderProgress();
            this.updateTankAssemblySpeedToggleSprite();
        }

    onTankAssemblySpeedToggle(t) {
            t && t.stopPropagation && t.stopPropagation();
            this.setTankAssemblySpeedMultiplier(1 == this.tankAssemblySpeedMultiplier ? 2 : 1);
        }

    bindTankAssemblySpeedToggle() {
            var t = this.getTankAssemblySpeedToggleNode();
            if (!t) {
                return;
            }
            t.active = true;
            t.off(cc.Node.EventType.TOUCH_END, this.onTankAssemblySpeedToggle, this);
            t.on(cc.Node.EventType.TOUCH_END, this.onTankAssemblySpeedToggle, this);
            this.setTankAssemblySpeedMultiplier(1);
        }

    setTankAssemblySpeedControlVisible(t) {
            var e = this.getTankAssemblySpeedLabelNode();
            var o = this.getTankAssemblySpeedSliderNode();
            if (e) {
                e.active = !!t;
            }
            if (o) {
                o.active = !!t;
            }
        }

    hideTankAssemblyProductionSpeedControl() {
            var t = this.dict.scSlider;
            var r = cc.Slider.EventType && cc.Slider.EventType.SLIDE ? cc.Slider.EventType.SLIDE : "slide";
            if (t) {
                t.off(r);
                t.active = false;
            }
            if (this.dict.scLabel) {
                this.dict.scLabel.active = false;
            }
        }

    updateTankLayoutCurrentLevelText() {
            var t = this.getTankLayoutCurrentLevelNode();
            var e = t && t.getComponent(cc.Label);
            if (e) {
                e.string = "当前关卡：" + this.getTankLayoutCurrentLevelDisplayId();
            }
        }

    getTankLayoutPrintLevelId() {
            var t = this.getTankLayoutLevelEditNode();
            var e = t && t.getComponent(cc.EditBox);
            var o = e && null != e.string ? ("" + e.string).replace(/^\s+|\s+$/g, "") : "";
            return o || this.getTankLayoutCurrentLevelDisplayId();
        }

    getTankLayoutPrintConfigLevelId() {
            var t = this.getTankLayoutPrintLevelId();
            if ("-" == t.charAt(0)) {
                return t;
            }
            return "-" == ("" + this.levelID).charAt(0) ? "-" + t : t;
        }

    updateTankLayoutDebugButtonText() {
            if (this.dict.debugBtn) {
                this.setButtonLabel(this.dict.debugBtn, this.tankLayoutDebugEnabled ? "关闭调试" : "开启调试");
            }
        }

    setTankDebugLayerVisible(t) {
            var e = !!t;
            if (this.dict.debugLayer) {
                this.dict.debugLayer.active = e;
            }
            var o = this.getTankLayoutPrintButton();
            if (o) {
                o.active = e;
            }
            var i = this.getTankLayoutResetButton();
            if (i) {
                i.active = e;
            }
            if (this.tankWaitingBoard && this.tankWaitingBoard.setDebugAreaVisible) {
                this.tankWaitingBoard.setDebugAreaVisible(e);
            }
        }

    isWorldPointInsideTankWaitingBoard(t) {
            if (!this.tankWaitingBoard || !t) {
                return false;
            }
            if (this.tankWaitingBoard.isInsideWorldPosition) {
                return this.tankWaitingBoard.isInsideWorldPosition(t);
            }
            return false;
        }

    getTankDebugLayerGroups() {
            var t = this.dict.debugLayer;
            if (!t) {
                return [];
            }
            var e = ["node1", "node2", "node3", "node4"];
            var o = [];
            for (var i = 0; i < e.length; i++) {
                var r = t.getChildByName(e[i]);
                if (r) {
                    o.push(r);
                }
            }
            return o;
        }

    getTankDebugLayerGroupKeys() {
            return ["blue", "green", "purple", "yellow"];
        }

    getTankDebugLayerButtonNames() {
            return ["tank_blue_a_2", "tank_green_a_2", "tank_purple_a_2", "tank_yellow_a_2"];
        }

    getTankDebugLayerItemManager() {
            var t = this;
            var e = this.getTankWaitingBoardConfig ? this.getTankWaitingBoardConfig() || {} : {};
            e = JSON.parse(JSON.stringify(e));
            e.visualScale = 1;
            return {
                config: e,
                loadSpriteFrame: function (o, i) {
                    t.loadTankSpriteFrame(o, i);
                }
            };
        }

    createTankDebugLayerItemNode(t, e, o, i, r) {
            if (!t || !cc.isValid(t)) {
                return null;
            }
            var n = $level_29086_tankBoardConfig.TankTypeConfig[e];
            if (!n) {
                cc.error("Unknown tank debug type:", e);
                return null;
            }
            var a = new cc.Node("debug_" + e + "_" + o);
            t.addChild(a);
            var s = a.addComponent($level_29086_tankItem.default);
            s.init(
                this.getTankDebugLayerItemManager(),
                {
                    id: e + "_" + o + (r ? "_drag" : ""),
                    type: e,
                    direction: o,
                    x: i.x,
                    y: i.y
                },
                n
            );
            a.tankDebugType = e;
            a.tankDebugDirection = o;
            a.isTankDebugLayerSample = !r;
            a.isTankLayoutEditorClone = !!r;
            a.angle = 0;
            a.scaleX = TANK_DEBUG_LAYER_SAMPLE_SCALE;
            a.scaleY = TANK_DEBUG_LAYER_SAMPLE_SCALE;
            return a;
        }

    getTankDebugLayerSampleLayout(t, e, o) {
            var i = this.getTankDebugLayerLayoutConfig();
            var r = i && i[t] && i[t][e];
            if (r && "number" == typeof r.x && "number" == typeof r.y) {
                return cc.v2(r.x, r.y);
            }
            if (o && o.children && o.children[e]) {
                return cc.v2(o.children[e].x, o.children[e].y);
            }
            var n = [-210, -95, 30, 155, -210, -95, 30, 155];
            var a = [25, 25, 25, 25, -95, -95, -95, -95];
            return cc.v2(n[e] || 0, a[e] || 0);
        }

    rebuildTankDebugLayerSampleNodes() {
            if (!this.dict.debugLayer || this.tankDebugLayerSamplesBuilt) {
                return;
            }
            var t = this.getTankDebugLayerGroups();
            var e = this.getTankDebugLayerGroupKeys();
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                var n = e[i];
                var a = $level_29086_tankBoardConfig.TankTypeConfig[n];
                if (!r || !a) {
                    continue;
                }
                var s = r.children.slice();
                for (var l = 0; l < s.length; l++) {
                    s[l].removeFromParent(false);
                    s[l].destroy();
                }
                for (var h = 0; h < 8; h++) {
                    var p = this.getTankDebugLayerSampleLayout(n, h, r);
                    this.createTankDebugLayerItemNode(r, n, h, p, false);
                }
            }
            this.tankDebugLayerSamplesBuilt = true;
        }

    getTankDebugLayerSampleMeta(t) {
            if (!t) {
                return null;
            }
            if (t.tankDebugType && "number" == typeof t.tankDebugDirection) {
                return {
                    type: t.tankDebugType,
                    direction: t.tankDebugDirection
                };
            }
            var e = this.getTankDebugLayerGroups();
            var o = this.getTankDebugLayerGroupKeys();
            var i = -1;
            for (var r = 0; r < e.length; r++) {
                if (t.parent == e[r]) {
                    i = r;
                    break;
                }
            }
            if (i < 0 || !o[i]) {
                return null;
            }
            var n = 0;
            for (var a = 0; a < t.parent.childrenCount; a++) {
                var s = t.parent.children[a];
                if (s.isTankLayoutEditorClone) {
                    continue;
                }
                if (s == t) {
                    return {
                        type: o[i],
                        direction: n
                    };
                }
                n++;
            }
            return null;
        }

    getTankDebugLayerLayoutConfig() {
            var t = $level_29086_tankLayoutConfig.TankDebugLayerLayoutByLevel || {};
            return t[this.levelID] || t["" + this.levelID] || t;
        }

    applyTankDebugLayerLayoutConfig() {
            var t = this.getTankDebugLayerLayoutConfig();
            if (!this.dict.debugLayer || !t) {
                return;
            }
            if (Array.isArray(t)) {
                t = { blue: t };
            }
            var e = this.getTankDebugLayerGroups();
            var h = this.getTankDebugLayerGroupKeys();
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                var r = t[h[o]] || t[i.name];
                if (!r || !r.length) {
                    continue;
                }
                for (var n = 0; n < i.childrenCount && n < r.length; n++) {
                    var a = i.children[n];
                    var s = r[n];
                    if (!a || !s) {
                        continue;
                    }
                    if ("number" == typeof s.x && "number" == typeof s.y) {
                        a.position = cc.v2(s.x, s.y);
                    }
                    this.applyTankDebugLayerSamplePose(a);
                }
            }
        }

    showTankDebugLayerGroup(t) {
            var e = this.getTankDebugLayerGroups();
            for (var o = 0; o < e.length; o++) {
                e[o].active = o == t;
            }
            this.updateTankDebugLayerButtonState(t);
        }

    getActiveTankDebugLayerGroupIndex() {
            var t = this.getTankDebugLayerGroups();
            for (var e = 0; e < t.length; e++) {
                if (t[e].active) {
                    return e;
                }
            }
            return 0;
        }

    updateTankDebugLayerButtonState(t) {
            if (!this.dict.debugLayer) {
                return;
            }
            var e = this.getTankDebugLayerButtonNames();
            for (var i = 0; i < e.length; i++) {
                var r = this.dict.debugLayer.getChildByName(e[i]);
                if (!r) {
                    continue;
                }
                if (null == r.tankDebugBaseScaleX) {
                    r.tankDebugBaseScaleX = r.scaleX || 1;
                    r.tankDebugBaseScaleY = r.scaleY || 1;
                }
                var n = i == t;
                r.opacity = n ? 150 : 255;
                r.color = n ? cc.color(130, 130, 130) : cc.color(255, 255, 255);
                r.scaleX = r.tankDebugBaseScaleX;
                r.scaleY = r.tankDebugBaseScaleY;
                var a = r.getChildByName("tankDebugSelectedFrame");
                if (a) {
                    a.active = false;
                }
            }
        }

    getTankLayoutResetButton() {
            return this.dict.resetBtn || this.findChildDeep(this.node, "resetBtn") || null;
        }

    bindTankDebugLayerButtons() {
            if (!this.isTankAssemblyLevel() || !this.dict.debugLayer) {
                return;
            }
            this.rebuildTankDebugLayerSampleNodes();
            if (!this.tankDebugLayerConfigApplied) {
                this.applyTankDebugLayerLayoutConfig();
                this.tankDebugLayerConfigApplied = true;
            }
            var t = this.dict.debugLayer;
            var e = this.getTankDebugLayerButtonNames();
            for (var o = 0; o < e.length; o++) {
                var i = t.getChildByName(e[o]);
                if (!i) {
                    continue;
                }
                i.active = true;
                i.tankDebugGroupIndex = o;
                i.off(cc.Node.EventType.TOUCH_END, this.onTankDebugLayerButton, this);
                i.on(cc.Node.EventType.TOUCH_END, this.onTankDebugLayerButton, this);
            }
            var r = this.getTankDebugLayerGroups();
            var n = false;
            for (var a = 0; a < r.length; a++) {
                n = n || r[a].active;
            }
            if (!n && r.length) {
                this.showTankDebugLayerGroup(0);
            } else {
                this.updateTankDebugLayerButtonState(this.getActiveTankDebugLayerGroupIndex());
            }
            this.bindTankDebugLayerSampleNodes();
        }

    onTankDebugLayerButton(t) {
            t && t.stopPropagation && t.stopPropagation();
            var e = t && t.target;
            if (!e || "number" != typeof e.tankDebugGroupIndex) {
                return;
            }
            this.showTankDebugLayerGroup(e.tankDebugGroupIndex);
        }

    bindTankDebugLayerSampleNodes() {
            var t = this.getTankDebugLayerGroups();
            for (var e = 0; e < t.length; e++) {
                for (var o = 0; o < t[e].childrenCount; o++) {
                    var i = t[e].children[o];
                    i.off(cc.Node.EventType.TOUCH_START, this.onTankDebugLayerSampleTouchStart, this);
                    i.off(cc.Node.EventType.TOUCH_MOVE, this.onTankDebugLayerSampleTouchMove, this);
                    i.off(cc.Node.EventType.TOUCH_END, this.onTankDebugLayerSampleTouchEnd, this);
                    i.off(cc.Node.EventType.TOUCH_CANCEL, this.onTankDebugLayerSampleTouchEnd, this);
                    i.on(cc.Node.EventType.TOUCH_START, this.onTankDebugLayerSampleTouchStart, this);
                    i.on(cc.Node.EventType.TOUCH_MOVE, this.onTankDebugLayerSampleTouchMove, this);
                    i.on(cc.Node.EventType.TOUCH_END, this.onTankDebugLayerSampleTouchEnd, this);
                    i.on(cc.Node.EventType.TOUCH_CANCEL, this.onTankDebugLayerSampleTouchEnd, this);
                    this.applyTankDebugLayerSamplePose(i);
                }
            }
        }

    onTankDebugLayerSampleTouchStart(t) {
            t && t.stopPropagation && t.stopPropagation();
            if (!this.tankLayoutDebugEnabled || !this.dict.debugLayer || !this.dict.debugLayer.active) {
                return;
            }
            var e = t.currentTarget || t.target;
            if (!e || !e.parent) {
                return;
            }
            if (this.tankDebugLayerDragTarget && cc.isValid(this.tankDebugLayerDragTarget)) {
                this.tankDebugLayerDragTarget.destroy();
            }
            var r = this.getTankDebugLayerSampleMeta(e);
            if (!r) {
                return;
            }
            var i = e.parent.convertToNodeSpaceAR(t.getLocation());
            var o = this.createTankDebugLayerItemNode(e.parent, r.type, r.direction, e.position, true);
            if (!o) {
                return;
            }
            o.name = e.name;
            o.active = true;
            o.opacity = 255;
            o.color = cc.color(255, 255, 255);
            this.applyTankDebugLayerSamplePose(o);
            o.setSiblingIndex(o.parent.childrenCount - 1);
            this.tankDebugLayerDragSource = e;
            this.tankDebugLayerDragTarget = o;
            this.tankDebugLayerDragOffset = cc.v2(o.x - i.x, o.y - i.y);
        }

    onTankDebugLayerSampleTouchMove(t) {
            t && t.stopPropagation && t.stopPropagation();
            var e = this.tankDebugLayerDragTarget;
            if (!this.tankLayoutDebugEnabled || !e || !cc.isValid(e) || !e.parent) {
                return;
            }
            var o = e.parent.convertToNodeSpaceAR(t.getLocation());
            e.position = o.add(this.tankDebugLayerDragOffset || cc.v2());
        }

    bindTankLayoutDebugButtons() {
            if (!this.isTankAssemblyLevel()) {
                return;
            }
            this.updateTankLayoutCurrentLevelText();
            this.bindTankAssemblySpeedControl();
            this.bindTankAssemblySpeedToggle();
            this.hideTankAssemblyProductionSpeedControl();
            this.bindTankDebugLayerButtons();
            this.setTankDebugLayerVisible(this.tankLayoutDebugEnabled);
            var t = this.dict.debugBtn;
            if (t) {
                t.active = true;
                t.off(cc.Node.EventType.TOUCH_END, this.onTankLayoutDebugButton, this);
                t.on(cc.Node.EventType.TOUCH_END, this.onTankLayoutDebugButton, this);
                this.updateTankLayoutDebugButtonText();
            }
            var e = this.getTankLayoutPrintButton();
            if (e) {
                e.active = this.tankLayoutDebugEnabled;
                e.off(cc.Node.EventType.TOUCH_END, this.onTankLayoutPrintButton, this);
                e.on(cc.Node.EventType.TOUCH_END, this.onTankLayoutPrintButton, this);
            }
            var o = this.getTankLayoutResetButton();
            if (o) {
                o.active = this.tankLayoutDebugEnabled;
                o.off(cc.Node.EventType.TOUCH_END, this.onTankLayoutResetButton, this);
                o.on(cc.Node.EventType.TOUCH_END, this.onTankLayoutResetButton, this);
            }
        }

    onTankLayoutDebugButton(t) {
            t && t.stopPropagation && t.stopPropagation();
            this.tankLayoutDebugEnabled = !this.tankLayoutDebugEnabled;
            this.tankLayoutDebugTarget = null;
            this.tankLayoutDebugOffset = null;
            this.tankDebugLayerDragTarget = null;
            this.tankDebugLayerDragOffset = null;
            this.setTankDebugLayerVisible(this.tankLayoutDebugEnabled);
            this.updateTankLayoutCurrentLevelText();
            this.updateTankLayoutDebugButtonText();
            level29086SilentLog("[TankLayoutDebug]", this.tankLayoutDebugEnabled ? "open" : "close");
        }

    onTankLayoutPrintButton(t) {
            t && t.stopPropagation && t.stopPropagation();
            this.printTankWaitingBoardConfig();
        }

    isNodeOrChildOf(t, e) {
            while (t) {
                if (t == e) {
                    return true;
                }
                t = t.parent;
            }
            return false;
        }

    isTankLayoutDebugControlTarget(t) {
            if (!this.isTankAssemblyLevel() || !t) {
                return false;
            }
            return (
                this.isNodeOrChildOf(t, this.dict.debugBtn) ||
                this.isNodeOrChildOf(t, this.getTankLayoutPrintButton()) ||
                this.isNodeOrChildOf(t, this.getTankLayoutResetButton()) ||
                this.isNodeOrChildOf(t, this.getTankAssemblySpeedSliderNode()) ||
                this.isNodeOrChildOf(t, this.getTankAssemblySpeedToggleNode()) ||
                this.isNodeOrChildOf(t, this.dict.debugLayer)
            );
        }

    printTankWaitingBoardConfig() {
            if (!this.tankWaitingBoard || !this.tankWaitingBoard.getConfigSnapshot) {
                return;
            }
            var t = this.tankWaitingBoard.getConfigSnapshot();
            var configLevelId = this.getTankLayoutPrintConfigLevelId();
            var e = t
                .map(function (t) {
                    return (
                        '            { id: "' +
                        t.id +
                        '", type: ' +
                        t.type +
                        ", direction: " +
                        t.direction +
                        ", x: " +
                        t.x +
                        ", y: " +
                        t.y +
                        " },"
                    );
                })
                .join("\n");
            console.log(
                '    "' + configLevelId + '": {\n' +
                "        tanks: [\n" +
                e +
                "\n        ]\n" +
                "    },"
            );
        }

    handleTankLayoutDebugTouchStart(t) {
            if (!this.isTankAssemblyLevel() || !this.tankLayoutDebugEnabled) {
                return false;
            }
            var e = t.getLocation();
            var o = this.findTankByWorldPoint(e);
            this.tankLayoutDebugTarget = o;
            this.tankLayoutDebugOffset = null;
            if (o && o.parent) {
                var i = o.parent.convertToNodeSpaceAR(e);
                this.tankLayoutDebugOffset = cc.v2(o.x - i.x, o.y - i.y);
                level29086SilentLog("[TankLayoutDebugSelect]", {
                    indexID: o.indexID,
                    name: o.name,
                    x: Number(o.x.toFixed(3)),
                    y: Number(o.y.toFixed(3)),
                    angle: Number((o.angle || 0).toFixed(3))
                });
            }
            return true;
        }

    setTankAssemblyTopVisible(t) {
            var e = this.findTankAssemblyNode("assemblyTopRoot");
            if (e) {
                e.active = t;
            }
        }

    setTankAssemblyOkVisible(t) {
            var e = this.dict.okPrefab || this.findChildDeep(this.node, "okPrefab");
            if (e) {
                e.active = !!t;
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
            level29086SilentLog("顶部关闭演示流程：全部坦克已停入，自动进入下一关", e, "/", t);
            var r = this;
            this.scheduleOnce(function () {
                if (cc.isValid(r.node)) {
                    $eventManager.Event.emit($eventConst.default.CLICK_NEXT);
                }
            }, $level_29086_config.TankAssemblyAutoNextDelay || 0.35);
        }

    getRouteRoadWorldPosition() {
            return this.dict.road.parent.convertToWorldSpaceAR(this.dict.road.position);
        }

    getRouteRoadLocalPosition(t) {
            return t.convertToNodeSpaceAR(this.getRouteRoadWorldPosition());
        }

    getParkingEntryWorldPosition(t) {
            var e = this.isTankAssemblyLevel() && t.getChildByName("tankStop");
            if (e) {
                return e.convertToWorldSpaceAR(cc.v2(0, 0));
            }
            return t.convertToWorldSpaceAR(cc.v2(0, -168.549));
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
                e.assemblyIncoming = 0;
                e.assemblyProgress = 0;
                e.assemblyComplete = false;
                e.assemblyCompleting = false;
                e.assemblyActivePart = null;
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

    preloadTankAssemblyShatterEffect() {
            if (
                false === TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterEnabled ||
                this.tankAssemblyShatterMaterial ||
                this.tankAssemblyShatterLoading
            ) {
                return;
            }
            this.tankAssemblyShatterLoading = true;
            var t = this;
            cc.resources.load(TANK_PART_SHATTER_EFFECT_PATH, cc.EffectAsset, function (e, o) {
                t.tankAssemblyShatterLoading = false;
                if (e || !o || !t.node || !cc.isValid(t.node)) {
                    cc.warn && cc.warn("load tank part shatter effect failed:", e || TANK_PART_SHATTER_EFFECT_PATH);
                    return;
                }
                try {
                    var i = cc.Material.create(o, 0);
                    i.define("USE_TEXTURE", true);
                    i.define("CC_USE_MODEL", true);
                    t.tankAssemblyShatterMaterial = i;
                } catch (r) {
                    cc.warn && cc.warn("create tank part shatter material failed:", r);
                }
            });
        }

    initTankAssemblyConveyor() {
            this.setTankAssemblyOkVisible(false);
            this.setTankAssemblyTopVisible(this.isTankAssemblyTopEnabled());
            this.tankAssemblyPartLayer = this.findTankAssemblyNode("partLayer");
            this.tankAssemblyAbsorbLayer = this.findTankAssemblyNode("absorbEffectLayer") || this.tankAssemblyPartLayer;
            this.tankAssemblyCountBoardRoot = this.findTankAssemblyNode("countBoardRoot");
            if (this.tankAssemblyPartLayer) {
                this.tankAssemblyPartLayer.active = true;
            }
            if (this.tankAssemblyAbsorbLayer) {
                this.tankAssemblyAbsorbLayer.active = true;
            }
            this.tankAssemblyParts = [];
            this.tankAssemblyChainItems = [];
            this.tankAssemblyPathDistances = [];
            this.tankAssemblyPathLength = 0;
            this.tankAssemblyActiveAbsorptionCount = 0;
            this.tankAssemblyFailed = false;
            this.tankAssemblyTypeByColor = {};
            this.tankAssemblyCounters = {};
            this.tankAssemblyEnded = false;
            this.tankAssemblyCompletedAmount = 0;
            this.tankAssemblyCompletionPendingAmount = 0;
            this.tankAssemblyTotalCarAmount = this.carNodeArr.length;
            if (!this.isTankAssemblyTopEnabled()) {
                this.clearTankAssemblyParts();
                return;
            }
            this.preloadTankAssemblyShatterEffect();
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
            this.createTankAssemblyPartChain();
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
            this.tankAssemblyPathDistances = [];
            this.tankAssemblyPathLength = 0;
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
                    this.buildTankAssemblyPathDistances();
                    return;
                }
                this.tankAssemblyPathPoints = [];
            }
            cc.error("Tank assembly conveyor path is invalid", {
                hasConveyorPathRoot: !!t,
                conveyorChildren: t && t.childrenCount
            });
        }

    buildTankAssemblyPathDistances() {
            this.tankAssemblyPathDistances = [0];
            this.tankAssemblyPathLength = 0;
            for (var t = 1; t < this.tankAssemblyPathPoints.length; t++) {
                var e = this.tankAssemblyPathPoints[t - 1];
                var o = this.tankAssemblyPathPoints[t];
                this.tankAssemblyPathLength += cc.v2(o.x - e.x, o.y - e.y).mag();
                this.tankAssemblyPathDistances.push(this.tankAssemblyPathLength);
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
                level29086SilentLog("[TankAssembly]", e, o);
            } else {
                level29086SilentLog("[TankAssembly]", e);
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
            // 调试布局期间冻结传送带状态；关闭面板后从原位置和原计时继续。
            if (this.tankLayoutDebugEnabled) {
                return;
            }
            if (this.tankAssemblyEnded || !this.tankAssemblyPartLayer) {
                this.logTankAssemblyDebug("updateBlocked", "传送带 update 被跳过：状态未就绪", {
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
            this.moveTankAssemblyPartChain(Math.max(0, Number(t) || 0));
            this.planTankAssemblyChainAbsorptions();
            this.checkTankAssemblyChainEndFailure();
        }

    getTankAssemblyChainColorIds() {
            var t = [];
            var e = TANK_ASSEMBLY_CONVEYOR_CONFIG.chainRunCycle || [];
            var o = Math.max(1, Math.floor(Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.chainRepeat) || 1));
            for (var i = 0; i < o; i++) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    var a = Math.max(0, Math.floor(Number(n && n.count) || 0));
                    for (var c = 0; c < a; c++) {
                        t.push(Number(n.colorId));
                    }
                }
            }
            return t;
        }

    validateTankAssemblyChainColors(t) {
            var e = {};
            for (var o = 0; o < t.length; o++) {
                e[t[o]] = (e[t[o]] || 0) + 1;
            }
            var i = {};
            for (var r = 0; r < this.carNodeArr.length; r++) {
                var n = this.getTankAssemblyCarData(this.carNodeArr[r]);
                if (n) {
                    i[n.carColor] = (i[n.carColor] || 0) + Math.max(1, Number(n.seatTotalAmount) || 1);
                }
            }
            var a = [];
            for (var c = 0; c < TANK_ASSEMBLY_TYPES.length; c++) {
                var l = TANK_ASSEMBLY_TYPES[c].colorId;
                if ((e[l] || 0) != (i[l] || 0)) {
                    a.push("colorId " + l + ": chain=" + (e[l] || 0) + ", demand=" + (i[l] || 0));
                }
            }
            if (a.length) {
                cc.error("Tank assembly chain color count mismatch", a);
                return false;
            }
            return true;
        }

    createTankAssemblyPartChain() {
            if (!this.tankAssemblyPartLayer || this.tankAssemblyPathPoints.length < 2) {
                return;
            }
            var t = this.getTankAssemblyChainColorIds();
            this.validateTankAssemblyChainColors(t);
            var e = Math.max(1, Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.chainSpacing) || 42);
            for (var o = 0; o < t.length; o++) {
                var i = this.getTankAssemblyTypeByColor(t[o]);
                if (!i) {
                    cc.error("Unknown tank assembly chain colorId:", t[o]);
                    continue;
                }
                this.createTankAssemblyChainItem(i, o, -o * e);
            }
            this.logTankAssemblyDebug("chainCreated", "创建零件长龙", {
                amount: this.tankAssemblyChainItems.length,
                spacing: e,
                pathLength: this.tankAssemblyPathLength
            });
        }

    createTankAssemblyChainItem(t, e, o) {
            var i = new cc.Node("tankAssemblyChainPart_" + e + "_" + t.colorId);
            i.parent = this.tankAssemblyPartLayer;
            i.angle = 0;
            i.scale = TANK_ASSEMBLY_CONVEYOR_CONFIG.partScale || 1;
            i.active = false;
            var r = i.addComponent(cc.Sprite);
            var n = {
                node: i,
                config: t,
                chainIndex: e,
                chainDistance: o,
                retreatRemaining: 0,
                chainRetreatQueued: false,
                isChainPart: true,
                absorbing: false,
                absorbCompleted: false,
                spriteReady: false
            };
            this.tankAssemblyParts.push(n);
            this.tankAssemblyChainItems.push(n);
            this.updateTankAssemblyChainItemVisual(n);
            var a = TANK_SKIN_SPRITE_DIR + t.partSprite;
            var c = this;
            this.loadTankSpriteFrame(a, function (t) {
                if (t && cc.isValid(i)) {
                    r.spriteFrame = t;
                    n.spriteReady = true;
                    c.updateTankAssemblyChainItemVisual(n);
                } else {
                    cc.warn && cc.warn("load tank chain part sprite failed:", a);
                }
            });
        }

    getTankAssemblyPathPosition(t) {
            if (!this.tankAssemblyPathPoints.length) {
                return null;
            }
            if (t <= 0) {
                return this.tankAssemblyPathPoints[0];
            }
            if (t >= this.tankAssemblyPathLength) {
                return this.tankAssemblyPathPoints[this.tankAssemblyPathPoints.length - 1];
            }
            for (var e = 1; e < this.tankAssemblyPathDistances.length; e++) {
                if (t <= this.tankAssemblyPathDistances[e]) {
                    var o = this.tankAssemblyPathDistances[e - 1];
                    var i = this.tankAssemblyPathDistances[e] - o;
                    var r = i > 0 ? (t - o) / i : 0;
                    var n = this.tankAssemblyPathPoints[e - 1];
                    var a = this.tankAssemblyPathPoints[e];
                    return cc.v2(n.x + (a.x - n.x) * r, n.y + (a.y - n.y) * r);
                }
            }
            return this.tankAssemblyPathPoints[this.tankAssemblyPathPoints.length - 1];
        }

    updateTankAssemblyChainItemVisual(t) {
            if (!t || !t.node || !cc.isValid(t.node) || t.absorbing) {
                return;
            }
            t.node.active = t.chainDistance >= 0;
            t.node.angle = 0;
            if (!t.node.active) {
                return;
            }
            var e = this.getTankAssemblyPathPosition(t.chainDistance);
            if (e) {
                t.node.position = cc.v2(e.x, e.y);
            }
        }

    moveTankAssemblyPartChain(t) {
            for (var e = this.tankAssemblyChainItems.length - 1; e >= 0; e--) {
                var o = this.tankAssemblyChainItems[e];
                if (!o || !o.node || !cc.isValid(o.node)) {
                    this.tankAssemblyChainItems.splice(e, 1);
                    var i = this.tankAssemblyParts.indexOf(o);
                    if (i >= 0) {
                        this.tankAssemblyParts.splice(i, 1);
                    }
                }
            }
            if (!this.tankAssemblyChainItems.length) {
                return;
            }
            var r = this.getTankAssemblyPartMoveSpeed();
            var n = Math.max(1, Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.retreatSpeedMultiplier) || 4);
            for (e = 0; e < this.tankAssemblyChainItems.length; e++) {
                o = this.tankAssemblyChainItems[e];
                if (o.retreatRemaining > 0) {
                    var a = Math.min(o.retreatRemaining, r * n * t);
                    o.chainDistance -= a;
                    o.retreatRemaining -= a;
                }
            }
            var c = this.tankAssemblyChainItems[0];
            var l = Math.max(0, this.tankAssemblyPathLength - c.chainDistance);
            var h = Math.min(l, r * t);
            for (e = 0; e < this.tankAssemblyChainItems.length; e++) {
                o = this.tankAssemblyChainItems[e];
                o.chainDistance += h;
                this.updateTankAssemblyChainItemVisual(o);
            }
        }

    planTankAssemblyChainAbsorptions() {
            var t = Math.max(1, Math.floor(Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.perParkingConcurrency) || 1));
            for (var e = 0; e < this.parkingNodes.length; e++) {
                var o = this.parkingNodes[e];
                if (!this.canTankAssemblyParkingAbsorb(o, t)) {
                    continue;
                }
                var i = this.findTankAssemblyChainItemForParking(o);
                if (i) {
                    this.absorbTankAssemblyPart(i, o);
                }
            }
        }

    canTankAssemblyParkingAbsorb(t, e) {
            return !!(
                t &&
                t.active &&
                !t.isEmpty &&
                t.assemblyConfig &&
                !t.assemblyComplete &&
                !t.assemblyCompleting &&
                (Number(t.assemblyIncoming) || 0) < e &&
                (Number(t.assemblyCollected) || 0) + (Number(t.assemblyIncoming) || 0) <
                    Math.max(1, Number(t.assemblyCapacity) || 1)
            );
        }

    findTankAssemblyChainItemForParking(t) {
            for (var e = 0; e < this.tankAssemblyChainItems.length; e++) {
                var o = this.tankAssemblyChainItems[e];
                if (
                    o &&
                    !o.absorbing &&
                    o.spriteReady &&
                    o.chainDistance >= 0 &&
                    o.chainDistance <= this.tankAssemblyPathLength &&
                    o.config &&
                    o.config.colorId == t.assemblyConfig.colorId
                ) {
                    return o;
                }
            }
            return null;
        }

    detachTankAssemblyChainItem(t, e) {
            var o = this.tankAssemblyChainItems.indexOf(t);
            if (o < 0) {
                return false;
            }
            t.chainRetreatTargets = this.tankAssemblyChainItems.slice(0, o);
            this.tankAssemblyChainItems.splice(o, 1);
            t.chainAbsorptionActive = true;
            this.tankAssemblyActiveAbsorptionCount += 1;
            e.assemblyActivePart = t;
            this.queueTankAssemblyChainRetreat(t);
            return true;
        }

    queueTankAssemblyChainRetreat(t) {
            if (!t || t.chainRetreatQueued) {
                return;
            }
            t.chainRetreatQueued = true;
            var e = Math.max(1, Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.chainSpacing) || 42);
            var o = t.chainRetreatTargets || [];
            for (var i = 0; i < o.length; i++) {
                var r = o[i];
                if (this.tankAssemblyChainItems.indexOf(r) >= 0 && !r.absorbing) {
                    r.retreatRemaining = Math.max(0, Number(r.retreatRemaining) || 0) + e;
                }
            }
        }

    checkTankAssemblyChainEndFailure() {
            if (
                this.tankAssemblyEnded ||
                this.tankAssemblyActiveAbsorptionCount > 0 ||
                !this.tankAssemblyChainItems.length
            ) {
                return;
            }
            var t = this.tankAssemblyChainItems[0];
            var e = Math.max(0, Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.endTolerance) || 0.5);
            if (t.chainDistance < this.tankAssemblyPathLength - e) {
                return;
            }
            this.tankAssemblyFailed = true;
            this.tankAssemblyEnded = true;
            this.isCanStartClick = false;
            this.show("零件到达终点", 2);
            var o = {
                reason: "pathEnd",
                isFail: true,
                remainingPartAmount: this.tankAssemblyChainItems.length
            };
            level29086SilentLog("坦克装配阶段失败", o);
            cc.game.emit("tankAssemblyStageEnd", o);
        }

    absorbTankAssemblyPart(t, e) {
            if (!t || !t.node || !cc.isValid(t.node)) {
                return;
            }
            if (!this.reserveTankAssemblyPartCapacity(t, e)) {
                return;
            }
            if (t.isChainPart && !this.detachTankAssemblyChainItem(t, e)) {
                this.releaseTankAssemblyPartCapacity(t);
                return;
            }
            t.absorbing = true;
            var o = t.node.parent.convertToWorldSpaceAR(t.node.position);
            t.node.parent = this.tankAssemblyAbsorbLayer || t.node.parent;
            t.node.position = t.node.parent.convertToNodeSpaceAR(o);
            var i = e.getChildByName("tankStop") || e;
            var r = i.convertToWorldSpaceAR(cc.v2(0, 0));
            if (this.playTankAssemblyMiniPartFlight(t, e, r)) {
                return;
            }
            // Shader 碎裂飞行暂时停用，保留实现方便后续对比切换。
            // if (this.playTankAssemblyPartShatter(t, e, r)) {
            //     return;
            // }
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
                    a.completeTankAssemblyPartAbsorption(t, e);
                })
                .start();
        }

    playTankAssemblyMiniPartFlight(t, e, targetWorldPosition) {
            if (false === TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartEnabled) {
                return false;
            }
            var sourceSprite = t.node.getComponent(cc.Sprite);
            var spriteFrame = sourceSprite && sourceSprite.spriteFrame;
            var parent = t.node.parent;
            if (!sourceSprite || !spriteFrame || !parent || !cc.isValid(parent)) {
                return false;
            }

            var count = Math.max(1, Math.floor(TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartCount || 20));
            var miniScale = Math.max(0.05, Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartScale) || 0.8);
            var trailHalfWidth = Math.max(
                0,
                Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartTrailHalfWidth) || 16
            );
            var emitInterval = Math.max(
                0,
                Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartEmitInterval) || 0.018
            );
            var flySpeed = Math.max(1, Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartFlySpeed) || 450);
            var minFlyDuration = Math.max(
                0.01,
                Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartMinFlyDuration) || 0.35
            );
            var arrivalScale = Math.max(
                0.01,
                Number(TANK_ASSEMBLY_CONVEYOR_CONFIG.miniPartArrivalScale) || 0.5
            );
            var sourcePosition = cc.v2(t.node.x, t.node.y);
            var targetPosition = parent.convertToNodeSpaceAR(targetWorldPosition);
            var routeVector = cc.v2(
                targetPosition.x - sourcePosition.x,
                targetPosition.y - sourcePosition.y
            );
            var routeLength = routeVector.mag();
            var routeDirection = routeLength > 0.001
                ? cc.v2(routeVector.x / routeLength, routeVector.y / routeLength)
                : cc.v2(0, 1);
            var routeNormal = cc.v2(-routeDirection.y, routeDirection.x);
            var sourceScaleX = t.node.scaleX;
            var sourceScaleY = t.node.scaleY;
            var sourceOpacity = t.node.opacity;
            var completed = 0;
            var owner = this;
            t.miniPartNodes = [];

            var completeOne = function (node) {
                var index = t.miniPartNodes.indexOf(node);
                if (index >= 0) {
                    t.miniPartNodes.splice(index, 1);
                }
                if (node && cc.isValid(node)) {
                    node.opacity = 0;
                    node.destroy();
                }
                completed += 1;
                if (completed < count || t.absorbCompleted) {
                    return;
                }
                owner.completeTankAssemblyPartAbsorption(t, e);
            };

            try {
                for (var index = 0; index < count; index++) {
                    var node = new cc.Node("tankMiniPart_" + index);
                    node.parent = parent;
                    node.position = sourcePosition;
                    node.anchorX = t.node.anchorX;
                    node.anchorY = t.node.anchorY;
                    node.width = t.node.width;
                    node.height = t.node.height;
                    node.angle = t.node.angle || 0;
                    node.opacity = 0;
                    node.color = t.node.color;
                    node.scaleX = sourceScaleX * miniScale;
                    node.scaleY = sourceScaleY * miniScale;
                    var sprite = node.addComponent(cc.Sprite);
                    sprite.spriteFrame = spriteFrame;
                    if (cc.Sprite.SizeMode && void 0 !== cc.Sprite.SizeMode.CUSTOM) {
                        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                    }

                    var sideDistance = (Math.random() * 2 - 1) * trailHalfWidth;
                    var startPosition = cc.v2(
                        sourcePosition.x + routeNormal.x * sideDistance,
                        sourcePosition.y + routeNormal.y * sideDistance
                    );
                    node.position = startPosition;
                    var flyDistance = startPosition.sub(targetPosition).mag();
                    var flyDuration = Math.max(minFlyDuration, flyDistance / flySpeed);
                    var endScaleX = node.scaleX * arrivalScale;
                    var endScaleY = node.scaleY * arrivalScale;
                    var endAngle = node.angle + (Math.random() * 24 - 12);
                    var startDelay = index * emitInterval;
                    t.miniPartNodes.push(node);

                    (function (miniNode, delay, duration, scaleX, scaleY, angle) {
                        cc.tween(miniNode)
                            .delay(delay)
                            .call(function () {
                                if (cc.isValid(miniNode)) {
                                    miniNode.opacity = sourceOpacity;
                                }
                            })
                            .to(duration, {
                                position: targetPosition,
                                scaleX: scaleX,
                                scaleY: scaleY,
                                angle: angle
                            })
                            .call(function () {
                                completeOne(miniNode);
                            })
                            .start();
                    })(node, startDelay, flyDuration, endScaleX, endScaleY, endAngle);
                }
            } catch (error) {
                for (var cleanupIndex = t.miniPartNodes.length - 1; cleanupIndex >= 0; cleanupIndex--) {
                    var createdNode = t.miniPartNodes[cleanupIndex];
                    if (createdNode && cc.isValid(createdNode)) {
                        createdNode.stopAllActions();
                        createdNode.destroy();
                    }
                }
                t.miniPartNodes.length = 0;
                cc.warn && cc.warn("create tank mini part effect failed, use tween fallback:", error);
                return false;
            }

            t.node.opacity = 0;
            return true;
        }

    playTankAssemblyPartShatter(t, e, o) {
            if (
                false === TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterEnabled ||
                !this.tankAssemblyShatterMaterial ||
                !$level_29086_tankPartShatter.default
            ) {
                return false;
            }
            var i = t.node.getComponent(cc.Sprite);
            var r = i && i.spriteFrame;
            if (!i || !r) {
                return false;
            }
            var n = null;
            try {
                n = new cc.Node("tankPartShatter");
                n.parent = t.node;
                n.position = cc.v2(0, 0);
                n.angle = 0;
                n.scale = 1;
                var a = n.addComponent($level_29086_tankPartShatter.default);
                var c = n.convertToNodeSpaceAR(o);
                var l = this;
                var h = a.init(
                    r,
                    this.tankAssemblyShatterMaterial,
                    c,
                    {
                        columns: null == TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterColumns
                            ? 2
                            : TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterColumns,
                        rows: null == TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterRows
                            ? 2
                            : TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterRows,
                        curveSpread: null == TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterCurveSpread
                            ? 36
                            : TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterCurveSpread,
                        rotation: null == TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterRotation
                            ? 270
                            : TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterRotation,
                        duration: TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbDuration || 0.25,
                        shrinkStart: TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbShrinkDelayRatio,
                        endScale: TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbEndScale,
                        fadeStart: 0.9
                    },
                    function () {
                        if (t.absorbCompleted) {
                            return;
                        }
                        if (TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterDebugLog) {
                            //组装完成打印
                            // cc.log("[TankPartShatter] complete", {
                            //     colorId: t.config && t.config.colorId,
                            //     duration: TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbDuration
                            // });
                        }
                        l.completeTankAssemblyPartAbsorption(t, e);
                    }
                );
                if (!h) {
                    n.destroy();
                    return false;
                }
            } catch (p) {
                if (n && cc.isValid(n)) {
                    n.destroy();
                }
                i.enabled = true;
                cc.warn && cc.warn("play tank part shatter failed, use tween fallback:", p);
                return false;
            }
            i.enabled = false;
            t.shatterNode = n;
            if (TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterDebugLog) {
                // cc.log("[TankPartShatter] start", {
                //     colorId: t.config && t.config.colorId,
                //     duration: TANK_ASSEMBLY_CONVEYOR_CONFIG.absorbDuration,
                //     pieces: 2 *
                //         (TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterColumns || 2) *
                //         (TANK_ASSEMBLY_CONVEYOR_CONFIG.shatterRows || 2)
                // });
            }
            return true;
        }

    completeTankAssemblyPartAbsorption(t, e) {
            if (!t || t.absorbCompleted) {
                return;
            }
            t.absorbCompleted = true;
            if (t.chainAbsorptionActive) {
                t.chainAbsorptionActive = false;
                this.tankAssemblyActiveAbsorptionCount = Math.max(
                    0,
                    this.tankAssemblyActiveAbsorptionCount - 1
                );
                if (e && e.assemblyActivePart == t) {
                    e.assemblyActivePart = null;
                }
                t.chainRetreatTargets = [];
            }
            this.releaseTankAssemblyPartCapacity(t);
            if (!this.tankAssemblyEnded) {
                this.applyTankAssemblyPartToParking(e);
            }
            this.removeTankAssemblyPart(t);
        }

    reserveTankAssemblyPartCapacity(t, e) {
            if (!t || !e || t.assemblyReservationActive || e.isEmpty || e.assemblyComplete || e.assemblyCompleting) {
                return false;
            }
            var o = Math.max(1, Number(e.assemblyCapacity) || 1);
            var i = Math.max(0, Number(e.assemblyCollected) || 0);
            var r = Math.max(0, Number(e.assemblyIncoming) || 0);
            if (i + r >= o) {
                return false;
            }
            e.assemblyIncoming = r + 1;
            t.assemblyParking = e;
            t.assemblyReservationActive = true;
            return true;
        }

    releaseTankAssemblyPartCapacity(t) {
            if (!t || !t.assemblyReservationActive) {
                return;
            }
            var e = t.assemblyParking;
            if (e) {
                e.assemblyIncoming = Math.max(0, (Number(e.assemblyIncoming) || 0) - 1);
            }
            t.assemblyReservationActive = false;
            t.assemblyParking = null;
        }

    applyTankAssemblyPartToParking(t) {
            if (this.tankAssemblyEnded || !t || t.isEmpty || t.assemblyComplete) {
                return;
            }
            t.assemblyCollected += 1;
            var e = Math.max(1, t.assemblyCapacity || 1);
            this.setTankAssemblyParkingProgress(
                t,
                this.calculateTankAssemblyParkingProgress(t.assemblyCollected, e)
            );
            if (t.assemblyCollected >= e) {
                this.completeTankAssemblyParking(t);
            }
        }

    calculateTankAssemblyParkingProgress(t, e) {
            var o = Math.max(0, Number(t) || 0);
            var i = Math.max(1, Number(e) || 1);
            return Math.max(0, Math.min(100, Math.round((o / i) * 100)));
        }

    completeTankAssemblyParking(t) {
            if (!t || t.assemblyComplete) {
                return;
            }
            t.assemblyComplete = true;
            t.assemblyCompleting = true;
            this.tankAssemblyCompletionPendingAmount += 1;
            var e = t.getChildByName("progressRoot");
            if (e) {
                e.active = false;
            }
            this.playTankAssemblyParkingExit(t);
        }

    finishTankAssemblyParkingExit(t) {
            if (!t || !t.assemblyCompleting) {
                return;
            }
            t.assemblyCompleting = false;
            this.tankAssemblyCompletionPendingAmount = Math.max(
                0,
                this.tankAssemblyCompletionPendingAmount - 1
            );
            this.tankAssemblyCompletedAmount += 1;
            this.refreshTankAssemblyCounter(t.assemblyColor);
            this.resetTankAssemblyParking(t);
            if (
                this.tankAssemblyTotalCarAmount > 0 &&
                this.tankAssemblyCompletedAmount >= this.tankAssemblyTotalCarAmount
            ) {
                this.finishTankAssemblyStage();
            }
        }

    playTankAssemblyParkingExit(t) {
            var e = t && t.getChildByName("tankStop");
            if (!t || !e || !cc.isValid(e)) {
                this.finishTankAssemblyParkingExit(t);
                return;
            }
            var o = this.getTankAssemblyParkingRowIndex(t);
            var i = e.parent.convertToWorldSpaceAR(e.position);
            var r = i.y;
            var n = this.getTankAssemblyRoadNode(0 == o ? "toproad" : "road");
            if (n && n.parent) {
                var a = n.parent.convertToWorldSpaceAR(n.position).y;
                var s = (e.height || 0) * Math.abs(e.scaleY || 1) / 2;
                var c = TANK_ASSEMBLY_CONVEYOR_CONFIG.assemblyExitTopRoadOffset;
                c = "number" == typeof c ? c : 8;
                r = 0 == o ? Math.max(r, a + c) : Math.min(r, a - s);
            }
            var l = e.parent.convertToNodeSpaceAR(cc.v2(i.x, r));
            var h = this.node.convertToWorldSpaceAR(
                cc.v2((this.node.width || cc.winSize.width) / 2 + 180, 0)
            ).x;
            var p = e.parent.convertToNodeSpaceAR(cc.v2(h, r));
            var d = this;
            e.stopAllActions();
            cc.tween(e)
                .to(TANK_ASSEMBLY_CONVEYOR_CONFIG.assemblyExitVerticalDuration || 0.35, {
                    position: l
                })
                .call(function () {
                    d.setTankAssemblyParkingExitRightVisual(t);
                })
                .to(TANK_ASSEMBLY_CONVEYOR_CONFIG.assemblyExitHorizontalDuration || 0.7, {
                    position: p
                })
                .call(function () {
                    d.finishTankAssemblyParkingExit(t);
                })
                .start();
        }

    setTankAssemblyParkingExitRightVisual(t) {
            var e = t && t.getChildByName("tankStop");
            var o = e && e.getComponent(cc.Sprite);
            var i = this.getTankAssemblyVisualAssetPrefixByData(t.assemblyCar, {
                carColor: t.assemblyColor,
                item: t.assemblyCar && t.assemblyCar._tankWaitingItem
            });
            if (!e || !o || !i) {
                return;
            }
            this.loadTankSpriteFrame(TANK_SKIN_SPRITE_DIR + i + "_5", function (t) {
                if (!t || !cc.isValid(e)) {
                    return;
                }
                o.spriteFrame = t;
                if (cc.Sprite.SizeMode && void 0 !== cc.Sprite.SizeMode.CUSTOM) {
                    o.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                }
                var i = t.getOriginalSize ? t.getOriginalSize() : t.getRect && t.getRect();
                if (i && i.width && i.height) {
                    e.width = i.width;
                    e.height = i.height;
                }
            });
        }

    refreshTankAssemblyCounter(t) {
            var e = this.tankAssemblyCounters[t];
            if (!e) {
                return;
            }
            e.amount += 1;
            var o = e.countNode && e.countNode.getComponent(cc.Label);
            if (o) {
                o.string = "x" + e.amount;
            }
        }

    resetTankAssemblyParking(t) {
            var e = t && t.assemblyCar;
            if (this.tankWaitingBoard && e) {
                this.tankWaitingBoard.onAssemblyComplete(e);
            }
            var o = t.getChildByName("tankStop");
            var i = t.getChildByName("progressRoot");
            if (o) {
                o.active = false;
                o.stopAllActions();
                o.position = cc.v2(0, 0);
            }
            if (i) {
                i.active = false;
            }
            t.car = null;
            t.assemblyCar = null;
            t.assemblyColor = null;
            t.assemblyConfig = null;
            t.assemblyCapacity = 0;
            t.assemblyCollected = 0;
            t.assemblyIncoming = 0;
            t.assemblyProgress = 0;
            t.assemblyComplete = false;
            t.assemblyCompleting = false;
            t.assemblyActivePart = null;
            t.isEmpty = true;
        }

    removeTankAssemblyPart(t) {
            var parking = t && t.assemblyParking;
            if (t && t.chainAbsorptionActive) {
                t.chainAbsorptionActive = false;
                this.tankAssemblyActiveAbsorptionCount = Math.max(
                    0,
                    this.tankAssemblyActiveAbsorptionCount - 1
                );
            }
            if (parking && parking.assemblyActivePart == t) {
                parking.assemblyActivePart = null;
            }
            this.releaseTankAssemblyPartCapacity(t);
            if (t && t.miniPartNodes) {
                for (var i = t.miniPartNodes.length - 1; i >= 0; i--) {
                    var miniPart = t.miniPartNodes[i];
                    if (miniPart && cc.isValid(miniPart)) {
                        miniPart.stopAllActions();
                        miniPart.destroy();
                    }
                }
                t.miniPartNodes.length = 0;
            }
            var e = this.tankAssemblyParts.indexOf(t);
            if (e >= 0) {
                this.tankAssemblyParts.splice(e, 1);
            }
            var chainIndex = this.tankAssemblyChainItems.indexOf(t);
            if (chainIndex >= 0) {
                this.tankAssemblyChainItems.splice(chainIndex, 1);
            }
            if (t && t.node && cc.isValid(t.node)) {
                t.node.stopAllActions();
                t.node.destroy();
            }
        }

    clearTankAssemblyParts() {
            for (var t = this.tankAssemblyParts.length - 1; t >= 0; t--) {
                this.removeTankAssemblyPart(this.tankAssemblyParts[t]);
            }
            this.tankAssemblyChainItems = [];
            this.tankAssemblyActiveAbsorptionCount = 0;
        }

    finishTankAssemblyStage() {
            if (this.tankAssemblyEnded) {
                return;
            }
            this.tankAssemblyEnded = true;
            this.clearTankAssemblyParts();
            this.setTankAssemblyOkVisible(true);
            var e = {
                reason: "allComplete",
                completedAmount: this.tankAssemblyCompletedAmount,
                totalAmount: this.tankAssemblyTotalCarAmount,
                guaranteedWin: true
            };
            level29086SilentLog("坦克组装阶段结束", e);
            cc.game.emit("tankAssemblyStageEnd", e);
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

    getTankAssemblyRoadNode(t) {
            if (t) {
                return this.dict[t] || this.findChildDeep(this.node, t) || null;
            }
            return this.dict.road || this.findChildDeep(this.node, "road") || null;
        }

    getTankAssemblyParkingRowIndex(t) {
            if (!t || !t.parent) {
                return 0;
            }
            var e = t.parent.children || [];
            var o = e.indexOf(t);
            if (o < 0) {
                return 0;
            }
            return o >= Math.ceil(e.length / 2) ? 1 : 0;
        }

    getTankAssemblyParkingDirection(t) {
            return this.getTankAssemblyParkingRowIndex(t) == 0 ? 2 : 7;
        }

    setTankAssemblyParkingTankVisual(t, e, o) {
            var i = t && t.getChildByName("tankStop");
            var r = i && i.getComponent(cc.Sprite);
            var n = this.getTankAssemblyVisualAssetPrefixByData(e, o);
            if (!i || !r || !n) {
                return;
            }
            i.active = true;
            var a = this.getTankAssemblyParkingDirection(t);
            var s = TANK_SKIN_SPRITE_DIR + n + "_" + a;
            this.loadTankSpriteFrame(s, function (t) {
                if (!t || !cc.isValid(i)) {
                    return;
                }
                r.spriteFrame = t;
                if (cc.Sprite.SizeMode && void 0 !== cc.Sprite.SizeMode.CUSTOM) {
                    r.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                }
                var e = t.getOriginalSize ? t.getOriginalSize() : t.getRect && t.getRect();
                if (e && e.width && e.height) {
                    i.width = e.width;
                    i.height = e.height;
                }
            });
        }

    setTankAssemblyParkingProgress(t, e) {
            var o = this.getTankAssemblyProgressStage(e);
            if (!o) {
                return;
            }
            var i = Math.max(0, Math.min(100, Math.round(e || 0)));
            t.assemblyProgress = i;
            var r = t.getChildByName("tankStop");
            if (r) {
                r.active = true;
            }
            var n = t.getChildByName("progressRoot");
            if (n) {
                n.active = true;
                var a = n.getComponent(cc.Label);
                if (a) {
                    a.string = i + "%";
                }
            }
        }

    randomNum(t, e, o) {
            var i = e - t;
            var r = o || Math.random();
            return t + Math.round(r * i);
        }
}
