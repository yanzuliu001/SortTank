
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-29086_dragonItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23130kGZzdPDqpiX5zo509n', 'Level-29086_dragonItem');
// script/scripts/Level-29086_dragonItem.js

"use strict";

var i;
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.dragonColor = null;
    e.dir = 0;
    e.colorImgName = null;
    e.dirImgName = null;
    e.isMoving = !1;
    return e;
  }

  __extends(e, t);

  return __decorate([s], e);
}(cc.Component));
exports["default"] = c;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA4Nl9kcmFnb25JdGVtLmpzIl0sIm5hbWVzIjpbImkiLCJhIiwiY2MiLCJfZGVjb3JhdG9yIiwicyIsImNjY2xhc3MiLCJjIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiZHJhZ29uQ29sb3IiLCJkaXIiLCJjb2xvckltZ05hbWUiLCJkaXJJbWdOYW1lIiwiaXNNb3ZpbmciLCJfX2V4dGVuZHMiLCJfX2RlY29yYXRlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxXQUFGLEdBQWdCLElBQWhCO0lBQ0FILENBQUMsQ0FBQ0ksR0FBRixHQUFRLENBQVI7SUFDQUosQ0FBQyxDQUFDSyxZQUFGLEdBQWlCLElBQWpCO0lBQ0FMLENBQUMsQ0FBQ00sVUFBRixHQUFlLElBQWY7SUFDQU4sQ0FBQyxDQUFDTyxRQUFGLEdBQWEsQ0FBQyxDQUFkO0lBQ0EsT0FBT1AsQ0FBUDtFQUNIOztFQUNEUSxTQUFTLENBQUNSLENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBLE9BQU9VLFVBQVUsQ0FBQyxDQUFDZCxDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBWkQsQ0FZR1AsRUFBRSxDQUFDaUIsU0FaTixDQUZDLENBQUw7QUFlQUMsT0FBTyxXQUFQLEdBQWtCZCxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID1cbiAgICAoYS5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICAgICAgZS5kcmFnb25Db2xvciA9IG51bGw7XG4gICAgICAgICAgICBlLmRpciA9IDA7XG4gICAgICAgICAgICBlLmNvbG9ySW1nTmFtZSA9IG51bGw7XG4gICAgICAgICAgICBlLmRpckltZ05hbWUgPSBudWxsO1xuICAgICAgICAgICAgZS5pc01vdmluZyA9ICExO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbc10sIGUpO1xuICAgIH0pKGNjLkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gYztcbiJdfQ==