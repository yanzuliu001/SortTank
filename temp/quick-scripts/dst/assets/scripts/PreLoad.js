
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PreLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13690YXE+hDDpUANOREyD3b', 'PreLoad');
// scripts/PreLoad.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.carSpriteFrame = [];
    return e;
  }

  __extends(e, t);

  e.prototype.start = function () {};

  __decorate([c([cc.SpriteFrame])], e.prototype, "carSpriteFrame", void 0);

  return __decorate([s], e);
}(cc.Component);

exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1ByZUxvYWQuanMiXSwibmFtZXMiOlsiciIsImEiLCJjYyIsIl9kZWNvcmF0b3IiLCJzIiwiY2NjbGFzcyIsImMiLCJwcm9wZXJ0eSIsImwiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiY2FyU3ByaXRlRnJhbWUiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydCIsIl9fZGVjb3JhdGUiLCJTcHJpdGVGcmFtZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ00sUUFBVjs7QUFDQSxJQUFJQyxDQUFDLEdBQUksVUFBVUMsQ0FBVixFQUFhO0VBQ2xCLFNBQVNDLENBQVQsR0FBYTtJQUNULElBQUlBLENBQUMsR0FBSSxTQUFTRCxDQUFULElBQWNBLENBQUMsQ0FBQ0UsS0FBRixDQUFRLElBQVIsRUFBY0MsU0FBZCxDQUFmLElBQTRDLElBQXBEO0lBQ0FGLENBQUMsQ0FBQ0csY0FBRixHQUFtQixFQUFuQjtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLEtBQVosR0FBb0IsWUFBWSxDQUFFLENBQWxDOztFQUNBQyxVQUFVLENBQUMsQ0FBQ1gsQ0FBQyxDQUFDLENBQUNKLEVBQUUsQ0FBQ2dCLFdBQUosQ0FBRCxDQUFGLENBQUQsRUFBd0JSLENBQUMsQ0FBQ0ssU0FBMUIsRUFBcUMsZ0JBQXJDLEVBQXVELEtBQUssQ0FBNUQsQ0FBVjs7RUFDQSxPQUFPRSxVQUFVLENBQUMsQ0FBQ2IsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQVZPLENBVUxSLEVBQUUsQ0FBQ2lCLFNBVkUsQ0FBUjs7QUFXQUMsT0FBTyxXQUFQLEdBQWtCWixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID0gYS5wcm9wZXJ0eTtcbnZhciBsID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuY2FyU3ByaXRlRnJhbWUgPSBbXTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICBlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIF9fZGVjb3JhdGUoW2MoW2NjLlNwcml0ZUZyYW1lXSldLCBlLnByb3RvdHlwZSwgXCJjYXJTcHJpdGVGcmFtZVwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG59KShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbDtcbiJdfQ==