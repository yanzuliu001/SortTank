var r;
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            return (null !== t && t.apply(this, arguments)) || this;
        }
        __extends(e, t);
        e.prototype.onLoad = function () {
            this.fit();
            console.log("111");
        };
        e.prototype.fit = function () {
            var t = cc.Canvas.instance;
            var e =
                cc.view.getFrameSize().width / cc.view.getFrameSize().height >=
                t.designResolution.width / t.designResolution.height;
            t.fitHeight = e;
            t.fitWidth = !e;
        };
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
