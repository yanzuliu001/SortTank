
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/HeroLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd62a4KxKjpBlboaTVm8Y+Xr', 'HeroLevel');
// scripts/HeroLevel.js

"use strict";

var r;

var $popupConst = require("./PopupConst");

var $uIBase = require("./UIBase");

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $popupManager = require("./PopupManager");

var $configManager = require("./ConfigManager");

var $configConst = require("./ConfigConst");

var m = cc._decorator;
var g = m.ccclass;
var y = (m.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.cost = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    t.prototype.onLoad.call(this);
    this.node.scale = 1.2;
    var e = $localStorageManager["default"].get($localStorageConst["default"].HeroLevel) || 1;
    $localStorageManager["default"].set($localStorageConst["default"].HeroLevel, e);
    this.localStorageUIData[$localStorageConst["default"].HeroLevel] = this.updateHeroLevel.bind(this);
  };

  e.prototype.updateHeroLevel = function (t) {
    return __awaiter(this, void 0, void 0, function () {
      var e;
      var n;
      var r;
      return __generator(this, function (o) {
        switch (o.label) {
          case 0:
            this.dict.heroLevel.getComponent(cc.Label).string = "Lv" + t;
            return [4, $configManager.Config.get($configConst.ConfigConst.Role)];

          case 1:
            e = o.sent();
            n = $localStorageManager["default"].get($localStorageConst["default"].DragonBall) || 0;

            if (r = e.find(function (e) {
              return e.id == t + 1;
            })) {
              this.cost = r.cost;
              this.dict.upgrade.active = n >= this.cost;
            } else {
              this.dict.upgrade.active = !1;
            }

            return [2];
        }
      });
    });
  };

  e.prototype.clickSelf = function () {
    $popupManager["default"].show($popupConst.PopupConst.Role);
  };

  return __decorate([g], e);
}($uIBase["default"]));
exports["default"] = y;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hlcm9MZXZlbC5qcyJdLCJuYW1lcyI6WyJyIiwiJHBvcHVwQ29uc3QiLCJyZXF1aXJlIiwiJHVJQmFzZSIsIiRsb2NhbFN0b3JhZ2VDb25zdCIsIiRsb2NhbFN0b3JhZ2VNYW5hZ2VyIiwiJHBvcHVwTWFuYWdlciIsIiRjb25maWdNYW5hZ2VyIiwiJGNvbmZpZ0NvbnN0IiwibSIsImNjIiwiX2RlY29yYXRvciIsImciLCJjY2NsYXNzIiwieSIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImNvc3QiLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJjYWxsIiwibm9kZSIsInNjYWxlIiwiZ2V0IiwiSGVyb0xldmVsIiwic2V0IiwibG9jYWxTdG9yYWdlVUlEYXRhIiwidXBkYXRlSGVyb0xldmVsIiwiYmluZCIsIl9fYXdhaXRlciIsIm4iLCJfX2dlbmVyYXRvciIsIm8iLCJsYWJlbCIsImRpY3QiLCJoZXJvTGV2ZWwiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIkNvbmZpZyIsIkNvbmZpZ0NvbnN0IiwiUm9sZSIsInNlbnQiLCJEcmFnb25CYWxsIiwiZmluZCIsImlkIiwidXBncmFkZSIsImFjdGl2ZSIsImNsaWNrU2VsZiIsInNob3ciLCJQb3B1cENvbnN0IiwiX19kZWNvcmF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBSjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsa0JBQWtCLEdBQUdGLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQzs7QUFDQSxJQUFJRyxvQkFBb0IsR0FBR0gsT0FBTyxDQUFDLHVCQUFELENBQWxDOztBQUNBLElBQUlJLGFBQWEsR0FBR0osT0FBTyxDQUFDLGdCQUFE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QyxDQUE1QjtZQUNIOztZQUNELE9BQU8sQ0FBQyxDQUFELENBQVA7UUFqQlI7TUFtQkgsQ0FwQmlCLENBQWxCO0lBcUJILENBekJlLENBQWhCO0VBMEJILENBM0JEOztFQTRCQWxDLENBQUMsQ0FBQ0ssU0FBRixDQUFZOEIsU0FBWixHQUF3QixZQUFZO0lBQ2hDOUMsYUFBYSxXQUFiLENBQXNCK0MsSUFBdEIsQ0FBMkJwRCxXQUFXLENBQUNxRCxVQUFaLENBQXVCVCxJQUFsRDtFQUNILENBRkQ7O0VBR0EsT0FBT1UsVUFBVSxDQUFDLENBQUMzQyxDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBOUNELENBOENHZCxPQUFPLFdBOUNWLENBRkMsQ0FBTDtBQWlEQXFELE9BQU8sV0FBUCxHQUFrQjFDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciAkcG9wdXBDb25zdCA9IHJlcXVpcmUoXCIuL1BvcHVwQ29uc3RcIik7XG52YXIgJHVJQmFzZSA9IHJlcXVpcmUoXCIuL1VJQmFzZVwiKTtcbnZhciAkbG9jYWxTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VDb25zdFwiKTtcbnZhciAkbG9jYWxTdG9yYWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJHBvcHVwTWFuYWdlciA9IHJlcXVpcmUoXCIuL1BvcHVwTWFuYWdlclwiKTtcbnZhciAkY29uZmlnTWFuYWdlciA9IHJlcXVpcmUoXCIuL0NvbmZpZ01hbmFnZXJcIik7XG52YXIgJGNvbmZpZ0NvbnN0ID0gcmVxdWlyZShcIi4vQ29uZmlnQ29uc3RcIik7XG52YXIgbSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgZyA9IG0uY2NjbGFzcztcbnZhciB5ID1cbiAgICAobS5wcm9wZXJ0eSxcbiAgICAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgIHZhciBlID0gKG51bGwgIT09IHQgJiYgdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB8fCB0aGlzO1xuICAgICAgICAgICAgZS5jb3N0ID0gMDtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5wcm90b3R5cGUub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxLjI7XG4gICAgICAgICAgICB2YXIgZSA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lkhlcm9MZXZlbCkgfHwgMTtcbiAgICAgICAgICAgICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lkhlcm9MZXZlbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVVJRGF0YVskbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5IZXJvTGV2ZWxdID0gdGhpcy51cGRhdGVIZXJvTGV2ZWwuYmluZCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgZS5wcm90b3R5cGUudXBkYXRlSGVyb0xldmVsID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWN0Lmhlcm9MZXZlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiTHZcIiArIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCAkY29uZmlnTWFuYWdlci5Db25maWcuZ2V0KCRjb25maWdDb25zdC5Db25maWdDb25zdC5Sb2xlKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IG8uc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5EcmFnb25CYWxsKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIgPSBlLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmlkID09IHQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3N0ID0gci5jb3N0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudXBncmFkZS5hY3RpdmUgPSBuID49IHRoaXMuY29zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY3QudXBncmFkZS5hY3RpdmUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGUucHJvdG90eXBlLmNsaWNrU2VsZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuZGVmYXVsdC5zaG93KCRwb3B1cENvbnN0LlBvcHVwQ29uc3QuUm9sZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX2RlY29yYXRlKFtnXSwgZSk7XG4gICAgfSkoJHVJQmFzZS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSB5O1xuIl19