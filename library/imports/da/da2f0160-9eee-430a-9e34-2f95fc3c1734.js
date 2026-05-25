"use strict";
cc._RF.push(module, 'da2f0Fgnu5DCp40L5X8PBc0', 'SignInOld');
// scripts/SignInOld.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $popupConst = require("./PopupConst");

var $userConst = require("./UserConst");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $vIVOADUtils = require("./VIVOADUtils");

var $xMADUtils = require("./XMADUtils");

var $shuShuConst = require("./ShuShuConst");

var S = cc._decorator;
var k = S.ccclass;
var C = (S.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.amountArr = [100, 200, 300, 500, 500, 500, 900];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("videoBtn", this.videoBtn, this);
    this.addBtnOn("receiveBtn", this.receiveBtn, this);
    this.addBtnOn("cardBtn", this.cardBtn, this);
    this.initView();
  };

  e.prototype.onEnable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showBannerFeed();
    } else {
      if ($platformManager.Platform.is($platformConst.EPlatform.VIVO)) {
        $vIVOADUtils.VIVOAD.showCustomAd_1();
      } else {
        $platformManager.Platform.showBanner();
      }
    }
  };

  e.prototype.onDisable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $platformManager.Platform.removeBannerFeed();
    }

    $platformManager.Platform.hideCustomAd();
    $platformManager.Platform.hideCustomAd_1();
    $platformManager.Platform.hideCustomAd_2();
  };

  e.prototype.initView = function () {
    var t = this;
    var e = $userManager.User.get($userConst.UserData.signInDays) || 0;
    var n = $userManager.User.get($userConst.UserData.todaySignIn) || 0;
    $userManager.User.set($userConst.UserData.signInDays, e);
    $userManager.User.set($userConst.UserData.todaySignIn, n);
    this.dict.content2.children.forEach(function (e, n) {
      e.getChildByName("day").getComponent(cc.Label).string = $languageManager["default"].formatStr("第%d天", n + 1);
      e.getChildByName("amount").getComponent(cc.Label).string = "" + t.amountArr[n];
      e.getChildByName("mask").active = !1;
      e.getChildByName("gou").active = !1;
      e.name = "" + n;
      e.on(cc.Node.EventType.TOUCH_START, t.clickSign, t);
    });

    for (var r = 0; r < e; r++) {
      var o = this.dict.content2.children[r];
      o.getChildByName("mask").active = !0;
      o.getChildByName("gou").active = !0;
    }

    var i = $localStorageManager["default"].get($localStorageConst["default"].todayReceiveCard) || 0;
    this.dict.cardBtn.active = !i;

    if ($platformManager.Platform.getConfig().hasPurchase) {//
    } else {
      this.dict.cardBtn.active = !1;
    }
  };

  e.prototype.clickSign = function () {};

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.videoBtn = function () {
    var t = this;
    var e = $userManager.User.get($userConst.UserData.todaySignIn) || 0;
    var n = $userManager.User.get($userConst.UserData.signInDays) || 0;

    if (e) {
      return $tipManager.Tip.show("今天已签到");
    } else {
      if (n >= 7) {
        return $tipManager.Tip.show("已经全部签到");
      } else {
        return void $platformManager.Platform.showRewardAds(function (e) {
          if (0 == e) {
            cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
              id: "015",
              lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
              mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
            });
            t.receiveBtn(2);
          }
        });
      }
    }
  };

  e.prototype.cardBtn = function () {
    var t = this;
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        t.cardReward(1);
        $localStorageManager["default"].set($localStorageConst["default"].todayReceiveCard, 1);
        t.dict.cardBtn.active = !1;
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          id: "078",
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
        });
      }
    });
  };

  e.prototype.cardReward = function (t) {
    var e = ($localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0) + t;
    $localStorageManager["default"].set($localStorageConst["default"].cardAmount, e);
    $tipManager.Tip.show($languageManager["default"].formatStr("万能卡x%d", t));
  };

  e.prototype.receiveBtn = function (t) {
    if (void 0 === t) {
      t = 1;
    }

    var e = $userManager.User.get($userConst.UserData.todaySignIn) || 0;
    var n = $userManager.User.get($userConst.UserData.signInDays) || 0;

    if (e) {
      return $tipManager.Tip.show($languageManager["default"].formatStr("今天已签到"));
    }

    if (n >= 7) {
      return $tipManager.Tip.show("已经全部签到");
    }

    $userManager.User.setTempData($userConst.TempData.isFirstBack, !1);
    $userManager.User.setTempData($userConst.TempData.isFirst, !1);
    $tipManager.Tip.show($languageManager["default"].formatStr("签到成功！"));
    cc.game.emit("signInHint");
    $userManager.User.set($userConst.UserData.signInDays, n + 1);
    $userManager.User.set($userConst.UserData.todaySignIn, 1);
    var r = $userManager.User.get($userConst.UserData.getLockSkinList);
    var o = r[0];
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Sign, {
      type: t - 1,
      id: n + 1
    });

    if (n + 1 == 2) {
      var i = 9;

      if (o.includes(i)) {//
      } else {
        r[0].push(i);
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Skin_unlock, {
          mode: 0,
          id: i
        });
      }

      $userManager.User.set($userConst.UserData.getLockSkinList, r);
      $userManager.User.setTempData("chooseSkinPage", 0);
      $userManager.User.setTempData("chooseSkin", i + 1);
      $popupManager["default"].show($popupConst.PopupConst.GetSkin);
    } else {
      if (n + 1 == 7) {
        i = 10;

        if (o.includes(i)) {//
        } else {
          r[0].push(i);
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Skin_unlock, {
            mode: 0,
            id: i
          });
        }

        $userManager.User.set($userConst.UserData.getLockSkinList, r);
        $userManager.User.setTempData("chooseSkinPage", 0);
        $userManager.User.setTempData("chooseSkin", i + 1);
        $popupManager["default"].show($popupConst.PopupConst.GetSkin);
      }
    }

    var a = $userManager.User.get("coin");
    var c = this.amountArr[n] * t;
    $userManager.User.set("coin", a + c);
    $eventManager.Event.emit($eventConst["default"].COIN_EFFECT);
    this.initView();
  };

  return __decorate([k], e);
}($baseUI["default"]));
exports["default"] = C;

cc._RF.pop();