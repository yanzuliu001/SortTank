
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35172NoSbZPPYid4sFKUrOS', 'Main');
// scripts/Main.js

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

var $vIVOADUtils = require("./VIVOADUtils");

var $xMADUtils = require("./XMADUtils");

var $shuShuConst = require("./ShuShuConst");

var U = cc._decorator;
var B = U.ccclass;
var E = U.property;

var O = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.clickTimes = 0;
    e.ageSpriteFrame = [];
    e.logoSpriteFrame = [];
    e.secondModeData = null;
    e.thirdModesData = [];
    e.darenModesData = [];
    e.rankList = [];
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
    this.addBtnOn("startBtn", this.clickStart, this);
    this.addBtnOn("infinitePowerBtn", this.clickInfinitePower, this);
    this.addBtnOn("hotModeBtn", this.clickHotMode, this);
    this.addBtnOn("moreModeBtn", this.clickMoreMode, this);
    this.addBtnOn("ageBtn", this.clickAge, this);
    this.addBtnOn("privacyBtn", this.clickPrivacy, this);
    this.addBtnOn("appointBtn", this.clickAppoint, this);
    this.addBtnOn("moreGameBtn", this.clickMoreGame, this);
    this.addBtnOn("levelSelectBtn", this.clickLevelSelect, this);
    this.addBtnOn("createBtn", this.clickCreateBtn, this);
    this.addBtnOn("ageBtn", this.clickAgeBtn, this);
    this.addBtnOn("followBtn", this.clickFollowBtn, this);
    this.addBtnOn("secondBtn", this.clickSecondMode, this);
    this.addBtnOn("3Btn", this.click3Mode, this);
    this.addBtnOn("4Btn", this.click4Mode, this);
    this.addBtnOn("thirdBtn", this.clickThirdMode, this);
    this.addBtnOn("beeBtn", this.clickBeeBtn, this);
    this.addBtnOn("modeJumpBtn", this.modeJumpBtn, this);
    this.addBtnOn("closeDaren", this.closeDaren, this);
    this.addBtnOn("darenJump", this.darenJump, this);
    this.addBtnOn("unlockAllModeBtn", this.unlockAllModeBtn, this);
    this.addBtnOn("orderBtn", this.orderBtn, this);
    this.dict.cheats.on(cc.Node.EventType.TOUCH_START, this.clickCheats, this);
    this.dict.clickBg.on(cc.Node.EventType.TOUCH_START, function () {
      if (e.isShow) {
        e.clickThirdMode();
      }
    }, this);

    if (this.dict.clickBg._touchListener) {
      this.dict.clickBg._touchListener.setSwallowTouches(!1);
    }

    this.initPlatformUI();
    this.initView();

    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showInsert_must();
    }

    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.page, {
      id: "001"
    });
  };

  e.prototype.onEnable = function () {
    $eventManager.Event.on($eventConst["default"].UPDATE_INFINITE_POWER, this.updateInfinitePower, this);
    $eventManager.Event.on($eventConst["default"].updateUnlockAllMode, this.updateUnlockAllMode, this);
    $eventManager.Event.on($eventConst["default"].ENTER_ID, this.sucEnterByMode, this);

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
    $platformManager.Platform.hideCustomAd_1();
    $platformManager.Platform.hideCustomAd_2();
  };

  e.prototype.updateInfinitePower = function (t) {
    this.dict.infinitePowerBtn.active = !t;
  };

  e.prototype.updateUnlockAllMode = function () {
    this.dict.unlockAllModeBtn.active = !1;
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
      var f;
      var d;
      var p;
      var w;

      var _;

      var k;
      var M;
      var P;
      var T;
      var A;
      var I;
      var D;
      return __generator(this, function (s) {
        switch (s.label) {
          case 0:
            t = $userManager.User.get($userConst.UserData.LEVEL_LIST) || {};
            return [4, $configManager.Config.get($configConst.ConfigConst.THEME)];

          case 1:
            for (e = s.sent(), $userManager.User.setTempData($userConst.TempData.CURRENT_ALL_MODE, e), P = 0; P < e.length; P++) {
              o = e[P].theme;
              t[o] || (t[o] = 1);

              if (2 == e[P].id) {
                this.secondModeData = e[P];
              } else {
                e[P].id >= 3 && this.thirdModesData.push(e[P]);
              }

              this.darenModesData.push(e[P]);
            }

            for ($userManager.User.set($userConst.UserData.LEVEL_LIST, t), n = $userManager.User.get($userConst.UserData.ALREADY_PLAY) || {}, P = 0; P < e.length; P++) {
              o = e[P].theme;
              n[o] || (n[o] = []);
            }

            for ($userManager.User.set($userConst.UserData.ALREADY_PLAY, n), r = $userManager.User.get($userConst.UserData.ALREADY_UNLOCK) || {}, P = 0; P < e.length; P++) {
              o = e[P].theme;
              r[o] || (r[o] = [1]);
            }

            $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, r);
            i = $userManager.User.get($userConst.UserData.UNLOCK_ALL_MODE_VIDEO_TIMES) || 0;
            a = $userManager.User.get($userConst.UserData.UNLOCK_MODE_LIST) || [];

            if (2 == i || a.length >= e.length) {
              this.dict.unlockAllModeBtn.active = !1;
            }

            $userManager.User.setTempData($userConst.TempData.POWER_TYPE, 1);

            if ($userManager.User.get($userConst.UserData.FIRST_DAY_DATE)) {
              console.log("老用户", $platformManager.Platform.getConfig().flag.indexOf("tt"));

              if (-1 != $platformManager.Platform.getConfig().flag.indexOf("tt") && (d = $userManager.User.get($userConst.UserData.IS_COMPATIBLE_233) || 0, console.log("是否已经兼容", d), !d)) {
                for (k in p = $userManager.User.get($userConst.UserData.LEVEL_LIST), console.log("levelList", JSON.stringify(p)), w = {}, _ = {}, p) {
                  M = p[k];
                  w[k] = [];
                  _[k] = [];

                  for (P = 1; P <= M - 1 && !(w[k].length >= 580); P++) {
                    w[k].push(P);
                  }

                  for (P = 1; P <= M && !(w[k].length >= 580); P++) {
                    _[k].push(P);
                  }
                }

                console.log("通关列表", JSON.stringify(w));
                console.log("解锁列表", JSON.stringify(_));
                $userManager.User.set($userConst.UserData.IS_COMPATIBLE_233, 1);
                $userManager.User.set($userConst.UserData.ALREADY_PLAY, w);
                $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, _);
              }
            } else {
              for (k in $userManager.User.set($userConst.UserData.FIRST_DAY_DATE, new Date().getDate()), c = $userManager.User.get($userConst.UserData.LEVEL_LIST), f = {}, _ = {}, c) {
                f[k] = [], _[k] = [1];
              }

              $userManager.User.set($userConst.UserData.IS_COMPATIBLE_233, 1);
              $userManager.User.set($userConst.UserData.ALREADY_PLAY, f);
              $userManager.User.set($userConst.UserData.ALREADY_UNLOCK, _);
            }

            T = $bmsManager.BMS.getKey("GM");
            this.dict.cheats.active = !!T;
            A = $bmsManager.BMS.getKey("ugc");
            this.dict.createBtn.active = !!A;
            I = $bmsManager.BMS.getKey("AllThemeUnlock");
            this.dict.unlockAllModeBtn.active = !!I;
            D = $bmsManager.BMS.getKey("WuxianTiLi");
            this.dict.infinitePowerBtn.active = 0 != D;

            if ($userManager.User.get($userConst.UserData.INF_POWER_VIDEO_TIMES) >= 3) {
              this.updateInfinitePower(!0);
            }

            $audioManager.Audio.playMusic($audioConst.AudioConst.BGM_MAIN);
            cc.game.emit("gamelog", "page001");
            this.dict.version.getComponent(cc.Label).string = $platformManager.Platform.getConfig().version;

            if (window.wrongful) {
              $popupManager["default"].show($popupConst.PopupConst.STOP);
            }

            this.judgeMainMode(0);
            this.updateSkin();
            return [2];
        }
      });
    });
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

        console.log("list", n);
        t.rankList = n;
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
        });
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

  e.prototype.updateSkin = function () {
    var t = {
      0: [0],
      1: [0],
      2: [0],
      3: [0],
      4: [0],
      5: [0]
    };

    if ($platformManager.Platform.getConfig().appID.includes("wxb5f506d7c427c834")) {
      t = {
        0: [0],
        1: [2],
        2: [3],
        3: [0],
        4: [0],
        5: [0]
      };
      $userManager.User.set($userConst.UserData.skinList, t);
    }

    var e = $userManager.User.get($userConst.UserData.skinList) || t;
    $userManager.User.set($userConst.UserData.skinList, e);
    var n = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };

    if ($platformManager.Platform.getConfig().appID.includes("wxb5f506d7c427c834")) {
      n = {
        0: 0,
        1: 2,
        2: 3,
        3: 0,
        4: 0,
        5: 0
      };
      $userManager.User.set($userConst.UserData.useSkinIDList, n);
    }

    var r = $userManager.User.get($userConst.UserData.useSkinIDList) || n;
    $userManager.User.set($userConst.UserData.useSkinIDList, r);
    var o = $userManager.User.get($userConst.UserData.getLockSkinList) || {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: []
    };
    $userManager.User.set($userConst.UserData.getLockSkinList, o);
  };

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

          a.sort(function () {
            return 0.5 - Math.random();
          });
          l.sort(function () {
            return 0.5 - Math.random();
          });
          u.sort(function () {
            return 0.5 - Math.random();
          });
          f.sort(function () {
            return 0.5 - Math.random();
          });
          h.sort(function () {
            return 0.5 - Math.random();
          });
          p.sort(function () {
            return 0.5 - Math.random();
          });
          g.sort(function () {
            return 0.5 - Math.random();
          });
          v.sort(function () {
            return 0.5 - Math.random();
          });
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

        console.log("打螺丝", s, c);
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
            if (e.theme == t) {
              n.handleModeByID(e.theme);
            }
          });
        });
      }
    }
  };

  e.prototype.handleModeByID = function (t) {
    var e = [];
    var n = [];
    var r = $userManager.User.get("mode" + t + "LevelList_stage1ID") || [];
    var o = $userManager.User.get("mode" + t + "LevelList_stage2ID") || [];
    $configManager.Config.get($configConst.ConfigConst.THEME + t).then(function (i) {
      if ($platformManager.Platform.is($platformConst.EPlatform.WEB)) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a];
          e.push(s.stage1ID);
          n.push(s.stage2ID);
        }

        $userManager.User.set("mode" + t + "LevelList_stage1ID", e);
        $userManager.User.set("mode" + t + "LevelList_stage2ID", n);
      } else if (i.length > r.length && 0 != r.length) {
        for (a = 0; a < i.length; a++) {
          s = i[a];
          a > r.length - 1 && (e.push(s.stage1ID), n.push(s.stage2ID));
        }

        e.sort(function () {
          return 0.5 - Math.random();
        });
        n.sort(function () {
          return 0.5 - Math.random();
        });
        e = r.concat(e);
        n = o.concat(n);
        $userManager.User.set("mode" + t + "LevelList_stage1ID", e);
        $userManager.User.set("mode" + t + "LevelList_stage2ID", n);
      } else if (0 == r.length) {
        for (a = 0; a < i.length; a++) {
          s = i[a];
          e.push(s.stage1ID);
          n.push(s.stage2ID);
        }

        e.sort(function () {
          return 0.5 - Math.random();
        });
        n.sort(function () {
          return 0.5 - Math.random();
        });
        $userManager.User.set("mode" + t + "LevelList_stage1ID", e);
        $userManager.User.set("mode" + t + "LevelList_stage2ID", n);
      } else {
        console.log("老用户");
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
      this.dict.topBar.getComponent(cc.Widget).top = 70;
      this.dict.topBar.getComponent(cc.Widget).updateAlignment();
    }

    if (t.hasAgeTip) {
      this.dict.ageBtn.active = !0;
      var e = $platformManager.Platform.getConfig().ageTipType;

      if (e == $platformConst.AgeTipType.AGE_12) {
        this.dict.ageBtn.getComponent(cc.Sprite).spriteFrame = this.ageSpriteFrame[e];
      }
    }

    this.dict.privacyBtn.active = !1;

    if (t.privacyPolicyType != $platformConst.PrivacyPolicyType.NO) {
      this.dict.privacyBtn.active = !0;
    }

    this.dict.moreGameBtn.active = !1;

    if (t.hasMoreGame) {
      this.dict.moreGameBtn.active = !0;
    }

    this.dict.customerService.active = !1;

    if (t.hasCustomerService) {
      this.dict.customerService.active = !0;
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.ANDROID_GOOGLE)) {
      this.dict.logo.getComponent(cc.Sprite).spriteFrame = this.logoSpriteFrame[t.logoType];
      "en" == $languageManager["default"].instance.lan && (this.dict.logo.getComponent(cc.Sprite).spriteFrame = this.logoSpriteFrame[$platformConst.LogoType.PlayHammerEN], this.dict.logo.scale = 1);
      "ja" == $languageManager["default"].instance.lan && (this.dict.logo.getComponent(cc.Sprite).spriteFrame = this.logoSpriteFrame[$platformConst.LogoType.PlayHammerJP], this.dict.logo.scale = 1);
      "zh" == $languageManager["default"].instance.lan && (this.dict.logo.getComponent(cc.Sprite).spriteFrame = this.logoSpriteFrame[$platformConst.LogoType.Hammer], this.dict.logo.scale = 0.6);
      "tc" == $languageManager["default"].instance.lan && (this.dict.logo.getComponent(cc.Sprite).spriteFrame = this.logoSpriteFrame[$platformConst.LogoType.PlayHammerTC], this.dict.logo.scale = 1);
      t.logoType == $platformConst.LogoType.DifficultChallenge && (this.dict.logo.scale = 1);
      t.logoType == $platformConst.LogoType.BigCompetition && (this.dict.logo.scale = 1);
    } else {
      this.dict.logo.getComponent(cc.Sprite).spriteFrame = this.logoSpriteFrame[t.logoType];
    }

    if ($platformManager.Platform.is($platformConst.EPlatform.OHAYOO_ANDROID)) {
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

    this.dict.followBtn.active = !1;
    var o = $bmsManager.BMS.getKey("isAuditing");
    var i = $bmsManager.BMS.getKey("PatternsState");
    this.dict.overlapBanner.active = !1;
    this.dict.screwBanner.active = !0;
    this.dict.startBtnText.getComponent(cc.Label).string = "开始游戏";

    if (o) {
      if (i) {
        this.dict.secondBtn.active = !0, this.dict["3Btn"].active = !0;
      } else {
        this.dict.secondBtn.active = !1, this.dict["3Btn"].active = !1;
      }
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

      if ($bmsManager.BMS.getKey("isAuditing")) {
        var t = 1;

        if (this.dict.screwBanner.active) {
          t = 0;
        }

        if (0 == t) {
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
            id: "001"
          });
        } else {
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
            id: "002"
          });
        }

        cc.game.emit("gamelog", "btn001");
        $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, t);
        var e = $userManager.User.get($userConst.UserData.LEVEL_LIST);
        $configUtils.ConfigUtils.setNextModeID();
        var n = 1;
        $configUtils.ConfigUtils.getDataByID(t, function (r) {
          console.log("res - ", r);
          n = r.amount;

          if (e[t] > n) {
            $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, 1);
          } else {
            $userManager.User.setTempData($userConst.TempData.CURRENT_LEVEL, e[t]);
          }

          $sceneManager["default"].loadScene($sceneConst.SceneConst.GAME);
        });
      } else {
        $sceneManager["default"].loadScene($sceneConst.SceneConst.Home);
      }
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

  e.prototype.clickFollowBtn = function () {
    var t = this;
    $platformManager.Platform.follow(function (e) {
      if (0 == e) {
        console.log("关注成功");

        if ($userManager.User.get($userConst.UserData.isFollow)) {
          return;
        }

        t.dict.followBtn.getChildByName("keyIcon").active = !1;
        t.dict.followBtn.getChildByName("keyAmount").active = !1;
        var n = $userManager.User.get($userConst.UserData.KEY);
        $userManager.User.set($userConst.UserData.KEY, n + 1);
        $eventManager.Event.emit($eventConst["default"].KEY_EFFECT);
        $userManager.User.set($userConst.UserData.isFollow, 1);
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
    this.enterByMode(3);
  };

  e.prototype.click3Mode = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "003"
    });
    cc.game.emit("gamelog", "modebtn_5");
    this.enterByMode(5);
  };

  e.prototype.click4Mode = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "004"
    });
    cc.game.emit("gamelog", "modebtn_3");
    this.enterByMode(3);
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

  __decorate([E([cc.SpriteFrame])], e.prototype, "ageSpriteFrame", void 0);

  __decorate([E([cc.SpriteFrame])], e.prototype, "logoSpriteFrame", void 0);

  return __decorate([B], e);
}($baseUI["default"]);

exports["default"] = O;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01haW4uanMiXSwibmFtZXMiOlsiciIsIiRiYXNlVUkiLCJyZXF1aXJlIiwiJGF1ZGlvQ29uc3QiLCIkY29uZmlnQ29uc3QiLCIkZXZlbnRDb25zdCIsIiRwbGF0Zm9ybUNvbnN0IiwiJHBvcHVwQ29uc3QiLCIkc2NlbmVDb25zdCIsIiR1c2VyQ29uc3QiLCIkYXVkaW9NYW5hZ2VyIiwiJGJtc01hbmFnZXIiLCIkY29uZmlnTWFuYWdlciIsIiRldmVudE1hbmFnZXIiLCIkbGFuZ3VhZ2VNYW5hZ2VyIiwiJHBsYXRmb3JtTWFuYWdlciIsIiRwb3B1cE1hbmFnZXIiLCIkc2NlbmVNYW5hZ2VyIiwiJHVzZXJNYW5hZ2VyIiwiJGNoYWxsZW5nZUh0dHAiLCIkY29uZmlnVXRpbHMiLCIkb1BQT0FuZHJvaWRBZFV0aWxzIiwiJHZJVk9BRFV0aWxzIiwiJHhNQURVdGlscyIsIiRzaHVTaHVDb25zdCIsIlUiLCJjYyIsIl9kZWNvcmF0b3IiLCJCIiwiY2NjbGFzcyIsIkUiLCJwcm9wZXJ0eSIsIk8iLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiY2xpY2tUaW1lcyIsImFnZVNwcml0ZUZyYW1lIiwibG9nb1Nwcml0ZUZyYW1lIiwic2Vjb25kTW9kZURhdGEiLCJ0aGlyZE1vZGVzRGF0YSIsImRhcmVuTW9kZXNEYXRhIiwicmFua0xpc3QiLCJpc0xvYWRpbmdTY2VuZSIsImlzTG9hZFByaXZhY3kiLCJpc0VudGVyVWdjIiwiaXNBbmltIiwiaXNTaG93IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImFkZEJ0bk9uIiwiY2xpY2tTZXQiLCJjbGlja1N0YXJ0IiwiY2xpY2tJbmZpbml0ZVBvd2VyIiwiY2xpY2tIb3RNb2RlIiwiY2xpY2tNb3JlTW9kZSIsImNsaWNrQWdlIiwiY2xpY2tQcml2YWN5IiwiY2xpY2tBcHBvaW50IiwiY2xpY2tNb3JlR2FtZSIsImNsaWNrTGV2ZWxTZWxlY3QiLCJjbGlja0NyZWF0ZUJ0biIsImNsaWNrQWdlQnRuIiwiY2xpY2tGb2xsb3dCdG4iLCJjbGlja1NlY29uZE1vZGUiLCJjbGljazNNb2RlIiwiY2xpY2s0TW9kZSIsImNsaWNrVGhpcmRNb2RlIiwiY2xpY2tCZWVCdG4iLCJtb2RlSnVtcEJ0biIsImNsb3NlRGFyZW4iLCJkYXJlbkp1bXAiLCJ1bmxvY2tBbGxNb2RlQnRuIiwib3JkZXJCdG4iLCJkaWN0IiwiY2hlYXRzIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJjbGlja0NoZWF0cyIsImNsaWNrQmciLCJfdG91Y2hMaXN0ZW5lciIsInNldFN3YWxsb3dUb3VjaGVzIiwiaW5pdFBsYXRmb3JtVUkiLCJpbml0VmlldyIsIlBsYXRmb3JtIiwiaXMiLCJFUGxhdGZvcm0iLCJYSUFPTUlfQU5EUk9JRCIsIlhNQUQiLCJzaG93SW5zZXJ0X211c3QiLCJnYW1lIiwiZW1pdCIsIlNodVNodUNvbnN0IiwicGFnZSIsImlkIiwib25FbmFibGUiLCJFdmVudCIsIlVQREFURV9JTkZJTklURV9QT1dFUiIsInVwZGF0ZUluZmluaXRlUG93ZXIiLCJ1cGRhdGVVbmxvY2tBbGxNb2RlIiwiRU5URVJfSUQiLCJzdWNFbnRlckJ5TW9kZSIsInNob3dCYW5uZXJGZWVkIiwiT1BQT19BTkRST0lEIiwiT1BQT0FuZHJvaWRBZCIsIlZJVk8iLCJWSVZPQUQiLCJzaG93Q3VzdG9tQWRfMSIsIm9uRGlzYWJsZSIsIm9mZiIsImhpZGVDdXN0b21BZF8xIiwiaGlkZUN1c3RvbUFkXzIiLCJpbmZpbml0ZVBvd2VyQnRuIiwiYWN0aXZlIiwiX19hd2FpdGVyIiwibiIsIm8iLCJpIiwiYSIsImMiLCJmIiwiZCIsInAiLCJ3IiwiXyIsImsiLCJNIiwiUCIsIlQiLCJBIiwiSSIsIkQiLCJfX2dlbmVyYXRvciIsInMiLCJsYWJlbCIsIlVzZXIiLCJnZXQiLCJVc2VyRGF0YSIsIkxFVkVMX0xJU1QiLCJDb25maWciLCJDb25maWdDb25zdCIsIlRIRU1FIiwic2VudCIsInNldFRlbXBEYXRhIiwiVGVtcERhdGEiLCJDVVJSRU5UX0FMTF9NT0RFIiwibGVuZ3RoIiwidGhlbWUiLCJwdXNoIiwic2V0IiwiQUxSRUFEWV9QTEFZIiwiQUxSRUFEWV9VTkxPQ0siLCJVTkxPQ0tfQUxMX01PREVfVklERU9fVElNRVMiLCJVTkxPQ0tfTU9ERV9MSVNUIiwiUE9XRVJfVFlQRSIsIkZJUlNUX0RBWV9EQVRFIiwiY29uc29sZSIsImxvZyIsImdldENvbmZpZyIsImZsYWciLCJpbmRleE9mIiwiSVNfQ09NUEFUSUJMRV8yMzMiLCJKU09OIiwic3RyaW5naWZ5IiwiRGF0ZSIsImdldERhdGUiLCJCTVMiLCJnZXRLZXkiLCJjcmVhdGVCdG4iLCJJTkZfUE9XRVJfVklERU9fVElNRVMiLCJBdWRpbyIsInBsYXlNdXNpYyIsIkF1ZGlvQ29uc3QiLCJCR01fTUFJTiIsInZlcnNpb24iLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIndpbmRvdyIsIndyb25nZnVsIiwic2hvdyIsIlBvcHVwQ29uc3QiLCJTVE9QIiwianVkZ2VNYWluTW9kZSIsInVwZGF0ZVNraW4iLCJnZXRSYW5rIiwic2hvd1RpbWUiLCJnZXRNb250aCIsInJhbmsiLCJjaGFsbGVuZ2VIdHRwIiwidGhlbiIsInRvdGFsIiwibGlzdCIsInByb3ZpbmNlIiwic2NvcmUiLCJSYW5rIiwiUmFua0hXIiwiaW5jclJhbmsiLCJzb3J0IiwiYXBwSUQiLCJpbmNsdWRlcyIsInNraW5MaXN0IiwidXNlU2tpbklETGlzdCIsImdldExvY2tTa2luTGlzdCIsIm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlEIiwibW9kZTBMZXZlbExpc3Rfc3RhZ2UySUQiLCJtb2RlMUxldmVsTGlzdF9zdGFnZTFJRCIsIm1vZGUxTGV2ZWxMaXN0X3N0YWdlMklEIiwibW9kZTJMZXZlbExpc3Rfc3RhZ2UxSUQiLCJtb2RlMkxldmVsTGlzdF9zdGFnZTJJRCIsImwiLCJjb25maWdTdWZmaXgiLCJXRUIiLCJzdGFnZTFJRCIsInN0YWdlMklEIiwiTWF0aCIsInJhbmRvbSIsImNvbmNhdCIsInUiLCJoIiwiZyIsInYiLCJmb3JFYWNoIiwiaGFuZGxlTW9kZUJ5SUQiLCJ1cGRhdGVNb2RlVmlldyIsInNlY29uZEJ0biIsImNoaWxkcmVuIiwidGhlbWVOYW1lIiwibW9yZU1vZGVCZyIsIm5hbWUiLCJwYXJlbnQiLCJCdXR0b24iLCJhZGRDb21wb25lbnQiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJUT1VDSF9FTkQiLCJlbnRlckJ5TW9kZSIsImRhcmVuTW9kZXMiLCJlbnRlckJ5TW9kZTIiLCJmaXRVSVR5cGUiLCJGaXRVSVR5cGUiLCJUVCIsIktTIiwidG9wQmFyIiwiV2lkZ2V0IiwidG9wIiwidXBkYXRlQWxpZ25tZW50IiwiaGFzQWdlVGlwIiwiYWdlQnRuIiwiYWdlVGlwVHlwZSIsIkFnZVRpcFR5cGUiLCJBR0VfMTIiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsInByaXZhY3lCdG4iLCJwcml2YWN5UG9saWN5VHlwZSIsIlByaXZhY3lQb2xpY3lUeXBlIiwiTk8iLCJtb3JlR2FtZUJ0biIsImhhc01vcmVHYW1lIiwiY3VzdG9tZXJTZXJ2aWNlIiwiaGFzQ3VzdG9tZXJTZXJ2aWNlIiwiQU5EUk9JRF9HT09HTEUiLCJsb2dvIiwibG9nb1R5cGUiLCJpbnN0YW5jZSIsImxhbiIsIkxvZ29UeXBlIiwiUGxheUhhbW1lckVOIiwic2NhbGUiLCJQbGF5SGFtbWVySlAiLCJIYW1tZXIiLCJQbGF5SGFtbWVyVEMiLCJEaWZmaWN1bHRDaGFsbGVuZ2UiLCJCaWdDb21wZXRpdGlvbiIsIk9IQVlPT19BTkRST0lEIiwiUVEiLCJhcHBvaW50QnRuIiwiSFciLCJ4IiwiV1giLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0Iiwic2hvd0Jsb2NrQWRzIiwibGVmdCIsImhpZGVDYiIsImhpZGVCbG9ja0FkcyIsInNldFRpbWVvdXQiLCJNSU5JX0dBTUVfWE0iLCJmb2xsb3dCdG4iLCJvdmVybGFwQmFubmVyIiwic2NyZXdCYW5uZXIiLCJzdGFydEJ0blRleHQiLCJpc0RPVVlJTiIsInR0IiwiYXBwTmFtZSIsIlNFVCIsImJ0biIsIkNVUlJFTlRfTU9ERSIsIkNvbmZpZ1V0aWxzIiwic2V0TmV4dE1vZGVJRCIsImdldERhdGFCeUlEIiwiYW1vdW50IiwiQ1VSUkVOVF9MRVZFTCIsImxvYWRTY2VuZSIsIlNjZW5lQ29uc3QiLCJHQU1FIiwiSG9tZSIsIklORklOSVRFX1BPV0VSIiwiTU9ERV9TRUxFQ1QiLCJDSEVBVFMiLCJBR0VfVElQIiwiTUlOSV9HQU1FIiwiTUlOSV9HQU1FX1ZJVk8iLCJyZXNvdXJjZXMiLCJsb2FkIiwiZXJyb3IiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsIm9wZW4iLCJOQVRJVkUiLCJzaG93UHJpdmFjeVBvbGljeSIsIm9wZW5Vc2VyUGFuZWxIYW5kbGUiLCJzaG93TW9yZUdhbWUiLCJMRVZFTF9TRUxFQ1QiLCJpc1VubG9ja1VnYyIsIlVHQyIsIlVOTE9DS19VR0MiLCJmb2xsb3ciLCJpc0ZvbGxvdyIsImdldENoaWxkQnlOYW1lIiwiS0VZIiwiS0VZX0VGRkVDVCIsImNsaWNrTG92ZURvZyIsImNsaWNrRG9nU3RvbmUiLCJvcGFjaXR5IiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiYXJyb3ciLCJhbmdsZSIsIkJFRSIsIlVOTE9DS19BTExfTU9ERSIsIm9yZGVySUQiLCJFZGl0Qm94IiwiaXNJbnROdW0iLCJOdW1iZXIiLCJDVVJSRU5UX01PREVfVU5MT0NLX0lEIiwiTU9ERV9VTkxPQ0siLCJtb2RlSUQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJfX2RlY29yYXRlIiwiU3ByaXRlRnJhbWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElB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LENBQUM0SSxRQUFYLENBQW9CbUssYUFBbEQsRUFBaUUsQ0FBakU7UUFDSCxDQUZELE1BRU87VUFDSHRTLFlBQVksQ0FBQzBILElBQWIsQ0FBa0JRLFdBQWxCLENBQThCM0ksVUFBVSxDQUFDNEksUUFBWCxDQUFvQm1LLGFBQWxELEVBQWlFdFIsQ0FBQyxDQUFDRCxDQUFELENBQWxFO1FBQ0g7O1FBQ0RoQixhQUFhLFdBQWIsQ0FBc0J3UyxTQUF0QixDQUFnQ2pULFdBQVcsQ0FBQ2tULFVBQVosQ0FBdUJDLElBQXZEO01BQ0gsQ0FSRDtJQVNIO0VBQ0osQ0FqQkQ7O0VBa0JBK0MsVUFBVSxDQUFDLENBQUM1VSxDQUFDLENBQUMsQ0FBQ0osRUFBRSxDQUFDaVYsV0FBSixDQUFELENBQUYsQ0FBRCxFQUF3QnpVLENBQUMsQ0FBQ2dCLFNBQTFCLEVBQXFDLGdCQUFyQyxFQUF1RCxLQUFLLENBQTVELENBQVY7O0VBQ0F3VCxVQUFVLENBQUMsQ0FBQzVVLENBQUMsQ0FBQyxDQUFDSixFQUFFLENBQUNpVixXQUFKLENBQUQsQ0FBRixDQUFELEVBQXdCelUsQ0FBQyxDQUFDZ0IsU0FBMUIsRUFBcUMsaUJBQXJDLEVBQXdELEtBQUssQ0FBN0QsQ0FBVjs7RUFDQSxPQUFPd1QsVUFBVSxDQUFDLENBQUM5VSxDQUFELENBQUQsRUFBTU0sQ0FBTixDQUFqQjtBQUNILENBcGhDTyxDQW9oQ0xqQyxPQUFPLFdBcGhDRixDQUFSOztBQXFoQ0EyVyxPQUFPLFdBQVAsR0FBa0I1VSxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgJGJhc2VVSSA9IHJlcXVpcmUoXCIuL0Jhc2VVSVwiKTtcbnZhciAkYXVkaW9Db25zdCA9IHJlcXVpcmUoXCIuL0F1ZGlvQ29uc3RcIik7XG52YXIgJGNvbmZpZ0NvbnN0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29uc3RcIik7XG52YXIgJGV2ZW50Q29uc3QgPSByZXF1aXJlKFwiLi9FdmVudENvbnN0XCIpO1xudmFyICRwbGF0Zm9ybUNvbnN0ID0gcmVxdWlyZShcIi4vUGxhdGZvcm1Db25zdFwiKTtcbnZhciAkcG9wdXBDb25zdCA9IHJlcXVpcmUoXCIuL1BvcHVwQ29uc3RcIik7XG52YXIgJHNjZW5lQ29uc3QgPSByZXF1aXJlKFwiLi9TY2VuZUNvbnN0XCIpO1xudmFyICR1c2VyQ29uc3QgPSByZXF1aXJlKFwiLi9Vc2VyQ29uc3RcIik7XG52YXIgJGF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCIuL0F1ZGlvTWFuYWdlclwiKTtcbnZhciAkYm1zTWFuYWdlciA9IHJlcXVpcmUoXCIuL0Jtc01hbmFnZXJcIik7XG52YXIgJGNvbmZpZ01hbmFnZXIgPSByZXF1aXJlKFwiLi9Db25maWdNYW5hZ2VyXCIpO1xudmFyICRldmVudE1hbmFnZXIgPSByZXF1aXJlKFwiLi9FdmVudE1hbmFnZXJcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHNjZW5lTWFuYWdlciA9IHJlcXVpcmUoXCIuL1NjZW5lTWFuYWdlclwiKTtcbnZhciAkdXNlck1hbmFnZXIgPSByZXF1aXJlKFwiLi9Vc2VyTWFuYWdlclwiKTtcbnZhciAkY2hhbGxlbmdlSHR0cCA9IHJlcXVpcmUoXCIuL0NoYWxsZW5nZUh0dHBcIik7XG52YXIgJGNvbmZpZ1V0aWxzID0gcmVxdWlyZShcIi4vQ29uZmlnVXRpbHNcIik7XG52YXIgJG9QUE9BbmRyb2lkQWRVdGlscyA9IHJlcXVpcmUoXCIuL09QUE9BbmRyb2lkQWRVdGlsc1wiKTtcbnZhciAkdklWT0FEVXRpbHMgPSByZXF1aXJlKFwiLi9WSVZPQURVdGlsc1wiKTtcbnZhciAkeE1BRFV0aWxzID0gcmVxdWlyZShcIi4vWE1BRFV0aWxzXCIpO1xudmFyICRzaHVTaHVDb25zdCA9IHJlcXVpcmUoXCIuL1NodVNodUNvbnN0XCIpO1xudmFyIFUgPSBjYy5fZGVjb3JhdG9yO1xudmFyIEIgPSBVLmNjY2xhc3M7XG52YXIgRSA9IFUucHJvcGVydHk7XG52YXIgTyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmNsaWNrVGltZXMgPSAwO1xuICAgICAgICBlLmFnZVNwcml0ZUZyYW1lID0gW107XG4gICAgICAgIGUubG9nb1Nwcml0ZUZyYW1lID0gW107XG4gICAgICAgIGUuc2Vjb25kTW9kZURhdGEgPSBudWxsO1xuICAgICAgICBlLnRoaXJkTW9kZXNEYXRhID0gW107XG4gICAgICAgIGUuZGFyZW5Nb2Rlc0RhdGEgPSBbXTtcbiAgICAgICAgZS5yYW5rTGlzdCA9IFtdO1xuICAgICAgICBlLmlzTG9hZGluZ1NjZW5lID0gITE7XG4gICAgICAgIGUuaXNMb2FkUHJpdmFjeSA9ICExO1xuICAgICAgICBlLmlzRW50ZXJVZ2MgPSAhMTtcbiAgICAgICAgZS5pc0FuaW0gPSAhMTtcbiAgICAgICAgZS5pc1Nob3cgPSAhMTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzZXRCdG5cIiwgdGhpcy5jbGlja1NldCwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzdGFydEJ0blwiLCB0aGlzLmNsaWNrU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiaW5maW5pdGVQb3dlckJ0blwiLCB0aGlzLmNsaWNrSW5maW5pdGVQb3dlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJob3RNb2RlQnRuXCIsIHRoaXMuY2xpY2tIb3RNb2RlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcIm1vcmVNb2RlQnRuXCIsIHRoaXMuY2xpY2tNb3JlTW9kZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJhZ2VCdG5cIiwgdGhpcy5jbGlja0FnZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJwcml2YWN5QnRuXCIsIHRoaXMuY2xpY2tQcml2YWN5LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImFwcG9pbnRCdG5cIiwgdGhpcy5jbGlja0FwcG9pbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwibW9yZUdhbWVCdG5cIiwgdGhpcy5jbGlja01vcmVHYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImxldmVsU2VsZWN0QnRuXCIsIHRoaXMuY2xpY2tMZXZlbFNlbGVjdCwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJjcmVhdGVCdG5cIiwgdGhpcy5jbGlja0NyZWF0ZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJhZ2VCdG5cIiwgdGhpcy5jbGlja0FnZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJmb2xsb3dCdG5cIiwgdGhpcy5jbGlja0ZvbGxvd0J0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJzZWNvbmRCdG5cIiwgdGhpcy5jbGlja1NlY29uZE1vZGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiM0J0blwiLCB0aGlzLmNsaWNrM01vZGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiNEJ0blwiLCB0aGlzLmNsaWNrNE1vZGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwidGhpcmRCdG5cIiwgdGhpcy5jbGlja1RoaXJkTW9kZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJiZWVCdG5cIiwgdGhpcy5jbGlja0JlZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJtb2RlSnVtcEJ0blwiLCB0aGlzLm1vZGVKdW1wQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImNsb3NlRGFyZW5cIiwgdGhpcy5jbG9zZURhcmVuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRCdG5PbihcImRhcmVuSnVtcFwiLCB0aGlzLmRhcmVuSnVtcCwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJ1bmxvY2tBbGxNb2RlQnRuXCIsIHRoaXMudW5sb2NrQWxsTW9kZUJ0biwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQnRuT24oXCJvcmRlckJ0blwiLCB0aGlzLm9yZGVyQnRuLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kaWN0LmNoZWF0cy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5jbGlja0NoZWF0cywgdGhpcyk7XG4gICAgICAgIHRoaXMuZGljdC5jbGlja0JnLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuaXNTaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGUuY2xpY2tUaGlyZE1vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5kaWN0LmNsaWNrQmcuX3RvdWNoTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5jbGlja0JnLl90b3VjaExpc3RlbmVyLnNldFN3YWxsb3dUb3VjaGVzKCExKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRQbGF0Zm9ybVVJKCk7XG4gICAgICAgIHRoaXMuaW5pdFZpZXcoKTtcbiAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLlhJQU9NSV9BTkRST0lEKSkge1xuICAgICAgICAgICAgJHhNQURVdGlscy5YTUFELnNob3dJbnNlcnRfbXVzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LnBhZ2UsIHtcbiAgICAgICAgICAgIGlkOiBcIjAwMVwiXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25FbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC5VUERBVEVfSU5GSU5JVEVfUE9XRVIsIHRoaXMudXBkYXRlSW5maW5pdGVQb3dlciwgdGhpcyk7XG4gICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC51cGRhdGVVbmxvY2tBbGxNb2RlLCB0aGlzLnVwZGF0ZVVubG9ja0FsbE1vZGUsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9uKCRldmVudENvbnN0LmRlZmF1bHQuRU5URVJfSUQsIHRoaXMuc3VjRW50ZXJCeU1vZGUsIHRoaXMpO1xuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uWElBT01JX0FORFJPSUQpKSB7XG4gICAgICAgICAgICAkeE1BRFV0aWxzLlhNQUQuc2hvd0Jhbm5lckZlZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5PUFBPX0FORFJPSUQpKSB7XG4gICAgICAgICAgICAgICAgJG9QUE9BbmRyb2lkQWRVdGlscy5PUFBPQW5kcm9pZEFkLnNob3dCYW5uZXJGZWVkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLlZJVk8pICYmICR2SVZPQURVdGlscy5WSVZPQUQuc2hvd0N1c3RvbUFkXzEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25EaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LlVQREFURV9JTkZJTklURV9QT1dFUiwgdGhpcy51cGRhdGVJbmZpbml0ZVBvd2VyLCB0aGlzKTtcbiAgICAgICAgJGV2ZW50TWFuYWdlci5FdmVudC5vZmYoJGV2ZW50Q29uc3QuZGVmYXVsdC51cGRhdGVVbmxvY2tBbGxNb2RlLCB0aGlzLnVwZGF0ZVVubG9ja0FsbE1vZGUsIHRoaXMpO1xuICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50Lm9mZigkZXZlbnRDb25zdC5kZWZhdWx0LkVOVEVSX0lELCB0aGlzLnN1Y0VudGVyQnlNb2RlLCB0aGlzKTtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlQ3VzdG9tQWRfMSgpO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVDdXN0b21BZF8yKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVJbmZpbml0ZVBvd2VyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5kaWN0LmluZmluaXRlUG93ZXJCdG4uYWN0aXZlID0gIXQ7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVVbmxvY2tBbGxNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QudW5sb2NrQWxsTW9kZUJ0bi5hY3RpdmUgPSAhMTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgIHZhciBjO1xuICAgICAgICAgICAgdmFyIGY7XG4gICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgdmFyIHc7XG4gICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgIHZhciBrO1xuICAgICAgICAgICAgdmFyIE07XG4gICAgICAgICAgICB2YXIgUDtcbiAgICAgICAgICAgIHZhciBUO1xuICAgICAgICAgICAgdmFyIEE7XG4gICAgICAgICAgICB2YXIgSTtcbiAgICAgICAgICAgIHZhciBEO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5MRVZFTF9MSVNUKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldCgkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gcy5zZW50KCksICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9BTExfTU9ERSwgZSksIFAgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAgPCBlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQKytcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBlW1BdLnRoZW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRbb10gfHwgKHRbb10gPSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSBlW1BdLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kTW9kZURhdGEgPSBlW1BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbUF0uaWQgPj0gMyAmJiB0aGlzLnRoaXJkTW9kZXNEYXRhLnB1c2goZVtQXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGFyZW5Nb2Rlc0RhdGEucHVzaChlW1BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCwgdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5BTFJFQURZX1BMQVkpIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQIDwgZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUCsrXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gZVtQXS50aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuW29dIHx8IChuW29dID0gW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5BTFJFQURZX1BMQVksIG4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9VTkxPQ0spIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQIDwgZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUCsrXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gZVtQXS50aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW29dIHx8IChyW29dID0gWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfVU5MT0NLLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5VTkxPQ0tfQUxMX01PREVfVklERU9fVElNRVMpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuVU5MT0NLX01PREVfTElTVCkgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PSBpIHx8IGEubGVuZ3RoID49IGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnVubG9ja0FsbE1vZGVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLlBPV0VSX1RZUEUsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkZJUlNUX0RBWV9EQVRFKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ICB55So5oi3XCIsICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuZmxhZy5pbmRleE9mKFwidHRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT0gJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5mbGFnLmluZGV4T2YoXCJ0dFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5JU19DT01QQVRJQkxFXzIzMykgfHwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5ZCm5bey57uP5YW85a65XCIsIGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrIGluICgocCA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbExpc3RcIiwgSlNPTi5zdHJpbmdpZnkocCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodyA9IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF8gPSB7fSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNID0gcFtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdba10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ba10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoUCA9IDE7IFAgPD0gTSAtIDEgJiYgISh3W2tdLmxlbmd0aCA+PSA1ODApOyBQKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3W2tdLnB1c2goUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFAgPSAxOyBQIDw9IE0gJiYgISh3W2tdLmxlbmd0aCA+PSA1ODApOyBQKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfW2tdLnB1c2goUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLpgJrlhbPliJfooahcIiwgSlNPTi5zdHJpbmdpZnkodykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuino+mUgeWIl+ihqFwiLCBKU09OLnN0cmluZ2lmeShfKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLklTX0NPTVBBVElCTEVfMjMzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9QTEFZLCB3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuQUxSRUFEWV9VTkxPQ0ssIF8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrIGluICgkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5GSVJTVF9EQVlfREFURSwgbmV3IERhdGUoKS5nZXREYXRlKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuTEVWRUxfTElTVCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmID0ge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfID0ge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZltrXSA9IFtdKSwgKF9ba10gPSBbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLklTX0NPTVBBVElCTEVfMjMzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5BTFJFQURZX1BMQVksIGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLkFMUkVBRFlfVU5MT0NLLCBfKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFQgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiR01cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuY2hlYXRzLmFjdGl2ZSA9ICEhVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEEgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwidWdjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmNyZWF0ZUJ0bi5hY3RpdmUgPSAhIUE7XG4gICAgICAgICAgICAgICAgICAgICAgICBJID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcIkFsbFRoZW1lVW5sb2NrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnVubG9ja0FsbE1vZGVCdG4uYWN0aXZlID0gISFJO1xuICAgICAgICAgICAgICAgICAgICAgICAgRCA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJXdXhpYW5UaUxpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LmluZmluaXRlUG93ZXJCdG4uYWN0aXZlID0gMCAhPSBEO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLklORl9QT1dFUl9WSURFT19USU1FUykgPj0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW5maW5pdGVQb3dlcighMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkYXVkaW9NYW5hZ2VyLkF1ZGlvLnBsYXlNdXNpYygkYXVkaW9Db25zdC5BdWRpb0NvbnN0LkJHTV9NQUlOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDAxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0LnZlcnNpb24uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lndyb25nZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5TVE9QKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VNYWluTW9kZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2tpbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5nZXRSYW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLnNob3dUaW1lKGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICB2YXIgciA9IHRoaXMuc2hvd1RpbWUoZS5nZXREYXRlKCkpO1xuICAgICAgICB2YXIgbyA9IFwicHJvdmluY2VfXCIgKyBuICsgciArIFwiX1wiICsgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5yYW5rO1xuICAgICAgICBpZiAoXCJoYWl3YWlcIiA9PSAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLnJhbmspIHtcbiAgICAgICAgICAgIG8gPSBcImNvdW50cnlfXCIgKyBuICsgciArIFwiX1wiICsgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5yYW5rO1xuICAgICAgICB9XG4gICAgICAgICRjaGFsbGVuZ2VIdHRwLmNoYWxsZW5nZUh0dHAuZ2V0UmFuayhvLCBcIjFcIikudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmjpLooYzmppzmlbDmja5cIiwgZSk7XG4gICAgICAgICAgICBpZiAoZS50b3RhbCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZS5saXN0KVxuICAgICAgICAgICAgICAgICAgICAociArPSAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2U6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IGUubGlzdFtpXS5zY29yZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXN0XCIsIG4pO1xuICAgICAgICAgICAgICAgIHQucmFua0xpc3QgPSBuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRjb25maWdDb25zdC5Db25maWdDb25zdC5SYW5rO1xuICAgICAgICAgICAgICAgIGlmIChcImhhaXdhaVwiID09ICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkucmFuaykge1xuICAgICAgICAgICAgICAgICAgICBhID0gJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlJhbmtIVztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldChhKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YGH5pWw5o2uXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZVtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjaGFsbGVuZ2VIdHRwLmNoYWxsZW5nZUh0dHAuaW5jclJhbmsobywgci5wcm92aW5jZSwgci5zY29yZSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLpobrkvr/kuIrkvKBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0LnJhbmtMaXN0ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgdC5yYW5rTGlzdC5zb3J0KGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5zY29yZSAtIHQuc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnNob3dUaW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgPiAxMCkge1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCIwXCIgKyB0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS51cGRhdGVTa2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHtcbiAgICAgICAgICAgIDA6IFswXSxcbiAgICAgICAgICAgIDE6IFswXSxcbiAgICAgICAgICAgIDI6IFswXSxcbiAgICAgICAgICAgIDM6IFswXSxcbiAgICAgICAgICAgIDQ6IFswXSxcbiAgICAgICAgICAgIDU6IFswXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5hcHBJRC5pbmNsdWRlcyhcInd4YjVmNTA2ZDdjNDI3YzgzNFwiKSkge1xuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICAwOiBbMF0sXG4gICAgICAgICAgICAgICAgMTogWzJdLFxuICAgICAgICAgICAgICAgIDI6IFszXSxcbiAgICAgICAgICAgICAgICAzOiBbMF0sXG4gICAgICAgICAgICAgICAgNDogWzBdLFxuICAgICAgICAgICAgICAgIDU6IFswXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNraW5MaXN0LCB0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNraW5MaXN0KSB8fCB0O1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5za2luTGlzdCwgZSk7XG4gICAgICAgIHZhciBuID0ge1xuICAgICAgICAgICAgMDogMCxcbiAgICAgICAgICAgIDE6IDAsXG4gICAgICAgICAgICAyOiAwLFxuICAgICAgICAgICAgMzogMCxcbiAgICAgICAgICAgIDQ6IDAsXG4gICAgICAgICAgICA1OiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmFwcElELmluY2x1ZGVzKFwid3hiNWY1MDZkN2M0MjdjODM0XCIpKSB7XG4gICAgICAgICAgICBuID0ge1xuICAgICAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAgICAgMTogMixcbiAgICAgICAgICAgICAgICAyOiAzLFxuICAgICAgICAgICAgICAgIDM6IDAsXG4gICAgICAgICAgICAgICAgNDogMCxcbiAgICAgICAgICAgICAgICA1OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudXNlU2tpbklETGlzdCwgbik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS51c2VTa2luSURMaXN0KSB8fCBuO1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS51c2VTa2luSURMaXN0LCByKTtcbiAgICAgICAgdmFyIG8gPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5nZXRMb2NrU2tpbkxpc3QpIHx8IHtcbiAgICAgICAgICAgIDA6IFtdLFxuICAgICAgICAgICAgMTogW10sXG4gICAgICAgICAgICAyOiBbXSxcbiAgICAgICAgICAgIDM6IFtdLFxuICAgICAgICAgICAgNDogW10sXG4gICAgICAgICAgICA1OiBbXVxuICAgICAgICB9O1xuICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5nZXRMb2NrU2tpbkxpc3QsIG8pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuanVkZ2VNYWluTW9kZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbiA9IHRoaXM7XG4gICAgICAgIHZhciByID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UxSUQpIHx8IFtdO1xuICAgICAgICB2YXIgbyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMklEKSB8fCBbXTtcbiAgICAgICAgdmFyIGkgPSAkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCkgfHwgW107XG4gICAgICAgIHZhciBhID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UySUQpIHx8IFtdO1xuICAgICAgICB2YXIgcyA9XG4gICAgICAgICAgICAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTJMZXZlbExpc3Rfc3RhZ2UxSUQpLFxuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTJMZXZlbExpc3Rfc3RhZ2UySUQpLFxuICAgICAgICAgICAgW10pO1xuICAgICAgICB2YXIgYyA9IFtdO1xuICAgICAgICB2YXIgbCA9IFtdO1xuICAgICAgICB2YXIgZiA9IFtdO1xuICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICAkY29uZmlnTWFuYWdlci5Db25maWcuZ2V0KFxuICAgICAgICAgICAgICAgICRjb25maWdDb25zdC5Db25maWdDb25zdC5USEVNRSArIDAgKyAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmNvbmZpZ1N1ZmZpeFxuICAgICAgICAgICAgKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLldFQikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnB1c2goaS5zdGFnZTFJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UxSUQsIHMpO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCwgYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Lmxlbmd0aCA+IHIubGVuZ3RoICYmIDAgIT0gci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB0W25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbiA+IHIubGVuZ3RoIC0gMSAmJiAocy5wdXNoKGkuc3RhZ2UxSUQpLCBjLnB1c2goaS5zdGFnZTJJRCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHMuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGMuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHMgPSByLmNvbmNhdChzKTtcbiAgICAgICAgICAgICAgICAgICAgYyA9IG8uY29uY2F0KGMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacieaWsOWinuWFs+WNoVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UxSUQsIHMpO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMExldmVsTGlzdF9zdGFnZTJJRCwgYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgwID09IHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gW107XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCB0Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gdFtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gbiAmJiAoZSA9IGkuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKGkuc3RhZ2UxSUQpLCBsLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdS5wdXNoKGkuc3RhZ2UxSUQpLCBmLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaC5wdXNoKGkuc3RhZ2UxSUQpLCBwLnB1c2goaS5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnB1c2goaS5zdGFnZTFJRCksIHYucHVzaChpLnN0YWdlMklEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBsLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB1LnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBoLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBnLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2LnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzID0gYS5jb25jYXQodSkuY29uY2F0KGgpLmNvbmNhdChnKTtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGwuY29uY2F0KGYpLmNvbmNhdChwKS5jb25jYXQodik7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibWFpbk1vZGVJRFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHUuY29uY2F0KGEpLmNvbmNhdChoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBmLmNvbmNhdChsKS5jb25jYXQocCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHMuaW5kZXhPZihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfID0gc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNbMF0gPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc1t3XSA9IF87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnInmlrDlop7lhbPljaHkuJTmmK/mlrDnlKjmiLdcIik7XG4gICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUwTGV2ZWxMaXN0X3N0YWdlMUlELCBzKTtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTBMZXZlbExpc3Rfc3RhZ2UySUQsIGMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ICB55So5oi3XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+ieuuS4nVwiLCBzLCBjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKDEgPT0gdCkge1xuICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FICsgMSkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV0VCKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0Lmxlbmd0aDsgZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwucHVzaChuLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTFJRCwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5tb2RlMUxldmVsTGlzdF9zdGFnZTJJRCwgZik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodC5sZW5ndGggPiBpLmxlbmd0aCAmJiAwICE9IGkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPiBpLmxlbmd0aCAtIDEgJiYgKGwucHVzaChuLnN0YWdlMUlEKSwgZi5wdXNoKG4uc3RhZ2UySUQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBpLmNvbmNhdChsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBhLmNvbmNhdChmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMUlELCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLm1vZGUxTGV2ZWxMaXN0X3N0YWdlMklELCBmKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgwID09IGkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChlID0gMDsgZSA8IHQubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gdFtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5wdXNoKG4uc3RhZ2UxSUQpLCBvLnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5wdXNoKG4uc3RhZ2UxSUQpLCBjLnB1c2gobi5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgci5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgby5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHIuY29uY2F0KHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IG8uY29uY2F0KGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UxSUQsIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KCR1c2VyQ29uc3QuVXNlckRhdGEubW9kZTFMZXZlbExpc3Rfc3RhZ2UySUQsIGYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLogIHnlKjmiLdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuIXnkIZcIiwgbCwgZik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRjb25maWdNYW5hZ2VyLkNvbmZpZy5nZXQoJGNvbmZpZ0NvbnN0LkNvbmZpZ0NvbnN0LlRIRU1FKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGhlbWUgPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uaGFuZGxlTW9kZUJ5SUQoZS50aGVtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5oYW5kbGVNb2RlQnlJRCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gW107XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIHZhciByID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KFwibW9kZVwiICsgdCArIFwiTGV2ZWxMaXN0X3N0YWdlMUlEXCIpIHx8IFtdO1xuICAgICAgICB2YXIgbyA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcIm1vZGVcIiArIHQgKyBcIkxldmVsTGlzdF9zdGFnZTJJRFwiKSB8fCBbXTtcbiAgICAgICAgJGNvbmZpZ01hbmFnZXIuQ29uZmlnLmdldCgkY29uZmlnQ29uc3QuQ29uZmlnQ29uc3QuVEhFTUUgKyB0KS50aGVuKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICBpZiAoJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5pcygkcGxhdGZvcm1Db25zdC5FUGxhdGZvcm0uV0VCKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgaS5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGlbYV07XG4gICAgICAgICAgICAgICAgICAgIGUucHVzaChzLnN0YWdlMUlEKTtcbiAgICAgICAgICAgICAgICAgICAgbi5wdXNoKHMuc3RhZ2UySUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJtb2RlXCIgKyB0ICsgXCJMZXZlbExpc3Rfc3RhZ2UxSURcIiwgZSk7XG4gICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0KFwibW9kZVwiICsgdCArIFwiTGV2ZWxMaXN0X3N0YWdlMklEXCIsIG4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpLmxlbmd0aCA+IHIubGVuZ3RoICYmIDAgIT0gci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgaS5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBzID0gaVthXTtcbiAgICAgICAgICAgICAgICAgICAgYSA+IHIubGVuZ3RoIC0gMSAmJiAoZS5wdXNoKHMuc3RhZ2UxSUQpLCBuLnB1c2gocy5zdGFnZTJJRCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlID0gci5jb25jYXQoZSk7XG4gICAgICAgICAgICAgICAgbiA9IG8uY29uY2F0KG4pO1xuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGVcIiArIHQgKyBcIkxldmVsTGlzdF9zdGFnZTFJRFwiLCBlKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJtb2RlXCIgKyB0ICsgXCJMZXZlbExpc3Rfc3RhZ2UySURcIiwgbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKDAgPT0gci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgaS5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBzID0gaVthXTtcbiAgICAgICAgICAgICAgICAgICAgZS5wdXNoKHMuc3RhZ2UxSUQpO1xuICAgICAgICAgICAgICAgICAgICBuLnB1c2gocy5zdGFnZTJJRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG4uc29ydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwLjUgLSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcIm1vZGVcIiArIHQgKyBcIkxldmVsTGlzdF9zdGFnZTFJRFwiLCBlKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoXCJtb2RlXCIgKyB0ICsgXCJMZXZlbExpc3Rfc3RhZ2UySURcIiwgbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ICB55So5oi3XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZU1vZGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGljdC5zZWNvbmRCdG4uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNlY29uZE1vZGVEYXRhLnRoZW1lTmFtZTtcbiAgICAgICAgdmFyIGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHIgPSBuLmRpY3QubW9yZU1vZGVCZy5jaGlsZHJlblswXS5jaGlsZHJlbltlXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIHIubmFtZSA9IG4udGhpcmRNb2Rlc0RhdGFbZV0udGhlbWUgKyBcIlwiO1xuICAgICAgICAgICAgci5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG4udGhpcmRNb2Rlc0RhdGFbZV0udGhlbWVOYW1lO1xuICAgICAgICAgICAgaWYgKHIucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgci5wYXJlbnQuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbyA9IHIucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgby50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XG4gICAgICAgICAgICBvLmR1cmF0aW9uID0gMC4xO1xuICAgICAgICAgICAgby56b29tU2NhbGUgPSAxLjI7XG4gICAgICAgICAgICByLnBhcmVudC5vbihcbiAgICAgICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJwbGF5Q2xpY2tBdWRpb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0LnRoaXJkTW9kZXNEYXRhW2VdLnRoZW1lO1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwibW9kZWJ0bl9cIiArIG4pO1xuICAgICAgICAgICAgICAgICAgICB0LmVudGVyQnlNb2RlKG4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHRoaXMudGhpcmRNb2Rlc0RhdGEubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIGUocik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG8gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG4gPSBpLmRpY3QuZGFyZW5Nb2Rlcy5jaGlsZHJlblsxXS5jaGlsZHJlbltlXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIG4ubmFtZSA9IGkuZGFyZW5Nb2Rlc0RhdGFbZV0udGhlbWUgKyBcIlwiO1xuICAgICAgICAgICAgbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkuZGFyZW5Nb2Rlc0RhdGFbZV0udGhlbWVOYW1lO1xuICAgICAgICAgICAgaWYgKG4ucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbi5wYXJlbnQuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgciA9IG4ucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgci50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XG4gICAgICAgICAgICByLmR1cmF0aW9uID0gMC4xO1xuICAgICAgICAgICAgci56b29tU2NhbGUgPSAxLjI7XG4gICAgICAgICAgICBuLnBhcmVudC5vbihcbiAgICAgICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHQuZGFyZW5Nb2Rlc0RhdGFbZV0udGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIHQuZW50ZXJCeU1vZGUyKG4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICBmb3IgKHIgPSAwOyByIDwgdGhpcy5kYXJlbk1vZGVzRGF0YS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgbyhyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaW5pdFBsYXRmb3JtVUkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKTtcbiAgICAgICAgaWYgKHQuZml0VUlUeXBlICE9ICRwbGF0Zm9ybUNvbnN0LkZpdFVJVHlwZS5UVCAmJiB0LmZpdFVJVHlwZSAhPSAkcGxhdGZvcm1Db25zdC5GaXRVSVR5cGUuS1MpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QudG9wQmFyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDcwO1xuICAgICAgICAgICAgdGhpcy5kaWN0LnRvcEJhci5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodC5oYXNBZ2VUaXApIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5hZ2VCdG4uYWN0aXZlID0gITA7XG4gICAgICAgICAgICB2YXIgZSA9ICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuYWdlVGlwVHlwZTtcbiAgICAgICAgICAgIGlmIChlID09ICRwbGF0Zm9ybUNvbnN0LkFnZVRpcFR5cGUuQUdFXzEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LmFnZUJ0bi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYWdlU3ByaXRlRnJhbWVbZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWN0LnByaXZhY3lCdG4uYWN0aXZlID0gITE7XG4gICAgICAgIGlmICh0LnByaXZhY3lQb2xpY3lUeXBlICE9ICRwbGF0Zm9ybUNvbnN0LlByaXZhY3lQb2xpY3lUeXBlLk5PKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QucHJpdmFjeUJ0bi5hY3RpdmUgPSAhMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpY3QubW9yZUdhbWVCdG4uYWN0aXZlID0gITE7XG4gICAgICAgIGlmICh0Lmhhc01vcmVHYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QubW9yZUdhbWVCdG4uYWN0aXZlID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWN0LmN1c3RvbWVyU2VydmljZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgaWYgKHQuaGFzQ3VzdG9tZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY3VzdG9tZXJTZXJ2aWNlLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5BTkRST0lEX0dPT0dMRSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5sb2dvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sb2dvU3ByaXRlRnJhbWVbdC5sb2dvVHlwZV07XG4gICAgICAgICAgICBcImVuXCIgPT0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0Lmluc3RhbmNlLmxhbiAmJlxuICAgICAgICAgICAgICAgICgodGhpcy5kaWN0LmxvZ28uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29TcHJpdGVGcmFtZVskcGxhdGZvcm1Db25zdC5Mb2dvVHlwZS5QbGF5SGFtbWVyRU5dKSxcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmxvZ28uc2NhbGUgPSAxKSk7XG4gICAgICAgICAgICBcImphXCIgPT0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0Lmluc3RhbmNlLmxhbiAmJlxuICAgICAgICAgICAgICAgICgodGhpcy5kaWN0LmxvZ28uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29TcHJpdGVGcmFtZVskcGxhdGZvcm1Db25zdC5Mb2dvVHlwZS5QbGF5SGFtbWVySlBdKSxcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmxvZ28uc2NhbGUgPSAxKSk7XG4gICAgICAgICAgICBcInpoXCIgPT0gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0Lmluc3RhbmNlLmxhbiAmJlxuICAgICAgICAgICAgICAgICgodGhpcy5kaWN0LmxvZ28uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29TcHJpdGVGcmFtZVskcGxhdGZvcm1Db25zdC5Mb2dvVHlwZS5IYW1tZXJdKSxcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0LmxvZ28uc2NhbGUgPSAwLjYpKTtcbiAgICAgICAgICAgIFwidGNcIiA9PSAkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuaW5zdGFuY2UubGFuICYmXG4gICAgICAgICAgICAgICAgKCh0aGlzLmRpY3QubG9nby5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nb1Nwcml0ZUZyYW1lWyRwbGF0Zm9ybUNvbnN0LkxvZ29UeXBlLlBsYXlIYW1tZXJUQ10pLFxuICAgICAgICAgICAgICAgICh0aGlzLmRpY3QubG9nby5zY2FsZSA9IDEpKTtcbiAgICAgICAgICAgIHQubG9nb1R5cGUgPT0gJHBsYXRmb3JtQ29uc3QuTG9nb1R5cGUuRGlmZmljdWx0Q2hhbGxlbmdlICYmICh0aGlzLmRpY3QubG9nby5zY2FsZSA9IDEpO1xuICAgICAgICAgICAgdC5sb2dvVHlwZSA9PSAkcGxhdGZvcm1Db25zdC5Mb2dvVHlwZS5CaWdDb21wZXRpdGlvbiAmJiAodGhpcy5kaWN0LmxvZ28uc2NhbGUgPSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5sb2dvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5sb2dvU3ByaXRlRnJhbWVbdC5sb2dvVHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLk9IQVlPT19BTkRST0lEKSkge1xuICAgICAgICAgICAgdGhpcy5kaWN0LnByaXZhY3lCdG4uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIumakOengVxcbuiuvue9rlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5RUSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5hcHBvaW50QnRuLmFjdGl2ZSA9ICEwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5IVykpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5wcml2YWN5QnRuLnggLT0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmlzKCRwbGF0Zm9ybUNvbnN0LkVQbGF0Zm9ybS5XWCkpIHtcbiAgICAgICAgICAgIHZhciBuID0gJGJtc01hbmFnZXIuQk1TLmdldEtleShcInlzNXg1XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5czV4NVwiLCBuKTtcbiAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB3aW5kb3cud3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgLyAyIC0gMjUwO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rWL6K+Vc2hvd0Jsb2NrQWRzXCIpO1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd0Jsb2NrQWRzKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlQ2I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmhpZGVCbG9ja0FkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge30sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5oaWRlQmxvY2tBZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHt9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodC5wcml2YWN5UG9saWN5VHlwZSA9PSAkcGxhdGZvcm1Db25zdC5Qcml2YWN5UG9saWN5VHlwZS5NSU5JX0dBTUVfWE0pIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5hZ2VCdG4uYWN0aXZlID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWN0LmZvbGxvd0J0bi5hY3RpdmUgPSAhMTtcbiAgICAgICAgdmFyIG8gPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiaXNBdWRpdGluZ1wiKTtcbiAgICAgICAgdmFyIGkgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiUGF0dGVybnNTdGF0ZVwiKTtcbiAgICAgICAgdGhpcy5kaWN0Lm92ZXJsYXBCYW5uZXIuYWN0aXZlID0gITE7XG4gICAgICAgIHRoaXMuZGljdC5zY3Jld0Jhbm5lci5hY3RpdmUgPSAhMDtcbiAgICAgICAgdGhpcy5kaWN0LnN0YXJ0QnRuVGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5byA5aeL5ri45oiPXCI7XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICh0aGlzLmRpY3Quc2Vjb25kQnRuLmFjdGl2ZSA9ICEwKSwgKHRoaXMuZGljdFtcIjNCdG5cIl0uYWN0aXZlID0gITApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0LnNlY29uZEJ0bi5hY3RpdmUgPSAhMSksICh0aGlzLmRpY3RbXCIzQnRuXCJdLmFjdGl2ZSA9ICExKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuaXNET1VZSU4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gd2luZG93LnR0ICYmIHdpbmRvdy50dC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHQuYXBwTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIkRvdXlpblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja1NldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImJ0bjAwNFwiKTtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5TRVQpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGluZ1NjZW5lKSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICBpZiAoJGJtc01hbmFnZXIuQk1TLmdldEtleShcImlzQXVkaXRpbmdcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdC5zY3Jld0Jhbm5lci5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgwID09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuYnRuLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIwMDFcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5idG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjAwMlwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDAxXCIpO1xuICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9NT0RFLCB0KTtcbiAgICAgICAgICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QpO1xuICAgICAgICAgICAgICAgICRjb25maWdVdGlscy5Db25maWdVdGlscy5zZXROZXh0TW9kZUlEKCk7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSAxO1xuICAgICAgICAgICAgICAgICRjb25maWdVdGlscy5Db25maWdVdGlscy5nZXREYXRhQnlJRCh0LCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcyAtIFwiLCByKTtcbiAgICAgICAgICAgICAgICAgICAgbiA9IHIuYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZVt0XSA+IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldFRlbXBEYXRhKCR1c2VyQ29uc3QuVGVtcERhdGEuQ1VSUkVOVF9MRVZFTCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIGVbdF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5HQU1FKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZSgkc2NlbmVDb25zdC5TY2VuZUNvbnN0LkhvbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0luZmluaXRlUG93ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMDdcIik7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJwYWdlMDExXCIpO1xuICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LklORklOSVRFX1BPV0VSKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrSG90TW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDAyXCIpO1xuICAgICAgICAgICAgJHNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZSgkc2NlbmVDb25zdC5TY2VuZUNvbnN0Lk1PREVfU0VMRUNULCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tNb3JlTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDAzXCIpO1xuICAgICAgICAgICAgJHNjZW5lTWFuYWdlci5kZWZhdWx0LmxvYWRTY2VuZSgkc2NlbmVDb25zdC5TY2VuZUNvbnN0Lk1PREVfU0VMRUNULCAyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tDaGVhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lcyArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltcIiArIHRoaXMuY2xpY2tUaW1lcyArIFwiXVwiKTtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tUaW1lcyA+PSA4KSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LkNIRUFUUyk7XG4gICAgICAgICAgICB0aGlzLmNsaWNrVGltZXMgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5BR0VfVElQKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrUHJpdmFjeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICB2YXIgZSA9ICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUucHJpdmFjeVBvbGljeVR5cGUgPT0gJHBsYXRmb3JtQ29uc3QuUHJpdmFjeVBvbGljeVR5cGUuTUlOSV9HQU1FIHx8XG4gICAgICAgICAgICBlLnByaXZhY3lQb2xpY3lUeXBlID09ICRwbGF0Zm9ybUNvbnN0LlByaXZhY3lQb2xpY3lUeXBlLk1JTklfR0FNRV9WSVZPIHx8XG4gICAgICAgICAgICBlLnByaXZhY3lQb2xpY3lUeXBlID09ICRwbGF0Zm9ybUNvbnN0LlByaXZhY3lQb2xpY3lUeXBlLk1JTklfR0FNRV9YTVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9hZFByaXZhY3kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTG9hZFByaXZhY3kgPSAhMDtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3BvcHVwL1ByaXZhY3lQb2xpY3lcIiwgZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgICAgICAgICB0LmlzTG9hZFByaXZhY3kgPSAhMTtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gY2MuaW5zdGFudGlhdGUobik7XG4gICAgICAgICAgICAgICAgICAgIHQubm9kZS5hZGRDaGlsZChyKTtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoXCJQcml2YWN5UG9saWN5XCIpLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLnByaXZhY3lQb2xpY3lUeXBlID09ICRwbGF0Zm9ybUNvbnN0LlByaXZhY3lQb2xpY3lUeXBlLk5BVElWRSkge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hvd1ByaXZhY3lQb2xpY3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tBcHBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZFByaXZhY3kpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZFByaXZhY3kgPSAhMDtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFiL3BvcHVwL1ByaXZhY3lQb2xpY3lcIiwgZnVuY3Rpb24gKGUsIG4pIHtcbiAgICAgICAgICAgICAgICB0LmlzTG9hZFByaXZhY3kgPSAhMTtcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gY2MuaW5zdGFudGlhdGUobik7XG4gICAgICAgICAgICAgICAgICAgIHQubm9kZS5hZGRDaGlsZChyKTtcbiAgICAgICAgICAgICAgICAgICAgci5nZXRDb21wb25lbnQoXCJQcml2YWN5UG9saWN5XCIpLm9wZW5Vc2VyUGFuZWxIYW5kbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tNb3JlR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93TW9yZUdhbWUoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrTGV2ZWxTZWxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZ1NjZW5lKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmdTY2VuZSA9ICEwO1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcInBhZ2UwMDJcIik7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSwgMCk7XG4gICAgICAgICAgICAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuTEVWRUxfU0VMRUNUKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tDcmVhdGVCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMjdcIik7XG4gICAgICAgIGlmICghJGJtc01hbmFnZXIuQk1TLmdldEtleShcInVnY2FkXCIpIHx8ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLmlzVW5sb2NrVWdjKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbnRlclVnYykge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFbnRlclVnYyA9ICEwO1xuICAgICAgICAgICAgICAgICRzY2VuZU1hbmFnZXIuZGVmYXVsdC5sb2FkU2NlbmUoJHNjZW5lQ29uc3QuU2NlbmVDb25zdC5VR0MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5VTkxPQ0tfVUdDKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tBZ2VCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuQUdFX1RJUCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0ZvbGxvd0J0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmZvbGxvdyhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKDAgPT0gZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YWz5rOo5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIGlmICgkdXNlck1hbmFnZXIuVXNlci5nZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5pc0ZvbGxvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LmRpY3QuZm9sbG93QnRuLmdldENoaWxkQnlOYW1lKFwia2V5SWNvblwiKS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICB0LmRpY3QuZm9sbG93QnRuLmdldENoaWxkQnlOYW1lKFwia2V5QW1vdW50XCIpLmFjdGl2ZSA9ICExO1xuICAgICAgICAgICAgICAgIHZhciBuID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuS0VZKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5LRVksIG4gKyAxKTtcbiAgICAgICAgICAgICAgICAkZXZlbnRNYW5hZ2VyLkV2ZW50LmVtaXQoJGV2ZW50Q29uc3QuZGVmYXVsdC5LRVlfRUZGRUNUKTtcbiAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5pc0ZvbGxvdywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tMb3ZlRG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwiYnRuMDI4XCIpO1xuICAgICAgICB0aGlzLmVudGVyQnlNb2RlKDEpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tEb2dTdG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ1wiLCBcImJ0bjAyOVwiKTtcbiAgICAgICAgdGhpcy5lbnRlckJ5TW9kZSgyKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrU2Vjb25kTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbnRlckJ5TW9kZSgzKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsaWNrM01vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LmJ0biwge1xuICAgICAgICAgICAgaWQ6IFwiMDAzXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJtb2RlYnRuXzVcIik7XG4gICAgICAgIHRoaXMuZW50ZXJCeU1vZGUoNSk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGljazRNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5idG4sIHtcbiAgICAgICAgICAgIGlkOiBcIjAwNFwiXG4gICAgICAgIH0pO1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nXCIsIFwibW9kZWJ0bl8zXCIpO1xuICAgICAgICB0aGlzLmVudGVyQnlNb2RlKDMpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuY2xpY2tUaGlyZE1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaXNBbmltKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0FuaW0gPSAhMDtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dcIiwgXCJidG4wMzJcIik7XG4gICAgICAgICAgICB0aGlzLmRpY3QubW9yZU1vZGVCZy5hY3RpdmUgPSAhdGhpcy5kaWN0Lm1vcmVNb2RlQmcuYWN0aXZlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaG93KSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuZGljdC5tb3JlTW9kZUJnLmFjdGl2ZSA9ICEwKSxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGljdC5tb3JlTW9kZUJnLm9wYWNpdHkgPSAyNTUpLFxuICAgICAgICAgICAgICAgICAgICBjY1xuICAgICAgICAgICAgICAgICAgICAgICAgLnR3ZWVuKHRoaXMuZGljdC5tb3JlTW9kZUJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5kaWN0Lm1vcmVNb2RlQmcuYWN0aXZlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pc0FuaW0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlzU2hvdyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAodGhpcy5kaWN0Lm1vcmVNb2RlQmcub3BhY2l0eSA9IDApLFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5kaWN0Lm1vcmVNb2RlQmcuYWN0aXZlID0gITApLFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua1i+ivlVwiKSxcbiAgICAgICAgICAgICAgICAgICAgY2NcbiAgICAgICAgICAgICAgICAgICAgICAgIC50d2Vlbih0aGlzLmRpY3QubW9yZU1vZGVCZylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pc0FuaW0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlzU2hvdyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDAgPT0gdGhpcy5kaWN0LmFycm93LmFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWN0LmFycm93LmFuZ2xlID0gMTgwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3QuYXJyb3cuYW5nbGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0JlZUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5CRUUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUudW5sb2NrQWxsTW9kZUJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5VTkxPQ0tfQUxMX01PREUpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub3JkZXJCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5kaWN0Lm9yZGVySUQuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgY29uc29sZS5sb2coXCLpobrluo9pZFwiLCB0KTtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnROdW0odCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5pWw5a2XXCIpO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUsIDApO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCBOdW1iZXIodCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nU2NlbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuR0FNRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm1vZGVKdW1wQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpY3QuZGFyZW5Nb2Rlcy5hY3RpdmUgPSAhMDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNsb3NlRGFyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGljdC5kYXJlbk1vZGVzLmFjdGl2ZSA9ICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUuZW50ZXJCeU1vZGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwibmV3bW9kZWFkXCIpICYmXG4gICAgICAgICAgICAtMSA9PSAoJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEuVU5MT0NLX01PREVfTElTVCkgfHwgW10pLmluZGV4T2YodClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERV9VTkxPQ0tfSUQsIHQpO1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5NT0RFX1VOTE9DSyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWNFbnRlckJ5TW9kZSh0KTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmVudGVyQnlNb2RlMiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHdpbmRvdy5tb2RlSUQgPSB0O1xuICAgICAgICB0aGlzLmRpY3QuZGFyZW5Nb2Rlcy5jaGlsZHJlblsxXS5hY3RpdmUgPSAhMTtcbiAgICAgICAgdGhpcy5kaWN0LkVkaXRCb3guYWN0aXZlID0gITA7XG4gICAgICAgIHRoaXMuZGljdC5kYXJlbkp1bXAuYWN0aXZlID0gITA7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5kYXJlbkp1bXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcy5kaWN0LkVkaXRCb3guZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgaWYgKHRoaXMuaXNJbnROdW0odCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5piv5pWw5a2XXCIpO1xuICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX01PREUsIE51bWJlcih3aW5kb3cubW9kZUlEKSk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIE51bWJlcih0KSk7XG4gICAgICAgICAgICAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuR0FNRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmlzSW50TnVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHQpKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnN1Y0VudGVyQnlNb2RlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGluZ1NjZW5lKSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZ1NjZW5lID0gITA7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSwgdCk7XG4gICAgICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLkxFVkVMX0xJU1QpO1xuICAgICAgICAgICAgJGNvbmZpZ1V0aWxzLkNvbmZpZ1V0aWxzLnNldE5leHRNb2RlSUQoKTtcbiAgICAgICAgICAgIHZhciBuID0gMTtcbiAgICAgICAgICAgICRjb25maWdVdGlscy5Db25maWdVdGlscy5nZXREYXRhQnlJRCh0LCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIG4gPSByLmFtb3VudDtcbiAgICAgICAgICAgICAgICBpZiAoZVt0XSA+IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgJHVzZXJNYW5hZ2VyLlVzZXIuc2V0VGVtcERhdGEoJHVzZXJDb25zdC5UZW1wRGF0YS5DVVJSRU5UX0xFVkVMLCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTEVWRUwsIGVbdF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkc2NlbmVNYW5hZ2VyLmRlZmF1bHQubG9hZFNjZW5lKCRzY2VuZUNvbnN0LlNjZW5lQ29uc3QuR0FNRSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX19kZWNvcmF0ZShbRShbY2MuU3ByaXRlRnJhbWVdKV0sIGUucHJvdG90eXBlLCBcImFnZVNwcml0ZUZyYW1lXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbRShbY2MuU3ByaXRlRnJhbWVdKV0sIGUucHJvdG90eXBlLCBcImxvZ29TcHJpdGVGcmFtZVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtCXSwgZSk7XG59KSgkYmFzZVVJLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTztcbiJdfQ==