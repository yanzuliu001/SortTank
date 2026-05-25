exports.Screenshot = void 0;
var r = (function () {
    function t() {
        this._camera = null;
        this._texture = null;
        this._sprite = null;
    }
    t.prototype.init = function (t) {
        if (cc.sys.isBrowser) {
            var e = new cc.Node();
            e.parent = cc.director.getScene().getChildByName("Canvas");
            var n = e.addComponent(cc.Camera);
            n.enabled = !1;
            var r = cc.winSize.width;
            var o = cc.winSize.height;
            var i = cc.size(1 * r, 1 * o);
            var a = cc.v2(0, 0);
            n.zoomRatio = 1;
            var s = new cc.RenderTexture();
            s.initWithSize(i.width, i.height);
            t.setPosition(a);
            n.targetTexture = s;
            this._camera = n;
            this._texture = s;
            this._sprite = t.getComponent(cc.Sprite);
        }
    };
    t.prototype.btn_image_knife = function (t) {
        console.log("save");
        this._camera.render(void 0);
        var e = this._texture;
        var n = e.readPixels();
        var r = e.width;
        var o = e.height;
        var i = document.createElement("canvas");
        var a = i.getContext("2d");
        i.width = r;
        i.height = o;
        var s = 4 * r;
        for (var c = 0; c < o; c++) {
            var l = o - 1 - c;
            var u = a.createImageData(r, 1);
            var f = l * r * 4;
            for (var d = 0; d < s; d++) {
                u.data[d] = n[f + d];
            }
            a.putImageData(u, 0, c);
        }
        var h = i.toDataURL("image/jpeg").replace(/^data:image[^;]*/, "data:image/octet-stream");
        var p = document.createElement("a");
        p.href = h;
        p.download = t + ".png";
        p.click();
        p.remove();
    };
    return t;
})();
exports.Screenshot = new r();
