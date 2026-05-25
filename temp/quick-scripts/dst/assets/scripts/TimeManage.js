
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TimeManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7b862fi75MzJjLzmuokVkX', 'TimeManage');
// scripts/TimeManage.js

"use strict";

var $function = require("./function");

var $localStorage = require("./LocalStorage");

var i = function () {
  function t() {
    this._startClientTime = "sdk_s_c_t";
    this._endClientTime = "sdk_e_c_t";
    this._firstReportServerTime = "sdk_s_b_t";
    this._firstReportClientTime = "sdk_c_b_t";
    this.lockGetFirstServerTime = "sdk_lock_get_fst";
  }

  t.prototype.setStartClientTime = function () {
    $localStorage["default"].setItem(this._startClientTime, $function.getClientTime());
  };

  t.prototype.getStartClientTime = function () {
    var t = $localStorage["default"].getItem(this._startClientTime);

    if (t > 0) {
      return t;
    } else {
      return 0;
    }
  };

  t.prototype.removeStartClientTime = function () {
    $localStorage["default"].removeItem(this._startClientTime);
  };

  t.prototype.setEndClientTime = function () {
    $localStorage["default"].setItem(this._endClientTime, $function.getClientTime());
  };

  t.prototype.getEndClientTime = function () {
    var t = $localStorage["default"].getItem(this._endClientTime);

    if (t > 0) {
      return t;
    } else {
      return 0;
    }
  };

  t.prototype.removeEndClientTime = function () {
    $localStorage["default"].removeItem(this._endClientTime);
  };

  t.prototype.getOnlineTime = function () {
    var t = this.getStartClientTime();
    var e = this.getEndClientTime();

    if (t > 0 && e > 0) {
      return e - t;
    } else {
      return 0;
    }
  };

  t.prototype.setFirstReportServerTime = function () {
    var t = this;

    if ($localStorage["default"].getItem(this.lockGetFirstServerTime)) {//
    } else {
      $localStorage["default"].setItem(this.lockGetFirstServerTime, $function.getClientTime());
      $function.getServerTime(function (e) {
        try {
          $localStorage["default"].setItem(t._firstReportServerTime, e.data.data.time);
          $localStorage["default"].removeItem(t.lockGetFirstServerTime);
        } catch (n) {}
      });
    }
  };

  t.prototype.getFirstReportServerTime = function () {
    return $localStorage["default"].getItem(this._firstReportServerTime);
  };

  t.prototype.removeFirstReportServerTime = function () {
    return $localStorage["default"].removeItem(this._firstReportServerTime);
  };

  t.prototype.setFirstReportClientTime = function () {
    $localStorage["default"].setItem(this._firstReportClientTime, $function.getClientTime());
  };

  t.prototype.getFirstReportClientTime = function () {
    return $localStorage["default"].getItem(this._firstReportClientTime);
  };

  t.prototype.removeFirstReportClientTime = function () {
    return $localStorage["default"].removeItem(this._firstReportClientTime);
  };

  return t;
}();

exports["default"] = new i();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RpbWVNYW5hZ2UuanMiXSwibmFtZXMiOlsiJGZ1bmN0aW9uIiwicmVxdWlyZSIsIiRsb2NhbFN0b3JhZ2UiLCJpIiwidCIsIl9zdGFydENsaWVudFRpbWUiLCJfZW5kQ2xpZW50VGltZSIsIl9maXJzdFJlcG9ydFNlcnZlclRpbWUiLCJfZmlyc3RSZXBvcnRDbGllbnRUaW1lIiwibG9ja0dldEZpcnN0U2VydmVyVGltZSIsInByb3RvdHlwZSIsInNldFN0YXJ0Q2xpZW50VGltZSIsInNldEl0ZW0iLCJnZXRDbGllbnRUaW1lIiwiZ2V0U3RhcnRDbGllbnRUaW1lIiwiZ2V0SXRlbSIsInJlbW92ZVN0YXJ0Q2xpZW50VGltZSIsInJlbW92ZUl0ZW0iLCJzZXRFbmRDbGllbnRUaW1lIiwiZ2V0RW5kQ2xpZW50VGltZSIsInJlbW92ZUVuZENsaWVudFRpbWUiLCJnZXRPbmxpbmVUaW1lIiwiZSIsInNldEZpcnN0UmVwb3J0U2VydmVyVGltZSIsImdldFNlcnZlclRpbWUiLCJkYXRhIiwidGltZSIsIm4iLCJnZXRGaXJzdFJlcG9ydFNlcnZlclRpbWUiLCJyZW1vdmVGaXJzdFJlcG9ydFNlcnZlclRpbWUiLCJzZXRGaXJzdFJlcG9ydENsaWVudFRpbWUiLCJnZXRGaXJzdFJlcG9ydENsaWVudFRpbWUiLCJyZW1vdmVGaXJzdFJlcG9ydENsaWVudFRpbWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsZ0JBQUQsQ0FBM0I7O0FBQ0EsSUFBSUUsQ0FBQyxHQUFJLFlBQVk7RUFDakIsU0FBU0MsQ0FBVCxHQUFhO0lBQ1QsS0FBS0MsZ0JBQUwsR0FBd0IsV0FBeEI7SUFDQSxLQUFLQyxjQUFMLEdBQXNCLFdBQXRCO0lBQ0EsS0FBS0Msc0JBQUwsR0FBOEIsV0FBOUI7SUFDQSxL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QixDQUE4QixLQUFLUixzQkFBbkMsQ0FBUDtFQUNILENBRkQ7O0VBR0FILENBQUMsQ0FBQ00sU0FBRixDQUFZbUIsMkJBQVosR0FBMEMsWUFBWTtJQUNsRCxPQUFPM0IsYUFBYSxXQUFiLENBQXNCZSxVQUF0QixDQUFpQyxLQUFLVixzQkFBdEMsQ0FBUDtFQUNILENBRkQ7O0VBR0FILENBQUMsQ0FBQ00sU0FBRixDQUFZb0Isd0JBQVosR0FBdUMsWUFBWTtJQUMvQzVCLGFBQWEsV0FBYixDQUFzQlUsT0FBdEIsQ0FBOEIsS0FBS0osc0JBQW5DLEVBQTJEUixTQUFTLENBQUNhLGFBQVYsRUFBM0Q7RUFDSCxDQUZEOztFQUdBVCxDQUFDLENBQUNNLFNBQUYsQ0FBWXFCLHdCQUFaLEdBQXVDLFlBQVk7SUFDL0MsT0FBTzdCLGFBQWEsV0FBYixDQUFzQmEsT0FBdEIsQ0FBOEIsS0FBS1Asc0JBQW5DLENBQVA7RUFDSCxDQUZEOztFQUdBSixDQUFDLENBQUNNLFNBQUYsQ0FBWXNCLDJCQUFaLEdBQTBDLFlBQVk7SUFDbEQsT0FBTzlCLGFBQWEsV0FBYixDQUFzQmUsVUFBdEIsQ0FBaUMsS0FBS1Qsc0JBQXRDLENBQVA7RUFDSCxDQUZEOztFQUdBLE9BQU9KLENBQVA7QUFDSCxDQTNFTyxFQUFSOztBQTRFQTZCLE9BQU8sV0FBUCxHQUFrQixJQUFJOUIsQ0FBSixFQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRmdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2Z1bmN0aW9uXCIpO1xudmFyICRsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VcIik7XG52YXIgaSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRDbGllbnRUaW1lID0gXCJzZGtfc19jX3RcIjtcbiAgICAgICAgdGhpcy5fZW5kQ2xpZW50VGltZSA9IFwic2RrX2VfY190XCI7XG4gICAgICAgIHRoaXMuX2ZpcnN0UmVwb3J0U2VydmVyVGltZSA9IFwic2RrX3NfYl90XCI7XG4gICAgICAgIHRoaXMuX2ZpcnN0UmVwb3J0Q2xpZW50VGltZSA9IFwic2RrX2NfYl90XCI7XG4gICAgICAgIHRoaXMubG9ja0dldEZpcnN0U2VydmVyVGltZSA9IFwic2RrX2xvY2tfZ2V0X2ZzdFwiO1xuICAgIH1cbiAgICB0LnByb3RvdHlwZS5zZXRTdGFydENsaWVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhbFN0b3JhZ2UuZGVmYXVsdC5zZXRJdGVtKHRoaXMuX3N0YXJ0Q2xpZW50VGltZSwgJGZ1bmN0aW9uLmdldENsaWVudFRpbWUoKSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRTdGFydENsaWVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gJGxvY2FsU3RvcmFnZS5kZWZhdWx0LmdldEl0ZW0odGhpcy5fc3RhcnRDbGllbnRUaW1lKTtcbiAgICAgICAgaWYgKHQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5yZW1vdmVTdGFydENsaWVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhbFN0b3JhZ2UuZGVmYXVsdC5yZW1vdmVJdGVtKHRoaXMuX3N0YXJ0Q2xpZW50VGltZSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5zZXRFbmRDbGllbnRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9jYWxTdG9yYWdlLmRlZmF1bHQuc2V0SXRlbSh0aGlzLl9lbmRDbGllbnRUaW1lLCAkZnVuY3Rpb24uZ2V0Q2xpZW50VGltZSgpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEVuZENsaWVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gJGxvY2FsU3RvcmFnZS5kZWZhdWx0LmdldEl0ZW0odGhpcy5fZW5kQ2xpZW50VGltZSk7XG4gICAgICAgIGlmICh0ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdC5wcm90b3R5cGUucmVtb3ZlRW5kQ2xpZW50VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2FsU3RvcmFnZS5kZWZhdWx0LnJlbW92ZUl0ZW0odGhpcy5fZW5kQ2xpZW50VGltZSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRPbmxpbmVUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0U3RhcnRDbGllbnRUaW1lKCk7XG4gICAgICAgIHZhciBlID0gdGhpcy5nZXRFbmRDbGllbnRUaW1lKCk7XG4gICAgICAgIGlmICh0ID4gMCAmJiBlID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGUgLSB0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEZpcnN0UmVwb3J0U2VydmVyVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICBpZiAoJGxvY2FsU3RvcmFnZS5kZWZhdWx0LmdldEl0ZW0odGhpcy5sb2NrR2V0Rmlyc3RTZXJ2ZXJUaW1lKSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2NhbFN0b3JhZ2UuZGVmYXVsdC5zZXRJdGVtKHRoaXMubG9ja0dldEZpcnN0U2VydmVyVGltZSwgJGZ1bmN0aW9uLmdldENsaWVudFRpbWUoKSk7XG4gICAgICAgICAgICAkZnVuY3Rpb24uZ2V0U2VydmVyVGltZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2UuZGVmYXVsdC5zZXRJdGVtKHQuX2ZpcnN0UmVwb3J0U2VydmVyVGltZSwgZS5kYXRhLmRhdGEudGltZSk7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhbFN0b3JhZ2UuZGVmYXVsdC5yZW1vdmVJdGVtKHQubG9ja0dldEZpcnN0U2VydmVyVGltZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAobikge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5nZXRGaXJzdFJlcG9ydFNlcnZlclRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkbG9jYWxTdG9yYWdlLmRlZmF1bHQuZ2V0SXRlbSh0aGlzLl9maXJzdFJlcG9ydFNlcnZlclRpbWUpO1xuICAgIH07XG4gICAgdC5wcm90b3R5cGUucmVtb3ZlRmlyc3RSZXBvcnRTZXJ2ZXJUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJGxvY2FsU3RvcmFnZS5kZWZhdWx0LnJlbW92ZUl0ZW0odGhpcy5fZmlyc3RSZXBvcnRTZXJ2ZXJUaW1lKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLnNldEZpcnN0UmVwb3J0Q2xpZW50VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2FsU3RvcmFnZS5kZWZhdWx0LnNldEl0ZW0odGhpcy5fZmlyc3RSZXBvcnRDbGllbnRUaW1lLCAkZnVuY3Rpb24uZ2V0Q2xpZW50VGltZSgpKTtcbiAgICB9O1xuICAgIHQucHJvdG90eXBlLmdldEZpcnN0UmVwb3J0Q2xpZW50VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICRsb2NhbFN0b3JhZ2UuZGVmYXVsdC5nZXRJdGVtKHRoaXMuX2ZpcnN0UmVwb3J0Q2xpZW50VGltZSk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZS5yZW1vdmVGaXJzdFJlcG9ydENsaWVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkbG9jYWxTdG9yYWdlLmRlZmF1bHQucmVtb3ZlSXRlbSh0aGlzLl9maXJzdFJlcG9ydENsaWVudFRpbWUpO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG59KSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IGkoKTtcbiJdfQ==