
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ChallengeSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5e5dwYToVAEK9YeCPb25/3', 'ChallengeSystem');
// scripts/ChallengeSystem.js

"use strict";

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $timeManager = require("./TimeManager");

var $languageManager = require("./LanguageManager");

var s = new (function () {
  function t() {
    this.durationDay = 3;
    this.isOpen = !1;
    this.surplusTime = 0;
  }

  t.prototype.init = function () {
    var t = $localStorageManager["default"].get($localStorageConst["default"].challengeStartTime) || 0;

    if (t) {
      var e = $timeManager["default"].getCurrentTime();
      this.surplusTime = 864e5 * this.durationDay - (e - t);

      if (this.surplusTime > 0) {
        this.isOpen = !0;
        $timeManager["default"].addEventListener(this.timerFun.bind(this));
      } else {
        this.expire();
      }
    } else {
      $localStorageManager["default"].set($localStorageConst["default"].challengeStartTime, 0);
    }
  };

  t.prototype.expire = function () {
    $localStorageManager["default"].set($localStorageConst["default"].challengeStartTime, 0);
    $localStorageManager["default"].set($localStorageConst["default"].challengeUnlockAmount, 0);
    $localStorageManager["default"].set($localStorageConst["default"].challengeReceive, []);
  };

  t.prototype.timerFun = function () {
    this.surplusTime -= 1e3;
    cc.game.emit("challengeExpire_timerFun");

    if (this.surplusTime <= 0) {
      this.expire();
      console.log("极限挑战系统到期");
      cc.game.emit("challengeExpire");
      $timeManager["default"].removeEventListener(this.timerFun.bind(this));
    }
  };

  t.prototype.getSurplusTimeStr = function () {
    var t = Math.floor(this.surplusTime / 1e3 / 86400);
    var e = Math.floor(this.surplusTime / 1e3 % 86400 / 3600);
    var n = Math.floor(this.surplusTime / 1e3 % 3600 / 60);
    return $languageManager["default"].formatStr("%d天%d时%d分", t, e, n);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NoYWxsZW5nZVN5c3RlbS5qcyJdLCJuYW1lcyI6WyIkbG9jYWxTdG9yYWdlQ29uc3QiLCJyZXF1aXJlIiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCIkdGltZU1hbmFnZXIiLCIkbGFuZ3VhZ2VNYW5hZ2VyIiwicyIsInQiLCJkdXJhdGlvbkRheSIsImlzT3BlbiIsInN1cnBsdXNUaW1lIiwicHJvdG90eXBlIiwiaW5pdCIsImdldCIsImNoYWxsZW5nZVN0YXJ0VGltZSIsImUiLCJnZXRDdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aW1lckZ1biIsImJpbmQiLCJleHBpcmUiLCJzZXQiLCJjaGFsbGVuZ2VVbmxvY2tBbW91bnQiLCJjaGFsbGVuZ2VSZWNlaXZlIiwiY2MiLCJnYW1lIiwiZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U3VycGx1c1RpbWVTdHIiLCJNYXRoIiwiZmxvb3IiLCJuIiwiZm9ybWF0U3RyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxrQkFBa0IsR0FBR0MsT0FBTyxDQUFDLHFCQUFELENBQWhDOztBQUNBLElBQUlDLG9CQUFvQixHQUFHRCxPQUFPLENBQUMsdUJBQUQsQ0FBbEM7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxnQkFBZ0IsR0FBR0gsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlJLENBQUMsR0FBRyxLQUFNLFlBQVk7RUFDdEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsV0FBTCxHQUFtQixDQUFuQjtJQUNBLEtBQUtDLE1BQUwsR0FBYyxDQUFDLENBQWY7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLENBQW5CO0VBQ0g7O0VBQ0RILENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxJQUFaLEdBQW1CLFlBQVk7SUFDM0IsSUFBSUwsQ0FBQyxHQUFHSixvQkFBb0IsV0FBcEIsQ0FBNkJVLEdBQTdCLENBQWlDWixrQkFBa0IsV0FBbEIsQ0FBMkJhLGtCQUE1RCxLQUFtRixDQUEzRjs7SUFDQSxJQUFJUCxDQUFKLEVBQU87TUFDSCxJQUFJUSxDQUFDLEdBQUdYLFlBQVksV0FBWixDQUFxQlksY0FBckIsRUFBUjtNQUNBLEtBQUtOLFdBQUwsR0FBbUIsUUFBUSxLQUFLRixXQUFiLElBQTRCTyxDQUFDLEdBQUdSLENBQWhDLENBQW5COztNQUNBLElBQUksS0FBS0csV0FBTCxHQUFtQixDQUF2QixFQUEwQjtRQUN0QixLQUFLRCxNQUFMLEdBQWMsQ0FBQyxDQUFmO1FBQ0FMLFlBQVksV0FBWixDQUFxQmEsZ0JBQXJCLENBQXNDLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUF0QztNQUNILENBSEQsTUFHTztRQUNILEtBQUtDLE1BQUw7TUFDSDtJQUNKLENBVEQsTUFTTztNQUNIakIsb0JBQW9CLFdBQXBCLENBQTZCa0IsR0FBN0IsQ0FBaUNwQixrQkFBa0IsV0FBbEIsQ0FBMkJhLGtCQUE1RCxFQUFnRixDQUFoRjtJQUNIO0VBQ0osQ0FkRDs7RUFlQVAsQ0FBQyxDQUFDSSxTQUFGLENBQVlTLE1BQVosR0FBcUIsWUFBWTtJQUM3QmpCLG9CQUFvQixXQUFwQixDQUE2QmtCLEdBQTdCLENBQWlDcEIsa0JBQWtCLFdBQWxCLENBQTJCYSxrQkFBNUQsRUFBZ0YsQ0FBaEY7SUFDQVgsb0JBQW9CLFdBQXBCLENBQTZCa0IsR0FBN0IsQ0FBaUNwQixrQkFBa0IsV0FBbEIsQ0FBMkJxQixxQkFBNUQsRUFBbUYsQ0FBbkY7SUFDQW5CLG9CQUFvQixXQUFwQixDQUE2QmtCLEdBQTdCLENBQWlDcEIsa0JBQWtCLFdBQWxCLENBQTJCc0IsZ0JBQTVELEVBQThFLEVBQTlFO0VBQ0gsQ0FKRDs7RUFLQWhCLENBQUMsQ0FBQ0ksU0FBRixDQUFZTyxRQUFaLEdBQXVCLFlBQVk7SUFDL0IsS0FBS1IsV0FBTCxJQUFvQixHQUFwQjtJQUNBYyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBUixDQUFhLDBCQUFiOztJQUNBLElBQUksS0FBS2hCLFdBQUwsSUFBb0IsQ0FBeEIsRUFBMkI7TUFDdkIsS0FBS1UsTUFBTDtNQUNBTyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO01BQ0FKLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxJQUFSLENBQWEsaUJBQWI7TUFDQXRCLFlBQVksV0FBWixDQUFxQnlCLG1CQUFyQixDQUF5QyxLQUFLWCxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBekM7SUFDSDtFQUNKLENBVEQ7O0VBVUFaLENBQUMsQ0FBQ0ksU0FBRixDQUFZbUIsaUJBQVosR0FBZ0MsWUFBWTtJQUN4QyxJQUFJdkIsQ0FBQyxHQUFHd0IsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS3RCLFdBQUwsR0FBbUIsR0FBbkIsR0FBeUIsS0FBcEMsQ0FBUjtJQUNBLElBQUlLLENBQUMsR0FBR2dCLElBQUksQ0FBQ0MsS0FBTCxDQUFhLEtBQUt0QixXQUFMLEdBQW1CLEdBQXBCLEdBQTJCLEtBQTVCLEdBQXFDLElBQWhELENBQVI7SUFDQSxJQUFJdUIsQ0FBQyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBYSxLQUFLdEIsV0FBTCxHQUFtQixHQUFwQixHQUEyQixJQUE1QixHQUFvQyxFQUEvQyxDQUFSO0lBQ0EsT0FBT0wsZ0JBQWdCLFdBQWhCLENBQXlCNkIsU0FBekIsQ0FBbUMsV0FBbkMsRUFBZ0QzQixDQUFoRCxFQUFtRFEsQ0FBbkQsRUFBc0RrQixDQUF0RCxDQUFQO0VBQ0gsQ0FMRDs7RUFNQSxPQUFPMUIsQ0FBUDtBQUNILENBM0NZLEVBQUwsR0FBUjtBQTRDQTRCLE9BQU8sV0FBUCxHQUFrQjdCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJGxvY2FsU3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICR0aW1lTWFuYWdlciA9IHJlcXVpcmUoXCIuL1RpbWVNYW5hZ2VyXCIpO1xudmFyICRsYW5ndWFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9MYW5ndWFnZU1hbmFnZXJcIik7XG52YXIgcyA9IG5ldyAoKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLmR1cmF0aW9uRGF5ID0gMztcbiAgICAgICAgdGhpcy5pc09wZW4gPSAhMTtcbiAgICAgICAgdGhpcy5zdXJwbHVzVGltZSA9IDA7XG4gICAgfVxuICAgIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2hhbGxlbmdlU3RhcnRUaW1lKSB8fCAwO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgdmFyIGUgPSAkdGltZU1hbmFnZXIuZGVmYXVsdC5nZXRDdXJyZW50VGltZSgpO1xuICAgICAgICAgICAgdGhpcy5zdXJwbHVzVGltZSA9IDg2NGU1ICogdGhpcy5kdXJhdGlvbkRheSAtIChlIC0gdCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdXJwbHVzVGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICEwO1xuICAgICAgICAgICAgICAgICR0aW1lTWFuYWdlci5kZWZhdWx0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50aW1lckZ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBpcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LmNoYWxsZW5nZVN0YXJ0VGltZSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmV4cGlyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2hhbGxlbmdlU3RhcnRUaW1lLCAwKTtcbiAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2hhbGxlbmdlVW5sb2NrQW1vdW50LCAwKTtcbiAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2hhbGxlbmdlUmVjZWl2ZSwgW10pO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUudGltZXJGdW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3VycGx1c1RpbWUgLT0gMWUzO1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJjaGFsbGVuZ2VFeHBpcmVfdGltZXJGdW5cIik7XG4gICAgICAgIGlmICh0aGlzLnN1cnBsdXNUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaegemZkOaMkeaImOezu+e7n+WIsOacn1wiKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcImNoYWxsZW5nZUV4cGlyZVwiKTtcbiAgICAgICAgICAgICR0aW1lTWFuYWdlci5kZWZhdWx0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy50aW1lckZ1bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0U3VycGx1c1RpbWVTdHIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gTWF0aC5mbG9vcih0aGlzLnN1cnBsdXNUaW1lIC8gMWUzIC8gODY0MDApO1xuICAgICAgICB2YXIgZSA9IE1hdGguZmxvb3IoKCh0aGlzLnN1cnBsdXNUaW1lIC8gMWUzKSAlIDg2NDAwKSAvIDM2MDApO1xuICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoKCh0aGlzLnN1cnBsdXNUaW1lIC8gMWUzKSAlIDM2MDApIC8gNjApO1xuICAgICAgICByZXR1cm4gJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0LmZvcm1hdFN0cihcIiVk5aSpJWTml7YlZOWIhlwiLCB0LCBlLCBuKTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHM7XG4iXX0=