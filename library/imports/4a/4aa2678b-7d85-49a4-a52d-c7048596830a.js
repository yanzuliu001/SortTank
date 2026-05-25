"use strict";
cc._RF.push(module, '4aa26eLfYVJpKUtxwSFloMK', 'FrameAnim');
// scripts/FrameAnim.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.spriteFrames = [];
    e.duration = 0.1;
    e.loop = !1;
    e.playOnload = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this.node.getComponent(cc.Sprite);

    if (t) {//
    } else {
      t = this.node.addComponent(cc.Sprite);
    }

    this.sprite = t;
    this.isPlaying = !1;
    this.playTime = 0;
    this.isLoop = !1;
    this.endFunc = null;

    if (this.spriteFrames.length > 0) {
      this.sprite.spriteFrame = this.spriteFrames[0];
    }

    if (this.playOnload) {
      if (this.loop) {
        this.playLoop();
      } else {
        this.playOnce(null);
      }
    }
  };

  e.prototype.playOnce = function (t) {
    this.playTime = 0;
    this.isPlaying = !0;
    this.isLoop = !1;
    this.endFunc = t;
  };

  e.prototype.playLoop = function () {
    this.playTime = 0;
    this.isPlaying = !0;
    this.isLoop = !0;
  };

  e.prototype.stopAnim = function () {
    this.playTime = 0;
    this.isPlaying = !1;
    this.isLoop = !1;
  };

  e.prototype.resetFrame = function () {
    if (this.spriteFrames.length > 0) {
      this.sprite.spriteFrame = this.spriteFrames[0];
    }
  };

  e.prototype.update = function (t) {
    if (!1 !== this.isPlaying) {
      this.playTime += t;
      var e = Math.floor(this.playTime / this.duration);

      if (!1 === this.isLoop) {
        if (e >= this.spriteFrames.length) {
          this.sprite.spriteFrame = this.spriteFrames[this.spriteFrames.length - 1];
          this.isPlaying = !1;
          this.playTime = 0;
          return void (this.endFunc && this.endFunc());
        }

        this.sprite.spriteFrame = this.spriteFrames[e];
      } else {
        for (; e >= this.spriteFrames.length;) {
          e -= this.spriteFrames.length;
          this.playTime -= this.duration * this.spriteFrames.length;
        }

        this.sprite.spriteFrame = this.spriteFrames[e];
      }
    }
  };

  __decorate([c([cc.SpriteFrame])], e.prototype, "spriteFrames", void 0);

  __decorate([c], e.prototype, "duration", void 0);

  __decorate([c], e.prototype, "loop", void 0);

  __decorate([c], e.prototype, "playOnload", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

cc._RF.pop();