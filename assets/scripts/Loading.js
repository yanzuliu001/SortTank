var r;
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $popupConst = require("./PopupConst");
var $sceneConst = require("./SceneConst");
var $eventManager = require("./EventManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $sceneManager = require("./SceneManager");
var m = cc._decorator;
var g = m.ccclass;
var y = m.property;
var v = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.age = null;
        e.copyright = null;
        e.title = null;
        e.content = null;
        e.ageSpriteFrame = [];
        e.logo = null;
        e.isLoad = !1;
        e.loginNode = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this;
        var e = $platformManager.Platform.getConfig();
        var n = e.ageTipType;
        if (n != $platformConst.AgeTipType.NO) {
            this.age.getComponent(cc.Sprite).spriteFrame = this.ageSpriteFrame[n];
            this.age.active = !0;
        }
        if (e.hasCopyright) {
            this.copyright.active = !0;
        }
        var r = this.copyright
            .getComponent(cc.Label)
            .string.replace(/2020SR0057230/g, e.registerNumber)
            .replace(/\u5e7f\u5dde\u5c0f\u8d1d\u79d1\u6280\u6709\u9650\u516c\u53f8/g, e.registerPerson);
        this.copyright.getComponent(cc.Label).string = r;
        console.log("loading", $languageManager.default.instance.lan);
        if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE)) {
            if ("zh" == $languageManager.default.instance.lan) {
                $platformManager.Platform.getConfig().logoType = $platformConst.LogoType.DreamSetUp_TC;
            } else {
                if ("tc" == $languageManager.default.instance.lan) {
                    $platformManager.Platform.getConfig().logoType = $platformConst.LogoType.DreamSetUp_TC;
                } else {
                    $platformManager.Platform.getConfig().logoType = $platformConst.LogoType.DreamSetUp_EN;
                }
            }
        }
        cc.resources.load("texture/logo/logo" + e.logoType, function (e, n) {
            if (e) {
                return console.log(e);
            }
            t.logo.spriteFrame = new cc.SpriteFrame(n);
        });
        if (e.hasHealthy) {
            this.title.active = !0;
            this.content.active = !0;
        }
        this.node.getChildByName("recordNumber").getComponent(cc.Label).string = "" + e.recordNumber;
    };
    e.prototype.onEnable = function () {
        $eventManager.Event.on($eventConst.default.ENTER_MAIN, this.enterMain, this);
        cc.game.on("androidSignInClose", this.androidSignInClose, this);
        cc.game.on("androidSignInSuc", this.androidSignInSuc, this);
    };
    e.prototype.onDisable = function () {
        $eventManager.Event.off($eventConst.default.ENTER_MAIN, this.enterMain, this);
        cc.game.targetOff(this);
    };
    e.prototype.androidSignInClose = function () {
        var t = this;
        console.log("调用安卓登录失败");
        if (this.isLoad) {
            if (this.loginNode) {
                this.loginNode.active = !0;
            }
        } else {
            this.isLoad = !0;
            console.log("调用安卓登录失败1");
            cc.loader.loadRes("prefab/popup/Login", cc.Prefab, function (e, n) {
                if (e) {
                    return console.error("", e);
                }
                t.loginNode = cc.instantiate(n);
                t.node.addChild(t.loginNode);
            });
        }
    };
    e.prototype.androidSignInSuc = function () {
        console.log("安卓回调登录成功");
        cc.sys.localStorage.setItem("fknd_login", 1);
        if (this.loginNode) {
            this.loginNode.active = !1;
        }
        $sceneManager.default.loadScene($sceneConst.SceneConst.Home);
    };
    e.prototype.enterMain = function () {
        var t = this;
        if ($platformManager.Platform.getConfig().loginType != $platformConst.LoginType.HW) {
            if ($platformManager.Platform.getConfig().loginType != $platformConst.LoginType.HWAndriod) {
                if (
                    ($platformManager.Platform.getConfig().privacyPolicyType !=
                        $platformConst.PrivacyPolicyType.MINI_GAME &&
                        $platformManager.Platform.getConfig().privacyPolicyType !=
                            $platformConst.PrivacyPolicyType.MINI_GAME_XM) ||
                    cc.sys.localStorage.getItem("superBrain_privacypolicy")
                ) {
                    this.scheduleOnce(function () {
                        $sceneManager.default.loadScene($sceneConst.SceneConst.Home);
                    }, $platformManager.Platform.getConfig().loadingDelay);
                } else {
                    cc.resources.load("prefab/popup/PrivacyPolicy", function (e, n) {
                        if (e) {
                            return console.error("", e);
                        }
                        var r = cc.instantiate(n);
                        t.node.addChild(r);
                        r.getComponent("PrivacyPolicy").open(function () {
                            $sceneManager.default.loadScene($sceneConst.SceneConst.MAIN);
                        });
                    });
                }
            } else {
                if (cc.sys.localStorage.getItem("fknd_login")) {
                    $platformManager.Platform.signIn();
                } else {
                    cc.loader.loadRes("prefab/popup/Login", cc.Prefab, function (e, n) {
                        if (e) {
                            return console.error("", e);
                        }
                        t.loginNode = cc.instantiate(n);
                        t.node.addChild(t.loginNode);
                    });
                }
            }
        } else {
            $platformManager.Platform.login()
                .then(function () {
                    console.log("登录成功");
                    console.log("本地数据", cc.sys.localStorage.getItem("superBrain_privacypolicy"));
                    if (cc.sys.localStorage.getItem("superBrain_privacypolicy")) {
                        $sceneManager.default.loadScene($sceneConst.SceneConst.MAIN);
                    } else {
                        cc.loader.loadRes("prefab/popup/PrivacyPolicy", cc.Prefab, function (e, n) {
                            if (e) {
                                return console.error("", e);
                            }
                            var r = cc.instantiate(n);
                            t.node.addChild(r);
                            r.getComponent("PrivacyPolicy").open(function () {
                                $sceneManager.default.loadScene($sceneConst.SceneConst.MAIN);
                            });
                        });
                    }
                })
                .catch(function (e) {
                    console.log("登录失败", e);
                    cc.loader.loadRes("prefab/popup/Login", cc.Prefab, function (e, n) {
                        if (e) {
                            return console.error("", e);
                        }
                        t.loginNode = cc.instantiate(n);
                        t.node.addChild(t.loginNode);
                    });
                });
        }
    };
    e.prototype.clickAge = function () {
        $popupManager.default.show($popupConst.PopupConst.AGE_TIP);
    };
    __decorate([y(cc.Node)], e.prototype, "age", void 0);
    __decorate([y(cc.Node)], e.prototype, "copyright", void 0);
    __decorate([y(cc.Node)], e.prototype, "title", void 0);
    __decorate([y(cc.Node)], e.prototype, "content", void 0);
    __decorate([y([cc.SpriteFrame])], e.prototype, "ageSpriteFrame", void 0);
    __decorate([y(cc.Sprite)], e.prototype, "logo", void 0);
    return __decorate([g], e);
})(cc.Component);
exports.default = v;
