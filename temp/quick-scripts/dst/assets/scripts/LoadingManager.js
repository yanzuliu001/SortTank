
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LoadingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '750acfRluZDq6HBqxs7/vQJ', 'LoadingManager');
// scripts/LoadingManager.js

"use strict";

exports.LoadingMgr = void 0;

var r = function () {
  function t() {}

  t.prototype.show = function () {
    cc.find("Canvas/LoadingRoot").active = !0;
  };

  t.prototype.hide = function () {
    cc.find("Canvas/LoadingRoot").active = !1;
  };

  return t;
}();

exports.LoadingMgr = new r();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvYWRpbmdNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJMb2FkaW5nTWdyIiwiciIsInQiLCJwcm90b3R5cGUiLCJzaG93IiwiY2MiLCJmaW5kIiwiYWN0aXZlIiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLEtBQUssQ0FBMUI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxJQUFaLEdBQW1CLFlBQVk7SUFDM0JDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLG9CQUFSLEVBQThCQyxNQUE5QixHQUF1QyxDQUFDLENBQXhDO0VBQ0gsQ0FGRDs7RUFHQUwsQ0FBQyxDQUFDQyxTQUFGLENBQVlLLElBQVosR0FBbUIsWUFBWTtJQUMzQkgsRUFBRSxDQUFDQyxJQUFILENBQVEsb0JBQVIsRUFBOEJDLE1BQTlCLEdBQXVDLENBQUMsQ0FBeEM7RUFDSCxDQUZEOztFQUdBLE9BQU9MLENBQVA7QUFDSCxDQVRPLEVBQVI7O0FBVUFILE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixJQUFJQyxDQUFKLEVBQXJCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLkxvYWRpbmdNZ3IgPSB2b2lkIDA7XG52YXIgciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9Mb2FkaW5nUm9vdFwiKS5hY3RpdmUgPSAhMDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTG9hZGluZ1Jvb3RcIikuYWN0aXZlID0gITE7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLkxvYWRpbmdNZ3IgPSBuZXcgcigpO1xuIl19