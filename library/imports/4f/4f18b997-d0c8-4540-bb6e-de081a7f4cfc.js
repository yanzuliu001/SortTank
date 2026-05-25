"use strict";
cc._RF.push(module, '4f18bmX0MhFQLtu3ggaf0z8', 'RankItem');
// scripts/RankItem.js

"use strict";

var r;
var a;
var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

(function (t) {
  t[t.Normal = 0] = "Normal";
  t[t.Finish = 1] = "Finish";
  t[t.Lock = 2] = "Lock";
})(a || (a = {}));

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.ranking = null;
    e.score = null;
    e.province = null;
    e.bgSpriteFrame = [];
    e.rankingBgSpriteFrame = [];
    e.param = null;
    e.state = null;
    e.starAmount = 0;
    e.skinNameArr = [];
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {};

  e.prototype.setData = function (t) {
    this.param = t;
    this.node.zIndex = this.param.index;
    this.refresh();
  };

  e.prototype.refresh = function () {
    var t = this.param.index + 1;
    this.ranking.string = "" + t;
    this.score.string = "" + this.param.score;
    this.province.string = "" + this.param.province;

    if (this.param.province.includes("UNKNOW")) {
      this.province.string = "其他";
    }

    if ("null" != this.param.province && null != this.param.province) {//
    } else {
      this.province.string = "其他";
    }

    if (this.param.index > 2) {
      this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame[3];
      this.node.getChildByName("rankingBg").getComponent(cc.Sprite).spriteFrame = this.rankingBgSpriteFrame[3];
      this.ranking.node.active = !0;
      this.node.getChildByName("rankingBg").active = !1;
    } else {
      this.ranking.node.active = !1;
      this.node.getChildByName("rankingBg").active = !0;
      this.node.getChildByName("bg").getComponent(cc.Sprite).spriteFrame = this.bgSpriteFrame[this.param.index];
      this.node.getChildByName("rankingBg").getComponent(cc.Sprite).spriteFrame = this.rankingBgSpriteFrame[this.param.index];
    }
  };

  e.state = a;

  __decorate([l(cc.Label)], e.prototype, "ranking", void 0);

  __decorate([l(cc.Label)], e.prototype, "score", void 0);

  __decorate([l(cc.Label)], e.prototype, "province", void 0);

  __decorate([l([cc.SpriteFrame])], e.prototype, "bgSpriteFrame", void 0);

  __decorate([l([cc.SpriteFrame])], e.prototype, "rankingBgSpriteFrame", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = u;

cc._RF.pop();