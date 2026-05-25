
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Cheats.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe517Pb0PZMkrsK875Sm2BT', 'Cheats');
// scripts/Cheats.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $debugManager = require("./DebugManager");

var p = cc._decorator;
var m = p.ccclass;
var g = (p.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("noAdBtn", this.clickNoAd, this);
    this.addBtnOn("unlockBtn", this.clickUnlock, this);
    this.addBtnOn("close", this.clickClose, this);
    this.addBtnOn("gmBtn", this.gmBtn, this);
    this.addBtnOn("clear", this.clear, this);
    this.addBtnOn("openLog", this.openLog, this);
    $userManager.User.setTempData("cheats", !0);
  };

  e.prototype.clickUnlock = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        return [2];
      });
    });
  };

  e.prototype.clickNoAd = function () {
    $platformManager.Platform.setNoAd(!0);
    $tipManager.Tip.show("成功去广告！");
  };

  e.prototype.clickClose = function () {
    $popupManager["default"].hide();
  };

  e.prototype.gmBtn = function () {
    $tipManager.Tip.show("打开debug");
    $platformManager.Platform.showAdDebugger();
    this.clickClose();
  };

  e.prototype.clear = function () {
    $tipManager.Tip.show("清除数据");
    cc.sys.localStorage.clear();
  };

  e.prototype.openLog = function () {
    $tipManager.Tip.show("成功");
    $debugManager["default"].init();
  };

  return __decorate([m], e);
}($baseUI["default"]));
exports["default"] = g;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NoZWF0cy5qcyJdLCJuYW1lcyI6WyJyIiwiJGJhc2VVSSIsInJlcXVpcmUiLCIkcGxhdGZvcm1NYW5hZ2VyIiwiJHBvcHVwTWFuYWdlciIsIiR0aXBNYW5hZ2VyIiwiJHVzZXJNYW5hZ2VyIiwiJGRlYnVnTWFuYWdlciIsInAiLCJjYyIsIl9kZWNvcmF0b3IiLCJtIiwiY2NjbGFzcyIsImciLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwiYWRkQnRuT24iLCJjbGlja05vQWQiLCJjbGlja1VubG9jayIsImNsaWNrQ2xvc2UiLCJnbUJ0biIsImNsZWFyIiwib3BlbkxvZyIsIlVzZXIiLCJzZXRUZW1wRGF0YSIsIl9fYXdhaXRlciIsIl9fZ2VuZXJhdG9yIiwiUGxhdGZvcm0iLCJzZXROb0FkIiwiVGlwIiwic2hvdyIsImhpZGUiLCJzaG93QWREZWJ1Z2dlciIsInN5cyIsImxvY2FsU3RvcmFnZSIsImluaXQiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlJLFlBQVksR0FBR0osT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUssYUFBYSxHQUFHTCxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSU0sQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FB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cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgJGJhc2VVSSA9IHJlcXVpcmUoXCIuL0Jhc2VVSVwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHRpcE1hbmFnZXIgPSByZXF1aXJlKFwiLi9UaXBNYW5hZ2VyXCIpO1xudmFyICR1c2VyTWFuYWdlciA9IHJlcXVpcmUoXCIuL1VzZXJNYW5hZ2VyXCIpO1xudmFyICRkZWJ1Z01hbmFnZXIgPSByZXF1aXJlKFwiLi9EZWJ1Z01hbmFnZXJcIik7XG52YXIgcCA9IGNjLl9kZWNvcmF0b3I7XG52YXIgbSA9IHAuY2NjbGFzcztcbnZhciBnID1cbiAgICAocC5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJub0FkQnRuXCIsIHRoaXMuY2xpY2tOb0FkLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJ1bmxvY2tCdG5cIiwgdGhpcy5jbGlja1VubG9jaywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiY2xvc2VcIiwgdGhpcy5jbGlja0Nsb3NlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJnbUJ0blwiLCB0aGlzLmdtQnRuLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJjbGVhclwiLCB0aGlzLmNsZWFyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJvcGVuTG9nXCIsIHRoaXMub3BlbkxvZywgdGhpcyk7XG4gICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXRUZW1wRGF0YShcImNoZWF0c1wiLCAhMCk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsaWNrVW5sb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tOb0FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zZXROb0FkKCEwKTtcbiAgICAgICAgICAgICR0aXBNYW5hZ2VyLlRpcC5zaG93KFwi5oiQ5Yqf5Y675bm/5ZGK77yBXCIpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5jbGlja0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuZ21CdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIuaJk+W8gGRlYnVnXCIpO1xuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93QWREZWJ1Z2dlcigpO1xuICAgICAgICAgICAgdGhpcy5jbGlja0Nsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coXCLmuIXpmaTmlbDmja5cIik7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9wZW5Mb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkdGlwTWFuYWdlci5UaXAuc2hvdyhcIuaIkOWKn1wiKTtcbiAgICAgICAgICAgICRkZWJ1Z01hbmFnZXIuZGVmYXVsdC5pbml0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFttXSwgZSk7XG4gICAgfSkoJGJhc2VVSS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnO1xuIl19