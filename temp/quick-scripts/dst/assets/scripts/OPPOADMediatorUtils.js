
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/OPPOADMediatorUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '895a1BFzz5MH6OyXUznT/8m', 'OPPOADMediatorUtils');
// scripts/OPPOADMediatorUtils.js

"use strict";

exports.OPPOADMediator = void 0;

var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");

var o = function () {
  function t() {}

  t.prototype.showRewardVideo = function (t) {
    $oPPOAndroidAdUtils.OPPOAndroidAd.showRewardVideo(t);
  };

  t.prototype.showLargeFeed = function () {
    $oPPOAndroidAdUtils.OPPOAndroidAd.showLargeFeed();
  };

  t.prototype.removeLargePicFeed = function () {
    $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
  };

  t.prototype.showInterstitialFeed = function () {
    $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed();
  };

  t.prototype.showInterstitialFeed_must = function () {
    $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_must();
  };

  t.prototype.showInterstitialFeed_result = function () {
    $oPPOAndroidAdUtils.OPPOAndroidAd.showInterstitialFeed_result();
  };

  return t;
}();

exports.OPPOADMediator = new o();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL09QUE9BRE1lZGlhdG9yVXRpbHMuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIk9QUE9BRE1lZGlhdG9yIiwiJG9QUE9BbmRyb2lkQWRVdGlscyIsInJlcXVpcmUiLCJvIiwidCIsInByb3RvdHlwZSIsInNob3dSZXdhcmRWaWRlbyIsIk9QUE9BbmRyb2lkQWQiLCJzaG93TGFyZ2VGZWVkIiwicmVtb3ZlTGFyZ2VQaWNGZWVkIiwic2hvd0ludGVyc3RpdGlhbEZlZWQiLCJzaG93SW50ZXJzdGl0aWFsRmVlZF9tdXN0Iiwic2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLGNBQVIsR0FBeUIsS0FBSyxDQUE5Qjs7QUFDQSxJQUFJQyxtQkFBbUIsR0FBR0MsT0FBTyxDQUFDLHNCQUFELENBQWpDOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYSxDQUFFOztFQUNmQSxDQUFDLENBQUNDLFNBQUYsQ0FBWUMsZUFBWixHQUE4QixVQUFVRixDQUFWLEVBQWE7SUFDdkNILG1CQUFtQixDQUFDTSxhQUFwQixDQUFrQ0QsZUFBbEMsQ0FBa0RGLENBQWxEO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDQyxTQUFGLENBQVlHLGFBQVosR0FBNEIsWUFBWTtJQUNwQ1AsbUJBQW1CLENBQUNNLGFBQXBCLENBQWtDQyxhQUFsQztFQUNILENBRkQ7O0VBR0FKLENBQUMsQ0FBQ0MsU0FBRixDQUFZSSxrQkFBWixHQUFpQyxZQUFZO0lBQ3pDUixtQkFBbUIsQ0FBQ00sYUFBcEIsQ0FBa0NFLGtCQUFsQztFQUNILENBRkQ7O0VBR0FMLENBQUMsQ0FBQ0MsU0FBRixDQUFZSyxvQkFBWixHQUFtQyxZQUFZO0lBQzNDVCxtQkFBbUIsQ0FBQ00sYUFBcEIsQ0FBa0NHLG9CQUFsQztFQUNILENBRkQ7O0VBR0FOLENBQUMsQ0FBQ0MsU0FBRixDQUFZTSx5QkFBWixHQUF3QyxZQUFZO0lBQ2hEVixtQkFBbUIsQ0FBQ00sYUFBcEIsQ0FBa0NJLHlCQUFsQztFQUNILENBRkQ7O0VBR0FQLENBQUMsQ0FBQ0MsU0FBRixDQUFZTywyQkFBWixHQUEwQyxZQUFZO0lBQ2xEWCxtQkFBbUIsQ0FBQ00sYUFBcEIsQ0FBa0NLLDJCQUFsQztFQUNILENBRkQ7O0VBR0EsT0FBT1IsQ0FBUDtBQUNILENBckJPLEVBQVI7O0FBc0JBTCxPQUFPLENBQUNDLGNBQVIsR0FBeUIsSUFBSUcsQ0FBSixFQUF6QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5PUFBPQURNZWRpYXRvciA9IHZvaWQgMDtcbnZhciAkb1BQT0FuZHJvaWRBZFV0aWxzID0gcmVxdWlyZShcIi4vT1BQT0FuZHJvaWRBZFV0aWxzXCIpO1xudmFyIG8gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHQucHJvdG90eXBlLnNob3dSZXdhcmRWaWRlbyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICRvUFBPQW5kcm9pZEFkVXRpbHMuT1BQT0FuZHJvaWRBZC5zaG93UmV3YXJkVmlkZW8odCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93TGFyZ2VGZWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkb1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0xhcmdlRmVlZCgpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucmVtb3ZlTGFyZ2VQaWNGZWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkb1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQucmVtb3ZlTGFyZ2VQaWNGZWVkKCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93SW50ZXJzdGl0aWFsRmVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJG9QUE9BbmRyb2lkQWRVdGlscy5PUFBPQW5kcm9pZEFkLnNob3dJbnRlcnN0aXRpYWxGZWVkKCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zaG93SW50ZXJzdGl0aWFsRmVlZF9tdXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkb1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0ludGVyc3RpdGlhbEZlZWRfbXVzdCgpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuc2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkb1BQT0FuZHJvaWRBZFV0aWxzLk9QUE9BbmRyb2lkQWQuc2hvd0ludGVyc3RpdGlhbEZlZWRfcmVzdWx0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gdDtcbn0pKCk7XG5leHBvcnRzLk9QUE9BRE1lZGlhdG9yID0gbmV3IG8oKTtcbiJdfQ==