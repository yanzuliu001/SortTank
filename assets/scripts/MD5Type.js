exports.Md5 = void 0;
var r = (function () {
    function t() {}
    t.prototype.safeAdd = function (t, e) {
        var n = (65535 & t) + (65535 & e);
        return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
    };
    t.prototype.bitRotateLeft = function (t, e) {
        return (t << e) | (t >>> (32 - e));
    };
    t.prototype.md5cmn = function (t, e, n, r, o, i) {
        return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(e, t), this.safeAdd(r, i)), o), n);
    };
    t.prototype.md5ff = function (t, e, n, r, o, i, a) {
        return this.md5cmn((e & n) | (~e & r), t, e, o, i, a);
    };
    t.prototype.md5gg = function (t, e, n, r, o, i, a) {
        return this.md5cmn((e & r) | (n & ~r), t, e, o, i, a);
    };
    t.prototype.md5hh = function (t, e, n, r, o, i, a) {
        return this.md5cmn(e ^ n ^ r, t, e, o, i, a);
    };
    t.prototype.md5ii = function (t, e, n, r, o, i, a) {
        return this.md5cmn(n ^ (e | ~r), t, e, o, i, a);
    };
    t.prototype.binlMD5 = function (t, e) {
        var n;
        var r;
        var o;
        var i;
        var a;
        t[e >> 5] |= 128 << e % 32;
        t[14 + (((e + 64) >>> 9) << 4)] = e;
        var s = 1732584193;
        var c = -271733879;
        var l = -1732584194;
        var u = 271733878;
        for (n = 0; n < t.length; n += 16) {
            r = s;
            o = c;
            i = l;
            a = u;
            s = this.md5ff(s, c, l, u, t[n], 7, -680876936);
            u = this.md5ff(u, s, c, l, t[n + 1], 12, -389564586);
            l = this.md5ff(l, u, s, c, t[n + 2], 17, 606105819);
            c = this.md5ff(c, l, u, s, t[n + 3], 22, -1044525330);
            s = this.md5ff(s, c, l, u, t[n + 4], 7, -176418897);
            u = this.md5ff(u, s, c, l, t[n + 5], 12, 1200080426);
            l = this.md5ff(l, u, s, c, t[n + 6], 17, -1473231341);
            c = this.md5ff(c, l, u, s, t[n + 7], 22, -45705983);
            s = this.md5ff(s, c, l, u, t[n + 8], 7, 1770035416);
            u = this.md5ff(u, s, c, l, t[n + 9], 12, -1958414417);
            l = this.md5ff(l, u, s, c, t[n + 10], 17, -42063);
            c = this.md5ff(c, l, u, s, t[n + 11], 22, -1990404162);
            s = this.md5ff(s, c, l, u, t[n + 12], 7, 1804603682);
            u = this.md5ff(u, s, c, l, t[n + 13], 12, -40341101);
            l = this.md5ff(l, u, s, c, t[n + 14], 17, -1502002290);
            c = this.md5ff(c, l, u, s, t[n + 15], 22, 1236535329);
            s = this.md5gg(s, c, l, u, t[n + 1], 5, -165796510);
            u = this.md5gg(u, s, c, l, t[n + 6], 9, -1069501632);
            l = this.md5gg(l, u, s, c, t[n + 11], 14, 643717713);
            c = this.md5gg(c, l, u, s, t[n], 20, -373897302);
            s = this.md5gg(s, c, l, u, t[n + 5], 5, -701558691);
            u = this.md5gg(u, s, c, l, t[n + 10], 9, 38016083);
            l = this.md5gg(l, u, s, c, t[n + 15], 14, -660478335);
            c = this.md5gg(c, l, u, s, t[n + 4], 20, -405537848);
            s = this.md5gg(s, c, l, u, t[n + 9], 5, 568446438);
            u = this.md5gg(u, s, c, l, t[n + 14], 9, -1019803690);
            l = this.md5gg(l, u, s, c, t[n + 3], 14, -187363961);
            c = this.md5gg(c, l, u, s, t[n + 8], 20, 1163531501);
            s = this.md5gg(s, c, l, u, t[n + 13], 5, -1444681467);
            u = this.md5gg(u, s, c, l, t[n + 2], 9, -51403784);
            l = this.md5gg(l, u, s, c, t[n + 7], 14, 1735328473);
            c = this.md5gg(c, l, u, s, t[n + 12], 20, -1926607734);
            s = this.md5hh(s, c, l, u, t[n + 5], 4, -378558);
            u = this.md5hh(u, s, c, l, t[n + 8], 11, -2022574463);
            l = this.md5hh(l, u, s, c, t[n + 11], 16, 1839030562);
            c = this.md5hh(c, l, u, s, t[n + 14], 23, -35309556);
            s = this.md5hh(s, c, l, u, t[n + 1], 4, -1530992060);
            u = this.md5hh(u, s, c, l, t[n + 4], 11, 1272893353);
            l = this.md5hh(l, u, s, c, t[n + 7], 16, -155497632);
            c = this.md5hh(c, l, u, s, t[n + 10], 23, -1094730640);
            s = this.md5hh(s, c, l, u, t[n + 13], 4, 681279174);
            u = this.md5hh(u, s, c, l, t[n], 11, -358537222);
            l = this.md5hh(l, u, s, c, t[n + 3], 16, -722521979);
            c = this.md5hh(c, l, u, s, t[n + 6], 23, 76029189);
            s = this.md5hh(s, c, l, u, t[n + 9], 4, -640364487);
            u = this.md5hh(u, s, c, l, t[n + 12], 11, -421815835);
            l = this.md5hh(l, u, s, c, t[n + 15], 16, 530742520);
            c = this.md5hh(c, l, u, s, t[n + 2], 23, -995338651);
            s = this.md5ii(s, c, l, u, t[n], 6, -198630844);
            u = this.md5ii(u, s, c, l, t[n + 7], 10, 1126891415);
            l = this.md5ii(l, u, s, c, t[n + 14], 15, -1416354905);
            c = this.md5ii(c, l, u, s, t[n + 5], 21, -57434055);
            s = this.md5ii(s, c, l, u, t[n + 12], 6, 1700485571);
            u = this.md5ii(u, s, c, l, t[n + 3], 10, -1894986606);
            l = this.md5ii(l, u, s, c, t[n + 10], 15, -1051523);
            c = this.md5ii(c, l, u, s, t[n + 1], 21, -2054922799);
            s = this.md5ii(s, c, l, u, t[n + 8], 6, 1873313359);
            u = this.md5ii(u, s, c, l, t[n + 15], 10, -30611744);
            l = this.md5ii(l, u, s, c, t[n + 6], 15, -1560198380);
            c = this.md5ii(c, l, u, s, t[n + 13], 21, 1309151649);
            s = this.md5ii(s, c, l, u, t[n + 4], 6, -145523070);
            u = this.md5ii(u, s, c, l, t[n + 11], 10, -1120210379);
            l = this.md5ii(l, u, s, c, t[n + 2], 15, 718787259);
            c = this.md5ii(c, l, u, s, t[n + 9], 21, -343485551);
            s = this.safeAdd(s, r);
            c = this.safeAdd(c, o);
            l = this.safeAdd(l, i);
            u = this.safeAdd(u, a);
        }
        return [s, c, l, u];
    };
    t.prototype.binl2rstr = function (t) {
        var e;
        var n = "";
        var r = 32 * t.length;
        for (e = 0; e < r; e += 8) {
            n += String.fromCharCode((t[e >> 5] >>> e % 32) & 255);
        }
        return n;
    };
    t.prototype.rstr2binl = function (t) {
        var e;
        var n = [];
        n[(t.length >> 2) - 1] = void 0;
        for (e = 0; e < n.length; e += 1) {
            n[e] = 0;
        }
        var r = 8 * t.length;
        for (e = 0; e < r; e += 8) {
            n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        }
        return n;
    };
    t.prototype.rstrMD5 = function (t) {
        return this.binl2rstr(this.binlMD5(this.rstr2binl(t), 8 * t.length));
    };
    t.prototype.rstrHMACMD5 = function (t, e) {
        var n;
        var r;
        var o = this.rstr2binl(t);
        var i = [];
        var a = [];
        i[15] = a[15] = void 0;
        if (o.length > 16) {
            o = this.binlMD5(o, 8 * t.length);
        }
        for (n = 0; n < 16; n += 1) {
            i[n] = 909522486 ^ o[n];
            a[n] = 1549556828 ^ o[n];
        }
        r = this.binlMD5(i.concat(this.rstr2binl(e)), 512 + 8 * e.length);
        return this.binl2rstr(this.binlMD5(a.concat(r), 640));
    };
    t.prototype.rstr2hex = function (t) {
        var e;
        var n;
        var r = "";
        for (n = 0; n < t.length; n += 1) {
            e = t.charCodeAt(n);
            r += "0123456789abcdef".charAt((e >>> 4) & 15) + "0123456789abcdef".charAt(15 & e);
        }
        return r;
    };
    t.prototype.str2rstrUTF8 = function (t) {
        return unescape(encodeURIComponent(t));
    };
    t.prototype.rawMD5 = function (t) {
        return this.rstrMD5(this.str2rstrUTF8(t));
    };
    t.prototype.hexMD5 = function (t) {
        return this.rstr2hex(this.rawMD5(t));
    };
    t.prototype.rawHMACMD5 = function (t, e) {
        return this.rstrHMACMD5(this.str2rstrUTF8(t), this.str2rstrUTF8(e));
    };
    t.prototype.hexHMACMD5 = function (t, e) {
        return this.rstr2hex(this.rawHMACMD5(t, e));
    };
    t.prototype.md5 = function (t, e, n) {
        if (e) {
            if (n) {
                return this.rawHMACMD5(e, t);
            } else {
                return this.hexHMACMD5(e, t);
            }
        } else {
            if (n) {
                return this.rawMD5(t);
            } else {
                return this.hexMD5(t);
            }
        }
    };
    return t;
})();
exports.Md5 = r;
