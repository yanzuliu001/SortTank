
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/BrainLevelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b60cgbWiBDl7ZezLD1/izT', 'BrainLevelBase');
// script/scripts/BrainLevelBase.js

"use strict";

var i;

var $levelConstant = require("./LevelConstant");

var l = cc._decorator;
var h = l.ccclass;
var p = l.property;
var d = l.executeInEditMode;
var u = l.executionOrder;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.levelID = -1;
    e.levelJSON = null;
    e.folder = "";
    e.preloadAsset = !0;
    e.dict = {};
    e.dgNode = null;
    e.cwNode = null;
    e.titleNode = null;
    e.isEnd = !1;
    e.useCoundDown = !0;
    e.useCountDown = !0;
    e.loadAssetCount = 0;
    e.loadAssetTotal = 0;
    e.assetAssignmentType = 1;
    e.assetCaches = [];
    e.audioCaches = [];
    e.assetLoadTimer = null;
    e.currentImg = [];
    e.currentAudio = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.onLevelInitial();
    this.getDefaultNode();
    this.setDefaultSpriteFrame();
    this.setLevelAsset();
    this.loadNodeTree();
    this.onLevelLoad();
  };

  e.prototype.onEnable = function () {
    this.onLevelEnable();
  };

  e.prototype.start = function () {
    this.onLevelStart();
  };

  e.prototype.onDisable = function () {
    this.setCollisionManager(!1, !1);
    this.stopLevelAllSound();
    this.clearDefaultSpriteFrame();
    this.clearAssetCaches();
    this.clearAudioCaches();
    clearTimeout(this.assetLoadTimer);
    this.onLevelDisable();
  };

  e.prototype.onDestroy = function () {
    for (var t = 0; t < this.currentAudio.length; t++) {
      cc.assetManager.releaseAsset(this.currentAudio[t]);
    }

    this.onLevelDestory();
  };

  e.prototype.lateUpdate = function (t) {
    this.onLevelLateUpdate(t);
  };

  e.prototype.update = function (t) {
    this.onLevelUpdate(t);
  };

  e.prototype.getDefaultNode = function () {
    this.cwNode = this.node.getChildByName("cw");
    this.dgNode = this.node.getChildByName("dg");
    this.titleNode = this.node.getChildByName("title") || this.node.getChildByName("lblTitle");
  };

  e.prototype.setDefaultSpriteFrame = function () {
    return __awaiter(this, void 0, Promise, function () {
      var t;
      var e;
      var o = this;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            t = function t(_t, e) {
              if (e) {
                _t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
              }
            };

            return this.cwNode ? cc.resources ? (cc.resources.load("zqddn_zhb/level/cw", function (e, i) {
              return __awaiter(o, void 0, void 0, function () {
                return __generator(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (e) {
                        return [4, this.downloadSpriteFrame("texture/common/cw", ".png")];
                      } else {
                        return [3, 2];
                      }

                    case 1:
                      i = o.sent();
                      o.label = 2;

                    case 2:
                      if (cc.isValid(this.cwNode)) {
                        return t(this.cwNode, i), [2];
                      } else {
                        return [2];
                      }

                  }
                });
              });
            }), [3, 3]) : [3, 1] : [3, 3];

          case 1:
            return [4, this.downloadSpriteFrame("texture/common/cw", ".png")];

          case 2:
            e = i.sent();
            t(this.cwNode, e);
            i.label = 3;

          case 3:
            if (this.dgNode) {
              if (cc.resources) {
                return cc.resources.load("zqddn_zhb/level/dg", function (e, i) {
                  return __awaiter(o, void 0, void 0, function () {
                    return __generator(this, function (o) {
                      switch (o.label) {
                        case 0:
                          if (e) {
                            return [4, this.downloadSpriteFrame("texture/common/dg", ".png")];
                          } else {
                            return [3, 2];
                          }

                        case 1:
                          i = o.sent();
                          o.label = 2;

                        case 2:
                          if (cc.isValid(this.dgNode)) {
                            return t(this.dgNode, i), [2];
                          } else {
                            return [2];
                          }

                      }
                    });
                  });
                }), [3, 6];
              } else {
                return [3, 4];
              }
            } else {
              return [3, 6];
            }

          case 4:
            return [4, this.downloadSpriteFrame("texture/common/dg", ".png")];

          case 5:
            e = i.sent();
            t(this.dgNode, e);
            i.label = 6;

          case 6:
            return [2];
        }
      });
    });
  };

  e.prototype.clearDefaultSpriteFrame = function () {
    if (this.cwNode) {
      this.cwNode.getComponent(cc.Sprite).spriteFrame = null;
    }

    if (this.dgNode) {
      this.dgNode.getComponent(cc.Sprite).spriteFrame = null;
    }
  };

  e.prototype.clearAssetCaches = function () {
    this.assetCaches = [];
  };

  e.prototype.clearAudioCaches = function () {
    this.audioCaches = [];
  };

  e.prototype.setLevelAsset = function () {
    var t = this;

    var e = function e(_e) {
      t.loadAssetCount++;
      t.onLevelAssetsLoaded(_e);

      if (t.loadAssetCount >= t.loadAssetTotal) {
        t.assetLoadTimer = setTimeout(function () {
          t.onAssetLoadedAllFinishHandle();
          t.onLevelAllAssetsLoaded();
          t.onAssetAssignmentHandle();
          t.onLevelReady();
        }, 0);
      }
    };

    if (this.preloadAsset) {
      var o = this.node.getChildByName("game");

      if (o) {
        var i = function i(o, _i) {
          return __awaiter(t, void 0, void 0, function () {
            var t;
            var r;
            var n;
            var l;
            var h;
            var p;
            var d;
            var u = this;
            return __generator(this, function (g) {
              switch (g.label) {
                case 0:
                  t = function t(_t2, o) {
                    return new Promise(function (r) {
                      return __awaiter(u, void 0, void 0, function () {
                        var a;
                        var c;
                        var l;
                        var p;
                        var d;
                        var u;
                        return __generator(this, function (s) {
                          switch (s.label) {
                            case 0:
                              s.trys.push([0, 2,, 3]);
                              return [4, this.downloadSpriteFrame(_t2, o)];

                            case 1:
                              a = s.sent();
                              return _i && cc.isValid(_i.node) ? (_i instanceof cc.Sprite && _i.srcBlendFactor == cc.macro.BlendFactor.ONE && a.setPremultiplyAlpha(!0), 1 != h.length && "one" == h[1] && (_i.srcBlendFactor = cc.macro.BlendFactor.ONE, a.setPremultiplyAlpha(!0)), c = new cc.SpriteFrame(a), 1 != (l = h).length && (p = "one" == l[1] ? 2 : 1, d = ["insetLeft", "insetRight", "insetTop", "insetBottom"], l.forEach(function (t, e) {
                                if (l[e + p]) {
                                  return c[d[e]] = Number(l[e + p]);
                                } else {
                                  return null;
                                }
                              })), _i instanceof cc.Mask && _i.node.setContentSize(a.width, a.height), _i instanceof cc.MotionStreak && (_i.node.setContentSize(a.width, a.height), _i.texture = a), 1 == this.assetAssignmentType ? _i.spriteFrame = c : 2 == this.assetAssignmentType && this.assetCaches.push({
                                t: 1,
                                c: _i,
                                a: c
                              }), e(n), [2, r(!0)]) : [2, r(!0)];

                            case 2:
                              u = s.sent();
                              console.log(u);
                              return [2, r(!1)];

                            case 3:
                              return [2];
                          }
                        });
                      });
                    });
                  };

                  this.loadAssetTotal++;
                  r = this.folder || "" + this.levelID;
                  n = o;

                  if (2 == (l = o.split(".")).length) {
                    if ("c" == l[0]) {
                      r = "common";
                    } else {
                      r = l[0];
                    }

                    n = l[1];
                  } else {
                    if (3 == l.length) {
                      if ("c" == l[0]) {
                        r = "common/" + l[1];
                      }

                      n = l[2];
                    }
                  }

                  if ((h = n.split(",")).length > 1) {
                    n = h[0];
                  }

                  if (0 != r.indexOf("common")) {
                    n = r + "_" + n;
                  }

                  return [4, t(p = "texture/" + r + "/" + n, ".png")];

                case 1:
                  if (d = g.sent()) {
                    return [3, 3];
                  } else {
                    return [4, t(p, ".jpg")];
                  }

                case 2:
                  d = g.sent();
                  g.label = 3;

                case 3:
                  if (d) {//
                  } else {
                    cc.game.emit($levelConstant.LEVEL_EVENT.GAME_ASSET_DOWNDOWN_FAIL);
                  }

                  return [2];
              }
            });
          });
        };

        var r = function r(o, i) {
          return __awaiter(t, void 0, void 0, function () {
            var t;
            var r;
            var n;
            var a;
            var l;
            var h;
            var p;
            var d;
            var u;
            var g;
            var m;
            var f;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  this.loadAssetTotal++;
                  t = this.folder || "" + this.levelID;
                  r = o;

                  if (2 == (n = o.split(".")).length) {
                    if ("c" == n[0]) {
                      t = "common";
                    } else {
                      t = n[0];
                    }

                    r = n[1];
                  } else {
                    if (3 == n.length) {
                      if ("c" == n[0]) {
                        t = "common/" + n[1];
                      }

                      r = n[2];
                    }
                  }

                  a = r.split(",");
                  l = null;
                  h = "default";

                  if (2 == a.length) {
                    l = a[1];
                    r = a[0];
                  } else {
                    if (3 == a.length) {
                      h = a[2];
                      l = a[1];
                      r = a[0];
                    }
                  }

                  p = "spine/" + t + "/" + r;
                  d = "spine/" + t + "/" + r;
                  u = "spine/" + t + "/" + r;
                  s.label = 1;

                case 1:
                  s.trys.push([1, 3,, 4]);
                  return [4, this.downloadSpine(u, d, p, r)];

                case 2:
                  g = s.sent();
                  return i && cc.isValid(i.node) ? (m = new sp.SkeletonData(), g[0] ? (m.skeletonJson = g[1], m.atlasText = g[0], m.textures = g[2], m.textureNames = g[3]) : m = g[1], 1 == this.assetAssignmentType ? (i.skeletonData = m, i.setSkin(h), i.defaultSkin = h, (l || m.getRuntimeData()) && (i.defaultAnimation = l || m.getRuntimeData().animations[0].name, i.setAnimation(0, l || m.getRuntimeData().animations[0].name, i.loop))) : 2 == this.assetAssignmentType && this.assetCaches.push({
                    t: 2,
                    c: i,
                    a: m,
                    o: l,
                    s: h
                  }), e(r), [3, 4]) : [2];

                case 3:
                  f = s.sent();
                  console.log(f);
                  cc.game.emit($levelConstant.LEVEL_EVENT.GAME_ASSET_DOWNDOWN_FAIL);
                  return [2];

                case 4:
                  return [2];
              }
            });
          });
        };

        var n = function n(t) {
          t.children.forEach(function (t) {
            if (0 != t.children.length) {
              n(t);
            }

            var e = t.getComponent(cc.Sprite);

            if (e && e.enabled && !e.spriteFrame) {
              return i(t.name.split("=")[0], e);
            }

            var o = t.getComponent(sp.Skeleton);

            if (o && o.enabled && !o.skeletonData) {
              return r(t.name.split("=")[0], o);
            }

            var a = t.getComponent(cc.Mask);

            if (a && a.enabled && a.type == cc.Mask.Type.IMAGE_STENCIL && !a.spriteFrame) {
              return i(t.name.split("=")[0], a);
            }

            var s = t.getComponent(cc.MotionStreak);

            if (s && s.enabled && !s.texture) {
              return i(t.name.split("=")[0], s);
            } else {
              return void 0;
            }
          });
        };

        n(o);

        if (0 == this.loadAssetTotal && this.loadAssetCount == this.loadAssetTotal) {
          e("");
        }
      }
    } else {
      e(null);
    }
  };

  e.prototype.downloadSpriteFrame = function (t, e) {
    var o = this;
    return new Promise(function (i, r) {
      if ($levelConstant.ASSET_LOCAL_BUNDLE) {
        cc.assetManager.loadBundle($levelConstant.ASSET_LOCAL_BUNDLE, function (e, o) {
          if (e) {
            return r(e);
          }

          o.load(t, cc.Texture2D, function (t, e) {
            if (t) {
              return r(t);
            }

            i(e);
          });
        });
      } else {
        t += e;
        t = "" + o.getDomain() + t;
        cc.assetManager.loadRemote(t, function (t, e) {
          if (t) {
            return r(t);
          }

          if (window.currentImg) {//
          } else {
            window.currentImg = [];
          }

          window.currentImg.push(e);
          i(e);
        });
      }
    });
  };

  e.prototype.downloadSpine = function (t, e, o, i) {
    var r = this;
    return new Promise(function (n, l) {
      if ($levelConstant.ASSET_LOCAL_BUNDLE) {
        cc.assetManager.loadBundle($levelConstant.ASSET_LOCAL_BUNDLE, function (t, o) {
          if (t) {
            return l(t);
          }

          o.load(e, sp.SkeletonData, function (t, e) {
            if (t) {
              return l(t);
            }

            n([null, e, null]);
          });
        });
      } else {
        t = "" + r.getDomain() + t + ".atlas";
        e = "" + r.getDomain() + e + ".json";
        cc.assetManager.loadAny([{
          url: t,
          ext: ".txt"
        }, {
          url: e,
          ext: ".txt"
        }], function (t, e) {
          return __awaiter(r, void 0, void 0, function () {
            var r;
            var a;
            var c;
            var h;
            var p;
            var d;
            var u;
            return __generator(this, function (s) {
              switch (s.label) {
                case 0:
                  if (t) {
                    return [2, l(t)];
                  }

                  for (r = !0, a = []; r;) {
                    if (-1 == e[0].indexOf("" + i + (a.length ? a.length + 1 : "") + ".png")) {
                      r = !1;
                    } else {
                      a.push("" + i + (a.length ? a.length + 1 : ""));
                    }
                  }

                  c = o.substring(0, o.lastIndexOf("/"));
                  h = a.map(function (t) {
                    return t + ".png";
                  });
                  a = a.map(function (t) {
                    return c + "/" + t;
                  });
                  p = [];
                  s.label = 1;

                case 1:
                  if (a.length) {
                    return d = a.shift(), [4, this.downloadSpriteFrame(d, ".png")];
                  } else {
                    return [3, 3];
                  }

                case 2:
                  u = s.sent();
                  p.push(u);
                  return [3, 1];

                case 3:
                  e.push(p);
                  e.push(h);
                  n(e);
                  return [2];
              }
            });
          });
        });
      }
    });
  };

  e.prototype.downloadAudio = function (t) {
    var e = this;
    return new Promise(function (o, i) {
      if (-1 != t.indexOf($levelConstant.domain)) {
        t = t.substring($levelConstant.domain.length);
      }

      if (-1 != t.indexOf($levelConstant.domain_local)) {
        t = t.substring($levelConstant.domain_local.length);
      }

      if (-1 != t.indexOf(".mp3")) {
        t = t.substring(0, t.indexOf(".mp3"));
      }

      if ($levelConstant.ASSET_LOCAL_BUNDLE) {
        cc.assetManager.loadBundle($levelConstant.ASSET_LOCAL_BUNDLE, function (e, r) {
          if (e) {
            return i(e);
          }

          r.load(t, cc.AudioClip, function (t, e) {
            if (t) {
              return i(t);
            }

            o(e);
          });
        });
      } else {
        t = "" + e.getDomain() + t + ".mp3";
        cc.assetManager.loadRemote(t, function (t, e) {
          if (t) {
            return i(t);
          }

          o(e);
        });
      }
    });
  };

  e.prototype.loadNodeTree = function () {
    var t = this;
    var e = this.node.getChildByName("game");

    if (e) {
      this.dict[e.name] = e;

      var o = function o(e) {
        e.children.forEach(function (e) {
          if (0 != e.children.length) {
            o(e);
          }

          if (-1 == e.name.indexOf("copy")) {
            var i = e.name.split("=");

            if (1 != i.length) {
              t.dict[i[1]] || (t.dict[i[1]] = e);
              e.name = i[1];
            } else {
              if (t.dict[e.name]) {//
              } else {
                t.dict[e.name] = e;
              }
            }
          }
        });
      };

      o(e);
      var i = this.node.getChildByName("temp");

      if (i) {
        this.dict[i.name] = i;
        o(i);
      }
    }
  };

  e.prototype.setPhysicsManager = function (t, e) {
    if (void 0 === e) {
      e = 0;
    }
  };

  e.prototype.setCollisionManager = function (t, e) {
    if (void 0 === e) {
      e = !1;
    }

    if (t || cc.director.getCollisionManager().enabled && !t) {
      cc.director.getCollisionManager().enabled = t;
    }

    if (e || cc.director.getCollisionManager().enabledDebugDraw && !e) {
      cc.director.getCollisionManager().enabledDebugDraw = e;
    }
  };

  e.prototype.setAssetAssignmentType = function (t) {
    if (void 0 === t) {
      t = 1;
    }

    this.assetAssignmentType = t;
  };

  e.prototype.playRemoteSound = function (t, e, o) {
    var i = this;

    if (void 0 === e) {
      e = !1;
    }

    if (void 0 === o) {
      o = 1;
    }

    return new Promise(function (r) {
      return __awaiter(i, void 0, void 0, function () {
        var i;
        var n;
        var a;
        var c = this;
        return __generator(this, function (s) {
          switch (s.label) {
            case 0:
              this.audioCaches.push({
                url: t
              });
              s.label = 1;

            case 1:
              s.trys.push([1, 3,, 4]);
              return [4, this.downloadAudio(t)];

            case 2:
              i = s.sent();
              return cc.isValid(this.node) ? (n = this.audioCaches.find(function (e) {
                return e.url == t && !e.id;
              })) ? (t.includes("bgm") || t.includes("Bgm") ? window.musicMute && (o = 0) : window.effectMute && (o = 0), a = cc.audioEngine.play(i, e, o), n.id = a, e || cc.audioEngine.setFinishCallback(a, function () {
                if (c.audioCaches) {
                  var t = c.audioCaches.findIndex(function (t) {
                    return t.id == a;
                  });

                  if (-1 != t) {
                    c.audioCaches.splice(t, 1);
                  }
                }
              }), [2, r(a)]) : [2, r(-1)] : [2];

            case 3:
              s.sent();
              r(-1);
              return [3, 4];

            case 4:
              return [2];
          }
        });
      });
    });
  };

  e.prototype.stopAudioByUrl = function (t) {
    var e = this.audioCaches.find(function (e) {
      return e.url === t && e.id;
    });

    if (e) {
      cc.audioEngine.stop(e.id);
      var o = this.audioCaches.findIndex(function (o) {
        return o.url === t && o.id === e.id;
      });

      if (-1 !== o) {
        this.audioCaches.splice(o, 1);
      }
    }
  };

  e.prototype.playLevelSound = function (t, e, o) {
    if (void 0 === e) {
      e = !1;
    }

    if (void 0 === o) {
      o = 1;
    }

    var i = this.folder || "" + this.levelID;
    var r = "audio/" + i + "/" + i + "_" + t;
    return this.playRemoteSound(r, e, o);
  };

  e.prototype.stopLevelSound = function (t) {
    var e = this.folder || "" + this.levelID;
    var o = "audio/" + e + "/" + e + "_" + t;
    var i = this.audioCaches.findIndex(function (t) {
      return t.url == o;
    });

    if (-1 != i) {
      var r = this.audioCaches.splice(i, 1)[0];

      if (r && r.id) {
        cc.audioEngine.stop(r.id);
      }
    }
  };

  e.prototype.stopLevelAllSound = function () {
    if (this.audioCaches.length) {
      this.audioCaches.forEach(function (t) {
        cc.audioEngine.stop(t.id);
      });
      this.audioCaches = [];
    }
  };

  e.prototype.playClickSound = function () {
    return this.playRemoteSound($levelConstant.AUDIO_URL.CLICK);
  };

  e.prototype.playErrorOnce = function (t, e) {
    if (void 0 === e) {
      e = 1;
    }

    if (t) {
      var o = cc.v2();
      var i = cc.v2();

      if (t instanceof cc.Event.EventTouch) {
        o = t.getLocation();
        i = this.cwNode.parent.convertToNodeSpaceAR(o);
      } else {
        if (t instanceof cc.Node) {
          o = cc.v2(t.parent.convertToWorldSpaceAR(t.position)), i = this.cwNode.parent.convertToNodeSpaceAR(o);
        } else {
          t instanceof cc.Event.EventTouch && (i = cc.v2(t));
        }
      }

      this.cwNode.setPosition(i);
    }

    this.cwNode.active = !0;
    this.cwNode.scale = 0;
    this.cwNode.stopAllActions();
    this.playRemoteSound($levelConstant.AUDIO_URL.ERROR);
    cc.tween(this.cwNode).to(0.3, {
      scale: 1
    }).delay(e).to(0.3, {
      scale: 0
    }).start();
  };

  e.prototype.playError = function (t, e) {
    var o = this;

    if (void 0 === e) {
      e = 1;
    }

    if (!this.isEnd) {
      this.isEnd = !0;

      if (t) {
        var i = cc.v2();
        var r = cc.v2();

        if (t instanceof cc.Event.EventTouch) {
          i = t.getLocation();
          r = this.cwNode.parent.convertToNodeSpaceAR(i);
        } else {
          if (t instanceof cc.Node) {
            i = cc.v2(t.parent.convertToWorldSpaceAR(t.position)), r = this.cwNode.parent.convertToNodeSpaceAR(i);
          } else {
            (t instanceof cc.Vec2 || t instanceof cc.Vec3) && (r = this.cwNode.parent.convertToNodeSpaceAR(t));
          }
        }

        this.cwNode.setPosition(r);
      }

      this.cwNode.active = !0;
      this.cwNode.scale = 0;
      this.cwNode.stopAllActions();
      this.playRemoteSound($levelConstant.AUDIO_URL.ERROR);
      cc.tween(this.cwNode).to(0.3, {
        scale: 1
      }).delay(e).to(0.3, {
        scale: 0
      }).call(function () {
        o.gameError();
      }).start();
    }
  };

  e.prototype.playRightOnce = function (t, e) {
    var o = this;

    if (void 0 === e) {
      e = 1;
    }

    if (t) {
      var i = cc.v2();
      var r = cc.v2();

      if (t instanceof cc.Event.EventTouch) {
        i = t.getLocation();
        r = this.dgNode.parent.convertToNodeSpaceAR(i);
      } else {
        if (t instanceof cc.Node) {
          i = cc.v2(t.parent.convertToWorldSpaceAR(t.position)), r = this.dgNode.parent.convertToNodeSpaceAR(i);
        } else {
          t instanceof cc.Event.EventTouch && (r = cc.v2(t));
        }
      }

      this.dgNode.setPosition(r);
    }

    this.dgNode.active = !0;
    this.dgNode.scale = 0;
    this.dgNode.stopAllActions();
    cc.tween(this.dgNode).delay(0.3).call(function () {
      o.playRemoteSound($levelConstant.AUDIO_URL.RIGHT);
    }).to(0.3, {
      scale: 1
    }, {
      easing: cc.easing.expoOut
    }).delay(e).to(0.3, {
      scale: 0
    }).start();
  };

  e.prototype.playRight = function (t, e) {
    var o = this;

    if (void 0 === e) {
      e = 1;
    }

    if (!this.isEnd) {
      this.isEnd = !0;

      if (t) {
        var i = cc.v2();
        var r = cc.v2();

        if (t instanceof cc.Event.EventTouch) {
          i = t.getLocation();
          r = this.dgNode.parent.convertToNodeSpaceAR(i);
        } else {
          if (t instanceof cc.Node) {
            i = cc.v2(t.parent.convertToWorldSpaceAR(t.position)), r = this.dgNode.parent.convertToNodeSpaceAR(i);
          } else {
            t instanceof cc.Event.EventTouch && (r = cc.v2(t));
          }
        }

        this.dgNode.setPosition(r);
      }

      this.dgNode.active = !0;
      this.dgNode.scale = 0;
      this.dgNode.stopAllActions();
      cc.tween(this.dgNode).delay(0.3).call(function () {
        o.playRemoteSound($levelConstant.AUDIO_URL.RIGHT);
      }).to(0.3, {
        scale: 1
      }, {
        easing: cc.easing.expoOut
      }).delay(e).call(function () {
        o.gameRight();
      }).start();
    }
  };

  e.prototype.gameError = function () {
    cc.game.emit("onRestartBtn");
  };

  e.prototype.gameRight = function () {
    cc.game.emit("game_success1");
    cc.game.emit("game_success2");
  };

  e.prototype.getDomain = function () {
    return $levelConstant.domain;
  };

  e.prototype.onAssetAssignmentHandle = function () {
    if (2 == this.assetAssignmentType && this.assetCaches.length && cc.isValid(this.node, !0)) {
      this.assetCaches.forEach(function (t) {
        if (cc.isValid(t.c.node)) {
          if (1 == t.t) {
            t.c.spriteFrame = t.a;
          } else {
            2 == t.t && (t.c.skeletonData = t.a, t.c.setSkin(t.s), (t.o || t.a.getRuntimeData()) && (t.c.defaultAnimation = t.o || t.a.getRuntimeData().animations[0].name, t.c.setAnimation(0, t.o || t.a.getRuntimeData().animations[0].name, t.c.loop)));
          }
        }
      });
    }
  };

  e.prototype.onLevelInitial = function () {};

  e.prototype.onLevelUpdate = function () {};

  e.prototype.onLevelLateUpdate = function () {};

  e.prototype.onLevelLoad = function () {};

  e.prototype.onLevelEnable = function () {};

  e.prototype.onLevelStart = function () {};

  e.prototype.onLevelReady = function () {};

  e.prototype.onLevelDisable = function () {};

  e.prototype.onLevelDestory = function () {};

  e.prototype.onLevelAssetsLoaded = function () {};

  e.prototype.onLevelAllAssetsLoaded = function () {};

  e.prototype.onLevelReadyOnEditor = function () {};

  e.prototype.onAssetLoadedAllFinishHandle = function () {};

  __decorate([p({
    tooltip: "关卡ID"
  })], e.prototype, "levelID", void 0);

  __decorate([p({
    type: cc.JsonAsset,
    tooltip: "关卡JSON"
  })], e.prototype, "levelJSON", void 0);

  __decorate([p({
    tooltip: "资源远程文件夹名字(若无则为关卡ID)"
  })], e.prototype, "folder", void 0);

  __decorate([p({
    displayName: "是否加载远程资源"
  })], e.prototype, "preloadAsset", void 0);

  return __decorate([h, u(-1)], e);
}(cc.Component);

exports["default"] = g;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9CcmFpbkxldmVsQmFzZS5qcyJdLCJuYW1lcyI6WyJpIiwiJGxldmVsQ29uc3RhbnQiLCJyZXF1aXJlIiwibCIsImNjIiwiX2RlY29yYXRvciIsImgiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwiZCIsImV4ZWN1dGVJbkVkaXRNb2RlIiwidSIsImV4ZWN1dGlvbk9yZGVyIiwiZyIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJsZXZlbElEIiwibGV2ZWxKU09OIiwiZm9sZGVyIiwicHJlbG9hZEFzc2V0IiwiZGljdCIsImRnTm9kZSIsImN3Tm9kZSIsInRpdGxlTm9kZSIsImlzRW5kIiwidXNlQ291bmREb3duIiwidXNlQ291bnREb3duIiwibG9hZEFzc2V0Q291bnQiLCJsb2FkQXNzZXRUb3RhbCIsImFzc2V0QXNzaWdubWVudFR5cGUiLCJhc3NldENhY2hlcyIsImF1ZGlvQ2FjaGVzIiwiYXNzZXRMb2FkVGltZXIiLCJjdXJyZW50SW1nIiwiY3VycmVudEF1ZGlvIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwib25MZXZlbEluaXRpYWwiLCJnZXREZWZhdWx0Tm9kZSIsInNldERlZmF1bHRTcHJpdGVGcmFtZSIsInNldExldmVsQXNzZXQiLCJsb2FkTm9kZVRyZWUiLCJvbkxldmVsTG9hZCIsIm9uRW5hYmxlIiwib25MZXZlbEVuYWJsZSIsInN0YXJ0Iiwib25MZXZlbFN0YXJ0Iiwib25EaXNhYmxlIiwic2V0Q29sbGlzaW9uTWFuYWdlciIsInN0b3BMZXZlbEFsbFNvdW5kIiwiY2xlYXJEZWZhdWx0U3ByaXRlRnJhbWUiLCJjbGVhckFzc2V0Q2FjaGVzIiwiY2xlYXJBdWRpb0NhY2hlcyIsImNsZWFyVGltZW91dCIsIm9uTGV2ZWxEaXNhYmxlIiwib25EZXN0cm95IiwibGVuZ3RoIiwiYXNzZXRNYW5hZ2VyIiwicmVsZWFzZUFzc2V0Iiwib25MZXZlbERlc3RvcnkiLCJsYXRlVXBkYXRlIiwib25MZXZlbExhdGVVcGRhdGUiLCJ1cGRhdGUiLCJvbkxldmVsVXBkYXRlIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiX19hd2FpdGVyIiwiUHJvbWlzZSIsIm8iLCJfX2dlbmVyYXRvciIsImxhYmVsIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInJlc291cmNlcyIsImxvYWQiLCJkb3dubG9hZFNwcml0ZUZyYW1lIiwic2VudCIsImlzVmFsaWQiLCJvbkxldmVsQXNzZXRzTG9hZGVkIiwic2V0VGltZW91dCIsIm9uQXNzZXRMb2FkZWRBbGxGaW5pc2hIYW5kbGUiLCJvbkxldmVsQWxsQXNzZXRzTG9hZGVkIiwib25Bc3NldEFzc2lnbm1lbnRIYW5kbGUiLCJvbkxldmVsUmVhZHkiLCJyIiwibiIsImEiLCJjIiwicyIsInRyeXMiLCJwdXNoIiwic3JjQmxlbmRGYWN0b3IiLCJtYWNybyIsIkJsZW5kRmFjdG9yIiwiT05FIiwic2V0UHJlbXVsdGlwbHlBbHBoYSIsImZvckVhY2giLCJOdW1iZXIiLCJNYXNrIiwic2V0Q29udGVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIk1vdGlvblN0cmVhayIsInRleHR1cmUiLCJjb25zb2xlIiwibG9nIiwic3BsaXQiLCJpbmRleE9mIiwiZ2FtZSIsImVtaXQiLCJMRVZFTF9FVkVOVCIsIkdBTUVfQVNTRVRfRE9XTkRPV05fRkFJTCIsIm0iLCJmIiwiZG93bmxvYWRTcGluZSIsInNwIiwiU2tlbGV0b25EYXRhIiwic2tlbGV0b25Kc29uIiwiYXRsYXNUZXh0IiwidGV4dHVyZXMiLCJ0ZXh0dXJlTmFtZXMiLCJza2VsZXRvbkRhdGEiLCJzZXRTa2luIiwiZGVmYXVsdFNraW4iLCJnZXRSdW50aW1lRGF0YSIsImRlZmF1bHRBbmltYXRpb24iLCJhbmltYXRpb25zIiwibmFtZSIsInNldEFuaW1hdGlvbiIsImxvb3AiLCJjaGlsZHJlbiIsImVuYWJsZWQiLCJTa2VsZXRvbiIsInR5cGUiLCJUeXBlIiwiSU1BR0VfU1RFTkNJTCIsIkFTU0VUX0xPQ0FMX0JVTkRMRSIsImxvYWRCdW5kbGUiLCJUZXh0dXJlMkQiLCJnZXREb21haW4iLCJsb2FkUmVtb3RlIiwid2luZG93IiwibG9hZEFueSIsInVybCIsImV4dCIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwibWFwIiwic2hpZnQiLCJkb3dubG9hZEF1ZGlvIiwiZG9tYWluIiwiZG9tYWluX2xvY2FsIiwiQXVkaW9DbGlwIiwic2V0UGh5c2ljc01hbmFnZXIiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkRGVidWdEcmF3Iiwic2V0QXNzZXRBc3NpZ25tZW50VHlwZSIsInBsYXlSZW1vdGVTb3VuZCIsImZpbmQiLCJpZCIsImluY2x1ZGVzIiwibXVzaWNNdXRlIiwiZWZmZWN0TXV0ZSIsImF1ZGlvRW5naW5lIiwicGxheSIsInNldEZpbmlzaENhbGxiYWNrIiwiZmluZEluZGV4Iiwic3BsaWNlIiwic3RvcEF1ZGlvQnlVcmwiLCJzdG9wIiwicGxheUxldmVsU291bmQiLCJzdG9wTGV2ZWxTb3VuZCIsInBsYXlDbGlja1NvdW5kIiwiQVVESU9fVVJMIiwiQ0xJQ0siLCJwbGF5RXJyb3JPbmNlIiwidjIiLCJFdmVudCIsIkV2ZW50VG91Y2giLCJnZXRMb2NhdGlvbiIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiTm9kZSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJhY3RpdmUiLCJzY2FsZSIsInN0b3BBbGxBY3Rpb25zIiwiRVJST1IiLCJ0d2VlbiIsInRvIiwiZGVsYXkiLCJwbGF5RXJyb3IiLCJWZWMyIiwiVmVjMyIsImNhbGwiLCJnYW1lRXJyb3IiLCJwbGF5UmlnaHRPbmNlIiwiUklHSFQiLCJlYXNpbmciLCJleHBvT3V0IiwicGxheVJpZ2h0IiwiZ2FtZVJpZ2h0Iiwib25MZXZlbFJlYWR5T25FZGl0b3IiLCJfX2RlY29yYXRlIiwidG9vbHRpcCIsIkpzb25Bc3Nl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LENBQUM7SUFDRTZNLE9BQU8sRUFBRTtFQURYLENBQUQsQ0FETCxDQURNLEVBTU5yTSxDQUFDLENBQUN1QixTQU5JLEVBT04sUUFQTSxFQVFOLEtBQUssQ0FSQyxDQUFWOztFQVVBNkssVUFBVSxDQUNOLENBQ0k1TSxDQUFDLENBQUM7SUFDRStNLFdBQVcsRUFBRTtFQURmLENBQUQsQ0FETCxDQURNLEVBTU52TSxDQUFDLENBQUN1QixTQU5JLEVBT04sY0FQTSxFQVFOLEtBQUssQ0FSQyxDQUFWOztFQVVBLE9BQU82SyxVQUFVLENBQUMsQ0FBQzlNLENBQUQsRUFBSU0sQ0FBQyxDQUFDLENBQUMsQ0FBRixDQUFMLENBQUQsRUFBYUksQ0FBYixDQUFqQjtBQUNILENBMStCTyxDQTArQkxaLEVBQUUsQ0FBQ29OLFNBMStCRSxDQUFSOztBQTIrQkFDLE9BQU8sV0FBUCxHQUFrQjNNLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciAkbGV2ZWxDb25zdGFudCA9IHJlcXVpcmUoXCIuL0xldmVsQ29uc3RhbnRcIik7XG52YXIgbCA9IGNjLl9kZWNvcmF0b3I7XG52YXIgaCA9IGwuY2NjbGFzcztcbnZhciBwID0gbC5wcm9wZXJ0eTtcbnZhciBkID0gbC5leGVjdXRlSW5FZGl0TW9kZTtcbnZhciB1ID0gbC5leGVjdXRpb25PcmRlcjtcbnZhciBnID0gKGZ1bmN0aW9uKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5sZXZlbElEID0gLTE7XG4gICAgICAgIGUubGV2ZWxKU09OID0gbnVsbDtcbiAgICAgICAgZS5mb2xkZXIgPSBcIlwiO1xuICAgICAgICBlLnByZWxvYWRBc3NldCA9ICEwO1xuICAgICAgICBlLmRpY3QgPSB7fTtcbiAgICAgICAgZS5kZ05vZGUgPSBudWxsO1xuICAgICAgICBlLmN3Tm9kZSA9IG51bGw7XG4gICAgICAgIGUudGl0bGVOb2RlID0gbnVsbDtcbiAgICAgICAgZS5pc0VuZCA9ICExO1xuICAgICAgICBlLnVzZUNvdW5kRG93biA9ICEwO1xuICAgICAgICBlLnVzZUNvdW50RG93biA9ICEwO1xuICAgICAgICBlLmxvYWRBc3NldENvdW50ID0gMDtcbiAgICAgICAgZS5sb2FkQXNzZXRUb3RhbCA9IDA7XG4gICAgICAgIGUuYXNzZXRBc3NpZ25tZW50VHlwZSA9IDE7XG4gICAgICAgIGUuYXNzZXRDYWNoZXMgPSBbXTtcbiAgICAgICAgZS5hdWRpb0NhY2hlcyA9IFtdO1xuICAgICAgICBlLmFzc2V0TG9hZFRpbWVyID0gbnVsbDtcbiAgICAgICAgZS5jdXJyZW50SW1nID0gW107XG4gICAgICAgIGUuY3VycmVudEF1ZGlvID0gW107XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub25MZXZlbEluaXRpYWwoKTtcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0Tm9kZSgpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRTcHJpdGVGcmFtZSgpO1xuICAgICAgICB0aGlzLnNldExldmVsQXNzZXQoKTtcbiAgICAgICAgdGhpcy5sb2FkTm9kZVRyZWUoKTtcbiAgICAgICAgdGhpcy5vbkxldmVsTG9hZCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25FbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vbkxldmVsRW5hYmxlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9uTGV2ZWxTdGFydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25EaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0Q29sbGlzaW9uTWFuYWdlcighMSwgITEpO1xuICAgICAgICB0aGlzLnN0b3BMZXZlbEFsbFNvdW5kKCk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWZhdWx0U3ByaXRlRnJhbWUoKTtcbiAgICAgICAgdGhpcy5jbGVhckFzc2V0Q2FjaGVzKCk7XG4gICAgICAgIHRoaXMuY2xlYXJBdWRpb0NhY2hlcygpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hc3NldExvYWRUaW1lcik7XG4gICAgICAgIHRoaXMub25MZXZlbERpc2FibGUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuY3VycmVudEF1ZGlvLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFzc2V0KHRoaXMuY3VycmVudEF1ZGlvW3RdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uTGV2ZWxEZXN0b3J5KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sYXRlVXBkYXRlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLm9uTGV2ZWxMYXRlVXBkYXRlKHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24odCkge1xuICAgICAgICB0aGlzLm9uTGV2ZWxVcGRhdGUodCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXREZWZhdWx0Tm9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmN3Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImN3XCIpO1xuICAgICAgICB0aGlzLmRnTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRnXCIpO1xuICAgICAgICB0aGlzLnRpdGxlTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIHx8IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxibFRpdGxlXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2V0RGVmYXVsdFNwcml0ZUZyYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN3Tm9kZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2MucmVzb3VyY2VzLmxvYWQoXCJ6cWRkbl96aGIvbGV2ZWwvY3dcIiwgZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKG8sIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jb21tb24vY3dcIiwgXCIucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG8uc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY3dOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0KHRoaXMuY3dOb2RlLCBpKSwgWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgWzMsIDNdKSA6IFszLCAxXSA6IFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmRvd25sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2NvbW1vbi9jd1wiLCBcIi5wbmdcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gaS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0KHRoaXMuY3dOb2RlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZ05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MucmVzb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInpxZGRuX3poYi9sZXZlbC9kZ1wiLCBmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihvLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG8ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jb21tb24vZGdcIiwgXCIucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG8uc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuZGdOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQodGhpcy5kZ05vZGUsIGkpLCBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFszLCA2XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuZG93bmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvY29tbW9uL2RnXCIsIFwiLnBuZ1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBpLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQodGhpcy5kZ05vZGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXJEZWZhdWx0U3ByaXRlRnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3dOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmN3Tm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGdOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmRnTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsZWFyQXNzZXRDYWNoZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hc3NldENhY2hlcyA9IFtdO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXJBdWRpb0NhY2hlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmF1ZGlvQ2FjaGVzID0gW107XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRMZXZlbEFzc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB0LmxvYWRBc3NldENvdW50Kys7XG4gICAgICAgICAgICB0Lm9uTGV2ZWxBc3NldHNMb2FkZWQoZSk7XG4gICAgICAgICAgICBpZiAodC5sb2FkQXNzZXRDb3VudCA+PSB0LmxvYWRBc3NldFRvdGFsKSB7XG4gICAgICAgICAgICAgICAgdC5hc3NldExvYWRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHQub25Bc3NldExvYWRlZEFsbEZpbmlzaEhhbmRsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0Lm9uTGV2ZWxBbGxBc3NldHNMb2FkZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdC5vbkFzc2V0QXNzaWdubWVudEhhbmRsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0Lm9uTGV2ZWxSZWFkeSgpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5wcmVsb2FkQXNzZXQpIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZVwiKTtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBmdW5jdGlvbihvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gZnVuY3Rpb24odCwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodSwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmRvd25sb2FkU3ByaXRlRnJhbWUodCwgbyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAmJiBjYy5pc1ZhbGlkKGkubm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpIGluc3RhbmNlb2YgY2MuU3ByaXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuc3JjQmxlbmRGYWN0b3IgPT0gY2MubWFjcm8uQmxlbmRGYWN0b3IuT05FICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuc2V0UHJlbXVsdGlwbHlBbHBoYSghMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgIT0gaC5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvbmVcIiA9PSBoWzFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaS5zcmNCbGVuZEZhY3RvciA9IGNjLm1hY3JvLkJsZW5kRmFjdG9yLk9ORSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnNldFByZW11bHRpcGx5QWxwaGEoITApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMgPSBuZXcgY2MuU3ByaXRlRnJhbWUoYSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxICE9IChsID0gaCkubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgocCA9IFwib25lXCIgPT0gbFsxXSA/IDIgOiAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5zZXRMZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnNldFJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnNldFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5zZXRCb3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLmZvckVhY2goZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsW2UgKyBwXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGNbZFtlXV0gPSBOdW1iZXIobFtlICsgcF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgaW5zdGFuY2VvZiBjYy5NYXNrICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkubm9kZS5zZXRDb250ZW50U2l6ZShhLndpZHRoLCBhLmhlaWdodCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgaW5zdGFuY2VvZiBjYy5Nb3Rpb25TdHJlYWsgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkubm9kZS5zZXRDb250ZW50U2l6ZShhLndpZHRoLCBhLmhlaWdodCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaS50ZXh0dXJlID0gYSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMuYXNzZXRBc3NpZ25tZW50VHlwZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpLnNwcml0ZUZyYW1lID0gYykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyID09IHRoaXMuYXNzZXRBc3NpZ25tZW50VHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0Q2FjaGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiBjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKG4pLCBbMiwgcighMCldKSA6IFsyLCByKCEwKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCByKCExKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0VG90YWwrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLmZvbGRlciB8fCBcIlwiICsgdGhpcy5sZXZlbElEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSAobCA9IG8uc3BsaXQoXCIuXCIpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJjXCIgPT0gbFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gXCJjb21tb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gbFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IGxbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgzID09IGwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImNcIiA9PSBsWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gXCJjb21tb24vXCIgKyBsWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBsWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaCA9IG4uc3BsaXQoXCIsXCIpKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IGhbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCAhPSByLmluZGV4T2YoXCJjb21tb25cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gciArIFwiX1wiICsgbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgdCgocCA9IFwidGV4dHVyZS9cIiArIHIgKyBcIi9cIiArIG4pLCBcIi5wbmdcIildO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGQgPSBnLnNlbnQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHQocCwgXCIuanBnXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IGcuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KCRsZXZlbENvbnN0YW50LkxFVkVMX0VWRU5ULkdBTUVfQVNTRVRfRE9XTkRPV05fRkFJTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByID0gZnVuY3Rpb24obywgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHQsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0VG90YWwrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSB0aGlzLmZvbGRlciB8fCBcIlwiICsgdGhpcy5sZXZlbElEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSAobiA9IG8uc3BsaXQoXCIuXCIpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJjXCIgPT0gblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gXCJjb21tb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IG5bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgzID09IG4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImNcIiA9PSBuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gXCJjb21tb24vXCIgKyBuWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBuWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSByLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDIgPT0gYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gYVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDMgPT0gYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IGFbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBhWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gYVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gXCJzcGluZS9cIiArIHQgKyBcIi9cIiArIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gXCJzcGluZS9cIiArIHQgKyBcIi9cIiArIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gXCJzcGluZS9cIiArIHQgKyBcIi9cIiArIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCB0aGlzLmRvd25sb2FkU3BpbmUodSwgZCwgcCwgcildO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAmJiBjYy5pc1ZhbGlkKGkubm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgobSA9IG5ldyBzcC5Ta2VsZXRvbkRhdGEoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdbMF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKG0uc2tlbGV0b25Kc29uID0gZ1sxXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobS5hdGxhc1RleHQgPSBnWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtLnRleHR1cmVzID0gZ1syXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobS50ZXh0dXJlTmFtZXMgPSBnWzNdKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobSA9IGdbMV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMuYXNzZXRBc3NpZ25tZW50VHlwZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaS5za2VsZXRvbkRhdGEgPSBtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuc2V0U2tpbihoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpLmRlZmF1bHRTa2luID0gaCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobCB8fCBtLmdldFJ1bnRpbWVEYXRhKCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGkuZGVmYXVsdEFuaW1hdGlvbiA9IGwgfHwgbS5nZXRSdW50aW1lRGF0YSgpLmFuaW1hdGlvbnNbMF0ubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5zZXRBbmltYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgfHwgbS5nZXRSdW50aW1lRGF0YSgpLmFuaW1hdGlvbnNbMF0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5sb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiA9PSB0aGlzLmFzc2V0QXNzaWdubWVudFR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldENhY2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG86IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzOiBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHIpLCBbMywgNF0pIDogWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdCgkbGV2ZWxDb25zdGFudC5MRVZFTF9FVkVOVC5HQU1FX0FTU0VUX0RPV05ET1dOX0ZBSUwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwICE9IHQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlICYmIGUuZW5hYmxlZCAmJiAhZS5zcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpKHQubmFtZS5zcGxpdChcIj1cIilbMF0sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBvLmVuYWJsZWQgJiYgIW8uc2tlbGV0b25EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIodC5uYW1lLnNwbGl0KFwiPVwiKVswXSwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHQuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5lbmFibGVkICYmIGEudHlwZSA9PSBjYy5NYXNrLlR5cGUuSU1BR0VfU1RFTkNJTCAmJiAhYS5zcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpKHQubmFtZS5zcGxpdChcIj1cIilbMF0sIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0LmdldENvbXBvbmVudChjYy5Nb3Rpb25TdHJlYWspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgJiYgcy5lbmFibGVkICYmICFzLnRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSh0Lm5hbWUuc3BsaXQoXCI9XCIpWzBdLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBuKG8pO1xuICAgICAgICAgICAgICAgIGlmICgwID09IHRoaXMubG9hZEFzc2V0VG90YWwgJiYgdGhpcy5sb2FkQXNzZXRDb3VudCA9PSB0aGlzLmxvYWRBc3NldFRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGUoXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZShudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZG93bmxvYWRTcHJpdGVGcmFtZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSwgcikge1xuICAgICAgICAgICAgaWYgKCRsZXZlbENvbnN0YW50LkFTU0VUX0xPQ0FMX0JVTkRMRSkge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCRsZXZlbENvbnN0YW50LkFTU0VUX0xPQ0FMX0JVTkRMRSwgZnVuY3Rpb24oZSwgbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgby5sb2FkKHQsIGNjLlRleHR1cmUyRCwgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ICs9IGU7XG4gICAgICAgICAgICAgICAgdCA9IFwiXCIgKyBvLmdldERvbWFpbigpICsgdDtcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh0LCBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcih0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmN1cnJlbnRJbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudEltZyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50SW1nLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgIGkoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZG93bmxvYWRTcGluZSA9IGZ1bmN0aW9uKHQsIGUsIG8sIGkpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgbCkge1xuICAgICAgICAgICAgaWYgKCRsZXZlbENvbnN0YW50LkFTU0VUX0xPQ0FMX0JVTkRMRSkge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCRsZXZlbENvbnN0YW50LkFTU0VUX0xPQ0FMX0JVTkRMRSwgZnVuY3Rpb24odCwgbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgby5sb2FkKGUsIHNwLlNrZWxldG9uRGF0YSwgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG4oW251bGwsIGUsIG51bGxdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQgPSBcIlwiICsgci5nZXREb21haW4oKSArIHQgKyBcIi5hdGxhc1wiO1xuICAgICAgICAgICAgICAgIGUgPSBcIlwiICsgci5nZXREb21haW4oKSArIGUgKyBcIi5qc29uXCI7XG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRBbnkoXG4gICAgICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogXCIudHh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dDogXCIudHh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihyLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBsKHQpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChyID0gITAsIGEgPSBbXTsgcjspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09IGVbMF0uaW5kZXhPZihcIlwiICsgaSArIChhLmxlbmd0aCA/IGEubGVuZ3RoICsgMSA6IFwiXCIpICsgXCIucG5nXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goXCJcIiArIGkgKyAoYS5sZW5ndGggPyBhLmxlbmd0aCArIDEgOiBcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IG8uc3Vic3RyaW5nKDAsIG8ubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gYS5tYXAoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjICsgXCIvXCIgKyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChkID0gYS5zaGlmdCgpKSwgWzQsIHRoaXMuZG93bmxvYWRTcHJpdGVGcmFtZShkLCBcIi5wbmdcIildO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnB1c2godSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmRvd25sb2FkQXVkaW8gPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG8sIGkpIHtcbiAgICAgICAgICAgIGlmICgtMSAhPSB0LmluZGV4T2YoJGxldmVsQ29uc3RhbnQuZG9tYWluKSkge1xuICAgICAgICAgICAgICAgIHQgPSB0LnN1YnN0cmluZygkbGV2ZWxDb25zdGFudC5kb21haW4ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgtMSAhPSB0LmluZGV4T2YoJGxldmVsQ29uc3RhbnQuZG9tYWluX2xvY2FsKSkge1xuICAgICAgICAgICAgICAgIHQgPSB0LnN1YnN0cmluZygkbGV2ZWxDb25zdGFudC5kb21haW5fbG9jYWwubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgtMSAhPSB0LmluZGV4T2YoXCIubXAzXCIpKSB7XG4gICAgICAgICAgICAgICAgdCA9IHQuc3Vic3RyaW5nKDAsIHQuaW5kZXhPZihcIi5tcDNcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRsZXZlbENvbnN0YW50LkFTU0VUX0xPQ0FMX0JVTkRMRSkge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCRsZXZlbENvbnN0YW50LkFTU0VUX0xPQ0FMX0JVTkRMRSwgZnVuY3Rpb24oZSwgcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgci5sb2FkKHQsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG8oZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gXCJcIiArIGUuZ2V0RG9tYWluKCkgKyB0ICsgXCIubXAzXCI7XG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUodCwgZnVuY3Rpb24odCwgZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5sb2FkTm9kZVRyZWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdhbWVcIik7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3RbZS5uYW1lXSA9IGU7XG4gICAgICAgICAgICB2YXIgbyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoMCAhPSBlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoLTEgPT0gZS5uYW1lLmluZGV4T2YoXCJjb3B5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUubmFtZS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMSAhPSBpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZGljdFtpWzFdXSB8fCAodC5kaWN0W2lbMV1dID0gZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5uYW1lID0gaVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuZGljdFtlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kaWN0W2UubmFtZV0gPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG8oZSk7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRlbXBcIik7XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdFtpLm5hbWVdID0gaTtcbiAgICAgICAgICAgICAgICBvKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRQaHlzaWNzTWFuYWdlciA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNldENvbGxpc2lvbk1hbmFnZXIgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodCB8fCAoY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgJiYgIXQpKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUgfHwgKGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ICYmICFlKSkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRBc3NldEFzc2lnbm1lbnRUeXBlID0gZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFzc2V0QXNzaWdubWVudFR5cGUgPSB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheVJlbW90ZVNvdW5kID0gZnVuY3Rpb24odCwgZSwgbykge1xuICAgICAgICB2YXIgaSA9IHRoaXM7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XG4gICAgICAgICAgICBvID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihpLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9DYWNoZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuZG93bmxvYWRBdWRpbyh0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IHRoaXMuYXVkaW9DYWNoZXMuZmluZChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS51cmwgPT0gdCAmJiAhZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQuaW5jbHVkZXMoXCJiZ21cIikgfHwgdC5pbmNsdWRlcyhcIkJnbVwiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubXVzaWNNdXRlICYmIChvID0gMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmVmZmVjdE11dGUgJiYgKG8gPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhID0gY2MuYXVkaW9FbmdpbmUucGxheShpLCBlLCBvKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobi5pZCA9IGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuYXVkaW9DYWNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBjLmF1ZGlvQ2FjaGVzLmZpbmRJbmRleChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5pZCA9PSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuYXVkaW9DYWNoZXMuc3BsaWNlKHQsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIFsyLCByKGEpXSkgOiBbMiwgcigtMSldIDogWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3RvcEF1ZGlvQnlVcmwgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5hdWRpb0NhY2hlcy5maW5kKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnVybCA9PT0gdCAmJiBlLmlkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoZS5pZCk7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMuYXVkaW9DYWNoZXMuZmluZEluZGV4KGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gby51cmwgPT09IHQgJiYgby5pZCA9PT0gZS5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKC0xICE9PSBvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0NhY2hlcy5zcGxpY2UobywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlMZXZlbFNvdW5kID0gZnVuY3Rpb24odCwgZSwgbykge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xuICAgICAgICAgICAgbyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSB0aGlzLmZvbGRlciB8fCBcIlwiICsgdGhpcy5sZXZlbElEO1xuICAgICAgICB2YXIgciA9IFwiYXVkaW8vXCIgKyBpICsgXCIvXCIgKyBpICsgXCJfXCIgKyB0O1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5UmVtb3RlU291bmQociwgZSwgbyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdG9wTGV2ZWxTb3VuZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmZvbGRlciB8fCBcIlwiICsgdGhpcy5sZXZlbElEO1xuICAgICAgICB2YXIgbyA9IFwiYXVkaW8vXCIgKyBlICsgXCIvXCIgKyBlICsgXCJfXCIgKyB0O1xuICAgICAgICB2YXIgaSA9IHRoaXMuYXVkaW9DYWNoZXMuZmluZEluZGV4KGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnVybCA9PSBvO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKC0xICE9IGkpIHtcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5hdWRpb0NhY2hlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgICAgICBpZiAociAmJiByLmlkKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChyLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3RvcExldmVsQWxsU291bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9DYWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2FjaGVzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodC5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9DYWNoZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheUNsaWNrU291bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheVJlbW90ZVNvdW5kKCRsZXZlbENvbnN0YW50LkFVRElPX1VSTC5DTElDSyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5RXJyb3JPbmNlID0gZnVuY3Rpb24odCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdmFyIG8gPSBjYy52MigpO1xuICAgICAgICAgICAgdmFyIGkgPSBjYy52MigpO1xuICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgbyA9IHQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5jd05vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgKG8gPSBjYy52Mih0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodC5wb3NpdGlvbikpKSxcbiAgICAgICAgICAgICAgICAgICAgKGkgPSB0aGlzLmN3Tm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgaW5zdGFuY2VvZiBjYy5FdmVudC5FdmVudFRvdWNoICYmIChpID0gY2MudjIodCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3dOb2RlLnNldFBvc2l0aW9uKGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3dOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmN3Tm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIHRoaXMuY3dOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMucGxheVJlbW90ZVNvdW5kKCRsZXZlbENvbnN0YW50LkFVRElPX1VSTC5FUlJPUik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuY3dOb2RlKVxuICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KGUpXG4gICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYXlFcnJvciA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbmQgPSAhMDtcbiAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBjYy52MigpO1xuICAgICAgICAgICAgICAgIHZhciByID0gY2MudjIoKTtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IHQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMuY3dOb2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChpID0gY2MudjIodC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHQucG9zaXRpb24pKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAociA9IHRoaXMuY3dOb2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAodCBpbnN0YW5jZW9mIGNjLlZlYzIgfHwgdCBpbnN0YW5jZW9mIGNjLlZlYzMpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAociA9IHRoaXMuY3dOb2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jd05vZGUuc2V0UG9zaXRpb24ocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN3Tm9kZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuY3dOb2RlLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuY3dOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlSZW1vdGVTb3VuZCgkbGV2ZWxDb25zdGFudC5BVURJT19VUkwuRVJST1IpO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5jd05vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG8uZ2FtZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheVJpZ2h0T25jZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdmFyIGkgPSBjYy52MigpO1xuICAgICAgICAgICAgdmFyIHIgPSBjYy52MigpO1xuICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgaSA9IHQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICByID0gdGhpcy5kZ05vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgKGkgPSBjYy52Mih0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodC5wb3NpdGlvbikpKSxcbiAgICAgICAgICAgICAgICAgICAgKHIgPSB0aGlzLmRnTm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgaW5zdGFuY2VvZiBjYy5FdmVudC5FdmVudFRvdWNoICYmIChyID0gY2MudjIodCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGdOb2RlLnNldFBvc2l0aW9uKHIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGdOb2RlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmRnTm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIHRoaXMuZGdOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZGdOb2RlKVxuICAgICAgICAgICAgLmRlbGF5KDAuMylcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG8ucGxheVJlbW90ZVNvdW5kKCRsZXZlbENvbnN0YW50LkFVRElPX1VSTC5SSUdIVCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKFxuICAgICAgICAgICAgICAgIDAuMywge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuZXhwb091dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5kZWxheShlKVxuICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5UmlnaHQgPSBmdW5jdGlvbih0LCBlKSB7XG4gICAgICAgIHZhciBvID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW5kID0gITA7XG4gICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gY2MudjIoKTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGNjLnYyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSB0LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLmRnTm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBjYy5Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoaSA9IGNjLnYyKHQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0LnBvc2l0aW9uKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSB0aGlzLmRnTm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCBpbnN0YW5jZW9mIGNjLkV2ZW50LkV2ZW50VG91Y2ggJiYgKHIgPSBjYy52Mih0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kZ05vZGUuc2V0UG9zaXRpb24ocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRnTm9kZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuZGdOb2RlLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGdOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmRnTm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC4zKVxuICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBvLnBsYXlSZW1vdGVTb3VuZCgkbGV2ZWxDb25zdGFudC5BVURJT19VUkwuUklHSFQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKFxuICAgICAgICAgICAgICAgICAgICAwLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLmV4cG9PdXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZGVsYXkoZSlcbiAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgby5nYW1lUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nYW1lRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwib25SZXN0YXJ0QnRuXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2FtZVJpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVfc3VjY2VzczFcIik7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVfc3VjY2VzczJcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXREb21haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRsZXZlbENvbnN0YW50LmRvbWFpbjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uQXNzZXRBc3NpZ25tZW50SGFuZGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgyID09IHRoaXMuYXNzZXRBc3NpZ25tZW50VHlwZSAmJiB0aGlzLmFzc2V0Q2FjaGVzLmxlbmd0aCAmJiBjYy5pc1ZhbGlkKHRoaXMubm9kZSwgITApKSB7XG4gICAgICAgICAgICB0aGlzLmFzc2V0Q2FjaGVzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHQuYy5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PSB0LnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuYy5zcHJpdGVGcmFtZSA9IHQuYTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIgPT0gdC50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0LmMuc2tlbGV0b25EYXRhID0gdC5hKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jLnNldFNraW4odC5zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQubyB8fCB0LmEuZ2V0UnVudGltZURhdGEoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh0LmMuZGVmYXVsdEFuaW1hdGlvbiA9IHQubyB8fCB0LmEuZ2V0UnVudGltZURhdGEoKS5hbmltYXRpb25zWzBdLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5jLnNldEFuaW1hdGlvbigwLCB0Lm8gfHwgdC5hLmdldFJ1bnRpbWVEYXRhKCkuYW5pbWF0aW9uc1swXS5uYW1lLCB0LmMubG9vcCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsSW5pdGlhbCA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUub25MZXZlbFVwZGF0ZSA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUub25MZXZlbExhdGVVcGRhdGUgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLm9uTGV2ZWxMb2FkID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsRW5hYmxlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsU3RhcnQgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLm9uTGV2ZWxSZWFkeSA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUub25MZXZlbERpc2FibGUgPSBmdW5jdGlvbigpIHt9O1xuICAgIGUucHJvdG90eXBlLm9uTGV2ZWxEZXN0b3J5ID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsQXNzZXRzTG9hZGVkID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsQWxsQXNzZXRzTG9hZGVkID0gZnVuY3Rpb24oKSB7fTtcbiAgICBlLnByb3RvdHlwZS5vbkxldmVsUmVhZHlPbkVkaXRvciA9IGZ1bmN0aW9uKCkge307XG4gICAgZS5wcm90b3R5cGUub25Bc3NldExvYWRlZEFsbEZpbmlzaEhhbmRsZSA9IGZ1bmN0aW9uKCkge307XG4gICAgX19kZWNvcmF0ZShcbiAgICAgICAgW1xuICAgICAgICAgICAgcCh7XG4gICAgICAgICAgICAgICAgdG9vbHRpcDogXCLlhbPljaFJRFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBlLnByb3RvdHlwZSxcbiAgICAgICAgXCJsZXZlbElEXCIsXG4gICAgICAgIHZvaWQgMFxuICAgICk7XG4gICAgX19kZWNvcmF0ZShcbiAgICAgICAgW1xuICAgICAgICAgICAgcCh7XG4gICAgICAgICAgICAgICAgdHlwZTogY2MuSnNvbkFzc2V0LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwi5YWz5Y2hSlNPTlwiXG4gICAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBlLnByb3RvdHlwZSxcbiAgICAgICAgXCJsZXZlbEpTT05cIixcbiAgICAgICAgdm9pZCAwXG4gICAgKTtcbiAgICBfX2RlY29yYXRlKFxuICAgICAgICBbXG4gICAgICAgICAgICBwKHtcbiAgICAgICAgICAgICAgICB0b29sdGlwOiBcIui1hOa6kOi/nOeoi+aWh+S7tuWkueWQjeWtlyjoi6Xml6DliJnkuLrlhbPljaFJRClcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgZS5wcm90b3R5cGUsXG4gICAgICAgIFwiZm9sZGVyXCIsXG4gICAgICAgIHZvaWQgMFxuICAgICk7XG4gICAgX19kZWNvcmF0ZShcbiAgICAgICAgW1xuICAgICAgICAgICAgcCh7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwi5piv5ZCm5Yqg6L296L+c56iL6LWE5rqQXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIGUucHJvdG90eXBlLFxuICAgICAgICBcInByZWxvYWRBc3NldFwiLFxuICAgICAgICB2b2lkIDBcbiAgICApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtoLCB1KC0xKV0sIGUpO1xufSkoY2MuQ29tcG9uZW50KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGc7Il19