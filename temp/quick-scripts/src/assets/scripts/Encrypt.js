"use strict";
cc._RF.push(module, '055b3rPwb9JkbapXeyhaQ+e', 'Encrypt');
// scripts/Encrypt.js

"use strict";

exports.Encrypt = void 0;

var $crypto_js = require("./crypto-js");

var o = function () {
  function t() {
    this.AesKey = "NO8tU0nT0iLQzHzO";
    this.CBCIV = "wt2y0aEzGcu0wTDE";
    this.CBCOptions = {
      iv: $crypto_js.enc.Utf8.parse(this.CBCIV),
      mode: $crypto_js.mode.CBC,
      padding: $crypto_js.pad.Pkcs7
    };
  }

  t.prototype.encrypt = function (t) {
    var e = $crypto_js.enc.Utf8.parse(this.AesKey);
    var n = $crypto_js.enc.Utf8.parse(t);
    return $crypto_js.AES.encrypt(n, e, this.CBCOptions).toString();
  };

  t.prototype.decrypt = function (t) {
    var e = $crypto_js.enc.Utf8.parse(this.AesKey);
    var n = $crypto_js.AES.decrypt(t, e, this.CBCOptions);
    return $crypto_js.enc.Utf8.stringify(n).toString();
  };

  return t;
}();

exports.Encrypt = o;

cc._RF.pop();