
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5839ZLSZhGeL0ByHlxxbWw', 'Home');
// scripts/Home.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $recycleScroll = require("./RecycleScroll");

var $configConst = require("./ConfigConst");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $popupConst = require("./PopupConst");

var $sceneConst = require("./SceneConst");

var $userConst = require("./UserConst");

var $audioManager = require("./AudioManager");

var $bmsManager = require("./BmsManager");

var $configManager = require("./ConfigManager");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $sceneManager = require("./SceneManager");

var $userManager = require("./UserManager");

var $challengeHttp = require("./ChallengeHttp");

var $configUtils = require("./ConfigUtils");

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var $utils = require("./Utils");

var $vIVOADUtils = require("./VIVOADUtils");

var $xMADUtils = require("./XMADUtils");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $shuShuConst = require("./ShuShuConst");

var $homeItem = require("./HomeItem");

var $localStorageConst = require("./LocalStorageConst");

var $vIPSystem = require("./VIPSystem");

var $tipManager = require("./TipManager");

var $challengeSystem = require("./ChallengeSystem");

var $localStorageManager = require("./LocalStorageManager");

var j = cc._decorator;
var V = j.ccclass;
var H = j.property;

var q = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scroll = null;
    e.clickTimes = 0;
    e.ageSpriteFrame = [];
    e.btnIconSpriteFrame = [];
    e.animName = "angry";
    e.secondModeData = null;
    e.thirdModesData = [];
    e.darenModesData = [];
    e.carSpeed = 500;
    e.moveTimes = !1;
    e.moveTimes2 = !1;
    e.scrollType = 0;
    e.rankList = [];
    e.myRank = 1;
    e.isLoadingScene = !1;
    e.isLoadPrivacy = !1;
    e.isEnterUgc = !1;
    e.isAnim = !1;
    e.isShow = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var e = this;
    t.prototype.onLoad.call(this);
    this.addBtnOn("setBtn", this.clickSet, this);
    this.addBtnOn("roleRoot", this.heroLevelBtn, this);
    this.addBtnOn("startBtn", this.clickStart, this);
    this.addBtnOn("infinitePowerBtn", this.clickInfinitePower, this);
    this.addBtnOn("ageBtn", this.clickAge, this);
    this.addBtnOn("privacyBtn", this.clickPrivacy, this);
    this.addBtnOn("appointBtn", this.clickAppoint, this);
    this.addBtnOn("moreGameBtn", this.clickMoreGame, this);
    this.addBtnOn("ageBtn", this.clickAgeBtn, this);
    this.addBtnOn("followBtn", this.clickFollowBtn, this);
    this.addBtnOn("mode985Btn", this.modeBtnFuc.bind(this, 985), this);
    this.addBtnOn("thirdBtn", this.clickThirdMode, this);
    this.addBtnOn("beeBtn", this.clickBeeBtn, this);
    this.addBtnOn("modeJumpBtn", this.modeJumpBtn, this);
    this.addBtnOn("closeDaren", this.closeDaren, this);
    this.addBtnOn("unlockAllModeBtn", this.unlockAllModeBtn, this);
    this.addBtnOn("orderBtn", this.orderBtn, this);
    this.addBtnOn("topBtn", this.topBtn, this);
    this.addBtnOn("rankBtn", this.rankBtn, this);
    this.addBtnOn("skinBtn", this.skinBtn, this);
    this.addBtnOn("playBtn", this.playBtn, this);
    this.addBtnOn("signInBtn", this.signInBtn, this);
    this.addBtnOn("shopBtn", this.shopBtn, this);
    this.addBtnOn("positionBtn", this.positionBtn, this);
    this.addBtnOn("limitWelfareBtn", this.limitWelfareBtn, this);
    this.addBtnOn("shareBtn", this.shareBtn, this);
    this.addBtnOn("vipBtn", this.vipBtn, this);
    this.addBtnOn("specialBtn", this.specialBtn, this);
    this.addBtnOn("newHandBtn", this.newHandBtn, this);
    this.addBtnOn("supervalueBtn", this.supervalueBtn, this);
    this.addBtnOn("noADBtn", this.noADBtn, this);
    this.addBtnOn("shipBtn", this.shipBtn, this);
    this.addBtnOn("turntableBtn", this.turntableBtn, this);
    this.addBtnOn("planBtn", this.planBtn, this);
    this.addBtnOn("challengeBtn", this.challengeBtn, this);
    this.addBtnOn("mapBtn", this.mapBtn, this);
    this.addBtnOn("collectBtn", this.collectBtn, this);
    this.addBtnOn("roleBtn", this.roleBtn, this);
    this.dict.cheats.on(cc.Node.EventType.TOUCH_START, this.clickCheats, this);
    this.dict.clickBg.on(cc.Node.EventType.TOUCH_START, function () {
      if (e.isShow) {
        e.clickThirdMode();
      }
    }, this);

    if (this.dict.clickBg._touchListener) {
      this.dict.clickBg._touchListener.setSwallowTouches(!1);
    }

    $userManager.User.setTempData("currentScene_", 1);

    if ("zh" == $languageManager["default"].instance.lan) {
      $platformManager.Platform.getConfig().logoType = $platformConst.LogoType.DreamSetUp;
    } else {
      if ("tc" == $languageManager["default"].instance.lan) {
        $platformManager.Platform.getConfig().logoType = $platformConst.LogoType.DreamSetUp_TC;
      } else {
        $platformManager.Platform.getConfig().logoType = $platformConst.LogoType.DreamSetUp_EN;
      }
    }

    if (this.dict.logo) {
      cc.resources.load("texture/logo/logo" + $platformManager.Platform.getConfig().logoType, function (t, n) {
        if (t) {
          return console.log(t);
        }

        e.dict.logo.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
      });
    }

    this.initPlatformUI();
    this.initView();

    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showInsert_must();
    }

    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.page, {
      id: "001"
    });

    if (this.scroll) {
      this.schedule(function () {
        if (e.scroll.node.getComponent(cc.ScrollView).getContentPosition().y > 900) {
          e.scrollType = 1;
          e.dict.positionBtnText.getComponent(cc.Label).string = "回到顶部";
          e.dict.positionBtnIcon.getComponent(cc.Sprite).spriteFrame = e.btnIconSpriteFrame[e.scrollType];
        } else {
          e.scrollType = 0;
          e.dict.positionBtnText.getComponent(cc.Label).string = "我的位置";
          e.dict.positionBtnIcon.getComponent(cc.Sprite).spriteFrame = e.btnIconSpriteFrame[e.scrollType];
        }
      }, 0.5);
    }
  };

  e.prototype.longtouAnim = function () {
    var t = this;
    this.dict.longtou.getComponent(sp.Skeleton).setAnimation(0, "angry", !0);
    this.schedule(function () {
      if ("angry" == t.animName) {
        t.dict.longtou.getComponent(sp.Skeleton).setAnimation(0, "idle1", !0);
        t.animName = "idle1";
      } else {
        t.dict.longtou.getComponent(sp.Skeleton).setAnimation(0, "angry", !0);
        t.animName = "angry";
      }
    }, 5);
  };

  e.prototype.limitWelfareBtn = function () {
    console.log("limitWelfareBtn");
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "009"
    });
    $popupManager["default"].show($popupConst.PopupConst.LimitWelfare);
  };

  e.prototype.shareBtn = function () {
    $platformManager.Platform.share();
  };

  e.prototype.vipBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.VIP);
  };

  e.prototype.specialBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.SpecialGift);
  };

  e.prototype.newHandBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.NewHand);
  };

  e.prototype.supervalueBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Supervalue);
  };

  e.prototype.noADBtn = function () {};

  e.prototype.shipBtn = function () {
    $localStorageManager["default"].set($localStorageConst["default"].todayClickShip, 1);
    this.dict.shipHint.active = !1;

    if ($localStorageManager["default"].get($localStorageConst["default"].todayShipExpire)) {
      $popupManager["default"].show($popupConst.PopupConst.ShipRace);
    } else {
      if (this.dict.shipTime.parent.active) {
        $memoryStorageManager["default"].set($memoryStorageConst["default"].openShipWay, "home"), $popupManager["default"].show($popupConst.PopupConst.ShipRace2, null, !1);
      } else {
        $popupManager["default"].show($popupConst.PopupConst.ShipRace);
      }
    }
  };

  e.prototype.turntableBtn = function () {
    var t;
    var e = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};
    var n = $localStorageManager["default"].get($localStorageConst["default"].canTurntableTimes) || 0;

    if (e[0] <= 6) {
      t = 6 - n;
    } else {
      t = 8 - n;
    }

    if (this.dict.turntableProgressSF.getComponent(cc.Sprite).fillRange >= 1) {
      $popupManager["default"].show($popupConst.PopupConst.LuckTurntable);
    } else {
      $tipManager.Tip.show($languageManager["default"].formatStr("再通过%d关开启", t));
    }
  };

  e.prototype.planBtn = function () {
    $localStorageManager["default"].set($localStorageConst["default"].todayClickPlan, 1);
    this.dict.planHint.active = !1;
    $popupManager["default"].show($popupConst.PopupConst.Plan, null, !1);
  };

  e.prototype.challengeBtn = function () {
    if (this.isLoadingScene) {//
    } else {
      this.isLoadingScene = !0;
      $localStorageManager["default"].set($localStorageConst["default"].todayClickChallenge, 1);
      this.dict.challengeHint.active = !1;
      $sceneManager["default"].loadScene($sceneConst.SceneConst.Challenge);
    }
  };

  e.prototype.collectBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Collect);
  };

  e.prototype.roleBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Role);
  };

  e.prototype.mapBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Map);
  };

  e.prototype.hideLimitWelfareBtn = function () {
    this.dict.limitWelfareBtn.active = !1;
  };

  e.prototype.onEnable = function () {
    $eventManager.Event.on($eventConst["default"].UPDATE_INFINITE_POWER, this.updateInfinitePower, this);
    $eventManager.Event.on($eventConst["default"].updateUnlockAllMode, this.updateUnlockAllMode, this);
    $eventManager.Event.on($eventConst["default"].ENTER_ID, this.sucEnterByMode, this);
    $eventManager.Event.on($eventConst["default"].hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    $eventManager.Event.on($eventConst["default"].COIN_UPDATE, this.changeKey, this);
    cc.game.on("signInHint", this.signInHint, this);
    cc.game.on("skinHint", this.skinHint, this);
    cc.game.on("hasPurchase", this.hasPurchase, this);
    cc.game.on("showHomeCoin", this.showHomeCoin, this);
    cc.game.on("special_pack", this.special_pack, this);
    cc.game.on("remove_ads", this.remove_ads, this);
    cc.game.on("canTurntableTimes", this.canTurntableTimes, this);
    cc.game.on("updateShipTime", this.updateShipTime, this);
    cc.game.on("shipExpire", this.shipExpire, this);
    cc.game.on("clickStart", this.clickStart, this);
    cc.game.on("piggy_bank", this.piggy_bank, this);
    cc.game.on("ChallengeSys", this.ChallengeSys, this);
    cc.game.on("challengeExpire", this.challengeExpire, this);
    cc.game.on("challengeExpire_timerFun", this.challengeExpire_timerFun, this);
    cc.game.on("starter_pack", this.starter_pack, this);

    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showBannerFeed();
    } else {
      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        $oPPOAndroidAdUtils.OPPOAndroidAd.showBannerFeed();
      } else {
        $platformManager.Platform.is($platformConst.EPlatform.VIVO) && $vIVOADUtils.VIVOAD.showCustomAd_1();
      }
    }
  };

  e.prototype.onDisable = function () {
    $eventManager.Event.off($eventConst["default"].UPDATE_INFINITE_POWER, this.updateInfinitePower, this);
    $eventManager.Event.off($eventConst["default"].updateUnlockAllMode, this.updateUnlockAllMode, this);
    $eventManager.Event.off($eventConst["default"].ENTER_ID, this.sucEnterByMode, this);
    $eventManager.Event.off($eventConst["default"].hideLimitWelfareBtn, this.hideLimitWelfareBtn, this);
    $eventManager.Event.off($eventConst["default"].COIN_UPDATE, this.changeKey, this);
    cc.game.off("signInHint", this.signInHint, this);
    cc.game.off("skinHint", this.skinHint, this);
    cc.game.off("hasPurchase", this.hasPurchase, this);
    cc.game.off("showHomeCoin", this.showHomeCoin, this);
    cc.game.off("special_pack", this.special_pack, this);
    cc.game.off("remove_ads", this.remove_ads, this);
    cc.game.off("canTurntableTimes", this.canTurntableTimes, this);
    cc.game.off("updateShipTime", this.updateShipTime, this);
    cc.game.off("shipExpire", this.shipExpire, this);
    cc.game.off("clickStart", this.clickStart, this);
    cc.game.off("piggy_bank", this.piggy_bank, this);
    cc.game.off("ChallengeSys", this.ChallengeSys, this);
    cc.game.off("challengeExpire", this.challengeExpire, this);
    cc.game.off("challengeExpire_timerFun", this.challengeExpire_timerFun, this);
    cc.game.off("starter_pack", this.starter_pack, this);
    $platformManager.Platform.hideCustomAd_1();
    $platformManager.Platform.hideCustomAd_2();
  };

  e.prototype.updateInfinitePower = function (t) {
    if (this.dict.infinitePowerBtn) {
      this.dict.infinitePowerBtn.active = !t;
    }
  };

  e.prototype.updateUnlockAllMode = function () {
    if (this.dict.unlockAllModeBtn) {
      this.dict.unlockAllModeBtn.active = !1;
    }
  };

  e.prototype.initView = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var r;
      var o;
      var i;
      var a;
      var c;
      var l;
      var p;

      var _;

      var k;
      var M;
      var P;
      var T;
      var A;
      var I;
      var D;
      var E;
      var O;
      var N;
      var j;
      var V;
      var H;
      var q;
      var z;
      var G;
      var K;
      var W;
      var X;
      var Y;
      var J;
      var Z;
      var Q;
      var $;
      var tt;
      var et;
      var nt;
      var rt;
      var ot;
      var it;
      var at;
      var st;
      var ct;
      var lt;
      var ut = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            t = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};
            return [4, $configManager.Config.get($configConst.ConfigConst.THEME)];

          case 1:
            for (e = s.sent(), $userManager.User.setTempData($userConst.TempData.CURRENT_ALL_MODE, e), A = 0; A < e.length; A++) {
              o = e[A].theme;
              t[o] || (t[o] = 1);

              if (2 == e[A].id) {
                this.secondModeData = e[A];
              } else {
                e[A].id >= 3 && this.thirdModesData.push(e[A]);
              }

              this.darenModesData.push(e[A]);
            }

            for ($userManager.User.set($userConst.UserData.LEVEL_LIST, t), n = $userManager.User.get($userConst.UserData.ALREADY_PLAY) || {}, A = 0; A < e.length; A++) {
              o = e[A].theme;
              n[o] || (n[o] = []);
            }

            for ($userManager.User.set($userConst.UserData.ALREADY_PLAY, n), r = $userManager.User.get($userConst.UserData.ALREADY_UNLOCK) || {}, A = 0; A < e.length; A++) {
              o = e[A].theme;
              r[o] || (r[o] = [1]);
            }

            $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, r);
            i = $userManager.User.get($userConst.UserData.UNLOCK_ALL_MODE_VIDEO_TIMES) || 0;
            a = $userManager.User.get($userConst.UserData.UNLOCK_MODE_LIST) || [];

            if (this.dict.unlockAllModeBtn && (2 == i || a.length >= e.length)) {
              this.dict.unlockAllModeBtn.active = !1;
            }

            $userManager.User.setTempData($userConst.TempData.POWER_TYPE, 1);

            if ($userManager.User.get($userConst.UserData.FIRST_DAY_DATE)) {
              console.log("老用户", $platformManager.Platform.getConfig().flag.indexOf("tt"));

              if (-1 != $platformManager.Platform.getConfig().flag.indexOf("tt") && (p = $userManager.User.get($userConst.UserData.IS_COMPATIBLE_233) || 0, console.log("是否已经兼容", p), !p)) {
                for (P in _ = $userManager.User.get($userConst.UserData.LEVEL_LIST), console.log("levelList", JSON.stringify(_)), k = {}, M = {}, _) {
                  T = _[P];
                  k[P] = [];
                  M[P] = [];

                  for (A = 1; A <= T - 1 && !(k[P].length >= 580); A++) {
                    k[P].push(A);
                  }

                  for (A = 1; A <= T && !(k[P].length >= 580); A++) {
                    M[P].push(A);
                  }
                }

                console.log("通关列表", JSON.stringify(k));
                console.log("解锁列表", JSON.stringify(M));
                $userManager.User.set($userConst.UserData.IS_COMPATIBLE_233, 1);
                $userManager.User.set($userConst.UserData.ALREADY_PLAY, k);
                $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, M);
              }
            } else {
              for (P in $userManager.User.set($userConst.UserData.FIRST_DAY_DATE, new Date().getDate()), c = $userManager.User.get($userConst.UserData.LEVEL_LIST), l = {}, M = {}, c) {
                l[P] = [], M[P] = [1];
              }

              $userManager.User.set($userConst.UserData.IS_COMPATIBLE_233, 1);
              $userManager.User.set($userConst.UserData.ALREADY_PLAY, l);
              $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, M);
            }

            I = $bmsManager.BMS.getKey("GM");
            this.dict.cheats.active = !!I;
            D = $bmsManager.BMS.getKey("AllThemeUnlock");

            if (this.dict.unlockAllModeBtn) {
              this.dict.unlockAllModeBtn.active = !!D;
            }

            E = $bmsManager.BMS.getKey("WuxianTiLi");

            if (this.dict.infinitePowerBtn) {
              this.dict.infinitePowerBtn.active = 0 != E;
            }

            if ($userManager.User.get($userConst.UserData.INF_POWER_VIDEO_TIMES) >= 3) {
              this.updateInfinitePower(!0);
            }

            $audioManager.Audio.stopMusic();
            cc.game.emit("gamelog", "page001");
            this.dict.version.getComponent(cc.Label).string = "v" + $platformManager.Platform.getConfig().version;

            if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
              this.dict.orderID.active = !0;
              this.dict.orderBtn.active = !0;
            } else {
              this.dict.orderID.active = !1;
              this.dict.orderBtn.active = !1;
            }

            if (window.wrongful) {
              $popupManager["default"].show($popupConst.PopupConst.STOP);
            }

            this.judgeMainMode(0);
            this.getRank();
            this.updateSkin();
            O = $userManager.User.get("shakeAmount") || 4;
            $userManager.User.set("shakeAmount", O);
            $localStorageManager["default"].get($localStorageConst["default"].todaySignIn);
            N = $localStorageManager["default"].get($localStorageConst["default"].todayOpenSignIn) || 0;
            j = $localStorageManager["default"].get($localStorageConst["default"].signInDays) || 0;
            this.dict.signInBtn.active = j < 7;
            this.dict.signInHint.active = j < 7 && 0 == N;
            this.skinHint();
            this.dict.limitWelfareBtn.active = !1;

            if (window.tt && ["Douyin", "douyin_lite", "live_stream", "aweme_hotsoon"].some(function (t) {
              return t == window.tt.getSystemInfoSync().appName;
            })) {
              V = $userManager.User.get($userConst.UserData.EnterSidebar) || 0;
              console.log("判断按钮", V, 2 != V);

              if (2 != V) {
                console.log("显示按钮"), this.dict.limitWelfareBtn.active = !0;
              } else {
                console.log("不显示按钮"), this.dict.limitWelfareBtn.active = !1;
              }
            }

            this.hasPurchase();

            if ("all" == $bmsManager.BMS.getKey("share")) {
              this.dict.shareBtn.active = !0;
            }

            H = $userManager.User.getTempData("backByGame");
            q = $memoryStorageManager["default"].get($memoryStorageConst["default"].isVIP);
            z = $localStorageManager["default"].get($localStorageConst["default"].backTimes) || 0;

            if ($platformManager.Platform.getConfig().hasPurchase && $platformManager.Platform.getConfig().hasVIP && H && !q && 2 == z) {
              $popupManager["default"].show($popupConst.PopupConst.VIP);
            }

            if ((G = $bmsManager.BMS.getKey("BackHomeAd")) && H && z >= G) {
              console.log("BackHomeAd-触发插屏广告");
              $eventManager.Event.emit($eventConst["default"].checkFullAd);
            }

            $userManager.User.setTempData("backByGame", !1);
            K = $localStorageManager["default"].get($localStorageConst["default"].isReceiveVIP) || 0;

            if (q && !K) {
              W = $localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0;
              X = W + 5;
              $localStorageManager["default"].set($localStorageConst["default"].cardAmount, X);
              $memoryStorageManager["default"].set($memoryStorageConst["default"].rewardType, "VIPCard");
              $memoryStorageManager["default"].set($memoryStorageConst["default"].reward, [["card", 5]]);
              $localStorageManager["default"].set($localStorageConst["default"].isReceiveVIP, 1);
              $popupManager["default"].show($popupConst.PopupConst.Get);
            }

            if (this.dict.vipTime) {
              if (q) {
                this.dict.vipTime.active = !0, this.dict.vipTime.getComponent(cc.Label).string = $vIPSystem["default"].getSurplusTimeStr();
              } else {
                this.dict.vipTime.active = !1;
              }
            }

            if (this.dict.specialBtn) {
              Y = $localStorageManager["default"].get($localStorageConst["default"].hasSpecialBtn) || 0;
              J = $memoryStorageManager["default"].get($memoryStorageConst["default"].special_pack) || !1;
              this.dict.specialBtn.active = !Y && !J;
            }

            if (this.dict.newHandBtn) {
              Z = $localStorageManager["default"].get($localStorageConst["default"].starter_pack) || 0;
              this.dict.newHandBtn.active = !Z;
            }

            if (this.dict.newHandBtn) {
              if (this.dict.newHandBtn.active) {//
              } else {
                Q = $localStorageManager["default"].get($localStorageConst["default"].value_pack) || 0;
                this.dict.supervalueBtn.active = !Q;
              }
            }

            $ = $localStorageManager["default"].get($localStorageConst["default"].isNoAD) || 0;
            tt = $memoryStorageManager["default"].get($memoryStorageConst["default"].remove_ads) || !1;
            et = $memoryStorageManager["default"].get($memoryStorageConst["default"].remove_ads_pack) || !1;
            $localStorageManager["default"].set($localStorageConst["default"].isNoAD, $);

            if (this.dict.noADBtn) {
              if ($ || tt || et) {
                this.dict.noADBtn.active = !1, $localStorageManager["default"].set($localStorageConst["default"].isNoAD, 1);
              } else {
                this.dict.noADBtn.active = !0;
              }
            }

            nt = $userManager.User.get($userConst.UserData.boreTimes) || 0;
            rt = $userManager.User.get($userConst.UserData.tipTimes) || 0;
            ot = $userManager.User.get($userConst.UserData.screwBoxTimes) || 0;

            if (!$userManager.User.get("NewVersion") && (nt || rt || ot)) {
              $userManager.User.set("NewVersion", !0);
              $popupManager["default"].show($popupConst.PopupConst.NewVersion);
            }

            this.canTurntableTimes();

            if (this.dict.shipBtn) {
              it = $localStorageManager["default"].get($localStorageConst["default"].shipStartTime) || 0;

              if (t[0] >= 4) {
                this.dict.shipBtn.active = !0;
              } else {
                this.dict.shipBtn.active = !1;
              }

              if ($platformManager.Platform.getConfig().hasShip) {//
              } else {
                this.dict.shipBtn.active = !1;
              }

              this.dict.shipTime.parent.active = 0 != it;
            }

            if (this.dict.shipHint) {
              at = $localStorageManager["default"].get($localStorageConst["default"].todayClickShip) || 0;
              this.dict.shipHint.active = !at;
            }

            if (this.dict.vipBtn) {
              if ($platformManager.Platform.getConfig().hasPurchase) {
                this.dict.shopBtn.active = !0, $platformManager.Platform.getConfig().hasVIP && (this.dict.vipBtn.active = !0), this.dict.universalCard.active = !0, this.dict.turntableBtn.active = !0;
              } else {
                this.dict.noADBtn.active = !1, this.dict.specialBtn.active = !1, this.dict.vipBtn.active = !1, this.dict.shopBtn.active = !1, this.dict.universalCard.active = !1, this.dict.shipBtn.active = !1, this.dict.turntableBtn.active = !1, this.dict.newHandBtn.active = !1, this.dict.supervalueBtn.active = !1;
              }
            }

            if (this.dict.universalCard) {
              this.dict.universalCard.active = !1;
            }

            if ($platformManager.Platform.getConfig().hasPurchase && this.dict.planBtn) {
              this.dict.planBtn.active = t[0] >= 2;
              st = $localStorageManager["default"].get($localStorageConst["default"].todayClickPlan) || 0;
              this.dict.planHint.active = !st;
            }

            if ($platformManager.Platform.getConfig().hasPurchase && this.dict.challengeBtn) {
              this.dict.challengeBtn.active = t[0] > 4;
            }

            ct = $localStorageManager["default"].get($localStorageConst["default"].todayClickChallenge) || 0;
            lt = $localStorageManager["default"].get($localStorageConst["default"].challengeStartTime) || 0;

            if (this.dict.challengeTime) {
              if (lt) {
                this.dict.challengeHint.active = !ct, this.dict.challengeTime.parent.active = !0, this.dict.challengeTime.getComponent(cc.Label).string = $challengeSystem["default"].getSurplusTimeStr();
              } else {
                this.dict.challengeTime.parent.active = !1;
              }
            }

            if (this.dict.pigBtn) {
              this.dict.pigBtn.active = !1;
            }

            this.changeKey();

            if (this.dict.green1) {
              this.dict.green1.opacity = 0;
              this.dict.yellow1.opacity = 0;
              this.dict.blue3.opacity = 0;
              this.dict.red3.opacity = 0;
              this.carMove1();
              this.scheduleOnce(function () {
                ut.carMove2();
              }, 0.6);
            }

            return [2];
        }
      });
    });
  };

  e.prototype.heroLevelBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Role);
  };

  e.prototype.carMove1 = function () {
    var t = this;
    var e;

    if (this.moveTimes) {
      e = this.dict.green1;
    } else {
      e = this.dict.yellow1;
    }

    e.opacity = 255;
    cc.tween(e).by((cc.winSize.width + 200) / this.carSpeed, {
      x: cc.winSize.width + 200
    }).call(function () {
      t.moveTimes = !t.moveTimes;
      e.position = cc.v2(-476.534, -59);
      e.opacity = 0;
      var n = $utils.Utils.randomNum(2, 6);
      t.scheduleOnce(function () {
        t.carMove1();
      }, n);
    }).start();
  };

  e.prototype.carMove2 = function () {
    var t = this;
    var e;

    if (this.moveTimes2) {
      e = this.dict.blue3;
    } else {
      e = this.dict.red3;
    }

    e.opacity = 255;
    cc.tween(e).by((cc.winSize.width + 300) / this.carSpeed, {
      x: -(cc.winSize.width + 300)
    }).call(function () {
      t.moveTimes2 = !t.moveTimes2;
      e.position = cc.v2(520.17, 52.917);
      e.opacity = 0;
      var n = $utils.Utils.randomNum(2, 6);
      t.scheduleOnce(function () {
        t.carMove2();
      }, n);
    }).start();
  };

  e.prototype.starter_pack = function () {
    this.dict.newHandBtn.active = !1;
    var t = $localStorageManager["default"].get($localStorageConst["default"].value_pack) || 0;
    this.dict.supervalueBtn.active = !t;
  };

  e.prototype.changeKey = function () {
    if (this.dict.coinAmount) {
      var t = $userManager.User.get("coin") || 0;
      this.dict.coinAmount.getComponent(cc.Label).string = "" + t;
    }
  };

  e.prototype.piggy_bank = function () {
    this.dict.pigBtn.active = !1;
  };

  e.prototype.ChallengeSys = function () {
    if (this.dict.challengeTime) {
      var t = $localStorageManager["default"].get($localStorageConst["default"].todayClickChallenge) || 0;

      if ($localStorageManager["default"].get($localStorageConst["default"].challengeStartTime)) {
        this.dict.challengeHint.active = !t;
        this.dict.challengeTime.parent.active = !0;
        this.dict.challengeTime.getComponent(cc.Label).string = $challengeSystem["default"].getSurplusTimeStr();
      } else {
        this.dict.challengeTime.parent.active = !1;
      }
    }
  };

  e.prototype.challengeExpire = function () {
    if (this.dict.challengeTime) {
      this.dict.challengeTime.parent.active = !1;
    }
  };

  e.prototype.challengeExpire_timerFun = function () {
    if (this.dict.challengeTime) {
      this.dict.challengeTime.getComponent(cc.Label).string = $challengeSystem["default"].getSurplusTimeStr();
    }
  };

  e.prototype.updateShipTime = function () {};

  e.prototype.shipExpire = function () {
    this.dict.shipTime.parent.active = !1;
  };

  e.prototype.special_pack = function () {
    this.dict.specialBtn.active = !1;
  };

  e.prototype.remove_ads = function () {
    this.dict.noADBtn.active = !1;
  };

  e.prototype.canTurntableTimes = function () {
    if (this.dict.turntableProgress) {
      var t = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};
      var e = $localStorageManager["default"].get($localStorageConst["default"].canTurntableTimes) || 0;
      var n = 8;

      if ($localStorageManager["default"].get($localStorageConst["default"].isFirstTurntable)) {//
      } else {
        n = 6;
      }

      if (e <= 0) {
        e = 0;
      }

      t[0];
      this.dict.turntableProgress.getComponent(cc.Label).string = e + "/" + n;
      this.dict.turntableProgressSF.getComponent(cc.Sprite).fillRange = e / n;
    }
  };

  e.prototype.hasPurchase = function () {
    if (this.dict.shopBtn) {
      if ($platformManager.Platform.getConfig().hasPurchase) {
        this.dict.shopBtn.active = !0;
      } else {
        this.dict.shopBtn.active = !1;
      }
    }
  };

  e.prototype.signInHint = function () {
    this.dict.signInHint.active = !1;
  };

  e.prototype.skinHint = function () {
    if (this.dict.skinHint) {
      if ($userManager.User.get($userConst.UserData.getLockSkinList)[0].length) {
        this.dict.skinHint.active = !0;
      } else {
        this.dict.skinHint.active = !1;
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

  e.prototype.topBtn = function () {
    this.scroll.node.getComponent(cc.ScrollView).scrollToPercentVertical(1, 1);
  };

  e.prototype.rankBtn = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "005"
    });

    if ($platformManager.Platform.is($platformConst.EPlatform.TT)) {
      $platformManager.Platform.showRankList();
    } else {
      $popupManager["default"].show($popupConst.PopupConst.Rank);
    }
  };

  e.prototype.positionBtn = function () {
    if (this.scrollType) {
      this.scroll.node.getComponent(cc.ScrollView).scrollToPercentVertical(1, 1);
    } else {
      var t = 1 * (this.rankList.length - this.myRank) / (this.rankList.length - 1);
      console.log(this.myRank, t);
      this.scroll.node.getComponent(cc.ScrollView).scrollToPercentVertical(t, 1);
    }
  };

  e.prototype.playBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Play);
  };

  e.prototype.showHomeCoin = function () {
    this.dict.addCoinBtn.active = !0;
  };

  e.prototype.signInBtn = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "006"
    });
    $localStorageManager["default"].set($localStorageConst["default"].todayOpenSignIn, 1);
    this.dict.signInHint.active = !1;
    $popupManager["default"].show($popupConst.PopupConst.SignIn);
  };

  e.prototype.shopBtn = function () {
    if (!this.isLoadingScene) {
      this.isLoadingScene = !0;
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
        id: "shopBtn"
      });
      var t = $userManager.User.getTempData("currentScene_");

      if (t) {
        cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store_page, {
          id: t
        });
      }

      $sceneManager["default"].loadScene($sceneConst.SceneConst.CardShop);
    }
  };

  e.prototype.skinBtn = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "004"
    });
    $popupManager["default"].show($popupConst.PopupConst.Skin);
  };

  e.prototype.getRank = function () {
    var t = this;
    var e = new Date();
    var n = this.showTime(e.getMonth() + 1);
    var r = this.showTime(e.getDate());
    var o = "province_" + n + r + "_" + $platformManager.Platform.getConfig().rank;

    if ("haiwai" == $platformManager.Platform.getConfig().rank) {
      o = "country_" + n + r + "_" + $platformManager.Platform.getConfig().rank;
    }

    console.log("rank_name", o);
    $challengeHttp.challengeHttp.getRank(o, "1").then(function (e) {
      console.log("排行榜数据", e);

      if (e.total) {
        var n = [];
        var r = 0;

        for (var i in e.list) {
          r += 1, n.push({
            id: r,
            province: i,
            score: e.list[i].score
          });
        }

        t.rankList = n;
        t.sucGetRank();
      } else {
        var a = $configConst.ConfigConst.Rank;

        if ("haiwai" == $platformManager.Platform.getConfig().rank) {
          a = $configConst.ConfigConst.RankHW;
        }

        $configManager.Config.get(a).then(function (e) {
          console.log("假数据", e);

          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            $challengeHttp.challengeHttp.incrRank(o, r.province, r.score).then(function () {
              console.log("顺便上传");
            });
          }

          t.rankList = e;
          t.rankList.sort(function (t, e) {
            return e.score - t.score;
          });
          t.sucGetRank();
        });
      }
    });
  };

  e.prototype.sucGetRank = function () {
    var t;
    var e = this;

    if (this.scroll) {
      this.scroll.onItemRender = this.onItemRender.bind(this);
      this.scroll.onItemClicked = this.onItemClicked.bind(this);
      this.scroll.numItems = this.rankList.length;
    }

    this.rankList.forEach(function (t) {
      t.score;
    });

    if ($platformManager.Platform.getConfig().rank.includes("haiwai")) {
      t = "nation";
    } else {
      t = "province";
    }

    var n = this.rankList.findIndex(function (e) {
      return e.province == $userManager.User.get(t);
    });

    if (-1 == n) {
      n = this.rankList.length;
    }

    this.myRank = n + 1;
    this.dict.myRank.getComponent(cc.Label).string = $languageManager["default"].formatStr("我的地区排名：第%d名", this.myRank);
    cc.tween(this.dict.todayAmount).delay(3).to(2, {
      x: -750
    }).call(function () {
      e.dict.todayAmount.x = 750;
    }).to(2, {
      x: 0
    }).union().repeatForever().start();
    var r = new Date();
    var o = this.showTime(r.getMonth() + 1);
    var i = this.showTime(r.getDate());
    var a = "people_" + o + i + $platformManager.Platform.getConfig().rank;

    if ("haiwai" == $platformManager.Platform.getConfig().rank) {
      a = "countryPeople_" + o + i + "_" + $platformManager.Platform.getConfig().rank;
    }

    $challengeHttp.challengeHttp.getRank(a, "1").then(function (t) {
      console.log("人数排行榜数据", t);

      if (t.total) {
        var n = 0;

        for (var r in t.list) {
          n += t.list[r].score;
        }

        e.dict.todayAmount.getComponent(cc.Label).string = $languageManager["default"].formatStr("今天%d人挑战，共有%d人通关", 18 * n + $utils.Utils.randomNum(10, 20), n);
      } else {
        if ("haiwai" == $platformManager.Platform.getConfig().rank) {
          $challengeHttp.challengeHttp.incrRank(a, "US", 99).then(function () {
            console.log("顺便上传");
          });
        } else {
          $challengeHttp.challengeHttp.incrRank(a, "广东", 99).then(function () {
            console.log("顺便上传");
          });
        }

        e.dict.todayAmount.getComponent(cc.Label).string = $languageManager["default"].formatStr("今天%d人挑战，共有%d人通关", 1782 + $utils.Utils.randomNum(10, 20), 99);
      }
    });
  };

  e.prototype.showTime = function (t) {
    if (t > 10) {
      return t;
    } else {
      return "0" + t;
    }
  };

  e.prototype.onItemRender = function (t, e) {
    var n = e.getComponent($homeItem["default"]);
    var r = ($homeItem["default"].state.Normal, {
      index: t,
      province: this.rankList[t].province,
      score: this.rankList[t].score
    });
    n.setData(r);
  };

  e.prototype.onItemClicked = function () {};

  e.prototype.judgeMainMode = function (t) {
    var e;
    var n = this;
    var r = $userManager.User.get($userConst.UserData.mode0LevelList_stage1ID) || [];
    var o = $userManager.User.get($userConst.UserData.mode0LevelList_stage2ID) || [];
    var i = $userManager.User.get($userConst.UserData.mode1LevelList_stage1ID) || [];
    var a = $userManager.User.get($userConst.UserData.mode1LevelList_stage2ID) || [];
    var s = ($userManager.User.get($userConst.UserData.mode2LevelList_stage1ID), $userManager.User.get($userConst.UserData.mode2LevelList_stage2ID), []);
    var c = [];
    var l = [];
    var f = [];

    if (0 == t) {
      $configManager.Config.get($configConst.ConfigConst.THEME + 0 + $platformManager.Platform.getConfig().configSuffix).then(function (t) {
        if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            s.push(i.stage1ID);
            c.push(i.stage2ID);
          }

          $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, s);
          $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, c);
        } else if (t.length > r.length && 0 != r.length) {
          for (n = 0; n < t.length; n++) {
            i = t[n];
            n > r.length - 1 && (s.push(i.stage1ID), c.push(i.stage2ID));
          }

          s.sort(function () {
            return 0.5 - Math.random();
          });
          c.sort(function () {
            return 0.5 - Math.random();
          });
          s = r.concat(s);
          c = o.concat(c);
          console.log("有新增关卡");
          $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, s);
          $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, c);
        } else if (0 == r.length) {
          var a = [];
          var l = [];
          var u = [];
          var f = [];
          var h = [];
          var p = [];
          var g = [];
          var v = [];

          for (n = 0; n < t.length; n++) {
            i = t[n];
            0 == n && (e = i.stage1ID);

            if (n < 5) {
              a.push(i.stage1ID), l.push(i.stage2ID);
            } else {
              if (n < 10) {
                u.push(i.stage1ID), f.push(i.stage2ID);
              } else {
                if (n < 50) {
                  h.push(i.stage1ID), p.push(i.stage2ID);
                } else {
                  g.push(i.stage1ID), v.push(i.stage2ID);
                }
              }
            }
          }

          s = a.concat(u).concat(h).concat(g);
          c = l.concat(f).concat(p).concat(v);

          if ($bmsManager.BMS.getKey("mainModeID")) {
            s = u.concat(a).concat(h);
            c = f.concat(l).concat(p);
          } else {
            var w = s.indexOf(e);
            var _ = s[0];
            s[0] = e;
            s[w] = _;
          }

          console.log("没有新增关卡且是新用户");
          $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, s);
          $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, c);
        } else {
          console.log("老用户");
        }
      });
    } else {
      if (1 == t) {
        $configManager.Config.get($configConst.ConfigConst.THEME + 1).then(function (t) {
          if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              l.push(n.stage1ID);
              f.push(n.stage2ID);
            }

            $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, l);
            $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, f);
          } else if (t.length > i.length && 0 != i.length) {
            for (e = 0; e < t.length; e++) {
              n = t[e];
              e > i.length - 1 && (l.push(n.stage1ID), f.push(n.stage2ID));
            }

            l.sort(function () {
              return 0.5 - Math.random();
            });
            f.sort(function () {
              return 0.5 - Math.random();
            });
            l = i.concat(l);
            f = a.concat(f);
            $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, l);
            $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, f);
          } else if (0 == i.length) {
            var r = [];
            var o = [];
            var s = [];
            var c = [];

            for (e = 0; e < t.length; e++) {
              n = t[e];

              if (e < 5) {
                r.push(n.stage1ID), o.push(n.stage2ID);
              } else {
                s.push(n.stage1ID), c.push(n.stage2ID);
              }
            }

            r.sort(function () {
              return 0.5 - Math.random();
            });
            o.sort(function () {
              return 0.5 - Math.random();
            });
            s.sort(function () {
              return 0.5 - Math.random();
            });
            c.sort(function () {
              return 0.5 - Math.random();
            });
            l = r.concat(s);
            f = o.concat(c);
            $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, l);
            $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, f);
          } else {
            console.log("老用户");
          }

          console.log("清理", l, f);
        });
      } else {
        $configManager.Config.get($configConst.ConfigConst.THEME).then(function (e) {
          e.forEach(function (e) {
            if (e.theme >= t) {
              n.handleModeByID(e.theme);
            }
          });
        });
      }
    }
  };

  e.prototype.handleModeByID = function (t, e) {
    var n = [];
    var r = [];
    var o = $userManager.User.get("mode" + t + "LevelList_stage1ID") || [];
    var i = $userManager.User.get("mode" + t + "LevelList_stage2ID") || [];
    $configManager.Config.get($configConst.ConfigConst.THEME + t).then(function (a) {
      if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
        for (var s = 0; s < a.length; s++) {
          var c = a[s];
          n.push(c.stage1ID);
          r.push(c.stage2ID);
        }

        $userManager.User.set("mode" + t + "LevelList_stage1ID", n);
        $userManager.User.set("mode" + t + "LevelList_stage2ID", r);
      } else if (a.length > o.length && 0 != o.length) {
        for (s = 0; s < a.length; s++) {
          c = a[s];
          s > o.length - 1 && (n.push(c.stage1ID), r.push(c.stage2ID));
        }

        n = o.concat(n);
        r = i.concat(r);
        $userManager.User.set("mode" + t + "LevelList_stage1ID", n);
        $userManager.User.set("mode" + t + "LevelList_stage2ID", r);
      } else if (0 == o.length) {
        for (s = 0; s < a.length; s++) {
          c = a[s];
          n.push(c.stage1ID);
          r.push(c.stage2ID);
        }

        $userManager.User.set("mode" + t + "LevelList_stage1ID", n);
        $userManager.User.set("mode" + t + "LevelList_stage2ID", r);
      }

      if (e) {
        e();
      }
    });
  };

  e.prototype.updateModeView = function () {
    var t = this;
    this.dict.secondBtn.children[0].getComponent(cc.Label).string = this.secondModeData.themeName;

    var e = function e(_e) {
      var r = n.dict.moreModeBg.children[0].children[_e].children[0];
      r.name = n.thirdModesData[_e].theme + "";
      r.getComponent(cc.Label).string = n.thirdModesData[_e].themeName;

      if (r.parent.getComponent(cc.Button)) {//
      } else {
        r.parent.addComponent(cc.Button);
      }

      var o = r.parent.getComponent(cc.Button);
      o.transition = cc.Button.Transition.SCALE;
      o.duration = 0.1;
      o.zoomScale = 1.2;
      r.parent.on(cc.Node.EventType.TOUCH_END, function () {
        cc.game.emit("playClickAudio");
        var n = t.thirdModesData[_e].theme;
        cc.game.emit("gamelog", "modebtn_" + n);
        t.enterByMode(n);
      }, n);
    };

    var n = this;

    for (var r = 0; r < this.thirdModesData.length; r++) {
      e(r);
    }

    var o = function o(e) {
      var n = i.dict.darenModes.children[1].children[e].children[0];
      n.name = i.darenModesData[e].theme + "";
      n.getComponent(cc.Label).string = i.darenModesData[e].themeName;

      if (n.parent.getComponent(cc.Button)) {//
      } else {
        n.parent.addComponent(cc.Button);
      }

      var r = n.parent.getComponent(cc.Button);
      r.transition = cc.Button.Transition.SCALE;
      r.duration = 0.1;
      r.zoomScale = 1.2;
      n.parent.on(cc.Node.EventType.TOUCH_END, function () {
        var n = t.darenModesData[e].theme;
        t.enterByMode2(n);
      }, i);
    };

    var i = this;

    for (r = 0; r < this.darenModesData.length; r++) {
      o(r);
    }
  };

  e.prototype.initPlatformUI = function () {
    var t = $platformManager.Platform.getConfig();

    if (t.fitUIType != $platformConst.FitUIType.TT && t.fitUIType != $platformConst.FitUIType.KS) {//
    } else {
      this.dict.topBar.getComponent(cc.Widget).top = 30;
      this.dict.topBar.getComponent(cc.Widget).updateAlignment();
    }

    if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
      this.dict.bottomBar.getComponent(cc.Widget).bottom = 100;
      this.dict.bottomBar.getComponent(cc.Widget).updateAlignment();
    }

    if (t.hasAgeTip) {
      this.dict.ageBtn.active = !0;
      var e = $platformManager.Platform.getConfig().ageTipType;

      if (e == $platformConst.AgeTipType.AGE_12) {
        this.dict.ageBtn.getComponent(cc.Sprite).spriteFrame = this.ageSpriteFrame[e];
      }
    }

    if (this.dict.privacyBtn) {
      this.dict.privacyBtn.active = !1;

      if (t.privacyPolicyType != $platformConst.PrivacyPolicyType.NO) {
        this.dict.privacyBtn.active = !0;
      }
    }

    if (this.dict.moreGameBtn) {
      this.dict.moreGameBtn.active = !1;

      if (t.hasMoreGame) {
        this.dict.moreGameBtn.active = !0;
      }
    }

    if (this.dict.customerService) {
      this.dict.customerService.active = !1;

      if (t.hasCustomerService) {
        this.dict.customerService.active = !0;
      }
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.OHAYOO_ANDROID) && this.dict.privacyBtn) {
      this.dict.privacyBtn.children[0].getComponent(cc.Label).string = "隐私\n设置";
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.QQ)) {
      this.dict.appointBtn.active = !0;
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.HW)) {
      this.dict.privacyBtn.x -= 100;
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.WX)) {
      var n = $bmsManager.BMS.getKey("ys5x5");
      console.log("ys5x5", n);

      if (n) {
        var r = window.wx.getSystemInfoSync().windowHeight / 2 - 250;
        console.log("测试showBlockAds");
        $platformManager.Platform.showBlockAds({
          top: r,
          left: 0,
          id: "",
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

    if (t.privacyPolicyType == $platformConst.PrivacyPolicyType.MINI_GAME_XM) {
      this.dict.ageBtn.active = !0;
    }
  };

  e.prototype.isDOUYIN = function () {
    var t = window.tt && window.tt.getSystemInfoSync();

    if (!t) {
      return !1;
    }

    switch (t.appName) {
      case "Douyin":
        return !0;

      default:
        return !1;
    }
  };

  e.prototype.clickSet = function () {
    cc.game.emit("gamelog", "btn004");
    $popupManager["default"].show($popupConst.PopupConst.SET);
  };

  e.prototype.clickStart = function () {
    if (!this.isLoadingScene) {
      this.isLoadingScene = !0;
      $memoryStorageManager["default"].set($memoryStorageConst["default"].ThemeType, 0);
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
        id: "001"
      });
      cc.game.emit("gamelog", "btn001");
      $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, 0);
      var t = $userManager.User.get($userConst.UserData.LEVEL_LIST);
      $configUtils.ConfigUtils.setNextModeID();
      var e = 1;
      $configUtils.ConfigUtils.getDataByID(0, function (n) {
        console.log("res - ", n);
        e = n.amount;

        if (t[0] > e) {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
        } else {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, t[0]);
        }

        $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
      });
    }
  };

  e.prototype.clickInfinitePower = function () {
    cc.game.emit("gamelog", "btn007");
    cc.game.emit("gamelog", "page011");
    $popupManager["default"].show($popupConst.PopupConst.INFINITE_POWER);
  };

  e.prototype.clickHotMode = function () {
    if (this.isLoadingScene) {//
    } else {
      this.isLoadingScene = !0;
      cc.game.emit("gamelog", "btn002");
      $sceneManager["default"].loadScene($sceneConst.SceneConst.MODE_SELECT, 1);
    }
  };

  e.prototype.clickMoreMode = function () {
    if (this.isLoadingScene) {//
    } else {
      this.isLoadingScene = !0;
      cc.game.emit("gamelog", "btn003");
      $sceneManager["default"].loadScene($sceneConst.SceneConst.MODE_SELECT, 2);
    }
  };

  e.prototype.clickCheats = function () {
    this.clickTimes += 1;
    console.log("[" + this.clickTimes + "]");

    if (this.clickTimes >= 8) {
      $popupManager["default"].show($popupConst.PopupConst.CHEATS);
      this.clickTimes = 0;
    }
  };

  e.prototype.clickAge = function () {
    $popupManager["default"].show($popupConst.PopupConst.AGE_TIP);
  };

  e.prototype.clickPrivacy = function () {
    var t = this;
    var e = $platformManager.Platform.getConfig();

    if (e.privacyPolicyType == $platformConst.PrivacyPolicyType.MINI_GAME || e.privacyPolicyType == $platformConst.PrivacyPolicyType.MINI_GAME_VIVO || e.privacyPolicyType == $platformConst.PrivacyPolicyType.MINI_GAME_XM) {
      if (this.isLoadPrivacy) {
        return;
      }

      this.isLoadPrivacy = !0;
      cc.resources.load("prefab/popup/PrivacyPolicy", function (e, n) {
        t.isLoadPrivacy = !1;

        if (e) {
          console.error(e);
        } else {
          var r = cc.instantiate(n);
          t.node.addChild(r);
          r.getComponent("PrivacyPolicy").open();
        }
      });
    } else {
      if (e.privacyPolicyType == $platformConst.PrivacyPolicyType.NATIVE) {
        $platformManager.Platform.showPrivacyPolicy();
      }
    }
  };

  e.prototype.clickAppoint = function () {
    var t = this;

    if (this.isLoadPrivacy) {//
    } else {
      this.isLoadPrivacy = !0;
      cc.resources.load("prefab/popup/PrivacyPolicy", function (e, n) {
        t.isLoadPrivacy = !1;

        if (e) {
          console.error(e);
        } else {
          var r = cc.instantiate(n);
          t.node.addChild(r);
          r.getComponent("PrivacyPolicy").openUserPanelHandle();
        }
      });
    }
  };

  e.prototype.clickMoreGame = function () {
    $platformManager.Platform.showMoreGame();
  };

  e.prototype.clickLevelSelect = function () {
    if (this.isLoadingScene) {//
    } else {
      this.isLoadingScene = !0;
      cc.game.emit("gamelog", "page002");
      $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, 0);
      $sceneManager["default"].loadScene($sceneConst.SceneConst.LEVEL_SELECT);
    }
  };

  e.prototype.clickCreateBtn = function () {
    cc.game.emit("gamelog", "btn027");

    if (!$bmsManager.BMS.getKey("ugcad") || $userManager.User.get($userConst.UserData.isUnlockUgc)) {
      if (this.isEnterUgc) {//
      } else {
        this.isEnterUgc = !0;
        $sceneManager["default"].loadScene($sceneConst.SceneConst.UGC);
      }
    } else {
      $popupManager["default"].show($popupConst.PopupConst.UNLOCK_UGC);
    }
  };

  e.prototype.clickAgeBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.AGE_TIP);
  };

  e.prototype.modeBtnFuc = function (t) {
    var e = this;

    if (985 == t) {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].ThemeType, 1);
    } else {
      $memoryStorageManager["default"].set($memoryStorageConst["default"].ThemeType, 0);
    }

    if (this.dict["mode" + t + "BtnVideo"].active) {
      $platformManager.Platform.showRewardAds(function (n) {
        if (0 == n) {
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Play, {
            mode: t
          });
          $userManager.User.set("mode" + t + "Btn", 1);
          e.enterByMode_(t);
        }
      });
    } else {
      this.enterByMode_(t);
    }
  };

  e.prototype.enterByMode_ = function (t) {
    var e = this;

    if (!this.isLoadingScene) {
      this.isLoadingScene = !0;
      $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t);
      var n = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};

      if (n[t]) {//
      } else {
        n[t] = 1;
      }

      var r = $memoryStorageManager["default"].get($memoryStorageConst["default"].ThemeType);
      $configUtils.ConfigUtils.setNextModeID();
      var o = 1;
      $configUtils.ConfigUtils.getDataByID(t, function (i) {
        o = i.amount;

        if (n[t] > o) {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
        } else {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, n[t]);
        }

        if (r) {
          return $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
        }

        $userManager.User.get($userConst.UserData.mode0LevelList_stage1ID);
        $userManager.User.get($userConst.UserData.mode0LevelList_stage2ID);
        var a = $userManager.User.get($userConst.UserData.mode1LevelList_stage1ID) || [];
        var s = $userManager.User.get($userConst.UserData.mode1LevelList_stage2ID) || [];
        var c = ($userManager.User.get($userConst.UserData.mode2LevelList_stage1ID), $userManager.User.get($userConst.UserData.mode2LevelList_stage2ID), []);
        var l = [];

        if (1 == t) {
          $configManager.Config.get($configConst.ConfigConst.THEME + 1).then(function (t) {
            if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
              for (var e = 0; e < t.length; e++) {
                var n = t[e];
                c.push(n.stage1ID);
                l.push(n.stage2ID);
              }

              $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, c);
              $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, l);
            } else if (t.length > a.length && 0 != a.length) {
              for (e = 0; e < t.length; e++) {
                n = t[e];
                e > a.length - 1 && (c.push(n.stage1ID), l.push(n.stage2ID));
              }

              c = a.concat(c);
              l = s.concat(l);
              $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, c);
              $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, l);
            } else if (0 == a.length) {
              for (e = 0; e < t.length; e++) {
                n = t[e];
                c.push(n.stage1ID);
                l.push(n.stage2ID);
              }

              $userManager.User.set($userConst.UserData.mode1LevelList_stage1ID, c);
              $userManager.User.set($userConst.UserData.mode1LevelList_stage2ID, l);
            }

            $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
          });
        } else if (13 == t) {
          var f = $userManager.User.get("mode13LevelList_stage1ID") || [];
          var h = $userManager.User.get("mode13LevelList_stage2ID") || [];
          var g = [];
          var y = [];
          $configManager.Config.get($configConst.ConfigConst.THEME + 13).then(function (t) {
            if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
              for (var e = 0; e < t.length; e++) {
                var n = t[e];
                g.push(n.stage1ID);
                y.push(n.stage2ID);
              }

              $userManager.User.set("mode13LevelList_stage1ID", g);
              $userManager.User.set("mode13LevelList_stage2ID", y);
            } else if (t.length > f.length && 0 != f.length) {
              for (e = 0; e < t.length; e++) {
                n = t[e];
                e > f.length - 1 && (g.push(n.stage1ID), y.push(n.stage2ID));
              }

              g = f.concat(g);
              y = h.concat(y);
              $userManager.User.set("mode13LevelList_stage1ID", g);
              $userManager.User.set("mode13LevelList_stage2ID", y);
            } else if (0 == f.length) {
              for (e = 0; e < t.length; e++) {
                n = t[e];
                g.push(n.stage1ID);
                y.push(n.stage2ID);
              }

              $userManager.User.set("mode13LevelList_stage1ID", g);
              $userManager.User.set("mode13LevelList_stage2ID", y);
            }

            $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
          });
        } else {
          $configManager.Config.get($configConst.ConfigConst.THEME).then(function (n) {
            n.forEach(function (n) {
              if (n.theme != t) {//
              } else {
                e.handleModeByID(n.theme, function () {
                  $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
                });
              }
            });
          });
        }
      });
    }
  };

  e.prototype.clickFollowBtn = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "008"
    });
    $platformManager.Platform.follow(function (t) {
      if (0 != t) {//
      } else {
        console.log("关注成功");
        $userManager.User.get($userConst.UserData.isFollow);
      }
    });
  };

  e.prototype.clickLoveDog = function () {
    cc.game.emit("gamelog", "btn028");
    this.enterByMode(1);
  };

  e.prototype.clickDogStone = function () {
    cc.game.emit("gamelog", "btn029");
    this.enterByMode(2);
  };

  e.prototype.clickSecondMode = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "001"
    });
    cc.game.emit("gamelog", "modebtn_0");
    this.enterByMode(0);
  };

  e.prototype.click3Mode = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "003"
    });
    cc.game.emit("gamelog", "modebtn_2");
    this.enterByMode(2);
  };

  e.prototype.clickThirdMode = function () {
    var t = this;

    if (this.isAnim) {//
    } else {
      this.isAnim = !0;
      cc.game.emit("gamelog", "btn032");
      this.dict.moreModeBg.active = !this.dict.moreModeBg.active;

      if (this.isShow) {
        this.dict.moreModeBg.active = !0, this.dict.moreModeBg.opacity = 255, cc.tween(this.dict.moreModeBg).to(0.3, {
          opacity: 0
        }).call(function () {
          t.dict.moreModeBg.active = !1;
          t.isAnim = !1;
          t.isShow = !1;
        }).start();
      } else {
        this.dict.moreModeBg.opacity = 0, this.dict.moreModeBg.active = !0, console.log("测试"), cc.tween(this.dict.moreModeBg).to(0.3, {
          opacity: 255
        }).call(function () {
          t.isAnim = !1;
          t.isShow = !0;
        }).start();
      }

      if (0 == this.dict.arrow.angle) {
        this.dict.arrow.angle = 180;
      } else {
        this.dict.arrow.angle = 0;
      }
    }
  };

  e.prototype.clickBeeBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.BEE);
  };

  e.prototype.unlockAllModeBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.UNLOCK_ALL_MODE);
  };

  e.prototype.orderBtn = function () {
    var t = this.dict.orderID.getComponent(cc.EditBox).string;
    console.log("顺序id", t);

    if (this.isIntNum(t)) {
      console.log("是数字");
      $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, 0);
      $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, Number(t));

      if (this.isLoadingScene) {
        return;
      }

      this.isLoadingScene = !0;
      $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
    }
  };

  e.prototype.modeJumpBtn = function () {
    this.dict.darenModes.active = !0;
  };

  e.prototype.closeDaren = function () {
    this.dict.darenModes.active = !1;
  };

  e.prototype.enterByMode = function (t) {
    if ($bmsManager.BMS.getKey("newmodead") && -1 == ($userManager.User.get($userConst.UserData.UNLOCK_MODE_LIST) || []).indexOf(t)) {
      $userManager.User.setTempData($userConst.TempData.CURRENT_MODE_UNLOCK_ID, t);
      return void $popupManager["default"].show($popupConst.PopupConst.MODE_UNLOCK);
    }

    this.sucEnterByMode(t);
  };

  e.prototype.enterByMode2 = function (t) {
    window.modeID = t;
    this.dict.darenModes.children[1].active = !1;
    this.dict.EditBox.active = !0;
    this.dict.darenJump.active = !0;
  };

  e.prototype.darenJump = function () {
    var t = this.dict.EditBox.getComponent(cc.EditBox).string;

    if (this.isIntNum(t)) {
      console.log("是数字");
      $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, Number(window.modeID));
      $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, Number(t));
      $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
    }
  };

  e.prototype.isIntNum = function (t) {
    return !isNaN(parseFloat(t));
  };

  e.prototype.sucEnterByMode = function (t) {
    if (!this.isLoadingScene) {
      this.isLoadingScene = !0;
      $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t);
      var e = $userManager.User.get($userConst.UserData.LEVEL_LIST);
      $configUtils.ConfigUtils.setNextModeID();
      var n = 1;
      $configUtils.ConfigUtils.getDataByID(t, function (r) {
        n = r.amount;

        if (e[t] > n) {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
        } else {
          $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, e[t]);
        }

        $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
      });
    }
  };

  __decorate([H($recycleScroll["default"])], e.prototype, "scroll", void 0);

  __decorate([H([cc.SpriteFrame])], e.prototype, "ageSpriteFrame", void 0);

  __decorate([H([cc.SpriteFrame])], e.prototype, "btnIconSpriteFrame", void 0);

  return __decorate([V], e);
}($baseUI["default"]);

exports["default"] = q;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hvbWUuanMiXSwibmFtZXMiOlsiciIsIiRiYXNlVUkiLCJyZXF1aXJlIiwiJHJlY3ljbGVTY3JvbGwiLCIkY29uZmlnQ29uc3QiLCIkZXZlbnRDb25zdCIsIiRwbGF0Zm9ybUNvbnN0IiwiJHBvcHVwQ29uc3QiLCIkc2NlbmVDb25zdCIsIiR1c2VyQ29uc3QiLCIkYXVkaW9NYW5hZ2VyIiwiJGJtc01hbmFnZXIiLCIkY29uZmlnTWFuYWdlciIsIiRldmVudE1hbmFnZXIiLCIkbGFuZ3VhZ2VNYW5hZ2VyIiwiJHBsYXRmb3JtTWFuYWdlciIsIiRwb3B1cE1hbmFnZXIiLCIkc2NlbmVNYW5hZ2VyIiwiJHVzZXJNYW5hZ2VyIiwiJGNoYWxsZW5nZUh0dHAiLCIkY29uZmlnVXRpbHMiLCIkb1BQT0FuZHJvaWRBZFV0aWxzIiwiJHV0aWxzIiwiJHZJVk9BRFV0aWxzIiwiJHhNQURVdGlscyIsIiRtZW1vcnlTdG9yYWdlQ29uc3QiLCIkbWVtb3J5U3RvcmFnZU1hbmFnZXIiLCIkc2h1U2h1Q29uc3QiLCIkaG9tZUl0ZW0iLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkdklQU3lzdGVtIiwiJHRpcE1hbmFnZXIiLCIkY2hhbGxlbmdlU3lzdGVtIiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCJqIiwiY2MiLCJfZGVjb3JhdG9yIiwiViIsImNjY2xhc3MiLCJIIiwicHJvcGVydHkiLCJxIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInNjcm9sbCIsImNsaWNrVGltZXMiLCJhZ2VTcHJpdGVGcmFtZSIsImJ0bkljb25TcHJpdGVGcmFtZSIsImFuaW1OYW1lIiwic2Vjb25kTW9kZURhdGEiLCJ0aGlyZE1vZGVzRGF0YSIsImRhcmVuTW9kZXNEYXRhIiwiY2FyU3BlZWQiLCJtb3ZlVGltZXMiLCJtb3ZlVGltZXMyIiwic2Nyb2xsVHlwZSIsInJhbmtMaXN0IiwibXlSYW5rIiwiaXNMb2FkaW5nU2NlbmUiLCJpc0xvYWRQcml2YWN5IiwiaXNFbnRlclVnYyIsImlzQW5pbSIsImlzU2hvdyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJhZGRCdG5PbiIsImNsaWNrU2V0IiwiaGVyb0xldmVsQnRuIiwiY2xpY2tTdGFydCIsImNsaWNrSW5maW5pdGVQb3dlciIsImNsaWNrQWdlIiwiY2xpY2tQcml2YWN5IiwiY2xpY2tBcHBvaW50IiwiY2xpY2tNb3JlR2FtZSIsImNsaWNrQWdlQnRuIiwiY2xpY2tGb2xsb3dCdG4iLCJtb2RlQnRuRnVjIiwiYmluZCIsImNsaWNrVGhpcmRNb2RlIiwiY2xpY2tCZWVCdG4iLCJtb2RlSnVtcEJ0biIsImNsb3NlRGFyZW4iLCJ1bmxvY2tBbGxNb2RlQnRuIiwib3JkZXJCdG4iLCJ0b3BCdG4iLCJyYW5rQnRuIiwic2tpbkJ0biIsInBsYXlCdG4iLCJzaWduSW5CdG4iLCJzaG9wQnRuIiwicG9zaXRpb25CdG4iLCJsaW1pdFdlbGZhcmVCdG4iLCJzaGFyZUJ0biIsInZpcEJ0biIsInNwZWNpYWxCdG4iLCJuZXdIYW5kQnRuIiwic3VwZXJ2YWx1ZUJ0biIsIm5vQURCdG4iLCJzaGlwQnRuIiwidHVybnRhYmxlQnRuIiwicGxhbkJ0biIsImNoYWxsZW5nZUJ0biIsIm1hcEJ0biIsImNvbGxlY3RCdG4iLCJyb2xlQnRuIiwiZGljdCIsImNoZWF0cyIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiY2xpY2tDaGVhdHMiLCJjbGlja0JnIiwiX3RvdWNoTGlzdGVuZXIiLCJzZXRTd2FsbG93VG91Y2hlcyIsIlVzZXIiLCJzZXRUZW1wRGF0YSIsImluc3RhbmNlIiwibGFuIiwiUGxhdGZvcm0iLCJnZXRDb25maWciLCJsb2dvVHlwZSIsIkxvZ29UeXBlIiwiRHJlYW1TZXRVcCIsIkRyZWFtU2V0VXBfVEMiLCJEcmVhbVNldFVwX0VOIiwibG9nbyIsInJlc291cmNlcyIsImxvYWQiLCJuIiwiY29uc29sZSIsImxvZyIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJpbml0UGxhdGZvcm1VSSIsImluaXRWaWV3IiwiaXMiLCJFUGxhdGZvcm0iLCJYSUFPTUlfQU5EUk9JRCIsIlhNQUQiLCJzaG93SW5zZXJ0X211c3QiLCJnYW1lIiwiZW1pdCIsIlNodVNodUNvbnN0IiwicGFnZSIsImlkIiwic2NoZWR1bGUiLCJub2RlIiwiU2Nyb2xsVmlldyIsImdldENvbnRlbnRQb3NpdGlvbiIsInkiLCJwb3NpdGlvbkJ0blRleHQiLCJMYWJlbCIsInN0cmluZyIsInBvc2l0aW9uQnRuSWNvbiIsImxvbmd0b3VBbmltIiwibG9uZ3RvdSIsInNwIiwiU2tlbGV0b24iLCJzZXRBbmltYXRpb24iLCJidG4iLCJzaG93IiwiUG9wdXBDb25zdCIsIkxpbWl0V2VsZmFyZSIsInNoYXJlIiwiVklQIiwiU3BlY2lhbEdpZnQiLCJOZXdIYW5kIiwiU3VwZXJ2YWx1ZSIsInNldCIsInRvZGF5Q2xpY2tTaGlwIiwic2hpcEhpbnQiLCJhY3RpdmUiLCJnZXQiLCJ0b2RheVNoaXBFeHBpcmUiLCJTaGlwUmFjZSIsInNoaXBUaW1lIiwicGFyZW50Iiwib3BlblNoaXBXYXkiLCJTaGlwUmFjZTIiLCJVc2VyRGF0YSIsIkxFVkVMX0xJU1QiLCJjYW5UdXJudGFibGVUaW1lcyIsInR1cm50YWJsZVByb2dyZXNzU0YiLCJmaWxsUmFuZ2UiLCJMdWNrVHVybnRhYmxlIiwiVGlwIiwiZm9ybWF0U3RyIiwidG9kYXlDbGlja1BsYW4iLCJwbGFuSGludCIsIlBsYW4iLCJ0b2RheUNsaWNrQ2hhbGxlbmdlIiwiY2hhbGxlbmdlSGludCIsImxvYWRTY2VuZSIsIlNjZW5lQ29uc3QiLCJDaGFsbGVuZ2UiLCJDb2xsZWN0IiwiUm9sZSIsIk1hcCIsImhpZGVMaW1pdFdlbGZhcmVCdG4iLCJvbkVuYWJsZSIsIkV2ZW50IiwiVVBEQVRFX0lORklOSVRFX1BPV0VSIiwidXBkYXRlSW5maW5pdGVQb3dlciIsInVwZGF0ZVVubG9ja0FsbE1vZGUiLCJFTlRFUl9JRCIsInN1Y0VudGVyQnlNb2RlIiwiQ09JTl9VUERBVEUiLCJjaGFuZ2VLZXkiLCJzaWduSW5IaW50Iiwic2tpbkhpbnQiLCJoYXNQdXJjaGFzZSIsInNob3dIb21lQ29pbiIsInNwZWNpYWxfcGFjayIsInJlbW92ZV9hZHMiLCJ1cGRhdGVTaGlwVGltZSIsInNoaXBFeHBpcmUiLCJwaWdneV9iYW5rIiwiQ2hhbGxlbmdlU3lzIiwiY2hhbGxlbmdlRXhwaXJlIiwiY2hhbGxlbmdlRXhwaXJlX3RpbWVyRnVuIiwic3RhcnRlcl9wYWNrIiwic2hvd0Jhbm5lckZlZWQiLCJPUFBPX0FORFJPSUQiLCJPUFBPQW5kcm9pZEFkIiwiVklWTyIsIlZJVk9BRCIsInNob3dDdXN0b21BZF8xIiwib25EaXNhYmxlIiwib2ZmIiwiaGlkZUN1c3RvbUFkXzEiLCJoaWRlQ3VzdG9tQWRfMiIsImluZmluaXRlUG93ZXJCdG4iLCJfX2F3YWl0ZXIiLCJvIiwiaSIsImEiLCJjIiwibCIsInAiLCJfIiwiayIsIk0iLCJQIiwiVCIsIkEiLCJJIiwiRCIsIkUiLCJPIiwiTiIsInoiLCJHIiwiSyIsIlciLCJYIiwiWSIsIkoiLCJaIiwiUSIsIiQiLCJ0dCIsImV0IiwibnQiLCJydCIsIm90IiwiaXQiLCJhdCIsInN0IiwiY3QiLCJsdCIsInV0IiwiX19nZW5lcmF0b3IiLCJzIiwibGFiZWwiLCJDb25maWciLCJDb25maWdDb25zdCIsIlRIRU1FIiwic2VudCIsIlRlbXBEYXRhIiwiQ1VSUkVOVF9BTExfTU9ERSIsImxlbmd0aCIsInRoZW1lIiwicHVzaCIsIkFMUkVBRFlfUExBWSIsIkFMUkVBRFlfVU5MT0NLIiwiVU5MT0NLX0FMTF9NT0RFX1ZJREVPX1RJTUVTIiwiVU5MT0NLX01PREVfTElTVCIsIlBPV0VSX1RZUEUiLCJGSVJTVF9EQVlfREFURSIsImZsYWciLCJpbmRleE9mIiwiSVNfQ09NUEFUSUJMRV8yMzMiLCJKU09OIiwic3RyaW5naWZ5IiwiRGF0ZSIsImdldERhdGUiLCJCTVMiLCJnZXRLZXkiLCJJTkZfUE9XRVJfVklERU9fVElNRVMiLCJBdWRpbyIsInN0b3BNdXNpYyIsInZlcnNpb24iLCJXRUIiLCJvcmRlcklEIiwid2luZG93Iiwid3JvbmdmdWwiLCJTVE9QIiwianVkZ2VNYWluTW9kZSIsImdldFJhbmsiLCJ1cGRhdGVTa2luIiwidG9kYXlTaWduSW4iLCJ0b2RheU9wZW5TaWduSW4iLCJzaWduSW5EYXlzIiwic29tZSIsImdldFN5c3RlbUluZm9TeW5jIiwiYXBwTmFtZSIsIkVudGVyU2lkZWJhciIsImdldFRlbXBEYXRhIiwiaXNWSVAiLCJiYWNrVGltZXMiLCJoYXNWSVAiLCJjaGVja0Z1bGxBZCIsImlzUmVjZWl2ZVZJUCIsImNhcmRBbW91bnQiLCJyZXdhcmRUeXBlIiwicmV3YXJkIiwiR2V0IiwidmlwVGltZSIsImdldFN1cnBsdXNUaW1lU3RyIiwiaGFzU3BlY2lhbEJ0biIsInZhbHVlX3BhY2siLCJpc05vQUQiLCJyZW1vdmVfYWRzX3BhY2siLCJib3JlVGltZXMiLCJ0aXBUaW1lcyIsInNjcmV3Qm94VGltZXMiLCJOZXdWZXJzaW9uIiwic2hpcFN0YXJ0VGltZSIsImhhc1NoaXAiLCJ1bml2ZXJzYWxDYXJkIiwiY2hhbGxlbmdlU3RhcnRUaW1lIiwiY2hhbGxlbmdlVGltZSIsInBpZ0J0biIsImdyZWVuMSIsIm9wYWNpdHkiLCJ5ZWxsb3cxIiwiYmx1ZTMiLCJyZWQzIiwiY2FyTW92ZTEiLCJzY2hlZHVsZU9uY2UiLCJjYXJNb3ZlMiIsInR3ZWVuIiwiYnkiLCJ3aW5TaXplIiwid2lkdGgiLCJ4IiwicG9zaXRpb24iLCJ2MiIsIlV0aWxzIiwicmFuZG9tTnVtIiwic3RhcnQiLCJjb2luQW1vdW50IiwidHVybnRhYmxlUHJvZ3Jlc3MiLCJpc0ZpcnN0VHVybnRhYmxlIiwiZ2V0TG9ja1NraW5MaXN0Iiwic2tpbkxpc3QiLCJ1c2VTa2luSURMaXN0Iiwic2Nyb2xsVG9QZXJjZW50VmVydGljYWwiLCJUVCIsInNob3dSYW5rTGlzdCIsIlJhbmsiLCJQbGF5IiwiYWRkQ29pbkJ0biIsIlNpZ25JbiIsIlN0b3JlX3BhZ2UiLCJDYXJkU2hvcCIsIlNraW4iLCJzaG93VGltZSIsImdldE1vbnRoIiwicmFuayIsImNoYWxsZW5nZUh0dHAiLCJ0aGVuIiwidG90YWwiLCJsaXN0IiwicHJvdmluY2UiLCJzY29yZSIsInN1Y0dldFJhbmsiLCJSYW5rSFciLCJpbmNyUmFuayIsInNvcnQiLCJvbkl0ZW1SZW5kZXIiLCJvbkl0ZW1DbGlja2VkIiwibnVtSXRlbXMiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJmaW5kSW5kZXgiLCJ0b2RheUFtb3VudCIsImRlbGF5IiwidG8iLCJ1bmlvbiIsInJlcGVhdEZvcmV2ZXIiLCJzdGF0ZSIsIk5vcm1hbCIsImluZGV4Iiwic2V0RGF0YSIsIm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlEIiwibW9kZTBMZXZlbExpc3Rfc3RhZ2UySUQiLCJtb2RlMUxldmVsTGlzdF9zdGFnZTFJRCIsIm1vZGUxTGV2ZWxMaXN0X3N0YWdlMklEIiwibW9kZTJMZXZlbExpc3Rfc3RhZ2UxSUQiLCJtb2RlMkxldmVsTGlzdF9zdGFnZTJJRCIsImYiLCJjb25maWdTdWZmaXgiLCJzdGFnZTFJRCIsInN0YWdlMklEIiwiTWF0aCIsInJhbmRvbSIsImNvbmNhdCIsInUiLCJoIiwiZyIsInYiLCJ3IiwiaGFuZGxlTW9kZUJ5SUQiLCJ1cGRhdGVNb2RlVmlldyIsInNlY29uZEJ0biIsImNoaWxkcmVuIiwidGhlbWVOYW1lIiwibW9yZU1vZGVCZyIsIm5hbWUiLCJCdXR0b24iLCJhZGRDb21wb25lbnQiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJUT1VDSF9FTkQiLCJlbnRlckJ5TW9kZSIsImRhcmVuTW9kZXMiLCJlbnRlckJ5TW9kZTIiLCJmaXRVSVR5cGUiLCJGaXRVSVR5cGUiLCJLUyIsInRvcEJhciIsIldpZGdldCIsInRvcCIsInVwZGF0ZUFsaWdubWVudCIsInZpZXciLCJnZXRGcmFtZVNpemUiLCJoZWlnaHQiLCJib3R0b21CYXIiLCJib3R0b20iLCJoYXNBZ2VUaXAiLCJhZ2VCdG4iLCJhZ2VUaXBUeXBlIiwiQWdlVGlwVHlwZSIsIkFHRV8xMiIsInByaXZhY3lCdG4iLCJwcml2YWN5UG9saWN5VHlwZSIsIlByaXZhY3lQb2xpY3lUeXBlIiwiTk8iLCJtb3JlR2FtZUJ0biIsImhhc01vcmVHYW1lIiwiY3VzdG9tZXJTZXJ2aWNlIiwiaGFzQ3VzdG9tZXJTZXJ2aWNlIiwiT0hBWU9PX0FORFJPSUQiLCJRUSIsImFwcG9pbnRCdG4iLCJIVyIsIldYIiwid3giLCJ3aW5kb3dIZWlnaHQiLCJzaG93QmxvY2tBZHMiLCJsZWZ0IiwiaGlkZUNiIiwiaGlkZUJsb2NrQWRzIiwic2V0VGltZW91dCIsIk1JTklfR0FNRV9YTSIsImlzRE9VWUlOIiwiU0VUIiwiVGhlbWVUeXBlIiwiQ1VSUkVOVF9NT0RFIiwiQ29uZmlnVXRpbHMiLCJzZXROZXh0TW9kZUlEIiwiZ2V0RGF0YUJ5SUQiLCJhbW91bnQiLCJDVVJSRU5UX0xFVkVMIiwiR0FNRSIsIklORklOSVRFX1BPV0VSIiwiY2xpY2tIb3RNb2RlIiwiTU9ERV9TRUxFQ1QiLCJjbGlja01vcmVNb2RlIiwiQ0hFQVRTIiwiQUdFX1RJUCIsIk1JTklfR0FNRSIsIk1JTklfR0FNRV9WSVZPIiwiZXJyb3IiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwib3BlbiIsIk5BVElWRSIsInNob3dQcml2YWN5UG9saWN5Iiwib3BlblVzZXJQYW5lbEhhbmRsZSIsInNob3dNb3JlR2FtZSIsImNsaWNrTGV2ZWxTZWxlY3QiLCJMRVZFTF9TRUxFQ1QiLCJjbGlja0NyZWF0ZUJ0biIsImlzVW5sb2NrVWdjIiwiVUdDIiwiVU5MT0NLX1VHQyIsInNob3dSZXdhcmRBZHMiLCJtb2RlIiwiZW50ZXJCeU1vZGVfIiwiZm9sbG93IiwiaXNGb2xsb3ciLCJjbGlja0xvdmVEb2ciLCJjbGlja0RvZ1N0b25lIiwiY2xpY2tTZWNvbmRNb2RlIiwiY2xpY2szTW9kZSIsImFycm93IiwiYW5nbGUiLCJCRUUiLCJVTkxPQ0tfQUxMX01PREUiLCJFZGl0Qm94IiwiaXNJbnROdW0iLCJOdW1iZXIiLCJDVVJSRU5UX01PREVfVU5MT0NLX0lEIiwiTU9ERV9VTkxPQ0siLCJtb2RlSUQiLCJkYXJlbkp1bXAiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlJLGNBQWMsR0FBR0osT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlLLFdBQVcsR0FBR0wsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSU0sV0FBVyxHQUFHTixPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJTyxVQUFVLEdBQUdQLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlRLGFBQWEsR0FBR1IsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlTLFdBQVcsR0FBR1QsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSVUsY0FBYyxHQUFHVixPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSVcsYUFBYSxHQUFHWCxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSVksZ0JBQWdCLEdBQUdaLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJYSxnQkFBZ0IsR0FBR2IsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUljLGFBQWEsR0FBR2QsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUllLGFBQWEsR0FBR2YsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNB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QXNCc0wsU0FBdEIsQ0FBZ0MvTCxXQUFXLENBQUNnTSxVQUFaLENBQXVCdVMsSUFBdkQ7TUFDSCxDQVJEO0lBU0g7RUFDSixDQWpCRDs7RUFrQkE2QyxVQUFVLENBQUMsQ0FBQ3JmLENBQUMsQ0FBQ3BDLGNBQWMsV0FBZixDQUFGLENBQUQsRUFBOEJ3QyxDQUFDLENBQUN1QixTQUFoQyxFQUEyQyxRQUEzQyxFQUFxRCxLQUFLLENBQTFELENBQVY7O0VBQ0EwZCxVQUFVLENBQUMsQ0FBQ3JmLENBQUMsQ0FBQyxDQUFDSixFQUFFLENBQUN3RyxXQUFKLENBQUQsQ0FBRixDQUFELEVBQXdCaEcsQ0FBQyxDQUFDdUIsU0FBMUIsRUFBcUMsZ0JBQXJDLEVBQXVELEtBQUssQ0FBNUQsQ0FBVjs7RUFDQTBkLFVBQVUsQ0FBQyxDQUFDcmYsQ0FBQyxDQUFDLENBQUNKLEVBQUUsQ0FBQ3dHLFdBQUosQ0FBRCxDQUFGLENBQUQsRUFBd0JoRyxDQUFDLENBQUN1QixTQUExQixFQUFxQyxvQkFBckMsRUFBMkQsS0FBSyxDQUFoRSxDQUFWOztFQUNBLE9BQU8wZCxVQUFVLENBQUMsQ0FBQ3ZmLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0FydERPLENBcXRETDFDLE9BQU8sV0FydERGLENBQVI7O0FBc3REQTRoQixPQUFPLFdBQVAsR0FBa0JwZixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgJGJhc2VVSSA9IHJlcXVpcmUoXCIuL0Jhc2VVSVwiKTtcbnZhciAkcmVjeWNsZVNjcm9sbCA9IHJlcXVpcmUoXCIuL1JlY3ljbGVTY3JvbGxcIik7XG52YXIgJGNvbmZpZ0NvbnN0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29uc3RcIik7XG52YXIgJGV2ZW50Q29uc3QgPSByZXF1aXJlKFwiLi9FdmVudENvbnN0XCIpO1xudmFyICRwbGF0Zm9ybUNvbnN0ID0gcmVxdWlyZShcIi4vUGxhdGZvcm1Db25zdFwiKTtcbnZhciAkcG9wdXBDb25zdCA9IHJlcXVpcmUoXCIuL1BvcHVwQ29uc3RcIik7XG52YXIgJHNjZW5lQ29uc3QgPSByZXF1aXJlKFwiLi9TY2VuZUNvbnN0XCIpO1xudmFyICR1c2VyQ29uc3QgPSByZXF1aXJlKFwiLi9Vc2VyQ29uc3RcIik7XG52YXIgJGF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCIuL0F1ZGlvTWFuYWdlclwiKTtcbnZhciAkYm1zTWFuYWdlciA9IHJlcXVpcmUoXCIuL0Jtc01hbmFnZXJcIik7XG52YXIgJGNvbmZpZ01hbmFnZXIgPSByZXF1aXJlKFwiLi9Db25maWdNYW5hZ2VyXCIpO1xudmFyICRldmVudE1hbmFnZXIgPSByZXF1aXJlKFwiLi9FdmVudE1hbmFnZXJcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHNjZW5lTWFuYWdlciA9IHJlcXVpcmUoXCIuL1NjZW5lTWFuYWdlclwiKTtcbnZhciAkdXNlck1hbmFnZXIgPSByZXF1aXJlKFwiLi9Vc2VyTWFuYWdlclwiKTtcbnZhciAkY2hhbGxlbmdlSHR0cCA9IHJlcXVpcmUoXCIuL0NoYWxsZW5nZUh0dHBcIik7XG52YXIgJGNvbmZpZ1V0aWxzID0gcmVxdWlyZShcIi4vQ29uZmlnVXRpbHNcIik7XG52YXIgJG9QUE9BbmRyb2lkQWRVdGlscyA9IHJlcXVpcmUoXCIuL09QUE9BbmRyb2lkQWRVdGlsc1wiKTtcbnZhciAkdXRpbHMgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcbnZhciAkdklWT0FEVXRpbHMgPSByZXF1aXJlKFwiLi9WSVZPQURVdGlsc1wiKTtcbnZhciAkeE1BRFV0aWxzID0gcmVxdWlyZShcIi4vWE1BRFV0aWxzXCIpO1xudmFyICRtZW1vcnlTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi9NZW1vcnlTdG9yYWdlQ29uc3RcIik7XG52YXIgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTWVtb3J5U3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJHNodVNodUNvbnN0ID0gcmVxdWlyZShcIi4vU2h1U2h1Q29uc3RcIik7XG52YXIgJGhvbWVJdGVtID0gcmVxdWlyZShcIi4vSG9tZUl0ZW1cIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJHZJUFN5c3RlbSA9IHJlcXVpcmUoXCIuL1ZJUFN5c3RlbVwiKTtcbnZhciAkdGlwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1RpcE1hbmFnZXJcIik7XG52YXIgJGNoYWxsZW5nZVN5c3RlbSA9IHJlcXVpcmUoXCIuL0NoYWxsZW5nZVN5c3RlbVwiKTtcbnZhciAkbG9jYWxTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZU1hbmFnZXJcIik7XG52YXIgaiA9IGNjLl9kZWNvcmF0b3I7XG52YXIgViA9IGouY2NjbGFzcztcbnZhciBIID0gai5wcm9wZXJ0eTtcbnZhciBxID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuc2Nyb2xsID0gbnVsbDtcbiAgICAgICAgZS5jbGlja1RpbWVzID0gMDtcbiAgICAgICAgZS5hZ2VTcHJpdGVGcmFtZSA9IFtdO1xuICAgICAgICBlLmJ0bkljb25TcHJpdGVGcmFtZSA9IFtdO1xuICAgICAgICBlLmFuaW1OYW1lID0gXCJhbmdyeVwiO1xuICAgICAgICBlLnNlY29uZE1vZGVEYXRhID0gbnVsbDtcbiAgICAgICAgZS50aGlyZE1vZGVzRGF0YSA9IFtdO1xuICAgICAgICBlLmRhcmVuTW9kZXNEYXRhID0gW107XG4gICAgICAgIGUuY2FyU3BlZWQgPSA1MDA7XG4gICAgICAgIGUubW92ZVRpbWVzID0gITE7XG4gICAgICAgIGUubW92ZVRpbWVzMiA9ICExO1xuICAgICAgICBlLnNjcm9sbFR5cGUgPSAwO1xuICAgICAgICBlLnJhbmtMaXN0ID0gW107XG4gICAgICAgIGUubXlSYW5rID0gMTtcbiAgICAgICAgZS5pc0xvYWRpbmdTY2VuZSA9ICExO1xuICAgICAgICBlLmlzTG9hZFByaXZhY3kgPSAhMTtcbiAgICAgICAgZS5pc0VudGVyVWdjID0gITE7XG4gICAgICAgIGUuaXNBbmltID0gITE7XG4gICAgICAgIGUuaXNTaG93ID0gITE7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwic2V0QnRuXCIsIHRoaXMuY2xpY2tTZXQsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwicm9sZVJvb3RcIiwgdGhpcy5oZXJvTGV2ZWxCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwic3RhcnRCdG5cIiwgdGhpcy5jbGlja1N0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImluZmluaXRlUG93ZXJCdG5cIiwgdGhpcy5jbGlja0luZmluaXRlUG93ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiYWdlQnRuXCIsIHRoaXMuY2xpY2tBZ2UsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwicHJpdmFjeUJ0blwiLCB0aGlzLmNsaWNrUHJpdmFjeSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJhcHBvaW50QnRuXCIsIHRoaXMuY2xpY2tBcHBvaW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIm1vcmVHYW1lQnRuXCIsIHRoaXMuY2xpY2tNb3JlR2FtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJhZ2VCdG5cIiwgdGhpcy5jbGlja0FnZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJmb2xsb3dCdG5cIiwgdGhpcy5jbGlja0ZvbGxvd0J0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJtb2RlOTg1QnRuXCIsIHRoaXMubW9kZUJ0bkZ1Yy5iaW5kKHRoaXMsIDk4NSksIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwidGhpcmRCdG5cIiwgdGhpcy5jbGlja1RoaXJkTW9kZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJiZWVCdG5cIiwgdGhpcy5jbGlja0JlZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJtb2RlSnVtcEJ0blwiLCB0aGlzLm1vZGVKdW1wQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImNsb3NlRGFyZW5cIiwgdGhpcy5jbG9zZURhcmVuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInVubG9ja0FsbE1vZGVCdG5cIiwgdGhpcy51bmxvY2tBbGxNb2RlQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIm9yZGVyQnRuXCIsIHRoaXMub3JkZXJCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwidG9wQnRuXCIsIHRoaXMudG9wQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInJhbmtCdG5cIiwgdGhpcy5yYW5rQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInNraW5CdG5cIiwgdGhpcy5za2luQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInBsYXlCdG5cIiwgdGhpcy5wbGF5QnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInNpZ25JbkJ0blwiLCB0aGlzLnNpZ25JbkJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzaG9wQnRuXCIsIHRoaXMuc2hvcEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJwb3NpdGlvbkJ0blwiLCB0aGlzLnBvc2l0aW9uQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImxpbWl0V2VsZmFyZUJ0blwiLCB0aGlzLmxpbWl0V2VsZmFyZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzaGFyZUJ0blwiLCB0aGlzLnNoYXJlQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcInZpcEJ0blwiLCB0aGlzLnZpcEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzcGVjaWFsQnRuXCIsIHRoaXMuc3BlY2lhbEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJuZXdIYW5kQnRuXCIsIHRoaXMubmV3SGFuZEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzdXBlcnZhbHVlQnRuXCIsIHRoaXMuc3VwZXJ2YWx1ZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJub0FEQnRuXCIsIHRoaXMubm9BREJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzaGlwQnRuXCIsIHRoaXMuc2hpcEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJ0dXJudGFibGVCdG5cIiwgdGhpcy50dXJudGFibGVCdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwicGxhbkJ0blwiLCB0aGlzLnBsYW5CdG4sIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiY2hhbGxlbmdlQnRuXCIsIHRoaXMuY2hhbGxlbmdlQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIm1hcEJ0blwiLCB0aGlzLm1hcEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJjb2xsZWN0QnRuXCIsIHRoaXMuY29sbGVjdEJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJyb2xlQnRuXCIsIHRoaXMucm9sZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGljdC5jaGVhdHMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuY2xpY2tDaGVhdHMsIHRoaXMpO1xuICAgICAgICB0aGlzLmRpY3QuY2xpY2tCZy5vbihcbiAgICAgICAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChlLmlzU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBlLmNsaWNrVGhpcmRNb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMuZGljdC5jbGlja0JnLl90b3VjaExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY2xpY2tCZy5fdG91Y2hMaXN0ZW5lci5zZXRTd2FsbG93VG91Y2hlcyghMSk7XG4gICAgICAgIH1cbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJjdXJyZW50U2NlbmVfXCIsIDEpO1xuICAgICAgICBpZiAoXCJ6aFwiID09ICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5pbnN0YW5jZS5sYW4pIHtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkubG9nb1R5cGUgPSAkcGxhdGZvcm1Db25zdC5Mb2dvVHlwZS5EcmVhbVNldFVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFwidGNcIiA9PSAkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuaW5zdGFuY2UubGFuKSB7XG4gICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5sb2dvVHlwZSA9ICRwbGF0Zm9ybUNvbnN0LkxvZ29UeXBlLkRyZWFtU2V0VXBfVEM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkubG9nb1R5cGUgPSAkcGxhdGZvcm1Db25zdC5Mb2dvVHlwZS5EcmVhbVNldFVwX0VOO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpY3QubG9nbykge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJ0ZXh0dXJlL2xvZ28vbG9nb1wiICsgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5sb2dvVHlwZSwgZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuZGljdC5sb2dvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKG4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0UGxhdGZvcm1VSSgpO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5YSUFPTUlfQU5EUk9JRCkpIHtcbiAgICAgICAgICAgICR4TUFEVXRpbHMuWE1BRC5zaG93SW5zZXJ0X211c3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5wYWdlLCB7XG4gICAgICAgICAgICBpZDogXCIwMDFcIlxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zY3JvbGwubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuZ2V0Q29udGVudFBvc2l0aW9uKCkueSA+IDkwMCkge1xuICAgICAgICAgICAgICAgICAgICBlLnNjcm9sbFR5cGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBlLmRpY3QucG9zaXRpb25CdG5UZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLlm57liLDpobbpg6hcIjtcbiAgICAgICAgICAgICAgICAgICAgZS5kaWN0LnBvc2l0aW9uQnRuSWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGUuYnRuSWNvblNwcml0ZUZyYW1lW2Uuc2Nyb2xsVHlwZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zY3JvbGxUeXBlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZS5kaWN0LnBvc2l0aW9uQnRuVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5oiR55qE5L2N572uXCI7XG4gICAgICAgICAgICAgICAgICAgIGUuZGljdC5wb3NpdGlvbkJ0bkljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBlLmJ0bkljb25TcHJpdGVGcmFtZVtlLnNjcm9sbFR5cGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmxvbmd0b3VBbmltID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGljdC5sb25ndG91LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgITApO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChcImFuZ3J5XCIgPT0gdC5hbmltTmFtZSkge1xuICAgICAgICAgICAgICAgIHQuZGljdC5sb25ndG91LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZTFcIiwgITApO1xuICAgICAgICAgICAgICAgIHQuYW5pbU5hbWUgPSBcImlkbGUxXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQuZGljdC5sb25ndG91LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5ncnlcIiwgITApO1xuICAgICAgICAgICAgICAgIHQuYW5pbU5hbWUgPSBcImFuZ3J5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubGltaXRXZWxmYXJlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxpbWl0V2VsZmFyZUJ0blwiKTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICBpZDogXCIwMDlcIlxuICAgICAgICB9KTtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5MaW1pdFdlbGZhcmUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hhcmVCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hhcmUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnZpcEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5WSVApO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3BlY2lhbEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5TcGVjaWFsR2lmdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5uZXdIYW5kQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0Lk5ld0hhbmQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VwZXJ2YWx1ZUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5TdXBlcnZhbHVlKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm5vQURCdG4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBlLnByb3RvdHlwZS5zaGlwQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC50b2RheUNsaWNrU2hpcCwgMSk7XG4gICAgICAgIHRoaXMuZGljdC5zaGlwSGludC5hY3RpdmUgPSAhMTtcbiAgICAgICAgaWYgKCRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnRvZGF5U2hpcEV4cGlyZSkpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuU2hpcFJhY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5zaGlwVGltZS5wYXJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5vcGVuU2hpcFdheSwgXCJob21lXCIpLFxuICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlNoaXBSYWNlMiwgbnVsbCwgITEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlNoaXBSYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudHVybnRhYmxlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5MRVZFTF9MSVNUKSB8fCB7fTtcbiAgICAgICAgdmFyIG4gPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYW5UdXJudGFibGVUaW1lcykgfHwgMDtcbiAgICAgICAgaWYgKGVbMF0gPD0gNikge1xuICAgICAgICAgICAgdCA9IDYgLSBuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdCA9IDggLSBuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpY3QudHVybnRhYmxlUHJvZ3Jlc3NTRi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPj0gMSkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5MdWNrVHVybnRhYmxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KCRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLlho3pgJrov4clZOWFs+W8gOWQr1wiLCB0KSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnBsYW5CdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnRvZGF5Q2xpY2tQbGFuLCAxKTtcbiAgICAgICAgdGhpcy5kaWN0LnBsYW5IaW50LmFjdGl2ZSA9ICExO1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlBsYW4sIG51bGwsICExKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYWxsZW5nZUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC50b2RheUNsaWNrQ2hhbGxlbmdlLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5jaGFsbGVuZ2VIaW50LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgJHNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZSgkc2NlbmVDb25zdC5TY2VuZUNvbnN0LkNoYWxsZW5nZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNvbGxlY3RCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuQ29sbGVjdCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yb2xlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlJvbGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUubWFwQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0Lk1hcCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oaWRlTGltaXRXZWxmYXJlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QubGltaXRXZWxmYXJlQnRuLmFjdGl2ZSA9ICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSU5GSU5JVEVfUE9XRVIsIHRoaXMudXBkYXRlSW5maW5pdGVQb3dlciwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC51cGRhdGVVbmxvY2tBbGxNb2RlLCB0aGlzLnVwZGF0ZVVubG9ja0FsbE1vZGUsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKCRldmVudENvbnN0LmRlZmF1bHQuRU5URVJfSUQsIHRoaXMuc3VjRW50ZXJCeU1vZGUsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKCRldmVudENvbnN0LmRlZmF1bHQuaGlkZUxpbWl0V2VsZmFyZUJ0biwgdGhpcy5oaWRlTGltaXRXZWxmYXJlQnRuLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vbigkZXZlbnRDb25zdC5kZWZhdWx0LkNPSU5fVVBEQVRFLCB0aGlzLmNoYW5nZUtleSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJzaWduSW5IaW50XCIsIHRoaXMuc2lnbkluSGludCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJza2luSGludFwiLCB0aGlzLnNraW5IaW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImhhc1B1cmNoYXNlXCIsIHRoaXMuaGFzUHVyY2hhc2UsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic2hvd0hvbWVDb2luXCIsIHRoaXMuc2hvd0hvbWVDb2luLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInNwZWNpYWxfcGFja1wiLCB0aGlzLnNwZWNpYWxfcGFjaywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJyZW1vdmVfYWRzXCIsIHRoaXMucmVtb3ZlX2FkcywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJjYW5UdXJudGFibGVUaW1lc1wiLCB0aGlzLmNhblR1cm50YWJsZVRpbWVzLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcInVwZGF0ZVNoaXBUaW1lXCIsIHRoaXMudXBkYXRlU2hpcFRpbWUsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic2hpcEV4cGlyZVwiLCB0aGlzLnNoaXBFeHBpcmUsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiY2xpY2tTdGFydFwiLCB0aGlzLmNsaWNrU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwicGlnZ3lfYmFua1wiLCB0aGlzLnBpZ2d5X2JhbmssIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiQ2hhbGxlbmdlU3lzXCIsIHRoaXMuQ2hhbGxlbmdlU3lzLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImNoYWxsZW5nZUV4cGlyZVwiLCB0aGlzLmNoYWxsZW5nZUV4cGlyZSwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJjaGFsbGVuZ2VFeHBpcmVfdGltZXJGdW5cIiwgdGhpcy5jaGFsbGVuZ2VFeHBpcmVfdGltZXJGdW4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwic3RhcnRlcl9wYWNrXCIsIHRoaXMuc3RhcnRlcl9wYWNrLCB0aGlzKTtcbiAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLlhJQU9NSV9BTkRST0lEKSkge1xuICAgICAgICAgICAgJHhNQURVdGlscy5YTUFELnNob3dCYW5uZXJGZWVkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uT1BQT19BTkRST0lEKSkge1xuICAgICAgICAgICAgICAgICRvUFBPQW5kcm9pZEFkVXRpbHMuT1BQT0FuZHJvaWRBZC5zaG93QmFubmVyRmVlZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5WSVZPKSAmJiAkdklWT0FEVXRpbHMuVklWT0FELnNob3dDdXN0b21BZF8xKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vZmYoJGV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSU5GSU5JVEVfUE9XRVIsIHRoaXMudXBkYXRlSW5maW5pdGVQb3dlciwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQudXBkYXRlVW5sb2NrQWxsTW9kZSwgdGhpcy51cGRhdGVVbmxvY2tBbGxNb2RlLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vZmYoJGV2ZW50Q29uc3QuZGVmYXVsdC5FTlRFUl9JRCwgdGhpcy5zdWNFbnRlckJ5TW9kZSwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQuaGlkZUxpbWl0V2VsZmFyZUJ0biwgdGhpcy5oaWRlTGltaXRXZWxmYXJlQnRuLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vZmYoJGV2ZW50Q29uc3QuZGVmYXVsdC5DT0lOX1VQREFURSwgdGhpcy5jaGFuZ2VLZXksIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInNpZ25JbkhpbnRcIiwgdGhpcy5zaWduSW5IaW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJza2luSGludFwiLCB0aGlzLnNraW5IaW50LCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJoYXNQdXJjaGFzZVwiLCB0aGlzLmhhc1B1cmNoYXNlLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJzaG93SG9tZUNvaW5cIiwgdGhpcy5zaG93SG9tZUNvaW4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInNwZWNpYWxfcGFja1wiLCB0aGlzLnNwZWNpYWxfcGFjaywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwicmVtb3ZlX2Fkc1wiLCB0aGlzLnJlbW92ZV9hZHMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcImNhblR1cm50YWJsZVRpbWVzXCIsIHRoaXMuY2FuVHVybnRhYmxlVGltZXMsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInVwZGF0ZVNoaXBUaW1lXCIsIHRoaXMudXBkYXRlU2hpcFRpbWUsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInNoaXBFeHBpcmVcIiwgdGhpcy5zaGlwRXhwaXJlLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJjbGlja1N0YXJ0XCIsIHRoaXMuY2xpY2tTdGFydCwgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwicGlnZ3lfYmFua1wiLCB0aGlzLnBpZ2d5X2JhbmssIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcIkNoYWxsZW5nZVN5c1wiLCB0aGlzLkNoYWxsZW5nZVN5cywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub2ZmKFwiY2hhbGxlbmdlRXhwaXJlXCIsIHRoaXMuY2hhbGxlbmdlRXhwaXJlLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vZmYoXCJjaGFsbGVuZ2VFeHBpcmVfdGltZXJGdW5cIiwgdGhpcy5jaGFsbGVuZ2VFeHBpcmVfdGltZXJGdW4sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9mZihcInN0YXJ0ZXJfcGFja1wiLCB0aGlzLnN0YXJ0ZXJfcGFjaywgdGhpcyk7XG4gICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUN1c3RvbUFkXzEoKTtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlQ3VzdG9tQWRfMigpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlSW5maW5pdGVQb3dlciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0aGlzLmRpY3QuaW5maW5pdGVQb3dlckJ0bikge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmluZmluaXRlUG93ZXJCdG4uYWN0aXZlID0gIXQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZVVubG9ja0FsbE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpY3QudW5sb2NrQWxsTW9kZUJ0bikge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnVubG9ja0FsbE1vZGVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICB2YXIgcDtcbiAgICAgICAgICAgIHZhciBfO1xuICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICB2YXIgTTtcbiAgICAgICAgICAgIHZhciBQO1xuICAgICAgICAgICAgdmFyIFQ7XG4gICAgICAgICAgICB2YXIgQTtcbiAgICAgICAgICAgIHZhciBJO1xuICAgICAgICAgICAgdmFyIEQ7XG4gICAgICAgICAgICB2YXIgRTtcbiAgICAgICAgICAgIHZhciBPO1xuICAgICAgICAgICAgdmFyIE47XG4gICAgICAgICAgICB2YXIgajtcbiAgICAgICAgICAgIHZhciBWO1xuICAgICAgICAgICAgdmFyIEg7XG4gICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgIHZhciB6O1xuICAgICAgICAgICAgdmFyIEc7XG4gICAgICAgICAgICB2YXIgSztcbiAgICAgICAgICAgIHZhciBXO1xuICAgICAgICAgICAgdmFyIFg7XG4gICAgICAgICAgICB2YXIgWTtcbiAgICAgICAgICAgIHZhciBKO1xuICAgICAgICAgICAgdmFyIFo7XG4gICAgICAgICAgICB2YXIgUTtcbiAgICAgICAgICAgIHZhciAkO1xuICAgICAgICAgICAgdmFyIHR0O1xuICAgICAgICAgICAgdmFyIGV0O1xuICAgICAgICAgICAgdmFyIG50O1xuICAgICAgICAgICAgdmFyIHJ0O1xuICAgICAgICAgICAgdmFyIG90O1xuICAgICAgICAgICAgdmFyIGl0O1xuICAgICAgICAgICAgdmFyIGF0O1xuICAgICAgICAgICAgdmFyIHN0O1xuICAgICAgICAgICAgdmFyIGN0O1xuICAgICAgICAgICAgdmFyIGx0O1xuICAgICAgICAgICAgdmFyIHV0ID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCkgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IHMuc2VudCgpLCAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfQUxMX01PREUsIGUpLCBBID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIDwgZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSsrXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gZVtBXS50aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0W29dIHx8ICh0W29dID0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDIgPT0gZVtBXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY29uZE1vZGVEYXRhID0gZVtBXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW0FdLmlkID49IDMgJiYgdGhpcy50aGlyZE1vZGVzRGF0YS5wdXNoKGVbQV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhcmVuTW9kZXNEYXRhLnB1c2goZVtBXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QsIHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9QTEFZKSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSA8IGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEErK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGVbQV0udGhlbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbltvXSB8fCAobltvXSA9IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9QTEFZLCBuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfVU5MT0NLKSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSA8IGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEErK1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGVbQV0udGhlbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcltvXSB8fCAocltvXSA9IFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5BTFJFQURZX1VOTE9DSywgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuVU5MT0NLX0FMTF9NT0RFX1ZJREVPX1RJTUVTKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLlVOTE9DS19NT0RFX0xJU1QpIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC51bmxvY2tBbGxNb2RlQnRuICYmICgyID09IGkgfHwgYS5sZW5ndGggPj0gZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnVubG9ja0FsbE1vZGVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLlBPV0VSX1RZUEUsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkZJUlNUX0RBWV9EQVRFKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ICB55So5oi3XCIsICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZmxhZy5pbmRleE9mKFwidHRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT0gJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLmluZGV4T2YoXCJ0dFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHAgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5JU19DT01QQVRJQkxFXzIzMykgfHwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5bey57uP5YW85a65XCIsIHApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChQIGluICgoXyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbExpc3RcIiwgSlNPTi5zdHJpbmdpZnkoXykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoayA9IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKE0gPSB7fSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUID0gX1tQXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtbUF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1bUF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoQSA9IDE7IEEgPD0gVCAtIDEgJiYgIShrW1BdLmxlbmd0aCA+PSA1ODApOyBBKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrW1BdLnB1c2goQSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKEEgPSAxOyBBIDw9IFQgJiYgIShrW1BdLmxlbmd0aCA+PSA1ODApOyBBKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNW1BdLnB1c2goQSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLpgJrlhbPliJfooahcIiwgSlNPTi5zdHJpbmdpZnkoaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuino+mUgeWIl+ihqFwiLCBKU09OLnN0cmluZ2lmeShNKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLklTX0NPTVBBVElCTEVfMjMzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9QTEFZLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9VTkxPQ0ssIE0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChQIGluICgkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5GSVJTVF9EQVlfREFURSwgbmV3IERhdGUoKS5nZXREYXRlKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsID0ge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChNID0ge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobFtQXSA9IFtdKSwgKE1bUF0gPSBbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLklTX0NPTVBBVElCTEVfMjMzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5BTFJFQURZX1BMQVksIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfVU5MT0NLLCBNKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEkgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiR01cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2hlYXRzLmFjdGl2ZSA9ICEhSTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiQWxsVGhlbWVVbmxvY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnVubG9ja0FsbE1vZGVCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudW5sb2NrQWxsTW9kZUJ0bi5hY3RpdmUgPSAhIUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBFID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcIld1eGlhblRpTGlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LmluZmluaXRlUG93ZXJCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuaW5maW5pdGVQb3dlckJ0bi5hY3RpdmUgPSAwICE9IEU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuSU5GX1BPV0VSX1ZJREVPX1RJTUVTKSA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbmZpbml0ZVBvd2VyKCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICRhdWRpb01hbmFnZXIuQXVkaW8uc3RvcE11c2ljKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwicGFnZTAwMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC52ZXJzaW9uLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZcIiArICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkudmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XRUIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm9yZGVySUQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm9yZGVyQnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Qub3JkZXJJRC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Qub3JkZXJCdG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lndyb25nZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5TVE9QKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VNYWluTW9kZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmFuaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTa2luKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBPID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwic2hha2VBbW91bnRcIikgfHwgNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcInNoYWtlQW1vdW50XCIsIE8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudG9kYXlTaWduSW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgTiA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnRvZGF5T3BlblNpZ25JbikgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5zaWduSW5EYXlzKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNpZ25JbkJ0bi5hY3RpdmUgPSBqIDwgNztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zaWduSW5IaW50LmFjdGl2ZSA9IGogPCA3ICYmIDAgPT0gTjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpbkhpbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnR0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRG91eWluXCIsIFwiZG91eWluX2xpdGVcIiwgXCJsaXZlX3N0cmVhbVwiLCBcImF3ZW1lX2hvdHNvb25cIl0uc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9PSB3aW5kb3cudHQuZ2V0U3lzdGVtSW5mb1N5bmMoKS5hcHBOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuRW50ZXJTaWRlYmFyKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yik5pat5oyJ6ZKuXCIsIFYsIDIgIT0gVik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDIgIT0gVikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaYvuekuuaMiemSrlwiKSwgKHRoaXMuZGljdC5saW1pdFdlbGZhcmVCdG4uYWN0aXZlID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiN5pi+56S65oyJ6ZKuXCIpLCAodGhpcy5kaWN0LmxpbWl0V2VsZmFyZUJ0bi5hY3RpdmUgPSAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNQdXJjaGFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiYWxsXCIgPT0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcInNoYXJlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNoYXJlQnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgSCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwiYmFja0J5R2FtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEgPSAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LmlzVklQKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHogPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5iYWNrVGltZXMpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5oYXNQdXJjaGFzZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzVklQICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMiA9PSB6XG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlZJUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEcgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiQmFja0hvbWVBZFwiKSkgJiYgSCAmJiB6ID49IEcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhY2tIb21lQWQt6Kem5Y+R5o+S5bGP5bm/5ZGKXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LmNoZWNrRnVsbEFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiYmFja0J5R2FtZVwiLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBLID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuaXNSZWNlaXZlVklQKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHEgJiYgIUspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FyZEFtb3VudCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBYID0gVyArIDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FyZEFtb3VudCwgWCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZXdhcmRUeXBlLCBcIlZJUENhcmRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5yZXdhcmQsIFtbXCJjYXJkXCIsIDVdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuaXNSZWNlaXZlVklQLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LkdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnZpcFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LnZpcFRpbWUuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC52aXBUaW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdklQU3lzdGVtLmRlZmF1bHQuZ2V0U3VycGx1c1RpbWVTdHIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnZpcFRpbWUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5zcGVjaWFsQnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lmhhc1NwZWNpYWxCdG4pIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSiA9ICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuc3BlY2lhbF9wYWNrKSB8fCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc3BlY2lhbEJ0bi5hY3RpdmUgPSAhWSAmJiAhSjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QubmV3SGFuZEJ0bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFogPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5zdGFydGVyX3BhY2spIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm5ld0hhbmRCdG4uYWN0aXZlID0gIVo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0Lm5ld0hhbmRCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0Lm5ld0hhbmRCdG4uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnZhbHVlX3BhY2spIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zdXBlcnZhbHVlQnRuLmFjdGl2ZSA9ICFRO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICQgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5pc05vQUQpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dCA9ICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucmVtb3ZlX2FkcykgfHwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBldCA9ICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQucmVtb3ZlX2Fkc19wYWNrKSB8fCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmlzTm9BRCwgJCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0Lm5vQURCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCB8fCB0dCB8fCBldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0Lm5vQURCdG4uYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuaXNOb0FELCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Qubm9BREJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBudCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLmJvcmVUaW1lcykgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudGlwVGltZXMpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNjcmV3Qm94VGltZXMpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISR1c2VyTWFuYWdlci5Vc2VyLmdldChcIk5ld1ZlcnNpb25cIikgJiYgKG50IHx8IHJ0IHx8IG90KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIk5ld1ZlcnNpb25cIiwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuTmV3VmVyc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblR1cm50YWJsZVRpbWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnNoaXBCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnNoaXBTdGFydFRpbWUpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbMF0gPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2hpcEJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2hpcEJ0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zaGlwQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2hpcFRpbWUucGFyZW50LmFjdGl2ZSA9IDAgIT0gaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnNoaXBIaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC50b2RheUNsaWNrU2hpcCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2hpcEhpbnQuYWN0aXZlID0gIWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC52aXBCdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5oYXNQdXJjaGFzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LnNob3BCdG4uYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5oYXNWSVAgJiYgKHRoaXMuZGljdC52aXBCdG4uYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC51bml2ZXJzYWxDYXJkLmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QudHVybnRhYmxlQnRuLmFjdGl2ZSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0Lm5vQURCdG4uYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5zcGVjaWFsQnRuLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QudmlwQnRuLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3Quc2hvcEJ0bi5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LnVuaXZlcnNhbENhcmQuYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5zaGlwQnRuLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QudHVybnRhYmxlQnRuLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubmV3SGFuZEJ0bi5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LnN1cGVydmFsdWVCdG4uYWN0aXZlID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QudW5pdmVyc2FsQ2FyZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC51bml2ZXJzYWxDYXJkLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzUHVyY2hhc2UgJiYgdGhpcy5kaWN0LnBsYW5CdG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QucGxhbkJ0bi5hY3RpdmUgPSB0WzBdID49IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3QgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC50b2RheUNsaWNrUGxhbikgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QucGxhbkhpbnQuYWN0aXZlID0gIXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzUHVyY2hhc2UgJiYgdGhpcy5kaWN0LmNoYWxsZW5nZUJ0bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jaGFsbGVuZ2VCdG4uYWN0aXZlID0gdFswXSA+IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdCA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnRvZGF5Q2xpY2tDaGFsbGVuZ2UpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsdCA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNoYWxsZW5nZVN0YXJ0VGltZSkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QuY2hhbGxlbmdlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmNoYWxsZW5nZUhpbnQuYWN0aXZlID0gIWN0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QuY2hhbGxlbmdlVGltZS5wYXJlbnQuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5jaGFsbGVuZ2VUaW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2hhbGxlbmdlU3lzdGVtLmRlZmF1bHQuZ2V0U3VycGx1c1RpbWVTdHIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNoYWxsZW5nZVRpbWUucGFyZW50LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3QucGlnQnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnBpZ0J0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlS2V5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LmdyZWVuMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5ncmVlbjEub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnllbGxvdzEub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmJsdWUzLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yZWQzLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyTW92ZTEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0LmNhck1vdmUyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC42KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaGVyb0xldmVsQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlJvbGUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2FyTW92ZTEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmICh0aGlzLm1vdmVUaW1lcykge1xuICAgICAgICAgICAgZSA9IHRoaXMuZGljdC5ncmVlbjE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlID0gdGhpcy5kaWN0LnllbGxvdzE7XG4gICAgICAgIH1cbiAgICAgICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICBjYy50d2VlbihlKVxuICAgICAgICAgICAgLmJ5KChjYy53aW5TaXplLndpZHRoICsgMjAwKSAvIHRoaXMuY2FyU3BlZWQsIHtcbiAgICAgICAgICAgICAgICB4OiBjYy53aW5TaXplLndpZHRoICsgMjAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHQubW92ZVRpbWVzID0gIXQubW92ZVRpbWVzO1xuICAgICAgICAgICAgICAgIGUucG9zaXRpb24gPSBjYy52MigtNDc2LjUzNCwgLTU5KTtcbiAgICAgICAgICAgICAgICBlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBuID0gJHV0aWxzLlV0aWxzLnJhbmRvbU51bSgyLCA2KTtcbiAgICAgICAgICAgICAgICB0LnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuY2FyTW92ZTEoKTtcbiAgICAgICAgICAgICAgICB9LCBuKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNhck1vdmUyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAodGhpcy5tb3ZlVGltZXMyKSB7XG4gICAgICAgICAgICBlID0gdGhpcy5kaWN0LmJsdWUzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSA9IHRoaXMuZGljdC5yZWQzO1xuICAgICAgICB9XG4gICAgICAgIGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgY2MudHdlZW4oZSlcbiAgICAgICAgICAgIC5ieSgoY2Mud2luU2l6ZS53aWR0aCArIDMwMCkgLyB0aGlzLmNhclNwZWVkLCB7XG4gICAgICAgICAgICAgICAgeDogLShjYy53aW5TaXplLndpZHRoICsgMzAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0Lm1vdmVUaW1lczIgPSAhdC5tb3ZlVGltZXMyO1xuICAgICAgICAgICAgICAgIGUucG9zaXRpb24gPSBjYy52Mig1MjAuMTcsIDUyLjkxNyk7XG4gICAgICAgICAgICAgICAgZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9ICR1dGlscy5VdGlscy5yYW5kb21OdW0oMiwgNik7XG4gICAgICAgICAgICAgICAgdC5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0LmNhck1vdmUyKCk7XG4gICAgICAgICAgICAgICAgfSwgbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zdGFydGVyX3BhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5uZXdIYW5kQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICB2YXIgdCA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnZhbHVlX3BhY2spIHx8IDA7XG4gICAgICAgIHRoaXMuZGljdC5zdXBlcnZhbHVlQnRuLmFjdGl2ZSA9ICF0O1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2hhbmdlS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kaWN0LmNvaW5BbW91bnQpIHtcbiAgICAgICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwiY29pblwiKSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmNvaW5BbW91bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucGlnZ3lfYmFuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaWN0LnBpZ0J0bi5hY3RpdmUgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLkNoYWxsZW5nZVN5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGljdC5jaGFsbGVuZ2VUaW1lKSB7XG4gICAgICAgICAgICB2YXIgdCA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnRvZGF5Q2xpY2tDaGFsbGVuZ2UpIHx8IDA7XG4gICAgICAgICAgICBpZiAoJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2hhbGxlbmdlU3RhcnRUaW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jaGFsbGVuZ2VIaW50LmFjdGl2ZSA9ICF0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jaGFsbGVuZ2VUaW1lLnBhcmVudC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2hhbGxlbmdlVGltZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICRjaGFsbGVuZ2VTeXN0ZW0uZGVmYXVsdC5nZXRTdXJwbHVzVGltZVN0cigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2hhbGxlbmdlVGltZS5wYXJlbnQuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYWxsZW5nZUV4cGlyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGljdC5jaGFsbGVuZ2VUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY2hhbGxlbmdlVGltZS5wYXJlbnQuYWN0aXZlID0gITE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoYWxsZW5nZUV4cGlyZV90aW1lckZ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGljdC5jaGFsbGVuZ2VUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY2hhbGxlbmdlVGltZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICRjaGFsbGVuZ2VTeXN0ZW0uZGVmYXVsdC5nZXRTdXJwbHVzVGltZVN0cigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVTaGlwVGltZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLnNoaXBFeHBpcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5zaGlwVGltZS5wYXJlbnQuYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zcGVjaWFsX3BhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5zcGVjaWFsQnRuLmFjdGl2ZSA9ICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmVtb3ZlX2FkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaWN0Lm5vQURCdG4uYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jYW5UdXJudGFibGVUaW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGljdC50dXJudGFibGVQcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5MRVZFTF9MSVNUKSB8fCB7fTtcbiAgICAgICAgICAgIHZhciBlID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FuVHVybnRhYmxlVGltZXMpIHx8IDA7XG4gICAgICAgICAgICB2YXIgbiA9IDg7XG4gICAgICAgICAgICBpZiAoJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuaXNGaXJzdFR1cm50YWJsZSkpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuID0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlIDw9IDApIHtcbiAgICAgICAgICAgICAgICBlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRbMF07XG4gICAgICAgICAgICB0aGlzLmRpY3QudHVybnRhYmxlUHJvZ3Jlc3MuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBlICsgXCIvXCIgKyBuO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnR1cm50YWJsZVByb2dyZXNzU0YuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gZSAvIG47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmhhc1B1cmNoYXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kaWN0LnNob3BCdG4pIHtcbiAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc1B1cmNoYXNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNob3BCdG4uYWN0aXZlID0gITA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zaG9wQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaWduSW5IaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3Quc2lnbkluSGludC5hY3RpdmUgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNraW5IaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kaWN0LnNraW5IaW50KSB7XG4gICAgICAgICAgICBpZiAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuZ2V0TG9ja1NraW5MaXN0KVswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2tpbkhpbnQuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5za2luSGludC5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUudXBkYXRlU2tpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5za2luTGlzdCkgfHwge1xuICAgICAgICAgICAgMDogWzBdLFxuICAgICAgICAgICAgMTogWzBdLFxuICAgICAgICAgICAgMjogWzldLFxuICAgICAgICAgICAgMzogWzBdLFxuICAgICAgICAgICAgNDogWzBdLFxuICAgICAgICAgICAgNTogWzBdXG4gICAgICAgIH07XG4gICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNraW5MaXN0LCB0KTtcbiAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS51c2VTa2luSURMaXN0KSB8fCB7XG4gICAgICAgICAgICAwOiAwLFxuICAgICAgICAgICAgMTogMCxcbiAgICAgICAgICAgIDI6IDksXG4gICAgICAgICAgICAzOiAwLFxuICAgICAgICAgICAgNDogMCxcbiAgICAgICAgICAgIDU6IDBcbiAgICAgICAgfTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudXNlU2tpbklETGlzdCwgZSk7XG4gICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuZ2V0TG9ja1NraW5MaXN0KSB8fCB7XG4gICAgICAgICAgICAwOiBbXSxcbiAgICAgICAgICAgIDE6IFtdLFxuICAgICAgICAgICAgMjogW10sXG4gICAgICAgICAgICAzOiBbXSxcbiAgICAgICAgICAgIDQ6IFtdLFxuICAgICAgICAgICAgNTogW11cbiAgICAgICAgfTtcbiAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuZ2V0TG9ja1NraW5MaXN0LCBuKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnRvcEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGwubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuc2Nyb2xsVG9QZXJjZW50VmVydGljYWwoMSwgMSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5yYW5rQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5idG4sIHtcbiAgICAgICAgICAgIGlkOiBcIjAwNVwiXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uVFQpKSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSYW5rTGlzdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5SYW5rKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUucG9zaXRpb25CdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLnNjcm9sbFRvUGVyY2VudFZlcnRpY2FsKDEsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHQgPSAoMSAqICh0aGlzLnJhbmtMaXN0Lmxlbmd0aCAtIHRoaXMubXlSYW5rKSkgLyAodGhpcy5yYW5rTGlzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlSYW5rLCB0KTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLnNjcm9sbFRvUGVyY2VudFZlcnRpY2FsKHQsIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5wbGF5QnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlBsYXkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc2hvd0hvbWVDb2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QuYWRkQ29pbkJ0bi5hY3RpdmUgPSAhMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNpZ25JbkJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICBpZDogXCIwMDZcIlxuICAgICAgICB9KTtcbiAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudG9kYXlPcGVuU2lnbkluLCAxKTtcbiAgICAgICAgdGhpcy5kaWN0LnNpZ25JbkhpbnQuYWN0aXZlID0gITE7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuU2lnbkluKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3BCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmdTY2VuZSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdTY2VuZSA9ICEwO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwic2hvcEJ0blwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjdXJyZW50U2NlbmVfXCIpO1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5TdG9yZV9wYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuQ2FyZFNob3ApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5za2luQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5idG4sIHtcbiAgICAgICAgICAgIGlkOiBcIjAwNFwiXG4gICAgICAgIH0pO1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlNraW4pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZ2V0UmFuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBuID0gdGhpcy5zaG93VGltZShlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnNob3dUaW1lKGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdmFyIG8gPSBcInByb3ZpbmNlX1wiICsgbiArIHIgKyBcIl9cIiArICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkucmFuaztcbiAgICAgICAgaWYgKFwiaGFpd2FpXCIgPT0gJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5yYW5rKSB7XG4gICAgICAgICAgICBvID0gXCJjb3VudHJ5X1wiICsgbiArIHIgKyBcIl9cIiArICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkucmFuaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInJhbmtfbmFtZVwiLCBvKTtcbiAgICAgICAgJGNoYWxsZW5nZUh0dHAuY2hhbGxlbmdlSHR0cC5nZXRSYW5rKG8sIFwiMVwiKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaOkuihjOamnOaVsOaNrlwiLCBlKTtcbiAgICAgICAgICAgIGlmIChlLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBlLmxpc3QpXG4gICAgICAgICAgICAgICAgICAgIChyICs9IDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jZTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogZS5saXN0W2ldLnNjb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0LnJhbmtMaXN0ID0gbjtcbiAgICAgICAgICAgICAgICB0LnN1Y0dldFJhbmsoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuUmFuaztcbiAgICAgICAgICAgICAgICBpZiAoXCJoYWl3YWlcIiA9PSAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnJhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9ICRjb25maWdDb25zdC5Db25maWdDb25zdC5SYW5rSFc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoYSkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWBh+aVsOaNrlwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAkY2hhbGxlbmdlSHR0cC5jaGFsbGVuZ2VIdHRwLmluY3JSYW5rKG8sIHIucHJvdmluY2UsIHIuc2NvcmUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6aG65L6/5LiK5LygXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdC5yYW5rTGlzdCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIHQucmFua0xpc3Quc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuc2NvcmUgLSB0LnNjb3JlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdC5zdWNHZXRSYW5rKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VjR2V0UmFuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5vbkl0ZW1SZW5kZXIgPSB0aGlzLm9uSXRlbVJlbmRlci5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwub25JdGVtQ2xpY2tlZCA9IHRoaXMub25JdGVtQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwubnVtSXRlbXMgPSB0aGlzLnJhbmtMaXN0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhbmtMaXN0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHQuc2NvcmU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5yYW5rLmluY2x1ZGVzKFwiaGFpd2FpXCIpKSB7XG4gICAgICAgICAgICB0ID0gXCJuYXRpb25cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQgPSBcInByb3ZpbmNlXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSB0aGlzLnJhbmtMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUucHJvdmluY2UgPT0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKC0xID09IG4pIHtcbiAgICAgICAgICAgIG4gPSB0aGlzLnJhbmtMaXN0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm15UmFuayA9IG4gKyAxO1xuICAgICAgICB0aGlzLmRpY3QubXlSYW5rLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcbiAgICAgICAgICAgIFwi5oiR55qE5Zyw5Yy65o6S5ZCN77ya56ysJWTlkI1cIixcbiAgICAgICAgICAgIHRoaXMubXlSYW5rXG4gICAgICAgICk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZGljdC50b2RheUFtb3VudClcbiAgICAgICAgICAgIC5kZWxheSgzKVxuICAgICAgICAgICAgLnRvKDIsIHtcbiAgICAgICAgICAgICAgICB4OiAtNzUwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuZGljdC50b2RheUFtb3VudC54ID0gNzUwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygyLCB7XG4gICAgICAgICAgICAgICAgeDogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC51bmlvbigpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgdmFyIHIgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuc2hvd1RpbWUoci5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIHZhciBpID0gdGhpcy5zaG93VGltZShyLmdldERhdGUoKSk7XG4gICAgICAgIHZhciBhID0gXCJwZW9wbGVfXCIgKyBvICsgaSArICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkucmFuaztcbiAgICAgICAgaWYgKFwiaGFpd2FpXCIgPT0gJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5yYW5rKSB7XG4gICAgICAgICAgICBhID0gXCJjb3VudHJ5UGVvcGxlX1wiICsgbyArIGkgKyBcIl9cIiArICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkucmFuaztcbiAgICAgICAgfVxuICAgICAgICAkY2hhbGxlbmdlSHR0cC5jaGFsbGVuZ2VIdHRwLmdldFJhbmsoYSwgXCIxXCIpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Lq65pWw5o6S6KGM5qac5pWw5o2uXCIsIHQpO1xuICAgICAgICAgICAgaWYgKHQudG90YWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0Lmxpc3QpIG4gKz0gdC5saXN0W3JdLnNjb3JlO1xuICAgICAgICAgICAgICAgIGUuZGljdC50b2RheUFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXG4gICAgICAgICAgICAgICAgICAgIFwi5LuK5aSpJWTkurrmjJHmiJjvvIzlhbHmnIklZOS6uumAmuWFs1wiLFxuICAgICAgICAgICAgICAgICAgICAxOCAqIG4gKyAkdXRpbHMuVXRpbHMucmFuZG9tTnVtKDEwLCAyMCksXG4gICAgICAgICAgICAgICAgICAgIG5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJoYWl3YWlcIiA9PSAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnJhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgJGNoYWxsZW5nZUh0dHAuY2hhbGxlbmdlSHR0cC5pbmNyUmFuayhhLCBcIlVTXCIsIDk5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6aG65L6/5LiK5LygXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkY2hhbGxlbmdlSHR0cC5jaGFsbGVuZ2VIdHRwLmluY3JSYW5rKGEsIFwi5bm/5LicXCIsIDk5KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6aG65L6/5LiK5LygXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5kaWN0LnRvZGF5QW1vdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcbiAgICAgICAgICAgICAgICAgICAgXCLku4rlpKklZOS6uuaMkeaImO+8jOWFseaciSVk5Lq66YCa5YWzXCIsXG4gICAgICAgICAgICAgICAgICAgIDE3ODIgKyAkdXRpbHMuVXRpbHMucmFuZG9tTnVtKDEwLCAyMCksXG4gICAgICAgICAgICAgICAgICAgIDk5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zaG93VGltZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ID4gMTApIHtcbiAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMFwiICsgdDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25JdGVtUmVuZGVyID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG4gPSBlLmdldENvbXBvbmVudCgkaG9tZUl0ZW0uZGVmYXVsdCk7XG4gICAgICAgIHZhciByID1cbiAgICAgICAgICAgICgkaG9tZUl0ZW0uZGVmYXVsdC5zdGF0ZS5Ob3JtYWwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IHQsXG4gICAgICAgICAgICAgICAgcHJvdmluY2U6IHRoaXMucmFua0xpc3RbdF0ucHJvdmluY2UsXG4gICAgICAgICAgICAgICAgc2NvcmU6IHRoaXMucmFua0xpc3RbdF0uc2NvcmVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBuLnNldERhdGEocik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkl0ZW1DbGlja2VkID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuanVkZ2VNYWluTW9kZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIHZhciByID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UxSUQpIHx8IFtdO1xuICAgICAgICB2YXIgbyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMklEKSB8fCBbXTtcbiAgICAgICAgdmFyIGkgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCkgfHwgW107XG4gICAgICAgIHZhciBhID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UySUQpIHx8IFtdO1xuICAgICAgICB2YXIgcyA9XG4gICAgICAgICAgICAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTJMZXZlbExpc3Rfc3RhZ2UxSUQpLFxuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTJMZXZlbExpc3Rfc3RhZ2UySUQpLFxuICAgICAgICAgICAgW10pO1xuICAgICAgICB2YXIgYyA9IFtdO1xuICAgICAgICB2YXIgbCA9IFtdO1xuICAgICAgICB2YXIgZiA9IFtdO1xuICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICAkY29uZmlnTWFuYWdlci5Db25maWcuZ2V0KFxuICAgICAgICAgICAgICAgICRjb25maWdDb25zdC5Db25maWdDb25zdC5USEVNRSArIDAgKyAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmNvbmZpZ1N1ZmZpeFxuICAgICAgICAgICAgKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLldFQikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnB1c2goaS5zdGFnZTFJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UxSUQsIHMpO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCwgYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Lmxlbmd0aCA+IHIubGVuZ3RoICYmIDAgIT0gci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB0W25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA+IHIubGVuZ3RoIC0gMSAmJiAocy5wdXNoKGkuc3RhZ2UxSUQpLCBjLnB1c2goaS5zdGFnZTJJRCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGMuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHMgPSByLmNvbmNhdChzKTtcbiAgICAgICAgICAgICAgICAgICAgYyA9IG8uY29uY2F0KGMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacieaWsOWinuWFs+WNoVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UxSUQsIHMpO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCwgYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgwID09IHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gdFtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gbiAmJiAoZSA9IGkuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKGkuc3RhZ2UxSUQpLCBsLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdS5wdXNoKGkuc3RhZ2UxSUQpLCBmLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5wdXNoKGkuc3RhZ2UxSUQpLCBwLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnB1c2goaS5zdGFnZTFJRCksIHYucHVzaChpLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzID0gYS5jb25jYXQodSkuY29uY2F0KGgpLmNvbmNhdChnKTtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGwuY29uY2F0KGYpLmNvbmNhdChwKS5jb25jYXQodik7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibWFpbk1vZGVJRFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHUuY29uY2F0KGEpLmNvbmNhdChoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBmLmNvbmNhdChsKS5jb25jYXQocCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHMuaW5kZXhPZihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbMF0gPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1t3XSA9IF87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnInmlrDlop7lhbPljaHkuJTmmK/mlrDnlKjmiLdcIik7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlELCBzKTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UySUQsIGMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ICB55So5oi3XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKDEgPT0gdCkge1xuICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgMSkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV0VCKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwucHVzaChuLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTJJRCwgZik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodC5sZW5ndGggPiBpLmxlbmd0aCAmJiAwICE9IGkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPiBpLmxlbmd0aCAtIDEgJiYgKGwucHVzaChuLnN0YWdlMUlEKSwgZi5wdXNoKG4uc3RhZ2UySUQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBpLmNvbmNhdChsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBhLmNvbmNhdChmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMUlELCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMklELCBmKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgwID09IGkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChlID0gMDsgZSA8IHQubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gdFtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5wdXNoKG4uc3RhZ2UxSUQpLCBvLnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5wdXNoKG4uc3RhZ2UxSUQpLCBjLnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgci5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgby5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHIuY29uY2F0KHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IG8uY29uY2F0KGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UxSUQsIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UySUQsIGYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLogIHnlKjmiLdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuIXnkIZcIiwgbCwgZik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGhlbWUgPj0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uaGFuZGxlTW9kZUJ5SUQoZS50aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW5kbGVNb2RlQnlJRCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIHZhciByID0gW107XG4gICAgICAgIHZhciBvID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwibW9kZVwiICsgdCArIFwiTGV2ZWxMaXN0X3N0YWdlMUlEXCIpIHx8IFtdO1xuICAgICAgICB2YXIgaSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcIm1vZGVcIiArIHQgKyBcIkxldmVsTGlzdF9zdGFnZTJJRFwiKSB8fCBbXTtcbiAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldCgkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyB0KS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV0VCKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYS5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGFbc107XG4gICAgICAgICAgICAgICAgICAgIG4ucHVzaChjLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKGMuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJtb2RlXCIgKyB0ICsgXCJMZXZlbExpc3Rfc3RhZ2UxSURcIiwgbik7XG4gICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwibW9kZVwiICsgdCArIFwiTGV2ZWxMaXN0X3N0YWdlMklEXCIsIHIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhLmxlbmd0aCA+IG8ubGVuZ3RoICYmIDAgIT0gby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHMgPSAwOyBzIDwgYS5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICBjID0gYVtzXTtcbiAgICAgICAgICAgICAgICAgICAgcyA+IG8ubGVuZ3RoIC0gMSAmJiAobi5wdXNoKGMuc3RhZ2UxSUQpLCByLnB1c2goYy5zdGFnZTJJRCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuID0gby5jb25jYXQobik7XG4gICAgICAgICAgICAgICAgciA9IGkuY29uY2F0KHIpO1xuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGVcIiArIHQgKyBcIkxldmVsTGlzdF9zdGFnZTFJRFwiLCBuKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJtb2RlXCIgKyB0ICsgXCJMZXZlbExpc3Rfc3RhZ2UySURcIiwgcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKDAgPT0gby5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHMgPSAwOyBzIDwgYS5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICBjID0gYVtzXTtcbiAgICAgICAgICAgICAgICAgICAgbi5wdXNoKGMuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICByLnB1c2goYy5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGVcIiArIHQgKyBcIkxldmVsTGlzdF9zdGFnZTFJRFwiLCBuKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJtb2RlXCIgKyB0ICsgXCJMZXZlbExpc3Rfc3RhZ2UySURcIiwgcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVNb2RlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB0aGlzLmRpY3Quc2Vjb25kQnRuLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5zZWNvbmRNb2RlRGF0YS50aGVtZU5hbWU7XG4gICAgICAgIHZhciBlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciByID0gbi5kaWN0Lm1vcmVNb2RlQmcuY2hpbGRyZW5bMF0uY2hpbGRyZW5bZV0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICByLm5hbWUgPSBuLnRoaXJkTW9kZXNEYXRhW2VdLnRoZW1lICsgXCJcIjtcbiAgICAgICAgICAgIHIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuLnRoaXJkTW9kZXNEYXRhW2VdLnRoZW1lTmFtZTtcbiAgICAgICAgICAgIGlmIChyLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIucGFyZW50LmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG8gPSByLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIG8udHJhbnNpdGlvbiA9IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLlNDQUxFO1xuICAgICAgICAgICAgby5kdXJhdGlvbiA9IDAuMTtcbiAgICAgICAgICAgIG8uem9vbVNjYWxlID0gMS4yO1xuICAgICAgICAgICAgci5wYXJlbnQub24oXG4gICAgICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwicGxheUNsaWNrQXVkaW9cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdC50aGlyZE1vZGVzRGF0YVtlXS50aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcIm1vZGVidG5fXCIgKyBuKTtcbiAgICAgICAgICAgICAgICAgICAgdC5lbnRlckJ5TW9kZShuKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBuID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCB0aGlzLnRoaXJkTW9kZXNEYXRhLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICBlKHIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBuID0gaS5kaWN0LmRhcmVuTW9kZXMuY2hpbGRyZW5bMV0uY2hpbGRyZW5bZV0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBuLm5hbWUgPSBpLmRhcmVuTW9kZXNEYXRhW2VdLnRoZW1lICsgXCJcIjtcbiAgICAgICAgICAgIG4uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpLmRhcmVuTW9kZXNEYXRhW2VdLnRoZW1lTmFtZTtcbiAgICAgICAgICAgIGlmIChuLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG4ucGFyZW50LmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHIgPSBuLnBhcmVudC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIHIudHJhbnNpdGlvbiA9IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLlNDQUxFO1xuICAgICAgICAgICAgci5kdXJhdGlvbiA9IDAuMTtcbiAgICAgICAgICAgIHIuem9vbVNjYWxlID0gMS4yO1xuICAgICAgICAgICAgbi5wYXJlbnQub24oXG4gICAgICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0LmRhcmVuTW9kZXNEYXRhW2VdLnRoZW1lO1xuICAgICAgICAgICAgICAgICAgICB0LmVudGVyQnlNb2RlMihuKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBpID0gdGhpcztcbiAgICAgICAgZm9yIChyID0gMDsgciA8IHRoaXMuZGFyZW5Nb2Rlc0RhdGEubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIG8ocik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRQbGF0Zm9ybVVJID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCk7XG4gICAgICAgIGlmICh0LmZpdFVJVHlwZSAhPSAkcGxhdGZvcm1Db25zdC5GaXRVSVR5cGUuVFQgJiYgdC5maXRVSVR5cGUgIT0gJHBsYXRmb3JtQ29uc3QuRml0VUlUeXBlLktTKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRvcEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAzMDtcbiAgICAgICAgICAgIHRoaXMuZGljdC50b3BCYXIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJvdHRvbUJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAxMDA7XG4gICAgICAgICAgICB0aGlzLmRpY3QuYm90dG9tQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0Lmhhc0FnZVRpcCkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmFnZUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIHZhciBlID0gJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5hZ2VUaXBUeXBlO1xuICAgICAgICAgICAgaWYgKGUgPT0gJHBsYXRmb3JtQ29uc3QuQWdlVGlwVHlwZS5BR0VfMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuYWdlQnRuLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hZ2VTcHJpdGVGcmFtZVtlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaWN0LnByaXZhY3lCdG4pIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5wcml2YWN5QnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgaWYgKHQucHJpdmFjeVBvbGljeVR5cGUgIT0gJHBsYXRmb3JtQ29uc3QuUHJpdmFjeVBvbGljeVR5cGUuTk8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QucHJpdmFjeUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaWN0Lm1vcmVHYW1lQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QubW9yZUdhbWVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICBpZiAodC5oYXNNb3JlR2FtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5tb3JlR2FtZUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaWN0LmN1c3RvbWVyU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LmN1c3RvbWVyU2VydmljZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgIGlmICh0Lmhhc0N1c3RvbWVyU2VydmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jdXN0b21lclNlcnZpY2UuYWN0aXZlID0gITA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLk9IQVlPT19BTkRST0lEKSAmJiB0aGlzLmRpY3QucHJpdmFjeUJ0bikge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnByaXZhY3lCdG4uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIumakOengVxcbuiuvue9rlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5RUSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5hcHBvaW50QnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5IVykpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5wcml2YWN5QnRuLnggLT0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XWCkpIHtcbiAgICAgICAgICAgIHZhciBuID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcInlzNXg1XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5czV4NVwiLCBuKTtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB3aW5kb3cud3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgLyAyIC0gMjUwO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rWL6K+Vc2hvd0Jsb2NrQWRzXCIpO1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0Jsb2NrQWRzKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlQ2I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVCbG9ja0FkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge30sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlQmxvY2tBZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodC5wcml2YWN5UG9saWN5VHlwZSA9PSAkcGxhdGZvcm1Db25zdC5Qcml2YWN5UG9saWN5VHlwZS5NSU5JX0dBTUVfWE0pIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5hZ2VCdG4uYWN0aXZlID0gITA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmlzRE9VWUlOID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHdpbmRvdy50dCAmJiB3aW5kb3cudHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgaWYgKCF0KSB7XG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0LmFwcE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJEb3V5aW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tTZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMDRcIik7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuU0VUKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmdTY2VuZSkge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdTY2VuZSA9ICEwO1xuICAgICAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5UaGVtZVR5cGUsIDApO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiMDAxXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImJ0bjAwMVwiKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFLCAwKTtcbiAgICAgICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCk7XG4gICAgICAgICAgICAkY29uZmlnVXRpbHMuQ29uZmlnVXRpbHMuc2V0TmV4dE1vZGVJRCgpO1xuICAgICAgICAgICAgdmFyIGUgPSAxO1xuICAgICAgICAgICAgJGNvbmZpZ1V0aWxzLkNvbmZpZ1V0aWxzLmdldERhdGFCeUlEKDAsIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXMgLSBcIiwgbik7XG4gICAgICAgICAgICAgICAgZSA9IG4uYW1vdW50O1xuICAgICAgICAgICAgICAgIGlmICh0WzBdID4gZSkge1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgdFswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5HQU1FKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0luZmluaXRlUG93ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMDdcIik7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDExXCIpO1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LklORklOSVRFX1BPV0VSKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrSG90TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDAyXCIpO1xuICAgICAgICAgICAgJHNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZSgkc2NlbmVDb25zdC5TY2VuZUNvbnN0Lk1PREVfU0VMRUNULCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tNb3JlTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDAzXCIpO1xuICAgICAgICAgICAgJHNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZSgkc2NlbmVDb25zdC5TY2VuZUNvbnN0Lk1PREVfU0VMRUNULCAyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tDaGVhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lcyArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltcIiArIHRoaXMuY2xpY2tUaW1lcyArIFwiXVwiKTtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tUaW1lcyA+PSA4KSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LkNIRUFUUyk7XG4gICAgICAgICAgICB0aGlzLmNsaWNrVGltZXMgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5BR0VfVElQKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrUHJpdmFjeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9ICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUucHJpdmFjeVBvbGljeVR5cGUgPT0gJHBsYXRmb3JtQ29uc3QuUHJpdmFjeVBvbGljeVR5cGUuTUlOSV9HQU1FIHx8XG4gICAgICAgICAgICBlLnByaXZhY3lQb2xpY3lUeXBlID09ICRwbGF0Zm9ybUNvbnN0LlByaXZhY3lQb2xpY3lUeXBlLk1JTklfR0FNRV9WSVZPIHx8XG4gICAgICAgICAgICBlLnByaXZhY3lQb2xpY3lUeXBlID09ICRwbGF0Zm9ybUNvbnN0LlByaXZhY3lQb2xpY3lUeXBlLk1JTklfR0FNRV9YTVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZFByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTG9hZFByaXZhY3kgPSAhMDtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3BvcHVwL1ByaXZhY3lQb2xpY3lcIiwgZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgICAgICAgICB0LmlzTG9hZFByaXZhY3kgPSAhMTtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gY2MuaW5zdGFudGlhdGUobik7XG4gICAgICAgICAgICAgICAgICAgIHQubm9kZS5hZGRDaGlsZChyKTtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoXCJQcml2YWN5UG9saWN5XCIpLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLnByaXZhY3lQb2xpY3lUeXBlID09ICRwbGF0Zm9ybUNvbnN0LlByaXZhY3lQb2xpY3lUeXBlLk5BVElWRSkge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1ByaXZhY3lQb2xpY3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tBcHBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZFByaXZhY3kpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZFByaXZhY3kgPSAhMDtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3BvcHVwL1ByaXZhY3lQb2xpY3lcIiwgZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgICAgICAgICB0LmlzTG9hZFByaXZhY3kgPSAhMTtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gY2MuaW5zdGFudGlhdGUobik7XG4gICAgICAgICAgICAgICAgICAgIHQubm9kZS5hZGRDaGlsZChyKTtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoXCJQcml2YWN5UG9saWN5XCIpLm9wZW5Vc2VyUGFuZWxIYW5kbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tNb3JlR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93TW9yZUdhbWUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrTGV2ZWxTZWxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZ1NjZW5lKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdTY2VuZSA9ICEwO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcInBhZ2UwMDJcIik7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSwgMCk7XG4gICAgICAgICAgICAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuTEVWRUxfU0VMRUNUKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tDcmVhdGVCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMjdcIik7XG4gICAgICAgIGlmICghJGJtc01hbmFnZXIuQk1TLmdldEtleShcInVnY2FkXCIpIHx8ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLmlzVW5sb2NrVWdjKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbnRlclVnYykge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFbnRlclVnYyA9ICEwO1xuICAgICAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5VR0MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5VTkxPQ0tfVUdDKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tBZ2VCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuQUdFX1RJUCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5tb2RlQnRuRnVjID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoOTg1ID09IHQpIHtcbiAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuVGhlbWVUeXBlLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuVGhlbWVUeXBlLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaWN0W1wibW9kZVwiICsgdCArIFwiQnRuVmlkZW9cIl0uYWN0aXZlKSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dSZXdhcmRBZHMoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LlBsYXksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGVcIiArIHQgKyBcIkJ0blwiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZS5lbnRlckJ5TW9kZV8odCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVudGVyQnlNb2RlXyh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZW50ZXJCeU1vZGVfID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nU2NlbmUgPSAhMDtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFLCB0KTtcbiAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCkgfHwge307XG4gICAgICAgICAgICBpZiAoblt0XSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5bdF0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHIgPSAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LlRoZW1lVHlwZSk7XG4gICAgICAgICAgICAkY29uZmlnVXRpbHMuQ29uZmlnVXRpbHMuc2V0TmV4dE1vZGVJRCgpO1xuICAgICAgICAgICAgdmFyIG8gPSAxO1xuICAgICAgICAgICAgJGNvbmZpZ1V0aWxzLkNvbmZpZ1V0aWxzLmdldERhdGFCeUlEKHQsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgbyA9IGkuYW1vdW50O1xuICAgICAgICAgICAgICAgIGlmIChuW3RdID4gbykge1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgblt0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuR0FNRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCkgfHwgW107XG4gICAgICAgICAgICAgICAgdmFyIHMgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTJJRCkgfHwgW107XG4gICAgICAgICAgICAgICAgdmFyIGMgPVxuICAgICAgICAgICAgICAgICAgICAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTJMZXZlbExpc3Rfc3RhZ2UxSUQpLFxuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMkxldmVsTGlzdF9zdGFnZTJJRCksXG4gICAgICAgICAgICAgICAgICAgIFtdKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICgxID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldCgkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyAxKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV0VCKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMucHVzaChuLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKG4uc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCwgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UySUQsIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Lmxlbmd0aCA+IGEubGVuZ3RoICYmIDAgIT0gYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gdFtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA+IGEubGVuZ3RoIC0gMSAmJiAoYy5wdXNoKG4uc3RhZ2UxSUQpLCBsLnB1c2gobi5zdGFnZTJJRCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gYS5jb25jYXQoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHMuY29uY2F0KGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMUlELCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTJJRCwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDAgPT0gYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gdFtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5wdXNoKG4uc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMUlELCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTJJRCwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuR0FNRSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMTMgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcIm1vZGUxM0xldmVsTGlzdF9zdGFnZTFJRFwiKSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoXCJtb2RlMTNMZXZlbExpc3Rfc3RhZ2UySURcIikgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgMTMpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XRUIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdFtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5wdXNoKG4uc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGUxM0xldmVsTGlzdF9zdGFnZTFJRFwiLCBnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJtb2RlMTNMZXZlbExpc3Rfc3RhZ2UySURcIiwgeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQubGVuZ3RoID4gZi5sZW5ndGggJiYgMCAhPSBmLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID4gZi5sZW5ndGggLSAxICYmIChnLnB1c2gobi5zdGFnZTFJRCksIHkucHVzaChuLnN0YWdlMklEKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSBmLmNvbmNhdChnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gaC5jb25jYXQoeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwibW9kZTEzTGV2ZWxMaXN0X3N0YWdlMUlEXCIsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGUxM0xldmVsTGlzdF9zdGFnZTJJRFwiLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMCA9PSBmLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnB1c2gobi5zdGFnZTFJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkucHVzaChuLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwibW9kZTEzTGV2ZWxMaXN0X3N0YWdlMUlEXCIsIGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGUxM0xldmVsTGlzdF9zdGFnZTJJRFwiLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5HQU1FKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldCgkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUpLnRoZW4oZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLnRoZW1lICE9IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmhhbmRsZU1vZGVCeUlEKG4udGhlbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5HQU1FKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0ZvbGxvd0J0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICBpZDogXCIwMDhcIlxuICAgICAgICB9KTtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5mb2xsb3coZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGlmICgwICE9IHQpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFs+azqOaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5pc0ZvbGxvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tMb3ZlRG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDI4XCIpO1xuICAgICAgICB0aGlzLmVudGVyQnlNb2RlKDEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tEb2dTdG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImJ0bjAyOVwiKTtcbiAgICAgICAgdGhpcy5lbnRlckJ5TW9kZSgyKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrU2Vjb25kTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICBpZDogXCIwMDFcIlxuICAgICAgICB9KTtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcIm1vZGVidG5fMFwiKTtcbiAgICAgICAgdGhpcy5lbnRlckJ5TW9kZSgwKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrM01vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LmJ0biwge1xuICAgICAgICAgICAgaWQ6IFwiMDAzXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJtb2RlYnRuXzJcIik7XG4gICAgICAgIHRoaXMuZW50ZXJCeU1vZGUoMik7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja1RoaXJkTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5pc0FuaW0pIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQW5pbSA9ICEwO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImJ0bjAzMlwiKTtcbiAgICAgICAgICAgIHRoaXMuZGljdC5tb3JlTW9kZUJnLmFjdGl2ZSA9ICF0aGlzLmRpY3QubW9yZU1vZGVCZy5hY3RpdmU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1Nob3cpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0Lm1vcmVNb2RlQmcuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0Lm1vcmVNb2RlQmcub3BhY2l0eSA9IDI1NSksXG4gICAgICAgICAgICAgICAgICAgIGNjXG4gICAgICAgICAgICAgICAgICAgICAgICAudHdlZW4odGhpcy5kaWN0Lm1vcmVNb2RlQmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmRpY3QubW9yZU1vZGVCZy5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlzQW5pbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaXNTaG93ID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubW9yZU1vZGVCZy5vcGFjaXR5ID0gMCksXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubW9yZU1vZGVCZy5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rWL6K+VXCIpLFxuICAgICAgICAgICAgICAgICAgICBjY1xuICAgICAgICAgICAgICAgICAgICAgICAgLnR3ZWVuKHRoaXMuZGljdC5tb3JlTW9kZUJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlzQW5pbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaXNTaG93ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoMCA9PSB0aGlzLmRpY3QuYXJyb3cuYW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuYXJyb3cuYW5nbGUgPSAxODA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC5hcnJvdy5hbmdsZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrQmVlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LkJFRSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51bmxvY2tBbGxNb2RlQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlVOTE9DS19BTExfTU9ERSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vcmRlckJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3Qub3JkZXJJRC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xuICAgICAgICBjb25zb2xlLmxvZyhcIumhuuW6j2lkXCIsIHQpO1xuICAgICAgICBpZiAodGhpcy5pc0ludE51bSh0KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/mlbDlrZdcIik7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSwgMCk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIE51bWJlcih0KSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvYWRpbmdTY2VuZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nU2NlbmUgPSAhMDtcbiAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5HQU1FKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUubW9kZUp1bXBCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5kYXJlbk1vZGVzLmFjdGl2ZSA9ICEwO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xvc2VEYXJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaWN0LmRhcmVuTW9kZXMuYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5lbnRlckJ5TW9kZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJuZXdtb2RlYWRcIikgJiZcbiAgICAgICAgICAgIC0xID09ICgkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5VTkxPQ0tfTU9ERV9MSVNUKSB8fCBbXSkuaW5kZXhPZih0KVxuICAgICAgICApIHtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFX1VOTE9DS19JRCwgdCk7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0Lk1PREVfVU5MT0NLKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1Y0VudGVyQnlNb2RlKHQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZW50ZXJCeU1vZGUyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgd2luZG93Lm1vZGVJRCA9IHQ7XG4gICAgICAgIHRoaXMuZGljdC5kYXJlbk1vZGVzLmNoaWxkcmVuWzFdLmFjdGl2ZSA9ICExO1xuICAgICAgICB0aGlzLmRpY3QuRWRpdEJveC5hY3RpdmUgPSAhMDtcbiAgICAgICAgdGhpcy5kaWN0LmRhcmVuSnVtcC5hY3RpdmUgPSAhMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmRhcmVuSnVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmRpY3QuRWRpdEJveC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5pc0ludE51bSh0KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmmK/mlbDlrZdcIik7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSwgTnVtYmVyKHdpbmRvdy5tb2RlSUQpKTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgTnVtYmVyKHQpKTtcbiAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5HQU1FKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaXNJbnROdW0gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodCkpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuc3VjRW50ZXJCeU1vZGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nU2NlbmUgPSAhMDtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFLCB0KTtcbiAgICAgICAgICAgIHZhciBlID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCk7XG4gICAgICAgICAgICAkY29uZmlnVXRpbHMuQ29uZmlnVXRpbHMuc2V0TmV4dE1vZGVJRCgpO1xuICAgICAgICAgICAgdmFyIG4gPSAxO1xuICAgICAgICAgICAgJGNvbmZpZ1V0aWxzLkNvbmZpZ1V0aWxzLmdldERhdGFCeUlEKHQsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgbiA9IHIuYW1vdW50O1xuICAgICAgICAgICAgICAgIGlmIChlW3RdID4gbikge1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgZVt0XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5HQU1FKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFtIKCRyZWN5Y2xlU2Nyb2xsLmRlZmF1bHQpXSwgZS5wcm90b3R5cGUsIFwic2Nyb2xsXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbSChbY2MuU3ByaXRlRnJhbWVdKV0sIGUucHJvdG90eXBlLCBcImFnZVNwcml0ZUZyYW1lXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbSChbY2MuU3ByaXRlRnJhbWVdKV0sIGUucHJvdG90eXBlLCBcImJ0bkljb25TcHJpdGVGcmFtZVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtWXSwgZSk7XG59KSgkYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcTtcbiJdfQ==