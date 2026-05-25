
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Stars.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70ea3YbDsJECIwwtARBmHxo', 'Stars');
// scripts/Stars.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mask = null;
    e.starNum = 0;
    e.canMark = !0;
    e.isTouch = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
  };

  e.prototype.onTouchStart = function (t) {
    this.isTouch = !0;

    if (this.canMark) {
      this.checkStar(this.node.convertToNodeSpaceAR(t.getLocation()));
    }
  };

  e.prototype.onTouchMove = function (t) {
    if (this.canMark) {
      this.checkStar(this.node.convertToNodeSpaceAR(t.getLocation()));
    }
  };

  e.prototype.setCanMark = function (t) {
    this.canMark = t;
  };

  e.prototype.checkStar = function (t) {
    var e = t.x + this.node.width / 2;
    this.mask.node.width = e;
    var n = this.node.width / 5;
    this.starNum = e / n;
    this.starNum = Math.ceil(this.starNum);

    if (this.starNum < 1) {
      this.starNum = 1;
    } else {
      this.starNum = this.starNum;
    }
  };

  e.prototype.onDestroy = function () {
    this.node.targetOff(this);
  };

  __decorate([c(cc.Mask)], e.prototype, "mask", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0YXJzLmpzIl0sIm5hbWVzIjpbInIiLCJhIiwiY2MiLCJfZGVjb3JhdG9yIiwicyIsImNjY2xhc3MiLCJjIiwicHJvcGVydHkiLCJsIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm1hc2siLCJzdGFyTnVtIiwiY2FuTWFyayIsImlzVG91Y2giLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJjaGVja1N0YXIiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldExvY2F0aW9uIiwic2V0Q2FuTWFyayIsIngiLCJ3aWR0aCIsIm4iLCJNYXRoIiwiY2VpbCIsIm9uRGVzdHJveSIsInRhcmdldE9mZiIsIl9fZGVjb3JhdGUiLCJNYXNrIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxJQUFGLEdBQVMsSUFBVDtJQUNBSCxDQUFDLENBQUNJLE9BQUYsR0FBWSxDQUFaO0lBQ0FKLENBQUMsQ0FBQ0ssT0FBRixHQUFZLENBQUMsQ0FBYjtJQUNBTCxDQUFDLENBQUNNLE9BQUYsR0FBWSxDQUFDLENBQWI7SUFDQSxPQUFPTixDQUFQO0VBQ0g7O0VBQ0RPLFNBQVMsQ0FBQ1AsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ1EsU0FBRixDQUFZQyxNQUFaLEdBQXFCLFlBQVk7SUFDN0IsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFuQixFQUFFLENBQUNvQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFlBQWpELEVBQStELElBQS9EO0lBQ0EsS0FBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWFuQixFQUFFLENBQUNvQixJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFVBQS9CLEVBQTJDLEtBQUtDLFdBQWhELEVBQTZELElBQTdEO0VBQ0gsQ0FIRDs7RUFJQWpCLENBQUMsQ0FBQ1EsU0FBRixDQUFZTyxZQUFaLEdBQTJCLFVBQVVoQixDQUFWLEVBQWE7SUFDcEMsS0FBS08sT0FBTCxHQUFlLENBQUMsQ0FBaEI7O0lBQ0EsSUFBSSxLQUFLRCxPQUFULEVBQWtCO01BQ2QsS0FBS2EsU0FBTCxDQUFlLEtBQUtSLElBQUwsQ0FBVVMsb0JBQVYsQ0FBK0JwQixDQUFDLENBQUNxQixXQUFGLEVBQS9CLENBQWY7SUFDSDtFQUNKLENBTEQ7O0VBTUFwQixDQUFDLENBQUNRLFNBQUYsQ0FBWVMsV0FBWixHQUEwQixVQUFVbEIsQ0FBVixFQUFhO0lBQ25DLElBQUksS0FBS00sT0FBVCxFQUFrQjtNQUNkLEtBQUthLFNBQUwsQ0FBZSxLQUFLUixJQUFMLENBQVVTLG9CQUFWLENBQStCcEIsQ0FBQyxDQUFDcUIsV0FBRixFQUEvQixDQUFmO0lBQ0g7RUFDSixDQUpEOztFQUtBcEIsQ0FBQyxDQUFDUSxTQUFGLENBQVlhLFVBQVosR0FBeUIsVUFBVXRCLENBQVYsRUFBYTtJQUNsQyxLQUFLTSxPQUFMLEdBQWVOLENBQWY7RUFDSCxDQUZEOztFQUdBQyxDQUFDLENBQUNRLFNBQUYsQ0FBWVUsU0FBWixHQUF3QixVQUFVbkIsQ0FBVixFQUFhO0lBQ2pDLElBQUlDLENBQUMsR0FBR0QsQ0FBQyxDQUFDdUIsQ0FBRixHQUFNLEtBQUtaLElBQUwsQ0FBVWEsS0FBVixHQUFrQixDQUFoQztJQUNBLEtBQUtwQixJQUFMLENBQVVPLElBQVYsQ0FBZWEsS0FBZixHQUF1QnZCLENBQXZCO0lBQ0EsSUFBSXdCLENBQUMsR0FBRyxLQUFLZCxJQUFMLENBQVVhLEtBQVYsR0FBa0IsQ0FBMUI7SUFDQSxLQUFLbkIsT0FBTCxHQUFlSixDQUFDLEdBQUd3QixDQUFuQjtJQUNBLEtBQUtwQixPQUFMLEdBQWVxQixJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLdEIsT0FBZixDQUFmOztJQUNBLElBQUksS0FBS0EsT0FBTCxHQUFlLENBQW5CLEVBQXNCO01BQ2xCLEtBQUtBLE9BQUwsR0FBZSxDQUFmO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsS0FBS0EsT0FBTCxHQUFlLEtBQUtBLE9BQXBCO0lBQ0g7RUFDSixDQVhEOztFQVlBSixDQUFDLENBQUNRLFNBQUYsQ0FBWW1CLFNBQVosR0FBd0IsWUFBWTtJQUNoQyxLQUFLakIsSUFBTCxDQUFVa0IsU0FBVixDQUFvQixJQUFwQjtFQUNILENBRkQ7O0VBR0FDLFVBQVUsQ0FBQyxDQUFDakMsQ0FBQyxDQUFDSixFQUFFLENBQUNzQyxJQUFKLENBQUYsQ0FBRCxFQUFlOUIsQ0FBQyxDQUFDUSxTQUFqQixFQUE0QixNQUE1QixFQUFvQyxLQUFLLENBQXpDLENBQVY7O0VBQ0EsT0FBT3FCLFVBQVUsQ0FBQyxDQUFDbkMsQ0FBRCxDQUFELEVBQU1NLENBQU4sQ0FBakI7QUFDSCxDQTdDTyxDQTZDTFIsRUFBRSxDQUFDdUMsU0E3Q0UsQ0FBUjs7QUE4Q0FDLE9BQU8sV0FBUCxHQUFrQmxDLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcjtcbnZhciBhID0gY2MuX2RlY29yYXRvcjtcbnZhciBzID0gYS5jY2NsYXNzO1xudmFyIGMgPSBhLnByb3BlcnR5O1xudmFyIGwgPSAoZnVuY3Rpb24gKHQpIHtcbiAgICBmdW5jdGlvbiBlKCkge1xuICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgZS5tYXNrID0gbnVsbDtcbiAgICAgICAgZS5zdGFyTnVtID0gMDtcbiAgICAgICAgZS5jYW5NYXJrID0gITA7XG4gICAgICAgIGUuaXNUb3VjaCA9ICExO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9ICEwO1xuICAgICAgICBpZiAodGhpcy5jYW5NYXJrKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrU3Rhcih0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodC5nZXRMb2NhdGlvbigpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuTWFyaykge1xuICAgICAgICAgICAgdGhpcy5jaGVja1N0YXIodGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHQuZ2V0TG9jYXRpb24oKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlLnByb3RvdHlwZS5zZXRDYW5NYXJrID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5jYW5NYXJrID0gdDtcbiAgICB9O1xuICAgIGUucHJvdG90eXBlLmNoZWNrU3RhciA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdC54ICsgdGhpcy5ub2RlLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5tYXNrLm5vZGUud2lkdGggPSBlO1xuICAgICAgICB2YXIgbiA9IHRoaXMubm9kZS53aWR0aCAvIDU7XG4gICAgICAgIHRoaXMuc3Rhck51bSA9IGUgLyBuO1xuICAgICAgICB0aGlzLnN0YXJOdW0gPSBNYXRoLmNlaWwodGhpcy5zdGFyTnVtKTtcbiAgICAgICAgaWYgKHRoaXMuc3Rhck51bSA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3Rhck51bSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJOdW0gPSB0aGlzLnN0YXJOdW07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGUucHJvdG90eXBlLm9uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnRhcmdldE9mZih0aGlzKTtcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuTWFzayldLCBlLnByb3RvdHlwZSwgXCJtYXNrXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIF9fZGVjb3JhdGUoW3NdLCBlKTtcbn0pKGNjLkNvbXBvbmVudCk7XG5leHBvcnRzLmRlZmF1bHQgPSBsO1xuIl19