((function () {}).prototype = cc.Button.prototype)._onTouchEnded = function (t) {
    if (this.interactable && this.enabledInHierarchy) {
        if (this._pressed) {
            cc.Component.EventHandler.emitEvents(this.clickEvents, t);
            this.node.emit("click", this);
        }
        this._pressed = !1;
        this._updateState();
        t.stopPropagation();
    }
};
