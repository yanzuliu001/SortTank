
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ObserverManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f65cN83ZtA4Larl4qubgll', 'ObserverManager');
// scripts/ObserverManager.js

"use strict";

exports.Observer = void 0;

var r = function () {
  function t() {
    this.prefix = "event_";
  }

  t.prototype.on = function (t, e, n) {
    cc.game.on("" + this.prefix + t, e, n);
  };

  t.prototype.off = function (t, e, n) {
    cc.game.off("" + this.prefix + t, e, n);
  };

  t.prototype.emit = function (t, e, n, r, o, i) {
    cc.game.emit("" + this.prefix + t, e, n, r, o, i);
  };

  return t;
}();

exports.Observer = new r();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL09ic2VydmVyTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiT2JzZXJ2ZXIiLCJyIiwidCIsInByZWZpeCIsInByb3RvdHlwZSIsIm9uIiwiZSIsIm4iLCJjYyIsImdhbWUiLCJvZmYiLCJlbWl0IiwibyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsUUFBUixHQUFtQixLQUFLLENBQXhCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLE1BQUwsR0FBYyxRQUFkO0VBQ0g7O0VBQ0RELENBQUMsQ0FBQ0UsU0FBRixDQUFZQyxFQUFaLEdBQWlCLFVBQVVILENBQVYsRUFBYUksQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUI7SUFDaENDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRSixFQUFSLENBQVcsS0FBSyxLQUFLRixNQUFWLEdBQW1CRCxDQUE5QixFQUFpQ0ksQ0FBakMsRUFBb0NDLENBQXBDO0VBQ0gsQ0FGRDs7RUFHQUwsQ0FBQyxDQUFDRSxTQUFGLENBQVlNLEdBQVosR0FBa0IsVUFBVVIsQ0FBVixFQUFhSSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtJQUNqQ0MsRUFBRSxDQUFDQyxJQUFILENBQVFDLEdBQVIsQ0FBWSxLQUFLLEtBQUtQLE1BQVYsR0FBbUJELENBQS9CLEVBQWtDSSxDQUFsQyxFQUFxQ0MsQ0FBckM7RUFDSCxDQUZEOztFQUdBTCxDQUFDLENBQUNFLFNBQUYsQ0FBWU8sSUFBWixHQUFtQixVQUFVVCxDQUFWLEVBQWFJLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CTixDQUFuQixFQUFzQlcsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0lBQzNDTCxFQUFFLENBQUNDLElBQUgsQ0FBUUUsSUFBUixDQUFhLEtBQUssS0FBS1IsTUFBVixHQUFtQkQsQ0FBaEMsRUFBbUNJLENBQW5DLEVBQXNDQyxDQUF0QyxFQUF5Q04sQ0FBekMsRUFBNENXLENBQTVDLEVBQStDQyxDQUEvQztFQUNILENBRkQ7O0VBR0EsT0FBT1gsQ0FBUDtBQUNILENBZE8sRUFBUjs7QUFlQUgsT0FBTyxDQUFDQyxRQUFSLEdBQW1CLElBQUlDLENBQUosRUFBbkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuT2JzZXJ2ZXIgPSB2b2lkIDA7XG52YXIgciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBcImV2ZW50X1wiO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIGNjLmdhbWUub24oXCJcIiArIHRoaXMucHJlZml4ICsgdCwgZSwgbik7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAodCwgZSwgbikge1xuICAgICAgICBjYy5nYW1lLm9mZihcIlwiICsgdGhpcy5wcmVmaXggKyB0LCBlLCBuKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodCwgZSwgbiwgciwgbywgaSkge1xuICAgICAgICBjYy5nYW1lLmVtaXQoXCJcIiArIHRoaXMucHJlZml4ICsgdCwgZSwgbiwgciwgbywgaSk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLk9ic2VydmVyID0gbmV3IHIoKTtcbiJdfQ==