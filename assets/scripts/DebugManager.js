var $assetManager = require("./AssetManager");
var a = new ((function () {
    function t() {
        this.isShow = !1;
        this.windowRoot = null;
        this.switchBtn = null;
        this.logLabel = null;
        this.logLines = [];
        this.maxLines = 100;
    }
    t.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            var e;
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return [4, $assetManager.default.getRes("bundle", "prefab/Debug", cc.Prefab)];
                    case 1:
                        t = n.sent();
                        e = cc.instantiate(t);
                        cc.find("Canvas/logRoot").addChild(e);
                        this.windowRoot = e.getChildByName("windowRoot");
                        this.logLabel = cc.find("scrollView/view/content/text", this.windowRoot).getComponent(cc.Label);
                        this.switchBtn = e.getChildByName("switchBtn").getComponent(cc.Button);
                        this.switchBtn.node.on("click", this.showOrHide, this);
                        this.isShow = !0;
                        this.showOrHide();
                        this.i("Debug 初始化");
                        return [2];
                }
            });
        });
    };
    t.prototype.showOrHide = function () {
        this.isShow = !this.isShow;
        this.windowRoot.active = this.isShow;
    };
    t.prototype.isObject = function (t) {
        return "object" == typeof t && null !== t;
    };
    t.prototype.i = function () {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
        }
        var n = "";
        for (var r = 0; r < arguments.length; r++) {
            var o = arguments[r];
            if (this.isObject(o)) {
                o = JSON.stringify(o);
            }
            n += o;
        }
        console.log.apply(console, t);
        this.check(n);
    };
    t.prototype.e = function () {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
        }
        var n = "";
        for (var r = 0; r < arguments.length; r++) {
            n += arguments[r];
        }
        console.error.apply(console, t);
        this.check(n);
    };
    t.prototype.w = function () {
        var t = [];
        for (var e = 0; e < arguments.length; e++) {
            t[e] = arguments[e];
        }
        var n = "";
        for (var r = 0; r < arguments.length; r++) {
            n += arguments[r];
        }
        console.warn.apply(console, t);
        this.check(n);
    };
    t.prototype.check = function (t) {
        if (this.windowRoot) {
            this.logLines.push(t);
            this.updateView();
        }
    };
    t.prototype.updateView = function () {
        var t = "";
        var e;
        if (this.logLines.length < this.maxLines) {
            e = this.logLines.length;
        } else {
            e = this.maxLines;
        }
        for (var n = 0; n < e; n++) {
            t = t + this.logLines[this.logLines.length - 1 - n] + "\n";
        }
        this.logLabel.string = t;
    };
    return t;
})())();
exports.default = a;
