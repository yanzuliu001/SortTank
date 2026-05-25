
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ttPostbackCtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b733fCBKrtGGauvrMx54orD', 'ttPostbackCtl');
// scripts/ttPostbackCtl.js

"use strict";

var $index = require("./index");

var $report = require("./Report");

var i = function () {
  function t() {
    this._sdk = $index["default"];
  }

  t.GetInstance = function () {
    if (t.instance) {//
    } else {
      t.instance = new t();
    }

    return this.instance;
  };

  t.prototype.init = function (t, e) {
    if (window.tt) {
      var n = t;
      var r = e;

      this._sdk.initParams({
        app_name: n,
        channel: "tt_minigame",
        version: r,
        log_level: "info"
      });
    }
  };

  t.prototype.adRequest = function (t) {
    $report["default"].adRequest(t);
  };

  t.prototype.adClick = function (t) {
    $report["default"].adClick(t);
  };

  t.prototype.adImpression = function (t) {
    $report["default"].adImpression(t);
  };

  t.prototype.adFill = function (t) {
    $report["default"].adFill(t);
  };

  t.prototype.adImpressionDone = function (t) {
    $report["default"].adImpressionDone(t);
  };

  t.instance = null;
  return t;
}();

exports["default"] = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3R0UG9zdGJhY2tDdGwuanMiXSwibmFtZXMiOlsiJGluZGV4IiwicmVxdWlyZSIsIiRyZXBvcnQiLCJpIiwidCIsIl9zZGsiLCJHZXRJbnN0YW5jZSIsImluc3RhbmNlIiwicHJvdG90eXBlIiwiaW5pdCIsImUiLCJ3aW5kb3ciLCJ0dCIsIm4iLCJyIiwiaW5pdFBhcmFtcyIsImFwcF9uYW1lIiwiY2hhbm5lbCIsInZlcnNpb24iLCJsb2dfbGV2ZWwiLCJhZFJlcXVlc3QiLCJhZENsaWNrIiwiYWRJbXByZXNzaW9uIiwiYWRGaWxsIiwiYWRJbXByZXNzaW9uRG9uZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlFLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLElBQUwsR0FBWUwsTUFBTSxXQUFsQjtFQUNIOztFQUNESSxDQUFDLENBQUNFLFdBQUYsR0FBZ0IsWUFBWTtJQUN4QixJQUFJRixDQUFDLENBQUNHLFFBQU4sRUFBZ0IsQ0FDWjtJQUNILENBRkQsTUFFTztNQUNISCxDQUFDLENBQUNHLFFBQUYsR0FBYSxJQUFJSCxDQUFKLEVBQWI7SUFDSDs7SUFDRCxPQUFPLEtBQUtHLFFBQVo7RUFDSCxDQVBEOztFQVFBSCxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixVQUFVTCxDQUFWLEVBQWFNLENBQWIsRUFBZ0I7SUFDL0IsSUFBSUMsTUFBTSxDQUFDQyxFQUFYLEVBQWU7TUFDWCxJQUFJQyxDQUFDLEdBQUdULENBQVI7TUFDQSxJQUFJVSxDQUFDLEdBQUdKLENBQVI7O01BQ0EsS0FBS0wsSUFBTCxDQUFVVSxVQUFWLENBQXFCO1FBQ2pCQyxRQUFRLEVBQUVILENBRE87UUFFakJJLE9BQU8sRUFBRSxhQUZRO1FBR2pCQyxPQUFPLEVBQUVKLENBSFE7UUFJakJLLFNBQVMsRUFBRTtNQUpNLENBQXJCO0lBTUg7RUFDSixDQVhEOztFQVlBZixDQUFDLENBQUNJLFNBQUYsQ0FBWVksU0FBWixHQUF3QixVQUFVaEIsQ0FBVixFQUFhO0lBQ2pDRixPQUFPLFdBQVAsQ0FBZ0JrQixTQUFoQixDQUEwQmhCLENBQTFCO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDSSxTQUFGLENBQVlhLE9BQVosR0FBc0IsVUFBVWpCLENBQVYsRUFBYTtJQUMvQkYsT0FBTyxXQUFQLENBQWdCbUIsT0FBaEIsQ0FBd0JqQixDQUF4QjtFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ0ksU0FBRixDQUFZYyxZQUFaLEdBQTJCLFVBQVVsQixDQUFWLEVBQWE7SUFDcENGLE9BQU8sV0FBUCxDQUFnQm9CLFlBQWhCLENBQTZCbEIsQ0FBN0I7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNJLFNBQUYsQ0FBWWUsTUFBWixHQUFxQixVQUFVbkIsQ0FBVixFQUFhO0lBQzlCRixPQUFPLFdBQVAsQ0FBZ0JxQixNQUFoQixDQUF1Qm5CLENBQXZCO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDSSxTQUFGLENBQVlnQixnQkFBWixHQUErQixVQUFVcEIsQ0FBVixFQUFhO0lBQ3hDRixPQUFPLFdBQVAsQ0FBZ0JzQixnQkFBaEIsQ0FBaUNwQixDQUFqQztFQUNILENBRkQ7O0VBR0FBLENBQUMsQ0FBQ0csUUFBRixHQUFhLElBQWI7RUFDQSxPQUFPSCxDQUFQO0FBQ0gsQ0F6Q08sRUFBUjs7QUEwQ0FxQixPQUFPLFdBQVAsR0FBa0J0QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRpbmRleCA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xudmFyICRyZXBvcnQgPSByZXF1aXJlKFwiLi9SZXBvcnRcIik7XG52YXIgaSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5fc2RrID0gJGluZGV4LmRlZmF1bHQ7XG4gICAgfVxuICAgIHQuR2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0Lmluc3RhbmNlKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdC5pbnN0YW5jZSA9IG5ldyB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0O1xuICAgICAgICAgICAgdmFyIHIgPSBlO1xuICAgICAgICAgICAgdGhpcy5fc2RrLmluaXRQYXJhbXMoe1xuICAgICAgICAgICAgICAgIGFwcF9uYW1lOiBuLFxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IFwidHRfbWluaWdhbWVcIixcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiByLFxuICAgICAgICAgICAgICAgIGxvZ19sZXZlbDogXCJpbmZvXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZFJlcXVlc3QgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAkcmVwb3J0LmRlZmF1bHQuYWRSZXF1ZXN0KHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYWRDbGljayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICRyZXBvcnQuZGVmYXVsdC5hZENsaWNrKHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuYWRJbXByZXNzaW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgJHJlcG9ydC5kZWZhdWx0LmFkSW1wcmVzc2lvbih0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmFkRmlsbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICRyZXBvcnQuZGVmYXVsdC5hZEZpbGwodCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5hZEltcHJlc3Npb25Eb25lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgJHJlcG9ydC5kZWZhdWx0LmFkSW1wcmVzc2lvbkRvbmUodCk7XG4gICAgfTtcbiAgICB0Lmluc3RhbmNlID0gbnVsbDtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBpO1xuIl19