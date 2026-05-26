
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f72228mH5pHwL/ctyeXoyfH', 'Game');
// scripts/Game.ts

// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI = require("./BaseUI");
var AudioConst = require("./AudioConst");
var EventConst = require("./EventConst");
var PlatformConst = require("./PlatformConst");
var PopupConst = require("./PopupConst");
var SceneConst = require("./SceneConst");
var UserConst = require("./UserConst");
var AudioManager = require("./AudioManager");
var BmsManager = require("./BmsManager");
var EventManager = require("./EventManager");
var PlatformManager = require("./PlatformManager");
var PopupManager = require("./PopupManager");
var ResManager = require("./ResManager");
var SceneManager = require("./SceneManager");
var UserManager = require("./UserManager");
var Utils = require("./Utils");
var ConfigUtils = require("./ConfigUtils");
var XMADUtils = require("./XMADUtils");
var LanguageManager = require("./LanguageManager");
var ScreenshotUtils = require("./ScreenshotUtils");
var TipManager = require("./TipManager");
var ConfigManager = require("./ConfigManager");
var ConfigConst = require("./ConfigConst");
var OPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var OPPOMiniADUtils = require("./OPPOMiniADUtils");
var ShuShuConst = require("./ShuShuConst");
var TaskManager = require("./TaskManager");
var MemoryStorageManager = require("./MemoryStorageManager");
var MemoryStorageConst = require("./MemoryStorageConst");
var AdjustEventSystem = require("./AdjustEventSystem");
var LocalStorageManager = require("./LocalStorageManager");
var LocalStorageConst = require("./LocalStorageConst");
var ChallengeSystem = require("./ChallengeSystem");
var PoolUtils = require("./PoolUtils");
var AssetManager = require("./AssetManager");
var Tools = require("./Tools");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coloringSpinePrefab = null;
        _this._data = null;
        _this.level = null;
        _this.levelID = null;
        _this.bms = null;
        _this.flag = null;
        _this.clickAmountNode = null;
        _this.isUnlockTip = !1;
        _this.currentLevel = 1;
        _this.currentMode = 1;
        _this.themeType = 0;
        _this.currentTopLevel = 1;
        _this.fullAdCounter = 0;
        _this.clickAmount = 0;
        _this.currentPrefabAsset = [];
        _this.time = 0;
        _this.isHandle = !1;
        _this.modeLevelTime = [180, 180, 180, 180, 180, 180, 300, 180, 180, 180];
        _this.restartTimes = 0;
        _this.isCheckTipTextCD = !1;
        _this.allHoleCoverAnim = !1;
        _this.node_hammer = null;
        _this.metalAmount = 0;
        _this.developID = -1;
        _this.recordState = 0;
        _this.isLoadFail = !1;
        _this.isTimeEnd = !1;
        _this.currentLevelProgress = 1;
        _this.currentLevelTotalTime = 180;
        _this.currentLevelTime = 0;
        _this.isLoadingScene = !1;
        _this.isBack = !1;
        return _this;
    }
    Game.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        this.modeLevelTime = new Array(100).fill(180);
        this.modeLevelTime[6] = 300;
        this.modeLevelTime[21] = 300;
        this.modeLevelTime[23] = 300;
        this.modeLevelTime[77] = 90;
        this.modeLevelTime[81] = 120;
        this.modeLevelTime[82] = 120;
        this.modeLevelTime[90] = 300;
        var n = BmsManager.BMS.getKey("screwTime");
        if (n >= 900) {
            n = 900;
        }
        if (n <= 180) {
            n = 180;
        }
        if (0 == n) {
            this.modeLevelTime[0] = 18e16;
            this.dict.time2.opacity = 0;
        }
        else {
            this.modeLevelTime[0] = n;
        }
        window.coloringSpinePrefab = this.coloringSpinePrefab;
        this.level = this.dict.level;
        this.levelID = this.dict.levelID;
        this.flag = this.dict.flag;
        this.bms = this.dict.bms;
        this.clickAmountNode = this.dict.clickAmountNode;
        this.addBtnOn("homeBtn", this.clickHome, this);
        this.addBtnOn("backBtn", this.clickBack, this);
        this.addBtnOn("restartBtn", this.clickRestart2, this);
        this.addBtnOn("developBtn", this.developBtn, this);
        this.addBtnOn("orderBtn", this.orderBtn, this);
        this.addBtnOn("screenshotBtn", this.screenshotBtn, this);
        this.addBtnOn("downloadBtn", this.downloadBtn, this);
        this.addBtnOn("collectRoot", this.collectRoot, this);
        this.addBtnOn("limitWelfareBtn", this.limitWelfareBtn, this);
        this.addBtnOn("mapBtn", this.mapBtn, this);
        this.clickAmountNode.on(cc.Node.EventType.TOUCH_START, function (t) {
            if (PlatformManager.Platform.is(PlatformConst.EPlatform.XIAOMI_ANDROID)) {
                (e.clickAmount += 1),
                    console.log("点击次数", e.clickAmount),
                    0 != (n = BmsManager.BMS.getKey("fullClickNum")) &&
                        n == e.clickAmount &&
                        (XMADUtils.XMAD.showInterstitialFeed_must(), (e.clickAmount = 0));
            }
            else if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO_ANDROID)) {
                (e.clickAmount += 1),
                    console.log("点击次数", e.clickAmount),
                    0 != (n = BmsManager.BMS.getKey("fullClickNum")) &&
                        n == e.clickAmount &&
                        (OPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_must(), (e.clickAmount = 0));
            }
            else if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO)) {
                var n;
                e.clickAmount += 1;
                console.log("点击次数", e.clickAmount);
                if (0 != (n = BmsManager.BMS.getKey("fullClickNum")) && n == e.clickAmount) {
                    OPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_must();
                    e.clickAmount = 0;
                }
            }
            e.listenHandle();
            cc.game.emit("clickAmountNode");
            var r = t.getLocation();
            var o = e.dict.clickSpine.parent.convertToNodeSpaceAR(r);
            e.dict.clickSpine.position = o;
            e.dict.clickSpine.active = !0;
            e.dict.clickSpine.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
        }, this);
        if (this.clickAmountNode._touchListener) {
            this.clickAmountNode._touchListener.setSwallowTouches(!1);
        }
        UserManager.User.setTempData("isNeedInsert", !0);
        this.dict.version.getComponent(cc.Label).string = "v" + PlatformManager.Platform.getConfig().version;
        this.dict.limitWelfareBtn.active = !1;
        if (window.tt &&
            ["Douyin", "douyin_lite", "live_stream", "aweme_hotsoon"].some(function (t) {
                return t == window.tt.getSystemInfoSync().appName;
            })) {
            var r = UserManager.User.get(UserConst.UserData.EnterSidebar) || 0;
            console.log("判断按钮", r, 2 != r);
            if (2 != r) {
                console.log("显示按钮");
                this.dict.limitWelfareBtn.active = !0;
            }
            else {
                console.log("不显示按钮");
                this.dict.limitWelfareBtn.active = !1;
            }
        }
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.WEB)) {
            this.dict.limitWelfareBtn.active = !0;
        }
        this.initView();
        this.schedule(function () {
            e.fullAdCounter++;
        }, 1);
        this.listenHandle();
        AudioManager.Audio.playMusic(AudioConst.AudioConst.BGM_MAIN);
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.WX)) {
            console.log("调用广告");
        }
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.WEB)) {
            this.dict.hideUIBtn.active = !0;
        }
        TaskManager.default.init();
        if (0 == this.currentMode) {
            if (PlatformManager.Platform.getConfig().hasPurchase) {
                this.dict.universalCard.active = !0;
            }
            else {
                this.dict.universalCard.active = !1;
            }
        }
    };
    Game.prototype.updateSkin = function () {
        var t = UserManager.User.get(UserConst.UserData.skinList) || {
            0: [0],
            1: [0],
            2: [9],
            3: [0],
            4: [0],
            5: [0]
        };
        UserManager.User.set(UserConst.UserData.skinList, t);
        var e = UserManager.User.get(UserConst.UserData.useSkinIDList) || {
            0: 0,
            1: 0,
            2: 9,
            3: 0,
            4: 0,
            5: 0
        };
        UserManager.User.set(UserConst.UserData.useSkinIDList, e);
        var n = UserManager.User.get(UserConst.UserData.getLockSkinList) || {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        UserManager.User.set(UserConst.UserData.getLockSkinList, n);
    };
    Game.prototype.hideUIBtn = function () {
        if (this.dict.backBtn.opacity) {
            this.dict.backBtn.opacity = 0;
            this.dict.bottomBar0.opacity = 0;
            this.dict.hideUIBtn.opacity = 0;
            this.dict.shopBtn.opacity = 0;
        }
        else {
            this.dict.backBtn.opacity = 255;
            this.dict.bottomBar0.opacity = 255;
            this.dict.hideUIBtn.opacity = 255;
            this.dict.shopBtn.opacity = 255;
        }
    };
    Game.prototype.onDestroy = function () {
        PlatformManager.Platform.stopRecordCap();
        PlatformManager.Platform.hideCustomAd1();
        PlatformManager.Platform.hideCustomAd2();
        var t = UserManager.User.getTempData("levelTime");
        var e = (new Date().getTime() - t) / 1e3;
        cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_End, {
            EndType: 2,
            Duration: e,
            lv: UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL_ID),
            mode: UserManager.User.getTempData(UserConst.TempData.CURRENT_MODE)
        });
    };
    Game.prototype.listenHandle = function () {
        EventManager.Event.emit(EventConst.default.TIP_BTN_ANIM, !1, "test");
        this.unschedule(this.handleEvent);
        this.scheduleOnce(this.handleEvent, 8);
    };
    Game.prototype.handleEvent = function () {
        console.log("测试无操作");
        if (UserManager.User.get(UserConst.TempData.isUnlockTip)) {
            //
        }
        else {
            EventManager.Event.emit(EventConst.default.TIP_BTN_ANIM, !0, "test");
        }
    };
    Game.prototype.restartBtn_1 = function () {
        this.checkFullAd_noResult();
        this.currentLevelProgress = 1;
        this.initView(!0);
    };
    Game.prototype.clickRestart2 = function (t) {
        var e = UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL);
        var n = UserManager.User.getTempData(UserConst.TempData.CURRENT_MODE);
        cc.game.emit("gamelog", "Level_Lose_" + n + "_" + e);
        this.restartTimes += 1;
        console.log("重置次数", this.restartTimes);
        var r = BmsManager.BMS.getKey("FriendHelp");
        var o = UserManager.User.getTempData(UserConst.TempData.cryHelpList) || [];
        var i = UserManager.User.get(UserConst.UserData.cryHelpTimes) || 0;
        console.log("检测", this.restartTimes, r);
        console.log("检测2", i);
        console.log("检测3", o, e);
        if (this.restartTimes >= r && i < 2 && -1 == o.indexOf(this.currentLevel)) {
            o.push(this.currentLevel);
            UserManager.User.setTempData(UserConst.TempData.cryHelpList, o);
            UserManager.User.set(UserConst.UserData.cryHelpTimes, i + 1);
        }
        else {
            if (this.restartTimes >= r) {
                PlatformManager.Platform.showInsert();
            }
        }
        if (this.restartTimes >= 3) {
            EventManager.Event.emit(EventConst.default.TIP_BTN_ANIM, !0);
            this.restartTimes = 0;
        }
        this.clickRestart(t);
    };
    Game.prototype.onRestartReset = function () {
        this.checkFullAd_noResult();
        this.currentLevelProgress = 1;
        this.clickRestart2();
    };
    Game.prototype.onEnable = function () {
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO_ANDROID)) {
            OPPOAndroidAdUtils.OPPOAndroidAd.showBannerFeed();
        }
        else {
            PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO);
        }
        this.initEvent();
        EventManager.Event.on(EventConst.default.hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    };
    Game.prototype.onDisable = function () {
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO_ANDROID)) {
            PlatformManager.Platform.hideNativeAds();
        }
        else {
            PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO);
        }
        this.clearEvent();
        EventManager.Event.off(EventConst.default.hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    };
    Game.prototype.initEvent = function () {
        cc.game.on("game_success1", this.startSuc, this);
        cc.game.on("game_success2", this.suc, this);
        cc.game.on("onRestartBtn", this.clickRestart2, this);
        cc.game.on("restartBtn_1", this.restartBtn_1, this);
        cc.game.on("onRestartReset", this.onRestartReset, this);
        cc.game.on("isTimeEnd", this.isTimeEndFun, this);
        EventManager.Event.on(EventConst.default.CLICK_NEXT, this.clickNext, this);
        EventManager.Event.on(EventConst.default.destroyInsert, this.destroyInsert, this);
        EventManager.Event.on(EventConst.default.enterNewMode, this.enterNewMode, this);
        EventManager.Event.on(EventConst.default.extendTime, this.extendTime, this);
        EventManager.Event.on(EventConst.default.move5, this.move5, this);
        EventManager.Event.on(EventConst.default.upset, this.upset, this);
        EventManager.Event.on(EventConst.default.boreBtn, this.boreBtn, this);
        cc.game.on("woodRemove", this.woodRemove, this);
        EventManager.Event.on(EventConst.default.StopTimer, this.stopTimer, this);
        EventManager.Event.on(EventConst.default.restoreTime, this.restoreTime, this);
        cc.game.on("adsVideoFail", this.adsVideoFail, this);
        cc.game.on("insetVideoSuccess", this.insetVideoSuccess, this);
        cc.game.on("insetVideoAsk", this.insetVideoAsk, this);
        cc.game.on("adSkipped", this.adSkipped, this);
        cc.game.on("hammerBtn", this.hammerBtn, this);
        cc.game.on("shakeBtn", this.shakeBtn, this);
        cc.game.on("undoBtn", this.undoBtn, this);
        cc.game.on("wingBtn", this.wingBtn, this);
        cc.game.on("highlightBtn", this.highlightBtn, this);
        cc.game.on("addStepBtn", this.addStepBtn, this);
        cc.game.on("moderateBtn", this.moderateBtn, this);
        cc.game.on("rotateBtn", this.rotateBtn, this);
        cc.game.on("screwBoxBtn", this.screwBoxBtn, this);
        cc.game.on("func_checkDelNailCb", this.func_checkDelNailCb, this);
        cc.game.on("allHoleCover", this.allHoleCover, this);
        cc.game.on("chehuiBtn_anim", this.chehuiBtn_anim, this);
        cc.game.on("removeScrewBtn", this.removeScrewBtn, this);
        cc.game.on("listenHandle", this.listenHandle, this);
        cc.game.on("hideGetCard", this.hideGetCard, this);
        cc.game.on("allPersonAmount", this.allPersonAmount, this);
        cc.game.on("checkTipText", this.checkTipText, this);
        cc.game.on("f29086_addCoin", this.f29086_addCoin, this);
    };
    Game.prototype.clearEvent = function () {
        cc.game.off("game_success1", this.startSuc, this);
        cc.game.off("game_success2", this.suc, this);
        cc.game.off("onRestartBtn", this.clickRestart2, this);
        cc.game.off("onRestartReset", this.onRestartReset, this);
        cc.game.off("isTimeEnd", this.isTimeEndFun, this);
        EventManager.Event.off(EventConst.default.CLICK_NEXT, this.clickNext, this);
        EventManager.Event.off(EventConst.default.destroyInsert, this.destroyInsert, this);
        EventManager.Event.off(EventConst.default.enterNewMode, this.enterNewMode, this);
        EventManager.Event.off(EventConst.default.extendTime, this.extendTime, this);
        EventManager.Event.off(EventConst.default.move5, this.move5, this);
        EventManager.Event.off(EventConst.default.upset, this.upset, this);
        EventManager.Event.off(EventConst.default.boreBtn, this.boreBtn, this);
        cc.game.off("woodRemove", this.woodRemove, this);
        EventManager.Event.off(EventConst.default.StopTimer, this.stopTimer, this);
        EventManager.Event.off(EventConst.default.restoreTime, this.restoreTime, this);
        cc.game.off("adsVideoFail", this.adsVideoFail, this);
        cc.game.off("insetVideoSuccess", this.insetVideoSuccess, this);
        cc.game.off("insetVideoAsk", this.insetVideoAsk, this);
        cc.game.off("adSkipped", this.adSkipped, this);
        cc.game.off("hammerBtn", this.hammerBtn, this);
        cc.game.off("shakeBtn", this.shakeBtn, this);
        cc.game.off("undoBtn", this.undoBtn, this);
        cc.game.off("wingBtn", this.wingBtn, this);
        cc.game.off("highlightBtn", this.highlightBtn, this);
        cc.game.off("addStepBtn", this.addStepBtn, this);
        cc.game.off("moderateBtn", this.moderateBtn, this);
        cc.game.off("rotateBtn", this.rotateBtn, this);
        cc.game.off("screwBoxBtn", this.screwBoxBtn, this);
        cc.game.off("func_checkDelNailCb", this.func_checkDelNailCb, this);
        cc.game.off("allHoleCover", this.allHoleCover, this);
        cc.game.off("chehuiBtn_anim", this.chehuiBtn_anim, this);
        cc.game.off("removeScrewBtn", this.removeScrewBtn, this);
        cc.game.off("listenHandle", this.listenHandle, this);
        cc.game.off("hideGetCard", this.hideGetCard, this);
        cc.game.off("allPersonAmount", this.allPersonAmount, this);
        cc.game.off("checkTipText", this.checkTipText, this);
        cc.game.off("f29086_addCoin", this.f29086_addCoin, this);
    };
    Game.prototype.f29086_addCoin = function () {
    };
    Game.prototype.allPersonAmount = function (t, e) {
        if (this.currentLevel > 1) {
            var n = MemoryStorageManager.default.get(MemoryStorageConst.default.CollectGoodsID);
            var r = LocalStorageManager.default.get(LocalStorageConst.default.Collect) || {
                0: []
            };
            if (!n || r[0].includes(n)) {
                this.dict.collectRoot.active = !1;
            }
            else {
                if (0 == this.currentMode) {
                    this.dict.collectRoot.active = !0;
                    this.dict.collectRate.getComponent(cc.Label).string = Math.round(((e - t) / e) * 100) + "%";
                    this.dict.collectIcon2.getComponent(cc.Sprite).fillRange = (e - t) / e;
                }
            }
        }
        else {
            this.dict.collectRoot.active = !1;
        }
        this.dict.levelProText.getComponent(cc.Label).string = "" + t;
        this.dict.levelPro.getComponent(cc.Sprite).fillRange = t / e;
        if (0 == t) {
            this.dict.levelProRoot.active = !1;
        }
    };
    Game.prototype.checkTipText = function (t) {
        var e = this;
        if (0 == t) {
            if (this.isCheckTipTextCD) {
                return;
            }
            this.isCheckTipTextCD = !0;
            this.dict.tipText.scale = 0;
            this.dict.tipText.active = !0;
            this.dict.tipText.opacity = 255;
            cc.tween(this.dict.tipText)
                .to(0.4, {
                scale: 1
            }, {
                easing: "backOut"
            })
                .delay(1.5)
                .to(0.3, {
                opacity: 0
            })
                .start();
            this.scheduleOnce(function () {
                e.isCheckTipTextCD = !1;
            }, 60);
        }
        else {
            this.dict.tipText2.scale = 0;
            this.dict.tipText2.active = !0;
            this.dict.tipText2.opacity = 255;
            cc.tween(this.dict.tipText2)
                .to(0.4, {
                scale: 1
            }, {
                easing: "backOut"
            })
                .delay(1.5)
                .to(0.3, {
                opacity: 0
            })
                .start();
        }
    };
    Game.prototype.removeScrewBtn = function () {
        this.dict.removeScrewBtn.stopAllActions();
        this.dict.removeScrewBtn.scale = 1;
        this.allHoleCoverAnim = !1;
    };
    Game.prototype.chehuiBtn_anim = function () {
        this.allHoleCoverAnim = !1;
    };
    Game.prototype.hideGetCard = function () {
        this.dict.noFirstAllHole.active = !1;
        EventManager.Event.emit(EventConst.default.restoreTime);
    };
    Game.prototype.allHoleCover = function () {
        var t = this;
        if (this.allHoleCoverAnim) {
            //
        }
        else {
            this.allHoleCoverAnim = !0;
            console.log("allHoleCover-------");
            if (!LocalStorageManager.default.get(LocalStorageConst.default.NoFirstAllHole) &&
                PlatformManager.Platform.getConfig().hasPurchase) {
                LocalStorageManager.default.set(LocalStorageConst.default.NoFirstAllHole, 1);
                this.dict.noFirstAllHole.active = !0;
                TipManager.Tip.show("很遗憾，没有可操作步骤了。");
                EventManager.Event.emit(EventConst.default.StopTimer);
                this.scheduleOnce(function () {
                    var t = (LocalStorageManager.default.get(LocalStorageConst.default.cardAmount) || 0) + 1;
                    LocalStorageManager.default.set(LocalStorageConst.default.cardAmount, t);
                    MemoryStorageManager.default.set(MemoryStorageConst.default.reward, [["card", 1]]);
                }, 1.5);
            }
            if (this.dict.removeScrewBtn.active) {
                this.dict.removeScrewBtn.stopAllActions();
                this.dict.removeScrewBtn.scale = 1;
                cc.tween(this.dict.removeScrewBtn)
                    .to(0.25, {
                    scale: 1.1
                })
                    .to(0.25, {
                    scale: 1
                })
                    .union()
                    .repeatForever()
                    .start();
                this.scheduleOnce(function () {
                    t.dict.removeScrewBtn.stopAllActions();
                    t.dict.removeScrewBtn.scale = 1;
                    t.allHoleCoverAnim = !1;
                }, 5);
            }
        }
    };
    Game.prototype.move5 = function () {
        this.level.children[0]._components[0].addAutoMoveNumber();
    };
    Game.prototype.upset = function () {
        if (this.level.children[0]._components[0].shuffle) {
            this.level.children[0]._components[0].shuffle();
        }
    };
    Game.prototype.boreBtn = function () {
        this.dict.boreBtn.active = !1;
        if (this.level.children[0]._components[0].checkAdLock) {
            this.level.children[0]._components[0].checkAdLock();
        }
    };
    Game.prototype.hammerBtn = function () {
        var t = this.level.children[0]._components[0];
        t.isCanUseHammer = !0;
        t.node_hammer.getChildByName("img").position = cc.v3();
        t.node_hammer.active = !0;
        var e = t.node_hammer.getChildByName("img");
        cc.tween(e)
            .repeatForever(cc
            .tween()
            .to(0.2, {
            scale: 1.2
        })
            .to(0.1, {
            scale: 1
        }))
            .start();
    };
    Game.prototype.getIsOpen = function () {
        return 1;
    };
    Game.prototype._initOutLine = function () {
    };
    Game.prototype.shakeBtn = function () {
        if (this.level.children[0]._components[0].shakeAnimation) {
            this.level.children[0]._components[0].shakeAnimation(0);
        }
    };
    Game.prototype.undoBtn = function () {
        if (this.level.children[0]._components[0].func_withdraw) {
            this.level.children[0]._components[0].func_withdraw();
        }
    };
    Game.prototype.wingBtn = function () {
        if (this.level.children[0]._components[0].func_fly) {
            this.level.children[0]._components[0].func_fly();
        }
    };
    Game.prototype.highlightBtn = function () {
        if (this.level.children[0]._components[0].func_highlight) {
            this.level.children[0]._components[0].func_highlight();
        }
    };
    Game.prototype.addStepBtn = function () {
        if (this.level.children[0]._components[0].func_addStep) {
            this.level.children[0]._components[0].func_addStep();
        }
    };
    Game.prototype.moderateBtn = function () {
        if (this.level.children[0]._components[0].setLeftScrollSpeed) {
            this.level.children[0]._components[0].setLeftScrollSpeed(30);
        }
    };
    Game.prototype.rotateBtn = function () {
        if (this.level.children[0]._components[1].turn) {
            this.level.children[0]._components[1].turn();
        }
    };
    Game.prototype.screwBoxBtn = function () {
        this.dict.bottomBar0.active = !1;
        this.dict.topLeftBar.active = !1;
        this.dict.number.active = !1;
        this.stopTimer();
        if (this.level.children[0]._components[0].func_delNail) {
            this.level.children[0]._components[0].func_delNail();
        }
    };
    Game.prototype.func_checkDelNailCb = function () {
        this.dict.bottomBar0.active = !0;
        this.dict.topLeftBar.active = !0;
        this.dict.number.active = !0;
        this.restoreTime();
    };
    Game.prototype.extendTime = function () {
        this.currentLevelTime = 60;
        this.dict.time2.active = !0;
        this.dict.time2.getComponent(cc.Label).string = "" + this.secondFormat(this.currentLevelTime);
        this.schedule(this.timerFun, 1);
    };
    Game.prototype.stopTimer = function (t) {
        if (void 0 === t) {
            t = !1;
        }
        if (this.dict.time2.active) {
            console.log("暂停时间");
            this.unschedule(this.timerFun);
        }
    };
    Game.prototype.restoreTime = function () {
        if (this.dict.time2.active) {
            this.unschedule(this.timerFun);
            this.schedule(this.timerFun, 1);
        }
    };
    Game.prototype.adsVideoFail = function () {
        cc.game.emit("gamelog", "level_interfail_" + this.currentMode + "_" + this.currentLevel);
    };
    Game.prototype.adSkipped = function () {
    };
    Game.prototype.insetVideoSuccess = function () {
        cc.game.emit("gamelog", "level_interplay_" + this.currentMode + "_" + this.currentLevel);
    };
    Game.prototype.insetVideoAsk = function () {
        cc.game.emit("gamelog", "level_inter_" + this.currentMode + "_" + this.currentLevel);
    };
    Game.prototype.destroyInsert = function () {
        PlatformManager.Platform.destroyInsert();
    };
    Game.prototype.clickNext = function () {
        var t = this;
        UserManager.User.getTempData(UserConst.TempData.NEXT_MODE_ID);
        if (1 != this.themeType) {
            ConfigUtils.ConfigUtils.getDataByID(this.currentMode, function (e) {
                t.currentTopLevel = e.amount;
                if (t.currentLevel + 1 > t.currentTopLevel) {
                    console.log("最后一关");
                    t.initLevelOrder();
                }
                else {
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
                    EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                }
                if (PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE) ||
                    PlatformManager.Platform.is(PlatformConst.EPlatform.IOS_HAIWAI)) {
                    if (UserManager.User.getTempData("isNeedInsert")) {
                        t.checkFullAd();
                    }
                    else {
                        console.log("不需要差评");
                    }
                    UserManager.User.setTempData("isNeedInsert", !0);
                }
            });
        }
        else {
            ConfigUtils.ConfigUtils.getDataByID_99(this.currentMode, function (e) {
                t.currentTopLevel = e.amount;
                if (t.currentLevel + 1 > t.currentTopLevel) {
                    console.log("最后一关");
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_MODE, t.currentMode);
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, 1);
                    EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                }
                else {
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
                    EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                }
                if (PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE) ||
                    PlatformManager.Platform.is(PlatformConst.EPlatform.IOS_HAIWAI)) {
                    if (UserManager.User.getTempData("isNeedInsert") || PlatformManager.Platform.getNoADState()) {
                        t.checkFullAd();
                    }
                    else {
                        console.log("不需要差评");
                    }
                    UserManager.User.setTempData("isNeedInsert", !0);
                }
            });
        }
    };
    Game.prototype.initLevelOrder = function () {
        var t = this;
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.WEB)) {
            this.updateCurrentModeLevel();
        }
        else {
            UserManager.User.get(UserConst.UserData.mode0LevelList_stage1ID);
            UserManager.User.get(UserConst.UserData.mode0LevelList_stage2ID);
            UserManager.User.get(UserConst.UserData.mode1LevelList_stage1ID);
            UserManager.User.get(UserConst.UserData.mode1LevelList_stage2ID);
            var e = [];
            var n = [];
            var r = [];
            var o = [];
            var i = [];
            var a = [];
            if (0 == this.currentMode) {
                ConfigManager.Config.get(ConfigConst.ConfigConst.THEME + 0 + PlatformManager.Platform.getConfig().configSuffix).then(function (r) {
                    for (var o = 0; o < r.length; o++) {
                        var i = r[o];
                        e.push(i.stage1ID);
                        n.push(i.stage2ID);
                    }
                    e.sort(function () {
                        return 0.5 - Math.random();
                    });
                    n.sort(function () {
                        return 0.5 - Math.random();
                    });
                    UserManager.User.set(UserConst.UserData.mode0LevelList_stage1ID, e);
                    UserManager.User.set(UserConst.UserData.mode0LevelList_stage2ID, n);
                    console.log("打螺丝", e, n);
                    t.updateCurrentModeLevel();
                });
            }
            else {
                if (1 == this.currentMode) {
                    ConfigManager.Config.get(ConfigConst.ConfigConst.THEME + 1).then(function (e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            r.push(i.stage1ID);
                            o.push(i.stage2ID);
                        }
                        r.sort(function () {
                            return 0.5 - Math.random();
                        });
                        o.sort(function () {
                            return 0.5 - Math.random();
                        });
                        UserManager.User.set(UserConst.UserData.mode1LevelList_stage1ID, r);
                        UserManager.User.set(UserConst.UserData.mode1LevelList_stage2ID, o);
                        console.log("清理", r, o);
                        t.updateCurrentModeLevel();
                    });
                }
                else {
                    if (2 == this.currentMode) {
                        ConfigManager.Config.get(ConfigConst.ConfigConst.THEME + 2).then(function (e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                i.push(r.stage1ID);
                                a.push(r.stage2ID);
                            }
                            i.sort(function () {
                                return 0.5 - Math.random();
                            });
                            a.sort(function () {
                                return 0.5 - Math.random();
                            });
                            UserManager.User.set(UserConst.UserData.mode2LevelList_stage1ID, i);
                            UserManager.User.set(UserConst.UserData.mode2LevelList_stage2ID, a);
                            console.log("消除箭头", i, a);
                            t.updateCurrentModeLevel();
                        });
                    }
                    else {
                        this.handleModeByID(this.currentMode);
                    }
                }
            }
        }
    };
    Game.prototype.handleModeByID = function (t) {
        var e = this;
        var n = [];
        var r = [];
        ConfigManager.Config.get(ConfigConst.ConfigConst.THEME + t).then(function (o) {
            for (var i = 0; i < o.length; i++) {
                var a = o[i];
                n.push(a.stage1ID);
                r.push(a.stage2ID);
            }
            n.sort(function () {
                return 0.5 - Math.random();
            });
            r.sort(function () {
                return 0.5 - Math.random();
            });
            UserManager.User.set(UserConst.UserData["mode" + t + "LevelList_stage1ID"], n);
            UserManager.User.set(UserConst.UserData["mode" + t + "LevelList_stage2ID"], r);
            console.log("模式", t, n, r);
            e.updateCurrentModeLevel();
        });
    };
    Game.prototype.updateCurrentModeLevel = function () {
        var t = UserManager.User.get(UserConst.UserData.LEVEL_LIST) || {};
        var e = UserManager.User.get("levelListLoopTimes") || {};
        if (e[this.currentMode]) {
            e[this.currentMode] += 1;
        }
        else {
            e[this.currentMode] = 1;
        }
        UserManager.User.set("levelListLoopTimes", e);
        t[this.currentMode] = 1;
        UserManager.User.setTempData(UserConst.TempData.CURRENT_MODE, this.currentMode);
        UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, 1);
        UserManager.User.set(UserConst.UserData.LEVEL_LIST, t);
        EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
        this.initView();
    };
    Game.prototype.enterNewMode = function () {
        EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
        this.initView();
    };
    Game.prototype.startSuc = function () {
        this.screenshot();
    };
    Game.prototype.screenshot = function () {
        var t = this;
        this.scheduleOnce(function () {
            if (cc.isValid(t.dict.level)) {
                t.restartNodeShot();
            }
        }, 0.1);
    };
    Game.prototype.restartNodeShot = function () {
        console.log("截图");
        Utils.Utils.nodeShot(this.dict.level).then(function (t) {
            window.screenShotPicture = t;
        });
    };
    Game.prototype.woodRemove = function (t) {
        console.log("测试 woodRemove");
        var e = PoolUtils.default.get(this.dict.downSpineRoot);
        e.active = !0;
        var n = t.parent.convertToWorldSpaceAR(t.position);
        var r = this.node.convertToNodeSpaceAR(n);
        if (r.x <= -250) {
            r.x = -250;
        }
        if (r.x >= 250) {
            r.x = 250;
        }
        console.log("nPos.x", r.x);
        e.x = r.x;
        this.node.addChild(e);
        e.children[0].getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
        e.children[1].getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
        this.scheduleOnce(function () {
            PoolUtils.default.put(e);
        }, 10);
    };
    Game.prototype.suc = function () {
        PlatformManager.Platform.stopRecordCap();
        this.dict.time2.active = !1;
        this.unschedule(this.timerFun);
        var t = UserManager.User.getTempData("levelTime");
        var e = (new Date().getTime() - t) / 1e3;
        var n = UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL_ID);
        cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_Win, {
            lv: n,
            mode: this.currentMode,
            queue: this.currentLevel,
            times: e,
            sort: LocalStorageManager.default.get(LocalStorageConst.default.ConfigSuffix)
        });
        this.sucFunc();
        this.currentLevelProgress = 1;
    };
    Game.prototype.playNDBS = function () {
        var t = this;
        this.dict.spine.active = !0;
        if ("tc" == LanguageManager.default.instance.lan) {
            this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
        }
        else {
            if ("en" == LanguageManager.default.instance.lan) {
                this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation4", !1);
            }
            else {
                if ("ja" == LanguageManager.default.instance.lan) {
                    this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
                }
                else {
                    this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
                }
            }
        }
        this.scheduleOnce(function () {
            t.dict.spine.active = !1;
        }, 1.5);
    };
    Game.prototype.sucFunc = function () {
        var t = this.currentLevel + 1;
        var e = UserManager.User.get(UserConst.UserData.LEVEL_LIST) || {};
        if (e[0]) {
            //
        }
        else {
            e[0] = 1;
        }
        console.log("nextLevel", t, "list", e);
        if (t > e[this.currentMode]) {
            e[this.currentMode] = t;
            UserManager.User.set(UserConst.UserData.LEVEL_LIST, e);
            console.log("新通关");
            UserManager.User.setTempData("newPass", !0);
            AdjustEventSystem.default.todayPassTimes();
            var n = LocalStorageManager.default.get(LocalStorageConst.default.canTurntableTimes) || 0;
            LocalStorageManager.default.set(LocalStorageConst.default.canTurntableTimes, n + 1);
            var r = LocalStorageManager.default.get(LocalStorageConst.default.shipStartTime) || 0;
            var o = LocalStorageManager.default.get(LocalStorageConst.default.forwardTimes) || 0;
            console.log("shipStartTime", o);
            console.log("shipStartTime", r);
            if (r) {
                o += 1;
                console.log("shipStartTime323333", r);
                LocalStorageManager.default.set(LocalStorageConst.default.forwardTimes, o);
            }
        }
        else {
            UserManager.User.setTempData("newPass", !1);
        }
        var i = UserManager.User.get("record") || 0;
        i += 1;
        UserManager.User.set("record", i);
        PlatformManager.Platform.sendRankData();
        if (0 == this.currentMode && e[this.currentMode] >= 5) {
            if (0 == (LocalStorageManager.default.get(LocalStorageConst.default.challengeStartTime) || 0)) {
                LocalStorageManager.default.set(LocalStorageConst.default.challengeStartTime, new Date().getTime());
                ChallengeSystem.default.init();
            }
            var a = LocalStorageManager.default.get(LocalStorageConst.default.challengeUnlockAmount) || 0;
            a += 1;
            LocalStorageManager.default.set(LocalStorageConst.default.challengeUnlockAmount, a);
        }
        cc.game.emit("TaskFinish");
        if (-1 != PlatformManager.Platform.getConfig().flag.indexOf("tt")) {
            var s = this.currentMode;
            var c = UserManager.User.get(UserConst.UserData.ALREADY_PLAY) || {};
            if (c[s]) {
                //
            }
            else {
                c[s] = [];
            }
            if (-1 == c[s].indexOf(this.currentLevel)) {
                c[s].push(this.currentLevel);
            }
            UserManager.User.set(UserConst.UserData.ALREADY_PLAY, c);
            var l = UserManager.User.get(UserConst.UserData.ALREADY_UNLOCK) || {};
            if (l[s]) {
                //
            }
            else {
                l[s] = [];
            }
            if (-1 == l[s].indexOf(t)) {
                l[s].push(t);
            }
            UserManager.User.set(UserConst.UserData.ALREADY_UNLOCK, l);
        }
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE) ||
            PlatformManager.Platform.is(PlatformConst.EPlatform.IOS_HAIWAI)) {
            //
        }
        else {
            this.checkFullAd();
        }
        PopupManager.default.hideAll();
        MemoryStorageManager.default.set(MemoryStorageConst.default.IsFail, 0);
        if (1 == this.themeType) {
            PopupManager.default.show(PopupConst.PopupConst.WinOld);
        }
        else {
            PopupManager.default.show(PopupConst.PopupConst.WIN);
        }
        var u = UserManager.User.get(UserConst.UserData.EnterSidebar) || 0;
        if (this.currentLevel >= 3 && this.currentLevel % 3 == 0 && 2 != u) {
            this.scheduleOnce(function () {
                PopupManager.default.show(PopupConst.PopupConst.LimitWelfare);
            }, 0.3);
        }
        var h = UserManager.User.get(UserConst.UserData.IS_COMMENT) || 0;
        var m = BmsManager.BMS.getKey("evaluatelv");
        if (0 != this.currentMode || h || -1 == m.indexOf(this.currentLevel)) {
            //
        }
        else {
            this.scheduleOnce(function () {
                PopupManager.default.show(PopupConst.PopupConst.COMMENT);
            }, 0.4);
        }
        UserManager.User.setTempData(UserConst.TempData.IS_WIN, !1);
    };
    Game.prototype.initSkinAndRole = function () {
        var t = LocalStorageManager.default.get(LocalStorageConst.default.SkinList) || {};
        if (t[0]) {
            //
        }
        else {
            t[0] = [0];
        }
        if (t[1]) {
            //
        }
        else {
            t[1] = [0];
        }
        var e = LocalStorageManager.default.get(LocalStorageConst.default.UseSkin) || {};
        if (e[0]) {
            //
        }
        else {
            e[0] = 0;
        }
        if (e[1]) {
            //
        }
        else {
            e[1] = 0;
        }
        var n = LocalStorageManager.default.get(LocalStorageConst.default.HeroLevel) || 1;
        window.f29086_LevelData = {
            useSkin: e,
            heroLevel: n
        };
        window.f29086_dragonBall = 0;
        window.f29086_coin = 0;
    };
    Game.prototype.initView = function (t, e) {
        if (void 0 === t) {
            t = !1;
        }
        if (void 0 === e) {
            e = !1;
        }
        return __awaiter(this, void 0, void 0, function () {
            var n;
            var r;
            var o;
            var i;
            var c;
            var l;
            var h;
            var m;
            var b;
            var k;
            var C;
            var M;
            var T;
            var A;
            var U;
            var B;
            var O;
            var N;
            var j;
            var V = this;
            return __generator(this, function (z) {
                switch (z.label) {
                    case 0:
                        if (this.currentPrefabAsset.length >= 2) {
                            for (n = 0; n < this.currentPrefabAsset.length; n++) {
                                cc.assetManager.releaseAsset(this.currentPrefabAsset[n]);
                            }
                            this.currentPrefabAsset = [];
                            console.log("释放预制");
                        }
                        if (null == this.level) {
                            return [2];
                        }
                        else {
                            return (this.level.destroyAllChildren(),
                                (game.canUseProps = !0),
                                this.initSkinAndRole(),
                                this.listenHandle(),
                                (this.isCheckTipTextCD = !1),
                                (this.currentMode = UserManager.User.getTempData(UserConst.TempData.CURRENT_MODE)),
                                (this.currentLevel = UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL)),
                                (this.themeType =
                                    MemoryStorageManager.default.get(MemoryStorageConst.default.ThemeType) || 0),
                                (this.allHoleCoverAnim = !1),
                                MemoryStorageManager.default.set(MemoryStorageConst.default.LevelReliveCount, 0),
                                console.log("== 主题: " + this.currentMode + " 关卡: " + this.currentLevel + " =="),
                                console.log("== 主题类型: " + this.themeType),
                                cc.game.emit("isRemove", !1),
                                cc.game.emit("gameRestart"),
                                (this.dict.levelProRoot.active = !1),
                                (this.dict.unlockPosBtn.active = !1),
                                1 == this.currentLevel && this.dict.limitWelfareBtn.active
                                    ? (console.log("limitWelfareBtn111", this.dict.limitWelfareBtn.active),
                                        (this.dict.limitWelfareBtn.active = !1),
                                        console.log("limitWelfareBtn111----", this.dict.limitWelfareBtn.active),
                                        (window.needShowLimitWelfareBtn = !0))
                                    : window.needShowLimitWelfareBtn &&
                                        (console.log("limitWelfareBtn222", this.dict.limitWelfareBtn.active),
                                            (this.dict.limitWelfareBtn.active = !0)),
                                (r = BmsManager.BMS.getKey("levelspace")),
                                (o = BmsManager.BMS.getKey("isCheck")),
                                console.log("[levelspace-isCheck]", o),
                                0 == o &&
                                    (-1 == r
                                        ? (this.dict.downloadBtn.active = !1)
                                        : this.currentLevel % (r + 1) == 1
                                            ? ((this.dict.downloadBtn.y = 514.778), (this.dict.downloadBtn.active = !0))
                                            : (this.dict.downloadBtn.active = !1)),
                                (i = UserManager.User.get("levelListLoopTimes") || {})[this.currentMode] ||
                                    (i[this.currentMode] = 0),
                                0 != this.currentMode
                                    ? [3, 2]
                                    : [
                                        4,
                                        ConfigManager.Config.get(ConfigConst.ConfigConst.THEME +
                                            this.currentMode +
                                            PlatformManager.Platform.getConfig().configSuffix)
                                    ]);
                        }
                    case 1:
                        l = z.sent();
                        if (i[this.currentMode]) {
                            if (!(h = LocalStorageManager.default.get(LocalStorageConst.default.LoopLevelIDArr) || [])
                                .length) {
                                for (m = 0; m < l.length; m++) {
                                    if (1 != (b = l[m]).id) {
                                        h.push(b.levelID);
                                    }
                                }
                                h = Tools.default.shuffleArray(h);
                                LocalStorageManager.default.set(LocalStorageConst.default.LoopLevelIDArr, h);
                            }
                            if (h[this.currentLevel - 1]) {
                                c = h[this.currentLevel - 1];
                            }
                            else {
                                c = h[h.length - 1];
                            }
                        }
                        else {
                            c = l.find(function (t) {
                                return t.id == V.currentLevel;
                            }).levelID;
                        }
                        return [3, 4];
                    case 2:
                        return [4, ConfigManager.Config.get(ConfigConst.ConfigConst.THEME + this.currentMode)];
                    case 3:
                        l = z.sent();
                        c = l.find(function (t) {
                            return t.id == V.currentLevel;
                        }).levelID;
                        z.label = 4;
                    case 4:
                        if (e) {
                            c = UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL_ID);
                        }
                        console.log("== 开发ID: " + c);
                        if (t) {
                            cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_Reset, {
                                lv: c,
                                mode: this.currentMode,
                                queue: this.currentLevel
                            });
                        }
                        else {
                            cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_Page, {
                                lv: c,
                                mode: this.currentMode,
                                queue: this.currentLevel,
                                sort: LocalStorageManager.default.get(LocalStorageConst.default.ConfigSuffix)
                            });
                        }
                        if (PlatformManager.Platform.getConfig().hasPurchase) {
                            //
                        }
                        else {
                            this.dict.shopBtn.active = !1;
                        }
                        k = "zqddn_zhb/prefab/level/zqddn_zhb_level" + c;
                        UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL_ID, c);
                        ResManager.Res.load(k).then(function (t) {
                            return __awaiter(V, void 0, void 0, function () {
                                var e;
                                var n;
                                var r;
                                var o;
                                var a;
                                var c;
                                var u = this;
                                return __generator(this, function (s) {
                                    switch (s.label) {
                                        case 0:
                                            e = this.currentLevel + i[this.currentMode] * l.length;
                                            this.dict.number.getComponent(cc.Label).string =
                                                LanguageManager.default.formatStr("第%d关", e);
                                            game.currentLevel = e;
                                            this.dict.mapBtn.active = !1;
                                            n = cc.instantiate(t);
                                            if (8 == this.currentMode && n._components[0].gameError) {
                                                console.log("[弹球模式] 修改");
                                                n._components[0].gameError = function () {
                                                    cc.game.emit("onRestartBtn", !0);
                                                };
                                            }
                                            if (n._components[0]._lbTime) {
                                                n._components[0]._lbTime.string = "";
                                            }
                                            if (n._components[1] && n._components[1].initBrain) {
                                                n._components[1].initBrain = function () { };
                                            }
                                            if (n.getChildByName("title")) {
                                                n.getChildByName("title").getComponent(cc.Label).overflow =
                                                    cc.Label.Overflow.SHRINK;
                                                n.getChildByName("title").width = 720;
                                            }
                                            if (n.getChildByName("lblTitle")) {
                                                n.getChildByName("lblTitle").getComponent(cc.Label).overflow =
                                                    cc.Label.Overflow.SHRINK;
                                                n.getChildByName("lblTitle").width = 720;
                                            }
                                            if (2 == this.currentLevelProgress) {
                                                if (n.getChildByName("title")) {
                                                    n.getChildByName("title").active = !1;
                                                }
                                                if (n.getChildByName("lblTitle")) {
                                                    n.getChildByName("lblTitle").active = !1;
                                                }
                                            }
                                            if (n._components[0].getIsOpen) {
                                                n._components[0].getIsOpen = this.getIsOpen.bind(this);
                                                n._components[0].getAdResult = function () { };
                                                this.scheduleOnce(function () {
                                                    n._components[0].node_hammer.active = !1;
                                                    n._components[0].node_hammer.children[1].active = !1;
                                                });
                                            }
                                            if (n._components[0].func_highlight) {
                                                n.getChildByName("game").getChildByName("zhandan").opacity = 0;
                                                n.getChildByName("game").getChildByName("zhandan").y = 1e7;
                                                n._components[0].initCountDown = function () { };
                                            }
                                            n.x = 0;
                                            this.currentPrefabAsset.push(t);
                                            return [4, ConfigManager.Config.get(ConfigConst.ConfigConst.Collect)];
                                        case 1:
                                            r = s.sent();
                                            return this.currentLevel > 1 && r[this.currentLevel - 2]
                                                ? ((o = r[this.currentLevel - 2].goodsID),
                                                    (a = r[this.currentLevel - 2].goodsName),
                                                    MemoryStorageManager.default.set(MemoryStorageConst.default.CollectGoodsID, o),
                                                    MemoryStorageManager.default.set(MemoryStorageConst.default.CollectGoodsName, a),
                                                    [
                                                        4,
                                                        AssetManager.default.getRes("gameBundle", "texture/collect/" + o, cc.Texture2D)
                                                    ])
                                                : [3, 3];
                                        case 2:
                                            c = s.sent();
                                            this.dict.collectIcon.getComponent(cc.Sprite).spriteFrame =
                                                new cc.SpriteFrame(c);
                                            this.dict.collectIcon2.getComponent(cc.Sprite).spriteFrame =
                                                new cc.SpriteFrame(c);
                                            return [3, 4];
                                        case 3:
                                            MemoryStorageManager.default.set(MemoryStorageConst.default.CollectGoodsID, null);
                                            s.label = 4;
                                        case 4:
                                            this.level.addChild(n);
                                            window.levelContent = n;
                                            this.scheduleOnce(function () {
                                                u.screenshot();
                                                PlatformManager.Platform.startRecordCap();
                                            }, 0);
                                            cc.game.emit("gamelog", "Level_page_" + this.currentMode + "_" + this.currentLevel);
                                            UserManager.User.setTempData("levelTime", new Date().getTime());
                                            if (0 == this.currentMode &&
                                                1 == UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL)) {
                                                this.dict.content.active = !1;
                                            }
                                            else {
                                                this.dict.content.active = !0;
                                            }
                                            return [2];
                                    }
                                });
                            });
                        });
                        if (UserManager.User.getTempData("cheats")) {
                            this.dict.cheats.active = !0;
                            this.levelID.getComponent(cc.Label).string = "[" + c + "]";
                            this.bms.getComponent(cc.Label).string =
                                "[bms: " + PlatformManager.Platform.getConfig().version + "]";
                            this.flag.getComponent(cc.Label).string =
                                "[flag: " + PlatformManager.Platform.getConfig().flag + "]";
                        }
                        this.currentLevelProgress;
                        this.initPlatformUI();
                        if (!t) {
                            C = BmsManager.BMS.getKey("TiLi");
                            console.log("bmsPower", C);
                            if (C && !this.isInfinitePower()) {
                                if (UserManager.User.getTempData(UserConst.TempData.IS_INFINITE_POWER)) {
                                    return [2];
                                }
                                if ((M = UserManager.User.get(UserConst.UserData.POWER)) < 5) {
                                    UserManager.User.setTempData(UserConst.TempData.POWER_TYPE, 0);
                                    if (BmsManager.BMS.getKey("WuxianTiLi")) {
                                        cc.game.emit("gamelog", "page008"),
                                            PopupManager.default.show(PopupConst.PopupConst.INFINITE_POWER);
                                    }
                                    else {
                                        cc.game.emit("gamelog", "page009"),
                                            cc.game.emit("gamelog", "Level_NoPower_" + this.currentMode + "_" + this.currentLevel),
                                            PopupManager.default.show(PopupConst.PopupConst.POWER_SHORTAGE);
                                    }
                                }
                                else {
                                    UserManager.User.set(UserConst.UserData.POWER, M - 5);
                                    EventManager.Event.emit(EventConst.default.POWER_UPDATE);
                                    cc.game.emit("gamelog", "Level_Power_" +
                                        this.currentMode +
                                        "_" +
                                        this.currentLevel +
                                        "_" +
                                        UserManager.User.get(UserConst.UserData.POWER));
                                    T = UserManager.User.get(UserConst.UserData.hasUseKey) || 0;
                                    A = BmsManager.BMS.getKey("keyVideo");
                                    T ||
                                        0 != this.currentMode ||
                                        this.currentLevel != A ||
                                        (UserManager.User.setTempData(UserConst.TempData.current_key_type, 1),
                                            console.log("TempData", UserManager.User.getTempData(UserConst.TempData.current_key_type)),
                                            PopupManager.default.show(PopupConst.PopupConst.SHOP));
                                }
                            }
                            if (PlatformManager.Platform.is(PlatformConst.EPlatform.WX)) {
                                if (!window.wx) {
                                    return [2];
                                }
                                U = BmsManager.BMS.getKey("lvinys5x5lv");
                                B = BmsManager.BMS.getKey("lvinys5x5chance");
                                O = this.getIsMistakeByChance(B);
                                console.log("设置第几关:", U, "当前第几关:", this.currentLevel, O);
                                if (U <= this.currentLevel && O) {
                                    N = window.wx.getSystemInfoSync();
                                    j = N.windowHeight / 2 - 250;
                                    PlatformManager.Platform.showBlockAds({
                                        top: j,
                                        left: 0,
                                        id: PlatformManager.Platform.getConfig().blockID,
                                        hideCb: function () {
                                            PlatformManager.Platform.hideBlockAds();
                                            setTimeout(function () { }, 300);
                                        }
                                    }, function (t) {
                                        if (0 == t) {
                                            //
                                        }
                                        else {
                                            PlatformManager.Platform.hideBlockAds();
                                            setTimeout(function () { }, 300);
                                        }
                                    });
                                }
                            }
                            this.restartTimes = 0;
                        }
                        return [2];
                }
            });
        });
    };
    Game.prototype.isTimeEndFun = function () {
        console.log("测试isTimeEndFun");
        this.isTimeEnd = !1;
    };
    Game.prototype.timerFun = function () {
        this.currentLevelTime -= 1;
        this.dict.time2.getComponent(cc.Label).string = "" + this.secondFormat(this.currentLevelTime);
        if (0 == this.currentLevelTime) {
            this.dict.time2.active = !1;
            this.unschedule(this.timerFun);
            this.isTimeEnd = !0;
            AudioManager.Audio.playEffect(AudioConst.AudioConst.timeEnd);
            var t = UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL_ID);
            UserManager.User.getTempData(UserConst.TempData.CURRENT_MODE);
            cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_Lose, {
                lv: t,
                mode: this.currentMode
            });
        }
    };
    Game.prototype.secondFormat = function (t, e, n) {
        if (void 0 === e) {
            e = 2;
        }
        if (void 0 === n) {
            n = !1;
        }
        var r = t / 3600;
        var o = (t %= 3600) / 60;
        var i = (t %= 60);
        var a;
        if ((r = Math.floor(r)) >= 10) {
            a = r + "";
        }
        else {
            a = "0" + r;
        }
        var s;
        if ((o = Math.floor(o)) >= 10) {
            s = o + "";
        }
        else {
            s = "0" + o;
        }
        var c;
        if ((i = Math.floor(i)) >= 10) {
            c = i + "";
        }
        else {
            c = "0" + i;
        }
        if (n) {
            i = (100 * i) / 60;
            if ((i = Math.floor(i)) >= 10) {
                c = i + "";
            }
            else {
                c = "0" + i;
            }
        }
        var l = a + ":" + s + ":" + c;
        switch (e) {
            case 2:
                l = s + ":" + c;
        }
        return l;
    };
    Game.prototype.developBtn = function () {
        var t = this.dict.developID.getComponent(cc.EditBox).string;
        console.log("开发id", t);
        if (this.isIntNum(t)) {
            console.log("是数字");
            UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL_ID, Number(t));
            this.initView(!1, !0);
        }
    };
    Game.prototype.orderBtn = function () {
        var t = this.dict.orderID.getComponent(cc.EditBox).string;
        console.log("顺序id", t);
        if (this.isIntNum(t)) {
            console.log("是数字");
            UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, Number(t));
            this.initView();
        }
    };
    Game.prototype.screenshotBtn = function () {
        var t = this;
        var e = this.dict.screenshot.getComponent(cc.EditBox).string.split("-");
        var n = e[0];
        var r = e[1];
        console.log("str", n, r);
        if (this.isIntNum(n) && this.isIntNum(r)) {
            this.dict.cheats.active = !1;
            UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, Number(n));
            this.initView(!0);
            ScreenshotUtils.Screenshot.init(this.node);
            var o = function () {
                ScreenshotUtils.Screenshot.btn_image_knife(String(t.currentLevel));
                console.log("截图第" + t.currentLevel + "关");
                var e = t.currentLevel + 1;
                if (e <= Number(r)) {
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, e);
                    t.initView(!0);
                }
                else {
                    console.log("结束截图");
                    t.unschedule(o);
                }
            };
            this.schedule(o, 2);
        }
        else {
            TipManager.Tip.show("输入格式应该为: 1-100");
        }
    };
    Game.prototype.downloadBtn = function () {
        XMADUtils.XMAD.downloadBtn();
    };
    Game.prototype.collectRoot = function () {
        PopupManager.default.show(PopupConst.PopupConst.Collect);
    };
    Game.prototype.mapBtn = function () {
        PopupManager.default.show(PopupConst.PopupConst.Map);
    };
    Game.prototype.roleBtn = function () {
        PopupManager.default.show(PopupConst.PopupConst.Role);
    };
    Game.prototype.limitWelfareBtn = function () {
        console.log("limitWelfareBtn");
        cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.btn, {
            id: "009"
        });
        PopupManager.default.show(PopupConst.PopupConst.LimitWelfare);
    };
    Game.prototype.hideLimitWelfareBtn = function () {
        this.dict.limitWelfareBtn.active = !1;
    };
    Game.prototype.isIntNum = function (t) {
        return !isNaN(parseFloat(t));
    };
    Game.prototype.getIsMistakeByChance = function (t) {
        var e = 100 * Math.random();
        var n = !1;
        console.log("随机数", e);
        console.log("当前配置概率:" + t);
        return 0 == t ? n : (t >= e && (n = !0), n);
    };
    Game.prototype.isInfinitePower = function () {
        var t = !1;
        if (BmsManager.BMS.getKey("WuxianTiLi")) {
            var e = UserManager.User.get(UserConst.UserData.INF_POWER_START_TIME);
            var n = new Date().getTime();
            if (e) {
                if ((n - e) / 1e3 >= 86400) {
                    //
                }
                else {
                    t = !0;
                }
            }
        }
        console.log("是否是无限体力", t);
        return t;
    };
    Game.prototype.initPlatformUI = function () {
        if (PlatformManager.Platform.getConfig().fitUIType == PlatformConst.FitUIType.TT) {
            this.dict.topRightBar.getComponent(cc.Widget).top = 75;
            this.dict.topRightBar.getComponent(cc.Widget).updateAlignment();
            if ((t = cc.view.getFrameSize().width / cc.view.getFrameSize().height) < 0.5) {
                (this.dict.topLeftBar.getComponent(cc.Widget).top = 55),
                    this.dict.topLeftBar.getComponent(cc.Widget).updateAlignment(),
                    (this.dict.bottomBar0.getComponent(cc.Widget).bottom = 20),
                    this.dict.bottomBar0.getComponent(cc.Widget).updateAlignment(),
                    (this.dict.collectRoot.y = 301.999);
            }
            else {
                this.dict.collectRoot.y = 401.999;
            }
        }
        if (PlatformManager.Platform.getConfig().fitUIType == PlatformConst.FitUIType.KS) {
            var t = cc.view.getFrameSize().width / cc.view.getFrameSize().height;
            console.log("长高比", t);
            if (t < 0.5) {
                this.dict.topLeftBar.getComponent(cc.Widget).top = 120;
                this.dict.topLeftBar.getComponent(cc.Widget).left = 140;
                this.dict.topLeftBar.getComponent(cc.Widget).updateAlignment();
            }
            else {
                this.dict.topLeftBar.getComponent(cc.Widget).top = 55;
                this.dict.topLeftBar.getComponent(cc.Widget).left = 140;
                this.dict.topLeftBar.getComponent(cc.Widget).updateAlignment();
            }
            this.dict.topRightBar.getComponent(cc.Widget).top = 75;
            this.dict.topRightBar.getComponent(cc.Widget).updateAlignment();
            this.dict.addPowerBtn.getComponent(cc.Widget).top = 90;
            this.dict.addPowerBtn.getComponent(cc.Widget).updateAlignment();
        }
        if (PlatformManager.Platform.getConfig().hasHomeBtn) {
            this.dict.homeBtn.active = !0;
        }
        else {
            this.dict.homeBtn.active = !1;
        }
    };
    Game.prototype.clickHome = function () {
        if (this.isLoadingScene) {
            //
        }
        else {
            this.isLoadingScene = !0;
            cc.game.emit("gamelog", "btn015");
            SceneManager.default.loadScene(SceneConst.SceneConst.MAIN);
        }
    };
    Game.prototype.clickBack = function () {
        cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_Pause, {
            lv: UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL_ID),
            mode: UserManager.User.getTempData(UserConst.TempData.CURRENT_MODE)
        });
        this.stopTimer();
        PopupManager.default.show(PopupConst.PopupConst.SET);
    };
    Game.prototype.clickRestart = function (t) {
        cc.game.emit("gamelog", "btn014");
        this.initView(!0, t);
    };
    Game.prototype.checkFullAd_noResult = function () {
        cc.game.emit("checkFullAd_noResult", this.currentLevel);
    };
    Game.prototype.checkFullAd = function () {
        EventManager.Event.emit(EventConst.default.checkFullAd_result);
    };
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "coloringSpinePrefab", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(BaseUI.default));
exports.default = Game;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25GLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakYsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw2QkFBYyxHQUFkO0lBQ0EsQ0FBQztJQUVELDhCQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRixJQUFJLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDMUUsQ0FBQyxFQUFFLEVBQUU7YUFDUixDQUFDO1lBQ0YsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUM1RixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzFFO2FBQ0o7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCwyQkFBWSxHQUFaLFVBQWEsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNSLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUN0QixFQUFFLENBQ0MsR0FBRyxFQUNIO2dCQUNJLEtBQUssRUFBRSxDQUFDO2FBQ1gsRUFDRDtnQkFDSSxNQUFNLEVBQUUsU0FBUzthQUNwQixDQUNKO2lCQUNBLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNiLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUN2QixFQUFFLENBQ0MsR0FBRyxFQUNIO2dCQUNJLEtBQUssRUFBRSxDQUFDO2FBQ1gsRUFDRDtnQkFDSSxNQUFNLEVBQUUsU0FBUzthQUNwQixDQUNKO2lCQUNBLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNiLENBQUM7aUJBQ0QsS0FBSyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixFQUFFO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsSUFDSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDMUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQ2xEO2dCQUNFLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDckMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekYsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6RSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNYO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO3FCQUM3QixFQUFFLENBQUMsSUFBSSxFQUFFO29CQUNOLEtBQUssRUFBRSxHQUFHO2lCQUNiLENBQUM7cUJBQ0QsRUFBRSxDQUFDLElBQUksRUFBRTtvQkFDTixLQUFLLEVBQUUsQ0FBQztpQkFDWCxDQUFDO3FCQUNELEtBQUssRUFBRTtxQkFDUCxhQUFhLEVBQUU7cUJBQ2YsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ04sYUFBYSxDQUNWLEVBQUU7YUFDRyxLQUFLLEVBQUU7YUFDUCxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEdBQUc7U0FDYixDQUFDO2FBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNMLEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUNUO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwyQkFBWSxHQUFaO0lBQ0EsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO1lBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0wsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFFRCxrQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHlCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdCQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1AsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsd0JBQVMsR0FBVDtJQUNBLENBQUM7SUFFRCxnQ0FBaUIsR0FBakI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELDRCQUFhLEdBQWI7UUFDSSxlQUFlLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCx3QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JCLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO2dCQUM3RCxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRTtvQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNuRixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQ2pFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0QsSUFDSSxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztvQkFDbkUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDakU7b0JBQ0UsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDOUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO3FCQUNuQjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN4QjtvQkFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxXQUFXLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztnQkFDaEUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUM3QixJQUFJLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUU7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDN0UsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDakUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNuRixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQ2pFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0QsSUFDSSxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztvQkFDbkUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDakU7b0JBQ0UsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFO3dCQUN6RixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ25CO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3hCO29CQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNqQzthQUFNO1lBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2pFLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDakUsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNwQixXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQ3hGLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDdEI7b0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDSCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ0gsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztvQkFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ3hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN0Qjt3QkFDRCxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNILE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDSCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxDQUFDO3dCQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUFNO29CQUNILElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ3hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dDQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUN0Qjs0QkFDRCxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUNILE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDL0IsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDSCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQy9CLENBQUMsQ0FBQyxDQUFDOzRCQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3BFLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxDQUFDO3FCQUNOO3lCQUFNO3dCQUNILElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUN6QztpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsNkJBQWMsR0FBZCxVQUFlLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNILE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9FLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQXNCLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELDhCQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsRCxNQUFNLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDWixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQUcsR0FBSDtRQUNJLGVBQWUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQ2hFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDaEYsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FO2FBQU07WUFDSCxJQUFJLElBQUksSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvRTtpQkFBTTtnQkFDSCxJQUFJLElBQUksSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0U7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM5RTthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixFQUFFO1NBQ0w7YUFBTTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDWjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsRUFBRTtnQkFDSCxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5RTtTQUNKO2FBQU07WUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1AsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzNGLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDcEcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQztZQUNELElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlGLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RjtRQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sRUFBRTthQUNMO2lCQUFNO2dCQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDYjtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sRUFBRTthQUNMO2lCQUFNO2dCQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDYjtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFDSSxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztZQUNuRSxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUNqRTtZQUNFLEVBQUU7U0FDTDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDSCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNsRSxFQUFFO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtRQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDhCQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEYsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixFQUFFO1NBQ0w7YUFBTTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNOLEVBQUU7U0FDTDthQUFNO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNOLEVBQUU7U0FDTDthQUFNO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNaO1FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixFQUFFO1NBQ0w7YUFBTTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDWjtRQUNELElBQUksQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixNQUFNLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUM7UUFDRixNQUFNLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDVCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNWO1FBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNiLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDYixLQUFLLENBQUM7d0JBQ0YsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs0QkFDckMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dDQUNqRCxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDNUQ7NEJBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQzs0QkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDdkI7d0JBQ0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs0QkFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNkOzZCQUFNOzRCQUNILE9BQU8sQ0FDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO2dDQUMvQixDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0NBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0NBQ25CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUM1QixDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQ0FDbEYsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0NBQ3BGLENBQUMsSUFBSSxDQUFDLFNBQVM7b0NBQ1gsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNoRixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDNUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dDQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQ0FDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQ0FDekMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUM1QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0NBQzNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNwQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDcEMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTTtvQ0FDdEQsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7d0NBQ3BFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dDQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzt3Q0FDdkUsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDeEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUI7d0NBQzlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7NENBQ3BFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzlDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dDQUN6QyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7Z0NBQ3RDLENBQUMsSUFBSSxDQUFDO29DQUNGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3Q0FDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0NBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7NENBQ2xDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NENBQzVFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUM5QyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7b0NBQ3BFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQzdCLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVztvQ0FDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQ0FDUixDQUFDLENBQUM7d0NBQ0ksQ0FBQzt3Q0FDRCxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FDcEIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLOzRDQUN6QixJQUFJLENBQUMsV0FBVzs0Q0FDaEIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQ3hEO3FDQUNKLENBQ1YsQ0FBQzt5QkFDTDtvQkFDTCxLQUFLLENBQUM7d0JBQ0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDYixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7NEJBQ3JCLElBQ0ksQ0FBQyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7aUNBQ2pGLE1BQU0sRUFDYjtnQ0FDRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0NBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3Q0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7cUNBQ3JCO2lDQUNKO2dDQUNELENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDbEMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDOzZCQUNoRjs0QkFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dDQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7NkJBQ2hDO2lDQUFNO2dDQUNILENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDdkI7eUJBQ0o7NkJBQU07NEJBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dDQUNsQixPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQzs0QkFDbEMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO3lCQUNkO3dCQUNELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEtBQUssQ0FBQzt3QkFDRixPQUFPLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUMzRixLQUFLLENBQUM7d0JBQ0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ2xCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDO3dCQUNsQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7d0JBQ1gsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2hCLEtBQUssQ0FBQzt3QkFDRixJQUFJLENBQUMsRUFBRTs0QkFDSCxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3lCQUN6RTt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEVBQUU7NEJBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7Z0NBQ2xFLEVBQUUsRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztnQ0FDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZOzZCQUMzQixDQUFDLENBQUM7eUJBQ047NkJBQU07NEJBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7Z0NBQ2pFLEVBQUUsRUFBRSxDQUFDO2dDQUNMLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztnQ0FDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO2dDQUN4QixJQUFJLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDOzZCQUNoRixDQUFDLENBQUM7eUJBQ047d0JBQ0QsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRTs0QkFDbEQsRUFBRTt5QkFDTDs2QkFBTTs0QkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ2pDO3dCQUNELENBQUMsR0FBRyx3Q0FBd0MsR0FBRyxDQUFDLENBQUM7d0JBQ2pELFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JFLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ25DLE9BQU8sU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtnQ0FDaEMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sSUFBSSxDQUFDLENBQUM7Z0NBQ04sSUFBSSxDQUFDLENBQUM7Z0NBQ04sSUFBSSxDQUFDLENBQUM7Z0NBQ04sSUFBSSxDQUFDLENBQUM7Z0NBQ04sSUFBSSxDQUFDLENBQUM7Z0NBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dDQUNiLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7b0NBQ2hDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRTt3Q0FDYixLQUFLLENBQUM7NENBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDOzRDQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Z0RBQzFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs0Q0FDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7NENBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs0Q0FDN0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7NENBQ3RCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7Z0RBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0RBQ3pCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHO29EQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnREFDckMsQ0FBQyxDQUFDOzZDQUNMOzRDQUNELElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0RBQzFCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7NkNBQ3hDOzRDQUNELElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtnREFDaEQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsY0FBYSxDQUFDLENBQUM7NkNBQy9DOzRDQUNELElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnREFDM0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVE7b0RBQ3JELEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnREFDN0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOzZDQUN6Qzs0Q0FDRCxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0RBQzlCLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRO29EQUN4RCxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0RBQzdCLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs2Q0FDNUM7NENBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dEQUNoQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7b0RBQzNCLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lEQUN6QztnREFDRCxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7b0RBQzlCLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lEQUM1Qzs2Q0FDSjs0Q0FDRCxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO2dEQUM1QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnREFDdkQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsY0FBYSxDQUFDLENBQUM7Z0RBQzlDLElBQUksQ0FBQyxZQUFZLENBQUM7b0RBQ2QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29EQUN6QyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dEQUN6RCxDQUFDLENBQUMsQ0FBQzs2Q0FDTjs0Q0FDRCxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO2dEQUNqQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dEQUMvRCxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dEQUMzRCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxjQUFhLENBQUMsQ0FBQzs2Q0FDbkQ7NENBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7NENBQ1IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0Q0FDaEMsT0FBTyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQzFFLEtBQUssQ0FBQzs0Q0FDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzRDQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dEQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7b0RBQ3ZDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvREFDeEMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDNUIsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFDekMsQ0FBQyxDQUNKO29EQUNELG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzVCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFDM0MsQ0FBQyxDQUNKO29EQUNEO3dEQUNJLENBQUM7d0RBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3ZCLFlBQVksRUFDWixrQkFBa0IsR0FBRyxDQUFDLEVBQ3RCLEVBQUUsQ0FBQyxTQUFTLENBQ2Y7cURBQ0osQ0FBQztnREFDSixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0NBQ2pCLEtBQUssQ0FBQzs0Q0FDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzRDQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztnREFDckQsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRDQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVc7Z0RBQ3RELElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0Q0FDMUIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3Q0FDbEIsS0FBSyxDQUFDOzRDQUNGLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzVCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQ3pDLElBQUksQ0FDUCxDQUFDOzRDQUNGLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dDQUNoQixLQUFLLENBQUM7NENBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NENBQ3ZCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDOzRDQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDO2dEQUNkLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnREFDZixlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDOzRDQUM5QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NENBQ04sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ1IsU0FBUyxFQUNULGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUM3RCxDQUFDOzRDQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7NENBQ2hFLElBQ0ksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXO2dEQUNyQixDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFDckU7Z0RBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOzZDQUNqQztpREFBTTtnREFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7NkNBQ2pDOzRDQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQ0FDbEI7Z0NBQ0wsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTs0QkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDOzRCQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtnQ0FDbEMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs0QkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Z0NBQ25DLFNBQVMsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7eUJBQ25FO3dCQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN0QixJQUFJLENBQUMsQ0FBQyxFQUFFOzRCQUNKLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO2dDQUM5QixJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTtvQ0FDcEUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUNkO2dDQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQ0FDMUQsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQy9ELElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7d0NBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7NENBQzlCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7cUNBQ3ZFO3lDQUFNO3dDQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7NENBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNSLFNBQVMsRUFDVCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUNoRTs0Q0FDRCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3FDQUN2RTtpQ0FDSjtxQ0FBTTtvQ0FDSCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQ3RELFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0NBQ3pELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNSLFNBQVMsRUFDVCxjQUFjO3dDQUNWLElBQUksQ0FBQyxXQUFXO3dDQUNoQixHQUFHO3dDQUNILElBQUksQ0FBQyxZQUFZO3dDQUNqQixHQUFHO3dDQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ3JELENBQUM7b0NBQ0YsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUM1RCxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7b0NBQ3RDLENBQUM7d0NBQ0csQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXO3dDQUNyQixJQUFJLENBQUMsWUFBWSxJQUFJLENBQUM7d0NBQ3RCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7NENBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQ1AsVUFBVSxFQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FDcEU7NENBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lDQUM5RDs2QkFDSjs0QkFDRCxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0NBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO29DQUNaLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDZDtnQ0FDRCxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Z0NBQ3pDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dDQUM3QyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ3pELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO29DQUM3QixDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29DQUNsQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO29DQUM3QixlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDakM7d0NBQ0ksR0FBRyxFQUFFLENBQUM7d0NBQ04sSUFBSSxFQUFFLENBQUM7d0NBQ1AsRUFBRSxFQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTzt3Q0FDaEQsTUFBTSxFQUFFOzRDQUNKLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7NENBQ3hDLFVBQVUsQ0FBQyxjQUFhLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3Q0FDcEMsQ0FBQztxQ0FDSixFQUNELFVBQVUsQ0FBQzt3Q0FDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7NENBQ1IsRUFBRTt5Q0FDTDs2Q0FBTTs0Q0FDSCxlQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDOzRDQUN4QyxVQUFVLENBQUMsY0FBYSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7eUNBQ25DO29DQUNMLENBQUMsQ0FDSixDQUFDO2lDQUNMOzZCQUNKOzRCQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO3lCQUN6Qjt3QkFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2dCQUNqRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDekIsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsMkJBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNkO2FBQU07WUFDSCxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDM0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0gsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNILENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsRUFBRTtZQUNILENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUMzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNkO2lCQUFNO2dCQUNILENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7U0FDSjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUIsUUFBUSxDQUFDLEVBQUU7WUFDUCxLQUFLLENBQUM7Z0JBQ0YsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsNEJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEdBQUc7Z0JBQ0osZUFBZSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQjtZQUNMLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDSSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw4QkFBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzFELEVBQUUsRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsa0NBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDhCQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFO29CQUN4QixFQUFFO2lCQUNMO3FCQUFNO29CQUNILENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDVjthQUNKO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0ksSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUMxRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUU7b0JBQzlELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRTtvQkFDOUQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNyQztTQUNKO1FBQ0QsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUM5RSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDbEU7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNuRTtRQUNELElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsd0JBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixFQUFFO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUQ7SUFDTCxDQUFDO0lBRUQsd0JBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO1lBQ2xFLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQ3JFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztTQUN0RSxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsMkJBQVksR0FBWixVQUFhLENBQUM7UUFDVixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQW9CLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFybkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2tCO0lBRnBDLElBQUk7UUFEVCxPQUFPO09BQ0YsSUFBSSxDQXduRFQ7SUFBRCxXQUFDO0NBeG5ERCxBQXduREMsQ0F4bkRrQixNQUFNLENBQUMsT0FBTyxHQXduRGhDO0FBRUQsa0JBQWUsSUFBSSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcblxuY29uc3QgQmFzZVVJID0gcmVxdWlyZShcIi4vQmFzZVVJXCIpO1xuY29uc3QgQXVkaW9Db25zdCA9IHJlcXVpcmUoXCIuL0F1ZGlvQ29uc3RcIik7XG5jb25zdCBFdmVudENvbnN0ID0gcmVxdWlyZShcIi4vRXZlbnRDb25zdFwiKTtcbmNvbnN0IFBsYXRmb3JtQ29uc3QgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybUNvbnN0XCIpO1xuY29uc3QgUG9wdXBDb25zdCA9IHJlcXVpcmUoXCIuL1BvcHVwQ29uc3RcIik7XG5jb25zdCBTY2VuZUNvbnN0ID0gcmVxdWlyZShcIi4vU2NlbmVDb25zdFwiKTtcbmNvbnN0IFVzZXJDb25zdCA9IHJlcXVpcmUoXCIuL1VzZXJDb25zdFwiKTtcbmNvbnN0IEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCIuL0F1ZGlvTWFuYWdlclwiKTtcbmNvbnN0IEJtc01hbmFnZXIgPSByZXF1aXJlKFwiLi9CbXNNYW5hZ2VyXCIpO1xuY29uc3QgRXZlbnRNYW5hZ2VyID0gcmVxdWlyZShcIi4vRXZlbnRNYW5hZ2VyXCIpO1xuY29uc3QgUGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xuY29uc3QgUG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xuY29uc3QgUmVzTWFuYWdlciA9IHJlcXVpcmUoXCIuL1Jlc01hbmFnZXJcIik7XG5jb25zdCBTY2VuZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9TY2VuZU1hbmFnZXJcIik7XG5jb25zdCBVc2VyTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VzZXJNYW5hZ2VyXCIpO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcbmNvbnN0IENvbmZpZ1V0aWxzID0gcmVxdWlyZShcIi4vQ29uZmlnVXRpbHNcIik7XG5jb25zdCBYTUFEVXRpbHMgPSByZXF1aXJlKFwiLi9YTUFEVXRpbHNcIik7XG5jb25zdCBMYW5ndWFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9MYW5ndWFnZU1hbmFnZXJcIik7XG5jb25zdCBTY3JlZW5zaG90VXRpbHMgPSByZXF1aXJlKFwiLi9TY3JlZW5zaG90VXRpbHNcIik7XG5jb25zdCBUaXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vVGlwTWFuYWdlclwiKTtcbmNvbnN0IENvbmZpZ01hbmFnZXIgPSByZXF1aXJlKFwiLi9Db25maWdNYW5hZ2VyXCIpO1xuY29uc3QgQ29uZmlnQ29uc3QgPSByZXF1aXJlKFwiLi9Db25maWdDb25zdFwiKTtcbmNvbnN0IE9QUE9BbmRyb2lkQWRVdGlscyA9IHJlcXVpcmUoXCIuL09QUE9BbmRyb2lkQWRVdGlsc1wiKTtcbmNvbnN0IE9QUE9NaW5pQURVdGlscyA9IHJlcXVpcmUoXCIuL09QUE9NaW5pQURVdGlsc1wiKTtcbmNvbnN0IFNodVNodUNvbnN0ID0gcmVxdWlyZShcIi4vU2h1U2h1Q29uc3RcIik7XG5jb25zdCBUYXNrTWFuYWdlciA9IHJlcXVpcmUoXCIuL1Rhc2tNYW5hZ2VyXCIpO1xuY29uc3QgTWVtb3J5U3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9NZW1vcnlTdG9yYWdlTWFuYWdlclwiKTtcbmNvbnN0IE1lbW9yeVN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL01lbW9yeVN0b3JhZ2VDb25zdFwiKTtcbmNvbnN0IEFkanVzdEV2ZW50U3lzdGVtID0gcmVxdWlyZShcIi4vQWRqdXN0RXZlbnRTeXN0ZW1cIik7XG5jb25zdCBMb2NhbFN0b3JhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlTWFuYWdlclwiKTtcbmNvbnN0IExvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG5jb25zdCBDaGFsbGVuZ2VTeXN0ZW0gPSByZXF1aXJlKFwiLi9DaGFsbGVuZ2VTeXN0ZW1cIik7XG5jb25zdCBQb29sVXRpbHMgPSByZXF1aXJlKFwiLi9Qb29sVXRpbHNcIik7XG5jb25zdCBBc3NldE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Bc3NldE1hbmFnZXJcIik7XG5jb25zdCBUb29scyA9IHJlcXVpcmUoXCIuL1Rvb2xzXCIpO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuY2xhc3MgR2FtZSBleHRlbmRzIEJhc2VVSS5kZWZhdWx0IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGNvbG9yaW5nU3BpbmVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBfZGF0YTogYW55ID0gbnVsbDtcbiAgICBsZXZlbDogYW55ID0gbnVsbDtcbiAgICBsZXZlbElEOiBhbnkgPSBudWxsO1xuICAgIGJtczogYW55ID0gbnVsbDtcbiAgICBmbGFnOiBhbnkgPSBudWxsO1xuICAgIGNsaWNrQW1vdW50Tm9kZTogYW55ID0gbnVsbDtcbiAgICBpc1VubG9ja1RpcDogYW55ID0gITE7XG4gICAgY3VycmVudExldmVsOiBhbnkgPSAxO1xuICAgIGN1cnJlbnRNb2RlOiBhbnkgPSAxO1xuICAgIHRoZW1lVHlwZTogYW55ID0gMDtcbiAgICBjdXJyZW50VG9wTGV2ZWw6IGFueSA9IDE7XG4gICAgZnVsbEFkQ291bnRlcjogYW55ID0gMDtcbiAgICBjbGlja0Ftb3VudDogYW55ID0gMDtcbiAgICBjdXJyZW50UHJlZmFiQXNzZXQ6IGFueVtdID0gW107XG4gICAgdGltZTogYW55ID0gMDtcbiAgICBpc0hhbmRsZTogYW55ID0gITE7XG4gICAgbW9kZUxldmVsVGltZTogYW55W10gPSBbMTgwLCAxODAsIDE4MCwgMTgwLCAxODAsIDE4MCwgMzAwLCAxODAsIDE4MCwgMTgwXTtcbiAgICByZXN0YXJ0VGltZXM6IGFueSA9IDA7XG4gICAgaXNDaGVja1RpcFRleHRDRDogYW55ID0gITE7XG4gICAgYWxsSG9sZUNvdmVyQW5pbTogYW55ID0gITE7XG4gICAgbm9kZV9oYW1tZXI6IGFueSA9IG51bGw7XG4gICAgbWV0YWxBbW91bnQ6IGFueSA9IDA7XG4gICAgZGV2ZWxvcElEOiBhbnkgPSAtMTtcbiAgICByZWNvcmRTdGF0ZTogYW55ID0gMDtcbiAgICBpc0xvYWRGYWlsOiBhbnkgPSAhMTtcbiAgICBpc1RpbWVFbmQ6IGFueSA9ICExO1xuICAgIGN1cnJlbnRMZXZlbFByb2dyZXNzOiBhbnkgPSAxO1xuICAgIGN1cnJlbnRMZXZlbFRvdGFsVGltZTogYW55ID0gMTgwO1xuICAgIGN1cnJlbnRMZXZlbFRpbWU6IGFueSA9IDA7XG4gICAgaXNMb2FkaW5nU2NlbmU6IGFueSA9ICExO1xuICAgIGlzQmFjazogYW55ID0gITE7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZSA9IG5ldyBBcnJheSgxMDApLmZpbGwoMTgwKTtcbiAgICAgICAgdGhpcy5tb2RlTGV2ZWxUaW1lWzZdID0gMzAwO1xuICAgICAgICB0aGlzLm1vZGVMZXZlbFRpbWVbMjFdID0gMzAwO1xuICAgICAgICB0aGlzLm1vZGVMZXZlbFRpbWVbMjNdID0gMzAwO1xuICAgICAgICB0aGlzLm1vZGVMZXZlbFRpbWVbNzddID0gOTA7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZVs4MV0gPSAxMjA7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZVs4Ml0gPSAxMjA7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZVs5MF0gPSAzMDA7XG4gICAgICAgIHZhciBuID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwic2NyZXdUaW1lXCIpO1xuICAgICAgICBpZiAobiA+PSA5MDApIHtcbiAgICAgICAgICAgIG4gPSA5MDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gPD0gMTgwKSB7XG4gICAgICAgICAgICBuID0gMTgwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgwID09IG4pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZUxldmVsVGltZVswXSA9IDE4ZTE2O1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpbWUyLm9wYWNpdHkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlTGV2ZWxUaW1lWzBdID0gbjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuY29sb3JpbmdTcGluZVByZWZhYiA9IHRoaXMuY29sb3JpbmdTcGluZVByZWZhYjtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuZGljdC5sZXZlbDtcbiAgICAgICAgdGhpcy5sZXZlbElEID0gdGhpcy5kaWN0LmxldmVsSUQ7XG4gICAgICAgIHRoaXMuZmxhZyA9IHRoaXMuZGljdC5mbGFnO1xuICAgICAgICB0aGlzLmJtcyA9IHRoaXMuZGljdC5ibXM7XG4gICAgICAgIHRoaXMuY2xpY2tBbW91bnROb2RlID0gdGhpcy5kaWN0LmNsaWNrQW1vdW50Tm9kZTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImhvbWVCdG5cIiwgdGhpcy5jbGlja0hvbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiYmFja0J0blwiLCB0aGlzLmNsaWNrQmFjaywgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJyZXN0YXJ0QnRuXCIsIHRoaXMuY2xpY2tSZXN0YXJ0MiwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJkZXZlbG9wQnRuXCIsIHRoaXMuZGV2ZWxvcEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJvcmRlckJ0blwiLCB0aGlzLm9yZGVyQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInNjcmVlbnNob3RCdG5cIiwgdGhpcy5zY3JlZW5zaG90QnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImRvd25sb2FkQnRuXCIsIHRoaXMuZG93bmxvYWRCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiY29sbGVjdFJvb3RcIiwgdGhpcy5jb2xsZWN0Um9vdCwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJsaW1pdFdlbGZhcmVCdG5cIiwgdGhpcy5saW1pdFdlbGZhcmVCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwibWFwQnRuXCIsIHRoaXMubWFwQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jbGlja0Ftb3VudE5vZGUub24oXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5YSUFPTUlfQU5EUk9JRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGUuY2xpY2tBbW91bnQgKz0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+asoeaVsFwiLCBlLmNsaWNrQW1vdW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0gKG4gPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJmdWxsQ2xpY2tOdW1cIikpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9PSBlLmNsaWNrQW1vdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFhNQURVdGlscy5YTUFELnNob3dJbnRlcnN0aXRpYWxGZWVkX211c3QoKSwgKGUuY2xpY2tBbW91bnQgPSAwKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoUGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uT1BQT19BTkRST0lEKSkge1xuICAgICAgICAgICAgICAgICAgICAoZS5jbGlja0Ftb3VudCArPSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75qyh5pWwXCIsIGUuY2xpY2tBbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCAhPSAobiA9IEJtc01hbmFnZXIuQk1TLmdldEtleShcImZ1bGxDbGlja051bVwiKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID09IGUuY2xpY2tBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0ludGVyc3RpdGlhbEZlZWRfbXVzdCgpLCAoZS5jbGlja0Ftb3VudCA9IDApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5PUFBPKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICAgICAgZS5jbGlja0Ftb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+asoeaVsFwiLCBlLmNsaWNrQW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgIT0gKG4gPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJmdWxsQ2xpY2tOdW1cIikpICYmIG4gPT0gZS5jbGlja0Ftb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT1BQT01pbmlBRFV0aWxzLk9QUE9NaW5pQUQuc2hvd0ludGVyc3RpdGlhbEZlZWRfbXVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGlja0Ftb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5saXN0ZW5IYW5kbGUoKTtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJjbGlja0Ftb3VudE5vZGVcIik7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSBlLmRpY3QuY2xpY2tTcGluZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocik7XG4gICAgICAgICAgICAgICAgZS5kaWN0LmNsaWNrU3BpbmUucG9zaXRpb24gPSBvO1xuICAgICAgICAgICAgICAgIGUuZGljdC5jbGlja1NwaW5lLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIGUuZGljdC5jbGlja1NwaW5lLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsICExKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrQW1vdW50Tm9kZS5fdG91Y2hMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5jbGlja0Ftb3VudE5vZGUuX3RvdWNoTGlzdGVuZXIuc2V0U3dhbGxvd1RvdWNoZXMoITEpO1xuICAgICAgICB9XG4gICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJpc05lZWRJbnNlcnRcIiwgITApO1xuICAgICAgICB0aGlzLmRpY3QudmVyc2lvbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwidlwiICsgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnZlcnNpb247XG4gICAgICAgIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy50dCAmJlxuICAgICAgICAgICAgW1wiRG91eWluXCIsIFwiZG91eWluX2xpdGVcIiwgXCJsaXZlX3N0cmVhbVwiLCBcImF3ZW1lX2hvdHNvb25cIl0uc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ID09IHdpbmRvdy50dC5nZXRTeXN0ZW1JbmZvU3luYygpLmFwcE5hbWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLkVudGVyU2lkZWJhcikgfHwgMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yik5pat5oyJ6ZKuXCIsIHIsIDIgIT0gcik7XG4gICAgICAgICAgICBpZiAoMiAhPSByKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmL7npLrmjInpkq5cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LmxpbWl0V2VsZmFyZUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3mmL7npLrmjInpkq5cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LmxpbWl0V2VsZmFyZUJ0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKFBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLldFQikpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0VmlldygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUuZnVsbEFkQ291bnRlcisrO1xuICAgICAgICB9LCAxKTtcbiAgICAgICAgdGhpcy5saXN0ZW5IYW5kbGUoKTtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlNdXNpYyhBdWRpb0NvbnN0LkF1ZGlvQ29uc3QuQkdNX01BSU4pO1xuICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKFBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLldYKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKjlub/lkYpcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XRUIpKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuaGlkZVVJQnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIFRhc2tNYW5hZ2VyLmRlZmF1bHQuaW5pdCgpO1xuICAgICAgICBpZiAoMCA9PSB0aGlzLmN1cnJlbnRNb2RlKSB7XG4gICAgICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc1B1cmNoYXNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnVuaXZlcnNhbENhcmQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC51bml2ZXJzYWxDYXJkLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2tpbigpIHtcbiAgICAgICAgdmFyIHQgPSBVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVXNlckRhdGEuc2tpbkxpc3QpIHx8IHtcbiAgICAgICAgICAgIDA6IFswXSxcbiAgICAgICAgICAgIDE6IFswXSxcbiAgICAgICAgICAgIDI6IFs5XSxcbiAgICAgICAgICAgIDM6IFswXSxcbiAgICAgICAgICAgIDQ6IFswXSxcbiAgICAgICAgICAgIDU6IFswXVxuICAgICAgICB9O1xuICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEuc2tpbkxpc3QsIHQpO1xuICAgICAgICB2YXIgZSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS51c2VTa2luSURMaXN0KSB8fCB7XG4gICAgICAgICAgICAwOiAwLFxuICAgICAgICAgICAgMTogMCxcbiAgICAgICAgICAgIDI6IDksXG4gICAgICAgICAgICAzOiAwLFxuICAgICAgICAgICAgNDogMCxcbiAgICAgICAgICAgIDU6IDBcbiAgICAgICAgfTtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLnVzZVNraW5JRExpc3QsIGUpO1xuICAgICAgICB2YXIgbiA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5nZXRMb2NrU2tpbkxpc3QpIHx8IHtcbiAgICAgICAgICAgIDA6IFtdLFxuICAgICAgICAgICAgMTogW10sXG4gICAgICAgICAgICAyOiBbXSxcbiAgICAgICAgICAgIDM6IFtdLFxuICAgICAgICAgICAgNDogW10sXG4gICAgICAgICAgICA1OiBbXVxuICAgICAgICB9O1xuICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEuZ2V0TG9ja1NraW5MaXN0LCBuKTtcbiAgICB9XG5cbiAgICBoaWRlVUlCdG4oKSB7XG4gICAgICAgIGlmICh0aGlzLmRpY3QuYmFja0J0bi5vcGFjaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYmFja0J0bi5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC5ib3R0b21CYXIwLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmhpZGVVSUJ0bi5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC5zaG9wQnRuLm9wYWNpdHkgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJhY2tCdG4ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5ib3R0b21CYXIwLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLmRpY3QuaGlkZVVJQnRuLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc2hvcEJ0bi5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc3RvcFJlY29yZENhcCgpO1xuICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUN1c3RvbUFkMSgpO1xuICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUN1c3RvbUFkMigpO1xuICAgICAgICB2YXIgdCA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJsZXZlbFRpbWVcIik7XG4gICAgICAgIHZhciBlID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdCkgLyAxZTM7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgU2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuTGV2ZWxfRW5kLCB7XG4gICAgICAgICAgICBFbmRUeXBlOiAyLFxuICAgICAgICAgICAgRHVyYXRpb246IGUsXG4gICAgICAgICAgICBsdjogVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICBtb2RlOiBVc2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxpc3RlbkhhbmRsZSgpIHtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoRXZlbnRDb25zdC5kZWZhdWx0LlRJUF9CVE5fQU5JTSwgITEsIFwidGVzdFwiKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaGFuZGxlRXZlbnQpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmhhbmRsZUV2ZW50LCA4KTtcbiAgICB9XG5cbiAgICBoYW5kbGVFdmVudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5Xml6Dmk43kvZxcIik7XG4gICAgICAgIGlmIChVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVGVtcERhdGEuaXNVbmxvY2tUaXApKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoRXZlbnRDb25zdC5kZWZhdWx0LlRJUF9CVE5fQU5JTSwgITAsIFwidGVzdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RhcnRCdG5fMSgpIHtcbiAgICAgICAgdGhpcy5jaGVja0Z1bGxBZF9ub1Jlc3VsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbFByb2dyZXNzID0gMTtcbiAgICAgICAgdGhpcy5pbml0VmlldyghMCk7XG4gICAgfVxuXG4gICAgY2xpY2tSZXN0YXJ0Mih0KSB7XG4gICAgICAgIHZhciBlID0gVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCk7XG4gICAgICAgIHZhciBuID0gVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcIkxldmVsX0xvc2VfXCIgKyBuICsgXCJfXCIgKyBlKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0VGltZXMgKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2coXCLph43nva7mrKHmlbBcIiwgdGhpcy5yZXN0YXJ0VGltZXMpO1xuICAgICAgICB2YXIgciA9IEJtc01hbmFnZXIuQk1TLmdldEtleShcIkZyaWVuZEhlbHBcIik7XG4gICAgICAgIHZhciBvID0gVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuY3J5SGVscExpc3QpIHx8IFtdO1xuICAgICAgICB2YXIgaSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5jcnlIZWxwVGltZXMpIHx8IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5qOA5rWLXCIsIHRoaXMucmVzdGFydFRpbWVzLCByKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLmo4DmtYsyXCIsIGkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuajgOa1izNcIiwgbywgZSk7XG4gICAgICAgIGlmICh0aGlzLnJlc3RhcnRUaW1lcyA+PSByICYmIGkgPCAyICYmIC0xID09IG8uaW5kZXhPZih0aGlzLmN1cnJlbnRMZXZlbCkpIHtcbiAgICAgICAgICAgIG8ucHVzaCh0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5jcnlIZWxwTGlzdCwgbyk7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEuY3J5SGVscFRpbWVzLCBpICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXN0YXJ0VGltZXMgPj0gcikge1xuICAgICAgICAgICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93SW5zZXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzdGFydFRpbWVzID49IDMpIHtcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5lbWl0KEV2ZW50Q29uc3QuZGVmYXVsdC5USVBfQlROX0FOSU0sICEwKTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFRpbWVzID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaWNrUmVzdGFydCh0KTtcbiAgICB9XG5cbiAgICBvblJlc3RhcnRSZXNldCgpIHtcbiAgICAgICAgdGhpcy5jaGVja0Z1bGxBZF9ub1Jlc3VsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbFByb2dyZXNzID0gMTtcbiAgICAgICAgdGhpcy5jbGlja1Jlc3RhcnQyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGlmIChQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoUGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uT1BQT19BTkRST0lEKSkge1xuICAgICAgICAgICAgT1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0Jhbm5lckZlZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5PUFBPKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LmhpZGVMaW1pdFdlbGZhcmVCdG4sIHRoaXMuaGlkZUxpbWl0V2VsZmFyZUJ0biwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKFBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLk9QUE9fQU5EUk9JRCkpIHtcbiAgICAgICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlTmF0aXZlQWRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoUGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uT1BQTyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckV2ZW50KCk7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5vZmYoRXZlbnRDb25zdC5kZWZhdWx0LmhpZGVMaW1pdFdlbGZhcmVCdG4sIHRoaXMuaGlkZUxpbWl0V2VsZmFyZUJ0biwgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50KCkge1xuICAgICAgICBjYy5nYW1lLm9uKFwiZ2FtZV9zdWNjZXNzMVwiLCB0aGlzLnN0YXJ0U3VjLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImdhbWVfc3VjY2VzczJcIiwgdGhpcy5zdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwib25SZXN0YXJ0QnRuXCIsIHRoaXMuY2xpY2tSZXN0YXJ0MiwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJyZXN0YXJ0QnRuXzFcIiwgdGhpcy5yZXN0YXJ0QnRuXzEsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwib25SZXN0YXJ0UmVzZXRcIiwgdGhpcy5vblJlc3RhcnRSZXNldCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJpc1RpbWVFbmRcIiwgdGhpcy5pc1RpbWVFbmRGdW4sIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LkNMSUNLX05FWFQsIHRoaXMuY2xpY2tOZXh0LCB0aGlzKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKEV2ZW50Q29uc3QuZGVmYXVsdC5kZXN0cm95SW5zZXJ0LCB0aGlzLmRlc3Ryb3lJbnNlcnQsIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LmVudGVyTmV3TW9kZSwgdGhpcy5lbnRlck5ld01vZGUsIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LmV4dGVuZFRpbWUsIHRoaXMuZXh0ZW5kVGltZSwgdGhpcyk7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5vbihFdmVudENvbnN0LmRlZmF1bHQubW92ZTUsIHRoaXMubW92ZTUsIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LnVwc2V0LCB0aGlzLnVwc2V0LCB0aGlzKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKEV2ZW50Q29uc3QuZGVmYXVsdC5ib3JlQnRuLCB0aGlzLmJvcmVCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwid29vZFJlbW92ZVwiLCB0aGlzLndvb2RSZW1vdmUsIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LlN0b3BUaW1lciwgdGhpcy5zdG9wVGltZXIsIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LnJlc3RvcmVUaW1lLCB0aGlzLnJlc3RvcmVUaW1lLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImFkc1ZpZGVvRmFpbFwiLCB0aGlzLmFkc1ZpZGVvRmFpbCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJpbnNldFZpZGVvU3VjY2Vzc1wiLCB0aGlzLmluc2V0VmlkZW9TdWNjZXNzLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImluc2V0VmlkZW9Bc2tcIiwgdGhpcy5pbnNldFZpZGVvQXNrLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImFkU2tpcHBlZFwiLCB0aGlzLmFkU2tpcHBlZCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJoYW1tZXJCdG5cIiwgdGhpcy5oYW1tZXJCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic2hha2VCdG5cIiwgdGhpcy5zaGFrZUJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJ1bmRvQnRuXCIsIHRoaXMudW5kb0J0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJ3aW5nQnRuXCIsIHRoaXMud2luZ0J0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJoaWdobGlnaHRCdG5cIiwgdGhpcy5oaWdobGlnaHRCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiYWRkU3RlcEJ0blwiLCB0aGlzLmFkZFN0ZXBCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwibW9kZXJhdGVCdG5cIiwgdGhpcy5tb2RlcmF0ZUJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJyb3RhdGVCdG5cIiwgdGhpcy5yb3RhdGVCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic2NyZXdCb3hCdG5cIiwgdGhpcy5zY3Jld0JveEJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJmdW5jX2NoZWNrRGVsTmFpbENiXCIsIHRoaXMuZnVuY19jaGVja0RlbE5haWxDYiwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJhbGxIb2xlQ292ZXJcIiwgdGhpcy5hbGxIb2xlQ292ZXIsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiY2hlaHVpQnRuX2FuaW1cIiwgdGhpcy5jaGVodWlCdG5fYW5pbSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJyZW1vdmVTY3Jld0J0blwiLCB0aGlzLnJlbW92ZVNjcmV3QnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImxpc3RlbkhhbmRsZVwiLCB0aGlzLmxpc3RlbkhhbmRsZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJoaWRlR2V0Q2FyZFwiLCB0aGlzLmhpZGVHZXRDYXJkLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImFsbFBlcnNvbkFtb3VudFwiLCB0aGlzLmFsbFBlcnNvbkFtb3VudCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJjaGVja1RpcFRleHRcIiwgdGhpcy5jaGVja1RpcFRleHQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiZjI5MDg2X2FkZENvaW5cIiwgdGhpcy5mMjkwODZfYWRkQ29pbiwgdGhpcyk7XG4gICAgfVxuXG4gICAgY2xlYXJFdmVudCgpIHtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJnYW1lX3N1Y2Nlc3MxXCIsIHRoaXMuc3RhcnRTdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImdhbWVfc3VjY2VzczJcIiwgdGhpcy5zdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIm9uUmVzdGFydEJ0blwiLCB0aGlzLmNsaWNrUmVzdGFydDIsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIm9uUmVzdGFydFJlc2V0XCIsIHRoaXMub25SZXN0YXJ0UmVzZXQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImlzVGltZUVuZFwiLCB0aGlzLmlzVGltZUVuZEZ1biwgdGhpcyk7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5vZmYoRXZlbnRDb25zdC5kZWZhdWx0LkNMSUNLX05FWFQsIHRoaXMuY2xpY2tOZXh0LCB0aGlzKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZihFdmVudENvbnN0LmRlZmF1bHQuZGVzdHJveUluc2VydCwgdGhpcy5kZXN0cm95SW5zZXJ0LCB0aGlzKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZihFdmVudENvbnN0LmRlZmF1bHQuZW50ZXJOZXdNb2RlLCB0aGlzLmVudGVyTmV3TW9kZSwgdGhpcyk7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5vZmYoRXZlbnRDb25zdC5kZWZhdWx0LmV4dGVuZFRpbWUsIHRoaXMuZXh0ZW5kVGltZSwgdGhpcyk7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5vZmYoRXZlbnRDb25zdC5kZWZhdWx0Lm1vdmU1LCB0aGlzLm1vdmU1LCB0aGlzKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZihFdmVudENvbnN0LmRlZmF1bHQudXBzZXQsIHRoaXMudXBzZXQsIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub2ZmKEV2ZW50Q29uc3QuZGVmYXVsdC5ib3JlQnRuLCB0aGlzLmJvcmVCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIndvb2RSZW1vdmVcIiwgdGhpcy53b29kUmVtb3ZlLCB0aGlzKTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZihFdmVudENvbnN0LmRlZmF1bHQuU3RvcFRpbWVyLCB0aGlzLnN0b3BUaW1lciwgdGhpcyk7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5vZmYoRXZlbnRDb25zdC5kZWZhdWx0LnJlc3RvcmVUaW1lLCB0aGlzLnJlc3RvcmVUaW1lLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJhZHNWaWRlb0ZhaWxcIiwgdGhpcy5hZHNWaWRlb0ZhaWwsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImluc2V0VmlkZW9TdWNjZXNzXCIsIHRoaXMuaW5zZXRWaWRlb1N1Y2Nlc3MsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImluc2V0VmlkZW9Bc2tcIiwgdGhpcy5pbnNldFZpZGVvQXNrLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJhZFNraXBwZWRcIiwgdGhpcy5hZFNraXBwZWQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImhhbW1lckJ0blwiLCB0aGlzLmhhbW1lckJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwic2hha2VCdG5cIiwgdGhpcy5zaGFrZUJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwidW5kb0J0blwiLCB0aGlzLnVuZG9CdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIndpbmdCdG5cIiwgdGhpcy53aW5nQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJoaWdobGlnaHRCdG5cIiwgdGhpcy5oaWdobGlnaHRCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImFkZFN0ZXBCdG5cIiwgdGhpcy5hZGRTdGVwQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJtb2RlcmF0ZUJ0blwiLCB0aGlzLm1vZGVyYXRlQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJyb3RhdGVCdG5cIiwgdGhpcy5yb3RhdGVCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInNjcmV3Qm94QnRuXCIsIHRoaXMuc2NyZXdCb3hCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImZ1bmNfY2hlY2tEZWxOYWlsQ2JcIiwgdGhpcy5mdW5jX2NoZWNrRGVsTmFpbENiLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJhbGxIb2xlQ292ZXJcIiwgdGhpcy5hbGxIb2xlQ292ZXIsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImNoZWh1aUJ0bl9hbmltXCIsIHRoaXMuY2hlaHVpQnRuX2FuaW0sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInJlbW92ZVNjcmV3QnRuXCIsIHRoaXMucmVtb3ZlU2NyZXdCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImxpc3RlbkhhbmRsZVwiLCB0aGlzLmxpc3RlbkhhbmRsZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiaGlkZUdldENhcmRcIiwgdGhpcy5oaWRlR2V0Q2FyZCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiYWxsUGVyc29uQW1vdW50XCIsIHRoaXMuYWxsUGVyc29uQW1vdW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJjaGVja1RpcFRleHRcIiwgdGhpcy5jaGVja1RpcFRleHQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImYyOTA4Nl9hZGRDb2luXCIsIHRoaXMuZjI5MDg2X2FkZENvaW4sIHRoaXMpO1xuICAgIH1cblxuICAgIGYyOTA4Nl9hZGRDb2luKCkge1xuICAgIH1cblxuICAgIGFsbFBlcnNvbkFtb3VudCh0LCBlKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBuID0gTWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoTWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdEdvb2RzSUQpO1xuICAgICAgICAgICAgdmFyIHIgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdCkgfHwge1xuICAgICAgICAgICAgICAgIDA6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFuIHx8IHJbMF0uaW5jbHVkZXMobikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29sbGVjdFJvb3QuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgwID09IHRoaXMuY3VycmVudE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNvbGxlY3RSb290LmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29sbGVjdFJhdGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBNYXRoLnJvdW5kKCgoZSAtIHQpIC8gZSkgKiAxMDApICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jb2xsZWN0SWNvbjIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gKGUgLSB0KSAvIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNvbGxlY3RSb290LmFjdGl2ZSA9ICExO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGljdC5sZXZlbFByb1RleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdDtcbiAgICAgICAgdGhpcy5kaWN0LmxldmVsUHJvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHQgLyBlO1xuICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QubGV2ZWxQcm9Sb290LmFjdGl2ZSA9ICExO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tUaXBUZXh0KHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoZWNrVGlwVGV4dENEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0NoZWNrVGlwVGV4dENEID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGV4dC5zY2FsZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGV4dC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC50aXBUZXh0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmRpY3QudGlwVGV4dClcbiAgICAgICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5kZWxheSgxLjUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlLmlzQ2hlY2tUaXBUZXh0Q0QgPSAhMTtcbiAgICAgICAgICAgIH0sIDYwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC50aXBUZXh0Mi5zY2FsZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGV4dDIuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGV4dDIub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZGljdC50aXBUZXh0MilcbiAgICAgICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5kZWxheSgxLjUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVNjcmV3QnRuKCkge1xuICAgICAgICB0aGlzLmRpY3QucmVtb3ZlU2NyZXdCdG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5kaWN0LnJlbW92ZVNjcmV3QnRuLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5hbGxIb2xlQ292ZXJBbmltID0gITE7XG4gICAgfVxuXG4gICAgY2hlaHVpQnRuX2FuaW0oKSB7XG4gICAgICAgIHRoaXMuYWxsSG9sZUNvdmVyQW5pbSA9ICExO1xuICAgIH1cblxuICAgIGhpZGVHZXRDYXJkKCkge1xuICAgICAgICB0aGlzLmRpY3Qubm9GaXJzdEFsbEhvbGUuYWN0aXZlID0gITE7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5lbWl0KEV2ZW50Q29uc3QuZGVmYXVsdC5yZXN0b3JlVGltZSk7XG4gICAgfVxuXG4gICAgYWxsSG9sZUNvdmVyKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFsbEhvbGVDb3ZlckFuaW0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsbEhvbGVDb3ZlckFuaW0gPSAhMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsSG9sZUNvdmVyLS0tLS0tLVwiKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lk5vRmlyc3RBbGxIb2xlKSAmJlxuICAgICAgICAgICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5oYXNQdXJjaGFzZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lk5vRmlyc3RBbGxIb2xlLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3Qubm9GaXJzdEFsbEhvbGUuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgVGlwTWFuYWdlci5UaXAuc2hvdyhcIuW+iOmBl+aGvu+8jOayoeacieWPr+aTjeS9nOatpemqpOS6huOAglwiKTtcbiAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQuZW1pdChFdmVudENvbnN0LmRlZmF1bHQuU3RvcFRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gKExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50KSB8fCAwKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50LCB0KTtcbiAgICAgICAgICAgICAgICAgICAgTWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoTWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucmV3YXJkLCBbW1wiY2FyZFwiLCAxXV0pO1xuICAgICAgICAgICAgICAgIH0sIDEuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kaWN0LnJlbW92ZVNjcmV3QnRuLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yZW1vdmVTY3Jld0J0bi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yZW1vdmVTY3Jld0J0bi5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5kaWN0LnJlbW92ZVNjcmV3QnRuKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yNSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnVuaW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZGljdC5yZW1vdmVTY3Jld0J0bi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0LmRpY3QucmVtb3ZlU2NyZXdCdG4uc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0LmFsbEhvbGVDb3ZlckFuaW0gPSAhMTtcbiAgICAgICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmU1KCkge1xuICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmFkZEF1dG9Nb3ZlTnVtYmVyKCk7XG4gICAgfVxuXG4gICAgdXBzZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLnNodWZmbGUpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uc2h1ZmZsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYm9yZUJ0bigpIHtcbiAgICAgICAgdGhpcy5kaWN0LmJvcmVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmNoZWNrQWRMb2NrKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmNoZWNrQWRMb2NrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW1tZXJCdG4oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXTtcbiAgICAgICAgdC5pc0NhblVzZUhhbW1lciA9ICEwO1xuICAgICAgICB0Lm5vZGVfaGFtbWVyLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLnBvc2l0aW9uID0gY2MudjMoKTtcbiAgICAgICAgdC5ub2RlX2hhbW1lci5hY3RpdmUgPSAhMDtcbiAgICAgICAgdmFyIGUgPSB0Lm5vZGVfaGFtbWVyLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpO1xuICAgICAgICBjYy50d2VlbihlKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2NcbiAgICAgICAgICAgICAgICAgICAgLnR3ZWVuKClcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZ2V0SXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBfaW5pdE91dExpbmUoKSB7XG4gICAgfVxuXG4gICAgc2hha2VCdG4oKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLnNoYWtlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLnNoYWtlQW5pbWF0aW9uKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5kb0J0bigpIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uZnVuY193aXRoZHJhdykge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX3dpdGhkcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5nQnRuKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2ZseSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2ZseSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0QnRuKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2hpZ2hsaWdodCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2hpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU3RlcEJ0bigpIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uZnVuY19hZGRTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmZ1bmNfYWRkU3RlcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9kZXJhdGVCdG4oKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLnNldExlZnRTY3JvbGxTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5zZXRMZWZ0U2Nyb2xsU3BlZWQoMzApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm90YXRlQnRuKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1sxXS50dXJuKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzFdLnR1cm4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcmV3Qm94QnRuKCkge1xuICAgICAgICB0aGlzLmRpY3QuYm90dG9tQmFyMC5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5kaWN0LnRvcExlZnRCYXIuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuZGljdC5udW1iZXIuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmZ1bmNfZGVsTmFpbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2RlbE5haWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmNfY2hlY2tEZWxOYWlsQ2IoKSB7XG4gICAgICAgIHRoaXMuZGljdC5ib3R0b21CYXIwLmFjdGl2ZSA9ICEwO1xuICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5hY3RpdmUgPSAhMDtcbiAgICAgICAgdGhpcy5kaWN0Lm51bWJlci5hY3RpdmUgPSAhMDtcbiAgICAgICAgdGhpcy5yZXN0b3JlVGltZSgpO1xuICAgIH1cblxuICAgIGV4dGVuZFRpbWUoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsVGltZSA9IDYwO1xuICAgICAgICB0aGlzLmRpY3QudGltZTIuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC50aW1lMi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLnNlY29uZEZvcm1hdCh0aGlzLmN1cnJlbnRMZXZlbFRpbWUpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXJGdW4sIDEpO1xuICAgIH1cblxuICAgIHN0b3BUaW1lcih0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaWN0LnRpbWUyLmFjdGl2ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmoLlgZzml7bpl7RcIik7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lckZ1bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGljdC50aW1lMi5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aW1lckZ1biwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZHNWaWRlb0ZhaWwoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJsZXZlbF9pbnRlcmZhaWxfXCIgKyB0aGlzLmN1cnJlbnRNb2RlICsgXCJfXCIgKyB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgfVxuXG4gICAgYWRTa2lwcGVkKCkge1xuICAgIH1cblxuICAgIGluc2V0VmlkZW9TdWNjZXNzKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwibGV2ZWxfaW50ZXJwbGF5X1wiICsgdGhpcy5jdXJyZW50TW9kZSArIFwiX1wiICsgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgIH1cblxuICAgIGluc2V0VmlkZW9Bc2soKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJsZXZlbF9pbnRlcl9cIiArIHRoaXMuY3VycmVudE1vZGUgKyBcIl9cIiArIHRoaXMuY3VycmVudExldmVsKTtcbiAgICB9XG5cbiAgICBkZXN0cm95SW5zZXJ0KCkge1xuICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZGVzdHJveUluc2VydCgpO1xuICAgIH1cblxuICAgIGNsaWNrTmV4dCgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5ORVhUX01PREVfSUQpO1xuICAgICAgICBpZiAoMSAhPSB0aGlzLnRoZW1lVHlwZSkge1xuICAgICAgICAgICAgQ29uZmlnVXRpbHMuQ29uZmlnVXRpbHMuZ2V0RGF0YUJ5SUQodGhpcy5jdXJyZW50TW9kZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0LmN1cnJlbnRUb3BMZXZlbCA9IGUuYW1vdW50O1xuICAgICAgICAgICAgICAgIGlmICh0LmN1cnJlbnRMZXZlbCArIDEgPiB0LmN1cnJlbnRUb3BMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacgOWQjuS4gOWFs1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdC5pbml0TGV2ZWxPcmRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIHQuY3VycmVudExldmVsICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5lbWl0KEV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSVNfVU5MT0NLX1RJUCk7XG4gICAgICAgICAgICAgICAgICAgIHQuaW5pdFZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoUGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uQU5EUk9JRF9HT09HTEUpIHx8XG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5JT1NfSEFJV0FJKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImlzTmVlZEluc2VydFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGVja0Z1bGxBZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3pnIDopoHlt67or4RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImlzTmVlZEluc2VydFwiLCAhMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb25maWdVdGlscy5Db25maWdVdGlscy5nZXREYXRhQnlJRF85OSh0aGlzLmN1cnJlbnRNb2RlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHQuY3VycmVudFRvcExldmVsID0gZS5hbW91bnQ7XG4gICAgICAgICAgICAgICAgaWYgKHQuY3VycmVudExldmVsICsgMSA+IHQuY3VycmVudFRvcExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyA5ZCO5LiA5YWzXCIpO1xuICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUsIHQuY3VycmVudE1vZGUpO1xuICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoRXZlbnRDb25zdC5kZWZhdWx0LlVQREFURV9JU19VTkxPQ0tfVElQKTtcbiAgICAgICAgICAgICAgICAgICAgdC5pbml0VmlldygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIHQuY3VycmVudExldmVsICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5lbWl0KEV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSVNfVU5MT0NLX1RJUCk7XG4gICAgICAgICAgICAgICAgICAgIHQuaW5pdFZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoUGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uQU5EUk9JRF9HT09HTEUpIHx8XG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5JT1NfSEFJV0FJKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImlzTmVlZEluc2VydFwiKSB8fCBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Tm9BRFN0YXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY2hlY2tGdWxsQWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiN6ZyA6KaB5beu6K+EXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJpc05lZWRJbnNlcnRcIiwgITApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdExldmVsT3JkZXIoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XRUIpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRNb2RlTGV2ZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTFJRCk7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UySUQpO1xuICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMUlEKTtcbiAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTJJRCk7XG4gICAgICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICAgICAgdmFyIG4gPSBbXTtcbiAgICAgICAgICAgIHZhciByID0gW107XG4gICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICBpZiAoMCA9PSB0aGlzLmN1cnJlbnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgQ29uZmlnTWFuYWdlci5Db25maWcuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBDb25maWdDb25zdC5Db25maWdDb25zdC5USEVNRSArIDAgKyBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuY29uZmlnU3VmZml4XG4gICAgICAgICAgICAgICAgKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgci5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSByW29dO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKGkuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5wdXNoKGkuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG4uc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTFJRCwgZSk7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCwgbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT6J665LidXCIsIGUsIG4pO1xuICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUN1cnJlbnRNb2RlTGV2ZWwoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKDEgPT0gdGhpcy5jdXJyZW50TW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBDb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoQ29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyAxKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5wdXNoKGkuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucHVzaChpLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UySUQsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuIXnkIZcIiwgciwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUN1cnJlbnRNb2RlTGV2ZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDIgPT0gdGhpcy5jdXJyZW50TW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnTWFuYWdlci5Db25maWcuZ2V0KENvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgMikudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChyLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHIuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEubW9kZTJMZXZlbExpc3Rfc3RhZ2UxSUQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMkxldmVsTGlzdF9zdGFnZTJJRCwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtojpmaTnrq3lpLRcIiwgaSwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC51cGRhdGVDdXJyZW50TW9kZUxldmVsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kZUJ5SUQodGhpcy5jdXJyZW50TW9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb2RlQnlJRCh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdmFyIG4gPSBbXTtcbiAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgQ29uZmlnTWFuYWdlci5Db25maWcuZ2V0KENvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgdCkudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBvW2ldO1xuICAgICAgICAgICAgICAgIG4ucHVzaChhLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICByLnB1c2goYS5zdGFnZTJJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGFbXCJtb2RlXCIgKyB0ICsgXCJMZXZlbExpc3Rfc3RhZ2UxSURcIl0sIG4pO1xuICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhW1wibW9kZVwiICsgdCArIFwiTGV2ZWxMaXN0X3N0YWdlMklEXCJdLCByKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5qih5byPXCIsIHQsIG4sIHIpO1xuICAgICAgICAgICAgZS51cGRhdGVDdXJyZW50TW9kZUxldmVsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRNb2RlTGV2ZWwoKSB7XG4gICAgICAgIHZhciB0ID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QpIHx8IHt9O1xuICAgICAgICB2YXIgZSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwibGV2ZWxMaXN0TG9vcFRpbWVzXCIpIHx8IHt9O1xuICAgICAgICBpZiAoZVt0aGlzLmN1cnJlbnRNb2RlXSkge1xuICAgICAgICAgICAgZVt0aGlzLmN1cnJlbnRNb2RlXSArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZVt0aGlzLmN1cnJlbnRNb2RlXSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoXCJsZXZlbExpc3RMb29wVGltZXNcIiwgZSk7XG4gICAgICAgIHRbdGhpcy5jdXJyZW50TW9kZV0gPSAxO1xuICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUsIHRoaXMuY3VycmVudE1vZGUpO1xuICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCAxKTtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QsIHQpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQuZW1pdChFdmVudENvbnN0LmRlZmF1bHQuVVBEQVRFX0lTX1VOTE9DS19USVApO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgfVxuXG4gICAgZW50ZXJOZXdNb2RlKCkge1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQuZW1pdChFdmVudENvbnN0LmRlZmF1bHQuVVBEQVRFX0lTX1VOTE9DS19USVApO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgfVxuXG4gICAgc3RhcnRTdWMoKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuc2hvdCgpO1xuICAgIH1cblxuICAgIHNjcmVlbnNob3QoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5kaWN0LmxldmVsKSkge1xuICAgICAgICAgICAgICAgIHQucmVzdGFydE5vZGVTaG90KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuMSk7XG4gICAgfVxuXG4gICAgcmVzdGFydE5vZGVTaG90KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaIquWbvlwiKTtcbiAgICAgICAgVXRpbHMuVXRpbHMubm9kZVNob3QodGhpcy5kaWN0LmxldmVsKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2NyZWVuU2hvdFBpY3R1cmUgPSB0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3b29kUmVtb3ZlKHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5Ugd29vZFJlbW92ZVwiKTtcbiAgICAgICAgdmFyIGUgPSBQb29sVXRpbHMuZGVmYXVsdC5nZXQodGhpcy5kaWN0LmRvd25TcGluZVJvb3QpO1xuICAgICAgICBlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB2YXIgbiA9IHQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0LnBvc2l0aW9uKTtcbiAgICAgICAgdmFyIHIgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobik7XG4gICAgICAgIGlmIChyLnggPD0gLTI1MCkge1xuICAgICAgICAgICAgci54ID0gLTI1MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoci54ID49IDI1MCkge1xuICAgICAgICAgICAgci54ID0gMjUwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiblBvcy54XCIsIHIueCk7XG4gICAgICAgIGUueCA9IHIueDtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGUpO1xuICAgICAgICBlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsICExKTtcbiAgICAgICAgZS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFBvb2xVdGlscy5kZWZhdWx0LnB1dChlKTtcbiAgICAgICAgfSwgMTApO1xuICAgIH1cblxuICAgIHN1YygpIHtcbiAgICAgICAgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnN0b3BSZWNvcmRDYXAoKTtcbiAgICAgICAgdGhpcy5kaWN0LnRpbWUyLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lckZ1bik7XG4gICAgICAgIHZhciB0ID0gVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImxldmVsVGltZVwiKTtcbiAgICAgICAgdmFyIGUgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0KSAvIDFlMztcbiAgICAgICAgdmFyIG4gPSBVc2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBTaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9XaW4sIHtcbiAgICAgICAgICAgIGx2OiBuLFxuICAgICAgICAgICAgbW9kZTogdGhpcy5jdXJyZW50TW9kZSxcbiAgICAgICAgICAgIHF1ZXVlOiB0aGlzLmN1cnJlbnRMZXZlbCxcbiAgICAgICAgICAgIHRpbWVzOiBlLFxuICAgICAgICAgICAgc29ydDogTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VjRnVuYygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbFByb2dyZXNzID0gMTtcbiAgICB9XG5cbiAgICBwbGF5TkRCUygpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmRpY3Quc3BpbmUuYWN0aXZlID0gITA7XG4gICAgICAgIGlmIChcInRjXCIgPT0gTGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuaW5zdGFuY2UubGFuKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb24yXCIsICExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcImVuXCIgPT0gTGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuaW5zdGFuY2UubGFuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNwaW5lLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uNFwiLCAhMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcImphXCIgPT0gTGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuaW5zdGFuY2UubGFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjNcIiwgITEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuZGljdC5zcGluZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgfSwgMS41KTtcbiAgICB9XG5cbiAgICBzdWNGdW5jKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuY3VycmVudExldmVsICsgMTtcbiAgICAgICAgdmFyIGUgPSBVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCkgfHwge307XG4gICAgICAgIGlmIChlWzBdKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZVswXSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0TGV2ZWxcIiwgdCwgXCJsaXN0XCIsIGUpO1xuICAgICAgICBpZiAodCA+IGVbdGhpcy5jdXJyZW50TW9kZV0pIHtcbiAgICAgICAgICAgIGVbdGhpcy5jdXJyZW50TW9kZV0gPSB0O1xuICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QsIGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlrDpgJrlhbNcIik7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwibmV3UGFzc1wiLCAhMCk7XG4gICAgICAgICAgICBBZGp1c3RFdmVudFN5c3RlbS5kZWZhdWx0LnRvZGF5UGFzc1RpbWVzKCk7XG4gICAgICAgICAgICB2YXIgbiA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYW5UdXJudGFibGVUaW1lcykgfHwgMDtcbiAgICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYW5UdXJudGFibGVUaW1lcywgbiArIDEpO1xuICAgICAgICAgICAgdmFyIHIgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuc2hpcFN0YXJ0VGltZSkgfHwgMDtcbiAgICAgICAgICAgIHZhciBvID0gTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmZvcndhcmRUaW1lcykgfHwgMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hpcFN0YXJ0VGltZVwiLCBvKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hpcFN0YXJ0VGltZVwiLCByKTtcbiAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgbyArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hpcFN0YXJ0VGltZTMyMzMzM1wiLCByKTtcbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuZm9yd2FyZFRpbWVzLCBvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJuZXdQYXNzXCIsICExKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwicmVjb3JkXCIpIHx8IDA7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoXCJyZWNvcmRcIiwgaSk7XG4gICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zZW5kUmFua0RhdGEoKTtcbiAgICAgICAgaWYgKDAgPT0gdGhpcy5jdXJyZW50TW9kZSAmJiBlW3RoaXMuY3VycmVudE1vZGVdID49IDUpIHtcbiAgICAgICAgICAgIGlmICgwID09IChMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2hhbGxlbmdlU3RhcnRUaW1lKSB8fCAwKSkge1xuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jaGFsbGVuZ2VTdGFydFRpbWUsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBDaGFsbGVuZ2VTeXN0ZW0uZGVmYXVsdC5pbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYSA9IExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jaGFsbGVuZ2VVbmxvY2tBbW91bnQpIHx8IDA7XG4gICAgICAgICAgICBhICs9IDE7XG4gICAgICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2hhbGxlbmdlVW5sb2NrQW1vdW50LCBhKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5nYW1lLmVtaXQoXCJUYXNrRmluaXNoXCIpO1xuICAgICAgICBpZiAoLTEgIT0gUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmZsYWcuaW5kZXhPZihcInR0XCIpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMuY3VycmVudE1vZGU7XG4gICAgICAgICAgICB2YXIgYyA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5BTFJFQURZX1BMQVkpIHx8IHt9O1xuICAgICAgICAgICAgaWYgKGNbc10pIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjW3NdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoLTEgPT0gY1tzXS5pbmRleE9mKHRoaXMuY3VycmVudExldmVsKSkge1xuICAgICAgICAgICAgICAgIGNbc10ucHVzaCh0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9QTEFZLCBjKTtcbiAgICAgICAgICAgIHZhciBsID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfVU5MT0NLKSB8fCB7fTtcbiAgICAgICAgICAgIGlmIChsW3NdKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbFtzXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC0xID09IGxbc10uaW5kZXhPZih0KSkge1xuICAgICAgICAgICAgICAgIGxbc10ucHVzaCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5BTFJFQURZX1VOTE9DSywgbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKFBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLkFORFJPSURfR09PR0xFKSB8fFxuICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKFBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLklPU19IQUlXQUkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGdWxsQWQoKTtcbiAgICAgICAgfVxuICAgICAgICBQb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlQWxsKCk7XG4gICAgICAgIE1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KE1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LklzRmFpbCwgMCk7XG4gICAgICAgIGlmICgxID09IHRoaXMudGhlbWVUeXBlKSB7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KFBvcHVwQ29uc3QuUG9wdXBDb25zdC5XaW5PbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdyhQb3B1cENvbnN0LlBvcHVwQ29uc3QuV0lOKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5FbnRlclNpZGViYXIpIHx8IDA7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+PSAzICYmIHRoaXMuY3VycmVudExldmVsICUgMyA9PSAwICYmIDIgIT0gdSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coUG9wdXBDb25zdC5Qb3B1cENvbnN0LkxpbWl0V2VsZmFyZSk7XG4gICAgICAgICAgICB9LCAwLjMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLklTX0NPTU1FTlQpIHx8IDA7XG4gICAgICAgIHZhciBtID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiZXZhbHVhdGVsdlwiKTtcbiAgICAgICAgaWYgKDAgIT0gdGhpcy5jdXJyZW50TW9kZSB8fCBoIHx8IC0xID09IG0uaW5kZXhPZih0aGlzLmN1cnJlbnRMZXZlbCkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdyhQb3B1cENvbnN0LlBvcHVwQ29uc3QuQ09NTUVOVCk7XG4gICAgICAgICAgICB9LCAwLjQpO1xuICAgICAgICB9XG4gICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLklTX1dJTiwgITEpO1xuICAgIH1cblxuICAgIGluaXRTa2luQW5kUm9sZSgpIHtcbiAgICAgICAgdmFyIHQgPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuU2tpbkxpc3QpIHx8IHt9O1xuICAgICAgICBpZiAodFswXSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRbMF0gPSBbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRbMV0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0WzFdID0gWzBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlID0gTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlVzZVNraW4pIHx8IHt9O1xuICAgICAgICBpZiAoZVswXSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVbMF0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlWzFdKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZVsxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuSGVyb0xldmVsKSB8fCAxO1xuICAgICAgICB3aW5kb3cuZjI5MDg2X0xldmVsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZVNraW46IGUsXG4gICAgICAgICAgICBoZXJvTGV2ZWw6IG5cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmYyOTA4Nl9kcmFnb25CYWxsID0gMDtcbiAgICAgICAgd2luZG93LmYyOTA4Nl9jb2luID0gMDtcbiAgICB9XG5cbiAgICBpbml0Vmlldyh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgIHQgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgIHZhciBsO1xuICAgICAgICAgICAgdmFyIGg7XG4gICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgIHZhciBiO1xuICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICB2YXIgQztcbiAgICAgICAgICAgIHZhciBNO1xuICAgICAgICAgICAgdmFyIFQ7XG4gICAgICAgICAgICB2YXIgQTtcbiAgICAgICAgICAgIHZhciBVO1xuICAgICAgICAgICAgdmFyIEI7XG4gICAgICAgICAgICB2YXIgTztcbiAgICAgICAgICAgIHZhciBOO1xuICAgICAgICAgICAgdmFyIGo7XG4gICAgICAgICAgICB2YXIgViA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKHopIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHoubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFByZWZhYkFzc2V0Lmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IHRoaXMuY3VycmVudFByZWZhYkFzc2V0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQodGhpcy5jdXJyZW50UHJlZmFiQXNzZXRbbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcmVmYWJBc3NldCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YeK5pS+6aKE5Yi2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcy5sZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwuZGVzdHJveUFsbENoaWxkcmVuKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1lLmNhblVzZVByb3BzID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRTa2luQW5kUm9sZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbkhhbmRsZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc0NoZWNrVGlwVGV4dENEID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jdXJyZW50TW9kZSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jdXJyZW50TGV2ZWwgPSBVc2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnRoZW1lVHlwZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChNZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5UaGVtZVR5cGUpIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5hbGxIb2xlQ292ZXJBbmltID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldChNZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5MZXZlbFJlbGl2ZUNvdW50LCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PSDkuLvpopg6IFwiICsgdGhpcy5jdXJyZW50TW9kZSArIFwiIOWFs+WNoTogXCIgKyB0aGlzLmN1cnJlbnRMZXZlbCArIFwiID09XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09IOS4u+mimOexu+WeizogXCIgKyB0aGlzLnRoZW1lVHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImlzUmVtb3ZlXCIsICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZVJlc3RhcnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubGV2ZWxQcm9Sb290LmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC51bmxvY2tQb3NCdG4uYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMuY3VycmVudExldmVsICYmIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChjb25zb2xlLmxvZyhcImxpbWl0V2VsZmFyZUJ0bjExMVwiLCB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaW1pdFdlbGZhcmVCdG4xMTEtLS0tXCIsIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbmRvdy5uZWVkU2hvd0xpbWl0V2VsZmFyZUJ0biA9ICEwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogd2luZG93Lm5lZWRTaG93TGltaXRXZWxmYXJlQnRuICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25zb2xlLmxvZyhcImxpbWl0V2VsZmFyZUJ0bjIyMlwiLCB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICEwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibGV2ZWxzcGFjZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiaXNDaGVja1wiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2xldmVsc3BhY2UtaXNDaGVja11cIiwgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gbyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKC0xID09IHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICh0aGlzLmRpY3QuZG93bmxvYWRCdG4uYWN0aXZlID0gITEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmN1cnJlbnRMZXZlbCAlIChyICsgMSkgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLmRpY3QuZG93bmxvYWRCdG4ueSA9IDUxNC43NzgpLCAodGhpcy5kaWN0LmRvd25sb2FkQnRuLmFjdGl2ZSA9ICEwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLmRpY3QuZG93bmxvYWRCdG4uYWN0aXZlID0gITEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPSBVc2VyTWFuYWdlci5Vc2VyLmdldChcImxldmVsTGlzdExvb3BUaW1lc1wiKSB8fCB7fSlbdGhpcy5jdXJyZW50TW9kZV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpW3RoaXMuY3VycmVudE1vZGVdID0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0gdGhpcy5jdXJyZW50TW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbMywgMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ01hbmFnZXIuQ29uZmlnLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdDb25zdC5Db25maWdDb25zdC5USEVNRSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vZGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuY29uZmlnU3VmZml4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gei5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVt0aGlzLmN1cnJlbnRNb2RlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShoID0gTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lkxvb3BMZXZlbElEQXJyKSB8fCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMDsgbSA8IGwubGVuZ3RoOyBtKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxICE9IChiID0gbFttXSkuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLnB1c2goYi5sZXZlbElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gVG9vbHMuZGVmYXVsdC5zaHVmZmxlQXJyYXkoaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Mb29wTGV2ZWxJREFyciwgaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoW3RoaXMuY3VycmVudExldmVsIC0gMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGhbdGhpcy5jdXJyZW50TGV2ZWwgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gaFtoLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGwuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5pZCA9PSBWLmN1cnJlbnRMZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZXZlbElEO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBDb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoQ29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyB0aGlzLmN1cnJlbnRNb2RlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB6LnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBsLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5pZCA9PSBWLmN1cnJlbnRMZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxldmVsSUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09IOW8gOWPkUlEOiBcIiArIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsIFNodVNodUNvbnN0LlNodVNodUNvbnN0LkxldmVsX1Jlc2V0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx2OiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiB0aGlzLmN1cnJlbnRNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogdGhpcy5jdXJyZW50TGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBTaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9QYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx2OiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiB0aGlzLmN1cnJlbnRNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogdGhpcy5jdXJyZW50TGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IExvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc1B1cmNoYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNob3BCdG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gXCJ6cWRkbl96aGIvcHJlZmFiL2xldmVsL3pxZGRuX3poYl9sZXZlbFwiICsgYztcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQsIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVzTWFuYWdlci5SZXMubG9hZChrKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcihWLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gdGhpcy5jdXJyZW50TGV2ZWwgKyBpW3RoaXMuY3VycmVudE1vZGVdICogbC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5udW1iZXIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFwi56ysJWTlhbNcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuY3VycmVudExldmVsID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm1hcEJ0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoOCA9PSB0aGlzLmN1cnJlbnRNb2RlICYmIG4uX2NvbXBvbmVudHNbMF0uZ2FtZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlvlvLnnkIPmqKHlvI9dIOS/ruaUuVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uZ2FtZUVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm9uUmVzdGFydEJ0blwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLl9jb21wb25lbnRzWzBdLl9sYlRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uX2xiVGltZS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLl9jb21wb25lbnRzWzFdICYmIG4uX2NvbXBvbmVudHNbMV0uaW5pdEJyYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9jb21wb25lbnRzWzFdLmluaXRCcmFpbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLm92ZXJmbG93ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTks7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikud2lkdGggPSA3MjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcImxibFRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkub3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKS53aWR0aCA9IDcyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSB0aGlzLmN1cnJlbnRMZXZlbFByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5fY29tcG9uZW50c1swXS5nZXRJc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uZ2V0SXNPcGVuID0gdGhpcy5nZXRJc09wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uZ2V0QWRSZXN1bHQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9jb21wb25lbnRzWzBdLm5vZGVfaGFtbWVyLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0ubm9kZV9oYW1tZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5fY29tcG9uZW50c1swXS5mdW5jX2hpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcImdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ6aGFuZGFuXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcImdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ6aGFuZGFuXCIpLnkgPSAxZTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9jb21wb25lbnRzWzBdLmluaXRDb3VudERvd24gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcmVmYWJBc3NldC5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIENvbmZpZ01hbmFnZXIuQ29uZmlnLmdldChDb25maWdDb25zdC5Db25maWdDb25zdC5Db2xsZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMZXZlbCA+IDEgJiYgclt0aGlzLmN1cnJlbnRMZXZlbCAtIDJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgobyA9IHJbdGhpcy5jdXJyZW50TGV2ZWwgLSAyXS5nb29kc0lEKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSByW3RoaXMuY3VycmVudExldmVsIC0gMl0uZ29vZHNOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2xsZWN0R29vZHNJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2xsZWN0R29vZHNOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtZUJ1bmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dHVyZS9jb2xsZWN0L1wiICsgbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5UZXh0dXJlMkRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogWzMsIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29sbGVjdEljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLlNwcml0ZUZyYW1lKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29sbGVjdEljb24yLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5TcHJpdGVGcmFtZShjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdEdvb2RzSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hZGRDaGlsZChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsQ29udGVudCA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUuc2NyZWVuc2hvdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnN0YXJ0UmVjb3JkQ2FwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbWVsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGV2ZWxfcGFnZV9cIiArIHRoaXMuY3VycmVudE1vZGUgKyBcIl9cIiArIHRoaXMuY3VycmVudExldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJsZXZlbFRpbWVcIiwgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwID09IHRoaXMuY3VycmVudE1vZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgPT0gVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29udGVudC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jb250ZW50LmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImNoZWF0c1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jaGVhdHMuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbElELmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJbXCIgKyBjICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIltibXM6IFwiICsgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnZlcnNpb24gKyBcIl1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWcuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIltmbGFnOiBcIiArIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbFByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UGxhdGZvcm1VSSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQyA9IEJtc01hbmFnZXIuQk1TLmdldEtleShcIlRpTGlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJibXNQb3dlclwiLCBDKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQyAmJiAhdGhpcy5pc0luZmluaXRlUG93ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuSVNfSU5GSU5JVEVfUE9XRVIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoTSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5QT1dFUikpIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuUE9XRVJfVFlQRSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiV3V4aWFuVGlMaVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDA4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KFBvcHVwQ29uc3QuUG9wdXBDb25zdC5JTkZJTklURV9QT1dFUik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDA5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbWVsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGV2ZWxfTm9Qb3dlcl9cIiArIHRoaXMuY3VycmVudE1vZGUgKyBcIl9cIiArIHRoaXMuY3VycmVudExldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coUG9wdXBDb25zdC5Qb3B1cENvbnN0LlBPV0VSX1NIT1JUQUdFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5QT1dFUiwgTSAtIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoRXZlbnRDb25zdC5kZWZhdWx0LlBPV0VSX1VQREFURSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW1lbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMZXZlbF9Qb3dlcl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vZGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVXNlckRhdGEuUE9XRVIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVCA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5oYXNVc2VLZXkpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwia2V5VmlkZW9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAhPSB0aGlzLmN1cnJlbnRNb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgIT0gQSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5jdXJyZW50X2tleV90eXBlLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZW1wRGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5jdXJyZW50X2tleV90eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdyhQb3B1cENvbnN0LlBvcHVwQ29uc3QuU0hPUCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoUGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV1gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93Lnd4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFUgPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJsdmlueXM1eDVsdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQiA9IEJtc01hbmFnZXIuQk1TLmdldEtleShcImx2aW55czV4NWNoYW5jZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyA9IHRoaXMuZ2V0SXNNaXN0YWtlQnlDaGFuY2UoQik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6+572u56ys5Yeg5YWzOlwiLCBVLCBcIuW9k+WJjeesrOWHoOWFszpcIiwgdGhpcy5jdXJyZW50TGV2ZWwsIE8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVSA8PSB0aGlzLmN1cnJlbnRMZXZlbCAmJiBPKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOID0gd2luZG93Lnd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqID0gTi53aW5kb3dIZWlnaHQgLyAyIC0gMjUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dCbG9ja0FkcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5ibG9ja0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlQ2I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlQmxvY2tBZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge30sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUJsb2NrQWRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRUaW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc1RpbWVFbmRGdW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rWL6K+VaXNUaW1lRW5kRnVuXCIpO1xuICAgICAgICB0aGlzLmlzVGltZUVuZCA9ICExO1xuICAgIH1cblxuICAgIHRpbWVyRnVuKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbFRpbWUgLT0gMTtcbiAgICAgICAgdGhpcy5kaWN0LnRpbWUyLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHRoaXMuc2Vjb25kRm9ybWF0KHRoaXMuY3VycmVudExldmVsVGltZSk7XG4gICAgICAgIGlmICgwID09IHRoaXMuY3VycmVudExldmVsVGltZSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpbWUyLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXJGdW4pO1xuICAgICAgICAgICAgdGhpcy5pc1RpbWVFbmQgPSAhMDtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5BdWRpby5wbGF5RWZmZWN0KEF1ZGlvQ29uc3QuQXVkaW9Db25zdC50aW1lRW5kKTtcbiAgICAgICAgICAgIHZhciB0ID0gVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCk7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBTaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9Mb3NlLCB7XG4gICAgICAgICAgICAgICAgbHY6IHQsXG4gICAgICAgICAgICAgICAgbW9kZTogdGhpcy5jdXJyZW50TW9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWNvbmRGb3JtYXQodCwgZSwgbikge1xuICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XG4gICAgICAgICAgICBlID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSBuKSB7XG4gICAgICAgICAgICBuID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0IC8gMzYwMDtcbiAgICAgICAgdmFyIG8gPSAodCAlPSAzNjAwKSAvIDYwO1xuICAgICAgICB2YXIgaSA9ICh0ICU9IDYwKTtcbiAgICAgICAgdmFyIGE7XG4gICAgICAgIGlmICgociA9IE1hdGguZmxvb3IocikpID49IDEwKSB7XG4gICAgICAgICAgICBhID0gciArIFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhID0gXCIwXCIgKyByO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzO1xuICAgICAgICBpZiAoKG8gPSBNYXRoLmZsb29yKG8pKSA+PSAxMCkge1xuICAgICAgICAgICAgcyA9IG8gKyBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IFwiMFwiICsgbztcbiAgICAgICAgfVxuICAgICAgICB2YXIgYztcbiAgICAgICAgaWYgKChpID0gTWF0aC5mbG9vcihpKSkgPj0gMTApIHtcbiAgICAgICAgICAgIGMgPSBpICsgXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMgPSBcIjBcIiArIGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGkgPSAoMTAwICogaSkgLyA2MDtcbiAgICAgICAgICAgIGlmICgoaSA9IE1hdGguZmxvb3IoaSkpID49IDEwKSB7XG4gICAgICAgICAgICAgICAgYyA9IGkgKyBcIlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjID0gXCIwXCIgKyBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBsID0gYSArIFwiOlwiICsgcyArIFwiOlwiICsgYztcbiAgICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbCA9IHMgKyBcIjpcIiArIGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgfVxuXG4gICAgZGV2ZWxvcEJ0bigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3QuZGV2ZWxvcElELmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5Y+RaWRcIiwgdCk7XG4gICAgICAgIGlmICh0aGlzLmlzSW50TnVtKHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+aVsOWtl1wiKTtcbiAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQsIE51bWJlcih0KSk7XG4gICAgICAgICAgICB0aGlzLmluaXRWaWV3KCExLCAhMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcmRlckJ0bigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3Qub3JkZXJJRC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xuICAgICAgICBjb25zb2xlLmxvZyhcIumhuuW6j2lkXCIsIHQpO1xuICAgICAgICBpZiAodGhpcy5pc0ludE51bSh0KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/mlbDlrZdcIik7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCBOdW1iZXIodCkpO1xuICAgICAgICAgICAgdGhpcy5pbml0VmlldygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2NyZWVuc2hvdEJ0bigpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IHRoaXMuZGljdC5zY3JlZW5zaG90LmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmcuc3BsaXQoXCItXCIpO1xuICAgICAgICB2YXIgbiA9IGVbMF07XG4gICAgICAgIHZhciByID0gZVsxXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdHJcIiwgbiwgcik7XG4gICAgICAgIGlmICh0aGlzLmlzSW50TnVtKG4pICYmIHRoaXMuaXNJbnROdW0ocikpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5jaGVhdHMuYWN0aXZlID0gITE7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCBOdW1iZXIobikpO1xuICAgICAgICAgICAgdGhpcy5pbml0VmlldyghMCk7XG4gICAgICAgICAgICBTY3JlZW5zaG90VXRpbHMuU2NyZWVuc2hvdC5pbml0KHRoaXMubm9kZSk7XG4gICAgICAgICAgICB2YXIgbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBTY3JlZW5zaG90VXRpbHMuU2NyZWVuc2hvdC5idG5faW1hZ2Vfa25pZmUoU3RyaW5nKHQuY3VycmVudExldmVsKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiKrlm77nrKxcIiArIHQuY3VycmVudExldmVsICsgXCLlhbNcIik7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LmN1cnJlbnRMZXZlbCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGUgPD0gTnVtYmVyKHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIGUpO1xuICAgICAgICAgICAgICAgICAgICB0LmluaXRWaWV3KCEwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIue7k+adn+aIquWbvlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdC51bnNjaGVkdWxlKG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKG8sIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGlwTWFuYWdlci5UaXAuc2hvdyhcIui+k+WFpeagvOW8j+W6lOivpeS4ujogMS0xMDBcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb3dubG9hZEJ0bigpIHtcbiAgICAgICAgWE1BRFV0aWxzLlhNQUQuZG93bmxvYWRCdG4oKTtcbiAgICB9XG5cbiAgICBjb2xsZWN0Um9vdCgpIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdyhQb3B1cENvbnN0LlBvcHVwQ29uc3QuQ29sbGVjdCk7XG4gICAgfVxuXG4gICAgbWFwQnRuKCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KFBvcHVwQ29uc3QuUG9wdXBDb25zdC5NYXApO1xuICAgIH1cblxuICAgIHJvbGVCdG4oKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coUG9wdXBDb25zdC5Qb3B1cENvbnN0LlJvbGUpO1xuICAgIH1cblxuICAgIGxpbWl0V2VsZmFyZUJ0bigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsaW1pdFdlbGZhcmVCdG5cIik7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgU2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICBpZDogXCIwMDlcIlxuICAgICAgICB9KTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdyhQb3B1cENvbnN0LlBvcHVwQ29uc3QuTGltaXRXZWxmYXJlKTtcbiAgICB9XG5cbiAgICBoaWRlTGltaXRXZWxmYXJlQnRuKCkge1xuICAgICAgICB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICExO1xuICAgIH1cblxuICAgIGlzSW50TnVtKHQpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHQpKTtcbiAgICB9XG5cbiAgICBnZXRJc01pc3Rha2VCeUNoYW5jZSh0KSB7XG4gICAgICAgIHZhciBlID0gMTAwICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgdmFyIG4gPSAhMTtcbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrmlbBcIiwgZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN6YWN572u5qaC546HOlwiICsgdCk7XG4gICAgICAgIHJldHVybiAwID09IHQgPyBuIDogKHQgPj0gZSAmJiAobiA9ICEwKSwgbik7XG4gICAgfVxuXG4gICAgaXNJbmZpbml0ZVBvd2VyKCkge1xuICAgICAgICB2YXIgdCA9ICExO1xuICAgICAgICBpZiAoQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiV3V4aWFuVGlMaVwiKSkge1xuICAgICAgICAgICAgdmFyIGUgPSBVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVXNlckRhdGEuSU5GX1BPV0VSX1NUQVJUX1RJTUUpO1xuICAgICAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChuIC0gZSkgLyAxZTMgPj0gODY0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ID0gITA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5piv5peg6ZmQ5L2T5YqbXCIsIHQpO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICBpbml0UGxhdGZvcm1VSSgpIHtcbiAgICAgICAgaWYgKFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5maXRVSVR5cGUgPT0gUGxhdGZvcm1Db25zdC5GaXRVSVR5cGUuVFQpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC50b3BSaWdodEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NTtcbiAgICAgICAgICAgIHRoaXMuZGljdC50b3BSaWdodEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgICAgIGlmICgodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0LnRvcExlZnRCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTUpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5ib3R0b21CYXIwLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDIwKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmJvdHRvbUJhcjAuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCksXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuY29sbGVjdFJvb3QueSA9IDMwMS45OTkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29sbGVjdFJvb3QueSA9IDQwMS45OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5maXRVSVR5cGUgPT0gUGxhdGZvcm1Db25zdC5GaXRVSVR5cGUuS1MpIHtcbiAgICAgICAgICAgIHZhciB0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLplb/pq5jmr5RcIiwgdCk7XG4gICAgICAgICAgICBpZiAodCA8IDAuNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC50b3BMZWZ0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDEyMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMTQwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC50b3BMZWZ0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA1NTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMTQwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC50b3BMZWZ0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaWN0LnRvcFJpZ2h0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDc1O1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRvcFJpZ2h0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmFkZFBvd2VyQnRuLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDkwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmFkZFBvd2VyQnRuLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzSG9tZUJ0bikge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmhvbWVCdG4uYWN0aXZlID0gITA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuaG9tZUJ0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrSG9tZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDE1XCIpO1xuICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKFNjZW5lQ29uc3QuU2NlbmVDb25zdC5NQUlOKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrQmFjaygpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBTaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9QYXVzZSwge1xuICAgICAgICAgICAgbHY6IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgbW9kZTogVXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdyhQb3B1cENvbnN0LlBvcHVwQ29uc3QuU0VUKTtcbiAgICB9XG5cbiAgICBjbGlja1Jlc3RhcnQodCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDE0XCIpO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCEwLCB0KTtcbiAgICB9XG5cbiAgICBjaGVja0Z1bGxBZF9ub1Jlc3VsdCgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiY2hlY2tGdWxsQWRfbm9SZXN1bHRcIiwgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgIH1cblxuICAgIGNoZWNrRnVsbEFkKCkge1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQuZW1pdChFdmVudENvbnN0LmRlZmF1bHQuY2hlY2tGdWxsQWRfcmVzdWx0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXX0=