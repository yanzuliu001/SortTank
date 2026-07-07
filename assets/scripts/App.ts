// @ts-nocheck

const HttpUtils = require("./HttpUtils");
const ConfigConst = require("./ConfigConst");
const EventConst = require("./EventConst");
const PlatformConst = require("./PlatformConst");
const UserConst = require("./UserConst");
const LocalStorageConst = require("./LocalStorageConst");
const TimeManager = require("./TimeManager");
const AudioManager = require("./AudioManager");
const BmsManager = require("./BmsManager");
const ConfigManager = require("./ConfigManager");
const EventManager = require("./EventManager");
const LanguageManager = require("./LanguageManager");
const PlatformManager = require("./PlatformManager");
const ReportManager = require("./ReportManager");
const TipManager = require("./TipManager");
const UserManager = require("./UserManager");
const ChallengeSystem = require("./ChallengeSystem");
const PaymentSystem = require("./PaymentSystem");
const VIPSystem = require("./VIPSystem");
const ChallengeHttp = require("./ChallengeHttp");
const CopyRightDialog = require("./CopyRightDialog");
const OPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
const XMADUtils = require("./XMADUtils");
const LocalStorageManager = require("./LocalStorageManager");
const AssetManager = require("./AssetManager");
const ResManager = require("./ResManager");
const SceneManager = require("./SceneManager");
const SceneConst = require("./SceneConst");

const FONT_INDEX_BY_LANG = {
    zh: 0,
    en: 0,
    ja: 1,
    tw: 2
};

const DIRECT_TANK_ASSEMBLY_DEMO = true;
const TANK_ASSEMBLY_ENTRY_PREFAB_PATH = "zqddn_zhb/prefab/level/zqddn_zhb_level-enter";
const TANK_ASSEMBLY_GAME_PREFAB_PATH = "prefab/scene/Game";
const TANK_ASSEMBLY_LEVEL_PREFAB_PATH = "zqddn_zhb/prefab/level/zqddn_zhb_level-1";
const TANK_ASSEMBLY_LEVEL_READY_EVENT = "tankAssemblyLevelReady";

const { ccclass, property } = cc._decorator;

@ccclass
class App extends cc.Component {
    @property(cc.Prefab)
    loadingPrefab: cc.Prefab = null;

    @property(cc.SpriteAtlas)
    plantAtlas: cc.SpriteAtlas = null;

    @property([cc.TTFFont])
    fonts: cc.TTFFont[] = [];

    fullAdCounter: number = 0;

    internalDefaultBMS: any = {
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

    externalDefaultBMS: any = {
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

    isEnterMain: boolean = false;

    abBunds: Record<string, any> = {};

    tankAssemblyEntryNode: cc.Node = null;

    tankAssemblyEntryLoading: boolean = false;

    tankAssemblyGameStarting: boolean = false;

    tankAssemblySceneLoadStarted: boolean = false;

    tankAssemblyPreloadPromise: any = null;

    tankAssemblyStartClickTime: number = 0;

    onLoad() {
        this.initMgr();
        this.initEvent();
        new CopyRightDialog.default().init();
        this.schedule(() => {
            this.fullAdCounter++;
        }, 1);
        this.loadLevelSub();
        if (DIRECT_TANK_ASSEMBLY_DEMO) {
            this.preloadTankAssemblyGame();
        }
    }

    loadLevelSub() {
        this.scheduleOnce(() => {
            if (cc.sys.isBrowser) {
                console.log("浏览器环境");
                window.levelSub = true;
                return;
            }

            console.log("加载关卡子包......");
            cc.assetManager.loadBundle("script", (loadError) => {
                if (loadError) {
                    console.log("[ResMgr]:Load AssetsBundle Error: script");
                    return;
                }
                console.log("加载完成", "script");
                window.levelSub = true;
            });
        }, 0);
    }

    startOppo() {
        cc.game.on("onBannerRemoved", this.onBannerRemoved, this);
    }

    cardAmount(cardAmount: number) {
        console.log("保存服务器[cardAmount]", cardAmount);
        this.saveServerData(LocalStorageConst.default.cardAmount, cardAmount);
    }

    saveServerData(key: string, value: string | number) {
        const valueStr = value.toString();
        const userId = UserManager.User.get("googleID") || UserManager.User.get("uuid");
        const flag = PlatformManager.Platform.getConfig().flag;
        BmsManager.BMS.saveServerData(flag, userId, key, valueStr).then(() => {
            console.log("保存" + key + "成功:" + valueStr);
        });
    }

    onBannerRemoved() {
        console.log("bannerAdCounter", 0);
        PlatformManager.Platform.bannerAdCounter = 0;
    }

    showInterstitialFeedTimer() {
        const autoPopupInterval = BmsManager.BMS.getKey("timeTC");
        this.scheduleOnce(() => {
            console.log("长时间没操作,自动弹出插屏");
            OPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
            this.showInterstitialFeedTimer2();
        }, autoPopupInterval);
    }

    showInterstitialFeedTimer2() {
        this.scheduleOnce(() => {
            OPPOAndroidAdUtils.OPPOAndroidAd.removeInterstitialFeed();
        }, 30);
        this.scheduleOnce(() => {
            OPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
            this.showInterstitialFeedTimer2();
        }, 31);
    }

    initMgr() {
        PlatformManager.Platform.startInit();
        const language = LanguageManager.default.instance;
        language.init();
        language.setFont(this.fonts[FONT_INDEX_BY_LANG[language.lan]]);
        if (DIRECT_TANK_ASSEMBLY_DEMO) {
            this.initSceneManagerWithoutLoading();
        } else {
            SceneManager.default.init(this.loadingPrefab);
        }
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
    }

    initSceneManagerWithoutLoading() {
        const canvas = cc.find("Canvas");
        SceneManager.default.sceneRoot = canvas && canvas.getChildByName("sceneRoot");
        SceneManager.default.transition = canvas && canvas.getChildByName("transition");
        SceneManager.default.hasAnim = false;
        SceneManager.default.isLoading = false;
        SceneManager.default.currentScene = SceneConst.SceneConst.LOADING;
        if (SceneManager.default.transition) {
            SceneManager.default.transition.color = cc.Color.WHITE;
            SceneManager.default.transition.opacity = 0;
        }
        if (SceneManager.default.sceneRoot) {
            SceneManager.default.sceneRoot.destroyAllChildren();
        }
    }

    initStopDebug() {
        if (cc.sys.isMobile) {
            cc.view.enableAutoFullScreen(false);
        }
    }

    initEvent() {
        cc.game.on("adNotReady", this.adNotReady, this);
        cc.game.on("iosApplicationDidBecomeActive", this.iosApplicationDidBecomeActive, this);
        cc.game.on("onForeground", this.onForeground, this);
        cc.game.on("localStorage_cardAmount", this.cardAmount, this);
        cc.game.on("checkFullAd_noResult", this.checkFullAd_noResult, this);
        cc.game.on("showNoAD", this.showNoAD, this);
        EventManager.Event.on(EventConst.default.checkFullAd, this.checkFullAd, this);
        EventManager.Event.on(EventConst.default.checkFullAd_result, this.checkFullAd_result, this);
    }

    checkFullAd() {
        const nowMs = Date.now();
        if (window.lastVideoAdTime && (nowMs - window.lastVideoAdTime) / 1e3 < 60) {
            console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
            return;
        }

        window.isResultInsert = false;
        const insertCooldown = BmsManager.BMS.getKey("AdIntervals");
        console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + insertCooldown);
        if (this.fullAdCounter < insertCooldown) {
            console.log("== 插屏cd中，无法触发");
            return;
        }

        if ("no" != BmsManager.BMS.getKey("fullScreenAd")) {
            PlatformManager.Platform.showInsert();
            this.fullAdCounter = 0;
        }
    }

    showNoAD() {
        window.hideIsNeedInsert = true;
    }

    checkFullAd_noResult(restartCount: number) {
        const nowMs = Date.now();
        if (window.lastVideoAdTime && (nowMs - window.lastVideoAdTime) / 1e3 < 60) {
            console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
            return;
        }

        window.isResultInsert = false;
        const insertCooldown = BmsManager.BMS.getKey("AdIntervals");
        console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + insertCooldown);
        if (this.fullAdCounter < insertCooldown) {
            console.log("== 插屏cd中，无法触发");
            return;
        }

        if ("no" != BmsManager.BMS.getKey("fullScreenAd")) {
            const replayStartThreshold = BmsManager.BMS.getKey("ReplayStartScreenAd");
            if (replayStartThreshold == 0 || restartCount >= replayStartThreshold) {
                console.log("== 插屏checkFullAd_noResult");
                PlatformManager.Platform.showInsert();
                this.fullAdCounter = 0;
            }
        }
    }

    checkFullAd_result() {
        const nowMs = Date.now();
        if (window.lastVideoAdTime && (nowMs - window.lastVideoAdTime) / 1e3 < 60) {
            console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
            return;
        }

        const insertCooldown = BmsManager.BMS.getKey("AdIntervals");
        console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + insertCooldown);
        if (this.fullAdCounter < insertCooldown) {
            console.log("== 插屏cd中，无法触发");
            return;
        }

        const currentLevel = UserManager.User.getTempData(UserConst.TempData.CURRENT_LEVEL);
        const startWinInsertLevel = BmsManager.BMS.getKey("startWinFullScreenAd");
        const fullScreenAdSwitch = BmsManager.BMS.getKey("fullScreenAd");
        const hasFullScreenAdConfig = BmsManager.BMS.checkKey("fullScreenAd");
        const startLevelWinInsert = BmsManager.BMS.getKey("startLevelWinFullScreenAds");
        const spaceLevelWinInsert = BmsManager.BMS.getKey("spaceLevelWinFullScreenAd");
        const spaceWinInsertDay1 = BmsManager.BMS.getKey("spaceWinFullScreenAd");
        const spaceWinInsertAfterDay1 = BmsManager.BMS.getKey("spaceWinFullScreenAdND");

        if (
            currentLevel >= startWinInsertLevel &&
            (("number" == typeof fullScreenAdSwitch && fullScreenAdSwitch) ||
                ("string" == typeof fullScreenAdSwitch && hasFullScreenAdConfig))
        ) {
            const todayDate = new Date().getDate();
            const firstDayDate = UserManager.User.get(UserConst.UserData.FIRST_DAY_DATE);
            if (currentLevel >= startLevelWinInsert) {
                if (currentLevel % spaceLevelWinInsert == 0) {
                    console.log("插屏1");
                    setTimeout(() => {
                        window.isResultInsert = true;
                        PlatformManager.Platform.showInsert();
                        this.fullAdCounter = 0;
                    }, 500);
                }
            } else if (Math.abs(todayDate - firstDayDate) > 0) {
                if (currentLevel % spaceWinInsertAfterDay1 == 0) {
                    console.log("插屏2");
                    setTimeout(() => {
                        window.isResultInsert = true;
                        PlatformManager.Platform.showInsert();
                        this.fullAdCounter = 0;
                    }, 500);
                }
            } else if (currentLevel % spaceWinInsertDay1 == 0) {
                console.log("插屏3");
                setTimeout(() => {
                    window.isResultInsert = true;
                    PlatformManager.Platform.showInsert();
                    this.fullAdCounter = 0;
                }, 500);
            }
        }
    }

    onForeground() {
        XMADUtils.XMAD.onForeground();
    }

    iosApplicationDidBecomeActive() {
        const splashOpenDayThreshold = BmsManager.BMS.getKey("splash");
        if (!splashOpenDayThreshold) {
            return;
        }

        const loginDays = UserManager.User.get(UserConst.UserData.loginDaysTimes);
        console.log("登陆天数", loginDays, "splash", splashOpenDayThreshold);
        if (loginDays >= splashOpenDayThreshold) {
            console.log("打开开屏");
            PlatformManager.Platform.showOpenAd();
        }
    }

    adNotReady() {
        TipManager.Tip.show(LanguageManager.default.formatStr("暂无广告"));
    }

    initBMS() {
        const platformConfig = PlatformManager.Platform.getConfig();
        const platform = cc.sys.platform;
        const isIOS = platform == cc.sys.IPHONE || platform == cc.sys.IPAD;
        if (isIOS) {
            const iosVersion = jsb.reflection.callStaticMethod("AppController", "gainIOSBMSVersion");
            console.log("获得版本号", iosVersion);
            BmsManager.BMS.setDefaultData(window.haiwai ? this.externalDefaultBMS : this.internalDefaultBMS);
        }

        if ("wlgczhwapk" == platformConfig.flag) {
            BmsManager.BMS.setDefaultData({
                isStore: []
            });
        } else {
            BmsManager.BMS.setDefaultData({
                isStore: ["US", "GB", "CA", "DE", "AU", "JP", "TW", "FR", "HK"]
            });
        }

        this.scheduleOnce(() => {
            console.log("两秒没跳转直接进入");
            this.sucEnterMain();
        }, DIRECT_TANK_ASSEMBLY_DEMO ? 0 : 3);
    }

    updateSkin() {
        const skinList =
            UserManager.User.get(UserConst.UserData.skinList) || {
                0: [0],
                1: [0],
                2: [9],
                3: [0],
                4: [0],
                5: [0]
            };
        UserManager.User.set(UserConst.UserData.skinList, skinList);

        const useSkinIDList =
            UserManager.User.get(UserConst.UserData.useSkinIDList) || {
                0: 0,
                1: 0,
                2: 9,
                3: 0,
                4: 0,
                5: 0
            };
        UserManager.User.set(UserConst.UserData.useSkinIDList, useSkinIDList);

        const lockSkinList =
            UserManager.User.get(UserConst.UserData.getLockSkinList) || {
                0: [],
                1: [],
                2: [],
                3: [],
                4: [],
                5: []
            };
        UserManager.User.set(UserConst.UserData.getLockSkinList, lockSkinList);
    }

    async sucEnterMain() {
        if (this.isEnterMain) {
            return;
        }

        this.isEnterMain = true;
        game.plateAtlas = this.plantAtlas;
        const userUUID = UserManager.User.get("uuid") || this.guid();
        UserManager.User.set("uuid", userUUID);
        console.log("uuid", userUUID);
        PlatformManager.Platform.taInit(userUUID);

        const openNum = UserManager.User.get(UserConst.UserData.OpenNum) || 1;
        const playDays = UserManager.User.get(UserConst.UserData.PlayDays) || 1;
        if (openNum == 1) {
            cc.game.emit("gamelog_Thinking", "user_Login", {
                IsNew: true,
                OpenNum: 1,
                PlayDays: 1
            });
        } else {
            UserManager.User.set(UserConst.UserData.OpenNum, openNum + 1);
            cc.game.emit("gamelog_Thinking", "user_Login", {
                IsNew: false,
                OpenNum: openNum + 1,
                PlayDays: playDays
            });
        }

        this.updateSkin();
        if (DIRECT_TANK_ASSEMBLY_DEMO) {
            this.startOppo();
            this.showTankAssemblyEntry();
            return;
        }

        // if (0 != (autoFullScreenAdInterval = BmsManager.BMS.getKey("AutoFullScreenAd"))) {
        //     this.schedule(function() {
        //         PlatformManager.Platform.showInsert();
        //     }, autoFullScreenAdInterval);
        // }
        // if (
        //     PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE) &&
        //     !UserManager.User.get("googleID")
        // ) {
        //     googleId = jsb.reflection.callStaticMethod(
        //         "org/cocos2dx/javascript/AppActivity",
        //         "getUserId",
        //         "()Ljava/lang/String;"
        //     );
        //     UserManager.User.set("googleID", googleId);
        //     console.log("谷歌id", googleId);
        // } else {
        //     console.log("已有谷歌ID", UserManager.User.get("googleID"));
        // }
        // try {
        //     productListJsonStr = jsb.reflection.callStaticMethod(
        //         "org/cocos2dx/javascript/AppActivity",
        //         "getProductListJsonStr",
        //         "()Ljava/lang/String;"
        //     );
        //     console.log("getProductListJsonStr", productListJsonStr);
        //     window.getProductListJsonStr = JSON.parse(productListJsonStr);
        // } catch (error) {
        //     console.log("checkInAppOrder-error", error);
        // }

        const serverTimeResponse = await HttpUtils.default.getTime();
        if (serverTimeResponse) {
            await TimeManager.default.init(serverTimeResponse.data.time);
        }

        VIPSystem.default.init();
        PaymentSystem.default.init();
        ChallengeSystem.default.init();

        LocalStorageManager.default.get(LocalStorageConst.default.CityListCompatible);
        const cityList = LocalStorageManager.default.get(LocalStorageConst.default.CityList) || [];
        const cityConfig = await ConfigManager.Config.get(ConfigConst.ConfigConst.City);

        const levelListLoopTimes = UserManager.User.get("levelListLoopTimes") || {};
        if (!levelListLoopTimes[0]) {
            levelListLoopTimes[0] = 0;
        }
        const levelList = UserManager.User.get(UserConst.UserData.LEVEL_LIST) || {};
        if (!levelList[0]) {
            levelList[0] = 1;
        }

        const themeConfig = await ConfigManager.Config.get(
            ConfigConst.ConfigConst.THEME + 0 + PlatformManager.Platform.getConfig().configSuffix
        );
        const currentStageIndex = levelList[0] + levelListLoopTimes[0] * themeConfig.length;
        cityConfig.sort((left, right) => left.sort - right.sort);
        console.log("diji", currentStageIndex);
        if (currentStageIndex && currentStageIndex > 2) {
            for (let index = 0; index < currentStageIndex - 2; index++) {
                const cityId = cityConfig[index].id;
                if (!cityList.includes(cityId)) {
                    cityList.push(cityId);
                }
            }
        }
        LocalStorageManager.default.set(LocalStorageConst.default.CityList, cityList);

        if (PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE)) {
            BmsManager.BMS.getServerData(
                PlatformManager.Platform.getConfig().flag,
                UserManager.User.get("googleID") || userUUID,
                UserConst.UserData.boreTimes +
                    "," +
                    UserConst.UserData.tipTimes +
                    "," +
                    UserConst.UserData.screwBoxTimes +
                    "," +
                    LocalStorageConst.default.cardAmount
            ).then((serverData) => {
                console.log("getServerData", serverData);

                const boreTimes =
                    null == serverData[UserConst.UserData.boreTimes] ||
                    Number(serverData[UserConst.UserData.boreTimes]) <= 0
                        ? 0
                        : Number(serverData[UserConst.UserData.boreTimes]);
                const tipTimes =
                    null == serverData[UserConst.UserData.tipTimes] ||
                    Number(serverData[UserConst.UserData.tipTimes]) <= 0
                        ? 0
                        : Number(serverData[UserConst.UserData.tipTimes]);
                const screwBoxTimes =
                    null == serverData[UserConst.UserData.screwBoxTimes] ||
                    Number(serverData[UserConst.UserData.screwBoxTimes]) <= 0
                        ? 0
                        : Number(serverData[UserConst.UserData.screwBoxTimes]);

                UserManager.User.set(UserConst.UserData.boreTimes, boreTimes);
                UserManager.User.set(UserConst.UserData.tipTimes, tipTimes);
                UserManager.User.set(UserConst.UserData.screwBoxTimes, screwBoxTimes);

                const cardAmount =
                    null == serverData[LocalStorageConst.default.cardAmount] ||
                    Number(serverData[LocalStorageConst.default.cardAmount]) <= 0
                        ? 0
                        : Number(serverData[LocalStorageConst.default.cardAmount]);
                LocalStorageManager.default.set(LocalStorageConst.default.cardAmount, cardAmount);
            });
        }

        this.startOppo();
        const platformConfig = PlatformManager.Platform.getConfig();
        if ("haiwai" == platformConfig.rank) {
            const isStoreList = BmsManager.BMS.getKey("isStore");
            let nation = UserManager.User.get("nation");
            console.log("province", nation);
            console.log("isStore", isStoreList);

            if (!nation) {
                ChallengeHttp.challengeHttp.getCountry(true).then((country) => {
                    console.log("国家", country);
                    UserManager.User.set("nation", country);
                    this.gotoGame();
                    if ("CN" == country) {
                        platformConfig.hasShare = 0;
                    }
                    if (0 == isStoreList.length) {
                        console.log("当前地区有内购0", country);
                        platformConfig.hasPurchase = 1;
                        cc.game.emit("hasPurchase");
                    } else if (isStoreList.includes(country)) {
                        console.log("当前地区有内购1", country);
                        platformConfig.hasPurchase = 1;
                        cc.game.emit("hasPurchase");
                    } else {
                        console.log("当前地区没有内购1", country);
                        platformConfig.hasPurchase = 0;
                    }
                });
                return;
            }

            if (0 == isStoreList.length) {
                platformConfig.hasPurchase = 1;
                cc.game.emit("hasPurchase");
            } else if (isStoreList.includes(nation)) {
                console.log("当前地区有内购2", nation);
                platformConfig.hasPurchase = 1;
            } else {
                console.log("当前地区没有内购2", nation);
                platformConfig.hasPurchase = 0;
            }
            if ("CN" == nation) {
                platformConfig.hasShare = 0;
            }
        } else {
            const province = UserManager.User.get("province");
            if (!province) {
                ChallengeHttp.challengeHttp.getCountry().then((provinceCode) => {
                    console.log("省份", provinceCode);
                    UserManager.User.set("province", provinceCode);
                    UserManager.User.setTempData(UserConst.TempData.isFirst, true);
                    this.gotoGame();
                });
                return;
            }
        }

        this.scheduleOnce(() => {
            console.log("进入");
            SceneManager.default.loadScene(SceneConst.SceneConst.Home);
            if (PlatformManager.Platform.is(PlatformConst.EPlatform.ANDROID_GOOGLE)) {
                PlatformManager.Platform.showBanner();
                this.schedule(() => {
                    PlatformManager.Platform.hideBanner();
                    this.scheduleOnce(() => {
                        PlatformManager.Platform.showBanner();
                    }, 0.1);
                }, 25);
            }
        }, platformConfig.loadingDelay);
    }

    gotoGame() {
        UserManager.User.setTempData(UserConst.TempData.CURRENT_MODE, 0);
        UserManager.User.setTempData(UserConst.TempData.CURRENT_LEVEL, 1);
        SceneManager.default.loadScene(SceneConst.SceneConst.GAME);
    }

    showTankAssemblyEntry() {
        if (this.tankAssemblyEntryLoading || cc.isValid(this.tankAssemblyEntryNode)) {
            return;
        }

        const canvas = cc.find("Canvas");
        const entryRoot = canvas && canvas.getChildByName("popupRoot");
        if (!cc.isValid(entryRoot)) {
            cc.error("[TankAssemblyEntry] popupRoot不存在，直接进入关卡");
            this.gotoGame();
            return;
        }

        this.tankAssemblyEntryLoading = true;
        cc.resources.load(TANK_ASSEMBLY_ENTRY_PREFAB_PATH, cc.Prefab, (error, prefab) => {
            this.tankAssemblyEntryLoading = false;
            if (!cc.isValid(this.node)) {
                return;
            }

            if (error || !prefab) {
                cc.error("[TankAssemblyEntry] 入口预制体加载失败", error);
                this.gotoGame();
                return;
            }

            const entryNode = cc.instantiate(prefab);
            const startGameNode = entryNode.getChildByName("startGame");
            if (!startGameNode) {
                cc.error("[TankAssemblyEntry] 未找到startGame按钮，直接进入关卡");
                entryNode.destroy();
                this.gotoGame();
                return;
            }

            this.tankAssemblyEntryNode = entryNode;
            this.tankAssemblyGameStarting = false;
            this.tankAssemblySceneLoadStarted = false;
            entryRoot.addChild(entryNode);
            entryNode.setPosition(cc.Vec2.ZERO);
            entryNode.angle = 0;
            if (!entryNode.getComponent(cc.BlockInputEvents)) {
                entryNode.addComponent(cc.BlockInputEvents);
            }
            startGameNode.on(cc.Node.EventType.TOUCH_END, this.onTankAssemblyStartGame, this);
            this.preloadTankAssemblyGame();
        });
    }

    waitForTankAssemblyScriptBundle() {
        if (cc.sys.isBrowser || window.levelSub) {
            return Promise.resolve();
        }
        return new Promise((resolve) => {
            const checkLoaded = () => {
                if (!window.levelSub) {
                    return;
                }
                this.unschedule(checkLoaded);
                resolve();
            };
            this.schedule(checkLoaded, 0.1);
        });
    }

    preloadTankAssemblyGame() {
        if (this.tankAssemblyPreloadPromise) {
            return this.tankAssemblyPreloadPromise;
        }

        const startTime = Date.now();
        const gamePrefabPromise = AssetManager.default.getRes(
            "gameBundle",
            TANK_ASSEMBLY_GAME_PREFAB_PATH,
            cc.Prefab
        );
        const levelPrefabPromise = this.waitForTankAssemblyScriptBundle().then(() => {
            return ResManager.Res.load(TANK_ASSEMBLY_LEVEL_PREFAB_PATH);
        });
        this.tankAssemblyPreloadPromise = Promise.all([gamePrefabPromise, levelPrefabPromise])
            .then((assets) => {
                console.log("[TankAssemblyLoad] 后台预加载完成：" + (Date.now() - startTime) + "ms");
                return assets;
            })
            .catch((error) => {
                cc.warn("[TankAssemblyLoad] 后台预加载失败，将在进入关卡时重试", error);
                return null;
            });
        return this.tankAssemblyPreloadPromise;
    }

    onTankAssemblyStartGame(event: cc.Event.EventTouch) {
        if (this.tankAssemblyGameStarting) {
            return;
        }

        this.tankAssemblyGameStarting = true;
        this.tankAssemblyStartClickTime = Date.now();
        const startGameNode = event && (event.currentTarget as cc.Node);
        if (cc.isValid(startGameNode)) {
            startGameNode.off(cc.Node.EventType.TOUCH_END, this.onTankAssemblyStartGame, this);
            const button = startGameNode.getComponent(cc.Button);
            if (button) {
                button.interactable = false;
            }
        }
        cc.game.off(TANK_ASSEMBLY_LEVEL_READY_EVENT, this.onTankAssemblyLevelReady, this);
        cc.game.on(TANK_ASSEMBLY_LEVEL_READY_EVENT, this.onTankAssemblyLevelReady, this);
        this.preloadTankAssemblyGame().then(() => {
            if (this.tankAssemblySceneLoadStarted) {
                return;
            }
            this.tankAssemblySceneLoadStarted = true;
            this.gotoGame();
        });
    }

    onTankAssemblyLevelReady(levelID: number) {
        if (Number(levelID) !== 1) {
            return;
        }

        cc.game.off(TANK_ASSEMBLY_LEVEL_READY_EVENT, this.onTankAssemblyLevelReady, this);
        console.log(
            "[TankAssemblyLoad] 点击开始到第一关节点就绪：" +
                (Date.now() - this.tankAssemblyStartClickTime) +
                "ms"
        );
        if (!cc.isValid(this.tankAssemblyEntryNode)) {
            this.tankAssemblyEntryNode = null;
            return;
        }

        const entryNode = this.tankAssemblyEntryNode;
        entryNode.stopAllActions();
        cc.tween(entryNode)
            .to(0.15, { opacity: 0 })
            .call(() => {
                if (cc.isValid(entryNode)) {
                    entryNode.destroy();
                }
                if (this.tankAssemblyEntryNode === entryNode) {
                    this.tankAssemblyEntryNode = null;
                }
            })
            .start();
    }

    judgeMainMode(modeID: number) {
        let firstStageFirstLevelID;
        const stage1LevelList = UserManager.User.get(UserConst.UserData.mode0LevelList_stage1ID) || [];
        const stage2LevelList = UserManager.User.get(UserConst.UserData.mode0LevelList_stage2ID) || [];
        let newStage1LevelList = [];
        let newStage2LevelList = [];
        if (modeID != 0) {
            return;
        }

        ConfigManager.Config.get(
            ConfigConst.ConfigConst.THEME + 0 + PlatformManager.Platform.getConfig().configSuffix
        ).then((themeLevelConfigList) => {
            if (PlatformManager.Platform.is(PlatformConst.EPlatform.WEB)) {
                for (let index = 0; index < themeLevelConfigList.length; index++) {
                    const levelConfig = themeLevelConfigList[index];
                    newStage1LevelList.push(levelConfig.stage1ID);
                    newStage2LevelList.push(levelConfig.stage2ID);
                }
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage1ID, newStage1LevelList);
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage2ID, newStage2LevelList);
                return;
            }

            if (themeLevelConfigList.length > stage1LevelList.length && stage1LevelList.length != 0) {
                for (let index = 0; index < themeLevelConfigList.length; index++) {
                    const levelConfig = themeLevelConfigList[index];
                    if (index > stage1LevelList.length - 1) {
                        newStage1LevelList.push(levelConfig.stage1ID);
                        newStage2LevelList.push(levelConfig.stage2ID);
                    }
                }
                newStage1LevelList.sort(() => 0.5 - Math.random());
                newStage2LevelList.sort(() => 0.5 - Math.random());
                newStage1LevelList = stage1LevelList.concat(newStage1LevelList);
                newStage2LevelList = stage2LevelList.concat(newStage2LevelList);
                console.log("有新增关卡");
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage1ID, newStage1LevelList);
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage2ID, newStage2LevelList);
                return;
            }

            if (stage1LevelList.length == 0) {
                const earlyStage1 = [];
                const earlyStage2 = [];
                const midStage1 = [];
                const midStage2 = [];
                const lateStage1 = [];
                const lateStage2 = [];
                const tailStage1 = [];
                const tailStage2 = [];
                for (let index = 0; index < themeLevelConfigList.length; index++) {
                    const levelConfig = themeLevelConfigList[index];
                    if (index == 0) {
                        firstStageFirstLevelID = levelConfig.stage1ID;
                    }
                    if (index < 5) {
                        earlyStage1.push(levelConfig.stage1ID);
                        earlyStage2.push(levelConfig.stage2ID);
                    } else if (index < 10) {
                        midStage1.push(levelConfig.stage1ID);
                        midStage2.push(levelConfig.stage2ID);
                    } else if (index < 50) {
                        lateStage1.push(levelConfig.stage1ID);
                        lateStage2.push(levelConfig.stage2ID);
                    } else {
                        tailStage1.push(levelConfig.stage1ID);
                        tailStage2.push(levelConfig.stage2ID);
                    }
                }

                newStage1LevelList = earlyStage1.concat(midStage1).concat(lateStage1).concat(tailStage1);
                newStage2LevelList = earlyStage2.concat(midStage2).concat(lateStage2).concat(tailStage2);
                if (BmsManager.BMS.getKey("mainModeID")) {
                    newStage1LevelList = midStage1.concat(earlyStage1).concat(lateStage1);
                    newStage2LevelList = midStage2.concat(earlyStage2).concat(lateStage2);
                } else {
                    const firstLevelCurrentIndex = newStage1LevelList.indexOf(firstStageFirstLevelID);
                    const listFirstLevelID = newStage1LevelList[0];
                    newStage1LevelList[0] = firstStageFirstLevelID;
                    newStage1LevelList[firstLevelCurrentIndex] = listFirstLevelID;
                }
                console.log("没有新增关卡且是新用户");
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage1ID, newStage1LevelList);
                UserManager.User.set(UserConst.UserData.mode0LevelList_stage2ID, newStage2LevelList);
            }
        });
    }

    guid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (placeholderChar) => {
            const randomInt = (16 * Math.random()) | 0;
            return (placeholderChar == "x" ? randomInt : (3 & randomInt) | 8).toString(16);
        });
    }

    loadAssetsBundle(bundleName: string, onFinished?: Function) {
        cc.assetManager.loadBundle(bundleName, (loadError, bundle) => {
            if (loadError !== null) {
                console.log("[ResMgr]:Load AssetsBundle Error: " + bundleName);
                this.abBunds[bundleName] = null;
            } else {
                console.log("[ResMgr]:Load AssetsBundle Success: " + bundleName);
                this.abBunds[bundleName] = bundle;
            }
            if (onFinished) {
                onFinished();
            }
        });
    }
}

export default App;
