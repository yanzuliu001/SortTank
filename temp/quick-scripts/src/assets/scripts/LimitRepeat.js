"use strict";
cc._RF.push(module, '67bfbM5sWxPB75KF6nsc/hw', 'LimitRepeat');
// scripts/LimitRepeat.js

"use strict";

exports.LimitRepeat = void 0;

exports.LimitRepeat = function (t) {
  if (void 0 === t) {
    t = 0.2;
  }

  return function (e, n, r) {
    var o = r.value;
    var i = !1;

    r.value = function () {
      var e = [];

      for (var n = 0; n < arguments.length; n++) {
        e[n] = arguments[n];
      }

      if (!i) {
        i = !0;
        setTimeout(function () {
          i = !1;
        }, 1e3 * t);
        o.apply(this, e);
        return r;
      }

      console.log("isLocking");
    };
  };
};

cc._RF.pop();