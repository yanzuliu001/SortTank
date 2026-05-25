
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/OPPOMiniADMediatorUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'feb23I2kxNP44tXfUt3hKgQ', 'OPPOMiniADMediatorUtils');
// scripts/OPPOMiniADMediatorUtils.js

"use strict";

exports.OPPOMiniADMediator = void 0;

var $oPPOMiniADUtils = require("./OPPOMiniADUtils");

var o = function () {
  function t() {}

  t.prototype.showRewardVideo = function (t) {
    $oPPOMiniADUtils.OPPOMiniAD.showRewardVideo(t);
  };

  t.prototype.showLargeFeed = function () {
    $oPPOMiniADUtils.OPPOMiniAD.showLargeFeed();
  };

  t.prototype.removeLargePicFeed = function () {
    $oPPOMiniADUtils.OPPOMiniAD.removeLargePicFeed();
  };

  t.prototype.showInterstitialFeed = function () {
    $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed();
  };

  t.prototype.showInterstitialFeed_must = function () {
    $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_must();
  };

  t.prototype.showInterstitialFeed_result = function () {
    $oPPOMiniADUtils.OPPOMiniAD.showInterstitialFeed_result();
  };

  return t;
}();

exports.OPPOMiniADMediator = new o();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL09QUE9NaW5pQURNZWRpYXRvclV0aWxzLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJPUFBPTWluaUFETWVkaWF0b3IiLCIkb1BQT01pbmlBRFV0aWxzIiwicmVxdWlyZSIsIm8iLCJ0IiwicHJvdG90eXBlIiwic2hvd1Jld2FyZFZpZGVvIiwiT1BQT01pbmlBRCIsInNob3dMYXJnZUZlZWQiLCJyZW1vdmVMYXJnZVBpY0ZlZWQiLCJzaG93SW50ZXJzdGl0aWFsRmVlZCIsInNob3dJbnRlcnN0aXRpYWxGZWVkX211c3QiLCJzaG93SW50ZXJzdGl0aWFsRmVlZF9yZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0Msa0JBQVIsR0FBNkIsS0FBSyxDQUFsQzs7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBR0MsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsZUFBWixHQUE4QixVQUFVRixDQUFWLEVBQWE7SUFDdkNILGdCQUFnQixDQUFDTSxVQUFqQixDQUE0QkQsZUFBNUIsQ0FBNENGLENBQTVDO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDQyxTQUFGLENBQVlHLGFBQVosR0FBNEIsWUFBWTtJQUNwQ1AsZ0JBQWdCLENBQUNNLFVBQWpCLENBQTRCQyxhQUE1QjtFQUNILENBRkQ7O0VBR0FKLENBQUMsQ0FBQ0MsU0FBRixDQUFZSSxrQkFBWixHQUFpQyxZQUFZO0lBQ3pDUixnQkFBZ0IsQ0FBQ00sVUFBakIsQ0FBNEJFLGtCQUE1QjtFQUNILENBRkQ7O0VBR0FMLENBQUMsQ0FBQ0MsU0FBRixDQUFZSyxvQkFBWixHQUFtQyxZQUFZO0lBQzNDVCxnQkFBZ0IsQ0FBQ00sVUFBakIsQ0FBNEJHLG9CQUE1QjtFQUNILENBRkQ7O0VBR0FOLENBQUMsQ0FBQ0MsU0FBRixDQUFZTSx5QkFBWixHQUF3QyxZQUFZO0lBQ2hEVixnQkFBZ0IsQ0FBQ00sVUFBakIsQ0FBNEJJLHlCQUE1QjtFQUNILENBRkQ7O0VBR0FQLENBQUMsQ0FBQ0MsU0FBRixDQUFZTywyQkFBWixHQUEwQyxZQUFZO0lBQ2xEWCxnQkFBZ0IsQ0FBQ00sVUFBakIsQ0FBNEJLLDJCQUE1QjtFQUNILENBRkQ7O0VBR0EsT0FBT1IsQ0FBUDtBQUNILENBckJPLEVBQVI7O0FBc0JBTCxPQUFPLENBQUNDLGtCQUFSLEdBQTZCLElBQUlHLENBQUosRUFBN0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuT1BQT01pbmlBRE1lZGlhdG9yID0gdm9pZCAwO1xudmFyICRvUFBPTWluaUFEVXRpbHMgPSByZXF1aXJlKFwiLi9PUFBPTWluaUFEVXRpbHNcIik7XG52YXIgbyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHt9XG4gICAgdC5wcm90b3R5cGUuc2hvd1Jld2FyZFZpZGVvID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgJG9QUE9NaW5pQURVdGlscy5PUFBPTWluaUFELnNob3dSZXdhcmRWaWRlbyh0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNob3dMYXJnZUZlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRvUFBPTWluaUFEVXRpbHMuT1BQT01pbmlBRC5zaG93TGFyZ2VGZWVkKCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5yZW1vdmVMYXJnZVBpY0ZlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRvUFBPTWluaUFEVXRpbHMuT1BQT01pbmlBRC5yZW1vdmVMYXJnZVBpY0ZlZWQoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNob3dJbnRlcnN0aXRpYWxGZWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkb1BQT01pbmlBRFV0aWxzLk9QUE9NaW5pQUQuc2hvd0ludGVyc3RpdGlhbEZlZWQoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNob3dJbnRlcnN0aXRpYWxGZWVkX211c3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRvUFBPTWluaUFEVXRpbHMuT1BQT01pbmlBRC5zaG93SW50ZXJzdGl0aWFsRmVlZF9tdXN0KCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93SW50ZXJzdGl0aWFsRmVlZF9yZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRvUFBPTWluaUFEVXRpbHMuT1BQT01pbmlBRC5zaG93SW50ZXJzdGl0aWFsRmVlZF9yZXN1bHQoKTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuT1BQT01pbmlBRE1lZGlhdG9yID0gbmV3IG8oKTtcbiJdfQ==