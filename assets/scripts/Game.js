var r;
var $baseUI = require("./BaseUI");
var $audioConst = require("./AudioConst");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $popupConst = require("./PopupConst");
var $sceneConst = require("./SceneConst");
var $userConst = require("./UserConst");
var $audioManager = require("./AudioManager");
var $bmsManager = require("./BmsManager");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $resManager = require("./ResManager");
var $sceneManager = require("./SceneManager");
var $userManager = require("./UserManager");
var $utils = require("./Utils");
var $configUtils = require("./ConfigUtils");
var $xMADUtils = require("./XMADUtils");
var $languageManager = require("./LanguageManager");
var $screenshotUtils = require("./ScreenshotUtils");
var $tipManager = require("./TipManager");
var $configManager = require("./ConfigManager");
var $configConst = require("./ConfigConst");
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $shuShuConst = require("./ShuShuConst");
var $taskManager = require("./TaskManager");
var $memoryStorageManager = require("./MemoryStorageManager");
var $memoryStorageConst = require("./MemoryStorageConst");
var $adjustEventSystem = require("./AdjustEventSystem");
var $localStorageManager = require("./LocalStorageManager");
var $localStorageConst = require("./LocalStorageConst");
var $challengeSystem = require("./ChallengeSystem");
var $poolUtils = require("./PoolUtils");
var $assetManager = require("./AssetManager");
var $tools = require("./Tools");
var z = cc._decorator;
var G = z.ccclass;
var K = z.property;
var W = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.coloringSpinePrefab = null;
        e._data = null;
        e.level = null;
        e.levelID = null;
        e.bms = null;
        e.flag = null;
        e.clickAmountNode = null;
        e.isUnlockTip = !1;
        e.currentLevel = 1;
        e.currentMode = 1;
        e.themeType = 0;
        e.currentTopLevel = 1;
        e.fullAdCounter = 0;
        e.clickAmount = 0;
        e.currentPrefabAsset = [];
        e.time = 0;
        e.isHandle = !1;
        e.modeLevelTime = [180, 180, 180, 180, 180, 180, 300, 180, 180, 180];
        e.restartTimes = 0;
        e.isCheckTipTextCD = !1;
        e.allHoleCoverAnim = !1;
        e.node_hammer = null;
        e.metalAmount = 0;
        e.developID = -1;
        e.recordState = 0;
        e.isLoadFail = !1;
        e.isTimeEnd = !1;
        e.currentLevelProgress = 1;
        e.currentLevelTotalTime = 180;
        e.currentLevelTime = 0;
        e.isLoadingScene = !1;
        e.isBack = !1;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var e = this;
        t.prototype.onLoad.call(this);
        this.modeLevelTime = new Array(100).fill(180);
        this.modeLevelTime[6] = 300;
        this.modeLevelTime[21] = 300;
        this.modeLevelTime[23] = 300;
        this.modeLevelTime[77] = 90;
        this.modeLevelTime[81] = 120;
        this.modeLevelTime[82] = 120;
        this.modeLevelTime[90] = 300;
        var n = $bmsManager.BMS.getKey("screwTime");
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
                if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                    (e.clickAmount += 1),
                        console.log("点击次数", e.clickAmount),
                        0 != (n = $bmsManager.BMS.getKey("fullClickNum")) &&
                            n == e.clickAmount &&
                            ($xMADUtils.XMAD.showInterstitialFeed_must(), (e.clickAmount = 0));
                } else if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                    (e.clickAmount += 1),
                        console.log("点击次数", e.clickAmount),
                        0 != (n = $bmsManager.BMS.getKey("fullClickNum")) &&
                            n == e.clickAmount &&
                            ($oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_must(), (e.clickAmount = 0));
                } else if ($platformManager.Platform.is($platformConst.EPlatform.OPPO)) {
                    var n;
                    e.clickAmount += 1;
                    console.log("点击次数", e.clickAmount);
                    if (0 != (n = $bmsManager.BMS.getKey("fullClickNum")) && n == e.clickAmount) {
                        $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_must();
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
        $userManager.User.setTempData("isNeedInsert", !0);
        this.dict.version.getComponent(cc.Label).string = "v" + $platformManager.Platform.getConfig().version;
        this.dict.limitWelfareBtn.active = !1;
        if (
            window.tt &&
            ["Douyin", "douyin_lite", "live_stream", "aweme_hotsoon"].some(function (t) {
                return t == window.tt.getSystemInfoSync().appName;
            })
        ) {
            var r = $userManager.User.get($userConst.UserData.EnterSidebar) || 0;
            console.log("判断按钮", r, 2 != r);
            if (2 != r) {
                console.log("显示按钮");
                this.dict.limitWelfareBtn.active = !0;
            } else {
                console.log("不显示按钮");
                this.dict.limitWelfareBtn.active = !1;
            }
        }
        if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
            this.dict.limitWelfareBtn.active = !0;
        }
        this.initView();
        this.schedule(function () {
            e.fullAdCounter++;
        }, 1);
        this.listenHandle();
        $audioManager.Audio.playMusic($audioConst.AudioConst.BGM_MAIN);
        if ($platformManager.Platform.is($platformConst.EPlatform.WX)) {
            console.log("调用广告");
        }
        if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
            this.dict.hideUIBtn.active = !0;
        }
        $taskManager.default.init();
        if (0 == this.currentMode) {
            if ($platformManager.Platform.getConfig().hasPurchase) {
                this.dict.universalCard.active = !0;
            } else {
                this.dict.universalCard.active = !1;
            }
        }
    };
    e.prototype.updateSkin = function () {
        var t = $userManager.User.get($userConst.UserData.skinList) || {
            0: [0],
            1: [0],
            2: [9],
            3: [0],
            4: [0],
            5: [0]
        };
        $userManager.User.set($userConst.UserData.skinList, t);
        var e = $userManager.User.get($userConst.UserData.useSkinIDList) || {
            0: 0,
            1: 0,
            2: 9,
            3: 0,
            4: 0,
            5: 0
        };
        $userManager.User.set($userConst.UserData.useSkinIDList, e);
        var n = $userManager.User.get($userConst.UserData.getLockSkinList) || {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        $userManager.User.set($userConst.UserData.getLockSkinList, n);
    };
    e.prototype.hideUIBtn = function () {
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
    };
    e.prototype.onDestroy = function () {
        $platformManager.Platform.stopRecordCap();
        $platformManager.Platform.hideCustomAd1();
        $platformManager.Platform.hideCustomAd2();
        var t = $userManager.User.getTempData("levelTime");
        var e = (new Date().getTime() - t) / 1e3;
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_End, {
            EndType: 2,
            Duration: e,
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
        });
    };
    e.prototype.listenHandle = function () {
        $eventManager.Event.emit($eventConst.default.TIP_BTN_ANIM, !1, "test");
        this.unschedule(this.handleEvent);
        this.scheduleOnce(this.handleEvent, 8);
    };
    e.prototype.handleEvent = function () {
        console.log("测试无操作");
        if ($userManager.User.get($userConst.TempData.isUnlockTip)) {
            //
        } else {
            $eventManager.Event.emit($eventConst.default.TIP_BTN_ANIM, !0, "test");
        }
    };
    e.prototype.restartBtn_1 = function () {
        this.checkFullAd_noResult();
        this.currentLevelProgress = 1;
        this.initView(!0);
    };
    e.prototype.clickRestart2 = function (t) {
        var e = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
        var n = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
        cc.game.emit("gamelog", "Level_Lose_" + n + "_" + e);
        this.restartTimes += 1;
        console.log("重置次数", this.restartTimes);
        var r = $bmsManager.BMS.getKey("FriendHelp");
        var o = $userManager.User.getTempData($userConst.TempData.cryHelpList) || [];
        var i = $userManager.User.get($userConst.UserData.cryHelpTimes) || 0;
        console.log("检测", this.restartTimes, r);
        console.log("检测2", i);
        console.log("检测3", o, e);
        if (this.restartTimes >= r && i < 2 && -1 == o.indexOf(this.currentLevel)) {
            o.push(this.currentLevel);
            $userManager.User.setTempData($userConst.TempData.cryHelpList, o);
            $userManager.User.set($userConst.UserData.cryHelpTimes, i + 1);
        } else {
            if (this.restartTimes >= r) {
                $platformManager.Platform.showInsert();
            }
        }
        if (this.restartTimes >= 3) {
            $eventManager.Event.emit($eventConst.default.TIP_BTN_ANIM, !0);
            this.restartTimes = 0;
        }
        this.clickRestart(t);
    };
    e.prototype.onRestartReset = function () {
        this.checkFullAd_noResult();
        this.currentLevelProgress = 1;
        this.clickRestart2();
    };
    e.prototype.onEnable = function () {
        if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
            $oPPOAndroidAdUtils.OPPOAndroidAd.showBannerFeed();
        } else {
            $platformManager.Platform.is($platformConst.EPlatform.OPPO);
        }
        this.initEvent();
        $eventManager.Event.on($eventConst.default.hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    };
    e.prototype.onDisable = function () {
        if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
            $platformManager.Platform.hideNativeAds();
        } else {
            $platformManager.Platform.is($platformConst.EPlatform.OPPO);
        }
        this.clearEvent();
        $eventManager.Event.off($eventConst.default.hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    };
    e.prototype.initEvent = function () {
        cc.game.on("game_success1", this.startSuc, this);
        cc.game.on("game_success2", this.suc, this);
        cc.game.on("onRestartBtn", this.clickRestart2, this);
        cc.game.on("restartBtn_1", this.restartBtn_1, this);
        cc.game.on("onRestartReset", this.onRestartReset, this);
        cc.game.on("isTimeEnd", this.isTimeEndFun, this);
        $eventManager.Event.on($eventConst.default.CLICK_NEXT, this.clickNext, this);
        $eventManager.Event.on($eventConst.default.destroyInsert, this.destroyInsert, this);
        $eventManager.Event.on($eventConst.default.enterNewMode, this.enterNewMode, this);
        $eventManager.Event.on($eventConst.default.extendTime, this.extendTime, this);
        $eventManager.Event.on($eventConst.default.move5, this.move5, this);
        $eventManager.Event.on($eventConst.default.upset, this.upset, this);
        $eventManager.Event.on($eventConst.default.boreBtn, this.boreBtn, this);
        cc.game.on("woodRemove", this.woodRemove, this);
        $eventManager.Event.on($eventConst.default.StopTimer, this.stopTimer, this);
        $eventManager.Event.on($eventConst.default.restoreTime, this.restoreTime, this);
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
    e.prototype.clearEvent = function () {
        cc.game.off("game_success1", this.startSuc, this);
        cc.game.off("game_success2", this.suc, this);
        cc.game.off("onRestartBtn", this.clickRestart2, this);
        cc.game.off("onRestartReset", this.onRestartReset, this);
        cc.game.off("isTimeEnd", this.isTimeEndFun, this);
        $eventManager.Event.off($eventConst.default.CLICK_NEXT, this.clickNext, this);
        $eventManager.Event.off($eventConst.default.destroyInsert, this.destroyInsert, this);
        $eventManager.Event.off($eventConst.default.enterNewMode, this.enterNewMode, this);
        $eventManager.Event.off($eventConst.default.extendTime, this.extendTime, this);
        $eventManager.Event.off($eventConst.default.move5, this.move5, this);
        $eventManager.Event.off($eventConst.default.upset, this.upset, this);
        $eventManager.Event.off($eventConst.default.boreBtn, this.boreBtn, this);
        cc.game.off("woodRemove", this.woodRemove, this);
        $eventManager.Event.off($eventConst.default.StopTimer, this.stopTimer, this);
        $eventManager.Event.off($eventConst.default.restoreTime, this.restoreTime, this);
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
    e.prototype.f29086_addCoin = function () {};
    e.prototype.allPersonAmount = function (t, e) {
        if (this.currentLevel > 1) {
            var n = $memoryStorageManager.default.get($memoryStorageConst.default.CollectGoodsID);
            var r = $localStorageManager.default.get($localStorageConst.default.Collect) || {
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
    };
    e.prototype.checkTipText = function (t) {
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
    };
    e.prototype.removeScrewBtn = function () {
        this.dict.removeScrewBtn.stopAllActions();
        this.dict.removeScrewBtn.scale = 1;
        this.allHoleCoverAnim = !1;
    };
    e.prototype.chehuiBtn_anim = function () {
        this.allHoleCoverAnim = !1;
    };
    e.prototype.hideGetCard = function () {
        this.dict.noFirstAllHole.active = !1;
        $eventManager.Event.emit($eventConst.default.restoreTime);
    };
    e.prototype.allHoleCover = function () {
        var t = this;
        if (this.allHoleCoverAnim) {
            //
        } else {
            this.allHoleCoverAnim = !0;
            console.log("allHoleCover-------");
            if (
                !$localStorageManager.default.get($localStorageConst.default.NoFirstAllHole) &&
                $platformManager.Platform.getConfig().hasPurchase
            ) {
                $localStorageManager.default.set($localStorageConst.default.NoFirstAllHole, 1);
                this.dict.noFirstAllHole.active = !0;
                $tipManager.Tip.show("很遗憾，没有可操作步骤了。");
                $eventManager.Event.emit($eventConst.default.StopTimer);
                this.scheduleOnce(function () {
                    var t = ($localStorageManager.default.get($localStorageConst.default.cardAmount) || 0) + 1;
                    $localStorageManager.default.set($localStorageConst.default.cardAmount, t);
                    $memoryStorageManager.default.set($memoryStorageConst.default.reward, [["card", 1]]);
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
    e.prototype.move5 = function () {
        this.level.children[0]._components[0].addAutoMoveNumber();
    };
    e.prototype.upset = function () {
        if (this.level.children[0]._components[0].shuffle) {
            this.level.children[0]._components[0].shuffle();
        }
    };
    e.prototype.boreBtn = function () {
        this.dict.boreBtn.active = !1;
        if (this.level.children[0]._components[0].checkAdLock) {
            this.level.children[0]._components[0].checkAdLock();
        }
    };
    e.prototype.hammerBtn = function () {
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
    };
    e.prototype.getIsOpen = function () {
        return 1;
    };
    e.prototype._initOutLine = function () {};
    e.prototype.shakeBtn = function () {
        if (this.level.children[0]._components[0].shakeAnimation) {
            this.level.children[0]._components[0].shakeAnimation(0);
        }
    };
    e.prototype.undoBtn = function () {
        if (this.level.children[0]._components[0].func_withdraw) {
            this.level.children[0]._components[0].func_withdraw();
        }
    };
    e.prototype.wingBtn = function () {
        if (this.level.children[0]._components[0].func_fly) {
            this.level.children[0]._components[0].func_fly();
        }
    };
    e.prototype.highlightBtn = function () {
        if (this.level.children[0]._components[0].func_highlight) {
            this.level.children[0]._components[0].func_highlight();
        }
    };
    e.prototype.addStepBtn = function () {
        if (this.level.children[0]._components[0].func_addStep) {
            this.level.children[0]._components[0].func_addStep();
        }
    };
    e.prototype.moderateBtn = function () {
        if (this.level.children[0]._components[0].setLeftScrollSpeed) {
            this.level.children[0]._components[0].setLeftScrollSpeed(30);
        }
    };
    e.prototype.rotateBtn = function () {
        if (this.level.children[0]._components[1].turn) {
            this.level.children[0]._components[1].turn();
        }
    };
    e.prototype.screwBoxBtn = function () {
        this.dict.bottomBar0.active = !1;
        this.dict.topLeftBar.active = !1;
        this.dict.number.active = !1;
        this.stopTimer();
        if (this.level.children[0]._components[0].func_delNail) {
            this.level.children[0]._components[0].func_delNail();
        }
    };
    e.prototype.func_checkDelNailCb = function () {
        this.dict.bottomBar0.active = !0;
        this.dict.topLeftBar.active = !0;
        this.dict.number.active = !0;
        this.restoreTime();
    };
    e.prototype.extendTime = function () {
        this.currentLevelTime = 60;
        this.dict.time2.active = !0;
        this.dict.time2.getComponent(cc.Label).string = "" + this.secondFormat(this.currentLevelTime);
        this.schedule(this.timerFun, 1);
    };
    e.prototype.stopTimer = function (t) {
        if (void 0 === t) {
            t = !1;
        }
        if (this.dict.time2.active) {
            console.log("暂停时间");
            this.unschedule(this.timerFun);
        }
    };
    e.prototype.restoreTime = function () {
        if (this.dict.time2.active) {
            this.unschedule(this.timerFun);
            this.schedule(this.timerFun, 1);
        }
    };
    e.prototype.adsVideoFail = function () {
        cc.game.emit("gamelog", "level_interfail_" + this.currentMode + "_" + this.currentLevel);
    };
    e.prototype.adSkipped = function () {};
    e.prototype.insetVideoSuccess = function () {
        cc.game.emit("gamelog", "level_interplay_" + this.currentMode + "_" + this.currentLevel);
    };
    e.prototype.insetVideoAsk = function () {
        cc.game.emit("gamelog", "level_inter_" + this.currentMode + "_" + this.currentLevel);
    };
    e.prototype.destroyInsert = function () {
        $platformManager.Platform.destroyInsert();
    };
    e.prototype.clickNext = function () {
        var t = this;
        $userManager.User.getTempData($userConst.TempData.NEXT_MODE_ID);
        if (1 != this.themeType) {
            $configUtils.ConfigUtils.getDataByID(this.currentMode, function (e) {
                t.currentTopLevel = e.amount;
                if (t.currentLevel + 1 > t.currentTopLevel) {
                    console.log("最后一关");
                    t.initLevelOrder();
                } else {
                    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
                    $eventManager.Event.emit($eventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                }
                if (
                    $platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE) ||
                    $platformManager.Platform.is($platformConst.EPlatform.IOS_HAIWAI)
                ) {
                    if ($userManager.User.getTempData("isNeedInsert")) {
                        t.checkFullAd();
                    } else {
                        console.log("不需要差评");
                    }
                    $userManager.User.setTempData("isNeedInsert", !0);
                }
            });
        } else {
            $configUtils.ConfigUtils.getDataByID_99(this.currentMode, function (e) {
                t.currentTopLevel = e.amount;
                if (t.currentLevel + 1 > t.currentTopLevel) {
                    console.log("最后一关");
                    $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t.currentMode);
                    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
                    $eventManager.Event.emit($eventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                } else {
                    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
                    $eventManager.Event.emit($eventConst.default.UPDATE_IS_UNLOCK_TIP);
                    t.initView();
                }
                if (
                    $platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE) ||
                    $platformManager.Platform.is($platformConst.EPlatform.IOS_HAIWAI)
                ) {
                    if ($userManager.User.getTempData("isNeedInsert") || $platformManager.Platform.getNoADState()) {
                        t.checkFullAd();
                    } else {
                        console.log("不需要差评");
                    }
                    $userManager.User.setTempData("isNeedInsert", !0);
                }
            });
        }
    };
    e.prototype.initLevelOrder = function () {
        var t = this;
        if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
            this.updateCurrentModeLevel();
        } else {
            $userManager.User.get($userConst.UserData.mode0LevelList_stage1ID);
            $userManager.User.get($userConst.UserData.mode0LevelList_stage2ID);
            $userManager.User.get($userConst.UserData.mode1LevelList_stage1ID);
            $userManager.User.get($userConst.UserData.mode1LevelList_stage2ID);
            var e = [];
            var n = [];
            var r = [];
            var o = [];
            var i = [];
            var a = [];
            if (0 == this.currentMode) {
                $configManager.Config.get(
                    $configConst.ConfigConst.THEME + 0 + $platformManager.Platform.getConfig().configSuffix
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
                    $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, e);
                    $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, n);
                    console.log("打螺丝", e, n);
                    t.updateCurrentModeLevel();
                });
            } else {
                if (1 == this.currentMode) {
                    $configManager.Config.get($configConst.ConfigConst.THEME + 1).then(function (e) {
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
                        $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, r);
                        $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, o);
                        console.log("清理", r, o);
                        t.updateCurrentModeLevel();
                    });
                } else {
                    if (2 == this.currentMode) {
                        $configManager.Config.get($configConst.ConfigConst.THEME + 2).then(function (e) {
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
                            $userManager.User.set($userConst.UserData.mode2LevelList_stage1ID, i);
                            $userManager.User.set($userConst.UserData.mode2LevelList_stage2ID, a);
                            console.log("消除箭头", i, a);
                            t.updateCurrentModeLevel();
                        });
                    } else {
                        this.handleModeByID(this.currentMode);
                    }
                }
            }
        }
    };
    e.prototype.handleModeByID = function (t) {
        var e = this;
        var n = [];
        var r = [];
        $configManager.Config.get($configConst.ConfigConst.THEME + t).then(function (o) {
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
            $userManager.User.set($userConst.UserData["mode" + t + "LevelList_stage1ID"], n);
            $userManager.User.set($userConst.UserData["mode" + t + "LevelList_stage2ID"], r);
            console.log("模式", t, n, r);
            e.updateCurrentModeLevel();
        });
    };
    e.prototype.updateCurrentModeLevel = function () {
        var t = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};
        var e = $userManager.User.get("levelListLoopTimes") || {};
        if (e[this.currentMode]) {
            e[this.currentMode] += 1;
        } else {
            e[this.currentMode] = 1;
        }
        $userManager.User.set("levelListLoopTimes", e);
        t[this.currentMode] = 1;
        $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, this.currentMode);
        $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
        $userManager.User.set($userConst.UserData.LEVEL_LIST, t);
        $eventManager.Event.emit($eventConst.default.UPDATE_IS_UNLOCK_TIP);
        this.initView();
    };
    e.prototype.enterNewMode = function () {
        $eventManager.Event.emit($eventConst.default.UPDATE_IS_UNLOCK_TIP);
        this.initView();
    };
    e.prototype.startSuc = function () {
        this.screenshot();
    };
    e.prototype.screenshot = function () {
        var t = this;
        this.scheduleOnce(function () {
            if (cc.isValid(t.dict.level)) {
                t.restartNodeShot();
            }
        }, 0.1);
    };
    e.prototype.restartNodeShot = function () {
        console.log("截图");
        $utils.Utils.nodeShot(this.dict.level).then(function (t) {
            window.screenShotPicture = t;
        });
    };
    e.prototype.woodRemove = function (t) {
        console.log("测试 woodRemove");
        var e = $poolUtils.default.get(this.dict.downSpineRoot);
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
            $poolUtils.default.put(e);
        }, 10);
    };
    e.prototype.suc = function () {
        $platformManager.Platform.stopRecordCap();
        this.dict.time2.active = !1;
        this.unschedule(this.timerFun);
        var t = $userManager.User.getTempData("levelTime");
        var e = (new Date().getTime() - t) / 1e3;
        var n = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Win, {
            lv: n,
            mode: this.currentMode,
            queue: this.currentLevel,
            times: e,
            sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
        });
        this.sucFunc();
        this.currentLevelProgress = 1;
    };
    e.prototype.playNDBS = function () {
        var t = this;
        this.dict.spine.active = !0;
        if ("tc" == $languageManager.default.instance.lan) {
            this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
        } else {
            if ("en" == $languageManager.default.instance.lan) {
                this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation4", !1);
            } else {
                if ("ja" == $languageManager.default.instance.lan) {
                    this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
                } else {
                    this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
                }
            }
        }
        this.scheduleOnce(function () {
            t.dict.spine.active = !1;
        }, 1.5);
    };
    e.prototype.sucFunc = function () {
        var t = this.currentLevel + 1;
        var e = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};
        if (e[0]) {
            //
        } else {
            e[0] = 1;
        }
        console.log("nextLevel", t, "list", e);
        if (t > e[this.currentMode]) {
            e[this.currentMode] = t;
            $userManager.User.set($userConst.UserData.LEVEL_LIST, e);
            console.log("新通关");
            $userManager.User.setTempData("newPass", !0);
            $adjustEventSystem.default.todayPassTimes();
            var n = $localStorageManager.default.get($localStorageConst.default.canTurntableTimes) || 0;
            $localStorageManager.default.set($localStorageConst.default.canTurntableTimes, n + 1);
            var r = $localStorageManager.default.get($localStorageConst.default.shipStartTime) || 0;
            var o = $localStorageManager.default.get($localStorageConst.default.forwardTimes) || 0;
            console.log("shipStartTime", o);
            console.log("shipStartTime", r);
            if (r) {
                o += 1;
                console.log("shipStartTime323333", r);
                $localStorageManager.default.set($localStorageConst.default.forwardTimes, o);
            }
        } else {
            $userManager.User.setTempData("newPass", !1);
        }
        var i = $userManager.User.get("record") || 0;
        i += 1;
        $userManager.User.set("record", i);
        $platformManager.Platform.sendRankData();
        if (0 == this.currentMode && e[this.currentMode] >= 5) {
            if (0 == ($localStorageManager.default.get($localStorageConst.default.challengeStartTime) || 0)) {
                $localStorageManager.default.set($localStorageConst.default.challengeStartTime, new Date().getTime());
                $challengeSystem.default.init();
            }
            var a = $localStorageManager.default.get($localStorageConst.default.challengeUnlockAmount) || 0;
            a += 1;
            $localStorageManager.default.set($localStorageConst.default.challengeUnlockAmount, a);
        }
        cc.game.emit("TaskFinish");
        if (-1 != $platformManager.Platform.getConfig().flag.indexOf("tt")) {
            var s = this.currentMode;
            var c = $userManager.User.get($userConst.UserData.ALREADY_PLAY) || {};
            if (c[s]) {
                //
            } else {
                c[s] = [];
            }
            if (-1 == c[s].indexOf(this.currentLevel)) {
                c[s].push(this.currentLevel);
            }
            $userManager.User.set($userConst.UserData.ALREADY_PLAY, c);
            var l = $userManager.User.get($userConst.UserData.ALREADY_UNLOCK) || {};
            if (l[s]) {
                //
            } else {
                l[s] = [];
            }
            if (-1 == l[s].indexOf(t)) {
                l[s].push(t);
            }
            $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, l);
        }
        if (
            $platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE) ||
            $platformManager.Platform.is($platformConst.EPlatform.IOS_HAIWAI)
        ) {
            //
        } else {
            this.checkFullAd();
        }
        $popupManager.default.hideAll();
        $memoryStorageManager.default.set($memoryStorageConst.default.IsFail, 0);
        if (1 == this.themeType) {
            $popupManager.default.show($popupConst.PopupConst.WinOld);
        } else {
            $popupManager.default.show($popupConst.PopupConst.WIN);
        }
        var u = $userManager.User.get($userConst.UserData.EnterSidebar) || 0;
        if (this.currentLevel >= 3 && this.currentLevel % 3 == 0 && 2 != u) {
            this.scheduleOnce(function () {
                $popupManager.default.show($popupConst.PopupConst.LimitWelfare);
            }, 0.3);
        }
        var h = $userManager.User.get($userConst.UserData.IS_COMMENT) || 0;
        var m = $bmsManager.BMS.getKey("evaluatelv");
        if (0 != this.currentMode || h || -1 == m.indexOf(this.currentLevel)) {
            //
        } else {
            this.scheduleOnce(function () {
                $popupManager.default.show($popupConst.PopupConst.COMMENT);
            }, 0.4);
        }
        $userManager.User.setTempData($userConst.TempData.IS_WIN, !1);
    };
    e.prototype.initSkinAndRole = function () {
        var t = $localStorageManager.default.get($localStorageConst.default.SkinList) || {};
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
        var e = $localStorageManager.default.get($localStorageConst.default.UseSkin) || {};
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
        var n = $localStorageManager.default.get($localStorageConst.default.HeroLevel) || 1;
        window.f29086_LevelData = {
            useSkin: e,
            heroLevel: n
        };
        window.f29086_dragonBall = 0;
        window.f29086_coin = 0;
    };
    e.prototype.initView = function (t, e) {
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
                                (this.currentMode = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)),
                                (this.currentLevel = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL)),
                                (this.themeType =
                                    $memoryStorageManager.default.get($memoryStorageConst.default.ThemeType) || 0),
                                (this.allHoleCoverAnim = !1),
                                $memoryStorageManager.default.set($memoryStorageConst.default.LevelReliveCount, 0),
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
                                (r = $bmsManager.BMS.getKey("levelspace")),
                                (o = $bmsManager.BMS.getKey("isCheck")),
                                console.log("[levelspace-isCheck]", o),
                                0 == o &&
                                    (-1 == r
                                        ? (this.dict.downloadBtn.active = !1)
                                        : this.currentLevel % (r + 1) == 1
                                        ? ((this.dict.downloadBtn.y = 514.778), (this.dict.downloadBtn.active = !0))
                                        : (this.dict.downloadBtn.active = !1)),
                                (i = $userManager.User.get("levelListLoopTimes") || {})[this.currentMode] ||
                                    (i[this.currentMode] = 0),
                                0 != this.currentMode
                                    ? [3, 2]
                                    : [
                                          4,
                                          $configManager.Config.get(
                                              $configConst.ConfigConst.THEME +
                                                  this.currentMode +
                                                  $platformManager.Platform.getConfig().configSuffix
                                          )
                                      ]
                            );
                        }
                    case 1:
                        l = z.sent();
                        if (i[this.currentMode]) {
                            if (
                                !(h = $localStorageManager.default.get($localStorageConst.default.LoopLevelIDArr) || [])
                                    .length
                            ) {
                                for (m = 0; m < l.length; m++) {
                                    if (1 != (b = l[m]).id) {
                                        h.push(b.levelID);
                                    }
                                }
                                h = $tools.default.shuffleArray(h);
                                $localStorageManager.default.set($localStorageConst.default.LoopLevelIDArr, h);
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
                        return [4, $configManager.Config.get($configConst.ConfigConst.THEME + this.currentMode)];
                    case 3:
                        l = z.sent();
                        c = l.find(function (t) {
                            return t.id == V.currentLevel;
                        }).levelID;
                        z.label = 4;
                    case 4:
                        if (e) {
                            c = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
                        }
                        console.log("== 开发ID: " + c);
                        if (t) {
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Reset, {
                                lv: c,
                                mode: this.currentMode,
                                queue: this.currentLevel
                            });
                        } else {
                            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Page, {
                                lv: c,
                                mode: this.currentMode,
                                queue: this.currentLevel,
                                sort: $localStorageManager.default.get($localStorageConst.default.ConfigSuffix)
                            });
                        }
                        if ($platformManager.Platform.getConfig().hasPurchase) {
                            //
                        } else {
                            this.dict.shopBtn.active = !1;
                        }
                        k = "zqddn_zhb/prefab/level/zqddn_zhb_level" + c;
                        $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL_ID, c);
                        $resManager.Res.load(k).then(function (t) {
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
                                                $languageManager.default.formatStr("第%d关", e);
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
                                            return [4, $configManager.Config.get($configConst.ConfigConst.Collect)];
                                        case 1:
                                            r = s.sent();
                                            return this.currentLevel > 1 && r[this.currentLevel - 2]
                                                ? ((o = r[this.currentLevel - 2].goodsID),
                                                  (a = r[this.currentLevel - 2].goodsName),
                                                  $memoryStorageManager.default.set(
                                                      $memoryStorageConst.default.CollectGoodsID,
                                                      o
                                                  ),
                                                  $memoryStorageManager.default.set(
                                                      $memoryStorageConst.default.CollectGoodsName,
                                                      a
                                                  ),
                                                  [
                                                      4,
                                                      $assetManager.default.getRes(
                                                          "gameBundle",
                                                          "texture/collect/" + o,
                                                          cc.Texture2D
                                                      )
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
                                            $memoryStorageManager.default.set(
                                                $memoryStorageConst.default.CollectGoodsID,
                                                null
                                            );
                                            s.label = 4;
                                        case 4:
                                            this.level.addChild(n);
                                            window.levelContent = n;
                                            this.scheduleOnce(function () {
                                                u.screenshot();
                                                $platformManager.Platform.startRecordCap();
                                            }, 0);
                                            cc.game.emit(
                                                "gamelog",
                                                "Level_page_" + this.currentMode + "_" + this.currentLevel
                                            );
                                            $userManager.User.setTempData("levelTime", new Date().getTime());
                                            if (
                                                0 == this.currentMode &&
                                                1 == $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL)
                                            ) {
                                                this.dict.content.active = !1;
                                            } else {
                                                this.dict.content.active = !0;
                                            }
                                            return [2];
                                    }
                                });
                            });
                        });
                        if ($userManager.User.getTempData("cheats")) {
                            this.dict.cheats.active = !0;
                            this.levelID.getComponent(cc.Label).string = "[" + c + "]";
                            this.bms.getComponent(cc.Label).string =
                                "[bms: " + $platformManager.Platform.getConfig().version + "]";
                            this.flag.getComponent(cc.Label).string =
                                "[flag: " + $platformManager.Platform.getConfig().flag + "]";
                        }
                        this.currentLevelProgress;
                        this.initPlatformUI();
                        if (!t) {
                            C = $bmsManager.BMS.getKey("TiLi");
                            console.log("bmsPower", C);
                            if (C && !this.isInfinitePower()) {
                                if ($userManager.User.getTempData($userConst.TempData.IS_INFINITE_POWER)) {
                                    return [2];
                                }
                                if ((M = $userManager.User.get($userConst.UserData.POWER)) < 5) {
                                    $userManager.User.setTempData($userConst.TempData.POWER_TYPE, 0);
                                    if ($bmsManager.BMS.getKey("WuxianTiLi")) {
                                        cc.game.emit("gamelog", "page008"),
                                            $popupManager.default.show($popupConst.PopupConst.INFINITE_POWER);
                                    } else {
                                        cc.game.emit("gamelog", "page009"),
                                            cc.game.emit(
                                                "gamelog",
                                                "Level_NoPower_" + this.currentMode + "_" + this.currentLevel
                                            ),
                                            $popupManager.default.show($popupConst.PopupConst.POWER_SHORTAGE);
                                    }
                                } else {
                                    $userManager.User.set($userConst.UserData.POWER, M - 5);
                                    $eventManager.Event.emit($eventConst.default.POWER_UPDATE);
                                    cc.game.emit(
                                        "gamelog",
                                        "Level_Power_" +
                                            this.currentMode +
                                            "_" +
                                            this.currentLevel +
                                            "_" +
                                            $userManager.User.get($userConst.UserData.POWER)
                                    );
                                    T = $userManager.User.get($userConst.UserData.hasUseKey) || 0;
                                    A = $bmsManager.BMS.getKey("keyVideo");
                                    T ||
                                        0 != this.currentMode ||
                                        this.currentLevel != A ||
                                        ($userManager.User.setTempData($userConst.TempData.current_key_type, 1),
                                        console.log(
                                            "TempData",
                                            $userManager.User.getTempData($userConst.TempData.current_key_type)
                                        ),
                                        $popupManager.default.show($popupConst.PopupConst.SHOP));
                                }
                            }
                            if ($platformManager.Platform.is($platformConst.EPlatform.WX)) {
                                if (!window.wx) {
                                    return [2];
                                }
                                U = $bmsManager.BMS.getKey("lvinys5x5lv");
                                B = $bmsManager.BMS.getKey("lvinys5x5chance");
                                O = this.getIsMistakeByChance(B);
                                console.log("设置第几关:", U, "当前第几关:", this.currentLevel, O);
                                if (U <= this.currentLevel && O) {
                                    N = window.wx.getSystemInfoSync();
                                    j = N.windowHeight / 2 - 250;
                                    $platformManager.Platform.showBlockAds(
                                        {
                                            top: j,
                                            left: 0,
                                            id: $platformManager.Platform.getConfig().blockID,
                                            hideCb: function () {
                                                $platformManager.Platform.hideBlockAds();
                                                setTimeout(function () {}, 300);
                                            }
                                        },
                                        function (t) {
                                            if (0 == t) {
                                                //
                                            } else {
                                                $platformManager.Platform.hideBlockAds();
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
    };
    e.prototype.isTimeEndFun = function () {
        console.log("测试isTimeEndFun");
        this.isTimeEnd = !1;
    };
    e.prototype.timerFun = function () {
        this.currentLevelTime -= 1;
        this.dict.time2.getComponent(cc.Label).string = "" + this.secondFormat(this.currentLevelTime);
        if (0 == this.currentLevelTime) {
            this.dict.time2.active = !1;
            this.unschedule(this.timerFun);
            this.isTimeEnd = !0;
            $audioManager.Audio.playEffect($audioConst.AudioConst.timeEnd);
            var t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
            $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Lose, {
                lv: t,
                mode: this.currentMode
            });
        }
    };
    e.prototype.secondFormat = function (t, e, n) {
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
    };
    e.prototype.developBtn = function () {
        var t = this.dict.developID.getComponent(cc.EditBox).string;
        console.log("开发id", t);
        if (this.isIntNum(t)) {
            console.log("是数字");
            $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL_ID, Number(t));
            this.initView(!1, !0);
        }
    };
    e.prototype.orderBtn = function () {
        var t = this.dict.orderID.getComponent(cc.EditBox).string;
        console.log("顺序id", t);
        if (this.isIntNum(t)) {
            console.log("是数字");
            $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, Number(t));
            this.initView();
        }
    };
    e.prototype.screenshotBtn = function () {
        var t = this;
        var e = this.dict.screenshot.getComponent(cc.EditBox).string.split("-");
        var n = e[0];
        var r = e[1];
        console.log("str", n, r);
        if (this.isIntNum(n) && this.isIntNum(r)) {
            this.dict.cheats.active = !1;
            $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, Number(n));
            this.initView(!0);
            $screenshotUtils.Screenshot.init(this.node);
            var o = function () {
                $screenshotUtils.Screenshot.btn_image_knife(String(t.currentLevel));
                console.log("截图第" + t.currentLevel + "关");
                var e = t.currentLevel + 1;
                if (e <= Number(r)) {
                    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, e);
                    t.initView(!0);
                } else {
                    console.log("结束截图");
                    t.unschedule(o);
                }
            };
            this.schedule(o, 2);
        } else {
            $tipManager.Tip.show("输入格式应该为: 1-100");
        }
    };
    e.prototype.downloadBtn = function () {
        $xMADUtils.XMAD.downloadBtn();
    };
    e.prototype.collectRoot = function () {
        $popupManager.default.show($popupConst.PopupConst.Collect);
    };
    e.prototype.mapBtn = function () {
        $popupManager.default.show($popupConst.PopupConst.Map);
    };
    e.prototype.roleBtn = function () {
        $popupManager.default.show($popupConst.PopupConst.Role);
    };
    e.prototype.limitWelfareBtn = function () {
        console.log("limitWelfareBtn");
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
            id: "009"
        });
        $popupManager.default.show($popupConst.PopupConst.LimitWelfare);
    };
    e.prototype.hideLimitWelfareBtn = function () {
        this.dict.limitWelfareBtn.active = !1;
    };
    e.prototype.isIntNum = function (t) {
        return !isNaN(parseFloat(t));
    };
    e.prototype.getIsMistakeByChance = function (t) {
        var e = 100 * Math.random();
        var n = !1;
        console.log("随机数", e);
        console.log("当前配置概率:" + t);
        return 0 == t ? n : (t >= e && (n = !0), n);
    };
    e.prototype.isInfinitePower = function () {
        var t = !1;
        if ($bmsManager.BMS.getKey("WuxianTiLi")) {
            var e = $userManager.User.get($userConst.UserData.INF_POWER_START_TIME);
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
    };
    e.prototype.initPlatformUI = function () {
        if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.TT) {
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
        if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.KS) {
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
        if ($platformManager.Platform.getConfig().hasHomeBtn) {
            this.dict.homeBtn.active = !0;
        } else {
            this.dict.homeBtn.active = !1;
        }
    };
    e.prototype.clickHome = function () {
        if (this.isLoadingScene) {
            //
        } else {
            this.isLoadingScene = !0;
            cc.game.emit("gamelog", "btn015");
            $sceneManager.default.loadScene($sceneConst.SceneConst.MAIN);
        }
    };
    e.prototype.clickBack = function () {
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Pause, {
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
        });
        this.stopTimer();
        $popupManager.default.show($popupConst.PopupConst.SET);
    };
    e.prototype.clickRestart = function (t) {
        cc.game.emit("gamelog", "btn014");
        this.initView(!0, t);
    };
    e.prototype.checkFullAd_noResult = function () {
        cc.game.emit("checkFullAd_noResult", this.currentLevel);
    };
    e.prototype.checkFullAd = function () {
        $eventManager.Event.emit($eventConst.default.checkFullAd_result);
    };
    __decorate([K(cc.Prefab)], e.prototype, "coloringSpinePrefab", void 0);
    return __decorate([G], e);
})($baseUI.default);
exports.default = W;
