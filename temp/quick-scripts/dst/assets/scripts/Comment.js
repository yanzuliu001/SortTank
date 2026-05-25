
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Comment.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bb816Q0RlAo6D++7loEDgC', 'Comment');
// scripts/Comment.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $platformConst = require("./PlatformConst");

var $userConst = require("./UserConst");

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $tipManager = require("./TipManager");

var $userManager = require("./UserManager");

var $stars = require("./Stars");

var $xMADUtils = require("./XMADUtils");

var $languageManager = require("./LanguageManager");

var y = cc._decorator;
var v = y.ccclass;
var w = y.property;

var _ = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.stars = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("giveUpBtn", this.clickGiveUp, this);
    this.addBtnOn("define", this.clickDefine, this);
    this.initView();
  };

  e.prototype.onEnable = function () {
    if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
      $xMADUtils.XMAD.showBannerFeed();
    }
  };

  e.prototype.onDisable = function () {};

  e.prototype.initView = function () {};

  e.prototype.clickGiveUp = function () {
    $popupManager["default"].hide();
  };

  e.prototype.clickDefine = function () {
    if (this.stars.isTouch) {
      var t = this.stars.starNum;
      this.stars.setCanMark(!1);
      var e = $bmsManager.BMS.getKey("evaluatestar");
      console.log("starNum", t);
      console.log("showNum", e);

      if (t >= e) {
        $platformManager.Platform.gameComment();
      }

      $userManager.User.set($userConst.UserData.IS_COMMENT, 1);
      $tipManager.Tip.show($languageManager["default"].formatStr("评分成功。"));
      $popupManager["default"].hide();
    } else {
      $tipManager.Tip.show($languageManager["default"].formatStr("请先评分!"));
    }
  };

  __decorate([w($stars["default"])], e.prototype, "stars", void 0);

  return __decorate([v], e);
}($baseUI["default"]);

exports["default"] = _;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvbW1lbnQuanMiXSwibmFtZXMiOlsiciIsIiRiYXNlVUkiLCJyZXF1aXJlIiwiJHBsYXRmb3JtQ29uc3QiLCIkdXNlckNvbnN0IiwiJGJtc01hbmFnZXIiLCIkcGxhdGZvcm1NYW5hZ2VyIiwiJHBvcHVwTWFuYWdlciIsIiR0aXBNYW5hZ2VyIiwiJHVzZXJNYW5hZ2VyIiwiJHN0YXJzIiwiJHhNQURVdGlscyIsIiRsYW5ndWFnZU1hbmFnZXIiLCJ5IiwiY2MiLCJfZGVjb3JhdG9yIiwidiIsImNjY2xhc3MiLCJ3IiwicHJvcGVydHkiLCJfIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsInN0YXJzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImFkZEJ0bk9uIiwiY2xpY2tHaXZlVXAiLCJjbGlja0RlZmluZSIsImluaXRWaWV3Iiwib25FbmFibGUiLCJQbGF0Zm9ybSIsImlzIiwiRVBsYXRmb3JtIiwiWElBT01JX0FORFJPSUQiLCJYTUFEIiwic2hvd0Jhbm5lckZlZWQiLCJvbkRpc2FibGUiLCJoaWRlIiwiaXNUb3VjaCIsInN0YXJOdW0iLCJzZXRDYW5NYXJrIiwiQk1TIiwiZ2V0S2V5IiwiY29uc29sZSIsImxvZyIsImdhbWVDb21tZW50IiwiVXNlciIsInNldCIsIlVzZXJEYXRhIiwiSVNfQ09NTUVOVCIsIlRpcCIsInNob3ciLCJmb3JtYXRTdHIiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlJLGdCQUFnQixHQUFHSixPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUssYUFBYSxHQUFHTCxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSU0sV0FBVyxHQUFHTixPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJTyxZQUFZLEdBQUdQLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlRLE1BQU0sR0FBR1IsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7O0FBQ0EsSUFBSVMsVUFBVSxHQUFHVCxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJVSxnQkFBZ0IsR0FBR1YsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlXLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csS0FBRixHQUFVLElBQVY7SUFDQSxPQUFPSCxDQUFQO0VBQ0g7O0VBQ0RJLFNBQVMsQ0FBQ0osQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0JQLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtJQUNBLEtBQUtDLFFBQUwsQ0FBYyxXQUFkLEVBQTJCLEtBQUtDLFdBQWhDLEVBQTZDLElBQTdDO0lBQ0EsS0FBS0QsUUFBTCxDQUFjLFFBQWQsRUFBd0IsS0FBS0UsV0FBN0IsRUFBMEMsSUFBMUM7SUFDQSxLQUFLQyxRQUFMO0VBQ0gsQ0FMRDs7RUFNQVgsQ0FBQyxDQUFDSyxTQUFGLENBQVlPLFFBQVosR0FBdUIsWUFBWTtJQUMvQixJQUFJNUIsZ0JBQWdCLENBQUM2QixRQUFqQixDQUEwQkMsRUFBMUIsQ0FBNkJqQyxjQUFjLENBQUNrQyxTQUFmLENBQXlCQyxjQUF0RCxDQUFKLEVBQTJFO01BQ3ZFM0IsVUFBVSxDQUFDNEIsSUFBWCxDQUFnQkMsY0FBaEI7SUFDSDtFQUNKLENBSkQ7O0VBS0FsQixDQUFDLENBQUNLLFNBQUYsQ0FBWWMsU0FBWixHQUF3QixZQUFZLENBQUUsQ0FBdEM7O0VBQ0FuQixDQUFDLENBQUNLLFNBQUYsQ0FBWU0sUUFBWixHQUF1QixZQUFZLENBQUUsQ0FBckM7O0VBQ0FYLENBQUMsQ0FBQ0ssU0FBRixDQUFZSSxXQUFaLEdBQTBCLFlBQVk7SUFDbEN4QixhQUFhLFdBQWIsQ0FBc0JtQyxJQUF0QjtFQUNILENBRkQ7O0VBR0FwQixDQUFDLENBQUNLLFNBQUYsQ0FBWUssV0FBWixHQUEwQixZQUFZO0lBQ2xDLElBQUksS0FBS1AsS0FBTCxDQUFXa0IsT0FBZixFQUF3QjtNQUNwQixJQUFJdEIsQ0FBQyxHQUFHLEtBQUtJLEtBQUwsQ0FBV21CLE9BQW5CO01BQ0EsS0FBS25CLEtBQUwsQ0FBV29CLFVBQVgsQ0FBc0IsQ0FBQyxDQUF2QjtNQUNBLElBQUl2QixDQUFDLEdBQUdqQixXQUFXLENBQUN5QyxHQUFaLENBQWdCQyxNQUFoQixDQUF1QixjQUF2QixDQUFSO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUI1QixDQUF2QjtNQUNBMkIsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QjNCLENBQXZCOztNQUNBLElBQUlELENBQUMsSUFBSUMsQ0FBVCxFQUFZO1FBQ1JoQixnQkFBZ0IsQ0FBQzZCLFFBQWpCLENBQTBCZSxXQUExQjtNQUNIOztNQUNEekMsWUFBWSxDQUFDMEMsSUFBYixDQUFrQkMsR0FBbEIsQ0FBc0JoRCxVQUFVLENBQUNpRCxRQUFYLENBQW9CQyxVQUExQyxFQUFzRCxDQUF0RDtNQUNBOUMsV0FBVyxDQUFDK0MsR0FBWixDQUFnQkMsSUFBaEIsQ0FBcUI1QyxnQkFBZ0IsV0FBaEIsQ0FBeUI2QyxTQUF6QixDQUFtQyxPQUFuQyxDQUFyQjtNQUNBbEQsYUFBYSxXQUFiLENBQXNCbUMsSUFBdEI7SUFDSCxDQVpELE1BWU87TUFDSGxDLFdBQVcsQ0FBQytDLEdBQVosQ0FBZ0JDLElBQWhCLENBQXFCNUMsZ0JBQWdCLFdBQWhCLENBQXlCNkMsU0FBekIsQ0FBbUMsT0FBbkMsQ0FBckI7SUFDSDtFQUNKLENBaEJEOztFQWlCQUMsVUFBVSxDQUFDLENBQUN4QyxDQUFDLENBQUNSLE1BQU0sV0FBUCxDQUFGLENBQUQsRUFBc0JZLENBQUMsQ0FBQ0ssU0FBeEIsRUFBbUMsT0FBbkMsRUFBNEMsS0FBSyxDQUFqRCxDQUFWOztFQUNBLE9BQU8rQixVQUFVLENBQUMsQ0FBQzFDLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0ExQ08sQ0EwQ0xyQixPQUFPLFdBMUNGLENBQVI7O0FBMkNBMEQsT0FBTyxXQUFQLEdBQWtCdkMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRiYXNlVUkgPSByZXF1aXJlKFwiLi9CYXNlVUlcIik7XG52YXIgJHBsYXRmb3JtQ29uc3QgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybUNvbnN0XCIpO1xudmFyICR1c2VyQ29uc3QgPSByZXF1aXJlKFwiLi9Vc2VyQ29uc3RcIik7XG52YXIgJGJtc01hbmFnZXIgPSByZXF1aXJlKFwiLi9CbXNNYW5hZ2VyXCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciAkdGlwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1RpcE1hbmFnZXJcIik7XG52YXIgJHVzZXJNYW5hZ2VyID0gcmVxdWlyZShcIi4vVXNlck1hbmFnZXJcIik7XG52YXIgJHN0YXJzID0gcmVxdWlyZShcIi4vU3RhcnNcIik7XG52YXIgJHhNQURVdGlscyA9IHJlcXVpcmUoXCIuL1hNQURVdGlsc1wiKTtcbnZhciAkbGFuZ3VhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTGFuZ3VhZ2VNYW5hZ2VyXCIpO1xudmFyIHkgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHYgPSB5LmNjY2xhc3M7XG52YXIgdyA9IHkucHJvcGVydHk7XG52YXIgXyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLnN0YXJzID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiZ2l2ZVVwQnRuXCIsIHRoaXMuY2xpY2tHaXZlVXAsIHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiZGVmaW5lXCIsIHRoaXMuY2xpY2tEZWZpbmUsIHRoaXMpO1xuICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uaXMoJHBsYXRmb3JtQ29uc3QuRVBsYXRmb3JtLlhJQU9NSV9BTkRST0lEKSkge1xuICAgICAgICAgICAgJHhNQURVdGlscy5YTUFELnNob3dCYW5uZXJGZWVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGUucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge307XG4gICAgZS5wcm90b3R5cGUuY2xpY2tHaXZlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlKCk7XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5jbGlja0RlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnMuaXNUb3VjaCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnN0YXJzLnN0YXJOdW07XG4gICAgICAgICAgICB0aGlzLnN0YXJzLnNldENhbk1hcmsoITEpO1xuICAgICAgICAgICAgdmFyIGUgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwiZXZhbHVhdGVzdGFyXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFyTnVtXCIsIHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaG93TnVtXCIsIGUpO1xuICAgICAgICAgICAgaWYgKHQgPj0gZSkge1xuICAgICAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2FtZUNvbW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldCgkdXNlckNvbnN0LlVzZXJEYXRhLklTX0NPTU1FTlQsIDEpO1xuICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcIuivhOWIhuaIkOWKn+OAglwiKSk7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRpcE1hbmFnZXIuVGlwLnNob3coJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcIuivt+WFiOivhOWIhiFcIikpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFt3KCRzdGFycy5kZWZhdWx0KV0sIGUucHJvdG90eXBlLCBcInN0YXJzXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3ZdLCBlKTtcbn0pKCRiYXNlVUkuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBfO1xuIl19