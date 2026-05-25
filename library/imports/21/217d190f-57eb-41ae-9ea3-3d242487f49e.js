"use strict";
cc._RF.push(module, '217d1kPV+tBrp6jPSQkh/Se', 'LevelUtils');
// script/scripts/LevelUtils.js

"use strict";

var i = function () {
  function t() {}

  t.getRandomInt = function (t, e) {
    if (void 0 === t) {
      t = 0;
    }

    if (void 0 === e) {
      e = 1;
    }

    return Math.floor(Math.random() * (e - t + 1) + t);
  };

  t.getRandomFloat = function (t, e) {
    if (void 0 === t) {
      t = 0;
    }

    if (void 0 === e) {
      e = 1;
    }

    return Math.random() * (e - t + 1) + t;
  };

  t.getRandomValueInArray = function (t) {
    return t[Math.floor(Math.random() * t.length)];
  };

  t.getTwoPosAngle = function (t, e) {
    return Math.atan((e.y - t.y) / (e.x - t.x));
  };

  t.getTwoPosDistance = function (t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  };

  t.getAngleByTwoPoint = function (t, e) {
    var o = e.sub(t).normalize();

    if (o.equals(cc.v2(0, 0))) {
      return 0;
    } else {
      return o.signAngle(cc.v2(1, 0)) / Math.PI * 180 + 90;
    }
  };

  t.convertAngleToRadian = function (t) {
    return t * Math.PI / 180;
  };

  t.convertRadianToAngle = function (t) {
    return t / (Math.PI / 180);
  };

  t.isHex = function (t) {
    return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t);
  };

  t.convertHexToRGBA = function (t) {
    if (this.isHex(t)) {
      return {
        r: parseInt(t.substr(1, 2), 16) || 0,
        g: parseInt(t.substr(3, 2), 16) || 0,
        b: parseInt(t.substr(5, 2), 16) || 0,
        a: parseInt(t.substr(7, 2), 16) || 255
      };
    } else {
      return null;
    }
  };

  t.convertRGBAToHex = function (t) {
    var e = (256 | t.r).toString(16).slice(1);
    var o = (256 | t.g).toString(16).slice(1);
    var i = (256 | t.b).toString(16).slice(1);

    if (null == t.a) {
      return ("#" + e + o + i).toUpperCase();
    } else {
      return ("#" + e + o + i + (256 | t.a).toString(16).slice(1)).toUpperCase();
    }
  };

  t.prototype.copyAny = function (t) {
    return JSON.parse(JSON.stringify(t));
  };

  t.shuffle = function (t) {
    for (var e = t.length; e;) {
      var o = Math.floor(Math.random() * e--);
      var i = t[e];
      t[e] = t[o];
      t[o] = i;
    }

    return t;
  };

  return t;
}();

exports["default"] = i;

cc._RF.pop();