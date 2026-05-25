
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ResManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f929cIDE0dJPIwOrBhsBkwC', 'ResManager');
// scripts/ResManager.js

"use strict";

exports.Res = void 0;

var r = function () {
  function t() {}

  t.prototype.load = function (t) {
    return new Promise(function (e, n) {
      cc.resources.load(t, function (t, r) {
        if (t) {
          return cc.warn(t), n(t);
        } else {
          return e(r);
        }
      });
    });
  };

  t.prototype.releaseResPackage = function (t) {
    for (var e in t) {
      for (var n = t[e].urls, r = 0; r < n.length; r++) {
        cc.assetManager.releaseAsset(n[r]);
      }
    }
  };

  return t;
}();

exports.Res = new r();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Jlc01hbmFnZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIlJlcyIsInIiLCJ0IiwicHJvdG90eXBlIiwibG9hZCIsIlByb21pc2UiLCJlIiwibiIsImNjIiwicmVzb3VyY2VzIiwid2FybiIsInJlbGVhc2VSZXNQYWNrYWdlIiwidXJscyIsImxlbmd0aCIsImFzc2V0TWFuYWdlciIsInJlbGVhc2VBc3NldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFSLEdBQWMsS0FBSyxDQUFuQjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVUYsQ0FBVixFQUFhO0lBQzVCLE9BQU8sSUFBSUcsT0FBSixDQUFZLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtNQUMvQkMsRUFBRSxDQUFDQyxTQUFILENBQWFMLElBQWIsQ0FBa0JGLENBQWxCLEVBQXFCLFVBQVVBLENBQVYsRUFBYUQsQ0FBYixFQUFnQjtRQUNqQyxJQUFJQyxDQUFKLEVBQU87VUFDSCxPQUFPTSxFQUFFLENBQUNFLElBQUgsQ0FBUVIsQ0FBUixHQUFZSyxDQUFDLENBQUNMLENBQUQsQ0FBcEI7UUFDSCxDQUZELE1BRU87VUFDSCxPQUFPSSxDQUFDLENBQUNMLENBQUQsQ0FBUjtRQUNIO01BQ0osQ0FORDtJQU9ILENBUk0sQ0FBUDtFQVNILENBVkQ7O0VBV0FDLENBQUMsQ0FBQ0MsU0FBRixDQUFZUSxpQkFBWixHQUFnQyxVQUFVVCxDQUFWLEVBQWE7SUFDekMsS0FBSyxJQUFJSSxDQUFULElBQWNKLENBQWQ7TUFDSSxLQUFLLElBQUlLLENBQUMsR0FBR0wsQ0FBQyxDQUFDSSxDQUFELENBQUQsQ0FBS00sSUFBYixFQUFtQlgsQ0FBQyxHQUFHLENBQTVCLEVBQStCQSxDQUFDLEdBQUdNLENBQUMsQ0FBQ00sTUFBckMsRUFBNkNaLENBQUMsRUFBOUMsRUFBa0Q7UUFDOUNPLEVBQUUsQ0FBQ00sWUFBSCxDQUFnQkMsWUFBaEIsQ0FBNkJSLENBQUMsQ0FBQ04sQ0FBRCxDQUE5QjtNQUNIO0lBSEw7RUFJSCxDQUxEOztFQU1BLE9BQU9DLENBQVA7QUFDSCxDQXBCTyxFQUFSOztBQXFCQUgsT0FBTyxDQUFDQyxHQUFSLEdBQWMsSUFBSUMsQ0FBSixFQUFkIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLlJlcyA9IHZvaWQgMDtcbnZhciByID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICB0LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh0LCBmdW5jdGlvbiAodCwgcikge1xuICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYy53YXJuKHQpLCBuKHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlKHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlbGVhc2VSZXNQYWNrYWdlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZm9yICh2YXIgZSBpbiB0KVxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IHRbZV0udXJscywgciA9IDA7IHIgPCBuLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbGVhc2VBc3NldChuW3JdKTtcbiAgICAgICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuUmVzID0gbmV3IHIoKTtcbiJdfQ==