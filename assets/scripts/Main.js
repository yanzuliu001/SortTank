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
var O = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
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
        this.dict.clickBg.on(
            cc.Node.EventType.TOUCH_START,
            function () {
                if (e.isShow) {
                    e.clickThirdMode();
                }
            },
            this
        );
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
        $eventManager.Event.on($eventConst.default.UPDATE_INFINITE_POWER, this.updateInfinitePower, this);
        $eventManager.Event.on($eventConst.default.updateUnlockAllMode, this.updateUnlockAllMode, this);
        $eventManager.Event.on($eventConst.default.ENTER_ID, this.sucEnterByMode, this);
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
        $eventManager.Event.off($eventConst.default.UPDATE_INFINITE_POWER, this.updateInfinitePower, this);
        $eventManager.Event.off($eventConst.default.updateUnlockAllMode, this.updateUnlockAllMode, this);
        $eventManager.Event.off($eventConst.default.ENTER_ID, this.sucEnterByMode, this);
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
                        for (
                            e = s.sent(), $userManager.User.setTempData($userConst.TempData.CURRENT_ALL_MODE, e), P = 0;
                            P < e.length;
                            P++
                        ) {
                            o = e[P].theme;
                            t[o] || (t[o] = 1);
                            if (2 == e[P].id) {
                                this.secondModeData = e[P];
                            } else {
                                e[P].id >= 3 && this.thirdModesData.push(e[P]);
                            }
                            this.darenModesData.push(e[P]);
                        }
                        for (
                            $userManager.User.set($userConst.UserData.LEVEL_LIST, t),
                                n = $userManager.User.get($userConst.UserData.ALREADY_PLAY) || {},
                                P = 0;
                            P < e.length;
                            P++
                        ) {
                            o = e[P].theme;
                            n[o] || (n[o] = []);
                        }
                        for (
                            $userManager.User.set($userConst.UserData.ALREADY_PLAY, n),
                                r = $userManager.User.get($userConst.UserData.ALREADY_UNLOCK) || {},
                                P = 0;
                            P < e.length;
                            P++
                        ) {
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
                            if (
                                -1 != $platformManager.Platform.getConfig().flag.indexOf("tt") &&
                                ((d = $userManager.User.get($userConst.UserData.IS_COMPATIBLE_233) || 0),
                                console.log("是否已经兼容", d),
                                !d)
                            ) {
                                for (k in ((p = $userManager.User.get($userConst.UserData.LEVEL_LIST)),
                                console.log("levelList", JSON.stringify(p)),
                                (w = {}),
                                (_ = {}),
                                p)) {
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
                            for (k in ($userManager.User.set($userConst.UserData.FIRST_DAY_DATE, new Date().getDate()),
                            (c = $userManager.User.get($userConst.UserData.LEVEL_LIST)),
                            (f = {}),
                            (_ = {}),
                            c))
                                (f[k] = []), (_[k] = [1]);
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
                            $popupManager.default.show($popupConst.PopupConst.STOP);
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
                for (var i in e.list)
                    (r += 1),
                        n.push({
                            id: r,
                            province: i,
                            score: e.list[i].score
                        });
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
        var s =
            ($userManager.User.get($userConst.UserData.mode2LevelList_stage1ID),
            $userManager.User.get($userConst.UserData.mode2LevelList_stage2ID),
            []);
        var c = [];
        var l = [];
        var f = [];
        if (0 == t) {
            $configManager.Config.get(
                $configConst.ConfigConst.THEME + 0 + $platformManager.Platform.getConfig().configSuffix
            ).then(function (t) {
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
        var e = function (e) {
            var r = n.dict.moreModeBg.children[0].children[e].children[0];
            r.name = n.thirdModesData[e].theme + "";
            r.getComponent(cc.Label).string = n.thirdModesData[e].themeName;
            if (r.parent.getComponent(cc.Button)) {
                //
            } else {
                r.parent.addComponent(cc.Button);
            }
            var o = r.parent.getComponent(cc.Button);
            o.transition = cc.Button.Transition.SCALE;
            o.duration = 0.1;
            o.zoomScale = 1.2;
            r.parent.on(
                cc.Node.EventType.TOUCH_END,
                function () {
                    cc.game.emit("playClickAudio");
                    var n = t.thirdModesData[e].theme;
                    cc.game.emit("gamelog", "modebtn_" + n);
                    t.enterByMode(n);
                },
                n
            );
        };
        var n = this;
        for (var r = 0; r < this.thirdModesData.length; r++) {
            e(r);
        }
        var o = function (e) {
            var n = i.dict.darenModes.children[1].children[e].children[0];
            n.name = i.darenModesData[e].theme + "";
            n.getComponent(cc.Label).string = i.darenModesData[e].themeName;
            if (n.parent.getComponent(cc.Button)) {
                //
            } else {
                n.parent.addComponent(cc.Button);
            }
            var r = n.parent.getComponent(cc.Button);
            r.transition = cc.Button.Transition.SCALE;
            r.duration = 0.1;
            r.zoomScale = 1.2;
            n.parent.on(
                cc.Node.EventType.TOUCH_END,
                function () {
                    var n = t.darenModesData[e].theme;
                    t.enterByMode2(n);
                },
                i
            );
        };
        var i = this;
        for (r = 0; r < this.darenModesData.length; r++) {
            o(r);
        }
    };
    e.prototype.initPlatformUI = function () {
        var t = $platformManager.Platform.getConfig();
        if (t.fitUIType != $platformConst.FitUIType.TT && t.fitUIType != $platformConst.FitUIType.KS) {
            //
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
            "en" == $languageManager.default.instance.lan &&
                ((this.dict.logo.getComponent(cc.Sprite).spriteFrame =
                    this.logoSpriteFrame[$platformConst.LogoType.PlayHammerEN]),
                (this.dict.logo.scale = 1));
            "ja" == $languageManager.default.instance.lan &&
                ((this.dict.logo.getComponent(cc.Sprite).spriteFrame =
                    this.logoSpriteFrame[$platformConst.LogoType.PlayHammerJP]),
                (this.dict.logo.scale = 1));
            "zh" == $languageManager.default.instance.lan &&
                ((this.dict.logo.getComponent(cc.Sprite).spriteFrame =
                    this.logoSpriteFrame[$platformConst.LogoType.Hammer]),
                (this.dict.logo.scale = 0.6));
            "tc" == $languageManager.default.instance.lan &&
                ((this.dict.logo.getComponent(cc.Sprite).spriteFrame =
                    this.logoSpriteFrame[$platformConst.LogoType.PlayHammerTC]),
                (this.dict.logo.scale = 1));
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
                $platformManager.Platform.showBlockAds(
                    {
                        top: r,
                        left: 0,
                        id: "",
                        hideCb: function () {
                            $platformManager.Platform.hideBlockAds();
                            setTimeout(function () {}, 300);
                        }
                    },
                    function (t) {
                        if (0 == t) {
                            //
                        } else {
                            $platformManager.Platform.hideBlockAds();
                            setTimeout(function () {}, 300);
                        }
                    }
                );
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
                (this.dict.secondBtn.active = !0), (this.dict["3Btn"].active = !0);
            } else {
                (this.dict.secondBtn.active = !1), (this.dict["3Btn"].active = !1);
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
        $popupManager.default.show($popupConst.PopupConst.SET);
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
                    $sceneManager.default.loadScene($sceneConst.SceneConst.GAME);
                });
            } else {
                $sceneManager.default.loadScene($sceneConst.SceneConst.Home);
            }
        }
    };
    e.prototype.clickInfinitePower = function () {
        cc.game.emit("gamelog", "btn007");
        cc.game.emit("gamelog", "page011");
        $popupManager.default.show($popupConst.PopupConst.INFINITE_POWER);
    };
    e.prototype.clickHotMode = function () {
        if (this.isLoadingScene) {
            //
        } else {
            this.isLoadingScene = !0;
            cc.game.emit("gamelog", "btn002");
            $sceneManager.default.loadScene($sceneConst.SceneConst.MODE_SELECT, 1);
        }
    };
    e.prototype.clickMoreMode = function () {
        if (this.isLoadingScene) {
            //
        } else {
            this.isLoadingScene = !0;
            cc.game.emit("gamelog", "btn003");
            $sceneManager.default.loadScene($sceneConst.SceneConst.MODE_SELECT, 2);
        }
    };
    e.prototype.clickCheats = function () {
        this.clickTimes += 1;
        console.log("[" + this.clickTimes + "]");
        if (this.clickTimes >= 8) {
            $popupManager.default.show($popupConst.PopupConst.CHEATS);
            this.clickTimes = 0;
        }
    };
    e.prototype.clickAge = function () {
        $popupManager.default.show($popupConst.PopupConst.AGE_TIP);
    };
    e.prototype.clickPrivacy = function () {
        var t = this;
        var e = $platformManager.Platform.getConfig();
        if (
            e.privacyPolicyType == $platformConst.PrivacyPolicyType.MINI_GAME ||
            e.privacyPolicyType == $platformConst.PrivacyPolicyType.MINI_GAME_VIVO ||
            e.privacyPolicyType == $platformConst.PrivacyPolicyType.MINI_GAME_XM
        ) {
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
        if (this.isLoadPrivacy) {
            //
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
        if (this.isLoadingScene) {
            //
        } else {
            this.isLoadingScene = !0;
            cc.game.emit("gamelog", "page002");
            $userManager.User.setTempData($userConst.TempData.CURRENT_MODE, 0);
            $sceneManager.default.loadScene($sceneConst.SceneConst.LEVEL_SELECT);
        }
    };
    e.prototype.clickCreateBtn = function () {
        cc.game.emit("gamelog", "btn027");
        if (!$bmsManager.BMS.getKey("ugcad") || $userManager.User.get($userConst.UserData.isUnlockUgc)) {
            if (this.isEnterUgc) {
                //
            } else {
                this.isEnterUgc = !0;
                $sceneManager.default.loadScene($sceneConst.SceneConst.UGC);
            }
        } else {
            $popupManager.default.show($popupConst.PopupConst.UNLOCK_UGC);
        }
    };
    e.prototype.clickAgeBtn = function () {
        $popupManager.default.show($popupConst.PopupConst.AGE_TIP);
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
                $eventManager.Event.emit($eventConst.default.KEY_EFFECT);
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
        if (this.isAnim) {
            //
        } else {
            this.isAnim = !0;
            cc.game.emit("gamelog", "btn032");
            this.dict.moreModeBg.active = !this.dict.moreModeBg.active;
            if (this.isShow) {
                (this.dict.moreModeBg.active = !0),
                    (this.dict.moreModeBg.opacity = 255),
                    cc
                        .tween(this.dict.moreModeBg)
                        .to(0.3, {
                            opacity: 0
                        })
                        .call(function () {
                            t.dict.moreModeBg.active = !1;
                            t.isAnim = !1;
                            t.isShow = !1;
                        })
                        .start();
            } else {
                (this.dict.moreModeBg.opacity = 0),
                    (this.dict.moreModeBg.active = !0),
                    console.log("测试"),
                    cc
                        .tween(this.dict.moreModeBg)
                        .to(0.3, {
                            opacity: 255
                        })
                        .call(function () {
                            t.isAnim = !1;
                            t.isShow = !0;
                        })
                        .start();
            }
            if (0 == this.dict.arrow.angle) {
                this.dict.arrow.angle = 180;
            } else {
                this.dict.arrow.angle = 0;
            }
        }
    };
    e.prototype.clickBeeBtn = function () {
        $popupManager.default.show($popupConst.PopupConst.BEE);
    };
    e.prototype.unlockAllModeBtn = function () {
        $popupManager.default.show($popupConst.PopupConst.UNLOCK_ALL_MODE);
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
            $sceneManager.default.loadScene($sceneConst.SceneConst.GAME);
        }
    };
    e.prototype.modeJumpBtn = function () {
        this.dict.darenModes.active = !0;
    };
    e.prototype.closeDaren = function () {
        this.dict.darenModes.active = !1;
    };
    e.prototype.enterByMode = function (t) {
        if (
            $bmsManager.BMS.getKey("newmodead") &&
            -1 == ($userManager.User.get($userConst.UserData.UNLOCK_MODE_LIST) || []).indexOf(t)
        ) {
            $userManager.User.setTempData($userConst.TempData.CURRENT_MODE_UNLOCK_ID, t);
            return void $popupManager.default.show($popupConst.PopupConst.MODE_UNLOCK);
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
            $sceneManager.default.loadScene($sceneConst.SceneConst.GAME);
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
                $sceneManager.default.loadScene($sceneConst.SceneConst.GAME);
            });
        }
    };
    __decorate([E([cc.SpriteFrame])], e.prototype, "ageSpriteFrame", void 0);
    __decorate([E([cc.SpriteFrame])], e.prototype, "logoSpriteFrame", void 0);
    return __decorate([B], e);
})($baseUI.default);
exports.default = O;
