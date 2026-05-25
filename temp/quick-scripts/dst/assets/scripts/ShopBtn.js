
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ShopBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c5773BAYhLqoF4FQVMdA1z', 'ShopBtn');
// scripts/ShopBtn.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $popupManager = require("./PopupManager");

var $userManager = require("./UserManager");

var $shuShuConst = require("./ShuShuConst");

var u = cc._decorator;
var f = u.ccclass;
var d = (u.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = $userManager.User.getTempData("currentScene_");

    if (t) {
      cc.game.emit("gamelog_Thinking", $shuShuConst.ShuShuConst.Store_page, {
        id: t
      });
    }
  };

  e.prototype.clickShop = function () {
    $popupManager["default"].show($popupConst.PopupConst.SHOP_NEW);
  };

  return __decorate([f], e);
}(cc.Component));
exports["default"] = d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Nob3BCdG4uanMiXSwibmFtZXMiOlsiciIsIiRwb3B1cENvbnN0IiwicmVxdWlyZSIsIiRwb3B1cE1hbmFnZXIiLCIkdXNlck1hbmFnZXIiLCIkc2h1U2h1Q29uc3QiLCJ1IiwiY2MiLCJfZGVjb3JhdG9yIiwiZiIsImNjY2xhc3MiLCJkIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiVXNlciIsImdldFRlbXBEYXRhIiwiZ2FtZSIsImVtaXQiLCJTaHVTaHVDb25zdCIsIlN0b3JlX3BhZ2UiLCJpZCIsImNsaWNrU2hvcCIsInNob3ciLCJQb3B1cENvbnN0IiwiU0hPUF9ORVciLCJfX2RlY29yYXRlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlJLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCLElBQUlOLENBQUMsR0FBR1QsWUFBWSxDQUFDZ0IsSUFBYixDQUFrQkMsV0FBbEIsQ0FBOEIsZUFBOUIsQ0FBUjs7SUFDQSxJQUFJUixDQUFKLEVBQU87TUFDSE4sRUFBRSxDQUFDZSxJQUFILENBQVFDLElBQVIsQ0FBYSxrQkFBYixFQUFpQ2xCLFlBQVksQ0FBQ21CLFdBQWIsQ0FBeUJDLFVBQTFELEVBQXNFO1FBQ2xFQyxFQUFFLEVBQUViO01BRDhELENBQXRFO0lBR0g7RUFDSixDQVBEOztFQVFBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWVMsU0FBWixHQUF3QixZQUFZO0lBQ2hDeEIsYUFBYSxXQUFiLENBQXNCeUIsSUFBdEIsQ0FBMkIzQixXQUFXLENBQUM0QixVQUFaLENBQXVCQyxRQUFsRDtFQUNILENBRkQ7O0VBR0EsT0FBT0MsVUFBVSxDQUFDLENBQUN0QixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBakJELENBaUJHUCxFQUFFLENBQUN5QixTQWpCTixDQUZDLENBQUw7QUFvQkFDLE9BQU8sV0FBUCxHQUFrQnRCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkcG9wdXBDb25zdCA9IHJlcXVpcmUoXCIuL1BvcHVwQ29uc3RcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciAkdXNlck1hbmFnZXIgPSByZXF1aXJlKFwiLi9Vc2VyTWFuYWdlclwiKTtcbnZhciAkc2h1U2h1Q29uc3QgPSByZXF1aXJlKFwiLi9TaHVTaHVDb25zdFwiKTtcbnZhciB1ID0gY2MuX2RlY29yYXRvcjtcbnZhciBmID0gdS5jY2NsYXNzO1xudmFyIGQgPVxuICAgICh1LnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gJHVzZXJNYW5hZ2VyLlVzZXIuZ2V0VGVtcERhdGEoXCJjdXJyZW50U2NlbmVfXCIpO1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJnYW1lbG9nX1RoaW5raW5nXCIsICRzaHVTaHVDb25zdC5TaHVTaHVDb25zdC5TdG9yZV9wYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsaWNrU2hvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuU0hPUF9ORVcpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbZl0sIGUpO1xuICAgIH0pKGNjLkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZDtcbiJdfQ==