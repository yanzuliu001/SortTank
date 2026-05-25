"use strict";
cc._RF.push(module, '4e58eZKPJNAtKS2GCLrjH1a', 'MainVideoTip');
// scripts/MainVideoTip.js

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

var $userManager = require("./UserManager");

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var $oPPOMiniADUtils = require("./OPPOMiniADUtils");

var $vIVOADUtils = require("./VIVOADUtils");

var $xMADUtils = require("./XMADUtils");

var w = cc._decorator;
var _ = w.ccclass;
var b = w.property;

var S = function (t) {
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
    this.initView();
  };

  e.prototype.onDestroy = function () {
    cc.game.off("shareSuc_", this.shareSuc_, this);
  };

  e.prototype.shareSuc_ = function () {
    this.noBtn();
  };

  e.prototype.clickShare = function () {
    var t = $bmsManager.BMS.getKey("isItems");
    var e = $bmsManager.BMS.getKey("itemNum");
    var n = $userManager.User.get("nation");
    var r = 0;
    $platformManager.Platform.showRewardAds(function (o) {
      if (0 == o) {
        switch ($userManager.User.getTempData("mainVideoTip")) {
          case "bore":
            $eventManager.Event.emit($eventConst["default"].boreBtn);
            r = 3;
            break;

          case "restart":
            cc.game.emit("onRestartBtn");
            r = 0;
            break;

          case "tip":
            cc.game.emit("tipSuc");
            r = 2;
            break;

          case "chehui":
            window.levelContent._components[0].func_reBackOne();

            r = 1;
        }

        var i = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
        i += 1;
        $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, i);
        cc.game.emit("updateTodayShareOrVideoTimes");

        if (t.includes(n)) {
          var a = e[r];

          if (a > 1) {
            if (1 == r) {
              var c = $userManager.User.get("backTimes") || 0;
              c += a - 1;
              $userManager.User.set("backTimes", c);
              cc.game.emit("updateBackView");
            } else {
              if (2 == r) {
                c = $userManager.User.get($userConst.UserData.tipTimes) || 0;
                c += a - 1;
                $userManager.User.set($userConst.UserData.tipTimes, c);
                cc.game.emit("updateTipTimesView");
              } else {
                if (3 == r) {
                  c = $userManager.User.get($userConst.UserData.boreTimes) || 0, c += a - 1, $userManager.User.set($userConst.UserData.boreTimes, c), cc.game.emit("updateBoreView");
                } else {
                  0 == r && (c = $userManager.User.get("restartTimes") || 0, c += a - 1, $userManager.User.set("restartTimes", c), cc.game.emit("updateRestartView"));
                }
              }
            }
          }
        }

        $popupManager["default"].hide();
      }
    });
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

  e.prototype.initView = function () {
    switch ($userManager.User.getTempData("mainVideoTip")) {
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

  __decorate([b([cc.SpriteFrame])], e.prototype, "iconSp", void 0);

  return __decorate([_], e);
}($baseUI["default"]);

exports["default"] = S;

cc._RF.pop();