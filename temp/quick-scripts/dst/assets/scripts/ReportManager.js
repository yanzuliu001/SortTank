
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ReportManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6b5cgLGuBEyZrWnX9CGreH', 'ReportManager');
// scripts/ReportManager.js

"use strict";

exports.Report = void 0;

var $platformManager = require("./PlatformManager");

var o = function () {
  function t() {}

  t.prototype.init = function () {
    console.log("初始化:GameLogMgr");
    cc.game.on("gamelog", this.onGameLog, this);
    cc.game.on("gamelog_Thinking", this.onGameLog_Thinking, this);
    cc.game.on("gamelog_adjustEvent", this.onGameLog_adjustEvent, this);
    cc.game.on("gameTime-log", this.onGameTimeLog, this);
    cc.game.on("gameLevel-log", this.onGameLevelLog, this);
    cc.game.on("language-init", this.onLanguageInit, this);
  };

  t.prototype.onGameLog = function (t, e) {
    if (void 0 === e) {
      e = "count";
    }

    window.tt;
  };

  t.prototype.onGameLog_Thinking = function (t, e) {
    $platformManager.Platform.report(t, JSON.stringify(e));
    console.log("%c [GameLog] 事件打点: " + t + "  子事件 " + JSON.stringify(e), "color:#F500FF");
  };

  t.prototype.onGameLog_adjustEvent = function (t) {
    $platformManager.Platform.adjustEvent(t);
    console.log("%c [adjustEvent] 事件打点: " + t + " ", "color:#F500FF");
  };

  t.prototype.onGameTimeLog = function () {};

  t.prototype.onGameLevelLog = function (t) {
    console.log("%c [GameLog] **** 关卡打点: " + t + " ****}", "color:#F500FF");
  };

  t.prototype.onLanguageInit = function () {};

  return t;
}();

exports.Report = new o();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JlcG9ydE1hbmFnZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIlJlcG9ydCIsIiRwbGF0Zm9ybU1hbmFnZXIiLCJyZXF1aXJlIiwibyIsInQiLCJwcm90b3R5cGUiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImNjIiwiZ2FtZSIsIm9uIiwib25HYW1lTG9nIiwib25HYW1lTG9nX1RoaW5raW5nIiwib25HYW1lTG9nX2FkanVzdEV2ZW50Iiwib25HYW1lVGltZUxvZyIsIm9uR2FtZUxldmVsTG9nIiwib25MYW5ndWFnZUluaXQiLCJlIiwid2luZG93IiwidHQiLCJQbGF0Zm9ybSIsInJlcG9ydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGp1c3RFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxNQUFSLEdBQWlCLEtBQUssQ0FBdEI7O0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUdDLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLElBQVosR0FBbUIsWUFBWTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7SUFDQUMsRUFBRSxDQUFDQyxJQUFILENBQVFDLEVBQVIsQ0FBVyxTQUFYLEVBQXNCLEtBQUtDLFNBQTNCLEVBQXNDLElBQXRDO0lBQ0FILEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxFQUFSLENBQVcsa0JBQVgsRUFBK0IsS0FBS0Usa0JBQXBDLEVBQXdELElBQXhEO0lBQ0FKLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxFQUFSLENBQVcscUJBQVgsRUFBa0MsS0FBS0cscUJBQXZDLEVBQThELElBQTlEO0lBQ0FMLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxFQUFSLENBQVcsY0FBWCxFQUEyQixLQUFLSSxhQUFoQyxFQUErQyxJQUEvQztJQUNBTixFQUFFLENBQUNDLElBQUgsQ0FBUUMsRUFBUixDQUFXLGVBQVgsRUFBNEIsS0FBS0ssY0FBakMsRUFBaUQsSUFBakQ7SUFDQVAsRUFBRSxDQUFDQyxJQUFILENBQVFDLEVBQVIsQ0FBVyxlQUFYLEVBQTRCLEtBQUtNLGNBQWpDLEVBQWlELElBQWpEO0VBQ0gsQ0FSRDs7RUFTQWIsQ0FBQyxDQUFDQyxTQUFGLENBQVlPLFNBQVosR0FBd0IsVUFBVVIsQ0FBVixFQUFhYyxDQUFiLEVBQWdCO0lBQ3BDLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLE9BQUo7SUFDSDs7SUFDREMsTUFBTSxDQUFDQyxFQUFQO0VBQ0gsQ0FMRDs7RUFNQWhCLENBQUMsQ0FBQ0MsU0FBRixDQUFZUSxrQkFBWixHQUFpQyxVQUFVVCxDQUFWLEVBQWFjLENBQWIsRUFBZ0I7SUFDN0NqQixnQkFBZ0IsQ0FBQ29CLFFBQWpCLENBQTBCQyxNQUExQixDQUFpQ2xCLENBQWpDLEVBQW9DbUIsSUFBSSxDQUFDQyxTQUFMLENBQWVOLENBQWYsQ0FBcEM7SUFDQVgsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQXdCSixDQUF4QixHQUE0QixRQUE1QixHQUF1Q21CLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixDQUFmLENBQW5ELEVBQXNFLGVBQXRFO0VBQ0gsQ0FIRDs7RUFJQWQsQ0FBQyxDQUFDQyxTQUFGLENBQVlTLHFCQUFaLEdBQW9DLFVBQVVWLENBQVYsRUFBYTtJQUM3Q0gsZ0JBQWdCLENBQUNvQixRQUFqQixDQUEwQkksV0FBMUIsQ0FBc0NyQixDQUF0QztJQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBNEJKLENBQTVCLEdBQWdDLEdBQTVDLEVBQWlELGVBQWpEO0VBQ0gsQ0FIRDs7RUFJQUEsQ0FBQyxDQUFDQyxTQUFGLENBQVlVLGFBQVosR0FBNEIsWUFBWSxDQUFFLENBQTFDOztFQUNBWCxDQUFDLENBQUNDLFNBQUYsQ0FBWVcsY0FBWixHQUE2QixVQUFVWixDQUFWLEVBQWE7SUFDdENHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUE2QkosQ0FBN0IsR0FBaUMsUUFBN0MsRUFBdUQsZUFBdkQ7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNDLFNBQUYsQ0FBWVksY0FBWixHQUE2QixZQUFZLENBQUUsQ0FBM0M7O0VBQ0EsT0FBT2IsQ0FBUDtBQUNILENBL0JPLEVBQVI7O0FBZ0NBTCxPQUFPLENBQUNDLE1BQVIsR0FBaUIsSUFBSUcsQ0FBSixFQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5SZXBvcnQgPSB2b2lkIDA7XG52YXIgJHBsYXRmb3JtTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BsYXRmb3JtTWFuYWdlclwiKTtcbnZhciBvID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMljpHYW1lTG9nTWdyXCIpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiZ2FtZWxvZ1wiLCB0aGlzLm9uR2FtZUxvZywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJnYW1lbG9nX1RoaW5raW5nXCIsIHRoaXMub25HYW1lTG9nX1RoaW5raW5nLCB0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcImdhbWVsb2dfYWRqdXN0RXZlbnRcIiwgdGhpcy5vbkdhbWVMb2dfYWRqdXN0RXZlbnQsIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwiZ2FtZVRpbWUtbG9nXCIsIHRoaXMub25HYW1lVGltZUxvZywgdGhpcyk7XG4gICAgICAgIGNjLmdhbWUub24oXCJnYW1lTGV2ZWwtbG9nXCIsIHRoaXMub25HYW1lTGV2ZWxMb2csIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKFwibGFuZ3VhZ2UtaW5pdFwiLCB0aGlzLm9uTGFuZ3VhZ2VJbml0LCB0aGlzKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLm9uR2FtZUxvZyA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSBcImNvdW50XCI7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnR0O1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUub25HYW1lTG9nX1RoaW5raW5nID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5yZXBvcnQodCwgSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFtHYW1lTG9nXSDkuovku7bmiZPngrk6IFwiICsgdCArIFwiICDlrZDkuovku7YgXCIgKyBKU09OLnN0cmluZ2lmeShlKSwgXCJjb2xvcjojRjUwMEZGXCIpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUub25HYW1lTG9nX2FkanVzdEV2ZW50ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5hZGp1c3RFdmVudCh0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIlYyBbYWRqdXN0RXZlbnRdIOS6i+S7tuaJk+eCuTogXCIgKyB0ICsgXCIgXCIsIFwiY29sb3I6I0Y1MDBGRlwiKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLm9uR2FtZVRpbWVMb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0LnByb3RvdHlwZS5vbkdhbWVMZXZlbExvZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWMgW0dhbWVMb2ddICoqKiog5YWz5Y2h5omT54K5OiBcIiArIHQgKyBcIiAqKioqfVwiLCBcImNvbG9yOiNGNTAwRkZcIik7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5vbkxhbmd1YWdlSW5pdCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuUmVwb3J0ID0gbmV3IG8oKTtcbiJdfQ==