
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PoolUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55b2bLzvNFHE4O0FFLKGhse', 'PoolUtils');
// scripts/PoolUtils.js

"use strict";

var r = function () {
  function t() {}

  t.createPool = function (t) {
    var e = new cc.NodePool();
    this.dictPool[t.name] = e;
  };

  t.get = function (t) {
    var e = this.dictPool["" + t.name];

    if (null == e ? void 0 : e.size()) {
      return e.get();
    } else {
      if (e) {
        return cc.instantiate(t);
      } else {
        return this.createPool(t), cc.instantiate(t);
      }
    }
  };

  t.put = function (t) {
    var e = this.dictPool[t.name];

    if (e) {
      return e.put(t);
    }

    this.createPool(t);
    this.dictPool[t.name].put(t);
  };

  t.clear = function (t) {
    if (this.dictPool[t]) {
      this.dictPool[t].clear();
      delete this.dictPool[t];
    }
  };

  t.dictPool = {};
  return t;
}();

exports["default"] = r;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1Bvb2xVdGlscy5qcyJdLCJuYW1lcyI6WyJyIiwidCIsImNyZWF0ZVBvb2wiLCJlIiwiY2MiLCJOb2RlUG9vbCIsImRpY3RQb29sIiwibmFtZSIsImdldCIsInNpemUiLCJpbnN0YW50aWF0ZSIsInB1dCIsImNsZWFyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxDQUFDLEdBQUksWUFBWTtFQUNqQixTQUFTQyxDQUFULEdBQWEsQ0FBRTs7RUFDZkEsQ0FBQyxDQUFDQyxVQUFGLEdBQWUsVUFBVUQsQ0FBVixFQUFhO0lBQ3hCLElBQUlFLENBQUMsR0FBRyxJQUFJQyxFQUFFLENBQUNDLFFBQVAsRUFBUjtJQUNBLEtBQUtDLFFBQUwsQ0FBY0wsQ0FBQyxDQUFDTSxJQUFoQixJQUF3QkosQ0FBeEI7RUFDSCxDQUhEOztFQUlBRixDQUFDLENBQUNPLEdBQUYsR0FBUSxVQUFVUCxDQUFWLEVBQWE7SUFDakIsSUFBSUUsQ0FBQyxHQUFHLEtBQUtHLFFBQUwsQ0FBYyxLQUFLTCxDQUFDLENBQUNNLElBQXJCLENBQVI7O0lBQ0EsSUFBSSxRQUFRSixDQUFSLEdBQVksS0FBSyxDQUFqQixHQUFxQkEsQ0FBQyxDQUFDTSxJQUFGLEVBQXpCLEVBQW1DO01BQy9CLE9BQU9OLENBQUMsQ0FBQ0ssR0FBRixFQUFQO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsSUFBSUwsQ0FBSixFQUFPO1FBQ0gsT0FBT0MsRUFBRSxDQUFDTSxXQUFILENBQWVULENBQWYsQ0FBUDtNQUNILENBRkQsTUFFTztRQUNILE9BQU8sS0FBS0MsVUFBTCxDQUFnQkQsQ0FBaEIsR0FBb0JHLEVBQUUsQ0FBQ00sV0FBSCxDQUFlVCxDQUFmLENBQTNCO01BQ0g7SUFDSjtFQUNKLENBWEQ7O0VBWUFBLENBQUMsQ0FBQ1UsR0FBRixHQUFRLFVBQVVWLENBQVYsRUFBYTtJQUNqQixJQUFJRSxDQUFDLEdBQUcsS0FBS0csUUFBTCxDQUFjTCxDQUFDLENBQUNNLElBQWhCLENBQVI7O0lBQ0EsSUFBSUosQ0FBSixFQUFPO01BQ0gsT0FBT0EsQ0FBQyxDQUFDUSxHQUFGLENBQU1WLENBQU4sQ0FBUDtJQUNIOztJQUNELEtBQUtDLFVBQUwsQ0FBZ0JELENBQWhCO0lBQ0EsS0FBS0ssUUFBTCxDQUFjTCxDQUFDLENBQUNNLElBQWhCLEVBQXNCSSxHQUF0QixDQUEwQlYsQ0FBMUI7RUFDSCxDQVBEOztFQVFBQSxDQUFDLENBQUNXLEtBQUYsR0FBVSxVQUFVWCxDQUFWLEVBQWE7SUFDbkIsSUFBSSxLQUFLSyxRQUFMLENBQWNMLENBQWQsQ0FBSixFQUFzQjtNQUNsQixLQUFLSyxRQUFMLENBQWNMLENBQWQsRUFBaUJXLEtBQWpCO01BQ0EsT0FBTyxLQUFLTixRQUFMLENBQWNMLENBQWQsQ0FBUDtJQUNIO0VBQ0osQ0FMRDs7RUFNQUEsQ0FBQyxDQUFDSyxRQUFGLEdBQWEsRUFBYjtFQUNBLE9BQU9MLENBQVA7QUFDSCxDQWxDTyxFQUFSOztBQW1DQVksT0FBTyxXQUFQLEdBQWtCYixDQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHQoKSB7fVxuICAgIHQuY3JlYXRlUG9vbCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgIHRoaXMuZGljdFBvb2xbdC5uYW1lXSA9IGU7XG4gICAgfTtcbiAgICB0LmdldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBlID0gdGhpcy5kaWN0UG9vbFtcIlwiICsgdC5uYW1lXTtcbiAgICAgICAgaWYgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc2l6ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLmluc3RhbnRpYXRlKHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVQb29sKHQpLCBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wdXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuZGljdFBvb2xbdC5uYW1lXTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnB1dCh0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZVBvb2wodCk7XG4gICAgICAgIHRoaXMuZGljdFBvb2xbdC5uYW1lXS5wdXQodCk7XG4gICAgfTtcbiAgICB0LmNsZWFyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGljdFBvb2xbdF0pIHtcbiAgICAgICAgICAgIHRoaXMuZGljdFBvb2xbdF0uY2xlYXIoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRpY3RQb29sW3RdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LmRpY3RQb29sID0ge307XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gcjtcbiJdfQ==