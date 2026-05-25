
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a5540f/tdEw7JcMTMEOk+g', 'EventManager');
// scripts/EventManager.js

"use strict";

exports.Event = void 0;

var r = function () {
  function t() {
    this.prefix = "event_";
  }

  t.prototype.on = function (t, e, n) {
    var r = "" + this.prefix + t;
    cc.game.on(r, e, n);
  };

  t.prototype.off = function (t, e, n) {
    var r = "" + this.prefix + t;
    cc.game.off(r, e, n);
  };

  t.prototype.emit = function (t) {
    var e = [];

    for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }

    var r = "" + this.prefix + t;
    cc.game.emit(r, e);
  };

  return t;
}();

exports.Event = new r();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0V2ZW50TWFuYWdlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiRXZlbnQiLCJyIiwidCIsInByZWZpeCIsInByb3RvdHlwZSIsIm9uIiwiZSIsIm4iLCJjYyIsImdhbWUiLCJvZmYiLCJlbWl0IiwiYXJndW1lbnRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLEtBQVIsR0FBZ0IsS0FBSyxDQUFyQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWE7SUFDVCxLQUFLQyxNQUFMLEdBQWMsUUFBZDtFQUNIOztFQUNERCxDQUFDLENBQUNFLFNBQUYsQ0FBWUMsRUFBWixHQUFpQixVQUFVSCxDQUFWLEVBQWFJLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0lBQ2hDLElBQUlOLENBQUMsR0FBRyxLQUFLLEtBQUtFLE1BQVYsR0FBbUJELENBQTNCO0lBQ0FNLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRSixFQUFSLENBQVdKLENBQVgsRUFBY0ssQ0FBZCxFQUFpQkMsQ0FBakI7RUFDSCxDQUhEOztFQUlBTCxDQUFDLENBQUNFLFNBQUYsQ0FBWU0sR0FBWixHQUFrQixVQUFVUixDQUFWLEVBQWFJLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0lBQ2pDLElBQUlOLENBQUMsR0FBRyxLQUFLLEtBQUtFLE1BQVYsR0FBbUJELENBQTNCO0lBQ0FNLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxHQUFSLENBQVlULENBQVosRUFBZUssQ0FBZixFQUFrQkMsQ0FBbEI7RUFDSCxDQUhEOztFQUlBTCxDQUFDLENBQUNFLFNBQUYsQ0FBWU8sSUFBWixHQUFtQixVQUFVVCxDQUFWLEVBQWE7SUFDNUIsSUFBSUksQ0FBQyxHQUFHLEVBQVI7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSyxTQUFTLENBQUNDLE1BQTlCLEVBQXNDTixDQUFDLEVBQXZDLEVBQTJDO01BQ3ZDRCxDQUFDLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQUQsR0FBV0ssU0FBUyxDQUFDTCxDQUFELENBQXBCO0lBQ0g7O0lBQ0QsSUFBSU4sQ0FBQyxHQUFHLEtBQUssS0FBS0UsTUFBVixHQUFtQkQsQ0FBM0I7SUFDQU0sRUFBRSxDQUFDQyxJQUFILENBQVFFLElBQVIsQ0FBYVYsQ0FBYixFQUFnQkssQ0FBaEI7RUFDSCxDQVBEOztFQVFBLE9BQU9KLENBQVA7QUFDSCxDQXJCTyxFQUFSOztBQXNCQUgsT0FBTyxDQUFDQyxLQUFSLEdBQWdCLElBQUlDLENBQUosRUFBaEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuRXZlbnQgPSB2b2lkIDA7XG52YXIgciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBcImV2ZW50X1wiO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIHZhciByID0gXCJcIiArIHRoaXMucHJlZml4ICsgdDtcbiAgICAgICAgY2MuZ2FtZS5vbihyLCBlLCBuKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIHZhciByID0gXCJcIiArIHRoaXMucHJlZml4ICsgdDtcbiAgICAgICAgY2MuZ2FtZS5vZmYociwgZSwgbik7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgbiA9IDE7IG4gPCBhcmd1bWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIGVbbiAtIDFdID0gYXJndW1lbnRzW25dO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gXCJcIiArIHRoaXMucHJlZml4ICsgdDtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KHIsIGUpO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5FdmVudCA9IG5ldyByKCk7XG4iXX0=