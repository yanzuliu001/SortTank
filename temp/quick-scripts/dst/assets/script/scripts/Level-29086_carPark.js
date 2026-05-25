
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-29086_carPark.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca2bf6FfIlJh6ZcXSVFE9/o', 'Level-29086_carPark');
// script/scripts/Level-29086_carPark.js

"use strict";

var i;

var $level_29086_carParkItem = require("./Level-29086_carParkItem");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mgr = null;
    e.config = [];
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t, e) {
    this.mgr = t;
    this.config = e;

    for (var o = 0; o < this.node.children.length; o++) {
      var i = this.node.children[o];
      var r = this.config[o];
      i.getComponent($level_29086_carParkItem["default"]).init(this, r);
    }
  };

  return __decorate([c], e);
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA4Nl9jYXJQYXJrLmpzIl0sIm5hbWVzIjpbImkiLCIkbGV2ZWxfMjkwODZfY2FyUGFya0l0ZW0iLCJyZXF1aXJlIiwicyIsImNjIiwiX2RlY29yYXRvciIsImMiLCJjY2NsYXNzIiwibCIsInByb3BlcnR5IiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm1nciIsImNvbmZpZyIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImluaXQiLCJvIiwibm9kZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiciIsImdldENvbXBvbmVudCIsIl9fZGVjb3JhdGUiLCJDb21wb25lbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUo7O0FBQ0EsSUFBSUMsd0JBQXdCLEdBQUdDLE9BQU8sQ0FBQywyQkFBRCxDQUF0Qzs7QUFDQSxJQUFJQyxDQUFDLEdBQUdDLEVBQUUsQ0FBQ0MsVUFBWDtBQUNBLElBQUlDLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxPQUFWO0FBQ0EsSUFBSUMsQ0FBQyxJQUNBTCxDQUFDLENBQUNNLFFBQUYsRUFDQSxVQUFVQyxDQUFWLEVBQWE7RUFDVixTQUFTQyxDQUFULEdBQWE7SUFDVCxJQUFJQSxDQUFDLEdBQUksU0FBU0QsQ0FBVCxJQUFjQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNDLFNBQWQsQ0FBZixJQUE0QyxJQUFwRDtJQUNBRixDQUFDLENBQUNHLEdBQUYsR0FBUSxJQUFSO0lBQ0FILENBQUMsQ0FBQ0ksTUFBRixHQUFXLEVBQVg7SUFDQSxPQUFPSixDQUFQO0VBQ0g7O0VBQ0RLLFNBQVMsQ0FBQ0wsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ00sU0FBRixDQUFZQyxJQUFaLEdBQW1CLFVBQVVSLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUMvQixLQUFLRyxHQUFMLEdBQVdKLENBQVg7SUFDQSxLQUFLSyxNQUFMLEdBQWNKLENBQWQ7O0lBQ0EsS0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsTUFBdkMsRUFBK0NILENBQUMsRUFBaEQsRUFBb0Q7TUFDaEQsSUFBSW5CLENBQUMsR0FBRyxLQUFLb0IsSUFBTCxDQUFVQyxRQUFWLENBQW1CRixDQUFuQixDQUFSO01BQ0EsSUFBSUksQ0FBQyxHQUFHLEtBQUtSLE1BQUwsQ0FBWUksQ0FBWixDQUFSO01BQ0FuQixDQUFDLENBQUN3QixZQUFGLENBQWV2Qix3QkFBd0IsV0FBdkMsRUFBaURpQixJQUFqRCxDQUFzRCxJQUF0RCxFQUE0REssQ0FBNUQ7SUFDSDtFQUNKLENBUkQ7O0VBU0EsT0FBT0UsVUFBVSxDQUFDLENBQUNuQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBbEJELENBa0JHUCxFQUFFLENBQUNzQixTQWxCTixDQUZDLENBQUw7QUFxQkFDLE9BQU8sV0FBUCxHQUFrQm5CLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciAkbGV2ZWxfMjkwODZfY2FyUGFya0l0ZW0gPSByZXF1aXJlKFwiLi9MZXZlbC0yOTA4Nl9jYXJQYXJrSXRlbVwiKTtcbnZhciBzID0gY2MuX2RlY29yYXRvcjtcbnZhciBjID0gcy5jY2NsYXNzO1xudmFyIGwgPVxuICAgIChzLnByb3BlcnR5LFxuICAgIChmdW5jdGlvbiAodCkge1xuICAgICAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgICAgICBlLm1nciA9IG51bGw7XG4gICAgICAgICAgICBlLmNvbmZpZyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xuICAgICAgICBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIHRoaXMubWdyID0gdDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gZTtcbiAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLm5vZGUuY2hpbGRyZW5bb107XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmNvbmZpZ1tvXTtcbiAgICAgICAgICAgICAgICBpLmdldENvbXBvbmVudCgkbGV2ZWxfMjkwODZfY2FyUGFya0l0ZW0uZGVmYXVsdCkuaW5pdCh0aGlzLCByKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcbiAgICB9KShjYy5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGw7XG4iXX0=