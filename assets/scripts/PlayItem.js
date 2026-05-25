var r;
var a;
var $sceneConst = require("./SceneConst");
var $userConst = require("./UserConst");
var $platformManager = require("./PlatformManager");
var $sceneManager = require("./SceneManager");
var $userManager = require("./UserManager");
var $configUtils = require("./ConfigUtils");
var $shuShuConst = require("./ShuShuConst");
var $localStorageManager = require("./LocalStorageManager");
var $localStorageConst = require("./LocalStorageConst");
var g = cc._decorator;
var y = g.ccclass;
var v = g.property;
(function (t) {
    t[(t.Normal = 0)] = "Normal";
    t[(t.Finish = 1)] = "Finish";
    t[(t.Lock = 2)] = "Lock";
})(a || (a = {}));
var w = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.icon = null;
        e.modeName = null;
        e.video = null;
        e.text = null;
        e.param = null;
        e.state = null;
        e.starAmount = 0;
        e.videoTimes = 2;
        e.isLoadingScene = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {};
    e.prototype.setData = function (t) {
        this.param = t;
        this.node.zIndex = this.param.index;
        this.refresh();
    };
    e.prototype.refresh = function () {
        var t = this;
        var e = $localStorageManager.default.get($localStorageConst.default.BranchVideo) || {};
        if (e[this.param.modeID]) {
            //
        } else {
            e[this.param.modeID] = 0;
        }
        if (e[this.param.modeID] >= this.videoTimes) {
            this.video.active = !1;
            this.text.active = !1;
            this.icon.node.color = cc.Color.WHITE;
        } else {
            this.icon.node.color = cc.color(110, 110, 110);
            this.video.active = !0;
            this.text.active = !0;
            this.text.getComponent(cc.Label).string = "(" + e[this.param.modeID] + "/" + this.videoTimes + ")";
        }
        cc.resources.load("texture/mode/moshi" + this.param.modeID, function (e, n) {
            if (e) {
                return console.log(e);
            }
            t.icon.spriteFrame = new cc.SpriteFrame(n);
        });
        this.modeName.string = "" + this.param.modeName;
    };
    e.prototype.clickEnter = function () {
        var t = this;
        var e = this.param.modeID;
        cc.game.emit("gamelog", "modebtn_" + e);
        if (this.video.active) {
            $platformManager.Platform.showRewardAds(function (n) {
                if (0 == n) {
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Play, {
                        mode: e
                    });
                    var r = $localStorageManager.default.get($localStorageConst.default.BranchVideo) || {};
                    if (r[t.param.modeID]) {
                        //
                    } else {
                        r[t.param.modeID] = 0;
                    }
                    r[t.param.modeID] += 1;
                    $localStorageManager.default.set($localStorageConst.default.BranchVideo, r);
                    t.refresh();
                    if (r[t.param.modeID] >= t.videoTimes) {
                        t.enterByMode(e);
                    }
                }
            });
        } else {
            this.enterByMode(e);
        }
    };
    e.prototype.enterByMode = function (t) {
        var e = this;
        if (!this.isLoadingScene) {
            this.isLoadingScene = !0;
            $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t);
            var n = $userManager.User.get($userConst.UserData.LEVEL_LIST);
            $configUtils.ConfigUtils.setNextModeID();
            var r = 1;
            $configUtils.ConfigUtils.getDataByID(t, function (o) {
                r = o.amount;
                if (n[t] > r) {
                    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
                } else {
                    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, n[t]);
                }
                e.param.modeID;
                $sceneManager.default.loadScene($sceneConst.SceneConst.GAME);
            });
        }
    };
    e.state = a;
    __decorate([v(cc.Sprite)], e.prototype, "icon", void 0);
    __decorate([v(cc.Label)], e.prototype, "modeName", void 0);
    __decorate([v(cc.Node)], e.prototype, "video", void 0);
    __decorate([v(cc.Node)], e.prototype, "text", void 0);
    return __decorate([y], e);
})(cc.Component);
exports.default = w;
