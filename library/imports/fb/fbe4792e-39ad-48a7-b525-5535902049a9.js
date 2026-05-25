"use strict";
cc._RF.push(module, 'fbe47kuOa1Ip7UlVTWQIEmp', 'HomeItem');
// scripts/HomeItem.js

"use strict";

var r;
var a;

var $languageManager = require("./LanguageManager");

var $platformManager = require("./PlatformManager");

var $utils = require("./Utils");

var u = cc._decorator;
var f = u.ccclass;
var d = u.property;

(function (t) {
  t[t.Normal = 0] = "Normal";
  t[t.Finish = 1] = "Finish";
  t[t.Lock = 2] = "Lock";
})(a || (a = {}));

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ranking = null;
    e.score = null;
    e.province = null;
    e.roleRoot = null;
    e.bgSpriteFrame = [];
    e.param = null;
    e.state = null;
    e.starAmount = 0;
    e.skinNameArr = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.skinNameArr = new Array(8).fill("skin_").map(function (t, e) {
      return t + (e + 1);
    });
  };

  e.prototype.setData = function (t) {
    this.param = t;
    this.node.zIndex = this.param.index;
    this.refresh();
  };

  e.prototype.refresh = function () {
    var t = this;
    var e = this.param.index + 1;
    this.ranking.string = $languageManager["default"].formatStr("第%d名", e);
    this.score.string = "" + this.param.score;
    this.province.string = this.param.province + "队";

    if ($platformManager.Platform.getConfig().rank.includes("haiwai")) {
      this.province.string = "" + this.param.province;
    }

    if (this.param.province.includes("UNKNOW")) {
      this.province.string = "其他队";
    }

    if ("null" != this.param.province && null != this.param.province) {//
    } else {
      this.province.string = "其他队";
    }

    this.roleRoot.children.forEach(function (e) {
      e.active = !1;
      var n = e.children[0].getComponent(sp.Skeleton);

      if (Number(e.name) + 1 <= t.param.score) {
        e.active = !0;
        var r = t.skinNameArr[$utils.Utils.randomNum(0, 7)];
        n.setSkin(r);
        n.defaultSkin = r;
      }
    });

    if (this.param.index > 2) {
      this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame[3];
    } else {
      this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame[this.param.index];
    }
  };

  e.state = a;

  __decorate([d(cc.Label)], e.prototype, "ranking", void 0);

  __decorate([d(cc.Label)], e.prototype, "score", void 0);

  __decorate([d(cc.Label)], e.prototype, "province", void 0);

  __decorate([d(cc.Node)], e.prototype, "roleRoot", void 0);

  __decorate([d([cc.SpriteFrame])], e.prototype, "bgSpriteFrame", void 0);

  return __decorate([f], e);
}(cc.Component);

exports["default"] = h;

cc._RF.pop();