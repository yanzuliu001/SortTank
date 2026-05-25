var i;
var $level_29086_boxCarItem = require("./Level-29086_boxCarItem");
var $level_29086_config = require("./Level-29086_config");
var c = cc._decorator;
var l = c.ccclass;
var h = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.target = null;
        e.mgr = null;
        e.config = [];
        e.startPos = null;
        e.endPos = null;
        e.speed = 0;
        e.carParkCars = [];
        e.busCom = null;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        if (this.target) {
            var t = this.target.convertToWorldSpaceAR(cc.v2(0, -70));
            var e = this.target.parent.convertToNodeSpaceAR(t);
            this.startPos = e;
            this.endPos = this.target.position;
            this.speed = this.target.getComponent($level_29086_boxCarItem.default).speed;
        }
        this.node.getChildByName("carAmount").getComponent(cc.Label).string = "";
    };
    e.prototype.init = function (t, e) {
        this.mgr = t;
        this.config = e;
        this.busCom = this.mgr.mgr;
        var o = this.node.name;
        if (this.target) {
            var i = this.busCom.getPath(this.target);
            for (var r = 0; r < this.config.length; r++) {
                var n = this.config[r];
                var s = void 0;
                switch (o) {
                    case "left":
                        s = "01" + n + "-0";
                        break;
                    case "right":
                        s = "01" + n + "-1";
                        break;
                    case "top":
                        s = "02" + n;
                        break;
                    case "bottom":
                        s = "03" + n;
                }
                var c = this.busCom.dict.carPrefab.getChildByName(s);
                var l = cc.instantiate(c);
                this.busCom.dict.carRoot.addChild(l);
                l.isCarPark = !0;
                l.belongToCarPark = this.node;
                l.name = c.name;
                l.position = cc.v3();
                this.carParkCars.push(l);
                l.getComponent($level_29086_boxCarItem.default).path = i + r;
                l.path = i + r;
                l.active = !1;
            }
            this.node.getChildByName("carAmount").getComponent(cc.Label).string = "" + this.config.length;
        }
    };
    e.prototype.update = function () {
        var t = this;
        if (((this.target && !this.target.active) || !this.target) && this.carParkCars.length > 0) {
            this.busCom.carparkIng = !0;
            this.target = this.carParkCars.shift();
            this.node.getChildByName("carAmount").getComponent(cc.Label).string = "" + this.carParkCars.length;
            this.target.active = !0;
            this.target.position = this.startPos;
            var e = this.startPos.sub(this.endPos).mag() / this.speed;
            this.scheduleOnce(function () {
                t.target.isWen = !0;
                t.target.getComponent($level_29086_boxCarItem.default).carState = $level_29086_config.CarState.Idle;
                t.busCom.carparkIng = !1;
                t.busCom.updateCarWeight();
            }, e);
            cc.tween(this.target)
                .to(e, {
                    position: this.endPos
                })
                .call(function () {
                    t.target.isWen = !0;
                    t.busCom.carparkIng = !1;
                })
                .start();
        }
    };
    __decorate([h(cc.Node)], e.prototype, "target", void 0);
    return __decorate([l], e);
})(cc.Component);
exports.default = p;
