"use strict";
cc._RF.push(module, '1b6e0dFI/FEfoLU7W3FLKWv', 'ModeSelect');
// scripts/ModeSelect.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $recycleScroll = require("./RecycleScroll");

var $audioConst = require("./AudioConst");

var $configConst = require("./ConfigConst");

var $eventConst = require("./EventConst");

var $platformConst = require("./PlatformConst");

var $sceneConst = require("./SceneConst");

var $userConst = require("./UserConst");

var $audioManager = require("./AudioManager");

var $configManager = require("./ConfigManager");

var $eventManager = require("./EventManager");

var $platformManager = require("./PlatformManager");

var $resManager = require("./ResManager");

var $sceneManager = require("./SceneManager");

var $userManager = require("./UserManager");

var $modeSelectItem = require("./ModeSelectItem");

var $xMADUtils = require("./XMADUtils");

var M = cc._decorator;
var P = M.ccclass;
var T = M.property;

var A = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.scroll = null;
    e._data = null;
    e.itemsData = [];
    e.childrenLength = 6;
    e.isLoadingScene = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.initView();
  };

  e.prototype.onEnable = function () {
    $eventManager.Event.on($eventConst["default"].CLICK_BACK, this.clickBack, this);

    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showLargeFeed();
    }
  };

  e.prototype.onDisable = function () {
    $eventManager.Event.off($eventConst["default"].CLICK_BACK, this.clickBack, this);

    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.removeLargePicFeed();
    }
  };

  e.prototype.initView = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var r;
      var o;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, $configManager.Config.get($configConst.ConfigConst.THEME)];

          case 1:
            t = i.sent();
            e = [];

            if (2 == this._data) {
              for (n = 0; n < t.length; n++) {
                if (0 != n) {
                  e.push(t[n]);
                }
              }
            } else {
              for (n = 0; n < t.length; n++) {
                if (t[n].isHot) {
                  e.push(t[n]);
                }
              }
            }

            $userManager.User.setTempData($userConst.TempData.CURRENT_ALL_MODE, e);
            this.itemsData = e;
            this.scroll.onItemRender = this.onItemRender.bind(this);
            this.scroll.onItemClicked = this.onItemClicked.bind(this);
            this.scroll.numItems = this.itemsData.length;
            return [4, $resManager.Res.load("prefab/item/TopBar")];

          case 2:
            r = i.sent();
            o = cc.instantiate(r);
            this.node.addChild(o);
            $audioManager.Audio.playMusic($audioConst.AudioConst.BGM_MAIN);

            if (2 == this._data) {
              cc.game.emit("gamelog", "page013");
            } else {
              cc.game.emit("gamelog", "page012");
            }

            return [2];
        }
      });
    });
  };

  e.prototype.onItemRender = function (t, e) {
    var n = e.getComponent($modeSelectItem["default"]);
    var r = ($modeSelectItem["default"].state.Normal, {
      index: t,
      data: this.itemsData[t]
    });
    n.setData(r);
  };

  e.prototype.onItemClicked = function () {
    console.log("测试点鸡蛋");
  };

  e.prototype.clickBack = function () {
    if (this.isLoadingScene) {//
    } else {
      this.isLoadingScene = !0;

      if (2 == this._data) {
        cc.game.emit("gamelog", "btn010");
      } else {
        cc.game.emit("gamelog", "btn009");
      }

      $sceneManager["default"].loadScene($sceneConst.SceneConst.MAIN);
    }
  };

  __decorate([T($recycleScroll["default"])], e.prototype, "scroll", void 0);

  return __decorate([P], e);
}($baseUI["default"]);

exports["default"] = A;

cc._RF.pop();