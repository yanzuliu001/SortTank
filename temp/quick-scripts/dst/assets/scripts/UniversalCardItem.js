
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UniversalCardItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e891Su6qpKDKjYfQ87MvG7', 'UniversalCardItem');
// scripts/UniversalCardItem.js

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
    var e = $localStorageManager["default"].get($localStorageConst["default"].cardAmount) || 0;
    $localStorageManager["default"].set($localStorageConst["default"].cardAmount, e);
    this.localStorageUIData[$localStorageConst["default"].cardAmount] = this.updateCardAmount.bind(this);
  };

  e.prototype.updateCardAmount = function (t) {
    this.dict.cardAmount.getComponent(cc.Label).string = "" + t;
  };

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.UniversalCard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1VuaXZlcnNhbENhcmRJdGVtLmpzIl0sIm5hbWVzIjpbInIiLCIkcG9wdXBDb25zdCIsInJlcXVpcmUiLCIkdUlCYXNlIiwiJGxvY2FsU3RvcmFnZUNvbnN0IiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCIkcG9wdXBNYW5hZ2VyIiwiZiIsImNjIiwiX2RlY29yYXRvciIsImQiLCJjY2NsYXNzIiwiaCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImNhbGwiLCJnZXQiLCJjYXJkQW1vdW50Iiwic2V0IiwibG9jYWxTdG9yYWdlVUlEYXRhIiwidXBkYXRlQ2FyZEFtb3VudCIsImJpbmQiLCJkaWN0IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJjbGlja1NlbGYiLCJzaG93IiwiUG9wdXBDb25zdCIsIlVuaXZlcnNhbENhcmQiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUFyQjs7QUFDQSxJQUFJRSxrQkFBa0IsR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBQWhDOztBQUNBLElBQUlHLG9CQUFvQixHQUFHSCxPQUFPLENBQUMsdUJBQUQsQ0FBbEM7O0FBQ0EsSUFBSUksYUFBYSxHQUFHSixPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUssQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsT0FBUSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ0gsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0JOLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtJQUNBLElBQUlOLENBQUMsR0FBR1Ysb0JBQW9CLFdBQXBCLENBQTZCaUIsR0FBN0IsQ0FBaUNsQixrQkFBa0IsV0FBbEIsQ0FBMkJtQixVQUE1RCxLQUEyRSxDQUFuRjtJQUNBbEIsb0JBQW9CLFdBQXBCLENBQTZCbUIsR0FBN0IsQ0FBaUNwQixrQkFBa0IsV0FBbEIsQ0FBMkJtQixVQUE1RCxFQUF3RVIsQ0FBeEU7SUFDQSxLQUFLVSxrQkFBTCxDQUF3QnJCLGtCQUFrQixXQUFsQixDQUEyQm1CLFVBQW5ELElBQWlFLEtBQUtHLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUFqRTtFQUNILENBTEQ7O0VBTUFaLENBQUMsQ0FBQ0ksU0FBRixDQUFZTyxnQkFBWixHQUErQixVQUFVWixDQUFWLEVBQWE7SUFDeEMsS0FBS2MsSUFBTCxDQUFVTCxVQUFWLENBQXFCTSxZQUFyQixDQUFrQ3JCLEVBQUUsQ0FBQ3NCLEtBQXJDLEVBQTRDQyxNQUE1QyxHQUFxRCxLQUFLakIsQ0FBMUQ7RUFDSCxDQUZEOztFQUdBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWWEsU0FBWixHQUF3QixZQUFZO0lBQ2hDMUIsYUFBYSxXQUFiLENBQXNCMkIsSUFBdEIsQ0FBMkJoQyxXQUFXLENBQUNpQyxVQUFaLENBQXVCQyxhQUFsRDtFQUNILENBRkQ7O0VBR0EsT0FBT0MsVUFBVSxDQUFDLENBQUMxQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBbEJELENBa0JHWixPQUFPLFdBbEJWLENBRkMsQ0FBTDtBQXFCQWtDLE9BQU8sV0FBUCxHQUFrQnpCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkcG9wdXBDb25zdCA9IHJlcXVpcmUoXCIuL1BvcHVwQ29uc3RcIik7XG52YXIgJHVJQmFzZSA9IHJlcXVpcmUoXCIuL1VJQmFzZVwiKTtcbnZhciAkbG9jYWxTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VDb25zdFwiKTtcbnZhciAkbG9jYWxTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciBmID0gY2MuX2RlY29yYXRvcjtcbnZhciBkID0gZi5jY2NsYXNzO1xudmFyIGggPVxuICAgIChmLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGUgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50KSB8fCAwO1xuICAgICAgICAgICAgJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQuY2FyZEFtb3VudCwgZSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVVJRGF0YVskbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5jYXJkQW1vdW50XSA9IHRoaXMudXBkYXRlQ2FyZEFtb3VudC5iaW5kKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGVDYXJkQW1vdW50ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdC5jYXJkQW1vdW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIiArIHQ7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsaWNrU2VsZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuVW5pdmVyc2FsQ2FyZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtkXSwgZSk7XG4gICAgfSkoJHVJQmFzZS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoO1xuIl19