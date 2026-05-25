
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/VIVOADUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fbf3r58jJOyZSzikUh0GPD', 'VIVOADUtils');
// scripts/VIVOADUtils.js

"use strict";

exports.VIVOAD = void 0;

var $bmsManager = require("./BmsManager");

var $platformManager = require("./PlatformManager");

var i = function () {
  function t() {}

  t.prototype.showCustomAd_1 = function (t) {
    var e = $bmsManager.BMS.getKey("openads");
    console.log("openads", e);

    if (e) {
      $platformManager.Platform.showCustomAd_1($platformManager.Platform.getConfig().customAd_topImg_bottomText, t);
    }
  };

  t.prototype.showCustomAd_2 = function () {
    var t = $bmsManager.BMS.getKey("openads");
    console.log("openads", t);

    if (t) {
      $platformManager.Platform.showCustomAd_2($platformManager.Platform.getConfig().customAd_leftImg_rightText);
    }
  };

  t.prototype.showInsert = function () {
    var t = $bmsManager.BMS.getKey("openvideo");
    console.log("openvideo", t);

    if (t) {
      $platformManager.Platform.showInsert();
    }
  };

  return t;
}();

exports.VIVOAD = new i();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1ZJVk9BRFV0aWxzLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJWSVZPQUQiLCIkYm1zTWFuYWdlciIsInJlcXVpcmUiLCIkcGxhdGZvcm1NYW5hZ2VyIiwiaSIsInQiLCJwcm90b3R5cGUiLCJzaG93Q3VzdG9tQWRfMSIsImUiLCJCTVMiLCJnZXRLZXkiLCJjb25zb2xlIiwibG9nIiwiUGxhdGZvcm0iLCJnZXRDb25maWciLCJjdXN0b21BZF90b3BJbWdfYm90dG9tVGV4dCIsInNob3dDdXN0b21BZF8yIiwiY3VzdG9tQWRfbGVmdEltZ19yaWdodFRleHQiLCJzaG93SW5zZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLE1BQVIsR0FBaUIsS0FBSyxDQUF0Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUNBLElBQUlDLGdCQUFnQixHQUFHRCxPQUFPLENBQUMsbUJBQUQsQ0FBOUI7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxjQUFaLEdBQTZCLFVBQVVGLENBQVYsRUFBYTtJQUN0QyxJQUFJRyxDQUFDLEdBQUdQLFdBQVcsQ0FBQ1EsR0FBWixDQUFnQkMsTUFBaEIsQ0FBdUIsU0FBdkIsQ0FBUjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixDQUF2Qjs7SUFDQSxJQUFJQSxDQUFKLEVBQU87TUFDSEwsZ0JBQWdCLENBQUNVLFFBQWpCLENBQTBCTixjQUExQixDQUNJSixnQkFBZ0IsQ0FBQ1UsUUFBakIsQ0FBMEJDLFNBQTFCLEdBQXNDQywwQkFEMUMsRUFFSVYsQ0FGSjtJQUlIO0VBQ0osQ0FURDs7RUFVQUEsQ0FBQyxDQUFDQyxTQUFGLENBQVlVLGNBQVosR0FBNkIsWUFBWTtJQUNyQyxJQUFJWCxDQUFDLEdBQUdKLFdBQVcsQ0FBQ1EsR0FBWixDQUFnQkMsTUFBaEIsQ0FBdUIsU0FBdkIsQ0FBUjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCUCxDQUF2Qjs7SUFDQSxJQUFJQSxDQUFKLEVBQU87TUFDSEYsZ0JBQWdCLENBQUNVLFFBQWpCLENBQTBCRyxjQUExQixDQUF5Q2IsZ0JBQWdCLENBQUNVLFFBQWpCLENBQTBCQyxTQUExQixHQUFzQ0csMEJBQS9FO0lBQ0g7RUFDSixDQU5EOztFQU9BWixDQUFDLENBQUNDLFNBQUYsQ0FBWVksVUFBWixHQUF5QixZQUFZO0lBQ2pDLElBQUliLENBQUMsR0FBR0osV0FBVyxDQUFDUSxHQUFaLENBQWdCQyxNQUFoQixDQUF1QixXQUF2QixDQUFSO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJQLENBQXpCOztJQUNBLElBQUlBLENBQUosRUFBTztNQUNIRixnQkFBZ0IsQ0FBQ1UsUUFBakIsQ0FBMEJLLFVBQTFCO0lBQ0g7RUFDSixDQU5EOztFQU9BLE9BQU9iLENBQVA7QUFDSCxDQTNCTyxFQUFSOztBQTRCQU4sT0FBTyxDQUFDQyxNQUFSLEdBQWlCLElBQUlJLENBQUosRUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuVklWT0FEID0gdm9pZCAwO1xudmFyICRibXNNYW5hZ2VyID0gcmVxdWlyZShcIi4vQm1zTWFuYWdlclwiKTtcbnZhciAkcGxhdGZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vUGxhdGZvcm1NYW5hZ2VyXCIpO1xudmFyIGkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHQucHJvdG90eXBlLnNob3dDdXN0b21BZF8xID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSAkYm1zTWFuYWdlci5CTVMuZ2V0S2V5KFwib3BlbmFkc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuYWRzXCIsIGUpO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93Q3VzdG9tQWRfMShcbiAgICAgICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLmdldENvbmZpZygpLmN1c3RvbUFkX3RvcEltZ19ib3R0b21UZXh0LFxuICAgICAgICAgICAgICAgIHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNob3dDdXN0b21BZF8yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJvcGVuYWRzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5hZHNcIiwgdCk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAkcGxhdGZvcm1NYW5hZ2VyLlBsYXRmb3JtLnNob3dDdXN0b21BZF8yKCRwbGF0Zm9ybU1hbmFnZXIuUGxhdGZvcm0uZ2V0Q29uZmlnKCkuY3VzdG9tQWRfbGVmdEltZ19yaWdodFRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93SW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9ICRibXNNYW5hZ2VyLkJNUy5nZXRLZXkoXCJvcGVudmlkZW9cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnZpZGVvXCIsIHQpO1xuICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgJHBsYXRmb3JtTWFuYWdlci5QbGF0Zm9ybS5zaG93SW5zZXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuVklWT0FEID0gbmV3IGkoKTtcbiJdfQ==