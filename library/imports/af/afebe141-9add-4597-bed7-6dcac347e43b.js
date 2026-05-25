"use strict";
cc._RF.push(module, 'afebeFBmt1Fl77XbcrDR+Q7', 'OPPOMiniADUtils');
// scripts/OPPOMiniADUtils.js

"use strict";

exports.OPPOMiniAD = void 0;

var $platformConst = require("./PlatformConst");

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var a = function () {
  function t() {}

  t.prototype.showLargeFeed = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原声大图banner]", t);

    if (t) {} else if (console.log("DownDT", $bmsManager.BMS.getKey("DownDT")), this.getResByChance($bmsManager.BMS.getKey("DownDT")[0])) {
      var e = this.getResByChance($bmsManager.BMS.getKey("DownDT")[1]);
      $platformManager.Platform.showNativeAds({
        type: 0,
        isMistakeClose: e,
        container: cc.find("Canvas").parent.getChildByName("myPersistRootNode").getChildByName("nativeBannerNode")
      });
    }
  };

  t.prototype.clickAdJump = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-触发点击广告跳转]", t);

    if (t) {//
    } else {
      console.log("nextAdChange", $bmsManager.BMS.getKey("nextAdChange"));

      if (this.getResByChance($bmsManager.BMS.getKey("nextAdChange"))) {
        $platformManager.Platform.clickAdJump();
      }
    }
  };

  t.prototype.showSplash = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-showSplash]", t);

    if (t) {//
    } else {
      if ($bmsManager.BMS.getKey("openkp")) {
        $platformManager.Platform.showSplash();
      }
    }
  };

  t.prototype.getPosID = function () {
    var t = $bmsManager.BMS.getKey("natId1");
    this.posID = t;
    console.log("【广告id】：", t);
    return t;
  };

  t.prototype.getPosID2 = function () {
    var t = $bmsManager.BMS.getKey("natId1");
    this.posID = t;
    console.log("【广告id】：", t);
    return t;
  };

  t.prototype.randomNum = function (t, e, n) {
    var r = e - t;
    var o = n || Math.random();
    return t + Math.round(o * r);
  };

  t.prototype.showBannerFeed = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原声banner]", t);

    if (t || 1 == t) {
      console.log("oppo小游戏 banner");
    } else if (console.log("oppo小游戏 showBannerFeed"), $bmsManager.BMS.getKey("isbanner")) {
      var e = this.getResByChance($bmsManager.BMS.getKey("banCloseChance"));
      $platformManager.Platform.showNativeAds({
        type: 0,
        isMistakeClose: e,
        container: cc.find("Canvas").parent.getChildByName("myPersistRootNode").getChildByName("nativeBannerNode")
      });
    }
  };

  t.prototype.removeLargePicFeed = function () {
    if (null != this.posID) {
      $platformManager.Platform.hideNativeAds();
    }
  };

  t.prototype.showInterstitialFeed = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原生插屏]", t);

    if (t) {} else {
      var e = $bmsManager.BMS.getKey("fullCloseChance");
      var n = $bmsManager.BMS.getKey("fullAdChance");
      var r = $bmsManager.BMS.getKey("fullChance");
      console.log("fullChance", r, this.getResByChance(r));

      if (this.getResByChance(r)) {
        var a = this.getResByChance(e);
        var s = this.getResByChance(n);
        $platformManager.Platform.hideNativeAds();
        console.log("调用显示-原生插屏");
        $platformManager.Platform.showNativeAds({
          type: 1,
          isMistakeClose: a,
          isMistakeClose_blank: s,
          container: cc.find("Canvas").parent.getChildByName("myPersistRootNode").getChildByName("nativeInsertNode")
        });
      }
    }
  };

  t.prototype.removeInterstitialFeed = function () {
    if (null != this.posID2) {
      $platformManager.Platform.hideNativeAds();
    }
  };

  t.prototype.showInterstitialFeed_must = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原生插屏结算]", t);

    if (t) {} else {
      var e = $bmsManager.BMS.getKey("fullCloseChance");
      var n = $bmsManager.BMS.getKey("fullAdChance");
      var r = this.getResByChance(e);
      var a = this.getResByChance(n);
      $platformManager.Platform.hideNativeAds();
      $platformManager.Platform.showNativeAds({
        type: 1,
        isMistakeClose: r,
        isMistakeClose_blank: a,
        container: cc.find("Canvas").parent.getChildByName("myPersistRootNode").getChildByName("nativeInsertNode")
      });
    }
  };

  t.prototype.showInterstitialFeed_result = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原生插屏结算]", t);

    if (t) {} else {
      var e = $bmsManager.BMS.getKey("fullCloseChance");
      var n = $bmsManager.BMS.getKey("fullAdChance");
      console.log("fullSettleChance", $bmsManager.BMS.getKey("fullSettleChance"));

      if (this.getResByChance($bmsManager.BMS.getKey("fullSettleChance"))) {
        var r = this.getResByChance(e);
        var a = this.getResByChance(n);
        $platformManager.Platform.hideNativeAds();
        $platformManager.Platform.showNativeAds({
          type: 1,
          isMistakeClose: r,
          isMistakeClose_blank: a,
          container: cc.find("Canvas").parent.getChildByName("myPersistRootNode").getChildByName("nativeInsertNode")
        });
      }
    }
  };

  t.prototype.showRewardVideo = function (t) {
    var e = this;
    var n = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-视频]", n);

    if (n) {
      $platformManager.Platform.showRewardAds_xiaomi(function (e) {
        if (0 == e) {
          t(0);
        }
      });
    } else if ($platformManager.Platform.getConfig(), $platformManager.Platform.is($platformConst.EPlatform.OPPO)) {
      if ($bmsManager.BMS.getKey("videoEx")) {
        this.sucCB_video = t;
        return new Promise(function () {
          cc.game.on("onInterstitialFeedShow", e.onInterstitialFeedShow, e);
          cc.game.on("onInterstitialFeedShowFailed", e.onInterstitialFeedShowFailed, e);
          e.removeLargePicFeed();
          var t = $bmsManager.BMS.getKey("fullCloseChance");
          var n = $bmsManager.BMS.getKey("fullAdChance");
          var r = e.getResByChance(t);
          var a = e.getResByChance(n);
          $platformManager.Platform.hideNativeAds();
          $platformManager.Platform.showNativeAds({
            type: 1,
            isMistakeClose: r,
            isMistakeClose_blank: a,
            container: cc.find("Canvas").parent.getChildByName("myPersistRootNode").getChildByName("nativeInsertNode")
          });
          console.log("视频变成插屏");
        });
      }

      $platformManager.Platform.showRewardAds_xiaomi(function (e) {
        if (0 == e) {
          t(0);
        }
      });
    } else {
      $platformManager.Platform.showRewardAds_xiaomi(function (e) {
        if (0 == e) {
          t(0);
        }
      });
    }
  };

  t.prototype.onInterstitialFeedShow = function () {
    var t = this;
    setTimeout(function () {
      t.sucCB_video(0);
      cc.game.off("onInterstitialFeedShow", t.onInterstitialFeedShow, t);
      cc.game.off("onInterstitialFeedShowFailed", t.onInterstitialFeedShowFailed, t);
    }, 1);
  };

  t.prototype.onInterstitialFeedShowFailed = function () {
    var t = this;
    $platformManager.Platform.showRewardAds_xiaomi(function (e) {
      if (0 == e) {
        t.sucCB_video(0);
      }
    });
    cc.game.off("onInterstitialFeedShow", this.onInterstitialFeedShow, this);
    cc.game.off("onInterstitialFeedShowFailed", this.onInterstitialFeedShowFailed, this);
  };

  t.prototype.getResByChance = function (t) {
    var e = 100 * Math.random();
    var n = !1;
    console.log("随机数", e);
    console.log("当前配置概率:" + t);
    return 0 == t ? n : (t >= e && (n = !0), n);
  };

  return t;
}();

exports.OPPOMiniAD = new a();

cc._RF.pop();