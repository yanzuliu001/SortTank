
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/DragonBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18dbalKOQxLE7vVg9J8vohv', 'DragonBall');
// scripts/DragonBall.js

"use strict";

var r;

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var f = cc._decorator;
var d = f.ccclass;
var h = (f.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    var e = $localStorageManager["default"].get($localStorageConst["default"].DragonBall) || 0;
    $localStorageManager["default"].set($localStorageConst["default"].DragonBall, e);
    this.localStorageUIData[$localStorageConst["default"].DragonBall] = this.updateDragonBall.bind(this);
  };

  e.prototype.updateDragonBall = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function () {
        this.dict.amount.getComponent(cc.Label).string = "" + t;
        return [2];
      });
    });
  };

  e.prototype.clickSelf = function () {};

  return __decorate([d], e);
}($uIBase["default"]));
exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0RyYWdvbkJhbGwuanMiXSwibmFtZXMiOlsiciIsIiR1SUJhc2UiLCJyZXF1aXJlIiwiJGxvY2FsU3RvcmFnZUNvbnN0IiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCJmIiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJoIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImdldCIsIkRyYWdvbkJhbGwiLCJzZXQiLCJsb2NhbFN0b3JhZ2VVSURhdGEiLCJ1cGRhdGVEcmFnb25CYWxsIiwiYmluZCIsIl9fYXdhaXRlciIsIl9fZ2VuZXJhdG9yIiwiZGljdCIsImFtb3VudCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwiY2xpY2tTZWxmIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLGtCQUFrQixHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUUsb0JBQW9CLEdBQUdGLE9BQU8sQ0FBQyx1QkFBRCxDQUFsQzs7QUFDQSxJQUFJRyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBbkQ7RUFDSDs7RUFDREMsU0FBUyxDQUFDSCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3Qk4sQ0FBQyxDQUFDSyxTQUFGLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCO0lBQ0EsSUFBSU4sQ0FBQyxHQUFHVCxvQkFBb0IsV0FBcEIsQ0FBNkJnQixHQUE3QixDQUFpQ2pCLGtCQUFrQixXQUFsQixDQUEyQmtCLFVBQTVELEtBQTJFLENBQW5GO0lBQ0FqQixvQkFBb0IsV0FBcEIsQ0FBNkJrQixHQUE3QixDQUFpQ25CLGtCQUFrQixXQUFsQixDQUEyQmtCLFVBQTVELEVBQXdFUixDQUF4RTtJQUNBLEtBQUtVLGtCQUFMLENBQXdCcEIsa0JBQWtCLFdBQWxCLENBQTJCa0IsVUFBbkQsSUFBaUUsS0FBS0csZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQWpFO0VBQ0gsQ0FMRDs7RUFNQVosQ0FBQyxDQUFDSSxTQUFGLENBQVlPLGdCQUFaLEdBQStCLFVBQVVaLENBQVYsRUFBYTtJQUN4QyxPQUFPYyxTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsWUFBWTtNQUMvQyxPQUFPQyxXQUFXLENBQUMsSUFBRCxFQUFPLFlBQVk7UUFDakMsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxZQUFqQixDQUE4QnhCLEVBQUUsQ0FBQ3lCLEtBQWpDLEVBQXdDQyxNQUF4QyxHQUFpRCxLQUFLcEIsQ0FBdEQ7UUFDQSxPQUFPLENBQUMsQ0FBRCxDQUFQO01BQ0gsQ0FIaUIsQ0FBbEI7SUFJSCxDQUxlLENBQWhCO0VBTUgsQ0FQRDs7RUFRQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlnQixTQUFaLEdBQXdCLFlBQVksQ0FBRSxDQUF0Qzs7RUFDQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzFCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FyQkQsQ0FxQkdaLE9BQU8sV0FyQlYsQ0FGQyxDQUFMO0FBd0JBa0MsT0FBTyxXQUFQLEdBQWtCekIsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICR1SUJhc2UgPSByZXF1aXJlKFwiLi9VSUJhc2VcIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJGxvY2FsU3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyIGYgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGQgPSBmLmNjY2xhc3M7XG52YXIgaCA9XG4gICAgKGYucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB2YXIgZSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkRyYWdvbkJhbGwpIHx8IDA7XG4gICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5EcmFnb25CYWxsLCBlKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlVUlEYXRhWyRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LkRyYWdvbkJhbGxdID0gdGhpcy51cGRhdGVEcmFnb25CYWxsLmJpbmQodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZURyYWdvbkJhbGwgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljdC5hbW91bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiICsgdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5jbGlja1NlbGYgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcbiAgICB9KSgkdUlCYXNlLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGg7XG4iXX0=