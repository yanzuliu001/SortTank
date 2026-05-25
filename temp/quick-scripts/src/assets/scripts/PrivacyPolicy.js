"use strict";
cc._RF.push(module, '54796Q0mcBMPJgLsk+nONv0', 'PrivacyPolicy');
// scripts/PrivacyPolicy.js

"use strict";

var r;

var $platformManager = require("./PlatformManager");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;
var u = window.qq;

var f = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.nodeUserPanel = null;
    e.nodePrivacyPanel = null;
    e.nodeUserButton = null;
    e.nodeUserAnd = null;
    e.func = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = $platformManager.Platform.getConfig().company;
    var e = $platformManager.Platform.getConfig().email;
    var n = $platformManager.Platform.getConfig().address;

    for (var r = 0; r < this.nodeUserPanel.children[0].children[0].childrenCount; r++) {
      i = (i = (i = (i = (i = (i = (i = (o = this.nodeUserPanel.children[0].children[0].children[r]).getComponent(cc.Label).string.replace(/\u6d77\u5357\u4e50\u679c\u4e92\u5a31/g, t)).replace(/\u4e50\u679c\u4e92\u5a31/g, t)).replace(/\u4e50\u679c\u6e38\u620f/g, t)).replace(/\u4e50\u679c/g, t)).replace(/\u4e50\u679c/g, t)).replace(/leguo-kf@foxmail.com/g, e)).replace(/\u5e7f\u5dde\u5e02\u5929\u6cb3\u533a\u73e0\u6c5f\u65b0\u57ce\u73e0\u6c5f\u4e1c\u8def30\u53f7\u5e7f\u5dde\u94f6\u884c\u5927\u53a6601A/g, n);
      o.getComponent(cc.Label).string = i;
    }

    for (r = 0; r < this.nodePrivacyPanel.children[0].children[0].childrenCount; r++) {
      var o;
      var i;

      if ((o = this.nodePrivacyPanel.children[0].children[0].children[r]).getComponent(cc.Label)) {
        i = (i = (i = o.getComponent(cc.Label).string.replace(/\u5e7f\u5dde\u5c0f\u8d1d/g, t)).replace(/xiaobei-kf@foxmail.com/g, e)).replace(/\u5e7f\u5dde\u5e02\u5929\u6cb3\u533a\u73e0\u6c5f\u4e1c\u8def 30\u53f7601\u623f/g, n);
        o.getComponent(cc.Label).string = i;
      }
    }

    if (void 0 !== window.qq) {
      this.nodeUserButton.active = !0;
      this.nodeUserAnd.active = !0;
    }
  };

  e.prototype.open = function (t) {
    this.func = t;

    if (this.func) {//
    } else {
      this.openPrivacyPanelHandle();
    }
  };

  e.prototype.acceptHandle = function () {
    if (this.func) {
      this.func();
    }

    this.func = null;
    cc.sys.localStorage.setItem("superBrain_privacypolicy", 1);
    this.node.destroy();
  };

  e.prototype.refuseHandle = function () {
    if (window.qq) {
      if (u) {
        u.exitMiniProgram();
      } else {
        cc.game.end();
      }
    } else {
      if (void 0 !== window.qg) {
        window.qg.exitApplication({});
      } else {
        cc.game.end();
      }
    }
  };

  e.prototype.openUserPanelHandle = function () {
    this.nodeUserPanel.active = !0;
    this.nodeUserPanel.getComponent(cc.ScrollView).scrollToTop(0);
  };

  e.prototype.openPrivacyPanelHandle = function () {
    this.nodePrivacyPanel.active = !0;
    this.nodePrivacyPanel.getComponent(cc.ScrollView).scrollToTop(0);
  };

  e.prototype.closeHandle = function () {
    if (this.func) {
      this.nodePrivacyPanel.active = !1;
      this.nodeUserPanel.active = !1;
    } else {
      this.node.destroy();
    }
  };

  __decorate([l(cc.Node)], e.prototype, "nodeUserPanel", void 0);

  __decorate([l(cc.Node)], e.prototype, "nodePrivacyPanel", void 0);

  __decorate([l(cc.Node)], e.prototype, "nodeUserButton", void 0);

  __decorate([l(cc.Node)], e.prototype, "nodeUserAnd", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = f;

cc._RF.pop();