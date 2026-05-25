"use strict";
cc._RF.push(module, '9ba9a+AATxOvYGe2XJdEySZ', 'Level-287490_config');
// script/scripts/Level-287490_config.js

"use strict";

exports.GameState = exports.DrinkPosArr = exports.ColorType = exports.ColorName = exports.DrinkState = exports.BoxOpenImageName = exports.BoxImageName = exports.BoxState = exports.BoxSpineAnimation = exports.BoxName = void 0;
exports.BoxName = {
  "2-2": "4_v",
  "2-2-2": "4_h",
  "3-2": "6_v",
  "3-2-2": "6_h",
  "4-2": "8_v",
  "4-2-2": "8_h"
};
exports.BoxSpineAnimation = {
  4: "1",
  6: "2",
  8: "3"
};

(function (t) {
  t[t.Idle = 0] = "Idle";
  t[t.OnDesk = 1] = "OnDesk";
  t[t.Packaged = 2] = "Packaged";
})(exports.BoxState || (exports.BoxState = {}));

exports.BoxImageName = {
  "4_v": "1",
  "4_h": "2",
  "6_v": "3",
  "6_h": "4",
  "8_v": "5",
  "8_h": "6"
};
exports.BoxOpenImageName = {
  "4_v": 1100,
  "4_h": 1100,
  "6_v": 1300,
  "6_h": 1300,
  "8_v": 1500,
  "8_h": 1500
};

(function (t) {
  t[t.Idle = 0] = "Idle";
  t[t.Packaged = 1] = "Packaged";
})(exports.DrinkState || (exports.DrinkState = {}));

exports.ColorName = ["红色0", "紫色1", "粉色2", "黄色3", "棕色4", "绿色5", "浅蓝色6", "蓝色7"];

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

exports.DrinkPosArr = [[219.21, 163.03], [219.21, 119.03], [219.21, 75.03], [219.21, 31.03], [164.71, 31.03], [110.21, 31.03], [55.71, 31.03], [1.21, 31.03], [-53.29, 31.03], [-107.79, 31.03], [-162.29, 31.03], [-216.79, 31.03], [-216.79, -12.97], [-216.79, -56.97], [-162.29, -56.97], [-107.79, -56.97], [-53.29, -56.97], [1.21, -56.97], [55.71, -56.97], [110.21, -56.97], [164.71, -56.97], [219.21, -56.97], [219.21, -100.97], [219.21, -144.97], [164.71, -144.97], [110.21, -144.97], [55.71, -144.97], [1.21, -144.97], [1.21, -194.97]];

(function (t) {
  t[t.None = 0] = "None";
})(exports.GameState || (exports.GameState = {}));

cc._RF.pop();