"use strict";
cc._RF.push(module, '8d22fgCyXVAw4gLn+PIMrz0', 'BottomBar');
// scripts/BottomBar.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $popupConst = require("./PopupConst");

var $userConst = require("./UserConst");

var $bmsManager = require("./BmsManager");

var $eventManager = require("./EventManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $limitRepeat = require("./LimitRepeat");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $shuShuConst = require("./ShuShuConst");

var $localStorageManager = require("./LocalStorageManager");

var $localStorageConst = require("./LocalStorageConst");

var $languageManager = require("./LanguageManager");

var $utils = require("./Utils");

var M = cc._decorator;
var P = M.ccclass;
var T = M.property;

var A = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.level = null;
    e.isUnlockTip = !1;
    e.videoOrAdd = [];
    e.btn1Time = 0;
    e.isShowRevive = !1;
    e.removeState = !1;
    e.moderateBtnTime = 30;
    e.isBubble = !1;
    e.isAnim = !1;
    e.addNodes = [];
    e.startState = !1;
    e.isShare = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.level = this.dict.level;
    this.addBtnOn("keyBtn", this.clickKey, this);
    this.addBtnOn("tipBtn", this.clickTip, this);
    this.addBtnOn("removeScrewBtn", this.removeScrewBtn, this);
    this.addBtnOn("removeBtn", this.removeBtn, this);
    this.addBtnOn("move5Btn", this.move5Btn, this);
    this.addBtnOn("resetBtn", this.resetBtn, this);
    this.addBtnOn("upsetBtn", this.upsetBtn, this);
    this.addBtnOn("boreBtn", this.boreBtn, this);
    this.addBtnOn("withdrawBtn", this.chehuiBtn, this);
    this.addBtnOn("screwBoxBtn", this.screwBoxBtn, this);
    this.addBtnOn("skipBtn2", this.clickSkip, this);
    this.addBtnOn("skipBtn3", this.clickSkip, this);
    this.addBtnOn("hideText", this.hideText, this);
    this.addBtnOn("tipBtn4", this.clickTip, this);
    this.addBtnOn("skipBtn4", this.clickSkip, this);
    this.addBtnOn("tipBtn4", this.clickTip, this);
    this.addBtnOn("skipBtn4", this.clickSkip, this);
    this.addBtnOn("totalSkipBtn", this.clickSkip, this);
    this.addBtnOn("hammerBtn", this.hammerBtn, this);
    this.addBtnOn("shakeBtn", this.shakeBtn, this);
    this.addBtnOn("undoBtn", this.undoBtn, this);
    this.addBtnOn("wingBtn", this.wingBtn, this);
    this.addBtnOn("highlightBtn", this.highlightBtn, this);
    this.addBtnOn("4TipBtn", this._4TipBtn, this);
    this.addBtnOn("5TipBtn", this._5TipBtn, this);
    this.addBtnOn("5SkipBtn", this._5SkipBtn, this);
    this.addBtnOn("7TipBtn", this.clickTip.bind(this, "021"), this);
    this.addBtnOn("7SkipBtn", this.clickSkip.bind(this, "022"), this);
    this.addBtnOn("8TipBtn", this.clickTip.bind(this, "023"), this);
    this.addBtnOn("8SkipBtn", this.clickSkip.bind(this, "024"), this);
    this.addBtnOn("85TipBtn", this.clickTip.bind(this, "025"), this);
    this.addBtnOn("9SkipBtn", this.clickSkip.bind(this, "026"), this);
    this.addBtnOn("10TipBtn", this.clickTip.bind(this, "027"), this);
    this.addBtnOn("10SkipBtn", this.clickSkip.bind(this, "028"), this);
    this.addBtnOn("11TipBtn", this.clickTip.bind(this, "029"), this);
    this.addBtnOn("11SkipBtn", this.clickSkip.bind(this, "030"), this);
    this.addBtnOn("12TipBtn", this.clickTip.bind(this, "031"), this);
    this.addBtnOn("12SkipBtn", this.clickSkip.bind(this, "032"), this);
    this.addBtnOn("rotateBtn", this.rotateBtn, this);
    this.addBtnOn("13SkipBtn", this.clickSkip.bind(this, "034"), this);
    this.addBtnOn("moderateBtn", this.moderateBtn, this);
    this.addBtnOn("14SkipBtn", this.clickSkip.bind(this, "036"), this);
    this.addBtnOn("addStepBtn", this.addStepBtn, this);
    this.addBtnOn("15SkipBtn", this.clickSkip.bind(this, "038"), this);
    this.addBtnOn("updateCarBtn", this.updateCarBtn, this);
    this.addBtnOn("removeCarBtn", this.removeCarBtn, this);
    this.addBtnOn("unlockPosBtn", this.unlockPosBtn, this);
    $userManager.User.setTempData("currentScene_", 2);
    this.initView();
  };

  e.prototype.func_slowDownTimer = function () {
    this.btn1Time -= 1;

    if (this.btn1Time <= 0) {
      this.btn1Time = 0;
      this.unschedule(this.func_slowDownTimer);
      this.dict.slowDownText.getComponent(cc.Label).string = "减速";
      this.dict.slowDownBtnIcon.opacity = 255;
      this.dict.slowDownBtn.getChildByName("video").active = !0;
      return void this.initSlow();
    }

    this.dict.slowDownText.getComponent(cc.Label).string = this.btn1Time + "s";
  };

  e.prototype.sucProp = function (t) {
    var e = this;

    switch (t) {
      case 0:
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
          queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
          id: 5,
          sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
        });

        window.levelContent._components[0].func_updateCar();

        break;

      case 1:
      case 2:
        break;

      case 3:
        if (window.levelContent._components[0].func_hasLockParking()) {
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
            queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
            id: 6,
            sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
          });
        } else {
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
            queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
            id: 7,
            sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
          });
        }

        window.levelContent._components[0].func_revive();

        break;

      case 4:
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
          queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
          id: 4,
          sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
        });

        window.levelContent._components[0].fun_unlockNewPos();

        this.scheduleOnce(function () {
          if (window.levelContent._components[0].func_hasLockParking()) {//
          } else {
            e.dict.unlockPosBtn.active = !1;
          }
        }, 0.1);
        break;

      case 5:
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
          queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
          id: 5,
          sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
        });

        window.levelContent._components[0].func_item1CB();

        break;

      case 6:
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
          queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
          id: 6,
          sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
        });

        window.levelContent._components[0].func_item5CB();

    }
  };

  e.prototype.gamelog_Thinking_reward_btn = function (t) {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
      queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
      id: t,
      sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
    });
  };

  e.prototype.isShowRevive_func = function () {
    this.isShowRevive = !1;
  };

  e.prototype.func_revive = function () {
    if (!this.isShowRevive) {
      this.isShowRevive = !0;
      $popupManager["default"].hideAll();
      $memoryStorageManager["default"].set($memoryStorageConst["default"].hasLockParking, !1);

      var t = window.levelContent._components[0].func_hasLockParking();

      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 3);
      $memoryStorageManager["default"].set($memoryStorageConst["default"].hasLockParking, t);
      $popupManager["default"].show($popupConst.PopupConst.Prop);
    }
  };

  e.prototype.isRemove = function (t) {
    if (t) {
      this.dict.content.opacity = 100;
      this.removeState = !0;
      this.node.parent.getChildByName("collectRoot").active = !1;
    } else {
      game.canUseProps = !0;
      this.dict.content.opacity = 255;
      this.removeState = !1;
      this.startState && (this.node.parent.getChildByName("collectRoot").active = !0);
    }
  };

  e.prototype.updateCarBtn = function () {
    if (this.removeState || window.levelContent && window.levelContent._components[0].isFail) {//
    } else {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 0);
      $popupManager["default"].show($popupConst.PopupConst.Prop);
    }
  };

  e.prototype.removeCarBtn = function () {
    var t = this;

    if (this.removeState || window.levelContent && window.levelContent._components[0].isFail) {//
    } else {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 1);

      if (this.dict.removeCarBtn.getChildByName("video").active) {
        $platformManager.Platform.showRewardAds(function (e) {
          if (0 == e) {
            var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
            $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
            t.suc(1);

            if (!$localStorageManager["default"].get($localStorageConst["default"].IsNoFirstProp)) {
              $localStorageManager["default"].set($localStorageConst["default"].IsNoFirstProp, 1);
              var r = window.levelContent._components[0].allPersonAmount;
              var o = window.levelContent._components[0].allPersonAmount2;
              cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.First_Progress, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                type: 3,
                progress: (o - r) / o,
                sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
              });
            }
          }
        });
      } else {
        $popupManager["default"].show($popupConst.PopupConst.Prop);
      }
    }
  };

  e.prototype.func_slowDownSuc = function () {
    window.levelContent._components[0].func_slowDown();

    this.btn1Time = window.levelContent._components[0]._slowTime;
    this.dict.slowDownText.getComponent(cc.Label).string = window.levelContent._components[0]._slowTime;
    this.dict.slowDownBtn.getChildByName("video").active = !1;
    this.dict.slowDownBtnIcon.opacity = 150;
    this.dict.slowDownText.getComponent(cc.Label).string = this.btn1Time + "s";
    this.unschedule(this.func_slowDownTimer);
    this.schedule(this.func_slowDownTimer, 1);
    this.initSlow();
  };

  e.prototype.slowDownBtn = function () {
    var t = this;

    if (this.btn1Time) {
      return console.log("正在倒计时");
    }

    if (!this.removeState) {
      if (window.levelContent && window.levelContent._components[0].isFail) {
        return console.log("levelContent");
      }

      if (this.dict.slowDownRoot.active) {
        var e = $localStorageManager["default"].get($localStorageConst["default"].SlowDown) || 0;
        e -= 1;
        $localStorageManager["default"].set($localStorageConst["default"].SlowDown, e);
        this.func_slowDownSuc();
        return console.log("func_slowDownSuc");
      }

      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 1);

      if (this.dict.slowDownBtn.getChildByName("video").active) {
        $platformManager.Platform.showRewardAds(function (e) {
          if (0 == e) {
            var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
            $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
            t.suc(1);

            if (!$localStorageManager["default"].get($localStorageConst["default"].IsNoFirstProp)) {
              $localStorageManager["default"].set($localStorageConst["default"].IsNoFirstProp, 1);
              var r = window.levelContent._components[0].allPersonAmount;
              var o = window.levelContent._components[0].allPersonAmount2;
              cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.First_Progress, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                type: 3,
                progress: (o - r) / o,
                sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
              });
            }
          }
        });
      } else {
        $popupManager["default"].show($popupConst.PopupConst.Prop);
      }
    }
  };

  e.prototype.sortBtn = function () {
    var t = this;

    if (!(this.removeState || window.levelContent && window.levelContent._components[0].isFail)) {
      if (this.dict.sortAmountRoot.active) {
        var e = $localStorageManager["default"].get($localStorageConst["default"].SortAmount) || 0;
        e -= 1;
        $localStorageManager["default"].set($localStorageConst["default"].SortAmount, e);
        this.initSort();
        return void window.levelContent._components[0].func_sort();
      }

      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 2);

      if (this.dict.sortBtn.getChildByName("video").active) {
        $platformManager.Platform.showRewardAds(function (e) {
          if (0 == e) {
            var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
            $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
            t.suc(2);

            if (!$localStorageManager["default"].get($localStorageConst["default"].IsNoFirstProp)) {
              $localStorageManager["default"].set($localStorageConst["default"].IsNoFirstProp, 1);
              var r = window.levelContent._components[0].allPersonAmount;
              var o = window.levelContent._components[0].allPersonAmount2;
              cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.First_Progress, {
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
                type: 3,
                progress: (o - r) / o,
                sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
              });
            }
          }
        });
      } else {
        $popupManager["default"].show($popupConst.PopupConst.Prop);
      }
    }
  };

  e.prototype.f29086_item1 = function () {
    $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 5);
    $popupManager["default"].show($popupConst.PopupConst.Prop);
  };

  e.prototype.f29086_item5 = function () {
    $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 6);
    $popupManager["default"].show($popupConst.PopupConst.Prop);
  };

  e.prototype.unlockPosBtn = function () {
    var t = this;

    if (this.dict.unlockPosRoot.active) {
      var e = $localStorageManager["default"].get($localStorageConst["default"].UnlockPos) || 0;
      e -= 1;
      $localStorageManager["default"].set($localStorageConst["default"].UnlockPos, e);
      this.initUnlockPos();
      return void window.levelContent._components[0].fun_unlockNewPos();
    }

    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
        $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
        t.suc(4);
      }
    });
  };

  e.prototype.suc = function (t) {
    cc.game.emit("sucProp", t);
  };

  e.prototype.rotateBtn = function () {
    var t = this;
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        cc.game.emit("rotateBtn");
        t.videoReport("033");
      }
    });
  };

  e.prototype.addStepBtn = function () {
    var t = this;
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        cc.game.emit("addStepBtn");
        t.videoReport("037");
      }
    });
  };

  e.prototype.moderateBtn = function () {
    var t = this;

    if (this.dict.moderateBtn.getChildByName("video").active) {
      $platformManager.Platform.showRewardAds(function (e) {
        if (0 == e) {
          cc.game.emit("moderateBtn");
          t.dict.moderateBtn.getChildByName("video").active = !1;
          t.videoReport("035");
          t.dict.moderateBtnText.getComponent(cc.Label).string = t.moderateBtnTime + "s";
          t.schedule(t.moderateBtn_, 1);
        }
      });
    }
  };

  e.prototype.moderateBtn_ = function () {
    this.moderateBtnTime -= 1;

    if (this.moderateBtnTime <= 0) {
      this.moderateBtnTime = 0;
      this.unschedule(this.moderateBtn_);
      this.dict.moderateBtnText.getComponent(cc.Label).string = "减速";
      this.dict.moderateBtn.getChildByName("video").active = !0;
      return void (this.moderateBtnTime = 30);
    }

    this.dict.moderateBtnText.getComponent(cc.Label).string = this.moderateBtnTime + "s";
  };

  e.prototype._4TipBtn = function () {
    this.clickTip("014");
  };

  e.prototype._5TipBtn = function () {
    this.clickTip("016");
  };

  e.prototype._5SkipBtn = function () {
    this.clickSkip("017");
  };

  e.prototype.hammerBtn = function () {
    var t = this;

    if (this.dict.hammerBtn.getChildByName("video").active) {
      $platformManager.Platform.showRewardAds(function (e) {
        if (0 == e) {
          console.log("hammerBtn");
          cc.game.emit("hammerBtn");
          t.dict.hammerBtn.getChildByName("video").active = !1;
          t.videoReport("013");
        }
      });
    }
  };

  e.prototype.videoReport = function (t) {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
      id: t,
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
      sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
    });
  };

  e.prototype.shakeBtn = function () {
    var t = this;
    var e = $userManager.User.get("shakeAmount");

    if (this.dict.shakeBtn.getChildByName("video").active) {
      $platformManager.Platform.showRewardAds(function (n) {
        if (0 == n) {
          t.videoReport("015");
          var r = e + 3;
          $userManager.User.set("shakeAmount", r);
          t.dict.shakeAmount.children[0].getComponent(cc.Label).string = String(r - 1);

          if (r > 1) {
            t.dict.shakeBtn.getChildByName("video").active = !1;
            t.dict.shakeAmount.active = !0;
          }
        }
      });
    } else if (this.dict.shakeAmount.active) {
      var n = e - 1;
      $userManager.User.set("shakeAmount", n);
      this.dict.shakeAmount.children[0].getComponent(cc.Label).string = String(n - 1);

      if (n <= 1) {
        this.dict.shakeBtn.getChildByName("video").active = !0;
        this.dict.shakeAmount.active = !1;
      }

      cc.game.emit("shakeBtn");
    } else {
      cc.game.emit("shakeBtn");
    }
  };

  e.prototype.undoBtn = function () {
    var t = this;
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        cc.game.emit("undoBtn");
        t.videoReport("018");
      }
    });
  };

  e.prototype.wingBtn = function () {
    var t = this;
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        cc.game.emit("wingBtn");
        t.videoReport("020");
      }
    });
  };

  e.prototype.highlightBtn = function () {
    var t = this;
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        cc.game.emit("highlightBtn");
        t.videoReport("019");
      }
    });
  };

  e.prototype.resetBtn = function () {
    var t = this;

    if ($userManager.User.getTempData("isVideo")) {
      $platformManager.Platform.showRewardAds(function (e) {
        if (0 == e) {
          var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
          $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
          t.updateContent();
          t.sucReset();
        }
      });
    } else {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 0);
      $popupManager["default"].show($popupConst.PopupConst.Prop);
    }
  };

  e.prototype.sucReset = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
      id: "002",
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
      sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
    });
    cc.game.emit("onRestartBtn");
    this.addTodayShareOrVideoTimesUpdate();
    var t = $bmsManager.BMS.getKey("isItems");
    var e = $bmsManager.BMS.getKey("itemNum");
    var n = $userManager.User.get("nation");

    if (t.includes(n)) {
      var r = e[0];

      if (r > 1) {
        var o = $userManager.User.get("restartTimes") || 0;
        o += r - 1;
        $userManager.User.set("restartTimes", o);
        cc.game.emit("updateRestartView");
      }
    }
  };

  e.prototype.sucTip = function () {
    $userManager.User.set($userConst.TempData.isUnlockTip, !0);
    this.isUnlockTip = !0;
    this.initTipView();
    cc.game.emit("gamelog", "page006");
    $popupManager["default"].show($popupConst.PopupConst.TIP);
  };

  e.prototype.sucWithdraw = function () {
    window.levelContent._components[0].func_reBackOne();
  };

  e.prototype.removeScrewBtn = function () {
    var t = this;

    if (0 == $bmsManager.BMS.getKey("UnscrewTicket") && $userManager.User.getTempData("isVideo")) {
      $platformManager.Platform.showRewardAds(function (e) {
        if (0 == e) {
          var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
          $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
          t.updateContent();
          t.sucRemoveScrew();
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
            id: "071",
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
            sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
          });
        }
      });
    } else if (this.dict.btn_card.active) {
      var e = $localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0;

      if (e < 1) {
        $tipManager.Tip.show($languageManager["default"].formatStr("万能卡不足！"));
        $popupManager["default"].show($popupConst.PopupConst.UniversalCard);
      } else {
        $localStorageManager["default"].set($localStorageConst["default"].cardAmount, e - 1);
        this.sucRemoveScrew();
      }
    } else {
      if ($userManager.User.getTempData("isVideo")) {
        $platformManager.Platform.showRewardAds(function (e) {
          if (0 == e) {
            var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
            $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
            t.updateContent();
            t.sucRemoveScrew();
          }
        });
      } else {
        cc.game.emit("removeScrewBtn");
        $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 3);
        $popupManager["default"].show($popupConst.PopupConst.Prop);
      }
    }
  };

  e.prototype.sucBore = function () {
    $eventManager.Event.emit($eventConst["default"].boreBtn);
  };

  e.prototype.sucRemoveScrew = function () {
    cc.game.emit("screwBoxBtn");
    var t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
    var e = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
    var n = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Unscrew, {
      lv: t,
      mode: e,
      queue: n
    });
  };

  e.prototype.addTodayShareOrVideoTimesUpdate = function () {};

  e.prototype.upsetBtn = function () {
    $platformManager.Platform.showRewardAds(function (t) {
      if (0 == t) {
        $eventManager.Event.emit($eventConst["default"].upset);
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          id: "006",
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
          sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
        });
      }
    });
  };

  e.prototype.updateBoreView = function () {
    $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
    var t = $userManager.User.get($userConst.UserData.boreTimes) || 0;

    if (t) {
      this.dict.boreVideoIcon.active = !1;
      this.dict.boreShareIcon.active = !1;
      this.dict.boreTimes.active = !0;
      this.dict.boreTimes.getComponent(cc.Label).string = "" + t;
    } else {
      this.dict.boreVideoIcon.active = !0;
      this.dict.boreShareIcon.active = !1;
      this.dict.boreTimes.active = !1;
      this.dict.boreTimes.getComponent(cc.Label).string = "" + t;
    }
  };

  e.prototype.updateRestartView = function () {
    this.initRestartView();
  };

  e.prototype.updateBackView = function () {
    $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
    var t = $userManager.User.get("backTimes") || 0;

    if (t) {
      this.dict.chehuiVideoIcon.active = !1;
      this.dict.chehuiShareIcon.active = !1;
      this.dict.backTimes.active = !0;
      this.dict.backTimes.getComponent(cc.Label).string = "" + t;
    } else {
      this.dict.chehuiVideoIcon.active = !0;
      this.dict.chehuiShareIcon.active = !1;
      this.dict.backTimes.active = !1;
      this.dict.backTimes.getComponent(cc.Label).string = "" + t;
    }
  };

  e.prototype.boreBtn = function () {
    var t = this;

    if (this.dict.boreTimes.active) {
      var e = $userManager.User.get($userConst.UserData.boreTimes) || 0;
      $eventManager.Event.emit($eventConst["default"].boreBtn);
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
        id: "008",
        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
        sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
      });

      if (e - 1 < 0) {
        e = 1;
      }

      $userManager.User.set($userConst.UserData.boreTimes, e - 1);
      this.updateBoreView();
      return void $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), $userConst.UserData.boreTimes, String(e - 1)).then(function () {
        console.log("保存boreTimes成功");
      });
    }

    if (this.dict.boreShareIcon.active) {
      console.log("点击分享");
      $userManager.User.setTempData("clickShare", !0);
      $userManager.User.setTempData("shareReward", "bore");
      return void $popupManager["default"].show($popupConst.PopupConst.ShareTip);
    }

    if ($userManager.User.getTempData("isVideo")) {
      $platformManager.Platform.showRewardAds(function (e) {
        if (0 == e) {
          var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
          $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
          t.updateContent();
          t.sucBore();
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
            id: "008",
            queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
            sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
          });
        }
      });
    } else {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 4);
      $popupManager["default"].show($popupConst.PopupConst.Prop);
    }
  };

  e.prototype.chehuiBtn = function () {
    var t = this;
    this.dict.withdrawBtn.stopAllActions();
    this.dict.withdrawBtn.scale = 1;
    cc.game.emit("chehuiBtn_anim");

    if (window.levelContent._components[0].func_checkReBackOne) {
      if (window.levelContent._components[0].func_checkReBackOne()) {
        if ($userManager.User.getTempData("isVideo")) {
          return void $platformManager.Platform.showRewardAds(function (e) {
            if (0 == e) {
              var n = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
              $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, n + 1);
              t.updateContent();
              t.sucWithdraw();
              cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
                id: "070",
                lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
                mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
                sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
              });
            }
          });
        }

        $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 2);
        $popupManager["default"].show($popupConst.PopupConst.Prop);
      } else {
        $tipManager.Tip.show("当前无法撤回");
      }
    }
  };

  e.prototype.screwBoxBtn = function () {
    if ($userManager.User.get($userConst.UserData.screwBoxInfinite)) {
      console.log("无限次数");
      cc.game.emit("screwBoxBtn");
      var t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
      var e = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
      var n = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Unscrew, {
        lv: t,
        mode: e,
        queue: n
      });
      return void (this.dict.screwBoxBtn.active = !1);
    }

    if (this.dict.screwBoxMask.active) {
      $popupManager["default"].show($popupConst.PopupConst.ScrewTip);
    } else {
      var r = $userManager.User.get($userConst.UserData.screwBoxTimes) || 0;
      $userManager.User.set($userConst.UserData.screwBoxTimes, r - 1);
      this.updateScrewBoxView();
      $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), $userConst.UserData.screwBoxTimes, String(r - 1)).then(function () {
        console.log("保存screwBoxTimes成功");
      });
      cc.game.emit("screwBoxBtn");
      this.dict.screwBoxBtn.active = !1;
      t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
      e = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
      n = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Unscrew, {
        lv: t,
        mode: e,
        queue: n
      });
    }
  };

  e.prototype.updateScrewBoxView = function () {
    if ($userManager.User.get($userConst.UserData.screwBoxInfinite)) {
      this.dict.screwBoxTimesBg.active = !1;
      this.dict.screwBoxMask.active = !1;
    }
  };

  e.prototype.updateTipTimesView = function () {
    var t = $userManager.User.get($userConst.UserData.tipTimes) || 0;

    if (t) {
      this.dict.tipVideoIcon.active = !1;
      this.dict.tipShareIcon.active = !1;
      this.dict.tipTimes.active = !0;
      this.dict.tipTimes.getComponent(cc.Label).string = "" + t;
    } else {
      this.dict.tipVideoIcon.active = !0;
      this.dict.tipShareIcon.active = !1;
      this.dict.tipTimes.active = !1;
    }
  };

  e.prototype.removeBtn = function () {
    console.log("箱子");
  };

  e.prototype.boreBtn2 = function () {
    $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 4);
    $popupManager["default"].show($popupConst.PopupConst.Prop);
  };

  e.prototype.onEnable = function () {
    $eventManager.Event.on($eventConst["default"].KEY_UPDATE, this.initView, this);
    $eventManager.Event.on($eventConst["default"].UPDATE_IS_UNLOCK_TIP, this.updateIsUnlockTip, this);
    $eventManager.Event.on($eventConst["default"].TIP_BTN_ANIM, this.tip_btn_anim, this);
    $eventManager.Event.on($eventConst["default"].switchMove5State, this.switchMove5State, this);
    $eventManager.Event.on($eventConst["default"].restartAnswer, this.restartAnswer, this);
    $eventManager.Event.on($eventConst["default"].restartAnswer2, this.restartAnswer2, this);
    cc.game.on("boreBtn", this.boreBtn2, this);
    cc.game.on("showHammerBtnVideo", this.showHammerBtnVideo, this);
    cc.game.on("shareSuc", this.shareSuc, this);
    cc.game.on("shareFail", this.shareFail, this);
    cc.game.on("timeEnd_answerBtn", this.timeEnd_answerBtn, this);
    cc.game.on("timeEnd_addTime", this.timeEnd_addTime, this);
    cc.game.on("bore_bore", this.bore_bore, this);
    cc.game.on("pause_answerBtn", this.pause_answerBtn, this);
    cc.game.on("updateRestartView", this.updateRestartView, this);
    cc.game.on("updateBackView", this.updateBackView, this);
    cc.game.on("updateBoreView", this.initBoreView, this);
    cc.game.on("updateScrewBoxView", this.updateScrewBoxView, this);
    cc.game.on("updateTipTimesView", this.initTipView, this);
    cc.game.on("tipSuc", this.tipSuc, this);
    cc.game.on("gameRestart", this.gameRestart, this);
    cc.game.on("updateTodayShareOrVideoTimes", this.updateTodayShareOrVideoTimes, this);
    cc.game.on("sucReset", this.sucReset, this);
    cc.game.on("sucTip", this.sucTip, this);
    cc.game.on("sucWithdraw", this.sucWithdraw, this);
    cc.game.on("sucRemoveScrew", this.sucRemoveScrew, this);
    cc.game.on("sucBore", this.sucBore, this);
    cc.game.on("updateContent", this.updateContent, this);
    cc.game.on("sucProp", this.sucProp, this);
    cc.game.on("levelFailEvent", this.func_revive, this);
    cc.game.on("needLimitNoHandle", this.isRemove, this);
    cc.game.on("updateSort", this.initSort, this);
    cc.game.on("updateSlow", this.initSlow, this);
    cc.game.on("updateUnlockPos", this.initUnlockPos, this);
    cc.game.on("isShowRevive", this.isShowRevive_func, this);
    cc.game.on("rewardVideo", this.rewardVideo, this);
    cc.game.on("gamelog_Thinking_reward_btn", this.gamelog_Thinking_reward_btn, this);
    cc.game.on("f29086_warningIndex", this.bubble, this);
    cc.game.on("unlockVideoLock", this.unlockVideoLock, this);
    cc.game.on("f29086_item1", this.f29086_item1, this);
    cc.game.on("f29086_item5", this.f29086_item5, this);
  };

  e.prototype.onDisable = function () {
    $eventManager.Event.off($eventConst["default"].KEY_UPDATE, this.initView, this);
    $eventManager.Event.off($eventConst["default"].UPDATE_IS_UNLOCK_TIP, this.updateIsUnlockTip, this);
    $eventManager.Event.off($eventConst["default"].TIP_BTN_ANIM, this.tip_btn_anim, this);
    $eventManager.Event.off($eventConst["default"].switchMove5State, this.switchMove5State, this);
    $eventManager.Event.off($eventConst["default"].restartAnswer, this.restartAnswer, this);
    $eventManager.Event.off($eventConst["default"].restartAnswer2, this.restartAnswer2, this);
    cc.game.off("clickTip", this.clickTip_suc, this);
    cc.game.off("boreBtn", this.boreBtn2, this);
    cc.game.off("showHammerBtnVideo", this.showHammerBtnVideo, this);
    cc.game.off("shareSuc", this.shareSuc, this);
    cc.game.off("shareFail", this.shareFail, this);
    cc.game.off("timeEnd_answerBtn", this.timeEnd_answerBtn, this);
    cc.game.off("timeEnd_addTime", this.timeEnd_addTime, this);
    cc.game.off("bore_bore", this.bore_bore, this);
    cc.game.off("pause_answerBtn", this.pause_answerBtn, this);
    cc.game.off("updateRestartView", this.updateRestartView, this);
    cc.game.off("updateBackView", this.updateBackView, this);
    cc.game.off("updateBoreView", this.updateBoreView, this);
    cc.game.off("updateScrewBoxView", this.updateScrewBoxView, this);
    cc.game.off("updateTipTimesView", this.updateTipTimesView, this);
    cc.game.off("tipSuc", this.tipSuc, this);
    cc.game.off("gameRestart", this.gameRestart, this);
    cc.game.off("updateTodayShareOrVideoTimes", this.updateTodayShareOrVideoTimes, this);
    cc.game.off("sucReset", this.sucReset, this);
    cc.game.off("sucTip", this.sucTip, this);
    cc.game.off("sucWithdraw", this.sucWithdraw, this);
    cc.game.off("sucRemoveScrew", this.sucRemoveScrew, this);
    cc.game.off("updateContent", this.updateContent, this);
    cc.game.off("sucProp", this.sucProp, this);
    cc.game.off("levelFailEvent", this.func_revive, this);
    cc.game.off("needLimitNoHandle", this.isRemove, this);
    cc.game.off("updateSort", this.initSort, this);
    cc.game.off("updateSlow", this.initSlow, this);
    cc.game.off("updateUnlockPos", this.initUnlockPos, this);
    cc.game.off("isShowRevive", this.isShowRevive_func, this);
    cc.game.off("rewardVideo", this.rewardVideo, this);
    cc.game.off("gamelog_Thinking_reward_btn", this.gamelog_Thinking_reward_btn, this);
    cc.game.off("f29086_warningIndex", this.bubble, this);
    cc.game.off("unlockVideoLock", this.unlockVideoLock, this);
    cc.game.off("f29086_item1", this.f29086_item1, this);
    cc.game.off("f29086_item5", this.f29086_item5, this);
  };

  e.prototype.bubble = function (t) {
    var e = this;
    console.log("冒泡", t);

    if (2 == t) {
      if (this.isBubble) {
        return;
      }

      this.isBubble = !0;
      var n = $utils.Utils.randomNum(0, 3);
      var r = null;

      switch (n) {
        case 0:
          r = this.dict.slowDownBtn;
          break;

        case 1:
          r = this.dict.sortBtn;

        case 2:
          r = this.dict.clearBtn;
          break;

        case 3:
          r = this.dict.fullScreenAttackBtn;
      }

      r.getChildByName("bubble").active = !0;
      this.scheduleOnce(function () {
        e.isBubble = !1;
        r.getChildByName("bubble").active = !1;
      }, 3);
    }
  };

  e.prototype.unlockVideoLock = function (t) {
    if (t) {//
    } else {
      this.dict.unlockPosBtn.active = !1;
    }
  };

  e.prototype.rewardVideo = function (t) {
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
          queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
          id: 4,
          sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
        });
        t(0);
      }
    });
  };

  e.prototype.gameRestart = function () {};

  e.prototype.shareSuc = function () {
    $userManager.User.get($userConst.UserData.isFirstShared);
    var t = $userManager.User.getTempData("clickShare");
    $userManager.User.getTempData("shareReward");

    if (t) {
      this.shareSucSub();
    }
  };

  e.prototype.shareFail = function () {
    var t = $userManager.User.get($userConst.UserData.isFirstShared);
    var e = $userManager.User.getTempData("clickShare");
    $userManager.User.getTempData("shareReward");

    if (!t && e) {
      this.shareSucSub();
    } else {
      if (e) {
        $tipManager.Tip.show("分享失败，请分享到大于10人的群里");
        $userManager.User.setTempData("clickShare", !1);
      }
    }
  };

  e.prototype.shareSucSub = function () {
    var t = $userManager.User.getTempData("shareReward");
    $userManager.User.set($userConst.UserData.isFirstShared, !0);
    $userManager.User.setTempData("clickShare", !1);

    if ("restart" == t) {
      cc.game.emit("onRestartBtn");
      $userManager.User.set($userConst.UserData.getResetByShareTimes, 0);
    } else {
      if ("tip" == t) {
        this.tipSuc(), $userManager.User.set($userConst.UserData.getTipShareTimes, 0);
      } else {
        if ("bore" == t) {
          $eventManager.Event.emit($eventConst["default"].boreBtn), $userManager.User.set($userConst.UserData.getBoreByShareTimes, 0);
        } else {
          if ("delayed" == t) {
            $userManager.User.set($userConst.UserData.getDelayedByShareTimes, 0);
          } else {
            "tip_timeEnd" == t ? ($eventManager.Event.emit($eventConst["default"].restartAnswer), $popupManager["default"].hide()) : "addTime_timeEnd" == t ? ($eventManager.Event.emit($eventConst["default"].extendTime), $popupManager["default"].hide()) : "bore_bore" == t ? ($eventManager.Event.emit($eventConst["default"].boreBtn), $popupManager["default"].hide()) : "pause_answerBtn" == t && ($eventManager.Event.emit($eventConst["default"].restartAnswer2), $eventManager.Event.emit($eventConst["default"].restoreTime), $popupManager["default"].hide());
          }
        }
      }
    }

    this.initShareView();
  };

  e.prototype.showHammerBtnVideo = function () {
    this.dict.hammerBtn.getChildByName("video").active = !0;
  };

  e.prototype.switchMove5State = function (t) {
    console.log("state", t);
    this.dict.move5Btn.active = t;
  };

  e.prototype.restartAnswer = function () {
    var t = this;
    this.scheduleOnce(function () {
      cc.game.emit("onRestartBtn");
      $userManager.User.set($userConst.TempData.isUnlockTip, !0);
      t.isUnlockTip = !0;
      t.initTipView();
      cc.game.emit("gamelog", "page006");
      $popupManager["default"].show($popupConst.PopupConst.TIP);
    }, 0.3);
  };

  e.prototype.restartAnswer2 = function () {
    var t = this;
    this.scheduleOnce(function () {
      $userManager.User.set($userConst.TempData.isUnlockTip, !0);
      t.isUnlockTip = !0;
      t.initTipView();
      cc.game.emit("gamelog", "page006");
      $popupManager["default"].show($popupConst.PopupConst.TIP);
    }, 0.3);
  };

  e.prototype.tip_btn_anim = function () {};

  e.prototype.updateIsUnlockTip = function () {
    $userManager.User.set($userConst.TempData.isUnlockTip, !1);
    this.isUnlockTip = !1;
    this.initTipView();
  };

  e.prototype.updateContent = function () {
    $bmsManager.BMS.getKey("itemVideo");
  };

  e.prototype.initView = function () {
    var t = this;
    this.initSkipView();
    $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
    this.node.children.forEach(function (e, n) {
      if (n != t.node.childrenCount - 1) {
        e.active = !1;
      }
    });
    var e = $userManager.User.getTempData("cheats");

    if ($platformManager.Platform.is($platformConst.EPlatform.WEB) || e) {
      this.dict.hideText.active = !0;
    } else {
      this.dict.hideText.active = !1;
    }

    this.initShareView();

    if ($userManager.User.get($userConst.UserData.screwBoxInfinite)) {
      this.dict.screwBoxTimesBg.active = !1;
      this.dict.screwBoxMask.active = !1;
    }

    this.initSort();
    this.initSlow();
    this.initUnlockPos();
    this.scheduleOnce(function () {
      t.startState = t.node.parent.getChildByName("collectRoot").active;
    }, 1);
  };

  e.prototype.initSort = function () {};

  e.prototype.initSlow = function () {};

  e.prototype.initUnlockPos = function () {
    var t = $localStorageManager["default"].get($localStorageConst["default"].UnlockPos) || 0;
    this.dict.unlockPosRoot.active = !!t;
    this.dict.unlockPos.getComponent(cc.Label).string = "" + t;
    this.dict.unlockPosBtn.getChildByName("video").active = !this.dict.unlockPosRoot.active;
  };

  e.prototype.addBtnOn_ = function (t, e, n) {
    if (t.getComponent(cc.Button)) {//
    } else {
      t.addComponent(cc.Button);
    }

    var r = t.getComponent(cc.Button);
    r.transition = cc.Button.Transition.SCALE;
    r.duration = 0.1;
    r.zoomScale = 1.2;
    t.on(cc.Node.EventType.TOUCH_END, function () {
      cc.game.emit("playClickAudio");
      e.call(n);
    }, this);
  };

  e.prototype.updateTodayShareOrVideoTimes = function () {
    this.initShareView();
  };

  e.prototype.initRestartView = function () {};

  e.prototype.initBackView = function () {
    $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
    var t = $userManager.User.get("backTimes") || 0;

    if (t) {
      this.dict.chehuiVideoIcon.active = !1;
      this.dict.chehuiShareIcon.active = !1;
      this.dict.backTimes.active = !0;
      this.dict.backTimes.getComponent(cc.Label).string = "" + t;
    } else {
      this.dict.backTimes.active = !1;

      if (this.isShare) {
        this.dict.chehuiShareIcon.active = !0, this.dict.chehuiVideoIcon.active = !1;
      } else {
        this.dict.chehuiVideoIcon.active = !0, this.dict.chehuiShareIcon.active = !1;
      }
    }
  };

  e.prototype.initShareView = function () {};

  e.prototype.showShareView = function () {
    this.dict.restartVideoIcon.active = !1;
    this.dict.chehuiVideoIcon.active = !1;
    this.dict.tipVideoIcon.active = !1;
    this.dict.boreVideoIcon.active = !1;
    this.dict.restartShareIcon.active = !0;
    this.dict.chehuiShareIcon.active = !0;
    this.dict.tipShareIcon.active = !0;
    this.dict.boreShareIcon.active = !0;
  };

  e.prototype.initTipView = function () {};

  e.prototype.initBoreView = function () {
    if (0 == $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)) {
      var t = $userManager.User.get($userConst.UserData.boreTimes) || 0;

      if (t) {
        this.dict.boreVideoIcon.active = !1;
        this.dict.boreShareIcon.active = !1;
        this.dict.boreTimes.active = !0;
        this.dict.boreTimes.getComponent(cc.Label).string = "" + Math.abs(t);
      } else {
        this.dict.boreTimes.active = !1;

        if (this.isShare) {
          this.dict.boreVideoIcon.active = !1, this.dict.boreShareIcon.active = !0;
        } else {
          this.dict.boreVideoIcon.active = !0, this.dict.boreShareIcon.active = !1;
        }
      }
    }
  };

  e.prototype.initSkipView = function () {
    if (!$userManager.User.getTempData($userConst.TempData.IS_WIN)) {
      var t = $userManager.User.get($userConst.UserData.KEY);
      this.dict.skipVideo.active = !(t >= 2);
    }
  };

  e.prototype.clickKey = function () {
    if ($userManager.User.getTempData($userConst.TempData.IS_WIN)) {//
    } else {
      cc.game.emit("gamelog", "btn016");
      $platformManager.Platform.showRewardAds(function (t) {
        if (0 == t) {
          cc.game.emit("gamelog", "rewarde_btn002");
          var e = $userManager.User.get($userConst.UserData.KEY);
          $userManager.User.set($userConst.UserData.KEY, e + 1);
          $eventManager.Event.emit($eventConst["default"].KEY_EFFECT);
        }
      });
    }
  };

  e.prototype.timeEnd_answerBtn = function () {
    console.log("点击分享");
    $userManager.User.setTempData("clickShare", !0);
    $userManager.User.setTempData("shareReward", "tip_timeEnd");
    $platformManager.Platform.share();
  };

  e.prototype.timeEnd_addTime = function () {
    console.log("点击分享");
    $userManager.User.setTempData("clickShare", !0);
    $userManager.User.setTempData("shareReward", "addTime_timeEnd");
    $platformManager.Platform.share();
  };

  e.prototype.bore_bore = function () {
    console.log("点击分享");
    $userManager.User.setTempData("clickShare", !0);
    $userManager.User.setTempData("shareReward", "bore_bore");
    $platformManager.Platform.share();
  };

  e.prototype.pause_answerBtn = function () {
    console.log("点击分享");
    $userManager.User.setTempData("clickShare", !0);
    $userManager.User.setTempData("shareReward", "pause_answerBtn");
    $platformManager.Platform.share();
  };

  e.prototype.clickTip = function (t) {
    var e = this;

    if (void 0 === t) {
      t = "001";
    }

    if (this.isUnlockTip) {
      return $popupManager["default"].show($popupConst.PopupConst.TIP);
    }

    if ($userManager.User.getTempData("isVideo")) {
      $platformManager.Platform.showRewardAds(function (n) {
        if (0 == n) {
          var r = $userManager.User.get($userConst.UserData.todayShareOrVideoTimes) || 0;
          $userManager.User.set($userConst.UserData.todayShareOrVideoTimes, r + 1);
          e.updateContent();
          e.sucTip();
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
            id: t,
            lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
            mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
            sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
          });
        }
      });
    } else {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].propIndex, 1);
      $popupManager["default"].show($popupConst.PopupConst.Prop);
    }
  };

  e.prototype.tipSuc = function () {
    $userManager.User.set($userConst.TempData.isUnlockTip, !0);
    this.isUnlockTip = !0;
    this.initTipView();
    cc.game.emit("gamelog", "page006");
    $popupManager["default"].show($popupConst.PopupConst.TIP);
  };

  e.prototype.clickTip_suc = function () {
    $userManager.User.set($userConst.TempData.isUnlockTip, !0);
    this.isUnlockTip = !0;
    this.initTipView();
    cc.game.emit("gamelog", "page006");
    $popupManager["default"].show($popupConst.PopupConst.TIP);
  };

  e.prototype.clickSkip = function (t) {
    if (void 0 === t) {
      t = "007";
    }

    cc.game.emit("gamelog", "btn019");

    if (this.dict.skipVideo.active) {
      $platformManager.Platform.showRewardAds(function (t) {
        if (0 == t) {
          $userManager.User.setTempData("isNeedInsert", !1);
          var e = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
          var n = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
          cc.game.emit("gamelog", "Level_Skip_" + n + "_" + e);
          cc.game.emit("gamelog", "rewarde_btn004");
          cc.game.emit("game_success2");
        }
      });
    } else {
      $popupManager["default"].show($popupConst.PopupConst.SKIP);
    }
  };

  e.prototype.hideText = function () {
    if (255 == this.dict.hideText.opacity) {
      this.dict.hideText.opacity = 0;
      this.dict.skipBtn.active = !1;
    } else {
      this.dict.hideText.opacity = 255;
      this.dict.skipBtn.active = !0;
    }
  };

  e.prototype.move5Btn = function () {
    $platformManager.Platform.showRewardAds(function (t) {
      if (0 == t) {
        $eventManager.Event.emit($eventConst["default"].move5);
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.reward_btn, {
          id: "003",
          lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
          mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
          sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
        });
      }
    });
  };

  __decorate([T([cc.SpriteFrame])], e.prototype, "videoOrAdd", void 0);

  __decorate([$limitRepeat.LimitRepeat(1)], e.prototype, "boreBtn", null);

  return __decorate([P], e);
}($baseUI["default"]);

exports["default"] = A;

cc._RF.pop();