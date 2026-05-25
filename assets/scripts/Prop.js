var r;
var $popupConst = require("./PopupConst");
var $userConst = require("./UserConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $memoryStorageConst = require("./MemoryStorageConst");
var $memoryStorageManager = require("./MemoryStorageManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $shuShuConst = require("./ShuShuConst");
var $limitRepeat = require("./LimitRepeat");
var $assetManager = require("./AssetManager");
var _ = cc._decorator;
var b = _.ccclass;
var S =
    (_.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.propIndex = 0;
            e.titleData = ["刷新", "减速", "排序", "继续挑战？", "", "冰封", "射程增加", "指定消除", "全屏攻击"];
            e.textData = ["使用", "使用", "使用", "确定", ""];
            e.text = [
                "将场地中的汽车颜色刷新变化",
                "巨龙的移动速度减慢，持续一定时间",
                "将巨龙的身体按照颜色进行排序",
                "复活并解锁一个新炮台",
                "",
                "将巨龙冻住若干秒",
                "炮台的射程增加持续若干秒",
                "选择任意箱子对巨龙进行攻击",
                "炮台进行全屏攻击，持续一定时间"
            ];
            return e;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.node.setContentSize(cc.winSize);
            this.memoryStorageUIData[$memoryStorageConst.default.propIndex] = this.updatePropIndex.bind(this);
            this.addBtnOn("noBtn", this.noBtn, this);
            this.addBtnOn("cardBtn", this.cardBtn, this);
            this.addBtnOn("videoBtn", this.videoBtn, this);
            if (!$localStorageManager.default.get($localStorageConst.default.IsNoFirstFail)) {
                $localStorageManager.default.set($localStorageConst.default.IsNoFirstFail, 1);
                var e = window.levelContent._components[0].allPersonAmount;
                var n = window.levelContent._components[0].allPersonAmount2;
                cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.First_Progress, {
                    lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                    mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                    queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                    type: 2,
                    progress: (n - e) / n,
                    sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
                });
            }
        };
        e.prototype.onDisable = function () {
            cc.game.emit("isShowRevive");
        };
        e.prototype.updateCardAmount = function (t) {
            this.dict.cardAmount.getComponent(cc.Label).string = "" + t;
        };
        e.prototype.noBtn = function () {
            console.log("测试");
            $popupManager.default.hideAll();
            if (3 == this.propIndex) {
                $memoryStorageManager.default.set($memoryStorageConst.default.IsFail, 1);
                $popupManager.default.show($popupConst.PopupConst.WIN);
            }
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
            if (this.dict.videoIcon.active) {
                $platformManager.Platform.showRewardAds(function (e) {
                    if (0 == e) {
                        var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
                        $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
                        t.suc();
                        if (!$localStorageManager.default.get($localStorageConst.default.IsNoFirstProp)) {
                            $localStorageManager.default.set($localStorageConst.default.IsNoFirstProp, 1);
                            var r = window.levelContent._components[0].allPersonAmount;
                            var o = window.levelContent._components[0].allPersonAmount2;
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.First_Progress, {
                                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                                type: 3,
                                progress: (o - r) / o,
                                sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
                            });
                        }
                    }
                });
            } else {
                $localStorageManager.default.set($localStorageConst.default.IsNoFirstRevive, 1);
                this.suc();
                var e = window.levelContent._components[0].allPersonAmount;
                var n = window.levelContent._components[0].allPersonAmount2;
                cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.First_Progress, {
                    lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                    mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                    queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                    type: 1,
                    progress: (n - e) / n,
                    sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
                });
            }
        };
        e.prototype.suc = function () {
            cc.game.emit("sucProp", this.propIndex);
            $popupManager.default.hide();
        };
        e.prototype.updatePropIndex = function (t) {
            var e = this;
            this.propIndex = t;
            this.dict.title.getComponent(cc.Label).string = "" + this.titleData[t];
            this.dict.btnText.getComponent(cc.Label).string = "" + (this.textData[t] || "使用");
            this.dict.text.getComponent(cc.Label).string = $languageManager.default.formatStr(this.text[t]);
            if (3 == this.propIndex) {
                this.dict.iconRoot.getChildByName("0").active = !1;
                this.dict.iconRoot.getChildByName("" + t).active = !0;
                var n = $memoryStorageManager.default.get($memoryStorageConst.default.hasLockParking);
                console.log("hasLockParking", n);
                if (n) {
                    //
                } else {
                    this.dict.text.getComponent(cc.Label).string =
                        $languageManager.default.formatStr("复活并将巨龙击退");
                    this.dict.iconRoot.children[t].getChildByName("newPos").active = !1;
                    this.dict.iconRoot.children[t].getChildByName("sort").active = !1;
                    this.dict.iconRoot.children[t].getChildByName("add").active = !1;
                    this.dict.aixin.position = cc.v3(0, 0);
                    this.dict.aixin.scale = 1.3;
                }
                var r = $memoryStorageManager.default.get($memoryStorageConst.default.LevelReliveCount) || 0;
                r += 1;
                $memoryStorageManager.default.set($memoryStorageConst.default.LevelReliveCount, r);
                var o = window.levelContent._components[0].allPersonAmount;
                var i = window.levelContent._components[0].allPersonAmount2;
                if (i) {
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Progress, {
                        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                        queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                        time: r,
                        progress: (i - o) / i,
                        sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
                    });
                } else {
                    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Progress, {
                        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                        queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                        time: r,
                        progress: game.remainingAmount / game.totalAmount,
                        sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
                    });
                }
                if ($platformManager.Platform.getConfig().flag.includes("gg")) {
                    var a = $localStorageManager.default.get($localStorageConst.default.IsNoFirstRevive) || 0;
                    this.dict.videoIcon.active = a;
                }
            } else {
                $assetManager.default.getRes("gameBundle", "texture/prop/prop" + t, cc.Texture2D).then(function (t) {
                    e.dict.iconRoot.getChildByName("0").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t);
                    e.dict.iconRoot.getChildByName("0").active = !0;
                });
            }
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Booster_page, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                id: {
                    0: 2,
                    1: 1,
                    2: 4,
                    3: 5,
                    4: 3,
                    5: 6,
                    6: 7
                }[t]
            });
        };
        __decorate([$limitRepeat.LimitRepeat(2)], e.prototype, "videoBtn", null);
        return __decorate([b], e);
    })($uIBase.default));
exports.default = S;
