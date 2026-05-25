
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f72228mH5pHwL/ctyeXoyfH', 'Game');
// scripts/Game.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $audioConst = require("./AudioConst");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $popupConst = require("./PopupConst");

var $sceneConst = require("./SceneConst");

var $userConst = require("./UserConst");

var $audioManager = require("./AudioManager");

var $bmsManager = require("./BmsManager");

var $eventManager = require("./EventManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $resManager = require("./ResManager");

var $sceneManager = require("./SceneManager");

var $userManager = require("./UserManager");

var $utils = require("./Utils");

var $configUtils = require("./ConfigUtils");

var $xMADUtils = require("./XMADUtils");

var $languageManager = require("./LanguageManager");

var $screenshotUtils = require("./ScreenshotUtils");

var $tipManager = require("./TipManager");

var $configManager = require("./ConfigManager");

var $configConst = require("./ConfigConst");

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var $oPPOMiniADUtils = require("./OPPOMiniADUtils");

var $shuShuConst = require("./ShuShuConst");

var $taskManager = require("./TaskManager");

var $memoryStorageManager = require("./MemoryStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $adjustEventSystem = require("./AdjustEventSystem");

var $localStorageManager = require("./LocalStorageManager");

var $localStorageConst = require("./LocalStorageConst");

var $challengeSystem = require("./ChallengeSystem");

var $poolUtils = require("./PoolUtils");

var $assetManager = require("./AssetManager");

var $tools = require("./Tools");

var z = cc._decorator;
var G = z.ccclass;
var K = z.property;

var W = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.coloringSpinePrefab = null;
    e._data = null;
    e.level = null;
    e.levelID = null;
    e.bms = null;
    e.flag = null;
    e.clickAmountNode = null;
    e.isUnlockTip = !1;
    e.currentLevel = 1;
    e.currentMode = 1;
    e.themeType = 0;
    e.currentTopLevel = 1;
    e.fullAdCounter = 0;
    e.clickAmount = 0;
    e.currentPrefabAsset = [];
    e.time = 0;
    e.isHandle = !1;
    e.modeLevelTime = [180, 180, 180, 180, 180, 180, 300, 180, 180, 180];
    e.restartTimes = 0;
    e.isCheckTipTextCD = !1;
    e.allHoleCoverAnim = !1;
    e.node_hammer = null;
    e.metalAmount = 0;
    e.developID = -1;
    e.recordState = 0;
    e.isLoadFail = !1;
    e.isTimeEnd = !1;
    e.currentLevelProgress = 1;
    e.currentLevelTotalTime = 180;
    e.currentLevelTime = 0;
    e.isLoadingScene = !1;
    e.isBack = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var e = this;
    t.prototype.onLoad.call(this);
    this.modeLevelTime = new Array(100).fill(180);
    this.modeLevelTime[6] = 300;
    this.modeLevelTime[21] = 300;
    this.modeLevelTime[23] = 300;
    this.modeLevelTime[77] = 90;
    this.modeLevelTime[81] = 120;
    this.modeLevelTime[82] = 120;
    this.modeLevelTime[90] = 300;
    var n = $bmsManager.BMS.getKey("screwTime");

    if (n >= 900) {
      n = 900;
    }

    if (n <= 180) {
      n = 180;
    }

    if (0 == n) {
      this.modeLevelTime[0] = 18e16;
      this.dict.time2.opacity = 0;
    } else {
      this.modeLevelTime[0] = n;
    }

    window.coloringSpinePrefab = this.coloringSpinePrefab;
    this.level = this.dict.level;
    this.levelID = this.dict.levelID;
    this.flag = this.dict.flag;
    this.bms = this.dict.bms;
    this.clickAmountNode = this.dict.clickAmountNode;
    this.addBtnOn("homeBtn", this.clickHome, this);
    this.addBtnOn("backBtn", this.clickBack, this);
    this.addBtnOn("restartBtn", this.clickRestart2, this);
    this.addBtnOn("developBtn", this.developBtn, this);
    this.addBtnOn("orderBtn", this.orderBtn, this);
    this.addBtnOn("screenshotBtn", this.screenshotBtn, this);
    this.addBtnOn("downloadBtn", this.downloadBtn, this);
    this.addBtnOn("collectRoot", this.collectRoot, this);
    this.addBtnOn("limitWelfareBtn", this.limitWelfareBtn, this);
    this.addBtnOn("mapBtn", this.mapBtn, this);
    this.clickAmountNode.on(cc.Node.EventType.TOUCH_START, function (t) {
      if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
        e.clickAmount += 1, console.log("点击次数", e.clickAmount), 0 != (n = $bmsManager.BMS.getKey("fullClickNum")) && n == e.clickAmount && ($xMADUtils.XMAD.showInterstitialFeed_must(), e.clickAmount = 0);
      } else if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        e.clickAmount += 1, console.log("点击次数", e.clickAmount), 0 != (n = $bmsManager.BMS.getKey("fullClickNum")) && n == e.clickAmount && ($oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_must(), e.clickAmount = 0);
      } else if ($platformManager.Platform.is($platformConst.EPlatform.OPPO)) {
        var n;
        e.clickAmount += 1;
        console.log("点击次数", e.clickAmount);

        if (0 != (n = $bmsManager.BMS.getKey("fullClickNum")) && n == e.clickAmount) {
          $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_must();
          e.clickAmount = 0;
        }
      }

      e.listenHandle();
      cc.game.emit("clickAmountNode");
      var r = t.getLocation();
      var o = e.dict.clickSpine.parent.convertToNodeSpaceAR(r);
      e.dict.clickSpine.position = o;
      e.dict.clickSpine.active = !0;
      e.dict.clickSpine.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    }, this);

    if (this.clickAmountNode._touchListener) {
      this.clickAmountNode._touchListener.setSwallowTouches(!1);
    }

    $userManager.User.setTempData("isNeedInsert", !0);
    this.dict.version.getComponent(cc.Label).string = "v" + $platformManager.Platform.getConfig().version;
    this.dict.limitWelfareBtn.active = !1;

    if (window.tt && ["Douyin", "douyin_lite", "live_stream", "aweme_hotsoon"].some(function (t) {
      return t == window.tt.getSystemInfoSync().appName;
    })) {
      var r = $userManager.User.get($userConst.UserData.EnterSidebar) || 0;
      console.log("判断按钮", r, 2 != r);

      if (2 != r) {
        console.log("显示按钮");
        this.dict.limitWelfareBtn.active = !0;
      } else {
        console.log("不显示按钮");
        this.dict.limitWelfareBtn.active = !1;
      }
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
      this.dict.limitWelfareBtn.active = !0;
    }

    this.initView();
    this.schedule(function () {
      e.fullAdCounter++;
    }, 1);
    this.listenHandle();
    $audioManager.Audio.playMusic($audioConst.AudioConst.BGM_MAIN);

    if ($platformManager.Platform.is($platformConst.EPlatform.WX)) {
      console.log("调用广告");
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
      this.dict.hideUIBtn.active = !0;
    }

    $taskManager["default"].init();

    if (0 == this.currentMode) {
      if ($platformManager.Platform.getConfig().hasPurchase) {
        this.dict.universalCard.active = !0;
      } else {
        this.dict.universalCard.active = !1;
      }
    }
  };

  e.prototype.updateSkin = function () {
    var t = $userManager.User.get($userConst.UserData.skinList) || {
      0: [0],
      1: [0],
      2: [9],
      3: [0],
      4: [0],
      5: [0]
    };
    $userManager.User.set($userConst.UserData.skinList, t);
    var e = $userManager.User.get($userConst.UserData.useSkinIDList) || {
      0: 0,
      1: 0,
      2: 9,
      3: 0,
      4: 0,
      5: 0
    };
    $userManager.User.set($userConst.UserData.useSkinIDList, e);
    var n = $userManager.User.get($userConst.UserData.getLockSkinList) || {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: []
    };
    $userManager.User.set($userConst.UserData.getLockSkinList, n);
  };

  e.prototype.hideUIBtn = function () {
    if (this.dict.backBtn.opacity) {
      this.dict.backBtn.opacity = 0;
      this.dict.bottomBar0.opacity = 0;
      this.dict.hideUIBtn.opacity = 0;
      this.dict.shopBtn.opacity = 0;
    } else {
      this.dict.backBtn.opacity = 255;
      this.dict.bottomBar0.opacity = 255;
      this.dict.hideUIBtn.opacity = 255;
      this.dict.shopBtn.opacity = 255;
    }
  };

  e.prototype.onDestroy = function () {
    $platformManager.Platform.stopRecordCap();
    $platformManager.Platform.hideCustomAd1();
    $platformManager.Platform.hideCustomAd2();
    var t = $userManager.User.getTempData("levelTime");
    var e = (new Date().getTime() - t) / 1e3;
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_End, {
      EndType: 2,
      Duration: e,
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
    });
  };

  e.prototype.listenHandle = function () {
    $eventManager.Event.emit($eventConst["default"].TIP_BTN_ANIM, !1, "test");
    this.unschedule(this.handleEvent);
    this.scheduleOnce(this.handleEvent, 8);
  };

  e.prototype.handleEvent = function () {
    console.log("测试无操作");

    if ($userManager.User.get($userConst.TempData.isUnlockTip)) {//
    } else {
      $eventManager.Event.emit($eventConst["default"].TIP_BTN_ANIM, !0, "test");
    }
  };

  e.prototype.restartBtn_1 = function () {
    this.checkFullAd_noResult();
    this.currentLevelProgress = 1;
    this.initView(!0);
  };

  e.prototype.clickRestart2 = function (t) {
    var e = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
    var n = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
    cc.game.emit("gamelog", "Level_Lose_" + n + "_" + e);
    this.restartTimes += 1;
    console.log("重置次数", this.restartTimes);
    var r = $bmsManager.BMS.getKey("FriendHelp");
    var o = $userManager.User.getTempData($userConst.TempData.cryHelpList) || [];
    var i = $userManager.User.get($userConst.UserData.cryHelpTimes) || 0;
    console.log("检测", this.restartTimes, r);
    console.log("检测2", i);
    console.log("检测3", o, e);

    if (this.restartTimes >= r && i < 2 && -1 == o.indexOf(this.currentLevel)) {
      o.push(this.currentLevel);
      $userManager.User.setTempData($userConst.TempData.cryHelpList, o);
      $userManager.User.set($userConst.UserData.cryHelpTimes, i + 1);
    } else {
      if (this.restartTimes >= r) {
        $platformManager.Platform.showInsert();
      }
    }

    if (this.restartTimes >= 3) {
      $eventManager.Event.emit($eventConst["default"].TIP_BTN_ANIM, !0);
      this.restartTimes = 0;
    }

    this.clickRestart(t);
  };

  e.prototype.onRestartReset = function () {
    this.checkFullAd_noResult();
    this.currentLevelProgress = 1;
    this.clickRestart2();
  };

  e.prototype.onEnable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
      $oPPOAndroidAdUtils.OPPOAndroidAd.showBannerFeed();
    } else {
      $platformManager.Platform.is($platformConst.EPlatform.OPPO);
    }

    this.initEvent();
    $eventManager.Event.on($eventConst["default"].hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
  };

  e.prototype.onDisable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
      $platformManager.Platform.hideNativeAds();
    } else {
      $platformManager.Platform.is($platformConst.EPlatform.OPPO);
    }

    this.clearEvent();
    $eventManager.Event.off($eventConst["default"].hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
  };

  e.prototype.initEvent = function () {
    cc.game.on("game_success1", this.startSuc, this);
    cc.game.on("game_success2", this.suc, this);
    cc.game.on("onRestartBtn", this.clickRestart2, this);
    cc.game.on("restartBtn_1", this.restartBtn_1, this);
    cc.game.on("onRestartReset", this.onRestartReset, this);
    cc.game.on("isTimeEnd", this.isTimeEndFun, this);
    $eventManager.Event.on($eventConst["default"].CLICK_NEXT, this.clickNext, this);
    $eventManager.Event.on($eventConst["default"].destroyInsert, this.destroyInsert, this);
    $eventManager.Event.on($eventConst["default"].enterNewMode, this.enterNewMode, this);
    $eventManager.Event.on($eventConst["default"].extendTime, this.extendTime, this);
    $eventManager.Event.on($eventConst["default"].move5, this.move5, this);
    $eventManager.Event.on($eventConst["default"].upset, this.upset, this);
    $eventManager.Event.on($eventConst["default"].boreBtn, this.boreBtn, this);
    cc.game.on("woodRemove", this.woodRemove, this);
    $eventManager.Event.on($eventConst["default"].StopTimer, this.stopTimer, this);
    $eventManager.Event.on($eventConst["default"].restoreTime, this.restoreTime, this);
    cc.game.on("adsVideoFail", this.adsVideoFail, this);
    cc.game.on("insetVideoSuccess", this.insetVideoSuccess, this);
    cc.game.on("insetVideoAsk", this.insetVideoAsk, this);
    cc.game.on("adSkipped", this.adSkipped, this);
    cc.game.on("hammerBtn", this.hammerBtn, this);
    cc.game.on("shakeBtn", this.shakeBtn, this);
    cc.game.on("undoBtn", this.undoBtn, this);
    cc.game.on("wingBtn", this.wingBtn, this);
    cc.game.on("highlightBtn", this.highlightBtn, this);
    cc.game.on("addStepBtn", this.addStepBtn, this);
    cc.game.on("moderateBtn", this.moderateBtn, this);
    cc.game.on("rotateBtn", this.rotateBtn, this);
    cc.game.on("screwBoxBtn", this.screwBoxBtn, this);
    cc.game.on("func_checkDelNailCb", this.func_checkDelNailCb, this);
    cc.game.on("allHoleCover", this.allHoleCover, this);
    cc.game.on("chehuiBtn_anim", this.chehuiBtn_anim, this);
    cc.game.on("removeScrewBtn", this.removeScrewBtn, this);
    cc.game.on("listenHandle", this.listenHandle, this);
    cc.game.on("hideGetCard", this.hideGetCard, this);
    cc.game.on("allPersonAmount", this.allPersonAmount, this);
    cc.game.on("checkTipText", this.checkTipText, this);
    cc.game.on("f29086_addCoin", this.f29086_addCoin, this);
  };

  e.prototype.clearEvent = function () {
    cc.game.off("game_success1", this.startSuc, this);
    cc.game.off("game_success2", this.suc, this);
    cc.game.off("onRestartBtn", this.clickRestart2, this);
    cc.game.off("onRestartReset", this.onRestartReset, this);
    cc.game.off("isTimeEnd", this.isTimeEndFun, this);
    $eventManager.Event.off($eventConst["default"].CLICK_NEXT, this.clickNext, this);
    $eventManager.Event.off($eventConst["default"].destroyInsert, this.destroyInsert, this);
    $eventManager.Event.off($eventConst["default"].enterNewMode, this.enterNewMode, this);
    $eventManager.Event.off($eventConst["default"].extendTime, this.extendTime, this);
    $eventManager.Event.off($eventConst["default"].move5, this.move5, this);
    $eventManager.Event.off($eventConst["default"].upset, this.upset, this);
    $eventManager.Event.off($eventConst["default"].boreBtn, this.boreBtn, this);
    cc.game.off("woodRemove", this.woodRemove, this);
    $eventManager.Event.off($eventConst["default"].StopTimer, this.stopTimer, this);
    $eventManager.Event.off($eventConst["default"].restoreTime, this.restoreTime, this);
    cc.game.off("adsVideoFail", this.adsVideoFail, this);
    cc.game.off("insetVideoSuccess", this.insetVideoSuccess, this);
    cc.game.off("insetVideoAsk", this.insetVideoAsk, this);
    cc.game.off("adSkipped", this.adSkipped, this);
    cc.game.off("hammerBtn", this.hammerBtn, this);
    cc.game.off("shakeBtn", this.shakeBtn, this);
    cc.game.off("undoBtn", this.undoBtn, this);
    cc.game.off("wingBtn", this.wingBtn, this);
    cc.game.off("highlightBtn", this.highlightBtn, this);
    cc.game.off("addStepBtn", this.addStepBtn, this);
    cc.game.off("moderateBtn", this.moderateBtn, this);
    cc.game.off("rotateBtn", this.rotateBtn, this);
    cc.game.off("screwBoxBtn", this.screwBoxBtn, this);
    cc.game.off("func_checkDelNailCb", this.func_checkDelNailCb, this);
    cc.game.off("allHoleCover", this.allHoleCover, this);
    cc.game.off("chehuiBtn_anim", this.chehuiBtn_anim, this);
    cc.game.off("removeScrewBtn", this.removeScrewBtn, this);
    cc.game.off("listenHandle", this.listenHandle, this);
    cc.game.off("hideGetCard", this.hideGetCard, this);
    cc.game.off("allPersonAmount", this.allPersonAmount, this);
    cc.game.off("checkTipText", this.checkTipText, this);
    cc.game.off("f29086_addCoin", this.f29086_addCoin, this);
  };

  e.prototype.f29086_addCoin = function () {};

  e.prototype.allPersonAmount = function (t, e) {
    if (this.currentLevel > 1) {
      var n = $memoryStorageManager["default"].get($memoryStorageConst["default"].CollectGoodsID);
      var r = $localStorageManager["default"].get($localStorageConst["default"].Collect) || {
        0: []
      };

      if (!n || r[0].includes(n)) {
        this.dict.collectRoot.active = !1;
      } else {
        if (0 == this.currentMode) {
          this.dict.collectRoot.active = !0;
          this.dict.collectRate.getComponent(cc.Label).string = Math.round((e - t) / e * 100) + "%";
          this.dict.collectIcon2.getComponent(cc.Sprite).fillRange = (e - t) / e;
        }
      }
    } else {
      this.dict.collectRoot.active = !1;
    }

    this.dict.levelProText.getComponent(cc.Label).string = "" + t;
    this.dict.levelPro.getComponent(cc.Sprite).fillRange = t / e;

    if (0 == t) {
      this.dict.levelProRoot.active = !1;
    }
  };

  e.prototype.checkTipText = function (t) {
    var e = this;

    if (0 == t) {
      if (this.isCheckTipTextCD) {
        return;
      }

      this.isCheckTipTextCD = !0;
      this.dict.tipText.scale = 0;
      this.dict.tipText.active = !0;
      this.dict.tipText.opacity = 255;
      cc.tween(this.dict.tipText).to(0.4, {
        scale: 1
      }, {
        easing: "backOut"
      }).delay(1.5).to(0.3, {
        opacity: 0
      }).start();
      this.scheduleOnce(function () {
        e.isCheckTipTextCD = !1;
      }, 60);
    } else {
      this.dict.tipText2.scale = 0;
      this.dict.tipText2.active = !0;
      this.dict.tipText2.opacity = 255;
      cc.tween(this.dict.tipText2).to(0.4, {
        scale: 1
      }, {
        easing: "backOut"
      }).delay(1.5).to(0.3, {
        opacity: 0
      }).start();
    }
  };

  e.prototype.removeScrewBtn = function () {
    this.dict.removeScrewBtn.stopAllActions();
    this.dict.removeScrewBtn.scale = 1;
    this.allHoleCoverAnim = !1;
  };

  e.prototype.chehuiBtn_anim = function () {
    this.allHoleCoverAnim = !1;
  };

  e.prototype.hideGetCard = function () {
    this.dict.noFirstAllHole.active = !1;
    $eventManager.Event.emit($eventConst["default"].restoreTime);
  };

  e.prototype.allHoleCover = function () {
    var t = this;

    if (this.allHoleCoverAnim) {//
    } else {
      this.allHoleCoverAnim = !0;
      console.log("allHoleCover-------");

      if (!$localStorageManager["default"].get($localStorageConst["default"].NoFirstAllHole) && $platformManager.Platform.getConfig().hasPurchase) {
        $localStorageManager["default"].set($localStorageConst["default"].NoFirstAllHole, 1);
        this.dict.noFirstAllHole.active = !0;
        $tipManager.Tip.show("很遗憾，没有可操作步骤了。");
        $eventManager.Event.emit($eventConst["default"].StopTimer);
        this.scheduleOnce(function () {
          var t = ($localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0) + 1;
          $localStorageManager["default"].set($localStorageConst["default"].cardAmount, t);
          $memoryStorageManager["default"].set($memoryStorageConst["default"].reward, [["card", 1]]);
        }, 1.5);
      }

      if (this.dict.removeScrewBtn.active) {
        this.dict.removeScrewBtn.stopAllActions();
        this.dict.removeScrewBtn.scale = 1;
        cc.tween(this.dict.removeScrewBtn).to(0.25, {
          scale: 1.1
        }).to(0.25, {
          scale: 1
        }).union().repeatForever().start();
        this.scheduleOnce(function () {
          t.dict.removeScrewBtn.stopAllActions();
          t.dict.removeScrewBtn.scale = 1;
          t.allHoleCoverAnim = !1;
        }, 5);
      }
    }
  };

  e.prototype.move5 = function () {
    this.level.children[0]._components[0].addAutoMoveNumber();
  };

  e.prototype.upset = function () {
    if (this.level.children[0]._components[0].shuffle) {
      this.level.children[0]._components[0].shuffle();
    }
  };

  e.prototype.boreBtn = function () {
    this.dict.boreBtn.active = !1;

    if (this.level.children[0]._components[0].checkAdLock) {
      this.level.children[0]._components[0].checkAdLock();
    }
  };

  e.prototype.hammerBtn = function () {
    var t = this.level.children[0]._components[0];
    t.isCanUseHammer = !0;
    t.node_hammer.getChildByName("img").position = cc.v3();
    t.node_hammer.active = !0;
    var e = t.node_hammer.getChildByName("img");
    cc.tween(e).repeatForever(cc.tween().to(0.2, {
      scale: 1.2
    }).to(0.1, {
      scale: 1
    })).start();
  };

  e.prototype.getIsOpen = function () {
    return 1;
  };

  e.prototype._initOutLine = function () {};

  e.prototype.shakeBtn = function () {
    if (this.level.children[0]._components[0].shakeAnimation) {
      this.level.children[0]._components[0].shakeAnimation(0);
    }
  };

  e.prototype.undoBtn = function () {
    if (this.level.children[0]._components[0].func_withdraw) {
      this.level.children[0]._components[0].func_withdraw();
    }
  };

  e.prototype.wingBtn = function () {
    if (this.level.children[0]._components[0].func_fly) {
      this.level.children[0]._components[0].func_fly();
    }
  };

  e.prototype.highlightBtn = function () {
    if (this.level.children[0]._components[0].func_highlight) {
      this.level.children[0]._components[0].func_highlight();
    }
  };

  e.prototype.addStepBtn = function () {
    if (this.level.children[0]._components[0].func_addStep) {
      this.level.children[0]._components[0].func_addStep();
    }
  };

  e.prototype.moderateBtn = function () {
    if (this.level.children[0]._components[0].setLeftScrollSpeed) {
      this.level.children[0]._components[0].setLeftScrollSpeed(30);
    }
  };

  e.prototype.rotateBtn = function () {
    if (this.level.children[0]._components[1].turn) {
      this.level.children[0]._components[1].turn();
    }
  };

  e.prototype.screwBoxBtn = function () {
    this.dict.bottomBar0.active = !1;
    this.dict.topLeftBar.active = !1;
    this.dict.number.active = !1;
    this.stopTimer();

    if (this.level.children[0]._components[0].func_delNail) {
      this.level.children[0]._components[0].func_delNail();
    }
  };

  e.prototype.func_checkDelNailCb = function () {
    this.dict.bottomBar0.active = !0;
    this.dict.topLeftBar.active = !0;
    this.dict.number.active = !0;
    this.restoreTime();
  };

  e.prototype.extendTime = function () {
    this.currentLevelTime = 60;
    this.dict.time2.active = !0;
    this.dict.time2.getComponent(cc.Label).string = "" + this.secondFormat(this.currentLevelTime);
    this.schedule(this.timerFun, 1);
  };

  e.prototype.stopTimer = function (t) {
    if (void 0 === t) {
      t = !1;
    }

    if (this.dict.time2.active) {
      console.log("暂停时间");
      this.unschedule(this.timerFun);
    }
  };

  e.prototype.restoreTime = function () {
    if (this.dict.time2.active) {
      this.unschedule(this.timerFun);
      this.schedule(this.timerFun, 1);
    }
  };

  e.prototype.adsVideoFail = function () {
    cc.game.emit("gamelog", "level_interfail_" + this.currentMode + "_" + this.currentLevel);
  };

  e.prototype.adSkipped = function () {};

  e.prototype.insetVideoSuccess = function () {
    cc.game.emit("gamelog", "level_interplay_" + this.currentMode + "_" + this.currentLevel);
  };

  e.prototype.insetVideoAsk = function () {
    cc.game.emit("gamelog", "level_inter_" + this.currentMode + "_" + this.currentLevel);
  };

  e.prototype.destroyInsert = function () {
    $platformManager.Platform.destroyInsert();
  };

  e.prototype.clickNext = function () {
    var t = this;
    $userManager.User.getTempData($userConst.TempData.NEXT_MODE_ID);

    if (1 != this.themeType) {
      $configUtils.ConfigUtils.getDataByID(this.currentMode, function (e) {
        t.currentTopLevel = e.amount;

        if (t.currentLevel + 1 > t.currentTopLevel) {
          console.log("最后一关");
          t.initLevelOrder();
        } else {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
          $eventManager.Event.emit($eventConst["default"].UPDATE_IS_UNLOCK_TIP);
          t.initView();
        }

        if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE) || $platformManager.Platform.is($platformConst.EPlatform.IOS_HAIWAI)) {
          if ($userManager.User.getTempData("isNeedInsert")) {
            t.checkFullAd();
          } else {
            console.log("不需要差评");
          }

          $userManager.User.setTempData("isNeedInsert", !0);
        }
      });
    } else {
      $configUtils.ConfigUtils.getDataByID_99(this.currentMode, function (e) {
        t.currentTopLevel = e.amount;

        if (t.currentLevel + 1 > t.currentTopLevel) {
          console.log("最后一关");
          $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t.currentMode);
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
          $eventManager.Event.emit($eventConst["default"].UPDATE_IS_UNLOCK_TIP);
          t.initView();
        } else {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, t.currentLevel + 1);
          $eventManager.Event.emit($eventConst["default"].UPDATE_IS_UNLOCK_TIP);
          t.initView();
        }

        if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE) || $platformManager.Platform.is($platformConst.EPlatform.IOS_HAIWAI)) {
          if ($userManager.User.getTempData("isNeedInsert") || $platformManager.Platform.getNoADState()) {
            t.checkFullAd();
          } else {
            console.log("不需要差评");
          }

          $userManager.User.setTempData("isNeedInsert", !0);
        }
      });
    }
  };

  e.prototype.initLevelOrder = function () {
    var t = this;

    if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
      this.updateCurrentModeLevel();
    } else {
      $userManager.User.get($userConst.UserData.mode0LevelList_stage1ID);
      $userManager.User.get($userConst.UserData.mode0LevelList_stage2ID);
      $userManager.User.get($userConst.UserData.mode1LevelList_stage1ID);
      $userManager.User.get($userConst.UserData.mode1LevelList_stage2ID);
      var e = [];
      var n = [];
      var r = [];
      var o = [];
      var i = [];
      var a = [];

      if (0 == this.currentMode) {
        $configManager.Config.get($configConst.ConfigConst.THEME + 0 + $platformManager.Platform.getConfig().configSuffix).then(function (r) {
          for (var o = 0; o < r.length; o++) {
            var i = r[o];
            e.push(i.stage1ID);
            n.push(i.stage2ID);
          }

          e.sort(function () {
            return 0.5 - Math.random();
          });
          n.sort(function () {
            return 0.5 - Math.random();
          });
          $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, e);
          $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, n);
          console.log("打螺丝", e, n);
          t.updateCurrentModeLevel();
        });
      } else {
        if (1 == this.currentMode) {
          $configManager.Config.get($configConst.ConfigConst.THEME + 1).then(function (e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              r.push(i.stage1ID);
              o.push(i.stage2ID);
            }

            r.sort(function () {
              return 0.5 - Math.random();
            });
            o.sort(function () {
              return 0.5 - Math.random();
            });
            $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, r);
            $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, o);
            console.log("清理", r, o);
            t.updateCurrentModeLevel();
          });
        } else {
          if (2 == this.currentMode) {
            $configManager.Config.get($configConst.ConfigConst.THEME + 2).then(function (e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                i.push(r.stage1ID);
                a.push(r.stage2ID);
              }

              i.sort(function () {
                return 0.5 - Math.random();
              });
              a.sort(function () {
                return 0.5 - Math.random();
              });
              $userManager.User.set($userConst.UserData.mode2LevelList_stage1ID, i);
              $userManager.User.set($userConst.UserData.mode2LevelList_stage2ID, a);
              console.log("消除箭头", i, a);
              t.updateCurrentModeLevel();
            });
          } else {
            this.handleModeByID(this.currentMode);
          }
        }
      }
    }
  };

  e.prototype.handleModeByID = function (t) {
    var e = this;
    var n = [];
    var r = [];
    $configManager.Config.get($configConst.ConfigConst.THEME + t).then(function (o) {
      for (var i = 0; i < o.length; i++) {
        var a = o[i];
        n.push(a.stage1ID);
        r.push(a.stage2ID);
      }

      n.sort(function () {
        return 0.5 - Math.random();
      });
      r.sort(function () {
        return 0.5 - Math.random();
      });
      $userManager.User.set($userConst.UserData["mode" + t + "LevelList_stage1ID"], n);
      $userManager.User.set($userConst.UserData["mode" + t + "LevelList_stage2ID"], r);
      console.log("模式", t, n, r);
      e.updateCurrentModeLevel();
    });
  };

  e.prototype.updateCurrentModeLevel = function () {
    var t = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};
    var e = $userManager.User.get("levelListLoopTimes") || {};

    if (e[this.currentMode]) {
      e[this.currentMode] += 1;
    } else {
      e[this.currentMode] = 1;
    }

    $userManager.User.set("levelListLoopTimes", e);
    t[this.currentMode] = 1;
    $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, this.currentMode);
    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
    $userManager.User.set($userConst.UserData.LEVEL_LIST, t);
    $eventManager.Event.emit($eventConst["default"].UPDATE_IS_UNLOCK_TIP);
    this.initView();
  };

  e.prototype.enterNewMode = function () {
    $eventManager.Event.emit($eventConst["default"].UPDATE_IS_UNLOCK_TIP);
    this.initView();
  };

  e.prototype.startSuc = function () {
    this.screenshot();
  };

  e.prototype.screenshot = function () {
    var t = this;
    this.scheduleOnce(function () {
      if (cc.isValid(t.dict.level)) {
        t.restartNodeShot();
      }
    }, 0.1);
  };

  e.prototype.restartNodeShot = function () {
    console.log("截图");
    $utils.Utils.nodeShot(this.dict.level).then(function (t) {
      window.screenShotPicture = t;
    });
  };

  e.prototype.woodRemove = function (t) {
    console.log("测试 woodRemove");
    var e = $poolUtils["default"].get(this.dict.downSpineRoot);
    e.active = !0;
    var n = t.parent.convertToWorldSpaceAR(t.position);
    var r = this.node.convertToNodeSpaceAR(n);

    if (r.x <= -250) {
      r.x = -250;
    }

    if (r.x >= 250) {
      r.x = 250;
    }

    console.log("nPos.x", r.x);
    e.x = r.x;
    this.node.addChild(e);
    e.children[0].getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    e.children[1].getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
    this.scheduleOnce(function () {
      $poolUtils["default"].put(e);
    }, 10);
  };

  e.prototype.suc = function () {
    $platformManager.Platform.stopRecordCap();
    this.dict.time2.active = !1;
    this.unschedule(this.timerFun);
    var t = $userManager.User.getTempData("levelTime");
    var e = (new Date().getTime() - t) / 1e3;
    var n = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Win, {
      lv: n,
      mode: this.currentMode,
      queue: this.currentLevel,
      times: e,
      sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
    });
    this.sucFunc();
    this.currentLevelProgress = 1;
  };

  e.prototype.playNDBS = function () {
    var t = this;
    this.dict.spine.active = !0;

    if ("tc" == $languageManager["default"].instance.lan) {
      this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation2", !1);
    } else {
      if ("en" == $languageManager["default"].instance.lan) {
        this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation4", !1);
      } else {
        if ("ja" == $languageManager["default"].instance.lan) {
          this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation3", !1);
        } else {
          this.dict.spine.getComponent(sp.Skeleton).setAnimation(0, "animation", !1);
        }
      }
    }

    this.scheduleOnce(function () {
      t.dict.spine.active = !1;
    }, 1.5);
  };

  e.prototype.sucFunc = function () {
    var t = this.currentLevel + 1;
    var e = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};

    if (e[0]) {//
    } else {
      e[0] = 1;
    }

    console.log("nextLevel", t, "list", e);

    if (t > e[this.currentMode]) {
      e[this.currentMode] = t;
      $userManager.User.set($userConst.UserData.LEVEL_LIST, e);
      console.log("新通关");
      $userManager.User.setTempData("newPass", !0);
      $adjustEventSystem["default"].todayPassTimes();
      var n = $localStorageManager["default"].get($localStorageConst["default"].canTurntableTimes) || 0;
      $localStorageManager["default"].set($localStorageConst["default"].canTurntableTimes, n + 1);
      var r = $localStorageManager["default"].get($localStorageConst["default"].shipStartTime) || 0;
      var o = $localStorageManager["default"].get($localStorageConst["default"].forwardTimes) || 0;
      console.log("shipStartTime", o);
      console.log("shipStartTime", r);

      if (r) {
        o += 1;
        console.log("shipStartTime323333", r);
        $localStorageManager["default"].set($localStorageConst["default"].forwardTimes, o);
      }
    } else {
      $userManager.User.setTempData("newPass", !1);
    }

    var i = $userManager.User.get("record") || 0;
    i += 1;
    $userManager.User.set("record", i);
    $platformManager.Platform.sendRankData();

    if (0 == this.currentMode && e[this.currentMode] >= 5) {
      if (0 == ($localStorageManager["default"].get($localStorageConst["default"].challengeStartTime) || 0)) {
        $localStorageManager["default"].set($localStorageConst["default"].challengeStartTime, new Date().getTime());
        $challengeSystem["default"].init();
      }

      var a = $localStorageManager["default"].get($localStorageConst["default"].challengeUnlockAmount) || 0;
      a += 1;
      $localStorageManager["default"].set($localStorageConst["default"].challengeUnlockAmount, a);
    }

    cc.game.emit("TaskFinish");

    if (-1 != $platformManager.Platform.getConfig().flag.indexOf("tt")) {
      var s = this.currentMode;
      var c = $userManager.User.get($userConst.UserData.ALREADY_PLAY) || {};

      if (c[s]) {//
      } else {
        c[s] = [];
      }

      if (-1 == c[s].indexOf(this.currentLevel)) {
        c[s].push(this.currentLevel);
      }

      $userManager.User.set($userConst.UserData.ALREADY_PLAY, c);
      var l = $userManager.User.get($userConst.UserData.ALREADY_UNLOCK) || {};

      if (l[s]) {//
      } else {
        l[s] = [];
      }

      if (-1 == l[s].indexOf(t)) {
        l[s].push(t);
      }

      $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, l);
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE) || $platformManager.Platform.is($platformConst.EPlatform.IOS_HAIWAI)) {//
    } else {
      this.checkFullAd();
    }

    $popupManager["default"].hideAll();
    $memoryStorageManager["default"].set($memoryStorageConst["default"].IsFail, 0);

    if (1 == this.themeType) {
      $popupManager["default"].show($popupConst.PopupConst.WinOld);
    } else {
      $popupManager["default"].show($popupConst.PopupConst.WIN);
    }

    var u = $userManager.User.get($userConst.UserData.EnterSidebar) || 0;

    if (this.currentLevel >= 3 && this.currentLevel % 3 == 0 && 2 != u) {
      this.scheduleOnce(function () {
        $popupManager["default"].show($popupConst.PopupConst.LimitWelfare);
      }, 0.3);
    }

    var h = $userManager.User.get($userConst.UserData.IS_COMMENT) || 0;
    var m = $bmsManager.BMS.getKey("evaluatelv");

    if (0 != this.currentMode || h || -1 == m.indexOf(this.currentLevel)) {//
    } else {
      this.scheduleOnce(function () {
        $popupManager["default"].show($popupConst.PopupConst.COMMENT);
      }, 0.4);
    }

    $userManager.User.setTempData($userConst.TempData.IS_WIN, !1);
  };

  e.prototype.initSkinAndRole = function () {
    var t = $localStorageManager["default"].get($localStorageConst["default"].SkinList) || {};

    if (t[0]) {//
    } else {
      t[0] = [0];
    }

    if (t[1]) {//
    } else {
      t[1] = [0];
    }

    var e = $localStorageManager["default"].get($localStorageConst["default"].UseSkin) || {};

    if (e[0]) {//
    } else {
      e[0] = 0;
    }

    if (e[1]) {//
    } else {
      e[1] = 0;
    }

    var n = $localStorageManager["default"].get($localStorageConst["default"].HeroLevel) || 1;
    window.f29086_LevelData = {
      useSkin: e,
      heroLevel: n
    };
    window.f29086_dragonBall = 0;
    window.f29086_coin = 0;
  };

  e.prototype.initView = function (t, e) {
    if (void 0 === t) {
      t = !1;
    }

    if (void 0 === e) {
      e = !1;
    }

    return __awaiter(this, void 0, void 0, function () {
      var n;
      var r;
      var o;
      var i;
      var c;
      var l;
      var h;
      var m;
      var b;
      var k;
      var C;
      var M;
      var T;
      var A;
      var U;
      var B;
      var O;
      var N;
      var j;
      var V = this;
      return __generator(this, function (z) {
        switch (z.label) {
          case 0:
            if (this.currentPrefabAsset.length >= 2) {
              for (n = 0; n < this.currentPrefabAsset.length; n++) {
                cc.assetManager.releaseAsset(this.currentPrefabAsset[n]);
              }

              this.currentPrefabAsset = [];
              console.log("释放预制");
            }

            if (null == this.level) {
              return [2];
            } else {
              return this.level.destroyAllChildren(), game.canUseProps = !0, this.initSkinAndRole(), this.listenHandle(), this.isCheckTipTextCD = !1, this.currentMode = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE), this.currentLevel = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL), this.themeType = $memoryStorageManager["default"].get($memoryStorageConst["default"].ThemeType) || 0, this.allHoleCoverAnim = !1, $memoryStorageManager["default"].set($memoryStorageConst["default"].LevelReliveCount, 0), console.log("== 主题: " + this.currentMode + " 关卡: " + this.currentLevel + " =="), console.log("== 主题类型: " + this.themeType), cc.game.emit("isRemove", !1), cc.game.emit("gameRestart"), this.dict.levelProRoot.active = !1, this.dict.unlockPosBtn.active = !1, 1 == this.currentLevel && this.dict.limitWelfareBtn.active ? (console.log("limitWelfareBtn111", this.dict.limitWelfareBtn.active), this.dict.limitWelfareBtn.active = !1, console.log("limitWelfareBtn111----", this.dict.limitWelfareBtn.active), window.needShowLimitWelfareBtn = !0) : window.needShowLimitWelfareBtn && (console.log("limitWelfareBtn222", this.dict.limitWelfareBtn.active), this.dict.limitWelfareBtn.active = !0), r = $bmsManager.BMS.getKey("levelspace"), o = $bmsManager.BMS.getKey("isCheck"), console.log("[levelspace-isCheck]", o), 0 == o && (-1 == r ? this.dict.downloadBtn.active = !1 : this.currentLevel % (r + 1) == 1 ? (this.dict.downloadBtn.y = 514.778, this.dict.downloadBtn.active = !0) : this.dict.downloadBtn.active = !1), (i = $userManager.User.get("levelListLoopTimes") || {})[this.currentMode] || (i[this.currentMode] = 0), 0 != this.currentMode ? [3, 2] : [4, $configManager.Config.get($configConst.ConfigConst.THEME + this.currentMode + $platformManager.Platform.getConfig().configSuffix)];
            }

          case 1:
            l = z.sent();

            if (i[this.currentMode]) {
              if (!(h = $localStorageManager["default"].get($localStorageConst["default"].LoopLevelIDArr) || []).length) {
                for (m = 0; m < l.length; m++) {
                  if (1 != (b = l[m]).id) {
                    h.push(b.levelID);
                  }
                }

                h = $tools["default"].shuffleArray(h);
                $localStorageManager["default"].set($localStorageConst["default"].LoopLevelIDArr, h);
              }

              if (h[this.currentLevel - 1]) {
                c = h[this.currentLevel - 1];
              } else {
                c = h[h.length - 1];
              }
            } else {
              c = l.find(function (t) {
                return t.id == V.currentLevel;
              }).levelID;
            }

            return [3, 4];

          case 2:
            return [4, $configManager.Config.get($configConst.ConfigConst.THEME + this.currentMode)];

          case 3:
            l = z.sent();
            c = l.find(function (t) {
              return t.id == V.currentLevel;
            }).levelID;
            z.label = 4;

          case 4:
            if (e) {
              c = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
            }

            console.log("== 开发ID: " + c);

            if (t) {
              cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Reset, {
                lv: c,
                mode: this.currentMode,
                queue: this.currentLevel
              });
            } else {
              cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Page, {
                lv: c,
                mode: this.currentMode,
                queue: this.currentLevel,
                sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
              });
            }

            if ($platformManager.Platform.getConfig().hasPurchase) {//
            } else {
              this.dict.shopBtn.active = !1;
            }

            k = "zqddn_zhb/prefab/level/zqddn_zhb_level" + c;
            $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL_ID, c);
            $resManager.Res.load(k).then(function (t) {
              return __awaiter(V, void 0, void 0, function () {
                var e;
                var n;
                var r;
                var o;
                var a;
                var c;
                var u = this;
                return __generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      e = this.currentLevel + i[this.currentMode] * l.length;
                      this.dict.number.getComponent(cc.Label).string = $languageManager["default"].formatStr("第%d关", e);
                      game.currentLevel = e;
                      this.dict.mapBtn.active = !1;
                      n = cc.instantiate(t);

                      if (8 == this.currentMode && n._components[0].gameError) {
                        console.log("[弹球模式] 修改");

                        n._components[0].gameError = function () {
                          cc.game.emit("onRestartBtn", !0);
                        };
                      }

                      if (n._components[0]._lbTime) {
                        n._components[0]._lbTime.string = "";
                      }

                      if (n._components[1] && n._components[1].initBrain) {
                        n._components[1].initBrain = function () {};
                      }

                      if (n.getChildByName("title")) {
                        n.getChildByName("title").getComponent(cc.Label).overflow = cc.Label.Overflow.SHRINK;
                        n.getChildByName("title").width = 720;
                      }

                      if (n.getChildByName("lblTitle")) {
                        n.getChildByName("lblTitle").getComponent(cc.Label).overflow = cc.Label.Overflow.SHRINK;
                        n.getChildByName("lblTitle").width = 720;
                      }

                      if (2 == this.currentLevelProgress) {
                        if (n.getChildByName("title")) {
                          n.getChildByName("title").active = !1;
                        }

                        if (n.getChildByName("lblTitle")) {
                          n.getChildByName("lblTitle").active = !1;
                        }
                      }

                      if (n._components[0].getIsOpen) {
                        n._components[0].getIsOpen = this.getIsOpen.bind(this);

                        n._components[0].getAdResult = function () {};

                        this.scheduleOnce(function () {
                          n._components[0].node_hammer.active = !1;
                          n._components[0].node_hammer.children[1].active = !1;
                        });
                      }

                      if (n._components[0].func_highlight) {
                        n.getChildByName("game").getChildByName("zhandan").opacity = 0;
                        n.getChildByName("game").getChildByName("zhandan").y = 1e7;

                        n._components[0].initCountDown = function () {};
                      }

                      n.x = 0;
                      this.currentPrefabAsset.push(t);
                      return [4, $configManager.Config.get($configConst.ConfigConst.Collect)];

                    case 1:
                      r = s.sent();
                      return this.currentLevel > 1 && r[this.currentLevel - 2] ? (o = r[this.currentLevel - 2].goodsID, a = r[this.currentLevel - 2].goodsName, $memoryStorageManager["default"].set($memoryStorageConst["default"].CollectGoodsID, o), $memoryStorageManager["default"].set($memoryStorageConst["default"].CollectGoodsName, a), [4, $assetManager["default"].getRes("gameBundle", "texture/collect/" + o, cc.Texture2D)]) : [3, 3];

                    case 2:
                      c = s.sent();
                      this.dict.collectIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c);
                      this.dict.collectIcon2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c);
                      return [3, 4];

                    case 3:
                      $memoryStorageManager["default"].set($memoryStorageConst["default"].CollectGoodsID, null);
                      s.label = 4;

                    case 4:
                      this.level.addChild(n);
                      window.levelContent = n;
                      this.scheduleOnce(function () {
                        u.screenshot();
                        $platformManager.Platform.startRecordCap();
                      }, 0);
                      cc.game.emit("gamelog", "Level_page_" + this.currentMode + "_" + this.currentLevel);
                      $userManager.User.setTempData("levelTime", new Date().getTime());

                      if (0 == this.currentMode && 1 == $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL)) {
                        this.dict.content.active = !1;
                      } else {
                        this.dict.content.active = !0;
                      }

                      return [2];
                  }
                });
              });
            });

            if ($userManager.User.getTempData("cheats")) {
              this.dict.cheats.active = !0;
              this.levelID.getComponent(cc.Label).string = "[" + c + "]";
              this.bms.getComponent(cc.Label).string = "[bms: " + $platformManager.Platform.getConfig().version + "]";
              this.flag.getComponent(cc.Label).string = "[flag: " + $platformManager.Platform.getConfig().flag + "]";
            }

            this.currentLevelProgress;
            this.initPlatformUI();

            if (!t) {
              C = $bmsManager.BMS.getKey("TiLi");
              console.log("bmsPower", C);

              if (C && !this.isInfinitePower()) {
                if ($userManager.User.getTempData($userConst.TempData.IS_INFINITE_POWER)) {
                  return [2];
                }

                if ((M = $userManager.User.get($userConst.UserData.POWER)) < 5) {
                  $userManager.User.setTempData($userConst.TempData.POWER_TYPE, 0);

                  if ($bmsManager.BMS.getKey("WuxianTiLi")) {
                    cc.game.emit("gamelog", "page008"), $popupManager["default"].show($popupConst.PopupConst.INFINITE_POWER);
                  } else {
                    cc.game.emit("gamelog", "page009"), cc.game.emit("gamelog", "Level_NoPower_" + this.currentMode + "_" + this.currentLevel), $popupManager["default"].show($popupConst.PopupConst.POWER_SHORTAGE);
                  }
                } else {
                  $userManager.User.set($userConst.UserData.POWER, M - 5);
                  $eventManager.Event.emit($eventConst["default"].POWER_UPDATE);
                  cc.game.emit("gamelog", "Level_Power_" + this.currentMode + "_" + this.currentLevel + "_" + $userManager.User.get($userConst.UserData.POWER));
                  T = $userManager.User.get($userConst.UserData.hasUseKey) || 0;
                  A = $bmsManager.BMS.getKey("keyVideo");
                  T || 0 != this.currentMode || this.currentLevel != A || ($userManager.User.setTempData($userConst.TempData.current_key_type, 1), console.log("TempData", $userManager.User.getTempData($userConst.TempData.current_key_type)), $popupManager["default"].show($popupConst.PopupConst.SHOP));
                }
              }

              if ($platformManager.Platform.is($platformConst.EPlatform.WX)) {
                if (!window.wx) {
                  return [2];
                }

                U = $bmsManager.BMS.getKey("lvinys5x5lv");
                B = $bmsManager.BMS.getKey("lvinys5x5chance");
                O = this.getIsMistakeByChance(B);
                console.log("设置第几关:", U, "当前第几关:", this.currentLevel, O);

                if (U <= this.currentLevel && O) {
                  N = window.wx.getSystemInfoSync();
                  j = N.windowHeight / 2 - 250;
                  $platformManager.Platform.showBlockAds({
                    top: j,
                    left: 0,
                    id: $platformManager.Platform.getConfig().blockID,
                    hideCb: function hideCb() {
                      $platformManager.Platform.hideBlockAds();
                      setTimeout(function () {}, 300);
                    }
                  }, function (t) {
                    if (0 == t) {//
                    } else {
                      $platformManager.Platform.hideBlockAds();
                      setTimeout(function () {}, 300);
                    }
                  });
                }
              }

              this.restartTimes = 0;
            }

            return [2];
        }
      });
    });
  };

  e.prototype.isTimeEndFun = function () {
    console.log("测试isTimeEndFun");
    this.isTimeEnd = !1;
  };

  e.prototype.timerFun = function () {
    this.currentLevelTime -= 1;
    this.dict.time2.getComponent(cc.Label).string = "" + this.secondFormat(this.currentLevelTime);

    if (0 == this.currentLevelTime) {
      this.dict.time2.active = !1;
      this.unschedule(this.timerFun);
      this.isTimeEnd = !0;
      $audioManager.Audio.playEffect($audioConst.AudioConst.timeEnd);
      var t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
      $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Lose, {
        lv: t,
        mode: this.currentMode
      });
    }
  };

  e.prototype.secondFormat = function (t, e, n) {
    if (void 0 === e) {
      e = 2;
    }

    if (void 0 === n) {
      n = !1;
    }

    var r = t / 3600;
    var o = (t %= 3600) / 60;
    var i = t %= 60;
    var a;

    if ((r = Math.floor(r)) >= 10) {
      a = r + "";
    } else {
      a = "0" + r;
    }

    var s;

    if ((o = Math.floor(o)) >= 10) {
      s = o + "";
    } else {
      s = "0" + o;
    }

    var c;

    if ((i = Math.floor(i)) >= 10) {
      c = i + "";
    } else {
      c = "0" + i;
    }

    if (n) {
      i = 100 * i / 60;

      if ((i = Math.floor(i)) >= 10) {
        c = i + "";
      } else {
        c = "0" + i;
      }
    }

    var l = a + ":" + s + ":" + c;

    switch (e) {
      case 2:
        l = s + ":" + c;
    }

    return l;
  };

  e.prototype.developBtn = function () {
    var t = this.dict.developID.getComponent(cc.EditBox).string;
    console.log("开发id", t);

    if (this.isIntNum(t)) {
      console.log("是数字");
      $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL_ID, Number(t));
      this.initView(!1, !0);
    }
  };

  e.prototype.orderBtn = function () {
    var t = this.dict.orderID.getComponent(cc.EditBox).string;
    console.log("顺序id", t);

    if (this.isIntNum(t)) {
      console.log("是数字");
      $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, Number(t));
      this.initView();
    }
  };

  e.prototype.screenshotBtn = function () {
    var t = this;
    var e = this.dict.screenshot.getComponent(cc.EditBox).string.split("-");
    var n = e[0];
    var r = e[1];
    console.log("str", n, r);

    if (this.isIntNum(n) && this.isIntNum(r)) {
      this.dict.cheats.active = !1;
      $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, Number(n));
      this.initView(!0);
      $screenshotUtils.Screenshot.init(this.node);

      var o = function o() {
        $screenshotUtils.Screenshot.btn_image_knife(String(t.currentLevel));
        console.log("截图第" + t.currentLevel + "关");
        var e = t.currentLevel + 1;

        if (e <= Number(r)) {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, e);
          t.initView(!0);
        } else {
          console.log("结束截图");
          t.unschedule(o);
        }
      };

      this.schedule(o, 2);
    } else {
      $tipManager.Tip.show("输入格式应该为: 1-100");
    }
  };

  e.prototype.downloadBtn = function () {
    $xMADUtils.XMAD.downloadBtn();
  };

  e.prototype.collectRoot = function () {
    $popupManager["default"].show($popupConst.PopupConst.Collect);
  };

  e.prototype.mapBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Map);
  };

  e.prototype.roleBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Role);
  };

  e.prototype.limitWelfareBtn = function () {
    console.log("limitWelfareBtn");
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "009"
    });
    $popupManager["default"].show($popupConst.PopupConst.LimitWelfare);
  };

  e.prototype.hideLimitWelfareBtn = function () {
    this.dict.limitWelfareBtn.active = !1;
  };

  e.prototype.isIntNum = function (t) {
    return !isNaN(parseFloat(t));
  };

  e.prototype.getIsMistakeByChance = function (t) {
    var e = 100 * Math.random();
    var n = !1;
    console.log("随机数", e);
    console.log("当前配置概率:" + t);
    return 0 == t ? n : (t >= e && (n = !0), n);
  };

  e.prototype.isInfinitePower = function () {
    var t = !1;

    if ($bmsManager.BMS.getKey("WuxianTiLi")) {
      var e = $userManager.User.get($userConst.UserData.INF_POWER_START_TIME);
      var n = new Date().getTime();

      if (e) {
        if ((n - e) / 1e3 >= 86400) {//
        } else {
          t = !0;
        }
      }
    }

    console.log("是否是无限体力", t);
    return t;
  };

  e.prototype.initPlatformUI = function () {
    if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.TT) {
      this.dict.topRightBar.getComponent(cc.Widget).top = 75;
      this.dict.topRightBar.getComponent(cc.Widget).updateAlignment();

      if ((t = cc.view.getFrameSize().width / cc.view.getFrameSize().height) < 0.5) {
        this.dict.topLeftBar.getComponent(cc.Widget).top = 55, this.dict.topLeftBar.getComponent(cc.Widget).updateAlignment(), this.dict.bottomBar0.getComponent(cc.Widget).bottom = 20, this.dict.bottomBar0.getComponent(cc.Widget).updateAlignment(), this.dict.collectRoot.y = 301.999;
      } else {
        this.dict.collectRoot.y = 401.999;
      }
    }

    if ($platformManager.Platform.getConfig().fitUIType == $platformConst.FitUIType.KS) {
      var t = cc.view.getFrameSize().width / cc.view.getFrameSize().height;
      console.log("长高比", t);

      if (t < 0.5) {
        this.dict.topLeftBar.getComponent(cc.Widget).top = 120;
        this.dict.topLeftBar.getComponent(cc.Widget).left = 140;
        this.dict.topLeftBar.getComponent(cc.Widget).updateAlignment();
      } else {
        this.dict.topLeftBar.getComponent(cc.Widget).top = 55;
        this.dict.topLeftBar.getComponent(cc.Widget).left = 140;
        this.dict.topLeftBar.getComponent(cc.Widget).updateAlignment();
      }

      this.dict.topRightBar.getComponent(cc.Widget).top = 75;
      this.dict.topRightBar.getComponent(cc.Widget).updateAlignment();
      this.dict.addPowerBtn.getComponent(cc.Widget).top = 90;
      this.dict.addPowerBtn.getComponent(cc.Widget).updateAlignment();
    }

    if ($platformManager.Platform.getConfig().hasHomeBtn) {
      this.dict.homeBtn.active = !0;
    } else {
      this.dict.homeBtn.active = !1;
    }
  };

  e.prototype.clickHome = function () {
    if (this.isLoadingScene) {//
    } else {
      this.isLoadingScene = !0;
      cc.game.emit("gamelog", "btn015");
      $sceneManager["default"].loadScene($sceneConst.SceneConst.MAIN);
    }
  };

  e.prototype.clickBack = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Pause, {
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)
    });
    this.stopTimer();
    $popupManager["default"].show($popupConst.PopupConst.SET);
  };

  e.prototype.clickRestart = function (t) {
    cc.game.emit("gamelog", "btn014");
    this.initView(!0, t);
  };

  e.prototype.checkFullAd_noResult = function () {
    cc.game.emit("checkFullAd_noResult", this.currentLevel);
  };

  e.prototype.checkFullAd = function () {
    $eventManager.Event.emit($eventConst["default"].checkFullAd_result);
  };

  __decorate([K(cc.Prefab)], e.prototype, "coloringSpinePrefab", void 0);

  return __decorate([G], e);
}($baseUI["default"]);

exports["default"] = W;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiciIsIiRiYXNlVUkiLCJyZXF1aXJlIiwiJGF1ZGlvQ29uc3QiLCIkZXZlbnRDb25zdCIsIiRwbGF0Zm9ybUNvbnN0IiwiJHBvcHVwQ29uc3QiLCIkc2NlbmVDb25zdCIsIiR1c2VyQ29uc3QiLCIkYXVkaW9NYW5hZ2VyIiwiJGJtc01hbmFnZXIiLCIkZXZlbnRNYW5hZ2VyIiwiJHBsYXRmb3JtTWFuYWdlciIsIiRwb3B1cE1hbmFnZXIiLCIkcmVzTWFuYWdlciIsIiRzY2VuZU1hbmFnZXIiLCIkdXNlck1hbmFnZXIiLCIkdXRpbHMiLCIkY29uZmlnVXRpbHMiLCIkeE1BRFV0aWxzIiwiJGxhbmd1YWdlTWFuYWdlciIsIiRzY3JlZW5zaG90VXRpbHMiLCIkdGlwTWFuYWdlciIsIiRjb25maWdNYW5hZ2VyIiwiJGNvbmZpZ0NvbnN0IiwiJG9QUE9BbmRyb2lkQWRVdGlscyIsIiRvUFBPTWluaUFEVXRpbHMiLCIkc2h1U2h1Q29uc3QiLCIkdGFza01hbmFnZXIiLCIkbWVtb3J5U3RvcmFnZU1hbmFnZXIiLCIkbWVtb3J5U3RvcmFnZUNvbnN0IiwiJGFkanVzdEV2ZW50U3lzdGVtIiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkY2hhbGxlbmdlU3lzdGVtIiwiJHBvb2xVdGlscyIsIiRhc3NldE1hbmFnZXIiLCIkdG9vbHMiLCJ6IiwiY2MiLCJfZGVjb3JhdG9yIiwiRyIsImNjY2xhc3MiLCJLIiwicHJvcGVydHkiLCJXIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImNvbG9yaW5nU3BpbmVQcmVmYWIiLCJfZGF0YSIsImxldmVsIiwibGV2ZWxJRCIsImJtcyIsImZsYWciLCJjbGlja0Ftb3VudE5vZGUiLCJpc1VubG9ja1RpcCIsImN1cnJlbnRMZXZlbCIsImN1cnJlbnRNb2RlIiwidGhlbWVUeXBlIiwiY3VycmVudFRvcExldmVsIiwiZnVsbEFkQ291bnRlciIsImNsaWNrQW1vdW50IiwiY3VycmVudFByZWZhYkFzc2V0IiwidGltZSIsImlzSGFuZGxlIiwibW9kZUxldmVsVGltZSIsInJlc3RhcnRUaW1lcyIsImlzQ2hlY2tUaXBUZXh0Q0QiLCJhbGxIb2xlQ292ZXJBbmltIiwibm9kZV9oYW1tZXIiLCJtZXRhbEFtb3VudCIsImRldmVsb3BJRCIsInJlY29yZFN0YXRlIiwiaXNMb2FkRmFpbCIsImlzVGltZUVuZCIsImN1cnJlbnRMZXZlbFByb2dyZXNzIiwiY3VycmVudExldmVsVG90YWxUaW1lIiwiY3VycmVudExldmVsVGltZSIsImlzTG9hZGluZ1NjZW5lIiwiaXNCYWNrIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsIkFycmF5IiwiZmlsbCIsIm4iLCJCTVMiLCJnZXRLZXkiLCJkaWN0IiwidGltZTIiLCJvcGFjaXR5Iiwid2luZG93IiwiYWRkQnRuT24iLCJjbGlja0hvbWUiLCJjbGlja0JhY2siLCJjbGlja1Jlc3RhcnQyIiwiZGV2ZWxvcEJ0biIsIm9yZGVyQnRuIiwic2NyZWVuc2hvdEJ0biIsImRvd25sb2FkQnRuIiwiY29sbGVjdFJvb3QiLCJsaW1pdFdlbGZhcmVCdG4iLCJtYXBCdG4iLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIlBsYXRmb3JtIiwiaXMiLCJFUGxhdGZvcm0iLCJYSUFPTUlfQU5EUk9JRCIsImNvbnNvbGUiLCJsb2ciLCJYTUFEIiwic2hvd0ludGVyc3RpdGlhbEZlZWRfbXVzdCIsIk9QUE9fQU5EUk9JRCIsIk9QUE9BbmRyb2lkQWQiLCJPUFBPIiwiT1BQT01pbmlBRCIsImxpc3RlbkhhbmRsZSIsImdhbWUiLCJlbWl0IiwiZ2V0TG9jYXRpb24iLCJvIiwiY2xpY2tTcGluZSIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicG9zaXRpb24iLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwiX3RvdWNoTGlzdGVuZXIiLCJzZXRTd2FsbG93VG91Y2hlcyIsIlVzZXIiLCJzZXRUZW1wRGF0YSIsInZlcnNpb24iLCJMYWJlbCIsInN0cmluZyIsImdldENvbmZpZyIsInR0Iiwic29tZSIsImdldFN5c3RlbUluZm9TeW5jIiwiYXBwTmFtZSIsImdldCIsIlVzZXJEYXRhIiwiRW50ZXJTaWRlYmFyIiwiV0VCIiwiaW5pdFZpZXciLCJzY2hlZHVsZSIsIkF1ZGlvIiwicGxheU11c2ljIiwiQXVkaW9Db25zdCIsIkJHTV9NQUlOIiwiV1giLCJoaWRlVUlCdG4iLCJpbml0IiwiaGFzUHVyY2hhc2UiLCJ1bml2ZXJzYWxDYXJkIiwidXBkYXRlU2tpbiIsInNraW5MaXN0Iiwic2V0IiwidXNlU2tpbklETGlzdCIsImdldExvY2tTa2luTGlzdCIsImJhY2tCdG4iLCJib3R0b21CYXIwIiwic2hvcEJ0biIsIm9uRGVzdHJveSIsInN0b3BSZWNvcmRDYXAiLCJoaWRlQ3VzdG9tQWQxIiwiaGlkZUN1c3RvbUFkMiIsImdldFRlbXBEYXRhIiwiRGF0ZSIsImdldFRpbWUiLCJTaHVTaHVDb25zdCIsIkxldmVsX0VuZCIsIkVuZFR5cGUiLCJEdXJhdGlvbiIsImx2IiwiVGVtcERhdGEiLCJDVVJSRU5UX0xFVkVMX0lEIiwibW9kZSIsIkNVUlJFTlRfTU9ERSIsIkV2ZW50IiwiVElQX0JUTl9BTklNIiwidW5zY2hlZHVsZSIsImhhbmRsZUV2ZW50Iiwic2NoZWR1bGVPbmNlIiwicmVzdGFydEJ0bl8xIiwiY2hlY2tGdWxsQWRfbm9SZXN1bHQiLCJDVVJSRU5UX0xFVkVMIiwiY3J5SGVscExpc3QiLCJpIiwiY3J5SGVscFRpbWVzIiwiaW5kZXhPZiIsInB1c2giLCJzaG93SW5zZXJ0IiwiY2xpY2tSZXN0YXJ0Iiwib25SZXN0YXJ0UmVzZXQiLCJvbkVuYWJsZSIsInNob3dCYW5uZXJGZWVkIiwiaW5pdEV2ZW50IiwiaGlkZUxpbWl0V2VsZmFyZUJ0biIsIm9uRGlzYWJsZSIsImhpZGVOYXRpdmVBZHMiLCJjbGVhckV2ZW50Iiwib2ZmIiwic3RhcnRTdWMiLCJzdWMiLCJpc1RpbWVFbmRGdW4iLCJDTElDS19ORVhUIiwiY2xpY2tOZXh0IiwiZGVzdHJveUluc2VydCIsImVudGVyTmV3TW9kZSIsImV4dGVuZFRpbWUiLCJtb3ZlNSIsInVwc2V0IiwiYm9yZUJ0biIsIndvb2RSZW1vdmUiLCJTdG9wVGltZXIiLCJzdG9wVGltZXIiLCJyZXN0b3JlVGltZSIsImFkc1ZpZGVvRmFpbCIsImluc2V0VmlkZW9TdWNjZXNzIiwiaW5zZXRWaWRlb0FzayIsImFkU2tpcHBlZCIsImhhbW1lckJ0biIsInNoYWtlQnRuIiwidW5kb0J0biIsIndpbmdCdG4iLCJoaWdobGlnaHRCdG4iLCJhZGRTdGVwQnRuIiwibW9kZXJhdGVCdG4iLCJyb3RhdGVCdG4iLCJzY3Jld0JveEJ0biIsImZ1bmNfY2hlY2tEZWxOYWlsQ2IiLCJhbGxIb2xlQ292ZXIiLCJjaGVodWlCdG5fYW5pbSIsInJlbW92ZVNjcmV3QnRuIiwiaGlkZUdldENhcmQiLCJhbGxQZXJzb25BbW91bnQiLCJjaGVja1RpcFRleHQiLCJmMjkwODZfYWRkQ29pbiIsIkNvbGxlY3RHb29kc0lEIiwiQ29sbGVjdCIsImluY2x1ZGVzIiwiY29sbGVjdFJhdGUiLCJNYXRoIiwicm91bmQiLCJjb2xsZWN0SWNvbjIiLCJTcHJpdGUiLCJmaWxsUmFuZ2UiLCJsZXZlbFByb1RleHQiLCJsZXZlbFBybyIsImxldmVsUHJvUm9vdCIsInRpcFRleHQiLCJzY2FsZSIsInR3ZWVuIiwidG8iLCJlYXNpbmciLCJkZWxheSIsInN0YXJ0IiwidGlwVGV4dDIiLCJzdG9wQWxsQWN0aW9ucyIsIm5vRmlyc3RBbGxIb2xlIiwiTm9GaXJzdEFsbEhvbGUiLCJUaXAiLCJzaG93IiwiY2FyZEFtb3VudCIsInJld2FyZCIsInVuaW9uIiwicmVwZWF0Rm9yZXZlciIsImNoaWxkcmVuIiwiX2NvbXBvbmVudHMiLCJhZGRBdXRvTW92ZU51bWJlciIsInNodWZmbGUiLCJjaGVja0FkTG9jayIsImlzQ2FuVXNlSGFtbWVyIiwiZ2V0Q2hpbGRCeU5hbWUiLCJ2MyIsImdldElzT3BlbiIsIl9pbml0T3V0TGluZSIsInNoYWtlQW5pbWF0aW9uIiwiZnVuY193aXRoZHJhdyIsImZ1bmNfZmx5IiwiZnVuY19oaWdobGlnaHQiLCJmdW5jX2FkZFN0ZXAiLCJzZXRMZWZ0U2Nyb2xsU3BlZWQiLCJ0dXJuIiwidG9wTGVmdEJhciIsIm51bWJlciIsImZ1bmNfZGVsTmFpbCIsInNlY29uZEZvcm1hdCIsInRpbWVyRnVuIiwiTkVYVF9NT0RFX0lEIiwiQ29uZmlnVXRpbHMiLCJnZXREYXRhQnlJRCIsImFtb3VudCIsImluaXRMZXZlbE9yZGVyIiwiVVBEQVRFX0lTX1VOTE9DS19USVAiLCJBTkRST0lEX0dPT0dMRSIsIklPU19IQUlXQUkiLCJjaGVja0Z1bGxBZCIsImdldERhdGFCeUlEXzk5IiwiZ2V0Tm9BRFN0YXRlIiwidXBkYXRlQ3VycmVudE1vZGVMZXZlbCIsIm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlEIiwibW9kZTBMZXZlbExpc3Rfc3RhZ2UySUQiLCJtb2RlMUxldmVsTGlzdF9zdGFnZTFJRCIsIm1vZGUxTGV2ZWxMaXN0X3N0YWdlMklEIiwiYSIsIkNvbmZpZyIsIkNvbmZpZ0NvbnN0IiwiVEhFTUUiLCJjb25maWdTdWZmaXgiLCJ0aGVuIiwibGVuZ3RoIiwic3RhZ2UxSUQiLCJzdGFnZTJJRCIsInNvcnQiLCJyYW5kb20iLCJtb2RlMkxldmVsTGlzdF9zdGFnZTFJRCIsIm1vZGUyTGV2ZWxMaXN0X3N0YWdlMklEIiwiaGFuZGxlTW9kZUJ5SUQiLCJMRVZFTF9MSVNUIiwic2NyZWVuc2hvdCIsImlzVmFsaWQiLCJyZXN0YXJ0Tm9kZVNob3QiLCJVdGlscyIsIm5vZGVTaG90Iiwic2NyZWVuU2hvdFBpY3R1cmUiLCJkb3duU3BpbmVSb290IiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwibm9kZSIsIngiLCJhZGRDaGlsZCIsInB1dCIsIkxldmVsX1dpbiIsInF1ZXVlIiwidGltZXMiLCJDb25maWdTdWZmaXgiLCJzdWNGdW5jIiwicGxheU5EQlMiLCJzcGluZSIsImluc3RhbmNlIiwibGFuIiwidG9kYXlQYXNzVGltZXMiLCJjYW5UdXJudGFibGVUaW1lcyIsInNoaXBTdGFydFRpbWUiLCJmb3J3YXJkVGltZXMiLCJzZW5kUmFua0RhdGEiLCJjaGFsbGVuZ2VTdGFydFRpbWUiLCJjaGFsbGVuZ2VVbmxvY2tBbW91bnQiLCJzIiwiYyIsIkFMUkVBRFlfUExBWSIsImwiLCJBTFJFQURZX1VOTE9DSyIsImhpZGVBbGwiLCJJc0ZhaWwiLCJQb3B1cENvbnN0IiwiV2luT2xkIiwiV0lOIiwidSIsIkxpbWl0V2VsZmFyZSIsImgiLCJJU19DT01NRU5UIiwibSIsIkNPTU1FTlQiLCJJU19XSU4iLCJpbml0U2tpbkFuZFJvbGUiLCJTa2luTGlzdCIsIlVzZVNraW4iLCJIZXJvTGV2ZWwiLCJmMjkwODZfTGV2ZWxEYXRhIiwidXNlU2tpbiIsImhlcm9MZXZlbCIsImYyOTA4Nl9kcmFnb25CYWxsIiwiZjI5MDg2X2NvaW4iLCJfX2F3YWl0ZXIiLCJiIiwiayIsIkMiLCJNIiwiVCIsIkEiLCJVIiwiQiIsIk8iLCJOIiwiaiIsIlYiLCJfX2dlbmVyYXRvciIsImxhYmVsIiwiYXNzZXRNYW5hZ2VyIiwicmVsZWFzZUFzc2V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwiY2FuVXNlUHJvcHMiLCJUaGVtZVR5cGUiLCJMZXZlbFJlbGl2ZUNvdW50IiwidW5sb2NrUG9zQnRuIiwibmVlZFNob3dMaW1pdFdlbGZhcmVCdG4iLCJ5Iiwic2VudCIsIkxvb3BMZXZlbElEQXJyIiwiaWQiLCJzaHVmZmxlQXJyYXkiLCJmaW5kIiwiTGV2ZWxfUmVzZXQiLCJMZXZlbF9QYWdlIiwiUmVzIiwibG9hZCIsImZvcm1hdFN0ciIsImluc3RhbnRpYXRlIiwiZ2FtZUVycm9yIiwiX2xiVGltZSIsImluaXRCcmFpbiIsIm92ZXJmbG93IiwiT3ZlcmZsb3ciLCJTSFJJTksiLCJ3aWR0aCIsImJpbmQiLCJnZXRBZFJlc3VsdCIsImluaXRDb3VudERvd24iLCJnb29kc0lEIiwiZ29vZHNOYW1lIiwiQ29sbGVjdEdvb2RzTmFtZSIsImdldFJlcyIsIlRleHR1cmUyRCIsImNvbGxlY3RJY29uIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImxldmVsQ29udGVudCIsInN0YXJ0UmVjb3JkQ2FwIiwiY29udGVudCIsImNoZWF0cyIsImluaXRQbGF0Zm9ybVVJIiwiaXNJbmZpbml0ZVBvd2VyIiwiSVNfSU5GSU5JVEVfUE9XRVIiLCJQT1dFUiIsIlBPV0VSX1RZUEUiLCJJTkZJTklURV9QT1dFUiIsIlBPV0VSX1NIT1JUQUdFIiwiUE9XRVJfVVBEQVRFIiwiaGFzVXNlS2V5IiwiY3VycmVudF9rZXlfdHlwZSIsIlNIT1AiLCJ3eCIsImdldElzTWlzdGFrZUJ5Q2hhbmNlIiwid2luZG93SGVpZ2h0Iiwic2hvd0Jsb2NrQWRzIiwidG9wIiwibGVmdCIsImJsb2NrSUQiLCJoaWRlQ2IiLCJoaWRlQmxvY2tBZHMiLCJzZXRUaW1lb3V0IiwicGxheUVmZmVjdCIsInRpbWVFbmQiLCJMZXZlbF9Mb3NlIiwiZmxvb3IiLCJFZGl0Qm94IiwiaXNJbnROdW0iLCJOdW1iZXIiLCJvcmRlcklEIiwic3BsaXQiLCJTY3JlZW5zaG90IiwiYnRuX2ltYWdlX2tuaWZlIiwiU3RyaW5nIiwiTWFwIiwicm9sZUJ0biIsIlJvbGUiLCJidG4iLCJpc05hTiIsInBhcnNlRmxvYXQiLCJJTkZfUE9XRVJfU1RBUlRfVElNRSIsImZpdFVJVHlwZSIsIkZpdFVJVHlwZSIsIlRUIiwidG9wUmlnaHRCYXIiLCJXaWRnZXQiLCJ1cGRhdGVBbGlnbm1lbnQiLCJ2aWV3IiwiZ2V0RnJhbWVTaXplIiwiaGVpZ2h0IiwiYm90dG9tIiwiS1MiLCJhZGRQb3dlckJ0biIsImhhc0hvbWVCdG4iLCJob21lQnRuIiwibG9hZFNjZW5lIiwiU2NlbmVDb25zdCIsIk1BSU4iLCJMZXZlbF9QYXVzZSIsIlNFVCIsImNoZWNrRnVsbEFkX3Jlc3VsdCIsIl9fZGVjb3JhdGUiLCJQcmVmYWIiLCJleHBvcnRzIl0sIm1hcHBpbmdz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LENBQUMsQ0FBQ29DLFNBQW5CLEVBQThCLHFCQUE5QixFQUFxRCxLQUFLLENBQTFELENBQVY7O0VBQ0EsT0FBT2lhLFVBQVUsQ0FBQyxDQUFDM2MsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTVpRE8sQ0E0aURMOUMsT0FBTyxXQTVpREYsQ0FBUjs7QUE2aURBcWYsT0FBTyxXQUFQLEdBQWtCemMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRiYXNlVUkgPSByZXF1aXJlKFwiLi9CYXNlVUlcIik7XG52YXIgJGF1ZGlvQ29uc3QgPSByZXF1aXJlKFwiLi9BdWRpb0NvbnN0XCIpO1xudmFyICRldmVudENvbnN0ID0gcmVxdWlyZShcIi4vRXZlbnRDb25zdFwiKTtcbnZhciAkcGxhdGZvcm1Db25zdCA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtQ29uc3RcIik7XG52YXIgJHBvcHVwQ29uc3QgPSByZXF1aXJlKFwiLi9Qb3B1cENvbnN0XCIpO1xudmFyICRzY2VuZUNvbnN0ID0gcmVxdWlyZShcIi4vU2NlbmVDb25zdFwiKTtcbnZhciAkdXNlckNvbnN0ID0gcmVxdWlyZShcIi4vVXNlckNvbnN0XCIpO1xudmFyICRhdWRpb01hbmFnZXIgPSByZXF1aXJlKFwiLi9BdWRpb01hbmFnZXJcIik7XG52YXIgJGJtc01hbmFnZXIgPSByZXF1aXJlKFwiLi9CbXNNYW5hZ2VyXCIpO1xudmFyICRldmVudE1hbmFnZXIgPSByZXF1aXJlKFwiLi9FdmVudE1hbmFnZXJcIik7XG52YXIgJHBsYXRmb3JtTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtTWFuYWdlclwiKTtcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xudmFyICRyZXNNYW5hZ2VyID0gcmVxdWlyZShcIi4vUmVzTWFuYWdlclwiKTtcbnZhciAkc2NlbmVNYW5hZ2VyID0gcmVxdWlyZShcIi4vU2NlbmVNYW5hZ2VyXCIpO1xudmFyICR1c2VyTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VzZXJNYW5hZ2VyXCIpO1xudmFyICR1dGlscyA9IHJlcXVpcmUoXCIuL1V0aWxzXCIpO1xudmFyICRjb25maWdVdGlscyA9IHJlcXVpcmUoXCIuL0NvbmZpZ1V0aWxzXCIpO1xudmFyICR4TUFEVXRpbHMgPSByZXF1aXJlKFwiLi9YTUFEVXRpbHNcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciAkc2NyZWVuc2hvdFV0aWxzID0gcmVxdWlyZShcIi4vU2NyZWVuc2hvdFV0aWxzXCIpO1xudmFyICR0aXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vVGlwTWFuYWdlclwiKTtcbnZhciAkY29uZmlnTWFuYWdlciA9IHJlcXVpcmUoXCIuL0NvbmZpZ01hbmFnZXJcIik7XG52YXIgJGNvbmZpZ0NvbnN0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29uc3RcIik7XG52YXIgJG9QUE9BbmRyb2lkQWRVdGlscyA9IHJlcXVpcmUoXCIuL09QUE9BbmRyb2lkQWRVdGlsc1wiKTtcbnZhciAkb1BQT01pbmlBRFV0aWxzID0gcmVxdWlyZShcIi4vT1BQT01pbmlBRFV0aWxzXCIpO1xudmFyICRzaHVTaHVDb25zdCA9IHJlcXVpcmUoXCIuL1NodVNodUNvbnN0XCIpO1xudmFyICR0YXNrTWFuYWdlciA9IHJlcXVpcmUoXCIuL1Rhc2tNYW5hZ2VyXCIpO1xudmFyICRtZW1vcnlTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL01lbW9yeVN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICRtZW1vcnlTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi9NZW1vcnlTdG9yYWdlQ29uc3RcIik7XG52YXIgJGFkanVzdEV2ZW50U3lzdGVtID0gcmVxdWlyZShcIi4vQWRqdXN0RXZlbnRTeXN0ZW1cIik7XG52YXIgJGxvY2FsU3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICRsb2NhbFN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZUNvbnN0XCIpO1xudmFyICRjaGFsbGVuZ2VTeXN0ZW0gPSByZXF1aXJlKFwiLi9DaGFsbGVuZ2VTeXN0ZW1cIik7XG52YXIgJHBvb2xVdGlscyA9IHJlcXVpcmUoXCIuL1Bvb2xVdGlsc1wiKTtcbnZhciAkYXNzZXRNYW5hZ2VyID0gcmVxdWlyZShcIi4vQXNzZXRNYW5hZ2VyXCIpO1xudmFyICR0b29scyA9IHJlcXVpcmUoXCIuL1Rvb2xzXCIpO1xudmFyIHogPSBjYy5fZGVjb3JhdG9yO1xudmFyIEcgPSB6LmNjY2xhc3M7XG52YXIgSyA9IHoucHJvcGVydHk7XG52YXIgVyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmNvbG9yaW5nU3BpbmVQcmVmYWIgPSBudWxsO1xuICAgICAgICBlLl9kYXRhID0gbnVsbDtcbiAgICAgICAgZS5sZXZlbCA9IG51bGw7XG4gICAgICAgIGUubGV2ZWxJRCA9IG51bGw7XG4gICAgICAgIGUuYm1zID0gbnVsbDtcbiAgICAgICAgZS5mbGFnID0gbnVsbDtcbiAgICAgICAgZS5jbGlja0Ftb3VudE5vZGUgPSBudWxsO1xuICAgICAgICBlLmlzVW5sb2NrVGlwID0gITE7XG4gICAgICAgIGUuY3VycmVudExldmVsID0gMTtcbiAgICAgICAgZS5jdXJyZW50TW9kZSA9IDE7XG4gICAgICAgIGUudGhlbWVUeXBlID0gMDtcbiAgICAgICAgZS5jdXJyZW50VG9wTGV2ZWwgPSAxO1xuICAgICAgICBlLmZ1bGxBZENvdW50ZXIgPSAwO1xuICAgICAgICBlLmNsaWNrQW1vdW50ID0gMDtcbiAgICAgICAgZS5jdXJyZW50UHJlZmFiQXNzZXQgPSBbXTtcbiAgICAgICAgZS50aW1lID0gMDtcbiAgICAgICAgZS5pc0hhbmRsZSA9ICExO1xuICAgICAgICBlLm1vZGVMZXZlbFRpbWUgPSBbMTgwLCAxODAsIDE4MCwgMTgwLCAxODAsIDE4MCwgMzAwLCAxODAsIDE4MCwgMTgwXTtcbiAgICAgICAgZS5yZXN0YXJ0VGltZXMgPSAwO1xuICAgICAgICBlLmlzQ2hlY2tUaXBUZXh0Q0QgPSAhMTtcbiAgICAgICAgZS5hbGxIb2xlQ292ZXJBbmltID0gITE7XG4gICAgICAgIGUubm9kZV9oYW1tZXIgPSBudWxsO1xuICAgICAgICBlLm1ldGFsQW1vdW50ID0gMDtcbiAgICAgICAgZS5kZXZlbG9wSUQgPSAtMTtcbiAgICAgICAgZS5yZWNvcmRTdGF0ZSA9IDA7XG4gICAgICAgIGUuaXNMb2FkRmFpbCA9ICExO1xuICAgICAgICBlLmlzVGltZUVuZCA9ICExO1xuICAgICAgICBlLmN1cnJlbnRMZXZlbFByb2dyZXNzID0gMTtcbiAgICAgICAgZS5jdXJyZW50TGV2ZWxUb3RhbFRpbWUgPSAxODA7XG4gICAgICAgIGUuY3VycmVudExldmVsVGltZSA9IDA7XG4gICAgICAgIGUuaXNMb2FkaW5nU2NlbmUgPSAhMTtcbiAgICAgICAgZS5pc0JhY2sgPSAhMTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZSA9IG5ldyBBcnJheSgxMDApLmZpbGwoMTgwKTtcbiAgICAgICAgdGhpcy5tb2RlTGV2ZWxUaW1lWzZdID0gMzAwO1xuICAgICAgICB0aGlzLm1vZGVMZXZlbFRpbWVbMjFdID0gMzAwO1xuICAgICAgICB0aGlzLm1vZGVMZXZlbFRpbWVbMjNdID0gMzAwO1xuICAgICAgICB0aGlzLm1vZGVMZXZlbFRpbWVbNzddID0gOTA7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZVs4MV0gPSAxMjA7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZVs4Ml0gPSAxMjA7XG4gICAgICAgIHRoaXMubW9kZUxldmVsVGltZVs5MF0gPSAzMDA7XG4gICAgICAgIHZhciBuID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcInNjcmV3VGltZVwiKTtcbiAgICAgICAgaWYgKG4gPj0gOTAwKSB7XG4gICAgICAgICAgICBuID0gOTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuIDw9IDE4MCkge1xuICAgICAgICAgICAgbiA9IDE4MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoMCA9PSBuKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVMZXZlbFRpbWVbMF0gPSAxOGUxNjtcbiAgICAgICAgICAgIHRoaXMuZGljdC50aW1lMi5vcGFjaXR5ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9kZUxldmVsVGltZVswXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmNvbG9yaW5nU3BpbmVQcmVmYWIgPSB0aGlzLmNvbG9yaW5nU3BpbmVQcmVmYWI7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmRpY3QubGV2ZWw7XG4gICAgICAgIHRoaXMubGV2ZWxJRCA9IHRoaXMuZGljdC5sZXZlbElEO1xuICAgICAgICB0aGlzLmZsYWcgPSB0aGlzLmRpY3QuZmxhZztcbiAgICAgICAgdGhpcy5ibXMgPSB0aGlzLmRpY3QuYm1zO1xuICAgICAgICB0aGlzLmNsaWNrQW1vdW50Tm9kZSA9IHRoaXMuZGljdC5jbGlja0Ftb3VudE5vZGU7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJob21lQnRuXCIsIHRoaXMuY2xpY2tIb21lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImJhY2tCdG5cIiwgdGhpcy5jbGlja0JhY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwicmVzdGFydEJ0blwiLCB0aGlzLmNsaWNrUmVzdGFydDIsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiZGV2ZWxvcEJ0blwiLCB0aGlzLmRldmVsb3BCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwib3JkZXJCdG5cIiwgdGhpcy5vcmRlckJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzY3JlZW5zaG90QnRuXCIsIHRoaXMuc2NyZWVuc2hvdEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJkb3dubG9hZEJ0blwiLCB0aGlzLmRvd25sb2FkQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImNvbGxlY3RSb290XCIsIHRoaXMuY29sbGVjdFJvb3QsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwibGltaXRXZWxmYXJlQnRuXCIsIHRoaXMubGltaXRXZWxmYXJlQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIm1hcEJ0blwiLCB0aGlzLm1hcEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuY2xpY2tBbW91bnROb2RlLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgICAgICAgICBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5YSUFPTUlfQU5EUk9JRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGUuY2xpY2tBbW91bnQgKz0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+asoeaVsFwiLCBlLmNsaWNrQW1vdW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0gKG4gPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiZnVsbENsaWNrTnVtXCIpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPT0gZS5jbGlja0Ftb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkeE1BRFV0aWxzLlhNQUQuc2hvd0ludGVyc3RpdGlhbEZlZWRfbXVzdCgpLCAoZS5jbGlja0Ftb3VudCA9IDApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLk9QUE9fQU5EUk9JRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGUuY2xpY2tBbW91bnQgKz0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+asoeaVsFwiLCBlLmNsaWNrQW1vdW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0gKG4gPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiZnVsbENsaWNrTnVtXCIpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPT0gZS5jbGlja0Ftb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkb1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0ludGVyc3RpdGlhbEZlZWRfbXVzdCgpLCAoZS5jbGlja0Ftb3VudCA9IDApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLk9QUE8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICAgICAgICBlLmNsaWNrQW1vdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54K55Ye75qyh5pWwXCIsIGUuY2xpY2tBbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoMCAhPSAobiA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJmdWxsQ2xpY2tOdW1cIikpICYmIG4gPT0gZS5jbGlja0Ftb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG9QUE9NaW5pQURVdGlscy5PUFBPTWluaUFELnNob3dJbnRlcnN0aXRpYWxGZWVkX211c3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xpY2tBbW91bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUubGlzdGVuSGFuZGxlKCk7XG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiY2xpY2tBbW91bnROb2RlXCIpO1xuICAgICAgICAgICAgICAgIHZhciByID0gdC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBvID0gZS5kaWN0LmNsaWNrU3BpbmUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHIpO1xuICAgICAgICAgICAgICAgIGUuZGljdC5jbGlja1NwaW5lLnBvc2l0aW9uID0gbztcbiAgICAgICAgICAgICAgICBlLmRpY3QuY2xpY2tTcGluZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICBlLmRpY3QuY2xpY2tTcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5jbGlja0Ftb3VudE5vZGUuX3RvdWNoTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tBbW91bnROb2RlLl90b3VjaExpc3RlbmVyLnNldFN3YWxsb3dUb3VjaGVzKCExKTtcbiAgICAgICAgfVxuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImlzTmVlZEluc2VydFwiLCAhMCk7XG4gICAgICAgIHRoaXMuZGljdC52ZXJzaW9uLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJ2XCIgKyAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnZlcnNpb247XG4gICAgICAgIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy50dCAmJlxuICAgICAgICAgICAgW1wiRG91eWluXCIsIFwiZG91eWluX2xpdGVcIiwgXCJsaXZlX3N0cmVhbVwiLCBcImF3ZW1lX2hvdHNvb25cIl0uc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ID09IHdpbmRvdy50dC5nZXRTeXN0ZW1JbmZvU3luYygpLmFwcE5hbWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuRW50ZXJTaWRlYmFyKSB8fCAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliKTmlq3mjInpkq5cIiwgciwgMiAhPSByKTtcbiAgICAgICAgICAgIGlmICgyICE9IHIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYvuekuuaMiemSrlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4jeaYvuekuuaMiemSrlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XRUIpKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLmZ1bGxBZENvdW50ZXIrKztcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHRoaXMubGlzdGVuSGFuZGxlKCk7XG4gICAgICAgICRhdWRpb01hbmFnZXIuQXVkaW8ucGxheU11c2ljKCRhdWRpb0NvbnN0LkF1ZGlvQ29uc3QuQkdNX01BSU4pO1xuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV1gpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiwg+eUqOW5v+WRilwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV0VCKSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmhpZGVVSUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgfVxuICAgICAgICAkdGFza01hbmFnZXIuZGVmYXVsdC5pbml0KCk7XG4gICAgICAgIGlmICgwID09IHRoaXMuY3VycmVudE1vZGUpIHtcbiAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc1B1cmNoYXNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnVuaXZlcnNhbENhcmQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC51bml2ZXJzYWxDYXJkLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVTa2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNraW5MaXN0KSB8fCB7XG4gICAgICAgICAgICAwOiBbMF0sXG4gICAgICAgICAgICAxOiBbMF0sXG4gICAgICAgICAgICAyOiBbOV0sXG4gICAgICAgICAgICAzOiBbMF0sXG4gICAgICAgICAgICA0OiBbMF0sXG4gICAgICAgICAgICA1OiBbMF1cbiAgICAgICAgfTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuc2tpbkxpc3QsIHQpO1xuICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnVzZVNraW5JRExpc3QpIHx8IHtcbiAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAxOiAwLFxuICAgICAgICAgICAgMjogOSxcbiAgICAgICAgICAgIDM6IDAsXG4gICAgICAgICAgICA0OiAwLFxuICAgICAgICAgICAgNTogMFxuICAgICAgICB9O1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS51c2VTa2luSURMaXN0LCBlKTtcbiAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5nZXRMb2NrU2tpbkxpc3QpIHx8IHtcbiAgICAgICAgICAgIDA6IFtdLFxuICAgICAgICAgICAgMTogW10sXG4gICAgICAgICAgICAyOiBbXSxcbiAgICAgICAgICAgIDM6IFtdLFxuICAgICAgICAgICAgNDogW10sXG4gICAgICAgICAgICA1OiBbXVxuICAgICAgICB9O1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5nZXRMb2NrU2tpbkxpc3QsIG4pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZVVJQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kaWN0LmJhY2tCdG4ub3BhY2l0eSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJhY2tCdG4ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYm90dG9tQmFyMC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC5oaWRlVUlCdG4ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLmRpY3Quc2hvcEJ0bi5vcGFjaXR5ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5iYWNrQnRuLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYm90dG9tQmFyMC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5kaWN0LmhpZGVVSUJ0bi5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNob3BCdG4ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnN0b3BSZWNvcmRDYXAoKTtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlQ3VzdG9tQWQxKCk7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUN1c3RvbUFkMigpO1xuICAgICAgICB2YXIgdCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwibGV2ZWxUaW1lXCIpO1xuICAgICAgICB2YXIgZSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHQpIC8gMWUzO1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9FbmQsIHtcbiAgICAgICAgICAgIEVuZFR5cGU6IDIsXG4gICAgICAgICAgICBEdXJhdGlvbjogZSxcbiAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgbW9kZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubGlzdGVuSGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5USVBfQlROX0FOSU0sICExLCBcInRlc3RcIik7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmhhbmRsZUV2ZW50KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5oYW5kbGVFdmVudCwgOCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5Xml6Dmk43kvZxcIik7XG4gICAgICAgIGlmICgkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5UZW1wRGF0YS5pc1VubG9ja1RpcCkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5USVBfQlROX0FOSU0sICEwLCBcInRlc3RcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlc3RhcnRCdG5fMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGVja0Z1bGxBZF9ub1Jlc3VsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbFByb2dyZXNzID0gMTtcbiAgICAgICAgdGhpcy5pbml0VmlldyghMCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja1Jlc3RhcnQyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpO1xuICAgICAgICB2YXIgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcIkxldmVsX0xvc2VfXCIgKyBuICsgXCJfXCIgKyBlKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0VGltZXMgKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2coXCLph43nva7mrKHmlbBcIiwgdGhpcy5yZXN0YXJ0VGltZXMpO1xuICAgICAgICB2YXIgciA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJGcmllbmRIZWxwXCIpO1xuICAgICAgICB2YXIgbyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuY3J5SGVscExpc3QpIHx8IFtdO1xuICAgICAgICB2YXIgaSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLmNyeUhlbHBUaW1lcykgfHwgMDtcbiAgICAgICAgY29uc29sZS5sb2coXCLmo4DmtYtcIiwgdGhpcy5yZXN0YXJ0VGltZXMsIHIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuajgOa1izJcIiwgaSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5qOA5rWLM1wiLCBvLCBlKTtcbiAgICAgICAgaWYgKHRoaXMucmVzdGFydFRpbWVzID49IHIgJiYgaSA8IDIgJiYgLTEgPT0gby5pbmRleE9mKHRoaXMuY3VycmVudExldmVsKSkge1xuICAgICAgICAgICAgby5wdXNoKHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuY3J5SGVscExpc3QsIG8pO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuY3J5SGVscFRpbWVzLCBpICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXN0YXJ0VGltZXMgPj0gcikge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0luc2VydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc3RhcnRUaW1lcyA+PSAzKSB7XG4gICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5USVBfQlROX0FOSU0sICEwKTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFRpbWVzID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaWNrUmVzdGFydCh0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uUmVzdGFydFJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoZWNrRnVsbEFkX25vUmVzdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsUHJvZ3Jlc3MgPSAxO1xuICAgICAgICB0aGlzLmNsaWNrUmVzdGFydDIoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uT1BQT19BTkRST0lEKSkge1xuICAgICAgICAgICAgJG9QUE9BbmRyb2lkQWRVdGlscy5PUFBPQW5kcm9pZEFkLnNob3dCYW5uZXJGZWVkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5PUFBPKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKCRldmVudENvbnN0LmRlZmF1bHQuaGlkZUxpbWl0V2VsZmFyZUJ0biwgdGhpcy5oaWRlTGltaXRXZWxmYXJlQnRuLCB0aGlzKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLk9QUE9fQU5EUk9JRCkpIHtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZU5hdGl2ZUFkcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uT1BQTyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhckV2ZW50KCk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQuaGlkZUxpbWl0V2VsZmFyZUJ0biwgdGhpcy5oaWRlTGltaXRXZWxmYXJlQnRuLCB0aGlzKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5vbihcImdhbWVfc3VjY2VzczFcIiwgdGhpcy5zdGFydFN1YywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJnYW1lX3N1Y2Nlc3MyXCIsIHRoaXMuc3VjLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm9uUmVzdGFydEJ0blwiLCB0aGlzLmNsaWNrUmVzdGFydDIsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwicmVzdGFydEJ0bl8xXCIsIHRoaXMucmVzdGFydEJ0bl8xLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm9uUmVzdGFydFJlc2V0XCIsIHRoaXMub25SZXN0YXJ0UmVzZXQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiaXNUaW1lRW5kXCIsIHRoaXMuaXNUaW1lRW5kRnVuLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vbigkZXZlbnRDb25zdC5kZWZhdWx0LkNMSUNLX05FWFQsIHRoaXMuY2xpY2tOZXh0LCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vbigkZXZlbnRDb25zdC5kZWZhdWx0LmRlc3Ryb3lJbnNlcnQsIHRoaXMuZGVzdHJveUluc2VydCwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5lbnRlck5ld01vZGUsIHRoaXMuZW50ZXJOZXdNb2RlLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vbigkZXZlbnRDb25zdC5kZWZhdWx0LmV4dGVuZFRpbWUsIHRoaXMuZXh0ZW5kVGltZSwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5tb3ZlNSwgdGhpcy5tb3ZlNSwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC51cHNldCwgdGhpcy51cHNldCwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5ib3JlQnRuLCB0aGlzLmJvcmVCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwid29vZFJlbW92ZVwiLCB0aGlzLndvb2RSZW1vdmUsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKCRldmVudENvbnN0LmRlZmF1bHQuU3RvcFRpbWVyLCB0aGlzLnN0b3BUaW1lciwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5yZXN0b3JlVGltZSwgdGhpcy5yZXN0b3JlVGltZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJhZHNWaWRlb0ZhaWxcIiwgdGhpcy5hZHNWaWRlb0ZhaWwsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiaW5zZXRWaWRlb1N1Y2Nlc3NcIiwgdGhpcy5pbnNldFZpZGVvU3VjY2VzcywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJpbnNldFZpZGVvQXNrXCIsIHRoaXMuaW5zZXRWaWRlb0FzaywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJhZFNraXBwZWRcIiwgdGhpcy5hZFNraXBwZWQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiaGFtbWVyQnRuXCIsIHRoaXMuaGFtbWVyQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInNoYWtlQnRuXCIsIHRoaXMuc2hha2VCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwidW5kb0J0blwiLCB0aGlzLnVuZG9CdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwid2luZ0J0blwiLCB0aGlzLndpbmdCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiaGlnaGxpZ2h0QnRuXCIsIHRoaXMuaGlnaGxpZ2h0QnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImFkZFN0ZXBCdG5cIiwgdGhpcy5hZGRTdGVwQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vZGVyYXRlQnRuXCIsIHRoaXMubW9kZXJhdGVCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwicm90YXRlQnRuXCIsIHRoaXMucm90YXRlQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInNjcmV3Qm94QnRuXCIsIHRoaXMuc2NyZXdCb3hCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiZnVuY19jaGVja0RlbE5haWxDYlwiLCB0aGlzLmZ1bmNfY2hlY2tEZWxOYWlsQ2IsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiYWxsSG9sZUNvdmVyXCIsIHRoaXMuYWxsSG9sZUNvdmVyLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImNoZWh1aUJ0bl9hbmltXCIsIHRoaXMuY2hlaHVpQnRuX2FuaW0sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwicmVtb3ZlU2NyZXdCdG5cIiwgdGhpcy5yZW1vdmVTY3Jld0J0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJsaXN0ZW5IYW5kbGVcIiwgdGhpcy5saXN0ZW5IYW5kbGUsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiaGlkZUdldENhcmRcIiwgdGhpcy5oaWRlR2V0Q2FyZCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJhbGxQZXJzb25BbW91bnRcIiwgdGhpcy5hbGxQZXJzb25BbW91bnQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiY2hlY2tUaXBUZXh0XCIsIHRoaXMuY2hlY2tUaXBUZXh0LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImYyOTA4Nl9hZGRDb2luXCIsIHRoaXMuZjI5MDg2X2FkZENvaW4sIHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xlYXJFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJnYW1lX3N1Y2Nlc3MxXCIsIHRoaXMuc3RhcnRTdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImdhbWVfc3VjY2VzczJcIiwgdGhpcy5zdWMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIm9uUmVzdGFydEJ0blwiLCB0aGlzLmNsaWNrUmVzdGFydDIsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIm9uUmVzdGFydFJlc2V0XCIsIHRoaXMub25SZXN0YXJ0UmVzZXQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImlzVGltZUVuZFwiLCB0aGlzLmlzVGltZUVuZEZ1biwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQuQ0xJQ0tfTkVYVCwgdGhpcy5jbGlja05leHQsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LmRlc3Ryb3lJbnNlcnQsIHRoaXMuZGVzdHJveUluc2VydCwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQuZW50ZXJOZXdNb2RlLCB0aGlzLmVudGVyTmV3TW9kZSwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQuZXh0ZW5kVGltZSwgdGhpcy5leHRlbmRUaW1lLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vZmYoJGV2ZW50Q29uc3QuZGVmYXVsdC5tb3ZlNSwgdGhpcy5tb3ZlNSwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQudXBzZXQsIHRoaXMudXBzZXQsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LmJvcmVCdG4sIHRoaXMuYm9yZUJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwid29vZFJlbW92ZVwiLCB0aGlzLndvb2RSZW1vdmUsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LlN0b3BUaW1lciwgdGhpcy5zdG9wVGltZXIsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LnJlc3RvcmVUaW1lLCB0aGlzLnJlc3RvcmVUaW1lLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJhZHNWaWRlb0ZhaWxcIiwgdGhpcy5hZHNWaWRlb0ZhaWwsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImluc2V0VmlkZW9TdWNjZXNzXCIsIHRoaXMuaW5zZXRWaWRlb1N1Y2Nlc3MsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImluc2V0VmlkZW9Bc2tcIiwgdGhpcy5pbnNldFZpZGVvQXNrLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJhZFNraXBwZWRcIiwgdGhpcy5hZFNraXBwZWQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImhhbW1lckJ0blwiLCB0aGlzLmhhbW1lckJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwic2hha2VCdG5cIiwgdGhpcy5zaGFrZUJ0biwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwidW5kb0J0blwiLCB0aGlzLnVuZG9CdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIndpbmdCdG5cIiwgdGhpcy53aW5nQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJoaWdobGlnaHRCdG5cIiwgdGhpcy5oaWdobGlnaHRCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImFkZFN0ZXBCdG5cIiwgdGhpcy5hZGRTdGVwQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJtb2RlcmF0ZUJ0blwiLCB0aGlzLm1vZGVyYXRlQnRuLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJyb3RhdGVCdG5cIiwgdGhpcy5yb3RhdGVCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInNjcmV3Qm94QnRuXCIsIHRoaXMuc2NyZXdCb3hCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImZ1bmNfY2hlY2tEZWxOYWlsQ2JcIiwgdGhpcy5mdW5jX2NoZWNrRGVsTmFpbENiLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJhbGxIb2xlQ292ZXJcIiwgdGhpcy5hbGxIb2xlQ292ZXIsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImNoZWh1aUJ0bl9hbmltXCIsIHRoaXMuY2hlaHVpQnRuX2FuaW0sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInJlbW92ZVNjcmV3QnRuXCIsIHRoaXMucmVtb3ZlU2NyZXdCdG4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImxpc3RlbkhhbmRsZVwiLCB0aGlzLmxpc3RlbkhhbmRsZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiaGlkZUdldENhcmRcIiwgdGhpcy5oaWRlR2V0Q2FyZCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiYWxsUGVyc29uQW1vdW50XCIsIHRoaXMuYWxsUGVyc29uQW1vdW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJjaGVja1RpcFRleHRcIiwgdGhpcy5jaGVja1RpcFRleHQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImYyOTA4Nl9hZGRDb2luXCIsIHRoaXMuZjI5MDg2X2FkZENvaW4sIHRoaXMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZjI5MDg2X2FkZENvaW4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5hbGxQZXJzb25BbW91bnQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPiAxKSB7XG4gICAgICAgICAgICB2YXIgbiA9ICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdEdvb2RzSUQpO1xuICAgICAgICAgICAgdmFyIHIgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2xsZWN0KSB8fCB7XG4gICAgICAgICAgICAgICAgMDogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIW4gfHwgclswXS5pbmNsdWRlcyhuKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jb2xsZWN0Um9vdC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT0gdGhpcy5jdXJyZW50TW9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29sbGVjdFJvb3QuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jb2xsZWN0UmF0ZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQoKChlIC0gdCkgLyBlKSAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNvbGxlY3RJY29uMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSAoZSAtIHQpIC8gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY29sbGVjdFJvb3QuYWN0aXZlID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWN0LmxldmVsUHJvVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0O1xuICAgICAgICB0aGlzLmRpY3QubGV2ZWxQcm8uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdCAvIGU7XG4gICAgICAgIGlmICgwID09IHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5sZXZlbFByb1Jvb3QuYWN0aXZlID0gITE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrVGlwVGV4dCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKDAgPT0gdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGVja1RpcFRleHRDRCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNDaGVja1RpcFRleHRDRCA9ICEwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpcFRleHQuc2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpcFRleHQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGV4dC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5kaWN0LnRpcFRleHQpXG4gICAgICAgICAgICAgICAgLnRvKFxuICAgICAgICAgICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZGVsYXkoMS41KVxuICAgICAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZS5pc0NoZWNrVGlwVGV4dENEID0gITE7XG4gICAgICAgICAgICB9LCA2MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QudGlwVGV4dDIuc2NhbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpcFRleHQyLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRpcFRleHQyLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmRpY3QudGlwVGV4dDIpXG4gICAgICAgICAgICAgICAgLnRvKFxuICAgICAgICAgICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZGVsYXkoMS41KVxuICAgICAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnJlbW92ZVNjcmV3QnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QucmVtb3ZlU2NyZXdCdG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5kaWN0LnJlbW92ZVNjcmV3QnRuLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5hbGxIb2xlQ292ZXJBbmltID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jaGVodWlCdG5fYW5pbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbGxIb2xlQ292ZXJBbmltID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlR2V0Q2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaWN0Lm5vRmlyc3RBbGxIb2xlLmFjdGl2ZSA9ICExO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5yZXN0b3JlVGltZSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hbGxIb2xlQ292ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWxsSG9sZUNvdmVyQW5pbSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsSG9sZUNvdmVyQW5pbSA9ICEwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbGxIb2xlQ292ZXItLS0tLS0tXCIpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICEkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Ob0ZpcnN0QWxsSG9sZSkgJiZcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc1B1cmNoYXNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Ob0ZpcnN0QWxsSG9sZSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm5vRmlyc3RBbGxIb2xlLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi5b6I6YGX5oa+77yM5rKh5pyJ5Y+v5pON5L2c5q2l6aqk5LqG44CCXCIpO1xuICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LlN0b3BUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9ICgkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50KSB8fCAwKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhcmRBbW91bnQsIHQpO1xuICAgICAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LnJld2FyZCwgW1tcImNhcmRcIiwgMV1dKTtcbiAgICAgICAgICAgICAgICB9LCAxLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5yZW1vdmVTY3Jld0J0bi5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QucmVtb3ZlU2NyZXdCdG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QucmVtb3ZlU2NyZXdCdG4uc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZGljdC5yZW1vdmVTY3Jld0J0bilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMjUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0LmRpY3QucmVtb3ZlU2NyZXdCdG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdC5kaWN0LnJlbW92ZVNjcmV3QnRuLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdC5hbGxIb2xlQ292ZXJBbmltID0gITE7XG4gICAgICAgICAgICAgICAgfSwgNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm1vdmU1ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmFkZEF1dG9Nb3ZlTnVtYmVyKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cHNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uc2h1ZmZsZSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5zaHVmZmxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmJvcmVCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5ib3JlQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5jaGVja0FkTG9jaykge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5jaGVja0FkTG9jaygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW1tZXJCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXTtcbiAgICAgICAgdC5pc0NhblVzZUhhbW1lciA9ICEwO1xuICAgICAgICB0Lm5vZGVfaGFtbWVyLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpLnBvc2l0aW9uID0gY2MudjMoKTtcbiAgICAgICAgdC5ub2RlX2hhbW1lci5hY3RpdmUgPSAhMDtcbiAgICAgICAgdmFyIGUgPSB0Lm5vZGVfaGFtbWVyLmdldENoaWxkQnlOYW1lKFwiaW1nXCIpO1xuICAgICAgICBjYy50d2VlbihlKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgY2NcbiAgICAgICAgICAgICAgICAgICAgLnR3ZWVuKClcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRJc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuX2luaXRPdXRMaW5lID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuc2hha2VCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLnNoYWtlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLnNoYWtlQW5pbWF0aW9uKDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51bmRvQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX3dpdGhkcmF3KSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmZ1bmNfd2l0aGRyYXcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUud2luZ0J0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uZnVuY19mbHkpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uZnVuY19mbHkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlnaGxpZ2h0QnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2hpZ2hsaWdodCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2hpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZGRTdGVwQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5mdW5jX2FkZFN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uZnVuY19hZGRTdGVwKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm1vZGVyYXRlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1swXS5zZXRMZWZ0U2Nyb2xsU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uc2V0TGVmdFNjcm9sbFNwZWVkKDMwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucm90YXRlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbC5jaGlsZHJlblswXS5fY29tcG9uZW50c1sxXS50dXJuKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzFdLnR1cm4oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2NyZXdCb3hCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5ib3R0b21CYXIwLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5kaWN0Lm51bWJlci5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwuY2hpbGRyZW5bMF0uX2NvbXBvbmVudHNbMF0uZnVuY19kZWxOYWlsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLmNoaWxkcmVuWzBdLl9jb21wb25lbnRzWzBdLmZ1bmNfZGVsTmFpbCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5mdW5jX2NoZWNrRGVsTmFpbENiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QuYm90dG9tQmFyMC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdGhpcy5kaWN0LnRvcExlZnRCYXIuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC5udW1iZXIuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMucmVzdG9yZVRpbWUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmV4dGVuZFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsVGltZSA9IDYwO1xuICAgICAgICB0aGlzLmRpY3QudGltZTIuYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC50aW1lMi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLnNlY29uZEZvcm1hdCh0aGlzLmN1cnJlbnRMZXZlbFRpbWUpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXJGdW4sIDEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3RvcFRpbWVyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9ICExO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpY3QudGltZTIuYWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaaguWBnOaXtumXtFwiKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVzdG9yZVRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpY3QudGltZTIuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lckZ1bik7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXJGdW4sIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZHNWaWRlb0ZhaWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJsZXZlbF9pbnRlcmZhaWxfXCIgKyB0aGlzLmN1cnJlbnRNb2RlICsgXCJfXCIgKyB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5hZFNraXBwZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5pbnNldFZpZGVvU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImxldmVsX2ludGVycGxheV9cIiArIHRoaXMuY3VycmVudE1vZGUgKyBcIl9cIiArIHRoaXMuY3VycmVudExldmVsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluc2V0VmlkZW9Bc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJsZXZlbF9pbnRlcl9cIiArIHRoaXMuY3VycmVudE1vZGUgKyBcIl9cIiArIHRoaXMuY3VycmVudExldmVsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmRlc3Ryb3lJbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZGVzdHJveUluc2VydCgpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuTkVYVF9NT0RFX0lEKTtcbiAgICAgICAgaWYgKDEgIT0gdGhpcy50aGVtZVR5cGUpIHtcbiAgICAgICAgICAgICRjb25maWdVdGlscy5Db25maWdVdGlscy5nZXREYXRhQnlJRCh0aGlzLmN1cnJlbnRNb2RlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHQuY3VycmVudFRvcExldmVsID0gZS5hbW91bnQ7XG4gICAgICAgICAgICAgICAgaWYgKHQuY3VycmVudExldmVsICsgMSA+IHQuY3VycmVudFRvcExldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyA5ZCO5LiA5YWzXCIpO1xuICAgICAgICAgICAgICAgICAgICB0LmluaXRMZXZlbE9yZGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCB0LmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSVNfVU5MT0NLX1RJUCk7XG4gICAgICAgICAgICAgICAgICAgIHQuaW5pdFZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5BTkRST0lEX0dPT0dMRSkgfHxcbiAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uSU9TX0hBSVdBSSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwiaXNOZWVkSW5zZXJ0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNoZWNrRnVsbEFkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4jemcgOimgeW3ruivhFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImlzTmVlZEluc2VydFwiLCAhMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkY29uZmlnVXRpbHMuQ29uZmlnVXRpbHMuZ2V0RGF0YUJ5SURfOTkodGhpcy5jdXJyZW50TW9kZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0LmN1cnJlbnRUb3BMZXZlbCA9IGUuYW1vdW50O1xuICAgICAgICAgICAgICAgIGlmICh0LmN1cnJlbnRMZXZlbCArIDEgPiB0LmN1cnJlbnRUb3BMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacgOWQjuS4gOWFs1wiKTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUsIHQuY3VycmVudE1vZGUpO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIDEpO1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSVNfVU5MT0NLX1RJUCk7XG4gICAgICAgICAgICAgICAgICAgIHQuaW5pdFZpZXcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIHQuY3VycmVudExldmVsICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LlVQREFURV9JU19VTkxPQ0tfVElQKTtcbiAgICAgICAgICAgICAgICAgICAgdC5pbml0VmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLkFORFJPSURfR09PR0xFKSB8fFxuICAgICAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5JT1NfSEFJV0FJKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJpc05lZWRJbnNlcnRcIikgfHwgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXROb0FEU3RhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5jaGVja0Z1bGxBZCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuI3pnIDopoHlt67or4RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJpc05lZWRJbnNlcnRcIiwgITApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0TGV2ZWxPcmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV0VCKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50TW9kZUxldmVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTFJRCk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTJJRCk7XG4gICAgICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICAgICAgdmFyIG4gPSBbXTtcbiAgICAgICAgICAgIHZhciByID0gW107XG4gICAgICAgICAgICB2YXIgbyA9IFtdO1xuICAgICAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICBpZiAoMCA9PSB0aGlzLmN1cnJlbnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldChcbiAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgMCArICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuY29uZmlnU3VmZml4XG4gICAgICAgICAgICAgICAgKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgci5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSByW29dO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wdXNoKGkuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5wdXNoKGkuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGUuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG4uc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlELCBlKTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UySUQsIG4pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+ieuuS4nVwiLCBlLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgdC51cGRhdGVDdXJyZW50TW9kZUxldmVsKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgxID09IHRoaXMuY3VycmVudE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldCgkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyAxKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5wdXNoKGkuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucHVzaChpLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMUlELCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMklELCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5riF55CGXCIsIHIsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC51cGRhdGVDdXJyZW50TW9kZUxldmVsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgyID09IHRoaXMuY3VycmVudE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgMikudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChyLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHIuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMkxldmVsTGlzdF9zdGFnZTFJRCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTJMZXZlbExpc3Rfc3RhZ2UySUQsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5raI6Zmk566t5aS0XCIsIGksIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudXBkYXRlQ3VycmVudE1vZGVMZXZlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1vZGVCeUlEKHRoaXMuY3VycmVudE1vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW5kbGVNb2RlQnlJRCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdmFyIG4gPSBbXTtcbiAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldCgkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyB0KS50aGVuKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IG9baV07XG4gICAgICAgICAgICAgICAgbi5wdXNoKGEuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgIHIucHVzaChhLnN0YWdlMklEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4uc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHIuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhW1wibW9kZVwiICsgdCArIFwiTGV2ZWxMaXN0X3N0YWdlMUlEXCJdLCBuKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhW1wibW9kZVwiICsgdCArIFwiTGV2ZWxMaXN0X3N0YWdlMklEXCJdLCByKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5qih5byPXCIsIHQsIG4sIHIpO1xuICAgICAgICAgICAgZS51cGRhdGVDdXJyZW50TW9kZUxldmVsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlQ3VycmVudE1vZGVMZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5MRVZFTF9MSVNUKSB8fCB7fTtcbiAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoXCJsZXZlbExpc3RMb29wVGltZXNcIikgfHwge307XG4gICAgICAgIGlmIChlW3RoaXMuY3VycmVudE1vZGVdKSB7XG4gICAgICAgICAgICBlW3RoaXMuY3VycmVudE1vZGVdICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlW3RoaXMuY3VycmVudE1vZGVdID0gMTtcbiAgICAgICAgfVxuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJsZXZlbExpc3RMb29wVGltZXNcIiwgZSk7XG4gICAgICAgIHRbdGhpcy5jdXJyZW50TW9kZV0gPSAxO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSwgdGhpcy5jdXJyZW50TW9kZSk7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgMSk7XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QsIHQpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSVNfVU5MT0NLX1RJUCk7XG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmVudGVyTmV3TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuVVBEQVRFX0lTX1VOTE9DS19USVApO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdGFydFN1YyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5zaG90KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zY3JlZW5zaG90ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHQuZGljdC5sZXZlbCkpIHtcbiAgICAgICAgICAgICAgICB0LnJlc3RhcnROb2RlU2hvdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVzdGFydE5vZGVTaG90ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuaIquWbvlwiKTtcbiAgICAgICAgJHV0aWxzLlV0aWxzLm5vZGVTaG90KHRoaXMuZGljdC5sZXZlbCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgd2luZG93LnNjcmVlblNob3RQaWN0dXJlID0gdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS53b29kUmVtb3ZlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5Ugd29vZFJlbW92ZVwiKTtcbiAgICAgICAgdmFyIGUgPSAkcG9vbFV0aWxzLmRlZmF1bHQuZ2V0KHRoaXMuZGljdC5kb3duU3BpbmVSb290KTtcbiAgICAgICAgZS5hY3RpdmUgPSAhMDtcbiAgICAgICAgdmFyIG4gPSB0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodC5wb3NpdGlvbik7XG4gICAgICAgIHZhciByID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG4pO1xuICAgICAgICBpZiAoci54IDw9IC0yNTApIHtcbiAgICAgICAgICAgIHIueCA9IC0yNTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIueCA+PSAyNTApIHtcbiAgICAgICAgICAgIHIueCA9IDI1MDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIm5Qb3MueFwiLCByLngpO1xuICAgICAgICBlLnggPSByLng7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChlKTtcbiAgICAgICAgZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCAhMSk7XG4gICAgICAgIGUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgITEpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkcG9vbFV0aWxzLmRlZmF1bHQucHV0KGUpO1xuICAgICAgICB9LCAxMCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc3RvcFJlY29yZENhcCgpO1xuICAgICAgICB0aGlzLmRpY3QudGltZTIuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuKTtcbiAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImxldmVsVGltZVwiKTtcbiAgICAgICAgdmFyIGUgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0KSAvIDFlMztcbiAgICAgICAgdmFyIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpO1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9XaW4sIHtcbiAgICAgICAgICAgIGx2OiBuLFxuICAgICAgICAgICAgbW9kZTogdGhpcy5jdXJyZW50TW9kZSxcbiAgICAgICAgICAgIHF1ZXVlOiB0aGlzLmN1cnJlbnRMZXZlbCxcbiAgICAgICAgICAgIHRpbWVzOiBlLFxuICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWNGdW5jKCk7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsUHJvZ3Jlc3MgPSAxO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGxheU5EQlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdGhpcy5kaWN0LnNwaW5lLmFjdGl2ZSA9ICEwO1xuICAgICAgICBpZiAoXCJ0Y1wiID09ICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5pbnN0YW5jZS5sYW4pIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5zcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvbjJcIiwgITEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFwiZW5cIiA9PSAkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuaW5zdGFuY2UubGFuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNwaW5lLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uNFwiLCAhMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChcImphXCIgPT0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0Lmluc3RhbmNlLmxhbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb24zXCIsICExKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgITEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LmRpY3Quc3BpbmUuYWN0aXZlID0gITE7XG4gICAgICAgIH0sIDEuNSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdWNGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuY3VycmVudExldmVsICsgMTtcbiAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5MRVZFTF9MSVNUKSB8fCB7fTtcbiAgICAgICAgaWYgKGVbMF0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlWzBdID0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIm5leHRMZXZlbFwiLCB0LCBcImxpc3RcIiwgZSk7XG4gICAgICAgIGlmICh0ID4gZVt0aGlzLmN1cnJlbnRNb2RlXSkge1xuICAgICAgICAgICAgZVt0aGlzLmN1cnJlbnRNb2RlXSA9IHQ7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5MRVZFTF9MSVNULCBlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5paw6YCa5YWzXCIpO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJuZXdQYXNzXCIsICEwKTtcbiAgICAgICAgICAgICRhZGp1c3RFdmVudFN5c3RlbS5kZWZhdWx0LnRvZGF5UGFzc1RpbWVzKCk7XG4gICAgICAgICAgICB2YXIgbiA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNhblR1cm50YWJsZVRpbWVzKSB8fCAwO1xuICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FuVHVybnRhYmxlVGltZXMsIG4gKyAxKTtcbiAgICAgICAgICAgIHZhciByID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuc2hpcFN0YXJ0VGltZSkgfHwgMDtcbiAgICAgICAgICAgIHZhciBvID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuZm9yd2FyZFRpbWVzKSB8fCAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaGlwU3RhcnRUaW1lXCIsIG8pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaGlwU3RhcnRUaW1lXCIsIHIpO1xuICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICBvICs9IDE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaGlwU3RhcnRUaW1lMzIzMzMzXCIsIHIpO1xuICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmZvcndhcmRUaW1lcywgbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcIm5ld1Bhc3NcIiwgITEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwicmVjb3JkXCIpIHx8IDA7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwicmVjb3JkXCIsIGkpO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNlbmRSYW5rRGF0YSgpO1xuICAgICAgICBpZiAoMCA9PSB0aGlzLmN1cnJlbnRNb2RlICYmIGVbdGhpcy5jdXJyZW50TW9kZV0gPj0gNSkge1xuICAgICAgICAgICAgaWYgKDAgPT0gKCRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNoYWxsZW5nZVN0YXJ0VGltZSkgfHwgMCkpIHtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jaGFsbGVuZ2VTdGFydFRpbWUsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICAkY2hhbGxlbmdlU3lzdGVtLmRlZmF1bHQuaW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGEgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jaGFsbGVuZ2VVbmxvY2tBbW91bnQpIHx8IDA7XG4gICAgICAgICAgICBhICs9IDE7XG4gICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jaGFsbGVuZ2VVbmxvY2tBbW91bnQsIGEpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmdhbWUuZW1pdChcIlRhc2tGaW5pc2hcIik7XG4gICAgICAgIGlmICgtMSAhPSAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmZsYWcuaW5kZXhPZihcInR0XCIpKSB7XG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMuY3VycmVudE1vZGU7XG4gICAgICAgICAgICB2YXIgYyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfUExBWSkgfHwge307XG4gICAgICAgICAgICBpZiAoY1tzXSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNbc10gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgtMSA9PSBjW3NdLmluZGV4T2YodGhpcy5jdXJyZW50TGV2ZWwpKSB7XG4gICAgICAgICAgICAgICAgY1tzXS5wdXNoKHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfUExBWSwgYyk7XG4gICAgICAgICAgICB2YXIgbCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfVU5MT0NLKSB8fCB7fTtcbiAgICAgICAgICAgIGlmIChsW3NdKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbFtzXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC0xID09IGxbc10uaW5kZXhPZih0KSkge1xuICAgICAgICAgICAgICAgIGxbc10ucHVzaCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfVU5MT0NLLCBsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5BTkRST0lEX0dPT0dMRSkgfHxcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLklPU19IQUlXQUkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGdWxsQWQoKTtcbiAgICAgICAgfVxuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZUFsbCgpO1xuICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LklzRmFpbCwgMCk7XG4gICAgICAgIGlmICgxID09IHRoaXMudGhlbWVUeXBlKSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0Lldpbk9sZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LldJTik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5FbnRlclNpZGViYXIpIHx8IDA7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA+PSAzICYmIHRoaXMuY3VycmVudExldmVsICUgMyA9PSAwICYmIDIgIT0gdSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuTGltaXRXZWxmYXJlKTtcbiAgICAgICAgICAgIH0sIDAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGggPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5JU19DT01NRU5UKSB8fCAwO1xuICAgICAgICB2YXIgbSA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJldmFsdWF0ZWx2XCIpO1xuICAgICAgICBpZiAoMCAhPSB0aGlzLmN1cnJlbnRNb2RlIHx8IGggfHwgLTEgPT0gbS5pbmRleE9mKHRoaXMuY3VycmVudExldmVsKSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LkNPTU1FTlQpO1xuICAgICAgICAgICAgfSwgMC40KTtcbiAgICAgICAgfVxuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLklTX1dJTiwgITEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFNraW5BbmRSb2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlNraW5MaXN0KSB8fCB7fTtcbiAgICAgICAgaWYgKHRbMF0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0WzBdID0gWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0WzFdKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdFsxXSA9IFswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlVzZVNraW4pIHx8IHt9O1xuICAgICAgICBpZiAoZVswXSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVbMF0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlWzFdKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZVsxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5IZXJvTGV2ZWwpIHx8IDE7XG4gICAgICAgIHdpbmRvdy5mMjkwODZfTGV2ZWxEYXRhID0ge1xuICAgICAgICAgICAgdXNlU2tpbjogZSxcbiAgICAgICAgICAgIGhlcm9MZXZlbDogblxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuZjI5MDg2X2RyYWdvbkJhbGwgPSAwO1xuICAgICAgICB3aW5kb3cuZjI5MDg2X2NvaW4gPSAwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFZpZXcgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gITE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9ICExO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICB2YXIgbDtcbiAgICAgICAgICAgIHZhciBoO1xuICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICB2YXIgYjtcbiAgICAgICAgICAgIHZhciBrO1xuICAgICAgICAgICAgdmFyIEM7XG4gICAgICAgICAgICB2YXIgTTtcbiAgICAgICAgICAgIHZhciBUO1xuICAgICAgICAgICAgdmFyIEE7XG4gICAgICAgICAgICB2YXIgVTtcbiAgICAgICAgICAgIHZhciBCO1xuICAgICAgICAgICAgdmFyIE87XG4gICAgICAgICAgICB2YXIgTjtcbiAgICAgICAgICAgIHZhciBqO1xuICAgICAgICAgICAgdmFyIFYgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uICh6KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh6LmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQcmVmYWJBc3NldC5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCB0aGlzLmN1cnJlbnRQcmVmYWJBc3NldC5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVsZWFzZUFzc2V0KHRoaXMuY3VycmVudFByZWZhYkFzc2V0W25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJlZmFiQXNzZXQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHiuaUvumihOWItlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09IHRoaXMubGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsLmRlc3Ryb3lBbGxDaGlsZHJlbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtZS5jYW5Vc2VQcm9wcyA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0U2tpbkFuZFJvbGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5IYW5kbGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNDaGVja1RpcFRleHRDRCA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY3VycmVudE1vZGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jdXJyZW50TGV2ZWwgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMudGhlbWVUeXBlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuVGhlbWVUeXBlKSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuYWxsSG9sZUNvdmVyQW5pbSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5MZXZlbFJlbGl2ZUNvdW50LCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PSDkuLvpopg6IFwiICsgdGhpcy5jdXJyZW50TW9kZSArIFwiIOWFs+WNoTogXCIgKyB0aGlzLmN1cnJlbnRMZXZlbCArIFwiID09XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09IOS4u+mimOexu+WeizogXCIgKyB0aGlzLnRoZW1lVHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImlzUmVtb3ZlXCIsICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZVJlc3RhcnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubGV2ZWxQcm9Sb290LmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC51bmxvY2tQb3NCdG4uYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxID09IHRoaXMuY3VycmVudExldmVsICYmIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChjb25zb2xlLmxvZyhcImxpbWl0V2VsZmFyZUJ0bjExMVwiLCB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaW1pdFdlbGZhcmVCdG4xMTEtLS0tXCIsIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbmRvdy5uZWVkU2hvd0xpbWl0V2VsZmFyZUJ0biA9ICEwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogd2luZG93Lm5lZWRTaG93TGltaXRXZWxmYXJlQnRuICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb25zb2xlLmxvZyhcImxpbWl0V2VsZmFyZUJ0bjIyMlwiLCB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICEwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcImxldmVsc3BhY2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobyA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJpc0NoZWNrXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbGV2ZWxzcGFjZS1pc0NoZWNrXVwiLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSBvICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoLTEgPT0gclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHRoaXMuZGljdC5kb3dubG9hZEJ0bi5hY3RpdmUgPSAhMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuY3VycmVudExldmVsICUgKHIgKyAxKSA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKHRoaXMuZGljdC5kb3dubG9hZEJ0bi55ID0gNTE0Ljc3OCksICh0aGlzLmRpY3QuZG93bmxvYWRCdG4uYWN0aXZlID0gITApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMuZGljdC5kb3dubG9hZEJ0bi5hY3RpdmUgPSAhMSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcImxldmVsTGlzdExvb3BUaW1lc1wiKSB8fCB7fSlbdGhpcy5jdXJyZW50TW9kZV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpW3RoaXMuY3VycmVudE1vZGVdID0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0gdGhpcy5jdXJyZW50TW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbMywgMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9kZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuY29uZmlnU3VmZml4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gei5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVt0aGlzLmN1cnJlbnRNb2RlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShoID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuTG9vcExldmVsSURBcnIpIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwOyBtIDwgbC5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgIT0gKGIgPSBsW21dKS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgucHVzaChiLmxldmVsSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAkdG9vbHMuZGVmYXVsdC5zaHVmZmxlQXJyYXkoaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lkxvb3BMZXZlbElEQXJyLCBoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhbdGhpcy5jdXJyZW50TGV2ZWwgLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gaFt0aGlzLmN1cnJlbnRMZXZlbCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBoW2gubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gbC5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmlkID09IFYuY3VycmVudExldmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxldmVsSUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgdGhpcy5jdXJyZW50TW9kZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gei5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gbC5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuaWQgPT0gVi5jdXJyZW50TGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5sZXZlbElEO1xuICAgICAgICAgICAgICAgICAgICAgICAgei5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09IOW8gOWPkUlEOiBcIiArIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9SZXNldCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsdjogYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogdGhpcy5jdXJyZW50TW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWU6IHRoaXMuY3VycmVudExldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LkxldmVsX1BhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHY6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IHRoaXMuY3VycmVudE1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlOiB0aGlzLmN1cnJlbnRMZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzUHVyY2hhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2hvcEJ0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBcInpxZGRuX3poYi9wcmVmYWIvbGV2ZWwvenFkZG5femhiX2xldmVsXCIgKyBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lELCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXNNYW5hZ2VyLlJlcy5sb2FkKGspLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKFYsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSB0aGlzLmN1cnJlbnRMZXZlbCArIGlbdGhpcy5jdXJyZW50TW9kZV0gKiBsLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm51bWJlci5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFwi56ysJWTlhbNcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuY3VycmVudExldmVsID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm1hcEJ0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoOCA9PSB0aGlzLmN1cnJlbnRNb2RlICYmIG4uX2NvbXBvbmVudHNbMF0uZ2FtZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlvlvLnnkIPmqKHlvI9dIOS/ruaUuVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uZ2FtZUVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm9uUmVzdGFydEJ0blwiLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLl9jb21wb25lbnRzWzBdLl9sYlRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uX2xiVGltZS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLl9jb21wb25lbnRzWzFdICYmIG4uX2NvbXBvbmVudHNbMV0uaW5pdEJyYWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9jb21wb25lbnRzWzFdLmluaXRCcmFpbiA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLm92ZXJmbG93ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTks7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikud2lkdGggPSA3MjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcImxibFRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkub3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKS53aWR0aCA9IDcyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSB0aGlzLmN1cnJlbnRMZXZlbFByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxUaXRsZVwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5fY29tcG9uZW50c1swXS5nZXRJc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uZ2V0SXNPcGVuID0gdGhpcy5nZXRJc09wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0uZ2V0QWRSZXN1bHQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9jb21wb25lbnRzWzBdLm5vZGVfaGFtbWVyLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uX2NvbXBvbmVudHNbMF0ubm9kZV9oYW1tZXIuY2hpbGRyZW5bMV0uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5fY29tcG9uZW50c1swXS5mdW5jX2hpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcImdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ6aGFuZGFuXCIpLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXRDaGlsZEJ5TmFtZShcImdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ6aGFuZGFuXCIpLnkgPSAxZTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLl9jb21wb25lbnRzWzBdLmluaXRDb3VudERvd24gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcmVmYWJBc3NldC5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LkNvbGxlY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsID4gMSAmJiByW3RoaXMuY3VycmVudExldmVsIC0gMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKChvID0gclt0aGlzLmN1cnJlbnRMZXZlbCAtIDJdLmdvb2RzSUQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9IHJbdGhpcy5jdXJyZW50TGV2ZWwgLSAyXS5nb29kc05hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdEdvb2RzSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2xsZWN0R29vZHNOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFzc2V0TWFuYWdlci5kZWZhdWx0LmdldFJlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbWVCdW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHR1cmUvY29sbGVjdC9cIiArIG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuVGV4dHVyZTJEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFszLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNvbGxlY3RJY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5TcHJpdGVGcmFtZShjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNvbGxlY3RJY29uMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2MuU3ByaXRlRnJhbWUoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdEdvb2RzSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbC5hZGRDaGlsZChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsQ29udGVudCA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUuc2NyZWVuc2hvdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zdGFydFJlY29yZENhcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW1lbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxldmVsX3BhZ2VfXCIgKyB0aGlzLmN1cnJlbnRNb2RlICsgXCJfXCIgKyB0aGlzLmN1cnJlbnRMZXZlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImxldmVsVGltZVwiLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gdGhpcy5jdXJyZW50TW9kZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSA9PSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNvbnRlbnQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY29udGVudC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwiY2hlYXRzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNoZWF0cy5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsSUQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIltcIiArIGMgKyBcIl1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJtcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiW2JtczogXCIgKyAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnZlcnNpb24gKyBcIl1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsYWcuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIltmbGFnOiBcIiArICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZmxhZyArIFwiXVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxQcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBsYXRmb3JtVUkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEMgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiVGlMaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJtc1Bvd2VyXCIsIEMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDICYmICF0aGlzLmlzSW5maW5pdGVQb3dlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLklTX0lORklOSVRFX1BPV0VSKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKE0gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5QT1dFUikpIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5QT1dFUl9UWVBFLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiV3V4aWFuVGlMaVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDA4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LklORklOSVRFX1BPV0VSKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcInBhZ2UwMDlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FtZWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMZXZlbF9Ob1Bvd2VyX1wiICsgdGhpcy5jdXJyZW50TW9kZSArIFwiX1wiICsgdGhpcy5jdXJyZW50TGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5QT1dFUl9TSE9SVEFHRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5QT1dFUiwgTSAtIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5lbWl0KCRldmVudENvbnN0LmRlZmF1bHQuUE9XRVJfVVBEQVRFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhbWVsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxldmVsX1Bvd2VyX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9kZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLlBPV0VSKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5oYXNVc2VLZXkpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcImtleVZpZGVvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIT0gdGhpcy5jdXJyZW50TW9kZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsICE9IEEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5jdXJyZW50X2tleV90eXBlLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZW1wRGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLmN1cnJlbnRfa2V5X3R5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlNIT1ApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV1gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93Lnd4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFUgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibHZpbnlzNXg1bHZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEIgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibHZpbnlzNXg1Y2hhbmNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPID0gdGhpcy5nZXRJc01pc3Rha2VCeUNoYW5jZShCKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7nva7nrKzlh6DlhbM6XCIsIFUsIFwi5b2T5YmN56ys5Yeg5YWzOlwiLCB0aGlzLmN1cnJlbnRMZXZlbCwgTyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVIDw9IHRoaXMuY3VycmVudExldmVsICYmIE8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4gPSB3aW5kb3cud3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSBOLndpbmRvd0hlaWdodCAvIDIgLSAyNTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dCbG9ja0FkcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuYmxvY2tJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUNiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVCbG9ja0FkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7fSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUJsb2NrQWRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRUaW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmlzVGltZUVuZEZ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5Vpc1RpbWVFbmRGdW5cIik7XG4gICAgICAgIHRoaXMuaXNUaW1lRW5kID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS50aW1lckZ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWxUaW1lIC09IDE7XG4gICAgICAgIHRoaXMuZGljdC50aW1lMi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLnNlY29uZEZvcm1hdCh0aGlzLmN1cnJlbnRMZXZlbFRpbWUpO1xuICAgICAgICBpZiAoMCA9PSB0aGlzLmN1cnJlbnRMZXZlbFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC50aW1lMi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyRnVuKTtcbiAgICAgICAgICAgIHRoaXMuaXNUaW1lRW5kID0gITA7XG4gICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlFZmZlY3QoJGF1ZGlvQ29uc3QuQXVkaW9Db25zdC50aW1lRW5kKTtcbiAgICAgICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMX0lEKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LkxldmVsX0xvc2UsIHtcbiAgICAgICAgICAgICAgICBsdjogdCxcbiAgICAgICAgICAgICAgICBtb2RlOiB0aGlzLmN1cnJlbnRNb2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2Vjb25kRm9ybWF0ID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgZSA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gbikge1xuICAgICAgICAgICAgbiA9ICExO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gdCAvIDM2MDA7XG4gICAgICAgIHZhciBvID0gKHQgJT0gMzYwMCkgLyA2MDtcbiAgICAgICAgdmFyIGkgPSAodCAlPSA2MCk7XG4gICAgICAgIHZhciBhO1xuICAgICAgICBpZiAoKHIgPSBNYXRoLmZsb29yKHIpKSA+PSAxMCkge1xuICAgICAgICAgICAgYSA9IHIgKyBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYSA9IFwiMFwiICsgcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcztcbiAgICAgICAgaWYgKChvID0gTWF0aC5mbG9vcihvKSkgPj0gMTApIHtcbiAgICAgICAgICAgIHMgPSBvICsgXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMgPSBcIjBcIiArIG87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGM7XG4gICAgICAgIGlmICgoaSA9IE1hdGguZmxvb3IoaSkpID49IDEwKSB7XG4gICAgICAgICAgICBjID0gaSArIFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjID0gXCIwXCIgKyBpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBpID0gKDEwMCAqIGkpIC8gNjA7XG4gICAgICAgICAgICBpZiAoKGkgPSBNYXRoLmZsb29yKGkpKSA+PSAxMCkge1xuICAgICAgICAgICAgICAgIGMgPSBpICsgXCJcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYyA9IFwiMFwiICsgaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbCA9IGEgKyBcIjpcIiArIHMgKyBcIjpcIiArIGM7XG4gICAgICAgIHN3aXRjaCAoZSkge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGwgPSBzICsgXCI6XCIgKyBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZGV2ZWxvcEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3QuZGV2ZWxvcElELmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5Y+RaWRcIiwgdCk7XG4gICAgICAgIGlmICh0aGlzLmlzSW50TnVtKHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+aVsOWtl1wiKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCwgTnVtYmVyKHQpKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZpZXcoITEsICEwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub3JkZXJCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5kaWN0Lm9yZGVySUQuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgY29uc29sZS5sb2coXCLpobrluo9pZFwiLCB0KTtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnROdW0odCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5pWw5a2XXCIpO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCBOdW1iZXIodCkpO1xuICAgICAgICAgICAgdGhpcy5pbml0VmlldygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zY3JlZW5zaG90QnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gdGhpcy5kaWN0LnNjcmVlbnNob3QuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZy5zcGxpdChcIi1cIik7XG4gICAgICAgIHZhciBuID0gZVswXTtcbiAgICAgICAgdmFyIHIgPSBlWzFdO1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0clwiLCBuLCByKTtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnROdW0obikgJiYgdGhpcy5pc0ludE51bShyKSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNoZWF0cy5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgTnVtYmVyKG4pKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZpZXcoITApO1xuICAgICAgICAgICAgJHNjcmVlbnNob3RVdGlscy5TY3JlZW5zaG90LmluaXQodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIHZhciBvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRzY3JlZW5zaG90VXRpbHMuU2NyZWVuc2hvdC5idG5faW1hZ2Vfa25pZmUoU3RyaW5nKHQuY3VycmVudExldmVsKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiKrlm77nrKxcIiArIHQuY3VycmVudExldmVsICsgXCLlhbNcIik7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0LmN1cnJlbnRMZXZlbCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGUgPD0gTnVtYmVyKHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHQuaW5pdFZpZXcoITApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi57uT5p2f5oiq5Zu+XCIpO1xuICAgICAgICAgICAgICAgICAgICB0LnVuc2NoZWR1bGUobyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUobywgMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIui+k+WFpeagvOW8j+W6lOivpeS4ujogMS0xMDBcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmRvd25sb2FkQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkeE1BRFV0aWxzLlhNQUQuZG93bmxvYWRCdG4oKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNvbGxlY3RSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LkNvbGxlY3QpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubWFwQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0Lk1hcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yb2xlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlJvbGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubGltaXRXZWxmYXJlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxpbWl0V2VsZmFyZUJ0blwiKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICBpZDogXCIwMDlcIlxuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5MaW1pdFdlbGZhcmUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGlkZUxpbWl0V2VsZmFyZUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaWN0LmxpbWl0V2VsZmFyZUJ0bi5hY3RpdmUgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmlzSW50TnVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHQpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmdldElzTWlzdGFrZUJ5Q2hhbmNlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSAxMDAgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB2YXIgbiA9ICExO1xuICAgICAgICBjb25zb2xlLmxvZyhcIumaj+acuuaVsFwiLCBlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3phY3nva7mpoLnjoc6XCIgKyB0KTtcbiAgICAgICAgcmV0dXJuIDAgPT0gdCA/IG4gOiAodCA+PSBlICYmIChuID0gITApLCBuKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmlzSW5maW5pdGVQb3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAhMTtcbiAgICAgICAgaWYgKCRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJXdXhpYW5UaUxpXCIpKSB7XG4gICAgICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLklORl9QT1dFUl9TVEFSVF9USU1FKTtcbiAgICAgICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICgobiAtIGUpIC8gMWUzID49IDg2NDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9ICEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIuaYr+WQpuaYr+aXoOmZkOS9k+WKm1wiLCB0KTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5pbml0UGxhdGZvcm1VSSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZml0VUlUeXBlID09ICRwbGF0Zm9ybUNvbnN0LkZpdFVJVHlwZS5UVCkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRvcFJpZ2h0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDc1O1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRvcFJpZ2h0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICAgICAgaWYgKCh0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSA8IDAuNSkge1xuICAgICAgICAgICAgICAgICh0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA1NSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC50b3BMZWZ0QmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpLFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmJvdHRvbUJhcjAuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gMjApLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuYm90dG9tQmFyMC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKSxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5jb2xsZWN0Um9vdC55ID0gMzAxLjk5OSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jb2xsZWN0Um9vdC55ID0gNDAxLjk5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5maXRVSVR5cGUgPT0gJHBsYXRmb3JtQ29uc3QuRml0VUlUeXBlLktTKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZW/6auY5q+UXCIsIHQpO1xuICAgICAgICAgICAgaWYgKHQgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAxMjA7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRvcExlZnRCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDE0MDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRvcExlZnRCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gNTU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRvcExlZnRCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkubGVmdCA9IDE0MDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QudG9wTGVmdEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGljdC50b3BSaWdodEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NTtcbiAgICAgICAgICAgIHRoaXMuZGljdC50b3BSaWdodEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5hZGRQb3dlckJ0bi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA5MDtcbiAgICAgICAgICAgIHRoaXMuZGljdC5hZGRQb3dlckJ0bi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5oYXNIb21lQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuaG9tZUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5ob21lQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0hvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZ1NjZW5lKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdTY2VuZSA9ICEwO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImJ0bjAxNVwiKTtcbiAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5NQUlOKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tCYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9QYXVzZSwge1xuICAgICAgICAgICAgbHY6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTF9JRCksXG4gICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuU0VUKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrUmVzdGFydCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMTRcIik7XG4gICAgICAgIHRoaXMuaW5pdFZpZXcoITAsIHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hlY2tGdWxsQWRfbm9SZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImNoZWNrRnVsbEFkX25vUmVzdWx0XCIsIHRoaXMuY3VycmVudExldmVsKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrRnVsbEFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5jaGVja0Z1bGxBZF9yZXN1bHQpO1xuICAgIH07XG4gICAgX19kZWNvcmF0ZShbSyhjYy5QcmVmYWIpXSwgZS5wcm90b3R5cGUsIFwiY29sb3JpbmdTcGluZVByZWZhYlwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtHXSwgZSk7XG59KSgkYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVztcbiJdfQ==