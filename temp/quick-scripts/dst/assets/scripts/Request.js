
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Request.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6055cPYOiRJnZNWxmApD+U5', 'Request');
// scripts/Request.js

"use strict";

var r = function () {
  function t() {}

  t.get = function (t) {
    if (window.tt) {
      t.method = "GET";
      t.header = {
        "content-type": "application/x-www-form-urlencoded"
      };
      return window.wxapi.request(t);
    }
  };

  t.post = function (t) {
    if (window.tt) {
      t.method = "POST";
      t.header = {
        "content-type": "application/x-www-form-urlencoded"
      };
      return window.wxapi.request(t);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JlcXVlc3QuanMiXSwibmFtZXMiOlsiciIsInQiLCJnZXQiLCJ3aW5kb3ciLCJ0dCIsIm1ldGhvZCIsImhlYWRlciIsInd4YXBpIiwicmVxdWVzdCIsInBvc3QiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLEdBQUYsR0FBUSxVQUFVRCxDQUFWLEVBQWE7SUFDakIsSUFBSUUsTUFBTSxDQUFDQyxFQUFYLEVBQWU7TUFDWEgsQ0FBQyxDQUFDSSxNQUFGLEdBQVcsS0FBWDtNQUNBSixDQUFDLENBQUNLLE1BQUYsR0FBVztRQUNQLGdCQUFnQjtNQURULENBQVg7TUFHQSxPQUFPSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsT0FBYixDQUFxQlAsQ0FBckIsQ0FBUDtJQUNIO0VBQ0osQ0FSRDs7RUFTQUEsQ0FBQyxDQUFDUSxJQUFGLEdBQVMsVUFBVVIsQ0FBVixFQUFhO0lBQ2xCLElBQUlFLE1BQU0sQ0FBQ0MsRUFBWCxFQUFlO01BQ1hILENBQUMsQ0FBQ0ksTUFBRixHQUFXLE1BQVg7TUFDQUosQ0FBQyxDQUFDSyxNQUFGLEdBQVc7UUFDUCxnQkFBZ0I7TUFEVCxDQUFYO01BR0EsT0FBT0gsTUFBTSxDQUFDSSxLQUFQLENBQWFDLE9BQWIsQ0FBcUJQLENBQXJCLENBQVA7SUFDSDtFQUNKLENBUkQ7O0VBU0EsT0FBT0EsQ0FBUDtBQUNILENBckJPLEVBQVI7O0FBc0JBUyxPQUFPLFdBQVAsR0FBa0JWLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5nZXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAod2luZG93LnR0KSB7XG4gICAgICAgICAgICB0Lm1ldGhvZCA9IFwiR0VUXCI7XG4gICAgICAgICAgICB0LmhlYWRlciA9IHtcbiAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy53eGFwaS5yZXF1ZXN0KHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnBvc3QgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAod2luZG93LnR0KSB7XG4gICAgICAgICAgICB0Lm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgICAgICAgICAgdC5oZWFkZXIgPSB7XG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cud3hhcGkucmVxdWVzdCh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcjtcbiJdfQ==