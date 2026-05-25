
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Hint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09f8c6tS5RMJJok1qE+Wivd', 'Hint');
// scripts/Hint.js

"use strict";

var r = function () {
  function t(t, e, n) {
    this.node = null;
    this.node = new cc.Node("Hint");
    this.node.setPosition(e);
    this.node.setScale(n);
    this.node.scale = 0;
    this.node.opacity = 0;
  }

  t.prototype.show = function () {
    this.node.scale = 1;
    this.node.opacity = 1;
  };

  t.prototype.hide = function () {
    this.node.scale = 0;
    this.node.opacity = 0;
  };

  return t;
}();

exports["default"] = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hpbnQuanMiXSwibmFtZXMiOlsiciIsInQiLCJlIiwibiIsIm5vZGUiLCJjYyIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInNldFNjYWxlIiwic2NhbGUiLCJvcGFjaXR5IiwicHJvdG90eXBlIiwic2hvdyIsImhpZGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsQ0FBV0EsQ0FBWCxFQUFjQyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQjtJQUNoQixLQUFLQyxJQUFMLEdBQVksSUFBWjtJQUNBLEtBQUtBLElBQUwsR0FBWSxJQUFJQyxFQUFFLENBQUNDLElBQVAsQ0FBWSxNQUFaLENBQVo7SUFDQSxLQUFLRixJQUFMLENBQVVHLFdBQVYsQ0FBc0JMLENBQXRCO0lBQ0EsS0FBS0UsSUFBTCxDQUFVSSxRQUFWLENBQW1CTCxDQUFuQjtJQUNBLEtBQUtDLElBQUwsQ0FBVUssS0FBVixHQUFrQixDQUFsQjtJQUNBLEtBQUtMLElBQUwsQ0FBVU0sT0FBVixHQUFvQixDQUFwQjtFQUNIOztFQUNEVCxDQUFDLENBQUNVLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixZQUFZO0lBQzNCLEtBQUtSLElBQUwsQ0FBVUssS0FBVixHQUFrQixDQUFsQjtJQUNBLEtBQUtMLElBQUwsQ0FBVU0sT0FBVixHQUFvQixDQUFwQjtFQUNILENBSEQ7O0VBSUFULENBQUMsQ0FBQ1UsU0FBRixDQUFZRSxJQUFaLEdBQW1CLFlBQVk7SUFDM0IsS0FBS1QsSUFBTCxDQUFVSyxLQUFWLEdBQWtCLENBQWxCO0lBQ0EsS0FBS0wsSUFBTCxDQUFVTSxPQUFWLEdBQW9CLENBQXBCO0VBQ0gsQ0FIRDs7RUFJQSxPQUFPVCxDQUFQO0FBQ0gsQ0FsQk8sRUFBUjs7QUFtQkFhLE9BQU8sV0FBUCxHQUFrQmQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KHQsIGUsIG4pIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlID0gbmV3IGNjLk5vZGUoXCJIaW50XCIpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oZSk7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShuKTtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDE7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSByO1xuIl19