
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/levelReviveHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd22efj3Li1GHqJpE1WEVROa', 'levelReviveHelper');
// script/scripts/levelReviveHelper.js

"use strict";

var i = function () {
  function t() {}

  t.levelFailEvent = function (t, e) {
    cc.game.emit("levelFailEvent", t, e);
  };

  return t;
}();

exports["default"] = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9sZXZlbFJldml2ZUhlbHBlci5qcyJdLCJuYW1lcyI6WyJpIiwidCIsImxldmVsRmFpbEV2ZW50IiwiZSIsImNjIiwiZ2FtZSIsImVtaXQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLGNBQUYsR0FBbUIsVUFBVUQsQ0FBVixFQUFhRSxDQUFiLEVBQWdCO0lBQy9CQyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsSUFBUixDQUFhLGdCQUFiLEVBQStCTCxDQUEvQixFQUFrQ0UsQ0FBbEM7RUFDSCxDQUZEOztFQUdBLE9BQU9GLENBQVA7QUFDSCxDQU5PLEVBQVI7O0FBT0FNLE9BQU8sV0FBUCxHQUFrQlAsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICB0LmxldmVsRmFpbEV2ZW50ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgY2MuZ2FtZS5lbWl0KFwibGV2ZWxGYWlsRXZlbnRcIiwgdCwgZSk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBpO1xuIl19