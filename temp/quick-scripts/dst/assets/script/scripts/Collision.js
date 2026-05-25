
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Collision.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4499wSYcBNuLBL8Krzrson', 'Collision');
// script/scripts/Collision.js

"use strict";

var i;
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    cc.director.getCollisionManager().enabled = !0;
  };

  e.prototype.onCollisionEnter = function () {};

  e.prototype.onCollisionStay = function () {};

  e.prototype.onCollisionExit = function () {};

  return __decorate([s], e);
}(cc.Component));
exports["default"] = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9Db2xsaXNpb24uanMiXSwibmFtZXMiOlsiaSIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwib25Db2xsaXNpb25FbnRlciIsIm9uQ29sbGlzaW9uU3RheSIsIm9uQ29sbGlzaW9uRXhpdCIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBbkQ7RUFDSDs7RUFDREMsU0FBUyxDQUFDSCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3QlosRUFBRSxDQUFDYSxRQUFILENBQVlDLG1CQUFaLEdBQWtDQyxPQUFsQyxHQUE0QyxDQUFDLENBQTdDO0VBQ0gsQ0FGRDs7RUFHQVIsQ0FBQyxDQUFDSSxTQUFGLENBQVlLLGdCQUFaLEdBQStCLFlBQVksQ0FBRSxDQUE3Qzs7RUFDQVQsQ0FBQyxDQUFDSSxTQUFGLENBQVlNLGVBQVosR0FBOEIsWUFBWSxDQUFFLENBQTVDOztFQUNBVixDQUFDLENBQUNJLFNBQUYsQ0FBWU8sZUFBWixHQUE4QixZQUFZLENBQUUsQ0FBNUM7O0VBQ0EsT0FBT0MsVUFBVSxDQUFDLENBQUNqQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBWkQsQ0FZR1AsRUFBRSxDQUFDb0IsU0FaTixDQUZDLENBQUw7QUFlQUMsT0FBTyxXQUFQLEdBQWtCakIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpO1xudmFyIGEgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHMgPSBhLmNjY2xhc3M7XG52YXIgYyA9XG4gICAgKGEucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSAhMDtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Db2xsaXNpb25FbnRlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkNvbGxpc2lvblN0YXkgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Db2xsaXNpb25FeGl0ID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG4gICAgfSkoY2MuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjO1xuIl19