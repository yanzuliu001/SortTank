exports.XMADMediator = void 0;
var $xMADUtils = require("./XMADUtils");
var o = (function () {
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
})();
exports.XMADMediator = new o();
