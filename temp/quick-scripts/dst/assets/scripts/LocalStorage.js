
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LocalStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '378999TrJ9MRoImyJdkFZ4z', 'LocalStorage');
// scripts/LocalStorage.js

"use strict";

var $storageSync = require("./StorageSync");

var o = function () {
  function t() {}

  t.getItem = function (t) {
    if (void 0 === window.localStorage) {
      return $storageSync["default"].getItem(t);
    } else {
      return window.localStorage.getItem(t);
    }
  };

  t.setItem = function (t, e) {
    if (void 0 === window.localStorage) {
      return $storageSync["default"].setItem(t, e);
    } else {
      return window.localStorage.setItem(t, e);
    }
  };

  t.removeItem = function (t) {
    if (void 0 === window.localStorage) {
      return $storageSync["default"].removeItem(t);
    } else {
      return window.localStorage.removeItem(t);
    }
  };

  return t;
}();

exports["default"] = o;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvY2FsU3RvcmFnZS5qcyJdLCJuYW1lcyI6WyIkc3RvcmFnZVN5bmMiLCJyZXF1aXJlIiwibyIsInQiLCJnZXRJdGVtIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImUiLCJyZW1vdmVJdGVtIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTFCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLE9BQUYsR0FBWSxVQUFVRCxDQUFWLEVBQWE7SUFDckIsSUFBSSxLQUFLLENBQUwsS0FBV0UsTUFBTSxDQUFDQyxZQUF0QixFQUFvQztNQUNoQyxPQUFPTixZQUFZLFdBQVosQ0FBcUJJLE9BQXJCLENBQTZCRCxDQUE3QixDQUFQO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsT0FBT0UsTUFBTSxDQUFDQyxZQUFQLENBQW9CRixPQUFwQixDQUE0QkQsQ0FBNUIsQ0FBUDtJQUNIO0VBQ0osQ0FORDs7RUFPQUEsQ0FBQyxDQUFDSSxPQUFGLEdBQVksVUFBVUosQ0FBVixFQUFhSyxDQUFiLEVBQWdCO0lBQ3hCLElBQUksS0FBSyxDQUFMLEtBQVdILE1BQU0sQ0FBQ0MsWUFBdEIsRUFBb0M7TUFDaEMsT0FBT04sWUFBWSxXQUFaLENBQXFCTyxPQUFyQixDQUE2QkosQ0FBN0IsRUFBZ0NLLENBQWhDLENBQVA7SUFDSCxDQUZELE1BRU87TUFDSCxPQUFPSCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCSixDQUE1QixFQUErQkssQ0FBL0IsQ0FBUDtJQUNIO0VBQ0osQ0FORDs7RUFPQUwsQ0FBQyxDQUFDTSxVQUFGLEdBQWUsVUFBVU4sQ0FBVixFQUFhO0lBQ3hCLElBQUksS0FBSyxDQUFMLEtBQVdFLE1BQU0sQ0FBQ0MsWUFBdEIsRUFBb0M7TUFDaEMsT0FBT04sWUFBWSxXQUFaLENBQXFCUyxVQUFyQixDQUFnQ04sQ0FBaEMsQ0FBUDtJQUNILENBRkQsTUFFTztNQUNILE9BQU9FLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkcsVUFBcEIsQ0FBK0JOLENBQS9CLENBQVA7SUFDSDtFQUNKLENBTkQ7O0VBT0EsT0FBT0EsQ0FBUDtBQUNILENBeEJPLEVBQVI7O0FBeUJBTyxPQUFPLFdBQVAsR0FBa0JSLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJHN0b3JhZ2VTeW5jID0gcmVxdWlyZShcIi4vU3RvcmFnZVN5bmNcIik7XG52YXIgbyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5nZXRJdGVtID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuICRzdG9yYWdlU3luYy5kZWZhdWx0LmdldEl0ZW0odCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnNldEl0ZW0gPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gJHN0b3JhZ2VTeW5jLmRlZmF1bHQuc2V0SXRlbSh0LCBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odCwgZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiAkc3RvcmFnZVN5bmMuZGVmYXVsdC5yZW1vdmVJdGVtKHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbztcbiJdfQ==