
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GetCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88e9fUh1aBA1roJxmdS51vX', 'GetCard');
// scripts/GetCard.js

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
    this.dict.cardAmount.getComponent(cc.Label).string = $languageManager["default"].formatStr("万能卡x%d", 1);
  };

  e.prototype.noBtn = function () {
    console.log("测试");
    cc.game.emit("hideGetCard");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dldENhcmQuanMiXSwibmFtZXMiOlsiciIsIiRwb3B1cE1hbmFnZXIiLCJyZXF1aXJlIiwiJHVJQmFzZSIsIiRsYW5ndWFnZU1hbmFnZXIiLCJsIiwiY2MiLCJfZGVjb3JhdG9yIiwidSIsImNjY2xhc3MiLCJmIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiY2FsbCIsIm5vZGUiLCJzZXRDb250ZW50U2l6ZSIsIndpblNpemUiLCJhZGRCdG5PbiIsIm5vQnRuIiwiZGljdCIsImNhcmRBbW91bnQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsImZvcm1hdFN0ciIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiZW1pdCIsImhpZGUiLCJfX2RlY29yYXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQUE5Qjs7QUFDQSxJQUFJRyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxPQUFRLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBbkQ7RUFDSDs7RUFDREMsU0FBUyxDQUFDSCxDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSSxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3Qk4sQ0FBQyxDQUFDSyxTQUFGLENBQVlDLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCZixFQUFFLENBQUNnQixPQUE1QjtJQUNBLEtBQUtDLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLEtBQUtDLEtBQTVCLEVBQW1DLElBQW5DO0lBQ0EsS0FBS0MsSUFBTCxDQUFVQyxVQUFWLENBQXFCQyxZQUFyQixDQUFrQ3JCLEVBQUUsQ0FBQ3NCLEtBQXJDLEVBQTRDQyxNQUE1QyxHQUFxRHpCLGdCQUFnQixXQUFoQixDQUF5QjBCLFNBQXpCLENBQW1DLFFBQW5DLEVBQTZDLENBQTdDLENBQXJEO0VBQ0gsQ0FMRDs7RUFNQWpCLENBQUMsQ0FBQ0ksU0FBRixDQUFZTyxLQUFaLEdBQW9CLFlBQVk7SUFDNUJPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7SUFDQTFCLEVBQUUsQ0FBQzJCLElBQUgsQ0FBUUMsSUFBUixDQUFhLGFBQWI7SUFDQWpDLGFBQWEsV0FBYixDQUFzQmtDLElBQXRCO0VBQ0gsQ0FKRDs7RUFLQSxPQUFPQyxVQUFVLENBQUMsQ0FBQzVCLENBQUQsQ0FBRCxFQUFNSyxDQUFOLENBQWpCO0FBQ0gsQ0FqQkQsQ0FpQkdWLE9BQU8sV0FqQlYsQ0FGQyxDQUFMO0FBb0JBa0MsT0FBTyxXQUFQLEdBQWtCM0IsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByO1xudmFyICRwb3B1cE1hbmFnZXIgPSByZXF1aXJlKFwiLi9Qb3B1cE1hbmFnZXJcIik7XG52YXIgJHVJQmFzZSA9IHJlcXVpcmUoXCIuL1VJQmFzZVwiKTtcbnZhciAkbGFuZ3VhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTGFuZ3VhZ2VNYW5hZ2VyXCIpO1xudmFyIGwgPSBjYy5fZGVjb3JhdG9yO1xudmFyIHUgPSBsLmNjY2xhc3M7XG52YXIgZiA9XG4gICAgKGwucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEJ0bk9uKFwibm9CdG5cIiwgdGhpcy5ub0J0biwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRpY3QuY2FyZEFtb3VudC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICRsYW5ndWFnZU1hbmFnZXIuZGVmYXVsdC5mb3JtYXRTdHIoXCLkuIfog73ljaF4JWRcIiwgMSk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLm5vQnRuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtYvor5VcIik7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJoaWRlR2V0Q2FyZFwiKTtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFt1XSwgZSk7XG4gICAgfSkoJHVJQmFzZS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmO1xuIl19