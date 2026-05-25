exports.Utils = void 0;
var i = (function () {
    function t() {}
    t.randomNum = function (t, e) {
        var n = e - t;
        var r = Math.random();
        return t + Math.round(r * n);
    };
    t.secondFormat = function (t, e, n) {
        if (void 0 === e) {
            e = 2;
        }
        if (void 0 === n) {
            n = !1;
        }
        var r = t / 3600;
        var o = (t %= 3600) / 60;
        var i = (t %= 60);
        var a;
        if ((r = Math.floor(r)) >= 10) {
            a = r + "";
        } else {
            a = "0" + r;
        }
        var s;
        if ((o = Math.floor(o)) >= 10) {
            s = o + "";
        } else {
            s = "0" + o;
        }
        var c;
        if ((i = Math.floor(i)) >= 10) {
            c = i + "";
        } else {
            c = "0" + i;
        }
        if (n) {
            i = (100 * i) / 60;
            if ((i = Math.floor(i)) >= 10) {
                c = i + "";
            } else {
                c = "0" + i;
            }
        }
        var l = a + ":" + s + ":" + c;
        switch (e) {
            case 2:
                l = s + ":" + c;
        }
        return l;
    };
    t.getRandomItemsFromArray = function (t, e) {
        if (!(e > t.length)) {
            var n = [];
            var r = t.slice();
            for (var o = 0; o < e; o++) {
                var i = Math.floor(Math.random() * r.length);
                n.push(r[i]);
                r.splice(i, 1);
            }
            return n;
        }
    };
    t.calculateDifferenceBetweenTimes = function (t, e) {
        var n = Math.abs(t - e);
        return {
            days: n / 864e5,
            hours: (n / 36e5) % 24
        };
    };
    t.randomByWeight = function (t) {
        var e = [];
        var n = [];
        for (var r = 0; r < t.length; r++) {
            e.push(t[r][0]);
            n.push(t[r][1]);
        }
        var o = 0;
        var i = 0;
        var a = Math.random();
        for (r = n.length - 1; r >= 0; r--) {
            o += n[r];
        }
        a *= o;
        for (r = n.length - 1; r >= 0; r--) {
            if (a <= (i += n[r])) {
                return e[r];
            }
        }
        return null;
    };
    t.nodeShot = function (t) {
        return __awaiter(this, void 0, Promise, function () {
            var e;
            var n;
            return __generator(this, function () {
                (e = new cc.Node()).parent = cc.director.getScene().children[0];
                this.camera = e.addComponent(cc.Camera);
                this.camera.enabled = !0;
                this.camera.cullingMask = 4294967295;
                this.initNode(t);
                this.camera.render(t);
                this.camera.enabled = !1;
                n = new cc.SpriteFrame(this.texture);
                this.camera.node.destroy();
                return [2, n];
            });
        });
    };
    t.initNode = function (t) {
        var e = new cc.RenderTexture();
        var n = cc.game._renderContext;
        e.initWithSize(t.width, t.height, n.STENCIL_INDEX8);
        this.camera.targetTexture = e;
        this.texture = e;
    };
    t.paramObj = function (t) {
        var e;
        var n = /([^&=]+)=?([^&]*)/g;
        var r = /\+/g;
        var o = function (t) {
            return decodeURIComponent(t.replace(r, " "));
        };
        for (var i = {}; (e = n.exec(t)); ) {
            i[o(e[1])] = o(e[2]);
        }
        return i;
    };
    return t;
})();
exports.Utils = i;
