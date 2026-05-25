var i;
var $levelConstant = require("./LevelConstant");
var l = cc._decorator;
var h = l.ccclass;
var p = l.property;
var d = l.executeInEditMode;
var u = l.executionOrder;
var g = (function(t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
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
    e.prototype.onLoad = function() {
        this.onLevelInitial();
        this.getDefaultNode();
        this.setDefaultSpriteFrame();
        this.setLevelAsset();
        this.loadNodeTree();
        this.onLevelLoad();
    };
    e.prototype.onEnable = function() {
        this.onLevelEnable();
    };
    e.prototype.start = function() {
        this.onLevelStart();
    };
    e.prototype.onDisable = function() {
        this.setCollisionManager(!1, !1);
        this.stopLevelAllSound();
        this.clearDefaultSpriteFrame();
        this.clearAssetCaches();
        this.clearAudioCaches();
        clearTimeout(this.assetLoadTimer);
        this.onLevelDisable();
    };
    e.prototype.onDestroy = function() {
        for (var t = 0; t < this.currentAudio.length; t++) {
            cc.assetManager.releaseAsset(this.currentAudio[t]);
        }
        this.onLevelDestory();
    };
    e.prototype.lateUpdate = function(t) {
        this.onLevelLateUpdate(t);
    };
    e.prototype.update = function(t) {
        this.onLevelUpdate(t);
    };
    e.prototype.getDefaultNode = function() {
        this.cwNode = this.node.getChildByName("cw");
        this.dgNode = this.node.getChildByName("dg");
        this.titleNode = this.node.getChildByName("title") || this.node.getChildByName("lblTitle");
    };
    e.prototype.setDefaultSpriteFrame = function() {
        return __awaiter(this, void 0, Promise, function() {
            var t;
            var e;
            var o = this;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        t = function(t, e) {
                            if (e) {
                                t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e);
                            }
                        };
                        return this.cwNode ?
                            cc.resources ?
                            (cc.resources.load("zqddn_zhb/level/cw", function(e, i) {
                                return __awaiter(o, void 0, void 0, function() {
                                    return __generator(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                if (e) {
                                                    return [
                                                        4,
                                                        this.downloadSpriteFrame("texture/common/cw", ".png")
                                                    ];
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
                                return (
                                    cc.resources.load("zqddn_zhb/level/dg", function(e, i) {
                                        return __awaiter(o, void 0, void 0, function() {
                                            return __generator(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        if (e) {
                                                            return [
                                                                4,
                                                                this.downloadSpriteFrame("texture/common/dg", ".png")
                                                            ];
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
                                    }), [3, 6]
                                );
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
    e.prototype.clearDefaultSpriteFrame = function() {
        if (this.cwNode) {
            this.cwNode.getComponent(cc.Sprite).spriteFrame = null;
        }
        if (this.dgNode) {
            this.dgNode.getComponent(cc.Sprite).spriteFrame = null;
        }
    };
    e.prototype.clearAssetCaches = function() {
        this.assetCaches = [];
    };
    e.prototype.clearAudioCaches = function() {
        this.audioCaches = [];
    };
    e.prototype.setLevelAsset = function() {
        var t = this;
        var e = function(e) {
            t.loadAssetCount++;
            t.onLevelAssetsLoaded(e);
            if (t.loadAssetCount >= t.loadAssetTotal) {
                t.assetLoadTimer = setTimeout(function() {
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
                var i = function(o, i) {
                    return __awaiter(t, void 0, void 0, function() {
                        var t;
                        var r;
                        var n;
                        var l;
                        var h;
                        var p;
                        var d;
                        var u = this;
                        return __generator(this, function(g) {
                            switch (g.label) {
                                case 0:
                                    t = function(t, o) {
                                        return new Promise(function(r) {
                                            return __awaiter(u, void 0, void 0, function() {
                                                var a;
                                                var c;
                                                var l;
                                                var p;
                                                var d;
                                                var u;
                                                return __generator(this, function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            s.trys.push([0, 2, , 3]);
                                                            return [4, this.downloadSpriteFrame(t, o)];
                                                        case 1:
                                                            a = s.sent();
                                                            return i && cc.isValid(i.node) ?
                                                                (i instanceof cc.Sprite &&
                                                                    i.srcBlendFactor == cc.macro.BlendFactor.ONE &&
                                                                    a.setPremultiplyAlpha(!0),
                                                                    1 != h.length &&
                                                                    "one" == h[1] &&
                                                                    ((i.srcBlendFactor = cc.macro.BlendFactor.ONE),
                                                                        a.setPremultiplyAlpha(!0)),
                                                                    (c = new cc.SpriteFrame(a)),
                                                                    1 != (l = h).length &&
                                                                    ((p = "one" == l[1] ? 2 : 1),
                                                                        (d = [
                                                                            "insetLeft",
                                                                            "insetRight",
                                                                            "insetTop",
                                                                            "insetBottom"
                                                                        ]),
                                                                        l.forEach(function(t, e) {
                                                                            if (l[e + p]) {
                                                                                return (c[d[e]] = Number(l[e + p]));
                                                                            } else {
                                                                                return null;
                                                                            }
                                                                        })),
                                                                    i instanceof cc.Mask &&
                                                                    i.node.setContentSize(a.width, a.height),
                                                                    i instanceof cc.MotionStreak &&
                                                                    (i.node.setContentSize(a.width, a.height),
                                                                        (i.texture = a)),
                                                                    1 == this.assetAssignmentType ?
                                                                    (i.spriteFrame = c) :
                                                                    2 == this.assetAssignmentType &&
                                                                    this.assetCaches.push({
                                                                        t: 1,
                                                                        c: i,
                                                                        a: c
                                                                    }),
                                                                    e(n), [2, r(!0)]) : [2, r(!0)];
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
                                    return [4, t((p = "texture/" + r + "/" + n), ".png")];
                                case 1:
                                    if ((d = g.sent())) {
                                        return [3, 3];
                                    } else {
                                        return [4, t(p, ".jpg")];
                                    }
                                case 2:
                                    d = g.sent();
                                    g.label = 3;
                                case 3:
                                    if (d) {
                                        //
                                    } else {
                                        cc.game.emit($levelConstant.LEVEL_EVENT.GAME_ASSET_DOWNDOWN_FAIL);
                                    }
                                    return [2];
                            }
                        });
                    });
                };
                var r = function(o, i) {
                    return __awaiter(t, void 0, void 0, function() {
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
                        return __generator(this, function(s) {
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
                                    s.trys.push([1, 3, , 4]);
                                    return [4, this.downloadSpine(u, d, p, r)];
                                case 2:
                                    g = s.sent();
                                    return i && cc.isValid(i.node) ?
                                        ((m = new sp.SkeletonData()),
                                            g[0] ?
                                            ((m.skeletonJson = g[1]),
                                                (m.atlasText = g[0]),
                                                (m.textures = g[2]),
                                                (m.textureNames = g[3])) :
                                            (m = g[1]),
                                            1 == this.assetAssignmentType ?
                                            ((i.skeletonData = m),
                                                i.setSkin(h),
                                                (i.defaultSkin = h),
                                                (l || m.getRuntimeData()) &&
                                                ((i.defaultAnimation = l || m.getRuntimeData().animations[0].name),
                                                    i.setAnimation(
                                                        0,
                                                        l || m.getRuntimeData().animations[0].name,
                                                        i.loop
                                                    ))) :
                                            2 == this.assetAssignmentType &&
                                            this.assetCaches.push({
                                                t: 2,
                                                c: i,
                                                a: m,
                                                o: l,
                                                s: h
                                            }),
                                            e(r), [3, 4]) : [2];
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
                var n = function(t) {
                    t.children.forEach(function(t) {
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
    e.prototype.downloadSpriteFrame = function(t, e) {
        var o = this;
        return new Promise(function(i, r) {
            if ($levelConstant.ASSET_LOCAL_BUNDLE) {
                cc.assetManager.loadBundle($levelConstant.ASSET_LOCAL_BUNDLE, function(e, o) {
                    if (e) {
                        return r(e);
                    }
                    o.load(t, cc.Texture2D, function(t, e) {
                        if (t) {
                            return r(t);
                        }
                        i(e);
                    });
                });
            } else {
                t += e;
                t = "" + o.getDomain() + t;
                cc.assetManager.loadRemote(t, function(t, e) {
                    if (t) {
                        return r(t);
                    }
                    if (window.currentImg) {
                        //
                    } else {
                        window.currentImg = [];
                    }
                    window.currentImg.push(e);
                    i(e);
                });
            }
        });
    };
    e.prototype.downloadSpine = function(t, e, o, i) {
        var r = this;
        return new Promise(function(n, l) {
            if ($levelConstant.ASSET_LOCAL_BUNDLE) {
                cc.assetManager.loadBundle($levelConstant.ASSET_LOCAL_BUNDLE, function(t, o) {
                    if (t) {
                        return l(t);
                    }
                    o.load(e, sp.SkeletonData, function(t, e) {
                        if (t) {
                            return l(t);
                        }
                        n([null, e, null]);
                    });
                });
            } else {
                t = "" + r.getDomain() + t + ".atlas";
                e = "" + r.getDomain() + e + ".json";
                cc.assetManager.loadAny(
                    [{
                            url: t,
                            ext: ".txt"
                        },
                        {
                            url: e,
                            ext: ".txt"
                        }
                    ],
                    function(t, e) {
                        return __awaiter(r, void 0, void 0, function() {
                            var r;
                            var a;
                            var c;
                            var h;
                            var p;
                            var d;
                            var u;
                            return __generator(this, function(s) {
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
                                        h = a.map(function(t) {
                                            return t + ".png";
                                        });
                                        a = a.map(function(t) {
                                            return c + "/" + t;
                                        });
                                        p = [];
                                        s.label = 1;
                                    case 1:
                                        if (a.length) {
                                            return (d = a.shift()), [4, this.downloadSpriteFrame(d, ".png")];
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
                    }
                );
            }
        });
    };
    e.prototype.downloadAudio = function(t) {
        var e = this;
        return new Promise(function(o, i) {
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
                cc.assetManager.loadBundle($levelConstant.ASSET_LOCAL_BUNDLE, function(e, r) {
                    if (e) {
                        return i(e);
                    }
                    r.load(t, cc.AudioClip, function(t, e) {
                        if (t) {
                            return i(t);
                        }
                        o(e);
                    });
                });
            } else {
                t = "" + e.getDomain() + t + ".mp3";
                cc.assetManager.loadRemote(t, function(t, e) {
                    if (t) {
                        return i(t);
                    }
                    o(e);
                });
            }
        });
    };
    e.prototype.loadNodeTree = function() {
        var t = this;
        var e = this.node.getChildByName("game");
        if (e) {
            this.dict[e.name] = e;
            var o = function(e) {
                e.children.forEach(function(e) {
                    if (0 != e.children.length) {
                        o(e);
                    }
                    if (-1 == e.name.indexOf("copy")) {
                        var i = e.name.split("=");
                        if (1 != i.length) {
                            t.dict[i[1]] || (t.dict[i[1]] = e);
                            e.name = i[1];
                        } else {
                            if (t.dict[e.name]) {
                                //
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
    e.prototype.setPhysicsManager = function(t, e) {
        if (void 0 === e) {
            e = 0;
        }
    };
    e.prototype.setCollisionManager = function(t, e) {
        if (void 0 === e) {
            e = !1;
        }
        if (t || (cc.director.getCollisionManager().enabled && !t)) {
            cc.director.getCollisionManager().enabled = t;
        }
        if (e || (cc.director.getCollisionManager().enabledDebugDraw && !e)) {
            cc.director.getCollisionManager().enabledDebugDraw = e;
        }
    };
    e.prototype.setAssetAssignmentType = function(t) {
        if (void 0 === t) {
            t = 1;
        }
        this.assetAssignmentType = t;
    };
    e.prototype.playRemoteSound = function(t, e, o) {
        var i = this;
        if (void 0 === e) {
            e = !1;
        }
        if (void 0 === o) {
            o = 1;
        }
        return new Promise(function(r) {
            return __awaiter(i, void 0, void 0, function() {
                var i;
                var n;
                var a;
                var c = this;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            this.audioCaches.push({
                                url: t
                            });
                            s.label = 1;
                        case 1:
                            s.trys.push([1, 3, , 4]);
                            return [4, this.downloadAudio(t)];
                        case 2:
                            i = s.sent();
                            return cc.isValid(this.node) ?
                                (n = this.audioCaches.find(function(e) {
                                    return e.url == t && !e.id;
                                })) ?
                                (t.includes("bgm") || t.includes("Bgm") ?
                                    window.musicMute && (o = 0) :
                                    window.effectMute && (o = 0),
                                    (a = cc.audioEngine.play(i, e, o)),
                                    (n.id = a),
                                    e ||
                                    cc.audioEngine.setFinishCallback(a, function() {
                                        if (c.audioCaches) {
                                            var t = c.audioCaches.findIndex(function(t) {
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
    e.prototype.stopAudioByUrl = function(t) {
        var e = this.audioCaches.find(function(e) {
            return e.url === t && e.id;
        });
        if (e) {
            cc.audioEngine.stop(e.id);
            var o = this.audioCaches.findIndex(function(o) {
                return o.url === t && o.id === e.id;
            });
            if (-1 !== o) {
                this.audioCaches.splice(o, 1);
            }
        }
    };
    e.prototype.playLevelSound = function(t, e, o) {
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
    e.prototype.stopLevelSound = function(t) {
        var e = this.folder || "" + this.levelID;
        var o = "audio/" + e + "/" + e + "_" + t;
        var i = this.audioCaches.findIndex(function(t) {
            return t.url == o;
        });
        if (-1 != i) {
            var r = this.audioCaches.splice(i, 1)[0];
            if (r && r.id) {
                cc.audioEngine.stop(r.id);
            }
        }
    };
    e.prototype.stopLevelAllSound = function() {
        if (this.audioCaches.length) {
            this.audioCaches.forEach(function(t) {
                cc.audioEngine.stop(t.id);
            });
            this.audioCaches = [];
        }
    };
    e.prototype.playClickSound = function() {
        return this.playRemoteSound($levelConstant.AUDIO_URL.CLICK);
    };
    e.prototype.playErrorOnce = function(t, e) {
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
                    (o = cc.v2(t.parent.convertToWorldSpaceAR(t.position))),
                    (i = this.cwNode.parent.convertToNodeSpaceAR(o));
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
        cc.tween(this.cwNode)
            .to(0.3, {
                scale: 1
            })
            .delay(e)
            .to(0.3, {
                scale: 0
            })
            .start();
    };
    e.prototype.playError = function(t, e) {
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
                        (i = cc.v2(t.parent.convertToWorldSpaceAR(t.position))),
                        (r = this.cwNode.parent.convertToNodeSpaceAR(i));
                    } else {
                        (t instanceof cc.Vec2 || t instanceof cc.Vec3) &&
                        (r = this.cwNode.parent.convertToNodeSpaceAR(t));
                    }
                }
                this.cwNode.setPosition(r);
            }
            this.cwNode.active = !0;
            this.cwNode.scale = 0;
            this.cwNode.stopAllActions();
            this.playRemoteSound($levelConstant.AUDIO_URL.ERROR);
            cc.tween(this.cwNode)
                .to(0.3, {
                    scale: 1
                })
                .delay(e)
                .to(0.3, {
                    scale: 0
                })
                .call(function() {
                    o.gameError();
                })
                .start();
        }
    };
    e.prototype.playRightOnce = function(t, e) {
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
                    (i = cc.v2(t.parent.convertToWorldSpaceAR(t.position))),
                    (r = this.dgNode.parent.convertToNodeSpaceAR(i));
                } else {
                    t instanceof cc.Event.EventTouch && (r = cc.v2(t));
                }
            }
            this.dgNode.setPosition(r);
        }
        this.dgNode.active = !0;
        this.dgNode.scale = 0;
        this.dgNode.stopAllActions();
        cc.tween(this.dgNode)
            .delay(0.3)
            .call(function() {
                o.playRemoteSound($levelConstant.AUDIO_URL.RIGHT);
            })
            .to(
                0.3, {
                    scale: 1
                }, {
                    easing: cc.easing.expoOut
                }
            )
            .delay(e)
            .to(0.3, {
                scale: 0
            })
            .start();
    };
    e.prototype.playRight = function(t, e) {
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
                        (i = cc.v2(t.parent.convertToWorldSpaceAR(t.position))),
                        (r = this.dgNode.parent.convertToNodeSpaceAR(i));
                    } else {
                        t instanceof cc.Event.EventTouch && (r = cc.v2(t));
                    }
                }
                this.dgNode.setPosition(r);
            }
            this.dgNode.active = !0;
            this.dgNode.scale = 0;
            this.dgNode.stopAllActions();
            cc.tween(this.dgNode)
                .delay(0.3)
                .call(function() {
                    o.playRemoteSound($levelConstant.AUDIO_URL.RIGHT);
                })
                .to(
                    0.3, {
                        scale: 1
                    }, {
                        easing: cc.easing.expoOut
                    }
                )
                .delay(e)
                .call(function() {
                    o.gameRight();
                })
                .start();
        }
    };
    e.prototype.gameError = function() {
        cc.game.emit("onRestartBtn");
    };
    e.prototype.gameRight = function() {
        cc.game.emit("game_success1");
        cc.game.emit("game_success2");
    };
    e.prototype.getDomain = function() {
        return $levelConstant.domain;
    };
    e.prototype.onAssetAssignmentHandle = function() {
        if (2 == this.assetAssignmentType && this.assetCaches.length && cc.isValid(this.node, !0)) {
            this.assetCaches.forEach(function(t) {
                if (cc.isValid(t.c.node)) {
                    if (1 == t.t) {
                        t.c.spriteFrame = t.a;
                    } else {
                        2 == t.t &&
                            ((t.c.skeletonData = t.a),
                                t.c.setSkin(t.s),
                                (t.o || t.a.getRuntimeData()) &&
                                ((t.c.defaultAnimation = t.o || t.a.getRuntimeData().animations[0].name),
                                    t.c.setAnimation(0, t.o || t.a.getRuntimeData().animations[0].name, t.c.loop)));
                    }
                }
            });
        }
    };
    e.prototype.onLevelInitial = function() {};
    e.prototype.onLevelUpdate = function() {};
    e.prototype.onLevelLateUpdate = function() {};
    e.prototype.onLevelLoad = function() {};
    e.prototype.onLevelEnable = function() {};
    e.prototype.onLevelStart = function() {};
    e.prototype.onLevelReady = function() {};
    e.prototype.onLevelDisable = function() {};
    e.prototype.onLevelDestory = function() {};
    e.prototype.onLevelAssetsLoaded = function() {};
    e.prototype.onLevelAllAssetsLoaded = function() {};
    e.prototype.onLevelReadyOnEditor = function() {};
    e.prototype.onAssetLoadedAllFinishHandle = function() {};
    __decorate(
        [
            p({
                tooltip: "关卡ID"
            })
        ],
        e.prototype,
        "levelID",
        void 0
    );
    __decorate(
        [
            p({
                type: cc.JsonAsset,
                tooltip: "关卡JSON"
            })
        ],
        e.prototype,
        "levelJSON",
        void 0
    );
    __decorate(
        [
            p({
                tooltip: "资源远程文件夹名字(若无则为关卡ID)"
            })
        ],
        e.prototype,
        "folder",
        void 0
    );
    __decorate(
        [
            p({
                displayName: "是否加载远程资源"
            })
        ],
        e.prototype,
        "preloadAsset",
        void 0
    );
    return __decorate([h, u(-1)], e);
})(cc.Component);
exports.default = g;