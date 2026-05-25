
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StorageSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8a40W5KeJDTL/az7nUfbxg', 'StorageSync');
// scripts/StorageSync.js

"use strict";

var r = function () {
  function t() {}

  t.getItem = function (t) {
    if (window.tt) {
      return window.wxapi.getStorageSync(t);
    }
  };

  t.setItem = function (t, e) {
    if (window.tt) {
      return window.wxapi.setStorageSync(t, e);
    }
  };

  t.removeItem = function (t) {
    if (window.tt) {
      return window.wxapi.removeStorageSync(t);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0b3JhZ2VTeW5jLmpzIl0sIm5hbWVzIjpbInIiLCJ0IiwiZ2V0SXRlbSIsIndpbmRvdyIsInR0Iiwid3hhcGkiLCJnZXRTdG9yYWdlU3luYyIsInNldEl0ZW0iLCJlIiwic2V0U3RvcmFnZVN5bmMiLCJyZW1vdmVJdGVtIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLE9BQUYsR0FBWSxVQUFVRCxDQUFWLEVBQWE7SUFDckIsSUFBSUUsTUFBTSxDQUFDQyxFQUFYLEVBQWU7TUFDWCxPQUFPRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsY0FBYixDQUE0QkwsQ0FBNUIsQ0FBUDtJQUNIO0VBQ0osQ0FKRDs7RUFLQUEsQ0FBQyxDQUFDTSxPQUFGLEdBQVksVUFBVU4sQ0FBVixFQUFhTyxDQUFiLEVBQWdCO0lBQ3hCLElBQUlMLE1BQU0sQ0FBQ0MsRUFBWCxFQUFlO01BQ1gsT0FBT0QsTUFBTSxDQUFDRSxLQUFQLENBQWFJLGNBQWIsQ0FBNEJSLENBQTVCLEVBQStCTyxDQUEvQixDQUFQO0lBQ0g7RUFDSixDQUpEOztFQUtBUCxDQUFDLENBQUNTLFVBQUYsR0FBZSxVQUFVVCxDQUFWLEVBQWE7SUFDeEIsSUFBSUUsTUFBTSxDQUFDQyxFQUFYLEVBQWU7TUFDWCxPQUFPRCxNQUFNLENBQUNFLEtBQVAsQ0FBYU0saUJBQWIsQ0FBK0JWLENBQS9CLENBQVA7SUFDSDtFQUNKLENBSkQ7O0VBS0EsT0FBT0EsQ0FBUDtBQUNILENBbEJPLEVBQVI7O0FBbUJBVyxPQUFPLFdBQVAsR0FBa0JaLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5nZXRJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy53eGFwaS5nZXRTdG9yYWdlU3luYyh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5zZXRJdGVtID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy53eGFwaS5zZXRTdG9yYWdlU3luYyh0LCBlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy53eGFwaS5yZW1vdmVTdG9yYWdlU3luYyh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcjtcbiJdfQ==