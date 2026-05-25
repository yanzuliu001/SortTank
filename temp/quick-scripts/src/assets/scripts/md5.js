"use strict";
cc._RF.push(module, 'fa926G0x9VAMaJ33dh402o3', 'md5');
// scripts/md5.js

"use strict";

exports.md5 = void 0;

exports.md5 = function (t) {
  function e(t, e) {
    return t << e | t >>> 32 - e;
  }

  function n(t, e) {
    var n;
    var r;
    var o;
    var i;
    var a;
    o = 2147483648 & t;
    i = 2147483648 & e;
    a = (1073741823 & t) + (1073741823 & e);
    return (n = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
  }

  function r(t, e, n) {
    return t & e | ~t & n;
  }

  function o(t, e, n) {
    return t & n | e & ~n;
  }

  function i(t, e, n) {
    return t ^ e ^ n;
  }

  function a(t, e, n) {
    return e ^ (t | ~n);
  }

  function s(t, o, i, a, s, c, l) {
    t = n(t, n(n(r(o, i, a), s), l));
    return n(e(t, c), o);
  }

  function c(t, r, i, a, s, c, l) {
    t = n(t, n(n(o(r, i, a), s), l));
    return n(e(t, c), r);
  }

  function l(t, r, o, a, s, c, l) {
    t = n(t, n(n(i(r, o, a), s), l));
    return n(e(t, c), r);
  }

  function u(t, r, o, i, s, c, l) {
    t = n(t, n(n(a(r, o, i), s), l));
    return n(e(t, c), r);
  }

  function f(t) {
    var e;
    var n = "";
    var r = "";

    for (e = 0; 3 >= e; e++) {
      n += (r = "0" + (t >>> 8 * e & 255).toString(16)).substr(r.length - 2, 2);
    }

    return n;
  }

  var d;
  var h;
  var p;
  var m;
  var g;
  var y;
  var v;
  var w;

  var _;

  var b;

  b = function (t) {
    for (var e, n = t.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = new Array(o - 1), a = 0, s = 0; n > s;) {
      a = s % 4 * 8, i[e = (s - s % 4) / 4] = i[e] | t.charCodeAt(s) << a, s++;
    }

    a = s % 4 * 8;
    i[e = (s - s % 4) / 4] = i[e] | 128 << a;
    i[o - 2] = n << 3;
    i[o - 1] = n >>> 29;
    return i;
  }(t = function (t) {
    t = t.replace(/\r\n/g, "\n");

    for (var e = "", n = 0; n < t.length; n++) {
      var r = t.charCodeAt(n);

      if (128 > r) {
        e += String.fromCharCode(r);
      } else {
        if (r > 127 && 2048 > r) {
          e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128);
        } else {
          e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128);
        }
      }
    }

    return e;
  }(t));

  y = 1732584193;
  v = 4023233417;
  w = 2562383102;
  _ = 271733878;

  for (d = 0; d < b.length; d += 16) {
    h = y;
    p = v;
    m = w;
    g = _;
    y = s(y, v, w, _, b[d + 0], 7, 3614090360);
    _ = s(_, y, v, w, b[d + 1], 12, 3905402710);
    w = s(w, _, y, v, b[d + 2], 17, 606105819);
    v = s(v, w, _, y, b[d + 3], 22, 3250441966);
    y = s(y, v, w, _, b[d + 4], 7, 4118548399);
    _ = s(_, y, v, w, b[d + 5], 12, 1200080426);
    w = s(w, _, y, v, b[d + 6], 17, 2821735955);
    v = s(v, w, _, y, b[d + 7], 22, 4249261313);
    y = s(y, v, w, _, b[d + 8], 7, 1770035416);
    _ = s(_, y, v, w, b[d + 9], 12, 2336552879);
    w = s(w, _, y, v, b[d + 10], 17, 4294925233);
    v = s(v, w, _, y, b[d + 11], 22, 2304563134);
    y = s(y, v, w, _, b[d + 12], 7, 1804603682);
    _ = s(_, y, v, w, b[d + 13], 12, 4254626195);
    w = s(w, _, y, v, b[d + 14], 17, 2792965006);
    y = c(y, v = s(v, w, _, y, b[d + 15], 22, 1236535329), w, _, b[d + 1], 5, 4129170786);
    _ = c(_, y, v, w, b[d + 6], 9, 3225465664);
    w = c(w, _, y, v, b[d + 11], 14, 643717713);
    v = c(v, w, _, y, b[d + 0], 20, 3921069994);
    y = c(y, v, w, _, b[d + 5], 5, 3593408605);
    _ = c(_, y, v, w, b[d + 10], 9, 38016083);
    w = c(w, _, y, v, b[d + 15], 14, 3634488961);
    v = c(v, w, _, y, b[d + 4], 20, 3889429448);
    y = c(y, v, w, _, b[d + 9], 5, 568446438);
    _ = c(_, y, v, w, b[d + 14], 9, 3275163606);
    w = c(w, _, y, v, b[d + 3], 14, 4107603335);
    v = c(v, w, _, y, b[d + 8], 20, 1163531501);
    y = c(y, v, w, _, b[d + 13], 5, 2850285829);
    _ = c(_, y, v, w, b[d + 2], 9, 4243563512);
    w = c(w, _, y, v, b[d + 7], 14, 1735328473);
    y = l(y, v = c(v, w, _, y, b[d + 12], 20, 2368359562), w, _, b[d + 5], 4, 4294588738);
    _ = l(_, y, v, w, b[d + 8], 11, 2272392833);
    w = l(w, _, y, v, b[d + 11], 16, 1839030562);
    v = l(v, w, _, y, b[d + 14], 23, 4259657740);
    y = l(y, v, w, _, b[d + 1], 4, 2763975236);
    _ = l(_, y, v, w, b[d + 4], 11, 1272893353);
    w = l(w, _, y, v, b[d + 7], 16, 4139469664);
    v = l(v, w, _, y, b[d + 10], 23, 3200236656);
    y = l(y, v, w, _, b[d + 13], 4, 681279174);
    _ = l(_, y, v, w, b[d + 0], 11, 3936430074);
    w = l(w, _, y, v, b[d + 3], 16, 3572445317);
    v = l(v, w, _, y, b[d + 6], 23, 76029189);
    y = l(y, v, w, _, b[d + 9], 4, 3654602809);
    _ = l(_, y, v, w, b[d + 12], 11, 3873151461);
    w = l(w, _, y, v, b[d + 15], 16, 530742520);
    y = u(y, v = l(v, w, _, y, b[d + 2], 23, 3299628645), w, _, b[d + 0], 6, 4096336452);
    _ = u(_, y, v, w, b[d + 7], 10, 1126891415);
    w = u(w, _, y, v, b[d + 14], 15, 2878612391);
    v = u(v, w, _, y, b[d + 5], 21, 4237533241);
    y = u(y, v, w, _, b[d + 12], 6, 1700485571);
    _ = u(_, y, v, w, b[d + 3], 10, 2399980690);
    w = u(w, _, y, v, b[d + 10], 15, 4293915773);
    v = u(v, w, _, y, b[d + 1], 21, 2240044497);
    y = u(y, v, w, _, b[d + 8], 6, 1873313359);
    _ = u(_, y, v, w, b[d + 15], 10, 4264355552);
    w = u(w, _, y, v, b[d + 6], 15, 2734768916);
    v = u(v, w, _, y, b[d + 13], 21, 1309151649);
    y = u(y, v, w, _, b[d + 4], 6, 4149444226);
    _ = u(_, y, v, w, b[d + 11], 10, 3174756917);
    w = u(w, _, y, v, b[d + 2], 15, 718787259);
    v = u(v, w, _, y, b[d + 9], 21, 3951481745);
    y = n(y, h);
    v = n(v, p);
    w = n(w, m);
    _ = n(_, g);
  }

  return (f(y) + f(v) + f(w) + f(_)).toLowerCase();
};

cc._RF.pop();