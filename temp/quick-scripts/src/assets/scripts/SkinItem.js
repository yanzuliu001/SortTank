"use strict";
cc._RF.push(module, 'a6774MyXflH5IE8UU48BiFO', 'SkinItem');
// scripts/SkinItem.js

"use strict";

var r;
var c;

var $userManager = require("./UserManager");

var $uIBase = require("./UIBase");

var $assetManager = require("./AssetManager");

var $configManager = require("./ConfigManager");

var $configConst = require("./ConfigConst");

var $platformManager = require("./PlatformManager");

var $localStorageManager = require("./LocalStorageManager");

var $localStorageConst = require("./LocalStorageConst");

var $tipManager = require("./TipManager");

var v = cc._decorator;
var w = v.ccclass;
v.property;

(function (t) {
  t[t.lockByRole = 0] = "lockByRole";
  t[t.lockByCoin = 1] = "lockByCoin";
  t[t.lockByVideo = 2] = "lockByVideo";
  t[t.unlockNoUse = 3] = "unlockNoUse";
  t[t.unlockUse = 4] = "unlockUse";
})(c || (c = {}));

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.param = null;
    e.state = c.lockByRole;
    e.starAmount = 0;
    e.skinType = 0;
    e.cost = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
  };

  e.prototype.setData = function (t, e) {
    if (void 0 === e) {
      e = 0;
    }

    this.param = t;
    this.node.zIndex = this.param.index;
    this.state = this.param.eState;
    this.skinType = e;
    this.refresh();
  };

  e.prototype.refresh = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var r;
      var o;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            t = this.param.skinID;
            this.dict.lockByRole.active = !1;
            this.dict.lockByCoin.active = !1;
            this.dict.lockByVideo.active = !1;
            this.dict.unlockNoUse.active = !1;
            this.dict.unlockUse.active = !1;
            e = 0 == this.skinType ? "texture/skin/role" + t : "texture/skin/dragon" + t;
            return [4, $assetManager["default"].getRes("gameBundle", e, cc.Texture2D)];

          case 1:
            n = i.sent();
            this.dict.icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
            return 0 != this.skinType ? [3, 3] : [4, $configManager.Config.get($configConst.ConfigConst.Skin)];

          case 2:
            r = i.sent();
            return [3, 5];

          case 3:
            return [4, $configManager.Config.get($configConst.ConfigConst.Dragon)];

          case 4:
            r = i.sent();
            i.label = 5;

          case 5:
            switch (this.dict.name.getComponent(cc.Label).string = r.find(function (e) {
              return e.id - 1 == t;
            }).skinName, this.state) {
              case c.lockByRole:
                this.dict.lockByRole.active = !0;
                this.cost = r.find(function (e) {
                  return e.id - 1 == t;
                }).unlock;
                this.dict.roleLevel.getComponent(cc.Label).string = "角色" + this.cost + "级解锁";
                break;

              case c.lockByCoin:
                this.dict.lockByCoin.active = !0;
                this.cost = r.find(function (e) {
                  return e.id - 1 == t;
                }).unlock;
                this.dict.coinText.getComponent(cc.Label).string = this.cost + "";
                break;

              case c.lockByVideo:
                if ((o = $localStorageManager["default"].get($localStorageConst["default"].SkinUnlockVideo) || {})[t]) {//
                } else {
                  o[t] = 0;
                }

                this.dict.lockByVideo.active = !0;
                this.cost = r.find(function (e) {
                  return e.id - 1 == t;
                }).unlock;
                this.dict.videoText.getComponent(cc.Label).string = o[t] + "/" + this.cost;
                break;

              case c.unlockNoUse:
                this.dict.unlockNoUse.active = !0;
                break;

              case c.unlockUse:
                this.dict.unlockUse.active = !0;
            }

            return [2];
        }
      });
    });
  };

  e.prototype.clickEnter = function () {
    var t = this;
    $userManager.User.setTempData("chooseSkinPage", 0);
    $userManager.User.setTempData("chooseSkin", this.param.skinID);
    var e = $localStorageManager["default"].get($localStorageConst["default"].SkinList) || {};

    if (e[0]) {//
    } else {
      e[0] = [0];
    }

    if (e[1]) {//
    } else {
      e[1] = [0];
    }

    var n = $localStorageManager["default"].get($localStorageConst["default"].UseSkin) || {};

    if (n[0]) {//
    } else {
      n[0] = 0;
    }

    if (n[1]) {//
    } else {
      n[1] = 0;
    }

    switch (this.state) {
      case c.lockByRole:
        break;

      case c.lockByCoin:
        var r = $localStorageManager["default"].get($localStorageConst["default"].Coin) || 0;

        if (!(r >= this.cost)) {
          return $tipManager.Tip.show("金币不足！");
        }

        r -= this.cost;
        e[this.skinType].push(this.param.skinID);
        $localStorageManager["default"].set($localStorageConst["default"].Coin, r);
        break;

      case c.lockByVideo:
        $platformManager.Platform.showRewardAds(function (n) {
          if (0 == n) {
            var r = $localStorageManager["default"].get($localStorageConst["default"].SkinUnlockVideo) || {};

            if (r[t.param.skinID]) {//
            } else {
              r[t.param.skinID] = 0;
            }

            r[t.param.skinID] += 1;

            if (r[t.param.skinID] >= t.cost) {
              e[t.skinType].push(t.param.skinID);
            }

            $localStorageManager["default"].set($localStorageConst["default"].SkinUnlockVideo, r);
          }
        });
        break;

      case c.unlockNoUse:
        n[this.skinType] = this.param.skinID;
        break;

      case c.unlockUse:
    }

    $localStorageManager["default"].set($localStorageConst["default"].SkinList, e);
    $localStorageManager["default"].set($localStorageConst["default"].UseSkin, n);
    this.refresh();
  };

  e.state = c;
  return __decorate([w], e);
}($uIBase["default"]);

exports["default"] = _;

cc._RF.pop();