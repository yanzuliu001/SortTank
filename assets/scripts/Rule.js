var r;
var $popupConst = require("./PopupConst");
var $userConst = require("./UserConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $memoryStorageConst = require("./MemoryStorageConst");
var $memoryStorageManager = require("./MemoryStorageManager");
var $bmsManager = require("./BmsManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $shuShuConst = require("./ShuShuConst");
var w = cc._decorator;
var _ = w.ccclass;
var b =
    (w.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.propIndex = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.node.setContentSize(cc.winSize);
            this.addBtnOn("noBtn", this.noBtn, this);
            this.initView();
        };
        e.prototype.initView = function () {
            if ("plan" != ($memoryStorageManager.default.get($memoryStorageConst.default.rule) || "plan")) {
                this.dict.title.getComponent(cc.Label).string = $languageManager.default.formatStr("极限挑战");
                this.dict.text.getComponent(cc.Label).string = $languageManager.default.formatStr(
                    "在时间内每通过一关可领取一次奖励。完成全部关卡可领取大奖。"
                );
            }
        };
        e.prototype.updateCardAmount = function (t) {
            this.dict.cardAmount.getComponent(cc.Label).string = "" + t;
        };
        e.prototype.noBtn = function () {
            $popupManager.default.hide();
        };
        e.prototype.cardBtn = function () {
            var t = $localStorageManager.default.get($localStorageConst.default.cardAmount) || 0;
            var e = $memoryStorageManager.default.get($memoryStorageConst.default.propIndex);
            var n;
            if (t <= 0) {
                n = 0;
            } else {
                n = 1;
            }
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Booster_use, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                id: {
                    0: 2,
                    1: 1,
                    2: 4,
                    3: 5,
                    4: 3
                }[e],
                or: n
            });
            if (t <= 0) {
                return $popupManager.default.show($popupConst.PopupConst.UniversalCard);
            }
            t -= 1;
            $localStorageManager.default.set($localStorageConst.default.cardAmount, t);
            this.suc();
        };
        e.prototype.videoBtn = function () {
            var t = this;
            $platformManager.Platform.showRewardAds(function (e) {
                if (0 == e) {
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                        id: ["074", "073", "076", "077", "075"][t.propIndex],
                        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
                    });
                    t.suc();
                }
            });
        };
        e.prototype.suc = function () {
            cc.game.emit(["sucReset", "sucTip", "sucWithdraw", "sucRemoveScrew", "sucBore"][this.propIndex]);
            $popupManager.default.hide();
        };
        e.prototype.updatePropIndex = function (t) {
            this.propIndex = t;
            this.dict.title.getComponent(cc.Label).string = "" + ["重置", "提示", "撤回", "消螺丝", "打孔"][t];
            this.dict.text.getComponent(cc.Label).string = $languageManager.default.formatStr(
                ["重置本小关", "获得通关的提示", "撤回到上一步", "可消除任意一根螺丝", "打开一个新孔位"][t]
            );
            this.dict.iconRoot.children[t].active = !0;
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Booster_page, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                id: {
                    0: 2,
                    1: 1,
                    2: 4,
                    3: 5,
                    4: 3
                }[t]
            });
            if ($platformManager.Platform.getConfig().hasPurchase) {
                this.dict.universalCard.active = !0;
                this.dict.cardBtn.active = !0;
                this.dict.videoBtn.active = !0;
                3 == t &&
                    (1 == $bmsManager.BMS.getKey("UnscrewTicket")
                        ? ((this.dict.cardBtn.active = !0), (this.dict.videoBtn.active = !1))
                        : ((this.dict.cardBtn.active = !0), (this.dict.videoBtn.active = !0)));
            } else {
                this.dict.universalCard.active = !1;
                this.dict.cardBtn.active = !1;
                this.dict.videoBtn.active = !0;
            }
        };
        return __decorate([_], e);
    })($uIBase.default));
exports.default = b;
