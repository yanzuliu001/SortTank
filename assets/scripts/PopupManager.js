var $eventConst = require("./EventConst");
var $eventManager = require("./EventManager");
var $assetManager = require("./AssetManager");
var c = new ((function () {
    function t() {
        this.popupRoot = null;
        this.paths = [];
        this.nodes = [];
    }
    t.prototype.init = function () {
        this.popupRoot = cc.find("Canvas").getChildByName("popupRoot");
    };
    t.prototype.show = function (t, e) {
        if (void 0 === e) {
            e = !0;
        }
        return __awaiter(this, void 0, void 0, function () {
            var n;
            var r;
            var c;
            var l;
            var u;
            var f;
            return __generator(this, function (o) {
                switch (o.label) {
                    case 0:
                        if (this.popupRoot) {
                            //
                        } else {
                            this.init();
                        }
                        return this.paths.some(function (e) {
                            return e == t;
                        })
                            ? [2]
                            : (this.paths.push(t),
                              [4, $assetManager.default.getRes("gameBundle", "prefab/popup/" + t, cc.Prefab)]);
                    case 1:
                        n = o.sent();
                        r = cc.instantiate(n);
                        this.popupRoot.addChild(r);
                        this.nodes.push(r);
                        $eventManager.Event.emit($eventConst.default.StopTimer);
                        game.dragonMoving = !1;
                        return e
                            ? ((c = r.getChildByName("content")),
                              (l = r.getChildByName("mask")),
                              (u = c.scale),
                              (f = l.opacity),
                              (l.opacity = 0),
                              cc
                                  .tween(l)
                                  .to(0.3, {
                                      opacity: f
                                  })
                                  .start(),
                              (c.scale = 0),
                              cc
                                  .tween(c)
                                  .to(
                                      0.4,
                                      {
                                          scale: u
                                      },
                                      {
                                          easing: "backOut"
                                      }
                                  )
                                  .start(),
                              [2])
                            : [2];
                }
            });
        });
    };
    t.prototype.hide = function (t) {
        if (void 0 === t) {
            t = !0;
        }
        if (this.nodes.length) {
            var e = this.nodes.pop();
            this.paths.pop();
            console.log("this.nodes", this.nodes.length);
            if (this.nodes.length) {
                //
            } else {
                $eventManager.Event.emit($eventConst.default.restoreTime);
                game.dragonMoving = !0;
            }
            if (!t) {
                return e.destroy();
            }
            var n = e.getChildByName("content");
            var r = e.getChildByName("mask");
            r.stopAllActions();
            cc.tween(r)
                .to(0.3, {
                    opacity: 0
                })
                .start();
            n.stopAllActions();
            cc.tween(n)
                .to(
                    0.3,
                    {
                        scale: 0
                    },
                    {
                        easing: "backIn"
                    }
                )
                .call(function () {
                    e.destroy();
                })
                .start();
        }
    };
    t.prototype.hideAll = function () {
        if (this.nodes.length) {
            this.nodes.forEach(function (t) {
                t.destroy();
            });
            this.nodes = [];
            this.paths = [];
            console.log("this.nodes1111", this.nodes.length);
            if (this.nodes.length) {
                //
            } else {
                $eventManager.Event.emit($eventConst.default.restoreTime);
                game.dragonMoving = !0;
            }
        }
    };
    return t;
})())();
exports.default = c;
