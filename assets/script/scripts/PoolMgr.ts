// @ts-nocheck

export default class PoolMgr {
    private poolMap: { [key: string]: cc.NodePool } = {};

    get(prefab: any, poolKey: string): cc.Node {
        const pool = this.poolMap[poolKey];
        const node = pool && pool.size() ? pool.get() : cc.instantiate(prefab);

        node.active = true;
        return node;
    }

    put(node: cc.Node, poolKey: string) {
        node.active = false;

        let pool = this.poolMap[poolKey];
        if (!pool) {
            pool = new cc.NodePool();
            this.poolMap[poolKey] = pool;
        }

        pool.put(node);
    }

    clear(poolKey: string) {
        this.poolMap[poolKey].clear();
        delete this.poolMap[poolKey];
    }
}
