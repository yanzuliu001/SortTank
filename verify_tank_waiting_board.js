#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const CONFIG_FILE = path.join(ROOT, "assets/script/scripts/Level-29086_tankBoardConfig.ts");
const BGC_CONFIG_FILE = path.join(ROOT, "assets/resources/sortTankConfig/bgcCfg.ts");
const TROOPS_CONFIG_FILE = path.join(ROOT, "assets/resources/sortTankConfig/troopsCfg.ts");
const ASSEMBLY_CONFIG_FILE = path.join(ROOT, "assets/script/scripts/Level-29086_config.ts");
const HIT_POLYGON_FILE = path.join(ROOT, "assets/script/scripts/Level-29086_tankHitPolygons.ts");
const PREFAB_FILE = path.join(ROOT, "assets/resources/zqddn_zhb/prefab/level/zqddn_zhb_level-1.prefab");
const TEXTURE_DIR = path.join(ROOT, "assets/resources/zqddn_zhb/texture/tank");
const ARROW_TEXTURE_DIR = path.join(ROOT, "assets/resources/zqddn_zhb/texture/sorttank");
const LEVEL_ID = process.argv[2] || "1";

if (LEVEL_ID === "1" && !fs.existsSync(PREFAB_FILE)) {
    console.error("Missing first-level prefab: " + PREFAB_FILE);
    console.error("Rename the existing first-level prefab to zqddn_zhb_level-1 in Cocos Creator first.");
    process.exit(1);
}

function loadGeneratedConfig(file, exportName) {
    const source = fs.readFileSync(file, "utf8")
        .replace(/export const /g, "const ")
        .replace(/\s+as const;/g, ";")
        .replace(new RegExp("export default\\s+" + exportName + "\\s*;"), "");
    return new Function(source + "\nreturn " + exportName + ";")();
}

const bgcCfg = loadGeneratedConfig(BGC_CONFIG_FILE, "bgcCfg");
const troopsCfg = loadGeneratedConfig(TROOPS_CONFIG_FILE, "troopsCfg");

function loadConfigModule() {
    const source = fs.readFileSync(CONFIG_FILE, "utf8")
        .replace(/export const /g, "const ")
        .replace(/export enum TankBoardTankType\s*{([\s\S]*?)}/, "const TankBoardTankType = { Green: 1, Blue: 2, Purple: 3, Orange: 4 };")
        .replace(/export function /g, "function ");
    return new Function(
        "require",
        source +
            "\nreturn { TankDirectionVector, TankDirectionAngle, TankBoardTankType, TankBoardTankTypeKey, TankBoardTankTypeValue, TankBoardDefaultTankAidByType, TankBoardTankTypeByAid, getTankTypeKey, getTankTypeValue, TankTypeConfig, TankWaitingBoardCommonConfig, TankWaitingBoardByLevel, getTankWaitingBoardLevelIds, getNextTankWaitingBoardLevelId, buildTankPartRunsFromTanks, expandTankPartRuns, buildTankPartsFromTanks, getTankWaitingBoardCompactConfig, validateTankWaitingBoardCompactConfig, buildTankRuntimeTanksFromCompact, buildTankRuntimePartsFromCompact, buildTankCompactConfigText, buildTankExcelTsv, getTankWaitingBoardConfig };"
    )(request => {
        if (/sortTankConfig\/bgcCfg$/.test(request)) return { bgcCfg, default: bgcCfg };
        if (/sortTankConfig\/troopsCfg$/.test(request)) return { troopsCfg, default: troopsCfg };
        throw new Error("Unexpected config require: " + request);
    });
}

const moduleData = loadConfigModule();
const assemblyModuleData = new Function(
    fs.readFileSync(ASSEMBLY_CONFIG_FILE, "utf8").replace(/export const /g, "const ") +
        "\nreturn { TankAssemblyTypes, TankAssemblyConveyorConfig };"
)();
const hitPolygonData = new Function(
    fs.readFileSync(HIT_POLYGON_FILE, "utf8").replace(/export const /g, "const ") +
        "\nreturn TankHitPolygonByAsset;"
)();
const config = moduleData.getTankWaitingBoardConfig(LEVEL_ID);
const compactConfig = moduleData.getTankWaitingBoardCompactConfig(LEVEL_ID);
if (!config) {
    console.error("Missing tank waiting board config: " + LEVEL_ID);
    process.exit(1);
}

const vec = (x, y) => ({ x, y });
const add = (a, b) => vec(a.x + b.x, a.y + b.y);
const sub = (a, b) => vec(a.x - b.x, a.y - b.y);
const mul = (a, value) => vec(a.x * value, a.y * value);
const length = value => Math.hypot(value.x, value.y);
const dot = (a, b) => a.x * b.x + a.y * b.y;

function loadRoadY() {
    if (LEVEL_ID !== "1" || !fs.existsSync(PREFAB_FILE)) return config.board.top;
    const prefab = JSON.parse(fs.readFileSync(PREFAB_FILE, "utf8"));
    const carRoot = prefab.find(node => node && node.__type__ === "cc.Node" && node._name === "carRoot");
    const road = prefab.find(node => node && node.__type__ === "cc.Node" && node._name === "14=road");
    if (!carRoot || !road || !carRoot._parent || !road._parent || carRoot._parent.__id__ !== road._parent.__id__) {
        return config.board.top;
    }
    return road._trs.array[1] - carRoot._trs.array[1];
}

const roadY = loadRoadY();

function bodyLocalPolygon(tank, direction) {
    const type = moduleData.TankTypeConfig[moduleData.getTankTypeKey(tank.type)];
    const body = type.body;
    const halfWidth = body.width / 2;
    const halfLength = body.length / 2;
    const corner = Math.max(0, Math.min(body.corner || 0, halfWidth, halfLength));
    const points = [
        vec(-halfWidth + corner, halfLength),
        vec(halfWidth - corner, halfLength),
        vec(halfWidth, halfLength - corner),
        vec(halfWidth, -halfLength + corner),
        vec(halfWidth - corner, -halfLength),
        vec(-halfWidth + corner, -halfLength),
        vec(-halfWidth, -halfLength + corner),
        vec(-halfWidth, halfLength - corner)
    ];
    const angle = (moduleData.TankDirectionAngle[direction] || 0) * Math.PI / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return points.map(point => vec(point.x * cos - point.y * sin, point.x * sin + point.y * cos));
}

function bodyPolygon(tank, position, direction) {
    return bodyLocalPolygon(tank, direction == null ? tank.direction : direction)
        .map(point => add(position || tank, point));
}

function getChainCounts() {
    const counts = {};
    for (const run of config.parts || []) {
        if (!run) continue;
        counts[run.type] = (counts[run.type] || 0) + (Number(run.count) || 0);
    }
    return counts;
}

function polygonsIntersect(a, b) {
    for (const polygon of [a, b]) {
        for (let i = 0; i < polygon.length; i++) {
            const edge = sub(polygon[(i + 1) % polygon.length], polygon[i]);
            const normalLength = Math.hypot(edge.x, edge.y) || 1;
            const axis = vec(-edge.y / normalLength, edge.x / normalLength);
            const projectionA = a.map(point => dot(point, axis));
            const projectionB = b.map(point => dot(point, axis));
            if (Math.max(...projectionA) < Math.min(...projectionB) || Math.max(...projectionB) < Math.min(...projectionA)) {
                return false;
            }
        }
    }
    return true;
}

function firstBoundaryHit(start, direction) {
    const values = moduleData.TankDirectionVector[direction];
    const directionVector = vec(values[0], values[1]);
    const hits = [];
    const epsilon = 0.0001;
    if (directionVector.x < -epsilon) hits.push({ edge: "left", time: (config.board.left - start.x) / directionVector.x });
    if (directionVector.x > epsilon) hits.push({ edge: "right", time: (config.board.right - start.x) / directionVector.x });
    if (directionVector.y < -epsilon) hits.push({ edge: "bottom", time: (config.board.bottom - start.y) / directionVector.y });
    if (directionVector.y > epsilon) hits.push({ edge: "top", time: (config.board.top - start.y) / directionVector.y });
    hits.sort((a, b) => a.time - b.time);
    const hit = hits.find(value => value.time >= 0);
    return {
        edge: hit.edge,
        position: add(start, mul(directionVector, hit.time))
    };
}

function compactSegments(segments, start) {
    const result = [];
    let current = start;
    for (const segment of segments) {
        if (length(sub(segment.to, current)) > 0.1) {
            result.push(segment);
            current = segment.to;
        }
    }
    return result;
}

function routeCandidates(tank) {
    const start = vec(tank.x, tank.y);
    const hit = firstBoundaryHit(start, tank.direction);
    const first = { to: hit.position, direction: tank.direction };
    if (hit.edge === "bottom") {
        const leftDistance = Math.abs(hit.position.x - config.board.left);
        const rightDistance = Math.abs(config.board.right - hit.position.x);
        const preferred = leftDistance < rightDistance ? -1 : 1;
        return [preferred, -preferred].map(side => {
            const sideX = side < 0 ? config.board.left : config.board.right;
            return compactSegments([
                first,
                { to: vec(sideX, hit.position.y), direction: side < 0 ? 1 : 5 },
                { to: vec(sideX, roadY), direction: 2 }
            ], start);
        });
    }
    return [compactSegments([first, { to: vec(hit.position.x, roadY), direction: 2 }], start)];
}

function turnEnvelope(tank, position) {
    const body = moduleData.TankTypeConfig[moduleData.getTankTypeKey(tank.type)].body;
    const radius = Math.sqrt(body.width * body.width + body.length * body.length) / 2;
    const sides = Math.max(8, config.turnEnvelopeSides || 16);
    return Array.from({ length: sides }, (_, index) => {
        const angle = Math.PI * 2 * index / sides;
        return vec(position.x + Math.cos(angle) * radius, position.y + Math.sin(angle) * radius);
    });
}

function routeBlocked(tank, route, blockers) {
    let current = vec(tank.x, tank.y);
    let previousDirection = tank.direction;
    const sampleStep = Math.max(2, config.collisionSampleStep || 6);
    for (const segment of route) {
        if (segment.direction !== previousDirection) {
            const envelope = turnEnvelope(tank, current);
            if (blockers.some(blocker => polygonsIntersect(envelope, bodyPolygon(blocker)))) return true;
        }
        const delta = sub(segment.to, current);
        const steps = Math.max(1, Math.ceil(length(delta) / sampleStep));
        for (let step = 1; step <= steps; step++) {
            const moving = bodyPolygon(tank, add(current, mul(delta, step / steps)), segment.direction);
            if (blockers.some(blocker => polygonsIntersect(moving, bodyPolygon(blocker)))) return true;
        }
        current = segment.to;
        previousDirection = segment.direction;
    }
    return false;
}

function canExit(tank, remaining) {
    const blockers = remaining.filter(candidate => candidate !== tank);
    return routeCandidates(tank).some(route => !routeBlocked(tank, route, blockers));
}

function validate() {
    const errors = [];
    const formalLevelIds = moduleData.getTankWaitingBoardLevelIds();
    if (JSON.stringify(formalLevelIds) !== JSON.stringify([1, 2])) {
        errors.push("Formal tank level sequence mismatch: " + JSON.stringify(formalLevelIds));
    }
    if (moduleData.getNextTankWaitingBoardLevelId(1) !== 2) {
        errors.push("Formal next level after 1 must be 2");
    }
    if (moduleData.getNextTankWaitingBoardLevelId(2) !== null) {
        errors.push("Formal level 2 must be the final level");
    }
    if (LEVEL_ID === "1") {
        const prefab = JSON.parse(fs.readFileSync(PREFAB_FILE, "utf8"));
        const rootNode = prefab.find(node => node && node.__type__ === "cc.Node" && !node._parent);
        const levelControl = prefab.find(node => node && Object.prototype.hasOwnProperty.call(node, "levelID"));
        if (!rootNode || rootNode._name !== "zqddn_zhb_level-1") {
            errors.push("First-level prefab root must be named zqddn_zhb_level-1");
        }
        if (!levelControl || levelControl.levelID !== 1) {
            errors.push("First-level prefab Level-29086_control.levelID must be 1");
        }
    }
    if (!compactConfig) {
        errors.push("Missing compact config: " + LEVEL_ID);
    } else {
        errors.push(...moduleData.validateTankWaitingBoardCompactConfig(compactConfig));
        if (LEVEL_ID === "1" && compactConfig.i !== 1) errors.push("First compact level id must be 1");
        if (LEVEL_ID === "1" && compactConfig.t.length !== 16) errors.push("First compact tank amount must be 16");
        if (compactConfig.pt.length !== compactConfig.pn.length) errors.push("Compact pt/pn length mismatch");
        for (let index = 0; index < compactConfig.t.length; index++) {
            const tank = config.tanks[index];
            const position = compactConfig.c[index];
            if (
                tank.aid !== compactConfig.t[index] ||
                tank.type !== moduleData.TankBoardTankTypeByAid[compactConfig.t[index]] ||
                tank.partType !== compactConfig.pt[index] ||
                tank.capacity !== compactConfig.pn[index] ||
                tank.direction !== compactConfig.d[index] ||
                tank.x !== position[0] ||
                tank.y !== position[1]
            ) {
                errors.push("Compact tank conversion mismatch @ " + index);
            }
        }
        for (let index = 0; index < compactConfig.pt.length; index++) {
            const run = config.parts[index];
            if (!run || run.type !== compactConfig.pt[index] || run.count !== compactConfig.pn[index]) {
                errors.push("Compact part conversion mismatch @ " + index);
            }
        }
    }
    const ids = new Set();
    for (const tank of config.tanks) {
        if (!tank.id || ids.has(tank.id)) errors.push("Duplicate or empty id: " + tank.id);
        ids.add(tank.id);
        if (!moduleData.TankTypeConfig[moduleData.getTankTypeKey(tank.type)]) {
            errors.push("Unknown type: " + tank.type + " @ " + tank.id);
        }
        if (!tank.aid || !bgcCfg.tankList[tank.aid] || !troopsCfg.tList[tank.aid]) {
            errors.push("Unknown formal tank aid: " + tank.aid + " @ " + tank.id);
        }
        if (!Number.isInteger(tank.capacity) || tank.capacity <= 0) {
            errors.push("Invalid runtime capacity: " + tank.capacity + " @ " + tank.id);
        }
        if (!Number.isInteger(tank.direction) || tank.direction < 0 || tank.direction > 7) {
            errors.push("Invalid direction: " + tank.direction + " @ " + tank.id);
        }
        if (tank.x < config.board.left || tank.x > config.board.right || tank.y < config.board.bottom || tank.y > config.board.top) {
            errors.push("Outside board: " + tank.id);
        }
    }

    for (const typeName of Object.keys(moduleData.TankTypeConfig)) {
        const type = moduleData.TankTypeConfig[typeName];
        if (type.colorId !== moduleData.TankBoardTankTypeValue[typeName]) {
            errors.push(
                "Tank type/colorId mismatch: " + typeName +
                " type=" + moduleData.TankBoardTankTypeValue[typeName] +
                ", colorId=" + type.colorId
            );
        }
        if (!Number.isFinite(type.capacity) || type.capacity <= 0) {
            errors.push("Invalid capacity: " + typeName);
        }
        if (!type.body || !Number.isFinite(type.body.width) || !Number.isFinite(type.body.length) ||
            type.body.width <= 0 || type.body.length <= 0) {
            errors.push("Invalid body profile: " + typeName);
        }
        for (let direction = 0; direction < 8; direction++) {
            const file = path.join(TEXTURE_DIR, type.assetPrefix + "_" + direction + ".png");
            if (!fs.existsSync(file)) errors.push("Missing asset: " + path.basename(file));
            const assetName = type.assetPrefix + "_" + direction;
            if (!hitPolygonData[assetName] || hitPolygonData[assetName].length < 3) {
                errors.push("Missing alpha hit polygon: " + assetName);
            }
        }
    }
    for (let direction = 0; direction < 8; direction++) {
        const file = path.join(ARROW_TEXTURE_DIR, "tank_arrow_" + direction + ".png");
        if (!fs.existsSync(file)) errors.push("Missing arrow asset: " + path.basename(file));
    }

    for (let i = 0; i < config.tanks.length; i++) {
        for (let j = i + 1; j < config.tanks.length; j++) {
            if (polygonsIntersect(bodyPolygon(config.tanks[i]), bodyPolygon(config.tanks[j]))) {
                errors.push("Initial body overlap: " + config.tanks[i].id + " / " + config.tanks[j].id);
            }
        }
    }

    const conveyor = assemblyModuleData.TankAssemblyConveyorConfig;
    const validColors = new Set(assemblyModuleData.TankAssemblyTypes.map(type => type.colorId));
    if (!Array.isArray(config.parts) || !config.parts.length) {
        errors.push("Missing or empty parts config: " + LEVEL_ID);
    } else {
        config.parts.forEach((run, index) => {
            if (!run || !Number.isInteger(run.type) || !validColors.has(run.type)) {
                errors.push("Invalid part type: " + (run && run.type) + " @ parts[" + index + "]");
            }
            if (!run || !Number.isInteger(run.count) || run.count <= 0) {
                errors.push("Invalid part count: " + (run && run.count) + " @ parts[" + index + "]");
            }
        });
    }
    const chainCounts = getChainCounts();
    const demandCounts = {};
    for (const tank of config.tanks) {
        if (moduleData.TankTypeConfig[moduleData.getTankTypeKey(tank.type)]) {
            demandCounts[tank.partType] = (demandCounts[tank.partType] || 0) + tank.capacity;
        }
    }
    for (const type of assemblyModuleData.TankAssemblyTypes) {
        if ((chainCounts[type.colorId] || 0) !== (demandCounts[type.colorId] || 0)) {
            errors.push(
                "Chain demand mismatch colorId " + type.colorId +
                ": chain=" + (chainCounts[type.colorId] || 0) +
                ", demand=" + (demandCounts[type.colorId] || 0)
            );
        }
    }
    if (!Number.isFinite(conveyor.chainSpacing) || conveyor.chainSpacing <= 0) {
        errors.push("Invalid chainSpacing: " + conveyor.chainSpacing);
    }
    if (conveyor.perParkingConcurrency !== 1) {
        errors.push("perParkingConcurrency must be 1: " + conveyor.perParkingConcurrency);
    }
    const generatedParts = moduleData.buildTankPartsFromTanks(config.tanks);
    const generatedCounts = {};
    for (const colorId of generatedParts) generatedCounts[colorId] = (generatedCounts[colorId] || 0) + 1;
    for (const type of assemblyModuleData.TankAssemblyTypes) {
        if ((generatedCounts[type.colorId] || 0) !== (demandCounts[type.colorId] || 0)) {
            errors.push("Generated parts mismatch colorId " + type.colorId);
        }
    }
    const compactText = moduleData.buildTankCompactConfigText(config.tanks, LEVEL_ID);
    if (
        !compactText ||
        !compactText.startsWith('{i=' + LEVEL_ID + ',t={"a') ||
        !compactText.includes(JSON.stringify(compactConfig.t[0])) ||
        !compactText.endsWith("},")
    ) {
        errors.push("Compact print format mismatch");
    }
    if (moduleData.buildTankCompactConfigText(config.tanks, "-1") !== null) {
        errors.push("Negative compact print level should return null");
    }
    const excelRows = moduleData.buildTankExcelTsv(config.tanks, LEVEL_ID).split("\n");
    if (excelRows.length !== config.tanks.length + 1) {
        errors.push("Excel TSV row count mismatch: " + excelRows.length);
    }
    for (let rowIndex = 0; rowIndex < excelRows.length; rowIndex++) {
        const columns = excelRows[rowIndex].split("\t");
        if (columns.length !== 11) {
            errors.push("Excel TSV column count mismatch @ row " + rowIndex + ": " + columns.length);
        }
    }
    if (config.tanks.length) {
        const firstTank = config.tanks[0];
        const firstColumns = excelRows[1].split("\t");
        if (
            firstColumns[0] !== LEVEL_ID ||
            firstColumns[1] !== firstTank.aid ||
            Number(firstColumns[2]) !== firstTank.type ||
            Number(firstColumns[4]) !== firstTank.direction ||
            Number(firstColumns[5]) !== firstTank.x ||
            Number(firstColumns[6]) !== firstTank.y ||
            Number(firstColumns[7]) !== firstTank.capacity ||
            Number(firstColumns[8]) !== 1 ||
            Number(firstColumns[9]) !== firstTank.partType ||
            Number(firstColumns[10]) !== firstTank.capacity
        ) {
            errors.push("Excel TSV first tank data mismatch: " + firstTank.id);
        }
    }
    return errors;
}

function solve(remaining, memo) {
    if (!remaining.length) return [];
    const key = remaining.map(tank => tank.id).sort().join(",");
    if (memo.has(key)) return null;
    memo.add(key);
    for (const tank of remaining) {
        if (!canExit(tank, remaining)) continue;
        const next = remaining.filter(candidate => candidate !== tank);
        const tail = solve(next, memo);
        if (tail) return [tank.id].concat(tail);
    }
    return null;
}

const errors = validate();
if (errors.length) {
    console.error("Tank waiting board config failed:");
    errors.forEach(error => console.error("- " + error));
    process.exit(1);
}

const solution = solve(config.tanks.slice(), new Set());
if (!solution) {
    console.error("No complete exit order found for " + LEVEL_ID);
    process.exit(1);
}

console.log("Tank waiting board config OK: " + LEVEL_ID);
console.log("Tanks: " + config.tanks.length);
const chainCounts = getChainCounts();
console.log("Chain parts: " + Object.values(chainCounts).reduce((sum, count) => sum + count, 0));
console.log("Chain colors: " + JSON.stringify(chainCounts));
console.log("Solution: " + solution.join(" -> "));
