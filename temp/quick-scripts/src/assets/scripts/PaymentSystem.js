"use strict";
cc._RF.push(module, '049c9q3OilJfo6n1bxcW2Ls', 'PaymentSystem');
// scripts/PaymentSystem.js

"use strict";

var $userConst = require("./UserConst");

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $eventConst = require("./EventConst");

var $localStorageConst = require("./LocalStorageConst");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $timeManager = require("./TimeManager");

var $eventManager = require("./EventManager");

var $adjustEventSystem = require("./AdjustEventSystem");

var $localStorageManager = require("./LocalStorageManager");

var $popupManager = require("./PopupManager");

var $popupConst = require("./PopupConst");

var v = new (function () {
  function t() {
    this.allGoodsName = ["remove_ads", "remove_ads_pack", "special_pack", "small_st", "medium_st", "big_st", "huge_st", "mega_st", "brilliant_st", "day_vip_3", "day_vip_7", "day_vip_30", "master_pass", "piggy_bank", "starter_pack", "value_pack"];
    this.price = {
      remove_ads: 4.99,
      remove_ads_pack: 7.99,
      special_pack: 2.49,
      small_st: 2.99,
      medium_st: 7.99,
      big_st: 14.99,
      huge_st: 32.99,
      mega_st: 52.99,
      brilliant_st: 99.99,
      day_vip_3: 4.99,
      day_vip_7: 10.99,
      day_vip_30: 29.99,
      master_pass: 6.99,
      piggy_bank: 1.99,
      starter_pack: 0.99,
      value_pack: 1.99
    };
    this.clickBuyID = null;
    this.canClick = !0;
    this.isSubscribe = !1;
    this.goodsEvent = {
      remove_ads: 1,
      remove_ads_pack: 2,
      special_pack: 3,
      small_st: 4,
      medium_st: 5,
      big_st: 6,
      huge_st: 7,
      mega_st: 8,
      brilliant_st: 9,
      master_pass: 14,
      piggy_bank: 13,
      day_vip_3: 10,
      day_vip_7: 11,
      day_vip_30: 12,
      starter_pack: 15,
      value_pack: 16
    };
  }

  t.prototype.init = function () {
    var t = !1;
    var e = !1;
    var n = !1;
    var r = $localStorageManager["default"].get($localStorageConst["default"].master_pass) || !1;
    var o = $localStorageManager["default"].get($localStorageConst["default"].piggy_bank) || !1;
    var a = $localStorageManager["default"].get($localStorageConst["default"].starter_pack) || !1;
    var s = $localStorageManager["default"].get($localStorageConst["default"].value_pack) || !1; // try {
    //     t = jsb.reflection.callStaticMethod(
    //         "org/cocos2dx/javascript/AppActivity",
    //         "checkInAppOrder",
    //         "(Ljava/lang/String;)Z",
    //         "remove_ads"
    //     );
    //     e = jsb.reflection.callStaticMethod(
    //         "org/cocos2dx/javascript/AppActivity",
    //         "checkInAppOrder",
    //         "(Ljava/lang/String;)Z",
    //         "remove_ads_pack"
    //     );
    //     n = jsb.reflection.callStaticMethod(
    //         "org/cocos2dx/javascript/AppActivity",
    //         "checkInAppOrder",
    //         "(Ljava/lang/String;)Z",
    //         "special_pack"
    //     );
    //     r = jsb.reflection.callStaticMethod(
    //         "org/cocos2dx/javascript/AppActivity",
    //         "checkInAppOrder",
    //         "(Ljava/lang/String;)Z",
    //         "master_pass"
    //     );
    //     o = jsb.reflection.callStaticMethod(
    //         "org/cocos2dx/javascript/AppActivity",
    //         "checkInAppOrder",
    //         "(Ljava/lang/String;)Z",
    //         "piggy_bank"
    //     );
    //     a = jsb.reflection.callStaticMethod(
    //         "org/cocos2dx/javascript/AppActivity",
    //         "checkInAppOrder",
    //         "(Ljava/lang/String;)Z",
    //         "starter_pack"
    //     );
    //     s = jsb.reflection.callStaticMethod(
    //         "org/cocos2dx/javascript/AppActivity",
    //         "checkInAppOrder",
    //         "(Ljava/lang/String;)Z",
    //         "value_pack"
    //     );
    // } catch (c) {
    //     console.log("checkInAppOrder-error", c);
    // }

    $memoryStorageManager["default"].set($memoryStorageConst["default"].remove_ads, t);
    $memoryStorageManager["default"].set($memoryStorageConst["default"].remove_ads_pack, e);
    $memoryStorageManager["default"].set($memoryStorageConst["default"].special_pack, n);
    $localStorageManager["default"].set($localStorageConst["default"].master_pass, r);
    $localStorageManager["default"].set($localStorageConst["default"].piggy_bank, o);
    $localStorageManager["default"].set($localStorageConst["default"].starter_pack, a);
    $localStorageManager["default"].set($localStorageConst["default"].value_pack, s);

    if (t) {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].remove_ads, t);
    }

    if (e) {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].remove_ads_pack, e);
    }

    if (n) {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].special_pack, n);
    }

    if (t || e) {
      console.log("去插屏广告", t, e);
      $platformManager.Platform.setIsBuyRemoveInsert(!0);
    }
  };

  t.prototype.clickBuy = function (t) {
    if (this.canClick) {
      this.canClick = !1;
      this.clickBuyID = t;
      console.log("id", t);
      cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
      cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
      cc.game.on(this.clickBuyID + "_suc", this.purchaseSuc, this);
      cc.game.on(this.clickBuyID + "_fail", this.purchaseFail, this);
      cc.game.emit("gamelog_Thinking", "Gift_tap", {
        id: {
          remove_ads: 1,
          remove_ads_pack: 2,
          special_pack: 3,
          small_st: 4,
          medium_st: 5,
          big_st: 6,
          huge_st: 7,
          mega_st: 8,
          brilliant_st: 9,
          master_pass: 14,
          piggy_bank: 13,
          starter_pack: 15,
          value_pack: 16
        }[t]
      });
      $platformManager.Platform.purchase(this.clickBuyID);
    }
  };

  t.prototype.subscribeBuy = function (t) {
    if (this.canClick) {
      this.canClick = !1;

      if ($userManager.User.getTempData("isSubscribeVIP")) {
        return $tipManager.Tip.show("已经订阅VIP");
      }

      this.clickBuyID = t;
      console.log("id", t);
      cc.game.off(this.clickBuyID + "_suc", this.subscribeSuc, this);
      cc.game.off(this.clickBuyID + "_fail", this.subscribeFail, this);
      cc.game.on(this.clickBuyID + "_suc", this.subscribeSuc, this);
      cc.game.on(this.clickBuyID + "_fail", this.subscribeFail, this);
      cc.game.emit("gamelog_Thinking", "Gift_tap", {
        id: {
          day_vip_3: 10,
          day_vip_7: 11,
          day_vip_30: 12
        }[t]
      });
      $platformManager.Platform.subscribe({
        day_vip_3: "3_day_vip",
        day_vip_7: "7_day_vip",
        day_vip_30: "30_day_vip"
      }[t]);
    }
  };

  t.prototype.getGoodsLocalPrice = function (t, e) {
    if (window.getProductListJsonStr) {
      for (var n = 0; n < window.getProductListJsonStr.length; n++) {
        var r = window.getProductListJsonStr[n];

        if (r.product == e) {
          t.getComponent(cc.Label).string = r.oneTimePurchaseOfferDetails.zzc + r.oneTimePurchaseOfferDetails.zzb / 1e6;
        }
      }
    }
  };

  t.prototype.purchaseSuc = function () {
    this.canClick = !0;
    cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
    cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
    console.log(this.clickBuyID + "_suc", "购买成功！");
    cc.game.emit("gamelog_Thinking", "Gift_suc", {
      id: this.goodsEvent[this.clickBuyID]
    });
    $adjustEventSystem["default"].todayPay(this.price[this.clickBuyID]);

    switch (this.clickBuyID) {
      case "special_pack":
        this.cardReward(10);
        this.coinReward(100);
        this.skinReward(13);
        $popupManager["default"].show($popupConst.PopupConst.Get3);
        $tipManager.Tip.show("购买成功！");
        $localStorageManager["default"].set($localStorageConst["default"].hasSpecialBtn, 1);
        cc.game.emit("special_pack");
        break;

      case "starter_pack":
        $tipManager.Tip.show("购买成功！");
        this.cardReward(5);
        this.coinReward(100);
        this.skinReward(21);
        $popupManager["default"].show($popupConst.PopupConst.GetNewHand);
        $localStorageManager["default"].set($localStorageConst["default"].starter_pack, !0);
        cc.game.emit("starter_pack");
        break;

      case "value_pack":
        $tipManager.Tip.show("购买成功！");
        this.cardReward(8);
        this.coinReward(100);
        $popupManager["default"].show($popupConst.PopupConst.GetValuePack);
        $localStorageManager["default"].set($localStorageConst["default"].value_pack, !0);
        cc.game.emit("value_pack");
        break;

      case "remove_ads":
        $platformManager.Platform.setIsBuyRemoveInsert(!0);
        $localStorageManager["default"].set($localStorageConst["default"].isNoAD, 1);
        $memoryStorageManager["default"].set($memoryStorageConst["default"].remove_ads, !0);
        $tipManager.Tip.show("购买成功！");
        cc.game.emit("remove_ads");
        break;

      case "remove_ads_pack":
        $platformManager.Platform.setIsBuyRemoveInsert(!0);
        $platformManager.Platform.hideBanner();
        $localStorageManager["default"].set($localStorageConst["default"].isNoAD, 1);
        $memoryStorageManager["default"].set($memoryStorageConst["default"].remove_ads_pack, !0);
        this.cardReward(15);
        this.skinReward(14);
        $memoryStorageManager["default"].set($memoryStorageConst["default"].rewardType, "remove_ads_pack");
        $memoryStorageManager["default"].set($memoryStorageConst["default"].reward, [["card", 15], ["skin", 15]]);
        $popupManager["default"].show($popupConst.PopupConst.Get);
        cc.game.emit("remove_ads");
        $tipManager.Tip.show("购买成功！");
        break;

      case "small_st":
        this.cardReward(10);
        $tipManager.Tip.show("购买成功！");
        break;

      case "medium_st":
        this.cardReward(30);
        $tipManager.Tip.show("购买成功！");
        break;

      case "big_st":
        this.cardReward(60);
        $tipManager.Tip.show("购买成功！");
        break;

      case "huge_st":
        this.cardReward(150);
        $tipManager.Tip.show("购买成功！");
        break;

      case "mega_st":
        this.cardReward(300);
        $tipManager.Tip.show("购买成功！");
        break;

      case "brilliant_st":
        this.cardReward(600);
        $tipManager.Tip.show("购买成功！");
        break;

      case "master_pass":
        $tipManager.Tip.show("购买成功！");
        $localStorageManager["default"].set($localStorageConst["default"].master_pass, !0);
        break;

      case "piggy_bank":
        $tipManager.Tip.show("购买成功！");
        $localStorageManager["default"].set($localStorageConst["default"].piggy_bank, !0);
        cc.game.emit("piggy_bank");
        this.coinReward(4e3);
    }
  };

  t.prototype.purchaseFail = function () {
    this.canClick = !0;
    cc.game.off(this.clickBuyID + "_suc", this.purchaseSuc, this);
    cc.game.off(this.clickBuyID + "_fail", this.purchaseFail, this);
    console.log(this.clickBuyID + "_suc", "购买失败！");
    $tipManager.Tip.show("购买失败！");
  };

  t.prototype.subscribeSuc = function () {
    this.canClick = !0;
    cc.game.off(this.clickBuyID + "_suc", this.subscribeSuc, this);
    cc.game.off(this.clickBuyID + "_fail", this.subscribeFail, this);
    console.log("" + this.clickBuyID, "购买成功！");
    $tipManager.Tip.show("订阅成功！");
    $adjustEventSystem["default"].todayPay(this.price[this.clickBuyID]);
    var t = $timeManager["default"].getCurrentTime();
    $localStorageManager["default"].set($localStorageConst["default"].vipStartTime, t);
    this.saveServerData($localStorageConst["default"].vipStartTime, t);
    $platformManager.Platform.setIsBuyRemoveInsert(!0);
    $memoryStorageManager["default"].set($memoryStorageConst["default"].isVIP, !0);

    switch (this.clickBuyID) {
      case "day_vip_3":
        $localStorageManager["default"].set($localStorageConst["default"].vipType, 3);
        this.cardReward(10);
        $localStorageManager["default"].set($localStorageConst["default"].isReceiveVIP, 1);
        break;

      case "day_vip_7":
        $localStorageManager["default"].set($localStorageConst["default"].vipType, 7);
        $localStorageManager["default"].set($localStorageConst["default"].isReceiveVIP, 1);
        this.cardReward(25);
        break;

      case "day_vip_30":
        $localStorageManager["default"].set($localStorageConst["default"].vipType, 30);
        $localStorageManager["default"].set($localStorageConst["default"].isReceiveVIP, 1);
        this.cardReward(65);
    }

    cc.game.emit("updateVIP");
  };

  t.prototype.subscribeFail = function () {
    this.canClick = !0;
    console.log("yongjiuhezi_fail", "购买失败！");
    $tipManager.Tip.show("订阅失败！");
  };

  t.prototype.noAdReward = function (t) {
    if ("noads" == t) {
      $userManager.User.setTempData("noads", !0);
    } else {
      $userManager.User.setTempData("noads_plus", !0);
    }

    $platformManager.Platform.setIsBuyRemoveInsert(!0);
  };

  t.prototype.skinReward = function (t) {
    var e = t;
    var n = $userManager.User.get($userConst.UserData.getLockSkinList);

    if (n[0].includes(e)) {//
    } else {
      n[0].push(e);
    }

    $userManager.User.set($userConst.UserData.getLockSkinList, n);
    $userManager.User.setTempData("chooseSkinPage", 0);
    $userManager.User.setTempData("chooseSkin", e + 1);
  };

  t.prototype.cardReward = function (t) {
    var e = ($localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0) + t;
    $localStorageManager["default"].set($localStorageConst["default"].cardAmount, e);
  };

  t.prototype.coinReward = function (t) {
    var e = ($userManager.User.get("coin") || 0) + t;
    $userManager.User.set("coin", e);
    cc.game.emit("updateCoin");
    this.saveServerData("coin", e);
    $eventManager.Event.emit($eventConst["default"].COIN_UPDATE);
  };

  t.prototype.saveServerData = function (t, e) {
    e = e.toString();
    $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), t, e).then(function () {
      console.log("保存" + t + "成功:" + e);
    });
  };

  return t;
}())();
exports["default"] = v;

cc._RF.pop();