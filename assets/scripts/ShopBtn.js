var r;
var $popupConst = require("./PopupConst");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $shuShuConst = require("./ShuShuConst");
var u = cc._decorator;
var f = u.ccclass;
var d =
    (u.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            var t = $userManager.User.getTempData("currentScene_");
            if (t) {
                cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store_page, {
                    id: t
                });
            }
        };
        e.prototype.clickShop = function () {
            $popupManager.default.show($popupConst.PopupConst.SHOP_NEW);
        };
        return __decorate([f], e);
    })(cc.Component));
exports.default = d;
