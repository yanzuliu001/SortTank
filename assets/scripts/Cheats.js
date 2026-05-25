var r;
var $baseUI = require("./BaseUI");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $tipManager = require("./TipManager");
var $userManager = require("./UserManager");
var $debugManager = require("./DebugManager");
var p = cc._decorator;
var m = p.ccclass;
var g =
    (p.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("noAdBtn", this.clickNoAd, this);
            this.addBtnOn("unlockBtn", this.clickUnlock, this);
            this.addBtnOn("close", this.clickClose, this);
            this.addBtnOn("gmBtn", this.gmBtn, this);
            this.addBtnOn("clear", this.clear, this);
            this.addBtnOn("openLog", this.openLog, this);
            $userManager.User.setTempData("cheats", !0);
        };
        e.prototype.clickUnlock = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function () {
                    return [2];
                });
            });
        };
        e.prototype.clickNoAd = function () {
            $platformManager.Platform.setNoAd(!0);
            $tipManager.Tip.show("成功去广告！");
        };
        e.prototype.clickClose = function () {
            $popupManager.default.hide();
        };
        e.prototype.gmBtn = function () {
            $tipManager.Tip.show("打开debug");
            $platformManager.Platform.showAdDebugger();
            this.clickClose();
        };
        e.prototype.clear = function () {
            $tipManager.Tip.show("清除数据");
            cc.sys.localStorage.clear();
        };
        e.prototype.openLog = function () {
            $tipManager.Tip.show("成功");
            $debugManager.default.init();
        };
        return __decorate([m], e);
    })($baseUI.default));
exports.default = g;
