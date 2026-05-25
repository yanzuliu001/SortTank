"use strict";
cc._RF.push(module, '95e40GgWH5I+5FzaOf3vW8s', 'XMADUtils');
// scripts/XMADUtils.js

"use strict";

exports.XMAD = void 0;

var $platformConst = require("./PlatformConst");

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var a = function () {
  function t() {}

  t.prototype.showLargeFeed = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原声大图banner]", t);

    if (t) {//
    } else {
      console.log("DownDT", $bmsManager.BMS.getKey("DownDT"));

      if (this.getResByChance($bmsManager.BMS.getKey("DownDT")[0])) {
        $platformManager.Platform.showLargeFeed(this.getPosID(), $bmsManager.BMS.getKey("DownDT")[1]);
      }
    }
  };

  t.prototype.showBannerFeed = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原声banner]", t);

    if (t || 1 == t) {
      console.log("小米 banner");
    } else {
      console.log("小米 showBannerFeed");
      $bmsManager.BMS.getKey("isbanner");
    }
  };

  t.prototype.removeLargePicFeed = function () {
    if (null != this.posID) {
      $platformManager.Platform.removeLargePicFeed(this.posID);
    }
  };

  t.prototype.showInterstitialFeed = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原生插屏]", t);

    if (t) {} else {
      var e = $bmsManager.BMS.getKey("fullCloseChance");
      var n = $bmsManager.BMS.getKey("fullAdChance");
      console.log("fullChance", $bmsManager.BMS.getKey("fullChance"));

      if (this.getResByChance($bmsManager.BMS.getKey("fullChance"))) {
        $platformManager.Platform.showInterstitialFeed(this.getPosID(), 3, e, n);
      }
    }
  };

  t.prototype.showInterstitialFeed_must = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[isCheck-原生插屏结算]", t);

    if (t) {} else {
      var e = $bmsManager.BMS.getKey("fullCloseChance");
      var n = $bmsManager.BMS.getKey("fullAdChance");
      $platformManager.Platform.showInterstitialFeed(this.getPosID(), 3, e, n);
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
        $platformManager.Platform.showInterstitialFeed(this.getPosID(), 3, e, n);
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
    } else if ($platformManager.Platform.getConfig(), $platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      if ($bmsManager.BMS.getKey("videoEx")) {
        this.sucCB_video = t;
        return new Promise(function () {
          cc.game.on("onInterstitialFeedShow", e.onInterstitialFeedShow, e);
          cc.game.on("onInterstitialFeedShowFailed", e.onInterstitialFeedShowFailed, e);
          e.removeLargePicFeed();
          var t = $bmsManager.BMS.getKey("fullCloseChance");
          var n = $bmsManager.BMS.getKey("fullAdChance");
          $platformManager.Platform.showInterstitialFeed(e.getPosID(), 3, t, n);
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
    this.sucCB_video(0);
    cc.game.off("onInterstitialFeedShow", this.onInterstitialFeedShow, this);
    cc.game.off("onInterstitialFeedShowFailed", this.onInterstitialFeedShowFailed, this);
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

  t.prototype.randomNum = function (t, e, n) {
    var r = e - t;
    var o = n || Math.random();
    return t + Math.round(o * r);
  };

  t.prototype.getPosID = function () {
    var t;
    var e = this.randomNum(0, 3);

    if (0 == e) {
      t = $bmsManager.BMS.getKey("natId");
    } else {
      if (1 == e) {
        t = $bmsManager.BMS.getKey("natId1");
      } else {
        if (2 == e) {
          t = $bmsManager.BMS.getKey("natId2");
        } else {
          t = $bmsManager.BMS.getKey("natId3");
        }
      }
    }

    this.posID = t;
    console.log("【广告id】：", e, t);
    return t;
  };

  t.prototype.getResByChance = function (t) {
    var e = 100 * Math.random();
    var n = !1;
    console.log("随机数", e);
    console.log("当前配置概率:" + t);
    return 0 == t ? n : (t >= e && (n = !0), n);
  };

  t.prototype.downloadBtn = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[downloadBtn-isCheck]", t);

    if (0 == t) {
      var e = $bmsManager.BMS.getKey("fullCloseChance");
      var n = $bmsManager.BMS.getKey("fullAdChance");
      var r = $bmsManager.BMS.getKey("isfakeicon");
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/SdkBridge", "showInterstitialFeed", "(Ljava/lang/String;IIIIII)V", this.getPosID(), 3, 0, 0, parseInt(e), parseInt(n), parseInt(r));
    }
  };

  t.prototype.showInsert_must = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[showInsert-isCheck]", t);

    if (0 == t) {
      var e = $bmsManager.BMS.getKey("homechance");
      var n = $bmsManager.BMS.getKey("fullCloseChance");
      var r = $bmsManager.BMS.getKey("fullAdChance");

      if (this.getResByChance(e)) {
        $platformManager.Platform.showInterstitialFeed(this.getPosID(), 3, n, r);
      }
    }
  };

  t.prototype.onForeground = function () {
    var t = $bmsManager.BMS.getKey("isCheck");
    console.log("[onForeground-isCheck]", t);

    if (0 == t) {
      console.log("onForeground");
      var e = $bmsManager.BMS.getKey("appchance");
      var n = $bmsManager.BMS.getKey("fullCloseChance");
      var r = $bmsManager.BMS.getKey("fullAdChance");

      if (this.getResByChance(e)) {
        $platformManager.Platform.showInterstitialFeed(this.getPosID(), 3, n, r);
      }
    }
  };

  return t;
}();

exports.XMAD = new a();

cc._RF.pop();