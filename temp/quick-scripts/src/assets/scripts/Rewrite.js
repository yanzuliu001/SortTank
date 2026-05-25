"use strict";
cc._RF.push(module, '8add7WBV1VP/YNHb8pdLFFP', 'Rewrite');
// scripts/Rewrite.js

"use strict";

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

cc._RF.pop();