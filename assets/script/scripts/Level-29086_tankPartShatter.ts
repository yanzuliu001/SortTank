// @ts-nocheck

const { ccclass } = cc._decorator;
const gfx = cc.gfx;

class TankPartShatterAssembler extends cc.Assembler {
    fillBuffers(component) {
        var vertices = component.renderData.vDatas[component.meshID];
        var indices = component.renderData.iDatas[component.meshID];
        var meshBuffer = cc.renderer._handle._meshBuffer;
        var request = meshBuffer.request(component.verticesCount, component.indicesCount);
        var vertexOffset = request.byteOffset >> 2;
        var targetVertices = meshBuffer._vData;
        if (vertices.length + vertexOffset > targetVertices.length) {
            targetVertices.set(vertices.subarray(0, targetVertices.length - vertexOffset), vertexOffset);
        } else {
            targetVertices.set(vertices, vertexOffset);
        }
        var targetIndices = meshBuffer._iData;
        var indexOffset = request.indiceOffset;
        var baseVertex = request.vertexOffset;
        for (var i = 0; i < indices.length; i++) {
            targetIndices[indexOffset++] = baseVertex + indices[i];
        }
    }
}

@ccclass("Level29086TankPartShatter")
export default class Level29086TankPartShatter extends cc.RenderComponent {
    renderData: any = null;
    meshID: any = 0;
    verticesCount: any = 0;
    indicesCount: any = 0;
    vertexStride: any = 5;
    spriteFrame: any = null;
    materialInstance: any = null;
    motionData: any = null;
    duration: any = 0.6;
    elapsed: any = 0;
    playing: any = false;
    completed: any = false;
    completeCallback: any = null;

    _resetAssembler() {
        var assembler = (this._assembler = new TankPartShatterAssembler());
        assembler.init(this);
        assembler.updateRenderData = function () {};
        var format = new gfx.VertexFormat([
            { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true }
        ]);
        if (cc.sys.isNative) {
            assembler.setVertexFormat(format);
        }
        this.renderData = new cc.RenderData();
        this.renderData.init(assembler);
        this.meshID = this.renderData.meshCount;
    }

    init(spriteFrame, sharedMaterial, target, options, callback) {
        if (!spriteFrame || !sharedMaterial || !this.renderData) {
            return false;
        }
        options = options || {};
        this.spriteFrame = spriteFrame;
        this.duration = Math.max(0.01, Number(options.duration) || 0.6);
        this.elapsed = 0;
        this.playing = false;
        this.completed = false;
        this.completeCallback = callback || null;
        var columns = Math.max(1, Math.floor(Number(options.columns) || 2));
        var rows = Math.max(1, Math.floor(Number(options.rows) || 2));
        var rect = spriteFrame.getRect();
        var width = rect.width;
        var height = rect.height;
        if (!(width > 0 && height > 0)) {
            return false;
        }
        this.node.setContentSize(width, height);
        this.buildMesh(columns, rows, width, height);
        this.setMaterial(0, sharedMaterial);
        var material = this.getMaterial(0);
        if (!material) {
            return false;
        }
        this.materialInstance = material;
        material.define("USE_TEXTURE", true);
        material.define("CC_USE_MODEL", true);
        material.setProperty("texture", spriteFrame.getTexture());
        this.motionData = cc.v4(
            0,
            Math.max(0, Number(options.curveSpread) || 0),
            (Math.max(0, Number(options.rotation) || 0) * Math.PI) / 180,
            this.clamp01(null == options.shrinkStart ? 0.75 : Number(options.shrinkStart))
        );
        material.setProperty("motion", this.motionData);
        material.setProperty(
            "targetData",
            cc.v4(
                target.x,
                target.y,
                Math.max(0, null == options.endScale ? 0.2 : Number(options.endScale)),
                this.clamp01(null == options.fadeStart ? 0.9 : Number(options.fadeStart))
            )
        );
        material.setProperty("spriteData", cc.v4(width, height, 0, 0));
        this.playing = true;
        this.setVertsDirty();
        return true;
    }

    clamp01(value) {
        return Math.max(0, Math.min(1, value));
    }

    buildMesh(columns, rows, width, height) {
        var triangleCount = columns * rows * 2;
        this.verticesCount = triangleCount * 3;
        this.indicesCount = this.verticesCount;
        var vertexData = new Float32Array(this.verticesCount * this.vertexStride);
        var uintData = new Uint32Array(vertexData.buffer);
        var indexData = new Uint16Array(this.indicesCount);
        this.renderData.updateMesh(this.meshID, vertexData, indexData);
        var vertexIndex = 0;
        var pieceIndex = 0;
        for (var row = 0; row < rows; row++) {
            for (var column = 0; column < columns; column++) {
                var u0 = column / columns;
                var u1 = (column + 1) / columns;
                var v0 = row / rows;
                var v1 = (row + 1) / rows;
                var lb = { u: u0, v: v0 };
                var rb = { u: u1, v: v0 };
                var lt = { u: u0, v: v1 };
                var rt = { u: u1, v: v1 };
                var triangles = (row + column) % 2
                    ? [[lb, rb, lt], [rb, rt, lt]]
                    : [[lb, rb, rt], [lb, rt, lt]];
                for (var triangle = 0; triangle < triangles.length; triangle++) {
                    var points = triangles[triangle];
                    var centerU = (points[0].u + points[1].u + points[2].u) / 3;
                    var centerV = (points[0].v + points[1].v + points[2].v) / 3;
                    var metadata = this.packMetadata(centerU, centerV, pieceIndex);
                    for (var point = 0; point < 3; point++) {
                        var item = points[point];
                        var offset = vertexIndex * this.vertexStride;
                        var uv = this.getFrameUV(item.u, item.v);
                        vertexData[offset] = (item.u - 0.5) * width;
                        vertexData[offset + 1] = (item.v - 0.5) * height;
                        vertexData[offset + 2] = uv.x;
                        vertexData[offset + 3] = uv.y;
                        uintData[offset + 4] = metadata;
                        indexData[vertexIndex] = vertexIndex;
                        vertexIndex++;
                    }
                    pieceIndex++;
                }
            }
        }
    }

    packMetadata(centerU, centerV, pieceIndex) {
        var r = Math.round(this.clamp01(centerU) * 255);
        var g = Math.round(this.clamp01(centerV) * 255);
        var b = Math.round((((pieceIndex + 1) * 37) % 251) / 250 * 255);
        // Alpha 通道存储连续曲线偏移，使碎片分散在多条轨迹上，而不是重叠成左右两束。
        var a = Math.round((((pieceIndex + 1) * 73) % 251) / 250 * 255);
        return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
    }

    getFrameUV(u, v) {
        var uv = this.spriteFrame.uv || this.spriteFrame._uv;
        if (uv && uv.length >= 8) {
            var bottomU = uv[0] + (uv[2] - uv[0]) * u;
            var bottomV = uv[1] + (uv[3] - uv[1]) * u;
            var topU = uv[4] + (uv[6] - uv[4]) * u;
            var topV = uv[5] + (uv[7] - uv[5]) * u;
            return cc.v2(bottomU + (topU - bottomU) * v, bottomV + (topV - bottomV) * v);
        }
        var texture = this.spriteFrame.getTexture();
        var rect = this.spriteFrame.getRect();
        return cc.v2(
            (rect.x + rect.width * u) / texture.width,
            (rect.y + rect.height * (1 - v)) / texture.height
        );
    }

    update(dt) {
        if (!this.playing || this.completed || !this.materialInstance) {
            return;
        }
        this.elapsed += Math.max(0, dt || 0);
        var progress = this.clamp01(this.elapsed / this.duration);
        if (this.motionData) {
            this.motionData.x = progress;
            this.materialInstance.setProperty("motion", this.motionData);
        }
        if (progress >= 1) {
            this.finish();
        }
    }

    finish() {
        if (this.completed) {
            return;
        }
        this.completed = true;
        this.playing = false;
        var callback = this.completeCallback;
        this.completeCallback = null;
        if (callback) {
            callback();
        }
    }

    onDestroy() {
        this.playing = false;
        this.completeCallback = null;
        this.materialInstance = null;
        this.motionData = null;
    }
}
