exports.BasePlatform = void 0;
var r = (function () {
    function t() {}
    t.prototype.setConfig = function (t) {
        this._config = t;
    };
    t.prototype.showRewardAds = function (t) {
        console.log("web视频成功");
        if (window.AdjustEventSys) {
            window.AdjustEventSys.todayRewardTimes();
        }
        return t(0);
    };
    t.prototype.showAdDebugger = function () {};
    t.prototype.login = function () {
        return new Promise(function (t) {
            t(null);
        });
    };
    t.prototype.vibrate = function (t) {
        if (void 0 === t) {
            t = 30;
        }
    };
    t.prototype.signIn = function () {};
    t.prototype.getNetworkType = function (t) {
        t({
            networkType: "none"
        });
    };
    t.prototype.shareRecordCap = function (t) {
        return t(0);
    };
    t.prototype.startRecordCap = function () {
        console.log("startRecordCap");
    };
    t.prototype.stopRecordCap = function () {
        console.log("stopRecordCap");
    };
    t.prototype.pauseRecord = function () {
        console.log("pauseRecord");
    };
    t.prototype.resumeRecord = function () {
        console.log("resumeRecord");
    };
    t.prototype.showBanner = function (t) {
        if (void 0 === t) {
            t = {
                id: ""
            };
        }
    };
    t.prototype.hideBanner = function () {};
    t.prototype.hideBanner_2 = function () {};
    t.prototype.clickAdJump = function () {};
    t.prototype.share = function (t) {
        cc.game.emit("shareSuc_");
        if (t) {
            t(0);
        }
        cc.game.emit("shareSuc");
    };
    t.prototype.showInsert = function () {};
    t.prototype.destroyInsert = function () {};
    t.prototype.showOpenAd = function () {};
    t.prototype.gainIOSBMSVersion = function () {};
    t.prototype.showInsertImg = function () {};
    t.prototype.showNativeAdvanceBigBanner = function (t, e) {
        if (void 0 === e) {
            e = !1;
        }
    };
    t.prototype.showSplashAd = function () {};
    t.prototype.showNativeAdvanceBannerType = function () {};
    t.prototype.hideNativeAdvanceBigBanner = function () {};
    t.prototype.saveNativeAdPosId = function () {};
    t.prototype.getWxScene = function () {
        return 0;
    };
    t.prototype.showBlockAds = function () {};
    t.prototype.hideBlockAds = function () {};
    t.prototype.gameLog = function () {};
    t.prototype.gameTimePageLog = function () {};
    t.prototype.gameLevelLog = function () {};
    t.prototype.showPrivacyPolicy = function () {};
    t.prototype.report = function () {};
    t.prototype.adjustEvent = function () {};
    t.prototype.showMoreGame = function () {};
    t.prototype.showBannerFeed = function () {};
    t.prototype.showBannerFeed2 = function () {};
    t.prototype.showSplash = function () {};
    t.prototype.removeBannerFeed = function () {};
    t.prototype.gameComment = function () {
        console.log("跳转到评分");
    };
    t.prototype.purchase = function () {
        console.log("非订阅内购调起方法");
    };
    t.prototype.subscribe = function () {
        console.log("订阅调起方法");
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
    };
    t.prototype.removeLargePicFeed = function () {};
    t.prototype.removeInterstitialFeed = function () {};
    t.prototype.showLargeFeed = function (t, e) {
        if (void 0 === e) {
            e = 0;
        }
    };
    t.prototype.getShareStatus = function () {
        return null;
    };
    t.prototype.showNativeAds = function () {};
    t.prototype.hideNativeAds = function () {};
    t.prototype.showAppBoxAds = function () {};
    t.prototype.hideAppBoxAds = function () {};
    t.prototype.changeBlockAdsPos = function () {};
    t.prototype.showInsertBannerImg = function (t, e) {
        if (void 0 === e) {
            e = !1;
        }
    };
    t.prototype.hideInsertBannerImg = function () {};
    t.prototype.hideCustomAd1 = function () {};
    t.prototype.hideCustomAd2 = function () {};
    t.prototype.showCustomAd1 = function () {};
    t.prototype.showCustomAd2 = function () {};
    t.prototype.showCustomAd = function () {};
    t.prototype.hideCustomAd = function () {};
    t.prototype.showCustomAd_1 = function () {};
    t.prototype.showCustomAd_2 = function () {};
    t.prototype.hideCustomAd_1 = function () {};
    t.prototype.hideCustomAd_2 = function () {};
    t.prototype.taInit = function () {};
    t.prototype.follow = function (t) {
        t(0);
    };
    t.prototype.sendRankData = function () {};
    t.prototype.showRankList = function () {};
    return t;
})();
exports.BasePlatform = r;
