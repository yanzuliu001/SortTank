#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const ROOT = __dirname;
const TEXTURE_DIR = path.join(ROOT, "assets/resources/zqddn_zhb/texture/tank");
const OUTPUT = path.join(ROOT, "assets/script/scripts/Level-29086_tankHitPolygons.ts");
const ALPHA_THRESHOLD = 10;
const MAX_POINTS = 12;

function readPng(file) {
    const buffer = fs.readFileSync(file);
    const signature = [137, 80, 78, 71, 13, 10, 26, 10];
    for (let i = 0; i < signature.length; i++) {
        if (buffer[i] !== signature[i]) throw new Error("Invalid PNG: " + file);
    }

    let offset = 8;
    let width = 0;
    let height = 0;
    let bitDepth = 0;
    let colorType = 0;
    const idat = [];
    while (offset < buffer.length) {
        const length = buffer.readUInt32BE(offset);
        const type = buffer.toString("ascii", offset + 4, offset + 8);
        const data = buffer.slice(offset + 8, offset + 8 + length);
        if (type === "IHDR") {
            width = data.readUInt32BE(0);
            height = data.readUInt32BE(4);
            bitDepth = data[8];
            colorType = data[9];
            if (data[12] !== 0) throw new Error("Interlaced PNG is unsupported: " + file);
        } else if (type === "IDAT") {
            idat.push(data);
        } else if (type === "IEND") {
            break;
        }
        offset += length + 12;
    }
    if (bitDepth !== 8 || colorType !== 6) {
        throw new Error("Only RGBA8 PNG is supported: " + file);
    }

    const raw = zlib.inflateSync(Buffer.concat(idat));
    const stride = width * 4;
    const pixels = Buffer.alloc(height * stride);
    const paeth = (a, b, c) => {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
    };

    let input = 0;
    for (let y = 0; y < height; y++) {
        const filter = raw[input++];
        for (let x = 0; x < stride; x++) {
            const value = raw[input++];
            const a = x >= 4 ? pixels[y * stride + x - 4] : 0;
            const b = y > 0 ? pixels[(y - 1) * stride + x] : 0;
            const c = x >= 4 && y > 0 ? pixels[(y - 1) * stride + x - 4] : 0;
            let decoded = value;
            if (filter === 1) decoded += a;
            else if (filter === 2) decoded += b;
            else if (filter === 3) decoded += (a + b) >> 1;
            else if (filter === 4) decoded += paeth(a, b, c);
            else if (filter !== 0) throw new Error("Unknown PNG filter " + filter);
            pixels[y * stride + x] = decoded & 0xff;
        }
    }
    return { width, height, pixels };
}

function convexHull(points) {
    const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    const sorted = points.slice().sort((a, b) => a.x - b.x || a.y - b.y);
    const lower = [];
    for (const point of sorted) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
            lower.pop();
        }
        lower.push(point);
    }
    const upper = [];
    for (let i = sorted.length - 1; i >= 0; i--) {
        const point = sorted[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
            upper.pop();
        }
        upper.push(point);
    }
    lower.pop();
    upper.pop();
    return lower.concat(upper);
}

function simplify(points, limit) {
    const result = points.slice();
    const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
    while (result.length > limit) {
        let removeIndex = 0;
        let smallestLoss = Infinity;
        for (let i = 0; i < result.length; i++) {
            const previous = result[(i - 1 + result.length) % result.length];
            const current = result[i];
            const next = result[(i + 1) % result.length];
            const loss = distance(previous, current) + distance(current, next) - distance(previous, next);
            if (loss < smallestLoss) {
                smallestLoss = loss;
                removeIndex = i;
            }
        }
        result.splice(removeIndex, 1);
    }
    return result;
}

function buildPolygon(file) {
    const png = readPng(file);
    const points = [];
    for (let y = 0; y < png.height; y++) {
        for (let x = 0; x < png.width; x++) {
            if (png.pixels[(y * png.width + x) * 4 + 3] > ALPHA_THRESHOLD) {
                points.push({ x: x - png.width / 2, y: png.height / 2 - y });
            }
        }
    }
    if (points.length < 3) throw new Error("No opaque pixels: " + file);
    return simplify(convexHull(points), MAX_POINTS).map(point => ({
        x: Math.round(point.x * 10) / 10,
        y: Math.round(point.y * 10) / 10
    }));
}

function generate() {
    const files = fs.readdirSync(TEXTURE_DIR)
        .filter(file => /^tank_(yellow|blue|green|purple)_a_[0-7]\.png$/.test(file))
        .sort();
    const polygons = {};
    for (const file of files) {
        polygons[path.basename(file, ".png")] = buildPolygon(path.join(TEXTURE_DIR, file));
    }
    const entries = Object.keys(polygons).map(name => {
        const points = polygons[name].map(point => `{ x: ${point.x}, y: ${point.y} }`).join(", ");
        return `    ${JSON.stringify(name)}: [${points}]`;
    });
    return "// Generated by generate_tank_hit_polygons.js.\n" +
        "// Click hit areas follow visible alpha pixels; gameplay collision uses a separate body profile.\n\n" +
        "export const TankHitPolygonByAsset = {\n" + entries.join(",\n") + "\n};\n";
}

const output = generate();
if (process.argv.includes("--check")) {
    if (!fs.existsSync(OUTPUT) || fs.readFileSync(OUTPUT, "utf8") !== output) {
        console.error("Tank hit polygon config is stale. Run: node generate_tank_hit_polygons.js --write");
        process.exit(1);
    }
    console.log("Tank hit polygon config is up to date.");
} else if (process.argv.includes("--write")) {
    fs.writeFileSync(OUTPUT, output);
    console.log("Wrote " + path.relative(ROOT, OUTPUT));
} else {
    console.log(output);
}
