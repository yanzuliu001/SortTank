
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Encrypt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0VuY3J5cHQuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIkVuY3J5cHQiLCIkY3J5cHRvX2pzIiwicmVxdWlyZSIsIm8iLCJ0IiwiQWVzS2V5IiwiQ0JDSVYiLCJDQkNPcHRpb25zIiwiaXYiLCJlbmMiLCJVdGY4IiwicGFyc2UiLCJtb2RlIiwiQ0JDIiwicGFkZGluZyIsInBhZCIsIlBrY3M3IiwicHJvdG90eXBlIiwiZW5jcnlwdCIsImUiLCJuIiwiQUVTIiwidG9TdHJpbmciLCJkZWNyeXB0Iiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLE9BQVIsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCOztBQUNBLElBQUlDLENBQUMsR0FBSSxZQUFZO0VBQ2pCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLE1BQUwsR0FBYyxrQkFBZDtJQUNBLEtBQUtDLEtBQUwsR0FBYSxrQkFBYjtJQUNBLEtBQUtDLFVBQUwsR0FBa0I7TUFDZEMsRUFBRSxFQUFFUCxVQUFVLENBQUNRLEdBQVgsQ0FBZUMsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEIsS0FBS0wsS0FBL0IsQ0FEVTtNQUVkTSxJQUFJLEVBQUVYLFVBQVUsQ0FBQ1csSUFBWCxDQUFnQkMsR0FGUjtNQUdkQyxPQUFPLEVBQUViLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlQztJQUhWLENBQWxCO0VBS0g7O0VBQ0RaLENBQUMsQ0FBQ2EsU0FBRixDQUFZQyxPQUFaLEdBQXNCLFVBQVVkLENBQVYsRUFBYTtJQUMvQixJQUFJZSxDQUFDLEdBQUdsQixVQUFVLENBQUNRLEdBQVgsQ0FBZUMsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEIsS0FBS04sTUFBL0IsQ0FBUjtJQUNBLElBQUllLENBQUMsR0FBR25CLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlQyxJQUFmLENBQW9CQyxLQUFwQixDQUEwQlAsQ0FBMUIsQ0FBUjtJQUNBLE9BQU9ILFVBQVUsQ0FBQ29CLEdBQVgsQ0FBZUgsT0FBZixDQUF1QkUsQ0FBdkIsRUFBMEJELENBQTFCLEVBQTZCLEtBQUtaLFVBQWxDLEVBQThDZSxRQUE5QyxFQUFQO0VBQ0gsQ0FKRDs7RUFLQWxCLENBQUMsQ0FBQ2EsU0FBRixDQUFZTSxPQUFaLEdBQXNCLFVBQVVuQixDQUFWLEVBQWE7SUFDL0IsSUFBSWUsQ0FBQyxHQUFHbEIsVUFBVSxDQUFDUSxHQUFYLENBQWVDLElBQWYsQ0FBb0JDLEtBQXBCLENBQTBCLEtBQUtOLE1BQS9CLENBQVI7SUFDQSxJQUFJZSxDQUFDLEdBQUduQixVQUFVLENBQUNvQixHQUFYLENBQWVFLE9BQWYsQ0FBdUJuQixDQUF2QixFQUEwQmUsQ0FBMUIsRUFBNkIsS0FBS1osVUFBbEMsQ0FBUjtJQUNBLE9BQU9OLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlQyxJQUFmLENBQW9CYyxTQUFwQixDQUE4QkosQ0FBOUIsRUFBaUNFLFFBQWpDLEVBQVA7RUFDSCxDQUpEOztFQUtBLE9BQU9sQixDQUFQO0FBQ0gsQ0FyQk8sRUFBUjs7QUFzQkFMLE9BQU8sQ0FBQ0MsT0FBUixHQUFrQkcsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuRW5jcnlwdCA9IHZvaWQgMDtcbnZhciAkY3J5cHRvX2pzID0gcmVxdWlyZShcIi4vY3J5cHRvLWpzXCIpO1xudmFyIG8gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuQWVzS2V5ID0gXCJOTzh0VTBuVDBpTFF6SHpPXCI7XG4gICAgICAgIHRoaXMuQ0JDSVYgPSBcInd0MnkwYUV6R2N1MHdUREVcIjtcbiAgICAgICAgdGhpcy5DQkNPcHRpb25zID0ge1xuICAgICAgICAgICAgaXY6ICRjcnlwdG9fanMuZW5jLlV0ZjgucGFyc2UodGhpcy5DQkNJViksXG4gICAgICAgICAgICBtb2RlOiAkY3J5cHRvX2pzLm1vZGUuQ0JDLFxuICAgICAgICAgICAgcGFkZGluZzogJGNyeXB0b19qcy5wYWQuUGtjczdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdC5wcm90b3R5cGUuZW5jcnlwdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gJGNyeXB0b19qcy5lbmMuVXRmOC5wYXJzZSh0aGlzLkFlc0tleSk7XG4gICAgICAgIHZhciBuID0gJGNyeXB0b19qcy5lbmMuVXRmOC5wYXJzZSh0KTtcbiAgICAgICAgcmV0dXJuICRjcnlwdG9fanMuQUVTLmVuY3J5cHQobiwgZSwgdGhpcy5DQkNPcHRpb25zKS50b1N0cmluZygpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZGVjcnlwdCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gJGNyeXB0b19qcy5lbmMuVXRmOC5wYXJzZSh0aGlzLkFlc0tleSk7XG4gICAgICAgIHZhciBuID0gJGNyeXB0b19qcy5BRVMuZGVjcnlwdCh0LCBlLCB0aGlzLkNCQ09wdGlvbnMpO1xuICAgICAgICByZXR1cm4gJGNyeXB0b19qcy5lbmMuVXRmOC5zdHJpbmdpZnkobikudG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuRW5jcnlwdCA9IG87XG4iXX0=