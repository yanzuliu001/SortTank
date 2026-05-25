
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ReportQueue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0151tG12FDtIxnQTDkidOU', 'ReportQueue');
// scripts/ReportQueue.js

"use strict";

var $localStorage = require("./LocalStorage");

var o = new (function () {
  function t() {
    this._list = [];
    this._storageKey = "sdk_report_list";
    var t = $localStorage["default"].getItem(this._storageKey);

    if (t) {
      this._list = JSON.parse(t);
    } else {
      this._list = [];
    }
  }

  t.prototype.push = function (t) {
    var e = this._list.push(t);

    this.refeshStorage();
    return e;
  };

  t.prototype.pop = function () {
    var t = this._list.shift();

    this.refeshStorage();
    return t;
  };

  t.prototype.range = function (t, e) {
    var n = this._list.splice(t, e);

    this.refeshStorage();
    return n;
  };

  t.prototype.refeshStorage = function () {
    var t = JSON.stringify(this._list);
    return $localStorage["default"].setItem(this._storageKey, t);
  };

  t.prototype.len = function () {
    return this._list.length;
  };

  t.prototype.getList = function () {
    return this._list;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JlcG9ydFF1ZXVlLmpzIl0sIm5hbWVzIjpbIiRsb2NhbFN0b3JhZ2UiLCJyZXF1aXJlIiwibyIsInQiLCJfbGlzdCIsIl9zdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInByb3RvdHlwZSIsInB1c2giLCJlIiwicmVmZXNoU3RvcmFnZSIsInBvcCIsInNoaWZ0IiwicmFuZ2UiLCJuIiwic3BsaWNlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImxlbiIsImxlbmd0aCIsImdldExpc3QiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGdCQUFELENBQTNCOztBQUNBLElBQUlDLENBQUMsR0FBRyxLQUFNLFlBQVk7RUFDdEIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsS0FBTCxHQUFhLEVBQWI7SUFDQSxLQUFLQyxXQUFMLEdBQW1CLGlCQUFuQjtJQUNBLElBQUlGLENBQUMsR0FBR0gsYUFBYSxXQUFiLENBQXNCTSxPQUF0QixDQUE4QixLQUFLRCxXQUFuQyxDQUFSOztJQUNBLElBQUlGLENBQUosRUFBTztNQUNILEtBQUtDLEtBQUwsR0FBYUcsSUFBSSxDQUFDQyxLQUFMLENBQVdMLENBQVgsQ0FBYjtJQUNILENBRkQsTUFFTztNQUNILEtBQUtDLEtBQUwsR0FBYSxFQUFiO0lBQ0g7RUFDSjs7RUFDREQsQ0FBQyxDQUFDTSxTQUFGLENBQVlDLElBQVosR0FBbUIsVUFBVVAsQ0FBVixFQUFhO0lBQzVCLElBQUlRLENBQUMsR0FBRyxLQUFLUCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JQLENBQWhCLENBQVI7O0lBQ0EsS0FBS1MsYUFBTDtJQUNBLE9BQU9ELENBQVA7RUFDSCxDQUpEOztFQUtBUixDQUFDLENBQUNNLFNBQUYsQ0FBWUksR0FBWixHQUFrQixZQUFZO0lBQzFCLElBQUlWLENBQUMsR0FBRyxLQUFLQyxLQUFMLENBQVdVLEtBQVgsRUFBUjs7SUFDQSxLQUFLRixhQUFMO0lBQ0EsT0FBT1QsQ0FBUDtFQUNILENBSkQ7O0VBS0FBLENBQUMsQ0FBQ00sU0FBRixDQUFZTSxLQUFaLEdBQW9CLFVBQVVaLENBQVYsRUFBYVEsQ0FBYixFQUFnQjtJQUNoQyxJQUFJSyxDQUFDLEdBQUcsS0FBS1osS0FBTCxDQUFXYSxNQUFYLENBQWtCZCxDQUFsQixFQUFxQlEsQ0FBckIsQ0FBUjs7SUFDQSxLQUFLQyxhQUFMO0lBQ0EsT0FBT0ksQ0FBUDtFQUNILENBSkQ7O0VBS0FiLENBQUMsQ0FBQ00sU0FBRixDQUFZRyxhQUFaLEdBQTRCLFlBQVk7SUFDcEMsSUFBSVQsQ0FBQyxHQUFHSSxJQUFJLENBQUNXLFNBQUwsQ0FBZSxLQUFLZCxLQUFwQixDQUFSO0lBQ0EsT0FBT0osYUFBYSxXQUFiLENBQXNCbUIsT0FBdEIsQ0FBOEIsS0FBS2QsV0FBbkMsRUFBZ0RGLENBQWhELENBQVA7RUFDSCxDQUhEOztFQUlBQSxDQUFDLENBQUNNLFNBQUYsQ0FBWVcsR0FBWixHQUFrQixZQUFZO0lBQzFCLE9BQU8sS0FBS2hCLEtBQUwsQ0FBV2lCLE1BQWxCO0VBQ0gsQ0FGRDs7RUFHQWxCLENBQUMsQ0FBQ00sU0FBRixDQUFZYSxPQUFaLEdBQXNCLFlBQVk7SUFDOUIsT0FBTyxLQUFLbEIsS0FBWjtFQUNILENBRkQ7O0VBR0EsT0FBT0QsQ0FBUDtBQUNILENBckNZLEVBQUwsR0FBUjtBQXNDQW9CLE9BQU8sV0FBUCxHQUFrQnJCLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCIuL0xvY2FsU3RvcmFnZVwiKTtcbnZhciBvID0gbmV3ICgoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZUtleSA9IFwic2RrX3JlcG9ydF9saXN0XCI7XG4gICAgICAgIHZhciB0ID0gJGxvY2FsU3RvcmFnZS5kZWZhdWx0LmdldEl0ZW0odGhpcy5fc3RvcmFnZUtleSk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ID0gSlNPTi5wYXJzZSh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLl9saXN0LnB1c2godCk7XG4gICAgICAgIHRoaXMucmVmZXNoU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLl9saXN0LnNoaWZ0KCk7XG4gICAgICAgIHRoaXMucmVmZXNoU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLl9saXN0LnNwbGljZSh0LCBlKTtcbiAgICAgICAgdGhpcy5yZWZlc2hTdG9yYWdlKCk7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucmVmZXNoU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9saXN0KTtcbiAgICAgICAgcmV0dXJuICRsb2NhbFN0b3JhZ2UuZGVmYXVsdC5zZXRJdGVtKHRoaXMuX3N0b3JhZ2VLZXksIHQpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUubGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGg7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdDtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IG87XG4iXX0=