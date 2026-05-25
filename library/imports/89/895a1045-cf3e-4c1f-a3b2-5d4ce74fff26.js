"use strict";
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