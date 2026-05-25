
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RewriteMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fce47sGueBLj5qbP+lhSMVs', 'RewriteMask');
// scripts/RewriteMask.js

"use strict";

((function () {}).prototype = cc.Mask.prototype).onDestroy = function () {
  if (this._super) {
    this._super();
  }

  if (this._removeGraphics) {
    this._removeGraphics();
  }

  this._spriteFrame = null;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Jld3JpdGVNYXNrLmpzIl0sIm5hbWVzIjpbInByb3RvdHlwZSIsImNjIiwiTWFzayIsIm9uRGVzdHJveSIsIl9zdXBlciIsIl9yZW1vdmVHcmFwaGljcyIsIl9zcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLENBQUMsWUFBWSxDQUFFLENBQWYsRUFBaUJBLFNBQWpCLEdBQTZCQyxFQUFFLENBQUNDLElBQUgsQ0FBUUYsU0FBdEMsRUFBaURHLFNBQWpELEdBQTZELFlBQVk7RUFDckUsSUFBSSxLQUFLQyxNQUFULEVBQWlCO0lBQ2IsS0FBS0EsTUFBTDtFQUNIOztFQUNELElBQUksS0FBS0MsZUFBVCxFQUEwQjtJQUN0QixLQUFLQSxlQUFMO0VBQ0g7O0VBQ0QsS0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNILENBUkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIigoZnVuY3Rpb24gKCkge30pLnByb3RvdHlwZSA9IGNjLk1hc2sucHJvdG90eXBlKS5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3N1cGVyKSB7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZW1vdmVHcmFwaGljcykge1xuICAgICAgICB0aGlzLl9yZW1vdmVHcmFwaGljcygpO1xuICAgIH1cbiAgICB0aGlzLl9zcHJpdGVGcmFtZSA9IG51bGw7XG59O1xuIl19