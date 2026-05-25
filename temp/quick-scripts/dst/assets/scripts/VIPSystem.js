
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/VIPSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62a3cUDSBpAx7vj0LlIgCaQ', 'VIPSystem');
// scripts/VIPSystem.js

"use strict";

var $localStorageConst = require("./LocalStorageConst");

var $localStorageManager = require("./LocalStorageManager");

var $memoryStorageConst = require("./MemoryStorageConst");

var $memoryStorageManager = require("./MemoryStorageManager");

var $timeManager = require("./TimeManager");

var $languageManager = require("./LanguageManager");

var l = new (function () {
  function t() {
    this.vipIndexArr = [3, 7, 30];
    this.cardRewardArr = [5, 20, 60];
    this.surplusTime = 0;
    this.surplusTimeID = null;
  }

  t.prototype.init = function () {
    var t = this;
    var e = !1;
    var n = $timeManager["default"].getCurrentTime(); // try {
    //     e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIsVip", "()Z");
    //     console.log("获取是否是VIP", e);
    // } catch (u) {
    // console.log("checkIsSubscribeValid error:", u);

    var c = $localStorageManager["default"].get($localStorageConst["default"].vipStartTime) || 0;
    var l = $localStorageManager["default"].get($localStorageConst["default"].vipType) || 3;

    if (c) {
      if (864e5 * l - (n - c) > 0) {
        e = !0;
      } else {
        $localStorageManager["default"].set($localStorageConst["default"].vipStartTime, 0);
      }
    } // }


    $memoryStorageManager["default"].set($memoryStorageConst["default"].isVIP, e);

    if (e) {
      l = $localStorageManager["default"].get($localStorageConst["default"].vipType) || 3;
      c = $localStorageManager["default"].get($localStorageConst["default"].vipStartTime) || n;
      this.surplusTime = 864e5 * l - (n - c);
      this.surplusTimeID = setInterval(function () {
        t.surplusTime -= 1e4;

        if (t.surplusTime <= 0) {
          clearInterval(t.surplusTimeID);
          console.log("vip到期");
          cc.game.emit("vipExpire");
        }
      }, 1e4);
    } else {
      $localStorageManager["default"].set($localStorageConst["default"].vipType, 3);
    }
  };

  t.prototype.getSurplusTimeStr = function () {
    var t = $timeManager["default"].getCurrentTime();
    var e = 864e5 * ($localStorageManager["default"].get($localStorageConst["default"].vipType) || 3) - (t - ($localStorageManager["default"].get($localStorageConst["default"].vipStartTime) || t));
    var n = e / 864e5;
    var i = e / 36e5 % 24;
    console.log("VIP剩余时间:", e, Math.floor(n) + "天" + Math.floor(i) + "时");
    return $languageManager["default"].formatStr("%d天%d时", Math.floor(n), Math.floor(i));
  };

  return t;
}())();
exports["default"] = l;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1ZJUFN5c3RlbS5qcyJdLCJuYW1lcyI6WyIkbG9jYWxTdG9yYWdlQ29uc3QiLCJyZXF1aXJlIiwiJGxvY2FsU3RvcmFnZU1hbmFnZXIiLCIkbWVtb3J5U3RvcmFnZUNvbnN0IiwiJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyIiwiJHRpbWVNYW5hZ2VyIiwiJGxhbmd1YWdlTWFuYWdlciIsImwiLCJ0IiwidmlwSW5kZXhBcnIiLCJjYXJkUmV3YXJkQXJyIiwic3VycGx1c1RpbWUiLCJzdXJwbHVzVGltZUlEIiwicHJvdG90eXBlIiwiaW5pdCIsImUiLCJuIiwiZ2V0Q3VycmVudFRpbWUiLCJjIiwiZ2V0IiwidmlwU3RhcnRUaW1lIiwidmlwVHlwZSIsInNldCIsImlzVklQIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY29uc29sZSIsImxvZyIsImNjIiwiZ2FtZSIsImVtaXQiLCJnZXRTdXJwbHVzVGltZVN0ciIsImkiLCJNYXRoIiwiZmxvb3IiLCJmb3JtYXRTdHIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGtCQUFrQixHQUFHQyxPQUFPLENBQUMscUJBQUQsQ0FBaEM7O0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUdELE9BQU8sQ0FBQyx1QkFBRCxDQUFsQzs7QUFDQSxJQUFJRSxtQkFBbUIsR0FBR0YsT0FBTyxDQUFDLHNCQUFELENBQWpDOztBQUNBLElBQUlHLHFCQUFxQixHQUFHSCxPQUFPLENBQUMsd0JBQUQsQ0FBbkM7O0FBQ0EsSUFBSUksWUFBWSxHQUFHSixPQUFPLENBQUMsZUFBRCxDQUExQjs7QUFDQSxJQUFJSyxnQkFBZ0IsR0FBR0wsT0FBTyxDQUFDLG1CQUFELENBQTlCOztBQUNBLElBQUlNLENBQUMsR0FBRyxLQUFLLFlBQVc7RUFDcEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsV0FBTCxHQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxD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LEtBQVo7SUFDQSxJQUFJaUIsQ0FBQyxHQUFJakIsQ0FBQyxHQUFHLElBQUwsR0FBYSxFQUFyQjtJQUNBVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCWixDQUF4QixFQUEyQmtCLElBQUksQ0FBQ0MsS0FBTCxDQUFXbEIsQ0FBWCxJQUFnQixHQUFoQixHQUFzQmlCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixDQUFYLENBQXRCLEdBQXNDLEdBQWpFO0lBQ0EsT0FBTzFCLGdCQUFnQixXQUFoQixDQUF5QjZCLFNBQXpCLENBQW1DLFFBQW5DLEVBQTZDRixJQUFJLENBQUNDLEtBQUwsQ0FBV2xCLENBQVgsQ0FBN0MsRUFBNERpQixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBWCxDQUE1RCxDQUFQO0VBQ0gsQ0FURDs7RUFVQSxPQUFPeEIsQ0FBUDtBQUNILENBdERXLEVBQUosR0FBUjtBQXVEQTRCLE9BQU8sV0FBUCxHQUFrQjdCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGxvY2FsU3RvcmFnZUNvbnN0ID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlQ29uc3RcIik7XG52YXIgJGxvY2FsU3RvcmFnZU1hbmFnZXIgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VNYW5hZ2VyXCIpO1xudmFyICRtZW1vcnlTdG9yYWdlQ29uc3QgPSByZXF1aXJlKFwiLi9NZW1vcnlTdG9yYWdlQ29uc3RcIik7XG52YXIgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyID0gcmVxdWlyZShcIi4vTWVtb3J5U3RvcmFnZU1hbmFnZXJcIik7XG52YXIgJHRpbWVNYW5hZ2VyID0gcmVxdWlyZShcIi4vVGltZU1hbmFnZXJcIik7XG52YXIgJGxhbmd1YWdlTWFuYWdlciA9IHJlcXVpcmUoXCIuL0xhbmd1YWdlTWFuYWdlclwiKTtcbnZhciBsID0gbmV3KChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLnZpcEluZGV4QXJyID0gWzMsIDcsIDMwXTtcbiAgICAgICAgdGhpcy5jYXJkUmV3YXJkQXJyID0gWzUsIDIwLCA2MF07XG4gICAgICAgIHRoaXMuc3VycGx1c1RpbWUgPSAwO1xuICAgICAgICB0aGlzLnN1cnBsdXNUaW1lSUQgPSBudWxsO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSAhMTtcbiAgICAgICAgdmFyIG4gPSAkdGltZU1hbmFnZXIuZGVmYXVsdC5nZXRDdXJyZW50VGltZSgpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICAvLyAgICAgZSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImdldElzVmlwXCIsIFwiKClaXCIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLojrflj5bmmK/lkKbmmK9WSVBcIiwgZSk7XG4gICAgICAgIC8vIH0gY2F0Y2ggKHUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja0lzU3Vic2NyaWJlVmFsaWQgZXJyb3I6XCIsIHUpO1xuICAgICAgICB2YXIgYyA9ICRsb2NhbFN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0LnZpcFN0YXJ0VGltZSkgfHwgMDtcbiAgICAgICAgdmFyIGwgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC52aXBUeXBlKSB8fCAzO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgaWYgKDg2NGU1ICogbCAtIChuIC0gYykgPiAwKSB7XG4gICAgICAgICAgICAgICAgZSA9ICEwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC52aXBTdGFydFRpbWUsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgJG1lbW9yeVN0b3JhZ2VNYW5hZ2VyLmRlZmF1bHQuc2V0KCRtZW1vcnlTdG9yYWdlQ29uc3QuZGVmYXVsdC5pc1ZJUCwgZSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBsID0gJGxvY2FsU3RvcmFnZU1hbmFnZXIuZGVmYXVsdC5nZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQudmlwVHlwZSkgfHwgMztcbiAgICAgICAgICAgIGMgPSAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC52aXBTdGFydFRpbWUpIHx8IG47XG4gICAgICAgICAgICB0aGlzLnN1cnBsdXNUaW1lID0gODY0ZTUgKiBsIC0gKG4gLSBjKTtcbiAgICAgICAgICAgIHRoaXMuc3VycGx1c1RpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHQuc3VycGx1c1RpbWUgLT0gMWU0O1xuICAgICAgICAgICAgICAgIGlmICh0LnN1cnBsdXNUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0LnN1cnBsdXNUaW1lSUQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpcOWIsOacn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwidmlwRXhwaXJlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDFlNCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC52aXBUeXBlLCAzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuZ2V0U3VycGx1c1RpbWVTdHIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSAkdGltZU1hbmFnZXIuZGVmYXVsdC5nZXRDdXJyZW50VGltZSgpO1xuICAgICAgICB2YXIgZSA9XG4gICAgICAgICAgICA4NjRlNSAqICgkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC52aXBUeXBlKSB8fCAzKSAtXG4gICAgICAgICAgICAodCAtICgkbG9jYWxTdG9yYWdlTWFuYWdlci5kZWZhdWx0LmdldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC52aXBTdGFydFRpbWUpIHx8IHQpKTtcbiAgICAgICAgdmFyIG4gPSBlIC8gODY0ZTU7XG4gICAgICAgIHZhciBpID0gKGUgLyAzNmU1KSAlIDI0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlZJUOWJqeS9meaXtumXtDpcIiwgZSwgTWF0aC5mbG9vcihuKSArIFwi5aSpXCIgKyBNYXRoLmZsb29yKGkpICsgXCLml7ZcIik7XG4gICAgICAgIHJldHVybiAkbGFuZ3VhZ2VNYW5hZ2VyLmRlZmF1bHQuZm9ybWF0U3RyKFwiJWTlpKklZOaXtlwiLCBNYXRoLmZsb29yKG4pLCBNYXRoLmZsb29yKGkpKTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGw7Il19