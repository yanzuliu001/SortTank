
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-290760_Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d9527YnMpNn4MqmpCbRoLB', 'Level-290760_Controller');
// script/scripts/Level-290760_Controller.js

"use strict";

var i;

var $brainLevelBase = require("./BrainLevelBase");

var $level_290760_Box = require("./Level-290760_Box");

var $level_290760_Drink = require("./Level-290760_Drink");

var $level_290760_Model = require("./Level-290760_Model");

var $level_290760_Wait = require("./Level-290760_Wait");

var p = cc._decorator;
var d = p.ccclass;
var u = p.property;

var g = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.drinkAtlas = null;
    e.boxAtlas = null;
    e.model = new $level_290760_Model["default"]();
    e.drinkRoot = null;
    e.waitRoot = null;
    e.boxRoot = null;
    e.amount = null;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.drinkRoot = this.dict.drinkRoot;
    this.boxRoot = this.dict.boxRoot;
    this.waitRoot = this.dict.waitRoot;
    this.amount = this.dict.amount.getComponent(cc.Label);
    this.setCollisionManager(!0, !1);
    this.dict.propBtnRoot.active = !1;
  };

  e.prototype.onLevelReady = function () {
    this.model.init(this.levelJSON.json[this.levelID]);
    this.boxRoot.addComponent($level_290760_Box["default"]).init(this);
    this.drinkRoot.addComponent($level_290760_Drink["default"]).init(this);
    this.waitRoot.addComponent($level_290760_Wait["default"]).init(this);
    this.updateDrinkAmountView();
  };

  e.prototype.updateDrinkAmountView = function () {
    this.amount.string = (this.model.drinkAmount - this.model.removeDrinkAmount).toString();
  };

  e.prototype.randomNum = function (t, e, o) {
    var i = e - t;
    var r = o || Math.random();
    return t + Math.round(r * i);
  };

  __decorate([u(cc.SpriteAtlas)], e.prototype, "drinkAtlas", void 0);

  __decorate([u(cc.SpriteAtlas)], e.prototype, "boxAtlas", void 0);

  return __decorate([d], e);
}($brainLevelBase["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA3NjBfQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJpIiwiJGJyYWluTGV2ZWxCYXNlIiwicmVxdWlyZSIsIiRsZXZlbF8yOTA3NjBfQm94IiwiJGxldmVsXzI5MDc2MF9EcmluayIsIiRsZXZlbF8yOTA3NjBfTW9kZWwiLCIkbGV2ZWxfMjkwNzYwX1dhaXQiLCJwIiwiY2MiLCJfZGVjb3JhdG9yIiwiZCIsImNjY2xhc3MiLCJ1IiwicHJvcGVydHkiLCJnIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImRyaW5rQXRsYXMiLCJib3hBdGxhcyIsIm1vZGVsIiwiZHJpbmtSb290Iiwid2FpdFJvb3QiLCJib3hSb290IiwiYW1vdW50IiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsImRpY3QiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInNldENvbGxpc2lvbk1hbmFnZXIiLCJwcm9wQnRuUm9vdCIsImFjdGl2ZSIsIm9uTGV2ZWxSZWFkeSIsImluaXQiLCJsZXZlbEpTT04iLCJqc29uIiwibGV2ZWxJRCIsImFkZENvbXBvbmVudCIsInVwZGF0ZURyaW5rQW1vdW50VmlldyIsInN0cmluZyIsImRyaW5rQW1vdW50IiwicmVtb3ZlRHJpbmtBbW91bnQiLCJ0b1N0cmluZyIsInJhbmRvbU51bSIsIm8iLCJyIiwiTWF0aCIsInJhbmRvbSIsInJvdW5kIiwiX19kZWNvcmF0ZSIsIlNwcml0ZUF0bGFzIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLGVBQWUsR0FBR0MsT0FBTyxDQUFDLGtCQUFELENBQTdCOztBQUNBLElBQUlDLGlCQUFpQixHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FBL0I7O0FBQ0EsSUFBSUUsbUJBQW1CLEdBQUdGLE9BQU8sQ0FBQyxzQkFBRCxDQUFqQzs7QUFDQSxJQUFJRyxtQkFB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QUFJRSxJQUFJLENBQUNDLE1BQUwsRUFBYjtJQUNBLE9BQU9wQyxDQUFDLEdBQUdtQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsQ0FBQyxHQUFHakQsQ0FBZixDQUFYO0VBQ0gsQ0FKRDs7RUFLQXFELFVBQVUsQ0FBQyxDQUFDekMsQ0FBQyxDQUFDSixFQUFFLENBQUM4QyxXQUFKLENBQUYsQ0FBRCxFQUFzQnRDLENBQUMsQ0FBQ1csU0FBeEIsRUFBbUMsWUFBbkMsRUFBaUQsS0FBSyxDQUF0RCxDQUFWOztFQUNBMEIsVUFBVSxDQUFDLENBQUN6QyxDQUFDLENBQUNKLEVBQUUsQ0FBQzhDLFdBQUosQ0FBRixDQUFELEVBQXNCdEMsQ0FBQyxDQUFDVyxTQUF4QixFQUFtQyxVQUFuQyxFQUErQyxLQUFLLENBQXBELENBQVY7O0VBQ0EsT0FBTzBCLFVBQVUsQ0FBQyxDQUFDM0MsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQXhDTyxDQXdDTGYsZUFBZSxXQXhDVixDQUFSOztBQXlDQXNELE9BQU8sV0FBUCxHQUFrQnpDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciAkYnJhaW5MZXZlbEJhc2UgPSByZXF1aXJlKFwiLi9CcmFpbkxldmVsQmFzZVwiKTtcbnZhciAkbGV2ZWxfMjkwNzYwX0JveCA9IHJlcXVpcmUoXCIuL0xldmVsLTI5MDc2MF9Cb3hcIik7XG52YXIgJGxldmVsXzI5MDc2MF9EcmluayA9IHJlcXVpcmUoXCIuL0xldmVsLTI5MDc2MF9Ecmlua1wiKTtcbnZhciAkbGV2ZWxfMjkwNzYwX01vZGVsID0gcmVxdWlyZShcIi4vTGV2ZWwtMjkwNzYwX01vZGVsXCIpO1xudmFyICRsZXZlbF8yOTA3NjBfV2FpdCA9IHJlcXVpcmUoXCIuL0xldmVsLTI5MDc2MF9XYWl0XCIpO1xudmFyIHAgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGQgPSBwLmNjY2xhc3M7XG52YXIgdSA9IHAucHJvcGVydHk7XG52YXIgZyA9IChmdW5jdGlvbiAodCkge1xuICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICBlLmRyaW5rQXRsYXMgPSBudWxsO1xuICAgICAgICBlLmJveEF0bGFzID0gbnVsbDtcbiAgICAgICAgZS5tb2RlbCA9IG5ldyAkbGV2ZWxfMjkwNzYwX01vZGVsLmRlZmF1bHQoKTtcbiAgICAgICAgZS5kcmlua1Jvb3QgPSBudWxsO1xuICAgICAgICBlLndhaXRSb290ID0gbnVsbDtcbiAgICAgICAgZS5ib3hSb290ID0gbnVsbDtcbiAgICAgICAgZS5hbW91bnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZHJpbmtSb290ID0gdGhpcy5kaWN0LmRyaW5rUm9vdDtcbiAgICAgICAgdGhpcy5ib3hSb290ID0gdGhpcy5kaWN0LmJveFJvb3Q7XG4gICAgICAgIHRoaXMud2FpdFJvb3QgPSB0aGlzLmRpY3Qud2FpdFJvb3Q7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gdGhpcy5kaWN0LmFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLnNldENvbGxpc2lvbk1hbmFnZXIoITAsICExKTtcbiAgICAgICAgdGhpcy5kaWN0LnByb3BCdG5Sb290LmFjdGl2ZSA9ICExO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUub25MZXZlbFJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmluaXQodGhpcy5sZXZlbEpTT04uanNvblt0aGlzLmxldmVsSURdKTtcbiAgICAgICAgdGhpcy5ib3hSb290LmFkZENvbXBvbmVudCgkbGV2ZWxfMjkwNzYwX0JveC5kZWZhdWx0KS5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLmRyaW5rUm9vdC5hZGRDb21wb25lbnQoJGxldmVsXzI5MDc2MF9Ecmluay5kZWZhdWx0KS5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLndhaXRSb290LmFkZENvbXBvbmVudCgkbGV2ZWxfMjkwNzYwX1dhaXQuZGVmYXVsdCkuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVEcmlua0Ftb3VudFZpZXcoKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLnVwZGF0ZURyaW5rQW1vdW50VmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbW91bnQuc3RyaW5nID0gKHRoaXMubW9kZWwuZHJpbmtBbW91bnQgLSB0aGlzLm1vZGVsLnJlbW92ZURyaW5rQW1vdW50KS50b1N0cmluZygpO1xuICAgIH07XG4gICAgZS5wcm90b3R5cGUucmFuZG9tTnVtID0gZnVuY3Rpb24gKHQsIGUsIG8pIHtcbiAgICAgICAgdmFyIGkgPSBlIC0gdDtcbiAgICAgICAgdmFyIHIgPSBvIHx8IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiB0ICsgTWF0aC5yb3VuZChyICogaSk7XG4gICAgfTtcbiAgICBfX2RlY29yYXRlKFt1KGNjLlNwcml0ZUF0bGFzKV0sIGUucHJvdG90eXBlLCBcImRyaW5rQXRsYXNcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFt1KGNjLlNwcml0ZUF0bGFzKV0sIGUucHJvdG90eXBlLCBcImJveEF0bGFzXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2RdLCBlKTtcbn0pKCRicmFpbkxldmVsQmFzZS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGc7XG4iXX0=