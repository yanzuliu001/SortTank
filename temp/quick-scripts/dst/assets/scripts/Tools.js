
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e3522OE29LSJwPKn6/U/O/', 'Tools');
// scripts/Tools.js

"use strict";

var r = function () {
  function t() {}

  t.deepClone = function (t) {
    var e;

    if (t instanceof Array) {
      e = [];
    } else {
      e = {};
    }

    for (var n in t) {
      e[n] = "object" == typeof t[n] ? this.deepClone(t[n]) : t[n];
    }

    return e;
  };

  t.shuffleArray = function (t) {
    var e;

    for (var n = t.length - 1; n > 0; n--) {
      var r = Math.floor(Math.random() * (n + 1));
      e = [t[r], t[n]];
      t[n] = e[0];
      t[r] = e[1];
    }

    return t;
  };

  t.isNationalDay = function () {
    var t = new Date();
    var e = t.getMonth() + 1;
    var n = t.getDate();
    return 10 == e && n <= 7;
  };

  t.rockAction = function (t, e, n) {
    var r = cc.rotateBy(t, e);
    var o = cc.rotateBy(t, -2 * e);
    var i = cc.rotateBy(0.8 * t, 1.6 * e);
    var a = cc.rotateBy(0.6 * t, -2 * e * 0.6);
    var s = cc.rotateBy(0.4 * t, 0.8 * e);
    var c = cc.rotateTo(0.2 * t, 0);
    return cc.sequence(r, o, i, a, s, c, cc.callFunc(function () {
      console.log("动画序列完成");
      n();
    }, this));
  };

  return t;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Rvb2xzLmpzIl0sIm5hbWVzIjpbInIiLCJ0IiwiZGVlcENsb25lIiwiZSIsIkFycmF5IiwibiIsInNodWZmbGVBcnJheSIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlzTmF0aW9uYWxEYXkiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwicm9ja0FjdGlvbiIsImNjIiwicm90YXRlQnkiLCJvIiwiaSIsImEiLCJzIiwiYyIsInJvdGF0ZVRvIiwic2VxdWVuY2UiLCJjYWxsRnVuYyIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsR0FBYyxVQUFVRCxDQUFWLEVBQWE7SUFDdkIsSUFBSUUsQ0FBSjs7SUFDQSxJQUFJRixDQUFDLFlBQVlHLEtBQWpCLEVBQXdCO01BQ3BCRCxDQUFDLEdBQUcsRUFBSjtJQUNILENBRkQsTUFFTztNQUNIQSxDQUFDLEdBQUcsRUFBSjtJQUNIOztJQUNELEtBQUssSUFBSUUsQ0FBVCxJQUFjSixDQUFkO01BQWlCRSxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFPLFlBQVksT0FBT0osQ0FBQyxDQUFDSSxDQUFELENBQXBCLEdBQTBCLEtBQUtILFNBQUwsQ0FBZUQsQ0FBQyxDQUFDSSxDQUFELENBQWhCLENBQTFCLEdBQWlESixDQUFDLENBQUNJLENBQUQsQ0FBekQ7SUFBakI7O0lBQ0EsT0FBT0YsQ0FBUDtFQUNILENBVEQ7O0VBVUFGLENBQUMsQ0FBQ0ssWUFBRixHQUFpQixVQUFVTCxDQUFWLEVBQWE7SUFDMUIsSUFBSUUsQ0FBSjs7SUFDQSxLQUFLLElBQUlFLENBQUMsR0FBR0osQ0FBQyxDQUFDTSxNQUFGLEdBQVcsQ0FBeEIsRUFBMkJGLENBQUMsR0FBRyxDQUEvQixFQUFrQ0EsQ0FBQyxFQUFuQyxFQUF1QztNQUNuQyxJQUFJTCxDQUFDLEdBQUdRLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLENBQUMsR0FBRyxDQUFyQixDQUFYLENBQVI7TUFDQUYsQ0FBQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0QsQ0FBRCxDQUFGLEVBQU9DLENBQUMsQ0FBQ0ksQ0FBRCxDQUFSLENBQUo7TUFDQUosQ0FBQyxDQUFDSSxDQUFELENBQUQsR0FBT0YsQ0FBQyxDQUFDLENBQUQsQ0FBUjtNQUNBRixDQUFDLENBQUNELENBQUQsQ0FBRCxHQUFPRyxDQUFDLENBQUMsQ0FBRCxDQUFSO0lBQ0g7O0lBQ0QsT0FBT0YsQ0FBUDtFQUNILENBVEQ7O0VBVUFBLENBQUMsQ0FBQ1UsYUFBRixHQUFrQixZQUFZO0lBQzFCLElBQUlWLENBQUMsR0FBRyxJQUFJVyxJQUFKLEVBQVI7SUFDQSxJQUFJVCxDQUFDLEdBQUdGLENBQUMsQ0FBQ1ksUUFBRixLQUFlLENBQXZCO0lBQ0EsSUFBSVIsQ0FBQyxHQUFHSixDQUFDLENBQUNhLE9BQUYsRUFBUjtJQUNBLE9BQU8sTUFBTVgsQ0FBTixJQUFXRSxDQUFDLElBQUksQ0FBdkI7RUFDSCxDQUxEOztFQU1BSixDQUFDLENBQUNjLFVBQUYsR0FBZSxVQUFVZCxDQUFWLEVBQWFFLENBQWIsRUFBZ0JFLENBQWhCLEVBQW1CO0lBQzlCLElBQUlMLENBQUMsR0FBR2dCLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZaEIsQ0FBWixFQUFlRSxDQUFmLENBQVI7SUFDQSxJQUFJZSxDQUFDLEdBQUdGLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZaEIsQ0FBWixFQUFlLENBQUMsQ0FBRCxHQUFLRSxDQUFwQixDQUFSO0lBQ0EsSUFBSWdCLENBQUMsR0FBR0gsRUFBRSxDQUFDQyxRQUFILENBQVksTUFBTWhCLENBQWxCLEVBQXFCLE1BQU1FLENBQTNCLENBQVI7SUFDQSxJQUFJaUIsQ0FBQyxHQUFHSixFQUFFLENBQUNDLFFBQUgsQ0FBWSxNQUFNaEIsQ0FBbEIsRUFBcUIsQ0FBQyxDQUFELEdBQUtFLENBQUwsR0FBUyxHQUE5QixDQUFSO0lBQ0EsSUFBSWtCLENBQUMsR0FBR0wsRUFBRSxDQUFDQyxRQUFILENBQVksTUFBTWhCLENBQWxCLEVBQXFCLE1BQU1FLENBQTNCLENBQVI7SUFDQSxJQUFJbUIsQ0FBQyxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FBWSxNQUFNdEIsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBUjtJQUNBLE9BQU9lLEVBQUUsQ0FBQ1EsUUFBSCxDQUNIeEIsQ0FERyxFQUVIa0IsQ0FGRyxFQUdIQyxDQUhHLEVBSUhDLENBSkcsRUFLSEMsQ0FMRyxFQU1IQyxDQU5HLEVBT0hOLEVBQUUsQ0FBQ1MsUUFBSCxDQUFZLFlBQVk7TUFDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7TUFDQXRCLENBQUM7SUFDSixDQUhELEVBR0csSUFISCxDQVBHLENBQVA7RUFZSCxDQW5CRDs7RUFvQkEsT0FBT0osQ0FBUDtBQUNILENBakRPLEVBQVI7O0FBa0RBMkIsT0FBTyxXQUFQLEdBQWtCNUIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICB0LmRlZXBDbG9uZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAodCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBlID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlID0ge307XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgbiBpbiB0KSBlW25dID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgdFtuXSA/IHRoaXMuZGVlcENsb25lKHRbbl0pIDogdFtuXTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICB0LnNodWZmbGVBcnJheSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBmb3IgKHZhciBuID0gdC5sZW5ndGggLSAxOyBuID4gMDsgbi0tKSB7XG4gICAgICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuICsgMSkpO1xuICAgICAgICAgICAgZSA9IFt0W3JdLCB0W25dXTtcbiAgICAgICAgICAgIHRbbl0gPSBlWzBdO1xuICAgICAgICAgICAgdFtyXSA9IGVbMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICB0LmlzTmF0aW9uYWxEYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGUgPSB0LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICB2YXIgbiA9IHQuZ2V0RGF0ZSgpO1xuICAgICAgICByZXR1cm4gMTAgPT0gZSAmJiBuIDw9IDc7XG4gICAgfTtcbiAgICB0LnJvY2tBY3Rpb24gPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgICAgICB2YXIgciA9IGNjLnJvdGF0ZUJ5KHQsIGUpO1xuICAgICAgICB2YXIgbyA9IGNjLnJvdGF0ZUJ5KHQsIC0yICogZSk7XG4gICAgICAgIHZhciBpID0gY2Mucm90YXRlQnkoMC44ICogdCwgMS42ICogZSk7XG4gICAgICAgIHZhciBhID0gY2Mucm90YXRlQnkoMC42ICogdCwgLTIgKiBlICogMC42KTtcbiAgICAgICAgdmFyIHMgPSBjYy5yb3RhdGVCeSgwLjQgKiB0LCAwLjggKiBlKTtcbiAgICAgICAgdmFyIGMgPSBjYy5yb3RhdGVUbygwLjIgKiB0LCAwKTtcbiAgICAgICAgcmV0dXJuIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIG8sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIHMsXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75bqP5YiX5a6M5oiQXCIpO1xuICAgICAgICAgICAgICAgIG4oKTtcbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSByO1xuIl19