
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SkinGetWay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2009afHRkBODIsUGZI9F9aX', 'SkinGetWay');
// scripts/SkinGetWay.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $configConst = require("./ConfigConst");

var $eventConst = require("./EventConst");

var $configManager = require("./ConfigManager");

var $eventManager = require("./EventManager");

var $languageManager = require("./LanguageManager");

var $popupManager = require("./PopupManager");

var $userManager = require("./UserManager");

var p = cc._decorator;
var m = p.ccclass;
var g = (p.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.addBtnOn("noBtn2", this.noBtn, this);
    this.updateView();
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  e.prototype.onEnable = function () {
    $eventManager.Event.on($eventConst["default"].update_use_skin, this.updateView, this);
  };

  e.prototype.onDisable = function () {
    $eventManager.Event.off($eventConst["default"].update_use_skin, this.updateView, this);
  };

  e.prototype.updateView = function () {
    var t = this;
    var e = $userManager.User.getTempData("chooseSkin") || 0;
    cc.resources.load("texture/skin/pifu" + e, function (e, n) {
      if (e) {
        return console.log(e);
      }

      t.dict.img.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
    });
    $configManager.Config.get($configConst.ConfigConst.Skin0).then(function (n) {
      var r = n.find(function (t) {
        return t.id == e;
      }).unlock;

      if (r.includes("打螺丝模式累计通过")) {
        var o = r.replace(/\u6253\u87ba\u4e1d\u6a21\u5f0f\u7d2f\u8ba1\u901a\u8fc7/g, "");
        o = o.replace(/\u5173/g, "");
        t.dict.describe.getComponent(cc.Label).string = $languageManager["default"].formatStr("打螺丝模式累计通过%d关", Number(o));
      } else {
        t.dict.describe.getComponent(cc.Label).string = r;
      }
    });
  };

  return __decorate([m], e);
}($baseUI["default"]));
exports["default"] = g;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NraW5HZXRXYXkuanMiXSwibmFtZXMiOlsiciIsIiRiYXNlVUkiLCJyZXF1aXJlIiwiJGNvbmZpZ0NvbnN0IiwiJGV2ZW50Q29uc3QiLCIkY29uZmlnTWFuYWdlciIsIiRldmVudE1hbmFnZXIiLCIkbGFuZ3VhZ2VNYW5hZ2VyIiwiJHBvcHVwTWFuYWdlciIsIiR1c2VyTWFuYWdlciIsInAiLCJjYyIsIl9kZWNvcmF0b3IiLCJtIiwiY2NjbGFzcyIsImciLCJwcm9wZXJ0eSIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwiYWRkQnRuT24iLCJub0J0biIsInVwZGF0ZVZpZXciLCJoaWRlIiwib25FbmFibGUiLCJFdmVudCIsIm9uIiwidXBkYXRlX3VzZV9za2luIiwib25EaXNhYmxlIiwib2ZmIiwiVXNlciIsImdldFRlbXBEYXRhIiwicmVzb3VyY2VzIiwibG9hZCIsIm4iLCJjb25zb2xlIiwibG9nIiwiZGljdCIsImltZyIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJDb25maWciLCJnZXQiLCJDb25maWdDb25zdCIsIlNraW4wIiwidGhlbiIsImZpbmQiLCJpZCIsInVubG9jayIsImluY2x1ZGVzIiwibyIsInJlcGxhY2UiLCJkZXNjcmliZSIsIkxhYmVsIiwic3RyaW5nIiwiZm9ybWF0U3RyIiwiTnVtYmVyIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLFlBQVksR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ0EsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJRyxjQUFj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O01BQ0gsQ0FGTyxFQUVMcUMsTUFGSDs7TUFHQSxJQUFJdkQsQ0FBQyxDQUFDd0QsUUFBRixDQUFXLFdBQVgsQ0FBSixFQUE2QjtRQUN6QixJQUFJQyxDQUFDLEdBQUd6RCxDQUFDLENBQUMwRCxPQUFGLENBQVUseURBQVYsRUFBcUUsRUFBckUsQ0FBUjtRQUNBRCxDQUFDLEdBQUdBLENBQUMsQ0FBQ0MsT0FBRixDQUFVLFNBQVYsRUFBcUIsRUFBckIsQ0FBSjtRQUNBekMsQ0FBQyxDQUFDeUIsSUFBRixDQUFPaUIsUUFBUCxDQUFnQmYsWUFBaEIsQ0FBNkJqQyxFQUFFLENBQUNpRCxLQUFoQyxFQUF1Q0MsTUFBdkMsR0FBZ0R0RCxnQkFBZ0IsV0FBaEIsQ0FBeUJ1RCxTQUF6QixDQUM1QyxjQUQ0QyxFQUU1Q0MsTUFBTSxDQUFDTixDQUFELENBRnNDLENBQWhEO01BSUgsQ0FQRCxNQU9PO1FBQ0h4QyxDQUFDLENBQUN5QixJQUFGLENBQU9pQixRQUFQLENBQWdCZixZQUFoQixDQUE2QmpDLEVBQUUsQ0FBQ2lELEtBQWhDLEVBQXVDQyxNQUF2QyxHQUFnRDdELENBQWhEO01BQ0g7SUFDSixDQWREO0VBZUgsQ0F4QkQ7O0VBeUJBLE9BQU9nRSxVQUFVLENBQUMsQ0FBQ25ELENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0E5Q0QsQ0E4Q0dqQixPQUFPLFdBOUNWLENBRkMsQ0FBTDtBQWlEQWdFLE9BQU8sV0FBUCxHQUFrQmxELENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkYmFzZVVJID0gcmVxdWlyZShcIi4vQmFzZVVJXCIpO1xudmFyICRjb25maWdDb25zdCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnN0XCIpO1xudmFyICRldmVudENvbnN0ID0gcmVxdWlyZShcIi4vRXZlbnRDb25zdFwiKTtcbnZhciAkY29uZmlnTWFuYWdlciA9IHJlcXVpcmUoXCIuL0NvbmZpZ01hbmFnZXJcIik7XG52YXIgJGV2ZW50TWFuYWdlciA9IHJlcXVpcmUoXCIuL0V2ZW50TWFuYWdlclwiKTtcbnZhciAkbGFuZ3VhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTGFuZ3VhZ2VNYW5hZ2VyXCIpO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHVzZXJNYW5hZ2VyID0gcmVxdWlyZShcIi4vVXNlck1hbmFnZXJcIik7XG52YXIgcCA9IGNjLl9kZWNvcmF0b3I7XG52YXIgbSA9IHAuY2NjbGFzcztcbnZhciBnID1cbiAgICAocC5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJub0J0blwiLCB0aGlzLm5vQnRuLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJub0J0bjJcIiwgdGhpcy5ub0J0biwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUubm9CdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLmRlZmF1bHQuaGlkZSgpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub24oJGV2ZW50Q29uc3QuZGVmYXVsdC51cGRhdGVfdXNlX3NraW4sIHRoaXMudXBkYXRlVmlldywgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9uRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuRXZlbnQub2ZmKCRldmVudENvbnN0LmRlZmF1bHQudXBkYXRlX3VzZV9za2luLCB0aGlzLnVwZGF0ZVZpZXcsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGUgPSAkdXNlck1hbmFnZXIuVXNlci5nZXRUZW1wRGF0YShcImNob29zZVNraW5cIikgfHwgMDtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwidGV4dHVyZS9za2luL3BpZnVcIiArIGUsIGZ1bmN0aW9uIChlLCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LmRpY3QuaW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKG4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkY29uZmlnTWFuYWdlci5Db25maWcuZ2V0KCRjb25maWdDb25zdC5Db25maWdDb25zdC5Ta2luMCkudGhlbihmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIHZhciByID0gbi5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmlkID09IGU7XG4gICAgICAgICAgICAgICAgfSkudW5sb2NrO1xuICAgICAgICAgICAgICAgIGlmIChyLmluY2x1ZGVzKFwi5omT6J665Lid5qih5byP57Sv6K6h6YCa6L+HXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gci5yZXBsYWNlKC9cXHU2MjUzXFx1ODdiYVxcdTRlMWRcXHU2YTIxXFx1NWYwZlxcdTdkMmZcXHU4YmExXFx1OTAxYVxcdThmYzcvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIG8gPSBvLnJlcGxhY2UoL1xcdTUxNzMvZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHQuZGljdC5kZXNjcmliZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIuaJk+ieuuS4neaooeW8j+e0r+iuoemAmui/hyVk5YWzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIobylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0LmRpY3QuZGVzY3JpYmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbbV0sIGUpO1xuICAgIH0pKCRiYXNlVUkuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZztcbiJdfQ==