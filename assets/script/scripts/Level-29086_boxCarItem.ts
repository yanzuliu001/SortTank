// @ts-nocheck

const AudioManager = require("../../scripts/AudioManager");
const Level249667Chain = require("./Level-249667_chain");
const Level249667UTransport = require("./Level-249667_uTransport");
const Level29086Config = require("./Level-29086_config");

const { ccclass, property } = cc._decorator;

@ccclass
export default class Level29086BoxCarItem extends cc.Component {
    @property
    seatTotalAmount: number = 4;

    @property([cc.Node])
    railCarTurn: cc.Node[] = [];

    carColor: number | null = null;
    carID: number | null = null;
    path: number = 0;
    emptySeatAmount: number = 0;
    dir: number = 0;
    colorImgName: number | null = null;
    dirImgName: number | null = null;
    lenImgName: number | null = null;
    mgr: any = null;

    isTransportCar: boolean = false;
    isBlackCar: boolean = false;
    isTurntableCar: boolean = false;
    turntablePosIndex: number = -1;
    prevCar: cc.Node | null = null;
    nextCar: cc.Node | null = null;
    leftObliqueCar: boolean = false;
    rightObliqueCar: boolean = false;
    isUTransportCar: boolean = false;
    isUTransportCar_noIn: boolean = false;
    isFireEngine: boolean = false;
    isPoliceCar: boolean = false;
    isRichCar: boolean = false;
    isTramcar: boolean = false;
    tramcarPosIndex: number = 0;
    otherCarNode: cc.Node[] = [];

    minLen: number = 10;
    oldPos: cc.Vec2 | cc.Vec3 | null = null;
    floatPos: cc.Vec2 | cc.Vec3 | null = null;
    carState: number = Level29086Config.CarState.Idle;
    speed: number = 750;
    isCanClick: boolean = true;
    isCollision: boolean = false;
    isReadyDestroy: boolean = false;

    onLoad() {
        this.emptySeatAmount = this.seatTotalAmount;
        this.oldPos = this.node.position;

        if ("1" == this.node.name[0] && "2" == this.node.name[1]) {
            this.isFireEngine = true;
        }
        if ("1" == this.node.name[0] && "0" == this.node.name[1]) {
            this.isPoliceCar = true;
        }
        if ("1" == this.node.name[0] && "1" == this.node.name[1]) {
            this.isRichCar = true;
        }
        if ("1" == this.node.name[0] && "3" == this.node.name[1]) {
            this.isTramcar = true;
        }
    }

    update() {
        if (this.isReadyDestroy) {
            return;
        }

        if (this.carState == Level29086Config.CarState.Normal) {
            if (this.updateNormalMovingCar()) {
                return;
            }
        }

        if (this.shouldCheckTankAssemblyBottomMovingCollision()) {
            this.checkMovingCollisionWithIdleCars();
            if (this.carState == Level29086Config.CarState.Idle) {
                return;
            }
        }

        if (
            this.carState == Level29086Config.CarState.OnBottomLeft &&
            this.node.x <= this.mgr.getRouteSideLimitX(this.node, -1)
        ) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return;
        }

        if (
            this.carState == Level29086Config.CarState.OnBottomRight &&
            this.node.x >= this.mgr.getRouteSideLimitX(this.node, 1)
        ) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return;
        }

        if (
            this.carState == Level29086Config.CarState.OutParking &&
            this.node.x >= cc.winSize.width / 2 + 6 * this.node.width
        ) {
            this.mgr.checkRes();
            this.node.destroy();
        }

        if (
            this.carState == Level29086Config.CarState.WaterSprayLeave &&
            this.node.x <= -(cc.winSize.width / 2 + this.node.height)
        ) {
            console.log("销毁消防车");
            this.node.destroy();
        }
    }

    railCarTurnChange(turnDirection: string) {
        this.carState = Level29086Config.CarState.Normal;

        if ("up" == turnDirection) {
            this.tramcarPosIndex += 1;
            this.mgr.changeCar(this.node, 2);
        } else if ("leftUp" == turnDirection) {
            this.tramcarPosIndex += 1;
            this.mgr.changeCar(this.node, 4, 2);
        } else if ("leftDown" == turnDirection) {
            this.tramcarPosIndex += 1;
            this.mgr.changeCar(this.node, 5, 2);
        } else if ("right" == turnDirection) {
            this.tramcarPosIndex += 1;
            this.mgr.changeCar(this.node, 1, 1);
        } else if ("left" == turnDirection) {
            this.tramcarPosIndex += 1;
            this.mgr.changeCar(this.node, 1, 2);
        } else if ("rightUp" == turnDirection) {
            this.tramcarPosIndex += 1;
            this.mgr.changeCar(this.node, 4, 1);
        } else if ("rightDown" == turnDirection) {
            this.tramcarPosIndex += 1;
            this.mgr.changeCar(this.node, 5, 1);
        }
    }

    checkTouch(hitCar: cc.Node) {
        if (this.isTankCollisionDebug()) {
            console.log("[TankCheckTouch]", {
                self: this.getDebugNodeInfo(this.node, this.getWorldPolygonByCarCollider(this.node)),
                hit: this.getDebugNodeInfo(hitCar, this.getWorldPolygonByCarCollider(hitCar)),
            });
        }
        this.playCrashSound();
        this.mgr.hit(this.node);
        this.carState = Level29086Config.CarState.Idle;

        if (this.node.isCarPark) {
            this.node.isWen = true;
        }

        this.node.stopAllActions();
        hitCar.runAction(this.shackAction(0.1, 2));
        this.mgr.moveCarAmount -= 1;

        if (this.isTramcar) {
            const worldBackPos = this.node.convertToWorldSpaceAR(cc.v2(0, -30));
            const localBackPos = this.node.parent.convertToNodeSpaceAR(worldBackPos);
            cc.tween(this.node)
                .to(0.15, {
                    position: localBackPos,
                })
                .call(() => {
                    this.isCanClick = true;
                    this.setTankAssemblyArrowVisible(true);
                })
                .start();
        } else {
            cc.tween(this.node)
                .to(0.15, {
                    position: this.oldPos,
                })
                .call(() => {
                    this.isCanClick = true;
                    if (this.isTransportCar) {
                        this.mgr.isTransportCarMove = true;
                    }
                    if (this.isUTransportCar) {
                        this.getUTransport().isTransportCarMove = true;
                    }
                    this.setTankAssemblyArrowVisible(true);
                    this.float(this.node);
                })
                .start();
        }

        const nextCar = this.nextCar;
        const prevCar = this.prevCar;

        if (nextCar && (this.hasChainLinkType(this.node, 0) || this.hasChainLinkType(nextCar, 0))) {
            this.backLinkedCar(nextCar, true);
        }

        if (prevCar && (this.hasChainLinkType(prevCar, 1) || this.hasChainLinkType(this.node, 1))) {
            this.backLinkedCar(prevCar, true);
        }
    }

    blockBeforeMove(hitCar: cc.Node) {
        if (this.isTankCollisionDebug()) {
            console.log("[TankBlockBeforeMove]", {
                self: this.getDebugNodeInfo(this.node, this.getWorldPolygonByCarCollider(this.node)),
                hit: this.getDebugNodeInfo(hitCar, this.getWorldPolygonByCarCollider(hitCar)),
            });
        }
        this.playCrashSound();
        this.mgr.hit(this.node);
        this.carState = Level29086Config.CarState.Idle;

        if (this.node.isCarPark) {
            this.node.isWen = true;
        }

        this.node.stopAllActions();
        if (this.oldPos) {
            this.node.position = this.oldPos;
        }
        hitCar.runAction(this.shackAction(0.1, 2));
        this.isCanClick = true;
        this.node._tankPrevMoveWorldPolygon = null;
        this.setTankAssemblyArrowVisible(true);
    }

    float(carNode: cc.Node) {
        const carItem = carNode.getComponent(Level29086BoxCarItem);
        if (carItem.floatPos) {
            cc.tween(carNode)
                .to(0.6, {
                    position: carItem.floatPos,
                })
                .to(0.6, {
                    position: carItem.oldPos,
                })
                .union()
                .repeatForever()
                .start();
        }
    }

    carBack(hitCar: cc.Node) {
        if (this.isTankCollisionDebug()) {
            console.log("[TankCarBack]", {
                self: this.getDebugNodeInfo(this.node, this.getWorldPolygonByCarCollider(this.node)),
                hit: this.getDebugNodeInfo(hitCar, this.getWorldPolygonByCarCollider(hitCar)),
            });
        }
        this.playCrashSound();
        this.mgr.hit(this.node);
        this.carState = Level29086Config.CarState.Idle;

        if (this.node.isCarPark) {
            this.node.isWen = true;
        }

        this.node.stopAllActions();
        hitCar.runAction(this.shackAction(0.1, 2));
        this.mgr.moveCarAmount -= 1;

        cc.tween(this.node)
            .to(0.15, {
                position: this.oldPos,
            })
            .call(() => {
                this.isCanClick = true;
                if (this.isTransportCar) {
                    this.mgr.isTransportCarMove = true;
                }
                if (this.isUTransportCar) {
                    this.getUTransport().isTransportCarMove = true;
                }
                this.setTankAssemblyArrowVisible(true);
            })
            .start();

        const nextCar = this.nextCar;
        const prevCar = this.prevCar;

        if (nextCar && (this.hasChainLinkType(this.node, 0) || this.hasChainLinkType(nextCar, 0))) {
            this.backLinkedCar(nextCar, false);
        }

        if (prevCar && (this.hasChainLinkType(prevCar, 1) || this.hasChainLinkType(this.node, 1))) {
            this.backLinkedCar(prevCar, false);
        }
    }

    shackAction(duration: number, distance: number) {
        const moveA = cc.moveBy(duration, distance, distance);
        const moveB = cc.moveBy(duration, -distance, -distance);
        const moveC = cc.moveBy(0.8 * duration, 0.8 * distance, 0.8 * distance);
        const moveD = cc.moveBy(0.8 * duration, 0.8 * -distance, 0.8 * -distance);
        const moveE = cc.moveBy(0.6 * duration, 0.6 * distance, 0.6 * distance);
        const moveF = cc.moveBy(0.6 * duration, 0.6 * -distance, 0.6 * -distance);
        const moveG = cc.moveBy(0.4 * duration, 0.4 * distance, 0.4 * distance);
        const moveH = cc.moveBy(0.4 * duration, 0.4 * -distance, 0.4 * -distance);
        const moveI = cc.moveBy(0.2 * duration, 0.2 * distance, 0.2 * distance);
        const moveJ = cc.moveBy(0.2 * duration, 0.2 * -distance, 0.2 * -distance);
        return cc.sequence(moveA, moveB, moveC, moveD, moveE, moveF, moveG, moveH, moveI, moveJ);
    }

    getWPosByNode(node: cc.Node) {
        return node.parent.convertToWorldSpaceAR(node.position);
    }

    private setTankAssemblyArrowVisible(active: boolean) {
        if (this.mgr && this.mgr.setTankAssemblyArrowVisible) {
            this.mgr.setTankAssemblyArrowVisible(this.node, active);
        }
    }

    private getCarNode(carNode: cc.Node) {
        if (!carNode) {
            return null;
        }
        return (
            carNode.getChildByName("car") ||
            carNode.children.find((child: cc.Node) => {
                return child.name && child.name.indexOf("=car") >= 0;
            }) ||
            null
        );
    }

    private getWorldPolygonByCarCollider(carNode: cc.Node) {
        const car = this.getCarNode(carNode);
        const collider = car && car.getComponent(cc.PolygonCollider);
        if (!collider || !collider.enabled) {
            return null;
        }
        return collider.points.map((point: cc.Vec2) => {
            return collider.node.convertToWorldSpaceAR(cc.v2(point.x + collider.offset.x, point.y + collider.offset.y));
        });
    }

    private getMovingCollisionCandidates() {
        if (!(this.mgr && this.mgr.isTankAssemblyLevel && this.mgr.isTankAssemblyLevel())) {
            return this.otherCarNode;
        }
        const carRoot = this.mgr.carRoot || (this.mgr.dict && this.mgr.dict.carRoot);
        const allCars = ((carRoot && carRoot.children) || []).concat(this.mgr.turntableCarArr || []);
        return allCars.filter((carNode: cc.Node) => {
            if (!carNode || carNode == this.node || !carNode.active || carNode.isTransportBox) {
                return false;
            }
            const item = carNode.getComponent(Level29086BoxCarItem);
            return (
                item &&
                !item.isReadyDestroy &&
                !item.isUTransportCar &&
                item.carState == Level29086Config.CarState.Idle
            );
        });
    }

    getTankAssemblyPreMoveBlock(targetLocalPos: cc.Vec2 | cc.Vec3) {
        if (!(this.mgr && this.mgr.isTankAssemblyLevel && this.mgr.isTankAssemblyLevel())) {
            return null;
        }
        const selfPolygon = this.getWorldPolygonByCarCollider(this.node);
        if (!selfPolygon || !targetLocalPos) {
            return null;
        }

        const currentWorldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        const targetWorldPos = this.node.parent.convertToWorldSpaceAR(targetLocalPos);
        const delta = cc.v2(targetWorldPos.x - currentWorldPos.x, targetWorldPos.y - currentWorldPos.y);
        const targetPolygon = selfPolygon.map((point: cc.Vec2) => {
            return cc.v2(point.x + delta.x, point.y + delta.y);
        });
        const candidates = this.getMovingCollisionCandidates();

        for (let index = 0; index < candidates.length; index++) {
            const otherCar = candidates[index];
            const otherPolygon = this.getWorldPolygonByCarCollider(otherCar);
            if (!otherPolygon) {
                continue;
            }
            const hitResult = this.isSweptPolygonHit(selfPolygon, targetPolygon, otherPolygon);
            if (hitResult.hit) {
                if (this.isTankCollisionDebug()) {
                    console.log("[TankPreMoveBlock:" + hitResult.type + "]", {
                        self: this.getDebugNodeInfo(this.node, selfPolygon),
                        other: this.getDebugNodeInfo(otherCar, otherPolygon),
                        targetLocalPos: {
                            x: targetLocalPos.x,
                            y: targetLocalPos.y,
                        },
                        selfPolygon: selfPolygon,
                        targetPolygon: targetPolygon,
                        otherPolygon: otherPolygon,
                    });
                }
                return otherCar;
            }
        }

        return null;
    }

    private shouldCheckMovingCollision() {
        return (
            this.path > 1 ||
            this.isTramcar ||
            (this.mgr && this.mgr.isTankAssemblyLevel && this.mgr.isTankAssemblyLevel())
        );
    }

    private shouldCheckTankAssemblyBottomMovingCollision() {
        return (
            this.mgr &&
            this.mgr.isTankAssemblyLevel &&
            this.mgr.isTankAssemblyLevel() &&
            (this.carState == Level29086Config.CarState.OnBottomLeft ||
                this.carState == Level29086Config.CarState.OnBottomRight)
        );
    }

    private isTankCollisionDebug() {
        return this.mgr && this.mgr.isTankAssemblyLevel && this.mgr.isTankAssemblyLevel();
    }

    private getDebugNodeInfo(node: cc.Node, polygon?: cc.Vec2[] | null) {
        if (!node) {
            return null;
        }
        const item = node.getComponent(Level29086BoxCarItem);
        const car = this.getCarNode(node);
        return {
            indexID: node.indexID,
            name: node.name,
            x: node.x,
            y: node.y,
            angle: node.angle,
            width: node.width,
            height: node.height,
            path: item && item.path,
            state: item && item.carState,
            carChild: car && car.name,
            hasCollider: !!(car && car.getComponent(cc.PolygonCollider)),
            polygonCount: polygon ? polygon.length : 0,
        };
    }

    private cross(a: cc.Vec2, b: cc.Vec2, c: cc.Vec2) {
        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    }

    private isPointOnSegment(p: cc.Vec2, a: cc.Vec2, b: cc.Vec2) {
        const minX = Math.min(a.x, b.x) - 0.001;
        const maxX = Math.max(a.x, b.x) + 0.001;
        const minY = Math.min(a.y, b.y) - 0.001;
        const maxY = Math.max(a.y, b.y) + 0.001;
        return Math.abs(this.cross(a, b, p)) <= 0.001 && p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
    }

    private isSegmentIntersect(a: cc.Vec2, b: cc.Vec2, c: cc.Vec2, d: cc.Vec2) {
        const c1 = this.cross(a, b, c);
        const c2 = this.cross(a, b, d);
        const c3 = this.cross(c, d, a);
        const c4 = this.cross(c, d, b);
        if (this.isPointOnSegment(c, a, b) || this.isPointOnSegment(d, a, b)) {
            return true;
        }
        if (this.isPointOnSegment(a, c, d) || this.isPointOnSegment(b, c, d)) {
            return true;
        }
        return c1 * c2 < 0 && c3 * c4 < 0;
    }

    private isPointInPolygon(point: cc.Vec2, polygon: cc.Vec2[]) {
        return polygon && polygon.length >= 3 && cc.Intersection.pointInPolygon(point, polygon);
    }

    private isSweptPolygonHit(prevPolygon: cc.Vec2[] | null, currentPolygon: cc.Vec2[] | null, otherPolygon: cc.Vec2[]) {
        const prevHit = !!(prevPolygon && cc.Intersection.polygonPolygon(prevPolygon, otherPolygon));
        const currentHit = !!(currentPolygon && cc.Intersection.polygonPolygon(currentPolygon, otherPolygon));
        if (currentHit && !prevHit) {
            return { hit: true, type: "polygon", prevHit: prevHit, currentHit: currentHit };
        }
        if (!prevPolygon || !currentPolygon || prevHit || prevPolygon.length != currentPolygon.length) {
            return { hit: false, type: "", prevHit: prevHit, currentHit: currentHit };
        }

        for (let i = 0; i < currentPolygon.length; i++) {
            const moveStart = prevPolygon[i];
            const moveEnd = currentPolygon[i];
            for (let j = 0; j < otherPolygon.length; j++) {
                const otherStart = otherPolygon[j];
                const otherEnd = otherPolygon[(j + 1) % otherPolygon.length];
                if (this.isSegmentIntersect(moveStart, moveEnd, otherStart, otherEnd)) {
                    return { hit: true, type: "sweptSegment", prevHit: prevHit, currentHit: currentHit };
                }
            }
        }

        for (let i = 0; i < currentPolygon.length; i++) {
            const next = (i + 1) % currentPolygon.length;
            const sweptQuad = [prevPolygon[i], prevPolygon[next], currentPolygon[next], currentPolygon[i]];
            for (let j = 0; j < otherPolygon.length; j++) {
                if (this.isPointInPolygon(otherPolygon[j], sweptQuad)) {
                    return { hit: true, type: "sweptArea", prevHit: prevHit, currentHit: currentHit };
                }
            }
        }

        return { hit: false, type: "", prevHit: prevHit, currentHit: currentHit };
    }

    private updateNormalMovingCar() {
        if (this.mgr && this.mgr.isTankAssemblyLevel && this.mgr.isTankAssemblyLevel()) {
            return this.updateTankAssemblyNormalMovingCar();
        }
        if (this.shouldCheckMovingCollision()) {
            this.isCanClick = false;
            this.checkMovingCollisionWithIdleCars();
        }

        const roadLocalPos = this.mgr.getRouteRoadLocalPosition
            ? this.mgr.getRouteRoadLocalPosition(this.node.parent)
            : this.node.parent.convertToNodeSpaceAR(
                  this.mgr.dict.road.parent.convertToWorldSpaceAR(this.mgr.dict.road.position)
              );

        if (this.node.y >= roadLocalPos.y - 2 * this.minLen) {
            console.log("检测碰到公路");
            if (this.isUTransportCar) {
                const uTransport = this.getUTransport();
                const uTransportIndex = uTransport.carArr.indexOf(this.node);
                if (-1 !== uTransportIndex) {
                    uTransport.carArr[uTransportIndex] = null;
                    uTransport.reduceUpdate();
                }
                uTransport.isTransportCarMove = true;
            }

            if (!this.isCollision) {
                this.isCollision = true;
                this.mgr.collision(this.node);
            }
            return true;
        }

        if (this.node.x <= this.mgr.getRouteSideLimitX(this.node, -1)) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return true;
        }

        if (this.node.x >= this.mgr.getRouteSideLimitX(this.node, 1)) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return true;
        }

        const bottomTurnY = this.mgr.getRouteBottomTurnY ? this.mgr.getRouteBottomTurnY(this.node.parent) : -620;

        if (this.node.y <= bottomTurnY && this.node.x > 0) {
            this.carState = Level29086Config.CarState.OnBottomRight;
            this.mgr.changeCar(this.node, 1, 1, "01" + this.lenImgName + "-1");
            return true;
        }

        if (this.node.y <= bottomTurnY && this.node.x < 0) {
            this.carState = Level29086Config.CarState.OnBottomLeft;
            this.mgr.changeCar(this.node, 1, 2, "01" + this.lenImgName + "-0");
            return true;
        }

        if (this.leftObliqueCar && this.node.x >= -189.008) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
        } else if (this.rightObliqueCar && this.node.x <= 189.008) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
        } else {
            this.checkUTransportTurnToRoad();
        }

        this.checkTramcarTurnPoint();
        return false;
    }

    private updateTankAssemblyNormalMovingCar() {
        this.isCanClick = false;
        this.checkMovingCollisionWithIdleCars();
        if (this.carState == Level29086Config.CarState.Idle) {
            return true;
        }

        const roadLocalPos = this.mgr.getRouteRoadLocalPosition(this.node.parent);
        const angle = this.mgr.getTankAssemblyRouteAngle
            ? this.mgr.getTankAssemblyRouteAngle(this.node)
            : Math.round(this.node.angle);
        const absAngle = Math.abs(angle);
        const isHorizontal = this.mgr.isTankAssemblyRouteHorizontal
            ? this.mgr.isTankAssemblyRouteHorizontal(this.node)
            : absAngle >= 70 && absAngle <= 110;
        const isDown = this.mgr.isTankAssemblyRouteDown
            ? this.mgr.isTankAssemblyRouteDown(this.node)
            : absAngle >= 100;

        if (!isDown && !isHorizontal && this.node.y >= roadLocalPos.y - 2 * this.minLen) {
            console.log("检测碰到公路");
            if (!this.isCollision) {
                this.isCollision = true;
                this.mgr.collision(this.node);
            }
            return true;
        }

        const bottomTurnY = this.mgr.getRouteBottomTurnY ? this.mgr.getRouteBottomTurnY(this.node.parent) : -620;
        if (isDown && this.node.y <= bottomTurnY) {
            const side = this.mgr.getTankAssemblyBottomSide
                ? this.mgr.getTankAssemblyBottomSide(this.node)
                : this.node.x < 0
                ? -1
                : 1;
            if (side < 0) {
                this.carState = Level29086Config.CarState.OnBottomLeft;
                this.mgr.changeCar(this.node, 1, 2, "01" + this.lenImgName + "-0");
            } else {
                this.carState = Level29086Config.CarState.OnBottomRight;
                this.mgr.changeCar(this.node, 1, 1, "01" + this.lenImgName + "-1");
            }
            return true;
        }

        if (!isDown && this.node.x <= this.mgr.getRouteSideLimitX(this.node, -1)) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return true;
        }

        if (!isDown && this.node.x >= this.mgr.getRouteSideLimitX(this.node, 1)) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return true;
        }

        return false;
    }

    private checkMovingCollisionWithIdleCars() {
        const isTankDebug = this.isTankCollisionDebug();
        const selfPolygon = this.getWorldPolygonByCarCollider(this.node);
        const prevSelfPolygon = isTankDebug ? this.node._tankPrevMoveWorldPolygon || null : null;
        const movingCandidates = this.getMovingCollisionCandidates();
        const selfWorldPos = this.getWPosByNode(this.node);
        const absAngle = Math.round(Math.abs(this.node.angle));
        let sidePoints: cc.Vec2[] | undefined;

        if (90 == absAngle) {
            sidePoints = [
                this.node.convertToWorldSpaceAR(cc.v2(-this.node.width / 2, 0)),
                this.node.convertToWorldSpaceAR(cc.v2(this.node.width / 2, 0)),
            ];
        }

        if (isTankDebug && !this.node._tankDebugMoveStartLogged) {
            this.node._tankDebugMoveStartLogged = true;
            const candidates = movingCandidates.map((otherCar: cc.Node) => {
                const otherPolygon = this.getWorldPolygonByCarCollider(otherCar);
                return {
                    info: this.getDebugNodeInfo(otherCar, otherPolygon),
                    intersects: !!(selfPolygon && otherPolygon && cc.Intersection.polygonPolygon(selfPolygon, otherPolygon)),
                };
            });
            console.log("[TankMoveCollisionStart]", {
                self: this.getDebugNodeInfo(this.node, selfPolygon),
                selfPolygon: selfPolygon,
                prevSelfPolygon: prevSelfPolygon,
                candidateCount: movingCandidates.length,
                candidates: candidates,
            });
        }

        let hasHit = false;
        for (let index = 0; index < movingCandidates.length; index++) {
            const otherCar = movingCandidates[index];
            try {
                if (!otherCar || otherCar.getComponent(Level29086BoxCarItem).carState != Level29086Config.CarState.Idle) {
                    continue;
                }

                const otherPolygon = this.getWorldPolygonByCarCollider(otherCar);
                if (selfPolygon && otherPolygon) {
                    const tankHitResult = this.isTankCollisionDebug()
                        ? this.isSweptPolygonHit(prevSelfPolygon, selfPolygon, otherPolygon)
                        : {
                              hit: cc.Intersection.polygonPolygon(selfPolygon, otherPolygon),
                              type: "polygon",
                              prevHit: false,
                              currentHit: cc.Intersection.polygonPolygon(selfPolygon, otherPolygon),
                          };
                    if (tankHitResult.hit) {
                        if (isTankDebug) {
                            console.log("[TankMoveCollisionHit:" + tankHitResult.type + "]", {
                                self: this.getDebugNodeInfo(this.node, selfPolygon),
                                other: this.getDebugNodeInfo(otherCar, otherPolygon),
                                prevHit: tankHitResult.prevHit,
                                currentHit: tankHitResult.currentHit,
                                prevSelfPolygon: prevSelfPolygon,
                                selfPolygon: selfPolygon,
                                otherPolygon: otherPolygon,
                            });
                        }
                        hasHit = true;
                        this.checkTouch(otherCar);
                        break;
                    }
                    continue;
                }
                if (this.mgr && this.mgr.isTankAssemblyLevel && this.mgr.isTankAssemblyLevel()) {
                    if (isTankDebug && !this.node._tankDebugMissingColliderLogged) {
                        this.node._tankDebugMissingColliderLogged = true;
                        console.log("[TankMoveCollisionSkip:missingCollider]", {
                            self: this.getDebugNodeInfo(this.node, selfPolygon),
                            other: this.getDebugNodeInfo(otherCar, otherPolygon),
                            selfPolygon: selfPolygon,
                            otherPolygon: otherPolygon,
                        });
                    }
                    continue;
                }

                const centerLine = [
                    otherCar.convertToWorldSpaceAR(cc.v2(0, 0)),
                    otherCar.convertToWorldSpaceAR(cc.v2(0, -otherCar.height)),
                ];
                const topLine = [
                    otherCar.convertToWorldSpaceAR(cc.v2(-otherCar.width / 2, 0)),
                    otherCar.convertToWorldSpaceAR(cc.v2(otherCar.width / 2, 0)),
                ];
                const bottomLine = [
                    otherCar.convertToWorldSpaceAR(cc.v2(-otherCar.width / 2, -otherCar.height)),
                    otherCar.convertToWorldSpaceAR(cc.v2(otherCar.width / 2, -otherCar.height)),
                ];

                if (!centerLine[0]) {
                    continue;
                }

                if (90 == absAngle) {
                    if (
                        cc.Intersection.pointLineDistance(sidePoints[0], centerLine[0], centerLine[1], true) <
                            this.minLen ||
                        cc.Intersection.pointLineDistance(sidePoints[0], topLine[0], topLine[1], true) < this.minLen ||
                        cc.Intersection.pointLineDistance(sidePoints[0], bottomLine[0], bottomLine[1], true) <
                            this.minLen ||
                        cc.Intersection.pointLineDistance(sidePoints[1], centerLine[0], centerLine[1], true) <
                            this.minLen ||
                        cc.Intersection.pointLineDistance(sidePoints[1], topLine[0], topLine[1], true) < this.minLen ||
                        cc.Intersection.pointLineDistance(sidePoints[1], bottomLine[0], bottomLine[1], true) <
                            this.minLen
                    ) {
                        if (isTankDebug) {
                            console.log("[TankMoveCollisionHit:fallback90]", {
                                self: this.getDebugNodeInfo(this.node, selfPolygon),
                                other: this.getDebugNodeInfo(otherCar, null),
                            });
                        }
                        hasHit = true;
                        this.checkTouch(otherCar);
                        break;
                    }
                } else if (
                    cc.Intersection.pointLineDistance(selfWorldPos, centerLine[0], centerLine[1], true) < this.minLen ||
                    cc.Intersection.pointLineDistance(selfWorldPos, topLine[0], topLine[1], true) < this.minLen ||
                    cc.Intersection.pointLineDistance(selfWorldPos, bottomLine[0], bottomLine[1], true) < this.minLen
                ) {
                    if (isTankDebug) {
                        console.log("[TankMoveCollisionHit:fallback]", {
                            self: this.getDebugNodeInfo(this.node, selfPolygon),
                            other: this.getDebugNodeInfo(otherCar, null),
                        });
                    }
                    hasHit = true;
                    this.checkTouch(otherCar);
                    break;
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (isTankDebug && !hasHit) {
            this.node._tankPrevMoveWorldPolygon = selfPolygon;
        }
    }

    private checkUTransportTurnToRoad() {
        const angle = Math.round(this.node.angle);
        const shouldTurnRightToRoad =
            (this.isUTransportCar || this.isUTransportCar_noIn) &&
            (-90 == angle || -52 == angle || -128 == angle) &&
            this.node.x >= 0;

        if (shouldTurnRightToRoad) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.node.x = 0;
            this.mgr.changeCar(this.node, 2);
            if (this.isUTransportCar) {
                this.getUTransport().reduceUpdate();
            }
            return;
        }

        const shouldTurnLeftToRoad =
            (this.isUTransportCar || this.isUTransportCar_noIn) &&
            (90 == angle || 52 == angle || 128 == angle) &&
            this.node.x <= 0;

        if (shouldTurnLeftToRoad) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.node.x = 0;
            this.mgr.changeCar(this.node, 2);
            if (this.isUTransportCar) {
                this.getUTransport().reduceUpdate();
            }
        }
    }

    private checkTramcarTurnPoint() {
        const turnNode = this.railCarTurn[this.tramcarPosIndex];
        if (!this.isTramcar || !turnNode) {
            return;
        }

        const turnConfig = turnNode.name.split("-");
        const checkType = turnConfig[0];
        const turnDirection = turnConfig[1];

        if ("0" == checkType) {
            if (this.getWPosByNode(this.node).x <= this.getWPosByNode(turnNode).x) {
                this.railCarTurnChange(turnDirection);
            }
        } else if ("1" == checkType) {
            if (this.getWPosByNode(this.node).x >= this.getWPosByNode(turnNode).x) {
                this.railCarTurnChange(turnDirection);
            }
        } else if ("3" == checkType && this.getWPosByNode(this.node).y <= this.getWPosByNode(turnNode).y) {
            this.railCarTurnChange(turnDirection);
        }
    }

    private backLinkedCar(carNode: cc.Node, shouldReduceMoveAmount: boolean) {
        carNode.stopAllActions();
        carNode.getComponent(Level29086BoxCarItem).carState = Level29086Config.CarState.Idle;
        if (shouldReduceMoveAmount) {
            this.mgr.moveCarAmount -= 1;
        }

        cc.tween(carNode)
            .to(0.15, {
                position: carNode.getComponent(Level29086BoxCarItem).oldPos,
            })
            .call(() => {
                carNode.getComponent(Level29086BoxCarItem).isCanClick = true;
            })
            .start();
    }

    private hasChainLinkType(carNode: cc.Node, linkType: number) {
        const chainNode = carNode.getChildByName("chain");
        return chainNode && chainNode.getComponent(Level249667Chain.default).linkType == linkType;
    }

    private getUTransport() {
        return this.mgr.dict.carRoot.getComponent(Level249667UTransport.default);
    }

    private playCrashSound() {
        if (!AudioManager.Audio.getEffectMute()) {
            this.mgr.playRemoteSound("audio/f27312/f27312_Crash");
        }
    }
}
