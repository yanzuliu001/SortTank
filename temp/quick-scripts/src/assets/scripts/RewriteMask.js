"use strict";
cc._RF.push(module, 'fce47sGueBLj5qbP+lhSMVs', 'RewriteMask');
// scripts/RewriteMask.js

"use strict";

((function () {}).prototype = cc.Mask.prototype).onDestroy = function () {
  if (this._super) {
    this._super();
  }

  if (this._removeGraphics) {
    this._removeGraphics();
  }

  this._spriteFrame = null;
};

cc._RF.pop();