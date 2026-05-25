"use strict";
cc._RF.push(module, '82609iuVnlJgrfh978tkuTD', 'AudioSwitch');
// scripts/AudioSwitch.js

"use strict";

var r;

var $audioManager = require("./AudioManager");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var u = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.type = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    if (0 === this.type) {
      this.musicMute = $audioManager.Audio.getMusicMute();

      if (this.musicMute) {
        console.log("静音"), this.node.getChildByName("off").active = !0, this.node.getChildByName("on").active = !1;
      } else {
        console.log("有音"), this.node.getChildByName("off").active = !1, this.node.getChildByName("on").active = !0;
      }
    } else {
      if (1 === this.type) {
        this.effectMute = $audioManager.Audio.getEffectMute(), this.effectMute ? (this.node.getChildByName("off").active = !0, this.node.getChildByName("on").active = !1) : (this.node.getChildByName("off").active = !1, this.node.getChildByName("on").active = !0);
      } else {
        this.zhendongMute = $audioManager.Audio.getZhenDongMute(), this.zhendongMute ? (this.node.getChildByName("off").active = !0, this.node.getChildByName("on").active = !1) : (this.node.getChildByName("off").active = !1, this.node.getChildByName("on").active = !0);
      }
    }
  };

  e.prototype.switchHandle = function () {
    var t;

    if (0 === this.type) {
      if ($audioManager.Audio.getMusicMute()) {
        t = 0;
      } else {
        t = 1;
      }

      console.log("测试", this.musicMute, t);
      cc.game.emit("set_music_mute", t);
    } else {
      if (1 === this.type) {
        console.log("this.effectMute", this.effectMute), t = $audioManager.Audio.getEffectMute() ? 0 : 1, cc.game.emit("set_effect_mute", t);
      } else {
        console.log("this.effectMute", this.zhendongMute), t = $audioManager.Audio.getZhenDongMute() ? 0 : 1, cc.game.emit("set_zhendong_mute", t);
      }
    }

    if (0 == this.type) {
      console.log("b_mute", this.type, t);
    }

    if (t) {
      this.node.getChildByName("off").active = !0;
      this.node.getChildByName("on").active = !1;
    } else {
      this.node.getChildByName("off").active = !1;
      this.node.getChildByName("on").active = !0;
    }
  };

  __decorate([l], e.prototype, "type", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = u;

cc._RF.pop();