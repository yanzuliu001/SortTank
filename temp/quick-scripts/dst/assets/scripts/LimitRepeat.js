
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LimitRepeat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67bfbM5sWxPB75KF6nsc/hw', 'LimitRepeat');
// scripts/LimitRepeat.js

"use strict";

exports.LimitRepeat = void 0;

exports.LimitRepeat = function (t) {
  if (void 0 === t) {
    t = 0.2;
  }

  return function (e, n, r) {
    var o = r.value;
    var i = !1;

    r.value = function () {
      var e = [];

      for (var n = 0; n < arguments.length; n++) {
        e[n] = arguments[n];
      }

      if (!i) {
        i = !0;
        setTimeout(function () {
          i = !1;
        }, 1e3 * t);
        o.apply(this, e);
        return r;
      }

      console.log("isLocking");
    };
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xpbWl0UmVwZWF0LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJMaW1pdFJlcGVhdCIsInQiLCJlIiwibiIsInIiLCJvIiwidmFsdWUiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImFwcGx5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxXQUFSLEdBQXNCLEtBQUssQ0FBM0I7O0FBQ0FELE9BQU8sQ0FBQ0MsV0FBUixHQUFzQixVQUFVQyxDQUFWLEVBQWE7RUFDL0IsSUFBSSxLQUFLLENBQUwsS0FBV0EsQ0FBZixFQUFrQjtJQUNkQSxDQUFDLEdBQUcsR0FBSjtFQUNIOztFQUNELE9BQU8sVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtJQUN0QixJQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQ0UsS0FBVjtJQUNBLElBQUlDLENBQUMsR0FBRyxDQUFDLENBQVQ7O0lBQ0FILENBQUMsQ0FBQ0UsS0FBRixHQUFVLFlBQVk7TUFDbEIsSUFBSUosQ0FBQyxHQUFHLEVBQVI7O01BQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSyxTQUFTLENBQUNDLE1BQTlCLEVBQXNDTixDQUFDLEVBQXZDLEVBQTJDO1FBQ3ZDRCxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPSyxTQUFTLENBQUNMLENBQUQsQ0FBaEI7TUFDSDs7TUFDRCxJQUFJLENBQUNJLENBQUwsRUFBUTtRQUNKQSxDQUFDLEdBQUcsQ0FBQyxDQUFMO1FBQ0FHLFVBQVUsQ0FBQyxZQUFZO1VBQ25CSCxDQUFDLEdBQUcsQ0FBQyxDQUFMO1FBQ0gsQ0FGUyxFQUVQLE1BQU1OLENBRkMsQ0FBVjtRQUdBSSxDQUFDLENBQUNNLEtBQUYsQ0FBUSxJQUFSLEVBQWNULENBQWQ7UUFDQSxPQUFPRSxDQUFQO01BQ0g7O01BQ0RRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7SUFDSCxDQWREO0VBZUgsQ0FsQkQ7QUFtQkgsQ0F2QkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuTGltaXRSZXBlYXQgPSB2b2lkIDA7XG5leHBvcnRzLkxpbWl0UmVwZWF0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgIHQgPSAwLjI7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZSwgbiwgcikge1xuICAgICAgICB2YXIgbyA9IHIudmFsdWU7XG4gICAgICAgIHZhciBpID0gITE7XG4gICAgICAgIHIudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBhcmd1bWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICBlW25dID0gYXJndW1lbnRzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgICAgICAgaSA9ICEwO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpID0gITE7XG4gICAgICAgICAgICAgICAgfSwgMWUzICogdCk7XG4gICAgICAgICAgICAgICAgby5hcHBseSh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNMb2NraW5nXCIpO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuIl19