((function () {}).prototype = cc.Mask.prototype).onDestroy = function () {
    if (this._super) {
        this._super();
    }
    if (this._removeGraphics) {
        this._removeGraphics();
    }
    this._spriteFrame = null;
};
