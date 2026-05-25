
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scripts/PoolMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00d36KZrbVKH5QNXHUhn8k/', 'PoolMgr');
// script/scripts/PoolMgr.js

"use strict";

var i = function () {
  function t() {
    this.poolMap = {};
  }

  t.prototype.get = function (t, e) {
    var o = null;
    var i = this.poolMap[e];
    (o = i && i.size() ? i.get() : cc.instantiate(t)).active = !0;
    return o;
  };

  t.prototype.put = function (t, e) {
    t.active = !1;
    var o = this.poolMap[e];

    if (o) {
      o.put(t);
    } else {
      var i = new cc.NodePool();
      this.poolMap[e] = i;
      i.put(t);
    }
  };

  t.prototype.clear = function (t) {
    this.poolMap[t].clear();
    delete this.poolMap[t];
  };

  return t;
}();

exports["default"] = i;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2NyaXB0cy9Qb29sTWdyLmpzIl0sIm5hbWVzIjpbImkiLCJ0IiwicG9vbE1hcCIsInByb3RvdHlwZSIsImdldCIsImUiLCJvIiwic2l6ZSIsImNjIiwiaW5zdGFudGlhdGUiLCJhY3RpdmUiLCJwdXQiLCJOb2RlUG9vbCIsImNsZWFyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWE7SUFDVCxLQUFLQyxPQUFMLEdBQWUsRUFBZjtFQUNIOztFQUNERCxDQUFDLENBQUNFLFNBQUYsQ0FBWUMsR0FBWixHQUFrQixVQUFVSCxDQUFWLEVBQWFJLENBQWIsRUFBZ0I7SUFDOUIsSUFBSUMsQ0FBQyxHQUFHLElBQVI7SUFDQSxJQUFJTixDQUFDLEdBQUcsS0FBS0UsT0FBTCxDQUFhRyxDQUFiLENBQVI7SUFDQSxDQUFDQyxDQUFDLEdBQUdOLENBQUMsSUFBSUEsQ0FBQyxDQUFDTyxJQUFGLEVBQUwsR0FBZ0JQLENBQUMsQ0FBQ0ksR0FBRixFQUFoQixHQUEwQkksRUFBRSxDQUFDQyxXQUFILENBQWVSLENBQWYsQ0FBL0IsRUFBa0RTLE1BQWxELEdBQTJELENBQUMsQ0FBNUQ7SUFDQSxPQUFPSixDQUFQO0VBQ0gsQ0FMRDs7RUFNQUwsQ0FBQyxDQUFDRSxTQUFGLENBQVlRLEdBQVosR0FBa0IsVUFBVVYsQ0FBVixFQUFhSSxDQUFiLEVBQWdCO0lBQzlCSixDQUFDLENBQUNTLE1BQUYsR0FBVyxDQUFDLENBQVo7SUFDQSxJQUFJSixDQUFDLEdBQUcsS0FBS0osT0FBTCxDQUFhRyxDQUFiLENBQVI7O0lBQ0EsSUFBSUMsQ0FBSixFQUFPO01BQ0hBLENBQUMsQ0FBQ0ssR0FBRixDQUFNVixDQUFOO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsSUFBSUQsQ0FBQyxHQUFHLElBQUlRLEVBQUUsQ0FBQ0ksUUFBUCxFQUFSO01BQ0EsS0FBS1YsT0FBTCxDQUFhRyxDQUFiLElBQWtCTCxDQUFsQjtNQUNBQSxDQUFDLENBQUNXLEdBQUYsQ0FBTVYsQ0FBTjtJQUNIO0VBQ0osQ0FWRDs7RUFXQUEsQ0FBQyxDQUFDRSxTQUFGLENBQVlVLEtBQVosR0FBb0IsVUFBVVosQ0FBVixFQUFhO0lBQzdCLEtBQUtDLE9BQUwsQ0FBYUQsQ0FBYixFQUFnQlksS0FBaEI7SUFDQSxPQUFPLEtBQUtYLE9BQUwsQ0FBYUQsQ0FBYixDQUFQO0VBQ0gsQ0FIRDs7RUFJQSxPQUFPQSxDQUFQO0FBQ0gsQ0ExQk8sRUFBUjs7QUEyQkFhLE9BQU8sV0FBUCxHQUFrQmQsQ0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICB0aGlzLnBvb2xNYXAgPSB7fTtcbiAgICB9XG4gICAgdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgdmFyIG8gPSBudWxsO1xuICAgICAgICB2YXIgaSA9IHRoaXMucG9vbE1hcFtlXTtcbiAgICAgICAgKG8gPSBpICYmIGkuc2l6ZSgpID8gaS5nZXQoKSA6IGNjLmluc3RhbnRpYXRlKHQpKS5hY3RpdmUgPSAhMDtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICB0LmFjdGl2ZSA9ICExO1xuICAgICAgICB2YXIgbyA9IHRoaXMucG9vbE1hcFtlXTtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgIG8ucHV0KHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGkgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgICAgICAgIHRoaXMucG9vbE1hcFtlXSA9IGk7XG4gICAgICAgICAgICBpLnB1dCh0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB0aGlzLnBvb2xNYXBbdF0uY2xlYXIoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucG9vbE1hcFt0XTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xufSkoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGk7XG4iXX0=