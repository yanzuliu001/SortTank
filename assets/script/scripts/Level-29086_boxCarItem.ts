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

        if (
            this.carState == Level29086Config.CarState.OnBottomLeft &&
            this.node.x <= -(this.mgr.boundary / 2 + this.node.width / 2)
        ) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return;
        }

        if (
            this.carState == Level29086Config.CarState.OnBottomRight &&
            this.node.x >= this.mgr.boundary / 2 + this.node.width / 2
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

    private updateNormalMovingCar() {
        if (this.path > 1 || this.isTramcar) {
            this.isCanClick = false;
            this.checkMovingCollisionWithIdleCars();
        }

        const roadWorldPos = this.mgr.dict.road.parent.convertToWorldSpaceAR(this.mgr.dict.road.position);
        const roadLocalPos = this.node.parent.convertToNodeSpaceAR(roadWorldPos);

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

        if (this.node.x <= -(this.mgr.boundary / 2 + this.node.width / 2)) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return true;
        }

        if (this.node.x >= this.mgr.boundary / 2 + this.node.width / 2) {
            this.carState = Level29086Config.CarState.GoingRoad;
            this.mgr.changeCar(this.node, 2);
            return true;
        }

        if (this.node.y <= -620 && this.node.x > 0) {
            this.carState = Level29086Config.CarState.OnBottomRight;
            this.mgr.changeCar(this.node, 1, 1, "01" + this.lenImgName + "-1");
            return true;
        }

        if (this.node.y <= -620 && this.node.x < 0) {
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

    private checkMovingCollisionWithIdleCars() {
        const selfWorldPos = this.getWPosByNode(this.node);
        const absAngle = Math.round(Math.abs(this.node.angle));
        let sidePoints: cc.Vec2[] | undefined;

        if (90 == absAngle) {
            sidePoints = [
                this.node.convertToWorldSpaceAR(cc.v2(-this.node.width / 2, 0)),
                this.node.convertToWorldSpaceAR(cc.v2(this.node.width / 2, 0)),
            ];
        }

        for (let index = 0; index < this.otherCarNode.length; index++) {
            const otherCar = this.otherCarNode[index];
            try {
                if (!otherCar || otherCar.getComponent(Level29086BoxCarItem).carState != Level29086Config.CarState.Idle) {
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
                        this.checkTouch(otherCar);
                        break;
                    }
                } else if (
                    cc.Intersection.pointLineDistance(selfWorldPos, centerLine[0], centerLine[1], true) < this.minLen ||
                    cc.Intersection.pointLineDistance(selfWorldPos, topLine[0], topLine[1], true) < this.minLen ||
                    cc.Intersection.pointLineDistance(selfWorldPos, bottomLine[0], bottomLine[1], true) < this.minLen
                ) {
                    this.checkTouch(otherCar);
                    break;
                }
            } catch (error) {
                console.log(error);
            }
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
