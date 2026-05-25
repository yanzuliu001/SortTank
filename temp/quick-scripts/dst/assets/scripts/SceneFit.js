
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SceneFit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06125y+k6dJWYy3Eui9vWAf', 'SceneFit');
// scripts/SceneFit.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = (a.property, function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.fit();
    console.log("111");
  };

  e.prototype.fit = function () {
    var t = cc.Canvas.instance;
    var e = cc.view.getFrameSize().width / cc.view.getFrameSize().height >= t.designResolution.width / t.designResolution.height;
    t.fitHeight = e;
    t.fitWidth = !e;
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NjZW5lRml0LmpzIl0sIm5hbWVzIjpbInIiLCJhIiwiY2MiLCJfZGVjb3JhdG9yIiwicyIsImNjY2xhc3MiLCJjIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiZml0IiwiY29uc29sZSIsImxvZyIsIkNhbnZhcyIsImluc3RhbmNlIiwidmlldyIsImdldEZyYW1lU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzaWduUmVzb2x1dGlvbiIsImZpdEhlaWdodCIsImZpdFdpZHRoIiwiX19kZWNvcmF0ZSIsIkNvbXBvbmVudCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjtBQUNBLElBQUlDLENBQUMsR0FBR0MsRUFBRSxDQUFDQyxVQUFYO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQVY7QUFDQSxJQUFJQyxDQUFDLElBQ0FMLENBQUMsQ0FBQ00sUUFBRixFQUNBLFVBQVVDLENBQVYsRUFBYTtFQUNWLFNBQVNDLENBQVQsR0FBYTtJQUNULE9BQVEsU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFuRDtFQUNIOztFQUNEQyxTQUFTLENBQUNILENBQUQsRUFBSUQsQ0FBSixDQUFUOztFQUNBQyxDQUFDLENBQUNJLFNBQUYsQ0FBWUMsTUFBWixHQUFxQixZQUFZO0lBQzdCLEtBQUtDLEdBQUw7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtFQUNILENBSEQ7O0VBSUFSLENBQUMsQ0FBQ0ksU0FBRixDQUFZRSxHQUFaLEdBQWtCLFlBQVk7SUFDMUIsSUFBSVAsQ0FBQyxHQUFHTixFQUFFLENBQUNnQixNQUFILENBQVVDLFFBQWxCO0lBQ0EsSUFBSVYsQ0FBQyxHQUNEUCxFQUFFLENBQUNrQixJQUFILENBQVFDLFlBQVIsR0FBdUJDLEtBQXZCLEdBQStCcEIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRQyxZQUFSLEdBQXVCRSxNQUF0RCxJQUNBZixDQUFDLENBQUNnQixnQkFBRixDQUFtQkYsS0FBbkIsR0FBMkJkLENBQUMsQ0FBQ2dCLGdCQUFGLENBQW1CRCxNQUZsRDtJQUdBZixDQUFDLENBQUNpQixTQUFGLEdBQWNoQixDQUFkO0lBQ0FELENBQUMsQ0FBQ2tCLFFBQUYsR0FBYSxDQUFDakIsQ0FBZDtFQUNILENBUEQ7O0VBUUEsT0FBT2tCLFVBQVUsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELEVBQU1LLENBQU4sQ0FBakI7QUFDSCxDQWxCRCxDQWtCR1AsRUFBRSxDQUFDMEIsU0FsQk4sQ0FGQyxDQUFMO0FBcUJBQyxPQUFPLFdBQVAsR0FBa0J2QixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID1cbiAgICAoYS5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmZpdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIxMTFcIik7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmZpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gY2MuQ2FudmFzLmluc3RhbmNlO1xuICAgICAgICAgICAgdmFyIGUgPVxuICAgICAgICAgICAgICAgIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA+PVxuICAgICAgICAgICAgICAgIHQuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIHQuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQ7XG4gICAgICAgICAgICB0LmZpdEhlaWdodCA9IGU7XG4gICAgICAgICAgICB0LmZpdFdpZHRoID0gIWU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG4gICAgfSkoY2MuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjO1xuIl19