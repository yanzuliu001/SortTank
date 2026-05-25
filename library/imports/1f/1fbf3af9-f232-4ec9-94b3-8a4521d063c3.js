"use strict";
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