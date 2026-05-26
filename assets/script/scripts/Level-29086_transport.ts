// @ts-nocheck

const Level29086BoxCarItem = require("./Level-29086_boxCarItem");
const Level29086Config = require("./Level-29086_config");

const { ccclass, property } = cc._decorator;

const TRANSPORT_BOX_PREFAB: Record<number, string> = {
    1: "021",
    2: "022",
    3: "023",
};

@ccclass
export default class Level29086Transport extends cc.Component {
    @property(cc.Node)
    road0: cc.Node | null = null;

    @property(cc.Node)
    road1: cc.Node | null = null;

    /** Whether the conveyor and transport boxes are moving. */
    isMove: boolean = false;

    /** Set after config has been injected. */
    isInit: boolean = false;

    currentCarAmount: number = 0;
    speed: number = 50;
    allBox: cc.Node[] = [];
    distanceInterval: number = 80;
    mgr: any = null;
    config: number[] = [];

    init(mgr: any, config: number[] = []) {
        this.mgr = mgr;
        this.config = config || [];
        this.isInit = true;
        this.currentCarAmount = this.config.length;
        this.updateAmountLabel();
        this.createBox();

        this.scheduleOnce(() => {
            this.isMove = true;
        }, 1);
    }

    reduceCarAmount(carNode: cc.Node) {
        const index = this.allBox.indexOf(carNode);
        if (index !== -1) {
            this.allBox.splice(index, 1);
        }

        const shadow = carNode.getChildByName("shadow0");
        if (shadow) {
            shadow.destroy();
        }

        this.currentCarAmount -= 1;
        this.updateAmountLabel();
    }

    createBox() {
        const position023 = this.getCarRootPosition("023");
        const position022 = this.getCarRootPosition("022");
        const position021 = this.getCarRootPosition("021");

        for (let index = 0; index < this.config.length; index++) {
            const boxType = this.config[index];
            const prefabName = TRANSPORT_BOX_PREFAB[boxType];
            const prefab = this.mgr.dict.carPrefab.getChildByName(prefabName);
            const box = cc.instantiate(prefab);

            this.mgr.dict.carRoot.addChild(box);
            box.position = position023;
            box.isTransportBox = true;
            this.allBox.push(box);

            box.x = position023.x + index * this.distanceInterval;
            if (prefabName === "021") {
                box.y = position021.y;
            } else if (prefabName === "022") {
                box.y = position022.y;
            } else {
                box.y = position023.y;
            }

            box.name = prefab.name;
            box.getComponent(Level29086BoxCarItem.default).path = 99;
            box.path = 99;
        }
    }

    update(dt: number) {
        if (!this.isInit || !this.isMove) {
            return;
        }

        this.updateRoad(dt);
        this.updateTransportBoxes(dt);
    }

    getMaxXTransportCar() {
        let maxBox = this.allBox[0];

        for (let index = 0; index < this.allBox.length; index++) {
            const box = this.allBox[index];
            if (box && box.x > maxBox.x) {
                maxBox = box;
            }
        }

        return maxBox;
    }

    timerTransportMove(delay: number = 1.2) {
        this.unschedule(this.setTransportCarMove);
        this.scheduleOnce(this.setTransportCarMove, delay);
    }

    setTransportCarMove() {
        this.isMove = true;
    }

    setTransportCarNoMove(carNode: cc.Node) {
        this.isMove = false;
        this.timerTransportMove(0.6);

        if (!this.mgr.checkHasCollision(carNode)) {
            this.mgr.addTailGasSpine(carNode);
        }
    }

    private updateAmountLabel() {
        this.node.getChildByName("transportBoxAmount").getComponent(cc.Label).string =
            this.currentCarAmount.toString();
    }

    private getCarRootPosition(nodeName: string) {
        const worldPosition = this.node.convertToWorldSpaceAR(this.node.getChildByName(nodeName).position);
        return this.mgr.dict.carRoot.convertToNodeSpaceAR(worldPosition);
    }

    private updateRoad(dt: number) {
        this.road0.x -= dt * this.speed;
        this.road1.x -= dt * this.speed;

        if (this.road0.x <= -(315 + this.road0.width)) {
            this.road0.x = this.road1.x + this.road0.width;
        }

        if (this.road1.x <= -(315 + this.road0.width)) {
            this.road1.x = this.road0.x + this.road0.width;
        }
    }

    private updateTransportBoxes(dt: number) {
        for (let index = 0; index < this.allBox.length; index++) {
            const box = this.allBox[index];
            if (!box || box.getComponent(Level29086BoxCarItem.default).carState != Level29086Config.CarState.Idle) {
                continue;
            }

            let nextX = box.x - dt * this.speed;
            const rightmostBox = this.getMaxXTransportCar();

            if (nextX <= -380 && rightmostBox) {
                const resetX = rightmostBox.x + this.distanceInterval;
                if (resetX <= this.node.getChildByName("023").x) {
                    nextX = this.node.getChildByName("023").x;
                } else {
                    nextX = resetX;
                }
            }

            box.x = nextX;
        }
    }
}
