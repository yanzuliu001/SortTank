
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TaskManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b3060X9qRJUaEHODJxek+/', 'TaskManager');
// scripts/TaskManager.js

"use strict";

var $userConst = require("./UserConst");

var $platformManager = require("./PlatformManager");

var $userManager = require("./UserManager");

var $shuShuConst = require("./ShuShuConst");

var s = new (function () {
  function t() {
    this.taskConfig = [];
  }

  t.prototype.init = function () {};

  t.prototype.taskFinish = function () {
    if (!$platformManager.Platform.getConfig().hasPurchase) {
      var t = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
      var e = $userManager.User.get("passLevel" + t) || 0;
      e += 1;
      $userManager.User.set("passLevel" + t, e);

      for (var n = 0; n < this.taskConfig.length; n++) {
        var s = this.taskConfig[n];
        var c = this.paramObj(s.finishCondition);

        if (t == c.mode && e == c.passLevel) {
          var l = this.paramObj(s.reward);
          console.log("测试解锁皮肤", l.skinID);
          var u = $userManager.User.get($userConst.UserData.skinList);
          var f = Number(l.skinID);

          if (u[0].includes(f)) {//
          } else {
            u[0].push(f);
          }

          $userManager.User.set($userConst.UserData.skinList, u);
          var d = $userManager.User.get($userConst.UserData.useSkinIDList);
          d[0] = f;
          $userManager.User.set($userConst.UserData.useSkinIDList, d);
          cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Skin_unlock, {
            mode: 0,
            id: f
          });
          break;
        }
      }
    }
  };

  t.prototype.paramObj = function (t) {
    var e;
    var n = /([^&=]+)=?([^&]*)/g;
    var r = /\+/g;

    var o = function o(t) {
      return decodeURIComponent(t.replace(r, " "));
    };

    for (var i = {}; e = n.exec(t);) {
      i[o(e[1])] = o(e[2]);
    }

    return i;
  };

  return t;
}())();
exports["default"] = s;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Rhc2tNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIiR1c2VyQ29uc3QiLCJyZXF1aXJlIiwiJHBsYXRmb3JtTWFuYWdlciIsIiR1c2VyTWFuYWdlciIsIiRzaHVTaHVDb25zdCIsInMiLCJ0IiwidGFza0NvbmZpZyIsInByb3RvdHlwZSIsImluaXQiLCJ0YXNrRmluaXNoIiwiUGxhdGZvcm0iLCJnZXRDb25maWciLCJoYXNQdXJjaGFzZSIsIlVzZXIiLCJnZXRUZW1wRGF0YSIsIlRlbXBEYXRhIiwiQ1VSUkVOVF9NT0RFIiwiZSIsImdldCIsInNldCIsIm4iLCJsZW5ndGgiLCJjIiwicGFyYW1PYmoiLCJmaW5pc2hDb25kaXRpb24iLCJtb2RlIiwicGFzc0xldmVsIiwibCIsInJld2FyZCIsImNvbnNvbGUiLCJsb2ciLCJza2luSUQiLCJ1IiwiVXNlckRhdGEiLCJza2luTGlzdCIsImYiLCJOdW1iZXIiLCJpbmNsdWRlcyIsInB1c2giLCJkIiwidXNlU2tpbklETGlzdCIsImNjIiwiZ2FtZSIsImVtaXQiLCJTaHVTaHVDb25zdCIsIlNraW5fdW5sb2NrIiwiaWQiLCJyIiwibyIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJpIiwiZXhlYyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBR0QsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlFLFlBQVksR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUcsWUFBWSxHQUFHSCxPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJSSxDQUFDLEdBQUcsS0FBTSxZQUFZO0VBQ3RCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLFVBQUwsR0FBa0IsRUFBbEI7RUFDSDs7RUFDREQsQ0FBQyxDQUFDRSxTQUFG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QyxDQUFDNkMsT0FBRixDQUFVSCxDQUFWLEVBQWEsR0FBYixDQUFELENBQXpCO0lBQ0gsQ0FGRDs7SUFHQSxLQUFLLElBQUlJLENBQUMsR0FBRyxFQUFiLEVBQWtCbEMsQ0FBQyxHQUFHRyxDQUFDLENBQUNnQyxJQUFGLENBQU8vQyxDQUFQLENBQXRCLEdBQW9DO01BQ2hDOEMsQ0FBQyxDQUFDSCxDQUFDLENBQUMvQixDQUFDLENBQUMsQ0FBRCxDQUFGLENBQUYsQ0FBRCxHQUFhK0IsQ0FBQyxDQUFDL0IsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFkO0lBQ0g7O0lBQ0QsT0FBT2tDLENBQVA7RUFDSCxDQVhEOztFQVlBLE9BQU85QyxDQUFQO0FBQ0gsQ0FsRFksRUFBTCxHQUFSO0FBbURBZ0QsT0FBTyxXQUFQLEdBQWtCakQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkdXNlckNvbnN0ID0gcmVxdWlyZShcIi4vVXNlckNvbnN0XCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHVzZXJNYW5hZ2VyID0gcmVxdWlyZShcIi4vVXNlck1hbmFnZXJcIik7XG52YXIgJHNodVNodUNvbnN0ID0gcmVxdWlyZShcIi4vU2h1U2h1Q29uc3RcIik7XG52YXIgcyA9IG5ldyAoKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLnRhc2tDb25maWcgPSBbXTtcbiAgICB9XG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLnRhc2tGaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5nZXRDb25maWcoKS5oYXNQdXJjaGFzZSkge1xuICAgICAgICAgICAgdmFyIHQgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YSgkdXNlckNvbnN0LlRlbXBEYXRhLkNVUlJFTlRfTU9ERSk7XG4gICAgICAgICAgICB2YXIgZSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldChcInBhc3NMZXZlbFwiICsgdCkgfHwgMDtcbiAgICAgICAgICAgIGUgKz0gMTtcbiAgICAgICAgICAgICR1c2VyTWFuYWdlci5Vc2VyLnNldChcInBhc3NMZXZlbFwiICsgdCwgZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRoaXMudGFza0NvbmZpZy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy50YXNrQ29uZmlnW25dO1xuICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5wYXJhbU9iaihzLmZpbmlzaENvbmRpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHQgPT0gYy5tb2RlICYmIGUgPT0gYy5wYXNzTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB0aGlzLnBhcmFtT2JqKHMucmV3YXJkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5Xop6PplIHnmq7ogqRcIiwgbC5za2luSUQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdSA9ICR1c2VyTWFuYWdlci5Vc2VyLmdldCgkdXNlckNvbnN0LlVzZXJEYXRhLnNraW5MaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBOdW1iZXIobC5za2luSUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodVswXS5pbmNsdWRlcyhmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVbMF0ucHVzaChmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS5za2luTGlzdCwgdSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0KCR1c2VyQ29uc3QuVXNlckRhdGEudXNlU2tpbklETGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIGRbMF0gPSBmO1xuICAgICAgICAgICAgICAgICAgICAkdXNlck1hbmFnZXIuVXNlci5zZXQoJHVzZXJDb25zdC5Vc2VyRGF0YS51c2VTa2luSURMaXN0LCBkKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwiZ2FtZWxvZ19UaGlua2luZ1wiLCAkc2h1U2h1Q29uc3QuU2h1U2h1Q29uc3QuU2tpbl91bmxvY2ssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5wYXJhbU9iaiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICB2YXIgbiA9IC8oW14mPV0rKT0/KFteJl0qKS9nO1xuICAgICAgICB2YXIgciA9IC9cXCsvZztcbiAgICAgICAgdmFyIG8gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh0LnJlcGxhY2UociwgXCIgXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHt9OyAoZSA9IG4uZXhlYyh0KSk7ICkge1xuICAgICAgICAgICAgaVtvKGVbMV0pXSA9IG8oZVsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCkpKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBzO1xuIl19