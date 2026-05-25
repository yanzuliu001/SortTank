"use strict";
cc._RF.push(module, '33b68u7R09F36epuHG+j3TN', 'ToastManager');
// scripts/ToastManager.js

"use strict";

var $assetManager = require("./AssetManager");

var a = new (function () {
  function t() {
    this.prefab = null;
  }

  t.prototype.show = function (t, e) {
    if (void 0 === e) {
      e = 0.8;
    }

    return __awaiter(this, void 0, void 0, function () {
      var n;
      var r;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            if (this.prefab) {
              return [3, 2];
            } else {
              return n = this, [4, $assetManager["default"].getRes("bundle", "prefab/Toast", cc.Prefab)];
            }

          case 1:
            n.prefab = o.sent();
            o.label = 2;

          case 2:
            r = cc.instantiate(this.prefab);
            cc.find("Canvas").addChild(r);
            r.getChildByName("text").getComponent(cc.Label).string = t;
            r.active = !0;
            r.stopAllActions();
            r.setPosition(cc.v2(0, -60));
            r.opacity = 0;
            cc.tween(r).by(0.3, {
              position: cc.v3(0, 60, 0),
              opacity: 255
            }).delay(e).by(0.3, {
              position: cc.v3(0, 60, 0),
              opacity: -255
            }).call(function () {
              r.destroy();
            }).start();
            return [2];
        }
      });
    });
  };

  return t;
}())();
exports["default"] = a;

cc._RF.pop();