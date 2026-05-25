var $configConst = require("./ConfigConst");
var $configManager = require("./ConfigManager");
var i = ["logo"];
window.GameLanguage = {};
window.LanguageLabel = {};
var a = (function () {
    function t() {
        this.lastLan = "zh";
        this._lan = "zh";
        this._font = null;
    }
    Object.defineProperty(t, "instance", {
        get: function () {
            if (this._instance) {
                //
            } else {
                this._instance = new t();
            }
            return this._instance;
        },
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperty(t.prototype, "lan", {
        get: function () {
            return this._lan;
        },
        set: function (t) {
            this.lastLan = this._lan;
            this._lan = t;
            this.updateLan();
        },
        enumerable: !1,
        configurable: !0
    });
    t.prototype.setFont = function (t) {
        this._font = t;
    };
    t.prototype.init = function () {
        var e = this;
        try {
            var n = cc.sys.language;
            var r = cc.sys.languageCode;
            if ("zh" === n) {
                if (
                    -1 != r.indexOf("hant") ||
                    -1 != r.indexOf("tw") ||
                    -1 != r.indexOf("hk") ||
                    -1 != r.indexOf("mo")
                ) {
                    this.lan = "tc";
                } else {
                    this.lan = "zh";
                }
            } else {
                this.lan = "en";
            }
            if (cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD) {
                //
            } else {
                if (window.haiwai) {
                    if ("zh" === n) {
                        if (
                            -1 != r.indexOf("hant") ||
                            -1 != r.indexOf("tw") ||
                            -1 != r.indexOf("hk") ||
                            -1 != r.indexOf("mo")
                        ) {
                            this.lan = "tc";
                        } else {
                            this.lan = "zh";
                        }
                    } else {
                        if ("ja" == n) {
                            this.lan = "ja";
                        } else {
                            this.lan = "en";
                        }
                    }
                } else {
                    this.lan = "zh";
                }
            }
            this.lan = "zh";
            console.log(
                "[Language] --> 初始化语言:  lan: " + this.lan + " systype: " + n + " syscode: " + cc.sys.languageCode
            );
            cc.game.emit("language-init", this.lan);
        } catch (o) {}
        Object.defineProperty(cc.Label.prototype, "string", {
            get: function () {
                return this._string;
            },
            set: function (e) {
                if (null != e) {
                    if ("tc" == t.instance.lan) {
                    } else {
                        var n = this._string;
                        var r = e;
                        if (window.GameLanguage && window.GameLanguage[e]) {
                            r = window.GameLanguage[e] || "";
                        }
                        if (r && "number" != typeof r) {
                            r = r.replace("<br/>", "\n");
                        }
                        this._string = "" + r;
                        if (this.string !== n) {
                            this.setVertsDirty();
                        }
                        this._checkStringEmpty();
                    }
                }
            }
        });
        cc.Label.prototype.onLoad = function () {
            if (this._batchAsBitmap && this.cacheMode === cc.Label.CacheMode.NONE) {
                this.cacheMode = cc.Label.CacheMode.BITMAP;
                this._batchAsBitmap = !1;
            }
            if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
                this.cacheMode = cc.Label.CacheMode.NONE;
            }
            if (e._font && this.font != e._font) {
                this.font = e._font;
                if (this.lineHeight == this.fontSize) {
                    this.lineHeight += 2;
                }
            }
            this.string = this.string;
        };
        cc.RichText.prototype.start = function () {
            if (e._font) {
                this.font = e._font;
            }
            this._onTTFLoaded();
        };
        cc.Sprite.prototype.onLoad = function () {
            var e = this;
            if (this.spriteFrame) {
                var n = this.spriteFrame.name;
                if (-1 == i.indexOf(n)) {
                    return;
                }
                if (n) {
                    var r = "texture/language/" + t.instance.lan + "/" + n;
                    var o = this.node.opacity;
                    this.node.opacity = 0;
                    this.spPath = r;
                    cc.loader.loadRes(r, cc.SpriteFrame, function (t, n) {
                        e.node.opacity = o;
                        if (t) {
                            //
                        } else {
                            if (e.spPath == r) {
                                e.spriteFrame = n;
                            }
                        }
                    });
                }
            }
        };
    };
    t.prototype.updateLan = function () {
        var t = this;
        $configManager.Config.get($configConst.ConfigConst.LANGUAGE).then(function (e) {
            for (var n in e) {
                var r = e[n];
                window.GameLanguage[r.zh] = r[t.lan];
            }
        });
    };
    t.formatStr = function (t) {
        var e = [];
        for (var n = 1; n < arguments.length; n++) {
            e[n - 1] = arguments[n];
        }
        var r = arguments[0];
        var o = window.GameLanguage;
        if (o && o[r]) {
            r = o[r];
        }
        var i = /(%d)|(%s)/;
        var a = /%s/;
        var s = arguments.length;
        if (0 === s) {
            return "";
        }
        if (1 === s) {
            return "" + r;
        }
        var c = "string" == typeof r && i.test(r);
        if (c) {
            for (var l = 1; l < s; ++l) {
                var u = arguments[l];
                var f;
                if ("number" == typeof u) {
                    f = i;
                } else {
                    f = a;
                }
                if (f.test(r)) {
                    var d = u;
                    var h = window.GameLanguage;
                    if (h && h[d]) {
                        var p = h[d];
                        if (p) {
                            d = p;
                        }
                    }
                    r = r.replace(f, d);
                } else {
                    r += "" + u;
                }
            }
        } else {
            for (l = 1; l < s; ++l) {
                r += " " + arguments[l];
            }
        }
        return r;
    };
    t._instance = null;
    return t;
})();
exports.default = a;
