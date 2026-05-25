var r;
var a = cc._decorator;
var s = a.ccclass;
var c =
    (a.property,
    (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            e.speed = 100;
            e.endFunc = null;
            e.roadData = null;
            e.nextStep = 0;
            e.vx = 0;
            e.vy = 0;
            e.isWalking = !1;
            e.walkTime = 0;
            e.passedTime = 0;
            return e;
        }
        __extends(e, t);
        e.prototype.initNavAgent = function (t) {
            this.speed = t;
        };
        e.prototype.navOnRoad = function (t, e) {
            this.roadData = t;
            this.endFunc = e;
            this.isWalking = !1;
            if (this.roadData.length < 2) {
                //
            } else {
                this.isWalking = !0;
                this.node.setPosition(this.roadData[0]);
                this.nextStep = 1;
                this.walkToNext();
            }
        };
        e.prototype.walkToNext = function () {
            if (this.nextStep >= this.roadData.length) {
                this.isWalking = !1;
                return void (this.endFunc && this.endFunc());
            }
            this.isWalking = !0;
            var t = this.node.getPosition();
            var e = this.roadData[this.nextStep].sub(t);
            var n = e.mag();
            this.vx = (this.speed * e.x) / n;
            this.vy = (this.speed * e.y) / n;
            this.walkTime = n / this.speed;
            this.passedTime = 0;
        };
        e.prototype.walkUpdate = function (t) {
            this.passedTime += t;
            if (this.passedTime > this.walkTime) {
                t -= this.passedTime - this.walkTime;
            }
            var e = this.node.getPosition();
            e.x += this.vx * t;
            e.y += this.vy * t;
            this.node.setPosition(e);
            if (this.passedTime >= this.walkTime) {
                this.nextStep++;
                this.walkToNext();
            }
        };
        e.prototype.update = function (t) {
            if (this.isWalking) {
                this.walkUpdate(t);
            }
        };
        e.prototype.stopNav = function () {
            this.isWalking = !1;
        };
        return __decorate([s], e);
    })(cc.Component));
exports.default = c;
