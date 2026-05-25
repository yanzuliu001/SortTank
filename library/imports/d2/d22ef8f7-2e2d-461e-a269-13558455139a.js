"use strict";
cc._RF.push(module, 'd22efj3Li1GHqJpE1WEVROa', 'levelReviveHelper');
// script/scripts/levelReviveHelper.js

"use strict";

var i = function () {
  function t() {}

  t.levelFailEvent = function (t, e) {
    cc.game.emit("levelFailEvent", t, e);
  };

  return t;
}();

exports["default"] = i;

cc._RF.pop();