
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Params.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a6d1YPVA5N1p72U30IiXST', 'Params');
// scripts/Params.js

"use strict";

var $localStorage = require("./LocalStorage");

var o = function () {
  function t() {
    this._showParams = {};
    this._gameParams = {
      app_name: "",
      channel: "",
      version: ""
    };
    this._userParams = {
      openid: ""
    };
    this._openidKey = "sdk_openid";
    this._userParams.openid = $localStorage["default"].getItem(this._openidKey);
  }

  t.prototype.setShowParams = function (t) {
    return this._showParams = t;
  };

  t.prototype.getShowParams = function (t) {
    if (void 0 === t) {
      t = "";
    }

    return "" === t ? this._showParams : void 0 === this._showParams[t] ? "" : this._showParams[t];
  };

  t.prototype.setGameParams = function (t) {
    t.channel = "tt_minigame";
    return this._gameParams = t;
  };

  t.prototype.getGameParams = function (t) {
    if (void 0 === t) {
      t = "";
    }

    return "" === t ? this._gameParams : void 0 === this._gameParams[t] ? "" : this._gameParams[t];
  };

  t.prototype.setUserParams = function (t) {
    $localStorage["default"].setItem(this._openidKey, void 0 === t.openid ? "" : t.openid);
    return this._userParams = t;
  };

  t.prototype.getUserParams = function (t) {
    if (void 0 === t) {
      t = "";
    }

    return "" === t ? this._userParams : void 0 === this._userParams[t] ? "" : this._userParams[t];
  };

  return t;
}();

exports["default"] = new o();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BhcmFtcy5qcyJdLCJuYW1lcyI6WyIkbG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsIm8iLCJ0IiwiX3Nob3dQYXJhbXMiLCJfZ2FtZVBhcmFtcyIsImFwcF9uYW1lIiwiY2hhbm5lbCIsInZlcnNpb24iLCJfdXNlclBhcmFtcyIsIm9wZW5pZCIsIl9vcGVuaWRLZXkiLCJnZXRJdGVtIiwicHJvdG90eXBlIiwic2V0U2hvd1BhcmFtcyIsImdldFNob3dQYXJhbXMiLCJzZXRHYW1lUGFyYW1zIiwiZ2V0R2FtZVBhcmFtcyIsInNldFVzZXJQYXJhbXMiLCJzZXRJdGVtIiwiZ2V0VXNlclBhcmFtcyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsV0FBTCxHQUFtQixFQUFuQjtJQUNBLEtBQUtDLFdBQUwsR0FBbUI7TUFDZkMsUUFBUSxFQUFFLEVBREs7TUFFZkMsT0FBTyxFQUFFLEVBRk07TUFHZkMsT0FBTyxFQUFFO0lBSE0sQ0FBbkI7SUFLQSxLQUFLQyxXQUFMLEdBQW1CO01BQ2ZDLE1BQU0sRUFBRTtJQURPLENBQW5CO0lBR0EsS0FBS0MsVUFBTCxHQUFrQixZQUFsQjtJQUNBLEtBQUtGLFdBQUwsQ0FBaUJDLE1BQWpCLEdBQTBCVixhQUFhLFdBQWIsQ0FBc0JZLE9BQXRCLENBQThCLEtBQUtELFVBQW5DLENBQTFCO0VBQ0g7O0VBQ0RSLENBQUMsQ0FBQ1UsU0FBRixDQUFZQyxhQUFaLEdBQTRCLFVBQVVYLENBQVYsRUFBYTtJQUNyQyxPQUFRLEtBQUtDLFdBQUwsR0FBbUJELENBQTNCO0VBQ0gsQ0FGRDs7RUFHQUEsQ0FBQyxDQUFDVSxTQUFGLENBQVlFLGFBQVosR0FBNEIsVUFBVVosQ0FBVixFQUFhO0lBQ3JDLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLEVBQUo7SUFDSDs7SUFDRCxPQUFPLE9BQU9BLENBQVAsR0FBVyxLQUFLQyxXQUFoQixHQUE4QixLQUFLLENBQUwsS0FBVyxLQUFLQSxXQUFMLENBQWlCRCxDQUFqQixDQUFYLEdBQWlDLEVBQWpDLEdBQXNDLEtBQUtDLFdBQUwsQ0FBaUJELENBQWpCLENBQTNFO0VBQ0gsQ0FMRDs7RUFNQUEsQ0FBQyxDQUFDVSxTQUFGLENBQVlHLGFBQVosR0FBNEIsVUFBVWIsQ0FBVixFQUFhO0lBQ3JDQSxDQUFDLENBQUNJLE9BQUYsR0FBWSxhQUFaO0lBQ0EsT0FBUSxLQUFLRixXQUFMLEdBQW1CRixDQUEzQjtFQUNILENBSEQ7O0VBSUFBLENBQUMsQ0FBQ1UsU0FBRixDQUFZSSxhQUFaLEdBQTRCLFVBQVVkLENBQVYsRUFBYTtJQUNyQyxJQUFJLEtBQUssQ0FBTCxLQUFXQSxDQUFmLEVBQWtCO01BQ2RBLENBQUMsR0FBRyxFQUFKO0lBQ0g7O0lBQ0QsT0FBTyxPQUFPQSxDQUFQLEdBQVcsS0FBS0UsV0FBaEIsR0FBOEIsS0FBSyxDQUFMLEtBQVcsS0FBS0EsV0FBTCxDQUFpQkYsQ0FBakIsQ0FBWCxHQUFpQyxFQUFqQyxHQUFzQyxLQUFLRSxXQUFMLENBQWlCRixDQUFqQixDQUEzRTtFQUNILENBTEQ7O0VBTUFBLENBQUMsQ0FBQ1UsU0FBRixDQUFZSyxhQUFaLEdBQTRCLFVBQVVmLENBQVYsRUFBYTtJQUNyQ0gsYUFBYSxXQUFiLENBQXNCbUIsT0FBdEIsQ0FBOEIsS0FBS1IsVUFBbkMsRUFBK0MsS0FBSyxDQUFMLEtBQVdSLENBQUMsQ0FBQ08sTUFBYixHQUFzQixFQUF0QixHQUEyQlAsQ0FBQyxDQUFDTyxNQUE1RTtJQUNBLE9BQVEsS0FBS0QsV0FBTCxHQUFtQk4sQ0FBM0I7RUFDSCxDQUhEOztFQUlBQSxDQUFDLENBQUNVLFNBQUYsQ0FBWU8sYUFBWixHQUE0QixVQUFVakIsQ0FBVixFQUFhO0lBQ3JDLElBQUksS0FBSyxDQUFMLEtBQVdBLENBQWYsRUFBa0I7TUFDZEEsQ0FBQyxHQUFHLEVBQUo7SUFDSDs7SUFDRCxPQUFPLE9BQU9BLENBQVAsR0FBVyxLQUFLTSxXQUFoQixHQUE4QixLQUFLLENBQUwsS0FBVyxLQUFLQSxXQUFMLENBQWlCTixDQUFqQixDQUFYLEdBQWlDLEVBQWpDLEdBQXNDLEtBQUtNLFdBQUwsQ0FBaUJOLENBQWpCLENBQTNFO0VBQ0gsQ0FMRDs7RUFNQSxPQUFPQSxDQUFQO0FBQ0gsQ0E1Q08sRUFBUjs7QUE2Q0FrQixPQUFPLFdBQVAsR0FBa0IsSUFBSW5CLENBQUosRUFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkbG9jYWxTdG9yYWdlID0gcmVxdWlyZShcIi4vTG9jYWxTdG9yYWdlXCIpO1xudmFyIG8gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuX3Nob3dQYXJhbXMgPSB7fTtcbiAgICAgICAgdGhpcy5fZ2FtZVBhcmFtcyA9IHtcbiAgICAgICAgICAgIGFwcF9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgY2hhbm5lbDogXCJcIixcbiAgICAgICAgICAgIHZlcnNpb246IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fdXNlclBhcmFtcyA9IHtcbiAgICAgICAgICAgIG9wZW5pZDogXCJcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9vcGVuaWRLZXkgPSBcInNka19vcGVuaWRcIjtcbiAgICAgICAgdGhpcy5fdXNlclBhcmFtcy5vcGVuaWQgPSAkbG9jYWxTdG9yYWdlLmRlZmF1bHQuZ2V0SXRlbSh0aGlzLl9vcGVuaWRLZXkpO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5zZXRTaG93UGFyYW1zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zaG93UGFyYW1zID0gdCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTaG93UGFyYW1zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgdCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCIgPT09IHQgPyB0aGlzLl9zaG93UGFyYW1zIDogdm9pZCAwID09PSB0aGlzLl9zaG93UGFyYW1zW3RdID8gXCJcIiA6IHRoaXMuX3Nob3dQYXJhbXNbdF07XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRHYW1lUGFyYW1zID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdC5jaGFubmVsID0gXCJ0dF9taW5pZ2FtZVwiO1xuICAgICAgICByZXR1cm4gKHRoaXMuX2dhbWVQYXJhbXMgPSB0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEdhbWVQYXJhbXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIiA9PT0gdCA/IHRoaXMuX2dhbWVQYXJhbXMgOiB2b2lkIDAgPT09IHRoaXMuX2dhbWVQYXJhbXNbdF0gPyBcIlwiIDogdGhpcy5fZ2FtZVBhcmFtc1t0XTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldFVzZXJQYXJhbXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAkbG9jYWxTdG9yYWdlLmRlZmF1bHQuc2V0SXRlbSh0aGlzLl9vcGVuaWRLZXksIHZvaWQgMCA9PT0gdC5vcGVuaWQgPyBcIlwiIDogdC5vcGVuaWQpO1xuICAgICAgICByZXR1cm4gKHRoaXMuX3VzZXJQYXJhbXMgPSB0KTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldFVzZXJQYXJhbXMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICB0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIiA9PT0gdCA/IHRoaXMuX3VzZXJQYXJhbXMgOiB2b2lkIDAgPT09IHRoaXMuX3VzZXJQYXJhbXNbdF0gPyBcIlwiIDogdGhpcy5fdXNlclBhcmFtc1t0XTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBvKCk7XG4iXX0=