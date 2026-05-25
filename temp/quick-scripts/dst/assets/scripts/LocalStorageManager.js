
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/LocalStorageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95077rH7rBOAKUxdnAjyC8H', 'LocalStorageManager');
// scripts/LocalStorageManager.js

"use strict";

var $localStorageConst = require("./LocalStorageConst");

var o = new (function () {
  function t() {
    this.data = {};
    this.gameName = "oldDriver_";
  }

  t.prototype.init = function (t, e) {
    var n = this.get($localStorageConst["default"].offlineTime) || new Date().getTime();
    this.set($localStorageConst["default"].offlineTime, n);
    this.nextDayRefresh(t, e);
  };

  t.prototype.nextDayRefresh = function (t, e) {
    var n = new Date().getTime();
    var o = this.data[$localStorageConst["default"].offlineTime];

    if (!this.isSameMonth() && e) {
      for (var i in e) {
        this.set(i, e[i]);
      }
    }

    if (!this.isSameDay() && n > o) {
      this.set($localStorageConst["default"].offlineTime, n);

      if (!t) {
        return;
      }

      for (var i in t) {
        this.set(i, t[i]);
      }
    }
  };

  t.prototype.isSameDay = function () {
    var t = new Date();
    var e = new Date(this.data[$localStorageConst["default"].offlineTime]);
    return t.getDate() === e.getDate() && t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
  };

  t.prototype.isSameMonth = function () {
    var t = new Date();
    var e = new Date(this.data[$localStorageConst["default"].offlineTime]);
    return t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
  };

  t.prototype.set = function (t, e, n, r) {
    if (void 0 === n) {
      n = !0;
    }

    if (void 0 === r) {
      r = !0;
    }

    this.data[t] = e;

    if (r) {
      cc.sys.localStorage.setItem("" + this.gameName + t, JSON.stringify(e));
    }

    if (n) {
      cc.game.emit("localStorage_" + t, e);
    }
  };

  t.prototype.get = function (t) {
    if (this.data[t]) {
      return this.data[t];
    }

    var e = cc.sys.localStorage.getItem("" + this.gameName + t);

    if (e) {
      return JSON.parse(e);
    } else {
      return null;
    }
  };

  t.prototype.remove = function (t) {
    delete this.data[t];
    cc.sys.localStorage.removeItem("" + this.gameName + t);
  };

  t.prototype.clear = function () {
    this.data = {};
    cc.sys.localStorage.clear();
  };

  t.prototype.console = function (t) {
    console.log(this.data[t]);
  };

  return t;
}())();
exports["default"] = o;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0xvY2FsU3RvcmFnZU1hbmFnZXIuanMiXSwibmFtZXMiOlsiJGxvY2FsU3RvcmFnZUNvbnN0IiwicmVxdWlyZSIsIm8iLCJ0IiwiZGF0YSIsImdhbWVOYW1lIiwicHJvdG90eXBlIiwiaW5pdCIsImUiLCJuIiwiZ2V0Iiwib2ZmbGluZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNldCIsIm5leHREYXlSZWZyZXNoIiwiaXNTYW1lTW9udGgiLCJpIiwiaXNTYW1lRGF5IiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJyIiwiY2MiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdhbWUiLCJlbWl0IiwiZ2V0SXRlbSIsInBhcnNlIiwicmVtb3ZlIiwicmVtb3ZlSXRlbSIsImNsZWFyIiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsa0JBQWtCLEdBQUdDLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQzs7QUFDQSxJQUFJQyxDQUFDLEdBQUcsS0FBTSxZQUFZO0VBQ3RCLFNBQVNDLENBQVQsR0FBYTtJQUNULEtBQUtDLElBQUwsR0FBWSxFQUFaO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixZQUFoQjtFQUNIOztFQUNERixDQUFDLENBQUNHLFNBQUYsQ0FBWUMsSUFBWixHQUFtQixVQUFVSixDQUFWLEVBQWFLLENBQWIsRUFBZ0I7SUFDL0IsSUFBSUMsQ0FBQyxHQUFHLEtBQUtDLEdBQUwsQ0FBU1Ysa0JBQWtCLFdBQWxCLENBQTJCVyxXQUFwQyxLQUFvRCxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBNUQ7SUFDQSxLQUFLQyxHQUFMLENBQVNkLGtCQUFrQixXQUFsQixDQUEyQlcsV0FBcEMsRUFBaURGLENBQWpEO0lBQ0EsS0FBS00sY0FBTCxDQUFvQlosQ0FBcEIsRUFBdUJLLENBQXZCO0VBQ0gsQ0FKRDs7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YWdlQ29uc3QgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VDb25zdFwiKTtcbnZhciBvID0gbmV3ICgoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLmdhbWVOYW1lID0gXCJvbGREcml2ZXJfXCI7XG4gICAgfVxuICAgIHQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuZ2V0KCRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lm9mZmxpbmVUaW1lKSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5zZXQoJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQub2ZmbGluZVRpbWUsIG4pO1xuICAgICAgICB0aGlzLm5leHREYXlSZWZyZXNoKHQsIGUpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUubmV4dERheVJlZnJlc2ggPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbyA9IHRoaXMuZGF0YVskbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5vZmZsaW5lVGltZV07XG4gICAgICAgIGlmICghdGhpcy5pc1NhbWVNb250aCgpICYmIGUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZSkgdGhpcy5zZXQoaSwgZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzU2FtZURheSgpICYmIG4gPiBvKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgkbG9jYWxTdG9yYWdlQ29uc3QuZGVmYXVsdC5vZmZsaW5lVGltZSwgbik7XG4gICAgICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHQpIHRoaXMuc2V0KGksIHRbaV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5pc1NhbWVEYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGFbJGxvY2FsU3RvcmFnZUNvbnN0LmRlZmF1bHQub2ZmbGluZVRpbWVdKTtcbiAgICAgICAgcmV0dXJuIHQuZ2V0RGF0ZSgpID09PSBlLmdldERhdGUoKSAmJiB0LmdldE1vbnRoKCkgPT09IGUuZ2V0TW9udGgoKSAmJiB0LmdldEZ1bGxZZWFyKCkgPT09IGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmlzU2FtZU1vbnRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBlID0gbmV3IERhdGUodGhpcy5kYXRhWyRsb2NhbFN0b3JhZ2VDb25zdC5kZWZhdWx0Lm9mZmxpbmVUaW1lXSk7XG4gICAgICAgIHJldHVybiB0LmdldE1vbnRoKCkgPT09IGUuZ2V0TW9udGgoKSAmJiB0LmdldEZ1bGxZZWFyKCkgPT09IGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh0LCBlLCBuLCByKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG4pIHtcbiAgICAgICAgICAgIG4gPSAhMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm9pZCAwID09PSByKSB7XG4gICAgICAgICAgICByID0gITA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhW3RdID0gZTtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlwiICsgdGhpcy5nYW1lTmFtZSArIHQsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwibG9jYWxTdG9yYWdlX1wiICsgdCwgZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFbdF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbdF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJcIiArIHRoaXMuZ2FtZU5hbWUgKyB0KTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbdF07XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIlwiICsgdGhpcy5nYW1lTmFtZSArIHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5jb25zb2xlID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhW3RdKTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IG87XG4iXX0=