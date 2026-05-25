
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HintSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13d71cqb7NL4oEA4oack7yj', 'HintSystem');
// scripts/HintSystem.js

"use strict";

var r = new (function () {
  function t() {
    this.hints = [];
  }

  t.prototype.init = function () {};

  t.prototype.addHint = function (t) {
    this.hints.push(t);
  };

  t.prototype.showHint = function (t) {
    if (t >= 0 && t < this.hints.length) {
      this.hints[t].show();
    }
  };

  t.prototype.hideHint = function (t) {
    if (t >= 0 && t < this.hints.length) {
      this.hints[t].hide();
    }
  };

  t.prototype.clearHints = function () {
    for (var t = 0; t < this.hints.length; t++) {
      this.hints[t].hide();
    }
  };

  return t;
}())();
exports["default"] = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hpbnRTeXN0ZW0uanMiXSwibmFtZXMiOlsiciIsInQiLCJoaW50cyIsInByb3RvdHlwZSIsImluaXQiLCJhZGRIaW50IiwicHVzaCIsInNob3dIaW50IiwibGVuZ3RoIiwic2hvdyIsImhpZGVIaW50IiwiaGlkZSIsImNsZWFySGludHMiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBRyxLQUFNLFlBQVk7RUFDdEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsS0FBTCxHQUFhLEVBQWI7RUFDSDs7RUFDREQsQ0FBQyxDQUFDRSxTQUFGLENBQVlDLElBQVosR0FBbUIsWUFBWSxDQUFFLENBQWpDOztFQUNBSCxDQUFDLENBQUNFLFNBQUYsQ0FBWUUsT0FBWixHQUFzQixVQUFVSixDQUFWLEVBQWE7SUFDL0IsS0FBS0MsS0FBTCxDQUFXSSxJQUFYLENBQWdCTCxDQUFoQjtFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ0UsU0FBRixDQUFZSSxRQUFaLEdBQXVCLFVBQVVOLENBQVYsRUFBYTtJQUNoQyxJQUFJQSxDQUFDLElBQUksQ0FBTCxJQUFVQSxDQUFDLEdBQUcsS0FBS0MsS0FBTCxDQUFXTSxNQUE3QixFQUFxQztNQUNqQyxLQUFLTixLQUFMLENBQVdELENBQVgsRUFBY1EsSUFBZDtJQUNIO0VBQ0osQ0FKRDs7RUFLQVIsQ0FBQyxDQUFDRSxTQUFGLENBQVlPLFFBQVosR0FBdUIsVUFBVVQsQ0FBVixFQUFhO0lBQ2hDLElBQUlBLENBQUMsSUFBSSxDQUFMLElBQVVBLENBQUMsR0FBRyxLQUFLQyxLQUFMLENBQVdNLE1BQTdCLEVBQXFDO01BQ2pDLEtBQUtOLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjVSxJQUFkO0lBQ0g7RUFDSixDQUpEOztFQUtBVixDQUFDLENBQUNFLFNBQUYsQ0FBWVMsVUFBWixHQUF5QixZQUFZO0lBQ2pDLEtBQUssSUFBSVgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxLQUFMLENBQVdNLE1BQS9CLEVBQXVDUCxDQUFDLEVBQXhDLEVBQTRDO01BQ3hDLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjVSxJQUFkO0lBQ0g7RUFDSixDQUpEOztFQUtBLE9BQU9WLENBQVA7QUFDSCxDQXhCWSxFQUFMLEdBQVI7QUF5QkFZLE9BQU8sV0FBUCxHQUFrQmIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByID0gbmV3ICgoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuaGludHMgPSBbXTtcbiAgICB9XG4gICAgdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHQucHJvdG90eXBlLmFkZEhpbnQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLmhpbnRzLnB1c2godCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93SGludCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ID49IDAgJiYgdCA8IHRoaXMuaGludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmhpbnRzW3RdLnNob3coKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuaGlkZUhpbnQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodCA+PSAwICYmIHQgPCB0aGlzLmhpbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oaW50c1t0XS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmNsZWFySGludHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdGhpcy5oaW50cy5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgdGhpcy5oaW50c1t0XS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHI7XG4iXX0=