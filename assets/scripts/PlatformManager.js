exports.Platform = void 0;
var $basePlatform = require("./BasePlatform");
var $platformConst = require("./PlatformConst");
var $localStorageConst = require("./LocalStorageConst");
var $oPPOADMediatorUtils = require("./OPPOADMediatorUtils");
var $oPPOMiniADMediatorUtils = require("./OPPOMiniADMediatorUtils");
var $xMADMediatorUtils = require("./XMADMediatorUtils");
var $bmsManager = require("./BmsManager");
var $localStorageManager = require("./LocalStorageManager");
var f = (function () {
    function t() {
        this.id = $platformConst.EPlatform.WEB;
        this.config = new $platformConst.PlatformConfig[$platformConst.EPlatform.WEB]();
        this.instance = new $basePlatform.BasePlatform();
        this.isNoAD = !1;
        this.bannerAdCounter = 1e10;
        this.isBuyRemoveInsert = !1;
    }
    t.prototype.startInit = function () {
        var t = this;
        this.setPlatform();
        this.setConfig();
        this.judgePlatform();
        this.init();
        setInterval(function () {
            t.bannerAdCounter++;
        }, 1e3);
    };
    t.prototype.setPlatform = function () {};
    t.prototype.setConfig = function () {
        this.config = new $platformConst.PlatformConfig[$platformConst.EPlatform.ANDROID_GOOGLE]();
        this.config = new $platformConst.PlatformConfig[$platformConst.EPlatform.TT]();
    };
    t.prototype.setNoAd = function (t) {
        this.isNoAD = t;
    };
    t.prototype.getNoADState = function () {
        return this.isNoAD;
    };
    t.prototype.judgePlatform = function () {
        var t = cc.sys;
        var e = t.platform;
        if (e == t.XIAOMI_GAME) {
            return (this.id = $platformConst.EPlatform.XIAOMI);
        }
        if (window.tt) {
            return (this.id = $platformConst.EPlatform.TT);
        }
        if (window.ks) {
            return (this.id = $platformConst.EPlatform.KS);
        }
        if (window.qq) {
            return (this.id = $platformConst.EPlatform.QQ);
        }
        if (window.wx) {
            return (this.id = $platformConst.EPlatform.WX);
        }
        if (e == t.VIVO_GAME) {
            return (this.id = $platformConst.EPlatform.VIVO);
        }
        if (e == t.OPPO_GAME) {
            return (this.id = $platformConst.EPlatform.OPPO);
        }
        if (e == t.HUAWEI_GAME) {
            return (this.id = $platformConst.EPlatform.HW);
        }
        if (e == t.IPHONE || e == t.IPAD) {
            if (window.haiwai) {
                return (this.id = $platformConst.EPlatform.IOS_HAIWAI);
            } else {
                return (this.id = $platformConst.EPlatform.IOS);
            }
        }
        if (e == t.ANDROID) {
            var n = jsb.reflection.callStaticMethod(
                "org/cocos2dx/javascript/AppActivity",
                "getPlatform",
                "()Ljava/lang/String;"
            );
            console.log("安卓渠道", n);
            if (null == n) {
                n = "";
            }
            return -1 != n.indexOf("xiaomi")
                ? (this.id = $platformConst.EPlatform.XIAOMI_ANDROID)
                : -1 != n.indexOf("vivo")
                ? (this.id = $platformConst.EPlatform.VIVO_ANDROID)
                : -1 != n.indexOf("oppo")
                ? (this.id = $platformConst.EPlatform.OPPO_ANDROID)
                : -1 != n.indexOf("huawei")
                ? (this.id = $platformConst.EPlatform.HUAWEI_ANDROID)
                : -1 != n.indexOf("google")
                ? (this.id = $platformConst.EPlatform.ANDROID_GOOGLE)
                : (this.id = $platformConst.EPlatform.ANDROID);
        }
    };
    t.prototype.init = function () {
        if (this.id != $platformConst.EPlatform.WEB) {
            this.config = new $platformConst.PlatformConfig[this.id]();
            this.instance = new this.config.platformClass();
            this.instance.setConfig(this.config);
        }
    };
    t.prototype.getPlatform = function () {
        return this.instance;
    };
    t.prototype.getConfig = function () {
        return this.config;
    };
    t.prototype.is = function (t) {
        return this.id == t;
    };
    t.prototype.showRewardAds = function (t) {
        if (this.isNoAD) {
            return t(0);
        }
        if (this.id == $platformConst.EPlatform.XIAOMI_ANDROID) {
            $xMADMediatorUtils.XMADMediator.showRewardVideo(t);
        } else {
            if (this.id == $platformConst.EPlatform.OPPO_ANDROID) {
                $oPPOADMediatorUtils.OPPOADMediator.showRewardVideo(t);
            } else {
                if (this.id == $platformConst.EPlatform.OPPO) {
                    $oPPOMiniADMediatorUtils.OPPOMiniADMediator.showRewardVideo(t);
                } else {
                    this.instance.showRewardAds(t);
                }
            }
        }
    };
    t.prototype.showRewardAds_xiaomi = function (t) {
        if (this.isNoAD) {
            return t(0);
        }
        this.instance.showRewardAds(t);
    };
    t.prototype.showAdDebugger = function () {
        this.instance.showAdDebugger();
    };
    t.prototype.showBanner = function (t, e) {
        if (!this.isBuyRemoveInsert && $bmsManager.BMS.getKey("isbanner")) {
            var n = $bmsManager.BMS.getKey("bannerAdIntervals");
            console.log("== banner检测 cd间隔不展示，cd计时: " + this.bannerAdCounter + "，cd间隔" + n);
            if (this.bannerAdCounter < n) {
                return console.log("== banner cd中，无法触发");
            }
            this.instance.showBanner(t, e);
        }
    };
    t.prototype.vibrate = function (t) {
        if (void 0 === t) {
            t = 30;
        }
        if (window.zhenDongMute) {
            //
        } else {
            this.instance.vibrate(t);
        }
    };
    t.prototype.hideBanner = function (t) {
        this.instance.hideBanner(t);
    };
    t.prototype.clickAdJump = function () {
        this.instance.clickAdJump();
    };
    t.prototype.showNativeAds = function (t, e) {
        this.instance.showNativeAds(t, e);
    };
    t.prototype.hideNativeAds = function () {
        this.instance.hideNativeAds();
    };
    t.prototype.showInsert = function () {
        if (!this.isBuyRemoveInsert) {
            var t = $localStorageManager.default.get($localStorageConst.default.isNoAD);
            if (window.isResultInsert && !window.isJudgeInsert && !t) {
                window.isJudgeInsert = !0;
                return void cc.game.emit("showNoAD");
            }
            this.instance.showInsert();
        }
    };
    t.prototype.setIsBuyRemoveInsert = function (t) {
        this.isBuyRemoveInsert = t;
    };
    t.prototype.showOpenAd = function () {
        this.instance.showOpenAd();
    };
    t.prototype.destroyInsert = function () {
        this.instance.destroyInsert();
    };
    t.prototype.showBlockAds = function (t) {
        if (void 0 === t) {
            t = {
                id: "",
                left: null,
                top: null
            };
        }
        this.instance.showBlockAds(t);
    };
    t.prototype.hideBlockAds = function () {
        this.instance.hideBlockAds();
    };
    t.prototype.showAppBoxAds = function () {
        this.instance.showAppBoxAds();
    };
    t.prototype.hideAppBoxAds = function () {
        this.instance.hideAppBoxAds();
    };
    t.prototype.changeBlockAdsPos = function (t) {
        this.instance.changeBlockAdsPos(t);
    };
    t.prototype.showNativeAdvanceBigBanner = function (t, e) {
        if (void 0 === e) {
            e = !1;
        }
        this.instance.showNativeAdvanceBigBanner(t, e);
    };
    t.prototype.hideNativeAdvanceBigBanner = function () {
        this.instance.hideNativeAdvanceBigBanner();
    };
    t.prototype.showInsertBannerImg = function (t, e) {
        if (void 0 === e) {
            e = !1;
        }
        this.instance.showInsertBannerImg(t, e);
    };
    t.prototype.hideInsertBannerImg = function () {
        this.instance.hideInsertBannerImg();
    };
    t.prototype.share = function (t) {
        this.instance.share(t);
    };
    t.prototype.shareRecordCap = function (t) {
        this.instance.shareRecordCap(t);
    };
    t.prototype.startRecordCap = function (t) {
        this.instance.startRecordCap(t);
    };
    t.prototype.stopRecordCap = function () {
        this.instance.stopRecordCap();
    };
    t.prototype.getShareStatus = function () {
        return this.instance.getShareStatus();
    };
    t.prototype.showPrivacyPolicy = function () {
        return this.instance.showPrivacyPolicy();
    };
    t.prototype.report = function (t, e) {
        this.instance.report(t, e);
    };
    t.prototype.adjustEvent = function (t) {
        console.log("%c [adjustEvent] 事件打点: " + t + " ", "color:#F500FF");
        this.instance.adjustEvent(t);
    };
    t.prototype.showMoreGame = function () {
        this.instance.showMoreGame();
    };
    t.prototype.showLargeFeed = function (t, e) {
        if (void 0 === e) {
            e = 0;
        }
        this.instance.showLargeFeed(t, e);
    };
    t.prototype.removeLargePicFeed = function (t) {
        this.instance.removeLargePicFeed(t);
    };
    t.prototype.removeInterstitialFeed = function (t) {
        this.instance.removeInterstitialFeed(t);
    };
    t.prototype.showInterstitialFeed = function (t, e, n, r) {
        if (void 0 === t) {
            t = "";
        }
        if (void 0 === e) {
            e = 3;
        }
        if (void 0 === n) {
            n = 0;
        }
        if (void 0 === r) {
            r = 0;
        }
        this.instance.showInterstitialFeed(t, e, n, r);
    };
    t.prototype.showBannerFeed = function (t) {
        if (this.isBuyRemoveInsert) {
            //
        } else {
            this.instance.showBannerFeed(t);
        }
    };
    t.prototype.showBannerFeed2 = function (t) {
        if (this.isBuyRemoveInsert) {
            //
        } else {
            this.instance.showBannerFeed2(t);
        }
    };
    t.prototype.showSplash = function () {
        this.instance.showSplash();
    };
    t.prototype.removeBannerFeed = function () {
        this.instance.removeBannerFeed();
    };
    t.prototype.gameComment = function () {
        this.instance.gameComment();
    };
    t.prototype.purchase = function (t) {
        this.instance.purchase(t);
    };
    t.prototype.subscribe = function (t) {
        this.instance.subscribe(t);
    };
    t.prototype.login = function () {
        return this.instance.login();
    };
    t.prototype.signIn = function () {
        this.instance.signIn();
    };
    t.prototype.hideCustomAd1 = function () {
        this.instance.hideCustomAd1();
    };
    t.prototype.hideCustomAd2 = function () {
        this.instance.hideCustomAd2();
    };
    t.prototype.showCustomAd1 = function (t) {
        this.instance.showCustomAd1(t);
    };
    t.prototype.showCustomAd2 = function (t) {
        this.instance.showCustomAd2(t);
    };
    t.prototype.follow = function (t) {
        this.instance.follow(t);
    };
    t.prototype.showCustomAd = function (t) {
        this.instance.showCustomAd(t);
    };
    t.prototype.hideCustomAd = function () {
        this.instance.hideCustomAd();
    };
    t.prototype.showCustomAd_1 = function (t, e) {
        this.instance.showCustomAd_1(t, e);
    };
    t.prototype.hideCustomAd_1 = function () {
        this.instance.hideCustomAd_1();
    };
    t.prototype.showCustomAd_2 = function (t, e) {
        this.instance.showCustomAd_2(t, e);
    };
    t.prototype.hideCustomAd_2 = function () {
        this.instance.hideCustomAd_2();
    };
    t.prototype.taInit = function (t) {
        this.instance.taInit(t);
    };
    t.prototype.sendRankData = function () {
        this.instance.sendRankData();
    };
    t.prototype.showRankList = function () {
        this.instance.showRankList();
    };
    return t;
})();
exports.Platform = new f();
