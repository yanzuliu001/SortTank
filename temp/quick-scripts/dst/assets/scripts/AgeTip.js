
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AgeTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80238wgshFJbp6+kf1BaEPu', 'AgeTip');
// scripts/AgeTip.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $platformConst = require("./PlatformConst");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var u = cc._decorator;
var f = u.ccclass;
var d = (u.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("defineBtn", this.clickDefine, this);

    if ($platformManager.Platform.getConfig().ageTipType == $platformConst.AgeTipType.AGE_12) {
      var e = this.dict.text.getComponent(cc.Label).string.replace("16周岁", "12周岁");
      this.dict.text.getComponent(cc.Label).string = e;
    }
  };

  e.prototype.clickDefine = function () {
    $popupManager["default"].hide();
  };

  return __decorate([f], e);
}($baseUI["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FnZVRpcC5qcyJdLCJuYW1lcyI6WyJyIiwiJGJhc2VVSSIsInJlcXVpcmUiLCIkcGxhdGZvcm1Db25zdCIsIiRwbGF0Zm9ybU1hbmFnZXIiLCIkcG9wdXBNYW5hZ2VyIiwidSIsImNjIiwiX2RlY29yYXRvciIsImYiLCJjY2NsYXNzIiwiZCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJhZGRCdG5PbiIsImNsaWNrRGVmaW5lIiwiUGxhdGZvcm0iLCJnZXRDb25maWciLCJhZ2VUaXBUeXBlIiwiQWdlVGlwVHlwZSIsIkFHRV8xMiIsImRpY3QiLCJ0ZXh0IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJyZXBsYWNlIiwiaGlkZSIsIl9fZGVjb3JhdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUE1Qjs7QUFDQSxJQUFJRSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlHLGFBQWEsR0FBR0gsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCTixDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7SUFDQSxLQUFLQyxRQUFMLENBQWMsV0FBZCxFQUEyQixLQUFLQyxXQUFoQyxFQUE2QyxJQUE3Qzs7SUFDQSxJQUFJbEIsZ0JBQWdCLENBQUNtQixRQUFqQixDQUEwQkMsU0FBMUIsR0FBc0NDLFVBQXRDLElBQW9EdEIsY0FBYyxDQUFDdUIsVUFBZixDQUEwQkMsTUFBbEYsRUFBMEY7TUFDdEYsSUFBSWIsQ0FBQyxHQUFHLEtBQUtjLElBQUwsQ0FBVUMsSUFBVixDQUFlQyxZQUFmLENBQTRCdkIsRUFBRSxDQUFDd0IsS0FBL0IsRUFBc0NDLE1BQXRDLENBQTZDQyxPQUE3QyxDQUFxRCxNQUFyRCxFQUE2RCxNQUE3RCxDQUFSO01BQ0EsS0FBS0wsSUFBTCxDQUFVQyxJQUFWLENBQWVDLFlBQWYsQ0FBNEJ2QixFQUFFLENBQUN3QixLQUEvQixFQUFzQ0MsTUFBdEMsR0FBK0NsQixDQUEvQztJQUNIO0VBQ0osQ0FQRDs7RUFRQUEsQ0FBQyxDQUFDSSxTQUFGLENBQVlJLFdBQVosR0FBMEIsWUFBWTtJQUNsQ2pCLGFBQWEsV0FBYixDQUFzQjZCLElBQXRCO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzFCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FqQkQsQ0FpQkdiLE9BQU8sV0FqQlYsQ0FGQyxDQUFMO0FBb0JBbUMsT0FBTyxXQUFQLEdBQWtCekIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRiYXNlVUkgPSByZXF1aXJlKFwiLi9CYXNlVUlcIik7XG52YXIgJHBsYXRmb3JtQ29uc3QgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybUNvbnN0XCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcbnZhciBmID0gdS5jY2NsYXNzO1xudmFyIGQgPVxuICAgICh1LnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImRlZmluZUJ0blwiLCB0aGlzLmNsaWNrRGVmaW5lLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICgkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmFnZVRpcFR5cGUgPT0gJHBsYXRmb3JtQ29uc3QuQWdlVGlwVHlwZS5BR0VfMTIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuZGljdC50ZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nLnJlcGxhY2UoXCIxNuWRqOWygVwiLCBcIjEy5ZGo5bKBXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGljdC50ZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tEZWZpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZSgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbZl0sIGUpO1xuICAgIH0pKCRiYXNlVUkuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZDtcbiJdfQ==