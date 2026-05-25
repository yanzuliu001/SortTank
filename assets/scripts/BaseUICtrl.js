var r;
var a;
var $localStorageManager = require("./LocalStorageManager");
var $memoryStorageManager = require("./MemoryStorageManager");
var l = cc._decorator;
var u = l.ccclass;
l.property;
(function (t) {
    t.Local = "local";
    t.Memory = "memory";
})(a || (a = {}));
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.dict = {};
        e.childNum = 0;
        e.localStorageUIData = {};
        e.memoryStorageUIData = {};
        return e;
    }
    __extends(e, t);
    e.prototype.onLoad = function () {
        this.loadNodeTree(this.node);
    };
    e.prototype.start = function () {
        this.onDataChange(a.Local);
        this.onDataChange(a.Memory);
        this._initView();
    };
    e.prototype.onDataChange = function (t) {
        var e = this;
        var n = function (n) {
            cc.game.on(
                t + "Storage_" + n,
                function () {
                    e.updateStorageView(t, n);
                },
                r
            );
        };
        var r = this;
        for (var o in this[t + "StorageUIData"]) n(o);
    };
    e.prototype._initView = function () {
        for (var t in this.localStorageUIData) this.updateStorageView(a.Local, t);
        for (var t in this.memoryStorageUIData) this.updateStorageView(a.Memory, t);
    };
    e.prototype.updateStorageView = function (t, e) {
        switch (t) {
            case a.Local:
                this[t + "StorageUIData"][e]($localStorageManager.default.get(e));
                break;
            case a.Memory:
                this[t + "StorageUIData"][e]($memoryStorageManager.default.get(e));
        }
    };
    e.prototype.loadNodeTree = function (t, e) {
        if (void 0 === e) {
            e = "";
        }
        if ("_" != t.name[0] && -1 == t.name.indexOf("copy")) {
            var n = e;
            var r = "";
            if (this.childNum) {
                n = e + t.name;
                if (this.dict[t.name]) {
                    //
                } else {
                    this.dict[t.name] = t;
                    if (t.name.includes("Btn")) {
                        this.addBtnOn(t, this[t.name], this);
                    }
                }
                r = n + "/";
            }
            for (var o = 0; o < t.children.length; ++o) {
                this.childNum++;
                this.loadNodeTree(t.children[o], r);
            }
        }
    };
    e.prototype.addBtnOn = function (t, e, n) {
        if (!t) {
            return cc.warn("没有该节点");
        }
        if (!e) {
            return cc.warn("没有" + t.name + "按钮的对应点击事件");
        }
        var r;
        if (t.getComponent(cc.Button)) {
            r = t.getComponent(cc.Button);
        } else {
            r = t.addComponent(cc.Button);
        }
        r.transition = cc.Button.Transition.SCALE;
        r.duration = 0.1;
        r.zoomScale = 0.95;
        t.on(
            cc.Node.EventType.TOUCH_END,
            function () {
                e.call(n);
            },
            this
        );
    };
    return __decorate([u], e);
})(cc.Component);
exports.default = f;
