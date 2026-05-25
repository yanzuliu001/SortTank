"use strict";
cc._RF.push(module, '234d6kBQUxIeZdnPPmR9goF', 'MotionTrail');
// script/scripts/MotionTrail.js

"use strict";

var i;
var a = cc.gfx;

var s = function s() {
  this.x = 0;
  this.y = 0;
  this.dis = 0;
  this.cos = 0;
  this.sin = 0;
};

var c = cc._decorator;
var l = c.ccclass;
var h = c.property;
var p = c.playOnFocus;
var d = c.menu;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.atlas = null;
    e._spriteFrame = null;
    e._active = !0;
    e._isWorldXY = !0;
    e.offset = cc.v2(0, 0);
    e._length = 20;
    e._headWidth = 100;
    e._tailWidth = 0;
    e._headOpacity = 255;
    e._tailOpacity = 0;
    e.renderData = null;
    e.meshID = 0;
    e.capacity = 0;
    e.verticesCount = 0;
    e.indicesCount = 0;
    e.$flush = null;
    e.$xyOffset = 1e8;
    e.$uvOffset = 1e8;
    e.$colorOffset = 1e8;
    e.$step = 0;
    e.trailData = [];

    e.$getVData = function () {
      return e.renderData.vDatas[e.meshID];
    };

    e.$getUintVData = function () {
      return e.renderData.uintVDatas[e.meshID];
    };

    e.$getIData = function () {
      return e.renderData.iDatas[e.meshID];
    };

    return e;
  }

  __extends(e, t);

  Object.defineProperty(e.prototype, "$spriteFrame", {
    get: function get() {
      return this._spriteFrame;
    },
    set: function set(t) {
      this._spriteFrame = t;
      this.$updateSpriteFrame();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "active", {
    get: function get() {
      return this._active;
    },
    set: function set(t) {
      this._active = t;
      this.enabled = t;
      this.$updateActive();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "$isWorldXY", {
    get: function get() {
      return this._isWorldXY;
    },
    set: function set(t) {
      this._isWorldXY = t;
      this.$updateXY();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "length", {
    get: function get() {
      return this._length;
    },
    set: function set(t) {
      this._length = Math.max(t, 0);
      this.updateLength();
      this.updateWidth();
      this.$updateUV();
      this.$updateColor();
      this.resetPos();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "headWidth", {
    get: function get() {
      return this._headWidth;
    },
    set: function set(t) {
      this._headWidth = Math.max(t, 0);
      this.updateWidth();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "tailWidth", {
    get: function get() {
      return this._tailWidth;
    },
    set: function set(t) {
      this._tailWidth = Math.max(t, 0);
      this.updateWidth();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "headOpacity", {
    get: function get() {
      return this._headOpacity;
    },
    set: function set(t) {
      this._headOpacity = t;
      this.$updateColor();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "tailOpacity", {
    get: function get() {
      return this._tailOpacity;
    },
    set: function set(t) {
      this._tailOpacity = t;
      this.$updateColor();
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "$vDataLength", {
    get: function get() {
      return this.verticesCount * this.$step;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "$iDataLength", {
    get: function get() {
      return this.indicesCount;
    },
    enumerable: !1,
    configurable: !0
  });

  e.prototype._resetAssembler = function () {
    var t = this._assembler = new g();
    t.init(this);
    t.updateRenderData = this.$onFlushed.bind(this);
    this.$flush = this.setVertsDirty;
    var e = this.renderData = new cc.RenderData();
    e.init(t);
    this.meshID = e.meshCount;
    this.$init();
  };

  e.prototype.$init = function () {
    this.$setVFmt();
    this.updateLength();
    this.updateWidth();
    this.node.on(cc.Node.EventType.COLOR_CHANGED, this.$updateColor, this);
    this.resetPos();
  };

  e.prototype.start = function () {
    this.$updateSpriteFrame();
    cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.$updateColor, this);
  };

  e.prototype.$setVFmt = function (t) {
    if (void 0 === t) {
      t = new a.VertexFormat([{
        name: a.ATTR_POSITION,
        type: a.ATTR_TYPE_FLOAT32,
        num: 2
      }, {
        name: a.ATTR_UV0,
        type: a.ATTR_TYPE_FLOAT32,
        num: 2
      }, {
        name: a.ATTR_COLOR,
        type: a.ATTR_TYPE_UINT8,
        num: 4,
        normalize: !0
      }]);
    }

    var e = this._assembler;

    if (cc.sys.isNative) {
      e.setVertexFormat(t);
    }

    var o = t._elements;

    for (var i = o.length - 1; i > -1; --i) {
      this.$step += o[i].bytes >> 2;
    }

    var r = t._attr2el;
    this.$xyOffset = r[a.ATTR_POSITION].offset >> 2;
    this.$uvOffset = r[a.ATTR_UV0].offset >> 2;
    this.$colorOffset = r[a.ATTR_COLOR].offset >> 2;
  };

  e.prototype.$createBuffer = function (t, e, o) {
    if (void 0 === e) {
      e = t - 2;
    }

    if (void 0 === o) {
      o = 2;
    }

    o = Math.max(o, 1.5);
    var i = this.renderData;
    this.verticesCount = Math.max(t, 0);
    this.indicesCount = Math.max(3 * e, 0);
    var r = !i.vDatas[this.meshID];

    if (this.verticesCount > this.capacity) {
      this.capacity = ~~Math.max(this.capacity * o, this.verticesCount);
      r = !0;
    } else {
      if (this.verticesCount < this.capacity / o) {
        this.capacity = ~~Math.max(this.capacity / o, this.verticesCount);
        r = !0;
      }
    }

    if (r) {
      var n = new Float32Array(this.verticesCount * this.$step);
      var a = new Uint16Array(this.indicesCount);
      i.updateMesh(this.meshID, n, a);
    }

    this.$updateIndice();
  };

  e.prototype.update = function () {
    if (cc.sys.isNative) {
      this.$updateColor();
    }

    this.$flush();
  };

  e.prototype.$onFlushed = function () {
    if (!1 !== this.active && null !== this.$spriteFrame && 0 !== this.length) {
      var t = this.trailData;

      for (var e = this.length - 1; e > 0; --e) {
        var o = t[e];
        var i = t[e - 1];
        o.x = i.x;
        o.y = i.y;
        o.sin = i.sin;
        o.cos = i.cos;
      }

      if (this.$isWorldXY) {
        var r = this.node._worldMatrix.m;

        this.node._updateWorldMatrix();

        t[0].x = this.offset.x + r[12];
        t[0].y = this.offset.y + r[13];
      } else {
        t[0].x = this.offset.x + this.node.x;
        t[0].y = this.offset.y + this.node.y;
      }

      this.$updateXY();
    }
  };

  e.prototype.$updateActive = function () {
    if (this.active) {
      this.resetPos();
    }
  };

  e.prototype.$updateSpriteFrame = function () {
    var t = this.$spriteFrame;
    var e = this.getMaterial(0) || cc.Material.getBuiltinMaterial("2d-sprite");
    e.define("USE_TEXTURE", !0);
    e.setProperty("texture", t ? t.getTexture() : null);
    this.$updateUV();
  };

  e.prototype.$updateXY = function () {
    var t = this.$getVData();
    var e = null;
    var o = null;
    var i = 0;
    var r = 0;
    var n = 0;
    var a = 0;
    var s = 0;
    var c = this.$step;
    var l = 0;
    var h = 0;

    if (this.$isWorldXY) {//
    } else {
      l = this.node.x;
      h = this.node.y;
    }

    var p = this.trailData;
    var d = 0;

    for (var u = this.length - 1; d < u; ++d) {
      e = p[d];
      o = p[d + 1];
      i = e.x - l;
      r = e.y - h;
      n = o.x - l;
      a = o.y - h;

      if (0 === d) {
        var g = Math.atan2(a - r, n - i);
        e.sin = Math.sin(g);
        e.cos = Math.cos(g);
      }

      t[s] = i + e.dis * e.sin;
      t[s + 1] = r - e.dis * e.cos;
      t[s += c] = i - e.dis * e.sin;
      t[s + 1] = r + e.dis * e.cos;
      s += c;
    }

    t[s] = n + o.dis * e.sin;
    t[s + 1] = a - o.dis * e.cos;
    t[s += c] = n - o.dis * e.sin;
    t[s + 1] = a + o.dis * e.cos;
  };

  e.prototype.$updateUV = function () {
    if (null !== this.$spriteFrame) {
      var t = this.$getVData();
      var e = this.$step;
      var o = 1 / (this.trailData.length - 1);
      var i = this.$uvOffset;
      var r = 0;

      for (var n = this.$vDataLength; i < n; i += e, ++r) {
        t[i] = 1 & r;
        t[i + 1] = 1 - o * (r >> 1);
      }

      this.$fitUV();
    }
  };

  e.prototype.$updateColor = function () {
    var t = this.$getUintVData();
    var e = this.length;
    var o = this.headOpacity;
    var i = (o - this.tailOpacity) / (e - 1);
    var r = this.node.opacity / 255;
    var n = this.node.color.b << 16 | this.node.color.g << 8 | this.node.color.r;
    var a = 0;
    var s = this.$colorOffset;

    for (var c = this.$step; a < e; ++a) {
      var l = (o - i * a) * r << 24 | n;
      t[s] = l;
      t[s += c] = l;
      s += c;
    }
  };

  e.prototype.$updateIndice = function () {
    var t = this.$getIData();
    var e = 0;
    var o = 0;

    for (var i = this.$iDataLength; e < i; ++o) {
      t[e++] = o;
      t[e++] = o + 1;
      t[e++] = o + 2;
    }
  };

  e.prototype.updateLength = function () {
    var t = this.length;
    this.trailData = [];

    for (var e = 0; e < t; ++e) {
      this.trailData[e] = new s();
    }

    this.$createBuffer(t << 1);
  };

  e.prototype.updateWidth = function () {
    var t = this.trailData;
    var e = this.length;
    var o = 0.5 * this.headWidth;
    var i = (o - 0.5 * this.tailWidth) / (e - 1);

    for (var r = 0; r < e; ++r) {
      t[r].dis = o - i * r;
    }
  };

  e.prototype.resetPos = function () {
    var t = this.trailData;
    var e = this.offset.x;
    var o = this.offset.y;

    if (this.$isWorldXY) {
      var i = this.node._worldMatrix.m;

      this.node._updateWorldMatrix();

      e += i[12];
      o += i[13];
    } else {
      e += this.node.x;
      o += this.node.y;
    }

    for (var r = this.length - 1; r > -1; --r) {
      t[r].x = e;
      t[r].y = o;
    }

    var n = this.$getVData();
    var a = this.$step;

    for (var s = (r = 0, this.$vDataLength); r < s; r += a) {
      n[r] = e;
      n[r + 1] = o;
    }
  };

  e.prototype.$fitUV = function () {
    if (null !== this.$spriteFrame) {
      var t = this.$step;
      var e = this.$spriteFrame.getTexture().width;
      var o = this.$spriteFrame.getTexture().height;
      var i = this.$spriteFrame.getRect();
      var r = this.$getVData();

      if (this.$spriteFrame._rotated) {
        var n = this.$uvOffset;
        var a = 0;

        for (var s = this.$vDataLength; n < s; n += t, ++a) {
          var c = r[n];
          r[n] = ((1 - r[n + 1]) * i.height + i.x) / e;
          r[n + 1] = (c * i.width + i.y) / o;
        }
      } else {
        n = this.$uvOffset;
        a = 0;

        for (s = this.$vDataLength; n < s; n += t, ++a) {
          r[n] = (r[n] * i.width + i.x) / e;
          r[n + 1] = (r[n + 1] * i.height + i.y) / o;
        }
      }
    }
  };

  e.prototype.onDestroy = function () {
    this.node.targetOff(this);
  };

  __decorate([h({
    type: cc.SpriteAtlas,
    editorOnly: !0,
    readonly: !0
  })], e.prototype, "atlas", void 0);

  __decorate([h], e.prototype, "_spriteFrame", void 0);

  __decorate([h({
    type: cc.SpriteFrame
  })], e.prototype, "$spriteFrame", null);

  __decorate([h], e.prototype, "_active", void 0);

  __decorate([h({})], e.prototype, "active", null);

  __decorate([h], e.prototype, "_isWorldXY", void 0);

  __decorate([h({})], e.prototype, "$isWorldXY", null);

  __decorate([h({})], e.prototype, "offset", void 0);

  __decorate([h], e.prototype, "_length", void 0);

  __decorate([h({
    type: cc.Integer
  })], e.prototype, "length", null);

  __decorate([h], e.prototype, "_headWidth", void 0);

  __decorate([h({})], e.prototype, "headWidth", null);

  __decorate([h], e.prototype, "_tailWidth", void 0);

  __decorate([h({})], e.prototype, "tailWidth", null);

  __decorate([h], e.prototype, "_headOpacity", void 0);

  __decorate([h({
    type: cc.Integer,
    min: 0,
    max: 255,
    slide: !0
  })], e.prototype, "headOpacity", null);

  __decorate([h], e.prototype, "_tailOpacity", void 0);

  __decorate([h({
    type: cc.Integer,
    min: 0,
    max: 255,
    slide: !0
  })], e.prototype, "tailOpacity", null);

  return __decorate([l, p, d("Comp/MotionTrail")], e);
}(cc.RenderComponent);

exports["default"] = u;

var g = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.fillBuffers = function (t) {
    var e = t.renderData.vDatas[t.meshID];
    var o = t.renderData.iDatas[t.meshID];
    var i = cc.renderer._handle._meshBuffer;
    var r = i.request(t.verticesCount, t.indicesCount);
    var n = r.byteOffset >> 2;
    var a = i._vData;

    if (e.length + n > a.length) {
      a.set(e.subarray(0, a.length - n), n);
    } else {
      a.set(e, n);
    }

    var s = i._iData;
    var c = r.indiceOffset;
    var l = r.vertexOffset;
    var h = 0;

    for (var p = o.length; h < p; h++) {
      s[c++] = l + o[h];
    }
  };

  return e;
}(cc.Assembler);

cc._RF.pop();