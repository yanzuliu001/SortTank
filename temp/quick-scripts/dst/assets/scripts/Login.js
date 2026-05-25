
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab35dAQdupCxpxGtt20wS0X', 'Login');
// scripts/Login.js

"use strict";

var r = function () {
  function t() {}

  t.prototype.login = function (t) {
    if (window.tt) {
      window.wxapi.login(t);
    }
  };

  return t;
}();

exports["default"] = new r();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvZ2luLmpzIl0sIm5hbWVzIjpbInIiLCJ0IiwicHJvdG90eXBlIiwibG9naW4iLCJ3aW5kb3ciLCJ0dCIsInd4YXBpIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxTQUFGLENBQVlDLEtBQVosR0FBb0IsVUFBVUYsQ0FBVixFQUFhO0lBQzdCLElBQUlHLE1BQU0sQ0FBQ0MsRUFBWCxFQUFlO01BQ1hELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhSCxLQUFiLENBQW1CRixDQUFuQjtJQUNIO0VBQ0osQ0FKRDs7RUFLQSxPQUFPQSxDQUFQO0FBQ0gsQ0FSTyxFQUFSOztBQVNBTSxPQUFPLFdBQVAsR0FBa0IsSUFBSVAsQ0FBSixFQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHQucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgd2luZG93Lnd4YXBpLmxvZ2luKHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgcigpO1xuIl19