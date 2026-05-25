"use strict";
cc._RF.push(module, 'b269aaeNGdJMbqtA+vZfflg', 'UnlockUgc');
// scripts/UnlockUgc.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $platformConst = require("./PlatformConst");

var $sceneConst = require("./SceneConst");

var $userConst = require("./UserConst");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $sceneManager = require("./SceneManager");

var $userManager = require("./UserManager");

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var $oPPOMiniADUtils = require("./OPPOMiniADUtils");

var $xMADUtils = require("./XMADUtils");

var y = cc._decorator;
var v = y.ccclass;
var w = (y.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isEnterUgc = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("giveUpBtn", this.clickGiveUp, this);
    this.addBtnOn("videoBtn", this.clickVideo, this);
    this.initView();
  };

  e.prototype.onEnable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showBannerFeed();
    } else {
      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        $oPPOAndroidAdUtils.OPPOAndroidAd.showLargeFeed();
      } else {
        $platformManager.Platform.is($platformConst.EPlatform.OPPO) && $oPPOMiniADUtils.OPPOMiniAD.showLargeFeed();
      }
    }
  };

  e.prototype.onDisable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
      $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
    }

    $platformManager.Platform.hideNativeAds();
  };

  e.prototype.initView = function () {
    cc.game.emit("gamelog", "page014");
  };

  e.prototype.clickGiveUp = function () {
    $popupManager["default"].hide();
  };

  e.prototype.clickVideo = function () {
    var t = this;
    cc.game.emit("gamelog", "btn030");
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        if (t.isEnterUgc) {
          return;
        }

        cc.game.emit("gamelog", "rewarde_btn008");
        t.isEnterUgc = !0;
        $userManager.User.set($userConst.UserData.isUnlockUgc, 1);
        $sceneManager["default"].loadScene($sceneConst.SceneConst.UGC);
      }
    });
  };

  return __decorate([v], e);
}($baseUI["default"]));
exports["default"] = w;

cc._RF.pop();