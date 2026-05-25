
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Supervalue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d6e7A8nFRI2bGGhWqk4g9q', 'Supervalue');
// scripts/Supervalue.js

"use strict";

var r;

var $uIBase = require("./UIBase");

var $popupManager = require("./PopupManager");

var $paymentSystem = require("./PaymentSystem");

var $shuShuConst = require("./ShuShuConst");

var u = cc._decorator;
var f = u.ccclass;
var d = (u.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("buyBtn", this.buyBtn, this);
    cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Gift_page, {
      id: 2
    });
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.price, "value_pack");
  };

  e.prototype.onEnable = function () {
    cc.game.on("special_pack", this.specialGift, this);
  };

  e.prototype.onDisable = function () {
    cc.game.off("special_pack", this.specialGift, this);
  };

  e.prototype.specialGift = function () {
    $popupManager["default"].hide();
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.buyBtn = function () {
    $paymentSystem["default"].clickBuy("value_pack");
  };

  return __decorate([f], e);
}($uIBase["default"]));
exports["default"] = d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N1cGVydmFsdWUuanMiXSwibmFtZXMiOlsiciIsIiR1SUJhc2UiLCJyZXF1aXJlIiwiJHBvcHVwTWFuYWdlciIsIiRwYXltZW50U3lzdGVtIiwiJHNodVNodUNvbnN0IiwidSIsImNjIiwiX2RlY29yYXRvciIsImYiLCJjY2NsYXNzIiwiZCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJub2RlIiwic2V0Q29udGVudFNpemUiLCJ3aW5TaXplIiwiYWRkQnRuT24iLCJub0J0biIsImJ1eUJ0biIsImdhbWUiLCJlbWl0IiwiU2h1U2h1Q29uc3QiLCJHaWZ0X3BhZ2UiLCJpZCIsImdldEdvb2RzTG9jYWxQcmljZSIsImRpY3QiLCJwcmljZSIsIm9uRW5hYmxlIiwib24iLCJzcGVjaWFsR2lmdCIsIm9uRGlzYWJsZSIsIm9mZiIsImhpZGUiLCJjbGlja0J1eSIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCTixDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7SUFDQSxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUJmLEVBQUUsQ0FBQ2dCLE9BQTVCO0lBQ0EsS0FBS0MsUUFBTCxDQUFjLE9BQWQsRUFBdUIsS0FBS0MsS0FBNUIsRUFBbUMsSUFBbkM7SUFDQSxLQUFLRCxRQUFMLENBQWMsUUFBZCxFQUF3QixLQUFLRSxNQUE3QixFQUFxQyxJQUFyQztJQUNBbkIsRUFBRSxDQUFDb0IsSUFBSCxDQUFRQyxJQUFSLENBQWEsa0JBQWIsRUFBaUN2QixZQUFZLENBQUN3QixXQUFiLENBQXlCQyxTQUExRCxFQUFxRTtNQUNqRUMsRUFBRSxFQUFFO0lBRDZELENBQXJFO0lBR0EzQixjQUFjLFdBQWQsQ0FBdUI0QixrQkFBdkIsQ0FBMEMsS0FBS0MsSUFBTCxDQUFVQyxLQUFwRCxFQUEyRCxZQUEzRDtFQUNILENBVEQ7O0VBVUFwQixDQUFDLENBQUNJLFNBQUYsQ0FBWWlCLFFBQVosR0FBdUIsWUFBWTtJQUMvQjVCLEVBQUUsQ0FBQ29CLElBQUgsQ0FBUVMsRUFBUixDQUFXLGNBQVgsRUFBMkIsS0FBS0MsV0FBaEMsRUFBNkMsSUFBN0M7RUFDSCxDQUZEOztFQUdBdkIsQ0FBQyxDQUFDSSxTQUFGLENBQVlvQixTQUFaLEdBQXdCLFlBQVk7SUFDaEMvQixFQUFFLENBQUNvQixJQUFILENBQVFZLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLEtBQUtGLFdBQWpDLEVBQThDLElBQTlDO0VBQ0gsQ0FGRDs7RUFHQXZCLENBQUMsQ0FBQ0ksU0FBRixDQUFZbUIsV0FBWixHQUEwQixZQUFZO0lBQ2xDbEMsYUFBYSxXQUFiLENBQXNCcUMsSUFBdEI7RUFDSCxDQUZEOztFQUdBMUIsQ0FBQyxDQUFDSSxTQUFGLENBQVlPLEtBQVosR0FBb0IsWUFBWTtJQUM1QnRCLGFBQWEsV0FBYixDQUFzQnFDLElBQXRCO0VBQ0gsQ0FGRDs7RUFHQTFCLENBQUMsQ0FBQ0ksU0FBRixDQUFZUSxNQUFaLEdBQXFCLFlBQVk7SUFDN0J0QixjQUFjLFdBQWQsQ0FBdUJxQyxRQUF2QixDQUFnQyxZQUFoQztFQUNILENBRkQ7O0VBR0EsT0FBT0MsVUFBVSxDQUFDLENBQUNqQyxDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBL0JELENBK0JHYixPQUFPLFdBL0JWLENBRkMsQ0FBTDtBQWtDQTBDLE9BQU8sV0FBUCxHQUFrQmhDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkdUlCYXNlID0gcmVxdWlyZShcIi4vVUlCYXNlXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHBheW1lbnRTeXN0ZW0gPSByZXF1aXJlKFwiLi9QYXltZW50U3lzdGVtXCIpO1xudmFyICRzaHVTaHVDb25zdCA9IHJlcXVpcmUoXCIuL1NodVNodUNvbnN0XCIpO1xudmFyIHUgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGYgPSB1LmNjY2xhc3M7XG52YXIgZCA9XG4gICAgKHUucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwibm9CdG5cIiwgdGhpcy5ub0J0biwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwiYnV5QnRuXCIsIHRoaXMuYnV5QnRuLCB0aGlzKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImdhbWVsb2dfVGhpbmtpbmdcIiwgJHNodVNodUNvbnN0LlNodVNodUNvbnN0LkdpZnRfcGFnZSwge1xuICAgICAgICAgICAgICAgIGlkOiAyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRwYXltZW50U3lzdGVtLmRlZmF1bHQuZ2V0R29vZHNMb2NhbFByaWNlKHRoaXMuZGljdC5wcmljZSwgXCJ2YWx1ZV9wYWNrXCIpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUub24oXCJzcGVjaWFsX3BhY2tcIiwgdGhpcy5zcGVjaWFsR2lmdCwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUub2ZmKFwic3BlY2lhbF9wYWNrXCIsIHRoaXMuc3BlY2lhbEdpZnQsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zcGVjaWFsR2lmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5vQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuYnV5QnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBheW1lbnRTeXN0ZW0uZGVmYXVsdC5jbGlja0J1eShcInZhbHVlX3BhY2tcIik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtmXSwgZSk7XG4gICAgfSkoJHVJQmFzZS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkO1xuIl19