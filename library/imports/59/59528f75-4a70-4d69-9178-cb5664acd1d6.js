"use strict";
cc._RF.push(module, '5952891SnBNaZF4y1ZkrNHW', 'App');
// scripts/App.js

"use strict";

var r;

var $httpUtils = require("./HttpUtils");

var $configConst = require("./ConfigConst");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $userConst = require("./UserConst");

var $localStorageConst = require("./LocalStorageConst");

var $timeManager = require("./TimeManager");

var $audioManager = require("./AudioManager");

var $bmsManager = require("./BmsManager");

var $configManager = require("./ConfigManager");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $reportManager = require("./ReportManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $challengeSystem = require("./ChallengeSystem");

var $paymentSystem = require("./PaymentSystem");

var $vIPSystem = require("./VIPSystem");

var $challengeHttp = require("./ChallengeHttp");

var $copyRightDialog = require("./CopyRightDialog");

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var $xMADUtils = require("./XMADUtils");

var $localStorageManager = require("./LocalStorageManager");

var $sceneManager = require("./SceneManager");

var $sceneConst = require("./SceneConst");

var $utils = require("./Utils");

var L = {
  zh: 0,
  en: 0,
  ja: 1,
  tw: 2
};
var N = cc._decorator;
var x = N.ccclass;
var F = N.property;

var j = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.loadingPrefab = null;
    e.plantAtlas = null;
    e.fonts = [];
    e.fullAdCounter = 0;
    e.internalDefaultBMS = {
      isAuditing: 0,
      isAuditingLevelMap: 1,
      configSuffix: "",
      TiLi: 60,
      WuxianTiLi: 1,
      BuchongTiLi: 20,
      fullAdsType: 0,
      fullScreenAd: "no",
      AdIntervals: 0,
      bannerAdIntervals: 0,
      startWinFullScreenAd: 3,
      spaceWinFullScreenAd: 3,
      spaceWinFullScreenAdND: 3,
      startLevelWinFullScreenAds: 11,
      spaceLevelWinFullScreenAd: 3,
      GM: 0,
      ugc: 0,
      ugcad: 0,
      newmodead: 1,
      evaluatelv: [1200, 2500, 5e3],
      evaluatebtndelay: 2,
      evaluatestar: 5,
      keyVideo: 7,
      AllThemeUnlock: 0,
      UnlockThemeMainLv: [10, 10],
      UnlockThemeSubLv: [5, 10],
      UnlockThemeList: [1, 6, 7, 4, 3, 2, 5]
    };
    e.externalDefaultBMS = {
      isAuditing: 0,
      isAuditingLevelMap: 1,
      configSuffix: "",
      TiLi: 0,
      WuxianTiLi: 0,
      BuchongTiLi: 20,
      fullAdsType: 0,
      fullScreenAd: "all",
      AdIntervals: 0,
      bannerAdIntervals: 0,
      startWinFullScreenAd: 3,
      spaceWinFullScreenAd: 1,
      spaceWinFullScreenAdND: 1,
      startLevelWinFullScreenAds: 11,
      spaceLevelWinFullScreenAd: 1,
      GM: 0,
      ugc: 0,
      ugcad: 0,
      newmodead: 1,
      evaluatelv: [1200, 2500, 5e3],
      evaluatebtndelay: 2,
      evaluatestar: 5,
      keyVideo: 7,
      AllThemeUnlock: 0,
      UnlockThemeMainLv: [10, 10],
      UnlockThemeSubLv: [5, 10],
      UnlockThemeList: [1, 6, 7, 4, 3, 2, 5]
    };
    e.isEnterMain = !1;
    e.abBunds = {};
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;
    this.initMgr();
    this.initEvent();
    new $copyRightDialog["default"]().init();
    this.schedule(function () {
      t.fullAdCounter++;
    }, 1);
    this.loadLevelSub();
  };

  e.prototype.loadLevelSub = function () {
    this.scheduleOnce(function () {
      if (cc.sys.isBrowser) {
        console.log("浏览器环境");
        return void (window.levelSub = !0);
      }

      console.log("加载关卡子包......");
      cc.assetManager.loadBundle("script", function (t) {
        if (t) {
          return console.log("[ResMgr]:Load AssetsBundle Error: script");
        }

        console.log("加载完成", "script");
        window.levelSub = !0;
      });
    }, 0);
  };

  e.prototype.startOppo = function () {
    cc.game.on("onBannerRemoved", this.onBannerRemoved, this);
  };

  e.prototype.cardAmount = function (t) {
    console.log("保存服务器[cardAmount]", t);
    this.saveServerData($localStorageConst["default"].cardAmount, t);
  };

  e.prototype.saveServerData = function (t, e) {
    e = e.toString();
    $bmsManager.BMS.saveServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || $userManager.User.get("uuid"), t, e).then(function () {
      console.log("保存" + t + "成功:" + e);
    });
  };

  e.prototype.onBannerRemoved = function () {
    console.log("bannerAdCounter", 0);
    $platformManager.Platform.bannerAdCounter = 0;
  };

  e.prototype.showInterstitialFeedTimer = function () {
    var t = this;
    var e = $bmsManager.BMS.getKey("timeTC");
    this.scheduleOnce(function () {
      console.log("长时间没操作,自动弹出插屏");
      $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
      t.showInterstitialFeedTimer2();
    }, e);
  };

  e.prototype.showInterstitialFeedTimer2 = function () {
    var t = this;
    this.scheduleOnce(function () {
      $oPPOAndroidAdUtils.OPPOAndroidAd.removeInterstitialFeed();
    }, 30);
    this.scheduleOnce(function () {
      $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
      t.showInterstitialFeedTimer2();
    }, 31);
  };

  e.prototype.initMgr = function () {
    $platformManager.Platform.startInit();
    var t = $languageManager["default"].instance;
    t.init();
    t.setFont(this.fonts[L[t.lan]]);
    $sceneManager["default"].init(this.loadingPrefab);
    $audioManager.Audio.init();
    $reportManager.Report.init();
    this.initStopDebug();
    $localStorageManager["default"].init({
      backTimes: 0,
      isReceiveVIP: 0,
      todayClickShip: 0,
      todayShipExpire: 0,
      shipStartTime: 0,
      openShip: 0,
      todayClickPlan: 0,
      todayClickChallenge: 0,
      todayReceiveCard: 0,
      todaySignIn: 0,
      todayOpenSignIn: 0,
      todaySignInVideo: 0
    });
    this.initBMS();
  };

  e.prototype.initStopDebug = function () {
    if (cc.sys.isMobile) {
      cc.view.enableAutoFullScreen(!1);
    }
  };

  e.prototype.initEvent = function () {
    cc.game.on("adNotReady", this.adNotReady, this);
    cc.game.on("iosApplicationDidBecomeActive", this.iosApplicationDidBecomeActive, this);
    cc.game.on("onForeground", this.onForeground, this);
    cc.game.on("localStorage_cardAmount", this.cardAmount, this);
    cc.game.on("checkFullAd_noResult", this.checkFullAd_noResult, this);
    cc.game.on("showNoAD", this.showNoAD, this);
    $eventManager.Event.on($eventConst["default"].checkFullAd, this.checkFullAd, this);
    $eventManager.Event.on($eventConst["default"].checkFullAd_result, this.checkFullAd_result, this);
  };

  e.prototype.checkFullAd = function () {
    var t = new Date().getTime();

    if (window.lastVideoAdTime && (t - window.lastVideoAdTime) / 1e3 < 60) {
      console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
    } else {
      window.isResultInsert = !1;
      var e = $bmsManager.BMS.getKey("AdIntervals");
      console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + e);

      if (this.fullAdCounter < e) {
        return console.log("== 插屏cd中，无法触发");
      }

      if ("no" != $bmsManager.BMS.getKey("fullScreenAd")) {
        $platformManager.Platform.showInsert();
        this.fullAdCounter = 0;
      }
    }
  };

  e.prototype.showNoAD = function () {
    window.hideIsNeedInsert = !0;
  };

  e.prototype.checkFullAd_noResult = function (t) {
    var e = new Date().getTime();

    if (window.lastVideoAdTime && (e - window.lastVideoAdTime) / 1e3 < 60) {
      console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
    } else {
      window.isResultInsert = !1;
      var n = $bmsManager.BMS.getKey("AdIntervals");
      console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + n);

      if (this.fullAdCounter < n) {
        return console.log("== 插屏cd中，无法触发");
      }

      if ("no" != $bmsManager.BMS.getKey("fullScreenAd")) {
        var r = $bmsManager.BMS.getKey("ReplayStartScreenAd");

        if (0 == r || t >= r) {
          console.log("== 插屏checkFullAd_noResult");
          $platformManager.Platform.showInsert();
          this.fullAdCounter = 0;
        }
      }
    }
  };

  e.prototype.checkFullAd_result = function () {
    var t = this;
    var e = new Date().getTime();

    if (window.lastVideoAdTime && (e - window.lastVideoAdTime) / 1e3 < 60) {
      console.log("== 插屏检测，视频广告间隔小于60秒，不展示插屏");
    } else {
      var n = $bmsManager.BMS.getKey("AdIntervals");
      console.log("== 插屏检测 cd间隔不展示插屏，cd计时: " + this.fullAdCounter + "，cd间隔" + n);

      if (this.fullAdCounter < n) {
        return console.log("== 插屏cd中，无法触发");
      }

      var r = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
      var o = $bmsManager.BMS.getKey("startWinFullScreenAd");
      var i = $bmsManager.BMS.getKey("fullScreenAd");
      var a = $bmsManager.BMS.checkKey("fullScreenAd");
      var s = $bmsManager.BMS.getKey("startLevelWinFullScreenAds");
      var c = $bmsManager.BMS.getKey("spaceLevelWinFullScreenAd");
      var l = $bmsManager.BMS.getKey("spaceWinFullScreenAd");
      var u = $bmsManager.BMS.getKey("spaceWinFullScreenAdND");

      if (r >= o && ("number" == typeof i && i || "string" == typeof i && a)) {
        var f = new Date().getDate();
        var h = $userManager.User.get($userConst.UserData.FIRST_DAY_DATE);

        if (r >= s) {
          if (r % c == 0) {
            console.log("插屏1");
            setTimeout(function () {
              window.isResultInsert = !0;
              $platformManager.Platform.showInsert();
              t.fullAdCounter = 0;
            }, 500);
          }
        } else {
          if (Math.abs(f - h) > 0) {
            r % u == 0 && (console.log("插屏2"), setTimeout(function () {
              window.isResultInsert = !0;
              $platformManager.Platform.showInsert();
              t.fullAdCounter = 0;
            }, 500));
          } else {
            r % l == 0 && (console.log("插屏3"), setTimeout(function () {
              window.isResultInsert = !0;
              $platformManager.Platform.showInsert();
              t.fullAdCounter = 0;
            }, 500));
          }
        }
      }
    }
  };

  e.prototype.onForeground = function () {
    $xMADUtils.XMAD.onForeground();
  };

  e.prototype.iosApplicationDidBecomeActive = function () {
    var t = $bmsManager.BMS.getKey("splash");

    if (t) {
      var e = $userManager.User.get($userConst.UserData.loginDaysTimes);
      console.log("登陆天数", e, "splash", t);

      if (e >= t) {
        console.log("打开开屏");
        $platformManager.Platform.showOpenAd();
      }
    }
  };

  e.prototype.adNotReady = function () {
    $tipManager.Tip.show($languageManager["default"].formatStr("暂无广告"));
  };

  e.prototype.initBMS = function () {
    var t = this;
    var e = $platformManager.Platform.getConfig().version;
    var n = cc.sys;
    var r = n.platform;

    if (r != n.IPHONE && r != n.IPAD) {//
    } else {
      e = jsb.reflection.callStaticMethod("AppController", "gainIOSBMSVersion");
      console.log("获得版本号", e);

      if (window.haiwai) {
        $bmsManager.BMS.setDefaultData(this.externalDefaultBMS);
      } else {
        $bmsManager.BMS.setDefaultData(this.internalDefaultBMS);
      }
    }

    if ("wlgczhwapk" == $platformManager.Platform.getConfig().flag) {
      $bmsManager.BMS.setDefaultData({
        isStore: []
      });
    } else {
      $bmsManager.BMS.setDefaultData({
        isStore: ["US", "GB", "CA", "DE", "AU", "JP", "TW", "FR", "HK"]
      });
    }

    var o = void 0;
    var i = $platformManager.Platform.getConfig().flag;
    var a = $platformManager.Platform.getConfig().version;

    if (-1 == i.indexOf("oppo") && -1 == a.indexOf("oppo")) {//
    } else {
      o = "oppo";
    }

    if (-1 == i.indexOf("ios") && -1 == a.indexOf("ios")) {//
    } else {
      o = "ios";
    } // $bmsManager.BMS.init(
    //     $platformManager.Platform.getConfig().flag,
    //     e,
    //     function () {
    //         if (
    //             $platformManager.Platform.is($platformConst.EPlatform.IOS) &&
    //             $bmsManager.BMS.checkKey("isAdsTrack")
    //         ) {
    //             jsb.reflection.callStaticMethod("AppController", "gainGameState:", 1);
    //         }
    //         var e = $bmsManager.BMS.getKey("LevelSort");
    //         var n = $localStorageManager.default.get($localStorageConst.default.HasConfirmLevel) || 0;
    //         var r = $localStorageManager.default.get($localStorageConst.default.ConfigSuffix);
    //         if (n) {
    //             if (0 != r && r <= 5) {
    //                 $platformManager.Platform.getConfig().configSuffix = "_" + r;
    //             } else {
    //                 $platformManager.Platform.getConfig().configSuffix = "";
    //             }
    //             console.log("老玩家关卡顺序", $platformManager.Platform.getConfig().configSuffix);
    //         } else {
    //             if (e.length) {
    //                 var o = $utils.Utils.randomNum(0, e.length - 1);
    //                 if (0 != e[o] && e[o] <= 5) {
    //                     $platformManager.Platform.getConfig().configSuffix = "_" + e[o];
    //                     $localStorageManager.default.set($localStorageConst.default.ConfigSuffix, e[o]);
    //                 } else {
    //                     $platformManager.Platform.getConfig().configSuffix = "";
    //                     $localStorageManager.default.set($localStorageConst.default.ConfigSuffix, 0);
    //                 }
    //             } else {
    //                 $platformManager.Platform.getConfig().configSuffix = "";
    //                 $localStorageManager.default.set($localStorageConst.default.ConfigSuffix, 0);
    //             }
    //             $localStorageManager.default.set($localStorageConst.default.HasConfirmLevel, 1);
    //             console.log("首次确定关卡顺序", $platformManager.Platform.getConfig().configSuffix);
    //         }
    //         t.sucEnterMain();
    //     },
    //     o
    // ).catch(function () {
    //     console.log("BMS加载失败");
    // });


    this.scheduleOnce(function () {
      console.log("两秒没跳转直接进入");
      t.sucEnterMain();
    }, 3);
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

  e.prototype.sucEnterMain = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var r;
      var o;
      var i;
      var a;
      var u;
      var m;
      var v;
      var w;

      var _;

      var S;
      var k;
      var I;
      var D;
      var U;
      var R = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            if (this.isEnterMain) {
              return [2];
            }

            this.isEnterMain = !0;
            game.plateAtlas = this.plantAtlas;
            t = $userManager.User.get("uuid") || this.guid();
            $userManager.User.set("uuid", t);
            console.log("uuid", t);
            $platformManager.Platform.taInit(t);
            e = $userManager.User.get($userConst.UserData.OpenNum) || 1;
            n = $userManager.User.get($userConst.UserData.PlayDays) || 1;

            if (1 == e) {
              cc.game.emit("gamelog_Thinking", "user_Login", {
                IsNew: !0,
                OpenNum: 1,
                PlayDays: 1
              });
            } else {
              $userManager.User.set($userConst.UserData.OpenNum, e + 1);
              cc.game.emit("gamelog_Thinking", "user_Login", {
                IsNew: !1,
                OpenNum: e + 1,
                PlayDays: n
              });
            }

            this.updateSkin(); // if (0 != (r = $bmsManager.BMS.getKey("AutoFullScreenAd"))) {
            //     this.schedule(function() {
            //         $platformManager.Platform.showInsert();
            //     }, r);
            // }
            // if (
            //     $platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE) &&
            //     !$userManager.User.get("googleID")
            // ) {
            //     o = jsb.reflection.callStaticMethod(
            //         "org/cocos2dx/javascript/AppActivity",
            //         "getUserId",
            //         "()Ljava/lang/String;"
            //     );
            //     $userManager.User.set("googleID", o);
            //     console.log("谷歌id", o);
            // } else {
            //     console.log("已有谷歌ID", $userManager.User.get("googleID"));
            // }
            // try {
            //     i = jsb.reflection.callStaticMethod(
            //         "org/cocos2dx/javascript/AppActivity",
            //         "getProductListJsonStr",
            //         "()Ljava/lang/String;"
            //     );
            //     console.log("getProductListJsonStr", i);
            //     window.getProductListJsonStr = JSON.parse(i);
            // } catch (L) {
            //     console.log("checkInAppOrder-error", L);
            // }

            return [4, $httpUtils["default"].getTime()];

          case 1:
            if (a = s.sent()) {
              return [4, $timeManager["default"].init(a.data.time)];
            } else {
              return [3, 3];
            }

          case 2:
            s.sent();
            s.label = 3;

          case 3:
            $vIPSystem["default"].init();
            $paymentSystem["default"].init();
            $challengeSystem["default"].init();
            $localStorageManager["default"].get($localStorageConst["default"].CityListCompatible);
            u = $localStorageManager["default"].get($localStorageConst["default"].CityList) || [];
            return [4, $configManager.Config.get($configConst.ConfigConst.City)];

          case 4:
            m = s.sent();

            if ((v = $userManager.User.get("levelListLoopTimes") || {})[0]) {//
            } else {
              v[0] = 0;
            }

            if ((w = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {})[0]) {//
            } else {
              w[0] = 1;
            }

            return [4, $configManager.Config.get($configConst.ConfigConst.THEME + 0 + $platformManager.Platform.getConfig().configSuffix)];

          case 5:
            _ = s.sent();
            S = w[0] + v[0] * _.length;
            m.sort(function (t, e) {
              return t.sort - e.sort;
            });
            console.log("diji", S);

            if (S && S > 2) {
              for (k = 0; k < S - 2; k++) {
                I = m[k].id;
                u.includes(I) || u.push(I);
              }
            }

            $localStorageManager["default"].set($localStorageConst["default"].CityList, u);

            if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE)) {
              $bmsManager.BMS.getServerData($platformManager.Platform.getConfig().flag, $userManager.User.get("googleID") || t, $userConst.UserData.boreTimes + "," + $userConst.UserData.tipTimes + "," + $userConst.UserData.screwBoxTimes + "," + $localStorageConst["default"].cardAmount).then(function (t) {
                var e;
                var n;
                var r;
                var o;
                console.log("getServerData", t);

                if (null == t[$userConst.UserData.boreTimes] || Number(t[$userConst.UserData.boreTimes]) <= 0) {
                  e = 0;
                } else {
                  e = Number(t[$userConst.UserData.boreTimes]);
                }

                if (null == t[$userConst.UserData.tipTimes] || Number(t[$userConst.UserData.tipTimes]) <= 0) {
                  n = 0;
                } else {
                  n = Number(t[$userConst.UserData.tipTimes]);
                }

                if (null == t[$userConst.UserData.screwBoxTimes] || Number(t[$userConst.UserData.screwBoxTimes]) <= 0) {
                  r = 0;
                } else {
                  r = Number(t[$userConst.UserData.screwBoxTimes]);
                }

                $userManager.User.set($userConst.UserData.boreTimes, e);
                $userManager.User.set($userConst.UserData.tipTimes, n);
                $userManager.User.set($userConst.UserData.screwBoxTimes, r);

                if (null == t[$localStorageConst["default"].cardAmount] || Number(t[$localStorageConst["default"].cardAmount]) <= 0) {
                  o = 0;
                } else {
                  o = Number(t[$localStorageConst["default"].cardAmount]);
                }

                $localStorageManager["default"].set($localStorageConst["default"].cardAmount, o);
              });
            }

            this.startOppo();

            if ("haiwai" == $platformManager.Platform.getConfig().rank) {
              U = $userManager.User.get("nation");
              D = $bmsManager.BMS.getKey("isStore");
              console.log("province", U);
              console.log("isStore", D);

              if (!U) {
                $challengeHttp.challengeHttp.getCountry(!0).then(function (t) {
                  console.log("国家", t);
                  $userManager.User.set("nation", t);
                  R.gotoGame();

                  if ("CN" == t) {
                    $platformManager.Platform.getConfig().hasShare = 0;
                  }

                  if (0 == D.length) {
                    console.log("当前地区有内购0", t);
                    $platformManager.Platform.getConfig().hasPurchase = 1;
                    cc.game.emit("hasPurchase");
                  } else {
                    if (D.includes(t)) {
                      console.log("当前地区有内购1", t), $platformManager.Platform.getConfig().hasPurchase = 1, cc.game.emit("hasPurchase");
                    } else {
                      console.log("当前地区没有内购1", t), $platformManager.Platform.getConfig().hasPurchase = 0;
                    }
                  }
                });
                return [2];
              }

              if (0 == D.length) {
                $platformManager.Platform.getConfig().hasPurchase = 1;
                cc.game.emit("hasPurchase");
              } else {
                if (D.includes(U)) {
                  console.log("当前地区有内购2", U), $platformManager.Platform.getConfig().hasPurchase = 1;
                } else {
                  console.log("当前地区没有内购2", U), $platformManager.Platform.getConfig().hasPurchase = 0;
                }
              }

              if ("CN" == U) {
                $platformManager.Platform.getConfig().hasShare = 0;
              }
            } else if (!(U = $userManager.User.get("province"))) {
              $challengeHttp.challengeHttp.getCountry().then(function (t) {
                console.log("省份", t);
                $userManager.User.set("province", t);
                $userManager.User.setTempData($userConst.TempData.isFirst, !0);
                R.gotoGame();
              });
              return [2];
            }

            this.scheduleOnce(function () {
              console.log("进入");
              $sceneManager["default"].loadScene($sceneConst.SceneConst.Home);

              if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE)) {
                $platformManager.Platform.showBanner();
                R.schedule(function () {
                  $platformManager.Platform.hideBanner();
                  R.scheduleOnce(function () {
                    $platformManager.Platform.showBanner();
                  }, 0.1);
                }, 25);
              }
            }, $platformManager.Platform.getConfig().loadingDelay);
            return [2];
        }
      });
    });
  };

  e.prototype.gotoGame = function () {
    $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, 0);
    $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
    $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
  };

  e.prototype.judgeMainMode = function (t) {
    var e;
    var n = $userManager.User.get($userConst.UserData.mode0LevelList_stage1ID) || [];
    var r = $userManager.User.get($userConst.UserData.mode0LevelList_stage2ID) || [];
    var o = [];
    var i = [];

    if (0 == t) {
      $configManager.Config.get($configConst.ConfigConst.THEME + 0 + $platformManager.Platform.getConfig().configSuffix).then(function (t) {
        if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
          for (var a = 0; a < t.length; a++) {
            var s = t[a];
            o.push(s.stage1ID);
            i.push(s.stage2ID);
          }

          $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, o);
          $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, i);
        } else if (t.length > n.length && 0 != n.length) {
          for (a = 0; a < t.length; a++) {
            s = t[a];
            a > n.length - 1 && (o.push(s.stage1ID), i.push(s.stage2ID));
          }

          o.sort(function () {
            return 0.5 - Math.random();
          });
          i.sort(function () {
            return 0.5 - Math.random();
          });
          o = n.concat(o);
          i = r.concat(i);
          console.log("有新增关卡");
          $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, o);
          $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, i);
        } else if (0 == n.length) {
          var c = [];
          var l = [];
          var u = [];
          var h = [];
          var p = [];
          var m = [];
          var y = [];
          var v = [];

          for (a = 0; a < t.length; a++) {
            s = t[a];
            0 == a && (e = s.stage1ID);

            if (a < 5) {
              c.push(s.stage1ID), l.push(s.stage2ID);
            } else {
              if (a < 10) {
                u.push(s.stage1ID), h.push(s.stage2ID);
              } else {
                if (a < 50) {
                  p.push(s.stage1ID), m.push(s.stage2ID);
                } else {
                  y.push(s.stage1ID), v.push(s.stage2ID);
                }
              }
            }
          }

          o = c.concat(u).concat(p).concat(y);
          i = l.concat(h).concat(m).concat(v);

          if ($bmsManager.BMS.getKey("mainModeID")) {
            o = u.concat(c).concat(p);
            i = h.concat(l).concat(m);
          } else {
            var w = o.indexOf(e);
            var _ = o[0];
            o[0] = e;
            o[w] = _;
          }

          console.log("没有新增关卡且是新用户");
          $userManager.User.set($userConst.UserData.mode0LevelList_stage1ID, o);
          $userManager.User.set($userConst.UserData.mode0LevelList_stage2ID, i);
        }
      });
    }
  };

  e.prototype.guid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var e = 16 * Math.random() | 0;
      return ("x" == t ? e : 3 & e | 8).toString(16);
    });
  };

  e.prototype.loadAssetsBundle = function (t, e) {
    var n = this;
    cc.assetManager.loadBundle(t, function (r, o) {
      if (null !== r) {
        console.log("[ResMgr]:Load AssetsBundle Error: " + t);
        n.abBunds[t] = null;
      } else {
        console.log("[ResMgr]:Load AssetsBundle Success: " + t);
        n.abBunds[t] = o;
      }

      if (e) {
        e();
      }
    });
  };

  __decorate([F(cc.Prefab)], e.prototype, "loadingPrefab", void 0);

  __decorate([F(cc.SpriteAtlas)], e.prototype, "plantAtlas", void 0);

  __decorate([F([cc.TTFFont])], e.prototype, "fonts", void 0);

  return __decorate([x], e);
}(cc.Component);

exports["default"] = j;

cc._RF.pop();