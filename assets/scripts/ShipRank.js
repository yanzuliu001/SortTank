var r;
var $popupConst = require("./PopupConst");
var $userConst = require("./UserConst");
var $uIBase = require("./UIBase");
var $localStorageConst = require("./LocalStorageConst");
var $localStorageManager = require("./LocalStorageManager");
var $memoryStorageConst = require("./MemoryStorageConst");
var $memoryStorageManager = require("./MemoryStorageManager");
var $timeManager = require("./TimeManager");
var $languageManager = require("./LanguageManager");
var $platformManager = require("./PlatformManager");
var $popupManager = require("./PopupManager");
var $userManager = require("./UserManager");
var $shipRaceSysetem = require("./ShipRaceSysetem");
var $utils = require("./Utils");
var _ = cc._decorator;
var b = _.ccclass;
var S = _.property;
var k = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.rankSF = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        t.prototype.onLoad.call(this);
        this.initView();
    };
    e.prototype.openShip = function () {
        $memoryStorageManager.default.set($memoryStorageConst.default.openShipWay, "win");
        $popupManager.default.show($popupConst.PopupConst.ShipRace2, null, !1);
    };
    e.prototype.initView = function () {
        var t = this;
        var e = $localStorageManager.default.get($localStorageConst.default.allShipName) || [];
        var n = $localStorageManager.default.get($localStorageConst.default.allShipRank) || [];
        $platformManager.Platform.getConfig().rank.includes("haiwai");
        if (n.length) {
            $shipRaceSysetem.default.countAIRanking();
            n = $localStorageManager.default.get($localStorageConst.default.allShipRank) || [];
        } else {
            (n = $utils.Utils.getRandomItemsFromArray([2, 3, 4, 5], 4)).splice(2, 0, 1);
            $localStorageManager.default.set($localStorageConst.default.allShipRank, n);
        }
        for (var r = 0; r < this.dict.rank.children.length; r++) {
            this.dict.rank.children[r].getChildByName("name").getComponent(cc.Label).string = "" + e[r];
            this.dict.rank.children[r].getChildByName("ranking").getComponent(cc.Sprite).spriteFrame =
                this.rankSF[n[r] - 1];
        }
        var o = $userManager.User.get($userConst.UserData.useSkinIDList)[0] + 1;
        cc.resources.load("texture/skin/pifu" + o, function (e, n) {
            if (e) {
                return console.log(e);
            }
            t.dict.mySkin.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
        });
        this.dict.shipTime.getComponent(cc.Label).string = $shipRaceSysetem.default.getSurplusTimeStr();
    };
    e.prototype.getSurplusTimeStr = function () {
        var t = $timeManager.default.getCurrentTime();
        var e =
            864e5 * ($localStorageManager.default.get($localStorageConst.default.vipType) || 3) -
            (t - ($localStorageManager.default.get($localStorageConst.default.vipStartTime) || t));
        var n = e / 864e5;
        var r = (e / 36e5) % 24;
        console.log("VIP剩余时间:", e, Math.floor(n) + "天" + Math.floor(r) + "时");
        return $languageManager.default.formatStr("%d天%d时", Math.floor(n), Math.floor(r));
    };
    __decorate([S([cc.SpriteFrame])], e.prototype, "rankSF", void 0);
    return __decorate([b], e);
})($uIBase.default);
exports.default = k;
