"use strict";
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