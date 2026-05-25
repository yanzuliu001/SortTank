
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Turntable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e944ei19ehFxo7LklRZkxQg', 'Turntable');
// scripts/Turntable.js

"use strict";

var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;

var l = function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.diskNode = null;
    e.startAngle = 33;
    e.angleInterval = 50;
    e.itemAmount = 7;
    e._isRunning = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.startRun = function (t, e) {
    if (!this._isRunning) {
      var n = [];

      for (var r = 0; r < this.itemAmount; r++) {
        var o = this.startAngle + this.angleInterval * r;
        n.push(o);
      }

      for (var i = -this.diskNode.angle; i < 0;) {
        i += 360;
      }

      i -= 360 * Math.floor(i / 360);
      var a = 1800 + n[t - 1] - i;
      var s = 4 + 2 * Math.random();
      var c = cc.rotateBy(s, a).easing(cc.easeCubicActionOut());
      var l = cc.callFunc(function () {
        this._isRunning = !1;
        console.log("转动结束");

        if (e) {
          e();
        }
      }.bind(this));
      var u = cc.sequence(c, l);
      this.diskNode.runAction(u);
      this._isRunning = !0;
    }
  };

  __decorate([c(cc.Node)], e.prototype, "diskNode", void 0);

  __decorate([c], e.prototype, "startAngle", void 0);

  __decorate([c], e.prototype, "angleInterval", void 0);

  __decorate([c], e.prototype, "itemAmount", void 0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1R1cm50YWJsZS5qcyJdLCJuYW1lcyI6WyJyIiwiYSIsImNjIiwiX2RlY29yYXRvciIsInMiLCJjY2NsYXNzIiwiYyIsInByb3BlcnR5IiwibCIsInQiLCJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkaXNrTm9kZSIsInN0YXJ0QW5nbGUiLCJhbmdsZUludGVydmFsIiwiaXRlbUFtb3VudCIsIl9pc1J1bm5pbmciLCJfX2V4dGVuZHMiLCJwcm90b3R5cGUiLCJzdGFydFJ1biIsIm4iLCJvIiwicHVzaCIsImkiLCJhbmdsZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvdGF0ZUJ5IiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwiY2FsbEZ1bmMiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsInUiLCJzZXF1ZW5jZSIsInJ1bkFjdGlvbiIsIl9fZGVjb3JhdGUiLCJOb2RlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKO0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsR0FBR0wsQ0FBQyxDQUFDTSxRQUFWOztBQUNBLElBQUlDLENBQUMsR0FBSSxVQUFVQyxDQUFWLEVBQWE7RUFDbEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxRQUFGLEdBQWEsSUFBYjtJQUNBSCxDQUFDLENBQUNJLFVBQUYsR0FBZSxFQUFmO0lBQ0FKLENBQUMsQ0FBQ0ssYUFBRixHQUFrQixFQUFsQjtJQUNBTCxDQUFDLENBQUNNLFVBQUYsR0FBZSxDQUFmO0lBQ0FOLENBQUMsQ0FBQ08sVUFBRixHQUFlLENBQUMsQ0FBaEI7SUFDQSxPQUFPUCxDQUFQO0VBQ0g7O0VBQ0RRLFNBQVMsQ0FBQ1IsQ0FBRCxFQUFJRCxDQUFKLENBQVQ7O0VBQ0FDLENBQUMsQ0FBQ1MsU0FBRixDQUFZQyxRQUFaLEdBQXVCLFVBQVVYLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtJQUNuQyxJQUFJLENBQUMsS0FBS08sVUFBVixFQUFzQjtNQUNsQixJQUFJSSxDQUFDLEdBQUcsRUFBUjs7TUFDQSxLQUFLLElBQUlyQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtnQixVQUF6QixFQUFxQ2hCLENBQUMsRUFBdEMsRUFBMEM7UUFDdEMsSUFBSXNCLENBQUMsR0FBRyxLQUFLUixVQUFMLEdBQWtCLEtBQUtDLGFBQUwsR0FBcUJmLENBQS9DO1FBQ0FxQixDQUFDLENBQUNFLElBQUYsQ0FBT0QsQ0FBUDtNQUNIOztNQUNELEtBQUssSUFBSUUsQ0FBQyxHQUFHLENBQUMsS0FBS1gsUUFBTCxDQUFjWSxLQUE1QixFQUFtQ0QsQ0FBQyxHQUFHLENBQXZDLEdBQTRDO1FBQ3hDQSxDQUFDLElBQUksR0FBTDtNQUNIOztNQUNEQSxDQUFDLElBQUksTUFBTUUsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsR0FBRyxHQUFmLENBQVg7TUFDQSxJQUFJdkIsQ0FBQyxHQUFHLE9BQU9vQixDQUFDLENBQUNaLENBQUMsR0FBRyxDQUFMLENBQVIsR0FBa0JlLENBQTFCO01BQ0EsSUFBSXBCLENBQUMsR0FBRyxJQUFJLElBQUlzQixJQUFJLENBQUNFLE1BQUwsRUFBaEI7TUFDQSxJQUFJdEIsQ0FBQyxHQUFHSixFQUFFLENBQUMyQixRQUFILENBQVl6QixDQUFaLEVBQWVILENBQWYsRUFBa0I2QixNQUFsQixDQUF5QjVCLEVBQUUsQ0FBQzZCLGtCQUFILEVBQXpCLENBQVI7TUFDQSxJQUFJdkIsQ0FBQyxHQUFHTixFQUFFLENBQUM4QixRQUFILENBQ0osWUFBWTtRQUNSLEtBQUtmLFVBQUwsR0FBa0IsQ0FBQyxDQUFuQjtRQUNBZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7UUFDQSxJQUFJeEIsQ0FBSixFQUFPO1VBQ0hBLENBQUM7UUFDSjtNQUNKLENBTkQsQ0FNRXlCLElBTkYsQ0FNTyxJQU5QLENBREksQ0FBUjtNQVNBLElBQUlDLENBQUMsR0FBR2xDLEVBQUUsQ0FBQ21DLFFBQUgsQ0FBWS9CLENBQVosRUFBZUUsQ0FBZixDQUFSO01BQ0EsS0FBS0ssUUFBTCxDQUFjeUIsU0FBZCxDQUF3QkYsQ0FBeEI7TUFDQSxLQUFLbkIsVUFBTCxHQUFrQixDQUFDLENBQW5CO0lBQ0g7RUFDSixDQTNCRDs7RUE0QkFzQixVQUFVLENBQUMsQ0FBQ2pDLENBQUMsQ0FBQ0osRUFBRSxDQUFDc0MsSUFBSixDQUFGLENBQUQsRUFBZTlCLENBQUMsQ0FBQ1MsU0FBakIsRUFBNEIsVUFBNUIsRUFBd0MsS0FBSyxDQUE3QyxDQUFWOztFQUNBb0IsVUFBVSxDQUFDLENBQUNqQyxDQUFELENBQUQsRUFBTUksQ0FBQyxDQUFDUyxTQUFSLEVBQW1CLFlBQW5CLEVBQWlDLEtBQUssQ0FBdEMsQ0FBVjs7RUFDQW9CLFVBQVUsQ0FBQyxDQUFDakMsQ0FBRCxDQUFELEVBQU1JLENBQUMsQ0FBQ1MsU0FBUixFQUFtQixlQUFuQixFQUFvQyxLQUFLLENBQXpDLENBQVY7O0VBQ0FvQixVQUFVLENBQUMsQ0FBQ2pDLENBQUQsQ0FBRCxFQUFNSSxDQUFDLENBQUNTLFNBQVIsRUFBbUIsWUFBbkIsRUFBaUMsS0FBSyxDQUF0QyxDQUFWOztFQUNBLE9BQU9vQixVQUFVLENBQUMsQ0FBQ25DLENBQUQsQ0FBRCxFQUFNTSxDQUFOLENBQWpCO0FBQ0gsQ0E1Q08sQ0E0Q0xSLEVBQUUsQ0FBQ3VDLFNBNUNFLENBQVI7O0FBNkNBQyxPQUFPLFdBQVAsR0FBa0JsQyxDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHI7XG52YXIgYSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgcyA9IGEuY2NjbGFzcztcbnZhciBjID0gYS5wcm9wZXJ0eTtcbnZhciBsID0gKGZ1bmN0aW9uICh0KSB7XG4gICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgdmFyIGUgPSAobnVsbCAhPT0gdCAmJiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHx8IHRoaXM7XG4gICAgICAgIGUuZGlza05vZGUgPSBudWxsO1xuICAgICAgICBlLnN0YXJ0QW5nbGUgPSAzMztcbiAgICAgICAgZS5hbmdsZUludGVydmFsID0gNTA7XG4gICAgICAgIGUuaXRlbUFtb3VudCA9IDc7XG4gICAgICAgIGUuX2lzUnVubmluZyA9ICExO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgX19leHRlbmRzKGUsIHQpO1xuICAgIGUucHJvdG90eXBlLnN0YXJ0UnVuID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHZhciBuID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHRoaXMuaXRlbUFtb3VudDsgcisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLnN0YXJ0QW5nbGUgKyB0aGlzLmFuZ2xlSW50ZXJ2YWwgKiByO1xuICAgICAgICAgICAgICAgIG4ucHVzaChvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAtdGhpcy5kaXNrTm9kZS5hbmdsZTsgaSA8IDA7ICkge1xuICAgICAgICAgICAgICAgIGkgKz0gMzYwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSAtPSAzNjAgKiBNYXRoLmZsb29yKGkgLyAzNjApO1xuICAgICAgICAgICAgdmFyIGEgPSAxODAwICsgblt0IC0gMV0gLSBpO1xuICAgICAgICAgICAgdmFyIHMgPSA0ICsgMiAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB2YXIgYyA9IGNjLnJvdGF0ZUJ5KHMsIGEpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG4gICAgICAgICAgICB2YXIgbCA9IGNjLmNhbGxGdW5jKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L2s5Yqo57uT5p2fXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIHUgPSBjYy5zZXF1ZW5jZShjLCBsKTtcbiAgICAgICAgICAgIHRoaXMuZGlza05vZGUucnVuQWN0aW9uKHUpO1xuICAgICAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gITA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW2MoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJkaXNrTm9kZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW2NdLCBlLnByb3RvdHlwZSwgXCJzdGFydEFuZ2xlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbY10sIGUucHJvdG90eXBlLCBcImFuZ2xlSW50ZXJ2YWxcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtjXSwgZS5wcm90b3R5cGUsIFwiaXRlbUFtb3VudFwiLCB2b2lkIDApO1xuICAgIHJldHVybiBfX2RlY29yYXRlKFtzXSwgZSk7XG59KShjYy5Db21wb25lbnQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbDtcbiJdfQ==