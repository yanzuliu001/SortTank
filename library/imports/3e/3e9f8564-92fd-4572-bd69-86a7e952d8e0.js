"use strict";
cc._RF.push(module, '3e9f8Vkkv1Fcr1phqfpUtjg', 'myXxtea');
// scripts/myXxtea.js

"use strict";

exports.myXxtea = void 0;

var r = function () {
  function t() {}

  t.prototype.xxtea_encrypt = function (t, e) {
    if ("" == t) {
      return "";
    }

    var n = this.str2long(t, !0);
    var r = this.str2long(e, !1);

    if ("string" == typeof t) {
      t = this.toBytes(t);
    }

    if ("string" == typeof e) {
      e = this.toBytes(e);
    }

    if (null == t || 0 === t.length) {
      return t;
    }

    n = this.toUint32Array(t, !0);
    r = this.toUint32Array(e, !1);
    var o;
    var i;
    var a = n.length - 1;
    var s = n[a];
    var c = n[0];
    var l = Math.floor(6 + 52 / (a + 1));

    for (var u = 0; l-- > 0;) {
      i = (u = u + 2654435769 & 4294967295) >>> 2 & 3;

      for (var f = 0; f < a; f++) {
        o = (s >>> 5 ^ (c = n[f + 1]) << 2) + (c >>> 3 ^ s << 4) ^ (u ^ c) + (r[3 & f ^ i] ^ s);
        s = n[f] = n[f] + o & 4294967295;
      }

      o = (s >>> 5 ^ (c = n[0]) << 2) + (c >>> 3 ^ s << 4) ^ (u ^ c) + (r[3 & f ^ i] ^ s);
      s = n[a] = n[a] + o & 4294967295;
    }

    return this.str2Hex(this.long2str(n, !1));
  };

  t.prototype.xxtea_decrypt = function (t, e) {
    if ("" == t) {
      return "";
    }

    t = this.hex2str(t);
    var n;
    var r;
    var o = this.str2long(t, !1);
    var i = this.str2long(e, !1);
    var a = o.length - 1;
    var s = o[a - 1];
    var c = o[0];

    for (var l = 2654435769 * Math.floor(6 + 52 / (a + 1)) & 4294967295; 0 != l;) {
      r = l >>> 2 & 3;

      for (var u = a; u > 0; u--) {
        n = ((s = o[u - 1]) >>> 5 ^ c << 2) + (c >>> 3 ^ s << 4) ^ (l ^ c) + (i[3 & u ^ r] ^ s);
        c = o[u] = o[u] - n & 4294967295;
      }

      n = ((s = o[a]) >>> 5 ^ c << 2) + (c >>> 3 ^ s << 4) ^ (l ^ c) + (i[3 & u ^ r] ^ s);
      c = o[0] = o[0] - n & 4294967295;
      l = l - 2654435769 & 4294967295;
    }

    var f = this.toUint8Array(o, !0);
    return this.toString(f);
  };

  t.prototype.long2str = function (t, e) {
    var n = t.length;
    var r = 4294967295 & t[n - 1];

    for (var o = 0; o < n; o++) {
      t[o] = String.fromCharCode(255 & t[o], t[o] >>> 8 & 255, t[o] >>> 16 & 255, t[o] >>> 24 & 255);
    }

    if (e) {
      return t.join("").substring(0, r);
    } else {
      return t.join("");
    }
  };

  t.prototype.str2long = function (t, e) {
    var n = t.length;
    var r = [];

    for (var o = 0; o < n; o += 4) {
      r[o >> 2] = t.charCodeAt(o) | t.charCodeAt(o + 1) << 8 | t.charCodeAt(o + 2) << 16 | t.charCodeAt(o + 3) << 24;
    }

    if (e) {
      r[r.length] = n;
    }

    return r;
  };

  t.prototype.str2Hex = function (t) {
    var e = "";
    var n = "";
    var r = 0;

    do {
      if (1 == (n = t.charCodeAt(r++).toString(16)).length) {
        n = "0" + n;
      }

      e += n;
    } while (r < t.length);

    return e;
  };

  t.prototype.hex2str = function (t) {
    var e = "";

    for (var n = 0; n < t.length;) {
      var r = parseInt(t.substr(n, 1), 16) << 4 | parseInt(t.substr(++n, 1), 16);
      r &= 255;
      e += String.fromCharCode(r);
      ++n;
    }

    return e;
  };

  t.prototype.toUint32Array = function (t, e) {
    var n;
    var r = t.length;
    var o = r >> 2;

    if (0 != (3 & r)) {
      ++o;
    }

    if (e) {
      (n = new Array(o + 1))[o] = r;
    } else {
      n = new Uint32Array(o);
    }

    for (var i = 0; i < r; ++i) {
      n[i >> 2] |= t[i] << ((3 & i) << 3);
    }

    return n;
  };

  t.prototype.toUint8Array = function (t, e) {
    var n;

    if (e) {
      n = t[t.length - 1];
    } else {
      n = t.length << 2;
    }

    var r = new Uint8Array(n);

    for (var o = 0; o < n; o++) {
      r[o] = t[o >> 2] >> ((3 & o) << 3);
    }

    return r;
  };

  t.prototype.toBytes = function (t) {
    var e = t.length;
    var n = new Uint8Array(3 * e);
    var r = 0;

    for (var o = 0; o < e; o++) {
      var i = t.charCodeAt(o);

      if (i < 128) {
        n[r++] = i;
      } else if (i < 2048) {
        n[r++] = 192 | i >> 6;
        n[r++] = 128 | 63 & i;
      } else {
        if (!(i < 55296 || i > 57343)) {
          if (o + 1 < e) {
            var a = t.charCodeAt(o + 1);

            if (i < 56320 && 56320 <= a && a <= 57343) {
              var s = 65536 + ((1023 & i) << 10 | 1023 & a);
              n[r++] = 240 | s >> 18;
              n[r++] = 128 | s >> 12 & 63;
              n[r++] = 128 | s >> 6 & 63;
              n[r++] = 128 | 63 & s;
              o++;
              continue;
            }
          }

          throw new Error("Malformed string");
        }

        n[r++] = 224 | i >> 12;
        n[r++] = 128 | i >> 6 & 63;
        n[r++] = 128 | 63 & i;
      }
    }

    return n.subarray(0, r);
  };

  t.prototype.toShortString = function (t, e) {
    var n = new Array(e);
    var r = 0;
    var o = 0;

    for (var i = t.length; r < e && o < i; r++) {
      var a = t[o++];

      switch (a >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          n[r] = a;
          break;

        case 12:
        case 13:
          if (!(o < i)) {
            throw new Error("Unfinished UTF-8 octet sequence");
          }

          n[r] = (31 & a) << 6 | 63 & t[o++];
          break;

        case 14:
          if (!(o + 1 < i)) {
            throw new Error("Unfinished UTF-8 octet sequence");
          }

          n[r] = (15 & a) << 12 | (63 & t[o++]) << 6 | 63 & t[o++];
          break;

        case 15:
          if (!(o + 2 < i)) {
            throw new Error("Unfinished UTF-8 octet sequence");
          }

          var s = ((7 & a) << 18 | (63 & t[o++]) << 12 | (63 & t[o++]) << 6 | 63 & t[o++]) - 65536;

          if (!(0 <= s && s <= 1048575)) {
            throw new Error("Character outside valid Unicode range: 0x" + s.toString(16));
          }

          n[r++] = s >> 10 & 1023 | 55296;
          n[r] = 1023 & s | 56320;
          break;

        default:
          throw new Error("Bad UTF-8 encoding 0x" + a.toString(16));
      }
    }

    if (r < e) {
      n = n.slice(0, r);
    }

    return String.fromCharCode.apply(String, n);
  };

  t.prototype.toLongString = function (t, e) {
    var n = [];
    var r = new Array(65535);
    var o = 0;
    var i = 0;

    for (var a = t.length; o < e && i < a; o++) {
      var s = t[i++];

      switch (s >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          r[o] = s;
          break;

        case 12:
        case 13:
          if (!(i < a)) {
            throw new Error("Unfinished UTF-8 octet sequence");
          }

          r[o] = (31 & s) << 6 | 63 & t[i++];
          break;

        case 14:
          if (!(i + 1 < a)) {
            throw new Error("Unfinished UTF-8 octet sequence");
          }

          r[o] = (15 & s) << 12 | (63 & t[i++]) << 6 | 63 & t[i++];
          break;

        case 15:
          if (!(i + 2 < a)) {
            throw new Error("Unfinished UTF-8 octet sequence");
          }

          var c = ((7 & s) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536;

          if (!(0 <= c && c <= 1048575)) {
            throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
          }

          r[o++] = c >> 10 & 1023 | 55296;
          r[o] = 1023 & c | 56320;
          break;

        default:
          throw new Error("Bad UTF-8 encoding 0x" + s.toString(16));
      }

      if (o >= 65534) {
        var l = o + 1;
        n.push(String.fromCharCode.apply(String, r.subarray(0, l)));
        e -= l;
        o = -1;
      }
    }

    if (o > 0) {
      n.push(String.fromCharCode.apply(String, r.slice(0, o)));
    }

    return n.join("");
  };

  t.prototype.toString = function (t) {
    var e = t.length;

    if (0 === e) {
      return "";
    } else {
      if (e < 1e5) {
        return this.toShortString(t, e);
      } else {
        return this.toLongString(t, e);
      }
    }
  };

  return t;
}();

exports.myXxtea = r;

cc._RF.pop();