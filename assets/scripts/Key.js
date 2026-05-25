var r;
var $eventConst = require("./EventConst");
var $popupConst = require("./PopupConst");
var $sceneConst = require("./SceneConst");
var $userConst = require("./UserConst");
var $effectManager = require("./EffectManager");
var $eventManager = require("./EventManager");
var $popupManager = require("./PopupManager");
var $sceneManager = require("./SceneManager");
var $userManager = require("./UserManager");
var m = cc._decorator;
var g = m.ccclass;
var y = m.property;
var v = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.icon = null;
        e.key = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onEnable = function () {
        this.initEvent();
        this.initView();
    };
    e.prototype.onDisable = function () {
        this.clearEvent();
    };
    e.prototype.initView = function () {
        var t = cc.sys.localStorage.getItem("walkFast_key");
        if (null != t && null != t && "" != t) {
            //
        } else {
            t = 0;
        }
        if (t <= 0) {
            t = 0;
        }
        $userManager.User.set($userConst.UserData.KEY, Number(t));
        this.key.string = "" + t;
    };
    e.prototype.initEvent = function () {
        $eventManager.Event.on($eventConst.default.KEY_UPDATE, this.changeKey, this);
        $eventManager.Event.on($eventConst.default.KEY_EFFECT, this.keyEffect, this);
    };
    e.prototype.clearEvent = function () {
        $eventManager.Event.off($eventConst.default.KEY_UPDATE, this.changeKey, this);
        $eventManager.Event.off($eventConst.default.KEY_EFFECT, this.keyEffect, this);
    };
    e.prototype.changeKey = function () {
        var t = $userManager.User.get($userConst.UserData.KEY);
        this.key.string = "" + t;
    };
    e.prototype.keyEffect = function () {
        $effectManager.Effect.showEffect(1, this.icon, 1);
    };
    e.prototype.clickSelf = function () {
        $userManager.User.setTempData($userConst.TempData.current_key_type, 0);
        cc.game.emit("playClickAudio");
        if ($sceneManager.default.getCurrentScene() == $sceneConst.SceneConst.MAIN) {
            cc.game.emit("gamelog", "btn005");
        } else {
            if ($sceneManager.default.getCurrentScene() == $sceneConst.SceneConst.GAME) {
                cc.game.emit("gamelog", "btn020");
            }
        }
        $popupManager.default.show($popupConst.PopupConst.SHOP);
    };
    __decorate([y(cc.Node)], e.prototype, "icon", void 0);
    __decorate([y(cc.Label)], e.prototype, "key", void 0);
    return __decorate([g], e);
})(cc.Component);
exports.default = v;
