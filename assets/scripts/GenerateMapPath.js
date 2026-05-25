var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.isDebug = !1;
        e.paths = [];
        e.OFFSET = 16;
        e.drawSize = 3;
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        var t = this.node.getComponent(cc.Animation).getClips()[0].curveData.paths;
        for (var e in t) {
            var n = t[e].props.position;
            console.log("roadData", n);
            this.generatePathData(n);
        }
        this.drawRoads();
        console.log("paths", this.paths);
    };
    e.prototype.getPath = function () {
        return this.paths;
    };
    e.prototype.generatePathData = function (t) {
        var e = null;
        var n = null;
        var r = null;
        var o = null;
        var i = [];
        for (var a = 0; a < t.length; a++) {
            var s = t[a];
            if (null !== e) {
                i.push([n, e, e, cc.v2(s.value[0], s.value[1])]);
            }
            n = cc.v2(s.value[0], s.value[1]);
            console.log("keyFrame.motionPath", s, s.motionPath);
            for (var c = 0; c < s.motionPath.length; c++) {
                var l = cc.v2(s.motionPath[c][0], s.motionPath[c][1]);
                o = cc.v2(s.motionPath[c][2], s.motionPath[c][3]);
                if (null === e) {
                    e = o;
                }
                i.push([n, e, o, l]);
                e = cc.v2(s.motionPath[c][4], s.motionPath[c][5]);
                n = l;
            }
        }
        console.log(i);
        var u = [[i[0][0].x, i[0][0].y]];
        for (var f = 0; f < i.length; f++) {
            n = i[f][0];
            e = i[f][1];
            o = i[f][2];
            r = i[f][3];
            var d = this.bezierLength(n, e, o, r) / this.OFFSET;
            var h = 1 / (d = Math.floor(d));
            var p = h;
            for (a = 0; a < d; a++) {
                var m =
                    n.x * (1 - p) * (1 - p) * (1 - p) +
                    3 * e.x * p * (1 - p) * (1 - p) +
                    3 * o.x * p * p * (1 - p) +
                    r.x * p * p * p;
                var g =
                    n.y * (1 - p) * (1 - p) * (1 - p) +
                    3 * e.y * p * (1 - p) * (1 - p) +
                    3 * o.y * p * p * (1 - p) +
                    r.y * p * p * p;
                u.push([m, g]);
                p += h;
            }
        }
        this.paths.push(u);
    };
    e.prototype.drawRoads = function () {
        if (this.isDebug) {
            var t = this.node.addComponent(cc.Graphics);
            t.fillColor = cc.color(255, 0, 0, 255);
            t.clear();
            for (var e = 0; e < this.paths.length; e++) {
                var n = this.paths[e];
                for (var r = 0; r < n.length; r++) {
                    t.moveTo(n[r][0] - this.drawSize, n[r][1] + this.drawSize);
                    t.lineTo(n[r][0] - this.drawSize, n[r][1] - this.drawSize);
                    t.lineTo(n[r][0] + this.drawSize, n[r][1] - this.drawSize);
                    t.lineTo(n[r][0] + this.drawSize, n[r][1] + this.drawSize);
                    t.close();
                }
            }
            t.fill();
        }
    };
    e.prototype.bezierLength = function (t, e, n, r) {
        var o = t;
        var i = 0;
        var a = 0.05;
        for (var s = 0; s < 20; s++) {
            var c =
                t.x * (1 - a) * (1 - a) * (1 - a) +
                3 * e.x * a * (1 - a) * (1 - a) +
                3 * n.x * a * a * (1 - a) +
                r.x * a * a * a;
            var l =
                t.y * (1 - a) * (1 - a) * (1 - a) +
                3 * e.y * a * (1 - a) * (1 - a) +
                3 * n.y * a * a * (1 - a) +
                r.y * a * a * a;
            var u = cc.v2(c, l);
            var f = u.sub(o);
            o = u;
            i += f.mag();
            a += 0.05;
        }
        return i;
    };
    __decorate([c], e.prototype, "isDebug", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
