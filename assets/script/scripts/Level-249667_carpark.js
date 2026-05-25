var i;
var $level_249667_busConfig = require("./Level-249667_busConfig");
var $level_249667_carItem = require("./Level-249667_carItem");
var c = cc._decorator;
var l = c.ccclass;
var h = c.property;
var p = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.target = null;
        e.endPos = null;
        e.startPos = null;
        e.speed = 0;
        e.carAmount = 0;
        e.lenArr = [];
        e.mgr = null;
        e.path = 0;
        e.carDirImg = null;
        e.config = {
            "-52": 1,
            52: 0,
            90: 0,
            "-90": 1
        };
        e.carParkCars = [];
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.endPos = this.target.position;
        var t = this.target.convertToWorldSpaceAR(cc.v2(0, -70));
        var e = this.target.parent.convertToNodeSpaceAR(t);
        this.startPos = e;
        this.speed = this.target.getComponent($level_249667_carItem.default).speed;
        this.node.getChildByName("carAmount").getComponent(cc.Label).string = "";
    };
    e.prototype.initData = function (t, e) {
        this.carDirImg = this.config[String(Math.round(this.node.angle))];
        var o = 4;
        if ("90" != String(Math.round(this.node.angle)) && "-90" != String(Math.round(this.node.angle))) {
            //
        } else {
            o = 1;
        }
        this.mgr = e;
        this.lenArr = t;
        this.carAmount = t.length;
        this.node.getChildByName("carAmount").getComponent(cc.Label).string = "" + t.length;
        this.path = this.target.getComponent($level_249667_carItem.default).path + 1;
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            var n = this.mgr.createCarByCarPark(r, this.path + i, this.carDirImg, o);
            n.isCarPark = !0;
            n.position = this.startPos;
            this.carParkCars.push(n);
        }
        console.log("车库的车", this.carParkCars.length);
    };
    e.prototype.update = function () {
        var t = this;
        if (((this.target && !this.target.active) || !this.target) && this.carParkCars.length > 0) {
            this.mgr.carparkIng = !0;
            this.target = this.carParkCars.shift();
            this.node.getChildByName("carAmount").getComponent(cc.Label).string = "" + this.carParkCars.length;
            this.target.active = !0;
            this.target.position = this.startPos;
            var e = this.startPos.sub(this.endPos).mag() / this.speed;
            this.scheduleOnce(function () {
                t.target.isWen = !0;
                t.target.getComponent($level_249667_carItem.default).carState = $level_249667_busConfig.CarState.Idle;
                t.mgr.carparkIng = !1;
                t.mgr.updateCarWeight();
            }, e);
            cc.tween(this.target)
                .to(e, {
                    position: this.endPos
                })
                .call(function () {
                    console.log("测试");
                    t.target.isWen = !0;
                    t.mgr.carparkIng = !1;
                })
                .start();
        }
    };
    __decorate([h(cc.Node)], e.prototype, "target", void 0);
    return __decorate([l], e);
})(cc.Component);
exports.default = p;
