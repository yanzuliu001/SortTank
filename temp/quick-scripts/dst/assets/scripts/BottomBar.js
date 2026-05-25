
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BottomBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0JvdHRvbUJhci5qcyJdLCJuYW1lcyI6WyJyIiwiJGJhc2VVSSIsInJlcXVpcmUiLCIkZXZlbnRDb25zdCIsIiRwbGF0Zm9ybUNvbnN0IiwiJHBvcHVwQ29uc3QiLCIkdXNlckNvbnN0IiwiJGJtc01hbmFnZXIiLCIkZXZlbnRNYW5hZ2VyIiwiJHBsYXRmb3JtTWFuYWdlciIsIiRwb3B1cE1hbmFnZXIiLCIkdGlwTWFuYWdlciIsIiR1c2VyTWFuYWdlciIsIiRsaW1pdFJlcGVhdCIsIiRtZW1vcnlTdG9yYWdlQ29uc3QiLCIkbWVtb3J5U3RvcmFnZU1hbmFnZXIiLCIkc2h1U2h1Q29uc3QiLCIkbG9jYWxTdG9yYWdlTWFuYWdlciIsIiRsb2NhbFN0b3JhZ2VDb25zdCIsIiRsYW5ndWFnZU1hbmFnZXIiLCIkdXRpbHMiLCJNIiwiY2MiLCJfZGVjb3JhdG9yIiwiUCIsImNjY2xhc3MiLCJUIiwicHJvcGVydHkiLCJBIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImxldmVsIiwiaXNVbmxvY2tUaXAiLCJ2aWRlb09yQWRkIiwiYnRuMVRpbWUiLCJpc1Nob3dSZXZpdmUiLCJyZW1vdmVTdGF0ZSIsIm1vZGVyYXRlQnRuVGltZSIsImlzQnViYmxlIiwiaXNBbmltIiwiYWRkTm9kZXMiLCJzdGFydFN0YXRlIiwiaXNTaGFyZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJkaWN0IiwiYWRkQnRuT24iLCJjbGlja0tleSIsImNsaWNrVGlwIiwicmVtb3ZlU2NyZXdCdG4iLCJyZW1vdmVCdG4iLCJtb3ZlNUJ0biIsInJlc2V0QnRuIiwidXBzZXRCdG4iLCJib3JlQnRuIiwiY2hlaHVpQnRuIiwic2NyZXdCb3hCdG4iLCJjbGlja1NraXAiLCJoaWRlVGV4dCIsImhhbW1lckJ0biIsInNoYWtlQnRuIiwidW5kb0J0biIsIndpbmdCdG4iLCJoaWdobGlnaHRCdG4iLCJfNFRpcEJ0biIsIl81VGlwQnRuIiwiXzVTa2lwQnRuIiwiYmluZCIsInJvdGF0ZUJ0biIsIm1vZGVyYXRlQnRuIiwiYWRkU3RlcEJ0biIsInVwZGF0ZUNhckJ0biIsInJlbW92ZUNhckJ0biIsInVubG9ja1Bvc0J0biIsIlVzZXIiLCJzZXRUZW1wRGF0YSIsImluaXRWaWV3IiwiZnVuY19zbG93RG93blRpbWVyIiwidW5zY2hlZHVsZSIsInNsb3dEb3duVGV4dCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwic2xvd0Rvd25CdG5JY29uIiwib3BhY2l0eSIsInNsb3dEb3duQnRuIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJpbml0U2xvdyIsInN1Y1Byb3AiLCJnYW1lIiwiZW1pdCIsIlNodVNodUNvbnN0IiwicmV3YXJkX2J0biIsImx2IiwiZ2V0VGVtcERhdGEiLCJUZW1wRGF0YSIsIkNVUlJFTlRfTEVWRUxfSUQiLCJtb2RlIiwiQ1VSUkVOVF9NT0RFIiwicXVldWUiLCJDVVJSRU5UX0xFVkVMIiwiaWQiLCJzb3J0IiwiZ2V0IiwiQ29uZmlnU3VmZml4Iiwid2luZG93IiwibGV2ZWxDb250ZW50IiwiX2NvbXBvbmVudHMiLCJmdW5jX3VwZGF0ZUNhciIsImZ1bmNfaGFzTG9ja1BhcmtpbmciLCJmdW5jX3Jldml2ZSIsImZ1bl91bmxvY2tOZXdQb3MiLCJzY2hlZHVsZU9uY2UiLCJmdW5jX2l0ZW0xQ0IiLCJmdW5jX2l0ZW01Q0IiLCJnYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG4iLCJpc1Nob3dSZXZpdmVfZnVuYyIsImhpZGVBbGwiLCJzZXQiLCJoYXNMb2NrUGFya2luZyIsInByb3BJbmRleCIsInNob3ciLCJQb3B1cENvbnN0IiwiUHJvcCIsImlzUmVtb3ZlIiwiY29udGVudCIsIm5vZGUiLCJwYXJlbnQiLCJjYW5Vc2VQcm9wcyIsImlzRmFpbCIsIlBsYXRmb3JtIiwic2hvd1Jld2FyZEFkcyIsIm4iLCJVc2VyRGF0YSIsInRvZGF5U2hhcmVPclZpZGVvVGltZXMiLCJzdWMiLCJJc05vRmlyc3RQcm9wIiwiYWxsUGVyc29uQW1vdW50IiwibyIsImFsbFBlcnNvbkFtb3VudDIiLCJGaXJzdF9Qcm9ncmVzcyIsInR5cGUiLCJwcm9ncmVzcyIsImZ1bmNfc2xvd0Rvd25TdWMiLCJmdW5jX3Nsb3dEb3duIiwiX3Nsb3dUaW1lIiwic2NoZWR1bGUiLCJjb25zb2xlIiwibG9nIiwic2xvd0Rvd25Sb290IiwiU2xvd0Rvd24iLCJzb3J0QnRuIiwic29ydEFtb3VudFJvb3QiLCJTb3J0QW1vdW50IiwiaW5pdFNvcnQiLCJmdW5jX3NvcnQiLCJmMjkwODZfaXRlbTEiLCJmMjkwODZfaXRlbTUiLCJ1bmxvY2tQb3NSb290IiwiVW5sb2NrUG9zIiwiaW5pdFVubG9ja1BvcyIsInZpZGVvUmVwb3J0IiwibW9kZXJhdGVCdG5UZXh0IiwibW9kZXJhdGVCdG5fIiwic2hha2VBbW91bnQiLCJjaGlsZHJlbiIsIlN0cmluZyIsInVwZGF0ZUNvbnRlbnQiLCJzdWNSZXNldCIsImFkZFRvZGF5U2hhcmVPclZpZGVvVGltZXNVcGRhdGUiLCJCTVMiLCJnZXRLZXkiLCJpbmNsdWRlcyIsInN1Y1RpcCIsImluaXRUaXBWaWV3IiwiVElQIiwic3VjV2l0aGRyYXciLCJmdW5jX3JlQmFja09uZSIsInN1Y1JlbW92ZVNjcmV3IiwiYnRuX2NhcmQiLCJjYXJkQW1vdW50IiwiVGlwIiwiZm9ybWF0U3RyIiwiVW5pdmVyc2FsQ2FyZCIsInN1Y0JvcmUiLCJFdmVudCIsIkxldmVsX1Vuc2NyZXciLCJ1cHNldCIsInVwZGF0ZUJvcmVWaWV3IiwiYm9yZVRpbWVzIiwiYm9yZVZpZGVvSWNvbiIsImJvcmVTaGFyZUljb24iLCJ1cGRhdGVSZXN0YXJ0VmlldyIsImluaXRSZXN0YXJ0VmlldyIsInVwZGF0ZUJhY2tWaWV3IiwiY2hlaHVpVmlkZW9JY29uIiwiY2hlaHVpU2hhcmVJY29uIiwiYmFja1RpbWVzIiwic2F2ZVNlcnZlckRhdGEiLCJnZXRDb25maWciLCJmbGFnIiwidGhlbiIsIlNoYXJlVGlwIiwid2l0aGRyYXdCdG4iLCJzdG9wQWxsQWN0aW9ucyIsInNjYWxlIiwiZnVuY19jaGVja1JlQmFja09uZSIsInNjcmV3Qm94SW5maW5pdGUiLCJzY3Jld0JveE1hc2siLCJTY3Jld1RpcCIsInNjcmV3Qm94VGltZXMiLCJ1cGRhdGVTY3Jld0JveFZpZXciLCJzY3Jld0JveFRpbWVzQmciLCJ1cGRhdGVUaXBUaW1lc1ZpZXciLCJ0aXBUaW1lcyIsInRpcFZpZGVvSWNvbiIsInRpcFNoYXJlSWNvbiIsImJvcmVCdG4yIiwib25FbmFibGUiLCJvbiIsIktFWV9VUERBVEUiLCJVUERBVEVfSVNfVU5MT0NLX1RJUCIsInVwZGF0ZUlzVW5sb2NrVGlwIiwiVElQX0JUTl9BTklNIiwidGlwX2J0bl9hbmltIiwic3dpdGNoTW92ZTVTdGF0ZSIsInJlc3RhcnRBbnN3ZXIiLCJyZXN0YXJ0QW5zd2VyMiIsInNob3dIYW1tZXJCdG5WaWRlbyIsInNoYXJlU3VjIiwic2hhcmVGYWlsIiwidGltZUVuZF9hbnN3ZXJCdG4iLCJ0aW1lRW5kX2FkZFRpbWUiLCJib3JlX2JvcmUiLCJwYXVzZV9hbnN3ZXJCdG4iLCJpbml0Qm9yZVZpZXciLCJ0aXBTdWMiLCJnYW1lUmVzdGFydCIsInVwZGF0ZVRvZGF5U2hhcmVPclZpZGVvVGltZXMiLCJyZXdhcmRWaWRlbyIsImJ1YmJsZSIsInVubG9ja1ZpZGVvTG9jayIsIm9uRGlzYWJsZSIsIm9mZiIsImNsaWNrVGlwX3N1YyIsIlV0aWxzIiwicmFuZG9tTnVtIiwiY2xlYXJCdG4iLCJmdWxsU2NyZWVuQXR0YWNrQnRuIiwiaXNGaXJzdFNoYXJlZCIsInNoYXJlU3VjU3ViIiwiZ2V0UmVzZXRCeVNoYXJlVGltZXMiLCJnZXRUaXBTaGFyZVRpbWVzIiwiZ2V0Qm9yZUJ5U2hhcmVUaW1lcyIsImdldERlbGF5ZWRCeVNoYXJlVGltZXMiLCJoaWRlIiwiZXh0ZW5kVGltZSIsInJlc3RvcmVUaW1lIiwiaW5pdFNoYXJlVmlldyIsImluaXRTa2lwVmlldyIsImZvckVhY2giLCJjaGlsZHJlbkNvdW50IiwiaXMiLCJFUGxhdGZvcm0iLCJXRUIiLCJ1bmxvY2tQb3MiLCJhZGRCdG5Pbl8iLCJCdXR0b24iLCJhZGRDb21wb25lbnQiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiaW5pdEJhY2tWaWV3Iiwic2hvd1NoYXJlVmlldyIsInJlc3RhcnRWaWRlb0ljb24iLCJyZXN0YXJ0U2hhcmVJY29uIiwiTWF0aCIsImFicyIsIklTX1dJTiIsIktFWSIsInNraXBWaWRlbyIsIktFWV9FRkZFQ1QiLCJzaGFyZSIsIlNLSVAiLCJza2lwQnRuIiwibW92ZTUiLCJfX2RlY29yYXRlIiwiU3ByaXRlRnJhbWUiLCJMaW1pdFJlcGVhdCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsY0FBYyxHQUFHRixPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJSSxVQUFVLEdBQUdKLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlLLFdBQVcsR0FBR0wsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSU0sYUFBYSxHQUFHTixPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSU8sZ0JBQWdCLEdBQUdQLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJUSxhQUFhLEdBQUdSLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJUyxXQUFXLEdBQUdULE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlVLFlBQVksR0FBR1YsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSVcsWUFBWSxH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QUF5QkMsVUFBMUQsRUFBc0U7VUFDbEVTLEVBQUUsRUFBRSxLQUQ4RDtVQUVsRVIsRUFBRSxFQUFFdEYsWUFBWSxDQUFDa0UsSUFBYixDQUFrQnFCLFdBQWxCLENBQThCN0YsVUFBVSxDQUFDOEYsUUFBWCxDQUFvQkMsZ0JBQWxELENBRjhEO1VBR2xFQyxJQUFJLEVBQUUxRixZQUFZLENBQUNrRSxJQUFiLENBQWtCcUIsV0FBbEIsQ0FBOEI3RixVQUFVLENBQUM4RixRQUFYLENBQW9CRyxZQUFsRCxDQUg0RDtVQUlsRUksSUFBSSxFQUFFMUYsb0JBQW9CLFdBQXBCLENBQTZCMkYsR0FBN0IsQ0FBaUMxRixrQkFBa0IsV0FBbEIsQ0FBMkIyRixZQUE1RDtRQUo0RCxDQUF0RTtNQU1IO0lBQ0osQ0FWRDtFQVdILENBWkQ7O0VBYUEyTCxVQUFVLENBQUMsQ0FBQzlRLENBQUMsQ0FBQyxDQUFDSixFQUFFLENBQUNtUixXQUFKLENBQUQsQ0FBRixDQUFELEVBQXdCM1EsQ0FBQyxDQUFDZ0IsU0FBMUIsRUFBcUMsWUFBckMsRUFBbUQsS0FBSyxDQUF4RCxDQUFWOztFQUNBMFAsVUFBVSxDQUFDLENBQUMzUixZQUFZLENBQUM2UixXQUFiLENBQXlCLENBQXpCLENBQUQsQ0FBRCxFQUFnQzVRLENBQUMsQ0FBQ2dCLFNBQWxDLEVBQTZDLFNBQTdDLEVBQXdELElBQXhELENBQVY7O0VBQ0EsT0FBTzBQLFVBQVUsQ0FBQyxDQUFDaFIsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQS90Q08sQ0ErdENMN0IsT0FBTyxXQS90Q0YsQ0FBUjs7QUFndUNBMFMsT0FBTyxXQUFQLEdBQWtCL1EsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRiYXNlVUkgPSByZXF1aXJlKFwiLi9CYXNlVUlcIik7XG52YXIgJGV2ZW50Q29uc3QgPSByZXF1aXJlKFwiLi9FdmVudENvbnN0XCIpO1xudmFyICRwbGF0Zm9ybUNvbnN0ID0gcmVxdWlyZShcIi4vUGxhdGZvcm1Db25zdFwiKTtcbnZhciAkcG9wdXBDb25zdCA9IHJlcXVpcmUoXCIuL1BvcHVwQ29uc3RcIik7XG52YXIgJHVzZXJDb25zdCA9IHJlcXVpcmUoXCIuL1VzZXJDb25zdFwiKTtcbnZhciAkYm1zTWFuYWdlciA9IHJlcXVpcmUoXCIuL0Jtc01hbmFnZXJcIik7XG52YXIgJGV2ZW50TWFuYWdlciA9IHJlcXVpcmUoXCIuL0V2ZW50TWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHRpcE1hbmFnZXIgPSByZXF1aXJlKFwiLi9UaXBNYW5hZ2VyXCIpO1xudmFyICR1c2VyTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VzZXJNYW5hZ2VyXCIpO1xudmFyICRsaW1pdFJlcGVhdCA9IHJlcXVpcmUoXCIuL0xpbWl0UmVwZWF0XCIpO1xudmFyICRtZW1vcnlTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi9NZW1vcnlTdG9yYWdlQ29uc3RcIik7XG52YXIgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTWVtb3J5U3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJHNodVNodUNvbnN0ID0gcmVxdWlyZShcIi4vU2h1U2h1Q29uc3RcIik7XG52YXIgJGxvY2FsU3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICRsb2NhbFN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZUNvbnN0XCIpO1xudmFyICRsYW5ndWFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9MYW5ndWFnZU1hbmFnZXJcIik7XG52YXIgJHV0aWxzID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG52YXIgTSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgUCA9IE0uY2NjbGFzcztcbnZhciBUID0gTS5wcm9wZXJ0eTtcbnZhciBBID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUubGV2ZWwgPSBudWxsO1xuICAgICAgICBlLmlzVW5sb2NrVGlwID0gITE7XG4gICAgICAgIGUudmlkZW9PckFkZCA9IFtdO1xuICAgICAgICBlLmJ0bjFUaW1lID0gMDtcbiAgICAgICAgZS5pc1Nob3dSZXZpdmUgPSAhMTtcbiAgICAgICAgZS5yZW1vdmVTdGF0ZSA9ICExO1xuICAgICAgICBlLm1vZGVyYXRlQnRuVGltZSA9IDMwO1xuICAgICAgICBlLmlzQnViYmxlID0gITE7XG4gICAgICAgIGUuaXNBbmltID0gITE7XG4gICAgICAgIGUuYWRkTm9kZXMgPSBbXTtcbiAgICAgICAgZS5zdGFydFN0YXRlID0gITE7XG4gICAgICAgIGUuaXNTaGFyZSA9ICExO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmRpY3QubGV2ZWw7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJrZXlCdG5cIiwgdGhpcy5jbGlja0tleSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJ0aXBCdG5cIiwgdGhpcy5jbGlja1RpcCwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJyZW1vdmVTY3Jld0J0blwiLCB0aGlzLnJlbW92ZVNjcmV3QnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInJlbW92ZUJ0blwiLCB0aGlzLnJlbW92ZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJtb3ZlNUJ0blwiLCB0aGlzLm1vdmU1QnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInJlc2V0QnRuXCIsIHRoaXMucmVzZXRCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwidXBzZXRCdG5cIiwgdGhpcy51cHNldEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJib3JlQnRuXCIsIHRoaXMuYm9yZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJ3aXRoZHJhd0J0blwiLCB0aGlzLmNoZWh1aUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzY3Jld0JveEJ0blwiLCB0aGlzLnNjcmV3Qm94QnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInNraXBCdG4yXCIsIHRoaXMuY2xpY2tTa2lwLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInNraXBCdG4zXCIsIHRoaXMuY2xpY2tTa2lwLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImhpZGVUZXh0XCIsIHRoaXMuaGlkZVRleHQsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwidGlwQnRuNFwiLCB0aGlzLmNsaWNrVGlwLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInNraXBCdG40XCIsIHRoaXMuY2xpY2tTa2lwLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInRpcEJ0bjRcIiwgdGhpcy5jbGlja1RpcCwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJza2lwQnRuNFwiLCB0aGlzLmNsaWNrU2tpcCwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJ0b3RhbFNraXBCdG5cIiwgdGhpcy5jbGlja1NraXAsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiaGFtbWVyQnRuXCIsIHRoaXMuaGFtbWVyQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInNoYWtlQnRuXCIsIHRoaXMuc2hha2VCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwidW5kb0J0blwiLCB0aGlzLnVuZG9CdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwid2luZ0J0blwiLCB0aGlzLndpbmdCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiaGlnaGxpZ2h0QnRuXCIsIHRoaXMuaGlnaGxpZ2h0QnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIjRUaXBCdG5cIiwgdGhpcy5fNFRpcEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCI1VGlwQnRuXCIsIHRoaXMuXzVUaXBCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiNVNraXBCdG5cIiwgdGhpcy5fNVNraXBCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiN1RpcEJ0blwiLCB0aGlzLmNsaWNrVGlwLmJpbmQodGhpcywgXCIwMjFcIiksIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiN1NraXBCdG5cIiwgdGhpcy5jbGlja1NraXAuYmluZCh0aGlzLCBcIjAyMlwiKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCI4VGlwQnRuXCIsIHRoaXMuY2xpY2tUaXAuYmluZCh0aGlzLCBcIjAyM1wiKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCI4U2tpcEJ0blwiLCB0aGlzLmNsaWNrU2tpcC5iaW5kKHRoaXMsIFwiMDI0XCIpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIjg1VGlwQnRuXCIsIHRoaXMuY2xpY2tUaXAuYmluZCh0aGlzLCBcIjAyNVwiKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCI5U2tpcEJ0blwiLCB0aGlzLmNsaWNrU2tpcC5iaW5kKHRoaXMsIFwiMDI2XCIpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIjEwVGlwQnRuXCIsIHRoaXMuY2xpY2tUaXAuYmluZCh0aGlzLCBcIjAyN1wiKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCIxMFNraXBCdG5cIiwgdGhpcy5jbGlja1NraXAuYmluZCh0aGlzLCBcIjAyOFwiKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCIxMVRpcEJ0blwiLCB0aGlzLmNsaWNrVGlwLmJpbmQodGhpcywgXCIwMjlcIiksIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiMTFTa2lwQnRuXCIsIHRoaXMuY2xpY2tTa2lwLmJpbmQodGhpcywgXCIwMzBcIiksIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiMTJUaXBCdG5cIiwgdGhpcy5jbGlja1RpcC5iaW5kKHRoaXMsIFwiMDMxXCIpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIjEyU2tpcEJ0blwiLCB0aGlzLmNsaWNrU2tpcC5iaW5kKHRoaXMsIFwiMDMyXCIpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInJvdGF0ZUJ0blwiLCB0aGlzLnJvdGF0ZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCIxM1NraXBCdG5cIiwgdGhpcy5jbGlja1NraXAuYmluZCh0aGlzLCBcIjAzNFwiKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJtb2RlcmF0ZUJ0blwiLCB0aGlzLm1vZGVyYXRlQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIjE0U2tpcEJ0blwiLCB0aGlzLmNsaWNrU2tpcC5iaW5kKHRoaXMsIFwiMDM2XCIpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImFkZFN0ZXBCdG5cIiwgdGhpcy5hZGRTdGVwQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIjE1U2tpcEJ0blwiLCB0aGlzLmNsaWNrU2tpcC5iaW5kKHRoaXMsIFwiMDM4XCIpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInVwZGF0ZUNhckJ0blwiLCB0aGlzLnVwZGF0ZUNhckJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJyZW1vdmVDYXJCdG5cIiwgdGhpcy5yZW1vdmVDYXJCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwidW5sb2NrUG9zQnRuXCIsIHRoaXMudW5sb2NrUG9zQnRuLCB0aGlzKTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJjdXJyZW50U2NlbmVfXCIsIDIpO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3Nsb3dEb3duVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnRuMVRpbWUgLT0gMTtcbiAgICAgICAgaWYgKHRoaXMuYnRuMVRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5idG4xVGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW5jX3Nsb3dEb3duVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNsb3dEb3duVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5YeP6YCfXCI7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc2xvd0Rvd25CdG5JY29uLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc2xvd0Rvd25CdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuaW5pdFNsb3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpY3Quc2xvd0Rvd25UZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5idG4xVGltZSArIFwic1wiO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VjUHJvcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmZ1bmNfdXBkYXRlQ2FyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uZnVuY19oYXNMb2NrUGFya2luZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmxldmVsQ29udGVudC5fY29tcG9uZW50c1swXS5mdW5jX3Jldml2ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICAgICAgcXVldWU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCksXG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxldmVsQ29udGVudC5fY29tcG9uZW50c1swXS5mdW5fdW5sb2NrTmV3UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxldmVsQ29udGVudC5fY29tcG9uZW50c1swXS5mdW5jX2hhc0xvY2tQYXJraW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmRpY3QudW5sb2NrUG9zQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMC4xKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpLFxuICAgICAgICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uZnVuY19pdGVtMUNCKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmZ1bmNfaXRlbTVDQigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgIHF1ZXVlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpLFxuICAgICAgICAgICAgaWQ6IHQsXG4gICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaXNTaG93UmV2aXZlX2Z1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNTaG93UmV2aXZlID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX3Jldml2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvd1Jldml2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dSZXZpdmUgPSAhMDtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlQWxsKCk7XG4gICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0Lmhhc0xvY2tQYXJraW5nLCAhMSk7XG4gICAgICAgICAgICB2YXIgdCA9IHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uZnVuY19oYXNMb2NrUGFya2luZygpO1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5wcm9wSW5kZXgsIDMpO1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5oYXNMb2NrUGFya2luZywgdCk7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlByb3ApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pc1JlbW92ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY29udGVudC5vcGFjaXR5ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTdGF0ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImNvbGxlY3RSb290XCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZS5jYW5Vc2VQcm9wcyA9ICEwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNvbnRlbnQub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU3RhdGUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTdGF0ZSAmJiAodGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImNvbGxlY3RSb290XCIpLmFjdGl2ZSA9ICEwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlQ2FyQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVTdGF0ZSB8fCAod2luZG93LmxldmVsQ29udGVudCAmJiB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmlzRmFpbCkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnByb3BJbmRleCwgMCk7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlByb3ApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZW1vdmVDYXJCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlU3RhdGUgfHwgKHdpbmRvdy5sZXZlbENvbnRlbnQgJiYgd2luZG93LmxldmVsQ29udGVudC5fY29tcG9uZW50c1swXS5pc0ZhaWwpKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5wcm9wSW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5yZW1vdmVDYXJCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcywgbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5zdWMoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LklzTm9GaXJzdFByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuSXNOb0ZpcnN0UHJvcCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmFsbFBlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uYWxsUGVyc29uQW1vdW50MjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5GaXJzdF9Qcm9ncmVzcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChvIC0gcikgLyBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZnVuY19zbG93RG93blN1YyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxldmVsQ29udGVudC5fY29tcG9uZW50c1swXS5mdW5jX3Nsb3dEb3duKCk7XG4gICAgICAgIHRoaXMuYnRuMVRpbWUgPSB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLl9zbG93VGltZTtcbiAgICAgICAgdGhpcy5kaWN0LnNsb3dEb3duVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uX3Nsb3dUaW1lO1xuICAgICAgICB0aGlzLmRpY3Quc2xvd0Rvd25CdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5kaWN0LnNsb3dEb3duQnRuSWNvbi5vcGFjaXR5ID0gMTUwO1xuICAgICAgICB0aGlzLmRpY3Quc2xvd0Rvd25UZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5idG4xVGltZSArIFwic1wiO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5mdW5jX3Nsb3dEb3duVGltZXIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZnVuY19zbG93RG93blRpbWVyLCAxKTtcbiAgICAgICAgdGhpcy5pbml0U2xvdygpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2xvd0Rvd25CdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYnRuMVRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIuato+WcqOWAkuiuoeaXtlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmVtb3ZlU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cubGV2ZWxDb250ZW50ICYmIHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uaXNGYWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwibGV2ZWxDb250ZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5zbG93RG93blJvb3QuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5TbG93RG93bikgfHwgMDtcbiAgICAgICAgICAgICAgICBlIC09IDE7XG4gICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuU2xvd0Rvd24sIGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZnVuY19zbG93RG93blN1YygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImZ1bmNfc2xvd0Rvd25TdWNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnByb3BJbmRleCwgMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kaWN0LnNsb3dEb3duQnRuLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93UmV3YXJkQWRzKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcykgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLnRvZGF5U2hhcmVPclZpZGVvVGltZXMsIG4gKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc3VjKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Jc05vRmlyc3RQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LklzTm9GaXJzdFByb3AsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gd2luZG93LmxldmVsQ29udGVudC5fY29tcG9uZW50c1swXS5hbGxQZXJzb25BbW91bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmFsbFBlcnNvbkFtb3VudDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuRmlyc3RfUHJvZ3Jlc3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAobyAtIHIpIC8gbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuUHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNvcnRCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKCEodGhpcy5yZW1vdmVTdGF0ZSB8fCAod2luZG93LmxldmVsQ29udGVudCAmJiB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmlzRmFpbCkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaWN0LnNvcnRBbW91bnRSb290LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuU29ydEFtb3VudCkgfHwgMDtcbiAgICAgICAgICAgICAgICBlIC09IDE7XG4gICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuU29ydEFtb3VudCwgZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U29ydCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uZnVuY19zb3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnByb3BJbmRleCwgMik7XG4gICAgICAgICAgICBpZiAodGhpcy5kaWN0LnNvcnRCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcywgbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5zdWMoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LklzTm9GaXJzdFByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuSXNOb0ZpcnN0UHJvcCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmFsbFBlcnNvbkFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uYWxsUGVyc29uQW1vdW50MjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5GaXJzdF9Qcm9ncmVzcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChvIC0gcikgLyBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZjI5MDg2X2l0ZW0xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnByb3BJbmRleCwgNSk7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuUHJvcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mMjkwODZfaXRlbTUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucHJvcEluZGV4LCA2KTtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVubG9ja1Bvc0J0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5kaWN0LnVubG9ja1Bvc1Jvb3QuYWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgZSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlVubG9ja1BvcykgfHwgMDtcbiAgICAgICAgICAgIGUgLT0gMTtcbiAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlVubG9ja1BvcywgZSk7XG4gICAgICAgICAgICB0aGlzLmluaXRVbmxvY2tQb3MoKTtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIHdpbmRvdy5sZXZlbENvbnRlbnQuX2NvbXBvbmVudHNbMF0uZnVuX3VubG9ja05ld1BvcygpO1xuICAgICAgICB9XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKDAgPT0gZSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcykgfHwgMDtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzLCBuICsgMSk7XG4gICAgICAgICAgICAgICAgdC5zdWMoNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VjID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwic3VjUHJvcFwiLCB0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJvdGF0ZUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICgwID09IGUpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJyb3RhdGVCdG5cIik7XG4gICAgICAgICAgICAgICAgdC52aWRlb1JlcG9ydChcIjAzM1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRTdGVwQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKDAgPT0gZSkge1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImFkZFN0ZXBCdG5cIik7XG4gICAgICAgICAgICAgICAgdC52aWRlb1JlcG9ydChcIjAzN1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5tb2RlcmF0ZUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5kaWN0Lm1vZGVyYXRlQnRuLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm1vZGVyYXRlQnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICB0LmRpY3QubW9kZXJhdGVCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdC52aWRlb1JlcG9ydChcIjAzNVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdC5kaWN0Lm1vZGVyYXRlQnRuVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQubW9kZXJhdGVCdG5UaW1lICsgXCJzXCI7XG4gICAgICAgICAgICAgICAgICAgIHQuc2NoZWR1bGUodC5tb2RlcmF0ZUJ0bl8sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5tb2RlcmF0ZUJ0bl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW9kZXJhdGVCdG5UaW1lIC09IDE7XG4gICAgICAgIGlmICh0aGlzLm1vZGVyYXRlQnRuVGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVyYXRlQnRuVGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5tb2RlcmF0ZUJ0bl8pO1xuICAgICAgICAgICAgdGhpcy5kaWN0Lm1vZGVyYXRlQnRuVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5YeP6YCfXCI7XG4gICAgICAgICAgICB0aGlzLmRpY3QubW9kZXJhdGVCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHJldHVybiB2b2lkICh0aGlzLm1vZGVyYXRlQnRuVGltZSA9IDMwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpY3QubW9kZXJhdGVCdG5UZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5tb2RlcmF0ZUJ0blRpbWUgKyBcInNcIjtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLl80VGlwQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsaWNrVGlwKFwiMDE0XCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuXzVUaXBCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tUaXAoXCIwMTZcIik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5fNVNraXBCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tTa2lwKFwiMDE3XCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGFtbWVyQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmRpY3QuaGFtbWVyQnRuLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuYWN0aXZlKSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFtbWVyQnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJoYW1tZXJCdG5cIik7XG4gICAgICAgICAgICAgICAgICAgIHQuZGljdC5oYW1tZXJCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgdC52aWRlb1JlcG9ydChcIjAxM1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudmlkZW9SZXBvcnQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICBpZDogdCxcbiAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYWtlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwic2hha2VBbW91bnRcIik7XG4gICAgICAgIGlmICh0aGlzLmRpY3Quc2hha2VCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUpIHtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIGlmICgwID09IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdC52aWRlb1JlcG9ydChcIjAxNVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBlICsgMztcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwic2hha2VBbW91bnRcIiwgcik7XG4gICAgICAgICAgICAgICAgICAgIHQuZGljdC5zaGFrZUFtb3VudC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyhyIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5kaWN0LnNoYWtlQnRuLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmRpY3Quc2hha2VBbW91bnQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpY3Quc2hha2VBbW91bnQuYWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGUgLSAxO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwic2hha2VBbW91bnRcIiwgbik7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc2hha2VBbW91bnQuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcobiAtIDEpO1xuICAgICAgICAgICAgaWYgKG4gPD0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zaGFrZUJ0bi5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zaGFrZUFtb3VudC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInNoYWtlQnRuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwic2hha2VCdG5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVuZG9CdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93UmV3YXJkQWRzKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwidW5kb0J0blwiKTtcbiAgICAgICAgICAgICAgICB0LnZpZGVvUmVwb3J0KFwiMDE4XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLndpbmdCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93UmV3YXJkQWRzKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwid2luZ0J0blwiKTtcbiAgICAgICAgICAgICAgICB0LnZpZGVvUmVwb3J0KFwiMDIwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhpZ2hsaWdodEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICgwID09IGUpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJoaWdobGlnaHRCdG5cIik7XG4gICAgICAgICAgICAgICAgdC52aWRlb1JlcG9ydChcIjAxOVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXNldEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJpc1ZpZGVvXCIpKSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcykgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcywgbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdC5zdWNSZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5wcm9wSW5kZXgsIDApO1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VjUmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgIGlkOiBcIjAwMlwiLFxuICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgIH0pO1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJvblJlc3RhcnRCdG5cIik7XG4gICAgICAgIHRoaXMuYWRkVG9kYXlTaGFyZU9yVmlkZW9UaW1lc1VwZGF0ZSgpO1xuICAgICAgICB2YXIgdCA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJpc0l0ZW1zXCIpO1xuICAgICAgICB2YXIgZSA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJpdGVtTnVtXCIpO1xuICAgICAgICB2YXIgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcIm5hdGlvblwiKTtcbiAgICAgICAgaWYgKHQuaW5jbHVkZXMobikpIHtcbiAgICAgICAgICAgIHZhciByID0gZVswXTtcbiAgICAgICAgICAgIGlmIChyID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBvID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwicmVzdGFydFRpbWVzXCIpIHx8IDA7XG4gICAgICAgICAgICAgICAgbyArPSByIC0gMTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJyZXN0YXJ0VGltZXNcIiwgbyk7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwidXBkYXRlUmVzdGFydFZpZXdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnN1Y1RpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVGVtcERhdGEuaXNVbmxvY2tUaXAsICEwKTtcbiAgICAgICAgdGhpcy5pc1VubG9ja1RpcCA9ICEwO1xuICAgICAgICB0aGlzLmluaXRUaXBWaWV3KCk7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDA2XCIpO1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlRJUCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdWNXaXRoZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxldmVsQ29udGVudC5fY29tcG9uZW50c1swXS5mdW5jX3JlQmFja09uZSgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVtb3ZlU2NyZXdCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKDAgPT0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcIlVuc2NyZXdUaWNrZXRcIikgJiYgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJpc1ZpZGVvXCIpKSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcykgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudG9kYXlTaGFyZU9yVmlkZW9UaW1lcywgbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdC5zdWNSZW1vdmVTY3JldygpO1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIwNzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpY3QuYnRuX2NhcmQuYWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgZSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhcmRBbW91bnQpIHx8IDA7XG4gICAgICAgICAgICBpZiAoZSA8IDEpIHtcbiAgICAgICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdygkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFwi5LiH6IO95Y2h5LiN6Laz77yBXCIpKTtcbiAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlVuaXZlcnNhbENhcmQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50LCBlIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNSZW1vdmVTY3JldygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwiaXNWaWRlb1wiKSkge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnRvZGF5U2hhcmVPclZpZGVvVGltZXMpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzLCBuICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc3VjUmVtb3ZlU2NyZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJyZW1vdmVTY3Jld0J0blwiKTtcbiAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnByb3BJbmRleCwgMyk7XG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VjQm9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuYm9yZUJ0bik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdWNSZW1vdmVTY3JldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwic2NyZXdCb3hCdG5cIik7XG4gICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKTtcbiAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSk7XG4gICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuTGV2ZWxfVW5zY3Jldywge1xuICAgICAgICAgICAgbHY6IHQsXG4gICAgICAgICAgICBtb2RlOiBlLFxuICAgICAgICAgICAgcXVldWU6IG5cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRUb2RheVNoYXJlT3JWaWRlb1RpbWVzVXBkYXRlID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUudXBzZXRCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgaWYgKDAgPT0gdCkge1xuICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LnVwc2V0KTtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIjAwNlwiLFxuICAgICAgICAgICAgICAgICAgICBsdjogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlQm9yZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKTtcbiAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5ib3JlVGltZXMpIHx8IDA7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYm9yZVZpZGVvSWNvbi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5ib3JlU2hhcmVJY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJvcmVUaW1lcy5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC5ib3JlVGltZXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5ib3JlVmlkZW9JY29uLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJvcmVTaGFyZUljb24uYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYm9yZVRpbWVzLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJvcmVUaW1lcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVSZXN0YXJ0VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0UmVzdGFydFZpZXcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZUJhY2tWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSk7XG4gICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwiYmFja1RpbWVzXCIpIHx8IDA7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY2hlaHVpVmlkZW9JY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNoZWh1aVNoYXJlSWNvbi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5iYWNrVGltZXMuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYmFja1RpbWVzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY2hlaHVpVmlkZW9JY29uLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNoZWh1aVNoYXJlSWNvbi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5iYWNrVGltZXMuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYmFja1RpbWVzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmJvcmVCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZGljdC5ib3JlVGltZXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLmJvcmVUaW1lcykgfHwgMDtcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LmJvcmVCdG4pO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgIGlkOiBcIjAwOFwiLFxuICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlIC0gMSA8IDApIHtcbiAgICAgICAgICAgICAgICBlID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLmJvcmVUaW1lcywgZSAtIDEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVCb3JlVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgJGJtc01hbmFnZXIuQk1TLnNhdmVTZXJ2ZXJEYXRhKFxuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZmxhZyxcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoXCJnb29nbGVJRFwiKSB8fCAkdXNlck1hbmFnZXIuVXNlci5nZXQoXCJ1dWlkXCIpLFxuICAgICAgICAgICAgICAgICR1c2VyQ29uc3QuVXNlckRhdGEuYm9yZVRpbWVzLFxuICAgICAgICAgICAgICAgIFN0cmluZyhlIC0gMSlcbiAgICAgICAgICAgICkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkv53lrZhib3JlVGltZXPmiJDlip9cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaWN0LmJvcmVTaGFyZUljb24uYWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIhuS6q1wiKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiY2xpY2tTaGFyZVwiLCAhMCk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcInNoYXJlUmV3YXJkXCIsIFwiYm9yZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB2b2lkICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuU2hhcmVUaXApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImlzVmlkZW9cIikpIHtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzLCBuICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHQudXBkYXRlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0LnN1Y0JvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMDA4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucHJvcEluZGV4LCA0KTtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuUHJvcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWh1aUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmRpY3Qud2l0aGRyYXdCdG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5kaWN0LndpdGhkcmF3QnRuLnNjYWxlID0gMTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiY2hlaHVpQnRuX2FuaW1cIik7XG4gICAgICAgIGlmICh3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmZ1bmNfY2hlY2tSZUJhY2tPbmUpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cubGV2ZWxDb250ZW50Ll9jb21wb25lbnRzWzBdLmZ1bmNfY2hlY2tSZUJhY2tPbmUoKSkge1xuICAgICAgICAgICAgICAgIGlmICgkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImlzVmlkZW9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93UmV3YXJkQWRzKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheVNoYXJlT3JWaWRlb1RpbWVzKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLnRvZGF5U2hhcmVPclZpZGVvVGltZXMsIG4gKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnVwZGF0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnN1Y1dpdGhkcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QucmV3YXJkX2J0biwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIwNzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5wcm9wSW5kZXgsIDIpO1xuICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuUHJvcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi5b2T5YmN5peg5rOV5pKk5ZueXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zY3Jld0JveEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNjcmV3Qm94SW5maW5pdGUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaXoOmZkOasoeaVsFwiKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInNjcmV3Qm94QnRuXCIpO1xuICAgICAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpO1xuICAgICAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSk7XG4gICAgICAgICAgICB2YXIgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCk7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9VbnNjcmV3LCB7XG4gICAgICAgICAgICAgICAgbHY6IHQsXG4gICAgICAgICAgICAgICAgbW9kZTogZSxcbiAgICAgICAgICAgICAgICBxdWV1ZTogblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAodGhpcy5kaWN0LnNjcmV3Qm94QnRuLmFjdGl2ZSA9ICExKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaWN0LnNjcmV3Qm94TWFzay5hY3RpdmUpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuU2NyZXdUaXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHIgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5zY3Jld0JveFRpbWVzKSB8fCAwO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuc2NyZXdCb3hUaW1lcywgciAtIDEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTY3Jld0JveFZpZXcoKTtcbiAgICAgICAgICAgICRibXNNYW5hZ2VyLkJNUy5zYXZlU2VydmVyRGF0YShcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmZsYWcsXG4gICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwiZ29vZ2xlSURcIikgfHwgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwidXVpZFwiKSxcbiAgICAgICAgICAgICAgICAkdXNlckNvbnN0LlVzZXJEYXRhLnNjcmV3Qm94VGltZXMsXG4gICAgICAgICAgICAgICAgU3RyaW5nKHIgLSAxKVxuICAgICAgICAgICAgKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS/neWtmHNjcmV3Qm94VGltZXPmiJDlip9cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcInNjcmV3Qm94QnRuXCIpO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNjcmV3Qm94QnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCk7XG4gICAgICAgICAgICBlID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpO1xuICAgICAgICAgICAgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCk7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9VbnNjcmV3LCB7XG4gICAgICAgICAgICAgICAgbHY6IHQsXG4gICAgICAgICAgICAgICAgbW9kZTogZSxcbiAgICAgICAgICAgICAgICBxdWV1ZTogblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVNjcmV3Qm94VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNjcmV3Qm94SW5maW5pdGUpKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc2NyZXdCb3hUaW1lc0JnLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNjcmV3Qm94TWFzay5hY3RpdmUgPSAhMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlVGlwVGltZXNWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnRpcFRpbWVzKSB8fCAwO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpcFZpZGVvSWNvbi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuZGljdC50aXBTaGFyZUljb24uYWN0aXZlID0gITE7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGltZXMuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGltZXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC50aXBWaWRlb0ljb24uYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwU2hhcmVJY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpcFRpbWVzLmFjdGl2ZSA9ICExO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZW1vdmVCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi566x5a2QXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYm9yZUJ0bjIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucHJvcEluZGV4LCA0KTtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKCRldmVudENvbnN0LmRlZmF1bHQuS0VZX1VQREFURSwgdGhpcy5pbml0VmlldywgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSVNfVU5MT0NLX1RJUCwgdGhpcy51cGRhdGVJc1VubG9ja1RpcCwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5USVBfQlROX0FOSU0sIHRoaXMudGlwX2J0bl9hbmltLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vbigkZXZlbnRDb25zdC5kZWZhdWx0LnN3aXRjaE1vdmU1U3RhdGUsIHRoaXMuc3dpdGNoTW92ZTVTdGF0ZSwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5yZXN0YXJ0QW5zd2VyLCB0aGlzLnJlc3RhcnRBbnN3ZXIsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKCRldmVudENvbnN0LmRlZmF1bHQucmVzdGFydEFuc3dlcjIsIHRoaXMucmVzdGFydEFuc3dlcjIsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiYm9yZUJ0blwiLCB0aGlzLmJvcmVCdG4yLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInNob3dIYW1tZXJCdG5WaWRlb1wiLCB0aGlzLnNob3dIYW1tZXJCdG5WaWRlbywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJzaGFyZVN1Y1wiLCB0aGlzLnNoYXJlU3VjLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInNoYXJlRmFpbFwiLCB0aGlzLnNoYXJlRmFpbCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJ0aW1lRW5kX2Fuc3dlckJ0blwiLCB0aGlzLnRpbWVFbmRfYW5zd2VyQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInRpbWVFbmRfYWRkVGltZVwiLCB0aGlzLnRpbWVFbmRfYWRkVGltZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJib3JlX2JvcmVcIiwgdGhpcy5ib3JlX2JvcmUsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwicGF1c2VfYW5zd2VyQnRuXCIsIHRoaXMucGF1c2VfYW5zd2VyQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInVwZGF0ZVJlc3RhcnRWaWV3XCIsIHRoaXMudXBkYXRlUmVzdGFydFZpZXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwidXBkYXRlQmFja1ZpZXdcIiwgdGhpcy51cGRhdGVCYWNrVmlldywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJ1cGRhdGVCb3JlVmlld1wiLCB0aGlzLmluaXRCb3JlVmlldywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJ1cGRhdGVTY3Jld0JveFZpZXdcIiwgdGhpcy51cGRhdGVTY3Jld0JveFZpZXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwidXBkYXRlVGlwVGltZXNWaWV3XCIsIHRoaXMuaW5pdFRpcFZpZXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwidGlwU3VjXCIsIHRoaXMudGlwU3VjLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImdhbWVSZXN0YXJ0XCIsIHRoaXMuZ2FtZVJlc3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwidXBkYXRlVG9kYXlTaGFyZU9yVmlkZW9UaW1lc1wiLCB0aGlzLnVwZGF0ZVRvZGF5U2hhcmVPclZpZGVvVGltZXMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic3VjUmVzZXRcIiwgdGhpcy5zdWNSZXNldCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJzdWNUaXBcIiwgdGhpcy5zdWNUaXAsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic3VjV2l0aGRyYXdcIiwgdGhpcy5zdWNXaXRoZHJhdywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJzdWNSZW1vdmVTY3Jld1wiLCB0aGlzLnN1Y1JlbW92ZVNjcmV3LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInN1Y0JvcmVcIiwgdGhpcy5zdWNCb3JlLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInVwZGF0ZUNvbnRlbnRcIiwgdGhpcy51cGRhdGVDb250ZW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInN1Y1Byb3BcIiwgdGhpcy5zdWNQcm9wLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImxldmVsRmFpbEV2ZW50XCIsIHRoaXMuZnVuY19yZXZpdmUsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwibmVlZExpbWl0Tm9IYW5kbGVcIiwgdGhpcy5pc1JlbW92ZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJ1cGRhdGVTb3J0XCIsIHRoaXMuaW5pdFNvcnQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwidXBkYXRlU2xvd1wiLCB0aGlzLmluaXRTbG93LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInVwZGF0ZVVubG9ja1Bvc1wiLCB0aGlzLmluaXRVbmxvY2tQb3MsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiaXNTaG93UmV2aXZlXCIsIHRoaXMuaXNTaG93UmV2aXZlX2Z1bmMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwicmV3YXJkVmlkZW9cIiwgdGhpcy5yZXdhcmRWaWRlbywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJnYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG5cIiwgdGhpcy5nYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiZjI5MDg2X3dhcm5pbmdJbmRleFwiLCB0aGlzLmJ1YmJsZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJ1bmxvY2tWaWRlb0xvY2tcIiwgdGhpcy51bmxvY2tWaWRlb0xvY2ssIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiZjI5MDg2X2l0ZW0xXCIsIHRoaXMuZjI5MDg2X2l0ZW0xLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImYyOTA4Nl9pdGVtNVwiLCB0aGlzLmYyOTA4Nl9pdGVtNSwgdGhpcyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQuS0VZX1VQREFURSwgdGhpcy5pbml0VmlldywgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQuVVBEQVRFX0lTX1VOTE9DS19USVAsIHRoaXMudXBkYXRlSXNVbmxvY2tUaXAsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LlRJUF9CVE5fQU5JTSwgdGhpcy50aXBfYnRuX2FuaW0sIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LnN3aXRjaE1vdmU1U3RhdGUsIHRoaXMuc3dpdGNoTW92ZTVTdGF0ZSwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQucmVzdGFydEFuc3dlciwgdGhpcy5yZXN0YXJ0QW5zd2VyLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vZmYoJGV2ZW50Q29uc3QuZGVmYXVsdC5yZXN0YXJ0QW5zd2VyMiwgdGhpcy5yZXN0YXJ0QW5zd2VyMiwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiY2xpY2tUaXBcIiwgdGhpcy5jbGlja1RpcF9zdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImJvcmVCdG5cIiwgdGhpcy5ib3JlQnRuMiwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwic2hvd0hhbW1lckJ0blZpZGVvXCIsIHRoaXMuc2hvd0hhbW1lckJ0blZpZGVvLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJzaGFyZVN1Y1wiLCB0aGlzLnNoYXJlU3VjLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJzaGFyZUZhaWxcIiwgdGhpcy5zaGFyZUZhaWwsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInRpbWVFbmRfYW5zd2VyQnRuXCIsIHRoaXMudGltZUVuZF9hbnN3ZXJCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInRpbWVFbmRfYWRkVGltZVwiLCB0aGlzLnRpbWVFbmRfYWRkVGltZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiYm9yZV9ib3JlXCIsIHRoaXMuYm9yZV9ib3JlLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJwYXVzZV9hbnN3ZXJCdG5cIiwgdGhpcy5wYXVzZV9hbnN3ZXJCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZVJlc3RhcnRWaWV3XCIsIHRoaXMudXBkYXRlUmVzdGFydFZpZXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZUJhY2tWaWV3XCIsIHRoaXMudXBkYXRlQmFja1ZpZXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZUJvcmVWaWV3XCIsIHRoaXMudXBkYXRlQm9yZVZpZXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZVNjcmV3Qm94Vmlld1wiLCB0aGlzLnVwZGF0ZVNjcmV3Qm94VmlldywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwidXBkYXRlVGlwVGltZXNWaWV3XCIsIHRoaXMudXBkYXRlVGlwVGltZXNWaWV3LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJ0aXBTdWNcIiwgdGhpcy50aXBTdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImdhbWVSZXN0YXJ0XCIsIHRoaXMuZ2FtZVJlc3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZVRvZGF5U2hhcmVPclZpZGVvVGltZXNcIiwgdGhpcy51cGRhdGVUb2RheVNoYXJlT3JWaWRlb1RpbWVzLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJzdWNSZXNldFwiLCB0aGlzLnN1Y1Jlc2V0LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJzdWNUaXBcIiwgdGhpcy5zdWNUaXAsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInN1Y1dpdGhkcmF3XCIsIHRoaXMuc3VjV2l0aGRyYXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInN1Y1JlbW92ZVNjcmV3XCIsIHRoaXMuc3VjUmVtb3ZlU2NyZXcsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZUNvbnRlbnRcIiwgdGhpcy51cGRhdGVDb250ZW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJzdWNQcm9wXCIsIHRoaXMuc3VjUHJvcCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwibGV2ZWxGYWlsRXZlbnRcIiwgdGhpcy5mdW5jX3Jldml2ZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwibmVlZExpbWl0Tm9IYW5kbGVcIiwgdGhpcy5pc1JlbW92ZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwidXBkYXRlU29ydFwiLCB0aGlzLmluaXRTb3J0LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJ1cGRhdGVTbG93XCIsIHRoaXMuaW5pdFNsb3csIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZVVubG9ja1Bvc1wiLCB0aGlzLmluaXRVbmxvY2tQb3MsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImlzU2hvd1Jldml2ZVwiLCB0aGlzLmlzU2hvd1Jldml2ZV9mdW5jLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJyZXdhcmRWaWRlb1wiLCB0aGlzLnJld2FyZFZpZGVvLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJnYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG5cIiwgdGhpcy5nYW1lbG9nX1RoaW5raW5nX3Jld2FyZF9idG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImYyOTA4Nl93YXJuaW5nSW5kZXhcIiwgdGhpcy5idWJibGUsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVubG9ja1ZpZGVvTG9ja1wiLCB0aGlzLnVubG9ja1ZpZGVvTG9jaywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiZjI5MDg2X2l0ZW0xXCIsIHRoaXMuZjI5MDg2X2l0ZW0xLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJmMjkwODZfaXRlbTVcIiwgdGhpcy5mMjkwODZfaXRlbTUsIHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuYnViYmxlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWGkuazoVwiLCB0KTtcbiAgICAgICAgaWYgKDIgPT0gdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNCdWJibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzQnViYmxlID0gITA7XG4gICAgICAgICAgICB2YXIgbiA9ICR1dGlscy5VdGlscy5yYW5kb21OdW0oMCwgMyk7XG4gICAgICAgICAgICB2YXIgciA9IG51bGw7XG4gICAgICAgICAgICBzd2l0Y2ggKG4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLmRpY3Quc2xvd0Rvd25CdG47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMuZGljdC5zb3J0QnRuO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgciA9IHRoaXMuZGljdC5jbGVhckJ0bjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5kaWN0LmZ1bGxTY3JlZW5BdHRhY2tCdG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiYnViYmxlXCIpLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuaXNCdWJibGUgPSAhMTtcbiAgICAgICAgICAgICAgICByLmdldENoaWxkQnlOYW1lKFwiYnViYmxlXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgfSwgMyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVubG9ja1ZpZGVvTG9jayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnVubG9ja1Bvc0J0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmV3YXJkVmlkZW8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICgwID09IGUpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5yZXdhcmRfYnRuLCB7XG4gICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpLFxuICAgICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2FtZVJlc3RhcnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5zaGFyZVN1YyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuaXNGaXJzdFNoYXJlZCk7XG4gICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjbGlja1NoYXJlXCIpO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcInNoYXJlUmV3YXJkXCIpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdGhpcy5zaGFyZVN1Y1N1YigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaGFyZUZhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuaXNGaXJzdFNoYXJlZCk7XG4gICAgICAgIHZhciBlID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjbGlja1NoYXJlXCIpO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcInNoYXJlUmV3YXJkXCIpO1xuICAgICAgICBpZiAoIXQgJiYgZSkge1xuICAgICAgICAgICAgdGhpcy5zaGFyZVN1Y1N1YigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIuWIhuS6q+Wksei0pe+8jOivt+WIhuS6q+WIsOWkp+S6jjEw5Lq655qE576k6YeMXCIpO1xuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiY2xpY2tTaGFyZVwiLCAhMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNoYXJlU3VjU3ViID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwic2hhcmVSZXdhcmRcIik7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLmlzRmlyc3RTaGFyZWQsICEwKTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJjbGlja1NoYXJlXCIsICExKTtcbiAgICAgICAgaWYgKFwicmVzdGFydFwiID09IHQpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm9uUmVzdGFydEJ0blwiKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLmdldFJlc2V0QnlTaGFyZVRpbWVzLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcInRpcFwiID09IHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcFN1YygpLCAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5nZXRUaXBTaGFyZVRpbWVzLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKFwiYm9yZVwiID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuYm9yZUJ0biksXG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5nZXRCb3JlQnlTaGFyZVRpbWVzLCAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJkZWxheWVkXCIgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuZ2V0RGVsYXllZEJ5U2hhcmVUaW1lcywgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpcF90aW1lRW5kXCIgPT0gdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LnJlc3RhcnRBbnN3ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYWRkVGltZV90aW1lRW5kXCIgPT0gdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LmV4dGVuZFRpbWUpLCAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JlX2JvcmVcIiA9PSB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuYm9yZUJ0biksICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInBhdXNlX2Fuc3dlckJ0blwiID09IHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5yZXN0YXJ0QW5zd2VyMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5yZXN0b3JlVGltZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTaGFyZVZpZXcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dIYW1tZXJCdG5WaWRlbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaWN0LmhhbW1lckJ0bi5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmFjdGl2ZSA9ICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3dpdGNoTW92ZTVTdGF0ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGVcIiwgdCk7XG4gICAgICAgIHRoaXMuZGljdC5tb3ZlNUJ0bi5hY3RpdmUgPSB0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVzdGFydEFuc3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJvblJlc3RhcnRCdG5cIik7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5UZW1wRGF0YS5pc1VubG9ja1RpcCwgITApO1xuICAgICAgICAgICAgdC5pc1VubG9ja1RpcCA9ICEwO1xuICAgICAgICAgICAgdC5pbml0VGlwVmlldygpO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcInBhZ2UwMDZcIik7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlRJUCk7XG4gICAgICAgIH0sIDAuMyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yZXN0YXJ0QW5zd2VyMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5UZW1wRGF0YS5pc1VubG9ja1RpcCwgITApO1xuICAgICAgICAgICAgdC5pc1VubG9ja1RpcCA9ICEwO1xuICAgICAgICAgICAgdC5pbml0VGlwVmlldygpO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcInBhZ2UwMDZcIik7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlRJUCk7XG4gICAgICAgIH0sIDAuMyk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50aXBfYnRuX2FuaW0gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVJc1VubG9ja1RpcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVGVtcERhdGEuaXNVbmxvY2tUaXAsICExKTtcbiAgICAgICAgdGhpcy5pc1VubG9ja1RpcCA9ICExO1xuICAgICAgICB0aGlzLmluaXRUaXBWaWV3KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiaXRlbVZpZGVvXCIpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5pbml0U2tpcFZpZXcoKTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZSwgbikge1xuICAgICAgICAgICAgaWYgKG4gIT0gdC5ub2RlLmNoaWxkcmVuQ291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBlID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjaGVhdHNcIik7XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XRUIpIHx8IGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5oaWRlVGV4dC5hY3RpdmUgPSAhMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5oaWRlVGV4dC5hY3RpdmUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTaGFyZVZpZXcoKTtcbiAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNjcmV3Qm94SW5maW5pdGUpKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc2NyZXdCb3hUaW1lc0JnLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNjcmV3Qm94TWFzay5hY3RpdmUgPSAhMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRTb3J0KCk7XG4gICAgICAgIHRoaXMuaW5pdFNsb3coKTtcbiAgICAgICAgdGhpcy5pbml0VW5sb2NrUG9zKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQuc3RhcnRTdGF0ZSA9IHQubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJjb2xsZWN0Um9vdFwiKS5hY3RpdmU7XG4gICAgICAgIH0sIDEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFNvcnQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5pbml0U2xvdyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmluaXRVbmxvY2tQb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuVW5sb2NrUG9zKSB8fCAwO1xuICAgICAgICB0aGlzLmRpY3QudW5sb2NrUG9zUm9vdC5hY3RpdmUgPSAhIXQ7XG4gICAgICAgIHRoaXMuZGljdC51bmxvY2tQb3MuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdDtcbiAgICAgICAgdGhpcy5kaWN0LnVubG9ja1Bvc0J0bi5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmFjdGl2ZSA9ICF0aGlzLmRpY3QudW5sb2NrUG9zUm9vdC5hY3RpdmU7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRCdG5Pbl8gPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgICAgICBpZiAodC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICByLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRTtcbiAgICAgICAgci5kdXJhdGlvbiA9IDAuMTtcbiAgICAgICAgci56b29tU2NhbGUgPSAxLjI7XG4gICAgICAgIHQub24oXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwicGxheUNsaWNrQXVkaW9cIik7XG4gICAgICAgICAgICAgICAgZS5jYWxsKG4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVRvZGF5U2hhcmVPclZpZGVvVGltZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5pdFNoYXJlVmlldygpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFJlc3RhcnRWaWV3ID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuaW5pdEJhY2tWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSk7XG4gICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwiYmFja1RpbWVzXCIpIHx8IDA7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY2hlaHVpVmlkZW9JY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNoZWh1aVNoYXJlSWNvbi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5iYWNrVGltZXMuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYmFja1RpbWVzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYmFja1RpbWVzLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaGFyZSkge1xuICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuY2hlaHVpU2hhcmVJY29uLmFjdGl2ZSA9ICEwKSwgKHRoaXMuZGljdC5jaGVodWlWaWRlb0ljb24uYWN0aXZlID0gITEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmNoZWh1aVZpZGVvSWNvbi5hY3RpdmUgPSAhMCksICh0aGlzLmRpY3QuY2hlaHVpU2hhcmVJY29uLmFjdGl2ZSA9ICExKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFNoYXJlVmlldyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnNob3dTaGFyZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5yZXN0YXJ0VmlkZW9JY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLmRpY3QuY2hlaHVpVmlkZW9JY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLmRpY3QudGlwVmlkZW9JY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLmRpY3QuYm9yZVZpZGVvSWNvbi5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5kaWN0LnJlc3RhcnRTaGFyZUljb24uYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC5jaGVodWlTaGFyZUljb24uYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC50aXBTaGFyZUljb24uYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC5ib3JlU2hhcmVJY29uLmFjdGl2ZSA9ICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFRpcFZpZXcgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5pbml0Qm9yZVZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgwID09ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSkge1xuICAgICAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5ib3JlVGltZXMpIHx8IDA7XG4gICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5ib3JlVmlkZW9JY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5ib3JlU2hhcmVJY29uLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5ib3JlVGltZXMuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LmJvcmVUaW1lcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LmJvcmVUaW1lcy5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NoYXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuYm9yZVZpZGVvSWNvbi5hY3RpdmUgPSAhMSksICh0aGlzLmRpY3QuYm9yZVNoYXJlSWNvbi5hY3RpdmUgPSAhMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5ib3JlVmlkZW9JY29uLmFjdGl2ZSA9ICEwKSwgKHRoaXMuZGljdC5ib3JlU2hhcmVJY29uLmFjdGl2ZSA9ICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRTa2lwVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLklTX1dJTikpIHtcbiAgICAgICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuS0VZKTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5za2lwVmlkZW8uYWN0aXZlID0gISh0ID49IDIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuSVNfV0lOKSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMTZcIik7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJyZXdhcmRlX2J0bjAwMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5LRVkpO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5LRVksIGUgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuS0VZX0VGRkVDVCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRpbWVFbmRfYW5zd2VyQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIhuS6q1wiKTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJjbGlja1NoYXJlXCIsICEwKTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJzaGFyZVJld2FyZFwiLCBcInRpcF90aW1lRW5kXCIpO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNoYXJlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50aW1lRW5kX2FkZFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75YiG5LqrXCIpO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImNsaWNrU2hhcmVcIiwgITApO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcInNoYXJlUmV3YXJkXCIsIFwiYWRkVGltZV90aW1lRW5kXCIpO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNoYXJlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5ib3JlX2JvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75YiG5LqrXCIpO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImNsaWNrU2hhcmVcIiwgITApO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcInNoYXJlUmV3YXJkXCIsIFwiYm9yZV9ib3JlXCIpO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNoYXJlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wYXVzZV9hbnN3ZXJCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75YiG5LqrXCIpO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImNsaWNrU2hhcmVcIiwgITApO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcInNoYXJlUmV3YXJkXCIsIFwicGF1c2VfYW5zd2VyQnRuXCIpO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNoYXJlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja1RpcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IFwiMDAxXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNVbmxvY2tUaXApIHtcbiAgICAgICAgICAgIHJldHVybiAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlRJUCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwiaXNWaWRlb1wiKSkge1xuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93UmV3YXJkQWRzKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT0gbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnRvZGF5U2hhcmVPclZpZGVvVGltZXMpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLnRvZGF5U2hhcmVPclZpZGVvVGltZXMsIHIgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgZS51cGRhdGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGUuc3VjVGlwKCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5wcm9wSW5kZXgsIDEpO1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Qcm9wKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudGlwU3VjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5UZW1wRGF0YS5pc1VubG9ja1RpcCwgITApO1xuICAgICAgICB0aGlzLmlzVW5sb2NrVGlwID0gITA7XG4gICAgICAgIHRoaXMuaW5pdFRpcFZpZXcoKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcInBhZ2UwMDZcIik7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuVElQKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrVGlwX3N1YyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVGVtcERhdGEuaXNVbmxvY2tUaXAsICEwKTtcbiAgICAgICAgdGhpcy5pc1VubG9ja1RpcCA9ICEwO1xuICAgICAgICB0aGlzLmluaXRUaXBWaWV3KCk7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDA2XCIpO1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlRJUCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja1NraXAgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gXCIwMDdcIjtcbiAgICAgICAgfVxuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDE5XCIpO1xuICAgICAgICBpZiAodGhpcy5kaWN0LnNraXBWaWRlby5hY3RpdmUpIHtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGlmICgwID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJpc05lZWRJbnNlcnRcIiwgITEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpO1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiTGV2ZWxfU2tpcF9cIiArIG4gKyBcIl9cIiArIGUpO1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwicmV3YXJkZV9idG4wMDRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVfc3VjY2VzczJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlNLSVApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKDI1NSA9PSB0aGlzLmRpY3QuaGlkZVRleHQub3BhY2l0eSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmhpZGVUZXh0Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNraXBCdG4uYWN0aXZlID0gITE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuaGlkZVRleHQub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5za2lwQnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5tb3ZlNUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93UmV3YXJkQWRzKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQubW92ZTUpO1xuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnJld2FyZF9idG4sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMDAzXCIsXG4gICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbmZpZ1N1ZmZpeClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtUKFtjYy5TcHJpdGVGcmFtZV0pXSwgZS5wcm90b3R5cGUsIFwidmlkZW9PckFkZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoWyRsaW1pdFJlcGVhdC5MaW1pdFJlcGVhdCgxKV0sIGUucHJvdG90eXBlLCBcImJvcmVCdG5cIiwgbnVsbCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW1BdLCBlKTtcbn0pKCRiYXNlVUkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBBO1xuIl19