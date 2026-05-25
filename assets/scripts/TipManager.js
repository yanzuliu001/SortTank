exports.Tip = void 0;
var $languageManager = require("./LanguageManager");
var a = (function () {
    function t() {}
    t.prototype.show = function (t, e) {
        if (void 0 === e) {
            e = 0.8;
        }
        return __awaiter(this, void 0, Promise, function () {
            var n;
            var r;
            return __generator(this, function (o) {
                switch (o.label) {
                    case 0:
                        return [4, this.getText()];
                    case 1:
                        if ((n = o.sent())) {
                            return (
                                (r = n.node.parent),
                                (n.string = $languageManager.default.formatStr(t)),
                                (r.active = !0),
                                r.stopAllActions(),
                                r.setPosition(cc.v2(0, -60)),
                                (r.opacity = 0),
                                cc
                                    .tween(r)
                                    .by(0.3, {
                                        position: cc.v3(0, 60, 0),
                                        opacity: 255
                                    })
                                    .delay(e)
                                    .by(0.3, {
                                        position: cc.v3(0, 60, 0),
                                        opacity: -255
                                    })
                                    .call(function () {
                                        r.destroy();
                                    })
                                    .start(),
                                [2]
                            );
                        } else {
                            return [2];
                        }
                }
            });
        });
    };
    t.prototype.getText = function () {
        return new Promise(function (t) {
            var e = cc.find("Canvas");
            cc.resources.load("prefab/common/Tip", function (n, r) {
                if (n) {
                    return t(null);
                }
                var o = cc.instantiate(r);
                o.active = !1;
                e.addChild(o);
                t(o.getChildByName("Label Text").getComponent(cc.Label));
            });
        });
    };
    return t;
})();
exports.Tip = new a();
