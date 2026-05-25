
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/XMADMediatorUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '825496NznVPh5WwTYJPjVRg', 'XMADMediatorUtils');
// scripts/XMADMediatorUtils.js

"use strict";

exports.XMADMediator = void 0;

var $xMADUtils = require("./XMADUtils");

var o = function () {
  function t() {}

  t.prototype.showRewardVideo = function (t) {
    $xMADUtils.XMAD.showRewardVideo(t);
  };

  t.prototype.showLargeFeed = function () {
    $xMADUtils.XMAD.showLargeFeed();
  };

  t.prototype.removeLargePicFeed = function () {
    $xMADUtils.XMAD.removeLargePicFeed();
  };

  t.prototype.showInterstitialFeed = function () {
    $xMADUtils.XMAD.showInterstitialFeed();
  };

  t.prototype.showInterstitialFeed_must = function () {
    $xMADUtils.XMAD.showInterstitialFeed_must();
  };

  t.prototype.showInterstitialFeed_result = function () {
    $xMADUtils.XMAD.showInterstitialFeed_result();
  };

  return t;
}();

exports.XMADMediator = new o();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1hNQURNZWRpYXRvclV0aWxzLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJYTUFETWVkaWF0b3IiLCIkeE1BRFV0aWxzIiwicmVxdWlyZSIsIm8iLCJ0IiwicHJvdG90eXBlIiwic2hvd1Jld2FyZFZpZGVvIiwiWE1BRCIsInNob3dMYXJnZUZlZWQiLCJyZW1vdmVMYXJnZVBpY0ZlZWQiLCJzaG93SW50ZXJzdGl0aWFsRmVlZCIsInNob3dJbnRlcnN0aXRpYWxGZWVkX211c3QiLCJzaG93SW50ZXJzdGl0aWFsRmVlZF9yZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsWUFBUixHQUF1QixLQUFLLENBQTVCOztBQUNBLElBQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhLENBQUU7O0VBQ2ZBLENBQUMsQ0FBQ0MsU0FBRixDQUFZQyxlQUFaLEdBQThCLFVBQVVGLENBQVYsRUFBYTtJQUN2Q0gsVUFBVSxDQUFDTSxJQUFYLENBQWdCRCxlQUFoQixDQUFnQ0YsQ0FBaEM7RUFDSCxDQUZEOztFQUdBQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUcsYUFBWixHQUE0QixZQUFZO0lBQ3BDUCxVQUFVLENBQUNNLElBQVgsQ0FBZ0JDLGFBQWhCO0VBQ0gsQ0FGRDs7RUFHQUosQ0FBQyxDQUFDQyxTQUFGLENBQVlJLGtCQUFaLEdBQWlDLFlBQVk7SUFDekNSLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQkUsa0JBQWhCO0VBQ0gsQ0FGRDs7RUFHQUwsQ0FBQyxDQUFDQyxTQUFGLENBQVlLLG9CQUFaLEdBQW1DLFlBQVk7SUFDM0NULFVBQVUsQ0FBQ00sSUFBWCxDQUFnQkcsb0JBQWhCO0VBQ0gsQ0FGRDs7RUFHQU4sQ0FBQyxDQUFDQyxTQUFGLENBQVlNLHlCQUFaLEdBQXdDLFlBQVk7SUFDaERWLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQkkseUJBQWhCO0VBQ0gsQ0FGRDs7RUFHQVAsQ0FBQyxDQUFDQyxTQUFGLENBQVlPLDJCQUFaLEdBQTBDLFlBQVk7SUFDbERYLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQkssMkJBQWhCO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPUixDQUFQO0FBQ0gsQ0FyQk8sRUFBUjs7QUFzQkFMLE9BQU8sQ0FBQ0MsWUFBUixHQUF1QixJQUFJRyxDQUFKLEVBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLlhNQURNZWRpYXRvciA9IHZvaWQgMDtcbnZhciAkeE1BRFV0aWxzID0gcmVxdWlyZShcIi4vWE1BRFV0aWxzXCIpO1xudmFyIG8gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHQucHJvdG90eXBlLnNob3dSZXdhcmRWaWRlbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICR4TUFEVXRpbHMuWE1BRC5zaG93UmV3YXJkVmlkZW8odCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93TGFyZ2VGZWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkeE1BRFV0aWxzLlhNQUQuc2hvd0xhcmdlRmVlZCgpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucmVtb3ZlTGFyZ2VQaWNGZWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkeE1BRFV0aWxzLlhNQUQucmVtb3ZlTGFyZ2VQaWNGZWVkKCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93SW50ZXJzdGl0aWFsRmVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHhNQURVdGlscy5YTUFELnNob3dJbnRlcnN0aXRpYWxGZWVkKCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93SW50ZXJzdGl0aWFsRmVlZF9tdXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkeE1BRFV0aWxzLlhNQUQuc2hvd0ludGVyc3RpdGlhbEZlZWRfbXVzdCgpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkeE1BRFV0aWxzLlhNQUQuc2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLlhNQURNZWRpYXRvciA9IG5ldyBvKCk7XG4iXX0=