
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SpecialGift.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f846/9dqFJBLapQhgbWK26', 'SpecialGift');
// scripts/SpecialGift.js

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
    $paymentSystem["default"].getGoodsLocalPrice(this.dict.price, "special_pack");
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
    $paymentSystem["default"].clickBuy("special_pack");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NwZWNpYWxHaWZ0LmpzIl0sIm5hbWVzIjpbInIiLCIkdUlCYXNlIiwicmVxdWlyZSIsIiRwb3B1cE1hbmFnZXIiLCIkcGF5bWVudFN5c3RlbSIsIiRzaHVTaHVDb25zdCIsInUiLCJjYyIsIl9kZWNvcmF0b3IiLCJmIiwiY2NjbGFzcyIsImQiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwibm9kZSIsInNldENvbnRlbnRTaXplIiwid2luU2l6ZSIsImFkZEJ0bk9uIiwibm9CdG4iLCJidXlCdG4iLCJnYW1lIiwiZW1pdCIsIlNodVNodUNvbnN0IiwiR2lmdF9wYWdlIiwiaWQiLCJnZXRHb29kc0xvY2FsUHJpY2UiLCJkaWN0IiwicHJpY2UiLCJvbkVuYWJsZSIsIm9uIiwic3BlY2lhbEdpZnQiLCJvbkRpc2FibGUiLCJvZmYiLCJoaWRlIiwiY2xpY2tCdXkiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUUsY0FBYyxHQUFHRixPQUFPLENBQUMsaUJBQUQsQ0FBNUI7O0FBQ0EsSUFBSUcsWUFBWSxHQUFHSCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJSSxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBbkQ7RUFDSDs7RUFDREMsU0FBUyxDQUFDSCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3Qk4sQ0FBQyxDQUFDSyxTQUFGLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCZixFQUFFLENBQUNnQixPQUE1QjtJQUNBLEtBQUtDLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLEtBQUtDLEtBQTVCLEVBQW1DLElBQW5DO0lBQ0EsS0FBS0QsUUFBTCxDQUFjLFFBQWQsRUFBd0IsS0FBS0UsTUFBN0IsRUFBcUMsSUFBckM7SUFDQW5CLEVBQUUsQ0FBQ29CLElBQUgsQ0FBUUMsSUFBUixDQUFhLGtCQUFiLEVBQWlDdkIsWUFBWSxDQUFDd0IsV0FBYixDQUF5QkMsU0FBMUQsRUFBcUU7TUFDakVDLEVBQUUsRUFBRTtJQUQ2RCxDQUFyRTtJQUdBM0IsY0FBYyxXQUFkLENBQXVCNEIsa0JBQXZCLENBQTBDLEtBQUtDLElBQUwsQ0FBVUMsS0FBcEQsRUFBMkQsY0FBM0Q7RUFDSCxDQVREOztFQVVBcEIsQ0FBQyxDQUFDSSxTQUFGLENBQVlpQixRQUFaLEdBQXVCLFlBQVk7SUFDL0I1QixFQUFFLENBQUNvQixJQUFILENBQVFTLEVBQVIsQ0FBVyxjQUFYLEVBQTJCLEtBQUtDLFdBQWhDLEVBQTZDLElBQTdDO0VBQ0gsQ0FGRDs7RUFHQXZCLENBQUMsQ0FBQ0ksU0FBRixDQUFZb0IsU0FBWixHQUF3QixZQUFZO0lBQ2hDL0IsRUFBRSxDQUFDb0IsSUFBSCxDQUFRWSxHQUFSLENBQVksY0FBWixFQUE0QixLQUFLRixXQUFqQyxFQUE4QyxJQUE5QztFQUNILENBRkQ7O0VBR0F2QixDQUFDLENBQUNJLFNBQUYsQ0FBWW1CLFdBQVosR0FBMEIsWUFBWTtJQUNsQ2xDLGFBQWEsV0FBYixDQUFzQnFDLElBQXRCO0VBQ0gsQ0FGRDs7RUFHQTFCLENBQUMsQ0FBQ0ksU0FBRixDQUFZTyxLQUFaLEdBQW9CLFlBQVk7SUFDNUJ0QixhQUFhLFdBQWIsQ0FBc0JxQyxJQUF0QjtFQUNILENBRkQ7O0VBR0ExQixDQUFDLENBQUNJLFNBQUYsQ0FBWVEsTUFBWixHQUFxQixZQUFZO0lBQzdCdEIsY0FBYyxXQUFkLENBQXVCcUMsUUFBdkIsQ0FBZ0MsY0FBaEM7RUFDSCxDQUZEOztFQUdBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDakMsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQS9CRCxDQStCR2IsT0FBTyxXQS9CVixDQUZDLENBQUw7QUFrQ0EwQyxPQUFPLFdBQVAsR0FBa0JoQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgJHVJQmFzZSA9IHJlcXVpcmUoXCIuL1VJQmFzZVwiKTtcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xudmFyICRwYXltZW50U3lzdGVtID0gcmVxdWlyZShcIi4vUGF5bWVudFN5c3RlbVwiKTtcbnZhciAkc2h1U2h1Q29uc3QgPSByZXF1aXJlKFwiLi9TaHVTaHVDb25zdFwiKTtcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcbnZhciBmID0gdS5jY2NsYXNzO1xudmFyIGQgPVxuICAgICh1LnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcIm5vQnRuXCIsIHRoaXMubm9CdG4sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImJ1eUJ0blwiLCB0aGlzLmJ1eUJ0biwgdGhpcyk7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5HaWZ0X3BhZ2UsIHtcbiAgICAgICAgICAgICAgICBpZDogMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkcGF5bWVudFN5c3RlbS5kZWZhdWx0LmdldEdvb2RzTG9jYWxQcmljZSh0aGlzLmRpY3QucHJpY2UsIFwic3BlY2lhbF9wYWNrXCIpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUub24oXCJzcGVjaWFsX3BhY2tcIiwgdGhpcy5zcGVjaWFsR2lmdCwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmdhbWUub2ZmKFwic3BlY2lhbF9wYWNrXCIsIHRoaXMuc3BlY2lhbEdpZnQsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5zcGVjaWFsR2lmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5vQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuYnV5QnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBheW1lbnRTeXN0ZW0uZGVmYXVsdC5jbGlja0J1eShcInNwZWNpYWxfcGFja1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2ZdLCBlKTtcbiAgICB9KSgkdUlCYXNlLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGQ7XG4iXX0=