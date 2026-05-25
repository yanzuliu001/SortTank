"use strict";
cc._RF.push(module, '84fd6irq5xOarKVZ0Nk1Gas', 'PropBtn');
// scripts/PropBtn.js

"use strict";

var r;

var $userConst = require("./UserConst");

var $uIBase = require("./UIBase");

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var $userManager = require("./UserManager");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $popupConst = require("./PopupConst");

var $popupManager = require("./PopupManager");

var $toastManager = require("./ToastManager");

var $shuShuConst = require("./ShuShuConst");

var b = cc._decorator;
var S = b.ccclass;
var k = b.property;
var C = {
  sortAmount: 2,
  slowDown: 1,
  clear: 7,
  fullScreenAttack: 8
};
var M = {
  unlockPos: 4,
  sortAmount: 3,
  slowDown: 2,
  clear: 10,
  fullScreenAttack: 11
};
var P = {
  unlockPos: 12,
  sortAmount: 14,
  slowDown: 13,
  clear: 15,
  fullScreenAttack: 16
};
var T = {
  slowDown: "func_slowDown",
  sortAmount: "func_sort",
  clear: "func_remove",
  fullScreenAttack: "func_item5CB",
  unlockPos: "fun_unlockNewPos"
};
var A = {
  slowDown: "func_checkSlowDown",
  clear: "func_checkRemove"
};

var I = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.propName = "clear";
    e.propTime = 0;
    e.needLimitNoHandle = !1;
    e.propIndex = null;
    e.oldTextStr = "";
    e.time = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    var e = $localStorageManager["default"].get("" + this.propName) || 0;
    $localStorageManager["default"].set("" + this.propName, e);
    this.localStorageUIData["" + this.propName] = this.updateProp.bind(this);
    cc.game.on("sucProp", this.sucProp_popup, this);
  };

  e.prototype.onDestroy = function () {
    t.prototype.onDestroy.call(this);
    cc.game.off("sucProp", this.sucProp_popup, this);
  };

  e.prototype.updateProp = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      return __generator(this, function () {
        this.dict.bg.opacity = 255;
        this.dict.propRoot.active = !!t;
        this.dict.propAmount.getComponent(cc.Label).string = "" + t;
        e = $bmsManager.BMS.getKey("itemVideo");
        this.dict.add.active = !t && !!e;
        this.dict.video.active = !this.dict.add.active && !this.dict.propRoot.active;
        return [2];
      });
    });
  };

  e.prototype.clickSelf = function () {
    var t = this;

    if (!game.canUseProps) {
      return console.log("当前无法使用道具");
    }

    if (this.time) {
      return console.log("正在倒计时");
    }

    if (!window.levelContent || !window.levelContent._components[0].isFail) {
      if (A[this.propName] && !window.levelContent._components[0][A[this.propName]]()) {
        return $toastManager["default"].show("当前道具暂时无法使用");
      }

      if (this.dict.propRoot.active) {
        var e = $localStorageManager["default"].get("" + this.propName) || 0;
        e -= 1;
        $localStorageManager["default"].set("" + this.propName, e);
        return void this.sucProp();
      }

      this.propIndex = C[this.propName];
      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, this.propIndex);
      console.log("this.propIndex", this.propIndex);

      if (this.dict.video.active) {
        $platformManager.Platform.showRewardAds(function (e) {
          if (0 == e) {
            t.report(M[t.propName]);
            t.sucProp();
          }
        });
      } else {
        $popupManager["default"].show($popupConst.PopupConst.Prop);
      }
    }
  };

  e.prototype.sucProp = function () {
    if (this.needLimitNoHandle) {
      game.canUseProps = !1;
      cc.game.emit("needLimitNoHandle", !0);
    }

    window.levelContent._components[0][T[this.propName]]();

    if (this.propTime) {
      this.time = this.propTime;

      if ("slowDown" == this.propName) {
        this.time = window.levelContent._components[0]._slowTime;
      } else {
        "fullScreenAttack" == this.propName && (this.time = window.levelContent._components[0]._item5Time);
      }

      this.dict.video.active = !1;
      this.dict.add.active = !1;
      this.dict.propRoot.active = !1;
      this.dict.bg.opacity = 150;
      this.oldTextStr = this.dict.text.getComponent(cc.Label).string;
      this.dict.text.getComponent(cc.Label).string = this.time + "s";
      this.unschedule(this.timer);
      this.schedule(this.timer, 1);
    }
  };

  e.prototype.sucProp_popup = function (t) {
    if (t == C[this.propName]) {
      this.report(P[this.propName]);
      this.sucProp();
    }
  };

  e.prototype.timer = function () {
    this.time -= 1;

    if (this.time <= 0) {
      this.time = 0;
      this.unschedule(this.timer);
      this.dict.text.getComponent(cc.Label).string = this.oldTextStr;
      var t = $localStorageManager["default"].get("" + this.propName) || 0;
      this.updateProp(t);
    } else {
      this.dict.text.getComponent(cc.Label).string = this.time + "s";
    }
  };

  e.prototype.report = function (t) {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
      queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
      id: t,
      sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
    });
  };

  __decorate([k], e.prototype, "propName", void 0);

  __decorate([k], e.prototype, "propTime", void 0);

  __decorate([k], e.prototype, "needLimitNoHandle", void 0);

  return __decorate([S], e);
}($uIBase["default"]);

exports["default"] = I;

cc._RF.pop();