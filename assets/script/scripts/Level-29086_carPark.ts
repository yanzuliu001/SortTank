// @ts-nocheck

const Level29086CarParkItem = require("./Level-29086_carParkItem");

const { ccclass } = cc._decorator;

@ccclass
export default class Level29086CarPark extends cc.Component {
    /** Level controller instance. */
    mgr: any = null;

    /** Car park config array, one entry per child slot. */
    config: any[] = [];

    init(mgr: any, config: any[] = []) {
        this.mgr = mgr;
        this.config = config || [];

        for (let index = 0; index < this.node.children.length; index++) {
            const slotNode = this.node.children[index];
            const slotConfig = this.config[index];
            const item = slotNode.getComponent(Level29086CarParkItem.default);

            if (item) {
                item.init(this, slotConfig);
            }
        }
    }
}
