
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameNamespace.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffe69ru/7JH5byOg3hwtb9X', 'GameNamespace');
// scripts/GameNamespace.js

"use strict";

var r;
exports.game = void 0;

(function (t) {
  t.log = console.log;
  t.warn = console.warn;
  t.error = console.error;
  t.userID = null;
  t.currentLevel = 1;
  t.boxAtlas = null;
  t.drinkAtlas = null;
  t.plateAtlas = null;
  t.totalAmount = null;
  t.remainingAmount = null;
  t.dragonMoving = !0;
  t.canUseProps = !0;

  t.random = function (t, e) {
    if (void 0 === e) {
      e = 0;
    }

    return (t - e) * Math.random() + e;
  };

  t.randomInt = function (t, e) {
    if (void 0 === e) {
      e = 0;
    }

    return ~~((t - e) * Math.random() + e);
  };
})(r = exports.game || (exports.game = {}));

window.game = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVOYW1lc3BhY2UuanMiXSwibmFtZXMiOlsiciIsImV4cG9ydHMiLCJnYW1lIiwidCIsImxvZyIsImNvbnNvbGUiLCJ3YXJuIiwiZXJyb3IiLCJ1c2VySUQiLCJjdXJyZW50TGV2ZWwiLCJib3hBdGxhcyIsImRyaW5rQXRsYXMiLCJwbGF0ZUF0bGFzIiwidG90YWxBbW91bnQiLCJyZW1haW5pbmdBbW91bnQiLCJkcmFnb25Nb3ZpbmciLCJjYW5Vc2VQcm9wcyIsInJhbmRvbSIsImUiLCJNYXRoIiwicmFuZG9tSW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQUMsT0FBTyxDQUFDQyxJQUFSLEdBQWUsS0FBSyxDQUFwQjs7QUFDQSxDQUFDLFVBQVVDLENBQVYsRUFBYTtFQUNWQSxDQUFDLENBQUNDLEdBQUYsR0FBUUMsT0FBTyxDQUFDRCxHQUFoQjtFQUNBRCxDQUFDLENBQUNHLElBQUYsR0FBU0QsT0FBTyxDQUFDQyxJQUFqQjtFQUNBSCxDQUFDLENBQUNJLEtBQUYsR0FBVUYsT0FBTyxDQUFDRSxLQUFsQjtFQUNBSixDQUFDLENBQUNLLE1BQUYsR0FBVyxJQUFYO0VBQ0FMLENBQUMsQ0FBQ00sWUFBRixHQUFpQixDQUFqQjtFQUNBTixDQUFDLENBQUNPLFFBQUYsR0FBYSxJQUFiO0VBQ0FQLENBQUMsQ0FBQ1EsVUFBRixHQUFlLElBQWY7RUFDQVIsQ0FBQyxDQUFDUyxVQUFGLEdBQWUsSUFBZjtFQUNBVCxDQUFDLENBQUNVLFdBQUYsR0FBZ0IsSUFBaEI7RUFDQVYsQ0FBQyxDQUFDVyxlQUFGLEdBQW9CLElBQXBCO0VBQ0FYLENBQUMsQ0FBQ1ksWUFBRixHQUFpQixDQUFDLENBQWxCO0VBQ0FaLENBQUMsQ0FBQ2EsV0FBRixHQUFnQixDQUFDLENBQWpCOztFQUNBYixDQUFDLENBQUNjLE1BQUYsR0FBVyxVQUFVZCxDQUFWLEVBQWFlLENBQWIsRUFBZ0I7SUFDdkIsSUFBSSxLQUFLLENBQUwsS0FBV0EsQ0FBZixFQUFrQjtNQUNkQSxDQUFDLEdBQUcsQ0FBSjtJQUNIOztJQUNELE9BQU8sQ0FBQ2YsQ0FBQyxHQUFHZSxDQUFMLElBQVVDLElBQUksQ0FBQ0YsTUFBTCxFQUFWLEdBQTBCQyxDQUFqQztFQUNILENBTEQ7O0VBTUFmLENBQUMsQ0FBQ2lCLFNBQUYsR0FBYyxVQUFVakIsQ0FBVixFQUFhZSxDQUFiLEVBQWdCO0lBQzFCLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLENBQUo7SUFDSDs7SUFDRCxPQUFPLENBQUMsRUFBRSxDQUFDZixDQUFDLEdBQUdlLENBQUwsSUFBVUMsSUFBSSxDQUFDRixNQUFMLEVBQVYsR0FBMEJDLENBQTVCLENBQVI7RUFDSCxDQUxEO0FBTUgsQ0F6QkQsRUF5QklsQixDQUFDLEdBQUdDLE9BQU8sQ0FBQ0MsSUFBUixLQUFpQkQsT0FBTyxDQUFDQyxJQUFSLEdBQWUsRUFBaEMsQ0F6QlI7O0FBMEJBbUIsTUFBTSxDQUFDbkIsSUFBUCxHQUFjRixDQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbmV4cG9ydHMuZ2FtZSA9IHZvaWQgMDtcbihmdW5jdGlvbiAodCkge1xuICAgIHQubG9nID0gY29uc29sZS5sb2c7XG4gICAgdC53YXJuID0gY29uc29sZS53YXJuO1xuICAgIHQuZXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgIHQudXNlcklEID0gbnVsbDtcbiAgICB0LmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgdC5ib3hBdGxhcyA9IG51bGw7XG4gICAgdC5kcmlua0F0bGFzID0gbnVsbDtcbiAgICB0LnBsYXRlQXRsYXMgPSBudWxsO1xuICAgIHQudG90YWxBbW91bnQgPSBudWxsO1xuICAgIHQucmVtYWluaW5nQW1vdW50ID0gbnVsbDtcbiAgICB0LmRyYWdvbk1vdmluZyA9ICEwO1xuICAgIHQuY2FuVXNlUHJvcHMgPSAhMDtcbiAgICB0LnJhbmRvbSA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodCAtIGUpICogTWF0aC5yYW5kb20oKSArIGU7XG4gICAgfTtcbiAgICB0LnJhbmRvbUludCA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHtcbiAgICAgICAgICAgIGUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB+figodCAtIGUpICogTWF0aC5yYW5kb20oKSArIGUpO1xuICAgIH07XG59KSgociA9IGV4cG9ydHMuZ2FtZSB8fCAoZXhwb3J0cy5nYW1lID0ge30pKSk7XG53aW5kb3cuZ2FtZSA9IHI7XG4iXX0=