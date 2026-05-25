var i;
var $levelUtil = require("./LevelUtil");
var $level_287490_config = require("./Level-287490_config");
var $level_287490_waitItem = require("./Level-287490_waitItem");
var l = cc._decorator;
var h = l.ccclass;
var p =
    (l.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.ctl = null;
            e.layer = 0;
            e.index = 0;
            e.colorType = null;
            e.posCount = 0;
            e.boxType = "h";
            e.state = $level_287490_config.BoxState.Idle;
            e.coverCount = 0;
            e.putCount = 0;
            e.waitNode = null;
            e.isAnim = !1;
            e.speed = 1e3;
            return e;
        }
        __extends(e, t);
        e.prototype.init = function (t, e) {
            var o = e.name;
            var i = e.layer;
            var r = e.index;
            var n = e.x;
            var a = e.y;
            this.ctl = t;
            this.layer = i;
            this.index = r;
            this.node.position = cc.v3(n, a, 0);
            var s = o.split("_");
            this.posCount = Number(s[0]);
            this.boxType = s[1];
            this.node.zIndex = 100 * i + r;
        };
        e.prototype.setColor = function (t, e) {
            this.colorType = t;
            this.node.getComponent(cc.Sprite).spriteFrame = e.getSpriteFrame(
                "f28749_" + $level_287490_config.BoxImageName[this.node.name] + "0" + (t + 1)
            );
        };
        e.prototype.move = function (t) {
            var e = this;
            this.isAnim = !0;
            this.waitNode = t;
            this.waitNode.getComponent($level_287490_waitItem.default).placeBox = this.node;
            this.state = $level_287490_config.BoxState.OnDesk;
            var o = $levelUtil.default.convertPosition(this.waitNode, this.node);
            cc.tween(this.node)
                .to(0.2, {
                    position: cc.v3(o.x, o.y, 0)
                })
                .call(function () {
                    e.isAnim = !1;
                    var t = $level_287490_config.BoxOpenImageName[e.node.name] + e.colorType + 1;
                    e.node.getComponent(cc.Sprite).spriteFrame = e.ctl.mgr.boxAtlas.getSpriteFrame("f28749_" + t);
                    e.ctl.mgr.checkDrinkMove();
                })
                .start();
        };
        e.prototype.getPosNode = function () {
            for (var t = 0; t < this.node.children.length; t++) {
                var e = this.node.children[t];
                if (!e.active) {
                    return e;
                }
            }
            return null;
        };
        return __decorate([h], e);
    })(cc.Component));
exports.default = p;
