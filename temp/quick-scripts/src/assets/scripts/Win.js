"use strict";
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