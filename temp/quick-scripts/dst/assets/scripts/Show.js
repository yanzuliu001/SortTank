
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Show.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a0194i7n1O17j63X2C07Ov', 'Show');
// scripts/Show.js

"use strict";

var r = function () {
  function t() {}

  t.prototype.show = function (t) {
    if (window.tt) {
      window.wxapi.onShow(t);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Nob3cuanMiXSwibmFtZXMiOlsiciIsInQiLCJwcm90b3R5cGUiLCJzaG93Iiwid2luZG93IiwidHQiLCJ3eGFwaSIsIm9uU2hvdyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxJQUFaLEdBQW1CLFVBQVVGLENBQVYsRUFBYTtJQUM1QixJQUFJRyxNQUFNLENBQUNDLEVBQVgsRUFBZTtNQUNYRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsTUFBYixDQUFvQk4sQ0FBcEI7SUFDSDtFQUNKLENBSkQ7O0VBS0EsT0FBT0EsQ0FBUDtBQUNILENBUk8sRUFBUjs7QUFTQU8sT0FBTyxXQUFQLEdBQWtCLElBQUlSLENBQUosRUFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge31cbiAgICB0LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dCkge1xuICAgICAgICAgICAgd2luZG93Lnd4YXBpLm9uU2hvdyh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IHIoKTtcbiJdfQ==