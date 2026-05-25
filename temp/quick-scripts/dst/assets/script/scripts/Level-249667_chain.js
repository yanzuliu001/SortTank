
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-249667_chain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '411d2Woe0FLB7GSWgGp5uD5', 'Level-249667_chain');
// script/scripts/Level-249667_chain.js

"use strict";

var i;

var $level_249667_carItem = require("./Level-249667_carItem");

var s = cc._decorator;
var c = s.ccclass;
var l = s.property;

var h = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.next = null;
    e.isReverse = !1;
    e.linkType = 0;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    if (this.isReverse) {
      this.next.getComponent($level_249667_carItem["default"]).nextCar = this.node.parent;
      this.node.parent.getComponent($level_249667_carItem["default"]).prevCar = this.next;
    } else {
      this.next.getComponent($level_249667_carItem["default"]).prevCar = this.node.parent;
      this.node.parent.getComponent($level_249667_carItem["default"]).nextCar = this.next;
    }
  };

  __decorate([l(cc.Node)], e.prototype, "next", void 0);

  __decorate([l], e.prototype, "isReverse", void 0);

  __decorate([l], e.prototype, "linkType", void 0);

  return __decorate([c], e);
}(cc.Component);

exports["default"] = h;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yNDk2NjdfY2hhaW4uanMiXSwibmFtZXMiOlsiaSIsIiRsZXZlbF8yNDk2NjdfY2FySXRlbSIsInJlcXVpcmUiLCJzIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJsIiwicHJvcGVydHkiLCJoIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm5leHQiLCJpc1JldmVyc2UiLCJsaW5rVHlwZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsIm9uTG9hZCIsImdldENvbXBvbmVudCIsIm5leHRDYXIiLCJub2RlIiwicGFyZW50IiwicHJldkNhciIsIl9fZGVjb3JhdGUiLCJOb2RlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLHFCQUFxQixHQUFHQyxPQUFPLENBQUMsd0JBQUQsQ0FBbkM7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBSCxDQUFDLENBQUNJLFNBQUYsR0FBYyxDQUFDLENBQWY7SUFDQUosQ0FBQyxDQUFDSyxRQUFGLEdBQWEsQ0FBYjtJQUNBLE9BQU9MLENBQVA7RUFDSDs7RUFDRE0sU0FBUyxDQUFDTixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDTyxTQUFGLENBQVlDLE1BQVosR0FBcUIsWUFBWTtJQUM3QixJQUFJLEtBQUtKLFNBQVQsRUFBb0I7TUFDaEIsS0FBS0QsSUFBTCxDQUFVTSxZQUFWLENBQXVCcEIscUJBQXFCLFdBQTVDLEVBQXNEcUIsT0FBdEQsR0FBZ0UsS0FBS0MsSUFBTCxDQUFVQyxNQUExRTtNQUNBLEtBQUtELElBQUwsQ0FBVUMsTUFBVixDQUFpQkgsWUFBakIsQ0FBOEJwQixxQkFBcUIsV0FBbkQsRUFBNkR3QixPQUE3RCxHQUF1RSxLQUFLVixJQUE1RTtJQUNILENBSEQsTUFHTztNQUNILEtBQUtBLElBQUwsQ0FBVU0sWUFBVixDQUF1QnBCLHFCQUFxQixXQUE1QyxFQUFzRHdCLE9BQXRELEdBQWdFLEtBQUtGLElBQUwsQ0FBVUMsTUFBMUU7TUFDQSxLQUFLRCxJQUFMLENBQVVDLE1BQVYsQ0FBaUJILFlBQWpCLENBQThCcEIscUJBQXFCLFdBQW5ELEVBQTZEcUIsT0FBN0QsR0FBdUUsS0FBS1AsSUFBNUU7SUFDSDtFQUNKLENBUkQ7O0VBU0FXLFVBQVUsQ0FBQyxDQUFDbEIsQ0FBQyxDQUFDSixFQUFFLENBQUN1QixJQUFKLENBQUYsQ0FBRCxFQUFlZixDQUFDLENBQUNPLFNBQWpCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQUssQ0FBekMsQ0FBVjs7RUFDQU8sVUFBVSxDQUFDLENBQUNsQixDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDTyxTQUFSLEVBQW1CLFdBQW5CLEVBQWdDLEtBQUssQ0FBckMsQ0FBVjs7RUFDQU8sVUFBVSxDQUFDLENBQUNsQixDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDTyxTQUFSLEVBQW1CLFVBQW5CLEVBQStCLEtBQUssQ0FBcEMsQ0FBVjs7RUFDQSxPQUFPTyxVQUFVLENBQUMsQ0FBQ3BCLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0F0Qk8sQ0FzQkxSLEVBQUUsQ0FBQ3dCLFNBdEJFLENBQVI7O0FBdUJBQyxPQUFPLFdBQVAsR0FBa0JuQixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGk7XG52YXIgJGxldmVsXzI0OTY2N19jYXJJdGVtID0gcmVxdWlyZShcIi4vTGV2ZWwtMjQ5NjY3X2Nhckl0ZW1cIik7XG52YXIgcyA9IGNjLl9kZWNvcmF0b3I7XG52YXIgYyA9IHMuY2NjbGFzcztcbnZhciBsID0gcy5wcm9wZXJ0eTtcbnZhciBoID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUubmV4dCA9IG51bGw7XG4gICAgICAgIGUuaXNSZXZlcnNlID0gITE7XG4gICAgICAgIGUubGlua1R5cGUgPSAwO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXZlcnNlKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5uZXh0Q2FyID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCRsZXZlbF8yNDk2NjdfY2FySXRlbS5kZWZhdWx0KS5wcmV2Q2FyID0gdGhpcy5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZXh0LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkucHJldkNhciA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgkbGV2ZWxfMjQ5NjY3X2Nhckl0ZW0uZGVmYXVsdCkubmV4dENhciA9IHRoaXMubmV4dDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX19kZWNvcmF0ZShbbChjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcIm5leHRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtsXSwgZS5wcm90b3R5cGUsIFwiaXNSZXZlcnNlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbbF0sIGUucHJvdG90eXBlLCBcImxpbmtUeXBlXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW2NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBoO1xuIl19