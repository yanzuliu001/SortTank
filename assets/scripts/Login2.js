var r;
var $platformConst = require("./PlatformConst");
var $sceneConst = require("./SceneConst");
var $platformManager = require("./PlatformManager");
var $sceneManager = require("./SceneManager");
var u = cc._decorator;
var f = u.ccclass;
var d = u.property;
var h = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.mask = null;
        e.content = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.mask.getComponent(cc.Button).enabled = !1;
    };
    e.prototype.clickLogin = function () {
        var t = this;
        console.log("点击登录");
        if ($platformManager.Platform.getConfig().loginType == $platformConst.LoginType.HWAndriod) {
            $platformManager.Platform.signIn();
        } else {
            if ($platformManager.Platform.getConfig().loginType == $platformConst.LoginType.HW) {
                $platformManager.Platform.login()
                    .then(function () {
                        t.content.active = !1;
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
                    .catch(function () {
                        t.content.active = !1;
                        t.mask.getComponent(cc.Button).enabled = !0;
                    });
            }
        }
    };
    e.prototype.clickCancel = function () {
        console.log("点击取消");
        this.content.active = !1;
        this.mask.getComponent(cc.Button).enabled = !0;
        console.log("点击取消0");
    };
    e.prototype.clickShowContent = function () {
        this.content.active = !0;
    };
    __decorate([d(cc.Node)], e.prototype, "mask", void 0);
    __decorate([d(cc.Node)], e.prototype, "content", void 0);
    return __decorate([f], e);
})(cc.Component);
exports.default = h;
