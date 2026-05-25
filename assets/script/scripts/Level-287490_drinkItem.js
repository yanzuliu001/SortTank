var i;
var $level_287490_boxItem = require("./Level-287490_boxItem");
var $level_287490_config = require("./Level-287490_config");
var c = cc._decorator;
var l = c.ccclass;
var h =
    (c.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.mgr = null;
            e.targetPosIndex = -1;
            e.colorType = null;
            e.currentPosIndex = -1;
            e.state = $level_287490_config.DrinkState.Idle;
            e.delayMoveTime = 0;
            e.isAnim = !1;
            e.speed = 1e3;
            return e;
        }
        __extends(e, t);
        e.prototype.init = function (t, e, o) {
            var i = this;
            this.mgr = t;
            this.node.position = cc.v3(219.21, 208.03);
            this.currentPosIndex = this.mgr.drinkPosArr.length;
            this.targetPosIndex = o;
            this.colorType = e.color;
            this.node.zIndex = this.mgr.drinkPosArr.length - this.targetPosIndex;
            this.delayMoveTime = 54.5 / this.speed;
            this.node.getComponent(cc.Sprite).spriteFrame = this.mgr.drinkAtlas.getSpriteFrame(
                "f28749_1" + (this.colorType + 1)
            );
            if (this.targetPosIndex >= this.mgr.drinkPosArr.length) {
                //
            } else {
                this.scheduleOnce(function () {
                    i.move();
                }, this.delayMoveTime * this.targetPosIndex);
            }
        };
        e.prototype.move = function () {
            var t = this;
            this.isAnim = !0;
            var e = this.mgr.drinkPosArr[this.currentPosIndex - 1];
            var o = this.node.position.sub(cc.v3(e[0], e[1])).mag();
            cc.tween(this.node)
                .to(o / this.speed, {
                    position: cc.v3(e[0], e[1])
                })
                .call(function () {
                    t.currentPosIndex -= 1;
                    if (t.currentPosIndex != t.targetPosIndex) {
                        t.move();
                    } else {
                        if (0 == t.currentPosIndex) {
                            console.log("到位");
                            t.isAnim = !1;
                            t.mgr.isReady = !0;
                        }
                    }
                })
                .start();
        };
        e.prototype.moveToBox = function (t) {
            var e = this;
            this.isAnim = !0;
            this.state = $level_287490_config.DrinkState.Packaged;
            var o;
            var i;
            var r;
            var n = t.getComponent($level_287490_boxItem.default).getPosNode();
            if (n) {
                o = n.parent.convertToWorldSpaceAR(n.position);
                i = this.node.parent.convertToNodeSpaceAR(o);
                r = this.node.position.sub(i).mag();
            }
            cc.tween(this.node)
                .to(r / this.speed, {
                    position: i
                })
                .call(function () {
                    var t = e.node.getComponent(cc.Sprite).spriteFrame.name;
                    n.getComponent(cc.Sprite).spriteFrame = e.mgr.drinkAtlas.getSpriteFrame(t + "-1");
                    n.active = !0;
                    e.node.destroy();
                })
                .start();
        };
        return __decorate([l], e);
    })(cc.Component));
exports.default = h;
