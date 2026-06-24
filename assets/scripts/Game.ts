// @ts-nocheck

const BaseUI = require("./BaseUI");
const AudioConst = require("./AudioConst");
const EventConst = require("./EventConst");
const PlatformConst = require("./PlatformConst");
const PopupConst = require("./PopupConst");
const SceneConst = require("./SceneConst");
const UserConst = require("./UserConst");
const AudioManager = require("./AudioManager");
const BmsManager = require("./BmsManager");
const EventManager = require("./EventManager");
const PlatformManager = require("./PlatformManager");
const PopupManager = require("./PopupManager");
const ResManager = require("./ResManager");
const SceneManager = require("./SceneManager");
const UserManager = require("./UserManager");
const Utils = require("./Utils");
const ConfigUtils = require("./ConfigUtils");
const XMADUtils = require("./XMADUtils");
const LanguageManager = require("./LanguageManager");
const ScreenshotUtils = require("./ScreenshotUtils");
const TipManager = require("./TipManager");
const ConfigManager = require("./ConfigManager");
const ConfigConst = require("./ConfigConst");
const TankAssemblyConfig = require("../script/scripts/Level-29086_config");
const OPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
const OPPOMiniADUtils = require("./OPPOMiniADUtils");
const ShuShuConst = require("./ShuShuConst");
const TaskManager = require("./TaskManager");
const MemoryStorageManager = require("./MemoryStorageManager");
const MemoryStorageConst = require("./MemoryStorageConst");
const AdjustEventSystem = require("./AdjustEventSystem");
const LocalStorageManager = require("./LocalStorageManager");
const LocalStorageConst = require("./LocalStorageConst");
const ChallengeSystem = require("./ChallengeSystem");
const PoolUtils = require("./PoolUtils");
const AssetManager = require("./AssetManager");
const Tools = require("./Tools");

const { ccclass, property } = cc._decorator;

@ccclass
class Game extends BaseUI.default {
    @property(cc.Prefab)
    coloringSpinePrefab: cc.Prefab = null;

    _data: any = null;
    level: any = null;
    levelID: any = null;
    bms: any = null;
    flag: any = null;
    clickAmountNode: any = null;
    isUnlockTip: any = !1;
    currentLevel: any = 1;
    currentMode: any = 1;
    themeType: any = 0;
    currentTopLevel: any = 1;
    fullAdCounter: any = 0;
    clickAmount: any = 0;
    currentPrefabAsset: any[] = [];
    time: any = 0;
    isHandle: any = !1;
    modeLevelTime: any[] = [180, 180, 180, 180, 180, 180, 300, 180, 180, 180];
    restartTimes: any = 0;
    isCheckTipTextCD: any = !1;
    allHoleCoverAnim: any = !1;
    node_hammer: any = null;
    metalAmount: any = 0;
    developID: any = -1;
    recordState: any = 0;
    isLoadFail: any = !1;
    isTimeEnd: any = !1;
    currentLevelProgress: any = 1;
    currentLevelTotalTime: any = 180;
    currentLevelTime: any = 0;
    isLoadingScene: any = !1;
    isBack: any = !1;

    onLoad() {
        var e = this;
        super.onLoad();
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
        } else {
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
        this.clickAmountNode.on(
            cc.Node.EventType.TOUCH_START,
            function (t) {
                if (PlatformManager.Platform.is(PlatformConst.EPlatform.XIAOMI_ANDROID)) {
                    (e.clickAmount += 1),
                        console.log("点击次数", e.clickAmount),
                        0 != (n = BmsManager.BMS.getKey("fullClickNum")) &&
                            n == e.clickAmount &&
                            (XMADUtils.XMAD.showInterstitialFeed_must(), (e.clickAmount = 0));
                } else if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO_ANDROID)) {
                    (e.clickAmount += 1),
                        console.log("点击次数", e.clickAmount),
                        0 != (n = BmsManager.BMS.getKey("fullClickNum")) &&
                            n == e.clickAmount &&
                            (OPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_must(), (e.clickAmount = 0));
                } else if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO)) {
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
            },
            this
        );
        if (this.clickAmountNode._touchListener) {
            this.clickAmountNode._touchListener.setSwallowTouches(!1);
        }
        UserManager.User.setTempData("isNeedInsert", !0);
        this.dict.version.getComponent(cc.Label).string = "v" + PlatformManager.Platform.getConfig().version;
        this.dict.limitWelfareBtn.active = !1;
        if (
            window.tt &&
            ["Douyin", "douyin_lite", "live_stream", "aweme_hotsoon"].some(function (t) {
                return t == window.tt.getSystemInfoSync().appName;
            })
        ) {
            var r = UserManager.User.get(UserConst.UserData.EnterSidebar) || 0;
            console.log("判断按钮", r, 2 != r);
            if (2 != r) {
                console.log("显示按钮");
                this.dict.limitWelfareBtn.active = !0;
            } else {
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
            } else {
                this.dict.universalCard.active = !1;
            }
        }
    }

    updateSkin() {
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
    }

    hideUIBtn() {
        if (this.dict.backBtn.opacity) {
            this.dict.backBtn.opacity = 0;
            this.dict.bottomBar0.opacity = 0;
            this.dict.hideUIBtn.opacity = 0;
            this.dict.shopBtn.opacity = 0;
        } else {
            this.dict.backBtn.opacity = 255;
            this.dict.bottomBar0.opacity = 255;
            this.dict.hideUIBtn.opacity = 255;
            this.dict.shopBtn.opacity = 255;
        }
    }

    onDestroy() {
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
    }

    listenHandle() {
        EventManager.Event.emit(EventConst.default.TIP_BTN_ANIM, !1, "test");
        this.unschedule(this.handleEvent);
        this.scheduleOnce(this.handleEvent, 8);
    }

    handleEvent() {
        console.log("测试无操作");
        if (UserManager.User.get(UserConst.TempData.isUnlockTip)) {
            //
        } else {
            EventManager.Event.emit(EventConst.default.TIP_BTN_ANIM, !0, "test");
        }
    }

    restartBtn_1() {
        this.checkFullAd_noResult();
        this.currentLevelProgress = 1;
        this.initView(!0);
    }

    clickRestart2(t) {
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
        } else {
            if (this.restartTimes >= r) {
                PlatformManager.Platform.showInsert();
            }
        }
        if (this.restartTimes >= 3) {
            EventManager.Event.emit(EventConst.default.TIP_BTN_ANIM, !0);
            this.restartTimes = 0;
        }
        this.clickRestart(t);
    }

    onRestartReset() {
        this.checkFullAd_noResult();
        this.currentLevelProgress = 1;
        this.clickRestart2();
    }

    onEnable() {
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO_ANDROID)) {
            OPPOAndroidAdUtils.OPPOAndroidAd.showBannerFeed();
        } else {
            PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO);
        }
        this.initEvent();
        EventManager.Event.on(EventConst.default.hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    }

    onDisable() {
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO_ANDROID)) {
            PlatformManager.Platform.hideNativeAds();
        } else {
            PlatformManager.Platform.is(PlatformConst.EPlatform.OPPO);
        }
        this.clearEvent();
        EventManager.Event.off(EventConst.default.hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    }

    initEvent() {
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
    }

    clearEvent() {
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
    }

    f29086_addCoin() {
    }

    allPersonAmount(t, e) {
        if (this.currentLevel > 1) {
            var n = MemoryStorageManager.default.get(MemoryStorageConst.default.CollectGoodsID);
            var r = LocalStorageManager.default.get(LocalStorageConst.default.Collect) || {
                0: []
            };
            if (!n || r[0].includes(n)) {
                this.dict.collectRoot.active = !1;
            } else {
                if (0 == this.currentMode) {
                    this.dict.collectRoot.active = !0;
                    this.dict.collectRate.getComponent(cc.Label).string = Math.round(((e - t) / e) * 100) + "%";
                    this.dict.collectIcon2.getComponent(cc.Sprite).fillRange = (e - t) / e;
                }
            }
        } else {
            this.dict.collectRoot.active = !1;
        }
        this.dict.levelProText.getComponent(cc.Label).string = "" + t;
        this.dict.levelPro.getComponent(cc.Sprite).fillRange = t / e;
        if (0 == t) {
            this.dict.levelProRoot.active = !1;
        }
    }

    checkTipText(t) {
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
                .to(
                    0.4,
                    {
                        scale: 1
                    },
                    {
                        easing: "backOut"
                    }
                )
                .delay(1.5)
                .to(0.3, {
                    opacity: 0
                })
                .start();
            this.scheduleOnce(function () {
                e.isCheckTipTextCD = !1;
            }, 60);
        } else {
            this.dict.tipText2.scale = 0;
            this.dict.tipText2.active = !0;
            this.dict.tipText2.opacity = 255;
            cc.tween(this.dict.tipText2)
                .to(
                    0.4,
                    {
                        scale: 1
                    },
                    {
                        easing: "backOut"
                    }
                )
                .delay(1.5)
                .to(0.3, {
                    opacity: 0
                })
                .start();
        }
    }

    removeScrewBtn() {
        this.dict.removeScrewBtn.stopAllActions();
        this.dict.removeScrewBtn.scale = 1;
        this.allHoleCoverAnim = !1;
    }

    chehuiBtn_anim() {
        this.allHoleCoverAnim = !1;
    }

    hideGetCard() {
        this.dict.noFirstAllHole.active = !1;
        EventManager.Event.emit(EventConst.default.restoreTime);
    }

    allHoleCover() {
        var t = this;
        if (this.allHoleCoverAnim) {
            //
        } else {
            this.allHoleCoverAnim = !0;
            console.log("allHoleCover-------");
            if (
                !LocalStorageManager.default.get(LocalStorageConst.default.NoFirstAllHole) &&
                PlatformManager.Platform.getConfig().hasPurchase
            ) {
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
    }

    move5() {
        this.level.children[0]._components[0].addAutoMoveNumber();
    }

    upset() {
        if (this.level.children[0]._components[0].shuffle) {
            this.level.children[0]._components[0].shuffle();
        }
    }

    boreBtn() {
        this.dict.boreBtn.active = !1;
        if (this.level.children[0]._components[0].checkAdLock) {
            this.level.children[0]._components[0].checkAdLock();
        }
    }

    hammerBtn() {
        var t = this.level.children[0]._components[0];
        t.isCanUseHammer = !0;
        t.node_hammer.getChildByName("img").position = cc.v3();
        t.node_hammer.active = !0;
        var e = t.node_hammer.getChildByName("img");
        cc.tween(e)
            .repeatForever(
                cc
                    .tween()
                    .to(0.2, {
                        scale: 1.2
                    })
                    .to(0.1, {
                        scale: 1
                    })
            )
            .start();
    }

    getIsOpen() {
        return 1;
    }

    _initOutLine() {
    }

    shakeBtn() {
        if (this.level.children[0]._components[0].shakeAnimation) {
            this.level.children[0]._components[0].shakeAnimation(0);
        }
    }

    undoBtn() {
        if (this.level.children[0]._components[0].func_withdraw) {
            this.level.children[0]._components[0].func_withdraw();
        }
    }

    wingBtn() {
        if (this.level.children[0]._components[0].func_fly) {
            this.level.children[0]._components[0].func_fly();
        }
    }

    highlightBtn() {
        if (this.level.children[0]._components[0].func_highlight) {
            this.level.children[0]._components[0].func_highlight();
        }
    }

    addStepBtn() {
        if (this.level.children[0]._components[0].func_addStep) {
            this.level.children[0]._components[0].func_addStep();
        }
    }

    moderateBtn() {
        if (this.level.children[0]._components[0].setLeftScrollSpeed) {
            this.level.children[0]._components[0].setLeftScrollSpeed(30);
        }
    }

    rotateBtn() {
        if (this.level.children[0]._components[1].turn) {
            this.level.children[0]._components[1].turn();
        }
    }

    screwBoxBtn() {
        this.dict.bottomBar0.active = !1;
        this.dict.topLeftBar.active = !1;
        this.dict.number.active = !1;
        this.stopTimer();
        if (this.level.children[0]._components[0].func_delNail) {
            this.level.children[0]._components[0].func_delNail();
        }
    }

    func_checkDelNailCb() {
        this.dict.bottomBar0.active = !0;
        this.dict.topLeftBar.active = !0;
        this.dict.number.active = !0;
        this.restoreTime();
    }

    extendTime() {
        this.currentLevelTime = 60;
        this.dict.time2.active = !0;
        this.dict.time2.getComponent(cc.Label).string = "" + this.secondFormat(this.currentLevelTime);
        this.schedule(this.timerFun, 1);
    }

    stopTimer(t) {
        if (void 0 === t) {
            t = !1;
        }
        if (this.dict.time2.active) {
            console.log("暂停时间");
            this.unschedule(this.timerFun);
        }
    }

    restoreTime() {
        if (this.dict.time2.active) {
            this.unschedule(this.timerFun);
            this.schedule(this.timerFun, 1);
        }
    }

    adsVideoFail() {
        cc.game.emit("gamelog", "level_interfail_" + this.currentMode + "_" + this.currentLevel);
    }

    adSkipped() {
    }

    insetVideoSuccess() {
        cc.game.emit("gamelog", "level_interplay_" + this.currentMode + "_" + this.currentLevel);
    }

    insetVideoAsk() {
        cc.game.emit("gamelog", "level_inter_" + this.currentMode + "_" + this.currentLevel);
    }

    destroyInsert() {
        PlatformManager.Platform.destroyInsert();
    }

    clickNext() {
        var t = this;
        UserManager.User.getTempData(UserConst.TempData.NEXT_MODE_ID);
        if (1 != this.themeType) {
            ConfigUtils.ConfigUtils.getDataByID(this.currentMode, function (e) {
                t.currentTopLevel = e.amount;
                if (t.currentLevel + 1 > t.currentTopLevel) {
                    console.log("最后一关");
                    t.initLevelOrder();
                } else {
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
                    EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                }
                if (
                    PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE) ||
                    PlatformManager.Platform.is(PlatformConst.EPlatform.IOS_HAIWAI)
                ) {
                    if (UserManager.User.getTempData("isNeedInsert")) {
                        t.checkFullAd();
                    } else {
                        console.log("不需要差评");
                    }
                    UserManager.User.setTempData("isNeedInsert", !0);
                }
            });
        } else {
            ConfigUtils.ConfigUtils.getDataByID_99(this.currentMode, function (e) {
                t.currentTopLevel = e.amount;
                if (t.currentLevel + 1 > t.currentTopLevel) {
                    console.log("最后一关");
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_MODE, t.currentMode);
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, 1);
                    EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                } else {
                    UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
                    EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                }
                if (
                    PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE) ||
                    PlatformManager.Platform.is(PlatformConst.EPlatform.IOS_HAIWAI)
                ) {
                    if (UserManager.User.getTempData("isNeedInsert") || PlatformManager.Platform.getNoADState()) {
                        t.checkFullAd();
                    } else {
                        console.log("不需要差评");
                    }
                    UserManager.User.setTempData("isNeedInsert", !0);
                }
            });
        }
    }

    initLevelOrder() {
        var t = this;
        if (PlatformManager.Platform.is(PlatformConst.EPlatform.WEB)) {
            this.updateCurrentModeLevel();
        } else {
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
                ConfigManager.Config.get(
                    ConfigConst.ConfigConst.THEME + 0 + PlatformManager.Platform.getConfig().configSuffix
                ).then(function (r) {
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
            } else {
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
                } else {
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
                    } else {
                        this.handleModeByID(this.currentMode);
                    }
                }
            }
        }
    }

    handleModeByID(t) {
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
    }

    updateCurrentModeLevel() {
        var t = UserManager.User.get(UserConst.UserData.LEVEL_LIST) || {};
        var e = UserManager.User.get("levelListLoopTimes") || {};
        if (e[this.currentMode]) {
            e[this.currentMode] += 1;
        } else {
            e[this.currentMode] = 1;
        }
        UserManager.User.set("levelListLoopTimes", e);
        t[this.currentMode] = 1;
        UserManager.User.setTempData(UserConst.TempData.CURRENT_MODE, this.currentMode);
        UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, 1);
        UserManager.User.set(UserConst.UserData.LEVEL_LIST, t);
        EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
        this.initView();
    }

    enterNewMode() {
        EventManager.Event.emit(EventConst.default.UPDATE_IS_UNLOCK_TIP);
        this.initView();
    }

    startSuc() {
        // 暂时屏蔽关卡启动后的自动截图缓存，避免运行时截图开销和无效日志。
        // 需要恢复胜利页关卡截图时，重新打开 this.screenshot() 即可。
        // this.screenshot();
    }

    screenshot() {
        var t = this;
        this.scheduleOnce(function () {
            if (cc.isValid(t.dict.level)) {
                t.restartNodeShot();
            }
        }, 0.1);
    }

    restartNodeShot() {
        console.log("截图");
        Utils.Utils.nodeShot(this.dict.level).then(function (t) {
            window.screenShotPicture = t;
        });
    }

    woodRemove(t) {
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
    }

    suc() {
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
    }

    playNDBS() {
        var t = this;
        this.dict.spine.active = !0;
        if ("tc" == LanguageManager.default.instance.lan) {
            this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
        } else {
            if ("en" == LanguageManager.default.instance.lan) {
                this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation4", !1);
            } else {
                if ("ja" == LanguageManager.default.instance.lan) {
                    this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
                } else {
                    this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
                }
            }
        }
        this.scheduleOnce(function () {
            t.dict.spine.active = !1;
        }, 1.5);
    }

    sucFunc() {
        var t = this.currentLevel + 1;
        var e = UserManager.User.get(UserConst.UserData.LEVEL_LIST) || {};
        if (e[0]) {
            //
        } else {
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
        } else {
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
            } else {
                c[s] = [];
            }
            if (-1 == c[s].indexOf(this.currentLevel)) {
                c[s].push(this.currentLevel);
            }
            UserManager.User.set(UserConst.UserData.ALREADY_PLAY, c);
            var l = UserManager.User.get(UserConst.UserData.ALREADY_UNLOCK) || {};
            if (l[s]) {
                //
            } else {
                l[s] = [];
            }
            if (-1 == l[s].indexOf(t)) {
                l[s].push(t);
            }
            UserManager.User.set(UserConst.UserData.ALREADY_UNLOCK, l);
        }
        if (
            PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE) ||
            PlatformManager.Platform.is(PlatformConst.EPlatform.IOS_HAIWAI)
        ) {
            //
        } else {
            this.checkFullAd();
        }
        PopupManager.default.hideAll();
        MemoryStorageManager.default.set(MemoryStorageConst.default.IsFail, 0);
        if (1 == this.themeType) {
            PopupManager.default.show(PopupConst.PopupConst.WinOld);
        } else {
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
        } else {
            this.scheduleOnce(function () {
                PopupManager.default.show(PopupConst.PopupConst.COMMENT);
            }, 0.4);
        }
        UserManager.User.setTempData(UserConst.TempData.IS_WIN, !1);
    }

    initSkinAndRole() {
        var t = LocalStorageManager.default.get(LocalStorageConst.default.SkinList) || {};
        if (t[0]) {
            //
        } else {
            t[0] = [0];
        }
        if (t[1]) {
            //
        } else {
            t[1] = [0];
        }
        var e = LocalStorageManager.default.get(LocalStorageConst.default.UseSkin) || {};
        if (e[0]) {
            //
        } else {
            e[0] = 0;
        }
        if (e[1]) {
            //
        } else {
            e[1] = 0;
        }
        var n = LocalStorageManager.default.get(LocalStorageConst.default.HeroLevel) || 1;
        window.f29086_LevelData = {
            useSkin: e,
            heroLevel: n
        };
        window.f29086_dragonBall = 0;
        window.f29086_coin = 0;
    }

    initView(t, e) {
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
                        } else {
                            return (
                                this.level.destroyAllChildren(),
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
                                          ConfigManager.Config.get(
                                              ConfigConst.ConfigConst.THEME +
                                                  this.currentMode +
                                                  PlatformManager.Platform.getConfig().configSuffix
                                          )
                                      ]
                            );
                        }
                    case 1:
                        l = z.sent();
                        if (i[this.currentMode]) {
                            if (
                                !(h = LocalStorageManager.default.get(LocalStorageConst.default.LoopLevelIDArr) || [])
                                    .length
                            ) {
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
                            } else {
                                c = h[h.length - 1];
                            }
                        } else {
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
                        } else {
                            cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_Page, {
                                lv: c,
                                mode: this.currentMode,
                                queue: this.currentLevel,
                                sort: LocalStorageManager.default.get(LocalStorageConst.default.ConfigSuffix)
                            });
                        }
                        if (PlatformManager.Platform.getConfig().hasPurchase) {
                            //
                        } else {
                            this.dict.shopBtn.active = !1;
                        }
                        k = "zqddn_zhb/prefab/level/zqddn_zhb_level" + c;
                        UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL_ID, c);
                        // 进入坦克组装演示关前先隐藏 Game 场景底栏，避免加载关卡 prefab 时短暂露出。
                        this.setTankAssemblyBottomBar0Hidden(c, this.isTankAssemblyBottomButtonsHiddenLevel(c));
                        ResManager.Res.load(k).then(function (t) {
                            return __awaiter(V, void 0, void 0, function () {
                                var e;
                                var n;
                                var r;
                                var o;
                                var a;
                                var collectTexture;
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
                                                n._components[1].initBrain = function () {};
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
                                                n._components[0].getAdResult = function () {};
                                                this.scheduleOnce(function () {
                                                    n._components[0].node_hammer.active = !1;
                                                    n._components[0].node_hammer.children[1].active = !1;
                                                });
                                            }
                                            if (n._components[0].func_highlight) {
                                                n.getChildByName("game").getChildByName("zhandan").opacity = 0;
                                                n.getChildByName("game").getChildByName("zhandan").y = 1e7;
                                                n._components[0].initCountDown = function () {};
                                            }
                                            n.x = 0;
                                            this.currentPrefabAsset.push(t);
                                            return [4, ConfigManager.Config.get(ConfigConst.ConfigConst.Collect)];
                                        case 1:
                                            r = s.sent();
                                            return this.currentLevel > 1 && r[this.currentLevel - 2]
                                                ? ((o = r[this.currentLevel - 2].goodsID),
                                                  (a = r[this.currentLevel - 2].goodsName),
                                                  MemoryStorageManager.default.set(
                                                      MemoryStorageConst.default.CollectGoodsID,
                                                      o
                                                  ),
                                                  MemoryStorageManager.default.set(
                                                      MemoryStorageConst.default.CollectGoodsName,
                                                      a
                                                  ),
                                                  [
                                                      4,
                                                      AssetManager.default.getRes(
                                                          "gameBundle",
                                                          "texture/collect/" + o,
                                                          cc.Texture2D
                                                      )
                                                  ])
                                                : [3, 3];
                                        case 2:
                                            collectTexture = s.sent();
                                            this.dict.collectIcon.getComponent(cc.Sprite).spriteFrame =
                                                new cc.SpriteFrame(collectTexture);
                                            this.dict.collectIcon2.getComponent(cc.Sprite).spriteFrame =
                                                new cc.SpriteFrame(collectTexture);
                                            return [3, 4];
                                        case 3:
                                            MemoryStorageManager.default.set(
                                                MemoryStorageConst.default.CollectGoodsID,
                                                null
                                            );
                                            s.label = 4;
                                        case 4:
                                            this.level.addChild(n);
                                            window.levelContent = n;
                                            this.scheduleOnce(function () {
                                                u.screenshot();
                                                PlatformManager.Platform.startRecordCap();
                                            }, 0);
                                            cc.game.emit(
                                                "gamelog",
                                                "Level_page_" + this.currentMode + "_" + this.currentLevel
                                            );
                                            UserManager.User.setTempData("levelTime", new Date().getTime());
                                            var shouldHideTankAssemblyBottomButtons =
                                                this.isTankAssemblyBottomButtonsHiddenLevel(c);
                                            if (
                                                shouldHideTankAssemblyBottomButtons ||
                                                (0 == this.currentMode &&
                                                    1 == UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL))
                                            ) {
                                                this.dict.content.active = !1;
                                            } else {
                                                this.dict.content.active = !0;
                                            }
                                            // 坦克组装演示关卡只保留关卡 prefab 内的坦克操作区，隐藏 Game 场景公共底栏。
                                            this.setTankAssemblyBottomBar0Hidden(
                                                c,
                                                shouldHideTankAssemblyBottomButtons
                                            );
                                            if (shouldHideTankAssemblyBottomButtons) {
                                                this.scheduleOnce(function () {
                                                    V.setTankAssemblyBottomBar0Hidden(c, true);
                                                }, 0);
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
                                    } else {
                                        cc.game.emit("gamelog", "page009"),
                                            cc.game.emit(
                                                "gamelog",
                                                "Level_NoPower_" + this.currentMode + "_" + this.currentLevel
                                            ),
                                            PopupManager.default.show(PopupConst.PopupConst.POWER_SHORTAGE);
                                    }
                                } else {
                                    UserManager.User.set(UserConst.UserData.POWER, M - 5);
                                    EventManager.Event.emit(EventConst.default.POWER_UPDATE);
                                    cc.game.emit(
                                        "gamelog",
                                        "Level_Power_" +
                                            this.currentMode +
                                            "_" +
                                            this.currentLevel +
                                            "_" +
                                            UserManager.User.get(UserConst.UserData.POWER)
                                    );
                                    T = UserManager.User.get(UserConst.UserData.hasUseKey) || 0;
                                    A = BmsManager.BMS.getKey("keyVideo");
                                    T ||
                                        0 != this.currentMode ||
                                        this.currentLevel != A ||
                                        (UserManager.User.setTempData(UserConst.TempData.current_key_type, 1),
                                        console.log(
                                            "TempData",
                                            UserManager.User.getTempData(UserConst.TempData.current_key_type)
                                        ),
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
                                    PlatformManager.Platform.showBlockAds(
                                        {
                                            top: j,
                                            left: 0,
                                            id: PlatformManager.Platform.getConfig().blockID,
                                            hideCb: function () {
                                                PlatformManager.Platform.hideBlockAds();
                                                setTimeout(function () {}, 300);
                                            }
                                        },
                                        function (t) {
                                            if (0 == t) {
                                                //
                                            } else {
                                                PlatformManager.Platform.hideBlockAds();
                                                setTimeout(function () {}, 300);
                                            }
                                        }
                                    );
                                }
                            }
                            this.restartTimes = 0;
                        }
                        return [2];
                }
            });
        });
    }

    isTimeEndFun() {
        console.log("测试isTimeEndFun");
        this.isTimeEnd = !1;
    }

    timerFun() {
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
    }

    secondFormat(t, e, n) {
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
        } else {
            a = "0" + r;
        }
        var s;
        if ((o = Math.floor(o)) >= 10) {
            s = o + "";
        } else {
            s = "0" + o;
        }
        var c;
        if ((i = Math.floor(i)) >= 10) {
            c = i + "";
        } else {
            c = "0" + i;
        }
        if (n) {
            i = (100 * i) / 60;
            if ((i = Math.floor(i)) >= 10) {
                c = i + "";
            } else {
                c = "0" + i;
            }
        }
        var l = a + ":" + s + ":" + c;
        switch (e) {
            case 2:
                l = s + ":" + c;
        }
        return l;
    }

    developBtn() {
        var t = this.dict.developID.getComponent(cc.EditBox).string;
        console.log("开发id", t);
        if (this.isIntNum(t)) {
            console.log("是数字");
            UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL_ID, Number(t));
            this.initView(!1, !0);
        }
    }

    orderBtn() {
        var t = this.dict.orderID.getComponent(cc.EditBox).string;
        console.log("顺序id", t);
        if (this.isIntNum(t)) {
            console.log("是数字");
            UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, Number(t));
            this.initView();
        }
    }

    screenshotBtn() {
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
                } else {
                    console.log("结束截图");
                    t.unschedule(o);
                }
            };
            this.schedule(o, 2);
        } else {
            TipManager.Tip.show("输入格式应该为: 1-100");
        }
    }

    downloadBtn() {
        XMADUtils.XMAD.downloadBtn();
    }

    collectRoot() {
        PopupManager.default.show(PopupConst.PopupConst.Collect);
    }

    mapBtn() {
        PopupManager.default.show(PopupConst.PopupConst.Map);
    }

    roleBtn() {
        PopupManager.default.show(PopupConst.PopupConst.Role);
    }

    limitWelfareBtn() {
        console.log("limitWelfareBtn");
        cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.btn, {
            id: "009"
        });
        PopupManager.default.show(PopupConst.PopupConst.LimitWelfare);
    }

    hideLimitWelfareBtn() {
        this.dict.limitWelfareBtn.active = !1;
    }

    isIntNum(t) {
        return !isNaN(parseFloat(t));
    }

    getIsMistakeByChance(t) {
        var e = 100 * Math.random();
        var n = !1;
        console.log("随机数", e);
        console.log("当前配置概率:" + t);
        return 0 == t ? n : (t >= e && (n = !0), n);
    }

    isInfinitePower() {
        var t = !1;
        if (BmsManager.BMS.getKey("WuxianTiLi")) {
            var e = UserManager.User.get(UserConst.UserData.INF_POWER_START_TIME);
            var n = new Date().getTime();
            if (e) {
                if ((n - e) / 1e3 >= 86400) {
                    //
                } else {
                    t = !0;
                }
            }
        }
        console.log("是否是无限体力", t);
        return t;
    }

    initPlatformUI() {
        if (PlatformManager.Platform.getConfig().fitUIType == PlatformConst.FitUIType.TT) {
            this.dict.topRightBar.getComponent(cc.Widget).top = 75;
            this.dict.topRightBar.getComponent(cc.Widget).updateAlignment();
            if ((t = cc.view.getFrameSize().width / cc.view.getFrameSize().height) < 0.5) {
                (this.dict.topLeftBar.getComponent(cc.Widget).top = 55),
                    this.dict.topLeftBar.getComponent(cc.Widget).updateAlignment(),
                    (this.dict.bottomBar0.getComponent(cc.Widget).bottom = 20),
                    this.dict.bottomBar0.getComponent(cc.Widget).updateAlignment(),
                    (this.dict.collectRoot.y = 301.999);
            } else {
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
            } else {
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
        } else {
            this.dict.homeBtn.active = !1;
        }
    }

    isTankAssemblyBottomButtonsHiddenLevel(t) {
        var e = TankAssemblyConfig.TankAssemblyBottomButtonsHiddenLevelIds || {};
        var n = Number(t);
        // 配置缺失或关卡 ID 类型变化时仍保证坦克组装演示关隐藏 Game 公共底栏。
        return !!(e[t] || e[String(t)] || e[n] || -29095 == n || -29290 == n);
    }

    findChildByNameDeep(t, e) {
        if (!t) {
            return null;
        }
        if (t.name == e) {
            return t;
        }
        for (var n = 0; n < t.childrenCount; n++) {
            var r = this.findChildByNameDeep(t.children[n], e);
            if (r) {
                return r;
            }
        }
        return null;
    }

    getBottomBar0Node() {
        return (
            this.dict.bottomBar0 ||
            (this.node && this.node.getChildByName("bottomBar0")) ||
            cc.find("Canvas/sceneRoot/Game/bottomBar0") ||
            cc.find("New Node/Canvas/sceneRoot/Game/bottomBar0") ||
            this.findChildByNameDeep(cc.director.getScene(), "bottomBar0")
        );
    }

    setTankAssemblyBottomBar0Hidden(t, e) {
        var n = this.getBottomBar0Node();
        if (!e) {
            if (n) {
                n.active = true;
                n.opacity = 255;
            }
            return;
        }
        var r = [];
        var o = ["content", "clearBtn", "sortBtn", "refreshBtn", "updateBtn", "removeBtn", "screwBoxBtn"];
        if (n) {
            r.push(n);
            for (var a = 0; a < o.length; a++) {
                if (n.getChildByName(o[a])) {
                    r.push(n.getChildByName(o[a]));
                }
            }
        }
        if (this.dict.content) {
            r.push(this.dict.content);
        }
        for (var c = 0; c < o.length; c++) {
            if (this.dict[o[c]]) {
                r.push(this.dict[o[c]]);
            }
        }
        // bottomBar0 是 Game 场景公共底栏，-29095/-29290 演示关卡不使用这套按钮。
        for (var u = 0; u < r.length; u++) {
            if (r[u]) {
                r[u].active = false;
                r[u].opacity = 0;
            }
        }
    }

    clickHome() {
        if (this.isLoadingScene) {
            //
        } else {
            this.isLoadingScene = !0;
            cc.game.emit("gamelog", "btn015");
            SceneManager.default.loadScene(SceneConst.SceneConst.MAIN);
        }
    }

    clickBack() {
        cc.game.emit("gamelog_Thinking", ShuShuConst.ShuShuConst.Level_Pause, {
            lv: UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL_ID),
            mode: UserManager.User.getTempData(UserConst.TempData.CURRENT_MODE)
        });
        this.stopTimer();
        PopupManager.default.show(PopupConst.PopupConst.SET);
    }

    clickRestart(t) {
        cc.game.emit("gamelog", "btn014");
        this.initView(!0, t);
    }

    checkFullAd_noResult() {
        cc.game.emit("checkFullAd_noResult", this.currentLevel);
    }

    checkFullAd() {
        EventManager.Event.emit(EventConst.default.checkFullAd_result);
    }
}

export default Game;
