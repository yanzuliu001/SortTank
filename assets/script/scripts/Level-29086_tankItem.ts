// @ts-nocheck

const $tankBoardConfig = require("./Level-29086_tankBoardConfig");
const $tankHitPolygons = require("./Level-29086_tankHitPolygons");

const { ccclass } = cc._decorator;

export enum TankWaitingState {
    Idle = 0,
    Moving = 1,
    Parked = 2,
    Complete = 3
}

@ccclass
export default class Level29086TankItem extends cc.Component {
    tankId: string = "";
    tankType: any = "";
    tankTypeKey: string = "";
    direction: number = 2;
    colorId: number = 0;
    capacity: number = 1;
    state: number = TankWaitingState.Idle;
    manager: any = null;
    typeConfig: any = null;
    visualNode: cc.Node = null;
    arrowNode: cc.Node = null;
    parking: cc.Node = null;
    ready: boolean = false;
    isShaking: boolean = false;
    visualScale: number = 1;
    private visualLoadToken: number = 0;
    private arrowLoadToken: number = 0;

    init(manager, config, typeConfig) {
        this.manager = manager;
        this.tankId = config.id;
        this.tankType = config.type;
        this.tankTypeKey = $tankBoardConfig.getTankTypeKey(config.type);
        this.direction = config.direction;
        this.typeConfig = typeConfig;
        this.colorId = typeConfig.colorId;
        this.capacity = typeConfig.capacity;
        this.state = TankWaitingState.Idle;
        this.visualScale = (manager && manager.config && manager.config.visualScale) || config.visualScale || 1;
        this.node.name = "tank_" + this.tankId;
        this.node.angle = 0;
        this.node.scaleX = 1;
        this.node.scaleY = 1;
        this.node.anchorX = 0.5;
        this.node.anchorY = 0.5;
        this.node.position = cc.v2(config.x, config.y);
        this.node._tankWaitingItem = this;

        this.visualNode = new cc.Node("tankVisual");
        this.visualNode.anchorX = 0.5;
        this.visualNode.anchorY = 0.5;
        this.visualNode.position = cc.v2(0, 0);
        this.visualNode.addComponent(cc.Sprite);
        this.node.addChild(this.visualNode);

        this.arrowNode = new cc.Node("dir");
        this.arrowNode.anchorX = 0.5;
        this.arrowNode.anchorY = 0.5;
        this.arrowNode.position = cc.v2(0, 0);
        this.arrowNode.addComponent(cc.Sprite);
        this.node.addChild(this.arrowNode);

        this.applyVisualScale();
        this.setDirection(this.direction);
    }

    applyVisualScale() {
        if (this.visualNode && cc.isValid(this.visualNode)) {
            this.visualNode.scaleX = this.visualScale;
            this.visualNode.scaleY = this.visualScale;
        }
        if (this.arrowNode && cc.isValid(this.arrowNode)) {
            this.arrowNode.scaleX = this.visualScale;
            this.arrowNode.scaleY = this.visualScale;
        }
    }

    getAssetName(direction?) {
        var dir = null == direction ? this.direction : direction;
        return this.typeConfig.assetPrefix + "_" + dir;
    }

    getAssetPath(direction?) {
        return "zqddn_zhb/texture/tank/" + this.getAssetName(direction);
    }

    setDirection(direction) {
        this.direction = ((Math.round(direction) % 8) + 8) % 8;
        this.loadArrow(this.direction);
        var token = ++this.visualLoadToken;
        var self = this;
        this.manager.loadSpriteFrame(this.getAssetPath(), function (spriteFrame) {
            if (!spriteFrame || token != self.visualLoadToken || !cc.isValid(self.node)) {
                return;
            }
            var sprite = self.visualNode.getComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame;
            if (cc.Sprite.SizeMode && void 0 !== cc.Sprite.SizeMode.RAW) {
                sprite.sizeMode = cc.Sprite.SizeMode.RAW;
            }
            var size = spriteFrame.getOriginalSize ? spriteFrame.getOriginalSize() : null;
            if (size) {
                self.node.width = size.width;
                self.node.height = size.height;
                self.visualNode.width = size.width;
                self.visualNode.height = size.height;
            }
            self.ready = true;
        });
    }

    loadArrow(direction) {
        var token = ++this.arrowLoadToken;
        var self = this;
        var path = "zqddn_zhb/texture/sorttank/tank_arrow_" + direction;
        this.manager.loadSpriteFrame(path, function (spriteFrame) {
            if (!spriteFrame || token != self.arrowLoadToken || !cc.isValid(self.arrowNode)) {
                return;
            }
            var sprite = self.arrowNode.getComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame;
            if (cc.Sprite.SizeMode && void 0 !== cc.Sprite.SizeMode.RAW) {
                sprite.sizeMode = cc.Sprite.SizeMode.RAW;
            }
            self.arrowNode.setSiblingIndex(self.node.childrenCount - 1);
        });
    }

    setArrowVisible(visible) {
        if (this.arrowNode && cc.isValid(this.arrowNode)) {
            this.arrowNode.active = visible;
        }
    }

    containsWorldPoint(worldPoint) {
        var localPoint = this.node.convertToNodeSpaceAR(worldPoint);
        var polygon = $tankHitPolygons.TankHitPolygonByAsset[this.getAssetName()];
        if (!polygon || polygon.length < 3) {
            polygon = this.getBodyLocalPolygon(this.direction);
        }
        return cc.Intersection.pointInPolygon(localPoint, polygon);
    }

    getBodyLocalPolygon(direction?) {
        var dir = null == direction ? this.direction : direction;
        var body = this.typeConfig.body;
        var halfWidth = body.width / 2;
        var halfLength = body.length / 2;
        var corner = Math.max(0, Math.min(body.corner || 0, halfWidth, halfLength));
        var points = [
            cc.v2(-halfWidth + corner, halfLength),
            cc.v2(halfWidth - corner, halfLength),
            cc.v2(halfWidth, halfLength - corner),
            cc.v2(halfWidth, -halfLength + corner),
            cc.v2(halfWidth - corner, -halfLength),
            cc.v2(-halfWidth + corner, -halfLength),
            cc.v2(-halfWidth, -halfLength + corner),
            cc.v2(-halfWidth, halfLength - corner)
        ];
        var angle = ($tankBoardConfig.TankDirectionAngle[dir] || 0) * (Math.PI / 180);
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        return points.map(function (point) {
            return cc.v2(point.x * cos - point.y * sin, point.x * sin + point.y * cos);
        });
    }

    getBodyPolygonAt(position?, direction?) {
        var pos = position || this.node.position;
        return this.getBodyLocalPolygon(direction).map(function (point) {
            return cc.v2(pos.x + point.x, pos.y + point.y);
        });
    }

    getTurnRadius() {
        var body = this.typeConfig.body;
        return Math.sqrt(body.width * body.width + body.length * body.length) / 2;
    }

    shake() {
        if (this.isShaking || !cc.isValid(this.node)) {
            return;
        }
        this.isShaking = true;
        var distance = this.manager.config.shakeDistance || 4;
        var duration = this.manager.config.shakeDuration || 0.05;
        var startX = this.node.x;
        var self = this;
        this.node.stopAllActions();
        cc.tween(this.node)
            .to(duration, { x: startX + distance })
            .to(duration, { x: startX - distance })
            .to(duration, { x: startX + distance })
            .to(duration, { x: startX })
            .call(function () {
                self.isShaking = false;
            })
            .start();
    }
}
