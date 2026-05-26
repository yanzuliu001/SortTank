// @ts-nocheck

const Level29086BoxCarItem = require("./Level-29086_boxCarItem");
const Level29086Config = require("./Level-29086_config");

const { ccclass, property } = cc._decorator;

type CarParkDirection = "left" | "right" | "top" | "bottom";

@ccclass
export default class Level29086CarParkItem extends cc.Component {
    /** Visible slot car. When it leaves, this component pulls the next backup car in. */
    @property(cc.Node)
    target: cc.Node | null = null;

    /** Parent car park component. */
    mgr: any = null;

    /** Backup car length list configured for this slot. */
    config: number[] = [];

    /** World-converted spawn position for backup cars entering this slot. */
    startPos: cc.Vec2 | null = null;

    /** Final slot position for the active target car. */
    endPos: cc.Vec2 | cc.Vec3 | null = null;

    /** Movement speed copied from the original target car. */
    speed: number = 0;

    /** Hidden backup cars waiting to refill this slot. */
    carParkCars: cc.Node[] = [];

    /** Level controller instance, stored as mgr.mgr in the original structure. */
    busCom: any = null;

    onLoad() {
        if (this.target) {
            const worldStartPos = this.target.convertToWorldSpaceAR(cc.v2(0, -70));
            this.startPos = this.target.parent.convertToNodeSpaceAR(worldStartPos);
            this.endPos = this.target.position;
            this.speed = this.target.getComponent(Level29086BoxCarItem.default).speed;
        }

        this.node.getChildByName("carAmount").getComponent(cc.Label).string = "";
    }

    init(mgr: any, config: number[] = []) {
        this.mgr = mgr;
        this.config = config || [];
        this.busCom = this.mgr.mgr;

        if (!this.target) {
            return;
        }

        const direction = this.node.name as CarParkDirection;
        const basePath = this.busCom.getPath(this.target);

        for (let index = 0; index < this.config.length; index++) {
            const carLength = this.config[index];
            const prefabName = this.getPrefabName(direction, carLength);
            const prefab = this.busCom.dict.carPrefab.getChildByName(prefabName);
            const car = cc.instantiate(prefab);

            this.busCom.dict.carRoot.addChild(car);
            car.isCarPark = true;
            car.belongToCarPark = this.node;
            car.name = prefab.name;
            car.position = cc.v3();
            this.carParkCars.push(car);

            car.getComponent(Level29086BoxCarItem.default).path = basePath + index;
            car.path = basePath + index;
            car.active = false;
        }

        this.node.getChildByName("carAmount").getComponent(cc.Label).string = "" + this.config.length;
    }

    private getPrefabName(direction: CarParkDirection, carLength: number) {
        switch (direction) {
            case "left":
                return "01" + carLength + "-0";
            case "right":
                return "01" + carLength + "-1";
            case "top":
                return "02" + carLength;
            case "bottom":
                return "03" + carLength;
        }
    }

    update() {
        if (!(((this.target && !this.target.active) || !this.target) && this.carParkCars.length > 0)) {
            return;
        }

        this.busCom.carparkIng = true;
        this.target = this.carParkCars.shift();
        this.node.getChildByName("carAmount").getComponent(cc.Label).string = "" + this.carParkCars.length;
        this.target.active = true;
        this.target.position = this.startPos;

        const moveDuration = this.startPos.sub(this.endPos).mag() / this.speed;

        this.scheduleOnce(() => {
            this.target.isWen = true;
            this.target.getComponent(Level29086BoxCarItem.default).carState = Level29086Config.CarState.Idle;
            this.busCom.carparkIng = false;
            this.busCom.updateCarWeight();
        }, moveDuration);

        cc.tween(this.target)
            .to(moveDuration, {
                position: this.endPos,
            })
            .call(() => {
                this.target.isWen = true;
                this.busCom.carparkIng = false;
            })
            .start();
    }
}
