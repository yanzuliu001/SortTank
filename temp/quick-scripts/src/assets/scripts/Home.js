"use strict";
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