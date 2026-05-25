"use strict";
cc._RF.push(module, 'fd1d5rgy99K4od5Mbqv5c/d', 'App');
// scripts/App.ts

// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
var HttpUtils = require("./HttpUtils");
var ConfigConst = require("./ConfigConst");
var EventConst = require("./EventConst");
var PlatformConst = require("./PlatformConst");
var UserConst = require("./UserConst");
var LocalStorageConst = require("./LocalStorageConst");
var TimeManager = require("./TimeManager");
var AudioManager = require("./AudioManager");
var BmsManager = require("./BmsManager");
var ConfigManager = require("./ConfigManager");
var EventManager = require("./EventManager");
var LanguageManager = require("./LanguageManager");
var PlatformManager = require("./PlatformManager");
var ReportManager = require("./ReportManager");
var TipManager = require("./TipManager");
var UserManager = require("./UserManager");
var ChallengeSystem = require("./ChallengeSystem");
var PaymentSystem = require("./PaymentSystem");
var VIPSystem = require("./VIPSystem");
var ChallengeHttp = require("./ChallengeHttp");
var CopyRightDialog = require("./CopyRightDialog");
var OPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var XMADUtils = require("./XMADUtils");
var LocalStorageManager = require("./LocalStorageManager");
var SceneManager = require("./SceneManager");
var SceneConst = require("./SceneConst");
var FONT_INDEX_BY_LANG = {
    zh: 0,
    en: 0,
    ja: 1,
    tw: 2
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingPrefab = null;
        _this.plantAtlas = null;
        _this.fonts = [];
        _this.fullAdCounter = 0;
        _this.internalDefaultBMS = {
            isAuditing: 0,
            isAuditingLevelMap: 1,
            configSuffix: "",
            TiLi: 60,
            WuxianTiLi: 1,
            BuchongTiLi: 20,
            fullAdsType: 0,
            fullScreenAd: "no",
            AdIntervals: 0,
            bannerAdIntervals: 0,
            startWinFullScreenAd: 3,
            spaceWinFullScreenAd: 3,
            spaceWinFullScreenAdND: 3,
            startLevelWinFullScreenAds: 11,
            spaceLevelWinFullScreenAd: 3,
            GM: 0,
            ugc: 0,
            ugcad: 0,
            newmodead: 1,
            evaluatelv: [1200, 2500, 5e3],
            evaluatebtndelay: 2,
            evaluatestar: 5,
            keyVideo: 7,
            AllThemeUnlock: 0,
            UnlockThemeMainLv: [10, 10],
            UnlockThemeSubLv: [5, 10],
            UnlockThemeList: [1, 6, 7, 4, 3, 2, 5]
        };
        _this.externalDefaultBMS = {
            isAuditing: 0,
            isAuditingLevelMap: 1,
            configSuffix: "",
            TiLi: 0,
            WuxianTiLi: 0,
            BuchongTiLi: 20,
            fullAdsType: 0,
            fullScreenAd: "all",
            AdIntervals: 0,
            bannerAdIntervals: 0,
            startWinFullScreenAd: 3,
            spaceWinFullScreenAd: 1,
            spaceWinFullScreenAdND: 1,
            startLevelWinFullScreenAds: 11,
            spaceLevelWinFullScreenAd: 1,
            GM: 0,
            ugc: 0,
            ugcad: 0,
            newmodead: 1,
            evaluatelv: [1200, 2500, 5e3],
            evaluatebtndelay: 2,
            evaluatestar: 5,
            keyVideo: 7,
            AllThemeUnlock: 0,
            UnlockThemeMainLv: [10, 10],
            UnlockThemeSubLv: [5, 10],
            UnlockThemeList: [1, 6, 7, 4, 3, 2, 5]
        };
        _this.isEnterMain = false;
        _this.abBunds = {};
        return _this;
    }
    App.prototype.onLoad = function () {
        var _this = this;
        this.initMgr();
        this.initEvent();
        new CopyRightDialog.default().init();
        this.schedule(function () {
            _this.fullAdCounter++;
        }, 1);
        this.loadLevelSub();
    };
    App.prototype.loadLevelSub = function () {
        this.scheduleOnce(function () {
            if (cc.sys.isBrowser) {
                console.log("浏览器环境");
                window.levelSub = true;
                return;
            }
            console.log("加载关卡子包......");
            cc.assetManager.loadBundle("script", function (loadError) {
                if (loadError) {
                    console.log("[ResMgr]:Load AssetsBundle Error: script");
                    return;
                }
                console.log("加载完成", "script");
                window.levelSub = true;
            });
        }, 0);
    };
    App.prototype.startOppo = function () {
        cc.game.on("onBannerRemoved", this.onBannerRemoved, this);
    };
    App.prototype.cardAmount = function (cardAmount) {
        console.log("保存服务器[cardAmount]", cardAmount);
        this.saveServerData(LocalStorageConst.default.cardAmount, cardAmount);
    };
    App.prototype.saveServerData = function (key, value) {
        var valueStr = value.toString();
        var userId = UserManager.User.get("googleID") || UserManager.User.get("uuid");
        var flag = PlatformManager.Platform.getConfig().flag;
        BmsManager.BMS.saveServerData(flag, userId, key, valueStr).then(function () {
            console.log("保存" + key + "成功:" + valueStr);
        });
    };
    App.prototype.onBannerRemoved = function () {
        console.log("bannerAdCounter", 0);
        PlatformManager.Platform.bannerAdCounter = 0;
    };
    App.prototype.showInterstitialFeedTimer = function () {
        var _this = this;
        var autoPopupInterval = BmsManager.BMS.getKey("timeTC");
        this.scheduleOnce(function () {
            console.log("长时间没操作,自动弹出插屏");
            OPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
            _this.showInterstitialFeedTimer2();
        }, autoPopupInterval);
    };
    App.prototype.showInterstitialFeedTimer2 = function () {
        var _this = this;
        this.scheduleOnce(function () {
            OPPOAndroidAdUtils.OPPOAndroidAd.removeInterstitialFeed();
        }, 30);
        this.scheduleOnce(function () {
            OPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
            _this.showInterstitialFeedTimer2();
        }, 31);
    };
    App.prototype.initMgr = function () {
        PlatformManager.Platform.startInit();
        var language = LanguageManager.default.instance;
        language.init();
        language.setFont(this.fonts[FONT_INDEX_BY_LANG[language.lan]]);
        SceneManager.default.init(this.loadingPrefab);
        AudioManager.Audio.init();
        ReportManager.Report.init();
        this.initStopDebug();
        LocalStorageManager.default.init({
            backTimes: 0,
            isReceiveVIP: 0,
            todayClickShip: 0,
            todayShipExpire: 0,
            shipStartTime: 0,
            openShip: 0,
            todayClickPlan: 0,
            todayClickChallenge: 0,
            todayReceiveCard: 0,
            todaySignIn: 0,
            todayOpenSignIn: 0,
            todaySignInVideo: 0
        });
        this.initBMS();
    };
    App.prototype.initStopDebug = function () {
        if (cc.sys.isMobile) {
            cc.view.enableAutoFullScreen(false);
        }
    };
    App.prototype.initEvent = function () {
        cc.game.on("adNotReady", this.adNotReady, this);
        cc.game.on("iosApplicationDidBecomeActive", this.iosApplicationDidBecomeActive, this);
        cc.game.on("onForeground", this.onForeground, this);
        cc.game.on("localStorage_cardAmount", this.cardAmount, this);
        cc.game.on("checkFullAd_noResult", this.checkFullAd_noResult, this);
        cc.game.on("showNoAD", this.showNoAD, this);
        EventManager.Event.on(EventConst.default.checkFullAd, this.checkFullAd, this);
        EventManager.Event.on(EventConst.default.checkFullAd_result, this.checkFullAd_result, this);
    };
    App.prototype.checkFullAd = function () {
        var nowMs = Date.now();
        if (window.lastVideoAdTime && (nowMs - window.lastVideoAdTime) / 1e3 < 60) {
            console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
            return;
        }
        window.isResultInsert = false;
        var insertCooldown = BmsManager.BMS.getKey("AdIntervals");
        console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + insertCooldown);
        if (this.fullAdCounter < insertCooldown) {
            console.log("== 插屏cd中，无法触发");
            return;
        }
        if ("no" != BmsManager.BMS.getKey("fullScreenAd")) {
            PlatformManager.Platform.showInsert();
            this.fullAdCounter = 0;
        }
    };
    App.prototype.showNoAD = function () {
        window.hideIsNeedInsert = true;
    };
    App.prototype.checkFullAd_noResult = function (restartCount) {
        var nowMs = Date.now();
        if (window.lastVideoAdTime && (nowMs - window.lastVideoAdTime) / 1e3 < 60) {
            console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
            return;
        }
        window.isResultInsert = false;
        var insertCooldown = BmsManager.BMS.getKey("AdIntervals");
        console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + insertCooldown);
        if (this.fullAdCounter < insertCooldown) {
            console.log("== 插屏cd中，无法触发");
            return;
        }
        if ("no" != BmsManager.BMS.getKey("fullScreenAd")) {
            var replayStartThreshold = BmsManager.BMS.getKey("ReplayStartScreenAd");
            if (replayStartThreshold == 0 || restartCount >= replayStartThreshold) {
                console.log("== 插屏checkFullAd_noResult");
                PlatformManager.Platform.showInsert();
                this.fullAdCounter = 0;
            }
        }
    };
    App.prototype.checkFullAd_result = function () {
        var _this = this;
        var nowMs = Date.now();
        if (window.lastVideoAdTime && (nowMs - window.lastVideoAdTime) / 1e3 < 60) {
            console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
            return;
        }
        var insertCooldown = BmsManager.BMS.getKey("AdIntervals");
        console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + insertCooldown);
        if (this.fullAdCounter < insertCooldown) {
            console.log("== 插屏cd中，无法触发");
            return;
        }
        var currentLevel = UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL);
        var startWinInsertLevel = BmsManager.BMS.getKey("startWinFullScreenAd");
        var fullScreenAdSwitch = BmsManager.BMS.getKey("fullScreenAd");
        var hasFullScreenAdConfig = BmsManager.BMS.checkKey("fullScreenAd");
        var startLevelWinInsert = BmsManager.BMS.getKey("startLevelWinFullScreenAds");
        var spaceLevelWinInsert = BmsManager.BMS.getKey("spaceLevelWinFullScreenAd");
        var spaceWinInsertDay1 = BmsManager.BMS.getKey("spaceWinFullScreenAd");
        var spaceWinInsertAfterDay1 = BmsManager.BMS.getKey("spaceWinFullScreenAdND");
        if (currentLevel >= startWinInsertLevel &&
            (("number" == typeof fullScreenAdSwitch && fullScreenAdSwitch) ||
                ("string" == typeof fullScreenAdSwitch && hasFullScreenAdConfig))) {
            var todayDate = new Date().getDate();
            var firstDayDate = UserManager.User.get(UserConst.UserData.FIRST_DAY_DATE);
            if (currentLevel >= startLevelWinInsert) {
                if (currentLevel % spaceLevelWinInsert == 0) {
                    console.log("插屏1");
                    setTimeout(function () {
                        window.isResultInsert = true;
                        PlatformManager.Platform.showInsert();
                        _this.fullAdCounter = 0;
                    }, 500);
                }
            }
            else if (Math.abs(todayDate - firstDayDate) > 0) {
                if (currentLevel % spaceWinInsertAfterDay1 == 0) {
                    console.log("插屏2");
                    setTimeout(function () {
                        window.isResultInsert = true;
                        PlatformManager.Platform.showInsert();
                        _this.fullAdCounter = 0;
                    }, 500);
                }
            }
            else if (currentLevel % spaceWinInsertDay1 == 0) {
                console.log("插屏3");
                setTimeout(function () {
                    window.isResultInsert = true;
                    PlatformManager.Platform.showInsert();
                    _this.fullAdCounter = 0;
                }, 500);
            }
        }
    };
    App.prototype.onForeground = function () {
        XMADUtils.XMAD.onForeground();
    };
    App.prototype.iosApplicationDidBecomeActive = function () {
        var splashOpenDayThreshold = BmsManager.BMS.getKey("splash");
        if (!splashOpenDayThreshold) {
            return;
        }
        var loginDays = UserManager.User.get(UserConst.UserData.loginDaysTimes);
        console.log("登陆天数", loginDays, "splash", splashOpenDayThreshold);
        if (loginDays >= splashOpenDayThreshold) {
            console.log("打开开屏");
            PlatformManager.Platform.showOpenAd();
        }
    };
    App.prototype.adNotReady = function () {
        TipManager.Tip.show(LanguageManager.default.formatStr("暂无广告"));
    };
    App.prototype.initBMS = function () {
        var _this = this;
        var platformConfig = PlatformManager.Platform.getConfig();
        var platform = cc.sys.platform;
        var isIOS = platform == cc.sys.IPHONE || platform == cc.sys.IPAD;
        if (isIOS) {
            var iosVersion = jsb.reflection.callStaticMethod("AppController", "gainIOSBMSVersion");
            console.log("获得版本号", iosVersion);
            BmsManager.BMS.setDefaultData(window.haiwai ? this.externalDefaultBMS : this.internalDefaultBMS);
        }
        if ("wlgczhwapk" == platformConfig.flag) {
            BmsManager.BMS.setDefaultData({
                isStore: []
            });
        }
        else {
            BmsManager.BMS.setDefaultData({
                isStore: ["US", "GB", "CA", "DE", "AU", "JP", "TW", "FR", "HK"]
            });
        }
        this.scheduleOnce(function () {
            console.log("两秒没跳转直接进入");
            _this.sucEnterMain();
        }, 3);
    };
    App.prototype.updateSkin = function () {
        var skinList = UserManager.User.get(UserConst.UserData.skinList) || {
            0: [0],
            1: [0],
            2: [9],
            3: [0],
            4: [0],
            5: [0]
        };
        UserManager.User.set(UserConst.UserData.skinList, skinList);
        var useSkinIDList = UserManager.User.get(UserConst.UserData.useSkinIDList) || {
            0: 0,
            1: 0,
            2: 9,
            3: 0,
            4: 0,
            5: 0
        };
        UserManager.User.set(UserConst.UserData.useSkinIDList, useSkinIDList);
        var lockSkinList = UserManager.User.get(UserConst.UserData.getLockSkinList) || {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        UserManager.User.set(UserConst.UserData.getLockSkinList, lockSkinList);
    };
    App.prototype.sucEnterMain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userUUID, openNum, playDays, serverTimeResponse, cityList, cityConfig, levelListLoopTimes, levelList, themeConfig, currentStageIndex, index, cityId, platformConfig, isStoreList_1, nation, province;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isEnterMain) {
                            return [2 /*return*/];
                        }
                        this.isEnterMain = true;
                        game.plateAtlas = this.plantAtlas;
                        userUUID = UserManager.User.get("uuid") || this.guid();
                        UserManager.User.set("uuid", userUUID);
                        console.log("uuid", userUUID);
                        PlatformManager.Platform.taInit(userUUID);
                        openNum = UserManager.User.get(UserConst.UserData.OpenNum) || 1;
                        playDays = UserManager.User.get(UserConst.UserData.PlayDays) || 1;
                        if (openNum == 1) {
                            cc.game.emit("gamelog_Thinking", "user_Login", {
                                IsNew: true,
                                OpenNum: 1,
                                PlayDays: 1
                            });
                        }
                        else {
                            UserManager.User.set(UserConst.UserData.OpenNum, openNum + 1);
                            cc.game.emit("gamelog_Thinking", "user_Login", {
                                IsNew: false,
                                OpenNum: openNum + 1,
                                PlayDays: playDays
                            });
                        }
                        this.updateSkin();
                        return [4 /*yield*/, HttpUtils.default.getTime()];
                    case 1:
                        serverTimeResponse = _a.sent();
                        if (!serverTimeResponse) return [3 /*break*/, 3];
                        return [4 /*yield*/, TimeManager.default.init(serverTimeResponse.data.time)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        VIPSystem.default.init();
                        PaymentSystem.default.init();
                        ChallengeSystem.default.init();
                        LocalStorageManager.default.get(LocalStorageConst.default.CityListCompatible);
                        cityList = LocalStorageManager.default.get(LocalStorageConst.default.CityList) || [];
                        return [4 /*yield*/, ConfigManager.Config.get(ConfigConst.ConfigConst.City)];
                    case 4:
                        cityConfig = _a.sent();
                        levelListLoopTimes = UserManager.User.get("levelListLoopTimes") || {};
                        if (!levelListLoopTimes[0]) {
                            levelListLoopTimes[0] = 0;
                        }
                        levelList = UserManager.User.get(UserConst.UserData.LEVEL_LIST) || {};
                        if (!levelList[0]) {
                            levelList[0] = 1;
                        }
                        return [4 /*yield*/, ConfigManager.Config.get(ConfigConst.ConfigConst.THEME + 0 + PlatformManager.Platform.getConfig().configSuffix)];
                    case 5:
                        themeConfig = _a.sent();
                        currentStageIndex = levelList[0] + levelListLoopTimes[0] * themeConfig.length;
                        cityConfig.sort(function (left, right) { return left.sort - right.sort; });
                        console.log("diji", currentStageIndex);
                        if (currentStageIndex && currentStageIndex > 2) {
                            for (index = 0; index < currentStageIndex - 2; index++) {
                                cityId = cityConfig[index].id;
                                if (!cityList.includes(cityId)) {
                                    cityList.push(cityId);
                                }
                            }
                        }
                        LocalStorageManager.default.set(LocalStorageConst.default.CityList, cityList);
                        if (PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE)) {
                            BmsManager.BMS.getServerData(PlatformManager.Platform.getConfig().flag, UserManager.User.get("googleID") || userUUID, UserConst.UserData.boreTimes +
                                "," +
                                UserConst.UserData.tipTimes +
                                "," +
                                UserConst.UserData.screwBoxTimes +
                                "," +
                                LocalStorageConst.default.cardAmount).then(function (serverData) {
                                console.log("getServerData", serverData);
                                var boreTimes = null == serverData[UserConst.UserData.boreTimes] ||
                                    Number(serverData[UserConst.UserData.boreTimes]) <= 0
                                    ? 0
                                    : Number(serverData[UserConst.UserData.boreTimes]);
                                var tipTimes = null == serverData[UserConst.UserData.tipTimes] ||
                                    Number(serverData[UserConst.UserData.tipTimes]) <= 0
                                    ? 0
                                    : Number(serverData[UserConst.UserData.tipTimes]);
                                var screwBoxTimes = null == serverData[UserConst.UserData.screwBoxTimes] ||
                                    Number(serverData[UserConst.UserData.screwBoxTimes]) <= 0
                                    ? 0
                                    : Number(serverData[UserConst.UserData.screwBoxTimes]);
                                UserManager.User.set(UserConst.UserData.boreTimes, boreTimes);
                                UserManager.User.set(UserConst.UserData.tipTimes, tipTimes);
                                UserManager.User.set(UserConst.UserData.screwBoxTimes, screwBoxTimes);
                                var cardAmount = null == serverData[LocalStorageConst.default.cardAmount] ||
                                    Number(serverData[LocalStorageConst.default.cardAmount]) <= 0
                                    ? 0
                                    : Number(serverData[LocalStorageConst.default.cardAmount]);
                                LocalStorageManager.default.set(LocalStorageConst.default.cardAmount, cardAmount);
                            });
                        }
                        this.startOppo();
                        platformConfig = PlatformManager.Platform.getConfig();
                        if ("haiwai" == platformConfig.rank) {
                            isStoreList_1 = BmsManager.BMS.getKey("isStore");
                            nation = UserManager.User.get("nation");
                            console.log("province", nation);
                            console.log("isStore", isStoreList_1);
                            if (!nation) {
                                ChallengeHttp.challengeHttp.getCountry(true).then(function (country) {
                                    console.log("国家", country);
                                    UserManager.User.set("nation", country);
                                    _this.gotoGame();
                                    if ("CN" == country) {
                                        platformConfig.hasShare = 0;
                                    }
                                    if (0 == isStoreList_1.length) {
                                        console.log("当前地区有内购0", country);
                                        platformConfig.hasPurchase = 1;
                                        cc.game.emit("hasPurchase");
                                    }
                                    else if (isStoreList_1.includes(country)) {
                                        console.log("当前地区有内购1", country);
                                        platformConfig.hasPurchase = 1;
                                        cc.game.emit("hasPurchase");
                                    }
                                    else {
                                        console.log("当前地区没有内购1", country);
                                        platformConfig.hasPurchase = 0;
                                    }
                                });
                                return [2 /*return*/];
                            }
                            if (0 == isStoreList_1.length) {
                                platformConfig.hasPurchase = 1;
                                cc.game.emit("hasPurchase");
                            }
                            else if (isStoreList_1.includes(nation)) {
                                console.log("当前地区有内购2", nation);
                                platformConfig.hasPurchase = 1;
                            }
                            else {
                                console.log("当前地区没有内购2", nation);
                                platformConfig.hasPurchase = 0;
                            }
                            if ("CN" == nation) {
                                platformConfig.hasShare = 0;
                            }
                        }
                        else {
                            province = UserManager.User.get("province");
                            if (!province) {
                                ChallengeHttp.challengeHttp.getCountry().then(function (provinceCode) {
                                    console.log("省份", provinceCode);
                                    UserManager.User.set("province", provinceCode);
                                    UserManager.User.setTempData(UserConst.TempData.isFirst, true);
                                    _this.gotoGame();
                                });
                                return [2 /*return*/];
                            }
                        }
                        this.scheduleOnce(function () {
                            console.log("进入");
                            SceneManager.default.loadScene(SceneConst.SceneConst.Home);
                            if (PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE)) {
                                PlatformManager.Platform.showBanner();
                                _this.schedule(function () {
                                    PlatformManager.Platform.hideBanner();
                                    _this.scheduleOnce(function () {
                                        PlatformManager.Platform.showBanner();
                                    }, 0.1);
                                }, 25);
                            }
                        }, platformConfig.loadingDelay);
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.gotoGame = function () {
        UserManager.User.setTempData(UserConst.TempData.CURRENT_MODE, 0);
        UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, 1);
        SceneManager.default.loadScene(SceneConst.SceneConst.GAME);
    };
    App.prototype.judgeMainMode = function (modeID) {
        var firstStageFirstLevelID;
        var stage1LevelList = UserManager.User.get(UserConst.UserData.mode0LevelList_stage1ID) || [];
        var stage2LevelList = UserManager.User.get(UserConst.UserData.mode0LevelList_stage2ID) || [];
        var newStage1LevelList = [];
        var newStage2LevelList = [];
        if (modeID != 0) {
            return;
        }
        ConfigManager.Config.get(ConfigConst.ConfigConst.THEME + 0 + PlatformManager.Platform.getConfig().configSuffix).then(function (themeLevelConfigList) {
            if (PlatformManager.Platform.is(PlatformConst.EPlatform.WEB)) {
                for (var index = 0; index < themeLevelConfigList.length; index++) {
                    var levelConfig = themeLevelConfigList[index];
                    newStage1LevelList.push(levelConfig.stage1ID);
                    newStage2LevelList.push(levelConfig.stage2ID);
                }
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage1ID, newStage1LevelList);
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage2ID, newStage2LevelList);
                return;
            }
            if (themeLevelConfigList.length > stage1LevelList.length && stage1LevelList.length != 0) {
                for (var index = 0; index < themeLevelConfigList.length; index++) {
                    var levelConfig = themeLevelConfigList[index];
                    if (index > stage1LevelList.length - 1) {
                        newStage1LevelList.push(levelConfig.stage1ID);
                        newStage2LevelList.push(levelConfig.stage2ID);
                    }
                }
                newStage1LevelList.sort(function () { return 0.5 - Math.random(); });
                newStage2LevelList.sort(function () { return 0.5 - Math.random(); });
                newStage1LevelList = stage1LevelList.concat(newStage1LevelList);
                newStage2LevelList = stage2LevelList.concat(newStage2LevelList);
                console.log("有新增关卡");
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage1ID, newStage1LevelList);
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage2ID, newStage2LevelList);
                return;
            }
            if (stage1LevelList.length == 0) {
                var earlyStage1 = [];
                var earlyStage2 = [];
                var midStage1 = [];
                var midStage2 = [];
                var lateStage1 = [];
                var lateStage2 = [];
                var tailStage1 = [];
                var tailStage2 = [];
                for (var index = 0; index < themeLevelConfigList.length; index++) {
                    var levelConfig = themeLevelConfigList[index];
                    if (index == 0) {
                        firstStageFirstLevelID = levelConfig.stage1ID;
                    }
                    if (index < 5) {
                        earlyStage1.push(levelConfig.stage1ID);
                        earlyStage2.push(levelConfig.stage2ID);
                    }
                    else if (index < 10) {
                        midStage1.push(levelConfig.stage1ID);
                        midStage2.push(levelConfig.stage2ID);
                    }
                    else if (index < 50) {
                        lateStage1.push(levelConfig.stage1ID);
                        lateStage2.push(levelConfig.stage2ID);
                    }
                    else {
                        tailStage1.push(levelConfig.stage1ID);
                        tailStage2.push(levelConfig.stage2ID);
                    }
                }
                newStage1LevelList = earlyStage1.concat(midStage1).concat(lateStage1).concat(tailStage1);
                newStage2LevelList = earlyStage2.concat(midStage2).concat(lateStage2).concat(tailStage2);
                if (BmsManager.BMS.getKey("mainModeID")) {
                    newStage1LevelList = midStage1.concat(earlyStage1).concat(lateStage1);
                    newStage2LevelList = midStage2.concat(earlyStage2).concat(lateStage2);
                }
                else {
                    var firstLevelCurrentIndex = newStage1LevelList.indexOf(firstStageFirstLevelID);
                    var listFirstLevelID = newStage1LevelList[0];
                    newStage1LevelList[0] = firstStageFirstLevelID;
                    newStage1LevelList[firstLevelCurrentIndex] = listFirstLevelID;
                }
                console.log("没有新增关卡且是新用户");
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage1ID, newStage1LevelList);
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage2ID, newStage2LevelList);
            }
        });
    };
    App.prototype.guid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (placeholderChar) {
            var randomInt = (16 * Math.random()) | 0;
            return (placeholderChar == "x" ? randomInt : (3 & randomInt) | 8).toString(16);
        });
    };
    App.prototype.loadAssetsBundle = function (bundleName, onFinished) {
        var _this = this;
        cc.assetManager.loadBundle(bundleName, function (loadError, bundle) {
            if (loadError !== null) {
                console.log("[ResMgr]:Load AssetsBundle Error: " + bundleName);
                _this.abBunds[bundleName] = null;
            }
            else {
                console.log("[ResMgr]:Load AssetsBundle Success: " + bundleName);
                _this.abBunds[bundleName] = bundle;
            }
            if (onFinished) {
                onFinished();
            }
        });
    };
    __decorate([
        property(cc.Prefab)
    ], App.prototype, "loadingPrefab", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], App.prototype, "plantAtlas", void 0);
    __decorate([
        property([cc.TTFFont])
    ], App.prototype, "fonts", void 0);
    App = __decorate([
        ccclass
    ], App);
    return App;
}(cc.Component));
exports.default = App;

cc._RF.pop();