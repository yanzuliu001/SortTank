
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/NewHandBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '020dcO8pXBDF4RMFaJjgLL1', 'NewHandBtn');
// scripts/NewHandBtn.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var d = cc._decorator;
var h = d.ccclass;
var p = (d.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.localStorageUIData[$localStorageConst["default"].starter_pack] = this.updatestarter_pack.bind(this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.newHandBtn, this);
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.btn_04.children[0], "starter_pack");
  };

  e.prototype.updatestarter_pack = function (t) {
    this.node.active = !t;

    if ($platformManager.Platform.getConfig().hasPurchase) {//
    } else {
      this.node.active = !1;
    }
  };

  e.prototype.newHandBtn = function () {
    $paymentSystem["default"].clickBuy("starter_pack");
  };

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.UniversalCard);
  };

  return __decorate([h], e);
}($uIBase["default"]));
exports["default"] = p;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL05ld0hhbmRCdG4uanMiXSwibmFtZXMiOlsiciIsIiRwb3B1cENvbnN0IiwicmVxdWlyZSIsIiR1SUJhc2UiLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkcGxhdGZvcm1NYW5hZ2VyIiwiJHBvcHVwTWFuYWdlciIsIiRwYXltZW50U3lzdGVtIiwiZCIsImNjIiwiX2RlY29yYXRvciIsImgiLCJjY2NsYXNzIiwicCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJsb2NhbFN0b3JhZ2VVSURhdGEiLCJzdGFydGVyX3BhY2siLCJ1cGRhdGVzdGFydGVyX3BhY2siLCJiaW5kIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIm5ld0hhbmRCdG4iLCJnZXRHb29kc0xvY2FsUHJpY2UiLCJkaWN0IiwiYnRuXzA0IiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJQbGF0Zm9ybSIsImdldENvbmZpZyIsImhhc1B1cmNoYXNlIiwiY2xpY2tCdXkiLCJjbGlja1NlbGYiLCJzaG93IiwiUG9wdXBDb25zdCIsIlVuaXZlcnNhbENhcmQiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJRSxrQkFBa0IsR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBQWhDOztBQUNBLElBQUlHLGdCQUFnQixHQUFHSCxPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUksYUFBYSxHQUFHSixPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUssY0FBYyxHQUFHTCxPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSU0sQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsT0FBUSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ0gsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0JOLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtJQUNBLEtBQUtDLGtCQUFMLENBQXdCbkIsa0JBQWtCLFdBQWxCLENBQTJCb0IsWUFBbkQsSUFBbUUsS0FBS0Msa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQW5FO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFuQixFQUFFLENBQUNvQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQS9CLEVBQTBDLEtBQUtDLFVBQS9DLEVBQTJELElBQTNEO0lBQ0F6QixjQUFjLFdBQWQsQ0FBdUIwQixrQkFBdkIsQ0FBMEMsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxRQUFqQixDQUEwQixDQUExQixDQUExQyxFQUF3RSxjQUF4RTtFQUNILENBTEQ7O0VBTUFwQixDQUFDLENBQUNJLFNBQUYsQ0FBWUssa0JBQVosR0FBaUMsVUFBVVYsQ0FBVixFQUFhO0lBQzFDLEtBQUtZLElBQUwsQ0FBVVUsTUFBVixHQUFtQixDQUFDdEIsQ0FBcEI7O0lBQ0EsSUFBSVYsZ0JBQWdCLENBQUNpQyxRQUFqQixDQUEwQkMsU0FBMUIsR0FBc0NDLFdBQTFDLEVBQXVELENBQ25EO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS2IsSUFBTCxDQUFVVSxNQUFWLEdBQW1CLENBQUMsQ0FBcEI7SUFDSDtFQUNKLENBUEQ7O0VBUUFyQixDQUFDLENBQUNJLFNBQUYsQ0FBWVksVUFBWixHQUF5QixZQUFZO0lBQ2pDekIsY0FBYyxXQUFkLENBQXVCa0MsUUFBdkIsQ0FBZ0MsY0FBaEM7RUFDSCxDQUZEOztFQUdBekIsQ0FBQyxDQUFDSSxTQUFGLENBQVlzQixTQUFaLEdBQXdCLFlBQVk7SUFDaENwQyxhQUFhLFdBQWIsQ0FBc0JxQyxJQUF0QixDQUEyQjFDLFdBQVcsQ0FBQzJDLFVBQVosQ0FBdUJDLGFBQWxEO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPQyxVQUFVLENBQUMsQ0FBQ25DLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0ExQkQsQ0EwQkdiLE9BQU8sV0ExQlYsQ0FGQyxDQUFMO0FBNkJBNEMsT0FBTyxXQUFQLEdBQWtCbEMsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRwb3B1cENvbnN0ID0gcmVxdWlyZShcIi4vUG9wdXBDb25zdFwiKTtcbnZhciAkdUlCYXNlID0gcmVxdWlyZShcIi4vVUlCYXNlXCIpO1xudmFyICRsb2NhbFN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZUNvbnN0XCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciAkcGF5bWVudFN5c3RlbSA9IHJlcXVpcmUoXCIuL1BheW1lbnRTeXN0ZW1cIik7XG52YXIgZCA9IGNjLl9kZWNvcmF0b3I7XG52YXIgaCA9IGQuY2NjbGFzcztcbnZhciBwID1cbiAgICAoZC5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlVUlEYXRhWyRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnN0YXJ0ZXJfcGFja10gPSB0aGlzLnVwZGF0ZXN0YXJ0ZXJfcGFjay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5uZXdIYW5kQnRuLCB0aGlzKTtcbiAgICAgICAgICAgICRwYXltZW50U3lzdGVtLmRlZmF1bHQuZ2V0R29vZHNMb2NhbFByaWNlKHRoaXMuZGljdC5idG5fMDQuY2hpbGRyZW5bMF0sIFwic3RhcnRlcl9wYWNrXCIpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVzdGFydGVyX3BhY2sgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ICF0O1xuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzUHVyY2hhc2UpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5ld0hhbmRCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkcGF5bWVudFN5c3RlbS5kZWZhdWx0LmNsaWNrQnV5KFwic3RhcnRlcl9wYWNrXCIpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5jbGlja1NlbGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuc2hvdygkcG9wdXBDb25zdC5Qb3B1cENvbnN0LlVuaXZlcnNhbENhcmQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbaF0sIGUpO1xuICAgIH0pKCR1SUJhc2UuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcDtcbiJdfQ==