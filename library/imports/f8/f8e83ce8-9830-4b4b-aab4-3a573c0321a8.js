"use strict";
cc._RF.push(module, 'f8e83zomDBLS6q0Olc8AyGo', 'ChallengeItem');
// scripts/ChallengeItem.js

"use strict";

var r;
var a;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $userManager = require("./UserManager");

var $shuShuConst = require("./ShuShuConst");

var v = cc._decorator;
var w = v.ccclass;
var _ = v.property;

(function (t) {
  t[t.Normal = 0] = "Normal";
  t[t.Finish = 1] = "Finish";
  t[t.Lock = 2] = "Lock";
})(a || (a = {}));

var b = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.levelSpriteFrame = [];
    e.param = null;
    e.state = null;
    e.starAmount = 0;
    e.skinNameArr = [];
    e.free = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.setData = function (t) {
    this.param = t;
    this.node.zIndex = this.param.index;
    this.free = JSON.parse(this.param.type.free);
    this.refresh();
  };

  e.prototype.refresh = function () {
    this.dict.container.color = cc.Color.GRAY;
    this.dict.icon.color = cc.Color.GRAY;
    this.dict.card.color = cc.Color.GRAY;
    this.dict.amount.color = cc.Color.GRAY;
    this.dict.fill.active = !1;
    this.dict.yesBtn.active = !1;
    this.dict.gou.active = !1;
    this.dict.lock.active = !0;
    this.dict.card.active = !1;
    this.dict.levelSprite.getComponent(cc.Sprite).spriteFrame = this.levelSpriteFrame[1];
    this.dict.level.color = cc.Color.WHITE;

    if (this.param.index % 2 == 0) {
      this.dict.bg.color = new cc.Color().fromHEX("#f3e0ac");
    } else {
      this.dict.bg.color = new cc.Color().fromHEX("#FEEFC6");
    }

    var t = $localStorageManager["default"].get($localStorageConst["default"].challengeReceive) || [];

    if (($localStorageManager["default"].get($localStorageConst["default"].challengeUnlockAmount) || 0) >= this.param.index + 1) {
      this.dict.fill.active = !0;
      this.dict.container.color = cc.Color.WHITE;
      this.dict.icon.color = cc.Color.WHITE;
      this.dict.amount.color = cc.Color.WHITE;
      this.dict.card.color = cc.Color.WHITE;
      this.dict.lock.active = !1;
      this.dict.levelSprite.getComponent(cc.Sprite).spriteFrame = this.levelSpriteFrame[0];
      this.dict.level.color = cc.Color.WHITE;

      if (t.includes(this.param.index + 1)) {
        this.dict.gou.active = !0;
      } else {
        this.dict.yesBtn.active = !0, this.dict.fill.active = !0;
      }
    }

    this.dict.level.getComponent(cc.Label).string = "" + (this.param.index + 1);

    if (1 == this.free[0]) {
      this.dict.amount.getComponent(cc.Label).string = "x" + this.free[1];
      this.dict.card.active = !1;
    } else {
      this.dict.amount.getComponent(cc.Label).string = "x" + this.free[1];
      this.dict.card.active = !0;
    }
  };

  e.prototype.clickEnter = function () {
    var t = $localStorageManager["default"].get($localStorageConst["default"].challengeReceive) || [];
    t.push(this.param.index + 1);
    $localStorageManager["default"].set($localStorageConst["default"].challengeReceive, t);
    this.refresh();

    if (2 == this.free[0]) {
      this.cardReward(this.free[1]);
      $memoryStorageManager["default"].set($memoryStorageConst["default"].reward, [["card", this.free[1]]]);
    } else {
      this.coinReward(this.free[1]);
      $memoryStorageManager["default"].set($memoryStorageConst["default"].reward, [["coin", this.free[1]]]);
    }

    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Activity_get, {
      id: 5
    });
    $popupManager["default"].show($popupConst.PopupConst.Get);
  };

  e.prototype.cardReward = function (t) {
    var e = ($localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0) + t;
    $localStorageManager["default"].set($localStorageConst["default"].cardAmount, e);
    this.saveServerData($localStorageConst["default"].cardAmount, e);
  };

  e.prototype.coinReward = function (t) {
    var e = ($userManager.User.get("coin") || 0) + t;
    $userManager.User.set("coin", e);
    cc.game.emit("updateCoin");
    this.saveServerData("coin", e);
  };

  e.prototype.saveServerData = function (t, e) {
    e = e.toString();
    $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), t, e).then(function () {
      console.log("保存" + t + "成功:" + e);
    });
  };

  e.state = a;

  __decorate([_([cc.SpriteFrame])], e.prototype, "levelSpriteFrame", void 0);

  return __decorate([w], e);
}($uIBase["default"]);

exports["default"] = b;

cc._RF.pop();