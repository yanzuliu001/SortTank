"use strict";
cc._RF.push(module, 'e4cd4LM451KiKxw25hI2P/t', 'Set');
// scripts/Set.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $sceneConst = require("./SceneConst");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $sceneManager = require("./SceneManager");

var $localStorageManager = require("./LocalStorageManager");

var $localStorageConst = require("./LocalStorageConst");

var $shuShuConst = require("./ShuShuConst");

var $userManager = require("./UserManager");

var $userConst = require("./UserConst");

var g = cc._decorator;
var y = g.ccclass;
var v = (g.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("continueBtn", this.noBtn, this);
    this.addBtnOn("backHomeBtn", this.backHomeBtn, this);

    if ($sceneManager["default"].getCurrentScene() == $sceneConst.SceneConst.GAME) {
      this.dict.continueBtn.active = !0;
      this.dict.backHomeBtn.active = !0;
      this.dict.heroLevelBtn.active = !0;
    }

    this.dict.recordNumber.getComponent(cc.Label).string = "" + $platformManager.Platform.getConfig().recordNumber;
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.onEnable = function () {
    if (game.dragonMoving) {
      game.dragonMoving = !1;
    }
  };

  e.prototype.onDisable = function () {
    if (game.dragonMoving) {//
    } else {
      game.dragonMoving = !0;
    }
  };

  e.prototype.continueBtn = function () {
    $sceneManager["default"].loadScene($sceneConst.SceneConst.Home);
  };

  e.prototype.backHomeBtn = function () {
    if (!$localStorageManager["default"].get($localStorageConst["default"].IsNoFirstBack)) {
      $localStorageManager["default"].set($localStorageConst["default"].IsNoFirstBack, 1);
      var t = window.levelContent._components[0].allPersonAmount;
      var e = window.levelContent._components[0].allPersonAmount2;
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.First_Progress, {
        lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
        mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
        queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
        type: 3,
        progress: (e - t) / e,
        sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
      });
    }

    var n = $userManager.User.getTempData("levelTime");
    var r = (new Date().getTime() - n) / 1e3;
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Level_Return, {
      lv: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID),
      mode: $userManager.User.getTempData($userConst.TempData.CURRENT_MODE),
      queue: $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL),
      times: r,
      sort: $localStorageManager["default"].get($localStorageConst["default"].ConfigSuffix)
    });
    $sceneManager["default"].loadScene($sceneConst.SceneConst.Home);
  };

  return __decorate([y], e);
}($baseUI["default"]));
exports["default"] = v;

cc._RF.pop();