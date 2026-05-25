
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Get3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dadd1ML92dNnrpmYDVaoztr', 'Get3');
// scripts/Get3.js

"use strict";

var r;

var $popupManager = require("./PopupManager");

var $uIBase = require("./UIBase");

var $languageManager = require("./LanguageManager");

var l = cc._decorator;
var u = l.ccclass;
var f = (l.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.setContentSize(cc.winSize);
    this.addBtnOn("noBtn", this.noBtn, this);
    this.initView();
  };

  e.prototype.initView = function () {
    this.dict["title_" + $languageManager["default"].instance.lan].active = !0;
  };

  e.prototype.noBtn = function () {
    $popupManager["default"].hide();
  };

  return __decorate([u], e);
}($uIBase["default"]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dldDMuanMiXSwibmFtZXMiOlsiciIsIiRwb3B1cE1hbmFnZXIiLCJyZXF1aXJlIiwiJHVJQmFzZSIsIiRsYW5ndWFnZU1hbmFnZXIiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJmIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsIm5vZGUiLCJzZXRDb250ZW50U2l6ZSIsIndpblNpemUiLCJhZGRCdG5PbiIsIm5vQnRuIiwiaW5pdFZpZXciLCJkaWN0IiwiaW5zdGFuY2UiLCJsYW4iLCJhY3RpdmUiLCJoaWRlIiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxnQkFBRCxDQUEzQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXJCOztBQUNBLElBQUlFLGdCQUFnQixHQUFHRixPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUcsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsT0FBUSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQW5EO0VBQ0g7O0VBQ0RDLFNBQVMsQ0FBQ0gsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ0ksU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0JOLENBQUMsQ0FBQ0ssU0FBRixDQUFZQyxNQUFaLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QmYsRUFBRSxDQUFDZ0IsT0FBNUI7SUFDQSxLQUFLQyxRQUFMLENBQWMsT0FBZCxFQUF1QixLQUFLQyxLQUE1QixFQUFtQyxJQUFuQztJQUNBLEtBQUtDLFFBQUw7RUFDSCxDQUxEOztFQU1BWixDQUFDLENBQUNJLFNBQUYsQ0FBWVEsUUFBWixHQUF1QixZQUFZO0lBQy9CLEtBQUtDLElBQUwsQ0FBVSxXQUFXdEIsZ0JBQWdCLFdBQWhCLENBQXlCdUIsUUFBekIsQ0FBa0NDLEdBQXZELEVBQTREQyxNQUE1RCxHQUFxRSxDQUFDLENBQXRFO0VBQ0gsQ0FGRDs7RUFHQWhCLENBQUMsQ0FBQ0ksU0FBRixDQUFZTyxLQUFaLEdBQW9CLFlBQVk7SUFDNUJ2QixhQUFhLFdBQWIsQ0FBc0I2QixJQUF0QjtFQUNILENBRkQ7O0VBR0EsT0FBT0MsVUFBVSxDQUFDLENBQUN2QixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBbEJELENBa0JHVixPQUFPLFdBbEJWLENBRkMsQ0FBTDtBQXFCQTZCLE9BQU8sV0FBUCxHQUFrQnRCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xudmFyICR1SUJhc2UgPSByZXF1aXJlKFwiLi9VSUJhc2VcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciBsID0gY2MuX2RlY29yYXRvcjtcbnZhciB1ID0gbC5jY2NsYXNzO1xudmFyIGYgPVxuICAgIChsLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgfVxuICAgICAgICBfX2V4dGVuZHMoZSwgdCk7XG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHQucHJvdG90eXBlLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUpO1xuICAgICAgICAgICAgdGhpcy5hZGRCdG5PbihcIm5vQnRuXCIsIHRoaXMubm9CdG4sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5pbml0VmlldygpO1xuICAgICAgICB9O1xuICAgICAgICBlLnByb3RvdHlwZS5pbml0VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGljdFtcInRpdGxlX1wiICsgJGxhbmd1YWdlTWFuYWdlci5kZWZhdWx0Lmluc3RhbmNlLmxhbl0uYWN0aXZlID0gITA7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5vQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5kZWZhdWx0LmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW3VdLCBlKTtcbiAgICB9KSgkdUlCYXNlLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGY7XG4iXX0=