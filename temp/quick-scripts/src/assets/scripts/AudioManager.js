"use strict";
cc._RF.push(module, 'c843dkp+89EnK8NseHJe9h5', 'AudioManager');
// scripts/AudioManager.js

"use strict";

exports.Audio = void 0;

var $audioConst = require("./AudioConst");

var a = function () {
  function t() {
    this.node = null;
    this.musicMute = 0;
    this.effectMute = 0;
    this.zhenDongMute = 0;
    this.effectVolume = 1;
    this.musicVolume = 1;
    this.musicAs = null;
    this.effectAs = [];
    this.curAs = 0;
    this.pathPrefix = "audio/";
    this.currentBgm = null;
  }

  t.prototype.readLocalAudio = function () {
    var t = cc.sys.localStorage.getItem("musicMute");

    if (t) {
      t = parseInt(t);
    } else {
      t = 0;
    }

    this.musicMute = t;
    var e = cc.sys.localStorage.getItem("effectMute");

    if (e) {
      e = parseInt(e);
    } else {
      e = 0;
    }

    this.effectMute = e;
    var n = cc.sys.localStorage.getItem("zhenDongMute");

    if (n) {
      n = parseInt(n);
    } else {
      n = 0;
    }

    this.zhenDongMute = n;
    cc.sys.localStorage.setItem("musicMute", this.musicMute);
    cc.sys.localStorage.setItem("effectMute", this.effectMute);
    cc.sys.localStorage.setItem("zhenDongMute", this.zhenDongMute);
    window.musicMute = this.musicMute;
    window.effectMute = this.effectMute;
    window.zhenDongMute = this.zhenDongMute;
  };

  t.prototype.init = function () {
    this.readLocalAudio();
    this.node = cc.find("Canvas");
    this.musicAs = this.node.addComponent(cc.AudioSource);
    this.musicAs.volume = this.musicVolume;

    if (1 === this.musicMute) {
      this.musicAs.volume = 0;
    }

    for (var t = 0; t < 8; t++) {
      var e = this.node.addComponent(cc.AudioSource);
      this.effectAs.push(e);
      e.volume = this.effectVolume;

      if (1 === this.effectMute) {
        e.volume = 0;
      }
    }

    this.curAs = 0;
    cc.game.on("playClickAudio", this.playClickAudio, this);
    cc.game.on("set_music_mute", this.setMusicMute, this);
    cc.game.on("set_effect_mute", this.setEffectMute, this);
    cc.game.on("set_zhendong_mute", this.setZhenDongMute, this);
  };

  t.prototype.playClickAudio = function () {
    this.playEffect($audioConst.AudioConst.CLICK);
  };

  t.prototype.getMusicVolume = function () {
    return this.musicVolume;
  };

  t.prototype.setMusicVolume = function (t) {
    this.musicVolume = t;
    this.musicAs.volume = t;
    cc.sys.localStorage.setItem("musicVolume", t);
  };

  t.prototype.getMusicMute = function () {
    return this.musicMute;
  };

  t.prototype.setMusicMute = function (t) {
    var e;

    if (t) {
      e = 1;
    } else {
      e = 0;
    }

    if (this.musicMute != e) {
      this.musicMute = e;

      if (1 === this.musicMute) {
        this.musicAs.volume = 0;
      } else {
        this.musicAs.volume = this.musicVolume;
      }

      cc.sys.localStorage.setItem("musicMute", e);
      window.musicMute = this.musicMute;
    }
  };

  t.prototype.getEffectVolume = function () {
    return this.effectVolume;
  };

  t.prototype.setEffectVolume = function (t) {
    for (var e = 0; e < this.effectAs.length; e++) {
      this.effectAs[e].volume = t;
    }

    this.effectVolume = t;
    cc.sys.localStorage.setItem("effectVolume", t);
  };

  t.prototype.getEffectMute = function () {
    return this.effectMute;
  };

  t.prototype.setEffectMute = function (t) {
    var e;

    if (t) {
      e = 1;
    } else {
      e = 0;
    }

    if (this.effectMute != e) {
      this.effectMute = e;

      for (var n = 0; n < this.effectAs.length; n++) {
        if (1 === this.effectMute) {
          this.effectAs[n].volume = 0;
        } else {
          this.effectAs[n].volume = this.effectVolume;
        }
      }

      cc.sys.localStorage.setItem("effectMute", e);
      window.effectMute = this.effectMute;
    }
  };

  t.prototype.getZhenDongMute = function () {
    return this.zhenDongMute;
  };

  t.prototype.setZhenDongMute = function (t) {
    var e;

    if (t) {
      e = 1;
    } else {
      e = 0;
    }

    if (this.zhenDongMute != e) {
      this.zhenDongMute = e;
      cc.sys.localStorage.setItem("zhenDongMute", e);
      window.zhenDongMute = this.zhenDongMute;
    }
  };

  t.prototype.playMusic = function (t, e) {
    if (void 0 === t) {
      t = "bgm";
    }

    if (void 0 === e) {
      e = !0;
    }

    return __awaiter(this, void 0, void 0, function () {
      var n;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            this.stopMusic();
            this.currentBgm = t;
            e = !!e;
            this.musicAs.loop = e;
            n = this.musicAs;
            return [4, this.load(t)];

          case 1:
            n.clip = r.sent();

            if (this.musicAs.clip) {
              this.musicAs.play();
            } else {
              cc.error("music audio clip null: ", t);
            }

            return [2];
        }
      });
    });
  };

  t.prototype.load = function (t) {
    return new Promise(function (e, n) {
      cc.resources.load(t, function (t, r) {
        if (t) {
          return cc.error(t), n();
        } else {
          return e(r);
        }
      });
    });
  };

  t.prototype.stopMusic = function () {
    this.musicAs.stop();
  };

  t.prototype.playEffect = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var n;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            e = this.effectAs[this.curAs];
            this.curAs++;

            if (this.curAs >= 8) {
              this.curAs = 0;
            }

            n = e;
            return [4, this.load(t)];

          case 1:
            n.clip = r.sent();

            if (e.clip) {
              if ($audioConst.AudioConst.DOWN == t) {
                setTimeout(function () {
                  e.play();
                }, 300);
              } else {
                e.play();
              }
            } else {
              cc.error("effect audio clip null: ", t);
            }

            return [2];
        }
      });
    });
  };

  return t;
}();

exports.Audio = new a();

cc._RF.pop();