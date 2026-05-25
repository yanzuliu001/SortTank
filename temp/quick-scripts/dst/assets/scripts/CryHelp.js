
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CryHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16de9VuAvdDnYSAeAtHcVEF', 'CryHelp');
// scripts/CryHelp.js

"use strict";

var r;

var $baseUI = require("./BaseUI");

var $platformManager = require("./PlatformManager");

var $popupManager = require("./PopupManager");

var l = cc._decorator;
var u = l.ccclass;
var f = (l.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.addBtnOn("defineBtn", this.clickDefine, this);
    this.addBtnOn("giveUpBtn", this.clickGiveUp, this);
  };

  e.prototype.onEnable = function () {
    cc.game.on("shareSuc", this.shareSuc, this);
  };

  e.prototype.onDisable = function () {
    cc.game.off("shareSuc", this.shareSuc, this);
  };

  e.prototype.clickDefine = function () {
    $platformManager.Platform.share();
    $popupManager["default"].hide();
    setTimeout(function () {
      cc.game.emit("clickTip");
    }, 2e3);
  };

  e.prototype.clickGiveUp = function () {
    $popupManager["default"].hide();
  };

  e.prototype.shareSuc = function () {};

  return __decorate([u], e);
}($baseUI["default"]));
exports["default"] = f;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NyeUhlbHAuanMiXSwibmFtZXMiOlsiciIsIiRiYXNlVUkiLCJyZXF1aXJlIiwiJHBsYXRmb3JtTWFuYWdlciIsIiRwb3B1cE1hbmFnZXIiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJmIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImFkZEJ0bk9uIiwiY2xpY2tEZWZpbmUiLCJjbGlja0dpdmVVcCIsIm9uRW5hYmxlIiwiZ2FtZSIsIm9uIiwic2hhcmVTdWMiLCJvbkRpc2FibGUiLCJvZmYiLCJQbGF0Zm9ybSIsInNoYXJlIiwiaGlkZSIsInNldFRpbWVvdXQiLCJlbWl0IiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlDLGdCQUFnQixHQUFHRCxPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUUsYUFBYSxHQUFHRixPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsT0FBUSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ0gsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0JOLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtJQUNBLEtBQUtDLFFBQUwsQ0FBYyxXQUFkLEVBQTJCLEtBQUtDLFdBQWhDLEVBQTZDLElBQTdDO0lBQ0EsS0FBS0QsUUFBTCxDQUFjLFdBQWQsRUFBMkIsS0FBS0UsV0FBaEMsRUFBNkMsSUFBN0M7RUFDSCxDQUpEOztFQUtBVCxDQUFDLENBQUNJLFNBQUYsQ0FBWU0sUUFBWixHQUF1QixZQUFZO0lBQy9CakIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRQyxFQUFSLENBQVcsVUFBWCxFQUF1QixLQUFLQyxRQUE1QixFQUFzQyxJQUF0QztFQUNILENBRkQ7O0VBR0FiLENBQUMsQ0FBQ0ksU0FBRixDQUFZVSxTQUFaLEdBQXdCLFlBQVk7SUFDaENyQixFQUFFLENBQUNrQixJQUFILENBQVFJLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLEtBQUtGLFFBQTdCLEVBQXVDLElBQXZDO0VBQ0gsQ0FGRDs7RUFHQWIsQ0FBQyxDQUFDSSxTQUFGLENBQVlJLFdBQVosR0FBMEIsWUFBWTtJQUNsQ2xCLGdCQUFnQixDQUFDMEIsUUFBakIsQ0FBMEJDLEtBQTFCO0lBQ0ExQixhQUFhLFdBQWIsQ0FBc0IyQixJQUF0QjtJQUNBQyxVQUFVLENBQUMsWUFBWTtNQUNuQjFCLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUVMsSUFBUixDQUFhLFVBQWI7SUFDSCxDQUZTLEVBRVAsR0FGTyxDQUFWO0VBR0gsQ0FORDs7RUFPQXBCLENBQUMsQ0FBQ0ksU0FBRixDQUFZSyxXQUFaLEdBQTBCLFlBQVk7SUFDbENsQixhQUFhLFdBQWIsQ0FBc0IyQixJQUF0QjtFQUNILENBRkQ7O0VBR0FsQixDQUFDLENBQUNJLFNBQUYsQ0FBWVMsUUFBWixHQUF1QixZQUFZLENBQUUsQ0FBckM7O0VBQ0EsT0FBT1EsVUFBVSxDQUFDLENBQUMxQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBNUJELENBNEJHWixPQUFPLFdBNUJWLENBRkMsQ0FBTDtBQStCQWtDLE9BQU8sV0FBUCxHQUFrQnpCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkYmFzZVVJID0gcmVxdWlyZShcIi4vQmFzZVVJXCIpO1xudmFyICRwbGF0Zm9ybU1hbmFnZXIgPSByZXF1aXJlKFwiLi9QbGF0Zm9ybU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciBsID0gY2MuX2RlY29yYXRvcjtcbnZhciB1ID0gbC5jY2NsYXNzO1xudmFyIGYgPVxuICAgIChsLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcImRlZmluZUJ0blwiLCB0aGlzLmNsaWNrRGVmaW5lLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQnRuT24oXCJnaXZlVXBCdG5cIiwgdGhpcy5jbGlja0dpdmVVcCwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm9uRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZ2FtZS5vbihcInNoYXJlU3VjXCIsIHRoaXMuc2hhcmVTdWMsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5vbkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5nYW1lLm9mZihcInNoYXJlU3VjXCIsIHRoaXMuc2hhcmVTdWMsIHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5jbGlja0RlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uc2hhcmUoKTtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJjbGlja1RpcFwiKTtcbiAgICAgICAgICAgIH0sIDJlMyk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsaWNrR2l2ZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUuc2hhcmVTdWMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcbiAgICB9KSgkYmFzZVVJLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGY7XG4iXX0=