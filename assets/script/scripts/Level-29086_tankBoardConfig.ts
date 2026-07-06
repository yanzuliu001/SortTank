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

// 关卡表中的坦克编号。编号只负责标识颜色，运行时会转换成 TankBoardTankType。
export const TankBoardTankCodeByType = {
    1: 10001,
    2: 10011,
    3: 10021,
    4: 10031
};

export const TankBoardTankTypeByCode = {
    10001: 1,
    10011: 2,
    10021: 3,
    10031: 4
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

// 等待区通用配置。关卡本身只配置 i/t/d/c/pt/pn，运行时在读取入口转换成 tanks/parts。
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
    // i: 流程关卡ID。
    // t: 坦克编号，10001=绿、10011=蓝、10021=紫、10031=橙。
    // d: 与 t 一一对应的方向编号。
    // c: 与 t 一一对应的 carRoot 本地坐标 [x, y]。
    // pt/pn: 零件颜色和连续数量，两组数组一一对应。
    1: {
        i: 1,
        t: [10031, 10011, 10001, 10021, 10011, 10001, 10021, 10031, 10001, 10021, 10031, 10011, 10021, 10031, 10011, 10001],
        d: [2, 2, 3, 0, 1, 4, 6, 5, 0, 7, 7, 3, 1, 4, 6, 5],
        c: [[-180, 170], [-60, 170], [60, 170], [180, 170], [-180, 70], [-60, 70], [60, 70], [180, 70], [-180, -20], [-60, -20], [60, -20], [180, -20], [-180, -130], [-60, -130], [60, -130], [180, -130]],
        pt: [4, 2, 1, 3, 2, 1, 3, 4, 1, 3, 4, 2, 3, 4, 2, 1],
        pn: [2, 4, 6, 10, 4, 6, 10, 2, 6, 10, 2, 4, 10, 2, 4, 6]
    }
};

// 当前只接第一关：流程关卡1对应资源关卡 zqddn_zhb_level-10001（运行时ID为-10001）。
export const TankWaitingBoardLevelIdMap = {
    1: 1,
    10001: 1,
    "-10001": 1
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

export function getTankWaitingBoardLevelConfigId(levelId) {
    return TankWaitingBoardLevelIdMap["" + levelId] || null;
}

export function getTankWaitingBoardCompactConfig(levelId) {
    var configId = getTankWaitingBoardLevelConfigId(levelId);
    return configId ? TankWaitingBoardByLevel[configId] || null : null;
}

function isTankCompactInteger(value) {
    return "number" == typeof value && isFinite(value) && Math.floor(value) == value;
}

// 返回空数组表示配置合法；错误文本同时供运行时日志和离线验证使用。
export function validateTankWaitingBoardCompactConfig(config) {
    var errors = [];
    if (!config || !isTankCompactInteger(config.i) || config.i <= 0) {
        return ["Invalid compact level id"];
    }
    var tankFields = ["t", "d", "c"];
    for (var fieldIndex = 0; fieldIndex < tankFields.length; fieldIndex++) {
        var field = tankFields[fieldIndex];
        if (!Array.isArray(config[field])) {
            errors.push("Compact field must be an array: " + field);
        }
    }
    if (errors.length) {
        return errors;
    }
    if (!config.t.length || config.t.length != config.d.length || config.t.length != config.c.length) {
        errors.push("Compact t/d/c lengths must match and not be empty");
    }
    if (!Array.isArray(config.pt) || !Array.isArray(config.pn)) {
        errors.push("Compact pt/pn must be arrays");
    } else if (!config.pt.length || config.pt.length != config.pn.length) {
        errors.push("Compact pt/pn lengths must match and not be empty");
    }
    for (var tankIndex = 0; tankIndex < config.t.length; tankIndex++) {
        if (!isTankCompactInteger(config.t[tankIndex]) || !TankBoardTankTypeByCode[config.t[tankIndex]]) {
            errors.push("Unknown tank code @ t[" + tankIndex + "]: " + config.t[tankIndex]);
        }
        if (!isTankCompactInteger(config.d[tankIndex]) || config.d[tankIndex] < 0 || config.d[tankIndex] > 7) {
            errors.push("Invalid direction @ d[" + tankIndex + "]: " + config.d[tankIndex]);
        }
        var position = config.c[tankIndex];
        if (
            !Array.isArray(position) ||
            position.length != 2 ||
            !isFinite(Number(position[0])) ||
            !isFinite(Number(position[1]))
        ) {
            errors.push("Invalid position @ c[" + tankIndex + "]");
        }
    }
    if (Array.isArray(config.pt) && Array.isArray(config.pn)) {
        for (var partIndex = 0; partIndex < config.pt.length; partIndex++) {
            if (!isTankCompactInteger(config.pt[partIndex]) || !TankBoardTankTypeKey[config.pt[partIndex]]) {
                errors.push("Invalid part type @ pt[" + partIndex + "]: " + config.pt[partIndex]);
            }
            if (!isTankCompactInteger(config.pn[partIndex]) || config.pn[partIndex] <= 0) {
                errors.push("Invalid part count @ pn[" + partIndex + "]: " + config.pn[partIndex]);
            }
        }
    }
    return errors;
}

export function buildTankRuntimeTanksFromCompact(config) {
    var tanks = [];
    for (var i = 0; i < config.t.length; i++) {
        tanks.push({
            id: "t" + (i + 1 < 10 ? "0" : "") + (i + 1),
            type: TankBoardTankTypeByCode[config.t[i]],
            direction: config.d[i],
            x: Number(config.c[i][0]),
            y: Number(config.c[i][1])
        });
    }
    return tanks;
}

export function buildTankRuntimePartsFromCompact(config) {
    var parts = [];
    for (var i = 0; i < config.pt.length; i++) {
        parts.push({ type: config.pt[i], count: config.pn[i] });
    }
    return parts;
}

function formatTankCompactNumber(value) {
    return "" + Number(Number(value).toFixed(3));
}

// 调试布局打印格式；pt/pn根据当前坦克顺序和对应容量重新生成。
export function buildTankCompactConfigText(tanks, levelId) {
    var configId = getTankWaitingBoardLevelConfigId(levelId);
    if (!configId || !Array.isArray(tanks) || !tanks.length) {
        return null;
    }
    var tankCodes = [];
    var directions = [];
    var positions = [];
    var partTypes = [];
    var partCounts = [];
    for (var i = 0; i < tanks.length; i++) {
        var tank = tanks[i];
        var type = getTankTypeValue(tank && tank.type);
        var tankCode = TankBoardTankCodeByType[type];
        var typeConfig = TankTypeConfig[getTankTypeKey(type)];
        if (
            !tankCode ||
            !typeConfig ||
            !isTankCompactInteger(tank.direction) ||
            tank.direction < 0 ||
            tank.direction > 7 ||
            !isFinite(Number(tank.x)) ||
            !isFinite(Number(tank.y))
        ) {
            return null;
        }
        tankCodes.push(tankCode);
        directions.push(tank.direction);
        positions.push("{" + formatTankCompactNumber(tank.x) + "," + formatTankCompactNumber(tank.y) + "}");
        partTypes.push(type);
        partCounts.push(Math.max(1, Math.floor(Number(typeConfig.capacity) || 1)));
    }
    return (
        "{i=" + configId +
        ",t={" + tankCodes.join(",") + "}" +
        ",d={" + directions.join(",") + "}" +
        ",c={" + positions.join(",") + "}" +
        ",pt={" + partTypes.join(",") + "}" +
        ",pn={" + partCounts.join(",") + "}},"
    );
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

// 运行时统一入口：紧凑配置只在这里转换成现有 TankBoard/长龙逻辑使用的 tanks/parts。
export function getTankWaitingBoardConfig(levelId) {
    var levelConfig = getTankWaitingBoardCompactConfig(levelId);
    if (!levelConfig) {
        return null;
    }
    var errors = validateTankWaitingBoardCompactConfig(levelConfig);
    if (errors.length) {
        console.error("Invalid tank waiting board compact config:", levelId, errors);
        return null;
    }
    return Object.assign({}, TankWaitingBoardCommonConfig, levelConfig, {
        board: Object.assign({}, TankWaitingBoardCommonConfig.board, levelConfig.board || {}),
        tanks: buildTankRuntimeTanksFromCompact(levelConfig),
        parts: buildTankRuntimePartsFromCompact(levelConfig)
    });
}
