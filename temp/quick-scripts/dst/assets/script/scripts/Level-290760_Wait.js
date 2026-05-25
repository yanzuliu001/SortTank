
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/Level-290760_Wait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce842y6GPdLbJwf0jes8p+u', 'Level-290760_Wait');
// script/scripts/Level-290760_Wait.js

"use strict";

var i;

var $level_290760_WaitItem = require("./Level-290760_WaitItem");

var s = cc._decorator;
var c = s.ccclass;
var l = (s.property, function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.mgr = null;
    return e;
  }

  __extends(e, t);

  e.prototype.init = function (t) {
    var e = this;
    this.mgr = t;
    this.node.children.forEach(function (t) {
      t.addComponent($level_290760_WaitItem["default"]).init(e);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9MZXZlbC0yOTA3NjBfV2FpdC5qcyJdLCJuYW1lcyI6WyJpIiwiJGxldmVsXzI5MDc2MF9XYWl0SXRlbSIsInJlcXVpcmUiLCJzIiwiY2MiLCJfZGVjb3JhdG9yIiwiYyIsImNjY2xhc3MiLCJsIiwicHJvcGVydHkiLCJ0IiwiZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibWdyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiaW5pdCIsIm5vZGUiLCJjaGlsZHJlbiIsImZvckVhY2giLCJhZGRDb21wb25lbnQiLCJfX2RlY29yYXRlIiwiQ29tcG9uZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFKOztBQUNBLElBQUlDLHNCQUFzQixHQUFHQyxPQUFPLENBQUMseUJBQUQsQ0FBcEM7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxFQUFFLENBQUNDLFVBQVg7QUFDQSxJQUFJQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksT0FBVjtBQUNBLElBQUlDLENBQUMsSUFDQUwsQ0FBQyxDQUFDTSxRQUFGLEVBQ0EsVUFBVUMsQ0FBVixFQUFhO0VBQ1YsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsSUFBSUEsQ0FBQyxHQUFJLFNBQVNELENBQVQsSUFBY0EsQ0FBQyxDQUFDRSxLQUFGLENBQVEsSUFBUixFQUFjQyxTQUFkLENBQWYsSUFBNEMsSUFBcEQ7SUFDQUYsQ0FBQyxDQUFDRyxHQUFGLEdBQVEsSUFBUjtJQUNBLE9BQU9ILENBQVA7RUFDSDs7RUFDREksU0FBUyxDQUFDSixDQUFELEVBQUlELENBQUosQ0FBVDs7RUFDQUMsQ0FBQyxDQUFDSyxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVVAsQ0FBVixFQUFhO0lBQzVCLElBQUlDLENBQUMsR0FBRyxJQUFSO0lBQ0EsS0FBS0csR0FBTCxHQUFXSixDQUFYO0lBQ0EsS0FBS1EsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxPQUFuQixDQUEyQixVQUFVVixDQUFWLEVBQWE7TUFDcENBLENBQUMsQ0FBQ1csWUFBRixDQUFlcEIsc0JBQXNCLFdBQXJDLEVBQStDZ0IsSUFBL0MsQ0FBb0ROLENBQXBEO0lBQ0gsQ0FGRDtFQUdILENBTkQ7O0VBT0EsT0FBT1csVUFBVSxDQUFDLENBQUNoQixDQUFELENBQUQsRUFBTUssQ0FBTixDQUFqQjtBQUNILENBZkQsQ0FlR1AsRUFBRSxDQUFDbUIsU0FmTixDQUZDLENBQUw7QUFrQkFDLE9BQU8sV0FBUCxHQUFrQmhCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaTtcbnZhciAkbGV2ZWxfMjkwNzYwX1dhaXRJdGVtID0gcmVxdWlyZShcIi4vTGV2ZWwtMjkwNzYwX1dhaXRJdGVtXCIpO1xudmFyIHMgPSBjYy5fZGVjb3JhdG9yO1xudmFyIGMgPSBzLmNjY2xhc3M7XG52YXIgbCA9XG4gICAgKHMucHJvcGVydHksXG4gICAgKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcbiAgICAgICAgICAgIGUubWdyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIF9fZXh0ZW5kcyhlLCB0KTtcbiAgICAgICAgZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm1nciA9IHQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuYWRkQ29tcG9uZW50KCRsZXZlbF8yOTA3NjBfV2FpdEl0ZW0uZGVmYXVsdCkuaW5pdChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX19kZWNvcmF0ZShbY10sIGUpO1xuICAgIH0pKGNjLkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbDtcbiJdfQ==