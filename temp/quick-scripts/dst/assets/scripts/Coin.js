
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Coin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7016b+e7PJOu54morQmQ51Y', 'Coin');
// scripts/Coin.js

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
    var e = $localStorageManager["default"].get($localStorageConst["default"].Coin) || 0;
    $localStorageManager["default"].set($localStorageConst["default"].Coin, e);
    this.localStorageUIData[$localStorageConst["default"].Coin] = this.updateCoin.bind(this);
  };

  e.prototype.updateCoin = function (t) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvaW4uanMiXSwibmFtZXMiOlsiciIsIiR1SUJhc2UiLCJyZXF1aXJlIiwiJGxvY2FsU3RvcmFnZUNvbnN0IiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCJmIiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJoIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImdldCIsIkNvaW4iLCJzZXQiLCJsb2NhbFN0b3JhZ2VVSURhdGEiLCJ1cGRhdGVDb2luIiwiYmluZCIsIl9fYXdhaXRlciIsIl9fZ2VuZXJhdG9yIiwiZGljdCIsImFtb3VudCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwiY2xpY2tTZWxmIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLGtCQUFrQixHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUUsb0JBQW9CLEdBQUdGLE9BQU8sQ0FBQyx1QkFBRCxDQUFsQzs7QUFDQSxJQUFJRyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBbkQ7RUFDSDs7RUFDREMsU0FBUyxDQUFDSCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3Qk4sQ0FBQyxDQUFDSyxTQUFGLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCO0lBQ0EsSUFBSU4sQ0FBQyxHQUFHVCxvQkFBb0IsV0FBcEIsQ0FBNkJnQixHQUE3QixDQUFpQ2pCLGtCQUFrQixXQUFsQixDQUEyQmtCLElBQTVELEtBQXFFLENBQTdFO0lBQ0FqQixvQkFBb0IsV0FBcEIsQ0FBNkJrQixHQUE3QixDQUFpQ25CLGtCQUFrQixXQUFsQixDQUEyQmtCLElBQTVELEVBQWtFUixDQUFsRTtJQUNBLEtBQUtVLGtCQUFMLENBQXdCcEIsa0JBQWtCLFdBQWxCLENBQTJCa0IsSUFBbkQsSUFBMkQsS0FBS0csVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBM0Q7RUFDSCxDQUxEOztFQU1BWixDQUFDLENBQUNJLFNBQUYsQ0FBWU8sVUFBWixHQUF5QixVQUFVWixDQUFWLEVBQWE7SUFDbEMsT0FBT2MsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLFlBQVk7TUFDL0MsT0FBT0MsV0FBVyxDQUFDLElBQUQsRUFBTyxZQUFZO1FBQ2pDLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsWUFBakIsQ0FBOEJ4QixFQUFFLENBQUN5QixLQUFqQyxFQUF3Q0MsTUFBeEMsR0FBaUQsS0FBS3BCLENBQXREO1FBQ0EsT0FBTyxDQUFDLENBQUQsQ0FBUDtNQUNILENBSGlCLENBQWxCO0lBSUgsQ0FMZSxDQUFoQjtFQU1ILENBUEQ7O0VBUUFDLENBQUMsQ0FBQ0ksU0FBRixDQUFZZ0IsU0FBWixHQUF3QixZQUFZLENBQUUsQ0FBdEM7O0VBQ0EsT0FBT0MsVUFBVSxDQUFDLENBQUMxQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBckJELENBcUJHWixPQUFPLFdBckJWLENBRkMsQ0FBTDtBQXdCQWtDLE9BQU8sV0FBUCxHQUFrQnpCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkdUlCYXNlID0gcmVxdWlyZShcIi4vVUlCYXNlXCIpO1xudmFyICRsb2NhbFN0b3JhZ2VDb25zdCA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZUNvbnN0XCIpO1xudmFyICRsb2NhbFN0b3JhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlTWFuYWdlclwiKTtcbnZhciBmID0gY2MuX2RlY29yYXRvcjtcbnZhciBkID0gZi5jY2NsYXNzO1xudmFyIGggPVxuICAgIChmLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGUgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2luKSB8fCAwO1xuICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuQ29pbiwgZSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVVJRGF0YVskbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5Db2luXSA9IHRoaXMudXBkYXRlQ29pbi5iaW5kKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVDb2luID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QuYW1vdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tTZWxmID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XG4gICAgfSkoJHVJQmFzZS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoO1xuIl19