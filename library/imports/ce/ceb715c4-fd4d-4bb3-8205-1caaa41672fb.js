"use strict";
cc._RF.push(module, 'ceb71XE/U1Ls4IFHKqkFnL7', 'AddHomeBtn');
// scripts/AddHomeBtn.js

"use strict";

var r;

var $tipManager = require("./TipManager");

var $shuShuConst = require("./ShuShuConst");

var c = cc._decorator;
var l = c.ccclass;
var u = (c.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.start = function () {
    this.node.active = !1;

    if (window.tt) {
      var t = this;
      var e = window.tt;

      if (!e.checkShortcut) {
        return console.error("## 字节用户版本过低，没有添加桌面功能");
      }

      e.checkShortcut({
        success: function success(e) {
          console.log("## 检查快捷方式  res.status： ", JSON.stringify(e.status));

          if (0 != e.status.exist && 1 != e.status.needUpdate) {//
          } else {
            t.node.active = !0;
          }
        },
        fail: function fail(t) {
          console.log("## 检查快捷方式失败", JSON.stringify(t.errMsg));
        }
      });
    }
  };

  e.prototype.btnClick_addHome = function () {
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.btn, {
      id: "011"
    });
    var t = this;
    window.tt.addShortcut({
      success: function success() {
        t.node.active = !1;
        console.log("## 添加桌面成功");
        $tipManager.Tip.show("添加桌面成功");
      },
      fail: function fail(t) {
        console.log("## 添加桌面失败", JSON.stringify(t.errMsg));
      }
    });
  };

  return __decorate([l], e);
}(cc.Component));
exports["default"] = u;

cc._RF.pop();