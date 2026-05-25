
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/App.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUcsVUFBVSxDQUFDLENBQUM7Z0JBQ2pFLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF4c0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ1k7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDUztJQUdsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztzQ0FDRTtJQVJ2QixHQUFHO1FBRFIsT0FBTztPQUNGLEdBQUcsQ0Eyc0JSO0lBQUQsVUFBQztDQTNzQkQsQUEyc0JDLENBM3NCaUIsRUFBRSxDQUFDLFNBQVMsR0Eyc0I3QjtBQUVELGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG5cbmNvbnN0IEh0dHBVdGlscyA9IHJlcXVpcmUoXCIuL0h0dHBVdGlsc1wiKTtcbmNvbnN0IENvbmZpZ0NvbnN0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29uc3RcIik7XG5jb25zdCBFdmVudENvbnN0ID0gcmVxdWlyZShcIi4vRXZlbnRDb25zdFwiKTtcbmNvbnN0IFBsYXRmb3JtQ29uc3QgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybUNvbnN0XCIpO1xuY29uc3QgVXNlckNvbnN0ID0gcmVxdWlyZShcIi4vVXNlckNvbnN0XCIpO1xuY29uc3QgTG9jYWxTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VDb25zdFwiKTtcbmNvbnN0IFRpbWVNYW5hZ2VyID0gcmVxdWlyZShcIi4vVGltZU1hbmFnZXJcIik7XG5jb25zdCBBdWRpb01hbmFnZXIgPSByZXF1aXJlKFwiLi9BdWRpb01hbmFnZXJcIik7XG5jb25zdCBCbXNNYW5hZ2VyID0gcmVxdWlyZShcIi4vQm1zTWFuYWdlclwiKTtcbmNvbnN0IENvbmZpZ01hbmFnZXIgPSByZXF1aXJlKFwiLi9Db25maWdNYW5hZ2VyXCIpO1xuY29uc3QgRXZlbnRNYW5hZ2VyID0gcmVxdWlyZShcIi4vRXZlbnRNYW5hZ2VyXCIpO1xuY29uc3QgTGFuZ3VhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTGFuZ3VhZ2VNYW5hZ2VyXCIpO1xuY29uc3QgUGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xuY29uc3QgUmVwb3J0TWFuYWdlciA9IHJlcXVpcmUoXCIuL1JlcG9ydE1hbmFnZXJcIik7XG5jb25zdCBUaXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vVGlwTWFuYWdlclwiKTtcbmNvbnN0IFVzZXJNYW5hZ2VyID0gcmVxdWlyZShcIi4vVXNlck1hbmFnZXJcIik7XG5jb25zdCBDaGFsbGVuZ2VTeXN0ZW0gPSByZXF1aXJlKFwiLi9DaGFsbGVuZ2VTeXN0ZW1cIik7XG5jb25zdCBQYXltZW50U3lzdGVtID0gcmVxdWlyZShcIi4vUGF5bWVudFN5c3RlbVwiKTtcbmNvbnN0IFZJUFN5c3RlbSA9IHJlcXVpcmUoXCIuL1ZJUFN5c3RlbVwiKTtcbmNvbnN0IENoYWxsZW5nZUh0dHAgPSByZXF1aXJlKFwiLi9DaGFsbGVuZ2VIdHRwXCIpO1xuY29uc3QgQ29weVJpZ2h0RGlhbG9nID0gcmVxdWlyZShcIi4vQ29weVJpZ2h0RGlhbG9nXCIpO1xuY29uc3QgT1BQT0FuZHJvaWRBZFV0aWxzID0gcmVxdWlyZShcIi4vT1BQT0FuZHJvaWRBZFV0aWxzXCIpO1xuY29uc3QgWE1BRFV0aWxzID0gcmVxdWlyZShcIi4vWE1BRFV0aWxzXCIpO1xuY29uc3QgTG9jYWxTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZU1hbmFnZXJcIik7XG5jb25zdCBTY2VuZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9TY2VuZU1hbmFnZXJcIik7XG5jb25zdCBTY2VuZUNvbnN0ID0gcmVxdWlyZShcIi4vU2NlbmVDb25zdFwiKTtcblxuY29uc3QgRk9OVF9JTkRFWF9CWV9MQU5HID0ge1xuICAgIHpoOiAwLFxuICAgIGVuOiAwLFxuICAgIGphOiAxLFxuICAgIHR3OiAyXG59O1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuY2xhc3MgQXBwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxvYWRpbmdQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXG4gICAgcGxhbnRBdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5UVEZGb250XSlcbiAgICBmb250czogY2MuVFRGRm9udFtdID0gW107XG5cbiAgICBmdWxsQWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gICAgaW50ZXJuYWxEZWZhdWx0Qk1TOiBhbnkgPSB7XG4gICAgICAgIGlzQXVkaXRpbmc6IDAsXG4gICAgICAgIGlzQXVkaXRpbmdMZXZlbE1hcDogMSxcbiAgICAgICAgY29uZmlnU3VmZml4OiBcIlwiLFxuICAgICAgICBUaUxpOiA2MCxcbiAgICAgICAgV3V4aWFuVGlMaTogMSxcbiAgICAgICAgQnVjaG9uZ1RpTGk6IDIwLFxuICAgICAgICBmdWxsQWRzVHlwZTogMCxcbiAgICAgICAgZnVsbFNjcmVlbkFkOiBcIm5vXCIsXG4gICAgICAgIEFkSW50ZXJ2YWxzOiAwLFxuICAgICAgICBiYW5uZXJBZEludGVydmFsczogMCxcbiAgICAgICAgc3RhcnRXaW5GdWxsU2NyZWVuQWQ6IDMsXG4gICAgICAgIHNwYWNlV2luRnVsbFNjcmVlbkFkOiAzLFxuICAgICAgICBzcGFjZVdpbkZ1bGxTY3JlZW5BZE5EOiAzLFxuICAgICAgICBzdGFydExldmVsV2luRnVsbFNjcmVlbkFkczogMTEsXG4gICAgICAgIHNwYWNlTGV2ZWxXaW5GdWxsU2NyZWVuQWQ6IDMsXG4gICAgICAgIEdNOiAwLFxuICAgICAgICB1Z2M6IDAsXG4gICAgICAgIHVnY2FkOiAwLFxuICAgICAgICBuZXdtb2RlYWQ6IDEsXG4gICAgICAgIGV2YWx1YXRlbHY6IFsxMjAwLCAyNTAwLCA1ZTNdLFxuICAgICAgICBldmFsdWF0ZWJ0bmRlbGF5OiAyLFxuICAgICAgICBldmFsdWF0ZXN0YXI6IDUsXG4gICAgICAgIGtleVZpZGVvOiA3LFxuICAgICAgICBBbGxUaGVtZVVubG9jazogMCxcbiAgICAgICAgVW5sb2NrVGhlbWVNYWluTHY6IFsxMCwgMTBdLFxuICAgICAgICBVbmxvY2tUaGVtZVN1Ykx2OiBbNSwgMTBdLFxuICAgICAgICBVbmxvY2tUaGVtZUxpc3Q6IFsxLCA2LCA3LCA0LCAzLCAyLCA1XVxuICAgIH07XG5cbiAgICBleHRlcm5hbERlZmF1bHRCTVM6IGFueSA9IHtcbiAgICAgICAgaXNBdWRpdGluZzogMCxcbiAgICAgICAgaXNBdWRpdGluZ0xldmVsTWFwOiAxLFxuICAgICAgICBjb25maWdTdWZmaXg6IFwiXCIsXG4gICAgICAgIFRpTGk6IDAsXG4gICAgICAgIFd1eGlhblRpTGk6IDAsXG4gICAgICAgIEJ1Y2hvbmdUaUxpOiAyMCxcbiAgICAgICAgZnVsbEFkc1R5cGU6IDAsXG4gICAgICAgIGZ1bGxTY3JlZW5BZDogXCJhbGxcIixcbiAgICAgICAgQWRJbnRlcnZhbHM6IDAsXG4gICAgICAgIGJhbm5lckFkSW50ZXJ2YWxzOiAwLFxuICAgICAgICBzdGFydFdpbkZ1bGxTY3JlZW5BZDogMyxcbiAgICAgICAgc3BhY2VXaW5GdWxsU2NyZWVuQWQ6IDEsXG4gICAgICAgIHNwYWNlV2luRnVsbFNjcmVlbkFkTkQ6IDEsXG4gICAgICAgIHN0YXJ0TGV2ZWxXaW5GdWxsU2NyZWVuQWRzOiAxMSxcbiAgICAgICAgc3BhY2VMZXZlbFdpbkZ1bGxTY3JlZW5BZDogMSxcbiAgICAgICAgR006IDAsXG4gICAgICAgIHVnYzogMCxcbiAgICAgICAgdWdjYWQ6IDAsXG4gICAgICAgIG5ld21vZGVhZDogMSxcbiAgICAgICAgZXZhbHVhdGVsdjogWzEyMDAsIDI1MDAsIDVlM10sXG4gICAgICAgIGV2YWx1YXRlYnRuZGVsYXk6IDIsXG4gICAgICAgIGV2YWx1YXRlc3RhcjogNSxcbiAgICAgICAga2V5VmlkZW86IDcsXG4gICAgICAgIEFsbFRoZW1lVW5sb2NrOiAwLFxuICAgICAgICBVbmxvY2tUaGVtZU1haW5MdjogWzEwLCAxMF0sXG4gICAgICAgIFVubG9ja1RoZW1lU3ViTHY6IFs1LCAxMF0sXG4gICAgICAgIFVubG9ja1RoZW1lTGlzdDogWzEsIDYsIDcsIDQsIDMsIDIsIDVdXG4gICAgfTtcblxuICAgIGlzRW50ZXJNYWluOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhYkJ1bmRzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdE1ncigpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICBuZXcgQ29weVJpZ2h0RGlhbG9nLmRlZmF1bHQoKS5pbml0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mdWxsQWRDb3VudGVyKys7XG4gICAgICAgIH0sIDEpO1xuICAgICAgICB0aGlzLmxvYWRMZXZlbFN1YigpO1xuICAgIH1cblxuICAgIGxvYWRMZXZlbFN1YigpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua1j+iniOWZqOeOr+Wig1wiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxTdWIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3lhbPljaHlrZDljIUuLi4uLi5cIik7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShcInNjcmlwdFwiLCAobG9hZEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYWRFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltSZXNNZ3JdOkxvYWQgQXNzZXRzQnVuZGxlIEVycm9yOiBzY3JpcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3lrozmiJBcIiwgXCJzY3JpcHRcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LmxldmVsU3ViID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBzdGFydE9wcG8oKSB7XG4gICAgICAgIGNjLmdhbWUub24oXCJvbkJhbm5lclJlbW92ZWRcIiwgdGhpcy5vbkJhbm5lclJlbW92ZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGNhcmRBbW91bnQoY2FyZEFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5pyN5Yqh5ZmoW2NhcmRBbW91bnRdXCIsIGNhcmRBbW91bnQpO1xuICAgICAgICB0aGlzLnNhdmVTZXJ2ZXJEYXRhKExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FyZEFtb3VudCwgY2FyZEFtb3VudCk7XG4gICAgfVxuXG4gICAgc2F2ZVNlcnZlckRhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdmFsdWVTdHIgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB1c2VySWQgPSBVc2VyTWFuYWdlci5Vc2VyLmdldChcImdvb2dsZUlEXCIpIHx8IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwidXVpZFwiKTtcbiAgICAgICAgY29uc3QgZmxhZyA9IFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnO1xuICAgICAgICBCbXNNYW5hZ2VyLkJNUy5zYXZlU2VydmVyRGF0YShmbGFnLCB1c2VySWQsIGtleSwgdmFsdWVTdHIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkv53lrZhcIiArIGtleSArIFwi5oiQ5YqfOlwiICsgdmFsdWVTdHIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJhbm5lclJlbW92ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFubmVyQWRDb3VudGVyXCIsIDApO1xuICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uYmFubmVyQWRDb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBzaG93SW50ZXJzdGl0aWFsRmVlZFRpbWVyKCkge1xuICAgICAgICBjb25zdCBhdXRvUG9wdXBJbnRlcnZhbCA9IEJtc01hbmFnZXIuQk1TLmdldEtleShcInRpbWVUQ1wiKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLplb/ml7bpl7TmsqHmk43kvZws6Ieq5Yqo5by55Ye65o+S5bGPXCIpO1xuICAgICAgICAgICAgT1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0ludGVyc3RpdGlhbEZlZWQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ludGVyc3RpdGlhbEZlZWRUaW1lcjIoKTtcbiAgICAgICAgfSwgYXV0b1BvcHVwSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIHNob3dJbnRlcnN0aXRpYWxGZWVkVGltZXIyKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBPUFBPQW5kcm9pZEFkVXRpbHMuT1BQT0FuZHJvaWRBZC5yZW1vdmVJbnRlcnN0aXRpYWxGZWVkKCk7XG4gICAgICAgIH0sIDMwKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgT1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0ludGVyc3RpdGlhbEZlZWQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ludGVyc3RpdGlhbEZlZWRUaW1lcjIoKTtcbiAgICAgICAgfSwgMzEpO1xuICAgIH1cblxuICAgIGluaXRNZ3IoKSB7XG4gICAgICAgIFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zdGFydEluaXQoKTtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBMYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5pbnN0YW5jZTtcbiAgICAgICAgbGFuZ3VhZ2UuaW5pdCgpO1xuICAgICAgICBsYW5ndWFnZS5zZXRGb250KHRoaXMuZm9udHNbRk9OVF9JTkRFWF9CWV9MQU5HW2xhbmd1YWdlLmxhbl1dKTtcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmRlZmF1bHQuaW5pdCh0aGlzLmxvYWRpbmdQcmVmYWIpO1xuICAgICAgICBBdWRpb01hbmFnZXIuQXVkaW8uaW5pdCgpO1xuICAgICAgICBSZXBvcnRNYW5hZ2VyLlJlcG9ydC5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdFN0b3BEZWJ1ZygpO1xuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuaW5pdCh7XG4gICAgICAgICAgICBiYWNrVGltZXM6IDAsXG4gICAgICAgICAgICBpc1JlY2VpdmVWSVA6IDAsXG4gICAgICAgICAgICB0b2RheUNsaWNrU2hpcDogMCxcbiAgICAgICAgICAgIHRvZGF5U2hpcEV4cGlyZTogMCxcbiAgICAgICAgICAgIHNoaXBTdGFydFRpbWU6IDAsXG4gICAgICAgICAgICBvcGVuU2hpcDogMCxcbiAgICAgICAgICAgIHRvZGF5Q2xpY2tQbGFuOiAwLFxuICAgICAgICAgICAgdG9kYXlDbGlja0NoYWxsZW5nZTogMCxcbiAgICAgICAgICAgIHRvZGF5UmVjZWl2ZUNhcmQ6IDAsXG4gICAgICAgICAgICB0b2RheVNpZ25JbjogMCxcbiAgICAgICAgICAgIHRvZGF5T3BlblNpZ25JbjogMCxcbiAgICAgICAgICAgIHRvZGF5U2lnbkluVmlkZW86IDBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5pdEJNUygpO1xuICAgIH1cblxuICAgIGluaXRTdG9wRGVidWcoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIGNjLnZpZXcuZW5hYmxlQXV0b0Z1bGxTY3JlZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50KCkge1xuICAgICAgICBjYy5nYW1lLm9uKFwiYWROb3RSZWFkeVwiLCB0aGlzLmFkTm90UmVhZHksIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiaW9zQXBwbGljYXRpb25EaWRCZWNvbWVBY3RpdmVcIiwgdGhpcy5pb3NBcHBsaWNhdGlvbkRpZEJlY29tZUFjdGl2ZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJvbkZvcmVncm91bmRcIiwgdGhpcy5vbkZvcmVncm91bmQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwibG9jYWxTdG9yYWdlX2NhcmRBbW91bnRcIiwgdGhpcy5jYXJkQW1vdW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImNoZWNrRnVsbEFkX25vUmVzdWx0XCIsIHRoaXMuY2hlY2tGdWxsQWRfbm9SZXN1bHQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic2hvd05vQURcIiwgdGhpcy5zaG93Tm9BRCwgdGhpcyk7XG4gICAgICAgIEV2ZW50TWFuYWdlci5FdmVudC5vbihFdmVudENvbnN0LmRlZmF1bHQuY2hlY2tGdWxsQWQsIHRoaXMuY2hlY2tGdWxsQWQsIHRoaXMpO1xuICAgICAgICBFdmVudE1hbmFnZXIuRXZlbnQub24oRXZlbnRDb25zdC5kZWZhdWx0LmNoZWNrRnVsbEFkX3Jlc3VsdCwgdGhpcy5jaGVja0Z1bGxBZF9yZXN1bHQsIHRoaXMpO1xuICAgIH1cblxuICAgIGNoZWNrRnVsbEFkKCkge1xuICAgICAgICBjb25zdCBub3dNcyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICh3aW5kb3cubGFzdFZpZGVvQWRUaW1lICYmIChub3dNcyAtIHdpbmRvdy5sYXN0VmlkZW9BZFRpbWUpIC8gMWUzIDwgNjApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT0g5o+S5bGP5qOA5rWL77yM6KeG6aKR5bm/5ZGK6Ze06ZqU5bCP5LqONjDnp5LvvIzkuI3lsZXnpLrmj5LlsY9cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuaXNSZXN1bHRJbnNlcnQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaW5zZXJ0Q29vbGRvd24gPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJBZEludGVydmFsc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCI9PSDmj5LlsY/mo4DmtYsgY2Tpl7TpmpTkuI3lsZXnpLrmj5LlsY/vvIxjZOiuoeaXtjogXCIgKyB0aGlzLmZ1bGxBZENvdW50ZXIgKyBcIu+8jGNk6Ze06ZqUXCIgKyBpbnNlcnRDb29sZG93bik7XG4gICAgICAgIGlmICh0aGlzLmZ1bGxBZENvdW50ZXIgPCBpbnNlcnRDb29sZG93bikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PSDmj5LlsY9jZOS4re+8jOaXoOazleinpuWPkVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcIm5vXCIgIT0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiZnVsbFNjcmVlbkFkXCIpKSB7XG4gICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICAgICAgdGhpcy5mdWxsQWRDb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dOb0FEKCkge1xuICAgICAgICB3aW5kb3cuaGlkZUlzTmVlZEluc2VydCA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tGdWxsQWRfbm9SZXN1bHQocmVzdGFydENvdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgbm93TXMgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAod2luZG93Lmxhc3RWaWRlb0FkVGltZSAmJiAobm93TXMgLSB3aW5kb3cubGFzdFZpZGVvQWRUaW1lKSAvIDFlMyA8IDYwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09IOaPkuWxj+ajgOa1i++8jOinhumikeW5v+WRiumXtOmalOWwj+S6jjYw56eS77yM5LiN5bGV56S65o+S5bGPXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmlzUmVzdWx0SW5zZXJ0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGluc2VydENvb2xkb3duID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiQWRJbnRlcnZhbHNcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT0g5o+S5bGP5qOA5rWLIGNk6Ze06ZqU5LiN5bGV56S65o+S5bGP77yMY2TorqHml7Y6IFwiICsgdGhpcy5mdWxsQWRDb3VudGVyICsgXCLvvIxjZOmXtOmalFwiICsgaW5zZXJ0Q29vbGRvd24pO1xuICAgICAgICBpZiAodGhpcy5mdWxsQWRDb3VudGVyIDwgaW5zZXJ0Q29vbGRvd24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT0g5o+S5bGPY2TkuK3vvIzml6Dms5Xop6blj5FcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXCJub1wiICE9IEJtc01hbmFnZXIuQk1TLmdldEtleShcImZ1bGxTY3JlZW5BZFwiKSkge1xuICAgICAgICAgICAgY29uc3QgcmVwbGF5U3RhcnRUaHJlc2hvbGQgPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJSZXBsYXlTdGFydFNjcmVlbkFkXCIpO1xuICAgICAgICAgICAgaWYgKHJlcGxheVN0YXJ0VGhyZXNob2xkID09IDAgfHwgcmVzdGFydENvdW50ID49IHJlcGxheVN0YXJ0VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PSDmj5LlsY9jaGVja0Z1bGxBZF9ub1Jlc3VsdFwiKTtcbiAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbEFkQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0Z1bGxBZF9yZXN1bHQoKSB7XG4gICAgICAgIGNvbnN0IG5vd01zID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHdpbmRvdy5sYXN0VmlkZW9BZFRpbWUgJiYgKG5vd01zIC0gd2luZG93Lmxhc3RWaWRlb0FkVGltZSkgLyAxZTMgPCA2MCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PSDmj5LlsY/mo4DmtYvvvIzop4bpopHlub/lkYrpl7TpmpTlsI/kuo42MOenku+8jOS4jeWxleekuuaPkuWxj1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluc2VydENvb2xkb3duID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiQWRJbnRlcnZhbHNcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT0g5o+S5bGP5qOA5rWLIGNk6Ze06ZqU5LiN5bGV56S65o+S5bGP77yMY2TorqHml7Y6IFwiICsgdGhpcy5mdWxsQWRDb3VudGVyICsgXCLvvIxjZOmXtOmalFwiICsgaW5zZXJ0Q29vbGRvd24pO1xuICAgICAgICBpZiAodGhpcy5mdWxsQWRDb3VudGVyIDwgaW5zZXJ0Q29vbGRvd24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT0g5o+S5bGPY2TkuK3vvIzml6Dms5Xop6blj5FcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSBVc2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKTtcbiAgICAgICAgY29uc3Qgc3RhcnRXaW5JbnNlcnRMZXZlbCA9IEJtc01hbmFnZXIuQk1TLmdldEtleShcInN0YXJ0V2luRnVsbFNjcmVlbkFkXCIpO1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuQWRTd2l0Y2ggPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJmdWxsU2NyZWVuQWRcIik7XG4gICAgICAgIGNvbnN0IGhhc0Z1bGxTY3JlZW5BZENvbmZpZyA9IEJtc01hbmFnZXIuQk1TLmNoZWNrS2V5KFwiZnVsbFNjcmVlbkFkXCIpO1xuICAgICAgICBjb25zdCBzdGFydExldmVsV2luSW5zZXJ0ID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwic3RhcnRMZXZlbFdpbkZ1bGxTY3JlZW5BZHNcIik7XG4gICAgICAgIGNvbnN0IHNwYWNlTGV2ZWxXaW5JbnNlcnQgPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJzcGFjZUxldmVsV2luRnVsbFNjcmVlbkFkXCIpO1xuICAgICAgICBjb25zdCBzcGFjZVdpbkluc2VydERheTEgPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJzcGFjZVdpbkZ1bGxTY3JlZW5BZFwiKTtcbiAgICAgICAgY29uc3Qgc3BhY2VXaW5JbnNlcnRBZnRlckRheTEgPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJzcGFjZVdpbkZ1bGxTY3JlZW5BZE5EXCIpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGN1cnJlbnRMZXZlbCA+PSBzdGFydFdpbkluc2VydExldmVsICYmXG4gICAgICAgICAgICAoKFwibnVtYmVyXCIgPT0gdHlwZW9mIGZ1bGxTY3JlZW5BZFN3aXRjaCAmJiBmdWxsU2NyZWVuQWRTd2l0Y2gpIHx8XG4gICAgICAgICAgICAgICAgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGZ1bGxTY3JlZW5BZFN3aXRjaCAmJiBoYXNGdWxsU2NyZWVuQWRDb25maWcpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3REYXlEYXRlID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLkZJUlNUX0RBWV9EQVRFKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGV2ZWwgPj0gc3RhcnRMZXZlbFdpbkluc2VydCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TGV2ZWwgJSBzcGFjZUxldmVsV2luSW5zZXJ0ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmj5LlsY8xXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pc1Jlc3VsdEluc2VydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mdWxsQWRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHRvZGF5RGF0ZSAtIGZpcnN0RGF5RGF0ZSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCAlIHNwYWNlV2luSW5zZXJ0QWZ0ZXJEYXkxID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmj5LlsY8yXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pc1Jlc3VsdEluc2VydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mdWxsQWRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRMZXZlbCAlIHNwYWNlV2luSW5zZXJ0RGF5MSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmj5LlsY8zXCIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaXNSZXN1bHRJbnNlcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bGxBZENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvcmVncm91bmQoKSB7XG4gICAgICAgIFhNQURVdGlscy5YTUFELm9uRm9yZWdyb3VuZCgpO1xuICAgIH1cblxuICAgIGlvc0FwcGxpY2F0aW9uRGlkQmVjb21lQWN0aXZlKCkge1xuICAgICAgICBjb25zdCBzcGxhc2hPcGVuRGF5VGhyZXNob2xkID0gQm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwic3BsYXNoXCIpO1xuICAgICAgICBpZiAoIXNwbGFzaE9wZW5EYXlUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvZ2luRGF5cyA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5sb2dpbkRheXNUaW1lcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55m76ZmG5aSp5pWwXCIsIGxvZ2luRGF5cywgXCJzcGxhc2hcIiwgc3BsYXNoT3BlbkRheVRocmVzaG9sZCk7XG4gICAgICAgIGlmIChsb2dpbkRheXMgPj0gc3BsYXNoT3BlbkRheVRocmVzaG9sZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDlvIDlsY9cIik7XG4gICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd09wZW5BZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWROb3RSZWFkeSgpIHtcbiAgICAgICAgVGlwTWFuYWdlci5UaXAuc2hvdyhMYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLmmoLml6Dlub/lkYpcIikpO1xuICAgIH1cblxuICAgIGluaXRCTVMoKSB7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtQ29uZmlnID0gUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IGNjLnN5cy5wbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgaXNJT1MgPSBwbGF0Zm9ybSA9PSBjYy5zeXMuSVBIT05FIHx8IHBsYXRmb3JtID09IGNjLnN5cy5JUEFEO1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIGNvbnN0IGlvc1ZlcnNpb24gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiQXBwQ29udHJvbGxlclwiLCBcImdhaW5JT1NCTVNWZXJzaW9uXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLojrflvpfniYjmnKzlj7dcIiwgaW9zVmVyc2lvbik7XG4gICAgICAgICAgICBCbXNNYW5hZ2VyLkJNUy5zZXREZWZhdWx0RGF0YSh3aW5kb3cuaGFpd2FpID8gdGhpcy5leHRlcm5hbERlZmF1bHRCTVMgOiB0aGlzLmludGVybmFsRGVmYXVsdEJNUyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXCJ3bGdjemh3YXBrXCIgPT0gcGxhdGZvcm1Db25maWcuZmxhZykge1xuICAgICAgICAgICAgQm1zTWFuYWdlci5CTVMuc2V0RGVmYXVsdERhdGEoe1xuICAgICAgICAgICAgICAgIGlzU3RvcmU6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEJtc01hbmFnZXIuQk1TLnNldERlZmF1bHREYXRhKHtcbiAgICAgICAgICAgICAgICBpc1N0b3JlOiBbXCJVU1wiLCBcIkdCXCIsIFwiQ0FcIiwgXCJERVwiLCBcIkFVXCIsIFwiSlBcIiwgXCJUV1wiLCBcIkZSXCIsIFwiSEtcIl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuKTnp5LmsqHot7Povaznm7TmjqXov5vlhaVcIik7XG4gICAgICAgICAgICB0aGlzLnN1Y0VudGVyTWFpbigpO1xuICAgICAgICB9LCAzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTa2luKCkge1xuICAgICAgICBjb25zdCBza2luTGlzdCA9XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVXNlckRhdGEuc2tpbkxpc3QpIHx8IHtcbiAgICAgICAgICAgICAgICAwOiBbMF0sXG4gICAgICAgICAgICAgICAgMTogWzBdLFxuICAgICAgICAgICAgICAgIDI6IFs5XSxcbiAgICAgICAgICAgICAgICAzOiBbMF0sXG4gICAgICAgICAgICAgICAgNDogWzBdLFxuICAgICAgICAgICAgICAgIDU6IFswXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLnNraW5MaXN0LCBza2luTGlzdCk7XG5cbiAgICAgICAgY29uc3QgdXNlU2tpbklETGlzdCA9XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldChVc2VyQ29uc3QuVXNlckRhdGEudXNlU2tpbklETGlzdCkgfHwge1xuICAgICAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAgICAgMTogMCxcbiAgICAgICAgICAgICAgICAyOiA5LFxuICAgICAgICAgICAgICAgIDM6IDAsXG4gICAgICAgICAgICAgICAgNDogMCxcbiAgICAgICAgICAgICAgICA1OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEudXNlU2tpbklETGlzdCwgdXNlU2tpbklETGlzdCk7XG5cbiAgICAgICAgY29uc3QgbG9ja1NraW5MaXN0ID1cbiAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5nZXRMb2NrU2tpbkxpc3QpIHx8IHtcbiAgICAgICAgICAgICAgICAwOiBbXSxcbiAgICAgICAgICAgICAgICAxOiBbXSxcbiAgICAgICAgICAgICAgICAyOiBbXSxcbiAgICAgICAgICAgICAgICAzOiBbXSxcbiAgICAgICAgICAgICAgICA0OiBbXSxcbiAgICAgICAgICAgICAgICA1OiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLmdldExvY2tTa2luTGlzdCwgbG9ja1NraW5MaXN0KTtcbiAgICB9XG5cbiAgICBhc3luYyBzdWNFbnRlck1haW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW50ZXJNYWluKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzRW50ZXJNYWluID0gdHJ1ZTtcbiAgICAgICAgZ2FtZS5wbGF0ZUF0bGFzID0gdGhpcy5wbGFudEF0bGFzO1xuICAgICAgICBjb25zdCB1c2VyVVVJRCA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwidXVpZFwiKSB8fCB0aGlzLmd1aWQoKTtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoXCJ1dWlkXCIsIHVzZXJVVUlEKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1dWlkXCIsIHVzZXJVVUlEKTtcbiAgICAgICAgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnRhSW5pdCh1c2VyVVVJRCk7XG5cbiAgICAgICAgY29uc3Qgb3Blbk51bSA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5PcGVuTnVtKSB8fCAxO1xuICAgICAgICBjb25zdCBwbGF5RGF5cyA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5QbGF5RGF5cykgfHwgMTtcbiAgICAgICAgaWYgKG9wZW5OdW0gPT0gMSkge1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBcInVzZXJfTG9naW5cIiwge1xuICAgICAgICAgICAgICAgIElzTmV3OiB0cnVlLFxuICAgICAgICAgICAgICAgIE9wZW5OdW06IDEsXG4gICAgICAgICAgICAgICAgUGxheURheXM6IDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLk9wZW5OdW0sIG9wZW5OdW0gKyAxKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgXCJ1c2VyX0xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgICBJc05ldzogZmFsc2UsXG4gICAgICAgICAgICAgICAgT3Blbk51bTogb3Blbk51bSArIDEsXG4gICAgICAgICAgICAgICAgUGxheURheXM6IHBsYXlEYXlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU2tpbigpO1xuXG4gICAgICAgIC8vIGlmICgwICE9IChhdXRvRnVsbFNjcmVlbkFkSW50ZXJ2YWwgPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJBdXRvRnVsbFNjcmVlbkFkXCIpKSkge1xuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICAvLyAgICAgfSwgYXV0b0Z1bGxTY3JlZW5BZEludGVydmFsKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoXG4gICAgICAgIC8vICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoUGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uQU5EUk9JRF9HT09HTEUpICYmXG4gICAgICAgIC8vICAgICAhVXNlck1hbmFnZXIuVXNlci5nZXQoXCJnb29nbGVJRFwiKVxuICAgICAgICAvLyApIHtcbiAgICAgICAgLy8gICAgIGdvb2dsZUlkID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcbiAgICAgICAgLy8gICAgICAgICBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsXG4gICAgICAgIC8vICAgICAgICAgXCJnZXRVc2VySWRcIixcbiAgICAgICAgLy8gICAgICAgICBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCJcbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChcImdvb2dsZUlEXCIsIGdvb2dsZUlkKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi6LC35q2MaWRcIiwgZ29vZ2xlSWQpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLlt7LmnInosLfmrYxJRFwiLCBVc2VyTWFuYWdlci5Vc2VyLmdldChcImdvb2dsZUlEXCIpKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0cnkge1xuICAgICAgICAvLyAgICAgcHJvZHVjdExpc3RKc29uU3RyID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcbiAgICAgICAgLy8gICAgICAgICBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsXG4gICAgICAgIC8vICAgICAgICAgXCJnZXRQcm9kdWN0TGlzdEpzb25TdHJcIixcbiAgICAgICAgLy8gICAgICAgICBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCJcbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdldFByb2R1Y3RMaXN0SnNvblN0clwiLCBwcm9kdWN0TGlzdEpzb25TdHIpO1xuICAgICAgICAvLyAgICAgd2luZG93LmdldFByb2R1Y3RMaXN0SnNvblN0ciA9IEpTT04ucGFyc2UocHJvZHVjdExpc3RKc29uU3RyKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2hlY2tJbkFwcE9yZGVyLWVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IHNlcnZlclRpbWVSZXNwb25zZSA9IGF3YWl0IEh0dHBVdGlscy5kZWZhdWx0LmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVSZXNwb25zZSkge1xuICAgICAgICAgICAgYXdhaXQgVGltZU1hbmFnZXIuZGVmYXVsdC5pbml0KHNlcnZlclRpbWVSZXNwb25zZS5kYXRhLnRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgVklQU3lzdGVtLmRlZmF1bHQuaW5pdCgpO1xuICAgICAgICBQYXltZW50U3lzdGVtLmRlZmF1bHQuaW5pdCgpO1xuICAgICAgICBDaGFsbGVuZ2VTeXN0ZW0uZGVmYXVsdC5pbml0KCk7XG5cbiAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNpdHlMaXN0Q29tcGF0aWJsZSk7XG4gICAgICAgIGNvbnN0IGNpdHlMaXN0ID0gTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNpdHlMaXN0KSB8fCBbXTtcbiAgICAgICAgY29uc3QgY2l0eUNvbmZpZyA9IGF3YWl0IENvbmZpZ01hbmFnZXIuQ29uZmlnLmdldChDb25maWdDb25zdC5Db25maWdDb25zdC5DaXR5KTtcblxuICAgICAgICBjb25zdCBsZXZlbExpc3RMb29wVGltZXMgPSBVc2VyTWFuYWdlci5Vc2VyLmdldChcImxldmVsTGlzdExvb3BUaW1lc1wiKSB8fCB7fTtcbiAgICAgICAgaWYgKCFsZXZlbExpc3RMb29wVGltZXNbMF0pIHtcbiAgICAgICAgICAgIGxldmVsTGlzdExvb3BUaW1lc1swXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGV2ZWxMaXN0ID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QpIHx8IHt9O1xuICAgICAgICBpZiAoIWxldmVsTGlzdFswXSkge1xuICAgICAgICAgICAgbGV2ZWxMaXN0WzBdID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRoZW1lQ29uZmlnID0gYXdhaXQgQ29uZmlnTWFuYWdlci5Db25maWcuZ2V0KFxuICAgICAgICAgICAgQ29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyAwICsgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmNvbmZpZ1N1ZmZpeFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhZ2VJbmRleCA9IGxldmVsTGlzdFswXSArIGxldmVsTGlzdExvb3BUaW1lc1swXSAqIHRoZW1lQ29uZmlnLmxlbmd0aDtcbiAgICAgICAgY2l0eUNvbmZpZy5zb3J0KChsZWZ0LCByaWdodCkgPT4gbGVmdC5zb3J0IC0gcmlnaHQuc29ydCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGlqaVwiLCBjdXJyZW50U3RhZ2VJbmRleCk7XG4gICAgICAgIGlmIChjdXJyZW50U3RhZ2VJbmRleCAmJiBjdXJyZW50U3RhZ2VJbmRleCA+IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50U3RhZ2VJbmRleCAtIDI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaXR5SWQgPSBjaXR5Q29uZmlnW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICBpZiAoIWNpdHlMaXN0LmluY2x1ZGVzKGNpdHlJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eUxpc3QucHVzaChjaXR5SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBMb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ2l0eUxpc3QsIGNpdHlMaXN0KTtcblxuICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKFBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLkFORFJPSURfR09PR0xFKSkge1xuICAgICAgICAgICAgQm1zTWFuYWdlci5CTVMuZ2V0U2VydmVyRGF0YShcbiAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZmxhZyxcbiAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLmdldChcImdvb2dsZUlEXCIpIHx8IHVzZXJVVUlELFxuICAgICAgICAgICAgICAgIFVzZXJDb25zdC5Vc2VyRGF0YS5ib3JlVGltZXMgK1xuICAgICAgICAgICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICAgICAgICAgIFVzZXJDb25zdC5Vc2VyRGF0YS50aXBUaW1lcyArXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgICAgICAgICAgVXNlckNvbnN0LlVzZXJEYXRhLnNjcmV3Qm94VGltZXMgK1xuICAgICAgICAgICAgICAgICAgICBcIixcIiArXG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FyZEFtb3VudFxuICAgICAgICAgICAgKS50aGVuKChzZXJ2ZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRTZXJ2ZXJEYXRhXCIsIHNlcnZlckRhdGEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYm9yZVRpbWVzID1cbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSBzZXJ2ZXJEYXRhW1VzZXJDb25zdC5Vc2VyRGF0YS5ib3JlVGltZXNdIHx8XG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihzZXJ2ZXJEYXRhW1VzZXJDb25zdC5Vc2VyRGF0YS5ib3JlVGltZXNdKSA8PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTnVtYmVyKHNlcnZlckRhdGFbVXNlckNvbnN0LlVzZXJEYXRhLmJvcmVUaW1lc10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFRpbWVzID1cbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PSBzZXJ2ZXJEYXRhW1VzZXJDb25zdC5Vc2VyRGF0YS50aXBUaW1lc10gfHxcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHNlcnZlckRhdGFbVXNlckNvbnN0LlVzZXJEYXRhLnRpcFRpbWVzXSkgPD0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE51bWJlcihzZXJ2ZXJEYXRhW1VzZXJDb25zdC5Vc2VyRGF0YS50aXBUaW1lc10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmV3Qm94VGltZXMgPVxuICAgICAgICAgICAgICAgICAgICBudWxsID09IHNlcnZlckRhdGFbVXNlckNvbnN0LlVzZXJEYXRhLnNjcmV3Qm94VGltZXNdIHx8XG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihzZXJ2ZXJEYXRhW1VzZXJDb25zdC5Vc2VyRGF0YS5zY3Jld0JveFRpbWVzXSkgPD0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE51bWJlcihzZXJ2ZXJEYXRhW1VzZXJDb25zdC5Vc2VyRGF0YS5zY3Jld0JveFRpbWVzXSk7XG5cbiAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEuYm9yZVRpbWVzLCBib3JlVGltZXMpO1xuICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS50aXBUaW1lcywgdGlwVGltZXMpO1xuICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5zY3Jld0JveFRpbWVzLCBzY3Jld0JveFRpbWVzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRBbW91bnQgPVxuICAgICAgICAgICAgICAgICAgICBudWxsID09IHNlcnZlckRhdGFbTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50XSB8fFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc2VydmVyRGF0YVtMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhcmRBbW91bnRdKSA8PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTnVtYmVyKHNlcnZlckRhdGFbTG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50XSk7XG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldChMb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhcmRBbW91bnQsIGNhcmRBbW91bnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0T3BwbygpO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybUNvbmZpZyA9IFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKTtcbiAgICAgICAgaWYgKFwiaGFpd2FpXCIgPT0gcGxhdGZvcm1Db25maWcucmFuaykge1xuICAgICAgICAgICAgY29uc3QgaXNTdG9yZUxpc3QgPSBCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJpc1N0b3JlXCIpO1xuICAgICAgICAgICAgbGV0IG5hdGlvbiA9IFVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwibmF0aW9uXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm92aW5jZVwiLCBuYXRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc1N0b3JlXCIsIGlzU3RvcmVMaXN0KTtcblxuICAgICAgICAgICAgaWYgKCFuYXRpb24pIHtcbiAgICAgICAgICAgICAgICBDaGFsbGVuZ2VIdHRwLmNoYWxsZW5nZUh0dHAuZ2V0Q291bnRyeSh0cnVlKS50aGVuKChjb3VudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Zu95a62XCIsIGNvdW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChcIm5hdGlvblwiLCBjb3VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb3RvR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJDTlwiID09IGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29uZmlnLmhhc1NoYXJlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBpc1N0b3JlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5Zyw5Yy65pyJ5YaF6LStMFwiLCBjb3VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29uZmlnLmhhc1B1cmNoYXNlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImhhc1B1cmNoYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzU3RvcmVMaXN0LmluY2x1ZGVzKGNvdW50cnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWcsOWMuuacieWGhei0rTFcIiwgY291bnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybUNvbmZpZy5oYXNQdXJjaGFzZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJoYXNQdXJjaGFzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN5Zyw5Yy65rKh5pyJ5YaF6LStMVwiLCBjb3VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29uZmlnLmhhc1B1cmNoYXNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKDAgPT0gaXNTdG9yZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcGxhdGZvcm1Db25maWcuaGFzUHVyY2hhc2UgPSAxO1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImhhc1B1cmNoYXNlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1N0b3JlTGlzdC5pbmNsdWRlcyhuYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3lnLDljLrmnInlhoXotK0yXCIsIG5hdGlvbik7XG4gICAgICAgICAgICAgICAgcGxhdGZvcm1Db25maWcuaGFzUHVyY2hhc2UgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeWcsOWMuuayoeacieWGhei0rTJcIiwgbmF0aW9uKTtcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybUNvbmZpZy5oYXNQdXJjaGFzZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJDTlwiID09IG5hdGlvbikge1xuICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29uZmlnLmhhc1NoYXJlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpbmNlID0gVXNlck1hbmFnZXIuVXNlci5nZXQoXCJwcm92aW5jZVwiKTtcbiAgICAgICAgICAgIGlmICghcHJvdmluY2UpIHtcbiAgICAgICAgICAgICAgICBDaGFsbGVuZ2VIdHRwLmNoYWxsZW5nZUh0dHAuZ2V0Q291bnRyeSgpLnRoZW4oKHByb3ZpbmNlQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuecgeS7vVwiLCBwcm92aW5jZUNvZGUpO1xuICAgICAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChcInByb3ZpbmNlXCIsIHByb3ZpbmNlQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoVXNlckNvbnN0LlRlbXBEYXRhLmlzRmlyc3QsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvdG9HYW1lKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5vlhaVcIik7XG4gICAgICAgICAgICBTY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoU2NlbmVDb25zdC5TY2VuZUNvbnN0LkhvbWUpO1xuICAgICAgICAgICAgaWYgKFBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcyhQbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5BTkRST0lEX0dPT0dMRSkpIHtcbiAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUJhbm5lcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwLjEpO1xuICAgICAgICAgICAgICAgIH0sIDI1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgcGxhdGZvcm1Db25maWcubG9hZGluZ0RlbGF5KTtcbiAgICB9XG5cbiAgICBnb3RvR2FtZSgpIHtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFLCAwKTtcbiAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShVc2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgMSk7XG4gICAgICAgIFNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZShTY2VuZUNvbnN0LlNjZW5lQ29uc3QuR0FNRSk7XG4gICAgfVxuXG4gICAganVkZ2VNYWluTW9kZShtb2RlSUQ6IG51bWJlcikge1xuICAgICAgICBsZXQgZmlyc3RTdGFnZUZpcnN0TGV2ZWxJRDtcbiAgICAgICAgY29uc3Qgc3RhZ2UxTGV2ZWxMaXN0ID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlEKSB8fCBbXTtcbiAgICAgICAgY29uc3Qgc3RhZ2UyTGV2ZWxMaXN0ID0gVXNlck1hbmFnZXIuVXNlci5nZXQoVXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMklEKSB8fCBbXTtcbiAgICAgICAgbGV0IG5ld1N0YWdlMUxldmVsTGlzdCA9IFtdO1xuICAgICAgICBsZXQgbmV3U3RhZ2UyTGV2ZWxMaXN0ID0gW107XG4gICAgICAgIGlmIChtb2RlSUQgIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29uZmlnTWFuYWdlci5Db25maWcuZ2V0KFxuICAgICAgICAgICAgQ29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyAwICsgUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmNvbmZpZ1N1ZmZpeFxuICAgICAgICApLnRoZW4oKHRoZW1lTGV2ZWxDb25maWdMaXN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoUGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKFBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLldFQikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhlbWVMZXZlbENvbmZpZ0xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsQ29uZmlnID0gdGhlbWVMZXZlbENvbmZpZ0xpc3RbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXdTdGFnZTFMZXZlbExpc3QucHVzaChsZXZlbENvbmZpZy5zdGFnZTFJRCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YWdlMkxldmVsTGlzdC5wdXNoKGxldmVsQ29uZmlnLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlELCBuZXdTdGFnZTFMZXZlbExpc3QpO1xuICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCwgbmV3U3RhZ2UyTGV2ZWxMaXN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGVtZUxldmVsQ29uZmlnTGlzdC5sZW5ndGggPiBzdGFnZTFMZXZlbExpc3QubGVuZ3RoICYmIHN0YWdlMUxldmVsTGlzdC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGVtZUxldmVsQ29uZmlnTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV2ZWxDb25maWcgPSB0aGVtZUxldmVsQ29uZmlnTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IHN0YWdlMUxldmVsTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFnZTFMZXZlbExpc3QucHVzaChsZXZlbENvbmZpZy5zdGFnZTFJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGFnZTJMZXZlbExpc3QucHVzaChsZXZlbENvbmZpZy5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U3RhZ2UxTGV2ZWxMaXN0LnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAgICAgbmV3U3RhZ2UyTGV2ZWxMaXN0LnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAgICAgbmV3U3RhZ2UxTGV2ZWxMaXN0ID0gc3RhZ2UxTGV2ZWxMaXN0LmNvbmNhdChuZXdTdGFnZTFMZXZlbExpc3QpO1xuICAgICAgICAgICAgICAgIG5ld1N0YWdlMkxldmVsTGlzdCA9IHN0YWdlMkxldmVsTGlzdC5jb25jYXQobmV3U3RhZ2UyTGV2ZWxMaXN0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacieaWsOWinuWFs+WNoVwiKTtcbiAgICAgICAgICAgICAgICBVc2VyTWFuYWdlci5Vc2VyLnNldChVc2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UxSUQsIG5ld1N0YWdlMUxldmVsTGlzdCk7XG4gICAgICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMklELCBuZXdTdGFnZTJMZXZlbExpc3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YWdlMUxldmVsTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVhcmx5U3RhZ2UxID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgZWFybHlTdGFnZTIgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaWRTdGFnZTEgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaWRTdGFnZTIgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXRlU3RhZ2UxID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZVN0YWdlMiA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhaWxTdGFnZTEgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWlsU3RhZ2UyID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoZW1lTGV2ZWxDb25maWdMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXZlbENvbmZpZyA9IHRoZW1lTGV2ZWxDb25maWdMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0U3RhZ2VGaXJzdExldmVsSUQgPSBsZXZlbENvbmZpZy5zdGFnZTFJRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlYXJseVN0YWdlMS5wdXNoKGxldmVsQ29uZmlnLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhcmx5U3RhZ2UyLnB1c2gobGV2ZWxDb25maWcuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZFN0YWdlMS5wdXNoKGxldmVsQ29uZmlnLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZFN0YWdlMi5wdXNoKGxldmVsQ29uZmlnLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlU3RhZ2UxLnB1c2gobGV2ZWxDb25maWcuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZVN0YWdlMi5wdXNoKGxldmVsQ29uZmlnLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhaWxTdGFnZTEucHVzaChsZXZlbENvbmZpZy5zdGFnZTFJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWlsU3RhZ2UyLnB1c2gobGV2ZWxDb25maWcuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV3U3RhZ2UxTGV2ZWxMaXN0ID0gZWFybHlTdGFnZTEuY29uY2F0KG1pZFN0YWdlMSkuY29uY2F0KGxhdGVTdGFnZTEpLmNvbmNhdCh0YWlsU3RhZ2UxKTtcbiAgICAgICAgICAgICAgICBuZXdTdGFnZTJMZXZlbExpc3QgPSBlYXJseVN0YWdlMi5jb25jYXQobWlkU3RhZ2UyKS5jb25jYXQobGF0ZVN0YWdlMikuY29uY2F0KHRhaWxTdGFnZTIpO1xuICAgICAgICAgICAgICAgIGlmIChCbXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJtYWluTW9kZUlEXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YWdlMUxldmVsTGlzdCA9IG1pZFN0YWdlMS5jb25jYXQoZWFybHlTdGFnZTEpLmNvbmNhdChsYXRlU3RhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhZ2UyTGV2ZWxMaXN0ID0gbWlkU3RhZ2UyLmNvbmNhdChlYXJseVN0YWdlMikuY29uY2F0KGxhdGVTdGFnZTIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TGV2ZWxDdXJyZW50SW5kZXggPSBuZXdTdGFnZTFMZXZlbExpc3QuaW5kZXhPZihmaXJzdFN0YWdlRmlyc3RMZXZlbElEKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdEZpcnN0TGV2ZWxJRCA9IG5ld1N0YWdlMUxldmVsTGlzdFswXTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhZ2UxTGV2ZWxMaXN0WzBdID0gZmlyc3RTdGFnZUZpcnN0TGV2ZWxJRDtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhZ2UxTGV2ZWxMaXN0W2ZpcnN0TGV2ZWxDdXJyZW50SW5kZXhdID0gbGlzdEZpcnN0TGV2ZWxJRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnInmlrDlop7lhbPljaHkuJTmmK/mlrDnlKjmiLdcIik7XG4gICAgICAgICAgICAgICAgVXNlck1hbmFnZXIuVXNlci5zZXQoVXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlELCBuZXdTdGFnZTFMZXZlbExpc3QpO1xuICAgICAgICAgICAgICAgIFVzZXJNYW5hZ2VyLlVzZXIuc2V0KFVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCwgbmV3U3RhZ2UyTGV2ZWxMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ3VpZCgpIHtcbiAgICAgICAgcmV0dXJuIFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLCAocGxhY2Vob2xkZXJDaGFyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21JbnQgPSAoMTYgKiBNYXRoLnJhbmRvbSgpKSB8IDA7XG4gICAgICAgICAgICByZXR1cm4gKHBsYWNlaG9sZGVyQ2hhciA9PSBcInhcIiA/IHJhbmRvbUludCA6ICgzICYgcmFuZG9tSW50KSB8IDgpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZEFzc2V0c0J1bmRsZShidW5kbGVOYW1lOiBzdHJpbmcsIG9uRmluaXNoZWQ/OiBGdW5jdGlvbikge1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCAobG9hZEVycm9yLCBidW5kbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkRXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltSZXNNZ3JdOkxvYWQgQXNzZXRzQnVuZGxlIEVycm9yOiBcIiArIGJ1bmRsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWJCdW5kc1tidW5kbGVOYW1lXSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1Jlc01ncl06TG9hZCBBc3NldHNCdW5kbGUgU3VjY2VzczogXCIgKyBidW5kbGVOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFiQnVuZHNbYnVuZGxlTmFtZV0gPSBidW5kbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25GaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIG9uRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=