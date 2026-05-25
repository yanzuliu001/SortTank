"use strict";
cc._RF.push(module, 'aa586TAwwZCtof29abkfMS8', 'ShareTip');
// scripts/ShareTip.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $userConst = require("./UserConst");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

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
var k = b.property;

var C = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.text = null;
    e.iconSp = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("shareBtn", this.clickShare, this);
    this.addBtnOn("noBtn", this.noBtn, this);
    cc.game.on("shareSuc_", this.shareSuc_, this);
    cc.game.on("shareFail_", this.shareFail_, this);
    this.initView();
  };

  e.prototype.onDestroy = function () {
    cc.game.off("shareSuc_", this.shareSuc_, this);
    cc.game.off("shareFail_", this.shareFail_, this);
  };

  e.prototype.clickShare = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.share, {});
    $platformManager.Platform.share();
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
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
          $platformManager.Platform.is($platformConst.EPlatform.VIVO) && $vIVOADUtils.VIVOAD.showCustomAd_1(function () {
            $vIVOADUtils.VIVOAD.showCustomAd_2();
          });
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

  e.prototype.shareSuc_ = function () {
    $tipManager.Tip.show($languageManager["default"].formatStr("分享成功"));

    switch ($userManager.User.getTempData("shareReward")) {
      case "bore":
        $eventManager.Event.emit($eventConst["default"].boreBtn);
        break;

      case "restart":
        cc.game.emit("onRestartBtn");
        break;

      case "tip":
        cc.game.emit("tipSuc");
        break;

      case "chehui":
        window.levelContent._components[0].func_reBackOne();

    }

    var t = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
    t += 1;
    $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, t);
    cc.game.emit("updateTodayShareOrVideoTimes");
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.shareSuc, {});
    $popupManager["default"].hide();
  };

  e.prototype.shareFail_ = function () {
    $tipManager.Tip.show($languageManager["default"].formatStr("分享失败"));
    var t = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
    t += 1;
    $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, t);
    cc.game.emit("updateTodayShareOrVideoTimes");
    $popupManager["default"].hide();
  };

  e.prototype.initView = function () {
    switch ($userManager.User.getTempData("shareReward")) {
      case "bore":
        this.dict.text.getComponent(cc.Label).string = "打开一个新孔位";
        this.dict.title.getComponent(cc.Label).string = "打孔";
        this.dict.icon.getComponent(cc.Sprite).spriteFrame = this.iconSp[2];
        break;

      case "restart":
        this.dict.text.getComponent(cc.Label).string = "重置本小关";
        this.dict.title.getComponent(cc.Label).string = "重置";
        this.dict.icon.getComponent(cc.Sprite).spriteFrame = this.iconSp[0];
        break;

      case "tip":
        this.dict.text.getComponent(cc.Label).string = "获得通关的提示";
        this.dict.title.getComponent(cc.Label).string = "提示";
        this.dict.icon.getComponent(cc.Sprite).spriteFrame = this.iconSp[1];
        break;

      case "chehui":
        this.dict.text.getComponent(cc.Label).string = "撤回到上一步";
        this.dict.title.getComponent(cc.Label).string = "撤回";
        this.dict.icon.getComponent(cc.Sprite).spriteFrame = this.iconSp[3];
    }
  };

  __decorate([k([cc.SpriteFrame])], e.prototype, "iconSp", void 0);

  return __decorate([S], e);
}($baseUI["default"]);

exports["default"] = C;

cc._RF.pop();