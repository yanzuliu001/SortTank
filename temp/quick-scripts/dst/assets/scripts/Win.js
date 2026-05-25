
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98546R4ITpEbKkQSJwqSbee', 'Win');
// scripts/Win.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $audioConst = require("./AudioConst");

var $configConst = require("./ConfigConst");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $popupConst = require("./PopupConst");

var $sceneConst = require("./SceneConst");

var $userConst = require("./UserConst");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $audioManager = require("./AudioManager");

var $bmsManager = require("./BmsManager");

var $configManager = require("./ConfigManager");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $sceneManager = require("./SceneManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $challengeHttp = require("./ChallengeHttp");

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var $oPPOMiniADUtils = require("./OPPOMiniADUtils");

var $utils = require("./Utils");

var $vIVOADUtils = require("./VIVOADUtils");

var $xMADUtils = require("./XMADUtils");

var $shuShuConst = require("./ShuShuConst");

var $assetManager = require("./AssetManager");

var $effectManager = require("./EffectManager");

var F = cc._decorator;
var j = F.ccclass;
var V = (F.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.text = null;
    e.oldCurrentScene_ = null;
    e.roleSpine = {
      0: "nvwang",
      1: "gongzhu1",
      2: "gongzhu2",
      3: "gongzhu3",
      4: "guowang",
      5: "wangzi",
      6: "huakucha"
    };
    e.assetAssignmentType = 1;
    e.isLoading = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.text = this.dict.text.getComponent(cc.Label);
    this.addBtnOn("nextBtn", this.clickNext, this);
    this.addBtnOn("videoBtn", this.clickVideo, this);
    this.addBtnOn("shareBtn", this.clickShare, this);
    this.addBtnOn("shareBtn2", this.clickShare2, this);
    this.addBtnOn("homeBtn", this.clickHome, this);
    this.addBtnOn("restartBtn", this.clickRestart, this);
    this.addBtnOn("gouRoot", this.clickGou, this);
    this.addBtnOn("backBtn", this.clickHome, this);
    this.addBtnOn("mapBtn", this.mapBtn, this);
    this.oldCurrentScene_ = $userManager.User.getTempData("currentScene_");
    $userManager.User.setTempData("currentScene_", 4);
    this.initView();
    console.log("调用广告");
    $platformManager.Platform.showCustomAd1(this.dict.leftAd);
    $platformManager.Platform.showCustomAd2(this.dict.rightAd);
  };

  e.prototype.mapBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Map);
  };

  e.prototype.heroLevelBtn = function () {
    $popupManager["default"].show($popupConst.PopupConst.Role);
  };

  e.prototype.onDestroy = function () {
    $userManager.User.setTempData("currentScene_", this.oldCurrentScene_);
  };

  e.prototype.onEnable = function () {
    $audioManager.Audio.stopMusic();
    $userManager.User.setTempData("isWinShare", 0);

    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showLargeFeed();
      $xMADUtils.XMAD.showInterstitialFeed_result();
    } else {
      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        $oPPOAndroidAdUtils.OPPOAndroidAd.showLargeFeed(), $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_result();
      } else {
        if ($platformManager.Platform.is($platformConst.EPlatform.OPPO)) {
          $oPPOMiniADUtils.OPPOMiniAD.showLargeFeed(), $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_result();
        } else {
          $platformManager.Platform.is($platformConst.EPlatform.VIVO) && $vIVOADUtils.VIVOAD.showCustomAd_1(function () {
            $vIVOADUtils.VIVOAD.showCustomAd_2();
          });
        }
      }
    }

    cc.game.on("hideShipRank", this.hideShipRank, this);
  };

  e.prototype.onDisable = function () {
    $audioManager.Audio.playMusic($audioConst.AudioConst.BGM_MAIN);

    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.removeLargePicFeed();
    } else {
      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
      }
    }

    $platformManager.Platform.hideNativeAds();
    $platformManager.Platform.hideCustomAd1();
    $platformManager.Platform.hideCustomAd2();
    $platformManager.Platform.hideCustomAd_1();
    $platformManager.Platform.hideCustomAd_2();
    $eventManager.Event.emit($eventConst["default"].destroyInsert);
    cc.game.off("hideShipRank", this.hideShipRank, this);
  };

  e.prototype.hideShipRank = function () {
    this.dict.shipRank.active = !1;
  };

  e.prototype.shareSuc = function () {};

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
      var f;
      var h;
      var p;
      var b;
      var k;
      var P;
      var T;
      var A;
      var U;
      var B;
      var O;
      var R;
      var F;
      var j;
      var V;
      var H;
      var q;
      var z;
      var G;
      var K;
      var W;
      var X;
      var Y = this;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            t = $memoryStorageManager["default"].get($memoryStorageConst["default"].IsFail);
            e = $memoryStorageManager["default"].get($memoryStorageConst["default"].CollectGoodsID);
            n = $memoryStorageManager["default"].get($memoryStorageConst["default"].CollectGoodsName);
            r = $localStorageManager["default"].get($localStorageConst["default"].Collect) || {
              0: []
            };
            return t ? (this.dict.resultState1.active = !0, this.dict.resultState0.active = !1, this.dict.restartBtn.active = !0, this.dict.nextBtn.active = !1, $audioManager.Audio.playEffect($audioConst.AudioConst.lose), b = $userManager.User.getTempData("levelTime"), k = (new Date().getTime() - b) / 1e3, cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Lose, {
              lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
              mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
              queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
              times: k,
              sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
            }), this.dict.shareBtnText2.getComponent(cc.Label).string = "喊人", this.dict.roleSpineFail && ((i = $localStorageManager["default"].get($localStorageConst["default"].SkinList) || {})[0] || (i[0] = [0]), i[1] || (i[1] = [0]), (a = $localStorageManager["default"].get($localStorageConst["default"].UseSkin) || {})[0] || (a[0] = 0), a[1] || (a[1] = 0), this.loadSpine("" + this.roleSpine[a[0]], this.dict.roleSpineFail.getComponent(sp.Skeleton), !0)), [3, 5]) : [3, 1];

          case 1:
            $audioManager.Audio.playEffect($audioConst.AudioConst.win);
            this.dict.resultState1.active = !1;
            this.dict.resultState0.active = !0;
            return !e || r[0].includes(e) || 0 != $userManager.User.getTempData($userConst.TempData.CURRENT_MODE) ? [3, 3] : (this.dict.getGoodsRoot.active = !0, this.dict.noGoodsRoot.active = !1, [4, $assetManager["default"].getRes("gameBundle", "texture/collect/" + e, cc.Texture2D)]);

          case 2:
            o = s.sent();
            this.dict.winText.getComponent(cc.Label).string = $languageManager["default"].formatStr("恭喜获得%s", n);
            this.dict.collectIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o);
            r[0].push(e);
            $localStorageManager["default"].set($localStorageConst["default"].Collect, r);
            return [3, 4];

          case 3:
            this.dict.getGoodsRoot.active = !1;
            this.dict.noGoodsRoot.active = !0;
            s.label = 4;

          case 4:
            if (this.dict.roleSpineSuc) {
              if ((i = $localStorageManager["default"].get($localStorageConst["default"].SkinList) || {})[0]) {//
              } else {
                i[0] = [0];
              }

              if (i[1]) {//
              } else {
                i[1] = [0];
              }

              if ((a = $localStorageManager["default"].get($localStorageConst["default"].UseSkin) || {})[0]) {//
              } else {
                a[0] = 0;
              }

              if (a[1]) {//
              } else {
                a[1] = 0;
              }

              this.loadSpine("" + this.roleSpine[a[0]], this.dict.roleSpineSuc.getComponent(sp.Skeleton));
            }

            c = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
            f = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
            h = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);

            if (this.dict["title_" + $languageManager["default"].instance.lan]) {
              this.dict["title_" + $languageManager["default"].instance.lan].active = !0;
            }

            $configManager.Config.get($configConst.ConfigConst.RESULT).then(function (t) {
              for (var e = 0; e < t.length; e++) {
                if (t[e].stageID == h) {
                  Y.text.string = t[e].resultText;
                }
              }
            });
            p = $platformManager.Platform.getConfig();
            this.dict.shareBtn.active = !1;

            if (p.hasRecord) {
              this.dict.shareBtn.active = !0;
            }

            if (p.hasShare) {
              this.dict.shareBtn2.active = !0;
            } else {
              this.dict.shareBtn2.active = !1;
            }

            cc.game.emit("gamelog", "page007");
            cc.game.emit("gamelog", "Level_Win_" + f + "_" + c);
            this.dict.screenshot.getComponent(cc.Sprite).spriteFrame = window.screenShotPicture;
            this.scheduleOnce(function () {
              Y.judgeNewMode();
            }, 0.3);
            this.dict.videoBtn.active = !1;
            console.log("测试皮肤");
            b = $userManager.User.getTempData("totalLevelTime");
            k = (new Date().getTime() - b) / 1e3;
            P = $userManager.User.get($userConst.UserData.useSkinIDList);
            T = this.secondFormat(k);
            this.dict.time.getComponent(cc.Label).string = $languageManager["default"].formatStr("累计用时%d分%d秒", Number(T[0]), Number(T[1]));
            P[0];
            A = "nation";

            if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE)) {//
            } else {
              A = "province";
            }

            U = new Date();
            B = this.showTime(U.getMonth() + 1);
            O = this.showTime(U.getDate());
            R = "province_" + B + O + "_" + p.rank;
            $challengeHttp.challengeHttp.incrRank(R, $userManager.User.get(A), 1).then(function (t) {
              console.log("上传一次数据", t);
            });

            if ($userManager.User.get($userConst.UserData.todayFirstPass)) {//
            } else {
              $userManager.User.set($userConst.UserData.todayFirstPass, 1);
              F = "people_" + B + O + $platformManager.Platform.getConfig().rank;

              if ("haiwai" == $platformManager.Platform.getConfig().rank) {
                F = "countryPeople_" + B + O + "_" + $platformManager.Platform.getConfig().rank;
              }

              $challengeHttp.challengeHttp.incrRank(F, $userManager.User.get(A), 1).then(function (t) {
                console.log("上传一次数据", t);
              });
            }

            if (0 == (j = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE)) && $platformManager.Platform.getConfig().flag.includes("wx")) {
              V = $userManager.User.get("passLevel" + j) || 0;
              H = {
                wxgame: {
                  score: V,
                  update_time: 1513080573
                },
                cost_ms: 36500
              };
              q = {
                key: "score",
                value: JSON.stringify(H)
              };
              z = [q];

              if (window.wx) {
                window.wx.setUserCloudStorage({
                  KVDataList: z,
                  success: function success() {
                    console.log("[WxPlatform] 保存用户数据成功:", z);
                  },
                  fail: function fail() {
                    console.log("[WxPlatform] 保存用户数据失败:", z);
                  }
                });
              }
            }

            G = ["查看答案或提示有助于快速通关。", "签到可以拿到皮肤，记得去签到哦！", "“更多玩法”里有许多非常值得挑战的玩法。", "关卡比较难通关时，多尝试几次就会变得容易。"];
            K = $utils.Utils.randomNum(0, 3);

            if (this.dict.tipText) {
              this.dict.tipText.getComponent(cc.Label).string = "温馨提示：" + G[K];
            }

            if (window.f29086_dragonBall) {
              W = $localStorageManager["default"].get($localStorageConst["default"].DragonBall) || 0;
              $localStorageManager["default"].set($localStorageConst["default"].DragonBall, W + window.f29086_dragonBall);
            }

            if (window.f29086_coin) {
              X = $localStorageManager["default"].get($localStorageConst["default"].Coin) || 0;
              $localStorageManager["default"].set($localStorageConst["default"].Coin, X + window.f29086_coin);
            }

            this.scheduleOnce(function () {
              $effectManager.Effect.showEffect(10, Y.dict.coinIcon, 2);
            }, 0.3);
            this.scheduleOnce(function () {
              $effectManager.Effect.showEffect(1, Y.dict.dragonBallIcon, 3);
            }, 0.3);
            s.label = 5;

          case 5:
            return [2];
        }
      });
    });
  };

  e.prototype.updateMapBtn = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var n;
      var r;
      var o;
      var i;
      return __generator(this, function (a) {
        switch (a.label) {
          case 0:
            e = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
            n = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE) || 0;
            return t || e < 2 || 0 != n ? [2, this.dict.mapBtn.active = !1] : [4, $configManager.Config.get($configConst.ConfigConst.City)];

          case 1:
            (r = a.sent()).sort(function (t, e) {
              return t.sort - e.sort;
            });
            o = $memoryStorageManager["default"].get($memoryStorageConst["default"].CurrentChallengeCity);
            this.dict.city.getComponent(cc.Label).string = "激活城市：" + r.find(function (t) {
              return t.id == o;
            }).cityID;
            (i = $localStorageManager["default"].get($localStorageConst["default"].CityList) || []).push(o);
            $localStorageManager["default"].set($localStorageConst["default"].CityList, i);
            return [2];
        }
      });
    });
  };

  e.prototype.updateNewElement = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var n;
      var r;
      var o;
      var i;
      var a;
      var c;
      var l;
      var f;
      var d;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            if (t) {
              return this.dict.newElementRoot.active = !1, this.dict.nextBtn.active = !1, [2];
            } else {
              if (0 != ($userManager.User.getTempData($userConst.TempData.CURRENT_MODE) || 0)) {
                return [2, this.dict.newElementRoot.active = !1];
              } else {
                return e = $memoryStorageManager["default"].get($memoryStorageConst["default"].IsDailyChallenge) || 0, this.dict.newElementRoot.active = !e, this.dict.nextBtn.active = !e, n = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL), r = $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix) || 0, e ? [3, 7] : [4, $configManager.Config.get($configConst.ConfigConst.Feature)];
              }
            }

          case 1:
            o = s.sent();
            i = o.filter(function (t) {
              return t.sortID == r;
            });
            return (a = i.find(function (t) {
              return t.levelID > n;
            })) ? (c = i.find(function (t) {
              return a.id - 1 == t.id;
            }), console.log("过滤后", i), console.log("过滤后data", a, c), l = void 0, f = void 0, 1 != a.featureID && c ? [3, 3] : (l = n, f = a.levelID - 1, this.dict.progressText.getComponent(cc.Label).string = l + "/" + f, this.dict.unlockProgress.getComponent(cc.Sprite).fillRange = l / f, [4, $assetManager["default"].getRes("resources", "texture/mode/icon_yuansu" + a.featureID, cc.Texture2D)])) : [3, 6];

          case 2:
            d = s.sent();
            this.dict.newElement.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(d);
            return [3, 5];

          case 3:
            l = n - c.levelID + 1;
            f = a.levelID - c.levelID;
            this.dict.progressText.getComponent(cc.Label).string = l + "/" + f;
            this.dict.unlockProgress.getComponent(cc.Sprite).fillRange = l / f;
            return [4, $assetManager["default"].getRes("resources", "texture/mode/icon_yuansu" + a.featureID, cc.Texture2D)];

          case 4:
            d = s.sent();
            this.dict.newElement.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(d);
            s.label = 5;

          case 5:
            if (l == f) {
              this.dict.newElementText.getComponent(cc.Label).string = "即将开启";
            }

            return [3, 7];

          case 6:
            this.dict.newElementRoot.active = !1;
            s.label = 7;

          case 7:
            return [2];
        }
      });
    });
  };

  e.prototype.downloadSpine = function (t, e) {
    return new Promise(function (t, n) {
      cc.resources.load(e, sp.SkeletonData, function (e, r) {
        if (e) {
          cc.warn(e);
          return n(e);
        }

        t([null, r, null]);
      });
    });
  };

  e.prototype.loadSpine = function (t, e, n) {
    if (void 0 === n) {
      n = !1;
    }

    return __awaiter(this, void 0, void 0, function () {
      var r;
      var o;
      var i;
      var a;
      var c;
      var l;
      var u;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            r = "spine/role/" + t;
            o = "spine/role/" + t;
            i = "spine/role/" + t;
            s.label = 1;

          case 1:
            s.trys.push([1, 3,, 4]);
            return [4, this.downloadSpine(i, o, r, t)];

          case 2:
            a = s.sent();
            return e && cc.isValid(e.node) ? (c = new sp.SkeletonData(), a[0] ? (c.skeletonJson = a[1], c.atlasText = a[0], c.textures = a[2], c.textureNames = a[3]) : c = a[1], l = "shengli", n && (l = "shibai"), console.log("isFail", n, l), 1 == this.assetAssignmentType && (e.skeletonData = c, e.setSkin("default"), e.defaultSkin = "default", c.getRuntimeData() && (e.defaultAnimation = l || c.getRuntimeData().animations[0].name, e.setAnimation(0, l || c.getRuntimeData().animations[0].name, e.loop))), [3, 4]) : [2];

          case 3:
            u = s.sent();
            console.log(u);
            return [2];

          case 4:
            return [2];
        }
      });
    });
  };

  e.prototype.showTime = function (t) {
    if (t > 10) {
      return t;
    } else {
      return "0" + t;
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
    var a = (r = Math.floor(r), (o = Math.floor(o)) >= 10 ? o + "" : o);
    var s;

    if ((i = Math.floor(i)) >= 10) {
      s = i + "";
    } else {
      s = i;
    }

    if (n) {
      i = 100 * i / 60;

      if ((i = Math.floor(i)) >= 10) {
        s = i + "";
      } else {
        s = "0" + i;
      }
    }

    switch (e) {
      case 2:
        this.min = Number(a);
        this.second = Number(s);
    }

    return [a, s];
  };

  e.prototype.judgeNewMode = function () {
    $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
    $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
    var t = $bmsManager.BMS.getKey("UnlockThemeList");
    $bmsManager.BMS.getKey("UnlockThemeMainLv");
    $bmsManager.BMS.getKey("UnlockThemeSubLv");

    if (t.length) {
      var e = $userManager.User.get($userConst.UserData.UNLOCK_MODE_LIST) || [];
      var n = -1;

      for (var r = 0; r < t.length; r++) {
        var o = t[r];

        if (-1 == e.indexOf(o)) {
          n = o;
          break;
        }
      }

      console.log("准备解锁的新模式id", n);
    }
  };

  e.prototype.clickNext = function () {
    if (!this.isLoading) {
      this.isLoading = !0;

      if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
        $xMADUtils.XMAD.showInterstitialFeed();
      }

      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
        $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
      }

      if ($platformManager.Platform.is($platformConst.EPlatform.OPPO)) {
        $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed();
        $oPPOMiniADUtils.OPPOMiniAD.clickAdJump();
      }

      var t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
      var e = ($userManager.User.getTempData($userConst.TempData.CURRENT_MODE), $userManager.User.getTempData("newPass") || !1);
      console.log("newPass", e);

      if (t <= 2) {
        cc.game.emit("gamelog", "btn022");
        return void this.nextCb();
      }

      $userManager.User.get("levelListLoopTimes");
      $memoryStorageManager["default"].get($memoryStorageConst["default"].ThemeType);
      this.nextCb();
    }
  };

  e.prototype.nextCb = function () {
    if ($userManager.User.getTempData("challenge")) {
      $sceneManager["default"].loadScene($sceneConst.SceneConst.Home);
    } else {
      $eventManager.Event.emit($eventConst["default"].CLICK_NEXT);
      $popupManager["default"].hide();
    }
  };

  e.prototype.clickGou = function () {
    this.dict.gou.active = !this.dict.gou.active;
  };

  e.prototype.clickVideo = function () {
    var t = this;
    cc.game.emit("gamelog", "btn023");
    $platformManager.Platform.showRewardAds(function (e) {
      if (0 == e) {
        $userManager.User.setTempData("isNeedInsert", !1);

        if ($userManager.User.getTempData("cheats")) {
          $userManager.User.setTempData("isNeedInsert", !0);
        }

        cc.game.emit("gamelog", "rewarde_btn005");
        var n = $userManager.User.get($userConst.UserData.KEY);
        $userManager.User.set($userConst.UserData.KEY, n + 1);
        $eventManager.Event.emit($eventConst["default"].KEY_EFFECT);
        t.nextCb();
      }
    });
  };

  e.prototype.clickShare2 = function () {
    $platformManager.Platform.share();
  };

  e.prototype.clickShare = function () {
    var t = this;

    if ($platformManager.Platform.getConfig().hasRecord) {
      $platformManager.Platform.shareRecordCap(function (e) {
        if (0 == e) {
          $tipManager.Tip.show("分享录屏成功！");
          var n = $userManager.User.get("dailyShareRecordTimes") || 0;
          n += 1;
          $userManager.User.set("dailyShareRecordTimes", n);
          t.nextCb();
        } else {
          if (-1 == e) {
            $tipManager.Tip.show("录屏时间过短！");
          }
        }
      });
    } else {
      if ($platformManager.Platform.getConfig().hasShare) {
        $platformManager.Platform.share();
        this.scheduleOnce(function () {
          t.nextCb();
        }, 1);
      }
    }
  };

  e.prototype.clickHome = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Return, {
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
      queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
      sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
    });
    $sceneManager["default"].loadScene($sceneConst.SceneConst.Home);
  };

  e.prototype.clickRestart = function () {
    $popupManager["default"].hide();
    cc.game.emit("onRestartBtn");
  };

  e.prototype.getIsMistakeByChance = function (t) {
    var e = 100 * Math.random();
    var n = !1;
    console.log("随机数", e);
    console.log("当前配置概率:" + t);
    return 0 == t ? n : (t >= e && (n = !0), n);
  };

  return __decorate([j], e);
}($baseUI["default"]));
exports["default"] = V;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1dpbi5qcyJdLCJuYW1lcyI6WyJyIiwiJGJhc2VVSSIsInJlcXVpcmUiLCIkYXVkaW9Db25zdCIsIiRjb25maWdDb25zdCIsIiRldmVudENvbnN0IiwiJHBsYXRmb3JtQ29uc3QiLCIkcG9wdXBDb25zdCIsIiRzY2VuZUNvbnN0IiwiJHVzZXJDb25zdCIsIiRsb2NhbFN0b3JhZ2VDb25zdCIsIiRsb2NhbFN0b3JhZ2VNYW5hZ2VyIiwiJG1lbW9yeVN0b3JhZ2VDb25zdCIsIiRtZW1vcnlTdG9yYWdlTWFuYWdlciIsIiRhdWRpb01hbmFnZXIiLCIkYm1zTWFuYWdlciIsIiRjb25maWdNYW5hZ2VyIiwiJGV2ZW50TWFuYWdlciIsIiRsYW5ndWFnZU1hbmFnZXIiLCIkcGxhdGZvcm1NYW5hZ2VyIiwiJHBvcHVwTWFuYWdlciIsIiRzY2VuZU1hbmFnZXIiLCIkdGlwTWFuYWdlciIsIiR1c2VyTWFuYWdlciIsIiRjaGFsbGVuZ2VIdHRwIiwiJG9QUE9BbmRyb2lkQWRVdGlscyIsIiRvUFBPTWluaUFEVXRpbHMiLCIkdXRpbHMiLCIkdklWT0FEVXRpbHMiLCIkeE1BRFV0aWxzIiwiJHNodVNodUNvbnN0IiwiJGFzc2V0TWFuYWdlciIsIiRlZmZlY3RNYW5hZ2VyIiwiRiIsImNjIiwiX2RlY29yYXRvciIsImoiLCJjY2NsYXNzIiwiViIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInRleHQiLCJvbGRDdXJyZW50U2NlbmVfIiwicm9sZVNwaW5lIiwiYXNzZXRBc3NpZ25tZW50VHlwZSIsImlzTG9hZGluZyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJkaWN0IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJhZGRCdG5PbiIsImNsaWNrTmV4dCIsImNsaWNrVmlkZW8iLCJjbGlja1NoYXJlIiwiY2xpY2tTaGFyZTIiLCJjbGlja0hvbWUiLCJjbGlja1Jlc3RhcnQiLCJjbGlja0dvdSIsIm1hcEJ0biIsIlVzZXIiLCJnZXRUZW1wRGF0YSIsInNldFRlbXBEYXRhIiwiaW5pdFZpZXciLCJjb25zb2xlIiwibG9nIiwiUGxhdGZvcm0iLCJzaG93Q3VzdG9tQWQxIiwibGVmdEFkIiwic2hvd0N1c3RvbUFkMiIsInJpZ2h0QWQiLCJzaG93IiwiUG9wdXBDb25zdCIsIk1hcCIsImhlcm9MZXZlbEJ0biIsIlJvbGUiLCJvbkRlc3Ryb3kiLCJvbkVuYWJsZSIsIkF1ZGlvIiwic3RvcE11c2ljIiwiaXMiLCJFUGxhdGZvcm0iLCJYSUFPTUlfQU5EUk9JRCIsIlhNQUQiLCJzaG93TGFyZ2VGZWVkIiwic2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0IiwiT1BQT19BTkRST0lEIiwiT1BQT0FuZHJvaWRBZCIsIk9QUE8iLCJPUFBPTWluaUFEIiwiVklWTyIsIlZJVk9BRCIsInNob3dDdXN0b21BZF8xIiwic2hvd0N1c3RvbUFkXzIiLCJnYW1lIiwib24iLCJoaWRlU2hpcFJhbmsiLCJvbkRpc2FibGUiLCJwbGF5TXVzaWMiLCJBdWRpb0NvbnN0IiwiQkdNX01BSU4iLCJyZW1vdmVMYXJnZVBpY0ZlZWQiLCJoaWRlTmF0aXZlQWRzIiwiaGlkZUN1c3RvbUFkMSIsImhpZGVDdXN0b21BZDIiLCJoaWRlQ3VzdG9tQWRfMSIsImhpZGVDdXN0b21BZF8yIiwiRXZlbnQiLCJlbWl0IiwiZGVzdHJveUluc2VydCIsIm9mZiIsInNoaXBSYW5rIiwiYWN0aXZlIiwic2hhcmVTdWMiLCJfX2F3YWl0ZXIiLCJuIiwibyIsImkiLCJhIiwiYyIsImYiLCJoIiwicCIsImIiLCJrIiwiUCIsIlQiLCJBIiwiVSIsIkIiLCJPIiwiUiIsIkgiLCJxIiwieiIsIkciLCJLIiwiVyIsIlgiLCJZIiwiX19nZW5lcmF0b3IiLCJzIiwibGFiZWwiLCJnZXQiLCJJc0ZhaWwiLCJDb2xsZWN0R29vZHNJRCIsIkNvbGxlY3RHb29kc05hbWUiLCJDb2xsZWN0IiwicmVzdWx0U3RhdGUxIiwicmVzdWx0U3RhdGUwIiwicmVzdGFydEJ0biIsIm5leHRCdG4iLCJwbGF5RWZmZWN0IiwibG9zZSIsIkRhdGUiLCJnZXRUaW1lIiwiU2h1U2h1Q29uc3QiLCJMZXZlbF9Mb3NlIiwibHYiLCJUZW1wRGF0YSIsIkNVUlJFTlRfTEVWRUxfSUQiLCJtb2RlIiwiQ1VSUkVOVF9NT0RFIiwicXVldWUiLCJDVVJSRU5UX0xFVkVMIiwidGltZXMiLCJzb3J0IiwiQ29uZmlnU3VmZml4Iiwic2hhcmVCdG5UZXh0MiIsInN0cmluZyIsInJvbGVTcGluZUZhaWwiLCJTa2luTGlzdCIsIlVzZVNraW4iLCJsb2FkU3BpbmUiLCJzcCIsIlNrZWxldG9uIiwid2luIiwiaW5jbHVkZXMiLCJnZXRHb29kc1Jvb3QiLCJub0dvb2RzUm9vdCIsImdldFJlcyIsIlRleHR1cmUyRCIsInNlbnQiLCJ3aW5UZXh0IiwiZm9ybWF0U3RyIiwiY29sbGVjdEljb24iLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwicHVzaCIsInNldCIsInJvbGVTcGluZVN1YyIsImluc3RhbmNlIiwibGFuIiwiQ29uZmlnIiwiQ29uZmlnQ29uc3QiLCJSRVNVTFQiLCJ0aGVuIiwibGVuZ3RoIiwic3RhZ2VJRCIsInJlc3VsdFRleHQiLCJnZXRDb25maWciLCJzaGFyZUJ0biIsImhhc1JlY29yZCIsImhhc1NoYXJlIiwic2hhcmVCdG4yIiwic2NyZWVuc2hvdCIsIndpbmRvdyIsInNjcmVlblNob3RQaWN0dXJlIiwic2NoZWR1bGVPbmNlIiwianVkZ2VOZXdNb2RlIiwidmlkZW9CdG4iLCJVc2VyRGF0YSIsInVzZVNraW5JRExpc3QiLCJzZWNvbmRGb3JtYXQiLCJ0aW1lIiwiTnVtYmVyIiwiQU5EUk9JRF9HT09HTEUiLCJzaG93VGltZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInJhbmsiLCJjaGFsbGVuZ2VIdHRwIiwiaW5jclJhbmsiLCJ0b2RheUZpcnN0UGFzcyIsImZsYWciLCJ3eGdhbWUiLCJzY29yZSIsInVwZGF0ZV90aW1lIiwiY29zdF9tcyIsImtleSIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInd4Iiwic2V0VXNlckNsb3VkU3RvcmFnZSIsIktWRGF0YUxpc3QiLCJzdWNjZXNzIiwiZmFpbCIsIlV0aWxzIiwicmFuZG9tTnVtIiwidGlwVGV4dCIsImYyOTA4Nl9kcmFnb25CYWxsIiwiRHJhZ29uQmFsbCIsImYyOTA4Nl9jb2luIiwiQ29pbiIsIkVmZmVjdCIsInNob3dFZmZlY3QiLCJjb2luSWNvbiIsImRyYWdvbkJhbGxJY29uIiwidXBkYXRlTWFwQnRuIiwiQ2l0eSIsIkN1cnJlbnRDaGFsbGVuZ2VDaXR5IiwiY2l0eSIsImZpbmQiLCJpZCIsImNpdHlJRCIsIkNpdHlMaXN0IiwidXBkYXRlTmV3RWxlbWVudCIsImwiLCJkIiwibmV3RWxlbWVudFJvb3QiLCJJc0RhaWx5Q2hhbGxlbmdlIiwiRmVhdHVyZSIsImZpbHRlciIsInNvcnRJRCIsImxldmVsSUQiLCJmZWF0dXJlSUQiLCJwcm9ncmVzc1RleHQiLCJ1bmxvY2tQcm9ncmVzcyIsImZpbGxSYW5nZSIsIm5ld0VsZW1lbnQiLCJuZXdFbGVtZW50VGV4dCIsImRvd25sb2FkU3BpbmUiLCJQcm9taXNlIiwicmVzb3VyY2VzIiwibG9hZCIsIlNrZWxldG9uRGF0YSIsIndhcm4iLCJ1IiwidHJ5cyIsImlzVmFsaWQiLCJub2RlIiwic2tlbGV0b25Kc29uIiwiYXRsYXNUZXh0IiwidGV4dHVyZXMiLCJ0ZXh0dXJlTmFtZXMiLCJza2VsZXRvbkRhdGEiLCJzZXRTa2luIiwiZGVmYXVsdFNraW4iLCJnZXRSdW50aW1lRGF0YSIsImRlZmF1bHRBbmltYXRpb24iLCJhbmltYXRpb25zIiwibmFtZSIsInNldEFuaW1hdGlvbiIsImxvb3AiLCJNYXRoIiwiZmxvb3IiLCJtaW4iLCJzZWNvbmQiLCJCTVMiLCJnZXRLZXkiLCJVTkxPQ0tfTU9ERV9MSVNUIiwiaW5kZXhPZiIsInNob3dJbnRlcnN0aXRpYWxGZWVkIiwiY2xpY2tBZEp1bXAiLCJuZXh0Q2IiLCJUaGVtZVR5cGUiLCJsb2FkU2NlbmUiLCJTY2VuZUNvbnN0IiwiSG9tZSIsIkNMSUNLX05FWFQiLCJoaWRlIiwiZ291Iiwic2hvd1Jld2FyZEFkcyIsIktFWSIsIktFWV9FRkZFQ1QiLCJzaGFyZSIsInNoYXJlUmVjb3JkQ2FwIiwiVGlwIiwiTGV2ZWxfUmV0dXJuIiwiZ2V0SXNNaXN0YWtlQnlDaGFuY2UiLCJyYW5kb20iLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUksY0FBYyxHQUFHSixPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUssV0FBVyxHQUFHTCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJTSxXQUFXLEdBQUdOLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlPLFVBQVUsR0FBR1AsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSVEsa0JBQWtCLEdBQUdSLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQzs7QUFDQSxJQUFJUyxvQkFBb0IsR0FBR1QsT0FBTyxDQUFDLHVCQUFELENBQWxDOztBQUNBLElBQUlVLG1CQUFtQixHQUFHVixPQUFPLENBQUMsc0JBQUQsQ0FBakM7O0FBQ0EsSUFBSVcscUJBQXFCLEdBQUdYLE9BQU8sQ0FBQyx3QkFBRCxDQUFuQzs7QUFDQSxJQUFJWSxhQUFhLEdBQUdaLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJYSxXQUFXLEdBQUdiLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUljLGNBQWMsR0FBR2QsT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElB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QUMySixRQUFYLENBQW9CSyxhQUFsRCxDQUg2RDtNQUlwRUUsSUFBSSxFQUFFaEssb0JBQW9CLFdBQXBCLENBQTZCeUksR0FBN0IsQ0FBaUMxSSxrQkFBa0IsV0FBbEIsQ0FBMkJrSyxZQUE1RDtJQUo4RCxDQUF4RTtJQU1BdkosYUFBYSxXQUFiLENBQXNCb1MsU0FBdEIsQ0FBZ0NqVCxXQUFXLENBQUNrVCxVQUFaLENBQXVCQyxJQUF2RDtFQUNILENBUkQ7O0VBU0FsUixDQUFDLENBQUNTLFNBQUYsQ0FBWVksWUFBWixHQUEyQixZQUFZO0lBQ25DMUMsYUFBYSxXQUFiLENBQXNCeVMsSUFBdEI7SUFDQTNSLEVBQUUsQ0FBQ2lFLElBQUgsQ0FBUWMsSUFBUixDQUFhLGNBQWI7RUFDSCxDQUhEOztFQUlBeEUsQ0FBQyxDQUFDUyxTQUFGLENBQVlvUixvQkFBWixHQUFtQyxVQUFVOVIsQ0FBVixFQUFhO0lBQzVDLElBQUlDLENBQUMsR0FBRyxNQUFNb1EsSUFBSSxDQUFDMEIsTUFBTCxFQUFkO0lBQ0EsSUFBSS9NLENBQUMsR0FBRyxDQUFDLENBQVQ7SUFDQW5ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUI3QixDQUFuQjtJQUNBNEIsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWTlCLENBQXhCO0lBQ0EsT0FBTyxLQUFLQSxDQUFMLEdBQVNnRixDQUFULElBQWNoRixDQUFDLElBQUlDLENBQUwsS0FBVytFLENBQUMsR0FBRyxDQUFDLENBQWhCLEdBQW9CQSxDQUFsQyxDQUFQO0VBQ0gsQ0FORDs7RUFPQSxPQUFPZ04sVUFBVSxDQUFDLENBQUNwUyxDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBL3NCRCxDQStzQkd4QyxPQUFPLFdBL3NCVixDQUZDLENBQUw7QUFrdEJBd1UsT0FBTyxXQUFQLEdBQWtCblMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRiYXNlVUkgPSByZXF1aXJlKFwiLi9CYXNlVUlcIik7XG52YXIgJGF1ZGlvQ29uc3QgPSByZXF1aXJlKFwiLi9BdWRpb0NvbnN0XCIpO1xudmFyICRjb25maWdDb25zdCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnN0XCIpO1xudmFyICRldmVudENvbnN0ID0gcmVxdWlyZShcIi4vRXZlbnRDb25zdFwiKTtcbnZhciAkcGxhdGZvcm1Db25zdCA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtQ29uc3RcIik7XG52YXIgJHBvcHVwQ29uc3QgPSByZXF1aXJlKFwiLi9Qb3B1cENvbnN0XCIpO1xudmFyICRzY2VuZUNvbnN0ID0gcmVxdWlyZShcIi4vU2NlbmVDb25zdFwiKTtcbnZhciAkdXNlckNvbnN0ID0gcmVxdWlyZShcIi4vVXNlckNvbnN0XCIpO1xudmFyICRsb2NhbFN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZUNvbnN0XCIpO1xudmFyICRsb2NhbFN0b3JhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlTWFuYWdlclwiKTtcbnZhciAkbWVtb3J5U3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTWVtb3J5U3RvcmFnZUNvbnN0XCIpO1xudmFyICRtZW1vcnlTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL01lbW9yeVN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICRhdWRpb01hbmFnZXIgPSByZXF1aXJlKFwiLi9BdWRpb01hbmFnZXJcIik7XG52YXIgJGJtc01hbmFnZXIgPSByZXF1aXJlKFwiLi9CbXNNYW5hZ2VyXCIpO1xudmFyICRjb25maWdNYW5hZ2VyID0gcmVxdWlyZShcIi4vQ29uZmlnTWFuYWdlclwiKTtcbnZhciAkZXZlbnRNYW5hZ2VyID0gcmVxdWlyZShcIi4vRXZlbnRNYW5hZ2VyXCIpO1xudmFyICRsYW5ndWFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9MYW5ndWFnZU1hbmFnZXJcIik7XG52YXIgJHBsYXRmb3JtTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtTWFuYWdlclwiKTtcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xudmFyICRzY2VuZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9TY2VuZU1hbmFnZXJcIik7XG52YXIgJHRpcE1hbmFnZXIgPSByZXF1aXJlKFwiLi9UaXBNYW5hZ2VyXCIpO1xudmFyICR1c2VyTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VzZXJNYW5hZ2VyXCIpO1xudmFyICRjaGFsbGVuZ2VIdHRwID0gcmVxdWlyZShcIi4vQ2hhbGxlbmdlSHR0cFwiKTtcbnZhciAkb1BQT0FuZHJvaWRBZFV0aWxzID0gcmVxdWlyZShcIi4vT1BQT0FuZHJvaWRBZFV0aWxzXCIpO1xudmFyICRvUFBPTWluaUFEVXRpbHMgPSByZXF1aXJlKFwiLi9PUFBPTWluaUFEVXRpbHNcIik7XG52YXIgJHV0aWxzID0gcmVxdWlyZShcIi4vVXRpbHNcIik7XG52YXIgJHZJVk9BRFV0aWxzID0gcmVxdWlyZShcIi4vVklWT0FEVXRpbHNcIik7XG52YXIgJHhNQURVdGlscyA9IHJlcXVpcmUoXCIuL1hNQURVdGlsc1wiKTtcbnZhciAkc2h1U2h1Q29uc3QgPSByZXF1aXJlKFwiLi9TaHVTaHVDb25zdFwiKTtcbnZhciAkYXNzZXRNYW5hZ2VyID0gcmVxdWlyZShcIi4vQXNzZXRNYW5hZ2VyXCIpO1xudmFyICRlZmZlY3RNYW5hZ2VyID0gcmVxdWlyZShcIi4vRWZmZWN0TWFuYWdlclwiKTtcbnZhciBGID0gY2MuX2RlY29yYXRvcjtcbnZhciBqID0gRi5jY2NsYXNzO1xudmFyIFYgPVxuICAgIChGLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgICAgICBlLnRleHQgPSBudWxsO1xuICAgICAgICAgICAgZS5vbGRDdXJyZW50U2NlbmVfID0gbnVsbDtcbiAgICAgICAgICAgIGUucm9sZVNwaW5lID0ge1xuICAgICAgICAgICAgICAgIDA6IFwibnZ3YW5nXCIsXG4gICAgICAgICAgICAgICAgMTogXCJnb25nemh1MVwiLFxuICAgICAgICAgICAgICAgIDI6IFwiZ29uZ3podTJcIixcbiAgICAgICAgICAgICAgICAzOiBcImdvbmd6aHUzXCIsXG4gICAgICAgICAgICAgICAgNDogXCJndW93YW5nXCIsXG4gICAgICAgICAgICAgICAgNTogXCJ3YW5nemlcIixcbiAgICAgICAgICAgICAgICA2OiBcImh1YWt1Y2hhXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlLmFzc2V0QXNzaWdubWVudFR5cGUgPSAxO1xuICAgICAgICAgICAgZS5pc0xvYWRpbmcgPSAhMTtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmRpY3QudGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcIm5leHRCdG5cIiwgdGhpcy5jbGlja05leHQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcInZpZGVvQnRuXCIsIHRoaXMuY2xpY2tWaWRlbywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwic2hhcmVCdG5cIiwgdGhpcy5jbGlja1NoYXJlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJzaGFyZUJ0bjJcIiwgdGhpcy5jbGlja1NoYXJlMiwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiaG9tZUJ0blwiLCB0aGlzLmNsaWNrSG9tZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwicmVzdGFydEJ0blwiLCB0aGlzLmNsaWNrUmVzdGFydCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiZ291Um9vdFwiLCB0aGlzLmNsaWNrR291LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJiYWNrQnRuXCIsIHRoaXMuY2xpY2tIb21lLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJtYXBCdG5cIiwgdGhpcy5tYXBCdG4sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbGRDdXJyZW50U2NlbmVfID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjdXJyZW50U2NlbmVfXCIpO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJjdXJyZW50U2NlbmVfXCIsIDQpO1xuICAgICAgICAgICAgdGhpcy5pbml0VmlldygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLosIPnlKjlub/lkYpcIik7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dDdXN0b21BZDEodGhpcy5kaWN0LmxlZnRBZCk7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dDdXN0b21BZDIodGhpcy5kaWN0LnJpZ2h0QWQpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5tYXBCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0Lk1hcCk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmhlcm9MZXZlbEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuUm9sZSk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiY3VycmVudFNjZW5lX1wiLCB0aGlzLm9sZEN1cnJlbnRTY2VuZV8pO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRhdWRpb01hbmFnZXIuQXVkaW8uc3RvcE11c2ljKCk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImlzV2luU2hhcmVcIiwgMCk7XG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uWElBT01JX0FORFJPSUQpKSB7XG4gICAgICAgICAgICAgICAgJHhNQURVdGlscy5YTUFELnNob3dMYXJnZUZlZWQoKTtcbiAgICAgICAgICAgICAgICAkeE1BRFV0aWxzLlhNQUQuc2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5PUFBPX0FORFJPSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICRvUFBPQW5kcm9pZEFkVXRpbHMuT1BQT0FuZHJvaWRBZC5zaG93TGFyZ2VGZWVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAkb1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLk9QUE8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkb1BQT01pbmlBRFV0aWxzLk9QUE9NaW5pQUQuc2hvd0xhcmdlRmVlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvUFBPTWluaUFEVXRpbHMuT1BQT01pbmlBRC5zaG93SW50ZXJzdGl0aWFsRmVlZF9yZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLlZJVk8pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZJVk9BRFV0aWxzLlZJVk9BRC5zaG93Q3VzdG9tQWRfMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2SVZPQURVdGlscy5WSVZPQUQuc2hvd0N1c3RvbUFkXzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmdhbWUub24oXCJoaWRlU2hpcFJhbmtcIiwgdGhpcy5oaWRlU2hpcFJhbmssIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlNdXNpYygkYXVkaW9Db25zdC5BdWRpb0NvbnN0LkJHTV9NQUlOKTtcbiAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5YSUFPTUlfQU5EUk9JRCkpIHtcbiAgICAgICAgICAgICAgICAkeE1BRFV0aWxzLlhNQUQucmVtb3ZlTGFyZ2VQaWNGZWVkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5PUFBPX0FORFJPSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICRvUFBPQW5kcm9pZEFkVXRpbHMuT1BQT0FuZHJvaWRBZC5yZW1vdmVMYXJnZVBpY0ZlZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVOYXRpdmVBZHMoKTtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaGlkZUN1c3RvbUFkMSgpO1xuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlQ3VzdG9tQWQyKCk7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVDdXN0b21BZF8xKCk7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVDdXN0b21BZF8yKCk7XG4gICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5kZXN0cm95SW5zZXJ0KTtcbiAgICAgICAgICAgIGNjLmdhbWUub2ZmKFwiaGlkZVNoaXBSYW5rXCIsIHRoaXMuaGlkZVNoaXBSYW5rLCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuaGlkZVNoaXBSYW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnNoaXBSYW5rLmFjdGl2ZSA9ICExO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zaGFyZVN1YyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBlLnByb3RvdHlwZS5pbml0VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICB2YXIgYztcbiAgICAgICAgICAgICAgICB2YXIgZjtcbiAgICAgICAgICAgICAgICB2YXIgaDtcbiAgICAgICAgICAgICAgICB2YXIgcDtcbiAgICAgICAgICAgICAgICB2YXIgYjtcbiAgICAgICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgICAgICB2YXIgUDtcbiAgICAgICAgICAgICAgICB2YXIgVDtcbiAgICAgICAgICAgICAgICB2YXIgQTtcbiAgICAgICAgICAgICAgICB2YXIgVTtcbiAgICAgICAgICAgICAgICB2YXIgQjtcbiAgICAgICAgICAgICAgICB2YXIgTztcbiAgICAgICAgICAgICAgICB2YXIgUjtcbiAgICAgICAgICAgICAgICB2YXIgRjtcbiAgICAgICAgICAgICAgICB2YXIgajtcbiAgICAgICAgICAgICAgICB2YXIgVjtcbiAgICAgICAgICAgICAgICB2YXIgSDtcbiAgICAgICAgICAgICAgICB2YXIgcTtcbiAgICAgICAgICAgICAgICB2YXIgejtcbiAgICAgICAgICAgICAgICB2YXIgRztcbiAgICAgICAgICAgICAgICB2YXIgSztcbiAgICAgICAgICAgICAgICB2YXIgVztcbiAgICAgICAgICAgICAgICB2YXIgWDtcbiAgICAgICAgICAgICAgICB2YXIgWSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LklzRmFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9ICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdEdvb2RzSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvbGxlY3RHb29kc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2xsZWN0KSB8fCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgodGhpcy5kaWN0LnJlc3VsdFN0YXRlMS5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5yZXN1bHRTdGF0ZTAuYWN0aXZlID0gITEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3QucmVzdGFydEJ0bi5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5uZXh0QnRuLmFjdGl2ZSA9ICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlFZmZlY3QoJGF1ZGlvQ29uc3QuQXVkaW9Db25zdC5sb3NlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwibGV2ZWxUaW1lXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoayA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGIpIC8gMWUzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5MZXZlbF9Mb3NlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlOiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lczogayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRpY3Quc2hhcmVCdG5UZXh0Mi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5ZaK5Lq6XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yb2xlU3BpbmVGYWlsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Ta2luTGlzdCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9KVswXSB8fCAoaVswXSA9IFswXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlbMV0gfHwgKGlbMV0gPSBbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Vc2VTa2luKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge30pWzBdIHx8IChhWzBdID0gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMV0gfHwgKGFbMV0gPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU3BpbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICsgdGhpcy5yb2xlU3BpbmVbYVswXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Qucm9sZVNwaW5lRmFpbC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzMsIDVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFszLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlFZmZlY3QoJGF1ZGlvQ29uc3QuQXVkaW9Db25zdC53aW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yZXN1bHRTdGF0ZTEuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnJlc3VsdFN0YXRlMC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgclswXS5pbmNsdWRlcyhlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICE9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFszLCAzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICgodGhpcy5kaWN0LmdldEdvb2RzUm9vdC5hY3RpdmUgPSAhMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5ub0dvb2RzUm9vdC5hY3RpdmUgPSAhMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYXNzZXRNYW5hZ2VyLmRlZmF1bHQuZ2V0UmVzKFwiZ2FtZUJ1bmRsZVwiLCBcInRleHR1cmUvY29sbGVjdC9cIiArIGUsIGNjLlRleHR1cmUyRClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LndpblRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuaBreWWnOiOt+W+lyVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jb2xsZWN0SWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByWzBdLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29sbGVjdCwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuZ2V0R29vZHNSb290LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5ub0dvb2RzUm9vdC5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnJvbGVTcGluZVN1Yykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LlNraW5MaXN0KSB8fCB7fSlbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVswXSA9IFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlbMV0gPSBbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Vc2VTa2luKSB8fCB7fSlbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVswXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhWzFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTcGluZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgKyB0aGlzLnJvbGVTcGluZVthWzBdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5yb2xlU3BpbmVTdWMuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpY3RbXCJ0aXRsZV9cIiArICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5pbnN0YW5jZS5sYW5dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdFtcInRpdGxlX1wiICsgJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0Lmluc3RhbmNlLmxhbl0uYWN0aXZlID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlJFU1VMVCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IHQubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0W2VdLnN0YWdlSUQgPT0gaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFkudGV4dC5zdHJpbmcgPSB0W2VdLnJlc3VsdFRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2hhcmVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAuaGFzUmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5zaGFyZUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAuaGFzU2hhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNoYXJlQnRuMi5hY3RpdmUgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3Quc2hhcmVCdG4yLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwicGFnZTAwN1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiTGV2ZWxfV2luX1wiICsgZiArIFwiX1wiICsgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnNjcmVlbnNob3QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB3aW5kb3cuc2NyZWVuU2hvdFBpY3R1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZLmp1ZGdlTmV3TW9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnZpZGVvQnRuLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rWL6K+V55qu6IKkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcInRvdGFsTGV2ZWxUaW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBiKSAvIDFlMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudXNlU2tpbklETGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVCA9IHRoaXMuc2Vjb25kRm9ybWF0KGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC50aW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLntK/orqHnlKjml7YlZOWIhiVk56eSXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihUWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFRbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgPSBcIm5hdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5BTkRST0lEX0dPT0dMRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBID0gXCJwcm92aW5jZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCID0gdGhpcy5zaG93VGltZShVLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPID0gdGhpcy5zaG93VGltZShVLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUiA9IFwicHJvdmluY2VfXCIgKyBCICsgTyArIFwiX1wiICsgcC5yYW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGFsbGVuZ2VIdHRwLmNoYWxsZW5nZUh0dHAuaW5jclJhbmsoUiwgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KEEpLCAxKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiK5Lyg5LiA5qyh5pWw5o2uXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheUZpcnN0UGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS50b2RheUZpcnN0UGFzcywgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEYgPSBcInBlb3BsZV9cIiArIEIgKyBPICsgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5yYW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJoYWl3YWlcIiA9PSAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnJhbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEYgPSBcImNvdW50cnlQZW9wbGVfXCIgKyBCICsgTyArIFwiX1wiICsgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5yYW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjaGFsbGVuZ2VIdHRwLmNoYWxsZW5nZUh0dHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNyUmFuayhGLCAkdXNlck1hbmFnZXIuVXNlci5nZXQoQSksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiK5Lyg5LiA5qyh5pWw5o2uXCIsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSAoaiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLmluY2x1ZGVzKFwid3hcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgViA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcInBhc3NMZXZlbFwiICsgaikgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Z2FtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBWLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV90aW1lOiAxNTEzMDgwNTczXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdF9tczogMzY1MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzY29yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IEpTT04uc3RyaW5naWZ5KEgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHogPSBbcV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cud3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53eC5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLVkRhdGFMaXN0OiB6LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbV3hQbGF0Zm9ybV0g5L+d5a2Y55So5oi35pWw5o2u5oiQ5YqfOlwiLCB6KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbV3hQbGF0Zm9ybV0g5L+d5a2Y55So5oi35pWw5o2u5aSx6LSlOlwiLCB6KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuafpeeci+etlOahiOaIluaPkOekuuacieWKqeS6juW/q+mAn+mAmuWFs+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuetvuWIsOWPr+S7peaLv+WIsOearuiCpO+8jOiusOW+l+WOu+etvuWIsOWTpu+8gVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuKAnOabtOWkmueOqeazleKAnemHjOacieiuuOWkmumdnuW4uOWAvOW+l+aMkeaImOeahOeOqeazleOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWFs+WNoeavlOi+g+mavumAmuWFs+aXtu+8jOWkmuWwneivleWHoOasoeWwseS8muWPmOW+l+WuueaYk+OAglwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLID0gJHV0aWxzLlV0aWxzLnJhbmRvbU51bSgwLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0LnRpcFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnRpcFRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIua4qemmqOaPkOekuu+8mlwiICsgR1tLXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5mMjkwODZfZHJhZ29uQmFsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuRHJhZ29uQmFsbCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5EcmFnb25CYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVyArIHdpbmRvdy5mMjkwODZfZHJhZ29uQmFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmYyOTA4Nl9jb2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFggPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2luKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNvaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYICsgd2luZG93LmYyOTA4Nl9jb2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVmZmVjdE1hbmFnZXIuRWZmZWN0LnNob3dFZmZlY3QoMTAsIFkuZGljdC5jb2luSWNvbiwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlZmZlY3RNYW5hZ2VyLkVmZmVjdC5zaG93RWZmZWN0KDEsIFkuZGljdC5kcmFnb25CYWxsSWNvbiwgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUudXBkYXRlTWFwQnRuID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0IHx8IGUgPCAyIHx8IDAgIT0gblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFsyLCAodGhpcy5kaWN0Lm1hcEJ0bi5hY3RpdmUgPSAhMSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogWzQsICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LkNpdHkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAociA9IGEuc2VudCgpKS5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNvcnQgLSBlLnNvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9ICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbWVtb3J5U3RvcmFnZUNvbnN0LmRlZmF1bHQuQ3VycmVudENoYWxsZW5nZUNpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5jaXR5LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmv4DmtLvln47luILvvJpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuaWQgPT0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2l0eUlEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ2l0eUxpc3QpIHx8IFtdKS5wdXNoKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkNpdHlMaXN0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUudXBkYXRlTmV3RWxlbWVudCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5kaWN0Lm5ld0VsZW1lbnRSb290LmFjdGl2ZSA9ICExKSwgKHRoaXMuZGljdC5uZXh0QnRuLmFjdGl2ZSA9ICExKSwgWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwICE9ICgkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSkgfHwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgKHRoaXMuZGljdC5uZXdFbGVtZW50Um9vdC5hY3RpdmUgPSAhMSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5Jc0RhaWx5Q2hhbGxlbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5uZXdFbGVtZW50Um9vdC5hY3RpdmUgPSAhZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5uZXh0QnRuLmFjdGl2ZSA9ICFlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29uZmlnU3VmZml4KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID8gWzMsIDddIDogWzQsICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LkZlYXR1cmUpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG8uZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnNvcnRJRCA9PSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYSA9IGkuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5sZXZlbElEID4gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKGMgPSBpLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgLSAxID09IHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+H5ruk5ZCOXCIsIGkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+H5ruk5ZCOZGF0YVwiLCBhLCBjKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobCA9IHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGYgPSB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgIT0gYS5mZWF0dXJlSUQgJiYgY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFszLCAzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICgobCA9IG4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmID0gYS5sZXZlbElEIC0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5wcm9ncmVzc1RleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsICsgXCIvXCIgKyBmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0LnVubG9ja1Byb2dyZXNzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IGwgLyBmKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc291cmNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0dXJlL21vZGUvaWNvbl95dWFuc3VcIiArIGEuZmVhdHVyZUlELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuVGV4dHVyZTJEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbMywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5uZXdFbGVtZW50LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IG4gLSBjLmxldmVsSUQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBhLmxldmVsSUQgLSBjLmxldmVsSUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnByb2dyZXNzVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGwgKyBcIi9cIiArIGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnVubG9ja1Byb2dyZXNzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IGwgLyBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhc3NldE1hbmFnZXIuZGVmYXVsdC5nZXRSZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlc291cmNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0dXJlL21vZGUvaWNvbl95dWFuc3VcIiArIGEuZmVhdHVyZUlELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuVGV4dHVyZTJEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBzLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QubmV3RWxlbWVudC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCA9PSBmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5uZXdFbGVtZW50VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5Y2z5bCG5byA5ZCvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lm5ld0VsZW1lbnRSb290LmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5kb3dubG9hZFNwaW5lID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAodCwgbikge1xuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKGUsIHNwLlNrZWxldG9uRGF0YSwgZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbihlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0KFtudWxsLCByLCBudWxsXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUubG9hZFNwaW5lID0gZnVuY3Rpb24gKHQsIGUsIG4pIHtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IG4pIHtcbiAgICAgICAgICAgICAgICBuID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgdmFyIGM7XG4gICAgICAgICAgICAgICAgdmFyIGw7XG4gICAgICAgICAgICAgICAgdmFyIHU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBcInNwaW5lL3JvbGUvXCIgKyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcInNwaW5lL3JvbGUvXCIgKyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBcInNwaW5lL3JvbGUvXCIgKyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIHRoaXMuZG93bmxvYWRTcGluZShpLCBvLCByLCB0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHMuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGNjLmlzVmFsaWQoZS5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgoYyA9IG5ldyBzcC5Ta2VsZXRvbkRhdGEoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgoYy5za2VsZXRvbkpzb24gPSBhWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYy5hdGxhc1RleHQgPSBhWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYy50ZXh0dXJlcyA9IGFbMl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjLnRleHR1cmVOYW1lcyA9IGFbM10pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjID0gYVsxXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGwgPSBcInNoZW5nbGlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiAmJiAobCA9IFwic2hpYmFpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNGYWlsXCIsIG4sIGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgPT0gdGhpcy5hc3NldEFzc2lnbm1lbnRUeXBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZS5za2VsZXRvbkRhdGEgPSBjKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTa2luKFwiZGVmYXVsdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUuZGVmYXVsdFNraW4gPSBcImRlZmF1bHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZ2V0UnVudGltZURhdGEoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChlLmRlZmF1bHRBbmltYXRpb24gPSBsIHx8IGMuZ2V0UnVudGltZURhdGEoKS5hbmltYXRpb25zWzBdLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRBbmltYXRpb24oMCwgbCB8fCBjLmdldFJ1bnRpbWVEYXRhKCkuYW5pbWF0aW9uc1swXS5uYW1lLCBlLmxvb3ApKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzMsIDRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gcy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuc2hvd1RpbWUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgaWYgKHQgPiAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIwXCIgKyB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zZWNvbmRGb3JtYXQgPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkge1xuICAgICAgICAgICAgICAgIGUgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gbikge1xuICAgICAgICAgICAgICAgIG4gPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByID0gdCAvIDM2MDA7XG4gICAgICAgICAgICB2YXIgbyA9ICh0ICU9IDM2MDApIC8gNjA7XG4gICAgICAgICAgICB2YXIgaSA9ICh0ICU9IDYwKTtcbiAgICAgICAgICAgIHZhciBhID0gKChyID0gTWF0aC5mbG9vcihyKSksIChvID0gTWF0aC5mbG9vcihvKSkgPj0gMTAgPyBvICsgXCJcIiA6IG8pO1xuICAgICAgICAgICAgdmFyIHM7XG4gICAgICAgICAgICBpZiAoKGkgPSBNYXRoLmZsb29yKGkpKSA+PSAxMCkge1xuICAgICAgICAgICAgICAgIHMgPSBpICsgXCJcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcyA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIGkgPSAoMTAwICogaSkgLyA2MDtcbiAgICAgICAgICAgICAgICBpZiAoKGkgPSBNYXRoLmZsb29yKGkpKSA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICBzID0gaSArIFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcyA9IFwiMFwiICsgaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWluID0gTnVtYmVyKGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY29uZCA9IE51bWJlcihzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbYSwgc107XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmp1ZGdlTmV3TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSk7XG4gICAgICAgICAgICB2YXIgdCA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJVbmxvY2tUaGVtZUxpc3RcIik7XG4gICAgICAgICAgICAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiVW5sb2NrVGhlbWVNYWluTHZcIik7XG4gICAgICAgICAgICAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiVW5sb2NrVGhlbWVTdWJMdlwiKTtcbiAgICAgICAgICAgIGlmICh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuVU5MT0NLX01PREVfTElTVCkgfHwgW107XG4gICAgICAgICAgICAgICAgdmFyIG4gPSAtMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHQubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0W3JdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoLTEgPT0gZS5pbmRleE9mKG8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YeG5aSH6Kej6ZSB55qE5paw5qih5byPaWRcIiwgbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsaWNrTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9ICEwO1xuICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5YSUFPTUlfQU5EUk9JRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHhNQURVdGlscy5YTUFELnNob3dJbnRlcnN0aXRpYWxGZWVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5PUFBPX0FORFJPSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICRvUFBPQW5kcm9pZEFkVXRpbHMuT1BQT0FuZHJvaWRBZC5zaG93SW50ZXJzdGl0aWFsRmVlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uT1BQTykpIHtcbiAgICAgICAgICAgICAgICAgICAgJG9QUE9NaW5pQURVdGlscy5PUFBPTWluaUFELnNob3dJbnRlcnN0aXRpYWxGZWVkKCk7XG4gICAgICAgICAgICAgICAgICAgICRvUFBPTWluaUFEVXRpbHMuT1BQT01pbmlBRC5jbGlja0FkSnVtcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCk7XG4gICAgICAgICAgICAgICAgdmFyIGUgPVxuICAgICAgICAgICAgICAgICAgICAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUpLFxuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcIm5ld1Bhc3NcIikgfHwgITEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3UGFzc1wiLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAodCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMjJcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMubmV4dENiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLmdldChcImxldmVsTGlzdExvb3BUaW1lc1wiKTtcbiAgICAgICAgICAgICAgICAkbWVtb3J5U3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJG1lbW9yeVN0b3JhZ2VDb25zdC5kZWZhdWx0LlRoZW1lVHlwZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0Q2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUubmV4dENiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKFwiY2hhbGxlbmdlXCIpKSB7XG4gICAgICAgICAgICAgICAgJHNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZSgkc2NlbmVDb25zdC5TY2VuZUNvbnN0LkhvbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5DTElDS19ORVhUKTtcbiAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5jbGlja0dvdSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5nb3UuYWN0aXZlID0gIXRoaXMuZGljdC5nb3UuYWN0aXZlO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5jbGlja1ZpZGVvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImJ0bjAyM1wiKTtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1Jld2FyZEFkcyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoXCJpc05lZWRJbnNlcnRcIiwgITEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjaGVhdHNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKFwiaXNOZWVkSW5zZXJ0XCIsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwicmV3YXJkZV9idG4wMDVcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuS0VZKTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuS0VZLCBuICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQuZW1pdCgkZXZlbnRDb25zdC5kZWZhdWx0LktFWV9FRkZFQ1QpO1xuICAgICAgICAgICAgICAgICAgICB0Lm5leHRDYigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5jbGlja1NoYXJlMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hhcmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tTaGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmhhc1JlY29yZCkge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hhcmVSZWNvcmRDYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLliIbkuqvlvZXlsY/miJDlip/vvIFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcImRhaWx5U2hhcmVSZWNvcmRUaW1lc1wiKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwiZGFpbHlTaGFyZVJlY29yZFRpbWVzXCIsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0Q2IoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLlvZXlsY/ml7bpl7Tov4fnn63vvIFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzU2hhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaGFyZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRDYigpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsaWNrSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LkxldmVsX1JldHVybiwge1xuICAgICAgICAgICAgICAgIGx2OiAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUxfSUQpLFxuICAgICAgICAgICAgICAgIG1vZGU6ICR1c2VyTWFuYWdlci5Vc2VyLmdldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFKSxcbiAgICAgICAgICAgICAgICBxdWV1ZTogJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMKSxcbiAgICAgICAgICAgICAgICBzb3J0OiAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db25maWdTdWZmaXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5Ib21lKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tSZXN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm9uUmVzdGFydEJ0blwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuZ2V0SXNNaXN0YWtlQnlDaGFuY2UgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGUgPSAxMDAgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdmFyIG4gPSAhMTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65pWwXCIsIGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3phY3nva7mpoLnjoc6XCIgKyB0KTtcbiAgICAgICAgICAgIHJldHVybiAwID09IHQgPyBuIDogKHQgPj0gZSAmJiAobiA9ICEwKSwgbik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtqXSwgZSk7XG4gICAgfSkoJGJhc2VVSS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBWO1xuIl19