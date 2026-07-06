// @ts-nocheck

// 等待区坦克方向编号 -> 移动向量。
// 关卡配置里的 direction 就是这里的 key：
// 0=左上，1=左，2=上，3=右上，4=左下，5=右，6=右下，7=下。
// 坦克被点击后会先按这个方向离开等待区，再沿 road 进入装配台入口。
export const TankDirectionVector = {
    0: [-Math.SQRT1_2, Math.SQRT1_2],
    1: [-1, 0],
    2: [0, 1],
    3: [Math.SQRT1_2, Math.SQRT1_2],
    4: [-Math.SQRT1_2, -Math.SQRT1_2],
    5: [1, 0],
    6: [Math.SQRT1_2, -Math.SQRT1_2],
    7: [0, -1]
};

// 等待区坦克方向编号 -> 旧角度值。
// 主要用于把方向编号转换成碰撞多边形旋转角度；新逻辑不再旋转坦克父节点。
// 注意：贴图资源已经按 0-7 方向准备好，显示方向由 direction 选择贴图，不靠 node.angle。
export const TankDirectionAngle = {
    0: 45,
    1: 90,
    2: 0,
    3: -45,
    4: 135,
    5: -90,
    6: -135,
    7: 180
};

// 等待区可用坦克类型配置。
// tanks 里的 type 直接填写数字 1/2/3/4；TankBoardTankType 枚举只用于查看颜色和数字的对应关系。
// 运行时会把数字枚举转换成这里的字符串 key，用于加载贴图、碰撞和装配颜色。
export enum TankBoardTankType {
    Green = 1,
    Blue = 2,
    Purple = 3,
    Orange = 4
}

export const TankBoardTankTypeKey = {
    1: "green",
    2: "blue",
    3: "purple",
    4: "yellow"
};

export const TankBoardTankTypeValue = {
    green: 1,
    blue: 2,
    purple: 3,
    yellow: 4
};

export function getTankTypeKey(type) {
    return "number" == typeof type ? TankBoardTankTypeKey[type] : type;
}

export function getTankTypeValue(type) {
    return "number" == typeof type ? type : TankBoardTankTypeValue[type];
}

// key 是内部坦克类型名，也是 debugLayer 的颜色分组名。
export const TankTypeConfig = {
    // yellow: 橙/黄坦克，type/colorId=4，容量 2。
    yellow: {
        // assetPrefix: 对应 assets/resources/zqddn_zhb/texture/tank 下的贴图前缀。
        // direction=2 时会加载 tank_yellow_a_2。
        assetPrefix: "tank_yellow_a",
        // colorId: 装配台统计和零件匹配编号，必须与该颜色的 TankBoardTankType 数值一致。
        colorId: 4,
        // capacity: 这辆坦克需要收集的乘员/零件数量。
        capacity: 2,
        // body: 逻辑碰撞体尺寸；只影响路径阻挡检测，不跟视觉缩放联动。
        // width=车身宽，length=车身长，corner=矩形削角大小。
        body: { width: 48, length: 62, corner: 6 }
    },
    // blue: 蓝色坦克，type/colorId=2，容量 4。
    blue: {
        assetPrefix: "tank_blue_a",
        colorId: 2,
        capacity: 4,
        body: { width: 48, length: 62, corner: 6 }
    },
    // green: 绿色坦克，type/colorId=1，容量 6。
    green: {
        assetPrefix: "tank_green_a",
        colorId: 1,
        capacity: 6,
        body: { width: 48, length: 62, corner: 6 }
    },
    // purple: 紫色坦克，type/colorId=3，容量 10。
    purple: {
        assetPrefix: "tank_purple_a",
        colorId: 3,
        capacity: 10,
        body: { width: 48, length: 62, corner: 6 }
    }
};

// 等待区通用配置。新增关卡在 TankWaitingBoardByLevel 里配置 tanks 和 parts。
export const TankWaitingBoardCommonConfig = {
    // board: 等待区可放置/寻路的本地坐标范围；运行时如果 prefab 里有 rectNode，会用 rectNode 换算后的范围覆盖这里。
    board: { left: -260, right: 260, bottom: -230, top: 230 },
    // moveSpeed: 等待区坦克移动到装配入口的速度，单位为 Cocos 坐标/秒。
    moveSpeed: 500,
    // collisionSampleStep: 路径碰撞检测的采样间隔；越小越精确但计算越多。
    collisionSampleStep: 6,
    // turnEnvelopeSides: 转向时用于近似圆形占位的多边形边数。
    turnEnvelopeSides: 16,
    // shakeDistance: 路线被挡或车位满时，坦克左右抖动的距离。
    shakeDistance: 4,
    // shakeDuration: 单段抖动动画耗时，单位秒。
    shakeDuration: 0.05,
    // visualScale: 只缩放 tankVisual/dir 两个视觉子节点，不缩放父节点，因此不影响碰撞和行动轨迹。
    visualScale: 0.8
};

export const TankWaitingBoardByLevel = {
    // key 是关卡 id。调试打印会同时输出 tanks 和 parts，可直接复制新增关卡。
    "-10001": {
        // tanks: 本关等待区坦克列表。打印按钮会连同 parts 输出完整关卡块。
        // id: 本关内唯一标识，打印时会按从上到下、从左到右重新生成 t01/t02...
        // type: 坦克类型，直接填写具体数值：1=Green，2=Blue，3=Purple，4=Orange。
        // direction: 0-7 八方向，和 TankDirectionVector/TankDirectionAngle 的 key 对应。
        // x/y: 坦克中心点在 carRoot 下的本地坐标。
        tanks: [
            { id: "t01", type: 4, direction: 2, x: -180, y: 170 },
            { id: "t02", type: 2, direction: 2, x: -60, y: 170 },
            { id: "t03", type: 1, direction: 3, x: 60, y: 170 },
            { id: "t04", type: 3, direction: 0, x: 180, y: 170 },

            { id: "t05", type: 2, direction: 1, x: -180, y: 70 },
            { id: "t06", type: 1, direction: 4, x: -60, y: 70 },
            { id: "t07", type: 3, direction: 6, x: 60, y: 70 },
            { id: "t08", type: 4, direction: 5, x: 180, y: 70 },

            { id: "t09", type: 1, direction: 0, x: -180, y: -20 },
            { id: "t10", type: 3, direction: 7, x: -60, y: -20 },
            { id: "t11", type: 4, direction: 7, x: 60, y: -20 },
            { id: "t12", type: 2, direction: 3, x: 180, y: -20 },

            { id: "t13", type: 3, direction: 1, x: -180, y: -130 },
            { id: "t14", type: 4, direction: 4, x: -60, y: -130 },
            { id: "t15", type: 2, direction: 6, x: 60, y: -130 },
            { id: "t16", type: 1, direction: 5, x: 180, y: -130 }
        ],
        // parts: 零件长龙从链头到链尾的连续颜色段，可配置任意段数和总数量。
        // type 与坦克 type 完全一致：1=绿，2=蓝，3=紫，4=橙。
        // count 只表示该颜色连续出现的零件数量，容量仍读取 TankTypeConfig.capacity。
        parts: [
            { type: 4, count: 2 },  // t01 橙
            { type: 2, count: 4 },  // t02 蓝
            { type: 1, count: 6 },  // t03 绿
            { type: 3, count: 10 }, // t04 紫
            { type: 2, count: 4 },  // t05 蓝
            { type: 1, count: 6 },  // t06 绿
            { type: 3, count: 10 }, // t07 紫
            { type: 4, count: 2 },  // t08 橙
            { type: 1, count: 6 },  // t09 绿
            { type: 3, count: 10 }, // t10 紫
            { type: 4, count: 2 },  // t11 橙
            { type: 2, count: 4 },  // t12 蓝
            { type: 3, count: 10 }, // t13 紫
            { type: 4, count: 2 },  // t14 橙
            { type: 2, count: 4 },  // t15 蓝
            { type: 1, count: 6 }   // t16 绿
        ]
    }
};

// 根据 tanks 顺序生成连续颜色段，供调试打印和缺失 parts 时的开发回退使用。
export function buildTankPartRunsFromTanks(tanks) {
    var runs = [];
    if (!Array.isArray(tanks)) {
        return runs;
    }
    for (var i = 0; i < tanks.length; i++) {
        var tank = tanks[i];
        var typeConfig = tank && TankTypeConfig[getTankTypeKey(tank.type)];
        if (!typeConfig) {
            continue;
        }
        var capacity = Math.max(1, Math.floor(Number(typeConfig.capacity) || 1));
        runs.push({ type: getTankTypeValue(tank.type), count: capacity });
    }
    return runs;
}

// 将颜色段展开成运行时逐节颜色数组。
export function expandTankPartRuns(runs) {
    var parts = [];
    if (!Array.isArray(runs)) {
        return parts;
    }
    for (var i = 0; i < runs.length; i++) {
        var run = runs[i];
        var count = Math.max(0, Math.floor(Number(run && run.count) || 0));
        for (var index = 0; index < count; index++) {
            parts.push(run.type);
        }
    }
    return parts;
}

// 直接根据 tanks 生成运行时逐节颜色数组。
export function buildTankPartsFromTanks(tanks) {
    var parts = expandTankPartRuns(buildTankPartRunsFromTanks(tanks));
    return parts;
}

// 生成可直接粘贴到 Excel/WPS 的制表符分隔文本，一辆坦克对应一行。
export function buildTankExcelTsv(tanks, levelId) {
    var rows = [
        ["关卡ID", "坦克ID", "坦克类型", "颜色", "方向", "X", "Y", "容量", "零件顺序", "零件类型", "零件数量"].join("\t")
    ];
    var colorNames = { 1: "绿", 2: "蓝", 3: "紫", 4: "橙" };
    if (!Array.isArray(tanks)) {
        return rows.join("\n");
    }
    for (var i = 0; i < tanks.length; i++) {
        var tank = tanks[i];
        var type = getTankTypeValue(tank && tank.type);
        var typeConfig = TankTypeConfig[getTankTypeKey(type)];
        var capacity = typeConfig ? Math.max(1, Math.floor(Number(typeConfig.capacity) || 1)) : "";
        rows.push([
            levelId,
            tank && tank.id,
            type,
            colorNames[type] || "",
            tank && tank.direction,
            tank && tank.x,
            tank && tank.y,
            capacity,
            i + 1,
            type,
            capacity
        ].join("\t"));
    }
    return rows.join("\n");
}

// 运行时统一入口。
// 返回值 = 通用配置 TankWaitingBoardCommonConfig + 当前关卡配置。
// 当前关卡配置 tanks/parts，并自动继承通用 board/moveSpeed/碰撞参数/visualScale。
// 如果某个关卡确实需要特殊参数，也可以在该关卡块里覆盖同名字段。
export function getTankWaitingBoardConfig(levelId) {
    var levelConfig = TankWaitingBoardByLevel[levelId] || TankWaitingBoardByLevel["" + levelId] || null;
    if (!levelConfig) {
        return null;
    }
    return Object.assign({}, TankWaitingBoardCommonConfig, levelConfig, {
        board: Object.assign({}, TankWaitingBoardCommonConfig.board, levelConfig.board || {})
    });
}
