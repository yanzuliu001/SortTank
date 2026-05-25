
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TimeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3369Qy7fJDXrHBZFkp3LUG', 'TimeManager');
// scripts/TimeManager.js

"use strict";

var r;

var a = function () {
  function t() {
    this.timerController = null;
    this.events = [];
    this.serverStartTime = 0;
    this.useTime = 0;
  }

  t.prototype.init = function (t) {
    var e = this;
    this.timerController = cc.find("Canvas").addComponent(c);
    this.serverStartTime = t;
    console.log("开始计时");
    this.schedule(function () {
      e.useTime += 1;

      if (e.events.length) {
        for (var t = 0; t < e.events.length; t++) {
          e.events[t]();
        }
      }
    }, 1);
  };

  t.prototype.addEventListener = function (t) {
    this.events.push(t);
  };

  t.prototype.removeEventListener = function (t) {
    var e = this.events.indexOf(t);
    this.events.splice(e, 1);
  };

  t.prototype.schedule = function (t, e, n, r) {
    this.timerController.schedule(t, e, n, r);
  };

  t.prototype.scheduleOnce = function (t, e) {
    this.timerController.scheduleOnce(t, e);
  };

  t.prototype.unschedule = function (t) {
    this.timerController.unschedule(t);
  };

  t.prototype.unscheduleAllCallbacks = function () {
    this.timerController.unscheduleAllCallbacks();
  };

  t.prototype.getCurrentTime = function () {
    return 1e3 * (this.serverStartTime + this.useTime);
  };

  return t;
}();

var s = cc._decorator.ccclass;

var c = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  return __decorate([s], e);
}(cc.Component);

var l = new a();
exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RpbWVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbInIiLCJhIiwidCIsInRpbWVyQ29udHJvbGxlciIsImV2ZW50cyIsInNlcnZlclN0YXJ0VGltZSIsInVzZVRpbWUiLCJwcm90b3R5cGUiLCJpbml0IiwiZSIsImNjIiwiZmluZCIsImFkZENvbXBvbmVudCIsImMiLCJjb25zb2xlIiwibG9nIiwic2NoZWR1bGUiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwicHVzaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbmRleE9mIiwic3BsaWNlIiwibiIsInNjaGVkdWxlT25jZSIsInVuc2NoZWR1bGUiLCJ1bnNjaGVkdWxlQWxsQ2FsbGJhY2tzIiwiZ2V0Q3VycmVudFRpbWUiLCJzIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiLCJsIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLGVBQUwsR0FBdUIsSUFBdkI7SUFDQSxLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLGVBQUwsR0FBdUIsQ0FBdkI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsQ0FBZjtFQUNIOztFQUNESixDQUFDLENBQUNLLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixVQUFVTixDQUFWLEVBQWE7SUFDNUIsSUFBSU8sQ0FBQyxHQUFHLElBQVI7SUFDQSxLQUFLTixlQUFMLEdBQXVCTyxFQUFFLENBQUNDLElBQUgsQ0FBUSxRQUFSLEVBQWtCQyxZQUFsQixDQUErQkMsQ0FBL0IsQ0FBdkI7SUFDQSxLQUFLUixlQUFMLEdBQXVCSCxDQUF2QjtJQUNBWSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0lBQ0EsS0FBS0MsUUFBTCxDQUFjLFlBQVk7TUFDdEJQLENBQUMsQ0FBQ0gsT0FBRixJQUFhLENBQWI7O01BQ0EsSUFBSUcsQ0FBQyxDQUFDTCxNQUFGLENBQVNhLE1BQWIsRUFBcUI7UUFDakIsS0FBSyxJQUFJZixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTyxDQUFDLENBQUNMLE1BQUYsQ0FBU2EsTUFBN0IsRUFBcUNmLENBQUMsRUFBdEMsRUFBMEM7VUFDdENPLENBQUMsQ0FBQ0wsTUFBRixDQUFTRixDQUFUO1FBQ0g7TUFDSjtJQUNKLENBUEQsRUFPRyxDQVBIO0VBUUgsQ0FiRDs7RUFjQUEsQ0FBQyxDQUFDSyxTQUFGLENBQVlXLGdCQUFaLEdBQStCLFVBQVVoQixDQUFWLEVBQWE7SUFDeEMsS0FBS0UsTUFBTCxDQUFZZSxJQUFaLENBQWlCakIsQ0FBakI7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNLLFNBQUYsQ0FBWWEsbUJBQVosR0FBa0MsVUFBVWxCLENBQVYsRUFBYTtJQUMzQyxJQUFJTyxDQUFDLEdBQUcsS0FBS0wsTUFBTCxDQUFZaUIsT0FBWixDQUFvQm5CLENBQXBCLENBQVI7SUFDQSxLQUFLRSxNQUFMLENBQVlrQixNQUFaLENBQW1CYixDQUFuQixFQUFzQixDQUF0QjtFQUNILENBSEQ7O0VBSUFQLENBQUMsQ0FBQ0ssU0FBRixDQUFZUyxRQUFaLEdBQXVCLFVBQVVkLENBQVYsRUFBYU8sQ0FBYixFQUFnQmMsQ0FBaEIsRUFBbUJ2QixDQUFuQixFQUFzQjtJQUN6QyxLQUFLRyxlQUFMLENBQXFCYSxRQUFyQixDQUE4QmQsQ0FBOUIsRUFBaUNPLENBQWpDLEVBQW9DYyxDQUFwQyxFQUF1Q3ZCLENBQXZDO0VBQ0gsQ0FGRDs7RUFHQUUsQ0FBQyxDQUFDSyxTQUFGLENBQVlpQixZQUFaLEdBQTJCLFVBQVV0QixDQUFWLEVBQWFPLENBQWIsRUFBZ0I7SUFDdkMsS0FBS04sZUFBTCxDQUFxQnFCLFlBQXJCLENBQWtDdEIsQ0FBbEMsRUFBcUNPLENBQXJDO0VBQ0gsQ0FGRDs7RUFHQVAsQ0FBQyxDQUFDSyxTQUFGLENBQVlrQixVQUFaLEdBQXlCLFVBQVV2QixDQUFWLEVBQWE7SUFDbEMsS0FBS0MsZUFBTCxDQUFxQnNCLFVBQXJCLENBQWdDdkIsQ0FBaEM7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNLLFNBQUYsQ0FBWW1CLHNCQUFaLEdBQXFDLFlBQVk7SUFDN0MsS0FBS3ZCLGVBQUwsQ0FBcUJ1QixzQkFBckI7RUFDSCxDQUZEOztFQUdBeEIsQ0FBQyxDQUFDSyxTQUFGLENBQVlvQixjQUFaLEdBQTZCLFlBQVk7SUFDckMsT0FBTyxPQUFPLEtBQUt0QixlQUFMLEdBQXVCLEtBQUtDLE9BQW5DLENBQVA7RUFDSCxDQUZEOztFQUdBLE9BQU9KLENBQVA7QUFDSCxDQTVDTyxFQUFSOztBQTZDQSxJQUFJMEIsQ0FBQyxHQUFHbEIsRUFBRSxDQUFDbUIsVUFBSCxDQUFjQyxPQUF0Qjs7QUFDQSxJQUFJakIsQ0FBQyxHQUFJLFVBQVVYLENBQVYsRUFBYTtFQUNsQixTQUFTTyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNQLENBQVQsSUFBY0EsQ0FBQyxDQUFDNkIsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ3hCLENBQUQsRUFBSVAsQ0FBSixDQUFUOztFQUNBLE9BQU9nQyxVQUFVLENBQUMsQ0FBQ04sQ0FBRCxDQUFELEVBQU1uQixDQUFOLENBQWpCO0FBQ0gsQ0FOTyxDQU1MQyxFQUFFLENBQUN5QixTQU5FLENBQVI7O0FBT0EsSUFBSUMsQ0FBQyxHQUFHLElBQUluQyxDQUFKLEVBQVI7QUFDQW9DLE9BQU8sV0FBUCxHQUFrQkQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyIGEgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMudGltZXJDb250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJTdGFydFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnVzZVRpbWUgPSAwO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICB0aGlzLnRpbWVyQ29udHJvbGxlciA9IGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ29tcG9uZW50KGMpO1xuICAgICAgICB0aGlzLnNlcnZlclN0YXJ0VGltZSA9IHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL6K6h5pe2XCIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGUudXNlVGltZSArPSAxO1xuICAgICAgICAgICAgaWYgKGUuZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgZS5ldmVudHMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZS5ldmVudHNbdF0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1c2godCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLmV2ZW50cy5pbmRleE9mKHQpO1xuICAgICAgICB0aGlzLmV2ZW50cy5zcGxpY2UoZSwgMSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICh0LCBlLCBuLCByKSB7XG4gICAgICAgIHRoaXMudGltZXJDb250cm9sbGVyLnNjaGVkdWxlKHQsIGUsIG4sIHIpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2NoZWR1bGVPbmNlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdGhpcy50aW1lckNvbnRyb2xsZXIuc2NoZWR1bGVPbmNlKHQsIGUpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUudW5zY2hlZHVsZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMudGltZXJDb250cm9sbGVyLnVuc2NoZWR1bGUodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyQ29udHJvbGxlci51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRDdXJyZW50VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDFlMyAqICh0aGlzLnNlcnZlclN0YXJ0VGltZSArIHRoaXMudXNlVGltZSk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG52YXIgcyA9IGNjLl9kZWNvcmF0b3IuY2NjbGFzcztcbnZhciBjID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG59KShjYy5Db21wb25lbnQpO1xudmFyIGwgPSBuZXcgYSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbDtcbiJdfQ==