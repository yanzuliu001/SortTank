var r;
var a = cc._decorator;
var s = a.ccclass;
var c = a.property;
var l = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e.fullStart = null;
        e.emptyStart = null;
        e.closeBtn = null;
        e.startRoot = null;
        e.submitBtn = null;
        e._data = null;
        e.startCount = 0;
        return e;
    }
    __extends(e, t);
    e.prototype.closeBtn_te = function (t) {
        t.stopPropagation();
        if (this._data && this._data.cb) {
            this._data.cb();
        }
    };
    e.prototype.submitBtn_te = function (t) {
        t.stopPropagation();
        this.onOkBtn(t);
    };
    e.prototype.onLoad = function () {
        this.closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeBtn_te, this);
        this.submitBtn.on(cc.Node.EventType.TOUCH_END, this.submitBtn_te, this);
    };
    e.prototype.onEnable = function () {
        this.startCount = 0;
    };
    e.prototype.onStartBtn = function (t, e) {
        var n = this.startRoot.children;
        this.startCount = parseInt(e) + 1;
        for (var r = 0; r < n.length; r++) {
            if (r <= e) {
                n[r].getComponent(cc.Sprite).spriteFrame = this.fullStart;
            } else {
                n[r].getComponent(cc.Sprite).spriteFrame = this.emptyStart;
            }
        }
    };
    e.prototype.onOkBtn = function (t) {
        if (4 == this.startCount || 5 == this.startCount) {
            this.closeBtn_te(t);
        } else {
            if (0 == this.startCount) {
                //
            } else {
                this.closeBtn_te(t);
            }
        }
    };
    __decorate([c(cc.SpriteFrame)], e.prototype, "fullStart", void 0);
    __decorate([c(cc.SpriteFrame)], e.prototype, "emptyStart", void 0);
    __decorate([c(cc.Node)], e.prototype, "closeBtn", void 0);
    __decorate([c(cc.Node)], e.prototype, "startRoot", void 0);
    __decorate([c(cc.Node)], e.prototype, "submitBtn", void 0);
    return __decorate([s], e);
})(cc.Component);
exports.default = l;
