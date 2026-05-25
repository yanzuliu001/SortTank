"use strict";
cc._RF.push(module, '5b4a3Z+tCZGCq6Cu9o76iLJ', 'Bore');
// scripts/Bore.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $userConst = require("./UserConst");

var $bmsManager = require("./BmsManager");

var $eventManager = require("./EventManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var $oPPOMiniADUtils = require("./OPPOMiniADUtils");

var $vIVOADUtils = require("./VIVOADUtils");

var $xMADUtils = require("./XMADUtils");

var $shuShuConst = require("./ShuShuConst");

var b = cc._decorator;
var S = b.ccclass;
var k = (b.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.text = null;
    e.oldCurrentScene_ = null;
    e.canClick = !0;
    e.clickBuyID = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("yesBtn", this.yesBtn, this);
    this.addBtnOn("btn1", this.btn0.bind(this, "dakong09"), this);
    this.oldCurrentScene_ = $userManager.User.getTempData("currentScene_");
    $userManager.User.setTempData("currentScene_", 5);
    this.initView();
  };

  e.prototype.onDestroy = function () {
    $userManager.User.setTempData("currentScene_", this.oldCurrentScene_);
  };

  e.prototype.btn0 = function (t) {
    if (this.canClick) {
      this.canClick = !1;
      this.clickBuyID = t;
      console.log("id", t);
      cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
      cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
      cc.game.on(this.clickBuyID + "_suc", this.purchaseSuc, this);
      cc.game.on(this.clickBuyID + "_fail", this.purchaseFail, this);
      $platformManager.Platform.purchase(this.clickBuyID);
    }
  };

  e.prototype.purchaseSuc = function (t) {
    this.canClick = !0;
    cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
    cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
    console.log(this.clickBuyID + "_suc", "购买成功！");

    if ("dakong09" == this.clickBuyID) {
      var e = $userManager.User.get($userConst.UserData.boreTimes) || 0;
      var n = 9 * Number(t) + e;
      $userManager.User.set($userConst.UserData.boreTimes, n);
      var r = $userManager.User.get($userConst.UserData.tipTimes) || 0;
      var o = 2 * Number(t) + r;
      $userManager.User.set($userConst.UserData.tipTimes, o);
      $tipManager.Tip.show("购买成功！");
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store, {
        id: 2,
        pageid: $userManager.User.getTempData("currentScene_")
      });
      $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), $userConst.UserData.boreTimes, String(n)).then(function () {
        console.log("保存boreTimes成功");
      });
      $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), $userConst.UserData.tipTimes, String(o)).then(function () {
        console.log("保存tipTimes成功");
      });
      cc.game.emit("updateBoreView");
      cc.game.emit("updateTipTimesView");
    }
  };

  e.prototype.purchaseFail = function () {
    this.canClick = !0;
    cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
    cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
    console.log(this.clickBuyID + "_suc", "购买失败！");
    $tipManager.Tip.show("购买失败！");
  };

  e.prototype.onEnable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showLargeFeed();
      $xMADUtils.XMAD.showInterstitialFeed_result();
    } else {
      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        $oPPOAndroidAdUtils.OPPOAndroidAd.showLargeFeed(), $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_result();
      } else {
        if ($platformManager.Platform.is($platformConst.EPlatform.OPPO)) {
          $oPPOMiniADUtils.OPPOMiniAD.showLargeFeed(), $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_result();
        } else {
          if ($platformManager.Platform.is($platformConst.EPlatform.VIVO)) {
            $vIVOADUtils.VIVOAD.showCustomAd_1(function () {
              $vIVOADUtils.VIVOAD.showCustomAd_2();
            });
          } else {
            $platformManager.Platform.getConfig().hasPurchase;
          }
        }
      }
    }
  };

  e.prototype.onDisable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.removeLargePicFeed();
    } else {
      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
      }
    }

    $platformManager.Platform.hideNativeAds();
    $platformManager.Platform.hideCustomAd1();
    $platformManager.Platform.hideCustomAd2();
    $platformManager.Platform.hideCustomAd_1();
    $platformManager.Platform.hideCustomAd_2();
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.yesBtn = function () {
    if (this.dict.boreTimesBg.active) {
      var t = $userManager.User.get($userConst.UserData.boreTimes) || 0;
      $eventManager.Event.emit($eventConst["default"].boreBtn);
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
        id: "009",
        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
      });
      $userManager.User.set($userConst.UserData.boreTimes, t - 1);
      cc.game.emit("updateBoreView");
      $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), $userConst.UserData.boreTimes, String(t - 1)).then(function () {
        console.log("保存boreTimes成功");
      });
      return void $popupManager["default"].hide();
    }

    if (this.dict.boreShareIcon.active) {
      cc.game.emit("bore_bore");
    } else {
      console.log("打孔");
      $platformManager.Platform.showRewardAds(function (t) {
        if (0 == t) {
          $eventManager.Event.emit($eventConst["default"].boreBtn);
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
            id: "009",
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
          });
          $popupManager["default"].hide();
        }
      });
    }
  };

  e.prototype.initView = function () {
    $userManager.User.get($userConst.UserData.getBoreByShareTimes);
    $userManager.User.get($userConst.UserData.getTipShareTimes);
    $userManager.User.get($userConst.UserData.getResetByShareTimes);
    $userManager.User.get($userConst.UserData.getDelayedByShareTimes);
    var t = $userManager.User.get($userConst.UserData.boreTimes) || 0;

    if (t) {
      this.dict.boreVideoIcon.active = !1;
      this.dict.boreTimesBg.active = !0;
      this.dict.boreTimes.getComponent(cc.Label).string = "" + t;
    }

    if ($platformManager.Platform.getConfig().hasPurchase) {//
    } else {
      this.dict.shopBtn.active = !1;
      this.dict[1].active = !1;
    }

    var e = $bmsManager.BMS.getKey("PackagePrice");
    this.dict.btn1.children[0].children[0].getComponent(cc.Label).string = "$" + e[1];
  };

  return __decorate([S], e);
}($baseUI["default"]));
exports["default"] = k;

cc._RF.pop();