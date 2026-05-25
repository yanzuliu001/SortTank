"use strict";
cc._RF.push(module, '6bb816Q0RlAo6D++7loEDgC', 'Comment');
// scripts/Comment.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $platformConst = require("./PlatformConst");

var $userConst = require("./UserConst");

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $stars = require("./Stars");

var $xMADUtils = require("./XMADUtils");

var $languageManager = require("./LanguageManager");

var y = cc._decorator;
var v = y.ccclass;
var w = y.property;

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.stars = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("giveUpBtn", this.clickGiveUp, this);
    this.addBtnOn("define", this.clickDefine, this);
    this.initView();
  };

  e.prototype.onEnable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showBannerFeed();
    }
  };

  e.prototype.onDisable = function () {};

  e.prototype.initView = function () {};

  e.prototype.clickGiveUp = function () {
    $popupManager["default"].hide();
  };

  e.prototype.clickDefine = function () {
    if (this.stars.isTouch) {
      var t = this.stars.starNum;
      this.stars.setCanMark(!1);
      var e = $bmsManager.BMS.getKey("evaluatestar");
      console.log("starNum", t);
      console.log("showNum", e);

      if (t >= e) {
        $platformManager.Platform.gameComment();
      }

      $userManager.User.set($userConst.UserData.IS_COMMENT, 1);
      $tipManager.Tip.show($languageManager["default"].formatStr("评分成功。"));
      $popupManager["default"].hide();
    } else {
      $tipManager.Tip.show($languageManager["default"].formatStr("请先评分!"));
    }
  };

  __decorate([w($stars["default"])], e.prototype, "stars", void 0);

  return __decorate([v], e);
}($baseUI["default"]);

exports["default"] = _;

cc._RF.pop();