var r;
var $baseUI = require("./BaseUI");
var $configConst = require("./ConfigConst");
var $eventConst = require("./EventConst");
var $platformConst = require("./PlatformConst");
var $userConst = require("./UserConst");
var $configManager = require("./ConfigManager");
var $eventManager = require("./EventManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $resManager = require("./ResManager");
var $userManager = require("./UserManager");
var $oPPOAndroidAdUtils = require("./OPPOAndroidAdUtils");
var $oPPOMiniADUtils = require("./OPPOMiniADUtils");
var $xMADUtils = require("./XMADUtils");
var S = cc._decorator;
var k = S.ccclass;
var C =
    (S.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            t.prototype.onLoad.call(this);
            this.addBtnOn("defineBtn", this.clickDefine, this);
            this.initView();
            $eventManager.Event.emit($eventConst.default.TIP_BTN_ANIM, !1, "test");
        };
        e.prototype.onEnable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.XIAOMI_ANDROID)) {
                $xMADUtils.XMAD.showBannerFeed();
            } else {
                if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                    $oPPOAndroidAdUtils.OPPOAndroidAd.showLargeFeed();
                } else {
                    $platformManager.Platform.is($platformConst.EPlatform.OPPO) &&
                        $oPPOMiniADUtils.OPPOMiniAD.showLargeFeed();
                }
            }
        };
        e.prototype.onDisable = function () {
            if ($platformManager.Platform.is($platformConst.EPlatform.OPPO_ANDROID)) {
                $oPPOAndroidAdUtils.OPPOAndroidAd.removeLargePicFeed();
            }
            $platformManager.Platform.hideNativeAds();
        };
        e.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var t;
                var e;
                var n;
                var r;
                var o;
                var i;
                var a = this;
                return __generator(this, function (s) {
                    switch (s.label) {
                        case 0:
                            t = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL_ID);
                            e = "zqddn_zhb/prefab/tips/zqddn_zhb_tip" + t;
                            this.dict.text.active = !1;
                            this.dict.img.active = !1;
                            return [4, $configManager.Config.get($configConst.ConfigConst.TIP)];
                        case 1:
                            for (n = s.sent(), r = 0; r < n.length; r++) {
                                if (n[r].stageID == t) {
                                    if (2 == n[r].tipsType) {
                                        (this.dict.img.active = !0),
                                            $resManager.Res.load(e)
                                                .then(function (t) {
                                                    var e = cc.instantiate(t);
                                                    e.position = cc.v2();
                                                    a.dict.img.addChild(e);
                                                })
                                                .catch(function () {
                                                    console.log("没有提示");
                                                    cc.loader.loadRes(
                                                        "zqddn_zhb/prefab/tips/zqddn_zhb_tip-picture",
                                                        function (e, n) {
                                                            if (e) {
                                                                return cc.error(e);
                                                            }
                                                            if (n) {
                                                                var r = cc.instantiate(n);
                                                                if (-1 != r.name.indexOf("zqddn_zhb_tip-picture")) {
                                                                    r.assetName = t;
                                                                }
                                                                a.dict.img.addChild(r);
                                                                r.setPosition(0, 0);
                                                                r.scale = 1;
                                                            }
                                                        }
                                                    );
                                                });
                                    } else {
                                        (this.dict.text.active = !0),
                                            (this.dict.text.getComponent(cc.Label).string = n[r].text);
                                    }
                                }
                            }
                            o = $userManager.User.getTempData($userConst.TempData.CURRENT_LEVEL);
                            i = $userManager.User.getTempData($userConst.TempData.CURRENT_MODE);
                            cc.game.emit("gamelog", "Level_Tips_" + i + "_" + o);
                            return [2];
                    }
                });
            });
        };
        e.prototype.clickDefine = function () {
            $popupManager.default.hide();
        };
        return __decorate([k], e);
    })($baseUI.default));
exports.default = C;
