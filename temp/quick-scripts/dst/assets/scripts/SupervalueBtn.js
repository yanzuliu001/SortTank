
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SupervalueBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14446SbIvVEhYdQ55icLW8O', 'SupervalueBtn');
// scripts/SupervalueBtn.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var h = cc._decorator;
var p = h.ccclass;
var m = (h.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.localStorageUIData[$localStorageConst["default"].value_pack] = this.value_pack.bind(this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.newHandBtn, this);
    this.dict.btn_04.children[0].getComponent(cc.Label).string = "$1.99";
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.btn_04.children[0], "value_pack");
  };

  e.prototype.value_pack = function (t) {
    var e = $localStorageManager["default"].get($localStorageConst["default"].starter_pack) || 0;
    this.node.active = !(!e || t);

    if ($platformManager.Platform.getConfig().hasPurchase) {//
    } else {
      this.node.active = !1;
    }
  };

  e.prototype.newHandBtn = function () {
    $paymentSystem["default"].clickBuy("value_pack");
  };

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.UniversalCard);
  };

  return __decorate([p], e);
}($uIBase["default"]));
exports["default"] = m;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N1cGVydmFsdWVCdG4uanMiXSwibmFtZXMiOlsiciIsIiRwb3B1cENvbnN0IiwicmVxdWlyZSIsIiR1SUJhc2UiLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkbG9jYWxTdG9yYWdlTWFuYWdlciIsIiRwbGF0Zm9ybU1hbmFnZXIiLCIkcG9wdXBNYW5hZ2VyIiwiJHBheW1lbnRTeXN0ZW0iLCJoIiwiY2MiLCJfZGVjb3JhdG9yIiwicCIsImNjY2xhc3MiLCJtIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImxvY2FsU3RvcmFnZVVJRGF0YSIsInZhbHVlX3BhY2siLCJiaW5kIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIm5ld0hhbmRCdG4iLCJkaWN0IiwiYnRuXzA0IiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsImdldEdvb2RzTG9jYWxQcmljZSIsImdldCIsInN0YXJ0ZXJfcGFjayIsImFjdGl2ZSIsIlBsYXRmb3JtIiwiZ2V0Q29uZmlnIiwiaGFzUHVyY2hhc2UiLCJjbGlja0J1eSIsImNsaWNrU2VsZiIsInNob3ciLCJQb3B1cENvbnN0IiwiVW5pdmVyc2FsQ2FyZCIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlFLGtCQUFrQixHQUFHRixPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUcsb0JBQW9CLEdBQUdILE9BQU8sQ0FBQyx1QkFBRCxDQUFsQzs7QUFDQSxJQUFJSSxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlLLGFBQWEsR0FBR0wsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlNLGNBQWMsR0FBR04sT0FBTyxDQUFDLGlCQUFELENBQTVCOztBQUNBLElBQUlPLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCTixDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7SUFDQSxLQUFLQyxrQkFBTCxDQUF3QnBCLGtCQUFrQixXQUFsQixDQUEyQnFCLFVBQW5ELElBQWlFLEtBQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQWpFO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFsQixFQUFFLENBQUNtQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQS9CLEVBQTBDLEtBQUtDLFVBQS9DLEVBQTJELElBQTNEO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxRQUFqQixDQUEwQixDQUExQixFQUE2QkMsWUFBN0IsQ0FBMEMxQixFQUFFLENBQUMyQixLQUE3QyxFQUFvREMsTUFBcEQsR0FBNkQsT0FBN0Q7SUFDQTlCLGNBQWMsV0FBZCxDQUF1QitCLGtCQUF2QixDQUEwQyxLQUFLTixJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFFBQWpCLENBQTBCLENBQTFCLENBQTFDLEVBQXdFLFlBQXhFO0VBQ0gsQ0FORDs7RUFPQWxCLENBQUMsQ0FBQ0ksU0FBRixDQUFZSSxVQUFaLEdBQXlCLFVBQVVULENBQVYsRUFBYTtJQUNsQyxJQUFJQyxDQUFDLEdBQUdaLG9CQUFvQixXQUFwQixDQUE2Qm1DLEdBQTdCLENBQWlDcEMsa0JBQWtCLFdBQWxCLENBQTJCcUMsWUFBNUQsS0FBNkUsQ0FBckY7SUFDQSxLQUFLZCxJQUFMLENBQVVlLE1BQVYsR0FBbUIsRUFBRSxDQUFDekIsQ0FBRCxJQUFNRCxDQUFSLENBQW5COztJQUNBLElBQUlWLGdCQUFnQixDQUFDcUMsUUFBakIsQ0FBMEJDLFNBQTFCLEdBQXNDQyxXQUExQyxFQUF1RCxDQUNuRDtJQUNILENBRkQsTUFFTztNQUNILEtBQUtsQixJQUFMLENBQVVlLE1BQVYsR0FBbUIsQ0FBQyxDQUFwQjtJQUNIO0VBQ0osQ0FSRDs7RUFTQXpCLENBQUMsQ0FBQ0ksU0FBRixDQUFZVyxVQUFaLEdBQXlCLFlBQVk7SUFDakN4QixjQUFjLFdBQWQsQ0FBdUJzQyxRQUF2QixDQUFnQyxZQUFoQztFQUNILENBRkQ7O0VBR0E3QixDQUFDLENBQUNJLFNBQUYsQ0FBWTBCLFNBQVosR0FBd0IsWUFBWTtJQUNoQ3hDLGFBQWEsV0FBYixDQUFzQnlDLElBQXRCLENBQTJCL0MsV0FBVyxDQUFDZ0QsVUFBWixDQUF1QkMsYUFBbEQ7RUFDSCxDQUZEOztFQUdBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDdkMsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQTVCRCxDQTRCR2QsT0FBTyxXQTVCVixDQUZDLENBQUw7QUErQkFpRCxPQUFPLFdBQVAsR0FBa0J0QyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgJHBvcHVwQ29uc3QgPSByZXF1aXJlKFwiLi9Qb3B1cENvbnN0XCIpO1xudmFyICR1SUJhc2UgPSByZXF1aXJlKFwiLi9VSUJhc2VcIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJGxvY2FsU3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciAkcGF5bWVudFN5c3RlbSA9IHJlcXVpcmUoXCIuL1BheW1lbnRTeXN0ZW1cIik7XG52YXIgaCA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcCA9IGguY2NjbGFzcztcbnZhciBtID1cbiAgICAoaC5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlVUlEYXRhWyRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnZhbHVlX3BhY2tdID0gdGhpcy52YWx1ZV9wYWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm5ld0hhbmRCdG4sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kaWN0LmJ0bl8wNC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiJDEuOTlcIjtcbiAgICAgICAgICAgICRwYXltZW50U3lzdGVtLmRlZmF1bHQuZ2V0R29vZHNMb2NhbFByaWNlKHRoaXMuZGljdC5idG5fMDQuY2hpbGRyZW5bMF0sIFwidmFsdWVfcGFja1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUudmFsdWVfcGFjayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnN0YXJ0ZXJfcGFjaykgfHwgMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSAhKCFlIHx8IHQpO1xuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzUHVyY2hhc2UpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5ld0hhbmRCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkcGF5bWVudFN5c3RlbS5kZWZhdWx0LmNsaWNrQnV5KFwidmFsdWVfcGFja1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tTZWxmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Vbml2ZXJzYWxDYXJkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW3BdLCBlKTtcbiAgICB9KSgkdUlCYXNlLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IG07XG4iXX0=