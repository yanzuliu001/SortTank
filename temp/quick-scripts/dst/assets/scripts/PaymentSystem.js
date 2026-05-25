
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PaymentSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BheW1lbnRTeXN0ZW0uanMiXSwibmFtZXMiOlsiJHVzZXJDb25zdCIsInJlcXVpcmUiLCIkYm1zTWFuYWdlciIsIiRwbGF0Zm9ybU1hbmFnZXIiLCIkdGlwTWFuYWdlciIsIiR1c2VyTWFuYWdlciIsIiRldmVudENvbnN0IiwiJGxvY2FsU3RvcmFnZUNvbnN0IiwiJG1lbW9yeVN0b3JhZ2VDb25zdCIsIiRtZW1vcnlTdG9yYWdlTWFuYWdlciIsIiR0aW1lTWFuYWdlciIsIiRldmVudE1hbmFnZXIiLCIkYWRqdXN0RXZlbnRTeXN0ZW0iLCIkbG9jYWxTdG9yYWdlTWFuYWdlciIsIiRwb3B1cE1hbmFnZXIiLCIkcG9wdXBDb25zdCIsInYiLCJ0IiwiYWxsR29vZHNOYW1lIiwicHJpY2UiLCJyZW1vdmVfYWRzIiwicmVtb3ZlX2Fkc19wYWNrIiwic3BlY2lhbF9wYWNrIiwic21hbGxfc3QiLCJtZWRpdW1fc3QiLCJiaWdfc3QiLCJodWdlX3N0IiwibWVnYV9zdCIsImJyaWxsaWFudF9zdCIsImRheV92aXBfMyIsImRheV92aXBfNyIsImRheV92aXBfMzAiLCJtYXN0ZXJfcGFzcyIsInBpZ2d5X2JhbmsiLCJzdGFydGVyX3BhY2siLCJ2YWx1ZV9wYWNrIiwiY2xpY2tCdXlJRCIsImNhbkNsaWNrIiwiaXNTdWJzY3JpYmUiLCJnb29kc0V2ZW50IiwicHJvdG90eXBlIiwiaW5pdCIsImUiLCJuIiwiciIsImdldCIsIm8iLCJhIiwicyIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJQbGF0Zm9ybSIsInNldElzQnV5UmVtb3ZlSW5zZXJ0IiwiY2xpY2tCdXkiLCJjYyIsImdhbWUiLCJvZmYiLCJwdXJjaGFzZVN1YyIsInB1cmNoYXNlRmFpbCIsIm9uIiwiZW1pdCIsImlkIiwicHVyY2hhc2UiLCJzdWJzY3JpYmVCdXkiLCJVc2VyIiwiZ2V0VGVtcERhdGEiLCJUaXAiLCJzaG93Iiwic3Vic2NyaWJlU3VjIiwic3Vic2NyaWJlRmFpbCIsInN1YnNjcmliZSIsImdldEdvb2RzTG9jYWxQcmljZSIsIndpbmRvdyIsImdldFByb2R1Y3RMaXN0SnNvblN0ciIsImxlbmd0aCIsInByb2R1Y3QiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIm9uZVRpbWVQdXJjaGFzZU9mZmVyRGV0YWlscyIsInp6YyIsInp6YiIsInRvZGF5UGF5IiwiY2FyZFJld2FyZCIsImNvaW5SZXdhcmQiLCJza2luUmV3YXJkIiwiUG9wdXBDb25zdCIsIkdldDMiLCJoYXNTcGVjaWFsQnRuIiwiR2V0TmV3SGFuZCIsIkdldFZhbHVlUGFjayIsImlzTm9BRCIsImhpZGVCYW5uZXIiLCJyZXdhcmRUeXBlIiwicmV3YXJkIiwiR2V0IiwiZ2V0Q3VycmVudFRpbWUiLCJ2aXBTdGFydFRpbWUiLCJzYXZlU2VydmVyRGF0YSIsImlzVklQIiwidmlwVHlwZSIsImlzUmVjZWl2ZVZJUCIsIm5vQWRSZXdhcmQiLCJzZXRUZW1wRGF0YSIsIlVzZXJEYXRhIiwiZ2V0TG9ja1NraW5MaXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwiY2FyZEFtb3VudCIsIkV2ZW50IiwiQ09JTl9VUERBVEUiLCJ0b1N0cmluZyIsIkJNUyIsImdldENvbmZpZyIsImZsYWciLCJ0aGVuIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlJLFlBQVksR0FBR0osT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUssV0FBVyxHQUFHTCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJTSxrQkFBa0IsR0FBR04sT0FBTyxDQUFDLHFCQUFE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LElBTEYsQ0FLTyxZQUFXO01BQ2RsRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFPbEMsQ0FBUCxHQUFXLEtBQVgsR0FBbUJ5QixDQUEvQjtJQUNILENBUEQ7RUFRSCxDQVZEOztFQVdBLE9BQU96QixDQUFQO0FBQ0gsQ0E1WFcsRUFBSixHQUFSO0FBNlhBb0csT0FBTyxXQUFQLEdBQWtCckcsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkdXNlckNvbnN0ID0gcmVxdWlyZShcIi4vVXNlckNvbnN0XCIpO1xudmFyICRibXNNYW5hZ2VyID0gcmVxdWlyZShcIi4vQm1zTWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICR0aXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vVGlwTWFuYWdlclwiKTtcbnZhciAkdXNlck1hbmFnZXIgPSByZXF1aXJlKFwiLi9Vc2VyTWFuYWdlclwiKTtcbnZhciAkZXZlbnRDb25zdCA9IHJlcXVpcmUoXCIuL0V2ZW50Q29uc3RcIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJG1lbW9yeVN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL01lbW9yeVN0b3JhZ2VDb25zdFwiKTtcbnZhciAkbWVtb3J5U3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9NZW1vcnlTdG9yYWdlTWFuYWdlclwiKTtcbnZhciAkdGltZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9UaW1lTWFuYWdlclwiKTtcbnZhciAkZXZlbnRNYW5hZ2VyID0gcmVxdWlyZShcIi4vRXZlbnRNYW5hZ2VyXCIpO1xudmFyICRhZGp1c3RFdmVudFN5c3RlbSA9IHJlcXVpcmUoXCIuL0FkanVzdEV2ZW50U3lzdGVtXCIpO1xudmFyICRsb2NhbFN0b3JhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlTWFuYWdlclwiKTtcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xudmFyICRwb3B1cENvbnN0ID0gcmVxdWlyZShcIi4vUG9wdXBDb25zdFwiKTtcbnZhciB2ID0gbmV3KChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLmFsbEdvb2RzTmFtZSA9IFtcbiAgICAgICAgICAgIFwicmVtb3ZlX2Fkc1wiLFxuICAgICAgICAgICAgXCJyZW1vdmVfYWRzX3BhY2tcIixcbiAgICAgICAgICAgIFwic3BlY2lhbF9wYWNrXCIsXG4gICAgICAgICAgICBcInNtYWxsX3N0XCIsXG4gICAgICAgICAgICBcIm1lZGl1bV9zdFwiLFxuICAgICAgICAgICAgXCJiaWdfc3RcIixcbiAgICAgICAgICAgIFwiaHVnZV9zdFwiLFxuICAgICAgICAgICAgXCJtZWdhX3N0XCIsXG4gICAgICAgICAgICBcImJyaWxsaWFudF9zdFwiLFxuICAgICAgICAgICAgXCJkYXlfdmlwXzNcIixcbiAgICAgICAgICAgIFwiZGF5X3ZpcF83XCIsXG4gICAgICAgICAgICBcImRheV92aXBfMzBcIixcbiAgICAgICAgICAgIFwibWFzdGVyX3Bhc3NcIixcbiAgICAgICAgICAgIFwicGlnZ3lfYmFua1wiLFxuICAgICAgICAgICAgXCJzdGFydGVyX3BhY2tcIixcbiAgICAgICAgICAgIFwidmFsdWVfcGFja1wiXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMucHJpY2UgPSB7XG4gICAgICAgICAgICByZW1vdmVfYWRzOiA0Ljk5LFxuICAgICAgICAgICAgcmVtb3ZlX2Fkc19wYWNrOiA3Ljk5LFxuICAgICAgICAgICAgc3BlY2lhbF9wYWNrOiAyLjQ5LFxuICAgICAgICAgICAgc21hbGxfc3Q6IDIuOTksXG4gICAgICAgICAgICBtZWRpdW1fc3Q6IDcuOTksXG4gICAgICAgICAgICBiaWdfc3Q6IDE0Ljk5LFxuICAgICAgICAgICAgaHVnZV9zdDogMzIuOTksXG4gICAgICAgICAgICBtZWdhX3N0OiA1Mi45OSxcbiAgICAgICAgICAgIGJyaWxsaWFudF9zdDogOTkuOTksXG4gICAgICAgICAgICBkYXlfdmlwXzM6IDQuOTksXG4gICAgICAgICAgICBkYXlfdmlwXzc6IDEwLjk5LFxuICAgICAgICAgICAgZGF5X3ZpcF8zMDogMjkuOTksXG4gICAgICAgICAgICBtYXN0ZXJfcGFzczogNi45OSxcbiAgICAgICAgICAgIHBpZ2d5X2Jhbms6IDEuOTksXG4gICAgICAgICAgICBzdGFydGVyX3BhY2s6IDAuOTksXG4gICAgICAgICAgICB2YWx1ZV9wYWNrOiAxLjk5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xpY2tCdXlJRCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSAhMDtcbiAgICAgICAgdGhpcy5pc1N1YnNjcmliZSA9ICExO1xuICAgICAgICB0aGlzLmdvb2RzRXZlbnQgPSB7XG4gICAgICAgICAgICByZW1vdmVfYWRzOiAxLFxuICAgICAgICAgICAgcmVtb3ZlX2Fkc19wYWNrOiAyLFxuICAgICAgICAgICAgc3BlY2lhbF9wYWNrOiAzLFxuICAgICAgICAgICAgc21hbGxfc3Q6IDQsXG4gICAgICAgICAgICBtZWRpdW1fc3Q6IDUsXG4gICAgICAgICAgICBiaWdfc3Q6IDYsXG4gICAgICAgICAgICBodWdlX3N0OiA3LFxuICAgICAgICAgICAgbWVnYV9zdDogOCxcbiAgICAgICAgICAgIGJyaWxsaWFudF9zdDogOSxcbiAgICAgICAgICAgIG1hc3Rlcl9wYXNzOiAxNCxcbiAgICAgICAgICAgIHBpZ2d5X2Jhbms6IDEzLFxuICAgICAgICAgICAgZGF5X3ZpcF8zOiAxMCxcbiAgICAgICAgICAgIGRheV92aXBfNzogMTEsXG4gICAgICAgICAgICBkYXlfdmlwXzMwOiAxMixcbiAgICAgICAgICAgIHN0YXJ0ZXJfcGFjazogMTUsXG4gICAgICAgICAgICB2YWx1ZV9wYWNrOiAxNlxuICAgICAgICB9O1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gITE7XG4gICAgICAgIHZhciBlID0gITE7XG4gICAgICAgIHZhciBuID0gITE7XG4gICAgICAgIHZhciByID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQubWFzdGVyX3Bhc3MpIHx8ICExO1xuICAgICAgICB2YXIgbyA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnBpZ2d5X2JhbmspIHx8ICExO1xuICAgICAgICB2YXIgYSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnN0YXJ0ZXJfcGFjaykgfHwgITE7XG4gICAgICAgIHZhciBzID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudmFsdWVfcGFjaykgfHwgITE7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICB0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcbiAgICAgICAgLy8gICAgICAgICBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsXG4gICAgICAgIC8vICAgICAgICAgXCJjaGVja0luQXBwT3JkZXJcIixcbiAgICAgICAgLy8gICAgICAgICBcIihMamF2YS9sYW5nL1N0cmluZzspWlwiLFxuICAgICAgICAvLyAgICAgICAgIFwicmVtb3ZlX2Fkc1wiXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyAgICAgZSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgIC8vICAgICAgICAgXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFxuICAgICAgICAvLyAgICAgICAgIFwiY2hlY2tJbkFwcE9yZGVyXCIsXG4gICAgICAgIC8vICAgICAgICAgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVpcIixcbiAgICAgICAgLy8gICAgICAgICBcInJlbW92ZV9hZHNfcGFja1wiXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyAgICAgbiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgIC8vICAgICAgICAgXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFxuICAgICAgICAvLyAgICAgICAgIFwiY2hlY2tJbkFwcE9yZGVyXCIsXG4gICAgICAgIC8vICAgICAgICAgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVpcIixcbiAgICAgICAgLy8gICAgICAgICBcInNwZWNpYWxfcGFja1wiXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyAgICAgciA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgIC8vICAgICAgICAgXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFxuICAgICAgICAvLyAgICAgICAgIFwiY2hlY2tJbkFwcE9yZGVyXCIsXG4gICAgICAgIC8vICAgICAgICAgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVpcIixcbiAgICAgICAgLy8gICAgICAgICBcIm1hc3Rlcl9wYXNzXCJcbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vICAgICBvID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcbiAgICAgICAgLy8gICAgICAgICBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsXG4gICAgICAgIC8vICAgICAgICAgXCJjaGVja0luQXBwT3JkZXJcIixcbiAgICAgICAgLy8gICAgICAgICBcIihMamF2YS9sYW5nL1N0cmluZzspWlwiLFxuICAgICAgICAvLyAgICAgICAgIFwicGlnZ3lfYmFua1wiXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyAgICAgYSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgIC8vICAgICAgICAgXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFxuICAgICAgICAvLyAgICAgICAgIFwiY2hlY2tJbkFwcE9yZGVyXCIsXG4gICAgICAgIC8vICAgICAgICAgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVpcIixcbiAgICAgICAgLy8gICAgICAgICBcInN0YXJ0ZXJfcGFja1wiXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyAgICAgcyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXG4gICAgICAgIC8vICAgICAgICAgXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLFxuICAgICAgICAvLyAgICAgICAgIFwiY2hlY2tJbkFwcE9yZGVyXCIsXG4gICAgICAgIC8vICAgICAgICAgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVpcIixcbiAgICAgICAgLy8gICAgICAgICBcInZhbHVlX3BhY2tcIlxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoYykge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjaGVja0luQXBwT3JkZXItZXJyb3JcIiwgYyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZW1vdmVfYWRzLCB0KTtcbiAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZW1vdmVfYWRzX3BhY2ssIGUpO1xuICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnNwZWNpYWxfcGFjaywgbik7XG4gICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lm1hc3Rlcl9wYXNzLCByKTtcbiAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQucGlnZ3lfYmFuaywgbyk7XG4gICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnN0YXJ0ZXJfcGFjaywgYSk7XG4gICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnZhbHVlX3BhY2ssIHMpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZW1vdmVfYWRzLCB0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZW1vdmVfYWRzX3BhY2ssIGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnNwZWNpYWxfcGFjaywgbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgfHwgZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLljrvmj5LlsY/lub/lkYpcIiwgdCwgZSk7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNldElzQnV5UmVtb3ZlSW5zZXJ0KCEwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY2xpY2tCdXkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICh0aGlzLmNhbkNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gITE7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQnV5SUQgPSB0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZFwiLCB0KTtcbiAgICAgICAgICAgIGNjLmdhbWUub2ZmKHRoaXMuY2xpY2tCdXlJRCArIFwiX3N1Y1wiLCB0aGlzLnB1cmNoYXNlU3VjLCB0aGlzKTtcbiAgICAgICAgICAgIGNjLmdhbWUub2ZmKHRoaXMuY2xpY2tCdXlJRCArIFwiX2ZhaWxcIiwgdGhpcy5wdXJjaGFzZUZhaWwsIHRoaXMpO1xuICAgICAgICAgICAgY2MuZ2FtZS5vbih0aGlzLmNsaWNrQnV5SUQgKyBcIl9zdWNcIiwgdGhpcy5wdXJjaGFzZVN1YywgdGhpcyk7XG4gICAgICAgICAgICBjYy5nYW1lLm9uKHRoaXMuY2xpY2tCdXlJRCArIFwiX2ZhaWxcIiwgdGhpcy5wdXJjaGFzZUZhaWwsIHRoaXMpO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBcIkdpZnRfdGFwXCIsIHtcbiAgICAgICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVfYWRzOiAxLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVfYWRzX3BhY2s6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWxfcGFjazogMyxcbiAgICAgICAgICAgICAgICAgICAgc21hbGxfc3Q6IDQsXG4gICAgICAgICAgICAgICAgICAgIG1lZGl1bV9zdDogNSxcbiAgICAgICAgICAgICAgICAgICAgYmlnX3N0OiA2LFxuICAgICAgICAgICAgICAgICAgICBodWdlX3N0OiA3LFxuICAgICAgICAgICAgICAgICAgICBtZWdhX3N0OiA4LFxuICAgICAgICAgICAgICAgICAgICBicmlsbGlhbnRfc3Q6IDksXG4gICAgICAgICAgICAgICAgICAgIG1hc3Rlcl9wYXNzOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgcGlnZ3lfYmFuazogMTMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ZXJfcGFjazogMTUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX3BhY2s6IDE2XG4gICAgICAgICAgICAgICAgfVt0XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnB1cmNoYXNlKHRoaXMuY2xpY2tCdXlJRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnN1YnNjcmliZUJ1eSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSAhMTtcbiAgICAgICAgICAgIGlmICgkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImlzU3Vic2NyaWJlVklQXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi5bey57uP6K6i6ZiFVklQXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGlja0J1eUlEID0gdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWRcIiwgdCk7XG4gICAgICAgICAgICBjYy5nYW1lLm9mZih0aGlzLmNsaWNrQnV5SUQgKyBcIl9zdWNcIiwgdGhpcy5zdWJzY3JpYmVTdWMsIHRoaXMpO1xuICAgICAgICAgICAgY2MuZ2FtZS5vZmYodGhpcy5jbGlja0J1eUlEICsgXCJfZmFpbFwiLCB0aGlzLnN1YnNjcmliZUZhaWwsIHRoaXMpO1xuICAgICAgICAgICAgY2MuZ2FtZS5vbih0aGlzLmNsaWNrQnV5SUQgKyBcIl9zdWNcIiwgdGhpcy5zdWJzY3JpYmVTdWMsIHRoaXMpO1xuICAgICAgICAgICAgY2MuZ2FtZS5vbih0aGlzLmNsaWNrQnV5SUQgKyBcIl9mYWlsXCIsIHRoaXMuc3Vic2NyaWJlRmFpbCwgdGhpcyk7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsIFwiR2lmdF90YXBcIiwge1xuICAgICAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgICAgIGRheV92aXBfMzogMTAsXG4gICAgICAgICAgICAgICAgICAgIGRheV92aXBfNzogMTEsXG4gICAgICAgICAgICAgICAgICAgIGRheV92aXBfMzA6IDEyXG4gICAgICAgICAgICAgICAgfVt0XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgZGF5X3ZpcF8zOiBcIjNfZGF5X3ZpcFwiLFxuICAgICAgICAgICAgICAgIGRheV92aXBfNzogXCI3X2RheV92aXBcIixcbiAgICAgICAgICAgICAgICBkYXlfdmlwXzMwOiBcIjMwX2RheV92aXBcIlxuICAgICAgICAgICAgfVt0XSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEdvb2RzTG9jYWxQcmljZSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRQcm9kdWN0TGlzdEpzb25TdHIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgd2luZG93LmdldFByb2R1Y3RMaXN0SnNvblN0ci5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciByID0gd2luZG93LmdldFByb2R1Y3RMaXN0SnNvblN0cltuXTtcbiAgICAgICAgICAgICAgICBpZiAoci5wcm9kdWN0ID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XG4gICAgICAgICAgICAgICAgICAgICAgICByLm9uZVRpbWVQdXJjaGFzZU9mZmVyRGV0YWlscy56emMgKyByLm9uZVRpbWVQdXJjaGFzZU9mZmVyRGV0YWlscy56emIgLyAxZTY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5wdXJjaGFzZVN1YyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNhbkNsaWNrID0gITA7XG4gICAgICAgIGNjLmdhbWUub2ZmKHRoaXMuY2xpY2tCdXlJRCArIFwiX3N1Y1wiLCB0aGlzLnB1cmNoYXNlU3VjLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYodGhpcy5jbGlja0J1eUlEICsgXCJfZmFpbFwiLCB0aGlzLnB1cmNoYXNlRmFpbCwgdGhpcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpY2tCdXlJRCArIFwiX3N1Y1wiLCBcIui0reS5sOaIkOWKn++8gVwiKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCBcIkdpZnRfc3VjXCIsIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmdvb2RzRXZlbnRbdGhpcy5jbGlja0J1eUlEXVxuICAgICAgICB9KTtcbiAgICAgICAgJGFkanVzdEV2ZW50U3lzdGVtLmRlZmF1bHQudG9kYXlQYXkodGhpcy5wcmljZVt0aGlzLmNsaWNrQnV5SURdKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNsaWNrQnV5SUQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzcGVjaWFsX3BhY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRSZXdhcmQoMTApO1xuICAgICAgICAgICAgICAgIHRoaXMuY29pblJld2FyZCgxMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpblJld2FyZCgxMyk7XG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5HZXQzKTtcbiAgICAgICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIui0reS5sOaIkOWKn++8gVwiKTtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5oYXNTcGVjaWFsQnRuLCAxKTtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJzcGVjaWFsX3BhY2tcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhcnRlcl9wYWNrXCI6XG4gICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDmiJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmV3YXJkKDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29pblJld2FyZCgxMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tpblJld2FyZCgyMSk7XG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5HZXROZXdIYW5kKTtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5zdGFydGVyX3BhY2ssICEwKTtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJzdGFydGVyX3BhY2tcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmFsdWVfcGFja1wiOlxuICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi6LSt5Lmw5oiQ5Yqf77yBXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZFJld2FyZCg4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW5SZXdhcmQoMTAwKTtcbiAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LkdldFZhbHVlUGFjayk7XG4gICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudmFsdWVfcGFjaywgITApO1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInZhbHVlX3BhY2tcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVtb3ZlX2Fkc1wiOlxuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2V0SXNCdXlSZW1vdmVJbnNlcnQoITApO1xuICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmlzTm9BRCwgMSk7XG4gICAgICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZW1vdmVfYWRzLCAhMCk7XG4gICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDmiJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwicmVtb3ZlX2Fkc1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZW1vdmVfYWRzX3BhY2tcIjpcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNldElzQnV5UmVtb3ZlSW5zZXJ0KCEwKTtcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVCYW5uZXIoKTtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5pc05vQUQsIDEpO1xuICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucmVtb3ZlX2Fkc19wYWNrLCAhMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmV3YXJkKDE1KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNraW5SZXdhcmQoMTQpO1xuICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucmV3YXJkVHlwZSwgXCJyZW1vdmVfYWRzX3BhY2tcIik7XG4gICAgICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZXdhcmQsIFtcbiAgICAgICAgICAgICAgICAgICAgW1wiY2FyZFwiLCAxNV0sXG4gICAgICAgICAgICAgICAgICAgIFtcInNraW5cIiwgMTVdXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5HZXQpO1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInJlbW92ZV9hZHNcIik7XG4gICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDmiJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic21hbGxfc3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRSZXdhcmQoMTApO1xuICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi6LSt5Lmw5oiQ5Yqf77yBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGl1bV9zdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZFJld2FyZCgzMCk7XG4gICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDmiJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmlnX3N0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmV3YXJkKDYwKTtcbiAgICAgICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIui0reS5sOaIkOWKn++8gVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodWdlX3N0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmV3YXJkKDE1MCk7XG4gICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDmiJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVnYV9zdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZFJld2FyZCgzMDApO1xuICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi6LSt5Lmw5oiQ5Yqf77yBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJyaWxsaWFudF9zdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZFJld2FyZCg2MDApO1xuICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi6LSt5Lmw5oiQ5Yqf77yBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1hc3Rlcl9wYXNzXCI6XG4gICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDmiJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQubWFzdGVyX3Bhc3MsICEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwaWdneV9iYW5rXCI6XG4gICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDmiJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQucGlnZ3lfYmFuaywgITApO1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInBpZ2d5X2JhbmtcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luUmV3YXJkKDRlMyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnB1cmNoYXNlRmFpbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNhbkNsaWNrID0gITA7XG4gICAgICAgIGNjLmdhbWUub2ZmKHRoaXMuY2xpY2tCdXlJRCArIFwiX3N1Y1wiLCB0aGlzLnB1cmNoYXNlU3VjLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYodGhpcy5jbGlja0J1eUlEICsgXCJfZmFpbFwiLCB0aGlzLnB1cmNoYXNlRmFpbCwgdGhpcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpY2tCdXlJRCArIFwiX3N1Y1wiLCBcIui0reS5sOWksei0pe+8gVwiKTtcbiAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLotK3kubDlpLHotKXvvIFcIik7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zdWJzY3JpYmVTdWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jYW5DbGljayA9ICEwO1xuICAgICAgICBjYy5nYW1lLm9mZih0aGlzLmNsaWNrQnV5SUQgKyBcIl9zdWNcIiwgdGhpcy5zdWJzY3JpYmVTdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZih0aGlzLmNsaWNrQnV5SUQgKyBcIl9mYWlsXCIsIHRoaXMuc3Vic2NyaWJlRmFpbCwgdGhpcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiXCIgKyB0aGlzLmNsaWNrQnV5SUQsIFwi6LSt5Lmw5oiQ5Yqf77yBXCIpO1xuICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIuiuoumYheaIkOWKn++8gVwiKTtcbiAgICAgICAgJGFkanVzdEV2ZW50U3lzdGVtLmRlZmF1bHQudG9kYXlQYXkodGhpcy5wcmljZVt0aGlzLmNsaWNrQnV5SURdKTtcbiAgICAgICAgdmFyIHQgPSAkdGltZU1hbmFnZXIuZGVmYXVsdC5nZXRDdXJyZW50VGltZSgpO1xuICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC52aXBTdGFydFRpbWUsIHQpO1xuICAgICAgICB0aGlzLnNhdmVTZXJ2ZXJEYXRhKCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnZpcFN0YXJ0VGltZSwgdCk7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2V0SXNCdXlSZW1vdmVJbnNlcnQoITApO1xuICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LmlzVklQLCAhMCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jbGlja0J1eUlEKSB7XG4gICAgICAgICAgICBjYXNlIFwiZGF5X3ZpcF8zXCI6XG4gICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudmlwVHlwZSwgMyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmV3YXJkKDEwKTtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5pc1JlY2VpdmVWSVAsIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRheV92aXBfN1wiOlxuICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnZpcFR5cGUsIDcpO1xuICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmlzUmVjZWl2ZVZJUCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmV3YXJkKDI1KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXlfdmlwXzMwXCI6XG4gICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudmlwVHlwZSwgMzApO1xuICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmlzUmVjZWl2ZVZJUCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmV3YXJkKDY1KTtcbiAgICAgICAgfVxuICAgICAgICBjYy5nYW1lLmVtaXQoXCJ1cGRhdGVWSVBcIik7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zdWJzY3JpYmVGYWlsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSAhMDtcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b25naml1aGV6aV9mYWlsXCIsIFwi6LSt5Lmw5aSx6LSl77yBXCIpO1xuICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIuiuoumYheWksei0pe+8gVwiKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLm5vQWRSZXdhcmQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmIChcIm5vYWRzXCIgPT0gdCkge1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJub2Fkc1wiLCAhMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcIm5vYWRzX3BsdXNcIiwgITApO1xuICAgICAgICB9XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2V0SXNCdXlSZW1vdmVJbnNlcnQoITApO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2tpblJld2FyZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0O1xuICAgICAgICB2YXIgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLmdldExvY2tTa2luTGlzdCk7XG4gICAgICAgIGlmIChuWzBdLmluY2x1ZGVzKGUpKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgblswXS5wdXNoKGUpO1xuICAgICAgICB9XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLmdldExvY2tTa2luTGlzdCwgbik7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiY2hvb3NlU2tpblBhZ2VcIiwgMCk7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiY2hvb3NlU2tpblwiLCBlICsgMSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jYXJkUmV3YXJkID0gZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgZSA9ICgkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50KSB8fCAwKSArIHQ7XG4gICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhcmRBbW91bnQsIGUpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY29pblJld2FyZCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIGUgPSAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwiY29pblwiKSB8fCAwKSArIHQ7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcImNvaW5cIiwgZSk7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcInVwZGF0ZUNvaW5cIik7XG4gICAgICAgIHRoaXMuc2F2ZVNlcnZlckRhdGEoXCJjb2luXCIsIGUpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5DT0lOX1VQREFURSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zYXZlU2VydmVyRGF0YSA9IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICAgICAgZSA9IGUudG9TdHJpbmcoKTtcbiAgICAgICAgJGJtc01hbmFnZXIuQk1TLnNhdmVTZXJ2ZXJEYXRhKFxuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLFxuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwiZ29vZ2xlSURcIikgfHwgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwidXVpZFwiKSxcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgICBlXG4gICAgICAgICkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L+d5a2YXCIgKyB0ICsgXCLmiJDlip86XCIgKyBlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCkpKCk7XG5leHBvcnRzLmRlZmF1bHQgPSB2OyJdfQ==