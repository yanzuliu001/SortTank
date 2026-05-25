"use strict";
cc._RF.push(module, '9adc5aULtFMOZEhCtCp6XHg', 'MultTextures');
// resources/scripts/MultTextures.js

"use strict";

exports.getMultMaterial = exports.MultBatch2D = void 0;

var $multUtils = require("./MultUtils");

cc.Component.prototype.useMult = !1;
var i = {
  texture: null,
  defalut: new cc.Texture2D(),
  getImpl: function getImpl() {
    return this.texture;
  }
};
cc.gfx.Texture2D.prototype.texID = -1;
var n = 0;
var c = !1;
var s = [];
exports.MultBatch2D = {
  enable: !1,
  parent: null,
  curID: 0,
  incID: 0,
  count: 0,
  hash: 0,
  reset: function reset() {
    if (this.count > 0) {
      this.curID++;
    }

    this.incID += this.count;
    this.count = 0;
  },
  clear: function clear() {
    var t = s;

    for (var e = 0; e < t.length; e++) {
      var r = t[e];
      r.destroy();
      r.decRef();
    }

    s.length = 0;
  }
};

var l = function l() {
  exports.MultBatch2D.enable = !1;
  cc.resources.load("multTextures/Mult-material", cc.Material, function (t, e) {
    if (!t) {
      var i = cc.Material.getBuiltinMaterial("2d-sprite");

      if (i) {
        exports.MultBatch2D.hash = $multUtils.getMaterialHash(i);
        exports.MultBatch2D.parent = e;
        exports.MultBatch2D.enable = !0;
        e.addRef();
      }
    }
  });
};

exports.getMultMaterial = function (t) {
  exports.MultBatch2D.reset();
  c = !1;

  if (!exports.MultBatch2D.enable || !t || !t.isMultTextures) {
    return t;
  }

  if (!exports.MultBatch2D.parent || !exports.MultBatch2D.parent.isValid) {
    l();
    return t;
  }

  var e = s[n++];

  if (!e || !e.isValid) {
    e = new (0, cc.MaterialVariant)(exports.MultBatch2D.parent);
    s[n - 1] = e;

    for (var a = 0; a < 8; a++) {
      e.setProperty("texture" + a, i.defalut);
    }

    e.updateHash(exports.MultBatch2D.hash);
    e.define("USE_TEXTURE", !0);
    e.isMultTextures = !0;
    e.cacheTextures = [-1];
    e.addRef();
  }

  c = !0;
  return e;
};

var u = function u(t, e) {
  var r = t._assembler._renderData;

  if (!r) {
    return !1;
  }

  var a = 0;
  var i = r.vDatas[0];

  if (t.dataDirty) {
    t.dataDirty = !1;
    var n = 0;

    for (var c = i.length; n < c; n += 5) {
      a = ~~(1e5 * i[n + 2]);
      i[n + 2] = 10 * a + e;
    }
  } else if (t.texID != e) {
    n = 0;

    for (c = i.length; n < c; n += 5) {
      a = ~~(0.1 * i[n + 2]);
      i[n + 2] = 10 * a + e;
    }
  }

  t.texID = e;
};

var o = function o(t, e, a) {
  if (c && e) {
    var n = e.effect.passes[0].getProperty("texture");

    if (n) {//
    } else {
      console.warn(t.node.name, " texture lost !!!!!");
      e.setProperty("texture", i.defalut);
      n = i.defalut;
    }

    var s = exports.MultBatch2D;
    var l = (e.effect, n.texID - s.incID);

    if (l < 0) {
      if (s.count >= 8) {
        a._flush();

        a.material = exports.getMultMaterial(e);

        if (e.getDefine("CC_USE_MODEL")) {
          a.node = t.node;
        } else {
          a.node = a._dummyNode;
        }
      }

      l = s.count++;
      n.texID = l + s.incID;
      var o = a.material;
      var h = o.cacheTextures;

      if (h[l] !== n._id) {
        h[l] = n._id;
        i.texture = n;
        o.setProperty("texture" + l, i);
        o.effect._dirty = !1;
        o._dirty = !1;
      }
    }

    u(t, l);
  }
};

var h = function h() {
  var t = cc.RenderComponent.prototype;
  t.texID = -1;
  t.vDitry = !0;
  t.dataDirty = !0;
  Object.defineProperty(t, "_vertsDirty", {
    get: function get() {
      return this.vDitry;
    },
    set: function set(t) {
      if (!t && this.vDitry) {
        this.dataDirty = !0;
      }

      this.vDitry = t;
    }
  });
  var e = t.setMaterial;

  t.setMaterial = function (t, r) {
    var a = e.call(this, t, r);
    this.setVertsDirty();
    return a;
  };

  var i = cc.Material.prototype;
  var c = i.getHash;

  i.getHash = function () {
    var t = this._effect;

    if (exports.MultBatch2D.enable && t && t._dirty) {
      this.isMultTextures = !1;
      var e = this._owner;

      if (e && (e.useMult || e instanceof cc.Sprite || e instanceof cc.Label)) {
        var i = $multUtils.getMaterialHash(this);

        if (i == exports.MultBatch2D.hash) {
          this.isMultTextures = !0;
          t._dirty = !1;
          t._hash = i;
          return i;
        }
      }
    }

    return c.call(this);
  };

  t._checkBacth = function (t, e) {
    var a = this._materials[0];

    if (a && a.getHash() !== t.material.getHash() || t.cullingMask !== e) {
      t._flush();

      if (a.getDefine("CC_USE_MODEL")) {
        t.node = this.node;
      } else {
        t.node = t._dummyNode;
      }

      t.material = exports.getMultMaterial(a);
      t.cullingMask = e;
    }

    o(this, a, t);
  };

  cc.director.on(cc.Director.EVENT_BEFORE_DRAW, function () {
    n = 0;
    exports.MultBatch2D.reset();
    exports.MultBatch2D.curID = 0;
  });
};

!CC_EDITOR && cc.game.on(cc.game.EVENT_GAME_INITED, function () {
  l();
  h();
});

cc._RF.pop();