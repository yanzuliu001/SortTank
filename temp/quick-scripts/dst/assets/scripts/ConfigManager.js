
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a32dfXmG0xMFaP2TzV79ZHA', 'ConfigManager');
// scripts/ConfigManager.js

"use strict";

exports.Config = void 0;

var r = function () {
  function t() {
    this.list = {};
  }

  t.prototype.preload = function (t) {
    if (this.list[t]) {//
    } else {
      cc.resources.preload(t);
    }
  };

  t.prototype.get = function (t) {
    var e = this;
    return new Promise(function (n, r) {
      if (e.list[t]) {
        return n(e.list[t]);
      }

      cc.resources.load(t, function (o, i) {
        if (o) {
          return r(), console.warn(o);
        } else {
          return e.list[t] = e.parseData(i.json, t), n(e.list[t]);
        }
      });
    });
  };

  t.prototype.parseData = function (t, e) {
    var n = {};

    for (var r = 0; r < t.values.length; r++) {
      n["" + t.values[r][0]] = t.values[r];
    }

    var o = t.values.length;
    var i = [];

    for (r = 0; r < o; r++) {
      var a = n["" + (r + 1)];

      if (a.every(function (t) {
        return 0 == t;
      })) {
        console.log(e + "表有空白数据，已过滤");
      } else {
        var s = {};

        for (var c = 0; c < a.length; c++) {
          s["" + t.keys[c]] = a[c];
        }

        i.push(s);
      }
    }

    return i;
  };

  return t;
}();

exports.Config = new r();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvbmZpZ01hbmFnZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIkNvbmZpZyIsInIiLCJ0IiwibGlzdCIsInByb3RvdHlwZSIsInByZWxvYWQiLCJjYyIsInJlc291cmNlcyIsImdldCIsImUiLCJQcm9taXNlIiwibiIsImxvYWQiLCJvIiwiaSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyc2VEYXRhIiwianNvbiIsInZhbHVlcyIsImxlbmd0aCIsImEiLCJldmVyeSIsImxvZyIsInMiLCJjIiwia2V5cyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixLQUFLLENBQXRCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLElBQUwsR0FBWSxFQUFaO0VBQ0g7O0VBQ0RELENBQUMsQ0FBQ0UsU0FBRixDQUFZQyxPQUFaLEdBQXNCLFVBQVVILENBQVYsRUFBYTtJQUMvQixJQUFJLEtBQUtDLElBQUwsQ0FBVUQsQ0FBVixDQUFKLEVBQWtCLENBQ2Q7SUFDSCxDQUZELE1BRU87TUFDSEksRUFBRSxDQUFDQyxTQUFILENBQWFGLE9BQWIsQ0FBcUJILENBQXJCO0lBQ0g7RUFDSixDQU5EOztFQU9BQSxDQUFDLENBQUNFLFNBQUYsQ0FBWUksR0FBWixHQUFrQixVQUFVTixDQUFWLEVBQWE7SUFDM0IsSUFBSU8sQ0FBQyxHQUFHLElBQVI7SUFDQSxPQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxDQUFWLEVBQWFWLENBQWIsRUFBZ0I7TUFDL0IsSUFBSVEsQ0FBQyxDQUFDTixJQUFGLENBQU9ELENBQVAsQ0FBSixFQUFlO1FBQ1gsT0FBT1MsQ0FBQyxDQUFDRixDQUFDLENBQUNOLElBQUYsQ0FBT0QsQ0FBUCxDQUFELENBQVI7TUFDSDs7TUFDREksRUFBRSxDQUFDQyxTQUFILENBQWFLLElBQWIsQ0FBa0JWLENBQWxCLEVBQXFCLFVBQVVXLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtRQUNqQyxJQUFJRCxDQUFKLEVBQU87VUFDSCxPQUFPWixDQUFDLElBQUljLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSCxDQUFiLENBQVo7UUFDSCxDQUZELE1BRU87VUFDSCxPQUFRSixDQUFDLENBQUNOLElBQUYsQ0FBT0QsQ0FBUCxJQUFZTyxDQUFDLENBQUNRLFNBQUYsQ0FBWUgsQ0FBQyxDQUFDSSxJQUFkLEVBQW9CaEIsQ0FBcEIsQ0FBYixFQUFzQ1MsQ0FBQyxDQUFDRixDQUFDLENBQUNOLElBQUYsQ0FBT0QsQ0FBUCxDQUFELENBQTlDO1FBQ0g7TUFDSixDQU5EO0lBT0gsQ0FYTSxDQUFQO0VBWUgsQ0FkRDs7RUFlQUEsQ0FBQyxDQUFDRSxTQUFGLENBQVlhLFNBQVosR0FBd0IsVUFBVWYsQ0FBVixFQUFhTyxDQUFiLEVBQWdCO0lBQ3BDLElBQUlFLENBQUMsR0FBRyxFQUFSOztJQUNBLEtBQUssSUFBSVYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsQ0FBQyxDQUFDaUIsTUFBRixDQUFTQyxNQUE3QixFQUFxQ25CLENBQUMsRUFBdEMsRUFBMEM7TUFDdENVLENBQUMsQ0FBQyxLQUFLVCxDQUFDLENBQUNpQixNQUFGLENBQVNsQixDQUFULEVBQVksQ0FBWixDQUFOLENBQUQsR0FBeUJDLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBU2xCLENBQVQsQ0FBekI7SUFDSDs7SUFDRCxJQUFJWSxDQUFDLEdBQUdYLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBU0MsTUFBakI7SUFDQSxJQUFJTixDQUFDLEdBQUcsRUFBUjs7SUFDQSxLQUFLYixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdZLENBQWhCLEVBQW1CWixDQUFDLEVBQXBCLEVBQXdCO01BQ3BCLElBQUlvQixDQUFDLEdBQUdWLENBQUMsQ0FBQyxNQUFNVixDQUFDLEdBQUcsQ0FBVixDQUFELENBQVQ7O01BQ0EsSUFDSW9CLENBQUMsQ0FBQ0MsS0FBRixDQUFRLFVBQVVwQixDQUFWLEVBQWE7UUFDakIsT0FBTyxLQUFLQSxDQUFaO01BQ0gsQ0FGRCxDQURKLEVBSUU7UUFDRWEsT0FBTyxDQUFDUSxHQUFSLENBQVlkLENBQUMsR0FBRyxZQUFoQjtNQUNILENBTkQsTUFNTztRQUNILElBQUllLENBQUMsR0FBRyxFQUFSOztRQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osQ0FBQyxDQUFDRCxNQUF0QixFQUE4QkssQ0FBQyxFQUEvQixFQUFtQztVQUMvQkQsQ0FBQyxDQUFDLEtBQUt0QixDQUFDLENBQUN3QixJQUFGLENBQU9ELENBQVAsQ0FBTixDQUFELEdBQW9CSixDQUFDLENBQUNJLENBQUQsQ0FBckI7UUFDSDs7UUFDRFgsQ0FBQyxDQUFDYSxJQUFGLENBQU9ILENBQVA7TUFDSDtJQUNKOztJQUNELE9BQU9WLENBQVA7RUFDSCxDQXhCRDs7RUF5QkEsT0FBT1osQ0FBUDtBQUNILENBcERPLEVBQVI7O0FBcURBSCxPQUFPLENBQUNDLE1BQVIsR0FBaUIsSUFBSUMsQ0FBSixFQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5Db25maWcgPSB2b2lkIDA7XG52YXIgciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0ge307XG4gICAgfVxuICAgIHQucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodGhpcy5saXN0W3RdKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQodCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuLCByKSB7XG4gICAgICAgICAgICBpZiAoZS5saXN0W3RdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG4oZS5saXN0W3RdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHQsIGZ1bmN0aW9uIChvLCBpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIoKSwgY29uc29sZS53YXJuKG8pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZS5saXN0W3RdID0gZS5wYXJzZURhdGEoaS5qc29uLCB0KSksIG4oZS5saXN0W3RdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5wYXJzZURhdGEgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHt9O1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHQudmFsdWVzLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICBuW1wiXCIgKyB0LnZhbHVlc1tyXVswXV0gPSB0LnZhbHVlc1tyXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbyA9IHQudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIGkgPSBbXTtcbiAgICAgICAgZm9yIChyID0gMDsgciA8IG87IHIrKykge1xuICAgICAgICAgICAgdmFyIGEgPSBuW1wiXCIgKyAociArIDEpXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwID09IHQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUgKyBcIuihqOacieepuueZveaVsOaNru+8jOW3sui/h+a7pFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGEubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc1tcIlwiICsgdC5rZXlzW2NdXSA9IGFbY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkucHVzaChzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuQ29uZmlnID0gbmV3IHIoKTtcbiJdfQ==