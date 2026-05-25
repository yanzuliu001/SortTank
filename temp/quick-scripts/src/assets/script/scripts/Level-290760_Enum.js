"use strict";
cc._RF.push(module, '153b2Gl4j1NO71+r7z39wfU', 'Level-290760_Enum');
// script/scripts/Level-290760_Enum.js

"use strict";

exports.ColorType = exports.DrinkState = exports.BoxState = void 0;

(function (t) {
  t[t.Idle = 0] = "Idle";
  t[t.OnWait = 1] = "OnWait";
  t[t.Packaged = 2] = "Packaged";
})(exports.BoxState || (exports.BoxState = {}));

(function (t) {
  t[t.Idle = 0] = "Idle";
  t[t.Packaged = 1] = "Packaged";
})(exports.DrinkState || (exports.DrinkState = {}));

(function (t) {
  t[t.Red = 0] = "Red";
  t[t.Purple = 1] = "Purple";
  t[t.Pink = 2] = "Pink";
  t[t.Yellow = 3] = "Yellow";
  t[t.Brown = 4] = "Brown";
  t[t.Green = 5] = "Green";
  t[t.LightBlue = 6] = "LightBlue";
  t[t.Blue = 7] = "Blue";
})(exports.ColorType || (exports.ColorType = {}));

cc._RF.pop();