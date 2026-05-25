"use strict";
cc._RF.push(module, '573742yLehJ3q+kBTXIotLM', 'CardShop');
// scripts/CardShop.js

"use strict";

var r;

var $sceneConst = require("./SceneConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $bmsManager = require("./BmsManager");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $sceneManager = require("./SceneManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $paymentSystem = require("./PaymentSystem");

var $shuShuConst = require("./ShuShuConst");

var _ = cc._decorator;
var b = _.ccclass;
var S = (_.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.isLoadingScene = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.localStorageUIData[$localStorageConst["default"].cardAmount] = this.updateCardAmount.bind(this);
    this.localStorageUIData[$localStorageConst["default"].isNoAD] = this.updateNoAD.bind(this);
    this.localStorageUIData[$localStorageConst["default"].starter_pack] = this.updatestarter_pack.bind(this);
    this.memoryStorageUIData[$memoryStorageConst["default"].isVIP] = this.updateIsVIP.bind(this);
    this.addBtnOn("backBtn", this.backBtn, this);
    this.addBtnOn("noADBtn0", this.buyBtn.bind(this, "remove_ads_pack"), this);
    this.addBtnOn("noADBtn1", this.buyBtn.bind(this, "remove_ads"), this);
    this.addBtnOn("cardBtn0", this.buyBtn.bind(this, "small_st"), this);
    this.addBtnOn("cardBtn1", this.buyBtn.bind(this, "medium_st"), this);
    this.addBtnOn("cardBtn2", this.buyBtn.bind(this, "big_st"), this);
    this.addBtnOn("cardBtn3", this.buyBtn.bind(this, "huge_st"), this);
    this.addBtnOn("cardBtn4", this.buyBtn.bind(this, "mega_st"), this);
    this.addBtnOn("cardBtn5", this.buyBtn.bind(this, "brilliant_st"), this);
    this.addBtnOn("cardBtn6", this.cardBtn6, this);
    this.addBtnOn("newHandBtn", this.newHandBtn, this);
    this.addBtnOn("vipBtn0", this.buyBtn_vip.bind(this, "day_vip_3"), this);
    this.addBtnOn("vipBtn1", this.buyBtn_vip.bind(this, "day_vip_7"), this);
    this.addBtnOn("vipBtn2", this.buyBtn_vip.bind(this, "day_vip_30"), this);
    this.initView();
  };

  e.prototype.updateNoAD = function (t) {
    if (t) {
      this.dict.noADTitleRoot.active = !1;
      this.dict.noADRoot.active = !1;
    }
  };

  e.prototype.updatestarter_pack = function (t) {
    this.dict.newHandRoot.active = !t;
    this.dict.newHandTitleRoot.active = !t;
  };

  e.prototype.updateIsVIP = function (t) {
    if (t) {
      this.dict.vipBtn0.color = cc.Color.GRAY;
      this.dict.vipBtn1.color = cc.Color.GRAY;
      this.dict.vipBtn2.color = cc.Color.GRAY;
    }
  };

  e.prototype.initView = function () {
    if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
      this.dict.scrollView.getComponent(cc.Widget).bottom = 150;
      this.dict.scrollView.getComponent(cc.Widget).updateAlignment();
    }

    this.dict.view.getComponent(cc.Mask).enabled = !0;
    this.dict.skin.getComponent(cc.Label).string = $languageManager["default"].formatStr("获得皮肤：%s", "电音钉");
    this.dict.newHandSkin.getComponent(cc.Label).string = $languageManager["default"].formatStr("获得皮肤：%s", "火龙果");
    this.dict.vipTitle.active = !!$platformManager.Platform.getConfig().hasVIP;
    this.dict.vipRoot.active = !!$platformManager.Platform.getConfig().hasVIP;
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Gift_page, {
      id: 5
    });
    var t = ["small_st", "medium_st", "big_st", "huge_st", "mega_st", "brilliant_st"];

    for (var e = 0; e < this.dict.cardRoot.children[0].children.length; e++) {
      var n = this.dict.cardRoot.children[0].children[e].getChildByName("money");
      var r = t[e];
      $paymentSystem["default"].getGoodsLocalPrice(n, r);
    }

    var o = ["day_vip_3", "day_vip_7", "day_vip_30"];

    for (e = 0; e < this.dict.vipRoot.children[0].children.length; e++) {
      n = this.dict.vipRoot.children[0].children[e].getChildByName("money");
      r = o[e];
      $paymentSystem["default"].getGoodsLocalPrice(n, r);
    }

    $paymentSystem["default"].getGoodsLocalPrice(this.dict.newHandMoney, "starter_pack");
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.noADMoney, "remove_ads_pack");
  };

  e.prototype.updateCardAmount = function (t) {
    this.dict.cardAmount.getComponent(cc.Label).string = "" + t;
  };

  e.prototype.backBtn = function () {
    if (this.isLoadingScene) {//
    } else {
      this.isLoadingScene = !0;
      $sceneManager["default"].loadScene($sceneConst.SceneConst.Home);
    }
  };

  e.prototype.buyBtn = function (t) {
    $paymentSystem["default"].clickBuy(t);
  };

  e.prototype.cardBtn6 = function () {
    var t = $userManager.User.get("coin") || 0;

    if (t >= 1e3) {
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Activity_get, {
        id: 6
      });
      $tipManager.Tip.show($languageManager["default"].formatStr("兑换成功！"));
      $userManager.User.set("coin", t - 1e3);
      cc.game.emit("update_coin");
      this.cardReward(2);
    } else {
      $tipManager.Tip.show($languageManager["default"].formatStr("金币不足！"));
    }
  };

  e.prototype.newHandBtn = function () {
    $paymentSystem["default"].clickBuy("starter_pack");
  };

  e.prototype.cardReward = function (t) {
    var e = ($localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0) + t;
    $localStorageManager["default"].set($localStorageConst["default"].cardAmount, e);
    this.saveServerData($localStorageConst["default"].cardAmount, e);
  };

  e.prototype.saveServerData = function (t, e) {
    e = e.toString();
    $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), t, e).then(function () {
      console.log("保存" + t + "成功:" + e);
    });
  };

  e.prototype.buyBtn_vip = function (t) {
    if ($memoryStorageManager["default"].get($memoryStorageConst["default"].isVIP)) {
      return $tipManager.Tip.show($languageManager["default"].formatStr("您已是尊贵的VIP"));
    }

    $paymentSystem["default"].subscribeBuy(t);
  };

  return __decorate([b], e);
}($uIBase["default"]));
exports["default"] = S;

cc._RF.pop();