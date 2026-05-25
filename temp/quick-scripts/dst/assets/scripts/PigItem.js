
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PigItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99335lOQzJOGq0Mx5PwkbFK', 'PigItem');
// scripts/PigItem.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $popupManager = require("./PopupManager");

var f = cc._decorator;
var d = f.ccclass;
var h = (f.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    var e = $localStorageManager["default"].get($localStorageConst["default"].tempCoin) || 0;
    $localStorageManager["default"].set($localStorageConst["default"].tempCoin, e);
    this.localStorageUIData[$localStorageConst["default"].tempCoin] = this.updateTempCoin.bind(this);
    this.initView();
  };

  e.prototype.initView = function () {};

  e.prototype.updateTempCoin = function (t) {
    if (t >= 4e3) {
      t = 4e3;
    }

    this.dict.pigProgress.getComponent(cc.Sprite).fillRange = t / 4e3;
    this.dict.pigProgressText.getComponent(cc.Label).string = t / 4e3 * 100 + "%";
  };

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.Pig);
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BpZ0l0ZW0uanMiXSwibmFtZXMiOlsiciIsIiRwb3B1cENvbnN0IiwicmVxdWlyZSIsIiR1SUJhc2UiLCIkbG9jYWxTdG9yYWdlQ29uc3QiLCIkbG9jYWxTdG9yYWdlTWFuYWdlciIsIiRwb3B1cE1hbmFnZXIiLCJmIiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJoIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImdldCIsInRlbXBDb2luIiwic2V0IiwibG9jYWxTdG9yYWdlVUlEYXRhIiwidXBkYXRlVGVtcENvaW4iLCJiaW5kIiwiaW5pdFZpZXciLCJkaWN0IiwicGlnUHJvZ3Jlc3MiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJmaWxsUmFuZ2UiLCJwaWdQcm9ncmVzc1RleHQiLCJMYWJlbCIsInN0cmluZyIsImNsaWNrU2VsZiIsInNob3ciLCJQb3B1cENvbnN0IiwiUGlnIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsa0JBQWtCLEdBQUdGLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQzs7QUFDQSxJQUFJRyxvQkFBb0IsR0FBR0gsT0FBTyxDQUFDLHVCQUFELENBQWxDOztBQUNBLElBQUlJLGFBQWEsR0FBR0osT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlLLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCTixDQUFDLENBQUNLLFNBQUYsQ0FBWUMsTUFBWixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7SUFDQSxJQUFJTixDQUFDLEdBQUdWLG9CQUFvQixXQUFwQixDQUE2QmlCLEdBQTdCLENBQWlDbEIsa0JBQWtCLFdBQWxCLENBQTJCbUIsUUFBNUQsS0FBeUUsQ0FBakY7SUFDQWxCLG9CQUFvQixXQUFwQixDQUE2Qm1CLEdBQTdCLENBQWlDcEIsa0JBQWtCLFdBQWxCLENBQTJCbUIsUUFBNUQsRUFBc0VSLENBQXRFO0lBQ0EsS0FBS1Usa0JBQUwsQ0FBd0JyQixrQkFBa0IsV0FBbEIsQ0FBMkJtQixRQUFuRCxJQUErRCxLQUFLRyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUEvRDtJQUNBLEtBQUtDLFFBQUw7RUFDSCxDQU5EOztFQU9BYixDQUFDLENBQUNJLFNBQUYsQ0FBWVMsUUFBWixHQUF1QixZQUFZLENBQUUsQ0FBckM7O0VBQ0FiLENBQUMsQ0FBQ0ksU0FBRixDQUFZTyxjQUFaLEdBQTZCLFVBQVVaLENBQVYsRUFBYTtJQUN0QyxJQUFJQSxDQUFDLElBQUksR0FBVCxFQUFjO01BQ1ZBLENBQUMsR0FBRyxHQUFKO0lBQ0g7O0lBQ0QsS0FBS2UsSUFBTCxDQUFVQyxXQUFWLENBQXNCQyxZQUF0QixDQUFtQ3ZCLEVBQUUsQ0FBQ3dCLE1BQXRDLEVBQThDQyxTQUE5QyxHQUEwRG5CLENBQUMsR0FBRyxHQUE5RDtJQUNBLEtBQUtlLElBQUwsQ0FBVUssZUFBVixDQUEwQkgsWUFBMUIsQ0FBdUN2QixFQUFFLENBQUMyQixLQUExQyxFQUFpREMsTUFBakQsR0FBMkR0QixDQUFDLEdBQUcsR0FBTCxHQUFZLEdBQVosR0FBa0IsR0FBNUU7RUFDSCxDQU5EOztFQU9BQyxDQUFDLENBQUNJLFNBQUYsQ0FBWWtCLFNBQVosR0FBd0IsWUFBWTtJQUNoQy9CLGFBQWEsV0FBYixDQUFzQmdDLElBQXRCLENBQTJCckMsV0FBVyxDQUFDc0MsVUFBWixDQUF1QkMsR0FBbEQ7RUFDSCxDQUZEOztFQUdBLE9BQU9DLFVBQVUsQ0FBQyxDQUFDL0IsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQXhCRCxDQXdCR1osT0FBTyxXQXhCVixDQUZDLENBQUw7QUEyQkF1QyxPQUFPLFdBQVAsR0FBa0I5QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgJHBvcHVwQ29uc3QgPSByZXF1aXJlKFwiLi9Qb3B1cENvbnN0XCIpO1xudmFyICR1SUJhc2UgPSByZXF1aXJlKFwiLi9VSUJhc2VcIik7XG52YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJGxvY2FsU3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgZiA9IGNjLl9kZWNvcmF0b3I7XG52YXIgZCA9IGYuY2NjbGFzcztcbnZhciBoID1cbiAgICAoZi5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudGVtcENvaW4pIHx8IDA7XG4gICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC50ZW1wQ29pbiwgZSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVVJRGF0YVskbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC50ZW1wQ29pbl0gPSB0aGlzLnVwZGF0ZVRlbXBDb2luLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmluaXRWaWV3KCk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmluaXRWaWV3ID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIGUucHJvdG90eXBlLnVwZGF0ZVRlbXBDb2luID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGlmICh0ID49IDRlMykge1xuICAgICAgICAgICAgICAgIHQgPSA0ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRpY3QucGlnUHJvZ3Jlc3MuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gdCAvIDRlMztcbiAgICAgICAgICAgIHRoaXMuZGljdC5waWdQcm9ncmVzc1RleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAodCAvIDRlMykgKiAxMDAgKyBcIiVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tTZWxmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LnNob3coJHBvcHVwQ29uc3QuUG9wdXBDb25zdC5QaWcpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbZF0sIGUpO1xuICAgIH0pKCR1SUJhc2UuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gaDtcbiJdfQ==