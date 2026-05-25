
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Hide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad60amMOi5HOr1zdtf8EqBs', 'Hide');
// scripts/Hide.js

"use strict";

var r = function () {
  function t() {}

  t.prototype.hide = function (t) {
    if (window.tt) {
      window.wxapi.onHide(t);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0hpZGUuanMiXSwibmFtZXMiOlsiciIsInQiLCJwcm90b3R5cGUiLCJoaWRlIiwid2luZG93IiwidHQiLCJ3eGFwaSIsIm9uSGlkZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxJQUFaLEdBQW1CLFVBQVVGLENBQVYsRUFBYTtJQUM1QixJQUFJRyxNQUFNLENBQUNDLEVBQVgsRUFBZTtNQUNYRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsTUFBYixDQUFvQk4sQ0FBcEI7SUFDSDtFQUNKLENBSkQ7O0VBS0EsT0FBT0EsQ0FBUDtBQUNILENBUk8sRUFBUjs7QUFTQU8sT0FBTyxXQUFQLEdBQWtCLElBQUlSLENBQUosRUFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICB0LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgd2luZG93Lnd4YXBpLm9uSGlkZSh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IHIoKTtcbiJdfQ==