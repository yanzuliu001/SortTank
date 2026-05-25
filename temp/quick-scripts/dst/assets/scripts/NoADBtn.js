
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/NoADBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04ef7knxCdEc4pZmdU3U0P4', 'NoADBtn');
// scripts/NoADBtn.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var f = cc._decorator;
var d = f.ccclass;
var h = (f.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.localStorageUIData[$localStorageConst["default"].isNoAD] = this.isNoAD.bind(this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.newHandBtn, this);
    this.node.scale = 0.8;
  };

  e.prototype.isNoAD = function (t) {
    this.node.active = !t;

    if ($platformManager.Platform.getConfig().hasPurchase) {//
    } else {
      this.node.active = !1;
    }
  };

  e.prototype.newHandBtn = function () {};

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.UniversalCard);
  };

  return __decorate([d], e);
}($uIBase["default"]));
exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL05vQURCdG4uanMiXSwibmFtZXMiOlsiciIsIiRwb3B1cENvbnN0IiwicmVxdWlyZSIsIiR1SUJhc2UiLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkcGxhdGZvcm1NYW5hZ2VyIiwiJHBvcHVwTWFuYWdlciIsImYiLCJjYyIsIl9kZWNvcmF0b3IiLCJkIiwiY2NjbGFzcyIsImgiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwibG9jYWxTdG9yYWdlVUlEYXRhIiwiaXNOb0FEIiwiYmluZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJuZXdIYW5kQnRuIiwic2NhbGUiLCJhY3RpdmUiLCJQbGF0Zm9ybSIsImdldENvbmZpZyIsImhhc1B1cmNoYXNlIiwiY2xpY2tTZWxmIiwic2hvdyIsIlBvcHVwQ29uc3QiLCJVbml2ZXJzYWxDYXJkIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsa0JBQWtCLEdBQUdGLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQzs7QUFDQSxJQUFJRyxnQkFBZ0IsR0FBR0gsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlJLGFBQWEsR0FBR0osT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlLLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCTixDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7SUFDQSxLQUFLQyxrQkFBTCxDQUF3QmxCLGtCQUFrQixXQUFsQixDQUEyQm1CLE1BQW5ELElBQTZELEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUE3RDtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhbEIsRUFBRSxDQUFDbUIsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUEvQixFQUEwQyxLQUFLQyxVQUEvQyxFQUEyRCxJQUEzRDtJQUNBLEtBQUtMLElBQUwsQ0FBVU0sS0FBVixHQUFrQixHQUFsQjtFQUNILENBTEQ7O0VBTUFoQixDQUFDLENBQUNJLFNBQUYsQ0FBWUksTUFBWixHQUFxQixVQUFVVCxDQUFWLEVBQWE7SUFDOUIsS0FBS1csSUFBTCxDQUFVTyxNQUFWLEdBQW1CLENBQUNsQixDQUFwQjs7SUFDQSxJQUFJVCxnQkFBZ0IsQ0FBQzRCLFFBQWpCLENBQTBCQyxTQUExQixHQUFzQ0MsV0FBMUMsRUFBdUQsQ0FDbkQ7SUFDSCxDQUZELE1BRU87TUFDSCxLQUFLVixJQUFMLENBQVVPLE1BQVYsR0FBbUIsQ0FBQyxDQUFwQjtJQUNIO0VBQ0osQ0FQRDs7RUFRQWpCLENBQUMsQ0FBQ0ksU0FBRixDQUFZVyxVQUFaLEdBQXlCLFlBQVksQ0FBRSxDQUF2Qzs7RUFDQWYsQ0FBQyxDQUFDSSxTQUFGLENBQVlpQixTQUFaLEdBQXdCLFlBQVk7SUFDaEM5QixhQUFhLFdBQWIsQ0FBc0IrQixJQUF0QixDQUEyQnBDLFdBQVcsQ0FBQ3FDLFVBQVosQ0FBdUJDLGFBQWxEO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzlCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0F4QkQsQ0F3QkdaLE9BQU8sV0F4QlYsQ0FGQyxDQUFMO0FBMkJBc0MsT0FBTyxXQUFQLEdBQWtCN0IsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRwb3B1cENvbnN0ID0gcmVxdWlyZShcIi4vUG9wdXBDb25zdFwiKTtcbnZhciAkdUlCYXNlID0gcmVxdWlyZShcIi4vVUlCYXNlXCIpO1xudmFyICRsb2NhbFN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZUNvbnN0XCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciBmID0gY2MuX2RlY29yYXRvcjtcbnZhciBkID0gZi5jY2NsYXNzO1xudmFyIGggPVxuICAgIChmLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VVSURhdGFbJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuaXNOb0FEXSA9IHRoaXMuaXNOb0FELmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm5ld0hhbmRCdG4sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMC44O1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5pc05vQUQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ICF0O1xuICAgICAgICAgICAgaWYgKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuaGFzUHVyY2hhc2UpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5ld0hhbmRCdG4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tTZWxmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5Vbml2ZXJzYWxDYXJkKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcbiAgICB9KSgkdUlCYXNlLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGg7XG4iXX0=