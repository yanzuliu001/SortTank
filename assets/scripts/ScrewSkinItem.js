var r;
var a;
var $eventConst = require("./EventConst");
var $userConst = require("./UserConst");
var $eventManager = require("./EventManager");
var $userManager = require("./UserManager");
var f = cc._decorator;
var d = f.ccclass;
var h = f.property;
(function (t) {
    t[(t.lock = 0)] = "lock";
    t[(t.getNoUnlock = 1)] = "getNoUnlock";
    t[(t.unlockNoUse = 2)] = "unlockNoUse";
    t[(t.unlockUse = 3)] = "unlockUse";
})(a || (a = {}));
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.lock = null;
        e.unlockNoUse = null;
        e.unlockUse = null;
        e.param = null;
        e.state = a.lock;
        e.starAmount = 0;
        e.skinNameArr = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.skinNameArr = new Array(6).fill("pifu").map(function (t, e) {
            return t + (e + 1);
        });
    };
    e.prototype.setData = function (t) {
        this.param = t;
        this.node.zIndex = this.param.index;
        this.state = this.param.eState;
        this.refresh();
    };
    e.prototype.refresh = function () {
        var t = this;
        var e = this.param.index + 1;
        this.lock.active = !1;
        this.unlockNoUse.active = !1;
        this.unlockUse.active = !1;
        cc.resources.load("texture/skin/luosi_" + e, function (e, n) {
            if (e) {
                return console.log(e);
            }
            t.unlockNoUse.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
            switch (t.state) {
                case a.lock:
                    t.unlockNoUse.active = !0;
                    t.lock.active = !0;
                    break;
                case a.unlockNoUse:
                    t.unlockNoUse.active = !0;
                    break;
                case a.unlockUse:
                    t.unlockNoUse.active = !0;
                    t.unlockUse.active = !0;
            }
        });
    };
    e.prototype.clickEnter = function () {
        $userManager.User.setTempData("chooseSkinPage", 2);
        $userManager.User.setTempData("chooseSkin", this.param.index + 1);
        if (!this.unlockUse.active && !this.lock.active) {
            var t = $userManager.User.get($userConst.UserData.useSkinIDList);
            t[2] = this.param.index;
            $userManager.User.set($userConst.UserData.useSkinIDList, t);
            $eventManager.Event.emit($eventConst.default.update_use_skin);
        }
    };
    e.state = a;
    __decorate([h(cc.Node)], e.prototype, "lock", void 0);
    __decorate([h(cc.Node)], e.prototype, "unlockNoUse", void 0);
    __decorate([h(cc.Node)], e.prototype, "unlockUse", void 0);
    return __decorate([d], e);
})(cc.Component);
exports.default = p;
