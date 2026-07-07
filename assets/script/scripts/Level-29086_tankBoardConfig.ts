// @ts-nocheck

const $bgcCfgModule = require("../../resources/sortTankConfig/bgcCfg");
const $troopsCfgModule = require("../../resources/sortTankConfig/troopsCfg");

const BGC_CONFIG = $bgcCfgModule.default || $bgcCfgModule.bgcCfg;
const TROOPS_CONFIG = $troopsCfgModule.default || $troopsCfgModule.troopsCfg;

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

// 调试区只选择颜色，没有具体 AID，因此为四种颜色提供默认坦克 AID。
export const TankBoardDefaultTankAidByType = {
    1: "a10001",
    2: "a10011",
    3: "a10021",
    4: "a10031"
};

// 正式坦克 AID -> 本玩法颜色类型。颜色取 bgcCfg.tankList[aid].pt。
export const TankBoardTankTypeByAid = buildTankTypeByAid(BGC_CONFIG && BGC_CONFIG.tankList);

function buildTankTypeByAid(tankList) {
    var result = {};
    var aids = Object.keys(tankList || {});
    for (var i = 0; i < aids.length; i++) {
        var aid = aids[i];
        var type = Number(tankList[aid] && tankList[aid].pt);
        if (TankBoardTankTypeKey[type]) {
            result[aid] = type;
        }
    }
    return result;
}

export function getTankTypeKey(type) {
    return "number" == typeof type ? TankBoardTankTypeKey[type] : type;
}

export function getTankTypeValue(type) {
    return "number" == typeof type ? type : TankBoardTankTypeValue[type];
}

// key 是内部坦克类型名，也是 debugLayer 的颜色分组名。
export const TankTypeConfig = {
    // yellow: 橙/黄坦克，type/colorId=4；capacity 仅作为调试区新建坦克的默认容量。
    yellow: {
        // assetPrefix: 对应 assets/resources/zqddn_zhb/texture/tank 下的贴图前缀。
        // direction=2 时会加载 tank_yellow_a_2。
        assetPrefix: "tank_yellow_a",
        // colorId: 装配台统计和零件匹配编号，必须与该颜色的 TankBoardTankType 数值一致。
        colorId: 4,
        // 正式关卡中每辆坦克的实际容量读取 bgcCfg.leveList 对应位置的 pn。
        capacity: 2,
        // body: 逻辑碰撞体尺寸；只影响路径阻挡检测，不跟视觉缩放联动。
        // width=车身宽，length=车身长，corner=矩形削角大小。
        body: { width: 48, length: 62, corner: 6 }
    },
    // blue: 蓝色坦克，type/colorId=2；正式容量读取关卡 pn。
    blue: {
        assetPrefix: "tank_blue_a",
        colorId: 2,
        capacity: 4,
        body: { width: 48, length: 62, corner: 6 }
    },
    // green: 绿色坦克，type/colorId=1；正式容量读取关卡 pn。
    green: {
        assetPrefix: "tank_green_a",
        colorId: 1,
        capacity: 6,
        body: { width: 48, length: 62, corner: 6 }
    },
    // purple: 紫色坦克，type/colorId=3；正式容量读取关卡 pn。
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

// bgcCfg.leveList 是正式关卡源；这里仅建立按 i 查询的运行时索引，不复制关卡数据。
export const TankWaitingBoardByLevel = buildTankWaitingBoardLevelIndex(BGC_CONFIG && BGC_CONFIG.leveList);

function buildTankWaitingBoardLevelIndex(levels) {
    var result = {};
    if (!Array.isArray(levels)) {
        return result;
    }
    for (var i = 0; i < levels.length; i++) {
        var level = levels[i];
        if (level && isTankCompactInteger(Number(level.i)) && Number(level.i) > 0) {
            result[Number(level.i)] = level;
        }
    }
    return result;
}

export function getTankWaitingBoardLevelIds() {
    return Object.keys(TankWaitingBoardByLevel)
        .map(function (levelId) {
            return Number(levelId);
        })
        .filter(function (levelId) {
            return isTankCompactInteger(levelId) && levelId > 0;
        })
        .sort(function (a, b) {
            return a - b;
        });
}

export function getNextTankWaitingBoardLevelId(levelId) {
    var currentId = Number(levelId);
    var levelIds = getTankWaitingBoardLevelIds();
    for (var i = 0; i < levelIds.length; i++) {
        if (levelIds[i] > currentId) {
            return levelIds[i];
        }
    }
    return null;
}

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
        var partType = getTankTypeValue(null != tank.partType ? tank.partType : tank.type);
        var capacity = Math.max(1, Math.floor(Number(tank.capacity) || Number(typeConfig.capacity) || 1));
        runs.push({ type: partType, count: capacity });
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

export function getTankWaitingBoardCompactConfig(levelId) {
    var configId = Number(levelId);
    return isTankCompactInteger(configId) && configId > 0
        ? TankWaitingBoardByLevel[configId] || null
        : null;
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
    } else if (config.pt.length != config.t.length) {
        errors.push("Compact t/pt/pn lengths must match");
    }
    for (var tankIndex = 0; tankIndex < config.t.length; tankIndex++) {
        var aid = config.t[tankIndex];
        var tankType = TankBoardTankTypeByAid[aid];
        if ("string" != typeof aid || !tankType || !(BGC_CONFIG.tankList && BGC_CONFIG.tankList[aid])) {
            errors.push("Unknown tank aid @ t[" + tankIndex + "]: " + aid);
        } else {
            if (!(TROOPS_CONFIG.tList && TROOPS_CONFIG.tList[aid])) {
                errors.push("Missing troops config @ t[" + tankIndex + "]: " + aid);
            }
            if (Array.isArray(config.pt) && tankType != config.pt[tankIndex]) {
                errors.push("Tank aid/part type mismatch @ " + tankIndex + ": " + aid + "/" + config.pt[tankIndex]);
            }
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
            aid: config.t[i],
            type: TankBoardTankTypeByAid[config.t[i]],
            partType: config.pt[i],
            capacity: config.pn[i],
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
    var configId = Number(levelId);
    if (!isTankCompactInteger(configId) || configId <= 0 || !Array.isArray(tanks) || !tanks.length) {
        return null;
    }
    var tankAids = [];
    var directions = [];
    var positions = [];
    var partTypes = [];
    var partCounts = [];
    for (var i = 0; i < tanks.length; i++) {
        var tank = tanks[i];
        var type = getTankTypeValue(tank && tank.type);
        var tankAid = tank && tank.aid || TankBoardDefaultTankAidByType[type];
        var aidType = TankBoardTankTypeByAid[tankAid];
        var typeConfig = TankTypeConfig[getTankTypeKey(type)];
        var partType = getTankTypeValue(null != tank.partType ? tank.partType : type);
        var capacity = Math.max(1, Math.floor(Number(tank && tank.capacity) || Number(typeConfig && typeConfig.capacity) || 1));
        if (
            !tankAid ||
            aidType != type ||
            !typeConfig ||
            !TankBoardTankTypeKey[partType] ||
            !isTankCompactInteger(tank.direction) ||
            tank.direction < 0 ||
            tank.direction > 7 ||
            !isFinite(Number(tank.x)) ||
            !isFinite(Number(tank.y))
        ) {
            return null;
        }
        tankAids.push(JSON.stringify(tankAid));
        directions.push(tank.direction);
        positions.push("{" + formatTankCompactNumber(tank.x) + "," + formatTankCompactNumber(tank.y) + "}");
        partTypes.push(partType);
        partCounts.push(capacity);
    }
    return (
        "{i=" + configId +
        ",t={" + tankAids.join(",") + "}" +
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
        var capacity = typeConfig
            ? Math.max(1, Math.floor(Number(tank && tank.capacity) || Number(typeConfig.capacity) || 1))
            : "";
        var partType = getTankTypeValue(tank && null != tank.partType ? tank.partType : type);
        rows.push([
            levelId,
            tank && (tank.aid || tank.id),
            type,
            colorNames[type] || "",
            tank && tank.direction,
            tank && tank.x,
            tank && tank.y,
            capacity,
            i + 1,
            partType,
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
