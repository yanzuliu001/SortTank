"use strict";
cc._RF.push(module, '050ce4vS+hNCp1Mio3hNmrF', 'PlatformConst');
// scripts/PlatformConst.js

"use strict";

var r;
var o;
exports.PlatformConfig = exports.BaseConfig = exports.LogoType = exports.AgeTipType = exports.LoginType = exports.PrivacyPolicyType = exports.FitUIType = exports.EPlatform = void 0;
var a;
var s;
var c;
var l;
var u;
var f;

var $basePlatform = require("./BasePlatform");

var $android = require("./Android");

var $androidOPPO = require("./AndroidOPPO");

var $androidVIVO = require("./AndroidVIVO");

var $androidXiaoMi = require("./AndroidXiaoMi");

var $hW = require("./HW");

var $iOS = require("./IOS");

var $kS = require("./KS");

var $oPPO = require("./OPPO");

var $qQ = require("./QQ");

var $tT = require("./TT");

var $vIVO = require("./VIVO");

var $wX = require("./WX");

var $xM = require("./XM");

(function (t) {
  t[t.WEB = 0] = "WEB";
  t[t.TT = 1] = "TT";
  t[t.KS = 2] = "KS";
  t[t.WX = 3] = "WX";
  t[t.QQ = 4] = "QQ";
  t[t.BAIDU = 5] = "BAIDU";
  t[t.MEIZU = 6] = "MEIZU";
  t[t.OPPO = 7] = "OPPO";
  t[t.VIVO = 8] = "VIVO";
  t[t.HW = 9] = "HW";
  t[t.XIAOMI = 10] = "XIAOMI";
  t[t.ANDROID = 11] = "ANDROID";
  t[t.ANDROID_GOOGLE = 12] = "ANDROID_GOOGLE";
  t[t.IOS = 13] = "IOS";
  t[t.IOS_HAIWAI = 14] = "IOS_HAIWAI";
  t[t.OPPO_ANDROID = 15] = "OPPO_ANDROID";
  t[t.VIVO_ANDROID = 16] = "VIVO_ANDROID";
  t[t.XIAOMI_ANDROID = 17] = "XIAOMI_ANDROID";
  t[t.HUAWEI_ANDROID = 18] = "HUAWEI_ANDROID";
  t[t.KS_ANDROID = 19] = "KS_ANDROID";
  t[t.OHAYOO_ANDROID = 20] = "OHAYOO_ANDROID";
})(a = exports.EPlatform || (exports.EPlatform = {}));

(function (t) {
  t[t.Normal = 0] = "Normal";
  t[t.TT = 1] = "TT";
  t[t.KS = 2] = "KS";
})(s = exports.FitUIType || (exports.FitUIType = {}));

(function (t) {
  t[t.NO = 0] = "NO";
  t[t.MINI_GAME = 1] = "MINI_GAME";
  t[t.MINI_GAME_VIVO = 2] = "MINI_GAME_VIVO";
  t[t.MINI_GAME_XM = 3] = "MINI_GAME_XM";
  t[t.NATIVE = 4] = "NATIVE";
})(c = exports.PrivacyPolicyType || (exports.PrivacyPolicyType = {}));

(function (t) {
  t[t.NO = 0] = "NO";
  t[t.HW = 1] = "HW";
  t[t.HWAndriod = 2] = "HWAndriod";
})(l = exports.LoginType || (exports.LoginType = {}));

(function (t) {
  t[t.NO = 0] = "NO";
  t[t.AGE_12 = 1] = "AGE_12";
  t[t.AGE_16 = 2] = "AGE_16";
})(u = exports.AgeTipType || (exports.AgeTipType = {}));

(function (t) {
  t[t.DreamSetUp_TC = 0] = "DreamSetUp_TC";
  t[t.DreamSetUp_EN = 1] = "DreamSetUp_EN";
  t[t.DreamSetUp = 2] = "DreamSetUp";
})(f = exports.LogoType || (exports.LogoType = {}));

var P = function P() {
  this.platformClass = $basePlatform.BasePlatform;
  this.flag = "rrbdnios";
  this.version = "1.0.1";
  this.appID = "";
  this.bannerID = "";
  this.insertID = "";
  this.rewardID = "";
  this.blockID = "";
  this.boxID = "";
  this.nativeID = "";
  this.hasRecord = 0;
  this.hasShare = 0;
  this.fitUIType = s.Normal;
  this.hasHomeBtn = 0;
  this.hasAgeTip = 0;
  this.loadingDelay = 0;
  this.privacyPolicyType = c.NO;
  this.hasMoreGame = 0;
  this.hasCopyright = 0;
  this.hasCustomerService = 0;
  this.ageTipType = u.NO;
  this.logoType = f.DreamSetUp_TC;
  this.loginType = l.NO;
  this.company = "广州小贝";
  this.email = "xiaobei-kf@foxmail.com";
  this.address = "广州市天河区珠江新城珠江东路30号广州银行大厦601A";
  this.configSuffix = "";
  this.hasHealthy = 1;
  this.registerNumber = "2020SR0412256";
  this.registerPerson = "广州勇往科技有限公司";
  this.customAd_topImg_bottomText = "";
  this.customAd_leftImg_rightText = "";
  this.serverUrl = "https://game.zuiqiangyingyu.net/";
  this.rank = "";
  this.hasPurchase = 0;
  this.hasVIP = 1;
  this.hasShip = 1;
  this.recordNumber = "";
  this.isBlockMan = 0;
  this.thinkingID = "bf81e42ae54a4a3da95a36d781dd1c21";
};

exports.BaseConfig = P;

var T = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $android.Android;
    e.ageTipType = u.AGE_16;
    e.loadingDelay = 2;
    e.fitUIType = s.TT;
    e.hasCopyright = 1;
    e.flag = "qygwlgczapk";
    e.version = "1.0.0.0hykb";
    e.registerNumber = "2019SR0904903";
    e.hasHealthy = 1;
    e.hasAgeTip = 1;
    e.privacyPolicyType = c.NATIVE;
    e.rank = "android";
    e.hasPurchase = 0;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var A = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $android.Android;
    e.flag = "lsjddwhwgg";
    e.version = "1.0.0.4";
    e.ageTipType = u.NO;
    e.fitUIType = s.TT;
    e.hasCopyright = 0;
    e.hasHealthy = 0;
    e.rank = "haiwai";
    e.hasVIP = 0;
    e.hasPurchase = 0;
    e.hasShip = 0;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var I = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $android.Android;
    e.flag = "wdggapk";
    e.version = "1.0.4.1hw";
    e.hasHomeBtn = 1;
    e.ageTipType = u.AGE_16;
    e.loadingDelay = 2;
    e.fitUIType = s.TT;
    e.hasCopyright = 1;
    e.loginType = l.HWAndriod;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var D = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $android.Android;
    e.flag = "rrbdn";
    e.version = "1.0.3ohayoo";
    e.hasHomeBtn = 1;
    e.loadingDelay = 2;
    e.ageTipType = u.AGE_12;
    e.fitUIType = s.TT;
    e.privacyPolicyType = c.NATIVE;
    e.hasAgeTip = 1;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var U = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $androidXiaoMi["default"];
    e.flag = "wlgczapk";
    e.version = "1.0.0.1xm";
    e.hasHomeBtn = 1;
    e.ageTipType = u.AGE_16;
    e.loadingDelay = 1;
    e.hasCopyright = 1;
    e.privacyPolicyType = c.NATIVE;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var B = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $androidOPPO["default"];
    e.flag = "wlgczapk";
    e.version = "1.0.0.1oppo";
    e.hasHomeBtn = 1;
    e.ageTipType = u.AGE_16;
    e.loadingDelay = 2;
    e.hasMoreGame = 1;
    e.privacyPolicyType = c.NATIVE;
    e.hasCopyright = 1;
    e.hasCustomerService = 1;
    e.fitUIType = s.TT;
    return e;
  }

  __extends(e, t);

  return e;
}(T);

var E = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $androidVIVO["default"];
    e.flag = "wlgczapk";
    e.version = "1.0.0.1vivo";
    e.hasHomeBtn = 1;
    e.ageTipType = u.AGE_16;
    e.loadingDelay = 2;
    e.privacyPolicyType = c.NATIVE;
    e.hasCopyright = 1;
    e.fitUIType = s.TT;
    return e;
  }

  __extends(e, t);

  return e;
}(T);

var O = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $iOS.IOS;
    e.flag = "zqdn2ios";
    e.version = "3.0.3";
    e.ageTipType = u.AGE_16;
    e.fitUIType = s.TT;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var R = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $iOS.IOS;
    e.flag = "wlgczhwios";
    e.version = "3.0.3";
    e.ageTipType = u.NO;
    e.fitUIType = s.TT;
    e.hasCopyright = 0;
    e.hasHealthy = 0;
    e.serverUrl = "https://bms.yarkgame.com/";
    e.rank = "haiwai";
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var L = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $tT.TT;
    e.flag = "yjnhtt";
    e.version = "1.0.8";
    e.appID = "tt467e30c3d95448c4";
    e.bannerID = "a3e1i8ckl2b4lc5khf";
    e.rewardID = "1hfao85dg8u3o1lf1g";
    e.insertID = "1iddb482e6h6de411o";
    e.fitUIType = s.TT;
    e.hasRecord = 1;
    e.hasShare = 1;
    e.hasCopyright = 1;
    e.logoType = f.DreamSetUp;
    e.recordNumber = "粤ICP备19160116号-123X";
    e.isBlockMan = 1;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var N = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $kS.KS;
    e.flag = "whmscatt";
    e.version = "1.1.1";
    e.appID = "ks712131694668907314";
    e.bannerID = "";
    e.rewardID = "2300005272_01";
    e.insertID = "2300005272_02";
    e.fitUIType = s.KS;
    e.hasRecord = 1;
    e.hasCopyright = 1;
    e.registerNumber = "2024SR0097932";
    e.registerPerson = "广州卓讯互动信息技术有限公司";
    e.logoType = f.DreamSetUp;
    e.recordNumber = "粤ICP备2023086686号-10X";
    e.hasShare = 0;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var x = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $oPPO.OPPO;
    e.flag = "wdggoppo";
    e.version = "1.1.5";
    e.appID = "30841165";
    e.bannerID = "565455";
    e.rewardID = "565458";
    e.nativeID = "565457";
    e.boxID = "565459";
    e.fitUIType = s.TT;
    e.hasCopyright = 1;
    e.privacyPolicyType = c.MINI_GAME;
    e.ageTipType = u.AGE_16;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var F = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $xM.XM;
    e.flag = "wdggxm";
    e.version = "1.1.5";
    e.appID = "2882303761520177155";
    e.bannerID = "a50b2ff21bbe25f1fc675ac7fd411e91";
    e.rewardID = "188792c0e2bd130df5a692700c1894c7";
    e.insertID = "097adfd4ff885bef023334f45f3c7fa1";
    e.nativeID = "";
    e.ageTipType = u.AGE_16;
    e.boxID = "";
    e.fitUIType = s.TT;
    e.hasCopyright = 1;
    e.privacyPolicyType = c.MINI_GAME_XM;
    e.company = "广州卓讯";
    e.email = "zhuoxunhudong-kf@qq.com";
    e.address = "广州市天河区珠江东路30号601室(部位:自编B单元)";
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var j = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $vIVO.VIVO;
    e.flag = "wlgczvivo";
    e.version = "1.0.1";
    e.appID = "105660562";
    e.bannerID = "21955b5d2b694b6fa553aaa605171d28";
    e.rewardID = "a255dc2523f64706bb9eb09e0c16633f";
    e.nativeID = "";
    e.insertID = "051f9c2dfb8b4678bf8c75f828d2cf1d";
    e.boxID = "";
    e.fitUIType = s.TT;
    e.hasCopyright = 1;
    e.privacyPolicyType = c.MINI_GAME_VIVO;
    e.customAd_topImg_bottomText = "018042ead8b049eaa3d0f6262d343c68";
    e.customAd_leftImg_rightText = "71d0803f5a4e47f9b58974feaf660184";
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var V = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $qQ.QQ;
    e.flag = "wdggqq";
    e.version = "1.1.0";
    e.appID = "1112223440";
    e.bannerID = "ff62f60a3d7b194a8c1a4fedfcfb25a8";
    e.rewardID = "15631c3036ac6280fdb371f9bb6f0124";
    e.insertID = "c3b4467306fa6ccd4b6b293c649e5cbd";
    e.fitUIType = s.TT;
    e.hasCopyright = 1;
    e.privacyPolicyType = c.MINI_GAME;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var H = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $wX.WX;
    e.flag = "wlgczwx2";
    e.version = "1.0.1";
    e.appID = "wxb5f506d7c427c834";
    e.bannerID = "";
    e.rewardID = "";
    e.insertID = "";
    e.blockID = "";
    e.blockID2 = "";
    e.fitUIType = s.TT;
    e.hasShare = 1;
    e.rank = "wx2";
    return e;
  }

  __extends(e, t);

  return e;
}(P);

var q = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.platformClass = $hW["default"];
    e.flag = "wdgghw";
    e.version = "1.1.0";
    e.appID = "106706891";
    e.bannerID = "x7z0llr5fc";
    e.rewardID = "h3p62ppoik";
    e.insertID = "f30g2ec9m7";
    e.fitUIType = s.TT;
    e.privacyPolicyType = c.MINI_GAME;
    e.loginType = l.HW;
    e.hasCopyright = 1;
    return e;
  }

  __extends(e, t);

  return e;
}(P);

exports.PlatformConfig = ((o = {})[a.WEB] = P, o[a.TT] = L, o[a.OPPO] = x, o[a.XIAOMI] = F, o[a.VIVO] = j, o[a.KS] = N, o[a.WX] = H, o[a.HW] = q, o[a.QQ] = V, o[a.IOS] = O, o[a.IOS_HAIWAI] = R, o[a.ANDROID] = T, o[a.ANDROID_GOOGLE] = A, o[a.OPPO_ANDROID] = B, o[a.VIVO_ANDROID] = E, o[a.XIAOMI_ANDROID] = U, o[a.OHAYOO_ANDROID] = D, o[a.HUAWEI_ANDROID] = I, o);

cc._RF.pop();